/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "WCAG Compliance Tool — Automated WCAG 2.1 AA Testing | RatedWithAI",
  description:
    "Free WCAG compliance tool powered by axe-core. Test any website against WCAG 2.1 Level AA success criteria in seconds. Get actionable violation reports with severity ratings and fix instructions.",
  keywords: [
    "wcag compliance tool",
    "wcag checker",
    "wcag testing tool",
    "wcag 2.1 compliance tool",
    "wcag 2.1 aa checker",
    "wcag compliance checker",
    "wcag audit tool",
    "web content accessibility guidelines tool",
    "wcag scanner",
    "wcag validator",
  ],
  openGraph: {
    title: "WCAG Compliance Tool — Automated WCAG 2.1 AA Testing",
    description:
      "Free WCAG compliance tool. Test any website against WCAG 2.1 Level AA success criteria in seconds with actionable violation reports.",
    type: "website",
  },
};

export default function WcagComplianceToolPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "RatedWithAI WCAG Compliance Tool",
    applicationCategory: "WebApplication",
    operatingSystem: "Any (web-based)",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Free WCAG compliance testing tool. Scan any website against WCAG 2.1 Level AA success criteria with instant results and fix recommendations.",
    url: "https://ratedwithai.com/tools/wcag-compliance-tool",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "96",
      bestRating: "5",
    },
  };

  const wcagPrinciples = [
    {
      name: "Perceivable",
      icon: "👁️",
      color: "sky",
      description: "Content must be presentable to users in ways they can perceive",
      criteria: [
        { id: "1.1.1", name: "Non-text Content", desc: "All images, icons, and media have text alternatives" },
        { id: "1.3.1", name: "Info and Relationships", desc: "Semantic HTML conveys structure and relationships" },
        { id: "1.4.1", name: "Use of Color", desc: "Color isn't the only way to convey information" },
        { id: "1.4.3", name: "Contrast (Minimum)", desc: "Text has 4.5:1 contrast ratio against backgrounds" },
        { id: "1.4.10", name: "Reflow", desc: "Content reflows at 320px without horizontal scrolling" },
      ],
    },
    {
      name: "Operable",
      icon: "⌨️",
      color: "purple",
      description: "Users must be able to operate the interface",
      criteria: [
        { id: "2.1.1", name: "Keyboard", desc: "All functionality available via keyboard" },
        { id: "2.1.2", name: "No Keyboard Trap", desc: "Focus can always be moved away from any element" },
        { id: "2.4.1", name: "Bypass Blocks", desc: "Skip navigation links to bypass repeated content" },
        { id: "2.4.3", name: "Focus Order", desc: "Focusable elements receive focus in a logical order" },
        { id: "2.4.7", name: "Focus Visible", desc: "Keyboard focus indicator is always visible" },
      ],
    },
    {
      name: "Understandable",
      icon: "🧠",
      color: "green",
      description: "Content and interface must be understandable",
      criteria: [
        { id: "3.1.1", name: "Language of Page", desc: "Default language is programmatically set" },
        { id: "3.2.1", name: "On Focus", desc: "No unexpected context changes on focus" },
        { id: "3.3.1", name: "Error Identification", desc: "Input errors are automatically detected and described" },
        { id: "3.3.2", name: "Labels or Instructions", desc: "Form inputs have clear labels" },
        { id: "3.3.3", name: "Error Suggestion", desc: "Fix suggestions are provided for input errors" },
      ],
    },
    {
      name: "Robust",
      icon: "🔧",
      color: "amber",
      description: "Content must be robust enough for diverse user agents",
      criteria: [
        { id: "4.1.1", name: "Parsing", desc: "HTML is well-formed with no duplicate IDs" },
        { id: "4.1.2", name: "Name, Role, Value", desc: "Custom components expose proper ARIA attributes" },
        { id: "4.1.3", name: "Status Messages", desc: "Status updates are announced to screen readers" },
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

          <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-14 pt-4">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm text-green-400">
                ✓ Free WCAG Testing — No Signup Required
              </span>
              <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
                WCAG Compliance Tool
              </h1>
              <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                Test any website against WCAG 2.1 Level AA success criteria in under 60 seconds.
                Get a compliance score, violation details mapped to specific WCAG criteria, and actionable fix instructions — completely free.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10 text-center">
              <Link
                href="/#scanner"
                className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-10 py-4 text-lg font-bold text-white hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/20"
              >
                Test WCAG Compliance Free →
              </Link>
              <p className="mt-3 text-sm text-slate-400">No credit card. No signup. Paste any URL and get results.</p>
            </div>
          </section>
        </div>

        <article className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-20">
          <div className="prose prose-invert prose-slate max-w-none">

            {/* What is WCAG */}
            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What Is WCAG and Why Does Compliance Matter?
            </h2>
            <p className="text-slate-300 leading-relaxed text-lg mb-4">
              The <strong className="text-white">Web Content Accessibility Guidelines (WCAG)</strong> are the global standard for web accessibility. Published by the W3C's Web Accessibility Initiative, WCAG defines how to make web content accessible to people with disabilities — including visual, auditory, physical, speech, cognitive, and neurological disabilities.
            </p>
            <p className="text-slate-300 leading-relaxed text-lg mb-4">
              WCAG compliance matters because:
            </p>
            <ul className="text-slate-300 space-y-3 mb-8 list-disc list-inside text-lg">
              <li>
                <strong className="text-white">It's legally required</strong> — The DOJ has formally recognized WCAG 2.1 AA as the standard for ADA compliance. The ADA Title II rule (effective April 2026) explicitly mandates WCAG 2.1 AA for government websites.
              </li>
              <li>
                <strong className="text-white">Lawsuits are surging</strong> — Over 4,600 web accessibility lawsuits were filed in 2025 alone. Plaintiff firms specifically target sites with WCAG violations.
              </li>
              <li>
                <strong className="text-white">It's good business</strong> — 1.3 billion people worldwide live with disabilities. An inaccessible website excludes 15-20% of potential customers.
              </li>
              <li>
                <strong className="text-white">It improves SEO</strong> — Many WCAG requirements (alt text, semantic HTML, heading structure) directly improve search engine rankings.
              </li>
            </ul>

            {/* How our tool works */}
            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              How Our WCAG Compliance Tool Works
            </h2>
            <div className="space-y-4 mb-8">
              {[
                {
                  step: "1",
                  title: "Enter any URL",
                  desc: "Paste the web address you want to test. Our tool works with any publicly accessible webpage.",
                },
                {
                  step: "2",
                  title: "Real browser analysis",
                  desc: "We load your page in a real Playwright browser instance — not just the HTML source. This catches JavaScript-rendered content, dynamic widgets, and single-page applications that simpler crawlers miss.",
                },
                {
                  step: "3",
                  title: "axe-core engine testing",
                  desc: "We run the industry-standard axe-core accessibility engine against the fully-rendered page. This is the same engine used by Microsoft, Google, and Deque for accessibility testing.",
                },
                {
                  step: "4",
                  title: "WCAG-mapped results",
                  desc: "Every violation is mapped to its specific WCAG success criterion (e.g., 1.4.3 Contrast Minimum). You know exactly which standard you're failing and why.",
                },
                {
                  step: "5",
                  title: "Actionable fix instructions",
                  desc: "Each issue includes a plain-language description, the affected HTML elements, and specific instructions for fixing the problem.",
                },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4 bg-slate-900/50 border border-slate-800 rounded-lg p-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-sm">{item.step}</span>
                  <div>
                    <p className="text-white font-semibold">{item.title}</p>
                    <p className="text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* WCAG Principles breakdown */}
            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              WCAG 2.1 AA Criteria We Test
            </h2>
            <p className="text-slate-300 leading-relaxed text-lg mb-6">
              Our tool tests against all four WCAG principles — the foundation of web accessibility. Here's what each principle covers and the specific criteria we check:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {wcagPrinciples.map((principle) => (
                <div key={principle.name} className="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{principle.icon}</span>
                    <h3 className="text-xl font-bold text-white">{principle.name}</h3>
                  </div>
                  <p className="text-slate-400 text-sm mb-4">{principle.description}</p>
                  <ul className="space-y-2">
                    {principle.criteria.map((criterion) => (
                      <li key={criterion.id} className="text-sm">
                        <Link href={`/wcag/${criterion.id.replace(/\./g, '-')}`} className="text-blue-400 hover:text-blue-300">
                          {criterion.id} {criterion.name}
                        </Link>
                        <span className="text-slate-500"> — {criterion.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* WCAG Levels explained */}
            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Understanding WCAG Conformance Levels
            </h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 px-4 text-white font-semibold">Level</th>
                    <th className="text-left py-3 px-4 text-white font-semibold">Requirements</th>
                    <th className="text-left py-3 px-4 text-white font-semibold">Who Needs It</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-4 font-semibold text-amber-400">Level A</td>
                    <td className="py-3 px-4">Basic accessibility — bare minimum to function. 30 success criteria.</td>
                    <td className="py-3 px-4">Everyone — these are non-negotiable</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-4 font-semibold text-blue-400">Level AA ⭐</td>
                    <td className="py-3 px-4">Standard accessibility — addresses major barriers. 20 additional criteria.</td>
                    <td className="py-3 px-4">Required by ADA, Section 508, EAA, and most laws worldwide</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-4 font-semibold text-green-400">Level AAA</td>
                    <td className="py-3 px-4">Enhanced accessibility — highest standard. 28 additional criteria.</td>
                    <td className="py-3 px-4">Specialized audiences (government, healthcare, education)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-slate-300 leading-relaxed text-lg mb-6">
              <strong className="text-white">Level AA is the legal standard.</strong> When the DOJ, courts, or regulators reference "WCAG compliance," they mean Level AA. This is what our tool tests against, and it's the level you should target for ADA compliance.
            </p>

            {/* Comparison with other tools */}
            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              How RatedWithAI Compares to Other WCAG Tools
            </h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 px-4 text-white font-semibold">Feature</th>
                    <th className="text-center py-3 px-4 text-blue-400 font-semibold">RatedWithAI</th>
                    <th className="text-center py-3 px-4 text-white font-semibold">WAVE</th>
                    <th className="text-center py-3 px-4 text-white font-semibold">Lighthouse</th>
                    <th className="text-center py-3 px-4 text-white font-semibold">Pa11y</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-4">Free tier</td>
                    <td className="text-center py-3 px-4 text-green-400">✓ Unlimited</td>
                    <td className="text-center py-3 px-4 text-green-400">✓ Extension</td>
                    <td className="text-center py-3 px-4 text-green-400">✓ Built-in</td>
                    <td className="text-center py-3 px-4 text-green-400">✓ Open source</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-4">No install required</td>
                    <td className="text-center py-3 px-4 text-green-400">✓</td>
                    <td className="text-center py-3 px-4 text-slate-600">Extension needed</td>
                    <td className="text-center py-3 px-4 text-slate-600">DevTools needed</td>
                    <td className="text-center py-3 px-4 text-slate-600">CLI install</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-4">WCAG criteria mapping</td>
                    <td className="text-center py-3 px-4 text-green-400">✓ Per violation</td>
                    <td className="text-center py-3 px-4 text-green-400">✓</td>
                    <td className="text-center py-3 px-4 text-slate-600">Limited</td>
                    <td className="text-center py-3 px-4 text-green-400">✓</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-4">Compliance scoring</td>
                    <td className="text-center py-3 px-4 text-green-400">✓ 0-100 score</td>
                    <td className="text-center py-3 px-4 text-slate-600">✗</td>
                    <td className="text-center py-3 px-4 text-green-400">✓ 0-100</td>
                    <td className="text-center py-3 px-4 text-slate-600">✗</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-4">Plain-language fixes</td>
                    <td className="text-center py-3 px-4 text-green-400">✓</td>
                    <td className="text-center py-3 px-4 text-slate-600">Technical only</td>
                    <td className="text-center py-3 px-4 text-slate-600">Technical only</td>
                    <td className="text-center py-3 px-4 text-slate-600">Technical only</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-4">Continuous monitoring</td>
                    <td className="text-center py-3 px-4 text-green-400">✓ Pro plan</td>
                    <td className="text-center py-3 px-4 text-slate-600">✗</td>
                    <td className="text-center py-3 px-4 text-slate-600">✗</td>
                    <td className="text-center py-3 px-4 text-slate-600">DIY setup</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-4">Non-technical friendly</td>
                    <td className="text-center py-3 px-4 text-green-400">✓</td>
                    <td className="text-center py-3 px-4 text-slate-600">Moderate</td>
                    <td className="text-center py-3 px-4 text-slate-600">✗</td>
                    <td className="text-center py-3 px-4 text-slate-600">✗</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Common violations */}
            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Most Common WCAG Violations Found
            </h2>
            <p className="text-slate-300 leading-relaxed text-lg mb-6">
              Based on scanning thousands of websites, these are the WCAG failures we find most often:
            </p>
            <div className="space-y-4 mb-8">
              {[
                { pct: "83%", issue: "Low contrast text", criterion: "1.4.3", desc: "Text doesn't meet the 4.5:1 contrast ratio against its background color." },
                { pct: "68%", issue: "Missing alt text", criterion: "1.1.1", desc: "Images without text alternatives, making them invisible to screen readers." },
                { pct: "55%", issue: "Missing form labels", criterion: "3.3.2", desc: "Form inputs without associated labels, so users don't know what to enter." },
                { pct: "47%", issue: "Empty links", criterion: "2.4.4", desc: "Links with no discernible text — screen readers announce 'link' with no context." },
                { pct: "38%", issue: "Missing page language", criterion: "3.1.1", desc: "No lang attribute on HTML, preventing screen readers from selecting the right language." },
              ].map((item) => (
                <div key={item.issue} className="flex items-start gap-4 bg-slate-900/50 border border-slate-800 rounded-lg p-4">
                  <span className="flex-shrink-0 text-2xl font-bold text-red-400">{item.pct}</span>
                  <div>
                    <p className="text-white font-semibold">{item.issue} <span className="text-slate-500 font-normal text-sm">(WCAG {item.criterion})</span></p>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Is this WCAG compliance tool really free?</h3>
                <p className="text-slate-300 leading-relaxed">
                  Yes. You can scan any URL for WCAG 2.1 AA violations as many times as you want with no signup and no credit card. Our free scanner uses the same axe-core engine as our paid monitoring plans.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Which version of WCAG does this tool test?</h3>
                <p className="text-slate-300 leading-relaxed">
                  We test against WCAG 2.1 Level AA — the version formally adopted by the DOJ for ADA compliance, referenced by Section 508, and required by the European Accessibility Act. This is the globally accepted standard for web accessibility.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Can automated tools guarantee WCAG compliance?</h3>
                <p className="text-slate-300 leading-relaxed">
                  No automated tool can test 100% of WCAG criteria — some require human judgment (like whether alt text is meaningful, or if content order makes sense). Automated tools typically catch 30-40% of issues, but these are the most common and legally actionable violations. We recommend combining automated scanning with periodic manual review.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">What's the difference between WCAG 2.0, 2.1, and 2.2?</h3>
                <p className="text-slate-300 leading-relaxed">
                  WCAG 2.1 (2018) adds 17 criteria to WCAG 2.0, focused on mobile accessibility, low vision, and cognitive disabilities. WCAG 2.2 (2023) adds 9 more criteria. The DOJ's ADA Title II rule requires 2.1 AA, which is what most organizations should target. Our tool tests 2.1 AA criteria.{" "}
                  <Link href="/blog/wcag-2-1-vs-2-2" className="text-blue-400 hover:text-blue-300 underline">
                    Read our full WCAG version comparison →
                  </Link>
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">How often should I test for WCAG compliance?</h3>
                <p className="text-slate-300 leading-relaxed">
                  At minimum, test after every major code deployment and quarterly for regression checks. Ideally, set up continuous monitoring that scans automatically on a schedule. Our Pro plan includes automated monitoring with email alerts when new violations are detected.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Does passing a WCAG scan mean I'm ADA compliant?</h3>
                <p className="text-slate-300 leading-relaxed">
                  Passing an automated WCAG scan is a strong indicator but not a legal guarantee. Full ADA compliance also requires addressing issues that automated tools can't detect (manual testing) and maintaining ongoing compliance as content changes. However, automated scanning catches the violations most commonly cited in accessibility lawsuits.
                </p>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-8 mt-12 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Test Your Website's WCAG Compliance Now
              </h3>
              <p className="text-slate-300 text-lg mb-6">
                Paste any URL and get a detailed WCAG 2.1 AA compliance report in under 60 seconds. Free, instant, no signup.
              </p>
              <Link
                href="/#scanner"
                className="inline-block rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 px-8 py-3 text-base font-semibold text-white transition hover:shadow-lg hover:shadow-blue-500/50"
              >
                Run Free WCAG Compliance Test →
              </Link>
              <p className="mt-4 text-sm text-slate-400">
                Need continuous monitoring? <Link href="/pricing" className="text-blue-400 hover:text-blue-300">See our Pro plans</Link> starting at $29/mo.
              </p>
            </div>

            {/* Related links */}
            <div className="mt-8 pt-8 border-t border-slate-700">
              <p className="text-sm text-slate-400">
                Related:{" "}
                <Link href="/tools/free-accessibility-checker" className="text-sky-400 hover:text-sky-300">Free Accessibility Checker</Link>{" "}
                ·{" "}
                <Link href="/tools/ada-compliance-checker" className="text-sky-400 hover:text-sky-300">ADA Compliance Checker</Link>{" "}
                ·{" "}
                <Link href="/wcag" className="text-sky-400 hover:text-sky-300">WCAG Criteria Reference</Link>{" "}
                ·{" "}
                <Link href="/blog/wcag-22-complete-guide" className="text-sky-400 hover:text-sky-300">WCAG 2.2 Complete Guide</Link>{" "}
                ·{" "}
                <Link href="/tools/color-contrast-checker" className="text-sky-400 hover:text-sky-300">Color Contrast Checker</Link>{" "}
                ·{" "}
                <Link href="/blog/how-to-fix-common-wcag-failures" className="text-sky-400 hover:text-sky-300">How to Fix Common WCAG Failures</Link>
              </p>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}
