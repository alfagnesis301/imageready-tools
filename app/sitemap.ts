import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { GUIDES } from "@/lib/guides";

const routes = [
  "/",
  "/smart-image-publish-check",
  "/compress-image",
  "/resize-image",
  "/convert-image",
  "/social-media-image-sizes",
  "/youtube-thumbnail-checker",
  "/instagram-image-checker",
  "/website-image-optimizer",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms",
  "/cookie-policy",
  "/editorial-policy",
  "/disclaimer"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const guideRoutes = ["/guides", ...GUIDES.map((guide) => `/guides/${guide.slug}`)];

  return [...routes, ...guideRoutes].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.includes("policy") || route.includes("terms") ? 0.4 : 0.75
  }));
}
