/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title:
    "How to Write Alt Text for Images: The Complete Accessibility Guide (2026) | RatedWithAI",
  description:
    "Learn how to write effective alt text for images with 30+ examples. Covers WCAG 1.1.1, ADA compliance, decorative vs. informative images, CMS guides, AI tools, and common mistakes. The definitive alt text guide.",
  openGraph: {
    title: "How to Write Alt Text for Images: The Complete Accessibility Guide",
    description:
      "Missing alt text is the #1 accessibility violation on the web — found on 54.5% of all pages. This complete guide teaches you how to write effective alt text with real examples, decision trees, and platform-specific instructions.",
    type: "article",
    publishedTime: "2026-03-02T00:00:00.000Z",
    authors: ["RatedWithAI Team"],
  },
  keywords: [
    "how to write alt text",
    "alt text examples",
    "alt text for images",
    "image alt text",
    "alt text accessibility",
    "alt text best practices",
    "alt text guide",
    "what is alt text",
    "how to add alt text",
    "writing alt text",
    "alt text seo",
    "wcag alt text",
    "ada alt text",
    "alt text decision tree",
    "decorative image alt text",
  ],
  alternates: {
    canonical:
      "https://ratedwithai.com/blog/alt-text-guide-how-to-write-image-accessibility",
  },
};

export default function AltTextGuidePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "How to Write Alt Text for Images: The Complete Accessibility Guide for 2026",
    description:
      "Comprehensive guide to writing alt text for web accessibility. Covers WCAG 1.1.1, ADA compliance, real-world examples, decision trees, CMS instructions, AI tools, and common mistakes.",
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
    datePublished: "2026-03-02T00:00:00.000Z",
    dateModified: "2026-03-02T00:00:00.000Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://ratedwithai.com/blog/alt-text-guide-how-to-write-image-accessibility",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is alt text and why does it matter for accessibility?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Alt text (alternative text) is a written description added to an image's HTML code that serves as a text replacement when the image cannot be seen. Screen readers read alt text aloud to visually impaired users, search engines use it to understand image content, and browsers display it when images fail to load. Missing alt text is the #1 web accessibility violation — found on 54.5% of all home pages according to WebAIM's 2025 survey.",
        },
      },
      {
        "@type": "Question",
        name: "How long should alt text be?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Alt text should typically be 125 characters or fewer. This isn't a hard WCAG requirement, but many screen readers (including JAWS) truncate alt text or change their announcement behavior around this length. If an image requires a longer description — like a complex chart or infographic — use a short alt text summarizing the key takeaway and provide a detailed text alternative nearby on the page using aria-describedby or a visible caption.",
        },
      },
      {
        "@type": "Question",
        name: "Should decorative images have alt text?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Decorative images should have an empty alt attribute (alt=\"\"), not a missing alt attribute. An empty alt tells screen readers to skip the image entirely, which is the correct behavior for images that don't convey information — like background patterns, spacers, or purely aesthetic flourishes. A missing alt attribute is an accessibility violation because the screen reader may read the filename instead, which creates a confusing experience.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need alt text for ADA compliance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Alt text is required under ADA Title III (private businesses) and Title II (government entities). WCAG 2.1 Level AA — the standard referenced by the DOJ and most courts — requires that all non-text content has a text alternative (Success Criterion 1.1.1). Missing alt text is the most commonly cited violation in ADA website lawsuits, appearing in over 60% of complaints analyzed by accessibility law firms.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between alt text and a caption?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Alt text is hidden in the HTML code and only accessed by screen readers, search engines, or shown when images fail to load. Captions (using the <figcaption> element) are visible text displayed below an image that all users can see. They serve different purposes: alt text replaces the image for users who can't see it, while captions provide supplementary context for all users. Both can be used together — the alt text should describe the image itself, while the caption can provide additional context or attribution.",
        },
      },
      {
        "@type": "Question",
        name: "Can AI generate alt text automatically?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, several AI tools can generate alt text, including Microsoft's Azure Computer Vision, Google Cloud Vision API, WordPress plugins like Flavor and AltText.ai, and built-in features in platforms like Shopify and WordPress. However, AI-generated alt text should always be reviewed by a human. AI often misses context, writes overly generic descriptions, and can make errors that create worse experiences than no alt text at all. The best approach is using AI as a starting point and editing for accuracy and context.",
        },
      },
      {
        "@type": "Question",
        name: "Should I start alt text with 'Image of' or 'Photo of'?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Screen readers already announce that an element is an image before reading the alt text. Starting with 'Image of' or 'Photo of' creates redundancy — users hear 'Image: Image of a cat' which is unhelpful. Simply describe what the image shows. The exception is when the medium matters: 'Oil painting of sunflowers by Van Gogh' or 'Screenshot of the checkout page error message' — here the format adds meaningful context.",
        },
      },
      {
        "@type": "Question",
        name: "How do I write alt text for complex images like charts and graphs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For complex images, use a two-layer approach: (1) Write a brief alt text summarizing the key finding or takeaway (e.g., 'Bar chart showing website traffic doubled from 50,000 to 100,000 visits between January and June 2026'), and (2) provide a full data table or detailed description elsewhere on the page. Link the image to the detailed description using aria-describedby. WCAG Success Criterion 1.1.1 specifically requires that complex images have both a short text alternative AND a long description.",
        },
      },
    ],
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 text-white py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-2 text-emerald-200 text-sm mb-4">
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>
              <span>/</span>
              <span>Alt Text Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              How to Write Alt Text for Images: The Complete Accessibility Guide
            </h1>
            <p className="text-xl text-emerald-100 leading-relaxed max-w-3xl">
              Missing alt text is the <strong>#1 accessibility violation on the
              web</strong> — found on 54.5% of all home pages. It's also the most
              commonly cited issue in{" "}
              <Link
                href="/blog/ada-website-lawsuit-statistics-2026"
                className="underline hover:text-white"
              >
                ADA website lawsuits
              </Link>
              . This guide teaches you exactly how to write effective alt text,
              with 30+ real-world examples and a decision tree for every image type.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm">
              <span className="bg-emerald-700/50 px-3 py-1 rounded-full">
                📝 Updated March 2026
              </span>
              <span className="bg-emerald-700/50 px-3 py-1 rounded-full">
                ⏱️ 16 min read
              </span>
              <span className="bg-emerald-700/50 px-3 py-1 rounded-full">
                ✅ WCAG 2.1 Level AA
              </span>
            </div>
          </div>
        </section>

        {/* Key Stats Banner */}
        <section className="bg-white border-b">
          <div className="container mx-auto px-4 max-w-4xl py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-red-600">54.5%</div>
                <div className="text-sm text-gray-600 mt-1">
                  of home pages have missing alt text
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600">#1</div>
                <div className="text-sm text-gray-600 mt-1">
                  most common WCAG failure
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600">60%+</div>
                <div className="text-sm text-gray-600 mt-1">
                  of ADA lawsuits cite missing alt text
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600">≤125</div>
                <div className="text-sm text-gray-600 mt-1">
                  characters — ideal alt text length
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="bg-gray-50 border-b">
          <div className="container mx-auto px-4 max-w-4xl py-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              📑 Table of Contents
            </h2>
            <div className="grid md:grid-cols-2 gap-2 text-sm">
              <a
                href="#what-is-alt-text"
                className="text-blue-600 hover:underline"
              >
                1. What Is Alt Text?
              </a>
              <a
                href="#why-alt-text-matters"
                className="text-blue-600 hover:underline"
              >
                2. Why Alt Text Matters in 2026
              </a>
              <a
                href="#wcag-requirements"
                className="text-blue-600 hover:underline"
              >
                3. WCAG Requirements for Alt Text
              </a>
              <a
                href="#alt-text-decision-tree"
                className="text-blue-600 hover:underline"
              >
                4. The Alt Text Decision Tree
              </a>
              <a
                href="#how-to-write-alt-text"
                className="text-blue-600 hover:underline"
              >
                5. How to Write Great Alt Text (With Examples)
              </a>
              <a
                href="#alt-text-by-image-type"
                className="text-blue-600 hover:underline"
              >
                6. Alt Text by Image Type
              </a>
              <a
                href="#common-mistakes"
                className="text-blue-600 hover:underline"
              >
                7. 10 Common Alt Text Mistakes
              </a>
              <a
                href="#alt-text-by-platform"
                className="text-blue-600 hover:underline"
              >
                8. How to Add Alt Text (Platform Guides)
              </a>
              <a
                href="#ai-alt-text-tools"
                className="text-blue-600 hover:underline"
              >
                9. AI-Powered Alt Text Tools
              </a>
              <a
                href="#alt-text-ada-lawsuits"
                className="text-blue-600 hover:underline"
              >
                10. Alt Text and ADA Lawsuits
              </a>
              <a
                href="#testing-alt-text"
                className="text-blue-600 hover:underline"
              >
                11. How to Test Your Alt Text
              </a>
              <a
                href="#alt-text-checklist"
                className="text-blue-600 hover:underline"
              >
                12. Alt Text Checklist
              </a>
              <a href="#faq" className="text-blue-600 hover:underline">
                13. FAQ
              </a>
            </div>
          </div>
        </section>

        {/* Content */}
        <article className="container mx-auto px-4 max-w-4xl py-12">
          {/* Section 1: What Is Alt Text */}
          <section id="what-is-alt-text" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              1. What Is Alt Text?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Alt text (short for "alternative text") is a written description
              that you attach to an image in HTML. It serves as a text
              replacement when the image cannot be seen — whether because the
              user is visually impaired, the image fails to load, or the
              connection is too slow to render it.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              In HTML, alt text is added using the <code className="bg-gray-100 px-2 py-0.5 rounded text-sm">alt</code> attribute
              on the <code className="bg-gray-100 px-2 py-0.5 rounded text-sm">&lt;img&gt;</code> tag:
            </p>
            <div className="bg-gray-900 rounded-lg p-6 mb-6">
              <code className="text-green-400 text-sm block">
                &lt;img src="puppy.jpg" <span className="text-yellow-400">alt="Golden retriever puppy sitting in a field of daisies"</span> /&gt;
              </code>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              When a screen reader encounters this image, it announces: <em>"Image: Golden retriever puppy sitting in a field of daisies."</em>{" "}
              Without alt text, the screen reader might read the filename instead — something like <em>"Image: IMG_4523.jpg"</em> — which tells the user nothing useful.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              Alt text serves three audiences
            </h3>
            <div className="space-y-4">
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                <p className="font-semibold text-emerald-800">♿ People using assistive technology</p>
                <p className="text-gray-700 mt-1">
                  Approximately 2.2 billion people worldwide have vision impairments (WHO, 2023). Screen readers, refreshable braille displays, and other assistive tools rely on alt text to convey what an image shows. For these users, alt text <em>is</em> the image.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="font-semibold text-blue-800">🔍 Search engines</p>
                <p className="text-gray-700 mt-1">
                  Google, Bing, and other search engines can't "see" images (yet). They rely on alt text to understand what an image depicts and how it relates to the surrounding content. Well-written alt text improves image search rankings and overall SEO.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <p className="font-semibold text-purple-800">📱 Users with slow connections</p>
                <p className="text-gray-700 mt-1">
                  When images fail to load (slow connections, data saver mode, email clients that block images), alt text appears in place of the image. This ensures your message still gets across even when visual content is unavailable.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Why Alt Text Matters */}
          <section id="why-alt-text-matters" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              2. Why Alt Text Matters in 2026
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Alt text has always been important for accessibility, but in 2026 the stakes are higher than ever. Three converging forces make alt text a business-critical priority:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              The accessibility lawsuit explosion
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              ADA website lawsuits have surged to record levels. A{" "}
              <Link
                href="/blog/15000-ada-website-lawsuits-cox-media-investigation-2026"
                className="text-blue-600 hover:underline"
              >
                national investigation by Cox Media Group
              </Link>{" "}
              found more than 15,000 ADA website lawsuits filed in just four years, with 90% coming from just 16 law firms. Missing alt text is the single most commonly cited violation in these complaints.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Consider the cases uncovered in this investigation: a{" "}
              <Link
                href="/blog/how-to-respond-ada-website-lawsuit-demand-letter"
                className="text-blue-600 hover:underline"
              >
                bakery in Gainesville settled for $6,500
              </Link>
              , a fashion designer spent over $200,000 across three lawsuits, and a Jacksonville steakhouse paid roughly $20,000 in settlement and legal fees. In many of these cases, missing image alt text was listed as a primary violation.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              The ADA Title II April 2026 deadline
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The DOJ's{" "}
              <Link
                href="/blog/ada-title-ii-deadline-countdown-2026"
                className="text-blue-600 hover:underline"
              >
                ADA Title II rule
              </Link>{" "}
              requires state and local governments serving populations of 50,000+ to achieve WCAG 2.1 Level AA compliance by <strong>April 24, 2026</strong>. WCAG Success Criterion 1.1.1 (Non-text Content) — which requires alt text on images — is one of the Level A criteria that must be met. Government agencies that fail to provide alt text on their websites face federal penalties of up to $75,000 for first violations and $150,000 for subsequent ones.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              The global accessibility movement
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The{" "}
              <Link
                href="/blog/european-accessibility-act-eaa-compliance-us-businesses"
                className="text-blue-600 hover:underline"
              >
                European Accessibility Act (EAA)
              </Link>{" "}
              took effect in June 2025, requiring digital accessibility for products and services sold in the EU.{" "}
              <Link
                href="/blog/canada-accessible-canada-act-digital-accessibility-2027"
                className="text-blue-600 hover:underline"
              >
                Canada's Accessible Canada Act
              </Link>{" "}
              sets deadlines for 2027-2028. Alt text requirements are foundational to every international accessibility standard.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mt-6">
              <p className="font-semibold text-amber-800">💡 The bottom line</p>
              <p className="text-gray-700 mt-2">
                Writing alt text is no longer optional — it's a legal requirement, an SEO best practice, and a fundamental act of digital inclusion. The good news: once you learn the principles, it takes only seconds to write effective alt text for each image.
              </p>
            </div>
          </section>

          {/* Section 3: WCAG Requirements */}
          <section id="wcag-requirements" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              3. WCAG Requirements for Alt Text
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Web Content Accessibility Guidelines (WCAG) set the technical standard for alt text. Here are the specific criteria that apply:
            </p>

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden mb-8">
              <div className="bg-blue-600 text-white px-6 py-3">
                <h3 className="font-semibold">
                  Success Criterion 1.1.1: Non-text Content (Level A)
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  <em>"All non-text content that is presented to the user has a text alternative that serves the equivalent purpose."</em>
                </p>
                <p className="text-gray-700 mb-4">
                  This is a <strong>Level A</strong> requirement — the most basic level of conformance. If your website fails this criterion, it cannot claim any level of WCAG compliance.
                </p>
                <p className="text-gray-700">
                  WCAG 1.1.1 applies to all non-text content: images, icons, buttons, form inputs, CAPTCHAs, audio, video, and embedded objects. Each type has specific requirements.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              What WCAG says about different image types
            </h3>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-gray-900">Informative images</p>
                <p className="text-gray-600 mt-1">
                  Must have alt text that conveys the same information the image communicates visually. The alt text should serve the "equivalent purpose" — if you removed the image and replaced it with the alt text, would the user get the same information?
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-gray-900">Decorative images</p>
                <p className="text-gray-600 mt-1">
                  Must have an empty alt attribute (<code className="bg-gray-100 px-1 rounded text-sm">alt=""</code>). This tells assistive technology to skip the image entirely. Never omit the alt attribute — that's a violation.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-gray-900">Functional images (buttons, links)</p>
                <p className="text-gray-600 mt-1">
                  Alt text must describe the <em>function</em>, not the appearance. A magnifying glass icon in a search button should have alt="Search", not alt="magnifying glass icon".
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-gray-900">Images of text</p>
                <p className="text-gray-600 mt-1">
                  Alt text must contain the exact same text shown in the image. WCAG also recommends using actual text instead of images of text whenever possible (Success Criterion 1.4.5).
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-gray-900">Complex images (charts, graphs, diagrams)</p>
                <p className="text-gray-600 mt-1">
                  Need both a short alt text summary AND a longer text alternative. The long description can be placed in surrounding text, a linked page, or using <code className="bg-gray-100 px-1 rounded text-sm">aria-describedby</code>.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-gray-900">CAPTCHA images</p>
                <p className="text-gray-600 mt-1">
                  Must identify the purpose (e.g., alt="Type the characters you see in this image") and provide an alternative form of CAPTCHA (like audio) for users who can't see the image.
                </p>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-8">
              <p className="font-semibold text-red-800">⚠️ Critical distinction: empty alt vs. missing alt</p>
              <div className="mt-3 space-y-2">
                <div className="bg-white rounded p-3">
                  <code className="text-green-700 text-sm">✅ alt="" — Correct for decorative images. Screen reader skips it.</code>
                </div>
                <div className="bg-white rounded p-3">
                  <code className="text-red-700 text-sm">❌ No alt attribute at all — WCAG violation. Screen reader reads filename.</code>
                </div>
                <div className="bg-white rounded p-3">
                  <code className="text-red-700 text-sm">❌ alt=" " — Space in alt text. Some screen readers read "image" or "blank".</code>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Decision Tree */}
          <section id="alt-text-decision-tree" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              4. The Alt Text Decision Tree
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Not sure what kind of alt text to write? Walk through this decision tree — adapted from the{" "}
              <a
                href="https://www.w3.org/WAI/tutorials/images/decision-tree/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                W3C WAI alt decision tree
              </a>{" "}
              — for any image on your site:
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 border-l-4 border-emerald-500 rounded-r-lg p-5">
                <p className="font-bold text-gray-900">Step 1: Does the image contain text?</p>
                <p className="text-gray-600 mt-2">
                  <strong>Yes, and the text isn't also nearby as real text →</strong> Use the image text as your alt text. Example: a banner image with "Summer Sale — 50% Off" should have <code className="bg-gray-100 px-1 rounded text-sm">alt="Summer Sale — 50% Off"</code>.
                </p>
                <p className="text-gray-600 mt-1">
                  <strong>Yes, but the text is already in the page →</strong> The image is decorative. Use <code className="bg-gray-100 px-1 rounded text-sm">alt=""</code>.
                </p>
                <p className="text-gray-600 mt-1">
                  <strong>No →</strong> Continue to Step 2.
                </p>
              </div>

              <div className="bg-gray-50 border-l-4 border-blue-500 rounded-r-lg p-5">
                <p className="font-bold text-gray-900">Step 2: Is the image used in a link or button?</p>
                <p className="text-gray-600 mt-2">
                  <strong>Yes →</strong> Write alt text describing the <em>destination</em> or <em>action</em>, not the image itself. A shopping cart icon linking to the cart page should have <code className="bg-gray-100 px-1 rounded text-sm">alt="Shopping cart (3 items)"</code>.
                </p>
                <p className="text-gray-600 mt-1">
                  <strong>No →</strong> Continue to Step 3.
                </p>
              </div>

              <div className="bg-gray-50 border-l-4 border-purple-500 rounded-r-lg p-5">
                <p className="font-bold text-gray-900">Step 3: Does the image contribute meaning to the page?</p>
                <p className="text-gray-600 mt-2">
                  <strong>Yes, it's simple (photo, illustration) →</strong> Write a brief, descriptive alt text. Keep it under 125 characters.
                </p>
                <p className="text-gray-600 mt-1">
                  <strong>Yes, it's complex (chart, graph, infographic) →</strong> Write a brief summary as alt text AND provide a full text alternative elsewhere on the page.
                </p>
                <p className="text-gray-600 mt-1">
                  <strong>No, it's purely decorative →</strong> Use <code className="bg-gray-100 px-1 rounded text-sm">alt=""</code>.
                </p>
              </div>

              <div className="bg-gray-50 border-l-4 border-amber-500 rounded-r-lg p-5">
                <p className="font-bold text-gray-900">Step 4: Is the image already fully described by adjacent text?</p>
                <p className="text-gray-600 mt-2">
                  <strong>Yes →</strong> Use <code className="bg-gray-100 px-1 rounded text-sm">alt=""</code> to avoid redundancy. If a photo of a product is followed by a detailed text description of that product, the image is supplementary.
                </p>
                <p className="text-gray-600 mt-1">
                  <strong>No →</strong> Write descriptive alt text. Focus on what makes the image important in this context.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: How to Write Alt Text */}
          <section id="how-to-write-alt-text" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              5. How to Write Great Alt Text (With Examples)
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              The golden rules
            </h3>
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <span className="bg-emerald-100 text-emerald-700 rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">1</span>
                <div>
                  <p className="font-semibold text-gray-900">Be specific and descriptive</p>
                  <p className="text-gray-600">Describe what's actually in the image, not what you wish was there. "Team photo" vs. "Five engineers standing in front of a whiteboard with architecture diagrams" — the second is useful.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-emerald-100 text-emerald-700 rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">2</span>
                <div>
                  <p className="font-semibold text-gray-900">Consider the context</p>
                  <p className="text-gray-600">The same image might need different alt text on different pages. A photo of a dog on a veterinary website needs medical context; the same photo on a pet adoption page needs breed and temperament information.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-emerald-100 text-emerald-700 rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">3</span>
                <div>
                  <p className="font-semibold text-gray-900">Keep it concise</p>
                  <p className="text-gray-600">Aim for 125 characters or fewer. Screen reader users can't skim alt text — they hear every word. Cut filler words and get to the point.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-emerald-100 text-emerald-700 rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">4</span>
                <div>
                  <p className="font-semibold text-gray-900">Don't start with "Image of" or "Photo of"</p>
                  <p className="text-gray-600">Screen readers already announce that the element is an image. Starting with "Image of" creates redundancy.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-emerald-100 text-emerald-700 rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">5</span>
                <div>
                  <p className="font-semibold text-gray-900">Don't stuff keywords</p>
                  <p className="text-gray-600">Alt text is for accessibility first, SEO second. Keyword stuffing creates a terrible experience for screen reader users and can actually hurt your search rankings.</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4">
              Real-world examples: before and after
            </h3>

            <div className="space-y-6">
              {/* Example 1 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-100 px-5 py-3 font-semibold text-gray-900">
                  Product photo on an e-commerce site
                </div>
                <div className="p-5">
                  <div className="bg-red-50 rounded p-3 mb-3">
                    <p className="text-sm text-red-700">❌ <strong>Bad:</strong> <code>alt="shoe"</code></p>
                    <p className="text-xs text-red-600 mt-1">Too vague — which shoe? What color? What style?</p>
                  </div>
                  <div className="bg-red-50 rounded p-3 mb-3">
                    <p className="text-sm text-red-700">❌ <strong>Bad:</strong> <code>alt="nike running shoe men buy online best price shoes athletic footwear"</code></p>
                    <p className="text-xs text-red-600 mt-1">Keyword stuffing — unusable for screen reader users</p>
                  </div>
                  <div className="bg-green-50 rounded p-3">
                    <p className="text-sm text-green-700">✅ <strong>Good:</strong> <code>alt="Nike Air Zoom Pegasus 41 men's running shoe in black and white, side view"</code></p>
                    <p className="text-xs text-green-600 mt-1">Specific: brand, model, color, angle — everything a sighted user sees</p>
                  </div>
                </div>
              </div>

              {/* Example 2 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-100 px-5 py-3 font-semibold text-gray-900">
                  Team photo on an About page
                </div>
                <div className="p-5">
                  <div className="bg-red-50 rounded p-3 mb-3">
                    <p className="text-sm text-red-700">❌ <strong>Bad:</strong> <code>alt="team"</code></p>
                  </div>
                  <div className="bg-red-50 rounded p-3 mb-3">
                    <p className="text-sm text-red-700">❌ <strong>Bad:</strong> <code>alt="IMG_2847.jpg"</code></p>
                    <p className="text-xs text-red-600 mt-1">This is what screen readers announce when alt text is missing — a filename</p>
                  </div>
                  <div className="bg-green-50 rounded p-3">
                    <p className="text-sm text-green-700">✅ <strong>Good:</strong> <code>alt="The 12-person RatedWithAI team at our 2026 company retreat, standing on a mountain overlook"</code></p>
                  </div>
                </div>
              </div>

              {/* Example 3 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-100 px-5 py-3 font-semibold text-gray-900">
                  Hero banner image
                </div>
                <div className="p-5">
                  <div className="bg-red-50 rounded p-3 mb-3">
                    <p className="text-sm text-red-700">❌ <strong>Bad:</strong> <code>alt="banner"</code></p>
                  </div>
                  <div className="bg-green-50 rounded p-3 mb-3">
                    <p className="text-sm text-green-700">✅ <strong>Good (if it conveys info):</strong> <code>alt="Woman using a screen reader on a laptop at a coffee shop"</code></p>
                  </div>
                  <div className="bg-green-50 rounded p-3">
                    <p className="text-sm text-green-700">✅ <strong>Good (if purely decorative):</strong> <code>alt=""</code> — and consider using CSS background-image instead</p>
                  </div>
                </div>
              </div>

              {/* Example 4 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-100 px-5 py-3 font-semibold text-gray-900">
                  Chart showing revenue growth
                </div>
                <div className="p-5">
                  <div className="bg-red-50 rounded p-3 mb-3">
                    <p className="text-sm text-red-700">❌ <strong>Bad:</strong> <code>alt="chart"</code></p>
                  </div>
                  <div className="bg-red-50 rounded p-3 mb-3">
                    <p className="text-sm text-red-700">❌ <strong>Bad:</strong> <code>alt="revenue chart January 50000 February 55000 March 62000 April 71000 May 83000 June 100000..."</code></p>
                    <p className="text-xs text-red-600 mt-1">Too long for alt text — this data belongs in a table</p>
                  </div>
                  <div className="bg-green-50 rounded p-3">
                    <p className="text-sm text-green-700">✅ <strong>Good:</strong> <code>alt="Line chart showing monthly revenue doubling from $50K to $100K between January and June 2026. Full data in table below."</code></p>
                    <p className="text-xs text-green-600 mt-1">Summarizes the key insight and directs to the full data</p>
                  </div>
                </div>
              </div>

              {/* Example 5 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-100 px-5 py-3 font-semibold text-gray-900">
                  Logo linking to homepage
                </div>
                <div className="p-5">
                  <div className="bg-red-50 rounded p-3 mb-3">
                    <p className="text-sm text-red-700">❌ <strong>Bad:</strong> <code>alt="logo"</code></p>
                  </div>
                  <div className="bg-red-50 rounded p-3 mb-3">
                    <p className="text-sm text-red-700">❌ <strong>Bad:</strong> <code>alt="Click here to go to the homepage"</code></p>
                  </div>
                  <div className="bg-green-50 rounded p-3">
                    <p className="text-sm text-green-700">✅ <strong>Good:</strong> <code>alt="RatedWithAI home"</code></p>
                    <p className="text-xs text-green-600 mt-1">Identifies the company and the link destination</p>
                  </div>
                </div>
              </div>

              {/* Example 6 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-100 px-5 py-3 font-semibold text-gray-900">
                  Social media icon
                </div>
                <div className="p-5">
                  <div className="bg-red-50 rounded p-3 mb-3">
                    <p className="text-sm text-red-700">❌ <strong>Bad:</strong> <code>alt="icon"</code></p>
                  </div>
                  <div className="bg-green-50 rounded p-3">
                    <p className="text-sm text-green-700">✅ <strong>Good:</strong> <code>alt="Follow us on Instagram"</code></p>
                    <p className="text-xs text-green-600 mt-1">Describes the action, not the icon shape</p>
                  </div>
                </div>
              </div>

              {/* Example 7 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-100 px-5 py-3 font-semibold text-gray-900">
                  Restaurant menu on a food delivery site
                </div>
                <div className="p-5">
                  <div className="bg-red-50 rounded p-3 mb-3">
                    <p className="text-sm text-red-700">❌ <strong>Bad:</strong> <code>alt="food"</code></p>
                  </div>
                  <div className="bg-green-50 rounded p-3">
                    <p className="text-sm text-green-700">✅ <strong>Good:</strong> <code>alt="Margherita pizza with fresh basil, mozzarella, and tomato sauce on a wood-fired crust"</code></p>
                    <p className="text-xs text-green-600 mt-1">Describes the dish the way a menu would — helps the user decide what to order</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: By Image Type */}
          <section id="alt-text-by-image-type" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              6. Alt Text by Image Type
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">
              Photographs
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Describe who or what is in the photo, what they're doing, and any relevant context. Prioritize details that are important to the surrounding content.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-700">
                <strong>Blog post about remote work:</strong>{" "}
                <code className="text-sm">alt="Woman working on a laptop from a balcony overlooking a tropical beach"</code>
              </p>
              <p className="text-sm text-gray-700 mt-2">
                <strong>Real estate listing:</strong>{" "}
                <code className="text-sm">alt="Open-concept kitchen with granite countertops, stainless steel appliances, and a breakfast bar seating four"</code>
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              Icons and symbols
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              For icons used as buttons or links, describe the <em>function</em>. For icons used alongside text labels, they're typically decorative and should use <code className="bg-gray-100 px-1 rounded text-sm">alt=""</code>.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-700">
                <strong>Standalone search icon (button):</strong>{" "}
                <code className="text-sm">alt="Search"</code>
              </p>
              <p className="text-sm text-gray-700 mt-2">
                <strong>Phone icon next to "Call us: 555-1234":</strong>{" "}
                <code className="text-sm">alt=""</code> — the text already provides the information
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              Infographics
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Infographics are complex images that combine data, text, and visuals. They need a two-layer approach:
            </p>
            <div className="space-y-3 mb-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Layer 1 — alt text:</strong> A brief summary of the infographic's main point. <code className="text-sm">alt="Infographic: 5 steps to ADA compliance, from audit to monitoring. Full text below."</code>
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Layer 2 — long description:</strong> Provide all the information from the infographic as regular text on the page. Use headings, lists, and data tables to structure the content.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              Screenshots
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Describe what the screenshot shows and why it's relevant. Focus on what the reader needs to see:
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-700">
                <strong>Tutorial screenshot:</strong>{" "}
                <code className="text-sm">alt="WordPress media library showing the alt text field highlighted in the Attachment Details panel"</code>
              </p>
              <p className="text-sm text-gray-700 mt-2">
                <strong>Error message screenshot:</strong>{" "}
                <code className="text-sm">alt="Browser error message: 'This site can't be reached. ERR_CONNECTION_TIMED_OUT'"</code>
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              Decorative images
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              An image is decorative when it doesn't add information that isn't already in the text. Common decorative images include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Background patterns and textures</li>
              <li>Divider lines and spacers</li>
              <li>Icons next to text that says the same thing</li>
              <li>Stock photos used only for visual appeal</li>
              <li>Aesthetic illustrations that don't convey content</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              For decorative images, always use <code className="bg-gray-100 px-1 rounded text-sm">alt=""</code>. Better yet, move purely decorative images to CSS using <code className="bg-gray-100 px-1 rounded text-sm">background-image</code> — CSS images are ignored by screen readers by default.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              Maps and diagrams
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Static map images need alt text describing the location and relevant landmarks. If the map is interactive (like Google Maps embed), ensure keyboard navigation works and provide a text address as a fallback.
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <code className="text-sm">alt="Map showing our office location at 123 Main Street, Austin, TX — near the intersection with Congress Avenue"</code>
              </p>
            </div>
          </section>

          {/* Section 7: Common Mistakes */}
          <section id="common-mistakes" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              7. 10 Common Alt Text Mistakes
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Even well-intentioned developers and content creators make these mistakes. Here are the most common alt text errors and how to fix them:
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-red-400 bg-white rounded-r-lg p-5 shadow-sm">
                <p className="font-bold text-gray-900">1. Missing alt attribute entirely</p>
                <p className="text-gray-600 mt-1">
                  The most common error. <strong>54.5%</strong> of home pages have images with no alt attribute at all (WebAIM Million 2025). This forces screen readers to read the file path or filename.
                </p>
                <p className="text-sm text-green-700 mt-2">
                  <strong>Fix:</strong> Every <code className="bg-gray-100 px-1 rounded">&lt;img&gt;</code> must have an alt attribute — either with descriptive text or empty (<code className="bg-gray-100 px-1 rounded">alt=""</code>) for decorative images.
                </p>
              </div>

              <div className="border-l-4 border-red-400 bg-white rounded-r-lg p-5 shadow-sm">
                <p className="font-bold text-gray-900">2. Using the filename as alt text</p>
                <p className="text-gray-600 mt-1">
                  <code className="text-sm">alt="DSC_0042.jpg"</code> or <code className="text-sm">alt="hero-banner-v3-final-FINAL.png"</code>. This happens when CMS platforms auto-populate the alt field with the filename.
                </p>
                <p className="text-sm text-green-700 mt-2">
                  <strong>Fix:</strong> Always write custom alt text. If using a CMS, check the auto-populated value and replace it.
                </p>
              </div>

              <div className="border-l-4 border-red-400 bg-white rounded-r-lg p-5 shadow-sm">
                <p className="font-bold text-gray-900">3. Being too vague</p>
                <p className="text-gray-600 mt-1">
                  <code className="text-sm">alt="people"</code>, <code className="text-sm">alt="building"</code>, <code className="text-sm">alt="food"</code>. These describe the category but not the content.
                </p>
                <p className="text-sm text-green-700 mt-2">
                  <strong>Fix:</strong> Be specific. "Three chefs preparing sushi at a long counter" is far more useful than "people".
                </p>
              </div>

              <div className="border-l-4 border-red-400 bg-white rounded-r-lg p-5 shadow-sm">
                <p className="font-bold text-gray-900">4. Keyword stuffing</p>
                <p className="text-gray-600 mt-1">
                  <code className="text-sm">alt="best pizza New York pizza delivery order pizza online cheap pizza NYC"</code>. This hurts both accessibility and SEO.
                </p>
                <p className="text-sm text-green-700 mt-2">
                  <strong>Fix:</strong> Write for humans first. Natural descriptions that happen to include relevant terms are fine. Stuffing is not.
                </p>
              </div>

              <div className="border-l-4 border-red-400 bg-white rounded-r-lg p-5 shadow-sm">
                <p className="font-bold text-gray-900">5. Starting with "Image of" or "Picture of"</p>
                <p className="text-gray-600 mt-1">
                  Screen readers already say "Image:" before reading the alt text. The user hears "Image: Image of a sunset" — redundant and annoying.
                </p>
                <p className="text-sm text-green-700 mt-2">
                  <strong>Fix:</strong> Start directly with the description. Exception: when the medium matters ("Oil painting of...", "Screenshot showing...").
                </p>
              </div>

              <div className="border-l-4 border-red-400 bg-white rounded-r-lg p-5 shadow-sm">
                <p className="font-bold text-gray-900">6. Using alt text for decorative images</p>
                <p className="text-gray-600 mt-1">
                  Writing <code className="text-sm">alt="blue decorative border"</code> for a visual divider forces screen reader users to sit through descriptions of meaningless elements.
                </p>
                <p className="text-sm text-green-700 mt-2">
                  <strong>Fix:</strong> Use <code className="bg-gray-100 px-1 rounded">alt=""</code> for decorative images, or move them to CSS.
                </p>
              </div>

              <div className="border-l-4 border-red-400 bg-white rounded-r-lg p-5 shadow-sm">
                <p className="font-bold text-gray-900">7. Writing alt text that's too long</p>
                <p className="text-gray-600 mt-1">
                  A 300-word alt text is a paragraph that a screen reader will read without pause. Users can't skip to the middle or skim.
                </p>
                <p className="text-sm text-green-700 mt-2">
                  <strong>Fix:</strong> Keep alt text under 125 characters. For complex images, write a brief summary and provide the full description in regular page text.
                </p>
              </div>

              <div className="border-l-4 border-red-400 bg-white rounded-r-lg p-5 shadow-sm">
                <p className="font-bold text-gray-900">8. Using the same alt text for multiple images</p>
                <p className="text-gray-600 mt-1">
                  Product galleries where every image says <code className="text-sm">alt="Product image"</code>. Screen reader users can't distinguish between views.
                </p>
                <p className="text-sm text-green-700 mt-2">
                  <strong>Fix:</strong> Differentiate each image: "Front view", "Side view", "Close-up of stitching detail", "Size chart".
                </p>
              </div>

              <div className="border-l-4 border-red-400 bg-white rounded-r-lg p-5 shadow-sm">
                <p className="font-bold text-gray-900">9. Forgetting alt text on form input images</p>
                <p className="text-gray-600 mt-1">
                  Submit buttons, search icons, and other interactive images within forms often lack alt text, making forms unusable for screen reader users.
                </p>
                <p className="text-sm text-green-700 mt-2">
                  <strong>Fix:</strong> All image-based form controls must have alt text describing their function: <code className="bg-gray-100 px-1 rounded">alt="Submit"</code>, <code className="bg-gray-100 px-1 rounded">alt="Search"</code>.
                </p>
              </div>

              <div className="border-l-4 border-red-400 bg-white rounded-r-lg p-5 shadow-sm">
                <p className="font-bold text-gray-900">10. Not updating alt text when images change</p>
                <p className="text-gray-600 mt-1">
                  Swapping a product photo but keeping the old alt text, or updating a chart without updating the description. This creates a mismatch.
                </p>
                <p className="text-sm text-green-700 mt-2">
                  <strong>Fix:</strong> Whenever you update an image, update the alt text too. Add this to your content workflow checklist.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8: Platform Guides */}
          <section id="alt-text-by-platform" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              8. How to Add Alt Text (Platform Guides)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Here's how to add alt text on the most popular platforms:
            </p>

            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-indigo-600 text-white px-5 py-3 font-semibold">
                  HTML
                </div>
                <div className="p-5">
                  <div className="bg-gray-900 rounded-lg p-4 mb-3">
                    <code className="text-green-400 text-sm block whitespace-pre-wrap">
{`<!-- Informative image -->
<img src="product.jpg" alt="Blue ceramic coffee mug with handle, 12oz capacity" />

<!-- Decorative image -->
<img src="divider.svg" alt="" />

<!-- Complex image with long description -->
<img src="chart.png" alt="Q1 sales chart showing 40% growth" aria-describedby="chart-desc" />
<div id="chart-desc" class="sr-only">
  Detailed description: January $50K, February $60K, March $70K...
</div>`}
                    </code>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-blue-600 text-white px-5 py-3 font-semibold">
                  WordPress
                </div>
                <div className="p-5 space-y-2 text-gray-700">
                  <p><strong>Block Editor (Gutenberg):</strong> Click on an image block → the alt text field appears in the right sidebar under "Block" → "Alt text (alternative text)". Type your description there.</p>
                  <p><strong>Media Library:</strong> Click any image → the "Alt Text" field appears in the "Attachment Details" panel on the right side. This is the default alt text for every page where the image is used.</p>
                  <p><strong>Tip:</strong> Alt text set in the Block Editor overrides the Media Library default for that specific page. Set a general alt in the library, then customize per-page when context changes.</p>
                  <p className="text-sm mt-2">
                    See our complete{" "}
                    <Link href="/blog/wordpress-accessibility-guide" className="text-blue-600 hover:underline">WordPress accessibility guide</Link>{" "}
                    for more details.
                  </p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-green-600 text-white px-5 py-3 font-semibold">
                  Shopify
                </div>
                <div className="p-5 space-y-2 text-gray-700">
                  <p><strong>Product images:</strong> Go to Products → click a product → click the image → "Add alt text" appears below the image. Enter your description and save.</p>
                  <p><strong>Theme images:</strong> Go to Online Store → Themes → Customize → click on image elements → the alt text field is in the image settings panel.</p>
                  <p><strong>Blog images:</strong> In the rich text editor, click an image → select "Edit image" → enter alt text in the field.</p>
                  <p className="text-sm mt-2">
                    See our complete{" "}
                    <Link href="/blog/shopify-ada-compliance-guide-2026" className="text-blue-600 hover:underline">Shopify ADA compliance guide</Link>.
                  </p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-800 text-white px-5 py-3 font-semibold">
                  Squarespace
                </div>
                <div className="p-5 space-y-2 text-gray-700">
                  <p><strong>Page images:</strong> Click on an image in the page editor → click the pencil icon or "Edit" → find the "Image alt text" field under the "Design" tab. Enter your description.</p>
                  <p><strong>Gallery images:</strong> Open the gallery block settings → click on individual images → add alt text in each image's settings panel.</p>
                  <p><strong>Note:</strong> Squarespace does not auto-generate alt text. Every image must be manually described. Template decorative images may need custom code to add empty alt attributes.</p>
                  <p className="text-sm mt-2">
                    See our{" "}
                    <Link href="/blog/squarespace-ada-compliance-guide-2026" className="text-blue-600 hover:underline">Squarespace ADA compliance guide</Link>.
                  </p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-violet-600 text-white px-5 py-3 font-semibold">
                  Wix
                </div>
                <div className="p-5 space-y-2 text-gray-700">
                  <p><strong>Adding alt text:</strong> Click on an image in the Wix Editor → click "Settings" (gear icon) → find the "What's in the image? Tell Google" field. Despite the SEO-focused label, this sets the alt attribute.</p>
                  <p><strong>Wix Accessibility Wizard:</strong> Wix offers a built-in accessibility checker that flags images without alt text. Go to Site → Accessibility → run the wizard to find missing descriptions.</p>
                  <p className="text-sm mt-2">
                    See our{" "}
                    <Link href="/blog/wix-ada-compliance-guide-2026" className="text-blue-600 hover:underline">Wix ADA compliance guide</Link>.
                  </p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-cyan-600 text-white px-5 py-3 font-semibold">
                  Social media
                </div>
                <div className="p-5 space-y-3 text-gray-700">
                  <div>
                    <p className="font-semibold">Twitter/X:</p>
                    <p>When composing a tweet with an image, click the image → select "Add description" → type your alt text (up to 1,000 characters). Enable "Compose image descriptions" in Settings → Accessibility to get reminders.</p>
                  </div>
                  <div>
                    <p className="font-semibold">Instagram:</p>
                    <p>When posting, go to "Advanced settings" → "Write alt text" at the bottom. Instagram also auto-generates alt text using AI, but human-written descriptions are much more accurate.</p>
                  </div>
                  <div>
                    <p className="font-semibold">Facebook:</p>
                    <p>Click on a photo → select "Edit" → "Alternative text" → choose "Custom alt text" (Facebook auto-generates by default, but custom is better).</p>
                  </div>
                  <div>
                    <p className="font-semibold">LinkedIn:</p>
                    <p>When adding an image to a post, click the "Alt text" button that appears on the image preview. Enter your description.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 9: AI Tools */}
          <section id="ai-alt-text-tools" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              9. AI-Powered Alt Text Tools
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              AI can help generate alt text at scale, but it's not a replacement for human judgment. Here's a honest assessment of the current tools:
            </p>

            <div className="space-y-4 mb-8">
              <div className="border border-gray-200 rounded-lg p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">AltText.ai</h3>
                  <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">WordPress plugin available</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Dedicated AI alt text generator. Processes images through computer vision models and generates descriptions. Integrates with WordPress, Shopify, and custom sites via API. Good starting point, but descriptions tend to be generic without page context.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">Microsoft Azure Computer Vision</h3>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">API</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Enterprise-grade image analysis API with "Describe Image" endpoint. Generates captions, tags, and object detection. Good accuracy for common objects, struggles with specialized or contextual content. Powers built-in alt text in Microsoft 365.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">WordPress — Flavor Plugin</h3>
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">WordPress</span>
                </div>
                <p className="text-gray-600 text-sm">
                  WordPress plugin that auto-generates alt text for uploaded images using AI. Scans your media library to find images missing alt text. Free tier available. Good for catching bulk missing alt text on existing sites.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">Shopify Built-in AI Alt Text</h3>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Shopify native</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Shopify Magic now includes AI-generated alt text for product images. Available in the product editor — click "Generate" next to the alt text field. Context-aware since it knows the product title and description. Decent but requires review.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <p className="font-semibold text-amber-800">⚠️ Why AI-generated alt text needs human review</p>
              <ul className="mt-3 space-y-2 text-gray-700 text-sm">
                <li>• <strong>Context blindness:</strong> AI describes what it sees, not why it matters. A photo of a person smiling might be described as "person smiling at camera" when the context requires "CEO Jane Smith announcing the company's IPO at the annual shareholder meeting."</li>
                <li>• <strong>Accuracy issues:</strong> AI regularly misidentifies objects, counts wrong, and confuses similar items. "Two dogs in a park" might actually be a dog and a cat.</li>
                <li>• <strong>Cultural sensitivity:</strong> AI may describe people in ways that are reductive, focusing on visible characteristics rather than contextually relevant information.</li>
                <li>• <strong>Missed functional context:</strong> AI can't determine whether an image is decorative or informative — it will generate descriptions for images that should have <code className="bg-gray-100 px-1 rounded">alt=""</code>.</li>
              </ul>
              <p className="text-gray-700 text-sm mt-3">
                <strong>Best practice:</strong> Use AI to generate a first draft, then review and edit every description for accuracy, context, and conciseness.
              </p>
            </div>
          </section>

          {/* Section 10: ADA Lawsuits */}
          <section id="alt-text-ada-lawsuits" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              10. Alt Text and ADA Lawsuits
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Missing alt text is the most frequently cited issue in ADA website lawsuits. Understanding why — and how to protect your business — is critical.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              Why alt text is the #1 lawsuit target
            </h3>
            <div className="space-y-3 mb-6">
              <div className="bg-red-50 rounded-lg p-4">
                <p className="font-semibold text-red-800">Easy to prove</p>
                <p className="text-gray-700 text-sm mt-1">
                  A missing alt attribute is a binary violation — it's either there or it's not. Plaintiff attorneys can run automated scans to identify missing alt text across an entire website in minutes. Unlike subjective accessibility issues, there's no room for interpretation.
                </p>
              </div>
              <div className="bg-red-50 rounded-lg p-4">
                <p className="font-semibold text-red-800">Incredibly common</p>
                <p className="text-gray-700 text-sm mt-1">
                  WebAIM's annual accessibility survey consistently finds missing alt text on over 50% of home pages. Plaintiff firms have a near-unlimited supply of targets.
                </p>
              </div>
              <div className="bg-red-50 rounded-lg p-4">
                <p className="font-semibold text-red-800">Directly impacts screen reader users</p>
                <p className="text-gray-700 text-sm mt-1">
                  Courts have recognized that missing alt text creates a genuine barrier to access. When a screen reader encounters an image without alt text, the user either hears the filename (confusing) or nothing at all (invisible content).
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              What ADA complaints say about alt text
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here's an excerpt from a typical ADA website lawsuit complaint:
            </p>
            <blockquote className="border-l-4 border-gray-300 pl-6 py-2 mb-6 text-gray-600 italic">
              "The Website has numerous access barriers that deny blind users full and equal access. These barriers include but are not limited to: lack of alternative text (alt-text) on graphics and images, which prevents screen reader users from understanding the content and purpose of such images..."
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              This language — or something very close to it — appears in thousands of ADA website complaints. Missing alt text is almost always listed first among the accessibility barriers cited.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              How to protect your business
            </h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">1</span>
                <p className="text-gray-700">
                  <strong>Audit your current images.</strong> Run a{" "}
                  <Link href="/" className="text-blue-600 hover:underline">
                    free accessibility scan
                  </Link>{" "}
                  to identify every image on your site missing alt text. Fix the most visible pages first (homepage, product pages, landing pages).
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">2</span>
                <p className="text-gray-700">
                  <strong>Add alt text to every image.</strong> Use the guidelines in this article. Prioritize product images, menu images, contact information, and any image that conveys information a user needs.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">3</span>
                <p className="text-gray-700">
                  <strong>Establish a content workflow.</strong> Make alt text a required field in your content creation process. No image gets published without alt text — period.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">4</span>
                <p className="text-gray-700">
                  <strong>Monitor continuously.</strong> New images are added regularly through CMS updates, user-generated content, and design changes.{" "}
                  <Link href="/" className="text-blue-600 hover:underline">
                    Automated monitoring
                  </Link>{" "}
                  catches regressions before they become legal targets.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">5</span>
                <p className="text-gray-700">
                  <strong>Document your compliance efforts.</strong> Keep records of when alt text was added, audits performed, and remediation completed. This evidence of good faith effort can be valuable if a complaint is filed.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="font-semibold text-blue-800">📊 The cost comparison</p>
              <p className="text-gray-700 mt-2">
                Adding alt text to your website costs a few hours of work. An ADA website lawsuit costs $5,000-$25,000+ in settlements and legal fees — and you'll still have to fix the alt text afterward. The{" "}
                <Link href="/blog/irs-form-8826-disabled-access-credit-website-accessibility" className="text-blue-600 hover:underline">
                  IRS Disabled Access Credit (Form 8826)
                </Link>{" "}
                even provides up to $5,000 in tax credits for small businesses that invest in accessibility improvements.
              </p>
            </div>
          </section>

          {/* Section 11: Testing */}
          <section id="testing-alt-text" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              11. How to Test Your Alt Text
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Writing alt text is only half the job — you also need to verify it's working correctly. Here are the best testing methods:
            </p>

            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Automated scanning tools</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Automated tools can quickly identify images with missing alt attributes. They can't judge alt text quality, but they'll catch the most common violation.
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• <strong><Link href="/" className="text-blue-600 hover:underline">RatedWithAI Scanner</Link></strong> — scans your site and flags every image missing alt text</li>
                  <li>• <strong>WAVE</strong> — browser extension that highlights accessibility errors including missing alt text</li>
                  <li>• <strong>axe DevTools</strong> — detailed developer-focused accessibility testing</li>
                  <li>• <strong>Lighthouse</strong> — built into Chrome DevTools, checks for missing alt attributes</li>
                </ul>
                <p className="text-sm mt-3">
                  See our full comparison of{" "}
                  <Link href="/blog/best-accessibility-testing-tools-compared-2026" className="text-blue-600 hover:underline">
                    accessibility testing tools
                  </Link>.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Screen reader testing</h3>
                <p className="text-gray-600 text-sm mb-3">
                  The most authentic test: listen to your site through a screen reader. This reveals whether your alt text actually makes sense in context.
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• <strong>NVDA</strong> (Windows) — free, open-source screen reader. Press Insert+G to list all images and their alt text.</li>
                  <li>• <strong>VoiceOver</strong> (macOS/iOS) — built into Apple devices. Turn on with Cmd+F5. Navigate images with VO+Right Arrow.</li>
                  <li>• <strong>JAWS</strong> (Windows) — commercial screen reader widely used in enterprise. Insert+G lists graphics.</li>
                  <li>• <strong>TalkBack</strong> (Android) — built into Android devices. Settings → Accessibility → TalkBack.</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">The "replace" test</h3>
                <p className="text-gray-600 text-sm">
                  Mentally replace each image with its alt text. Does the page still make sense? Does the user get the same information? If removing the image and reading only the alt text gives you the same understanding, your alt text is working.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Browser DevTools inspection</h3>
                <p className="text-gray-600 text-sm">
                  Right-click any image → "Inspect" → check the <code className="bg-gray-100 px-1 rounded">&lt;img&gt;</code> tag for the alt attribute. Quick way to verify alt text is present and correct on individual images. Also useful for checking third-party widgets and embedded content.
                </p>
              </div>
            </div>
          </section>

          {/* Section 12: Checklist */}
          <section id="alt-text-checklist" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              12. Alt Text Checklist
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Use this checklist to audit your website's alt text. Print it, bookmark it, or share it with your content team:
            </p>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
              <div className="space-y-3">
                <label className="flex items-start gap-3 text-gray-700">
                  <span className="text-emerald-600 mt-0.5">☐</span>
                  <span>Every <code className="bg-white px-1 rounded text-sm">&lt;img&gt;</code> tag has an <code className="bg-white px-1 rounded text-sm">alt</code> attribute (no missing attributes)</span>
                </label>
                <label className="flex items-start gap-3 text-gray-700">
                  <span className="text-emerald-600 mt-0.5">☐</span>
                  <span>Decorative images use <code className="bg-white px-1 rounded text-sm">alt=""</code> (empty, not missing)</span>
                </label>
                <label className="flex items-start gap-3 text-gray-700">
                  <span className="text-emerald-600 mt-0.5">☐</span>
                  <span>Informative images have descriptive, context-appropriate alt text</span>
                </label>
                <label className="flex items-start gap-3 text-gray-700">
                  <span className="text-emerald-600 mt-0.5">☐</span>
                  <span>Alt text is 125 characters or fewer (complex images use additional text alternatives)</span>
                </label>
                <label className="flex items-start gap-3 text-gray-700">
                  <span className="text-emerald-600 mt-0.5">☐</span>
                  <span>No alt text starts with "Image of" or "Photo of"</span>
                </label>
                <label className="flex items-start gap-3 text-gray-700">
                  <span className="text-emerald-600 mt-0.5">☐</span>
                  <span>No keyword stuffing in alt text</span>
                </label>
                <label className="flex items-start gap-3 text-gray-700">
                  <span className="text-emerald-600 mt-0.5">☐</span>
                  <span>Link/button images describe the action or destination</span>
                </label>
                <label className="flex items-start gap-3 text-gray-700">
                  <span className="text-emerald-600 mt-0.5">☐</span>
                  <span>Images of text contain the exact same text in the alt attribute</span>
                </label>
                <label className="flex items-start gap-3 text-gray-700">
                  <span className="text-emerald-600 mt-0.5">☐</span>
                  <span>Charts, graphs, and infographics have summary alt text AND detailed text alternatives</span>
                </label>
                <label className="flex items-start gap-3 text-gray-700">
                  <span className="text-emerald-600 mt-0.5">☐</span>
                  <span>Form input images (submit buttons, search icons) have functional alt text</span>
                </label>
                <label className="flex items-start gap-3 text-gray-700">
                  <span className="text-emerald-600 mt-0.5">☐</span>
                  <span>Product gallery images use unique, differentiated alt text for each view</span>
                </label>
                <label className="flex items-start gap-3 text-gray-700">
                  <span className="text-emerald-600 mt-0.5">☐</span>
                  <span>CMS-uploaded images have been checked (default/auto-populated values replaced)</span>
                </label>
                <label className="flex items-start gap-3 text-gray-700">
                  <span className="text-emerald-600 mt-0.5">☐</span>
                  <span>Social media posts include alt text on shared images</span>
                </label>
                <label className="flex items-start gap-3 text-gray-700">
                  <span className="text-emerald-600 mt-0.5">☐</span>
                  <span>Email newsletter images include alt text (they render when images are blocked)</span>
                </label>
                <label className="flex items-start gap-3 text-gray-700">
                  <span className="text-emerald-600 mt-0.5">☐</span>
                  <span>Third-party widgets and embedded content have been checked for missing alt text</span>
                </label>
              </div>
            </div>
          </section>

          {/* Section 13: FAQ */}
          <section id="faq" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              13. Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900">
                  What is alt text and why does it matter for accessibility?
                </h3>
                <p className="text-gray-600 mt-2">
                  Alt text (alternative text) is a written description added to an image's HTML code that serves as a text replacement when the image cannot be seen. Screen readers read alt text aloud to visually impaired users, search engines use it to understand image content, and browsers display it when images fail to load. Missing alt text is the #1 web accessibility violation — found on 54.5% of all home pages according to WebAIM's 2025 survey.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900">
                  How long should alt text be?
                </h3>
                <p className="text-gray-600 mt-2">
                  Aim for 125 characters or fewer. This isn't a hard WCAG requirement, but many screen readers (including JAWS) truncate or change behavior around this length. For complex images like charts or infographics, write a brief summary as the alt text and provide a detailed text alternative nearby on the page.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900">
                  Should decorative images have alt text?
                </h3>
                <p className="text-gray-600 mt-2">
                  Decorative images should have an empty alt attribute (<code className="bg-gray-100 px-1 rounded">alt=""</code>), not a missing alt attribute. An empty alt tells screen readers to skip the image entirely. A missing alt attribute is a WCAG violation — the screen reader may announce the filename, creating a confusing experience.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900">
                  Do I need alt text for ADA compliance?
                </h3>
                <p className="text-gray-600 mt-2">
                  Yes. Alt text is required under ADA Title III (private businesses) and Title II (government entities). WCAG 2.1 Level AA requires all non-text content to have a text alternative (Success Criterion 1.1.1). Missing alt text is the most commonly cited violation in{" "}
                  <Link href="/blog/ada-website-lawsuit-statistics-2026" className="text-blue-600 hover:underline">
                    ADA website lawsuits
                  </Link>
                  , appearing in the majority of complaints.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900">
                  What is the difference between alt text and a caption?
                </h3>
                <p className="text-gray-600 mt-2">
                  Alt text is hidden in HTML and accessed by screen readers, search engines, or displayed when images fail to load. Captions (using the <code className="bg-gray-100 px-1 rounded">&lt;figcaption&gt;</code> element) are visible text displayed below an image for all users. They serve different purposes and can be used together — alt text replaces the image, while captions supplement it.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900">
                  Can AI generate alt text automatically?
                </h3>
                <p className="text-gray-600 mt-2">
                  Several AI tools can generate alt text, including Microsoft Azure Computer Vision, WordPress plugins like Flavor and AltText.ai, and built-in features in Shopify. However, AI-generated alt text should always be reviewed by a human — it often misses context, writes generic descriptions, and can make accuracy errors. Use AI as a starting point, then edit for accuracy.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900">
                  Should I start alt text with "Image of" or "Photo of"?
                </h3>
                <p className="text-gray-600 mt-2">
                  No. Screen readers already announce that an element is an image before reading the alt text. Starting with "Image of" creates redundancy. Simply describe what the image shows. The exception: when the medium adds context, like "Oil painting of sunflowers by Van Gogh" or "Screenshot of the checkout page."
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900">
                  How do I write alt text for complex images like charts and graphs?
                </h3>
                <p className="text-gray-600 mt-2">
                  Use a two-layer approach: (1) Write a brief alt text summarizing the key takeaway, and (2) provide a full data table or detailed description elsewhere on the page, linked using <code className="bg-gray-100 px-1 rounded">aria-describedby</code>. WCAG 1.1.1 requires both a short text alternative and a detailed description for complex images.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-8 text-white mb-16">
            <h2 className="text-2xl font-bold mb-4">
              Find Every Missing Alt Text on Your Website
            </h2>
            <p className="text-emerald-100 mb-6 max-w-2xl">
              Our free accessibility scanner identifies every image on your site
              that's missing alt text — along with other WCAG violations that
              could expose you to{" "}
              <Link
                href="/blog/ada-website-lawsuit-statistics-2026"
                className="underline hover:text-white"
              >
                ADA lawsuits
              </Link>
              . Get your accessibility score in under 60 seconds.
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-emerald-700 font-semibold px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors"
            >
              Scan Your Website Free →
            </Link>
          </section>

          {/* Related Articles */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/blog/top-10-wcag-failures"
                className="border border-gray-200 rounded-lg p-4 hover:border-emerald-300 transition-colors"
              >
                <h3 className="font-semibold text-gray-900">
                  Top 10 WCAG Failures (And How to Fix Them)
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Missing alt text is #1 — but there are 9 other critical failures you need to know about.
                </p>
              </Link>
              <Link
                href="/blog/wcag-22-checklist"
                className="border border-gray-200 rounded-lg p-4 hover:border-emerald-300 transition-colors"
              >
                <h3 className="font-semibold text-gray-900">
                  WCAG 2.2 Checklist
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Complete checklist for every WCAG 2.2 success criterion, from Level A to AAA.
                </p>
              </Link>
              <Link
                href="/blog/ada-compliance-checklist-2026"
                className="border border-gray-200 rounded-lg p-4 hover:border-emerald-300 transition-colors"
              >
                <h3 className="font-semibold text-gray-900">
                  ADA Compliance Checklist 2026
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Step-by-step checklist for making your website ADA compliant this year.
                </p>
              </Link>
              <Link
                href="/blog/shopify-ada-compliance-guide-2026"
                className="border border-gray-200 rounded-lg p-4 hover:border-emerald-300 transition-colors"
              >
                <h3 className="font-semibold text-gray-900">
                  Shopify ADA Compliance Guide 2026
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Platform-specific guide to making your Shopify store accessible.
                </p>
              </Link>
              <Link
                href="/blog/best-accessibility-testing-tools-compared-2026"
                className="border border-gray-200 rounded-lg p-4 hover:border-emerald-300 transition-colors"
              >
                <h3 className="font-semibold text-gray-900">
                  Best Accessibility Testing Tools Compared (2026)
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Compare 12 testing tools including free browser extensions and enterprise solutions.
                </p>
              </Link>
              <Link
                href="/blog/how-to-respond-ada-website-lawsuit-demand-letter"
                className="border border-gray-200 rounded-lg p-4 hover:border-emerald-300 transition-colors"
              >
                <h3 className="font-semibold text-gray-900">
                  How to Respond to an ADA Demand Letter
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Got sued? Here's your emergency 72-hour response checklist.
                </p>
              </Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
