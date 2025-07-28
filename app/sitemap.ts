import { MetadataRoute } from "next";
import { languages, Languages } from "@/i18n/settings";
import { seoConfig, getFullUrl } from "@/config/seo.config";
import { getAllRoutes } from "@/config/pages.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  languages.forEach((lang) => {
    const langRoutes = getAllRoutes(lang as Languages);

    langRoutes.forEach(({ page, url }) => {
      const isHomePage = page === "home";

      routes.push({
        url: getFullUrl(url),
        lastModified: new Date(),
        changeFrequency: isHomePage
          ? seoConfig.sitemap.changeFreq.home
          : seoConfig.sitemap.changeFreq.pages,
        priority: isHomePage
          ? seoConfig.sitemap.priority.home
          : seoConfig.sitemap.priority.pages,
      });
    });
  });

  return routes;
}
