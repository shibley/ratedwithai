import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// Lazy initialize Stripe to avoid build-time errors
function getStripe() {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY not configured");
  }
  return new Stripe(process.env.STRIPE_SECRET_KEY);
}

// Price IDs mapped to plan names (configure these in Stripe Dashboard)
function getPriceIds() {
  return {
    pro: process.env.STRIPE_PRO_PRICE_ID!,
    business: process.env.STRIPE_BUSINESS_PRICE_ID!,
  };
}

// Get authenticated user - handles missing Clerk gracefully
async function getAuthUserId(): Promise<string | null> {
  if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
    return null;
  }
  try {
    const { auth } = await import("@clerk/nextjs/server");
    const { userId } = await auth();
    return userId;
  } catch {
    return null;
  }
}

export async function POST(request: NextRequest) {
  try {
    // Auth is optional — allow guest checkout when Clerk isn't configured
    const userId = await getAuthUserId();

    const body = await request.json();
    const { plan } = body;

    const priceIds = getPriceIds();
    if (!plan || !priceIds[plan as keyof typeof priceIds]) {
      return NextResponse.json(
        { error: "Invalid plan selected" },
        { status: 400 }
      );
    }

    // Check if Stripe is configured
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: "Payment system not configured" },
        { status: 503 }
      );
    }

    const stripe = getStripe();

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceIds[plan as keyof typeof priceIds],
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL || 'https://ratedwithai.com'}/pricing?checkout=success`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || 'https://ratedwithai.com'}/pricing?checkout=cancelled`,
      metadata: {
        ...(userId ? { userId } : {}),
        plan,
      },
      // Collect email for guest checkout (needed to identify customer)
      customer_email: undefined,
      // Allow promotion codes
      allow_promotion_codes: true,
      // Collect billing address
      billing_address_collection: "required",
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    
    if (error instanceof Stripe.errors.StripeError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.statusCode || 500 }
      );
    }

    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
