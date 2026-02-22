import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { industries } from "@/data/industries";
import { brands } from "@/data/brands";
import { wcagCriteria } from "@/data/wcag-criteria";
import { cmsPlatforms } from "@/data/cms-platforms";

export const dynamicParams = false;

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const industry = industries.find((item) => item.slug === params.slug);

  if (!industry) {
    return {
      title: "Industry ADA Compliance Guide 2026 | RatedWithAI",
      description: "ADA compliance guidance and WCAG requirements by industry.",
    };
  }

  return {
    title: `${industry.name} ADA Compliance Guide 2026 | RatedWithAI`,
    description: `Industry-specific ADA requirements, common accessibility issues, and compliance checklist for ${industry.name.toLowerCase()}.`,
  };
}

export default function IndustryPage({ params }: PageProps) {
  const industry = industries.find((item) => item.slug === params.slug);

  if (!industry) {
    notFound();
  }

  const relatedBrands = brands
    .filter((brand) => brand.industry === industry.slug)
    .slice(0, 4);
  const relatedCriteria = wcagCriteria.slice(0, 3);
  const relatedPlatforms = cmsPlatforms.slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="relative overflow-hidden">
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-sky-500/30 via-blue-500/20 to-purple-500/30 blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-gradient-to-tr from-indigo-500/30 via-blue-500/10 to-purple-500/30 blur-3xl" />

        <Header />

        <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-14 pt-4">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            ADA Compliance Guide
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            {industry.name} ADA Compliance Guide 2026
          </h1>
          <p className="mt-4 max-w-3xl text-sm text-slate-300">
            Understand the ADA and WCAG 2.1 AA expectations that apply to {industry.name.toLowerCase()} sites,
            plus the most common issues we find in scans.
          </p>
        </section>
      </div>

      <main className="mx-auto w-full max-w-6xl space-y-12 px-6 pb-24">
        <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
          <h2 className="text-2xl font-semibold text-white">Industry-specific ADA requirements</h2>
          <ul className="grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
            {industry.requirements.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-4"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
          <h2 className="text-2xl font-semibold text-white">Common accessibility issues</h2>
          <ul className="grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
            {industry.commonIssues.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-4"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950 p-8">
          <h2 className="text-2xl font-semibold text-white">Lawsuit risk</h2>
          <p className="text-sm text-slate-300">
            Current lawsuit exposure for this industry is considered
            {" "}
            <span className="font-semibold text-white">{industry.lawsuitRisk}</span>. Businesses in
            higher-risk categories should prioritize audits and remediation to reduce ADA
            complaints.
          </p>
        </section>

        <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
          <h2 className="text-2xl font-semibold text-white">Compliance checklist</h2>
          <ul className="grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
            {industry.checklist.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-4"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
          <h2 className="text-2xl font-semibold text-white">Related resources</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {relatedBrands.map((brand) => (
              <Link
                key={brand.slug}
                href={`/check/${brand.slug}`}
                className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-4 text-sm text-slate-200 transition hover:border-slate-500"
              >
                {brand.name} accessibility score
              </Link>
            ))}
            {relatedCriteria.map((criterion) => (
              <Link
                key={criterion.slug}
                href={`/wcag/${criterion.slug}`}
                className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-4 text-sm text-slate-200 transition hover:border-slate-500"
              >
                {criterion.id} {criterion.name}
              </Link>
            ))}
            {relatedPlatforms.map((platform) => (
              <Link
                key={platform.slug}
                href={`/cms/${platform.slug}`}
                className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-4 text-sm text-slate-200 transition hover:border-slate-500"
              >
                {platform.name} accessibility guide
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800/70 bg-gradient-to-r from-slate-900 via-slate-900/70 to-slate-950 p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm text-slate-400">Scan your {industry.name} site</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">
                Run a free ADA + WCAG scan in minutes
              </h3>
            </div>
            <Link
              href="/"
              className="rounded-xl bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 px-6 py-3 text-sm font-semibold text-slate-950"
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
