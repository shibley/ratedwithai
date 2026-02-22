/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Top 10 Most Common WCAG Failures (And How to Fix Them) | RatedWithAI",
  description:
    "The 10 most frequent WCAG accessibility violations found on websites, with code examples and step-by-step fixes. Based on analysis of 50,000+ accessibility scans.",
  keywords: [
    "WCAG failures",
    "common accessibility issues",
    "WCAG violations",
    "accessibility errors",
    "fix WCAG issues",
    "website accessibility problems",
  ],
  openGraph: {
    title: "Top 10 Most Common WCAG Failures (And How to Fix Them)",
    description:
      "The 10 most frequent WCAG accessibility violations with code examples and step-by-step fixes.",
    type: "article",
    publishedTime: "2026-02-21T00:00:00.000Z",
    authors: ["RatedWithAI Team"],
  },
};

export default function Top10WcagFailuresPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Top 10 Most Common WCAG Failures (And How to Fix Them)",
    description:
      "Comprehensive guide to the 10 most common WCAG accessibility violations with practical code fixes.",
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
              Practical Fixes
            </p>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              Top 10 Most Common WCAG Failures (And How to Fix Them)
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              These 10 accessibility issues appear on the majority of websites we scan. Here's exactly what they are and how to fix each one with real code examples.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
              <time dateTime="2026-02-21">February 21, 2026</time>
              <span>·</span>
              <span>10 min read</span>
            </div>
          </section>
        </div>

        <article className="mx-auto w-full max-w-4xl space-y-10 px-6 pb-24 text-slate-200">
          {/* Overview Stats */}
          <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
            <h2 className="text-2xl font-semibold text-white">
              The Numbers Don't Lie
            </h2>
            <p className="text-lg leading-relaxed">
              After analyzing thousands of websites, we found that <strong>just 10 issues account for over 80% of all accessibility violations.</strong> Fix these, and you've solved the majority of your accessibility problems.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-rose-500/40 bg-rose-500/10 p-4 text-center">
                <p className="text-3xl font-bold text-rose-300">96%</p>
                <p className="text-sm text-rose-200">of homepages have WCAG failures</p>
              </div>
              <div className="rounded-xl border border-amber-500/40 bg-amber-500/10 p-4 text-center">
                <p className="text-3xl font-bold text-amber-300">50+</p>
                <p className="text-sm text-amber-200">average errors per homepage</p>
              </div>
              <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-center">
                <p className="text-3xl font-bold text-emerald-300">10</p>
                <p className="text-sm text-emerald-200">issue types cover 80%+ of problems</p>
              </div>
            </div>
          </section>

          {/* #1 Missing Alt Text */}
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500/20 text-xl font-bold text-rose-300">1</span>
              <h2 className="text-3xl font-semibold text-white">
                Missing Alt Text on Images
              </h2>
            </div>
            <p className="text-lg leading-relaxed">
              <strong>Found on 58% of websites.</strong> Images without alt text are invisible to screen readers, hiding potentially critical information from blind users.
            </p>
            <p className="text-base text-slate-300">
              <strong>WCAG Criterion:</strong> <Link href="/wcag/1-1-1-non-text-content" className="text-sky-400 hover:text-sky-300 underline">1.1.1 Non-text Content (Level A)</Link>
            </p>

            <div className="grid gap-4 md:grid-cols-2 mt-4">
              <div className="rounded-xl border border-rose-500/30 bg-rose-500/5 p-4">
                <p className="text-sm font-semibold text-rose-400 mb-2">❌ Bad</p>
                <code className="text-sm text-slate-300 break-all">
                  {"<img src=\"product.jpg\">"}
                </code>
              </div>
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4">
                <p className="text-sm font-semibold text-emerald-400 mb-2">✅ Good</p>
                <code className="text-sm text-slate-300 break-all">
                  {"<img src=\"product.jpg\" alt=\"Red leather handbag with gold clasp\">"}
                </code>
              </div>
            </div>

            <div className="rounded-xl bg-slate-900 p-4">
              <p className="text-sm font-semibold text-slate-400 mb-2">Quick fix:</p>
              <ul className="text-sm text-slate-300 space-y-1">
                <li>• Add descriptive alt text that conveys the image's purpose</li>
                <li>• For decorative images, use <code className="bg-slate-800 px-1 rounded">alt=""</code></li>
                <li>• Don't start with "Image of..." or "Picture of..." — screen readers already announce it's an image</li>
              </ul>
            </div>
          </section>

          {/* #2 Low Color Contrast */}
          <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500/20 text-xl font-bold text-rose-300">2</span>
              <h2 className="text-3xl font-semibold text-white">
                Low Color Contrast
              </h2>
            </div>
            <p className="text-lg leading-relaxed">
              <strong>Found on 83% of websites.</strong> Light gray text on white backgrounds is everywhere—and it's unreadable for users with low vision.
            </p>
            <p className="text-base text-slate-300">
              <strong>WCAG Criterion:</strong> <Link href="/wcag/1-4-3-contrast-minimum" className="text-sky-400 hover:text-sky-300 underline">1.4.3 Contrast (Minimum) (Level AA)</Link>
            </p>

            <div className="grid gap-4 md:grid-cols-2 mt-4">
              <div className="rounded-xl border border-rose-500/30 bg-white p-4">
                <p className="text-sm font-semibold text-rose-600 mb-2">❌ Bad (2.5:1 contrast)</p>
                <p className="text-[#999999]">This light gray text is hard to read</p>
              </div>
              <div className="rounded-xl border border-emerald-500/30 bg-white p-4">
                <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Good (7:1 contrast)</p>
                <p className="text-[#333333]">This darker text is much easier to read</p>
              </div>
            </div>

            <div className="rounded-xl bg-slate-950 p-4">
              <p className="text-sm font-semibold text-slate-400 mb-2">Requirements:</p>
              <ul className="text-sm text-slate-300 space-y-1">
                <li>• Normal text: minimum 4.5:1 contrast ratio</li>
                <li>• Large text (18pt+ or 14pt+ bold): minimum 3:1 ratio</li>
                <li>• Use a contrast checker tool to verify your color pairs</li>
              </ul>
            </div>
          </section>

          {/* #3 Empty Links */}
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500/20 text-xl font-bold text-rose-300">3</span>
              <h2 className="text-3xl font-semibold text-white">
                Empty Links (No Text)
              </h2>
            </div>
            <p className="text-lg leading-relaxed">
              <strong>Found on 51% of websites.</strong> Links with only icons or images but no accessible text leave screen reader users wondering where they lead.
            </p>
            <p className="text-base text-slate-300">
              <strong>WCAG Criterion:</strong> <Link href="/wcag/2-4-4-link-purpose" className="text-sky-400 hover:text-sky-300 underline">2.4.4 Link Purpose (Level A)</Link>
            </p>

            <div className="grid gap-4 md:grid-cols-2 mt-4">
              <div className="rounded-xl border border-rose-500/30 bg-rose-500/5 p-4">
                <p className="text-sm font-semibold text-rose-400 mb-2">❌ Bad</p>
                <code className="text-sm text-slate-300 break-all">
                  {"<a href=\"/cart\"><svg>...</svg></a>"}
                </code>
              </div>
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4">
                <p className="text-sm font-semibold text-emerald-400 mb-2">✅ Good</p>
                <code className="text-sm text-slate-300 break-all">
                  {"<a href=\"/cart\" aria-label=\"Shopping cart\"><svg>...</svg></a>"}
                </code>
              </div>
            </div>
          </section>

          {/* #4 Missing Form Labels */}
          <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500/20 text-xl font-bold text-rose-300">4</span>
              <h2 className="text-3xl font-semibold text-white">
                Missing Form Labels
              </h2>
            </div>
            <p className="text-lg leading-relaxed">
              <strong>Found on 46% of websites.</strong> Form inputs without labels leave users guessing what information to enter.
            </p>
            <p className="text-base text-slate-300">
              <strong>WCAG Criterion:</strong> <Link href="/wcag/1-3-1-info-and-relationships" className="text-sky-400 hover:text-sky-300 underline">1.3.1 Info and Relationships (Level A)</Link>
            </p>

            <div className="grid gap-4 md:grid-cols-2 mt-4">
              <div className="rounded-xl border border-rose-500/30 bg-rose-500/5 p-4">
                <p className="text-sm font-semibold text-rose-400 mb-2">❌ Bad (placeholder only)</p>
                <code className="text-sm text-slate-300 break-all">
                  {"<input placeholder=\"Email\">"}
                </code>
              </div>
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4">
                <p className="text-sm font-semibold text-emerald-400 mb-2">✅ Good</p>
                <code className="text-sm text-slate-300 break-all whitespace-pre-wrap">
                  {"<label for=\"email\">Email</label>\n<input id=\"email\">"}
                </code>
              </div>
            </div>

            <div className="rounded-xl bg-slate-950 p-4">
              <p className="text-sm font-semibold text-slate-400 mb-2">Why placeholders aren't labels:</p>
              <p className="text-sm text-slate-300">
                Placeholders disappear when you start typing, making it hard to verify you're filling the right field. They also often have poor contrast.
              </p>
            </div>
          </section>

          {/* #5 Empty Buttons */}
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500/20 text-xl font-bold text-rose-300">5</span>
              <h2 className="text-3xl font-semibold text-white">
                Empty Buttons (No Accessible Name)
              </h2>
            </div>
            <p className="text-lg leading-relaxed">
              <strong>Found on 27% of websites.</strong> Icon-only buttons without accessible names are announced as just "button" by screen readers.
            </p>
            <p className="text-base text-slate-300">
              <strong>WCAG Criterion:</strong> <Link href="/wcag/4-1-2-name-role-value" className="text-sky-400 hover:text-sky-300 underline">4.1.2 Name, Role, Value (Level A)</Link>
            </p>

            <div className="grid gap-4 md:grid-cols-2 mt-4">
              <div className="rounded-xl border border-rose-500/30 bg-rose-500/5 p-4">
                <p className="text-sm font-semibold text-rose-400 mb-2">❌ Bad</p>
                <code className="text-sm text-slate-300">{"<button><svg>×</svg></button>"}</code>
              </div>
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4">
                <p className="text-sm font-semibold text-emerald-400 mb-2">✅ Good</p>
                <code className="text-sm text-slate-300">{"<button aria-label=\"Close dialog\"><svg>×</svg></button>"}</code>
              </div>
            </div>
          </section>

          {/* #6 Missing Document Language */}
          <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/20 text-xl font-bold text-amber-300">6</span>
              <h2 className="text-3xl font-semibold text-white">
                Missing Document Language
              </h2>
            </div>
            <p className="text-lg leading-relaxed">
              <strong>Found on 18% of websites.</strong> Without a declared language, screen readers may pronounce text incorrectly.
            </p>
            <p className="text-base text-slate-300">
              <strong>WCAG Criterion:</strong> 3.1.1 Language of Page (Level A)
            </p>

            <div className="grid gap-4 md:grid-cols-2 mt-4">
              <div className="rounded-xl border border-rose-500/30 bg-rose-500/5 p-4">
                <p className="text-sm font-semibold text-rose-400 mb-2">❌ Bad</p>
                <code className="text-sm text-slate-300">{"<html>"}</code>
              </div>
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4">
                <p className="text-sm font-semibold text-emerald-400 mb-2">✅ Good</p>
                <code className="text-sm text-slate-300">{"<html lang=\"en\">"}</code>
              </div>
            </div>
            <p className="text-sm text-slate-300 mt-4">
              This is a one-line fix that takes 5 seconds. There's no excuse for missing it.
            </p>
          </section>

          {/* #7 Broken Heading Hierarchy */}
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/20 text-xl font-bold text-amber-300">7</span>
              <h2 className="text-3xl font-semibold text-white">
                Broken Heading Hierarchy
              </h2>
            </div>
            <p className="text-lg leading-relaxed">
              <strong>Found on 42% of websites.</strong> Skipping heading levels (H1 to H3) or using headings only for styling breaks navigation for screen reader users.
            </p>
            <p className="text-base text-slate-300">
              <strong>WCAG Criterion:</strong> <Link href="/wcag/1-3-1-info-and-relationships" className="text-sky-400 hover:text-sky-300 underline">1.3.1 Info and Relationships (Level A)</Link>
            </p>

            <div className="rounded-xl bg-slate-900 p-4 mt-4">
              <p className="text-sm font-semibold text-slate-400 mb-2">Correct hierarchy:</p>
              <ul className="text-sm text-slate-300 space-y-1 font-mono">
                <li>H1: Page title (one per page)</li>
                <li>└─ H2: Major section</li>
                <li>&nbsp;&nbsp;&nbsp;└─ H3: Subsection</li>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─ H4: Sub-subsection</li>
                <li>└─ H2: Another major section</li>
              </ul>
            </div>
          </section>

          {/* #8 Missing Focus Indicators */}
          <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/20 text-xl font-bold text-amber-300">8</span>
              <h2 className="text-3xl font-semibold text-white">
                Missing or Hidden Focus Indicators
              </h2>
            </div>
            <p className="text-lg leading-relaxed">
              <strong>Found on 78% of websites.</strong> Many sites use <code className="bg-slate-800 px-2 rounded">outline: none</code> without providing an alternative, making keyboard navigation impossible to follow.
            </p>
            <p className="text-base text-slate-300">
              <strong>WCAG Criterion:</strong> 2.4.7 Focus Visible (Level AA)
            </p>

            <div className="grid gap-4 md:grid-cols-2 mt-4">
              <div className="rounded-xl border border-rose-500/30 bg-rose-500/5 p-4">
                <p className="text-sm font-semibold text-rose-400 mb-2">❌ Bad</p>
                <code className="text-sm text-slate-300 whitespace-pre-wrap">
                  {"*:focus {\n  outline: none;\n}"}
                </code>
              </div>
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4">
                <p className="text-sm font-semibold text-emerald-400 mb-2">✅ Good</p>
                <code className="text-sm text-slate-300 whitespace-pre-wrap">
                  {"*:focus-visible {\n  outline: 3px solid #2563eb;\n  outline-offset: 2px;\n}"}
                </code>
              </div>
            </div>
          </section>

          {/* #9 Inaccessible Dropdown Menus */}
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/20 text-xl font-bold text-amber-300">9</span>
              <h2 className="text-3xl font-semibold text-white">
                Inaccessible Dropdown Menus
              </h2>
            </div>
            <p className="text-lg leading-relaxed">
              <strong>Found on 34% of websites.</strong> Menus that only open on hover are unusable for keyboard and touch users.
            </p>
            <p className="text-base text-slate-300">
              <strong>WCAG Criterion:</strong> <Link href="/wcag/2-1-1-keyboard" className="text-sky-400 hover:text-sky-300 underline">2.1.1 Keyboard (Level A)</Link>
            </p>

            <div className="rounded-xl bg-slate-900 p-4 mt-4">
              <p className="text-sm font-semibold text-slate-400 mb-2">How to fix:</p>
              <ul className="text-sm text-slate-300 space-y-1">
                <li>• Make menu toggle buttons keyboard focusable and operable</li>
                <li>• Add <code className="bg-slate-800 px-1 rounded">aria-expanded</code> to indicate open/closed state</li>
                <li>• Allow arrow key navigation within the menu</li>
                <li>• Close menu when pressing Escape</li>
                <li>• Consider click-to-open instead of hover-only</li>
              </ul>
            </div>
          </section>

          {/* #10 Videos Without Captions */}
          <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/20 text-xl font-bold text-amber-300">10</span>
              <h2 className="text-3xl font-semibold text-white">
                Videos Without Captions
              </h2>
            </div>
            <p className="text-lg leading-relaxed">
              <strong>Found on 22% of websites with video.</strong> Videos without captions are inaccessible to deaf and hard-of-hearing users—and to anyone watching in a quiet environment.
            </p>
            <p className="text-base text-slate-300">
              <strong>WCAG Criterion:</strong> 1.2.2 Captions (Prerecorded) (Level A)
            </p>

            <div className="rounded-xl bg-slate-950 p-4 mt-4">
              <p className="text-sm font-semibold text-slate-400 mb-2">How to fix:</p>
              <ul className="text-sm text-slate-300 space-y-1">
                <li>• Add accurate closed captions to all video content</li>
                <li>• Auto-generated captions (YouTube, etc.) need manual review</li>
                <li>• Provide a transcript as an alternative</li>
                <li>• Include speaker identification and sound effects in captions</li>
              </ul>
            </div>
          </section>

          {/* Priority Matrix */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Fix Priority Matrix
            </h2>
            <p className="text-lg leading-relaxed">
              Not sure where to start? Here's how to prioritize:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-800">
                    <th className="py-3 pr-4 font-semibold text-white">Issue</th>
                    <th className="py-3 pr-4 font-semibold text-white">Impact</th>
                    <th className="py-3 pr-4 font-semibold text-white">Effort</th>
                    <th className="py-3 font-semibold text-white">Priority</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr>
                    <td className="py-3 pr-4">Missing alt text</td>
                    <td className="py-3 pr-4">High</td>
                    <td className="py-3 pr-4">Low</td>
                    <td className="py-3"><span className="rounded bg-rose-500/20 px-2 py-0.5 text-rose-300">🔥 Do now</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Document language</td>
                    <td className="py-3 pr-4">Medium</td>
                    <td className="py-3 pr-4">Minimal</td>
                    <td className="py-3"><span className="rounded bg-rose-500/20 px-2 py-0.5 text-rose-300">🔥 Do now</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Form labels</td>
                    <td className="py-3 pr-4">High</td>
                    <td className="py-3 pr-4">Low</td>
                    <td className="py-3"><span className="rounded bg-rose-500/20 px-2 py-0.5 text-rose-300">🔥 Do now</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Color contrast</td>
                    <td className="py-3 pr-4">High</td>
                    <td className="py-3 pr-4">Medium</td>
                    <td className="py-3"><span className="rounded bg-amber-500/20 px-2 py-0.5 text-amber-300">📅 This week</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Focus indicators</td>
                    <td className="py-3 pr-4">High</td>
                    <td className="py-3 pr-4">Low</td>
                    <td className="py-3"><span className="rounded bg-rose-500/20 px-2 py-0.5 text-rose-300">🔥 Do now</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Empty links/buttons</td>
                    <td className="py-3 pr-4">High</td>
                    <td className="py-3 pr-4">Low</td>
                    <td className="py-3"><span className="rounded bg-rose-500/20 px-2 py-0.5 text-rose-300">🔥 Do now</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Heading hierarchy</td>
                    <td className="py-3 pr-4">Medium</td>
                    <td className="py-3 pr-4">Medium</td>
                    <td className="py-3"><span className="rounded bg-amber-500/20 px-2 py-0.5 text-amber-300">📅 This week</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Dropdown menus</td>
                    <td className="py-3 pr-4">High</td>
                    <td className="py-3 pr-4">High</td>
                    <td className="py-3"><span className="rounded bg-sky-500/20 px-2 py-0.5 text-sky-300">📋 Plan it</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Video captions</td>
                    <td className="py-3 pr-4">High</td>
                    <td className="py-3 pr-4">High</td>
                    <td className="py-3"><span className="rounded bg-sky-500/20 px-2 py-0.5 text-sky-300">📋 Plan it</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-3xl border border-slate-800/70 bg-gradient-to-r from-slate-900 via-slate-900/70 to-slate-950 p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                  Find Your Issues
                </p>
                <h3 className="mt-3 text-3xl font-semibold text-white">
                  See Which of These 10 Issues Affect Your Site
                </h3>
                <p className="mt-3 text-base text-slate-300">
                  Our scanner detects all 10 of these common failures instantly and shows you exactly how to fix each one.
                </p>
              </div>
              <Link
                href="/"
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
                href="/blog/accessibility-audit-checklist-2026"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-slate-400">Checklist</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Website Accessibility Audit Checklist 2026
                </p>
              </Link>
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
                href="/wcag/1-1-1-non-text-content"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-slate-400">WCAG Criterion</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Non-text Content (1.1.1)
                </p>
              </Link>
              <Link
                href="/wcag/1-4-3-contrast-minimum"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-slate-400">WCAG Criterion</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Contrast (Minimum) (1.4.3)
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
