import type { MetadataRoute } from "next";
import { committees, resources } from "@/lib/data";
import { absoluteUrl } from "@/lib/seo";

const lastModified = new Date("2026-07-03");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: [absoluteUrl("/brand/indys-seal-mark.png")],
    },
    {
      url: absoluteUrl("/committees"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/secretariat"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const committeeRoutes: MetadataRoute.Sitemap = committees.map((committee) => ({
    url: absoluteUrl(`/committees/${committee.id}`),
    lastModified,
    changeFrequency: "weekly",
    priority: committee.featured ? 0.95 : 0.85,
    images: [absoluteUrl(committee.heroImage)],
  }));

  const resourceRoutes: MetadataRoute.Sitemap = resources.map((resource) => ({
    url: absoluteUrl(`/resources/${resource.id}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.75,
    images: [absoluteUrl(resource.heroImage)],
  }));

  return [...staticRoutes, ...committeeRoutes, ...resourceRoutes];
}
