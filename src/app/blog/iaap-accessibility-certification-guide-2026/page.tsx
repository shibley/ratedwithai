/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title:
    "IAAP Accessibility Certification Guide 2026: CPACC, WAS & CPWA Compared | RatedWithAI",
  description:
    "Complete guide to IAAP accessibility certifications in 2026. Compare CPACC, WAS, and CPWA — exam costs, study plans, pass rates, salary impact, and career paths for accessibility professionals.",
  openGraph: {
    title:
      "IAAP Accessibility Certification Guide 2026: CPACC, WAS & CPWA Compared",
    description:
      "Everything you need to choose the right IAAP accessibility certification. Exam details, costs, 8-week study plans, salary data ($91K–$121K average), and the career paths each credential unlocks.",
    type: "article",
    publishedTime: "2026-03-03T00:00:00.000Z",
    authors: ["RatedWithAI Team"],
  },
  keywords: [
    "iaap certification",
    "cpacc certification",
    "was certification",
    "cpwa certification",
    "accessibility certification",
    "iaap cpacc",
    "web accessibility specialist",
    "certified professional accessibility core competencies",
    "iaap exam",
    "accessibility certification cost",
    "cpacc exam",
    "was exam",
    "accessibility career",
    "iaap membership",
    "cpacc study guide",
    "was study guide",
    "accessibility professional certification",
    "digital accessibility certification",
    "iaap cpacc exam",
    "accessibility specialist salary",
  ],
  alternates: {
    canonical:
      "https://ratedwithai.com/blog/iaap-accessibility-certification-guide-2026",
  },
};

export default function IAAPAccessibilityCertificationGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline:
      "IAAP Accessibility Certification Guide 2026: CPACC, WAS & CPWA Compared",
    description:
      "Comprehensive guide to IAAP accessibility certifications — CPACC, WAS, CPWA, ADS, and CPABE. Covers exam formats, costs, study strategies, pass rates, salary impact, and career paths for every credential.",
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
        name: "What is the IAAP and why does its certification matter?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The International Association of Accessibility Professionals (IAAP) is the global certifying body for digital accessibility practitioners. Founded in 2014, IAAP administers the most widely recognized accessibility credentials — CPACC, WAS, and CPWA. These certifications matter because they are increasingly required or preferred in job postings for accessibility roles, government contracts, and enterprise procurement. An IAAP certification validates your knowledge against a standardized Body of Knowledge that employers and procurement officers trust.",
        },
      },
      {
        "@type": "Question",
        name: "How much does IAAP certification cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "IAAP certification costs depend on the credential and your membership status. CPACC costs $385 for IAAP members or $485 for non-members. WAS costs $430 for members or $530 for non-members. IAAP individual membership is $245/year and pays for itself with exam fee savings if you plan to certify. Developing economy discounts reduce CPACC to $170 and WAS to $225. Retake fees are $195 (members) or $275 (non-members). The CPWA credential has no additional exam — it is automatically awarded when you hold both CPACC and WAS.",
        },
      },
      {
        "@type": "Question",
        name: "Should I get CPACC or WAS first?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you are in a non-technical role (project manager, content creator, designer, compliance officer), start with CPACC — it covers foundational accessibility concepts, disability types, assistive technologies, and accessibility laws. If you are a developer, QA engineer, or technical tester, you could start with WAS, which focuses on WCAG implementation, HTML/ARIA, and testing methodology. However, most professionals start with CPACC regardless of background because it provides the conceptual foundation that makes WAS material more meaningful.",
        },
      },
      {
        "@type": "Question",
        name: "What is the CPACC exam pass rate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "IAAP does not publish official pass rates for CPACC. However, anecdotal evidence from accessibility communities suggests that 60-75% of well-prepared candidates pass on their first attempt. The passing score is 66% (66 out of 100 questions correct). The WAS exam has a published pass rate of approximately 59% (per Credly badge data), with a higher passing threshold of 70% on 75 questions. Both exams require serious preparation — most successful candidates report studying for 40-80 hours (CPACC) or 60-120 hours (WAS).",
        },
      },
      {
        "@type": "Question",
        name: "How do I maintain my IAAP certification?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "IAAP certifications are valid for three years. To maintain them, you must earn 45 Continuing Accessibility Education Credits (CAECs) during each three-year cycle. One hour of qualifying activity equals one CAEC. Eligible activities include attending conferences or webinars, completing training courses, teaching accessibility topics, conducting accessibility audits, contributing to accessibility standards or open source projects, and self-study. If you hold IAAP membership, the renewal fee is waived during the validity period. If your certification lapses, you must retake the exam.",
        },
      },
      {
        "@type": "Question",
        name: "Is IAAP certification worth the investment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For most accessibility professionals, yes. The 2026 WebAIM Salary Survey reports average accessibility salaries of $101,688 ($121,083 in the US), and certified professionals typically command a $5,000-$20,000+ salary premium depending on the credential. Job postings increasingly list IAAP certification as required or preferred — especially in government, healthcare, finance, and higher education. The total investment ($245 membership + $385-$430 exam fee + $0-$500 prep materials = approximately $630-$1,175) typically pays for itself within the first few months of a salary increase.",
        },
      },
      {
        "@type": "Question",
        name: "Are there free alternatives to IAAP certification?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The DHS Trusted Tester certification is completely free and focuses on Section 508 conformance testing using a standardized methodology. It is highly valued for government contract work. Deque University, W3C WAI, and Microsoft also offer free accessibility training programs with certificates of completion. However, these are training certificates, not professional certifications — they verify you completed a course, not that you passed a standardized competency exam. For maximum career impact, combine free training resources for study with an IAAP certification for formal credentialing.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to prepare for the CPACC exam?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most successful CPACC candidates report studying for 40-80 hours total, spread over 8-12 weeks. IAAP recommends 30-80 hours of preparation. The timeline depends on your existing knowledge — someone already working in accessibility may need only 4-6 weeks, while someone new to the field should plan for 10-12 weeks. Key preparation activities include studying the IAAP Body of Knowledge (free PDF), completing a prep course (Deque University or IAAP's official course), reviewing W3C WAI resources on disability types and assistive technologies, and taking practice exams to identify gaps.",
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
          <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-sky-500/30 via-blue-500/20 to-purple-500/30 blur-3xl" />
          <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-gradient-to-tr from-indigo-500/30 via-blue-500/10 to-purple-500/30 blur-3xl" />

          <Header />

          <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-14 pt-4">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              Career &amp; Professional Development
            </p>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              IAAP Accessibility Certification Guide 2026: CPACC, WAS &amp; CPWA
              Compared
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              Digital accessibility is one of the fastest-growing specializations
              in tech, with average salaries of{" "}
              <strong>$101,688 globally and $121,083 in the United States</strong>{" "}
              according to the 2026 WebAIM Salary Survey. The{" "}
              <strong>International Association of Accessibility Professionals (IAAP)</strong>{" "}
              offers the most widely recognized certifications in the field — but
              with five credentials to choose from, knowing which one to pursue
              (and how to prepare) can be overwhelming. This guide breaks down
              every IAAP certification: exam format, costs, study strategies,
              pass rates, and which careers each one unlocks.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
              <time dateTime="2026-03-03">March 3, 2026</time>
              <span>·</span>
              <span>24 min read</span>
            </div>
          </section>
        </div>

        <article className="mx-auto w-full max-w-4xl space-y-10 px-6 pb-24 text-slate-200">
          {/* Key Takeaways */}
          <section className="rounded-3xl border-2 border-blue-500/50 bg-blue-950/30 p-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-2xl">
                🎓
              </span>
              <h2 className="text-2xl font-bold text-blue-300">
                Key Takeaways
              </h2>
            </div>
            <ul className="space-y-3 text-lg text-blue-100">
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-300 text-sm font-bold">
                  1
                </span>
                <span>
                  <strong>CPACC</strong> (foundational) suits project managers,
                  designers, and anyone entering accessibility — 100 questions,
                  66% passing score, ~$385–$485
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-300 text-sm font-bold">
                  2
                </span>
                <span>
                  <strong>WAS</strong> (technical) targets developers and QA
                  engineers — 75 questions, 70% passing score, ~59% pass rate
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-300 text-sm font-bold">
                  3
                </span>
                <span>
                  <strong>CPWA</strong> = CPACC + WAS combined — the highest
                  IAAP credential, no additional exam required
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-300 text-sm font-bold">
                  4
                </span>
                <span>
                  Certified accessibility professionals earn{" "}
                  <strong>$5,000–$20,000+ more</strong> than uncertified peers,
                  with US salaries averaging $121K
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-300 text-sm font-bold">
                  5
                </span>
                <span>
                  The <strong>DHS Trusted Tester</strong> certification is{" "}
                  <strong>completely free</strong> and highly valued for
                  government contract work
                </span>
              </li>
            </ul>
          </section>

          {/* Table of Contents */}
          <nav className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6">
            <h2 className="text-lg font-bold text-white mb-4">
              📋 Table of Contents
            </h2>
            <ol className="space-y-2 text-sky-400">
              <li>
                <a href="#what-is-iaap" className="hover:text-sky-300 underline">
                  1. What Is the IAAP?
                </a>
              </li>
              <li>
                <a href="#certification-landscape" className="hover:text-sky-300 underline">
                  2. The IAAP Certification Landscape
                </a>
              </li>
              <li>
                <a href="#cpacc-deep-dive" className="hover:text-sky-300 underline">
                  3. CPACC: Certified Professional in Accessibility Core Competencies
                </a>
              </li>
              <li>
                <a href="#was-deep-dive" className="hover:text-sky-300 underline">
                  4. WAS: Web Accessibility Specialist
                </a>
              </li>
              <li>
                <a href="#cpwa" className="hover:text-sky-300 underline">
                  5. CPWA: Certified Professional in Web Accessibility
                </a>
              </li>
              <li>
                <a href="#other-iaap-certs" className="hover:text-sky-300 underline">
                  6. Other IAAP Certifications: ADS &amp; CPABE
                </a>
              </li>
              <li>
                <a href="#certification-comparison" className="hover:text-sky-300 underline">
                  7. Side-by-Side Certification Comparison
                </a>
              </li>
              <li>
                <a href="#free-alternatives" className="hover:text-sky-300 underline">
                  8. Free Alternatives: DHS Trusted Tester &amp; Others
                </a>
              </li>
              <li>
                <a href="#study-strategies" className="hover:text-sky-300 underline">
                  9. Study Strategies &amp; Preparation Resources
                </a>
              </li>
              <li>
                <a href="#salary-career" className="hover:text-sky-300 underline">
                  10. Salary Data &amp; Career Impact
                </a>
              </li>
              <li>
                <a href="#which-cert" className="hover:text-sky-300 underline">
                  11. Which Certification Should You Choose?
                </a>
              </li>
              <li>
                <a href="#maintaining" className="hover:text-sky-300 underline">
                  12. Maintaining Your Certification
                </a>
              </li>
              <li>
                <a href="#employer-guide" className="hover:text-sky-300 underline">
                  13. For Employers: Building an Accessibility-Certified Team
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-sky-300 underline">
                  14. Frequently Asked Questions
                </a>
              </li>
            </ol>
          </nav>

          {/* Section 1: What Is the IAAP? */}
          <section id="what-is-iaap" className="space-y-6">
            <h2 className="text-3xl font-bold text-white">
              1. What Is the IAAP?
            </h2>
            <p className="text-lg leading-relaxed">
              The <strong>International Association of Accessibility Professionals (IAAP)</strong>{" "}
              is the global certifying body for the accessibility profession.
              Founded in 2014, IAAP creates standardized exams that validate
              knowledge across disability awareness, accessibility standards,
              assistive technologies, and inclusive design. Think of it as the
              accessibility equivalent of CompTIA for IT, PMP for project
              management, or CISSP for cybersecurity.
            </p>
            <p className="text-lg leading-relaxed">
              IAAP certifications are recognized by employers worldwide —
              including major technology companies, government agencies,
              financial institutions, and universities. When a job posting says
              "IAAP certification required" or "CPACC/WAS preferred," this is
              what they're referring to.
            </p>

            <div className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6 space-y-4">
              <h3 className="text-xl font-bold text-white">
                IAAP Membership: Worth It Before You Certify
              </h3>
              <p className="text-slate-300 leading-relaxed">
                IAAP membership costs <strong>$245/year</strong> for individuals
                ($55 for students). It pays for itself immediately if you plan to
                take an exam:
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>
                    <strong>$100 exam discount</strong> — CPACC drops from $485
                    to $385, WAS from $530 to $430
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>
                    <strong>Free certification renewal</strong> — renewal fees
                    waived for active members
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>
                    <strong>Access to preparation courses</strong> and community
                    resources
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>
                    <strong>Job board and networking</strong> — connect with
                    employers seeking certified professionals
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>
                    <strong>Conference discounts</strong> and continuing education
                    opportunities
                  </span>
                </li>
              </ul>
              <p className="text-slate-400 text-sm">
                Net savings for your first certification: $100 exam discount −
                $245 membership = you break even on the retake discount alone.
                Factor in free renewal ($75+ value) and it's a clear win.
              </p>
            </div>
          </section>

          {/* Section 2: Certification Landscape */}
          <section id="certification-landscape" className="space-y-6">
            <h2 className="text-3xl font-bold text-white">
              2. The IAAP Certification Landscape
            </h2>
            <p className="text-lg leading-relaxed">
              IAAP currently offers <strong>five credentials</strong>, organized
              into two tracks: professional (foundational) and technical
              (implementation). Here's the hierarchy:
            </p>

            <div className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6 space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-sky-300">
                  🎯 Professional Track (Foundational)
                </h3>
                <div className="pl-4 border-l-2 border-sky-500/40 space-y-3">
                  <p className="text-slate-300">
                    <strong className="text-white">CPACC</strong> — Certified
                    Professional in Accessibility Core Competencies. The
                    entry-level credential covering disability types, assistive
                    technologies, laws, and accessibility concepts.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-emerald-300">
                  ⚙️ Technical Track
                </h3>
                <div className="pl-4 border-l-2 border-emerald-500/40 space-y-3">
                  <p className="text-slate-300">
                    <strong className="text-white">WAS</strong> — Web
                    Accessibility Specialist. The technical credential covering
                    WCAG implementation, HTML/ARIA, testing, and remediation.
                  </p>
                  <p className="text-slate-300">
                    <strong className="text-white">ADS</strong> — Accessible
                    Document Specialist. Focuses on creating and remediating
                    accessible PDFs and electronic documents.
                  </p>
                  <p className="text-slate-300">
                    <strong className="text-white">CPABE</strong> — Certified
                    Professional in Accessible Built Environments. Covers
                    physical environment accessibility (3 levels).
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-amber-300">
                  👑 Combined Credential
                </h3>
                <div className="pl-4 border-l-2 border-amber-500/40 space-y-3">
                  <p className="text-slate-300">
                    <strong className="text-white">CPWA</strong> — Certified
                    Professional in Web Accessibility. Automatically awarded when
                    you hold both CPACC and WAS. The highest digital
                    accessibility credential.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed">
              For most digital accessibility professionals, the path is:{" "}
              <strong>CPACC → WAS → CPWA</strong>. The ADS and CPABE
              certifications serve specialized niches (document remediation and
              physical environments, respectively).
            </p>
          </section>

          {/* Section 3: CPACC Deep Dive */}
          <section id="cpacc-deep-dive" className="space-y-6">
            <h2 className="text-3xl font-bold text-white">
              3. CPACC: Certified Professional in Accessibility Core Competencies
            </h2>
            <p className="text-lg leading-relaxed">
              The CPACC is the <strong>most popular IAAP certification</strong>{" "}
              and the recommended starting point for anyone entering the
              accessibility field. It validates your understanding of
              accessibility as a concept — not how to code accessible websites,
              but <em>why</em> accessibility matters, <em>who</em> it affects,
              and <em>what</em> standards and laws govern it.
            </p>

            <div className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6 space-y-6">
              <h3 className="text-xl font-bold text-white">
                Exam Format &amp; Details
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <p className="text-slate-400 text-sm uppercase tracking-wider">
                    Questions
                  </p>
                  <p className="text-white text-lg font-bold">
                    100 multiple-choice
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-slate-400 text-sm uppercase tracking-wider">
                    Time Limit
                  </p>
                  <p className="text-white text-lg font-bold">2 hours</p>
                </div>
                <div className="space-y-2">
                  <p className="text-slate-400 text-sm uppercase tracking-wider">
                    Passing Score
                  </p>
                  <p className="text-white text-lg font-bold">
                    66% (66 correct)
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-slate-400 text-sm uppercase tracking-wider">
                    Estimated Pass Rate
                  </p>
                  <p className="text-white text-lg font-bold">60–75%</p>
                </div>
                <div className="space-y-2">
                  <p className="text-slate-400 text-sm uppercase tracking-wider">
                    Member Cost
                  </p>
                  <p className="text-white text-lg font-bold">$385</p>
                </div>
                <div className="space-y-2">
                  <p className="text-slate-400 text-sm uppercase tracking-wider">
                    Non-Member Cost
                  </p>
                  <p className="text-white text-lg font-bold">$485</p>
                </div>
                <div className="space-y-2">
                  <p className="text-slate-400 text-sm uppercase tracking-wider">
                    Retake Fee
                  </p>
                  <p className="text-white text-lg font-bold">
                    $195 (member) / $275 (non-member)
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-slate-400 text-sm uppercase tracking-wider">
                    Delivery
                  </p>
                  <p className="text-white text-lg font-bold">
                    Pearson VUE (online or test center)
                  </p>
                </div>
              </div>
              <p className="text-slate-400 text-sm">
                Developing Economy Discount: $170 (contact IAAP for eligibility)
              </p>
            </div>

            <h3 className="text-2xl font-bold text-white">
              What the CPACC Exam Covers
            </h3>
            <p className="text-lg leading-relaxed">
              The exam is structured around three domains, each weighted
              differently:
            </p>

            <div className="space-y-4">
              <div className="rounded-xl border border-sky-500/30 bg-sky-950/20 p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold text-sky-300">
                    Domain 1: Disabilities, Challenges &amp; Assistive Technologies
                  </h4>
                  <span className="rounded-full bg-sky-500/20 px-3 py-1 text-sm font-bold text-sky-300">
                    ~40%
                  </span>
                </div>
                <ul className="space-y-1 text-slate-300 text-sm">
                  <li>• Types of disabilities: visual, auditory, motor, cognitive, neurological, speech</li>
                  <li>• Barriers experienced by people with disabilities in digital and physical environments</li>
                  <li>• Assistive technologies: screen readers, magnifiers, switches, braille displays, voice recognition</li>
                  <li>• Adaptive strategies people use to navigate technology</li>
                  <li>• Medical model vs. social model of disability</li>
                  <li>• Universal design principles and their application</li>
                </ul>
              </div>

              <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold text-emerald-300">
                    Domain 2: Accessibility &amp; Universal Design
                  </h4>
                  <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-bold text-emerald-300">
                    ~40%
                  </span>
                </div>
                <ul className="space-y-1 text-slate-300 text-sm">
                  <li>• Benefits of accessibility for businesses and society</li>
                  <li>• WCAG overview: principles (POUR), guidelines, and conformance levels (A, AA, AAA)</li>
                  <li>• Accessibility laws: ADA, Section 508, AODA, EAA, EN 301 549</li>
                  <li>• International accessibility regulations and standards</li>
                  <li>• The business case for accessibility</li>
                  <li>• Accessibility vs. usability vs. inclusion</li>
                </ul>
              </div>

              <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold text-amber-300">
                    Domain 3: Standards, Laws &amp; Management Strategies
                  </h4>
                  <span className="rounded-full bg-amber-500/20 px-3 py-1 text-sm font-bold text-amber-300">
                    ~20%
                  </span>
                </div>
                <ul className="space-y-1 text-slate-300 text-sm">
                  <li>• Developing an organizational accessibility program</li>
                  <li>• Procurement accessibility requirements</li>
                  <li>• Accessibility documentation and policies</li>
                  <li>• Testing and remediation concepts (high-level, not code-level)</li>
                  <li>• Accessibility maturity models</li>
                  <li>• Change management for accessibility adoption</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white">
              Who Should Get CPACC
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Project managers overseeing accessible products",
                "UX/UI designers building inclusive interfaces",
                "Content creators and marketing professionals",
                "Product managers at SaaS companies",
                "Compliance officers and legal teams",
                "Business analysts writing accessibility requirements",
                "QA managers establishing testing programs",
                "Anyone transitioning into accessibility",
              ].map((role) => (
                <div
                  key={role}
                  className="flex items-center gap-3 rounded-lg bg-slate-900/40 p-3 border border-slate-800/50"
                >
                  <span className="text-sky-400">👤</span>
                  <span className="text-slate-300 text-sm">{role}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: WAS Deep Dive */}
          <section id="was-deep-dive" className="space-y-6">
            <h2 className="text-3xl font-bold text-white">
              4. WAS: Web Accessibility Specialist
            </h2>
            <p className="text-lg leading-relaxed">
              The WAS certification is the <strong>technical counterpart</strong>{" "}
              to CPACC. Where CPACC asks "what are the barriers?", WAS asks "how
              do you fix them in code?" This exam tests deep knowledge of WCAG
              implementation, HTML semantics, ARIA, testing methodologies, and
              remediation strategies. It's significantly harder than CPACC —
              reflected in its lower pass rate.
            </p>

            <div className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6 space-y-6">
              <h3 className="text-xl font-bold text-white">
                Exam Format &amp; Details
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <p className="text-slate-400 text-sm uppercase tracking-wider">
                    Questions
                  </p>
                  <p className="text-white text-lg font-bold">
                    75 multiple-choice
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-slate-400 text-sm uppercase tracking-wider">
                    Time Limit
                  </p>
                  <p className="text-white text-lg font-bold">2 hours</p>
                </div>
                <div className="space-y-2">
                  <p className="text-slate-400 text-sm uppercase tracking-wider">
                    Passing Score
                  </p>
                  <p className="text-white text-lg font-bold">
                    70% (53 correct)
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-slate-400 text-sm uppercase tracking-wider">
                    Pass Rate
                  </p>
                  <p className="text-white text-lg font-bold">
                    ~59% (Credly data)
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-slate-400 text-sm uppercase tracking-wider">
                    Member Cost
                  </p>
                  <p className="text-white text-lg font-bold">$430</p>
                </div>
                <div className="space-y-2">
                  <p className="text-slate-400 text-sm uppercase tracking-wider">
                    Non-Member Cost
                  </p>
                  <p className="text-white text-lg font-bold">$530</p>
                </div>
                <div className="space-y-2">
                  <p className="text-slate-400 text-sm uppercase tracking-wider">
                    Retake Fee
                  </p>
                  <p className="text-white text-lg font-bold">
                    $195 (member) / $275 (non-member)
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-slate-400 text-sm uppercase tracking-wider">
                    Delivery
                  </p>
                  <p className="text-white text-lg font-bold">
                    Pearson VUE (online or test center)
                  </p>
                </div>
              </div>
              <p className="text-slate-400 text-sm">
                Developing Economy Discount: $225 (contact IAAP for eligibility)
              </p>
            </div>

            <h3 className="text-2xl font-bold text-white">
              What the WAS Exam Covers
            </h3>

            <div className="space-y-4">
              <div className="rounded-xl border border-indigo-500/30 bg-indigo-950/20 p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold text-indigo-300">
                    Domain 1: Standards &amp; Legislation
                  </h4>
                  <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-sm font-bold text-indigo-300">
                    ~10%
                  </span>
                </div>
                <ul className="space-y-1 text-slate-300 text-sm">
                  <li>• Deep knowledge of WCAG 2.1/2.2 success criteria</li>
                  <li>• Understanding of WCAG conformance levels and requirements</li>
                  <li>• Relationships between international accessibility standards</li>
                  <li>• Section 508 refresh alignment with WCAG</li>
                </ul>
              </div>

              <div className="rounded-xl border border-purple-500/30 bg-purple-950/20 p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold text-purple-300">
                    Domain 2: Design &amp; Development
                  </h4>
                  <span className="rounded-full bg-purple-500/20 px-3 py-1 text-sm font-bold text-purple-300">
                    ~50%
                  </span>
                </div>
                <ul className="space-y-1 text-slate-300 text-sm">
                  <li>• HTML5 semantic structure and landmark roles</li>
                  <li>• ARIA roles, states, and properties (and when NOT to use ARIA)</li>
                  <li>• Accessible forms: labels, error handling, fieldsets, validation</li>
                  <li>• Keyboard navigation and focus management</li>
                  <li>• CSS and visual accessibility (color contrast, motion, reflow)</li>
                  <li>• JavaScript accessibility patterns for dynamic content</li>
                  <li>• Multimedia accessibility: captions, audio descriptions, transcripts</li>
                  <li>• Mobile accessibility considerations</li>
                  <li>• PDF and document accessibility basics</li>
                </ul>
              </div>

              <div className="rounded-xl border border-teal-500/30 bg-teal-950/20 p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold text-teal-300">
                    Domain 3: Testing &amp; Validation
                  </h4>
                  <span className="rounded-full bg-teal-500/20 px-3 py-1 text-sm font-bold text-teal-300">
                    ~30%
                  </span>
                </div>
                <ul className="space-y-1 text-slate-300 text-sm">
                  <li>• Automated testing tools and their limitations</li>
                  <li>• Manual testing methodologies and techniques</li>
                  <li>• Assistive technology testing: NVDA, JAWS, VoiceOver, TalkBack</li>
                  <li>• Creating test plans and documenting results</li>
                  <li>• Reporting accessibility findings and prioritization</li>
                </ul>
              </div>

              <div className="rounded-xl border border-rose-500/30 bg-rose-950/20 p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold text-rose-300">
                    Domain 4: Remediation
                  </h4>
                  <span className="rounded-full bg-rose-500/20 px-3 py-1 text-sm font-bold text-rose-300">
                    ~10%
                  </span>
                </div>
                <ul className="space-y-1 text-slate-300 text-sm">
                  <li>• Prioritization strategies for fixing accessibility issues</li>
                  <li>• Implementation approaches for common WCAG failures</li>
                  <li>• Verification and regression testing</li>
                  <li>• Building accessibility into CI/CD pipelines</li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl border border-orange-500/40 bg-orange-950/20 p-6 space-y-3">
              <h3 className="text-xl font-bold text-orange-300">
                ⚠️ Why WAS Is Harder Than CPACC
              </h3>
              <p className="text-slate-300 leading-relaxed">
                The WAS exam has a <strong>~59% pass rate</strong> compared to
                CPACC's estimated 60–75%. Three factors make it more
                challenging:
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1 font-bold">1.</span>
                  <span>
                    <strong>Higher passing threshold</strong> — 70% vs. 66%
                    (tighter margin for error)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1 font-bold">2.</span>
                  <span>
                    <strong>Code-level questions</strong> — expect HTML/ARIA
                    snippets and "what's wrong with this code?" scenarios
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1 font-bold">3.</span>
                  <span>
                    <strong>WCAG success criteria knowledge</strong> — you need
                    to recognize which specific WCAG criterion applies to a
                    given scenario
                  </span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-white">
              Who Should Get WAS
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Front-end developers and engineers",
                "QA engineers and accessibility testers",
                "Full-stack developers building accessible UIs",
                "Accessibility specialists and consultants",
                "Design system developers and architects",
                "Technical project leads",
                "DevOps engineers building a11y into CI/CD",
                "Anyone implementing WCAG compliance in code",
              ].map((role) => (
                <div
                  key={role}
                  className="flex items-center gap-3 rounded-lg bg-slate-900/40 p-3 border border-slate-800/50"
                >
                  <span className="text-emerald-400">⚙️</span>
                  <span className="text-slate-300 text-sm">{role}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: CPWA */}
          <section id="cpwa" className="space-y-6">
            <h2 className="text-3xl font-bold text-white">
              5. CPWA: Certified Professional in Web Accessibility
            </h2>
            <p className="text-lg leading-relaxed">
              The CPWA is IAAP's <strong>highest digital accessibility credential</strong>.
              It isn't a separate exam — it's automatically awarded when you hold
              both CPACC and WAS simultaneously. This means you've demonstrated
              both the foundational knowledge of accessibility concepts{" "}
              <em>and</em> the technical skills to implement them.
            </p>

            <div className="rounded-2xl border border-amber-500/40 bg-amber-950/20 p-6 space-y-4">
              <h3 className="text-xl font-bold text-amber-300">
                👑 What CPWA Signals to Employers
              </h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 mt-1">→</span>
                  <span>
                    You understand <strong>both the "why" and the "how"</strong>{" "}
                    of accessibility
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 mt-1">→</span>
                  <span>
                    You can lead accessibility programs, not just execute tasks
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 mt-1">→</span>
                  <span>
                    You've passed two rigorous exams — demonstrating sustained
                    commitment
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 mt-1">→</span>
                  <span>
                    You're qualified for <strong>senior accessibility roles</strong>,
                    consulting, and program leadership
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed">
              CPWA holders are positioned for{" "}
              <strong>Chief Accessibility Officer (CAO)</strong> roles,
              accessibility program director positions, senior consulting
              engagements, and expert witness work. The 2026 WebAIM survey
              includes 10 respondents holding the CAO title with notably higher
              compensation.
            </p>

            <div className="rounded-xl border border-slate-700/50 bg-slate-900/30 p-5">
              <p className="text-slate-300">
                <strong className="text-white">Total Investment for CPWA:</strong>{" "}
                $245 (membership) + $385 (CPACC exam) + $430 (WAS exam) ={" "}
                <strong className="text-emerald-400">$1,060</strong> total
                (member pricing). Add $200–$1,000 for prep courses if desired.
                This typically pays for itself within 2-3 months through salary
                premium.
              </p>
            </div>
          </section>

          {/* Section 6: Other IAAP Certs */}
          <section id="other-iaap-certs" className="space-y-6">
            <h2 className="text-3xl font-bold text-white">
              6. Other IAAP Certifications: ADS &amp; CPABE
            </h2>

            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6 space-y-4">
                <h3 className="text-xl font-bold text-white">
                  📄 ADS: Accessible Document Specialist
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  The ADS certification validates expertise in creating and
                  remediating accessible electronic documents — primarily PDFs,
                  but also Word, Excel, PowerPoint, and InDesign files. This is
                  a <strong>technical certification</strong> that tests knowledge
                  of document structure, tagging, reading order, alternative
                  text, and{" "}
                  <Link
                    href="/blog/pdf-accessibility-guide-2026"
                    className="text-sky-400 underline hover:text-sky-300"
                  >
                    PDF/UA standards
                  </Link>.
                </p>
                <div className="grid gap-3 sm:grid-cols-3 text-center">
                  <div className="rounded-lg bg-slate-800/50 p-3">
                    <p className="text-slate-400 text-xs uppercase">
                      Member Cost
                    </p>
                    <p className="text-white font-bold">$430</p>
                  </div>
                  <div className="rounded-lg bg-slate-800/50 p-3">
                    <p className="text-slate-400 text-xs uppercase">
                      Non-Member
                    </p>
                    <p className="text-white font-bold">$530</p>
                  </div>
                  <div className="rounded-lg bg-slate-800/50 p-3">
                    <p className="text-slate-400 text-xs uppercase">
                      Best For
                    </p>
                    <p className="text-white font-bold text-sm">
                      Doc specialists
                    </p>
                  </div>
                </div>
                <p className="text-slate-400 text-sm">
                  Ideal for professionals in government, education, and legal
                  sectors where document accessibility is a primary concern. The{" "}
                  <Link
                    href="/blog/university-website-accessibility-crisis-2026"
                    className="text-sky-400 underline hover:text-sky-300"
                  >
                    university sector alone is investing $20M+ in PDF
                    remediation
                  </Link>{" "}
                  ahead of the 2026 ADA Title II deadline.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6 space-y-4">
                <h3 className="text-xl font-bold text-white">
                  🏢 CPABE: Certified Professional in Accessible Built
                  Environments
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Unlike all other IAAP certifications, CPABE focuses on{" "}
                  <strong>physical environments</strong> — buildings,
                  workplaces, public spaces, and facilities. It tests knowledge
                  of ADA Standards for Accessible Design, universal design
                  principles for built environments, and building codes.
                </p>
                <div className="grid gap-3 sm:grid-cols-3 text-center">
                  <div className="rounded-lg bg-slate-800/50 p-3">
                    <p className="text-slate-400 text-xs uppercase">
                      Level 1 (Associate)
                    </p>
                    <p className="text-white font-bold">$430–$530</p>
                  </div>
                  <div className="rounded-lg bg-slate-800/50 p-3">
                    <p className="text-slate-400 text-xs uppercase">
                      Level 2 (Advanced)
                    </p>
                    <p className="text-white font-bold">$500–$600</p>
                  </div>
                  <div className="rounded-lg bg-slate-800/50 p-3">
                    <p className="text-slate-400 text-xs uppercase">
                      Level 3 (Expert)
                    </p>
                    <p className="text-white font-bold">$650–$750</p>
                  </div>
                </div>
                <p className="text-slate-400 text-sm">
                  The three levels require progressively more experience: Level 1
                  for newcomers, Level 2 requires 5+ years, Level 3 requires 10+
                  years plus Level 2 completion.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: Comparison */}
          <section id="certification-comparison" className="space-y-6">
            <h2 className="text-3xl font-bold text-white">
              7. Side-by-Side Certification Comparison
            </h2>
            <p className="text-lg leading-relaxed">
              Here's how all the IAAP digital accessibility credentials compare
              across the key dimensions:
            </p>

            {/* Cards instead of table for Telegram-friendliness */}
            <div className="space-y-4">
              {[
                {
                  name: "CPACC",
                  focus: "Foundational accessibility knowledge",
                  depth: "Conceptual — laws, disabilities, AT, standards overview",
                  roles: "PMs, designers, content creators, compliance officers",
                  questions: "100 multiple-choice",
                  time: "2 hours",
                  passScore: "66%",
                  passRate: "~60-75% (estimated)",
                  memberCost: "$385",
                  nonMemberCost: "$485",
                  studyHours: "40–80 hours",
                  prerequisites: "None required",
                  color: "sky",
                },
                {
                  name: "WAS",
                  focus: "Technical web accessibility implementation",
                  depth: "Deep — HTML, ARIA, WCAG criteria, code patterns, testing",
                  roles: "Developers, QA engineers, accessibility testers",
                  questions: "75 multiple-choice",
                  time: "2 hours",
                  passScore: "70%",
                  passRate: "~59% (Credly)",
                  memberCost: "$430",
                  nonMemberCost: "$530",
                  studyHours: "60–120 hours",
                  prerequisites: "Technical background essential",
                  color: "emerald",
                },
                {
                  name: "CPWA",
                  focus: "Comprehensive (foundational + technical)",
                  depth: "Both conceptual and implementation",
                  roles: "Senior specialists, consultants, accessibility leads",
                  questions: "N/A — awarded for holding CPACC + WAS",
                  time: "N/A",
                  passScore: "N/A",
                  passRate: "N/A",
                  memberCost: "$385 + $430 = $815 (exam fees)",
                  nonMemberCost: "$485 + $530 = $1,015",
                  studyHours: "100–200 hours combined",
                  prerequisites: "Must pass both CPACC and WAS exams",
                  color: "amber",
                },
              ].map((cert) => (
                <div
                  key={cert.name}
                  className={`rounded-2xl border border-${cert.color}-500/30 bg-${cert.color}-950/10 p-6 space-y-3`}
                >
                  <h3 className="text-2xl font-bold text-white">
                    {cert.name}
                  </h3>
                  <div className="grid gap-2 text-sm">
                    <div className="flex gap-2">
                      <span className="text-slate-400 min-w-[120px]">
                        Focus:
                      </span>
                      <span className="text-slate-200">{cert.focus}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-slate-400 min-w-[120px]">
                        Technical Depth:
                      </span>
                      <span className="text-slate-200">{cert.depth}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-slate-400 min-w-[120px]">
                        Target Roles:
                      </span>
                      <span className="text-slate-200">{cert.roles}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-slate-400 min-w-[120px]">
                        Exam:
                      </span>
                      <span className="text-slate-200">{cert.questions}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-slate-400 min-w-[120px]">
                        Time Limit:
                      </span>
                      <span className="text-slate-200">{cert.time}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-slate-400 min-w-[120px]">
                        Passing Score:
                      </span>
                      <span className="text-slate-200">{cert.passScore}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-slate-400 min-w-[120px]">
                        Pass Rate:
                      </span>
                      <span className="text-slate-200">{cert.passRate}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-slate-400 min-w-[120px]">
                        Cost (Member):
                      </span>
                      <span className="text-slate-200">
                        {cert.memberCost}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-slate-400 min-w-[120px]">
                        Cost (Non-Member):
                      </span>
                      <span className="text-slate-200">
                        {cert.nonMemberCost}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-slate-400 min-w-[120px]">
                        Study Time:
                      </span>
                      <span className="text-slate-200">{cert.studyHours}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-slate-400 min-w-[120px]">
                        Prerequisites:
                      </span>
                      <span className="text-slate-200">
                        {cert.prerequisites}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-lg leading-relaxed">
              All IAAP certifications are valid for <strong>3 years</strong> and
              require <strong>45 Continuing Accessibility Education Credits
              (CAECs)</strong> for renewal. Exams are delivered through{" "}
              <strong>Pearson VUE</strong> — either online-proctored from your
              home or at a testing center.
            </p>
          </section>

          {/* Section 8: Free Alternatives */}
          <section id="free-alternatives" className="space-y-6">
            <h2 className="text-3xl font-bold text-white">
              8. Free Alternatives: DHS Trusted Tester &amp; Others
            </h2>
            <p className="text-lg leading-relaxed">
              Not ready to invest in IAAP certification? Several free programs
              can build your skills and credentials:
            </p>

            <div className="space-y-4">
              <div className="rounded-2xl border-2 border-green-500/40 bg-green-950/20 p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🏛️</span>
                  <h3 className="text-xl font-bold text-green-300">
                    DHS Trusted Tester (Free — Government Standard)
                  </h3>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  The Department of Homeland Security's{" "}
                  <strong>Trusted Tester certification</strong> is completely
                  free and trains you in the standardized methodology for{" "}
                  <Link
                    href="/blog/section-508-compliance-guide"
                    className="text-sky-400 underline hover:text-sky-300"
                  >
                    Section 508 conformance testing
                  </Link>. Agencies that adopt the Trusted Tester Process only
                  accept test results from certified Trusted Testers, making
                  this credential essential for government contract work.
                </p>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>
                    <strong>Cost:</strong> Free (online training through
                    DHS)
                  </li>
                  <li>
                    <strong>Focus:</strong> Section 508 conformance testing
                    using the ICT Testing Baseline
                  </li>
                  <li>
                    <strong>Best for:</strong> Government contractors, federal
                    employees, 508 compliance specialists
                  </li>
                  <li>
                    <strong>Get it:</strong>{" "}
                    <a
                      href="https://www.section508.gov/test/trusted-tester/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-400 underline hover:text-sky-300"
                    >
                      section508.gov/test/trusted-tester/
                    </a>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6 space-y-4">
                <h3 className="text-xl font-bold text-white">
                  Other Free Training Programs
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      name: "W3C WAI Introduction to Web Accessibility",
                      desc: "Free online course covering WCAG basics, assistive technology awareness, and accessibility evaluation. Excellent CPACC prep supplement.",
                      url: "https://www.w3.org/WAI/fundamentals/",
                    },
                    {
                      name: "Deque University Free Resources",
                      desc: "Selected free courses on accessibility fundamentals. Their paid curriculum ($30/month) is the most comprehensive WAS prep available.",
                      url: "https://dequeuniversity.com/",
                    },
                    {
                      name: "Microsoft Accessibility Fundamentals",
                      desc: "Free learning path covering inclusive design principles, assistive technology basics, and accessibility standards overview.",
                      url: "https://learn.microsoft.com/en-us/training/paths/accessibility-fundamentals/",
                    },
                    {
                      name: "Google Web Accessibility Course (Udacity)",
                      desc: "Free course focusing on practical web accessibility for developers — good WAS preparation supplement.",
                      url: "https://www.udacity.com/course/web-accessibility--ud891",
                    },
                  ].map((resource) => (
                    <div
                      key={resource.name}
                      className="rounded-lg bg-slate-800/30 p-4 space-y-2"
                    >
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-400 font-bold underline hover:text-sky-300"
                      >
                        {resource.name}
                      </a>
                      <p className="text-slate-400 text-sm">{resource.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-amber-500/30 bg-amber-950/10 p-5">
                <p className="text-slate-300 leading-relaxed">
                  <strong className="text-amber-300">
                    ⚡ Key distinction:
                  </strong>{" "}
                  Free programs issue <strong>certificates of completion</strong>{" "}
                  (you finished a course). IAAP issues{" "}
                  <strong>professional certifications</strong> (you passed a
                  standardized competency exam). Both have value, but employers
                  and procurement officers recognize the difference. The
                  strongest approach: <em>use free resources to study, then
                  validate your knowledge with an IAAP exam.</em>
                </p>
              </div>
            </div>
          </section>

          {/* Section 9: Study Strategies */}
          <section id="study-strategies" className="space-y-6">
            <h2 className="text-3xl font-bold text-white">
              9. Study Strategies &amp; Preparation Resources
            </h2>

            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-sky-300">
                  📘 CPACC Study Plan (8–12 Weeks)
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      week: "Weeks 1–2",
                      title: "Foundation: Disabilities & Assistive Technologies",
                      tasks: [
                        "Read the IAAP CPACC Body of Knowledge (free PDF from IAAP)",
                        "Study disability types: visual, auditory, motor, cognitive, neurological, speech",
                        "Learn common assistive technologies and how they work",
                        "Understand the medical model vs. social model of disability",
                        "Watch screen reader demos (NVDA, VoiceOver) to build empathy",
                      ],
                    },
                    {
                      week: "Weeks 3–4",
                      title: "Standards & Laws",
                      tasks: [
                        "Study WCAG principles (Perceivable, Operable, Understandable, Robust)",
                        "Review major accessibility laws: ADA, Section 508, AODA, EAA, EN 301 549",
                        "Understand conformance levels (A, AA, AAA) and what they mean",
                        "Read the W3C WAI Introduction to Web Accessibility",
                      ],
                    },
                    {
                      week: "Weeks 5–6",
                      title: "Universal Design & Management",
                      tasks: [
                        "Study the 7 Principles of Universal Design",
                        "Learn about organizational accessibility programs and maturity models",
                        "Review procurement accessibility requirements",
                        "Understand the business case for accessibility (ROI, legal risk, market expansion)",
                      ],
                    },
                    {
                      week: "Weeks 7–8",
                      title: "Review & Practice",
                      tasks: [
                        "Take the IAAP official practice exam",
                        "Use flashcards for disability types and AT mappings",
                        "Focus on weak areas identified in practice tests",
                        "Review the Body of Knowledge one final time",
                        "Schedule your Pearson VUE exam",
                      ],
                    },
                  ].map((phase) => (
                    <div
                      key={phase.week}
                      className="rounded-xl border border-slate-700/50 bg-slate-900/30 p-5 space-y-3"
                    >
                      <div className="flex items-center gap-3">
                        <span className="rounded-full bg-sky-500/20 px-3 py-1 text-sm font-bold text-sky-300">
                          {phase.week}
                        </span>
                        <h4 className="text-lg font-bold text-white">
                          {phase.title}
                        </h4>
                      </div>
                      <ul className="space-y-1 text-slate-300 text-sm">
                        {phase.tasks.map((task, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-slate-500 mt-0.5">☐</span>
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-emerald-300">
                  📗 WAS Study Plan (10–16 Weeks)
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      week: "Weeks 1–3",
                      title: "WCAG Deep Dive",
                      tasks: [
                        "Read the full WCAG 2.1/2.2 specification — every success criterion",
                        "Study the Understanding documents for each criterion",
                        "Know the difference between A, AA, and AAA criteria",
                        "Create flashcards: criterion number → what it requires → common failures",
                      ],
                    },
                    {
                      week: "Weeks 4–6",
                      title: "HTML, ARIA & Semantic Coding",
                      tasks: [
                        "Master HTML5 semantic elements: nav, main, aside, header, footer, article, section",
                        "Study ARIA landmark roles and when to use them (vs. native HTML)",
                        "Learn ARIA states and properties: aria-expanded, aria-hidden, aria-live, aria-label, etc.",
                        "Practice: Build accessible forms with proper labels, fieldsets, and error handling",
                        "Study the first rule of ARIA: 'Don't use ARIA' when native HTML suffices",
                      ],
                    },
                    {
                      week: "Weeks 7–9",
                      title: "Testing Methodologies",
                      tasks: [
                        "Install and learn NVDA (Windows) or VoiceOver (macOS) screen readers",
                        "Test real websites with keyboard-only navigation",
                        "Use automated tools: axe DevTools, WAVE, Lighthouse, Pa11y",
                        "Understand automated testing limitations (~30-40% of WCAG issues detectable)",
                        "Practice creating test plans and documenting accessibility findings",
                      ],
                    },
                    {
                      week: "Weeks 10–12",
                      title: "Remediation & Advanced Topics",
                      tasks: [
                        "Study common remediation patterns for WCAG failures",
                        "Learn CSS accessibility: color contrast, reduced motion, reflow",
                        "Study keyboard accessibility: focus indicators, tab order, focus trapping",
                        "Review dynamic content accessibility: live regions, single-page apps, modals",
                        "Take the IAAP WAS practice exam and focus on weak areas",
                      ],
                    },
                  ].map((phase) => (
                    <div
                      key={phase.week}
                      className="rounded-xl border border-slate-700/50 bg-slate-900/30 p-5 space-y-3"
                    >
                      <div className="flex items-center gap-3">
                        <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-bold text-emerald-300">
                          {phase.week}
                        </span>
                        <h4 className="text-lg font-bold text-white">
                          {phase.title}
                        </h4>
                      </div>
                      <ul className="space-y-1 text-slate-300 text-sm">
                        {phase.tasks.map((task, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-slate-500 mt-0.5">☐</span>
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6 space-y-4">
                <h3 className="text-xl font-bold text-white">
                  📚 Recommended Preparation Resources
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold text-slate-200">
                      For CPACC:
                    </h4>
                    <ul className="mt-2 space-y-1 text-slate-300 text-sm">
                      <li>• <strong>IAAP Body of Knowledge</strong> (free PDF) — the official study guide outline</li>
                      <li>• <strong>IAAP CPACC Preparation Course</strong> ($varies) — official self-paced course</li>
                      <li>• <strong>Deque University CPACC Prep Course</strong> ($30/month subscription) — most widely-used prep program</li>
                      <li>• <strong>W3C WAI Resources</strong> (free) — excellent supplementary material</li>
                      <li>• <strong>cpaccexam.com</strong> — 1,000+ practice questions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-200">
                      For WAS:
                    </h4>
                    <ul className="mt-2 space-y-1 text-slate-300 text-sm">
                      <li>• <strong>IAAP WAS Body of Knowledge</strong> (free PDF) — official exam blueprint</li>
                      <li>• <strong>Deque University WAS Prep Course</strong> ($30/month) — comprehensive with code examples</li>
                      <li>• <strong>WCAG 2.1/2.2 Understanding Documents</strong> (free, w3.org) — essential reading</li>
                      <li>• <strong>WAI-ARIA Authoring Practices</strong> (free, w3.org) — design pattern reference</li>
                      <li>• <strong>MDN Web Docs: Accessibility</strong> (free) — practical developer guides</li>
                      <li>• <strong>Hands-on testing practice</strong> — test real websites with screen readers and keyboard</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 10: Salary & Career */}
          <section id="salary-career" className="space-y-6">
            <h2 className="text-3xl font-bold text-white">
              10. Salary Data &amp; Career Impact
            </h2>
            <p className="text-lg leading-relaxed">
              The 2026 WebAIM Global Digital Accessibility Salary Survey (300
              respondents, December 2025–January 2026) provides the most current
              salary data for the field:
            </p>

            <div className="space-y-4">
              <div className="rounded-2xl border border-emerald-500/40 bg-emerald-950/20 p-6 space-y-4">
                <h3 className="text-xl font-bold text-emerald-300">
                  💰 2026 Accessibility Salary Benchmarks
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl bg-slate-900/60 p-4 text-center">
                    <p className="text-slate-400 text-sm">Global Average</p>
                    <p className="text-3xl font-bold text-white">$101,688</p>
                    <p className="text-slate-500 text-xs">
                      median $94,394
                    </p>
                  </div>
                  <div className="rounded-xl bg-slate-900/60 p-4 text-center">
                    <p className="text-slate-400 text-sm">US Average</p>
                    <p className="text-3xl font-bold text-white">$121,083</p>
                    <p className="text-slate-500 text-xs">
                      median $119,500
                    </p>
                  </div>
                  <div className="rounded-xl bg-slate-900/60 p-4 text-center">
                    <p className="text-slate-400 text-sm">UK Average</p>
                    <p className="text-3xl font-bold text-white">$82,917</p>
                    <p className="text-slate-500 text-xs">
                      £60,523 GBP
                    </p>
                  </div>
                  <div className="rounded-xl bg-slate-900/60 p-4 text-center">
                    <p className="text-slate-400 text-sm">Australia Average</p>
                    <p className="text-3xl font-bold text-white">$96,097</p>
                    <p className="text-slate-500 text-xs">
                      A$139,271 AUD
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6 space-y-4">
                <h3 className="text-xl font-bold text-white">
                  Salary by Experience Level
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between rounded-lg bg-slate-800/30 p-3">
                    <span className="text-slate-300">
                      0–10 years experience
                    </span>
                    <span className="text-white font-bold">
                      $90,544 average
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-slate-800/30 p-3">
                    <span className="text-slate-300">
                      10+ years experience
                    </span>
                    <span className="text-white font-bold">
                      $123,078 average
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-slate-800/30 p-3">
                    <span className="text-slate-300">
                      Large organizations (10K+ employees)
                    </span>
                    <span className="text-white font-bold">
                      $113,421 average
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-slate-800/30 p-3">
                    <span className="text-slate-300">
                      Small organizations (&lt;100 employees)
                    </span>
                    <span className="text-white font-bold">
                      $85,147 average
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6 space-y-4">
                <h3 className="text-xl font-bold text-white">
                  Certification Salary Premium
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  While IAAP doesn't publish specific salary data for certified
                  vs. uncertified professionals, industry sources and job posting
                  data indicate:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-4 rounded-lg bg-sky-900/20 p-4 border border-sky-500/20">
                    <span className="text-2xl">🎓</span>
                    <div>
                      <p className="text-white font-bold">
                        CPACC holders: +$5,000–$15,000
                      </p>
                      <p className="text-slate-400 text-sm">
                        Over uncertified peers in similar roles
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-lg bg-emerald-900/20 p-4 border border-emerald-500/20">
                    <span className="text-2xl">⚙️</span>
                    <div>
                      <p className="text-white font-bold">
                        WAS holders: +$10,000–$20,000+
                      </p>
                      <p className="text-slate-400 text-sm">
                        Technical certification commands higher premium
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-lg bg-amber-900/20 p-4 border border-amber-500/20">
                    <span className="text-2xl">👑</span>
                    <div>
                      <p className="text-white font-bold">
                        CPWA holders: +$15,000–$25,000+
                      </p>
                      <p className="text-slate-400 text-sm">
                        Leadership-level premium for comprehensive credential
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6 space-y-4">
                <h3 className="text-xl font-bold text-white">
                  Job Market Demand
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Accessibility careers are growing rapidly. Key indicators from
                  2026:
                </p>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-1">📈</span>
                    <span>
                      <strong>Indeed lists 53+ jobs</strong> specifically
                      requiring IAAP certification (as of March 2026)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-1">📈</span>
                    <span>
                      <strong>ZipRecruiter shows $50K–$235K salary range</strong>{" "}
                      for IAAP-related roles
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-1">📈</span>
                    <span>
                      <strong>90.9% of accessibility professionals work remote or hybrid</strong>{" "}
                      — location flexibility is exceptional
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-1">📈</span>
                    <span>
                      <strong>60.7% of accessibility professionals have a disability</strong>{" "}
                      — lived experience is valued and common in the field
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-1">📈</span>
                    <span>
                      Industries requiring certification:{" "}
                      <strong>
                        government, finance, healthcare, higher education,
                        enterprise tech
                      </strong>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 11: Which Cert */}
          <section id="which-cert" className="space-y-6">
            <h2 className="text-3xl font-bold text-white">
              11. Which Certification Should You Choose?
            </h2>
            <p className="text-lg leading-relaxed">
              Use this decision framework based on your current role and goals:
            </p>

            <div className="space-y-4">
              <div className="rounded-2xl border border-sky-500/30 bg-sky-950/10 p-6 space-y-3">
                <h3 className="text-xl font-bold text-sky-300">
                  Start with CPACC if you...
                </h3>
                <ul className="space-y-2 text-slate-300">
                  <li>✅ Are new to accessibility and want a structured foundation</li>
                  <li>✅ Work in a non-technical role (PM, design, content, compliance)</li>
                  <li>✅ Need to understand accessibility laws and standards for your organization</li>
                  <li>✅ Want to build credibility with employers quickly</li>
                  <li>✅ Plan to eventually pursue CPWA (CPACC is the first step)</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/10 p-6 space-y-3">
                <h3 className="text-xl font-bold text-emerald-300">
                  Start with WAS if you...
                </h3>
                <ul className="space-y-2 text-slate-300">
                  <li>✅ Are a developer or QA engineer with strong HTML/CSS/JS skills</li>
                  <li>✅ Already understand disability types and accessibility laws (from experience or self-study)</li>
                  <li>✅ Want to validate your technical accessibility implementation skills</li>
                  <li>✅ Work primarily on building and testing accessible web products</li>
                  <li>✅ Need a credential to differentiate yourself in a competitive developer job market</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-amber-500/30 bg-amber-950/10 p-6 space-y-3">
                <h3 className="text-xl font-bold text-amber-300">
                  Pursue CPWA if you...
                </h3>
                <ul className="space-y-2 text-slate-300">
                  <li>✅ Want to be recognized as a comprehensive accessibility expert</li>
                  <li>✅ Are targeting senior/lead accessibility roles</li>
                  <li>✅ Plan to consult or advise organizations on accessibility programs</li>
                  <li>✅ Want the maximum career ROI from accessibility credentials</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-green-500/30 bg-green-950/10 p-6 space-y-3">
                <h3 className="text-xl font-bold text-green-300">
                  Start with DHS Trusted Tester if you...
                </h3>
                <ul className="space-y-2 text-slate-300">
                  <li>✅ Can't invest in IAAP certification right now</li>
                  <li>✅ Work with or plan to work with US government clients</li>
                  <li>✅ Want a free, structured training program to build foundational testing skills</li>
                  <li>✅ Need a credential to start landing government accessibility contracts</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-purple-500/30 bg-purple-950/10 p-6 space-y-3">
                <h3 className="text-xl font-bold text-purple-300">
                  Consider ADS if you...
                </h3>
                <ul className="space-y-2 text-slate-300">
                  <li>✅ Specialize in PDF remediation or document accessibility</li>
                  <li>✅ Work in government, education, or legal sectors with heavy document workflows</li>
                  <li>✅ Want to capitalize on the{" "}
                    <Link
                      href="/blog/pdf-accessibility-guide-2026"
                      className="text-sky-400 underline hover:text-sky-300"
                    >
                      massive demand for accessible document specialists
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl border border-sky-500/30 bg-sky-950/10 p-5">
              <p className="text-slate-300 leading-relaxed">
                <strong className="text-sky-300">
                  💡 Pro tip:
                </strong>{" "}
                The most strategic path for career accessibility professionals is{" "}
                <strong>DHS Trusted Tester (free) → CPACC → WAS → CPWA</strong>.
                Start free, build foundation, then stack credentials. Each
                certification compounds the value of the previous ones.
              </p>
            </div>
          </section>

          {/* Section 12: Maintaining */}
          <section id="maintaining" className="space-y-6">
            <h2 className="text-3xl font-bold text-white">
              12. Maintaining Your Certification
            </h2>
            <p className="text-lg leading-relaxed">
              All IAAP certifications are valid for <strong>three years</strong>.
              To maintain them, you must earn{" "}
              <strong>45 Continuing Accessibility Education Credits (CAECs)</strong>{" "}
              during each renewal cycle. One hour of qualifying activity = one
              CAEC.
            </p>

            <div className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6 space-y-4">
              <h3 className="text-xl font-bold text-white">
                Qualifying CAEC Activities
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  {
                    activity: "Conferences & webinars",
                    example: "Axe-con, CSUN, M-Enabling Summit",
                  },
                  {
                    activity: "Training courses",
                    example: "Deque University, W3C WAI courses",
                  },
                  {
                    activity: "Teaching accessibility",
                    example: "Workshops, mentoring, university lectures",
                  },
                  {
                    activity: "Accessibility audits",
                    example: "Professional testing work counts",
                  },
                  {
                    activity: "Standards contributions",
                    example: "W3C working groups, WCAG feedback",
                  },
                  {
                    activity: "Open source contributions",
                    example: "Accessibility tools, documentation",
                  },
                  {
                    activity: "Publishing & presentations",
                    example: "Blog posts, conference talks, articles",
                  },
                  {
                    activity: "Self-study & research",
                    example: "Reading specifications, studying new standards",
                  },
                ].map((item) => (
                  <div
                    key={item.activity}
                    className="rounded-lg bg-slate-800/30 p-3 space-y-1"
                  >
                    <p className="text-white font-bold text-sm">
                      {item.activity}
                    </p>
                    <p className="text-slate-400 text-xs">{item.example}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-amber-500/30 bg-amber-950/10 p-5 space-y-3">
              <h3 className="text-lg font-bold text-amber-300">
                ⚠️ What Happens If Your Certification Lapses
              </h3>
              <p className="text-slate-300">
                If you don't earn 45 CAECs within the three-year cycle and don't
                renew, your certification becomes inactive. You'll need to{" "}
                <strong>retake the exam</strong> to reinstate it. IAAP membership
                waives the renewal fee during the validity period, making
                membership a practical requirement for maintaining
                certification.
              </p>
            </div>
          </section>

          {/* Section 13: Employer Guide */}
          <section id="employer-guide" className="space-y-6">
            <h2 className="text-3xl font-bold text-white">
              13. For Employers: Building an Accessibility-Certified Team
            </h2>
            <p className="text-lg leading-relaxed">
              If you're an employer or team lead looking to build accessibility
              competency across your organization, here's a strategic approach
              to certification:
            </p>

            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6 space-y-4">
                <h3 className="text-xl font-bold text-white">
                  Recommended Certification by Role
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      role: "C-Suite / VP Digital",
                      cert: "CPACC awareness (or sponsor team certifications)",
                      why: "Understand obligations, set accessibility culture",
                    },
                    {
                      role: "Product Managers",
                      cert: "CPACC",
                      why: "Write accessible requirements, prioritize accessibility in backlogs",
                    },
                    {
                      role: "UX/UI Designers",
                      cert: "CPACC → WAS",
                      why: "Design accessibly from the start, reducing remediation costs",
                    },
                    {
                      role: "Front-End Developers",
                      cert: "WAS (CPACC recommended first)",
                      why: "Implement WCAG-compliant code, use ARIA correctly",
                    },
                    {
                      role: "QA Engineers",
                      cert: "WAS + DHS Trusted Tester",
                      why: "Test comprehensively using standardized methodology",
                    },
                    {
                      role: "Content Creators",
                      cert: "CPACC",
                      why: "Write accessible content, proper heading structure, alt text",
                    },
                    {
                      role: "Document Specialists",
                      cert: "ADS",
                      why: "Create and remediate accessible PDFs and documents",
                    },
                    {
                      role: "Accessibility Lead",
                      cert: "CPWA + DHS Trusted Tester",
                      why: "Full expertise — lead audits, set standards, train teams",
                    },
                  ].map((item) => (
                    <div
                      key={item.role}
                      className="rounded-lg bg-slate-800/30 p-4 space-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-white font-bold">
                          {item.role}
                        </span>
                        <span className="text-sky-400 text-sm font-bold">
                          {item.cert}
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm">{item.why}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/10 p-5 space-y-3">
                <h3 className="text-lg font-bold text-emerald-300">
                  💡 The Business Case for Team Certification
                </h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>
                    • <strong>Reduce legal risk:</strong>{" "}
                    <Link
                      href="/blog/ada-lawsuits-ai-powered-pro-se-2025"
                      className="text-sky-400 underline hover:text-sky-300"
                    >
                      ADA lawsuits are up 40%
                    </Link>{" "}
                    — certified teams build accessible products from the start
                  </li>
                  <li>
                    • <strong>Cut remediation costs:</strong> Fixing
                    accessibility issues after launch costs 10-100x more than
                    building accessibly
                  </li>
                  <li>
                    • <strong>Win government contracts:</strong>{" "}
                    <Link
                      href="/blog/section-508-compliance-guide"
                      className="text-sky-400 underline hover:text-sky-300"
                    >
                      Section 508 compliance
                    </Link>{" "}
                    is required — certified teams produce better VPATs and pass
                    more procurement evaluations
                  </li>
                  <li>
                    • <strong>Tax credit opportunity:</strong>{" "}
                    <Link
                      href="/blog/irs-form-8826-disabled-access-credit-website-accessibility"
                      className="text-sky-400 underline hover:text-sky-300"
                    >
                      IRS Form 8826
                    </Link>{" "}
                    allows small businesses to claim up to $5,000/year for
                    accessibility expenditures — including certification costs
                  </li>
                  <li>
                    • <strong>Meet upcoming deadlines:</strong> The{" "}
                    <Link
                      href="/blog/ada-website-compliance-deadline-2025-2026"
                      className="text-sky-400 underline hover:text-sky-300"
                    >
                      ADA Title II April 2026 deadline
                    </Link>{" "}
                    and the{" "}
                    <Link
                      href="/blog/european-accessibility-act-eaa-compliance-us-businesses"
                      className="text-sky-400 underline hover:text-sky-300"
                    >
                      European Accessibility Act
                    </Link>{" "}
                    are driving unprecedented demand for accessibility expertise
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 14: FAQ */}
          <section id="faq" className="space-y-6">
            <h2 className="text-3xl font-bold text-white">
              14. Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "What is the IAAP and why does its certification matter?",
                  a: "The International Association of Accessibility Professionals (IAAP) is the global certifying body for digital accessibility practitioners. Founded in 2014, IAAP administers the most widely recognized accessibility credentials — CPACC, WAS, and CPWA. These certifications matter because they are increasingly required or preferred in job postings, government contracts, and enterprise procurement. An IAAP certification validates your knowledge against a standardized Body of Knowledge that employers trust.",
                },
                {
                  q: "How much does IAAP certification cost in total?",
                  a: "Including IAAP membership ($245/year) and exam fees: CPACC costs approximately $630 total, WAS approximately $675 total, and CPWA approximately $1,060 total (both exams). Add $0–$500 for optional prep materials (Deque University is $30/month). Developing economy discounts can reduce costs significantly. The investment typically pays for itself within 2-3 months through salary premium.",
                },
                {
                  q: "Should I get CPACC or WAS first?",
                  a: "Most professionals start with CPACC regardless of background — it provides the conceptual foundation that makes WAS material more meaningful. If you're a developer with strong accessibility experience, you could start with WAS. However, you need both for the CPWA credential, and CPACC gives you breadth of knowledge that strengthens your WAS preparation.",
                },
                {
                  q: "What is the CPACC exam pass rate?",
                  a: "IAAP doesn't publish official CPACC pass rates, but community data suggests 60-75% of well-prepared candidates pass on their first attempt. The WAS exam has a published ~59% pass rate (per Credly badge data). Both require serious preparation — plan for 40-80 hours (CPACC) or 60-120 hours (WAS) of study time.",
                },
                {
                  q: "How do I maintain my IAAP certification?",
                  a: "Earn 45 Continuing Accessibility Education Credits (CAECs) every three years. One hour of qualifying activity = one CAEC. Activities include conferences, training courses, teaching, audits, standards contributions, and self-study. IAAP membership waives the renewal fee. If your certification lapses, you must retake the exam.",
                },
                {
                  q: "Is IAAP certification worth the investment?",
                  a: "For most accessibility professionals, yes. The 2026 WebAIM Salary Survey reports average salaries of $101,688 globally ($121,083 in the US). Certified professionals typically command a $5,000-$20,000+ salary premium. The total investment of $630-$1,175 typically pays for itself within months.",
                },
                {
                  q: "Are there free alternatives to IAAP certification?",
                  a: "The DHS Trusted Tester certification is completely free and highly valued for government contract work. Deque University, W3C WAI, and Microsoft offer free training with completion certificates. However, these are training certificates (you completed a course), not professional certifications (you passed a standardized exam). For maximum career impact, use free resources to study and IAAP certification for credentialing.",
                },
                {
                  q: "How long does it take to prepare for the CPACC exam?",
                  a: "Most successful candidates study for 40-80 hours over 8-12 weeks. Someone already working in accessibility may need 4-6 weeks, while newcomers should plan for 10-12 weeks. Key resources: IAAP Body of Knowledge (free PDF), a prep course (Deque University or IAAP official), W3C WAI materials, and practice exams.",
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6 space-y-3"
                >
                  <h3 className="text-lg font-bold text-white">{faq.q}</h3>
                  <p className="text-slate-300 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-3xl border-2 border-emerald-500/50 bg-emerald-950/30 p-8 space-y-6 text-center">
            <h2 className="text-3xl font-bold text-white">
              Building Accessibility Skills? Start with a Baseline Scan
            </h2>
            <p className="text-lg text-emerald-100 leading-relaxed max-w-2xl mx-auto">
              Whether you're preparing for IAAP certification or building your
              team's accessibility competency, understanding your current state
              is the first step.{" "}
              <strong>RatedWithAI scans your website against WCAG criteria</strong>{" "}
              — the same standards covered in CPACC and WAS exams — giving you
              a practical baseline to learn from.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/"
                className="rounded-full bg-emerald-500 px-8 py-3 text-lg font-bold text-white hover:bg-emerald-400 transition-colors"
              >
                Scan Your Site Free →
              </Link>
            </div>
            <p className="text-emerald-300/60 text-sm">
              Free accessibility scan • No signup required • WCAG 2.1 AA
              testing
            </p>
          </section>

          {/* Related Articles */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white">
              Related Reading
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Section 508 Compliance: The Complete Guide for 2026",
                  href: "/blog/section-508-compliance-guide",
                  desc: "Everything you need for federal accessibility compliance — the standard IAAP certifications prepare you to implement.",
                },
                {
                  title:
                    "VPAT Guide: How to Create an Accessibility Conformance Report",
                  href: "/blog/vpat-accessibility-conformance-report-guide-2026",
                  desc: "The practical output of accessibility expertise — learn how to document WCAG conformance for government procurement.",
                },
                {
                  title:
                    "Best Accessibility Testing Tools Compared (2026)",
                  href: "/blog/best-accessibility-testing-tools-compared-2026",
                  desc: "The tools you'll use as a certified accessibility professional — axe-core, WAVE, Lighthouse, Pa11y, and more.",
                },
                {
                  title:
                    "PDF Accessibility: How to Make ADA-Compliant PDFs",
                  href: "/blog/pdf-accessibility-guide-2026",
                  desc: "Essential knowledge for the ADS certification — tagged PDFs, PDF/UA, and remediation workflows.",
                },
                {
                  title:
                    "ADA Title II April 2026 Deadline Countdown",
                  href: "/blog/ada-website-compliance-deadline-2025-2026",
                  desc: "Why organizations are scrambling to hire certified accessibility professionals right now.",
                },
                {
                  title:
                    "European Accessibility Act (EAA): What US Businesses Need to Know",
                  href: "/blog/european-accessibility-act-eaa-compliance-us-businesses",
                  desc: "International accessibility law — a key topic on the CPACC exam and an expanding career opportunity.",
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
