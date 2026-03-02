/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title:
    "PDF Accessibility: How to Make ADA-Compliant PDFs (2026 Guide) | RatedWithAI",
  description:
    "Complete guide to PDF accessibility and ADA compliance in 2026. Learn how to create, test, and remediate accessible PDFs for WCAG 2.1 AA, Section 508, and PDF/UA standards. Covers tagged PDFs, remediation tools, and cost breakdowns.",
  openGraph: {
    title: "PDF Accessibility: How to Make ADA-Compliant PDFs (2026 Guide)",
    description:
      "Ohio State spent $20 million on PDF remediation. Government agencies face an April 2026 deadline. Learn exactly how to make your PDFs accessible — from tagging to testing to remediation.",
    type: "article",
    publishedTime: "2026-03-02T00:00:00.000Z",
    authors: ["RatedWithAI Team"],
  },
  keywords: [
    "pdf accessibility",
    "accessible pdf",
    "ada compliant pdf",
    "pdf remediation",
    "wcag pdf",
    "tagged pdf",
    "section 508 pdf",
    "pdf accessibility checker",
    "pdf ua",
    "how to make pdf accessible",
    "ada pdf compliance",
    "accessible pdf guide",
    "pdf accessibility tools",
    "government pdf accessibility",
    "pdf accessibility audit",
  ],
  alternates: {
    canonical:
      "https://ratedwithai.com/blog/pdf-accessibility-ada-compliance-guide-2026",
  },
};

export default function PDFAccessibilityGuidePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "PDF Accessibility: How to Make ADA-Compliant PDFs — Complete Guide for 2026",
    description:
      "Comprehensive guide to creating, testing, and remediating accessible PDFs for ADA, Section 508, WCAG 2.1, and PDF/UA compliance.",
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
        "https://ratedwithai.com/blog/pdf-accessibility-ada-compliance-guide-2026",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What makes a PDF accessible?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An accessible PDF has a logical tag structure (headings, paragraphs, lists, tables), alternative text for images, a defined reading order, bookmarks for navigation, a specified document language, and proper color contrast. It should be readable by screen readers like JAWS and NVDA, navigable via keyboard, and pass both WCAG 2.1 AA and PDF/UA-1 standards.",
        },
      },
      {
        "@type": "Question",
        name: "How much does PDF remediation cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PDF remediation typically costs $25-$75 per page for simple text documents, $75-$200 per page for documents with tables and charts, and $200-$500+ per page for complex scientific or technical documents. Bulk remediation services offer volume discounts. Ohio State University budgeted $20 million for remediation across its entire document library, while smaller organizations typically spend $5,000-$50,000 depending on document volume.",
        },
      },
      {
        "@type": "Question",
        name: "Is PDF accessibility legally required?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Under the ADA Title II final rule (effective April 24, 2026), all electronic documents published by state and local government entities — including PDFs — must meet WCAG 2.1 Level AA. Section 508 requires federal agencies to make PDFs accessible. For businesses, courts have increasingly held that digital content including PDFs must be accessible under ADA Title III, especially for e-commerce, healthcare, and financial services.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between PDF/UA and WCAG?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WCAG (Web Content Accessibility Guidelines) provides general accessibility standards for all digital content including PDFs. PDF/UA (Universal Accessibility, ISO 14289-1) is a technical standard specifically for PDF documents that defines precise structural requirements like tag trees, reading order, and font encoding. A PDF can be WCAG-compliant but not PDF/UA-compliant, or vice versa. Best practice is to meet both standards. PDF/UA-2 (published 2024) aligns more closely with WCAG 2.",
        },
      },
      {
        "@type": "Question",
        name: "Can I make a scanned PDF accessible?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Scanned PDFs that are essentially images of text require OCR (Optical Character Recognition) as a first step to convert image-based text into selectable, readable text. After OCR, the document still needs tagging, reading order correction, alternative text, and other accessibility fixes. The quality of OCR output varies — handwritten documents, low-resolution scans, and complex layouts produce less reliable results and may need manual correction.",
        },
      },
      {
        "@type": "Question",
        name: "What tools can check PDF accessibility?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Key tools include: PAC 2024/2026 (free, checks PDF/UA and WCAG), Adobe Acrobat Pro (built-in accessibility checker and remediation), axe for PDF by Deque (automated testing), CommonLook PDF Validator (enterprise-grade), and NVDA/JAWS screen readers for manual testing. PAC is widely considered the gold standard for automated PDF accessibility checking.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to remediate a PDF?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A simple 10-page text document takes 1-2 hours. A 20-page document with tables, charts, and images takes 4-8 hours. Complex technical documents (100+ pages with scientific notation, data tables, or engineering diagrams) can take 20-40+ hours each. Government agencies with thousands of PDFs often need 6-18 months for full remediation programs.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to make every old PDF accessible?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under the ADA Title II rule, government entities must make web content accessible but may claim an 'undue burden' exception for archival content that would be prohibitively expensive to remediate. The practical approach is to prioritize: currently published and linked PDFs first, high-traffic documents, forms that people need to complete, and documents required for services. Archived content that is no longer actively used can be lower priority, but must be made accessible upon request.",
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
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-2 text-blue-200 text-sm mb-4">
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>
              <span>/</span>
              <span>PDF Accessibility Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              PDF Accessibility: How to Make ADA-Compliant PDFs
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl">
              Ohio State University budgeted <strong>$20 million</strong> for PDF
              remediation. Texas agencies are scrambling to fix millions of
              documents before the April 2026 deadline. Here's your complete
              guide to making PDFs accessible — from tagged structures to
              automated testing.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm">
              <span className="bg-blue-700/50 px-3 py-1 rounded-full">
                📄 Updated March 2026
              </span>
              <span className="bg-blue-700/50 px-3 py-1 rounded-full">
                ⏱️ 18 min read
              </span>
              <span className="bg-blue-700/50 px-3 py-1 rounded-full">
                📋 Covers WCAG 2.1 + PDF/UA + Section 508
              </span>
            </div>
          </div>
        </section>

        {/* Key Stats Banner */}
        <section className="bg-white border-b">
          <div className="container mx-auto px-4 max-w-4xl py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-red-600">$20M</div>
                <div className="text-sm text-gray-600 mt-1">
                  Ohio State's PDF remediation budget
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600">54%</div>
                <div className="text-sm text-gray-600 mt-1">
                  of states lack dedicated accessibility funding
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600">April 24</div>
                <div className="text-sm text-gray-600 mt-1">
                  2026 ADA Title II compliance deadline
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600">$150K</div>
                <div className="text-sm text-gray-600 mt-1">
                  DOJ civil penalty per subsequent violation
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
              <a href="#why-pdf-accessibility" className="text-blue-600 hover:underline">
                1. Why PDF Accessibility Matters Now
              </a>
              <a href="#legal-requirements" className="text-blue-600 hover:underline">
                2. Legal Requirements for Accessible PDFs
              </a>
              <a href="#what-makes-pdf-accessible" className="text-blue-600 hover:underline">
                3. What Makes a PDF Accessible?
              </a>
              <a href="#tagged-pdf-structure" className="text-blue-600 hover:underline">
                4. Understanding Tagged PDF Structure
              </a>
              <a href="#create-accessible-pdf" className="text-blue-600 hover:underline">
                5. How to Create Accessible PDFs from Scratch
              </a>
              <a href="#remediate-existing" className="text-blue-600 hover:underline">
                6. How to Remediate Existing PDFs
              </a>
              <a href="#scanned-pdfs" className="text-blue-600 hover:underline">
                7. Making Scanned PDFs Accessible
              </a>
              <a href="#testing-tools" className="text-blue-600 hover:underline">
                8. PDF Accessibility Testing Tools
              </a>
              <a href="#common-failures" className="text-blue-600 hover:underline">
                9. Most Common PDF Accessibility Failures
              </a>
              <a href="#pdf-ua-standard" className="text-blue-600 hover:underline">
                10. PDF/UA Standard Explained
              </a>
              <a href="#cost-breakdown" className="text-blue-600 hover:underline">
                11. PDF Remediation Cost Breakdown
              </a>
              <a href="#government-compliance" className="text-blue-600 hover:underline">
                12. Government Agency PDF Compliance
              </a>
              <a href="#prioritization" className="text-blue-600 hover:underline">
                13. Prioritization Framework
              </a>
              <a href="#tools-comparison" className="text-blue-600 hover:underline">
                14. PDF Accessibility Tools Compared
              </a>
              <a href="#checklist" className="text-blue-600 hover:underline">
                15. Complete PDF Accessibility Checklist
              </a>
              <a href="#faq" className="text-blue-600 hover:underline">
                16. FAQ
              </a>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="container mx-auto px-4 max-w-4xl py-12">
          <div className="prose prose-lg max-w-none">
            {/* Section 1 */}
            <section id="why-pdf-accessibility" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                1. Why PDF Accessibility Matters Now
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                PDFs are everywhere in government and business — forms, reports,
                policies, meeting minutes, financial statements, contracts,
                educational materials. The problem? The vast majority of them are
                completely inaccessible to people who use screen readers,
                keyboard navigation, or other assistive technologies.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                When a screen reader encounters an untagged PDF, it often reads
                gibberish — characters out of order, columns mixed together,
                images with no descriptions, and tables that make no sense. For
                the{" "}
                <strong>
                  more than 1 in 4 U.S. adults living with a disability
                </strong>
                , inaccessible PDFs don't just create inconvenience — they block
                access to essential services, information, and opportunities.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The urgency is real. Ohio State University has budgeted{" "}
                <strong>$20 million</strong> for PDF remediation alone. The state
                of Texas reports that agencies and universities are actively
                working on PDF remediation as part of their ADA Title II
                compliance push. A{" "}
                <a
                  href="https://www.nascio.org/wp-content/uploads/2026/02/NASCIO-Guide-to-DOJ-Final-Rule-Compliance-2026_a11y.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  NASCIO survey
                </a>{" "}
                found that <strong>54% of state CIOs</strong> have no dedicated
                funding for accessibility services — yet they face an April 24,
                2026 compliance deadline that explicitly covers electronic
                documents.
              </p>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
                <h3 className="text-lg font-bold text-red-800 mb-2">
                  ⚠️ The April 2026 Deadline Includes PDFs
                </h3>
                <p className="text-red-700">
                  The DOJ's ADA Title II final rule requires all "web content"
                  published by state and local government entities to meet WCAG
                  2.1 Level AA. The rule explicitly defines web content to
                  include electronic documents — meaning every PDF linked from a
                  government website must be accessible by{" "}
                  <strong>April 24, 2026</strong> (populations 50,000+) or April
                  26, 2027 (smaller entities).
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                And it's not just government. Businesses face growing litigation
                risk. In the{" "}
                <Link
                  href="/blog/ada-website-lawsuit-statistics-2026"
                  className="text-blue-600 hover:underline"
                >
                  8,667 ADA website lawsuits filed in 2024
                </Link>
                , inaccessible documents — particularly PDFs — were cited as
                barriers in financial services, healthcare, and higher education
                cases. When a bank puts its account disclosures in an
                inaccessible PDF, or a hospital publishes patient forms that
                screen readers can't navigate, they're creating both a legal
                liability and a real barrier for real people.
              </p>
            </section>

            {/* Section 2 */}
            <section id="legal-requirements" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                2. Legal Requirements for Accessible PDFs
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Multiple laws and standards require PDF accessibility. Here's how
                they apply:
              </p>

              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">
                ADA Title II — State and Local Government
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The DOJ's{" "}
                <Link
                  href="/blog/ada-title-ii-deadline-countdown-2026"
                  className="text-blue-600 hover:underline"
                >
                  April 2024 final rule
                </Link>{" "}
                requires all web content — including electronic documents like
                PDFs — to meet WCAG 2.1 Level AA. This covers:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>
                  PDFs posted on government websites (forms, reports, agendas)
                </li>
                <li>
                  PDFs sent via email as part of government services
                </li>
                <li>
                  PDFs in online portals (permit applications, tax forms)
                </li>
                <li>
                  Meeting minutes, budget documents, policy manuals
                </li>
                <li>
                  Educational materials at public universities and K-12 schools
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                Failure to comply can trigger DOJ enforcement actions, including
                compensatory damages, mandatory injunctive relief, and civil
                penalties of up to <strong>$75,000</strong> for a first violation
                and <strong>$150,000</strong> for subsequent violations
                (inflation-adjusted).
              </p>

              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">
                ADA Title III — Private Businesses
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                While the DOJ hasn't issued a specific Title III web rule,{" "}
                <Link
                  href="/blog/online-only-stores-ada-compliance-2026"
                  className="text-blue-600 hover:underline"
                >
                  federal courts increasingly hold
                </Link>{" "}
                that digital content, including PDFs, must be accessible. This is
                particularly enforced in:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>
                  <strong>Financial services:</strong> Account statements,
                  disclosures, loan documents
                </li>
                <li>
                  <strong>Healthcare:</strong> Patient intake forms, insurance
                  explanations, lab results
                </li>
                <li>
                  <strong>E-commerce:</strong> Product manuals, return policies,
                  terms of service
                </li>
                <li>
                  <strong>Education:</strong> Course materials, syllabi,
                  registration forms
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">
                Section 508 — Federal Government
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                <Link
                  href="/blog/section-508-compliance-guide"
                  className="text-blue-600 hover:underline"
                >
                  Section 508 of the Rehabilitation Act
                </Link>{" "}
                requires federal agencies to make all electronic and information
                technology accessible, including PDFs. The standard references
                WCAG 2.0 Level AA (updated guidance aligns with WCAG 2.1). The
                FY2024 assessment found federal agencies' average conformance
                score was just <strong>1.74 out of 5</strong> — with document
                accessibility being one of the weakest areas.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">
                European Accessibility Act (EAA)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                For organizations operating in Europe, the{" "}
                <Link
                  href="/blog/european-accessibility-act-eaa-compliance-us-businesses"
                  className="text-blue-600 hover:underline"
                >
                  European Accessibility Act
                </Link>{" "}
                (enforced since June 2025) requires accessible digital content
                for products and services sold in the EU. PDF accessibility
                applies to banking, e-commerce, transportation, and
                telecommunications providers serving EU customers.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-blue-800 mb-2">
                  📋 Standards Summary
                </h3>
                <ul className="space-y-2 text-blue-700">
                  <li>
                    <strong>ADA Title II:</strong> WCAG 2.1 AA — deadline April
                    24, 2026
                  </li>
                  <li>
                    <strong>Section 508:</strong> WCAG 2.0 AA (practical: 2.1
                    AA) — ongoing
                  </li>
                  <li>
                    <strong>PDF/UA-1:</strong> ISO 14289-1 — technical PDF
                    structure standard
                  </li>
                  <li>
                    <strong>PDF/UA-2:</strong> ISO 14289-2 (2024) — aligned with
                    WCAG 2.x
                  </li>
                  <li>
                    <strong>EAA:</strong> EN 301 549 / WCAG 2.1 AA — enforced
                    since June 2025
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section id="what-makes-pdf-accessible" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                3. What Makes a PDF Accessible?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                An accessible PDF isn't just a document that "looks right" on
                screen. It's a document with an underlying structure that
                assistive technologies can interpret. Here are the core
                requirements:
              </p>

              <div className="space-y-6">
                <div className="bg-white border rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    🏗️ Tagged Structure
                  </h3>
                  <p className="text-gray-700">
                    Every element — headings, paragraphs, lists, tables, images,
                    links — must be properly tagged so screen readers know what
                    they are. Tags are the invisible skeleton that gives a PDF
                    its logical structure. Without tags, a screen reader just
                    sees a flat stream of characters.
                  </p>
                </div>

                <div className="bg-white border rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    📖 Reading Order
                  </h3>
                  <p className="text-gray-700">
                    The logical reading order must match the visual layout. In
                    multi-column documents, the reading order must flow
                    correctly — left column first, then right column — not
                    jumping between them. This is one of the most common failures
                    in PDF accessibility.
                  </p>
                </div>

                <div className="bg-white border rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    🖼️ Alternative Text
                  </h3>
                  <p className="text-gray-700">
                    All meaningful images, charts, graphs, and diagrams need
                    descriptive alternative text. Decorative images should be
                    marked as artifacts (hidden from screen readers). Complex
                    charts may need extended descriptions.
                  </p>
                </div>

                <div className="bg-white border rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    📊 Table Structure
                  </h3>
                  <p className="text-gray-700">
                    Tables must have properly defined header rows and columns so
                    screen readers can announce which header applies to each data
                    cell. Complex tables with merged cells, nested headers, or
                    spanning rows are among the most difficult elements to make
                    accessible.
                  </p>
                </div>

                <div className="bg-white border rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    🔤 Real Text (Not Images of Text)
                  </h3>
                  <p className="text-gray-700">
                    Text must be actual, selectable text — not an image of text.
                    Scanned documents that haven't been processed with OCR are
                    entirely inaccessible. Screen readers can't read pixels.
                  </p>
                </div>

                <div className="bg-white border rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    🌐 Document Language
                  </h3>
                  <p className="text-gray-700">
                    The document's language must be specified in its properties
                    so screen readers use the correct pronunciation engine.
                    Documents with sections in different languages need
                    language-change tags at those points.
                  </p>
                </div>

                <div className="bg-white border rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    🔗 Navigational Aids
                  </h3>
                  <p className="text-gray-700">
                    Bookmarks should mirror the heading structure for documents
                    longer than ~20 pages. Links must have descriptive text (not
                    bare URLs). A document title must be set in properties (not
                    the filename). Tab order should follow document structure.
                  </p>
                </div>

                <div className="bg-white border rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    🎨 Visual Design
                  </h3>
                  <p className="text-gray-700">
                    Color contrast must meet WCAG minimums (4.5:1 for normal
                    text, 3:1 for large text). Information cannot be conveyed by
                    color alone. Text must allow reflow/zoom. Flashing or
                    animated content must be avoidable.
                  </p>
                </div>

                <div className="bg-white border rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    📝 Fillable Forms
                  </h3>
                  <p className="text-gray-700">
                    Form fields must have descriptive labels, logical tab order,
                    and appropriate field types. Required fields must be
                    identified. Error messages must be programmatically
                    associated with their fields. Forms should be completable
                    entirely via keyboard.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="tagged-pdf-structure" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                4. Understanding Tagged PDF Structure
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tags are the foundation of PDF accessibility. They're metadata
                elements embedded in the PDF file that define the document's
                logical structure — think of them as the HTML equivalent for
                PDFs.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you open a tagged PDF in Adobe Acrobat's Tags panel, you
                see a tree structure similar to an HTML DOM. Each tag identifies
                what an element is: a heading, paragraph, list item, table cell,
                figure, link, or form field.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">
                Essential PDF Tag Types
              </h3>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <code className="bg-gray-200 px-2 py-1 rounded text-sm">
                      &lt;Document&gt;
                    </code>{" "}
                    — Root container for the entire document
                  </li>
                  <li>
                    <code className="bg-gray-200 px-2 py-1 rounded text-sm">
                      &lt;H1&gt;
                    </code>{" "}
                    through{" "}
                    <code className="bg-gray-200 px-2 py-1 rounded text-sm">
                      &lt;H6&gt;
                    </code>{" "}
                    — Heading levels (must not skip levels)
                  </li>
                  <li>
                    <code className="bg-gray-200 px-2 py-1 rounded text-sm">
                      &lt;P&gt;
                    </code>{" "}
                    — Paragraphs of text
                  </li>
                  <li>
                    <code className="bg-gray-200 px-2 py-1 rounded text-sm">
                      &lt;L&gt;
                    </code>
                    ,{" "}
                    <code className="bg-gray-200 px-2 py-1 rounded text-sm">
                      &lt;LI&gt;
                    </code>
                    ,{" "}
                    <code className="bg-gray-200 px-2 py-1 rounded text-sm">
                      &lt;Lbl&gt;
                    </code>
                    ,{" "}
                    <code className="bg-gray-200 px-2 py-1 rounded text-sm">
                      &lt;LBody&gt;
                    </code>{" "}
                    — Lists, list items, bullets/numbers, and content
                  </li>
                  <li>
                    <code className="bg-gray-200 px-2 py-1 rounded text-sm">
                      &lt;Table&gt;
                    </code>
                    ,{" "}
                    <code className="bg-gray-200 px-2 py-1 rounded text-sm">
                      &lt;TR&gt;
                    </code>
                    ,{" "}
                    <code className="bg-gray-200 px-2 py-1 rounded text-sm">
                      &lt;TH&gt;
                    </code>
                    ,{" "}
                    <code className="bg-gray-200 px-2 py-1 rounded text-sm">
                      &lt;TD&gt;
                    </code>{" "}
                    — Tables with headers and data cells
                  </li>
                  <li>
                    <code className="bg-gray-200 px-2 py-1 rounded text-sm">
                      &lt;Figure&gt;
                    </code>{" "}
                    — Images and graphics (with /Alt text attribute)
                  </li>
                  <li>
                    <code className="bg-gray-200 px-2 py-1 rounded text-sm">
                      &lt;Link&gt;
                    </code>{" "}
                    — Hyperlinks (with /Alt or nested descriptive text)
                  </li>
                  <li>
                    <code className="bg-gray-200 px-2 py-1 rounded text-sm">
                      &lt;Form&gt;
                    </code>{" "}
                    — Interactive form fields
                  </li>
                  <li>
                    <code className="bg-gray-200 px-2 py-1 rounded text-sm">
                      &lt;Artifact&gt;
                    </code>{" "}
                    — Decorative elements hidden from assistive tech (page
                    numbers, watermarks, headers/footers)
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">
                Tagged vs. Untagged PDFs
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You can check if a PDF is tagged in Adobe Acrobat by going to{" "}
                <strong>File → Properties → Description</strong> and looking for
                "Tagged PDF: Yes." But <em>having</em> tags doesn't guarantee{" "}
                <em>correct</em> tags. Auto-generated tags from Word exports
                often have incorrect heading levels, missing table headers, and
                poor reading order — all of which require manual review and
                correction.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                A truly accessible tag tree has:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>
                  <strong>Correct hierarchy:</strong> H1 → H2 → H3 (no
                  skipping from H1 to H3)
                </li>
                <li>
                  <strong>All content tagged:</strong> No text floating outside
                  the tag tree
                </li>
                <li>
                  <strong>Artifacts marked:</strong> Page numbers, decorative
                  lines, watermarks excluded from reading
                </li>
                <li>
                  <strong>Matching reading order:</strong> Tag order matches
                  visual layout
                </li>
                <li>
                  <strong>Proper nesting:</strong> List items inside lists,
                  cells inside rows inside tables
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="create-accessible-pdf" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                5. How to Create Accessible PDFs from Scratch
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The most cost-effective approach to PDF accessibility is to
                create accessible documents from the start. Retrofitting
                accessibility onto an existing PDF is 3-10x more expensive than
                building it in from the beginning.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">
                From Microsoft Word
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Microsoft Word is the most common source for PDFs, and it can
                produce well-tagged PDFs if you follow these practices:
              </p>
              <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
                <li>
                  <strong>Use built-in heading styles</strong> (Heading 1,
                  Heading 2, etc.) — don't just make text bold and large. Screen
                  readers rely on heading tags for navigation.
                </li>
                <li>
                  <strong>Use Word's list tools</strong> for bulleted and
                  numbered lists — don't manually type "1." or "•". Manually
                  formatted lists don't export as tagged lists.
                </li>
                <li>
                  <strong>Add alt text to all images</strong> via right-click →
                  "Edit Alt Text." Mark decorative images as "Mark as
                  decorative."
                </li>
                <li>
                  <strong>Use Word's table tools</strong> for tables. Define
                  header rows via Table Properties → Row → "Repeat as header row
                  at the top of each page."
                </li>
                <li>
                  <strong>Use meaningful hyperlink text</strong> — "Read the
                  full report" instead of "click here" or a bare URL.
                </li>
                <li>
                  <strong>Set the document language</strong> in File → Options →
                  Language.
                </li>
                <li>
                  <strong>Run the built-in accessibility checker</strong> via
                  Review → Check Accessibility before exporting.
                </li>
                <li>
                  <strong>Export properly:</strong> Use File → Save As → PDF
                  (not Print → PDF, which creates an image-based PDF). Check
                  "Document structure tags for accessibility" in the options.
                </li>
              </ol>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-6">
                <h3 className="text-lg font-bold text-yellow-800 mb-2">
                  ⚠️ Common Mistake: "Print to PDF"
                </h3>
                <p className="text-yellow-700">
                  Using "Print to PDF" or a virtual PDF printer strips all tags,
                  producing an image-like PDF that's completely inaccessible.
                  Always use "Save As PDF" or "Export to PDF" with accessibility
                  options enabled.
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">
                From Google Docs
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Google Docs' PDF export has improved but still lags behind Word:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Use built-in heading styles (Normal, Heading 1-6)</li>
                <li>Add alt text to images (right-click → "Alt text")</li>
                <li>
                  Export via File → Download → PDF. Tags are generated
                  automatically.
                </li>
                <li>
                  <strong>Limitation:</strong> Google Docs doesn't properly
                  export table headers, complex lists, or language attributes.
                  Always validate the exported PDF and plan for manual
                  remediation of tables.
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">
                From Adobe InDesign
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                InDesign is used for complex layouts (reports, brochures,
                magazines) and offers strong PDF accessibility support:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>
                  Map paragraph styles to PDF tags (Object → Object Export
                  Options)
                </li>
                <li>
                  Set reading order via the Articles panel (Window → Articles)
                </li>
                <li>
                  Add alt text via Object → Object Export Options → Alt Text tab
                </li>
                <li>
                  Export with "Create Tagged PDF" checked and "Use Structure for
                  Tab Order" enabled
                </li>
                <li>
                  Complex multi-column layouts require careful Articles panel
                  ordering
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">
                From LaTeX
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                LaTeX is widely used in academia and scientific publishing.
                Producing accessible PDFs from LaTeX has historically been
                extremely difficult, but the{" "}
                <code className="bg-gray-200 px-2 py-1 rounded text-sm">
                  tagpdf
                </code>{" "}
                package (developed by the LaTeX Project) is making progress.
                Currently:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>
                  Basic tagging works for simple documents (headings,
                  paragraphs, lists)
                </li>
                <li>
                  Math equations remain a major challenge — MathML support is
                  limited
                </li>
                <li>
                  Complex scientific documents typically need post-processing in
                  Acrobat
                </li>
                <li>
                  Consider HTML output as an accessible alternative (via
                  pandoc or lwarp)
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="remediate-existing" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                6. How to Remediate Existing PDFs
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Most organizations face a backlog of inaccessible PDFs that need
                remediation. Here's the systematic process:
              </p>

              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">
                Step 1: Run the Accessibility Checker
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                In Adobe Acrobat Pro: All Tools → Prepare for Accessibility →
                Check for Accessibility. This identifies missing tags, reading
                order issues, missing alt text, and form field problems. Address
                each issue systematically.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">
                Step 2: Add or Fix Tags
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Open the Tags panel (View → Navigation Panels → Tags). If the
                PDF has no tags, use "Add Tags to Document" for auto-tagging,
                then correct the results. For each element:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Verify heading levels are correct and hierarchical</li>
                <li>
                  Ensure paragraphs are tagged as{" "}
                  <code className="bg-gray-200 px-1 rounded">&lt;P&gt;</code>,
                  not{" "}
                  <code className="bg-gray-200 px-1 rounded">&lt;Span&gt;</code>
                </li>
                <li>Convert decorative elements to artifacts</li>
                <li>Fix any content tagged as the wrong element type</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">
                Step 3: Fix Reading Order
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Use the Reading Order tool (All Tools → Prepare for
                Accessibility → Set Reading Order) or the Order panel. Walk
                through the document page by page, verifying that numbered
                regions flow in the correct sequence. Multi-column layouts,
                sidebars, and pull quotes often have incorrect order.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">
                Step 4: Add Alternative Text
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Right-click each Figure tag → Properties → Tag → Alternative
                Text. Write descriptions that convey the meaning and purpose of
                the image, not just what it looks like. For charts: describe the
                trend or key data points. For diagrams: describe the
                relationships shown.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">
                Step 5: Fix Table Structure
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                This is often the most time-consuming step. For each table:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>
                  Verify header cells are tagged as{" "}
                  <code className="bg-gray-200 px-1 rounded">&lt;TH&gt;</code>{" "}
                  (not{" "}
                  <code className="bg-gray-200 px-1 rounded">&lt;TD&gt;</code>)
                </li>
                <li>
                  Set scope attributes (Row or Column) on header cells
                </li>
                <li>
                  For complex tables with merged cells: add ID/Headers
                  attributes
                </li>
                <li>
                  Consider using the Table Editor in Acrobat's accessibility
                  tools
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">
                Step 6: Set Document Properties
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>
                  Set document title (File → Properties → Description → Title)
                </li>
                <li>
                  Set language (File → Properties → Advanced → Language)
                </li>
                <li>
                  Set "Initial View" to show Document Title in title bar (not
                  filename)
                </li>
                <li>
                  Add bookmarks matching heading structure for documents 20+
                  pages
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">
                Step 7: Test with Assistive Technology
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Automated checks catch structure issues but miss usability
                problems. Test with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>
                  <strong>NVDA</strong> (free) or <strong>JAWS</strong> — listen
                  to the full document read-through
                </li>
                <li>
                  <strong>Keyboard-only navigation</strong> — tab through all
                  links and form fields
                </li>
                <li>
                  <strong>Reflow mode</strong> (View → Zoom → Reflow) — verify
                  content reflows correctly
                </li>
              </ul>
            </section>

            {/* Section 7 */}
            <section id="scanned-pdfs" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                7. Making Scanned PDFs Accessible
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Scanned PDFs — documents created by scanning paper — are the
                hardest to remediate because they're essentially photographs.
                Screen readers see nothing but a flat image. The process
                requires:
              </p>

              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">
                Step 1: OCR Processing
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Run Optical Character Recognition to extract text from the scan.
                In Acrobat: All Tools → Scan & OCR → Recognize Text. Choose
                "Searchable Image (Exact)" to preserve visual layout while
                adding a text layer. OCR quality depends on:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>
                  <strong>Scan resolution:</strong> 300 DPI minimum, 600 DPI
                  preferred
                </li>
                <li>
                  <strong>Original print quality:</strong> Clean type produces
                  95%+ accuracy; faded or damaged documents may be 70-80%
                </li>
                <li>
                  <strong>Language and fonts:</strong> Standard fonts in major
                  languages work well; handwriting, unusual fonts, and
                  mixed-language documents are challenging
                </li>
                <li>
                  <strong>Layout complexity:</strong> Simple single-column
                  documents OCR well; multi-column with images requires manual
                  correction
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">
                Step 2: Verify OCR Accuracy
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                OCR is never 100% accurate. Review the extracted text, paying
                special attention to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Numbers and dates (commonly misread)</li>
                <li>
                  Proper nouns and technical terms (not in OCR dictionaries)
                </li>
                <li>
                  Characters confused by OCR: l/1/I, O/0, rn/m, cl/d
                </li>
                <li>
                  Tables and columnar data (columns often merge or split)
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">
                Step 3: Tag and Remediate
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                After OCR, follow the standard remediation process (Section 6
                above). Auto-tagging after OCR typically produces lower-quality
                tags than tagging a natively digital PDF, so budget extra time
                for manual corrections.
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-green-800 mb-2">
                  💡 When to Re-create Instead of Remediate
                </h3>
                <p className="text-green-700">
                  If the original source document exists (Word, InDesign, etc.),
                  it's almost always faster and cheaper to re-export from the
                  source with proper accessibility settings than to remediate a
                  scanned copy. Only remediate scans when the original source is
                  truly lost. For forms, consider rebuilding as an accessible
                  HTML form instead of remediating a scanned PDF form.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section id="testing-tools" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                8. PDF Accessibility Testing Tools
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Testing requires both automated checking and manual verification
                with assistive technology. Here are the essential tools:
              </p>

              <div className="space-y-6">
                <div className="bg-white border rounded-lg p-6 shadow-sm">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-bold text-gray-800">
                      PAC 2026 (PDF Accessibility Checker)
                    </h3>
                    <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">
                      FREE
                    </span>
                  </div>
                  <p className="text-gray-700 mt-2">
                    The gold standard for automated PDF accessibility testing.
                    Checks against PDF/UA-1, PDF/UA-2, and WCAG 2.x. Provides
                    detailed error reports with page-level findings. The new 2026
                    version includes AI-assisted checks for reading order and alt
                    text quality. Windows only (run via Parallels or VM on Mac).
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    <a
                      href="https://pac.pdf-accessibility.org/en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      pac.pdf-accessibility.org
                    </a>
                  </p>
                </div>

                <div className="bg-white border rounded-lg p-6 shadow-sm">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-bold text-gray-800">
                      Adobe Acrobat Pro
                    </h3>
                    <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">
                      PAID
                    </span>
                  </div>
                  <p className="text-gray-700 mt-2">
                    Built-in accessibility checker and the primary remediation
                    tool. The accessibility checker covers tags, reading order,
                    color contrast, alt text, forms, and document structure.
                    While not as thorough as PAC for PDF/UA compliance, it's
                    essential for remediation work. $23/month (Acrobat Pro plan).
                  </p>
                </div>

                <div className="bg-white border rounded-lg p-6 shadow-sm">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-bold text-gray-800">
                      CommonLook PDF Validator
                    </h3>
                    <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">
                      PAID
                    </span>
                  </div>
                  <p className="text-gray-700 mt-2">
                    Enterprise-grade PDF accessibility testing and remediation
                    platform. Used by federal agencies, universities, and large
                    organizations. Offers both automated checking and guided
                    manual remediation with detailed compliance reporting. The
                    most comprehensive commercial solution for high-volume PDF
                    accessibility.
                  </p>
                </div>

                <div className="bg-white border rounded-lg p-6 shadow-sm">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-bold text-gray-800">
                      axe for PDF (Deque)
                    </h3>
                    <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">
                      PAID
                    </span>
                  </div>
                  <p className="text-gray-700 mt-2">
                    From the makers of axe-core (the leading web accessibility
                    engine). Tests PDFs against WCAG 2.1 and Section 508.
                    Integrates with Deque's broader accessibility platform for
                    organizations managing both web and document accessibility.
                  </p>
                </div>

                <div className="bg-white border rounded-lg p-6 shadow-sm">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-bold text-gray-800">
                      NVDA + JAWS (Screen Readers)
                    </h3>
                    <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">
                      NVDA: FREE
                    </span>
                  </div>
                  <p className="text-gray-700 mt-2">
                    No automated tool catches everything. Testing with actual
                    screen readers reveals usability issues that checkers miss:
                    confusing reading order, meaningless alt text, tables that
                    don't make sense aurally, and forms that are technically
                    tagged but practically unusable. NVDA is free and
                    open-source; JAWS is the industry standard ($1,000+ license).
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9 */}
            <section id="common-failures" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                9. Most Common PDF Accessibility Failures
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Based on data from accessibility audits across government
                agencies, universities, and businesses, these are the most
                frequently encountered PDF accessibility failures:
              </p>

              <div className="space-y-4">
                <div className="bg-white border-l-4 border-red-500 p-4 rounded-r-lg">
                  <h3 className="font-bold text-gray-800">
                    #1: No Tags at All (Image-Only PDFs)
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    <strong>Impact:</strong> Completely inaccessible — screen
                    readers read nothing or read garbled text.{" "}
                    <strong>Prevalence:</strong> ~30-40% of government PDFs.{" "}
                    <strong>Fix:</strong> OCR + full tagging.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-red-500 p-4 rounded-r-lg">
                  <h3 className="font-bold text-gray-800">
                    #2: Missing or Incorrect Reading Order
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    <strong>Impact:</strong> Content read out of sequence —
                    columns mixed, sidebars interrupting main text.{" "}
                    <strong>Prevalence:</strong> ~60-70% of multi-column PDFs.{" "}
                    <strong>Fix:</strong> Manual reading order correction via
                    Order panel.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-orange-500 p-4 rounded-r-lg">
                  <h3 className="font-bold text-gray-800">
                    #3: Missing Alternative Text on Images
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    <strong>Impact:</strong> Screen readers announce "image" with
                    no description.{" "}
                    <strong>Prevalence:</strong> ~50-60% of PDFs with images.{" "}
                    <strong>Fix:</strong> Add descriptive alt text to Figure
                    tags; mark decorative images as artifacts.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-orange-500 p-4 rounded-r-lg">
                  <h3 className="font-bold text-gray-800">
                    #4: Tables Without Proper Headers
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    <strong>Impact:</strong> Screen readers can't associate data
                    cells with their headers — tables become meaningless.{" "}
                    <strong>Prevalence:</strong> ~70-80% of PDFs with tables.{" "}
                    <strong>Fix:</strong> Define TH cells with scope attributes.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-orange-500 p-4 rounded-r-lg">
                  <h3 className="font-bold text-gray-800">
                    #5: No Document Language Set
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    <strong>Impact:</strong> Screen reader uses wrong
                    pronunciation engine (reads English with French accent, for
                    example).{" "}
                    <strong>Prevalence:</strong> ~40-50% of PDFs.{" "}
                    <strong>Fix:</strong> Set in File → Properties → Advanced →
                    Language.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-yellow-500 p-4 rounded-r-lg">
                  <h3 className="font-bold text-gray-800">
                    #6: Heading Hierarchy Issues
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    <strong>Impact:</strong> Broken document navigation — users
                    can't jump between sections.{" "}
                    <strong>Prevalence:</strong> ~50% of tagged PDFs.{" "}
                    <strong>Fix:</strong> Correct heading levels in Tags panel
                    (H1 → H2 → H3, no skipping).
                  </p>
                </div>

                <div className="bg-white border-l-4 border-yellow-500 p-4 rounded-r-lg">
                  <h3 className="font-bold text-gray-800">
                    #7: Inaccessible Form Fields
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    <strong>Impact:</strong> Users can't fill out forms with
                    keyboard or screen reader.{" "}
                    <strong>Prevalence:</strong> ~60% of PDF forms.{" "}
                    <strong>Fix:</strong> Add labels, tooltips, tab order;
                    ensure keyboard accessibility.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-yellow-500 p-4 rounded-r-lg">
                  <h3 className="font-bold text-gray-800">
                    #8: Document Title Shows Filename
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    <strong>Impact:</strong> Screen reader announces
                    "Q1_2026_report_final_v3.pdf" instead of a meaningful title.{" "}
                    <strong>Prevalence:</strong> ~60% of PDFs.{" "}
                    <strong>Fix:</strong> Set Document Title in properties;
                    change Initial View to show title.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 10 */}
            <section id="pdf-ua-standard" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                10. PDF/UA Standard Explained
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                PDF/UA (Universal Accessibility) is the ISO standard (ISO
                14289) specifically for accessible PDF documents. While WCAG
                provides general web accessibility guidelines, PDF/UA defines
                precise technical requirements for how PDF structure must be
                built.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">
                PDF/UA-1 (ISO 14289-1:2014)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The first version, based on PDF 1.7. Key requirements:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>All content must be tagged (no untagged content)</li>
                <li>
                  Tags must use the PDF 1.7 standard structure types (or map to
                  them)
                </li>
                <li>
                  All multimedia and alternative representations must be
                  provided
                </li>
                <li>
                  Document metadata (title, language) must be set
                </li>
                <li>
                  Security settings must not interfere with assistive technology
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">
                PDF/UA-2 (ISO 14289-2:2024)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The updated version, published in 2024 and based on PDF 2.0.
                Major improvements:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>
                  <strong>Better WCAG alignment:</strong> Requirements map more
                  directly to WCAG 2.x success criteria
                </li>
                <li>
                  <strong>MathML support:</strong> Native mathematical formula
                  accessibility (critical for STEM documents)
                </li>
                <li>
                  <strong>Enhanced structure types:</strong> More precise tag
                  types for common document elements
                </li>
                <li>
                  <strong>Pronunciation:</strong> Support for pronunciation
                  dictionaries
                </li>
                <li>
                  <strong>Annotations:</strong> Better handling of comments,
                  notes, and redactions
                </li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-blue-800 mb-2">
                  PDF/UA vs. WCAG: Which Do You Need?
                </h3>
                <p className="text-blue-700">
                  <strong>For ADA Title II compliance:</strong> The DOJ rule
                  references WCAG 2.1 AA, not PDF/UA directly. However, meeting
                  PDF/UA ensures strong WCAG coverage for PDFs.{" "}
                  <strong>For Section 508:</strong> References WCAG 2.0 AA;
                  PDF/UA exceeds this.{" "}
                  <strong>Best practice:</strong> Target both WCAG 2.1 AA and
                  PDF/UA-1 (or -2 if your tools support it). They're
                  complementary, not competing.
                </p>
              </div>
            </section>

            {/* Section 11 */}
            <section id="cost-breakdown" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                11. PDF Remediation Cost Breakdown
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                PDF remediation costs vary dramatically based on document
                complexity, volume, and source quality. Here's what to expect:
              </p>

              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">
                Per-Page Cost Ranges
              </h3>
              <div className="space-y-4 mb-6">
                <div className="bg-green-50 border rounded-lg p-4">
                  <h4 className="font-bold text-green-800">
                    Simple Text Documents: $25-$75/page
                  </h4>
                  <p className="text-green-700 text-sm mt-1">
                    Letters, memos, policies, simple reports. Minimal images,
                    no complex tables. Typical: 10-page document = $250-$750.
                  </p>
                </div>
                <div className="bg-yellow-50 border rounded-lg p-4">
                  <h4 className="font-bold text-yellow-800">
                    Moderate Complexity: $75-$200/page
                  </h4>
                  <p className="text-yellow-700 text-sm mt-1">
                    Documents with tables, charts, images, multi-column layouts.
                    Budget reports, meeting presentations, brochures. Typical:
                    20-page report = $1,500-$4,000.
                  </p>
                </div>
                <div className="bg-red-50 border rounded-lg p-4">
                  <h4 className="font-bold text-red-800">
                    High Complexity: $200-$500+/page
                  </h4>
                  <p className="text-red-700 text-sm mt-1">
                    Technical documents, scientific papers, engineering drawings,
                    complex financial reports, legacy scanned documents.
                    Typical: 50-page technical manual = $10,000-$25,000.
                  </p>
                </div>
                <div className="bg-purple-50 border rounded-lg p-4">
                  <h4 className="font-bold text-purple-800">
                    Fillable Forms: $100-$300/form
                  </h4>
                  <p className="text-purple-700 text-sm mt-1">
                    Interactive PDF forms requiring field labels, tab order,
                    validation, and error handling. Simple forms on the low end;
                    complex multi-page forms with calculations on the high end.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">
                Volume Discounts
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Remediation vendors typically offer 20-40% discounts for bulk
                projects:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>
                  <strong>1-50 documents:</strong> Standard per-page rates
                </li>
                <li>
                  <strong>50-500 documents:</strong> 20-30% volume discount
                </li>
                <li>
                  <strong>500+ documents:</strong> 30-40% discount + dedicated
                  project management
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">
                Real-World Cost Examples
              </h3>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center bg-gray-50 p-3 rounded">
                  <span className="text-gray-700">
                    Small city (500 PDFs, mostly simple)
                  </span>
                  <span className="font-bold text-gray-900">$25,000-$50,000</span>
                </div>
                <div className="flex justify-between items-center bg-gray-50 p-3 rounded">
                  <span className="text-gray-700">
                    County government (2,000 PDFs, mixed complexity)
                  </span>
                  <span className="font-bold text-gray-900">$100,000-$250,000</span>
                </div>
                <div className="flex justify-between items-center bg-gray-50 p-3 rounded">
                  <span className="text-gray-700">
                    State university (10,000+ PDFs, high complexity)
                  </span>
                  <span className="font-bold text-gray-900">$500,000-$5,000,000</span>
                </div>
                <div className="flex justify-between items-center bg-gray-50 p-3 rounded">
                  <span className="text-gray-700">
                    Large state agency (50,000+ PDFs)
                  </span>
                  <span className="font-bold text-gray-900">$2,000,000-$20,000,000</span>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-green-800 mb-2">
                  💡 Cost-Saving Strategy: Triage Before Remediating
                </h3>
                <p className="text-green-700">
                  Don't remediate everything at once. Start with a{" "}
                  <strong>document audit</strong> to categorize PDFs by traffic,
                  legal requirement, and complexity. Many organizations find
                  that 20% of their PDFs account for 80% of downloads. Focus
                  remediation budget on high-impact documents first, and
                  consider whether low-traffic archival documents can be
                  converted to accessible HTML instead.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mt-6 mb-4">
                The{" "}
                <Link
                  href="/blog/irs-form-8826-disabled-access-credit-website-accessibility"
                  className="text-blue-600 hover:underline"
                >
                  IRS Disabled Access Credit (Form 8826)
                </Link>{" "}
                allows small businesses to claim up to <strong>$5,000</strong>{" "}
                annually for accessibility expenditures, including PDF
                remediation costs. The credit covers 50% of eligible expenses
                between $250 and $10,250.
              </p>
            </section>

            {/* Section 12 */}
            <section id="government-compliance" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                12. Government Agency PDF Compliance
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Government agencies face unique challenges with PDF
                accessibility — massive document libraries, limited budgets, and
                a hard compliance deadline.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">
                The Scale of the Problem
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                According to the{" "}
                <a
                  href="https://www.govtech.com/policy/are-states-ready-for-the-approaching-accessibility-deadline"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  NASCIO 2026 compliance report
                </a>
                :
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>
                  <strong>Only one state</strong> (as of July 2025) had fully
                  implemented a compliance plan
                </li>
                <li>
                  <strong>54% of state CIOs</strong> reported no dedicated
                  funding for accessibility services
                </li>
                <li>
                  <strong>34% of states</strong> lack dedicated IT accessibility
                  coordinators
                </li>
                <li>
                  Vendor procurement and contracted services create fragmented
                  governance
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">
                State Success Stories
              </h3>
              <div className="space-y-4 mb-4">
                <div className="bg-white border rounded-lg p-4 shadow-sm">
                  <h4 className="font-bold text-gray-800">
                    🟢 Colorado — Ahead of the Curve
                  </h4>
                  <p className="text-gray-700 text-sm mt-1">
                    Colorado's state-specific accessibility law required
                    compliance by July 2024 — nearly two years before the
                    federal deadline. Their rules go beyond federal requirements,
                    covering both internal and external digital products. The
                    state's "Empathy Lab" partners with the disability community
                    for real-world testing.
                  </p>
                </div>
                <div className="bg-white border rounded-lg p-4 shadow-sm">
                  <h4 className="font-bold text-gray-800">
                    🟢 Pennsylvania — Ahead of Schedule
                  </h4>
                  <p className="text-gray-700 text-sm mt-1">
                    Pennsylvania is on track to finish baseline testing by March
                    2026 — ahead of both the state's June deadline and the DOJ's
                    April deadline. The Commonwealth Office of Digital Experience
                    embeds accessibility in the software development lifecycle.
                    Chief Accessibility Officer Kris Adams: "It's just as
                    important as security."
                  </p>
                </div>
                <div className="bg-white border rounded-lg p-4 shadow-sm">
                  <h4 className="font-bold text-gray-800">
                    🟡 Texas — Federated Approach
                  </h4>
                  <p className="text-gray-700 text-sm mt-1">
                    Texas uses a federated model where each agency manages its
                    own compliance. Many agencies and universities are actively
                    working on PDF remediation and website redesigns. A new HB
                    5195 statute is in rulemaking to strengthen web
                    accessibility requirements.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">
                NASCIO's Priority Recommendations
              </h3>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
                <li>
                  <strong>Start with governance:</strong> Clarify roles and
                  secure stakeholder buy-in
                </li>
                <li>
                  <strong>Hire an accessibility coordinator:</strong> The "most
                  vital part" of enterprise compliance
                </li>
                <li>
                  <strong>Embed in procurement:</strong> Require accessibility in
                  vendor contracts
                </li>
                <li>
                  <strong>Prioritize high-impact systems:</strong> Don't try to
                  fix everything at once
                </li>
                <li>
                  <strong>Shift left:</strong> Build accessibility into design
                  and development, not just remediation
                </li>
              </ol>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-blue-800 mb-2">
                  🏛️ For Government Agencies: Start Here
                </h3>
                <p className="text-blue-700">
                  If you're a government agency facing the April 2026 deadline,
                  our{" "}
                  <Link
                    href="/blog/ada-title-ii-deadline-countdown-2026"
                    className="text-blue-600 hover:underline font-bold"
                  >
                    ADA Title II Deadline Countdown
                  </Link>{" "}
                  page provides a complete compliance roadmap. For website
                  accessibility beyond PDFs, try our{" "}
                  <Link
                    href="/"
                    className="text-blue-600 hover:underline font-bold"
                  >
                    free accessibility scanner
                  </Link>{" "}
                  to get an instant WCAG 2.1 AA assessment.
                </p>
              </div>
            </section>

            {/* Section 13 */}
            <section id="prioritization" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                13. Prioritization Framework
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                With potentially thousands of PDFs to remediate, prioritization
                is critical. Use this framework to decide what to fix first:
              </p>

              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">
                Tier 1: Immediate (Fix Within 30 Days)
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>
                  <strong>Forms required to access services</strong> —
                  applications, registrations, complaints, requests
                </li>
                <li>
                  <strong>High-traffic documents</strong> — anything with 100+
                  downloads/month
                </li>
                <li>
                  <strong>Legal/rights documents</strong> — policies, terms,
                  contracts, notices
                </li>
                <li>
                  <strong>Currently-linked from homepage or main
                  navigation</strong>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">
                Tier 2: Short-Term (Fix Within 90 Days)
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>
                  <strong>Regular publications</strong> — newsletters, reports,
                  agendas, minutes
                </li>
                <li>
                  <strong>Educational materials</strong> — course documents,
                  guides, handbooks
                </li>
                <li>
                  <strong>Financial documents</strong> — budgets, audits, annual
                  reports
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">
                Tier 3: Medium-Term (Fix Within 6 Months)
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>
                  <strong>Historical publications</strong> — older reports and
                  documents still linked
                </li>
                <li>
                  <strong>Marketing materials</strong> — brochures, flyers, fact
                  sheets
                </li>
                <li>
                  <strong>Supporting documents</strong> — appendices,
                  supplementary data
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">
                Tier 4: Ongoing / On-Request
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>
                  <strong>Deep archives</strong> — documents from 5+ years ago
                  with minimal access
                </li>
                <li>
                  <strong>Superseded documents</strong> — old versions replaced
                  by current content
                </li>
                <li>
                  <strong>Third-party content</strong> — documents from vendors
                  or partners
                </li>
              </ul>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-yellow-800 mb-2">
                  ⚠️ Don't Forget: New Documents Going Forward
                </h3>
                <p className="text-yellow-700">
                  While remediating the backlog, implement processes to ensure
                  all <em>new</em> PDFs are created accessibly from day one.
                  This is far cheaper than remediation and prevents the backlog
                  from growing. Create templates, train staff, and add
                  accessibility checks to your publication workflow.
                </p>
              </div>
            </section>

            {/* Section 14 */}
            <section id="tools-comparison" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                14. PDF Accessibility Tools Compared
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Here's how the major PDF accessibility tools compare for
                different use cases:
              </p>

              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">
                For Creating Accessible PDFs
              </h3>
              <div className="space-y-3 mb-6">
                <div className="bg-white border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <strong className="text-gray-800">
                        Microsoft Word/PowerPoint
                      </strong>
                      <p className="text-gray-600 text-sm">
                        Best for most business documents. Use "Save As PDF" with
                        accessibility tags. Run built-in checker first.
                      </p>
                    </div>
                    <span className="text-sm text-gray-500">~$7-22/mo</span>
                  </div>
                </div>
                <div className="bg-white border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <strong className="text-gray-800">Adobe InDesign</strong>
                      <p className="text-gray-600 text-sm">
                        Best for complex layouts (reports, brochures,
                        magazines). Strong tag mapping and Articles panel.
                      </p>
                    </div>
                    <span className="text-sm text-gray-500">~$23/mo</span>
                  </div>
                </div>
                <div className="bg-white border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <strong className="text-gray-800">Google Docs</strong>
                      <p className="text-gray-600 text-sm">
                        Basic tagging on export. Good for simple documents. Weak
                        on tables and complex structures. Free.
                      </p>
                    </div>
                    <span className="text-sm text-gray-500">Free</span>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">
                For Remediating Existing PDFs
              </h3>
              <div className="space-y-3 mb-6">
                <div className="bg-white border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <strong className="text-gray-800">
                        Adobe Acrobat Pro
                      </strong>
                      <p className="text-gray-600 text-sm">
                        The standard remediation tool. Tag editing, reading
                        order, form fields, OCR. Essential for any remediation
                        work.
                      </p>
                    </div>
                    <span className="text-sm text-gray-500">~$23/mo</span>
                  </div>
                </div>
                <div className="bg-white border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <strong className="text-gray-800">
                        CommonLook PDF GlobalAccess
                      </strong>
                      <p className="text-gray-600 text-sm">
                        Enterprise remediation with guided workflows. Faster
                        than manual Acrobat work for high-volume projects.
                      </p>
                    </div>
                    <span className="text-sm text-gray-500">
                      Enterprise pricing
                    </span>
                  </div>
                </div>
                <div className="bg-white border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <strong className="text-gray-800">
                        Equidox by Onix
                      </strong>
                      <p className="text-gray-600 text-sm">
                        AI-assisted remediation platform. Smart tag detection
                        speeds up remediation of complex documents.
                      </p>
                    </div>
                    <span className="text-sm text-gray-500">
                      Enterprise pricing
                    </span>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">
                For Testing/Validating PDFs
              </h3>
              <div className="space-y-3 mb-6">
                <div className="bg-white border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <strong className="text-gray-800">PAC 2026</strong>
                      <p className="text-gray-600 text-sm">
                        Most comprehensive free checker. PDF/UA-1, PDF/UA-2, and
                        WCAG. AI-enhanced in 2026 version. Windows only.
                      </p>
                    </div>
                    <span className="text-sm text-green-600 font-bold">
                      Free
                    </span>
                  </div>
                </div>
                <div className="bg-white border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <strong className="text-gray-800">
                        Acrobat Accessibility Checker
                      </strong>
                      <p className="text-gray-600 text-sm">
                        Good for WCAG checking during remediation. Less thorough
                        than PAC for PDF/UA but integrated into the workflow.
                      </p>
                    </div>
                    <span className="text-sm text-gray-500">
                      Included with Acrobat Pro
                    </span>
                  </div>
                </div>
                <div className="bg-white border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <strong className="text-gray-800">NVDA</strong>
                      <p className="text-gray-600 text-sm">
                        Free screen reader for real-world testing. Essential for
                        verifying that automated fixes actually work. Windows.
                      </p>
                    </div>
                    <span className="text-sm text-green-600 font-bold">
                      Free
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 15 */}
            <section id="checklist" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                15. Complete PDF Accessibility Checklist
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Use this checklist for every PDF you create or remediate:
              </p>

              <div className="bg-white border-2 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  📋 Document Properties
                </h3>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>☐ Document title set (not filename)</li>
                  <li>☐ Document language specified</li>
                  <li>☐ Initial view set to show Document Title</li>
                  <li>☐ Tagged PDF: Yes</li>
                  <li>☐ Security settings allow assistive technology access</li>
                </ul>

                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  📋 Structure and Tags
                </h3>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>☐ All content is tagged (no untagged text)</li>
                  <li>☐ Heading hierarchy is correct (H1 → H2 → H3, no skips)</li>
                  <li>☐ Lists use proper L/LI/Lbl/LBody tags</li>
                  <li>☐ Decorative elements marked as Artifacts</li>
                  <li>☐ Reading order matches visual layout</li>
                  <li>☐ Bookmarks present for documents 20+ pages</li>
                </ul>

                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  📋 Images and Graphics
                </h3>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>☐ All meaningful images have alt text</li>
                  <li>☐ Complex images have extended descriptions</li>
                  <li>☐ Decorative images are artifacts (hidden from AT)</li>
                  <li>☐ Charts/graphs have text descriptions of key data</li>
                </ul>

                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  📋 Tables
                </h3>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>☐ Header rows tagged as TH (not TD)</li>
                  <li>☐ Scope attributes set on header cells</li>
                  <li>☐ Complex tables have ID/Headers associations</li>
                  <li>☐ No layout tables (use tags appropriately)</li>
                  <li>☐ Tables make sense when read linearly</li>
                </ul>

                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  📋 Text and Typography
                </h3>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>☐ All text is real text (not images of text)</li>
                  <li>
                    ☐ Color contrast meets minimums (4.5:1 normal, 3:1 large)
                  </li>
                  <li>☐ Information not conveyed by color alone</li>
                  <li>☐ Fonts are embedded and Unicode-mapped</li>
                  <li>☐ Content reflows properly at zoom</li>
                </ul>

                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  📋 Links and Navigation
                </h3>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>☐ All links have descriptive text</li>
                  <li>☐ Links are tagged as Link elements</li>
                  <li>☐ Tab order follows document structure</li>
                  <li>
                    ☐ Table of Contents is linked (for long documents)
                  </li>
                </ul>

                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  📋 Forms (if applicable)
                </h3>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>☐ All fields have descriptive labels/tooltips</li>
                  <li>☐ Tab order is logical</li>
                  <li>☐ Required fields are identified</li>
                  <li>☐ Error messages are associated with fields</li>
                  <li>☐ Forms are completable via keyboard only</li>
                </ul>

                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  📋 Testing
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>☐ Passes PAC 2026 checker</li>
                  <li>☐ Passes Acrobat accessibility checker</li>
                  <li>☐ Tested with NVDA or JAWS screen reader</li>
                  <li>☐ Keyboard navigation verified</li>
                  <li>☐ Reflow/zoom tested</li>
                </ul>
              </div>
            </section>

            {/* Section 16 - FAQ */}
            <section id="faq" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                16. Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <div className="bg-white border rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    What makes a PDF accessible?
                  </h3>
                  <p className="text-gray-700">
                    An accessible PDF has a logical tag structure (headings,
                    paragraphs, lists, tables), alternative text for images, a
                    defined reading order, bookmarks for navigation, a specified
                    document language, and proper color contrast. It should be
                    readable by screen readers like JAWS and NVDA, navigable via
                    keyboard, and pass both WCAG 2.1 AA and PDF/UA-1 standards.
                  </p>
                </div>

                <div className="bg-white border rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    How much does PDF remediation cost?
                  </h3>
                  <p className="text-gray-700">
                    PDF remediation typically costs $25-$75 per page for simple
                    text documents, $75-$200 per page for documents with tables
                    and charts, and $200-$500+ per page for complex scientific
                    or technical documents. Bulk remediation services offer
                    volume discounts. Ohio State University budgeted $20 million
                    for remediation across its entire document library, while
                    smaller organizations typically spend $5,000-$50,000.
                  </p>
                </div>

                <div className="bg-white border rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    Is PDF accessibility legally required?
                  </h3>
                  <p className="text-gray-700">
                    Yes. Under the ADA Title II final rule (effective April 24,
                    2026), all electronic documents published by state and local
                    government entities must meet WCAG 2.1 Level AA. Section 508
                    requires federal agencies to make PDFs accessible. For
                    businesses, courts have increasingly held that digital
                    content including PDFs must be accessible under ADA Title
                    III.
                  </p>
                </div>

                <div className="bg-white border rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    What is the difference between PDF/UA and WCAG?
                  </h3>
                  <p className="text-gray-700">
                    WCAG provides general accessibility standards for all
                    digital content. PDF/UA (ISO 14289) is a technical standard
                    specifically for PDF documents that defines precise
                    structural requirements. A PDF can be WCAG-compliant but not
                    PDF/UA-compliant, or vice versa. Best practice is to meet
                    both standards.
                  </p>
                </div>

                <div className="bg-white border rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    Can I make a scanned PDF accessible?
                  </h3>
                  <p className="text-gray-700">
                    Yes, but it requires OCR first to convert image-based text
                    into selectable text, then full tagging and remediation. The
                    quality depends on scan resolution (300+ DPI recommended),
                    original print quality, and layout complexity. If the
                    original source document exists, re-exporting from source is
                    almost always faster and cheaper.
                  </p>
                </div>

                <div className="bg-white border rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    What tools can check PDF accessibility?
                  </h3>
                  <p className="text-gray-700">
                    Key tools include PAC 2026 (free, gold standard for PDF/UA
                    checking), Adobe Acrobat Pro (built-in checker and
                    remediation), CommonLook PDF Validator (enterprise), axe for
                    PDF by Deque, and NVDA/JAWS screen readers for manual
                    testing.
                  </p>
                </div>

                <div className="bg-white border rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    How long does it take to remediate a PDF?
                  </h3>
                  <p className="text-gray-700">
                    A simple 10-page text document takes 1-2 hours. A 20-page
                    document with tables, charts, and images takes 4-8 hours.
                    Complex 100+ page technical documents can take 20-40+ hours.
                    Government agencies with thousands of PDFs often need 6-18
                    months for full remediation programs.
                  </p>
                </div>

                <div className="bg-white border rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    Do I need to make every old PDF accessible?
                  </h3>
                  <p className="text-gray-700">
                    Under the ADA Title II rule, government entities must make
                    web content accessible but may claim an "undue burden"
                    exception for archival content. The practical approach is to
                    prioritize currently published and linked PDFs, high-traffic
                    documents, and forms required for services. Archived content
                    can be lower priority but must be made accessible upon
                    request.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white rounded-2xl p-8 md:p-12 mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Start with Your Website, Then Tackle PDFs
              </h2>
              <p className="text-blue-100 text-lg mb-6">
                PDF accessibility is critical — but don't forget the website
                hosting those PDFs. Run a free scan to identify your website's
                WCAG 2.1 AA issues, then build a comprehensive remediation plan
                that covers both your site and your documents.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/"
                  className="bg-white text-blue-900 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  🔍 Free Website Accessibility Scan
                </Link>
                <Link
                  href="/blog/ada-compliance-audit-guide-2026"
                  className="border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
                >
                  📋 Full Audit Guide →
                </Link>
              </div>
            </section>

            {/* Related Content */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Related Guides
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/blog/ada-title-ii-deadline-countdown-2026"
                  className="block bg-white border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-bold text-blue-600">
                    ADA Title II Deadline Countdown →
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Complete compliance roadmap for the April 24, 2026 deadline.
                  </p>
                </Link>
                <Link
                  href="/blog/section-508-compliance-guide"
                  className="block bg-white border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-bold text-blue-600">
                    Section 508 Compliance Guide →
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Federal agency requirements including PDF accessibility.
                  </p>
                </Link>
                <Link
                  href="/blog/vpat-accessibility-conformance-report-guide-2026"
                  className="block bg-white border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-bold text-blue-600">
                    VPAT Guide 2026 →
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    How to create Accessibility Conformance Reports for
                    procurement.
                  </p>
                </Link>
                <Link
                  href="/blog/ada-compliance-audit-guide-2026"
                  className="block bg-white border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-bold text-blue-600">
                    ADA Compliance Audit Guide →
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Step-by-step audit methodology covering websites and
                    documents.
                  </p>
                </Link>
                <Link
                  href="/blog/best-accessibility-testing-tools"
                  className="block bg-white border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-bold text-blue-600">
                    Best Accessibility Testing Tools 2026 →
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    12 tools compared for web and document accessibility
                    testing.
                  </p>
                </Link>
                <Link
                  href="/blog/irs-form-8826-disabled-access-credit-website-accessibility"
                  className="block bg-white border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-bold text-blue-600">
                    IRS Form 8826: $5,000 Accessibility Tax Credit →
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    How to offset PDF remediation costs with the Disabled Access
                    Credit.
                  </p>
                </Link>
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
