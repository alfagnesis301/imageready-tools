import type { Metadata } from "next";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "./constants";
import { getAlternatePaths, type Locale } from "./i18n";

type PageMetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  locale?: Locale;
};

export function createPageMetadata({
  title,
  description,
  path = "/",
  image = "/favicon.svg",
  noIndex,
  locale = path === "/es" || path.startsWith("/es/") ? "es" : "en"
}: PageMetadataInput): Metadata {
  const canonical = new URL(path, SITE_URL).toString();
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const alternatePaths = getAlternatePaths(path);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: new URL(alternatePaths.en, SITE_URL).toString(),
        es: new URL(alternatePaths.es, SITE_URL).toString(),
        "x-default": new URL(alternatePaths["x-default"], SITE_URL).toString()
      }
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      url: canonical,
      locale: locale === "es" ? "es_ES" : "en_US",
      alternateLocale: locale === "es" ? ["en_US"] : ["es_ES"],
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} logo`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image]
    }
  };
}

export function softwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: SITE_NAME,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Web browser",
    url: SITE_URL,
    description:
      "A privacy-first browser-based image readiness checker for websites, SEO, social media, YouTube thumbnails, e-commerce and email.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    },
    featureList: [
      "Local image analysis",
      "Publish readiness scoring",
      "Image compression",
      "Image resizing",
      "Format conversion",
      "Social media size guidance"
    ],
    slogan: SITE_TAGLINE
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function articleJsonLd({
  title,
  description,
  path,
  dateModified,
  author
}: {
  title: string;
  description: string;
  path: string;
  dateModified: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: new URL(path, SITE_URL).toString(),
    datePublished: "2026-04-30",
    dateModified,
    author: {
      "@type": "Organization",
      name: author
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": new URL(path, SITE_URL).toString()
    }
  };
}
