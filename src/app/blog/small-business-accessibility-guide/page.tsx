import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Website Accessibility for Small Business: ADA Compliance Guide 2026 | RatedWithAI",
  description:
    "Small business website accessibility guide. Learn ADA requirements, avoid lawsuits, and make your site WCAG compliant on any budget. Practical steps for 2026.",
  keywords:
    "small business website accessibility, ada compliance small business, wcag small business, ada website requirements small business, small business ada lawsuit",
};

export default function SmallBusinessAccessibilityGuide() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-sky-500/30 via-blue-500/20 to-purple-500/30 blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-gradient-to-tr from-indigo-500/30 via-blue-500/10 to-purple-500/30 blur-3xl" />

        <Header />
      </div>

      {/* Article Content */}
      <article className="mx-auto w-full max-w-4xl px-6 pb-24">
        {/* Hero */}
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-sky-400">
            Small Business Guide
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl leading-tight">
            Website Accessibility for Small Business: ADA Compliance Guide 2026
          </h1>
          <p className="mt-6 text-lg text-slate-300 leading-relaxed">
            You don&apos;t need a six-figure budget to make your website accessible. This practical guide walks small business owners through ADA compliance — what&apos;s required, what&apos;s at risk, and how to fix it without breaking the bank.
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
            <li><a href="#do-i-need" className="hover:text-sky-400 transition">Do Small Businesses Need to Comply with ADA?</a></li>
            <li><a href="#lawsuit-risk" className="hover:text-sky-400 transition">Understanding Your Lawsuit Risk</a></li>
            <li><a href="#common-issues" className="hover:text-sky-400 transition">The 10 Most Common Accessibility Issues</a></li>
            <li><a href="#fix-yourself" className="hover:text-sky-400 transition">What You Can Fix Yourself (Today)</a></li>
            <li><a href="#platform-guides" className="hover:text-sky-400 transition">Platform-Specific Guides (WordPress, Shopify, Wix, Squarespace)</a></li>
            <li><a href="#budget-solutions" className="hover:text-sky-400 transition">Budget-Friendly Accessibility Solutions</a></li>
            <li><a href="#automated-testing" className="hover:text-sky-400 transition">Automated Testing: What It Catches (And What It Misses)</a></li>
            <li><a href="#ongoing" className="hover:text-sky-400 transition">Making Accessibility an Ongoing Practice</a></li>
          </ul>
        </nav>

        {/* Main Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          
          <section id="do-i-need" className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">Do Small Businesses Need to Comply with ADA?</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              The short answer: <strong>yes</strong>. If your business serves the public and has a website, you&apos;re expected to make that website accessible. The Americans with Disabilities Act (ADA) doesn&apos;t have a small business exemption for websites.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              Here&apos;s what many small business owners don&apos;t realize: the ADA applies to &quot;places of public accommodation,&quot; and courts have consistently ruled that this includes websites — whether you have a physical location or operate entirely online. A local bakery with an ordering page, a freelance photographer with a portfolio site, and an e-commerce store shipping nationwide are all covered.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              The Department of Justice&apos;s 2024 rule update under ADA Title II specifically addressed web accessibility requirements for state and local governments, and the principles extend to private businesses under Title III. While there&apos;s no specific regulation that says &quot;your website must meet WCAG 2.1 Level AA,&quot; that&apos;s become the de facto standard courts use when evaluating compliance.
            </p>
            <p className="text-slate-300 leading-relaxed">
              The practical reality: if someone with a disability can&apos;t use your website to access the same services as everyone else, you&apos;re at risk. And that risk has grown substantially — ADA digital accessibility lawsuits increased by over 300% between 2018 and 2025.
            </p>
          </section>

          <section id="lawsuit-risk" className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">Understanding Your Lawsuit Risk</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Let&apos;s talk numbers. In 2024, over 4,000 ADA website accessibility lawsuits were filed in federal courts — and thousands more were settled through demand letters that never made it to court. While large retailers and restaurant chains receive the most suits, small businesses are increasingly targeted.
            </p>
            
            <div className="rounded-2xl border border-amber-800/40 bg-amber-900/20 p-6 mb-6">
              <p className="text-sm font-semibold text-amber-300 mb-3">⚠️ Who&apos;s getting sued?</p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• <strong>E-commerce stores</strong> — 65%+ of all digital ADA lawsuits</li>
                <li>• <strong>Restaurants with online ordering</strong> — especially post-COVID digital menus</li>
                <li>• <strong>Hotels and hospitality</strong> — booking systems are frequent targets</li>
                <li>• <strong>Healthcare providers</strong> — patient portals and appointment scheduling</li>
                <li>• <strong>Professional services</strong> — law firms, accountants, real estate agents</li>
              </ul>
            </div>

            <p className="text-slate-300 leading-relaxed mb-4">
              The typical demand letter settlement ranges from $5,000 to $25,000 for a small business. If it goes to court, costs jump to $50,000-$150,000+ when you factor in legal fees, remediation, and potential damages. For a small business, that can be existential.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              Several &quot;serial plaintiffs&quot; and their law firms file hundreds of nearly identical lawsuits per year, often using automated scanning tools to identify easy targets. Your local pizza shop with a WordPress site that has missing alt text on images? That&apos;s exactly what these firms look for.
            </p>
            <p className="text-slate-300 leading-relaxed">
              The good news: proactively making your site accessible isn&apos;t just the right thing to do — it&apos;s significantly cheaper than defending a lawsuit. Most small business sites can be brought into compliance for under $1,000, often far less.
            </p>
          </section>

          <section id="common-issues" className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">The 10 Most Common Accessibility Issues on Small Business Websites</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Based on our analysis of thousands of websites, these are the issues that appear on the vast majority of small business sites. The good news: most are straightforward to fix.
            </p>

            <div className="space-y-6">
              <div className="rounded-xl border border-slate-800/50 bg-slate-900/30 p-5">
                <h3 className="text-lg font-semibold text-white mb-2">1. Missing Alt Text on Images</h3>
                <p className="text-slate-300 text-sm mb-2">
                  Every image needs descriptive alternative text so screen readers can convey the content to blind users. Product photos, team headshots, and hero images are common offenders.
                </p>
                <p className="text-sky-400 text-sm">Fix: Add descriptive alt attributes to every meaningful image. Decorative images get empty alt=&quot;&quot;.</p>
              </div>

              <div className="rounded-xl border border-slate-800/50 bg-slate-900/30 p-5">
                <h3 className="text-lg font-semibold text-white mb-2">2. Low Color Contrast</h3>
                <p className="text-slate-300 text-sm mb-2">
                  Light gray text on white backgrounds, colored text on colored backgrounds — these make content unreadable for users with low vision. WCAG requires a minimum contrast ratio of 4.5:1 for normal text.
                </p>
                <p className="text-sky-400 text-sm">Fix: Use a contrast checker tool and ensure all text meets the 4.5:1 ratio (3:1 for large text).</p>
              </div>

              <div className="rounded-xl border border-slate-800/50 bg-slate-900/30 p-5">
                <h3 className="text-lg font-semibold text-white mb-2">3. Missing Form Labels</h3>
                <p className="text-slate-300 text-sm mb-2">
                  Contact forms, search bars, and email signup fields often use placeholder text instead of proper labels. Screen readers can&apos;t reliably read placeholder text, leaving users guessing what to enter.
                </p>
                <p className="text-sky-400 text-sm">Fix: Add visible &lt;label&gt; elements linked to each form field with the &quot;for&quot; attribute.</p>
              </div>

              <div className="rounded-xl border border-slate-800/50 bg-slate-900/30 p-5">
                <h3 className="text-lg font-semibold text-white mb-2">4. Keyboard Navigation Broken</h3>
                <p className="text-slate-300 text-sm mb-2">
                  If you can&apos;t tab through your entire website and interact with every element using only a keyboard, it&apos;s inaccessible to many users. Dropdown menus, modal dialogs, and custom components are frequent culprits.
                </p>
                <p className="text-sky-400 text-sm">Fix: Test by unplugging your mouse and navigating with Tab, Enter, Escape, and arrow keys.</p>
              </div>

              <div className="rounded-xl border border-slate-800/50 bg-slate-900/30 p-5">
                <h3 className="text-lg font-semibold text-white mb-2">5. Missing or Incorrect Heading Structure</h3>
                <p className="text-slate-300 text-sm mb-2">
                  Screen reader users navigate by headings. If you skip heading levels (H1 → H3) or use headings for visual styling rather than document structure, navigation becomes confusing and disorienting.
                </p>
                <p className="text-sky-400 text-sm">Fix: Use one H1 per page, then H2s for main sections, H3s for subsections. Never skip levels.</p>
              </div>

              <div className="rounded-xl border border-slate-800/50 bg-slate-900/30 p-5">
                <h3 className="text-lg font-semibold text-white mb-2">6. Links with No Context</h3>
                <p className="text-slate-300 text-sm mb-2">
                  &quot;Click here,&quot; &quot;Learn more,&quot; and &quot;Read more&quot; links make no sense out of context. Screen reader users often navigate by pulling up a list of all links on a page — and a page full of &quot;Click here&quot; is useless.
                </p>
                <p className="text-sky-400 text-sm">Fix: Use descriptive link text like &quot;View our pricing plans&quot; or &quot;Read the full accessibility report.&quot;</p>
              </div>

              <div className="rounded-xl border border-slate-800/50 bg-slate-900/30 p-5">
                <h3 className="text-lg font-semibold text-white mb-2">7. No Skip Navigation Link</h3>
                <p className="text-slate-300 text-sm mb-2">
                  Keyboard users must tab through your entire navigation menu on every single page before reaching the main content. A &quot;Skip to main content&quot; link at the top solves this.
                </p>
                <p className="text-sky-400 text-sm">Fix: Add a visually hidden link as the first focusable element that jumps to the main content area.</p>
              </div>

              <div className="rounded-xl border border-slate-800/50 bg-slate-900/30 p-5">
                <h3 className="text-lg font-semibold text-white mb-2">8. Auto-Playing Media</h3>
                <p className="text-slate-300 text-sm mb-2">
                  Videos or audio that play automatically are disruptive for screen reader users (whose audio output gets buried) and distressing for users with cognitive disabilities or PTSD.
                </p>
                <p className="text-sky-400 text-sm">Fix: Never autoplay media with sound. If video autoplays, ensure it&apos;s muted with visible controls.</p>
              </div>

              <div className="rounded-xl border border-slate-800/50 bg-slate-900/30 p-5">
                <h3 className="text-lg font-semibold text-white mb-2">9. Missing Focus Indicators</h3>
                <p className="text-slate-300 text-sm mb-2">
                  Many sites remove the browser&apos;s default focus outline (the blue ring around focused elements) for aesthetic reasons. This makes keyboard navigation nearly impossible since users can&apos;t see where they are on the page.
                </p>
                <p className="text-sky-400 text-sm">Fix: Never remove focus outlines. Style them to match your brand instead: outline: 2px solid #yourColor.</p>
              </div>

              <div className="rounded-xl border border-slate-800/50 bg-slate-900/30 p-5">
                <h3 className="text-lg font-semibold text-white mb-2">10. PDFs and Documents Not Accessible</h3>
                <p className="text-slate-300 text-sm mb-2">
                  Menus as PDF images, contracts as scanned documents, and forms as flat PDFs are completely inaccessible to screen readers. If critical information is locked in inaccessible documents, you have a problem.
                </p>
                <p className="text-sky-400 text-sm">Fix: Use tagged PDFs, provide HTML alternatives, or convert essential documents to web pages.</p>
              </div>
            </div>
          </section>

          <section id="fix-yourself" className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">What You Can Fix Yourself (Today)</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              You don&apos;t need to hire an accessibility consultant to make meaningful progress. Here&apos;s a prioritized checklist you can work through right now:
            </p>

            <div className="rounded-2xl border border-emerald-800/40 bg-emerald-900/20 p-6 mb-6">
              <p className="text-sm font-semibold text-emerald-300 mb-4">✅ Quick Wins (30 minutes or less)</p>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex gap-2"><span className="text-emerald-400">1.</span> Run your site through <Link href="/scan" className="text-sky-400 hover:text-sky-300">RatedWithAI&apos;s free scanner</Link> to get a baseline score</li>
                <li className="flex gap-2"><span className="text-emerald-400">2.</span> Add alt text to every image on your homepage and key landing pages</li>
                <li className="flex gap-2"><span className="text-emerald-400">3.</span> Check color contrast on your primary text using WebAIM&apos;s Contrast Checker</li>
                <li className="flex gap-2"><span className="text-emerald-400">4.</span> Add labels to all form fields (contact form, search bar, email signup)</li>
                <li className="flex gap-2"><span className="text-emerald-400">5.</span> Replace generic link text (&quot;Click here&quot;) with descriptive text</li>
                <li className="flex gap-2"><span className="text-emerald-400">6.</span> Ensure your site has a clear heading hierarchy (one H1, sequential H2s/H3s)</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-sky-800/40 bg-sky-900/20 p-6 mb-6">
              <p className="text-sm font-semibold text-sky-300 mb-4">🔧 Medium Effort (1-2 hours)</p>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex gap-2"><span className="text-sky-400">7.</span> Add a &quot;Skip to main content&quot; link at the top of every page</li>
                <li className="flex gap-2"><span className="text-sky-400">8.</span> Test keyboard navigation: Tab through your entire site without a mouse</li>
                <li className="flex gap-2"><span className="text-sky-400">9.</span> Ensure focus indicators are visible on all interactive elements</li>
                <li className="flex gap-2"><span className="text-sky-400">10.</span> Add captions to any videos on your site</li>
                <li className="flex gap-2"><span className="text-sky-400">11.</span> Set the language attribute on your HTML tag (&lt;html lang=&quot;en&quot;&gt;)</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-purple-800/40 bg-purple-900/20 p-6">
              <p className="text-sm font-semibold text-purple-300 mb-4">🎯 Deeper Work (Half day)</p>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex gap-2"><span className="text-purple-400">12.</span> Review and fix all PDF documents or provide HTML alternatives</li>
                <li className="flex gap-2"><span className="text-purple-400">13.</span> Test with a real screen reader (NVDA is free for Windows, VoiceOver is built into Mac)</li>
                <li className="flex gap-2"><span className="text-purple-400">14.</span> Ensure all custom components (dropdowns, accordions, tabs) are keyboard accessible</li>
                <li className="flex gap-2"><span className="text-purple-400">15.</span> Add ARIA labels to complex interactive elements that need additional context</li>
              </ul>
            </div>
          </section>

          <section id="platform-guides" className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">Platform-Specific Accessibility Tips</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Most small businesses use website builders or CMS platforms. Here&apos;s what to watch for on each:
            </p>

            <div className="space-y-6">
              <div className="rounded-xl border border-slate-800/50 bg-slate-900/30 p-6">
                <h3 className="text-lg font-semibold text-white mb-3">WordPress</h3>
                <p className="text-slate-300 text-sm mb-3">
                  WordPress powers over 40% of all websites, and accessibility varies wildly depending on your theme and plugins.
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• Choose a theme tagged &quot;Accessibility Ready&quot; in the WordPress theme directory</li>
                  <li>• Install the WP Accessibility plugin for quick fixes (skip links, focus outlines, toolbar)</li>
                  <li>• Use the block editor (Gutenberg) — it produces better semantic HTML than most page builders</li>
                  <li>• Avoid page builders that generate excessive div nesting (bad for screen readers)</li>
                  <li>• Set alt text on every image in the media library — WordPress makes this easy</li>
                  <li>• Test your contact form plugin (Gravity Forms and Contact Form 7 have decent accessibility)</li>
                </ul>
              </div>

              <div className="rounded-xl border border-slate-800/50 bg-slate-900/30 p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Shopify</h3>
                <p className="text-slate-300 text-sm mb-3">
                  Shopify has made significant accessibility improvements in recent years, but themes and apps can introduce issues.
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• Use Shopify&apos;s Dawn theme or themes built on it — they&apos;re designed with accessibility in mind</li>
                  <li>• Add alt text to all product images (Products → Edit → Image alt text)</li>
                  <li>• Test your checkout flow with keyboard-only navigation</li>
                  <li>• Be cautious with third-party apps — they often inject inaccessible widgets</li>
                  <li>• Use Shopify&apos;s built-in SEO features — they overlap significantly with accessibility (headings, alt text, structured data)</li>
                </ul>
              </div>

              <div className="rounded-xl border border-slate-800/50 bg-slate-900/30 p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Wix</h3>
                <p className="text-slate-300 text-sm mb-3">
                  Wix has an Accessibility Wizard built in that catches many issues, but drag-and-drop design freedom can create structural problems.
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• Run the built-in Accessibility Wizard (Site Settings → Accessibility)</li>
                  <li>• Set heading levels manually — Wix won&apos;t always assign them logically based on visual size</li>
                  <li>• Add alt text through the image settings panel for every image</li>
                  <li>• Enable the Wix Accessibility Panel to check for issues during editing</li>
                  <li>• Be aware: absolute positioning in Wix can cause reading order issues for screen readers</li>
                </ul>
              </div>

              <div className="rounded-xl border border-slate-800/50 bg-slate-900/30 p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Squarespace</h3>
                <p className="text-slate-300 text-sm mb-3">
                  Squarespace templates generally produce clean, semantic HTML, but some design patterns need attention.
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• Squarespace automatically generates alt text from image filenames — but rename files descriptively before uploading</li>
                  <li>• Use the built-in accessibility panel to review page structure</li>
                  <li>• Avoid full-width background videos without text alternatives</li>
                  <li>• Test forms — Squarespace&apos;s built-in forms have good label support</li>
                  <li>• Choose templates with clear visual hierarchy and sufficient contrast</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="budget-solutions" className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">Budget-Friendly Accessibility Solutions</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Small businesses don&apos;t have enterprise budgets, and they shouldn&apos;t need them. Here&apos;s a realistic breakdown of what accessibility costs:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="py-3 pr-4 text-slate-300 font-semibold">Approach</th>
                    <th className="py-3 pr-4 text-slate-300 font-semibold">Cost</th>
                    <th className="py-3 text-slate-300 font-semibold">Best For</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-800">
                    <td className="py-3 pr-4">DIY with free tools</td>
                    <td className="py-3 pr-4 text-emerald-400">$0</td>
                    <td className="py-3">Simple sites (5-20 pages)</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 pr-4">Automated scanning + DIY fixes</td>
                    <td className="py-3 pr-4 text-emerald-400">$10-50/mo</td>
                    <td className="py-3">Ongoing monitoring</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 pr-4">Freelance accessibility audit</td>
                    <td className="py-3 pr-4 text-amber-400">$500-2,000</td>
                    <td className="py-3">One-time comprehensive review</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 pr-4">Agency remediation</td>
                    <td className="py-3 pr-4 text-red-400">$5,000-25,000</td>
                    <td className="py-3">Complex sites, e-commerce</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Enterprise accessibility platform</td>
                    <td className="py-3 pr-4 text-red-400">$10,000+/yr</td>
                    <td className="py-3">Large organizations</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-2xl border border-sky-800/40 bg-sky-900/20 p-6 mb-6">
              <p className="text-sm font-semibold text-sky-300 mb-3">💡 Our recommendation for small businesses:</p>
              <p className="text-sm text-slate-300">
                Start with a <Link href="/scan" className="text-sky-400 hover:text-sky-300">free accessibility scan</Link> to understand where you stand. Fix the quick wins yourself (alt text, contrast, form labels). Then use an affordable monitoring tool to catch issues as they arise. Most small business sites can achieve solid WCAG 2.1 AA compliance for under $100/month — a fraction of what a single demand letter would cost you.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-800/40 bg-amber-900/20 p-6">
              <p className="text-sm font-semibold text-amber-300 mb-3">⚠️ A warning about accessibility overlays</p>
              <p className="text-sm text-slate-300">
                You may have seen &quot;one-line-of-code&quot; accessibility widgets that promise instant compliance. These overlay tools (like accessiBe, UserWay, and similar) are controversial in the accessibility community. The National Federation of the Blind has publicly criticized them, and several lawsuits have been filed against companies using them — arguing that overlays don&apos;t actually make sites accessible. Our recommendation: fix the underlying issues instead of layering a band-aid on top.
              </p>
            </div>
          </section>

          <section id="automated-testing" className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">Automated Testing: What It Catches (And What It Misses)</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Automated accessibility testing tools — including RatedWithAI — can detect about 30-40% of WCAG violations. That might sound low, but the issues they catch are the most common and most easily fixable ones.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="rounded-xl border border-emerald-800/40 bg-emerald-900/20 p-5">
                <p className="text-sm font-semibold text-emerald-300 mb-3">✅ What automated tools catch:</p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• Missing alt text on images</li>
                  <li>• Insufficient color contrast</li>
                  <li>• Missing form labels</li>
                  <li>• Empty links and buttons</li>
                  <li>• Missing document language</li>
                  <li>• Duplicate IDs</li>
                  <li>• Missing ARIA attributes</li>
                  <li>• Heading level violations</li>
                </ul>
              </div>

              <div className="rounded-xl border border-red-800/40 bg-red-900/20 p-5">
                <p className="text-sm font-semibold text-red-300 mb-3">❌ What requires manual testing:</p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• Alt text quality (is it actually descriptive?)</li>
                  <li>• Keyboard navigation flow (logical tab order)</li>
                  <li>• Screen reader experience</li>
                  <li>• Meaningful content structure</li>
                  <li>• Focus management in dynamic content</li>
                  <li>• Custom component behavior</li>
                  <li>• Cognitive load and clarity</li>
                  <li>• Touch target sizing on mobile</li>
                </ul>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed">
              The best approach is a combination: use automated tools for regular scanning and catch the easy stuff, then supplement with periodic manual testing. Even spending 15 minutes tabbing through your site with a keyboard each month will catch issues that no scanner can.
            </p>
          </section>

          <section id="ongoing" className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">Making Accessibility an Ongoing Practice</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Accessibility isn&apos;t a one-time fix — it&apos;s an ongoing practice. Every time you add a blog post, update a product page, or change your design, you could introduce new accessibility issues. Here&apos;s how to build accessibility into your workflow:
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex gap-4 items-start">
                <span className="bg-sky-500/20 text-sky-400 text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-0.5">1</span>
                <div>
                  <p className="text-white font-semibold text-sm">Set up automated monitoring</p>
                  <p className="text-slate-300 text-sm">Use a tool like RatedWithAI to scan your site regularly and alert you when new issues appear. Catching problems early is far cheaper than fixing them after a demand letter arrives.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="bg-sky-500/20 text-sky-400 text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-0.5">2</span>
                <div>
                  <p className="text-white font-semibold text-sm">Create a content checklist</p>
                  <p className="text-slate-300 text-sm">Before publishing any new content, check: Does every image have alt text? Are headings in order? Are links descriptive? Is the color contrast sufficient? Make this part of your publishing workflow.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="bg-sky-500/20 text-sky-400 text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-0.5">3</span>
                <div>
                  <p className="text-white font-semibold text-sm">Test with real users when possible</p>
                  <p className="text-slate-300 text-sm">Nothing replaces feedback from actual users with disabilities. Organizations like Knowbility and Fable connect businesses with disability testers. Even occasional testing provides invaluable insights.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="bg-sky-500/20 text-sky-400 text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-0.5">4</span>
                <div>
                  <p className="text-white font-semibold text-sm">Document your efforts</p>
                  <p className="text-slate-300 text-sm">Keep an accessibility statement on your website describing your commitment, standards you&apos;re following, and how users can report issues. This demonstrates good faith and can be helpful if you ever face legal scrutiny.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="bg-sky-500/20 text-sky-400 text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-0.5">5</span>
                <div>
                  <p className="text-white font-semibold text-sm">Stay informed</p>
                  <p className="text-slate-300 text-sm">WCAG 2.2 was published in 2023, and WCAG 3.0 is in development. Follow the Web Accessibility Initiative (WAI) for updates. Laws and standards evolve, and staying current is part of responsible business practice.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">The Bottom Line</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Website accessibility isn&apos;t just about avoiding lawsuits — though that&apos;s a compelling reason on its own. It&apos;s about reaching the 1 in 4 adults in the US who live with a disability, improving your SEO (Google rewards accessible sites), and providing a better experience for all your customers.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              The barrier to entry is lower than most people think. Start with a free scan, fix the easy issues, and build from there. You don&apos;t need to be perfect on day one — you need to be making progress.
            </p>

            <div className="rounded-2xl border border-sky-800/40 bg-gradient-to-br from-sky-900/30 to-blue-900/30 p-8 text-center">
              <p className="text-xl font-semibold text-white mb-3">Check your website&apos;s accessibility score</p>
              <p className="text-slate-300 mb-6">Get a free AI-powered accessibility audit in under 60 seconds.</p>
              <Link
                href="/scan"
                className="inline-block rounded-xl bg-sky-500 px-8 py-3 text-sm font-semibold text-white hover:bg-sky-400 transition"
              >
                Scan Your Site Free →
              </Link>
            </div>
          </section>

          {/* Related Articles */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Related Guides</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/ada-compliance-checklist-2026" className="rounded-xl border border-slate-800/50 bg-slate-900/30 p-5 hover:border-sky-800/50 transition block">
                <p className="text-sm font-semibold text-white mb-1">ADA Compliance Checklist 2026</p>
                <p className="text-sm text-slate-400">Step-by-step checklist for full ADA website compliance.</p>
              </Link>
              <Link href="/blog/how-to-fix-common-wcag-failures" className="rounded-xl border border-slate-800/50 bg-slate-900/30 p-5 hover:border-sky-800/50 transition block">
                <p className="text-sm font-semibold text-white mb-1">How to Fix Common WCAG Failures</p>
                <p className="text-sm text-slate-400">Practical fixes for the most frequent accessibility violations.</p>
              </Link>
              <Link href="/blog/ada-lawsuit-settlements-2026" className="rounded-xl border border-slate-800/50 bg-slate-900/30 p-5 hover:border-sky-800/50 transition block">
                <p className="text-sm font-semibold text-white mb-1">ADA Lawsuit Settlements 2026</p>
                <p className="text-sm text-slate-400">Recent cases and what they mean for your business.</p>
              </Link>
              <Link href="/blog/ecommerce-accessibility-guide" className="rounded-xl border border-slate-800/50 bg-slate-900/30 p-5 hover:border-sky-800/50 transition block">
                <p className="text-sm font-semibold text-white mb-1">E-commerce Accessibility Guide</p>
                <p className="text-sm text-slate-400">Complete ADA compliance guide for online stores.</p>
              </Link>
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </div>
  );
}
