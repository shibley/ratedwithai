/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title:
    "State ADA Reform Laws Tracker 2026: Every Bill Fighting Website Accessibility Lawsuits | RatedWithAI",
  description:
    "Track every state and federal bill reforming ADA website accessibility lawsuits in 2026. California SB 84 (signed into law), Utah SB 68, Missouri HB 1674, federal HR 3417, and more. Updated March 2026.",
  openGraph: {
    title:
      "State ADA Reform Laws Tracker 2026: Every Bill Fighting Website Accessibility Lawsuits",
    description:
      "The definitive tracker of state and federal legislation reshaping ADA website accessibility enforcement. 10+ bills across 8 jurisdictions. Updated monthly.",
    type: "article",
    publishedTime: "2026-03-01T00:00:00.000Z",
    authors: ["RatedWithAI Team"],
  },
  keywords: [
    "ada reform laws by state",
    "state ada website lawsuit reform",
    "ada right to cure law",
    "california sb 84",
    "utah sb 68",
    "missouri hb 1674",
    "ada lawsuit reform 2026",
    "website accessibility legislation",
    "ada reform tracker",
    "ada compliance laws by state",
    "ada website accessibility laws 2026",
    "website accessibility reform bills",
    "ada cure period by state",
    "ada lawsuit defense laws",
    "state website accessibility requirements",
    "ada legislative reform tracker",
    "web accessibility laws united states",
    "ada title iii reform",
    "ada lawsuit state laws",
    "digital accessibility legislation 2026",
  ],
  alternates: {
    canonical:
      "https://ratedwithai.com/blog/state-ada-reform-laws-tracker-2026",
  },
};

export default function StateADAReformLawsTracker2026Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline:
      "State ADA Reform Laws Tracker 2026: Every Bill Fighting Website Accessibility Lawsuits",
    description:
      "Comprehensive tracker of state and federal legislation reforming ADA website accessibility enforcement in 2026. Covers California SB 84, Utah SB 68, Missouri HB 1674, federal HR 3417, and 6 more bills across 8 jurisdictions.",
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

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which states have ADA right-to-cure laws for website accessibility?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "As of March 2026, California is the only state with a signed right-to-cure law for accessibility violations (SB 84, effective January 1, 2026, providing a 120-day cure period for businesses with 50 or fewer employees). Utah has introduced SB 68 with a 90-day cure window and counter-suit provisions, and Missouri has introduced HB 1674 targeting abusive web accessibility litigation. Both Utah and Missouri bills are pending legislative action.",
        },
      },
      {
        "@type": "Question",
        name: "What is California SB 84?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "California SB 84 (Senate Bill 84) is a signed law effective January 1, 2026, that creates a 120-day notice and right-to-cure period for construction-related accessibility violations against businesses with 50 or fewer employees. If a business corrects the violations within 120 days of receiving written notice, it is not liable for statutory damages, plaintiff's attorneys' fees, or costs. The law prevents plaintiffs from bypassing these protections by recasting claims as general ADA discrimination.",
        },
      },
      {
        "@type": "Question",
        name: "What is Utah SB 68?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Utah SB 68 (Abusive Website Access Litigation) is a proposed bill introduced January 2, 2026, that creates a new cause of action allowing businesses or the Attorney General to challenge web accessibility lawsuits as abusive and seek attorney's fees, sanctions, and punitive damages. It creates a rebuttable presumption of abuse if the business fixes accessibility barriers within 90 days of receiving notice.",
        },
      },
      {
        "@type": "Question",
        name: "What is Missouri HB 1674?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Missouri HB 1674 is the Act Against Abusive Website Access Litigation, introduced as nine separate bills in December 2025. It gives businesses 90 days to respond and fix their websites before a lawsuit can proceed, and enables the state attorney general to seek damages from attorneys engaging in abusive web accessibility litigation. The bill targets serial plaintiffs and copy-paste lawsuits.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a federal website accessibility law?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "There is no comprehensive federal website accessibility law yet, but two bills are pending. HR 3417 (Websites and Software Applications Accessibility Act of 2025) would create clear accessibility standards for private and public sector digital platforms with a 30-day cure period and phased compliance timelines. HR 5605 (Medical Device Nonvisual Accessibility Act of 2025) addresses accessible consumer medical devices specifically. Additionally, the DOJ's ADA Title II rule requires state and local governments to meet WCAG 2.1 AA by April 24, 2026 (large entities) or April 26, 2027 (smaller entities).",
        },
      },
      {
        "@type": "Question",
        name: "How do state ADA reform laws affect website accessibility requirements?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "State ADA reform laws are taking two distinct approaches. Some states like California, Utah, and Missouri are creating cure periods and anti-abuse provisions that make it harder to file serial lawsuits but don't eliminate accessibility requirements. Other states like New Jersey, Colorado, Virginia, and Pennsylvania are strengthening accessibility mandates for government agencies and vendors. Neither approach changes the underlying ADA obligation — businesses must still make their websites accessible. The reforms primarily affect how enforcement happens.",
        },
      },
      {
        "@type": "Question",
        name: "Do ADA right-to-cure laws apply to website accessibility?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on the specific law. California SB 84 applies specifically to 'construction-related accessibility claims' and does not directly address website accessibility under ADA Title III. However, some legal commentators suggest the precedent could influence future digital accessibility legislation. Utah SB 68 and Missouri HB 1674 specifically target 'website access litigation,' making them more directly relevant to digital accessibility. The federal HR 3417 would create a 30-day cure period specifically for digital accessibility violations.",
        },
      },
      {
        "@type": "Question",
        name: "What should businesses do while ADA reform laws are pending?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Don't wait for legislation to make your website accessible. Regardless of cure periods and reform bills, the ADA requires equal access to goods and services, and courts across the country continue to hold websites to WCAG 2.1 AA standards. Use automated testing tools to identify issues, conduct manual testing with assistive technologies, fix critical barriers first (navigation, forms, images), and implement ongoing monitoring. The best defense against any lawsuit — reformed or not — is a genuinely accessible website.",
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
          <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-sky-500/30 via-blue-500/20 to-purple-500/30 blur-3xl" />
          <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-gradient-to-tr from-indigo-500/30 via-blue-500/10 to-purple-500/30 blur-3xl" />

          <Header />

          <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-14 pt-4">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              Living Resource — Last Updated March 2026
            </p>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              State ADA Reform Laws Tracker 2026: Every Bill Fighting Website Accessibility Lawsuits
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              As{" "}
              <Link
                href="/blog/ada-website-lawsuit-statistics-2026"
                className="text-sky-400 hover:text-sky-300 underline"
              >
                ADA website lawsuits hit 8,667 federal filings in 2025
              </Link>
              , states are fighting back with legislation that reshapes how accessibility enforcement works. Some are creating cure periods to stop serial lawsuits. Others are strengthening accessibility mandates. This tracker covers every active bill across 8 jurisdictions — updated monthly as new legislation emerges.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
              <time dateTime="2026-03-01">March 1, 2026</time>
              <span>·</span>
              <span>18 min read</span>
            </div>
          </section>
        </div>

        <article className="mx-auto w-full max-w-4xl space-y-10 px-6 pb-24 text-slate-200">
          {/* Quick Summary */}
          <section className="rounded-3xl border-2 border-sky-500/50 bg-sky-950/30 p-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/20 text-2xl">
                📊
              </span>
              <h2 className="text-2xl font-bold text-sky-300">
                Quick Summary: The State of ADA Reform
              </h2>
            </div>
            <ul className="space-y-3 text-lg text-sky-100">
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 text-sm font-bold">
                  ✅
                </span>
                <span>
                  <strong>3 laws signed:</strong> California SB 84 (cure period), New Jersey S 1016 (WCAG mandate), Virginia HB 2541 (VPAT requirement)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 text-sm font-bold">
                  ⏳
                </span>
                <span>
                  <strong>5 bills pending:</strong> Utah SB 68, Missouri HB 1674, federal HR 3417, federal HR 5605, Pennsylvania HB 485
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 text-sm font-bold">
                  ✅
                </span>
                <span>
                  <strong>1 law enacted:</strong> Colorado HB 25-1152 (vendor liability for inaccessible IT in schools)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 text-sm font-bold">
                  ❌
                </span>
                <span>
                  <strong>1 bill vetoed:</strong> New Mexico HB 120 (WCAG 2.1 AA for state agencies — passed legislature 60-3 and 40-0 but vetoed by governor)
                </span>
              </li>
            </ul>
          </section>

          {/* Table of Contents */}
          <nav className="rounded-3xl border border-slate-700/50 bg-slate-900/50 p-8 space-y-4">
            <h2 className="text-xl font-bold text-slate-200">📋 Table of Contents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sky-400">
              <div className="space-y-2">
                <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider">Cure Period & Anti-Abuse Bills</p>
                <ul className="space-y-1.5">
                  <li><a href="#california" className="hover:text-sky-300 underline">✅ California SB 84 (Signed)</a></li>
                  <li><a href="#utah" className="hover:text-sky-300 underline">⏳ Utah SB 68 (Pending)</a></li>
                  <li><a href="#missouri" className="hover:text-sky-300 underline">⏳ Missouri HB 1674 (Pending)</a></li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider">Accessibility Mandates</p>
                <ul className="space-y-1.5">
                  <li><a href="#new-jersey" className="hover:text-sky-300 underline">✅ New Jersey S 1016 (Signed)</a></li>
                  <li><a href="#colorado" className="hover:text-sky-300 underline">✅ Colorado HB 25-1152 (Signed)</a></li>
                  <li><a href="#virginia" className="hover:text-sky-300 underline">✅ Virginia HB 2541 (Signed)</a></li>
                  <li><a href="#pennsylvania" className="hover:text-sky-300 underline">⏳ Pennsylvania HB 485 (Pending)</a></li>
                  <li><a href="#new-mexico" className="hover:text-sky-300 underline">❌ New Mexico HB 120 (Vetoed)</a></li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider">Federal Bills</p>
                <ul className="space-y-1.5">
                  <li><a href="#hr-3417" className="hover:text-sky-300 underline">⏳ HR 3417 — Digital Accessibility Standards</a></li>
                  <li><a href="#hr-5605" className="hover:text-sky-300 underline">⏳ HR 5605 — Medical Device Accessibility</a></li>
                  <li><a href="#title-ii" className="hover:text-sky-300 underline">⚖️ ADA Title II Rule (Active)</a></li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider">Analysis</p>
                <ul className="space-y-1.5">
                  <li><a href="#two-tracks" className="hover:text-sky-300 underline">Two Tracks of Reform</a></li>
                  <li><a href="#what-means" className="hover:text-sky-300 underline">What This Means for Businesses</a></li>
                  <li><a href="#timeline" className="hover:text-sky-300 underline">Key Dates Timeline</a></li>
                  <li><a href="#faq" className="hover:text-sky-300 underline">FAQ</a></li>
                </ul>
              </div>
            </div>
          </nav>

          {/* Why This Matters */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white">
              Why a Reform Tracker Matters in 2026
            </h2>
            <p className="text-lg leading-relaxed">
              The landscape of ADA website accessibility enforcement is fracturing. With{" "}
              <Link
                href="/blog/ada-website-lawsuit-statistics-2026"
                className="text-sky-400 hover:text-sky-300 underline"
              >
                8,667 federal lawsuits filed in 2025
              </Link>{" "}
              — up from 4,605 just three years ago — state legislatures are responding with two fundamentally different approaches:
            </p>
            <ul className="space-y-3 text-lg">
              <li className="flex gap-3">
                <span className="text-amber-400 text-xl">🛡️</span>
                <span>
                  <strong className="text-amber-300">Defense-oriented reforms</strong> — Creating cure periods, counter-suit rights, and anti-abuse provisions to protect businesses from serial litigation (California, Utah, Missouri)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400 text-xl">📋</span>
                <span>
                  <strong className="text-emerald-300">Mandate-oriented reforms</strong> — Requiring government agencies and their vendors to meet specific accessibility standards like WCAG 2.1 AA (New Jersey, Colorado, Virginia, Pennsylvania)
                </span>
              </li>
            </ul>
            <p className="text-lg leading-relaxed">
              These aren't contradictory. Both reflect the same reality: the current system isn't working. Serial plaintiffs exploit the lack of clear standards, while genuinely disabled users still can't access basic websites. This tracker follows every active piece of legislation so you can plan accordingly.
            </p>
          </section>

          {/* SECTION: Cure Period Bills */}
          <section className="space-y-2">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-400 font-semibold">
              Part 1
            </p>
            <h2 className="text-3xl font-bold text-white">
              Cure Period & Anti-Abuse Bills
            </h2>
            <p className="text-slate-400">
              These bills give businesses time to fix accessibility issues before facing lawsuits or damages.
            </p>
          </section>

          {/* California SB 84 */}
          <section id="california" className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-8 space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <h3 className="text-2xl font-bold text-emerald-300">
                ✅ California SB 84 — 120-Day Right to Cure
              </h3>
              <span className="rounded-full bg-emerald-500/20 border border-emerald-500/40 px-4 py-1 text-sm font-bold text-emerald-300">
                SIGNED INTO LAW
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="rounded-xl bg-slate-800/50 p-4 text-center">
                <p className="text-sm text-slate-400">Status</p>
                <p className="text-lg font-bold text-emerald-400">Enacted</p>
              </div>
              <div className="rounded-xl bg-slate-800/50 p-4 text-center">
                <p className="text-sm text-slate-400">Effective Date</p>
                <p className="text-lg font-bold text-white">Jan 1, 2026</p>
              </div>
              <div className="rounded-xl bg-slate-800/50 p-4 text-center">
                <p className="text-sm text-slate-400">Cure Period</p>
                <p className="text-lg font-bold text-amber-400">120 Days</p>
              </div>
              <div className="rounded-xl bg-slate-800/50 p-4 text-center">
                <p className="text-sm text-slate-400">Applies To</p>
                <p className="text-lg font-bold text-white">≤50 Employees</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">What It Does</h4>
              <p className="text-lg leading-relaxed">
                California SB 84 creates the longest right-to-cure window in the country. For businesses with 50 or fewer employees facing <strong>construction-related accessibility claims</strong>, the law:
              </p>
              <ul className="space-y-2 text-lg">
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span>Requires plaintiffs to send written notice specifying each alleged violation <strong>before</strong> filing suit for statutory damages</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span>Gives businesses <strong>120 days</strong> to correct the violations after receiving notice</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span>Eliminates liability for <strong>statutory damages, attorney's fees, and costs</strong> if violations are timely cured</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span>Blocks plaintiffs from bypassing these protections by recasting claims as general ADA discrimination</span>
                </li>
              </ul>

              <h4 className="text-xl font-semibold text-white">Why It Matters</h4>
              <p className="text-lg leading-relaxed">
                California had{" "}
                <Link
                  href="/blog/ada-lawsuit-state-migration-2026"
                  className="text-sky-400 hover:text-sky-300 underline"
                >
                  3,252 federal ADA lawsuits in 2025
                </Link>{" "}
                — more than any other state by far. The fact that the #1 lawsuit state signed a cure-period law sends a powerful signal. However, note that SB 84 specifically addresses <em>construction-related</em> accessibility claims, not website accessibility directly. Its impact on digital ADA cases remains to be tested in court.
              </p>
              <p className="text-lg leading-relaxed">
                Read our full analysis:{" "}
                <Link
                  href="/blog/california-sb-84-ada-right-to-cure-2026"
                  className="text-sky-400 hover:text-sky-300 underline"
                >
                  California SB 84: 120-Day Right to Cure for ADA Violations →
                </Link>
              </p>

              <div className="rounded-xl bg-slate-800/50 p-4 text-sm text-slate-300">
                <strong>Source:</strong>{" "}
                <a href="https://legiscan.com/CA/text/SB84/id/3066671" className="text-sky-400 hover:text-sky-300 underline" target="_blank" rel="noopener noreferrer">
                  LegIScan — CA SB 84
                </a>
                {" | "}
                <a href="https://ogletree.com/insights-resources/blog-posts/california-senate-passes-nations-first-bill-for-accessibility-violation-cure-period/" className="text-sky-400 hover:text-sky-300 underline" target="_blank" rel="noopener noreferrer">
                  Ogletree Deakins Analysis
                </a>
              </div>
            </div>
          </section>

          {/* Utah SB 68 */}
          <section id="utah" className="rounded-3xl border border-amber-500/30 bg-amber-950/20 p-8 space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <h3 className="text-2xl font-bold text-amber-300">
                ⏳ Utah SB 68 — Abusive Website Access Litigation
              </h3>
              <span className="rounded-full bg-amber-500/20 border border-amber-500/40 px-4 py-1 text-sm font-bold text-amber-300">
                PENDING
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="rounded-xl bg-slate-800/50 p-4 text-center">
                <p className="text-sm text-slate-400">Status</p>
                <p className="text-lg font-bold text-amber-400">Introduced</p>
              </div>
              <div className="rounded-xl bg-slate-800/50 p-4 text-center">
                <p className="text-sm text-slate-400">Introduced</p>
                <p className="text-lg font-bold text-white">Jan 2, 2026</p>
              </div>
              <div className="rounded-xl bg-slate-800/50 p-4 text-center">
                <p className="text-sm text-slate-400">Cure Period</p>
                <p className="text-lg font-bold text-amber-400">90 Days</p>
              </div>
              <div className="rounded-xl bg-slate-800/50 p-4 text-center">
                <p className="text-sm text-slate-400">Unique Feature</p>
                <p className="text-lg font-bold text-white">Counter-Sue</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">What It Does</h4>
              <p className="text-lg leading-relaxed">
                Utah SB 68 goes further than California by specifically targeting <strong>website</strong> accessibility lawsuits and creating offensive tools for businesses:
              </p>
              <ul className="space-y-2 text-lg">
                <li className="flex gap-3">
                  <span className="text-amber-400">→</span>
                  <span>Creates a new cause of action allowing businesses (or the AG) to <strong>counter-sue</strong> plaintiffs filing abusive web accessibility claims</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-400">→</span>
                  <span>Enables recovery of <strong>attorney's fees, sanctions, and punitive damages</strong> against abusive filers</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-400">→</span>
                  <span>Creates a <strong>rebuttable presumption of abuse</strong> if the business fixes barriers within 90 days of notice</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-400">→</span>
                  <span>Shifts the burden: once a business remediates, the <strong>plaintiff must prove</strong> the lawsuit wasn't abusive</span>
                </li>
              </ul>

              <h4 className="text-xl font-semibold text-white">Critical Context</h4>
              <p className="text-lg leading-relaxed">
                Accessibility commentators have noted that Utah is part of the Tenth Circuit, which already has the{" "}
                <a href="https://convergeaccessibility.com/2025/09/02/legal-update-august-2025/" className="text-sky-400 hover:text-sky-300 underline" target="_blank" rel="noopener noreferrer">
                  lowest number of web accessibility lawsuits
                </a>{" "}
                in the country. This raises questions about whether the bill addresses a real problem or is primarily a political statement. However, if passed, it could serve as a model for other states with higher filing volumes.
              </p>
              <p className="text-lg leading-relaxed">
                Read our full analysis:{" "}
                <Link
                  href="/blog/utah-missouri-anti-ada-lawsuit-bills-2026"
                  className="text-sky-400 hover:text-sky-300 underline"
                >
                  Utah & Missouri Anti-ADA Lawsuit Bills: What Your Business Needs to Know →
                </Link>
              </p>

              <div className="rounded-xl bg-slate-800/50 p-4 text-sm text-slate-300">
                <strong>Source:</strong>{" "}
                <a href="https://legiscan.com/UT/drafts/SB0068/2026" className="text-sky-400 hover:text-sky-300 underline" target="_blank" rel="noopener noreferrer">
                  LegIScan — UT SB 68
                </a>
                {" | "}
                <a href="https://convergeaccessibility.com/2026/02/02/legal-update-january-2026/" className="text-sky-400 hover:text-sky-300 underline" target="_blank" rel="noopener noreferrer">
                  Converge Accessibility Analysis
                </a>
              </div>
            </div>
          </section>

          {/* Missouri HB 1674 */}
          <section id="missouri" className="rounded-3xl border border-amber-500/30 bg-amber-950/20 p-8 space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <h3 className="text-2xl font-bold text-amber-300">
                ⏳ Missouri HB 1674 — Act Against Abusive Website Access Litigation
              </h3>
              <span className="rounded-full bg-amber-500/20 border border-amber-500/40 px-4 py-1 text-sm font-bold text-amber-300">
                PENDING
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="rounded-xl bg-slate-800/50 p-4 text-center">
                <p className="text-sm text-slate-400">Status</p>
                <p className="text-lg font-bold text-amber-400">In Committee</p>
              </div>
              <div className="rounded-xl bg-slate-800/50 p-4 text-center">
                <p className="text-sm text-slate-400">Introduced</p>
                <p className="text-lg font-bold text-white">Dec 2025</p>
              </div>
              <div className="rounded-xl bg-slate-800/50 p-4 text-center">
                <p className="text-sm text-slate-400">Cure Period</p>
                <p className="text-lg font-bold text-amber-400">90 Days</p>
              </div>
              <div className="rounded-xl bg-slate-800/50 p-4 text-center">
                <p className="text-sm text-slate-400">Unique Feature</p>
                <p className="text-lg font-bold text-white">AG Enforcement</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">What It Does</h4>
              <p className="text-lg leading-relaxed">
                Missouri's bill is the most aggressive anti-abuse measure, specifically empowering the state Attorney General to go after attorneys who file predatory web accessibility lawsuits:
              </p>
              <ul className="space-y-2 text-lg">
                <li className="flex gap-3">
                  <span className="text-amber-400">→</span>
                  <span>Gives businesses <strong>90 days to fix websites</strong> after receiving notice before suit can proceed</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-400">→</span>
                  <span>Enables the <strong>AG to seek damages from attorneys</strong> engaging in abusive web accessibility litigation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-400">→</span>
                  <span>Introduced as <strong>nine separate bills</strong> in December 2025 — broad bipartisan support</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-400">→</span>
                  <span>Targets <strong>copy-paste complaints</strong> and serial filing patterns specifically</span>
                </li>
              </ul>

              <h4 className="text-xl font-semibold text-white">Legislative Progress</h4>
              <p className="text-lg leading-relaxed">
                Missouri legislators from both parties have come together on this bill. As{" "}
                <a href="https://www.kbia.org/missouri-news/2026-02-13/legislators-fight-ada-website-lawsuits" className="text-sky-400 hover:text-sky-300 underline" target="_blank" rel="noopener noreferrer">
                  KBIA reported
                </a>
                , the bill gained momentum in February 2026 with public hearings highlighting small business owners targeted by serial filers. The bill may have passed the House in January 2026, though Senate action is still pending.
              </p>
              <p className="text-lg leading-relaxed">
                Missouri courts have also been active. In{" "}
                <em>Myers v. Mary Jane Bourbon & Chophouse</em> (E.D. Mo. 2026), a federal judge dismissed an ADA claim against a restaurant with a purely informational website, writing that the plaintiff's logic would mean "the ADA also requires all advertisement signs to be tactile, all flyers and brochures to be printed in braille, and all barkers and street promoters to use American Sign Language."
              </p>

              <div className="rounded-xl bg-slate-800/50 p-4 text-sm text-slate-300">
                <strong>Source:</strong>{" "}
                <a href="https://legiscan.com/MO/text/HB1674/id/3286275" className="text-sky-400 hover:text-sky-300 underline" target="_blank" rel="noopener noreferrer">
                  LegIScan — MO HB 1674
                </a>
                {" | "}
                <a href="https://www.kbia.org/missouri-news/2026-02-13/legislators-fight-ada-website-lawsuits" className="text-sky-400 hover:text-sky-300 underline" target="_blank" rel="noopener noreferrer">
                  KBIA Coverage
                </a>
              </div>
            </div>
          </section>

          {/* SECTION: Accessibility Mandates */}
          <section className="space-y-2 pt-6">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-400 font-semibold">
              Part 2
            </p>
            <h2 className="text-3xl font-bold text-white">
              Accessibility Mandate Bills
            </h2>
            <p className="text-slate-400">
              These bills require government agencies and vendors to meet specific accessibility standards.
            </p>
          </section>

          {/* New Jersey S 1016 */}
          <section id="new-jersey" className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-8 space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <h3 className="text-2xl font-bold text-emerald-300">
                ✅ New Jersey S 1016 — State Agency WCAG Mandate
              </h3>
              <span className="rounded-full bg-emerald-500/20 border border-emerald-500/40 px-4 py-1 text-sm font-bold text-emerald-300">
                SIGNED INTO LAW
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="rounded-xl bg-slate-800/50 p-4 text-center">
                <p className="text-sm text-slate-400">Status</p>
                <p className="text-lg font-bold text-emerald-400">Enacted</p>
              </div>
              <div className="rounded-xl bg-slate-800/50 p-4 text-center">
                <p className="text-sm text-slate-400">Signed</p>
                <p className="text-lg font-bold text-white">Jan 20, 2026</p>
              </div>
              <div className="rounded-xl bg-slate-800/50 p-4 text-center">
                <p className="text-sm text-slate-400">Standard</p>
                <p className="text-lg font-bold text-amber-400">WCAG A/AA</p>
              </div>
              <div className="rounded-xl bg-slate-800/50 p-4 text-center">
                <p className="text-sm text-slate-400">Applies To</p>
                <p className="text-lg font-bold text-white">State Agencies</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">What It Does</h4>
              <ul className="space-y-2 text-lg">
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span>Requires all New Jersey state agencies to make websites accessible to people with disabilities and on mobile devices</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span>Mandates compliance with <strong>WCAG A/AA</strong> standards</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span>Proposes the state <strong>Chief Technology Officer create a certification process</strong> for state agency websites</span>
                </li>
              </ul>

              <h4 className="text-xl font-semibold text-white">Why It Matters</h4>
              <p className="text-lg leading-relaxed">
                New Jersey joins a growing list of states codifying WCAG compliance into law for their own agencies. This complements the{" "}
                <Link
                  href="/blog/ada-title-ii-deadline-countdown-2026"
                  className="text-sky-400 hover:text-sky-300 underline"
                >
                  federal ADA Title II rule
                </Link>{" "}
                that requires WCAG 2.1 AA for all state and local government websites by April 24, 2026. New Jersey's law goes further by creating a certification framework — potentially a model for other states.
              </p>
            </div>
          </section>

          {/* Colorado HB 25-1152 */}
          <section id="colorado" className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-8 space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <h3 className="text-2xl font-bold text-emerald-300">
                ✅ Colorado HB 25-1152 — IT Vendor Liability for Schools
              </h3>
              <span className="rounded-full bg-emerald-500/20 border border-emerald-500/40 px-4 py-1 text-sm font-bold text-emerald-300">
                SIGNED INTO LAW
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="rounded-xl bg-slate-800/50 p-4 text-center">
                <p className="text-sm text-slate-400">Signed</p>
                <p className="text-lg font-bold text-white">May 24, 2025</p>
              </div>
              <div className="rounded-xl bg-slate-800/50 p-4 text-center">
                <p className="text-sm text-slate-400">Applies To</p>
                <p className="text-lg font-bold text-white">IT Vendors</p>
              </div>
              <div className="rounded-xl bg-slate-800/50 p-4 text-center">
                <p className="text-sm text-slate-400">Sector</p>
                <p className="text-lg font-bold text-amber-400">Public Schools</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                Colorado took a unique approach by inserting vendor liability clauses for inaccessible IT products sold to public schools. If your company sells software, apps, or digital tools to Colorado's K-12 system, <strong>you're now liable if your product isn't accessible</strong>. This is significant because it shifts responsibility upstream to technology vendors rather than placing the burden solely on schools.
              </p>
              <p className="text-lg leading-relaxed">
                For related coverage, see our guide on{" "}
                <Link
                  href="/blog/school-district-website-ada-compliance-2026"
                  className="text-sky-400 hover:text-sky-300 underline"
                >
                  school district website ADA compliance
                </Link>
                .
              </p>
            </div>
          </section>

          {/* Virginia HB 2541 */}
          <section id="virginia" className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-8 space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <h3 className="text-2xl font-bold text-emerald-300">
                ✅ Virginia HB 2541 — VPAT/ACR Vendor Requirements
              </h3>
              <span className="rounded-full bg-emerald-500/20 border border-emerald-500/40 px-4 py-1 text-sm font-bold text-emerald-300">
                SIGNED INTO LAW
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="rounded-xl bg-slate-800/50 p-4 text-center">
                <p className="text-sm text-slate-400">Signed</p>
                <p className="text-lg font-bold text-white">Mar 24, 2025</p>
              </div>
              <div className="rounded-xl bg-slate-800/50 p-4 text-center">
                <p className="text-sm text-slate-400">Applies To</p>
                <p className="text-lg font-bold text-white">Vendors</p>
              </div>
              <div className="rounded-xl bg-slate-800/50 p-4 text-center">
                <p className="text-sm text-slate-400">Requires</p>
                <p className="text-lg font-bold text-amber-400">VPAT/ACR</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                Virginia now requires IT vendors selling to the state to provide a{" "}
                <Link
                  href="/blog/vpat-accessibility-conformance-report-guide-2026"
                  className="text-sky-400 hover:text-sky-300 underline"
                >
                  Voluntary Product Accessibility Template (VPAT) / Accessibility Conformance Report (ACR)
                </Link>{" "}
                and submit a plan for closing any accessibility gaps. This creates a procurement-side incentive: if your product doesn't have an ACR, you can't sell to Virginia state agencies.
              </p>
              <p className="text-lg leading-relaxed">
                This follows the federal government's existing{" "}
                <Link
                  href="/blog/section-508-compliance-guide"
                  className="text-sky-400 hover:text-sky-300 underline"
                >
                  Section 508 procurement requirements
                </Link>{" "}
                and signals that states are independently adopting similar vendor accountability measures.
              </p>
            </div>
          </section>

          {/* Pennsylvania HB 485 */}
          <section id="pennsylvania" className="rounded-3xl border border-amber-500/30 bg-amber-950/20 p-8 space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <h3 className="text-2xl font-bold text-amber-300">
                ⏳ Pennsylvania HB 485 — Public Entity WCAG Plan
              </h3>
              <span className="rounded-full bg-amber-500/20 border border-amber-500/40 px-4 py-1 text-sm font-bold text-amber-300">
                PENDING
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="rounded-xl bg-slate-800/50 p-4 text-center">
                <p className="text-sm text-slate-400">Introduced</p>
                <p className="text-lg font-bold text-white">Feb 4, 2025</p>
              </div>
              <div className="rounded-xl bg-slate-800/50 p-4 text-center">
                <p className="text-sm text-slate-400">Deadline</p>
                <p className="text-lg font-bold text-amber-400">Jul 1, 2028</p>
              </div>
              <div className="rounded-xl bg-slate-800/50 p-4 text-center">
                <p className="text-sm text-slate-400">Session Ends</p>
                <p className="text-lg font-bold text-white">Nov 30, 2026</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                Pennsylvania HB 485 would require all public entities in the state to create a plan for meeting WCAG accessibility standards by July 1, 2028. While less aggressive than New Jersey's certification approach, it sets a clear timeline for government digital accessibility and would affect hundreds of state and local agencies.
              </p>
              <p className="text-lg leading-relaxed">
                The bill has until November 30, 2026, to pass during the current legislative session. Given the{" "}
                <Link
                  href="/blog/ada-title-ii-deadline-countdown-2026"
                  className="text-sky-400 hover:text-sky-300 underline"
                >
                  April 2026 ADA Title II deadline
                </Link>
                , Pennsylvania agencies already face federal pressure to comply — this bill would add state-level requirements on top.
              </p>
            </div>
          </section>

          {/* New Mexico HB 120 */}
          <section id="new-mexico" className="rounded-3xl border border-rose-500/30 bg-rose-950/20 p-8 space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <h3 className="text-2xl font-bold text-rose-300">
                ❌ New Mexico HB 120 — State Agency WCAG Mandate (Vetoed)
              </h3>
              <span className="rounded-full bg-rose-500/20 border border-rose-500/40 px-4 py-1 text-sm font-bold text-rose-300">
                VETOED
              </span>
            </div>

            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                New Mexico HB 120 would have required WCAG 2.1 AA compliance for all state agency websites by April 1, 2026, and created a new Office of Accessibility. The bill had <strong>overwhelming bipartisan support</strong> — passing the House 60-3 and the Senate 40-0 — before being vetoed by the governor on March 20, 2025. The legislature adjourned two days later, killing the bill for the session.
              </p>
              <p className="text-lg leading-relaxed">
                This is a cautionary tale: even near-unanimous legislative support doesn't guarantee passage. The veto came despite the bill aligning with the federal ADA Title II rule. Whether a similar bill will be reintroduced in a future session remains to be seen.
              </p>
            </div>
          </section>

          {/* SECTION: Federal Bills */}
          <section className="space-y-2 pt-6">
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-400 font-semibold">
              Part 3
            </p>
            <h2 className="text-3xl font-bold text-white">
              Federal Legislation & Rules
            </h2>
            <p className="text-slate-400">
              Federal bills and regulations that affect digital accessibility nationwide.
            </p>
          </section>

          {/* HR 3417 */}
          <section id="hr-3417" className="rounded-3xl border border-indigo-500/30 bg-indigo-950/20 p-8 space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <h3 className="text-2xl font-bold text-indigo-300">
                ⏳ HR 3417 — Websites and Software Applications Accessibility Act
              </h3>
              <span className="rounded-full bg-indigo-500/20 border border-indigo-500/40 px-4 py-1 text-sm font-bold text-indigo-300">
                PENDING
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="rounded-xl bg-slate-800/50 p-4 text-center">
                <p className="text-sm text-slate-400">Introduced</p>
                <p className="text-lg font-bold text-white">May 14, 2025</p>
              </div>
              <div className="rounded-xl bg-slate-800/50 p-4 text-center">
                <p className="text-sm text-slate-400">Congress</p>
                <p className="text-lg font-bold text-white">119th</p>
              </div>
              <div className="rounded-xl bg-slate-800/50 p-4 text-center">
                <p className="text-sm text-slate-400">Cure Period</p>
                <p className="text-lg font-bold text-amber-400">30 Days</p>
              </div>
              <div className="rounded-xl bg-slate-800/50 p-4 text-center">
                <p className="text-sm text-slate-400">Budget</p>
                <p className="text-lg font-bold text-white">$35.15M/yr</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">What It Does</h4>
              <p className="text-lg leading-relaxed">
                This is the big one. HR 3417 would be the first comprehensive federal law specifically mandating digital accessibility standards for both private and public sector websites and software. If passed, it would:
              </p>
              <ul className="space-y-2 text-lg">
                <li className="flex gap-3">
                  <span className="text-indigo-400">→</span>
                  <span>Establish <strong>uniform accessibility standards</strong> for websites and applications</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-400">→</span>
                  <span>Apply to employers, employment agencies, public entities, public accommodations, and commercial providers</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-400">→</span>
                  <span>Create a <strong>30-day cure period</strong> before lawsuits can proceed</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-400">→</span>
                  <span>Authorize <strong>$35.15 million per year</strong> for enforcement (fiscal years 2026-2035)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-400">→</span>
                  <span>Has <strong>bipartisan support</strong> — introduced in two previous congressional sessions</span>
                </li>
              </ul>

              <h4 className="text-xl font-semibold text-white">Reality Check</h4>
              <p className="text-lg leading-relaxed">
                This bill has been introduced three times across three congressional sessions. While it has bipartisan cosponsors and endorsements from organizations like the American Council of the Blind, it has never made it out of committee. The current political environment makes comprehensive federal accessibility legislation unlikely in the near term, but the bill represents where the policy conversation is heading.
              </p>

              <div className="rounded-xl bg-slate-800/50 p-4 text-sm text-slate-300">
                <strong>Source:</strong>{" "}
                <a href="https://www.congress.gov/bill/119th-congress/house-bill/3417" className="text-sky-400 hover:text-sky-300 underline" target="_blank" rel="noopener noreferrer">
                  Congress.gov — HR 3417
                </a>
                {" | "}
                <a href="https://www.acb.org/reintroduction-websites-and-software-applications-accessibility-act" className="text-sky-400 hover:text-sky-300 underline" target="_blank" rel="noopener noreferrer">
                  American Council of the Blind
                </a>
              </div>
            </div>
          </section>

          {/* HR 5605 */}
          <section id="hr-5605" className="rounded-3xl border border-indigo-500/30 bg-indigo-950/20 p-8 space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <h3 className="text-2xl font-bold text-indigo-300">
                ⏳ HR 5605 — Medical Device Nonvisual Accessibility Act
              </h3>
              <span className="rounded-full bg-indigo-500/20 border border-indigo-500/40 px-4 py-1 text-sm font-bold text-indigo-300">
                PENDING
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="rounded-xl bg-slate-800/50 p-4 text-center">
                <p className="text-sm text-slate-400">Introduced</p>
                <p className="text-lg font-bold text-white">Sep 26, 2025</p>
              </div>
              <div className="rounded-xl bg-slate-800/50 p-4 text-center">
                <p className="text-sm text-slate-400">Focus</p>
                <p className="text-lg font-bold text-white">Medical Devices</p>
              </div>
              <div className="rounded-xl bg-slate-800/50 p-4 text-center">
                <p className="text-sm text-slate-400">Agencies</p>
                <p className="text-lg font-bold text-amber-400">HHS + Access Board</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                HR 5605 addresses a critical gap in accessibility law: consumer medical devices. From insulin pumps to blood glucose monitors, many medical devices with digital interfaces are unusable by people with visual impairments. The bill would require HHS and the Access Board to develop regulations and standards for accessible consumer medical devices.
              </p>
              <p className="text-lg leading-relaxed">
                While narrower in scope than HR 3417, this bill addresses a life-safety issue — people who can't read their medical device screens face genuine health risks.
              </p>
            </div>
          </section>

          {/* ADA Title II Rule */}
          <section id="title-ii" className="rounded-3xl border border-sky-500/30 bg-sky-950/20 p-8 space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <h3 className="text-2xl font-bold text-sky-300">
                ⚖️ ADA Title II Rule — WCAG 2.1 AA for Government
              </h3>
              <span className="rounded-full bg-sky-500/20 border border-sky-500/40 px-4 py-1 text-sm font-bold text-sky-300">
                ACTIVE — DEADLINE APPROACHING
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="rounded-xl bg-slate-800/50 p-4 text-center">
                <p className="text-sm text-slate-400">Large Entities</p>
                <p className="text-lg font-bold text-rose-400">Apr 24, 2026</p>
              </div>
              <div className="rounded-xl bg-slate-800/50 p-4 text-center">
                <p className="text-sm text-slate-400">Small Entities</p>
                <p className="text-lg font-bold text-amber-400">Apr 26, 2027</p>
              </div>
              <div className="rounded-xl bg-slate-800/50 p-4 text-center">
                <p className="text-sm text-slate-400">Standard</p>
                <p className="text-lg font-bold text-white">WCAG 2.1 AA</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                While not legislation, the DOJ's ADA Title II final rule is the most impactful accessibility requirement of 2026. It mandates WCAG 2.1 Level AA compliance for all state and local government web content and mobile apps:
              </p>
              <ul className="space-y-2 text-lg">
                <li className="flex gap-3">
                  <span className="text-sky-400">→</span>
                  <span><strong>April 24, 2026:</strong> Population 50,000+ (except special districts) — <strong>54 days away</strong></span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">→</span>
                  <span><strong>April 26, 2027:</strong> Population under 50,000 and all special districts</span>
                </li>
              </ul>
              <p className="text-lg leading-relaxed">
                This affects every city, county, state agency, public university, school district, and transit authority in the country. Read our comprehensive countdown:{" "}
                <Link
                  href="/blog/ada-title-ii-deadline-countdown-2026"
                  className="text-sky-400 hover:text-sky-300 underline"
                >
                  ADA Title II April 2026 Deadline Countdown →
                </Link>
              </p>
            </div>
          </section>

          {/* Two Tracks Analysis */}
          <section id="two-tracks" className="space-y-6 pt-6">
            <h2 className="text-3xl font-bold text-white">
              Two Tracks of Reform: Defense vs. Mandates
            </h2>
            <p className="text-lg leading-relaxed">
              The bills tracked above reveal a split in how states approach accessibility legislation. Understanding this split is crucial for planning your compliance strategy:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-3xl border border-amber-500/30 bg-amber-950/20 p-6 space-y-4">
                <h3 className="text-xl font-bold text-amber-300">🛡️ Track 1: Defense & Cure</h3>
                <p className="text-slate-300">California, Utah, Missouri</p>
                <ul className="space-y-2 text-slate-200">
                  <li>• Create cure periods (90-120 days)</li>
                  <li>• Enable counter-suits against abuse</li>
                  <li>• Target serial plaintiff attorneys</li>
                  <li>• Don't change underlying ADA obligation</li>
                  <li>• Focus: <strong>how enforcement happens</strong></li>
                </ul>
                <p className="text-sm text-amber-200/70 italic">
                  "You still must be accessible, but you get a chance to fix issues before we sue."
                </p>
              </div>

              <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-6 space-y-4">
                <h3 className="text-xl font-bold text-emerald-300">📋 Track 2: Mandates & Standards</h3>
                <p className="text-slate-300">New Jersey, Colorado, Virginia, Pennsylvania</p>
                <ul className="space-y-2 text-slate-200">
                  <li>• Codify WCAG compliance into law</li>
                  <li>• Require VPATs from vendors</li>
                  <li>• Create certification processes</li>
                  <li>• Add vendor liability provisions</li>
                  <li>• Focus: <strong>what the standard is</strong></li>
                </ul>
                <p className="text-sm text-emerald-200/70 italic">
                  "Here's exactly what accessible means, and vendors are accountable too."
                </p>
              </div>
            </div>

            <p className="text-lg leading-relaxed">
              These tracks aren't contradictory — they address different problems. Track 1 responds to the litigation explosion documented in our{" "}
              <Link
                href="/blog/ada-lawsuits-ai-powered-pro-se-2025"
                className="text-sky-400 hover:text-sky-300 underline"
              >
                AI-powered pro se filing analysis
              </Link>
              . Track 2 responds to the standards vacuum that the{" "}
              <Link
                href="/blog/doj-wcag-not-ada-standard-2026"
                className="text-sky-400 hover:text-sky-300 underline"
              >
                DOJ's own position on WCAG
              </Link>{" "}
              has created.
            </p>
          </section>

          {/* Cure Period Comparison */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Cure Period Comparison: State by State
            </h2>

            <div className="space-y-3">
              {/* California */}
              <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-5 flex items-center gap-4 flex-wrap">
                <div className="w-32 flex-shrink-0">
                  <p className="text-sm text-slate-400">California</p>
                  <p className="text-lg font-bold text-emerald-400">SB 84 ✅</p>
                </div>
                <div className="flex-1">
                  <div className="h-4 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-4 rounded-full bg-gradient-to-r from-amber-500 to-amber-400" style={{ width: "100%" }}></div>
                  </div>
                </div>
                <p className="text-lg font-bold text-amber-400 w-24 text-right">120 days</p>
              </div>

              {/* Utah */}
              <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-5 flex items-center gap-4 flex-wrap">
                <div className="w-32 flex-shrink-0">
                  <p className="text-sm text-slate-400">Utah</p>
                  <p className="text-lg font-bold text-amber-400">SB 68 ⏳</p>
                </div>
                <div className="flex-1">
                  <div className="h-4 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-4 rounded-full bg-gradient-to-r from-amber-500 to-amber-400" style={{ width: "75%" }}></div>
                  </div>
                </div>
                <p className="text-lg font-bold text-amber-400 w-24 text-right">90 days</p>
              </div>

              {/* Missouri */}
              <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-5 flex items-center gap-4 flex-wrap">
                <div className="w-32 flex-shrink-0">
                  <p className="text-sm text-slate-400">Missouri</p>
                  <p className="text-lg font-bold text-amber-400">HB 1674 ⏳</p>
                </div>
                <div className="flex-1">
                  <div className="h-4 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-4 rounded-full bg-gradient-to-r from-amber-500 to-amber-400" style={{ width: "75%" }}></div>
                  </div>
                </div>
                <p className="text-lg font-bold text-amber-400 w-24 text-right">90 days</p>
              </div>

              {/* Federal */}
              <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-5 flex items-center gap-4 flex-wrap">
                <div className="w-32 flex-shrink-0">
                  <p className="text-sm text-slate-400">Federal</p>
                  <p className="text-lg font-bold text-indigo-400">HR 3417 ⏳</p>
                </div>
                <div className="flex-1">
                  <div className="h-4 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-4 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-400" style={{ width: "25%" }}></div>
                  </div>
                </div>
                <p className="text-lg font-bold text-indigo-400 w-24 text-right">30 days</p>
              </div>
            </div>
          </section>

          {/* What This Means for Businesses */}
          <section id="what-means" className="space-y-6">
            <h2 className="text-3xl font-bold text-white">
              What This Means for Your Business
            </h2>

            <div className="rounded-3xl border-2 border-rose-500/50 bg-rose-950/30 p-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/20 text-2xl">
                  ⚠️
                </span>
                <h3 className="text-xl font-bold text-rose-300">
                  Don't Wait for Reform — Act Now
                </h3>
              </div>
              <p className="text-lg text-rose-100 leading-relaxed">
                Every reform bill tracked above — even the most business-friendly ones — still requires you to <strong>actually fix your website</strong>. Cure periods give you time, not a pass. Counter-suit provisions protect against abuse, not against legitimate claims. The single best defense, regardless of which state you're in, is a genuinely accessible website.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Action Items by Business Type</h3>

              <div className="space-y-4">
                <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-6 space-y-3">
                  <h4 className="text-lg font-bold text-sky-300">🏢 Small Businesses (≤50 employees)</h4>
                  <ul className="space-y-2 text-slate-200">
                    <li>• <strong>If in California:</strong> You now have a 120-day cure period under SB 84 — but only for construction-related claims. Digital accessibility claims may not be covered.</li>
                    <li>• <strong>Scan your website</strong> with a{" "}
                      <Link href="/blog/best-accessibility-testing-tools-compared-2026" className="text-sky-400 hover:text-sky-300 underline">free accessibility testing tool</Link>
                      {" "}and fix critical issues</li>
                    <li>• <strong>Document your efforts</strong> — if a reform law applies, showing good faith remediation is your strongest defense</li>
                    <li>• Consider the{" "}
                      <Link href="/blog/irs-form-8826-disabled-access-credit-website-accessibility" className="text-sky-400 hover:text-sky-300 underline">IRS Disabled Access Credit</Link>
                      {" "}(up to $5,000/year) to offset costs</li>
                  </ul>
                </div>

                <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-6 space-y-3">
                  <h4 className="text-lg font-bold text-sky-300">🏛️ Government Agencies & Contractors</h4>
                  <ul className="space-y-2 text-slate-200">
                    <li>• <strong>The ADA Title II deadline is April 24, 2026</strong> — this is not optional and no state reform law changes it</li>
                    <li>• If you sell to Virginia, you need a{" "}
                      <Link href="/blog/vpat-accessibility-conformance-report-guide-2026" className="text-sky-400 hover:text-sky-300 underline">VPAT/ACR</Link>
                    </li>
                    <li>• If you sell IT to Colorado schools, you're now liable for accessibility</li>
                    <li>• Review{" "}
                      <Link href="/blog/section-508-compliance-guide" className="text-sky-400 hover:text-sky-300 underline">Section 508 requirements</Link>
                      {" "}for federal contracts</li>
                  </ul>
                </div>

                <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-6 space-y-3">
                  <h4 className="text-lg font-bold text-sky-300">🛒 E-Commerce Businesses</h4>
                  <ul className="space-y-2 text-slate-200">
                    <li>• <strong>You're the #1 target:</strong>{" "}
                      <Link href="/blog/ecommerce-accessibility-ada-compliance-guide" className="text-sky-400 hover:text-sky-300 underline">70% of ADA lawsuits target e-commerce</Link>
                    </li>
                    <li>• Cure period laws mostly don't help — they target construction-related (physical) claims or require you to fix the site anyway</li>
                    <li>• Courts in the Seventh Circuit have confirmed that{" "}
                      <Link href="/blog/online-only-stores-ada-compliance-2026" className="text-sky-400 hover:text-sky-300 underline">online-only stores must comply</Link>
                      {" "}with the ADA</li>
                    <li>• Implement ongoing monitoring — a{" "}
                      <Link href="/blog/repeat-ada-lawsuits-why-one-settlement-isnt-enough" className="text-sky-400 hover:text-sky-300 underline">one-time fix isn't enough</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Key Dates Timeline */}
          <section id="timeline" className="space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Key Dates Timeline
            </h2>

            <div className="space-y-0">
              {/* Timeline items */}
              <div className="flex gap-4 pb-6">
                <div className="flex flex-col items-center">
                  <div className="h-4 w-4 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20"></div>
                  <div className="w-0.5 flex-1 bg-slate-700"></div>
                </div>
                <div className="pb-4">
                  <p className="text-sm font-bold text-emerald-400">March 24, 2025</p>
                  <p className="text-lg text-white font-semibold">Virginia HB 2541 signed</p>
                  <p className="text-slate-400">VPAT/ACR requirement for vendors</p>
                </div>
              </div>

              <div className="flex gap-4 pb-6">
                <div className="flex flex-col items-center">
                  <div className="h-4 w-4 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20"></div>
                  <div className="w-0.5 flex-1 bg-slate-700"></div>
                </div>
                <div className="pb-4">
                  <p className="text-sm font-bold text-emerald-400">May 14, 2025</p>
                  <p className="text-lg text-white font-semibold">Federal HR 3417 introduced</p>
                  <p className="text-slate-400">Websites & Software Accessibility Act (3rd time)</p>
                </div>
              </div>

              <div className="flex gap-4 pb-6">
                <div className="flex flex-col items-center">
                  <div className="h-4 w-4 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20"></div>
                  <div className="w-0.5 flex-1 bg-slate-700"></div>
                </div>
                <div className="pb-4">
                  <p className="text-sm font-bold text-emerald-400">May 24, 2025</p>
                  <p className="text-lg text-white font-semibold">Colorado HB 25-1152 signed</p>
                  <p className="text-slate-400">IT vendor liability for public schools</p>
                </div>
              </div>

              <div className="flex gap-4 pb-6">
                <div className="flex flex-col items-center">
                  <div className="h-4 w-4 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20"></div>
                  <div className="w-0.5 flex-1 bg-slate-700"></div>
                </div>
                <div className="pb-4">
                  <p className="text-sm font-bold text-emerald-400">January 1, 2026</p>
                  <p className="text-lg text-white font-semibold">California SB 84 effective</p>
                  <p className="text-slate-400">120-day cure period for small businesses</p>
                </div>
              </div>

              <div className="flex gap-4 pb-6">
                <div className="flex flex-col items-center">
                  <div className="h-4 w-4 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20"></div>
                  <div className="w-0.5 flex-1 bg-slate-700"></div>
                </div>
                <div className="pb-4">
                  <p className="text-sm font-bold text-emerald-400">January 20, 2026</p>
                  <p className="text-lg text-white font-semibold">New Jersey S 1016 signed</p>
                  <p className="text-slate-400">WCAG A/AA mandate for state agencies</p>
                </div>
              </div>

              <div className="flex gap-4 pb-6">
                <div className="flex flex-col items-center">
                  <div className="h-4 w-4 rounded-full bg-rose-500 ring-4 ring-rose-500/20 animate-pulse"></div>
                  <div className="w-0.5 flex-1 bg-slate-700"></div>
                </div>
                <div className="pb-4">
                  <p className="text-sm font-bold text-rose-400">April 24, 2026 — 54 days away</p>
                  <p className="text-lg text-white font-semibold">ADA Title II deadline (large entities)</p>
                  <p className="text-slate-400">WCAG 2.1 AA mandatory for state/local govt ≥50K population</p>
                </div>
              </div>

              <div className="flex gap-4 pb-6">
                <div className="flex flex-col items-center">
                  <div className="h-4 w-4 rounded-full bg-amber-500 ring-4 ring-amber-500/20"></div>
                  <div className="w-0.5 flex-1 bg-slate-700"></div>
                </div>
                <div className="pb-4">
                  <p className="text-sm font-bold text-amber-400">November 30, 2026</p>
                  <p className="text-lg text-white font-semibold">Pennsylvania session ends</p>
                  <p className="text-slate-400">HB 485 must pass by this date or die</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="h-4 w-4 rounded-full bg-sky-500 ring-4 ring-sky-500/20"></div>
                </div>
                <div>
                  <p className="text-sm font-bold text-sky-400">April 26, 2027</p>
                  <p className="text-lg text-white font-semibold">ADA Title II deadline (small entities)</p>
                  <p className="text-slate-400">WCAG 2.1 AA mandatory for special districts & small entities</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="space-y-6 pt-6">
            <h2 className="text-3xl font-bold text-white">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-lg font-bold text-sky-300">Which states have ADA right-to-cure laws for website accessibility?</h3>
                <p className="text-slate-200 leading-relaxed">
                  As of March 2026, California is the only state with a signed right-to-cure law for accessibility violations (SB 84, effective January 1, 2026, providing a 120-day cure period for businesses with 50 or fewer employees). Utah has introduced SB 68 with a 90-day cure window and counter-suit provisions, and Missouri has introduced HB 1674 targeting abusive web accessibility litigation. Both Utah and Missouri bills are pending legislative action.
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-lg font-bold text-sky-300">What is California SB 84?</h3>
                <p className="text-slate-200 leading-relaxed">
                  California SB 84 is a signed law effective January 1, 2026, that creates a 120-day notice and right-to-cure period for construction-related accessibility violations against businesses with 50 or fewer employees. If a business corrects the violations within 120 days of receiving written notice, it is not liable for statutory damages, plaintiff's attorneys' fees, or costs.
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-lg font-bold text-sky-300">Is there a federal website accessibility law?</h3>
                <p className="text-slate-200 leading-relaxed">
                  There is no comprehensive federal website accessibility law yet, but HR 3417 (Websites and Software Applications Accessibility Act) has been introduced three times with bipartisan support. It would create clear standards and a 30-day cure period. Meanwhile, the DOJ's ADA Title II rule requires state and local governments to meet WCAG 2.1 AA by April 24, 2026 — the most significant federal accessibility requirement to date.
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-lg font-bold text-sky-300">Do ADA right-to-cure laws apply to website accessibility?</h3>
                <p className="text-slate-200 leading-relaxed">
                  It depends. California SB 84 applies specifically to "construction-related accessibility claims" — not directly to digital accessibility under ADA Title III. Utah SB 68 and Missouri HB 1674 specifically target "website access litigation," making them more directly relevant. The federal HR 3417 would create a 30-day cure period specifically for digital accessibility violations.
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-lg font-bold text-sky-300">What should businesses do while ADA reform laws are pending?</h3>
                <p className="text-slate-200 leading-relaxed">
                  Don't wait for legislation. The ADA requires equal access regardless of reform bills. Use{" "}
                  <Link href="/blog/best-accessibility-testing-tools-compared-2026" className="text-sky-400 hover:text-sky-300 underline">
                    automated testing tools
                  </Link>{" "}
                  to identify issues, fix critical barriers first (navigation, forms, images), implement{" "}
                  <Link href="/blog/repeat-ada-lawsuits-why-one-settlement-isnt-enough" className="text-sky-400 hover:text-sky-300 underline">
                    ongoing monitoring
                  </Link>
                  , and document your efforts. The best defense against any lawsuit is a genuinely accessible website.
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-lg font-bold text-sky-300">How do state ADA reform laws affect website accessibility requirements?</h3>
                <p className="text-slate-200 leading-relaxed">
                  State reforms take two approaches: defense-oriented (California, Utah, Missouri) and mandate-oriented (New Jersey, Colorado, Virginia, Pennsylvania). Neither eliminates the underlying ADA obligation. Defense laws change <em>how</em> enforcement happens, while mandate laws define <em>what</em> the standard is. Businesses in all states should still aim for WCAG 2.1 AA compliance.
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-lg font-bold text-sky-300">Will more states pass ADA reform laws in 2026?</h3>
                <p className="text-slate-200 leading-relaxed">
                  Very likely. With California signing SB 84 and multiple states introducing bills, the trend is accelerating. Washington State's WLAD ruling could open a new front for state-level accessibility claims. We expect additional bills in states with high lawsuit volumes —{" "}
                  <Link href="/blog/florida-ada-website-lawsuits-2026" className="text-sky-400 hover:text-sky-300 underline">Florida</Link>
                  {" "}(1,823 lawsuits, zero protections) is a prime candidate. This tracker is updated monthly as new legislation emerges.
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-lg font-bold text-sky-300">Can I rely on a cure period to avoid making my website accessible?</h3>
                <p className="text-slate-200 leading-relaxed">
                  No. Cure periods are a grace period to fix problems, not a license to ignore accessibility. If you receive notice and don't cure within the specified period, you face the full force of the original claim — plus you've now demonstrated awareness of the issue. Proactive accessibility is always cheaper and lower risk than reactive compliance under legal pressure.
                </p>
              </div>
            </div>
          </section>

          {/* This Tracker Is Updated */}
          <section className="rounded-3xl border border-sky-500/50 bg-sky-950/30 p-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/20 text-2xl">
                🔄
              </span>
              <h2 className="text-2xl font-bold text-sky-300">
                This Is a Living Document
              </h2>
            </div>
            <p className="text-lg text-sky-100 leading-relaxed">
              New accessibility legislation is introduced regularly. This tracker is updated monthly as bills advance, are signed, or fail. Bookmark this page and check back for the latest status on every bill.
            </p>
            <p className="text-lg text-sky-100 leading-relaxed">
              <strong>Last updated:</strong> March 1, 2026
            </p>
            <p className="text-lg text-sky-100 leading-relaxed">
              <strong>Sources:</strong> LegIScan, Congress.gov, Converge Accessibility, Seyfarth Shaw, Ogletree Deakins, state legislature websites
            </p>
          </section>

          {/* CTA */}
          <section className="rounded-3xl border-2 border-sky-500/50 bg-gradient-to-br from-sky-950/50 to-indigo-950/50 p-8 text-center space-y-4">
            <h2 className="text-2xl font-bold text-white">
              Check Your Website's Accessibility Score
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Regardless of which state you're in or which reform bills pass, the foundation of compliance is a genuinely accessible website. Get your free accessibility score in 60 seconds.
            </p>
            <div className="pt-2">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-8 py-3 text-lg font-semibold text-white hover:bg-sky-400 transition-colors"
              >
                Scan Your Website Free →
              </Link>
            </div>
          </section>

          {/* Related Reading */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Related Reading</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/blog/california-sb-84-ada-right-to-cure-2026"
                className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-5 hover:border-sky-500/50 transition-colors block"
              >
                <p className="text-sky-400 font-semibold">California SB 84: 120-Day Right to Cure →</p>
                <p className="text-sm text-slate-400 mt-1">Deep dive into California's landmark cure period law</p>
              </Link>
              <Link
                href="/blog/utah-missouri-anti-ada-lawsuit-bills-2026"
                className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-5 hover:border-sky-500/50 transition-colors block"
              >
                <p className="text-sky-400 font-semibold">Utah & Missouri Anti-ADA Bills →</p>
                <p className="text-sm text-slate-400 mt-1">Analysis of the two most aggressive anti-abuse bills</p>
              </Link>
              <Link
                href="/blog/ada-website-lawsuit-statistics-2026"
                className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-5 hover:border-sky-500/50 transition-colors block"
              >
                <p className="text-sky-400 font-semibold">ADA Lawsuit Statistics 2026 →</p>
                <p className="text-sm text-slate-400 mt-1">8,667 federal filings — the data behind the reform movement</p>
              </Link>
              <Link
                href="/blog/ada-title-ii-deadline-countdown-2026"
                className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-5 hover:border-sky-500/50 transition-colors block"
              >
                <p className="text-sky-400 font-semibold">ADA Title II April 2026 Deadline →</p>
                <p className="text-sm text-slate-400 mt-1">Countdown to the biggest government accessibility mandate</p>
              </Link>
              <Link
                href="/blog/doj-wcag-not-ada-standard-2026"
                className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-5 hover:border-sky-500/50 transition-colors block"
              >
                <p className="text-sky-400 font-semibold">DOJ: WCAG Is Not the ADA Standard →</p>
                <p className="text-sm text-slate-400 mt-1">Why the standards vacuum drives both litigation and reform</p>
              </Link>
              <Link
                href="/blog/courts-fighting-back-serial-ada-website-plaintiffs"
                className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-5 hover:border-sky-500/50 transition-colors block"
              >
                <p className="text-sky-400 font-semibold">Courts Fighting Back Against Serial Plaintiffs →</p>
                <p className="text-sm text-slate-400 mt-1">How judges are scrutinizing copy-paste ADA lawsuits</p>
              </Link>
            </div>
          </section>
        </article>

        <Footer />
      </div>
    </>
  );
}
