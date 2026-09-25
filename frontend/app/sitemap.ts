import type { MetadataRoute } from "next";

const baseUrl = "https://priyanshiiaasttro.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${baseUrl}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/consultations`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/insights`, changeFrequency: "monthly", priority: 0.4 },
    { url: `${baseUrl}/testimonials`, changeFrequency: "monthly", priority: 0.7 },
  ];
}
