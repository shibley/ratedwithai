import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import { cmsPlatforms } from "@/data/cms-platforms";
import { wcagCriteria } from "@/data/wcag-criteria";
import { industries } from "@/data/industries";

export const dynamicParams = false;

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return cmsPlatforms.map((platform) => ({ slug: platform.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const platform = cmsPlatforms.find((item) => item.slug === params.slug);

  if (!platform) {
    return {
      title: "CMS Accessibility Guide 2026 | RatedWithAI",
      description: "Accessibility guidance and fixes for popular CMS platforms.",
    };
  }

  return {
    title: `${platform.name} Accessibility Guide 2026 | RatedWithAI`,
    description: `Known accessibility issues and fixes for ${platform.name} sites, plus recommended tools.`,
  };
}

export default function CmsPage({ params }: PageProps) {
  const platform = cmsPlatforms.find((item) => item.slug === params.slug);

  if (!platform) {
    notFound();
  }

  const relatedCriteria = wcagCriteria.slice(0, 3);
  const relatedIndustries = industries.slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="relative overflow-hidden">
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-sky-500/30 via-blue-500/20 to-purple-500/30 blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-gradient-to-tr from-indigo-500/30 via-blue-500/10 to-purple-500/30 blur-3xl" />

        <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 via-blue-400 to-purple-500 text-slate-900 font-bold">
              R
            </span>
            <div>
              <p className="text-lg font-semibold tracking-tight">RatedWithAI</p>
              <p className="text-xs text-slate-400">CMS guide</p>
            </div>
          </Link>
          <Link
            className="rounded-full border border-slate-700/60 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-400 hover:text-white"
            href="/"
          >
            Scan your site
          </Link>
        </header>

        <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-14 pt-4">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Accessibility Guide
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            {platform.name} Accessibility Guide 2026
          </h1>
          <p className="mt-4 max-w-3xl text-sm text-slate-300">
            Platform-specific accessibility risks, recommended tools, and practical fixes
            for teams building on {platform.name}.
          </p>
        </section>
      </div>

      <main className="mx-auto w-full max-w-6xl space-y-12 px-6 pb-24">
        <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
          <h2 className="text-2xl font-semibold text-white">Platform overview</h2>
          <p className="text-sm text-slate-300">{platform.overview}</p>
        </section>

        <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
          <h2 className="text-2xl font-semibold text-white">Known accessibility issues</h2>
          <ul className="grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
            {platform.knownIssues.map((item) => (
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
          <h2 className="text-2xl font-semibold text-white">Best plugins and tools</h2>
          <ul className="grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
            {platform.tools.map((item) => (
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
          <h2 className="text-2xl font-semibold text-white">Step-by-step fix guide</h2>
          <ol className="grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
            {platform.fixSteps.map((item, index) => (
              <li
                key={item}
                className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-4"
              >
                <span className="text-slate-400">Step {index + 1}</span>
                <p className="mt-2 text-sm text-slate-200">{item}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
          <h2 className="text-2xl font-semibold text-white">Related resources</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {relatedCriteria.map((criterion) => (
              <Link
                key={criterion.slug}
                href={`/wcag/${criterion.slug}`}
                className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-4 text-sm text-slate-200 transition hover:border-slate-500"
              >
                {criterion.id} {criterion.name}
              </Link>
            ))}
            {relatedIndustries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industry/${industry.slug}`}
                className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-4 text-sm text-slate-200 transition hover:border-slate-500"
              >
                {industry.name} ADA compliance guide
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800/70 bg-gradient-to-r from-slate-900 via-slate-900/70 to-slate-950 p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm text-slate-400">Scan your {platform.name} site</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">
                Run a free accessibility scan today
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
