export const dynamic = "force-static";

export function GET() {
  const body = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://publishpixel.net/sitemap.xml
Host: https://publishpixel.net
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600"
    }
  });
}
