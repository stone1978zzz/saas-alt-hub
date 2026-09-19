import { MetadataRoute } from "next";
import { SAAS_DATABASE } from "@/data/saas-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://openalt.dev";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
  ];

  const alternativePages: MetadataRoute.Sitemap = SAAS_DATABASE.map((saas) => ({
    url: `${baseUrl}/alternatives/${saas.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticPages, ...alternativePages];
}
