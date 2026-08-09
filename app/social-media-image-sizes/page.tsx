import type { Metadata } from "next";
import SocialMediaImageSizesContent from "./SocialMediaImageSizesContent";
import { ogImageMeta } from "@/lib/ogVariants";

const title = "Social Media Image Sizes 2026: Every Platform (Free Checker)";
const description =
  "Social media image sizes for 2026: exact pixel dimensions for Instagram, Facebook, X, LinkedIn, TikTok, YouTube & Pinterest. Free checker, no signup.";
const url = "https://publishpixel.net/social-media-image-sizes";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: url,
    languages: {
      en: url,
      es: "https://publishpixel.net/es/social-media-image-sizes",
      "x-default": url
    }
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    title,
    description:
      "Exact pixel dimensions for Instagram, Facebook, X, LinkedIn, TikTok, YouTube & Pinterest in 2026 — plus a free in-browser checker.",
    url,
    siteName: "PublishPixel",
    locale: "en_US",
    alternateLocale: ["es_ES"],
    images: [ogImageMeta("social-sizes.png")]
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Image Sizes 2026",
    description:
      "Exact pixel sizes for every platform in 2026 + free in-browser checker.",
    images: [ogImageMeta("social-sizes.png")]
  }
};

export default function SocialMediaImageSizesPage() {
  return <SocialMediaImageSizesContent />;
}
