'use client';

import { useState } from 'react';

interface EmailCaptureProps {
  scanId?: string;
  variant?: 'full' | 'newsletter';
}

export default function EmailCapture({ scanId, variant = 'full' }: EmailCaptureProps) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<'report' | 'monitoring'>('report');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          scanId: variant === 'full' ? scanId : undefined,
          type: variant === 'full' ? selectedType : 'newsletter',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className={`rounded-2xl border ${variant === 'full' ? 'border-emerald-500/50 bg-emerald-500/10 p-8' : 'border-emerald-500/30 bg-emerald-500/10 p-6'}`}>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20">
            <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-emerald-300">
              {variant === 'full' ? "You're all set!" : 'Welcome aboard!'}
            </p>
            <p className="text-sm text-slate-400">
              {variant === 'full' 
                ? selectedType === 'report' 
                  ? "We'll send your detailed report shortly."
                  : "We'll notify you when your score changes."
                : "We'll send you accessibility tips and updates."}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Newsletter variant (simpler, for homepage)
  if (variant === 'newsletter') {
    return (
      <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6">
        <div className="flex items-center gap-2 mb-3">
          <svg className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <h3 className="font-semibold text-white">Want accessibility tips?</h3>
        </div>
        <p className="text-sm text-slate-400 mb-4">
          Join 500+ site owners getting weekly insights.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            required
            className="flex-1 rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-purple-400 focus:outline-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
          >
            {loading ? 'Joining...' : 'Join Free'}
          </button>
        </form>
        {error && <p className="mt-3 text-sm text-rose-400">{error}</p>}
      </div>
    );
  }

  // Full variant (for scan results page)
  return (
    <div className="rounded-2xl border border-slate-700/70 bg-gradient-to-br from-slate-800/80 via-slate-800/60 to-slate-900/80 p-8">
      <div className="flex items-start gap-4 mb-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30">
          <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">Get your full report</h3>
          <p className="text-sm text-slate-400 mt-1">
            Receive a detailed accessibility report with fix recommendations
          </p>
        </div>
      </div>

      {/* Type selector */}
      <div className="flex gap-3 mb-6">
        <button
          type="button"
          onClick={() => setSelectedType('report')}
          className={`flex-1 rounded-xl border px-4 py-3 text-sm font-medium transition ${
            selectedType === 'report'
              ? 'border-blue-500/50 bg-blue-500/10 text-blue-300'
              : 'border-slate-700 bg-slate-900/50 text-slate-400 hover:border-slate-600'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Email report
          </div>
        </button>
        <button
          type="button"
          onClick={() => setSelectedType('monitoring')}
          className={`flex-1 rounded-xl border px-4 py-3 text-sm font-medium transition ${
            selectedType === 'monitoring'
              ? 'border-purple-500/50 bg-purple-500/10 text-purple-300'
              : 'border-slate-700 bg-slate-900/50 text-slate-400 hover:border-slate-600'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            Notify on changes
          </div>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 py-3 font-semibold text-white transition hover:from-blue-600 hover:to-purple-700 disabled:opacity-50"
        >
          {loading ? 'Sending...' : selectedType === 'report' ? 'Send My Report' : 'Start Monitoring'}
        </button>
      </form>

      {error && <p className="mt-4 text-sm text-rose-400">{error}</p>}

      <p className="mt-4 text-center text-xs text-slate-500">
        No spam, unsubscribe anytime
      </p>
    </div>
  );
}
