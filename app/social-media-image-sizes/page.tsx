import type { Metadata } from "next";
import SocialMediaImageSizesContent from "./SocialMediaImageSizesContent";
import {
  SOCIAL_MEDIA_IMAGE_OG,
  SOCIAL_MEDIA_IMAGE_OG_ABSOLUTE
} from "@/lib/socialImageSizes";

const title = "Social Media Image Sizes 2026: Complete Guide for All Platforms";
const description =
  "Find the best social media image sizes for 2026, including Instagram, Facebook, X, LinkedIn, YouTube, TikTok, and Pinterest dimensions.";
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
      "Find the recommended image dimensions for Instagram, Facebook, X, LinkedIn, YouTube, TikTok, Pinterest, and more.",
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
    title,
    description:
      "Check recommended image sizes for Instagram, Facebook, X, LinkedIn, YouTube, TikTok, and Pinterest.",
    images: [SOCIAL_MEDIA_IMAGE_OG_ABSOLUTE]
  }
};

export default function SocialMediaImageSizesPage() {
  return <SocialMediaImageSizesContent />;
}
