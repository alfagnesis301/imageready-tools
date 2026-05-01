export const dynamic = "force-static";

const baseUrl = "https://publishpixel.net";

const routes = [
  "",
  "/smart-image-publish-check",
  "/compress-image",
  "/resize-image",
  "/convert-image",
  "/social-media-image-sizes",
  "/guides",
  "/open-graph-image-checker",
  "/youtube-thumbnail-checker",
  "/image-alt-text-checker",
  "/image-metadata-checker",
  "/website-image-optimizer",
  "/instagram-image-checker",
  "/guides/image-size-for-web",
  "/guides/remove-image-metadata",
  "/guides/image-alt-text",
  "/guides/webp-vs-jpeg-vs-png",
  "/guides/image-seo-checklist",
  "/guides/social-media-image-sizes",
  "/guides/compress-images-without-losing-quality",
  "/guides/photo-privacy-before-publishing",
  "/guides/image-publishing-checklist",
  "/guides/open-graph-image-best-practices",
  "/guides/youtube-thumbnail-image-guide",
  "/guides/website-image-performance-checklist",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms",
  "/cookie-policy",
  "/editorial-policy",
  "/disclaimer"
];

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function getPriority(path: string) {
  if (path === "") return "1.0";
  if (path === "/smart-image-publish-check") return "0.95";
  if (["/compress-image", "/resize-image", "/convert-image"].includes(path)) return "0.9";
  if (path.includes("checker") || path.includes("optimizer")) return "0.85";
  if (path.startsWith("/guides/")) return "0.8";
  if (path === "/guides") return "0.75";
  return "0.6";
}

function getChangefreq(path: string) {
  if (path === "") return "weekly";
  if (path.startsWith("/guides/")) return "monthly";
  return "monthly";
}

export function GET() {
  const lastmod = new Date().toISOString();

  const urls = routes
    .map((path) => {
      const loc = escapeXml(`${baseUrl}${path}`);

      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${getChangefreq(path)}</changefreq>
    <priority>${getPriority(path)}</priority>
  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600"
    }
  });
}
