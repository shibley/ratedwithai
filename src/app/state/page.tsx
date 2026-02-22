import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { states } from "@/data/states";

export const metadata: Metadata = {
  title: "ADA Lawsuits by State | Website Accessibility Data for All 50 States | RatedWithAI",
  description:
    "State-by-state ADA website lawsuit data, trends, and compliance guides. See federal filing counts, top industries targeted, and how to protect your business in every state.",
  openGraph: {
    title: "ADA Lawsuits by State | RatedWithAI",
    description:
      "State-by-state ADA website lawsuit data, trends, and compliance guides for all 50 states.",
    type: "website",
  },
};

const trendIcons: Record<string, { icon: string; color: string }> = {
  increasing: { icon: "↑", color: "text-red-400" },
  decreasing: { icon: "↓", color: "text-emerald-400" },
  stable: { icon: "→", color: "text-amber-400" },
};

export default function StateIndexPage() {
  const sortedStates = [...states].sort((a, b) => a.name.localeCompare(b.name));

  const totalLawsuits = states.reduce((sum, s) => sum + s.lawsuitStats.total2024, 0);
  const increasingStates = states.filter((s) => s.lawsuitStats.trend === "increasing").length;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-12">
        {/* Hero */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              ADA Lawsuits by State
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Website accessibility lawsuit data for every state. See filing trends,
            top targeted industries, and state-specific compliance requirements.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-10 grid grid-cols-3 gap-4 sm:gap-6">
          <div className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-4 text-center">
            <p className="text-2xl font-bold text-sky-400 sm:text-3xl">{states.length}</p>
            <p className="mt-1 text-xs text-slate-400 sm:text-sm">States Covered</p>
          </div>
          <div className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-4 text-center">
            <p className="text-2xl font-bold text-red-400 sm:text-3xl">{totalLawsuits.toLocaleString()}</p>
            <p className="mt-1 text-xs text-slate-400 sm:text-sm">Total 2024 Lawsuits</p>
          </div>
          <div className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-4 text-center">
            <p className="text-2xl font-bold text-amber-400 sm:text-3xl">{increasingStates}</p>
            <p className="mt-1 text-xs text-slate-400 sm:text-sm">States Trending Up</p>
          </div>
        </div>

        {/* State Grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sortedStates.map((state) => {
            const trend = trendIcons[state.lawsuitStats.trend];
            return (
              <Link
                key={state.slug}
                href={`/state/${state.slug}`}
                className="group flex items-center justify-between rounded-xl border border-slate-800/60 bg-slate-900/40 px-5 py-4 transition hover:border-slate-700 hover:bg-slate-900/70"
              >
                <div className="flex-1">
                  <h2 className="font-semibold text-slate-100 transition group-hover:text-white">
                    {state.name}
                  </h2>
                  <div className="mt-1 flex items-center gap-3 text-xs text-slate-400">
                    <span>{state.lawsuitStats.total2024.toLocaleString()} lawsuits</span>
                    <span className={`flex items-center gap-0.5 ${trend.color}`}>
                      {trend.icon} {Math.abs(state.lawsuitStats.trendPercent)}%
                    </span>
                  </div>
                </div>
                <svg
                  className="h-4 w-4 shrink-0 text-slate-600 transition group-hover:text-sky-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl border border-slate-800/60 bg-gradient-to-br from-slate-900 to-slate-950 p-8 text-center">
          <h2 className="mb-3 text-2xl font-bold">Protect Your Business</h2>
          <p className="mb-6 text-slate-400">
            ADA lawsuits are increasing in most states. Scan your website now to identify and fix accessibility issues before they become legal problems.
          </p>
          <Link
            href="/scan"
            className="inline-block rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
          >
            Free Accessibility Scan →
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
