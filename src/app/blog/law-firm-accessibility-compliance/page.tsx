/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Law Firm Website Accessibility Compliance: ADA Requirements for Legal Websites | RatedWithAI",
  description:
    "Complete guide to law firm accessibility compliance. Learn why ADA Title III applies to legal websites, common accessibility issues on law firm sites, and how to fix them to avoid lawsuits and serve all clients.",
  keywords: [
    "law firm accessibility",
    "ADA compliance for lawyers",
    "legal website accessibility",
    "attorney website ADA",
    "law firm WCAG compliance",
    "accessible legal websites",
    "ADA lawsuits law firms",
  ],
  openGraph: {
    title: "Law Firm Website Accessibility Compliance: ADA Requirements for Legal Websites",
    description:
      "Complete guide to law firm accessibility compliance. Learn why ADA Title III applies to legal websites and how to achieve compliance.",
    type: "article",
    publishedTime: "2026-02-21T00:00:00.000Z",
    authors: ["RatedWithAI Team"],
  },
};

export default function LawFirmAccessibilityCompliancePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Law Firm Website Accessibility Compliance: ADA Requirements for Legal Websites",
    description:
      "Complete guide to law firm accessibility compliance for attorneys and legal marketing managers.",
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
                <p className="text-xs text-slate-400">Legal Industry Guide</p>
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
              Legal Industry Compliance
            </p>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              Law Firm Website Accessibility: What Attorneys Must Know About ADA Compliance
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              As legal professionals who advise clients on compliance, law firms face unique pressure to maintain accessible websites. Here's everything you need to know about ADA Title III requirements, the ethical obligations involved, and how to ensure your firm's digital presence serves all potential clients.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
              <time dateTime="2026-02-21">February 21, 2026</time>
              <span>·</span>
              <span>12 min read</span>
            </div>
          </section>
        </div>

        <article className="mx-auto w-full max-w-4xl space-y-10 px-6 pb-24 text-slate-200">
          {/* Introduction */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              The Irony Law Firms Can't Afford to Ignore
            </h2>
            <p className="text-lg leading-relaxed">
              Law firms frequently counsel clients on regulatory compliance—including ADA requirements. Yet a surprising number of legal websites contain accessibility barriers that violate the very laws they help clients navigate. This creates not only legal exposure but also a credibility problem that sophisticated clients will notice.
            </p>
            <p className="text-lg leading-relaxed">
              The Americans with Disabilities Act applies to law firm websites just as it applies to any other place of public accommodation. Courts have consistently held that websites of professional services firms—including law firms—must be accessible to people with disabilities. And with an estimated 61 million Americans living with a disability, an inaccessible website means excluding a significant portion of potential clients.
            </p>

            <div className="rounded-3xl border border-amber-500/40 bg-amber-500/10 p-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                ⚖️ The Professional Stakes
              </h3>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center">
                  <p className="text-3xl font-bold text-amber-200">High</p>
                  <p className="text-sm text-amber-100 mt-1">Lawsuit Vulnerability</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-amber-200">Ethical</p>
                  <p className="text-sm text-amber-100 mt-1">Professional Obligations</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-amber-200">Reputation</p>
                  <p className="text-sm text-amber-100 mt-1">Client Trust at Risk</p>
                </div>
              </div>
            </div>
          </section>

          {/* ADA Title III Requirements */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Understanding ADA Title III Requirements for Law Firms
            </h2>
            <p className="text-lg leading-relaxed">
              The legal framework for website accessibility has become increasingly clear. Here's what law firm partners and marketing managers need to understand:
            </p>

            {/* Places of Public Accommodation */}
            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-bold">1</span>
                Law Firms as "Places of Public Accommodation"
              </h3>
              <p className="text-base text-slate-300 leading-relaxed mb-4">
                ADA Title III explicitly lists "professional offices of healthcare providers" as places of public accommodation—and courts have extended this reasoning to law offices. When a law firm maintains a website that potential clients use to learn about services, contact attorneys, or access client portals, that website becomes an extension of the firm's physical office.
              </p>
              <div className="rounded-xl border border-slate-700/60 bg-slate-900/60 p-4">
                <p className="font-semibold text-white mb-2">The Legal Standard:</p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex gap-2">
                    <span className="text-sky-400">•</span>
                    <span>Websites must provide "full and equal enjoyment" of services</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-sky-400">•</span>
                    <span>Barriers must be removed when "readily achievable"</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-sky-400">•</span>
                    <span>WCAG 2.1 Level AA is the recognized technical standard</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* DOJ Guidance */}
            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-bold">2</span>
                DOJ's Clear Position on Website Accessibility
              </h3>
              <p className="text-base text-slate-300 leading-relaxed mb-4">
                The Department of Justice has been unambiguous: the ADA applies to websites. The 2024 rule for state and local governments explicitly requires WCAG 2.1 Level AA compliance, and the DOJ has repeatedly stated that the same principles apply to private entities under Title III.
              </p>
              <div className="rounded-xl border border-sky-500/40 bg-sky-500/10 p-4">
                <p className="font-semibold text-sky-200 mb-2">🔍 Key DOJ Statement:</p>
                <p className="text-sm text-sky-100 italic">
                  "Covered entities must ensure that the goods, services, facilities, privileges, advantages, and accommodations they provide to the public are equally available to people with disabilities."
                </p>
              </div>
            </div>

            {/* Case Law */}
            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-bold">3</span>
                Growing Body of Website Accessibility Case Law
              </h3>
              <p className="text-base text-slate-300 leading-relaxed mb-4">
                Federal courts have ruled repeatedly in favor of plaintiffs in website accessibility cases. While the landmark <em>Gil v. Winn-Dixie</em> case and subsequent <em>Robles v. Domino's Pizza</em> decision set important precedents, the volume of cases continues to grow—with professional services firms increasingly targeted.
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex gap-2">
                  <span className="text-sky-400">•</span>
                  <span>Over 4,000 ADA website accessibility lawsuits filed in 2025</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-sky-400">•</span>
                  <span>Professional services firms increasingly targeted</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-sky-400">•</span>
                  <span>Serial plaintiff firms actively scan for non-compliant websites</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Ethical Obligations */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Ethical Obligations Beyond Legal Requirements
            </h2>
            <p className="text-lg leading-relaxed">
              For law firms, accessibility isn't just about avoiding lawsuits—it touches on core professional responsibilities.
            </p>

            <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                📜 Professional Responsibility Considerations
              </h3>
              <ul className="space-y-4 text-base text-slate-200">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">✓</span>
                  <span><strong>Competence (Rule 1.1)</strong> — Attorneys who advise on ADA compliance should demonstrate that competence in their own digital presence</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">✓</span>
                  <span><strong>Diligence (Rule 1.3)</strong> — Allowing known barriers to remain on a firm website may raise diligence concerns</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">✓</span>
                  <span><strong>Supervision (Rules 5.1, 5.3)</strong> — Partners have supervisory obligations over marketing materials and firm communications</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">✓</span>
                  <span><strong>Access to Justice</strong> — Bar associations increasingly emphasize removing barriers that prevent people from accessing legal services</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-amber-500/40 bg-amber-500/10 p-4">
              <p className="font-semibold text-amber-200 mb-2">💡 Consider This:</p>
              <p className="text-sm text-amber-100">
                When a potential client with a visual impairment can't navigate your website to contact your firm, they'll find a firm whose site works for them. This isn't just lost revenue—it's a failure to serve the community your firm claims to represent.
              </p>
            </div>
          </section>

          {/* Common Issues on Law Firm Websites */}
          <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
            <h2 className="text-3xl font-semibold text-white">
              Most Common Accessibility Failures on Law Firm Websites
            </h2>
            <p className="text-lg leading-relaxed">
              Based on our analysis of legal websites, these accessibility issues appear most frequently. Many stem from common legal website design patterns that weren't built with accessibility in mind.
            </p>

            <div className="space-y-4">
              <div className="rounded-xl border border-slate-700/60 bg-slate-950/60 p-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-500/20 text-rose-300 font-bold text-sm">1</span>
                  <p className="font-semibold text-white">Missing Alt Text on Attorney Photos</p>
                </div>
                <p className="text-sm text-slate-300 mt-2 ml-11">
                  Attorney headshots without descriptive alt text make it impossible for screen reader users to identify attorneys. <Link href="/wcag/1-1-1-non-text-content" className="text-sky-400 hover:text-sky-300 underline">Fix: Add meaningful alt text to all images</Link>
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/60 bg-slate-950/60 p-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-500/20 text-rose-300 font-bold text-sm">2</span>
                  <p className="font-semibold text-white">Contact Forms Without Labels</p>
                </div>
                <p className="text-sm text-slate-300 mt-2 ml-11">
                  Consultation request forms often use placeholder text instead of proper labels, breaking screen reader compatibility. <Link href="/wcag/3-3-2-labels-or-instructions" className="text-sky-400 hover:text-sky-300 underline">Fix: Associate labels with form fields</Link>
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/60 bg-slate-950/60 p-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-500/20 text-rose-300 font-bold text-sm">3</span>
                  <p className="font-semibold text-white">Inaccessible Practice Area Dropdowns</p>
                </div>
                <p className="text-sm text-slate-300 mt-2 ml-11">
                  Mega menus and practice area navigation that can't be operated with a keyboard. <Link href="/wcag/2-1-1-keyboard" className="text-sky-400 hover:text-sky-300 underline">Fix: Ensure full keyboard operability</Link>
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/60 bg-slate-950/60 p-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-500/20 text-rose-300 font-bold text-sm">4</span>
                  <p className="font-semibold text-white">Low Contrast "Call Now" Buttons</p>
                </div>
                <p className="text-sm text-slate-300 mt-2 ml-11">
                  Critical call-to-action buttons with insufficient color contrast against backgrounds. <Link href="/wcag/1-4-3-contrast-minimum" className="text-sky-400 hover:text-sky-300 underline">Fix: Achieve 4.5:1 contrast ratio</Link>
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/60 bg-slate-950/60 p-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-500/20 text-rose-300 font-bold text-sm">5</span>
                  <p className="font-semibold text-white">Video Testimonials Without Captions</p>
                </div>
                <p className="text-sm text-slate-300 mt-2 ml-11">
                  Client testimonial videos and attorney introduction videos lacking captions or transcripts. <Link href="/wcag/1-2-2-captions-prerecorded" className="text-sky-400 hover:text-sky-300 underline">Fix: Add synchronized captions</Link>
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/60 bg-slate-950/60 p-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-500/20 text-rose-300 font-bold text-sm">6</span>
                  <p className="font-semibold text-white">PDF Brochures as Scanned Images</p>
                </div>
                <p className="text-sm text-slate-300 mt-2 ml-11">
                  Firm brochures, fee schedules, and intake forms posted as untagged PDFs that screen readers can't parse. <Link href="/blog/how-to-fix-common-wcag-failures" className="text-sky-400 hover:text-sky-300 underline">Fix: Use tagged, accessible PDFs</Link>
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/60 bg-slate-950/60 p-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-500/20 text-rose-300 font-bold text-sm">7</span>
                  <p className="font-semibold text-white">Auto-Playing Background Videos</p>
                </div>
                <p className="text-sm text-slate-300 mt-2 ml-11">
                  Hero videos that auto-play and distract users, without pause controls. <Link href="/wcag/1-4-2-audio-control" className="text-sky-400 hover:text-sky-300 underline">Fix: Provide pause/stop controls</Link>
                </p>
              </div>
            </div>
          </section>

          {/* Client Portal Issues */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Client Portal Accessibility: A Critical Concern
            </h2>
            <p className="text-lg leading-relaxed">
              Many law firms now offer client portals for document sharing, case status updates, and secure communication. These portals present unique accessibility challenges that go beyond the public-facing website.
            </p>

            <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                🔐 Client Portal Accessibility Checklist
              </h3>
              <ul className="space-y-3 text-base text-slate-200">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">✓</span>
                  <span><strong>Login process</strong> works with screen readers and keyboard navigation</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">✓</span>
                  <span><strong>Multi-factor authentication</strong> offers accessible alternatives (not image-only CAPTCHA)</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">✓</span>
                  <span><strong>Document uploads</strong> announce success/failure to assistive technology</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">✓</span>
                  <span><strong>Secure messaging</strong> forms have proper labels and instructions</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">✓</span>
                  <span><strong>Case status updates</strong> are conveyed in text, not just color-coded indicators</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">✓</span>
                  <span><strong>Session timeouts</strong> provide warnings that screen readers announce</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-rose-500/40 bg-rose-500/10 p-4">
              <p className="font-semibold text-rose-200 mb-2">⚠️ Third-Party Portal Warning:</p>
              <p className="text-sm text-rose-100">
                If you use a third-party client portal solution, verify its accessibility claims. Request a Voluntary Product Accessibility Template (VPAT) from the vendor. You remain responsible for the accessibility of services you offer to clients, even when provided through third-party software.
              </p>
            </div>
          </section>

          {/* How to Fix */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              How to Achieve Law Firm Website Accessibility
            </h2>
            <p className="text-lg leading-relaxed">
              Making your law firm's website accessible requires a systematic approach. Here's a practical roadmap based on the <Link href="/blog/ada-compliance-checklist-2026" className="text-sky-400 hover:text-sky-300 underline">ADA compliance best practices for 2026</Link>:
            </p>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-bold">1</span>
                  Conduct an Accessibility Audit
                </h3>
                <p className="text-base text-slate-300 leading-relaxed mb-3">
                  Start by understanding your current state. Automated scanning tools like RatedWithAI can identify the majority of technical WCAG violations in minutes. For a complete picture, combine automated testing with manual review.
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex gap-2">
                    <span className="text-sky-400">•</span>
                    <span>Run automated scans on all key pages (homepage, practice areas, attorney bios, contact)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-sky-400">•</span>
                    <span>Test forms with keyboard-only navigation</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-sky-400">•</span>
                    <span>Verify client portal accessibility separately</span>
                  </li>
                </ul>
              </div>

              {/* Step 2 */}
              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-bold">2</span>
                  Prioritize Critical Path Issues
                </h3>
                <p className="text-base text-slate-300 leading-relaxed">
                  Not all issues carry equal weight. Focus first on barriers that prevent users from completing key tasks:
                </p>
                <ul className="space-y-2 text-sm text-slate-300 mt-3">
                  <li className="flex gap-2">
                    <span className="text-sky-400">•</span>
                    <span><strong>Contact/consultation forms</strong> — This is how clients reach you</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-sky-400">•</span>
                    <span><strong>Main navigation</strong> — Must work for keyboard users</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-sky-400">•</span>
                    <span><strong>Attorney profiles</strong> — Key decision-making content</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-sky-400">•</span>
                    <span><strong>Practice area descriptions</strong> — Core service information</span>
                  </li>
                </ul>
              </div>

              {/* Step 3 */}
              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-bold">3</span>
                  Implement Fixes
                </h3>
                <p className="text-base text-slate-300 leading-relaxed">
                  Work with your web developer or agency to address identified issues. Common fixes include:
                </p>
                <ul className="space-y-2 text-sm text-slate-300 mt-3">
                  <li className="flex gap-2">
                    <span className="text-sky-400">•</span>
                    <span>Adding alt text to all images</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-sky-400">•</span>
                    <span>Associating form labels with input fields</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-sky-400">•</span>
                    <span>Ensuring sufficient color contrast</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-sky-400">•</span>
                    <span>Making navigation keyboard-accessible</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-sky-400">•</span>
                    <span>Adding captions to videos</span>
                  </li>
                </ul>
              </div>

              {/* Step 4 */}
              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-bold">4</span>
                  Publish an Accessibility Statement
                </h3>
                <p className="text-base text-slate-300 leading-relaxed">
                  An accessibility statement demonstrates commitment and provides a channel for users to report issues:
                </p>
                <ul className="space-y-2 text-sm text-slate-300 mt-3">
                  <li className="flex gap-2">
                    <span className="text-sky-400">•</span>
                    <span>State your accessibility commitment</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-sky-400">•</span>
                    <span>Reference WCAG 2.1 Level AA compliance goals</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-sky-400">•</span>
                    <span>Provide contact information for accessibility issues</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-sky-400">•</span>
                    <span>Offer alternative ways to access information</span>
                  </li>
                </ul>
              </div>

              {/* Step 5 */}
              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-bold">5</span>
                  Establish Ongoing Monitoring
                </h3>
                <p className="text-base text-slate-300 leading-relaxed">
                  Accessibility isn't a one-time fix. New content, design updates, and plugin changes can introduce new barriers. Establish regular scanning and testing as part of your website maintenance routine.
                </p>
              </div>
            </div>
          </section>

          {/* Overlay Warning */}
          <section className="space-y-6 rounded-3xl border border-rose-500/40 bg-rose-500/10 p-8">
            <h2 className="text-3xl font-semibold text-white">
              ⚠️ A Word About Accessibility Overlays
            </h2>
            <p className="text-lg leading-relaxed">
              Some vendors sell "overlay" widgets that claim to make websites accessible with a single line of code. As legal professionals, you should know: these tools do not provide ADA compliance, and plaintiffs' attorneys specifically target websites using them.
            </p>
            <ul className="space-y-3 text-base text-slate-200">
              <li className="flex gap-3">
                <span className="text-rose-400">✗</span>
                <span>Overlays cannot fix underlying HTML structure issues</span>
              </li>
              <li className="flex gap-3">
                <span className="text-rose-400">✗</span>
                <span>Many overlay companies have been named in lawsuits themselves</span>
              </li>
              <li className="flex gap-3">
                <span className="text-rose-400">✗</span>
                <span>The disability community has broadly condemned these tools</span>
              </li>
              <li className="flex gap-3">
                <span className="text-rose-400">✗</span>
                <span>Courts have rejected "overlay defense" arguments</span>
              </li>
            </ul>
            <p className="text-base text-rose-200 font-medium mt-4">
              The only path to true accessibility compliance is fixing the underlying code. There are no shortcuts.
            </p>
          </section>

          {/* Business Case */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              The Business Case for Law Firm Accessibility
            </h2>
            <p className="text-lg leading-relaxed">
              Beyond compliance and ethics, accessible websites deliver tangible business benefits:
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6">
                <p className="text-2xl font-bold text-sky-300">26%</p>
                <p className="text-sm text-slate-300 mt-1">of adults in the US have some form of disability</p>
              </div>
              <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6">
                <p className="text-2xl font-bold text-sky-300">$490B</p>
                <p className="text-sm text-slate-300 mt-1">annual disposable income of people with disabilities</p>
              </div>
              <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6">
                <p className="text-2xl font-bold text-sky-300">Better SEO</p>
                <p className="text-sm text-slate-300 mt-1">Accessible sites perform better in search rankings</p>
              </div>
              <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6">
                <p className="text-2xl font-bold text-sky-300">All Users</p>
                <p className="text-sm text-slate-300 mt-1">Accessibility improvements benefit everyone</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-3xl border border-slate-800/70 bg-gradient-to-r from-slate-900 via-slate-900/70 to-slate-950 p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                  Law Firm Accessibility
                </p>
                <h3 className="mt-3 text-3xl font-semibold text-white">
                  Scan Your Law Firm's Website
                </h3>
                <p className="mt-3 text-base text-slate-300">
                  Get a comprehensive accessibility report identifying WCAG violations across your firm's digital presence. Know your compliance status before plaintiffs' attorneys do.
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
                href="/industry/law-firms"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-slate-400">Industry Guide</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Law Firm ADA Compliance Overview
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
                href="/blog/website-accessibility-testing-guide"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-slate-400">Blog Post</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Website Accessibility Testing Guide
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
