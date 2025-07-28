import { MetadataRoute } from "next";
import { seoConfig, getFullUrl } from "@/config/seo.config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
    sitemap: getFullUrl("/sitemap.xml"),
  };
}
