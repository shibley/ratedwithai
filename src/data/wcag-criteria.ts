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
    id: "2.1.2",
    slug: "2-1-2-no-keyboard-trap",
    name: "No Keyboard Trap",
    level: "A",
    description:
      "Users must be able to navigate away from any component using only the keyboard.",
    whyItMatters:
      "Keyboard users can become trapped in components with no way to escape, forcing a browser restart or abandonment.",
    commonViolations: [
      "Modal dialogs with no close mechanism via keyboard",
      "Embedded media players that capture all key events",
      "Custom widgets that don't release focus",
      "Infinite tab loops within components",
    ],
    badExample: "<div tabindex=\"0\" onkeydown=\"event.preventDefault()\">Trapped content</div>",
    goodExample: "<dialog>\n  <button onclick=\"this.closest('dialog').close()\">Close</button>\n  Content here\n</dialog>",
    howToFix:
      "Ensure all interactive components allow users to exit via Tab, Escape, or arrow keys. Document non-standard exit methods if used.",
    relatedCriteria: [
      "2-1-1-keyboard",
      "2-4-3-focus-order",
      "4-1-2-name-role-value",
    ],
  },
  {
    id: "2.2.1",
    slug: "2-2-1-timing-adjustable",
    name: "Timing Adjustable",
    level: "A",
    description:
      "For time limits set by content, users must be able to turn off, adjust, or extend the time.",
    whyItMatters:
      "Users with disabilities often need more time to read, understand, and interact with content. Strict time limits create barriers.",
    commonViolations: [
      "Session timeouts without warning",
      "Auto-advancing carousels or slideshows",
      "Forms that expire without option to extend",
      "Timed quizzes with no accommodation",
    ],
    badExample: "<div data-timeout=\"30000\">Complete within 30 seconds</div>",
    goodExample: "<div role=\"alert\">Session expires in 2 minutes. <button>Extend session</button></div>",
    howToFix:
      "Provide warnings before timeouts, allow users to extend time limits by at least 10x, or offer the option to disable time limits entirely.",
    relatedCriteria: [
      "2-2-2-pause-stop-hide",
      "3-2-1-on-focus",
      "4-1-3-status-messages",
    ],
  },
  {
    id: "2.2.2",
    slug: "2-2-2-pause-stop-hide",
    name: "Pause, Stop, Hide",
    level: "A",
    description:
      "For moving, blinking, scrolling, or auto-updating content, users must be able to pause, stop, or hide it.",
    whyItMatters:
      "Animated content can distract users with attention disorders and prevent screen reader users from reading static content.",
    commonViolations: [
      "Auto-playing carousels without pause controls",
      "Background videos that cannot be stopped",
      "Scrolling news tickers without controls",
      "Live updating feeds without pause option",
    ],
    badExample: "<div class=\"animate-scroll\">Breaking news ticker...</div>",
    goodExample: "<div class=\"carousel\">\n  <button aria-label=\"Pause slideshow\">⏸</button>\n  Slide content\n</div>",
    howToFix:
      "Add visible pause/stop controls for all moving content. Respect prefers-reduced-motion media query. Avoid auto-play unless essential.",
    relatedCriteria: [
      "2-2-1-timing-adjustable",
      "1-4-3-contrast-minimum",
      "2-3-1-three-flashes",
    ],
  },
  {
    id: "2.4.5",
    slug: "2-4-5-multiple-ways",
    name: "Multiple Ways",
    level: "AA",
    description:
      "Provide more than one way to locate a web page within a set of pages, except when the page is a step in a process.",
    whyItMatters:
      "Different users prefer different navigation methods. Some use search, others use sitemaps, and some browse hierarchically.",
    commonViolations: [
      "No search functionality on large sites",
      "Missing sitemap or site index",
      "No breadcrumb navigation",
      "Single navigation path to all content",
    ],
    badExample: "<!-- Site with only main menu navigation -->",
    goodExample: "<nav aria-label=\"Breadcrumb\">...</nav>\n<form role=\"search\">...</form>\n<nav aria-label=\"Main\">...</nav>",
    howToFix:
      "Implement multiple navigation methods: main menu, search, sitemap, breadcrumbs, or related links. At least two methods should be available.",
    relatedCriteria: [
      "2-4-1-bypass-blocks",
      "2-4-2-page-titled",
      "3-2-3-consistent-navigation",
    ],
  },
  {
    id: "3.2.3",
    slug: "3-2-3-consistent-navigation",
    name: "Consistent Navigation",
    level: "AA",
    description:
      "Navigation mechanisms that appear on multiple pages should be presented in the same relative order each time.",
    whyItMatters:
      "Consistent navigation helps users predict where to find links and reduces cognitive load when moving between pages.",
    commonViolations: [
      "Navigation items in different order on different pages",
      "Footer links that vary by page",
      "Sidebar navigation that changes position",
      "Search boxes in inconsistent locations",
    ],
    badExample: "<!-- Page 1: Home | About | Contact -->\n<!-- Page 2: Contact | Home | About -->",
    goodExample: "<!-- All pages: Home | About | Contact -->",
    howToFix:
      "Use shared navigation components across all pages. Keep menu items in the same order. New items can be added but existing order should remain.",
    relatedCriteria: [
      "3-2-4-consistent-identification",
      "2-4-5-multiple-ways",
      "2-4-1-bypass-blocks",
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
  {
    id: "1.4.10",
    slug: "1-4-10-reflow",
    name: "Reflow",
    level: "AA",
    description:
      "Content should reflow to a single column at 320px width without requiring horizontal scrolling or losing information.",
    whyItMatters:
      "Users who zoom in or use narrow viewports need content to reflow without horizontal scrolling, which is disorienting.",
    commonViolations: [
      "Fixed-width layouts that require horizontal scrolling",
      "Tables that overflow their containers",
      "Two-dimensional scrolling required at 400% zoom",
      "Content cut off or hidden at narrow widths",
    ],
    badExample: "<div style=\"width: 1200px; overflow: hidden\">...</div>",
    goodExample: "<div class=\"max-w-full overflow-x-auto\">...</div>",
    howToFix:
      "Use responsive layouts with relative units, allow tables to scroll horizontally within containers, and test at 320px viewport width.",
    relatedCriteria: [
      "1-4-4-resize-text",
      "1-4-3-contrast-minimum",
      "2-4-3-focus-order",
    ],
  },
  {
    id: "2.4.7",
    slug: "2-4-7-focus-visible",
    name: "Focus Visible",
    level: "AA",
    description:
      "Any keyboard-operable user interface must have a visible focus indicator.",
    whyItMatters:
      "Keyboard users need to see where focus is at all times to navigate effectively. Hidden focus is like hiding the mouse cursor.",
    commonViolations: [
      "CSS that removes outline without replacement",
      "Focus indicators that blend into the background",
      "Focus styles overridden by component libraries",
      "Low-contrast focus rings",
    ],
    badExample: "button:focus { outline: none; }",
    goodExample: "button:focus-visible { outline: 2px solid #3b82f6; outline-offset: 2px; }",
    howToFix:
      "Never remove focus outlines without providing a visible alternative. Use focus-visible for cleaner mouse interactions while preserving keyboard visibility.",
    relatedCriteria: [
      "2-1-1-keyboard",
      "2-4-3-focus-order",
      "1-4-11-non-text-contrast",
    ],
  },
  {
    id: "3.2.1",
    slug: "3-2-1-on-focus",
    name: "On Focus",
    level: "A",
    description:
      "When a component receives focus, it should not trigger a change of context automatically.",
    whyItMatters:
      "Unexpected changes when tabbing through a page disorient users, especially screen reader and keyboard users.",
    commonViolations: [
      "Forms that submit when a field receives focus",
      "Dropdowns that navigate away on focus",
      "Modals that open automatically when focusing a link",
      "Page content that changes when tabbing to an element",
    ],
    badExample: "<select onfocus=\"window.location = this.value\">...</select>",
    goodExample: "<select onchange=\"handleChange()\">...</select>\n<button type=\"submit\">Go</button>",
    howToFix:
      "Trigger context changes only on explicit user actions like clicks or submissions, not on focus events.",
    relatedCriteria: [
      "3-2-2-on-input",
      "2-1-1-keyboard",
      "2-4-3-focus-order",
    ],
  },
  {
    id: "3.2.2",
    slug: "3-2-2-on-input",
    name: "On Input",
    level: "A",
    description:
      "Changing a form control's value should not automatically cause a change of context unless the user is warned beforehand.",
    whyItMatters:
      "Automatic submissions or navigations when typing or selecting options can cause users to lose work or become disoriented.",
    commonViolations: [
      "Select menus that navigate immediately on change",
      "Search fields that submit on every keystroke",
      "Radio buttons that auto-submit forms",
      "Checkboxes that trigger page reloads",
    ],
    badExample: "<select onchange=\"this.form.submit()\">...</select>",
    goodExample: "<select name=\"category\">...</select>\n<button type=\"submit\">Apply</button>",
    howToFix:
      "Provide explicit submit buttons for form actions. If auto-submission is necessary, warn users in advance with clear instructions.",
    relatedCriteria: [
      "3-2-1-on-focus",
      "3-3-2-labels-or-instructions",
      "2-1-1-keyboard",
    ],
  },
  {
    id: "3.3.1",
    slug: "3-3-1-error-identification",
    name: "Error Identification",
    level: "A",
    description:
      "When an input error is detected, the error must be identified and described to the user in text.",
    whyItMatters:
      "Users need clear text descriptions of errors to understand what went wrong and how to fix it, not just color changes or icons.",
    commonViolations: [
      "Errors indicated only by red borders",
      "Generic error messages like 'Invalid input'",
      "Error icons without text descriptions",
      "Errors not associated with their fields",
    ],
    badExample: "<input class=\"border-red-500\" aria-invalid=\"true\">",
    goodExample: "<input aria-invalid=\"true\" aria-describedby=\"email-error\">\n<p id=\"email-error\" class=\"text-red-500\">Please enter a valid email address</p>",
    howToFix:
      "Provide specific text descriptions for each error, associate them with form fields using aria-describedby, and ensure errors are announced to screen readers.",
    relatedCriteria: [
      "3-3-2-labels-or-instructions",
      "1-4-1-use-of-color",
      "4-1-3-status-messages",
    ],
  },
  {
    id: "1.2.1",
    slug: "1-2-1-audio-only-video-only",
    name: "Audio-only and Video-only (Prerecorded)",
    level: "A",
    description:
      "Provide alternatives for prerecorded audio-only and video-only content. Audio needs a text transcript; video needs either a transcript or audio description.",
    whyItMatters:
      "Deaf users cannot hear audio content, and blind users cannot see video-only content. Alternatives ensure everyone can access the information.",
    commonViolations: [
      "Podcasts without transcripts",
      "Background music videos without descriptions",
      "Audio announcements with no text alternative",
      "Silent instructional videos without narration or transcript",
    ],
    badExample: "<audio src=\"podcast.mp3\" controls></audio>",
    goodExample: "<audio src=\"podcast.mp3\" controls></audio>\n<a href=\"podcast-transcript.html\">Read transcript</a>",
    howToFix:
      "Provide text transcripts for audio content and either audio descriptions or text transcripts for video-only content.",
    relatedCriteria: [
      "1-2-2-captions-prerecorded",
      "1-1-1-non-text-content",
      "1-2-3-audio-description-media-alternative",
    ],
  },
  {
    id: "1.2.2",
    slug: "1-2-2-captions-prerecorded",
    name: "Captions (Prerecorded)",
    level: "A",
    description:
      "Provide captions for all prerecorded audio content in synchronized media, except when the media is clearly labeled as an alternative for text.",
    whyItMatters:
      "Captions allow deaf and hard-of-hearing users to access video content. They also help users in noisy environments or when audio cannot be played.",
    commonViolations: [
      "Videos without any captions",
      "Auto-generated captions with significant errors",
      "Captions that don't include speaker identification",
      "Missing captions for sound effects and music",
    ],
    badExample: "<video src=\"tutorial.mp4\" controls></video>",
    goodExample: "<video controls>\n  <source src=\"tutorial.mp4\">\n  <track kind=\"captions\" src=\"tutorial-en.vtt\" srclang=\"en\" label=\"English\" default>\n</video>",
    howToFix:
      "Add synchronized captions using WebVTT or SRT files. Include all dialogue, speaker identification, and relevant sound effects. Review auto-generated captions for accuracy.",
    relatedCriteria: [
      "1-2-1-audio-only-video-only",
      "1-2-4-captions-live",
      "1-2-3-audio-description-media-alternative",
    ],
  },
  {
    id: "1.2.3",
    slug: "1-2-3-audio-description-media-alternative",
    name: "Audio Description or Media Alternative (Prerecorded)",
    level: "A",
    description:
      "Provide audio description or a full text alternative for prerecorded video content in synchronized media.",
    whyItMatters:
      "Blind and low-vision users cannot see visual information in videos. Audio descriptions narrate important visual details during natural pauses.",
    commonViolations: [
      "Training videos with visual demonstrations but no description",
      "Product demos that show UI without describing actions",
      "Educational content where visual graphics are not described",
      "No text alternative summarizing video content",
    ],
    badExample: "<video controls>\n  <source src=\"product-demo.mp4\">\n</video>",
    goodExample: "<video controls>\n  <source src=\"product-demo.mp4\">\n  <track kind=\"descriptions\" src=\"demo-descriptions.vtt\" srclang=\"en\" label=\"Audio descriptions\">\n</video>",
    howToFix:
      "Add audio description tracks that narrate visual information, or provide a complete text transcript including visual descriptions alongside the video.",
    relatedCriteria: [
      "1-2-1-audio-only-video-only",
      "1-2-2-captions-prerecorded",
      "1-2-5-audio-description-prerecorded",
    ],
  },
  {
    id: "1.2.5",
    slug: "1-2-5-audio-description-prerecorded",
    name: "Audio Description (Prerecorded)",
    level: "AA",
    description:
      "Provide audio description for all prerecorded video content in synchronized media.",
    whyItMatters:
      "While 1.2.3 allows a text alternative, this criterion requires actual audio descriptions for AA compliance, providing a richer experience for blind users.",
    commonViolations: [
      "Videos meeting only the 1.2.3 text alternative requirement",
      "Audio descriptions that miss important visual details",
      "Descriptions that talk over dialogue",
      "Videos with no pauses for description narration",
    ],
    badExample: "<!-- Video with text transcript only -->",
    goodExample: "<video controls>\n  <source src=\"main.mp4\">\n  <track kind=\"descriptions\" src=\"audio-desc.vtt\" srclang=\"en\">\n</video>",
    howToFix:
      "Create audio description tracks that fit within natural pauses. For videos with few pauses, consider extended audio descriptions that pause the video.",
    relatedCriteria: [
      "1-2-3-audio-description-media-alternative",
      "1-2-1-audio-only-video-only",
      "1-2-2-captions-prerecorded",
    ],
  },
  {
    id: "1.3.2",
    slug: "1-3-2-meaningful-sequence",
    name: "Meaningful Sequence",
    level: "A",
    description:
      "When the sequence of content affects meaning, the correct reading sequence can be programmatically determined.",
    whyItMatters:
      "Screen readers follow DOM order, not visual order. If visual layout differs from code order, users may receive information in a confusing sequence.",
    commonViolations: [
      "CSS that reorders content visually but not in DOM",
      "Flexbox or Grid with order property creating mismatch",
      "Multi-column layouts where reading order is unclear",
      "Sidebars that appear before main content in DOM",
    ],
    badExample: "<div style=\"order: 2\">Read first</div>\n<div style=\"order: 1\">Read second</div>",
    goodExample: "<div>Read first</div>\n<div>Read second</div>",
    howToFix:
      "Ensure DOM order matches the intended reading sequence. Avoid using CSS order or positioning to create a different visual sequence than the code order.",
    relatedCriteria: [
      "1-3-1-info-and-relationships",
      "2-4-3-focus-order",
      "2-4-1-bypass-blocks",
    ],
  },
  {
    id: "1.3.3",
    slug: "1-3-3-sensory-characteristics",
    name: "Sensory Characteristics",
    level: "A",
    description:
      "Instructions for understanding and operating content should not rely solely on sensory characteristics like shape, color, size, visual location, orientation, or sound.",
    whyItMatters:
      "Users who cannot perceive certain sensory characteristics (color, shape, position) need instructions that work without those cues.",
    commonViolations: [
      "Instructions like 'click the green button'",
      "References to 'the sidebar on the right'",
      "Directions like 'press the round icon'",
      "Audio cues without text alternatives",
    ],
    badExample: "<p>Click the green button to continue.</p>",
    goodExample: "<p>Click the \"Submit\" button (the green button at the bottom) to continue.</p>",
    howToFix:
      "Supplement sensory descriptions with text labels. Say 'Click Submit (the green button)' instead of just 'Click the green button'.",
    relatedCriteria: [
      "1-4-1-use-of-color",
      "1-3-1-info-and-relationships",
      "3-3-2-labels-or-instructions",
    ],
  },
  {
    id: "1.3.4",
    slug: "1-3-4-orientation",
    name: "Orientation",
    level: "AA",
    description:
      "Content should not restrict its view and operation to a single display orientation unless a specific orientation is essential.",
    whyItMatters:
      "Users with mounted devices or motor impairments may only be able to view content in one orientation. Restricting orientation creates barriers.",
    commonViolations: [
      "Mobile apps that only work in portrait mode",
      "Websites that force landscape orientation",
      "Games that require specific orientation without good reason",
      "Content that breaks when device is rotated",
    ],
    badExample: "<meta name=\"viewport\" content=\"width=device-width, orientation=portrait\">",
    goodExample: "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<!-- Responsive CSS for both orientations -->",
    howToFix:
      "Design responsive layouts that work in both portrait and landscape. Only restrict orientation when absolutely essential (e.g., piano apps, check scanning).",
    relatedCriteria: [
      "1-4-10-reflow",
      "1-4-4-resize-text",
      "1-3-2-meaningful-sequence",
    ],
  },
  {
    id: "1.3.5",
    slug: "1-3-5-identify-input-purpose",
    name: "Identify Input Purpose",
    level: "AA",
    description:
      "The purpose of input fields collecting personal information can be programmatically determined when using standard autocomplete tokens.",
    whyItMatters:
      "Users with cognitive disabilities, motor impairments, or those using assistive technologies benefit from browsers auto-filling forms. Icons can also be displayed based on input purpose.",
    commonViolations: [
      "Forms without autocomplete attributes",
      "Custom input types without semantic hints",
      "Address forms that don't use standard tokens",
      "Login forms missing username/password autocomplete",
    ],
    badExample: "<input type=\"text\" name=\"fname\">",
    goodExample: "<input type=\"text\" name=\"fname\" autocomplete=\"given-name\">",
    howToFix:
      "Add appropriate autocomplete attribute values from the HTML specification (given-name, family-name, email, tel, street-address, etc.).",
    relatedCriteria: [
      "3-3-2-labels-or-instructions",
      "1-3-1-info-and-relationships",
      "4-1-2-name-role-value",
    ],
  },
  {
    id: "1.4.2",
    slug: "1-4-2-audio-control",
    name: "Audio Control",
    level: "A",
    description:
      "If any audio on a web page plays automatically for more than 3 seconds, either a mechanism is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level.",
    whyItMatters:
      "Screen reader users hear their assistive technology through audio output. Auto-playing audio can drown out the screen reader, making the page impossible to navigate. Users with cognitive disabilities may also find unexpected audio disorienting.",
    commonViolations: [
      "Background music that plays on page load with no controls",
      "Auto-playing video ads with audio and no mute button",
      "Embedded media players that start playing without user interaction",
      "Audio that can only be stopped by muting the entire system",
    ],
    badExample: "<audio src=\"background-music.mp3\" autoplay loop></audio>",
    goodExample: "<audio src=\"background-music.mp3\" controls>\n  Your browser does not support the audio element.\n</audio>\n<!-- Or provide a dedicated mute/pause button -->",
    howToFix:
      "Never autoplay audio for more than 3 seconds. If autoplay is necessary, provide a visible pause/stop button and volume control at the top of the page. Prefer not autoplaying audio at all.",
    relatedCriteria: [
      "1-4-1-use-of-color",
      "2-2-2-pause-stop-hide",
      "1-2-1-audio-only-video-only",
    ],
  },
  {
    id: "2.1.4",
    slug: "2-1-4-character-key-shortcuts",
    name: "Character Key Shortcuts",
    level: "A",
    description:
      "If a keyboard shortcut is implemented using only letter, punctuation, number, or symbol characters, then at least one of the following is true: the shortcut can be turned off, remapped to include a modifier key (Ctrl, Alt), or is only active when the relevant component has focus.",
    whyItMatters:
      "Speech input users may accidentally trigger shortcuts when dictating text. Users with motor impairments may accidentally press keys. Single-character shortcuts can cause chaos for these users.",
    commonViolations: [
      "Single-key shortcuts (e.g., 'j' for next, 'k' for previous) that cannot be disabled",
      "Keyboard shortcuts that conflict with speech input commands",
      "Character shortcuts active even when user is typing in a text field",
      "No settings panel to remap or disable shortcuts",
    ],
    badExample: "document.addEventListener('keydown', (e) => {\n  if (e.key === 'j') nextItem();\n  if (e.key === 'k') prevItem();\n});",
    goodExample: "document.addEventListener('keydown', (e) => {\n  if (!shortcutsEnabled) return;\n  if (e.target.matches('input, textarea')) return;\n  if (e.key === 'j' && e.ctrlKey) nextItem();\n});",
    howToFix:
      "Allow users to disable or remap single-character shortcuts. Require modifier keys (Ctrl, Alt, Shift) for global shortcuts. Ensure shortcuts are inactive when focus is in text input fields.",
    relatedCriteria: [
      "2-1-1-keyboard",
      "2-1-2-no-keyboard-trap",
      "2-4-3-focus-order",
    ],
  },
  {
    id: "2.3.1",
    slug: "2-3-1-three-flashes",
    name: "Three Flashes or Below Threshold",
    level: "A",
    description:
      "Web pages do not contain anything that flashes more than three times in any one-second period, or the flash is below the general flash and red flash thresholds.",
    whyItMatters:
      "Flashing content can trigger seizures in people with photosensitive epilepsy. This is a safety-critical requirement — violations can cause real physical harm.",
    commonViolations: [
      "Rapidly flashing animations or GIFs",
      "Video content with strobe effects",
      "CSS animations with rapid color alternation",
      "Banner ads with fast blinking effects",
    ],
    badExample: "@keyframes flash {\n  0%, 100% { opacity: 1; }\n  25% { opacity: 0; }\n  50% { opacity: 1; }\n  75% { opacity: 0; }\n}\n.alert { animation: flash 0.5s infinite; }",
    goodExample: "@keyframes pulse {\n  0%, 100% { opacity: 1; }\n  50% { opacity: 0.7; }\n}\n.alert { animation: pulse 2s ease-in-out infinite; }\n@media (prefers-reduced-motion: reduce) {\n  .alert { animation: none; }\n}",
    howToFix:
      "Limit flashing to fewer than 3 times per second. Use smooth transitions instead of abrupt flashes. Respect prefers-reduced-motion. Test video content with photosensitive epilepsy analysis tools like PEAT.",
    relatedCriteria: [
      "2-2-2-pause-stop-hide",
      "2-2-1-timing-adjustable",
      "1-4-1-use-of-color",
    ],
  },
  {
    id: "2.5.1",
    slug: "2-5-1-pointer-gestures",
    name: "Pointer Gestures",
    level: "A",
    description:
      "All functionality that uses multipoint or path-based gestures for operation can be operated with a single pointer without a path-based gesture, unless a multipoint or path-based gesture is essential.",
    whyItMatters:
      "Users with motor impairments, those using head pointers or mouth sticks, and users of assistive technology may not be able to perform complex gestures like pinch-to-zoom or swipe paths.",
    commonViolations: [
      "Maps that only support pinch-to-zoom with no zoom buttons",
      "Carousels that only advance by swiping",
      "Drawing interfaces with no alternative input method",
      "Multi-finger gestures required to access content",
    ],
    badExample: "<div class=\"carousel\" ontouchstart=\"handleSwipe(event)\">\n  <!-- No buttons to navigate slides -->\n</div>",
    goodExample: "<div class=\"carousel\">\n  <button aria-label=\"Previous slide\" onclick=\"prevSlide()\">←</button>\n  <div class=\"slides\">...</div>\n  <button aria-label=\"Next slide\" onclick=\"nextSlide()\">→</button>\n</div>",
    howToFix:
      "Provide single-tap or click alternatives for all multipoint gestures. Add buttons for zoom, navigation, and rotation. Ensure all gesture-driven actions have button equivalents.",
    relatedCriteria: [
      "2-5-2-pointer-cancellation",
      "2-1-1-keyboard",
      "2-5-4-motion-actuation",
    ],
  },
  {
    id: "2.5.2",
    slug: "2-5-2-pointer-cancellation",
    name: "Pointer Cancellation",
    level: "A",
    description:
      "For functionality that can be operated using a single pointer, at least one of the following is true: the down-event is not used to execute the function, the function completes on the up-event with the ability to abort or undo, the up-event reverses the outcome of the down-event, or completing the function on the down-event is essential.",
    whyItMatters:
      "Users with motor impairments often accidentally touch or click the wrong target. Pointer cancellation gives users the chance to correct mistakes by moving away before releasing.",
    commonViolations: [
      "Buttons that trigger actions on mousedown/touchstart instead of click",
      "Drag operations with no undo mechanism",
      "Links that navigate on pointer down rather than pointer up",
      "Destructive actions with no confirmation or reversal",
    ],
    badExample: "<button onmousedown=\"deleteAccount()\">Delete Account</button>",
    goodExample: "<button onclick=\"deleteAccount()\">Delete Account</button>\n<!-- onclick fires on pointer up, allowing user to move away to cancel -->",
    howToFix:
      "Use click events (which fire on pointer up) instead of mousedown or touchstart for actions. For complex interactions, provide an undo mechanism or confirmation step.",
    relatedCriteria: [
      "2-5-1-pointer-gestures",
      "3-3-4-error-prevention",
      "2-1-1-keyboard",
    ],
  },
  {
    id: "2.5.4",
    slug: "2-5-4-motion-actuation",
    name: "Motion Actuation",
    level: "A",
    description:
      "Functionality that can be operated by device motion or user motion can also be operated by user interface components, and responding to the motion can be disabled to prevent accidental actuation, unless the motion is essential or disabling would invalidate the activity.",
    whyItMatters:
      "Users with motor impairments who have devices mounted to wheelchairs cannot shake or tilt their device. Others may have tremors causing unintended motion. A UI alternative ensures everyone can access the functionality.",
    commonViolations: [
      "Shake-to-undo with no alternative undo button",
      "Tilt-to-scroll with no scroll controls",
      "Device rotation required to change views",
      "Motion gestures as the only way to dismiss content",
    ],
    badExample: "window.addEventListener('devicemotion', (e) => {\n  if (Math.abs(e.acceleration.x) > 15) undoLastAction();\n});",
    goodExample: "window.addEventListener('devicemotion', (e) => {\n  if (!motionEnabled) return;\n  if (Math.abs(e.acceleration.x) > 15) undoLastAction();\n});\n// Plus a visible undo button in the UI",
    howToFix:
      "Provide UI controls (buttons, menus) for every motion-triggered action. Add a setting to disable motion responses. Never rely on device motion as the sole interaction method.",
    relatedCriteria: [
      "2-5-1-pointer-gestures",
      "2-1-1-keyboard",
      "2-5-3-label-in-name",
    ],
  },
  {
    id: "1.2.4",
    slug: "1-2-4-captions-live",
    name: "Captions (Live)",
    level: "AA",
    description:
      "Captions are provided for all live audio content in synchronized media, including live broadcasts, webinars, and streaming events.",
    whyItMatters:
      "Deaf and hard-of-hearing users cannot access live audio content without real-time captions. Unlike prerecorded content, live events cannot be captioned in advance.",
    commonViolations: [
      "Live webinars without real-time captioning",
      "Streaming events with no caption support",
      "Live customer support video calls without captions",
      "Conference live streams missing CART services",
    ],
    badExample: "<video id=\"live-stream\" autoplay>\n  <source src=\"stream-url\">\n  <!-- No live caption track -->\n</video>",
    goodExample: "<video id=\"live-stream\" autoplay>\n  <source src=\"stream-url\">\n  <track kind=\"captions\" src=\"live-captions-endpoint\" srclang=\"en\" label=\"English captions\" default>\n</video>\n<!-- Using a live captioning service like CART or AI-powered captions -->",
    howToFix:
      "Use professional CART (Communication Access Realtime Translation) services or AI-powered live captioning tools. Integrate caption APIs for streaming platforms. Test caption accuracy and latency.",
    relatedCriteria: [
      "1-2-2-captions-prerecorded",
      "1-2-1-audio-only-video-only",
      "1-2-5-audio-description-prerecorded",
    ],
  },
  {
    id: "1.4.12",
    slug: "1-4-12-text-spacing",
    name: "Text Spacing",
    level: "AA",
    description:
      "No loss of content or functionality occurs when users override text spacing properties: line height to at least 1.5 times the font size, paragraph spacing to at least 2 times the font size, letter spacing to at least 0.12 times the font size, and word spacing to at least 0.16 times the font size.",
    whyItMatters:
      "Users with dyslexia and low vision often need increased text spacing to read comfortably. If content breaks or clips when spacing is adjusted, these users lose access to information.",
    commonViolations: [
      "Text that overflows or gets clipped in fixed-height containers",
      "Content that overlaps when line-height is increased",
      "Buttons or labels that break with increased letter spacing",
      "Important text hidden behind other elements after spacing changes",
    ],
    badExample: ".card-text {\n  height: 60px;\n  overflow: hidden;\n  line-height: 1.2;\n}",
    goodExample: ".card-text {\n  min-height: 60px;\n  overflow: visible;\n  line-height: inherit;\n}",
    howToFix:
      "Use min-height instead of fixed height. Avoid overflow: hidden on text containers. Test with a bookmarklet that applies the four spacing overrides. Use relative units for spacing and ensure layouts accommodate text expansion.",
    relatedCriteria: [
      "1-4-4-resize-text",
      "1-4-10-reflow",
      "1-4-3-contrast-minimum",
    ],
  },
  {
    id: "1.4.13",
    slug: "1-4-13-content-on-hover-or-focus",
    name: "Content on Hover or Focus",
    level: "AA",
    description:
      "Where receiving and then removing pointer hover or keyboard focus triggers additional content to become visible and then hidden, the additional content is dismissable without moving focus, hoverable so the user can move the pointer over it, and persistent until dismissed or no longer valid.",
    whyItMatters:
      "Tooltips and popups that disappear when users try to read them or that cover other content create barriers. Screen magnifier users especially need to hover over tooltip content to read it.",
    commonViolations: [
      "Tooltips that disappear when the pointer moves toward them",
      "Popups that cannot be dismissed without moving focus",
      "Hover content that covers other interactive elements",
      "Content that disappears too quickly to read",
    ],
    badExample: "<div class=\"tooltip-trigger\" title=\"Info\">\n  Hover me\n</div>\n<!-- Native title tooltips fail all three requirements -->",
    goodExample: "<div class=\"tooltip-trigger\" aria-describedby=\"tip1\">\n  Hover me\n  <div id=\"tip1\" role=\"tooltip\" class=\"tooltip\">\n    Additional info\n  </div>\n</div>\n<style>\n  .tooltip { pointer-events: auto; } /* hoverable */\n</style>\n<!-- Dismiss on Escape, stays visible while hovered -->",
    howToFix:
      "Make hover/focus content dismissable (Escape key), hoverable (pointer can move to it without it disappearing), and persistent (stays visible until user dismisses or moves away). Avoid title attributes for important information.",
    relatedCriteria: [
      "2-4-7-focus-visible",
      "1-4-3-contrast-minimum",
      "2-1-1-keyboard",
    ],
  },
  {
    id: "3.2.4",
    slug: "3-2-4-consistent-identification",
    name: "Consistent Identification",
    level: "AA",
    description:
      "Components that have the same functionality within a set of web pages are identified consistently. Icons, labels, and text alternatives for equivalent functions must match across pages.",
    whyItMatters:
      "Users with cognitive disabilities rely on consistent labeling to understand and navigate interfaces. Inconsistent naming forces users to relearn functionality on each page.",
    commonViolations: [
      "Search labeled 'Search' on one page and 'Find' on another",
      "Print icon using different alt text across pages",
      "Navigation links with different labels for the same destination",
      "Form submit buttons labeled 'Submit', 'Send', and 'Go' across different forms",
    ],
    badExample: "<!-- Page 1 -->\n<button aria-label=\"Search\">🔍</button>\n<!-- Page 2 -->\n<button aria-label=\"Find\">🔍</button>",
    goodExample: "<!-- Page 1 -->\n<button aria-label=\"Search\">🔍</button>\n<!-- Page 2 -->\n<button aria-label=\"Search\">🔍</button>",
    howToFix:
      "Create a shared component library with consistent labels. Document standard naming conventions for common actions (Search, Print, Save, Close). Audit across pages to find inconsistencies.",
    relatedCriteria: [
      "3-2-3-consistent-navigation",
      "2-4-4-link-purpose",
      "2-5-3-label-in-name",
    ],
  },
  {
    id: "3.3.3",
    slug: "3-3-3-error-suggestion",
    name: "Error Suggestion",
    level: "AA",
    description:
      "If an input error is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content.",
    whyItMatters:
      "Users with cognitive and learning disabilities may not understand generic error messages. Specific suggestions help all users correct mistakes quickly and reduce form abandonment.",
    commonViolations: [
      "Date fields that say 'invalid format' without specifying the expected format",
      "Email validation that says 'invalid' without suggesting corrections",
      "Password fields that list requirements only after failed submission",
      "Dropdown selections that error without suggesting valid options",
    ],
    badExample: "<input type=\"email\" aria-invalid=\"true\">\n<p class=\"error\">Invalid input</p>",
    goodExample: "<input type=\"email\" aria-invalid=\"true\" aria-describedby=\"email-err\">\n<p id=\"email-err\" class=\"error\">Please enter a valid email address, e.g., name@example.com</p>",
    howToFix:
      "Provide specific, actionable suggestions when errors are detected. Show expected formats, offer 'did you mean?' corrections, and list valid options when possible. Always associate suggestions with the relevant field.",
    relatedCriteria: [
      "3-3-1-error-identification",
      "3-3-2-labels-or-instructions",
      "3-3-4-error-prevention",
    ],
  },
  {
    id: "3.3.4",
    slug: "3-3-4-error-prevention",
    name: "Error Prevention (Legal, Financial, Data)",
    level: "AA",
    description:
      "For web pages that cause legal commitments or financial transactions, that modify or delete user-controllable data, or that submit test responses, at least one of the following is true: submissions are reversible, data is checked for errors and the user can correct them, or a mechanism is available to review, confirm, and correct before finalizing.",
    whyItMatters:
      "Accidental submissions of financial, legal, or data-deletion actions can have serious consequences. Users with disabilities are more prone to input errors and need safeguards.",
    commonViolations: [
      "One-click purchases with no confirmation step",
      "Account deletion without confirmation dialog",
      "Financial transfers with no review page",
      "Legal agreements submitted without summary review",
    ],
    badExample: "<button onclick=\"processPayment()\">Pay $500</button>\n<!-- Immediate payment with no review or confirmation -->",
    goodExample: "<h2>Review Your Order</h2>\n<p>Total: $500</p>\n<p>Shipping to: 123 Main St</p>\n<button onclick=\"showConfirm()\">Confirm and Pay</button>\n<button onclick=\"editOrder()\">Edit Order</button>",
    howToFix:
      "Add confirmation steps before irreversible actions. Provide a review page for financial and legal submissions. Allow users to undo or reverse actions within a reasonable timeframe. Validate data and present errors before final submission.",
    relatedCriteria: [
      "3-3-1-error-identification",
      "3-3-3-error-suggestion",
      "3-3-2-labels-or-instructions",
    ],
  },
];
