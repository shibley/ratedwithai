/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title:
    "State Government ADA Compliance: Key Takeaways from the 2025 NASCIO Report | RatedWithAI",
  description:
    "Only 1 state has fully implemented an ADA compliance plan. 54% of CIOs have no dedicated funding. The NASCIO accessibility report reveals how unprepared states are for the April 2026 deadline.",
  openGraph: {
    title:
      "State Government ADA Compliance: Key Takeaways from the 2025 NASCIO Report",
    description:
      "Only 1 state has fully implemented an ADA compliance plan. 54% of CIOs have no dedicated funding. NASCIO's accessibility report reveals the gap between mandate and reality.",
    type: "article",
    publishedTime: "2026-02-25T00:00:00.000Z",
    authors: ["RatedWithAI Team"],
  },
  keywords: [
    "state government ADA compliance",
    "NASCIO accessibility",
    "government website accessibility requirements",
    "NASCIO accessibility report 2025",
    "ADA Title II state compliance",
    "state government WCAG compliance",
    "government digital accessibility",
    "NASCIO CIO survey accessibility",
    "state accessibility coordinator",
    "government ADA deadline 2026",
  ],
  alternates: {
    canonical: "https://ratedwithai.com/blog/nascio-state-ada-compliance-2025-report",
  },
};

export default function NASCIOStateADAComplianceReportPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "State Government ADA Compliance: Key Takeaways from the 2025 NASCIO Report",
    description:
      "Only 1 state has fully implemented an ADA compliance plan. Analysis of the NASCIO IT Accessibility Working Group report on state readiness for the DOJ's April 2026 ADA Title II deadline.",
    datePublished: "2026-02-25T00:00:00.000Z",
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
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              Government Accessibility
            </p>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              State Government ADA Compliance: Key Takeaways from the 2025
              NASCIO Report
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              A landmark NASCIO survey reveals that only one state has fully
              implemented an ADA compliance plan — while 54% of CIOs report zero
              dedicated funding for accessibility. With the April 2026 deadline
              less than two months away, most states are running out of time.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
              <time dateTime="2026-02-25">February 25, 2026</time>
              <span>·</span>
              <span>18 min read</span>
            </div>
          </section>
        </div>

        <article className="mx-auto w-full max-w-4xl space-y-10 px-6 pb-24 text-slate-200">
          {/* Key Findings Alert */}
          <section className="rounded-3xl border-2 border-amber-500/50 bg-amber-950/30 p-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/20 text-2xl">
                📊
              </span>
              <h2 className="text-2xl font-bold text-amber-300">
                Key Findings at a Glance
              </h2>
            </div>
            <ul className="space-y-3 text-lg text-amber-100">
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-amber-300 text-sm font-bold">
                  1
                </span>
                <span>
                  <strong>Only 1 state</strong> has fully implemented a plan for
                  ADA compliance
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-amber-300 text-sm font-bold">
                  2
                </span>
                <span>
                  <strong>54% of CIOs</strong> have no dedicated funding for
                  accessibility services
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-amber-300 text-sm font-bold">
                  3
                </span>
                <span>
                  <strong>34% of states</strong> lack dedicated IT accessibility
                  coordinators
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-amber-300 text-sm font-bold">
                  4
                </span>
                <span>
                  Accessibility climbed to the{" "}
                  <strong>6th most important priority</strong> in NASCIO's
                  annual CIO survey
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-amber-300 text-sm font-bold">
                  5
                </span>
                <span>
                  The <strong>April 24, 2026 deadline</strong> will "open the
                  door to lawsuits"
                </span>
              </li>
            </ul>
          </section>

          {/* Introduction */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              The State of State Government Accessibility
            </h2>
            <p className="text-lg leading-relaxed">
              On February 4, 2026, the National Association of State Chief
              Information Officers (NASCIO) published a landmark{" "}
              <a
                href="https://www.nascio.org/resource-center/resources/nascio-it-accessibility-working-group-in-review-a-guide-to-doj-final-rule-compliance/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-300 underline"
              >
                20-page report
              </a>{" "}
              from its IT Accessibility Working Group — the product of nine
              months of research, expert presentations, and working group
              sessions. The report is a practical roadmap for state and local
              governments facing the Department of Justice's April 24, 2026
              deadline to bring all public-facing websites and mobile
              applications into compliance with{" "}
              <Link
                href="/blog/ada-website-compliance-guide"
                className="text-sky-400 hover:text-sky-300 underline"
              >
                WCAG 2.1 Level AA accessibility standards
              </Link>
              .
            </p>
            <p className="text-lg leading-relaxed">
              The findings are sobering. As of the CIO survey distributed last
              July, only one state out of all 50 indicated it had fully
              implemented a plan for compliance. More than half of state CIOs
              reported having zero dedicated funding for accessibility services.
              Over a third of states don't even have a dedicated person leading
              the work.
            </p>
            <p className="text-lg leading-relaxed">
              This isn't a theoretical problem. The DOJ{" "}
              <Link
                href="/blog/ada-title-ii-compliance-guide"
                className="text-sky-400 hover:text-sky-300 underline"
              >
                finalized its ADA Title II rule
              </Link>{" "}
              in April 2024, requiring all state and local government digital
              content — from websites to mobile apps to PDF documents — to meet
              specific technical accessibility standards. States and large local
              governments (serving 50,000+ people) face an April 24, 2026
              deadline. Smaller entities have until April 2027. And as Texas
              Statewide Digital Accessibility Officer Marie Cohan warned in a
              recent{" "}
              <a
                href="https://www.govtech.com/policy/are-states-ready-for-the-approaching-accessibility-deadline"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-300 underline"
              >
                GovTech interview
              </a>
              : "When the deadline comes, the door will open to lawsuits."
            </p>
          </section>

          {/* About the NASCIO Report */}
          <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
            <h2 className="text-3xl font-semibold text-white">
              About the NASCIO IT Accessibility Working Group Report
            </h2>
            <p className="text-lg leading-relaxed">
              The NASCIO IT Accessibility Working Group was created to provide a
              collaborative space for digital accessibility coordinators
              nationwide as they prepare for compliance with the 2024 DOJ Final
              Rule. The multi-part paper series, developed from nine months of
              working group sessions and expert presentations, covers the core
              components of an enterprise accessibility program:
            </p>
            <ul className="space-y-3 text-lg">
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">
                  ✓
                </span>
                <span>
                  <strong>Policy development</strong> — Creating clear,
                  enforceable accessibility policies across agencies
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">
                  ✓
                </span>
                <span>
                  <strong>Procurement integration</strong> — Embedding
                  accessibility requirements into vendor contracts and RFPs
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">
                  ✓
                </span>
                <span>
                  <strong>Remediation planning</strong> — Prioritizing which
                  systems and content to fix first
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">
                  ✓
                </span>
                <span>
                  <strong>Training strategies</strong> — Building accessibility
                  competency across government workforce
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">
                  ✓
                </span>
                <span>
                  <strong>Testing and quality assurance</strong> — Establishing
                  automated and manual testing processes
                </span>
              </li>
            </ul>
            <p className="text-lg leading-relaxed">
              The advisory committee was chaired by Jay Wyant (Minnesota's Chief
              Information Accessibility Officer) and co-chaired by Marie Cohan
              (Texas' Statewide Digital Accessibility Officer), with members from
              Michigan, Maryland, Maine, and Illinois. The report draws on CIO
              survey data, working group findings, and state-by-state case
              studies.
            </p>
          </section>

          {/* The Four Dominant Barriers */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              The Four Dominant Barriers to State Compliance
            </h2>
            <p className="text-lg leading-relaxed">
              NASCIO's research identified four primary challenges that are
              preventing states from meeting the April 2026 deadline. Each
              barrier compounds the others, creating a crisis of readiness
              across state governments.
            </p>

            {/* Barrier 1: Funding */}
            <div className="rounded-2xl border border-red-500/40 bg-red-950/20 p-6 space-y-4">
              <h3 className="text-2xl font-semibold text-red-300">
                1. No Dedicated Funding (54% of States)
              </h3>
              <p className="text-lg leading-relaxed">
                The single biggest obstacle is money. According to the NASCIO
                CIO survey, <strong>54 percent of surveyed CIOs reported they
                did not have any dedicated funding for accessibility
                services</strong>. This is staggering given the scope of work
                required — every state government operates dozens (sometimes
                hundreds) of public-facing websites, portals, and applications
                that must all meet WCAG 2.1 AA standards.
              </p>
              <p className="text-lg leading-relaxed">
                NASCIO Policy Analyst Kalea Young-Gibson identified funding as a
                "dominant barrier" to compliance. The problem isn't just the
                initial assessment — it's that remediation can be extraordinarily
                costly. Enterprise accessibility platforms used by large
                government agencies typically cost{" "}
                <strong>$50,000 to $200,000+ per year</strong>, and manual
                accessibility audits for a single website can run{" "}
                <strong>$5,000 to $25,000</strong>.
              </p>
              <p className="text-lg leading-relaxed">
                For a state with 100+ agency websites, portals, and
                applications, the math becomes punishing. Traditional enterprise
                tools could cost millions annually — budgets that simply don't
                exist for most states, especially when accessibility must
                compete with cybersecurity, modernization, and AI initiatives
                for limited IT dollars.
              </p>
            </div>

            {/* Barrier 2: Workforce */}
            <div className="rounded-2xl border border-orange-500/40 bg-orange-950/20 p-6 space-y-4">
              <h3 className="text-2xl font-semibold text-orange-300">
                2. No Accessibility Coordinators (34% of States)
              </h3>
              <p className="text-lg leading-relaxed">
                <strong>34 percent of states lack dedicated IT accessibility
                coordinators</strong> — the individuals responsible for driving
                compliance strategy across entire state enterprises. Without a
                dedicated coordinator, accessibility work falls to already
                overburdened IT staff who may not have the specialized knowledge
                needed.
              </p>
              <p className="text-lg leading-relaxed">
                Young-Gibson emphasized that the partnership between a CIO and
                accessibility coordinator is "the most vital part" of ensuring
                accessibility across an entire enterprise. If a state does not
                have an accessibility coordinator, she said, its next step
                should be to hire one.
              </p>
              <p className="text-lg leading-relaxed">
                The states that have invested in dedicated accessibility
                leadership — like Colorado, Pennsylvania, and Texas — are
                demonstrably further along in their compliance journeys. This
                suggests that the coordinator role isn't a luxury; it's a
                prerequisite for enterprise-wide progress.
              </p>
            </div>

            {/* Barrier 3: Vendor Challenges */}
            <div className="rounded-2xl border border-yellow-500/40 bg-yellow-950/20 p-6 space-y-4">
              <h3 className="text-2xl font-semibold text-yellow-300">
                3. Vendor Accountability Gaps
              </h3>
              <p className="text-lg leading-relaxed">
                States don't build all their own software. Third-party vendors
                provide many of the platforms used to deliver government
                services, and NASCIO found that{" "}
                <strong>
                  vendors may not accurately disclose how their products conform
                  to accessibility standards
                </strong>
                .
              </p>
              <p className="text-lg leading-relaxed">
                Vendor-submitted Voluntary Product Accessibility Templates
                (VPATs) are the primary mechanism for assessing third-party
                compliance, but the NASCIO report warns agencies to be
                cautious. A VPAT showing a product as fully supporting
                accessibility standards with no qualifying comments "could
                indicate the VPAT was created by a sales team," the working
                group warned. The report also flagged that agencies "should be
                wary of vague and/or AI-generated responses" in vendor
                documentation.
              </p>
              <p className="text-lg leading-relaxed">
                As Cohan explained: "They have the burden of accessibility in
                their products, government has the burden of compliance." This
                disconnect — where vendors control the product but governments
                bear the legal liability — makes procurement language and
                contract requirements essential tools for ensuring compliance.
              </p>
            </div>

            {/* Barrier 4: Fragmented Governance */}
            <div className="rounded-2xl border border-purple-500/40 bg-purple-950/20 p-6 space-y-4">
              <h3 className="text-2xl font-semibold text-purple-300">
                4. Fragmented Governance
              </h3>
              <p className="text-lg leading-relaxed">
                The fourth barrier is structural. State governments are complex
                enterprises with dozens of agencies, each potentially managing
                their own websites, applications, and digital services.
                Fragmented governance — where there's no centralized authority
                or consistent standards for accessibility — makes it nearly
                impossible to assess the full scope of non-compliance, let
                alone remediate it systematically.
              </p>
              <p className="text-lg leading-relaxed">
                This is compounded by the sheer volume of digital content. Texas
                Accessibility Officer Marie Cohan noted that some states have{" "}
                <strong>millions of PDFs</strong> that need to be assessed and
                potentially remediated, urging states to follow document
                retention schedules and purge content that doesn't need to be
                online to reduce the remediation burden.
              </p>
            </div>
          </section>

          {/* State-by-State Profiles */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              State-by-State Readiness: Who's Leading, Who's Lagging
            </h2>
            <p className="text-lg leading-relaxed">
              While only one state has fully implemented a compliance plan, some
              states are demonstrably further along than others. The NASCIO
              report and recent reporting from GovTech and StateScoop profile
              three states that illustrate different approaches to digital
              accessibility — and the factors that differentiate leaders from
              laggards.
            </p>

            {/* Colorado */}
            <div className="rounded-2xl border border-emerald-500/40 bg-emerald-950/20 p-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-xl">
                  🏔️
                </span>
                <div>
                  <h3 className="text-2xl font-semibold text-emerald-300">
                    Colorado: Ahead of the Curve
                  </h3>
                  <p className="text-sm text-emerald-400">
                    State-level law preceded federal mandate
                  </p>
                </div>
              </div>
              <p className="text-lg leading-relaxed">
                Colorado stands out as a national leader in digital
                accessibility. A state-specific law required all government
                entities in Colorado to meet accessibility standards by{" "}
                <strong>July 2024</strong> — nearly two years before the
                federal deadline. And Colorado's requirements go further than
                the DOJ rule.
              </p>
              <p className="text-lg leading-relaxed">
                "The federal rules are just for public-facing websites, web
                content, mobile sites, and mobile content," explained Karen
                Pellegrin, senior program manager for Colorado's Technology
                Accessibility Program. "For Colorado, it goes way beyond that;
                it's both internal and external products."
              </p>
              <p className="text-lg leading-relaxed">
                Colorado's approach includes the{" "}
                <strong>Empathy Lab</strong>, which Pellegrin described as a
                think tank enabling government to work with people with lived
                experiences from the disability community. The state has also
                shifted accessibility work to start earlier in the technology
                lifecycle by embedding accessibility language in contracts,
                "creating the foundation" to prevent issues before they arise.
              </p>
              <p className="text-lg leading-relaxed">
                The lesson from Colorado: accessibility needs to be built in
                from the start, not bolted on after the fact. And it helps
                immensely when state law creates earlier deadlines and broader
                requirements than federal mandates.
              </p>
            </div>

            {/* Pennsylvania */}
            <div className="rounded-2xl border border-blue-500/40 bg-blue-950/20 p-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-xl">
                  🔔
                </span>
                <div>
                  <h3 className="text-2xl font-semibold text-blue-300">
                    Pennsylvania: Ahead of Schedule
                  </h3>
                  <p className="text-sm text-blue-400">
                    Baseline testing on track by March 2026
                  </p>
                </div>
              </div>
              <p className="text-lg leading-relaxed">
                Pennsylvania is another bright spot. The state's Chief
                Accessibility Officer Kris Adams reported that Pennsylvania is
                ahead of both its own June internal deadline and the DOJ's
                April deadline, with baseline testing for high-impact
                applications on track to finish by March 2026.
              </p>
              <p className="text-lg leading-relaxed">
                Pennsylvania's success stems from institutional investment in
                digital experience. The state created the{" "}
                <strong>Commonwealth Office of Digital Experience</strong>{" "}
                specifically to support the accessibility and user experience
                of digital services through a lens of human-centered design. A
                shared ownership model spreads accessibility responsibility
                across state government rather than isolating it in a single
                team.
              </p>
              <p className="text-lg leading-relaxed">
                "It's just as important as security," Adams said of digital
                accessibility. "It needs to be embedded in the software
                development life cycle."
              </p>
              <p className="text-lg leading-relaxed">
                Adams offered practical advice for states further behind:
                "There's no better time than to start now." The deadline, he
                explained, serves as a milestone rather than the finish line —
                inclusion work is ongoing.
              </p>
            </div>

            {/* Texas */}
            <div className="rounded-2xl border border-sky-500/40 bg-sky-950/20 p-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/20 text-xl">
                  ⭐
                </span>
                <div>
                  <h3 className="text-2xl font-semibold text-sky-300">
                    Texas: Federated Model, New Legislation
                  </h3>
                  <p className="text-sm text-sky-400">
                    Agencies self-managing with state-level coordination
                  </p>
                </div>
              </div>
              <p className="text-lg leading-relaxed">
                Texas takes a different approach. With a federated governance
                model, the Department of Information Resources (DIR) issues
                rules, but each state agency is responsible for its own
                compliance timeline. DIR's Statewide Digital Accessibility
                Officer Marie Cohan leads coordination across this decentralized
                landscape.
              </p>
              <p className="text-lg leading-relaxed">
                "No one is going to be 100 percent compliant," Cohan
                acknowledged, while noting that state agencies and universities
                are in a good position. Many are actively working on PDF
                remediation and website redesigns. Texas is also working to
                implement a new statute (HB 5195) that would improve web
                accessibility standards, currently in the rulemaking process.
              </p>
              <p className="text-lg leading-relaxed">
                Cohan co-chaired NASCIO's accessibility working group and
                participates in a multistate collaborative, sharing best
                practices and solutions to common challenges across state
                lines. She emphasized practical risk management: states should
                document everything they're doing toward compliance, and IT
                leaders should conduct risk assessments to identify agencies
                most at risk of non-compliance and ensure action plans for
                "April 25 and beyond."
              </p>
              <p className="text-lg leading-relaxed">
                On the volume challenge, Cohan urged states to follow retention
                schedules and purge documents that don't need to be online:
                "state retention cycles should be followed closely so that
                documentation that is not required to be on a website can be
                purged to reduce the number of PDFs — millions, in some cases —
                that need to be addressed."
              </p>
            </div>
          </section>

          {/* Broader State Landscape */}
          <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
            <h2 className="text-3xl font-semibold text-white">
              The Broader State Landscape: Where the Other 47 States Stand
            </h2>
            <p className="text-lg leading-relaxed">
              Beyond Colorado, Pennsylvania, and Texas, the NASCIO report
              and CIO survey paint a concerning picture for the remaining
              states. While the specific state that reported full compliance
              wasn't named, we can assess the broader landscape based on
              available data:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-slate-700/70 bg-slate-900/40 p-5 space-y-2">
                <h3 className="font-semibold text-sky-300">
                  States With Dedicated Coordinators (~66%)
                </h3>
                <p className="text-sm text-slate-400">
                  Approximately 33 states have dedicated IT accessibility
                  coordinators — a critical first step, though having a
                  coordinator doesn't mean compliance is achieved. These states
                  have at minimum established organizational responsibility for
                  accessibility.
                </p>
              </div>
              <div className="rounded-xl border border-slate-700/70 bg-slate-900/40 p-5 space-y-2">
                <h3 className="font-semibold text-red-300">
                  States Without Coordinators (~34%)
                </h3>
                <p className="text-sm text-slate-400">
                  Roughly 17 states lack a dedicated accessibility coordinator
                  entirely. For these states, accessibility work either isn't
                  happening systematically or falls to general IT staff without
                  specialized expertise.
                </p>
              </div>
              <div className="rounded-xl border border-slate-700/70 bg-slate-900/40 p-5 space-y-2">
                <h3 className="font-semibold text-amber-300">
                  States With Own Accessibility Laws
                </h3>
                <p className="text-sm text-slate-400">
                  States like{" "}
                  <Link
                    href="/state/california"
                    className="text-sky-400 hover:text-sky-300 underline"
                  >
                    California
                  </Link>
                  , Colorado, and Illinois have state-level accessibility laws
                  that may exceed federal requirements. These states tend to be
                  further along because they've been working toward compliance
                  for longer.
                </p>
              </div>
              <div className="rounded-xl border border-slate-700/70 bg-slate-900/40 p-5 space-y-2">
                <h3 className="font-semibold text-purple-300">
                  Accessibility as NASCIO Priority #6
                </h3>
                <p className="text-sm text-slate-400">
                  In NASCIO's most recent membership survey, accessibility
                  climbed to the 6th most important priority for state CIOs —
                  behind cybersecurity, modernization, digital services, and AI
                  (which topped the list for the first time). Awareness is
                  growing, but budget allocation hasn't followed.
                </p>
              </div>
            </div>
            <p className="text-lg leading-relaxed">
              The NASCIO working group's advisory committee included
              accessibility leaders from Minnesota, Texas, Michigan, Maryland,
              Maine, and Illinois — representing states that have invested in
              dedicated accessibility roles. But these are the exception, not
              the rule. Many states, particularly in the South and Midwest,
              have been slower to establish formal accessibility programs.
            </p>
            <p className="text-lg leading-relaxed">
              For specific state-by-state accessibility requirements and
              readiness assessments, see our state guides for{" "}
              <Link
                href="/state/california"
                className="text-sky-400 hover:text-sky-300 underline"
              >
                California
              </Link>
              ,{" "}
              <Link
                href="/state/new-york"
                className="text-sky-400 hover:text-sky-300 underline"
              >
                New York
              </Link>
              , and all 50 states.
            </p>
          </section>

          {/* What Comes After the Deadline */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              After April 24: "The Door Will Open to Lawsuits"
            </h2>
            <p className="text-lg leading-relaxed">
              The most urgent warning from the NASCIO findings and GovTech
              reporting is what happens after the deadline passes. Multiple
              state accessibility leaders emphasized that the deadline is a
              beginning, not an end.
            </p>
            <div className="rounded-2xl border border-red-500/40 bg-red-950/20 p-6 space-y-4">
              <h3 className="text-xl font-semibold text-red-300">
                The Litigation Risk Is Real
              </h3>
              <p className="text-lg leading-relaxed">
                Marie Cohan stated plainly: "When the deadline comes, the door
                will open to lawsuits, and states will be managing litigation
                risks." She added that IT leaders are already talking about
                risk assessment to support agencies at risk of non-compliance
                and ensure they have an action plan: "That's the unknown, and I
                think that's where a lot of action is going to happen."
              </p>
              <p className="text-lg leading-relaxed">
                The litigation landscape for government accessibility is
                already active and growing. ADA website lawsuits have{" "}
                <Link
                  href="/blog/ada-website-lawsuit-statistics-2026"
                  className="text-sky-400 hover:text-sky-300 underline"
                >
                  surged in recent years
                </Link>
                , and state governments present particularly attractive targets
                because Title II provides clear grounds for action and
                prevailing plaintiffs can recover attorneys' fees.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">
                Accessibility Is an Ongoing Commitment
              </h3>
              <p className="text-lg leading-relaxed">
                Colorado's Karen Pellegrin likened accessibility to cybersecurity
                — "it never goes away" — calling it "an ongoing and evolving
                area of technology in which IT leaders must continually invest."
                This framing is critical: compliance isn't a one-time checkbox
                but a continuous process of testing, monitoring, and
                remediation.
              </p>
              <p className="text-lg leading-relaxed">
                Cohan echoed this sentiment: "The deadline is going to come and
                go... Having a plan in place and roles assigned for the work
                that follows it is essential." She added that she hopes
                accessibility remains a "foundational pillar for technology"
                alongside security and privacy.
              </p>
              <p className="text-lg leading-relaxed">
                Looking ahead, NASCIO's Young-Gibson predicted that
                accessibility is likely to intersect with other "hot-button"
                technology issues, including AI and cybersecurity — further
                embedding it in the fabric of government technology operations.
              </p>
            </div>
          </section>

          {/* The Human Case */}
          <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
            <h2 className="text-3xl font-semibold text-white">
              Beyond Compliance: Why This Actually Matters
            </h2>
            <p className="text-lg leading-relaxed">
              It's easy to reduce accessibility to a compliance checkbox. But
              the human stakes are enormous. According to the CDC's Behavioral
              Risk Factor Surveillance System,{" "}
              <strong>29% of Americans have at least one disability</strong>,
              including 14% with a cognitive disability. More than 1 in 4 U.S.
              adults rely on accessible digital services to interact with their
              government.
            </p>
            <p className="text-lg leading-relaxed">
              Cohan illustrated the real-world impact through Texas's experience
              with natural disasters: "People who have disabilities are
              typically the last to find out or they're stranded or trapped or
              they don't have power and they need a machine that needs power to
              operate to help them live or to administer medication or to
              communicate with the outside world."
            </p>
            <p className="text-lg leading-relaxed">
              Accessible government services aren't just legally required —
              they're essential infrastructure. When a government website is
              inaccessible, it means a blind veteran can't file for benefits, a
              deaf parent can't register their child for school, or a person
              with a mobility impairment can't renew their driver's license
              online. These aren't edge cases; they represent millions of
              Americans.
            </p>
            <p className="text-lg leading-relaxed">
              There's even a financial argument: Cohan noted that people with
              disabilities increasingly start their own businesses, paying sales
              tax, franchise tax, and unemployment taxes. Making government
              forms accessible for permits, applications, and tax filing could
              be indirectly profitable for states. As she put it: "When you
              design for people with accessibility, when you design with that in
              mind, you're actually helping the rest of the population."
            </p>
          </section>

          {/* NASCIO Recommendations */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              NASCIO's Recommendations for States Behind Schedule
            </h2>
            <p className="text-lg leading-relaxed">
              For the majority of states that will not be fully compliant by
              April 24, NASCIO and the accessibility leaders interviewed by
              GovTech and StateScoop offered practical guidance. The working
              group's report encourages states to:
            </p>

            <div className="space-y-4">
              <div className="rounded-xl border border-slate-700/70 bg-slate-900/40 p-5 space-y-2">
                <h3 className="font-semibold text-white">
                  1. Secure Leadership Buy-In
                </h3>
                <p className="text-lg leading-relaxed text-slate-300">
                  NASCIO emphasizes starting with governance — clarifying roles
                  and securing stakeholder buy-in to support policy adoption.
                  The CIO-accessibility coordinator partnership is "the most
                  vital part" of enterprise-wide progress.
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/70 bg-slate-900/40 p-5 space-y-2">
                <h3 className="font-semibold text-white">
                  2. Keep Policy Simple
                </h3>
                <p className="text-lg leading-relaxed text-slate-300">
                  The StateScoop coverage of the report highlighted NASCIO's
                  advice to "keep it simple" on policy. Overly complex policies
                  stall implementation. Create clear, enforceable standards that
                  agencies can actually follow.
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/70 bg-slate-900/40 p-5 space-y-2">
                <h3 className="font-semibold text-white">
                  3. Prioritize High-Impact Systems First
                </h3>
                <p className="text-lg leading-relaxed text-slate-300">
                  You can't fix everything at once. Focus on the systems used by
                  the most people for the most critical services — tax portals,
                  benefits applications, permit systems, and emergency
                  information.
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/70 bg-slate-900/40 p-5 space-y-2">
                <h3 className="font-semibold text-white">
                  4. Embed Accessibility in Procurement
                </h3>
                <p className="text-lg leading-relaxed text-slate-300">
                  Update RFP language and contracts to require accessibility
                  compliance from vendors. Scrutinize VPATs carefully — be wary
                  of reports that show full conformance with no qualifying
                  comments, as these "could indicate the VPAT was created by a
                  sales team."
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/70 bg-slate-900/40 p-5 space-y-2">
                <h3 className="font-semibold text-white">
                  5. Document Everything
                </h3>
                <p className="text-lg leading-relaxed text-slate-300">
                  Colorado's Pellegrin advised states not yet compliant to
                  "document everything they're doing to get there." This
                  documentation demonstrates good faith effort and can be
                  critical in litigation defense.
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/70 bg-slate-900/40 p-5 space-y-2">
                <h3 className="font-semibold text-white">
                  6. Establish Shared Responsibility
                </h3>
                <p className="text-lg leading-relaxed text-slate-300">
                  Accessibility can't be one team's problem. Pennsylvania's
                  shared ownership model and NASCIO's emphasis on
                  "shared responsibility" across agencies reflect the reality
                  that every content creator, developer, and procurement officer
                  plays a role.
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/70 bg-slate-900/40 p-5 space-y-2">
                <h3 className="font-semibold text-white">
                  7. Start Automated Monitoring Now
                </h3>
                <p className="text-lg leading-relaxed text-slate-300">
                  Automated accessibility scanning provides immediate visibility
                  into the scope of non-compliance across all digital properties.
                  It won't catch everything (manual testing is still needed for
                  roughly 30% of WCAG criteria), but it establishes a baseline
                  and enables continuous monitoring as content changes.
                </p>
              </div>
            </div>
          </section>

          {/* The Vendor Problem */}
          <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
            <h2 className="text-3xl font-semibold text-white">
              The Vendor Problem: VPATs, AI-Generated Reports, and
              Accountability
            </h2>
            <p className="text-lg leading-relaxed">
              One of the most actionable findings from the NASCIO report relates
              to vendor management. State governments rely heavily on
              third-party vendors for everything from content management systems
              to citizen service portals, and the accessibility of these
              products directly impacts state compliance.
            </p>
            <p className="text-lg leading-relaxed">
              The report identifies several red flags in vendor accessibility
              documentation:
            </p>
            <ul className="space-y-3 text-lg">
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-300">
                  ⚠
                </span>
                <span>
                  <strong>Full conformance with no comments</strong> — A VPAT
                  showing 100% support with no qualifying notes likely wasn't
                  completed by someone who actually tested the product
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-300">
                  ⚠
                </span>
                <span>
                  <strong>AI-generated responses</strong> — NASCIO explicitly
                  warns against vague or AI-generated VPAT responses that don't
                  reflect actual product testing
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-300">
                  ⚠
                </span>
                <span>
                  <strong>No standardized scoring</strong> — Unlike
                  cybersecurity frameworks, accessibility reporting lacks a
                  standardized, objective scoring scale, making vendor
                  self-reporting inherently unreliable
                </span>
              </li>
            </ul>
            <p className="text-lg leading-relaxed">
              The takeaway for state procurement officers: don't trust vendor
              claims at face value. Independent testing and monitoring of
              vendor-provided platforms is essential. Tools like{" "}
              <Link
                href="/tools/free-accessibility-checker"
                className="text-sky-400 hover:text-sky-300 underline"
              >
                RatedWithAI's free accessibility checker
              </Link>{" "}
              can independently verify vendor claims by scanning the actual
              deployed product against WCAG 2.1 AA criteria.
            </p>
          </section>

          {/* Cost Reality */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              The Cost Problem: Why 54% of States Can't Afford Traditional
              Solutions
            </h2>
            <p className="text-lg leading-relaxed">
              The funding gap identified by NASCIO is directly tied to the cost
              structure of traditional enterprise accessibility tools. Let's
              look at the math that makes compliance feel impossible for most
              state budgets:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-red-500/30 bg-red-950/20 p-5 space-y-3">
                <h3 className="font-semibold text-red-300">
                  Traditional Enterprise Tools
                </h3>
                <p className="text-3xl font-bold text-white">
                  $50K–$200K+<span className="text-lg text-slate-400">/yr</span>
                </p>
                <ul className="text-sm text-slate-400 space-y-1">
                  <li>• Annual contracts required</li>
                  <li>• Per-page or per-domain pricing</li>
                  <li>• Implementation takes 3–6 months</li>
                  <li>• Separate cost for remediation services</li>
                  <li>• Complex procurement process needed</li>
                </ul>
              </div>
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-5 space-y-3">
                <h3 className="font-semibold text-emerald-300">
                  Modern Automated Monitoring
                </h3>
                <p className="text-3xl font-bold text-white">
                  $29<span className="text-lg text-slate-400">/mo</span>
                </p>
                <ul className="text-sm text-slate-400 space-y-1">
                  <li>• No annual contract</li>
                  <li>• Continuous monitoring included</li>
                  <li>• Scan results in minutes</li>
                  <li>• Actionable remediation guidance</li>
                  <li>• Start immediately, no procurement delay</li>
                </ul>
              </div>
            </div>
            <p className="text-lg leading-relaxed">
              For a state agency with a dozen websites, the traditional
              approach could easily cost $100,000+ annually — money that 54%
              of states simply don't have allocated. But modern tools have
              fundamentally changed the economics. Automated WCAG scanning and
              continuous monitoring can be deployed for orders of magnitude
              less, covering the roughly 70% of WCAG criteria that can be
              tested automatically.
            </p>
            <p className="text-lg leading-relaxed">
              This doesn't eliminate the need for manual testing and
              remediation, but it dramatically reduces the barrier to getting
              started. A state agency can establish baseline compliance
              monitoring across all its properties for the cost of a single
              lunch meeting — rather than waiting months for a procurement
              cycle to approve a six-figure enterprise contract.
            </p>
          </section>

          {/* Practical Action Plan */}
          <section className="space-y-6 rounded-3xl border border-sky-500/40 bg-sky-950/20 p-8">
            <h2 className="text-3xl font-semibold text-white">
              Practical Action Plan for State Agencies (58 Days to
              Deadline)
            </h2>
            <p className="text-lg leading-relaxed">
              With less than two months until the April 24, 2026 deadline,
              here's a realistic action plan for state agencies that are
              behind:
            </p>

            <div className="space-y-4">
              <div className="rounded-xl border border-sky-500/30 bg-sky-950/30 p-5 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-bold">
                    1
                  </span>
                  <h3 className="font-semibold text-white">
                    Week 1: Baseline Assessment
                  </h3>
                </div>
                <p className="text-slate-300">
                  Run automated accessibility scans across all public-facing
                  websites and applications. Use a tool like{" "}
                  <Link
                    href="/tools/free-accessibility-checker"
                    className="text-sky-400 hover:text-sky-300 underline"
                  >
                    RatedWithAI's free accessibility checker
                  </Link>{" "}
                  to get immediate WCAG 2.1 AA compliance scores. Document
                  every result — this becomes your baseline and evidence of
                  good-faith compliance effort.
                </p>
              </div>

              <div className="rounded-xl border border-sky-500/30 bg-sky-950/30 p-5 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-bold">
                    2
                  </span>
                  <h3 className="font-semibold text-white">
                    Week 2: Triage and Prioritize
                  </h3>
                </div>
                <p className="text-slate-300">
                  Rank all digital properties by public impact (traffic volume,
                  critical services). Focus remediation on the highest-impact
                  systems first — per NASCIO's guidance. Identify and
                  categorize violations by severity (critical, serious,
                  moderate, minor).
                </p>
              </div>

              <div className="rounded-xl border border-sky-500/30 bg-sky-950/30 p-5 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-bold">
                    3
                  </span>
                  <h3 className="font-semibold text-white">
                    Weeks 3–6: Fix Critical Violations
                  </h3>
                </div>
                <p className="text-slate-300">
                  Address the most impactful WCAG failures first: missing alt
                  text, form labels, color contrast, keyboard navigation, and
                  page structure. These are the{" "}
                  <Link
                    href="/blog/ada-website-compliance-guide"
                    className="text-sky-400 hover:text-sky-300 underline"
                  >
                    most common failures
                  </Link>{" "}
                  and often the easiest to fix. Purge unnecessary documents
                  per Cohan's advice — follow retention schedules.
                </p>
              </div>

              <div className="rounded-xl border border-sky-500/30 bg-sky-950/30 p-5 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-bold">
                    4
                  </span>
                  <h3 className="font-semibold text-white">
                    Weeks 7–8: Vendor Accountability
                  </h3>
                </div>
                <p className="text-slate-300">
                  Review all third-party vendor platforms for accessibility.
                  Request current VPATs and independently verify claims. Update
                  contract language to include WCAG 2.1 AA requirements per
                  NASCIO's procurement checklist.
                </p>
              </div>

              <div className="rounded-xl border border-sky-500/30 bg-sky-950/30 p-5 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-bold">
                    5
                  </span>
                  <h3 className="font-semibold text-white">
                    Ongoing: Continuous Monitoring
                  </h3>
                </div>
                <p className="text-slate-300">
                  Set up continuous accessibility monitoring. Websites change
                  constantly — new content, updated pages, redesigned
                  components — and each change can introduce new violations.
                  Automated monitoring catches regressions before they become
                  litigation risks.
                </p>
              </div>
            </div>
          </section>

          {/* What States Can Learn */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              What This Means for Local Governments Too
            </h2>
            <p className="text-lg leading-relaxed">
              While the NASCIO report focuses on state-level compliance, the
              DOJ's ADA Title II rule applies equally to all state{" "}
              <em>and local</em> government entities. Cities, counties,
              school districts, public universities, transit authorities, and
              any other government-funded organization face the same WCAG 2.1
              AA requirements.
            </p>
            <p className="text-lg leading-relaxed">
              If state governments — with their dedicated IT departments,
              accessibility coordinators, and enterprise resources — are
              struggling this badly, imagine the situation for a city of
              60,000 with a two-person IT department. The April 2026 deadline
              applies to these entities too, and they have even fewer resources
              to work with.
            </p>
            <p className="text-lg leading-relaxed">
              Smaller local governments (under 50,000 population) have until
              April 2027, but that extra year will evaporate quickly. The time
              to start is now, regardless of which deadline applies to your
              entity. For a complete breakdown of{" "}
              <Link
                href="/blog/ada-title-ii-compliance-guide"
                className="text-sky-400 hover:text-sky-300 underline"
              >
                ADA Title II requirements and deadlines
              </Link>
              , see our comprehensive guide.
            </p>
          </section>

          {/* Accessibility as Infrastructure */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Accessibility as Infrastructure: The Cybersecurity Parallel
            </h2>
            <p className="text-lg leading-relaxed">
              Multiple leaders quoted in the NASCIO research drew explicit
              parallels between digital accessibility and cybersecurity — and
              the comparison is instructive.
            </p>
            <p className="text-lg leading-relaxed">
              A decade ago, many state governments treated cybersecurity as an
              afterthought. Today, it's the #1 priority in NASCIO's annual CIO
              survey, with dedicated budgets, staff, and governance structures
              in every state. Accessibility is following the same trajectory,
              having just climbed to #6 on NASCIO's priority list.
            </p>
            <p className="text-lg leading-relaxed">
              Pennsylvania's Adams captured it perfectly: "It's just as
              important as security. It needs to be embedded in the software
              development life cycle." And Cohan expressed hope that
              accessibility will become "a foundational pillar for technology"
              alongside security and privacy.
            </p>
            <p className="text-lg leading-relaxed">
              The implication: states that treat accessibility as a one-time
              project to check off by April 2026 will find themselves in the
              same position as states that treated cybersecurity as a one-time
              audit. True compliance requires continuous investment —
              automated monitoring, regular testing, ongoing training, and
              embedded processes throughout the technology lifecycle.
            </p>
          </section>

          {/* CTA Section */}
          <section className="rounded-3xl border-2 border-sky-500/50 bg-gradient-to-br from-sky-950/40 to-blue-950/40 p-8 space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Your State's Deadline Is 58 Days Away
            </h2>
            <p className="text-lg leading-relaxed text-slate-200">
              The NASCIO report makes one thing clear: most states aren't ready.
              But you don't need a six-figure enterprise contract to start.
              RatedWithAI provides continuous WCAG 2.1 AA monitoring at a
              fraction of the cost of traditional government accessibility
              tools.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-xl bg-slate-900/60 p-4 text-center">
                <p className="text-3xl font-bold text-sky-400">$29</p>
                <p className="text-sm text-slate-400">per month</p>
                <p className="mt-1 text-xs text-slate-500">
                  vs. $50K+/yr enterprise tools
                </p>
              </div>
              <div className="rounded-xl bg-slate-900/60 p-4 text-center">
                <p className="text-3xl font-bold text-sky-400">5 min</p>
                <p className="text-sm text-slate-400">to first scan</p>
                <p className="mt-1 text-xs text-slate-500">
                  vs. months of procurement
                </p>
              </div>
              <div className="rounded-xl bg-slate-900/60 p-4 text-center">
                <p className="text-3xl font-bold text-sky-400">24/7</p>
                <p className="text-sm text-slate-400">continuous monitoring</p>
                <p className="mt-1 text-xs text-slate-500">
                  vs. annual point-in-time audits
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/tools/free-accessibility-checker"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
              >
                Free Accessibility Check →
              </Link>
              <Link
                href="/government"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-800"
              >
                Government Solutions
              </Link>
            </div>
          </section>

          {/* Sources */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              Sources and Further Reading
            </h2>
            <ul className="space-y-2 text-slate-400">
              <li>
                •{" "}
                <a
                  href="https://www.nascio.org/resource-center/resources/nascio-it-accessibility-working-group-in-review-a-guide-to-doj-final-rule-compliance/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 underline"
                >
                  NASCIO IT Accessibility Working Group in Review: A Guide to
                  DOJ Final Rule Compliance
                </a>{" "}
                (February 2026)
              </li>
              <li>
                •{" "}
                <a
                  href="https://www.govtech.com/policy/are-states-ready-for-the-approaching-accessibility-deadline"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 underline"
                >
                  "Are States Ready for the Approaching Accessibility
                  Deadline?"
                </a>{" "}
                — GovTech (February 25, 2026)
              </li>
              <li>
                •{" "}
                <a
                  href="https://statescoop.com/digital-accessibility-nascio-report-2026/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 underline"
                >
                  "Digital accessibility working group encourages states to
                  'keep it simple' on policy"
                </a>{" "}
                — StateScoop (February 4, 2026)
              </li>
              <li>
                •{" "}
                <a
                  href="https://www.nascio.org/wp-content/uploads/2026/02/NASCIO-Guide-to-DOJ-Final-Rule-Compliance-2026_a11y.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 underline"
                >
                  NASCIO Guide to DOJ Final Rule Compliance (PDF)
                </a>
              </li>
              <li>
                •{" "}
                <a
                  href="https://www.cdc.gov/dhds/datasets/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 underline"
                >
                  CDC Disability and Health Data System
                </a>
              </li>
            </ul>
          </section>

          {/* Related Posts */}
          <section className="space-y-4 border-t border-slate-800 pt-10">
            <h2 className="text-2xl font-semibold text-white">
              Related Guides
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Link
                href="/blog/ada-title-ii-compliance-guide"
                className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-5 transition hover:border-slate-700 hover:bg-slate-900/70"
              >
                <p className="text-xs text-sky-400 uppercase tracking-wider">
                  Compliance Guide
                </p>
                <h3 className="mt-1 font-semibold text-white">
                  ADA Title II Compliance Guide for Government Websites 2026
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  Complete guide to the DOJ's new web accessibility
                  requirements for state and local government.
                </p>
              </Link>
              <Link
                href="/blog/ada-website-compliance-guide"
                className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-5 transition hover:border-slate-700 hover:bg-slate-900/70"
              >
                <p className="text-xs text-sky-400 uppercase tracking-wider">
                  Compliance Guide
                </p>
                <h3 className="mt-1 font-semibold text-white">
                  ADA Website Compliance: The Definitive Guide for 2026
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  Everything you need to know about ADA website compliance,
                  requirements, and how to achieve it.
                </p>
              </Link>
              <Link
                href="/blog/ada-website-lawsuit-statistics-2026"
                className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-5 transition hover:border-slate-700 hover:bg-slate-900/70"
              >
                <p className="text-xs text-rose-400 uppercase tracking-wider">
                  Legal
                </p>
                <h3 className="mt-1 font-semibold text-white">
                  Website Accessibility Lawsuit Statistics 2026
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  The latest lawsuit data, trends, and industry breakdown
                  for ADA website accessibility cases.
                </p>
              </Link>
              <Link
                href="/blog/section-508-compliance-guide"
                className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-5 transition hover:border-slate-700 hover:bg-slate-900/70"
              >
                <p className="text-xs text-purple-400 uppercase tracking-wider">
                  Government
                </p>
                <h3 className="mt-1 font-semibold text-white">
                  Section 508 Compliance: The Complete Guide for 2026
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  Federal accessibility requirements under Section 508 and how
                  they relate to WCAG and ADA Title II.
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
