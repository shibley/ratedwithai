import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { wcagCriteria } from "@/data/wcag-criteria";
import { brands } from "@/data/brands";
import { cmsPlatforms } from "@/data/cms-platforms";

export const dynamicParams = false;

type PageProps = {
  params: { criterion: string };
};

const normalize = (value: string) =>
  value.toLowerCase().replace(/\([^)]*\)/g, "").trim();

export function generateStaticParams() {
  return wcagCriteria.map((criterion) => ({ criterion: criterion.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const criterion = wcagCriteria.find((item) => item.slug === params.criterion);

  if (!criterion) {
    return {
      title: "WCAG Criterion | RatedWithAI",
      description: "WCAG 2.1 criterion overview and accessibility guidance.",
    };
  }

  return {
    title: `${criterion.name} - WCAG ${criterion.level} | RatedWithAI`,
    description: `Plain-English explanation, common violations, and fixes for WCAG ${criterion.id} ${criterion.name}.`,
  };
}

export default function WcagCriterionPage({ params }: PageProps) {
  const criterion = wcagCriteria.find((item) => item.slug === params.criterion);

  if (!criterion) {
    notFound();
  }

  const relatedCriteria = criterion.relatedCriteria
    .map((slug) => wcagCriteria.find((item) => item.slug === slug))
    .filter((item): item is (typeof wcagCriteria)[number] => Boolean(item));

  const criterionKey = normalize(criterion.name);
  const relatedBrands = brands
    .filter((brand) =>
      brand.topViolations.some((violation) =>
        normalize(violation).includes(criterionKey)
      )
    )
    .slice(0, 3);

  const relatedPlatforms = cmsPlatforms.slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="relative overflow-hidden">
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-sky-500/30 via-blue-500/20 to-purple-500/30 blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-gradient-to-tr from-indigo-500/30 via-blue-500/10 to-purple-500/30 blur-3xl" />

        <Header />

        <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-14 pt-4">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">WCAG 2.1</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            {criterion.id} {criterion.name}
          </h1>
          <p className="mt-3 text-lg text-slate-300">
            Level {criterion.level} success criterion
          </p>
          <p className="mt-4 max-w-3xl text-sm text-slate-300">
            {criterion.description}
          </p>
        </section>
      </div>

      <main className="mx-auto w-full max-w-6xl space-y-12 px-6 pb-24">
        <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
          <h2 className="text-2xl font-semibold text-white">Why it matters</h2>
          <p className="text-sm text-slate-300">{criterion.whyItMatters}</p>
        </section>

        <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
          <h2 className="text-2xl font-semibold text-white">Common violations</h2>
          <ul className="grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
            {criterion.commonViolations.map((violation) => (
              <li
                key={violation}
                className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-4"
              >
                {violation}
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950 p-8">
          <h2 className="text-2xl font-semibold text-white">Code examples</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-rose-300">Bad</p>
              <pre className="mt-3 overflow-x-auto rounded-2xl border border-rose-500/40 bg-slate-950/80 p-4 text-sm text-rose-100">
                <code>{criterion.badExample}</code>
              </pre>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Good</p>
              <pre className="mt-3 overflow-x-auto rounded-2xl border border-emerald-500/40 bg-slate-950/80 p-4 text-sm text-emerald-100">
                <code>{criterion.goodExample}</code>
              </pre>
            </div>
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
          <h2 className="text-2xl font-semibold text-white">How to fix</h2>
          <p className="text-sm text-slate-300">{criterion.howToFix}</p>
        </section>

        <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
          <h2 className="text-2xl font-semibold text-white">Related criteria</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {relatedCriteria.map((item) => (
              <Link
                key={item.slug}
                href={`/wcag/${item.slug}`}
                className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-4 text-sm text-slate-200 transition hover:border-slate-500"
              >
                {item.id} {item.name}
              </Link>
            ))}
          </div>
        </section>

        {(relatedBrands.length > 0 || relatedPlatforms.length > 0) && (
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
        )}

        <section className="rounded-3xl border border-slate-800/70 bg-gradient-to-r from-slate-900 via-slate-900/70 to-slate-950 p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm text-slate-400">Scan your site</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">
                Check your WCAG coverage in minutes
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
