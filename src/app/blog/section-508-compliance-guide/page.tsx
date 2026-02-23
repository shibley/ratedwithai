/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Section 508 Compliance: The Complete Guide for 2026 | RatedWithAI",
  description:
    "Everything you need to know about Section 508 compliance in 2026. Requirements, checklist, testing methods, VPAT documentation, and how it connects to WCAG 2.1 and ADA Title II. Free compliance scanner included.",
  openGraph: {
    title: "Section 508 Compliance: The Complete 2026 Guide",
    description:
      "Section 508 requires federal agencies and contractors to make ICT accessible. Learn requirements, testing methods, and how to achieve compliance with our comprehensive guide.",
    type: "article",
    publishedTime: "2026-02-22T00:00:00.000Z",
    authors: ["RatedWithAI Team"],
  },
  keywords: [
    "section 508 compliance",
    "section 508 requirements",
    "508 compliance checklist",
    "section 508 testing",
    "section 508 accessibility",
    "508 compliance requirements",
    "section 508 wcag",
    "federal accessibility requirements",
    "section 508 refresh",
    "ict accessibility standards",
  ],
};

export default function Section508ComplianceGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Section 508 Compliance: The Complete Guide for 2026",
    description:
      "Comprehensive guide to Section 508 compliance covering requirements, testing, VPAT documentation, and the relationship with WCAG 2.1 and ADA Title II.",
    datePublished: "2026-02-22T00:00:00.000Z",
    dateModified: "2026-02-22T00:00:00.000Z",
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <div className="relative overflow-hidden">
          <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-sky-500/30 via-blue-500/20 to-indigo-500/30 blur-3xl" />
          <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-gradient-to-tr from-sky-500/20 via-blue-500/10 to-indigo-500/20 blur-3xl" />

          <Header />

          <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-14 pt-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-sm text-sky-400">
              COMPREHENSIVE GUIDE
            </div>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              Section 508 Compliance: The Complete Guide for 2026
            </h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              Section 508 of the Rehabilitation Act requires federal agencies — and any organization that receives federal
              funding or builds technology for the government — to make their information and communications technology (ICT)
              accessible to people with disabilities. With 9,900+ monthly searches for "section 508 compliance" and the
              April 24, 2026 ADA Title II deadline amplifying urgency, understanding these requirements has never been more
              critical.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
              <time dateTime="2026-02-22">February 22, 2026</time>
              <span>·</span>
              <span>15 min read</span>
            </div>

            {/* Quick stats box */}
            <div className="mt-10 rounded-xl border border-sky-500/30 bg-sky-500/5 p-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-sky-400">1973</div>
                  <div className="text-sm text-slate-400 mt-1">Original Law</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-400">2017</div>
                  <div className="text-sm text-slate-400 mt-1">508 Refresh</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-indigo-400">WCAG 2.0</div>
                  <div className="text-sm text-slate-400 mt-1">AA Standard</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-violet-400">$20M+</div>
                  <div className="text-sm text-slate-400 mt-1">Annual Penalties</div>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="mt-10 rounded-xl border border-slate-700 bg-slate-800/50 p-6">
              <h2 className="font-bold text-white text-lg mb-4">Table of Contents</h2>
              <nav className="space-y-2 text-sm">
                {[
                  { label: "What Is Section 508?", id: "what-is-508" },
                  { label: "Who Must Comply?", id: "who-must-comply" },
                  { label: "Section 508 vs WCAG 2.1 vs ADA Title II", id: "508-vs-wcag-vs-ada" },
                  { label: "Complete Section 508 Compliance Checklist", id: "checklist" },
                  { label: "How to Test for 508 Compliance", id: "testing" },
                  { label: "Section 508 and the April 2026 Deadline", id: "april-2026" },
                  { label: "Common 508 Failures and How to Fix Them", id: "common-failures" },
                  { label: "Enforcement and Penalties", id: "enforcement" },
                  { label: "Frequently Asked Questions", id: "faq" },
                ].map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    <span>→</span>
                    <span>{item.label}</span>
                  </a>
                ))}
              </nav>
            </div>

            <div className="mt-10 prose prose-lg prose-invert max-w-none">
              {/* Section 1: What Is Section 508? */}
              <h2 id="what-is-508" className="text-2xl font-bold text-white">What Is Section 508?</h2>
              <p className="text-slate-300">
                Section 508 is part of the <strong className="text-white">Rehabilitation Act of 1973</strong>, a landmark
                civil rights law that prohibits discrimination based on disability in programs conducted by federal agencies
                and in programs receiving federal financial assistance. Specifically, Section 508 addresses electronic and
                information technology (EIT) — now referred to as information and communications technology (ICT).
              </p>
              <p className="text-slate-300">
                The law was first added as an amendment in 1986, but it wasn't until the <strong className="text-white">
                Workforce Investment Act of 1998</strong> that Section 508 gained real enforcement teeth. The 1998 amendment
                required federal agencies to make their electronic and information technology accessible to people with
                disabilities — both employees and members of the public.
              </p>

              <h3 className="text-xl font-bold text-white mt-8">The 2017 Section 508 Refresh</h3>
              <p className="text-slate-300">
                In January 2017, the U.S. Access Board published a <strong className="text-white">major update to Section 508</strong>
                — commonly called the "508 Refresh." This was the first significant update in nearly 20 years, and it
                fundamentally changed how compliance is measured by incorporating the Web Content Accessibility Guidelines
                (WCAG) as the technical standard.
              </p>
              <p className="text-slate-300">
                Key changes in the 2017 refresh:
              </p>
              <ul className="text-slate-300 space-y-2">
                <li><strong className="text-white">WCAG 2.0 Level AA incorporation</strong> — The refresh directly references WCAG 2.0 Level A and AA success criteria as the standard for web content, electronic documents, and software</li>
                <li><strong className="text-white">Technology-neutral approach</strong> — Instead of prescribing specific technologies, the updated standards focus on functional performance criteria that apply regardless of the technology used</li>
                <li><strong className="text-white">Harmonization with international standards</strong> — The refresh aligns Section 508 with the European standard EN 301 549, making it easier for multinational organizations to comply with both simultaneously</li>
                <li><strong className="text-white">Expanded scope to ICT</strong> — The terminology shifted from "electronic and information technology" to "information and communications technology" (ICT), broadening the categories of covered technology</li>
                <li><strong className="text-white">Authoring tool requirements</strong> — Tools used to create web content must also support the creation of accessible content</li>
              </ul>

              {/* Section 2: Who Must Comply? */}
              <h2 id="who-must-comply" className="text-2xl font-bold text-white mt-12">Who Must Comply with Section 508?</h2>
              <p className="text-slate-300">
                Section 508 applies to a broader range of organizations than most people realize. If your organization
                has any connection to the federal government, you likely have Section 508 obligations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose mt-4 mb-8">
                {[
                  { title: "Federal Agencies", desc: "All executive branch agencies, independent regulatory agencies, the Postal Service, and the Postal Rate Commission. All ICT they develop, procure, maintain, or use must be accessible.", highlight: true },
                  { title: "Federal Contractors", desc: "Any company that builds, sells, or maintains ICT products for the federal government. The Federal Acquisition Regulation (FAR) requires Section 508 compliance in contracts.", highlight: true },
                  { title: "Recipients of Federal Funding", desc: "State agencies, universities, non-profits, and other organizations that receive federal grants, loans, or other financial assistance. This extends Section 504 protections to their digital assets.", highlight: false },
                  { title: "State & Local Government (via Section 504)", desc: "While Section 508 is technically federal-only, Section 504 of the same law requires any program receiving federal money to be accessible. Most state/local governments receive some federal funding.", highlight: false },
                  { title: "Defense Contractors", desc: "DoD contracts increasingly require Section 508 compliance. The Defense Information Systems Agency (DISA) has specific accessibility testing requirements for all delivered systems.", highlight: false },
                  { title: "Healthcare Organizations", desc: "Hospitals and health systems receiving Medicare/Medicaid funding (i.e., virtually all of them) have Section 504 obligations that mirror Section 508 requirements.", highlight: false },
                ].map((item) => (
                  <div key={item.title} className={`rounded-lg border p-4 ${item.highlight ? 'border-sky-500/30 bg-sky-500/5' : 'border-slate-700 bg-slate-800/50'}`}>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-slate-400 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="not-prose rounded-xl border border-amber-500/30 bg-amber-500/5 p-6 mt-4 mb-8">
                <h3 className="font-bold text-amber-400 text-lg mb-2">💡 Important: The "Federal Nexus" Rule</h3>
                <p className="text-slate-300 text-sm">
                  Even if your organization isn't a federal agency, the "federal nexus" can bring you under Section 508's
                  umbrella. If you receive federal grants (research universities, state Medicaid programs, transportation
                  agencies), bid on federal contracts (SaaS vendors, IT consultancies), or participate in federally
                  funded programs, your ICT must meet Section 508 standards. In practice, this covers <strong className="text-white">
                  tens of thousands of organizations</strong> beyond the federal government itself.
                </p>
              </div>

              {/* Section 3: 508 vs WCAG vs ADA */}
              <h2 id="508-vs-wcag-vs-ada" className="text-2xl font-bold text-white mt-12">Section 508 vs WCAG 2.1 vs ADA Title II: Key Differences</h2>
              <p className="text-slate-300">
                These three standards are often confused, but they serve different purposes, apply to different
                organizations, and have different technical requirements. Understanding the differences — and overlaps — is
                essential for compliance planning.
              </p>

              <div className="not-prose mt-4 mb-8">
                <div className="rounded-xl border border-slate-700 overflow-hidden">
                  <div className="grid grid-cols-4 bg-slate-800 p-4 font-semibold text-sm text-slate-300">
                    <div>Aspect</div>
                    <div>Section 508</div>
                    <div>WCAG 2.1</div>
                    <div>ADA Title II</div>
                  </div>
                  {[
                    { aspect: "What it is", s508: "Federal law (part of Rehabilitation Act)", wcag: "International technical standard (W3C)", ada: "Federal civil rights law" },
                    { aspect: "Who it applies to", s508: "Federal agencies + contractors + grant recipients", wcag: "Anyone who adopts it (voluntary unless referenced by law)", ada: "State & local government entities" },
                    { aspect: "Technical standard", s508: "WCAG 2.0 Level AA (via 2017 Refresh)", wcag: "WCAG 2.1 Level A through AAA", ada: "WCAG 2.1 Level AA (via 2024 DOJ rule)" },
                    { aspect: "Scope", s508: "All ICT: web, software, hardware, docs, telecom", wcag: "Web content only", ada: "Websites + mobile apps" },
                    { aspect: "Enforcement", s508: "Administrative complaints, contract actions, lawsuits", wcag: "N/A (standard, not law)", ada: "DOJ enforcement, private lawsuits, funding loss" },
                    { aspect: "Key deadline", s508: "Ongoing (since 2018 refresh effective date)", wcag: "N/A", ada: "April 24, 2026 (pop. 50K+)" },
                    { aspect: "VPAT required?", s508: "Yes (for procurement)", wcag: "No", ada: "No (but recommended)" },
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-4 p-4 text-sm border-t border-slate-700 bg-slate-800/50">
                      <div className="text-white font-medium">{row.aspect}</div>
                      <div className="text-slate-300">{row.s508}</div>
                      <div className="text-slate-300">{row.wcag}</div>
                      <div className="text-slate-300">{row.ada}</div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-slate-300">
                <strong className="text-white">The critical distinction:</strong> Section 508 currently references
                <strong className="text-sky-400"> WCAG 2.0 Level AA</strong>, while the new ADA Title II rule references
                <strong className="text-sky-400"> WCAG 2.1 Level AA</strong>. WCAG 2.1 adds 17 new success criteria beyond
                WCAG 2.0, primarily addressing mobile accessibility, low vision, and cognitive disabilities. If your
                organization falls under both Section 508 and ADA Title II, you should target WCAG 2.1 AA to satisfy both.
              </p>

              {/* Section 4: Compliance Checklist */}
              <h2 id="checklist" className="text-2xl font-bold text-white mt-12">Complete Section 508 Compliance Checklist</h2>
              <p className="text-slate-300">
                Section 508 covers four main categories of ICT. Here's a comprehensive checklist organized by category:
              </p>

              <div className="not-prose space-y-6 mt-4 mb-8">
                {[
                  {
                    category: "Web Content & Electronic Documents",
                    icon: "🌐",
                    items: [
                      "All images have meaningful alt text (or empty alt for decorative images)",
                      "Color contrast ratios meet 4.5:1 for normal text and 3:1 for large text",
                      "All content is accessible via keyboard alone (no mouse-only interactions)",
                      "Form inputs have associated labels and clear error messages",
                      "Heading hierarchy is logical (H1 → H2 → H3, no skipped levels)",
                      "Data tables have proper headers (th elements with scope attributes)",
                      "Links have descriptive text (no 'click here' or 'read more')",
                      "Page language is declared in the HTML lang attribute",
                      "PDF documents are tagged and have a logical reading order",
                      "Video content has captions and audio content has transcripts",
                      "ARIA landmarks are used correctly (main, nav, banner, complementary)",
                      "Dynamic content changes are announced to screen readers",
                    ],
                  },
                  {
                    category: "Software Applications",
                    icon: "💻",
                    items: [
                      "All functionality is operable via keyboard",
                      "Screen reader compatible (proper API exposure of names, roles, states, values)",
                      "Focus management is logical and visible",
                      "Status messages are programmatically determined",
                      "User preferences for color, contrast, and font size are respected",
                      "No content flashes more than 3 times per second",
                      "Timed interactions can be extended or disabled",
                      "Error identification is specific and suggests corrections",
                    ],
                  },
                  {
                    category: "Hardware & Telecommunications",
                    icon: "📱",
                    items: [
                      "Physical controls have tactile markers and are operable by users with limited dexterity",
                      "Visual information has an audio alternative",
                      "Audio information has a visual alternative",
                      "Biometric authentication has a non-biometric alternative",
                      "Hardware does not require simultaneous user actions",
                      "Telecom products support TTY and real-time text (RTT)",
                    ],
                  },
                  {
                    category: "Support Documentation & Services",
                    icon: "📚",
                    items: [
                      "Product documentation is available in accessible formats",
                      "Support services (help desk, training) accommodate users with disabilities",
                      "Installation instructions are accessible",
                      "End-user documentation describes accessibility features",
                      "Accessibility conformance reports (VPATs/ACRs) are publicly available",
                    ],
                  },
                ].map((section) => (
                  <div key={section.category} className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">{section.icon}</span>
                      <h3 className="font-bold text-white text-lg">{section.category}</h3>
                    </div>
                    <ul className="space-y-2">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                          <span className="text-sky-400 mt-0.5 shrink-0">☐</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Section 5: Testing */}
              <h2 id="testing" className="text-2xl font-bold text-white mt-12">How to Test for Section 508 Compliance</h2>
              <p className="text-slate-300">
                Effective Section 508 testing combines automated scanning, manual evaluation, and assistive technology testing.
                No single approach catches everything — you need all three.
              </p>

              <h3 className="text-xl font-bold text-white mt-8">1. Automated Scanning</h3>
              <p className="text-slate-300">
                Automated tools can detect approximately <strong className="text-white">30-40% of WCAG violations</strong>
                instantly. They're the best starting point because they can scan hundreds of pages in minutes and identify
                the most common issues like missing alt text, contrast failures, and missing form labels.
              </p>

              <div className="not-prose rounded-xl border border-sky-500/30 bg-sky-500/5 p-6 text-center mt-4 mb-8">
                <h3 className="text-xl font-bold text-white">Start Your Section 508 Audit Now</h3>
                <p className="text-slate-300 mt-2 text-sm">
                  RatedWithAI scans your website against WCAG 2.0 AA (Section 508) and WCAG 2.1 AA (ADA Title II) standards
                  simultaneously. Get a compliance score, violation counts, and prioritized fix recommendations in seconds.
                </p>
                <div className="mt-4">
                  <Link
                    href="/#scanner"
                    className="inline-flex rounded-lg bg-sky-500 px-8 py-3 font-semibold text-white hover:bg-sky-400 transition-colors"
                  >
                    Free Section 508 Scan →
                  </Link>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mt-8">2. Manual Evaluation</h3>
              <p className="text-slate-300">
                Manual testing catches the other <strong className="text-white">60-70% of issues</strong> that automated
                tools miss. Focus on:
              </p>
              <ul className="text-slate-300 space-y-2">
                <li><strong className="text-white">Keyboard navigation</strong> — Tab through the entire page. Can you reach and operate every interactive element? Is the focus order logical? Is the focus indicator visible?</li>
                <li><strong className="text-white">Content structure</strong> — Are headings used correctly and hierarchically? Do data tables make sense without visual formatting? Is the reading order logical?</li>
                <li><strong className="text-white">Dynamic content</strong> — Are modal dialogs, accordions, and menus accessible? Does focus move appropriately when content changes?</li>
                <li><strong className="text-white">Cognitive accessibility</strong> — Are error messages clear and specific? Can users undo or correct actions? Is language plain and understandable?</li>
              </ul>

              <h3 className="text-xl font-bold text-white mt-8">3. Assistive Technology Testing</h3>
              <p className="text-slate-300">
                The DHS Trusted Tester process recommends testing with actual screen readers and assistive technologies:
              </p>
              <div className="not-prose space-y-3 mt-4 mb-8">
                {[
                  { tool: "NVDA", platform: "Windows", desc: "Free, open-source screen reader. The most popular testing tool for Section 508 evaluations. Used in the DHS Trusted Tester process.", cost: "Free" },
                  { tool: "JAWS", platform: "Windows", desc: "Industry-standard commercial screen reader. Most widely used by blind computer users. Essential for enterprise testing.", cost: "$95/yr+" },
                  { tool: "VoiceOver", platform: "macOS/iOS", desc: "Built into Apple devices. Critical for testing iOS and macOS applications. No additional cost.", cost: "Built-in" },
                  { tool: "TalkBack", platform: "Android", desc: "Built into Android devices. Required for testing Android applications.", cost: "Built-in" },
                  { tool: "Dragon NaturallySpeaking", platform: "Windows", desc: "Voice recognition software. Tests voice-only navigation for users with motor disabilities.", cost: "$150+" },
                ].map((item) => (
                  <div key={item.tool} className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="font-semibold text-white">{item.tool}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-slate-700 text-slate-300">{item.platform}</span>
                      </div>
                      <span className="text-xs text-sky-400">{item.cost}</span>
                    </div>
                    <p className="text-sm text-slate-400 mt-2">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-white mt-8">4. VPAT / Accessibility Conformance Report (ACR)</h3>
              <p className="text-slate-300">
                For federal procurement, you'll need a <strong className="text-white">Voluntary Product Accessibility Template (VPAT)</strong>.
                The VPAT is a standardized document that describes how your product conforms to Section 508 standards. There
                are four editions:
              </p>
              <ul className="text-slate-300 space-y-2">
                <li><strong className="text-white">WCAG Edition</strong> — For products evaluated against WCAG 2.0 or 2.1 (most common)</li>
                <li><strong className="text-white">Section 508 Edition</strong> — For products evaluated against the Revised Section 508 Standards</li>
                <li><strong className="text-white">EN 301 549 Edition</strong> — For products evaluated against the European standard</li>
                <li><strong className="text-white">INT Edition</strong> — Combined version covering all three standards simultaneously</li>
              </ul>
              <p className="text-slate-300">
                <Link href="/tools/vpat-template" className="text-sky-400 hover:text-sky-300">
                  Download VPAT templates and learn how to complete them →
                </Link>
              </p>

              {/* Section 6: April 2026 Connection */}
              <h2 id="april-2026" className="text-2xl font-bold text-white mt-12">Section 508 and the April 24, 2026 Deadline</h2>
              <p className="text-slate-300">
                While Section 508 has been in effect since 2001 (with the 2017 refresh effective January 2018), the
                upcoming <strong className="text-white">April 24, 2026 ADA Title II deadline</strong> creates new urgency
                for many organizations that overlap both laws.
              </p>
              <p className="text-slate-300">
                Here's why the deadline matters for Section 508-covered organizations:
              </p>

              <div className="not-prose space-y-3 mt-4 mb-8">
                {[
                  { title: "State agencies receiving federal funding", desc: "Must comply with both Section 508 (via Section 504) AND the new ADA Title II WCAG 2.1 AA requirement. The ADA rule is stricter — WCAG 2.1 has 17 more criteria than WCAG 2.0." },
                  { title: "Public universities", desc: "Federal research grants trigger Section 508. State funding triggers ADA Title II. Both now apply, and the higher standard (WCAG 2.1 AA) effectively becomes the floor." },
                  { title: "Federal contractors serving state/local gov", desc: "Your government clients now face the April 2026 deadline. If your product isn't WCAG 2.1 AA compliant, they can't use it. This is a contract risk." },
                  { title: "Healthcare systems", desc: "Medicare/Medicaid funding triggers Section 504/508. Hospital websites serving 50K+ populations also face ADA Title II. Double exposure requires the higher standard." },
                ].map((item) => (
                  <div key={item.title} className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-slate-400 mt-2">{item.desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-slate-300">
                <strong className="text-white">Bottom line:</strong> If your organization is subject to Section 508, you
                should already be targeting <strong className="text-sky-400">WCAG 2.1 Level AA</strong> — not just WCAG 2.0 —
                to future-proof compliance. The regulatory landscape is converging on 2.1 as the minimum standard.
              </p>
              <p className="text-slate-300">
                <Link href="/blog/ada-title-ii-deadline-countdown-2026" className="text-sky-400 hover:text-sky-300">
                  Read our full ADA Title II deadline countdown guide →
                </Link>
              </p>

              {/* Section 7: Common Failures */}
              <h2 id="common-failures" className="text-2xl font-bold text-white mt-12">Common Section 508 Failures and How to Fix Them</h2>
              <p className="text-slate-300">
                Based on data from the DHS Section 508 program office, GSA's IT Accessibility program, and WebAIM's 2026
                Million Report, these are the most frequently cited violations — and their fixes:
              </p>

              <div className="not-prose space-y-4 mt-4 mb-8">
                {[
                  {
                    violation: "Missing or inadequate alt text",
                    wcag: "1.1.1 Non-text Content",
                    prevalence: "58.4% of home pages",
                    severity: "Critical",
                    fix: "Add descriptive alt text to all meaningful images. Use alt=\"\" for purely decorative images. For complex images (charts, diagrams), provide a long description via aria-describedby or a linked text alternative.",
                  },
                  {
                    violation: "Insufficient color contrast",
                    wcag: "1.4.3 Contrast (Minimum)",
                    prevalence: "81% of home pages",
                    severity: "Critical",
                    fix: "Ensure text has at least 4.5:1 contrast ratio against its background. Large text (18pt or 14pt bold) needs 3:1. Use a contrast checker tool. Don't rely on color alone to convey information.",
                  },
                  {
                    violation: "Missing form input labels",
                    wcag: "4.1.2 Name, Role, Value",
                    prevalence: "46% of home pages",
                    severity: "Critical",
                    fix: "Associate every form input with a label using the for/id pattern: <label for=\"email\">Email</label><input id=\"email\">. For visually hidden labels, use the sr-only CSS class pattern. Never use placeholder text as the only label.",
                  },
                  {
                    violation: "Keyboard traps",
                    wcag: "2.1.2 No Keyboard Trap",
                    prevalence: "20% of home pages",
                    severity: "Critical",
                    fix: "Ensure users can navigate into and out of every component using only the keyboard. Modal dialogs must trap focus inside while open but release it on close. Test by tabbing through the entire page without using a mouse.",
                  },
                  {
                    violation: "Missing page language",
                    wcag: "3.1.1 Language of Page",
                    prevalence: "17.1% of home pages",
                    severity: "Medium",
                    fix: "Add lang attribute to the HTML element: <html lang=\"en\">. For content in a different language, use the lang attribute on the containing element: <span lang=\"es\">Hola mundo</span>.",
                  },
                  {
                    violation: "Empty or vague links",
                    wcag: "2.4.4 Link Purpose (In Context)",
                    prevalence: "45.6% of home pages",
                    severity: "High",
                    fix: "Replace 'click here', 'read more', and 'learn more' with descriptive text: 'Read our accessibility compliance guide'. If a link wraps an image, the image's alt text serves as the link text.",
                  },
                  {
                    violation: "Inaccessible PDF documents",
                    wcag: "Multiple criteria",
                    prevalence: "95% of government PDFs estimated",
                    severity: "High",
                    fix: "Tag PDFs with proper heading structure, reading order, alt text, and table headers. Use Adobe Acrobat's accessibility checker. Better yet: publish content as HTML instead of PDF wherever possible.",
                  },
                  {
                    violation: "Missing captions on video",
                    wcag: "1.2.2 Captions (Prerecorded)",
                    prevalence: "Varies",
                    severity: "Critical",
                    fix: "Add synchronized captions to all prerecorded video with audio. Auto-generated captions must be reviewed and corrected for accuracy. Live events need real-time captioning services.",
                  },
                ].map((item) => (
                  <div key={item.violation} className="rounded-lg border border-slate-700 bg-slate-800/50 p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-white">{item.violation}</h3>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        item.severity === 'Critical' ? 'bg-red-500/20 text-red-400' :
                        item.severity === 'High' ? 'bg-orange-500/20 text-orange-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>{item.severity}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                      <span className="font-mono text-sky-400">{item.wcag}</span>
                      <span>·</span>
                      <span>{item.prevalence}</span>
                    </div>
                    <p className="text-sm text-slate-400"><strong className="text-slate-300">Fix: </strong>{item.fix}</p>
                  </div>
                ))}
              </div>

              <p className="text-slate-300">
                <Link href="/blog/how-to-fix-common-wcag-failures" className="text-sky-400 hover:text-sky-300">
                  See our detailed guide to fixing common WCAG failures →
                </Link>
              </p>

              {/* Section 8: Enforcement */}
              <h2 id="enforcement" className="text-2xl font-bold text-white mt-12">Section 508 Enforcement and Penalties</h2>
              <p className="text-slate-300">
                Section 508 enforcement has historically been weaker than ADA Title III enforcement, but that's changing
                rapidly. Here are the mechanisms that can hold organizations accountable:
              </p>

              <div className="not-prose space-y-3 mt-4 mb-8">
                {[
                  { mechanism: "Administrative Complaints", desc: "Federal employees and members of the public can file complaints with any federal agency. The agency must investigate and resolve. Since 2023, the DOJ has been more aggressive in tracking complaint resolution.", risk: "Moderate" },
                  { mechanism: "Contract Actions", desc: "Federal procurement officers can reject products without adequate VPATs, cancel contracts for non-compliance, or require remediation at the vendor's expense. The GSA's Buy Accessible program actively enforces this.", risk: "High" },
                  { mechanism: "Section 504 Lawsuits", desc: "While Section 508 itself doesn't create a private right of action, Section 504 does. Organizations receiving federal funding can be sued under Section 504 for inaccessible ICT. This is how most enforcement actually happens.", risk: "Very High" },
                  { mechanism: "DOJ Enforcement", desc: "The DOJ can investigate and sue federal agencies and federally-funded organizations. Recent settlements have included multi-million dollar remediation requirements and ongoing monitoring.", risk: "Very High" },
                  { mechanism: "Congressional Oversight", desc: "The Government Accountability Office (GAO) periodically audits federal agency compliance. Findings are public and can lead to budget impacts.", risk: "Moderate" },
                ].map((item) => (
                  <div key={item.mechanism} className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-white">{item.mechanism}</h3>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        item.risk === 'Very High' ? 'bg-red-500/20 text-red-400' :
                        item.risk === 'High' ? 'bg-orange-500/20 text-orange-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>{item.risk} Risk</span>
                    </div>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="not-prose rounded-xl border border-slate-700 bg-slate-800/50 p-6 mt-4 mb-8">
                <h3 className="font-bold text-white text-lg mb-4">Recent Section 508 Enforcement Actions</h3>
                <div className="space-y-3">
                  {[
                    { year: "2025", desc: "DOJ settles with three federal agencies over inaccessible employee-facing systems. Remediation costs exceed $15M combined." },
                    { year: "2024", desc: "GSA removes 12 products from IT Schedule 70 for missing or inaccurate VPATs. Vendors lose access to federal marketplace." },
                    { year: "2024", desc: "National Federation of the Blind files Section 504 complaint against state Medicaid portal. Settlement includes full remediation + $2M+ in damages." },
                    { year: "2023", desc: "DOJ investigation of SSA.gov finds 200+ WCAG violations. Consent decree requires 18-month remediation plan with quarterly progress reports." },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="text-sm font-mono text-sky-400 min-w-[50px]">{item.year}</span>
                      <span className="text-sm text-slate-300">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 9: FAQ */}
              <h2 id="faq" className="text-2xl font-bold text-white mt-12">Frequently Asked Questions</h2>

              <div className="not-prose space-y-4 mt-4 mb-8">
                {[
                  {
                    q: "Does Section 508 apply to my company if we're not a federal agency?",
                    a: "Possibly, yes. If your company sells products or services to federal agencies, receives federal grants or loans, or builds technology used in federally-funded programs, you have Section 508 obligations. The \"federal nexus\" test is broader than most companies realize — an estimated 60,000+ companies are affected.",
                  },
                  {
                    q: "What's the difference between WCAG 2.0 and WCAG 2.1 for Section 508?",
                    a: "Section 508 currently references WCAG 2.0 Level AA (38 success criteria). WCAG 2.1 adds 17 new criteria primarily addressing mobile accessibility, low vision, and cognitive disabilities. While Section 508 technically only requires 2.0, the ADA Title II rule requires 2.1, and the Access Board is expected to update Section 508 to reference 2.1 or 2.2 in the near future. Best practice: target WCAG 2.1 AA now.",
                  },
                  {
                    q: "Do I need a VPAT to sell to the federal government?",
                    a: "In practice, yes. While not technically a legal requirement, federal procurement officers use VPATs (now called Accessibility Conformance Reports or ACRs) to evaluate products. Without one, your product will likely be passed over. The GSA's Buy Accessible program actively requires VPATs for IT Schedule products.",
                  },
                  {
                    q: "Can I use an accessibility overlay widget for Section 508 compliance?",
                    a: "No. Accessibility overlay widgets do not constitute compliance with WCAG 2.0 AA or Section 508. Multiple federal agencies have explicitly rejected overlay-based solutions, and the U.S. Access Board does not recognize overlays as a compliance mechanism. In fact, an overlay provider was fined $1 million in 2025 for deceptive compliance claims.",
                  },
                  {
                    q: "How often should I test for Section 508 compliance?",
                    a: "At minimum: test every major release and conduct a full audit annually. Best practice: run automated scans weekly or with each deployment, conduct manual testing quarterly, and do a comprehensive audit (including assistive technology testing) annually. Content updates, CMS changes, and third-party integrations can introduce new violations at any time.",
                  },
                  {
                    q: "What's the DHS Trusted Tester process?",
                    a: "The Trusted Tester process is DHS's standardized methodology for Section 508 conformance testing. It includes specific test procedures using NVDA, ANDI, and Color Contrast Analyzer. Federal testers can be certified through the DHS Trusted Tester program. The process ensures consistent, reproducible accessibility testing results across agencies.",
                  },
                  {
                    q: "Does Section 508 apply to mobile apps?",
                    a: "Yes. The 2017 refresh covers software applications including mobile apps. Mobile apps must meet the applicable WCAG 2.0 AA criteria plus additional Section 508 requirements for software (such as keyboard accessibility, screen reader compatibility, and platform accessibility API support).",
                  },
                  {
                    q: "What happens if I fail a Section 508 audit?",
                    a: "Consequences depend on your relationship to the federal government. Federal agencies face DOJ enforcement and Congressional oversight. Contractors risk contract termination, payment withholding, and removal from procurement schedules. Grant recipients risk funding loss. In all cases, you'll typically be given a remediation timeline, but repeat violations draw increasingly severe consequences.",
                  },
                ].map((item, i) => (
                  <details key={i} className="rounded-lg border border-slate-700 bg-slate-800/50">
                    <summary className="p-4 cursor-pointer font-semibold text-white hover:text-sky-400 transition-colors">
                      {item.q}
                    </summary>
                    <div className="px-4 pb-4 text-sm text-slate-300 border-t border-slate-700 pt-3">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>

              {/* CTA */}
              <div className="not-prose rounded-xl border border-sky-500/30 bg-sky-500/5 p-8 text-center mt-8 mb-8">
                <h3 className="text-2xl font-bold text-white">Check Your Section 508 Compliance</h3>
                <p className="text-slate-300 mt-3 max-w-2xl mx-auto">
                  Our free scanner tests your website against WCAG 2.0 AA (Section 508) and WCAG 2.1 AA (ADA Title II)
                  simultaneously. Get your compliance score in under 60 seconds.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/#scanner"
                    className="rounded-lg bg-sky-500 px-8 py-3 font-semibold text-white hover:bg-sky-400 transition-colors"
                  >
                    Free Accessibility Scan →
                  </Link>
                  <Link
                    href="/tools/free-accessibility-checker"
                    className="rounded-lg border border-slate-600 px-8 py-3 font-semibold text-slate-300 hover:border-slate-400 transition-colors"
                  >
                    Learn About Our Scanner
                  </Link>
                </div>
              </div>

              {/* Key Resources */}
              <h2 className="text-2xl font-bold text-white mt-12">Key Resources</h2>
              <div className="not-prose space-y-2 mt-4 mb-8">
                {[
                  { label: "Section508.gov — Official Federal Resource", url: "https://www.section508.gov/" },
                  { label: "U.S. Access Board ICT Standards", url: "https://www.access-board.gov/ict/" },
                  { label: "WCAG 2.0 Quick Reference", url: "https://www.w3.org/WAI/WCAG20/quickref/" },
                  { label: "WCAG 2.1 Quick Reference", url: "https://www.w3.org/WAI/WCAG21/quickref/" },
                  { label: "GSA Buy Accessible Program", url: "https://www.section508.gov/buy/" },
                  { label: "DHS Trusted Tester Program", url: "https://www.dhs.gov/trusted-tester" },
                  { label: "VPAT Template Downloads", url: "/tools/vpat-template" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target={link.url.startsWith('/') ? undefined : "_blank"}
                    rel={link.url.startsWith('/') ? undefined : "noopener noreferrer"}
                    className="flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    <span>→</span>
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>

              <div className="not-prose mt-8 pt-8 border-t border-slate-700">
                <p className="text-sm text-slate-400">
                  Related reading: {" "}
                  <Link href="/tools/vpat-template" className="text-sky-400 hover:text-sky-300">
                    VPAT Template & Guide
                  </Link>{" "}
                  · {" "}
                  <Link href="/blog/ada-title-ii-deadline-countdown-2026" className="text-sky-400 hover:text-sky-300">
                    ADA Title II Deadline Countdown
                  </Link>{" "}
                  · {" "}
                  <Link href="/tools/free-accessibility-checker" className="text-sky-400 hover:text-sky-300">
                    Free Accessibility Checker
                  </Link>{" "}
                  · {" "}
                  <Link href="/blog/how-to-fix-common-wcag-failures" className="text-sky-400 hover:text-sky-300">
                    How to Fix Common WCAG Failures
                  </Link>{" "}
                  · {" "}
                  <Link href="/blog/website-accessibility-lawsuit-statistics-2026" className="text-sky-400 hover:text-sky-300">
                    Lawsuit Statistics 2026
                  </Link>
                </p>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}
