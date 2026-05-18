import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const CANONICAL_HOST = "publishpixel.net";
const LEGACY_REDIRECTS: Record<string, string> = {
  "/open-graph-checker": "/open-graph-image-checker",
  "/alt-text-checker": "/image-alt-text-checker",
  "/metadata-checker": "/image-metadata-checker",
  "/instagram-checker": "/instagram-image-checker",
  "/es/open-graph-checker": "/es/open-graph-image-checker",
  "/es/alt-text-checker": "/es/image-alt-text-checker",
  "/es/metadata-checker": "/es/image-metadata-checker",
  "/es/instagram-checker": "/es/instagram-image-checker"
};

export function proxy(request: NextRequest) {
  const host = request.headers.get("host")?.toLowerCase() || "";
  const forwardedProto = request.headers.get("x-forwarded-proto")?.toLowerCase();
  const isPublishPixelHost = host === CANONICAL_HOST || host === `www.${CANONICAL_HOST}`;
  const needsHostRedirect = host === `www.${CANONICAL_HOST}`;
  const needsProtocolRedirect = isPublishPixelHost && forwardedProto === "http";
  const legacyTarget = LEGACY_REDIRECTS[request.nextUrl.pathname];

  if (needsHostRedirect || needsProtocolRedirect || legacyTarget) {
    const canonicalUrl = request.nextUrl.clone();
    canonicalUrl.protocol = "https:";
    canonicalUrl.host = CANONICAL_HOST;
    if (legacyTarget) {
      canonicalUrl.pathname = legacyTarget;
    }
    return NextResponse.redirect(canonicalUrl, 301);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-publishpixel-pathname", request.nextUrl.pathname);

  return NextResponse.next({
    request: {
      headers: requestHeaders
    }
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.svg|robots.txt|sitemap.xml|ads.txt).*)"]
};
