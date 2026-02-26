/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Shopify ADA Compliance: How to Make Your Shopify Store Accessible (2026) | RatedWithAI",
  description:
    "Is your Shopify store ADA compliant? Learn common accessibility issues, the best accessible themes, step-by-step fixes, legal risks, and how to test your Shopify store for WCAG 2.1 AA compliance.",
  openGraph: {
    title: "Shopify ADA Compliance: How to Make Your Shopify Store Accessible (2026)",
    description:
      "Shopify isn't ADA compliant out of the box. Learn how to fix accessibility issues, avoid lawsuits, and make your store accessible to everyone.",
    type: "article",
    publishedTime: "2026-02-24T00:00:00.000Z",
    authors: ["RatedWithAI Team"],
  },
  keywords: [
    "shopify ada compliance",
    "shopify accessibility",
    "shopify wcag",
    "is shopify ada compliant",
    "shopify ada compliant",
    "shopify accessibility apps",
    "shopify wcag compliance",
    "shopify ada requirements",
    "shopify store accessibility",
    "make shopify store accessible",
    "shopify accessibility checker",
    "ada compliant shopify theme",
  ],
  alternates: {
    canonical: "https://ratedwithai.com/blog/shopify-ada-compliance",
  },
};

export default function ShopifyAdaCompliancePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Shopify ADA Compliance: How to Make Your Shopify Store Accessible (2026)",
      description:
        "Complete guide to Shopify ADA compliance covering theme accessibility, common issues, legal risk, step-by-step fixes, and testing methods.",
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
          name: "Blog",
          item: "https://ratedwithai.com/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Shopify ADA Compliance",
          item: "https://ratedwithai.com/blog/shopify-ada-compliance",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Shopify ADA compliant out of the box?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Shopify as a platform provides the infrastructure, but ADA compliance depends on your theme, apps, and content. Shopify's default theme Dawn has good baseline accessibility, but most third-party themes have issues with color contrast, missing form labels, and keyboard navigation. The store owner is ultimately responsible for ADA compliance.",
          },
        },
        {
          "@type": "Question",
          name: "Can I get sued for an inaccessible Shopify store?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. E-commerce websites are the #1 target for ADA lawsuits, accounting for over 65% of all digital accessibility cases filed in 2024. Shopify stores are not exempt. Courts have ruled that online stores are places of public accommodation under ADA Title III, and settlements typically range from $10,000 to $50,000 plus remediation costs.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best accessible Shopify theme?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Shopify's Dawn theme (free, default since OS 2.0) is the most accessible option. It includes semantic HTML, ARIA labels, keyboard navigation support, and decent color contrast ratios. Other good options include Taste, Crave, and Sense from Shopify's free theme collection. Avoid older themes that haven't been updated for accessibility.",
          },
        },
        {
          "@type": "Question",
          name: "Do Shopify accessibility apps make my store ADA compliant?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most Shopify accessibility apps are overlay widgets that add a toolbar to your site. These overlays do not make your store truly compliant — the FTC fined accessiBe $1 million for making this exact claim. Overlays can interfere with screen readers and have been cited in 25% of accessibility lawsuits. Instead, fix issues in your theme code and content directly.",
          },
        },
        {
          "@type": "Question",
          name: "How do I test my Shopify store for accessibility?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use a combination of automated scanning (RatedWithAI, axe DevTools, or WAVE) and manual testing. Automated tools catch about 30-40% of WCAG issues. For manual testing, navigate your entire store using only a keyboard, test with a screen reader (VoiceOver or NVDA), and check color contrast ratios. Test your homepage, product pages, cart, and checkout flow.",
          },
        },
        {
          "@type": "Question",
          name: "Does Shopify's built-in checkout meet ADA requirements?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Shopify's hosted checkout (used by most stores) has reasonable baseline accessibility because Shopify controls it directly. However, customizations, third-party payment gateways, and checkout extensions can introduce accessibility issues. Always test your complete checkout flow with keyboard navigation and screen readers.",
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
        </div>

        <article className="mx-auto w-full max-w-4xl px-6 pb-24">
          {/* Hero */}
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-sky-400">
              Platform Guide
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl leading-tight">
              Shopify ADA Compliance: How to Make Your Store Accessible in 2026
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              Over 4.8 million online stores run on Shopify — and the vast majority aren't ADA compliant. E-commerce sites are the <strong className="text-white">#1 target for accessibility lawsuits</strong>, and Shopify's platform doesn't make you compliant automatically. This guide covers exactly what's broken, how to fix it, and how to protect your business.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
              <span>Updated February 2026</span>
              <span>•</span>
              <span>14 min read</span>
            </div>
          </div>

          {/* Table of Contents */}
          <nav className="mb-12 rounded-2xl border border-slate-800/70 bg-slate-900/50 p-6">
            <p className="text-sm font-semibold text-slate-200 mb-4">In this guide:</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#is-shopify-ada-compliant" className="hover:text-sky-400 transition">Is Shopify ADA Compliant Out of the Box?</a></li>
              <li><a href="#common-issues" className="hover:text-sky-400 transition">Common Shopify Accessibility Issues</a></li>
              <li><a href="#best-themes" className="hover:text-sky-400 transition">Shopify Themes With the Best Accessibility</a></li>
              <li><a href="#step-by-step" className="hover:text-sky-400 transition">Step-by-Step: Making Your Shopify Store Accessible</a></li>
              <li><a href="#apps-vs-scanning" className="hover:text-sky-400 transition">Shopify Accessibility Apps vs Automated Scanning</a></li>
              <li><a href="#legal-risk" className="hover:text-sky-400 transition">Legal Risk for Shopify Store Owners</a></li>
              <li><a href="#testing" className="hover:text-sky-400 transition">How to Test Your Shopify Store</a></li>
              <li><a href="#faq" className="hover:text-sky-400 transition">FAQ</a></li>
            </ul>
          </nav>

          {/* Main Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            {/* Section 1 */}
            <section id="is-shopify-ada-compliant" className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">Is Shopify ADA Compliant Out of the Box?</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                <strong className="text-white">No.</strong> This is the single most important thing Shopify store owners need to understand. Shopify provides the infrastructure — hosting, checkout, admin panel — but <strong className="text-white">ADA compliance is your responsibility</strong> as the store owner.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Shopify's platform itself does some things right. Their hosted checkout has reasonable keyboard navigation and form labels. The admin panel is built with accessibility in mind. But the part that matters most — your customer-facing storefront — depends entirely on three things:
              </p>
              <ul className="space-y-2 text-slate-300 mb-6">
                <li>• <strong className="text-white">Your theme:</strong> The template that controls layout, colors, navigation, and HTML structure</li>
                <li>• <strong className="text-white">Your content:</strong> Product images, descriptions, videos, and custom pages you create</li>
                <li>• <strong className="text-white">Your apps:</strong> Third-party Shopify apps that inject code, popups, chat widgets, and overlays</li>
              </ul>
              <p className="text-slate-300 leading-relaxed mb-4">
                Think of it this way: Shopify gives you accessible building materials, but you're the architect. If you choose a theme with poor color contrast, skip alt text on product images, or install apps that break keyboard navigation, your store won't be compliant — regardless of what Shopify does at the platform level.
              </p>

              <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6 my-6">
                <p className="text-sm font-semibold text-amber-400 mb-3">⚠️ Shopify's Fine Print</p>
                <p className="text-slate-300 text-sm">
                  Shopify's <a href="https://www.shopify.com/accessibility" className="text-sky-400 hover:text-sky-300">accessibility page</a> states that their themes are designed with accessibility in mind, but explicitly notes that &quot;merchants are responsible for making sure their online store is accessible.&quot; This means if you get sued, you can't point to Shopify — the liability falls on you.
                </p>
              </div>

              <p className="text-slate-300 leading-relaxed">
                The good news? With the right theme, proper content practices, and regular testing, a Shopify store <em>can</em> achieve strong <Link href="/blog/wcag-compliance-guide" className="text-sky-400 hover:text-sky-300">WCAG 2.1 AA compliance</Link>. It just doesn't happen by default.
              </p>
            </section>

            {/* Section 2 */}
            <section id="common-issues" className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">Common Shopify Accessibility Issues</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                After scanning thousands of Shopify stores, these are the most frequent accessibility failures we see. Most violate <Link href="/blog/wcag-22-complete-guide" className="text-sky-400 hover:text-sky-300">WCAG 2.1 Level AA</Link> success criteria — the standard courts reference in ADA cases.
              </p>

              <div className="grid gap-4 md:grid-cols-2 mb-6">
                <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-5">
                  <p className="font-semibold text-white mb-2">🖼️ Missing Image Alt Text</p>
                  <p className="text-sm text-slate-300">Product images, collection banners, and slideshow images without descriptive alt text. Screen reader users can't understand what's being sold. <strong className="text-white">WCAG 1.1.1</strong></p>
                </div>
                <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-5">
                  <p className="font-semibold text-white mb-2">🎨 Poor Color Contrast</p>
                  <p className="text-sm text-slate-300">Light gray text on white backgrounds, or stylish-but-unreadable text over product images. Many premium themes prioritize aesthetics over readability. <strong className="text-white">WCAG 1.4.3</strong></p>
                </div>
                <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-5">
                  <p className="font-semibold text-white mb-2">⌨️ Keyboard Navigation Failures</p>
                  <p className="text-sm text-slate-300">Dropdown menus, mega-navs, product variant selectors, and mobile hamburger menus that can't be operated without a mouse. <strong className="text-white">WCAG 2.1.1</strong></p>
                </div>
                <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-5">
                  <p className="font-semibold text-white mb-2">📝 Missing Form Labels</p>
                  <p className="text-sm text-slate-300">Newsletter signup forms, contact forms, and search boxes that use placeholder text instead of proper &lt;label&gt; elements. Screen readers can't identify the fields. <strong className="text-white">WCAG 1.3.1</strong></p>
                </div>
                <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-5">
                  <p className="font-semibold text-white mb-2">🔗 Empty or Vague Links</p>
                  <p className="text-sm text-slate-300">&quot;Click here,&quot; &quot;Read more,&quot; or icon-only buttons (cart icon, search icon) without accessible names. Users don't know where links go. <strong className="text-white">WCAG 2.4.4</strong></p>
                </div>
                <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-5">
                  <p className="font-semibold text-white mb-2">🔍 Missing Focus Indicators</p>
                  <p className="text-sm text-slate-300">Many themes remove the browser's default focus outline for aesthetics, making it impossible for keyboard users to see where they are on the page. <strong className="text-white">WCAG 2.4.7</strong></p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3 mt-8">App-Specific Issues</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Shopify apps are one of the biggest hidden accessibility risks. Every app you install injects code into your storefront, and most app developers don't test for accessibility:
              </p>
              <ul className="space-y-2 text-slate-300 mb-4">
                <li>• <strong className="text-white">Live chat widgets</strong> (Tidio, Zendesk) — Often trap keyboard focus or lack screen reader support</li>
                <li>• <strong className="text-white">Popup/email capture apps</strong> (Privy, Justuno) — Modal dialogs that can't be dismissed with keyboard, missing focus management</li>
                <li>• <strong className="text-white">Product review apps</strong> (Judge.me, Loox) — Star ratings without text alternatives, inaccessible pagination</li>
                <li>• <strong className="text-white">Countdown timers &amp; urgency apps</strong> — Auto-updating content without ARIA live regions, creating confusion for screen readers</li>
                <li>• <strong className="text-white">Quick view/quick add</strong> — Modal product views that break focus management and screen reader flow</li>
              </ul>
              <p className="text-slate-300 leading-relaxed">
                Before installing any app, check if the developer mentions accessibility or WCAG compliance. If they don't, assume the app will introduce new violations. Use our <Link href="/tools/free-accessibility-checker" className="text-sky-400 hover:text-sky-300">free accessibility checker</Link> to scan your store before and after installing apps.
              </p>
            </section>

            {/* Section 3 */}
            <section id="best-themes" className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">Shopify Themes With the Best Accessibility</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Your theme is the foundation of your store's accessibility. Here's how the most popular options compare:
              </p>

              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6 my-6">
                <p className="text-sm font-semibold text-emerald-400 mb-3">🏆 Best Pick: Dawn (Free)</p>
                <p className="text-slate-300 text-sm mb-3">
                  Shopify's default theme since Online Store 2.0, Dawn is built by Shopify's own team with accessibility as a stated priority. It includes:
                </p>
                <ul className="space-y-1 text-slate-300 text-sm">
                  <li>• Semantic HTML5 structure (proper heading hierarchy, landmarks)</li>
                  <li>• ARIA labels on interactive elements</li>
                  <li>• Keyboard-navigable menus, product selectors, and cart</li>
                  <li>• Skip-to-content link</li>
                  <li>• Decent color contrast in default settings (4.5:1+ for body text)</li>
                  <li>• Responsive design that maintains accessibility on mobile</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">Other Shopify Free Themes Worth Considering</h3>
              <ul className="space-y-3 text-slate-300 mb-6">
                <li>• <strong className="text-white">Taste</strong> — Food/restaurant focused. Good semantic markup, proper heading hierarchy. Some contrast issues in lighter color schemes.</li>
                <li>• <strong className="text-white">Crave</strong> — Similar to Dawn with a bolder design. Maintains keyboard navigation and ARIA support. Watch contrast ratios with custom colors.</li>
                <li>• <strong className="text-white">Sense</strong> — Health/beauty focused. Clean structure, good form labels. Default color palette has solid contrast.</li>
                <li>• <strong className="text-white">Craft</strong> — Minimalist design. Good HTML structure but some decorative images may need alt text review.</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">Premium Themes: Proceed With Caution</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Premium Shopify themes from the Theme Store or third-party marketplaces (ThemeForest, Out of the Sandbox) are a mixed bag. Many prioritize visual design over accessibility:
              </p>
              <ul className="space-y-2 text-slate-300 mb-4">
                <li>• <strong className="text-white">Prestige, Impulse, Empire</strong> — Popular premium themes that have improved accessibility over time but still have issues with mega-menus and quick-view modals</li>
                <li>• <strong className="text-white">Turbo (Out of the Sandbox)</strong> — One of the better premium options; the developer has made accessibility improvements</li>
                <li>• <strong className="text-white">ThemeForest themes</strong> — Generally the worst for accessibility. Most haven't been tested with screen readers or keyboard navigation</li>
              </ul>
              <p className="text-slate-300 leading-relaxed">
                <strong className="text-white">Our recommendation:</strong> Start with Dawn or a Shopify-built free theme. If you need a premium theme, scan it with <Link href="/scan" className="text-sky-400 hover:text-sky-300">RatedWithAI</Link> before purchasing — many theme stores offer live demo URLs you can test. Check the <Link href="/tools/color-contrast-checker" className="text-sky-400 hover:text-sky-300">color contrast checker</Link> against the theme's default palette.
              </p>
            </section>

            {/* Section 4 */}
            <section id="step-by-step" className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">Step-by-Step: Making Your Shopify Store Accessible</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Follow this prioritized remediation plan. Start with the highest-impact fixes and work down. Most store owners can complete steps 1–5 without a developer.
              </p>

              <div className="space-y-6">
                <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-400 font-semibold text-sm">1</span>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Run a Baseline Scan</h3>
                      <p className="text-slate-300 text-sm mb-3">
                        Before fixing anything, understand your current state. Run your store through an automated accessibility scanner to get a prioritized list of violations.
                      </p>
                      <p className="text-slate-300 text-sm">
                        <Link href="/scan" className="text-sky-400 hover:text-sky-300">Scan your Shopify store free with RatedWithAI →</Link> — you'll get a WCAG compliance score, violation count by severity, and specific fix guidance for each issue.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-400 font-semibold text-sm">2</span>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Add Alt Text to Every Product Image</h3>
                      <p className="text-slate-300 text-sm mb-3">
                        This is the single most common Shopify accessibility failure and the easiest to fix. In Shopify admin, go to <strong className="text-white">Products → [Product] → Media</strong> and click each image to add alt text.
                      </p>
                      <ul className="space-y-1 text-slate-300 text-sm">
                        <li>• ✅ &quot;Women's navy blue ribbed wool cardigan, front view&quot;</li>
                        <li>• ❌ &quot;IMG_4521.jpg&quot; or &quot;cardigan&quot; or empty</li>
                        <li>• Also add alt text to collection images, slideshow banners, and blog post images</li>
                        <li>• Use our <Link href="/tools/alt-text-generator" className="text-sky-400 hover:text-sky-300">AI alt text generator</Link> to create descriptive alt text quickly</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-400 font-semibold text-sm">3</span>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Fix Color Contrast</h3>
                      <p className="text-slate-300 text-sm mb-3">
                        WCAG 2.1 requires a minimum contrast ratio of <strong className="text-white">4.5:1 for normal text</strong> and <strong className="text-white">3:1 for large text</strong> (18px+ or 14px bold). Common Shopify contrast failures:
                      </p>
                      <ul className="space-y-1 text-slate-300 text-sm">
                        <li>• Light gray text on white backgrounds (sale prices, meta info)</li>
                        <li>• White text over product hero images without sufficient overlay</li>
                        <li>• Placeholder text in search and form inputs</li>
                        <li>• In Shopify admin: <strong className="text-white">Online Store → Themes → Customize → Theme settings → Colors</strong></li>
                        <li>• Test with <Link href="/tools/color-contrast-checker" className="text-sky-400 hover:text-sky-300">RatedWithAI's contrast checker</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-400 font-semibold text-sm">4</span>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Fix Form Labels and Inputs</h3>
                      <p className="text-slate-300 text-sm mb-3">
                        Every form input needs a visible <code className="bg-slate-800 px-1 rounded text-xs">&lt;label&gt;</code> element. Placeholder text alone is not sufficient — it disappears when users start typing and isn't reliably read by screen readers.
                      </p>
                      <ul className="space-y-1 text-slate-300 text-sm">
                        <li>• Newsletter signup: Add a label like &quot;Email address&quot; above the input</li>
                        <li>• Search box: Add a visually hidden label or aria-label=&quot;Search products&quot;</li>
                        <li>• Contact form: Ensure every field has an associated label element</li>
                        <li>• In your theme's Liquid templates, look for <code className="bg-slate-800 px-1 rounded text-xs">&lt;input&gt;</code> tags missing corresponding <code className="bg-slate-800 px-1 rounded text-xs">&lt;label&gt;</code> elements</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-400 font-semibold text-sm">5</span>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Ensure Keyboard Navigation Works</h3>
                      <p className="text-slate-300 text-sm mb-3">
                        Tab through your entire store using only your keyboard. Every interactive element must be reachable and operable:
                      </p>
                      <ul className="space-y-1 text-slate-300 text-sm">
                        <li>• <strong className="text-white">Tab key:</strong> Moves focus forward through links, buttons, and inputs</li>
                        <li>• <strong className="text-white">Shift+Tab:</strong> Moves focus backward</li>
                        <li>• <strong className="text-white">Enter/Space:</strong> Activates buttons and links</li>
                        <li>• <strong className="text-white">Arrow keys:</strong> Navigate within menus, dropdowns, and radio groups</li>
                        <li>• <strong className="text-white">Escape:</strong> Closes modals, popups, and dropdown menus</li>
                        <li>• Ensure a visible focus indicator (outline) appears on every focused element</li>
                        <li>• Test: homepage → navigation → product page → add to cart → cart → checkout</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-400 font-semibold text-sm">6</span>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Fix Heading Structure</h3>
                      <p className="text-slate-300 text-sm mb-3">
                        Screen reader users navigate by headings. Your page should have a logical heading hierarchy:
                      </p>
                      <ul className="space-y-1 text-slate-300 text-sm">
                        <li>• One <code className="bg-slate-800 px-1 rounded text-xs">&lt;h1&gt;</code> per page (product name, collection title, or page title)</li>
                        <li>• <code className="bg-slate-800 px-1 rounded text-xs">&lt;h2&gt;</code> for major sections (Description, Reviews, Related Products)</li>
                        <li>• Don't skip levels (no jumping from h2 to h4)</li>
                        <li>• Don't use headings just for visual styling — use CSS instead</li>
                        <li>• Check in your theme editor: many Shopify sections let you set heading levels</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-400 font-semibold text-sm">7</span>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Add ARIA Labels to Icon-Only Buttons</h3>
                      <p className="text-slate-300 text-sm mb-3">
                        Cart icons, search icons, social media icons, and close buttons need accessible names:
                      </p>
                      <ul className="space-y-1 text-slate-300 text-sm">
                        <li>• Add <code className="bg-slate-800 px-1 rounded text-xs">aria-label=&quot;Shopping cart&quot;</code> to your cart icon button</li>
                        <li>• Add <code className="bg-slate-800 px-1 rounded text-xs">aria-label=&quot;Search&quot;</code> to search icon buttons</li>
                        <li>• Add <code className="bg-slate-800 px-1 rounded text-xs">aria-label=&quot;Close menu&quot;</code> to hamburger/close buttons</li>
                        <li>• Social icons: <code className="bg-slate-800 px-1 rounded text-xs">aria-label=&quot;Follow us on Instagram&quot;</code></li>
                        <li>• In Dawn and newer themes, many of these are already included — verify with a scan</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-400 font-semibold text-sm">8</span>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Audit Your Apps</h3>
                      <p className="text-slate-300 text-sm mb-3">
                        Review every installed Shopify app for accessibility issues:
                      </p>
                      <ul className="space-y-1 text-slate-300 text-sm">
                        <li>• Scan your store with apps enabled, note violations from app-injected elements</li>
                        <li>• Test chat widgets, popups, and review widgets with keyboard only</li>
                        <li>• Remove or replace apps that create accessibility barriers</li>
                        <li>• Contact app developers about accessibility — many will fix issues if asked</li>
                        <li>• Prioritize: if an app's value doesn't justify its accessibility cost, remove it</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="apps-vs-scanning" className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">Shopify Accessibility Apps vs Automated Scanning</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Search the Shopify App Store for &quot;accessibility&quot; and you'll find dozens of apps promising instant ADA compliance. Most are <strong className="text-white">overlay widgets</strong> — and they're a trap.
              </p>

              <div className="grid gap-4 md:grid-cols-2 mb-6">
                <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-5">
                  <p className="font-semibold text-red-400 mb-2">❌ Overlay Widgets (Avoid)</p>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>• Add a toolbar icon to your site</li>
                    <li>• Claim to &quot;fix&quot; accessibility with JavaScript</li>
                    <li>• Don't modify your actual source code</li>
                    <li>• Can interfere with screen readers</li>
                    <li>• FTC fined accessiBe $1M for false claims</li>
                    <li>• Cited in 25% of ADA lawsuits as making sites worse</li>
                    <li>• Examples: accessiBe, UserWay, AudioEye widget</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5">
                  <p className="font-semibold text-emerald-400 mb-2">✅ Code-Based Scanning (Recommended)</p>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>• Identifies real WCAG violations in your code</li>
                    <li>• Provides specific, actionable fix instructions</li>
                    <li>• Powered by industry-standard engines (axe-core)</li>
                    <li>• Used by Microsoft, Google, US government</li>
                    <li>• You fix the root cause, not a bandaid</li>
                    <li>• Legitimate defense in ADA lawsuits</li>
                    <li>• Examples: RatedWithAI, axe DevTools, WAVE</li>
                  </ul>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed mb-4">
                The <Link href="/blog/accessibe-alternative" className="text-sky-400 hover:text-sky-300">overlay backlash</Link> is well-documented. Over 700 accessibility professionals signed the Overlay Fact Sheet opposing these tools. Courts have ruled that overlays don't constitute good-faith ADA compliance efforts. And the National Federation of the Blind formally opposes overlay widgets.
              </p>

              <div className="rounded-2xl border border-sky-500/30 bg-sky-500/5 p-6 my-6">
                <p className="text-sm font-semibold text-sky-400 mb-3">💡 What Actually Works for Shopify Stores</p>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>1. <strong className="text-white">Scan</strong> your store with an automated tool to identify violations</li>
                  <li>2. <strong className="text-white">Fix</strong> issues in your theme code, content, and settings</li>
                  <li>3. <strong className="text-white">Test</strong> manually with keyboard and screen reader</li>
                  <li>4. <strong className="text-white">Monitor</strong> with ongoing scans as you add products and install apps</li>
                </ul>
              </div>

              <p className="text-slate-300 leading-relaxed">
                This is how real accessibility works — not a magic JavaScript overlay. <Link href="/scan" className="text-sky-400 hover:text-sky-300">Start with a free scan</Link> to see exactly what needs fixing on your Shopify store.
              </p>
            </section>

            {/* Section 6 */}
            <section id="legal-risk" className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">Legal Risk for Shopify Store Owners</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                E-commerce is the number one target for ADA website lawsuits. If you're selling online, your legal exposure is real and growing.
              </p>

              <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 my-6">
                <p className="text-sm font-semibold text-rose-400 mb-3">📊 E-commerce ADA Lawsuit Data (2024)</p>
                <ul className="space-y-2 text-slate-300">
                  <li>• <strong className="text-white">4,605+</strong> federal ADA accessibility lawsuits filed</li>
                  <li>• <strong className="text-white">65%+</strong> targeted e-commerce and retail websites</li>
                  <li>• <strong className="text-white">Fashion &amp; apparel:</strong> Most-sued category (35% of e-commerce cases)</li>
                  <li>• <strong className="text-white">Home goods &amp; electronics:</strong> Second most-sued (22%)</li>
                  <li>• <strong className="text-white">Food &amp; beverage:</strong> Rapidly growing category (15%)</li>
                  <li>• <strong className="text-white">Average settlement:</strong> $10,000–$50,000 plus attorney fees and remediation</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">Who Files These Lawsuits?</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Most ADA website lawsuits are filed by a small number of serial plaintiff firms — often based in New York or California. They use automated scanning tools to find violations, then file demand letters or lawsuits targeting online stores. Shopify stores are easy targets because their URLs are publicly visible and many share common theme vulnerabilities.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">Your Legal Exposure Depends On</h3>
              <ul className="space-y-2 text-slate-300 mb-6">
                <li>• <strong className="text-white">Revenue size:</strong> Larger stores attract more attention, but even small stores get sued</li>
                <li>• <strong className="text-white">Physical presence:</strong> If you have a brick-and-mortar store, ADA Title III definitely applies</li>
                <li>• <strong className="text-white">State:</strong> California (Unruh Act: $4,000 minimum per violation) and New York are the highest-risk states</li>
                <li>• <strong className="text-white">Industry:</strong> Fashion, beauty, food, and consumer electronics face the most lawsuits</li>
                <li>• <strong className="text-white">Number of violations:</strong> More issues = higher settlement demands</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">How to Protect Your Shopify Store</h3>
              <ul className="space-y-2 text-slate-300 mb-4">
                <li>• <strong className="text-white">Document your accessibility efforts:</strong> Maintain a compliance timeline showing when you scanned, what you fixed, and your remediation plan</li>
                <li>• <strong className="text-white">Publish an accessibility statement:</strong> A public page declaring your commitment and providing a contact method for accessibility issues</li>
                <li>• <strong className="text-white">Maintain ongoing monitoring:</strong> Regular scans show good faith effort — courts look favorably on businesses actively improving</li>
                <li>• <strong className="text-white">Use the <Link href="/blog/ada-compliance-checklist-2026" className="text-sky-400 hover:text-sky-300">ADA compliance checklist</Link></strong> to track your progress systematically</li>
              </ul>

              <p className="text-slate-300 leading-relaxed">
                Read our detailed <Link href="/blog/website-accessibility-lawsuit-statistics-2026" className="text-sky-400 hover:text-sky-300">2026 lawsuit statistics</Link> and <Link href="/blog/ada-lawsuit-settlements-2026" className="text-sky-400 hover:text-sky-300">settlement data</Link> for the full picture. For more on how e-commerce specifically is impacted, see our <Link href="/blog/ecommerce-accessibility-guide" className="text-sky-400 hover:text-sky-300">e-commerce accessibility guide</Link>.
              </p>
            </section>

            {/* Section 7 */}
            <section id="testing" className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">How to Test Your Shopify Store for Accessibility</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Effective accessibility testing combines automated scanning (fast, broad coverage) with manual testing (catches what machines miss). Here's a complete testing protocol for Shopify stores.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">Automated Testing</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Automated tools catch approximately 30–40% of WCAG issues — mainly technical violations like missing alt text, contrast failures, and missing form labels. They're your first line of defense.
              </p>
              <ul className="space-y-3 text-slate-300 mb-6">
                <li>• <strong className="text-white"><Link href="/scan" className="text-sky-400 hover:text-sky-300">RatedWithAI</Link></strong> — Scan your Shopify store URL and get a WCAG compliance score with prioritized violations and fix instructions. Free tier available.</li>
                <li>• <strong className="text-white">axe DevTools</strong> — Free Chrome extension. Right-click → Inspect → axe DevTools tab. Good for page-by-page analysis.</li>
                <li>• <strong className="text-white">WAVE</strong> — Free web tool from WebAIM. Provides a visual overlay of issues directly on your page.</li>
                <li>• <strong className="text-white">Lighthouse (Chrome)</strong> — Built into Chrome DevTools. Limited accessibility checks but useful as a quick screen.</li>
              </ul>

              <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 my-6">
                <p className="text-sm font-semibold text-sky-400 mb-3">📋 Pages to Scan on Your Shopify Store</p>
                <ul className="space-y-1 text-slate-300 text-sm">
                  <li>• Homepage</li>
                  <li>• A product page (with variants, images, reviews)</li>
                  <li>• Collection/category page</li>
                  <li>• Cart page</li>
                  <li>• Contact/about page</li>
                  <li>• Blog post (if you have a blog)</li>
                  <li>• Search results page</li>
                  <li>• Any page with custom sections or apps</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3 mt-8">Manual Testing</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Manual testing catches the 60–70% of issues that automated tools miss — things like logical reading order, meaningful content, and real-world usability.
              </p>

              <h4 className="text-lg font-semibold text-white mb-2">Keyboard-Only Testing</h4>
              <p className="text-slate-300 leading-relaxed mb-4">
                Put your mouse away. Navigate your entire purchase flow with keyboard only:
              </p>
              <ol className="space-y-2 text-slate-300 mb-6 list-decimal list-inside">
                <li>Load your homepage. Can you see a focus indicator on each element as you Tab?</li>
                <li>Open the navigation menu. Can you reach every menu item with Tab and arrow keys?</li>
                <li>Navigate to a product page. Can you select variants (size, color)?</li>
                <li>Click &quot;Add to Cart&quot; with Enter/Space. Does it confirm the addition?</li>
                <li>Go to the cart. Can you update quantities and remove items?</li>
                <li>Proceed to checkout. Can you complete the entire form?</li>
                <li>Can you close any popups or modals with Escape?</li>
              </ol>

              <h4 className="text-lg font-semibold text-white mb-2">Screen Reader Testing</h4>
              <p className="text-slate-300 leading-relaxed mb-4">
                Test with a real screen reader to understand the experience of blind users:
              </p>
              <ul className="space-y-2 text-slate-300 mb-6">
                <li>• <strong className="text-white">Mac:</strong> VoiceOver (built-in, Cmd+F5 to toggle)</li>
                <li>• <strong className="text-white">Windows:</strong> NVDA (free download) or JAWS</li>
                <li>• <strong className="text-white">Mobile:</strong> VoiceOver (iOS) or TalkBack (Android)</li>
                <li>• Listen to how product names, prices, and descriptions are announced</li>
                <li>• Check that images have meaningful descriptions</li>
                <li>• Verify that buttons and links announce their purpose</li>
              </ul>

              <h4 className="text-lg font-semibold text-white mb-2">Color and Visual Testing</h4>
              <ul className="space-y-2 text-slate-300 mb-4">
                <li>• Use the <Link href="/tools/color-contrast-checker" className="text-sky-400 hover:text-sky-300">color contrast checker</Link> on your key text/background combinations</li>
                <li>• View your store in grayscale (check if information is conveyed by color alone)</li>
                <li>• Zoom to 200% — does the layout still work? Is text readable?</li>
                <li>• Test on mobile — does touch target size meet the 44×44px WCAG recommendation?</li>
              </ul>

              <p className="text-slate-300 leading-relaxed">
                For a complete testing methodology, see our <Link href="/blog/website-accessibility-testing-guide" className="text-sky-400 hover:text-sky-300">accessibility testing guide</Link>.
              </p>
            </section>

            {/* CTA Section */}
            <section className="rounded-2xl border border-sky-500/30 bg-gradient-to-br from-sky-500/10 to-purple-500/10 p-8 text-center mb-12">
              <h2 className="text-2xl font-bold text-white mb-3">Scan Your Shopify Store Free</h2>
              <p className="text-slate-300 mb-6 max-w-lg mx-auto">
                Get your WCAG compliance score in 60 seconds. See exactly what's broken, how to fix it, and track your progress over time.
              </p>
              <Link
                href="/scan"
                className="inline-block whitespace-nowrap rounded-xl bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
              >
                Scan Your Shopify Store Free →
              </Link>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-5">
                  <h3 className="text-lg font-semibold text-white mb-2">Is Shopify ADA compliant out of the box?</h3>
                  <p className="text-slate-300 text-sm">
                    No. Shopify provides the platform infrastructure, but ADA compliance depends on your theme, content, and installed apps. Shopify's default Dawn theme has good baseline accessibility, but most third-party themes have issues with color contrast, missing form labels, and keyboard navigation. The store owner is responsible for ensuring compliance.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-5">
                  <h3 className="text-lg font-semibold text-white mb-2">Can I get sued for an inaccessible Shopify store?</h3>
                  <p className="text-slate-300 text-sm">
                    Yes. E-commerce websites are the #1 target for ADA lawsuits, with over 65% of 2024 digital accessibility cases targeting online stores. Shopify stores are not exempt. Settlements typically range from $10,000 to $50,000 plus remediation costs and attorney fees. California and New York are the highest-risk states.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-5">
                  <h3 className="text-lg font-semibold text-white mb-2">What is the best accessible Shopify theme?</h3>
                  <p className="text-slate-300 text-sm">
                    Dawn, Shopify's free default theme, is the most accessible option. It includes semantic HTML5, ARIA labels, keyboard navigation support, skip-to-content links, and solid color contrast. Other good free options include Taste, Crave, and Sense. For premium themes, always scan with an accessibility checker before purchasing.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-5">
                  <h3 className="text-lg font-semibold text-white mb-2">Do Shopify accessibility apps (overlays) make my store compliant?</h3>
                  <p className="text-slate-300 text-sm">
                    No. Most Shopify accessibility apps are overlay widgets that don't fix underlying code issues. The FTC fined accessiBe $1 million for claiming its overlay made websites compliant. Courts have ruled that overlays don't constitute good-faith compliance, and they can interfere with real assistive technologies. Use code-based scanning instead.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-5">
                  <h3 className="text-lg font-semibold text-white mb-2">How do I test my Shopify store for accessibility?</h3>
                  <p className="text-slate-300 text-sm">
                    Combine automated scanning (RatedWithAI, axe DevTools, WAVE) with manual testing. Automated tools catch ~30-40% of WCAG issues. For manual testing, navigate your entire store with keyboard only, test with a screen reader (VoiceOver or NVDA), and check color contrast ratios. Test your homepage, product pages, cart, and full checkout flow.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-5">
                  <h3 className="text-lg font-semibold text-white mb-2">Does Shopify's built-in checkout meet ADA requirements?</h3>
                  <p className="text-slate-300 text-sm">
                    Shopify's hosted checkout has reasonable baseline accessibility since Shopify controls it directly. However, customizations, third-party payment gateways, and checkout extensions can introduce issues. Always test your complete checkout flow — including payment and confirmation — with keyboard navigation and screen readers.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Related Resources */}
          <section className="mt-16">
            <h2 className="text-2xl font-semibold text-white mb-6">Related Resources</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Link
                href="/tools/color-contrast-checker"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-5 transition hover:border-slate-500"
              >
                <p className="font-semibold text-sky-400">Color Contrast Checker</p>
                <p className="mt-2 text-sm text-slate-400">Test your Shopify theme colors against WCAG AA and AAA contrast ratios.</p>
              </Link>
              <Link
                href="/tools/alt-text-generator"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-5 transition hover:border-slate-500"
              >
                <p className="font-semibold text-sky-400">Alt Text Generator</p>
                <p className="mt-2 text-sm text-slate-400">Generate WCAG-compliant alt text for your product images with AI.</p>
              </Link>
              <Link
                href="/blog/ada-compliance-checklist-2026"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-5 transition hover:border-slate-500"
              >
                <p className="font-semibold text-white">ADA Compliance Checklist</p>
                <p className="mt-2 text-sm text-slate-400">Complete checklist to ensure your website meets ADA requirements in 2026.</p>
              </Link>
              <Link
                href="/blog/ecommerce-accessibility-guide"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-5 transition hover:border-slate-500"
              >
                <p className="font-semibold text-white">E-commerce Accessibility Guide</p>
                <p className="mt-2 text-sm text-slate-400">Comprehensive ADA compliance guide for all online stores, not just Shopify.</p>
              </Link>
              <Link
                href="/blog/accessibe-alternative"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-5 transition hover:border-slate-500"
              >
                <p className="font-semibold text-white">accessiBe Alternatives</p>
                <p className="mt-2 text-sm text-slate-400">Why overlay widgets fail and what to use instead for real accessibility.</p>
              </Link>
              <Link
                href="/blog/website-accessibility-testing-guide"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-5 transition hover:border-slate-500"
              >
                <p className="font-semibold text-white">Accessibility Testing Guide</p>
                <p className="mt-2 text-sm text-slate-400">Complete guide to automated and manual accessibility testing methods.</p>
              </Link>
            </div>
          </section>
        </article>

        <Footer />
      </div>
    </>
  );
}
