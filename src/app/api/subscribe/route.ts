import { NextRequest, NextResponse } from 'next/server';
import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

interface Subscriber {
  email: string;
  scanId?: string;
  type: 'report' | 'monitoring' | 'newsletter';
  timestamp: string;
  ip?: string;
}

const SUBSCRIBERS_FILE = join(process.cwd(), 'data', 'subscribers.json');

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function loadSubscribers(): Subscriber[] {
  try {
    if (existsSync(SUBSCRIBERS_FILE)) {
      const data = readFileSync(SUBSCRIBERS_FILE, 'utf-8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error loading subscribers:', error);
  }
  return [];
}

function saveSubscribers(subscribers: Subscriber[]): void {
  try {
    // Ensure data directory exists
    const dataDir = join(process.cwd(), 'data');
    if (!existsSync(dataDir)) {
      mkdirSync(dataDir, { recursive: true });
    }
    writeFileSync(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2));
  } catch (error) {
    console.error('Error saving subscribers:', error);
    throw error;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, scanId, type } = body;

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate type
    const validTypes = ['report', 'monitoring', 'newsletter'];
    if (!type || !validTypes.includes(type)) {
      return NextResponse.json(
        { error: 'Invalid subscription type' },
        { status: 400 }
      );
    }

    // Get IP for logging
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
               request.headers.get('x-real-ip') || 
               'unknown';

    // Create subscriber entry
    const subscriber: Subscriber = {
      email: email.toLowerCase().trim(),
      scanId: scanId || undefined,
      type,
      timestamp: new Date().toISOString(),
      ip,
    };

    // Load existing subscribers and add new one
    const subscribers = loadSubscribers();
    
    // Check for duplicate (same email + type combination within last hour)
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    const recentDuplicate = subscribers.find(
      s => s.email === subscriber.email && 
           s.type === subscriber.type && 
           s.timestamp > oneHourAgo
    );

    if (recentDuplicate) {
      return NextResponse.json(
        { error: 'You recently subscribed with this email. Please check your inbox.' },
        { status: 429 }
      );
    }

    subscribers.push(subscriber);
    saveSubscribers(subscribers);

    // Log for visibility
    console.log(`[Subscribe] New ${type} subscription:`, {
      email: subscriber.email,
      scanId: subscriber.scanId,
      type: subscriber.type,
    });

    return NextResponse.json({
      success: true,
      message: type === 'report' 
        ? 'Report will be sent to your email shortly'
        : type === 'monitoring'
        ? 'You will be notified when your score changes'
        : 'Welcome! You will receive accessibility tips and updates',
    });

  } catch (error) {
    console.error('Subscribe error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    );
  }
}
