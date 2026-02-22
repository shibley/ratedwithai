/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "How to Check if Your Website is ADA Compliant (2026 Guide) | RatedWithAI",
  description:
    "Learn how to check if your website is ADA compliant with our beginner-friendly guide. Free tools, manual testing steps, and actionable fixes to ensure accessibility.",
  keywords: [
    "ADA compliant website",
    "website ADA compliance check",
    "is my website ADA compliant",
    "ADA compliance checker",
    "website accessibility test",
    "ADA website requirements",
  ],
  openGraph: {
    title: "How to Check if Your Website is ADA Compliant (2026 Guide)",
    description:
      "Learn how to check if your website is ADA compliant with our beginner-friendly guide. Free tools, manual testing steps, and actionable fixes.",
    type: "article",
    publishedTime: "2026-02-21T00:00:00.000Z",
    authors: ["RatedWithAI Team"],
  },
};

export default function HowToCheckAdaCompliantPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Check if Your Website is ADA Compliant (2026 Guide)",
    description:
      "Comprehensive beginner guide to checking ADA compliance on your website with free tools and manual testing methods.",
    datePublished: "2026-02-21T00:00:00.000Z",
    dateModified: "2026-02-21T00:00:00.000Z",
    author: {
      "@type": "Organization",
      name: "RatedWithAI",
    },
    publisher: {
      "@type": "Organization",
      name: "RatedWithAI",
      logo: {
        "@type": "ImageObject",
        url: "https://ratedwithai.com/logo.png",
      },
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

                    <Header />

          <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-14 pt-4">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              Beginner Guide
            </p>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              How to Check if Your Website is ADA Compliant
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              Not sure if your website meets ADA requirements? This beginner-friendly guide walks you through the exact steps to test your site for accessibility—no technical expertise required.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
              <time dateTime="2026-02-21">February 21, 2026</time>
              <span>·</span>
              <span>8 min read</span>
            </div>
          </section>
        </div>

        <article className="mx-auto w-full max-w-4xl space-y-10 px-6 pb-24 text-slate-200">
          {/* Introduction */}
          <section className="space-y-6">
            <p className="text-lg leading-relaxed">
              "Is my website ADA compliant?" It's a question every business owner should ask—and one that can feel overwhelming if you don't know where to start.
            </p>
            <p className="text-lg leading-relaxed">
              The good news: <strong>checking your website for ADA compliance isn't as complicated as you might think.</strong> You don't need to hire an expensive consultant or understand complex code. With the right approach, you can assess your site's accessibility in under an hour.
            </p>
            <p className="text-lg leading-relaxed">
              This guide will show you exactly how to check if your website is ADA compliant, using a combination of free automated tools and simple manual tests anyone can perform.
            </p>
          </section>

          {/* What ADA Compliance Means for Websites */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              What Does ADA Compliant Mean for a Website?
            </h2>
            <p className="text-lg leading-relaxed">
              The Americans with Disabilities Act (ADA) requires businesses to make their services accessible to people with disabilities. While the original law focused on physical spaces, courts have consistently ruled that <strong>websites count as "places of public accommodation"</strong> under Title III.
            </p>
            <p className="text-lg leading-relaxed">
              In practice, ADA compliance for websites means following the <Link href="/blog/wcag-2-1-vs-2-2" className="text-sky-400 hover:text-sky-300 underline">Web Content Accessibility Guidelines (WCAG)</Link>. Most courts and the Department of Justice reference <strong>WCAG 2.1 Level AA</strong> as the standard for compliance.
            </p>
            <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6">
              <p className="text-base text-slate-300">
                <strong className="text-white">Quick definition:</strong> A website is ADA compliant when it can be used by people with visual, auditory, motor, and cognitive disabilities—typically achieved by meeting WCAG 2.1 AA standards.
              </p>
            </div>
          </section>

          {/* Step 1: Automated Scan */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Step 1: Run an Automated Accessibility Scan
            </h2>
            <p className="text-lg leading-relaxed">
              The fastest way to get a baseline assessment is to run your website through an automated accessibility scanner. These tools crawl your pages and flag common issues like missing alt text, low color contrast, and improperly labeled form fields.
            </p>
            <p className="text-lg leading-relaxed">
              <strong>Automated scanners can catch 30-50% of accessibility issues instantly.</strong> They won't catch everything (more on that later), but they're an excellent starting point.
            </p>

            <div className="rounded-2xl border border-sky-500/40 bg-sky-500/10 p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Try RatedWithAI (Free)</h3>
              <p className="text-base text-slate-300 mb-4">
                Get a comprehensive accessibility report in under 60 seconds. Our AI-powered scanner checks for WCAG 2.1 violations and provides specific, actionable fixes.
              </p>
              <Link
                href="/"
                className="inline-block rounded-lg bg-sky-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-sky-400"
              >
                Scan Your Site Free →
              </Link>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8">Other Free Tools to Try:</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex gap-3">
                <span className="text-sky-400">•</span>
                <span><strong>WAVE</strong> — Browser extension that highlights issues directly on your page</span>
              </li>
              <li className="flex gap-3">
                <span className="text-sky-400">•</span>
                <span><strong>axe DevTools</strong> — Chrome extension popular with developers</span>
              </li>
              <li className="flex gap-3">
                <span className="text-sky-400">•</span>
                <span><strong>Lighthouse</strong> — Built into Chrome, includes accessibility audit</span>
              </li>
            </ul>
          </section>

          {/* Step 2: Keyboard Test */}
          <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
            <h2 className="text-3xl font-semibold text-white">
              Step 2: The 5-Minute Keyboard Test
            </h2>
            <p className="text-lg leading-relaxed">
              This is the single most important manual test you can do. Many people with disabilities navigate using only a keyboard—no mouse at all. If your site fails the keyboard test, it's not ADA compliant.
            </p>

            <div className="space-y-6 mt-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">How to test:</h3>
                <ol className="space-y-3 text-base">
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 font-semibold text-sky-300">1</span>
                    <span>Put your mouse in a drawer (seriously—don't touch it)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 font-semibold text-sky-300">2</span>
                    <span>Use <kbd className="rounded bg-slate-700 px-2 py-1 text-sm">Tab</kbd> to move forward through your page</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 font-semibold text-sky-300">3</span>
                    <span>Use <kbd className="rounded bg-slate-700 px-2 py-1 text-sm">Shift + Tab</kbd> to move backward</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 font-semibold text-sky-300">4</span>
                    <span>Press <kbd className="rounded bg-slate-700 px-2 py-1 text-sm">Enter</kbd> to activate links and buttons</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 font-semibold text-sky-300">5</span>
                    <span>Use <kbd className="rounded bg-slate-700 px-2 py-1 text-sm">Arrow keys</kbd> to navigate menus and forms</span>
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">What to look for:</h3>
                <ul className="space-y-2 text-base">
                  <li className="flex gap-3">
                    <span className="text-emerald-400">✓</span>
                    <span>Can you see which element is focused at all times?</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">✓</span>
                    <span>Can you reach every button, link, and form field?</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">✓</span>
                    <span>Does the focus order make sense (top to bottom, left to right)?</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">✓</span>
                    <span>Can you escape from modals and dropdowns?</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">✓</span>
                    <span>Can you complete a purchase or submit a form?</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-base text-slate-300 mt-4">
              <strong>Related:</strong> <Link href="/wcag/2-1-1-keyboard" className="text-sky-400 hover:text-sky-300 underline">WCAG 2.1.1 Keyboard Accessibility</Link>
            </p>
          </section>

          {/* Step 3: Screen Reader Test */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Step 3: Quick Screen Reader Check
            </h2>
            <p className="text-lg leading-relaxed">
              Screen readers convert on-screen content to speech for blind and low-vision users. You don't need to become an expert, but spending 10 minutes with a screen reader reveals issues no automated tool can catch.
            </p>

            <div className="grid gap-4 md:grid-cols-2 mt-6">
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
                <p className="font-semibold text-white mb-2">Mac Users</p>
                <p className="text-sm text-slate-300">
                  VoiceOver is built in. Press <kbd className="rounded bg-slate-700 px-2 py-0.5 text-xs">Cmd + F5</kbd> to activate.
                </p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
                <p className="font-semibold text-white mb-2">Windows Users</p>
                <p className="text-sm text-slate-300">
                  Download NVDA (free) or use the built-in Narrator.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8">Listen for these issues:</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex gap-3">
                <span className="text-rose-400">✗</span>
                <span><strong>Images announced as "image" or "graphic"</strong> — Missing alt text (<Link href="/wcag/1-1-1-non-text-content" className="text-sky-400 hover:text-sky-300 underline">WCAG 1.1.1</Link>)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-rose-400">✗</span>
                <span><strong>Buttons announced as "button" with no label</strong> — Missing accessible names</span>
              </li>
              <li className="flex gap-3">
                <span className="text-rose-400">✗</span>
                <span><strong>Form fields with no context</strong> — Missing labels (<Link href="/wcag/1-3-1-info-and-relationships" className="text-sky-400 hover:text-sky-300 underline">WCAG 1.3.1</Link>)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-rose-400">✗</span>
                <span><strong>Links that all say "click here" or "read more"</strong> — Unclear link purpose</span>
              </li>
            </ul>
          </section>

          {/* Step 4: Visual Checks */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Step 4: Visual Accessibility Checks
            </h2>
            <p className="text-lg leading-relaxed">
              Some accessibility issues are visible to the naked eye. Here's what to look for:
            </p>

            <div className="space-y-6 mt-6">
              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Color Contrast</h3>
                <p className="text-base text-slate-300 mb-3">
                  Text must have sufficient contrast against its background. Light gray text on white backgrounds is a common violation.
                </p>
                <p className="text-base text-slate-300">
                  <strong>Test it:</strong> Use a contrast checker tool or <Link href="/" className="text-sky-400 hover:text-sky-300 underline">RatedWithAI's scanner</Link> to verify your color combinations meet the 4.5:1 ratio requirement. <Link href="/wcag/1-4-3-contrast-minimum" className="text-sky-400 hover:text-sky-300 underline">Learn more about WCAG 1.4.3</Link>
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Zoom Test</h3>
                <p className="text-base text-slate-300 mb-3">
                  Users with low vision often zoom to 200% or more. Your content shouldn't break or require horizontal scrolling.
                </p>
                <p className="text-base text-slate-300">
                  <strong>Test it:</strong> Press <kbd className="rounded bg-slate-700 px-2 py-0.5 text-xs">Ctrl/Cmd + Plus</kbd> to zoom to 200%. Can you still read and use everything?
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Flashing Content</h3>
                <p className="text-base text-slate-300">
                  Content that flashes more than 3 times per second can trigger seizures in people with photosensitive epilepsy. Avoid it entirely or provide a way to pause/stop.
                </p>
              </div>
            </div>
          </section>

          {/* Red Flags Checklist */}
          <section className="space-y-6 rounded-3xl border border-rose-500/30 bg-rose-500/5 p-8">
            <h2 className="text-3xl font-semibold text-white">
              🚩 Red Flags That Mean Your Site Isn't ADA Compliant
            </h2>
            <p className="text-lg leading-relaxed">
              If any of these are true, your website likely has ADA compliance issues:
            </p>
            <ul className="space-y-3 text-lg">
              <li className="flex gap-3">
                <span className="text-rose-400">✗</span>
                <span>You can't Tab to all clickable elements</span>
              </li>
              <li className="flex gap-3">
                <span className="text-rose-400">✗</span>
                <span>Images don't have alt text descriptions</span>
              </li>
              <li className="flex gap-3">
                <span className="text-rose-400">✗</span>
                <span>Videos don't have captions</span>
              </li>
              <li className="flex gap-3">
                <span className="text-rose-400">✗</span>
                <span>Form fields don't have visible labels</span>
              </li>
              <li className="flex gap-3">
                <span className="text-rose-400">✗</span>
                <span>Error messages only appear in red with no text explanation</span>
              </li>
              <li className="flex gap-3">
                <span className="text-rose-400">✗</span>
                <span>You can't see which element is focused when using Tab</span>
              </li>
              <li className="flex gap-3">
                <span className="text-rose-400">✗</span>
                <span>Your site breaks when zoomed to 200%</span>
              </li>
              <li className="flex gap-3">
                <span className="text-rose-400">✗</span>
                <span>You get stuck in a modal or menu with no way to escape</span>
              </li>
            </ul>
          </section>

          {/* What to Do Next */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              What to Do If You Found Issues
            </h2>
            <p className="text-lg leading-relaxed">
              Don't panic. Every website has accessibility issues—the goal is continuous improvement, not perfection overnight.
            </p>

            <div className="space-y-6 mt-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">1. Prioritize Critical Issues First</h3>
                <p className="text-base text-slate-300">
                  Focus on issues that completely block users: keyboard traps, missing form labels, and inaccessible checkout flows.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">2. Fix the Low-Hanging Fruit</h3>
                <p className="text-base text-slate-300">
                  Adding alt text and improving color contrast are quick wins that make a big difference.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">3. Create an Accessibility Statement</h3>
                <p className="text-base text-slate-300">
                  Publish a page describing your commitment to accessibility, known issues you're addressing, and contact info for users who encounter problems.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">4. Schedule Regular Audits</h3>
                <p className="text-base text-slate-300">
                  Accessibility isn't one-and-done. New content and features can introduce new issues. Scan your site monthly or after major updates.
                </p>
              </div>
            </div>
          </section>

          {/* State-Specific Info */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              State-Specific ADA Lawsuit Risk
            </h2>
            <p className="text-lg leading-relaxed">
              ADA lawsuits aren't evenly distributed—some states see significantly more filings than others. <Link href="/state/new-york" className="text-sky-400 hover:text-sky-300 underline">New York</Link> and <Link href="/state/california" className="text-sky-400 hover:text-sky-300 underline">California</Link> account for over 70% of all federal ADA website lawsuits.
            </p>
            <p className="text-lg leading-relaxed">
              If your business serves customers in these states (even online), your risk is higher. Check our <Link href="/state/florida" className="text-sky-400 hover:text-sky-300 underline">state-by-state guides</Link> for specific information on lawsuit trends and regulations in your area.
            </p>
          </section>

          {/* CTA */}
          <section className="rounded-3xl border border-slate-800/70 bg-gradient-to-r from-slate-900 via-slate-900/70 to-slate-950 p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                  Free Accessibility Check
                </p>
                <h3 className="mt-3 text-3xl font-semibold text-white">
                  Find Out if Your Website is ADA Compliant
                </h3>
                <p className="mt-3 text-base text-slate-300">
                  Our AI-powered scanner checks your site against WCAG 2.1 standards and provides a detailed report with specific fixes—in under 60 seconds.
                </p>
              </div>
              <Link
                href="/"
                className="whitespace-nowrap rounded-xl bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 px-8 py-4 text-base font-semibold text-slate-950 transition hover:shadow-lg hover:shadow-blue-500/50"
              >
                Check Your Site Now
              </Link>
            </div>
          </section>

          {/* Related Articles */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Related Resources</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Link
                href="/blog/ada-compliance-checklist-2026"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-slate-400">Checklist</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  ADA Compliance Checklist 2026
                </p>
              </Link>
              <Link
                href="/blog/how-to-fix-common-wcag-failures"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-slate-400">Guide</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  How to Fix Common WCAG Failures
                </p>
              </Link>
              <Link
                href="/wcag/1-1-1-non-text-content"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-slate-400">WCAG Criterion</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Non-text Content (1.1.1)
                </p>
              </Link>
              <Link
                href="/state/new-york"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-slate-400">State Guide</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  New York ADA Compliance
                </p>
              </Link>
            </div>
          </section>
        </article>

        <Footer />
      </div>
    </>
  );
}
