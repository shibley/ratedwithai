/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Government Website Accessibility | ADA Title II Compliance Tool | RatedWithAI",
  description:
    "State & local government ADA Title II compliance scanner starting at $29/mo. Under micro-purchase thresholds — no RFP needed. Free scan, Section 508 & WCAG 2.1 AA.",
  keywords: [
    "government website accessibility",
    "ADA Title II compliance tool",
    "state government accessibility scanner",
    "ada title ii compliance",
    "government website accessibility checker",
    "section 508 compliance tool",
    "ada compliance for local government",
    "wcag 2.1 government",
    "ada title ii deadline 2026",
    "municipal website accessibility",
    "local government ada compliance",
    "government wcag scanning",
    "ada compliance small city",
    "state government website compliance",
    "government accessibility audit",
  ],
  openGraph: {
    title:
      "Government Website Accessibility | ADA Title II Compliance Tool | RatedWithAI",
    description:
      "54% of state CIOs have zero dedicated accessibility budget. Meet your ADA Title II deadline with scanning starting at $29/mo — under micro-purchase thresholds.",
    type: "website",
    url: "https://ratedwithai.com/government",
    siteName: "RatedWithAI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Government ADA Title II Compliance — Starting at $29/mo",
    description:
      "Real WCAG scanning for government budgets. No overlays. No RFP needed. Free scan available.",
  },
  alternates: {
    canonical: "https://ratedwithai.com/government",
  },
};

const features = [
  {
    title: "Automated WCAG 2.1 AA Scanning",
    description:
      "The exact standard required by ADA Title II and Section 508. We test against every Level A and AA criterion so you know exactly where you stand.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
  {
    title: "Continuous Monitoring",
    description:
      "Catch regressions before they become violations. Set up daily or weekly scans and get alerted instantly when new issues appear.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Actionable Violation Reports",
    description:
      "Not just 'you have problems' — specific fixes for each violation with code examples, severity ratings, and WCAG criterion references.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
  },
  {
    title: "PDF Accessibility Checking",
    description:
      "Government sites are full of PDFs — meeting minutes, budgets, ordinances. We check those too, not just HTML pages.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
  },
  {
    title: "Compliance Dashboard",
    description:
      "Track your score over time, see trending issues, and generate compliance reports — perfect for council presentations and audits.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
        />
      </svg>
    ),
  },
];

const competitors = [
  {
    name: "Siteimprove",
    price: "$300–500/mo",
    annual: "$3,600–6,000/yr",
    note: "Enterprise pricing, long contracts, requires RFP",
    highlight: false,
    warning: false,
  },
  {
    name: "accessiBe",
    price: "$49–59/mo",
    annual: "$588–708/yr",
    note: "Overlay widget — DOJ explicitly warned against overlays",
    highlight: false,
    warning: true,
  },
  {
    name: "RatedWithAI",
    price: "$29/mo",
    annual: "$249/yr",
    note: "Real WCAG scanning, no overlays, under micro-purchase threshold",
    highlight: true,
    warning: false,
  },
];

const roiItems = [
  {
    label: "Average ADA lawsuit settlement",
    value: "$15,000+",
    color: "text-red-400",
  },
  {
    label: "Average legal fees",
    value: "$10,000+",
    color: "text-orange-400",
  },
  {
    label: "Enterprise compliance tools (annual)",
    value: "$50,000+",
    color: "text-orange-400",
  },
  {
    label: "RatedWithAI annual cost",
    value: "$249",
    color: "text-emerald-400",
  },
];

const stateLinks = [
  { name: "California", slug: "california", entities: "482 cities, 58 counties" },
  { name: "New York", slug: "new-york", entities: "62 cities, 62 counties" },
  { name: "Florida", slug: "florida", entities: "411 cities, 67 counties" },
  { name: "Texas", slug: "texas", entities: "1,200+ cities, 254 counties" },
];

export default function GovernmentPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Government Website Accessibility — ADA Title II Compliance Tool",
      description:
        "State & local government ADA Title II compliance scanner. WCAG 2.1 AA scanning starting at $29/mo. Under micro-purchase thresholds — no RFP needed.",
      url: "https://ratedwithai.com/government",
      publisher: {
        "@type": "Organization",
        name: "RatedWithAI",
        url: "https://ratedwithai.com",
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://ratedwithai.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Government",
            item: "https://ratedwithai.com/government",
          },
        ],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "RatedWithAI Government Accessibility Scanner",
      applicationCategory: "WebApplication",
      operatingSystem: "Any (web-based)",
      audience: {
        "@type": "GovernmentOrganization",
        name: "State and Local Government Agencies",
      },
      offers: [
        {
          "@type": "Offer",
          name: "Government Starter",
          price: "29",
          priceCurrency: "USD",
          billingIncrement: 1,
          unitCode: "MON",
          description:
            "Single site WCAG 2.1 AA scanning for government websites",
        },
        {
          "@type": "Offer",
          name: "Government Pro",
          price: "79",
          priceCurrency: "USD",
          billingIncrement: 1,
          unitCode: "MON",
          description:
            "Up to 5 sites — perfect for county-level government",
        },
        {
          "@type": "Offer",
          name: "Government Starter Annual",
          price: "249",
          priceCurrency: "USD",
          billingIncrement: 1,
          unitCode: "ANN",
          description: "Single site, annual billing — under micro-purchase threshold",
        },
        {
          "@type": "Offer",
          name: ".gov Discount Annual",
          price: "199",
          priceCurrency: "USD",
          billingIncrement: 1,
          unitCode: "ANN",
          description:
            "20% discount for verified .gov domains — $199/year",
        },
      ],
      description:
        "ADA Title II and Section 508 compliance scanning built for state and local government budgets. WCAG 2.1 AA automated testing, continuous monitoring, and actionable fix reports.",
      url: "https://ratedwithai.com/government",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the ADA Title II deadline for government websites?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The ADA Title II compliance deadline for state and local government websites is April 24, 2026. All web content and mobile apps must conform to WCAG 2.1 Level AA by this date. This applies to all state and local government entities regardless of size.",
          },
        },
        {
          "@type": "Question",
          name: "How much does ADA compliance scanning cost for government?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "RatedWithAI offers government-friendly pricing starting at $29/month ($249/year). Verified .gov domains receive a 20% discount at $199/year. This is well under the federal micro-purchase threshold of $10,000, meaning no lengthy RFP process is required.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need an RFP to purchase accessibility scanning tools?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "At $249/year (or $199/year for .gov domains), RatedWithAI falls well under most federal, state, and local micro-purchase thresholds ($10,000 federal, many states lower). Most procurement officers can approve this with a simple purchase order or credit card.",
          },
        },
        {
          "@type": "Question",
          name: "Does RatedWithAI cover Section 508 requirements?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Section 508 requires conformance to WCAG 2.0 Level AA for federal agencies. RatedWithAI scans against the more comprehensive WCAG 2.1 Level AA standard, which fully covers all Section 508 requirements plus additional criteria for mobile accessibility.",
          },
        },
        {
          "@type": "Question",
          name: "Why shouldn't government websites use accessibility overlay widgets?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The DOJ has explicitly warned against relying on overlay widgets for ADA compliance. Overlays don't fix underlying accessibility issues and can actually make websites less accessible for people using assistive technology. Several government entities have faced lawsuits despite using overlays.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between ADA Title II and Section 508?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ADA Title II applies to all state and local government entities, requiring their websites to be accessible to people with disabilities. Section 508 applies specifically to federal agencies and organizations receiving federal funding. Both require WCAG Level AA conformance. The April 2026 deadline is specifically for ADA Title II compliance.",
          },
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative overflow-hidden">
        {/* Background gradients */}
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-sky-500/40 via-blue-500/20 to-purple-500/40 blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-gradient-to-tr from-indigo-500/30 via-blue-500/10 to-purple-500/30 blur-3xl" />

        <Header />

        {/* ── Hero Section ── */}
        <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-12">
          <div className="text-center">
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
              </span>
              <span className="text-sm font-medium text-red-300">
                ADA Title II Deadline: April 24, 2026
              </span>
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Government Website
              <br />
              <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Accessibility Compliance
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl">
              <span className="font-semibold text-amber-300">
                54% of state CIOs have zero dedicated accessibility budget.
              </span>
              <br className="hidden sm:block" />
              The ADA Title II deadline is months away. Enterprise tools cost
              $50K+/yr.
              <br className="hidden sm:block" />
              We start at{" "}
              <span className="font-semibold text-white">$29/mo</span> —{" "}
              <span className="font-semibold text-white">$249/yr</span>.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/#scanner"
                className="rounded-xl bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 px-8 py-3.5 text-sm font-semibold text-slate-950 transition hover:opacity-90 hover:scale-[1.02]"
              >
                Start Free Scan →
              </Link>
              <Link
                href="#pricing"
                className="rounded-xl border border-slate-700/60 px-8 py-3.5 text-sm text-slate-200 transition hover:border-slate-400 hover:text-white"
              >
                View Government Pricing
              </Link>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              No signup required. No credit card. See your compliance score in 60
              seconds.
            </p>
          </div>
        </section>
      </div>

      {/* ── Pain Points Section ── */}
      <section className="border-t border-slate-800/70 bg-slate-900/40">
        <div className="mx-auto w-full max-w-5xl px-6 py-20">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              The Problem
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              90,000+ government entities.
              <br className="hidden sm:block" /> One deadline. Zero budget.
            </h2>
          </div>

          <div className="mx-auto mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6 text-center">
              <p className="text-4xl font-bold text-red-400">54%</p>
              <p className="mt-2 text-sm text-slate-300">
                of state CIOs report{" "}
                <span className="font-semibold text-white">
                  zero dedicated accessibility budget
                </span>
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6 text-center">
              <p className="text-4xl font-bold text-amber-400">90,000+</p>
              <p className="mt-2 text-sm text-slate-300">
                state &amp; local government entities{" "}
                <span className="font-semibold text-white">
                  must comply by April 2026
                </span>
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6 text-center">
              <p className="text-4xl font-bold text-emerald-400">$50K+</p>
              <p className="mt-2 text-sm text-slate-300">
                typical annual cost of{" "}
                <span className="font-semibold text-white">
                  enterprise accessibility tools
                </span>
              </p>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-8">
              <svg
                className="h-8 w-8 text-slate-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="mt-4 text-lg leading-relaxed text-slate-200">
                Small cities across America are{" "}
                <span className="font-semibold text-amber-300">
                  deleting website content
                </span>{" "}
                rather than paying for expensive compliance tools. Some of these
                municipalities have total property tax collections of just{" "}
                <span className="font-semibold text-white">$14,000</span>.
                Enterprise tools that charge $300–500/month simply don't work for
                public budgets.
              </p>
              <p className="mt-6 text-base text-slate-400">
                The federal requirement doesn't care about your budget. But your
                compliance tool should. That's why we built RatedWithAI — real
                WCAG scanning that costs less than a monthly office supply order.
              </p>
            </div>

            <p className="mt-8 text-center text-xl font-medium text-slate-200">
              You shouldn't have to choose between{" "}
              <span className="text-sky-400">serving your community</span> and{" "}
              <span className="text-sky-400">meeting federal requirements</span>.
            </p>
          </div>
        </div>
      </section>

      {/* ── Free Scanner CTA Section ── */}
      <section className="border-t border-slate-800/70">
        <div className="mx-auto w-full max-w-5xl px-6 py-16">
          <div className="rounded-3xl border border-sky-500/30 bg-gradient-to-r from-sky-500/5 via-blue-500/5 to-purple-500/5 p-8 text-center md:p-12">
            <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5">
              <span className="text-sm font-medium text-sky-300">
                🔍 Try Before You Buy
              </span>
            </div>
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              Scan Your Government Website — Free
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300">
              Government procurement takes time. Start with a free scan today to
              understand your compliance gaps. No signup, no credit card, no
              procurement paperwork. Share the results with your team and
              leadership to build the case for remediation.
            </p>
            <div className="mt-8">
              <Link
                href="/#scanner"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 px-10 py-4 text-base font-semibold text-slate-950 transition hover:opacity-90 hover:scale-[1.02]"
              >
                Start Free Scan →
              </Link>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              Instant results • WCAG 2.1 AA • Section 508 coverage • Shareable
              report
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 508 + ADA Title II Context ── */}
      <section className="border-t border-slate-800/70 bg-slate-900/40">
        <div className="mx-auto w-full max-w-5xl px-6 py-20">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              Compliance Context
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              ADA Title II &amp; Section 508: What You Need to Know
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-8">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1">
                <span className="text-xs font-medium text-purple-300">
                  ADA Title II
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white">
                State &amp; Local Government
              </h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-purple-400">→</span>
                  <span className="text-sm text-slate-300">
                    Applies to <span className="font-semibold text-white">all</span>{" "}
                    state and local government entities
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-purple-400">→</span>
                  <span className="text-sm text-slate-300">
                    Deadline:{" "}
                    <span className="font-semibold text-red-300">
                      April 24, 2026
                    </span>{" "}
                    for WCAG 2.1 AA
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-purple-400">→</span>
                  <span className="text-sm text-slate-300">
                    Covers websites <span className="font-semibold text-white">and</span>{" "}
                    mobile applications
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-purple-400">→</span>
                  <span className="text-sm text-slate-300">
                    No size exemption — applies from small towns to state agencies
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-purple-400">→</span>
                  <span className="text-sm text-slate-300">
                    DOJ can investigate and pursue compliance agreements
                  </span>
                </li>
              </ul>
              <div className="mt-6">
                <Link
                  href="/blog/ada-title-ii-compliance-guide"
                  className="text-sm text-sky-400 underline underline-offset-2 transition hover:text-sky-300"
                >
                  Read our ADA Title II compliance guide →
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-8">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1">
                <span className="text-xs font-medium text-sky-300">
                  Section 508
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white">
                Federal &amp; Federally Funded
              </h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-400">→</span>
                  <span className="text-sm text-slate-300">
                    Applies to federal agencies and organizations receiving{" "}
                    <span className="font-semibold text-white">
                      federal funding
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-400">→</span>
                  <span className="text-sm text-slate-300">
                    Requires WCAG 2.0 AA conformance (RatedWithAI scans WCAG 2.1
                    AA — fully covering 508)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-400">→</span>
                  <span className="text-sm text-slate-300">
                    Many state agencies receiving federal grants must also comply
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-400">→</span>
                  <span className="text-sm text-slate-300">
                    Covers electronic and information technology (EIT)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-400">→</span>
                  <span className="text-sm text-slate-300">
                    Enforced through administrative complaints and federal oversight
                  </span>
                </li>
              </ul>
              <div className="mt-6">
                <Link
                  href="/blog/section-508-compliance-guide"
                  className="text-sm text-sky-400 underline underline-offset-2 transition hover:text-sky-300"
                >
                  Read our Section 508 compliance guide →
                </Link>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-slate-400">
            RatedWithAI scans against{" "}
            <span className="font-semibold text-white">WCAG 2.1 Level AA</span>{" "}
            — the standard required by both ADA Title II and Section 508. One tool
            covers both mandates.
          </p>
        </div>
      </section>

      {/* ── Comparison Section ── */}
      <section className="border-t border-slate-800/70">
        <div className="mx-auto w-full max-w-5xl px-6 py-20">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              Compare
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Enterprise-grade scanning.
              <br className="hidden sm:block" /> Public-budget pricing.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300">
              $29/mo vs $50,000+/yr for enterprise tools. Same WCAG 2.1 AA
              coverage. No overlays. No shortcuts.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {competitors.map((comp) => (
              <div
                key={comp.name}
                className={`relative rounded-2xl border p-6 ${
                  comp.highlight
                    ? "border-sky-400/60 bg-gradient-to-br from-slate-900 via-slate-900/80 to-slate-950 shadow-xl shadow-sky-500/10"
                    : "border-slate-800/70 bg-slate-900/60"
                }`}
              >
                {comp.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 px-4 py-1 text-xs font-semibold text-slate-950">
                    Best Value
                  </span>
                )}
                <p className="text-sm text-slate-400">{comp.name}</p>
                <p className="mt-2 text-3xl font-bold text-white">
                  {comp.price}
                </p>
                <p className="mt-1 text-xs text-slate-500">{comp.annual}</p>
                <p
                  className={`mt-3 text-sm ${
                    comp.warning ? "text-amber-300" : "text-slate-300"
                  }`}
                >
                  {comp.warning && <span className="mr-1">⚠️</span>}
                  {comp.note}
                </p>
                {comp.highlight && (
                  <Link
                    href="/#scanner"
                    className="mt-6 block w-full rounded-xl bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 py-2.5 text-center text-sm font-semibold text-slate-950 transition hover:opacity-90"
                  >
                    Try Free
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's Included Section ── */}
      <section className="border-t border-slate-800/70 bg-slate-900/40">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              What's Included
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Everything you need for Title II compliance
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
              No overlays. No band-aids. Real scanning that identifies real issues
              and tells you exactly how to fix them.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {feature.description}
                </p>
              </div>
            ))}

            {/* Resources card */}
            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                Free Resources
              </h3>
              <div className="mt-3 flex flex-col gap-2">
                <Link
                  href="/tools/ada-compliance-checker"
                  className="text-sm text-sky-400 underline underline-offset-2 transition hover:text-sky-300"
                >
                  Free ADA Compliance Checker →
                </Link>
                <Link
                  href="/blog/ada-title-ii-deadline-countdown-2026"
                  className="text-sm text-sky-400 underline underline-offset-2 transition hover:text-sky-300"
                >
                  ADA Title II Deadline Countdown →
                </Link>
                <Link
                  href="/blog/doj-ada-title-ii-rule-changes-2026"
                  className="text-sm text-sky-400 underline underline-offset-2 transition hover:text-sky-300"
                >
                  DOJ Rule Changes Guide →
                </Link>
                <Link
                  href="/pricing"
                  className="text-sm text-sky-400 underline underline-offset-2 transition hover:text-sky-300"
                >
                  Full Pricing Details →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Government Pricing Section ── */}
      <section id="pricing" className="border-t border-slate-800/70">
        <div className="mx-auto w-full max-w-5xl px-6 py-20">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              Government Pricing
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Built for public budgets
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300">
              Annual billing simplifies procurement. All plans fall under
              micro-purchase thresholds — no RFP required.
            </p>
          </div>

          {/* .gov Discount Banner */}
          <div className="mx-auto mt-8 max-w-lg rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6 text-center">
            <p className="text-lg font-semibold text-emerald-300">
              🏛️ .gov Domain Discount
            </p>
            <p className="mt-2 text-sm text-slate-300">
              Verified <span className="font-mono text-white">.gov</span> domains
              receive{" "}
              <span className="font-semibold text-emerald-300">
                20% off all plans
              </span>
              . Email{" "}
              <a
                href="mailto:hello@ratedwithai.com?subject=.gov Discount Request"
                className="text-sky-400 underline underline-offset-2 transition hover:text-sky-300"
              >
                hello@ratedwithai.com
              </a>{" "}
              from your .gov address to activate.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* Starter Plan */}
            <div className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
              <p className="text-sm text-slate-400">Starter</p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">$29</span>
                <span className="text-sm text-slate-400">/month</span>
              </div>
              <p className="mt-2 text-sm text-slate-300">
                Perfect for a single municipal or agency website
              </p>

              <div className="mt-4 space-y-2">
                <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-2">
                  <p className="text-sm text-emerald-300">
                    Annual:{" "}
                    <span className="font-semibold">$249/year</span>{" "}
                    <span className="text-emerald-400">(save $99)</span>
                  </p>
                </div>
                <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-2">
                  <p className="text-sm text-emerald-300">
                    .gov Annual:{" "}
                    <span className="font-semibold">$199/year</span>{" "}
                    <span className="text-emerald-400">(save $149)</span>
                  </p>
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {[
                  "1 site",
                  "100 scans/month",
                  "WCAG 2.1 AA scanning",
                  "Monitoring alerts",
                  "PDF checking",
                  "Exportable reports",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-slate-300">{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/pricing"
                className="mt-8 block w-full rounded-xl border border-slate-700/60 py-3 text-center text-sm font-semibold text-slate-200 transition hover:border-slate-400 hover:text-white"
              >
                Start Starter Plan
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="relative rounded-3xl border border-sky-400/60 bg-gradient-to-br from-slate-900 via-slate-900/80 to-slate-950 p-8 shadow-xl shadow-sky-500/10">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 px-4 py-1 text-xs font-semibold text-slate-950">
                Best for Counties &amp; Agencies
              </span>
              <p className="text-sm text-slate-400">Pro</p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">$79</span>
                <span className="text-sm text-slate-400">/month</span>
              </div>
              <p className="mt-2 text-sm text-slate-300">
                Up to 5 sites — perfect for county-level government
              </p>

              <div className="mt-4 space-y-2">
                <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-2">
                  <p className="text-sm text-emerald-300">
                    Annual:{" "}
                    <span className="font-semibold">$749/year</span>{" "}
                    <span className="text-emerald-400">(save $199)</span>
                  </p>
                </div>
                <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-2">
                  <p className="text-sm text-emerald-300">
                    .gov Annual:{" "}
                    <span className="font-semibold">$599/year</span>{" "}
                    <span className="text-emerald-400">(save $349)</span>
                  </p>
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {[
                  "Up to 5 sites",
                  "Unlimited scans",
                  "WCAG 2.1 AA scanning",
                  "Daily monitoring",
                  "PDF checking",
                  "Priority support",
                  "Compliance dashboard",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-slate-300">{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/pricing"
                className="mt-8 block w-full rounded-xl bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 py-3 text-center text-sm font-semibold text-slate-950 transition hover:opacity-90"
              >
                Start Pro Plan
              </Link>
            </div>
          </div>

          {/* Procurement Info */}
          <div className="mt-12 rounded-2xl border border-slate-800/70 bg-slate-950/60 p-8">
            <h3 className="text-lg font-semibold text-white">
              🏛️ Procurement Made Simple
            </h3>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="text-sm font-semibold text-sky-400">
                  Under Micro-Purchase Thresholds
                </h4>
                <p className="mt-2 text-sm text-slate-300">
                  At <span className="font-semibold text-white">$249/year</span>{" "}
                  (Starter) or{" "}
                  <span className="font-semibold text-white">$749/year</span>{" "}
                  (Pro), RatedWithAI falls well under the federal micro-purchase
                  threshold of $10,000 and most state thresholds. No lengthy RFP
                  process needed — most procurement officers can approve with a
                  purchase order or P-card.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-sky-400">
                  We Support Government Procurement
                </h4>
                <ul className="mt-2 space-y-2 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span> W-9 available on
                    request
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span> Formal quotes &amp;
                    invoices
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span> Purchase order
                    accepted
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span> Annual billing
                    (aligns with fiscal year)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span> No long-term
                    contract required
                  </li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-sm text-slate-400">
              Need a custom quote or procurement documentation? Email{" "}
              <a
                href="mailto:hello@ratedwithai.com?subject=Government Procurement Inquiry"
                className="text-sky-400 underline underline-offset-2 transition hover:text-sky-300"
              >
                hello@ratedwithai.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ── ROI Calculator Section ── */}
      <section className="border-t border-slate-800/70 bg-slate-900/40">
        <div className="mx-auto w-full max-w-4xl px-6 py-20">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              Return on Investment
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              The math is simple
            </h2>
          </div>

          <div className="mt-12 rounded-3xl border border-slate-800/70 bg-slate-950/60 p-8 md:p-12">
            <div className="space-y-6">
              {roiItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between border-b border-slate-800/50 pb-4 last:border-0 last:pb-0"
                >
                  <span className="text-slate-300">{item.label}</span>
                  <span className={`text-2xl font-bold ${item.color}`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-sky-500/20 bg-sky-500/5 p-6 text-center">
              <p className="text-2xl font-bold text-white">
                That's a{" "}
                <span className="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
                  100x return
                </span>{" "}
                on investment
              </p>
              <p className="mt-2 text-sm text-slate-400">
                One prevented lawsuit pays for decades of scanning
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── State-Specific Resources ── */}
      <section className="border-t border-slate-800/70">
        <div className="mx-auto w-full max-w-5xl px-6 py-20">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              State Resources
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Compliance requirements by state
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300">
              Each state has unique accessibility requirements beyond ADA Title II.
              Find your state-specific compliance guide.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stateLinks.map((state) => (
              <Link
                key={state.slug}
                href={`/state/${state.slug}`}
                className="group rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-sky-500/40 hover:bg-slate-900/80"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-sky-400 transition">
                  {state.name}
                </h3>
                <p className="mt-1 text-sm text-slate-400">{state.entities}</p>
                <p className="mt-3 text-xs text-sky-400 opacity-0 transition group-hover:opacity-100">
                  View compliance guide →
                </p>
              </Link>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-slate-400">
            Don't see your state?{" "}
            <Link
              href="/blog/ada-title-ii-compliance-guide"
              className="text-sky-400 underline underline-offset-2 transition hover:text-sky-300"
            >
              Our general ADA Title II guide covers all 50 states →
            </Link>
          </p>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="border-t border-slate-800/70 bg-slate-900/40">
        <div className="mx-auto w-full max-w-4xl px-6 py-20">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              FAQ
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Common questions from government buyers
            </h2>
          </div>

          <div className="mt-12 space-y-6">
            {[
              {
                q: "Do I need an RFP to purchase RatedWithAI?",
                a: "At $249/year (Starter) or $749/year (Pro), RatedWithAI falls well under the federal micro-purchase threshold of $10,000 and most state/local thresholds. Most procurement officers can approve with a purchase order, P-card, or government credit card — no RFP needed.",
              },
              {
                q: "What's the difference between ADA Title II and Section 508?",
                a: "ADA Title II applies to all state and local government entities. Section 508 applies to federal agencies and federally-funded organizations. Both require WCAG Level AA conformance. RatedWithAI scans against WCAG 2.1 AA, covering both mandates with a single tool.",
              },
              {
                q: "Can I try it before going through procurement?",
                a: "Absolutely. Our free scan requires no signup, no credit card, and no procurement paperwork. Scan your site right now, share the report with your team, and use the results to build the business case for a subscription.",
              },
              {
                q: "Do you offer .gov domain discounts?",
                a: "Yes. Verified .gov domains receive 20% off all plans. Email hello@ratedwithai.com from your .gov address and we'll apply the discount. Government Starter drops to just $199/year.",
              },
              {
                q: "Can you provide W-9s and formal quotes?",
                a: "Yes. We support standard government procurement workflows including W-9s, formal quotes, invoices, and purchase orders. We also offer annual billing to align with your fiscal year. Email hello@ratedwithai.com.",
              },
              {
                q: "Why not use an overlay widget like accessiBe?",
                a: "The DOJ has explicitly warned against relying on overlay widgets for ADA compliance. Overlays don't fix underlying code issues and can actually make sites less accessible. Multiple government entities have faced lawsuits despite using overlays. RatedWithAI provides real scanning that identifies real issues you need to fix.",
              },
              {
                q: "What happens if we miss the April 2026 deadline?",
                a: "The DOJ can investigate non-compliant entities and pursue compliance agreements, which can include costly remediation requirements, monitoring obligations, and potential compensatory relief. Proactive compliance is significantly less expensive than reactive remediation after an investigation.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6"
              >
                <h3 className="text-base font-semibold text-white">{faq.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust Section ── */}
      <section className="border-t border-slate-800/70">
        <div className="mx-auto w-full max-w-4xl px-6 py-16">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center gap-3">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-950 bg-gradient-to-br from-slate-700 to-slate-600 text-xs font-medium text-slate-300"
                  >
                    {["🏛️", "🏫", "🏥", "📚", "⚖️"][i]}
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-4 text-lg text-slate-300">
              Trusted by government entities working toward ADA Title II
              compliance
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Join the growing number of municipalities choosing affordable, real
              accessibility scanning
            </p>
          </div>
        </div>
      </section>

      {/* ── Final CTA Section ── */}
      <section className="border-t border-slate-800/70 bg-slate-900/40">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="rounded-3xl border border-slate-800/70 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-950 p-8 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              Start Free. Comply Before the Deadline.
            </h2>
            <p className="mx-auto mt-2 text-lg text-slate-300">
              See your compliance score in 60 seconds
            </p>
            <p className="mx-auto mt-4 max-w-xl text-sm text-slate-400">
              No signup required. No credit card. Just enter your URL and see
              exactly where your site stands against WCAG 2.1 AA — the standard
              required by ADA Title II and Section 508.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/#scanner"
                className="rounded-xl bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 px-8 py-3.5 text-sm font-semibold text-slate-950 transition hover:opacity-90 hover:scale-[1.02]"
              >
                Start Free Scan →
              </Link>
              <Link
                href="mailto:hello@ratedwithai.com?subject=Government Demo Request"
                className="rounded-xl border border-slate-700/60 px-8 py-3.5 text-sm text-slate-200 transition hover:border-slate-400 hover:text-white"
              >
                Request a Demo
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500">
              <Link href="/pricing" className="hover:text-slate-300 transition">
                Pricing
              </Link>
              <span>·</span>
              <Link
                href="/blog/ada-title-ii-compliance-guide"
                className="hover:text-slate-300 transition"
              >
                ADA Title II Guide
              </Link>
              <span>·</span>
              <Link
                href="/blog/section-508-compliance-guide"
                className="hover:text-slate-300 transition"
              >
                Section 508 Guide
              </Link>
              <span>·</span>
              <Link href="/blog" className="hover:text-slate-300 transition">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
