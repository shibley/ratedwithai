import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { states } from "@/data/states";
import { industries } from "@/data/industries";
import { wcagCriteria } from "@/data/wcag-criteria";

export const dynamicParams = false;

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return states.map((state) => ({ slug: state.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const state = states.find((item) => item.slug === params.slug);

  if (!state) {
    return {
      title: "State ADA Website Lawsuits | RatedWithAI",
      description: "State-specific ADA website lawsuit statistics and compliance guidance.",
    };
  }

  return {
    title: `${state.name} ADA Website Lawsuits: Statistics & Compliance Guide 2026 | RatedWithAI`,
    description: `${state.name} ada website lawsuit statistics, trends, and compliance checklist. ${state.lawsuitStats.total2024} cases filed in 2024. Protect your ${state.name} business from ADA litigation.`,
    keywords: `${state.name.toLowerCase()} ada website lawsuit, ${state.name.toLowerCase()} website accessibility, ada compliance ${state.name.toLowerCase()}, wcag ${state.name.toLowerCase()}`,
  };
}

export default function StatePage({ params }: PageProps) {
  const state = states.find((item) => item.slug === params.slug);

  if (!state) {
    notFound();
  }

  // Get related content for internal linking
  const topIndustries = industries
    .filter((ind) =>
      ["restaurants", "ecommerce", "healthcare", "retail", "hotels"].includes(
        ind.slug
      )
    )
    .slice(0, 3);

  const relatedCriteria = wcagCriteria.slice(0, 3);

  const trendIcon =
    state.lawsuitStats.trend === "increasing"
      ? "↗"
      : state.lawsuitStats.trend === "decreasing"
      ? "↘"
      : "→";
  const trendColor =
    state.lawsuitStats.trend === "increasing"
      ? "text-red-400"
      : state.lawsuitStats.trend === "decreasing"
      ? "text-green-400"
      : "text-slate-400";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header with gradient background */}
      <div className="relative overflow-hidden">
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-sky-500/30 via-blue-500/20 to-purple-500/30 blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-gradient-to-tr from-indigo-500/30 via-blue-500/10 to-purple-500/30 blur-3xl" />

        <Header />

        <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-14 pt-4">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            {state.name} ADA Lawsuits
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            {state.name} Website Accessibility Lawsuits
          </h1>
          <p className="mt-4 max-w-3xl text-sm text-slate-300">
            Comprehensive data on ADA website lawsuits filed in {state.name},
            including statistics, trends, targeted industries, and actionable
            steps to protect your business from litigation.
          </p>
        </section>
      </div>

      <main className="mx-auto w-full max-w-6xl space-y-12 px-6 pb-24">
        {/* Lawsuit Statistics */}
        <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950 p-8">
          <h2 className="text-2xl font-semibold text-white">
            {state.name} ADA Lawsuit Statistics (2024)
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
              <p className="text-sm text-slate-400">Total Cases Filed</p>
              <p className="mt-2 text-4xl font-bold text-white">
                {state.lawsuitStats.total2024.toLocaleString()}
              </p>
              <p className="mt-1 text-xs text-slate-400">in 2024</p>
            </div>
            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
              <p className="text-sm text-slate-400">Federal Filings</p>
              <p className="mt-2 text-4xl font-bold text-white">
                {state.lawsuitStats.federal2024.toLocaleString()}
              </p>
              <p className="mt-1 text-xs text-slate-400">
                {(
                  (state.lawsuitStats.federal2024 /
                    state.lawsuitStats.total2024) *
                  100
                ).toFixed(0)}
                % of total
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
              <p className="text-sm text-slate-400">Year-over-Year Trend</p>
              <p className={`mt-2 text-4xl font-bold ${trendColor}`}>
                {trendIcon} {Math.abs(state.lawsuitStats.trendPercent)}%
              </p>
              <p className="mt-1 text-xs text-slate-400">
                vs. {state.lawsuitStats.year2023} in 2023
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-300">
            {state.name} saw{" "}
            <span className="font-semibold text-white">
              {state.lawsuitStats.total2024.toLocaleString()} ADA website
              accessibility lawsuits
            </span>{" "}
            in 2024, representing a{" "}
            <span className={`font-semibold ${trendColor}`}>
              {state.lawsuitStats.trendPercent > 0 ? "increase" : "decrease"} of{" "}
              {Math.abs(state.lawsuitStats.trendPercent)}%
            </span>{" "}
            compared to the previous year. This trend reflects{" "}
            {state.lawsuitStats.trend === "increasing"
              ? "growing enforcement activity and heightened awareness of digital accessibility rights"
              : state.lawsuitStats.trend === "decreasing"
              ? "shifting plaintiff strategies or improved compliance efforts by businesses"
              : "stable enforcement patterns in the digital accessibility landscape"}
            .
          </p>
        </section>

        {/* Industries Most Targeted */}
        <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
          <h2 className="text-2xl font-semibold text-white">
            Industries Most Targeted in {state.name}
          </h2>
          <p className="text-sm text-slate-300">
            Based on 2024 filing data, these industries face the highest
            litigation risk in {state.name}:
          </p>
          <ul className="grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
            {state.topIndustries.map((industry) => (
              <li
                key={industry}
                className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-4"
              >
                {industry}
              </li>
            ))}
          </ul>
          <p className="text-sm text-slate-300">
            If your business operates in one of these sectors, prioritize a
            comprehensive accessibility audit and remediation plan to reduce
            legal exposure.
          </p>
        </section>

        {/* State-Specific Regulations */}
        {state.stateRegulations.length > 0 && (
          <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
            <h2 className="text-2xl font-semibold text-white">
              {state.name}-Specific ADA Regulations & Legal Landscape
            </h2>
            <ul className="grid gap-3 text-sm text-slate-200">
              {state.stateRegulations.map((regulation) => (
                <li
                  key={regulation}
                  className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-4"
                >
                  {regulation}
                </li>
              ))}
            </ul>
            <p className="text-sm text-slate-300">
              Understanding {state.name}&apos;s unique legal environment helps
              businesses assess risk and develop appropriate compliance
              strategies.
            </p>
          </section>
        )}

        {/* Notable Cases */}
        {state.notableCases.length > 0 && (
          <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
            <h2 className="text-2xl font-semibold text-white">
              Notable {state.name} ADA Website Cases
            </h2>
            <div className="grid gap-4">
              {state.notableCases.map((caseItem) => (
                <div
                  key={caseItem.case}
                  className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="font-semibold text-white">{caseItem.case}</p>
                    <span className="whitespace-nowrap rounded-lg bg-slate-800/60 px-3 py-1 text-xs text-slate-300">
                      {caseItem.year}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-300">
                    {caseItem.description}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-300">
              These cases demonstrate the legal standards and expectations for
              website accessibility in {state.name} courts.
            </p>
          </section>
        )}

        {/* How to Protect Your Business */}
        <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950 p-8">
          <h2 className="text-2xl font-semibold text-white">
            How to Protect Your {state.name} Business
          </h2>
          <p className="text-sm text-slate-300">
            Take these proactive steps to reduce your risk of ADA website
            litigation in {state.name}:
          </p>
          <ul className="grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
            {state.protectionSteps.map((step) => (
              <li
                key={step}
                className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-4"
              >
                {step}
              </li>
            ))}
          </ul>
        </section>

        {/* Compliance Checklist */}
        <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
          <h2 className="text-2xl font-semibold text-white">
            {state.name} ADA Website Compliance Checklist
          </h2>
          <p className="text-sm text-slate-300">
            Ensure your website meets these essential WCAG 2.1 Level AA
            requirements to minimize ADA lawsuit risk:
          </p>
          <ul className="grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
            {state.checklist.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-4"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Related Industry Resources */}
        <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
          <h2 className="text-2xl font-semibold text-white">
            Industry-Specific Guidance
          </h2>
          <p className="text-sm text-slate-300">
            Get tailored compliance guidance for your industry:
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {topIndustries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industry/${industry.slug}`}
                className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-4 text-sm text-slate-200 transition hover:border-slate-500"
              >
                {industry.name} ADA Compliance Guide
              </Link>
            ))}
          </div>
        </section>

        {/* WCAG Criteria Resources */}
        <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
          <h2 className="text-2xl font-semibold text-white">
            Understanding WCAG Requirements
          </h2>
          <p className="text-sm text-slate-300">
            Learn about the specific WCAG success criteria that courts reference
            in ADA cases:
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {relatedCriteria.map((criterion) => (
              <Link
                key={criterion.slug}
                href={`/wcag/${criterion.slug}`}
                className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-4 text-sm text-slate-200 transition hover:border-slate-500"
              >
                {criterion.id} {criterion.name}
              </Link>
            ))}
          </div>
        </section>

        {/* Other State Resources */}
        <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
          <h2 className="text-2xl font-semibold text-white">
            Other State Lawsuit Data
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {states
              .filter((s) => s.slug !== state.slug)
              .map((otherState) => (
                <Link
                  key={otherState.slug}
                  href={`/state/${otherState.slug}`}
                  className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-4 text-sm text-slate-200 transition hover:border-slate-500"
                >
                  <p className="font-semibold">{otherState.name}</p>
                  <p className="mt-1 text-xs text-slate-400">
                    {otherState.lawsuitStats.total2024} cases in 2024
                  </p>
                </Link>
              ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="rounded-3xl border border-slate-800/70 bg-gradient-to-r from-slate-900 via-slate-900/70 to-slate-950 p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm text-slate-400">
                Scan your {state.name} website for free
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-white">
                Get your ADA compliance score in minutes
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                RatedWithAI scans your site for WCAG 2.1 violations and provides
                a detailed accessibility report with remediation guidance.
              </p>
            </div>
            <Link
              href="/"
              className="whitespace-nowrap rounded-xl bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
            >
              Start a free scan
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
