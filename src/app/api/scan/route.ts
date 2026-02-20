import { NextRequest, NextResponse } from "next/server";
import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";
import { randomUUID } from "crypto";

type AxeViolation = {
  impact: "critical" | "serious" | "moderate" | "minor" | null;
  nodes: unknown[];
};

export const runtime = "nodejs";

const impactWeights: Record<NonNullable<AxeViolation["impact"]>, number> = {
  critical: 10,
  serious: 5,
  moderate: 2,
  minor: 1,
};

const gradeForScore = (score: number) => {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
};

const parseUrl = (input: string) => {
  try {
    const parsed = new URL(input);
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
      return null;
    }
    return parsed.toString();
  } catch {
    return null;
  }
};

export async function POST(request: NextRequest) {
  let browser: Awaited<ReturnType<typeof chromium.launch>> | null = null;

  try {
    const body = await request.json();
    const url = parseUrl(body?.url);

    if (!url) {
      return NextResponse.json(
        { error: "Please provide a valid http or https URL." },
        { status: 400 }
      );
    }

    browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    page.setDefaultTimeout(30000);

    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
    await page.waitForLoadState("networkidle", { timeout: 15000 }).catch(() => null);

    const results = await new AxeBuilder({ page }).analyze();

    let deductions = 0;
    for (const violation of results.violations as AxeViolation[]) {
      if (!violation.impact) continue;
      const weight = impactWeights[violation.impact];
      const count = Array.isArray(violation.nodes) ? violation.nodes.length : 0;
      deductions += weight * count;
    }

    const score = Math.max(0, Math.min(100, 100 - deductions));

    return NextResponse.json({
      id: randomUUID(),
      url,
      timestamp: new Date().toISOString(),
      score,
      grade: gradeForScore(score),
      violations: results.violations,
      passesCount: results.passes?.length ?? 0,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    const isTimeout = message.toLowerCase().includes("timeout");

    return NextResponse.json(
      {
        error: isTimeout
          ? "Scan timed out. Please try again or scan a faster page."
          : "Scan failed. Please verify the URL and try again.",
      },
      { status: isTimeout ? 504 : 500 }
    );
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}
