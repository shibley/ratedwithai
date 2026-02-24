/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PdfAccessibilityChecker from "@/components/PdfAccessibilityChecker";

export const metadata: Metadata = {
  title:
    "PDF Accessibility Checker — Free WCAG & Section 508 PDF Checker | RatedWithAI",
  description:
    "Free PDF accessibility checker. Upload your PDF and instantly check for WCAG 2.1, Section 508, and PDF/UA compliance — tagged structure, alt text, reading order, and more. 100% client-side, your file never leaves your browser.",
  openGraph: {
    title: "PDF Accessibility Checker — Free WCAG & Section 508 PDF Tool",
    description:
      "Check your PDF for accessibility issues — tagged structure, alt text, headings, language, and more. Free, instant, no signup. Your PDF never leaves your browser.",
    type: "website",
    url: "https://ratedwithai.com/tools/pdf-accessibility-checker",
  },
  keywords: [
    "pdf accessibility checker",
    "pdf wcag checker",
    "accessible pdf checker",
    "pdf section 508 checker",
    "pdf ua checker",
    "check pdf accessibility",
    "pdf accessibility test",
    "pdf accessibility validator",
    "tagged pdf checker",
    "pdf alt text checker",
    "pdf compliance checker",
    "free pdf accessibility tool",
  ],
  alternates: {
    canonical: "https://ratedwithai.com/tools/pdf-accessibility-checker",
  },
};

export default function PdfAccessibilityCheckerPage() {
  const faqItems = [
    {
      q: "What does this PDF accessibility checker test?",
      a: "This tool checks 7 key accessibility requirements: document title, language tag, tagged PDF structure, heading hierarchy, image alt text, bookmarks/navigation, and whether text is extractable (not a scanned image). These checks align with WCAG 2.1, Section 508, and PDF/UA standards.",
    },
    {
      q: "Is my PDF uploaded to a server?",
      a: "No. Your PDF is analyzed entirely in your browser using JavaScript. The file never leaves your device — no data is uploaded, stored, or transmitted. This makes the tool safe for confidential, legal, and sensitive documents.",
    },
    {
      q: "What is a tagged PDF and why does it matter?",
      a: "A tagged PDF contains a hidden structure tree that identifies headings, paragraphs, lists, images, and tables — similar to HTML tags. Screen readers use these tags to navigate the document and read content in the correct order. Without tags, a PDF is essentially inaccessible to assistive technology users.",
    },
    {
      q: "What PDF accessibility standards exist?",
      a: "The main standards are: WCAG 2.1 (web content accessibility guidelines that apply to PDFs), Section 508 (US federal requirement), PDF/UA (ISO 14289 — the dedicated PDF accessibility standard), and the European Accessibility Act (EAA). Most reference WCAG 2.1 Level AA as the baseline.",
    },
    {
      q: "How do I make a PDF accessible in Microsoft Word?",
      a: "Use proper heading styles (Heading 1, 2, 3), add alt text to all images, use built-in table features, set the document language, and add a descriptive title in File → Properties. When saving as PDF, check 'Document structure tags for accessibility' in the export options.",
    },
    {
      q: "How do I fix an existing inaccessible PDF?",
      a: "Use Adobe Acrobat Pro's accessibility tools: run 'Full Check' under Accessibility, then use 'Add Tags to Document', 'Set Alternate Text', and 'Reading Order' tools to fix issues. For scanned PDFs, run OCR first via Scan & OCR → Recognize Text.",
    },
    {
      q: "Can this tool check WCAG compliance for my website?",
      a: "This tool is specifically for PDF documents. To check your website's HTML pages for WCAG compliance, use the RatedWithAI web accessibility scanner — it tests any URL against 50+ WCAG criteria with detailed fix recommendations.",
    },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "PDF Accessibility Checker",
      applicationCategory: "UtilitiesApplication",
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
        "Free PDF accessibility checker. Upload a PDF and check for WCAG 2.1, Section 508, and PDF/UA compliance — document tags, alt text, reading order, language, and more. 100% client-side processing.",
      url: "https://ratedwithai.com/tools/pdf-accessibility-checker",
      featureList: [
        "Document title check",
        "Language tag verification",
        "Tagged PDF structure detection",
        "Heading hierarchy analysis",
        "Image alt text check",
        "Bookmark navigation check",
        "Text extractability test (OCR detection)",
        "100% client-side — no file upload",
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
      name: "How to Check PDF Accessibility",
      description:
        "Use the free PDF Accessibility Checker to test your PDF documents for WCAG 2.1 and Section 508 compliance.",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Upload your PDF file",
          text: "Drag and drop a PDF file onto the upload area, or click to browse and select a file from your device. The file stays in your browser — nothing is uploaded.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Wait for the accessibility analysis",
          text: "The tool automatically parses your PDF and runs 7 accessibility checks covering document structure, metadata, images, and text content.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Review your accessibility score",
          text: "See your overall score (e.g., '5/7 checks passed') and individual pass/fail/warning results for each accessibility criterion.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Fix failed checks using the recommendations",
          text: "Each failed or warning check includes a specific 'How to fix' recommendation explaining exactly what to do in tools like Adobe Acrobat or Microsoft Word.",
        },
        {
          "@type": "HowToStep",
          position: 5,
          name: "Re-check after making fixes",
          text: "After fixing issues in your PDF authoring tool, upload the updated PDF to verify your changes resolved the accessibility problems.",
        },
      ],
      tool: {
        "@type": "HowToTool",
        name: "RatedWithAI PDF Accessibility Checker",
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
          name: "PDF Accessibility Checker",
          item: "https://ratedwithai.com/tools/pdf-accessibility-checker",
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
                📄 Free Tool — No Signup Required
              </span>
              <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
                PDF Accessibility
                <br />
                Checker
              </h1>
              <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                Upload a PDF and instantly check for WCAG 2.1, Section 508, and
                PDF/UA accessibility compliance. Your file never leaves your
                browser — 100% private, client-side analysis.
              </p>
            </div>

            {/* Interactive Tool */}
            <PdfAccessibilityChecker />

            {/* CTA Banner */}
            <div className="mt-12 rounded-xl border border-sky-500/30 bg-sky-500/5 p-8 sm:p-10 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Check your entire website's accessibility
              </h2>
              <p className="text-slate-300 mt-4 max-w-xl mx-auto">
                PDFs are just one part of accessibility. Scan your website for
                WCAG violations across all your HTML pages — contrast issues,
                missing alt text, ARIA errors, and 50+ more checks.
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
                PDF Accessibility: What You Need to Know
              </h2>

              <p className="text-slate-300 mt-4 leading-relaxed">
                PDF documents are everywhere — contracts, reports, forms,
                invoices, and publications. But most PDFs are created without
                accessibility in mind, making them unusable for the 2.2 billion
                people worldwide with visual impairments or the millions who
                rely on screen readers and other assistive technologies. PDF
                accessibility isn't optional — it's required by law in many
                jurisdictions.
              </p>

              <h3 className="text-xl font-bold text-white mt-8">
                Legal Requirements for PDF Accessibility
              </h3>

              <p className="text-slate-300 leading-relaxed">
                <strong>Section 508</strong> of the Rehabilitation Act requires
                all federal agencies and contractors to make electronic
                documents — including PDFs — accessible to people with
                disabilities. This applies to government forms, reports,
                publications, and any document shared publicly.
              </p>

              <p className="text-slate-300 leading-relaxed">
                The <strong>Americans with Disabilities Act (ADA)</strong> has
                been interpreted by courts to cover digital content, including
                PDFs on websites. Multiple lawsuits have targeted inaccessible
                PDFs, particularly in healthcare, education, and financial
                services.
              </p>

              <p className="text-slate-300 leading-relaxed">
                <strong>WCAG 2.1 Level AA</strong> is the technical standard
                referenced by most regulations. While WCAG was written for web
                content, its principles apply directly to PDFs: content must be
                perceivable, operable, understandable, and robust for all users.
              </p>

              <p className="text-slate-300 leading-relaxed">
                The <strong>PDF/UA standard (ISO 14289)</strong> is the
                dedicated accessibility standard specifically for PDF documents.
                It defines precise technical requirements for tagged structure,
                alternative text, navigation, and metadata. PDF/UA compliance
                generally satisfies WCAG requirements for PDF content.
              </p>

              <h3 className="text-xl font-bold text-white mt-8">
                The 7 Key Accessibility Checks
              </h3>

              <p className="text-slate-300 leading-relaxed">
                Our PDF accessibility checker tests the most critical compliance
                requirements:
              </p>

              <ul className="text-slate-300 space-y-2 list-disc list-inside">
                <li>
                  <strong>Document Title</strong> — A descriptive title in
                  metadata helps users identify the document. Screen readers
                  announce it when opening the file.
                </li>
                <li>
                  <strong>Language Tag</strong> — Setting the primary language
                  allows screen readers to use the correct pronunciation rules
                  and speech synthesis.
                </li>
                <li>
                  <strong>Tagged Structure</strong> — Tags define the
                  document's logical structure (headings, paragraphs, lists,
                  tables). Without tags, screen readers read content as a flat
                  text stream with no navigation.
                </li>
                <li>
                  <strong>Heading Hierarchy</strong> — Properly nested headings
                  (H1 → H2 → H3) create a navigational outline. Users can jump
                  between sections just as they would on a webpage.
                </li>
                <li>
                  <strong>Image Alt Text</strong> — Every meaningful image needs
                  alternative text describing its content. Decorative images
                  should be marked as artifacts so screen readers skip them.
                </li>
                <li>
                  <strong>Bookmarks</strong> — Long documents need bookmarks
                  (like a table of contents) for navigation. They're especially
                  important for documents over 5 pages.
                </li>
                <li>
                  <strong>Text Extractability</strong> — If a PDF is a scanned
                  image without OCR, no text can be read by assistive
                  technology. OCR must be applied to make scanned content
                  accessible.
                </li>
              </ul>

              <h3 className="text-xl font-bold text-white mt-8">
                How to Create Accessible PDFs
              </h3>

              <p className="text-slate-300 leading-relaxed">
                The best approach is to create accessibility at the source. In
                Microsoft Word, use built-in heading styles, add alt text to
                images, and use proper table structures. When exporting to PDF,
                enable "Document structure tags for accessibility" in the save
                options. Adobe InDesign, Google Docs, and LibreOffice Writer
                have similar features.
              </p>

              <p className="text-slate-300 leading-relaxed">
                For existing PDFs, Adobe Acrobat Pro provides the most
                comprehensive remediation tools. The Accessibility panel
                includes automated tag detection, reading order adjustment, alt
                text editors, and a built-in checker. Free alternatives like
                the PAC (PDF Accessibility Checker) from the Swiss foundation
                Access For All can validate compliance but can't fix issues.
              </p>

              <h3 className="text-xl font-bold text-white mt-8">
                Beyond PDFs: Full Website Accessibility
              </h3>

              <p className="text-slate-300 leading-relaxed">
                PDF accessibility is one piece of the compliance puzzle. Your
                website's HTML pages, forms, navigation, and multimedia content
                all need to meet WCAG standards too. Use an automated
                accessibility scanner like RatedWithAI to test your entire site
                and get prioritized fix recommendations across all content types.
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
                  Free Website Accessibility Checker
                </Link>{" "}
                ·{" "}
                <Link
                  href="/blog/section-508-compliance-guide"
                  className="text-sky-400 hover:text-sky-300"
                >
                  Section 508 Compliance Guide
                </Link>{" "}
                ·{" "}
                <Link
                  href="/blog/wcag-compliance-guide"
                  className="text-sky-400 hover:text-sky-300"
                >
                  WCAG Compliance Guide
                </Link>{" "}
                ·{" "}
                <Link
                  href="/tools/accessibility-statement-generator"
                  className="text-sky-400 hover:text-sky-300"
                >
                  Accessibility Statement Generator
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
