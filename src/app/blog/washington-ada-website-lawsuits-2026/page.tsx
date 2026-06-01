/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title:
    "Washington State ADA Website Lawsuits 2026: What Seattle & Bellevue Businesses Must Know | RatedWithAI",
  description:
    "ADA website lawsuits in Washington State are rising. Seattle, Bellevue, and Tacoma businesses face serial ADA plaintiffs under federal Title III and Washington's Law Against Discrimination. What Washington businesses need to know in 2026.",
  openGraph: {
    title: "Washington State ADA Website Lawsuits 2026: Seattle Business Risk Guide",
    description:
      "Serial ADA plaintiffs are expanding into Washington State. Seattle is a top-10 US metro and growing target for ADA Title III web accessibility lawsuits. Here's what Washington businesses must know to protect themselves.",
    type: "article",
    publishedTime: "2026-06-01T00:00:00.000Z",
    modifiedTime: "2026-06-01T00:00:00.000Z",
    authors: ["RatedWithAI Team"],
    url: "https://ratedwithai.com/blog/washington-ada-website-lawsuits-2026",
  },
  keywords: [
    "washington state ada website lawsuits 2026",
    "ada lawsuits washington state",
    "seattle ada website lawsuit",
    "washington ada compliance",
    "bellevue ada website compliance",
    "washington web accessibility law",
    "ada website lawsuits washington businesses",
    "washington accessibility lawsuit",
    "ada title iii washington state",
    "washington wcag compliance",
    "ada demand letter washington",
    "web accessibility washington",
    "wlad ada compliance",
    "washington law against discrimination accessibility",
    "tacoma ada website compliance",
  ],
  alternates: {
    canonical: "https://ratedwithai.com/blog/washington-ada-website-lawsuits-2026",
  },
};

export default function WashingtonADAWebsiteLawsuits2026Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "Washington State ADA Website Lawsuits 2026: What Seattle & Bellevue Businesses Must Know",
      description:
        "ADA website lawsuits are increasing in Washington State. Seattle is a top-10 US metro and a growing target for serial ADA plaintiffs. Analysis of the threat landscape, WLAD implications, common targets, costs, and how Washington businesses can protect themselves in 2026.",
      datePublished: "2026-06-01T00:00:00.000Z",
      dateModified: "2026-06-01T00:00:00.000Z",
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
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Are ADA website lawsuits common in Washington State?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ADA website lawsuits in Washington State are growing. Seattle is the 13th largest US city and part of a top-10 metro area — making Washington an increasingly attractive target for serial ADA plaintiffs who have saturated California courts. The Western District of Washington (Seattle) sees regular ADA Title III web accessibility filings. Washington also has its own state law — the Washington Law Against Discrimination (WLAD) — that can be used in state court alongside federal ADA claims, potentially increasing plaintiff options and settlement leverage.",
          },
        },
        {
          "@type": "Question",
          name: "What is the ADA law for websites in Washington State?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Washington businesses face two overlapping legal frameworks. Federal ADA Title III requires businesses with websites to provide equal access to people with disabilities — courts have consistently held that this applies to websites of businesses with physical locations. The DOJ has clarified that WCAG 2.1 AA is the compliance standard. Washington State's Law Against Discrimination (WLAD, RCW 49.60) also prohibits disability discrimination by places of public accommodation and can be brought in state court. WLAD allows for actual damages and attorney's fees, giving Washington plaintiffs state-court options beyond federal ADA's injunctive relief.",
          },
        },
        {
          "@type": "Question",
          name: "How much does an ADA website lawsuit cost in Washington State?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ADA website demand letters in Washington typically settle for $5,000-$25,000, including plaintiff attorney's fees and your own defense costs. Federal ADA Title III does not provide monetary damages to plaintiffs — only injunctive relief (requiring you to fix the site) plus attorney's fees. However, if a plaintiff brings a WLAD claim in Washington state court, they can pursue actual damages, which increases settlement pressure. If you fight a case to judgment, total legal costs typically reach $30,000-$100,000+ even when you prevail. The economics strongly favor early settlement in most cases.",
          },
        },
        {
          "@type": "Question",
          name: "Which Washington State businesses are most at risk for ADA website lawsuits?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Washington businesses most targeted for ADA website lawsuits include: restaurants and hospitality businesses (highest lawsuit volume nationally), retail with e-commerce, healthcare providers with patient portals, technology companies with customer-facing web applications, hotels and vacation rentals, real estate agencies, professional services firms (legal, accounting, dental), and local service businesses with online booking. In the Seattle/Bellevue tech corridor, SaaS companies and technology startups with consumer-facing products face particular exposure — technology companies are not exempt from ADA requirements and their web-native nature increases the surface area for accessibility claims.",
          },
        },
        {
          "@type": "Question",
          name: "Does Washington State have stronger accessibility laws than federal ADA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Washington State's Law Against Discrimination (WLAD) provides additional tools for plaintiffs compared to federal ADA alone. Unlike federal ADA Title III — which limits remedies to injunctive relief and attorney's fees — WLAD allows plaintiffs to seek actual damages in state court. This means a Washington plaintiff can combine a federal ADA claim (injunction + fees) with a WLAD claim (actual damages + fees) for maximum leverage. The practical effect: Washington ADA website settlements may trend higher than in states without comparable state laws. This makes genuine WCAG compliance more important in Washington than in states where plaintiffs are limited to federal ADA remedies.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <span className="mx-2">/</span>
          <span>Washington State ADA Website Lawsuits 2026</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Washington State ADA Website Lawsuits 2026: What Seattle &amp; Bellevue Businesses Must Know
        </h1>

        <p className="text-gray-500 text-sm mb-6">
          Updated June 1, 2026 · 11 min read · By RatedWithAI Team
        </p>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
          <p className="text-red-800 text-sm font-medium">
            <strong>Washington businesses face dual exposure:</strong> Federal ADA Title III applies to all businesses with public-facing websites. But Washington&apos;s Law Against Discrimination (WLAD) also applies in state court and allows for actual damages — giving plaintiffs additional leverage that doesn&apos;t exist in states with only federal ADA claims.
          </p>
        </div>

        {/* Overview */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The ADA Website Lawsuit Landscape in Washington State</h2>
        <p className="text-gray-700 mb-4">
          Washington State has become a growing target for serial ADA web accessibility plaintiffs. As California courts have attracted increased scrutiny — and as plaintiff attorneys have become more strategic about geographic targeting — the Western District of Washington (Seattle) is seeing more ADA Title III web accessibility filings than in prior years.
        </p>
        <p className="text-gray-700 mb-4">
          Seattle is the 13th largest US city and anchors a metro area (Seattle-Tacoma-Bellevue) that ranks in the top 10 nationally. The region&apos;s high density of technology companies, restaurants, retailers, healthcare providers, and professional services firms creates a large pool of potential defendants. Unlike some markets where plaintiff attorneys are primarily targeting small mom-and-pop businesses, Washington&apos;s tech-heavy economy means larger companies with sophisticated websites are also on the radar.
        </p>
        <p className="text-gray-700 mb-8">
          The state&apos;s own anti-discrimination law — the Washington Law Against Discrimination — adds a layer of exposure beyond federal ADA that Washington business owners need to understand.
        </p>

        {/* Washington Legal Framework */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Washington Legal Framework: Federal ADA + WLAD</h2>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">Federal ADA Title III</h3>
        <p className="text-gray-700 mb-4">
          Federal ADA Title III prohibits discrimination by "places of public accommodation" on the basis of disability. Courts — including the Ninth Circuit, which covers Washington — have consistently held that websites of businesses with physical locations must be accessible. The DOJ&apos;s March 2022 guidance established WCAG 2.1 Level AA as the applicable standard.
        </p>
        <p className="text-gray-700 mb-8">
          Under federal ADA Title III, plaintiffs can obtain injunctive relief (requiring you to fix accessibility violations) and attorney&apos;s fees. Monetary damages are not available to plaintiffs under federal ADA — a meaningful limit on exposure, but attorney&apos;s fees alone in a contested case can reach six figures.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">Washington Law Against Discrimination (WLAD)</h3>
        <p className="text-gray-700 mb-4">
          Washington&apos;s Law Against Discrimination (RCW 49.60) is a broad anti-discrimination statute that prohibits disability discrimination by places of public accommodation. Unlike federal ADA Title III, WLAD allows plaintiffs to recover actual damages in Washington state courts.
        </p>
        <p className="text-gray-700 mb-4">
          This is significant. A plaintiff who encounters accessibility barriers on a Washington business website may bring:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>A federal ADA Title III claim in federal court (Western District of Washington) seeking injunction + attorney&apos;s fees</li>
          <li>A WLAD claim in Washington state court seeking actual damages + attorney&apos;s fees</li>
          <li>Or both, in appropriate circumstances</li>
        </ul>
        <p className="text-gray-700 mb-8">
          The practical effect is that Washington businesses face somewhat higher settlement pressure than businesses in states where plaintiffs are limited to federal ADA remedies alone. Serial plaintiff attorneys who know Washington law may calculate higher demand-letter numbers accordingly.
        </p>

        {/* Who Is at Risk */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Which Washington Businesses Are Most at Risk?</h2>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">Restaurants and Hospitality</h3>
        <p className="text-gray-700 mb-8">
          Restaurant websites — particularly those with online ordering, reservation systems, or gift card purchases — are the most targeted category nationally and in Washington. Seattle&apos;s dense restaurant scene (Capitol Hill, Ballard, South Lake Union, Pioneer Square) represents a large target pool. Sites that use third-party ordering platforms (Toast, Olo, OpenTable) may have accessibility issues in the embedded widgets that the restaurant owner doesn&apos;t control but still faces liability for.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">Technology Companies and SaaS</h3>
        <p className="text-gray-700 mb-8">
          Washington&apos;s tech corridor — Seattle, Bellevue, Redmond, Kirkland — is home to some of the world&apos;s largest technology companies as well as thousands of startups. Technology companies are not exempt from ADA requirements. Consumer-facing web applications (e-commerce, SaaS dashboards, customer portals, mobile apps with web components) are all subject to accessibility requirements. The irony is that tech companies often have complex React/Vue/Angular single-page applications that are harder to make accessible than a simple HTML site.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">Healthcare Providers</h3>
        <p className="text-gray-700 mb-8">
          Washington is home to major healthcare systems (Providence, Swedish, Virginia Mason Franciscan, Kaiser Permanente Northwest) and thousands of independent medical practices. Patient portals, appointment booking systems, insurance portals, and telehealth platforms all create accessibility exposure. The Seattle metro&apos;s large aging population (and disability community) means that accessibility barriers on health websites have real-world consequences — not just legal ones.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">Retail and E-commerce</h3>
        <p className="text-gray-700 mb-8">
          Washington-based retailers — both brick-and-mortar with online presence and pure-play e-commerce — are regular targets. The e-commerce checkout flow is a particularly common site of accessibility failures: form labels, error messages, keyboard navigation through the cart, and payment processing interfaces are frequently inaccessible. Any Washington retailer that processes online transactions should prioritize the checkout experience for WCAG compliance.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Services</h3>
        <p className="text-gray-700 mb-8">
          Law firms, accounting practices, dental offices, and other professional services firms in Seattle, Bellevue, and across Washington frequently have websites built years ago without accessibility in mind. These sites often have: PDF brochures without tagged document structure, contact forms without proper labels, and images without alt text. They&apos;re attractive targets because the fixes are simple, the businesses have resources, and the sites often haven&apos;t been updated in years.
        </p>

        {/* What a Lawsuit Looks Like */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What an ADA Website Lawsuit Actually Looks Like in Washington</h2>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">The Demand Letter</h3>
        <p className="text-gray-700 mb-8">
          Most Washington ADA website cases begin with a demand letter, not a lawsuit. A plaintiff attorney — often working with a disabled individual plaintiff who is a professional ADA tester — sends a letter alleging specific WCAG violations and demanding remediation plus attorney&apos;s fees. Demand letters typically arrive out of the blue and give 30-60 days to respond. The initial demand often includes an attorney&apos;s fee demand of $5,000-$15,000 plus a requirement to make the site accessible.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">Serial Plaintiffs in Washington</h3>
        <p className="text-gray-700 mb-8">
          Washington, like other major states, has plaintiff attorneys who file ADA website cases at high volume. Some plaintiff firms operate nationally, using automated accessibility scanners to identify potential defendant websites across metro areas, then working with local plaintiffs to bring claims in the Western District of Washington. These firms are not primarily motivated by improving accessibility — they are running a business model that generates settlements. Understanding this changes how you think about compliance: you need to be defensible against a systematic, automated scanning process, not just against a specific individual&apos;s complaint.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">The Litigation Process</h3>
        <p className="text-gray-700 mb-8">
          If you don&apos;t settle the demand letter, a complaint is filed in the Western District of Washington (for federal ADA claims) or King County Superior Court / relevant state court (for WLAD claims). Federal ADA website cases typically move toward a preliminary injunction motion (requiring you to fix accessibility issues during litigation) and a motion to dismiss or summary judgment. Most cases settle before trial. The litigation timeline from complaint to settlement is typically 6-18 months. Total defense costs if you fight a case: $25,000-$100,000+ in attorney&apos;s fees even on a win.
        </p>

        {/* Cost and Protection */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Does It Cost — and How Do You Protect Yourself?</h2>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Typical Washington ADA Website Lawsuit Costs</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><strong>Demand letter settlement (early):</strong> $5,000-$20,000 (plaintiff fees + your defense costs)</li>
            <li><strong>Post-filing settlement:</strong> $15,000-$40,000</li>
            <li><strong>Litigation to judgment (win or lose):</strong> $30,000-$100,000+ in defense costs</li>
            <li><strong>WLAD state claim settlement (damages available):</strong> May trend higher than federal-only cases</li>
            <li><strong>Making your site accessible (preventive):</strong> $500-$5,000 for most small business sites</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">Practical Steps for Washington Businesses</h3>
        <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-3">
          <li>
            <strong>Run a WCAG scan now.</strong> Before you receive a demand letter, understand what violations your site has. Use an automated scanner (<Link href="/scan" className="text-blue-600 hover:underline">RatedWithAI&apos;s free scanner</Link> covers the most common issues). Automated scanning catches roughly 30-40% of WCAG violations — enough to identify and fix the highest-risk problems that serial plaintiffs target.
          </li>
          <li>
            <strong>Fix the critical issues first.</strong> Missing image alt text, form input labels, keyboard accessibility failures, and missing page titles are the most common violation categories in ADA web lawsuits. These are also among the easiest to fix — a developer can address most in a few hours. Fix these before worrying about advanced WCAG criteria.
          </li>
          <li>
            <strong>Post an accessibility statement.</strong> A public accessibility statement — noting your commitment to WCAG 2.1 AA, your ongoing improvement efforts, and a contact method for reporting issues — demonstrates good faith. Courts and plaintiff attorneys treat businesses with documented accessibility programs more favorably than those with no apparent awareness.
          </li>
          <li>
            <strong>Don&apos;t rely solely on overlay widgets.</strong> JavaScript accessibility overlays (UserWay, accessiBe, EqualWeb, etc.) do not fix your underlying code. Serial plaintiff attorneys commonly test sites with JavaScript disabled — rendering all overlay fixes invisible. Overlays reduce risk but are not a substitute for actual remediation. Washington courts apply the same WCAG standard regardless of what overlay tool you&apos;re using.
          </li>
          <li>
            <strong>Respond quickly to demand letters.</strong> If you receive an ADA demand letter, get a lawyer involved immediately. Don&apos;t ignore it, don&apos;t respond pro se (without counsel), and don&apos;t admit liability. Most demand letters are settleable if you respond promptly and show a genuine remediation plan.
          </li>
          <li>
            <strong>Set up ongoing monitoring.</strong> Even after fixing your site, new content can introduce new accessibility violations. Automated monitoring catches regressions before they become lawsuit targets.
          </li>
        </ol>

        {/* WLAD distinction */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Washington&apos;s WLAD: What Makes Washington Different</h2>
        <p className="text-gray-700 mb-4">
          Most states where ADA website lawsuits are common (Texas, Arizona, Ohio, Virginia) rely exclusively on federal ADA Title III, which limits plaintiff remedies to injunctive relief and attorney&apos;s fees. Washington&apos;s WLAD provides an additional state-court avenue with actual damages available.
        </p>
        <p className="text-gray-700 mb-4">
          In practice, WLAD web accessibility claims are less common than federal ADA claims in Washington — most plaintiff attorneys file in federal court because it&apos;s more predictable and the fee awards are well-established. But the existence of WLAD gives plaintiff attorneys additional leverage in settlement negotiations.
        </p>
        <p className="text-gray-700 mb-8">
          For Washington businesses, the practical takeaway is: don&apos;t assume federal ADA exposure analysis fully captures your risk. Consult a Washington attorney familiar with both federal ADA and WLAD if you receive a demand letter or need a legal risk assessment.
        </p>

        {/* RatedWithAI CTA */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Scan Your Washington Business Website</h3>
          <p className="text-blue-800 text-sm mb-4">
            RatedWithAI&apos;s free accessibility scanner checks your site against the WCAG 2.1 criteria most commonly cited in ADA lawsuits — missing alt text, form labels, color contrast, keyboard accessibility, and more. Get a prioritized list of what to fix before a plaintiff attorney finds it first.
          </p>
          <Link
            href="/scan"
            className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Scan My Website Free →
          </Link>
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

        <div className="space-y-6 mb-10">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Are ADA website lawsuits common in Washington State?
            </h3>
            <p className="text-gray-700">
              ADA website lawsuits in Washington State are growing. The Western District of Washington (Seattle) sees regular ADA Title III web accessibility filings. As plaintiff attorneys have expanded beyond saturated California courts, major tech and business hubs like Seattle and Bellevue have become attractive targets. Washington&apos;s WLAD adds state-law exposure that doesn&apos;t exist in all states.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              What is the WCAG compliance requirement for Washington websites?
            </h3>
            <p className="text-gray-700">
              The DOJ&apos;s guidance establishes WCAG 2.1 Level AA as the applicable standard for websites under ADA Title III. Washington&apos;s WLAD does not specify a different technical standard — courts in Washington apply the same WCAG 2.1 AA framework. WCAG 2.2 (published in 2023) adds additional criteria but most lawsuits still cite 2.1 AA violations.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Can a technology company in Seattle be sued for ADA website violations?
            </h3>
            <p className="text-gray-700">
              Yes. Technology companies are not exempt from ADA Title III or WLAD. Any company with a consumer-facing website, SaaS product, or customer portal that operates as a place of public accommodation can face ADA web accessibility claims. Seattle and Bellevue tech companies with inaccessible web applications face the same legal exposure as a restaurant with an inaccessible menu ordering system.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              What should I do if I receive an ADA demand letter for my Washington website?
            </h3>
            <p className="text-gray-700">
              Get legal counsel immediately — preferably an attorney familiar with both federal ADA and Washington&apos;s WLAD. Do not ignore the letter, do not respond without counsel, and do not make admissions in writing. Begin a documented accessibility remediation effort regardless of how you respond legally — courts treat good-faith remediation efforts favorably. Most demand letters are settleable in the $5,000-$20,000 range if handled promptly and professionally.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              How does Washington&apos;s WLAD differ from federal ADA for website lawsuits?
            </h3>
            <p className="text-gray-700">
              Federal ADA Title III limits plaintiff remedies to injunctive relief (fixing the site) and attorney&apos;s fees — no monetary damages for plaintiffs. Washington&apos;s WLAD allows plaintiffs to seek actual damages in state court in addition to injunctive relief and fees. This means Washington plaintiffs have a broader menu of legal options and potentially greater settlement leverage than plaintiffs in states without comparable state laws. In practice, most cases still resolve under federal ADA, but WLAD adds an additional dimension that savvy plaintiff attorneys can leverage.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Is a state government website in Washington required to be accessible?
            </h3>
            <p className="text-gray-700">
              Yes. Washington state government websites are subject to Section 508 of the Rehabilitation Act and Washington State IT accessibility standards. The Washington State Office of the Chief Information Officer (OCIO) publishes accessibility standards (based on WCAG 2.1 AA) that all state agency websites must meet. State agencies face additional compliance requirements beyond what applies to private businesses, including procurement requirements for accessible technology. City and county government websites in Washington face similar federal and state requirements.
            </p>
          </div>
        </div>

        {/* Related Articles */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">ADA Website Lawsuit Guides by State</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/blog/california-ada-website-lawsuits-2026" className="text-blue-600 hover:underline">
                California ADA Website Lawsuits 2026: Highest-Risk State in the Nation
              </Link>
            </li>
            <li>
              <Link href="/blog/new-york-ada-website-lawsuits-2026" className="text-blue-600 hover:underline">
                New York ADA Website Lawsuits 2026: NYC Business Risk Guide
              </Link>
            </li>
            <li>
              <Link href="/blog/texas-ada-website-lawsuits-2026" className="text-blue-600 hover:underline">
                Texas ADA Website Lawsuits 2026: What Houston, Dallas & Austin Businesses Must Know
              </Link>
            </li>
            <li>
              <Link href="/blog/florida-ada-website-lawsuits-2026" className="text-blue-600 hover:underline">
                Florida ADA Website Lawsuits 2026: What Florida Businesses Must Know
              </Link>
            </li>
            <li>
              <Link href="/blog/ada-compliance-checklist-2026" className="text-blue-600 hover:underline">
                ADA Website Compliance Checklist 2026: What to Fix First
              </Link>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-gray-900 text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">
            Don&apos;t Wait for a Demand Letter
          </h3>
          <p className="text-gray-300 mb-6">
            Run a free WCAG scan on your Washington business website and see exactly what accessibility violations serial plaintiff attorneys are looking for. Fix the highest-risk issues before you receive a demand letter — it&apos;s far cheaper than settling one.
          </p>
          <Link
            href="/scan"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Scan My Website Free →
          </Link>
          <p className="text-gray-400 text-sm mt-4">
            No credit card required. Results in under 60 seconds.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
