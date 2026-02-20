export type WcagLevel = "A" | "AA" | "AAA";

export type WcagCriterion = {
  id: string;
  slug: string;
  name: string;
  level: WcagLevel;
  description: string;
  whyItMatters: string;
  commonViolations: string[];
  badExample: string;
  goodExample: string;
  howToFix: string;
  relatedCriteria: string[];
};

export const wcagCriteria: WcagCriterion[] = [
  {
    id: "1.1.1",
    slug: "1-1-1-non-text-content",
    name: "Non-text Content",
    level: "A",
    description:
      "Provide text alternatives for images, icons, charts, and other non-text elements so assistive technologies can interpret them.",
    whyItMatters:
      "Screen readers rely on text alternatives to convey meaning. Without them, critical information is hidden from blind or low-vision users.",
    commonViolations: [
      "Images missing descriptive alt text",
      "Icon-only buttons without accessible labels",
      "Charts or infographics without text summaries",
    ],
    badExample: "<img src=\"hero.jpg\">",
    goodExample: "<img src=\"hero.jpg\" alt=\"Woman using a laptop on a sofa\">",
    howToFix:
      "Add meaningful alt text to informative images, use aria-label for icon buttons, and provide adjacent text summaries for charts.",
    relatedCriteria: [
      "1-4-5-images-of-text",
      "2-4-4-link-purpose",
      "4-1-2-name-role-value",
    ],
  },
  {
    id: "1.3.1",
    slug: "1-3-1-info-and-relationships",
    name: "Info and Relationships",
    level: "A",
    description:
      "Information, structure, and relationships conveyed visually should also be available programmatically.",
    whyItMatters:
      "Screen readers need correct HTML structure to announce headings, lists, and form relationships.",
    commonViolations: [
      "Using divs instead of semantic headings",
      "Form fields not associated with labels",
      "Tables used for layout instead of data",
    ],
    badExample: "<div class=\"title\">Pricing</div>",
    goodExample: "<h2>Pricing</h2>",
    howToFix:
      "Use semantic HTML for headings and lists, associate labels with inputs, and reserve tables for data.",
    relatedCriteria: [
      "2-4-6-headings-and-labels",
      "3-3-2-labels-or-instructions",
      "4-1-2-name-role-value",
    ],
  },
  {
    id: "1.4.1",
    slug: "1-4-1-use-of-color",
    name: "Use of Color",
    level: "A",
    description:
      "Color should not be the only way to convey information, indicate an action, or distinguish elements.",
    whyItMatters:
      "Users with color vision deficiencies may miss important cues when color is the sole indicator.",
    commonViolations: [
      "Error states shown only in red",
      "Required fields indicated only by color",
      "Charts that rely on color-only legends",
    ],
    badExample: "<span class=\"text-red-500\">Error</span>",
    goodExample:
      "<span class=\"text-red-500\">Error:</span> Please enter a valid email.",
    howToFix:
      "Add text labels, icons, or patterns alongside color cues so meaning is conveyed in multiple ways.",
    relatedCriteria: [
      "1-4-3-contrast-minimum",
      "3-3-2-labels-or-instructions",
      "4-1-3-status-messages",
    ],
  },
  {
    id: "1.4.3",
    slug: "1-4-3-contrast-minimum",
    name: "Contrast (Minimum)",
    level: "AA",
    description:
      "Text and images of text must have sufficient contrast against their backgrounds.",
    whyItMatters:
      "Low contrast makes text unreadable for many users, especially those with low vision or in bright environments.",
    commonViolations: [
      "Light gray text on white backgrounds",
      "Low-contrast button labels",
      "Muted placeholder text used as labels",
    ],
    badExample: "<p class=\"text-slate-400\">Low contrast text</p>",
    goodExample: "<p class=\"text-slate-100\">Readable text</p>",
    howToFix:
      "Adjust color pairs to meet contrast ratios of at least 4.5:1 for normal text and 3:1 for large text.",
    relatedCriteria: [
      "1-4-11-non-text-contrast",
      "1-4-1-use-of-color",
      "1-4-5-images-of-text",
    ],
  },
  {
    id: "1.4.4",
    slug: "1-4-4-resize-text",
    name: "Resize Text",
    level: "AA",
    description:
      "Text should be resizable up to 200% without loss of content or functionality.",
    whyItMatters:
      "Users who rely on zoom should not lose access to content or controls when text is enlarged.",
    commonViolations: [
      "Fixed-height containers that clip text",
      "Text overlaps at 200% zoom",
      "Components that break when font size changes",
    ],
    badExample: "<div style=\"height:40px; overflow:hidden\">...</div>",
    goodExample: "<div class=\"min-h-[40px]\">...</div>",
    howToFix:
      "Use flexible layouts, allow containers to grow, and test zoom levels to ensure content reflows properly.",
    relatedCriteria: [
      "1-4-3-contrast-minimum",
      "2-4-3-focus-order",
      "2-1-1-keyboard",
    ],
  },
  {
    id: "1.4.11",
    slug: "1-4-11-non-text-contrast",
    name: "Non-text Contrast",
    level: "AA",
    description:
      "User interface components and graphical objects must have sufficient contrast.",
    whyItMatters:
      "Low-contrast focus rings, borders, and icons are hard to see for low-vision users.",
    commonViolations: [
      "Focus outlines that blend into the background",
      "Icon-only buttons with low contrast",
      "Thin borders on form inputs",
    ],
    badExample: "<button class=\"border border-slate-600 text-slate-600\">Save</button>",
    goodExample:
      "<button class=\"border border-slate-200 text-white\">Save</button>",
    howToFix:
      "Increase contrast for UI elements and ensure focus indicators are clearly visible.",
    relatedCriteria: [
      "1-4-3-contrast-minimum",
      "2-4-3-focus-order",
      "2-1-1-keyboard",
    ],
  },
  {
    id: "2.1.1",
    slug: "2-1-1-keyboard",
    name: "Keyboard",
    level: "A",
    description:
      "All functionality must be operable through a keyboard interface.",
    whyItMatters:
      "Many users rely on keyboard navigation or switch devices and cannot use a mouse.",
    commonViolations: [
      "Custom dropdowns that trap focus",
      "Click-only controls without keyboard support",
      "Hidden modals with no focus management",
    ],
    badExample: "<div onClick=\"openMenu()\">Menu</div>",
    goodExample: "<button type=\"button\" onClick=\"openMenu()\">Menu</button>",
    howToFix:
      "Use native controls when possible, add keyboard handlers, and ensure focus can move in and out of components.",
    relatedCriteria: [
      "2-4-3-focus-order",
      "2-4-1-bypass-blocks",
      "4-1-2-name-role-value",
    ],
  },
  {
    id: "2.4.1",
    slug: "2-4-1-bypass-blocks",
    name: "Bypass Blocks",
    level: "A",
    description:
      "Provide a mechanism to bypass repeated content like navigation.",
    whyItMatters:
      "Keyboard and screen reader users should be able to skip repetitive content quickly.",
    commonViolations: [
      "No skip link at the top of the page",
      "Skip link hidden or not focusable",
      "Long navigation before main content",
    ],
    badExample: "<a href=\"#main\" class=\"sr-only\">Skip</a>",
    goodExample:
      "<a href=\"#main\" class=\"skip-link\">Skip to main content</a>",
    howToFix:
      "Add a visible-on-focus skip link that jumps to the main content region.",
    relatedCriteria: [
      "2-4-3-focus-order",
      "2-4-2-page-titled",
      "2-4-6-headings-and-labels",
    ],
  },
  {
    id: "2.4.2",
    slug: "2-4-2-page-titled",
    name: "Page Titled",
    level: "A",
    description:
      "Web pages must have descriptive and unique titles.",
    whyItMatters:
      "Page titles help users understand where they are and navigate between tabs or history.",
    commonViolations: [
      "Missing or empty title tags",
      "Duplicate titles across pages",
      "Generic titles like \"Home\" only",
    ],
    badExample: "<title>Home</title>",
    goodExample: "<title>Pricing | RatedWithAI</title>",
    howToFix:
      "Ensure every page sets a descriptive title that reflects the primary content.",
    relatedCriteria: [
      "2-4-6-headings-and-labels",
      "2-4-4-link-purpose",
      "3-1-1-language-of-page",
    ],
  },
  {
    id: "2.4.4",
    slug: "2-4-4-link-purpose",
    name: "Link Purpose (In Context)",
    level: "A",
    description:
      "The purpose of each link should be clear from its text or surrounding context.",
    whyItMatters:
      "Screen reader users often navigate by links; vague text like \"click here\" provides no context.",
    commonViolations: [
      "Multiple links labeled \"Learn more\"",
      "Icon-only links without labels",
      "Links where surrounding context is missing",
    ],
    badExample: "<a href=\"/report\">Click here</a>",
    goodExample: "<a href=\"/report\">Download the accessibility report</a>",
    howToFix:
      "Write descriptive link text and add accessible labels for icon-only links.",
    relatedCriteria: [
      "1-1-1-non-text-content",
      "2-4-6-headings-and-labels",
      "4-1-2-name-role-value",
    ],
  },
  {
    id: "2.4.6",
    slug: "2-4-6-headings-and-labels",
    name: "Headings and Labels",
    level: "AA",
    description:
      "Headings and labels should describe topic or purpose clearly.",
    whyItMatters:
      "Clear headings help users scan content and screen reader users navigate quickly.",
    commonViolations: [
      "Headings that skip levels",
      "Labels that are vague or missing",
      "Sections without headings",
    ],
    badExample: "<h4>Section</h4>",
    goodExample: "<h2>Pricing and Plans</h2>",
    howToFix:
      "Use clear, descriptive headings and ensure form labels match their purpose.",
    relatedCriteria: [
      "1-3-1-info-and-relationships",
      "2-4-3-focus-order",
      "3-3-2-labels-or-instructions",
    ],
  },
  {
    id: "2.5.3",
    slug: "2-5-3-label-in-name",
    name: "Label in Name",
    level: "A",
    description:
      "The accessible name of UI components should contain the visible label text.",
    whyItMatters:
      "Voice control users rely on matching visible labels to activate controls.",
    commonViolations: [
      "Buttons labeled visually as \"Send\" but named \"Submit\"",
      "Icon buttons with mismatched aria-labels",
      "Custom controls with hidden labels",
    ],
    badExample: "<button aria-label=\"Submit\">Send</button>",
    goodExample: "<button aria-label=\"Send\">Send</button>",
    howToFix:
      "Ensure aria-label or aria-labelledby includes the visible label text.",
    relatedCriteria: [
      "4-1-2-name-role-value",
      "2-4-6-headings-and-labels",
      "3-3-2-labels-or-instructions",
    ],
  },
  {
    id: "3.1.1",
    slug: "3-1-1-language-of-page",
    name: "Language of Page",
    level: "A",
    description:
      "The default human language of each page must be programmatically identified.",
    whyItMatters:
      "Screen readers need the correct language to pronounce content accurately.",
    commonViolations: [
      "Missing lang attribute on html",
      "Incorrect language code",
      "Language not updated for localized pages",
    ],
    badExample: "<html>",
    goodExample: "<html lang=\"en\">",
    howToFix:
      "Set the correct lang attribute on the html element for every page.",
    relatedCriteria: [
      "3-1-2-language-of-parts",
      "2-4-2-page-titled",
      "4-1-1-parsing",
    ],
  },
  {
    id: "3.3.2",
    slug: "3-3-2-labels-or-instructions",
    name: "Labels or Instructions",
    level: "A",
    description:
      "Provide clear labels or instructions when user input is required.",
    whyItMatters:
      "Users need guidance to complete forms accurately, especially those using assistive tech.",
    commonViolations: [
      "Placeholders used instead of labels",
      "Required fields not clearly indicated",
      "Ambiguous instructions for complex inputs",
    ],
    badExample: "<input placeholder=\"Email\">",
    goodExample: "<label>Email</label><input type=\"email\">",
    howToFix:
      "Provide persistent labels, indicate required fields, and add helper text for complex inputs.",
    relatedCriteria: [
      "1-3-1-info-and-relationships",
      "2-4-6-headings-and-labels",
      "2-5-3-label-in-name",
    ],
  },
  {
    id: "4.1.1",
    slug: "4-1-1-parsing",
    name: "Parsing",
    level: "A",
    description:
      "Content should be parsed correctly by user agents and assistive technologies.",
    whyItMatters:
      "Invalid HTML can break screen reader navigation and cause unpredictable behavior.",
    commonViolations: [
      "Duplicate IDs on the page",
      "Unclosed elements",
      "Improper nesting of interactive elements",
    ],
    badExample: "<button><a href=\"/\">Home</a></button>",
    goodExample: "<a class=\"btn\" href=\"/\">Home</a>",
    howToFix:
      "Validate HTML, avoid duplicate IDs, and ensure elements are properly nested.",
    relatedCriteria: [
      "4-1-2-name-role-value",
      "2-1-1-keyboard",
      "3-1-1-language-of-page",
    ],
  },
  {
    id: "4.1.2",
    slug: "4-1-2-name-role-value",
    name: "Name, Role, Value",
    level: "A",
    description:
      "UI components must expose their name, role, and value to assistive technologies.",
    whyItMatters:
      "Custom controls without proper ARIA cannot be understood or operated by screen readers.",
    commonViolations: [
      "Custom buttons without role or label",
      "Sliders missing aria-valuenow",
      "Modals without aria-labelledby",
    ],
    badExample: "<div class=\"btn\">Save</div>",
    goodExample: "<button type=\"button\">Save</button>",
    howToFix:
      "Use native HTML controls whenever possible, and add ARIA roles and labels to custom widgets.",
    relatedCriteria: [
      "2-5-3-label-in-name",
      "2-1-1-keyboard",
      "1-1-1-non-text-content",
    ],
  },
  {
    id: "1.4.5",
    slug: "1-4-5-images-of-text",
    name: "Images of Text",
    level: "AA",
    description:
      "Avoid using images of text when the same presentation can be achieved with real text.",
    whyItMatters:
      "Text in images cannot be resized, translated, or read by screen readers reliably.",
    commonViolations: [
      "Hero banners with text baked into images",
      "Buttons using text inside images",
      "Marketing graphics with critical text",
    ],
    badExample: "<img src=\"sale-banner.png\" alt=\"\">",
    goodExample: "<div class=\"banner\"><h2>Winter Sale</h2></div>",
    howToFix:
      "Use live text styled with CSS instead of embedding text in images.",
    relatedCriteria: [
      "1-1-1-non-text-content",
      "1-4-3-contrast-minimum",
      "1-4-4-resize-text",
    ],
  },
  {
    id: "2.4.3",
    slug: "2-4-3-focus-order",
    name: "Focus Order",
    level: "A",
    description:
      "Focus should move through content in a logical order that preserves meaning.",
    whyItMatters:
      "Keyboard users depend on predictable focus order to understand page structure.",
    commonViolations: [
      "Focusable elements hidden off-screen",
      "Modals that do not trap focus",
      "Tab order that skips key content",
    ],
    badExample: "<button tabindex=\"3\">Save</button>",
    goodExample: "<button>Save</button>",
    howToFix:
      "Follow DOM order for focus, manage focus in modals, and avoid positive tabindex values.",
    relatedCriteria: [
      "2-1-1-keyboard",
      "2-4-1-bypass-blocks",
      "2-4-6-headings-and-labels",
    ],
  },
  {
    id: "3.1.2",
    slug: "3-1-2-language-of-parts",
    name: "Language of Parts",
    level: "AA",
    description:
      "Identify the language of passages or phrases that differ from the page language.",
    whyItMatters:
      "Screen readers need language changes to pronounce words correctly.",
    commonViolations: [
      "Foreign phrases without lang attributes",
      "Localized snippets on English pages",
      "Mixed-language product names without markup",
    ],
    badExample: "<p>Bonjour et bienvenue</p>",
    goodExample: "<p lang=\"fr\">Bonjour et bienvenue</p>",
    howToFix:
      "Wrap foreign language phrases in elements with the correct lang attribute.",
    relatedCriteria: [
      "3-1-1-language-of-page",
      "2-4-2-page-titled",
      "4-1-1-parsing",
    ],
  },
  {
    id: "4.1.3",
    slug: "4-1-3-status-messages",
    name: "Status Messages",
    level: "AA",
    description:
      "Status messages should be programmatically determined without receiving focus.",
    whyItMatters:
      "Screen reader users need to hear confirmations, errors, and updates without hunting for them.",
    commonViolations: [
      "Form success messages not announced",
      "Toast notifications without ARIA live regions",
      "Error banners that require manual focus",
    ],
    badExample: "<div class=\"toast\">Saved</div>",
    goodExample: "<div role=\"status\" aria-live=\"polite\">Saved</div>",
    howToFix:
      "Use aria-live regions for dynamic updates and ensure messages are announced automatically.",
    relatedCriteria: [
      "3-3-2-labels-or-instructions",
      "1-4-1-use-of-color",
      "4-1-2-name-role-value",
    ],
  },
];
