/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title:
    "ADA Title II Deadline Countdown: April 24, 2026 | Government Website Compliance Guide | RatedWithAI",
  description:
    "The April 24, 2026 ADA Title II deadline is approaching fast. State and local government websites must meet WCAG 2.1 AA or face lawsuits, DOJ enforcement, and funding loss. Free compliance scan inside.",
  openGraph: {
    title: "ADA Title II Deadline Countdown — April 24, 2026",
    description:
      "April 24, 2026 is the hard DOJ deadline for government website WCAG 2.1 AA compliance. 5,000+ entities serving 50,000+ people must comply. Here's your roadmap.",
    type: "article",
    publishedTime: "2026-02-22T00:00:00.000Z",
    modifiedTime: "2026-02-25T00:00:00.000Z",
    authors: ["RatedWithAI Team"],
  },
  keywords: [
    "ada title ii deadline 2026",
    "ada compliance deadline april 2026",
    "april 2026 accessibility deadline",
    "government website ada compliance",
    "wcag 2.1 aa deadline",
    "ada title ii countdown",
    "ada web accessibility deadline",
    "government accessibility audit",
    "ada compliance audit",
    "website accessibility services",
    "ada title ii government website",
    "state local government accessibility",
    "doj web accessibility rule",
    "ada title ii wcag requirements",
    "government website accessibility checker",
  ],
};

function getDaysUntilDeadline(): number {
  const deadline = new Date("2026-04-24T00:00:00-04:00");
  const now = new Date();
  const diff = deadline.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

function getWeeksUntilDeadline(): number {
  return Math.floor(getDaysUntilDeadline() / 7);
}

export default function AdaDeadlineCountdownPage() {
  const daysLeft = getDaysUntilDeadline();
  const weeksLeft = getWeeksUntilDeadline();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `ADA Title II Deadline Countdown: ${daysLeft} Days Until April 24, 2026`,
    description:
      "The April 24, 2026 ADA Title II deadline requires state and local government websites to meet WCAG 2.1 AA. Comprehensive compliance guide with playbook, cost analysis, and free scanner.",
    datePublished: "2026-02-22T00:00:00.000Z",
    dateModified: "2026-02-25T00:00:00.000Z",
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
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://ratedwithai.com/blog/ada-title-ii-deadline-countdown-2026",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "When is the ADA Title II deadline?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "April 24, 2026, for state and local government entities serving populations of 50,000 or more. Smaller entities (under 50,000) and special district governments have until April 26, 2027.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if my government website isn't compliant by April 24, 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Non-compliant entities face DOJ enforcement actions, private ADA lawsuits (average settlement $52,000–$89,000), consent decrees with ongoing monitoring, and potential loss of federal funding under Section 504 of the Rehabilitation Act.",
        },
      },
      {
        "@type": "Question",
        name: "Does the DOJ's February 2026 interim rule change the deadline?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The DOJ submitted an Interim Final Rule to OIRA on February 13, 2026 to modify — not repeal — ADA Title II requirements. Potential changes include cost-reduction measures and small-jurisdiction exemptions, but the core WCAG 2.1 AA requirement and April 24 deadline remain in effect until officially modified.",
        },
      },
      {
        "@type": "Question",
        name: "Do accessibility overlays make my government website ADA compliant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Courts have consistently ruled that overlays do not constitute WCAG compliance. In 2025, the FTC fined a major overlay provider $1 million for deceptive compliance claims. The DOJ rule specifically requires conformance with WCAG 2.1 AA technical standards — not the use of any widget or overlay.",
        },
      },
      {
        "@type": "Question",
        name: "Which government entities must comply by April 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "All state and local government entities serving populations of 50,000 or more, including state agencies, large cities and counties, public universities, large school districts, public transit authorities, public libraries, emergency services, and election systems.",
        },
      },
      {
        "@type": "Question",
        name: "Can I claim a tax credit for accessibility compliance costs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Small businesses and government contractors can claim the Disabled Access Credit (IRS Form 8826) — up to $5,000 per year to offset accessibility improvement costs. The credit covers 50% of eligible expenditures between $250 and $10,250, making tools like RatedWithAI ($29/month) effectively free after the tax benefit.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
              DEADLINE APPROACHING — {daysLeft} DAYS LEFT
            </div>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              ADA Title II Deadline Countdown: {daysLeft} Days Until April 24, 2026
            </h1>
            <p className="mt-2 text-lg text-red-400 font-semibold">
              April 24, 2026 — The clock is ticking for thousands of government entities.
            </p>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              On April 24, 2026, the Department of Justice's ADA Title II web accessibility rule takes full effect.
              Every state and local government website serving populations of 50,000+ must meet WCAG 2.1 Level AA
              standards — or face federal enforcement, private lawsuits, consent decrees, and loss of federal funding.
              With {daysLeft} days and roughly {weeksLeft} weeks remaining, the compliance window is closing fast. Texas
              alone has 5,868 government entities that must comply. Nationally, the challenge is even larger.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
              <time dateTime="2026-02-22">Published February 22, 2026</time>
              <span>·</span>
              <time dateTime="2026-02-25">Updated February 25, 2026</time>
              <span>·</span>
              <span>18 min read</span>
            </div>

            {/* Dynamic countdown urgency box */}
            <div className="mt-10 rounded-xl border border-red-500/30 bg-red-500/5 p-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-red-400">{daysLeft}</div>
                  <div className="text-sm text-slate-400 mt-1">Days Until Deadline</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-orange-400">94.8%</div>
                  <div className="text-sm text-slate-400 mt-1">Gov Sites Failing WCAG</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-yellow-400">8,800+</div>
                  <div className="text-sm text-slate-400 mt-1">ADA Lawsuits Filed 2024</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-amber-400">$75K+</div>
                  <div className="text-sm text-slate-400 mt-1">Avg Settlement Cost</div>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="mt-10 rounded-xl border border-slate-700 bg-slate-800/50 p-6">
              <h2 className="text-lg font-bold text-white mb-4">📋 In This Guide</h2>
              <nav className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                {[
                  { label: "What Happens on April 24, 2026?", anchor: "#what-happens" },
                  { label: "Who Must Comply (Entity Breakdown)", anchor: "#who-must-comply" },
                  { label: "Breaking: DOJ Signals Rule Modifications", anchor: "#doj-modifications" },
                  { label: "The WCAG 2.1 AA Standard", anchor: "#wcag-standard" },
                  { label: "Lawsuit Landscape: 2024-2026", anchor: "#lawsuit-landscape" },
                  { label: "State-by-State Risk Analysis", anchor: "#state-risk" },
                  { label: "Accessibility Overlays Won't Save You", anchor: "#overlays" },
                  { label: "The True Cost of Waiting", anchor: "#cost-of-waiting" },
                  { label: `Your ${weeksLeft}-Week Compliance Playbook`, anchor: "#playbook" },
                  { label: "IRS Tax Credit: Form 8826", anchor: "#tax-credit" },
                  { label: "How to Check Your Compliance Now", anchor: "#check-compliance" },
                  { label: "FAQ", anchor: "#faq" },
                ].map((item) => (
                  <a key={item.anchor} href={item.anchor} className="text-sky-400 hover:text-sky-300 transition-colors py-1">
                    → {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="mt-10 prose prose-lg prose-invert max-w-none">

              {/* Section 1 */}
              <h2 id="what-happens" className="text-2xl font-bold text-white scroll-mt-20">What Happens on April 24, 2026?</h2>
              <p className="text-slate-300">
                The DOJ's final rule — published April 24, 2024, under <strong className="text-white">28 CFR Part 35</strong> — gives state and local
                government entities two years to make their websites and mobile apps accessible to people with
                disabilities. For entities serving 50,000+ people, that compliance date is <strong className="text-red-400">April 24, 2026</strong>.
                Smaller entities (under 50,000) and special district governments have until <strong className="text-white">April 26, 2027</strong>.
              </p>
              <p className="text-slate-300">
                This isn't guidance. It isn't a suggestion. It is federal law backed by enforcement mechanisms. The rule
                applies to <em>every</em> digital touchpoint a government entity operates: websites, web applications,
                mobile apps, PDFs, online forms, payment portals, and digital documents. Non-compliance triggers:
              </p>
              <ul className="text-slate-300 space-y-2">
                <li><strong className="text-white">DOJ enforcement actions</strong> — The Department of Justice can investigate, sue, and impose penalties. In October 2025, the DOJ secured settlements with multiple Texas county election websites.</li>
                <li><strong className="text-white">Private ADA lawsuits</strong> — Citizens and advocacy organizations can file complaints. Law firms specializing in serial ADA litigation have already identified thousands of non-compliant government sites.</li>
                <li><strong className="text-white">Loss of federal funding</strong> — Non-compliance triggers reviews under Section 504 of the Rehabilitation Act, jeopardizing grants, FEMA funds, and other federal dollars.</li>
                <li><strong className="text-white">Consent decrees</strong> — Court-ordered remediation plans with ongoing monitoring, reporting requirements, and escalating penalties for missed benchmarks.</li>
                <li><strong className="text-white">Reputational damage</strong> — Government entities that fail to serve residents with disabilities face public scrutiny, media coverage (Cox Media Group is actively investigating ADA lawsuits across 9+ TV markets), and loss of public trust.</li>
              </ul>

              <div className="not-prose rounded-xl border border-amber-500/30 bg-amber-500/5 p-6 mt-6 mb-8">
                <h3 className="font-bold text-amber-400 text-lg mb-2">⏰ Key Compliance Dates</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-4">
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-red-500/20 text-red-400 whitespace-nowrap">Apr 24, 2026</span>
                    <span className="text-slate-300 text-sm">Entities serving 50,000+ residents must achieve full WCAG 2.1 AA compliance</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 whitespace-nowrap">Apr 26, 2027</span>
                    <span className="text-slate-300 text-sm">Entities serving under 50,000 residents and special district governments must comply</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 whitespace-nowrap">Ongoing</span>
                    <span className="text-slate-300 text-sm">Compliance must be maintained continuously — not just achieved once</span>
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <h2 id="who-must-comply" className="text-2xl font-bold text-white mt-12 scroll-mt-20">Who Must Comply by April 24, 2026?</h2>
              <p className="text-slate-300">
                The first wave covers state and local government entities with populations of <strong className="text-white">50,000 or more</strong>.
                The sheer scale is staggering — Texas alone has 5,868 government entities. Nationally, thousands of state agencies,
                cities, counties, school districts, universities, and special districts are in scope.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose mt-4 mb-8">
                {[
                  { title: "State Agencies", desc: "DMVs, health departments, courts, tax agencies, licensing boards, environmental agencies", icon: "🏛️" },
                  { title: "City & County Governments", desc: "Municipal websites, utility portals, permit systems, zoning databases, parks & recreation", icon: "🏙️" },
                  { title: "Public Universities", desc: "Course registration, LMS platforms (Canvas, Blackboard), financial aid portals, library systems", icon: "🎓" },
                  { title: "School Districts (K-12)", desc: "Parent portals, enrollment systems, meal programs, transportation, special education services", icon: "🏫" },
                  { title: "Public Transit Authorities", desc: "Trip planners, real-time tracking, fare payment, rider alerts, paratransit scheduling", icon: "🚌" },
                  { title: "Public Libraries", desc: "Catalog systems, digital lending, event registration, card management, interlibrary loans", icon: "📚" },
                  { title: "Emergency & Election Services", desc: "911 portals, emergency alerts, voter registration, ballot tracking, polling locations, results", icon: "🗳️" },
                  { title: "Healthcare & Special Districts", desc: "Public hospitals, water districts, hospital districts, housing authorities, utility districts", icon: "🏥" },
                ].map((item) => (
                  <div key={item.title} className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                    <h3 className="font-semibold text-white flex items-center gap-2">
                      <span>{item.icon}</span> {item.title}
                    </h3>
                    <p className="text-sm text-slate-400 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-slate-300">
                The rule applies whether content is produced in-house or by a third-party vendor. If a city hires an outside
                web developer to build its website, the city — not the vendor — is legally responsible for ensuring WCAG 2.1 AA
                compliance. This has caught many government entities off-guard, particularly those relying on vendor promises
                of "ADA compliance" that don't hold up to technical scrutiny.
              </p>

              {/* Section 3 - DOJ Modifications */}
              <h2 id="doj-modifications" className="text-2xl font-bold text-white mt-12 scroll-mt-20">Breaking: DOJ Signals Rule Modifications (February 2026)</h2>
              <p className="text-slate-300">
                On February 13, 2026, the DOJ submitted an <strong className="text-white">Interim Final Rule to OIRA</strong> (Office of
                Information and Regulatory Affairs) to modify ADA Title II web accessibility requirements. This development
                has created confusion in the market, so let's be clear about what this means:
              </p>

              <div className="not-prose rounded-xl border border-sky-500/30 bg-sky-500/5 p-6 mt-4 mb-8">
                <h3 className="font-bold text-white text-lg mb-4">What We Know (and Don't Know)</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-400 mb-1">✅ What's confirmed:</h4>
                    <ul className="text-sm text-slate-300 space-y-1 ml-4">
                      <li>• DOJ filed an Interim Final Rule with OIRA on Feb 13, 2026</li>
                      <li>• The filing signals intent to <em>modify</em>, not repeal the rule</li>
                      <li>• OIRA review typically takes 30-90 days</li>
                      <li>• National League of Cities mentioned DOJ is considering "cost-reduction measures"</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-400 mb-1">⚠️ What's possible:</h4>
                    <ul className="text-sm text-slate-300 space-y-1 ml-4">
                      <li>• Extended deadlines for specific entity types</li>
                      <li>• Exemptions or modified requirements for small jurisdictions</li>
                      <li>• Reduced compliance burden (cost-reduction measures)</li>
                      <li>• Technical standard adjustments</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-400 mb-1">❌ What hasn't changed (yet):</h4>
                    <ul className="text-sm text-slate-300 space-y-1 ml-4">
                      <li>• The April 24, 2026 deadline remains the law</li>
                      <li>• WCAG 2.1 AA is still the required standard</li>
                      <li>• The core rule has not been repealed or stayed</li>
                      <li>• Private ADA lawsuits continue regardless of DOJ actions</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-slate-300">
                <strong className="text-white">Our recommendation:</strong> Do not use the OIRA filing as an excuse to delay
                compliance. Even if the DOJ modifies the rule, the underlying ADA obligation remains. Private plaintiffs
                don't need the DOJ's rule to file lawsuits — they've been doing so since 2017 based on ADA Title II alone.
                Any entity that delays compliance is gambling that modifications will arrive before the deadline <em>and</em>
                that those modifications will meaningfully reduce their obligations. That's a risky bet.
              </p>
              <p className="text-slate-300 text-sm">
                For deeper analysis, see our{" "}
                <Link href="/blog/doj-ada-title-ii-rule-changes-2026" className="text-sky-400 hover:text-sky-300">
                  full coverage of the DOJ's Title II rule modifications
                </Link>.
              </p>

              {/* Section 4 - WCAG Standard */}
              <h2 id="wcag-standard" className="text-2xl font-bold text-white mt-12 scroll-mt-20">The WCAG 2.1 AA Standard: What It Requires</h2>
              <p className="text-slate-300">
                WCAG 2.1 Level AA includes <strong className="text-white">50 success criteria</strong> across four principles:
                Perceivable, Operable, Understandable, and Robust. The most commonly violated criteria — and the ones
                most likely to trigger lawsuits and DOJ enforcement — include:
              </p>

              <div className="not-prose space-y-3 mt-4 mb-8">
                {[
                  { code: "1.1.1", name: "Non-text Content", fail: "Missing alt text on images — WebAIM's 2026 analysis found 58.4% of home pages fail this criterion", severity: "Critical" },
                  { code: "1.4.3", name: "Contrast (Minimum)", fail: "Low color contrast text — the #1 most common WCAG failure, affecting 81% of home pages scanned", severity: "Critical" },
                  { code: "4.1.2", name: "Name, Role, Value", fail: "Form inputs without labels — affects 46% of government websites, making online services unusable for screen reader users", severity: "Critical" },
                  { code: "2.1.1", name: "Keyboard", fail: "Interactive elements unreachable via keyboard — affects 20% of sites and completely blocks users who cannot use a mouse", severity: "Critical" },
                  { code: "2.4.4", name: "Link Purpose", fail: "Vague 'click here' or 'read more' links without context — affects 45.6% of home pages", severity: "High" },
                  { code: "1.3.1", name: "Info and Relationships", fail: "Missing heading structure, table headers, form groupings — makes complex pages incomprehensible to assistive technology", severity: "High" },
                  { code: "3.1.1", name: "Language of Page", fail: "Missing lang attribute — affects 17.1% of sites, prevents screen readers from using correct pronunciation", severity: "Medium" },
                  { code: "1.2.2", name: "Captions (Prerecorded)", fail: "Videos without captions — critical for public meetings, council recordings, and emergency announcements", severity: "High" },
                ].map((item) => (
                  <div key={item.code} className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-mono text-sky-400">{item.code}</span>
                        <span className="font-semibold text-white">{item.name}</span>
                      </div>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        item.severity === "Critical" ? "bg-red-500/20 text-red-400" :
                        item.severity === "High" ? "bg-orange-500/20 text-orange-400" :
                        "bg-yellow-500/20 text-yellow-400"
                      }`}>{item.severity}</span>
                    </div>
                    <p className="text-sm text-slate-400 mt-2">{item.fail}</p>
                  </div>
                ))}
              </div>

              <p className="text-slate-300">
                Government websites face unique challenges compared to commercial sites. Common government-specific failures
                include inaccessible PDFs (council agendas, permit forms, budget documents), GIS/mapping tools without
                text alternatives, third-party embedded systems (payment portals, permitting software), and video archives
                of public meetings without captions.
              </p>
              <p className="text-slate-300 text-sm">
                For a complete WCAG 2.1 reference, see our{" "}
                <Link href="/wcag" className="text-sky-400 hover:text-sky-300">
                  WCAG criteria guide
                </Link>{" "}
                or the{" "}
                <Link href="/blog/ada-compliance-checklist-2026" className="text-sky-400 hover:text-sky-300">
                  ADA compliance checklist
                </Link>.
              </p>

              {/* Section 5 - Lawsuits */}
              <h2 id="lawsuit-landscape" className="text-2xl font-bold text-white mt-12 scroll-mt-20">The Lawsuit Landscape: 2024-2026</h2>
              <p className="text-slate-300">
                Web accessibility lawsuits have been accelerating for years. In 2024, <strong className="text-white">8,800+
                ADA web accessibility lawsuits</strong> were filed nationally (Seyfarth Shaw data). As the April 2026 deadline
                approaches, legal experts expect a significant spike in government-targeted litigation — and the data
                already confirms this trend.
              </p>

              <div className="not-prose rounded-xl border border-slate-700 bg-slate-800/50 p-6 mt-4 mb-8">
                <h3 className="font-bold text-white text-lg mb-4">Key Lawsuit Statistics</h3>
                <div className="space-y-3">
                  {[
                    { stat: "8,800+", desc: "ADA web accessibility lawsuits filed in 2024 (Seyfarth Shaw)" },
                    { stat: "400%", desc: "increase in digital accessibility lawsuits since 2018" },
                    { stat: "$52K–$89K", desc: "settlement range for government entity ADA cases (2024 Texas data)" },
                    { stat: "18%", desc: "of Texas ADA lawsuits targeted government entities specifically (vs. 14% nationally)" },
                    { stat: "224", desc: "ADA lawsuits filed in Texas alone in 2024 — 4th nationally behind NY, FL, CA" },
                    { stat: "9+", desc: "TV stations across 7 markets now running Cox Media Group ADA lawsuit investigations" },
                    { stat: "30%", desc: "of ADA lawsuits involved sites using accessibility overlay widgets" },
                    { stat: "383", desc: "cases filed by a single serial plaintiff (Victor Ariza) — lawsuit mills target low-hanging fruit" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="text-2xl font-bold text-sky-400 min-w-[90px]">{item.stat}</span>
                      <span className="text-slate-300">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-slate-300">
                The DOJ has already moved from guidance to enforcement. In October 2025, the DOJ secured settlements
                with multiple Texas county election websites for failing to make voter registration, polling location,
                and ballot information accessible. Those settlements required WCAG 2.1 AA compliance, staff training,
                civil penalties, and ongoing DOJ monitoring — far more expensive than proactive compliance.
              </p>
              <p className="text-slate-300 text-sm">
                For detailed lawsuit data, see our{" "}
                <Link href="/blog/ada-website-lawsuit-statistics-2026" className="text-sky-400 hover:text-sky-300">
                  ADA website lawsuit statistics report
                </Link>{" "}
                and{" "}
                <Link href="/blog/ada-lawsuit-settlements-2026" className="text-sky-400 hover:text-sky-300">
                  settlement analysis
                </Link>.
              </p>

              {/* Section 6 - State Risk */}
              <h2 id="state-risk" className="text-2xl font-bold text-white mt-12 scroll-mt-20">State-by-State Risk Analysis</h2>
              <p className="text-slate-300">
                Compliance challenges and legal risks vary dramatically by state. The legislative landscape is
                fracturing: some states are expanding accessibility requirements while others are pushing back
                against what they see as abusive litigation.
              </p>

              <div className="not-prose mt-4 mb-8">
                <div className="rounded-xl border border-slate-700 overflow-hidden">
                  <div className="grid grid-cols-4 bg-slate-800 p-4 font-semibold text-sm text-slate-300">
                    <div>State</div>
                    <div>2024 Lawsuits</div>
                    <div>Entities Affected</div>
                    <div>Risk Level</div>
                  </div>
                  {[
                    { state: "New York", suits: "2,400+", entities: "Large", risk: "Highest", color: "text-red-400" },
                    { state: "Florida", suits: "1,200+", entities: "Large", risk: "Very High", color: "text-red-400" },
                    { state: "California", suits: "800+", entities: "Large", risk: "Very High", color: "text-red-400" },
                    { state: "Texas", suits: "224", entities: "5,868", risk: "High", color: "text-orange-400" },
                    { state: "Illinois", suits: "300+", entities: "Large", risk: "High", color: "text-orange-400" },
                    { state: "Wisconsin", suits: "Growing", entities: "Medium", risk: "Rising", color: "text-yellow-400" },
                    { state: "Missouri", suits: "85 (+143%)", entities: "Medium", risk: "Shifting", color: "text-yellow-400" },
                    { state: "Utah", suits: "Moderate", entities: "Medium", risk: "Changing", color: "text-yellow-400" },
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-4 p-4 text-sm border-t border-slate-700 bg-slate-800/50">
                      <div className="text-white font-medium">{row.state}</div>
                      <div className="text-slate-300">{row.suits}</div>
                      <div className="text-slate-300">{row.entities}</div>
                      <div className={`font-semibold ${row.color}`}>{row.risk}</div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-slate-300">
                Utah and Missouri are notably pushing <strong className="text-white">anti-ADA lawsuit legislation</strong>.
                Utah's SB 68 creates a 90-day safe harbor for businesses that remediate after receiving complaints, while
                Missouri has introduced 9 bills targeting what legislators call "abusive" litigation. However, these state
                laws do not override federal ADA Title II requirements for government entities.
              </p>
              <p className="text-slate-300 text-sm">
                For legislative analysis, see our{" "}
                <Link href="/blog/ada-lawsuit-reform-2026" className="text-sky-400 hover:text-sky-300">
                  ADA lawsuit reform guide
                </Link>.
              </p>

              {/* Section 7 - Overlays */}
              <h2 id="overlays" className="text-2xl font-bold text-white mt-12 scroll-mt-20">⚠️ Accessibility Overlays Won't Save You</h2>
              <div className="not-prose rounded-xl border border-red-500/30 bg-red-500/5 p-6 mt-4 mb-8">
                <p className="text-slate-300">
                  In 2025, the FTC fined accessiBe — the largest accessibility overlay provider — <strong className="text-white">$1 million</strong> for
                  deceptive compliance claims. Cox Media Group's ongoing investigation (now airing across 9+ TV stations in 7 markets)
                  has explicitly connected overlay failures to continued lawsuits. The narrative is clear: overlays don't work.
                </p>
                <div className="mt-4 space-y-2 text-sm text-slate-300">
                  <p>→ <strong className="text-white">30%</strong> of ADA lawsuits in 2024 involved websites using overlay widgets</p>
                  <p>→ The National Federation of the Blind has formally <strong className="text-white">opposed overlays</strong> as harmful to accessibility</p>
                  <p>→ Courts have <strong className="text-white">consistently ruled</strong> that overlays do not constitute WCAG compliance</p>
                  <p>→ The DOJ rule specifically requires <strong className="text-white">conformance with WCAG 2.1 AA technical standards</strong> — not the use of any widget</p>
                </div>
                <p className="text-slate-300 mt-4 text-sm">
                  Government entities using overlays are not just non-compliant — they may actually be creating <em>additional</em>{" "}
                  accessibility barriers that make lawsuits more likely. Read our full analysis:{" "}
                  <Link href="/blog/accessibility-widgets" className="text-sky-400 hover:text-sky-300">
                    Accessibility Widgets: Do They Actually Work?
                  </Link>
                </p>
              </div>

              {/* Section 8 - Cost */}
              <h2 id="cost-of-waiting" className="text-2xl font-bold text-white mt-12 scroll-mt-20">The True Cost of Waiting</h2>
              <p className="text-slate-300">
                Every day you wait, the risk compounds and the cost increases. Here's the real math:
              </p>

              <div className="not-prose mt-4 mb-8">
                <div className="rounded-xl border border-slate-700 overflow-hidden">
                  <div className="grid grid-cols-3 bg-slate-800 p-4 font-semibold text-sm text-slate-300">
                    <div>Scenario</div>
                    <div>Cost Range</div>
                    <div>Timeline</div>
                  </div>
                  {[
                    { scenario: "Proactive: automated scanning + remediation", cost: "$348–$25,000/yr", time: "2–8 weeks", highlight: false },
                    { scenario: "Reactive: DOJ investigation + consent decree", cost: "$50,000–$200,000", time: "6–24 months", highlight: false },
                    { scenario: "Reactive: private lawsuit + settlement", cost: "$52,000–$89,000", time: "3–12 months", highlight: true },
                    { scenario: "Reactive: serial plaintiff targeting", cost: "$75,000–$300,000+", time: "3–18 months", highlight: true },
                    { scenario: "Worst case: class action", cost: "$500,000+", time: "1–3 years", highlight: true },
                    { scenario: "Compounding: loss of federal funding", cost: "Millions (varies)", time: "Ongoing", highlight: true },
                  ].map((row, i) => (
                    <div key={i} className={`grid grid-cols-3 p-4 text-sm border-t border-slate-700 ${
                      row.highlight ? "bg-red-500/5" : "bg-slate-800/50"
                    }`}>
                      <div className="text-slate-300">{row.scenario}</div>
                      <div className={row.highlight ? "text-red-400 font-semibold" : "text-green-400 font-semibold"}>{row.cost}</div>
                      <div className="text-slate-400">{row.time}</div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-slate-300">
                The math is unambiguous. An annual subscription to an accessibility monitoring tool costs less
                than <strong className="text-white">1% of a single settlement</strong>. Yet 94.8% of government
                websites still fail basic WCAG checks. The gap between compliance cost and non-compliance cost is
                the widest it's ever been.
              </p>

              {/* Section 9 - Playbook */}
              <h2 id="playbook" className="text-2xl font-bold text-white mt-12 scroll-mt-20">Your {weeksLeft}-Week Compliance Playbook</h2>
              <p className="text-slate-300">
                With {daysLeft} days remaining, there's still time to achieve meaningful compliance — but you must
                start now. Here's a phased approach:
              </p>

              <div className="not-prose space-y-4 mt-4 mb-8">
                {[
                  {
                    week: "Week 1–2",
                    title: "Audit & Assess",
                    urgency: "Start immediately",
                    tasks: [
                      "Run an automated accessibility scan of your entire website — RatedWithAI scans any page in under 60 seconds",
                      "Identify your top 10 most-visited pages and prioritize those for manual review",
                      "Catalog all PDF documents and digital forms — these are the #1 government-specific failure point",
                      "Audit third-party embedded systems (payment portals, GIS maps, permitting software)",
                      "Assign an internal accessibility coordinator and brief leadership on the deadline and risk",
                    ],
                  },
                  {
                    week: "Week 3–4",
                    title: "Fix Critical Issues (Quick Wins)",
                    urgency: "High-impact, low-effort",
                    tasks: [
                      "Add meaningful alt text to all images (fixes WCAG 1.1.1 — affects 58% of sites)",
                      "Fix color contrast ratios to meet 4.5:1 minimum (fixes WCAG 1.4.3 — the #1 WCAG failure)",
                      "Add proper labels to all form inputs (fixes WCAG 4.1.2 — makes online services usable)",
                      "Add the lang attribute to all HTML pages (fixes WCAG 3.1.1 — a 30-second fix per template)",
                      "Replace 'click here' links with descriptive text (fixes WCAG 2.4.4)",
                    ],
                  },
                  {
                    week: "Week 5–6",
                    title: "Address Remaining Issues",
                    urgency: "Complex but critical",
                    tasks: [
                      "Remediate PDF documents — convert scanned images to tagged, accessible PDFs (or provide HTML alternatives)",
                      "Add captions to all video content — particularly public meeting recordings and emergency announcements",
                      "Ensure full keyboard accessibility for all interactive elements (menus, modals, forms, carousels)",
                      "Fix heading hierarchy and ARIA landmarks for proper page structure",
                      "Test all online services end-to-end with keyboard-only navigation",
                    ],
                  },
                  {
                    week: `Week 7–${weeksLeft}`,
                    title: "Verify, Document & Monitor",
                    urgency: "Before the deadline",
                    tasks: [
                      "Run a final automated scan to verify fixes and measure improvement",
                      "Conduct manual testing with real assistive technologies (NVDA, JAWS, VoiceOver)",
                      "Publish an accessibility statement on your website (demonstrates good faith commitment)",
                      "Create a VPAT (Voluntary Product Accessibility Template) documenting your compliance status",
                      "Set up ongoing monitoring — compliance must be maintained continuously, not just achieved once",
                    ],
                  },
                ].map((phase) => (
                  <div key={phase.week} className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-sm font-medium px-3 py-1 rounded-full bg-sky-500/20 text-sky-400">{phase.week}</span>
                      <h3 className="font-bold text-white">{phase.title}</h3>
                    </div>
                    <p className="text-xs text-slate-500 mb-3">{phase.urgency}</p>
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

              <p className="text-slate-300 text-sm">
                For a detailed checklist, see our{" "}
                <Link href="/blog/ada-compliance-checklist-2026" className="text-sky-400 hover:text-sky-300">
                  ADA Compliance Checklist 2026
                </Link>{" "}
                and{" "}
                <Link href="/blog/ada-title-ii-compliance-guide" className="text-sky-400 hover:text-sky-300">
                  ADA Title II Compliance Guide
                </Link>.
              </p>

              {/* Section 10 - Tax Credit */}
              <h2 id="tax-credit" className="text-2xl font-bold text-white mt-12 scroll-mt-20">The Tax Credit Most Entities Don't Know About: IRS Form 8826</h2>
              <p className="text-slate-300">
                Small businesses and government contractors can claim the <strong className="text-white">Disabled Access Credit</strong> (IRS
                Form 8826) — up to <strong className="text-white">$5,000 per year</strong> to offset the cost of accessibility improvements.
                This makes a tool like RatedWithAI (starting at $29/month, or $348/year) effectively <strong className="text-white">free
                after the tax benefit</strong> — the credit covers more than 14x the annual cost.
              </p>
              <p className="text-slate-300">
                Eligible expenses include:
              </p>
              <ul className="text-slate-300 space-y-1">
                <li>Website accessibility audits and scanning tools</li>
                <li>Remediation work (developer hours, consulting)</li>
                <li>Assistive technology purchases</li>
                <li>Accessibility training for staff</li>
                <li>PDF remediation and document conversion</li>
              </ul>
              <p className="text-slate-300">
                The credit covers 50% of eligible expenditures between $250 and $10,250. With tax season coinciding
                with the ADA deadline, this is the optimal time to invest in compliance and claim the credit.
              </p>

              {/* Section 11 - How to Check */}
              <h2 id="check-compliance" className="text-2xl font-bold text-white mt-12 scroll-mt-20">How to Check Your Compliance Status Right Now</h2>
              <p className="text-slate-300">
                RatedWithAI provides AI-powered accessibility scanning that identifies WCAG 2.1 AA violations with
                plain-language explanations and prioritized fix recommendations. Unlike overlay widgets that claim to
                "fix" accessibility automatically, our scanner analyzes your actual code to find real issues.
              </p>

              <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 mb-8">
                {[
                  { title: "Instant WCAG 2.1 AA Audit", desc: "Scan any page in under 60 seconds. Get violation counts, severity ratings, and an overall compliance score." },
                  { title: "Plain-Language Fix Guides", desc: "Every violation includes step-by-step instructions that non-technical staff can follow — no developer required for many fixes." },
                  { title: "Ongoing Monitoring", desc: "Weekly or daily scans detect regressions before they become lawsuit triggers. The DOJ requires ongoing compliance, not just a one-time fix." },
                  { title: "Compliance Documentation", desc: "Generate reports for stakeholders, auditors, and legal teams to demonstrate progress and good faith effort." },
                ].map((feature) => (
                  <div key={feature.title} className="rounded-lg border border-sky-500/20 bg-sky-500/5 p-5">
                    <h3 className="font-semibold text-white">{feature.title}</h3>
                    <p className="text-sm text-slate-400 mt-2">{feature.desc}</p>
                  </div>
                ))}
              </div>

              <div className="not-prose rounded-xl border border-sky-500/30 bg-sky-500/5 p-8 text-center mt-8 mb-8">
                <h3 className="text-2xl font-bold text-white">{daysLeft} Days. Don't Wait Until It's Too Late.</h3>
                <p className="text-slate-300 mt-3 max-w-2xl mx-auto">
                  The compliance window is closing. Start with a free scan to see exactly where your government
                  website stands — it takes less than 60 seconds and requires no sign-up.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/#scanner"
                    className="rounded-lg bg-sky-500 px-8 py-3 font-semibold text-white hover:bg-sky-400 transition-colors"
                  >
                    Free Accessibility Scan →
                  </Link>
                  <Link
                    href="/pricing"
                    className="rounded-lg border border-slate-600 px-8 py-3 font-semibold text-slate-300 hover:border-slate-400 transition-colors"
                  >
                    View Monitoring Plans
                  </Link>
                </div>
              </div>

              {/* Section 12 - FAQ */}
              <h2 id="faq" className="text-2xl font-bold text-white mt-12 scroll-mt-20">Frequently Asked Questions</h2>

              <div className="not-prose space-y-4 mt-4 mb-8">
                {[
                  {
                    q: "When is the ADA Title II deadline?",
                    a: "April 24, 2026, for state and local government entities serving populations of 50,000 or more. Smaller entities (under 50,000) and special district governments have until April 26, 2027.",
                  },
                  {
                    q: "What happens if my government website isn't compliant by April 24, 2026?",
                    a: "Non-compliant entities face DOJ enforcement actions, private ADA lawsuits (average government entity settlement: $52,000–$89,000 based on 2024 Texas data), consent decrees with ongoing monitoring, and potential loss of federal funding under Section 504 of the Rehabilitation Act.",
                  },
                  {
                    q: "Does the DOJ's February 2026 interim rule filing change the deadline?",
                    a: "Not yet. The DOJ submitted an Interim Final Rule to OIRA on February 13, 2026 to modify — not repeal — the rule. Potential changes include cost-reduction measures and small-jurisdiction exemptions. But the April 24 deadline and WCAG 2.1 AA requirement remain in effect until officially changed. Do not delay compliance based on speculation.",
                  },
                  {
                    q: "Do accessibility overlays make my government website compliant?",
                    a: "No. Courts have consistently ruled that overlays do not constitute WCAG compliance. The FTC fined accessiBe $1 million in 2025 for deceptive compliance claims. 30% of ADA lawsuits in 2024 involved websites using overlay widgets. The DOJ rule requires conformance with WCAG 2.1 AA — not the use of any widget or overlay.",
                  },
                  {
                    q: "Does the rule apply to third-party vendor systems on our website?",
                    a: "Yes. The government entity is legally responsible for all digital content, including third-party vendor systems like payment portals, GIS tools, and permitting software. Vendor promises of 'ADA compliance' don't transfer legal liability.",
                  },
                  {
                    q: "Can we claim a tax credit for compliance costs?",
                    a: "Yes. The Disabled Access Credit (IRS Form 8826) provides up to $5,000 per year to offset accessibility improvement costs. It covers 50% of eligible expenditures between $250 and $10,250, including scanning tools, audits, remediation, and training.",
                  },
                  {
                    q: "What's the difference between Title II and Title III?",
                    a: "Title II applies to state and local government entities. Title III applies to private businesses (places of public accommodation). The April 24, 2026 deadline is specifically for Title II. Title III lawsuits against private businesses have been growing since 2017 and don't depend on a specific deadline.",
                  },
                  {
                    q: "We're a small government entity under 50,000 — should we start now?",
                    a: "Absolutely. Your deadline is April 26, 2027, but starting early gives you 14 months to achieve compliance instead of scrambling. Smart smaller entities are beginning now while larger entities absorb the initial compliance costs and establish best practices you can learn from.",
                  },
                ].map((item, i) => (
                  <details key={i} className="rounded-lg border border-slate-700 bg-slate-800/50 group">
                    <summary className="p-4 cursor-pointer font-semibold text-white hover:text-sky-400 transition-colors flex items-center justify-between">
                      <span>{item.q}</span>
                      <span className="text-slate-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-4 pb-4 text-sm text-slate-300 border-t border-slate-700 pt-3">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>

              {/* Resources */}
              <h2 className="text-2xl font-bold text-white mt-12">Key Resources</h2>
              <div className="not-prose space-y-2 mt-4 mb-8">
                {[
                  { label: "DOJ Final Rule (28 CFR Part 35)", url: "https://www.ada.gov/law-and-regs/regulations/title-ii-web-app-rule/" },
                  { label: "DOJ First Steps Guide for Government Entities", url: "https://www.ada.gov/resources/web-rule-first-steps/" },
                  { label: "DOJ Small Entity Compliance Guide", url: "https://www.ada.gov/resources/small-entity-compliance-guide/" },
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

              {/* Related reading */}
              <div className="not-prose mt-8 pt-8 border-t border-slate-700">
                <h3 className="font-semibold text-white mb-3">Related Reading</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  {[
                    { label: "ADA Title II Compliance Guide", href: "/blog/ada-title-ii-compliance-guide" },
                    { label: "DOJ Signals Title II Rule Changes", href: "/blog/doj-ada-title-ii-rule-changes-2026" },
                    { label: "ADA Website Lawsuit Statistics 2026", href: "/blog/ada-website-lawsuit-statistics-2026" },
                    { label: "ADA Lawsuit Settlements 2026", href: "/blog/ada-lawsuit-settlements-2026" },
                    { label: "ADA Compliance Checklist 2026", href: "/blog/ada-compliance-checklist-2026" },
                    { label: "Utah & Missouri Anti-ADA Bills", href: "/blog/ada-lawsuit-reform-2026" },
                    { label: "Fashion Nova DOJ Settlement Rejected", href: "/blog/fashion-nova-doj-settlement-rejected-2026" },
                    { label: "Accessibility Widgets: Do They Work?", href: "/blog/accessibility-widgets" },
                    { label: "Higher Education ADA Compliance", href: "/blog/higher-education-ada-compliance-2026" },
                    { label: "School District Website Compliance", href: "/blog/school-district-website-ada-compliance-2026" },
                    { label: "NASCIO State ADA Compliance Report", href: "/blog/nascio-state-ada-compliance-2025-report" },
                    { label: "Government Compliance Cost Comparison", href: "/blog/government-accessibility-compliance-cost-comparison-2026" },
                  ].map((link) => (
                    <Link key={link.href} href={link.href} className="text-sky-400 hover:text-sky-300 transition-colors py-0.5">
                      → {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}
