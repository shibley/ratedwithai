/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title:
    "European Accessibility Act (EAA): What US Businesses Need to Know in 2026 | RatedWithAI",
  description:
    "The European Accessibility Act is now enforced across all 27 EU member states. If your US business sells products or services in Europe, you must comply. Here's your complete guide.",
  openGraph: {
    title:
      "European Accessibility Act (EAA): What US Businesses Need to Know in 2026",
    description:
      "The EAA applies to any business selling into the EU — including US companies. Learn the requirements, penalties, and how to comply before enforcement ramps up.",
    type: "article",
    publishedTime: "2026-02-26T00:00:00.000Z",
    authors: ["RatedWithAI Team"],
  },
  keywords: [
    "european accessibility act",
    "eaa compliance",
    "eaa 2025",
    "european accessibility act us companies",
    "eaa requirements",
    "eaa enforcement",
    "en 301 549",
    "eaa wcag compliance",
    "eu accessibility law",
    "digital accessibility europe",
    "eaa penalties",
    "accessibility act eu",
    "eaa compliance guide",
    "european accessibility act ecommerce",
    "us business eaa compliance",
  ],
  alternates: {
    canonical:
      "https://ratedwithai.com/blog/european-accessibility-act-eaa-compliance-us-businesses",
  },
};

export default function EAAComplianceUSBusinessesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline:
      "European Accessibility Act (EAA): What US Businesses Need to Know in 2026",
    description:
      "Complete guide for US businesses on complying with the European Accessibility Act, now enforced across all 27 EU member states since June 2025.",
    datePublished: "2026-02-26T00:00:00.000Z",
    dateModified: "2026-02-26T00:00:00.000Z",
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
        name: "Does the European Accessibility Act apply to US companies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The EAA applies to any business that provides products or services within the EU, regardless of where the company is headquartered. If your US company sells to EU customers through e-commerce, provides digital banking services, offers streaming media, or sells covered hardware products in EU markets, you must comply.",
        },
      },
      {
        "@type": "Question",
        name: "When did the European Accessibility Act go into effect?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The EAA enforcement deadline was June 28, 2025. All 27 EU member states were required to transpose the directive into national law by that date. Enforcement is now active, with countries like the Netherlands, France, Sweden, and Germany already taking regulatory action against non-compliant businesses.",
        },
      },
      {
        "@type": "Question",
        name: "What is the technical standard for EAA compliance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most EU member states are implementing EN 301 549, which incorporates WCAG 2.1 Level AA. EN 301 549 goes beyond web content to include requirements for documents like PDFs, mobile applications, and hardware devices like kiosks and payment terminals. Some countries cite WCAG 2.1 AA directly.",
        },
      },
      {
        "@type": "Question",
        name: "What are the penalties for EAA non-compliance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Penalties vary by EU member state but must be 'effective, proportionate, and dissuasive' per the directive. Examples include daily fines of 50,000 Norwegian kroner (~$5,360 USD) in Norway for medical app non-compliance, mandatory non-conformance reporting in the Netherlands with audits for non-reporters, and legal action from disability organizations in France against major retailers.",
        },
      },
      {
        "@type": "Question",
        name: "Are small businesses exempt from the EAA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Microenterprises — defined as companies with fewer than 10 employees AND annual turnover or balance sheet under €2 million — are exempt from the EAA's service-related accessibility requirements. However, this exemption is narrow: most US companies selling into the EU will exceed these thresholds. A 'disproportionate burden' defense also exists but requires documented proof.",
        },
      },
      {
        "@type": "Question",
        name: "How is the EAA different from the ADA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The ADA is enforced primarily through private lawsuits and DOJ action, with no specific technical standard. The EAA is enforced through market surveillance authorities in each EU country, references EN 301 549/WCAG 2.1 AA as the technical standard, and includes mandatory conformance reporting. The EAA also covers a broader range of products and services, including hardware, e-commerce, banking, and transportation.",
        },
      },
      {
        "@type": "Question",
        name: "Does EAA compliance also satisfy ADA requirements?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Largely, yes. If you comply with EN 301 549 (which includes WCAG 2.1 AA), you will meet or exceed the de facto technical standard used in US ADA web accessibility settlements. This means investing in EAA compliance simultaneously strengthens your ADA compliance position. However, ADA enforcement has additional considerations around good faith effort and documentation.",
        },
      },
      {
        "@type": "Question",
        name: "What should my US business do right now to comply with the EAA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Start by auditing your digital properties against WCAG 2.1 AA and EN 301 549. Prioritize your most-trafficked EU-facing pages, especially e-commerce checkout flows, product pages, and customer service channels. Set up continuous monitoring to catch regressions. Document everything — conformance reports, remediation timelines, and accessibility statements — as EU regulators expect transparency about your compliance status.",
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
              International Compliance
            </p>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              European Accessibility Act (EAA): What US Businesses Need to Know
              in 2026
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              The European Accessibility Act became enforceable across all 27 EU
              member states on June 28, 2025 — and it applies to{" "}
              <strong>any business selling products or services in Europe</strong>
              , regardless of where you're headquartered. If your US company has
              EU customers, you're now operating under two accessibility
              regimes: the ADA at home and the EAA abroad. Here's everything
              you need to know.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
              <time dateTime="2026-02-26">February 26, 2026</time>
              <span>·</span>
              <span>16 min read</span>
            </div>
          </section>
        </div>

        <article className="mx-auto w-full max-w-4xl space-y-10 px-6 pb-24 text-slate-200">
          {/* Key Takeaways Alert */}
          <section className="rounded-3xl border-2 border-blue-500/50 bg-blue-950/30 p-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-2xl">
                🇪🇺
              </span>
              <h2 className="text-2xl font-bold text-blue-300">
                Key Takeaways
              </h2>
            </div>
            <ul className="space-y-3 text-lg text-blue-100">
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-300 text-sm font-bold">
                  1
                </span>
                <span>
                  The EAA is{" "}
                  <strong>already being enforced</strong> — France, Netherlands,
                  Sweden, and Germany have all taken regulatory action since
                  June 2025
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-300 text-sm font-bold">
                  2
                </span>
                <span>
                  It applies to <strong>any business selling into the EU</strong>{" "}
                  — US companies are not exempt by geography
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-300 text-sm font-bold">
                  3
                </span>
                <span>
                  The technical standard is{" "}
                  <strong>EN 301 549 / WCAG 2.1 AA</strong> — the same standard
                  that satisfies US ADA requirements
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-300 text-sm font-bold">
                  4
                </span>
                <span>
                  Penalties include <strong>daily fines, product bans, and public
                  non-compliance listings</strong> — enforcement varies by
                  country
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-300 text-sm font-bold">
                  5
                </span>
                <span>
                  Germany has{" "}
                  <strong>explicitly rejected accessibility overlays</strong>{" "}
                  for EAA compliance — overlays disqualify you from
                  certification
                </span>
              </li>
            </ul>
          </section>

          {/* Table of Contents */}
          <nav className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6">
            <h2 className="text-lg font-bold text-white mb-4">
              📋 Table of Contents
            </h2>
            <ol className="space-y-2 text-sky-400">
              <li>
                <a href="#what-is-eaa" className="hover:text-sky-300 underline">
                  1. What Is the European Accessibility Act?
                </a>
              </li>
              <li>
                <a
                  href="#applies-to-us"
                  className="hover:text-sky-300 underline"
                >
                  2. Why the EAA Applies to US Businesses
                </a>
              </li>
              <li>
                <a
                  href="#covered-products"
                  className="hover:text-sky-300 underline"
                >
                  3. Products and Services Covered
                </a>
              </li>
              <li>
                <a
                  href="#technical-standard"
                  className="hover:text-sky-300 underline"
                >
                  4. The Technical Standard: EN 301 549 and WCAG
                </a>
              </li>
              <li>
                <a
                  href="#enforcement"
                  className="hover:text-sky-300 underline"
                >
                  5. Enforcement Is Already Happening
                </a>
              </li>
              <li>
                <a href="#eaa-vs-ada" className="hover:text-sky-300 underline">
                  6. EAA vs. ADA: Key Differences
                </a>
              </li>
              <li>
                <a
                  href="#overlays-rejected"
                  className="hover:text-sky-300 underline"
                >
                  7. Germany Rejects Accessibility Overlays
                </a>
              </li>
              <li>
                <a
                  href="#penalties"
                  className="hover:text-sky-300 underline"
                >
                  8. Penalties for Non-Compliance
                </a>
              </li>
              <li>
                <a
                  href="#exemptions"
                  className="hover:text-sky-300 underline"
                >
                  9. Exemptions and Exceptions
                </a>
              </li>
              <li>
                <a
                  href="#compliance-roadmap"
                  className="hover:text-sky-300 underline"
                >
                  10. Your EAA Compliance Roadmap
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-sky-300 underline">
                  11. Frequently Asked Questions
                </a>
              </li>
            </ol>
          </nav>

          {/* Section 1: What Is the EAA */}
          <section id="what-is-eaa" className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              What Is the European Accessibility Act?
            </h2>
            <p className="text-lg leading-relaxed">
              The European Accessibility Act (Directive 2019/882) is an EU
              directive that establishes common accessibility requirements for
              key products and services across all 27 EU member states. It was
              adopted in 2019, with member states given until June 28, 2022 to
              transpose it into national law, and an enforcement deadline of{" "}
              <strong>June 28, 2025</strong>.
            </p>
            <p className="text-lg leading-relaxed">
              Unlike the Americans with Disabilities Act (ADA), which is a
              single federal law enforced through private litigation and DOJ
              action, the EAA is a <em>directive</em> — meaning each EU country
              implements it through its own national legislation. The goal is
              harmonization: creating a unified set of accessibility
              requirements so businesses can sell accessible products across
              the entire EU without navigating 27 different standards.
            </p>
            <p className="text-lg leading-relaxed">
              The EAA's scope is broader than most US businesses realize. It
              doesn't just cover websites — it encompasses e-commerce platforms,
              banking services, smartphones, computers, ATMs, payment
              terminals, e-books, ticketing systems, and audiovisual media
              services. If your product or service falls into any of these
              categories and reaches EU consumers, the EAA applies to you.
            </p>
          </section>

          {/* Section 2: Why It Applies to US Businesses */}
          <section id="applies-to-us" className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Why the EAA Applies to US Businesses
            </h2>
            <p className="text-lg leading-relaxed">
              Here's the critical detail many US companies overlook:{" "}
              <strong>
                the EAA applies to any enterprise that provides covered products
                or services within the EU
              </strong>
              , regardless of where the company is headquartered. This is
              explicitly stated in the directive and confirmed by the European
              Commission.
            </p>
            <p className="text-lg leading-relaxed">
              If you're a US-based SaaS company with European customers, an
              e-commerce brand shipping to EU addresses, a fintech serving EU
              bank accounts, or a streaming service available in EU countries,
              you fall under the EAA's jurisdiction.
            </p>

            <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-4">
              <h3 className="text-xl font-bold text-amber-400">
                US Business Scenarios Where the EAA Applies
              </h3>
              <div className="space-y-3">
                <div className="flex gap-3 items-start">
                  <span className="text-amber-400 mt-1">🛒</span>
                  <div>
                    <p className="font-semibold text-white">
                      E-commerce selling to EU customers
                    </p>
                    <p className="text-slate-300 text-sm">
                      If your checkout flow, product pages, or customer
                      service portals are used by EU consumers, they must be
                      accessible under the EAA.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-amber-400 mt-1">💻</span>
                  <div>
                    <p className="font-semibold text-white">
                      SaaS products with EU subscribers
                    </p>
                    <p className="text-slate-300 text-sm">
                      Cloud-based software delivered to EU businesses or
                      consumers must meet accessibility requirements, including
                      the product interface, documentation, and support.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-amber-400 mt-1">🏦</span>
                  <div>
                    <p className="font-semibold text-white">
                      Financial services serving EU markets
                    </p>
                    <p className="text-slate-300 text-sm">
                      Banking apps, payment processors, and fintech platforms
                      operating in EU markets must ensure accessible interfaces,
                      transactions, and communications.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-amber-400 mt-1">📱</span>
                  <div>
                    <p className="font-semibold text-white">
                      Hardware sold in EU markets
                    </p>
                    <p className="text-slate-300 text-sm">
                      Smartphones, computers, tablets, e-readers, and payment
                      terminals must meet physical and digital accessibility
                      requirements.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-amber-400 mt-1">🎬</span>
                  <div>
                    <p className="font-semibold text-white">
                      Streaming and media services
                    </p>
                    <p className="text-slate-300 text-sm">
                      Audiovisual media services available in EU countries need
                      accessible players, captions, audio descriptions, and
                      accessible program guides.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed">
              Think of it like GDPR — another EU regulation that US businesses
              had to comply with because they processed data from EU citizens.
              The EAA follows the same principle:{" "}
              <strong>
                if you serve EU consumers, EU law applies to you
              </strong>
              .
            </p>
          </section>

          {/* Section 3: Covered Products and Services */}
          <section id="covered-products" className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Products and Services Covered by the EAA
            </h2>
            <p className="text-lg leading-relaxed">
              The EAA covers products and services identified as most important
              for people with disabilities and most likely to have divergent
              accessibility rules across EU countries.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-4">
                <h3 className="text-xl font-bold text-sky-400">
                  📦 Products
                </h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex gap-2">
                    <span className="text-sky-400">•</span>
                    <span>Computers and operating systems</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-sky-400">•</span>
                    <span>Smartphones and communication devices</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-sky-400">•</span>
                    <span>TV equipment for digital television services</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-sky-400">•</span>
                    <span>ATMs, payment terminals, and ticketing machines</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-sky-400">•</span>
                    <span>E-readers</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-sky-400">•</span>
                    <span>Self-service terminals and check-in machines</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-4">
                <h3 className="text-xl font-bold text-emerald-400">
                  🌐 Services
                </h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex gap-2">
                    <span className="text-emerald-400">•</span>
                    <span>E-commerce (online shopping)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-400">•</span>
                    <span>Banking and financial services</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-400">•</span>
                    <span>Telephony and communication services</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-400">•</span>
                    <span>Audiovisual media services</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-400">•</span>
                    <span>E-books and digital publishing</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-400">•</span>
                    <span>
                      Air, bus, rail, and waterborne passenger transport
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-400">•</span>
                    <span>Electronic ticketing services</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl bg-amber-900/30 border border-amber-500/30 p-4">
              <p className="text-amber-200 font-medium">
                💡 <strong>Key distinction:</strong> The EAA covers{" "}
                <em>both</em> the digital interface and the service itself. For
                e-commerce, this means your website, mobile app, checkout flow,
                order confirmation emails, customer service chatbot, and return
                process all need to be accessible.
              </p>
            </div>
          </section>

          {/* Section 4: Technical Standard */}
          <section id="technical-standard" className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              The Technical Standard: EN 301 549 and WCAG
            </h2>
            <p className="text-lg leading-relaxed">
              The EAA references the four principles of web accessibility —
              Perceivable, Operable, Understandable, and Robust (POUR) — but
              doesn't mandate a specific technical standard. In practice,
              however, the implementation across EU countries is converging on{" "}
              <strong>EN 301 549</strong>, which incorporates{" "}
              <strong>WCAG 2.1 Level AA</strong>.
            </p>
            <p className="text-lg leading-relaxed">
              For US businesses already familiar with WCAG from ADA compliance
              efforts, this is good news:{" "}
              <strong>
                the same standard that protects you from ADA lawsuits in the US
                also satisfies the core EAA requirements in Europe
              </strong>
              . One investment in accessibility serves two regulatory regimes.
            </p>

            <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-4">
              <h3 className="text-xl font-bold text-white">
                Understanding the Standards Hierarchy
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20">
                    <span className="text-blue-400 font-bold text-sm">EU</span>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-white">
                      EN 301 549 (Harmonized EU Standard)
                    </p>
                    <p className="text-slate-300">
                      The comprehensive ICT accessibility standard adopted
                      across the EU. It incorporates all of WCAG 2.1 AA{" "}
                      <em>plus</em> additional requirements for non-web content
                      like documents (PDFs), mobile apps, hardware, and
                      self-service terminals. An update to include WCAG 2.2 is
                      expected in 2026.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-500/20">
                    <span className="text-purple-400 font-bold text-sm">
                      W3C
                    </span>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-white">
                      WCAG 2.1 Level AA (Web Standard)
                    </p>
                    <p className="text-slate-300">
                      The W3C's Web Content Accessibility Guidelines, used
                      globally as the benchmark for web accessibility. 78
                      success criteria across 4 principles. This is the same
                      standard referenced in US ADA settlements and the DOJ's
                      Title II rule.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
                    <span className="text-emerald-400 font-bold text-sm">
                      2.2
                    </span>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-white">
                      WCAG 2.2 AA (Recommended)
                    </p>
                    <p className="text-slate-300">
                      The latest version (October 2023) adds 9 new success
                      criteria. While not yet formally required under EAA, Deque
                      and other experts recommend testing against WCAG 2.2 AA to
                      future-proof compliance as EN 301 549 is updated.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed">
              The critical takeaway: if you're already WCAG 2.1 AA compliant
              for ADA purposes, you're{" "}
              <strong>most of the way to EAA compliance</strong>. The additional
              EN 301 549 requirements primarily affect non-web content —
              downloadable documents, mobile app-specific interactions, and
              hardware accessibility.
            </p>
          </section>

          {/* Section 5: Enforcement */}
          <section id="enforcement" className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Enforcement Is Already Happening: Country-by-Country Breakdown
            </h2>
            <p className="text-lg leading-relaxed">
              If anyone doubted whether the EAA would be enforced, those doubts
              are now gone. Within the first eight months of the enforcement
              deadline, at least six EU/EEA countries have taken concrete
              regulatory action.
            </p>

            {/* Netherlands */}
            <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🇳🇱</span>
                <h3 className="text-xl font-bold text-orange-400">
                  Netherlands: Mandatory Non-Conformance Reporting
                </h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                The Dutch Authority for Consumers and Markets (ACM) launched a
                letter campaign to businesses and established a{" "}
                <strong>mandatory non-conformance reporting deadline</strong>{" "}
                of October 15, 2025. Companies that don't meet accessibility
                requirements must report their specific failures and submit a
                credible remediation plan.
              </p>
              <p className="text-slate-300 leading-relaxed">
                The reporting requirements are strict: critical or serious
                issues must be reported within <strong>one week</strong> of
                detection. Moderate or minor issues within{" "}
                <strong>one month</strong>. Companies that failed to report were
                flagged for priority audits in early 2026.
              </p>
              <blockquote className="border-l-4 border-orange-400 pl-4 text-slate-300 italic">
                "There is a very big gap between the status of the industry and
                compliance with EAA. We will select businesses that didn't reply
                and seem to be underperforming. We will do further
                investigations and, if needed, take further enforcement
                measures."
                <span className="block mt-1 text-sm text-slate-400 not-italic">
                  — Hanneke van Rooijen, ACM Senior Supervisory Officer
                </span>
              </blockquote>
            </div>

            {/* France */}
            <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🇫🇷</span>
                <h3 className="text-xl font-bold text-blue-400">
                  France: Lawsuits Against Major Retailers
                </h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                In July 2025, French disability organizations (ApiDV and Droit
                Pluriel), supported by legal collective Intérêt à Agir,
                issued formal demands against{" "}
                <strong>
                  Auchan, Carrefour, E.Leclerc, and Picard Surgelés
                </strong>{" "}
                for inaccessible online grocery services.
              </p>
              <p className="text-slate-300 leading-relaxed">
                When the retailers failed to comply by the September deadline, a{" "}
                <strong>summons for interim relief</strong> was filed in
                November 2025 before the Commercial Court. The case was
                accompanied by a public campaign with press releases and social
                media visibility — exposing the defendants to both legal
                liability and reputational damage.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Legal experts note the plaintiffs chose interim proceedings
                (focused on compliance, not damages) to secure a judgment
                quickly — a strategy that could be replicated across the EU.
              </p>
            </div>

            {/* Sweden */}
            <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🇸🇪</span>
                <h3 className="text-xl font-bold text-yellow-400">
                  Sweden: Market Surveillance of Products and E-Commerce
                </h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                The Swedish Post and Telecom Authority (PTS) announced market
                surveillance of laptops, smartphones, and tablets under the EAA,
                inspecting products from both bestsellers and budget brands. The
                PTS has also begun its first regulatory cases specifically
                related to e-commerce, with inspections continuing through 2026.
              </p>
            </div>

            {/* Germany */}
            <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🇩🇪</span>
                <h3 className="text-xl font-bold text-red-400">
                  Germany: Overlays Rejected, BIK Certification Denied
                </h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                German BIK testing centers (the standard for BITV 2.0/EN 301 549
                conformance assessment) have{" "}
                <strong>
                  explicitly stated that websites using accessibility overlays
                  cannot receive BIK certification
                </strong>
                . Since BIK audit reports are widely recognized by regulators as
                evidence of compliance, this effectively means overlays are
                disqualifying under German EAA enforcement.
              </p>
            </div>

            {/* Norway */}
            <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🇳🇴</span>
                <h3 className="text-xl font-bold text-teal-400">
                  Norway: Daily Fines for Non-Compliance
                </h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                While not an EU member, Norway follows EU regulations closely.
                The Norwegian Health Authority fined HelsaMi — a medical app
                used by nearly 500,000 residents — for accessibility
                non-compliance. After the initial deadline passed with
                unresolved errors, they imposed{" "}
                <strong>
                  daily fines of 50,000 kroner (~$5,360 USD)
                </strong>
                . This demonstrates how enforcement will escalate: notification
                → correction order → daily penalties.
              </p>
            </div>

            {/* Czech Republic */}
            <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🇨🇿</span>
                <h3 className="text-xl font-bold text-slate-400">
                  Czech Republic: Public Non-Compliance Lists
                </h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                The Czech supervisory authority plans to{" "}
                <strong>publish lists of non-compliant products and
                services</strong> publicly, enabling market surveillance,
                consumer awareness, and reputational pressure on non-compliant
                businesses.
              </p>
            </div>

            {/* Ireland */}
            <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🇮🇪</span>
                <h3 className="text-xl font-bold text-green-400">
                  Ireland: Consumer Complaints Being Processed
                </h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                ComReg (Commission for Communications Regulation) has begun
                processing consumer complaints, including one against Three —
                Ireland's largest mobile telecommunications provider. Notably,
                Three responded actively after formal processing of the
                complaint, indicating companies do take regulatory action
                seriously.
              </p>
            </div>
          </section>

          {/* Section 6: EAA vs ADA */}
          <section id="eaa-vs-ada" className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              EAA vs. ADA: Key Differences for US Businesses
            </h2>
            <p className="text-lg leading-relaxed">
              Understanding the differences between these two regimes is
              critical for US businesses operating in both markets.
            </p>

            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-lg font-bold text-white">
                  📋 Enforcement Model
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-sky-400">ADA (United States)</p>
                    <p className="text-slate-300 text-sm">
                      Enforced through private lawsuits and DOJ intervention.
                      8,667 federal lawsuits in 2025. Plaintiffs can sue
                      directly without government intermediary.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-400">EAA (European Union)</p>
                    <p className="text-slate-300 text-sm">
                      Enforced by Market Surveillance Authorities (MSAs) in
                      each member state. Disability organizations can also
                      bring legal action. Government-led enforcement plus
                      private action.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-lg font-bold text-white">
                  📐 Technical Standard
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-sky-400">ADA</p>
                    <p className="text-slate-300 text-sm">
                      No specific technical standard mandated. WCAG 2.1 AA is
                      the de facto standard used in settlements and{" "}
                      <Link
                        href="/blog/ada-title-ii-deadline-countdown-2026"
                        className="text-sky-400 hover:text-sky-300 underline"
                      >
                        DOJ Title II rules
                      </Link>
                      . The DOJ has notably stated it "does not endorse WCAG as
                      the appropriate or necessary standard" under Title III.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-400">EAA</p>
                    <p className="text-slate-300 text-sm">
                      References EN 301 549, which incorporates WCAG 2.1 AA
                      plus additional requirements for non-web content. Some
                      countries cite WCAG 2.1 AA directly. Clear, defined
                      technical benchmark.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-lg font-bold text-white">
                  📊 Reporting Requirements
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-sky-400">ADA</p>
                    <p className="text-slate-300 text-sm">
                      No mandatory reporting. Businesses typically only address
                      accessibility after receiving a demand letter or lawsuit.
                      Documentation helps as a defense but isn't required.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-400">EAA</p>
                    <p className="text-slate-300 text-sm">
                      Conformity declarations required. Some countries (like the
                      Netherlands) mandate non-conformance reporting with strict
                      timelines. Businesses must publicly document compliance
                      status in terms of service.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-lg font-bold text-white">
                  🏢 Scope
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-sky-400">ADA</p>
                    <p className="text-slate-300 text-sm">
                      Primarily websites and mobile apps of "places of public
                      accommodation." Title II covers state/local government
                      websites with an April 24, 2026 deadline.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-400">EAA</p>
                    <p className="text-slate-300 text-sm">
                      Websites, mobile apps, e-commerce, banking, telecom,
                      transport, e-books, hardware (phones, computers, ATMs,
                      kiosks), audiovisual media. Significantly broader scope.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-emerald-900/30 border border-emerald-500/30 p-4">
              <p className="text-emerald-200 font-medium">
                ✅ <strong>The silver lining:</strong> Because both the ADA and
                EAA converge on WCAG 2.1 AA as the technical benchmark, a
                single accessibility program can satisfy both. Your investment
                in WCAG compliance serves double duty — protecting you from US
                lawsuits while meeting EU regulatory requirements.
              </p>
            </div>
          </section>

          {/* Section 7: Overlays Rejected */}
          <section id="overlays-rejected" className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Germany Rejects Accessibility Overlays for EAA Compliance
            </h2>
            <p className="text-lg leading-relaxed">
              In one of the most significant enforcement developments, German
              BIK testing centers — whose audit methodology is widely recognized
              by regulators as evidence of accessibility compliance — announced
              that{" "}
              <strong>
                websites using accessibility overlays cannot receive BIK
                certification
              </strong>
              .
            </p>

            <blockquote className="border-l-4 border-red-400 pl-6 py-2 text-lg italic text-slate-300 bg-slate-900/40 rounded-r-xl pr-6">
              "For websites that use an overlay tool, the BIK testing centers
              cannot currently make a reliable statement regarding conformity
              according to EN/WCAG. For this reason, the test results of such
              offerings can no longer be published or provided with a BIK test
              seal."
              <span className="block mt-1 text-sm text-slate-400 not-italic">
                — German BIK Testing Centers, December 2025
              </span>
            </blockquote>

            <p className="text-lg leading-relaxed">
              This is a devastating blow to the accessibility overlay industry.
              Products like accessiBe, UserWay, AudioEye, and dozens of others
              have marketed themselves as quick-fix compliance solutions. But
              overlays don't modify the underlying source code or semantic
              structure of a website — they add a layer on top that often
              conflicts with screen readers, masks structural problems, and
              prevents proper audits.
            </p>

            <p className="text-lg leading-relaxed">
              This follows the{" "}
              <Link
                href="/blog/ftc-accessibe-fine-overlay-failures"
                className="text-sky-400 hover:text-sky-300 underline"
              >
                FTC's $1 million fine against accessiBe
              </Link>{" "}
              in the United States and over 1,000 accessibility experts signing
              the{" "}
              <a
                href="https://overlayfactsheet.com/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-300 underline"
              >
                Overlay Fact Sheet
              </a>{" "}
              opposing these products. Germany's BIK decision is the first
              formal regulatory-adjacent rejection of overlays in the EAA
              context.
            </p>

            <div className="rounded-xl bg-rose-900/30 border border-rose-500/30 p-4">
              <p className="text-rose-200 font-medium">
                ⚠️ <strong>If you're using an overlay for EAA compliance,
                stop.</strong> It won't protect you from enforcement, and in
                Germany it actively disqualifies your website from receiving the
                certification used to demonstrate compliance. Invest in
                code-level accessibility instead.
              </p>
            </div>
          </section>

          {/* Section 8: Penalties */}
          <section id="penalties" className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Penalties for Non-Compliance
            </h2>
            <p className="text-lg leading-relaxed">
              The EAA directive mandates that penalties must be "effective,
              proportionate, and dissuasive" — but leaves specific amounts and
              mechanisms to each member state. Based on early enforcement
              actions, here's what non-compliance can look like:
            </p>

            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 rounded-xl bg-slate-800/40">
                    <p className="text-3xl font-bold text-rose-400">💰</p>
                    <p className="text-lg font-bold text-white mt-2">
                      Financial Penalties
                    </p>
                    <p className="text-sm text-slate-400 mt-1">
                      Daily fines (Norway: ~$5,360/day), lump-sum penalties,
                      and compulsory correction orders with escalating costs
                    </p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-slate-800/40">
                    <p className="text-3xl font-bold text-amber-400">🚫</p>
                    <p className="text-lg font-bold text-white mt-2">
                      Product/Service Bans
                    </p>
                    <p className="text-sm text-slate-400 mt-1">
                      Non-compliant products can be banned from the EU market.
                      Services can be ordered to cease operations until
                      compliance is achieved
                    </p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-slate-800/40">
                    <p className="text-3xl font-bold text-purple-400">📋</p>
                    <p className="text-lg font-bold text-white mt-2">
                      Public Exposure
                    </p>
                    <p className="text-sm text-slate-400 mt-1">
                      Public lists of non-compliant companies (Czech Republic),
                      press campaigns by disability organizations (France),
                      brand damage
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed">
              The EAA also creates multiple pathways for complaints — individuals
              can report to regulators, disability organizations can bring legal
              action, and monitoring bodies themselves can initiate
              investigations. This creates a wider net of enforcement than the
              purely litigation-driven ADA model.
            </p>
          </section>

          {/* Section 9: Exemptions */}
          <section id="exemptions" className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Exemptions and Exceptions
            </h2>
            <p className="text-lg leading-relaxed">
              The EAA includes two categories of exemptions, though neither is
              as broad as some businesses assume:
            </p>

            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-xl font-bold text-emerald-400">
                  Microenterprise Exemption
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Companies with <strong>fewer than 10 employees AND</strong>{" "}
                  annual turnover or balance sheet under <strong>€2 million</strong>{" "}
                  (~$2.1M USD) are exempt from the EAA's service-related
                  accessibility requirements. Note: this only applies to{" "}
                  <em>services</em>. Product accessibility requirements apply
                  regardless of company size.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  For most US companies selling into the EU, this exemption
                  won't apply — if you have the resources to operate
                  internationally, you likely exceed these thresholds.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-xl font-bold text-amber-400">
                  Disproportionate Burden Defense
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Organizations can claim an exemption if they can document that
                  accessibility compliance costs would be "significantly more
                  than the value of the increased accessibility." However, this
                  defense requires extensive documentation and is assessed on a
                  case-by-case basis. Regulators will consider the size and
                  resources of the business, the estimated costs, and the
                  benefits to people with disabilities.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  In practice, this defense is rarely successful for
                  businesses with reasonable resources — it's designed for
                  genuinely edge cases, not as a general opt-out.
                </p>
              </div>
            </div>
          </section>

          {/* Section 10: Compliance Roadmap */}
          <section id="compliance-roadmap" className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Your EAA Compliance Roadmap: 6 Steps for US Businesses
            </h2>
            <p className="text-lg leading-relaxed">
              If your US business serves EU customers, here's your action plan
              for achieving and maintaining EAA compliance:
            </p>

            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20">
                  <span className="text-sky-400 font-bold text-lg">1</span>
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">
                    Audit Your Current Accessibility Status
                  </p>
                  <p className="text-slate-300">
                    Run automated WCAG 2.1 AA scans across your website, web
                    app, and mobile app. Focus on your most-trafficked EU-facing
                    pages first — product pages, checkout flows, account
                    management, and customer service. This gives you a baseline
                    and identifies your biggest compliance gaps.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20">
                  <span className="text-sky-400 font-bold text-lg">2</span>
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">
                    Identify Which EU Markets You Serve
                  </p>
                  <p className="text-slate-300">
                    Map your EU customer base by country. Each member state has
                    its own enforcement authority and potentially different
                    specific requirements. If you serve the Netherlands, France,
                    Germany, or Sweden — the countries with the most active
                    enforcement — prioritize compliance for those markets first.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20">
                  <span className="text-sky-400 font-bold text-lg">3</span>
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">
                    Remediate Critical Issues
                  </p>
                  <p className="text-slate-300">
                    Fix the most impactful WCAG failures first: missing alt
                    text, broken keyboard navigation, insufficient color
                    contrast, missing form labels, and missing page language
                    declarations. Think like an auditor — EU regulators will
                    likely start with automated testing of your most public
                    pages.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20">
                  <span className="text-sky-400 font-bold text-lg">4</span>
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">
                    Set Up Continuous Monitoring
                  </p>
                  <p className="text-slate-300">
                    Accessibility isn't a one-time fix. Website changes, new
                    features, and third-party integrations can introduce new
                    issues at any time. Continuous monitoring catches
                    regressions before regulators do — and provides the
                    documented compliance history that enforcement authorities
                    expect.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20">
                  <span className="text-sky-400 font-bold text-lg">5</span>
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">
                    Prepare Your Conformity Documentation
                  </p>
                  <p className="text-slate-300">
                    The EAA requires service providers to explain in their terms
                    of service how their product meets accessibility
                    requirements. Prepare an accessibility statement for your
                    EU-facing properties, document your testing methodology, and
                    maintain records of remediation efforts. If you operate in
                    the Netherlands, understand the non-conformance reporting
                    requirements.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20">
                  <span className="text-sky-400 font-bold text-lg">6</span>
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">
                    Don't Forget Non-Web Content
                  </p>
                  <p className="text-slate-300">
                    EN 301 549 goes beyond WCAG. Review your PDFs, downloadable
                    documents, email communications, and mobile app-specific
                    interactions. If you sell hardware in the EU, review the
                    physical accessibility requirements for your products
                    (keyboards, payment terminals, self-service kiosks).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* The Dual Compliance Advantage */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              The Dual Compliance Advantage: One Program, Two Regimes
            </h2>
            <p className="text-lg leading-relaxed">
              Here's the strategic insight that smart US businesses are
              leveraging: because the ADA and EAA both converge on WCAG 2.1 AA
              as the technical benchmark, a well-designed accessibility program
              satisfies <em>both</em> regulatory regimes simultaneously.
            </p>

            <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-rose-400">
                    ❌ The Expensive Path
                  </h3>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex gap-2">
                      <span className="text-rose-400">•</span>
                      <span>Ignore EAA, hope you're not targeted</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-rose-400">•</span>
                      <span>
                        React to enforcement: emergency audits, legal
                        defense, fines
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-rose-400">•</span>
                      <span>Risk: product bans, public shame lists</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-rose-400">•</span>
                      <span>
                        Separate ADA and EAA compliance programs = double cost
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-emerald-400">
                    ✅ The Smart Path
                  </h3>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex gap-2">
                      <span className="text-emerald-400">•</span>
                      <span>
                        Unified WCAG 2.1 AA program covers both ADA and EAA
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-400">•</span>
                      <span>
                        Continuous monitoring catches issues before enforcement
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-400">•</span>
                      <span>
                        Documentation satisfies both US courts and EU regulators
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-400">•</span>
                      <span>
                        Cost: $29–$249/month vs. $50K+ in reactive remediation
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-3xl border-2 border-sky-500/50 bg-gradient-to-br from-sky-950/50 to-blue-950/50 p-8 sm:p-10 space-y-6 text-center">
            <h2 className="text-3xl font-bold text-white">
              Comply with Both the ADA and EAA — From One Dashboard
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              RatedWithAI provides continuous WCAG 2.1 AA monitoring that
              satisfies both US ADA requirements and EU EAA standards. Get
              automated scans, compliance reports, and documented proof of
              ongoing accessibility efforts — starting at $29/month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/scan"
                className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-8 py-4 text-lg font-semibold text-white hover:bg-sky-400 transition"
              >
                Scan Your Website Free →
              </Link>
              <Link
                href="/#pricing"
                className="inline-flex items-center justify-center rounded-xl border border-sky-500/50 px-8 py-4 text-lg font-semibold text-sky-300 hover:bg-sky-500/10 transition"
              >
                View Monitoring Plans
              </Link>
            </div>
            <p className="text-sm text-slate-400">
              Free scan includes WCAG 2.1 AA compliance check · No credit card
              required · Results in under 60 seconds
            </p>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-lg font-bold text-white">
                  Does the European Accessibility Act apply to US companies?
                </h3>
                <p className="text-slate-300">
                  Yes. The EAA applies to any business that provides products or
                  services within the EU, regardless of where the company is
                  headquartered. If your US company sells to EU customers
                  through e-commerce, provides digital banking services, offers
                  streaming media, or sells covered hardware products in EU
                  markets, you must comply.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-lg font-bold text-white">
                  When did the European Accessibility Act go into effect?
                </h3>
                <p className="text-slate-300">
                  The EAA enforcement deadline was June 28, 2025. All 27 EU
                  member states were required to transpose the directive into
                  national law by that date. Enforcement is now active, with
                  countries like the Netherlands, France, Sweden, and Germany
                  already taking regulatory action against non-compliant
                  businesses.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-lg font-bold text-white">
                  What is the technical standard for EAA compliance?
                </h3>
                <p className="text-slate-300">
                  Most EU member states are implementing EN 301 549, which
                  incorporates WCAG 2.1 Level AA. EN 301 549 goes beyond web
                  content to include requirements for documents like PDFs,
                  mobile applications, and hardware devices like kiosks and
                  payment terminals. Some countries cite WCAG 2.1 AA directly.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-lg font-bold text-white">
                  What are the penalties for EAA non-compliance?
                </h3>
                <p className="text-slate-300">
                  Penalties vary by EU member state but must be "effective,
                  proportionate, and dissuasive" per the directive. Real-world
                  examples include daily fines of ~$5,360 USD in Norway for a
                  medical app, mandatory non-conformance reporting with audits
                  in the Netherlands, and legal action from disability
                  organizations in France against major retailers.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-lg font-bold text-white">
                  Are small businesses exempt from the EAA?
                </h3>
                <p className="text-slate-300">
                  Microenterprises — companies with fewer than 10 employees AND
                  annual turnover or balance sheet under €2 million — are exempt
                  from service-related requirements. However, this exemption is
                  narrow: most US companies selling internationally exceed these
                  thresholds. A "disproportionate burden" defense also exists
                  but requires extensive documentation.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-lg font-bold text-white">
                  How is the EAA different from the ADA?
                </h3>
                <p className="text-slate-300">
                  The ADA is enforced through private lawsuits, with no
                  mandated technical standard. The EAA is enforced through
                  government Market Surveillance Authorities, references EN 301
                  549/WCAG 2.1 AA, includes mandatory conformance reporting, and
                  covers a broader range of products and services including
                  hardware, transport, and banking.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-lg font-bold text-white">
                  Does EAA compliance also satisfy ADA requirements?
                </h3>
                <p className="text-slate-300">
                  Largely, yes. Complying with EN 301 549 (which includes WCAG
                  2.1 AA) meets or exceeds the de facto technical standard used
                  in US ADA web accessibility settlements. This means one
                  accessibility investment simultaneously strengthens both your
                  US and EU compliance positions.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-lg font-bold text-white">
                  What should my US business do right now to comply with the
                  EAA?
                </h3>
                <p className="text-slate-300">
                  Start by auditing your digital properties against WCAG 2.1 AA
                  and EN 301 549. Prioritize your most-trafficked EU-facing
                  pages — especially e-commerce checkout flows, product pages,
                  and customer service. Set up continuous monitoring, document
                  everything, and prepare accessibility statements for your EU
                  properties.
                </p>
              </div>
            </div>
          </section>

          {/* Sources */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Sources</h2>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a
                  href="https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/european-accessibility-act-eaa_en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 underline"
                >
                  European Commission — European Accessibility Act (EAA)
                </a>
              </li>
              <li>
                <a
                  href="https://www.deque.com/blog/early-signs-of-eaa-enforcement-across-europe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 underline"
                >
                  Deque — Early Signs of EAA Enforcement Across Europe
                </a>{" "}
                (December 2025)
              </li>
              <li>
                <a
                  href="https://www.deque.com/blog/digital-accessibility-in-a-post-eaa-deadline-world-actionable-advice-for-developments-in-the-netherlands-and-france/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 underline"
                >
                  Deque — Digital Accessibility in a Post-EAA Deadline World
                </a>{" "}
                (September 2025)
              </li>
              <li>
                <a
                  href="https://www.lflegal.com/lf-country/european-accessibility-act-eaa-enforcement-and-implementation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 underline"
                >
                  Lainey Feingold — EAA Enforcement and Implementation Tracker
                </a>
              </li>
              <li>
                <a
                  href="https://chrisyoong.com/blog/germany-rejects-accessibility-overlays-for-eaa-compliance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 underline"
                >
                  Chris Yoong — German Auditors Reject Accessibility Overlays
                  in EAA Context
                </a>{" "}
                (December 2025)
              </li>
              <li>
                <a
                  href="https://www.deque.com/accessibility-compliance/european-accessibility-act-eaa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 underline"
                >
                  Deque — European Accessibility Act Compliance Guide
                </a>
              </li>
              <li>
                <a
                  href="https://overlayfactsheet.com/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 underline"
                >
                  Overlay Fact Sheet — 1,000+ Experts Oppose Overlay Products
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Nordic-Accessibility-Community-Group/working-with-EN-301-549/blob/main/EAA%20enforcement%20tracking.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 underline"
                >
                  Nordic Accessibility Group — EAA Enforcement Tracking
                </a>
              </li>
            </ul>
          </section>

          {/* Related Articles */}
          <section className="space-y-6 border-t border-slate-800 pt-10">
            <h2 className="text-2xl font-semibold text-white">
              Related Articles
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              <Link
                href="/blog/ftc-accessibe-fine-overlay-failures"
                className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-5 transition hover:border-slate-700 hover:bg-slate-900/70"
              >
                <p className="text-xs text-rose-400 uppercase tracking-wider">
                  Enforcement
                </p>
                <h3 className="mt-1 font-semibold text-white">
                  FTC Fined accessiBe $1M: Why Overlays Failed
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  The FTC's enforcement action against the largest overlay
                  provider and why code-level accessibility is the only path.
                </p>
              </Link>
              <Link
                href="/blog/ada-title-ii-deadline-countdown-2026"
                className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-5 transition hover:border-slate-700 hover:bg-slate-900/70"
              >
                <p className="text-xs text-amber-400 uppercase tracking-wider">
                  Deadline
                </p>
                <h3 className="mt-1 font-semibold text-white">
                  ADA Title II April 2026 Deadline Countdown
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  State and local government websites must meet WCAG 2.1 AA by
                  April 24, 2026. Here's what you need to know.
                </p>
              </Link>
              <Link
                href="/blog/fashion-nova-doj-settlement-rejected-2026"
                className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-5 transition hover:border-slate-700 hover:bg-slate-900/70"
              >
                <p className="text-xs text-purple-400 uppercase tracking-wider">
                  Legal
                </p>
                <h3 className="mt-1 font-semibold text-white">
                  Fashion Nova Settlement Rejected by DOJ
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  Why "promise to fix it" settlements are dead and ongoing
                  monitoring is now non-negotiable.
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
