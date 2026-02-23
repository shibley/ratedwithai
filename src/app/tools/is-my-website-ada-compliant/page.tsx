/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title:
    "Is My Website ADA Compliant? Free Instant Check | RatedWithAI",
  description:
    "Find out if your website is ADA compliant in under 60 seconds. Our free AI-powered scanner checks WCAG 2.1 AA conformance, identifies violations, and gives you a compliance score with fix recommendations.",
  openGraph: {
    title: "Is My Website ADA Compliant? — Free Instant Check",
    description:
      "Check your website's ADA compliance in seconds. Free AI-powered WCAG 2.1 AA scanner with actionable fix recommendations.",
    type: "website",
  },
  keywords: [
    "is my website ada compliant",
    "ada compliant website checker",
    "is my site ada compliant",
    "ada compliance check",
    "website ada compliance test",
    "ada compliant website test",
    "check ada compliance free",
    "website accessibility compliance check",
    "ada website compliance checker",
    "how to check if website is ada compliant",
    "free ada compliance test",
    "ada compliance scanner",
  ],
};

export default function IsMyWebsiteAdaCompliantPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "RatedWithAI ADA Compliance Checker",
      applicationCategory: "WebApplication",
      operatingSystem: "Any (web-based)",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      description:
        "Free tool to check if your website meets ADA compliance standards (WCAG 2.1 Level AA). Instant scan with severity-rated results and fix guides.",
      url: "https://ratedwithai.com/tools/is-my-website-ada-compliant",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is my website ADA compliant?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The quickest way to find out is to run a free accessibility scan. Our tool checks your website against WCAG 2.1 Level AA standards — the benchmark courts use for ADA compliance. You'll get a compliance score, a list of specific violations, and fix recommendations in under 60 seconds.",
          },
        },
        {
          "@type": "Question",
          name: "What does ADA compliant mean for websites?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ADA compliance for websites means making your site accessible to people with disabilities, including those who use screen readers, keyboard navigation, or other assistive technologies. Courts have consistently ruled that websites are 'places of public accommodation' under Title III of the Americans with Disabilities Act. The accepted standard is WCAG 2.1 Level AA.",
          },
        },
        {
          "@type": "Question",
          name: "How much does an ADA compliance check cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can check your website's ADA compliance for free using RatedWithAI's scanner. The free scan covers WCAG 2.1 Level AA criteria and gives you a compliance score, violation details, and fix recommendations. For ongoing monitoring and detailed reports, paid plans start at $19/month.",
          },
        },
        {
          "@type": "Question",
          name: "What happens if my website is not ADA compliant?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Non-compliant websites face legal risk. In 2025, over 8,667 ADA website lawsuits were filed — a record high. Average settlements range from $5,000 to $25,000 for first-time offenses, but serial plaintiffs can cost much more. Additionally, state and local government websites must comply with WCAG 2.1 AA by April 24, 2026 under the new Title II rule.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to make a website ADA compliant?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on the severity of issues. Minor fixes (alt text, color contrast, form labels) can be done in hours. More complex issues (keyboard navigation, ARIA implementation, video captions) may take weeks. A typical small business website takes 2-4 weeks to remediate. The first step is always to run a scan and understand what needs fixing.",
          },
        },
        {
          "@type": "Question",
          name: "Do small businesses need ADA compliant websites?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The ADA applies to all businesses that serve the public, regardless of size. In fact, 77% of ADA website lawsuits target businesses with under $25 million in annual revenue. Small businesses are often targeted because they're less likely to have compliant sites and more likely to settle quickly. The good news: most small business sites can reach compliance for under $500.",
          },
        },
        {
          "@type": "Question",
          name: "Can I check ADA compliance myself or do I need an expert?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can start yourself with automated tools like RatedWithAI, which catch 30-40% of accessibility issues automatically. For full compliance, you'll also want manual testing (keyboard navigation, screen reader testing). Our scanner gives you a clear starting point and prioritizes issues by severity so you know what to fix first.",
          },
        },
        {
          "@type": "Question",
          name: "What is WCAG 2.1 Level AA and why does it matter for ADA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "WCAG (Web Content Accessibility Guidelines) 2.1 Level AA is a set of 50 testable success criteria organized under four principles: Perceivable, Operable, Understandable, and Robust. While the ADA doesn't explicitly mention WCAG, courts and the DOJ consistently reference WCAG 2.1 AA as the technical standard for web accessibility. The April 2026 Title II rule formally adopts WCAG 2.1 AA for government websites.",
          },
        },
      ],
    },
  ];

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

          {/* Hero */}
          <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-14 pt-4">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm text-amber-400">
                ⚠️ 8,667 ADA Lawsuits Filed in 2025 — Is Your Site at Risk?
              </span>
              <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
                Is My Website<br />
                <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                  ADA Compliant?
                </span>
              </h1>
              <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                Find out in under 60 seconds. Our free AI-powered scanner checks your site against
                WCAG 2.1 Level AA — the standard courts use for ADA compliance. Get your score,
                see every violation, and know exactly what to fix.
              </p>
            </div>

            {/* Primary CTA */}
            <div className="mt-10 text-center">
              <Link
                href="/#scanner"
                className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-10 py-4 text-lg font-bold text-white hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/20"
              >
                Check My Website Now — It's Free →
              </Link>
              <p className="mt-3 text-sm text-slate-400">
                No credit card · No signup · Results in 60 seconds
              </p>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span> Powered by axe-core
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span> WCAG 2.1 Level AA
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span> Used by 5,000+ sites
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span> No overlays — real fixes
              </div>
            </div>
          </section>

          {/* Why Check Now */}
          <section className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-4">
              Why You Need to Check Right Now
            </h2>
            <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
              ADA enforcement is at an all-time high. Here's what's at stake if your website isn't compliant.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
                <div className="text-3xl font-bold text-red-400 mb-2">8,667</div>
                <div className="text-sm font-medium text-red-300 mb-3">ADA Lawsuits Filed in 2025</div>
                <p className="text-sm text-slate-400">
                  A new record. That's 24 lawsuits per day. Serial plaintiffs file hundreds of
                  cases annually, targeting businesses with non-compliant websites.
                </p>
              </div>
              <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6">
                <div className="text-3xl font-bold text-amber-400 mb-2">$5K–$150K</div>
                <div className="text-sm font-medium text-amber-300 mb-3">Average Settlement Cost</div>
                <p className="text-sm text-slate-400">
                  First-time settlements range from $5,000 to $25,000. Repeat violations or class
                  actions can cost $50,000 to $150,000+. Legal fees add $10,000+ on top.
                </p>
              </div>
              <div className="rounded-2xl border border-sky-500/20 bg-sky-500/5 p-6">
                <div className="text-3xl font-bold text-sky-400 mb-2">April 2026</div>
                <div className="text-sm font-medium text-sky-300 mb-3">Title II Compliance Deadline</div>
                <p className="text-sm text-slate-400">
                  State and local government websites must meet WCAG 2.1 AA by April 24, 2026.
                  Private businesses are already held to this standard under Title III.
                </p>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-4">
              How Our Free ADA Compliance Check Works
            </h2>
            <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
              Three steps. Under 60 seconds. No technical knowledge required.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500/10 border border-sky-500/20 text-2xl mb-4">
                  1️⃣
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Paste Your URL</h3>
                <p className="text-sm text-slate-400">
                  Enter any webpage URL. Our scanner works with any website — WordPress, Shopify,
                  Squarespace, custom-built, government sites, anything.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500/10 border border-sky-500/20 text-2xl mb-4">
                  2️⃣
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">We Scan for Violations</h3>
                <p className="text-sm text-slate-400">
                  Our AI-powered scanner (built on axe-core, the same engine used by Microsoft and
                  Google) checks your page against all 50 WCAG 2.1 Level AA criteria.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500/10 border border-sky-500/20 text-2xl mb-4">
                  3️⃣
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Get Your Score + Fix Plan</h3>
                <p className="text-sm text-slate-400">
                  Receive a compliance score (A through F), every violation with severity ratings
                  (Critical / Serious / Moderate / Minor), and plain-language fix instructions.
                </p>
              </div>
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/#scanner"
                className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-8 py-3 font-bold text-white hover:bg-sky-400 transition-all"
              >
                Run My Free Compliance Check →
              </Link>
            </div>
          </section>

          {/* What We Check */}
          <section className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-4">
              What Our ADA Compliance Scanner Checks
            </h2>
            <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
              We test against the WCAG 2.1 Level AA criteria that courts reference in ADA lawsuits.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: "👁️",
                  title: "Perceivable",
                  items: [
                    "Missing alt text on images",
                    "Insufficient color contrast (below 4.5:1)",
                    "Missing captions on video/audio",
                    "Content that can't be resized to 200%",
                    "Information conveyed only through color",
                  ],
                },
                {
                  icon: "⌨️",
                  title: "Operable",
                  items: [
                    "Elements not reachable by keyboard",
                    "Missing focus indicators",
                    "No skip navigation links",
                    "Time limits without user control",
                    "Missing page titles and headings",
                  ],
                },
                {
                  icon: "💬",
                  title: "Understandable",
                  items: [
                    "Missing page language attribute",
                    "Form inputs without labels",
                    "Missing error messages and suggestions",
                    "Inconsistent navigation patterns",
                    "Unclear link text ('click here')",
                  ],
                },
                {
                  icon: "🔧",
                  title: "Robust",
                  items: [
                    "Invalid HTML that breaks assistive tech",
                    "Missing ARIA roles and labels",
                    "Status messages not announced to screen readers",
                    "Custom widgets without proper ARIA",
                    "Duplicate IDs that confuse screen readers",
                  ],
                },
              ].map((principle) => (
                <div
                  key={principle.title}
                  className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{principle.icon}</span>
                    <h3 className="text-lg font-semibold text-white">{principle.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {principle.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="text-sky-400 mt-0.5">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Who Needs This */}
          <section className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-4">
              Who Needs to Check ADA Compliance?
            </h2>
            <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
              If your business has a website, the ADA likely applies to you.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  emoji: "🏪",
                  title: "Small Businesses",
                  desc: "77% of ADA lawsuits target businesses under $25M revenue. Your website is a 'place of public accommodation' under the ADA.",
                  link: "/blog/small-business-accessibility-guide",
                  linkText: "Small Business Guide →",
                },
                {
                  emoji: "🛒",
                  title: "E-Commerce Stores",
                  desc: "Online stores face the highest lawsuit volume. Shopify, WooCommerce, BigCommerce — all need accessible checkout, product pages, and navigation.",
                  link: "/blog/ecommerce-accessibility-guide",
                  linkText: "E-Commerce Guide →",
                },
                {
                  emoji: "🏥",
                  title: "Healthcare",
                  desc: "Patient portals, appointment systems, and health info must be accessible. HIPAA + ADA create a double compliance requirement.",
                  link: "/industry/healthcare",
                  linkText: "Healthcare Compliance →",
                },
                {
                  emoji: "🏛️",
                  title: "Government & Education",
                  desc: "Title II requires WCAG 2.1 AA compliance by April 24, 2026. State/local government sites and public universities face strict deadlines.",
                  link: "/blog/ada-title-ii-compliance-guide",
                  linkText: "Title II Guide →",
                },
                {
                  emoji: "🏦",
                  title: "Financial Services",
                  desc: "Banking sites, fintech apps, and insurance portals need accessible forms, statements, and account management features.",
                  link: "/industry/banking",
                  linkText: "Banking Compliance →",
                },
                {
                  emoji: "⚖️",
                  title: "Law Firms & Agencies",
                  desc: "Ironic but true: law firm websites are frequent lawsuit targets. If you serve the public, your site must be accessible.",
                  link: "/blog/law-firm-accessibility-compliance",
                  linkText: "Law Firm Guide →",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
                >
                  <span className="text-2xl">{item.emoji}</span>
                  <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{item.desc}</p>
                  <Link
                    href={item.link}
                    className="mt-3 inline-block text-sm text-sky-400 hover:text-sky-300 transition"
                  >
                    {item.linkText}
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Common Issues */}
          <section className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-4">
              The Most Common ADA Violations We Find
            </h2>
            <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
              Based on thousands of scans, these are the issues that appear on nearly every non-compliant website.
            </p>
            <div className="space-y-4">
              {[
                {
                  rank: "#1",
                  title: "Missing Image Alt Text",
                  pct: "86%",
                  desc: "Images without descriptive alt text are invisible to screen reader users. This is the single most common violation and often the easiest to fix.",
                  severity: "Critical",
                  severityColor: "text-red-400 border-red-500/30 bg-red-500/10",
                },
                {
                  rank: "#2",
                  title: "Low Color Contrast",
                  pct: "83%",
                  desc: "Text that doesn't meet the 4.5:1 contrast ratio against its background. Affects users with low vision, color blindness, and anyone viewing in bright sunlight.",
                  severity: "Serious",
                  severityColor: "text-orange-400 border-orange-500/30 bg-orange-500/10",
                },
                {
                  rank: "#3",
                  title: "Missing Form Labels",
                  pct: "62%",
                  desc: "Form inputs (email, password, search) without associated labels. Screen readers can't tell users what to type. Contact forms and checkout flows are the worst offenders.",
                  severity: "Critical",
                  severityColor: "text-red-400 border-red-500/30 bg-red-500/10",
                },
                {
                  rank: "#4",
                  title: "Empty Links and Buttons",
                  pct: "51%",
                  desc: "Links and buttons with no accessible name — often icon buttons (hamburger menus, social icons, close buttons) without aria-labels.",
                  severity: "Serious",
                  severityColor: "text-orange-400 border-orange-500/30 bg-orange-500/10",
                },
                {
                  rank: "#5",
                  title: "Missing Document Language",
                  pct: "28%",
                  desc: "The <html> tag is missing a lang attribute. Screen readers need this to use the correct pronunciation and speech engine.",
                  severity: "Serious",
                  severityColor: "text-orange-400 border-orange-500/30 bg-orange-500/10",
                },
              ].map((issue) => (
                <div
                  key={issue.rank}
                  className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 flex flex-col sm:flex-row gap-4"
                >
                  <div className="flex-shrink-0 text-center sm:text-left">
                    <span className="text-2xl font-bold text-slate-500">{issue.rank}</span>
                    <div className="text-2xl font-bold text-white mt-1">{issue.pct}</div>
                    <div className="text-xs text-slate-500">of sites</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-white">{issue.title}</h3>
                      <span
                        className={`rounded-full border px-2 py-0.5 text-xs font-medium ${issue.severityColor}`}
                      >
                        {issue.severity}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400">{issue.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-slate-400 text-sm mb-4">
                Don't wait to discover these issues in a demand letter.
              </p>
              <Link
                href="/#scanner"
                className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-8 py-3 font-bold text-white hover:bg-sky-400 transition-all"
              >
                Scan My Website Free →
              </Link>
            </div>
          </section>

          {/* Overlay Warning */}
          <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-16">
            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-8">
              <h2 className="text-2xl font-bold text-white mb-4 text-center">
                ⚠️ Warning: Accessibility Overlays Don't Make You ADA Compliant
              </h2>
              <p className="text-slate-300 text-center mb-6 max-w-2xl mx-auto">
                Overlay widgets (accessiBe, UserWay, AudioEye) add a toolbar to your site but
                don't actually fix the underlying code. Here's what the data shows:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4 text-center">
                  <div className="text-2xl font-bold text-amber-400">$1M</div>
                  <div className="text-xs text-slate-400 mt-1">
                    FTC fine against accessiBe for deceptive claims
                  </div>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4 text-center">
                  <div className="text-2xl font-bold text-amber-400">25%</div>
                  <div className="text-xs text-slate-400 mt-1">
                    of ADA lawsuits now cite overlay widgets as insufficient
                  </div>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4 text-center">
                  <div className="text-2xl font-bold text-amber-400">800+</div>
                  <div className="text-xs text-slate-400 mt-1">
                    accessibility professionals have signed the Overlay Fact Sheet
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm text-slate-400 mb-4">
                  Real compliance means fixing your code. Our scanner shows you exactly what to fix — no overlays needed.
                </p>
                <Link
                  href="/tools/accessibe-alternative"
                  className="text-sm text-sky-400 hover:text-sky-300 transition"
                >
                  Learn why businesses are switching from overlays →
                </Link>
              </div>
            </div>
          </section>

          {/* Cost of Non-Compliance */}
          <section className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-4">
              The True Cost of Non-Compliance
            </h2>
            <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
              An ADA compliance check costs nothing. Ignoring it could cost everything.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-slate-800">
                    <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">Scenario</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">Cost Range</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">Timeline</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-slate-800/50">
                    <td className="py-3 px-4 text-green-400 font-medium">✓ Fix it now (proactive)</td>
                    <td className="py-3 px-4 text-slate-300">$0 – $500/mo</td>
                    <td className="py-3 px-4 text-slate-400">2-4 weeks</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="py-3 px-4 text-amber-400 font-medium">⚠ Demand letter received</td>
                    <td className="py-3 px-4 text-slate-300">$3,000 – $10,000</td>
                    <td className="py-3 px-4 text-slate-400">30-90 days</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="py-3 px-4 text-orange-400 font-medium">⚠ Lawsuit filed</td>
                    <td className="py-3 px-4 text-slate-300">$10,000 – $50,000</td>
                    <td className="py-3 px-4 text-slate-400">3-12 months</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="py-3 px-4 text-red-400 font-medium">✗ Class action / DOJ</td>
                    <td className="py-3 px-4 text-slate-300">$50,000 – $500,000+</td>
                    <td className="py-3 px-4 text-slate-400">1-3 years</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-red-400 font-medium">✗ Repeat violation</td>
                    <td className="py-3 px-4 text-slate-300">$75,000 – $150,000 per offense</td>
                    <td className="py-3 px-4 text-slate-400">Ongoing</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-8 rounded-xl border border-green-500/20 bg-green-500/5 p-6 text-center">
              <p className="text-lg font-semibold text-white mb-2">
                A free scan now could save you $10,000+ later
              </p>
              <p className="text-sm text-slate-400 mb-4">
                Most businesses discover 15-40 violations on their first scan. Fixing them typically
                costs a fraction of what a single demand letter costs to resolve.
              </p>
              <Link
                href="/#scanner"
                className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-8 py-3 font-bold text-white hover:bg-sky-400 transition-all"
              >
                Check My Website Free →
              </Link>
            </div>
          </section>

          {/* Compliance Checklist */}
          <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-4">
              Quick ADA Compliance Checklist
            </h2>
            <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
              Before you scan, here's a quick self-assessment. How many of these does your website meet?
            </p>
            <div className="space-y-3">
              {[
                { text: "All images have descriptive alt text", category: "Perceivable" },
                { text: "Text meets 4.5:1 color contrast ratio", category: "Perceivable" },
                { text: "Videos have closed captions", category: "Perceivable" },
                { text: "Every page element is reachable by keyboard", category: "Operable" },
                { text: "Focus indicators are visible on interactive elements", category: "Operable" },
                { text: "Page titles are descriptive and unique", category: "Operable" },
                { text: "Skip navigation link is present", category: "Operable" },
                { text: "Form fields have visible labels", category: "Understandable" },
                { text: "Error messages are clear and descriptive", category: "Understandable" },
                { text: "Navigation is consistent across pages", category: "Understandable" },
                { text: "HTML lang attribute is set", category: "Robust" },
                { text: "No duplicate element IDs", category: "Robust" },
                { text: "ARIA roles are used correctly", category: "Robust" },
                { text: "Site works with screen readers (NVDA, VoiceOver)", category: "Robust" },
                { text: "Site works at 200% zoom without horizontal scrolling", category: "Perceivable" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/50 p-4"
                >
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded border border-slate-700 text-xs text-slate-500">
                    {i + 1}
                  </div>
                  <span className="flex-1 text-sm text-slate-200">{item.text}</span>
                  <span className="rounded-full border border-slate-700 px-2 py-0.5 text-xs text-slate-500">
                    {item.category}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-sm text-slate-400 mb-4">
                Not sure about some of these? Let our scanner check automatically.
              </p>
              <Link
                href="/#scanner"
                className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-8 py-3 font-bold text-white hover:bg-sky-400 transition-all"
              >
                Run the Full Automated Check →
              </Link>
            </div>
          </section>

          {/* After Your Scan */}
          <section className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-4">
              After Your Scan: What to Do Next
            </h2>
            <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
              Your scan will show you exactly where you stand. Here's how to use the results.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6">
                <h3 className="text-lg font-semibold text-green-400 mb-3">
                  ✅ If You Score A or B
                </h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">→</span>
                    Fix any remaining Critical/Serious violations
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">→</span>
                    Publish an{" "}
                    <Link href="/tools/accessibility-statement-generator" className="text-sky-400 hover:text-sky-300">
                      accessibility statement
                    </Link>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">→</span>
                    Set up monthly monitoring to maintain compliance
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">→</span>
                    Consider manual testing with screen readers for full coverage
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6">
                <h3 className="text-lg font-semibold text-amber-400 mb-3">
                  ⚠️ If You Score C
                </h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-0.5">→</span>
                    Prioritize Critical violations (these trigger lawsuits)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-0.5">→</span>
                    Fix alt text, contrast, and form labels first (biggest impact)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-0.5">→</span>
                    Re-scan after fixes to track progress
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-0.5">→</span>
                    Aim for a B or A score within 30 days
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 md:col-span-2">
                <h3 className="text-lg font-semibold text-red-400 mb-3">
                  🚨 If You Score D or F — Act Immediately
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">1.</span>
                      Fix all Critical violations within 48 hours
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">2.</span>
                      Add an accessibility statement showing remediation effort
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">3.</span>
                      Tackle Serious violations within 2 weeks
                    </li>
                  </ul>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">4.</span>
                      Set up ongoing monitoring (catches regressions)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">5.</span>
                      Consider professional remediation for complex sites
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">6.</span>
                      Document everything — good faith effort matters in court
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Preview */}
          <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-4">
              Stay Compliant with Ongoing Monitoring
            </h2>
            <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
              A one-time scan is a great start. Ongoing monitoring ensures you stay compliant
              as your site changes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 text-center">
                <div className="text-sm font-medium text-slate-400 mb-1">Free</div>
                <div className="text-3xl font-bold text-white">$0</div>
                <div className="text-xs text-slate-500 mb-4">forever</div>
                <ul className="space-y-2 text-sm text-slate-400 text-left">
                  <li>✓ Unlimited manual scans</li>
                  <li>✓ Compliance score + grade</li>
                  <li>✓ Violation details + fix guides</li>
                  <li>✓ No signup required</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-sky-500/30 bg-sky-500/5 p-6 text-center ring-2 ring-sky-500/20">
                <div className="text-sm font-medium text-sky-400 mb-1">Starter</div>
                <div className="text-3xl font-bold text-white">$19<span className="text-sm font-normal text-slate-400">/mo</span></div>
                <div className="text-xs text-slate-500 mb-4">per domain</div>
                <ul className="space-y-2 text-sm text-slate-400 text-left">
                  <li>✓ Weekly automated scans</li>
                  <li>✓ Multi-page crawling</li>
                  <li>✓ Email alerts on regressions</li>
                  <li>✓ Compliance history & trends</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 text-center">
                <div className="text-sm font-medium text-slate-400 mb-1">Pro</div>
                <div className="text-3xl font-bold text-white">$49<span className="text-sm font-normal text-slate-400">/mo</span></div>
                <div className="text-xs text-slate-500 mb-4">per domain</div>
                <ul className="space-y-2 text-sm text-slate-400 text-left">
                  <li>✓ Daily automated scans</li>
                  <li>✓ Full-site crawling (500+ pages)</li>
                  <li>✓ PDF compliance reports</li>
                  <li>✓ Priority support</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/pricing"
                className="text-sm text-sky-400 hover:text-sky-300 transition"
              >
                View full pricing details →
              </Link>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-10">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Is my website ADA compliant?
                </h3>
                <p className="text-sm text-slate-400">
                  The quickest way to find out is to run a free accessibility scan. Our tool checks your website against WCAG 2.1 Level AA standards — the benchmark courts use for ADA compliance. You'll get a compliance score, a list of specific violations, and fix recommendations in under 60 seconds.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  What does ADA compliant mean for websites?
                </h3>
                <p className="text-sm text-slate-400">
                  ADA compliance for websites means making your site accessible to people with disabilities, including those who use screen readers, keyboard navigation, or other assistive technologies. Courts have consistently ruled that websites are "places of public accommodation" under Title III of the Americans with Disabilities Act. The accepted standard is WCAG 2.1 Level AA.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  How much does an ADA compliance check cost?
                </h3>
                <p className="text-sm text-slate-400">
                  You can check your website's ADA compliance for free using RatedWithAI's scanner. The free scan covers WCAG 2.1 Level AA criteria and gives you a compliance score, violation details, and fix recommendations. For ongoing monitoring and detailed reports, paid plans start at $19/month.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  What happens if my website is not ADA compliant?
                </h3>
                <p className="text-sm text-slate-400">
                  Non-compliant websites face legal risk. In 2025, over 8,667 ADA website lawsuits were filed — a record high. Average settlements range from $5,000 to $25,000 for first-time offenses, but serial plaintiffs can cost much more. Additionally, state and local government websites must comply with WCAG 2.1 AA by April 24, 2026 under the new Title II rule.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  How long does it take to make a website ADA compliant?
                </h3>
                <p className="text-sm text-slate-400">
                  It depends on the severity of issues. Minor fixes (alt text, color contrast, form labels) can be done in hours. More complex issues (keyboard navigation, ARIA implementation, video captions) may take weeks. A typical small business website takes 2-4 weeks to remediate. The first step is always to run a scan and understand what needs fixing.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Do small businesses need ADA compliant websites?
                </h3>
                <p className="text-sm text-slate-400">
                  Yes. The ADA applies to all businesses that serve the public, regardless of size. In fact, 77% of ADA website lawsuits target businesses with under $25 million in annual revenue. Small businesses are often targeted because they're less likely to have compliant sites and more likely to settle quickly. The good news: most small business sites can reach compliance for under $500.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Can I check ADA compliance myself or do I need an expert?
                </h3>
                <p className="text-sm text-slate-400">
                  You can start yourself with automated tools like RatedWithAI, which catch 30-40% of accessibility issues automatically. For full compliance, you'll also want manual testing (keyboard navigation, screen reader testing). Our scanner gives you a clear starting point and prioritizes issues by severity so you know what to fix first.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  What is WCAG 2.1 Level AA and why does it matter for ADA?
                </h3>
                <p className="text-sm text-slate-400">
                  WCAG (Web Content Accessibility Guidelines) 2.1 Level AA is a set of 50 testable success criteria organized under four principles: Perceivable, Operable, Understandable, and Robust. While the ADA doesn't explicitly mention WCAG, courts and the DOJ consistently reference WCAG 2.1 AA as the technical standard for web accessibility. The April 2026 Title II rule formally adopts WCAG 2.1 AA for government websites.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-20">
            <div className="rounded-2xl border border-sky-500/20 bg-gradient-to-b from-sky-500/10 to-transparent p-10 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Don't Wait for a Demand Letter
              </h2>
              <p className="text-lg text-slate-300 mb-6 max-w-xl mx-auto">
                Check your website's ADA compliance right now — free, instant, no signup.
                Find out what needs fixing before a plaintiff's lawyer does.
              </p>
              <Link
                href="/#scanner"
                className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-10 py-4 text-lg font-bold text-white hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/20"
              >
                Is My Website ADA Compliant? Check Now →
              </Link>
              <p className="mt-4 text-sm text-slate-500">
                Join 5,000+ businesses that have already scanned their websites with RatedWithAI.
              </p>
            </div>
          </section>

          {/* Related Resources */}
          <section className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-16">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Related ADA Compliance Resources
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  title: "ADA Compliance Checklist 2026",
                  desc: "Step-by-step guide to full compliance",
                  href: "/blog/ada-compliance-checklist-2026",
                },
                {
                  title: "ADA Website Compliance Guide",
                  desc: "Everything about Title I, II & III",
                  href: "/blog/ada-website-compliance-guide",
                },
                {
                  title: "WCAG Compliance Guide",
                  desc: "POUR principles & Level AA criteria",
                  href: "/blog/wcag-compliance-guide",
                },
                {
                  title: "Lawsuit Statistics 2026",
                  desc: "8,667 lawsuits — know the numbers",
                  href: "/blog/website-accessibility-lawsuit-statistics-2026",
                },
                {
                  title: "Section 508 Guide",
                  desc: "Federal government compliance",
                  href: "/blog/section-508-compliance-guide",
                },
                {
                  title: "accessiBe Alternatives",
                  desc: "Real solutions beyond overlays",
                  href: "/tools/accessibe-alternative",
                },
                {
                  title: "VPAT Template",
                  desc: "Free Voluntary Product Accessibility template",
                  href: "/tools/vpat-template",
                },
                {
                  title: "Accessibility Statement Generator",
                  desc: "Create a compliant statement in minutes",
                  href: "/tools/accessibility-statement-generator",
                },
              ].map((resource) => (
                <Link
                  key={resource.href}
                  href={resource.href}
                  className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 transition hover:border-sky-500/30 hover:bg-sky-500/5"
                >
                  <h3 className="text-sm font-semibold text-white mb-1">{resource.title}</h3>
                  <p className="text-xs text-slate-400">{resource.desc}</p>
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
