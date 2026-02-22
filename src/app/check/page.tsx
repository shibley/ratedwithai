import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { brands } from "@/data/brands";

export const metadata: Metadata = {
  title: "Brand Accessibility Checks | 75+ Website Accessibility Audits | RatedWithAI",
  description:
    "Accessibility scores and audit results for 75+ major brands including Amazon, Google, Apple, and more. See grades, top violations, and how leading websites perform.",
  openGraph: {
    title: "Brand Accessibility Checks | RatedWithAI",
    description:
      "Accessibility audit results for 75+ major brands. Scores, grades, and top violations.",
    type: "website",
  },
};

const gradeColors = {
  A: "from-emerald-400 to-teal-300 text-emerald-950",
  B: "from-sky-400 to-blue-300 text-sky-950",
  C: "from-amber-400 to-yellow-300 text-amber-950",
  D: "from-orange-400 to-rose-300 text-orange-950",
  F: "from-red-500 to-rose-400 text-red-950",
};

const industryLabels: Record<string, string> = {
  ecommerce: "E-commerce",
  saas: "SaaS",
  retail: "Retail",
  travel: "Travel",
  restaurants: "Restaurants",
  banking: "Banking",
  delivery: "Delivery",
  realestate: "Real Estate",
  healthcare: "Healthcare",
  airlines: "Airlines",
  education: "Education",
  government: "Government",
  insurance: "Insurance",
  automotive: "Automotive",
  telecom: "Telecom",
  grocery: "Grocery",
  fitness: "Fitness",
};

export default function CheckIndexPage() {
  const sortedBrands = [...brands].sort((a, b) => a.name.localeCompare(b.name));

  const avgScore = Math.round(brands.reduce((sum, b) => sum + b.score, 0) / brands.length);
  const gradeCounts = brands.reduce(
    (acc, b) => {
      acc[b.grade] = (acc[b.grade] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  // Group by industry
  const industriesMap = new Map<string, typeof brands>();
  for (const brand of sortedBrands) {
    const list = industriesMap.get(brand.industry) ?? [];
    list.push(brand);
    industriesMap.set(brand.industry, list);
  }
  const sortedIndustries = Array.from(industriesMap.entries()).sort((a, b) =>
    (industryLabels[a[0]] ?? a[0]).localeCompare(industryLabels[b[0]] ?? b[0]),
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-12">
        {/* Hero */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Brand Accessibility Checks
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Accessibility audit results for {brands.length}+ major brands. See how leading websites score
            on WCAG compliance, with detailed violation breakdowns and grades.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          <div className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-4 text-center">
            <p className="text-2xl font-bold text-sky-400 sm:text-3xl">{brands.length}</p>
            <p className="mt-1 text-xs text-slate-400 sm:text-sm">Brands Audited</p>
          </div>
          <div className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-4 text-center">
            <p className="text-2xl font-bold text-purple-400 sm:text-3xl">{avgScore}</p>
            <p className="mt-1 text-xs text-slate-400 sm:text-sm">Average Score</p>
          </div>
          <div className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-4 text-center">
            <p className="text-2xl font-bold text-emerald-400 sm:text-3xl">{gradeCounts["A"] ?? 0}</p>
            <p className="mt-1 text-xs text-slate-400 sm:text-sm">A-Grade Brands</p>
          </div>
          <div className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-4 text-center">
            <p className="text-2xl font-bold text-red-400 sm:text-3xl">
              {(gradeCounts["D"] ?? 0) + (gradeCounts["F"] ?? 0)}
            </p>
            <p className="mt-1 text-xs text-slate-400 sm:text-sm">D/F Grade Brands</p>
          </div>
        </div>

        {/* Brands by Industry */}
        {sortedIndustries.map(([industry, industryBrands]) => (
          <section key={industry} className="mb-10">
            <h2 className="mb-4 text-xl font-bold text-slate-200">
              {industryLabels[industry] ?? industry}
              <span className="ml-2 text-sm font-normal text-slate-500">
                ({industryBrands.length} brand{industryBrands.length !== 1 ? "s" : ""})
              </span>
            </h2>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {industryBrands.map((brand) => (
                <Link
                  key={brand.slug}
                  href={`/check/${brand.slug}`}
                  className={`group flex items-center gap-4 rounded-xl border border-slate-800/60 bg-slate-900/40 px-5 py-4 transition hover:border-slate-700 hover:bg-slate-900/70`}
                >
                  {/* Grade Badge */}
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br font-bold text-lg ${
                      gradeColors[brand.grade]
                    }`}
                  >
                    {brand.grade}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-slate-100 truncate transition group-hover:text-white">
                      {brand.name}
                    </h3>
                    <div className="mt-0.5 flex items-center gap-2 text-xs text-slate-400">
                      <span>Score: {brand.score}/100</span>
                      <span className="text-slate-600">•</span>
                      <span className="truncate">{industryLabels[brand.industry] ?? brand.industry}</span>
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
              ))}
            </div>
          </section>
        ))}

        {/* CTA */}
        <div className="mt-8 rounded-2xl border border-slate-800/60 bg-gradient-to-br from-slate-900 to-slate-950 p-8 text-center">
          <h2 className="mb-3 text-2xl font-bold">Check Your Own Website</h2>
          <p className="mb-6 text-slate-400">
            See how your website compares to these major brands. Get a free accessibility score with detailed fixes.
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
