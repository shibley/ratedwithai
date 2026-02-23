import type { MetadataRoute } from "next";

import { brands } from "@/data/brands";
import { cmsPlatforms } from "@/data/cms-platforms";
import { industries } from "@/data/industries";
import { states } from "@/data/states";
import { wcagCriteria } from "@/data/wcag-criteria";

const baseUrl = "https://ratedwithai.com";

// Blog posts - add new posts here
const blogPosts = [
  "accessibility-audit-checklist-2026",
  "ada-compliance-by-industry",
  "ada-compliance-checklist-2026",
  "ada-lawsuit-settlements-2026",
  "ada-title-ii-compliance-guide",
  "ada-title-ii-deadline-countdown-2026",
  "banking-accessibility-compliance",
  "best-website-accessibility-checker-tools-2026",
  "ecommerce-accessibility-guide",
  "european-accessibility-act-2025",
  "healthcare-accessibility-compliance",
  "how-to-check-website-ada-compliant",
  "how-to-fix-common-wcag-failures",
  "law-firm-accessibility-compliance",
  "small-business-accessibility-guide",
  "top-10-wcag-failures",
  "wcag-2-1-vs-2-2",
  "wcag-22-complete-guide",
  "website-accessibility-lawsuit-statistics-2026",
  "website-accessibility-testing-guide",
  "section-508-compliance-guide",
  "ada-lawsuit-reform-2026",
  "ada-website-compliance-guide",
  "wcag-compliance-guide",
  "accessibe-alternative",
  "accessibility-testing-services",
  "healthcare-website-accessibility-may-2026",
];

// Tool landing pages
const toolPages = [
  "ada-title-ii-compliance-checker",
  "accessibe-alternative",
  "accessibe-review",
  "free-accessibility-checker",
  "is-my-website-ada-compliant",
  "vpat-template",
  "accessibility-statement-generator",
  "color-contrast-checker",
];

// Comparison pages
const comparePages = [
  "ratedwithai-vs-accessibe",
  "ratedwithai-vs-audioeye",
  "ratedwithai-vs-userway",
  "ratedwithai-vs-wave",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/pricing`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...toolPages.map((tool) => ({
      url: `${baseUrl}/tools/${tool}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...comparePages.map((page) => ({
      url: `${baseUrl}/compare/${page}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...brands.map((brand) => ({
      url: `${baseUrl}/check/${brand.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...wcagCriteria.map((criterion) => ({
      url: `${baseUrl}/wcag/${criterion.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    ...industries.map((industry) => ({
      url: `${baseUrl}/industry/${industry.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...cmsPlatforms.map((platform) => ({
      url: `${baseUrl}/cms/${platform.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...states.map((state) => ({
      url: `${baseUrl}/state/${state.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
