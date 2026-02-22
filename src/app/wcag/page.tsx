import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { wcagCriteria } from "@/data/wcag-criteria";

export const metadata: Metadata = {
  title: "WCAG 2.1 Level A & AA Success Criteria | Complete Reference Guide | RatedWithAI",
  description:
    "Complete reference for all 50 WCAG 2.1 Level A and AA success criteria. Organized by principle with descriptions, common violations, and code examples.",
  openGraph: {
    title: "WCAG 2.1 Level A & AA Success Criteria | RatedWithAI",
    description:
      "Complete reference for all WCAG 2.1 Level A and AA criteria, organized by principle.",
    type: "website",
  },
};

type Principle = {
  id: string;
  name: string;
  description: string;
  color: string;
  borderColor: string;
  badgeColor: string;
};

const principles: Principle[] = [
  {
    id: "1",
    name: "Perceivable",
    description: "Information and UI components must be presentable in ways users can perceive.",
    color: "from-sky-400 to-blue-500",
    borderColor: "border-sky-500/30",
    badgeColor: "bg-sky-500/15 text-sky-300 border-sky-500/30",
  },
  {
    id: "2",
    name: "Operable",
    description: "UI components and navigation must be operable by all users.",
    color: "from-emerald-400 to-teal-500",
    borderColor: "border-emerald-500/30",
    badgeColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  },
  {
    id: "3",
    name: "Understandable",
    description: "Information and the operation of the UI must be understandable.",
    color: "from-amber-400 to-orange-500",
    borderColor: "border-amber-500/30",
    badgeColor: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  },
  {
    id: "4",
    name: "Robust",
    description: "Content must be robust enough to be interpreted by a wide variety of user agents.",
    color: "from-purple-400 to-pink-500",
    borderColor: "border-purple-500/30",
    badgeColor: "bg-purple-500/15 text-purple-300 border-purple-500/30",
  },
];

const levelColors = {
  A: "bg-sky-500/15 text-sky-300 border-sky-500/30",
  AA: "bg-purple-500/15 text-purple-300 border-purple-500/30",
  AAA: "bg-amber-500/15 text-amber-300 border-amber-500/30",
};

export default function WcagIndexPage() {
  const criteriaByPrinciple = principles.map((principle) => ({
    ...principle,
    criteria: wcagCriteria
      .filter((c) => c.id.startsWith(principle.id + "."))
      .sort((a, b) => {
        const partsA = a.id.split(".").map(Number);
        const partsB = b.id.split(".").map(Number);
        for (let i = 0; i < Math.max(partsA.length, partsB.length); i++) {
          if ((partsA[i] ?? 0) !== (partsB[i] ?? 0)) return (partsA[i] ?? 0) - (partsB[i] ?? 0);
        }
        return 0;
      }),
  }));

  const levelACriteria = wcagCriteria.filter((c) => c.level === "A");
  const levelAACriteria = wcagCriteria.filter((c) => c.level === "AA");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />

      <main className="mx-auto max-w-5xl px-6 py-12">
        {/* Hero */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              WCAG 2.1 Success Criteria
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Complete reference for all Level A and AA success criteria. Each page includes descriptions,
            common violations, code examples, and step-by-step fixes.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-10 grid grid-cols-3 gap-4 sm:gap-6">
          <div className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-4 text-center">
            <p className="text-2xl font-bold text-sky-400 sm:text-3xl">{wcagCriteria.length}</p>
            <p className="mt-1 text-xs text-slate-400 sm:text-sm">Total Criteria</p>
          </div>
          <div className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-4 text-center">
            <p className="text-2xl font-bold text-emerald-400 sm:text-3xl">{levelACriteria.length}</p>
            <p className="mt-1 text-xs text-slate-400 sm:text-sm">Level A (Minimum)</p>
          </div>
          <div className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-4 text-center">
            <p className="text-2xl font-bold text-purple-400 sm:text-3xl">{levelAACriteria.length}</p>
            <p className="mt-1 text-xs text-slate-400 sm:text-sm">Level AA (Standard)</p>
          </div>
        </div>

        {/* Criteria by Principle */}
        {criteriaByPrinciple.map((principle) => (
          <section key={principle.id} className="mb-12">
            <div className="mb-6">
              <h2 className="text-2xl font-bold">
                <span className={`bg-gradient-to-r ${principle.color} bg-clip-text text-transparent`}>
                  {principle.id}. {principle.name}
                </span>
              </h2>
              <p className="mt-1 text-sm text-slate-400">{principle.description}</p>
            </div>

            <div className="space-y-3">
              {principle.criteria.map((criterion) => (
                <Link
                  key={criterion.slug}
                  href={`/wcag/${criterion.slug}`}
                  className={`group flex items-center justify-between rounded-xl border border-slate-800/60 bg-slate-900/40 px-5 py-4 transition hover:border-slate-700 hover:bg-slate-900/70`}
                >
                  <div className="flex-1">
                    <div className="mb-1 flex items-center gap-2">
                      <span className="text-sm font-mono text-slate-500">{criterion.id}</span>
                      <span
                        className={`inline-block rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase ${
                          levelColors[criterion.level]
                        }`}
                      >
                        {criterion.level}
                      </span>
                    </div>
                    <h3 className="font-semibold text-slate-100 transition group-hover:text-white">
                      {criterion.name}
                    </h3>
                    <p className="mt-1 text-sm text-slate-400 line-clamp-1">
                      {criterion.description}
                    </p>
                  </div>
                  <svg
                    className="ml-4 h-4 w-4 shrink-0 text-slate-600 transition group-hover:text-sky-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </section>
        ))}

        {/* CTA */}
        <div className="mt-8 rounded-2xl border border-slate-800/60 bg-gradient-to-br from-slate-900 to-slate-950 p-8 text-center">
          <h2 className="mb-3 text-2xl font-bold">Test Your WCAG Compliance</h2>
          <p className="mb-6 text-slate-400">
            Scan your website to see which WCAG criteria pass and fail. Get prioritized fixes with code examples.
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
