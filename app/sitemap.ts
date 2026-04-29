import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

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
  "/disclaimer"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.includes("policy") || route.includes("terms") ? 0.4 : 0.8
  }));
}
