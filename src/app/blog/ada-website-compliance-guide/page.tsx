/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title:
    "ADA Website Compliance: The Definitive Guide for 2026 | RatedWithAI",
  description:
    "The complete guide to ADA website compliance in 2026. ADA requirements, WCAG 2.1 AA standards, compliance checklist, lawsuit risks, testing methods, costs, and industry-specific guidance. Free ADA compliance scanner included.",
  openGraph: {
    title: "ADA Website Compliance: The Definitive 2026 Guide",
    description:
      "Everything you need to make your website ADA compliant. Requirements, checklist, lawsuit statistics, testing tools, and step-by-step guidance for every industry.",
    type: "article",
    publishedTime: "2026-02-23T00:00:00.000Z",
    authors: ["RatedWithAI Team"],
  },
  keywords: [
    "ada website compliance",
    "ada compliant website",
    "ada website requirements",
    "ada website standards",
    "website ada compliance requirements",
    "ada compliance checklist",
    "ada website accessibility",
    "ada web compliance",
    "ada compliant website checklist",
    "website accessibility ada",
  ],
  alternates: {
    canonical: "https://ratedwithai.com/blog/ada-website-compliance-guide",
  },
};

export default function AdaWebsiteComplianceGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "ADA Website Compliance: The Definitive Guide for 2026",
    description:
      "Comprehensive guide to ADA website compliance covering legal requirements, WCAG 2.1 AA standards, compliance checklists, lawsuit risks, testing methods, costs, and industry-specific guidance.",
    datePublished: "2026-02-23T00:00:00.000Z",
    dateModified: "2026-02-23T00:00:00.000Z",
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
        name: "Is ADA website compliance legally required?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Under ADA Title III, any business that qualifies as a 'place of public accommodation' must make its website accessible. Courts have consistently ruled that websites are extensions of physical businesses. Under ADA Title II, all state and local government websites must comply with WCAG 2.1 AA by April 24, 2026 (populations 50,000+) or April 26, 2027 (smaller entities).",
        },
      },
      {
        "@type": "Question",
        name: "What standard does ADA require for websites?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The DOJ's 2024 final rule explicitly adopts WCAG 2.1 Level AA as the technical standard for ADA Title II compliance. While Title III doesn't specify a technical standard, courts and the DOJ consistently reference WCAG 2.1 AA as the benchmark for private sector websites as well.",
        },
      },
      {
        "@type": "Question",
        name: "How much does ADA website compliance cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Costs vary significantly based on website size and complexity. A small business website (10-50 pages) typically costs $2,000-$10,000 for initial remediation. Mid-size websites (50-500 pages) run $10,000-$50,000. Enterprise sites can exceed $100,000. Ongoing monitoring tools like RatedWithAI start at $29/month. Small businesses may offset costs with the Disabled Access Credit (IRS Form 8826) — up to $5,000/year.",
        },
      },
      {
        "@type": "Question",
        name: "Do accessibility overlays make my website ADA compliant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Accessibility overlays do not achieve ADA compliance. In 2024, an overlay provider was fined $1 million by the FTC for deceptive compliance claims. Over 30% of ADA web accessibility lawsuits now involve sites using overlay widgets. Courts have ruled that overlays do not constitute WCAG conformance. The DOJ's rule requires actual conformance with WCAG 2.1 AA — not the use of any particular tool.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if my website isn't ADA compliant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Non-compliance can result in: demand letters from plaintiffs' attorneys (most common), federal lawsuits with settlements averaging $75,000+, DOJ enforcement actions for government entities, consent decrees requiring ongoing remediation and monitoring, reputational damage, and loss of customers who can't use your site. Over 5,000 ADA web accessibility lawsuits were filed in 2025 alone.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get sued for ADA website non-compliance even if I have a physical location?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — in fact, having a physical location makes you more vulnerable, not less. Federal courts have ruled that a website connected to a physical 'place of public accommodation' falls under ADA Title III. Businesses like restaurants, hotels, retail stores, and healthcare providers with non-compliant websites are common lawsuit targets.",
        },
      },
      {
        "@type": "Question",
        name: "How do I test my website for ADA compliance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use a combination of automated and manual testing. Start with an automated scanner like RatedWithAI's free accessibility checker to identify WCAG 2.1 AA violations. Then supplement with manual testing: keyboard navigation (Tab through the entire site), screen reader testing (NVDA, JAWS, or VoiceOver), color contrast verification, and testing with real users who have disabilities. Automated tools catch about 30-40% of issues; manual testing catches the rest.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a deadline for ADA website compliance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For government websites (ADA Title II): Yes. State and local governments serving 50,000+ people must comply with WCAG 2.1 AA by April 24, 2026. Smaller entities have until April 26, 2027. For private businesses (ADA Title III): There is no specific deadline — compliance has been required since the ADA was enacted in 1990. The legal obligation exists now, and lawsuits can be filed at any time.",
        },
      },
      {
        "@type": "Question",
        name: "Does ADA compliance apply to mobile apps?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The DOJ's 2024 final rule explicitly includes mobile applications alongside websites for Title II entities. For Title III (private businesses), courts have applied the same accessibility requirements to mobile apps. If your organization has a mobile app, it must meet the same WCAG 2.1 AA standards as your website.",
        },
      },
      {
        "@type": "Question",
        name: "What's the difference between ADA compliance and WCAG compliance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ADA is the law — the Americans with Disabilities Act prohibits discrimination against people with disabilities. WCAG (Web Content Accessibility Guidelines) is the technical standard that defines how to make web content accessible. ADA compliance for websites is achieved by meeting WCAG 2.1 Level AA standards. Think of ADA as the 'what' (legal requirement) and WCAG as the 'how' (technical specification).",
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
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <div className="relative overflow-hidden">
          <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-sky-500/30 via-blue-500/20 to-indigo-500/30 blur-3xl" />
          <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-gradient-to-tr from-sky-500/20 via-blue-500/10 to-indigo-500/20 blur-3xl" />

          <Header />

          <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-14 pt-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-sm text-sky-400">
              DEFINITIVE GUIDE
            </div>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              ADA Website Compliance: The Complete Guide for 2026
            </h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              Everything you need to know about making your website ADA compliant — from legal
              requirements and technical standards to compliance checklists, lawsuit risks, testing
              methods, and realistic cost estimates. Whether you're a small business, enterprise, or
              government entity, this guide covers it all.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
              <time dateTime="2026-02-23">February 23, 2026</time>
              <span>·</span>
              <span>22 min read</span>
            </div>

            {/* Quick stats box */}
            <div className="mt-10 rounded-xl border border-sky-500/30 bg-sky-500/5 p-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-sky-400">96.3%</div>
                  <div className="text-sm text-slate-400 mt-1">Sites With Violations</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-red-400">5,000+</div>
                  <div className="text-sm text-slate-400 mt-1">Lawsuits in 2025</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-amber-400">$75K+</div>
                  <div className="text-sm text-slate-400 mt-1">Avg Settlement</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-400">50</div>
                  <div className="text-sm text-slate-400 mt-1">WCAG 2.1 AA Criteria</div>
                </div>
              </div>
            </div>

            {/* Table of contents */}
            <div className="mt-10 rounded-xl border border-slate-700 bg-slate-800/50 p-6">
              <h2 className="text-lg font-bold text-white mb-4">In This Guide</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                {[
                  "What ADA Website Compliance Means in 2026",
                  "Who Must Comply (Title I, II, and III)",
                  "The April 24, 2026 ADA Title II Deadline",
                  "ADA Website Requirements: WCAG 2.1 AA",
                  "Step-by-Step ADA Compliance Checklist",
                  "Common ADA Violations on Websites",
                  "ADA Lawsuit Risk: The Numbers",
                  "Overlay Solutions: Why They Don't Work",
                  "How to Test Your Website for ADA Compliance",
                  "Cost of ADA Compliance",
                  "ADA Compliance by Industry",
                  "State-Specific ADA Requirements",
                  "Frequently Asked Questions",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-300">
                    <span className="text-sky-400">→</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 prose prose-lg prose-invert max-w-none">
              {/* Section 1 */}
              <h2 className="text-2xl font-bold text-white">
                What ADA Website Compliance Means in 2026
              </h2>
              <p className="text-slate-300">
                ADA website compliance means making your website accessible to people with
                disabilities in accordance with the{" "}
                <strong className="text-white">
                  Americans with Disabilities Act (ADA)
                </strong>
                . In practice, this means your website must conform to{" "}
                <strong className="text-white">
                  WCAG 2.1 Level AA
                </strong>{" "}
                — the Web Content Accessibility Guidelines published by the World Wide Web
                Consortium (W3C).
              </p>
              <p className="text-slate-300">
                The ADA was signed into law in 1990 to prohibit discrimination against people
                with disabilities. While the original text focused on physical spaces — ramps,
                elevators, braille signage — courts and the Department of Justice (DOJ) have
                consistently extended ADA protections to the digital world. Your website is now
                treated as an extension of your business, just like your front door.
              </p>
              <p className="text-slate-300">
                In 2024, the DOJ made this explicit by publishing a{" "}
                <strong className="text-white">final rule under 28 CFR Part 35</strong> that
                specifically requires state and local government websites to meet WCAG 2.1 AA.
                For private businesses under Title III, courts have adopted WCAG 2.1 AA as the
                de facto standard in virtually every accessibility lawsuit.
              </p>
              <p className="text-slate-300">
                The bottom line: if your website doesn't meet WCAG 2.1 Level AA standards in
                2026, you're not ADA compliant — and you're exposed to legal action.
              </p>

              {/* Section 2 */}
              <h2 className="text-2xl font-bold text-white mt-12">
                Who Must Comply: ADA Title I, II, and III Breakdown
              </h2>
              <p className="text-slate-300">
                The ADA has three titles relevant to organizations, and each applies
                differently to website accessibility:
              </p>

              <div className="not-prose space-y-4 mt-4 mb-8">
                <div className="rounded-lg border border-blue-500/30 bg-blue-500/5 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-blue-500/20 text-blue-400">
                      Title I
                    </span>
                    <h3 className="font-bold text-white">Employment (15+ Employees)</h3>
                  </div>
                  <p className="text-slate-300 text-sm">
                    Requires employers with 15 or more employees to provide reasonable
                    accommodations, including accessible job application portals, employee
                    intranets, and HR systems. If a candidate or employee with a disability
                    can't use your employment website, you're violating Title I. This covers
                    career pages, applicant tracking systems, onboarding platforms, and
                    benefits portals.
                  </p>
                </div>

                <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400">
                      Title II
                    </span>
                    <h3 className="font-bold text-white">
                      State &amp; Local Government
                    </h3>
                  </div>
                  <p className="text-slate-300 text-sm">
                    Requires all state and local government entities to make their programs,
                    services, and activities accessible — including websites and mobile apps.
                    The DOJ's April 2024 final rule sets{" "}
                    <strong className="text-white">WCAG 2.1 AA</strong> as the explicit
                    standard with hard deadlines:{" "}
                    <strong className="text-white">April 24, 2026</strong> for entities
                    serving 50,000+ people and{" "}
                    <strong className="text-white">April 26, 2027</strong> for smaller
                    entities. This covers city websites, school districts, public libraries,
                    courts, public transit, DMVs, and every other government digital service.
                  </p>
                </div>

                <div className="rounded-lg border border-purple-500/30 bg-purple-500/5 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-purple-500/20 text-purple-400">
                      Title III
                    </span>
                    <h3 className="font-bold text-white">
                      Private Businesses (Places of Public Accommodation)
                    </h3>
                  </div>
                  <p className="text-slate-300 text-sm">
                    Applies to any private entity that qualifies as a "place of public
                    accommodation" — which includes virtually every business that serves the
                    public. Restaurants, retail stores, hotels, healthcare providers, banks,
                    insurance companies, entertainment venues, professional services, and
                    e-commerce businesses all fall under Title III. Federal courts in nearly
                    every circuit have ruled that websites are covered. There is{" "}
                    <strong className="text-white">no compliance deadline</strong> — the
                    obligation exists now and has since the ADA was enacted.
                  </p>
                </div>
              </div>

              <div className="not-prose rounded-xl border border-amber-500/30 bg-amber-500/5 p-6 mt-4 mb-8">
                <h3 className="font-bold text-amber-400 text-lg mb-2">
                  ⚠️ Common Misconception: "My website-only business isn't covered"
                </h3>
                <p className="text-slate-300 text-sm">
                  Some businesses believe they're exempt because they operate exclusively
                  online. While courts are split on this issue (the 9th Circuit has been more
                  restrictive), the clear trend is toward broader coverage. The 1st, 2nd, 7th,
                  and 11th Circuits have all ruled that websites need not be connected to a
                  physical location to be covered by the ADA. If you serve customers in any
                  capacity, assume you need to be compliant.
                </p>
              </div>

              {/* Section 3 */}
              <h2 className="text-2xl font-bold text-white mt-12">
                The April 24, 2026 ADA Title II Deadline
              </h2>
              <p className="text-slate-300">
                The most immediate and concrete deadline in ADA website compliance history is{" "}
                <strong className="text-red-400">April 24, 2026</strong>. On this date, the
                DOJ's final rule (28 CFR Part 35) takes effect for state and local government
                entities serving populations of 50,000 or more.
              </p>
              <p className="text-slate-300">
                This rule is unprecedented in its specificity. For the first time, the federal
                government has:
              </p>
              <ul className="text-slate-300 space-y-2">
                <li>
                  <strong className="text-white">Named a specific technical standard</strong>{" "}
                  — WCAG 2.1 Level AA (not a vague "accessibility" requirement)
                </li>
                <li>
                  <strong className="text-white">Set a hard deadline</strong> — not a
                  suggestion, not a guideline — a legally enforceable date
                </li>
                <li>
                  <strong className="text-white">
                    Included websites AND mobile apps
                  </strong>{" "}
                  — both are explicitly covered by the rule
                </li>
                <li>
                  <strong className="text-white">
                    Defined limited exceptions
                  </strong>{" "}
                  — archived content, pre-existing conventional documents, and third-party
                  content with specific conditions
                </li>
              </ul>
              <p className="text-slate-300">
                Government entities that miss this deadline face DOJ enforcement actions,
                private lawsuits, consent decrees, and potential loss of federal funding. Legal
                experts expect a significant wave of lawsuits targeting non-compliant
                government websites in the months following the deadline.
              </p>
              <div className="not-prose mt-4 mb-8">
                <Link
                  href="/blog/ada-title-ii-deadline-countdown-2026"
                  className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 font-semibold transition-colors"
                >
                  → Read our full ADA Title II Deadline Countdown &amp; Compliance Guide
                </Link>
              </div>

              {/* Section 4 */}
              <h2 className="text-2xl font-bold text-white mt-12">
                ADA Website Requirements: The WCAG 2.1 AA Technical Standard
              </h2>
              <p className="text-slate-300">
                WCAG 2.1 Level AA is the technical standard that defines what an ADA-compliant
                website looks like. It includes{" "}
                <strong className="text-white">50 success criteria</strong> organized under
                four principles known as{" "}
                <strong className="text-white">POUR</strong>:
              </p>

              <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 mb-8">
                {[
                  {
                    letter: "P",
                    name: "Perceivable",
                    desc: "Information and user interface components must be presentable in ways users can perceive. This covers alt text for images, captions for videos, sufficient color contrast, and text alternatives for non-text content.",
                    color: "sky",
                  },
                  {
                    letter: "O",
                    name: "Operable",
                    desc: "User interface components and navigation must be operable by all users. This means full keyboard accessibility, sufficient time limits, no content that causes seizures, and clear navigation mechanisms.",
                    color: "emerald",
                  },
                  {
                    letter: "U",
                    name: "Understandable",
                    desc: "Information and the operation of the user interface must be understandable. Pages must declare their language, forms must have clear labels, and error messages must explain what went wrong and how to fix it.",
                    color: "amber",
                  },
                  {
                    letter: "R",
                    name: "Robust",
                    desc: "Content must be robust enough to be interpreted by a wide variety of user agents, including assistive technologies. This means valid HTML, proper ARIA attributes, and correct name/role/value for all components.",
                    color: "purple",
                  },
                ].map((p) => (
                  <div
                    key={p.letter}
                    className={`rounded-lg border border-${p.color}-500/30 bg-${p.color}-500/5 p-5`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`text-2xl font-bold text-${p.color}-400`}
                      >
                        {p.letter}
                      </span>
                      <h3 className="font-bold text-white">{p.name}</h3>
                    </div>
                    <p className="text-sm text-slate-300">{p.desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-slate-300">
                Among the 50 criteria, the ones most frequently violated — and most likely to
                trigger lawsuits — include missing alt text (WCAG 1.1.1), low color contrast
                (1.4.3), empty links (2.4.4), missing form labels (4.1.2), and missing
                document language (3.1.1). The{" "}
                <Link
                  href="/blog/top-10-wcag-failures"
                  className="text-sky-400 hover:text-sky-300"
                >
                  top 10 WCAG failures
                </Link>{" "}
                account for the vast majority of violations found across the web.
              </p>

              <p className="text-slate-300">
                For a detailed comparison of WCAG versions, see our guide on{" "}
                <Link
                  href="/blog/wcag-2-1-vs-2-2"
                  className="text-sky-400 hover:text-sky-300"
                >
                  WCAG 2.1 vs 2.2: What Changed
                </Link>
                . You can also explore every individual criterion in our{" "}
                <Link href="/wcag" className="text-sky-400 hover:text-sky-300">
                  WCAG criteria reference
                </Link>
                .
              </p>

              {/* Section 5 */}
              <h2 className="text-2xl font-bold text-white mt-12">
                Step-by-Step ADA Website Compliance Checklist
              </h2>
              <p className="text-slate-300">
                Use this 15-point checklist to systematically evaluate and fix your website's
                ADA compliance. Each item maps to specific WCAG 2.1 AA success criteria:
              </p>

              <div className="not-prose space-y-3 mt-4 mb-8">
                {[
                  {
                    num: 1,
                    title: "Add Alt Text to All Meaningful Images",
                    wcag: "1.1.1",
                    desc: "Every image that conveys information needs descriptive alt text. Decorative images should use alt=\"\" to be ignored by screen readers. This is the single most common violation — affecting 58.4% of all websites.",
                  },
                  {
                    num: 2,
                    title: "Ensure Sufficient Color Contrast",
                    wcag: "1.4.3",
                    desc: "Normal text needs a contrast ratio of at least 4.5:1 against its background. Large text (18px bold or 24px regular) needs 3:1. This violation affects 81% of home pages — check every text element, including placeholders and link text.",
                  },
                  {
                    num: 3,
                    title: "Make All Functionality Keyboard Accessible",
                    wcag: "2.1.1",
                    desc: "Every interactive element — links, buttons, forms, menus, modals, sliders — must be operable with keyboard alone (Tab, Enter, Space, Arrow keys). Focus must never get trapped in an element. Test by putting away your mouse.",
                  },
                  {
                    num: 4,
                    title: "Add Labels to All Form Inputs",
                    wcag: "4.1.2, 1.3.1",
                    desc: "Every form field needs a programmatically associated <label> element. Placeholder text alone is not sufficient — it disappears when the user types and is not reliably read by screen readers.",
                  },
                  {
                    num: 5,
                    title: "Use Proper Heading Hierarchy",
                    wcag: "1.3.1, 2.4.6",
                    desc: "Use one <h1> per page, followed by <h2>, <h3>, etc. in logical order. Don't skip levels (e.g., h1 → h3). Screen reader users navigate by headings — a broken hierarchy makes your content incomprehensible.",
                  },
                  {
                    num: 6,
                    title: "Write Descriptive Link Text",
                    wcag: "2.4.4",
                    desc: 'Replace vague links like "click here", "read more", or "learn more" with descriptive text that makes sense out of context: "Download the 2026 accessibility report" or "View pricing plans".',
                  },
                  {
                    num: 7,
                    title: "Add Captions to All Video Content",
                    wcag: "1.2.2, 1.2.4",
                    desc: "All pre-recorded video with audio must have synchronized captions. Live video should have real-time captions. Provide audio descriptions for video content where visual information isn't described in the audio track.",
                  },
                  {
                    num: 8,
                    title: "Set the Page Language",
                    wcag: "3.1.1",
                    desc: 'Add lang="en" (or appropriate language code) to the <html> element. This tells screen readers which language to use for pronunciation. 17.1% of all websites fail this simple check.',
                  },
                  {
                    num: 9,
                    title: "Ensure Visible Focus Indicators",
                    wcag: "2.4.7",
                    desc: "When users navigate with keyboard, the currently focused element must have a visible outline or highlight. Never use CSS like outline: none without providing an alternative focus style.",
                  },
                  {
                    num: 10,
                    title: "Make Error Messages Clear and Specific",
                    wcag: "3.3.1, 3.3.3",
                    desc: 'When a form validation error occurs, identify the specific field and describe the error in text — not just with color. "Please enter a valid email address" is good. A red border alone is not.',
                  },
                  {
                    num: 11,
                    title: "Ensure Tables Have Headers",
                    wcag: "1.3.1",
                    desc: "Data tables need <th> elements with scope attributes to associate headers with cells. Don't use tables for layout — use CSS grid or flexbox instead.",
                  },
                  {
                    num: 12,
                    title: "Add ARIA Landmarks for Page Regions",
                    wcag: "1.3.1, 4.1.2",
                    desc: "Use semantic HTML elements (<header>, <nav>, <main>, <footer>) or ARIA landmark roles to define page regions. This allows screen reader users to quickly navigate between sections of your page.",
                  },
                  {
                    num: 13,
                    title: "Ensure Content Reflows at 320px Width",
                    wcag: "1.4.10",
                    desc: "At 400% zoom (equivalent to 320px CSS viewport), content must reflow into a single column without horizontal scrolling. No information or functionality should be lost when users zoom in.",
                  },
                  {
                    num: 14,
                    title: "Provide Skip Navigation Links",
                    wcag: "2.4.1",
                    desc: 'Add a "Skip to main content" link at the top of every page. It can be visually hidden until focused. This allows keyboard users to bypass repetitive navigation menus.',
                  },
                  {
                    num: 15,
                    title: "Make PDFs and Documents Accessible",
                    wcag: "Multiple",
                    desc: "Scanned images of text in PDFs are completely inaccessible. Ensure all PDFs have proper tagging, reading order, alt text, and bookmarks — or convert them to accessible HTML pages.",
                  },
                ].map((item) => (
                  <div
                    key={item.num}
                    className="rounded-lg border border-slate-700 bg-slate-800/50 p-4"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center text-sm font-bold">
                        {item.num}
                      </span>
                      <div>
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="font-semibold text-white">
                            {item.title}
                          </h3>
                          <span className="text-xs font-mono text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded">
                            WCAG {item.wcag}
                          </span>
                        </div>
                        <p className="text-sm text-slate-400 mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-slate-300">
                For an expanded checklist with testing instructions, see our{" "}
                <Link
                  href="/blog/ada-compliance-checklist-2026"
                  className="text-sky-400 hover:text-sky-300"
                >
                  ADA Compliance Checklist for 2026
                </Link>{" "}
                and{" "}
                <Link
                  href="/blog/accessibility-audit-checklist-2026"
                  className="text-sky-400 hover:text-sky-300"
                >
                  Accessibility Audit Checklist
                </Link>
                .
              </p>

              {/* Section 6 */}
              <h2 className="text-2xl font-bold text-white mt-12">
                Common ADA Violations on Websites
              </h2>
              <p className="text-slate-300">
                According to WebAIM's 2026 analysis of the top one million home pages, the
                average page has <strong className="text-white">56.8 accessibility errors</strong>.
                These violations cluster around a handful of issues:
              </p>

              <div className="not-prose mt-4 mb-8">
                <div className="rounded-xl border border-slate-700 overflow-hidden">
                  <div className="grid grid-cols-3 bg-slate-800 p-4 font-semibold text-sm text-slate-300">
                    <div>Violation</div>
                    <div>% of Sites Affected</div>
                    <div>WCAG Criterion</div>
                  </div>
                  {[
                    {
                      violation: "Low contrast text",
                      pct: "81.0%",
                      wcag: "1.4.3",
                    },
                    {
                      violation: "Missing alt text",
                      pct: "58.4%",
                      wcag: "1.1.1",
                    },
                    {
                      violation: "Missing form labels",
                      pct: "46.0%",
                      wcag: "4.1.2",
                    },
                    {
                      violation: "Vague link text",
                      pct: "45.6%",
                      wcag: "2.4.4",
                    },
                    {
                      violation: "Empty buttons",
                      pct: "28.7%",
                      wcag: "4.1.2",
                    },
                    {
                      violation: "Missing heading structure",
                      pct: "25.0%",
                      wcag: "1.3.1",
                    },
                    {
                      violation: "Missing document language",
                      pct: "17.1%",
                      wcag: "3.1.1",
                    },
                    {
                      violation: "Keyboard inaccessible elements",
                      pct: "20.0%",
                      wcag: "2.1.1",
                    },
                  ].map((row, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-3 p-4 text-sm border-t border-slate-700 bg-slate-800/50"
                    >
                      <div className="text-slate-300">{row.violation}</div>
                      <div className="text-red-400 font-semibold">{row.pct}</div>
                      <div className="font-mono text-sky-400">{row.wcag}</div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-slate-300">
                The good news: these issues are largely fixable. Most violations are caused by
                missing or incorrect HTML attributes, not fundamental architectural problems.
                A developer can fix alt text, color contrast, and form labels in days — not
                months.
              </p>
              <p className="text-slate-300">
                For step-by-step fix guidance, see our{" "}
                <Link
                  href="/blog/how-to-fix-common-wcag-failures"
                  className="text-sky-400 hover:text-sky-300"
                >
                  How to Fix Common WCAG Failures
                </Link>{" "}
                guide, which includes code examples for every major violation.
              </p>

              {/* Section 7 */}
              <h2 className="text-2xl font-bold text-white mt-12">
                ADA Lawsuit Risk: The Numbers
              </h2>
              <p className="text-slate-300">
                ADA web accessibility lawsuits have grown from a niche legal area into an
                industry. Understanding the landscape helps you assess your risk:
              </p>

              <div className="not-prose rounded-xl border border-slate-700 bg-slate-800/50 p-6 mt-4 mb-8">
                <h3 className="font-bold text-white text-lg mb-4">
                  2025 ADA Web Lawsuit Statistics
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      stat: "5,000+",
                      desc: "ADA web accessibility lawsuits filed in federal and state courts in 2025",
                    },
                    {
                      stat: "400%",
                      desc: "increase in digital accessibility lawsuits since 2018",
                    },
                    {
                      stat: "$75,000+",
                      desc: "average settlement cost for ADA web accessibility claims",
                    },
                    {
                      stat: "67%",
                      desc: "of lawsuits target websites with no accessibility effort whatsoever",
                    },
                    {
                      stat: "30%",
                      desc: "of sued websites were using accessibility overlay widgets",
                    },
                    {
                      stat: "E-commerce",
                      desc: "is the #1 sued industry, followed by food service, banking, and healthcare",
                    },
                    {
                      stat: "New York",
                      desc: "leads in filings (43%), followed by California (15%) and Florida (12%)",
                    },
                    {
                      stat: "98%",
                      desc: "plaintiff win rate in serial ADA web lawsuits",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="text-xl font-bold text-sky-400 min-w-[100px]">
                        {item.stat}
                      </span>
                      <span className="text-slate-300">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-slate-300">
                The legal landscape is clear: non-compliance is not just an ethical issue — it's
                a financial liability. A single ADA demand letter can cost $10,000-$25,000 to
                resolve even without litigation. A full lawsuit averages $75,000+ in
                settlements plus legal fees.
              </p>
              <p className="text-slate-300">
                For a deeper dive into the lawsuit landscape, read our{" "}
                <Link
                  href="/blog/website-accessibility-lawsuit-statistics-2026"
                  className="text-sky-400 hover:text-sky-300"
                >
                  Website Accessibility Lawsuit Statistics for 2026
                </Link>{" "}
                and{" "}
                <Link
                  href="/blog/ada-lawsuit-settlements-2026"
                  className="text-sky-400 hover:text-sky-300"
                >
                  ADA Lawsuit Settlements in 2026
                </Link>
                .
              </p>

              {/* Section 8 */}
              <h2 className="text-2xl font-bold text-white mt-12">
                Overlay Solutions: Why They Don't Work
              </h2>
              <p className="text-slate-300">
                Accessibility overlay widgets — JavaScript tools that promise "one-line"
                compliance — are one of the biggest misconceptions in ADA website compliance.
                Despite aggressive marketing, overlays do not make your website ADA compliant.
                Here's why:
              </p>

              <div className="not-prose space-y-3 mt-4 mb-8">
                {[
                  {
                    title: "They don't fix the underlying code",
                    desc: "Overlays add a cosmetic layer on top of your website. They can't restructure heading hierarchies, add meaningful alt text that describes your specific images, or fix broken form associations. The violations remain in your source code.",
                  },
                  {
                    title: "Courts have rejected overlay-based compliance claims",
                    desc: "Multiple federal courts have ruled that websites using overlays were not ADA compliant. In several cases, the overlay itself introduced new accessibility barriers.",
                  },
                  {
                    title: "An overlay provider was fined $1 million",
                    desc: "In 2024, the FTC fined an overlay provider $1 million for deceptive trade practices — specifically for falsely claiming their product could make websites ADA compliant. This is a landmark enforcement action.",
                  },
                  {
                    title: "30% of ADA lawsuits involve overlay users",
                    desc: "Websites using accessibility overlay widgets are disproportionately represented in ADA lawsuits. Some plaintiff attorneys specifically target overlay-using sites because the overlay presence signals superficial compliance efforts.",
                  },
                  {
                    title: "The disability community opposes them",
                    desc: "Over 700 accessibility professionals and disability advocates have signed an open letter (the Overlay Fact Sheet) opposing the use of overlay products, citing interference with actual assistive technology.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-red-500/20 bg-red-500/5 p-4"
                  >
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-slate-400 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-slate-300">
                The DOJ's rule for Title II compliance is explicit: entities must{" "}
                <strong className="text-white">
                  conform to WCAG 2.1 AA
                </strong>{" "}
                — not use a particular tool. There is no shortcut. Real compliance requires
                identifying and fixing actual code-level issues.
              </p>
              <p className="text-slate-300">
                See how overlays compare to real accessibility tools in our comparison pages:{" "}
                <Link
                  href="/compare/ratedwithai-vs-accessibe"
                  className="text-sky-400 hover:text-sky-300"
                >
                  RatedWithAI vs accessiBe
                </Link>
                ,{" "}
                <Link
                  href="/compare/ratedwithai-vs-audioeye"
                  className="text-sky-400 hover:text-sky-300"
                >
                  RatedWithAI vs AudioEye
                </Link>
                ,{" "}
                <Link
                  href="/compare/ratedwithai-vs-userway"
                  className="text-sky-400 hover:text-sky-300"
                >
                  RatedWithAI vs UserWay
                </Link>
                .
              </p>

              {/* Section 9 */}
              <h2 className="text-2xl font-bold text-white mt-12">
                How to Test Your Website for ADA Compliance
              </h2>
              <p className="text-slate-300">
                Effective ADA compliance testing requires a combination of automated scanning,
                manual testing, and (ideally) testing with real users who have disabilities.
                No single method catches everything.
              </p>

              <h3 className="text-xl font-bold text-white mt-8">
                Automated Testing (Catches ~30-40% of Issues)
              </h3>
              <p className="text-slate-300">
                Automated scanners like{" "}
                <Link
                  href="/tools/free-accessibility-checker"
                  className="text-sky-400 hover:text-sky-300"
                >
                  RatedWithAI's free accessibility checker
                </Link>{" "}
                crawl your pages and test against WCAG 2.1 AA criteria. They excel at catching
                objective violations: missing alt text, low color contrast, missing form
                labels, empty links, and missing language attributes.
              </p>
              <p className="text-slate-300">
                Automated tools are the essential first step because they can scan hundreds or
                thousands of pages in minutes. They provide a baseline compliance score and
                prioritized fix recommendations. Run automated scans on your entire site, not
                just the home page — violations on interior pages are equally actionable.
              </p>

              <h3 className="text-xl font-bold text-white mt-8">
                Manual Testing (Catches the Other 60-70%)
              </h3>
              <p className="text-slate-300">
                Automated tools can't evaluate subjective criteria like whether alt text is
                actually descriptive, whether navigation is logical, or whether content is truly
                understandable. Manual testing fills these gaps:
              </p>
              <ul className="text-slate-300 space-y-2">
                <li>
                  <strong className="text-white">Keyboard testing</strong> — Navigate your
                  entire site using only Tab, Enter, Space, and arrow keys. Can you reach and
                  operate everything? Is the focus order logical?
                </li>
                <li>
                  <strong className="text-white">Screen reader testing</strong> — Use NVDA
                  (Windows, free), JAWS (Windows, paid), or VoiceOver (Mac/iOS, built-in) to
                  hear how your site is read aloud. Is the content comprehensible?
                </li>
                <li>
                  <strong className="text-white">Zoom testing</strong> — Zoom to 200% and
                  400%. Does content reflow? Is anything lost or overlapping?
                </li>
                <li>
                  <strong className="text-white">Color and contrast</strong> — Verify that
                  no information is conveyed by color alone. Check contrast ratios with a
                  dedicated tool.
                </li>
                <li>
                  <strong className="text-white">Form testing</strong> — Complete every form
                  on your site. Are errors clearly described? Are required fields indicated?
                </li>
              </ul>

              <h3 className="text-xl font-bold text-white mt-8">
                User Testing (The Gold Standard)
              </h3>
              <p className="text-slate-300">
                Testing with real users who have disabilities reveals issues that no automated
                tool or manual testing protocol can find. If your budget allows, recruit testers
                who use screen readers, voice control, switch devices, and screen magnification
                to use your most critical workflows.
              </p>

              <p className="text-slate-300">
                For a detailed testing methodology, see our{" "}
                <Link
                  href="/blog/website-accessibility-testing-guide"
                  className="text-sky-400 hover:text-sky-300"
                >
                  Website Accessibility Testing Guide
                </Link>{" "}
                and{" "}
                <Link
                  href="/blog/best-website-accessibility-checker-tools-2026"
                  className="text-sky-400 hover:text-sky-300"
                >
                  Best Accessibility Checker Tools for 2026
                </Link>
                .
              </p>

              {/* CTA block */}
              <div className="not-prose rounded-xl border border-sky-500/30 bg-sky-500/5 p-8 text-center mt-8 mb-8">
                <h3 className="text-2xl font-bold text-white">
                  Check Your Website's ADA Compliance — Free
                </h3>
                <p className="text-slate-300 mt-3 max-w-2xl mx-auto">
                  Run a free WCAG 2.1 AA scan on any page in under 60 seconds. Get a
                  compliance score, violation details, and prioritized fix recommendations.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/scan"
                    className="rounded-lg bg-sky-500 px-8 py-3 font-semibold text-white hover:bg-sky-400 transition-colors"
                  >
                    Free ADA Compliance Scan →
                  </Link>
                  <Link
                    href="/tools/free-accessibility-checker"
                    className="rounded-lg border border-slate-600 px-8 py-3 font-semibold text-slate-300 hover:border-slate-400 transition-colors"
                  >
                    Learn About Our Scanner
                  </Link>
                </div>
              </div>

              {/* Section 10 */}
              <h2 className="text-2xl font-bold text-white mt-12">
                Cost of ADA Website Compliance
              </h2>
              <p className="text-slate-300">
                ADA compliance costs vary widely depending on your website's size, complexity,
                current state, and the approach you take. Here are realistic ranges based on
                2026 market rates:
              </p>

              <div className="not-prose mt-4 mb-8">
                <div className="rounded-xl border border-slate-700 overflow-hidden">
                  <div className="grid grid-cols-3 bg-slate-800 p-4 font-semibold text-sm text-slate-300">
                    <div>Website Type</div>
                    <div>Initial Remediation</div>
                    <div>Ongoing Monitoring</div>
                  </div>
                  {[
                    {
                      type: "Small business (10-50 pages)",
                      initial: "$2,000–$10,000",
                      ongoing: "$29–$99/month",
                    },
                    {
                      type: "Mid-size (50-500 pages)",
                      initial: "$10,000–$50,000",
                      ongoing: "$99–$499/month",
                    },
                    {
                      type: "E-commerce (1,000+ products)",
                      initial: "$25,000–$75,000",
                      ongoing: "$299–$999/month",
                    },
                    {
                      type: "Enterprise/government portal",
                      initial: "$50,000–$200,000+",
                      ongoing: "$500–$2,000+/month",
                    },
                    {
                      type: "Custom web application",
                      initial: "$25,000–$100,000+",
                      ongoing: "$199–$999/month",
                    },
                  ].map((row, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-3 p-4 text-sm border-t border-slate-700 bg-slate-800/50"
                    >
                      <div className="text-slate-300">{row.type}</div>
                      <div className="text-white font-semibold">
                        {row.initial}
                      </div>
                      <div className="text-slate-400">{row.ongoing}</div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-slate-300">
                Compare these costs to the alternative: a single ADA lawsuit settlement
                averages <strong className="text-red-400">$75,000+</strong>, not including
                legal fees ($300-$600/hour), remediation costs ordered by the court, and
                potential ongoing monitoring requirements. Proactive compliance is always
                cheaper than reactive litigation.
              </p>

              <div className="not-prose rounded-xl border border-green-500/30 bg-green-500/5 p-6 mt-4 mb-8">
                <h3 className="font-bold text-green-400 text-lg mb-2">
                  💡 Tax Credit: Offset Your Compliance Costs
                </h3>
                <p className="text-slate-300 text-sm">
                  Small businesses (under $1M revenue or under 30 employees) can claim the{" "}
                  <strong className="text-white">Disabled Access Credit</strong> (IRS Form
                  8826) — covering 50% of eligible accessibility expenditures between $250 and
                  $10,250, for a maximum credit of{" "}
                  <strong className="text-white">$5,000 per year</strong>. This can make tools
                  like RatedWithAI effectively free after the tax benefit.
                </p>
              </div>

              {/* Section 11 */}
              <h2 className="text-2xl font-bold text-white mt-12">
                ADA Compliance by Industry
              </h2>
              <p className="text-slate-300">
                Different industries face different ADA compliance challenges and levels of
                lawsuit risk. Here's an overview of the landscape:
              </p>

              <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 mb-8">
                {[
                  {
                    industry: "E-Commerce & Retail",
                    risk: "Very High",
                    notes:
                      "The #1 sued sector. Product images need alt text, checkout must be keyboard accessible, filters must be operable.",
                    link: "/industry/ecommerce-accessibility",
                  },
                  {
                    industry: "Healthcare",
                    risk: "Very High",
                    notes:
                      "Patient portals, appointment scheduling, and medical information must all be accessible. HIPAA adds complexity.",
                    link: "/blog/healthcare-accessibility-compliance",
                  },
                  {
                    industry: "Banking & Finance",
                    risk: "High",
                    notes:
                      "Account management, transaction flows, and financial documents must be accessible. Also governed by Section 504.",
                    link: "/blog/banking-accessibility-compliance",
                  },
                  {
                    industry: "Legal Services",
                    risk: "High",
                    notes:
                      "Law firms are ironic targets — but face significant lawsuit risk. Contact forms and case information must be accessible.",
                    link: "/blog/law-firm-accessibility-compliance",
                  },
                  {
                    industry: "Education",
                    risk: "Very High",
                    notes:
                      "Public schools face Title II deadlines. Private institutions face Title III. LMS platforms are a major pain point.",
                    link: "/industry/education-accessibility",
                  },
                  {
                    industry: "Government",
                    risk: "Critical",
                    notes:
                      "Hard deadlines under ADA Title II. All digital services must meet WCAG 2.1 AA. DOJ enforcement is active.",
                    link: "/blog/ada-title-ii-compliance-guide",
                  },
                  {
                    industry: "Hospitality & Travel",
                    risk: "High",
                    notes:
                      "Booking systems, room selection, and reservation forms are common compliance gaps.",
                    link: "/industry/hospitality-accessibility",
                  },
                  {
                    industry: "SaaS & Technology",
                    risk: "Moderate-High",
                    notes:
                      "VPAT documentation increasingly required by enterprise buyers. Accessibility is becoming a competitive differentiator.",
                    link: "/industry/saas-accessibility",
                  },
                ].map((item) => (
                  <Link
                    key={item.industry}
                    href={item.link}
                    className="rounded-lg border border-slate-700 bg-slate-800/50 p-5 hover:border-sky-500/30 transition-colors block no-underline"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-white">
                        {item.industry}
                      </h3>
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                          item.risk === "Critical"
                            ? "bg-red-500/20 text-red-400"
                            : item.risk === "Very High"
                              ? "bg-orange-500/20 text-orange-400"
                              : item.risk === "High"
                                ? "bg-amber-500/20 text-amber-400"
                                : "bg-yellow-500/20 text-yellow-400"
                        }`}
                      >
                        {item.risk} Risk
                      </span>
                    </div>
                    <p className="text-sm text-slate-400">{item.notes}</p>
                  </Link>
                ))}
              </div>

              <p className="text-slate-300">
                For a comprehensive industry-by-industry breakdown, see our{" "}
                <Link
                  href="/blog/ada-compliance-by-industry"
                  className="text-sky-400 hover:text-sky-300"
                >
                  ADA Compliance by Industry
                </Link>{" "}
                guide.
              </p>

              {/* Section 12 */}
              <h2 className="text-2xl font-bold text-white mt-12">
                State-Specific ADA Requirements
              </h2>
              <p className="text-slate-300">
                While the ADA is a federal law, several states have enacted their own web
                accessibility laws that go beyond — or add specificity to — federal
                requirements:
              </p>

              <div className="not-prose space-y-3 mt-4 mb-8">
                {[
                  {
                    state: "California",
                    law: "Unruh Civil Rights Act",
                    detail:
                      "ADA violations automatically constitute Unruh Act violations. Minimum damages of $4,000 per violation per visit. California accounts for 15% of all ADA web lawsuits.",
                    link: "/state/california-ada-compliance",
                  },
                  {
                    state: "New York",
                    law: "NYCHRL & NYSHRL",
                    detail:
                      "New York City and State human rights laws provide additional grounds for accessibility lawsuits. NYC leads the nation with 43% of all ADA web filings.",
                    link: "/state/new-york-ada-compliance",
                  },
                  {
                    state: "Florida",
                    law: "Florida Civil Rights Act",
                    detail:
                      "Florida has seen rapid growth in web accessibility filings. The state accounts for 12% of all ADA web lawsuits, third nationally.",
                    link: "/state/florida-ada-compliance",
                  },
                  {
                    state: "Colorado",
                    law: "HB21-1110",
                    detail:
                      "Colorado became the first state to pass a law specifically requiring WCAG compliance for state and local government websites. Effective July 1, 2024.",
                    link: "/state/colorado-ada-compliance",
                  },
                  {
                    state: "Illinois",
                    law: "IADA (Information Accessibility Act)",
                    detail:
                      "Requires state agencies to conform to WCAG 2.0 AA. The Illinois BIPA (Biometric Information Privacy Act) adds complexity for sites collecting biometric data.",
                    link: "/state/illinois-ada-compliance",
                  },
                ].map((item) => (
                  <Link
                    key={item.state}
                    href={item.link}
                    className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:border-sky-500/30 transition-colors block no-underline"
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-semibold text-white">{item.state}</h3>
                      <span className="text-xs font-mono text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded">
                        {item.law}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400">{item.detail}</p>
                  </Link>
                ))}
              </div>

              <p className="text-slate-300">
                View compliance requirements for your specific state in our{" "}
                <Link
                  href="/state/california-ada-compliance"
                  className="text-sky-400 hover:text-sky-300"
                >
                  state-by-state ADA compliance guides
                </Link>
                .
              </p>

              {/* FAQ Section */}
              <h2 className="text-2xl font-bold text-white mt-12">
                Frequently Asked Questions: ADA Website Compliance
              </h2>

              <div className="not-prose space-y-4 mt-4 mb-8">
                {[
                  {
                    q: "Is ADA website compliance legally required?",
                    a: "Yes. Under ADA Title III, any business that qualifies as a \"place of public accommodation\" must make its website accessible. Courts have consistently ruled that websites are extensions of physical businesses. Under ADA Title II, all state and local government websites must comply with WCAG 2.1 AA by April 24, 2026 (populations 50,000+) or April 26, 2027 (smaller entities).",
                  },
                  {
                    q: "What standard does ADA require for websites?",
                    a: "The DOJ's 2024 final rule explicitly adopts WCAG 2.1 Level AA as the technical standard for ADA Title II compliance. While Title III doesn't specify a technical standard in the statute, courts and the DOJ consistently reference WCAG 2.1 AA as the benchmark for private sector websites as well.",
                  },
                  {
                    q: "How much does ADA website compliance cost?",
                    a: "Costs vary significantly. Small business websites (10-50 pages) typically cost $2,000-$10,000 for initial remediation. Mid-size sites run $10,000-$50,000. Enterprise sites can exceed $100,000. Ongoing monitoring tools start at $29/month. Small businesses can offset costs with the Disabled Access Credit (IRS Form 8826) — up to $5,000/year.",
                  },
                  {
                    q: "Do accessibility overlays make my website ADA compliant?",
                    a: "No. An overlay provider was fined $1 million by the FTC for deceptive compliance claims. Over 30% of ADA lawsuits involve sites using overlays. Courts have ruled overlays don't constitute WCAG conformance. The DOJ requires actual conformance with WCAG 2.1 AA — not the use of any particular widget.",
                  },
                  {
                    q: "What happens if my website isn't ADA compliant?",
                    a: "You risk demand letters, federal lawsuits (average settlement $75,000+), DOJ enforcement actions, consent decrees with ongoing monitoring, reputational damage, and loss of customers. Over 5,000 ADA web accessibility lawsuits were filed in 2025 alone.",
                  },
                  {
                    q: "Can I get sued even if I have a physical location?",
                    a: "Yes — having a physical location actually increases your risk. Courts have ruled that websites connected to a physical \"place of public accommodation\" fall under ADA Title III. Restaurants, hotels, retail stores, and healthcare providers with non-compliant websites are common targets.",
                  },
                  {
                    q: "How do I test my website for ADA compliance?",
                    a: "Use a combination of automated and manual testing. Start with an automated scanner like RatedWithAI to identify WCAG 2.1 AA violations. Then supplement with keyboard navigation testing, screen reader testing (NVDA, JAWS, VoiceOver), color contrast checks, and ideally testing with real users who have disabilities.",
                  },
                  {
                    q: "Is there a deadline for ADA website compliance?",
                    a: "For government websites (Title II): April 24, 2026 (50,000+ populations) or April 26, 2027 (smaller entities). For private businesses (Title III): There is no specific deadline — the legal obligation exists now and lawsuits can be filed at any time.",
                  },
                  {
                    q: "Does ADA compliance apply to mobile apps?",
                    a: "Yes. The DOJ's 2024 rule explicitly includes mobile applications for Title II entities. Courts have applied the same requirements to mobile apps under Title III. Your mobile app must meet the same WCAG 2.1 AA standards as your website.",
                  },
                  {
                    q: "What's the difference between ADA compliance and WCAG compliance?",
                    a: "ADA is the law (Americans with Disabilities Act) — it prohibits discrimination. WCAG (Web Content Accessibility Guidelines) is the technical standard that defines how to make web content accessible. ADA compliance for websites is achieved by meeting WCAG 2.1 Level AA. Think of ADA as the \"what\" and WCAG as the \"how\".",
                  },
                ].map((faq, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-slate-700 bg-slate-800/50 p-5"
                  >
                    <h3 className="font-semibold text-white text-lg">
                      {faq.q}
                    </h3>
                    <p className="text-slate-300 text-sm mt-2">{faq.a}</p>
                  </div>
                ))}
              </div>

              {/* Final CTA */}
              <div className="not-prose rounded-xl border border-sky-500/30 bg-sky-500/5 p-8 text-center mt-8 mb-8">
                <h3 className="text-2xl font-bold text-white">
                  Start Your ADA Compliance Journey Today
                </h3>
                <p className="text-slate-300 mt-3 max-w-2xl mx-auto">
                  Don't wait for a demand letter. Run a free WCAG 2.1 AA compliance scan on
                  your website and get a detailed report with prioritized fix recommendations —
                  in under 60 seconds.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/scan"
                    className="rounded-lg bg-sky-500 px-8 py-3 font-semibold text-white hover:bg-sky-400 transition-colors"
                  >
                    Free ADA Compliance Scan →
                  </Link>
                  <Link
                    href="/pricing"
                    className="rounded-lg border border-slate-600 px-8 py-3 font-semibold text-slate-300 hover:border-slate-400 transition-colors"
                  >
                    View Plans &amp; Pricing
                  </Link>
                </div>
              </div>

              {/* Related Reading */}
              <div className="not-prose mt-8 pt-8 border-t border-slate-700">
                <h3 className="font-bold text-white text-lg mb-4">
                  Related Reading
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    {
                      label: "ADA Compliance Checklist 2026",
                      href: "/blog/ada-compliance-checklist-2026",
                    },
                    {
                      label: "ADA Title II Deadline Countdown",
                      href: "/blog/ada-title-ii-deadline-countdown-2026",
                    },
                    {
                      label: "WCAG Compliance Guide",
                      href: "/blog/wcag-compliance-guide",
                    },
                    {
                      label: "How to Fix Common WCAG Failures",
                      href: "/blog/how-to-fix-common-wcag-failures",
                    },
                    {
                      label: "Website Accessibility Lawsuit Statistics 2026",
                      href: "/blog/website-accessibility-lawsuit-statistics-2026",
                    },
                    {
                      label: "Section 508 Compliance Guide",
                      href: "/blog/section-508-compliance-guide",
                    },
                    {
                      label: "ADA Compliance by Industry",
                      href: "/blog/ada-compliance-by-industry",
                    },
                    {
                      label: "WCAG 2.1 vs 2.2: What Changed",
                      href: "/blog/wcag-2-1-vs-2-2",
                    },
                    {
                      label: "Free Accessibility Checker Tool",
                      href: "/tools/free-accessibility-checker",
                    },
                    {
                      label: "Small Business Accessibility Guide",
                      href: "/blog/small-business-accessibility-guide",
                    },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors text-sm"
                    >
                      <span>→</span>
                      <span>{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}
