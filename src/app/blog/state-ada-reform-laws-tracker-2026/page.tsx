/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title:
    "State ADA Website Lawsuit Reform Tracker 2026: Every Bill, Every State | RatedWithAI",
  description:
    "Live tracker of state-level ADA website lawsuit reform bills in 2026. California SB 84 (120-day cure), Missouri HB 1694 (90-day cure), Utah SB 68 (counter-sue), Kansas model, and federal ADA 30 Days Act. Updated as new bills are introduced.",
  openGraph: {
    title:
      "State ADA Website Lawsuit Reform Tracker 2026",
    description:
      "Track every state ADA web accessibility reform bill in one place. Cure periods, counter-sue rights, and serial plaintiff limits across California, Missouri, Utah, and more.",
    type: "article",
    publishedTime: "2026-03-01T00:00:00.000Z",
    authors: ["RatedWithAI Team"],
  },
  keywords: [
    "ada reform laws by state",
    "state ada website lawsuit reform",
    "ada cure period law",
    "ada lawsuit reform 2026",
    "california sb 84",
    "missouri hb 1694",
    "utah sb 68",
    "ada 30 days act",
    "ada right to cure",
    "ada website lawsuit reform tracker",
    "ada serial litigation reform",
    "state accessibility laws 2026",
    "ada lawsuit protection by state",
    "ada web accessibility legislation",
    "ada reform bill tracker",
  ],
  alternates: {
    canonical:
      "https://ratedwithai.com/blog/state-ada-reform-laws-tracker-2026",
  },
};

export default function StateAdaReformTrackerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline:
      "State ADA Website Lawsuit Reform Tracker 2026: Every Bill, Every State",
    description:
      "Comprehensive tracker of state-level ADA website lawsuit reform legislation in 2026, including cure period laws, counter-sue provisions, and serial plaintiff limits.",
    datePublished: "2026-03-01T00:00:00.000Z",
    dateModified: "2026-03-01T00:00:00.000Z",
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

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which states have ADA website lawsuit reform bills in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "As of March 2026, three states have active ADA website lawsuit reform bills: California (SB 84, 120-day cure period), Missouri (HB 1694, 90-day cure period), and Utah (SB 68, 30-day cure period with counter-sue rights). Kansas has a model framework under consideration, and a federal bill (ADA 30 Days Act) has been reintroduced in Congress.",
        },
      },
      {
        "@type": "Question",
        name: "What is an ADA cure period?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An ADA cure period is a legally mandated window of time during which a business can fix web accessibility violations before a plaintiff can file a lawsuit. Cure periods range from 30 days (Utah) to 120 days (California), and require the plaintiff to provide specific written notice of the accessibility barrier before proceeding with litigation.",
        },
      },
      {
        "@type": "Question",
        name: "Does an ADA cure period law mean my website doesn't need to be accessible?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Cure period laws change the enforcement pathway but do not eliminate the obligation to make websites accessible under the ADA and WCAG guidelines. Businesses are still required to maintain accessible websites. Cure periods simply give businesses an opportunity to fix issues before facing litigation costs.",
        },
      },
      {
        "@type": "Question",
        name: "What is the federal ADA 30 Days Act?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The ADA 30 Days Act is a federal bill that would require plaintiffs to give businesses 30 days written notice before filing an ADA Title III lawsuit. It has been introduced multiple times in Congress but has not yet passed. If enacted, it would create a national cure period that supersedes state laws.",
        },
      },
      {
        "@type": "Question",
        name: "Can I counter-sue someone who files an ADA lawsuit against my business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Currently, only Utah's SB 68 (if passed) explicitly grants counter-sue rights for 'abusive' ADA litigation — defined as filing 10+ substantially similar claims in 12 months. In most other jurisdictions, ADA defendants who win cannot easily recover their legal costs. This is one of the most controversial provisions in the reform movement.",
        },
      },
      {
        "@type": "Question",
        name: "How do overlay widgets factor into ADA reform?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Approximately 30% of ADA web accessibility lawsuits in 2025 were filed against websites using overlay widgets. Reform bills generally don't address overlays specifically, but the cure period creates time for businesses to implement real WCAG fixes rather than relying on widgets that courts have repeatedly rejected as compliance solutions.",
        },
      },
      {
        "@type": "Question",
        name: "Will more states introduce ADA reform bills in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, accessibility policy experts expect 5-10 additional states to introduce ADA web accessibility reform bills during 2026 legislative sessions. States with high lawsuit volumes (Florida, Texas, Pennsylvania) and states with active small business advocacy groups are most likely to follow California, Missouri, and Utah.",
        },
      },
      {
        "@type": "Question",
        name: "What should businesses do while waiting for reform?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Don't wait for legislation. Proactive compliance is always cheaper than litigation. Run regular automated accessibility scans ($29-99/month), fix critical violations (alt text, color contrast, keyboard navigation, form labels), remove overlay widgets, and document your compliance efforts. This approach works whether or not reform bills pass in your state.",
        },
      },
    ],
  };

  const bills = [
    {
      state: "California",
      bill: "SB 84",
      name: "Right to Cure for ADA Web Accessibility Violations",
      cureperiod: "120 days",
      countersue: false,
      serialLimits: "Implicit (notice specificity deters drive-by suits)",
      status: "Committee Review",
      statusColor: "text-yellow-400",
      introduced: "February 2026",
      lawsuits2025: "3,252",
      pctNational: "37.5%",
      keyProvisions: [
        "120-day cure period — longest of any state",
        "Specific notice requirements (URL + barrier identification)",
        "Good faith remediation standard with independent verification",
        "Ongoing monitoring expectation post-remediation",
      ],
      borderColor: "border-red-500/30",
      bgColor: "bg-red-500/5",
      textColor: "text-red-400",
      emoji: "🐻",
      deepDive: "/blog/california-sb-84-ada-right-to-cure-2026",
    },
    {
      state: "Missouri",
      bill: "HB 1694",
      name: "Accessible Business Protection Act",
      cureperiod: "90 days",
      countersue: false,
      serialLimits: "Indirect (cure period slows high-volume filing)",
      status: "Committee Hearing Scheduled",
      statusColor: "text-yellow-400",
      introduced: "February 2026",
      lawsuits2025: "~150",
      pctNational: "1.7%",
      keyProvisions: [
        "90-day cure period with written notice requirement",
        "Good faith remediation effort standard",
        "Backed by NFIB after 100+ demand letters from single firm",
        "Doesn't eliminate ADA obligation — only changes enforcement path",
      ],
      borderColor: "border-orange-500/30",
      bgColor: "bg-orange-500/5",
      textColor: "text-orange-400",
      emoji: "🏛️",
      deepDive: "/blog/ada-lawsuit-reform-2026",
    },
    {
      state: "Utah",
      bill: "SB 68",
      name: "ADA Accountability & Fairness Act",
      cureperiod: "30 days",
      countersue: true,
      serialLimits: "Explicit (10+ similar claims in 12 months = abusive)",
      status: "Passed Committee — Floor Vote Expected",
      statusColor: "text-green-400",
      introduced: "January 2026",
      lawsuits2025: "~80",
      pctNational: "0.9%",
      keyProvisions: [
        "30-day remediation presumption (fix it → case dismissed)",
        "Counter-sue right for attorney's fees if claim is 'abusive'",
        "Explicit 'abusive litigation' definition (10+ claims/year)",
        "Targets plaintiffs who never intended to use business services",
      ],
      borderColor: "border-blue-500/30",
      bgColor: "bg-blue-500/5",
      textColor: "text-blue-400",
      emoji: "⚖️",
      deepDive: "/blog/ada-lawsuit-reform-2026",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <div className="relative overflow-hidden">
          <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-green-500/30 via-emerald-500/20 to-teal-500/30 blur-3xl" />
          <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-gradient-to-tr from-green-500/20 via-emerald-500/10 to-teal-500/20 blur-3xl" />

          <Header />

          <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-14 pt-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm text-green-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              LIVING RESOURCE — UPDATED REGULARLY
            </div>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              State ADA Website Lawsuit Reform Tracker 2026
            </h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              A growing number of states are introducing legislation to reform how ADA web accessibility lawsuits are filed
              and prosecuted. This page tracks <strong className="text-white">every active reform bill</strong> — cure periods,
              counter-sue provisions, serial plaintiff limits, and federal proposals. Bookmark this page — we update it as
              new bills are introduced.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
              <time dateTime="2026-03-01">March 1, 2026</time>
              <span>·</span>
              <span>12 min read</span>
              <span>·</span>
              <span className="text-green-400">Living Resource</span>
            </div>

            {/* Summary stats */}
            <div className="mt-10 rounded-xl border border-green-500/30 bg-green-500/5 p-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-green-400">3</div>
                  <div className="text-sm text-slate-400 mt-1">Active State Bills</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-400">1</div>
                  <div className="text-sm text-slate-400 mt-1">Federal Bill</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-orange-400">30-120</div>
                  <div className="text-sm text-slate-400 mt-1">Day Cure Periods</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-red-400">8,667</div>
                  <div className="text-sm text-slate-400 mt-1">Lawsuits in 2025</div>
                </div>
              </div>
            </div>

            <div className="mt-10 prose prose-lg prose-invert max-w-none">

              {/* Table of Contents */}
              <div className="not-prose rounded-xl border border-slate-700 bg-slate-800/50 p-6 mb-10">
                <h2 className="text-lg font-bold text-white mb-3">📋 Table of Contents</h2>
                <nav className="space-y-1.5 text-sm">
                  <div><a href="#overview" className="text-sky-400 hover:text-sky-300">Why States Are Reforming ADA Lawsuit Laws</a></div>
                  <div><a href="#state-bills" className="text-sky-400 hover:text-sky-300">Active State Bills</a></div>
                  <div className="pl-4"><a href="#california" className="text-slate-400 hover:text-sky-300">→ California SB 84 (120-day cure)</a></div>
                  <div className="pl-4"><a href="#missouri" className="text-slate-400 hover:text-sky-300">→ Missouri HB 1694 (90-day cure)</a></div>
                  <div className="pl-4"><a href="#utah" className="text-slate-400 hover:text-sky-300">→ Utah SB 68 (30-day cure + counter-sue)</a></div>
                  <div><a href="#comparison" className="text-sky-400 hover:text-sky-300">Side-by-Side Comparison</a></div>
                  <div><a href="#federal" className="text-sky-400 hover:text-sky-300">Federal Proposals</a></div>
                  <div><a href="#pipeline" className="text-sky-400 hover:text-sky-300">States to Watch</a></div>
                  <div><a href="#court-rulings" className="text-sky-400 hover:text-sky-300">Court Rulings Shaping Reform</a></div>
                  <div><a href="#opposition" className="text-sky-400 hover:text-sky-300">Who Opposes Reform & Why</a></div>
                  <div><a href="#business-action" className="text-sky-400 hover:text-sky-300">What Businesses Should Do Now</a></div>
                  <div><a href="#faq" className="text-sky-400 hover:text-sky-300">FAQ</a></div>
                </nav>
              </div>

              {/* Section 1: Overview */}
              <h2 id="overview" className="text-2xl font-bold text-white">Why States Are Reforming ADA Lawsuit Laws</h2>
              <p className="text-slate-300">
                In 2025, <strong className="text-white">8,667 federal ADA Title III lawsuits</strong> were filed — near the
                all-time high of 8,800 set in 2024. While the ADA's intent is to ensure equal access for people with disabilities,
                the current enforcement system has produced unintended consequences: a small number of serial plaintiffs and
                law firms file thousands of near-identical lawsuits per year, primarily targeting small businesses that settle
                for $5,000–$15,000 rather than spend $50,000–$100,000 defending a case.
              </p>
              <p className="text-slate-300">
                The numbers tell the story. According to Seyfarth Shaw's annual analysis:
              </p>

              <div className="not-prose space-y-3 mt-4 mb-8">
                {[
                  { stat: "75%", desc: "of all federal ADA filings come from just 3 states: California (3,252), Florida (1,823), and New York (1,471)" },
                  { stat: "46%", desc: "of defendants are repeat targets — businesses sued more than once by different plaintiffs" },
                  { stat: "30%", desc: "of lawsuits target sites with accessibility overlay widgets, suggesting overlays attract rather than deter litigation" },
                  { stat: "$75K+", desc: "average settlement cost, often with no requirement for the business to actually fix the accessibility issues" },
                  { stat: "~20", desc: "law firms are responsible for the majority of all ADA web accessibility filings nationwide" },
                ].map((item, i) => (
                  <div key={i} className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 flex items-start gap-4">
                    <span className="text-2xl font-bold text-orange-400 min-w-[80px] text-right">{item.stat}</span>
                    <span className="text-slate-300 text-sm">{item.desc}</span>
                  </div>
                ))}
              </div>

              <p className="text-slate-300">
                This backdrop has created a bipartisan appetite for reform. States aren't trying to weaken accessibility
                protections — they're trying to create an enforcement system that leads to <strong className="text-white">actual
                remediation</strong> rather than settlements that fund more lawsuits while leaving websites inaccessible.
              </p>

              {/* Section 2: Active State Bills */}
              <h2 id="state-bills" className="text-2xl font-bold text-white mt-12">Active State Bills (2026)</h2>
              <p className="text-slate-300">
                Three states have introduced formal ADA web accessibility reform legislation as of March 2026. Each takes
                a different approach, reflecting varying political climates and lawsuit volumes.
              </p>

              {bills.map((bill) => (
                <div key={bill.bill} id={bill.state.toLowerCase()} className={`not-prose rounded-xl border ${bill.borderColor} ${bill.bgColor} p-6 mt-8 mb-8`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{bill.emoji}</span>
                      <div>
                        <h3 className="font-bold text-white text-xl">{bill.state} {bill.bill}</h3>
                        <p className={`text-sm ${bill.textColor}`}>"{bill.name}"</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-xs font-semibold ${bill.statusColor}`}>{bill.status}</div>
                      <div className="text-xs text-slate-500 mt-0.5">Introduced {bill.introduced}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4 p-4 rounded-lg bg-slate-900/50">
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">{bill.cureperiod}</div>
                      <div className="text-xs text-slate-500">Cure Period</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-lg font-bold ${bill.countersue ? 'text-green-400' : 'text-slate-500'}`}>{bill.countersue ? 'Yes' : 'No'}</div>
                      <div className="text-xs text-slate-500">Counter-Sue</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">{bill.lawsuits2025}</div>
                      <div className="text-xs text-slate-500">2025 Lawsuits</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">{bill.pctNational}</div>
                      <div className="text-xs text-slate-500">% National</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-white text-sm mb-1">Key Provisions</h4>
                      <ul className="text-sm text-slate-300 space-y-1">
                        {bill.keyProvisions.map((p, i) => (
                          <li key={i}>• {p}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white text-sm mb-1">Serial Plaintiff Approach</h4>
                      <p className="text-sm text-slate-300">{bill.serialLimits}</p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-700/50">
                    <Link href={bill.deepDive} className="text-sm text-sky-400 hover:text-sky-300 font-medium">
                      Read full analysis →
                    </Link>
                  </div>
                </div>
              ))}

              {/* Side-by-side comparison */}
              <h2 id="comparison" className="text-2xl font-bold text-white mt-12">Side-by-Side Comparison</h2>
              <p className="text-slate-300">
                How the three active bills compare on key provisions:
              </p>

              <div className="not-prose mt-4 mb-8">
                <div className="rounded-xl border border-slate-700 overflow-hidden">
                  <div className="grid grid-cols-4 bg-slate-800 p-4 font-semibold text-sm text-slate-300">
                    <div>Feature</div>
                    <div className="text-red-400">CA SB 84</div>
                    <div className="text-orange-400">MO HB 1694</div>
                    <div className="text-blue-400">UT SB 68</div>
                  </div>
                  {[
                    { feature: "Cure Period", ca: "120 days", mo: "90 days", ut: "30 days" },
                    { feature: "Notice Required", ca: "URL + specific barrier", mo: "Written notice", ut: "Written notice" },
                    { feature: "Counter-Sue Rights", ca: "No", mo: "No", ut: "Yes (bad faith)" },
                    { feature: "Serial Plaintiff Limits", ca: "Implicit", mo: "Indirect", ut: "10+ claims = abusive" },
                    { feature: "Good Faith Standard", ca: "Yes + 3rd party audit", mo: "Yes", ut: "Presumption of dismissal" },
                    { feature: "Ongoing Monitoring", ca: "Expected", mo: "Not specified", ut: "Not specified" },
                    { feature: "Overlay Addressed", ca: "No", mo: "No", ut: "No" },
                    { feature: "Applies to Web Only", ca: "Yes", mo: "All ADA Title III", ut: "All ADA Title III" },
                    { feature: "Effective Date (if passed)", ca: "Jan 2027", mo: "Aug 2026", ut: "Jul 2026" },
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-4 p-4 text-sm border-t border-slate-700 bg-slate-800/50">
                      <div className="text-slate-400 font-medium">{row.feature}</div>
                      <div className="text-slate-300">{row.ca}</div>
                      <div className="text-slate-300">{row.mo}</div>
                      <div className="text-slate-300">{row.ut}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Federal Proposals */}
              <h2 id="federal" className="text-2xl font-bold text-white mt-12">Federal Proposals</h2>

              <div className="not-prose rounded-xl border border-purple-500/30 bg-purple-500/5 p-6 mt-4 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🇺🇸</span>
                  <div>
                    <h3 className="font-bold text-white text-xl">ADA 30 Days Act (H.R. ___)</h3>
                    <p className="text-sm text-purple-400">Federal — Reintroduced in 2026 session</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-sm text-slate-300">
                    The ADA 30 Days Act would create a <strong className="text-white">national 30-day cure period</strong> for
                    all ADA Title III violations — not just web accessibility. The bill has been introduced multiple times since
                    2019 but has never passed the House or Senate. Key provisions:
                  </p>
                  <ul className="text-sm text-slate-300 space-y-1">
                    <li>• 30-day written notice requirement before filing any ADA Title III lawsuit</li>
                    <li>• Business must show "substantial progress" toward remediation within the 30-day window</li>
                    <li>• Does not cap damages or limit repeat filings against businesses that fail to remediate</li>
                    <li>• Would supersede state cure period laws if enacted</li>
                  </ul>

                  <div>
                    <h4 className="font-semibold text-white text-sm mb-1">Why It Hasn't Passed</h4>
                    <p className="text-sm text-slate-300">
                      Disability rights organizations (DREDF, AAPD, ACLU) strongly oppose the bill, arguing that any cure
                      period delays access for people with disabilities. The ADA was intentionally written without a cure
                      period to maximize enforcement leverage. Congressional disability caucuses have consistently blocked
                      the bill in committee. However, the growing state-level movement may create political pressure for
                      federal action.
                    </p>
                  </div>

                  <div className="pt-3 border-t border-purple-500/20">
                    <p className="text-xs text-slate-500">Status: Reintroduced in 2026 session. Referred to House Judiciary Committee. No hearing scheduled.</p>
                  </div>
                </div>
              </div>

              {/* States to Watch */}
              <h2 id="pipeline" className="text-2xl font-bold text-white mt-12">States to Watch: The Reform Pipeline</h2>
              <p className="text-slate-300">
                Based on legislative activity, lawsuit volumes, and small business advocacy pressure, these states are
                most likely to introduce ADA web accessibility reform bills in 2026-2027:
              </p>

              <div className="not-prose space-y-3 mt-4 mb-8">
                {[
                  {
                    state: "Florida",
                    likelihood: "High",
                    color: "text-red-400",
                    lawsuits: "1,823 (2nd highest)",
                    reason: "Miami-Dade county has aggressive ADA law firms. Florida's business-friendly legislature and governor have signaled interest in tort reform broadly. NFIB Florida is actively lobbying.",
                  },
                  {
                    state: "Texas",
                    likelihood: "High",
                    color: "text-red-400",
                    lawsuits: "412 (growing rapidly)",
                    reason: "Texas has a strong tort reform history. Dallas and Houston courts are seeing increasing ADA filings. Multiple business associations have flagged ADA lawsuits as a rising concern.",
                  },
                  {
                    state: "Illinois",
                    likelihood: "Medium",
                    color: "text-yellow-400",
                    lawsuits: "~500 (+65% YoY surge)",
                    reason: "Illinois saw the biggest jump in ADA filings in 2025 (+65%), likely due to plaintiff forum shopping from NY. Chicago business groups are taking notice. However, Illinois legislature tends to be more plaintiff-friendly.",
                  },
                  {
                    state: "Georgia",
                    likelihood: "Medium",
                    color: "text-yellow-400",
                    lawsuits: "~200",
                    reason: "Atlanta is becoming a new ADA filing hub. Georgia's business-friendly legislature could move quickly if a champion emerges. NFIB Georgia has expressed interest.",
                  },
                  {
                    state: "Kansas",
                    likelihood: "Medium",
                    color: "text-yellow-400",
                    lawsuits: "~50",
                    reason: "Kansas has been studying the Utah and Missouri models as a template. A model framework is under consideration by the Kansas Chamber of Commerce, but no formal bill has been introduced yet.",
                  },
                  {
                    state: "Pennsylvania",
                    likelihood: "Low-Medium",
                    color: "text-orange-400",
                    lawsuits: "287 (5th highest)",
                    reason: "Philadelphia courts see significant ADA activity. Pennsylvania's divided legislature makes passage harder, but rising filing numbers could create bipartisan urgency.",
                  },
                ].map((item) => (
                  <div key={item.state} className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-white">{item.state}</h3>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-slate-500">{item.lawsuits} lawsuits</span>
                        <span className={`text-xs font-semibold ${item.color}`}>{item.likelihood} Likelihood</span>
                      </div>
                    </div>
                    <p className="text-sm text-slate-400">{item.reason}</p>
                  </div>
                ))}
              </div>

              {/* Court Rulings */}
              <h2 id="court-rulings" className="text-2xl font-bold text-white mt-12">Court Rulings Shaping Reform</h2>
              <p className="text-slate-300">
                While legislatures debate cure periods, federal courts are creating their own reform through judicial
                scrutiny of serial plaintiffs:
              </p>

              <div className="not-prose space-y-4 mt-4 mb-8">
                {[
                  {
                    case: "Fernandez v. Cuddle Clones (Feb 2026)",
                    court: "W.D. Texas",
                    ruling: "Judge ordered jurisdictional discovery SUA SPONTE after plaintiff filed 57 near-identical ADA lawsuits. Complaint described $249-$499 custom pet replicas as 'pet toys,' suggesting copy-paste filing without genuine intent to purchase.",
                    impact: "Signals judicial appetite for scrutinizing serial plaintiffs even without legislative reform.",
                  },
                  {
                    case: "Laufer v. Acheson Hotels (2023)",
                    court: "U.S. Supreme Court",
                    ruling: "Supreme Court vacated the case after the plaintiff voluntarily dismissed, but the underlying question — whether 'testers' have standing to sue businesses they never intended to patronize — remains unresolved.",
                    impact: "NY filings dropped 40% as lower courts applied stricter standing requirements. This judicial trend is pushing serial plaintiffs to CA and FL.",
                  },
                  {
                    case: "Cazares v. Acro & Hippe v. Me Too (2026)",
                    court: "W.D. Wisconsin",
                    ruling: "Federal court ruled that online-only stores with no physical location must comply with ADA Title III, applying the 'nexus to physical place' test broadly to include fulfillment and returns infrastructure.",
                    impact: "Expanded ADA scope to purely online businesses, likely increasing lawsuit volume and strengthening the case for reform.",
                  },
                ].map((item) => (
                  <div key={item.case} className="rounded-lg border border-slate-700 bg-slate-800/50 p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-white text-sm">{item.case}</h3>
                      <span className="text-xs text-slate-500">{item.court}</span>
                    </div>
                    <p className="text-sm text-slate-300 mb-2">{item.ruling}</p>
                    <p className="text-xs text-sky-400"><strong>Impact:</strong> {item.impact}</p>
                  </div>
                ))}
              </div>

              <p className="text-slate-300">
                For more on how courts are pushing back, read our{" "}
                <Link href="/blog/courts-fighting-back-serial-ada-website-plaintiffs" className="text-sky-400 hover:text-sky-300">
                  deep dive on judicial scrutiny of serial ADA plaintiffs
                </Link>.
              </p>

              {/* Opposition */}
              <h2 id="opposition" className="text-2xl font-bold text-white mt-12">Who Opposes Reform & Why</h2>
              <p className="text-slate-300">
                It's important to understand the genuine concerns of those opposing cure period legislation. This isn't
                a simple good-vs-evil debate:
              </p>

              <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 mb-8">
                {[
                  {
                    group: "Disability Rights Organizations",
                    orgs: "DREDF, AAPD, NFB, ACLU",
                    concern: "Cure periods delay access for people with disabilities who face real barriers every day. The ADA was written without a cure period for a reason — immediate enforcement is the only mechanism that motivates proactive compliance.",
                    icon: "♿",
                  },
                  {
                    group: "Plaintiff's Bar",
                    orgs: "ADA litigation firms, legal aid orgs",
                    concern: "Cure periods could effectively end private enforcement of the ADA, leaving the DOJ as the only enforcer — and the DOJ can't handle the volume. Attorney's fees are what fund accessibility enforcement.",
                    icon: "⚖️",
                  },
                  {
                    group: "Accessibility Advocates",
                    orgs: "WebAIM, Deque Systems, Level Access",
                    concern: "Some advocate groups support the principle of cure periods but worry about implementation. Without verification requirements, businesses might 'cure' by installing an overlay widget rather than doing real remediation.",
                    icon: "🌐",
                  },
                  {
                    group: "Academic Researchers",
                    orgs: "Various law school disability rights clinics",
                    concern: "Research shows cure periods in other areas of law (employment, housing) have led to decreased enforcement without proportional increases in compliance. The deterrent effect of litigation may be more powerful than the corrective effect of cure periods.",
                    icon: "📚",
                  },
                ].map((item) => (
                  <div key={item.group} className="rounded-lg border border-slate-700 bg-slate-800/50 p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{item.icon}</span>
                      <div>
                        <h3 className="font-semibold text-white text-sm">{item.group}</h3>
                        <p className="text-xs text-slate-500">{item.orgs}</p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-400">{item.concern}</p>
                  </div>
                ))}
              </div>

              <p className="text-slate-300">
                The best reforms will balance these concerns — creating space for genuine remediation while maintaining
                strong incentives for proactive accessibility. California's verification requirement and ongoing monitoring
                expectation are promising models for this balance.
              </p>

              {/* Business Action Plan */}
              <h2 id="business-action" className="text-2xl font-bold text-white mt-12">What Businesses Should Do Now</h2>
              <p className="text-slate-300">
                Whether you're in a state with active reform or not, the smartest strategy is the same:{" "}
                <strong className="text-white">proactive compliance costs a fraction of reactive litigation</strong>.
              </p>

              <div className="not-prose space-y-4 mt-4 mb-8">
                {[
                  {
                    step: "1",
                    title: "Know Your State's Legal Landscape",
                    desc: "Check if your state has an active or pending reform bill. Even without reform, understanding your state's ADA filing volume and common plaintiff tactics helps you assess risk. California, Florida, and New York businesses face the highest litigation risk.",
                  },
                  {
                    step: "2",
                    title: "Scan Your Website Today",
                    desc: "Run an automated accessibility scan to establish a baseline. This takes 60 seconds and identifies the violations most likely to trigger lawsuits: missing alt text, color contrast failures, keyboard traps, and missing form labels.",
                    cta: { text: "Free Accessibility Scan", href: "/#scanner" },
                  },
                  {
                    step: "3",
                    title: "Fix the Top 4 Violation Categories",
                    desc: "These four categories account for 80%+ of ADA web lawsuits: (1) Missing or inadequate alt text, (2) Insufficient color contrast, (3) Keyboard navigation traps, (4) Missing form labels. Fixing these dramatically reduces your litigation risk.",
                  },
                  {
                    step: "4",
                    title: "Document Everything",
                    desc: "If a cure period law passes in your state, 'good faith remediation' documentation is your defense. Keep records of every scan, every fix, and your ongoing compliance plan. Even without cure period laws, courts look favorably on documented remediation efforts.",
                  },
                  {
                    step: "5",
                    title: "Set Up Continuous Monitoring",
                    desc: "Accessibility isn't a one-time fix. CMS updates, new content, and third-party integrations can introduce regressions. Automated weekly or monthly scanning catches issues before they become lawsuit triggers — and costs $29-99/month vs. $75K+ in litigation.",
                    cta: { text: "See Monitoring Plans", href: "/pricing" },
                  },
                  {
                    step: "6",
                    title: "Ditch the Overlay",
                    desc: "If you're using an accessibility overlay widget, remove it. 30% of ADA lawsuits in 2025 targeted sites with overlays. Courts have rejected them as compliance solutions. They may actually increase your legal risk by signaling known accessibility issues.",
                  },
                ].map((item) => (
                  <div key={item.step} className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-sky-500/20 text-sky-400 font-bold text-sm">{item.step}</span>
                      <h3 className="font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="text-sm text-slate-300">{item.desc}</p>
                    {item.cta && (
                      <div className="mt-3">
                        <Link href={item.cta.href} className="text-sm text-sky-400 hover:text-sky-300 font-medium transition-colors">
                          {item.cta.text} →
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="not-prose rounded-xl border border-sky-500/30 bg-sky-500/5 p-8 text-center mt-8 mb-8">
                <h3 className="text-2xl font-bold text-white">Don't Wait for Legislation — Be Proactive</h3>
                <p className="text-slate-300 mt-3 max-w-2xl mx-auto">
                  Reform bills may take months or years to pass. Proactive compliance protects you NOW — and costs a
                  fraction of what litigation would. Start with a free scan to see where you stand.
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

              {/* FAQ */}
              <h2 id="faq" className="text-2xl font-bold text-white mt-12">Frequently Asked Questions</h2>

              <div className="not-prose space-y-4 mt-4 mb-8">
                {[
                  { q: "Which states have ADA website lawsuit reform bills in 2026?", a: "As of March 2026, three states have active bills: California (SB 84, 120-day cure period), Missouri (HB 1694, 90-day cure period), and Utah (SB 68, 30-day cure period with counter-sue rights). A federal bill (ADA 30 Days Act) has also been reintroduced. We expect 5-10 more states to introduce bills during 2026 legislative sessions." },
                  { q: "Will an ADA cure period law protect my business from lawsuits?", a: "A cure period doesn't prevent lawsuits — it gives you time to fix issues before one can be filed. If you don't remediate within the cure window, the lawsuit proceeds. The best protection is proactive compliance: regular scanning, fixing critical violations, and documenting your efforts." },
                  { q: "I'm in a state without reform — am I at higher risk?", a: "Possibly. Without cure periods, plaintiffs can file immediately. However, proactive compliance is equally effective regardless of your state's legal framework. Businesses that demonstrate genuine accessibility efforts are better positioned in court whether or not cure period laws exist." },
                  { q: "Do these laws apply to websites only?", a: "California's SB 84 specifically targets web accessibility. Missouri's HB 1694 and Utah's SB 68 apply to all ADA Title III violations, including physical and digital accessibility. The federal ADA 30 Days Act would also cover all Title III claims." },
                  { q: "How often is this tracker updated?", a: "We update this page whenever a new state bill is introduced, an existing bill advances (committee vote, floor vote, signing), or significant court rulings affect the reform landscape. Bookmark this page and check back regularly." },
                  { q: "Can serial plaintiffs still file lawsuits under cure period laws?", a: "Yes, but the process changes. They must provide specific written notice first and wait through the cure period. Utah's SB 68 goes further by defining 'abusive litigation' (10+ similar claims in 12 months) and allowing businesses to counter-sue. This makes drive-by filing more costly for serial plaintiffs." },
                  { q: "Does the IRS Disabled Access Credit help with compliance costs?", a: "Yes. Small businesses can claim up to $5,000/year via IRS Form 8826 (Disabled Access Credit) for accessibility improvements. At $29-99/month for automated scanning, the full year's cost falls well within the credit threshold — making compliance effectively free after the tax benefit." },
                  { q: "What about overlay widgets and cure period laws?", a: "None of the current reform bills specifically address overlays. However, 30% of 2025 ADA lawsuits targeted sites with overlays, and courts have rejected them as compliance solutions. A cure period would give businesses time to implement real WCAG fixes instead of relying on overlay shortcuts." },
                ].map((item, i) => (
                  <div key={i} className="rounded-lg border border-slate-700 bg-slate-800/50 p-5">
                    <h3 className="font-semibold text-white text-sm">{item.q}</h3>
                    <p className="text-sm text-slate-400 mt-2">{item.a}</p>
                  </div>
                ))}
              </div>

              {/* Update log */}
              <div className="not-prose rounded-xl border border-slate-700 bg-slate-800/50 p-6 mt-8 mb-8">
                <h3 className="font-bold text-white text-lg mb-3">📝 Update Log</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-slate-500 min-w-[100px]">Mar 1, 2026</span>
                    <span className="text-slate-300">Initial tracker published with 3 state bills (CA SB 84, MO HB 1694, UT SB 68), federal ADA 30 Days Act, 6 pipeline states, and 3 court rulings.</span>
                  </div>
                </div>
              </div>

              {/* Related reading */}
              <div className="not-prose mt-8 pt-8 border-t border-slate-700">
                <p className="text-sm text-slate-400">
                  Related reading:{" "}
                  <Link href="/blog/ada-lawsuit-reform-2026" className="text-sky-400 hover:text-sky-300">
                    Three States Fighting Back
                  </Link>{" "}
                  ·{" "}
                  <Link href="/blog/california-sb-84-ada-right-to-cure-2026" className="text-sky-400 hover:text-sky-300">
                    California SB 84 Deep Dive
                  </Link>{" "}
                  ·{" "}
                  <Link href="/blog/courts-fighting-back-serial-ada-website-plaintiffs" className="text-sky-400 hover:text-sky-300">
                    Courts vs. Serial Plaintiffs
                  </Link>{" "}
                  ·{" "}
                  <Link href="/blog/ada-website-lawsuit-statistics-2026" className="text-sky-400 hover:text-sky-300">
                    Lawsuit Statistics 2026
                  </Link>{" "}
                  ·{" "}
                  <Link href="/blog/ada-lawsuit-state-migration-2026" className="text-sky-400 hover:text-sky-300">
                    Lawsuit State Migration
                  </Link>{" "}
                  ·{" "}
                  <Link href="/blog/ada-lawsuits-ai-powered-pro-se-2025" className="text-sky-400 hover:text-sky-300">
                    AI-Powered Pro Se Filings
                  </Link>{" "}
                  ·{" "}
                  <Link href="/tools/free-accessibility-checker" className="text-sky-400 hover:text-sky-300">
                    Free Accessibility Checker
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
