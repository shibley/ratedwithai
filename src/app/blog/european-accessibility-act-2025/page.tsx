/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "European Accessibility Act 2025: What US Companies Need to Know | RatedWithAI",
  description:
    "The European Accessibility Act (EAA) takes effect June 28, 2025. Learn how it impacts US companies selling to EU customers, what's required, and how to prepare.",
  keywords: [
    "European Accessibility Act",
    "EAA 2025",
    "EU accessibility requirements",
    "European Accessibility Act US companies",
    "EAA compliance",
    "EU digital accessibility law",
    "EN 301 549",
    "European accessibility directive",
  ],
  openGraph: {
    title: "European Accessibility Act 2025: What US Companies Need to Know",
    description:
      "The EAA takes effect June 28, 2025. Here's what US companies selling to EU customers need to do to comply.",
    type: "article",
    publishedTime: "2026-02-21T00:00:00.000Z",
    authors: ["RatedWithAI Team"],
  },
};

export default function EuropeanAccessibilityActPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "European Accessibility Act 2025: What US Companies Need to Know",
    description:
      "Comprehensive guide to the European Accessibility Act and its impact on US companies selling products and services to EU customers.",
    datePublished: "2026-02-21T00:00:00.000Z",
    dateModified: "2026-02-21T00:00:00.000Z",
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

          <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8">
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 via-blue-400 to-purple-500 text-slate-900 font-bold">
                R
              </span>
              <div>
                <p className="text-lg font-semibold tracking-tight">RatedWithAI</p>
                <p className="text-xs text-slate-400">Blog</p>
              </div>
            </Link>
            <Link
              className="rounded-full border border-slate-700/60 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-400 hover:text-white"
              href="/"
            >
              Scan your site
            </Link>
          </header>

          <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-14 pt-4">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              Regulatory Update
            </p>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              European Accessibility Act 2025: What US Companies Need to Know
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              The European Accessibility Act (EAA) became enforceable on June 28, 2025. If your US company sells products or services to European customers, this law applies to you—and non-compliance carries real penalties.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
              <time dateTime="2026-02-21">February 21, 2026</time>
              <span>·</span>
              <span>9 min read</span>
            </div>
          </section>
        </div>

        <article className="mx-auto w-full max-w-4xl space-y-10 px-6 pb-24 text-slate-200">
          {/* Key Dates Alert */}
          <section className="rounded-3xl border border-amber-500/40 bg-amber-500/10 p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              ⚡ Key Facts at a Glance
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl bg-slate-900 p-4">
                <p className="text-sm text-slate-400">Enforcement Date</p>
                <p className="text-lg font-semibold text-white">June 28, 2025</p>
              </div>
              <div className="rounded-xl bg-slate-900 p-4">
                <p className="text-sm text-slate-400">Standard Referenced</p>
                <p className="text-lg font-semibold text-white">EN 301 549 (maps to WCAG 2.1 AA)</p>
              </div>
              <div className="rounded-xl bg-slate-900 p-4">
                <p className="text-sm text-slate-400">Applies To</p>
                <p className="text-lg font-semibold text-white">Products & services sold in the EU</p>
              </div>
              <div className="rounded-xl bg-slate-900 p-4">
                <p className="text-sm text-slate-400">Penalties</p>
                <p className="text-lg font-semibold text-white">Set by each EU member state</p>
              </div>
            </div>
          </section>

          {/* What is the EAA */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              What Is the European Accessibility Act?
            </h2>
            <p className="text-lg leading-relaxed">
              The European Accessibility Act (Directive 2019/882) is an EU-wide law that sets binding accessibility requirements for products and services sold within the European Union. Unlike the ADA—which relies on court interpretation—the EAA explicitly defines which digital products and services must be accessible and references specific technical standards.
            </p>
            <p className="text-lg leading-relaxed">
              The directive was adopted in 2019 and gave member states until June 28, 2022 to transpose it into national law. <strong>Enforcement began on June 28, 2025</strong>, meaning businesses must now comply or face penalties.
            </p>
            <p className="text-lg leading-relaxed">
              For US companies, the EAA represents a major shift: <strong>if you sell to EU customers, you're subject to EU accessibility law regardless of where your company is headquartered.</strong>
            </p>
          </section>

          {/* What's Covered */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              What Products and Services Are Covered?
            </h2>
            <p className="text-lg leading-relaxed">
              The EAA covers a specific list of products and services. If yours is on this list, compliance is mandatory.
            </p>

            <div className="grid gap-4 md:grid-cols-2 mt-6">
              <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Products</h3>
                <ul className="space-y-2 text-base text-slate-300">
                  <li className="flex gap-3">
                    <span className="text-sky-400">•</span>
                    <span>Computers and operating systems</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-sky-400">•</span>
                    <span>Smartphones and tablets</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-sky-400">•</span>
                    <span>ATMs and payment terminals</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-sky-400">•</span>
                    <span>Ticketing and check-in machines</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-sky-400">•</span>
                    <span>E-readers</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-sky-400">•</span>
                    <span>Interactive self-service terminals</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Services</h3>
                <ul className="space-y-2 text-base text-slate-300">
                  <li className="flex gap-3">
                    <span className="text-sky-400">•</span>
                    <span><Link href="/industry/ecommerce" className="text-sky-400 hover:text-sky-300 underline">E-commerce websites and apps</Link></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-sky-400">•</span>
                    <span><Link href="/industry/banking" className="text-sky-400 hover:text-sky-300 underline">Banking and financial services</Link></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-sky-400">•</span>
                    <span>Telecom services</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-sky-400">•</span>
                    <span>Audiovisual media services</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-sky-400">•</span>
                    <span>E-books and dedicated software</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-sky-400">•</span>
                    <span><Link href="/industry/travel" className="text-sky-400 hover:text-sky-300 underline">Transport services</Link> (air, bus, rail, waterborne)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl border border-sky-500/30 bg-sky-500/5 p-6">
              <p className="text-base text-slate-300">
                <strong className="text-white">The big one for US companies:</strong> E-commerce is explicitly listed. If you operate an online store that accepts orders from EU customers, your website must meet EAA accessibility requirements. This applies to businesses of all sizes (with limited exceptions for microenterprises under 10 employees and €2M annual turnover).
              </p>
            </div>
          </section>

          {/* EAA vs ADA */}
          <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
            <h2 className="text-3xl font-semibold text-white">
              EAA vs. ADA: Key Differences
            </h2>
            <p className="text-lg leading-relaxed">
              If you're already familiar with <Link href="/blog/how-to-check-website-ada-compliant" className="text-sky-400 hover:text-sky-300 underline">ADA compliance</Link>, the EAA will feel both similar and different. Here's how they compare:
            </p>

            <div className="space-y-4 mt-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
                  <p className="text-sm text-slate-400 mb-2">ADA (United States)</p>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>• No explicit website accessibility text in the law</li>
                    <li>• Courts reference WCAG 2.1 AA informally</li>
                    <li>• Enforcement through private lawsuits</li>
                    <li>• Damages vary by case and state</li>
                    <li>• Applies to "places of public accommodation"</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-sky-500/30 bg-sky-500/5 p-5">
                  <p className="text-sm text-sky-400 mb-2">EAA (European Union)</p>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>• Explicitly names digital products and services</li>
                    <li>• References EN 301 549 standard (based on WCAG 2.1 AA)</li>
                    <li>• Enforcement through national market surveillance</li>
                    <li>• Penalties set by each member state</li>
                    <li>• Applies to specific listed product/service categories</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6 mt-4">
              <p className="text-base text-slate-300">
                <strong className="text-emerald-300">The good news:</strong> The technical standard is essentially the same. EN 301 549 maps closely to <Link href="/blog/wcag-22-complete-guide" className="text-sky-400 hover:text-sky-300 underline">WCAG 2.1 Level AA</Link>. If your website already meets WCAG 2.1 AA for ADA compliance, you're most of the way there for EAA compliance too.
              </p>
            </div>
          </section>

          {/* Technical Requirements */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              What Does Compliance Look Like Technically?
            </h2>
            <p className="text-lg leading-relaxed">
              The EAA references <strong>EN 301 549</strong>, the European standard for digital accessibility. For web content, EN 301 549 incorporates WCAG 2.1 Level AA requirements. Here's what that means in practice:
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Perceivable</h3>
                <ul className="space-y-2 text-base text-slate-300">
                  <li className="flex gap-3">
                    <span className="text-emerald-400">✓</span>
                    <span>All images have meaningful <Link href="/wcag/1-1-1-non-text-content" className="text-sky-400 hover:text-sky-300 underline">alternative text</Link></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">✓</span>
                    <span>Videos have captions and audio descriptions</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">✓</span>
                    <span>Text meets <Link href="/wcag/1-4-3-contrast-minimum" className="text-sky-400 hover:text-sky-300 underline">minimum contrast ratios</Link> (4.5:1)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">✓</span>
                    <span>Content is responsive and works at 200% zoom</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Operable</h3>
                <ul className="space-y-2 text-base text-slate-300">
                  <li className="flex gap-3">
                    <span className="text-emerald-400">✓</span>
                    <span>All functionality available via <Link href="/wcag/2-1-1-keyboard" className="text-sky-400 hover:text-sky-300 underline">keyboard</Link></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">✓</span>
                    <span>No keyboard traps</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">✓</span>
                    <span>Focus indicators are visible</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">✓</span>
                    <span>Navigation is consistent and predictable</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Understandable</h3>
                <ul className="space-y-2 text-base text-slate-300">
                  <li className="flex gap-3">
                    <span className="text-emerald-400">✓</span>
                    <span>Language of the page is declared</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">✓</span>
                    <span>Forms provide clear labels and error messages</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">✓</span>
                    <span>Navigation is consistent across pages</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Robust</h3>
                <ul className="space-y-2 text-base text-slate-300">
                  <li className="flex gap-3">
                    <span className="text-emerald-400">✓</span>
                    <span>Valid HTML with proper semantic structure</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">✓</span>
                    <span>Custom components have ARIA roles and states</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">✓</span>
                    <span>Status messages communicated to assistive technologies</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Penalties */}
          <section className="space-y-6 rounded-3xl border border-rose-500/30 bg-rose-500/5 p-8">
            <h2 className="text-3xl font-semibold text-white">
              🚩 What Happens If You Don't Comply?
            </h2>
            <p className="text-lg leading-relaxed">
              Unlike ADA enforcement (which relies on private lawsuits), the EAA is enforced by <strong>government market surveillance authorities</strong> in each EU member state. This means:
            </p>
            <ul className="space-y-3 text-lg">
              <li className="flex gap-3">
                <span className="text-rose-400">•</span>
                <span><strong>Fines</strong> — Each member state sets its own penalty structure. Some have announced significant fines for non-compliance.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-rose-400">•</span>
                <span><strong>Market restrictions</strong> — Non-compliant products and services can be ordered off the EU market entirely.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-rose-400">•</span>
                <span><strong>CE marking implications</strong> — Products requiring CE marking must demonstrate accessibility conformity.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-rose-400">•</span>
                <span><strong>Consumer complaints</strong> — EU citizens can file complaints with their national authority, triggering investigations.</span>
              </li>
            </ul>
            <p className="text-lg leading-relaxed mt-4">
              For US companies, the practical risk is being reported by EU customers or flagged during market surveillance sweeps. The penalty can include being forced to withdraw your product or service from the EU market.
            </p>
          </section>

          {/* Industries Most Affected */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Which US Industries Are Most Affected?
            </h2>
            <p className="text-lg leading-relaxed">
              Any US company selling covered products or services to EU customers needs to comply. These industries face the highest impact:
            </p>

            <div className="grid gap-4 md:grid-cols-2 mt-6">
              <Link
                href="/industry/ecommerce"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-sky-400 mb-2">🛒 High Impact</p>
                <h3 className="text-lg font-semibold text-white">E-Commerce</h3>
                <p className="text-sm text-slate-300 mt-2">
                  Online stores selling to EU customers must make their full purchase journey accessible.
                </p>
              </Link>
              <Link
                href="/industry/banking"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-sky-400 mb-2">🏦 High Impact</p>
                <h3 className="text-lg font-semibold text-white">Banking & Financial Services</h3>
                <p className="text-sm text-slate-300 mt-2">
                  Online banking, payment platforms, and fintech apps serving EU users must comply.
                </p>
              </Link>
              <Link
                href="/industry/travel"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-sky-400 mb-2">✈️ High Impact</p>
                <h3 className="text-lg font-semibold text-white">Travel & Transportation</h3>
                <p className="text-sm text-slate-300 mt-2">
                  Booking platforms, airline sites, and transport services are explicitly covered.
                </p>
              </Link>
              <Link
                href="/industry/retail"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-sky-400 mb-2">🏬 Medium Impact</p>
                <h3 className="text-lg font-semibold text-white">Retail & Consumer Goods</h3>
                <p className="text-sm text-slate-300 mt-2">
                  Brands with EU online presence or self-service kiosks in EU stores.
                </p>
              </Link>
            </div>

            <p className="text-base text-slate-300 mt-4">
              See our complete <Link href="/blog/ada-compliance-by-industry" className="text-sky-400 hover:text-sky-300 underline">industry-specific compliance guide</Link> for detailed requirements by sector.
            </p>
          </section>

          {/* Action Plan */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Your EAA Compliance Action Plan
            </h2>
            <p className="text-lg leading-relaxed">
              If the EAA applies to your business, here's what to do right now:
            </p>

            <div className="space-y-6 mt-6">
              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 font-semibold text-sky-300">1</span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Audit Your Current State</h3>
                    <p className="text-base text-slate-300 mt-2">
                      Run a comprehensive accessibility scan to understand your current compliance level. Identify which WCAG 2.1 AA criteria you're failing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 font-semibold text-sky-300">2</span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Determine if the EAA Applies to You</h3>
                    <p className="text-base text-slate-300 mt-2">
                      Review whether your products or services fall within the EAA's scope. If you sell to EU customers online, the answer is almost certainly yes for your website. Microenterprises (under 10 employees and €2M turnover) providing services may be exempt.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 font-semibold text-sky-300">3</span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Fix Critical Issues First</h3>
                    <p className="text-base text-slate-300 mt-2">
                      Focus on the <Link href="/blog/top-10-wcag-failures" className="text-sky-400 hover:text-sky-300 underline">most common WCAG failures</Link>: missing alt text, low contrast, unlabeled forms, and keyboard traps. These fixes cover the majority of accessibility issues.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 font-semibold text-sky-300">4</span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Test Critical User Journeys</h3>
                    <p className="text-base text-slate-300 mt-2">
                      The EAA cares about whether users can actually complete tasks. Test your purchase flow, registration, customer support, and account management with keyboard-only and screen reader testing. See our <Link href="/blog/accessibility-audit-checklist-2026" className="text-sky-400 hover:text-sky-300 underline">full audit checklist</Link>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 font-semibold text-sky-300">5</span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Publish an Accessibility Statement</h3>
                    <p className="text-base text-slate-300 mt-2">
                      The EAA requires service providers to explain how their services meet accessibility requirements, provide contact information for accessibility issues, and link to enforcement bodies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 font-semibold text-sky-300">6</span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Monitor Continuously</h3>
                    <p className="text-base text-slate-300 mt-2">
                      Accessibility isn't a one-time project. New content, features, and updates can introduce new issues. Set up regular scans and include accessibility in your development workflow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* US Lawsuit Context */}
          <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
            <h2 className="text-3xl font-semibold text-white">
              The Double Compliance Advantage
            </h2>
            <p className="text-lg leading-relaxed">
              Here's the silver lining: <strong>meeting EAA requirements simultaneously protects you from ADA lawsuits in the US.</strong> Both frameworks map to WCAG 2.1 AA.
            </p>
            <p className="text-lg leading-relaxed">
              ADA website lawsuits continue to rise in the US, particularly in <Link href="/state/new-york" className="text-sky-400 hover:text-sky-300 underline">New York</Link>, <Link href="/state/california" className="text-sky-400 hover:text-sky-300 underline">California</Link>, and <Link href="/state/florida" className="text-sky-400 hover:text-sky-300 underline">Florida</Link>. By investing in accessibility for EAA compliance, you're also reducing your <Link href="/blog/ada-lawsuit-settlements-2026" className="text-sky-400 hover:text-sky-300 underline">ADA lawsuit risk</Link>.
            </p>
            <p className="text-lg leading-relaxed">
              Think of it as one investment that protects you on two fronts.
            </p>
          </section>

          {/* FAQ */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <h3 className="text-lg font-semibold text-white">Does the EAA apply to my small US business?</h3>
                <p className="text-base text-slate-300 mt-2">
                  If you sell covered products or services to EU customers, generally yes. Microenterprises providing services (under 10 employees and €2M turnover) may qualify for an exemption, but product manufacturers of any size must comply.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <h3 className="text-lg font-semibold text-white">Is WCAG 2.1 AA enough for EAA compliance?</h3>
                <p className="text-base text-slate-300 mt-2">
                  For web content, yes—EN 301 549 incorporates WCAG 2.1 AA for web content. However, EN 301 549 also includes additional requirements for software, hardware, and documentation that go beyond WCAG.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <h3 className="text-lg font-semibold text-white">What if I just block EU traffic?</h3>
                <p className="text-base text-slate-300 mt-2">
                  This is technically possible but rarely practical. You'd lose an entire market of 450 million consumers. And if your site still accepts EU orders (even inadvertently), you could still be liable.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <h3 className="text-lg font-semibold text-white">Is there a transition period?</h3>
                <p className="text-base text-slate-300 mt-2">
                  The main transition period ended June 28, 2025. Some products placed on the market before that date may have an extended period until June 28, 2030, for certain service contracts entered before June 28, 2025. New products and services must comply now.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-3xl border border-slate-800/70 bg-gradient-to-r from-slate-900 via-slate-900/70 to-slate-950 p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                  Check Your Compliance
                </p>
                <h3 className="mt-3 text-3xl font-semibold text-white">
                  Is Your Website Ready for the EAA?
                </h3>
                <p className="mt-3 text-base text-slate-300">
                  Our AI-powered scanner checks your site against WCAG 2.1 AA—the same standard the EAA requires. Get your report in under 60 seconds.
                </p>
              </div>
              <Link
                href="/"
                className="whitespace-nowrap rounded-xl bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 px-8 py-4 text-base font-semibold text-slate-950 transition hover:shadow-lg hover:shadow-blue-500/50"
              >
                Scan Your Site Free
              </Link>
            </div>
          </section>

          {/* Related Articles */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Related Resources</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Link
                href="/blog/how-to-check-website-ada-compliant"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-slate-400">Beginner Guide</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  How to Check if Your Site is ADA Compliant
                </p>
              </Link>
              <Link
                href="/blog/accessibility-audit-checklist-2026"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-slate-400">Checklist</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Website Accessibility Audit Checklist 2026
                </p>
              </Link>
              <Link
                href="/blog/top-10-wcag-failures"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-slate-400">Practical Fixes</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Top 10 Most Common WCAG Failures
                </p>
              </Link>
              <Link
                href="/blog/ada-compliance-by-industry"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-slate-400">Industry Guide</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  ADA Compliance by Industry
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
