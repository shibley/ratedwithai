/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title:
    "Canada's Accessible Canada Act: Digital Accessibility Deadlines 2027-2028 | RatedWithAI",
  description:
    "Canada's Accessible Canada Act mandates WCAG 2.1 AA compliance by December 2027-2028 for federally regulated organizations. Complete guide covering deadlines, CAN/ASC-EN 301 549 standard, and what US businesses with Canadian operations need to know.",
  openGraph: {
    title:
      "Canada's Accessible Canada Act: Digital Accessibility Deadlines 2027-2028",
    description:
      "Banks, airlines, telecoms, and broadcasters face enforceable digital accessibility deadlines under Canada's ACA. Here's the complete timeline and compliance guide.",
    type: "article",
    publishedTime: "2026-02-28T00:00:00.000Z",
    authors: ["RatedWithAI Team"],
  },
  keywords: [
    "accessible canada act",
    "accessible canada act deadlines",
    "aca digital accessibility",
    "canada wcag compliance",
    "can asc en 301 549",
    "canada accessibility law",
    "canadian accessibility requirements",
    "canada website accessibility",
    "accessible canada act 2027",
    "federally regulated accessibility canada",
    "canada digital accessibility standard",
    "accessible canada act compliance",
    "canada ada equivalent",
    "canadian human rights act accessibility",
    "canada accessibility regulations 2028",
  ],
  alternates: {
    canonical:
      "https://ratedwithai.com/blog/canada-accessible-canada-act-digital-accessibility-2027",
  },
};

export default function CanadaAccessibleCanadaActPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline:
      "Canada's Accessible Canada Act: Digital Accessibility Deadlines 2027-2028",
    description:
      "Complete guide to Canada's Accessible Canada Act digital accessibility requirements, covering CAN/ASC-EN 301 549, WCAG 2.1 AA deadlines, and compliance requirements for federally regulated organizations.",
    datePublished: "2026-02-28T00:00:00.000Z",
    dateModified: "2026-02-28T00:00:00.000Z",
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

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the Accessible Canada Act?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Accessible Canada Act (ACA), also known as Bill C-81, is Canada's federal accessibility legislation enacted in 2019. It aims to create a barrier-free Canada by 2040, with enforceable digital accessibility requirements phased in between 2027 and 2028 for federally regulated organizations including banks, airlines, telecommunications companies, and broadcasters.",
        },
      },
      {
        "@type": "Question",
        name: "When do Canadian digital accessibility deadlines take effect?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "There are two key deadlines: December 5, 2027 for federal government websites and mandatory accessibility training, and December 5, 2028 for federally regulated private sector organizations to achieve conformity for public-facing websites, mobile apps, digital documents, and procurement processes. Annual progress reports are due starting June 1, 2026.",
        },
      },
      {
        "@type": "Question",
        name: "What accessibility standard does Canada use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Canada adopted CAN/ASC-EN 301 549 in May 2024, which is a direct adoption of the European standard EN 301 549 v3.2.1. This standard incorporates WCAG 2.1 Level AA as its web accessibility requirement, plus additional requirements for software, hardware, and documentation. An update to include WCAG 2.2 is expected in 2026.",
        },
      },
      {
        "@type": "Question",
        name: "Who must comply with Canada's digital accessibility requirements?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The ACA applies to federally regulated organizations in Canada, including the federal government, banks and financial institutions, airlines and transportation companies, telecommunications providers, broadcasting companies, and interprovincial or international businesses. Organizations are categorized by size: large (500+ employees), medium (100-499), and small (10-99), with different timeline requirements.",
        },
      },
      {
        "@type": "Question",
        name: "How does Canada's accessibility law compare to the ADA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unlike the Americans with Disabilities Act (ADA), which relies on litigation and court interpretations for web accessibility, Canada's ACA takes a proactive regulatory approach with specific technical standards (CAN/ASC-EN 301 549) and enforceable deadlines. The ACA also has a dedicated Accessibility Commissioner for enforcement, whereas ADA enforcement depends on DOJ action or private lawsuits.",
        },
      },
      {
        "@type": "Question",
        name: "Does the Accessible Canada Act affect US businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, if your US business operates in federally regulated sectors in Canada, serves Canadian customers through Canadian subsidiaries, or provides digital services to Canadian federal government agencies. Even if you're not directly regulated, accessibility is increasingly a procurement requirement for doing business with Canadian organizations.",
        },
      },
      {
        "@type": "Question",
        name: "What is CAN/ASC-EN 301 549?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CAN/ASC-EN 301 549 is Canada's national ICT accessibility standard, adopted in May 2024. It is a direct adoption of the European standard EN 301 549 v3.2.1, which includes WCAG 2.1 Level AA for web content plus additional accessibility requirements for software applications, hardware, documentation, and support services. It covers websites, mobile apps, electronic documents, and ICT procurement.",
        },
      },
      {
        "@type": "Question",
        name: "What are the penalties for non-compliance with the Accessible Canada Act?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Accessibility Commissioner can issue compliance orders, impose administrative monetary penalties (AMPs) of up to $250,000 per violation, and publish the names of non-compliant organizations. Unlike the US litigation-driven model, enforcement is primarily through regulatory action rather than private lawsuits, though individuals can also file complaints to the Canadian Human Rights Commission.",
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
          <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-red-500/30 via-red-500/10 to-white/10 blur-3xl" />
          <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-gradient-to-tr from-red-500/20 via-white/10 to-red-500/20 blur-3xl" />

          <Header />

          <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-14 pt-4">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              International Compliance
            </p>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              Canada's Accessible Canada Act: Digital Accessibility Deadlines
              2027–2028
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              Canada is now the third major English-speaking market with
              enforceable digital accessibility deadlines — joining the{" "}
              <Link
                href="/blog/ada-title-ii-deadline-countdown-2026"
                className="text-sky-400 hover:text-sky-300 underline"
              >
                United States (April 2026)
              </Link>{" "}
              and the{" "}
              <Link
                href="/blog/european-accessibility-act-eaa-compliance-us-businesses"
                className="text-sky-400 hover:text-sky-300 underline"
              >
                European Union (June 2025)
              </Link>
              . If your organization operates in Canada's federally regulated
              sectors, the clock is ticking. Here's everything you need to
              know.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
              <time dateTime="2026-02-28">February 28, 2026</time>
              <span>·</span>
              <span>14 min read</span>
            </div>
          </section>
        </div>

        <article className="mx-auto w-full max-w-4xl space-y-10 px-6 pb-24 text-slate-200">
          {/* Key Takeaways */}
          <section className="rounded-3xl border-2 border-red-500/50 bg-red-950/30 p-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20 text-2xl">
                🍁
              </span>
              <h2 className="text-2xl font-bold text-red-300">
                Key Takeaways
              </h2>
            </div>
            <ul className="space-y-3 text-lg text-red-100">
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-300 text-sm font-bold">
                  1
                </span>
                <span>
                  <strong>December 5, 2027:</strong> Federal government
                  websites and mandatory accessibility training for all staff
                  in digital roles
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-300 text-sm font-bold">
                  2
                </span>
                <span>
                  <strong>December 5, 2028:</strong> Public-facing websites,
                  mobile apps, digital documents, and procurement must conform
                  for large and medium federally regulated organizations
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-300 text-sm font-bold">
                  3
                </span>
                <span>
                  Canada adopted <strong>CAN/ASC-EN 301 549</strong> — the
                  same European standard (EN 301 549) that includes WCAG 2.1
                  AA
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-300 text-sm font-bold">
                  4
                </span>
                <span>
                  Applies to banks, airlines, telecoms, broadcasters, and all
                  federally regulated employers — <strong>some of
                  Canada's largest organizations</strong>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-300 text-sm font-bold">
                  5
                </span>
                <span>
                  Penalties up to <strong>$250,000 per violation</strong>,
                  enforced by Canada's Accessibility Commissioner — not
                  through private lawsuits
                </span>
              </li>
            </ul>
          </section>

          {/* TOC */}
          <nav className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6">
            <h2 className="text-lg font-bold text-white mb-4">
              📋 In This Article
            </h2>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#what-is-aca" className="hover:text-sky-400 transition-colors">
                  1. What Is the Accessible Canada Act?
                </a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-sky-400 transition-colors">
                  2. The Complete Digital Accessibility Timeline
                </a>
              </li>
              <li>
                <a href="#who-must-comply" className="hover:text-sky-400 transition-colors">
                  3. Who Must Comply
                </a>
              </li>
              <li>
                <a href="#standard" className="hover:text-sky-400 transition-colors">
                  4. The Technical Standard: CAN/ASC-EN 301 549
                </a>
              </li>
              <li>
                <a href="#vs-ada" className="hover:text-sky-400 transition-colors">
                  5. Canada vs. US vs. EU: How the Laws Compare
                </a>
              </li>
              <li>
                <a href="#us-businesses" className="hover:text-sky-400 transition-colors">
                  6. What US Businesses Need to Know
                </a>
              </li>
              <li>
                <a href="#compliance-roadmap" className="hover:text-sky-400 transition-colors">
                  7. Compliance Roadmap: From Now to December 2028
                </a>
              </li>
              <li>
                <a href="#enforcement" className="hover:text-sky-400 transition-colors">
                  8. Enforcement and Penalties
                </a>
              </li>
              <li>
                <a href="#provinces" className="hover:text-sky-400 transition-colors">
                  9. Provincial Laws: Beyond Federal Regulation
                </a>
              </li>
              <li>
                <a href="#global" className="hover:text-sky-400 transition-colors">
                  10. The Global Accessibility Convergence
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-sky-400 transition-colors">
                  11. Frequently Asked Questions
                </a>
              </li>
            </ul>
          </nav>

          {/* What Is the ACA */}
          <section id="what-is-aca" className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              What Is the Accessible Canada Act?
            </h2>
            <p className="text-lg leading-relaxed">
              The <strong>Accessible Canada Act</strong> (ACA), formally known
              as Bill C-81, was enacted on June 21, 2019. Its stated goal is
              ambitious: to create a barrier-free Canada by January 1, 2040.
              The legislation establishes a framework for proactively
              identifying, removing, and preventing accessibility barriers
              across seven priority areas:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: "💼", area: "Employment" },
                { icon: "🏗️", area: "Built Environment" },
                { icon: "💻", area: "Information and Communication Technologies (ICT)" },
                { icon: "📡", area: "Communication (other than ICT)" },
                { icon: "🛒", area: "Procurement of Goods, Services, and Facilities" },
                { icon: "🚆", area: "Transportation" },
                { icon: "🎨", area: "Design and Delivery of Programs and Services" },
              ].map((item) => (
                <div
                  key={item.area}
                  className="flex items-center gap-3 rounded-xl border border-slate-800/60 bg-slate-900/50 p-3"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm text-slate-300">{item.area}</span>
                </div>
              ))}
            </div>
            <p className="text-lg leading-relaxed">
              For digital accessibility specifically, the ACA's Phase 1
              regulations — the <strong>Accessible Canada Regulations
              (SOR/2021-241)</strong> — set enforceable requirements for ICT,
              including websites, mobile applications, electronic documents,
              and digital procurement. These requirements move from
              planning (now) to technical conformity (2027–2028).
            </p>
            <p className="text-lg leading-relaxed">
              Unlike the{" "}
              <Link
                href="/blog/ada-website-lawsuit-statistics-2026"
                className="text-sky-400 hover:text-sky-300 underline"
              >
                US approach to web accessibility
              </Link>
              , which has evolved primarily through litigation and DOJ
              enforcement actions, Canada's framework is proactive and
              regulatory. Organizations don't wait to be sued — they're
              required to assess barriers, publish accessibility plans, and
              report progress on defined schedules.
            </p>
          </section>

          {/* Timeline */}
          <section id="timeline" className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              The Complete Digital Accessibility Timeline
            </h2>
            <p className="text-lg leading-relaxed">
              Here's the phase-by-phase breakdown of when digital accessibility
              requirements take effect under the ACA:
            </p>

            {/* Already passed */}
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/30 text-emerald-300 text-sm font-bold">
                  ✓
                </span>
                <h3 className="text-xl font-bold text-emerald-300">
                  Already in Effect
                </h3>
              </div>
              <div className="space-y-3 text-lg text-slate-300">
                <div className="flex gap-4">
                  <span className="text-slate-500 w-28 flex-shrink-0 font-mono text-sm mt-1">
                    June 2019
                  </span>
                  <span>ACA receives Royal Assent — law enacted</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-slate-500 w-28 flex-shrink-0 font-mono text-sm mt-1">
                    Dec 2021
                  </span>
                  <span>
                    Phase 1 Accessible Canada Regulations published —
                    accessibility plans and feedback processes required
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-slate-500 w-28 flex-shrink-0 font-mono text-sm mt-1">
                    May 2024
                  </span>
                  <span>
                    <strong>CAN/ASC-EN 301 549</strong> adopted as Canada's
                    national ICT accessibility standard
                  </span>
                </div>
              </div>
            </div>

            {/* June 2026 */}
            <div className="rounded-2xl border border-amber-500/30 bg-amber-950/20 p-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/30 text-amber-300 text-sm font-bold">
                  ⏰
                </span>
                <h3 className="text-xl font-bold text-amber-300">
                  June 1, 2026 — Annual Progress Reports Due
                </h3>
              </div>
              <p className="text-lg text-slate-300">
                All federally regulated organizations (including private sector)
                must submit annual progress reports describing their
                accessibility efforts, barriers identified, and actions taken.
                This is a reporting requirement — not yet a technical conformity
                mandate — but it signals that organizations should already be
                assessing their digital accessibility posture.
              </p>
            </div>

            {/* December 2027 */}
            <div className="rounded-2xl border border-sky-500/30 bg-sky-950/20 p-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/30 text-sky-300 text-sm font-bold">
                  📅
                </span>
                <h3 className="text-xl font-bold text-sky-300">
                  December 5, 2027 — Training + Government Websites
                </h3>
              </div>
              <div className="space-y-3 text-lg text-slate-300">
                <p>
                  <strong>Mandatory accessibility training</strong> for all
                  staff in roles involving design, development, procurement,
                  or management of ICT. This includes developers, designers,
                  content creators, and procurement officers.
                </p>
                <p>
                  <strong>Federal government websites and web
                  applications</strong> must conform to CAN/ASC-EN 301 549
                  (which includes WCAG 2.1 Level AA). Government leads by
                  example before the private sector deadline.
                </p>
              </div>
            </div>

            {/* December 2028 */}
            <div className="rounded-2xl border border-rose-500/30 bg-rose-950/20 p-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-500/30 text-rose-300 text-sm font-bold">
                  🔴
                </span>
                <h3 className="text-xl font-bold text-rose-300">
                  December 5, 2028 — Full Private Sector Conformity
                </h3>
              </div>
              <div className="space-y-3 text-lg text-slate-300">
                <p>
                  This is the big deadline. Federally regulated private sector
                  organizations (large and medium) must achieve conformity
                  across:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex gap-3">
                    <span className="text-rose-400">▸</span>
                    <span>
                      <strong>Public-facing websites and web
                      applications</strong> — must conform to CAN/ASC-EN 301
                      549
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-rose-400">▸</span>
                    <span>
                      <strong>Digital documents</strong> — PDFs, Word
                      documents, spreadsheets published digitally must be
                      accessible
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-rose-400">▸</span>
                    <span>
                      <strong>New mobile applications</strong> — any app
                      launched after this date must be accessible
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-rose-400">▸</span>
                    <span>
                      <strong>Legacy mobile applications</strong> — existing
                      apps must undergo a conformity assessment
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-rose-400">▸</span>
                    <span>
                      <strong>Procurement</strong> — ICT procurement processes
                      must demand accessibility conformance reports (ACRs/VPATs)
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6">
              <h3 className="text-lg font-bold text-white mb-4">
                Timeline at a Glance
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="text-center p-4 rounded-xl bg-slate-800/40">
                  <p className="text-2xl font-bold text-amber-400">Jun 26</p>
                  <p className="text-sm text-slate-400 mt-1">
                    Progress reports
                  </p>
                </div>
                <div className="text-center p-4 rounded-xl bg-slate-800/40">
                  <p className="text-2xl font-bold text-sky-400">Dec 27</p>
                  <p className="text-sm text-slate-400 mt-1">
                    Training + gov sites
                  </p>
                </div>
                <div className="text-center p-4 rounded-xl bg-slate-800/40">
                  <p className="text-2xl font-bold text-rose-400">Dec 28</p>
                  <p className="text-sm text-slate-400 mt-1">
                    Full conformity
                  </p>
                </div>
                <div className="text-center p-4 rounded-xl bg-slate-800/40">
                  <p className="text-2xl font-bold text-emerald-400">2040</p>
                  <p className="text-sm text-slate-400 mt-1">
                    Barrier-free Canada
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Who Must Comply */}
          <section id="who-must-comply" className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Who Must Comply
            </h2>
            <p className="text-lg leading-relaxed">
              The ACA applies to <strong>federally regulated
              organizations</strong> — entities that fall under federal
              jurisdiction rather than provincial. This covers a significant
              slice of Canada's economy:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-5 space-y-2">
                <p className="text-2xl">🏦</p>
                <h3 className="font-bold text-white">
                  Banks & Financial Institutions
                </h3>
                <p className="text-slate-300">
                  All chartered banks (RBC, TD, BMO, Scotiabank, CIBC, National
                  Bank), trust companies, and federal credit unions. The
                  Big Five banks alone serve 80%+ of Canadians.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-5 space-y-2">
                <p className="text-2xl">✈️</p>
                <h3 className="font-bold text-white">
                  Airlines & Transportation
                </h3>
                <p className="text-slate-300">
                  Air Canada, WestJet, Porter Airlines, and all
                  interprovincial/international transportation providers
                  including railways (VIA Rail, CN, CP) and marine shipping.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-5 space-y-2">
                <p className="text-2xl">📱</p>
                <h3 className="font-bold text-white">
                  Telecommunications
                </h3>
                <p className="text-slate-300">
                  Bell, Rogers, Telus, Shaw/Freedom Mobile, Videotron, and
                  all federally regulated telecom and internet service
                  providers. Also includes broadcasting undertakings (CBC,
                  CTV, Global).
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-5 space-y-2">
                <p className="text-2xl">🏛️</p>
                <h3 className="font-bold text-white">
                  Federal Government
                </h3>
                <p className="text-slate-300">
                  All federal departments, agencies, Crown corporations, and
                  the Canadian Armed Forces. Parliament itself is also
                  covered. Government websites have the earlier December 2027
                  deadline.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-5 space-y-2">
                <p className="text-2xl">⚡</p>
                <h3 className="font-bold text-white">
                  Energy & Extractives
                </h3>
                <p className="text-slate-300">
                  Interprovincial pipelines, nuclear energy, and federally
                  regulated energy companies. Includes major employers like
                  Canada Post.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-5 space-y-2">
                <p className="text-2xl">🌐</p>
                <h3 className="font-bold text-white">
                  Interprovincial Businesses
                </h3>
                <p className="text-slate-300">
                  Any business that operates across provincial or international
                  borders in a federally regulated sector. This can include
                  some technology companies depending on their structure.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-3">
              <h3 className="text-xl font-bold text-white">
                Organization Size Tiers
              </h3>
              <p className="text-slate-300">
                The ACA differentiates requirements by organization size:
              </p>
              <div className="space-y-3">
                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-rose-500/20 text-rose-300 font-bold text-sm">
                    L
                  </div>
                  <div>
                    <p className="font-semibold text-white">
                      Large: 500+ employees
                    </p>
                    <p className="text-slate-400">
                      Full compliance required by December 2028. Must publish
                      accessibility plans and annual progress reports.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-amber-300 font-bold text-sm">
                    M
                  </div>
                  <div>
                    <p className="font-semibold text-white">
                      Medium: 100–499 employees
                    </p>
                    <p className="text-slate-400">
                      Same December 2028 deadline for digital conformity.
                      Slightly reduced planning and reporting requirements.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-bold text-sm">
                    S
                  </div>
                  <div>
                    <p className="font-semibold text-white">
                      Small: 10–99 employees
                    </p>
                    <p className="text-slate-400">
                      Reduced requirements with longer timelines. Still must
                      establish feedback processes and eventually meet digital
                      accessibility standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Standard */}
          <section id="standard" className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              The Technical Standard: CAN/ASC-EN 301 549
            </h2>
            <p className="text-lg leading-relaxed">
              In May 2024, Canada adopted <strong>CAN/ASC-EN 301
              549</strong> as its national ICT accessibility standard. This is
              a direct adoption of the European standard{" "}
              <strong>EN 301 549 v3.2.1</strong> — the same technical standard
              that underpins the{" "}
              <Link
                href="/blog/european-accessibility-act-eaa-compliance-us-businesses"
                className="text-sky-400 hover:text-sky-300 underline"
              >
                European Accessibility Act (EAA)
              </Link>
              . This means compliance efforts can be shared across multiple
              jurisdictions.
            </p>

            <div className="rounded-2xl border border-sky-500/30 bg-sky-950/20 p-6 space-y-4">
              <h3 className="text-xl font-bold text-sky-300">
                What CAN/ASC-EN 301 549 Covers
              </h3>
              <div className="space-y-3 text-lg">
                <div className="flex gap-4">
                  <span className="text-sky-400 mt-1 flex-shrink-0">🌐</span>
                  <div>
                    <p className="font-semibold text-white">Web Content</p>
                    <p className="text-slate-300">
                      Must conform to <strong>WCAG 2.1 Level AA</strong> —
                      the same standard referenced by the{" "}
                      <Link
                        href="/blog/ada-title-ii-compliance-guide"
                        className="text-sky-400 hover:text-sky-300 underline"
                      >
                        ADA Title II rule
                      </Link>{" "}
                      and the EAA. This covers all web pages, web applications,
                      and web-based content.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-sky-400 mt-1 flex-shrink-0">📱</span>
                  <div>
                    <p className="font-semibold text-white">
                      Software & Mobile Apps
                    </p>
                    <p className="text-slate-300">
                      Native mobile applications, desktop software, and other
                      non-web software must meet additional accessibility
                      requirements beyond WCAG — including platform
                      accessibility APIs, closed functionality provisions, and
                      assistive technology support.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-sky-400 mt-1 flex-shrink-0">📄</span>
                  <div>
                    <p className="font-semibold text-white">
                      Electronic Documents
                    </p>
                    <p className="text-slate-300">
                      PDFs, Word documents, spreadsheets, and other electronic
                      documents must be accessible. This includes proper
                      heading structure, alt text for images, reading order,
                      and tagged PDF structure. See our{" "}
                      <Link
                        href="/blog/section-508-compliance-guide"
                        className="text-sky-400 hover:text-sky-300 underline"
                      >
                        Section 508 guide on PDF compliance
                      </Link>
                      .
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-sky-400 mt-1 flex-shrink-0">🔧</span>
                  <div>
                    <p className="font-semibold text-white">
                      Hardware & ICT Equipment
                    </p>
                    <p className="text-slate-300">
                      Self-service kiosks, ATMs, point-of-sale terminals, and
                      other ICT hardware must meet physical and digital
                      accessibility requirements.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-sky-400 mt-1 flex-shrink-0">📞</span>
                  <div>
                    <p className="font-semibold text-white">
                      Support & Documentation
                    </p>
                    <p className="text-slate-300">
                      User documentation, help desk services, and technical
                      support must be accessible. This includes accessible
                      formats for manuals, help pages, and customer service
                      channels.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-amber-500/30 bg-amber-950/20 p-6 space-y-3">
              <h3 className="text-xl font-bold text-amber-300">
                ⚠️ WCAG 2.2 Update Expected
              </h3>
              <p className="text-lg text-slate-300">
                The current standard references <strong>WCAG 2.1</strong>, but
                an update to the European parent standard (EN 301 549 v4.1.1)
                is expected in 2026, which will incorporate{" "}
                <Link
                  href="/blog/wcag-2-1-vs-2-2"
                  className="text-sky-400 hover:text-sky-300 underline"
                >
                  WCAG 2.2
                </Link>
                . Canada is expected to adopt this update. For organizations
                planning compliance now, targeting{" "}
                <Link
                  href="/blog/wcag-22-complete-guide"
                  className="text-sky-400 hover:text-sky-300 underline"
                >
                  WCAG 2.2 AA
                </Link>{" "}
                from the start avoids having to remediate twice.
              </p>
            </div>
          </section>

          {/* Comparison */}
          <section id="vs-ada" className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Canada vs. US vs. EU: How the Laws Compare
            </h2>
            <p className="text-lg leading-relaxed">
              Three major English-speaking markets now have enforceable digital
              accessibility requirements. Here's how they compare:
            </p>

            <div className="space-y-4">
              {/* US */}
              <div className="rounded-2xl border border-blue-500/30 bg-blue-950/20 p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🇺🇸</span>
                  <h3 className="text-xl font-bold text-blue-300">
                    United States — ADA + Section 508
                  </h3>
                </div>
                <div className="space-y-2 text-slate-300">
                  <p>
                    <strong>Law:</strong> Americans with Disabilities Act
                    (1990) + ADA Title II rule (2024)
                  </p>
                  <p>
                    <strong>Standard:</strong> WCAG 2.1 AA (Title II rule);
                    implied for Title III through litigation
                  </p>
                  <p>
                    <strong>Deadline:</strong>{" "}
                    <Link
                      href="/blog/ada-title-ii-deadline-countdown-2026"
                      className="text-sky-400 hover:text-sky-300 underline"
                    >
                      April 24, 2026
                    </Link>{" "}
                    (state/local government); no explicit deadline for private
                    sector
                  </p>
                  <p>
                    <strong>Enforcement:</strong> Private lawsuits +{" "}
                    <Link
                      href="/blog/doj-wcag-not-ada-standard-2026"
                      className="text-sky-400 hover:text-sky-300 underline"
                    >
                      DOJ enforcement
                    </Link>
                    .{" "}
                    <Link
                      href="/blog/ada-website-lawsuit-statistics-2026"
                      className="text-sky-400 hover:text-sky-300 underline"
                    >
                      8,667 federal lawsuits in 2025
                    </Link>
                  </p>
                  <p>
                    <strong>Model:</strong> Litigation-driven. No proactive
                    regulatory oversight.
                  </p>
                </div>
              </div>

              {/* EU */}
              <div className="rounded-2xl border border-yellow-500/30 bg-yellow-950/20 p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🇪🇺</span>
                  <h3 className="text-xl font-bold text-yellow-300">
                    European Union — European Accessibility Act
                  </h3>
                </div>
                <div className="space-y-2 text-slate-300">
                  <p>
                    <strong>Law:</strong>{" "}
                    <Link
                      href="/blog/european-accessibility-act-eaa-compliance-us-businesses"
                      className="text-sky-400 hover:text-sky-300 underline"
                    >
                      European Accessibility Act
                    </Link>{" "}
                    (Directive 2019/882)
                  </p>
                  <p>
                    <strong>Standard:</strong> EN 301 549 (WCAG 2.1 AA +
                    additional ICT requirements)
                  </p>
                  <p>
                    <strong>Deadline:</strong> June 28, 2025 (enforced)
                  </p>
                  <p>
                    <strong>Enforcement:</strong> Market surveillance by
                    national authorities in each EU member state. Varies by
                    country.
                  </p>
                  <p>
                    <strong>Model:</strong> Regulatory + market-based. Covers
                    products and services sold in the EU.
                  </p>
                </div>
              </div>

              {/* Canada */}
              <div className="rounded-2xl border border-red-500/30 bg-red-950/20 p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🇨🇦</span>
                  <h3 className="text-xl font-bold text-red-300">
                    Canada — Accessible Canada Act
                  </h3>
                </div>
                <div className="space-y-2 text-slate-300">
                  <p>
                    <strong>Law:</strong> Accessible Canada Act (Bill C-81,
                    2019)
                  </p>
                  <p>
                    <strong>Standard:</strong> CAN/ASC-EN 301 549 (same as
                    EU's EN 301 549 — includes WCAG 2.1 AA)
                  </p>
                  <p>
                    <strong>Deadline:</strong> December 5, 2027 (government) /
                    December 5, 2028 (private sector)
                  </p>
                  <p>
                    <strong>Enforcement:</strong> Accessibility Commissioner +
                    administrative penalties up to $250K per violation
                  </p>
                  <p>
                    <strong>Model:</strong> Proactive regulatory. Plans →
                    reports → conformity. No reliance on private lawsuits.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-6 space-y-3">
              <h3 className="text-xl font-bold text-emerald-300">
                💡 The Convergence Point
              </h3>
              <p className="text-lg text-slate-300">
                All three jurisdictions converge on <strong>WCAG 2.1 Level
                AA</strong> as the technical standard. Canada and the EU share
                the exact same parent standard (EN 301 549). Organizations that
                achieve WCAG 2.1 AA conformity are positioned to comply across
                all three markets — a powerful efficiency argument for
                multinationals.
              </p>
            </div>
          </section>

          {/* US Businesses */}
          <section id="us-businesses" className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              What US Businesses Need to Know
            </h2>
            <p className="text-lg leading-relaxed">
              The Accessible Canada Act doesn't just affect Canadian companies.
              US businesses may be impacted if they:
            </p>

            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6">
                <h3 className="text-xl font-bold text-sky-400 mb-3">
                  1. Operate in Federally Regulated Sectors
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  If your US company has Canadian subsidiaries or operations in
                  banking, telecommunications, transportation, or energy that
                  fall under federal regulation, those operations must comply
                  with the ACA. This includes US banks with Canadian branches
                  and airlines operating Canadian routes.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6">
                <h3 className="text-xl font-bold text-sky-400 mb-3">
                  2. Sell to Canadian Government
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  The ACA's procurement requirements mean Canadian federal
                  agencies will increasingly require{" "}
                  <Link
                    href="/blog/vpat-accessibility-conformance-report-guide-2026"
                    className="text-sky-400 hover:text-sky-300 underline"
                  >
                    Accessibility Conformance Reports (ACRs/VPATs)
                  </Link>{" "}
                  as part of the procurement process. If you sell software,
                  SaaS, or digital services to Canadian government agencies,
                  you'll need to demonstrate CAN/ASC-EN 301 549 conformance.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6">
                <h3 className="text-xl font-bold text-sky-400 mb-3">
                  3. Serve Regulated Canadian Customers
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  As Canadian banks, telecoms, and airlines implement their
                  own accessibility requirements, they'll extend those demands
                  to their vendors and partners. If your SaaS product is used
                  by a Canadian bank, expect accessibility to become a
                  contractual requirement.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6">
                <h3 className="text-xl font-bold text-sky-400 mb-3">
                  4. Already Pursuing US Compliance
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  The good news: if you're already working toward{" "}
                  <Link
                    href="/blog/wcag-22-complete-guide"
                    className="text-sky-400 hover:text-sky-300 underline"
                  >
                    WCAG 2.1 AA
                  </Link>{" "}
                  for US compliance (ADA, Section 508), you're largely covered
                  for Canada as well. The technical requirements are the same.
                  The additional effort is in documentation, training, and
                  reporting — not in the technical accessibility work itself.
                </p>
              </div>
            </div>
          </section>

          {/* Compliance Roadmap */}
          <section id="compliance-roadmap" className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Compliance Roadmap: From Now to December 2028
            </h2>
            <p className="text-lg leading-relaxed">
              Whether your deadline is December 2027 (government) or December
              2028 (private sector), here's a practical roadmap:
            </p>

            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-bold text-sm">
                    1
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    Now: Baseline Assessment (Q1 2026)
                  </h3>
                </div>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Audit your current digital properties against WCAG 2.1 AA.
                  Use{" "}
                  <Link
                    href="/"
                    className="text-sky-400 hover:text-sky-300 underline"
                  >
                    automated scanning tools
                  </Link>{" "}
                  for a quick baseline, then supplement with manual testing
                  using assistive technologies. Document everything — you'll
                  need this for your annual progress report.
                </p>
                <p className="text-sm text-slate-400 mt-2">
                  <strong>Time estimate:</strong> 2–4 weeks for initial
                  assessment
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-bold text-sm">
                    2
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    Q2 2026: Accessibility Plan + Progress Report
                  </h3>
                </div>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Publish your accessibility plan (required under the ACA) and
                  prepare your first annual progress report. The plan must
                  describe your policies, identify barriers you've found, and
                  outline your remediation timeline. This is due by June 1,
                  2026.
                </p>
                <p className="text-sm text-slate-400 mt-2">
                  <strong>Time estimate:</strong> 2–3 weeks for documentation
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-bold text-sm">
                    3
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    Q3–Q4 2026: Remediation Sprint
                  </h3>
                </div>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Tackle critical accessibility barriers first: missing alt
                  text, keyboard navigation issues, form labels, color
                  contrast, and heading structure. These are the issues that
                  affect the most users and are flagged by{" "}
                  <Link
                    href="/blog/best-accessibility-testing-tools"
                    className="text-sky-400 hover:text-sky-300 underline"
                  >
                    automated testing tools
                  </Link>
                  .
                </p>
                <p className="text-sm text-slate-400 mt-2">
                  <strong>Time estimate:</strong> 3–6 months depending on scope
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-bold text-sm">
                    4
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    2027: Training + Government Conformity
                  </h3>
                </div>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Implement mandatory accessibility training for all staff in
                  digital roles. Government organizations must achieve website
                  conformity by December 5. Private sector should use this year
                  to validate remediation and begin mobile app assessments.
                </p>
                <p className="text-sm text-slate-400 mt-2">
                  <strong>Time estimate:</strong> Training rollout: 1–2 months;
                  ongoing remediation
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-bold text-sm">
                    5
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    2028: Full Conformity + Ongoing Monitoring
                  </h3>
                </div>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Achieve full conformity across websites, mobile apps, digital
                  documents, and procurement. Implement ongoing monitoring —
                  the{" "}
                  <Link
                    href="/blog/fashion-nova-doj-settlement-rejected-2026"
                    className="text-sky-400 hover:text-sky-300 underline"
                  >
                    DOJ's Fashion Nova objection
                  </Link>{" "}
                  made clear that one-time fixes aren't sufficient. Regular
                  scanning, documented audits, and compliance tracking are the
                  new baseline.
                </p>
                <p className="text-sm text-slate-400 mt-2">
                  <strong>Time estimate:</strong> Ongoing. Budget for continuous
                  monitoring.
                </p>
              </div>
            </div>
          </section>

          {/* Enforcement */}
          <section id="enforcement" className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Enforcement and Penalties
            </h2>
            <p className="text-lg leading-relaxed">
              Canada's enforcement model is fundamentally different from the
              US litigation-driven approach. Instead of waiting for lawsuits,
              the ACA creates proactive regulatory oversight:
            </p>

            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-xl font-bold text-rose-400">
                  Accessibility Commissioner
                </h3>
                <p className="text-lg text-slate-300">
                  The Accessibility Commissioner (within the Canadian Human
                  Rights Commission) has authority to investigate complaints,
                  conduct compliance audits, issue compliance orders, and
                  impose administrative monetary penalties. Unlike the US DOJ,
                  which acts reactively, the Commissioner can initiate
                  investigations proactively.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-xl font-bold text-rose-400">
                  Administrative Monetary Penalties
                </h3>
                <p className="text-lg text-slate-300">
                  Penalties of up to <strong>$250,000 per violation</strong> for
                  organizations that fail to comply with ACA requirements. These
                  are administrative penalties — no lawsuit required. The
                  Commissioner can also publish the names of non-compliant
                  organizations, creating reputational risk.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-xl font-bold text-rose-400">
                  Compliance Orders
                </h3>
                <p className="text-lg text-slate-300">
                  The Commissioner can issue orders requiring organizations to
                  take specific actions — such as remediating a website,
                  updating a mobile app, or revising procurement processes.
                  Non-compliance with an order can result in additional
                  penalties.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-xl font-bold text-rose-400">
                  Individual Complaints
                </h3>
                <p className="text-lg text-slate-300">
                  Individuals with disabilities can file complaints with the
                  Accessibility Commissioner or the Canadian Human Rights
                  Commission. While this isn't the same as the US private
                  lawsuit model (no damages awards to individuals), it
                  triggers regulatory action that can be equally consequential.
                </p>
              </div>
            </div>
          </section>

          {/* Provincial Laws */}
          <section id="provinces" className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Provincial Laws: Beyond Federal Regulation
            </h2>
            <p className="text-lg leading-relaxed">
              The ACA covers federally regulated organizations, but several
              Canadian provinces have their own accessibility legislation that
              applies to provincially regulated businesses:
            </p>

            <div className="space-y-3">
              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-5 space-y-2">
                <h3 className="text-lg font-bold text-white">
                  🏛️ Ontario — AODA (2005)
                </h3>
                <p className="text-slate-300">
                  The Accessibility for Ontarians with Disabilities Act was
                  Canada's first provincial accessibility law. WCAG 2.0 Level
                  AA has been required for large organizations since January
                  2021. Ontario is currently reviewing whether to update to
                  WCAG 2.1 or 2.2.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-5 space-y-2">
                <h3 className="text-lg font-bold text-white">
                  🏛️ Manitoba — AMA (2013)
                </h3>
                <p className="text-slate-300">
                  The Accessibility for Manitobans Act is modeled after
                  Ontario's AODA and is phasing in accessibility standards
                  for public and private sector organizations.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-5 space-y-2">
                <h3 className="text-lg font-bold text-white">
                  🏛️ Nova Scotia — NSAA (2017)
                </h3>
                <p className="text-slate-300">
                  The Nova Scotia Accessibility Act aims for an accessible
                  Nova Scotia by 2030, with standards being developed for
                  ICT accessibility.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-5 space-y-2">
                <h3 className="text-lg font-bold text-white">
                  🏛️ British Columbia — Accessible BC Act (2021)
                </h3>
                <p className="text-slate-300">
                  BC's newest accessibility law establishes a framework for
                  accessibility standards development, with ICT standards
                  expected in coming years.
                </p>
              </div>
            </div>

            <p className="text-lg leading-relaxed">
              For organizations operating across Canada, the practical
              approach is to meet the highest standard — CAN/ASC-EN 301 549
              (WCAG 2.1 AA) — which will satisfy both federal and most
              provincial requirements.
            </p>
          </section>

          {/* Global Convergence */}
          <section id="global" className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              The Global Accessibility Convergence
            </h2>
            <p className="text-lg leading-relaxed">
              Canada's adoption of EN 301 549 — the same standard used by the
              EU — represents a significant moment in global digital
              accessibility. Three markets with a combined population of over
              1.2 billion people now have enforceable accessibility
              requirements that converge on WCAG 2.1 AA:
            </p>

            <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-xl bg-slate-800/40">
                  <p className="text-3xl">🇺🇸</p>
                  <p className="text-lg font-bold text-sky-400 mt-2">
                    United States
                  </p>
                  <p className="text-sm text-slate-400">~335M people</p>
                  <p className="text-sm text-slate-400">ADA + Section 508</p>
                  <p className="text-sm text-amber-400 font-semibold mt-1">
                    April 2026
                  </p>
                </div>
                <div className="text-center p-4 rounded-xl bg-slate-800/40">
                  <p className="text-3xl">🇪🇺</p>
                  <p className="text-lg font-bold text-yellow-400 mt-2">
                    European Union
                  </p>
                  <p className="text-sm text-slate-400">~450M people</p>
                  <p className="text-sm text-slate-400">EAA + EN 301 549</p>
                  <p className="text-sm text-emerald-400 font-semibold mt-1">
                    June 2025 ✓
                  </p>
                </div>
                <div className="text-center p-4 rounded-xl bg-slate-800/40">
                  <p className="text-3xl">🇨🇦</p>
                  <p className="text-lg font-bold text-red-400 mt-2">Canada</p>
                  <p className="text-sm text-slate-400">~40M people</p>
                  <p className="text-sm text-slate-400">
                    ACA + CAN/ASC-EN 301 549
                  </p>
                  <p className="text-sm text-sky-400 font-semibold mt-1">
                    Dec 2027–28
                  </p>
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed">
              For organizations operating globally, this convergence is
              actually good news. Instead of meeting three different
              standards, a single WCAG 2.1 AA compliance effort — supplemented
              with the broader EN 301 549 requirements for software and
              hardware — covers all three jurisdictions. The investment in
              accessibility pays dividends across every market.
            </p>
          </section>

          {/* CTA */}
          <section className="rounded-3xl bg-gradient-to-br from-red-900/40 via-red-900/20 to-sky-900/40 border border-red-500/20 p-8 space-y-6 text-center">
            <h2 className="text-3xl font-bold text-white">
              Start Your Accessibility Assessment Today
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              RatedWithAI scans your website against WCAG 2.1 AA — the same
              standard required by Canada's ACA, the EU's EAA, and the US ADA.
              One scan covers three jurisdictions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-2xl bg-sky-500 px-8 py-4 text-lg font-semibold text-white hover:bg-sky-400 transition-colors"
              >
                Scan Your Website Free →
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="space-y-8">
            <h2 className="text-3xl font-semibold text-white">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-xl font-bold text-white">
                  What is the Accessible Canada Act?
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  The Accessible Canada Act (ACA), also known as Bill C-81, is
                  Canada's federal accessibility legislation enacted in 2019.
                  It aims to create a barrier-free Canada by 2040, with
                  enforceable digital accessibility requirements phased in
                  between 2027 and 2028 for federally regulated organizations
                  including banks, airlines, telecommunications companies, and
                  broadcasters.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-xl font-bold text-white">
                  When do Canadian digital accessibility deadlines take
                  effect?
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  There are two key deadlines: December 5, 2027 for federal
                  government websites and mandatory accessibility training,
                  and December 5, 2028 for federally regulated private sector
                  organizations to achieve conformity for public-facing
                  websites, mobile apps, digital documents, and procurement
                  processes. Annual progress reports are due starting June 1,
                  2026.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-xl font-bold text-white">
                  What accessibility standard does Canada use?
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Canada adopted CAN/ASC-EN 301 549 in May 2024, which is a
                  direct adoption of the European standard EN 301 549 v3.2.1.
                  This standard incorporates WCAG 2.1 Level AA as its web
                  accessibility requirement, plus additional requirements for
                  software, hardware, and documentation. An update to include
                  WCAG 2.2 is expected in 2026.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-xl font-bold text-white">
                  Who must comply with Canada's digital accessibility
                  requirements?
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  The ACA applies to federally regulated organizations in
                  Canada, including the federal government, banks and
                  financial institutions, airlines and transportation
                  companies, telecommunications providers, broadcasting
                  companies, and interprovincial or international businesses.
                  Organizations are categorized by size: large (500+
                  employees), medium (100–499), and small (10–99), with
                  different timeline requirements.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-xl font-bold text-white">
                  How does Canada's accessibility law compare to the ADA?
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Unlike the Americans with Disabilities Act (ADA), which
                  relies on litigation and court interpretations for web
                  accessibility, Canada's ACA takes a proactive regulatory
                  approach with specific technical standards (CAN/ASC-EN 301
                  549) and enforceable deadlines. The ACA also has a dedicated
                  Accessibility Commissioner for enforcement, whereas ADA
                  enforcement depends on DOJ action or private lawsuits.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-xl font-bold text-white">
                  Does the Accessible Canada Act affect US businesses?
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Yes, if your US business operates in federally regulated
                  sectors in Canada, serves Canadian customers through
                  Canadian subsidiaries, or provides digital services to
                  Canadian federal government agencies. Even if you're not
                  directly regulated, accessibility is increasingly a
                  procurement requirement for doing business with Canadian
                  organizations.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-xl font-bold text-white">
                  What is CAN/ASC-EN 301 549?
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  CAN/ASC-EN 301 549 is Canada's national ICT accessibility
                  standard, adopted in May 2024. It is a direct adoption of
                  the European standard EN 301 549 v3.2.1, which includes
                  WCAG 2.1 Level AA for web content plus additional
                  accessibility requirements for software applications,
                  hardware, documentation, and support services.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-xl font-bold text-white">
                  What are the penalties for non-compliance?
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  The Accessibility Commissioner can issue compliance orders,
                  impose administrative monetary penalties of up to $250,000
                  per violation, and publish the names of non-compliant
                  organizations. Unlike the US litigation-driven model,
                  enforcement is primarily through regulatory action rather
                  than private lawsuits, though individuals can also file
                  complaints to the Canadian Human Rights Commission.
                </p>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/blog/european-accessibility-act-eaa-compliance-us-businesses"
                className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-5 hover:border-sky-500/50 transition-colors block"
              >
                <p className="text-sm text-sky-400">International</p>
                <p className="text-lg font-semibold text-white mt-1">
                  European Accessibility Act: What US Businesses Need to Know
                </p>
              </Link>
              <Link
                href="/blog/ada-title-ii-deadline-countdown-2026"
                className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-5 hover:border-sky-500/50 transition-colors block"
              >
                <p className="text-sm text-sky-400">Deadline Guide</p>
                <p className="text-lg font-semibold text-white mt-1">
                  ADA Title II April 2026 Deadline Countdown
                </p>
              </Link>
              <Link
                href="/blog/vpat-accessibility-conformance-report-guide-2026"
                className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-5 hover:border-sky-500/50 transition-colors block"
              >
                <p className="text-sm text-sky-400">Procurement</p>
                <p className="text-lg font-semibold text-white mt-1">
                  VPAT Guide: How to Create an Accessibility Conformance Report
                </p>
              </Link>
              <Link
                href="/blog/section-508-compliance-guide"
                className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-5 hover:border-sky-500/50 transition-colors block"
              >
                <p className="text-sm text-sky-400">Compliance Guide</p>
                <p className="text-lg font-semibold text-white mt-1">
                  Section 508 Compliance: The Complete Guide for 2026
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
