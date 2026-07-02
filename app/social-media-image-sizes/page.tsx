import type { Metadata } from "next";
import SocialMediaImageSizesContent from "./SocialMediaImageSizesContent";
import {
  SOCIAL_MEDIA_IMAGE_OG,
  SOCIAL_MEDIA_IMAGE_OG_ABSOLUTE
} from "@/lib/socialImageSizes";

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
    images: [
      {
        url: SOCIAL_MEDIA_IMAGE_OG,
        width: 1200,
        height: 630,
        alt: "PublishPixel social media image sizes guide"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Image Sizes 2026",
    description:
      "Exact pixel sizes for every platform in 2026 + free in-browser checker.",
    images: [SOCIAL_MEDIA_IMAGE_OG_ABSOLUTE]
  }
};

export default function SocialMediaImageSizesPage() {
  return <SocialMediaImageSizesContent />;
}
