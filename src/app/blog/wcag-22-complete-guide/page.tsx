/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "WCAG 2.2 vs 2.1: Complete Technical Comparison (2026) | RatedWithAI",
  description:
    "Detailed breakdown of every change between WCAG 2.1 and WCAG 2.2, including the 9 new success criteria, removed criterion, and practical implementation guidance.",
  keywords: [
    "WCAG 2.2 vs 2.1",
    "WCAG 2.2 changes",
    "WCAG 2.2 new criteria",
    "WCAG update 2024",
    "web accessibility guidelines",
    "WCAG 2.2 requirements",
  ],
  openGraph: {
    title: "WCAG 2.2 vs 2.1: Complete Technical Comparison (2026)",
    description:
      "Detailed breakdown of every change between WCAG 2.1 and WCAG 2.2, including the 9 new success criteria and practical implementation guidance.",
    type: "article",
    publishedTime: "2026-02-21T00:00:00.000Z",
    authors: ["RatedWithAI Team"],
  },
};

export default function Wcag22CompleteGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "WCAG 2.2 vs 2.1: Complete Technical Comparison (2026)",
    description:
      "Comprehensive technical breakdown of all changes between WCAG 2.1 and WCAG 2.2 with implementation guidance.",
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

          <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8">
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 via-blue-400 to-purple-500 text-slate-900 font-bold">
                R
              </span>
              <div>
                <p className="text-lg font-semibold tracking-tight">RatedWithAI</p>
                <p className="text-xs text-slate-400">Blog</p>
              </div>
            </Link>
            <Link
              className="rounded-full border border-slate-700/60 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-400 hover:text-white"
              href="/"
            >
              Scan your site
            </Link>
          </header>

          <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-14 pt-4">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              Technical Guide
            </p>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              WCAG 2.2 vs 2.1: What Changed and Why It Matters
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              A complete technical breakdown of the 9 new success criteria in WCAG 2.2, the one criterion that was removed, and exactly what you need to change to stay compliant.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
              <time dateTime="2026-02-21">February 21, 2026</time>
              <span>·</span>
              <span>10 min read</span>
            </div>
          </section>
        </div>

        <article className="mx-auto w-full max-w-4xl space-y-10 px-6 pb-24 text-slate-200">
          {/* Quick Summary */}
          <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
            <h2 className="text-3xl font-semibold text-white">
              TL;DR: Quick Summary
            </h2>
            <p className="text-lg leading-relaxed">
              WCAG 2.2 was published as a W3C Recommendation on October 5, 2023. Here's what changed:
            </p>
            <div className="grid gap-4 md:grid-cols-3 mt-4">
              <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-center">
                <p className="text-3xl font-bold text-emerald-300">+9</p>
                <p className="text-sm text-emerald-200">New Success Criteria</p>
              </div>
              <div className="rounded-xl border border-rose-500/40 bg-rose-500/10 p-4 text-center">
                <p className="text-3xl font-bold text-rose-300">-1</p>
                <p className="text-sm text-rose-200">Removed Criterion</p>
              </div>
              <div className="rounded-xl border border-sky-500/40 bg-sky-500/10 p-4 text-center">
                <p className="text-3xl font-bold text-sky-300">6</p>
                <p className="text-sm text-sky-200">AA Level Criteria</p>
              </div>
            </div>
            <p className="text-base text-slate-300 mt-4">
              The biggest changes focus on <strong>cognitive accessibility</strong>, <strong>mobile usability</strong>, and <strong>authentication flows</strong>—areas that WCAG 2.1 didn't address thoroughly.
            </p>
          </section>

          {/* Why WCAG 2.2 Matters */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Why WCAG 2.2 Matters
            </h2>
            <p className="text-lg leading-relaxed">
              If your organization currently targets WCAG 2.1 AA compliance, you're likely wondering: <em>Do we need to update?</em>
            </p>
            <p className="text-lg leading-relaxed">
              The short answer: <strong>Yes, eventually.</strong> Here's why:
            </p>
            <ul className="space-y-3 text-lg">
              <li className="flex gap-3">
                <span className="text-sky-400">→</span>
                <span><strong>Legal landscape is shifting:</strong> The DOJ and courts are increasingly referencing the latest WCAG version. The EU's EN 301 549 standard has already incorporated WCAG 2.2.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-sky-400">→</span>
                <span><strong>Government deadlines:</strong> Section 508 refresh is expected to require WCAG 2.2 compliance for federal agencies.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-sky-400">→</span>
                <span><strong>Competitive advantage:</strong> Better accessibility means better UX for everyone, including your non-disabled users.</span>
              </li>
            </ul>
          </section>

          {/* The 9 New Success Criteria */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              The 9 New Success Criteria in WCAG 2.2
            </h2>
            <p className="text-lg leading-relaxed">
              Here's a complete breakdown of each new criterion, what it means, and how to implement it.
            </p>

            {/* 2.4.11 Focus Not Obscured (Minimum) */}
            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6 mt-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="rounded-lg bg-amber-500/20 px-3 py-1 text-sm font-semibold text-amber-300">AA</span>
                <h3 className="text-xl font-semibold text-white">2.4.11 Focus Not Obscured (Minimum)</h3>
              </div>
              <p className="text-base text-slate-300 mb-4">
                When a user interface component receives keyboard focus, the component must not be entirely hidden due to author-created content.
              </p>
              <div className="rounded-xl bg-slate-900 p-4">
                <p className="text-sm font-semibold text-slate-400 mb-2">Why it matters:</p>
                <p className="text-sm text-slate-300">
                  Sticky headers, cookie banners, and chat widgets often cover the focused element, leaving keyboard users unable to see where they are on the page.
                </p>
              </div>
              <div className="mt-4 rounded-xl bg-slate-900 p-4">
                <p className="text-sm font-semibold text-slate-400 mb-2">How to fix:</p>
                <ul className="space-y-1 text-sm text-slate-300">
                  <li>• Ensure sticky elements don't cover interactive content</li>
                  <li>• Use scroll-padding-top to offset for fixed headers</li>
                  <li>• Close modals/popups when focus moves elsewhere</li>
                </ul>
              </div>
            </div>

            {/* 2.4.12 Focus Not Obscured (Enhanced) */}
            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="rounded-lg bg-purple-500/20 px-3 py-1 text-sm font-semibold text-purple-300">AAA</span>
                <h3 className="text-xl font-semibold text-white">2.4.12 Focus Not Obscured (Enhanced)</h3>
              </div>
              <p className="text-base text-slate-300 mb-4">
                No part of the focus indicator can be hidden by author-created content—stricter than the AA version.
              </p>
              <div className="rounded-xl bg-slate-900 p-4">
                <p className="text-sm font-semibold text-slate-400 mb-2">Implementation:</p>
                <p className="text-sm text-slate-300">
                  Requires the entire focused element (including its outline) to be fully visible at all times. Consider this for premium accessibility targets.
                </p>
              </div>
            </div>

            {/* 2.4.13 Focus Appearance */}
            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="rounded-lg bg-purple-500/20 px-3 py-1 text-sm font-semibold text-purple-300">AAA</span>
                <h3 className="text-xl font-semibold text-white">2.4.13 Focus Appearance</h3>
              </div>
              <p className="text-base text-slate-300 mb-4">
                Focus indicators must meet specific size and contrast requirements: at least a 2px solid outline or equivalent area, with 3:1 contrast against adjacent colors.
              </p>
              <div className="rounded-xl bg-slate-900 p-4">
                <p className="text-sm font-semibold text-slate-400 mb-2">Quick implementation:</p>
                <code className="text-sm text-sky-300">
                  :focus-visible {"{"} outline: 3px solid #2563eb; outline-offset: 2px; {"}"}
                </code>
              </div>
            </div>

            {/* 2.5.7 Dragging Movements */}
            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="rounded-lg bg-amber-500/20 px-3 py-1 text-sm font-semibold text-amber-300">AA</span>
                <h3 className="text-xl font-semibold text-white">2.5.7 Dragging Movements</h3>
              </div>
              <p className="text-base text-slate-300 mb-4">
                Any functionality that uses dragging can be achieved by a single pointer without dragging, unless dragging is essential.
              </p>
              <div className="rounded-xl bg-slate-900 p-4">
                <p className="text-sm font-semibold text-slate-400 mb-2">Common violations:</p>
                <ul className="space-y-1 text-sm text-slate-300">
                  <li>• Drag-to-reorder lists with no alternative</li>
                  <li>• Slider controls without +/- buttons or input fields</li>
                  <li>• Map pan/zoom with only drag interaction</li>
                </ul>
              </div>
              <div className="mt-4 rounded-xl bg-slate-900 p-4">
                <p className="text-sm font-semibold text-slate-400 mb-2">How to fix:</p>
                <p className="text-sm text-slate-300">
                  Add up/down buttons for reordering, provide a text input for sliders, or allow click-to-select-then-click-to-place for drag interactions.
                </p>
              </div>
            </div>

            {/* 2.5.8 Target Size (Minimum) */}
            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="rounded-lg bg-amber-500/20 px-3 py-1 text-sm font-semibold text-amber-300">AA</span>
                <h3 className="text-xl font-semibold text-white">2.5.8 Target Size (Minimum)</h3>
              </div>
              <p className="text-base text-slate-300 mb-4">
                The target for pointer inputs must be at least 24×24 CSS pixels, with exceptions for inline links, user-resizable targets, and legally required sizes.
              </p>
              <div className="rounded-xl bg-slate-900 p-4">
                <p className="text-sm font-semibold text-slate-400 mb-2">Key point:</p>
                <p className="text-sm text-slate-300">
                  This is smaller than the 44×44px AAA requirement but larger than many current implementations. Particularly important for mobile touch targets.
                </p>
              </div>
              <div className="mt-4 rounded-xl bg-slate-900 p-4">
                <p className="text-sm font-semibold text-slate-400 mb-2">CSS example:</p>
                <code className="text-sm text-sky-300">
                  .button {"{"} min-width: 24px; min-height: 24px; {"}"}
                </code>
              </div>
            </div>

            {/* 3.2.6 Consistent Help */}
            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="rounded-lg bg-sky-500/20 px-3 py-1 text-sm font-semibold text-sky-300">A</span>
                <h3 className="text-xl font-semibold text-white">3.2.6 Consistent Help</h3>
              </div>
              <p className="text-base text-slate-300 mb-4">
                If a web page contains help mechanisms (contact info, chatbot, FAQ link), they must appear in the same relative order across pages.
              </p>
              <div className="rounded-xl bg-slate-900 p-4">
                <p className="text-sm font-semibold text-slate-400 mb-2">Why it matters:</p>
                <p className="text-sm text-slate-300">
                  Users with cognitive disabilities rely on consistent layouts. If your help chat is in the bottom-right on some pages and top-left on others, it creates confusion.
                </p>
              </div>
            </div>

            {/* 3.3.7 Redundant Entry */}
            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="rounded-lg bg-sky-500/20 px-3 py-1 text-sm font-semibold text-sky-300">A</span>
                <h3 className="text-xl font-semibold text-white">3.3.7 Redundant Entry</h3>
              </div>
              <p className="text-base text-slate-300 mb-4">
                Information previously entered or provided by the user should be auto-populated or available for selection, unless re-entering is essential for security.
              </p>
              <div className="rounded-xl bg-slate-900 p-4">
                <p className="text-sm font-semibold text-slate-400 mb-2">Common violations:</p>
                <ul className="space-y-1 text-sm text-slate-300">
                  <li>• Checkout forms requiring shipping address re-entry for billing</li>
                  <li>• Multi-step wizards that don't remember previous answers</li>
                  <li>• Support forms that don't pre-fill known user info</li>
                </ul>
              </div>
              <div className="mt-4 rounded-xl bg-slate-900 p-4">
                <p className="text-sm font-semibold text-slate-400 mb-2">How to fix:</p>
                <p className="text-sm text-slate-300">
                  Add "Same as shipping" checkboxes, persist form data across steps, and pre-fill known information from user profiles.
                </p>
              </div>
            </div>

            {/* 3.3.8 Accessible Authentication (Minimum) */}
            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="rounded-lg bg-amber-500/20 px-3 py-1 text-sm font-semibold text-amber-300">AA</span>
                <h3 className="text-xl font-semibold text-white">3.3.8 Accessible Authentication (Minimum)</h3>
              </div>
              <p className="text-base text-slate-300 mb-4">
                Cognitive function tests (like remembering passwords or solving puzzles) must not be required for authentication—unless an alternative or assistance is provided.
              </p>
              <div className="rounded-xl bg-slate-900 p-4">
                <p className="text-sm font-semibold text-slate-400 mb-2">This means:</p>
                <ul className="space-y-1 text-sm text-slate-300">
                  <li>• Allow password managers (no paste blocking!)</li>
                  <li>• Support passkeys and biometric authentication</li>
                  <li>• Provide alternative methods for CAPTCHAs</li>
                  <li>• Don't require users to remember arbitrary strings</li>
                </ul>
              </div>
            </div>

            {/* 3.3.9 Accessible Authentication (Enhanced) */}
            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="rounded-lg bg-purple-500/20 px-3 py-1 text-sm font-semibold text-purple-300">AAA</span>
                <h3 className="text-xl font-semibold text-white">3.3.9 Accessible Authentication (Enhanced)</h3>
              </div>
              <p className="text-base text-slate-300 mb-4">
                Stricter version that removes the exception for "object recognition" CAPTCHAs (like "click all the traffic lights").
              </p>
              <div className="rounded-xl bg-slate-900 p-4">
                <p className="text-sm font-semibold text-slate-400 mb-2">For AAA compliance:</p>
                <p className="text-sm text-slate-300">
                  Consider invisible reCAPTCHA, hCaptcha accessibility mode, or eliminate CAPTCHAs entirely in favor of rate limiting and other bot detection.
                </p>
              </div>
            </div>
          </section>

          {/* The Removed Criterion */}
          <section className="space-y-6 rounded-3xl border border-rose-500/30 bg-rose-500/5 p-8">
            <h2 className="text-3xl font-semibold text-white">
              The Criterion That Was Removed
            </h2>
            <p className="text-lg leading-relaxed">
              <strong>4.1.1 Parsing</strong> has been removed from WCAG 2.2. This criterion required HTML to be properly structured with unique IDs and correct nesting.
            </p>
            <p className="text-lg leading-relaxed">
              <strong>Why removed?</strong> Modern browsers and assistive technologies are incredibly resilient to HTML parsing errors. The W3C determined that parsing issues caught by this criterion are now better handled by other success criteria or are no longer accessibility barriers.
            </p>
            <p className="text-lg leading-relaxed">
              <strong>What this means for you:</strong> You still need valid, well-structured HTML for other compliance reasons—but you won't fail WCAG 2.2 specifically because of parsing errors.
            </p>
          </section>

          {/* Summary Table */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Quick Reference: What Level Is Each Criterion?
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-800">
                    <th className="py-3 pr-4 font-semibold text-white">Criterion</th>
                    <th className="py-3 pr-4 font-semibold text-white">Level</th>
                    <th className="py-3 font-semibold text-white">Focus Area</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr>
                    <td className="py-3 pr-4">2.4.11 Focus Not Obscured (Min)</td>
                    <td className="py-3 pr-4"><span className="rounded bg-amber-500/20 px-2 py-0.5 text-amber-300">AA</span></td>
                    <td className="py-3">Keyboard navigation</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">2.4.12 Focus Not Obscured (Enhanced)</td>
                    <td className="py-3 pr-4"><span className="rounded bg-purple-500/20 px-2 py-0.5 text-purple-300">AAA</span></td>
                    <td className="py-3">Keyboard navigation</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">2.4.13 Focus Appearance</td>
                    <td className="py-3 pr-4"><span className="rounded bg-purple-500/20 px-2 py-0.5 text-purple-300">AAA</span></td>
                    <td className="py-3">Visual design</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">2.5.7 Dragging Movements</td>
                    <td className="py-3 pr-4"><span className="rounded bg-amber-500/20 px-2 py-0.5 text-amber-300">AA</span></td>
                    <td className="py-3">Motor accessibility</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">2.5.8 Target Size (Minimum)</td>
                    <td className="py-3 pr-4"><span className="rounded bg-amber-500/20 px-2 py-0.5 text-amber-300">AA</span></td>
                    <td className="py-3">Motor accessibility</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">3.2.6 Consistent Help</td>
                    <td className="py-3 pr-4"><span className="rounded bg-sky-500/20 px-2 py-0.5 text-sky-300">A</span></td>
                    <td className="py-3">Cognitive accessibility</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">3.3.7 Redundant Entry</td>
                    <td className="py-3 pr-4"><span className="rounded bg-sky-500/20 px-2 py-0.5 text-sky-300">A</span></td>
                    <td className="py-3">Cognitive accessibility</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">3.3.8 Accessible Auth (Min)</td>
                    <td className="py-3 pr-4"><span className="rounded bg-amber-500/20 px-2 py-0.5 text-amber-300">AA</span></td>
                    <td className="py-3">Authentication</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">3.3.9 Accessible Auth (Enhanced)</td>
                    <td className="py-3 pr-4"><span className="rounded bg-purple-500/20 px-2 py-0.5 text-purple-300">AAA</span></td>
                    <td className="py-3">Authentication</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Action Steps */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              How to Update from WCAG 2.1 to 2.2
            </h2>
            <p className="text-lg leading-relaxed">
              If you're already WCAG 2.1 AA compliant, here's your upgrade checklist:
            </p>
            <ol className="space-y-4 text-lg">
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 font-semibold text-sky-300">1</span>
                <div>
                  <strong className="text-white">Audit your focus indicators</strong>
                  <p className="text-slate-300 mt-1">Ensure focused elements aren't hidden by sticky headers, modals, or chat widgets.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 font-semibold text-sky-300">2</span>
                <div>
                  <strong className="text-white">Review drag interactions</strong>
                  <p className="text-slate-300 mt-1">Add button-based alternatives for any drag-to-reorder, slider, or map pan functionality.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 font-semibold text-sky-300">3</span>
                <div>
                  <strong className="text-white">Check touch target sizes</strong>
                  <p className="text-slate-300 mt-1">Ensure clickable elements are at least 24×24 pixels (44×44 recommended).</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 font-semibold text-sky-300">4</span>
                <div>
                  <strong className="text-white">Standardize help placement</strong>
                  <p className="text-slate-300 mt-1">Put chat buttons, contact links, and FAQs in the same location on every page.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 font-semibold text-sky-300">5</span>
                <div>
                  <strong className="text-white">Reduce form re-entry</strong>
                  <p className="text-slate-300 mt-1">Auto-fill previously entered data and provide "same as shipping" type checkboxes.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 font-semibold text-sky-300">6</span>
                <div>
                  <strong className="text-white">Fix authentication barriers</strong>
                  <p className="text-slate-300 mt-1">Allow paste in password fields, support password managers, and provide CAPTCHA alternatives.</p>
                </div>
              </li>
            </ol>
          </section>

          {/* CTA */}
          <section className="rounded-3xl border border-slate-800/70 bg-gradient-to-r from-slate-900 via-slate-900/70 to-slate-950 p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                  Check Your WCAG 2.2 Compliance
                </p>
                <h3 className="mt-3 text-3xl font-semibold text-white">
                  See How Your Site Scores Against the Latest Standards
                </h3>
                <p className="mt-3 text-base text-slate-300">
                  Our AI-powered scanner tests for both WCAG 2.1 and 2.2 criteria, giving you a clear roadmap to full compliance.
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
                href="/wcag/2-1-1-keyboard"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-slate-400">WCAG Criterion</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Keyboard Accessibility (2.1.1)
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
            </div>
          </section>
        </article>

        <Footer />
      </div>
    </>
  );
}
