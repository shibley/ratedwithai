/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "ADA Title II Deadline Countdown: 61 Days Until April 24, 2026 | RatedWithAI",
  description:
    "The April 24, 2026 ADA Title II deadline is 61 days away. State and local government websites must meet WCAG 2.1 AA compliance or face lawsuits. Check your website now with our free scanner.",
  openGraph: {
    title: "ADA Title II Deadline: 61 Days and Counting",
    description:
      "April 24, 2026 is the hard DOJ deadline for government website WCAG 2.1 AA compliance. Here's what happens if you miss it — and how to check your status today.",
    type: "article",
    publishedTime: "2026-02-22T00:00:00.000Z",
    authors: ["RatedWithAI Team"],
  },
  keywords: [
    "ada title ii deadline 2026",
    "ada compliance deadline",
    "april 2026 accessibility deadline",
    "government website ada compliance",
    "wcag 2.1 aa deadline",
    "ada title ii countdown",
    "ada web accessibility deadline",
    "government accessibility audit",
    "ada compliance audit",
    "website accessibility services",
  ],
};

export default function AdaDeadlineCountdownPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "ADA Title II Deadline Countdown: 61 Days Until April 24, 2026",
    description:
      "The April 24, 2026 ADA Title II deadline requires government websites to meet WCAG 2.1 AA. Here's what you need to know with the clock ticking.",
    datePublished: "2026-02-22T00:00:00.000Z",
    dateModified: "2026-02-22T00:00:00.000Z",
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
          <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-red-500/30 via-orange-500/20 to-yellow-500/30 blur-3xl" />
          <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-gradient-to-tr from-red-500/20 via-orange-500/10 to-amber-500/20 blur-3xl" />

          <Header />

          <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-14 pt-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-sm text-red-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              DEADLINE APPROACHING
            </div>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              61 Days Until the ADA Title II Deadline
            </h1>
            <p className="mt-2 text-lg text-red-400 font-semibold">
              April 24, 2026 — The clock is ticking.
            </p>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              On April 24, 2026, the Department of Justice's new ADA Title II web accessibility rule takes effect.
              State and local government websites serving populations of 50,000 or more must meet WCAG 2.1 Level AA
              standards — or face federal enforcement, lawsuits, and loss of funding. Smaller governments have until
              April 26, 2027, but the smart ones are starting now.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
              <time dateTime="2026-02-22">February 22, 2026</time>
              <span>·</span>
              <span>12 min read</span>
            </div>

            {/* Countdown urgency box */}
            <div className="mt-10 rounded-xl border border-red-500/30 bg-red-500/5 p-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-red-400">61</div>
                  <div className="text-sm text-slate-400 mt-1">Days Left</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-orange-400">94.8%</div>
                  <div className="text-sm text-slate-400 mt-1">Sites Still Failing</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-yellow-400">5,000+</div>
                  <div className="text-sm text-slate-400 mt-1">ADA Lawsuits in 2025</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-amber-400">$75K+</div>
                  <div className="text-sm text-slate-400 mt-1">Avg Settlement Cost</div>
                </div>
              </div>
            </div>

            <div className="mt-10 prose prose-lg prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white">What Happens on April 24, 2026?</h2>
              <p className="text-slate-300">
                The DOJ's final rule — published April 24, 2024, under 28 CFR Part 35 — gives state and local
                government entities two years to make their websites and mobile apps accessible to people with
                disabilities. For entities serving 50,000+ people, that deadline is <strong className="text-red-400">April 24, 2026</strong>.
              </p>
              <p className="text-slate-300">
                This isn't a suggestion. It's federal law. The rule applies to every digital touchpoint: websites,
                web applications, mobile apps, and digital documents. Government entities that fail to comply face:
              </p>
              <ul className="text-slate-300 space-y-2">
                <li><strong className="text-white">DOJ enforcement actions</strong> — The Department of Justice can investigate and sue non-compliant entities</li>
                <li><strong className="text-white">Private lawsuits</strong> — Citizens can file ADA complaints, and law firms are already preparing cases</li>
                <li><strong className="text-white">Loss of federal funding</strong> — Non-compliance can trigger reviews under Section 504 of the Rehabilitation Act</li>
                <li><strong className="text-white">Consent decrees</strong> — Court-ordered remediation plans with ongoing monitoring and penalties</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-12">Who Must Comply by April 24?</h2>
              <p className="text-slate-300">
                The first wave covers state and local government entities with populations of <strong className="text-white">50,000 or more</strong>. This includes:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose mt-4 mb-8">
                {[
                  { title: "State Agencies", desc: "DMVs, health departments, courts, tax agencies, licensing boards" },
                  { title: "City & County Governments", desc: "Municipal websites, utility portals, permit systems, parks & rec" },
                  { title: "Public Universities", desc: "Course registration, LMS platforms, financial aid portals" },
                  { title: "School Districts", desc: "Parent portals, enrollment systems, meal programs, transportation" },
                  { title: "Public Transit", desc: "Trip planners, real-time tracking, fare payment, rider alerts" },
                  { title: "Public Libraries", desc: "Catalog systems, digital lending, event registration, card management" },
                  { title: "Emergency Services", desc: "911 portals, emergency alerts, disaster response resources" },
                  { title: "Election Systems", desc: "Voter registration, polling information, ballot tracking, results" },
                ].map((item) => (
                  <div key={item.title} className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-slate-400 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-white mt-12">The WCAG 2.1 AA Standard: What It Requires</h2>
              <p className="text-slate-300">
                WCAG 2.1 Level AA includes 50 success criteria across four principles: Perceivable, Operable,
                Understandable, and Robust. The most commonly violated criteria — and the ones most likely to trigger
                lawsuits — include:
              </p>

              <div className="not-prose space-y-3 mt-4 mb-8">
                {[
                  { code: "1.1.1", name: "Non-text Content", fail: "Missing alt text on images — affects 58.4% of home pages (WebAIM 2026)", severity: "Critical" },
                  { code: "1.4.3", name: "Contrast (Minimum)", fail: "Low color contrast text — affects 81% of home pages", severity: "Critical" },
                  { code: "2.4.4", name: "Link Purpose", fail: "Vague 'click here' or 'read more' links — affects 45.6% of home pages", severity: "High" },
                  { code: "4.1.2", name: "Name, Role, Value", fail: "Form inputs without labels — affects 46% of home pages", severity: "Critical" },
                  { code: "1.3.1", name: "Info and Relationships", fail: "Missing heading structure, table headers — affects 25% of home pages", severity: "High" },
                  { code: "2.1.1", name: "Keyboard", fail: "Interactive elements can't be reached via keyboard — affects 20% of home pages", severity: "Critical" },
                  { code: "3.1.1", name: "Language of Page", fail: "Missing lang attribute — affects 17.1% of home pages", severity: "Medium" },
                  { code: "2.4.2", name: "Page Titled", fail: "Missing or generic page titles — affects 12% of home pages", severity: "Medium" },
                ].map((item) => (
                  <div key={item.code} className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-mono text-sky-400">{item.code}</span>
                        <span className="font-semibold text-white">{item.name}</span>
                      </div>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        item.severity === 'Critical' ? 'bg-red-500/20 text-red-400' :
                        item.severity === 'High' ? 'bg-orange-500/20 text-orange-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>{item.severity}</span>
                    </div>
                    <p className="text-sm text-slate-400 mt-2">{item.fail}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-white mt-12">The Lawsuit Landscape: 2025-2026</h2>
              <p className="text-slate-300">
                Web accessibility lawsuits have been accelerating for years. In 2025, over <strong className="text-white">5,000 ADA digital
                accessibility lawsuits</strong> were filed in the United States. As the April 24 deadline approaches,
                legal experts expect a significant spike in government-targeted litigation.
              </p>

              <div className="not-prose rounded-xl border border-slate-700 bg-slate-800/50 p-6 mt-4 mb-8">
                <h3 className="font-bold text-white text-lg mb-4">Key Lawsuit Statistics</h3>
                <div className="space-y-3">
                  {[
                    { stat: "5,000+", desc: "ADA web accessibility lawsuits filed in 2025" },
                    { stat: "30%", desc: "of lawsuits involved sites using accessibility overlay widgets" },
                    { stat: "$75,000+", desc: "average settlement cost for ADA web accessibility cases" },
                    { stat: "400%", desc: "increase in digital accessibility lawsuits since 2018" },
                    { stat: "67%", desc: "of lawsuits target sites with no accessibility effort at all" },
                    { stat: "98%", desc: "of plaintiff wins in serial ADA lawsuits (Minh Ngo v. cases)" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="text-2xl font-bold text-sky-400 min-w-[80px]">{item.stat}</span>
                      <span className="text-slate-300">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="not-prose rounded-xl border border-amber-500/30 bg-amber-500/5 p-6 mt-4 mb-8">
                <h3 className="font-bold text-amber-400 text-lg mb-2">⚠️ Warning: Accessibility Overlays Won't Protect You</h3>
                <p className="text-slate-300 text-sm">
                  In 2025, an accessibility overlay provider was fined <strong className="text-white">$1 million</strong> for
                  deceptive compliance claims. 30% of ADA lawsuits now involve websites that use overlay widgets.
                  Courts have consistently ruled that overlays do not constitute compliance with WCAG standards.
                  The DOJ's rule specifically requires conformance with WCAG 2.1 AA — not the use of any particular tool or widget.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12">The Cost of Waiting</h2>
              <p className="text-slate-300">
                Every day you wait, the risk compounds. Here's what non-compliance costs:
              </p>

              <div className="not-prose mt-4 mb-8">
                <div className="rounded-xl border border-slate-700 overflow-hidden">
                  <div className="grid grid-cols-3 bg-slate-800 p-4 font-semibold text-sm text-slate-300">
                    <div>Scenario</div>
                    <div>Cost Range</div>
                    <div>Timeline</div>
                  </div>
                  {[
                    { scenario: "Proactive audit + remediation", cost: "$5,000–$25,000", time: "2–8 weeks", highlight: false },
                    { scenario: "DOJ investigation + consent decree", cost: "$50,000–$200,000", time: "6–24 months", highlight: false },
                    { scenario: "Private lawsuit + settlement", cost: "$75,000–$300,000", time: "3–12 months", highlight: true },
                    { scenario: "Class action lawsuit", cost: "$500,000+", time: "1–3 years", highlight: true },
                    { scenario: "Loss of federal funding", cost: "Varies (can be millions)", time: "Ongoing", highlight: true },
                  ].map((row, i) => (
                    <div key={i} className={`grid grid-cols-3 p-4 text-sm border-t border-slate-700 ${
                      row.highlight ? 'bg-red-500/5' : 'bg-slate-800/50'
                    }`}>
                      <div className="text-slate-300">{row.scenario}</div>
                      <div className={row.highlight ? 'text-red-400 font-semibold' : 'text-green-400 font-semibold'}>{row.cost}</div>
                      <div className="text-slate-400">{row.time}</div>
                    </div>
                  ))}
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12">Your 60-Day Compliance Playbook</h2>
              <p className="text-slate-300">
                With 61 days remaining, there's still time to achieve compliance — but you need to start now.
                Here's a week-by-week action plan:
              </p>

              <div className="not-prose space-y-4 mt-4 mb-8">
                {[
                  {
                    week: "Week 1-2",
                    title: "Audit & Assess",
                    tasks: [
                      "Run an automated accessibility scan of your entire website",
                      "Identify your top 10 most-visited pages and prioritize those",
                      "Catalog all PDF documents and digital forms",
                      "Review mobile app accessibility (if applicable)",
                      "Assign an internal accessibility coordinator",
                    ],
                  },
                  {
                    week: "Week 3-4",
                    title: "Fix Critical Issues",
                    tasks: [
                      "Add alt text to all meaningful images",
                      "Fix color contrast ratios to meet 4.5:1 minimum",
                      "Add proper labels to all form inputs",
                      "Ensure all interactive elements are keyboard accessible",
                      "Add ARIA landmarks and proper heading hierarchy",
                    ],
                  },
                  {
                    week: "Week 5-6",
                    title: "Address Remaining Issues",
                    tasks: [
                      "Remediate all PDF documents (or convert to HTML)",
                      "Add captions and transcripts to video content",
                      "Test with screen readers (NVDA, JAWS, VoiceOver)",
                      "Fix link text ('click here' → descriptive labels)",
                      "Validate all forms for error handling and clear instructions",
                    ],
                  },
                  {
                    week: "Week 7-8",
                    title: "Verify & Document",
                    tasks: [
                      "Run a final automated scan to verify fixes",
                      "Conduct manual testing with real assistive technologies",
                      "Publish an accessibility statement on your website",
                      "Create a VPAT (Voluntary Product Accessibility Template)",
                      "Establish an ongoing monitoring process",
                    ],
                  },
                ].map((phase) => (
                  <div key={phase.week} className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-medium px-3 py-1 rounded-full bg-sky-500/20 text-sky-400">{phase.week}</span>
                      <h3 className="font-bold text-white">{phase.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {phase.tasks.map((task, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                          <span className="text-sky-400 mt-0.5">→</span>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-white mt-12">The Tax Credit Most People Don't Know About</h2>
              <p className="text-slate-300">
                Small businesses and government contractors can claim the <strong className="text-white">Disabled Access Credit</strong> (IRS
                Form 8826) — up to <strong className="text-white">$5,000 per year</strong> to offset the cost of accessibility improvements.
                This can make a tool like RatedWithAI (starting at $29/month) effectively free after the tax benefit.
              </p>
              <p className="text-slate-300">
                Eligible expenses include website accessibility audits, remediation work, assistive technology purchases,
                and accessibility consulting. The credit covers 50% of eligible expenditures between $250 and $10,250.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12">How RatedWithAI Helps You Meet the Deadline</h2>
              <p className="text-slate-300">
                RatedWithAI provides AI-powered accessibility scanning that goes beyond simple automated checks.
                Our scanner identifies WCAG 2.1 AA violations with plain-language explanations and prioritized
                fix recommendations — so you know exactly what to fix first.
              </p>

              <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 mb-8">
                {[
                  { title: "Instant WCAG 2.1 AA Audit", desc: "Scan any page in seconds. Get violation counts, severity ratings, and a compliance score." },
                  { title: "Plain-Language Fix Guides", desc: "Every violation includes step-by-step instructions that non-technical staff can follow." },
                  { title: "Ongoing Monitoring", desc: "Weekly or daily scans detect regressions before they become lawsuit triggers." },
                  { title: "Compliance Documentation", desc: "Generate reports for stakeholders, auditors, and legal teams to demonstrate progress." },
                ].map((feature) => (
                  <div key={feature.title} className="rounded-lg border border-sky-500/20 bg-sky-500/5 p-5">
                    <h3 className="font-semibold text-white">{feature.title}</h3>
                    <p className="text-sm text-slate-400 mt-2">{feature.desc}</p>
                  </div>
                ))}
              </div>

              <div className="not-prose rounded-xl border border-sky-500/30 bg-sky-500/5 p-8 text-center mt-8 mb-8">
                <h3 className="text-2xl font-bold text-white">Don't Wait Until It's Too Late</h3>
                <p className="text-slate-300 mt-3 max-w-2xl mx-auto">
                  With 61 days until the deadline, every day counts. Start with a free scan to see where your website
                  stands — it takes less than 60 seconds.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/#scanner"
                    className="rounded-lg bg-sky-500 px-8 py-3 font-semibold text-white hover:bg-sky-400 transition-colors"
                  >
                    Free Accessibility Scan →
                  </Link>
                  <Link
                    href="/tools/free-accessibility-checker"
                    className="rounded-lg border border-slate-600 px-8 py-3 font-semibold text-slate-300 hover:border-slate-400 transition-colors"
                  >
                    Learn About Our Scanner
                  </Link>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12">Key Resources</h2>
              <div className="not-prose space-y-2 mt-4 mb-8">
                {[
                  { label: "DOJ Final Rule (28 CFR Part 35)", url: "https://www.ada.gov/law-and-regs/regulations/title-ii-web-app-rule/" },
                  { label: "WCAG 2.1 Quick Reference", url: "https://www.w3.org/WAI/WCAG21/quickref/" },
                  { label: "WebAIM 2026 Accessibility Report", url: "https://webaim.org/projects/million/" },
                  { label: "IRS Form 8826 — Disabled Access Credit", url: "https://www.irs.gov/forms-pubs/about-form-8826" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    <span>→</span>
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>

              <div className="not-prose mt-8 pt-8 border-t border-slate-700">
                <p className="text-sm text-slate-400">
                  Related reading: {" "}
                  <Link href="/blog/ada-title-ii-compliance-guide" className="text-sky-400 hover:text-sky-300">
                    ADA Title II Compliance Guide
                  </Link>{" "}
                  · {" "}
                  <Link href="/blog/ada-lawsuit-settlements-2026" className="text-sky-400 hover:text-sky-300">
                    ADA Lawsuit Settlements 2026
                  </Link>{" "}
                  · {" "}
                  <Link href="/blog/ada-compliance-checklist-2026" className="text-sky-400 hover:text-sky-300">
                    ADA Compliance Checklist 2026
                  </Link>{" "}
                  · {" "}
                  <Link href="/wcag" className="text-sky-400 hover:text-sky-300">
                    All WCAG Criteria
                  </Link>
                </p>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}
