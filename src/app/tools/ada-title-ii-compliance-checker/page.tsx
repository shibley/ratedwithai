/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ADA Title II Compliance Checker | Free Government Website Scanner | RatedWithAI",
  description:
    "Free ADA Title II compliance checker for state and local government websites. Scan your government website against WCAG 2.1 AA requirements before the April 2026 deadline.",
  openGraph: {
    title: "ADA Title II Compliance Checker | Free Government Website Scanner",
    description:
      "Free ADA Title II compliance checker for state and local government websites. Scan against WCAG 2.1 AA requirements before the April 2026 deadline.",
    type: "website",
  },
  keywords: [
    "ada title ii compliance checker",
    "government website accessibility checker",
    "title ii compliance scanner",
    "wcag 2.1 aa checker",
    "government ada compliance",
    "state local government accessibility",
    "doj accessibility compliance",
  ],
};

export default function AdaTitleIIComplianceCheckerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ADA Title II Compliance Checker",
    applicationCategory: "WebApplication",
    operatingSystem: "Web",
    description:
      "Free accessibility compliance checker for state and local government websites. Tests against WCAG 2.1 AA standards required by ADA Title II.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    provider: {
      "@type": "Organization",
      name: "RatedWithAI",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
                <p className="text-xs text-slate-400">Title II Compliance</p>
              </div>
            </Link>
            <Link
              className="rounded-full border border-slate-700/60 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-400 hover:text-white"
              href="/pricing"
            >
              View Pricing
            </Link>
          </header>

          <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-14 pt-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/50 bg-red-950/30 px-4 py-2 text-sm text-red-300 mb-6">
              <span>⚠️</span>
              <span>Compliance deadline: April 24, 2026</span>
            </div>
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              ADA Title II<br />Compliance Checker
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Free accessibility scanner for state and local government websites. Check your compliance with DOJ's WCAG 2.1 AA requirements.
            </p>
          </section>

          {/* Scanner CTA */}
          <section className="relative z-10 mx-auto w-full max-w-2xl px-6 pb-20">
            <div className="rounded-3xl border border-slate-700/70 bg-slate-900/80 p-8 backdrop-blur">
              <h2 className="text-xl font-semibold text-white text-center mb-6">
                Scan Your Government Website Now
              </h2>
              <div className="space-y-4">
                <Link
                  href="/"
                  className="flex items-center justify-center gap-2 w-full rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:from-sky-400 hover:to-blue-500"
                >
                  Start Free Compliance Scan
                  <span>→</span>
                </Link>
                <p className="text-center text-sm text-slate-400">
                  No credit card required • Results in under 2 minutes
                </p>
              </div>
            </div>
          </section>
        </div>

        <main className="mx-auto w-full max-w-4xl space-y-16 px-6 pb-24">
          {/* Why Title II Matters */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white text-center">
              Why Government Websites Need Title II Compliance
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-700/70 bg-slate-900/60 p-6 text-center space-y-3">
                <div className="text-4xl">⚖️</div>
                <h3 className="font-semibold text-white">Legal Mandate</h3>
                <p className="text-sm text-slate-400">
                  DOJ's April 2024 rule makes WCAG 2.1 AA a binding requirement for all state/local government websites
                </p>
              </div>
              <div className="rounded-2xl border border-slate-700/70 bg-slate-900/60 p-6 text-center space-y-3">
                <div className="text-4xl">💰</div>
                <h3 className="font-semibold text-white">Funding at Risk</h3>
                <p className="text-sm text-slate-400">
                  Non-compliance can jeopardize federal grants and expose entities to costly lawsuits
                </p>
              </div>
              <div className="rounded-2xl border border-slate-700/70 bg-slate-900/60 p-6 text-center space-y-3">
                <div className="text-4xl">👥</div>
                <h3 className="font-semibold text-white">Serve All Citizens</h3>
                <p className="text-sm text-slate-400">
                  26% of Americans have disabilities — accessible government services are essential
                </p>
              </div>
            </div>
          </section>

          {/* Deadlines */}
          <section className="space-y-6 rounded-3xl border border-red-500/30 bg-red-950/20 p-8">
            <h2 className="text-2xl font-semibold text-white">
              Know Your Compliance Deadline
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-sky-500/50 bg-sky-950/30 p-5">
                <p className="text-sm text-sky-300 mb-1">Large Entities (50,000+ population)</p>
                <p className="text-2xl font-bold text-white">April 24, 2026</p>
              </div>
              <div className="rounded-xl border border-purple-500/50 bg-purple-950/30 p-5">
                <p className="text-sm text-purple-300 mb-1">Smaller Entities (&lt;50,000 population)</p>
                <p className="text-2xl font-bold text-white">April 26, 2027</p>
              </div>
            </div>
            <p className="text-slate-300">
              Learn more about requirements in our <Link href="/blog/ada-title-ii-compliance-guide" className="text-sky-400 hover:text-sky-300 underline">complete ADA Title II compliance guide</Link>.
            </p>
          </section>

          {/* What We Check */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white text-center">
              What Our Title II Compliance Checker Tests
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-slate-700/70 bg-slate-900/40 p-5 flex gap-4">
                <span className="text-2xl">🖼️</span>
                <div>
                  <h3 className="font-semibold text-white">Image Accessibility</h3>
                  <p className="text-sm text-slate-400">Alt text, decorative images, image links</p>
                </div>
              </div>
              <div className="rounded-xl border border-slate-700/70 bg-slate-900/40 p-5 flex gap-4">
                <span className="text-2xl">⌨️</span>
                <div>
                  <h3 className="font-semibold text-white">Keyboard Navigation</h3>
                  <p className="text-sm text-slate-400">Focus indicators, skip links, no traps</p>
                </div>
              </div>
              <div className="rounded-xl border border-slate-700/70 bg-slate-900/40 p-5 flex gap-4">
                <span className="text-2xl">📝</span>
                <div>
                  <h3 className="font-semibold text-white">Form Accessibility</h3>
                  <p className="text-sm text-slate-400">Labels, error messages, input assistance</p>
                </div>
              </div>
              <div className="rounded-xl border border-slate-700/70 bg-slate-900/40 p-5 flex gap-4">
                <span className="text-2xl">🎨</span>
                <div>
                  <h3 className="font-semibold text-white">Color Contrast</h3>
                  <p className="text-sm text-slate-400">WCAG 2.1 AA contrast requirements</p>
                </div>
              </div>
              <div className="rounded-xl border border-slate-700/70 bg-slate-900/40 p-5 flex gap-4">
                <span className="text-2xl">📑</span>
                <div>
                  <h3 className="font-semibold text-white">Document Structure</h3>
                  <p className="text-sm text-slate-400">Headings, landmarks, reading order</p>
                </div>
              </div>
              <div className="rounded-xl border border-slate-700/70 bg-slate-900/40 p-5 flex gap-4">
                <span className="text-2xl">🔗</span>
                <div>
                  <h3 className="font-semibold text-white">Link Accessibility</h3>
                  <p className="text-sm text-slate-400">Descriptive text, distinguishable links</p>
                </div>
              </div>
            </div>
          </section>

          {/* Overlay Warning */}
          <section className="space-y-4 rounded-3xl border border-amber-500/50 bg-amber-950/20 p-8">
            <h2 className="text-xl font-semibold text-amber-200 flex items-center gap-2">
              <span>⚠️</span> Why Overlays Don't Meet Title II Requirements
            </h2>
            <p className="text-slate-300">
              The DOJ rule requires web content <em>itself</em> to conform to WCAG 2.1 AA. Accessibility overlay widgets don't modify the underlying code — they only create a superficial layer that often interferes with screen readers. <Link href="/compare/ratedwithai-vs-accessibe" className="text-sky-400 hover:text-sky-300 underline">Learn why overlays aren't the answer</Link>.
            </p>
          </section>

          {/* Final CTA */}
          <section className="space-y-6 rounded-3xl bg-gradient-to-br from-sky-900/80 via-blue-900/80 to-purple-900/80 p-8 border border-sky-500/30 text-center">
            <h2 className="text-3xl font-semibold text-white">
              Check Your Title II Compliance Today
            </h2>
            <p className="text-lg text-slate-200 max-w-xl mx-auto">
              Don't wait until enforcement begins. Get a clear picture of your government website's accessibility status right now.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Start Free Scan
              <span>→</span>
            </Link>
          </section>

          {/* Related Resources */}
          <section className="space-y-4 border-t border-slate-800/70 pt-10">
            <h2 className="text-xl font-semibold text-white">Government Accessibility Resources</h2>
            <div className="grid gap-3 md:grid-cols-2">
              <Link
                href="/blog/ada-title-ii-compliance-guide"
                className="rounded-lg border border-slate-700/70 bg-slate-900/40 p-4 transition hover:border-sky-500/50"
              >
                <span className="text-sky-300">ADA Title II Compliance Guide 2026</span>
              </Link>
              <Link
                href="/blog/ada-compliance-checklist-2026"
                className="rounded-lg border border-slate-700/70 bg-slate-900/40 p-4 transition hover:border-sky-500/50"
              >
                <span className="text-sky-300">Complete ADA Compliance Checklist</span>
              </Link>
              <Link
                href="/blog/how-to-fix-common-wcag-failures"
                className="rounded-lg border border-slate-700/70 bg-slate-900/40 p-4 transition hover:border-sky-500/50"
              >
                <span className="text-sky-300">How to Fix Common WCAG Failures</span>
              </Link>
              <Link
                href="/blog/wcag-2-1-vs-2-2"
                className="rounded-lg border border-slate-700/70 bg-slate-900/40 p-4 transition hover:border-sky-500/50"
              >
                <span className="text-sky-300">WCAG 2.1 vs 2.2: What's Changed</span>
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
