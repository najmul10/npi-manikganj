import type { MetadataRoute } from "next";

const SITE_URL = "https://npimanikganj.edu.bd";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages = [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/departments`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/admission`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${SITE_URL}/academics`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/faculty`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/gallery`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms-of-service`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];

  return staticPages;
}
