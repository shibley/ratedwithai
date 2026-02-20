import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import ScoreCircle from "@/components/ScoreCircle";
import { brands } from "@/data/brands";
import { industries } from "@/data/industries";
import { wcagCriteria } from "@/data/wcag-criteria";

export const dynamicParams = false;

type PageProps = {
  params: { slug: string };
};

const normalize = (value: string) => value.toLowerCase();

const getRelatedCriteria = (violations: string[]) => {
  const matches = wcagCriteria.filter((criterion) =>
    violations.some((violation) => {
      const lowerViolation = normalize(violation);
      return (
        lowerViolation.includes(normalize(criterion.name)) ||
        lowerViolation.includes(criterion.id)
      );
    })
  );

  return (matches.length ? matches : wcagCriteria).slice(0, 3);
};

export function generateStaticParams() {
  return brands.map((brand) => ({ slug: brand.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const brand = brands.find((item) => item.slug === params.slug);

  if (!brand) {
    return {
      title: "Brand Accessibility Score | RatedWithAI",
      description: "Accessibility score and WCAG insights for top websites.",
    };
  }

  return {
    title: `Is ${brand.name} ADA Compliant? Accessibility Score & Report | RatedWithAI`,
    description: `See the accessibility score, top WCAG violations, and ADA compliance summary for ${brand.name}.`,
  };
}

export default function BrandCheckPage({ params }: PageProps) {
  const brand = brands.find((item) => item.slug === params.slug);

  if (!brand) {
    notFound();
  }

  const industry = industries.find((item) => item.slug === brand.industry);
  const relatedCriteria = getRelatedCriteria(brand.topViolations);

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
              <p className="text-xs text-slate-400">Accessibility scanner</p>
            </div>
          </Link>
          <Link
            className="rounded-full border border-slate-700/60 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-400 hover:text-white"
            href="/"
          >
            Scan your site
          </Link>
        </header>

        <section className="relative z-10 mx-auto grid w-full max-w-6xl gap-10 px-6 pb-20 pt-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              ADA compliance snapshot
            </p>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">
              Is {brand.name} Accessible?
            </h1>
            <p className="text-lg text-slate-300">
              Our AI-driven scan models common WCAG 2.1 checks to estimate how accessible
              {" "}
              {brand.name} is today. The score below is a representative snapshot based on
              high-impact criteria.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <span className="rounded-full border border-slate-700/70 bg-slate-900/60 px-3 py-1">
                {brand.url}
              </span>
              {industry && (
                <span className="rounded-full border border-slate-700/70 bg-slate-900/60 px-3 py-1">
                  {industry.name}
                </span>
              )}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              Accessibility score
            </p>
            <div className="mt-6 flex justify-center">
              <ScoreCircle grade={brand.grade} score={brand.score} size="lg" />
            </div>
            <p className="mt-4 text-sm text-slate-400">
              Grade {brand.grade} based on severity-weighted WCAG checks
            </p>
          </div>
        </section>
      </div>

      <main className="mx-auto w-full max-w-6xl space-y-12 px-6 pb-24">
        <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
          <div>
            <h2 className="text-2xl font-semibold text-white">Key findings</h2>
            <p className="mt-2 text-sm text-slate-300">
              These are the most common accessibility issues we see on {brand.name}
              &apos;s site type.
            </p>
          </div>
          <ul className="grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
            {brand.topViolations.map((violation) => (
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
          <div>
            <h2 className="text-2xl font-semibold text-white">What this means</h2>
            <p className="mt-3 text-sm text-slate-300">
              A score in the {brand.grade} range suggests there are likely barriers for
              keyboard and screen reader users. While this is not legal advice, it
              indicates potential ADA and WCAG 2.1 AA compliance gaps that could affect
              usability and increase lawsuit exposure.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-4">
              <p className="text-sm text-slate-400">Business impact</p>
              <p className="mt-2 text-sm text-slate-200">
                Missed conversions from users who rely on assistive technology, plus
                higher support costs from inaccessible flows.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-4">
              <p className="text-sm text-slate-400">Compliance impact</p>
              <p className="mt-2 text-sm text-slate-200">
                ADA lawsuits often cite WCAG failures like contrast, labels, and keyboard
                access. Addressing the top issues closes the biggest gaps.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
          <div>
            <h2 className="text-2xl font-semibold text-white">Related resources</h2>
            <p className="mt-2 text-sm text-slate-300">
              Keep exploring accessibility benchmarks and WCAG success criteria.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {industry && (
              <Link
                href={`/industry/${industry.slug}`}
                className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-4 text-sm text-slate-200 transition hover:border-slate-500"
              >
                {industry.name} ADA compliance guide
              </Link>
            )}
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

        <section className="rounded-3xl border border-slate-800/70 bg-gradient-to-r from-slate-900 via-slate-900/70 to-slate-950 p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm text-slate-400">Check your own site</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">
                Run a free ADA + WCAG scan in seconds
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
