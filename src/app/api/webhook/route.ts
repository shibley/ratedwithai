import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// Lazy initialize Stripe to avoid build-time errors
function getStripe() {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY not configured");
  }
  return new Stripe(process.env.STRIPE_SECRET_KEY, {
    httpClient: Stripe.createFetchHttpClient(),
  });
}

const RESEND_API_KEY = process.env.RESEND_API_KEY || "re_4MRdkoe5_LqmGfhpGvN7uGtghDN3zNx1k";
const RESEND_FROM = "Shibley <shibley@apistatuscheck.com>";

async function sendWelcomeEmail(to: string) {
  const payload = {
    from: RESEND_FROM,
    to,
    subject: "Welcome to RatedWithAI Pro!",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>Welcome to RatedWithAI Pro!</h2>
        <p>Thanks for subscribing. You now have access to Pro scan limits.</p>
        <p>When you run a scan, enter this email address to unlock your Pro scans.</p>
        <p>If you need help, just reply to this email.</p>
      </div>
    `,
  };

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("Resend error:", response.status, text);
    }
  } catch (error) {
    console.error("Resend request failed:", error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get("stripe-signature");

    if (!signature) {
      return NextResponse.json(
        { error: "Missing stripe-signature header" },
        { status: 400 }
      );
    }

    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    if (!webhookSecret) {
      console.error("STRIPE_WEBHOOK_SECRET not configured");
      return NextResponse.json(
        { error: "Webhook not configured" },
        { status: 503 }
      );
    }

    const stripe = getStripe();

    // Verify webhook signature
    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      console.error("Webhook signature verification failed:", message);
      return NextResponse.json(
        { error: `Webhook Error: ${message}` },
        { status: 400 }
      );
    }

    // Handle different event types
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        await handleCheckoutComplete(session);
        break;
      }

      case "customer.subscription.created": {
        const subscription = event.data.object as Stripe.Subscription;
        await handleSubscriptionCreated(subscription);
        break;
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription;
        await handleSubscriptionUpdated(subscription);
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        await handleSubscriptionCancelled(subscription);
        break;
      }

      case "invoice.payment_succeeded": {
        const invoice = event.data.object as Stripe.Invoice;
        await handlePaymentSucceeded(invoice);
        break;
      }

      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice;
        await handlePaymentFailed(invoice);
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 }
    );
  }
}

// Handler functions - implement these based on your database/user management
async function handleCheckoutComplete(session: Stripe.Checkout.Session) {
  const plan = session.metadata?.plan;
  const customerId = session.customer as string;
  const subscriptionId = session.subscription as string;
  const email = session.customer_details?.email || session.customer_email || "";
  const ratedWithAiPriceIds = [
    process.env.STRIPE_PRO_PRICE_ID,
    process.env.STRIPE_BUSINESS_PRICE_ID,
  ].filter((priceId): priceId is string => Boolean(priceId));

  console.log("Checkout complete:", { plan, customerId, subscriptionId, email });

  const stripe = getStripe();
  const lineItems = await stripe.checkout.sessions.listLineItems(session.id, {
    limit: 100,
  });
  const isRatedWithAiCheckout = lineItems.data.some(
    (item) => item.price?.id && ratedWithAiPriceIds.includes(item.price.id)
  );

  if (!isRatedWithAiCheckout) {
    console.log("Ignoring non-RatedWithAI checkout", {
      sessionId: session.id,
      priceIds: lineItems.data
        .map((item) => item.price?.id)
        .filter((priceId): priceId is string => Boolean(priceId)),
    });
    return;
  }

  if (email) {
    await sendWelcomeEmail(email);
  } else {
    console.warn("Checkout completed without customer email.");
  }
}

async function handleSubscriptionCreated(subscription: Stripe.Subscription) {
  console.log("Subscription created:", subscription.id);
}

async function handleSubscriptionUpdated(subscription: Stripe.Subscription) {
  console.log("Subscription updated:", subscription.id, subscription.status);
}

async function handleSubscriptionCancelled(subscription: Stripe.Subscription) {
  console.log("Subscription cancelled:", subscription.id);
}

async function handlePaymentSucceeded(invoice: Stripe.Invoice) {
  console.log("Payment succeeded for invoice:", invoice.id);
}

async function handlePaymentFailed(invoice: Stripe.Invoice) {
  console.log("Payment failed for invoice:", invoice.id);
}
