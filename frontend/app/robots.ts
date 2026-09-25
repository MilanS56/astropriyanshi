import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: ["/", "/about", "/consultations", "/insights", "/testimonials"], disallow: ["/api/"] }],
    sitemap: "https://priyanshiiaasttro.com/sitemap.xml",
    host: "https://priyanshiiaasttro.com",
  };
}
