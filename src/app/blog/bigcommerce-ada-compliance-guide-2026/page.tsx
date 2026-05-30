/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title:
    "BigCommerce ADA Compliance Guide 2026: Make Your Store WCAG Accessible | RatedWithAI",
  description:
    "Is your BigCommerce store ADA compliant? Learn how to fix WCAG accessibility issues on BigCommerce, avoid lawsuits, and what built-in features help — and where the gaps are.",
  openGraph: {
    title: "BigCommerce ADA Compliance Guide 2026",
    description:
      "BigCommerce has some accessibility-friendly defaults — but most stores have critical WCAG failures. How to audit, fix, and protect your BigCommerce store from ADA lawsuits in 2026.",
    type: "article",
    publishedTime: "2026-05-30T00:00:00.000Z",
    modifiedTime: "2026-05-30T00:00:00.000Z",
    authors: ["RatedWithAI Team"],
    url: "https://ratedwithai.com/blog/bigcommerce-ada-compliance-guide-2026",
  },
  keywords: [
    "bigcommerce ada compliance",
    "bigcommerce wcag",
    "bigcommerce accessibility",
    "bigcommerce ada accessibility",
    "bigcommerce wcag 2.1",
    "is bigcommerce ada compliant",
    "bigcommerce accessibility apps",
    "bigcommerce accessibility audit",
    "bigcommerce ada lawsuit",
    "make bigcommerce accessible",
    "bigcommerce accessibility guide 2026",
    "bigcommerce ecommerce accessibility",
    "wcag bigcommerce theme",
  ],
  alternates: {
    canonical:
      "https://ratedwithai.com/blog/bigcommerce-ada-compliance-guide-2026",
  },
};

export default function BigCommerceADACompliancePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "BigCommerce ADA Compliance Guide 2026: Make Your Store WCAG Accessible",
      description:
        "How to audit and fix ADA accessibility issues on BigCommerce stores in 2026, including WCAG requirements, common violations, theme considerations, and steps to reduce ADA lawsuit risk.",
      datePublished: "2026-05-30T00:00:00.000Z",
      dateModified: "2026-05-30T00:00:00.000Z",
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
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is BigCommerce ADA compliant by default?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "BigCommerce provides some accessibility-friendly defaults — its Cornerstone theme has been updated with keyboard navigation support and some ARIA attributes, and the checkout process has improved WCAG coverage. However, BigCommerce stores are not ADA compliant by default. Most stores have common WCAG failures in product images (missing alt text), navigation menus, form labels, and color contrast — all of which can be the basis of an ADA web accessibility lawsuit. Your specific theme, custom code, and third-party apps can introduce additional violations.",
          },
        },
        {
          "@type": "Question",
          name: "Can a BigCommerce store get sued for ADA violations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. BigCommerce stores are subject to the same ADA Title III requirements as any other e-commerce website. E-commerce is the most-sued industry category for ADA web accessibility claims. BigCommerce stores have been named in ADA demand letters and federal lawsuits, particularly large stores with significant customer bases. The platform you use does not determine your ADA compliance — the accessibility of your actual storefront does.",
          },
        },
        {
          "@type": "Question",
          name: "What are the most common WCAG violations on BigCommerce stores?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The most common WCAG violations on BigCommerce stores include: missing alt text on product images (WCAG 1.1.1), insufficient color contrast in themes (WCAG 1.4.3), unlabeled form fields in checkout and contact forms (WCAG 1.3.1), keyboard navigation issues in custom menus and sliders (WCAG 2.1.1), missing focus indicators on interactive elements (WCAG 2.4.7), and inaccessible modal dialogs in app-injected widgets (WCAG 4.1.2).",
          },
        },
        {
          "@type": "Question",
          name: "Does BigCommerce's Cornerstone theme meet WCAG 2.1 AA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "BigCommerce's Cornerstone theme has been progressively improved for accessibility and meets many WCAG 2.1 AA requirements at the theme level — particularly for core navigation, checkout flow, and form controls. However, Cornerstone does not guarantee full WCAG 2.1 AA compliance for your store because: (1) product content added by merchants (images, descriptions, videos) can introduce violations; (2) apps and widgets installed from the marketplace may inject inaccessible code; (3) custom theme modifications can break existing accessibility features. You need to audit your specific store instance, not just the base theme.",
          },
        },
        {
          "@type": "Question",
          name: "Should I install an accessibility overlay widget on my BigCommerce store?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Overlay widgets like accessiBe or UserWay are not recommended for BigCommerce stores. accessiBe was fined $1 million by the FTC in 2025 for deceptive WCAG compliance claims. More importantly, data from ADA lawsuit trackers shows 22% of ADA web suits target sites with overlay widgets installed — plaintiff attorneys specifically look for overlay scripts via BuiltWith. The underlying WCAG violations in your BigCommerce store remain even with an overlay installed. The better approach is to identify and fix your actual violations using a code-level scanner.",
          },
        },
      ],
    },
  ];

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
              CMS Accessibility Guide
            </p>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              BigCommerce ADA Compliance Guide 2026
            </h1>
            <p className="mt-2 text-lg text-amber-400 font-medium">
              BigCommerce has accessibility-friendly defaults — but your store probably still has critical WCAG failures.
            </p>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              E-commerce is the{" "}
              <strong className="text-white">most-sued industry</strong> for ADA web accessibility violations, and BigCommerce stores are no exception. The platform provides some solid accessibility foundations — particularly in its Cornerstone theme and checkout flow — but product content, custom themes, third-party apps, and merchant-added code regularly introduce WCAG violations that form the basis of ADA demand letters. This guide covers exactly what BigCommerce merchants need to know and do in 2026.
            </p>
          </section>
        </div>

        <article className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-20">
          <div className="prose prose-invert prose-slate max-w-none">

            {/* Quick Summary */}
            <div className="bg-slate-900/60 border border-slate-700 rounded-xl p-6 mb-10">
              <h2 className="text-xl font-bold text-white mt-0 mb-4">⚡ BigCommerce ADA Compliance: Quick Summary</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-950/30 border border-green-800/40 rounded-lg p-4">
                  <p className="text-green-400 font-semibold text-sm mt-0 mb-2">✅ What BigCommerce Does Well</p>
                  <ul className="text-slate-300 text-xs space-y-1 mb-0 pl-3">
                    <li>Cornerstone theme keyboard nav</li>
                    <li>Accessible checkout flow</li>
                    <li>ARIA landmarks in default theme</li>
                    <li>Skip navigation link</li>
                    <li>Accessible form labels on standard fields</li>
                  </ul>
                </div>
                <div className="bg-red-950/30 border border-red-800/40 rounded-lg p-4">
                  <p className="text-red-400 font-semibold text-sm mt-0 mb-2">❌ Common Gaps</p>
                  <ul className="text-slate-300 text-xs space-y-1 mb-0 pl-3">
                    <li>Product image alt text (merchant-added)</li>
                    <li>Color contrast in third-party themes</li>
                    <li>App-injected widget accessibility</li>
                    <li>Custom JavaScript components</li>
                    <li>Video content captions</li>
                  </ul>
                </div>
                <div className="bg-blue-950/30 border border-blue-800/40 rounded-lg p-4">
                  <p className="text-blue-400 font-semibold text-sm mt-0 mb-2">🎯 Your Action</p>
                  <ul className="text-slate-300 text-xs space-y-1 mb-0 pl-3">
                    <li>Audit your live store (not just the theme)</li>
                    <li>Fix product image alt text</li>
                    <li>Test installed apps for violations</li>
                    <li>Publish an accessibility statement</li>
                    <li>Monitor continuously</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* TOC */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 mb-12">
              <h2 className="text-xl font-bold text-white mt-0 mb-4">What We'll Cover</h2>
              <ul className="text-slate-300 space-y-2 mb-0 list-none pl-0">
                <li><a href="#bigcommerce-default" className="text-blue-400 hover:text-blue-300">→ What BigCommerce provides out of the box</a></li>
                <li><a href="#common-violations" className="text-blue-400 hover:text-blue-300">→ Most common WCAG violations on BigCommerce stores</a></li>
                <li><a href="#themes" className="text-blue-400 hover:text-blue-300">→ Accessibility and BigCommerce themes</a></li>
                <li><a href="#apps" className="text-blue-400 hover:text-blue-300">→ The app marketplace problem</a></li>
                <li><a href="#audit" className="text-blue-400 hover:text-blue-300">→ How to audit your BigCommerce store</a></li>
                <li><a href="#fixes" className="text-blue-400 hover:text-blue-300">→ Step-by-step fixes for common issues</a></li>
                <li><a href="#lawsuit-risk" className="text-blue-400 hover:text-blue-300">→ ADA lawsuit risk for BigCommerce stores</a></li>
                <li><a href="#faq" className="text-blue-400 hover:text-blue-300">→ FAQ</a></li>
              </ul>
            </div>

            {/* BigCommerce Default */}
            <h2 id="bigcommerce-default" className="text-3xl font-bold text-white mt-12 mb-6">
              What BigCommerce Provides Out of the Box
            </h2>

            <p className="text-slate-300 leading-relaxed text-lg mb-6">
              BigCommerce has made meaningful investments in accessibility over the past several years. Compared to many e-commerce platforms, its default Cornerstone theme has better out-of-the-box WCAG coverage than most custom-built storefronts. Here's an honest breakdown of what you get:
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5">
                <h3 className="text-white font-semibold text-base mt-0 mb-2">Cornerstone Theme Accessibility Features</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-slate-300 text-sm space-y-2 mb-0 pl-4">
                    <li><strong className="text-green-400">✅</strong> Skip navigation link ("Skip to main content")</li>
                    <li><strong className="text-green-400">✅</strong> Keyboard-navigable main menu</li>
                    <li><strong className="text-green-400">✅</strong> Visible focus indicators on links and buttons</li>
                    <li><strong className="text-green-400">✅</strong> Semantic HTML landmarks (main, nav, footer)</li>
                    <li><strong className="text-green-400">✅</strong> Form labels on standard checkout fields</li>
                  </ul>
                  <ul className="text-slate-300 text-sm space-y-2 mb-0 pl-4">
                    <li><strong className="text-green-400">✅</strong> ARIA attributes on interactive widgets</li>
                    <li><strong className="text-green-400">✅</strong> Accessible cart drawer behavior</li>
                    <li><strong className="text-green-400">✅</strong> Screen reader announcements on cart updates</li>
                    <li><strong className="text-amber-400">⚠️</strong> Color contrast varies by theme variant</li>
                    <li><strong className="text-red-400">❌</strong> No alt text enforcement on merchant-added images</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-amber-950/20 border border-amber-800/30 rounded-xl p-5 mb-8">
              <p className="text-amber-300 font-semibold text-base mt-0 mb-2">⚠️ The Key Distinction: Theme vs. Store</p>
              <p className="text-slate-300 text-sm mb-0">
                BigCommerce's accessibility improvements apply to the <em>theme framework</em>. Your actual store includes everything you've added: product images (with or without alt text), custom page content, installed apps, third-party widgets, and any theme customizations. These additions are where most BigCommerce WCAG violations originate. You need to audit your live store, not just the Cornerstone demo.
              </p>
            </div>

            {/* Common Violations */}
            <h2 id="common-violations" className="text-3xl font-bold text-white mt-12 mb-6">
              Most Common WCAG Violations on BigCommerce Stores
            </h2>

            <div className="space-y-4 mb-10">
              {[
                {
                  rank: "1",
                  title: "Missing or Generic Alt Text on Product Images",
                  wcag: "WCAG 1.1.1 (Level A)",
                  detail: "This is the #1 violation in BigCommerce stores. BigCommerce allows merchants to add alt text to product images but doesn't require it. Many stores have hundreds of products with blank alt text, generic filename-based alt text (product-img-001.jpg), or alt text that's just the product name without description. Each image is a potential lawsuit trigger.",
                  severity: "Critical",
                },
                {
                  rank: "2",
                  title: "Insufficient Color Contrast",
                  wcag: "WCAG 1.4.3 (Level AA)",
                  detail: "BigCommerce's default themes have configurable colors — and many merchants choose color schemes that fail the 4.5:1 contrast ratio requirement. Sale price tags in red or green on white, light gray body text, and promotional banners with insufficient contrast are frequent offenders. Third-party marketplace themes often perform worse than Cornerstone.",
                  severity: "High",
                },
                {
                  rank: "3",
                  title: "Inaccessible App-Injected Widgets",
                  wcag: "WCAG 4.1.2, 2.1.1 (Level A)",
                  detail: "Review widgets (Yotpo, Trustpilot), popup/chat tools (Intercom, Klaviyo popups), size guides, and loyalty program widgets frequently inject inaccessible code. These apps have their own accessibility quality — and many don't meet WCAG standards. Installing them on your BigCommerce store creates violations beyond the platform's control.",
                  severity: "High",
                },
                {
                  rank: "4",
                  title: "Keyboard Traps in Custom Sliders and Carousels",
                  wcag: "WCAG 2.1.2 (Level A)",
                  detail: "Custom homepage carousels, product image sliders, and promotional banners often use JavaScript libraries (Slick, Swiper) that have known keyboard accessibility issues. Users navigating by keyboard can get trapped inside the slider or lose focus entirely when the slide changes.",
                  severity: "High",
                },
                {
                  rank: "5",
                  title: "Videos Without Captions or Audio Descriptions",
                  wcag: "WCAG 1.2.2, 1.2.5 (Level A/AA)",
                  detail: "Product demo videos, brand story videos, and social-imported video content frequently lack closed captions. Auto-generated captions (YouTube, Instagram) don't meet WCAG accuracy standards. Any video with dialogue or meaningful audio must have accurate synchronized captions.",
                  severity: "Medium",
                },
                {
                  rank: "6",
                  title: "Missing Accessible Error Messages",
                  wcag: "WCAG 3.3.1, 3.3.2 (Level A)",
                  detail: "Form validation errors that only appear visually (color change, icon) without text announcements, or error messages not programmatically associated with their fields, fail WCAG. This affects custom contact forms, newsletter signups, and any checkout customizations.",
                  severity: "Medium",
                },
              ].map((item) => (
                <div key={item.rank} className="bg-slate-900/50 border border-slate-800 rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${item.severity === "Critical" ? "bg-red-950/60 text-red-400 border border-red-800/40" : item.severity === "High" ? "bg-amber-950/60 text-amber-400 border border-amber-800/40" : "bg-blue-950/60 text-blue-400 border border-blue-800/40"}`}>
                      {item.rank}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-white font-semibold text-base mt-0 mb-0">{item.title}</h3>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded ${item.severity === "Critical" ? "bg-red-950/40 text-red-400 border border-red-800/30" : item.severity === "High" ? "bg-amber-950/40 text-amber-400 border border-amber-800/30" : "bg-blue-950/40 text-blue-400 border border-blue-800/30"}`}>
                          {item.severity}
                        </span>
                      </div>
                      <p className="text-blue-400 text-xs font-mono mb-2">{item.wcag}</p>
                      <p className="text-slate-300 text-sm mb-0">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Themes */}
            <h2 id="themes" className="text-3xl font-bold text-white mt-12 mb-6">
              Accessibility and BigCommerce Themes
            </h2>

            <p className="text-slate-300 leading-relaxed text-lg mb-6">
              Your theme choice has a significant impact on your BigCommerce store's baseline accessibility. Here's the breakdown:
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5">
                <h3 className="text-lg font-bold text-green-400 mt-0 mb-3">Cornerstone (BigCommerce Default) — Best Accessibility</h3>
                <p className="text-slate-300 text-sm mb-3">
                  Cornerstone is the most accessibility-tested theme BigCommerce offers. It has keyboard navigation support, ARIA attributes, semantic HTML structure, visible focus indicators, and an accessible checkout. If you're selecting a theme and accessibility matters, Cornerstone is the right choice. BigCommerce updates it regularly with accessibility improvements.
                </p>
                <p className="text-slate-300 text-sm mb-0">
                  <strong className="text-amber-400">Caveat:</strong> Cornerstone's color variants have different contrast levels. The "Light" variant has better contrast than some darker variants. Always run a contrast check on your chosen color scheme.
                </p>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5">
                <h3 className="text-lg font-bold text-amber-400 mt-0 mb-3">Third-Party Marketplace Themes — Variable Quality</h3>
                <p className="text-slate-300 text-sm mb-0">
                  Themes from the BigCommerce Theme Marketplace (purchased from third-party developers) have highly variable accessibility quality. Many prioritize visual aesthetics over WCAG compliance. Before purchasing a third-party theme, test it with a screen reader or accessibility scanner on the demo. Check if the theme developer lists WCAG compliance in their documentation — few do. Plan to budget for accessibility remediation work when using any non-Cornerstone theme.
                </p>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5">
                <h3 className="text-lg font-bold text-red-400 mt-0 mb-3">Fully Custom Themes — Highest Risk</h3>
                <p className="text-slate-300 text-sm mb-0">
                  Custom-designed BigCommerce themes built from scratch or heavily modified from Cornerstone carry the highest accessibility risk. Custom development often introduces WCAG violations — especially in custom navigation, interactive components, and JavaScript-driven features — unless accessibility is explicitly part of the development specification. If you have a custom theme, a full accessibility audit is essential.
                </p>
              </div>
            </div>

            {/* Apps */}
            <h2 id="apps" className="text-3xl font-bold text-white mt-12 mb-6">
              The App Marketplace Problem
            </h2>

            <p className="text-slate-300 leading-relaxed text-lg mb-6">
              One of the most common sources of WCAG violations on well-maintained BigCommerce stores is the app ecosystem. Apps injecting JavaScript and modifying the DOM can introduce accessibility issues that bypass your theme's existing accessibility work.
            </p>

            <div className="bg-red-950/20 border border-red-800/30 rounded-xl p-5 mb-8">
              <h3 className="text-red-300 font-semibold text-base mt-0 mb-3">High-Risk App Categories to Audit</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="text-slate-300 text-sm space-y-2 mb-0 pl-4">
                  <li><strong className="text-white">Review widgets</strong> (Yotpo, Okendo, Trustpilot) — modal dialogs, rating inputs</li>
                  <li><strong className="text-white">Chat widgets</strong> (Intercom, Zendesk, Gorgias) — focus management, keyboard access</li>
                  <li><strong className="text-white">Popup/email capture</strong> (Klaviyo, Justuno) — focus trapping, ESC key behavior</li>
                  <li><strong className="text-white">Loyalty programs</strong> (Smile.io, LoyaltyLion) — widget overlay behavior</li>
                </ul>
                <ul className="text-slate-300 text-sm space-y-2 mb-0 pl-4">
                  <li><strong className="text-white">Product personalizers</strong> (custom text/image uploaders) — form accessibility</li>
                  <li><strong className="text-white">Size guides / fit finders</strong> — modal dialogs and interactive flows</li>
                  <li><strong className="text-white">Video players</strong> (embedded Vimeo/YouTube) — caption requirements</li>
                  <li><strong className="text-white">Social proof widgets</strong> (recent purchases, visitor counts) — moving content</li>
                </ul>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed text-lg mb-6">
              BigCommerce does not audit third-party apps for WCAG compliance before listing them in the marketplace. You are responsible for testing any app you install against your WCAG requirements. The practical approach: after installing any new app, run an accessibility scan to identify any new violations the app has introduced.
            </p>

            {/* Audit */}
            <h2 id="audit" className="text-3xl font-bold text-white mt-12 mb-6">
              How to Audit Your BigCommerce Store
            </h2>

            <div className="space-y-4 mb-8">
              {[
                {
                  step: "1",
                  title: "Automated Scan (Start Here)",
                  detail: "Run your live store URL through an automated accessibility scanner. RatedWithAI ($29/mo) uses the axe-core engine — the same used by Microsoft and the US government — to scan your rendered HTML and return prioritized WCAG violations. This catches ~50% of all WCAG issues and is the fastest way to identify your most critical problems. Start with your homepage, a category page, a product page, and your checkout flow.",
                },
                {
                  step: "2",
                  title: "Manual Keyboard Navigation Test",
                  detail: "Tab through every page using only your keyboard (no mouse). You should be able to reach every interactive element, and focus should be clearly visible at all times. Test your navigation menu, product carousels, add-to-cart buttons, size selectors, and checkout forms. If focus disappears or you get stuck, you have a keyboard accessibility violation.",
                },
                {
                  step: "3",
                  title: "Screen Reader Test",
                  detail: "Test your store with NVDA (free, Windows) or VoiceOver (built into Mac and iOS). Navigate to a product page and listen to how product images are announced. Check that form fields have meaningful labels. Verify that error messages are announced when you submit a form incorrectly.",
                },
                {
                  step: "4",
                  title: "Color Contrast Check",
                  detail: "Use the WebAIM Color Contrast Checker or your browser DevTools to verify that your text colors meet the 4.5:1 contrast ratio requirement against their backgrounds. Pay special attention to sale prices, button text, navigation links, and any text over images.",
                },
                {
                  step: "5",
                  title: "Product Image Alt Text Audit",
                  detail: "In your BigCommerce Admin, navigate to Products and sort by any filter. Go through your product catalog and verify that every product image has descriptive alt text — not just the product name, but a description of what's visible in the image. For large catalogs, this can be the most time-consuming but highest-impact fix.",
                },
              ].map((item) => (
                <div key={item.step} className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-950/60 border border-blue-800/40 text-blue-400 text-sm font-bold flex items-center justify-center">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base mt-0 mb-2">{item.title}</h3>
                    <p className="text-slate-300 text-sm mb-0">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Fixes */}
            <h2 id="fixes" className="text-3xl font-bold text-white mt-12 mb-6">
              Step-by-Step Fixes for Common BigCommerce Issues
            </h2>

            <div className="space-y-6 mb-10">
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5">
                <h3 className="text-white font-semibold text-lg mt-0 mb-3">Fix 1: Add Alt Text to Product Images</h3>
                <ol className="text-slate-300 text-sm space-y-2 mb-0 pl-4">
                  <li>Go to <strong className="text-white">Products → All Products</strong> in your BigCommerce Admin</li>
                  <li>Open each product and scroll to the <strong className="text-white">Images</strong> section</li>
                  <li>Click on each image thumbnail — an alt text field appears below</li>
                  <li>Write descriptive alt text: not just "Blue shirt" but "Blue cotton button-down shirt with white collar, front view"</li>
                  <li>For decorative images (background textures, dividers), enter an empty alt attribute by leaving the field blank</li>
                  <li>For large catalogs, use BigCommerce's CSV export to bulk-update alt text in a spreadsheet</li>
                </ol>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5">
                <h3 className="text-white font-semibold text-lg mt-0 mb-3">Fix 2: Improve Color Contrast in Your Theme</h3>
                <ol className="text-slate-300 text-sm space-y-2 mb-0 pl-4">
                  <li>Go to <strong className="text-white">Storefront → My Themes → Customize</strong></li>
                  <li>Use the Style editor to locate color settings for body text, link colors, button text, and backgrounds</li>
                  <li>Check each combination at the WebAIM Contrast Checker — text needs 4.5:1, large text 3:1</li>
                  <li>Common fix: darken body text from #888 gray to #595959 or darker for sufficient contrast on white</li>
                  <li>For sale price tags and promotional callouts, ensure the text color meets 4.5:1 against its background</li>
                  <li>Publish changes and re-check with the scanner</li>
                </ol>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5">
                <h3 className="text-white font-semibold text-lg mt-0 mb-3">Fix 3: Add an Accessibility Statement</h3>
                <ol className="text-slate-300 text-sm space-y-2 mb-0 pl-4">
                  <li>Go to <strong className="text-white">Storefront → Web Pages → Create a Web Page</strong></li>
                  <li>Create a page at /accessibility (or /ada-accessibility)</li>
                  <li>State your commitment to WCAG 2.1 AA, your current compliance status, and a feedback contact</li>
                  <li>Include an email address or form where visitors can report accessibility barriers</li>
                  <li>Add a link to this page in your footer — visible on every page</li>
                  <li>Courts and plaintiff attorneys view an accessibility statement with a feedback mechanism as evidence of good-faith compliance effort</li>
                </ol>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5">
                <h3 className="text-white font-semibold text-lg mt-0 mb-3">Fix 4: Test and Remediate Installed Apps</h3>
                <ol className="text-slate-300 text-sm space-y-2 mb-0 pl-4">
                  <li>Run an accessibility scan on your live store with all apps active (the normal live state)</li>
                  <li>Then temporarily disable non-essential apps one at a time and re-scan</li>
                  <li>When violations disappear after disabling an app, that app is the source</li>
                  <li>Contact the app developer with your specific WCAG violations — reputable vendors will work to fix them</li>
                  <li>If the developer won't fix it, evaluate whether the app's business value outweighs the accessibility risk</li>
                </ol>
              </div>
            </div>

            {/* Lawsuit Risk */}
            <h2 id="lawsuit-risk" className="text-3xl font-bold text-white mt-12 mb-6">
              ADA Lawsuit Risk for BigCommerce Stores
            </h2>

            <p className="text-slate-300 leading-relaxed text-lg mb-6">
              E-commerce is consistently the #1 industry category for ADA web accessibility lawsuits nationally. BigCommerce powers a significant portion of mid-market e-commerce — exactly the revenue profile that plaintiff attorneys target. Large Shopify stores get the most lawsuits, but BigCommerce stores are not immune.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-red-950/30 border border-red-800/40 rounded-xl p-5">
                <h3 className="text-base font-semibold text-red-400 mt-0 mb-3">Higher Risk Indicators</h3>
                <ul className="text-slate-300 text-sm space-y-2 mb-0 pl-4">
                  <li>Over $1M annual revenue / significant web traffic</li>
                  <li>Large product catalog with few alt text entries</li>
                  <li>Third-party theme (not Cornerstone)</li>
                  <li>Many installed apps including overlays, popups, widgets</li>
                  <li>No accessibility statement on the site</li>
                  <li>Any overlay widget installed (signals to plaintiff attorneys)</li>
                </ul>
              </div>
              <div className="bg-green-950/30 border border-green-800/40 rounded-xl p-5">
                <h3 className="text-base font-semibold text-green-400 mt-0 mb-3">Lower Risk Indicators</h3>
                <ul className="text-slate-300 text-sm space-y-2 mb-0 pl-4">
                  <li>Using Cornerstone with accessible color settings</li>
                  <li>All product images have descriptive alt text</li>
                  <li>Accessibility statement published with feedback contact</li>
                  <li>Regular accessibility audits documented</li>
                  <li>WCAG violations identified and remediated</li>
                  <li>No overlay widgets (less visible to plaintiff attorneys via BuiltWith)</li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-blue-950/50 to-purple-950/50 border border-blue-800/40 rounded-2xl p-8 mb-12 text-center">
              <h2 className="text-2xl font-bold text-white mt-0 mb-3">
                Scan your BigCommerce store right now
              </h2>
              <p className="text-slate-300 text-base mb-6 max-w-lg mx-auto">
                Get a free WCAG accessibility report for your BigCommerce store. Powered by axe-core. See exactly which violations you have and how to fix them.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/check"
                  className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors no-underline text-base"
                >
                  Run Free Scan
                </Link>
                <Link
                  href="/pricing"
                  className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors no-underline text-base"
                >
                  View Pricing ($29/mo)
                </Link>
              </div>
            </div>

            {/* FAQ */}
            <h2 id="faq" className="text-3xl font-bold text-white mt-12 mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6 mb-12">
              {[
                {
                  q: "Is BigCommerce ADA compliant out of the box?",
                  a: "No. BigCommerce's Cornerstone theme has better accessibility defaults than many e-commerce platforms, but your live store is not ADA compliant by default. Product images require merchant-added alt text. Your theme's color settings may not meet WCAG contrast requirements. Installed apps can inject inaccessible code. Any custom theme modifications can break existing accessibility features. You need to audit your specific store instance to know your actual compliance status."
                },
                {
                  q: "Can BigCommerce stores be sued for ADA violations?",
                  a: "Yes. BigCommerce stores are subject to ADA Title III requirements — the same as any public-facing e-commerce website. E-commerce is the most-sued industry category for ADA web accessibility claims nationally. The platform you use doesn't determine your ADA compliance risk — the actual accessibility of your storefront does. BigCommerce stores at mid-market revenue levels are increasingly targeted by plaintiff attorneys."
                },
                {
                  q: "What is the best accessible BigCommerce theme?",
                  a: "BigCommerce's own Cornerstone theme is the most accessibility-tested option available. It has keyboard navigation support, semantic HTML, ARIA attributes, and an accessible checkout. If you're choosing between Cornerstone and a third-party theme, Cornerstone has better baseline accessibility. For any theme — including Cornerstone — you'll need to verify your specific color configuration meets WCAG contrast requirements and audit your live store after installing apps."
                },
                {
                  q: "Should I install an accessibility overlay widget on my BigCommerce store?",
                  a: "No. Overlay widgets (accessiBe, UserWay, EqualWeb) are not recommended. accessiBe was fined $1 million by the FTC for deceptive WCAG compliance claims. More importantly, data shows that 22% of ADA web suits target sites with overlay widgets installed — plaintiff attorneys search for overlay scripts via BuiltWith and then test the underlying code. The WCAG violations in your BigCommerce store remain with an overlay installed. Use a code-level scanner to identify and fix actual violations instead."
                },
                {
                  q: "How long does it take to make a BigCommerce store WCAG compliant?",
                  a: "Timeline depends on your store size and violation count. For a typical BigCommerce store with 100–500 products: auditing takes 1–2 days; fixing high-priority violations (alt text, contrast, keyboard nav) takes 2–5 days of developer time; fixing all WCAG 2.1 AA violations typically takes 1–3 weeks. Ongoing compliance monitoring takes a few hours per month. The largest time investment is usually bulk-updating alt text for large product catalogs — which can be streamlined with BigCommerce's CSV bulk edit functionality."
                },
              ].map((item, i) => (
                <div key={i} className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
                  <h3 className="text-base font-semibold text-white mt-0 mb-3">{item.q}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-0">{item.a}</p>
                </div>
              ))}
            </div>

            {/* Related */}
            <div className="border-t border-slate-800 pt-10">
              <h2 className="text-2xl font-bold text-white mt-0 mb-6">Related Guides</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    title: "Shopify ADA Compliance Guide 2026",
                    desc: "How to fix accessibility issues on your Shopify store",
                    href: "/blog/shopify-ada-compliance-guide-2026",
                  },
                  {
                    title: "ADA Website Lawsuit Protection",
                    desc: "Practical steps to reduce your e-commerce lawsuit exposure",
                    href: "/blog/ada-website-lawsuit-protection",
                  },
                  {
                    title: "Top 10 WCAG Failures",
                    desc: "The most common accessibility violations and how to fix them",
                    href: "/blog/top-10-wcag-failures",
                  },
                ].map((post, i) => (
                  <Link
                    key={i}
                    href={post.href}
                    className="block bg-slate-900/40 border border-slate-800 hover:border-slate-600 rounded-xl p-5 no-underline transition-colors group"
                  >
                    <h3 className="text-white font-semibold text-base mt-0 mb-2 group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-0">{post.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}
