import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "ADA Compliance by Industry | 33 Industry-Specific Guides | RatedWithAI",
  description:
    "Industry-specific ADA compliance guides covering accessibility requirements, common violations, lawsuit risk, and compliance checklists for 33 industries.",
  openGraph: {
    title: "ADA Compliance by Industry | RatedWithAI",
    description:
      "Industry-specific ADA compliance guides for 33 industries. Requirements, common violations, and checklists.",
    type: "website",
  },
};

const riskColors = {
  high: "bg-red-500/15 text-red-300 border-red-500/30",
  medium: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  low: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
};

const riskLabels = {
  high: "High Risk",
  medium: "Medium Risk",
  low: "Low Risk",
};

export default function IndustryIndexPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-12">
        {/* Hero */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              ADA Compliance by Industry
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Every industry has unique accessibility requirements and lawsuit risks.
            Find your industry below for specific ADA compliance guidance, common violations, and checklists.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-10 grid grid-cols-3 gap-4 sm:gap-6">
          <div className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-4 text-center">
            <p className="text-2xl font-bold text-sky-400 sm:text-3xl">{industries.length}</p>
            <p className="mt-1 text-xs text-slate-400 sm:text-sm">Industries Covered</p>
          </div>
          <div className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-4 text-center">
            <p className="text-2xl font-bold text-red-400 sm:text-3xl">
              {industries.filter((i) => i.lawsuitRisk === "high").length}
            </p>
            <p className="mt-1 text-xs text-slate-400 sm:text-sm">High-Risk Industries</p>
          </div>
          <div className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-4 text-center">
            <p className="text-2xl font-bold text-purple-400 sm:text-3xl">WCAG 2.1</p>
            <p className="mt-1 text-xs text-slate-400 sm:text-sm">AA Standard Required</p>
          </div>
        </div>

        {/* Industry Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industry/${industry.slug}`}
              className="group rounded-xl border border-slate-800/60 bg-slate-900/40 p-5 transition hover:border-slate-700 hover:bg-slate-900/70"
            >
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-slate-100 transition group-hover:text-white">
                  {industry.name}
                </h2>
                <span
                  className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium ${
                    riskColors[industry.lawsuitRisk]
                  }`}
                >
                  {riskLabels[industry.lawsuitRisk]}
                </span>
              </div>
              <p className="mb-3 text-sm text-slate-400 line-clamp-2">
                {industry.requirements[0]}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  {industry.checklist.length} checklist items
                </span>
                <svg
                  className="h-4 w-4 text-slate-600 transition group-hover:text-sky-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl border border-slate-800/60 bg-gradient-to-br from-slate-900 to-slate-950 p-8 text-center">
          <h2 className="mb-3 text-2xl font-bold">Scan Your Website for Free</h2>
          <p className="mb-6 text-slate-400">
            Get an instant accessibility score with industry-specific violation reports.
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
