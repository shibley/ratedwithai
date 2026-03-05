import { Metadata } from 'next';
import BlogLayout from '@/components/BlogLayout';

export const metadata: Metadata = {
  title: 'HHS Section 504: Healthcare Digital Accessibility Deadline May 2026 — Complete Compliance Guide',
  description: 'May 11, 2026 deadline approaching for healthcare providers receiving HHS funding. Complete guide to Section 504 web, mobile app, and kiosk accessibility requirements under WCAG 2.1 AA.',
  keywords: [
    'section 504 healthcare',
    'hhs accessibility requirements',
    'healthcare digital accessibility',
    'section 504 may 2026 deadline',
    'wcag 2.1 healthcare',
    'patient portal accessibility',
    'telehealth accessibility',
    'medical kiosk accessibility',
    'hhs section 504 compliance',
    'healthcare website accessibility'
  ],
  openGraph: {
    title: 'HHS Section 504: Healthcare Digital Accessibility Deadline May 2026',
    description: 'Complete compliance guide for hospitals, clinics, and healthcare providers facing May 2026 Section 504 digital accessibility requirements.',
    type: 'article',
    publishedTime: '2026-03-05T07:00:00Z',
    authors: ['RatedWithAI Team']
  }
};

export default function Page() {
  return (
    <BlogLayout
      title="HHS Section 504: Healthcare Digital Accessibility Deadline May 2026 — Complete Compliance Guide"
      publishDate="March 5, 2026"
      readTime="16 min read"
    >
      <p className="lead">
        On May 11, 2026 — just 67 days from now — thousands of healthcare organizations will face the first compliance deadline under HHS's updated Section 504 digital accessibility rule. If your hospital, clinic, health insurer, medical school, or healthcare organization receives any federal funding from the Department of Health and Human Services, your websites, mobile apps, and kiosks must meet WCAG 2.1 Level AA accessibility standards.
      </p>

      <p>
        Unlike the ADA Title II rule (which applies to state and local government), <strong>Section 504 of the Rehabilitation Act covers any healthcare entity receiving HHS funding</strong> — regardless of whether you're public or private. That includes Medicare, Medicaid, research grants, or any other form of federal health assistance.
      </p>

      <p>
        This is the first major update to Section 504 regulations in almost 50 years, and it represents a fundamental shift in how healthcare organizations must deliver digital services. Patient portals, appointment booking, telehealth platforms, prescription refills, insurance claims, check-in kiosks — if patients interact with it digitally, it must be accessible.
      </p>

      <p>
        Here's everything you need to know to prepare.
      </p>

      <h2>What Is Section 504 of the Rehabilitation Act?</h2>

      <p>
        Section 504 of the Rehabilitation Act of 1973 is a federal civil rights law that prohibits discrimination on the basis of disability in any program or activity receiving federal financial assistance.
      </p>

      <p>
        <strong>The key distinction:</strong> While the ADA applies to businesses and state/local government based on size or type, Section 504 applies based on <em>federal funding</em>. If you receive federal dollars from HHS — even indirectly — you're covered.
      </p>

      <p>
        On May 9, 2024, HHS published a major update to its Section 504 regulations — the first comprehensive rewrite since 1977. The updated rule took effect on July 8, 2024, and sets phased compliance deadlines beginning May 11, 2026.
      </p>

      <h2>Who Does the Section 504 Digital Accessibility Rule Apply To?</h2>

      <p>
        Section 504 defines a "recipient" broadly to include <strong>any entity to which federal financial assistance from HHS is extended directly or through another recipient</strong>.
      </p>

      <p>
        This includes:
      </p>

      <ul>
        <li><strong>Hospitals and health systems</strong> (including private hospitals that accept Medicare/Medicaid)</li>
        <li><strong>Clinics and specialty care providers</strong> (family practice, urgent care, specialists)</li>
        <li><strong>Health insurers and managed care organizations</strong> (Medicare Advantage, Medicaid MCOs, PACE programs, dual-eligible plans)</li>
        <li><strong>Medical schools and teaching hospitals</strong> (receiving NIH grants, Medicare GME funding)</li>
        <li><strong>Research institutions</strong> (universities, labs with NIH or HHS grants)</li>
        <li><strong>Long-term care facilities</strong> (nursing homes, assisted living with Medicaid funding)</li>
        <li><strong>Social service organizations</strong> (child welfare programs, disability services, mental health providers)</li>
        <li><strong>State health departments</strong> (Medicaid agencies, public health programs)</li>
        <li><strong>Pharmacies</strong> (if they accept Medicaid or Medicare Part D)</li>
        <li><strong>Home health agencies</strong></li>
        <li><strong>Dental clinics and vision care providers</strong> (accepting Medicaid/CHIP)</li>
      </ul>

      <p>
        <strong>The funding threshold is low:</strong> Even a single research grant from NIH or accepting Medicare/Medicaid payments can trigger Section 504 coverage. And unlike ADA Title III (which has a small business exemption for under 15 employees), Section 504 has <em>no size exemption</em> — only phased deadlines based on employee count.
      </p>

      <h2>Section 504 Digital Accessibility Deadlines</h2>

      <p>
        The updated Section 504 rule establishes four phased compliance deadlines based on organization size and technology type:
      </p>

      <h3>Web Content and Mobile Apps</h3>

      <table>
        <thead>
          <tr>
            <th>Organization Size</th>
            <th>Compliance Deadline</th>
            <th>Requirement</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>15+ employees</strong> (large recipients)</td>
            <td><strong>May 11, 2026</strong></td>
            <td>WCAG 2.1 Level A and AA</td>
          </tr>
          <tr>
            <td><strong>Fewer than 15 employees</strong> (small recipients)</td>
            <td><strong>May 10, 2027</strong></td>
            <td>WCAG 2.1 Level A and AA</td>
          </tr>
        </tbody>
      </table>

      <h3>Kiosks (Check-In, Payment, Wayfinding)</h3>

      <table>
        <thead>
          <tr>
            <th>Organization Size</th>
            <th>Compliance Deadline</th>
            <th>Requirement</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>15+ employees</strong> (large recipients)</td>
            <td><strong>May 11, 2027</strong></td>
            <td>Equal access (interim alternative processes) + software meets WCAG 2.1 AA</td>
          </tr>
          <tr>
            <td><strong>Fewer than 15 employees</strong> (small recipients)</td>
            <td><strong>May 11, 2028</strong></td>
            <td>Equal access (interim alternative processes) + software meets WCAG 2.1 AA</td>
          </tr>
        </tbody>
      </table>

      <p>
        <strong>Why the staggered deadlines?</strong> HHS reasoned that larger organizations have more resources and IT staff to dedicate to accessibility projects, while smaller providers (solo practitioners, small rural clinics) need additional time.
      </p>

      <h2>What Digital Properties Are Covered?</h2>

      <p>
        The Section 504 rule applies to <strong>all patient-facing digital information technology</strong>, including:
      </p>

      <h3>1. Websites</h3>

      <ul>
        <li>Public-facing marketing sites</li>
        <li>Patient portals (appointment scheduling, medical records, lab results)</li>
        <li>Provider directories</li>
        <li>Health information and educational content</li>
        <li>Insurance plan information and enrollment</li>
        <li>Prescription refill systems</li>
        <li>Billing and payment portals</li>
      </ul>

      <h3>2. Mobile Applications</h3>

      <ul>
        <li>Native iOS and Android apps</li>
        <li>Telehealth and virtual visit apps</li>
        <li>Health tracking and symptom checkers</li>
        <li>Appointment and medication reminder apps</li>
        <li>Insurance member apps</li>
      </ul>

      <h3>3. Kiosks</h3>

      <ul>
        <li>Check-in kiosks (lobby self-service terminals)</li>
        <li>Payment kiosks</li>
        <li>Wayfinding and directory kiosks</li>
        <li>Prescription pickup kiosks</li>
        <li>Any self-service terminal used to access healthcare services</li>
      </ul>

      <p>
        <strong>The rule is comprehensive:</strong> If a patient uses it to apply for, gain access to, or participate in your services or programs, it must be accessible.
      </p>

      <h2>WCAG 2.1 Level AA: The Technical Standard</h2>

      <p>
        The Section 504 rule adopts <strong>Web Content Accessibility Guidelines (WCAG) 2.1 Level A and AA</strong> as the enforceable technical standard for web and mobile accessibility.
      </p>

      <p>
        WCAG 2.1 was published by the World Wide Web Consortium (W3C) in 2018 and has been the international standard for digital accessibility for over 8 years. It defines 78 testable success criteria organized under four core principles known as POUR:
      </p>

      <ul>
        <li><strong>Perceivable:</strong> Information and user interface components must be presentable to users in ways they can perceive (e.g., alt text for images, captions for videos, sufficient color contrast)</li>
        <li><strong>Operable:</strong> User interface components and navigation must be operable (e.g., keyboard accessibility, enough time to read content, no seizure-inducing flashing)</li>
        <li><strong>Understandable:</strong> Information and operation of the user interface must be understandable (e.g., predictable navigation, clear error messages, readable language)</li>
        <li><strong>Robust:</strong> Content must be robust enough to be interpreted reliably by a wide variety of user agents, including assistive technologies (e.g., valid HTML, proper ARIA usage)</li>
      </ul>

      <h3>Level A vs. Level AA</h3>

      <p>
        WCAG organizes success criteria into three conformance levels:
      </p>

      <ul>
        <li><strong>Level A:</strong> Basic accessibility (25 criteria) — the minimum</li>
        <li><strong>Level AA:</strong> Addresses the most common barriers (38 additional criteria) — the standard for most laws</li>
        <li><strong>Level AAA:</strong> The highest level (23 additional criteria) — often impossible to achieve for all content</li>
      </ul>

      <p>
        <strong>Section 504 requires both Level A and Level AA</strong> — a total of 63 success criteria. This aligns with the DOJ's ADA Title II rule, European Accessibility Act (EAA), and most international accessibility laws.
      </p>

      <h3>WCAG 2.1 vs. WCAG 2.2: Should You Go Further?</h3>

      <p>
        While WCAG 2.1 AA is the legal floor, <strong>WCAG 2.2 AA became the official W3C recommendation in October 2023</strong>. It adds six additional success criteria focused on mobile, cognitive accessibility, and modern interaction patterns:
      </p>

      <ul>
        <li><strong>2.4.11 Focus Appearance (Level AA):</strong> Visible keyboard focus indicators must meet minimum size and contrast</li>
        <li><strong>2.4.12 Focus Not Obscured (Minimum) (Level AA):</strong> Focused UI components can't be completely hidden</li>
        <li><strong>2.5.7 Dragging Movements (Level AA):</strong> Functionality that requires dragging must have a single-pointer alternative</li>
        <li><strong>2.5.8 Target Size (Minimum) (Level AA):</strong> Touch targets must be at least 24×24 CSS pixels</li>
        <li><strong>3.2.6 Consistent Help (Level A):</strong> Help mechanisms must appear in the same relative order across pages</li>
        <li><strong>3.3.7 Redundant Entry (Level A):</strong> Information already entered in a process shouldn't need to be entered again</li>
        <li><strong>3.3.8 Accessible Authentication (Minimum) (Level AA):</strong> Login flows can't rely on memory tests (like recognizing images or transcribing distorted text)</li>
      </ul>

      <p>
        <strong>Content that meets WCAG 2.2 automatically meets WCAG 2.1 and 2.0.</strong> Adopting 2.2 now future-proofs your compliance and spares you a second retrofit when regulators inevitably update to the latest standard.
      </p>

      <p>
        <strong>Recommendation:</strong> Build to WCAG 2.2 AA if you're starting fresh or doing a major redesign. It's only six additional criteria, and many of them (like accessible authentication and redundant entry) improve user experience for <em>everyone</em>, not just people with disabilities.
      </p>

      <h2>Exceptions to Web and Mobile Accessibility</h2>

      <p>
        Section 504's Section 84.85 mirrors the DOJ's ADA Title II rule and carves out <strong>five content categories that don't have to meet WCAG 2.1</strong>. These exemptions are meant for edge-case materials that are hard to retrofit or that users rarely need. Everything else — especially anything tied to applying for, paying for, or receiving services — must still be fully accessible.
      </p>

      <h3>1. Archived Web Content</h3>

      <p>
        <strong>What's exempt:</strong> PDFs or HTML pages that simply preserve a paper record, are clearly labeled as "archive," and are not being actively edited or updated.
      </p>

      <p>
        <strong>Example:</strong> A PDF scan of your 2018 annual report posted in a "Historical Documents" section.
      </p>

      <p>
        <strong>NOT exempt:</strong> If the archived content is still used to apply for services, deliver care instructions, or participate in programs, it must be accessible.
      </p>

      <h3>2. Pre-Existing Conventional Electronic Documents</h3>

      <p>
        <strong>What's exempt:</strong> PDFs, Word docs, PowerPoint slides, or Excel spreadsheets that were already online or in a mobile app <em>before</em> your 504 compliance deadline, and which are <strong>not currently used</strong> to apply for, gain access to, or participate in your services or programs.
      </p>

      <p>
        <strong>Example:</strong> A PDF research paper from 2022 that's still linked on your site but is not required reading for patients or part of any active workflow.
      </p>

      <p>
        <strong>NOT exempt:</strong> Patient intake forms, insurance enrollment PDFs, consent forms, discharge instructions, billing statements — anything actively used in care delivery or administration.
      </p>

      <h3>3. Third-Party Content You Don't Control</h3>

      <p>
        <strong>What's exempt:</strong> Posts on community forums, public comment boards, or files uploaded by outside users (unless those users are acting under a contract, license, or other arrangement with you).
      </p>

      <p>
        <strong>Example:</strong> Patient reviews posted to a third-party forum you don't moderate.
      </p>

      <p>
        <strong>NOT exempt:</strong> A vendor-run payment portal you've contracted with, a pharmacy benefits manager's prescription lookup tool, or any third-party service integrated into your patient workflow. Those must be accessible under your Section 504 obligations.
      </p>

      <h3>4. Individualized, Password-Protected Documents</h3>

      <p>
        <strong>What's exempt:</strong> Items like account statements, lab results, radiology reports, or benefit letters that apply to a single person and are delivered in a secure portal.
      </p>

      <p>
        <strong>Catch:</strong> Because only one user needs each file, <strong>you must supply it in an alternative accessible format upon request</strong>. This is known as "equivalent facilitation" — the content doesn't have to be accessible by default, but you must provide an accessible version when a patient asks.
      </p>

      <p>
        <strong>Best practice:</strong> Generate these documents accessibly from the start (tagged PDFs, semantic HTML) so you don't scramble when a patient with a screen reader requests their lab results.
      </p>

      <h3>5. Pre-Existing Social Media Posts</h3>

      <p>
        <strong>What's exempt:</strong> Anything you posted to Facebook, X (formerly Twitter), LinkedIn, or other social platforms <em>before</em> your compliance deadline.
      </p>

      <p>
        <strong>NOT exempt:</strong> New posts after the deadline must meet WCAG standards if they include images (requiring alt text), videos (requiring captions), or links back to inaccessible pages.
      </p>

      <h3>The Bottom Line on Exceptions</h3>

      <p>
        <strong>These are legal exemptions, not best practices.</strong> If an exempt item becomes part of an active workflow — say, an archived PDF gets revived for use as current patient instructions — you'll need to bring it up to WCAG 2.1 AA or provide a conforming alternate version.
      </p>

      <p>
        And remember: Just because something is legally exempt doesn't mean it's good patient care. A patient who can't read your 2023 discharge instructions because they're a scanned PDF is still a patient you've failed to serve.
      </p>

      <h2>Kiosk Accessibility: Equal Access Now, Full Compliance Later</h2>

      <p>
        The Section 504 rule makes clear that <strong>any kiosk used for check-in, payment, wayfinding, or other services must provide equal access to all patients</strong>, including those with disabilities.
      </p>

      <p>
        <strong>The catch:</strong> Unlike websites and apps, kiosks don't yet have a US-defined technical accessibility standard with testable, objective criteria.
      </p>

      <h3>The Immediate Requirement: Equal Access</h3>

      <p>
        Starting now (the rule took effect July 8, 2024), providers <strong>cannot reroute a blind patient to a slower line or require someone who uses a wheelchair to disclose personal details at a front desk</strong> if other patients use a kiosk for the same task.
      </p>

      <p>
        If your kiosk hardware isn't accessible yet, <strong>the alternative process must offer the same access, convenience, and confidentiality that other patients receive</strong>.
      </p>

      <p>
        <strong>What this means in practice:</strong>
      </p>

      <ul>
        <li>A staff member must be immediately available to assist (not "come back in 15 minutes")</li>
        <li>The alternative can't require disclosing protected health information in a public area</li>
        <li>The process can't take significantly longer than the kiosk</li>
        <li>Patients can't be charged extra for using the accessible alternative</li>
      </ul>

      <h3>The 2027/2028 Deadlines: Full Kiosk Accessibility</h3>

      <p>
        By May 11, 2027 (large recipients) or May 11, 2028 (small recipients), kiosks must be fully accessible — both software and hardware.
      </p>

      <ul>
        <li><strong>Software layer:</strong> If the kiosk displays web content, it must meet WCAG 2.1 AA</li>
        <li><strong>Hardware layer:</strong> The kiosk itself must be usable by people who are blind, have low vision, use wheelchairs, have limited dexterity, or have other disabilities</li>
      </ul>

      <h3>No US Technical Standard for Kiosks — Yet</h3>

      <p>
        HHS suggests applying WCAG 2.1 to the kiosk software layer but provides <strong>no guidance for how to test the accessibility of kiosk hardware</strong>.
      </p>

      <p>
        For now, that means your kiosk conforms to Section 504 if you deliver an equivalent user experience and document how you do it. But how do you prove it?
      </p>

      <h3>EN 301 549: A Practical Interim Standard for Kiosks</h3>

      <p>
        In the absence of a US-defined standard, <strong>EN 301 549</strong> (the European ICT accessibility standard) offers a credible, testable framework.
      </p>

      <p>
        <strong>What is EN 301 549?</strong>
      </p>

      <p>
        EN 301 549 is the European standard for ICT (information and communication technology) accessibility. It's already followed by many global manufacturers and includes a full set of requirements for <strong>closed-functionality devices</strong> — devices like kiosks that don't support third-party assistive technologies (you can't install JAWS on a check-in kiosk).
      </p>

      <p>
        <strong>What EN 301 549 covers for kiosks:</strong>
      </p>

      <ul>
        <li>Keyboard navigation (or alternative input methods) for users who can't use a touchscreen</li>
        <li>Speech output for users who are blind or have low vision</li>
        <li>Tactile cues (raised buttons, embossed labels)</li>
        <li>Adjustable volume and private audio (headphone jacks)</li>
        <li>Operable touch targets (size, spacing, pressure sensitivity)</li>
        <li>Reachable controls for wheelchair users</li>
        <li>Clear, high-contrast displays</li>
      </ul>

      <p>
        <strong>Why EN 301 549 fits kiosks:</strong> Most check-in or payment kiosks lock users into a fixed interface — making them a textbook example of closed functionality. EN 301 549 anticipates this model and provides objective, pass/fail tests (found in Annex C) — something current US law doesn't yet supply.
      </p>

      <p>
        <strong>How to use EN 301 549:</strong>
      </p>

      <ul>
        <li>Ask vendors for an EN 301 549 test report when procuring new kiosks</li>
        <li>Include the closed-functionality clauses in your RFI/RFP</li>
        <li>If the kiosk also displays web content, require WCAG 2.1 AA compliance for the software layer</li>
        <li>Keep test documentation to demonstrate conformance in OCR investigations</li>
      </ul>

      <p>
        <strong>Bonus:</strong> Aligning with EN 301 549 also positions you for the European Accessibility Act (EAA) if you operate internationally or work with multinational vendors.
      </p>

      <h2>How Section 504 Differs from ADA Title II and Title III</h2>

      <p>
        Many healthcare organizations will face <em>overlapping</em> accessibility obligations under both Section 504 and the ADA. Here's how they differ:
      </p>

      <table>
        <thead>
          <tr>
            <th>Aspect</th>
            <th>Section 504 (HHS)</th>
            <th>ADA Title II (DOJ)</th>
            <th>ADA Title III (DOJ)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Who it covers</strong></td>
            <td>Any entity receiving HHS federal funding (Medicare, Medicaid, NIH grants, etc.)</td>
            <td>State and local government entities</td>
            <td>Private businesses open to the public (12+ weeks/year)</td>
          </tr>
          <tr>
            <td><strong>Size exemption</strong></td>
            <td>None (phased deadlines by employee count, but no exemption)</td>
            <td>None (all state/local government covered)</td>
            <td>Small businesses with &lt;15 employees may be exempt (no final rule yet)</td>
          </tr>
          <tr>
            <td><strong>Web/mobile standard</strong></td>
            <td>WCAG 2.1 Level A and AA</td>
            <td>WCAG 2.1 Level A and AA</td>
            <td>WCAG 2.0 AA (proposed in 2023, not finalized)</td>
          </tr>
          <tr>
            <td><strong>Kiosk requirements</strong></td>
            <td>Equal access now; full accessibility by 2027/2028</td>
            <td>Equal access now; full accessibility by 2027/2028 (nearly identical to 504)</td>
            <td>ADA physical accessibility standards (Section 707) — limited to ATMs and fare machines</td>
          </tr>
          <tr>
            <td><strong>Enforcement</strong></td>
            <td>HHS Office for Civil Rights (OCR)</td>
            <td>Department of Justice</td>
            <td>Department of Justice + private lawsuits</td>
          </tr>
          <tr>
            <td><strong>Compliance deadlines</strong></td>
            <td>May 2026 / May 2027 (web/mobile); May 2027 / May 2028 (kiosks)</td>
            <td>April 2026 / April 2027 (special districts get April 2028)</td>
            <td>No federal deadline (proposed rule not finalized)</td>
          </tr>
        </tbody>
      </table>

      <p>
        <strong>Key takeaway:</strong> If you're a public hospital or health department, you're covered by <em>both</em> Section 504 and ADA Title II. If you're a private hospital accepting Medicare/Medicaid, you're covered by Section 504 and potentially ADA Title III (though Title III's web accessibility rule is not yet final).
      </p>

      <p>
        <strong>The good news:</strong> The technical standards are nearly identical (WCAG 2.1 AA), so compliance work for one law largely satisfies the other.
      </p>

      <h2>Section 504 Compliance Roadmap: 7 Steps to May 2026</h2>

      <p>
        With 67 days until the first deadline, here's how to get ready:
      </p>

      <h3>Step 1: Inventory Your Patient-Facing Digital Assets</h3>

      <p>
        Map every website, app, kiosk, portal, and document workflow patients encounter:
      </p>

      <ul>
        <li>Public-facing website (marketing, provider directory, health information)</li>
        <li>Patient portal (appointments, lab results, messaging, billing)</li>
        <li>Mobile apps (iOS and Android)</li>
        <li>Telehealth platforms</li>
        <li>Prescription refill systems</li>
        <li>Insurance enrollment and claims portals</li>
        <li>Check-in kiosks (lobby, parking validation, wayfinding)</li>
        <li>Third-party integrations (payment processors, pharmacy benefits managers, EHR patient-facing modules)</li>
      </ul>

      <p>
        <strong>Prioritize high-traffic, high-risk areas first:</strong> Patient portal login and appointment scheduling likely have the highest usage and the highest risk of complaints.
      </p>

      <h3>Step 2: Run an Accessibility Audit</h3>

      <p>
        Test your digital properties against WCAG 2.1 AA:
      </p>

      <ul>
        <li><strong>Automated testing:</strong> Use tools like axe DevTools, WAVE, or RatedWithAI's free scanner to catch common issues (missing alt text, color contrast, form labels)</li>
        <li><strong>Keyboard testing:</strong> Navigate your entire site using only the keyboard (no mouse). Can you reach every interactive element? Is focus visible?</li>
        <li><strong>Screen reader testing:</strong> Test with NVDA (Windows, free), JAWS (Windows, paid), or VoiceOver (macOS/iOS, built-in). Are images described? Do forms make sense? Can you complete key tasks?</li>
        <li><strong>Manual review:</strong> Check for logical heading structure, clear link text, readable error messages, and predictable navigation</li>
      </ul>

      <p>
        <strong>Document everything:</strong> Create a spreadsheet of WCAG violations organized by page/component, severity (Level A vs. AA), and remediation priority.
      </p>

      <h3>Step 3: Remediate High-Impact Issues First</h3>

      <p>
        Not all violations are equal. Prioritize issues that:
      </p>

      <ul>
        <li><strong>Block critical workflows:</strong> Login, appointment booking, prescription refills, payment</li>
        <li><strong>Affect many users:</strong> Global navigation, shared components (headers, footers, modals)</li>
        <li><strong>Are Level A violations:</strong> These are the most severe (e.g., images with no alt text, keyboard traps)</li>
      </ul>

      <p>
        <strong>Quick wins to tackle first:</strong>
      </p>

      <ul>
        <li>Add alt text to images</li>
        <li>Fix color contrast (text must be at least 4.5:1 against background)</li>
        <li>Add proper form labels (<code>&lt;label for="email"&gt;Email&lt;/label&gt;</code>)</li>
        <li>Ensure all interactive elements are keyboard-accessible</li>
        <li>Add captions to videos</li>
        <li>Fix heading structure (don't skip levels: h1 → h2 → h3, not h1 → h3)</li>
      </ul>

      <h3>Step 4: Update Vendor Contracts and RFPs</h3>

      <p>
        <strong>Require WCAG 2.1 AA conformance from all digital vendors and SaaS providers:</strong>
      </p>

      <ul>
        <li>EHR vendors (Epic, Cerner, Meditech) — demand accessible patient portals</li>
        <li>Telehealth platforms (Zoom for Healthcare, Doxy.me, Teladoc)</li>
        <li>Appointment scheduling tools (Kyruus, Phreesia, Luma Health)</li>
        <li>Payment processors (Stripe, Square, InstaMed)</li>
        <li>Kiosk manufacturers (require EN 301 549 compliance reports)</li>
      </ul>

      <p>
        <strong>Include accessibility requirements in your contracts:</strong>
      </p>

      <ul>
        <li>"Vendor warrants that all software and web interfaces provided will conform to WCAG 2.1 Level AA."</li>
        <li>"Vendor will provide a VPAT (Voluntary Product Accessibility Template) or ACR (Accessibility Conformance Report) upon request."</li>
        <li>"Vendor will remediate any accessibility issues identified within 30 days of notification."</li>
      </ul>

      <h3>Step 5: Train Your Team</h3>

      <p>
        Accessibility isn't a one-time project — it's an ongoing process. Embed Section 504 conformance into:
      </p>

      <ul>
        <li><strong>Procurement:</strong> IT and finance teams must know to require accessibility in RFPs</li>
        <li><strong>Design and development:</strong> Web developers, UX designers, and content creators need WCAG training</li>
        <li><strong>QA and testing:</strong> Every release should include accessibility testing (keyboard, screen reader, color contrast)</li>
        <li><strong>Content publishing:</strong> Train content authors to write alt text, use proper heading structure, and create accessible PDFs</li>
        <li><strong>Patient support:</strong> Front-desk staff and call center agents should know how to provide accessible alternatives</li>
      </ul>

      <h3>Step 6: Document Your Approach</h3>

      <p>
        In case you ever need to claim "undue burden" or "fundamental alteration" (legal defenses under Section 504), you'll need clear documentation:
      </p>

      <ul>
        <li>Accessibility audit results and remediation plans</li>
        <li>Budget allocated to accessibility projects</li>
        <li>Training records</li>
        <li>Vendor contracts with accessibility requirements</li>
        <li>Leadership-level approval of accessibility strategy</li>
      </ul>

      <p>
        <strong>Note:</strong> "Undue burden" is a high bar. You must prove that compliance would impose significant difficulty or expense <em>relative to your overall budget and resources</em>. A $50 million health system can't claim undue burden for a $200K accessibility project.
      </p>

      <h3>Step 7: Publish an Accessibility Statement</h3>

      <p>
        While not legally required, an accessibility statement demonstrates good faith and provides patients with a way to request accommodations:
      </p>

      <ul>
        <li>Commitment to accessibility</li>
        <li>Standards you're conforming to (WCAG 2.1 AA)</li>
        <li>Contact information for accessibility support</li>
        <li>How to request alternative formats (e.g., large print, Braille, accessible PDFs)</li>
        <li>Feedback mechanism for reporting accessibility barriers</li>
      </ul>

      <p>
        <strong>Pro tip:</strong> Use RatedWithAI's free <a href="/tools/accessibility-statement-generator">Accessibility Statement Generator</a> to create a compliant statement in minutes.
      </p>

      <h2>What Happens If You Don't Comply?</h2>

      <p>
        Section 504 is enforced by the <strong>HHS Office for Civil Rights (OCR)</strong>. Unlike ADA Title III (which allows private lawsuits), Section 504 enforcement is primarily complaint-driven and administrative.
      </p>

      <h3>Enforcement Process</h3>

      <ol>
        <li><strong>Complaint filed:</strong> A patient, advocacy organization, or OCR initiates an investigation</li>
        <li><strong>OCR investigation:</strong> OCR requests documentation, audit results, and evidence of compliance efforts</li>
        <li><strong>Voluntary compliance:</strong> Most cases are resolved through a voluntary compliance agreement (VCA) requiring remediation within a set timeline</li>
        <li><strong>Funding termination:</strong> If you refuse to comply, OCR can terminate your federal funding (rare, but possible)</li>
        <li><strong>Referral to DOJ:</strong> OCR can refer cases to the Department of Justice for enforcement</li>
      </ol>

      <h3>Penalties</h3>

      <ul>
        <li><strong>Loss of federal funding:</strong> Termination of Medicare/Medicaid payments, NIH grants, or other HHS funding</li>
        <li><strong>Reputational harm:</strong> OCR publishes resolution agreements and compliance reviews</li>
        <li><strong>Corrective action plans:</strong> Mandatory remediation, training, and monitoring (often multi-year commitments)</li>
      </ul>

      <p>
        <strong>Unlike ADA Title III, there are no statutory damages or attorney's fees in Section 504 cases.</strong> But the risk of losing Medicare/Medicaid reimbursement is existential for most healthcare providers.
      </p>

      <h2>FAQs: Section 504 Healthcare Accessibility</h2>

      <h3>1. Does Section 504 apply to private practices?</h3>

      <p>
        <strong>Yes, if you accept Medicare or Medicaid.</strong> Even a solo practitioner who bills Medicare Part B is a Section 504 recipient. The rule has no size exemption — only phased deadlines (small providers get until May 2027).
      </p>

      <h3>2. What if my EHR vendor's patient portal isn't accessible?</h3>

      <p>
        <strong>You're still responsible.</strong> Section 504 doesn't exempt you because you use third-party software. You must:
      </p>

      <ul>
        <li>Require WCAG 2.1 AA conformance in your vendor contract</li>
        <li>Request a VPAT or ACR (Accessibility Conformance Report)</li>
        <li>Work with the vendor to remediate issues</li>
        <li>If the vendor refuses, provide an accessible alternative (e.g., phone-based appointment scheduling)</li>
      </ul>

      <h3>3. Do I need to make old PDFs accessible?</h3>

      <p>
        <strong>It depends.</strong> If the PDF is:
      </p>

      <ul>
        <li><strong>Archived and not used in active workflows</strong> → exempt</li>
        <li><strong>Used for patient intake, consent forms, discharge instructions, billing statements</strong> → must be accessible</li>
        <li><strong>Posted before your deadline but still in use</strong> → must be remediated or provided in an accessible format upon request</li>
      </ul>

      <p>
        <strong>Best practice:</strong> Remediate all patient-facing PDFs. The "upon request" exception creates delays and frustration for patients with disabilities.
      </p>

      <h3>4. Does this apply to telehealth platforms?</h3>

      <p>
        <strong>Yes.</strong> If you use Zoom, Doxy.me, Teladoc, or any other telehealth platform to deliver care, the platform must be accessible:
      </p>

      <ul>
        <li>Keyboard-navigable controls (mute, video on/off, chat, screen share)</li>
        <li>Screen reader compatibility</li>
        <li>Captions for video calls (real-time or auto-generated)</li>
        <li>Accessible appointment booking and registration</li>
      </ul>

      <p>
        <strong>Action item:</strong> Request a VPAT from your telehealth vendor and include WCAG 2.1 AA requirements in your contract.
      </p>

      <h3>5. What about social media posts?</h3>

      <p>
        <strong>New posts after your deadline must be accessible:</strong>
      </p>

      <ul>
        <li>Add alt text to images</li>
        <li>Caption videos</li>
        <li>Use camelCase hashtags (e.g., #HealthcareAccessibility, not #healthcareaccessibility) for screen reader clarity</li>
        <li>Avoid emoji-only posts (screen readers read emoji names aloud)</li>
      </ul>

      <p>
        <strong>Pre-existing posts</strong> (before May 2026) are exempt, but updating them is good practice.
      </p>

      <h3>6. Can I use an accessibility overlay instead of fixing my website?</h3>

      <p>
        <strong>No.</strong> HHS (like DOJ) has made clear that automated overlays (accessiBe, AudioEye, UserWay) do not ensure WCAG conformance. In fact, the FTC fined accessiBe $1 million in 2025 for false advertising claims about ADA compliance.
      </p>

      <p>
        <strong>Overlays can't fix:</strong>
      </p>

      <ul>
        <li>Poor heading structure</li>
        <li>Missing form labels</li>
        <li>Keyboard traps</li>
        <li>Illogical tab order</li>
        <li>Ambiguous link text ("click here")</li>
      </ul>

      <p>
        <strong>The only solution:</strong> Fix the underlying code. Use semantic HTML, proper ARIA attributes, and manual testing.
      </p>

      <h3>7. What if I miss the May 2026 deadline?</h3>

      <p>
        <strong>You're at risk of OCR investigation and enforcement action.</strong> If a patient files a complaint, OCR will request:
      </p>

      <ul>
        <li>Evidence of compliance efforts (audit results, remediation plans, training records)</li>
        <li>Timeline for achieving full conformance</li>
        <li>Documentation of budget allocation and leadership approval</li>
      </ul>

      <p>
        <strong>Best practice:</strong> If you know you'll miss the deadline, document <em>why</em> (vendor delays, budget constraints, staffing shortages) and show <em>progress</em> (partial remediation, contracts in place, training completed). OCR is more lenient with organizations making good-faith efforts than those ignoring the rule.
      </p>

      <h3>8. Does Section 504 cover in-person services?</h3>

      <p>
        <strong>Yes, but this guide focuses on digital accessibility.</strong> The full Section 504 rule also covers:
      </p>

      <ul>
        <li>Physical access (wheelchair ramps, accessible exam rooms)</li>
        <li>Effective communication (sign language interpreters, auxiliary aids)</li>
        <li>Accessible medical equipment (exam tables, mammography machines, weight scales)</li>
        <li>Most integrated setting (not forcing patients into segregated or institutional settings)</li>
      </ul>

      <p>
        Consult the full <a href="https://www.hhs.gov/civil-rights/for-individuals/disability/section-504-rehabilitation-act-of-1973/index.html" target="_blank" rel="noopener">HHS Section 504 fact sheet</a> for details.
      </p>

      <h2>Resources and Next Steps</h2>

      <h3>Official HHS Guidance</h3>

      <ul>
        <li><a href="https://www.hhs.gov/civil-rights/for-individuals/disability/section-504-rehabilitation-act-of-1973/index.html" target="_blank" rel="noopener">HHS Section 504 Final Rule</a> — Official rule text and fact sheets</li>
        <li><a href="https://www.hhs.gov/sites/default/files/new-requirements-accessibility-web-content-mobile-apps-kiosks.pdf" target="_blank" rel="noopener">New Requirements on Web Content, Mobile Apps, and Kiosks (PDF)</a> — HHS summary</li>
        <li><a href="https://www.hhs.gov/civil-rights/for-individuals/disability/section-504-rehabilitation-act-of-1973/ocr-detailed-504-fact-sheet/index.html" target="_blank" rel="noopener">Section 504 Detailed Fact Sheet</a> — Section-by-section breakdown</li>
      </ul>

      <h3>WCAG Resources</h3>

      <ul>
        <li><a href="/guides/wcag-compliance-guide-2026">WCAG 2.1 Complete Compliance Guide</a> — RatedWithAI's full WCAG tutorial</li>
        <li><a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank" rel="noopener">WCAG 2.1 Quick Reference</a> — Official W3C guide</li>
        <li><a href="/tools/color-contrast-checker">Color Contrast Checker</a> — Free WCAG contrast validator</li>
        <li><a href="/blog/best-accessibility-testing-tools-compared-2026">Best Accessibility Testing Tools Compared</a> — Tool roundup (axe, WAVE, Pa11y, Lighthouse)</li>
      </ul>

      <h3>Kiosk Accessibility</h3>

      <ul>
        <li><a href="https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf" target="_blank" rel="noopener">EN 301 549 v3.2.1 (PDF)</a> — European ICT accessibility standard</li>
        <li><a href="https://www.deque.com/blog/section-504-digital-accessibility-deadlines-what-every-hhs-funded-provider-must-know/" target="_blank" rel="noopener">Deque: Section 504 Kiosk Guidance</a> — Practical EN 301 549 implementation</li>
      </ul>

      <h3>Compliance Tools</h3>

      <ul>
        <li><a href="/scan">Free Accessibility Scanner</a> — Instant WCAG audit for any URL</li>
        <li><a href="/tools/accessibility-statement-generator">Accessibility Statement Generator</a> — Create a compliant statement in minutes</li>
        <li><a href="/blog/vpat-accessibility-conformance-report-guide-2026">VPAT Guide</a> — How to create and request Accessibility Conformance Reports</li>
      </ul>

      <h2>The Bottom Line: Start Now</h2>

      <p>
        <strong>May 11, 2026 is 67 days away.</strong> That's enough time to run an audit, prioritize critical fixes, and make meaningful progress — but only if you start now.
      </p>

      <p>
        Section 504 isn't optional, and it's not vague. The standard is clear (WCAG 2.1 AA), the deadlines are set, and the enforcement mechanism is real (loss of federal funding).
      </p>

      <p>
        But beyond compliance, this is about <strong>equitable healthcare</strong>. One in four adults in the US has a disability. If your patient portal, telehealth app, or check-in kiosk isn't accessible, you're locking millions of patients out of care.
      </p>

      <p>
        The organizations that treat accessibility as a patient safety issue — not a legal checkbox — will deliver better care, avoid enforcement risk, and build trust with the disability community.
      </p>

      <p>
        <strong>Ready to get started?</strong> Run a free accessibility scan on your patient portal, download our WCAG 2.1 checklist, and start fixing the issues that matter most.
      </p>

      <div className="cta-box">
        <h3>Test Your Healthcare Website for Section 504 Compliance</h3>
        <p>
          Get a free instant WCAG 2.1 accessibility audit. Identifies barriers in patient portals, appointment booking, and telehealth platforms.
        </p>
        <a href="/scan" className="btn-primary">
          Scan Your Site (Free)
        </a>
      </div>

      <h2>Related Articles</h2>

      <ul>
        <li><a href="/blog/ada-compliance-audit-guide-2026">How to Conduct an ADA Website Accessibility Audit (2026 Guide)</a></li>
        <li><a href="/blog/ada-title-ii-april-2026-deadline-countdown">ADA Title II April 2026 Deadline Countdown</a> — How Section 504 differs from state/local government obligations</li>
        <li><a href="/blog/wcag-compliance-guide-2026">WCAG 2.1 Complete Compliance Guide</a> — Understand the technical standard</li>
        <li><a href="/blog/screen-reader-testing-guide-2026">Screen Reader Testing Guide 2026: NVDA, JAWS, and VoiceOver</a></li>
        <li><a href="/blog/pdf-accessibility-ada-compliant-pdfs-2026">PDF Accessibility: How to Make ADA-Compliant PDFs (2026 Guide)</a></li>
        <li><a href="/blog/section-508-compliance-guide-2026">Section 508 Compliance: The Complete Guide for 2026</a> — Federal agency digital accessibility (overlaps with Section 504)</li>
        <li><a href="/blog/vpat-accessibility-conformance-report-guide-2026">VPAT Guide: How to Create an Accessibility Conformance Report 2026</a></li>
        <li><a href="/blog/best-accessibility-testing-tools-compared-2026">Best Accessibility Testing Tools Compared (2026)</a></li>
      </ul>

    </BlogLayout>
  );
}
