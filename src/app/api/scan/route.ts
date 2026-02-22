import { NextRequest, NextResponse } from 'next/server';
import { chromium } from 'playwright-core';
import { readFileSync } from 'fs';
import { join } from 'path';

export const runtime = 'nodejs';
export const maxDuration = 60; // Allow up to 60s for scan

// Simple in-memory rate limiting (5 scans per IP per hour)
const rateLimitMap = new Map<string, number[]>();

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

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
               request.headers.get('x-real-ip') || 
               'unknown';
    
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Maximum 5 scans per hour.' },
        { status: 429 }
      );
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
      
      // Read and inject axe-core from node_modules
      const axePath = join(process.cwd(), 'node_modules', 'axe-core', 'axe.min.js');
      const axeSource = readFileSync(axePath, 'utf8');
      
      await page.evaluate((source) => {
        eval(source);
      }, axeSource);
      
      await page.waitForTimeout(500); // Wait for axe to initialize
      
      const results = await page.evaluate(async () => {
        // @ts-expect-error - axe is loaded dynamically
        if (typeof window.axe === 'undefined') {
          throw new Error('axe-core failed to load');
        }
        // @ts-expect-error - axe is loaded dynamically
        return await window.axe.run();
      });
      
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
