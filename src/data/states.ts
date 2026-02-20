export type State = {
  slug: string;
  name: string;
  lawsuitStats: {
    federal2024: number;
    total2024: number;
    year2023: number;
    trend: "increasing" | "decreasing" | "stable";
    trendPercent: number;
  };
  topIndustries: string[];
  stateRegulations: string[];
  notableCases: Array<{
    case: string;
    year: number;
    description: string;
  }>;
  protectionSteps: string[];
  checklist: string[];
};

export const states: State[] = [
  {
    slug: "new-york",
    name: "New York",
    lawsuitStats: {
      federal2024: 1564,
      total2024: 1600,
      year2023: 2140,
      trend: "decreasing",
      trendPercent: -25.2,
    },
    topIndustries: [
      "Lifestyle, Fashion & Apparel (35% of all cases)",
      "Restaurant, Food & Beverages (18% of cases)",
      "Health & Beauty (12% of cases)",
      "Home & Garden Retail (8% of cases)",
      "Healthcare & Medical Services (7% of cases)",
    ],
    stateRegulations: [
      "New York State Human Rights Law (NYSHRL) extends ADA protections",
      "New York City Human Rights Law (NYCHRL) applies to businesses with 4+ employees",
      "Southern District of New York has highest federal filing rate in the country",
      "State courts increasingly accepting website accessibility claims",
    ],
    notableCases: [
      {
        case: "Mejia v. [Retailer]",
        year: 2024,
        description:
          "Southern District ruling reinforced that websites must be accessible to screen reader users under Title III",
      },
      {
        case: "Gil v. Winn-Dixie",
        year: 2017,
        description:
          "Landmark case establishing that websites are places of public accommodation under the ADA",
      },
      {
        case: "Dominguez v. [E-commerce Site]",
        year: 2023,
        description:
          "Court ruled inaccessible checkout flow violated ADA, awarding damages and requiring remediation",
      },
    ],
    protectionSteps: [
      "Conduct WCAG 2.1 AA audit of your entire website",
      "Prioritize keyboard navigation and screen reader compatibility",
      "Ensure checkout and forms are fully accessible",
      "Create accessibility statement with contact information",
      "Train staff on accessibility best practices",
      "Monitor and respond to accessibility feedback promptly",
    ],
    checklist: [
      "All images have descriptive alt text",
      "Forms include visible, persistent labels",
      "Color contrast meets WCAG 2.1 AA standards (4.5:1 minimum)",
      "Website is fully keyboard navigable",
      "All interactive elements have visible focus states",
      "Videos include captions and transcripts",
      "PDFs and documents are tagged and accessible",
      "Error messages are clear and announced to screen readers",
      "ARIA landmarks identify page regions",
      "Heading hierarchy is logical (H1 → H2 → H3)",
    ],
  },
  {
    slug: "california",
    name: "California",
    lawsuitStats: {
      federal2024: 3,
      total2024: 485,
      year2023: 520,
      trend: "stable",
      trendPercent: -6.7,
    },
    topIndustries: [
      "Lifestyle, Fashion & Apparel (33% of cases)",
      "Technology & SaaS (19% of cases)",
      "Restaurant, Food & Beverages (16% of cases)",
      "Health & Beauty (11% of cases)",
      "Financial Services (9% of cases)",
    ],
    stateRegulations: [
      "Unruh Civil Rights Act provides state-level enforcement",
      "California residents can sue for minimum $4,000 statutory damages per violation",
      "AB 434 requires businesses to post accessibility statements",
      "Strong plaintiff bar with expertise in digital accessibility",
    ],
    notableCases: [
      {
        case: "Martinez v. Cot'n Wash Inc.",
        year: 2024,
        description:
          "State court ruled that website-only businesses are covered under California's Unruh Act",
      },
      {
        case: "Thurston v. Midvale Indemnity Co.",
        year: 2023,
        description:
          "Insurance company site found inaccessible; court awarded damages under Unruh Act",
      },
      {
        case: "Robles v. Domino's Pizza",
        year: 2019,
        description:
          "Ninth Circuit landmark ruling that ADA applies to websites and mobile apps",
      },
    ],
    protectionSteps: [
      "Perform comprehensive WCAG 2.1 AA compliance audit",
      "Post accessibility statement with remediation timeline",
      "Implement automated and manual testing protocols",
      "Create feedback mechanism for accessibility issues",
      "Document accessibility efforts and policies",
      "Partner with accessibility experts for ongoing compliance",
    ],
    checklist: [
      "Website meets WCAG 2.1 Level AA requirements",
      "Accessibility statement posted and up-to-date",
      "Alternative text provided for all images",
      "Form labels are visible and properly associated",
      "Color contrast ratios meet minimum standards",
      "Keyboard navigation works across entire site",
      "Screen reader testing completed on key flows",
      "Focus indicators are visible on all interactive elements",
      "Multimedia content includes captions and transcripts",
      "Accessibility feedback mechanism is in place",
    ],
  },
  {
    slug: "florida",
    name: "Florida",
    lawsuitStats: {
      federal2024: 470,
      total2024: 629,
      year2023: 385,
      trend: "increasing",
      trendPercent: 22.1,
    },
    topIndustries: [
      "Restaurant, Food & Beverages (24% of cases)",
      "Lifestyle, Fashion & Apparel (28% of cases)",
      "Hospitality & Tourism (15% of cases)",
      "Healthcare & Medical Services (13% of cases)",
      "Real Estate & Property Management (8% of cases)",
    ],
    stateRegulations: [
      "Florida follows federal ADA standards with no additional state requirements",
      "Growing number of cases in Southern District of Florida",
      "State courts accept website accessibility claims under ADA Title III",
      "Serial plaintiff activity has increased significantly since 2023",
    ],
    notableCases: [
      {
        case: "Andrews v. Blick Art Materials",
        year: 2024,
        description:
          "Retailer's website found inaccessible to blind users; settlement required full WCAG 2.1 AA compliance",
      },
      {
        case: "Silva v. [Hotel Chain]",
        year: 2023,
        description:
          "Court ruled booking engine must be accessible; awarded damages for discriminatory digital barrier",
      },
      {
        case: "Gil v. Winn-Dixie Stores",
        year: 2017,
        description:
          "Florida-based grocery chain faced landmark ruling on website accessibility requirements",
      },
    ],
    protectionSteps: [
      "Run automated accessibility scan to identify quick fixes",
      "Conduct manual testing with keyboard and screen readers",
      "Fix critical issues like missing alt text and form labels",
      "Ensure mobile experience is accessible",
      "Document accessibility roadmap and progress",
      "Stay current on ADA website accessibility case law in Florida",
    ],
    checklist: [
      "Images and graphics have meaningful alt text",
      "Forms are labeled and keyboard accessible",
      "Color contrast meets WCAG 2.1 AA (4.5:1 text, 3:1 UI)",
      "Navigation is operable without a mouse",
      "Focus states are clearly visible",
      "Video and audio content includes captions",
      "Headings are properly structured (H1, H2, H3 order)",
      "Links have descriptive text (avoid 'click here')",
      "Error messages are clear and programmatically announced",
      "Page language is declared in HTML",
    ],
  },
  {
    slug: "pennsylvania",
    name: "Pennsylvania",
    lawsuitStats: {
      federal2024: 103,
      total2024: 121,
      year2023: 95,
      trend: "increasing",
      trendPercent: 27.4,
    },
    topIndustries: [
      "Restaurant, Food & Beverages (22% of cases)",
      "Lifestyle, Fashion & Apparel (31% of cases)",
      "Healthcare & Medical Services (16% of cases)",
      "Financial Services (12% of cases)",
      "Education & Training (9% of cases)",
    ],
    stateRegulations: [
      "Pennsylvania Human Relations Act (PHRA) mirrors ADA protections",
      "State law applies to businesses with 4+ employees",
      "Eastern District of Pennsylvania has seen growing digital accessibility filings",
      "Pennsylvania courts recognize websites as public accommodations",
    ],
    notableCases: [
      {
        case: "Murphy v. [Retail Chain]",
        year: 2024,
        description:
          "Eastern District ruling found retailer's e-commerce site violated ADA due to screen reader incompatibility",
      },
      {
        case: "Johnson v. [Healthcare Provider]",
        year: 2023,
        description:
          "Patient portal found inaccessible; court ordered remediation and awarded attorney fees",
      },
      {
        case: "Haynes v. Dunkin' Donuts",
        year: 2022,
        description:
          "Settlement required full WCAG 2.1 AA compliance and accessibility training for web team",
      },
    ],
    protectionSteps: [
      "Identify and fix high-priority accessibility barriers",
      "Ensure WCAG 2.1 AA compliance on core user flows",
      "Train development and design teams on accessibility",
      "Implement accessibility testing in QA process",
      "Create clear accessibility statement and contact method",
      "Conduct periodic accessibility audits",
    ],
    checklist: [
      "All images include alt text descriptions",
      "Forms have visible, associated labels",
      "Text and background color contrast is sufficient",
      "Site is fully navigable using only a keyboard",
      "Focus indicators are visible on interactive elements",
      "Multimedia content is captioned and transcribed",
      "Heading levels follow logical structure",
      "Links clearly describe their destination",
      "Status messages are announced to assistive tech",
      "Page titles are descriptive and unique",
    ],
  },
  {
    slug: "illinois",
    name: "Illinois",
    lawsuitStats: {
      federal2024: 93,
      total2024: 199,
      year2023: 175,
      trend: "increasing",
      trendPercent: 13.7,
    },
    topIndustries: [
      "Lifestyle, Fashion & Apparel (29% of cases)",
      "Restaurant, Food & Beverages (21% of cases)",
      "Healthcare & Medical Services (17% of cases)",
      "Retail & E-commerce (14% of cases)",
      "Financial Services (10% of cases)",
    ],
    stateRegulations: [
      "Illinois Human Rights Act extends ADA protections at state level",
      "Applies to businesses with 1+ employees (broader than federal ADA)",
      "Northern District of Illinois handles majority of federal filings",
      "State courts increasingly accepting website accessibility claims",
    ],
    notableCases: [
      {
        case: "Lacy v. [Restaurant Chain]",
        year: 2024,
        description:
          "Online ordering system found inaccessible to screen readers; settlement included damages and remediation",
      },
      {
        case: "Morgan v. [Healthcare System]",
        year: 2023,
        description:
          "Patient portal violated ADA; court ordered full accessibility audit and compliance roadmap",
      },
      {
        case: "Access Living v. [City Service]",
        year: 2022,
        description:
          "Public service website required to meet WCAG 2.1 AA standards under settlement agreement",
      },
    ],
    protectionSteps: [
      "Conduct full WCAG 2.1 AA accessibility assessment",
      "Remediate critical accessibility barriers first",
      "Implement accessibility into development workflow",
      "Test with assistive technologies regularly",
      "Provide accessibility training to content creators",
      "Monitor site for accessibility issues post-launch",
    ],
    checklist: [
      "Alt text provided for all meaningful images",
      "Form inputs have clear, visible labels",
      "Color contrast meets WCAG 2.1 AA requirements",
      "Keyboard navigation is fully functional",
      "Focus states are visible on all controls",
      "Videos and podcasts include captions/transcripts",
      "Semantic HTML headings used properly",
      "Link text is descriptive and meaningful",
      "Error messages are clear and accessible",
      "ARIA roles and labels used appropriately",
    ],
  },
];
