/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Healthcare Website Accessibility Compliance: ADA, HIPAA & Section 504 Guide | RatedWithAI",
  description:
    "Comprehensive guide to healthcare website accessibility requirements. Learn how ADA, HIPAA, and Section 504 intersect for healthcare providers, plus specific compliance requirements for patient portals and medical websites.",
  keywords: [
    "healthcare accessibility",
    "HIPAA accessibility",
    "medical website ADA compliance",
    "patient portal accessibility",
    "Section 504 compliance",
    "healthcare WCAG requirements",
    "accessible healthcare websites",
  ],
  openGraph: {
    title: "Healthcare Website Accessibility Compliance: ADA, HIPAA & Section 504 Guide",
    description:
      "Comprehensive guide to healthcare website accessibility requirements. Learn how ADA, HIPAA, and Section 504 intersect for healthcare providers.",
    type: "article",
    publishedTime: "2026-02-21T00:00:00.000Z",
    authors: ["RatedWithAI Team"],
  },
};

export default function HealthcareAccessibilityCompliancePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Healthcare Website Accessibility Compliance: ADA, HIPAA & Section 504 Guide",
    description:
      "Comprehensive guide to healthcare website accessibility requirements for hospitals, clinics, and medical practices.",
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
              <img src="/logo-40.png" alt="RatedWithAI" width={40} height={40} className="h-10 w-10 rounded-2xl" />
              <div>
                <p className="text-lg font-semibold tracking-tight">RatedWithAI</p>
                <p className="text-xs text-slate-400">Industry Guide</p>
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
              Healthcare Compliance
            </p>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              Healthcare Website Accessibility: Where ADA, HIPAA & Section 504 Meet
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              Healthcare providers face unique accessibility requirements. Here's what you need to know about compliance with ADA, HIPAA, Section 504, and WCAG—and how to build patient-facing digital experiences that work for everyone.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
              <time dateTime="2026-02-21">February 21, 2026</time>
              <span>·</span>
              <span>10 min read</span>
            </div>
          </section>
        </div>

        <article className="mx-auto w-full max-w-4xl space-y-10 px-6 pb-24 text-slate-200">
          {/* Introduction */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Why Healthcare Faces Higher Accessibility Stakes
            </h2>
            <p className="text-lg leading-relaxed">
              Healthcare organizations operate under a unique regulatory landscape. Unlike a typical business website where inaccessibility might mean a lost sale, an inaccessible healthcare portal can mean a patient can't schedule a critical appointment, access their medical records, or understand their treatment options.
            </p>
            <p className="text-lg leading-relaxed">
              The consequences are serious: patients with disabilities face barriers to care, healthcare providers face significant legal exposure, and trust erodes. In 2025, healthcare organizations were among the most frequently targeted industries for ADA website lawsuits—and for good reason.
            </p>

            <div className="rounded-3xl border border-rose-500/40 bg-rose-500/10 p-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                ⚠️ Healthcare Accessibility Risk Profile
              </h3>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center">
                  <p className="text-3xl font-bold text-rose-200">High</p>
                  <p className="text-sm text-rose-100 mt-1">Lawsuit Risk</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-rose-200">Multiple</p>
                  <p className="text-sm text-rose-100 mt-1">Regulatory Bodies</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-rose-200">Critical</p>
                  <p className="text-sm text-rose-100 mt-1">Impact on Patients</p>
                </div>
              </div>
            </div>
          </section>

          {/* The Regulatory Landscape */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Understanding the Regulatory Landscape
            </h2>
            <p className="text-lg leading-relaxed">
              Healthcare providers must navigate multiple overlapping regulations. Here's how they fit together:
            </p>

            {/* ADA Title III */}
            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-bold">1</span>
                ADA Title III: Places of Public Accommodation
              </h3>
              <p className="text-base text-slate-300 leading-relaxed mb-4">
                The Americans with Disabilities Act requires "places of public accommodation" to be accessible to people with disabilities. Courts have consistently ruled that this includes websites—and hospitals, clinics, and medical practices are explicitly listed as covered entities.
              </p>
              <div className="rounded-xl border border-slate-700/60 bg-slate-900/60 p-4">
                <p className="font-semibold text-white mb-2">What This Means:</p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex gap-2">
                    <span className="text-sky-400">•</span>
                    <span>Your website, patient portal, and mobile apps must be accessible</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-sky-400">•</span>
                    <span>WCAG 2.1 Level AA is the de facto technical standard</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-sky-400">•</span>
                    <span>Private lawsuits can be filed without DOJ involvement</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 504 */}
            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-bold">2</span>
                Section 504: Federal Funding Recipients
              </h3>
              <p className="text-base text-slate-300 leading-relaxed mb-4">
                Section 504 of the Rehabilitation Act applies to any organization receiving federal financial assistance—which includes virtually all hospitals and most medical practices (through Medicare, Medicaid, or other federal programs).
              </p>
              <div className="rounded-xl border border-slate-700/60 bg-slate-900/60 p-4">
                <p className="font-semibold text-white mb-2">Key Requirements:</p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex gap-2">
                    <span className="text-sky-400">•</span>
                    <span>Requires "effective communication" with individuals with disabilities</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-sky-400">•</span>
                    <span>Explicit requirement for accessible electronic and information technology</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-sky-400">•</span>
                    <span>HHS enforces compliance; violations can result in loss of federal funding</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* HIPAA Connection */}
            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-bold">3</span>
                HIPAA: Privacy, Security, and Accessibility
              </h3>
              <p className="text-base text-slate-300 leading-relaxed mb-4">
                While HIPAA primarily focuses on privacy and security, there's an important intersection with accessibility. HIPAA requires that patients have access to their health information—but if your patient portal isn't accessible, patients with disabilities can't exercise that right.
              </p>
              <div className="rounded-xl border border-amber-500/40 bg-amber-500/10 p-4">
                <p className="font-semibold text-amber-200 mb-2">⚠️ The HIPAA-Accessibility Connection:</p>
                <p className="text-sm text-amber-100">
                  An inaccessible patient portal may violate HIPAA's right of access provisions, as it effectively denies patients with disabilities their right to access their own health information. This creates a compliance risk beyond standard ADA requirements.
                </p>
              </div>
            </div>

            {/* Section 1557 */}
            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-bold">4</span>
                Section 1557: ACA Nondiscrimination
              </h3>
              <p className="text-base text-slate-300 leading-relaxed">
                Section 1557 of the Affordable Care Act prohibits discrimination in healthcare programs receiving federal funding, including on the basis of disability. The 2024 final rule explicitly addresses digital accessibility, requiring covered entities to ensure that their websites, mobile apps, and patient portals are accessible.
              </p>
            </div>
          </section>

          {/* Healthcare-Specific Requirements */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Healthcare-Specific Accessibility Requirements
            </h2>
            <p className="text-lg leading-relaxed">
              Beyond general WCAG compliance, healthcare websites have unique accessibility considerations based on the types of content and functionality they provide.
            </p>

            {/* Patient Portals */}
            <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                🏥 Patient Portal Accessibility
              </h3>
              <p className="text-base text-slate-300 leading-relaxed mb-4">
                Patient portals are where accessibility really matters—they're the gateway to scheduling appointments, viewing test results, managing medications, and communicating with providers.
              </p>
              <ul className="space-y-3 text-base text-slate-200">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">✓</span>
                  <span><strong>Authentication flows</strong> must be keyboard-accessible and work with password managers</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">✓</span>
                  <span><strong>Appointment scheduling</strong> calendars and date pickers need full keyboard support</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">✓</span>
                  <span><strong>Test results</strong> and lab values must be announced properly to screen readers</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">✓</span>
                  <span><strong>Secure messaging</strong> forms need clear labels and accessible CAPTCHA alternatives</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">✓</span>
                  <span><strong>Medication lists</strong> should use proper table markup with headers</span>
                </li>
              </ul>
            </div>

            {/* Medical Content */}
            <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                📋 Medical Content Accessibility
              </h3>
              <p className="text-base text-slate-300 leading-relaxed mb-4">
                Medical content often includes complex elements that require special attention:
              </p>
              <ul className="space-y-3 text-base text-slate-200">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">✓</span>
                  <span><strong>Medical imagery</strong> (X-rays, diagrams) need detailed alt text describing findings</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">✓</span>
                  <span><strong>PDF documents</strong> (consent forms, instructions) must be tagged and accessible</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">✓</span>
                  <span><strong>Health education videos</strong> need accurate captions and transcripts</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">✓</span>
                  <span><strong>Interactive symptom checkers</strong> must be fully keyboard navigable</span>
                </li>
              </ul>
            </div>

            {/* Critical Alerts */}
            <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                🚨 Alerts and Status Messages
              </h3>
              <p className="text-base text-slate-300 leading-relaxed mb-4">
                Healthcare websites often display critical information that patients must not miss. Per <Link href="/wcag/4-1-3-status-messages" className="text-sky-400 hover:text-sky-300 underline">WCAG 4.1.3 Status Messages</Link>:
              </p>
              <ul className="space-y-3 text-base text-slate-200">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">✓</span>
                  <span><strong>Appointment confirmations</strong> should use <code className="bg-slate-800 px-2 py-0.5 rounded text-sky-300">role="status"</code></span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">✓</span>
                  <span><strong>Error messages</strong> on intake forms must be announced immediately</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">✓</span>
                  <span><strong>Critical health alerts</strong> should use <code className="bg-slate-800 px-2 py-0.5 rounded text-sky-300">role="alert"</code> for immediate attention</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Common Healthcare Accessibility Issues */}
          <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
            <h2 className="text-3xl font-semibold text-white">
              Most Common Healthcare Website Failures
            </h2>
            <p className="text-lg leading-relaxed">
              Based on our scans of healthcare websites, these issues appear most frequently:
            </p>

            <div className="space-y-4">
              <div className="rounded-xl border border-slate-700/60 bg-slate-950/60 p-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-500/20 text-rose-300 font-bold text-sm">1</span>
                  <p className="font-semibold text-white">Inaccessible PDFs</p>
                </div>
                <p className="text-sm text-slate-300 mt-2 ml-11">
                  Intake forms, consent documents, and patient instructions posted as scanned images without OCR or tagging. <Link href="/wcag/1-1-1-non-text-content" className="text-sky-400 hover:text-sky-300 underline">Fix: Provide accessible alternatives</Link>
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/60 bg-slate-950/60 p-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-500/20 text-rose-300 font-bold text-sm">2</span>
                  <p className="font-semibold text-white">Complex Forms Without Labels</p>
                </div>
                <p className="text-sm text-slate-300 mt-2 ml-11">
                  Patient intake and registration forms with dozens of unlabeled fields. <Link href="/wcag/3-3-2-labels-or-instructions" className="text-sky-400 hover:text-sky-300 underline">Fix: Associate labels properly</Link>
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/60 bg-slate-950/60 p-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-500/20 text-rose-300 font-bold text-sm">3</span>
                  <p className="font-semibold text-white">Date Picker Issues</p>
                </div>
                <p className="text-sm text-slate-300 mt-2 ml-11">
                  Appointment scheduling calendars that can't be operated with a keyboard. <Link href="/wcag/2-1-1-keyboard" className="text-sky-400 hover:text-sky-300 underline">Fix: Ensure keyboard operability</Link>
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/60 bg-slate-950/60 p-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-500/20 text-rose-300 font-bold text-sm">4</span>
                  <p className="font-semibold text-white">Low Contrast on Critical Information</p>
                </div>
                <p className="text-sm text-slate-300 mt-2 ml-11">
                  Light gray dosage instructions, appointment times, or warning text. <Link href="/wcag/1-4-3-contrast-minimum" className="text-sky-400 hover:text-sky-300 underline">Fix: Meet 4.5:1 contrast ratio</Link>
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/60 bg-slate-950/60 p-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-500/20 text-rose-300 font-bold text-sm">5</span>
                  <p className="font-semibold text-white">Missing Language Declarations</p>
                </div>
                <p className="text-sm text-slate-300 mt-2 ml-11">
                  Multi-language content without proper <code className="bg-slate-800 px-1 rounded">lang</code> attributes. <Link href="/wcag/3-1-1-language-of-page" className="text-sky-400 hover:text-sky-300 underline">Fix: Declare page language</Link>
                </p>
              </div>
            </div>
          </section>

          {/* Compliance Checklist */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Healthcare Accessibility Compliance Checklist
            </h2>
            <p className="text-lg leading-relaxed">
              Use this checklist to evaluate your healthcare website's accessibility:
            </p>

            <div className="space-y-6">
              {/* Public Website */}
              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Public Website
                </h3>
                <ul className="space-y-3 text-base text-slate-200">
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-800" readOnly />
                    <span>Provider search and location finders are keyboard accessible</span>
                  </li>
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-800" readOnly />
                    <span>Service descriptions have proper heading hierarchy</span>
                  </li>
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-800" readOnly />
                    <span>Contact information is accessible (not just in images)</span>
                  </li>
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-800" readOnly />
                    <span>Emergency information is prominently accessible</span>
                  </li>
                </ul>
              </div>

              {/* Patient Portal */}
              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Patient Portal
                </h3>
                <ul className="space-y-3 text-base text-slate-200">
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-800" readOnly />
                    <span>Login works with screen readers and password managers</span>
                  </li>
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-800" readOnly />
                    <span>MFA/2FA is accessible (not image-based CAPTCHA only)</span>
                  </li>
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-800" readOnly />
                    <span>Appointment scheduling works with keyboard only</span>
                  </li>
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-800" readOnly />
                    <span>Test results are announced properly to screen readers</span>
                  </li>
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-800" readOnly />
                    <span>Medication refill forms have proper labels</span>
                  </li>
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-800" readOnly />
                    <span>Session timeout warnings are announced</span>
                  </li>
                </ul>
              </div>

              {/* Documents */}
              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Documents & Media
                </h3>
                <ul className="space-y-3 text-base text-slate-200">
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-800" readOnly />
                    <span>All PDFs are tagged and searchable (not scanned images)</span>
                  </li>
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-800" readOnly />
                    <span>Alternative formats (HTML, Word) are available for complex forms</span>
                  </li>
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-800" readOnly />
                    <span>Patient education videos have accurate captions</span>
                  </li>
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-800" readOnly />
                    <span>Medical images have descriptive alt text</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950 p-8">
            <h2 className="text-3xl font-semibold text-white">
              Taking Action
            </h2>
            <p className="text-lg leading-relaxed">
              Healthcare organizations should take a proactive approach to accessibility:
            </p>
            <ol className="space-y-4 text-base text-slate-300">
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-bold">1</span>
                <span><strong>Audit your current state</strong> — Run a <Link href="/" className="text-sky-400 hover:text-sky-300 underline">free accessibility scan</Link> on your website and patient portal</span>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-bold">2</span>
                <span><strong>Prioritize critical paths</strong> — Focus on appointment scheduling, patient portal access, and emergency information first</span>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-bold">3</span>
                <span><strong>Evaluate vendor accessibility</strong> — If you use third-party EHR/EMR systems, request their VPATs (Voluntary Product Accessibility Templates)</span>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-bold">4</span>
                <span><strong>Train your team</strong> — Content editors and web developers need accessibility training</span>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-bold">5</span>
                <span><strong>Publish an accessibility statement</strong> — Include contact information for accessibility accommodations</span>
              </li>
            </ol>
          </section>

          {/* CTA */}
          <section className="rounded-3xl border border-slate-800/70 bg-gradient-to-r from-slate-900 via-slate-900/70 to-slate-950 p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                  Healthcare Accessibility
                </p>
                <h3 className="mt-3 text-3xl font-semibold text-white">
                  Scan Your Healthcare Website
                </h3>
                <p className="mt-3 text-base text-slate-300">
                  Get a comprehensive accessibility report identifying WCAG violations across your patient-facing digital properties.
                </p>
              </div>
              <Link
                href="/"
                className="whitespace-nowrap rounded-xl bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 px-8 py-4 text-base font-semibold text-slate-950 transition hover:shadow-lg hover:shadow-blue-500/50"
              >
                Free Accessibility Scan
              </Link>
            </div>
          </section>

          {/* Related Articles */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Related Resources</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Link
                href="/industry/healthcare"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-slate-400">Industry Guide</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Healthcare ADA Compliance Overview
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
              <Link
                href="/blog/how-to-fix-common-wcag-failures"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-slate-400">Blog Post</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  How to Fix Common WCAG Failures
                </p>
              </Link>
              <Link
                href="/wcag/3-3-2-labels-or-instructions"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-slate-400">WCAG Criterion</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  3.3.2 Labels or Instructions
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
