import type { MetadataRoute } from "next";

import { brands } from "@/data/brands";
import { cmsPlatforms } from "@/data/cms-platforms";
import { industries } from "@/data/industries";
import { states } from "@/data/states";
import { wcagCriteria } from "@/data/wcag-criteria";

const baseUrl = "https://ratedwithai.com";

// Blog posts - add new posts here
const blogPosts = [
  "ada-compliance-checklist-2026",
  "ada-lawsuit-settlements-2026",
  "ada-title-ii-compliance-guide",
  "banking-accessibility-compliance",
  "ecommerce-accessibility-guide",
  "healthcare-accessibility-compliance",
  "how-to-fix-common-wcag-failures",
  "law-firm-accessibility-compliance",
  "wcag-2-1-vs-2-2",
  "website-accessibility-testing-guide",
];

// Tool landing pages
const toolPages = [
  "ada-title-ii-compliance-checker",
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
