/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AltTextGenerator from "@/components/AltTextGenerator";

export const metadata: Metadata = {
  title:
    "Alt Text Generator — Free AI Image Alt Text Tool | RatedWithAI",
  description:
    "Free AI-powered alt text generator. Upload an image or paste a URL to generate WCAG-compliant alt text instantly. Get concise, descriptive, and decorative variants with one click.",
  openGraph: {
    title: "Alt Text Generator — Free AI Image Alt Text Tool",
    description:
      "Generate WCAG-compliant alt text for images using AI. Upload an image or paste a URL — get concise and descriptive alternatives instantly. Free, no signup.",
    type: "website",
    url: "https://ratedwithai.com/tools/alt-text-generator",
  },
  keywords: [
    "alt text generator",
    "ai alt text generator",
    "image alt text generator",
    "wcag alt text",
    "accessibility alt text",
    "generate alt text",
    "alt text tool",
    "image description generator",
    "alt attribute generator",
    "wcag 1.1.1",
    "alt text for images",
    "free alt text generator",
  ],
  alternates: {
    canonical: "https://ratedwithai.com/tools/alt-text-generator",
  },
};

export default function AltTextGeneratorPage() {
  const faqItems = [
    {
      q: "What is alt text and why does it matter?",
      a: "Alt text (alternative text) is a text description added to an image's HTML using the alt attribute. It serves two critical purposes: it provides a text alternative for screen reader users who cannot see the image, and it displays as fallback text when an image fails to load. Under WCAG 2.1 Success Criterion 1.1.1, all non-text content must have a text alternative that serves an equivalent purpose.",
    },
    {
      q: "How does the AI alt text generator work?",
      a: "Our tool uses a vision AI model (GPT-4o-mini) to analyze your image and generate alt text that follows WCAG best practices. It produces multiple variants: a concise version under 125 characters for most use cases, a more descriptive version for complex images, and guidance on whether the image is decorative. The AI is trained to avoid common mistakes like starting with 'Image of' or including purely aesthetic descriptions.",
    },
    {
      q: "What makes good alt text?",
      a: "Good alt text is concise, specific, and describes the content and function of the image — not its appearance. It should convey the same information a sighted user would gain from the image. Keep it under 125 characters when possible, include any text visible in the image, and never start with 'image of' or 'photo of' since screen readers already announce the element as an image.",
    },
    {
      q: "When should I use an empty alt attribute (alt=\"\")?",
      a: "Use alt=\"\" (an empty alt attribute) for purely decorative images that don't convey meaningful content — such as background patterns, dividers, or aesthetic flourishes. This tells screen readers to skip the image entirely, reducing clutter for users navigating by audio. Never omit the alt attribute completely, as screen readers may read the filename instead.",
    },
    {
      q: "How long should alt text be?",
      a: "There is no strict character limit in WCAG, but best practice is to keep alt text under 125 characters. Some screen readers truncate alt text at around 125-150 characters. For images that need more explanation (like complex charts or infographics), use a short alt text plus a longer description using aria-describedby or a visible caption.",
    },
    {
      q: "Does this tool replace manual alt text writing?",
      a: "AI-generated alt text is a strong starting point, but you should always review and edit it for context. The AI doesn't know the purpose of the image within your specific page. For example, the same photo of a person might need different alt text on a biography page versus a news article. Use the AI output as a draft and refine it based on context.",
    },
    {
      q: "Is this tool free to use?",
      a: "Yes, the alt text generator is completely free with no signup required. Each session allows up to 10 generations. For checking alt text across your entire website automatically, try the RatedWithAI scanner which audits all images on your pages and identifies missing or problematic alt text at scale.",
    },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Alt Text Generator",
      applicationCategory: "DesignApplication",
      applicationSubCategory: "Accessibility Tool",
      operatingSystem: "Any (web-based)",
      browserRequirements: "Requires JavaScript",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      description:
        "Free AI-powered alt text generator. Upload an image or paste a URL to generate WCAG-compliant alt text with concise, descriptive, and decorative variants.",
      url: "https://ratedwithai.com/tools/alt-text-generator",
      featureList: [
        "AI-powered image analysis using GPT-4o-mini",
        "Concise alt text under 125 characters",
        "Descriptive alt text for complex images",
        "Decorative image detection with alt=\"\" guidance",
        "Drag and drop image upload",
        "Image URL support",
        "Copy-to-clipboard for all variants",
        "WCAG 2.1 SC 1.1.1 compliant output",
        "No signup required",
      ],
      creator: {
        "@type": "Organization",
        name: "RatedWithAI",
        url: "https://ratedwithai.com",
      },
    },
    {
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
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to Generate Alt Text for Images",
      description:
        "Use the free AI Alt Text Generator to create WCAG-compliant alt text for any image in seconds.",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Upload an image or paste a URL",
          text: "Either drag and drop an image file (JPEG, PNG, GIF, WebP up to 5MB) onto the upload area, use the file picker, or switch to URL mode and paste an image URL.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Click Generate Alt Text",
          text: "Click the 'Generate Alt Text' button. Our AI vision model will analyze the image content, context, and any visible text.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Review the generated variants",
          text: "The tool produces multiple alt text options: a concise version under 125 characters, a longer descriptive version, and guidance on whether the image is decorative (meaning alt=\"\" is appropriate).",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Copy and use in your HTML",
          text: "Click the Copy button next to the variant that best fits your context. Paste it into your image's alt attribute. Review and edit for page-specific context.",
        },
      ],
      tool: {
        "@type": "HowToTool",
        name: "RatedWithAI Alt Text Generator",
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
          name: "Tools",
          item: "https://ratedwithai.com/tools",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Alt Text Generator",
          item: "https://ratedwithai.com/tools/alt-text-generator",
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
            {/* Hero */}
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-sm text-sky-400">
                🖼️ Free Tool — No Signup Required
              </span>
              <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
                AI Alt Text
                <br />
                Generator
              </h1>
              <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                Upload any image or paste a URL to generate WCAG-compliant alt
                text instantly. Get concise, descriptive, and decorative
                variants — powered by AI vision.
              </p>
            </div>

            {/* Interactive Tool */}
            <AltTextGenerator />

            {/* CTA Banner */}
            <div className="mt-12 rounded-xl border border-sky-500/30 bg-sky-500/5 p-8 sm:p-10 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Check all images across your entire website
              </h2>
              <p className="text-slate-300 mt-4 max-w-xl mx-auto">
                Don't check images one by one. Our scanner automatically finds
                every missing or problematic alt text on your pages — plus 50+
                other WCAG violations.
              </p>
              <Link
                href="/scan"
                className="inline-flex items-center gap-2 mt-6 rounded-xl bg-sky-500 px-10 py-4 text-lg font-bold text-white hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/20"
              >
                Try RatedWithAI Free →
              </Link>
              <p className="mt-3 text-sm text-slate-400">
                No credit card. No signup. Scan any URL.
              </p>
            </div>

            {/* Educational Content */}
            <div className="mt-16 prose prose-invert prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-white">
                Understanding WCAG Alt Text Requirements
              </h2>

              <p className="text-slate-300 mt-4 leading-relaxed">
                Alt text is the cornerstone of web accessibility for images.
                WCAG 2.1 Success Criterion 1.1.1 (Non-text Content) — a Level A
                requirement — mandates that all non-text content presented to
                the user has a text alternative that serves the equivalent
                purpose. This is one of the most fundamental WCAG criteria
                and one of the most frequently violated. The 2024 WebAIM
                Million report found that 54.5% of home pages had images
                with missing alternative text.
              </p>

              <p className="text-slate-300 leading-relaxed">
                For blind and visually impaired users who navigate the web
                with screen readers like JAWS, NVDA, or VoiceOver, alt text
                is the only way to understand image content. Without it,
                screen readers either skip the image entirely (if the alt
                attribute is missing) or read the filename — which is often
                meaningless gibberish like "IMG_20240315_092347.jpg".
              </p>

              <h3 className="text-xl font-bold text-white mt-8">
                The Different Types of Images
              </h3>

              <p className="text-slate-300 leading-relaxed">
                Not all images need the same kind of alt text. WCAG recognizes
                several categories, each with different requirements:
              </p>

              <ul className="text-slate-300 space-y-2 list-disc list-inside">
                <li>
                  <strong>Informative images</strong> — convey information not
                  available in surrounding text. These need alt text that
                  describes the content (e.g., a product photo, a chart, a
                  diagram).
                </li>
                <li>
                  <strong>Functional images</strong> — used as links or buttons.
                  Alt text should describe the function, not the image itself
                  (e.g., "Search" for a magnifying glass icon button).
                </li>
                <li>
                  <strong>Decorative images</strong> — exist purely for visual
                  design and don't add information. These should use{" "}
                  <code className="text-sky-400">alt=""</code> (empty alt) so
                  screen readers skip them entirely.
                </li>
                <li>
                  <strong>Complex images</strong> — charts, graphs, and
                  infographics that contain substantial data. These need a brief
                  alt text plus a longer description via{" "}
                  <code className="text-sky-400">aria-describedby</code> or a
                  visible data table.
                </li>
                <li>
                  <strong>Images of text</strong> — should be avoided when
                  possible (WCAG 1.4.5), but when used, the alt text must
                  contain the same text shown in the image.
                </li>
              </ul>

              <h3 className="text-xl font-bold text-white mt-8">
                Writing Effective Alt Text: Best Practices
              </h3>

              <p className="text-slate-300 leading-relaxed">
                The goal of alt text is to provide equivalent information — not
                to describe every visual detail. Think about what a sighted user
                gains from the image, and convey that same information in text.
                Here are the key principles:
              </p>

              <p className="text-slate-300 leading-relaxed">
                <strong>Be concise.</strong> Most screen reader users prefer
                brief alt text. A good rule of thumb is 125 characters or fewer.
                Some older screen readers truncate at this length, and even
                modern ones benefit from brevity. If an image needs more than
                a sentence of description, use a separate long description
                mechanism.
              </p>

              <p className="text-slate-300 leading-relaxed">
                <strong>Don't start with "Image of" or "Photo of."</strong>{" "}
                Screen readers already announce the element as "image" or
                "graphic," so adding these phrases is redundant and wastes
                the user's time. Jump straight into the content.
              </p>

              <p className="text-slate-300 leading-relaxed">
                <strong>Focus on content, not aesthetics.</strong>{" "}
                "A man wearing a blue shirt" is usually less useful than
                "CEO John Smith presenting Q3 earnings." Context matters more
                than visual details. What role does this image play on the page?
              </p>

              <p className="text-slate-300 leading-relaxed">
                <strong>Include visible text.</strong> If an image contains text
                — a banner, a screenshot, a meme — include that text in the alt
                attribute. Users who can't see the image need to know what it
                says.
              </p>

              <h3 className="text-xl font-bold text-white mt-8">
                When to Use Empty Alt Text
              </h3>

              <p className="text-slate-300 leading-relaxed">
                The empty alt attribute (<code className="text-sky-400">alt=""</code>)
                is not a shortcut or a lazy approach — it's a deliberate
                accessibility decision. It tells assistive technology that the
                image is decorative and should be ignored. Use it for:
              </p>

              <ul className="text-slate-300 space-y-2 list-disc list-inside">
                <li>
                  Background patterns, textures, and visual flourishes
                </li>
                <li>
                  Spacer images or layout elements
                </li>
                <li>
                  Icons that accompany text labels (the text already provides
                  the information)
                </li>
                <li>
                  Purely aesthetic photography that doesn't add information
                  to the content
                </li>
              </ul>

              <p className="text-slate-300 leading-relaxed">
                Critically, an empty alt attribute is different from a missing
                alt attribute. Missing <code className="text-sky-400">alt</code>{" "}
                is a WCAG violation. Empty <code className="text-sky-400">alt=""</code>{" "}
                is a valid, intentional accessibility choice.
              </p>

              <h3 className="text-xl font-bold text-white mt-8">
                Legal Requirements for Alt Text
              </h3>

              <p className="text-slate-300 leading-relaxed">
                Missing alt text isn't just a usability problem — it's a legal
                risk. Under the Americans with Disabilities Act (ADA), the
                European Accessibility Act (EAA), and Section 508 of the
                Rehabilitation Act, websites must be accessible to people with
                disabilities. Alt text violations are among the most commonly
                cited issues in ADA website accessibility lawsuits, which
                exceeded 4,000 federal filings in 2024. Ensuring all images
                have proper alt text is one of the most impactful — and
                straightforward — accessibility improvements you can make.
              </p>

              <h3 className="text-xl font-bold text-white mt-8">
                Beyond Single Images: Auditing Your Whole Site
              </h3>

              <p className="text-slate-300 leading-relaxed">
                This generator helps you craft alt text for individual images,
                but most websites have hundreds or thousands of images. Manual
                review doesn't scale. Automated accessibility scanners like
                RatedWithAI can crawl your entire site, identify every image
                with missing, empty, or suspicious alt text, and help you
                prioritize fixes. Combining AI-generated alt text with
                automated auditing gives you comprehensive coverage across
                your whole site.
              </p>
            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-white text-center mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqItems.map((item) => (
                  <div
                    key={item.q}
                    className="rounded-lg border border-slate-700 bg-slate-800/50 p-5"
                  >
                    <h3 className="font-semibold text-white">{item.q}</h3>
                    <p className="text-sm text-slate-400 mt-2">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Links */}
            <div className="mt-8 pt-8 border-t border-slate-700">
              <p className="text-sm text-slate-400">
                Related:{" "}
                <Link
                  href="/tools/free-accessibility-checker"
                  className="text-sky-400 hover:text-sky-300"
                >
                  Free Accessibility Checker
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
                  href="/wcag/1-1-1-non-text-content"
                  className="text-sky-400 hover:text-sky-300"
                >
                  WCAG 1.1.1 Non-text Content
                </Link>{" "}
                ·{" "}
                <Link
                  href="/blog/top-10-wcag-failures"
                  className="text-sky-400 hover:text-sky-300"
                >
                  Top 10 WCAG Failures
                </Link>
              </p>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}
