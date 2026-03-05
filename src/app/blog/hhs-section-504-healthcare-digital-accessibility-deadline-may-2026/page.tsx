import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "HHS Section 504: Healthcare Digital Accessibility Deadline May 2026 — Complete Compliance Guide | RatedWithAI",
  description:
    "HHS Section 504 healthcare accessibility deadline is May 11, 2026. Complete compliance guide for hospitals, clinics, insurers, medical schools. Patient portals, telehealth, kiosks, and websites must meet WCAG 2.1 AA. Separate from ADA Title II/III — enforcement starts in 69 days.",
  openGraph: {
    title: "HHS Section 504: Healthcare Digital Accessibility Deadline May 2026",
    description:
      "Complete compliance guide for healthcare providers. May 11, 2026 deadline — patient portals, telehealth, kiosks, and websites must meet WCAG 2.1 AA.",
    type: "article",
  },
};

export default function BlogPost() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do private physician practices have to comply with HHS Section 504?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, if you accept Medicare, Medicaid, CHIP, or any other HHS funding. The exception: practices with fewer than 15 employees have until May 11, 2028. If you're part of a larger health system or hospital-affiliated, the 2026 deadline applies."
        }
      },
      {
        "@type": "Question",
        "name": "Does Section 504 apply to telehealth platforms?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Telehealth platforms — including video interfaces, chat features, pre-visit forms, and virtual waiting rooms — must be accessible. This includes both proprietary platforms and third-party tools like Zoom or Doxy.me."
        }
      },
      {
        "@type": "Question",
        "name": "What about mobile apps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The HHS rule explicitly covers mobile applications. If your hospital or health system offers a patient portal app (iOS or Android), it must meet WCAG 2.1 AA."
        }
      },
      {
        "@type": "Question",
        "name": "Are medical kiosks covered?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Check-in kiosks, wayfinding kiosks, pharmacy kiosks, and payment kiosks must provide accessible alternatives — including audio output, keyboard/tactile input, and wheelchair-accessible positioning. This is unique to the healthcare sector."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use an accessibility overlay to comply?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Overlay widgets (accessiBe, AudioEye, UserWay) do not provide compliance. They often introduce new barriers for screen reader users. OCR will evaluate the actual user experience, not vendor marketing claims. Fix the underlying code."
        }
      },
      {
        "@type": "Question",
        "name": "What if my vendor (Epic, Cerner) isn't compliant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You're still responsible. Request a VPAT (Voluntary Product Accessibility Template) from your vendor. If they're not compliant, ask for a remediation plan with timelines. If they refuse, you may need to budget for custom fixes or switch vendors. Review your contract for accessibility guarantees."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if I'm not compliant by May 11, 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HHS OCR can initiate a compliance review or investigate patient complaints. Enforcement options include voluntary compliance agreements (with deadlines and milestones) or, in severe cases, termination of HHS funding (Medicare/Medicaid payments). Demonstrate good-faith effort and a credible remediation plan to avoid penalties."
        }
      },
      {
        "@type": "Question",
        "name": "Is this the same as the DOJ ADA Title II rule?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. They're separate rules with different deadlines and covered entities. HHS Section 504 applies to healthcare providers receiving HHS funding (May 11, 2026 deadline). DOJ ADA Title II applies to state/local government websites (April 24, 2026 deadline). Many public hospitals must comply with both."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": "HHS Section 504: Healthcare Digital Accessibility Deadline May 2026 — Complete Compliance Guide",
    "description": "HHS Section 504 healthcare accessibility deadline is May 11, 2026. Complete compliance guide for hospitals, clinics, insurers, medical schools.",
    "datePublished": "2026-03-05",
    "author": {
      "@type": "Organization",
      "name": "RatedWithAI"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <article className="prose prose-lg max-w-none">
          <div className="mb-8">
            <Link
              href="/blog"
              className="text-blue-600 hover:text-blue-700 no-underline"
            >
              ← Back to Blog
            </Link>
          </div>

          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">
              HHS Section 504: Healthcare Digital Accessibility Deadline May 2026 — Complete Compliance Guide
            </h1>
            <div className="flex items-center gap-4 text-gray-600">
              <time dateTime="2026-03-05">March 5, 2026</time>
              <span>•</span>
              <span>14 min read</span>
              <span>•</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                Healthcare
              </span>
            </div>
          </header>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
            <p className="text-lg font-semibold mb-2">⏰ 69 Days Until Enforcement</p>
            <p className="mb-0">
              Healthcare providers receiving HHS funding have until <strong>May 11, 2026</strong> to make patient portals, websites, telehealth platforms, and kiosks accessible under Section 504. This is <strong>separate from ADA Title II/III</strong> — different law, different deadline, different covered entities.
            </p>
          </div>

          <h2>What Is HHS Section 504?</h2>
          <p>
            Section 504 of the Rehabilitation Act of 1973 prohibits discrimination based on disability by any program or activity receiving federal financial assistance from the U.S. Department of Health and Human Services (HHS).
          </p>
          <p>
            On September 9, 2024, HHS published a <strong>final rule</strong> requiring healthcare entities to ensure their web content and mobile apps are accessible to people with disabilities. The rule applies WCAG 2.1 Level AA as the technical standard and sets a compliance deadline of <strong>May 11, 2026</strong>.
          </p>
          <p>
            This is <em>not</em> the same as the DOJ's ADA Title II rule (which covers state/local government websites and has an April 24, 2026 deadline). Section 504 targets <strong>healthcare-specific digital experiences</strong> — patient portals, appointment scheduling, telehealth, prescription refills, lab results, and even medical kiosks.
          </p>

          <h2>Who Must Comply with Section 504?</h2>
          <p>
            Any healthcare entity receiving HHS funding must comply. This includes:
          </p>
          <ul>
            <li><strong>Hospitals and health systems</strong> — including emergency departments, outpatient clinics, and specialty centers</li>
            <li><strong>Physician practices and clinics</strong> — if they accept Medicare, Medicaid, CHIP, or other HHS programs</li>
            <li><strong>Health insurance companies</strong> — member portals, plan selection tools, claims systems</li>
            <li><strong>Pharmacies</strong> — prescription refill portals, mail-order systems</li>
            <li><strong>Medical schools and research institutions</strong> — if receiving NIH grants or other HHS funding</li>
            <li><strong>Nursing homes and assisted living facilities</strong> — resident portals, family communication systems</li>
            <li><strong>Mental health and substance abuse treatment centers</strong></li>
            <li><strong>Home health agencies</strong></li>
            <li><strong>Laboratory and diagnostic centers</strong> — patient result portals</li>
          </ul>
          <p>
            If your organization receives <em>any</em> HHS funding — Medicare reimbursements, Medicaid payments, NIH grants, HRSA grants, CDC funding — you're covered. The funding doesn't have to be your primary revenue source.
          </p>

          <h2>Section 504 vs. ADA: Key Differences</h2>
          <p>
            Many healthcare providers are asking: "How is this different from the ADA?" Here's the breakdown:
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Aspect</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">HHS Section 504</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">ADA Title II/III</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>Enforcing Agency</strong></td>
                  <td className="border border-gray-300 px-4 py-2">HHS Office for Civil Rights (OCR)</td>
                  <td className="border border-gray-300 px-4 py-2">DOJ (Title II/III)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>Who's Covered</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Healthcare entities receiving HHS funding</td>
                  <td className="border border-gray-300 px-4 py-2">State/local govt (Title II), private businesses (Title III)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>Deadline</strong></td>
                  <td className="border border-gray-300 px-4 py-2">May 11, 2026</td>
                  <td className="border border-gray-300 px-4 py-2">April 24, 2026 (Title II)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>Standard</strong></td>
                  <td className="border border-gray-300 px-4 py-2">WCAG 2.1 Level AA (mandatory)</td>
                  <td className="border border-gray-300 px-4 py-2">WCAG 2.1 Level AA (Title II); no single standard for Title III</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>Scope</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Patient portals, telehealth, kiosks, mobile apps, websites</td>
                  <td className="border border-gray-300 px-4 py-2">Public-facing government/business websites</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>Enforcement</strong></td>
                  <td className="border border-gray-300 px-4 py-2">OCR complaints, funding termination, voluntary compliance</td>
                  <td className="border border-gray-300 px-4 py-2">DOJ investigations + private lawsuits</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>Bottom line:</strong> If you're a hospital accepting Medicare, you likely need to comply with <em>both</em> Section 504 (HHS) <em>and</em> ADA Title II or III (DOJ). Different agencies, different deadlines, same technical standard (WCAG 2.1 AA).
          </p>

          <h2>What Digital Properties Must Be Accessible?</h2>
          <p>
            The HHS rule covers all "web content and mobile applications" used by patients and the public. This includes:
          </p>

          <h3>1. Patient Portals</h3>
          <ul>
            <li>Appointment scheduling and cancellation</li>
            <li>Viewing lab results and medical records</li>
            <li>Prescription refill requests</li>
            <li>Secure messaging with providers</li>
            <li>Bill payment and insurance verification</li>
            <li>Health history forms and intake questionnaires</li>
          </ul>

          <h3>2. Public-Facing Websites</h3>
          <ul>
            <li>Find-a-doctor search tools</li>
            <li>Location and hours information</li>
            <li>Service line descriptions (e.g., cardiology, oncology)</li>
            <li>Health education resources</li>
            <li>Career portals and job applications</li>
            <li>Event registration and community programs</li>
          </ul>

          <h3>3. Telehealth Platforms</h3>
          <ul>
            <li>Video consultation interfaces</li>
            <li>Screen sharing and whiteboard tools</li>
            <li>Chat and messaging features</li>
            <li>Pre-visit check-in forms</li>
            <li>Virtual waiting rooms</li>
            <li>Remote patient monitoring dashboards</li>
          </ul>

          <h3>4. Mobile Apps</h3>
          <ul>
            <li>Native iOS and Android apps for patient access</li>
            <li>Health tracking and symptom checkers</li>
            <li>Medication reminders and adherence tools</li>
            <li>Appointment notification and check-in</li>
          </ul>

          <h3>5. Medical Kiosks (Unique to Healthcare)</h3>
          <p>
            This is where Section 504 goes beyond typical web accessibility. The rule <strong>also covers self-service kiosks</strong> used in healthcare settings:
          </p>
          <ul>
            <li><strong>Check-in kiosks</strong> — appointment confirmation, insurance verification</li>
            <li><strong>Wayfinding kiosks</strong> — hospital directory, room locators</li>
            <li><strong>Pharmacy kiosks</strong> — prescription pickup, refill ordering</li>
            <li><strong>Payment kiosks</strong> — bill payment, co-pay processing</li>
          </ul>
          <p>
            Kiosks must provide equivalent functionality for users with disabilities — including audio output, tactile controls, screen reader compatibility, and adjustable height or wheelchair accessibility.
          </p>

          <h2>Technical Standard: WCAG 2.1 Level AA</h2>
          <p>
            HHS adopted the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA as the mandatory standard. This is the same standard used by the DOJ's ADA Title II rule and widely accepted internationally (European Accessibility Act, UK Equality Act, Canadian ACA).
          </p>
          <p>
            WCAG 2.1 AA includes <strong>50 success criteria</strong> across four principles (POUR):
          </p>
          <ul>
            <li><strong>Perceivable</strong> — Information must be presentable to users in ways they can perceive (e.g., alt text for images, captions for videos)</li>
            <li><strong>Operable</strong> — Users must be able to operate interface components (e.g., keyboard navigation, sufficient time to complete tasks)</li>
            <li><strong>Understandable</strong> — Information and operation must be understandable (e.g., clear labels, consistent navigation)</li>
            <li><strong>Robust</strong> — Content must work with assistive technologies (e.g., proper HTML semantics, ARIA attributes)</li>
          </ul>
          <p>
            For a detailed breakdown, see our <Link href="/blog/how-to-make-website-ada-compliant-2026">10-Step ADA Compliance Guide</Link>.
          </p>

          <h2>Compliance Exceptions and Extensions</h2>
          <p>
            The HHS rule includes two limited exceptions:
          </p>

          <h3>1. Small Provider Exception</h3>
          <p>
            Healthcare providers with <strong>fewer than 15 employees</strong> have until <strong>May 11, 2028</strong> to comply (a 2-year extension). This applies to small physician practices, solo practitioners, and small clinics.
          </p>
          <p>
            However, if you're part of a larger health system or accept Medicare/Medicaid, the 2026 deadline likely still applies. Consult legal counsel to determine your classification.
          </p>

          <h3>2. Undue Burden or Fundamental Alteration</h3>
          <p>
            Covered entities can claim "undue burden" if compliance would impose significant difficulty or expense relative to the entity's resources. However:
          </p>
          <ul>
            <li>The burden of proof is on the healthcare provider</li>
            <li>"Undue burden" is evaluated on a <em>case-by-case</em> basis</li>
            <li>Financial difficulty alone is rarely sufficient — you must show you've explored all reasonable alternatives</li>
            <li>Even if granted, you must still provide <strong>alternative means of access</strong> (e.g., phone support, in-person assistance)</li>
          </ul>
          <p>
            <strong>Reality check:</strong> For most hospitals and health systems, "undue burden" will not apply. Major academic medical centers, multi-hospital systems, and national insurers cannot credibly claim financial hardship for web accessibility.
          </p>

          <h2>Enforcement and Penalties</h2>
          <p>
            HHS Office for Civil Rights (OCR) enforces Section 504 through:
          </p>

          <h3>1. Patient Complaints</h3>
          <p>
            Any patient who encounters an inaccessible digital experience can file a complaint with OCR. The process:
          </p>
          <ul>
            <li>Patient submits complaint to OCR (online, mail, or phone)</li>
            <li>OCR investigates — requests documentation from the healthcare provider</li>
            <li>Provider must demonstrate compliance or propose a remediation plan</li>
            <li>OCR can require <strong>voluntary compliance agreements</strong> with timelines and milestones</li>
          </ul>

          <h3>2. Compliance Reviews</h3>
          <p>
            OCR can initiate proactive compliance reviews of healthcare entities — even without a patient complaint. These reviews assess whether the provider's digital properties meet WCAG 2.1 AA.
          </p>

          <h3>3. Funding Termination</h3>
          <p>
            The most severe penalty: <strong>termination of HHS funding</strong>. If a provider refuses to comply after OCR's investigation and voluntary compliance efforts, HHS can cut off Medicare/Medicaid payments, NIH grants, or other federal funding.
          </p>
          <p>
            For most hospitals, this would be financially catastrophic. Medicare accounts for 20-40% of hospital revenue. Losing it would force closure.
          </p>

          <h3>4. Private Lawsuits?</h3>
          <p>
            Section 504 does <em>not</em> create a private right of action for monetary damages. Patients cannot sue for cash settlements like they can under ADA Title III.
          </p>
          <p>
            However, patients <em>can</em> sue for <strong>injunctive relief</strong> (court orders requiring compliance) and attorney's fees. So while you won't face $10,000 settlements, you could face expensive litigation and court-ordered remediation.
          </p>

          <h2>Current State of Healthcare Accessibility</h2>
          <p>
            How ready is the healthcare industry? Not very.
          </p>

          <h3>Patient Portal Accessibility (2025 Study)</h3>
          <p>
            A 2025 study by the Center for American Progress tested 50 major hospital patient portals for WCAG 2.1 AA compliance:
          </p>
          <ul>
            <li><strong>82% failed</strong> basic accessibility testing</li>
            <li>Common issues: keyboard navigation failures, missing form labels, insufficient color contrast, inaccessible PDF forms</li>
            <li>Epic MyChart portals scored highest (58% pass rate)</li>
            <li>Smaller hospital custom portals scored lowest (12% pass rate)</li>
          </ul>

          <h3>Telehealth Platform Gaps</h3>
          <p>
            Deque Systems audited 15 popular telehealth platforms in late 2025:
          </p>
          <ul>
            <li><strong>Only 3 platforms</strong> (20%) met WCAG 2.1 AA across all features</li>
            <li>Video controls, screen sharing, and chat interfaces had the most violations</li>
            <li>Platforms optimized for mobile had worse accessibility than desktop versions</li>
          </ul>

          <h3>Medical Kiosk Challenges</h3>
          <p>
            Kiosks present unique challenges:
          </p>
          <ul>
            <li>Most kiosks are <strong>touchscreen-only</strong> — no keyboard or audio alternatives</li>
            <li>Fixed height and angle excludes wheelchair users</li>
            <li>No screen reader support on proprietary embedded systems</li>
            <li>Small text and low-contrast interfaces common in older kiosks</li>
          </ul>
          <p>
            Healthcare Law Insights estimates that <strong>replacing or retrofitting kiosks</strong> will be the single highest accessibility expense for many hospitals — ranging from $5,000 to $25,000 per kiosk depending on the solution.
          </p>

          <h2>5-Step Compliance Roadmap (69 Days)</h2>
          <p>
            With just over two months until the May 11 deadline, here's a prioritized action plan:
          </p>

          <h3>Step 1: Inventory Your Digital Properties (Week 1)</h3>
          <p>
            Create a complete list of all patient-facing and public-facing digital touchpoints:
          </p>
          <ul>
            <li>Patient portal (Epic MyChart, Cerner HealtheLife, custom build?)</li>
            <li>Main hospital/clinic website</li>
            <li>Telehealth platform (Zoom, Doxy.me, proprietary?)</li>
            <li>Mobile apps (iOS, Android)</li>
            <li>Kiosks (check-in, wayfinding, pharmacy, payment)</li>
            <li>Third-party integrations (appointment scheduling, bill payment)</li>
          </ul>
          <p>
            Assign ownership for each property. Who's responsible for fixing it? IT? Marketing? Vendor?
          </p>

          <h3>Step 2: Baseline Accessibility Audit (Week 2)</h3>
          <p>
            Test your top-priority properties against WCAG 2.1 AA:
          </p>
          <ul>
            <li><strong>Automated scanning</strong> — Tools like our <Link href="/">Free Scanner</Link>, axe DevTools, WAVE can catch 30-40% of issues (missing alt text, color contrast, HTML validation)</li>
            <li><strong>Manual testing</strong> — Keyboard navigation, screen reader testing (NVDA, JAWS, VoiceOver), form usability</li>
            <li><strong>Real user testing</strong> — If possible, recruit patients with disabilities to test key workflows (booking appointments, viewing lab results)</li>
          </ul>
          <p>
            Prioritize the <strong>10 most common patient tasks</strong>:
          </p>
          <ol>
            <li>Schedule an appointment</li>
            <li>View lab results</li>
            <li>Request prescription refill</li>
            <li>Message provider</li>
            <li>Pay a bill</li>
            <li>Update personal information</li>
            <li>Find a doctor</li>
            <li>Access telehealth visit</li>
            <li>Complete intake forms</li>
            <li>Check in at kiosk</li>
          </ol>
          <p>
            If these 10 workflows are accessible, you've addressed the majority of patient needs.
          </p>

          <h3>Step 3: Engage Your Vendors (Week 3)</h3>
          <p>
            If you use third-party platforms (Epic, Cerner, Zoom, etc.), contact them <em>immediately</em>:
          </p>
          <ul>
            <li><strong>Request VPAT</strong> (Voluntary Product Accessibility Template) — vendor's documented WCAG conformance</li>
            <li><strong>Ask about remediation plans</strong> — Are they releasing accessibility updates before May 11?</li>
            <li><strong>Review contracts</strong> — Does your SLA include accessibility guarantees? Who's liable if the vendor doesn't comply?</li>
          </ul>
          <p>
            For custom-built platforms, allocate budget for developer remediation work. Expect 40-120 hours of development time per major platform depending on current state.
          </p>

          <h3>Step 4: Fix High-Impact Issues (Weeks 4-8)</h3>
          <p>
            Focus on the issues that affect the most patients:
          </p>
          <ul>
            <li><strong>Keyboard navigation</strong> — Ensure all interactive elements (buttons, forms, dropdowns) work without a mouse</li>
            <li><strong>Form labels</strong> — Every input field needs a clear, programmatically associated label</li>
            <li><strong>Color contrast</strong> — Text and UI elements must meet 4.5:1 ratio for normal text, 3:1 for large text</li>
            <li><strong>Alt text</strong> — All informational images need descriptive alt attributes</li>
            <li><strong>Headings hierarchy</strong> — Use H1, H2, H3 properly to structure content for screen readers</li>
            <li><strong>Skip links</strong> — "Skip to main content" link at top of every page</li>
            <li><strong>Accessible PDFs</strong> — Lab results, billing statements, consent forms must be tagged and readable</li>
          </ul>
          <p>
            For kiosks, explore:
          </p>
          <ul>
            <li><strong>Software updates</strong> from kiosk vendor for screen reader support</li>
            <li><strong>Audio output jacks</strong> for headphones (private audio navigation)</li>
            <li><strong>Tactile keypad</strong> overlays for touchscreen interfaces</li>
            <li><strong>Adjustable-height kiosks</strong> or companion tablet stations at wheelchair-accessible height</li>
            <li><strong>Staff-assisted alternative</strong> — Train front desk staff to complete kiosk tasks for patients who need assistance</li>
          </ul>

          <h3>Step 5: Document Compliance Efforts (Weeks 9-10)</h3>
          <p>
            Even if you're not 100% compliant by May 11, <strong>document what you've done</strong>:
          </p>
          <ul>
            <li>Accessibility audit reports (before/after)</li>
            <li>Remediation plans with timelines</li>
            <li>Staff training records (who was trained on accessibility?)</li>
            <li>Vendor VPATs and compliance letters</li>
            <li>Budget allocation for ongoing accessibility work</li>
          </ul>
          <p>
            If OCR investigates, demonstrating <strong>good-faith effort and a credible plan</strong> goes a long way. They're more interested in forward progress than punitive action.
          </p>

          <h2>Long-Term Accessibility Strategy</h2>
          <p>
            May 11, 2026 is not the finish line — it's the starting line. Healthcare accessibility is an ongoing responsibility.
          </p>

          <h3>Build an Accessibility Program</h3>
          <ul>
            <li><strong>Appoint an accessibility coordinator</strong> — Someone (ideally full-time) responsible for organization-wide compliance</li>
            <li><strong>Create a governance committee</strong> — Representatives from IT, legal, patient experience, marketing, and clinical leadership</li>
            <li><strong>Establish policies</strong> — Procurement standards (all new software must include VPAT), development standards (accessibility requirements in RFPs), content standards (accessibility checklist for all web updates)</li>
          </ul>

          <h3>Train Your Team</h3>
          <ul>
            <li><strong>Developers</strong> — WCAG 2.1 training, accessible coding practices, testing tools</li>
            <li><strong>Content creators</strong> — Writing alt text, creating accessible PDFs, captioning videos</li>
            <li><strong>Designers</strong> — Color contrast, focus indicators, touch target sizes</li>
            <li><strong>Front desk staff</strong> — Assisting patients with kiosks, providing alternative access methods</li>
          </ul>

          <h3>Monitor and Test Continuously</h3>
          <ul>
            <li><strong>Automated monitoring</strong> — Scan your patient portal and website weekly for regressions</li>
            <li><strong>Manual audits</strong> — Quarterly comprehensive WCAG 2.1 audits of critical workflows</li>
            <li><strong>User feedback</strong> — Create a clear channel for patients to report accessibility issues</li>
          </ul>

          <h2>Cost Estimates</h2>
          <p>
            What will compliance cost? It varies widely based on your digital footprint and current state:
          </p>

          <h3>Small Practice (&lt;15 employees)</h3>
          <ul>
            <li><strong>Website remediation:</strong> $2,000–$8,000 (developer hours or accessibility overlay subscription)</li>
            <li><strong>Patient portal:</strong> Often managed by vendor (Epic, athenahealth) — verify vendor compliance, minimal cost</li>
            <li><strong>Total:</strong> $2,000–$10,000 one-time + $500–$2,000/year ongoing</li>
          </ul>

          <h3>Mid-Size Hospital or Clinic (1-3 locations)</h3>
          <ul>
            <li><strong>Website:</strong> $10,000–$30,000 (comprehensive audit + remediation)</li>
            <li><strong>Patient portal:</strong> $5,000–$20,000 (custom fixes if not vendor-managed)</li>
            <li><strong>Kiosks:</strong> $15,000–$75,000 (3-5 kiosks × $5K-$15K each for retrofitting)</li>
            <li><strong>Telehealth:</strong> $5,000–$15,000 (vendor upgrades or custom fixes)</li>
            <li><strong>Total:</strong> $35,000–$140,000 one-time + $10,000–$25,000/year</li>
          </ul>

          <h3>Large Health System (10+ locations)</h3>
          <ul>
            <li><strong>Website and patient portal:</strong> $100,000–$300,000 (enterprise-scale audit, dev work, testing)</li>
            <li><strong>Kiosks:</strong> $200,000–$500,000 (40-100 kiosks across facilities)</li>
            <li><strong>Mobile apps:</strong> $50,000–$150,000 (iOS + Android remediation)</li>
            <li><strong>Telehealth:</strong> $25,000–$100,000 (custom integrations, vendor upgrades)</li>
            <li><strong>Training and governance:</strong> $50,000–$100,000 (staff training, program setup)</li>
            <li><strong>Total:</strong> $425,000–$1,150,000 one-time + $100,000–$250,000/year</li>
          </ul>
          <p>
            Compare these costs to the alternative: losing Medicare funding or facing repeated OCR complaints. For most hospitals, accessibility is a <strong>cost of doing business</strong> — not optional.
          </p>

          <h2>Common Mistakes to Avoid</h2>

          <h3>1. Installing an Accessibility Overlay Widget</h3>
          <p>
            Overlay widgets (accessiBe, AudioEye, UserWay) <strong>do not provide Section 504 compliance</strong>. They add a JavaScript toolbar that claims to "fix" accessibility, but:
          </p>
          <ul>
            <li>They don't address underlying code issues</li>
            <li>Screen reader users often find them disruptive or broken</li>
            <li>The FTC <Link href="/blog/ftc-accessibe-fine-overlay-failures">fined accessiBe $1 million</Link> for false advertising about compliance guarantees</li>
            <li>OCR will evaluate the <em>actual experience</em> for users with disabilities — not marketing claims</li>
          </ul>
          <p>
            <strong>Bottom line:</strong> Fix the code. Don't rely on overlays.
          </p>

          <h3>2. Ignoring Third-Party Content</h3>
          <p>
            If you embed third-party tools (appointment schedulers, payment gateways, chatbots), <strong>you're still responsible</strong> for their accessibility. Just because it's a vendor's code doesn't shield you from OCR enforcement.
          </p>
          <p>
            Solution: Include accessibility requirements in all vendor contracts. Request VPATs before signing.
          </p>

          <h3>3. Treating PDFs as an Afterthought</h3>
          <p>
            Many hospitals distribute critical information via PDF: lab results, consent forms, billing statements, treatment instructions. Untagged PDFs are <strong>completely inaccessible</strong> to screen reader users.
          </p>
          <p>
            See our <Link href="/blog/pdf-accessibility">PDF Accessibility Guide</Link> for step-by-step remediation.
          </p>

          <h3>4. Assuming Mobile Apps Are Exempt</h3>
          <p>
            The HHS rule explicitly covers mobile apps. If your hospital has a patient portal app, it must meet WCAG 2.1 AA just like the website version.
          </p>
          <p>
            iOS and Android have <strong>built-in accessibility APIs</strong> (VoiceOver, TalkBack, Switch Control). Use them.
          </p>

          <h2>Resources</h2>
          <ul>
            <li><Link href="https://www.hhs.gov/civil-rights/for-providers/compliance-enforcement/rulemaking/section-504/index.html">HHS Section 504 Final Rule (Official Text)</Link></li>
            <li><Link href="https://www.hhs.gov/civil-rights/for-individuals/disability/index.html">OCR Disability Rights Portal</Link></li>
            <li><Link href="https://www.w3.org/WAI/WCAG21/quickref/">WCAG 2.1 Quick Reference</Link></li>
            <li><Link href="/blog/how-to-make-website-ada-compliant-2026">How to Make Your Website ADA Compliant (10-Step Guide)</Link></li>
            <li><Link href="/blog/ada-title-ii-april-2026-deadline-countdown">ADA Title II April 2026 Deadline</Link> (for public hospitals and state university medical centers)</li>
            <li><Link href="/">Free Website Accessibility Scanner</Link> — Test your patient portal and website in 60 seconds</li>
          </ul>

          <h2>Frequently Asked Questions</h2>

          <h3>Do private physician practices have to comply?</h3>
          <p>
            Yes, <em>if</em> you accept Medicare, Medicaid, CHIP, or any other HHS funding. The exception: practices with fewer than 15 employees have until May 11, 2028. If you're part of a larger health system or hospital-affiliated, the 2026 deadline applies.
          </p>

          <h3>Does Section 504 apply to telehealth platforms?</h3>
          <p>
            Yes. Telehealth platforms — including video interfaces, chat features, pre-visit forms, and virtual waiting rooms — must be accessible. This includes both proprietary platforms and third-party tools like Zoom or Doxy.me.
          </p>

          <h3>What about mobile apps?</h3>
          <p>
            Yes. The HHS rule explicitly covers mobile applications. If your hospital or health system offers a patient portal app (iOS or Android), it must meet WCAG 2.1 AA.
          </p>

          <h3>Are medical kiosks covered?</h3>
          <p>
            Yes. Check-in kiosks, wayfinding kiosks, pharmacy kiosks, and payment kiosks must provide accessible alternatives — including audio output, keyboard/tactile input, and wheelchair-accessible positioning. This is unique to the healthcare sector.
          </p>

          <h3>Can I use an accessibility overlay to comply?</h3>
          <p>
            No. Overlay widgets (accessiBe, AudioEye, UserWay) do not provide compliance. They often introduce new barriers for screen reader users. OCR will evaluate the actual user experience, not vendor marketing claims. Fix the underlying code.
          </p>

          <h3>What if my vendor (Epic, Cerner) isn't compliant?</h3>
          <p>
            You're still responsible. Request a VPAT (Voluntary Product Accessibility Template) from your vendor. If they're not compliant, ask for a remediation plan with timelines. If they refuse, you may need to budget for custom fixes or switch vendors. Review your contract for accessibility guarantees.
          </p>

          <h3>What happens if I'm not compliant by May 11, 2026?</h3>
          <p>
            HHS OCR can initiate a compliance review or investigate patient complaints. Enforcement options include voluntary compliance agreements (with deadlines and milestones) or, in severe cases, termination of HHS funding (Medicare/Medicaid payments). Demonstrate good-faith effort and a credible remediation plan to avoid penalties.
          </p>

          <h3>Is this the same as the DOJ ADA Title II rule?</h3>
          <p>
            No. They're separate rules with different deadlines and covered entities. HHS Section 504 applies to healthcare providers receiving HHS funding (May 11, 2026 deadline). DOJ ADA Title II applies to state/local government websites (April 24, 2026 deadline). Many public hospitals must comply with <em>both</em>.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
            <h3 className="mt-0">Start Your Compliance Audit Today</h3>
            <p className="mb-4">
              With just 69 days until the May 11, 2026 HHS Section 504 deadline, time is critical. Our free scanner tests your patient portal or website against WCAG 2.1 AA in 60 seconds — no signup required.
            </p>
            <Link
              href="/"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 no-underline"
            >
              Scan Your Healthcare Website Now →
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              <strong>About RatedWithAI:</strong> We help healthcare providers and businesses achieve genuine accessibility compliance through automated scanning, manual audits, and ongoing monitoring. Our tools are built for developers and compliance teams — no overlays, no false promises.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
