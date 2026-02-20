export type CmsPlatform = {
  slug: string;
  name: string;
  overview: string;
  knownIssues: string[];
  tools: string[];
  fixSteps: string[];
};

export const cmsPlatforms: CmsPlatform[] = [
  {
    slug: "wordpress",
    name: "WordPress",
    overview:
      "WordPress powers a massive share of the web, but accessibility depends heavily on theme and plugin choices.",
    knownIssues: [
      "Themes with low contrast or missing focus states",
      "Page builders outputting non-semantic markup",
      "Plugins adding unlabeled forms or popups",
    ],
    tools: [
      "WP Accessibility",
      "Accessible Poetry",
      "One Click Accessibility",
      "Siteimprove Accessibility Checker",
    ],
    fixSteps: [
      "Audit your theme for semantic headings and contrast",
      "Replace icon-only buttons with labeled controls",
      "Add skip links and focus styles if missing",
      "Review forms from plugins and add labels",
      "Test key pages with keyboard and screen reader",
    ],
  },
  {
    slug: "shopify",
    name: "Shopify",
    overview:
      "Shopify themes are customizable, but many stores ship with inaccessible templates or third-party apps.",
    knownIssues: [
      "Product galleries without keyboard controls",
      "Cart drawers that trap focus",
      "App widgets lacking labels",
    ],
    tools: [
      "Accessibility Enabler",
      "Accessibility by CartCoders",
      "Shopify theme accessibility checker",
    ],
    fixSteps: [
      "Choose an accessible theme and test focus states",
      "Ensure product images have descriptive alt text",
      "Fix cart drawer focus order and escape behavior",
      "Label form fields in checkout and signup",
      "Verify contrast on pricing and CTA buttons",
    ],
  },
  {
    slug: "squarespace",
    name: "Squarespace",
    overview:
      "Squarespace provides polished templates, but accessibility varies and custom blocks can introduce issues.",
    knownIssues: [
      "Low contrast text on hero images",
      "Image-only buttons without labels",
      "Missing alt text on galleries",
    ],
    tools: [
      "Squarespace Accessibility Checklist",
      "WAVE browser extension",
      "axe DevTools",
    ],
    fixSteps: [
      "Check contrast on branded templates",
      "Add alt text to all image blocks",
      "Replace image-only buttons with text or aria-label",
      "Ensure headings follow a logical order",
      "Test forms for labels and instructions",
    ],
  },
  {
    slug: "wix",
    name: "Wix",
    overview:
      "Wix offers built-in accessibility tools, but custom elements can still cause issues.",
    knownIssues: [
      "Custom elements without keyboard support",
      "Animations that hide focus outlines",
      "Missing labels on forms",
    ],
    tools: [
      "Wix Accessibility Wizard",
      "WAVE browser extension",
      "Siteimprove Accessibility Checker",
    ],
    fixSteps: [
      "Run the Wix Accessibility Wizard",
      "Add labels to all form inputs",
      "Ensure keyboard access to menus and sliders",
      "Avoid text embedded in images",
      "Test pages at 200% zoom",
    ],
  },
  {
    slug: "webflow",
    name: "Webflow",
    overview:
      "Webflow gives designers flexibility, but custom interactions must be built with accessibility in mind.",
    knownIssues: [
      "Custom interactions without keyboard support",
      "Low contrast on button styles",
      "Missing aria attributes on custom components",
    ],
    tools: [
      "Webflow Audit Panel",
      "axe DevTools",
      "Accessibility Insights",
    ],
    fixSteps: [
      "Use semantic HTML elements in the designer",
      "Add focus styles and test keyboard order",
      "Ensure modals trap focus and close with Escape",
      "Add aria-labels for icon-only elements",
      "Verify contrast ratios on UI components",
    ],
  },
  {
    slug: "drupal",
    name: "Drupal",
    overview:
      "Drupal has strong accessibility foundations, but modules and themes can introduce issues.",
    knownIssues: [
      "Custom themes with incorrect heading hierarchy",
      "Modules rendering inaccessible forms",
      "Missing skip links or landmarks",
    ],
    tools: [
      "Drupal Accessibility Module",
      "axe DevTools",
      "WAVE browser extension",
    ],
    fixSteps: [
      "Select an accessibility-ready theme",
      "Audit contributed modules for accessibility",
      "Ensure headings are sequential",
      "Add skip links and landmarks",
      "Validate form labels and error messages",
    ],
  },
  {
    slug: "joomla",
    name: "Joomla",
    overview:
      "Joomla supports accessible templates, but extensions can undermine accessibility if not vetted.",
    knownIssues: [
      "Templates with low contrast",
      "Extensions adding unlabeled forms",
      "Navigation menus missing focus indicators",
    ],
    tools: [
      "Joomla Accessibility Checker",
      "WAVE browser extension",
      "Accessibility Insights",
    ],
    fixSteps: [
      "Pick a WCAG-ready template",
      "Audit extensions for labels and focus states",
      "Add aria-labels to icon navigation",
      "Ensure skip links are present",
      "Test pages with keyboard only",
    ],
  },
  {
    slug: "hubspot",
    name: "HubSpot",
    overview:
      "HubSpot CMS offers structured templates, but custom modules should be reviewed for accessibility.",
    knownIssues: [
      "Custom modules without semantic markup",
      "CTA buttons with insufficient contrast",
      "Forms missing labels or instructions",
    ],
    tools: [
      "HubSpot Accessibility Checklist",
      "axe DevTools",
      "WAVE browser extension",
    ],
    fixSteps: [
      "Use HubSpot's default accessible modules",
      "Check CTA contrast and focus states",
      "Add labels and helper text to forms",
      "Ensure headings reflect content structure",
      "Test key landing pages with screen readers",
    ],
  },
  {
    slug: "ghost",
    name: "Ghost",
    overview:
      "Ghost is a lightweight publishing CMS, but themes vary widely in accessibility support.",
    knownIssues: [
      "Themes with missing focus states",
      "Image-heavy posts without alt text",
      "Navigation links with low contrast",
    ],
    tools: [
      "axe DevTools",
      "WAVE browser extension",
      "Lighthouse Accessibility Audit",
    ],
    fixSteps: [
      "Choose an accessibility-friendly theme",
      "Add alt text to post images",
      "Check contrast on navigation and footer",
      "Ensure headings are structured in posts",
      "Test mobile navigation with keyboard",
    ],
  },
  {
    slug: "framer",
    name: "Framer",
    overview:
      "Framer enables rapid design and publishing, but custom interactions must be tested for accessibility.",
    knownIssues: [
      "Animations that obscure focus",
      "Custom buttons without labels",
      "Hidden content that is still focusable",
    ],
    tools: [
      "Framer Accessibility Guide",
      "axe DevTools",
      "Accessibility Insights",
    ],
    fixSteps: [
      "Ensure interactive layers have accessible names",
      "Provide visible focus indicators",
      "Avoid auto-playing motion without controls",
      "Check keyboard order in animations",
      "Validate contrast on text and buttons",
    ],
  },
  {
    slug: "nextjs",
    name: "Next.js",
    overview:
      "Next.js is a powerful React framework for production. Since developers have full control over markup, accessibility depends entirely on implementation choices.",
    knownIssues: [
      "Client-side routing breaking screen reader announcements",
      "Missing focus management after page transitions",
      "Image components used without meaningful alt text",
      "Custom components lacking ARIA attributes",
    ],
    tools: [
      "eslint-plugin-jsx-a11y",
      "@axe-core/react",
      "React Aria or Radix UI for accessible primitives",
    ],
    fixSteps: [
      "Install eslint-plugin-jsx-a11y and fix linting errors",
      "Add route change announcements for screen readers",
      "Use next/image with descriptive alt text on all images",
      "Implement focus management on client-side navigation",
      "Use accessible component libraries like Radix or React Aria",
      "Test with keyboard and screen reader before deploying",
    ],
  },
  {
    slug: "bubble",
    name: "Bubble",
    overview:
      "Bubble is a popular no-code platform for building web apps. Accessibility is often overlooked since the visual builder abstracts away HTML semantics.",
    knownIssues: [
      "Generated markup lacks semantic HTML structure",
      "Form inputs missing associated labels",
      "Custom popups and modals without focus trapping",
      "Keyboard navigation issues on interactive elements",
    ],
    tools: [
      "Bubble Accessibility Plugin by Zeroqode",
      "WAVE browser extension",
      "axe DevTools for manual auditing",
    ],
    fixSteps: [
      "Add aria-label attributes to all interactive elements",
      "Use the accessibility plugin to add skip links and landmarks",
      "Manually associate labels with form inputs in element settings",
      "Ensure popups trap focus and can be closed with Escape",
      "Test tab order and fix using Bubble's index settings",
      "Run WAVE or axe audits and address critical issues",
    ],
  },
  {
    slug: "carrd",
    name: "Carrd",
    overview:
      "Carrd is a simple one-page website builder. Its minimalist approach means fewer built-in accessibility features, requiring manual attention to basics.",
    knownIssues: [
      "Images often lack alt text by default",
      "Low contrast text on image backgrounds",
      "Form elements without visible labels",
      "No built-in skip links or landmark regions",
    ],
    tools: [
      "N/A - use manual techniques and browser extensions",
      "WAVE browser extension",
      "Lighthouse Accessibility Audit",
    ],
    fixSteps: [
      "Add alt text to every image in the image settings",
      "Ensure text has sufficient contrast against backgrounds",
      "Use visible labels on all form fields, not just placeholders",
      "Structure content with a logical heading hierarchy",
      "Test the page with keyboard-only navigation",
      "Run Lighthouse audit and fix flagged issues before publishing",
    ],
  },
];
