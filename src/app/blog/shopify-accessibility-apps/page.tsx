/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title:
    "7 Best Shopify Accessibility Apps in 2026 (Tested & Compared) | RatedWithAI",
  description:
    "We tested the top Shopify accessibility apps for ADA and WCAG compliance. Compare pricing, features, overlay vs code-based approaches, and find the right solution for your store.",
  openGraph: {
    title: "7 Best Shopify Accessibility Apps in 2026 — Tested & Compared",
    description:
      "Honest comparison of the most popular Shopify accessibility apps. Overlay widgets vs code-based scanners, pricing, real WCAG coverage, and what actually protects your store.",
    type: "article",
    publishedTime: "2026-02-23T00:00:00.000Z",
    authors: ["RatedWithAI Team"],
  },
  keywords: [
    "shopify accessibility app",
    "shopify accessibility apps",
    "best shopify accessibility app",
    "shopify ada compliance app",
    "shopify wcag app",
    "shopify accessibility plugin",
    "shopify ada app",
    "shopify accessibility widget",
    "shopify eaa compliance",
    "shopify accessibility solution",
    "shopify store accessibility",
    "shopify accessibility tools",
  ],
  alternates: {
    canonical: "https://ratedwithai.com/blog/shopify-accessibility-apps",
  },
};

export default function ShopifyAccessibilityAppsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "7 Best Shopify Accessibility Apps in 2026 (Tested & Compared)",
    description:
      "We tested the top Shopify accessibility apps for ADA and WCAG compliance. Compare pricing, features, overlay vs code-based approaches, and find the right solution for your store.",
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
    datePublished: "2026-02-23T00:00:00.000Z",
    dateModified: "2026-02-23T00:00:00.000Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://ratedwithai.com/blog/shopify-accessibility-apps",
    },
    image: "https://ratedwithai.com/og-shopify-accessibility-apps.png",
  };

  const faqItems = [
    {
      q: "Do Shopify stores need to be ADA-compliant?",
      a: "Yes. Any Shopify store that sells to customers in the United States is generally considered a 'place of public accommodation' under ADA Title III. Courts have consistently ruled that commercial websites, including ecommerce stores, must be accessible to people with disabilities. In 2025, 77% of ADA web accessibility lawsuits targeted ecommerce sites, making Shopify stores a primary target.",
    },
    {
      q: "Are Shopify accessibility overlay apps enough for compliance?",
      a: "No. Overlay widgets modify the frontend appearance but don't fix underlying code issues. The FTC fined accessiBe $1 million in 2025 for claiming their overlay could make sites WCAG-compliant. In H1 2025, 22.6% of ADA lawsuits targeted websites with overlay widgets installed. Courts require actual code-level remediation, not surface-level visual adjustments.",
    },
    {
      q: "What WCAG level should a Shopify store meet?",
      a: "Most legal frameworks reference WCAG 2.1 Level AA. This is the standard cited by the ADA, Section 508, the European Accessibility Act (EAA), and the upcoming April 2026 Title II deadline. Level AA requires meeting all 50 success criteria across the four POUR principles: Perceivable, Operable, Understandable, and Robust.",
    },
    {
      q: "How much do Shopify accessibility apps cost?",
      a: "Prices range from free (limited features) to $490+/year for overlay solutions like accessWidget. Code-based scanners like RatedWithAI start at $29/month. Most Shopify-native apps charge $19-30/month. Free plans typically offer only basic visual adjustments without addressing structural WCAG issues. The cost of NOT being accessible — ADA lawsuits average $25,000-75,000 in settlements.",
    },
    {
      q: "Can I make my Shopify store accessible without an app?",
      a: "Partially. You can choose an accessible Shopify theme (Dawn is the best default option), write descriptive alt text for all images, ensure proper heading structure, and use sufficient color contrast. However, many WCAG issues are theme-level or require code changes that most store owners can't make themselves. A scanner identifies the exact issues so you (or a developer) can fix them properly.",
    },
    {
      q: "Does the European Accessibility Act apply to Shopify stores?",
      a: "If your Shopify store sells products or services to customers in the EU, the European Accessibility Act (EAA) applies. Enforced since June 2025, the EAA requires WCAG 2.1 AA compliance for all ecommerce platforms operating in EU member states. Fines vary by country but can be significant. This applies even if your business is based outside the EU.",
    },
    {
      q: "What's the difference between an accessibility widget and a scanner?",
      a: "An accessibility widget (overlay) adds a toolbar to your website that lets visitors adjust visual settings like font size and contrast. It does NOT fix your underlying code. A scanner analyzes your pages against WCAG criteria and identifies specific code-level issues to fix. Widgets address maybe 10-15% of WCAG criteria; scanners test all 50 and guide you to fix the actual problems.",
    },
    {
      q: "Which Shopify theme is most accessible?",
      a: "Shopify's Dawn theme is the most accessible free theme, built with semantic HTML and ARIA landmarks. However, no theme is fully WCAG-compliant out of the box — your content, images, color choices, and customizations all affect accessibility. After choosing a theme, scan your store with a WCAG testing tool to identify remaining issues.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="mx-auto max-w-4xl px-6 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-slate-500">
          <Link href="/" className="hover:text-slate-300">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-slate-300">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-300">Shopify Accessibility Apps</span>
        </nav>

        {/* Hero */}
        <header className="mb-12">
          <div className="mb-4 flex items-center gap-3">
            <span className="inline-block rounded-full border border-orange-500/30 bg-orange-500/15 px-3 py-1 text-xs font-medium text-orange-300">
              Comparison
            </span>
            <span className="text-sm text-slate-500">
              February 23, 2026 · 15 min read
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            7 Best Shopify Accessibility Apps in 2026{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              (Tested & Compared)
            </span>
          </h1>
          <p className="text-xl leading-relaxed text-slate-300">
            77% of ADA web accessibility lawsuits in 2025 targeted ecommerce sites.
            Your Shopify store is a prime target. We tested the most popular
            accessibility apps to find what actually works — and what's just a
            liability in disguise.
          </p>
        </header>

        {/* Key Stats Banner */}
        <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5 text-center">
            <p className="text-3xl font-bold text-red-400">8,667+</p>
            <p className="mt-1 text-sm text-slate-400">
              ADA lawsuits filed in 2025
            </p>
          </div>
          <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-5 text-center">
            <p className="text-3xl font-bold text-amber-400">77%</p>
            <p className="mt-1 text-sm text-slate-400">
              targeted ecommerce sites
            </p>
          </div>
          <div className="rounded-xl border border-sky-500/30 bg-sky-500/5 p-5 text-center">
            <p className="text-3xl font-bold text-sky-400">$25-75K</p>
            <p className="mt-1 text-sm text-slate-400">
              average lawsuit settlement
            </p>
          </div>
        </div>

        {/* Warning Box */}
        <div className="mb-12 rounded-xl border border-amber-500/30 bg-amber-500/5 p-6">
          <h2 className="mb-3 flex items-center gap-2 text-lg font-bold text-amber-300">
            ⚠️ The Overlay Problem: What You Need to Know First
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Most Shopify "accessibility apps" are <strong>overlay widgets</strong> — they add a toolbar
            to your site that lets visitors adjust visual settings. But overlays
            <strong> don't fix your underlying code</strong>. The FTC fined accessiBe $1 million
            in 2025 for falsely claiming their overlay made sites WCAG-compliant. In
            H1 2025, 22.6% of ADA lawsuits targeted websites{" "}
            <em>with overlay widgets already installed</em>. Courts require actual code-level
            fixes, not surface-level visual adjustments.
          </p>
          <p className="mt-3 text-sm text-slate-400">
            We've included both overlay apps and code-based scanners below so you can make an informed choice.
            Each listing clearly labels which approach it takes.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="mb-12 rounded-xl border border-slate-700 bg-slate-900/80 p-6">
          <h2 className="mb-4 text-lg font-bold text-white">Table of Contents</h2>
          <nav className="space-y-2 text-sm">
            <a href="#quick-comparison" className="block text-sky-400 hover:text-sky-300">
              Quick Comparison Table
            </a>
            <a href="#ratedwithai" className="block text-sky-400 hover:text-sky-300">
              1. RatedWithAI — Best Code-Based Scanner for Shopify
            </a>
            <a href="#accessibly" className="block text-sky-400 hover:text-sky-300">
              2. Accessibly — Best Budget Overlay Widget
            </a>
            <a href="#all-in-one" className="block text-sky-400 hover:text-sky-300">
              3. All in One Accessibility — Best Free Plan
            </a>
            <a href="#accesswidget" className="block text-sky-400 hover:text-sky-300">
              4. accessWidget (accessiBe) — Most Popular Overlay
            </a>
            <a href="#accessibility-spark" className="block text-sky-400 hover:text-sky-300">
              5. Accessibility Spark — Best Automation Features
            </a>
            <a href="#userway" className="block text-sky-400 hover:text-sky-300">
              6. UserWay — Best for Multi-Store Brands
            </a>
            <a href="#dawn-manual" className="block text-sky-400 hover:text-sky-300">
              7. Manual Accessibility with Dawn Theme — Best Free Approach
            </a>
            <a href="#overlay-vs-scanner" className="block text-sky-400 hover:text-sky-300">
              Overlay Widgets vs. Code-Based Scanners: The Critical Difference
            </a>
            <a href="#shopify-specific" className="block text-sky-400 hover:text-sky-300">
              Shopify-Specific Accessibility Challenges
            </a>
            <a href="#legal-landscape" className="block text-sky-400 hover:text-sky-300">
              The 2026 Legal Landscape for Shopify Stores
            </a>
            <a href="#choosing" className="block text-sky-400 hover:text-sky-300">
              How to Choose the Right Accessibility Solution
            </a>
            <a href="#action-plan" className="block text-sky-400 hover:text-sky-300">
              5-Step Accessibility Action Plan for Shopify
            </a>
            <a href="#faq" className="block text-sky-400 hover:text-sky-300">
              FAQ
            </a>
          </nav>
        </div>

        {/* ─── Quick Comparison Table ─── */}
        <section id="quick-comparison" className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-white">
            Quick Comparison: Shopify Accessibility Apps at a Glance
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700 bg-slate-900/80">
                  <th className="px-4 py-3 text-left text-slate-300">App</th>
                  <th className="px-4 py-3 text-left text-slate-300">Type</th>
                  <th className="px-4 py-3 text-left text-slate-300">Price</th>
                  <th className="px-4 py-3 text-left text-slate-300">WCAG Coverage</th>
                  <th className="px-4 py-3 text-left text-slate-300">Rating</th>
                  <th className="px-4 py-3 text-left text-slate-300">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-700/50 bg-sky-500/5">
                  <td className="px-4 py-3 font-medium text-sky-400">RatedWithAI ⭐</td>
                  <td className="px-4 py-3 text-green-400">Code-based scanner</td>
                  <td className="px-4 py-3 text-slate-300">Free / $29-49/mo</td>
                  <td className="px-4 py-3 text-slate-300">50/50 criteria tested</td>
                  <td className="px-4 py-3 text-slate-300">N/A (external tool)</td>
                  <td className="px-4 py-3 text-slate-300">Finding real code issues</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="px-4 py-3 font-medium text-white">Accessibly</td>
                  <td className="px-4 py-3 text-amber-400">Overlay widget</td>
                  <td className="px-4 py-3 text-slate-300">Free / $19-49/mo</td>
                  <td className="px-4 py-3 text-slate-300">~10-15% of criteria</td>
                  <td className="px-4 py-3 text-slate-300">4.4 ★ (23 reviews)</td>
                  <td className="px-4 py-3 text-slate-300">Budget-friendly first step</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="px-4 py-3 font-medium text-white">All in One Accessibility</td>
                  <td className="px-4 py-3 text-amber-400">Overlay widget</td>
                  <td className="px-4 py-3 text-slate-300">Free / $19-49/mo</td>
                  <td className="px-4 py-3 text-slate-300">~10-15% of criteria</td>
                  <td className="px-4 py-3 text-slate-300">5.0 ★ (61 reviews)</td>
                  <td className="px-4 py-3 text-slate-300">Stores wanting free tier</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="px-4 py-3 font-medium text-white">accessWidget</td>
                  <td className="px-4 py-3 text-red-400">Overlay widget</td>
                  <td className="px-4 py-3 text-slate-300">$490-3,990/yr</td>
                  <td className="px-4 py-3 text-slate-300">~10-16% of criteria</td>
                  <td className="px-4 py-3 text-slate-300">4.1 ★ (14 reviews)</td>
                  <td className="px-4 py-3 text-slate-300">Not recommended</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="px-4 py-3 font-medium text-white">Accessibility Spark</td>
                  <td className="px-4 py-3 text-amber-400">Overlay widget</td>
                  <td className="px-4 py-3 text-slate-300">$99.99/mo</td>
                  <td className="px-4 py-3 text-slate-300">~10-15% of criteria</td>
                  <td className="px-4 py-3 text-slate-300">4.7 ★ (37 reviews)</td>
                  <td className="px-4 py-3 text-slate-300">Automation features</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="px-4 py-3 font-medium text-white">UserWay</td>
                  <td className="px-4 py-3 text-amber-400">Overlay widget</td>
                  <td className="px-4 py-3 text-slate-300">Free / $49+/mo</td>
                  <td className="px-4 py-3 text-slate-300">~10-15% of criteria</td>
                  <td className="px-4 py-3 text-slate-300">4.8 ★ (68 reviews)</td>
                  <td className="px-4 py-3 text-slate-300">Multi-store operations</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-white">Dawn Theme (Manual)</td>
                  <td className="px-4 py-3 text-green-400">Code-based (DIY)</td>
                  <td className="px-4 py-3 text-slate-300">Free</td>
                  <td className="px-4 py-3 text-slate-300">Varies (depends on effort)</td>
                  <td className="px-4 py-3 text-slate-300">N/A</td>
                  <td className="px-4 py-3 text-slate-300">Technical store owners</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ─── 1. RatedWithAI ─── */}
        <section id="ratedwithai" className="mb-16">
          <div className="rounded-2xl border border-sky-500/30 bg-gradient-to-br from-sky-950/40 to-slate-900 p-8">
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-full bg-sky-500/20 px-3 py-1 text-xs font-bold text-sky-400">
                #1 PICK
              </span>
              <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-medium text-green-400">
                Code-Based Scanner
              </span>
            </div>
            <h2 className="mb-4 text-2xl font-bold text-white">
              1. RatedWithAI — Best Code-Based Scanner for Shopify
            </h2>
            <p className="mb-6 text-slate-300 leading-relaxed">
              Unlike every other tool on this list, RatedWithAI doesn't add an overlay widget to your
              Shopify store. Instead, it scans your pages using the industry-standard{" "}
              <strong>axe-core engine</strong> (the same engine behind Deque's enterprise tools) and
              identifies the actual WCAG violations in your code — broken alt text, missing form labels,
              incorrect heading hierarchy, insufficient color contrast, and every other testable criterion.
            </p>
            <p className="mb-6 text-slate-300 leading-relaxed">
              This matters because courts and regulators don't accept overlay widgets as evidence of
              compliance. They want to see that you've fixed the underlying issues. RatedWithAI gives
              you a prioritized list of exactly what to fix, with code-level guidance on how to fix it.
            </p>

            <div className="grid gap-6 md:grid-cols-2 mb-6">
              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-green-400">
                  Strengths
                </h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-green-400">✓</span>
                    <span>Tests all 50 WCAG 2.1 AA success criteria</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-green-400">✓</span>
                    <span>Powered by axe-core — the industry standard engine</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-green-400">✓</span>
                    <span>Identifies exact code elements to fix with recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-green-400">✓</span>
                    <span>No JavaScript injection — zero impact on page speed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-green-400">✓</span>
                    <span>Works with any Shopify theme, including custom builds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-green-400">✓</span>
                    <span>Free tier scans your homepage — no signup required</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-red-400">
                  Limitations
                </h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-red-400">✗</span>
                    <span>Not a Shopify App Store app (external tool)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-red-400">✗</span>
                    <span>Doesn't auto-fix issues — you need to apply the fixes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-red-400">✗</span>
                    <span>Some WCAG criteria require manual testing (not automatable)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 mb-6">
              <h3 className="text-sm font-semibold text-white mb-2">Pricing</h3>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-bold text-sky-400">Free</p>
                  <p className="text-slate-400">1 page scan, instant results</p>
                </div>
                <div>
                  <p className="font-bold text-sky-400">$29/mo</p>
                  <p className="text-slate-400">Full site scanning, monitoring</p>
                </div>
                <div>
                  <p className="font-bold text-sky-400">$49/mo</p>
                  <p className="text-slate-400">Priority scanning, daily monitoring</p>
                </div>
              </div>
            </div>

            <Link
              href="/scan"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-8 py-3 text-sm font-bold text-white hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/20"
            >
              Scan Your Shopify Store Free →
            </Link>
          </div>
        </section>

        {/* ─── 2. Accessibly ─── */}
        <section id="accessibly" className="mb-16">
          <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-white">
            2. Accessibly — Best Budget Overlay Widget
            <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-medium text-amber-400">
              Overlay Widget
            </span>
          </h2>
          <p className="mb-4 text-slate-300 leading-relaxed">
            Accessibly is a Shopify App Store native widget that adds an accessibility toolbar to your
            store. It provides visual adjustments for text size, contrast, cursor size, and link highlighting,
            plus keyboard navigation shortcuts. With 4.4 stars from 23 reviews, it's one of the more
            established options in the Shopify app ecosystem.
          </p>
          <p className="mb-6 text-slate-300 leading-relaxed">
            The free tier offers basic visual adjustments, while paid plans ($19-49/month) unlock
            compliance monitoring and additional customization options. At this price point, it's the
            most affordable entry-level option for stores that want a visible accessibility commitment.
          </p>

          <div className="grid gap-6 md:grid-cols-2 mb-6">
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-green-400">
                Strengths
              </h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-green-400">✓</span>
                  <span>Native Shopify App Store installation — one click</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-green-400">✓</span>
                  <span>Affordable pricing ($19/mo for most features)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-green-400">✓</span>
                  <span>Free tier available for basic adjustments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-green-400">✓</span>
                  <span>ADA, EAA, and WCAG reference in compliance features</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-red-400">
                Limitations
              </h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-red-400">✗</span>
                  <span>Overlay approach — doesn't fix underlying code</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-red-400">✗</span>
                  <span>Won't protect against ADA lawsuits (overlay limitation)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-red-400">✗</span>
                  <span>Adds JavaScript that may impact Core Web Vitals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-red-400">✗</span>
                  <span>Custom themes may need additional tweaks</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
            <p className="text-sm text-slate-300">
              <strong className="text-white">Pricing:</strong> Free plan available.
              Basic: $19/mo · Pro: $29/mo · Enterprise: $49/mo
            </p>
          </div>
        </section>

        {/* ─── 3. All in One Accessibility ─── */}
        <section id="all-in-one" className="mb-16">
          <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-white">
            3. All in One Accessibility — Best Free Plan
            <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-medium text-amber-400">
              Overlay Widget
            </span>
          </h2>
          <p className="mb-4 text-slate-300 leading-relaxed">
            All in One Accessibility has earned a perfect 5.0-star rating from 61 reviews, making it the
            highest-rated accessibility app on the Shopify App Store. It offers a comprehensive toolbar with
            font adjustments, color contrast modes, cursor options, link highlighting, keyboard navigation,
            and content readability tools.
          </p>
          <p className="mb-6 text-slate-300 leading-relaxed">
            The free plan is surprisingly generous, offering core accessibility adjustments without
            time limits. Paid plans unlock additional customization, branding options, and multi-language
            support. It's the best choice for stores that want to start with zero cost.
          </p>

          <div className="grid gap-6 md:grid-cols-2 mb-6">
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-green-400">
                Strengths
              </h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-green-400">✓</span>
                  <span>Highest rated on Shopify App Store (5.0 ★)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-green-400">✓</span>
                  <span>Generous free plan with core features</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-green-400">✓</span>
                  <span>Covers visual, motor, and cognitive adjustments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-green-400">✓</span>
                  <span>Multi-language support on paid plans</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-red-400">
                Limitations
              </h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-red-400">✗</span>
                  <span>Overlay approach — doesn't fix source code issues</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-red-400">✗</span>
                  <span>Screen reader users report overlays often interfere</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-red-400">✗</span>
                  <span>Cannot address structural HTML issues (headings, landmarks)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
            <p className="text-sm text-slate-300">
              <strong className="text-white">Pricing:</strong> Free plan available.
              Starter: $19/mo · Pro: $29/mo · Enterprise: $49/mo
            </p>
          </div>
        </section>

        {/* ─── 4. accessWidget ─── */}
        <section id="accesswidget" className="mb-16">
          <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-white">
            4. accessWidget (accessiBe) — Most Popular Overlay
            <span className="rounded-full bg-red-500/20 px-3 py-1 text-xs font-medium text-red-400">
              ⚠️ Caution
            </span>
          </h2>
          <p className="mb-4 text-slate-300 leading-relaxed">
            accessWidget by accessiBe is the most well-known accessibility overlay in the market, backed
            by $58 million in venture funding and installed on 180,000+ websites. However, it comes with
            significant baggage: the FTC fined accessiBe{" "}
            <strong className="text-red-300">$1 million in January 2025</strong> for deceptively
            claiming their AI overlay could make websites WCAG-compliant. The FTC also found that accessiBe
            paid for fake "independent" reviews.
          </p>
          <p className="mb-6 text-slate-300 leading-relaxed">
            Despite these issues, accessWidget remains on the Shopify App Store. It's significantly more
            expensive than alternatives ($490-3,990/year) while providing the same fundamental limitation
            as every other overlay: it modifies the frontend without fixing your underlying code.
          </p>

          <div className="grid gap-6 md:grid-cols-2 mb-6">
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-green-400">
                Strengths
              </h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-green-400">✓</span>
                  <span>Most feature-rich overlay widget available</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-green-400">✓</span>
                  <span>Litigation support included on paid plans</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-green-400">✓</span>
                  <span>Monthly audit reports for documentation</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-red-400">
                Limitations
              </h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-red-400">✗</span>
                  <span>FTC fined $1M for deceptive compliance claims</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-red-400">✗</span>
                  <span>22.6% of ADA lawsuits in H1 2025 cited overlay widgets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-red-400">✗</span>
                  <span>Most expensive option — $490-3,990/year</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-red-400">✗</span>
                  <span>700+ accessibility professionals oppose overlays (Overlay Fact Sheet)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-red-400">✗</span>
                  <span>Screen reader users report interference, not help</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg border border-red-500/30 bg-red-500/5 p-4">
            <p className="text-sm text-slate-300">
              <strong className="text-red-300">Pricing:</strong> Standard: $490/yr ·
              Advanced: $1,490/yr · Advanced Plus: $3,490/yr.{" "}
              <span className="text-slate-400">
                At $490/yr minimum, accessWidget costs more than RatedWithAI's $29/mo plan ($348/yr)
                while providing less reliable compliance.
              </span>
            </p>
          </div>

          <p className="mt-4 text-sm text-slate-400">
            📖 Read our{" "}
            <Link href="/blog/accessibe-review" className="text-sky-400 hover:text-sky-300">
              full accessiBe review
            </Link>{" "}
            and{" "}
            <Link href="/blog/accessibe-alternative" className="text-sky-400 hover:text-sky-300">
              accessiBe alternatives comparison
            </Link>
            .
          </p>
        </section>

        {/* ─── 5. Accessibility Spark ─── */}
        <section id="accessibility-spark" className="mb-16">
          <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-white">
            5. Accessibility Spark — Best Automation Features
            <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-medium text-amber-400">
              Overlay Widget
            </span>
          </h2>
          <p className="mb-4 text-slate-300 leading-relaxed">
            Accessibility Spark positions itself as the most automated Shopify accessibility solution,
            using AI to scan and modify page elements. It supports ADA, WCAG 2.1, BFSG (Germany's
            accessibility law), and EAA compliance standards. With 37 reviews and 4.7 stars, it has
            a solid reputation on the App Store.
          </p>
          <p className="mb-6 text-slate-300 leading-relaxed">
            What sets Accessibility Spark apart from cheaper alternatives is its automatic scanning
            and modification features — it claims to proactively identify and adjust elements rather
            than waiting for user interaction. However, at $99.99/month, it's the most expensive
            monthly option and still carries the fundamental limitation of the overlay approach.
          </p>

          <div className="grid gap-6 md:grid-cols-2 mb-6">
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-green-400">
                Strengths
              </h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-green-400">✓</span>
                  <span>AI-powered automatic scanning and element modification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-green-400">✓</span>
                  <span>EAA and BFSG compliance features (EU/Germany)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-green-400">✓</span>
                  <span>Proactive element adjustments (not just toolbar)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-red-400">
                Limitations
              </h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-red-400">✗</span>
                  <span>Most expensive monthly option ($99.99/mo)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-red-400">✗</span>
                  <span>Still an overlay — modifications are surface-level</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-red-400">✗</span>
                  <span>"AI-powered fixes" can introduce unpredictable behavior</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
            <p className="text-sm text-slate-300">
              <strong className="text-white">Pricing:</strong> From $99.99/mo after a 5-day free trial.
              No free tier available.
            </p>
          </div>
        </section>

        {/* ─── 6. UserWay ─── */}
        <section id="userway" className="mb-16">
          <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-white">
            6. UserWay — Best for Multi-Store Brands
            <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-medium text-amber-400">
              Overlay Widget
            </span>
          </h2>
          <p className="mb-4 text-slate-300 leading-relaxed">
            UserWay is one of the largest accessibility overlay providers, used by enterprise brands
            and often mentioned alongside accessiBe. Their Shopify app integrates their AI-powered
            widget with features like font adjustments, contrast modes, text-to-speech, and keyboard
            navigation. With 68 reviews and a 4.8-star rating, it's well-regarded by Shopify merchants.
          </p>
          <p className="mb-6 text-slate-300 leading-relaxed">
            UserWay's main advantage is its enterprise scalability — if you run multiple Shopify stores
            or need to coordinate accessibility across a brand portfolio, their dashboard and multi-site
            management tools are more mature than smaller competitors. They also offer litigation support
            and compliance reporting.
          </p>

          <div className="grid gap-6 md:grid-cols-2 mb-6">
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-green-400">
                Strengths
              </h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-green-400">✓</span>
                  <span>Enterprise-grade multi-site management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-green-400">✓</span>
                  <span>Strong Shopify App Store rating (4.8 ★)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-green-400">✓</span>
                  <span>Litigation support and compliance documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-green-400">✓</span>
                  <span>Free widget tier for basic functionality</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-red-400">
                Limitations
              </h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-red-400">✗</span>
                  <span>Overlay approach — same fundamental limitation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-red-400">✗</span>
                  <span>Premium plans can be expensive for small stores</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-red-400">✗</span>
                  <span>Listed in the Overlay Fact Sheet alongside accessiBe</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
            <p className="text-sm text-slate-300">
              <strong className="text-white">Pricing:</strong> Free widget tier available.
              Paid plans from $49/mo for enhanced features and support.
            </p>
          </div>
        </section>

        {/* ─── 7. Dawn Theme (Manual) ─── */}
        <section id="dawn-manual" className="mb-16">
          <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-white">
            7. Manual Accessibility with Dawn Theme — Best Free Approach
            <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-medium text-green-400">
              Code-Based (DIY)
            </span>
          </h2>
          <p className="mb-4 text-slate-300 leading-relaxed">
            If you're technically inclined or have access to a developer, the most effective approach
            is choosing an accessible Shopify theme and manually fixing WCAG issues. Shopify's{" "}
            <strong>Dawn theme</strong> is built with semantic HTML, ARIA landmarks, and proper heading
            structure — giving you the strongest accessible foundation of any free Shopify theme.
          </p>
          <p className="mb-6 text-slate-300 leading-relaxed">
            This approach is the only way to achieve genuine WCAG compliance. No overlay can replace
            properly structured HTML, descriptive alt text, and correctly implemented form labels.
            The trade-off is time and expertise — you'll need to audit your store, identify the issues,
            and fix them in your theme's Liquid template code.
          </p>

          <div className="grid gap-6 md:grid-cols-2 mb-6">
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-green-400">
                Strengths
              </h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-green-400">✓</span>
                  <span>The ONLY approach that achieves genuine WCAG compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-green-400">✓</span>
                  <span>Zero additional cost (Dawn is free)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-green-400">✓</span>
                  <span>No JavaScript injection — best possible page speed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-green-400">✓</span>
                  <span>Courts recognize code-level fixes as good-faith compliance</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-red-400">
                Limitations
              </h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-red-400">✗</span>
                  <span>Requires technical knowledge (Liquid templates, HTML, ARIA)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-red-400">✗</span>
                  <span>Time-intensive — audit + fix can take weeks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-red-400">✗</span>
                  <span>Ongoing maintenance needed as you add products/pages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-red-400">✗</span>
                  <span>Need a scanning tool to identify issues first</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-4">
            <p className="text-sm text-slate-300">
              <strong className="text-green-300">Best practice:</strong> Use a code-based scanner like{" "}
              <Link href="/scan" className="text-sky-400 hover:text-sky-300">
                RatedWithAI
              </Link>{" "}
              to identify your issues, then fix them in your Dawn theme's Liquid code. This gives you
              the precision of automated detection with the permanence of code-level fixes.
            </p>
          </div>
        </section>

        {/* ─── Overlay vs Scanner ─── */}
        <section id="overlay-vs-scanner" className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-white">
            Overlay Widgets vs. Code-Based Scanners: The Critical Difference
          </h2>

          <p className="mb-6 text-slate-300 leading-relaxed">
            This is the single most important distinction when choosing a Shopify accessibility solution.
            Understanding it will save you money, protect your store from lawsuits, and actually help
            your disabled customers.
          </p>

          <div className="grid gap-6 md:grid-cols-2 mb-6">
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-6">
              <h3 className="mb-3 text-lg font-bold text-amber-400">🎨 Overlay Widgets</h3>
              <p className="mb-4 text-sm text-slate-300">
                Add a toolbar to your site that lets visitors adjust visual settings.
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>• Modify the <strong>presentation</strong> layer only</li>
                <li>• Address ~10-15% of WCAG criteria</li>
                <li>• Can't fix: missing alt text, broken headings, form labels, ARIA roles</li>
                <li>• Add JavaScript that slows your page (Core Web Vitals impact)</li>
                <li>• Screen reader users report overlays <em>hinder</em> navigation</li>
                <li>• 700+ accessibility pros signed the Overlay Fact Sheet opposing them</li>
                <li>• FTC has taken action against deceptive overlay claims</li>
              </ul>
            </div>
            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-6">
              <h3 className="mb-3 text-lg font-bold text-green-400">🔍 Code-Based Scanners</h3>
              <p className="mb-4 text-sm text-slate-300">
                Test your pages against WCAG criteria and identify code-level issues to fix.
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>• Identify issues in your <strong>source code</strong></li>
                <li>• Test all 50 WCAG 2.1 AA success criteria</li>
                <li>• Find: missing alt text, heading errors, form label issues, contrast failures</li>
                <li>• Zero impact on page speed (external scanning)</li>
                <li>• Fixes are permanent and improve the actual user experience</li>
                <li>• Recommended by W3C, WCAG authors, and accessibility experts</li>
                <li>• Courts recognize code fixes as genuine compliance efforts</li>
              </ul>
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-700 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700 bg-slate-900/80">
                  <th className="px-4 py-3 text-left text-slate-300">WCAG Category</th>
                  <th className="px-4 py-3 text-center text-slate-300">Overlay Can Fix?</th>
                  <th className="px-4 py-3 text-center text-slate-300">Scanner Detects?</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-700/50">
                  <td className="px-4 py-2">Image alt text</td>
                  <td className="px-4 py-2 text-center text-red-400">✗ No</td>
                  <td className="px-4 py-2 text-center text-green-400">✓ Yes</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="px-4 py-2">Heading hierarchy</td>
                  <td className="px-4 py-2 text-center text-red-400">✗ No</td>
                  <td className="px-4 py-2 text-center text-green-400">✓ Yes</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="px-4 py-2">Form labels</td>
                  <td className="px-4 py-2 text-center text-red-400">✗ No</td>
                  <td className="px-4 py-2 text-center text-green-400">✓ Yes</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="px-4 py-2">Color contrast</td>
                  <td className="px-4 py-2 text-center text-amber-400">⚠ Partial</td>
                  <td className="px-4 py-2 text-center text-green-400">✓ Yes</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="px-4 py-2">Keyboard navigation</td>
                  <td className="px-4 py-2 text-center text-amber-400">⚠ Partial</td>
                  <td className="px-4 py-2 text-center text-green-400">✓ Yes</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="px-4 py-2">ARIA roles & landmarks</td>
                  <td className="px-4 py-2 text-center text-red-400">✗ No</td>
                  <td className="px-4 py-2 text-center text-green-400">✓ Yes</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="px-4 py-2">Link text (descriptive)</td>
                  <td className="px-4 py-2 text-center text-red-400">✗ No</td>
                  <td className="px-4 py-2 text-center text-green-400">✓ Yes</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="px-4 py-2">Table structure</td>
                  <td className="px-4 py-2 text-center text-red-400">✗ No</td>
                  <td className="px-4 py-2 text-center text-green-400">✓ Yes</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="px-4 py-2">Text resizing</td>
                  <td className="px-4 py-2 text-center text-green-400">✓ Yes</td>
                  <td className="px-4 py-2 text-center text-slate-400">— N/A</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Focus indicators</td>
                  <td className="px-4 py-2 text-center text-amber-400">⚠ Partial</td>
                  <td className="px-4 py-2 text-center text-green-400">✓ Yes</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-xl border border-sky-500/30 bg-sky-500/5 p-6 text-center">
            <p className="text-slate-300 mb-4">
              <strong className="text-white">Our recommendation:</strong> Use a code-based scanner to find and
              fix your real issues. If you still want an overlay for user preference tools (font size, etc.),
              add a free-tier widget <em>after</em> your code is compliant — not instead of fixing your code.
            </p>
            <Link
              href="/scan"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-8 py-3 text-sm font-bold text-white hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/20"
            >
              Scan Your Shopify Store Free →
            </Link>
          </div>
        </section>

        {/* ─── Shopify-Specific Challenges ─── */}
        <section id="shopify-specific" className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-white">
            Shopify-Specific Accessibility Challenges
          </h2>
          <p className="mb-6 text-slate-300 leading-relaxed">
            Shopify stores face unique accessibility challenges that generic solutions often miss.
            Understanding these helps you choose the right tools and prioritize your fixes.
          </p>

          <div className="space-y-6">
            <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-6">
              <h3 className="mb-3 text-lg font-bold text-white">
                🛍️ Product Images Without Alt Text
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                The #1 accessibility issue on Shopify stores. Product images need descriptive alt text
                that includes the product name, color, material, and key visual features. "IMG_4532.jpg"
                tells a screen reader user nothing. Shopify lets you set alt text in the product editor,
                but most merchants skip this for hundreds of product images. A scanner can identify every
                image missing alt text so you can bulk-fix them.
              </p>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-6">
              <h3 className="mb-3 text-lg font-bold text-white">
                🎨 Theme Color Contrast Issues
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Many Shopify themes use trendy but inaccessible color schemes — light gray text on white
                backgrounds, low-contrast buttons, and placeholder text that fails WCAG 4.5:1 requirements.
                This is the most common WCAG violation on the web (81% of sites fail, per WebAIM).
                Use our{" "}
                <Link href="/tools/color-contrast-checker" className="text-sky-400 hover:text-sky-300">
                  free color contrast checker
                </Link>{" "}
                to test your theme's color combinations.
              </p>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-6">
              <h3 className="mb-3 text-lg font-bold text-white">
                📱 Dynamic Cart and Checkout Modals
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Shopify's dynamic cart drawers, quick-view modals, and checkout overlays are often
                keyboard traps — screen reader users can't close them, navigate through them, or
                understand their content. Focus management in modals is one of the hardest accessibility
                issues to fix, and most overlay widgets can't address it because it requires changes
                to the modal's JavaScript and ARIA attributes.
              </p>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-6">
              <h3 className="mb-3 text-lg font-bold text-white">
                🔤 Heading Structure in Product Pages
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Shopify themes frequently use headings for visual styling rather than document structure.
                A product page might jump from H1 (product name) to H4 (reviews section), skipping H2
                and H3. Screen reader users rely on heading hierarchy to navigate — broken headings
                make your store unusable for them. This is a theme-level issue that no overlay can fix.
              </p>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-6">
              <h3 className="mb-3 text-lg font-bold text-white">
                🔌 Third-Party App Accessibility
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Review widgets (Yotpo, Judge.me), email popups (Klaviyo), chat widgets (Tidio),
                and recommendation carousels inject their own HTML into your page. Many of these
                third-party elements are not accessible — and your store is responsible for all content
                on your pages, including third-party widgets. Scan your store <em>after</em> installing
                apps to catch the issues they introduce.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Legal Landscape ─── */}
        <section id="legal-landscape" className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-white">
            The 2026 Legal Landscape for Shopify Stores
          </h2>

          <p className="mb-6 text-slate-300 leading-relaxed">
            Multiple deadlines are converging in 2026, creating the most legally urgent environment
            for ecommerce accessibility in history. Here's what Shopify store owners need to know:
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4 rounded-lg border border-red-500/30 bg-red-500/5 p-5">
              <div className="rounded-full bg-red-500/20 px-3 py-1 text-xs font-bold text-red-400 whitespace-nowrap">
                Apr 24, 2026
              </div>
              <div>
                <h3 className="font-bold text-white">ADA Title II Deadline</h3>
                <p className="text-sm text-slate-400 mt-1">
                  All state and local government websites must meet WCAG 2.1 AA. While this
                  directly applies to government sites, courts are using the same standard for
                  commercial sites under Title III — making WCAG 2.1 AA the de facto legal
                  standard for all websites.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-lg border border-red-500/30 bg-red-500/5 p-5">
              <div className="rounded-full bg-red-500/20 px-3 py-1 text-xs font-bold text-red-400 whitespace-nowrap">
                May 11, 2026
              </div>
              <div>
                <h3 className="font-bold text-white">HHS Section 504 Deadline</h3>
                <p className="text-sm text-slate-400 mt-1">
                  Healthcare-related ecommerce (telehealth platforms, medical supply stores,
                  pharmacy delivery services on Shopify) must comply. Penalty: loss of
                  federal funding.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-lg border border-amber-500/30 bg-amber-500/5 p-5">
              <div className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-bold text-amber-400 whitespace-nowrap">
                Active Now
              </div>
              <div>
                <h3 className="font-bold text-white">European Accessibility Act (EAA)</h3>
                <p className="text-sm text-slate-400 mt-1">
                  Enforced since June 2025 across all EU member states. Any Shopify store
                  selling to EU customers must meet WCAG 2.1 AA. Fines vary by country.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-lg border border-amber-500/30 bg-amber-500/5 p-5">
              <div className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-bold text-amber-400 whitespace-nowrap">
                8,667+ lawsuits
              </div>
              <div>
                <h3 className="font-bold text-white">ADA Title III Lawsuits (2025)</h3>
                <p className="text-sm text-slate-400 mt-1">
                  Serial ADA litigants specifically target ecommerce sites. 77% of 2025 web
                  accessibility lawsuits targeted ecommerce. Average settlement: $25,000-75,000
                  plus legal fees and mandatory remediation.
                </p>
              </div>
            </div>
          </div>

          <p className="text-slate-300 leading-relaxed">
            📖 Learn more in our{" "}
            <Link href="/blog/ada-website-compliance-guide" className="text-sky-400 hover:text-sky-300">
              ADA Website Compliance Guide
            </Link>
            ,{" "}
            <Link href="/blog/healthcare-website-accessibility-may-2026" className="text-sky-400 hover:text-sky-300">
              Healthcare Accessibility Deadline Guide
            </Link>
            , and{" "}
            <Link href="/blog/european-accessibility-act-2025" className="text-sky-400 hover:text-sky-300">
              European Accessibility Act Overview
            </Link>
            .
          </p>
        </section>

        {/* ─── How to Choose ─── */}
        <section id="choosing" className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-white">
            How to Choose the Right Accessibility Solution
          </h2>

          <div className="space-y-4">
            <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-6">
              <h3 className="mb-2 text-lg font-bold text-sky-400">
                🏪 Small Shopify Store (under 50 products)
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                <strong>Recommended:</strong> Scan with RatedWithAI (free), fix the top issues
                manually, add alt text to all product images, and optionally add a free-tier overlay
                (All in One Accessibility) for user preference tools.{" "}
                <strong>Budget: $0-29/mo.</strong>
              </p>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-6">
              <h3 className="mb-2 text-lg font-bold text-sky-400">
                🏬 Medium Shopify Store (50-500 products)
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                <strong>Recommended:</strong> RatedWithAI Starter ($29/mo) for ongoing monitoring,
                hire a developer for a one-time WCAG audit ($500-2,000), and fix theme-level issues.
                Consider Dawn theme migration if your current theme has deep accessibility problems.{" "}
                <strong>Budget: $29-49/mo + one-time dev costs.</strong>
              </p>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-6">
              <h3 className="mb-2 text-lg font-bold text-sky-400">
                🏢 Large Shopify Plus Store (500+ products)
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                <strong>Recommended:</strong> RatedWithAI Pro ($49/mo) for daily monitoring plus
                a professional accessibility audit from a certified consultant ($2,000-10,000).
                Enterprise stores should also consider manual testing with real assistive technology
                users. Consider{" "}
                <Link href="https://saasintegrate.com" className="text-sky-400 hover:text-sky-300">
                  SaaSIntegrate
                </Link>{" "}
                for full-service accessibility consulting.{" "}
                <strong>Budget: $49/mo + audit costs.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* ─── Action Plan ─── */}
        <section id="action-plan" className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-white">
            5-Step Accessibility Action Plan for Shopify
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-xl border border-slate-700 bg-slate-900/80 p-6">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-400 font-bold">
                1
              </div>
              <div>
                <h3 className="font-bold text-white">Scan Your Store Today</h3>
                <p className="text-sm text-slate-400 mt-1">
                  Run a free{" "}
                  <Link href="/scan" className="text-sky-400 hover:text-sky-300">
                    RatedWithAI scan
                  </Link>{" "}
                  on your homepage. This gives you a baseline accessibility score and identifies
                  your most critical issues in under 60 seconds. No signup required.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-slate-700 bg-slate-900/80 p-6">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-400 font-bold">
                2
              </div>
              <div>
                <h3 className="font-bold text-white">Fix Critical Issues First</h3>
                <p className="text-sm text-slate-400 mt-1">
                  Start with high-impact, easy wins: add alt text to product images, fix color
                  contrast failures, ensure all forms have labels, and check that your heading
                  structure is logical. These alone address 60-70% of common WCAG violations.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-slate-700 bg-slate-900/80 p-6">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-400 font-bold">
                3
              </div>
              <div>
                <h3 className="font-bold text-white">Audit Your Theme</h3>
                <p className="text-sm text-slate-400 mt-1">
                  If your Shopify theme has deep structural issues (broken headings, no ARIA
                  landmarks, keyboard traps in menus), consider migrating to Dawn or hiring a
                  developer for a theme-level accessibility overhaul.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-slate-700 bg-slate-900/80 p-6">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-400 font-bold">
                4
              </div>
              <div>
                <h3 className="font-bold text-white">Check Third-Party Apps</h3>
                <p className="text-sm text-slate-400 mt-1">
                  Scan your store again after installing review widgets, popups, chat tools, and
                  other apps. Third-party elements often introduce new accessibility violations
                  that you're legally responsible for.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-slate-700 bg-slate-900/80 p-6">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-400 font-bold">
                5
              </div>
              <div>
                <h3 className="font-bold text-white">Monitor Continuously</h3>
                <p className="text-sm text-slate-400 mt-1">
                  Accessibility isn't a one-time fix. New products, theme updates, and app changes
                  can introduce new issues. Set up ongoing monitoring (RatedWithAI Starter at $29/mo)
                  to catch regressions before they become lawsuit risks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Final CTA ─── */}
        <div className="mb-16 rounded-2xl border border-sky-500/30 bg-gradient-to-br from-sky-950/50 to-slate-900 p-8 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Don't wait for a lawsuit. Scan your Shopify store now.
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-6">
            Most Shopify stores have 15-40 WCAG violations. Our scanner finds them in 60 seconds.
            Fix them before a serial litigant finds them first.
          </p>
          <Link
            href="/scan"
            className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-10 py-4 text-lg font-bold text-white hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/20"
          >
            Scan Your Store Free →
          </Link>
          <p className="mt-3 text-sm text-slate-400">
            No credit card. No signup. Results in 60 seconds.
          </p>
        </div>

        {/* ─── FAQ ─── */}
        <section id="faq" className="mb-16">
          <h2 className="mb-8 text-2xl font-bold text-white text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <div
                key={item.q}
                className="rounded-lg border border-slate-700 bg-slate-800/50 p-5"
              >
                <h3 className="font-semibold text-white">{item.q}</h3>
                <p className="mt-2 text-sm text-slate-400">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Links */}
        <div className="border-t border-slate-700 pt-8">
          <p className="text-sm text-slate-400">
            Related:{" "}
            <Link
              href="/blog/ada-website-compliance-guide"
              className="text-sky-400 hover:text-sky-300"
            >
              ADA Website Compliance Guide
            </Link>{" "}
            ·{" "}
            <Link
              href="/blog/accessibe-alternative"
              className="text-sky-400 hover:text-sky-300"
            >
              accessiBe Alternatives
            </Link>{" "}
            ·{" "}
            <Link
              href="/blog/accessibe-review"
              className="text-sky-400 hover:text-sky-300"
            >
              accessiBe Review
            </Link>{" "}
            ·{" "}
            <Link
              href="/tools/color-contrast-checker"
              className="text-sky-400 hover:text-sky-300"
            >
              Color Contrast Checker
            </Link>{" "}
            ·{" "}
            <Link
              href="/tools/free-accessibility-checker"
              className="text-sky-400 hover:text-sky-300"
            >
              Free Accessibility Checker
            </Link>{" "}
            ·{" "}
            <Link
              href="/blog/best-website-accessibility-checker-tools-2026"
              className="text-sky-400 hover:text-sky-300"
            >
              Best Accessibility Checker Tools
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
