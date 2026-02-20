/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "WCAG 2.1 vs 2.2: What Changed and What It Means for Your Website | RatedWithAI",
  description:
    "WCAG 2.2 introduces 9 new success criteria focused on mobile accessibility and cognitive disabilities. Learn what changed, who's affected, and how to update your compliance strategy.",
  openGraph: {
    title: "WCAG 2.1 vs 2.2: What Changed and What It Means for Your Website",
    description:
      "WCAG 2.2 introduces 9 new success criteria focused on mobile accessibility and cognitive disabilities. Learn what changed, who's affected, and how to update your compliance strategy.",
    type: "article",
    publishedTime: "2026-01-20T00:00:00.000Z",
    authors: ["RatedWithAI Team"],
  },
};

export default function Wcag21Vs22Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "WCAG 2.1 vs 2.2: What Changed and What It Means for Your Website",
    description:
      "WCAG 2.2 introduces 9 new success criteria focused on mobile accessibility and cognitive disabilities. Learn what changed, who's affected, and how to update your compliance strategy.",
    datePublished: "2026-01-20T00:00:00.000Z",
    dateModified: "2026-01-20T00:00:00.000Z",
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
              WCAG Standards
            </p>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              WCAG 2.1 vs 2.2: What Changed and What It Means for Your Website
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              The Web Content Accessibility Guidelines just got an important update. Here's what's new in WCAG 2.2 and how it affects your compliance strategy.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
              <time dateTime="2026-01-20">January 20, 2026</time>
              <span>·</span>
              <span>7 min read</span>
            </div>
          </section>
        </div>

        <article className="mx-auto w-full max-w-4xl space-y-10 px-6 pb-24 text-slate-200">
          {/* WCAG Overview */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              What is WCAG?
            </h2>
            <p className="text-lg leading-relaxed">
              The Web Content Accessibility Guidelines (WCAG) are the international standard for web accessibility. Published by the World Wide Web Consortium (W3C), WCAG provides technical criteria for making web content accessible to people with disabilities.
            </p>
            <p className="text-lg leading-relaxed">
              WCAG is organized into three conformance levels:
            </p>
            <div className="grid gap-4 md:grid-cols-3 mt-4">
              <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6">
                <p className="text-2xl font-bold text-emerald-400">Level A</p>
                <p className="mt-2 text-sm text-slate-300">
                  Minimum accessibility. If you don't meet these, some users will be completely unable to access content.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6">
                <p className="text-2xl font-bold text-sky-400">Level AA</p>
                <p className="mt-2 text-sm text-slate-300">
                  <strong>Industry standard.</strong> Most laws and policies reference Level AA compliance.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6">
                <p className="text-2xl font-bold text-purple-400">Level AAA</p>
                <p className="mt-2 text-sm text-slate-300">
                  Enhanced accessibility. Difficult to achieve for all content, but excellent to strive for.
                </p>
              </div>
            </div>
            <p className="text-lg leading-relaxed mt-6">
              <strong className="text-white">Why this matters:</strong> When courts reference "ADA compliance" for websites, they almost always mean <strong>WCAG 2.1 Level AA</strong> as the benchmark. With the release of WCAG 2.2, the question becomes: should you upgrade?
            </p>
          </section>

          {/* Timeline */}
          <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
            <h2 className="text-3xl font-semibold text-white">
              WCAG Version Timeline
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-slate-800 text-sm font-semibold text-slate-300">
                  2008
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">WCAG 2.0 Released</p>
                  <p className="text-base text-slate-300">
                    The foundational version. Introduced the four principles: Perceivable, Operable, Understandable, Robust (POUR).
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-slate-700 text-sm font-semibold text-slate-200">
                  2018
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">WCAG 2.1 Released</p>
                  <p className="text-base text-slate-300">
                    Added 17 new success criteria focused on mobile accessibility, low vision, and cognitive disabilities.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-blue-500 text-sm font-semibold text-slate-900">
                  2023
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">WCAG 2.2 Released</p>
                  <p className="text-base text-slate-300">
                    Added 9 new success criteria (and removed 1 from 2.1). Stronger focus on mobile usability and cognitive accessibility.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-base text-slate-400 italic mt-6">
              Important: WCAG 2.2 is backward-compatible. Everything that conforms to WCAG 2.1 Level AA also conforms to WCAG 2.2 Level A and Level AA—you just need to address the new criteria.
            </p>
          </section>

          {/* What's New in WCAG 2.2 */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              What's New in WCAG 2.2
            </h2>
            <p className="text-lg leading-relaxed">
              WCAG 2.2 introduces <strong>9 new success criteria</strong> and removes 1 criterion from WCAG 2.1 (4.1.1 Parsing, which became obsolete with modern HTML5 standards).
            </p>
            <p className="text-lg leading-relaxed">
              Here's a breakdown of the new requirements:
            </p>

            <div className="space-y-6 mt-8">
              {/* 2.4.11 Focus Not Obscured (Minimum) - Level AA */}
              <div className="rounded-2xl border border-sky-500/40 bg-sky-500/10 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-sky-300">Level AA</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      2.4.11 Focus Not Obscured (Minimum)
                    </h3>
                  </div>
                  <span className="rounded-full bg-sky-500/20 px-3 py-1 text-xs font-semibold text-sky-200">
                    NEW
                  </span>
                </div>
                <p className="mt-4 text-base text-slate-200 leading-relaxed">
                  When a component receives keyboard focus, it must not be completely hidden by other content (like sticky headers, cookie banners, or chat widgets).
                </p>
                <p className="mt-3 text-sm text-slate-300">
                  <strong>Why it matters:</strong> Keyboard users need to see where focus is. If your sticky header covers the focused element, users can't tell what they're interacting with.
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  <strong>How to fix:</strong> Ensure focused elements aren't obscured, or implement focus scrolling that accounts for fixed headers.
                </p>
              </div>

              {/* 2.4.12 Focus Not Obscured (Enhanced) - Level AAA */}
              <div className="rounded-2xl border border-purple-500/40 bg-purple-500/10 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-purple-300">Level AAA</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      2.4.12 Focus Not Obscured (Enhanced)
                    </h3>
                  </div>
                  <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs font-semibold text-purple-200">
                    NEW
                  </span>
                </div>
                <p className="mt-4 text-base text-slate-200 leading-relaxed">
                  The stricter version: focused items must not be obscured <em>at all</em> by author-created content.
                </p>
              </div>

              {/* 2.4.13 Focus Appearance - Level AAA */}
              <div className="rounded-2xl border border-purple-500/40 bg-purple-500/10 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-purple-300">Level AAA</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      2.4.13 Focus Appearance
                    </h3>
                  </div>
                  <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs font-semibold text-purple-200">
                    NEW
                  </span>
                </div>
                <p className="mt-4 text-base text-slate-200 leading-relaxed">
                  Focus indicators must meet minimum size and contrast requirements (at least 2 CSS pixels thick with 3:1 contrast).
                </p>
                <p className="mt-3 text-sm text-slate-300">
                  <strong>How to fix:</strong> Use a visible outline or border on focus states. The default browser outline usually meets this, but custom focus styles should be tested.
                </p>
              </div>

              {/* 2.5.7 Dragging Movements - Level AA */}
              <div className="rounded-2xl border border-sky-500/40 bg-sky-500/10 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-sky-300">Level AA</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      2.5.7 Dragging Movements
                    </h3>
                  </div>
                  <span className="rounded-full bg-sky-500/20 px-3 py-1 text-xs font-semibold text-sky-200">
                    NEW
                  </span>
                </div>
                <p className="mt-4 text-base text-slate-200 leading-relaxed">
                  Any functionality that uses dragging (drag-and-drop, sliders, sortable lists) must have a simple pointer alternative (like click/tap actions or buttons).
                </p>
                <p className="mt-3 text-sm text-slate-300">
                  <strong>Why it matters:</strong> Dragging is difficult for users with motor impairments, tremors, or those using assistive technologies.
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  <strong>How to fix:</strong> Provide alternative controls. For sliders, add increment/decrement buttons. For drag-and-drop lists, add move up/down buttons.
                </p>
              </div>

              {/* 2.5.8 Target Size (Minimum) - Level AA */}
              <div className="rounded-2xl border border-sky-500/40 bg-sky-500/10 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-sky-300">Level AA</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      2.5.8 Target Size (Minimum)
                    </h3>
                  </div>
                  <span className="rounded-full bg-sky-500/20 px-3 py-1 text-xs font-semibold text-sky-200">
                    NEW
                  </span>
                </div>
                <p className="mt-4 text-base text-slate-200 leading-relaxed">
                  Interactive targets (buttons, links, form controls) must be at least 24×24 CSS pixels, with some exceptions for inline links and essential UI.
                </p>
                <p className="mt-3 text-sm text-slate-300">
                  <strong>Why it matters:</strong> Small touch targets are hard to tap accurately, especially for users with motor impairments or on mobile devices.
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  <strong>How to fix:</strong> Increase button and link padding. For icon-only buttons, ensure the clickable area is large enough even if the icon is small.
                </p>
              </div>

              {/* 3.2.6 Consistent Help - Level A */}
              <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Level A</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      3.2.6 Consistent Help
                    </h3>
                  </div>
                  <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-200">
                    NEW
                  </span>
                </div>
                <p className="mt-4 text-base text-slate-200 leading-relaxed">
                  If help mechanisms (contact info, chatbots, self-service options) appear on multiple pages, they must be in the same relative order.
                </p>
                <p className="mt-3 text-sm text-slate-300">
                  <strong>Why it matters:</strong> Users with cognitive disabilities rely on consistent patterns to find help when they need it.
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  <strong>How to fix:</strong> If your footer has "Contact Us," "Help Center," and "Live Chat" links, keep them in the same order across all pages.
                </p>
              </div>

              {/* 3.3.7 Redundant Entry - Level A */}
              <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Level A</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      3.3.7 Redundant Entry
                    </h3>
                  </div>
                  <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-200">
                    NEW
                  </span>
                </div>
                <p className="mt-4 text-base text-slate-200 leading-relaxed">
                  Information previously entered by the user must be auto-populated or available to select, unless re-entering is essential for security.
                </p>
                <p className="mt-3 text-sm text-slate-300">
                  <strong>Why it matters:</strong> Re-entering the same information (like shipping address on a checkout flow) is frustrating and error-prone, especially for users with cognitive or motor impairments.
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  <strong>How to fix:</strong> Use autocomplete attributes, remember user data between steps, or offer "same as billing address" checkboxes.
                </p>
              </div>

              {/* 3.3.8 Accessible Authentication (Minimum) - Level AA */}
              <div className="rounded-2xl border border-sky-500/40 bg-sky-500/10 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-sky-300">Level AA</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      3.3.8 Accessible Authentication (Minimum)
                    </h3>
                  </div>
                  <span className="rounded-full bg-sky-500/20 px-3 py-1 text-xs font-semibold text-sky-200">
                    NEW
                  </span>
                </div>
                <p className="mt-4 text-base text-slate-200 leading-relaxed">
                  Authentication steps must not require cognitive function tests (like remembering passwords or solving puzzles) unless alternatives exist (like password managers, biometrics, or copy/paste).
                </p>
                <p className="mt-3 text-sm text-slate-300">
                  <strong>Why it matters:</strong> CAPTCHAs, complex password rules, and puzzle-based authentication exclude users with cognitive disabilities.
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  <strong>How to fix:</strong> Allow password managers. Offer email magic links or SMS codes. Use accessible CAPTCHAs (like Google's reCAPTCHA v3).
                </p>
              </div>

              {/* 3.3.9 Accessible Authentication (Enhanced) - Level AAA */}
              <div className="rounded-2xl border border-purple-500/40 bg-purple-500/10 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-purple-300">Level AAA</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      3.3.9 Accessible Authentication (Enhanced)
                    </h3>
                  </div>
                  <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs font-semibold text-purple-200">
                    NEW
                  </span>
                </div>
                <p className="mt-4 text-base text-slate-200 leading-relaxed">
                  The stricter version: no cognitive function tests <em>at all</em>, except for object recognition (like selecting images with cars).
                </p>
              </div>
            </div>
          </section>

          {/* Key Changes Summary */}
          <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
            <h2 className="text-3xl font-semibold text-white">
              Key Changes Explained Simply
            </h2>
            <p className="text-lg leading-relaxed">
              If you're already WCAG 2.1 Level AA compliant, here's what you need to focus on for WCAG 2.2:
            </p>
            <div className="space-y-4 mt-6">
              <div className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-semibold">
                  1
                </span>
                <div>
                  <p className="text-lg font-semibold text-white">Mobile-first thinking</p>
                  <p className="text-base text-slate-300">
                    Larger touch targets (24×24px minimum) and better alternatives to drag-and-drop.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-semibold">
                  2
                </span>
                <div>
                  <p className="text-lg font-semibold text-white">Cognitive accessibility</p>
                  <p className="text-base text-slate-300">
                    Consistent help placement, no redundant data entry, accessible authentication.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-semibold">
                  3
                </span>
                <div>
                  <p className="text-lg font-semibold text-white">Better keyboard support</p>
                  <p className="text-base text-slate-300">
                    Focus indicators can't be hidden by sticky headers or overlays.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-base text-slate-400 italic mt-6">
              Most sites will need to update button sizes, improve form flows, and audit sticky elements that might obscure focus.
            </p>
          </section>

          {/* Who's Affected */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Who's Affected by WCAG 2.2?
            </h2>
            <p className="text-lg leading-relaxed">
              As of 2026, WCAG 2.2 is becoming the new standard, but adoption is gradual:
            </p>
            <div className="grid gap-6 md:grid-cols-2 mt-6">
              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <h3 className="text-lg font-semibold text-white">Government & Public Sector</h3>
                <p className="mt-3 text-base text-slate-300">
                  The European Union's <strong>European Accessibility Act (EAA)</strong> requires WCAG 2.1 Level AA compliance by June 2025, with WCAG 2.2 expected to become the reference soon after. US federal sites under Section 508 are also shifting to WCAG 2.2.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <h3 className="text-lg font-semibold text-white">Private Companies</h3>
                <p className="mt-3 text-base text-slate-300">
                  US courts still primarily reference WCAG 2.1 Level AA in ADA lawsuits, but forward-thinking companies are proactively adopting WCAG 2.2 to future-proof compliance.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <h3 className="text-lg font-semibold text-white">E-commerce & SaaS</h3>
                <p className="mt-3 text-base text-slate-300">
                  High-traffic sites and platforms serving international markets should adopt WCAG 2.2 now to stay ahead of regulatory changes and reduce legal risk.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <h3 className="text-lg font-semibold text-white">Small Businesses</h3>
                <p className="mt-3 text-base text-slate-300">
                  If you're already WCAG 2.1 compliant, you're in good shape. Upgrading to 2.2 is a smart move but not yet legally mandated in most jurisdictions.
                </p>
              </div>
            </div>
            <p className="text-lg leading-relaxed mt-6">
              <strong className="text-white">Bottom line:</strong> WCAG 2.1 Level AA is still the legal standard in most places, but WCAG 2.2 is the direction everything is moving. Plan to upgrade within the next 12-24 months.
            </p>
          </section>

          {/* Action Items */}
          <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950 p-8">
            <h2 className="text-3xl font-semibold text-white">
              Action Items: Upgrading to WCAG 2.2
            </h2>
            <p className="text-lg leading-relaxed">
              Here's your step-by-step plan to upgrade from WCAG 2.1 to WCAG 2.2:
            </p>

            <div className="space-y-6 mt-8">
              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Step 1: Audit Your Current State
                </h3>
                <p className="text-base text-slate-300 leading-relaxed">
                  Run an accessibility scan to see where you stand. Tools like <Link href="/" className="text-sky-400 hover:text-sky-300 underline">RatedWithAI</Link> can identify WCAG 2.2 violations and prioritize fixes.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Step 2: Fix Touch Target Sizes
                </h3>
                <p className="text-base text-slate-300 leading-relaxed mb-3">
                  Review all interactive elements—buttons, links, form controls. Ensure they're at least 24×24 CSS pixels.
                </p>
                <pre className="mt-3 overflow-x-auto rounded-xl border border-emerald-500/40 bg-slate-950/80 p-4 text-sm text-emerald-100">
{`/* Good: Adequate padding */
button {
  padding: 12px 24px; /* Creates >24px touch target */
  min-width: 44px;
  min-height: 44px;
}`}
                </pre>
              </div>

              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Step 3: Provide Alternatives to Dragging
                </h3>
                <p className="text-base text-slate-300 leading-relaxed">
                  For every drag-and-drop interface, add button-based alternatives. Sliders should have +/− buttons. Sortable lists should have "Move up" / "Move down" options.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Step 4: Check Focus Visibility
                </h3>
                <p className="text-base text-slate-300 leading-relaxed">
                  Navigate your site with the keyboard (Tab key). Make sure:
                </p>
                <ul className="mt-3 space-y-2 text-base text-slate-300">
                  <li className="flex gap-3">
                    <span className="text-sky-400">•</span>
                    <span>Focused elements aren't covered by sticky headers or cookie banners</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-sky-400">•</span>
                    <span>Focus indicators are clearly visible (use <code className="rounded bg-slate-800 px-2 py-1 text-sm text-sky-300">outline</code> or custom styles with good <Link href="/wcag/1-4-3-contrast-minimum" className="text-sky-400 hover:text-sky-300 underline">contrast</Link>)</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Step 5: Simplify Authentication
                </h3>
                <p className="text-base text-slate-300 leading-relaxed">
                  Review login and signup flows:
                </p>
                <ul className="mt-3 space-y-2 text-base text-slate-300">
                  <li className="flex gap-3">
                    <span className="text-sky-400">•</span>
                    <span>Allow password managers (don't block autofill)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-sky-400">•</span>
                    <span>Use accessible CAPTCHAs (invisible reCAPTCHA or alternative methods)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-sky-400">•</span>
                    <span>Offer email magic links or biometric login as alternatives to passwords</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Step 6: Eliminate Redundant Entry
                </h3>
                <p className="text-base text-slate-300 leading-relaxed">
                  In multi-step forms (checkout, onboarding), auto-fill data the user already provided. Use <code className="rounded bg-slate-800 px-2 py-1 text-sm text-sky-300">autocomplete</code> attributes and offer "same as above" checkboxes.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Step 7: Standardize Help Placement
                </h3>
                <p className="text-base text-slate-300 leading-relaxed">
                  If you have contact links, chatbots, or help documentation, keep them in the same location across pages. Users rely on consistent patterns.
                </p>
              </div>
            </div>
          </section>

          {/* Tools and Resources */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Tools to Test WCAG 2.2 Compliance
            </h2>
            <p className="text-lg leading-relaxed">
              Most automated accessibility scanners now include WCAG 2.2 checks. Here's how to test:
            </p>
            <ul className="space-y-4 text-lg">
              <li className="flex gap-3">
                <span className="text-sky-400 font-bold">→</span>
                <span><strong>Automated scanning</strong> — Use <Link href="/" className="text-sky-400 hover:text-sky-300 underline">RatedWithAI</Link> to scan your site against WCAG 2.2 Level AA criteria</span>
              </li>
              <li className="flex gap-3">
                <span className="text-sky-400 font-bold">→</span>
                <span><strong>Browser DevTools</strong> — Chrome and Edge have built-in accessibility audits in their DevTools (Lighthouse)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-sky-400 font-bold">→</span>
                <span><strong>Manual keyboard testing</strong> — Unplug your mouse and navigate your site. Check if focus is always visible.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-sky-400 font-bold">→</span>
                <span><strong>Mobile testing</strong> — Test on a real phone. Are buttons easy to tap? Can you zoom to 200%?</span>
              </li>
            </ul>
          </section>

          {/* Final Thoughts */}
          <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
            <h2 className="text-3xl font-semibold text-white">
              Should You Upgrade to WCAG 2.2 Now?
            </h2>
            <p className="text-lg leading-relaxed">
              <strong className="text-white">Short answer: Yes, if you can.</strong>
            </p>
            <p className="text-lg leading-relaxed">
              WCAG 2.2 is backward-compatible with 2.1, so upgrading doesn't break your existing compliance—it just adds new requirements. If you're already doing accessibility work, the incremental effort to meet WCAG 2.2 Level AA is manageable.
            </p>
            <p className="text-lg leading-relaxed">
              Here's when to prioritize the upgrade:
            </p>
            <ul className="space-y-3 text-lg">
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                <span>You're launching a new site or redesign — build WCAG 2.2 compliance from the start</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                <span>You serve international markets — especially the EU, where regulations are tightening</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                <span>You're in a high-risk industry — e-commerce, finance, healthcare, education</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                <span>You want to future-proof — courts and regulations will eventually catch up to WCAG 2.2</span>
              </li>
            </ul>
            <p className="text-lg leading-relaxed mt-6">
              If you're a small business still working on WCAG 2.1 compliance, finish that first. But once you're there, WCAG 2.2 is the next logical step—and it's easier than you think.
            </p>
          </section>

          {/* CTA */}
          <section className="rounded-3xl border border-slate-800/70 bg-gradient-to-r from-slate-900 via-slate-900/70 to-slate-950 p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                  WCAG 2.2 Compliance Check
                </p>
                <h3 className="mt-3 text-3xl font-semibold text-white">
                  See How Your Site Measures Up
                </h3>
                <p className="mt-3 text-base text-slate-300">
                  Get a detailed accessibility report with WCAG 2.2 criteria—free, no signup required.
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
                href="/wcag/1-4-3-contrast-minimum"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-slate-400">WCAG Criterion</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  1.4.3 Contrast Minimum
                </p>
              </Link>
              <Link
                href="/wcag/2-5-3-label-in-name"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-slate-400">WCAG Criterion</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  2.5.3 Label in Name
                </p>
              </Link>
              <Link
                href="/check/amazon"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-slate-400">Brand Analysis</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Amazon Accessibility Score
                </p>
              </Link>
              <Link
                href="/blog/ada-compliance-checklist-2026"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-slate-400">Blog Post</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  ADA Compliance Checklist 2026
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
