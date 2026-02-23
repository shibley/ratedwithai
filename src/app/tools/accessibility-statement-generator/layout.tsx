import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Accessibility Statement Generator — WCAG 2.1 AA | RatedWithAI",
  description:
    "Generate a professional accessibility statement for your website in minutes. Based on W3C guidelines, aligned with ADA, Section 508, and EAA requirements. Free, no signup required.",
  openGraph: {
    title: "Free Accessibility Statement Generator | RatedWithAI",
    description:
      "Create a legally-sound accessibility statement for your website. Based on W3C WAI model, covers ADA, Section 508, and European Accessibility Act.",
    type: "website",
  },
  keywords: [
    "accessibility statement generator",
    "accessibility statement template",
    "website accessibility statement",
    "ada accessibility statement",
    "wcag accessibility statement",
    "accessibility statement example",
    "web accessibility statement template",
    "section 508 accessibility statement",
    "accessibility policy generator",
    "accessibility page template",
  ],
};

export default function AccessibilityStatementGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
