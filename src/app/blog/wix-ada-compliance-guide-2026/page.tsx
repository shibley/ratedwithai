/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title:
    "Wix ADA Compliance Guide 2026: Make Your Wix Website Accessible | RatedWithAI",
  description:
    "Complete guide to making your Wix website ADA compliant in 2026. Learn how to use the Accessibility Wizard, fix WCAG issues in Wix Editor, avoid overlays, and protect your business from lawsuits.",
  openGraph: {
    title: "Wix ADA Compliance Guide 2026: Make Your Wix Website Accessible",
    description:
      "200M+ websites run on Wix — but are they ADA compliant? Step-by-step guide to WCAG 2.1 AA compliance using Wix's built-in tools, no overlays required.",
    type: "article",
    publishedTime: "2026-03-01T00:00:00.000Z",
    authors: ["RatedWithAI Team"],
  },
  keywords: [
    "wix ada compliance",
    "wix accessibility",
    "wix ada compliant",
    "is wix ada compliant",
    "wix accessibility wizard",
    "wix wcag compliance",
    "wix ada compliance 2026",
    "wix website accessibility",
    "wix accessibility issues",
    "make wix website accessible",
    "wix accessibility audit",
    "wix ada requirements",
    "wix accessibility checker",
    "wix wcag 2.1",
    "wix ada lawsuit",
    "wix accessibility settings",
    "wix accessibility features",
    "wix studio accessibility",
    "wix accessibility statement",
    "wix ada compliance guide",
  ],
  alternates: {
    canonical: "https://ratedwithai.com/blog/wix-ada-compliance-guide-2026",
  },
};

export default function WixADACompliancePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline:
        "Wix ADA Compliance Guide 2026: Make Your Wix Website Accessible",
      description:
        "Complete guide to making your Wix website ADA compliant. Covers the Accessibility Wizard, WCAG 2.1 AA requirements, common Wix accessibility issues, template selection, and ongoing monitoring.",
      datePublished: "2026-03-01T00:00:00.000Z",
      dateModified: "2026-03-01T00:00:00.000Z",
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
      name: "How to Make Your Wix Website ADA Compliant",
      description:
        "Step-by-step guide to achieving WCAG 2.1 AA compliance on your Wix website using built-in tools.",
      step: [
        {
          "@type": "HowToStep",
          name: "Run the Accessibility Wizard",
          text: "Open the Wix Editor, go to Settings > Accessibility Wizard, and scan your site to identify issues with headings, alt text, contrast, and keyboard navigation.",
        },
        {
          "@type": "HowToStep",
          name: "Fix Detected Issues",
          text: "Address site-level issues (focus indicators, skip-to-content, language settings, DOM order) and page-level issues (headings, alt text, color contrast, unsupported elements).",
        },
        {
          "@type": "HowToStep",
          name: "Complete Manual Tasks",
          text: "Review link text, color usage, image descriptions, animation controls, zoom compatibility, and add an accessibility statement.",
        },
        {
          "@type": "HowToStep",
          name: "Test with Assistive Technology",
          text: "Navigate your Wix site using keyboard only and a screen reader (NVDA or VoiceOver) to catch issues automated tools miss.",
        },
        {
          "@type": "HowToStep",
          name: "Set Up Ongoing Monitoring",
          text: "Use an external accessibility scanner to monitor your site regularly. Wix updates and content changes can introduce new issues at any time.",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Wix ADA compliant?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Wix provides built-in accessibility features and tools like the Accessibility Wizard that help you work toward ADA compliance, but Wix alone cannot guarantee full compliance. Wix handles the underlying code (keyboard navigation, ARIA attributes, semantic HTML, DOM ordering), but you're responsible for content-level accessibility: adding alt text to images, maintaining color contrast, structuring headings properly, and using descriptive link text. Think of Wix as providing an accessible foundation — you need to build accessible content on top of it.",
          },
        },
        {
          "@type": "Question",
          name: "What is the Wix Accessibility Wizard?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Wix Accessibility Wizard is a built-in tool in the Wix Editor and Studio Editor that scans your site for accessibility issues and provides step-by-step guidance to fix them. It checks for two types of issues: detected issues (problems it finds automatically like missing alt text, heading structure problems, and contrast issues) and manual tasks (things you need to check yourself like descriptive link text, animation controls, and zoom compatibility). Access it via Settings > Accessibility Wizard in your editor.",
          },
        },
        {
          "@type": "Question",
          name: "Can I get sued for having a Wix website that isn't accessible?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. In 2025, over 8,667 federal ADA website lawsuits were filed, many targeting small businesses using website builders like Wix, Squarespace, and Shopify. In a notable February 2026 case, a Gainesville, Florida bakery using Squarespace was sued and settled for $6,500 because the platform's templates weren't fully ADA compliant. Using any website builder — including Wix — does not automatically protect you from ADA lawsuits. You are responsible for ensuring your website content is accessible.",
          },
        },
        {
          "@type": "Question",
          name: "Does Wix support WCAG 2.1 AA compliance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Wix's accessibility page references WCAG 2.0 compliance for its built-in features, though many of the platform's capabilities align with WCAG 2.1 requirements. Built-in features include keyboard navigation, automatic DOM ordering, ARIA attributes, heading tags, alt text fields, skip-to-content links, and focus indicators. However, WCAG 2.1 added 17 new success criteria beyond WCAG 2.0, and some of these (like reflow, text spacing, and pointer cancellation) depend on how you configure your Wix site's content and design choices.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use an accessibility overlay or widget on my Wix site?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Accessibility overlays have been widely criticized by disability advocates, sued by the FTC (accessiBe was fined $1 million in 2025), and rejected by courts as adequate remediation. The National Federation of the Blind has called overlays 'not only ineffective, but harmful.' Instead of adding an overlay, use Wix's built-in Accessibility Wizard, fix your content properly, and implement ongoing monitoring. Real compliance comes from fixing your website's actual code and content, not layering a widget on top.",
          },
        },
        {
          "@type": "Question",
          name: "How do I add alt text to images on Wix?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In the Wix Editor, click on any image, select the 'Settings' icon (gear), and find the 'Alt text' field. Write a brief, descriptive text that conveys the image's purpose (e.g., 'Customer using laptop at outdoor café' not 'image1.jpg'). For decorative images that don't convey information, check the 'Mark as decorative' option so screen readers skip them. The Accessibility Wizard will also flag images missing alt text and let you add it directly.",
          },
        },
        {
          "@type": "Question",
          name: "Are Wix templates accessible by default?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Wix offers templates with accessibility features built in, including proper heading structures, keyboard navigation, and semantic HTML. However, no template is fully accessible by default because accessibility depends heavily on the content you add — your images need alt text, your text needs sufficient contrast, your headings need proper hierarchy, and your links need descriptive text. Always run the Accessibility Wizard after setting up a template and adding your content.",
          },
        },
        {
          "@type": "Question",
          name: "What's the difference between Wix Editor and Wix Studio for accessibility?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both the Wix Editor and Wix Studio (formerly Editor X, designed for agencies and freelancers) include the Accessibility Wizard and built-in accessibility features. Studio offers more advanced design control, which means more responsibility for maintaining accessibility. With greater flexibility comes greater risk of introducing accessibility issues through custom layouts, animations, and interactions. Both editors support the same core accessibility features: keyboard navigation, ARIA attributes, DOM ordering, focus indicators, and the Accessibility Wizard.",
          },
        },
      ],
    },
  ];

  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <div className="relative overflow-hidden">
          <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-sky-500/30 via-blue-500/20 to-purple-500/30 blur-3xl" />
          <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-gradient-to-tr from-indigo-500/30 via-blue-500/10 to-purple-500/30 blur-3xl" />

          <Header />

          <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-14 pt-4">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              Platform Guide
            </p>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              Wix ADA Compliance Guide 2026: Make Your Website Accessible
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              Over 200 million websites run on Wix. But with{" "}
              <Link
                href="/blog/ada-website-lawsuit-statistics-2026"
                className="text-sky-400 hover:text-sky-300 underline"
              >
                8,667 ADA website lawsuits filed in 2025
              </Link>{" "}
              and{" "}
              <Link
                href="/blog/ecommerce-accessibility-ada-compliance-guide"
                className="text-sky-400 hover:text-sky-300 underline"
              >
                70% targeting e-commerce sites
              </Link>
              , using a website builder doesn't protect you from legal action. This
              guide shows you exactly how to make your Wix website WCAG 2.1 AA
              compliant — using Wix's built-in tools, no expensive overlays
              required.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
              <time dateTime="2026-03-01">March 1, 2026</time>
              <span>·</span>
              <span>14 min read</span>
            </div>
          </section>
        </div>

        <article className="mx-auto w-full max-w-4xl space-y-10 px-6 pb-24 text-slate-200">
          {/* Key Takeaway */}
          <section className="rounded-3xl border-2 border-sky-500/50 bg-sky-950/30 p-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/20 text-2xl">
                ⚡
              </span>
              <h2 className="text-2xl font-bold text-sky-300">
                Key Takeaway
              </h2>
            </div>
            <p className="text-lg text-sky-100 leading-relaxed">
              <strong>Wix provides the foundation for an accessible website — but you're
              responsible for the content.</strong> Wix handles keyboard navigation,
              ARIA attributes, semantic HTML, and DOM ordering automatically.
              You need to handle alt text, color contrast, heading hierarchy,
              descriptive links, and form labels. The built-in Accessibility
              Wizard walks you through both.
            </p>
          </section>

          {/* TOC */}
          <nav className="rounded-3xl border border-slate-700/50 bg-slate-900/50 p-8 space-y-4">
            <h2 className="text-xl font-bold text-slate-200">
              📋 Table of Contents
            </h2>
            <ul className="space-y-2 text-sky-400">
              <li>
                <a href="#is-wix-compliant" className="hover:text-sky-300 underline">
                  Is Wix ADA Compliant? The Honest Answer
                </a>
              </li>
              <li>
                <a href="#real-lawsuits" className="hover:text-sky-300 underline">
                  Real Lawsuits Against Businesses Using Website Builders
                </a>
              </li>
              <li>
                <a href="#built-in-features" className="hover:text-sky-300 underline">
                  What Wix Does for You: 9 Built-In Accessibility Features
                </a>
              </li>
              <li>
                <a href="#accessibility-wizard" className="hover:text-sky-300 underline">
                  Step-by-Step: Using the Wix Accessibility Wizard
                </a>
              </li>
              <li>
                <a href="#common-issues" className="hover:text-sky-300 underline">
                  7 Common Wix Accessibility Issues (And How to Fix Them)
                </a>
              </li>
              <li>
                <a href="#templates" className="hover:text-sky-300 underline">
                  Choosing an Accessible Wix Template
                </a>
              </li>
              <li>
                <a href="#wix-vs-editors" className="hover:text-sky-300 underline">
                  Wix Editor vs. Wix Studio: Accessibility Differences
                </a>
              </li>
              <li>
                <a href="#overlays" className="hover:text-sky-300 underline">
                  Why Accessibility Overlays Won't Save You
                </a>
              </li>
              <li>
                <a href="#wcag-checklist" className="hover:text-sky-300 underline">
                  Wix WCAG 2.1 AA Compliance Checklist
                </a>
              </li>
              <li>
                <a href="#testing" className="hover:text-sky-300 underline">
                  Testing Your Wix Site's Accessibility
                </a>
              </li>
              <li>
                <a href="#monitoring" className="hover:text-sky-300 underline">
                  Ongoing Monitoring: Why One Audit Isn't Enough
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-sky-300 underline">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>

          {/* Is Wix ADA Compliant? */}
          <section id="is-wix-compliant" className="space-y-4">
            <h2 className="text-3xl font-bold text-white">
              Is Wix ADA Compliant? The Honest Answer
            </h2>
            <p className="text-lg leading-relaxed">
              The short answer: <strong>partially</strong>. Wix provides
              accessibility infrastructure — the underlying code that makes
              keyboard navigation, screen reader support, and assistive
              technology compatibility possible. But Wix itself states clearly:
            </p>
            <blockquote className="border-l-4 border-sky-500 pl-6 py-4 bg-slate-900/50 rounded-r-xl text-lg italic text-slate-300">
              "Wix cannot guarantee or ensure that the use of our services is
              compliant with all accessibility laws and worldwide regulations.
              You are responsible for reviewing and complying with local
              legislation applicable to you or to your site visitors."
            </blockquote>
            <p className="text-lg leading-relaxed">
              This is an honest statement that every Wix user should understand.
              Here's the division of responsibility:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-6 space-y-3">
                <h3 className="text-xl font-bold text-emerald-300">
                  ✅ What Wix Handles
                </h3>
                <ul className="space-y-2 text-slate-200">
                  <li>• Full keyboard functionality</li>
                  <li>• Automatic DOM ordering (left-to-right)</li>
                  <li>• Built-in ARIA attributes</li>
                  <li>• Correct semantic HTML</li>
                  <li>• Smart focus rings</li>
                  <li>• Skip-to-content links</li>
                  <li>• Site language definition</li>
                  <li>• Heading tag support</li>
                  <li>• Alt text fields for images</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-amber-500/30 bg-amber-950/20 p-6 space-y-3">
                <h3 className="text-xl font-bold text-amber-300">
                  ⚠️ What You Must Handle
                </h3>
                <ul className="space-y-2 text-slate-200">
                  <li>• Writing alt text for every image</li>
                  <li>• Maintaining color contrast ratios</li>
                  <li>• Structuring headings properly (H1→H2→H3)</li>
                  <li>• Using descriptive link text (not "click here")</li>
                  <li>• Labeling form fields correctly</li>
                  <li>• Adding captions to videos</li>
                  <li>• Ensuring animations can be paused</li>
                  <li>• Testing with keyboard and screen readers</li>
                  <li>• Keeping third-party embeds accessible</li>
                </ul>
              </div>
            </div>

            <p className="text-lg leading-relaxed">
              Think of it like a car manufacturer providing seatbelts and
              airbags — the safety features are there, but you still need to
              buckle up and drive responsibly. Wix gives you accessible
              infrastructure. You need to build accessible content on top of it.
            </p>
          </section>

          {/* Real Lawsuits */}
          <section id="real-lawsuits" className="space-y-4">
            <h2 className="text-3xl font-bold text-white">
              Real Lawsuits Against Businesses Using Website Builders
            </h2>
            <p className="text-lg leading-relaxed">
              If you think using Wix (or any website builder) protects you from
              ADA lawsuits, think again. Recent cases show that businesses
              using template-based websites are frequent targets:
            </p>

            <div className="space-y-4">
              <div className="rounded-xl border border-rose-500/30 bg-rose-950/20 p-6 space-y-3">
                <h3 className="text-lg font-bold text-rose-300">
                  📋 Gainesville, FL — 49 Businesses Sued by One Plaintiff (2024-2026)
                </h3>
                <p className="text-slate-200">
                  A legally blind woman sued 49 businesses in the Gainesville
                  area for inaccessible websites. Uppercrust, a local bakery
                  using <strong>Squarespace</strong>, settled for{" "}
                  <strong>$6,500</strong> — plus additional attorney fees. The
                  owner noted: "That's a lot of croissants to cover an
                  unexpected cost." The bakery wasn't even aware that
                  Squarespace's standard templates weren't ADA compliant.
                </p>
              </div>

              <div className="rounded-xl border border-rose-500/30 bg-rose-950/20 p-6 space-y-3">
                <h3 className="text-lg font-bold text-rose-300">
                  📋 Atlanta, GA — $200K+ in Compliance Costs
                </h3>
                <p className="text-slate-200">
                  Sara Campbell, a fashion retailer with an e-commerce site,
                  was caught in a blitz of dozens of lawsuits by a single
                  plaintiff. Even after hiring specialized ADA coders and a
                  school for the blind to help fix her website, she was sued{" "}
                  <strong>two more times</strong>. Total cost: over{" "}
                  <strong>$200,000</strong>. A 2026 WSB-TV investigation found
                  that 90% of 15,000+ lawsuits were filed by just 16
                  specialized law firms.
                </p>
              </div>

              <div className="rounded-xl border border-rose-500/30 bg-rose-950/20 p-6 space-y-3">
                <h3 className="text-lg font-bold text-rose-300">
                  📋 Nationwide — Serial Plaintiff Files 500+ Lawsuits
                </h3>
                <p className="text-slate-200">
                  In the{" "}
                  <Link
                    href="/blog/fashion-nova-doj-settlement-rejected-2026"
                    className="text-sky-400 hover:text-sky-300 underline"
                  >
                    Alcazar v. Fashion Nova
                  </Link>{" "}
                  class action, the DOJ noted that the plaintiff's attorneys had
                  filed "the same exact lawsuit" in over{" "}
                  <strong>500 cases</strong> between 2019 and 2023, "with the
                  vast majority ending in a non-disclosed individual
                  settlement." The plaintiff personally filed 20 cases in two
                  years alleging the same four accessibility barriers.
                </p>
              </div>
            </div>

            <p className="text-lg leading-relaxed">
              The message is clear: serial plaintiffs and their attorneys are
              actively scanning websites for accessibility violations. Using Wix
              doesn't make you invisible — and not knowing your site has
              problems is not a legal defense.
            </p>
          </section>

          {/* Built-In Features */}
          <section id="built-in-features" className="space-y-6">
            <h2 className="text-3xl font-bold text-white">
              What Wix Does for You: 9 Built-In Accessibility Features
            </h2>
            <p className="text-lg leading-relaxed">
              Credit where it's due — Wix has invested significantly in
              platform-level accessibility. Here's what's built into every Wix
              site automatically:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 text-xl">⌨️</span>
                  <h3 className="text-lg font-bold text-white">1. Full Keyboard Functionality</h3>
                </div>
                <p className="text-slate-300">
                  All Wix components — buttons, menus, forms, online stores —
                  are operable with keyboard only. Users can tab, enter, and
                  arrow-key through your site without touching a mouse.
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 text-xl">📐</span>
                  <h3 className="text-lg font-bold text-white">2. Automatic DOM Order</h3>
                </div>
                <p className="text-slate-300">
                  The Document Object Model is automatically arranged so
                  keyboard and screen reader users navigate content in the
                  correct visual order (left to right, top to bottom).
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 text-xl">🏷️</span>
                  <h3 className="text-lg font-bold text-white">3. ARIA Attributes</h3>
                </div>
                <p className="text-slate-300">
                  Built-in ARIA (Accessible Rich Internet Applications)
                  attributes provide screen readers with additional context
                  about interactive elements. You can also add custom
                  attributes to apps and components you build.
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 text-xl">🏗️</span>
                  <h3 className="text-lg font-bold text-white">4. Correct Semantics</h3>
                </div>
                <p className="text-slate-300">
                  Components use proper semantic HTML (buttons are{" "}
                  <code className="bg-slate-800 px-1 rounded">&lt;button&gt;</code>,
                  navigation is{" "}
                  <code className="bg-slate-800 px-1 rounded">&lt;nav&gt;</code>,
                  headings use{" "}
                  <code className="bg-slate-800 px-1 rounded">&lt;h1&gt;</code>
                  –<code className="bg-slate-800 px-1 rounded">&lt;h6&gt;</code>)
                  so assistive technology understands page structure.
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 text-xl">🔵</span>
                  <h3 className="text-lg font-bold text-white">5. Smart Focus Ring</h3>
                </div>
                <p className="text-slate-300">
                  Dual-color focus rings automatically appear when keyboard
                  navigation is detected (and disappear for mouse users). This
                  ensures keyboard users always know where they are on the page.
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 text-xl">⏭️</span>
                  <h3 className="text-lg font-bold text-white">6. Skip to Content</h3>
                </div>
                <p className="text-slate-300">
                  A "Skip to Main Content" link lets keyboard users bypass
                  navigation menus and jump directly to the page's main
                  content — essential for sites with large menus.
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 text-xl">🌐</span>
                  <h3 className="text-lg font-bold text-white">7. Site Language Definition</h3>
                </div>
                <p className="text-slate-300">
                  Your site's language is defined in the HTML so screen readers
                  use the correct pronunciation and reading rules. Crucial for
                  multilingual sites.
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 text-xl">📝</span>
                  <h3 className="text-lg font-bold text-white">8. Heading Tags</h3>
                </div>
                <p className="text-slate-300">
                  Wix generates proper heading tag hierarchy so screen readers
                  can navigate by headings. You control which text becomes H1,
                  H2, H3, etc. through the editor.
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 text-xl">🖼️</span>
                  <h3 className="text-lg font-bold text-white">9. Alt Text Fields</h3>
                </div>
                <p className="text-slate-300">
                  Every image in Wix has an alt text field where you can add
                  descriptions for screen readers. You can also mark decorative
                  images so screen readers skip them entirely.
                </p>
              </div>
            </div>

            <p className="text-lg leading-relaxed">
              <strong>Important note:</strong> Wix's accessibility page
              references compliance with{" "}
              <strong>WCAG 2.0</strong> — not the current WCAG 2.1 standard
              that the DOJ references in its{" "}
              <Link
                href="/blog/ada-title-ii-deadline-countdown-2026"
                className="text-sky-400 hover:text-sky-300 underline"
              >
                ADA Title II rule
              </Link>
              . WCAG 2.1 added 17 new success criteria including requirements
              for mobile accessibility, reflow, and pointer cancellation. While
              many of Wix's features align with 2.1, this gap means you may
              need to go beyond what Wix's built-in tools cover.
            </p>
          </section>

          {/* Accessibility Wizard */}
          <section id="accessibility-wizard" className="space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Step-by-Step: Using the Wix Accessibility Wizard
            </h2>
            <p className="text-lg leading-relaxed">
              The Accessibility Wizard is your most powerful tool for Wix
              accessibility. Here's how to use it effectively:
            </p>

            <div className="space-y-6">
              <div className="rounded-xl border border-sky-500/30 bg-sky-950/20 p-6 space-y-3">
                <h3 className="text-xl font-bold text-sky-300">
                  Step 1: Open the Wizard
                </h3>
                <ul className="space-y-2 text-slate-200">
                  <li className="flex gap-3">
                    <span className="text-sky-400">→</span>
                    <span>
                      <strong>Wix Editor:</strong> Go to your Editor → Select{" "}
                      <strong>Settings</strong> at the top → Select{" "}
                      <strong>Accessibility Wizard</strong> → Click{" "}
                      <strong>Scan Site</strong>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-sky-400">→</span>
                    <span>
                      <strong>Wix Studio:</strong> Same flow — the Wizard is
                      available in both editors
                    </span>
                  </li>
                </ul>
                <p className="text-sm text-slate-400">
                  Note: For multilingual sites, the Wizard only works with your
                  primary language. Use Wix's accessibility checklist for
                  secondary languages.
                </p>
              </div>

              <div className="rounded-xl border border-sky-500/30 bg-sky-950/20 p-6 space-y-3">
                <h3 className="text-xl font-bold text-sky-300">
                  Step 2: Fix Detected Issues (Automatic)
                </h3>
                <p className="text-slate-200">
                  The Wizard finds these issues automatically and gives you
                  in-editor fixes:
                </p>
                <div className="space-y-3 mt-3">
                  <div className="rounded-lg bg-slate-800/50 p-4">
                    <p className="font-semibold text-white">Site-Level Issues</p>
                    <ul className="mt-2 space-y-1 text-slate-300 text-sm">
                      <li>• <strong>Focus indicators</strong> — Enable/configure visible focus rings</li>
                      <li>• <strong>Skip to Main Content</strong> — Add the skip navigation link</li>
                      <li>• <strong>Site language</strong> — Set your primary language correctly</li>
                      <li>• <strong>DOM order</strong> — Review and fix the reading order of elements</li>
                    </ul>
                  </div>
                  <div className="rounded-lg bg-slate-800/50 p-4">
                    <p className="font-semibold text-white">Page-Level Issues</p>
                    <ul className="mt-2 space-y-1 text-slate-300 text-sm">
                      <li>• <strong>Page titles</strong> — Give each page a unique, descriptive title</li>
                      <li>• <strong>Heading structure</strong> — Fix heading hierarchy (H1→H2→H3)</li>
                      <li>• <strong>Missing alt text</strong> — Add descriptions to flagged images</li>
                      <li>• <strong>Color contrast</strong> — Fix text/background contrast failures</li>
                      <li>• <strong>Unsupported elements</strong> — Replace elements that aren't accessible</li>
                      <li>• <strong>Media accessibility</strong> — Ensure videos and audio have captions/transcripts</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-sky-500/30 bg-sky-950/20 p-6 space-y-3">
                <h3 className="text-xl font-bold text-sky-300">
                  Step 3: Complete Manual Tasks
                </h3>
                <p className="text-slate-200">
                  These require your judgment — the Wizard can't automate them:
                </p>
                <ul className="mt-3 space-y-2 text-slate-200">
                  <li className="flex gap-3">
                    <span className="text-amber-400">⚠️</span>
                    <span>
                      <strong>Descriptive link and button text</strong> — Replace
                      "Click Here" or "Read More" with text that makes sense out
                      of context (e.g., "View our pricing plans")
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-400">⚠️</span>
                    <span>
                      <strong>Color-only information</strong> — Don't use color
                      alone to convey meaning (e.g., red for errors). Add icons,
                      text labels, or patterns.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-400">⚠️</span>
                    <span>
                      <strong>Text in images</strong> — If images contain text, add that
                      text to the alt description or use HTML text instead
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-400">⚠️</span>
                    <span>
                      <strong>Animation and audio controls</strong> — Ensure
                      auto-playing videos, slideshows, and animations can be
                      paused or stopped
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-400">⚠️</span>
                    <span>
                      <strong>Zoom compatibility</strong> — Verify all content is
                      visible and functional when the browser is zoomed to 200%
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-400">⚠️</span>
                    <span>
                      <strong>Accessibility statement</strong> — Add a page
                      declaring your commitment to accessibility and providing
                      contact information for users who encounter barriers
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Common Issues */}
          <section id="common-issues" className="space-y-6">
            <h2 className="text-3xl font-bold text-white">
              7 Common Wix Accessibility Issues (And How to Fix Them)
            </h2>

            <div className="space-y-4">
              <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">1. Missing Alt Text on Images</h3>
                  <span className="rounded-full bg-rose-500/20 px-3 py-1 text-xs font-bold text-rose-300">CRITICAL</span>
                </div>
                <p className="text-slate-300">
                  <strong>The problem:</strong> Images without alt text are invisible to screen readers.
                  This is the #1 WCAG failure across all websites and the most commonly cited issue in ADA lawsuits.
                </p>
                <p className="text-slate-300">
                  <strong>The fix:</strong> Click any image → Settings (gear icon) → Add "Alt text." Describe what's <em>in</em> the image and <em>why</em> it matters. For decorative images (backgrounds, dividers), check "Mark as decorative." The Accessibility Wizard flags all images missing alt text.
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">2. Poor Color Contrast</h3>
                  <span className="rounded-full bg-rose-500/20 px-3 py-1 text-xs font-bold text-rose-300">CRITICAL</span>
                </div>
                <p className="text-slate-300">
                  <strong>The problem:</strong> Text that doesn't meet the{" "}
                  <Link href="/blog/top-10-wcag-failures" className="text-sky-400 hover:text-sky-300 underline">
                    4.5:1 contrast ratio
                  </Link>{" "}
                  (3:1 for large text) is hard or impossible to read for people with low vision.
                  Light gray text on white backgrounds is a common offender.
                </p>
                <p className="text-slate-300">
                  <strong>The fix:</strong> The Accessibility Wizard flags contrast issues. Use Wix's color
                  picker or a{" "}
                  <Link href="/tools/color-contrast" className="text-sky-400 hover:text-sky-300 underline">
                    free contrast checker
                  </Link>{" "}
                  to verify ratios. When in doubt, darker text on lighter backgrounds is safer.
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">3. Broken Heading Hierarchy</h3>
                  <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-bold text-amber-300">HIGH</span>
                </div>
                <p className="text-slate-300">
                  <strong>The problem:</strong> Skipping heading levels (H1 → H3, or multiple H1s) confuses screen
                  reader users who navigate by headings. Many Wix users choose heading styles based on <em>appearance</em>
                  rather than <em>hierarchy</em>.
                </p>
                <p className="text-slate-300">
                  <strong>The fix:</strong> Use exactly one H1 per page (your main title). Follow with H2
                  for sections, H3 for subsections. If you want smaller text, change the font size — don't
                  misuse heading levels for styling.
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">4. Non-Descriptive Link Text</h3>
                  <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-bold text-amber-300">HIGH</span>
                </div>
                <p className="text-slate-300">
                  <strong>The problem:</strong> Screen readers can list all links on a page. If every link says
                  "Click Here" or "Read More," users have no idea where they'll go. This is a WCAG 2.4.4 failure.
                </p>
                <p className="text-slate-300">
                  <strong>The fix:</strong> Make link text describe the destination: "View our pricing plans" not
                  "Click here." For buttons, use action-oriented text: "Book a free consultation" not "Submit."
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">5. Auto-Playing Videos Without Controls</h3>
                  <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-bold text-amber-300">HIGH</span>
                </div>
                <p className="text-slate-300">
                  <strong>The problem:</strong> Background videos and auto-playing media can trigger seizures,
                  cause confusion for screen readers, and violate WCAG 2.2.2 (Pause, Stop, Hide). Wix makes it
                  easy to add video backgrounds — but they need controls.
                </p>
                <p className="text-slate-300">
                  <strong>The fix:</strong> Add visible pause/stop controls to any auto-playing media. For video
                  backgrounds, ensure they don't flash more than 3 times per second. Add captions to all
                  informational videos. Consider using a static image as a fallback.
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">6. Third-Party App and Embed Issues</h3>
                  <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-bold text-amber-300">HIGH</span>
                </div>
                <p className="text-slate-300">
                  <strong>The problem:</strong> Third-party apps from the Wix App Market, embedded Google Maps,
                  social media feeds, and booking widgets may not be accessible. Wix can't control the
                  accessibility of external content you embed.
                </p>
                <p className="text-slate-300">
                  <strong>The fix:</strong> Test every third-party element with keyboard navigation. Can you reach
                  all controls? Does it work with a screen reader? If an app isn't accessible, look for an
                  alternative or provide an accessible fallback (e.g., a text address alongside a map).
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">7. Missing Form Labels</h3>
                  <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-bold text-amber-300">HIGH</span>
                </div>
                <p className="text-slate-300">
                  <strong>The problem:</strong> Contact forms and other Wix forms may use placeholder text
                  instead of proper labels. When a screen reader user focuses on a field, they hear nothing —
                  or hear the placeholder, which disappears when they start typing.
                </p>
                <p className="text-slate-300">
                  <strong>The fix:</strong> Ensure every form field has a visible label that's programmatically
                  associated with the input. In Wix's form builder, use the "Label" option rather than relying
                  solely on placeholder text. Also add error messages that clearly identify which field has
                  an issue and what the user needs to fix.
                </p>
              </div>
            </div>
          </section>

          {/* Templates */}
          <section id="templates" className="space-y-4">
            <h2 className="text-3xl font-bold text-white">
              Choosing an Accessible Wix Template
            </h2>
            <p className="text-lg leading-relaxed">
              Wix offers templates with accessibility features built in, but no
              template is fully accessible out of the box. Here's how to choose
              and customize wisely:
            </p>

            <div className="space-y-3">
              <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-5">
                <h3 className="text-lg font-bold text-emerald-300">✅ Look For</h3>
                <ul className="mt-2 space-y-1.5 text-slate-200">
                  <li>• Clean, simple layouts with clear visual hierarchy</li>
                  <li>• High contrast between text and background colors</li>
                  <li>• Standard navigation patterns (top nav, sidebar, footer links)</li>
                  <li>• Minimal reliance on animations and hover effects</li>
                  <li>• Wix's "Accessibility Templates" collection (search for it in the template picker)</li>
                </ul>
              </div>

              <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-5">
                <h3 className="text-lg font-bold text-rose-300">❌ Avoid</h3>
                <ul className="mt-2 space-y-1.5 text-slate-200">
                  <li>• Templates with lots of text in images (not readable by screen readers)</li>
                  <li>• Heavy parallax scrolling effects (can cause motion sickness)</li>
                  <li>• Hamburger menus as the only navigation on desktop</li>
                  <li>• Templates that rely heavily on color to distinguish sections</li>
                  <li>• Complex multi-layered layouts with overlapping elements</li>
                </ul>
              </div>
            </div>

            <p className="text-lg leading-relaxed">
              <strong>Pro tip:</strong> After selecting a template, immediately
              run the Accessibility Wizard before adding any content. This gives
              you a baseline of the template's accessibility and flags any
              built-in issues you need to fix first.
            </p>
          </section>

          {/* Wix Editor vs Studio */}
          <section id="wix-vs-editors" className="space-y-4">
            <h2 className="text-3xl font-bold text-white">
              Wix Editor vs. Wix Studio: Accessibility Differences
            </h2>
            <p className="text-lg leading-relaxed">
              Wix offers two main editing environments. Both include
              accessibility tools, but they serve different audiences with
              different risks:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-3xl border border-sky-500/30 bg-sky-950/20 p-6 space-y-3">
                <h3 className="text-xl font-bold text-sky-300">
                  Wix Editor
                </h3>
                <p className="text-slate-300">
                  Best for small business owners and non-technical users.
                </p>
                <ul className="space-y-2 text-slate-200 text-sm">
                  <li>• ✅ Accessibility Wizard built-in</li>
                  <li>• ✅ More constrained layouts = fewer accessibility mistakes</li>
                  <li>• ✅ Templates enforce some structure</li>
                  <li>• ⚠️ Less control over custom ARIA attributes</li>
                  <li>• ⚠️ Some design limitations may frustrate advanced users</li>
                </ul>
                <p className="text-sm text-sky-200/70 italic">
                  Lower ceiling, but harder to break accessibility.
                </p>
              </div>

              <div className="rounded-3xl border border-indigo-500/30 bg-indigo-950/20 p-6 space-y-3">
                <h3 className="text-xl font-bold text-indigo-300">
                  Wix Studio (formerly Editor X)
                </h3>
                <p className="text-slate-300">
                  Built for agencies, freelancers, and developers.
                </p>
                <ul className="space-y-2 text-slate-200 text-sm">
                  <li>• ✅ Accessibility Wizard built-in</li>
                  <li>• ✅ Full control over custom ARIA attributes</li>
                  <li>• ✅ Advanced responsive design controls</li>
                  <li>• ⚠️ More design freedom = more ways to break accessibility</li>
                  <li>• ⚠️ Custom interactions may not be keyboard-accessible</li>
                </ul>
                <p className="text-sm text-indigo-200/70 italic">
                  Higher ceiling, but more responsibility on you.
                </p>
              </div>
            </div>
          </section>

          {/* Overlays Warning */}
          <section id="overlays" className="space-y-4">
            <h2 className="text-3xl font-bold text-white">
              Why Accessibility Overlays Won't Save You
            </h2>

            <div className="rounded-3xl border-2 border-rose-500/50 bg-rose-950/30 p-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/20 text-2xl">
                  ⛔
                </span>
                <h3 className="text-xl font-bold text-rose-300">
                  Do Not Install Accessibility Overlay Apps on Your Wix Site
                </h3>
              </div>
              <p className="text-lg text-rose-100 leading-relaxed">
                If you search "Wix accessibility" you'll find dozens of
                articles (including from accessiBe, ReciteMe, and others)
                recommending you install their overlay widgets. <strong>Do not
                do this.</strong> Here's why:
              </p>
              <ul className="space-y-3 text-lg text-rose-100">
                <li className="flex gap-3">
                  <span className="text-rose-400">❌</span>
                  <span>
                    <strong>The FTC fined accessiBe $1 million</strong> in 2025
                    for deceptive claims about WCAG compliance.{" "}
                    <Link
                      href="/blog/ftc-accessibe-fine-overlay-failures"
                      className="text-sky-400 hover:text-sky-300 underline"
                    >
                      Read our analysis →
                    </Link>
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-rose-400">❌</span>
                  <span>
                    The <strong>National Federation of the Blind</strong> called
                    overlays "not only ineffective, but harmful" and urged
                    organizations to stop using them
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-rose-400">❌</span>
                  <span>
                    Courts have rejected overlays as adequate remediation — businesses
                    using overlays have still{" "}
                    <strong>lost ADA lawsuits</strong>
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-rose-400">❌</span>
                  <span>
                    Over <strong>800 accessibility professionals signed an open
                    letter</strong> against overlay products at{" "}
                    <a
                      href="https://overlayfactsheet.com"
                      className="text-sky-400 hover:text-sky-300 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      overlayfactsheet.com
                    </a>
                  </span>
                </li>
              </ul>
              <p className="text-lg text-rose-100 leading-relaxed">
                Overlays are especially counterproductive on Wix because{" "}
                <strong>Wix already provides the built-in accessibility
                features</strong> that overlays claim to add. Using the
                Accessibility Wizard and fixing your content is both more
                effective and free.
              </p>
            </div>
          </section>

          {/* WCAG Checklist */}
          <section id="wcag-checklist" className="space-y-4">
            <h2 className="text-3xl font-bold text-white">
              Wix WCAG 2.1 AA Compliance Checklist
            </h2>
            <p className="text-lg leading-relaxed">
              Use this checklist to systematically verify your Wix site meets
              the most important WCAG 2.1 Level AA success criteria:
            </p>

            <div className="space-y-4">
              <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-lg font-bold text-sky-300">
                  👁️ Perceivable — Can users perceive all content?
                </h3>
                <ul className="space-y-2 text-slate-200">
                  <li>☐ All images have descriptive alt text (or marked decorative)</li>
                  <li>☐ Videos have captions and/or transcripts</li>
                  <li>☐ Audio content has text alternatives</li>
                  <li>☐ Text color contrast is 4.5:1 minimum (3:1 for large text)</li>
                  <li>☐ Content doesn't rely on color alone to convey meaning</li>
                  <li>☐ Content reflows properly at 200% browser zoom</li>
                  <li>☐ Text spacing can be adjusted without content loss</li>
                </ul>
              </div>

              <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-lg font-bold text-sky-300">
                  ⌨️ Operable — Can users navigate and interact?
                </h3>
                <ul className="space-y-2 text-slate-200">
                  <li>☐ All functionality works with keyboard alone</li>
                  <li>☐ No keyboard traps (user can always tab away)</li>
                  <li>☐ Skip-to-content link is present and working</li>
                  <li>☐ Focus indicator is visible on all interactive elements</li>
                  <li>☐ Page titles are unique and descriptive</li>
                  <li>☐ Focus order follows visual layout</li>
                  <li>☐ Auto-playing content can be paused or stopped</li>
                  <li>☐ No content flashes more than 3 times per second</li>
                </ul>
              </div>

              <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-lg font-bold text-sky-300">
                  💡 Understandable — Can users understand content and navigation?
                </h3>
                <ul className="space-y-2 text-slate-200">
                  <li>☐ Page language is correctly set</li>
                  <li>☐ Navigation is consistent across pages</li>
                  <li>☐ Form fields have visible labels</li>
                  <li>☐ Error messages identify the problem and suggest fixes</li>
                  <li>☐ Links describe their destination (no "Click Here")</li>
                  <li>☐ Heading hierarchy is logical (H1→H2→H3)</li>
                </ul>
              </div>

              <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-lg font-bold text-sky-300">
                  🔧 Robust — Does content work with assistive technology?
                </h3>
                <ul className="space-y-2 text-slate-200">
                  <li>☐ Site works with major screen readers (NVDA, VoiceOver, JAWS)</li>
                  <li>☐ Custom components have appropriate ARIA roles</li>
                  <li>☐ Status messages are announced to screen readers</li>
                  <li>☐ Third-party embeds and apps are keyboard accessible</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Testing */}
          <section id="testing" className="space-y-4">
            <h2 className="text-3xl font-bold text-white">
              Testing Your Wix Site's Accessibility
            </h2>
            <p className="text-lg leading-relaxed">
              The Accessibility Wizard is a great start, but it can't catch
              everything. Here's a comprehensive testing approach:
            </p>

            <div className="space-y-4">
              <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-lg font-bold text-sky-300">
                  1. Automated Scanning (Catches ~30-40% of issues)
                </h3>
                <ul className="space-y-2 text-slate-200">
                  <li>• <strong>Wix Accessibility Wizard</strong> — Your first stop, built right into the editor</li>
                  <li>• <strong>External scanners</strong> — Use a{" "}
                    <Link href="/" className="text-sky-400 hover:text-sky-300 underline">
                      free accessibility checker
                    </Link>{" "}
                    to scan your published site and catch issues the Wizard misses
                  </li>
                  <li>• <strong>Browser DevTools</strong> — Lighthouse in Chrome includes accessibility audits</li>
                </ul>
              </div>

              <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-lg font-bold text-sky-300">
                  2. Keyboard Testing (Catches ~20% more)
                </h3>
                <ul className="space-y-2 text-slate-200">
                  <li>• Put your mouse away and navigate your entire site with keyboard only</li>
                  <li>• <strong>Tab</strong> through every link, button, and form field</li>
                  <li>• <strong>Enter/Space</strong> to activate buttons and links</li>
                  <li>• <strong>Escape</strong> to close modals and popups</li>
                  <li>• <strong>Arrow keys</strong> for menus and select dropdowns</li>
                  <li>• Check: Can you reach everything? Can you always see where focus is? Can you escape from everything?</li>
                </ul>
              </div>

              <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-lg font-bold text-sky-300">
                  3. Screen Reader Testing (Catches ~30% more)
                </h3>
                <ul className="space-y-2 text-slate-200">
                  <li>• <strong>Mac:</strong> VoiceOver (built-in, press Cmd+F5)</li>
                  <li>• <strong>Windows:</strong> NVDA (free download from nvaccess.org)</li>
                  <li>• <strong>Mobile:</strong> VoiceOver on iOS, TalkBack on Android</li>
                  <li>• Listen to your entire homepage. Does it make sense? Can you navigate by headings?</li>
                  <li>• Try completing your most important user flow (contact form, purchase, booking)</li>
                </ul>
              </div>
            </div>

            <p className="text-lg leading-relaxed">
              For a deeper dive into testing tools, see our{" "}
              <Link
                href="/blog/best-accessibility-testing-tools-compared-2026"
                className="text-sky-400 hover:text-sky-300 underline"
              >
                best accessibility testing tools comparison
              </Link>
              .
            </p>
          </section>

          {/* Ongoing Monitoring */}
          <section id="monitoring" className="space-y-4">
            <h2 className="text-3xl font-bold text-white">
              Ongoing Monitoring: Why One Audit Isn't Enough
            </h2>
            <p className="text-lg leading-relaxed">
              Accessibility is not a one-time project. Your Wix site changes
              constantly — new blog posts, updated images, added apps, template
              updates from Wix itself. Each change can introduce new
              accessibility issues.
            </p>

            <div className="rounded-3xl border border-amber-500/30 bg-amber-950/20 p-8 space-y-4">
              <h3 className="text-xl font-bold text-amber-300">
                Why Continuous Monitoring Matters
              </h3>
              <ul className="space-y-3 text-lg text-slate-200">
                <li className="flex gap-3">
                  <span className="text-amber-400">→</span>
                  <span>
                    <strong>Content changes break compliance:</strong> Every new
                    image without alt text, every "Click Here" link, every video
                    without captions creates a new violation
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-400">→</span>
                  <span>
                    <strong>Wix platform updates:</strong> When Wix updates its
                    editor or templates, it can change how your site's
                    accessibility works — for better or worse
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-400">→</span>
                  <span>
                    <strong>Third-party app updates:</strong> Apps you've
                    installed can change their accessibility profile at any time
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-400">→</span>
                  <span>
                    <strong>
                      <Link
                        href="/blog/repeat-ada-lawsuits-why-one-settlement-isnt-enough"
                        className="text-sky-400 hover:text-sky-300 underline"
                      >
                        Repeat lawsuits are real
                      </Link>
                    </strong>
                    : 46% of ADA defendants get sued more than once. A one-time
                    fix doesn't protect you long-term.
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed">
              The best approach: run the Wix Accessibility Wizard every time you
              make significant changes, and supplement with an external
              monitoring tool that scans your published site on a regular
              schedule.
            </p>
          </section>

          {/* CTA */}
          <section className="rounded-3xl border-2 border-sky-500/50 bg-gradient-to-br from-sky-950/50 to-indigo-950/50 p-8 text-center space-y-4">
            <h2 className="text-2xl font-bold text-white">
              Scan Your Wix Website for Free
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              The Wix Accessibility Wizard is great for in-editor issues. But
              how does your <em>published</em> site look to real users and
              search engines? Get an instant accessibility score with our free
              scanner.
            </p>
            <div className="pt-2">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-8 py-3 text-lg font-semibold text-white hover:bg-sky-400 transition-colors"
              >
                Check Your Accessibility Score →
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="space-y-6 pt-6">
            <h2 className="text-3xl font-bold text-white">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-lg font-bold text-sky-300">
                  Is Wix ADA compliant?
                </h3>
                <p className="text-slate-200 leading-relaxed">
                  Wix provides built-in accessibility features and tools like
                  the Accessibility Wizard that help you work toward ADA
                  compliance, but Wix alone cannot guarantee full compliance.
                  Wix handles the underlying code (keyboard navigation, ARIA
                  attributes, semantic HTML, DOM ordering), but you're
                  responsible for content-level accessibility: adding alt text
                  to images, maintaining color contrast, structuring headings
                  properly, and using descriptive link text.
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-lg font-bold text-sky-300">
                  What is the Wix Accessibility Wizard?
                </h3>
                <p className="text-slate-200 leading-relaxed">
                  The Wix Accessibility Wizard is a built-in tool that scans
                  your site for accessibility issues and provides step-by-step
                  guidance to fix them. It checks for detected issues (missing
                  alt text, heading problems, contrast failures) and manual
                  tasks (descriptive links, animation controls, zoom
                  compatibility). Access it via Settings → Accessibility
                  Wizard in your editor.
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-lg font-bold text-sky-300">
                  Can I get sued for having a Wix website that isn't accessible?
                </h3>
                <p className="text-slate-200 leading-relaxed">
                  Yes. Over 8,667 federal ADA lawsuits were filed in 2025, many
                  targeting small businesses using website builders. In a
                  notable 2026 case, a Florida bakery using Squarespace settled
                  for $6,500 because its templates weren't fully accessible.
                  Using any website builder doesn't protect you from legal
                  action.
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-lg font-bold text-sky-300">
                  Should I use an accessibility overlay on my Wix site?
                </h3>
                <p className="text-slate-200 leading-relaxed">
                  No. Accessibility overlays have been{" "}
                  <Link
                    href="/blog/ftc-accessibe-fine-overlay-failures"
                    className="text-sky-400 hover:text-sky-300 underline"
                  >
                    fined by the FTC
                  </Link>
                  , rejected by disability advocates, and dismissed by courts.
                  Wix already provides built-in accessibility features that are
                  more effective than any overlay. Use the Accessibility
                  Wizard and fix your content directly — it's both better and
                  free.
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-lg font-bold text-sky-300">
                  Does Wix support WCAG 2.1 AA?
                </h3>
                <p className="text-slate-200 leading-relaxed">
                  Wix's accessibility page references WCAG 2.0 compliance for
                  built-in features. Many capabilities align with WCAG 2.1, but
                  2.1 added 17 new success criteria including mobile
                  accessibility requirements. Achieving full WCAG 2.1 AA on Wix
                  is possible but requires attention to content and design
                  choices beyond what the platform provides automatically.
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-lg font-bold text-sky-300">
                  How do I add alt text to images on Wix?
                </h3>
                <p className="text-slate-200 leading-relaxed">
                  Click on any image in the Wix Editor → Settings (gear icon) →
                  Find the "Alt text" field. Write a brief description of the
                  image's content and purpose. For decorative images, check
                  "Mark as decorative" so screen readers skip them. The
                  Accessibility Wizard will also flag all images missing alt
                  text.
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-lg font-bold text-sky-300">
                  Are Wix templates accessible by default?
                </h3>
                <p className="text-slate-200 leading-relaxed">
                  Wix templates include accessibility features like proper
                  heading structures and keyboard navigation, but no template is
                  fully accessible without your input. You still need to add alt
                  text, ensure contrast, maintain heading hierarchy, and write
                  descriptive links. Always run the Accessibility Wizard after
                  setting up a template.
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-lg font-bold text-sky-300">
                  What's the difference between Wix Editor and Wix Studio for
                  accessibility?
                </h3>
                <p className="text-slate-200 leading-relaxed">
                  Both include the Accessibility Wizard and core features.
                  Studio (formerly Editor X) offers more design control, which
                  means more responsibility. Greater flexibility increases the
                  risk of introducing accessibility issues through custom
                  layouts and interactions. The Wix Editor's constraints
                  actually make it harder to accidentally break accessibility.
                </p>
              </div>
            </div>
          </section>

          {/* Related Reading */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Related Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/blog/shopify-ada-compliance-guide-2026"
                className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-5 hover:border-sky-500/50 transition-colors block"
              >
                <p className="text-sky-400 font-semibold">
                  Shopify ADA Compliance Guide 2026 →
                </p>
                <p className="text-sm text-slate-400 mt-1">
                  Make your Shopify store WCAG 2.1 AA compliant
                </p>
              </Link>
              <Link
                href="/blog/squarespace-ada-compliance-guide-2026"
                className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-5 hover:border-sky-500/50 transition-colors block"
              >
                <p className="text-sky-400 font-semibold">
                  Squarespace ADA Compliance Guide 2026 →
                </p>
                <p className="text-sm text-slate-400 mt-1">
                  Fix accessibility issues on your Squarespace site
                </p>
              </Link>
              <Link
                href="/blog/wordpress-accessibility-guide"
                className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-5 hover:border-sky-500/50 transition-colors block"
              >
                <p className="text-sky-400 font-semibold">
                  WordPress Accessibility Guide →
                </p>
                <p className="text-sm text-slate-400 mt-1">
                  Complete guide to WordPress WCAG compliance
                </p>
              </Link>
              <Link
                href="/blog/accessibility-widgets"
                className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-5 hover:border-sky-500/50 transition-colors block"
              >
                <p className="text-sky-400 font-semibold">
                  Accessibility Widgets: Do They Actually Work? →
                </p>
                <p className="text-sm text-slate-400 mt-1">
                  Why overlays fail and what to do instead
                </p>
              </Link>
              <Link
                href="/blog/best-accessibility-testing-tools-compared-2026"
                className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-5 hover:border-sky-500/50 transition-colors block"
              >
                <p className="text-sky-400 font-semibold">
                  Best Accessibility Testing Tools 2026 →
                </p>
                <p className="text-sm text-slate-400 mt-1">
                  12 tools compared for developers and businesses
                </p>
              </Link>
              <Link
                href="/blog/ada-website-lawsuit-statistics-2026"
                className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-5 hover:border-sky-500/50 transition-colors block"
              >
                <p className="text-sky-400 font-semibold">
                  ADA Lawsuit Statistics 2026 →
                </p>
                <p className="text-sm text-slate-400 mt-1">
                  8,667 federal filings — the data behind the lawsuit wave
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
