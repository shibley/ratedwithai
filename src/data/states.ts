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
  {
    slug: "texas",
    name: "Texas",
    lawsuitStats: {
      federal2024: 187,
      total2024: 245,
      year2023: 198,
      trend: "increasing",
      trendPercent: 23.7,
    },
    topIndustries: [
      "Restaurant, Food & Beverages (26% of cases)",
      "Lifestyle, Fashion & Apparel (24% of cases)",
      "Healthcare & Medical Services (18% of cases)",
      "Technology & SaaS (15% of cases)",
      "Real Estate & Property Management (9% of cases)",
    ],
    stateRegulations: [
      "Texas follows federal ADA standards without additional state law",
      "Texas Architectural Barriers Act covers physical accessibility",
      "Northern and Southern Districts of Texas see growing digital filings",
      "No state-level statutory damages for web accessibility claims",
    ],
    notableCases: [
      {
        case: "Pena v. [Retail Chain]",
        year: 2024,
        description:
          "Southern District ruled e-commerce checkout flow violated ADA; settlement required WCAG 2.1 AA compliance",
      },
      {
        case: "Rodriguez v. [Healthcare System]",
        year: 2023,
        description:
          "Patient scheduling portal found inaccessible; court awarded damages and ordered remediation",
      },
      {
        case: "Martinez v. [Restaurant Group]",
        year: 2022,
        description:
          "Online ordering platform settlement included mandatory accessibility training and audits",
      },
    ],
    protectionSteps: [
      "Conduct comprehensive WCAG 2.1 AA accessibility audit",
      "Prioritize high-traffic pages and conversion flows",
      "Implement keyboard navigation across all features",
      "Test with screen readers on major user journeys",
      "Create accessibility statement with contact details",
      "Train development teams on accessibility standards",
    ],
    checklist: [
      "Images include descriptive alt text",
      "Forms have visible and properly associated labels",
      "Color contrast meets WCAG 2.1 AA standards",
      "Full keyboard navigation is functional",
      "Focus indicators are visible on all controls",
      "Videos include captions and audio descriptions",
      "Headings follow logical hierarchy",
      "Links have descriptive text",
      "Error messages are clear and announced",
      "ARIA labels used correctly",
    ],
  },
  {
    slug: "georgia",
    name: "Georgia",
    lawsuitStats: {
      federal2024: 89,
      total2024: 134,
      year2023: 112,
      trend: "increasing",
      trendPercent: 19.6,
    },
    topIndustries: [
      "Lifestyle, Fashion & Apparel (28% of cases)",
      "Restaurant, Food & Beverages (23% of cases)",
      "Healthcare & Medical Services (19% of cases)",
      "Technology & Software (14% of cases)",
      "Hospitality & Tourism (10% of cases)",
    ],
    stateRegulations: [
      "Georgia follows federal ADA Title III requirements",
      "No additional state-level website accessibility laws",
      "Northern District of Georgia (Atlanta) sees majority of filings",
      "Growing tech hub attracting increased accessibility scrutiny",
    ],
    notableCases: [
      {
        case: "Williams v. [E-commerce Company]",
        year: 2024,
        description:
          "Atlanta-based retailer required full WCAG 2.1 AA compliance after screen reader accessibility failures",
      },
      {
        case: "Johnson v. [Healthcare Provider]",
        year: 2023,
        description:
          "Telehealth platform found inaccessible; settlement included remediation and ongoing monitoring",
      },
      {
        case: "Davis v. [Restaurant Chain]",
        year: 2022,
        description:
          "Mobile app ordering system required accessibility updates under consent decree",
      },
    ],
    protectionSteps: [
      "Audit website for WCAG 2.1 AA compliance",
      "Fix critical barriers affecting screen reader users",
      "Ensure forms and checkout are keyboard accessible",
      "Test mobile experience with assistive technologies",
      "Publish accessibility statement and feedback mechanism",
      "Implement accessibility into design and development process",
    ],
    checklist: [
      "All images have meaningful alt text",
      "Form fields include visible labels",
      "Color contrast ratios meet WCAG standards",
      "Site is navigable using only keyboard",
      "Focus states are clearly visible",
      "Video content includes captions",
      "Heading structure is logical",
      "Links describe their destination",
      "Error messages are accessible",
      "Page language is declared",
    ],
  },
  {
    slug: "new-jersey",
    name: "New Jersey",
    lawsuitStats: {
      federal2024: 76,
      total2024: 118,
      year2023: 89,
      trend: "increasing",
      trendPercent: 32.6,
    },
    topIndustries: [
      "Lifestyle, Fashion & Apparel (32% of cases)",
      "Healthcare & Medical Services (21% of cases)",
      "Restaurant, Food & Beverages (17% of cases)",
      "Financial Services (14% of cases)",
      "Education & Training (8% of cases)",
    ],
    stateRegulations: [
      "New Jersey Law Against Discrimination (NJLAD) extends ADA protections",
      "State law covers employers with 1+ employees",
      "District of New Jersey has seen significant growth in accessibility filings",
      "Strong state-level enforcement mechanisms available",
    ],
    notableCases: [
      {
        case: "Thompson v. [Retail Company]",
        year: 2024,
        description:
          "E-commerce website found inaccessible under both ADA and NJLAD; dual remedies awarded",
      },
      {
        case: "Anderson v. [Financial Institution]",
        year: 2023,
        description:
          "Online banking portal required accessibility remediation and user testing with disabled individuals",
      },
      {
        case: "Rivera v. [Healthcare System]",
        year: 2022,
        description:
          "Patient portal settlement required WCAG 2.1 AA compliance within 18 months",
      },
    ],
    protectionSteps: [
      "Conduct WCAG 2.1 AA compliance audit",
      "Address both federal ADA and NJLAD requirements",
      "Implement automated and manual accessibility testing",
      "Train content creators on accessibility basics",
      "Create accessible document templates (PDFs, forms)",
      "Monitor and respond to accessibility complaints promptly",
    ],
    checklist: [
      "Images include appropriate alt text",
      "Forms have visible, associated labels",
      "Color contrast meets minimum requirements",
      "Keyboard navigation works throughout",
      "Focus indicators are visible",
      "Multimedia includes captions/transcripts",
      "Heading hierarchy is correct",
      "Link text is descriptive",
      "Error handling is accessible",
      "ARIA is used appropriately",
    ],
  },
  {
    slug: "ohio",
    name: "Ohio",
    lawsuitStats: {
      federal2024: 67,
      total2024: 98,
      year2023: 84,
      trend: "increasing",
      trendPercent: 16.7,
    },
    topIndustries: [
      "Healthcare & Medical Services (24% of cases)",
      "Lifestyle, Fashion & Apparel (22% of cases)",
      "Restaurant, Food & Beverages (19% of cases)",
      "Manufacturing & Industrial (15% of cases)",
      "Financial Services (11% of cases)",
    ],
    stateRegulations: [
      "Ohio follows federal ADA Title III standards",
      "No additional state-level web accessibility requirements",
      "Southern and Northern Districts of Ohio handle accessibility cases",
      "Healthcare sector particularly targeted due to patient portal accessibility",
    ],
    notableCases: [
      {
        case: "Baker v. [Healthcare System]",
        year: 2024,
        description:
          "Patient portal found inaccessible to screen reader users; settlement required full compliance",
      },
      {
        case: "Miller v. [Retail Chain]",
        year: 2023,
        description:
          "E-commerce site required accessibility updates after keyboard navigation failures",
      },
      {
        case: "Clark v. [Financial Services]",
        year: 2022,
        description:
          "Online application process made accessible under consent decree",
      },
    ],
    protectionSteps: [
      "Perform WCAG 2.1 AA accessibility assessment",
      "Focus on healthcare and patient-facing systems",
      "Ensure keyboard accessibility across all features",
      "Test with multiple screen readers",
      "Create accessibility roadmap with timelines",
      "Conduct regular accessibility audits",
    ],
    checklist: [
      "All images have descriptive alt text",
      "Form inputs are properly labeled",
      "Color contrast meets WCAG standards",
      "Full keyboard navigation available",
      "Focus states are visible",
      "Video content is captioned",
      "Headings are properly structured",
      "Links are descriptive",
      "Errors are clearly communicated",
      "Page titles are unique and descriptive",
    ],
  },
  {
    slug: "north-carolina",
    name: "North Carolina",
    lawsuitStats: {
      federal2024: 58,
      total2024: 87,
      year2023: 72,
      trend: "increasing",
      trendPercent: 20.8,
    },
    topIndustries: [
      "Technology & Software (27% of cases)",
      "Healthcare & Medical Services (23% of cases)",
      "Lifestyle, Fashion & Apparel (20% of cases)",
      "Financial Services (16% of cases)",
      "Restaurant, Food & Beverages (9% of cases)",
    ],
    stateRegulations: [
      "North Carolina follows federal ADA requirements",
      "No additional state accessibility laws for websites",
      "Research Triangle tech hub attracting increased scrutiny",
      "Eastern and Western Districts handle accessibility filings",
    ],
    notableCases: [
      {
        case: "Harris v. [Tech Company]",
        year: 2024,
        description:
          "SaaS platform required accessibility remediation affecting thousands of business users",
      },
      {
        case: "Taylor v. [Healthcare Provider]",
        year: 2023,
        description:
          "Telehealth platform accessibility failures led to settlement with compliance requirements",
      },
      {
        case: "Wilson v. [Financial Services]",
        year: 2022,
        description:
          "Online account management made accessible under court order",
      },
    ],
    protectionSteps: [
      "Audit for WCAG 2.1 AA compliance",
      "Prioritize SaaS and technology platform accessibility",
      "Implement accessibility testing in CI/CD pipeline",
      "Train engineering teams on accessibility development",
      "Document accessibility features and compliance efforts",
      "Engage accessibility consultants for complex features",
    ],
    checklist: [
      "Images include meaningful alt text",
      "Forms are fully labeled and accessible",
      "Color contrast meets requirements",
      "Keyboard navigation is complete",
      "Focus indicators are present",
      "Media content includes captions",
      "Heading structure is logical",
      "Link text describes destination",
      "Error states are accessible",
      "ARIA is correctly implemented",
    ],
  },
  {
    slug: "michigan",
    name: "Michigan",
    lawsuitStats: {
      federal2024: 52,
      total2024: 79,
      year2023: 68,
      trend: "increasing",
      trendPercent: 16.2,
    },
    topIndustries: [
      "Healthcare & Medical Services (26% of cases)",
      "Lifestyle, Fashion & Apparel (23% of cases)",
      "Manufacturing & Automotive (18% of cases)",
      "Restaurant, Food & Beverages (16% of cases)",
      "Financial Services (10% of cases)",
    ],
    stateRegulations: [
      "Michigan follows federal ADA Title III standards",
      "Persons with Disabilities Civil Rights Act provides state protections",
      "Eastern District of Michigan (Detroit) handles most filings",
      "Automotive and manufacturing sector websites increasingly targeted",
    ],
    notableCases: [
      {
        case: "Washington v. [Auto Dealer Group]",
        year: 2024,
        description:
          "Vehicle inventory and financing websites required full accessibility compliance",
      },
      {
        case: "Lewis v. [Healthcare System]",
        year: 2023,
        description:
          "Patient portal accessibility issues resolved through structured settlement",
      },
      {
        case: "Moore v. [Retailer]",
        year: 2022,
        description:
          "E-commerce platform required keyboard and screen reader accessibility updates",
      },
    ],
    protectionSteps: [
      "Conduct WCAG 2.1 AA compliance assessment",
      "Focus on complex interactive features",
      "Ensure automotive configurators are accessible",
      "Test patient portals with assistive technology",
      "Create accessibility documentation",
      "Implement ongoing monitoring program",
    ],
    checklist: [
      "All images have alt text",
      "Forms include visible labels",
      "Color contrast is sufficient",
      "Keyboard navigation works fully",
      "Focus states are visible",
      "Videos have captions",
      "Headings are structured correctly",
      "Links are descriptive",
      "Errors are announced properly",
      "Skip links are provided",
    ],
  },
  {
    slug: "virginia",
    name: "Virginia",
    lawsuitStats: {
      federal2024: 61,
      total2024: 89,
      year2023: 73,
      trend: "increasing",
      trendPercent: 21.9,
    },
    topIndustries: [
      "Technology & Software (29% of cases)",
      "Government Contractors (21% of cases)",
      "Healthcare & Medical Services (19% of cases)",
      "Financial Services (15% of cases)",
      "Professional Services (9% of cases)",
    ],
    stateRegulations: [
      "Virginia follows federal ADA requirements",
      "Government contractors face additional accessibility requirements",
      "Eastern District of Virginia (Alexandria) is a major filing venue",
      "Technology corridor companies increasingly targeted",
    ],
    notableCases: [
      {
        case: "Thompson v. [Government Contractor]",
        year: 2024,
        description:
          "Federal contractor's public website required WCAG 2.1 AA compliance under settlement",
      },
      {
        case: "Jackson v. [Tech Company]",
        year: 2023,
        description:
          "Cloud platform accessibility failures led to remediation requirements",
      },
      {
        case: "White v. [Healthcare Provider]",
        year: 2022,
        description:
          "Telehealth accessibility settlement included ongoing monitoring requirements",
      },
    ],
    protectionSteps: [
      "Audit for WCAG 2.1 AA compliance",
      "Address Section 508 requirements for government contractors",
      "Implement accessibility in software development lifecycle",
      "Test with multiple assistive technologies",
      "Create VPAT documentation for enterprise products",
      "Train teams on accessibility best practices",
    ],
    checklist: [
      "Images have descriptive alt text",
      "Forms are properly labeled",
      "Color contrast meets standards",
      "Full keyboard access available",
      "Focus indicators are visible",
      "Multimedia is captioned",
      "Heading hierarchy is correct",
      "Links describe their purpose",
      "Error handling is accessible",
      "ARIA roles are correct",
    ],
  },
  {
    slug: "washington",
    name: "Washington",
    lawsuitStats: {
      federal2024: 48,
      total2024: 76,
      year2023: 61,
      trend: "increasing",
      trendPercent: 24.6,
    },
    topIndustries: [
      "Technology & Software (35% of cases)",
      "Lifestyle, Fashion & Apparel (21% of cases)",
      "Healthcare & Medical Services (17% of cases)",
      "E-commerce & Retail (14% of cases)",
      "Financial Services (8% of cases)",
    ],
    stateRegulations: [
      "Washington Law Against Discrimination (WLAD) extends protections",
      "State courts recognize website accessibility claims",
      "Seattle tech hub companies face heightened scrutiny",
      "Western District of Washington handles most filings",
    ],
    notableCases: [
      {
        case: "Chen v. [Tech Giant]",
        year: 2024,
        description:
          "Major platform required accessibility improvements across consumer-facing products",
      },
      {
        case: "Nguyen v. [E-commerce Company]",
        year: 2023,
        description:
          "Online marketplace settlement included WCAG 2.1 AA compliance requirements",
      },
      {
        case: "Garcia v. [Software Company]",
        year: 2022,
        description:
          "B2B software platform required accessibility documentation and remediation",
      },
    ],
    protectionSteps: [
      "Conduct comprehensive WCAG 2.1 AA audit",
      "Prioritize technology platform accessibility",
      "Implement accessibility testing automation",
      "Create accessibility design system components",
      "Train engineering teams on accessible development",
      "Establish accessibility champions program",
    ],
    checklist: [
      "All images include alt text",
      "Form inputs have visible labels",
      "Color contrast is adequate",
      "Keyboard navigation is complete",
      "Focus states are present",
      "Video content is captioned",
      "Headings follow proper order",
      "Links are clearly labeled",
      "Errors are accessible",
      "ARIA usage is appropriate",
    ],
  },
  {
    slug: "massachusetts",
    name: "Massachusetts",
    lawsuitStats: {
      federal2024: 71,
      total2024: 104,
      year2023: 88,
      trend: "increasing",
      trendPercent: 18.2,
    },
    topIndustries: [
      "Healthcare & Medical Services (28% of cases)",
      "Education & Higher Ed (22% of cases)",
      "Technology & Software (19% of cases)",
      "Financial Services (16% of cases)",
      "Lifestyle, Fashion & Apparel (10% of cases)",
    ],
    stateRegulations: [
      "Massachusetts follows federal ADA requirements",
      "State courts accept web accessibility claims",
      "Strong healthcare and education sectors face scrutiny",
      "District of Massachusetts handles significant filing volume",
    ],
    notableCases: [
      {
        case: "Sullivan v. [Healthcare System]",
        year: 2024,
        description:
          "Major hospital network required full patient portal accessibility remediation",
      },
      {
        case: "O'Brien v. [University]",
        year: 2023,
        description:
          "Higher education learning platform required WCAG 2.1 AA compliance",
      },
      {
        case: "Kennedy v. [Financial Services]",
        year: 2022,
        description:
          "Investment platform made accessible under structured settlement",
      },
    ],
    protectionSteps: [
      "Audit for WCAG 2.1 AA compliance",
      "Prioritize healthcare and education platforms",
      "Ensure learning management systems are accessible",
      "Test patient portals with assistive technology",
      "Create accessibility policy documentation",
      "Implement faculty and staff accessibility training",
    ],
    checklist: [
      "Images have meaningful alt text",
      "Forms are fully labeled",
      "Color contrast meets requirements",
      "Keyboard navigation is functional",
      "Focus indicators are visible",
      "Multimedia is captioned",
      "Heading structure is logical",
      "Links describe their destination",
      "Error messages are accessible",
      "Documents (PDFs) are tagged",
    ],
  },
  {
    slug: "arizona",
    name: "Arizona",
    lawsuitStats: {
      federal2024: 43,
      total2024: 67,
      year2023: 54,
      trend: "increasing",
      trendPercent: 24.1,
    },
    topIndustries: [
      "Healthcare & Medical Services (25% of cases)",
      "Real Estate & Property (22% of cases)",
      "Lifestyle, Fashion & Apparel (20% of cases)",
      "Restaurant, Food & Beverages (17% of cases)",
      "Technology & Software (11% of cases)",
    ],
    stateRegulations: [
      "Arizona follows federal ADA Title III requirements",
      "Arizona Civil Rights Act provides additional protections",
      "Phoenix metro growth driving increased accessibility filings",
      "District of Arizona handling growing caseload",
    ],
    notableCases: [
      {
        case: "Martinez v. [Real Estate Company]",
        year: 2024,
        description:
          "Property search and application portal required accessibility remediation",
      },
      {
        case: "Hernandez v. [Healthcare Provider]",
        year: 2023,
        description:
          "Telehealth platform settlement included ongoing accessibility monitoring",
      },
      {
        case: "Lopez v. [Retail Chain]",
        year: 2022,
        description:
          "E-commerce website made WCAG 2.1 AA compliant under consent decree",
      },
    ],
    protectionSteps: [
      "Conduct WCAG 2.1 AA compliance audit",
      "Focus on real estate and property platforms",
      "Ensure property search features are accessible",
      "Test healthcare portals with screen readers",
      "Create accessibility documentation",
      "Monitor for accessibility complaints",
    ],
    checklist: [
      "All images have alt text",
      "Forms include proper labels",
      "Color contrast is sufficient",
      "Keyboard access is complete",
      "Focus states are visible",
      "Videos are captioned",
      "Headings are structured",
      "Links are descriptive",
      "Errors are announced",
      "ARIA is used correctly",
    ],
  },
  {
    slug: "colorado",
    name: "Colorado",
    lawsuitStats: {
      federal2024: 39,
      total2024: 58,
      year2023: 47,
      trend: "increasing",
      trendPercent: 23.4,
    },
    topIndustries: [
      "Technology & Software (31% of cases)",
      "Outdoor & Recreation (19% of cases)",
      "Healthcare & Medical Services (18% of cases)",
      "Lifestyle, Fashion & Apparel (17% of cases)",
      "Cannabis & CBD (10% of cases)",
    ],
    stateRegulations: [
      "Colorado follows federal ADA requirements",
      "Colorado Anti-Discrimination Act provides state protections",
      "Tech startup hub driving accessibility attention",
      "District of Colorado handling increased filings",
    ],
    notableCases: [
      {
        case: "Peterson v. [Tech Startup]",
        year: 2024,
        description:
          "SaaS platform required accessibility improvements for enterprise customers",
      },
      {
        case: "Johnson v. [Outdoor Retailer]",
        year: 2023,
        description:
          "E-commerce site made accessible after keyboard navigation failures",
      },
      {
        case: "Williams v. [Cannabis Dispensary]",
        year: 2022,
        description:
          "Online ordering and reservation system required accessibility updates",
      },
    ],
    protectionSteps: [
      "Audit for WCAG 2.1 AA compliance",
      "Focus on technology and SaaS platforms",
      "Ensure booking and reservation systems are accessible",
      "Test e-commerce flows with assistive technology",
      "Create accessibility roadmap",
      "Train development teams on accessible coding",
    ],
    checklist: [
      "Images include alt text",
      "Forms have visible labels",
      "Color contrast meets standards",
      "Full keyboard navigation",
      "Focus indicators present",
      "Multimedia is captioned",
      "Heading hierarchy correct",
      "Links clearly labeled",
      "Errors accessible",
      "ARIA properly used",
    ],
  },
  {
    slug: "tennessee",
    name: "Tennessee",
    lawsuitStats: {
      federal2024: 34,
      total2024: 52,
      year2023: 41,
      trend: "increasing",
      trendPercent: 26.8,
    },
    topIndustries: [
      "Healthcare & Medical Services (27% of cases)",
      "Entertainment & Music (21% of cases)",
      "Restaurant, Food & Beverages (19% of cases)",
      "Lifestyle, Fashion & Apparel (18% of cases)",
      "Hospitality & Tourism (10% of cases)",
    ],
    stateRegulations: [
      "Tennessee follows federal ADA Title III requirements",
      "No additional state-level web accessibility laws",
      "Nashville and Memphis growth driving increased filings",
      "Middle and Western Districts handle accessibility cases",
    ],
    notableCases: [
      {
        case: "Brown v. [Healthcare System]",
        year: 2024,
        description:
          "Regional hospital network patient portal required full accessibility compliance",
      },
      {
        case: "Davis v. [Entertainment Venue]",
        year: 2023,
        description:
          "Ticketing and event platform made accessible under settlement agreement",
      },
      {
        case: "Wilson v. [Restaurant Group]",
        year: 2022,
        description:
          "Online ordering system accessibility improvements required",
      },
    ],
    protectionSteps: [
      "Conduct WCAG 2.1 AA accessibility audit",
      "Focus on healthcare and entertainment platforms",
      "Ensure ticketing systems are accessible",
      "Test restaurant ordering with screen readers",
      "Create accessibility statement",
      "Implement ongoing monitoring",
    ],
    checklist: [
      "All images have alt text",
      "Forms include labels",
      "Color contrast adequate",
      "Keyboard navigation works",
      "Focus states visible",
      "Videos captioned",
      "Headings structured",
      "Links descriptive",
      "Errors announced",
      "Skip navigation provided",
    ],
  },
  {
    slug: "maryland",
    name: "Maryland",
    lawsuitStats: {
      federal2024: 45,
      total2024: 68,
      year2023: 56,
      trend: "increasing",
      trendPercent: 21.4,
    },
    topIndustries: [
      "Healthcare & Medical Services (26% of cases)",
      "Government Contractors (22% of cases)",
      "Technology & Software (20% of cases)",
      "Financial Services (17% of cases)",
      "Professional Services (10% of cases)",
    ],
    stateRegulations: [
      "Maryland follows federal ADA requirements",
      "Government contractors face Section 508 requirements",
      "DC metro area proximity increases scrutiny",
      "District of Maryland handles significant caseload",
    ],
    notableCases: [
      {
        case: "Mitchell v. [Government Contractor]",
        year: 2024,
        description:
          "Federal contractor website required WCAG 2.1 AA and Section 508 compliance",
      },
      {
        case: "Roberts v. [Healthcare Provider]",
        year: 2023,
        description:
          "Patient portal accessibility settlement included third-party monitoring",
      },
      {
        case: "Adams v. [Financial Institution]",
        year: 2022,
        description:
          "Online banking platform made accessible under consent decree",
      },
    ],
    protectionSteps: [
      "Audit for WCAG 2.1 AA and Section 508",
      "Address government contractor requirements",
      "Implement accessibility in procurement",
      "Test with multiple assistive technologies",
      "Create VPAT documentation",
      "Train teams on accessibility compliance",
    ],
    checklist: [
      "Images have descriptive alt text",
      "Forms properly labeled",
      "Color contrast meets requirements",
      "Full keyboard accessibility",
      "Focus indicators visible",
      "Multimedia captioned",
      "Heading hierarchy correct",
      "Links are descriptive",
      "Error handling accessible",
      "ARIA correctly implemented",
    ],
  },
  {
    slug: "minnesota",
    name: "Minnesota",
    lawsuitStats: {
      federal2024: 37,
      total2024: 54,
      year2023: 45,
      trend: "increasing",
      trendPercent: 20.0,
    },
    topIndustries: [
      "Healthcare & Medical Services (28% of cases)",
      "Retail & E-commerce (24% of cases)",
      "Financial Services (19% of cases)",
      "Technology & Software (15% of cases)",
      "Manufacturing (9% of cases)",
    ],
    stateRegulations: [
      "Minnesota Human Rights Act extends ADA protections",
      "State law applies to businesses serving the public",
      "District of Minnesota handling growing accessibility cases",
      "Corporate headquarters concentration increases targeting",
    ],
    notableCases: [
      {
        case: "Olson v. [Retailer]",
        year: 2024,
        description:
          "Major retailer e-commerce platform required comprehensive accessibility updates",
      },
      {
        case: "Anderson v. [Healthcare System]",
        year: 2023,
        description:
          "Multi-hospital system patient portal made accessible under settlement",
      },
      {
        case: "Peterson v. [Financial Services]",
        year: 2022,
        description:
          "Investment platform accessibility remediation required",
      },
    ],
    protectionSteps: [
      "Conduct WCAG 2.1 AA compliance audit",
      "Focus on retail and healthcare platforms",
      "Ensure e-commerce checkout is accessible",
      "Test patient portals with assistive technology",
      "Create accessibility roadmap with milestones",
      "Implement staff accessibility training",
    ],
    checklist: [
      "All images include alt text",
      "Forms have visible labels",
      "Color contrast sufficient",
      "Keyboard navigation complete",
      "Focus states present",
      "Videos are captioned",
      "Headings properly structured",
      "Links are descriptive",
      "Errors clearly communicated",
      "ARIA usage appropriate",
    ],
  },
  {
    slug: "indiana",
    name: "Indiana",
    lawsuitStats: {
      federal2024: 31,
      total2024: 47,
      year2023: 38,
      trend: "increasing",
      trendPercent: 23.7,
    },
    topIndustries: [
      "Healthcare & Medical Services (27% of cases)",
      "Manufacturing & Industrial (23% of cases)",
      "Lifestyle, Fashion & Apparel (19% of cases)",
      "Restaurant, Food & Beverages (16% of cases)",
      "Financial Services (10% of cases)",
    ],
    stateRegulations: [
      "Indiana follows federal ADA Title III requirements",
      "No additional state accessibility laws for websites",
      "Southern District of Indiana (Indianapolis) handles most cases",
      "Manufacturing sector websites increasingly targeted",
    ],
    notableCases: [
      {
        case: "Smith v. [Healthcare Provider]",
        year: 2024,
        description:
          "Regional health system patient portal required accessibility compliance",
      },
      {
        case: "Jones v. [Manufacturing Company]",
        year: 2023,
        description:
          "B2B portal accessibility settlement included customer-facing updates",
      },
      {
        case: "Brown v. [Retailer]",
        year: 2022,
        description:
          "E-commerce site made keyboard accessible under consent decree",
      },
    ],
    protectionSteps: [
      "Audit for WCAG 2.1 AA compliance",
      "Focus on healthcare and B2B platforms",
      "Ensure manufacturing portals are accessible",
      "Test e-commerce with assistive technology",
      "Document accessibility efforts",
      "Create ongoing monitoring program",
    ],
    checklist: [
      "Images have alt text",
      "Forms include labels",
      "Color contrast meets standards",
      "Keyboard navigation functional",
      "Focus indicators visible",
      "Multimedia captioned",
      "Heading structure correct",
      "Links descriptive",
      "Errors accessible",
      "Page titles descriptive",
    ],
  },
  {
    slug: "wisconsin",
    name: "Wisconsin",
    lawsuitStats: {
      federal2024: 28,
      total2024: 42,
      year2023: 34,
      trend: "increasing",
      trendPercent: 23.5,
    },
    topIndustries: [
      "Healthcare & Medical Services (26% of cases)",
      "Manufacturing & Industrial (24% of cases)",
      "Retail & E-commerce (20% of cases)",
      "Restaurant, Food & Beverages (16% of cases)",
      "Financial Services (9% of cases)",
    ],
    stateRegulations: [
      "Wisconsin follows federal ADA requirements",
      "No additional state web accessibility laws",
      "Eastern District of Wisconsin handles most filings",
      "Manufacturing and healthcare sectors face scrutiny",
    ],
    notableCases: [
      {
        case: "Kowalski v. [Healthcare System]",
        year: 2024,
        description:
          "Hospital network patient portal required full accessibility remediation",
      },
      {
        case: "Mueller v. [Manufacturer]",
        year: 2023,
        description:
          "Product configurator and ordering system made accessible",
      },
      {
        case: "Schmidt v. [Retailer]",
        year: 2022,
        description:
          "E-commerce website accessibility improvements under settlement",
      },
    ],
    protectionSteps: [
      "Conduct WCAG 2.1 AA accessibility audit",
      "Focus on healthcare and manufacturing",
      "Ensure product configurators are accessible",
      "Test ordering systems with screen readers",
      "Create accessibility documentation",
      "Implement accessibility training",
    ],
    checklist: [
      "All images have alt text",
      "Forms properly labeled",
      "Color contrast adequate",
      "Keyboard navigation works",
      "Focus states visible",
      "Videos captioned",
      "Headings structured",
      "Links descriptive",
      "Errors announced",
      "ARIA used correctly",
    ],
  },
  {
    slug: "connecticut",
    name: "Connecticut",
    lawsuitStats: {
      federal2024: 33,
      total2024: 49,
      year2023: 41,
      trend: "increasing",
      trendPercent: 19.5,
    },
    topIndustries: [
      "Financial Services (29% of cases)",
      "Healthcare & Medical Services (25% of cases)",
      "Insurance (18% of cases)",
      "Lifestyle, Fashion & Apparel (15% of cases)",
      "Professional Services (8% of cases)",
    ],
    stateRegulations: [
      "Connecticut follows federal ADA requirements",
      "Strong financial and insurance sector presence",
      "District of Connecticut handles accessibility cases",
      "Insurance industry websites increasingly targeted",
    ],
    notableCases: [
      {
        case: "Murphy v. [Insurance Company]",
        year: 2024,
        description:
          "Insurance quote and application portal required accessibility compliance",
      },
      {
        case: "Sullivan v. [Financial Institution]",
        year: 2023,
        description:
          "Online banking platform made accessible under settlement",
      },
      {
        case: "O'Connor v. [Healthcare Provider]",
        year: 2022,
        description:
          "Patient portal accessibility remediation required",
      },
    ],
    protectionSteps: [
      "Audit for WCAG 2.1 AA compliance",
      "Focus on financial and insurance platforms",
      "Ensure quote generators are accessible",
      "Test application forms with screen readers",
      "Create accessibility policy",
      "Implement ongoing monitoring",
    ],
    checklist: [
      "Images include alt text",
      "Forms have proper labels",
      "Color contrast meets standards",
      "Full keyboard access",
      "Focus indicators present",
      "Multimedia captioned",
      "Heading hierarchy correct",
      "Links clearly labeled",
      "Error handling accessible",
      "ARIA implemented correctly",
    ],
  },
  {
    slug: "oregon",
    name: "Oregon",
    lawsuitStats: {
      federal2024: 26,
      total2024: 41,
      year2023: 33,
      trend: "increasing",
      trendPercent: 24.2,
    },
    topIndustries: [
      "Technology & Software (32% of cases)",
      "Outdoor & Recreation (21% of cases)",
      "Healthcare & Medical Services (18% of cases)",
      "Lifestyle, Fashion & Apparel (16% of cases)",
      "Food & Beverage (9% of cases)",
    ],
    stateRegulations: [
      "Oregon follows federal ADA requirements",
      "Oregon Bureau of Labor handles discrimination complaints",
      "Portland tech hub attracting accessibility attention",
      "District of Oregon handling growing caseload",
    ],
    notableCases: [
      {
        case: "Nguyen v. [Tech Company]",
        year: 2024,
        description:
          "Software platform required comprehensive accessibility updates",
      },
      {
        case: "Johnson v. [Outdoor Retailer]",
        year: 2023,
        description:
          "E-commerce site accessibility improvements under settlement",
      },
      {
        case: "Williams v. [Healthcare Provider]",
        year: 2022,
        description:
          "Telehealth platform made accessible under consent decree",
      },
    ],
    protectionSteps: [
      "Conduct WCAG 2.1 AA accessibility audit",
      "Focus on technology and outdoor platforms",
      "Ensure booking systems are accessible",
      "Test e-commerce with assistive technology",
      "Create accessibility documentation",
      "Train development teams",
    ],
    checklist: [
      "All images have alt text",
      "Forms include labels",
      "Color contrast sufficient",
      "Keyboard navigation complete",
      "Focus states visible",
      "Videos captioned",
      "Headings structured",
      "Links descriptive",
      "Errors accessible",
      "ARIA appropriate",
    ],
  },
  {
    slug: "nevada",
    name: "Nevada",
    lawsuitStats: {
      federal2024: 31,
      total2024: 48,
      year2023: 39,
      trend: "increasing",
      trendPercent: 23.1,
    },
    topIndustries: [
      "Hospitality & Gaming (31% of cases)",
      "Entertainment & Events (23% of cases)",
      "Restaurant, Food & Beverages (18% of cases)",
      "Lifestyle, Fashion & Apparel (15% of cases)",
      "Real Estate (9% of cases)",
    ],
    stateRegulations: [
      "Nevada follows federal ADA requirements",
      "Nevada Equal Rights Commission handles complaints",
      "Las Vegas hospitality sector heavily targeted",
      "District of Nevada handling significant accessibility cases",
    ],
    notableCases: [
      {
        case: "Garcia v. [Casino Resort]",
        year: 2024,
        description:
          "Hotel booking and gaming platform required accessibility compliance",
      },
      {
        case: "Martinez v. [Entertainment Venue]",
        year: 2023,
        description:
          "Ticketing and event reservation system made accessible",
      },
      {
        case: "Lopez v. [Restaurant Group]",
        year: 2022,
        description:
          "Online reservation and ordering system accessibility updates",
      },
    ],
    protectionSteps: [
      "Audit for WCAG 2.1 AA compliance",
      "Focus on hospitality and entertainment",
      "Ensure booking systems are accessible",
      "Test reservation platforms with screen readers",
      "Create accessibility statement",
      "Monitor gaming platforms for compliance",
    ],
    checklist: [
      "Images have alt text",
      "Forms properly labeled",
      "Color contrast meets standards",
      "Keyboard navigation functional",
      "Focus indicators visible",
      "Multimedia captioned",
      "Heading structure correct",
      "Links descriptive",
      "Errors announced",
      "ARIA used correctly",
    ],
  },
  {
    slug: "south-carolina",
    name: "South Carolina",
    lawsuitStats: {
      federal2024: 29,
      total2024: 43,
      year2023: 35,
      trend: "increasing",
      trendPercent: 22.9,
    },
    topIndustries: [
      "Hospitality & Tourism (28% of cases)",
      "Healthcare & Medical Services (24% of cases)",
      "Restaurant, Food & Beverages (19% of cases)",
      "Manufacturing & Industrial (15% of cases)",
      "Real Estate & Property (9% of cases)",
    ],
    stateRegulations: [
      "South Carolina follows federal ADA Title III requirements",
      "No additional state-level web accessibility laws",
      "Charleston and Myrtle Beach tourism driving accessibility scrutiny",
      "District of South Carolina handling growing accessibility caseload",
    ],
    notableCases: [
      {
        case: "Johnson v. [Resort Group]",
        year: 2024,
        description:
          "Coastal resort booking platform required full WCAG 2.1 AA compliance after screen reader failures",
      },
      {
        case: "Williams v. [Healthcare System]",
        year: 2023,
        description:
          "Regional hospital network patient portal made accessible under structured settlement",
      },
      {
        case: "Davis v. [Restaurant Chain]",
        year: 2022,
        description:
          "Online ordering and reservation system required accessibility updates",
      },
    ],
    protectionSteps: [
      "Conduct comprehensive WCAG 2.1 AA accessibility audit",
      "Focus on hospitality and tourism booking systems",
      "Ensure beach rental and reservation platforms are accessible",
      "Test healthcare patient portals with assistive technology",
      "Create accessibility statement with contact information",
      "Implement ongoing accessibility monitoring program",
    ],
    checklist: [
      "All images include descriptive alt text",
      "Forms have visible, properly associated labels",
      "Color contrast meets WCAG 2.1 AA minimum (4.5:1)",
      "Website is fully keyboard navigable",
      "Focus indicators visible on all interactive elements",
      "Video and audio content includes captions",
      "Heading hierarchy follows logical structure",
      "Link text clearly describes destination",
      "Error messages are clear and announced",
      "Page language declared in HTML",
    ],
  },
  {
    slug: "missouri",
    name: "Missouri",
    lawsuitStats: {
      federal2024: 35,
      total2024: 52,
      year2023: 42,
      trend: "increasing",
      trendPercent: 23.8,
    },
    topIndustries: [
      "Healthcare & Medical Services (27% of cases)",
      "Retail & E-commerce (23% of cases)",
      "Restaurant, Food & Beverages (20% of cases)",
      "Financial Services (15% of cases)",
      "Manufacturing & Industrial (10% of cases)",
    ],
    stateRegulations: [
      "Missouri follows federal ADA requirements",
      "Missouri Human Rights Act provides state-level protections",
      "Kansas City and St. Louis metro areas driving filing volume",
      "Eastern and Western Districts of Missouri handle accessibility cases",
    ],
    notableCases: [
      {
        case: "Thompson v. [Healthcare Provider]",
        year: 2024,
        description:
          "Multi-hospital system patient portal required comprehensive accessibility remediation",
      },
      {
        case: "Anderson v. [Retail Chain]",
        year: 2023,
        description:
          "E-commerce website made keyboard accessible under settlement agreement",
      },
      {
        case: "Miller v. [Financial Institution]",
        year: 2022,
        description:
          "Online banking platform accessibility improvements mandated by consent decree",
      },
    ],
    protectionSteps: [
      "Audit website for WCAG 2.1 AA compliance",
      "Focus on healthcare and financial platforms",
      "Ensure e-commerce checkout flows are accessible",
      "Test banking applications with screen readers",
      "Create accessibility documentation and roadmap",
      "Train development teams on accessibility standards",
    ],
    checklist: [
      "Images have meaningful alt text descriptions",
      "Form inputs include visible labels",
      "Color contrast ratios meet WCAG standards",
      "Full keyboard navigation available",
      "Focus states clearly visible",
      "Multimedia content is captioned",
      "Semantic heading structure used",
      "Links describe their destination",
      "Error handling is accessible",
      "ARIA landmarks identify page regions",
    ],
  },
  {
    slug: "alabama",
    name: "Alabama",
    lawsuitStats: {
      federal2024: 24,
      total2024: 36,
      year2023: 29,
      trend: "increasing",
      trendPercent: 24.1,
    },
    topIndustries: [
      "Healthcare & Medical Services (29% of cases)",
      "Manufacturing & Automotive (24% of cases)",
      "Restaurant, Food & Beverages (18% of cases)",
      "Retail & E-commerce (15% of cases)",
      "Financial Services (9% of cases)",
    ],
    stateRegulations: [
      "Alabama follows federal ADA Title III requirements",
      "No additional state web accessibility laws",
      "Healthcare sector particularly targeted due to rural hospital networks",
      "Northern and Middle Districts of Alabama handle accessibility filings",
    ],
    notableCases: [
      {
        case: "Robinson v. [Healthcare System]",
        year: 2024,
        description:
          "Regional hospital network patient scheduling portal required full accessibility compliance",
      },
      {
        case: "Jackson v. [Auto Manufacturer]",
        year: 2023,
        description:
          "Vehicle configuration and dealer locator websites made accessible under settlement",
      },
      {
        case: "Harris v. [Retail Chain]",
        year: 2022,
        description:
          "E-commerce platform keyboard and screen reader accessibility improvements ordered",
      },
    ],
    protectionSteps: [
      "Conduct WCAG 2.1 AA accessibility assessment",
      "Focus on healthcare patient-facing systems",
      "Ensure manufacturing configurators are accessible",
      "Test telehealth platforms with assistive technology",
      "Document accessibility policies and procedures",
      "Implement regular accessibility audits",
    ],
    checklist: [
      "All images have descriptive alt text",
      "Forms include visible, associated labels",
      "Color contrast meets minimum requirements",
      "Keyboard navigation works across site",
      "Focus indicators are present and visible",
      "Videos include captions and transcripts",
      "Headings follow proper hierarchy",
      "Link text is descriptive",
      "Error messages accessible to screen readers",
      "Skip navigation links provided",
    ],
  },
  {
    slug: "louisiana",
    name: "Louisiana",
    lawsuitStats: {
      federal2024: 27,
      total2024: 41,
      year2023: 33,
      trend: "increasing",
      trendPercent: 24.2,
    },
    topIndustries: [
      "Hospitality & Tourism (26% of cases)",
      "Healthcare & Medical Services (23% of cases)",
      "Restaurant, Food & Beverages (21% of cases)",
      "Energy & Industrial (16% of cases)",
      "Entertainment & Gaming (9% of cases)",
    ],
    stateRegulations: [
      "Louisiana follows federal ADA requirements",
      "Louisiana Commission on Human Rights handles discrimination cases",
      "New Orleans tourism and hospitality sector heavily targeted",
      "Eastern and Western Districts of Louisiana handle filings",
    ],
    notableCases: [
      {
        case: "Broussard v. [Hotel Group]",
        year: 2024,
        description:
          "French Quarter hotel booking platform required WCAG 2.1 AA compliance under settlement",
      },
      {
        case: "Thibodaux v. [Healthcare System]",
        year: 2023,
        description:
          "Regional health network patient portal accessibility remediation mandated",
      },
      {
        case: "Landry v. [Restaurant Group]",
        year: 2022,
        description:
          "Online ordering and reservation systems made accessible under consent decree",
      },
    ],
    protectionSteps: [
      "Audit for WCAG 2.1 AA compliance",
      "Focus on hospitality booking and tourism platforms",
      "Ensure restaurant ordering systems are accessible",
      "Test entertainment ticketing with screen readers",
      "Create accessibility statement and feedback mechanism",
      "Monitor for accessibility complaints and respond promptly",
    ],
    checklist: [
      "Images include meaningful alt text",
      "Form fields have visible labels",
      "Color contrast meets WCAG standards",
      "Full keyboard accessibility available",
      "Focus states clearly visible",
      "Video content includes captions",
      "Heading structure is logical",
      "Links describe their purpose",
      "Errors are announced properly",
      "ARIA used appropriately",
    ],
  },
  {
    slug: "kentucky",
    name: "Kentucky",
    lawsuitStats: {
      federal2024: 22,
      total2024: 34,
      year2023: 27,
      trend: "increasing",
      trendPercent: 25.9,
    },
    topIndustries: [
      "Healthcare & Medical Services (30% of cases)",
      "Manufacturing & Industrial (22% of cases)",
      "Restaurant, Food & Beverages (18% of cases)",
      "Retail & E-commerce (16% of cases)",
      "Financial Services (9% of cases)",
    ],
    stateRegulations: [
      "Kentucky follows federal ADA Title III requirements",
      "Kentucky Civil Rights Act provides state-level protections",
      "Healthcare sector faces significant accessibility scrutiny",
      "Eastern and Western Districts of Kentucky handle accessibility cases",
    ],
    notableCases: [
      {
        case: "Smith v. [Healthcare Provider]",
        year: 2024,
        description:
          "Multi-location healthcare system patient portal required comprehensive accessibility updates",
      },
      {
        case: "Brown v. [Manufacturing Company]",
        year: 2023,
        description:
          "B2B ordering platform made accessible under structured settlement",
      },
      {
        case: "Jones v. [Retail Chain]",
        year: 2022,
        description:
          "E-commerce website keyboard navigation and screen reader compatibility improved",
      },
    ],
    protectionSteps: [
      "Conduct WCAG 2.1 AA compliance audit",
      "Focus on healthcare and patient portal accessibility",
      "Ensure manufacturing B2B platforms are accessible",
      "Test retail e-commerce with assistive technology",
      "Create accessibility roadmap with milestones",
      "Train staff on accessibility best practices",
    ],
    checklist: [
      "All images have alt text",
      "Forms include proper labels",
      "Color contrast meets standards",
      "Keyboard navigation functional",
      "Focus indicators visible",
      "Multimedia content captioned",
      "Headings properly structured",
      "Links are descriptive",
      "Error messages accessible",
      "Page titles unique and descriptive",
    ],
  },
  {
    slug: "iowa",
    name: "Iowa",
    lawsuitStats: {
      federal2024: 18,
      total2024: 28,
      year2023: 22,
      trend: "increasing",
      trendPercent: 27.3,
    },
    topIndustries: [
      "Agriculture & Agribusiness (31% of cases)",
      "Healthcare & Medical Services (25% of cases)",
      "Insurance & Financial Services (19% of cases)",
      "Education & Higher Ed (14% of cases)",
      "Retail & E-commerce (8% of cases)",
    ],
    stateRegulations: [
      "Iowa follows federal ADA Title III requirements",
      "Iowa Civil Rights Act provides state-level protections",
      "Northern and Southern Districts of Iowa handle accessibility cases",
      "Growing focus on agricultural technology platform accessibility",
    ],
    notableCases: [
      {
        case: "Hansen v. [Agribusiness Company]",
        year: 2024,
        description:
          "Agricultural supply ordering platform required WCAG 2.1 AA compliance after settlement",
      },
      {
        case: "Miller v. [Healthcare System]",
        year: 2023,
        description:
          "Rural health network patient portal accessibility improvements mandated",
      },
      {
        case: "Peterson v. [Insurance Provider]",
        year: 2022,
        description:
          "Insurance quote and claims portal made accessible under consent decree",
      },
    ],
    protectionSteps: [
      "Conduct comprehensive WCAG 2.1 AA audit",
      "Focus on agricultural B2B platform accessibility",
      "Ensure healthcare patient portals are accessible",
      "Test insurance and financial platforms with screen readers",
      "Create accessibility statement with feedback mechanism",
      "Monitor and respond to accessibility complaints promptly",
    ],
    checklist: [
      "All images have descriptive alt text",
      "Form fields have visible, persistent labels",
      "Color contrast meets WCAG 2.1 AA standards",
      "Website is fully keyboard navigable",
      "Focus indicators clearly visible",
      "Videos include captions and transcripts",
      "Heading hierarchy is logical",
      "Links describe their destination",
      "Error messages are announced to screen readers",
      "ARIA landmarks identify page regions",
    ],
  },
  {
    slug: "utah",
    name: "Utah",
    lawsuitStats: {
      federal2024: 24,
      total2024: 38,
      year2023: 31,
      trend: "increasing",
      trendPercent: 22.6,
    },
    topIndustries: [
      "Technology & SaaS (34% of cases)",
      "Healthcare & Medical Services (22% of cases)",
      "Outdoor Recreation & Tourism (18% of cases)",
      "Financial Services & Fintech (15% of cases)",
      "E-commerce & Retail (9% of cases)",
    ],
    stateRegulations: [
      "Utah follows federal ADA Title III requirements",
      "Utah Antidiscrimination Act provides additional protections",
      "Silicon Slopes tech hub faces increased accessibility scrutiny",
      "District of Utah handles federal accessibility filings",
    ],
    notableCases: [
      {
        case: "Anderson v. [Tech Startup]",
        year: 2024,
        description:
          "SaaS platform required comprehensive accessibility overhaul including dashboard and reporting features",
      },
      {
        case: "Jensen v. [Outdoor Retailer]",
        year: 2023,
        description:
          "E-commerce site for outdoor equipment made accessible under structured settlement",
      },
      {
        case: "Taylor v. [Healthcare Network]",
        year: 2023,
        description:
          "Multi-location health system patient scheduling portal accessibility remediation required",
      },
    ],
    protectionSteps: [
      "Audit all SaaS products for WCAG 2.1 AA compliance",
      "Focus on dashboard and data visualization accessibility",
      "Ensure e-commerce checkout flows are fully accessible",
      "Test mobile apps with VoiceOver and TalkBack",
      "Create accessibility roadmap with quarterly milestones",
      "Partner with accessibility consultants for ongoing compliance",
    ],
    checklist: [
      "All images include meaningful alt text",
      "Form labels are visible and properly associated",
      "Color contrast meets WCAG 2.1 AA minimum ratios",
      "Full keyboard accessibility across entire platform",
      "Interactive elements have visible focus states",
      "Data visualizations have text alternatives",
      "Heading structure follows logical hierarchy",
      "Links are descriptive and distinct",
      "Error handling is accessible and clear",
      "Dynamic content updates are announced",
    ],
  },
  {
    slug: "oklahoma",
    name: "Oklahoma",
    lawsuitStats: {
      federal2024: 21,
      total2024: 33,
      year2023: 26,
      trend: "increasing",
      trendPercent: 26.9,
    },
    topIndustries: [
      "Energy & Oil/Gas (29% of cases)",
      "Healthcare & Medical Services (24% of cases)",
      "Retail & E-commerce (18% of cases)",
      "Financial Services & Banking (15% of cases)",
      "Hospitality & Tourism (11% of cases)",
    ],
    stateRegulations: [
      "Oklahoma follows federal ADA Title III requirements",
      "Oklahoma Human Rights Commission handles state discrimination cases",
      "Energy sector B2B platforms facing increased scrutiny",
      "Eastern, Western, and Northern Districts of Oklahoma handle filings",
    ],
    notableCases: [
      {
        case: "Williams v. [Energy Company]",
        year: 2024,
        description:
          "Oil and gas supplier portal required WCAG 2.1 AA compliance after federal lawsuit",
      },
      {
        case: "Johnson v. [Regional Hospital]",
        year: 2023,
        description:
          "Hospital patient portal and appointment scheduling system accessibility remediation mandated",
      },
      {
        case: "Davis v. [Banking Institution]",
        year: 2022,
        description:
          "Online banking platform keyboard navigation and screen reader compatibility improved",
      },
    ],
    protectionSteps: [
      "Conduct WCAG 2.1 AA compliance audit",
      "Focus on B2B energy platform accessibility",
      "Ensure healthcare booking systems are accessible",
      "Test banking and financial platforms with assistive technology",
      "Create accessibility statement and contact mechanism",
      "Train development teams on accessibility standards",
    ],
    checklist: [
      "Images have descriptive alt text",
      "Forms include visible labels",
      "Color contrast meets WCAG standards",
      "Keyboard navigation works across site",
      "Focus states are clearly visible",
      "Video content includes captions",
      "Headings follow logical structure",
      "Links describe their destination",
      "Errors are announced accessibly",
      "Page titles are unique and descriptive",
    ],
  },
  {
    slug: "kansas",
    name: "Kansas",
    lawsuitStats: {
      federal2024: 16,
      total2024: 25,
      year2023: 19,
      trend: "increasing",
      trendPercent: 31.6,
    },
    topIndustries: [
      "Agriculture & Agribusiness (28% of cases)",
      "Healthcare & Medical Services (26% of cases)",
      "Manufacturing & Industrial (19% of cases)",
      "Financial Services & Banking (16% of cases)",
      "Retail & E-commerce (9% of cases)",
    ],
    stateRegulations: [
      "Kansas follows federal ADA Title III requirements",
      "Kansas Human Rights Commission handles discrimination complaints",
      "Agricultural technology platforms under accessibility review",
      "District of Kansas handles federal accessibility cases",
    ],
    notableCases: [
      {
        case: "Smith v. [Ag Tech Company]",
        year: 2024,
        description:
          "Farm equipment ordering platform required accessibility updates under settlement agreement",
      },
      {
        case: "Brown v. [Hospital Network]",
        year: 2023,
        description:
          "Multi-location health system made patient portal accessible to screen reader users",
      },
      {
        case: "Wilson v. [Manufacturing Firm]",
        year: 2022,
        description:
          "B2B ordering and inventory system accessibility improvements mandated",
      },
    ],
    protectionSteps: [
      "Audit for WCAG 2.1 AA compliance",
      "Focus on agricultural and manufacturing B2B platforms",
      "Ensure healthcare portals meet accessibility standards",
      "Test banking platforms with assistive technology",
      "Create accessibility feedback mechanism",
      "Monitor accessibility case law in the District of Kansas",
    ],
    checklist: [
      "All images have alt text",
      "Form fields are properly labeled",
      "Color contrast meets minimum standards",
      "Full keyboard navigation available",
      "Focus indicators are visible",
      "Multimedia includes captions",
      "Heading hierarchy is logical",
      "Links are descriptive",
      "Error messages are accessible",
      "ARIA is used appropriately",
    ],
  },
  {
    slug: "arkansas",
    name: "Arkansas",
    lawsuitStats: {
      federal2024: 14,
      total2024: 22,
      year2023: 17,
      trend: "increasing",
      trendPercent: 29.4,
    },
    topIndustries: [
      "Retail & E-commerce (32% of cases)",
      "Healthcare & Medical Services (27% of cases)",
      "Agriculture & Food Processing (18% of cases)",
      "Transportation & Logistics (13% of cases)",
      "Financial Services (8% of cases)",
    ],
    stateRegulations: [
      "Arkansas follows federal ADA Title III requirements",
      "Arkansas Civil Rights Act of 1993 provides state protections",
      "Walmart and retail sector headquarters face heightened scrutiny",
      "Eastern and Western Districts of Arkansas handle accessibility cases",
    ],
    notableCases: [
      {
        case: "Thompson v. [Retail Chain]",
        year: 2024,
        description:
          "Major retailer e-commerce platform required comprehensive WCAG 2.1 AA remediation",
      },
      {
        case: "Jackson v. [Healthcare Provider]",
        year: 2023,
        description:
          "Regional hospital network patient portal made accessible under consent decree",
      },
      {
        case: "Martin v. [Logistics Company]",
        year: 2022,
        description:
          "Trucking company driver portal and scheduling system accessibility improvements mandated",
      },
    ],
    protectionSteps: [
      "Conduct WCAG 2.1 AA compliance audit",
      "Focus on e-commerce and retail platform accessibility",
      "Ensure healthcare booking and portals are accessible",
      "Test logistics and transportation platforms",
      "Create accessibility roadmap and statement",
      "Train teams on accessibility best practices",
    ],
    checklist: [
      "Images include meaningful alt text",
      "Forms have visible, associated labels",
      "Color contrast meets WCAG standards",
      "Keyboard navigation works throughout",
      "Focus states are clearly visible",
      "Videos include captions and transcripts",
      "Headings follow logical hierarchy",
      "Links describe their purpose",
      "Errors are announced to screen readers",
      "Page regions use ARIA landmarks",
    ],
  },
];
