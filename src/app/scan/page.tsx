"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ScanResult {
  id: string;
  url: string;
  score: number;
  grade: "A" | "B" | "C" | "D" | "F";
  violations: Array<{
    id: string;
    impact: string;
    description: string;
    help: string;
    helpUrl: string;
    tags: string[];
    nodes: Array<{ html: string; target: string[]; failureSummary: string }>;
  }>;
  violationsCount: number;
  passesCount: number;
  incompleteCount: number;
  timestamp: string;
}

const gradeColors: Record<string, string> = {
  A: "text-emerald-400",
  B: "text-sky-400",
  C: "text-amber-400",
  D: "text-orange-400",
  F: "text-rose-400",
};

export default function ScanPage() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ScanResult | null>(null);
  const router = useRouter();

  const handleScan = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setResult(null);
    setLoading(true);

    try {
      const response = await fetch("/api/scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload?.error || "Scan failed. Please try again.");
      }

      setResult(payload as ScanResult);
      // Store for the results page
      localStorage.setItem("scanResult", JSON.stringify(payload));
    } catch (err) {
      const message = err instanceof Error ? err.message : "Scan failed.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />

      <main className="relative z-10 mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl mb-4">
          Free Accessibility Scanner
        </h1>
        <p className="text-lg text-slate-300 mb-8">
          Enter any public URL to get an instant ADA &amp; WCAG compliance report powered by axe-core.
        </p>

        <form
          onSubmit={handleScan}
          className="flex flex-col gap-3 rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 backdrop-blur md:flex-row md:items-center"
        >
          <input
            type="url"
            name="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://yourwebsite.com"
            className="w-full flex-1 rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="rounded-xl bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01]"
            disabled={loading}
          >
            {loading ? "Scanning…" : "Scan Now"}
          </button>
        </form>

        {error && <p className="mt-4 text-sm text-rose-300">{error}</p>}

        {result && (
          <div className="mt-10 space-y-6 rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 backdrop-blur">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Results for</p>
                <p className="text-lg font-semibold text-white truncate max-w-md">{result.url}</p>
              </div>
              <div className="text-center">
                <p className={`text-4xl font-bold ${gradeColors[result.grade] || "text-white"}`}>
                  {result.grade}
                </p>
                <p className="text-sm text-slate-400">{result.score}/100</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="rounded-xl bg-slate-800/50 p-4">
                <p className="text-2xl font-bold text-rose-400">{result.violationsCount}</p>
                <p className="text-xs text-slate-400">Violations</p>
              </div>
              <div className="rounded-xl bg-slate-800/50 p-4">
                <p className="text-2xl font-bold text-emerald-400">{result.passesCount}</p>
                <p className="text-xs text-slate-400">Passed</p>
              </div>
              <div className="rounded-xl bg-slate-800/50 p-4">
                <p className="text-2xl font-bold text-amber-400">{result.incompleteCount}</p>
                <p className="text-xs text-slate-400">Needs Review</p>
              </div>
            </div>

            {result.violations.length > 0 && (
              <div className="space-y-3">
                <h2 className="text-lg font-semibold text-white">Top Issues</h2>
                {result.violations.slice(0, 5).map((v) => (
                  <div key={v.id} className="rounded-xl border border-slate-800/50 bg-slate-800/30 p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-medium text-white">{v.help}</p>
                        <p className="mt-1 text-sm text-slate-400">{v.description}</p>
                      </div>
                      <span
                        className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${
                          v.impact === "critical"
                            ? "bg-rose-500/20 text-rose-300"
                            : v.impact === "serious"
                            ? "bg-orange-500/20 text-orange-300"
                            : "bg-amber-500/20 text-amber-300"
                        }`}
                      >
                        {v.impact}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <button
              onClick={() => router.push(`/scan/${result.id}`)}
              className="w-full rounded-xl bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01]"
            >
              View Full Report →
            </button>
          </div>
        )}

        <div className="mt-12 space-y-6 text-slate-400 text-sm">
          <h2 className="text-xl font-semibold text-white">How it works</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-800/50 bg-slate-900/40 p-5">
              <p className="text-2xl mb-2">🔍</p>
              <p className="font-medium text-white mb-1">Enter URL</p>
              <p>Paste any public webpage URL to start the scan.</p>
            </div>
            <div className="rounded-xl border border-slate-800/50 bg-slate-900/40 p-5">
              <p className="text-2xl mb-2">⚡</p>
              <p className="font-medium text-white mb-1">Instant Analysis</p>
              <p>We run axe-core in a real browser to catch actual accessibility issues.</p>
            </div>
            <div className="rounded-xl border border-slate-800/50 bg-slate-900/40 p-5">
              <p className="text-2xl mb-2">📊</p>
              <p className="font-medium text-white mb-1">Get Your Report</p>
              <p>Receive a detailed report with your score, grade, and specific issues to fix.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
