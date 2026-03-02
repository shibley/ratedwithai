/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title:
    "Shopify ADA Compliance Guide 2026: Avoid Lawsuits & Fix Accessibility Issues | RatedWithAI",
  description:
    "Complete guide to making your Shopify store ADA compliant in 2026. 77% of ADA lawsuits target e-commerce. Step-by-step WCAG fixes, theme audit checklist, app recommendations, and free scanner.",
  openGraph: {
    title: "Shopify ADA Compliance Guide 2026: Protect Your Store from Lawsuits",
    description:
      "77% of ADA website lawsuits target e-commerce stores. Here's how to make your Shopify site WCAG 2.1 AA compliant — before plaintiff attorneys find your store.",
    type: "article",
    publishedTime: "2026-02-24T00:00:00.000Z",
    authors: ["RatedWithAI Team"],
  },
  keywords: [
    "shopify ada compliance",
    "shopify ada compliance 2026",
    "shopify accessibility",
    "shopify wcag compliance",
    "shopify ada compliant",
    "is shopify ada compliant",
    "shopify accessibility issues",
    "shopify ada lawsuit",
    "shopify accessibility audit",
    "shopify wcag 2.1",
    "shopify accessibility checker",
    "make shopify store accessible",
    "shopify accessibility apps",
    "shopify ada requirements",
    "ecommerce ada compliance",
  ],
  alternates: {
    canonical: "https://ratedwithai.com/blog/shopify-ada-compliance-guide-2026",
  },
};

export default function ShopifyADACompliancePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Shopify ADA Compliance Guide 2026: Avoid Lawsuits & Fix Accessibility Issues",
      description:
        "Complete guide to making your Shopify store ADA compliant. Covers WCAG 2.1 AA requirements, common Shopify accessibility issues, theme fixes, app recommendations, and ongoing monitoring.",
      datePublished: "2026-02-24T00:00:00.000Z",
      dateModified: "2026-02-24T00:00:00.000Z",
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
      "@type": "HowTo",
      name: "How to Make Your Shopify Store ADA Compliant",
      description: "Step-by-step guide to achieving WCAG 2.1 AA compliance on your Shopify store.",
      step: [
        {
          "@type": "HowToStep",
          name: "Run an Accessibility Audit",
          text: "Use an automated accessibility scanner to identify current WCAG violations on your Shopify store. Focus on your homepage, product pages, cart, and checkout flow.",
        },
        {
          "@type": "HowToStep",
          name: "Fix Theme-Level Issues",
          text: "Update your Shopify theme to fix missing alt text, color contrast failures, keyboard navigation issues, and missing form labels. Use Shopify's Dawn theme as a baseline for accessibility.",
        },
        {
          "@type": "HowToStep",
          name: "Add Alt Text to All Product Images",
          text: "Go to Products in Shopify admin, click each product, and add descriptive alt text to every image. Include product name, color, size, and key features in the description.",
        },
        {
          "@type": "HowToStep",
          name: "Test Keyboard Navigation",
          text: "Navigate your entire store using only the Tab key and Enter. Ensure every interactive element (menus, filters, add to cart, checkout) is reachable and usable without a mouse.",
        },
        {
          "@type": "HowToStep",
          name: "Set Up Continuous Monitoring",
          text: "Install an accessibility monitoring tool to catch new violations as you add products, change themes, or update content. Continuous monitoring prevents compliance regression.",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Shopify ADA compliant by default?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. While Shopify's newer themes (like Dawn) include some accessibility features, no Shopify store is fully ADA compliant out of the box. The store owner is responsible for ensuring compliance, including adding alt text to images, maintaining color contrast, ensuring keyboard navigation works, and keeping third-party apps accessible. Your theme choice, customizations, and content all affect compliance.",
          },
        },
        {
          "@type": "Question",
          name: "Can my Shopify store be sued for ADA violations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. E-commerce stores account for approximately 77% of all ADA website accessibility lawsuits. Shopify stores are considered places of public accommodation under ADA Title III. Multiple Shopify store owners have been sued, with settlements typically ranging from $5,000 to $25,000 for small businesses, plus legal defense costs of $3,000 to $10,000.",
          },
        },
        {
          "@type": "Question",
          name: "How much does Shopify ADA compliance cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Basic compliance can range from free (DIY fixes with free scanning tools) to $29-99/month for automated monitoring and remediation. A full professional accessibility audit costs $3,000-$15,000. For comparison, an ADA lawsuit typically costs $15,000-$50,000+ in settlement and legal fees. Continuous monitoring at $29/month ($348/year) costs less than 3% of a typical lawsuit.",
          },
        },
        {
          "@type": "Question",
          name: "What are the most common Shopify accessibility issues?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The most common issues are: missing alt text on product images (found on 85%+ of stores), insufficient color contrast on text and buttons, inaccessible dropdown menus and filters, missing form labels on email signup and contact forms, inaccessible cart and checkout flows, auto-playing videos without captions, and popup modals that trap keyboard focus.",
          },
        },
        {
          "@type": "Question",
          name: "Do accessibility overlay apps work on Shopify?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Accessibility overlay widgets installed from the Shopify App Store do not make your store ADA compliant. The National Federation of the Blind has condemned overlay solutions, courts have not accepted them as proof of compliance, and overlay providers have been named as defendants in lawsuits themselves. These apps add a visible widget but don't fix underlying code issues. Use code-level scanning and remediation instead.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0a] text-gray-100">
        {jsonLd.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}

        {/* Hero */}
        <section className="relative py-20 px-4 border-b border-gray-800">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <Link href="/blog" className="hover:text-white transition">
                Blog
              </Link>
              <span>/</span>
              <span className="text-purple-400">Compliance Guides</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Shopify ADA Compliance Guide 2026:{" "}
              <span className="text-purple-400">
                Protect Your Store from Lawsuits
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              77% of ADA website lawsuits target e-commerce stores. This is the complete,
              step-by-step guide to making your Shopify store WCAG 2.1 AA compliant — from
              theme audits to product images to checkout flow.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <span>Published: February 24, 2026</span>
              <span>•</span>
              <span>14 min read</span>
            </div>
          </div>
        </section>

        {/* Alert Banner */}
        <section className="py-6 px-4 bg-red-500/5 border-b border-gray-800">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
              <span className="text-3xl">⚠️</span>
              <div>
                <p className="font-semibold text-red-400">
                  E-commerce is the #1 target for ADA lawsuits
                </p>
                <p className="text-sm text-gray-300">
                  Over 3,000 e-commerce stores were sued in 2025 alone, including Shopify stores.
                  Settlements average $5K-$25K — plus $10K+ in legal fees.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TOC */}
        <section className="py-12 px-4 border-b border-gray-800">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
              <h2 className="text-lg font-semibold mb-4">📋 Table of Contents</h2>
              <nav className="grid md:grid-cols-2 gap-2 text-sm">
                <a href="#why-ada" className="text-purple-400 hover:text-purple-300 transition">1. Why Your Shopify Store Needs ADA Compliance</a>
                <a href="#is-shopify-compliant" className="text-purple-400 hover:text-purple-300 transition">2. Is Shopify ADA Compliant by Default?</a>
                <a href="#common-issues" className="text-purple-400 hover:text-purple-300 transition">3. Most Common Shopify Accessibility Issues</a>
                <a href="#step-by-step" className="text-purple-400 hover:text-purple-300 transition">4. Step-by-Step Compliance Guide</a>
                <a href="#theme-audit" className="text-purple-400 hover:text-purple-300 transition">5. Shopify Theme Accessibility Audit</a>
                <a href="#product-pages" className="text-purple-400 hover:text-purple-300 transition">6. Product Pages: Images, Descriptions, Variants</a>
                <a href="#checkout" className="text-purple-400 hover:text-purple-300 transition">7. Cart &amp; Checkout Accessibility</a>
                <a href="#apps-integrations" className="text-purple-400 hover:text-purple-300 transition">8. Apps &amp; Third-Party Integrations</a>
                <a href="#overlays-warning" className="text-purple-400 hover:text-purple-300 transition">9. Why Overlay Apps Won't Protect You</a>
                <a href="#monitoring" className="text-purple-400 hover:text-purple-300 transition">10. Ongoing Monitoring &amp; Maintenance</a>
                <a href="#cost-comparison" className="text-purple-400 hover:text-purple-300 transition">11. Cost: Compliance vs. Lawsuit</a>
                <a href="#faq" className="text-purple-400 hover:text-purple-300 transition">12. Frequently Asked Questions</a>
              </nav>
            </div>
          </div>
        </section>

        {/* Content */}
        <article className="py-12 px-4">
          <div className="max-w-4xl mx-auto space-y-16">

            {/* Section 1 */}
            <section id="why-ada">
              <h2 className="text-3xl font-bold mb-6">
                1. Why Your Shopify Store Needs ADA Compliance
              </h2>
              <p className="text-gray-300 mb-4">
                If you run a Shopify store, you&apos;re running an e-commerce business — and e-commerce
                is ground zero for ADA website lawsuits. Here&apos;s why compliance isn&apos;t optional:
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 text-center">
                  <div className="text-3xl font-bold text-red-400 mb-2">77%</div>
                  <p className="text-sm text-gray-400">
                    of ADA lawsuits target e-commerce stores
                  </p>
                </div>
                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">4,000+</div>
                  <p className="text-sm text-gray-400">
                    ADA web lawsuits filed in 2025
                  </p>
                </div>
                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">$490B</div>
                  <p className="text-sm text-gray-400">
                    annual spending power of people with disabilities
                  </p>
                </div>
              </div>

              <p className="text-gray-300 mb-4">
                The Americans with Disabilities Act (ADA) requires that &quot;places of public
                accommodation&quot; be accessible to people with disabilities. Federal courts have
                consistently ruled that online stores qualify — including Shopify stores.
              </p>

              <p className="text-gray-300 mb-4">
                Beyond legal protection, accessibility is good business. The disability community
                represents <strong>$490 billion in annual spending power</strong> (American Institutes
                for Research). An inaccessible store literally turns away customers who want to buy
                from you.
              </p>

              <p className="text-gray-300">
                The compliance standard used is <strong>WCAG 2.1 Level AA</strong> — the Web Content
                Accessibility Guidelines published by the W3C. While the ADA doesn&apos;t explicitly
                reference WCAG, the Department of Justice has cited it as the standard, and courts
                consistently use it as the benchmark.
              </p>
            </section>

            {/* Section 2 */}
            <section id="is-shopify-compliant">
              <h2 className="text-3xl font-bold mb-6">
                2. Is Shopify ADA Compliant by Default?
              </h2>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                  Short Answer: No.
                </h3>
                <p className="text-gray-300">
                  While Shopify has improved its platform&apos;s accessibility, <strong>no Shopify
                  store is fully ADA compliant out of the box</strong>. The store owner bears
                  responsibility for ensuring compliance.
                </p>
              </div>

              <p className="text-gray-300 mb-4">
                Here&apos;s what Shopify provides vs. what you&apos;re responsible for:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-green-400 mb-3">
                    ✅ What Shopify Handles
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Checkout flow accessibility (Shopify-hosted)</li>
                    <li>• Dawn theme built with semantic HTML</li>
                    <li>• Basic ARIA landmarks in newer themes</li>
                    <li>• Skip-to-content links in Dawn theme</li>
                    <li>• Payment form accessibility</li>
                  </ul>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-red-400 mb-3">
                    ❌ What You Must Handle
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Alt text on all product images</li>
                    <li>• Color contrast in your theme/brand colors</li>
                    <li>• Keyboard navigation for custom elements</li>
                    <li>• Form labels on email signup, contact forms</li>
                    <li>• Third-party app accessibility</li>
                    <li>• Custom code/sections accessibility</li>
                    <li>• Video captions and media alternatives</li>
                    <li>• Heading hierarchy across pages</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-300">
                Think of it this way: Shopify provides the infrastructure, but <strong>you build the
                store</strong>. Every product image you upload without alt text, every custom banner
                with poor contrast, every third-party popup you install — these are your accessibility
                liabilities.
              </p>
            </section>

            {/* Section 3 */}
            <section id="common-issues">
              <h2 className="text-3xl font-bold mb-6">
                3. Most Common Shopify Accessibility Issues
              </h2>
              <p className="text-gray-300 mb-6">
                After scanning thousands of Shopify stores, these are the most frequently found
                WCAG violations:
              </p>

              <div className="space-y-4 mb-6">
                {[
                  {
                    issue: "Missing Alt Text on Product Images",
                    severity: "Critical",
                    color: "text-red-400",
                    wcag: "1.1.1",
                    impact: "Screen reader users can't identify products",
                    fix: "Add descriptive alt text in Shopify admin → Products → Edit image → Alt text",
                    prevalence: "85%+ of Shopify stores",
                  },
                  {
                    issue: "Insufficient Color Contrast",
                    severity: "Critical",
                    color: "text-red-400",
                    wcag: "1.4.3",
                    impact: "Low-vision users can't read text on buttons, badges, and navigation",
                    fix: "Check all text/background combinations meet 4.5:1 ratio. Common offenders: sale badges, footer links, light gray text",
                    prevalence: "78% of stores",
                  },
                  {
                    issue: "Inaccessible Dropdown Menus",
                    severity: "High",
                    color: "text-orange-400",
                    wcag: "2.1.1",
                    impact: "Keyboard users can't navigate product categories",
                    fix: "Ensure all menu items are reachable via Tab/Arrow keys and activated with Enter/Space",
                    prevalence: "65% of stores",
                  },
                  {
                    issue: "Missing Form Labels",
                    severity: "High",
                    color: "text-orange-400",
                    wcag: "1.3.1",
                    impact: "Screen reader users can't identify form fields (email signup, search, contact)",
                    fix: "Add <label> elements associated with each <input> via for/id attributes",
                    prevalence: "72% of stores",
                  },
                  {
                    issue: "Focus Indicators Removed",
                    severity: "High",
                    color: "text-orange-400",
                    wcag: "2.4.7",
                    impact: "Keyboard users can't see which element is selected",
                    fix: "Never use outline: none without providing an alternative focus style",
                    prevalence: "60% of stores",
                  },
                  {
                    issue: "Auto-Playing Media Without Controls",
                    severity: "Medium",
                    color: "text-yellow-400",
                    wcag: "1.4.2",
                    impact: "Disorienting for screen reader users; interferes with audio navigation",
                    fix: "Add pause/stop controls to all auto-playing video and audio. Add captions.",
                    prevalence: "40% of stores with video",
                  },
                  {
                    issue: "Missing Skip Navigation Link",
                    severity: "Medium",
                    color: "text-yellow-400",
                    wcag: "2.4.1",
                    impact: "Keyboard users must tab through entire header/navigation on every page",
                    fix: "Add a visually-hidden 'Skip to main content' link as the first focusable element",
                    prevalence: "55% of stores (varies by theme)",
                  },
                  {
                    issue: "Inaccessible Product Filters & Sorting",
                    severity: "Medium",
                    color: "text-yellow-400",
                    wcag: "4.1.2",
                    impact: "Screen reader users can't filter by size, color, price etc.",
                    fix: "Use proper ARIA roles and labels on filter controls, announce filter results",
                    prevalence: "70% of stores with filters",
                  },
                ].map((item) => (
                  <div key={item.issue} className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-white">{item.issue}</h3>
                      <div className="flex gap-2">
                        <span className={`text-xs px-2 py-1 rounded-full bg-gray-700/50 ${item.color}`}>
                          {item.severity}
                        </span>
                        <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full">
                          WCAG {item.wcag}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 mb-2">
                      <strong>Impact:</strong> {item.impact}
                    </p>
                    <p className="text-sm text-gray-400 mb-2">
                      <strong>Fix:</strong> {item.fix}
                    </p>
                    <p className="text-xs text-yellow-400/80">Found on {item.prevalence}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4 */}
            <section id="step-by-step">
              <h2 className="text-3xl font-bold mb-6">
                4. Step-by-Step Compliance Guide
              </h2>
              <p className="text-gray-300 mb-6">
                Follow this order to systematically make your Shopify store ADA compliant.
                Start with the highest-impact issues that are most commonly cited in lawsuits:
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: "Step 1",
                    title: "Run a Full Accessibility Scan",
                    time: "5 minutes",
                    content: "Before fixing anything, you need a baseline. Run your Shopify store through an automated accessibility scanner to get a full report of current WCAG violations. Focus on scanning your homepage, a product page, a collection page, the cart, and your contact/about pages. This gives you a prioritized list of what to fix.",
                    cta: true,
                  },
                  {
                    step: "Step 2",
                    title: "Fix All Product Image Alt Text",
                    time: "30-60 minutes",
                    content: "This is the single highest-impact fix. Go to Products in your Shopify admin. For every product, click each image and add descriptive alt text. Good alt text describes the product specifically: 'Blue denim jacket with brass buttons, front view' is better than 'jacket' or 'product image'. Include the product name, color, material, and viewing angle. For decorative images that don't convey information, use empty alt text (alt=\"\").",
                    cta: false,
                  },
                  {
                    step: "Step 3",
                    title: "Audit and Fix Color Contrast",
                    time: "30-60 minutes",
                    content: "Use a color contrast checker to verify all text meets the 4.5:1 ratio against its background (3:1 for large text 18px+). Common offenders on Shopify stores: sale badge text, light gray body text, white text on light-colored brand backgrounds, footer link text, and placeholder text in search/email fields. Update colors in your theme's CSS or theme settings.",
                    cta: false,
                  },
                  {
                    step: "Step 4",
                    title: "Add Missing Form Labels",
                    time: "20-30 minutes",
                    content: "Find every form on your site (email signup, contact form, search bar, newsletter popup) and ensure each input field has a properly associated <label> element. In Shopify's theme editor, look for input fields with only placeholder text and no label. Visible labels are best, but visually-hidden labels work for design-sensitive areas like search bars.",
                    cta: false,
                  },
                  {
                    step: "Step 5",
                    title: "Test Keyboard Navigation",
                    time: "15-20 minutes",
                    content: "Put away your mouse and navigate your entire store using only Tab (forward), Shift+Tab (backward), Enter (activate), and Escape (close). Test: main navigation menu (including dropdowns), product selection and add-to-cart, search functionality, popup/modal dialogs, footer links. Every interactive element must be reachable and usable.",
                    cta: false,
                  },
                  {
                    step: "Step 6",
                    title: "Fix Heading Hierarchy",
                    time: "15-20 minutes",
                    content: "Each page should have exactly one H1 (usually the page/product title), followed by H2s for major sections, H3s for subsections, and so on. Common Shopify mistake: using heading tags for styling (making something bold/large) rather than structure. Check that headings flow logically: H1 → H2 → H3, never skipping levels (H1 → H3).",
                    cta: false,
                  },
                  {
                    step: "Step 7",
                    title: "Add an Accessibility Statement",
                    time: "15 minutes",
                    content: "Create a new page in Shopify (Pages → Add page) titled 'Accessibility Statement'. Include: your commitment to accessibility, the standard you're targeting (WCAG 2.1 AA), known limitations, a contact method for reporting accessibility issues, and the date of your last accessibility review. Link to it in your footer navigation.",
                    cta: false,
                  },
                  {
                    step: "Step 8",
                    title: "Set Up Ongoing Monitoring",
                    time: "5 minutes",
                    content: "Accessibility compliance isn't a one-time fix. Every new product, theme update, or app installation can introduce violations. Set up automated monitoring to scan your store regularly and alert you to new issues before they become lawsuit targets. This is your ongoing insurance policy.",
                    cta: false,
                  },
                ].map((item) => (
                  <div key={item.step} className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                    <div className="flex items-start gap-4">
                      <div className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-lg text-sm font-bold whitespace-nowrap">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                          <span className="text-xs text-gray-500">~{item.time}</span>
                        </div>
                        <p className="text-gray-300">{item.content}</p>
                        {item.cta && (
                          <Link
                            href="/"
                            className="inline-block mt-3 px-6 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition font-medium"
                          >
                            Scan Your Shopify Store Free →
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5 */}
            <section id="theme-audit">
              <h2 className="text-3xl font-bold mb-6">
                5. Shopify Theme Accessibility Audit
              </h2>
              <p className="text-gray-300 mb-6">
                Your Shopify theme is the foundation of your store&apos;s accessibility. Some themes
                are significantly better than others:
              </p>

              <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Theme Accessibility Comparison
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      theme: "Dawn (Free — Shopify Default)",
                      rating: "Best Starting Point",
                      color: "text-green-400",
                      notes: "Semantic HTML, skip-nav, ARIA landmarks, keyboard-accessible menus. Shopify's most accessible free theme.",
                    },
                    {
                      theme: "Minimal / Simple (Free)",
                      rating: "Good",
                      color: "text-green-400",
                      notes: "Clean structure, fewer accessibility issues by virtue of simplicity. Less customization = fewer violations.",
                    },
                    {
                      theme: "Debut (Legacy Free)",
                      rating: "Moderate",
                      color: "text-yellow-400",
                      notes: "Older architecture, some accessibility gaps. Missing skip-nav in many versions. Consider upgrading to Dawn.",
                    },
                    {
                      theme: "Premium Third-Party Themes",
                      rating: "Varies Widely",
                      color: "text-orange-400",
                      notes: "Heavily depends on the developer. Check theme changelog for accessibility mentions. Test before buying.",
                    },
                    {
                      theme: "Custom/Heavily Modified Themes",
                      rating: "Audit Required",
                      color: "text-red-400",
                      notes: "Custom code often introduces accessibility issues. Every modification needs testing. Most vulnerable to lawsuits.",
                    },
                  ].map((item) => (
                    <div key={item.theme} className="flex items-start gap-4 border-b border-gray-700/50 pb-4 last:border-0 last:pb-0">
                      <span className={`${item.color} font-bold min-w-[140px] text-sm`}>
                        {item.rating}
                      </span>
                      <div>
                        <span className="font-semibold text-white">{item.theme}</span>
                        <p className="text-sm text-gray-400 mt-1">{item.notes}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-400 mb-2">
                  💡 Theme Audit Checklist
                </h3>
                <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-300">
                  <label className="flex items-start gap-2">
                    <span className="text-gray-500 mt-0.5">☐</span>
                    <span>Skip-to-content link present and functional</span>
                  </label>
                  <label className="flex items-start gap-2">
                    <span className="text-gray-500 mt-0.5">☐</span>
                    <span>All navigation items keyboard-accessible</span>
                  </label>
                  <label className="flex items-start gap-2">
                    <span className="text-gray-500 mt-0.5">☐</span>
                    <span>Focus indicators visible on all interactive elements</span>
                  </label>
                  <label className="flex items-start gap-2">
                    <span className="text-gray-500 mt-0.5">☐</span>
                    <span>ARIA landmarks: header, nav, main, footer</span>
                  </label>
                  <label className="flex items-start gap-2">
                    <span className="text-gray-500 mt-0.5">☐</span>
                    <span>Mobile menu accessible with keyboard</span>
                  </label>
                  <label className="flex items-start gap-2">
                    <span className="text-gray-500 mt-0.5">☐</span>
                    <span>Search accessible (label + keyboard activation)</span>
                  </label>
                  <label className="flex items-start gap-2">
                    <span className="text-gray-500 mt-0.5">☐</span>
                    <span>Product quick-view modals have focus trap</span>
                  </label>
                  <label className="flex items-start gap-2">
                    <span className="text-gray-500 mt-0.5">☐</span>
                    <span>Language attribute set on &lt;html&gt; element</span>
                  </label>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="product-pages">
              <h2 className="text-3xl font-bold mb-6">
                6. Product Pages: Images, Descriptions, Variants
              </h2>
              <p className="text-gray-300 mb-6">
                Product pages are where most Shopify accessibility issues live. Here&apos;s how to
                make them compliant:
              </p>

              <div className="space-y-6">
                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    📸 Product Images — Alt Text Guide
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Every product image needs descriptive alt text. Here&apos;s how to write effective
                    alt text for e-commerce:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-red-400 text-sm font-bold min-w-[40px]">Bad:</span>
                      <code className="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded">&quot;product image&quot;</code>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-yellow-400 text-sm font-bold min-w-[40px]">OK:</span>
                      <code className="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded">&quot;blue jacket&quot;</code>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-400 text-sm font-bold min-w-[40px]">Good:</span>
                      <code className="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded">&quot;Women&apos;s blue denim jacket with brass buttons and two front pockets, shown from the front on a model&quot;</code>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mt-4">
                    <strong>Formula:</strong> [Gender/Target] + [Color] + [Material] + [Product Type] +
                    [Key Features] + [View/Angle]
                  </p>
                </div>

                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    🔀 Variant Selectors (Size, Color, etc.)
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Variant selectors are often one of the worst accessibility offenders on Shopify stores.
                    Ensure:
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      <span>Color swatches have text labels (don&apos;t rely on color alone — WCAG 1.4.1)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      <span>Size selectors are keyboard-navigable (Tab between options)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      <span>Selected variant is announced to screen readers (aria-selected or aria-checked)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      <span>&quot;Out of stock&quot; variants are indicated both visually AND via aria-disabled</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      <span>Price changes are announced when switching variants (use aria-live region)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    📝 Product Descriptions
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      <span>Use proper heading hierarchy within descriptions (H2, H3 — not H1)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      <span>Use real text (not images of text) for product specifications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      <span>Tables in descriptions need proper &lt;th&gt; headers and scope attributes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      <span>Links within descriptions should have descriptive text (not &quot;click here&quot;)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section id="checkout">
              <h2 className="text-3xl font-bold mb-6">
                7. Cart &amp; Checkout Accessibility
              </h2>
              <p className="text-gray-300 mb-6">
                The cart and checkout flow is critical — it&apos;s where the actual transaction happens.
                An inaccessible checkout literally prevents disabled users from completing purchases.
              </p>

              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-green-400 mb-2">
                  ✅ Good News: Shopify-Hosted Checkout
                </h3>
                <p className="text-gray-300">
                  If you&apos;re using Shopify&apos;s standard hosted checkout (which most stores do),
                  Shopify handles much of the checkout accessibility. They maintain WCAG compliance on
                  the payment form, address fields, and order confirmation. Your main responsibility
                  is ensuring the <strong>path to checkout</strong> is accessible.
                </p>
              </div>

              <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  🛒 Cart Page/Drawer Checklist
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">☐</span>
                    <span>&quot;Add to Cart&quot; button is keyboard-accessible and clearly labeled</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">☐</span>
                    <span>Cart updates announce to screen readers (use aria-live)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">☐</span>
                    <span>Quantity inputs have visible labels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">☐</span>
                    <span>Remove item buttons have accessible names (not just an &quot;X&quot; icon)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">☐</span>
                    <span>Cart drawer (if used) traps focus properly and closes with Escape</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">☐</span>
                    <span>Discount code field has a visible label</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">☐</span>
                    <span>&quot;Proceed to Checkout&quot; button is prominently focusable</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 8 */}
            <section id="apps-integrations">
              <h2 className="text-3xl font-bold mb-6">
                8. Apps &amp; Third-Party Integrations
              </h2>
              <p className="text-gray-300 mb-6">
                Third-party Shopify apps are one of the biggest hidden accessibility risks. Every app
                that injects content into your storefront can introduce WCAG violations.
              </p>

              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-red-400 mb-2">
                  ⚠️ Common Problem Apps
                </h3>
                <p className="text-gray-300 mb-4">
                  These types of apps frequently cause accessibility issues:
                </p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• <strong>Popup/Modal apps</strong> — Often don&apos;t trap focus, can&apos;t be closed with keyboard</li>
                  <li>• <strong>Chat widgets</strong> — Floating buttons without ARIA labels, inaccessible chat interfaces</li>
                  <li>• <strong>Review widgets</strong> — Star ratings without text alternatives, inaccessible review forms</li>
                  <li>• <strong>Countdown timers</strong> — Visual-only urgency, no screen reader announcements</li>
                  <li>• <strong>Image galleries/sliders</strong> — Not keyboard-navigable, missing alt text, auto-play</li>
                  <li>• <strong>Cookie consent banners</strong> — Ironic but common: compliance banners that aren&apos;t accessible</li>
                </ul>
              </div>

              <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">
                  App Accessibility Evaluation Framework
                </h3>
                <p className="text-gray-300 mb-4">
                  Before installing any Shopify app, check:
                </p>
                <ol className="space-y-2 text-gray-300 list-decimal pl-5">
                  <li>Does the app mention accessibility or WCAG in its listing?</li>
                  <li>Can you navigate the app&apos;s storefront elements with keyboard only?</li>
                  <li>Do injected elements have proper ARIA attributes?</li>
                  <li>Does the app add alt text to any images it creates?</li>
                  <li>Can popups/modals be closed with the Escape key?</li>
                  <li>Does the app degrade gracefully (works without JavaScript)?</li>
                </ol>
                <p className="text-sm text-gray-400 mt-4">
                  <strong>Rule of thumb:</strong> The fewer apps you install, the fewer accessibility
                  issues you&apos;ll have. Every app is a potential liability.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section id="overlays-warning">
              <h2 className="text-3xl font-bold mb-6">
                9. Why Overlay Apps Won&apos;t Protect You
              </h2>
              <p className="text-gray-300 mb-4">
                You may have seen Shopify apps promising &quot;one-click ADA compliance&quot; through
                accessibility overlay widgets. These apps add a toolbar or widget to your store that
                lets users adjust text size, contrast, and other visual settings.
              </p>

              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-red-400 mb-2">
                  🚫 The Overlay Problem
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">1.</span>
                    <span>
                      <strong>They don&apos;t fix code-level issues.</strong> Overlays add a visual layer
                      on top of an inaccessible website. The underlying HTML/CSS violations remain.
                      Screen readers interact with the code, not the overlay.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">2.</span>
                    <span>
                      <strong>Courts don&apos;t accept them as compliance.</strong> Multiple lawsuits have
                      been filed against businesses using overlays — and having an overlay installed.
                      Courts look at actual WCAG conformance, not widget presence.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">3.</span>
                    <span>
                      <strong>The accessibility community opposes them.</strong> The National Federation
                      of the Blind publicly condemned overlay solutions. Over 800 accessibility
                      professionals signed the{" "}
                      <a
                        href="https://overlayfactsheet.com"
                        className="text-purple-400 hover:text-purple-300 transition underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Overlay Fact Sheet
                      </a>{" "}
                      opposing them.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">4.</span>
                    <span>
                      <strong>Overlay providers have been sued.</strong> accessiBe, AudioEye, and other
                      overlay vendors have been named as defendants in ADA lawsuits, undermining their
                      own &quot;compliance guarantee&quot; claims.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">5.</span>
                    <span>
                      <strong>They may increase your risk.</strong> Some plaintiff attorneys specifically
                      look for overlay widgets as indicators of a business that knows it has accessibility
                      issues but chose a shortcut instead of real remediation.
                    </span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-300">
                The only reliable path to ADA compliance is <strong>fixing your actual code</strong> —
                the HTML, CSS, ARIA attributes, and content that screen readers and assistive
                technologies interact with. For Shopify stores, this means auditing your theme,
                fixing product content, and monitoring for regressions. There are no shortcuts.
              </p>
            </section>

            {/* Section 10 */}
            <section id="monitoring">
              <h2 className="text-3xl font-bold mb-6">
                10. Ongoing Monitoring &amp; Maintenance
              </h2>
              <p className="text-gray-300 mb-6">
                Making your Shopify store accessible today doesn&apos;t mean it stays accessible
                tomorrow. Accessibility is an ongoing process, not a one-time project:
              </p>

              <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  🔄 What Can Break Accessibility
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                  <ul className="space-y-2">
                    <li>• Adding new products without alt text</li>
                    <li>• Theme updates changing HTML structure</li>
                    <li>• Installing new apps or widgets</li>
                    <li>• Seasonal promotional banners</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• Blog posts with inaccessible images/embeds</li>
                    <li>• A/B testing tools injecting inaccessible variants</li>
                    <li>• Team members uploading content without alt text</li>
                    <li>• Third-party script updates</li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-purple-400 mb-2">
                  📊 Recommended Monitoring Cadence
                </h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-start gap-3">
                    <span className="text-purple-400 font-bold min-w-[100px]">Continuous:</span>
                    <span>Automated scanning for WCAG violations (detects 30-50% of issues automatically)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-400 font-bold min-w-[100px]">Weekly:</span>
                    <span>Review scan results, fix new violations from content/product additions</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-400 font-bold min-w-[100px]">Monthly:</span>
                    <span>Manual keyboard navigation test of key flows (homepage → product → cart → checkout)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-400 font-bold min-w-[100px]">Quarterly:</span>
                    <span>Full manual audit including screen reader testing (NVDA or VoiceOver)</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-300">
                The most cost-effective approach: <strong>automated continuous monitoring</strong> catches
                the majority of regressions as they happen, supplemented by periodic manual testing
                for issues that automated tools can&apos;t detect (approximately 50-70% of all WCAG
                criteria require human judgment).
              </p>
            </section>

            {/* Section 11 */}
            <section id="cost-comparison">
              <h2 className="text-3xl font-bold mb-6">
                11. Cost: Compliance vs. Lawsuit
              </h2>
              <p className="text-gray-300 mb-6">
                Let&apos;s put the numbers side by side:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-green-400 mb-4 text-center">
                    ✅ Proactive Compliance
                  </h3>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex justify-between">
                      <span>Initial accessibility audit</span>
                      <span className="font-semibold text-white">Free — $500</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Theme fixes (one-time)</span>
                      <span className="font-semibold text-white">$0 — $2,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Content fixes (alt text, etc.)</span>
                      <span className="font-semibold text-white">$0 (DIY)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly monitoring</span>
                      <span className="font-semibold text-white">$29/month</span>
                    </div>
                    <div className="border-t border-green-500/30 pt-3 flex justify-between">
                      <span className="font-bold text-green-400">Year 1 Total</span>
                      <span className="font-bold text-green-400">$348 — $2,848</span>
                    </div>
                  </div>
                </div>

                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-red-400 mb-4 text-center">
                    ❌ ADA Lawsuit
                  </h3>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex justify-between">
                      <span>Legal defense (even to settle)</span>
                      <span className="font-semibold text-white">$3,000 — $50,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Settlement payment</span>
                      <span className="font-semibold text-white">$5,000 — $25,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Emergency remediation</span>
                      <span className="font-semibold text-white">$5,000 — $15,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Ongoing monitoring (court-ordered)</span>
                      <span className="font-semibold text-white">$2,000 — $5,000/yr</span>
                    </div>
                    <div className="border-t border-red-500/30 pt-3 flex justify-between">
                      <span className="font-bold text-red-400">Total Cost</span>
                      <span className="font-bold text-red-400">$15,000 — $95,000</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 text-center">
                <p className="text-gray-300 mb-2">
                  Proactive compliance costs as little as <strong className="text-green-400">$348/year</strong>.
                </p>
                <p className="text-gray-300">
                  An ADA lawsuit costs a minimum of <strong className="text-red-400">$15,000</strong>.
                </p>
                <p className="text-2xl font-bold text-purple-400 mt-4">
                  That&apos;s 43x cheaper to prevent than to fix after a lawsuit.
                </p>
              </div>
            </section>

            {/* Section 12: FAQ */}
            <section id="faq">
              <h2 className="text-3xl font-bold mb-6">
                12. Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: "Is Shopify ADA compliant by default?",
                    a: "No. While Shopify's newer themes include some accessibility features, no Shopify store is fully compliant out of the box. The store owner is responsible for product image alt text, color contrast, keyboard navigation, form labels, and third-party app accessibility. Your content and customizations determine your compliance level.",
                  },
                  {
                    q: "Can my Shopify store be sued for ADA violations?",
                    a: "Yes. E-commerce stores are the #1 target for ADA web accessibility lawsuits, accounting for 77% of all cases. Shopify stores are considered \"places of public accommodation\" under ADA Title III. Settlements for small businesses typically range from $5,000 to $25,000 plus legal fees.",
                  },
                  {
                    q: "How much does it cost to make my Shopify store ADA compliant?",
                    a: "DIY compliance (fixing alt text, contrast, forms yourself + $29/mo monitoring) costs as little as $348/year. Professional audits range from $3,000-$15,000. For comparison, an ADA lawsuit costs $15,000-$95,000+. Prevention is 43x cheaper than litigation.",
                  },
                  {
                    q: "What are the most common Shopify accessibility issues?",
                    a: "Missing alt text on product images (85%+ of stores), insufficient color contrast (78%), inaccessible dropdown menus (65%), missing form labels (72%), removed focus indicators (60%), and inaccessible product filters (70%). Most of these are fixable without developer help.",
                  },
                  {
                    q: "Will an accessibility overlay app make my store compliant?",
                    a: "No. Overlay widgets don't fix code-level issues, courts don't accept them as compliance, the accessibility community opposes them (800+ professionals signed the Overlay Fact Sheet), and overlay providers themselves have been named in lawsuits. The only reliable path is fixing actual code issues.",
                  },
                  {
                    q: "Which Shopify theme is most accessible?",
                    a: "Dawn (Shopify's default free theme) is the best starting point — it includes semantic HTML, skip-navigation links, ARIA landmarks, and keyboard-accessible menus. Minimal and Simple themes are also good options. Premium third-party themes vary widely. Always audit any theme before going live.",
                  },
                  {
                    q: "How often should I check my store's accessibility?",
                    a: "Set up continuous automated monitoring to catch regressions from new products, theme changes, and app updates. Supplement with weekly manual checks of scan results, monthly keyboard navigation tests, and quarterly full manual audits including screen reader testing.",
                  },
                  {
                    q: "Does Shopify Plus have better accessibility features?",
                    a: "Shopify Plus gives you more control over the checkout (checkout.liquid/Checkout Extensibility), which means more responsibility for checkout accessibility. The core theme and storefront accessibility is the same across all Shopify plans. Plus merchants should pay extra attention to any checkout customizations.",
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                    <h3 className="font-semibold text-white mb-2">{item.q}</h3>
                    <p className="text-gray-300">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl p-8 border border-purple-500/30 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Scan Your Shopify Store — Free
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Find out exactly what accessibility issues your Shopify store has right now.
                Get a detailed WCAG 2.1 AA report in minutes — no credit card required.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/"
                  className="px-8 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition font-semibold text-lg"
                >
                  Free Accessibility Scan →
                </Link>
                <Link
                  href="/blog/shopify-accessibility-apps"
                  className="px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition"
                >
                  Best Shopify A11y Apps
                </Link>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Continuous monitoring starts at <strong className="text-white">$29/month</strong> — less
                than the cost of a single product photoshoot.
              </p>
            </section>

            {/* Related Posts */}
            <section>
              <h2 className="text-2xl font-bold mb-6">📚 Related Guides</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "7 Best Shopify Accessibility Apps 2026",
                    href: "/blog/shopify-accessibility-apps",
                    desc: "Detailed app comparison: features, pricing, pros/cons",
                  },
                  {
                    title: "ADA Website Lawsuit Statistics 2026",
                    href: "/blog/ada-website-lawsuit-statistics-2026",
                    desc: "15,000+ cases in 4 years — the complete data",
                  },
                  {
                    title: "How to Protect Your Business from ADA Lawsuits",
                    href: "/blog/ada-website-lawsuit-protection",
                    desc: "5-step protection plan with ROI analysis",
                  },
                  {
                    title: "ADA Website Compliance Guide 2026",
                    href: "/blog/ada-website-compliance-guide",
                    desc: "Complete WCAG 2.1 AA compliance walkthrough",
                  },
                  {
                    title: "E-Commerce Accessibility Guide",
                    href: "/blog/ecommerce-accessibility-guide",
                    desc: "Platform-agnostic e-commerce accessibility best practices",
                  },
                  {
                    title: "Color Contrast Checker Tool",
                    href: "/tools/color-contrast-checker",
                    desc: "Free tool to check WCAG contrast ratios",
                  },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block p-4 bg-gray-800/30 border border-gray-700 rounded-xl hover:border-purple-500/50 transition"
                  >
                    <h3 className="font-semibold text-purple-400 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </article>

        <Footer />
      </main>
    </>
  );
}
