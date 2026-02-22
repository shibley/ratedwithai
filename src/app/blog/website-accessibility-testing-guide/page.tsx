/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "How to Test Your Website for Accessibility (2026 Guide) | RatedWithAI",
  description:
    "Learn how to test your website for accessibility with manual techniques, automated tools, and WCAG 2.2 compliance checks. Complete 2026 guide covering keyboard testing, screen readers, and the best accessibility testing tools.",
  keywords: [
    "website accessibility testing",
    "accessibility testing tools",
    "WCAG testing",
    "web accessibility audit",
    "ADA compliance testing",
    "keyboard accessibility testing",
    "screen reader testing",
  ],
  openGraph: {
    title: "How to Test Your Website for Accessibility (2026 Guide)",
    description:
      "Learn how to test your website for accessibility with manual techniques, automated tools, and WCAG 2.2 compliance checks. Complete 2026 guide.",
    type: "article",
    publishedTime: "2026-01-25T00:00:00.000Z",
    authors: ["RatedWithAI Team"],
  },
};

export default function AccessibilityTestingGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Test Your Website for Accessibility (2026 Guide)",
    description:
      "Complete guide to website accessibility testing including manual techniques, automated tools comparison, and WCAG 2.2 compliance checks.",
    datePublished: "2026-01-25T00:00:00.000Z",
    dateModified: "2026-01-25T00:00:00.000Z",
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
              Accessibility Testing
            </p>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              How to Test Your Website for Accessibility (2026 Guide)
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              A complete guide to website accessibility testing—from quick manual checks to automated scanning tools. Learn what to test, how to test it, and which tools actually work.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
              <time dateTime="2026-01-25">January 25, 2026</time>
              <span>·</span>
              <span>12 min read</span>
            </div>
          </section>
        </div>

        <article className="mx-auto w-full max-w-4xl space-y-10 px-6 pb-24 text-slate-200">
          {/* Why Accessibility Testing Matters */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Why Website Accessibility Testing Matters
            </h2>
            <p className="text-lg leading-relaxed">
              Website accessibility testing isn't optional anymore—it's a legal requirement, a business imperative, and the right thing to do. Let's break down why you should care.
            </p>

            <div className="mt-8 space-y-6">
              <div className="rounded-2xl border border-rose-500/40 bg-rose-500/10 p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  ⚖️ The Legal Case
                </h3>
                <p className="text-base text-slate-200 leading-relaxed mb-4">
                  ADA lawsuits targeting websites continue to surge. In 2025 alone, over 4,800 federal lawsuits were filed against businesses for inaccessible websites. The average settlement? <strong>$10,000 to $50,000</strong>—and that's before legal fees.
                </p>
                <p className="text-base text-slate-200 leading-relaxed">
                  Courts consistently rule that the ADA applies to websites as "places of public accommodation." The EU's European Accessibility Act and similar laws worldwide are making accessibility a global compliance issue. Regular accessibility testing is your best defense against litigation.
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  💰 The Business Case
                </h3>
                <p className="text-base text-slate-200 leading-relaxed mb-4">
                  Accessibility isn't just about avoiding lawsuits—it's about reaching more customers. Consider these facts:
                </p>
                <ul className="space-y-2 text-base text-slate-200">
                  <li className="flex gap-3">
                    <span className="text-emerald-400">•</span>
                    <span><strong>1.3 billion people</strong> worldwide live with some form of disability</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">•</span>
                    <span>People with disabilities control <strong>$13 trillion</strong> in annual disposable income globally</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">•</span>
                    <span><strong>71% of customers</strong> with disabilities leave websites they can't use (Click-Away Pound Survey)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">•</span>
                    <span>Accessible websites typically see <strong>better SEO rankings</strong>—Google rewards semantic HTML and good structure</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Manual Testing Techniques */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Manual Testing Techniques
            </h2>
            <p className="text-lg leading-relaxed">
              Automated tools are great, but they only catch 30-50% of accessibility issues. Manual testing catches the rest. Here are the essential manual tests every developer should know.
            </p>

            {/* Keyboard Navigation */}
            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6 mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                🎹 Keyboard Navigation Testing
              </h3>
              <p className="text-base text-slate-300 leading-relaxed mb-4">
                Many users can't use a mouse—they rely entirely on keyboard navigation. This is the single most important manual test you can do.
              </p>
              
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-white mb-2">How to test:</p>
                  <ol className="space-y-2 text-base text-slate-300">
                    <li className="flex gap-3">
                      <span className="text-sky-400 font-mono">1.</span>
                      <span>Put away your mouse. Seriously—unplug it or push it aside.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-sky-400 font-mono">2.</span>
                      <span>Press <code className="rounded bg-slate-800 px-2 py-1 text-sm text-sky-300">Tab</code> to move forward through interactive elements</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-sky-400 font-mono">3.</span>
                      <span>Press <code className="rounded bg-slate-800 px-2 py-1 text-sm text-sky-300">Shift + Tab</code> to move backward</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-sky-400 font-mono">4.</span>
                      <span>Press <code className="rounded bg-slate-800 px-2 py-1 text-sm text-sky-300">Enter</code> to activate buttons and links</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-sky-400 font-mono">5.</span>
                      <span>Press <code className="rounded bg-slate-800 px-2 py-1 text-sm text-sky-300">Space</code> to toggle checkboxes and activate buttons</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-sky-400 font-mono">6.</span>
                      <span>Use <code className="rounded bg-slate-800 px-2 py-1 text-sm text-sky-300">Arrow keys</code> for radio buttons, dropdowns, and sliders</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-sky-400 font-mono">7.</span>
                      <span>Press <code className="rounded bg-slate-800 px-2 py-1 text-sm text-sky-300">Escape</code> to close modals and dropdowns</span>
                    </li>
                  </ol>
                </div>

                <div className="mt-6 rounded-xl border border-amber-500/40 bg-amber-500/10 p-4">
                  <p className="font-semibold text-amber-200 mb-2">What to check:</p>
                  <ul className="space-y-2 text-sm text-amber-100">
                    <li className="flex gap-2">
                      <span>□</span>
                      <span>Can you see where focus is? (visible focus indicator)</span>
                    </li>
                    <li className="flex gap-2">
                      <span>□</span>
                      <span>Can you reach every interactive element?</span>
                    </li>
                    <li className="flex gap-2">
                      <span>□</span>
                      <span>Is the tab order logical (left-to-right, top-to-bottom)?</span>
                    </li>
                    <li className="flex gap-2">
                      <span>□</span>
                      <span>Can you escape from modals and menus?</span>
                    </li>
                    <li className="flex gap-2">
                      <span>□</span>
                      <span>Are there any "keyboard traps" where you get stuck?</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Screen Reader Testing */}
            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                🔊 Screen Reader Testing Basics
              </h3>
              <p className="text-base text-slate-300 leading-relaxed mb-4">
                Screen readers convert visual content into speech or braille. Testing with one reveals issues automated tools miss—like confusing reading order or unlabeled buttons.
              </p>

              <div className="grid gap-4 md:grid-cols-2 mt-6">
                <div className="rounded-xl border border-slate-700/60 bg-slate-900/60 p-4">
                  <p className="font-semibold text-white mb-2">Mac: VoiceOver</p>
                  <p className="text-sm text-slate-300 mb-3">Built into macOS—completely free.</p>
                  <ul className="space-y-1 text-sm text-slate-400">
                    <li><code className="text-sky-300">⌘ + F5</code> — Toggle on/off</li>
                    <li><code className="text-sky-300">VO + →</code> — Move forward</li>
                    <li><code className="text-sky-300">VO + Space</code> — Activate element</li>
                    <li className="text-slate-500 italic">VO = Control + Option</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-slate-700/60 bg-slate-900/60 p-4">
                  <p className="font-semibold text-white mb-2">Windows: NVDA</p>
                  <p className="text-sm text-slate-300 mb-3">Free, open-source screen reader.</p>
                  <ul className="space-y-1 text-sm text-slate-400">
                    <li><code className="text-sky-300">Insert + Q</code> — Quit NVDA</li>
                    <li><code className="text-sky-300">↓</code> — Read next item</li>
                    <li><code className="text-sky-300">H</code> — Jump to next heading</li>
                    <li><code className="text-sky-300">Tab</code> — Next focusable element</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-amber-500/40 bg-amber-500/10 p-4">
                <p className="font-semibold text-amber-200 mb-2">What to listen for:</p>
                <ul className="space-y-2 text-sm text-amber-100">
                  <li className="flex gap-2">
                    <span>□</span>
                    <span>Do images have meaningful descriptions? ("Image" alone = fail)</span>
                  </li>
                  <li className="flex gap-2">
                    <span>□</span>
                    <span>Are buttons and links properly labeled? ("Button" alone = fail)</span>
                  </li>
                  <li className="flex gap-2">
                    <span>□</span>
                    <span>Can you navigate by headings? Are they in logical order?</span>
                  </li>
                  <li className="flex gap-2">
                    <span>□</span>
                    <span>Do forms announce field labels and error messages?</span>
                  </li>
                  <li className="flex gap-2">
                    <span>□</span>
                    <span>Does the reading order make sense?</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Visual Tests */}
            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                👁️ Quick Visual Tests
              </h3>
              <ul className="space-y-4 text-base text-slate-300">
                <li className="flex gap-3">
                  <span className="text-sky-400 font-bold">1.</span>
                  <span><strong>Zoom to 200%</strong> — Content should reflow without horizontal scrolling</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400 font-bold">2.</span>
                  <span><strong>Disable images</strong> — Does your site still make sense?</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400 font-bold">3.</span>
                  <span><strong>Check in grayscale</strong> — Is information conveyed only through color?</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400 font-bold">4.</span>
                  <span><strong>Test with high contrast mode</strong> — Windows High Contrast mode or macOS "Increase contrast"</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Automated Tools Comparison */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Automated Testing Tools Compared
            </h2>
            <p className="text-lg leading-relaxed">
              Automated tools can scan your site in seconds and catch common issues. Here's how the most popular options stack up.
            </p>

            <div className="overflow-x-auto mt-8">
              <div className="min-w-[600px]">
                {/* axe DevTools */}
                <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6 mb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">axe DevTools</h3>
                      <p className="text-sm text-slate-400 mt-1">Browser extension by Deque</p>
                    </div>
                    <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-200">
                      Free + Paid
                    </span>
                  </div>
                  <p className="mt-4 text-base text-slate-300">
                    Industry-standard accessibility engine. The free extension catches ~50% of WCAG issues. Great for developers debugging specific pages.
                  </p>
                  <div className="mt-4 flex gap-4 text-sm">
                    <span className="text-emerald-400">✓ Detailed issue explanations</span>
                    <span className="text-emerald-400">✓ Code snippets</span>
                    <span className="text-slate-500">✗ One page at a time</span>
                  </div>
                </div>

                {/* WAVE */}
                <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6 mb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">WAVE</h3>
                      <p className="text-sm text-slate-400 mt-1">WebAIM's visual overlay tool</p>
                    </div>
                    <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-200">
                      Free
                    </span>
                  </div>
                  <p className="mt-4 text-base text-slate-300">
                    Visual approach—shows icons directly on your page where issues occur. Excellent for non-developers and quick visual audits.
                  </p>
                  <div className="mt-4 flex gap-4 text-sm">
                    <span className="text-emerald-400">✓ Visual overlays</span>
                    <span className="text-emerald-400">✓ Structure analysis</span>
                    <span className="text-slate-500">✗ Can be overwhelming on complex pages</span>
                  </div>
                </div>

                {/* Lighthouse */}
                <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6 mb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">Lighthouse</h3>
                      <p className="text-sm text-slate-400 mt-1">Built into Chrome DevTools</p>
                    </div>
                    <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-200">
                      Free
                    </span>
                  </div>
                  <p className="mt-4 text-base text-slate-300">
                    Google's all-in-one audit tool covers accessibility, performance, SEO, and more. Uses axe-core under the hood. Great for quick scores.
                  </p>
                  <div className="mt-4 flex gap-4 text-sm">
                    <span className="text-emerald-400">✓ Built into Chrome</span>
                    <span className="text-emerald-400">✓ CI/CD integration</span>
                    <span className="text-slate-500">✗ Limited accessibility depth</span>
                  </div>
                </div>

                {/* RatedWithAI */}
                <div className="rounded-2xl border border-sky-500/40 bg-sky-500/10 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">RatedWithAI</h3>
                      <p className="text-sm text-sky-300 mt-1">AI-powered accessibility scanning</p>
                    </div>
                    <span className="rounded-full bg-sky-500/20 px-3 py-1 text-xs font-semibold text-sky-200">
                      Free Scan
                    </span>
                  </div>
                  <p className="mt-4 text-base text-slate-200">
                    Combines automated WCAG checks with AI analysis for clearer explanations and prioritized fixes. Get an instant accessibility score with actionable recommendations.
                  </p>
                  <div className="mt-4 flex gap-4 text-sm">
                    <span className="text-emerald-400">✓ Plain-English explanations</span>
                    <span className="text-emerald-400">✓ Prioritized issues</span>
                    <span className="text-emerald-400">✓ WCAG 2.2 coverage</span>
                  </div>
                  <Link
                    href="/scan"
                    className="mt-6 inline-block rounded-xl bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:shadow-lg hover:shadow-blue-500/50"
                  >
                    Try Free Scan →
                  </Link>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-700/60 bg-slate-900/60 p-6 mt-8">
              <h4 className="font-semibold text-white mb-3">When to use which tool:</h4>
              <ul className="space-y-3 text-base text-slate-300">
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>Quick check during development:</strong> Lighthouse (already in Chrome)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>Detailed debugging:</strong> axe DevTools (best error explanations)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>Visual audit for stakeholders:</strong> WAVE (easy to understand overlays)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>Comprehensive site scan:</strong> <Link href="/scan" className="text-sky-400 hover:text-sky-300 underline">RatedWithAI</Link> (full report with prioritization)</span>
                </li>
              </ul>
            </div>
          </section>

          {/* WCAG 2.2 Checklist Highlights */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              WCAG 2.2 Testing Checklist
            </h2>
            <p className="text-lg leading-relaxed">
              WCAG 2.2 is the current accessibility standard. Here are the key criteria to test for at Level AA—the level most laws reference. For a deeper dive, see our <Link href="/blog/wcag-2-1-vs-2-2" className="text-sky-400 hover:text-sky-300 underline">WCAG 2.1 vs 2.2 comparison</Link>.
            </p>

            <div className="space-y-4 mt-8">
              {/* Perceivable */}
              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/20 text-purple-300 text-sm font-bold">P</span>
                  Perceivable
                </h3>
                <ul className="space-y-3 text-base text-slate-300">
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-800" readOnly />
                    <span><strong>1.1.1 Alt text</strong> — Every meaningful image has descriptive alt text</span>
                  </li>
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-800" readOnly />
                    <span><strong>1.4.3 Contrast</strong> — Text has <Link href="/wcag/1-4-3-contrast-minimum" className="text-sky-400 hover:text-sky-300 underline">4.5:1 contrast ratio</Link> (3:1 for large text)</span>
                  </li>
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-800" readOnly />
                    <span><strong>1.4.4 Resize text</strong> — Content is usable when zoomed to 200%</span>
                  </li>
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-800" readOnly />
                    <span><strong>1.4.11 Non-text contrast</strong> — UI components and graphics have 3:1 contrast</span>
                  </li>
                </ul>
              </div>

              {/* Operable */}
              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 text-sm font-bold">O</span>
                  Operable
                </h3>
                <ul className="space-y-3 text-base text-slate-300">
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-800" readOnly />
                    <span><strong>2.1.1 Keyboard</strong> — All functionality works with keyboard alone</span>
                  </li>
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-800" readOnly />
                    <span><strong>2.1.2 No keyboard trap</strong> — Users can escape any component</span>
                  </li>
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-800" readOnly />
                    <span><strong>2.4.7 Focus visible</strong> — Keyboard focus indicator is always visible</span>
                  </li>
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-800" readOnly />
                    <span><strong>2.4.11 Focus not obscured</strong> — Focused elements aren't hidden by sticky headers <span className="text-xs text-sky-400">(WCAG 2.2)</span></span>
                  </li>
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-800" readOnly />
                    <span><strong>2.5.8 Target size</strong> — Touch targets are at least 24×24px <span className="text-xs text-sky-400">(WCAG 2.2)</span></span>
                  </li>
                </ul>
              </div>

              {/* Understandable */}
              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-bold">U</span>
                  Understandable
                </h3>
                <ul className="space-y-3 text-base text-slate-300">
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-800" readOnly />
                    <span><strong>3.1.1 Language</strong> — Page has <code className="rounded bg-slate-800 px-2 py-0.5 text-sm text-sky-300">lang</code> attribute on HTML element</span>
                  </li>
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-800" readOnly />
                    <span><strong>3.2.6 Consistent help</strong> — Help mechanisms appear in same location <span className="text-xs text-sky-400">(WCAG 2.2)</span></span>
                  </li>
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-800" readOnly />
                    <span><strong>3.3.2 Labels</strong> — Form inputs have visible, associated labels</span>
                  </li>
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-800" readOnly />
                    <span><strong>3.3.7 Redundant entry</strong> — Don't ask users to re-enter information <span className="text-xs text-sky-400">(WCAG 2.2)</span></span>
                  </li>
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-800" readOnly />
                    <span><strong>3.3.8 Accessible auth</strong> — Login doesn't require cognitive tests <span className="text-xs text-sky-400">(WCAG 2.2)</span></span>
                  </li>
                </ul>
              </div>

              {/* Robust */}
              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/20 text-amber-300 text-sm font-bold">R</span>
                  Robust
                </h3>
                <ul className="space-y-3 text-base text-slate-300">
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-800" readOnly />
                    <span><strong>4.1.2 Name, Role, Value</strong> — Custom components have proper ARIA roles and states</span>
                  </li>
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-800" readOnly />
                    <span><strong>4.1.3 Status messages</strong> — Dynamic content changes are announced to screen readers</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Common Issues and How to Fix Them */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Common Accessibility Issues and How to Fix Them
            </h2>
            <p className="text-lg leading-relaxed">
              Based on scanning thousands of websites, these are the most common accessibility failures we see—and how to fix them.
            </p>

            <div className="space-y-6 mt-8">
              {/* Issue 1: Missing Alt Text */}
              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-rose-500/20 text-rose-300 font-bold">1</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Missing or Poor Alt Text</h3>
                    <p className="text-sm text-slate-400 mt-1">Found on 60%+ of websites</p>
                  </div>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-rose-500/30 bg-rose-500/5 p-4">
                    <p className="text-sm font-semibold text-rose-300 mb-2">❌ Bad</p>
                    <code className="text-sm text-slate-300 block">&lt;img src="hero.jpg"&gt;</code>
                    <code className="text-sm text-slate-300 block mt-2">&lt;img src="..." alt="image"&gt;</code>
                  </div>
                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4">
                    <p className="text-sm font-semibold text-emerald-300 mb-2">✓ Good</p>
                    <code className="text-sm text-slate-300 block">&lt;img src="hero.jpg" alt="Team collaborating around a whiteboard"&gt;</code>
                  </div>
                </div>
                <p className="text-sm text-slate-400 mt-4">
                  For decorative images, use <code className="text-sky-300">alt=""</code> to skip them in screen readers.
                </p>
              </div>

              {/* Issue 2: Low Contrast */}
              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-rose-500/20 text-rose-300 font-bold">2</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Low Color Contrast</h3>
                    <p className="text-sm text-slate-400 mt-1">Found on 85%+ of websites</p>
                  </div>
                </div>
                <p className="text-base text-slate-300 mt-4 leading-relaxed">
                  Light gray text on white backgrounds is the most common offender. Use a <Link href="/wcag/1-4-3-contrast-minimum" className="text-sky-400 hover:text-sky-300 underline">contrast checker</Link> to verify your colors meet the 4.5:1 ratio for normal text.
                </p>
                <div className="mt-4 flex gap-4 flex-wrap">
                  <div className="rounded-lg bg-white px-4 py-2">
                    <span className="text-gray-400 text-sm">❌ #9CA3AF on white (3.0:1)</span>
                  </div>
                  <div className="rounded-lg bg-white px-4 py-2">
                    <span className="text-gray-700 text-sm">✓ #374151 on white (9.2:1)</span>
                  </div>
                </div>
              </div>

              {/* Issue 3: Missing Form Labels */}
              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-rose-500/20 text-rose-300 font-bold">3</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Form Inputs Without Labels</h3>
                    <p className="text-sm text-slate-400 mt-1">Found on 55%+ of websites</p>
                  </div>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-rose-500/30 bg-rose-500/5 p-4">
                    <p className="text-sm font-semibold text-rose-300 mb-2">❌ Bad</p>
                    <code className="text-sm text-slate-300 block">&lt;input placeholder="Email"&gt;</code>
                  </div>
                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4">
                    <p className="text-sm font-semibold text-emerald-300 mb-2">✓ Good</p>
                    <code className="text-sm text-slate-300 block">&lt;label for="email"&gt;Email&lt;/label&gt;</code>
                    <code className="text-sm text-slate-300 block">&lt;input id="email" type="email"&gt;</code>
                  </div>
                </div>
              </div>

              {/* Issue 4: Missing Focus Indicators */}
              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-rose-500/20 text-rose-300 font-bold">4</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Invisible Focus Indicators</h3>
                    <p className="text-sm text-slate-400 mt-1">Found on 50%+ of websites</p>
                  </div>
                </div>
                <p className="text-base text-slate-300 mt-4 leading-relaxed">
                  Removing the default focus outline without a replacement makes keyboard navigation impossible.
                </p>
                <pre className="mt-4 overflow-x-auto rounded-xl border border-emerald-500/40 bg-slate-950/80 p-4 text-sm text-emerald-100">
{`/* Don't do this */
*:focus { outline: none; }

/* Do this instead */
*:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}`}
                </pre>
              </div>

              {/* Issue 5: Empty Links/Buttons */}
              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-rose-500/20 text-rose-300 font-bold">5</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Unlabeled Icon Buttons</h3>
                    <p className="text-sm text-slate-400 mt-1">Found on 45%+ of websites</p>
                  </div>
                </div>
                <p className="text-base text-slate-300 mt-4 leading-relaxed">
                  Social media icons, hamburger menus, and close buttons often have no accessible name.
                </p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-rose-500/30 bg-rose-500/5 p-4">
                    <p className="text-sm font-semibold text-rose-300 mb-2">❌ Bad</p>
                    <code className="text-sm text-slate-300 block">&lt;button&gt;&lt;svg&gt;...&lt;/svg&gt;&lt;/button&gt;</code>
                  </div>
                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4">
                    <p className="text-sm font-semibold text-emerald-300 mb-2">✓ Good</p>
                    <code className="text-sm text-slate-300 block">&lt;button aria-label="Open menu"&gt;</code>
                    <code className="text-sm text-slate-300 block">&nbsp;&nbsp;&lt;svg&gt;...&lt;/svg&gt;</code>
                    <code className="text-sm text-slate-300 block">&lt;/button&gt;</code>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Building a Testing Routine */}
          <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950 p-8">
            <h2 className="text-3xl font-semibold text-white">
              Building an Accessibility Testing Routine
            </h2>
            <p className="text-lg leading-relaxed">
              Accessibility testing works best when it's built into your workflow, not bolted on at the end.
            </p>

            <div className="space-y-6 mt-6">
              <div className="flex gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-bold">1</span>
                <div>
                  <p className="font-semibold text-white">During development</p>
                  <p className="text-base text-slate-300">Run axe DevTools or Lighthouse on every component you build. Fix issues before they ship.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-bold">2</span>
                <div>
                  <p className="font-semibold text-white">Before each release</p>
                  <p className="text-base text-slate-300">Do a keyboard navigation test and quick screen reader check on new features.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-bold">3</span>
                <div>
                  <p className="font-semibold text-white">Monthly</p>
                  <p className="text-base text-slate-300">Run a full site scan with <Link href="/scan" className="text-sky-400 hover:text-sky-300 underline">RatedWithAI</Link> to catch regressions and new issues.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-bold">4</span>
                <div>
                  <p className="font-semibold text-white">Annually</p>
                  <p className="text-base text-slate-300">Consider a professional audit for high-risk pages (checkout, login, forms).</p>
                </div>
              </div>
            </div>
          </section>

          {/* Final Thoughts */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Start Testing Today
            </h2>
            <p className="text-lg leading-relaxed">
              Website accessibility testing doesn't have to be overwhelming. Start with the basics:
            </p>
            <ol className="space-y-3 text-lg">
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-semibold">1</span>
                <span>Run a <Link href="/scan" className="text-sky-400 hover:text-sky-300 underline">free automated scan</Link> to see where you stand</span>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-semibold">2</span>
                <span>Spend 10 minutes testing keyboard navigation</span>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-semibold">3</span>
                <span>Fix the top 5 issues from your scan</span>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-semibold">4</span>
                <span>Make testing part of your regular workflow</span>
              </li>
            </ol>
            <p className="text-lg leading-relaxed mt-6">
              Every fix you make opens your site to more users. And unlike many website improvements, accessibility fixes often come with bonus benefits: better SEO, cleaner code, and reduced legal risk.
            </p>
            <p className="text-lg leading-relaxed">
              For industry-specific guidance, check out our guides for <Link href="/industry/restaurants" className="text-sky-400 hover:text-sky-300 underline">restaurants</Link>, <Link href="/industry/healthcare" className="text-sky-400 hover:text-sky-300 underline">healthcare</Link>, and more. Or dive into specific requirements with our <Link href="/blog/ada-compliance-checklist-2026" className="text-sky-400 hover:text-sky-300 underline">ADA compliance checklist</Link>.
            </p>
          </section>

          {/* CTA */}
          <section className="rounded-3xl border border-slate-800/70 bg-gradient-to-r from-slate-900 via-slate-900/70 to-slate-950 p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                  Start Testing Now
                </p>
                <h3 className="mt-3 text-3xl font-semibold text-white">
                  Get Your Free Accessibility Report
                </h3>
                <p className="mt-3 text-base text-slate-300">
                  Scan your website for WCAG 2.2 issues in seconds. Get a prioritized list of fixes with plain-English explanations.
                </p>
              </div>
              <Link
                href="/scan"
                className="whitespace-nowrap rounded-xl bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 px-8 py-4 text-base font-semibold text-slate-950 transition hover:shadow-lg hover:shadow-blue-500/50"
              >
                Scan Your Site Free
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
                <p className="text-sm text-slate-400">Blog Post</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  ADA Compliance Checklist 2026
                </p>
              </Link>
              <Link
                href="/blog/wcag-2-1-vs-2-2"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-slate-400">Blog Post</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  WCAG 2.1 vs 2.2: What Changed
                </p>
              </Link>
              <Link
                href="/wcag/1-4-3-contrast-minimum"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-slate-400">WCAG Criterion</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  1.4.3 Contrast Minimum
                </p>
              </Link>
              <Link
                href="/industry/healthcare"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-slate-400">Industry Guide</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Healthcare Website Compliance
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
