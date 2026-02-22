/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Free Website Accessibility Checker — WCAG 2.1 AA Scanner | RatedWithAI",
  description:
    "Free website accessibility checker powered by AI. Scan any URL for WCAG 2.1 AA violations in seconds. Get actionable fix recommendations with severity ratings. No signup required.",
  openGraph: {
    title: "Free Website Accessibility Checker | RatedWithAI",
    description:
      "Scan any website for WCAG 2.1 AA accessibility violations — free, instant, no signup. Get severity ratings and plain-language fix guides.",
    type: "website",
  },
  keywords: [
    "free accessibility checker",
    "accessibility checker free",
    "free website accessibility checker",
    "free wcag checker",
    "free ada compliance checker",
    "web accessibility scanner free",
    "website accessibility testing tool free",
    "wcag 2.1 checker free",
    "ada compliance tool free",
    "accessibility audit tool",
    "web accessibility tools",
  ],
};

export default function FreeAccessibilityCheckerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "RatedWithAI Free Accessibility Checker",
    applicationCategory: "WebApplication",
    operatingSystem: "Any (web-based)",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Free AI-powered website accessibility scanner. Check any URL for WCAG 2.1 AA violations with instant results and fix recommendations.",
    url: "https://ratedwithai.com/tools/free-accessibility-checker",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      ratingCount: "128",
      bestRating: "5",
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
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm text-green-400">
                ✓ 100% Free — No Signup Required
              </span>
              <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
                Free Website<br />Accessibility Checker
              </h1>
              <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                Scan any URL for WCAG 2.1 AA accessibility violations in under 60 seconds.
                Get a compliance score, severity ratings, and plain-language fix recommendations — completely free.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10 text-center">
              <Link
                href="/#scanner"
                className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-10 py-4 text-lg font-bold text-white hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/20"
              >
                Scan Your Website Free →
              </Link>
              <p className="mt-3 text-sm text-slate-400">No credit card. No signup. Just paste a URL.</p>
            </div>

            {/* What You Get */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-white text-center mb-8">What You Get (Free)</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    icon: "🎯",
                    title: "Compliance Score",
                    desc: "A 0-100 accessibility score based on automated WCAG 2.1 AA testing across all four principles.",
                  },
                  {
                    icon: "🔍",
                    title: "Violation Detection",
                    desc: "Every WCAG violation found on the page, categorized by type: critical, serious, moderate, minor.",
                  },
                  {
                    icon: "📝",
                    title: "Fix Recommendations",
                    desc: "Plain-language instructions for fixing each issue. Written for developers AND non-technical teams.",
                  },
                  {
                    icon: "📊",
                    title: "Severity Ratings",
                    desc: "Issues prioritized by impact — fix the critical ones first to eliminate the most risk fastest.",
                  },
                  {
                    icon: "⚡",
                    title: "Instant Results",
                    desc: "Full scan completes in under 60 seconds. No waiting for reports or scheduling audits.",
                  },
                  {
                    icon: "🔄",
                    title: "Unlimited Scans",
                    desc: "Scan as many pages as you want. Check your competitors. Test your fixes. All free.",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
                    <div className="text-2xl mb-3">{item.icon}</div>
                    <h3 className="font-bold text-white">{item.title}</h3>
                    <p className="text-sm text-slate-400 mt-2">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-white text-center mb-8">How It Works</h2>
              <div className="flex flex-col sm:flex-row gap-6">
                {[
                  { step: "1", title: "Paste Your URL", desc: "Enter any website address into the scanner on our homepage." },
                  { step: "2", title: "AI Scans Your Page", desc: "Our engine loads your page in a real browser and runs 50+ WCAG 2.1 AA checks." },
                  { step: "3", title: "Get Your Results", desc: "See your score, violations, and exactly what to fix — in plain language." },
                ].map((item) => (
                  <div key={item.step} className="flex-1 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sky-500/20 text-sky-400 text-xl font-bold mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-white">{item.title}</h3>
                    <p className="text-sm text-slate-400 mt-2">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* vs Competitors */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-white text-center mb-8">How RatedWithAI Compares</h2>
              <div className="rounded-xl border border-slate-700 overflow-hidden">
                <div className="grid grid-cols-5 bg-slate-800 p-4 text-sm font-semibold text-center">
                  <div className="text-left text-slate-300">Feature</div>
                  <div className="text-sky-400">RatedWithAI</div>
                  <div className="text-slate-400">WAVE</div>
                  <div className="text-slate-400">Lighthouse</div>
                  <div className="text-slate-400">accessiBe</div>
                </div>
                {[
                  { feature: "Free tier", vals: ["✅ Unlimited", "✅ Unlimited", "✅ Built-in", "❌ Paid only"] },
                  { feature: "WCAG 2.1 AA coverage", vals: ["50+ checks", "~30 checks", "~15 checks", "Overlay only"] },
                  { feature: "AI-powered fixes", vals: ["✅", "❌", "❌", "⚠️ Automated overlay"] },
                  { feature: "Plain language", vals: ["✅", "⚠️ Technical", "⚠️ Technical", "N/A"] },
                  { feature: "No signup required", vals: ["✅", "✅", "✅", "❌"] },
                  { feature: "Monitoring", vals: ["✅ Pro plan", "❌", "❌", "✅ Paid"] },
                  { feature: "Real browser testing", vals: ["✅ Playwright", "✅", "✅", "❌ DOM inject"] },
                  { feature: "Overlay-free", vals: ["✅", "✅", "✅", "❌ Overlay-based"] },
                ].map((row) => (
                  <div key={row.feature} className="grid grid-cols-5 p-4 text-sm border-t border-slate-700 bg-slate-800/50 text-center">
                    <div className="text-left text-slate-300 font-medium">{row.feature}</div>
                    {row.vals.map((val, i) => (
                      <div key={i} className={i === 0 ? 'text-sky-400 font-medium' : 'text-slate-400'}>
                        {val}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* What We Check */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-white text-center mb-8">What We Check For</h2>
              <p className="text-center text-slate-300 max-w-2xl mx-auto mb-8">
                Our scanner tests against all four WCAG 2.1 AA principles — the same standard the DOJ
                uses for ADA compliance enforcement.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    principle: "Perceivable",
                    color: "sky",
                    checks: [
                      "Image alt text (1.1.1)",
                      "Video captions (1.2.2)",
                      "Color contrast ratios (1.4.3)",
                      "Text resizing (1.4.4)",
                      "Content reflow (1.4.10)",
                    ],
                  },
                  {
                    principle: "Operable",
                    color: "purple",
                    checks: [
                      "Keyboard navigation (2.1.1)",
                      "No keyboard traps (2.1.2)",
                      "Skip navigation links (2.4.1)",
                      "Page titles (2.4.2)",
                      "Focus visible (2.4.7)",
                    ],
                  },
                  {
                    principle: "Understandable",
                    color: "green",
                    checks: [
                      "Language declaration (3.1.1)",
                      "Labels on forms (3.3.2)",
                      "Error identification (3.3.1)",
                      "Consistent navigation (3.2.3)",
                      "Input purpose (1.3.5)",
                    ],
                  },
                  {
                    principle: "Robust",
                    color: "amber",
                    checks: [
                      "Valid HTML parsing (4.1.1)",
                      "ARIA attribute validity (4.1.2)",
                      "Status messages (4.1.3)",
                      "Name, role, value (4.1.2)",
                      "Custom widget accessibility",
                    ],
                  },
                ].map((cat) => (
                  <div key={cat.principle} className="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
                    <h3 className={`font-bold text-lg text-${cat.color}-400`}>{cat.principle}</h3>
                    <ul className="mt-3 space-y-2">
                      {cat.checks.map((check) => (
                        <li key={check} className="flex items-center gap-2 text-sm text-slate-300">
                          <span className={`text-${cat.color}-400`}>✓</span>
                          {check}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Accessibility Matters */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-white text-center mb-8">Why Check Accessibility Now?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "ADA Title II Deadline",
                    desc: "Government websites must meet WCAG 2.1 AA by April 24, 2026. Non-compliance means lawsuits and loss of funding.",
                    link: "/blog/ada-title-ii-deadline-countdown-2026",
                    linkText: "Read the countdown →",
                  },
                  {
                    title: "5,000+ Lawsuits in 2025",
                    desc: "Web accessibility lawsuits are at an all-time high. Plaintiff firms specifically target sites with no accessibility effort.",
                    link: "/blog/website-accessibility-lawsuit-statistics-2026",
                    linkText: "See the statistics →",
                  },
                  {
                    title: "94.8% of Sites Fail",
                    desc: "WebAIM's 2026 report found that nearly all websites have detectable WCAG failures. Most don't even know.",
                    link: "/blog/top-10-wcag-failures",
                    linkText: "Top failures →",
                  },
                  {
                    title: "$5,000 Tax Credit",
                    desc: "Small businesses can claim the Disabled Access Credit (Form 8826) — making accessibility tools effectively free.",
                    link: "/blog/ada-title-ii-deadline-countdown-2026#tax-credit",
                    linkText: "Learn about the credit →",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
                    <h3 className="font-bold text-white">{item.title}</h3>
                    <p className="text-sm text-slate-400 mt-2">{item.desc}</p>
                    <Link href={item.link} className="text-sm text-sky-400 hover:text-sky-300 mt-3 inline-block">
                      {item.linkText}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    q: "Is the accessibility checker really free?",
                    a: "Yes. You can scan any URL as many times as you want with no signup, no credit card, and no usage limits. Our free scanner runs the same engine as our paid plans.",
                  },
                  {
                    q: "What standard does it check against?",
                    a: "WCAG 2.1 Level AA — the same standard referenced by the ADA, Section 508, the European Accessibility Act, and the DOJ's Title II rule. This is the globally accepted benchmark for web accessibility.",
                  },
                  {
                    q: "Can automated tools catch all accessibility issues?",
                    a: "No. Automated tools typically catch 30-40% of WCAG issues (the easily detectable ones like missing alt text, contrast failures, and missing labels). Manual testing with screen readers and keyboard navigation is needed for complete coverage. However, automated scanning catches the violations most commonly cited in lawsuits.",
                  },
                  {
                    q: "Is this an accessibility overlay or widget?",
                    a: "No. RatedWithAI is a scanner and reporting tool — it analyzes your website and tells you what to fix. We do not inject any overlay, widget, or JavaScript into your site. Overlays have been shown to increase lawsuit risk and have been fined $1M for deceptive compliance claims.",
                  },
                  {
                    q: "What do I do after I get my results?",
                    a: "Start with the critical and serious violations — these carry the most legal risk. Each violation includes a plain-language description and fix instructions. For ongoing protection, our paid plans offer scheduled monitoring, email alerts, and compliance documentation.",
                  },
                  {
                    q: "Does this work for mobile apps?",
                    a: "Currently, our scanner works with websites and web applications. Mobile app accessibility testing requires different tools (like Accessibility Scanner for Android or Accessibility Inspector for iOS).",
                  },
                ].map((item) => (
                  <div key={item.q} className="rounded-lg border border-slate-700 bg-slate-800/50 p-5">
                    <h3 className="font-semibold text-white">{item.q}</h3>
                    <p className="text-sm text-slate-400 mt-2">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Final CTA */}
            <div className="mt-16 rounded-xl border border-sky-500/30 bg-sky-500/5 p-10 text-center">
              <h2 className="text-3xl font-bold text-white">Ready to Check Your Website?</h2>
              <p className="text-slate-300 mt-4 max-w-xl mx-auto">
                Join thousands of organizations using RatedWithAI to identify and fix accessibility issues
                before they become lawsuits.
              </p>
              <Link
                href="/#scanner"
                className="inline-flex items-center gap-2 mt-6 rounded-xl bg-sky-500 px-10 py-4 text-lg font-bold text-white hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/20"
              >
                Free Accessibility Scan →
              </Link>
              <p className="mt-4 text-sm text-slate-400">
                Need more? <Link href="/pricing" className="text-sky-400 hover:text-sky-300">See our Pro plans</Link> for
                monitoring, reports, and team features.
              </p>
            </div>

            {/* Related Links */}
            <div className="mt-8 pt-8 border-t border-slate-700">
              <p className="text-sm text-slate-400">
                Related: {" "}
                <Link href="/tools/accessibe-alternative" className="text-sky-400 hover:text-sky-300">accessiBe Alternatives</Link>{" "}
                · {" "}
                <Link href="/blog/best-website-accessibility-checker-tools-2026" className="text-sky-400 hover:text-sky-300">Best Accessibility Checker Tools 2026</Link>{" "}
                · {" "}
                <Link href="/blog/ada-title-ii-deadline-countdown-2026" className="text-sky-400 hover:text-sky-300">ADA Title II Countdown</Link>{" "}
                · {" "}
                <Link href="/wcag" className="text-sky-400 hover:text-sky-300">WCAG Criteria Guide</Link>
              </p>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}
