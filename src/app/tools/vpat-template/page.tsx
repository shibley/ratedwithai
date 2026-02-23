/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Free VPAT Template 2026 — Voluntary Product Accessibility Template | RatedWithAI",
  description:
    "Download a free VPAT (Voluntary Product Accessibility Template) for WCAG 2.1 AA. Includes Section 508, EN 301 549, and revised Section 508 formats with completion guide.",
  openGraph: {
    title: "Free VPAT Template — WCAG 2.1 AA Compliance | RatedWithAI",
    description:
      "Free VPAT template download. Document your product's accessibility conformance for WCAG 2.1, Section 508, and EN 301 549 standards.",
    type: "website",
  },
  keywords: [
    "vpat template",
    "vpat template free",
    "voluntary product accessibility template",
    "vpat 2.5",
    "vpat example",
    "vpat wcag 2.1",
    "section 508 vpat",
    "vpat document",
    "accessibility conformance report",
    "acr template",
    "vpat template download",
    "vpat template 2026",
  ],
};

export default function VpatTemplatePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Free VPAT Template 2026 — Complete Guide to Accessibility Conformance Reports",
    description:
      "Download free VPAT templates and learn how to document WCAG 2.1 AA conformance for procurement compliance.",
    url: "https://ratedwithai.com/tools/vpat-template",
    author: {
      "@type": "Organization",
      name: "RatedWithAI",
    },
    publisher: {
      "@type": "Organization",
      name: "RatedWithAI",
      url: "https://ratedwithai.com",
    },
    datePublished: "2026-02-22",
    dateModified: "2026-02-22",
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
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-400">
                📋 Free Download — No Signup Required
              </span>
              <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
                Free VPAT Template<br />2026
              </h1>
              <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                A Voluntary Product Accessibility Template (VPAT) documents how your digital product
                conforms to accessibility standards. It's required for government procurement and
                increasingly demanded by enterprise buyers.
              </p>
            </div>

            {/* Quick jump CTA */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#templates"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-600 px-6 py-3 text-white font-medium hover:bg-sky-500 transition"
              >
                ↓ Jump to Templates
              </a>
              <Link
                href="/scan"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-600 px-6 py-3 text-white font-medium hover:bg-slate-800 transition"
              >
                Run Free Scan First →
              </Link>
            </div>
          </section>

          {/* What is a VPAT */}
          <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-14">
            <h2 className="text-3xl font-bold text-white mb-6">What Is a VPAT?</h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                A <strong className="text-white">Voluntary Product Accessibility Template (VPAT)</strong> is
                a standardized document created by the{" "}
                <a href="https://www.itic.org/policy/accessibility/vpat" className="text-sky-400 hover:underline" target="_blank" rel="noopener noreferrer">
                  Information Technology Industry Council (ITI)
                </a>{" "}
                that explains how a technology product or service meets accessibility standards.
              </p>
              <p>
                When you complete a VPAT, the resulting document is called an{" "}
                <strong className="text-white">Accessibility Conformance Report (ACR)</strong>. While people
                often use "VPAT" to mean both the template and the completed report, technically the VPAT
                is the blank template and the ACR is the filled-in version.
              </p>
              <p>
                The current version is <strong className="text-white">VPAT 2.5</strong> (released 2023),
                which covers three major accessibility standards:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-white">WCAG 2.x</strong> — Web Content Accessibility Guidelines (international)</li>
                <li><strong className="text-white">Revised Section 508</strong> — U.S. federal accessibility requirements</li>
                <li><strong className="text-white">EN 301 549</strong> — European accessibility standard for ICT procurement</li>
              </ul>
            </div>
          </section>

          {/* Why you need one */}
          <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-14">
            <h2 className="text-3xl font-bold text-white mb-6">Why Do You Need a VPAT?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: "🏛️",
                  title: "Government Procurement",
                  desc: "Federal agencies require VPATs under Section 508. Without one, your product is automatically disqualified from government contracts worth billions annually.",
                },
                {
                  icon: "🏢",
                  title: "Enterprise Sales",
                  desc: "Large companies (Fortune 500, universities, hospitals) increasingly require accessibility documentation. A VPAT shows you take accessibility seriously.",
                },
                {
                  icon: "⚖️",
                  title: "Legal Protection",
                  desc: "With 5,000+ ADA lawsuits filed in 2025, having documented accessibility conformance provides evidence of good-faith compliance efforts.",
                },
                {
                  icon: "🌍",
                  title: "EU Compliance",
                  desc: "The European Accessibility Act (EAA) takes effect June 2025. EN 301 549 VPATs demonstrate conformance for EU market access.",
                },
                {
                  icon: "📅",
                  title: "ADA Title II Deadline",
                  desc: "State and local governments must comply with WCAG 2.1 AA by April 24, 2026. Vendors serving government need updated VPATs NOW.",
                },
                {
                  icon: "💰",
                  title: "Revenue Unlock",
                  desc: "Government IT spending exceeds $100B/year. Education budgets add billions more. A VPAT is your ticket to these markets.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-700/50 bg-slate-800/40 p-6"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* VPAT Editions */}
          <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-14">
            <h2 className="text-3xl font-bold text-white mb-6">VPAT 2.5 Editions Explained</h2>
            <p className="text-slate-300 mb-6">
              The VPAT 2.5 comes in four editions. Choose based on which markets and regulations
              apply to your product:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="py-3 pr-4 text-slate-200 font-semibold">Edition</th>
                    <th className="py-3 pr-4 text-slate-200 font-semibold">Standards Covered</th>
                    <th className="py-3 pr-4 text-slate-200 font-semibold">Use When</th>
                  </tr>
                </thead>
                <tbody className="text-slate-400">
                  <tr className="border-b border-slate-800">
                    <td className="py-3 pr-4 text-white font-medium">WCAG</td>
                    <td className="py-3 pr-4">WCAG 2.x (Level A, AA, AAA)</td>
                    <td className="py-3 pr-4">International products, not targeting specific government regulations</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 pr-4 text-white font-medium">Revised Section 508</td>
                    <td className="py-3 pr-4">WCAG 2.x + Revised Section 508</td>
                    <td className="py-3 pr-4">Selling to U.S. federal agencies</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 pr-4 text-white font-medium">EN 301 549</td>
                    <td className="py-3 pr-4">WCAG 2.x + EN 301 549</td>
                    <td className="py-3 pr-4">Selling to European public sector</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 pr-4 text-white font-medium">INT (International)</td>
                    <td className="py-3 pr-4">WCAG 2.x + Section 508 + EN 301 549</td>
                    <td className="py-3 pr-4">Global products targeting both U.S. and EU markets</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              <strong className="text-slate-400">Recommendation:</strong> If unsure, use the{" "}
              <strong className="text-white">INT edition</strong> — it covers all standards and saves
              you from creating multiple VPATs later.
            </p>
          </section>

          {/* Templates section */}
          <section id="templates" className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-14">
            <h2 className="text-3xl font-bold text-white mb-6">VPAT 2.5 Templates — Free Download</h2>
            <p className="text-slate-300 mb-6">
              These are the official ITI VPAT 2.5 templates. Download the edition that matches your target market:
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "VPAT 2.5 — WCAG Edition",
                  url: "https://www.itic.org/dotAsset/a79a02f8-d32b-4202-bbfe-d37ab4c29e11.doc",
                  format: ".doc",
                  best: "International products",
                },
                {
                  title: "VPAT 2.5 — Revised Section 508 Edition",
                  url: "https://www.itic.org/dotAsset/07c21310-fcba-41a3-b00e-e8c1f07c7288.doc",
                  format: ".doc",
                  best: "U.S. government sales",
                },
                {
                  title: "VPAT 2.5 — EN 301 549 Edition",
                  url: "https://www.itic.org/dotAsset/b33e1017-6abb-4532-9749-71e29d82f5c4.doc",
                  format: ".doc",
                  best: "EU public sector",
                },
                {
                  title: "VPAT 2.5 — INT (International) Edition",
                  url: "https://www.itic.org/dotAsset/61ee5c23-bec1-4a01-9785-8567f06954d4.doc",
                  format: ".doc",
                  best: "Global / both U.S. + EU",
                },
              ].map((tpl) => (
                <div
                  key={tpl.title}
                  className="flex items-center justify-between rounded-xl border border-slate-700/50 bg-slate-800/40 p-5"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-white">{tpl.title}</h3>
                    <p className="mt-1 text-sm text-slate-400">
                      Best for: {tpl.best} • Format: {tpl.format}
                    </p>
                  </div>
                  <a
                    href={tpl.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-500 transition"
                  >
                    Download ↓
                  </a>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-500">
              Templates are provided by ITI (Information Technology Industry Council). Always verify you have
              the latest version at{" "}
              <a href="https://www.itic.org/policy/accessibility/vpat" className="text-sky-400 hover:underline" target="_blank" rel="noopener noreferrer">
                itic.org
              </a>.
            </p>
          </section>

          {/* How to complete a VPAT */}
          <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-14">
            <h2 className="text-3xl font-bold text-white mb-6">How to Complete a VPAT: Step-by-Step Guide</h2>
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Run an Accessibility Audit",
                  content:
                    "Before you can document conformance, you need to know your actual accessibility status. Use RatedWithAI's free scanner to get a baseline WCAG 2.1 AA compliance score, then supplement with manual testing for keyboard navigation, screen reader compatibility, and cognitive accessibility.",
                  cta: { text: "Run Free Scan →", href: "/scan" },
                },
                {
                  step: "2",
                  title: "Choose the Right Edition",
                  content:
                    "Select the VPAT edition matching your target market. For most SaaS companies, the INT (International) edition covers all bases. If you're only targeting U.S. federal agencies, the Revised Section 508 edition is sufficient.",
                },
                {
                  step: "3",
                  title: "Fill in Product Information",
                  content:
                    "Document your product name, version, date of evaluation, contact information, and a description of the product's functionality. Be specific about what was tested — if you only evaluated the web application and not mobile apps, say so.",
                },
                {
                  step: "4",
                  title: "Evaluate Each WCAG Success Criterion",
                  content:
                    "For each WCAG criterion (there are 78 in WCAG 2.1), rate your conformance level. Use the standard terms: 'Supports' (fully meets), 'Partially Supports' (some aspects don't meet), 'Does Not Support' (majority doesn't meet), or 'Not Applicable' (criterion doesn't apply).",
                },
                {
                  step: "5",
                  title: "Write Honest Remarks",
                  content:
                    "For every criterion that isn't fully supported, explain specifically what doesn't conform and what your remediation plans are. Honest, detailed remarks build trust with procurement teams. Vague or misleading remarks can backfire badly.",
                },
                {
                  step: "6",
                  title: "Review and Publish",
                  content:
                    "Have someone else review the VPAT for accuracy and completeness. Then publish it on your website (typically on a dedicated accessibility page or in your documentation). Government agencies and enterprise buyers will look for it there.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-600/20 text-sky-400 font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-slate-300 leading-relaxed">{item.content}</p>
                    {item.cta && (
                      <Link
                        href={item.cta.href}
                        className="mt-3 inline-flex text-sm text-sky-400 hover:text-sky-300 transition"
                      >
                        {item.cta.text}
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Conformance Levels */}
          <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-14">
            <h2 className="text-3xl font-bold text-white mb-6">Understanding Conformance Levels</h2>
            <p className="text-slate-300 mb-6">
              When evaluating each criterion in your VPAT, you'll use these standard conformance terms:
            </p>
            <div className="space-y-4">
              {[
                {
                  level: "Supports",
                  color: "green",
                  desc: "The functionality of the product has at least one method that meets the criterion without known defects or meets with equivalent facilitation.",
                },
                {
                  level: "Partially Supports",
                  color: "yellow",
                  desc: "Some functionality of the product does not meet the criterion.",
                },
                {
                  level: "Does Not Support",
                  color: "red",
                  desc: "The majority of product functionality does not meet the criterion.",
                },
                {
                  level: "Not Applicable",
                  color: "slate",
                  desc: "The criterion is not relevant to the product. For example, WCAG 1.2.1 (Audio-only and Video-only) doesn't apply to a text-only product.",
                },
                {
                  level: "Not Evaluated",
                  color: "orange",
                  desc: "The product has not been evaluated against the criterion. This should be used sparingly — procurement teams may interpret it negatively.",
                },
              ].map((item) => (
                <div
                  key={item.level}
                  className={`rounded-xl border border-${item.color === "slate" ? "slate" : item.color}-500/30 bg-${item.color === "slate" ? "slate" : item.color}-500/10 p-5`}
                >
                  <h3 className={`text-lg font-semibold text-${item.color === "slate" ? "slate-300" : item.color === "green" ? "green-400" : item.color === "yellow" ? "yellow-400" : item.color === "red" ? "red-400" : "orange-400"}`}>
                    {item.level}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-14">
            <h2 className="text-3xl font-bold text-white mb-6">7 Common VPAT Mistakes to Avoid</h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
                <h3 className="text-white font-semibold">1. Claiming "Supports" When It Doesn't</h3>
                <p className="mt-2 text-sm">
                  Overstating conformance is the most damaging mistake. Procurement teams test
                  claims — getting caught erodes trust and can disqualify you from future bids. Be honest
                  about gaps and show a remediation plan instead.
                </p>
              </div>
              <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
                <h3 className="text-white font-semibold">2. Using "Not Applicable" Too Liberally</h3>
                <p className="mt-2 text-sm">
                  Marking criteria as "Not Applicable" when they actually apply raises red flags.
                  If your product has images, WCAG 1.1.1 (Non-text Content) applies. If it has any
                  interactive elements, keyboard criteria apply.
                </p>
              </div>
              <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
                <h3 className="text-white font-semibold">3. Empty or Vague Remarks</h3>
                <p className="mt-2 text-sm">
                  Remarks like "Working on it" or leaving the column blank tells procurement teams
                  nothing. Specify what doesn't conform and when you plan to fix it:
                  "Dashboard charts lack alt text. Remediation planned Q2 2026."
                </p>
              </div>
              <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
                <h3 className="text-white font-semibold">4. Testing Only with Automated Tools</h3>
                <p className="mt-2 text-sm">
                  Automated scanners catch ~30-40% of accessibility issues. Manual testing with
                  screen readers (NVDA, JAWS, VoiceOver), keyboard navigation, and cognitive review
                  is essential for an accurate VPAT.
                </p>
              </div>
              <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
                <h3 className="text-white font-semibold">5. Never Updating the VPAT</h3>
                <p className="mt-2 text-sm">
                  Your product changes — your VPAT should too. Best practice: update after every major
                  release, or at minimum annually. Date your VPAT prominently so buyers know it's current.
                </p>
              </div>
              <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
                <h3 className="text-white font-semibold">6. Not Specifying What Was Tested</h3>
                <p className="mt-2 text-sm">
                  If you only tested the web application but not the mobile app, iOS app, or API documentation,
                  say so. A VPAT covering the wrong product version or platform is useless to procurement.
                </p>
              </div>
              <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
                <h3 className="text-white font-semibold">7. Relying on Accessibility Overlays</h3>
                <p className="mt-2 text-sm">
                  Claiming conformance based on an{" "}
                  <Link href="/blog/best-website-accessibility-checker-tools-2026" className="text-sky-400 hover:underline">
                    accessibility overlay widget
                  </Link>{" "}
                  doesn't hold up. Procurement teams know overlays don't fix underlying code issues.
                  30% of ADA lawsuits in 2023 involved sites using overlays.{" "}
                  <Link href="/tools/accessibe-alternative" className="text-sky-400 hover:underline">
                    Learn more about overlay alternatives
                  </Link>.
                </p>
              </div>
            </div>
          </section>

          {/* VPAT Example Sections */}
          <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-14">
            <h2 className="text-3xl font-bold text-white mb-6">Sample VPAT Entries (Good vs. Bad)</h2>
            <p className="text-slate-300 mb-6">
              Here are examples of well-written vs. poorly-written VPAT entries for common WCAG criteria:
            </p>

            <div className="space-y-6">
              <div className="rounded-xl border border-slate-700/50 bg-slate-800/40 p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  WCAG 1.1.1 — Non-text Content (Level A)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4">
                    <p className="text-sm font-medium text-red-400">❌ Bad</p>
                    <p className="mt-2 text-sm text-slate-400">
                      <strong>Level:</strong> Partially Supports<br />
                      <strong>Remarks:</strong> "Some images may not have alt text."
                    </p>
                  </div>
                  <div className="rounded-lg border border-green-500/20 bg-green-500/5 p-4">
                    <p className="text-sm font-medium text-green-400">✅ Good</p>
                    <p className="mt-2 text-sm text-slate-400">
                      <strong>Level:</strong> Partially Supports<br />
                      <strong>Remarks:</strong> "All UI icons and decorative images have appropriate alt attributes.
                      User-uploaded images in the gallery section lack enforced alt text — implementing
                      mandatory alt text field in upload flow, targeted for v3.2 (March 2026)."
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-700/50 bg-slate-800/40 p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  WCAG 2.1.1 — Keyboard (Level A)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4">
                    <p className="text-sm font-medium text-red-400">❌ Bad</p>
                    <p className="mt-2 text-sm text-slate-400">
                      <strong>Level:</strong> Supports<br />
                      <strong>Remarks:</strong> "Keyboard accessible."
                    </p>
                  </div>
                  <div className="rounded-lg border border-green-500/20 bg-green-500/5 p-4">
                    <p className="text-sm font-medium text-green-400">✅ Good</p>
                    <p className="mt-2 text-sm text-slate-400">
                      <strong>Level:</strong> Partially Supports<br />
                      <strong>Remarks:</strong> "All navigation, forms, and primary actions are fully keyboard
                      operable with visible focus indicators. Exception: the drag-and-drop task board
                      requires mouse interaction — keyboard alternative (arrow key reordering)
                      shipping in v3.1 (February 2026)."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Who reviews VPATs */}
          <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-14">
            <h2 className="text-3xl font-bold text-white mb-6">Who Reviews Your VPAT?</h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Understanding who reads your VPAT helps you write it effectively:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong className="text-white">Government procurement officers</strong> — They compare
                  VPATs across vendors. They know the standard terms and will flag inconsistencies.
                  They're looking for honesty and a clear remediation roadmap, not perfection.
                </li>
                <li>
                  <strong className="text-white">IT accessibility coordinators</strong> — These specialists
                  understand WCAG deeply. They'll cross-reference your VPAT with their own testing.
                  Overstating conformance is worse than admitting gaps.
                </li>
                <li>
                  <strong className="text-white">Enterprise purchasing teams</strong> — They may not be
                  accessibility experts but are checking a compliance checkbox. A well-organized,
                  complete VPAT moves you forward; a missing or incomplete one stalls the deal.
                </li>
                <li>
                  <strong className="text-white">Legal/compliance teams</strong> — Especially post-lawsuit
                  or in regulated industries (healthcare, financial services, education). They want
                  evidence of systematic accessibility efforts.
                </li>
              </ul>
            </div>
          </section>

          {/* April 2026 deadline callout */}
          <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-14">
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-8 text-center">
              <p className="text-amber-400 text-lg font-semibold">⏰ April 24, 2026 Deadline</p>
              <h2 className="mt-3 text-2xl font-bold text-white">
                State & Local Governments Must Comply with WCAG 2.1 AA
              </h2>
              <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
                The ADA Title II digital accessibility deadline is{" "}
                <strong className="text-white">61 days away</strong>. If you sell to government agencies,
                having an up-to-date VPAT is now critical. Run a free scan to assess your current status
                and start your VPAT with real data.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/scan"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-600 px-6 py-3 text-white font-medium hover:bg-sky-500 transition"
                >
                  Get Free Accessibility Score →
                </Link>
                <Link
                  href="/blog/ada-title-ii-deadline-countdown-2026"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-600 px-6 py-3 text-white font-medium hover:bg-slate-800 transition"
                >
                  Read Title II Guide
                </Link>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-14">
            <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Is a VPAT legally required?",
                  a: "Not directly — but practically, yes. U.S. federal agencies require VPATs under Section 508 for procurement. Without one, you can't sell to the government. Enterprise buyers increasingly require them too. While you won't be fined for not having a VPAT, you'll lose deals.",
                },
                {
                  q: "How much does it cost to create a VPAT?",
                  a: "Creating a VPAT yourself is free — you just fill in the template. However, getting a professional accessibility audit first (which informs the VPAT) typically costs $3,000-$15,000 depending on product complexity. You can start with a free automated scan from RatedWithAI and supplement with manual testing.",
                },
                {
                  q: "How often should I update my VPAT?",
                  a: "At minimum annually, or after any major product release that changes functionality. Government agencies may reject VPATs older than 12 months. Best practice: tie VPAT updates to your release cycle.",
                },
                {
                  q: "Can I create a VPAT with automated testing tools alone?",
                  a: "No. Automated tools catch 30-40% of WCAG issues. A credible VPAT requires manual testing with assistive technologies (screen readers like NVDA/JAWS/VoiceOver, keyboard navigation, magnification software). Start with automated testing to find the easy wins, then add manual testing.",
                },
                {
                  q: "What's the difference between a VPAT and an ACR?",
                  a: "A VPAT (Voluntary Product Accessibility Template) is the blank template. When you fill it in with your product's conformance data, the completed document is called an ACR (Accessibility Conformance Report). People often use 'VPAT' to mean both.",
                },
                {
                  q: "Where should I publish my completed VPAT/ACR?",
                  a: "On your website — typically on a dedicated accessibility page, in your product documentation, or in a 'Trust Center' section. Make it easy to find. Some vendors also upload to the Partnership on Employment & Accessible Technology (PEAT) database.",
                },
                {
                  q: "Can RatedWithAI help me fill out a VPAT?",
                  a: "Our free scanner evaluates WCAG 2.1 AA criteria and gives you a compliance score with specific findings. This data maps directly to VPAT criteria, giving you a solid starting point. For a complete VPAT, supplement our automated results with manual testing.",
                },
              ].map((item) => (
                <details
                  key={item.q}
                  className="group rounded-xl border border-slate-700/50 bg-slate-800/40"
                >
                  <summary className="cursor-pointer px-6 py-4 text-white font-medium hover:text-sky-400 transition list-none flex items-center justify-between">
                    {item.q}
                    <span className="text-slate-500 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="px-6 pb-4 text-sm text-slate-400 leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Related Resources */}
          <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-20">
            <h2 className="text-3xl font-bold text-white mb-6">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Free Accessibility Checker", href: "/tools/free-accessibility-checker", icon: "🔍" },
                { title: "ADA Title II Compliance Guide", href: "/blog/ada-title-ii-compliance-guide", icon: "📖" },
                { title: "WCAG 2.2 Complete Guide", href: "/blog/wcag-22-complete-guide", icon: "📋" },
                { title: "ADA Title II Deadline Countdown", href: "/blog/ada-title-ii-deadline-countdown-2026", icon: "⏰" },
                { title: "Accessibility Audit Checklist", href: "/blog/accessibility-audit-checklist-2026", icon: "✅" },
                { title: "Best Accessibility Checker Tools 2026", href: "/blog/best-website-accessibility-checker-tools-2026", icon: "🛠️" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 rounded-xl border border-slate-700/50 bg-slate-800/40 p-4 hover:border-sky-500/30 hover:bg-slate-800/60 transition"
                >
                  <span className="text-xl">{link.icon}</span>
                  <span className="text-white font-medium">{link.title}</span>
                </Link>
              ))}
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </>
  );
}
