import type { MetadataRoute } from "next";

import { brands } from "@/data/brands";
import { cmsPlatforms } from "@/data/cms-platforms";
import { industries } from "@/data/industries";
import { wcagCriteria } from "@/data/wcag-criteria";

const baseUrl = "https://ratedwithai.com";

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
    ...brands.map((brand) => ({
      url: `${baseUrl}/check/${brand.slug}`,
      changeFrequency: "weekly",
      priority: 0.7,
    })),
    ...wcagCriteria.map((criterion) => ({
      url: `${baseUrl}/wcag/${criterion.slug}`,
      changeFrequency: "monthly",
      priority: 0.5,
    })),
    ...industries.map((industry) => ({
      url: `${baseUrl}/industry/${industry.slug}`,
      changeFrequency: "monthly",
      priority: 0.6,
    })),
    ...cmsPlatforms.map((platform) => ({
      url: `${baseUrl}/cms/${platform.slug}`,
      changeFrequency: "monthly",
      priority: 0.6,
    })),
  ];
}
