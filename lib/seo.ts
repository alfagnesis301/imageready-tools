import type { Metadata } from "next";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "./constants";
import { getAlternatePaths, type Locale } from "./i18n";
import { isSpanishIndexable, isSpanishPath } from "./spanishScope";

type PageMetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  locale?: Locale;
  openGraphType?: "website" | "article";
  /**
   * Emite el title tal cual, sin el sufijo " | PublishPixel" del template del
   * layout raíz. Útil en páginas donde esos 15 caracteres se aprovechan mejor
   * con palabras clave: la marca todavía no aporta reconocimiento en SERP.
   */
  absoluteTitle?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path = "/",
  image = "/favicon.svg",
  noIndex,
  locale = path === "/es" || path.startsWith("/es/") ? "es" : "en",
  openGraphType = "website",
  absoluteTitle = false
}: PageMetadataInput): Metadata {
  const canonical = new URL(path, SITE_URL).toString();
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const alternatePaths = getAlternatePaths(path);

  // Alcance de la versión española (ver lib/spanishScope.ts): las rutas /es sin
  // demanda medible salen del índice. Su alternativa hreflang se retira en
  // ambos idiomas, porque hreflang nunca debe apuntar a una URL con noindex:
  // sería una señal contradictoria.
  const spanishIndexable = isSpanishIndexable(path);
  const languages: Record<string, string> = {
    en: new URL(alternatePaths.en, SITE_URL).toString(),
    "x-default": new URL(alternatePaths["x-default"], SITE_URL).toString()
  };
  if (spanishIndexable) {
    languages.es = new URL(alternatePaths.es, SITE_URL).toString();
  }

  const outOfScopeSpanish = isSpanishPath(path) && !spanishIndexable;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical,
      languages
    },
    robots: noIndex
      ? // noindex explícito (páginas legales, PR #10): también nofollow.
        { index: false, follow: false }
      : outOfScopeSpanish
        ? // Fuera del alcance español: noindex pero follow, para que los
          // enlaces sigan transmitiendo señal a la versión inglesa.
          { index: false, follow: true }
        : { index: true, follow: true },
    openGraph: {
      type: openGraphType,
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

export function softwareApplicationJsonLd(locale: Locale = "en") {
  const isSpanish = locale === "es";

  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: SITE_NAME,
    applicationCategory: "MultimediaApplication",
    operatingSystem: isSpanish ? "Navegador web" : "Web browser",
    url: SITE_URL,
    description: isSpanish
      ? "Herramienta privada en el navegador para revisar imágenes antes de publicarlas en sitios web, SEO, redes sociales, miniaturas de YouTube, e-commerce y email."
      : "A privacy-first browser-based image readiness checker for websites, SEO, social media, YouTube thumbnails, e-commerce and email.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    },
    featureList: isSpanish
      ? [
          "Análisis local de imágenes",
          "Puntuación de preparación para publicar",
          "Compresión de imágenes",
          "Redimensionado de imágenes",
          "Conversión de formato",
          "Guía de tamaños para redes sociales"
        ]
      : [
          "Local image analysis",
          "Publish readiness scoring",
          "Image compression",
          "Image resizing",
          "Format conversion",
          "Social media size guidance"
        ],
    slogan: isSpanish ? "Prepara cada imagen antes de publicarla." : SITE_TAGLINE
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
