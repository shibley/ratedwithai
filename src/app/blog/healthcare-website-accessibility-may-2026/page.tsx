/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title:
    "Healthcare Website Accessibility: May 2026 HHS Deadline Guide | RatedWithAI",
  description:
    "The HHS Section 504 deadline hits May 11, 2026. Healthcare providers accepting Medicare/Medicaid must meet WCAG 2.1 AA or risk losing federal funding. Complete compliance guide with checklist, costs, and timeline.",
  openGraph: {
    title:
      "Healthcare Website Accessibility: The May 2026 Deadline You Can't Ignore",
    description:
      "Healthcare providers have until May 11, 2026 to make websites, apps, and kiosks WCAG 2.1 AA compliant — or risk losing Medicare/Medicaid funding. Here's your complete action plan.",
    type: "article",
    publishedTime: "2026-02-23T00:00:00.000Z",
    authors: ["RatedWithAI Team"],
  },
  keywords: [
    "healthcare website accessibility",
    "may 2026 accessibility deadline",
    "hhs section 504 deadline",
    "healthcare wcag compliance",
    "medical website ada compliance",
    "section 504 healthcare",
    "healthcare accessibility requirements 2026",
    "hospital website accessibility",
    "patient portal accessibility",
    "hhs digital accessibility rule",
    "section 504 final rule",
    "healthcare web accessibility deadline",
    "medicare medicaid accessibility",
    "healthcare accessibility compliance",
  ],
};

export default function HealthcareMay2026DeadlinePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Healthcare Website Accessibility: The May 2026 HHS Deadline Guide",
    description:
      "Complete guide to the May 11, 2026 HHS Section 504 deadline requiring healthcare providers to meet WCAG 2.1 AA standards or risk losing federal funding.",
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
        name: "What is the May 11, 2026 healthcare accessibility deadline?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The HHS Section 504 final rule requires healthcare providers with 15 or more employees who receive federal financial assistance (Medicare, Medicaid, CHIP) to make their websites, mobile apps, and kiosks conform to WCAG 2.1 Level AA by May 11, 2026. Organizations with fewer than 15 employees have until May 10, 2027.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if a healthcare provider doesn't comply by May 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Non-compliant healthcare providers risk losing federal financial assistance — meaning Medicare and Medicaid reimbursements could be suspended or terminated. HHS OCR can also conduct compliance reviews, investigate complaints, and refer violations to the DOJ. Additionally, providers face ADA Title III lawsuits from patients and Section 1557 enforcement actions.",
        },
      },
      {
        "@type": "Question",
        name: "Does the May 2026 deadline apply to my healthcare organization?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If your organization accepts Medicare, Medicaid, or CHIP payments and has 15 or more employees, the May 11, 2026 deadline applies to you. This includes hospitals, health systems, physician practices, behavioral health providers, dental practices, long-term care facilities, and most clinics. Even private practices that receive indirect federal funding through state-administered Medicaid programs are covered.",
        },
      },
      {
        "@type": "Question",
        name: "What WCAG standard must healthcare websites meet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Healthcare providers must meet WCAG 2.1 Level AA, which includes 50 success criteria covering perceivability, operability, understandability, and robustness. Providers may also comply using WCAG 2.2 AA or AAA, which meet or exceed the requirements. The standard applies to all patient-facing web content, mobile apps, and self-service kiosks.",
        },
      },
      {
        "@type": "Question",
        name: "How much does healthcare website accessibility compliance cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Costs vary significantly based on organization size and digital complexity. Small practices (1-5 pages) typically spend $2,000-5,000 for remediation. Mid-size clinics (10-50 pages) may spend $5,000-15,000. Hospital systems with patient portals, telehealth platforms, and multiple sites can expect $15,000-100,000+. Ongoing monitoring with automated tools like RatedWithAI costs $29-49/month. The cost of non-compliance (losing Medicare/Medicaid funding) dwarfs any remediation investment.",
        },
      },
      {
        "@type": "Question",
        name: "What's the difference between the April 2026 ADA Title II deadline and the May 2026 HHS deadline?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The April 24, 2026 deadline is the DOJ's ADA Title II rule requiring state and local government websites to meet WCAG 2.1 AA. The May 11, 2026 HHS Section 504 deadline applies specifically to healthcare providers receiving federal financial assistance. Some organizations (like public hospitals) are subject to BOTH deadlines. The key difference: ADA Title II targets government entities, while Section 504 targets any healthcare provider taking Medicare/Medicaid.",
        },
      },
      {
        "@type": "Question",
        name: "Are patient portals covered by the May 2026 accessibility deadline?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The HHS rule explicitly covers websites, mobile applications, and kiosks. Patient portals — including features like appointment scheduling, lab results, messaging, prescription refills, and health record access — must be fully WCAG 2.1 AA compliant. This is especially critical because inaccessible patient portals directly impact health outcomes for patients with disabilities.",
        },
      },
      {
        "@type": "Question",
        name: "Can healthcare providers use accessibility overlays to comply with Section 504?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Accessibility overlay widgets do not provide genuine WCAG compliance and are not recommended for meeting Section 504 requirements. The FTC fined accessiBe $1 million for deceptive practices, and over 25% of ADA lawsuits now cite overlay usage. HHS OCR expects actual code-level remediation and conformance with WCAG 2.1 AA success criteria — not a JavaScript widget layered on top of inaccessible code.",
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
          <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-red-500/30 via-rose-500/20 to-orange-500/30 blur-3xl" />
          <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-gradient-to-tr from-red-500/20 via-rose-500/10 to-orange-500/20 blur-3xl" />

          <Header />

          <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-14 pt-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-sm text-red-400">
              ⚠️ DEADLINE ALERT — 77 DAYS REMAINING
            </div>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              Healthcare Website Accessibility: The May 2026 HHS Deadline That Could Cut Your Federal Funding
            </h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              On May 11, 2026, every healthcare provider that accepts Medicare, Medicaid, or CHIP
              must have websites, mobile apps, and patient kiosks that meet WCAG 2.1 Level AA. The
              penalty isn't a fine — it's the loss of federal funding. Most providers still don't know
              this deadline exists.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
              <time dateTime="2026-02-23">February 23, 2026</time>
              <span>·</span>
              <span>18 min read</span>
            </div>

            {/* Countdown urgency box */}
            <div className="mt-10 rounded-xl border border-red-500/40 bg-red-500/5 p-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-red-400">77</div>
                  <div className="text-sm text-slate-400 mt-1">Days Until Deadline</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-orange-400">3</div>
                  <div className="text-sm text-slate-400 mt-1">Overlapping Laws</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-amber-400">50</div>
                  <div className="text-sm text-slate-400 mt-1">WCAG Criteria to Meet</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-rose-400">$0</div>
                  <div className="text-sm text-slate-400 mt-1">in Revenue if Non-Compliant</div>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="mt-10 rounded-xl border border-slate-700 bg-slate-800/50 p-6">
              <h2 className="font-bold text-white text-lg mb-4">
                Table of Contents
              </h2>
              <nav className="space-y-2 text-sm">
                {[
                  { label: "The Deadline Nobody's Talking About", id: "the-deadline" },
                  { label: "Three Laws, One Deadline: The Legal Framework", id: "three-laws" },
                  { label: "Who Must Comply (It's More Than You Think)", id: "who-must-comply" },
                  { label: "What Exactly Must Be Accessible", id: "what-must-be-accessible" },
                  { label: "WCAG 2.1 AA: The 50 Criteria Healthcare Websites Must Meet", id: "wcag-requirements" },
                  { label: "The Enforcement Reality: What Non-Compliance Looks Like", id: "enforcement" },
                  { label: "Healthcare Accessibility Checklist (20 Items)", id: "checklist" },
                  { label: "Common Healthcare Website Accessibility Failures", id: "common-failures" },
                  { label: "Patient Portal Accessibility: A Special Challenge", id: "patient-portals" },
                  { label: "Telehealth and Mobile App Requirements", id: "telehealth" },
                  { label: "Kiosk Accessibility: The Forgotten Requirement", id: "kiosks" },
                  { label: "How Much Will This Cost?", id: "costs" },
                  { label: "12-Week Sprint Plan: How to Comply by May 11", id: "sprint-plan" },
                  { label: "Why Overlays Won't Save You", id: "overlays" },
                  { label: "Frequently Asked Questions", id: "faq" },
                ].map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block text-slate-400 hover:text-sky-400 transition-colors"
                  >
                    → {item.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* --- SECTION 1: The Deadline --- */}
            <div id="the-deadline" className="mt-16">
              <h2 className="text-3xl font-bold text-white">
                The Deadline Nobody's Talking About
              </h2>
              <p className="mt-4 text-slate-300 leading-relaxed">
                On May 9, 2024, the U.S. Department of Health and Human Services (HHS), through its
                Office for Civil Rights (OCR), published a{" "}
                <a
                  href="https://www.hhs.gov/civil-rights/for-individuals/section-504/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:underline"
                >
                  final rule updating Section 504
                </a>{" "}
                of the Rehabilitation Act. For the first time, this rule establishes mandatory digital
                accessibility standards for healthcare providers.
              </p>
              <p className="mt-4 text-slate-300 leading-relaxed">
                The rule creates two staggered deadlines:
              </p>

              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-sm border border-slate-700">
                  <thead className="bg-slate-800/80">
                    <tr>
                      <th className="text-left p-3 border-b border-slate-700 text-slate-200">
                        Deadline
                      </th>
                      <th className="text-left p-3 border-b border-slate-700 text-slate-200">
                        Organization Size
                      </th>
                      <th className="text-left p-3 border-b border-slate-700 text-slate-200">
                        Requirement
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-red-500/5 border-b border-slate-700">
                      <td className="p-3 font-bold text-red-400">May 11, 2026</td>
                      <td className="p-3 text-slate-300">15+ employees</td>
                      <td className="p-3 text-slate-300">
                        WCAG 2.1 Level AA for all patient-facing web content, mobile apps, and kiosks
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700">
                      <td className="p-3 font-bold text-amber-400">May 10, 2027</td>
                      <td className="p-3 text-slate-300">Fewer than 15 employees</td>
                      <td className="p-3 text-slate-300">
                        Same WCAG 2.1 Level AA requirements
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-6 text-slate-300 leading-relaxed">
                This isn't an extension of existing guidelines or a best-practice suggestion. It's a
                binding federal regulation with the most severe enforcement mechanism available:{" "}
                <strong className="text-white">
                  loss of federal financial assistance
                </strong>
                . For most healthcare providers, that means losing Medicare and Medicaid
                reimbursements — the financial lifeline of American healthcare.
              </p>
              <p className="mt-4 text-slate-300 leading-relaxed">
                And here's what makes this deadline particularly dangerous: it arrives just 17 days
                after the{" "}
                <Link
                  href="/blog/ada-title-ii-deadline-countdown-2026"
                  className="text-sky-400 hover:underline"
                >
                  April 24, 2026 ADA Title II deadline
                </Link>
                . Public hospitals and government-funded health facilities may be subject to{" "}
                <strong className="text-white">both</strong> deadlines simultaneously.
              </p>
            </div>

            {/* --- SECTION 2: Three Laws --- */}
            <div id="three-laws" className="mt-16">
              <h2 className="text-3xl font-bold text-white">
                Three Laws, One Deadline: The Legal Framework
              </h2>
              <p className="mt-4 text-slate-300 leading-relaxed">
                Healthcare digital accessibility sits at the intersection of three overlapping federal
                laws. Each carries its own triggers, enforcement bodies, and penalties. Most healthcare
                providers are aware of one. Almost none understand how all three apply simultaneously.
              </p>

              {/* Law 1: ADA Title III */}
              <div className="mt-8 rounded-xl border border-slate-700 bg-slate-800/30 p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 text-sm font-bold">
                    1
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    ADA Title III — Public Accommodation
                  </h3>
                </div>
                <p className="mt-3 text-slate-300 leading-relaxed">
                  The Americans with Disabilities Act prohibits discrimination against individuals with
                  disabilities in places of public accommodation. The DOJ has consistently interpreted this
                  to include websites operated by businesses serving the public — and healthcare providers
                  clearly qualify.
                </p>
                <ul className="mt-4 space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span><strong className="text-white">Enforced through:</strong> Private lawsuits from patients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span><strong className="text-white">Standard:</strong> Courts reference WCAG 2.1 AA (no statutory mandate yet)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span><strong className="text-white">Penalties:</strong> Injunctive relief, attorney's fees, monetary settlements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span><strong className="text-white">Key fact:</strong> Applies <em>regardless</em> of whether you receive federal funding</span>
                  </li>
                </ul>
                <p className="mt-4 text-slate-400 text-sm">
                  In 2025, 8,667 ADA accessibility lawsuits were filed —{" "}
                  <Link
                    href="/blog/website-accessibility-lawsuit-statistics-2026"
                    className="text-sky-400 hover:underline"
                  >
                    and healthcare is a top-5 target industry
                  </Link>
                  .
                </p>
              </div>

              {/* Law 2: Section 504 */}
              <div className="mt-6 rounded-xl border border-red-500/30 bg-red-500/5 p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-500/20 text-red-400 text-sm font-bold">
                    2
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    Section 504 — Federal Funding Recipients ⚠️ THE MAY 2026 DEADLINE
                  </h3>
                </div>
                <p className="mt-3 text-slate-300 leading-relaxed">
                  Section 504 of the Rehabilitation Act prohibits disability discrimination by any program
                  receiving federal financial assistance. The HHS OCR final rule published May 9, 2024
                  updated Section 504 to include specific digital accessibility mandates for the first
                  time.
                </p>
                <ul className="mt-4 space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span><strong className="text-white">Enforced by:</strong> HHS Office for Civil Rights (government enforcement)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span><strong className="text-white">Standard:</strong> Explicit WCAG 2.1 Level AA requirement (binding)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span><strong className="text-white">Penalty:</strong> Loss of federal funding — Medicare/Medicaid reimbursements terminated</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span><strong className="text-white">Scope:</strong> Websites, mobile apps, patient portals, kiosks</span>
                  </li>
                </ul>
              </div>

              {/* Law 3: Section 1557 */}
              <div className="mt-6 rounded-xl border border-slate-700 bg-slate-800/30 p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/20 text-purple-400 text-sm font-bold">
                    3
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    Section 1557 — Affordable Care Act
                  </h3>
                </div>
                <p className="mt-3 text-slate-300 leading-relaxed">
                  Section 1557 is the healthcare-specific civil rights provision of the ACA. It prohibits
                  discrimination on the basis of race, color, national origin, sex, age, or disability in
                  health programs receiving federal financial assistance. For digital accessibility, it
                  adds a critical dimension: language access requirements alongside disability
                  accessibility.
                </p>
                <ul className="mt-4 space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span><strong className="text-white">Enforced by:</strong> HHS OCR + private right of action</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span><strong className="text-white">Adds:</strong> Language accessibility + disability accessibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span><strong className="text-white">Penalties:</strong> Loss of funding + compensatory damages</span>
                  </li>
                </ul>
              </div>

              {/* Comparison table */}
              <div className="mt-8 overflow-x-auto">
                <table className="w-full text-sm border border-slate-700">
                  <thead className="bg-slate-800/80">
                    <tr>
                      <th className="text-left p-3 border-b border-slate-700 text-slate-200">
                        Factor
                      </th>
                      <th className="text-left p-3 border-b border-slate-700 text-slate-200">
                        ADA Title III
                      </th>
                      <th className="text-left p-3 border-b border-slate-700 text-red-300">
                        Section 504
                      </th>
                      <th className="text-left p-3 border-b border-slate-700 text-slate-200">
                        Section 1557
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="border-b border-slate-700">
                      <td className="p-3 font-medium text-white">Applies to</td>
                      <td className="p-3">All public-facing businesses</td>
                      <td className="p-3">Federal funding recipients</td>
                      <td className="p-3">Health programs w/ federal funding</td>
                    </tr>
                    <tr className="border-b border-slate-700 bg-slate-800/20">
                      <td className="p-3 font-medium text-white">Technical standard</td>
                      <td className="p-3">WCAG 2.1 AA (court-referenced)</td>
                      <td className="p-3">WCAG 2.1 AA (mandatory)</td>
                      <td className="p-3">References Section 504 standards</td>
                    </tr>
                    <tr className="border-b border-slate-700">
                      <td className="p-3 font-medium text-white">Enforcement</td>
                      <td className="p-3">Private lawsuits</td>
                      <td className="p-3">HHS OCR + DOJ referral</td>
                      <td className="p-3">HHS OCR + private lawsuits</td>
                    </tr>
                    <tr className="border-b border-slate-700 bg-slate-800/20">
                      <td className="p-3 font-medium text-white">Primary penalty</td>
                      <td className="p-3">Settlement + attorney fees</td>
                      <td className="p-3 text-red-400 font-bold">Loss of federal funding</td>
                      <td className="p-3">Loss of funding + damages</td>
                    </tr>
                    <tr className="border-b border-slate-700">
                      <td className="p-3 font-medium text-white">Deadline</td>
                      <td className="p-3">No specific deadline</td>
                      <td className="p-3 text-red-400 font-bold">May 11, 2026</td>
                      <td className="p-3">Ongoing enforcement</td>
                    </tr>
                    <tr className="border-b border-slate-700 bg-slate-800/20">
                      <td className="p-3 font-medium text-white">Federal funding needed?</td>
                      <td className="p-3">No</td>
                      <td className="p-3">Yes</td>
                      <td className="p-3">Yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 rounded-lg border border-amber-500/30 bg-amber-500/5 p-4">
                <p className="text-amber-300 text-sm font-medium">
                  ⚡ Bottom line: Most healthcare providers are subject to <em>all three</em> laws
                  simultaneously. Even if Section 504 somehow didn't apply to you, ADA Title III still
                  exposes you to patient lawsuits with no deadline and no funding requirement.
                </p>
              </div>
            </div>

            {/* --- SECTION 3: Who Must Comply --- */}
            <div id="who-must-comply" className="mt-16">
              <h2 className="text-3xl font-bold text-white">
                Who Must Comply (It's More Than You Think)
              </h2>
              <p className="mt-4 text-slate-300 leading-relaxed">
                "Federal financial assistance" casts a far wider net than most providers realize. If your
                organization accepts Medicare, Medicaid, or CHIP payments in any form, you're covered by
                Section 504. That includes the vast majority of healthcare providers in the United States.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: "🏥",
                    title: "Hospitals & Health Systems",
                    desc: "Virtually all hospitals accept Medicare/Medicaid. Multi-site systems face the largest remediation scope.",
                  },
                  {
                    icon: "👨‍⚕️",
                    title: "Physician Practices",
                    desc: "Any practice accepting Medicare or Medicaid patients — including through state-administered programs.",
                  },
                  {
                    icon: "🧠",
                    title: "Behavioral Health Providers",
                    desc: "Mental health clinics, substance abuse treatment centers, and psychiatric facilities receiving Medicaid.",
                  },
                  {
                    icon: "🦷",
                    title: "Dental Practices",
                    desc: "Practices accepting Medicaid dental benefits (all states offer children's dental Medicaid).",
                  },
                  {
                    icon: "🏠",
                    title: "Long-Term Care Facilities",
                    desc: "Nursing homes, assisted living facilities, and home health agencies — heavily Medicaid-dependent.",
                  },
                  {
                    icon: "💊",
                    title: "Pharmacies",
                    desc: "Chain and independent pharmacies participating in Medicare Part D or Medicaid prescription programs.",
                  },
                  {
                    icon: "🔬",
                    title: "Labs & Diagnostic Centers",
                    desc: "Clinical laboratories, imaging centers, and diagnostic facilities billing Medicare/Medicaid.",
                  },
                  {
                    icon: "🏫",
                    title: "Academic Medical Centers",
                    desc: "Teaching hospitals and university health systems — subject to BOTH Section 504 and ADA Title II.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-slate-700 bg-slate-800/30 p-5"
                  >
                    <div className="text-2xl">{item.icon}</div>
                    <h3 className="mt-2 font-bold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-lg border border-rose-500/30 bg-rose-500/5 p-4">
                <p className="text-rose-300 text-sm font-medium">
                  🚨 Common misconception: "We're a private practice — Section 504 doesn't apply to us."
                  Wrong. Even private practices that receive <em>indirect</em> federal funding through
                  state-administered Medicaid programs are covered. If any of your patients have Medicare
                  or Medicaid, you're almost certainly subject to this rule.
                </p>
              </div>
            </div>

            {/* --- SECTION 4: What Must Be Accessible --- */}
            <div id="what-must-be-accessible" className="mt-16">
              <h2 className="text-3xl font-bold text-white">
                What Exactly Must Be Accessible
              </h2>
              <p className="mt-4 text-slate-300 leading-relaxed">
                The HHS rule explicitly covers three categories of patient-facing digital technology.
                This goes well beyond your main website.
              </p>

              <div className="mt-8 space-y-6">
                {/* Websites */}
                <div className="rounded-xl border border-slate-700 bg-slate-800/30 p-6">
                  <h3 className="text-xl font-bold text-white">🌐 Websites</h3>
                  <p className="mt-2 text-slate-300">
                    All patient-facing web content must be WCAG 2.1 AA compliant, including:
                  </p>
                  <div className="mt-4 grid gap-2 sm:grid-cols-2 text-sm">
                    {[
                      "Appointment scheduling systems",
                      "Provider/physician directories",
                      "Patient education pages",
                      "Billing and payment portals",
                      "Insurance/coverage information",
                      "Contact and location pages",
                      "Health condition resources",
                      "COVID/vaccine information",
                      "Prescription refill requests",
                      "Patient registration forms",
                      "Financial assistance applications",
                      "Health plan comparison tools",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-slate-300"
                      >
                        <span className="text-sky-400">✓</span> {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Apps */}
                <div className="rounded-xl border border-slate-700 bg-slate-800/30 p-6">
                  <h3 className="text-xl font-bold text-white">📱 Mobile Applications</h3>
                  <p className="mt-2 text-slate-300">
                    Every mobile app used by patients must be accessible:
                  </p>
                  <div className="mt-4 grid gap-2 sm:grid-cols-2 text-sm">
                    {[
                      "Telehealth/video visit apps",
                      "Appointment management",
                      "Prescription refill apps",
                      "Health record access (MyChart, etc.)",
                      "Patient messaging/chat",
                      "Symptom checkers",
                      "Medication reminders",
                      "Lab results viewing",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-slate-300"
                      >
                        <span className="text-sky-400">✓</span> {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Kiosks */}
                <div className="rounded-xl border border-slate-700 bg-slate-800/30 p-6">
                  <h3 className="text-xl font-bold text-white">🖥️ Self-Service Kiosks</h3>
                  <p className="mt-2 text-slate-300">
                    Physical kiosks in healthcare facilities must also meet accessibility standards:
                  </p>
                  <div className="mt-4 grid gap-2 sm:grid-cols-2 text-sm">
                    {[
                      "Check-in terminals",
                      "Wayfinding stations",
                      "Payment systems",
                      "Prescription pickup kiosks",
                      "Information kiosks",
                      "Queue management displays",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-slate-300"
                      >
                        <span className="text-sky-400">✓</span> {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* --- SECTION 5: WCAG Requirements --- */}
            <div id="wcag-requirements" className="mt-16">
              <h2 className="text-3xl font-bold text-white">
                WCAG 2.1 AA: The 50 Criteria Healthcare Websites Must Meet
              </h2>
              <p className="mt-4 text-slate-300 leading-relaxed">
                WCAG 2.1 Level AA includes 50 success criteria organized under four principles known as{" "}
                <Link href="/blog/wcag-compliance-guide" className="text-sky-400 hover:underline">
                  POUR
                </Link>
                . Healthcare providers may also comply using WCAG 2.2 AA or AAA, which meet or exceed the
                requirements.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    principle: "Perceivable",
                    color: "sky",
                    count: 13,
                    examples: [
                      "Alt text for medical images and diagrams",
                      "Captions for telehealth video content",
                      "Sufficient color contrast (4.5:1 minimum)",
                      "Content resizable to 200% without loss",
                    ],
                  },
                  {
                    principle: "Operable",
                    color: "green",
                    count: 16,
                    examples: [
                      "Keyboard navigation for all appointment booking",
                      "No time limits on patient form submissions",
                      "Skip navigation on complex portal pages",
                      "Focus indicators visible on all interactive elements",
                    ],
                  },
                  {
                    principle: "Understandable",
                    color: "amber",
                    count: 8,
                    examples: [
                      "Clear error messages on patient forms",
                      "Consistent navigation across portal pages",
                      "Language of page identified in HTML",
                      "Input assistance for medical form fields",
                    ],
                  },
                  {
                    principle: "Robust",
                    color: "purple",
                    count: 3,
                    examples: [
                      "Valid HTML for screen reader compatibility",
                      "Name, role, value for custom components",
                      "Status messages accessible to assistive tech",
                    ],
                  },
                ].map((p) => (
                  <div
                    key={p.principle}
                    className="rounded-xl border border-slate-700 bg-slate-800/30 p-5"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-white text-lg">{p.principle}</h3>
                      <span className="text-sm text-slate-400">{p.count} criteria</span>
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-slate-300">
                      {p.examples.map((ex) => (
                        <li key={ex} className="flex items-start gap-2">
                          <span
                            className={`mt-0.5 text-${p.color}-400`}
                          >
                            •
                          </span>
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-slate-300 leading-relaxed">
                For a complete breakdown of every WCAG criterion and how to test for it, see our{" "}
                <Link
                  href="/blog/wcag-compliance-guide"
                  className="text-sky-400 hover:underline"
                >
                  WCAG Compliance Guide
                </Link>{" "}
                and{" "}
                <Link
                  href="/blog/ada-compliance-checklist-2026"
                  className="text-sky-400 hover:underline"
                >
                  ADA Compliance Checklist
                </Link>
                .
              </p>
            </div>

            {/* --- SECTION 6: Enforcement --- */}
            <div id="enforcement" className="mt-16">
              <h2 className="text-3xl font-bold text-white">
                The Enforcement Reality: What Non-Compliance Looks Like
              </h2>
              <p className="mt-4 text-slate-300 leading-relaxed">
                Unlike ADA Title III — where enforcement depends on individual patient lawsuits —
                Section 504 gives the government proactive enforcement power. Here's what that means
                in practice:
              </p>

              <div className="mt-8 space-y-4">
                {[
                  {
                    title: "HHS OCR Complaint Investigation",
                    desc: "Any patient can file a complaint with the HHS Office for Civil Rights. OCR investigates and can require corrective action plans with mandatory timelines.",
                    severity: "Likely",
                    color: "amber",
                  },
                  {
                    title: "Proactive Compliance Reviews",
                    desc: "OCR can initiate compliance reviews without a complaint — targeting healthcare organizations for audits, especially after the deadline passes.",
                    severity: "Possible",
                    color: "orange",
                  },
                  {
                    title: "DOJ Referral",
                    desc: "If an organization refuses to cooperate or fails to remediate, OCR refers the case to the Department of Justice for enforcement action.",
                    severity: "Escalation",
                    color: "red",
                  },
                  {
                    title: "Loss of Federal Funding",
                    desc: "The ultimate penalty: suspension or termination of all federal financial assistance. For most healthcare providers, this means losing Medicare and Medicaid reimbursements — often 40-70% of total revenue.",
                    severity: "Terminal",
                    color: "rose",
                  },
                  {
                    title: "Concurrent ADA Lawsuits",
                    desc: "While OCR investigates, patients can simultaneously file ADA Title III lawsuits. Non-compliance with Section 504 strengthens these cases significantly.",
                    severity: "Ongoing",
                    color: "purple",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-slate-700 bg-slate-800/30 p-5 flex gap-4"
                  >
                    <div className="shrink-0">
                      <span
                        className={`inline-flex rounded-full bg-${item.color}-500/10 border border-${item.color}-500/30 px-3 py-1 text-xs font-medium text-${item.color}-400`}
                      >
                        {item.severity}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-lg border border-red-500/30 bg-red-500/5 p-4">
                <p className="text-red-300 text-sm font-medium">
                  💀 The math is simple: A hospital that loses Medicare reimbursements loses
                  approximately 40-70% of its revenue overnight. No healthcare organization can
                  survive that. Accessibility remediation — even at $100,000 — is a rounding error
                  compared to the cost of non-compliance.
                </p>
              </div>
            </div>

            {/* --- SECTION 7: Healthcare Checklist --- */}
            <div id="checklist" className="mt-16">
              <h2 className="text-3xl font-bold text-white">
                Healthcare Accessibility Checklist (20 Items)
              </h2>
              <p className="mt-4 text-slate-300 leading-relaxed">
                This checklist covers the most critical and commonly failed accessibility requirements
                for healthcare websites. Use this as your starting audit:
              </p>

              <div className="mt-8 space-y-3">
                {[
                  { category: "Navigation & Structure", items: [
                    "Skip navigation link present on all pages",
                    "Logical heading hierarchy (H1 → H2 → H3) on every page",
                    "All navigation menus fully keyboard-accessible",
                    "Breadcrumbs or other wayfinding for complex portals",
                  ]},
                  { category: "Forms & Patient Input", items: [
                    "All form fields have associated labels (not placeholder-only)",
                    "Error messages are specific, descriptive, and programmatically linked",
                    "No session timeouts during patient form submission (or extend option)",
                    "Required fields clearly identified (not by color alone)",
                  ]},
                  { category: "Visual & Media", items: [
                    "Alt text on all medical images, diagrams, and icons",
                    "Color contrast meets 4.5:1 ratio (3:1 for large text)",
                    "Captions on all telehealth and educational video content",
                    "No information conveyed by color alone (test results, status indicators)",
                  ]},
                  { category: "Content & Readability", items: [
                    "Page language declared in HTML lang attribute",
                    "Content readable at 200% zoom without horizontal scroll",
                    "Link text is descriptive (no 'click here' or 'read more')",
                    "Tables have proper headers and captions for data presentation",
                  ]},
                  { category: "Interactive Elements", items: [
                    "Appointment booking fully usable with keyboard only",
                    "Focus indicators visible on all clickable/interactive elements",
                    "Custom components (date pickers, dropdowns) have proper ARIA roles",
                    "Modal dialogs trap and return focus correctly",
                  ]},
                ].map((section) => (
                  <div key={section.category}>
                    <h3 className="text-lg font-bold text-white mt-6 mb-3">
                      {section.category}
                    </h3>
                    {section.items.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 rounded-lg border border-slate-700/50 bg-slate-800/20 p-3 mb-2"
                      >
                        <span className="mt-0.5 h-5 w-5 shrink-0 rounded border border-slate-600 bg-slate-700/50 flex items-center justify-center text-xs text-slate-500">
                          ☐
                        </span>
                        <span className="text-sm text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl border border-sky-500/30 bg-sky-500/5 p-5 text-center">
                <p className="text-slate-300">
                  Want an automated baseline? Run a free scan on your healthcare website:
                </p>
                <Link
                  href="/tools/free-accessibility-checker"
                  className="mt-3 inline-flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-2.5 font-medium text-white hover:bg-sky-600 transition-colors"
                >
                  Scan Your Healthcare Website Free →
                </Link>
                <p className="mt-2 text-xs text-slate-500">
                  Powered by axe-core · WCAG 2.1 AA · No signup required
                </p>
              </div>
            </div>

            {/* --- SECTION 8: Common Failures --- */}
            <div id="common-failures" className="mt-16">
              <h2 className="text-3xl font-bold text-white">
                Common Healthcare Website Accessibility Failures
              </h2>
              <p className="mt-4 text-slate-300 leading-relaxed">
                Based on audits of hundreds of healthcare websites, these are the most frequently
                encountered accessibility failures:
              </p>

              <div className="mt-8 space-y-4">
                {[
                  {
                    failure: "Inaccessible Appointment Booking",
                    impact: "Critical",
                    desc: "Date pickers, time slot selectors, and multi-step booking flows that can't be operated with a keyboard or screen reader. A blind patient literally cannot book an appointment.",
                    fix: "Replace custom date pickers with accessible alternatives. Ensure each step has proper labels, focus management, and ARIA live regions for dynamic updates.",
                  },
                  {
                    failure: "PDF Documents Without Tags",
                    impact: "Critical",
                    desc: "Patient intake forms, medical records, billing statements, and educational materials published as untagged PDFs. Screen readers can't parse the content.",
                    fix: "Tag all PDFs with proper reading order, alt text, and form field labels. Better yet: offer HTML alternatives for all critical documents.",
                  },
                  {
                    failure: "Missing Alt Text on Medical Images",
                    impact: "High",
                    desc: "X-rays, diagrams, facility photos, and doctor portraits with empty or missing alt attributes. Provider directories are a major offender.",
                    fix: "Add descriptive alt text to every meaningful image. Decorative images should use empty alt=\"\" attributes.",
                  },
                  {
                    failure: "Color-Only Test Results",
                    impact: "High",
                    desc: "Lab results displayed with only color coding (red = abnormal, green = normal) — completely invisible to colorblind patients and screen reader users.",
                    fix: "Supplement color with text labels, icons, or patterns. Always provide text equivalents for status information.",
                  },
                  {
                    failure: "Session Timeouts on Patient Forms",
                    impact: "High",
                    desc: "Patients with motor or cognitive disabilities need more time to complete forms. Abrupt session expiration loses entered data — causing frustration and abandonment.",
                    fix: "Warn before timeout, offer extension option (at least 10x the initial limit per WCAG 2.2.1), and preserve entered data.",
                  },
                  {
                    failure: "Inaccessible Telehealth Platforms",
                    impact: "Critical",
                    desc: "Video conferencing interfaces with unlabeled buttons, missing keyboard controls, and no captions. Deaf or low-vision patients can't participate in their own care.",
                    fix: "Ensure telehealth vendor provides WCAG 2.1 AA VPAT. Add real-time captions, keyboard controls, and proper button labels.",
                  },
                ].map((item) => (
                  <div
                    key={item.failure}
                    className="rounded-xl border border-slate-700 bg-slate-800/30 p-5"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-white">{item.failure}</h3>
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                          item.impact === "Critical"
                            ? "bg-red-500/15 text-red-400 border border-red-500/30"
                            : "bg-orange-500/15 text-orange-400 border border-orange-500/30"
                        }`}
                      >
                        {item.impact}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-slate-400">{item.desc}</p>
                    <p className="mt-3 text-sm text-slate-300">
                      <strong className="text-green-400">Fix:</strong> {item.fix}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* --- SECTION 9: Patient Portals --- */}
            <div id="patient-portals" className="mt-16">
              <h2 className="text-3xl font-bold text-white">
                Patient Portal Accessibility: A Special Challenge
              </h2>
              <p className="mt-4 text-slate-300 leading-relaxed">
                Patient portals deserve separate attention because they represent the most complex and
                highest-stakes accessibility challenge for healthcare organizations. An inaccessible
                patient portal doesn't just violate the law — it directly harms patient health outcomes.
              </p>
              <p className="mt-4 text-slate-300 leading-relaxed">
                Consider what a patient portal typically includes: lab results, medication lists,
                appointment scheduling, provider messaging, prescription refills, and billing. When any
                of these features are inaccessible, a patient with a disability is denied equal access to
                their own healthcare.
              </p>

              <div className="mt-8 rounded-xl border border-slate-700 bg-slate-800/30 p-6">
                <h3 className="font-bold text-white text-lg mb-4">
                  Key Patient Portal Accessibility Requirements
                </h3>
                <ul className="space-y-3 text-sm text-slate-300">
                  {[
                    "Lab results must be presented in accessible tables with proper headers — not as images or color-only displays",
                    "Medication lists must work with screen readers, including dosage, frequency, and refill status",
                    "Appointment scheduling must be fully keyboard-operable, including date/time selection",
                    "Secure messaging must support screen readers for both composing and reading messages",
                    "Billing statements must be in accessible HTML or tagged PDF format",
                    "Login/authentication must be accessible — including MFA flows and security questions",
                    "All notification modals and alerts must announce to assistive technology",
                    "Document upload functionality must be keyboard-accessible with clear instructions",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-sky-400 mt-0.5 shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 text-slate-300 leading-relaxed">
                If your organization uses Epic MyChart, Cerner, or another major EHR portal, check with
                your vendor for their WCAG 2.1 AA{" "}
                <Link href="/tools/vpat-template" className="text-sky-400 hover:underline">
                  VPAT documentation
                </Link>
                . But don't assume the vendor has you covered — customizations, third-party integrations,
                and facility-specific content are your responsibility to make accessible.
              </p>
            </div>

            {/* --- SECTION 10: Telehealth --- */}
            <div id="telehealth" className="mt-16">
              <h2 className="text-3xl font-bold text-white">
                Telehealth and Mobile App Requirements
              </h2>
              <p className="mt-4 text-slate-300 leading-relaxed">
                The HHS rule explicitly includes mobile applications and telehealth platforms. With
                telehealth usage remaining significantly above pre-pandemic levels, this is a critical
                compliance area that many organizations overlook.
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-slate-700 bg-slate-800/30 p-5">
                  <h3 className="font-bold text-white">Telehealth Platform Requirements</h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300">
                    <li>• Real-time captioning for deaf/hard-of-hearing patients</li>
                    <li>• Screen reader compatibility for all interface controls</li>
                    <li>• Keyboard navigation for joining, muting, screen sharing, chat</li>
                    <li>• High contrast mode support for low-vision users</li>
                    <li>• Accessible waiting room experiences</li>
                    <li>• Compatible with assistive technologies (JAWS, NVDA, VoiceOver)</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-slate-700 bg-slate-800/30 p-5">
                  <h3 className="font-bold text-white">Mobile App Requirements</h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300">
                    <li>• All touch targets at least 44×44 CSS pixels (WCAG 2.5.8)</li>
                    <li>• VoiceOver (iOS) and TalkBack (Android) compatibility</li>
                    <li>• Support for system text size settings and high contrast</li>
                    <li>• Accessible push notifications with proper labeling</li>
                    <li>• No gesture-only interactions without alternatives</li>
                    <li>• Biometric login alternatives (fingerprint, face ID) alongside accessible fallbacks</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* --- SECTION 11: Kiosks --- */}
            <div id="kiosks" className="mt-16">
              <h2 className="text-3xl font-bold text-white">
                Kiosk Accessibility: The Forgotten Requirement
              </h2>
              <p className="mt-4 text-slate-300 leading-relaxed">
                Self-service kiosks are the requirement most healthcare organizations miss entirely.
                Check-in terminals, wayfinding stations, and payment kiosks must all be accessible to
                patients with disabilities. This includes:
              </p>
              <ul className="mt-4 space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-sky-400">•</span>
                  <span><strong className="text-white">Physical accessibility:</strong> Reachable height, wheelchair approach clearance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400">•</span>
                  <span><strong className="text-white">Screen accessibility:</strong> Touch targets, contrast, text sizing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400">•</span>
                  <span><strong className="text-white">Audio output:</strong> Headphone jack for private audio feedback</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400">•</span>
                  <span><strong className="text-white">Alternative access:</strong> Staff-assisted option must always be available</span>
                </li>
              </ul>
            </div>

            {/* --- SECTION 12: Costs --- */}
            <div id="costs" className="mt-16">
              <h2 className="text-3xl font-bold text-white">How Much Will This Cost?</h2>
              <p className="mt-4 text-slate-300 leading-relaxed">
                The cost of accessibility remediation varies significantly based on organization size,
                digital property complexity, and current accessibility maturity. Here's a realistic
                breakdown:
              </p>

              <div className="mt-8 overflow-x-auto">
                <table className="w-full text-sm border border-slate-700">
                  <thead className="bg-slate-800/80">
                    <tr>
                      <th className="text-left p-3 border-b border-slate-700 text-slate-200">
                        Organization Type
                      </th>
                      <th className="text-left p-3 border-b border-slate-700 text-slate-200">
                        Typical Scope
                      </th>
                      <th className="text-left p-3 border-b border-slate-700 text-slate-200">
                        Estimated Cost
                      </th>
                      <th className="text-left p-3 border-b border-slate-700 text-slate-200">
                        Timeline
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="border-b border-slate-700">
                      <td className="p-3 font-medium text-white">Small Practice</td>
                      <td className="p-3">1-10 pages, basic forms</td>
                      <td className="p-3">$2,000 – $5,000</td>
                      <td className="p-3">2-4 weeks</td>
                    </tr>
                    <tr className="border-b border-slate-700 bg-slate-800/20">
                      <td className="p-3 font-medium text-white">Mid-Size Clinic</td>
                      <td className="p-3">10-50 pages, scheduling</td>
                      <td className="p-3">$5,000 – $15,000</td>
                      <td className="p-3">4-8 weeks</td>
                    </tr>
                    <tr className="border-b border-slate-700">
                      <td className="p-3 font-medium text-white">Multi-Location Group</td>
                      <td className="p-3">50-200 pages, portal</td>
                      <td className="p-3">$15,000 – $40,000</td>
                      <td className="p-3">6-12 weeks</td>
                    </tr>
                    <tr className="border-b border-slate-700 bg-slate-800/20">
                      <td className="p-3 font-medium text-white">Hospital System</td>
                      <td className="p-3">200+ pages, EHR, telehealth</td>
                      <td className="p-3">$40,000 – $100,000+</td>
                      <td className="p-3">3-6 months</td>
                    </tr>
                    <tr className="border-b border-slate-700">
                      <td className="p-3 font-medium text-white">Ongoing Monitoring</td>
                      <td className="p-3">Automated + manual</td>
                      <td className="p-3">$29 – $99/month</td>
                      <td className="p-3">Continuous</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                <h3 className="font-bold text-green-300 mb-2">
                  The ROI Case for Healthcare Accessibility
                </h3>
                <div className="grid sm:grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">$50K</div>
                    <div className="text-slate-400">Average accessibility remediation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">vs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-400">40-70%</div>
                    <div className="text-slate-400">Revenue lost without Medicare/Medicaid</div>
                  </div>
                </div>
                <p className="mt-4 text-slate-400 text-sm text-center">
                  For a hospital with $50M in annual Medicare revenue, losing funding means
                  losing $20-35M per year. The math isn't close.
                </p>
              </div>
            </div>

            {/* --- SECTION 13: Sprint Plan --- */}
            <div id="sprint-plan" className="mt-16">
              <h2 className="text-3xl font-bold text-white">
                12-Week Sprint Plan: How to Comply by May 11
              </h2>
              <p className="mt-4 text-slate-300 leading-relaxed">
                With 77 days until the deadline, you need a structured sprint plan. Here's a
                week-by-week action plan for healthcare organizations starting today:
              </p>

              <div className="mt-8 space-y-4">
                {[
                  {
                    weeks: "Weeks 1-2",
                    phase: "Audit & Baseline",
                    color: "sky",
                    tasks: [
                      "Run automated scans on all patient-facing web pages (start with our free scanner)",
                      "Inventory all digital touchpoints: website, portal, apps, kiosks, PDFs",
                      "Request VPAT documentation from EHR vendor (Epic, Cerner, etc.)",
                      "Request VPAT from telehealth vendor (Zoom, Doxy.me, etc.)",
                      "Document current state: total issues found, severity distribution",
                      "Assign an internal accessibility lead or hire a consultant",
                    ],
                  },
                  {
                    weeks: "Weeks 3-4",
                    phase: "Critical Fixes",
                    color: "red",
                    tasks: [
                      "Fix all Critical severity issues (missing alt text, keyboard traps, missing labels)",
                      "Add skip navigation to all pages",
                      "Fix color contrast failures across the site",
                      "Ensure all forms have associated labels and error handling",
                      "Fix heading hierarchy on every page",
                      "Begin manual screen reader testing (NVDA or VoiceOver)",
                    ],
                  },
                  {
                    weeks: "Weeks 5-8",
                    phase: "Systematic Remediation",
                    color: "amber",
                    tasks: [
                      "Address all High severity issues",
                      "Fix appointment booking keyboard accessibility",
                      "Ensure patient portal core flows are keyboard + screen reader compatible",
                      "Tag all critical PDF documents (or create HTML alternatives)",
                      "Add captions to all video content",
                      "Audit and fix third-party integrations (chat widgets, maps, payment forms)",
                      "Test with real assistive technology users if possible",
                    ],
                  },
                  {
                    weeks: "Weeks 9-10",
                    phase: "Testing & Validation",
                    color: "green",
                    tasks: [
                      "Full WCAG 2.1 AA audit on all remediated pages",
                      "Cross-browser testing (Chrome, Firefox, Safari, Edge)",
                      "Mobile testing on iOS (VoiceOver) and Android (TalkBack)",
                      "Test kiosk accessibility with wheelchair users",
                      "User testing with people with disabilities (even 3-5 testers helps enormously)",
                      "Document remaining gaps and remediation timeline",
                    ],
                  },
                  {
                    weeks: "Weeks 11-12",
                    phase: "Documentation & Monitoring",
                    color: "purple",
                    tasks: [
                      "Publish an accessibility statement with conformance level and contact info",
                      "Set up ongoing automated monitoring (RatedWithAI: $29/month for daily scans)",
                      "Create an internal accessibility policy document",
                      "Train staff on maintaining accessibility going forward",
                      "Establish a process for handling OCR complaints if they arise",
                      "Document your remediation efforts (good faith matters in enforcement)",
                    ],
                  },
                ].map((phase) => (
                  <div
                    key={phase.weeks}
                    className="rounded-xl border border-slate-700 bg-slate-800/30 p-6"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={`inline-flex rounded-full bg-${phase.color}-500/10 border border-${phase.color}-500/30 px-3 py-1 text-xs font-bold text-${phase.color}-400`}
                      >
                        {phase.weeks}
                      </span>
                      <h3 className="font-bold text-white text-lg">{phase.phase}</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-slate-300">
                      {phase.tasks.map((task) => (
                        <li key={task} className="flex items-start gap-2">
                          <span className="text-slate-500 mt-0.5">☐</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* --- SECTION 14: Overlays --- */}
            <div id="overlays" className="mt-16">
              <h2 className="text-3xl font-bold text-white">Why Overlays Won't Save You</h2>
              <p className="mt-4 text-slate-300 leading-relaxed">
                When facing a compliance deadline, accessibility overlay widgets look tempting.
                Install a script, add a widget, and claim compliance. But for healthcare
                organizations, this approach is particularly dangerous:
              </p>

              <div className="mt-6 space-y-3">
                {[
                  {
                    icon: "⚖️",
                    title: "FTC Already Took Action",
                    desc: "The FTC fined accessiBe $1 million for deceptive advertising — claiming their overlay provided ADA compliance when it didn't. Healthcare organizations using overlays face the same misrepresentation risk.",
                  },
                  {
                    icon: "📊",
                    title: "25%+ of ADA Lawsuits Cite Overlays",
                    desc: "More than a quarter of recent ADA lawsuits specifically mention that the defendant website was using an overlay. Overlays are now a red flag, not a shield.",
                  },
                  {
                    icon: "🏥",
                    title: "Higher Stakes in Healthcare",
                    desc: "For healthcare, the penalty isn't a $50K settlement — it's losing federal funding. HHS OCR expects actual code-level WCAG conformance, not a JavaScript widget layered on broken code.",
                  },
                  {
                    icon: "♿",
                    title: "Doesn't Fix Underlying Issues",
                    desc: "Overlays don't fix broken heading structures, missing form labels, inaccessible PDFs, or keyboard traps. They add a visual layer while the underlying accessibility barriers remain.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-slate-700 bg-slate-800/30 p-4 flex gap-4"
                  >
                    <span className="text-2xl shrink-0">{item.icon}</span>
                    <div>
                      <h3 className="font-bold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-slate-300 leading-relaxed">
                For a detailed analysis of overlay problems and real alternatives, see our{" "}
                <Link
                  href="/blog/accessibe-alternative"
                  className="text-sky-400 hover:underline"
                >
                  accessiBe Alternatives
                </Link>{" "}
                guide.
              </p>
            </div>

            {/* --- SECTION 15: FAQ --- */}
            <div id="faq" className="mt-16">
              <h2 className="text-3xl font-bold text-white">
                Frequently Asked Questions
              </h2>

              <div className="mt-8 space-y-4">
                {[
                  {
                    q: "What is the May 11, 2026 healthcare accessibility deadline?",
                    a: "The HHS Section 504 final rule requires healthcare providers with 15 or more employees who receive federal financial assistance (Medicare, Medicaid, CHIP) to make their websites, mobile apps, and kiosks conform to WCAG 2.1 Level AA by May 11, 2026. Organizations with fewer than 15 employees have until May 10, 2027.",
                  },
                  {
                    q: "What happens if a healthcare provider doesn't comply by May 2026?",
                    a: "Non-compliant providers risk losing federal financial assistance — meaning Medicare and Medicaid reimbursements could be suspended or terminated. HHS OCR can investigate complaints, conduct proactive compliance reviews, and refer violations to the DOJ. Providers also face concurrent ADA Title III lawsuits from patients.",
                  },
                  {
                    q: "Does the May 2026 deadline apply to my healthcare organization?",
                    a: "If your organization accepts Medicare, Medicaid, or CHIP payments and has 15 or more employees — yes. This includes hospitals, health systems, physician practices, behavioral health providers, dental practices, long-term care facilities, pharmacies, labs, and most clinics. Even private practices receiving indirect federal funding through state Medicaid programs are covered.",
                  },
                  {
                    q: "What WCAG standard must healthcare websites meet?",
                    a: "WCAG 2.1 Level AA, which includes 50 success criteria. Providers may also comply using WCAG 2.2 AA or AAA, which meet or exceed the requirements. The standard applies to all patient-facing web content, mobile applications, and self-service kiosks.",
                  },
                  {
                    q: "How much does healthcare website accessibility compliance cost?",
                    a: "Small practices: $2,000-5,000. Mid-size clinics: $5,000-15,000. Hospital systems: $40,000-100,000+. Ongoing monitoring: $29-99/month. The cost of non-compliance (losing Medicare/Medicaid funding — often 40-70% of revenue) makes any remediation investment look trivial by comparison.",
                  },
                  {
                    q: "What's the difference between the April 2026 and May 2026 deadlines?",
                    a: "The April 24, 2026 deadline is the DOJ's ADA Title II rule for state and local government websites. The May 11, 2026 deadline is the HHS Section 504 rule for healthcare providers receiving federal funding. Some organizations (like public hospitals) are subject to both.",
                  },
                  {
                    q: "Are patient portals covered?",
                    a: "Yes. The HHS rule covers websites, mobile apps, and kiosks. Patient portals — including appointment scheduling, lab results, messaging, prescription refills, and health record access — must be fully WCAG 2.1 AA compliant.",
                  },
                  {
                    q: "Can I use an accessibility overlay to comply?",
                    a: "No. Overlay widgets don't provide genuine WCAG compliance. The FTC fined accessiBe $1 million for deceptive practices, and 25%+ of ADA lawsuits cite overlay usage. HHS OCR expects actual code-level remediation — not a JavaScript widget on top of inaccessible code.",
                  },
                ].map((item) => (
                  <div
                    key={item.q}
                    className="rounded-xl border border-slate-700 bg-slate-800/30 p-5"
                  >
                    <h3 className="font-bold text-white">{item.q}</h3>
                    <p className="mt-2 text-sm text-slate-400">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* --- CTA Section --- */}
            <div className="mt-16 rounded-2xl border border-sky-500/30 bg-gradient-to-br from-sky-500/10 to-blue-500/10 p-8 text-center">
              <h2 className="text-2xl font-bold text-white">
                Don't Wait Until May. Start Your Healthcare Accessibility Audit Today.
              </h2>
              <p className="mt-3 text-slate-300">
                77 days isn't much time. But it's enough — if you start now. Run a free scan on
                your healthcare website to see where you stand.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/tools/free-accessibility-checker"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-6 py-3 font-medium text-white hover:bg-sky-600 transition-colors"
                >
                  Free Healthcare Website Scan →
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-sky-500/30 px-6 py-3 font-medium text-sky-400 hover:bg-sky-500/10 transition-colors"
                >
                  View Monitoring Plans
                </Link>
              </div>
              <p className="mt-4 text-xs text-slate-500">
                Powered by axe-core · WCAG 2.1 AA · Results in 30 seconds · No signup required
              </p>
            </div>

            {/* Related Resources */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-white mb-6">
                Related Resources
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    href: "/blog/healthcare-accessibility-compliance",
                    title: "Healthcare Accessibility: ADA, HIPAA & Section 504",
                    desc: "General overview of all healthcare accessibility laws and requirements.",
                  },
                  {
                    href: "/blog/ada-title-ii-deadline-countdown-2026",
                    title: "ADA Title II Deadline: April 24, 2026",
                    desc: "The government website deadline that precedes the healthcare deadline by 17 days.",
                  },
                  {
                    href: "/blog/ada-compliance-checklist-2026",
                    title: "ADA Compliance Checklist 2026",
                    desc: "Complete checklist for website ADA compliance with actionable steps.",
                  },
                  {
                    href: "/blog/wcag-compliance-guide",
                    title: "WCAG Compliance: Complete Guide",
                    desc: "Deep dive into every WCAG 2.1 principle and success criterion.",
                  },
                  {
                    href: "/blog/website-accessibility-lawsuit-statistics-2026",
                    title: "Accessibility Lawsuit Statistics 2026",
                    desc: "8,667 lawsuits filed in 2025 — healthcare is a top target industry.",
                  },
                  {
                    href: "/blog/section-508-compliance-guide",
                    title: "Section 508 Compliance Guide",
                    desc: "For healthcare organizations that also work with federal agencies.",
                  },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-xl border border-slate-700 bg-slate-800/30 p-4 hover:border-sky-500/30 transition-colors"
                  >
                    <h3 className="font-bold text-sky-400 text-sm">{link.title}</h3>
                    <p className="mt-1 text-xs text-slate-400">{link.desc}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
              <p>
                <strong className="text-slate-400">Disclaimer:</strong> This article provides
                general information about digital accessibility requirements for healthcare
                organizations. It does not constitute legal advice. Consult with a qualified
                healthcare attorney for guidance specific to your organization's compliance
                obligations.
              </p>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </>
  );
}
