/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ColorContrastChecker from "@/components/ColorContrastChecker";

export const metadata: Metadata = {
  title:
    "Color Contrast Checker — Free WCAG Contrast Ratio Tool | RatedWithAI",
  description:
    "Free color contrast checker. Test foreground and background colors against WCAG 2.1 AA and AAA contrast ratio requirements. Instant pass/fail results with live preview.",
  openGraph: {
    title: "Color Contrast Checker — Free WCAG Contrast Ratio Tool",
    description:
      "Check your color combinations against WCAG 2.1 AA & AAA contrast requirements. Free, instant, no signup.",
    type: "website",
    url: "https://ratedwithai.com/tools/color-contrast-checker",
  },
  keywords: [
    "color contrast checker",
    "wcag color contrast",
    "accessibility color checker",
    "contrast ratio checker",
    "wcag contrast ratio",
    "color contrast tool",
    "wcag 2.1 contrast",
    "ada color contrast",
    "web accessibility contrast",
    "contrast checker free",
    "color accessibility tool",
    "text contrast checker",
  ],
  alternates: {
    canonical: "https://ratedwithai.com/tools/color-contrast-checker",
  },
};

export default function ColorContrastCheckerPage() {
  const faqItems = [
    {
      q: "What is a color contrast ratio?",
      a: "A contrast ratio measures the difference in luminance (perceived brightness) between two colors. It's expressed as a ratio like 4.5:1, where higher numbers mean more contrast. The maximum possible ratio is 21:1 (black on white). WCAG uses contrast ratios to ensure text remains readable for people with low vision or color vision deficiencies.",
    },
    {
      q: "What are the WCAG contrast requirements?",
      a: "WCAG 2.1 Level AA requires a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text (18pt/24px or 14pt/18.5px bold). Level AAA requires 7:1 for normal text and 4.5:1 for large text. Most legal and regulatory standards (ADA, Section 508, EAA) reference Level AA as the minimum.",
    },
    {
      q: "What counts as 'large text' in WCAG?",
      a: "Under WCAG, large text is defined as 18pt (24px) or larger at regular weight, or 14pt (approximately 18.5px) or larger when bold. Large text has a lower contrast requirement because larger characters are inherently easier to read.",
    },
    {
      q: "Does this checker test WCAG 2.1 or 2.2?",
      a: "The contrast ratio requirements are the same in WCAG 2.0, 2.1, and 2.2. Success Criterion 1.4.3 (Contrast Minimum) and 1.4.6 (Enhanced Contrast) have not changed between versions, so this tool works for all current WCAG versions.",
    },
    {
      q: "Do I need to meet WCAG AAA contrast?",
      a: "Most legal frameworks (ADA, Section 508, European Accessibility Act) reference WCAG AA, not AAA. However, meeting AAA contrast (7:1) provides better readability for users with low vision and is recommended as a best practice, especially for body text.",
    },
    {
      q: "What about non-text elements like icons and borders?",
      a: "WCAG 2.1 Success Criterion 1.4.11 (Non-text Contrast) requires a minimum 3:1 contrast ratio for UI components and graphical objects. This includes form field borders, icon buttons, chart segments, and focus indicators. Use this tool to check those color pairs too.",
    },
    {
      q: "Can this tool check my entire website's contrast?",
      a: "This tool checks individual color pairs. To automatically scan your entire website for contrast issues along with other WCAG violations, use the RatedWithAI accessibility scanner — it tests every element on your pages and reports all contrast failures with specific fix recommendations.",
    },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Color Contrast Checker",
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
        "Free color contrast checker tool. Test foreground and background colors against WCAG 2.1 AA and AAA contrast ratio requirements with live preview.",
      url: "https://ratedwithai.com/tools/color-contrast-checker",
      featureList: [
        "Real-time WCAG contrast ratio calculation",
        "AA and AAA pass/fail testing for normal and large text",
        "Live text preview with selected colors",
        "Hex, RGB, and color picker input",
        "Swap foreground and background colors",
        "Copy contrast ratio to clipboard",
        "No signup required",
      ],
      screenshot: "https://ratedwithai.com/og-color-contrast-checker.png",
      creator: {
        "@type": "Organization",
        name: "RatedWithAI",
        url: "https://ratedwithai.com",
      },
      aggregateRating: undefined,
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
      name: "How to Check Color Contrast for WCAG Compliance",
      description:
        "Use the free Color Contrast Checker to test your color combinations against WCAG 2.1 AA and AAA requirements.",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Enter your foreground (text) color",
          text: "Use the color picker or type a hex code (e.g., #333333) for your text color. You can also enter individual R, G, B values.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Enter your background color",
          text: "Use the color picker or type a hex code (e.g., #FFFFFF) for your background color.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Review your contrast ratio",
          text: "The tool instantly calculates the contrast ratio and shows pass/fail results for WCAG AA Normal (4.5:1), AA Large (3:1), AAA Normal (7:1), and AAA Large (4.5:1).",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Check the live preview",
          text: "Review the live text preview to see how your color combination looks at different text sizes — large, normal, small, and on buttons.",
        },
        {
          "@type": "HowToStep",
          position: 5,
          name: "Adjust colors until compliant",
          text: "If any level fails, adjust your colors until you achieve the required contrast ratio. Use the swap button to quickly test reversed combinations.",
        },
      ],
      tool: {
        "@type": "HowToTool",
        name: "RatedWithAI Color Contrast Checker",
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
          name: "Color Contrast Checker",
          item: "https://ratedwithai.com/tools/color-contrast-checker",
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
                🎨 Free Tool — No Signup Required
              </span>
              <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
                Color Contrast
                <br />
                Checker
              </h1>
              <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                Test your color combinations against WCAG 2.1 AA and AAA
                contrast requirements. Get instant pass/fail results with a
                live text preview.
              </p>
            </div>

            {/* Interactive Tool */}
            <ColorContrastChecker />

            {/* CTA Banner */}
            <div className="mt-12 rounded-xl border border-sky-500/30 bg-sky-500/5 p-8 sm:p-10 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Check your entire website's contrast issues
              </h2>
              <p className="text-slate-300 mt-4 max-w-xl mx-auto">
                Don't test colors one by one. Our scanner automatically detects
                every contrast failure on your pages — plus 50+ other WCAG
                violations.
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
                Understanding WCAG Color Contrast Requirements
              </h2>

              <p className="text-slate-300 mt-4 leading-relaxed">
                Color contrast is one of the most fundamental aspects of web
                accessibility. When text doesn't have enough contrast against
                its background, it becomes difficult or impossible to read for
                the roughly 300 million people worldwide with low vision, the
                250 million with color vision deficiencies, and even for
                anyone using a screen in bright sunlight.
              </p>

              <p className="text-slate-300 leading-relaxed">
                The Web Content Accessibility Guidelines (WCAG) establish
                specific, measurable contrast ratios to ensure text remains
                readable. These ratios are calculated using a formula that
                compares the relative luminance of two colors — essentially
                measuring the difference in perceived brightness between your
                text and its background.
              </p>

              <h3 className="text-xl font-bold text-white mt-8">
                What Is a Contrast Ratio?
              </h3>

              <p className="text-slate-300 leading-relaxed">
                A contrast ratio is expressed as a number from 1:1 (no contrast
                — identical colors) to 21:1 (maximum contrast — pure black on
                pure white). The ratio is calculated by comparing the relative
                luminance values of two colors using a formula defined in WCAG
                2.1 Success Criterion 1.4.3.
              </p>

              <p className="text-slate-300 leading-relaxed">
                For example, dark gray (#333333) on white (#FFFFFF) has a
                contrast ratio of 12.63:1 — comfortably above all WCAG
                thresholds. Light gray (#999999) on white drops to just 2.85:1,
                failing even the most lenient WCAG requirement.
              </p>

              <h3 className="text-xl font-bold text-white mt-8">
                WCAG AA vs. AAA: Which Level Do You Need?
              </h3>

              <p className="text-slate-300 leading-relaxed">
                WCAG defines two conformance levels for contrast. <strong>Level AA</strong> is
                the standard referenced by most legal and regulatory frameworks,
                including the Americans with Disabilities Act (ADA), Section 508
                of the Rehabilitation Act, and the European Accessibility Act
                (EAA). It requires:
              </p>

              <ul className="text-slate-300 space-y-2 list-disc list-inside">
                <li>
                  <strong>4.5:1</strong> for normal text (below 18pt / 24px)
                </li>
                <li>
                  <strong>3:1</strong> for large text (18pt+ or 14pt+ bold)
                </li>
              </ul>

              <p className="text-slate-300 leading-relaxed">
                <strong>Level AAA</strong> provides enhanced accessibility and
                is recommended for body text, especially on content-heavy pages.
                It requires:
              </p>

              <ul className="text-slate-300 space-y-2 list-disc list-inside">
                <li>
                  <strong>7:1</strong> for normal text
                </li>
                <li>
                  <strong>4.5:1</strong> for large text
                </li>
              </ul>

              <p className="text-slate-300 leading-relaxed">
                While AAA isn't legally required in most jurisdictions, meeting
                these higher thresholds significantly improves readability for
                all users and provides a stronger legal safety net against
                accessibility lawsuits.
              </p>

              <h3 className="text-xl font-bold text-white mt-8">
                Non-Text Contrast (WCAG 1.4.11)
              </h3>

              <p className="text-slate-300 leading-relaxed">
                WCAG 2.1 introduced Success Criterion 1.4.11, which extends
                contrast requirements beyond text to user interface components
                and graphical objects. Form field borders, buttons, icons, chart
                segments, and focus indicators must all maintain a minimum 3:1
                contrast ratio against adjacent colors. You can use this color
                contrast checker to verify those combinations too.
              </p>

              <h3 className="text-xl font-bold text-white mt-8">
                Common Contrast Mistakes to Avoid
              </h3>

              <p className="text-slate-300 leading-relaxed">
                Low contrast is the most common accessibility failure on the
                web. The WebAIM Million study found that 81% of home pages had
                insufficient text contrast — making it the single most
                prevalent WCAG violation. Here are the most frequent mistakes:
              </p>

              <ul className="text-slate-300 space-y-2 list-disc list-inside">
                <li>
                  <strong>Light gray text on white backgrounds</strong> — a
                  trend in "minimalist" design that sacrifices readability for
                  aesthetics
                </li>
                <li>
                  <strong>Placeholder text in form fields</strong> — default
                  placeholder colors rarely meet the 4.5:1 requirement
                </li>
                <li>
                  <strong>Text over images or gradients</strong> — contrast can
                  vary dramatically across the image, creating invisible text in
                  some areas
                </li>
                <li>
                  <strong>Colored links without underlines</strong> — links that
                  rely only on color must have 3:1 contrast against surrounding
                  body text
                </li>
                <li>
                  <strong>Disabled state styling</strong> — while WCAG exempts
                  disabled controls from contrast requirements, users still need
                  to identify them
                </li>
              </ul>

              <h3 className="text-xl font-bold text-white mt-8">
                Beyond Individual Colors: Full-Page Scanning
              </h3>

              <p className="text-slate-300 leading-relaxed">
                While this color contrast checker is great for testing
                individual color pairs during design, real websites have
                hundreds of color combinations across elements, states, and
                responsive breakpoints. A single page might use different text
                colors for headings, body text, links, buttons, captions, and
                error messages — each against potentially different backgrounds.
              </p>

              <p className="text-slate-300 leading-relaxed">
                For comprehensive contrast auditing, automated accessibility
                scanners like RatedWithAI can test every text element on your
                page simultaneously, flagging the specific elements that fail
                and showing you exactly what to fix.
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
                  href="/wcag/1-4-3-contrast-minimum"
                  className="text-sky-400 hover:text-sky-300"
                >
                  WCAG 1.4.3 Contrast Minimum
                </Link>{" "}
                ·{" "}
                <Link
                  href="/blog/top-10-wcag-failures"
                  className="text-sky-400 hover:text-sky-300"
                >
                  Top 10 WCAG Failures
                </Link>{" "}
                ·{" "}
                <Link
                  href="/blog/wcag-compliance-guide"
                  className="text-sky-400 hover:text-sky-300"
                >
                  WCAG Compliance Guide
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
