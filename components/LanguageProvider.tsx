"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "en" | "es";

type TranslationVars = Record<string, string | number>;

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, vars?: TranslationVars) => string;
};

const LANGUAGE_STORAGE_KEY = "publishpixel-language";

const translations: Record<Language, Record<string, string>> = {
  en: {
    "language.label": "Language",
    "language.switchToSpanish": "Switch to Spanish",
    "language.switchToEnglish": "Switch to English",
    "theme.light": "Switch to light theme",
    "theme.dark": "Switch to dark theme",
    "nav.Smart Check": "Smart Check",
    "nav.Compress": "Compress",
    "nav.Resize": "Resize",
    "nav.Convert": "Convert",
    "nav.Sizes": "Sizes",
    "nav.Guides": "Guides",
    "nav.Open Graph Checker": "Open Graph Checker",
    "nav.YouTube Thumbnail Checker": "YouTube Thumbnail Checker",
    "nav.Alt Text Checker": "Alt Text Checker",
    "nav.Metadata Checker": "Metadata Checker",
    "nav.Website Image Optimizer": "Website Image Optimizer",
    "nav.Instagram Checker": "Instagram Checker",
    "nav.About": "About",
    "nav.Contact": "Contact",
    "nav.Privacy Policy": "Privacy Policy",
    "nav.Terms": "Terms",
    "nav.Cookie Policy": "Cookie Policy",
    "nav.Editorial Policy": "Editorial Policy",
    "nav.Disclaimer": "Disclaimer",
    "action.uploadImage": "Upload an image",
    "header.mainNav": "Main navigation",
    "header.mobileNav": "Mobile navigation",
    "footer.tools": "Tools",
    "footer.company": "Company",
    "footer.description":
      "Browser-based image checks for creators, publishers and small teams. Your images are analyzed locally and are not uploaded by this app.",
    "footer.copyright":
      "Copyright {year} PublishPixel. Recommendations are estimates based on common publishing patterns.",
    "footer.contact": "Contact: {email}",
    "trust.0": "Browser-based analysis",
    "trust.1": "No signup required",
    "trust.2": "Free image utility",
    "trust.3": "Privacy-first workflow",
    "tool.eyebrow": "Free browser tool",
    "tool.defaultHeading": "Smart Image Publish Check",
    "tool.defaultDescription":
      "Upload an image and get a practical readiness score for websites, SEO, social platforms, thumbnails, product images and more.",
    "tool.altLabel": "Draft alt text",
    "tool.altPlaceholder": "Describe the visible subject and page context.",
    "tool.altHelp":
      "Optional accessibility check. PublishPixel does not invent visual descriptions.",
    "tool.analyzing": "Analyzing image locally...",
    "tool.empty":
      "Choose a preset, upload an image and the results will appear here with score, warnings, practical recommendations and export tools.",
    "tool.errorFallback": "This image could not be analyzed in your browser.",
    "tool.ogTitle": "Example article or product page title",
    "tool.ogDescription": "This preview simulates the wide crop commonly used by link cards.",
    "tool.altStatus.missing": "Missing",
    "tool.altStatus.needsDetail": "Needs detail",
    "tool.altStatus.looksUseful": "Looks useful",
    "tool.altMessage.missing":
      "Add alt text when the image communicates useful information. Decorative images can use empty alt text in final HTML.",
    "tool.altMessage.needsDetail":
      "This alt text may be too short. Include the visible subject and the reason it matters on the page.",
    "tool.altMessage.looksUseful":
      "The draft has enough length for a useful description. Check that it is accurate and avoids keyword stuffing.",
    "tool.altCheck": "Alt text check: {status}",
    "uploader.aria": "Upload image file",
    "uploader.drop": "Drop your image here or choose a file",
    "uploader.support":
      "Supports JPG, PNG, WebP, static GIF and basic SVG. Recommended visual limit: up to 15 MB.",
    "uploader.privacy": "Privacy-first: your image is analyzed locally in your browser.",
    "uploader.unsupported":
      "This format is not supported yet. Try JPG, PNG, WebP, static GIF or basic SVG.",
    "uploader.large":
      "This file is {size}. Analysis may be slower; 15 MB or less is recommended.",
    "preset.label": "Publishing preset",
    "preset.help":
      "Scores are estimated from common platform guidelines and practical publishing heuristics.",
    "score.title": "PublishReady Score",
    "score.dimensions": "Dimensions",
    "score.size": "Size",
    "score.format": "Format",
    "score.context": "Context",
    "panel.warnings": "Warnings",
    "panel.actions": "Recommended actions",
    "panel.good": "Good points",
    "cookie.title": "Cookie preferences",
    "cookie.description":
      "PublishPixel uses essential local storage for preferences. Optional analytics or advertising scripts should only load after consent if you add them later.",
    "cookie.close": "Reject non-essential cookies and close",
    "cookie.essential": "Essential storage",
    "cookie.analytics": "Analytics",
    "cookie.ads": "Advertising",
    "cookie.accept": "Accept all",
    "cookie.reject": "Reject non-essential",
    "cookie.save": "Save preferences",
    "cookie.manage": "Manage preferences",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.note": "Please do not send sensitive images, private files or confidential visual material through this form.",
    "contact.sending": "Sending...",
    "contact.send": "Send message",
    "contact.success": "Thanks. Your message was sent.",
    "contact.error": "The message could not be sent. Please email hello@publishpixel.net directly.",
    "preset.website-blog": "Website / Blog Image",
    "preset.seo-featured": "SEO Featured Image",
    "preset.open-graph": "Open Graph Image",
    "preset.google-discover": "Google Discover Image",
    "preset.youtube-thumbnail": "YouTube Thumbnail",
    "preset.instagram-post": "Instagram Post",
    "preset.instagram-story": "Instagram Story",
    "preset.facebook-post": "Facebook Post",
    "preset.linkedin-post": "LinkedIn Post",
    "preset.pinterest-pin": "Pinterest Pin",
    "preset.ecommerce-product": "E-commerce Product Image",
    "preset.favicon": "Favicon",
    "preset.email-header": "Email Header",
    "preset.hero-banner": "Hero Banner"
  },
  es: {
    "language.label": "Idioma",
    "language.switchToSpanish": "Cambiar a español",
    "language.switchToEnglish": "Cambiar a inglés",
    "theme.light": "Cambiar a tema claro",
    "theme.dark": "Cambiar a tema oscuro",
    "nav.Smart Check": "Chequeo inteligente",
    "nav.Compress": "Comprimir",
    "nav.Resize": "Redimensionar",
    "nav.Convert": "Convertir",
    "nav.Sizes": "Tamaños",
    "nav.Guides": "Guías",
    "nav.Open Graph Checker": "Checker Open Graph",
    "nav.YouTube Thumbnail Checker": "Checker de miniaturas",
    "nav.Alt Text Checker": "Checker de alt text",
    "nav.Metadata Checker": "Checker de metadatos",
    "nav.Website Image Optimizer": "Optimizador web",
    "nav.Instagram Checker": "Checker de Instagram",
    "nav.About": "Acerca de",
    "nav.Contact": "Contacto",
    "nav.Privacy Policy": "Política de privacidad",
    "nav.Terms": "Términos",
    "nav.Cookie Policy": "Política de cookies",
    "nav.Editorial Policy": "Política editorial",
    "nav.Disclaimer": "Aviso legal",
    "action.uploadImage": "Subir imagen",
    "header.mainNav": "Navegación principal",
    "header.mobileNav": "Navegación móvil",
    "footer.tools": "Herramientas",
    "footer.company": "Empresa",
    "footer.description":
      "Chequeos de imagen basados en el navegador para creadores, publishers y equipos pequeños. Tus imágenes se analizan localmente y esta app no las sube.",
    "footer.copyright":
      "Copyright {year} PublishPixel. Las recomendaciones son estimaciones basadas en patrones comunes de publicación.",
    "footer.contact": "Contacto: {email}",
    "trust.0": "Análisis en el navegador",
    "trust.1": "Sin registro",
    "trust.2": "Utilidad gratuita",
    "trust.3": "Flujo privacy-first",
    "tool.eyebrow": "Herramienta gratis en el navegador",
    "tool.defaultHeading": "Smart Image Publish Check",
    "tool.defaultDescription":
      "Sube una imagen y recibe una puntuación práctica de preparación para websites, SEO, redes sociales, miniaturas, productos y más.",
    "tool.altLabel": "Borrador de alt text",
    "tool.altPlaceholder": "Describe el sujeto visible y el contexto de la página.",
    "tool.altHelp":
      "Chequeo opcional de accesibilidad. PublishPixel no inventa descripciones visuales.",
    "tool.analyzing": "Analizando la imagen localmente...",
    "tool.empty":
      "Elige un preset, sube una imagen y los resultados aparecerán aquí con puntuación, avisos, recomendaciones prácticas y herramientas de exportación.",
    "tool.errorFallback": "Esta imagen no se pudo analizar en tu navegador.",
    "tool.ogTitle": "Ejemplo de título de artículo o página de producto",
    "tool.ogDescription":
      "Esta vista previa simula el recorte ancho usado comúnmente por tarjetas de enlace.",
    "tool.altStatus.missing": "Falta",
    "tool.altStatus.needsDetail": "Necesita detalle",
    "tool.altStatus.looksUseful": "Parece útil",
    "tool.altMessage.missing":
      "Añade alt text cuando la imagen comunica información útil. Las imágenes decorativas pueden usar alt vacío en el HTML final.",
    "tool.altMessage.needsDetail":
      "Este alt text puede ser demasiado corto. Incluye el sujeto visible y por qué importa en la página.",
    "tool.altMessage.looksUseful":
      "El borrador tiene longitud suficiente para una descripción útil. Verifica que sea preciso y no use keyword stuffing.",
    "tool.altCheck": "Chequeo de alt text: {status}",
    "uploader.aria": "Subir archivo de imagen",
    "uploader.drop": "Arrastra tu imagen aquí o elige un archivo",
    "uploader.support":
      "Soporta JPG, PNG, WebP, GIF estático y SVG básico. Límite visual recomendado: hasta 15 MB.",
    "uploader.privacy": "Privacy-first: tu imagen se analiza localmente en tu navegador.",
    "uploader.unsupported":
      "Este formato aún no es compatible. Prueba JPG, PNG, WebP, GIF estático o SVG básico.",
    "uploader.large":
      "Este archivo pesa {size}. El análisis puede ser más lento; se recomienda 15 MB o menos.",
    "preset.label": "Preset de publicación",
    "preset.help":
      "Las puntuaciones se estiman con guías comunes de plataformas y heurísticas prácticas de publicación.",
    "score.title": "PublishReady Score",
    "score.dimensions": "Dimensiones",
    "score.size": "Peso",
    "score.format": "Formato",
    "score.context": "Contexto",
    "panel.warnings": "Avisos",
    "panel.actions": "Acciones recomendadas",
    "panel.good": "Puntos positivos",
    "cookie.title": "Preferencias de cookies",
    "cookie.description":
      "PublishPixel usa almacenamiento local esencial para preferencias. Los scripts opcionales de analítica o publicidad solo deberían cargarse después del consentimiento si los añades más adelante.",
    "cookie.close": "Rechazar cookies no esenciales y cerrar",
    "cookie.essential": "Almacenamiento esencial",
    "cookie.analytics": "Analítica",
    "cookie.ads": "Publicidad",
    "cookie.accept": "Aceptar todo",
    "cookie.reject": "Rechazar no esenciales",
    "cookie.save": "Guardar preferencias",
    "cookie.manage": "Gestionar preferencias",
    "contact.name": "Nombre",
    "contact.email": "Email",
    "contact.message": "Mensaje",
    "contact.note": "No envíes imágenes sensibles, archivos privados o material visual confidencial mediante este formulario.",
    "contact.sending": "Enviando...",
    "contact.send": "Enviar mensaje",
    "contact.success": "Gracias. Tu mensaje fue enviado.",
    "contact.error": "No se pudo enviar el mensaje. Escríbenos directamente a hello@publishpixel.net.",
    "preset.website-blog": "Imagen para website / blog",
    "preset.seo-featured": "Imagen destacada SEO",
    "preset.open-graph": "Imagen Open Graph",
    "preset.google-discover": "Imagen Google Discover",
    "preset.youtube-thumbnail": "Miniatura de YouTube",
    "preset.instagram-post": "Post de Instagram",
    "preset.instagram-story": "Historia de Instagram",
    "preset.facebook-post": "Post de Facebook",
    "preset.linkedin-post": "Post de LinkedIn",
    "preset.pinterest-pin": "Pin de Pinterest",
    "preset.ecommerce-product": "Imagen de producto e-commerce",
    "preset.favicon": "Favicon",
    "preset.email-header": "Header de email",
    "preset.hero-banner": "Hero banner"
  }
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function interpolate(value: string, vars?: TranslationVars) {
  if (!vars) return value;
  return Object.entries(vars).reduce(
    (next, [key, replacement]) => next.replaceAll(`{${key}}`, String(replacement)),
    value
  );
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored === "en" || stored === "es") {
      setLanguageState(stored);
      document.documentElement.lang = stored;
    }
  }, []);

  function setLanguage(nextLanguage: Language) {
    setLanguageState(nextLanguage);
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    document.documentElement.lang = nextLanguage;
  }

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      t: (key, vars) => interpolate(translations[language][key] || translations.en[key] || key, vars)
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider.");
  }
  return context;
}
