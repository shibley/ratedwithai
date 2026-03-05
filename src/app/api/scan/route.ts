import { NextRequest, NextResponse } from 'next/server';
import Stripe from "stripe";
import { chromium } from 'playwright-core';

export const runtime = 'nodejs';
export const maxDuration = 60; // Allow up to 60s for scan

// Fetch and cache axe-core source at runtime for CSP-safe injection
let axeCoreSource: string | null = null;
async function getAxeCoreSource(): Promise<string> {
  if (!axeCoreSource) {
    const res = await fetch('https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.10.0/axe.min.js');
    axeCoreSource = await res.text();
  }
  return axeCoreSource;
}

// Simple in-memory rate limiting (5 scans per IP per hour)
const rateLimitMap = new Map<string, number[]>();
const proDailyLimitMap = new Map<string, number>();

function getStripe() {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY not configured");
  }
  return new Stripe(process.env.STRIPE_SECRET_KEY, {
    httpClient: Stripe.createFetchHttpClient(),
  });
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const oneHourAgo = now - 60 * 60 * 1000;
  
  const timestamps = rateLimitMap.get(ip) || [];
  const recentScans = timestamps.filter(t => t > oneHourAgo);
  
  if (recentScans.length >= 5) {
    return false;
  }
  
  recentScans.push(now);
  rateLimitMap.set(ip, recentScans);
  
  return true;
}

function checkProDailyLimit(email: string): boolean {
  const dayKey = new Date().toISOString().slice(0, 10);
  const key = `${email.toLowerCase()}|${dayKey}`;
  const current = proDailyLimitMap.get(key) ?? 0;

  if (current >= 100) {
    return false;
  }

  proDailyLimitMap.set(key, current + 1);
  return true;
}

function validateUrl(urlString: string): boolean {
  try {
    const url = new URL(urlString);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

interface ViolationWithImpact {
  impact?: string | null;
  nodes?: unknown[];
}

function calculateScore(violations: ViolationWithImpact[]): { score: number; grade: string } {
  let score = 100;
  
  for (const violation of violations) {
    const count = violation.nodes?.length || 1;
    
    switch (violation.impact) {
      case 'critical':
        score -= count * 10;
        break;
      case 'serious':
        score -= count * 5;
        break;
      case 'moderate':
        score -= count * 2;
        break;
      case 'minor':
        score -= count * 1;
        break;
    }
  }
  
  score = Math.max(0, score);
  
  let grade = 'F';
  if (score >= 90) grade = 'A';
  else if (score >= 80) grade = 'B';
  else if (score >= 70) grade = 'C';
  else if (score >= 60) grade = 'D';
  
  return { score, grade };
}

type ActivePlan = "pro" | "business" | null;

async function getActivePlanForEmail(email: string): Promise<ActivePlan> {
  if (!process.env.STRIPE_SECRET_KEY) {
    return null;
  }

  const proPriceId = process.env.STRIPE_PRO_PRICE_ID;
  const businessPriceId = process.env.STRIPE_BUSINESS_PRICE_ID;
  const stripe = getStripe();

  const customers = await stripe.customers.list({ email, limit: 10 });
  if (!customers.data.length) {
    return null;
  }

  let foundPlan: ActivePlan = null;

  for (const customer of customers.data) {
    const subs = await stripe.subscriptions.list({
      customer: customer.id,
      status: "active",
      limit: 100,
    });

    for (const sub of subs.data) {
      for (const item of sub.items.data) {
        const priceId = item.price?.id;
        if (businessPriceId && priceId === businessPriceId) {
          return "business";
        }
        if (proPriceId && priceId === proPriceId) {
          foundPlan = "pro";
        }
      }
    }
  }

  return foundPlan;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
               request.headers.get('x-real-ip') || 
               'unknown';

    const emailParam = request.nextUrl.searchParams.get("email")?.trim() || "";
    const email = emailParam.includes("@") ? emailParam.toLowerCase() : "";
    let activePlan: ActivePlan = null;

    if (email) {
      try {
        activePlan = await getActivePlanForEmail(email);
      } catch (error) {
        console.error("Stripe lookup failed:", error);
        activePlan = null;
      }
    }

    if (activePlan === "pro") {
      if (!checkProDailyLimit(email)) {
        return NextResponse.json(
          { error: "Daily Pro scan limit reached (100/day)." },
          { status: 429 }
        );
      }
    } else if (activePlan !== "business") {
      if (!checkRateLimit(ip)) {
        return NextResponse.json(
          { error: 'Rate limit exceeded. Maximum 5 scans per hour.' },
          { status: 429 }
        );
      }
    }

    const body = await request.json();
    const { url } = body;
    
    if (!url || typeof url !== 'string') {
      return NextResponse.json(
        { error: 'URL is required' },
        { status: 400 }
      );
    }
    
    if (!validateUrl(url)) {
      return NextResponse.json(
        { error: 'Invalid URL format. Must start with http:// or https://' },
        { status: 400 }
      );
    }

    const browserlessToken = process.env.BROWSERLESS_TOKEN;
    if (!browserlessToken) {
      console.error('BROWSERLESS_TOKEN not configured');
      return NextResponse.json(
        { error: 'Scanner not configured. Please contact support.' },
        { status: 503 }
      );
    }
    
    let browser;
    try {
      // Connect to Browserless.io via CDP
      browser = await chromium.connectOverCDP(
        `wss://production-sfo.browserless.io?token=${browserlessToken}`
      );
      
      const context = await browser.newContext({
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      });
      
      const page = await context.newPage();
      
      await page.goto(url, {
        waitUntil: 'domcontentloaded',
        timeout: 30000,
      });
      
      await page.waitForTimeout(2000);
      
      // Inject axe-core via page.evaluate to fully bypass CSP
      // (addScriptTag with content or URL both get blocked by strict CSP)
      const axeSource = await getAxeCoreSource();
      
      const results = await page.evaluate(async (source: string) => {
        // Execute axe-core source in page context (bypasses CSP)
        const fn = new Function(source);
        fn();
        
        // @ts-expect-error - axe is loaded dynamically
        if (typeof window.axe === 'undefined') {
          throw new Error('axe-core failed to load');
        }
        // @ts-expect-error - axe is loaded dynamically
        return await window.axe.run();
      }, axeSource);
      
      const { score, grade } = calculateScore(results.violations);
      
      const scanId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      
      interface AxeNode {
        html: string;
        target: string[];
        failureSummary: string;
      }
      
      interface AxeViolation {
        id: string;
        impact: string;
        description: string;
        help: string;
        helpUrl: string;
        tags: string[];
        nodes: AxeNode[];
      }
      
      const violations = (results.violations as AxeViolation[]).map((v) => ({
        id: v.id,
        impact: v.impact,
        description: v.description,
        help: v.help,
        helpUrl: v.helpUrl,
        tags: v.tags,
        nodes: v.nodes.map((n) => ({
          html: n.html,
          target: n.target,
          failureSummary: n.failureSummary,
        })),
      }));
      
      await browser.close();
      
      return NextResponse.json({
        id: scanId,
        url,
        score,
        grade,
        violations,
        violationsCount: violations.length,
        passesCount: results.passes.length,
        incompleteCount: results.incomplete.length,
        timestamp: new Date().toISOString(),
      });
      
    } catch (browserError: unknown) {
      if (browser) {
        await browser.close();
      }
      
      const errorMessage = browserError instanceof Error ? browserError.message : '';
      console.error('Browser error:', errorMessage);
      
      if (errorMessage.includes('Timeout') || errorMessage.includes('timeout')) {
        return NextResponse.json(
          { error: 'Website took too long to load. Please try again.' },
          { status: 408 }
        );
      }
      
      if (errorMessage.includes('net::ERR_NAME_NOT_RESOLVED') ||
          errorMessage.includes('net::ERR_CONNECTION_REFUSED')) {
        return NextResponse.json(
          { error: 'Could not reach the website. Please check the URL and try again.' },
          { status: 400 }
        );
      }
      
      throw browserError;
    }
    
  } catch (error: unknown) {
    console.error('Scan error:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred during scanning';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
