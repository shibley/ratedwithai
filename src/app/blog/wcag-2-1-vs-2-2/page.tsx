/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "WCAG 2.1 vs 2.2: Which Standard Should You Follow in 2026? | RatedWithAI",
  description:
    "Side-by-side comparison of WCAG 2.0, 2.1, and 2.2. Learn which WCAG standard is legally required, the 9 new criteria in 2.2, and when to target each version in 2026.",
  keywords: [
    "WCAG 2.1 vs 2.2",
    "which WCAG standard",
    "WCAG 2.2 new criteria",
    "WCAG comparison",
    "WCAG 2.2 requirements",
    "web accessibility standards 2026",
  ],
  openGraph: {
    title: "WCAG 2.1 vs 2.2: Which Standard Should You Follow in 2026?",
    description:
      "Side-by-side comparison of WCAG 2.0, 2.1, and 2.2. Learn which standard is legally required, the 9 new criteria in 2.2, and a practical implementation guide.",
    type: "article",
    publishedTime: "2026-01-20T00:00:00.000Z",
    modifiedTime: "2026-02-25T00:00:00.000Z",
    authors: ["RatedWithAI Team"],
  },
  alternates: {
    canonical: "https://ratedwithai.com/blog/wcag-2-1-vs-2-2",
  },
};

export default function Wcag21Vs22Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "WCAG 2.1 vs 2.2: Which Standard Should You Follow in 2026?",
    description:
      "Side-by-side comparison of WCAG 2.0, 2.1, and 2.2. Learn which standard is legally required, the 9 new criteria in 2.2, and a practical implementation guide.",
    datePublished: "2026-01-20T00:00:00.000Z",
    dateModified: "2026-02-25T00:00:00.000Z",
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
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://ratedwithai.com/blog/wcag-2-1-vs-2-2",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the difference between WCAG 2.1 and WCAG 2.2?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WCAG 2.2 adds 9 new success criteria on top of WCAG 2.1 and removes one (4.1.1 Parsing). The new criteria focus on mobile usability, cognitive accessibility, and better keyboard support — including focus appearance, dragging alternatives, target size minimums, consistent help, redundant entry, and accessible authentication.",
        },
      },
      {
        "@type": "Question",
        name: "Which WCAG standard is legally required in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most laws reference WCAG 2.1 Level AA. The DOJ's ADA Title II rule requires WCAG 2.1 AA for state and local government websites. The European Accessibility Act (EAA) also references WCAG 2.1 AA via EN 301 549. No law currently mandates WCAG 2.2, but it is the W3C recommendation and the direction regulatory standards are moving.",
        },
      },
      {
        "@type": "Question",
        name: "Should I follow WCAG 2.1 or 2.2?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you're starting fresh or redesigning, target WCAG 2.2 Level AA. If you're already WCAG 2.1 compliant, upgrading to 2.2 is incremental and future-proofs your compliance. WCAG 2.2 is backward-compatible, so meeting 2.2 also satisfies 2.1.",
        },
      },
      {
        "@type": "Question",
        name: "Is WCAG 2.2 backward-compatible with 2.1?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. WCAG 2.2 includes all WCAG 2.1 criteria plus 9 new ones. A site that conforms to WCAG 2.2 Level AA automatically conforms to WCAG 2.1 Level AA. The only exception is that WCAG 2.2 removed criterion 4.1.1 Parsing, which was obsolete with modern HTML5.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <div className="relative overflow-hidden">
          <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-sky-500/30 via-blue-500/20 to-purple-500/30 blur-3xl" />
          <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-gradient-to-tr from-indigo-500/30 via-blue-500/10 to-purple-500/30 blur-3xl" />

          <Header />

          <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-14 pt-4">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              WCAG Standards
            </p>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              WCAG 2.1 vs 2.2: Which Standard Should You Follow in 2026?
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              Three versions of WCAG are in play — 2.0, 2.1, and 2.2. Courts, regulators, and procurement officers each reference different ones. This guide breaks down exactly what changed, which standard the law requires, and which one you should actually target.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
              <time dateTime="2026-02-25">Updated February 25, 2026</time>
              <span>·</span>
              <span>14 min read</span>
            </div>
          </section>
        </div>

        <article className="mx-auto w-full max-w-4xl space-y-10 px-6 pb-24 text-slate-200">

          {/* Table of Contents */}
          <nav className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400 mb-4">In This Guide</p>
            <ol className="space-y-2 text-base text-sky-400">
              <li><a href="#what-is-wcag" className="hover:text-sky-300 transition">1. What Is WCAG (Quick Primer)</a></li>
              <li><a href="#version-timeline" className="hover:text-sky-300 transition">2. WCAG Version Timeline: 2.0 → 2.1 → 2.2</a></li>
              <li><a href="#side-by-side" className="hover:text-sky-300 transition">3. Side-by-Side Comparison Table</a></li>
              <li><a href="#new-in-22" className="hover:text-sky-300 transition">4. Every New Success Criterion in WCAG 2.2</a></li>
              <li><a href="#removed-parsing" className="hover:text-sky-300 transition">5. What Was Removed: 4.1.1 Parsing</a></li>
              <li><a href="#legal-requirements" className="hover:text-sky-300 transition">6. Which Standard Is Legally Required?</a></li>
              <li><a href="#when-to-target" className="hover:text-sky-300 transition">7. When to Target 2.2 vs 2.1</a></li>
              <li><a href="#implementation-guide" className="hover:text-sky-300 transition">8. Practical Implementation Guide</a></li>
              <li><a href="#testing-both" className="hover:text-sky-300 transition">9. How RatedWithAI Tests Against Both Standards</a></li>
              <li><a href="#faq" className="hover:text-sky-300 transition">10. FAQ</a></li>
            </ol>
          </nav>

          {/* 1. What Is WCAG */}
          <section id="what-is-wcag" className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              1. What Is WCAG (Quick Primer)
            </h2>
            <p className="text-lg leading-relaxed">
              The <strong className="text-white">Web Content Accessibility Guidelines (WCAG)</strong> are the global standard for web accessibility. Published by the <strong>World Wide Web Consortium (W3C)</strong>, WCAG defines technical criteria — called <em>success criteria</em> — that make web content usable by people with visual, auditory, motor, and cognitive disabilities.
            </p>
            <p className="text-lg leading-relaxed">
              Every version of WCAG is organized around four principles, known by the acronym <strong className="text-white">POUR</strong>:
            </p>
            <div className="grid gap-3 sm:grid-cols-2 mt-4">
              <div className="rounded-xl border border-slate-800/70 bg-slate-900/50 p-4">
                <p className="font-semibold text-white">Perceivable</p>
                <p className="mt-1 text-sm text-slate-300">Content must be presentable in ways users can perceive (alt text, captions, <Link href="/wcag/1-4-3-contrast-minimum" className="text-sky-400 hover:text-sky-300 underline">sufficient contrast</Link>).</p>
              </div>
              <div className="rounded-xl border border-slate-800/70 bg-slate-900/50 p-4">
                <p className="font-semibold text-white">Operable</p>
                <p className="mt-1 text-sm text-slate-300">Users must be able to navigate and interact using keyboard, touch, voice, or assistive tech.</p>
              </div>
              <div className="rounded-xl border border-slate-800/70 bg-slate-900/50 p-4">
                <p className="font-semibold text-white">Understandable</p>
                <p className="mt-1 text-sm text-slate-300">Content and UI behavior must be predictable, readable, and help users avoid errors.</p>
              </div>
              <div className="rounded-xl border border-slate-800/70 bg-slate-900/50 p-4">
                <p className="font-semibold text-white">Robust</p>
                <p className="mt-1 text-sm text-slate-300">Content must work reliably across browsers, assistive technologies, and future user agents.</p>
              </div>
            </div>
            <p className="text-lg leading-relaxed mt-4">
              Each success criterion falls into one of three <strong className="text-white">conformance levels</strong>:
            </p>
            <div className="grid gap-4 md:grid-cols-3 mt-4">
              <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6">
                <p className="text-2xl font-bold text-emerald-400">Level A</p>
                <p className="mt-2 text-sm text-slate-300">
                  Minimum accessibility. Failure means some users <em>cannot access content at all</em>.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6">
                <p className="text-2xl font-bold text-sky-400">Level AA</p>
                <p className="mt-2 text-sm text-slate-300">
                  <strong>The legal and industry standard.</strong> Nearly every law and procurement policy references Level AA.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6">
                <p className="text-2xl font-bold text-purple-400">Level AAA</p>
                <p className="mt-2 text-sm text-slate-300">
                  Enhanced accessibility. Aspirational for most sites — excellent for specialized audiences.
                </p>
              </div>
            </div>
            <p className="text-lg leading-relaxed mt-4">
              For a deeper dive into every WCAG criterion, see our <Link href="/wcag" className="text-sky-400 hover:text-sky-300 underline">complete WCAG reference</Link>.
            </p>
          </section>

          {/* 2. Version Timeline */}
          <section id="version-timeline" className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
            <h2 className="text-3xl font-semibold text-white">
              2. WCAG Version Timeline: 2.0 → 2.1 → 2.2
            </h2>
            <p className="text-lg leading-relaxed">
              WCAG has evolved significantly over 15 years. Each version builds on the last — they're additive, not replacement standards.
            </p>
            <div className="space-y-8 mt-6">
              <div className="flex gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-slate-800 text-sm font-bold text-slate-300">
                  2008
                </div>
                <div>
                  <p className="text-xl font-semibold text-white">WCAG 2.0</p>
                  <p className="text-base text-slate-300 mt-1">
                    The foundational version. Introduced the POUR principles, 61 success criteria (25 A, 13 AA, 23 AAA), and the three conformance levels. Became an ISO standard (ISO/IEC 40500:2012). Still referenced by Section 508's "original" standard and many older policies.
                  </p>
                  <p className="text-sm text-slate-400 mt-2">
                    <strong>Key focus:</strong> Core accessibility — alt text, keyboard access, captions, contrast, form labels.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-slate-700 text-sm font-bold text-slate-200">
                  2018
                </div>
                <div>
                  <p className="text-xl font-semibold text-white">WCAG 2.1</p>
                  <p className="text-base text-slate-300 mt-1">
                    Added <strong>17 new success criteria</strong> (5 A, 7 AA, 5 AAA) on top of everything in 2.0, bringing the total to 78. Addressed gaps for mobile users, people with low vision, and people with cognitive/learning disabilities.
                  </p>
                  <p className="text-sm text-slate-400 mt-2">
                    <strong>Key additions:</strong> Orientation, reflow (responsive design), text spacing, motion actuation, target size (enhanced), status messages.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-blue-500 text-sm font-bold text-slate-900">
                  2023
                </div>
                <div>
                  <p className="text-xl font-semibold text-white">WCAG 2.2</p>
                  <p className="text-base text-slate-300 mt-1">
                    Published October 5, 2023. Added <strong>9 new success criteria</strong> (2 A, 4 AA, 3 AAA) and <strong>removed 1</strong> (4.1.1 Parsing), for a total of 86 criteria. Strongest emphasis yet on cognitive accessibility, mobile usability, and reducing user burden.
                  </p>
                  <p className="text-sm text-slate-400 mt-2">
                    <strong>Key additions:</strong> Focus appearance, dragging alternatives, target size (minimum), consistent help, redundant entry, accessible authentication.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-base text-slate-400 italic mt-6">
              <strong>Coming next:</strong> WCAG 3.0 (formerly called "Silver") is under development but won't be finalized for several years. WCAG 2.2 is the standard to plan around through at least 2028.
            </p>
          </section>

          {/* 3. Side-by-Side Comparison */}
          <section id="side-by-side" className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              3. Side-by-Side Comparison: WCAG 2.0 vs 2.1 vs 2.2
            </h2>
            <p className="text-lg leading-relaxed">
              Here's how the three active WCAG versions stack up across every dimension that matters for compliance planning:
            </p>
            <div className="overflow-x-auto mt-6">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="py-3 pr-4 text-slate-400 font-medium">Feature</th>
                    <th className="py-3 px-4 text-slate-400 font-medium">WCAG 2.0</th>
                    <th className="py-3 px-4 text-slate-400 font-medium">WCAG 2.1</th>
                    <th className="py-3 px-4 text-sky-400 font-medium">WCAG 2.2</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-800/50">
                    <td className="py-3 pr-4 font-medium text-white">Release Date</td>
                    <td className="py-3 px-4">Dec 2008</td>
                    <td className="py-3 px-4">Jun 2018</td>
                    <td className="py-3 px-4 text-sky-300">Oct 2023</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="py-3 pr-4 font-medium text-white">Total Success Criteria</td>
                    <td className="py-3 px-4">61</td>
                    <td className="py-3 px-4">78</td>
                    <td className="py-3 px-4 text-sky-300">86</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="py-3 pr-4 font-medium text-white">Level A Criteria</td>
                    <td className="py-3 px-4">25</td>
                    <td className="py-3 px-4">30</td>
                    <td className="py-3 px-4 text-sky-300">32</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="py-3 pr-4 font-medium text-white">Level AA Criteria</td>
                    <td className="py-3 px-4">13</td>
                    <td className="py-3 px-4">20</td>
                    <td className="py-3 px-4 text-sky-300">24</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="py-3 pr-4 font-medium text-white">Level AAA Criteria</td>
                    <td className="py-3 px-4">23</td>
                    <td className="py-3 px-4">28</td>
                    <td className="py-3 px-4 text-sky-300">30</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="py-3 pr-4 font-medium text-white">Mobile Focus</td>
                    <td className="py-3 px-4">❌ Minimal</td>
                    <td className="py-3 px-4">✅ Strong</td>
                    <td className="py-3 px-4 text-sky-300">✅ Stronger</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="py-3 pr-4 font-medium text-white">Cognitive Accessibility</td>
                    <td className="py-3 px-4">❌ Minimal</td>
                    <td className="py-3 px-4">⚠️ Partial</td>
                    <td className="py-3 px-4 text-sky-300">✅ Strong</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="py-3 pr-4 font-medium text-white">Authentication Rules</td>
                    <td className="py-3 px-4">❌ None</td>
                    <td className="py-3 px-4">❌ None</td>
                    <td className="py-3 px-4 text-sky-300">✅ New</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="py-3 pr-4 font-medium text-white">Drag-and-Drop Rules</td>
                    <td className="py-3 px-4">❌ None</td>
                    <td className="py-3 px-4">❌ None</td>
                    <td className="py-3 px-4 text-sky-300">✅ New</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="py-3 pr-4 font-medium text-white">Focus Visibility Rules</td>
                    <td className="py-3 px-4">Basic (2.4.7)</td>
                    <td className="py-3 px-4">Basic (2.4.7)</td>
                    <td className="py-3 px-4 text-sky-300">Enhanced (2.4.11–13)</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="py-3 pr-4 font-medium text-white">W3C Recommendation</td>
                    <td className="py-3 px-4">Superseded</td>
                    <td className="py-3 px-4">Superseded</td>
                    <td className="py-3 px-4 text-sky-300">✅ Current</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-white">Legal Standard (US/EU)</td>
                    <td className="py-3 px-4">Legacy only</td>
                    <td className="py-3 px-4">✅ Current legal ref</td>
                    <td className="py-3 px-4 text-sky-300">Best practice</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-base text-slate-400 mt-4">
              <strong>Key takeaway:</strong> WCAG 2.2 is the current W3C recommendation. WCAG 2.1 is the current <em>legal</em> reference. They're not the same thing — and understanding the gap matters for your compliance strategy.
            </p>
          </section>

          {/* 4. New in 2.2 */}
          <section id="new-in-22" className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              4. Every New Success Criterion in WCAG 2.2
            </h2>
            <p className="text-lg leading-relaxed">
              WCAG 2.2 introduces <strong>9 new success criteria</strong>. Six are at Level A or AA (meaning they affect most compliance targets), and three are at Level AAA. Here's each one explained with practical context:
            </p>

            <div className="space-y-6 mt-8">
              {/* 2.4.11 */}
              <div className="rounded-2xl border border-sky-500/40 bg-sky-500/10 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-sky-300">Level AA</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      2.4.11 Focus Not Obscured (Minimum)
                    </h3>
                  </div>
                  <span className="rounded-full bg-sky-500/20 px-3 py-1 text-xs font-semibold text-sky-200">NEW</span>
                </div>
                <p className="mt-4 text-base text-slate-200 leading-relaxed">
                  When a UI component receives keyboard focus, it must not be <em>entirely</em> hidden by author-created content — sticky headers, cookie consent banners, chat widgets, or floating action buttons.
                </p>
                <p className="mt-3 text-sm text-slate-300">
                  <strong>Real-world problem:</strong> A keyboard user tabs to a link, but the sticky navigation bar covers it completely. They can't see what they've focused on.
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  <strong>Fix:</strong> Add <code className="rounded bg-slate-800 px-2 py-0.5 text-xs text-sky-300">scroll-padding-top</code> that accounts for fixed header height. Dismiss or reposition overlays when they would obscure focused elements.
                </p>
              </div>

              {/* 2.4.12 */}
              <div className="rounded-2xl border border-purple-500/40 bg-purple-500/10 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-purple-300">Level AAA</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      2.4.12 Focus Not Obscured (Enhanced)
                    </h3>
                  </div>
                  <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs font-semibold text-purple-200">NEW</span>
                </div>
                <p className="mt-4 text-base text-slate-200 leading-relaxed">
                  The stricter version: no <em>part</em> of the focused component may be hidden by author-created content. While the minimum (AA) allows partial obscuring, the enhanced version demands the entire focus indicator is visible.
                </p>
              </div>

              {/* 2.4.13 */}
              <div className="rounded-2xl border border-purple-500/40 bg-purple-500/10 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-purple-300">Level AAA</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      2.4.13 Focus Appearance
                    </h3>
                  </div>
                  <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs font-semibold text-purple-200">NEW</span>
                </div>
                <p className="mt-4 text-base text-slate-200 leading-relaxed">
                  Focus indicators must have a minimum area (at least as large as a 2 CSS pixel border around the component) and a 3:1 contrast ratio between focused and unfocused states. This gives the existing 2.4.7 "Focus Visible" criterion real teeth.
                </p>
                <p className="mt-3 text-sm text-slate-300">
                  <strong>Note:</strong> This is Level AAA, so it isn't required for standard compliance. But if you're designing custom focus styles, follow these specs anyway — they ensure your focus indicators actually work for low-vision users.
                </p>
              </div>

              {/* 2.5.7 */}
              <div className="rounded-2xl border border-sky-500/40 bg-sky-500/10 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-sky-300">Level AA</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      2.5.7 Dragging Movements
                    </h3>
                  </div>
                  <span className="rounded-full bg-sky-500/20 px-3 py-1 text-xs font-semibold text-sky-200">NEW</span>
                </div>
                <p className="mt-4 text-base text-slate-200 leading-relaxed">
                  Any functionality that uses a dragging movement (drag-and-drop file uploads, sortable lists, map panning, range sliders) must offer a single-pointer alternative that doesn't require dragging.
                </p>
                <p className="mt-3 text-sm text-slate-300">
                  <strong>Who this helps:</strong> Users with motor impairments, tremors, or who use head pointers, eye-tracking, or speech-controlled cursors. Dragging requires sustained, precise movement that many users cannot perform.
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  <strong>Fix:</strong> Add click-based alternatives. Range sliders → add +/− buttons or a text input. Sortable lists → add "Move up/down" buttons. File upload → keep the drag zone but also provide a file picker button.
                </p>
              </div>

              {/* 2.5.8 */}
              <div className="rounded-2xl border border-sky-500/40 bg-sky-500/10 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-sky-300">Level AA</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      2.5.8 Target Size (Minimum)
                    </h3>
                  </div>
                  <span className="rounded-full bg-sky-500/20 px-3 py-1 text-xs font-semibold text-sky-200">NEW</span>
                </div>
                <p className="mt-4 text-base text-slate-200 leading-relaxed">
                  Interactive targets must be at least <strong>24×24 CSS pixels</strong>, or have sufficient spacing from adjacent targets. Exceptions exist for inline links within sentences, browser-default controls, and cases where the specific presentation is legally or functionally essential.
                </p>
                <p className="mt-3 text-sm text-slate-300">
                  <strong>Context:</strong> WCAG 2.1 already had 2.5.5 Target Size (Enhanced) at Level AAA requiring 44×44px. WCAG 2.2's new 2.5.8 brings a more practical 24×24px minimum to Level AA — making it a compliance requirement.
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  <strong>Fix:</strong> Increase padding on buttons and links. Use <code className="rounded bg-slate-800 px-2 py-0.5 text-xs text-sky-300">min-height: 44px; min-width: 44px;</code> as a best practice even though 24px is the minimum.
                </p>
              </div>

              {/* 3.2.6 */}
              <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Level A</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      3.2.6 Consistent Help
                    </h3>
                  </div>
                  <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-200">NEW</span>
                </div>
                <p className="mt-4 text-base text-slate-200 leading-relaxed">
                  If help mechanisms (contact info, live chat, FAQ links, self-help options) are repeated on multiple pages, they must appear in the <strong>same relative order</strong> on every page. This doesn't mandate that you <em>have</em> help — just that if you do, it's consistent.
                </p>
                <p className="mt-3 text-sm text-slate-300">
                  <strong>Who this helps:</strong> Users with cognitive disabilities who rely on consistent page structure to find help. If your "Contact Us" link moves from the header on one page to the footer on another, it becomes a barrier.
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  <strong>Fix:</strong> Use a global component (shared header/footer) for all help mechanisms. Most modern frameworks already do this naturally.
                </p>
              </div>

              {/* 3.3.7 */}
              <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Level A</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      3.3.7 Redundant Entry
                    </h3>
                  </div>
                  <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-200">NEW</span>
                </div>
                <p className="mt-4 text-base text-slate-200 leading-relaxed">
                  Information the user has already entered in the same process must be auto-populated or available for selection — unless re-entry is essential (e.g., "confirm your password") or the data has changed.
                </p>
                <p className="mt-3 text-sm text-slate-300">
                  <strong>Common violation:</strong> Multi-step checkout flows that ask for the shipping address, then require typing the billing address from scratch even when they're the same.
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  <strong>Fix:</strong> Offer "same as shipping" checkboxes. Use HTML <code className="rounded bg-slate-800 px-2 py-0.5 text-xs text-sky-300">autocomplete</code> attributes. Persist form data across steps.
                </p>
              </div>

              {/* 3.3.8 */}
              <div className="rounded-2xl border border-sky-500/40 bg-sky-500/10 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-sky-300">Level AA</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      3.3.8 Accessible Authentication (Minimum)
                    </h3>
                  </div>
                  <span className="rounded-full bg-sky-500/20 px-3 py-1 text-xs font-semibold text-sky-200">NEW</span>
                </div>
                <p className="mt-4 text-base text-slate-200 leading-relaxed">
                  Authentication must not rely on <strong>cognitive function tests</strong> — memorizing passwords, transcribing codes, solving puzzles, performing calculations — <em>unless</em> a mechanism exists to assist (password managers, copy-paste, biometrics) or a non-cognitive alternative is available.
                </p>
                <p className="mt-3 text-sm text-slate-300">
                  <strong>What this means in practice:</strong> If your login form blocks password managers (e.g., disabling paste on the password field) or uses CAPTCHAs without alternatives, you're violating this criterion.
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  <strong>Fix:</strong> Never disable paste on password fields. Use invisible CAPTCHAs (reCAPTCHA v3) or offer audio/email verification alternatives. Support OAuth/SSO and passkeys.
                </p>
              </div>

              {/* 3.3.9 */}
              <div className="rounded-2xl border border-purple-500/40 bg-purple-500/10 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-purple-300">Level AAA</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      3.3.9 Accessible Authentication (Enhanced)
                    </h3>
                  </div>
                  <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs font-semibold text-purple-200">NEW</span>
                </div>
                <p className="mt-4 text-base text-slate-200 leading-relaxed">
                  The stricter version: no cognitive function test at all for authentication, with only object recognition (e.g., "select all images with traffic lights") and personal content (e.g., "which photo is yours?") as allowed exceptions. No reliance on transcription, memorization, or calculation.
                </p>
              </div>
            </div>
          </section>

          {/* 5. What Was Removed */}
          <section id="removed-parsing" className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
            <h2 className="text-3xl font-semibold text-white">
              5. What Was Removed: 4.1.1 Parsing
            </h2>
            <p className="text-lg leading-relaxed">
              WCAG 2.2 <strong>removed criterion 4.1.1 Parsing</strong>, which required proper HTML nesting, unique IDs, and valid markup. Why? Modern browsers and assistive technologies have their own robust HTML parsers that handle malformed markup gracefully. The criterion was written for an era of inconsistent browser parsing that no longer exists.
            </p>
            <p className="text-lg leading-relaxed">
              <strong className="text-white">What this means for you:</strong> Clean HTML is still best practice for SEO, performance, and maintainability. But you won't fail a WCAG 2.2 audit for a duplicate ID or an unclosed tag. The practical accessibility issues that 4.1.1 was meant to catch (like duplicate IDs on form fields breaking label associations) are covered by other criteria.
            </p>
          </section>

          {/* 6. Legal Requirements */}
          <section id="legal-requirements" className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              6. Which WCAG Standard Is Legally Required?
            </h2>
            <p className="text-lg leading-relaxed">
              This is where it gets nuanced. Different laws reference different WCAG versions, and "legally required" varies by jurisdiction and sector. Here's the current landscape as of 2026:
            </p>

            <div className="space-y-6 mt-6">
              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <h3 className="text-xl font-semibold text-white">🇺🇸 United States — ADA Title II (Government)</h3>
                <p className="mt-3 text-base text-slate-300 leading-relaxed">
                  The DOJ's April 2024 rule explicitly requires <strong>WCAG 2.1 Level AA</strong> for state and local government websites. Deadlines: April 24, 2026 for large agencies (50,000+ population), April 26, 2027 for smaller agencies. This is the first time ADA regulations have named a specific WCAG version.
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  For more details, see our <Link href="/blog/ada-website-compliance-guide" className="text-sky-400 hover:text-sky-300 underline">ADA Website Compliance Guide</Link>.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <h3 className="text-xl font-semibold text-white">🇺🇸 United States — ADA Title III (Private Sector)</h3>
                <p className="mt-3 text-base text-slate-300 leading-relaxed">
                  No regulation specifies a WCAG version for private-sector websites yet. However, courts and settlement agreements consistently reference <strong>WCAG 2.1 Level AA</strong> as the benchmark. DOJ statements and amicus briefs also point to 2.1 AA as the expected standard for "places of public accommodation."
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <h3 className="text-xl font-semibold text-white">🇺🇸 United States — Section 508 (Federal)</h3>
                <p className="mt-3 text-base text-slate-300 leading-relaxed">
                  Section 508 was refreshed in 2018 to incorporate <strong>WCAG 2.0 Level A and AA</strong> by reference. The Access Board has signaled potential updates to reference WCAG 2.1 or 2.2, but no rule change has been published yet. Federal agencies should plan for WCAG 2.1 AA minimum.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <h3 className="text-xl font-semibold text-white">🇪🇺 European Union — European Accessibility Act (EAA)</h3>
                <p className="mt-3 text-base text-slate-300 leading-relaxed">
                  The EAA took effect June 28, 2025, requiring accessibility for products and services sold in the EU. The harmonized standard EN 301 549 references <strong>WCAG 2.1 Level AA</strong>. EN 301 549 is expected to update to reference WCAG 2.2, but the timeline is unclear. Companies serving EU customers should target WCAG 2.1 AA as the legal floor.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <h3 className="text-xl font-semibold text-white">🇬🇧 United Kingdom</h3>
                <p className="mt-3 text-base text-slate-300 leading-relaxed">
                  The Public Sector Bodies (Websites and Mobile Applications) Accessibility Regulations 2018 require <strong>WCAG 2.1 Level AA</strong> for public-sector sites. The Equality Act 2010 applies broadly to private-sector sites, with WCAG 2.1 AA as the de facto standard.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <h3 className="text-xl font-semibold text-white">🇨🇦 Canada — Accessible Canada Act</h3>
                <p className="mt-3 text-base text-slate-300 leading-relaxed">
                  Federal organizations must meet <strong>WCAG 2.1 Level AA</strong>. Provincial standards vary: Ontario's AODA references WCAG 2.0 Level AA but is expected to update.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-amber-500/40 bg-amber-500/10 p-6 mt-6">
              <p className="text-lg font-semibold text-amber-200">⚡ The Bottom Line</p>
              <p className="mt-3 text-base text-slate-200 leading-relaxed">
                <strong>WCAG 2.1 Level AA</strong> is the legal standard across the US, EU, UK, and Canada in 2026. No law currently mandates WCAG 2.2. But WCAG 2.2 is the <em>W3C recommendation</em> — meaning it's the version the standards body considers current and complete. Laws will catch up; the question is when, not if.
              </p>
            </div>
          </section>

          {/* 7. When to Target 2.2 vs 2.1 */}
          <section id="when-to-target" className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
            <h2 className="text-3xl font-semibold text-white">
              7. When to Target WCAG 2.2 vs 2.1
            </h2>
            <p className="text-lg leading-relaxed">
              The right target depends on your situation. Here's a decision framework:
            </p>

            <div className="space-y-6 mt-6">
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6">
                <h3 className="text-xl font-semibold text-emerald-300">✅ Target WCAG 2.2 Level AA When:</h3>
                <ul className="mt-4 space-y-3 text-base text-slate-300">
                  <li className="flex gap-3">
                    <span className="text-emerald-400 flex-shrink-0">→</span>
                    <span><strong>You're building something new</strong> — new site, redesign, or new product. Building 2.2-compliant from the start costs almost nothing extra vs retrofitting later.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400 flex-shrink-0">→</span>
                    <span><strong>You already meet WCAG 2.1 AA</strong> — the gap between 2.1 and 2.2 is only 6 criteria at A/AA level. Most are straightforward to implement.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400 flex-shrink-0">→</span>
                    <span><strong>You serve international markets</strong> — especially the EU, where EN 301 549 will likely update to reference 2.2 in the near future.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400 flex-shrink-0">→</span>
                    <span><strong>You're in a high-litigation industry</strong> — e-commerce, finance, healthcare, education. Targeting 2.2 demonstrates good faith and reduces legal exposure.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400 flex-shrink-0">→</span>
                    <span><strong>You have mobile-heavy traffic</strong> — WCAG 2.2's target size and dragging requirements directly improve mobile UX for all users.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400 flex-shrink-0">→</span>
                    <span><strong>Your procurement or RFPs require "current WCAG"</strong> — increasingly, enterprise buyers specify the latest W3C recommendation.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-sky-500/30 bg-sky-500/5 p-6">
                <h3 className="text-xl font-semibold text-sky-300">🎯 Target WCAG 2.1 Level AA When:</h3>
                <ul className="mt-4 space-y-3 text-base text-slate-300">
                  <li className="flex gap-3">
                    <span className="text-sky-400 flex-shrink-0">→</span>
                    <span><strong>You're still working toward basic compliance</strong> — if you haven't met 2.1 AA yet, don't skip ahead. Get the foundation right first.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-sky-400 flex-shrink-0">→</span>
                    <span><strong>You need to satisfy a specific legal requirement</strong> — ADA Title II, the EAA, or a settlement agreement that names WCAG 2.1 AA explicitly.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-sky-400 flex-shrink-0">→</span>
                    <span><strong>Budget and timeline are tight</strong> — meet 2.1 AA first as your legal safe harbor, then plan a 2.2 upgrade in the next development cycle.</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-base text-slate-400 italic mt-6">
              <strong>Our recommendation:</strong> Target WCAG 2.2 Level AA. Since WCAG 2.2 is a superset of 2.1, meeting 2.2 automatically satisfies every law that references 2.1. You get legal compliance <em>and</em> future-proofing in one effort.
            </p>
          </section>

          {/* 8. Implementation Guide */}
          <section id="implementation-guide" className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              8. Practical Implementation Guide: Upgrading to WCAG 2.2
            </h2>
            <p className="text-lg leading-relaxed">
              If you're already WCAG 2.1 Level AA compliant (or close), here's a prioritized action plan for the 6 new A/AA criteria in WCAG 2.2. We've ordered them by typical effort — easiest first:
            </p>

            <div className="space-y-6 mt-8">
              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-bold">1</span>
                  <h3 className="text-xl font-semibold text-white">Consistent Help (3.2.6) — Level A</h3>
                  <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs text-emerald-300">Quick win</span>
                </div>
                <p className="text-base text-slate-300 leading-relaxed">
                  If you use a shared layout component (header, footer, sidebar) for help mechanisms, you likely pass already. Verify that help links, chat widgets, and contact info appear in the same position across all pages.
                </p>
                <p className="mt-3 text-sm text-slate-400">
                  <strong>Effort:</strong> 1-2 hours audit + fix. Most modern sites pass naturally.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-bold">2</span>
                  <h3 className="text-xl font-semibold text-white">Redundant Entry (3.3.7) — Level A</h3>
                  <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs text-emerald-300">Quick win</span>
                </div>
                <p className="text-base text-slate-300 leading-relaxed">
                  Audit multi-step forms: checkout flows, registration wizards, application forms. Wherever the user enters data in step 1 that's needed again in step 3, auto-populate it or offer a selection.
                </p>
                <pre className="mt-3 overflow-x-auto rounded-xl border border-emerald-500/40 bg-slate-950/80 p-4 text-sm text-emerald-100">
{`<!-- Good: HTML autocomplete attributes -->
<input type="text" name="shipping-city" autocomplete="shipping locality" />

<!-- Good: "Same as shipping" checkbox -->
<label>
  <input type="checkbox" id="same-address" />
  Billing address same as shipping
</label>`}
                </pre>
                <p className="mt-3 text-sm text-slate-400">
                  <strong>Effort:</strong> 2-8 hours depending on form complexity.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 text-sm font-bold">3</span>
                  <h3 className="text-xl font-semibold text-white">Accessible Authentication (3.3.8) — Level AA</h3>
                </div>
                <p className="text-base text-slate-300 leading-relaxed">
                  Check your login, signup, and password reset flows:
                </p>
                <ul className="mt-3 space-y-2 text-base text-slate-300">
                  <li className="flex gap-3">
                    <span className="text-sky-400">•</span>
                    <span>Password managers work (no <code className="rounded bg-slate-800 px-2 py-0.5 text-xs text-sky-300">autocomplete="off"</code> on password fields, no paste blocking)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-sky-400">•</span>
                    <span>CAPTCHAs have alternatives (invisible reCAPTCHA, audio challenges, email verification)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-sky-400">•</span>
                    <span>You don't require transcribing a code from one device to another without copy-paste support</span>
                  </li>
                </ul>
                <p className="mt-3 text-sm text-slate-400">
                  <strong>Effort:</strong> 2-4 hours if you just need to remove paste-blocking. More if you need to replace CAPTCHAs.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 text-sm font-bold">4</span>
                  <h3 className="text-xl font-semibold text-white">Focus Not Obscured (2.4.11) — Level AA</h3>
                </div>
                <p className="text-base text-slate-300 leading-relaxed">
                  Tab through every page and check if focused elements get hidden behind sticky headers, footers, cookie banners, or chat widgets. The fix:
                </p>
                <pre className="mt-3 overflow-x-auto rounded-xl border border-sky-500/40 bg-slate-950/80 p-4 text-sm text-sky-100">
{`/* Account for sticky header when scrolling to focused elements */
html {
  scroll-padding-top: 80px; /* Match your header height */
  scroll-padding-bottom: 60px; /* Match any sticky footer */
}

/* Ensure cookie banners don't block focus */
.cookie-banner {
  /* Position at bottom but don't cover content */
  position: fixed;
  bottom: 0;
  z-index: 1000;
}

/* When cookie banner is visible, add body padding */
body.has-cookie-banner {
  padding-bottom: 80px;
}`}
                </pre>
                <p className="mt-3 text-sm text-slate-400">
                  <strong>Effort:</strong> 2-6 hours. Mostly CSS adjustments and testing.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 text-sm font-bold">5</span>
                  <h3 className="text-xl font-semibold text-white">Target Size Minimum (2.5.8) — Level AA</h3>
                </div>
                <p className="text-base text-slate-300 leading-relaxed">
                  Audit all interactive elements for 24×24px minimum size. Pay special attention to icon buttons, close buttons, pagination links, and mobile navigation toggles. Best practice is 44×44px per Apple/Google HIG, even though 24px is the WCAG minimum.
                </p>
                <pre className="mt-3 overflow-x-auto rounded-xl border border-sky-500/40 bg-slate-950/80 p-4 text-sm text-sky-100">
{`/* Global baseline for interactive elements */
button, a, [role="button"], input, select, textarea {
  min-height: 44px;
  min-width: 44px;
}

/* For inline links in text, use padding instead */
p a, li a {
  min-height: auto;
  min-width: auto;
  padding: 2px 0; /* Exempt from target size per WCAG 2.2 */
}`}
                </pre>
                <p className="mt-3 text-sm text-slate-400">
                  <strong>Effort:</strong> 4-16 hours depending on how many small interactive elements exist.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 text-sm font-bold">6</span>
                  <h3 className="text-xl font-semibold text-white">Dragging Movements (2.5.7) — Level AA</h3>
                </div>
                <p className="text-base text-slate-300 leading-relaxed">
                  Inventory every dragging interaction on your site — sliders, sortable lists, kanban boards, map widgets, drag-and-drop uploads — and ensure each has a non-dragging alternative.
                </p>
                <ul className="mt-3 space-y-2 text-base text-slate-300">
                  <li className="flex gap-3">
                    <span className="text-sky-400">•</span>
                    <span><strong>Range sliders:</strong> Add a text input or +/− stepper buttons</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-sky-400">•</span>
                    <span><strong>Sortable lists:</strong> Add "Move up / Move down / Move to position" controls</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-sky-400">•</span>
                    <span><strong>File upload:</strong> Keep drag zone, ensure the file picker button always works</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-sky-400">•</span>
                    <span><strong>Map widgets:</strong> Add keyboard pan controls or address search</span>
                  </li>
                </ul>
                <p className="mt-3 text-sm text-slate-400">
                  <strong>Effort:</strong> Highly variable — 0 hours if you have no drag interactions, 20+ hours for complex apps with kanban boards or custom editors.
                </p>
              </div>
            </div>
          </section>

          {/* 9. How RatedWithAI Tests */}
          <section id="testing-both" className="space-y-6 rounded-3xl border border-slate-800/70 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950 p-8">
            <h2 className="text-3xl font-semibold text-white">
              9. How RatedWithAI Tests Against Both Standards
            </h2>
            <p className="text-lg leading-relaxed">
              <Link href="/tools/free-accessibility-checker" className="text-sky-400 hover:text-sky-300 underline">RatedWithAI's scanner</Link> tests your site against <strong>both WCAG 2.1 and 2.2</strong> in a single scan, giving you a clear picture of where you stand against each version.
            </p>

            <div className="space-y-4 mt-6">
              <div className="flex gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-semibold">1</span>
                <div>
                  <p className="text-lg font-semibold text-white">Automated Rule Engine</p>
                  <p className="text-base text-slate-300">
                    Our scanner runs axe-core and custom rules covering all automatable WCAG 2.1 and 2.2 success criteria. Each finding is tagged with the specific WCAG version and level it applies to — so you can filter by "WCAG 2.2 AA only" to see exactly what's new.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-semibold">2</span>
                <div>
                  <p className="text-lg font-semibold text-white">AI-Powered Analysis</p>
                  <p className="text-base text-slate-300">
                    Beyond automated checks, our AI layer evaluates patterns that rules can't catch — like whether help mechanisms are consistently placed across pages (3.2.6) or whether your authentication flow relies on cognitive tests (3.3.8).
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-semibold">3</span>
                <div>
                  <p className="text-lg font-semibold text-white">Version-Specific Reporting</p>
                  <p className="text-base text-slate-300">
                    Reports clearly separate WCAG 2.1 findings from the additional WCAG 2.2 criteria. You can track your compliance score against each version independently, making it easy to demonstrate 2.1 AA compliance for legal requirements while working toward 2.2.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-semibold">4</span>
                <div>
                  <p className="text-lg font-semibold text-white">Continuous Monitoring</p>
                  <p className="text-base text-slate-300">
                    Accessibility isn't a one-time project. Paid plans run scheduled scans across your entire site and alert you when new pages or deployments introduce WCAG violations — whether from 2.1 or 2.2 criteria.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/tools/free-accessibility-checker"
                className="rounded-xl bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 px-8 py-4 text-center text-base font-semibold text-slate-950 transition hover:shadow-lg hover:shadow-blue-500/50"
              >
                Scan Your Site Free
              </Link>
              <Link
                href="/wcag"
                className="rounded-xl border border-slate-600 px-8 py-4 text-center text-base font-semibold text-slate-200 transition hover:border-slate-400 hover:bg-slate-900"
              >
                Browse All WCAG Criteria
              </Link>
            </div>
          </section>

          {/* 10. FAQ */}
          <section id="faq" className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              10. Frequently Asked Questions
            </h2>

            <div className="space-y-4 mt-6">
              <div className="rounded-2xl border border-slate-800/70 bg-slate-900/50 p-6">
                <h3 className="text-lg font-semibold text-white">What is the difference between WCAG 2.1 and WCAG 2.2?</h3>
                <p className="mt-3 text-base text-slate-300 leading-relaxed">
                  WCAG 2.2 adds 9 new success criteria on top of WCAG 2.1 and removes one (4.1.1 Parsing). The new criteria focus on mobile usability, cognitive accessibility, and better keyboard support — including focus visibility, dragging alternatives, target size minimums, consistent help, redundant entry prevention, and accessible authentication.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/70 bg-slate-900/50 p-6">
                <h3 className="text-lg font-semibold text-white">Which WCAG standard is legally required in 2026?</h3>
                <p className="mt-3 text-base text-slate-300 leading-relaxed">
                  Most laws reference <strong>WCAG 2.1 Level AA</strong>. The DOJ's ADA Title II rule and the European Accessibility Act both use WCAG 2.1 AA as their benchmark. No law currently mandates WCAG 2.2, but it is the W3C's current recommendation and the direction standards are heading.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/70 bg-slate-900/50 p-6">
                <h3 className="text-lg font-semibold text-white">Is WCAG 2.2 backward-compatible with 2.1?</h3>
                <p className="mt-3 text-base text-slate-300 leading-relaxed">
                  Yes. WCAG 2.2 includes all WCAG 2.1 criteria plus 9 new ones. A site conforming to WCAG 2.2 Level AA automatically conforms to WCAG 2.1 Level AA. The only change is that 4.1.1 Parsing was removed (it's obsolete with modern HTML5 parsing).
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/70 bg-slate-900/50 p-6">
                <h3 className="text-lg font-semibold text-white">Should I follow WCAG 2.1 or 2.2?</h3>
                <p className="mt-3 text-base text-slate-300 leading-relaxed">
                  If you're starting fresh or redesigning, target WCAG 2.2 Level AA. If you're already 2.1 compliant, upgrading to 2.2 is incremental — only 6 new criteria at A/AA. Since 2.2 is a superset of 2.1, meeting 2.2 satisfies both standards simultaneously.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/70 bg-slate-900/50 p-6">
                <h3 className="text-lg font-semibold text-white">How long does it take to upgrade from WCAG 2.1 to 2.2?</h3>
                <p className="mt-3 text-base text-slate-300 leading-relaxed">
                  For a typical content website that already meets WCAG 2.1 AA, the upgrade takes <strong>1-3 weeks</strong> of focused effort. The main tasks are: auditing touch target sizes, adding alternatives to any drag interactions, checking focus visibility with sticky elements, and reviewing authentication flows. Complex web applications with custom editors or kanban-style interfaces may need more time.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/70 bg-slate-900/50 p-6">
                <h3 className="text-lg font-semibold text-white">What about WCAG 3.0?</h3>
                <p className="mt-3 text-base text-slate-300 leading-relaxed">
                  WCAG 3.0 is under development but won't be finalized for several years (earliest estimates: 2028-2030). It will be a significantly different approach — new scoring system, new conformance model — but is not yet stable enough to plan around. WCAG 2.2 is the standard to target through at least 2028.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-3xl border border-slate-800/70 bg-gradient-to-r from-slate-900 via-slate-900/70 to-slate-950 p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                  WCAG 2.1 + 2.2 Compliance Check
                </p>
                <h3 className="mt-3 text-3xl font-semibold text-white">
                  See Where You Stand — Against Both Standards
                </h3>
                <p className="mt-3 text-base text-slate-300">
                  Get a detailed accessibility report showing your WCAG 2.1 and 2.2 compliance — free, no signup required.
                </p>
              </div>
              <Link
                href="/tools/free-accessibility-checker"
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
                href="/blog/ada-website-compliance-guide"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-rose-400">Compliance Guide</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  ADA Website Compliance: The Definitive Guide for 2026
                </p>
              </Link>
              <Link
                href="/wcag/1-4-3-contrast-minimum"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-purple-400">WCAG Criterion</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  1.4.3 Contrast Minimum — Explained
                </p>
              </Link>
              <Link
                href="/wcag"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-purple-400">Reference</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Complete WCAG Criteria Reference
                </p>
              </Link>
              <Link
                href="/tools/free-accessibility-checker"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-sky-400">Free Tool</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Free Accessibility Checker
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
