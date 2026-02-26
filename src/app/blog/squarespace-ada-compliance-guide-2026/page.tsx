/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title:
    "Squarespace ADA Compliance Guide 2026: Make Your Site Accessible & Avoid Lawsuits | RatedWithAI",
  description:
    "Complete guide to making your Squarespace website ADA compliant in 2026. Fix WCAG accessibility issues, avoid lawsuits, and reach more customers. Step-by-step with free scanner.",
  openGraph: {
    title: "Squarespace ADA Compliance Guide 2026: Protect Your Site from Lawsuits",
    description:
      "Squarespace sites aren't ADA compliant by default. Learn how to fix accessibility issues, meet WCAG 2.1 AA, and protect your business from lawsuits averaging $15K-$50K.",
    type: "article",
    publishedTime: "2026-02-25T00:00:00.000Z",
    authors: ["RatedWithAI Team"],
  },
  keywords: [
    "squarespace ada compliance",
    "squarespace accessibility",
    "squarespace ada compliant",
    "is squarespace ada compliant",
    "squarespace wcag compliance",
    "squarespace accessibility issues",
    "squarespace ada lawsuit",
    "squarespace accessibility audit",
    "squarespace accessibility checker",
    "make squarespace site accessible",
    "squarespace ada requirements",
    "squarespace accessibility guide 2026",
    "squarespace wcag 2.1",
    "squarespace website accessibility",
    "squarespace section 508",
  ],
  alternates: {
    canonical: "https://ratedwithai.com/blog/squarespace-ada-compliance-guide-2026",
  },
};

export default function SquarespaceADACompliancePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Squarespace ADA Compliance Guide 2026: Make Your Site Accessible & Avoid Lawsuits",
      description:
        "Complete guide to making your Squarespace website ADA compliant. Covers WCAG 2.1 AA requirements, common Squarespace accessibility issues, template fixes, custom code, and ongoing monitoring.",
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
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to Make Your Squarespace Website ADA Compliant",
      description: "Step-by-step guide to achieving WCAG 2.1 AA compliance on your Squarespace website.",
      step: [
        {
          "@type": "HowToStep",
          name: "Run a Free Accessibility Scan",
          text: "Use an automated accessibility scanner to identify current WCAG violations on your Squarespace site. Focus on your homepage, key landing pages, contact forms, and portfolio or product pages.",
        },
        {
          "@type": "HowToStep",
          name: "Fix Template-Level Issues",
          text: "Review your Squarespace template's color contrast, heading hierarchy, and navigation structure. Switch to a 7.1 template if possible, as they have better built-in accessibility than older 7.0 templates.",
        },
        {
          "@type": "HowToStep",
          name: "Add Alt Text to All Images",
          text: "Go to each page in Squarespace, click every image block, and add descriptive alt text. For decorative images, mark them as decorative. Include product details, context, and key information.",
        },
        {
          "@type": "HowToStep",
          name: "Test Keyboard Navigation",
          text: "Navigate your entire site using only the Tab key and Enter. Ensure every link, button, form field, and interactive element is reachable and usable without a mouse.",
        },
        {
          "@type": "HowToStep",
          name: "Fix Forms and Interactive Elements",
          text: "Ensure all contact forms, newsletter signups, and interactive elements have proper labels, error messages, and keyboard accessibility.",
        },
        {
          "@type": "HowToStep",
          name: "Set Up Continuous Monitoring",
          text: "Install an accessibility monitoring tool to catch new violations as you update content, change templates, or add new pages. Regular monitoring prevents compliance regression.",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Squarespace ADA compliant by default?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. While Squarespace has improved accessibility in its newer 7.1 templates, no Squarespace site is fully ADA compliant out of the box. Squarespace's own accessibility page states: 'Squarespace gives every customer the ability to customize their site. This sometimes means the end product is not fully accessible to everyone.' The site owner is responsible for ensuring compliance, including adding alt text, maintaining color contrast, and ensuring keyboard navigation works.",
          },
        },
        {
          "@type": "Question",
          name: "Can my Squarespace site be sued for ADA violations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Any website that serves as a 'place of public accommodation' can be sued under ADA Title III. This includes business websites, online stores, and service provider sites built on Squarespace. Over 4,000 ADA website lawsuits were filed in 2025, with settlements typically ranging from $5,000 to $25,000 for small businesses, plus $3,000-$10,000 in legal defense costs.",
          },
        },
        {
          "@type": "Question",
          name: "Does Squarespace offer accessibility tools?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Squarespace provides limited built-in accessibility features: semantic HTML in newer templates, alt text fields for images, and some ARIA landmarks. However, it does not include a built-in accessibility checker, automatic alt text generation, or compliance monitoring. You'll need external tools to audit and monitor your site's accessibility status.",
          },
        },
        {
          "@type": "Question",
          name: "What's the difference between Squarespace 7.0 and 7.1 for accessibility?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Squarespace 7.1 templates have significantly better accessibility than 7.0. Version 7.1 includes improved semantic HTML structure, better keyboard navigation support, more consistent heading hierarchies, and updated ARIA labels. If you're on 7.0, migrating to 7.1 is one of the most impactful accessibility improvements you can make.",
          },
        },
        {
          "@type": "Question",
          name: "How much does Squarespace ADA compliance cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Basic compliance can be achieved for free using DIY fixes and free scanning tools. Automated monitoring tools cost $29-99/month. A professional accessibility audit costs $3,000-$15,000. For comparison, an ADA lawsuit typically costs $15,000-$50,000+ in settlement and legal fees, making the $29/month for continuous monitoring a fraction of the cost.",
          },
        },
        {
          "@type": "Question",
          name: "Do accessibility overlay plugins work on Squarespace?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Accessibility overlays and widget plugins do not make your site ADA compliant. The National Federation of the Blind has publicly condemned overlay solutions, courts have not accepted them as proof of compliance, and over 400 websites using overlays were sued for accessibility violations in 2024 alone. These tools add a visible widget but don't fix underlying code issues. Use code-level scanning and manual remediation instead.",
          },
        },
        {
          "@type": "Question",
          name: "Which Squarespace templates are most accessible?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "All Squarespace 7.1 templates share the same underlying framework, so accessibility differences between 7.1 templates are minimal. The key factor is how you configure the template — your color choices, heading structure, image alt text, and custom code. For 7.0 users, templates with simpler navigation structures (like Brine or Bedford) tend to have fewer keyboard accessibility issues than those with complex galleries or parallax effects.",
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
              Squarespace ADA Compliance Guide 2026:{" "}
              <span className="text-purple-400">
                Make Your Site Accessible & Avoid Lawsuits
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Squarespace powers over 4 million websites — and none of them are ADA compliant
              by default. This is the complete guide to fixing accessibility issues on your
              Squarespace site before a lawsuit finds you first.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <span>Published: February 25, 2026</span>
              <span>•</span>
              <span>15 min read</span>
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
                  Squarespace sites are NOT ADA compliant by default
                </p>
                <p className="text-sm text-gray-300">
                  Squarespace&apos;s own accessibility page states: &quot;This sometimes means the end product is not
                  fully accessible to everyone.&quot; The responsibility falls on you — the site owner.
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
                <a href="#why-ada" className="text-purple-400 hover:text-purple-300 transition">1. Why Your Squarespace Site Needs ADA Compliance</a>
                <a href="#is-squarespace-compliant" className="text-purple-400 hover:text-purple-300 transition">2. Is Squarespace ADA Compliant by Default?</a>
                <a href="#7-0-vs-7-1" className="text-purple-400 hover:text-purple-300 transition">3. Squarespace 7.0 vs 7.1: Accessibility Differences</a>
                <a href="#common-issues" className="text-purple-400 hover:text-purple-300 transition">4. Most Common Squarespace Accessibility Issues</a>
                <a href="#step-by-step" className="text-purple-400 hover:text-purple-300 transition">5. Step-by-Step Compliance Guide</a>
                <a href="#template-audit" className="text-purple-400 hover:text-purple-300 transition">6. Template Accessibility Audit</a>
                <a href="#images-media" className="text-purple-400 hover:text-purple-300 transition">7. Images, Video & Media Accessibility</a>
                <a href="#forms-navigation" className="text-purple-400 hover:text-purple-300 transition">8. Forms, Navigation & Interactive Elements</a>
                <a href="#custom-code" className="text-purple-400 hover:text-purple-300 transition">9. Custom Code & Third-Party Integrations</a>
                <a href="#overlays-warning" className="text-purple-400 hover:text-purple-300 transition">10. Why Overlay Widgets Won&apos;t Protect You</a>
                <a href="#ecommerce" className="text-purple-400 hover:text-purple-300 transition">11. Squarespace Commerce Accessibility</a>
                <a href="#monitoring" className="text-purple-400 hover:text-purple-300 transition">12. Ongoing Monitoring & Maintenance</a>
                <a href="#cost-comparison" className="text-purple-400 hover:text-purple-300 transition">13. Cost: Compliance vs. Lawsuit</a>
                <a href="#faq" className="text-purple-400 hover:text-purple-300 transition">14. Frequently Asked Questions</a>
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
                1. Why Your Squarespace Site Needs ADA Compliance
              </h2>
              <p className="text-gray-300 mb-4">
                If you have a Squarespace website for your business, portfolio, restaurant, or
                service — you&apos;re legally required to make it accessible. Here&apos;s why this
                isn&apos;t optional in 2026:
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 text-center">
                  <div className="text-3xl font-bold text-red-400 mb-2">4,000+</div>
                  <p className="text-sm text-gray-400">
                    ADA website lawsuits filed in 2025
                  </p>
                </div>
                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">$15K–$50K</div>
                  <p className="text-sm text-gray-400">
                    average lawsuit cost (settlement + legal fees)
                  </p>
                </div>
                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">1 in 4</div>
                  <p className="text-sm text-gray-400">
                    US adults live with a disability (CDC)
                  </p>
                </div>
              </div>

              <p className="text-gray-300 mb-4">
                The <strong>Americans with Disabilities Act (ADA)</strong> requires that places of public
                accommodation be accessible to people with disabilities. Federal courts have consistently
                ruled that websites qualify — including business sites, portfolios, and online stores built
                on Squarespace.
              </p>

              <p className="text-gray-300 mb-4">
                ADA lawsuits against websites have grown every year since 2018. Plaintiff firms use automated
                scanning to identify sites with obvious violations, then file lawsuits in bulk. <strong>90%
                of these lawsuits come from just 16 law firms</strong>, and they specifically target small
                businesses that are unlikely to fight the case in court.
              </p>

              <p className="text-gray-300 mb-4">
                Beyond legal protection, accessible websites perform better. They rank higher in search engines
                (Google rewards semantic HTML and alt text), reach more customers (26% of US adults have a
                disability per the CDC), and provide a better experience for everyone — including people on
                mobile devices, older users, and those with temporary impairments.
              </p>

              <p className="text-gray-300">
                The compliance standard used is <strong>WCAG 2.1 Level AA</strong> — the Web Content Accessibility
                Guidelines published by the W3C. The Department of Justice has explicitly cited WCAG 2.1 AA as
                the standard in its{" "}
                <Link href="/blog/ada-title-ii-compliance-guide" className="text-purple-400 hover:text-purple-300 underline">
                  ADA Title II final rule
                </Link>{" "}
                (April 2024), and courts consistently use it as the benchmark in Title III cases.
              </p>
            </section>

            {/* Section 2 */}
            <section id="is-squarespace-compliant">
              <h2 className="text-3xl font-bold mb-6">
                2. Is Squarespace ADA Compliant by Default?
              </h2>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                  Short Answer: No.
                </h3>
                <p className="text-gray-300">
                  Squarespace&apos;s own{" "}
                  <a href="https://www.squarespace.com/accessibility" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">
                    accessibility page
                  </a>{" "}
                  states: <em>&quot;Squarespace gives every customer the ability to customize their site.
                  This sometimes means the end product is not fully accessible to everyone.&quot;</em> The
                  platform provides tools, but <strong>compliance is your responsibility</strong>.
                </p>
              </div>

              <p className="text-gray-300 mb-4">
                Here&apos;s what Squarespace provides vs. what falls on you:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-green-400 mb-3">
                    ✅ What Squarespace Provides
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Semantic HTML in 7.1 templates</li>
                    <li>• Alt text fields for images</li>
                    <li>• Basic ARIA landmarks in newer templates</li>
                    <li>• Skip-to-content links (7.1)</li>
                    <li>• Focus styles on interactive elements</li>
                    <li>• Language attribute on HTML element</li>
                    <li>• Built-in form labels</li>
                  </ul>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-red-400 mb-3">
                    ❌ What You Must Handle
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Actually writing alt text for every image</li>
                    <li>• Ensuring color contrast meets 4.5:1 ratio</li>
                    <li>• Maintaining proper heading hierarchy</li>
                    <li>• Adding captions/transcripts to videos</li>
                    <li>• Custom CSS/code accessibility</li>
                    <li>• Third-party embed accessibility</li>
                    <li>• Link text that makes sense out of context</li>
                    <li>• PDF and document accessibility</li>
                    <li>• Testing with screen readers</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-300">
                Think of Squarespace like building materials: the foundation can be solid, but the
                house you build with it determines whether it&apos;s accessible. Every image without alt text,
                every low-contrast color choice, and every &quot;Click here&quot; link is an accessibility
                barrier <em>you</em> created.
              </p>
            </section>

            {/* Section 3 */}
            <section id="7-0-vs-7-1">
              <h2 className="text-3xl font-bold mb-6">
                3. Squarespace 7.0 vs 7.1: Accessibility Differences
              </h2>
              <p className="text-gray-300 mb-6">
                This matters more than most Squarespace users realize. Version 7.1 has
                significantly better accessibility than 7.0, and if you&apos;re still on 7.0,
                migrating may be the single most impactful thing you can do.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Feature</th>
                      <th className="text-center py-3 px-4 text-gray-400 font-medium">7.0</th>
                      <th className="text-center py-3 px-4 text-gray-400 font-medium">7.1</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4">Semantic HTML structure</td>
                      <td className="text-center py-3 px-4">Varies by template</td>
                      <td className="text-center py-3 px-4 text-green-400">✅ Consistent</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4">Skip-to-content link</td>
                      <td className="text-center py-3 px-4 text-red-400">❌ Missing on most</td>
                      <td className="text-center py-3 px-4 text-green-400">✅ Built-in</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4">ARIA landmarks</td>
                      <td className="text-center py-3 px-4 text-yellow-400">⚠️ Inconsistent</td>
                      <td className="text-center py-3 px-4 text-green-400">✅ Standard</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4">Keyboard navigation</td>
                      <td className="text-center py-3 px-4 text-yellow-400">⚠️ Varies widely</td>
                      <td className="text-center py-3 px-4 text-green-400">✅ Improved</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4">Heading hierarchy</td>
                      <td className="text-center py-3 px-4 text-red-400">❌ Often broken</td>
                      <td className="text-center py-3 px-4 text-yellow-400">⚠️ Better, not perfect</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4">Focus indicators</td>
                      <td className="text-center py-3 px-4 text-yellow-400">⚠️ Minimal</td>
                      <td className="text-center py-3 px-4 text-green-400">✅ Visible</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4">Mobile responsiveness</td>
                      <td className="text-center py-3 px-4 text-green-400">✅ Good</td>
                      <td className="text-center py-3 px-4 text-green-400">✅ Good</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4">Custom template selection</td>
                      <td className="text-center py-3 px-4">60+ templates</td>
                      <td className="text-center py-3 px-4">Single flexible system</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-blue-400 mb-2">
                  💡 If You&apos;re on 7.0: Consider Migrating
                </h3>
                <p className="text-gray-300">
                  Squarespace 7.0 templates have inconsistent accessibility because each template was built
                  independently. Some (like Brine and Bedford) are better than others, but none match 7.1&apos;s
                  unified framework. If your site is due for a redesign, 7.1 is the clear choice for accessibility.
                </p>
              </div>

              <p className="text-gray-300">
                <strong>Important:</strong> Even on 7.1, you&apos;re not automatically compliant. The template
                gives you a better foundation, but your content decisions — colors, images, headings, media —
                determine whether the finished site meets WCAG 2.1 AA.
              </p>
            </section>

            {/* Section 4 */}
            <section id="common-issues">
              <h2 className="text-3xl font-bold mb-6">
                4. Most Common Squarespace Accessibility Issues
              </h2>
              <p className="text-gray-300 mb-6">
                These are the WCAG violations we see most frequently on Squarespace sites:
              </p>

              <div className="space-y-4 mb-6">
                {[
                  {
                    issue: "Missing or Empty Alt Text on Images",
                    severity: "Critical",
                    color: "text-red-400",
                    wcag: "1.1.1",
                    impact: "Screen reader users can't understand images, galleries, or portfolio items",
                    fix: "Click each image → Design → Image → add alt text. For decorative images, add empty alt text via custom code (alt=\"\")",
                    prevalence: "80%+ of Squarespace sites",
                  },
                  {
                    issue: "Insufficient Color Contrast",
                    severity: "Critical",
                    color: "text-red-400",
                    wcag: "1.4.3",
                    impact: "Low-vision users can't read text, especially on hero images and light-colored backgrounds",
                    fix: "Use a contrast checker to verify all text/background pairs meet 4.5:1 for normal text and 3:1 for large text",
                    prevalence: "75%+ of sites",
                  },
                  {
                    issue: "Text Over Images Without Sufficient Contrast",
                    severity: "Critical",
                    color: "text-red-400",
                    wcag: "1.4.3",
                    impact: "Hero banners, portfolio overlays, and gallery captions become unreadable",
                    fix: "Add semi-transparent overlays behind text, use Squarespace's overlay opacity setting, or move text to solid-background sections",
                    prevalence: "70%+ of sites",
                  },
                  {
                    issue: "Broken Heading Hierarchy",
                    severity: "High",
                    color: "text-orange-400",
                    wcag: "1.3.1",
                    impact: "Screen reader users can't understand page structure or navigate by headings",
                    fix: "Use headings in order (H1 → H2 → H3). Don't skip levels. Use only one H1 per page (the page title). Don't use headings for visual styling",
                    prevalence: "68% of sites",
                  },
                  {
                    issue: "Non-Descriptive Link Text",
                    severity: "High",
                    color: "text-orange-400",
                    wcag: "2.4.4",
                    impact: "Screen reader users navigating by links hear 'click here' or 'read more' without context",
                    fix: "Replace 'Click here' with descriptive text like 'View our pricing plans' or 'Read the accessibility compliance guide'",
                    prevalence: "65% of sites",
                  },
                  {
                    issue: "Videos Without Captions",
                    severity: "High",
                    color: "text-orange-400",
                    wcag: "1.2.2",
                    impact: "Deaf and hard-of-hearing users can't access video content",
                    fix: "Upload captioned videos, add SRT/VTT caption files, or use YouTube/Vimeo embeds with captions enabled",
                    prevalence: "60%+ of sites with video",
                  },
                  {
                    issue: "Inaccessible Gallery and Lightbox",
                    severity: "High",
                    color: "text-orange-400",
                    wcag: "2.1.1",
                    impact: "Keyboard users can't navigate through galleries or close lightbox overlays",
                    fix: "Test gallery keyboard navigation. If lightbox traps focus or isn't keyboard-navigable, consider disabling lightbox and linking to full-size images directly",
                    prevalence: "55% of portfolio sites",
                  },
                  {
                    issue: "Missing Form Error Messages",
                    severity: "Medium",
                    color: "text-yellow-400",
                    wcag: "3.3.1",
                    impact: "Users can't understand what went wrong when form submission fails",
                    fix: "Squarespace built-in forms handle this reasonably well, but custom forms need explicit error messaging associated with the failed field",
                    prevalence: "40% of sites",
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-lg font-semibold text-white">{item.issue}</h3>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap ${
                        item.severity === "Critical" ? "bg-red-500/20 text-red-400" :
                        item.severity === "High" ? "bg-orange-500/20 text-orange-400" :
                        "bg-yellow-500/20 text-yellow-400"
                      }`}>
                        {item.severity} • WCAG {item.wcag}
                      </span>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500 block mb-1">Impact</span>
                        <span className="text-gray-300">{item.impact}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block mb-1">How to Fix</span>
                        <span className="text-gray-300">{item.fix}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block mb-1">Prevalence</span>
                        <span className={item.color}>{item.prevalence}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5 */}
            <section id="step-by-step">
              <h2 className="text-3xl font-bold mb-6">
                5. Step-by-Step Compliance Guide
              </h2>
              <p className="text-gray-300 mb-6">
                Follow these 8 steps to bring your Squarespace site into WCAG 2.1 AA compliance.
                Start with the automated scan, then work through the manual fixes.
              </p>

              <div className="space-y-6">
                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 font-bold text-sm">1</span>
                    <h3 className="text-lg font-semibold text-white">Run a Free Accessibility Scan</h3>
                  </div>
                  <p className="text-gray-300 mb-3">
                    Start by understanding where you stand. Use a free automated scanner to identify
                    WCAG violations across your site. This gives you a baseline and a prioritized list
                    of issues to fix.
                  </p>
                  <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                    <p className="text-sm text-gray-300">
                      🔍 <Link href="/" className="text-purple-400 hover:text-purple-300 underline font-medium">
                        Scan your Squarespace site for free
                      </Link> — No signup required. Powered by axe-core, the same engine used by Google Lighthouse.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 font-bold text-sm">2</span>
                    <h3 className="text-lg font-semibold text-white">Check Your Squarespace Version</h3>
                  </div>
                  <p className="text-gray-300">
                    Go to <strong>Settings → Advanced → Version</strong> in your Squarespace dashboard to
                    check whether you&apos;re on 7.0 or 7.1. If you&apos;re on 7.0 and your scan reveals
                    significant structural issues, seriously consider migrating to 7.1 before investing time
                    in manual fixes.
                  </p>
                </div>

                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 font-bold text-sm">3</span>
                    <h3 className="text-lg font-semibold text-white">Fix Color Contrast Issues</h3>
                  </div>
                  <p className="text-gray-300 mb-3">
                    This is often the most widespread issue. Go to <strong>Design → Site Styles</strong> and
                    check every color combination:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-1 text-sm">
                    <li>Body text on background: must meet <strong>4.5:1</strong> contrast ratio</li>
                    <li>Large text (18px+ or 14px+ bold): must meet <strong>3:1</strong></li>
                    <li>Buttons: both text color AND button color against background</li>
                    <li>Navigation links: active, hover, and default states</li>
                    <li>Footer text and links</li>
                    <li>Text overlaying hero images or banner sections</li>
                  </ul>
                  <p className="text-gray-300 mt-3 text-sm">
                    Use our{" "}
                    <Link href="/tools/color-contrast-checker" className="text-purple-400 hover:text-purple-300 underline">
                      free color contrast checker
                    </Link>{" "}
                    to test specific color combinations.
                  </p>
                </div>

                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 font-bold text-sm">4</span>
                    <h3 className="text-lg font-semibold text-white">Add Alt Text to Every Image</h3>
                  </div>
                  <p className="text-gray-300 mb-3">
                    Go through every page and add meaningful alt text to every image:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-1 text-sm">
                    <li><strong>Content images:</strong> Describe what the image shows and why it matters</li>
                    <li><strong>Product images:</strong> Include product name, color, material, and key features</li>
                    <li><strong>Portfolio images:</strong> Describe the project, medium, and notable elements</li>
                    <li><strong>Decorative images:</strong> Leave alt text empty (Squarespace doesn&apos;t easily support this — use custom code with <code className="text-purple-400">alt=&quot;&quot;</code> via Code Block or Developer Mode)</li>
                    <li><strong>Logo:</strong> Use your company name as alt text</li>
                  </ul>
                  <p className="text-gray-300 mt-3 text-sm">
                    <strong>How:</strong> Click any image → Design → Image → enter alt text in the &quot;Image alt text&quot; field.
                    For gallery images: click the gallery → Design → click individual images to add alt text.
                  </p>
                </div>

                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 font-bold text-sm">5</span>
                    <h3 className="text-lg font-semibold text-white">Fix Heading Structure</h3>
                  </div>
                  <p className="text-gray-300 mb-3">
                    Review every page&apos;s heading hierarchy. Common Squarespace mistakes:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-1 text-sm">
                    <li>Using H1 for visual styling (multiple H1s on one page)</li>
                    <li>Skipping from H2 to H4 (H3 is missing)</li>
                    <li>Using bold text instead of proper headings</li>
                    <li>Using headings for pull quotes or emphasis</li>
                  </ul>
                  <p className="text-gray-300 mt-3 text-sm">
                    <strong>Rule:</strong> One H1 per page (the page title). Subheadings flow H2 → H3 → H4.
                    In Squarespace, select text and use the heading dropdown to set the correct level. If you
                    want something to <em>look</em> big but isn&apos;t a heading, use custom CSS to style regular text.
                  </p>
                </div>

                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 font-bold text-sm">6</span>
                    <h3 className="text-lg font-semibold text-white">Make Links Descriptive</h3>
                  </div>
                  <p className="text-gray-300 mb-3">
                    Replace all generic link text with descriptive phrases:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                      <p className="text-red-400 font-medium mb-2">❌ Bad</p>
                      <ul className="text-gray-300 space-y-1">
                        <li>&quot;Click here&quot;</li>
                        <li>&quot;Read more&quot;</li>
                        <li>&quot;Learn more&quot;</li>
                        <li>&quot;Here&quot;</li>
                      </ul>
                    </div>
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                      <p className="text-green-400 font-medium mb-2">✅ Good</p>
                      <ul className="text-gray-300 space-y-1">
                        <li>&quot;View our pricing plans&quot;</li>
                        <li>&quot;Read the compliance guide&quot;</li>
                        <li>&quot;Learn about WCAG standards&quot;</li>
                        <li>&quot;Download the accessibility checklist&quot;</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 font-bold text-sm">7</span>
                    <h3 className="text-lg font-semibold text-white">Test Keyboard Navigation</h3>
                  </div>
                  <p className="text-gray-300 mb-3">
                    Put your mouse aside and navigate your entire site using only the keyboard:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-1 text-sm">
                    <li><strong>Tab:</strong> Move through all interactive elements (links, buttons, form fields)</li>
                    <li><strong>Enter:</strong> Activate links and buttons</li>
                    <li><strong>Space:</strong> Activate buttons, check checkboxes</li>
                    <li><strong>Escape:</strong> Close modals, menus, popups</li>
                    <li><strong>Arrow keys:</strong> Navigate within menus and galleries</li>
                  </ul>
                  <p className="text-gray-300 mt-3 text-sm">
                    If you get &quot;trapped&quot; anywhere (Tab doesn&apos;t move you past an element) or can&apos;t
                    reach something, that&apos;s a WCAG 2.1.1 or 2.1.2 failure.
                  </p>
                </div>

                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 font-bold text-sm">8</span>
                    <h3 className="text-lg font-semibold text-white">Set Up Monitoring</h3>
                  </div>
                  <p className="text-gray-300">
                    Accessibility isn&apos;t one-and-done. Every time you add a new page, upload an image,
                    or change your design, you could introduce new violations. Set up continuous monitoring
                    to catch issues before a lawsuit does.{" "}
                    <Link href="/" className="text-purple-400 hover:text-purple-300 underline">
                      RatedWithAI monitoring plans start at $29/month
                    </Link>{" "}
                    and scan your site automatically, alerting you to new WCAG violations.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="template-audit">
              <h2 className="text-3xl font-bold mb-6">
                6. Template Accessibility Audit
              </h2>
              <p className="text-gray-300 mb-6">
                Your Squarespace template determines the baseline accessibility of your site. Here&apos;s
                what to audit in your template:
              </p>

              <div className="space-y-4">
                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-3">Navigation Menu</h3>
                  <ul className="list-disc pl-6 text-gray-300 space-y-1 text-sm">
                    <li>Can you open/close the mobile menu with keyboard?</li>
                    <li>Do dropdown menus work with Tab + Enter/Space?</li>
                    <li>Is the current page indicated (not just visually)?</li>
                    <li>Does the menu have proper ARIA roles (nav, menu, menuitem)?</li>
                  </ul>
                </div>

                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-3">Page Structure</h3>
                  <ul className="list-disc pl-6 text-gray-300 space-y-1 text-sm">
                    <li>Is there a visible skip-to-content link? (Tab once on any page — it should appear)</li>
                    <li>Does the page use landmark roles (header, main, footer, nav)?</li>
                    <li>Is the page title unique and descriptive?</li>
                    <li>Does the HTML lang attribute match your content language?</li>
                  </ul>
                </div>

                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-3">Interactive Elements</h3>
                  <ul className="list-disc pl-6 text-gray-300 space-y-1 text-sm">
                    <li>Do all buttons and links have visible focus indicators?</li>
                    <li>Can accordion/FAQ sections be toggled with keyboard?</li>
                    <li>Do slideshow/carousel controls work without a mouse?</li>
                    <li>Can popup/modal dialogs be closed with Escape?</li>
                  </ul>
                </div>

                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-3">Footer</h3>
                  <ul className="list-disc pl-6 text-gray-300 space-y-1 text-sm">
                    <li>Are social media icon links labeled (aria-label for screen readers)?</li>
                    <li>Is footer text contrast sufficient against the background?</li>
                    <li>Are footer links distinguishable from regular text?</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section id="images-media">
              <h2 className="text-3xl font-bold mb-6">
                7. Images, Video & Media Accessibility
              </h2>

              <h3 className="text-xl font-semibold text-white mb-4">Images</h3>
              <p className="text-gray-300 mb-4">
                Every image on your Squarespace site needs appropriate alternative text:
              </p>
              <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 mb-6">
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 font-bold mt-0.5">✓</span>
                    <div>
                      <strong className="text-white">Product photo:</strong>
                      <span className="text-gray-300"> &quot;Hand-poured soy candle in amber glass jar, vanilla bourbon scent, 8oz&quot;</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 font-bold mt-0.5">✓</span>
                    <div>
                      <strong className="text-white">Portfolio piece:</strong>
                      <span className="text-gray-300"> &quot;Modern minimalist logo design for Atlas Coffee Roasters, black text on white background&quot;</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 font-bold mt-0.5">✓</span>
                    <div>
                      <strong className="text-white">Team photo:</strong>
                      <span className="text-gray-300"> &quot;Sarah Chen, Lead Designer, smiling in the studio workspace&quot;</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 font-bold mt-0.5">✗</span>
                    <div>
                      <strong className="text-white">Don&apos;t:</strong>
                      <span className="text-gray-300"> &quot;image&quot;, &quot;photo&quot;, &quot;IMG_4521.jpg&quot;, &quot;banner&quot;</span>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-4">Video</h3>
              <p className="text-gray-300 mb-4">
                Video content on Squarespace requires:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6 text-sm">
                <li><strong>Captions</strong> for all pre-recorded video (WCAG 1.2.2) — upload to YouTube/Vimeo with captions enabled, then embed</li>
                <li><strong>Audio descriptions</strong> for video where visual content conveys information not in the audio (WCAG 1.2.5)</li>
                <li><strong>No autoplay with sound</strong> — Squarespace background videos are muted by default (good), but any embedded video with autoplay+sound must allow immediate pausing</li>
                <li><strong>Transcripts</strong> for audio-only content (podcasts, audio clips)</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-4">Background Videos</h3>
              <p className="text-gray-300 mb-4">
                Squarespace allows background video on banner sections. Accessibility considerations:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-1 text-sm">
                <li>Background videos are muted and autoplay by default — this is fine for WCAG</li>
                <li>Ensure any text overlaying the video maintains sufficient contrast in all frames</li>
                <li>Avoid rapidly flashing content (seizure risk, WCAG 2.3.1)</li>
                <li>If the video conveys meaningful information, provide that content in text form elsewhere</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section id="forms-navigation">
              <h2 className="text-3xl font-bold mb-6">
                8. Forms, Navigation & Interactive Elements
              </h2>

              <h3 className="text-xl font-semibold text-white mb-4">Forms</h3>
              <p className="text-gray-300 mb-4">
                Squarespace&apos;s built-in form blocks have decent baseline accessibility — labels are
                associated with fields, and basic validation exists. However, watch for:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6 text-sm">
                <li><strong>Newsletter popups:</strong> Squarespace promotional popups can trap keyboard focus. Test that you can close them with Escape and that focus returns to the page</li>
                <li><strong>Custom forms:</strong> If you&apos;re using Code Block or third-party form embeds (Typeform, JotForm, Google Forms), their accessibility varies widely — test each one independently</li>
                <li><strong>Required fields:</strong> Ensure required fields are indicated both visually (asterisk) and programmatically (required attribute)</li>
                <li><strong>Error messages:</strong> When a form submission fails, the error should be announced to screen readers and associated with the specific field</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-4">Navigation</h3>
              <p className="text-gray-300 mb-4">
                Navigation is critical for all users. Key requirements:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6 text-sm">
                <li><strong>Mobile hamburger menu:</strong> Must open/close with keyboard. The menu button needs an aria-label (&quot;Open navigation menu&quot;) and aria-expanded state</li>
                <li><strong>Dropdown submenus:</strong> Must be navigable with arrow keys and closeable with Escape</li>
                <li><strong>Active page indication:</strong> The current page should be indicated with aria-current=&quot;page&quot; (Squarespace 7.1 handles this, 7.0 may not)</li>
                <li><strong>Consistent navigation:</strong> Navigation should appear in the same location and order on every page (WCAG 3.2.3)</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-4">Accordion & FAQ Blocks</h3>
              <p className="text-gray-300 mb-4">
                Squarespace&apos;s accordion block (commonly used for FAQs) needs:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-1 text-sm">
                <li>Toggle with Enter or Space key</li>
                <li>aria-expanded=&quot;true/false&quot; to indicate open/closed state</li>
                <li>Focus visible on the toggle button</li>
                <li>Content properly hidden from screen readers when collapsed</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section id="custom-code">
              <h2 className="text-3xl font-bold mb-6">
                9. Custom Code & Third-Party Integrations
              </h2>
              <p className="text-gray-300 mb-4">
                If you&apos;ve added custom code or third-party integrations to your Squarespace site,
                those are <strong>your responsibility</strong> for accessibility — Squarespace&apos;s
                built-in accessibility doesn&apos;t extend to custom additions.
              </p>

              <h3 className="text-xl font-semibold text-white mb-4">Common Third-Party Embeds to Audit</h3>
              <div className="space-y-3 mb-6">
                {[
                  { name: "Calendly / Acuity", risk: "Medium", note: "Booking widgets vary in keyboard accessibility. Test the full flow: selecting a date, time, and completing the booking" },
                  { name: "Mailchimp / ConvertKit popups", risk: "High", note: "Third-party popup forms often trap keyboard focus, lack form labels, and don't close with Escape" },
                  { name: "Instagram feed embeds", risk: "High", note: "Most Instagram feed plugins generate images without alt text and aren't keyboard-navigable" },
                  { name: "Google Maps", risk: "Medium", note: "Google Maps embeds are reasonably accessible but need a descriptive title attribute on the iframe" },
                  { name: "Chat widgets (Intercom, Drift)", risk: "Medium", note: "Most modern chat widgets are fairly accessible, but test keyboard flow and screen reader announcements" },
                  { name: "Payment processors (Stripe, PayPal)", risk: "Low", note: "Major payment processors maintain good accessibility in their hosted forms" },
                  { name: "Custom JavaScript", risk: "Varies", note: "Any custom JS that creates interactive elements must handle keyboard events, focus management, and ARIA states" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-800/30 rounded-lg p-4 border border-gray-700">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap ${
                      item.risk === "High" ? "bg-red-500/20 text-red-400" :
                      item.risk === "Medium" ? "bg-yellow-500/20 text-yellow-400" :
                      "bg-green-500/20 text-green-400"
                    }`}>
                      {item.risk} Risk
                    </span>
                    <div>
                      <strong className="text-white">{item.name}</strong>
                      <p className="text-sm text-gray-400 mt-1">{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                  ⚠️ The Custom Code Rule
                </h3>
                <p className="text-gray-300 text-sm">
                  Every line of custom CSS or JavaScript you add to Squarespace is a potential
                  accessibility liability. Common issues: <code className="text-purple-400">display: none</code> hiding
                  content from screen readers, <code className="text-purple-400">outline: none</code> removing focus
                  indicators, click handlers that don&apos;t work with keyboard, and custom animations that
                  cause motion sickness. Audit everything in your{" "}
                  <strong>Settings → Advanced → Code Injection</strong>.
                </p>
              </div>
            </section>

            {/* Section 10 */}
            <section id="overlays-warning">
              <h2 className="text-3xl font-bold mb-6">
                10. Why Overlay Widgets Won&apos;t Protect You
              </h2>
              <p className="text-gray-300 mb-4">
                You may have seen Squarespace sites with accessibility toolbar widgets — small icons
                that open a panel offering font size adjustments, high contrast modes, and reading aids.
                These are called <strong>accessibility overlays</strong>, and they don&apos;t work.
              </p>

              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-red-400 mb-3">
                  The Evidence Against Overlays
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>🚫 <strong>800+ accessibility professionals</strong> signed the{" "}
                    <a href="https://overlayfactsheet.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">Overlay Fact Sheet</a>{" "}
                    opposing their use</li>
                  <li>🚫 The <strong>National Federation of the Blind</strong> officially denounced overlay solutions and terminated sponsorship from the largest overlay provider</li>
                  <li>🚫 <strong>400+ websites using overlays</strong> were still sued for accessibility violations in 2024</li>
                  <li>🚫 <strong>Zero courts</strong> have accepted an overlay as proof of ADA compliance</li>
                  <li>🚫 Overlay providers themselves have been <strong>named as defendants</strong> in lawsuits</li>
                </ul>
              </div>

              <p className="text-gray-300 mb-4">
                Overlays can&apos;t fix what they can&apos;t reach: missing alt text in your CMS, broken heading
                hierarchy, inaccessible third-party embeds, PDF documents, video captions, or custom code.
                They add a visible widget that creates an <em>appearance</em> of accessibility while
                leaving the underlying issues untouched.
              </p>

              <p className="text-gray-300">
                For a deeper analysis, read our comprehensive guide:{" "}
                <Link href="/blog/accessibility-widgets" className="text-purple-400 hover:text-purple-300 underline">
                  Accessibility Widgets: Do They Actually Work?
                </Link>
              </p>
            </section>

            {/* Section 11 */}
            <section id="ecommerce">
              <h2 className="text-3xl font-bold mb-6">
                11. Squarespace Commerce Accessibility
              </h2>
              <p className="text-gray-300 mb-4">
                If you&apos;re using Squarespace Commerce to sell products, your store has additional
                accessibility requirements beyond a standard informational site.
              </p>

              <h3 className="text-xl font-semibold text-white mb-4">Product Pages</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6 text-sm">
                <li><strong>Product images:</strong> Every product photo needs alt text describing the product (name, color, material, use)</li>
                <li><strong>Product variants:</strong> Size/color selectors must be keyboard-accessible and announce the selected option to screen readers</li>
                <li><strong>Price information:</strong> Must be programmatically associated with the product (not just an image of the price)</li>
                <li><strong>Add to cart button:</strong> Must be keyboard-accessible with a clear label</li>
                <li><strong>Sale indicators:</strong> Original and sale prices should be distinguishable by more than color (e.g., strikethrough text with &quot;Was/Now&quot; labels)</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-4">Cart & Checkout</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6 text-sm">
                <li><strong>Cart updates:</strong> When quantity changes or items are removed, the change should be announced to screen readers</li>
                <li><strong>Checkout forms:</strong> Squarespace handles checkout forms reasonably well, but verify all fields are labeled and error messages are clear</li>
                <li><strong>Order confirmation:</strong> Must be accessible — avoid relying solely on color to indicate success/failure</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-4">Category & Collection Pages</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-1 text-sm">
                <li>Product grid/list must be navigable by keyboard</li>
                <li>Filter and sort controls need proper labels and keyboard access</li>
                <li>Product cards should use heading structure (product name as heading)</li>
                <li>&quot;Quick view&quot; modals must trap focus correctly and close with Escape</li>
              </ul>
            </section>

            {/* Section 12 */}
            <section id="monitoring">
              <h2 className="text-3xl font-bold mb-6">
                12. Ongoing Monitoring & Maintenance
              </h2>
              <p className="text-gray-300 mb-6">
                Accessibility compliance isn&apos;t a project — it&apos;s a process. Your site changes
                constantly: new pages, updated content, new images, template updates, and third-party
                changes. Each change can introduce new violations.
              </p>

              <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Recommended Monitoring Cadence</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-purple-400 font-semibold whitespace-nowrap">Weekly:</span>
                    <span className="text-gray-300">Automated scan of key pages (homepage, contact, top landing pages)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-400 font-semibold whitespace-nowrap">Monthly:</span>
                    <span className="text-gray-300">Full-site automated scan + manual review of new content</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-400 font-semibold whitespace-nowrap">Quarterly:</span>
                    <span className="text-gray-300">Keyboard navigation test of all page types + screen reader spot-check</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-400 font-semibold whitespace-nowrap">Annually:</span>
                    <span className="text-gray-300">Comprehensive manual audit + update accessibility statement</span>
                  </div>
                </div>
              </div>

              <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-purple-400 mb-2">
                  🔍 Automate the Boring Parts
                </h3>
                <p className="text-gray-300 text-sm">
                  <Link href="/" className="text-purple-400 hover:text-purple-300 underline font-medium">
                    RatedWithAI monitoring
                  </Link>{" "}
                  scans your Squarespace site automatically and alerts you when new WCAG violations appear.
                  Starting at $29/month — less than what most Squarespace users pay for their site plan itself.
                  Catch issues before a lawsuit does.
                </p>
              </div>
            </section>

            {/* Section 13 */}
            <section id="cost-comparison">
              <h2 className="text-3xl font-bold mb-6">
                13. Cost: Compliance vs. Lawsuit
              </h2>
              <p className="text-gray-300 mb-6">
                Squarespace site owners often delay accessibility because of perceived cost. Here&apos;s
                the reality:
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Approach</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Annual Cost</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">What You Get</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 font-medium text-green-400">DIY (free tools)</td>
                      <td className="py-3 px-4">$0</td>
                      <td className="py-3 px-4">Manual scanning, no monitoring, no alerts</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 font-medium text-green-400">Automated monitoring</td>
                      <td className="py-3 px-4">$348/yr ($29/mo)</td>
                      <td className="py-3 px-4">Continuous scanning, alerts on new issues, compliance reports</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 font-medium text-yellow-400">Overlay widget</td>
                      <td className="py-3 px-4">$490–$3,600/yr</td>
                      <td className="py-3 px-4">Visual toolbar only — doesn&apos;t fix code, not accepted by courts</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 font-medium text-yellow-400">Professional audit</td>
                      <td className="py-3 px-4">$3,000–$15,000</td>
                      <td className="py-3 px-4">One-time comprehensive assessment with remediation report</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 font-medium text-red-400">ADA lawsuit (settlement)</td>
                      <td className="py-3 px-4">$5,000–$25,000</td>
                      <td className="py-3 px-4">Settlement only — still must fix the site afterward</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 font-medium text-red-400">ADA lawsuit (full)</td>
                      <td className="py-3 px-4">$15,000–$50,000+</td>
                      <td className="py-3 px-4">Settlement + legal defense + remediation + ongoing compliance</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                <p className="text-green-400 font-semibold mb-2">
                  The math is simple
                </p>
                <p className="text-gray-300 text-sm">
                  A year of automated monitoring ($348) costs less than <strong>3% of the average ADA
                  lawsuit</strong>. For Squarespace business plan users paying $276/year for hosting, adding
                  $348/year for accessibility monitoring is a reasonable cost that protects a much larger investment.
                </p>
              </div>
            </section>

            {/* Section 14 */}
            <section id="faq">
              <h2 className="text-3xl font-bold mb-6">
                14. Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: "Is Squarespace ADA compliant by default?",
                    a: "No. While Squarespace provides some accessibility foundations (semantic HTML in 7.1, alt text fields, basic ARIA), their own accessibility page states the end product may not be fully accessible. The site owner is responsible for ensuring compliance through proper content, color choices, alt text, and testing.",
                  },
                  {
                    q: "Can my Squarespace site be sued for ADA violations?",
                    a: "Yes. Any business website can be sued under ADA Title III as a place of public accommodation. Over 4,000 ADA website lawsuits were filed in 2025. Squarespace sites are not exempt — the platform doesn't shield you from legal liability for accessibility issues on your site.",
                  },
                  {
                    q: "What's the difference between Squarespace 7.0 and 7.1 for accessibility?",
                    a: "Squarespace 7.1 has significantly better built-in accessibility: consistent semantic HTML, skip-to-content links, improved ARIA landmarks, better keyboard navigation, and visible focus indicators. Version 7.0 varies widely by template, with some (Brine, Bedford) being better than others. If accessibility is a priority, 7.1 is the clear choice.",
                  },
                  {
                    q: "Does Squarespace offer any built-in accessibility tools?",
                    a: "Squarespace provides alt text fields for images, basic form accessibility in built-in form blocks, and links to external resources like the A11y Project. However, it does not include a built-in accessibility scanner, compliance checker, or monitoring tool. You'll need external tools to audit your site.",
                  },
                  {
                    q: "Should I use an accessibility overlay plugin on my Squarespace site?",
                    a: "No. Accessibility overlays have been condemned by 800+ accessibility professionals (Overlay Fact Sheet), denounced by the National Federation of the Blind, and rejected by courts as proof of compliance. Over 400 sites using overlays were sued in 2024. They cost $490-$3,600/year without fixing underlying issues. Use code-level scanning and manual fixes instead.",
                  },
                  {
                    q: "How much does Squarespace ADA compliance cost?",
                    a: "Free with DIY effort (manual fixes + free scanners), $29-99/month for automated monitoring, or $3,000-$15,000 for a professional audit. Compare this to an ADA lawsuit averaging $15,000-$50,000+. The $29/month monitoring option ($348/year) is less than 3% of the average lawsuit cost.",
                  },
                  {
                    q: "Which Squarespace pages should I prioritize for accessibility?",
                    a: "Start with your highest-traffic pages: homepage, contact/about page, main service or product pages, and any page with forms. Then expand to all remaining pages. Pages with the most interactive elements (forms, galleries, video) typically have the most accessibility issues.",
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                    <h3 className="text-lg font-semibold text-white mb-3">{item.q}</h3>
                    <p className="text-gray-300 text-sm">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Scan Your Squarespace Site for Free
              </h2>
              <p className="text-gray-300 mb-6">
                Find out exactly where your Squarespace site stands on ADA compliance. Our free
                scanner checks your pages against WCAG 2.1 AA standards using axe-core — the same
                engine powering Google Lighthouse. No signup required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition"
                >
                  🔍 Free Accessibility Scan
                </Link>
                <Link
                  href="/blog/ada-compliance-checklist-2026"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-semibold rounded-xl transition"
                >
                  📋 Full Compliance Checklist
                </Link>
              </div>
            </section>

            {/* Related Posts */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Related Guides</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Shopify ADA Compliance Guide 2026",
                    url: "/blog/shopify-ada-compliance-guide-2026",
                    desc: "Complete Shopify accessibility guide with theme audits, product pages, and checkout fixes.",
                  },
                  {
                    title: "WordPress Accessibility Guide",
                    url: "/blog/wordpress-accessibility-guide",
                    desc: "How to make WordPress sites WCAG 2.1 AA compliant with plugins, themes, and manual fixes.",
                  },
                  {
                    title: "Accessibility Widgets: Do They Actually Work?",
                    url: "/blog/accessibility-widgets",
                    desc: "Why overlay tools don't make your site ADA compliant — evidence from 800+ experts.",
                  },
                  {
                    title: "Small Business Accessibility Guide",
                    url: "/blog/small-business-accessibility-guide",
                    desc: "ADA compliance guide specifically for small business websites and budgets.",
                  },
                  {
                    title: "Top 10 WCAG Failures",
                    url: "/blog/top-10-wcag-failures",
                    desc: "The most common WCAG violations and how to fix them.",
                  },
                  {
                    title: "How to Fix Common WCAG Failures",
                    url: "/blog/how-to-fix-common-wcag-failures",
                    desc: "Step-by-step remediation guide for the most frequently found accessibility issues.",
                  },
                  {
                    title: "Color Contrast Checker",
                    url: "/tools/color-contrast-checker",
                    desc: "Free tool to check if your color combinations meet WCAG contrast requirements.",
                  },
                  {
                    title: "ADA Compliance Checklist 2026",
                    url: "/blog/ada-compliance-checklist-2026",
                    desc: "Complete WCAG 2.1 AA checklist for websites.",
                  },
                ].map((post, i) => (
                  <Link
                    key={i}
                    href={post.url}
                    className="block bg-gray-800/30 rounded-xl p-5 border border-gray-700 hover:border-purple-500/50 transition group"
                  >
                    <h3 className="text-white font-semibold group-hover:text-purple-400 transition mb-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-400">{post.desc}</p>
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
