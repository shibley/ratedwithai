"use client";

import { useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type AxeNode = {
  target?: string[];
};

type AxeViolation = {
  id: string;
  impact: "critical" | "serious" | "moderate" | "minor" | null;
  description: string;
  help: string;
  tags: string[];
  nodes: AxeNode[];
};

type ScanResult = {
  id: string;
  url: string;
  timestamp: string;
  score: number;
  grade: "A" | "B" | "C" | "D" | "F";
  violations: AxeViolation[];
  passesCount: number;
};

const severityOrder = ["critical", "serious", "moderate", "minor"] as const;
const severityLabels: Record<(typeof severityOrder)[number], string> = {
  critical: "Critical",
  serious: "Serious",
  moderate: "Moderate",
  minor: "Minor",
};

const severityStyles: Record<(typeof severityOrder)[number], string> = {
  critical: "border-red-500/60 bg-red-500/10 text-red-200",
  serious: "border-orange-400/60 bg-orange-400/10 text-orange-100",
  moderate: "border-amber-300/60 bg-amber-300/10 text-amber-100",
  minor: "border-sky-300/60 bg-sky-300/10 text-sky-100",
};

const gradeStyles: Record<ScanResult["grade"], string> = {
  A: "from-emerald-400 to-teal-300 text-emerald-100",
  B: "from-sky-400 to-indigo-300 text-sky-100",
  C: "from-amber-300 to-orange-300 text-amber-50",
  D: "from-orange-400 to-rose-400 text-orange-50",
  F: "from-rose-500 to-red-500 text-rose-50",
};

export default function Home() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ScanResult | null>(null);

  const groupedViolations = useMemo(() => {
    if (!result) return null;
    const groups: Record<(typeof severityOrder)[number], AxeViolation[]> = {
      critical: [],
      serious: [],
      moderate: [],
      minor: [],
    };
    for (const violation of result.violations) {
      if (violation.impact && groups[violation.impact]) {
        groups[violation.impact].push(violation);
      }
    }
    return groups;
  }, [result]);

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
    } catch (err) {
      const message = err instanceof Error ? err.message : "Scan failed.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="relative overflow-hidden">
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-sky-500/40 via-blue-500/20 to-purple-500/40 blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-gradient-to-tr from-indigo-500/30 via-blue-500/10 to-purple-500/30 blur-3xl" />

        <Header />

        <section className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-24 pt-10 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              ADA + WCAG snapshot in seconds
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Get Your Website Accessibility Score
            </h1>
            <p className="max-w-xl text-lg text-slate-300">
              RatedWithAI runs a fast accessibility scan powered by axe-core and AI-driven
              insights. Spot critical issues, understand WCAG criteria, and unlock monitoring
              alerts in minutes.
            </p>
            <form
              onSubmit={handleScan}
              className="flex flex-col gap-3 rounded-2xl border border-slate-800/70 bg-slate-900/60 p-4 backdrop-blur md:flex-row md:items-center"
            >
              <input
                type="url"
                name="url"
                value={url}
                onChange={(event) => setUrl(event.target.value)}
                placeholder="https://yourwebsite.com"
                className="w-full flex-1 rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="rounded-xl bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01]"
                disabled={loading}
              >
                {loading ? "Scanning..." : "Scan Now"}
              </button>
            </form>
            {error && (
              <p className="text-sm text-rose-300">{error}</p>
            )}
            <div className="flex flex-wrap gap-6 text-sm text-slate-400">
              <div>
                <p className="text-lg font-semibold text-white">15s</p>
                <p>Average scan time</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-white">2.1M+</p>
                <p>Issues detected</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-white">SOC 2 Ready</p>
                <p>Enterprise security</p>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="rounded-3xl border border-slate-800/70 bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-slate-900/80 p-8 shadow-xl">
              <div className="flex items-center justify-between">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                  Live snapshot
                </p>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                  Ready
                </span>
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between text-sm text-slate-300">
                  <span>WCAG 2.1 coverage</span>
                  <span className="text-white">AA</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-sky-400 to-purple-500" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { label: "Critical blockers", value: "3" },
                    { label: "Serious issues", value: "9" },
                    { label: "Moderate issues", value: "14" },
                    { label: "Minor issues", value: "22" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-4 text-sm"
                    >
                      <p className="text-slate-400">{item.label}</p>
                      <p className="mt-2 text-2xl font-semibold text-white">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
                <button className="w-full rounded-xl border border-slate-700/60 bg-slate-950/60 py-3 text-sm text-slate-200 transition hover:border-slate-400">
                  Download sample report
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section
        id="how-it-works"
        className="mx-auto w-full max-w-6xl px-6 pb-20"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Paste your URL",
              body: "Enter any public page and start a real browser scan with Playwright.",
            },
            {
              title: "Run axe-core checks",
              body: "We validate WCAG criteria, ARIA labels, contrast, and navigation order.",
            },
            {
              title: "Get your score",
              body: "See weighted severity deductions, grouped violations, and a grade.",
            },
          ].map((step, index) => (
            <div
              key={step.title}
              className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-6"
            >
              <p className="text-sm text-slate-400">Step {index + 1}</p>
              <h3 className="mt-4 text-xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-slate-300">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8 text-center sm:grid-cols-3">
          {[
            { label: "Sites monitored", value: "4,300+" },
            { label: "Average score lift", value: "+28" },
            { label: "Reports shared", value: "19k" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-semibold text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="why" className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
            <h2 className="text-2xl font-semibold text-white">
              Why teams choose RatedWithAI
            </h2>
            <p className="mt-4 text-sm text-slate-300">
              Go beyond a simple checklist. RatedWithAI gives you clear, prioritized
              fixes with a monitoring roadmap that keeps you compliant after launch.
            </p>
            <div className="mt-6 grid gap-4">
              {[
                "WCAG-aligned scoring with severity weighting",
                "Repeatable scans with shareable reports",
                "Monitoring alerts for regressions",
                "Built for fast teams shipping weekly",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-slate-800/70 bg-slate-950/60 p-4"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-sky-400 to-purple-500" />
                  <p className="text-sm text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-800/70 bg-gradient-to-br from-slate-900 via-slate-900/60 to-slate-950 p-8">
            <p className="text-sm text-slate-400">Monitoring preview</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">
              Stay ahead of accessibility regressions
            </h3>
            <p className="mt-3 text-sm text-slate-300">
              Daily diffs, severity alerts, and remediation guides keep your team
              on track without slowing releases.
            </p>
            <div className="mt-6 space-y-3 text-sm text-slate-300">
              {[
                "Daily or weekly scheduled scans",
                "Instant alerts via email or Slack",
                "Exportable compliance reports",
                "Collaboration for agencies",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <button className="mt-6 w-full rounded-xl bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white">
              See monitoring plans
            </button>
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              Pricing preview
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Plans that scale</h2>
          </div>
          <button className="rounded-full border border-slate-700/60 px-5 py-2 text-sm text-slate-200 transition hover:border-slate-400">
            Talk to sales
          </button>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            {
              name: "Free",
              price: "$0",
              body: "Single scan and shareable report.",
              highlight: false,
            },
            {
              name: "Starter",
              price: "$29/mo",
              body: "Weekly monitoring, alerts, and 50 pages.",
              highlight: true,
            },
            {
              name: "Pro",
              price: "$79/mo",
              body: "Daily monitoring, 500 pages, and API access.",
              highlight: false,
            },
          ].map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border p-6 ${
                plan.highlight
                  ? "border-sky-400/60 bg-gradient-to-br from-slate-900 via-slate-900/60 to-slate-950"
                  : "border-slate-800/70 bg-slate-900/60"
              }`}
            >
              <p className="text-sm text-slate-400">{plan.name}</p>
              <p className="mt-3 text-3xl font-semibold text-white">{plan.price}</p>
              <p className="mt-2 text-sm text-slate-300">{plan.body}</p>
              <button
                className={`mt-6 w-full rounded-xl py-3 text-sm font-semibold transition ${
                  plan.highlight
                    ? "bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 text-slate-950"
                    : "border border-slate-700/60 text-slate-200 hover:border-slate-400"
                }`}
              >
                {plan.highlight ? "Start monitoring" : "Learn more"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {result && groupedViolations && (
        <section className="mx-auto w-full max-w-6xl px-6 pb-24">
          <div className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm text-slate-400">Scan complete</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  {result.url}
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  {new Date(result.timestamp).toLocaleString()}
                </p>
              </div>
              <div className="flex items-center gap-6">
                <div
                  className={`flex h-28 w-28 flex-col items-center justify-center rounded-full bg-gradient-to-br ${
                    gradeStyles[result.grade]
                  } shadow-lg`}
                >
                  <p className="text-3xl font-semibold">{result.score}</p>
                  <p className="text-sm font-semibold">Grade {result.grade}</p>
                </div>
                <div className="text-sm text-slate-300">
                  <p>
                    Violations: {result.violations.length}
                  </p>
                  <p>Passes: {result.passesCount}</p>
                </div>
              </div>
            </div>

            <div className="mt-10 space-y-6">
              {severityOrder.map((severity) => {
                const items = groupedViolations[severity];
                if (!items.length) return null;
                return (
                  <div key={severity}>
                    <div className="flex items-center gap-3">
                      <span
                        className={`rounded-full border px-3 py-1 text-xs uppercase tracking-[0.2em] ${
                          severityStyles[severity]
                        }`}
                      >
                        {severityLabels[severity]}
                      </span>
                      <p className="text-xs text-slate-400">
                        {items.length} issues
                      </p>
                    </div>
                    <div className="mt-4 grid gap-4">
                      {items.map((violation) => {
                        const target = violation.nodes?.[0]?.target?.[0] ?? "N/A";
                        const wcag = violation.tags
                          .filter((tag) => tag.startsWith("wcag"))
                          .join(", ");
                        return (
                          <div
                            key={violation.id}
                            className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-5"
                          >
                            <div className="flex flex-wrap items-center justify-between gap-4">
                              <h4 className="text-lg font-semibold text-white">
                                {violation.description}
                              </h4>
                              <span className="text-xs text-slate-400">
                                Affected elements: {violation.nodes.length}
                              </span>
                            </div>
                            <p className="mt-2 text-sm text-slate-300">
                              {violation.help}
                            </p>
                            <div className="mt-4 grid gap-3 text-xs text-slate-400 sm:grid-cols-3">
                              <div>
                                <p className="text-slate-500">Element</p>
                                <p className="mt-1 break-all text-slate-200">
                                  {target}
                                </p>
                              </div>
                              <div>
                                <p className="text-slate-500">WCAG</p>
                                <p className="mt-1 text-slate-200">
                                  {wcag || "Not tagged"}
                                </p>
                              </div>
                              <div>
                                <p className="text-slate-500">Rule</p>
                                <p className="mt-1 text-slate-200">
                                  {violation.id}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-800/70 bg-gradient-to-r from-slate-900 via-slate-900/70 to-slate-950 p-6 md:flex-row md:items-center">
              <div>
                <p className="text-sm text-slate-400">Ready for monitoring?</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Track your score weekly and catch regressions instantly.
                </p>
              </div>
              <button className="rounded-xl bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 px-6 py-3 text-sm font-semibold text-slate-950">
                Get Monitoring
              </button>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
