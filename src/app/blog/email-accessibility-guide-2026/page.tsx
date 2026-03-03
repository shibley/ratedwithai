/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title:
    "Email Accessibility Guide 2026: How to Make ADA-Compliant Emails That Everyone Can Read | RatedWithAI",
  description:
    "Complete guide to email accessibility in 2026. 99.89% of marketing emails fail accessibility checks. Learn WCAG email standards, screen reader optimization, dark mode design, and a 15-point checklist to make your emails ADA compliant.",
  openGraph: {
    title:
      "Email Accessibility Guide 2026: How to Make ADA-Compliant Emails That Everyone Can Read",
    description:
      "99.89% of marketing emails fail accessibility checks. Learn how to fix yours — WCAG standards, screen reader testing, dark mode, and a complete 15-point email accessibility checklist.",
    type: "article",
    publishedTime: "2026-03-03T00:00:00.000Z",
    authors: ["RatedWithAI Team"],
  },
  keywords: [
    "email accessibility",
    "accessible email",
    "ada compliant email",
    "email accessibility checklist",
    "accessible email design",
    "email wcag compliance",
    "screen reader email",
    "email accessibility best practices",
    "accessible email marketing",
    "email dark mode accessibility",
    "html email accessibility",
    "email accessibility guidelines",
    "accessible email template",
    "email alt text",
    "email color contrast",
    "ada email compliance",
    "email accessibility 2026",
    "inclusive email design",
    "email accessibility standards",
    "accessible email campaign",
  ],
  alternates: {
    canonical:
      "https://ratedwithai.com/blog/email-accessibility-guide-2026",
  },
};

export default function EmailAccessibilityGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline:
      "Email Accessibility Guide 2026: How to Make ADA-Compliant Emails That Everyone Can Read",
    description:
      "Comprehensive guide to email accessibility — why 99.89% of emails fail, WCAG standards for email, screen reader testing, dark mode design, and a complete 15-point checklist for accessible email campaigns.",
    datePublished: "2026-03-03T00:00:00.000Z",
    dateModified: "2026-03-03T00:00:00.000Z",
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
        name: "Do emails need to be ADA compliant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The ADA applies to digital communications from businesses that serve the public, and courts have increasingly interpreted this to include email. If your website must be ADA compliant, your emails should be too — they are an extension of your digital presence. Beyond the legal requirements, the European Accessibility Act (EAA), enforced since June 2025, explicitly covers electronic communications including email for businesses operating in or selling to the EU.",
        },
      },
      {
        "@type": "Question",
        name: "What percentage of marketing emails are inaccessible?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "According to the Email Markup Consortium's 2025 Accessibility Report, which analyzed 443,585 emails, 99.89% contain accessibility issues rated 'Serious' or 'Critical.' Only 21 emails out of the entire dataset passed all automated accessibility checks, and they came from just two brands. The most common issues are missing language direction attributes (98.14%), missing lang attributes (96.67%), and images without alt text.",
        },
      },
      {
        "@type": "Question",
        name: "What WCAG level should emails meet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Emails should target WCAG 2.2 Level AA conformance, which is the standard referenced by most accessibility laws including the ADA Title II rule and the European Accessibility Act. Level AA requires 4.5:1 color contrast for normal text, alt text on images, semantic heading structure, and keyboard-accessible interactive elements. While WCAG was designed for web content, its principles (Perceivable, Operable, Understandable, Robust) apply directly to HTML emails.",
        },
      },
      {
        "@type": "Question",
        name: "How do screen readers handle HTML emails?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Screen readers treat HTML emails similarly to web pages — they parse the HTML structure and present content linearly. Users navigate with arrow keys (NVDA, JAWS) or swipe gestures (VoiceOver on iOS). The biggest challenges are layout tables (which screen readers may announce as data tables), missing alt text on images, and lack of semantic structure like headings. NVDA with Outlook is particularly affected by layout tables, constantly announcing table boundaries. Adding role='presentation' to layout tables tells screen readers to ignore the table structure.",
        },
      },
      {
        "@type": "Question",
        name: "What is the most common email accessibility mistake?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "According to the Email Markup Consortium's 2025 report, the most common email accessibility mistake is failing to include a dir (text direction) attribute on content inside the body element, found in 98.14% of emails tested. The second most common is missing the lang attribute (96.67%). These issues are critical because email clients strip the lang and dir attributes from the HTML element, so they must be set on elements inside the body. Without them, screen readers may mispronounce content and right-to-left language users may see broken layouts.",
        },
      },
      {
        "@type": "Question",
        name: "How do I make email dark mode accessible?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To make dark mode accessible: (1) Never use images with transparent backgrounds for text or logos — dark mode will invert the background but not the image, making text invisible. (2) Add a small white or light border/padding around logos. (3) Use the prefers-color-scheme CSS media query to swap colors. (4) Test contrast ratios in both light and dark modes — 4.5:1 minimum for normal text, 3:1 for large text. (5) Avoid hardcoding white backgrounds; use transparent where possible so the email adapts naturally. (6) Test in Apple Mail, Gmail, and Outlook dark modes since each handles inversion differently.",
        },
      },
      {
        "@type": "Question",
        name: "Should I send plain text or HTML emails for accessibility?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Send both. Use multipart MIME messages that include a plain-text version alongside the HTML version. This gives email clients the option to fall back to plain text, which some users prefer — especially screen reader users who may find heavily designed HTML emails harder to navigate. The plain-text version should contain all the same information and links as the HTML version. Many email service providers (Mailchimp, HubSpot, Campaign Monitor) auto-generate plain text, but you should review and edit it for readability.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use an accessibility overlay to fix my email accessibility?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Accessibility overlays do not work in email. Overlays add JavaScript to web pages, but email clients strip all JavaScript for security reasons. Your emails must be accessible at the code level — proper HTML structure, alt text, color contrast, semantic markup, and role='presentation' on layout tables. There is no shortcut. The good news is that email accessibility fixes are simpler than website fixes because emails are static documents with limited interactivity.",
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
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-300">
        <Header />
        <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-slate-500">
            <Link href="/" className="hover:text-sky-400">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/blog" className="hover:text-sky-400">
              Blog
            </Link>{" "}
            / Email Accessibility Guide 2026
          </nav>

          {/* Hero */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-400 ring-1 ring-sky-500/20">
                Email Marketing
              </span>
              <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400 ring-1 ring-amber-500/20">
                WCAG Compliance
              </span>
              <time className="text-xs text-slate-500" dateTime="2026-03-03">
                March 3, 2026
              </time>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              Email Accessibility Guide 2026: How to Make Emails That Everyone Can Read
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              99.89% of marketing emails fail accessibility checks. With 4.73 billion email users worldwide and one in four adults living with a disability, inaccessible emails exclude millions of subscribers — and expose your business to legal risk under the ADA and European Accessibility Act.
            </p>
          </header>

          {/* Key stats banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {[
              { stat: "99.89%", label: "Emails fail accessibility" },
              { stat: "443K+", label: "Emails analyzed (EMC 2025)" },
              { stat: "21", label: "Emails passed all checks" },
              { stat: "1 in 4", label: "Adults have a disability" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-slate-700/60 bg-slate-900/40 p-4 text-center"
              >
                <p className="text-2xl font-bold text-sky-400">{item.stat}</p>
                <p className="text-xs text-slate-400 mt-1">{item.label}</p>
              </div>
            ))}
          </div>

          {/* TOC */}
          <nav className="mb-12 rounded-xl border border-slate-700/60 bg-slate-900/40 p-6">
            <h2 className="text-lg font-bold text-white mb-4">
              📑 Table of Contents
            </h2>
            <ol className="space-y-2 text-sm text-slate-400 list-decimal list-inside">
              <li>
                <a href="#state-of-email-accessibility" className="hover:text-sky-400">
                  The State of Email Accessibility in 2026
                </a>
              </li>
              <li>
                <a href="#why-email-accessibility-matters" className="hover:text-sky-400">
                  Why Email Accessibility Matters
                </a>
              </li>
              <li>
                <a href="#legal-requirements" className="hover:text-sky-400">
                  Legal Requirements: ADA, EAA, and Section 508
                </a>
              </li>
              <li>
                <a href="#wcag-for-email" className="hover:text-sky-400">
                  Applying WCAG to Email: What Works (and What Doesn't)
                </a>
              </li>
              <li>
                <a href="#top-10-issues" className="hover:text-sky-400">
                  The 10 Most Common Email Accessibility Failures
                </a>
              </li>
              <li>
                <a href="#screen-readers-and-email" className="hover:text-sky-400">
                  How Screen Readers Handle Email
                </a>
              </li>
              <li>
                <a href="#html-structure" className="hover:text-sky-400">
                  HTML Structure: Tables, Semantics, and ARIA
                </a>
              </li>
              <li>
                <a href="#visual-design" className="hover:text-sky-400">
                  Visual Design: Color, Contrast, and Typography
                </a>
              </li>
              <li>
                <a href="#dark-mode" className="hover:text-sky-400">
                  Dark Mode Accessibility
                </a>
              </li>
              <li>
                <a href="#images-and-media" className="hover:text-sky-400">
                  Images, Alt Text, and Media
                </a>
              </li>
              <li>
                <a href="#interactive-elements" className="hover:text-sky-400">
                  Links, Buttons, and Interactive Elements
                </a>
              </li>
              <li>
                <a href="#cognitive-accessibility" className="hover:text-sky-400">
                  Cognitive Accessibility in Email
                </a>
              </li>
              <li>
                <a href="#testing-tools" className="hover:text-sky-400">
                  Testing Tools and Workflow
                </a>
              </li>
              <li>
                <a href="#checklist" className="hover:text-sky-400">
                  The 15-Point Email Accessibility Checklist
                </a>
              </li>
              <li>
                <a href="#email-clients" className="hover:text-sky-400">
                  Email Client Accessibility Support
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-sky-400">
                  Frequently Asked Questions
                </a>
              </li>
            </ol>
          </nav>

          {/* --- Section 1: State of Email Accessibility --- */}
          <section id="state-of-email-accessibility" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              1. The State of Email Accessibility in 2026
            </h2>
            <p className="mb-4">
              Email accessibility is in crisis. Despite decades of accessibility standards and growing legal enforcement, the overwhelming majority of marketing and transactional emails remain inaccessible to people with disabilities.
            </p>
            <p className="mb-4">
              The{" "}
              <strong className="text-white">
                Email Markup Consortium (EMC) 2025 Accessibility Report
              </strong>{" "}
              — the largest study of its kind — analyzed{" "}
              <strong className="text-white">443,585 HTML emails</strong>{" "}
              collected between May 2024 and May 2025. The findings are stark:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
              <li>
                <strong className="text-white">99.89%</strong> of emails contain accessibility issues rated "Serious" or "Critical"
              </li>
              <li>
                <strong className="text-white">60.66%</strong> of emails have "Critical" severity issues — the highest category
              </li>
              <li>
                <strong className="text-white">Only 21 emails</strong> out of 443,585 passed all automated accessibility checks
              </li>
              <li>
                Those 21 passing emails came from{" "}
                <strong className="text-white">just two brands</strong> (Parcel.io and NaomiWest.ca)
              </li>
              <li>
                Only{" "}
                <strong className="text-white">one email client</strong> supports all HTML/CSS accessibility features
              </li>
            </ul>
            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5 mb-6">
              <p className="text-red-300 font-medium">
                ⚠️ The problem is systemic: email developers lack email-specific accessibility knowledge, drag-and-drop email builders generate inaccessible HTML, and email clients strip or fail to support key accessibility features. Fixing email accessibility requires action from senders, template builders, and email clients alike.
              </p>
            </div>
            <p className="mb-4">
              To put the scale in perspective: there will be an estimated{" "}
              <strong className="text-white">4.73 billion email users worldwide by 2026</strong>{" "}
              (Statista). One in four U.S. adults (CDC) and one in six people globally (WHO) have a disability. That means hundreds of millions of your subscribers may struggle to read, navigate, or act on your emails.
            </p>
          </section>

          {/* --- Section 2: Why It Matters --- */}
          <section id="why-email-accessibility-matters" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              2. Why Email Accessibility Matters
            </h2>

            <h3 className="text-xl font-bold text-white mb-3">
              The Human Impact
            </h3>
            <p className="mb-4">
              Disabilities that affect email engagement are far more common than most marketers realize:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
              <li>
                <strong className="text-white">Vision impairments:</strong> 2.2 billion people globally have near or distance vision impairment (WHO)
              </li>
              <li>
                <strong className="text-white">Color blindness:</strong> Affects 1 in 12 men (8%) and 1 in 200 women (0.5%)
              </li>
              <li>
                <strong className="text-white">Dyslexia:</strong> Impacts 15% of people — over 30 million adults in the U.S.
              </li>
              <li>
                <strong className="text-white">Cognitive disabilities:</strong> Affect 13.9% of U.S. adults (CDC)
              </li>
              <li>
                <strong className="text-white">Aging population:</strong> By 2030, 1.4 billion people will be 60+, often experiencing vision and cognitive changes
              </li>
              <li>
                <strong className="text-white">Situational disabilities:</strong> A broken arm, bright sunlight on a screen, or a noisy environment all create temporary accessibility needs
              </li>
            </ul>
            <p className="mb-4">
              As James Scholes, a blind screen reader user and accessibility consultant, writes: "The accessibility of marketing emails is quite universally poor. Most marketing emails I've received from brands consist only of an image. Those are completely exclusionary."
            </p>

            <h3 className="text-xl font-bold text-white mb-3 mt-8">
              The Business Impact
            </h3>
            <p className="mb-4">
              Accessible emails aren't just the right thing to do — they perform better:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
              <li>
                <strong className="text-white">Wider reach:</strong> 1.3 billion people worldwide have significant disabilities. Excluding them shrinks your addressable market.
              </li>
              <li>
                <strong className="text-white">Better deliverability:</strong> Emails with proper HTML structure, alt text, and text-to-image ratios score better with spam filters.
              </li>
              <li>
                <strong className="text-white">Higher engagement:</strong> Clear hierarchy, readable typography, and scannable layouts benefit all subscribers — not just those with disabilities.
              </li>
              <li>
                <strong className="text-white">Brand trust:</strong> Subscribers notice when a brand considers their needs. Accessibility builds loyalty across your entire audience.
              </li>
              <li>
                <strong className="text-white">$13 trillion in spending power:</strong> People with disabilities and their households control trillions in disposable income globally (Return on Disability).
              </li>
            </ul>
          </section>

          {/* --- Section 3: Legal Requirements --- */}
          <section id="legal-requirements" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              3. Legal Requirements: ADA, EAA, and Section 508
            </h2>
            <p className="mb-4">
              Email accessibility isn't just a best practice — it's increasingly a legal requirement. Here's how the major laws apply to your email program:
            </p>

            <h3 className="text-xl font-bold text-white mb-3">
              Americans with Disabilities Act (ADA)
            </h3>
            <p className="mb-4">
              Title III of the ADA prohibits discrimination on the basis of disability in "places of public accommodation." Courts have{" "}
              <Link href="/blog/online-only-stores-ada-compliance-2026" className="text-sky-400 hover:underline">
                consistently ruled
              </Link>{" "}
              that websites — and by extension, digital communications like email — fall under this requirement. If your business serves the public and communicates via email, your emails should be accessible.
            </p>
            <p className="mb-4">
              While no court has specifically ruled on email-only ADA claims, email is part of your digital communication ecosystem. A{" "}
              <Link href="/blog/how-to-respond-ada-website-lawsuit-demand-letter" className="text-sky-400 hover:underline">
                demand letter
              </Link>{" "}
              targeting your website could easily include your email communications as evidence of a pattern of inaccessibility.
            </p>

            <h3 className="text-xl font-bold text-white mb-3 mt-6">
              European Accessibility Act (EAA)
            </h3>
            <p className="mb-4">
              The{" "}
              <Link href="/blog/european-accessibility-act-eaa-compliance-us-businesses" className="text-sky-400 hover:underline">
                European Accessibility Act
              </Link>, enforced since June 2025, explicitly covers electronic communications and digital services. If you send marketing emails to EU residents or operate in the EU market, your emails must meet accessibility standards. Penalties vary by member state but can reach <strong className="text-white">€250,000+ per violation</strong>.
            </p>

            <h3 className="text-xl font-bold text-white mb-3 mt-6">
              Section 508 (U.S. Federal)
            </h3>
            <p className="mb-4">
              Federal agencies and their contractors must ensure all electronic communications — including email — meet{" "}
              <Link href="/blog/section-508-compliance-guide" className="text-sky-400 hover:underline">
                Section 508 standards
              </Link>{" "}
              (which reference WCAG 2.0 Level AA). Government email newsletters, automated notifications, and transactional emails all fall under Section 508.
            </p>

            <h3 className="text-xl font-bold text-white mb-3 mt-6">
              ADA Title II (State and Local Government)
            </h3>
            <p className="mb-4">
              The DOJ's{" "}
              <Link href="/blog/ada-title-ii-deadline-countdown-2026" className="text-sky-400 hover:underline">
                April 2026 deadline
              </Link>{" "}
              requires state and local governments to make web content accessible. This includes email communications sent to constituents — newsletters, emergency alerts, utility notices, and government service emails.
            </p>

            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-5 mt-6">
              <p className="text-amber-300 font-medium">
                💡 Bottom line: If your organization's website must be accessible, your emails must be too. Email is an extension of your digital presence, not a separate channel exempt from accessibility law.
              </p>
            </div>
          </section>

          {/* --- Section 4: WCAG for Email --- */}
          <section id="wcag-for-email" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              4. Applying WCAG to Email: What Works (and What Doesn't)
            </h2>
            <p className="mb-4">
              The{" "}
              <Link href="/blog/wcag-22-complete-guide" className="text-sky-400 hover:underline">
                Web Content Accessibility Guidelines (WCAG)
              </Link>{" "}
              are the de facto standard for digital accessibility. While they were designed for web content, most principles apply directly to HTML emails — with some important caveats.
            </p>

            <h3 className="text-xl font-bold text-white mb-3 mt-6">
              WCAG Principles That Apply to Email
            </h3>
            <div className="space-y-4 mb-6">
              <div className="rounded-lg border border-slate-700/60 bg-slate-900/40 p-4">
                <h4 className="font-bold text-white mb-1">👁️ Perceivable</h4>
                <p className="text-sm">
                  Alt text on images, color contrast ratios (4.5:1 for text), don't rely on color alone to convey meaning, proper text direction and language attributes.
                </p>
              </div>
              <div className="rounded-lg border border-slate-700/60 bg-slate-900/40 p-4">
                <h4 className="font-bold text-white mb-1">🖱️ Operable</h4>
                <p className="text-sm">
                  Keyboard-navigable links and buttons, adequate touch targets (44×44px minimum on mobile), no content that requires hover-only interaction.
                </p>
              </div>
              <div className="rounded-lg border border-slate-700/60 bg-slate-900/40 p-4">
                <h4 className="font-bold text-white mb-1">💡 Understandable</h4>
                <p className="text-sm">
                  Clear, concise language, predictable layout, consistent navigation between email campaigns, readable font sizes (16px minimum for body text).
                </p>
              </div>
              <div className="rounded-lg border border-slate-700/60 bg-slate-900/40 p-4">
                <h4 className="font-bold text-white mb-1">🔧 Robust</h4>
                <p className="text-sm">
                  Valid HTML that renders across email clients, lang attributes for screen readers, role="presentation" on layout tables, plain-text fallbacks.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 mt-6">
              What Doesn't Transfer from Web to Email
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
              <li>
                <strong className="text-white">JavaScript:</strong> All email clients strip JavaScript. No interactive widgets, no overlays, no dynamic content manipulation.
              </li>
              <li>
                <strong className="text-white">Advanced ARIA:</strong> Most email clients strip or ignore ARIA attributes beyond <code className="bg-slate-800 px-1 rounded text-sm">role="presentation"</code>. Keep ARIA usage minimal.
              </li>
              <li>
                <strong className="text-white">Skip navigation links:</strong> While useful on websites, they're generally unnecessary in emails since content is shorter and linear.
              </li>
              <li>
                <strong className="text-white">CSS Grid / Flexbox:</strong> Email clients have limited support. Stick to table-based layouts with <code className="bg-slate-800 px-1 rounded text-sm">role="presentation"</code>.
              </li>
              <li>
                <strong className="text-white">Form elements:</strong> Support varies wildly. If you need form input, link to a web form instead.
              </li>
            </ul>
          </section>

          {/* --- Section 5: Top 10 Issues --- */}
          <section id="top-10-issues" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              5. The 10 Most Common Email Accessibility Failures
            </h2>
            <p className="mb-4">
              Based on the EMC's analysis of 443,585 emails, here are the most prevalent accessibility failures — ranked by frequency:
            </p>

            <div className="space-y-6">
              <div className="rounded-xl border border-slate-700/60 bg-slate-900/40 p-5">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 font-bold text-sm">1</span>
                  <div>
                    <h3 className="font-bold text-white">Missing dir attribute (98.14% of emails)</h3>
                    <p className="text-sm mt-1 text-slate-400">
                      Email clients strip <code className="bg-slate-800 px-1 rounded">dir</code> from the <code className="bg-slate-800 px-1 rounded">&lt;html&gt;</code> element. Without it on body children, right-to-left language users see broken layouts, and bidirectional text renders incorrectly.
                    </p>
                    <p className="text-sm mt-2 text-emerald-400">
                      <strong>Fix:</strong> Add <code className="bg-slate-800 px-1 rounded">dir="ltr"</code> (or <code className="bg-slate-800 px-1 rounded">dir="rtl"</code>) to a wrapper div directly inside <code className="bg-slate-800 px-1 rounded">&lt;body&gt;</code>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-700/60 bg-slate-900/40 p-5">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 font-bold text-sm">2</span>
                  <div>
                    <h3 className="font-bold text-white">Missing lang attribute (96.67% of emails)</h3>
                    <p className="text-sm mt-1 text-slate-400">
                      Same as above — email clients remove <code className="bg-slate-800 px-1 rounded">lang</code> from the root element. Screen readers need it to pronounce content correctly. Without it, a French email might be read with English pronunciation rules.
                    </p>
                    <p className="text-sm mt-2 text-emerald-400">
                      <strong>Fix:</strong> Add <code className="bg-slate-800 px-1 rounded">lang="en"</code> (or appropriate language code) to a wrapper div inside <code className="bg-slate-800 px-1 rounded">&lt;body&gt;</code>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-700/60 bg-slate-900/40 p-5">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 font-bold text-sm">3</span>
                  <div>
                    <h3 className="font-bold text-white">Images without alt text</h3>
                    <p className="text-sm mt-1 text-slate-400">
                      Screen readers encounter an image with no description, forcing users to guess the content. Some brands send entire emails as a single image — completely excluding anyone who can't see it.
                    </p>
                    <p className="text-sm mt-2 text-emerald-400">
                      <strong>Fix:</strong> Add descriptive <code className="bg-slate-800 px-1 rounded">alt</code> text to informational images. Use <code className="bg-slate-800 px-1 rounded">alt=""</code> (empty) for decorative images so screen readers skip them.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-700/60 bg-slate-900/40 p-5">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold text-sm">4</span>
                  <div>
                    <h3 className="font-bold text-white">Low color contrast</h3>
                    <p className="text-sm mt-1 text-slate-400">
                      Text that doesn't meet the 4.5:1 contrast ratio against its background. Especially common in light gray text on white backgrounds, or "on brand" color combinations that prioritize aesthetics over readability.
                    </p>
                    <p className="text-sm mt-2 text-emerald-400">
                      <strong>Fix:</strong> Use a{" "}
                      <Link href="/tools/color-contrast-checker" className="text-sky-400 hover:underline">
                        color contrast checker
                      </Link>{" "}
                      to verify 4.5:1 for normal text and 3:1 for large text (18px+ or 14px+ bold).
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-700/60 bg-slate-900/40 p-5">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold text-sm">5</span>
                  <div>
                    <h3 className="font-bold text-white">Layout tables without role="presentation"</h3>
                    <p className="text-sm mt-1 text-slate-400">
                      Screen readers announce table structure — "table with 3 rows and 2 columns, row 1, column 1..." — making content confusing when tables are only used for layout (as is standard in HTML email).
                    </p>
                    <p className="text-sm mt-2 text-emerald-400">
                      <strong>Fix:</strong> Add <code className="bg-slate-800 px-1 rounded">role="presentation"</code> to every table used for layout. Keep semantic table structure only for actual data tables.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-700/60 bg-slate-900/40 p-5">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold text-sm">6</span>
                  <div>
                    <h3 className="font-bold text-white">Non-descriptive link text</h3>
                    <p className="text-sm mt-1 text-slate-400">
                      "Click here," "Read more," or "Learn more" links provide no context when navigated out of sequence. Screen reader users often scan a list of links — every link should make sense on its own.
                    </p>
                    <p className="text-sm mt-2 text-emerald-400">
                      <strong>Fix:</strong> Use descriptive text like "Read our accessibility audit guide" instead of "Click here." If design constraints require short text, use <code className="bg-slate-800 px-1 rounded">aria-label</code> (where supported).
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-700/60 bg-slate-900/40 p-5">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-sm">7</span>
                  <div>
                    <h3 className="font-bold text-white">Missing heading structure</h3>
                    <p className="text-sm mt-1 text-slate-400">
                      Without proper heading hierarchy, screen reader users can't scan the email structure. They rely on heading navigation to skip between sections.
                    </p>
                    <p className="text-sm mt-2 text-emerald-400">
                      <strong>Fix:</strong> Use <code className="bg-slate-800 px-1 rounded">&lt;h1&gt;</code> through <code className="bg-slate-800 px-1 rounded">&lt;h4&gt;</code> tags for actual headings. Don't skip levels (h1 → h3). Never use headings just for visual styling.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-700/60 bg-slate-900/40 p-5">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-sm">8</span>
                  <div>
                    <h3 className="font-bold text-white">Images of text</h3>
                    <p className="text-sm mt-1 text-slate-400">
                      Using images that contain text (headlines, CTAs, or entire email content as images) instead of live HTML text. Can't be resized, can't be read by screen readers (unless alt text duplicates all content), and fails in low-bandwidth situations.
                    </p>
                    <p className="text-sm mt-2 text-emerald-400">
                      <strong>Fix:</strong> Use live HTML text with web-safe fonts. Only use images of text when the exact visual presentation is essential (logos, brand marks).
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-700/60 bg-slate-900/40 p-5">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-sm">9</span>
                  <div>
                    <h3 className="font-bold text-white">Small touch targets</h3>
                    <p className="text-sm mt-1 text-slate-400">
                      Links and buttons that are too small or too close together on mobile. Users with motor impairments or simply large fingers can't accurately tap the right element.
                    </p>
                    <p className="text-sm mt-2 text-emerald-400">
                      <strong>Fix:</strong> Minimum 44×44 CSS pixels for touch targets. Add padding to links and buttons. Space interactive elements at least 8px apart.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-700/60 bg-slate-900/40 p-5">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-sm">10</span>
                  <div>
                    <h3 className="font-bold text-white">No plain-text alternative</h3>
                    <p className="text-sm mt-1 text-slate-400">
                      Sending HTML-only emails without a multipart plain-text version. Some users prefer plain text, and some email clients or configurations default to it.
                    </p>
                    <p className="text-sm mt-2 text-emerald-400">
                      <strong>Fix:</strong> Always send multipart MIME emails with both HTML and plain-text versions. Review auto-generated plain text for readability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* --- Section 6: Screen Readers and Email --- */}
          <section id="screen-readers-and-email" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              6. How Screen Readers Handle Email
            </h2>
            <p className="mb-4">
              Understanding how screen reader users actually consume email is essential for building accessible campaigns. Here's what happens when a blind user opens your email:
            </p>

            <h3 className="text-xl font-bold text-white mb-3">
              Common Screen Reader + Email Client Combinations
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
              <li>
                <strong className="text-white">NVDA + Outlook (Windows):</strong> The most common enterprise combination. NVDA treats email as a browsable document, navigated with arrow keys. Layout tables are a major pain point — NVDA constantly announces table boundaries in Outlook.
              </li>
              <li>
                <strong className="text-white">JAWS + Outlook (Windows):</strong> Similar to NVDA but with virtual cursor mode. Users may toggle between forms mode and virtual cursor to interact with links.
              </li>
              <li>
                <strong className="text-white">NVDA + Thunderbird:</strong> Opens email as a webpage-like browsable document. Users navigate with arrow keys (mostly Down Arrow).
              </li>
              <li>
                <strong className="text-white">VoiceOver + iOS Mail (iPhone/iPad):</strong> Users swipe left and right to move between elements, double-tap to activate. VoiceOver reads paragraph by paragraph.
              </li>
              <li>
                <strong className="text-white">VoiceOver + Apple Mail (Mac):</strong> Similar web-like reading experience. Apple Mail has the best HTML/CSS accessibility feature support of any desktop client.
              </li>
              <li>
                <strong className="text-white">TalkBack + Gmail (Android):</strong> Swipe navigation similar to VoiceOver. Gmail's app rendering can affect how custom HTML is presented.
              </li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-3 mt-6">
              What This Means for Your Emails
            </h3>
            <div className="rounded-xl border border-sky-500/30 bg-sky-500/5 p-5 mb-6">
              <p className="text-sky-200 mb-3">
                <strong>James Scholes, a blind NVDA user, describes his email reading process:</strong>
              </p>
              <blockquote className="border-l-2 border-sky-500/40 pl-4 italic text-slate-400">
                "I press Enter on an email in the list of messages, which opens a webpage-like browsable document, and then read it with the arrow keys. I have my screen reader set to output speech at over 700 words per minute. It is literally more efficient for me to read the email, work out that something about it is inaccessible, and go looking for a way to fix that, than to assume it won't be accessible."
              </blockquote>
            </div>
            <p className="mb-4">
              Key takeaways for email developers:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
              <li>Users read emails <strong className="text-white">linearly, top to bottom</strong>. Your content order in the source HTML matters more than visual positioning.</li>
              <li>
                <strong className="text-white">Heading navigation</strong> is crucial — screen reader users jump between headings to scan structure (press H in NVDA/JAWS).
              </li>
              <li>Layout tables cause <strong className="text-white">constant audio clutter</strong> in NVDA + Outlook. Use <code className="bg-slate-800 px-1 rounded text-sm">role="presentation"</code> without exception.</li>
              <li>Excessive "junk" before the main content (navigation, social links, "view in browser" repeated) is annoying but tolerable — users speed-read past it.</li>
              <li>A <strong className="text-white">"view in browser" link</strong> is valuable as a fallback, but don't rely on it as your accessibility strategy.</li>
            </ul>
          </section>

          {/* --- Section 7: HTML Structure --- */}
          <section id="html-structure" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              7. HTML Structure: Tables, Semantics, and ARIA
            </h2>

            <h3 className="text-xl font-bold text-white mb-3">
              The Wrapper Pattern (Fixes the #1 and #2 Issues)
            </h3>
            <p className="mb-4">
              The two most common email accessibility failures — missing <code className="bg-slate-800 px-1 rounded text-sm">dir</code> and <code className="bg-slate-800 px-1 rounded text-sm">lang</code> — can both be fixed with a single wrapper:
            </p>
            <pre className="bg-slate-800/80 rounded-lg p-4 text-sm overflow-x-auto mb-6 text-emerald-300">
{`<body>
  <div lang="en" dir="ltr">
    <!-- All email content goes here -->
  </div>
</body>`}
            </pre>
            <p className="mb-4">
              This is necessary because email clients like Gmail, Yahoo, and Outlook strip the <code className="bg-slate-800 px-1 rounded text-sm">lang</code> and <code className="bg-slate-800 px-1 rounded text-sm">dir</code> attributes from the <code className="bg-slate-800 px-1 rounded text-sm">&lt;html&gt;</code> element. Placing these attributes on a direct child of <code className="bg-slate-800 px-1 rounded text-sm">&lt;body&gt;</code> ensures they survive.
            </p>

            <h3 className="text-xl font-bold text-white mb-3 mt-6">
              Layout Tables with role="presentation"
            </h3>
            <p className="mb-4">
              HTML email still relies on tables for layout (CSS Grid and Flexbox support remains inconsistent across clients). Every layout table must include <code className="bg-slate-800 px-1 rounded text-sm">role="presentation"</code>:
            </p>
            <pre className="bg-slate-800/80 rounded-lg p-4 text-sm overflow-x-auto mb-6 text-emerald-300">
{`<!-- Layout table — screen readers ignore structure -->
<table role="presentation" border="0" cellpadding="0"
       cellspacing="0" width="100%">
  <tr>
    <td>Your content here</td>
  </tr>
</table>

<!-- Data table — screen readers announce structure -->
<table>
  <caption>Monthly pricing comparison</caption>
  <thead>
    <tr>
      <th scope="col">Feature</th>
      <th scope="col">Basic</th>
      <th scope="col">Pro</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Scans/month</td>
      <td>10</td>
      <td>Unlimited</td>
    </tr>
  </tbody>
</table>`}
            </pre>

            <h3 className="text-xl font-bold text-white mb-3 mt-6">
              Semantic HTML Elements
            </h3>
            <p className="mb-4">
              Use proper HTML elements — not just styled divs — for content structure:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
              <li>
                <code className="bg-slate-800 px-1 rounded text-sm">&lt;h1&gt;</code> through <code className="bg-slate-800 px-1 rounded text-sm">&lt;h6&gt;</code> for headings (in order, no skipping)
              </li>
              <li>
                <code className="bg-slate-800 px-1 rounded text-sm">&lt;p&gt;</code> for paragraphs (not <code className="bg-slate-800 px-1 rounded text-sm">&lt;div&gt;</code> or <code className="bg-slate-800 px-1 rounded text-sm">&lt;br&gt;&lt;br&gt;</code>)
              </li>
              <li>
                <code className="bg-slate-800 px-1 rounded text-sm">&lt;ul&gt;</code>/<code className="bg-slate-800 px-1 rounded text-sm">&lt;ol&gt;</code> for lists (screen readers announce "list with 5 items")
              </li>
              <li>
                <code className="bg-slate-800 px-1 rounded text-sm">&lt;a&gt;</code> for links with descriptive <code className="bg-slate-800 px-1 rounded text-sm">href</code> — never use an image as the only link content without alt text
              </li>
              <li>
                <code className="bg-slate-800 px-1 rounded text-sm">&lt;strong&gt;</code> and <code className="bg-slate-800 px-1 rounded text-sm">&lt;em&gt;</code> for emphasis (screen readers may announce these, unlike <code className="bg-slate-800 px-1 rounded text-sm">&lt;b&gt;</code> and <code className="bg-slate-800 px-1 rounded text-sm">&lt;i&gt;</code>)
              </li>
            </ul>
          </section>

          {/* --- Section 8: Visual Design --- */}
          <section id="visual-design" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              8. Visual Design: Color, Contrast, and Typography
            </h2>

            <h3 className="text-xl font-bold text-white mb-3">
              Color Contrast
            </h3>
            <p className="mb-4">
              WCAG 2.2 Level AA requires minimum contrast ratios:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
              <li>
                <strong className="text-white">4.5:1</strong> for normal text (under 18px or under 14px bold)
              </li>
              <li>
                <strong className="text-white">3:1</strong> for large text (18px+ regular or 14px+ bold)
              </li>
              <li>
                <strong className="text-white">3:1</strong> for UI components and graphical objects (icons, buttons, form fields)
              </li>
            </ul>
            <p className="mb-4">
              Common email design violations:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
              <li>Light gray text on white (#999 on #fff = 2.85:1 — <strong className="text-red-400">fails</strong>)</li>
              <li>White text on a pale brand color (many brand blues/greens fail)</li>
              <li>Placeholder/disclaimer text in very light gray</li>
              <li>Links that are only distinguished by color (add underlines too)</li>
            </ul>
            <p className="mb-4">
              Use the{" "}
              <Link href="/tools/color-contrast-checker" className="text-sky-400 hover:underline">
                RatedWithAI Color Contrast Checker
              </Link>{" "}
              to test your email color combinations before sending.
            </p>

            <h3 className="text-xl font-bold text-white mb-3 mt-6">
              Typography
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
              <li>
                <strong className="text-white">Minimum 16px body text</strong> — smaller sizes are difficult for low-vision users. 14px absolute minimum; below that, readability drops sharply on mobile.
              </li>
              <li>
                <strong className="text-white">Line height of 1.5×</strong> the font size for body text. Cramped text is harder to track visually and especially difficult for users with dyslexia.
              </li>
              <li>
                <strong className="text-white">Sans-serif fonts</strong> for body text: Arial, Helvetica, Verdana, or system fonts. Serif fonts can be used for headings but avoid them in long body text.
              </li>
              <li>
                <strong className="text-white">Avoid italic blocks</strong> — people with dyslexia find italicized text in paragraphs significantly harder to read.
              </li>
              <li>
                <strong className="text-white">Left-align body text</strong> (in LTR languages). Centered or justified text creates uneven spacing that makes reading harder.
              </li>
              <li>
                <strong className="text-white">Limit line length</strong> to 50–75 characters. Very long lines cause readers to lose their place when returning to the next line.
              </li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-3 mt-6">
              Color: Don't Rely on It Alone
            </h3>
            <p className="mb-4">
              Never use color as the sole means of conveying information:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
              <li>Don't use "click the green button" — the button should have text on it</li>
              <li>Required form field indicators: use asterisks (*) plus color, not just red text</li>
              <li>Success/error messages: use icons (✓ ✗) plus color, not just green/red</li>
              <li>Links within text: underline them or add another visual indicator beyond color change</li>
            </ul>
          </section>

          {/* --- Section 9: Dark Mode --- */}
          <section id="dark-mode" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              9. Dark Mode Accessibility
            </h2>
            <p className="mb-4">
              Dark mode is everywhere — Apple Mail, Gmail, Outlook, and most mobile email apps support it. For some users with light sensitivity, photophobia, or certain visual impairments, dark mode isn't a preference — it's a necessity.
            </p>
            <p className="mb-4">
              But dark mode creates unique accessibility challenges because each email client handles color inversion differently:
            </p>

            <h3 className="text-xl font-bold text-white mb-3 mt-6">
              How Email Clients Handle Dark Mode
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
              <li>
                <strong className="text-white">Apple Mail:</strong> Respects <code className="bg-slate-800 px-1 rounded text-sm">prefers-color-scheme</code> CSS media queries. If you provide dark mode styles, it uses them. If not, it may partially invert colors.
              </li>
              <li>
                <strong className="text-white">Gmail (Android):</strong> Aggressively inverts colors using its own algorithm. Often produces unexpected results with custom backgrounds.
              </li>
              <li>
                <strong className="text-white">Outlook (Windows):</strong> Forces its own dark background, inverts text colors, but may not change background images — causing white text on white-appearing backgrounds.
              </li>
              <li>
                <strong className="text-white">Samsung Mail:</strong> Similar to Gmail Android — automatic inversion with limited developer control.
              </li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-3 mt-6">
              Dark Mode Accessibility Best Practices
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
              <li>
                <strong className="text-white">Never use transparent backgrounds on logos or text images.</strong> The background will invert but the image won't, making text invisible.
              </li>
              <li>
                <strong className="text-white">Add a visible border or padding around logos</strong> (2-4px white/light border) so they remain visible on dark backgrounds.
              </li>
              <li>
                <strong className="text-white">Test contrast in both modes.</strong> Your 4.5:1 ratio in light mode might drop below 3:1 after dark mode inversion.
              </li>
              <li>
                <strong className="text-white">Use the <code className="bg-slate-800 px-1 rounded text-sm">prefers-color-scheme</code> media query</strong> to provide explicit dark mode colors where supported.
              </li>
              <li>
                <strong className="text-white">Avoid hardcoding white backgrounds</strong> on content areas. Use transparent where possible so the email adapts naturally.
              </li>
              <li>
                <strong className="text-white">Test in all major dark mode environments</strong> — Apple Mail, Gmail (Android + iOS), Outlook (Windows + Mac), Samsung Mail.
              </li>
            </ul>

            <pre className="bg-slate-800/80 rounded-lg p-4 text-sm overflow-x-auto mb-6 text-emerald-300">
{`/* Dark mode styles */
@media (prefers-color-scheme: dark) {
  .email-body {
    background-color: #1a1a2e !important;
    color: #e0e0e0 !important;
  }
  .email-heading {
    color: #ffffff !important;
  }
  .email-link {
    color: #64b5f6 !important;
  }
  .email-button {
    background-color: #1976d2 !important;
    color: #ffffff !important;
  }
}`}
            </pre>
          </section>

          {/* --- Section 10: Images and Media --- */}
          <section id="images-and-media" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              10. Images, Alt Text, and Media
            </h2>

            <h3 className="text-xl font-bold text-white mb-3">
              Writing Effective Alt Text for Email
            </h3>
            <p className="mb-4">
              Alt text in email follows the same principles as{" "}
              <Link href="/blog/alt-text-guide-how-to-write-image-accessibility" className="text-sky-400 hover:underline">
                web alt text
              </Link>, but with some email-specific considerations:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
              <li>
                <strong className="text-white">Product images:</strong> Include the product name, key features, and price if visible. "Blue Nike Air Max 90, $129.99" — not "Product image."
              </li>
              <li>
                <strong className="text-white">Hero/banner images:</strong> Describe the message the image conveys. "Summer sale: 40% off all accessories, ends Friday" — not "Banner."
              </li>
              <li>
                <strong className="text-white">Icons and decorative images:</strong> Use <code className="bg-slate-800 px-1 rounded text-sm">alt=""</code> (empty alt) for purely decorative images. Screen readers will skip them entirely.
              </li>
              <li>
                <strong className="text-white">Linked images:</strong> Alt text should describe the link destination. "Shop women's running shoes" — not "Photo of shoes."
              </li>
              <li>
                <strong className="text-white">Infographics and charts:</strong> Provide a brief summary in alt text and link to the full data. "Chart: Email open rates by industry — healthcare leads at 42%. View full data."
              </li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-3 mt-6">
              The "Image-Only Email" Problem
            </h3>
            <p className="mb-4">
              Some brands — especially in retail and fashion — send emails that are entirely composed of images. This is one of the worst accessibility practices in email:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
              <li>Screen readers have no content to read beyond alt text</li>
              <li>Text in images can't be resized by low-vision users</li>
              <li>Images may not load (blocked by email clients, low bandwidth)</li>
              <li>Search and find-in-page don't work on image text</li>
              <li>Translation tools can't translate image text</li>
            </ul>
            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5 mb-6">
              <p className="text-red-300 font-medium">
                ❌ Never send an email that is entirely images. If images are blocked or can't be seen, your subscriber gets a completely empty email. Always use live HTML text for your core message and calls-to-action.
              </p>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 mt-6">
              Animated GIFs and Video
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
              <li>
                <strong className="text-white">Limit animation duration:</strong> Avoid GIFs that loop indefinitely or flash rapidly. Content that flashes more than 3 times per second can trigger seizures (WCAG 2.3.1).
              </li>
              <li>
                <strong className="text-white">Provide static fallbacks:</strong> Include meaningful first frames and alt text that describes the animation content.
              </li>
              <li>
                <strong className="text-white">Don't auto-play video:</strong> Most email clients don't support video anyway, but where they do, never auto-play with sound.
              </li>
            </ul>
          </section>

          {/* --- Section 11: Interactive Elements --- */}
          <section id="interactive-elements" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              11. Links, Buttons, and Interactive Elements
            </h2>

            <h3 className="text-xl font-bold text-white mb-3">
              Bulletproof Buttons
            </h3>
            <p className="mb-4">
              "Bulletproof buttons" use HTML and CSS (not images) to create styled call-to-action buttons that work across all email clients:
            </p>
            <pre className="bg-slate-800/80 rounded-lg p-4 text-sm overflow-x-auto mb-6 text-emerald-300">
{`<table role="presentation" border="0" cellpadding="0"
       cellspacing="0">
  <tr>
    <td align="center" bgcolor="#0066CC"
        style="border-radius: 6px;">
      <a href="https://example.com/scan"
         target="_blank"
         style="display: inline-block;
                padding: 14px 32px;
                font-size: 16px;
                font-family: Arial, sans-serif;
                color: #ffffff;
                text-decoration: none;
                border-radius: 6px;">
        Scan Your Website Free
      </a>
    </td>
  </tr>
</table>`}
            </pre>
            <p className="mb-4">
              Accessibility considerations for buttons:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
              <li>Use <strong className="text-white">live text</strong> inside the link — never an image of text</li>
              <li>Make the <strong className="text-white">entire button clickable</strong> (padding on the &lt;a&gt;, not just the &lt;td&gt;)</li>
              <li>Minimum <strong className="text-white">44×44px touch target</strong> on mobile</li>
              <li><strong className="text-white">Descriptive text:</strong> "Download your report" instead of "Click here"</li>
              <li><strong className="text-white">Sufficient contrast:</strong> Button text against button background (4.5:1), and button background against email background (3:1)</li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-3 mt-6">
              Link Best Practices
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
              <li><strong className="text-white">Underline links</strong> in body text — don't rely on color alone to distinguish them</li>
              <li><strong className="text-white">Descriptive link text:</strong> "Read our WCAG compliance guide" not "Click here"</li>
              <li><strong className="text-white">Unique link text:</strong> Don't use "Learn more" for five different links — screen readers list all links, and identical text is confusing</li>
              <li><strong className="text-white">Include full URL in plain text:</strong> In your plain-text version, spell out URLs so they're usable</li>
              <li><strong className="text-white">Avoid "naked" URLs in HTML:</strong> Wrap them in descriptive anchor text</li>
            </ul>
          </section>

          {/* --- Section 12: Cognitive Accessibility --- */}
          <section id="cognitive-accessibility" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              12. Cognitive Accessibility in Email
            </h2>
            <p className="mb-4">
              Cognitive disabilities are the most common disability type in the U.S. (13.9% of adults, per CDC). Making emails cognitively accessible benefits everyone, including users who are distracted, stressed, or reading in a second language.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">
              Writing for Cognitive Accessibility
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
              <li><strong className="text-white">Plain language:</strong> Use simple words and short sentences. Aim for a 6th-8th grade reading level.</li>
              <li><strong className="text-white">One main CTA per email:</strong> Too many competing actions create decision paralysis. Make the primary action obvious.</li>
              <li><strong className="text-white">Scannable structure:</strong> Use headings, bullet points, and bold text so readers can quickly find what matters.</li>
              <li><strong className="text-white">Consistent layout:</strong> Use the same template structure across campaigns. Predictability reduces cognitive load.</li>
              <li><strong className="text-white">Clear subject lines:</strong> The subject line sets expectations. "Your March invoice is ready" beats "Important update inside!"</li>
              <li><strong className="text-white">Whitespace:</strong> Don't cram content. Visual breathing room reduces cognitive fatigue.</li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-3 mt-6">
              Reducing Anxiety and Urgency
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
              <li>Avoid aggressive countdown timers and false urgency ("LAST CHANCE! 2 HOURS LEFT!")</li>
              <li>Don't use blinking or rapidly changing content</li>
              <li>Be clear about deadlines — "Offer ends March 15" is less stressful than "EXPIRING SOON"</li>
              <li>Provide an easy way to unsubscribe — hiding the option increases anxiety and erodes trust</li>
            </ul>
          </section>

          {/* --- Section 13: Testing Tools --- */}
          <section id="testing-tools" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              13. Testing Tools and Workflow
            </h2>
            <p className="mb-4">
              Automated testing catches many issues but can't catch everything. A combination of automated and manual testing is essential.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">
              Automated Testing Tools
            </h3>
            <ul className="list-disc list-inside space-y-3 mb-6 ml-4">
              <li>
                <strong className="text-white">Parcel.io Accessibility Checker:</strong> Purpose-built for email accessibility. Used by the EMC for their annual report. Tests against email-specific rules. Free on the Community plan.
              </li>
              <li>
                <strong className="text-white">Litmus Accessibility Checks:</strong> 20-point checklist aligned with ADA and EAA. Integrated into their email preview workflow.
              </li>
              <li>
                <strong className="text-white">Email on Acid:</strong> Includes accessibility scoring and recommendations alongside rendering previews.
              </li>
              <li>
                <strong className="text-white">Dyspatch:</strong> Built-in accessibility checker for their modular email builder.
              </li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-3 mt-6">
              Manual Testing Checklist
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
              <li><strong className="text-white">Screen reader test:</strong> Read the email with NVDA + Outlook (or JAWS). Can you understand the content? Is the reading order logical?</li>
              <li><strong className="text-white">Images-off test:</strong> Disable images in your email client. Can you still understand the email and act on it?</li>
              <li><strong className="text-white">Zoom test:</strong> Zoom to 200%. Does content reflow? Does anything overlap or get cut off?</li>
              <li><strong className="text-white">Dark mode test:</strong> View in Apple Mail, Gmail, and Outlook dark modes. Is everything still legible?</li>
              <li><strong className="text-white">Plain-text test:</strong> Read the plain-text version. Does it contain all essential information and links?</li>
              <li><strong className="text-white">Mobile test:</strong> View on a small screen. Are touch targets large enough? Is text readable without zooming?</li>
              <li><strong className="text-white">Keyboard test:</strong> Tab through all links and buttons. Is the order logical? Can you tell which element has focus?</li>
            </ul>
          </section>

          {/* --- Section 14: Checklist --- */}
          <section id="checklist" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              14. The 15-Point Email Accessibility Checklist
            </h2>
            <p className="mb-4">
              Use this checklist before every email send. Print it, bookmark it, share it with your team:
            </p>

            <div className="rounded-xl border border-sky-500/30 bg-sky-500/5 p-6 space-y-3">
              {[
                { num: "1", text: "lang and dir attributes set on a wrapper div inside <body>" },
                { num: "2", text: "role=\"presentation\" on every layout table" },
                { num: "3", text: "All informational images have descriptive alt text" },
                { num: "4", text: "Decorative images have alt=\"\" (empty alt)" },
                { num: "5", text: "Color contrast ratios meet 4.5:1 for text, 3:1 for large text" },
                { num: "6", text: "Color is not the sole means of conveying information" },
                { num: "7", text: "Semantic headings (h1-h6) used in proper hierarchy" },
                { num: "8", text: "All links have descriptive, unique text (no \"click here\")" },
                { num: "9", text: "Links in body text are underlined or otherwise visually distinct" },
                { num: "10", text: "Body text is minimum 16px with 1.5× line height" },
                { num: "11", text: "Touch targets are at least 44×44 CSS pixels" },
                { num: "12", text: "No images of text (except logos)" },
                { num: "13", text: "Plain-text multipart version included and reviewed" },
                { num: "14", text: "Dark mode tested in Apple Mail, Gmail, and Outlook" },
                { num: "15", text: "Animations don't flash more than 3 times per second" },
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 font-bold text-xs">
                    {item.num}
                  </span>
                  <p className="text-slate-300 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* --- Section 15: Email Client Support --- */}
          <section id="email-clients" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              15. Email Client Accessibility Support
            </h2>
            <p className="mb-4">
              Not all email clients are created equal when it comes to supporting accessibility features. According to the EMC's 2025 report:
            </p>

            <h3 className="text-xl font-bold text-white mb-3">
              Best Accessibility Support
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
              <li>
                <strong className="text-white">SFR Mail:</strong> The only email client that supports 100% of tested accessibility features
              </li>
              <li>
                <strong className="text-white">Apple Mail:</strong> Near-100% support; respects <code className="bg-slate-800 px-1 rounded text-sm">prefers-color-scheme</code>, proper semantic rendering
              </li>
              <li>
                <strong className="text-white">Samsung Email:</strong> Close to full support
              </li>
              <li>
                <strong className="text-white">Proton Mail:</strong> Strong accessibility feature support, privacy-focused
              </li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-3 mt-6">
              Known Problem Areas
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
              <li>
                <strong className="text-white">Gmail:</strong> Strips <code className="bg-slate-800 px-1 rounded text-sm">lang</code> and <code className="bg-slate-800 px-1 rounded text-sm">dir</code> from the root element (hence the wrapper pattern). Aggressive dark mode inversion can break contrast.
              </li>
              <li>
                <strong className="text-white">Outlook (Windows):</strong> Uses Word's rendering engine, which has poor CSS support. Layout tables are especially problematic for screen readers. Forces its own dark mode colors.
              </li>
              <li>
                <strong className="text-white">Yahoo Mail:</strong> Strips certain CSS and may remove accessibility-relevant styles.
              </li>
            </ul>

            <div className="rounded-xl border border-sky-500/30 bg-sky-500/5 p-5 mt-6">
              <p className="text-sky-200 font-medium">
                💡 What you can do: The wrapper div with <code className="bg-slate-800 px-1 rounded text-sm">lang</code> and <code className="bg-slate-800 px-1 rounded text-sm">dir</code>, <code className="bg-slate-800 px-1 rounded text-sm">role="presentation"</code> on layout tables, and proper alt text work across all email clients. Focus on these universal fixes first, then optimize for specific clients.
              </p>
            </div>
          </section>

          {/* --- Section 16: FAQ --- */}
          <section id="faq" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "Do emails need to be ADA compliant?",
                  a: "Yes. The ADA applies to digital communications from businesses serving the public. If your website must be ADA compliant, your emails should be too. The European Accessibility Act (EAA), enforced since June 2025, explicitly covers electronic communications including email.",
                },
                {
                  q: "What percentage of marketing emails are inaccessible?",
                  a: "99.89%. The Email Markup Consortium's 2025 report analyzed 443,585 emails and found only 21 passed all automated accessibility checks. 60.66% had 'Critical' severity issues.",
                },
                {
                  q: "What WCAG level should emails meet?",
                  a: "Target WCAG 2.2 Level AA — the standard referenced by most accessibility laws. This means 4.5:1 color contrast, alt text on images, semantic heading structure, and keyboard-accessible elements.",
                },
                {
                  q: "How do screen readers handle HTML emails?",
                  a: "Screen readers treat HTML emails like web pages — parsing structure and presenting content linearly. Users navigate with arrow keys or swipe gestures. The biggest problems are layout tables (use role='presentation'), missing alt text, and lack of headings.",
                },
                {
                  q: "What is the most common email accessibility mistake?",
                  a: "Missing dir (text direction) attribute — found in 98.14% of emails. The second most common is missing the lang attribute (96.67%). Both are easy fixes with a single wrapper div.",
                },
                {
                  q: "How do I make email dark mode accessible?",
                  a: "Never use transparent backgrounds on text images/logos. Add light borders around logos. Test contrast in both modes. Use prefers-color-scheme for explicit dark mode colors. Avoid hardcoded white backgrounds.",
                },
                {
                  q: "Should I send plain text or HTML emails?",
                  a: "Send both via multipart MIME. This gives email clients a plain-text fallback that some users prefer. Review auto-generated plain text for readability — it often needs manual editing.",
                },
                {
                  q: "Can accessibility overlays fix email accessibility?",
                  a: "No. Overlays add JavaScript to web pages, but email clients strip all JavaScript. Emails must be accessible at the HTML/CSS level — there is no shortcut.",
                },
              ].map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-xl border border-slate-700/60 bg-slate-900/40 p-5"
                >
                  <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-slate-400 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* --- CTA --- */}
          <section className="mb-16">
            <div className="rounded-2xl border border-sky-500/30 bg-gradient-to-br from-sky-500/10 to-purple-500/10 p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-3">
                Start with Your Website
              </h2>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                If your emails link back to your website, both need to be accessible. Scan your site for free with RatedWithAI — check WCAG compliance, alt text, color contrast, and more in seconds.
              </p>
              <Link
                href="/"
                className="inline-flex items-center rounded-xl bg-sky-600 px-8 py-3 font-semibold text-white hover:bg-sky-500 transition-colors"
              >
                Scan Your Website Free →
              </Link>
            </div>
          </section>

          {/* --- Related Articles --- */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">
              Related Guides
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title:
                    "Alt Text Guide: How to Write Image Accessibility",
                  href: "/blog/alt-text-guide-how-to-write-image-accessibility",
                  desc: "Master the art of writing alt text — the single most impactful fix for both email and website accessibility.",
                },
                {
                  title:
                    "Color Contrast Checker",
                  href: "/tools/color-contrast-checker",
                  desc: "Test your email color combinations against WCAG 2.2 AA and AAA standards instantly.",
                },
                {
                  title:
                    "WCAG 2.2 Complete Guide",
                  href: "/blog/wcag-22-complete-guide",
                  desc: "The full WCAG 2.2 standard explained — every success criterion that applies to your emails and website.",
                },
                {
                  title:
                    "How to Fix the Top 10 WCAG Failures",
                  href: "/blog/top-10-wcag-failures",
                  desc: "The most common accessibility issues on the web — many of which apply directly to HTML email.",
                },
                {
                  title:
                    "Accessibility Testing Tools Compared (2026)",
                  href: "/blog/best-accessibility-testing-tools-compared-2026",
                  desc: "Full review of accessibility testing tools including email-specific options like Parcel and Litmus.",
                },
                {
                  title:
                    "European Accessibility Act (EAA): What US Businesses Need to Know",
                  href: "/blog/european-accessibility-act-eaa-compliance-us-businesses",
                  desc: "The EAA explicitly covers email and electronic communications — understand your obligations.",
                },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="rounded-xl border border-slate-700/60 bg-slate-900/40 p-5 space-y-2 hover:border-sky-500/40 transition-colors block"
                >
                  <h3 className="text-white font-bold">{article.title}</h3>
                  <p className="text-slate-400 text-sm">{article.desc}</p>
                </Link>
              ))}
            </div>
          </section>
        </article>

        <Footer />
      </div>
    </>
  );
}
