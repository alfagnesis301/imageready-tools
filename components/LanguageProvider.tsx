"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname } from "@/lib/i18n";

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
    "header.openMenu": "Open menu",
    "header.closeMenu": "Close menu",
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
    "status.Ready to publish": "Ready to publish",
    "status.Good but can improve": "Good but can improve",
    "status.Needs resizing": "Needs resizing",
    "status.Too heavy": "Too heavy",
    "status.Wrong aspect ratio": "Wrong aspect ratio",
    "status.Too small": "Too small",
    "status.Not recommended": "Not recommended",
    "quality.website-blog":
      "Usually best as a lightweight WebP or JPG with enough width for responsive layouts.",
    "quality.seo-featured": "A large, compressed image may help previews while keeping the page fast.",
    "quality.open-graph": "Use a clear focal area because previews may be cropped by different services.",
    "quality.google-discover": "Use a high-quality image and compress carefully when possible.",
    "quality.youtube-thumbnail": "Leave breathing room for titles, timestamps and interface overlays.",
    "quality.instagram-post": "Match one of the common feed ratios to avoid unexpected cropping.",
    "quality.instagram-story": "Keep important details away from the top and bottom interface areas.",
    "quality.facebook-post": "A 1.91:1 image usually works well for link previews and broad sharing.",
    "quality.linkedin-post": "Use a clear composition and avoid tiny text where possible.",
    "quality.pinterest-pin": "Tall images usually offer more room for product, recipe or guide detail.",
    "quality.ecommerce-product":
      "A square image and a clean background are commonly helpful, but background quality is not detected.",
    "quality.favicon": "Use a simple, legible shape that stays recognizable at very small sizes.",
    "quality.email-header": "Lightweight files are helpful because email clients and networks vary.",
    "quality.hero-banner": "Use enough width for large displays, then compress and serve responsive sizes.",
    "panel.warnings": "Warnings",
    "panel.actions": "Recommended actions",
    "panel.good": "Good points",
    "preview.uploadedAlt": "Uploaded preview",
    "preview.svgNotice":
      "SVG preview is intentionally limited. The file is parsed for basic dimensions without inserting SVG markup into the page.",
    "preview.file": "File",
    "preview.originalSize": "Original size",
    "preview.format": "Format",
    "preview.dimensions": "Dimensions",
    "preview.clear": "Clear image",
    "metrics.fileSize": "File size",
    "metrics.dimensions": "Dimensions",
    "metrics.aspectRatio": "Aspect ratio",
    "metrics.megapixels": "Megapixels",
    "metrics.format": "Format",
    "metrics.orientation": "Orientation",
    "metrics.transparency": "Transparency",
    "metrics.exif": "EXIF metadata",
    "metrics.compressionOpportunity": "Compression opportunity",
    "metrics.blurryRisk": "Blurry risk",
    "metrics.optimizedEstimate": "Optimized estimate",
    "metrics.notChecked": "Not checked",
    "metrics.detected": "Detected",
    "metrics.noneFound": "None found",
    "metrics.estimatedPercent": "{value}% estimated",
    "orientation.square": "square",
    "orientation.portrait": "portrait",
    "orientation.landscape": "landscape",
    "orientation.wide": "wide",
    "orientation.vertical": "vertical",
    "risk.low": "low",
    "risk.medium": "medium",
    "risk.high": "high",
    "compression.title": "Compress and convert",
    "compression.quality": "Quality: {value}%",
    "compression.pngHelp": "PNG export may ignore quality settings in some browsers.",
    "compression.exportFormat": "Export format",
    "compression.estimatedOutput": "Estimated output:",
    "compression.estimatedSaving": "Estimated saving:",
    "compression.notAvailable": "n/a",
    "compression.svgExport":
      "SVG raster export is not enabled here. Use the Smart Check results for basic SVG readiness.",
    "compression.download": "Download optimized preview",
    "compression.success": "Optimized {format} generated locally in your browser.",
    "compression.error": "The optimized image could not be created.",
    "resize.title": "Resize image",
    "resize.width": "Width",
    "resize.height": "Height",
    "resize.lockAspect": "Lock aspect ratio",
    "resize.format": "Format",
    "resize.svgExport":
      "SVG resizing is not exported by this browser tool. Use your SVG editor to create raster variants.",
    "resize.download": "Download resized image",
    "resize.success": "Resized image created locally. Estimated size: {size}.",
    "resize.error": "The resized image could not be created.",
    "format.title": "Format recommendation",
    "format.recommended": "Recommended format:",
    "metadata.title": "SEO and metadata notes",
    "metadata.filename": "SEO filename suggestion",
    "metadata.altStructure": "Alt text structure",
    "metadata.altDefault": "Describe the visible subject, context and page purpose without stuffing keywords.",
    "metadata.exifSignal": "EXIF metadata signal",
    "metadata.exifNotChecked": "This format was not checked for EXIF metadata.",
    "metadata.exifDetected":
      "Basic EXIF metadata markers were detected. Consider exporting a clean publishing copy.",
    "metadata.exifNone":
      "No obvious EXIF metadata marker was found in the first part of this JPEG file.",
    "metadata.notice":
      "Re-exporting through Canvas normally removes EXIF metadata, but this app does not promise perfect metadata removal for every browser and file.",
    "filename.title": "Filename SEO check: {status}",
    "filename.strong": "Strong",
    "filename.usable": "Usable",
    "filename.needsCleanup": "Needs cleanup",
    "filename.description":
      "A descriptive image filename can make your publishing workflow clearer. Use natural words separated by hyphens, avoid generic camera names and keep the filename readable.",
    "filename.issue.spaces": "Use hyphens instead of spaces.",
    "filename.issue.underscores": "Use hyphens instead of underscores.",
    "filename.issue.characters": "Avoid special characters in image filenames.",
    "filename.issue.length": "Keep filenames short and descriptive.",
    "filename.issue.generic": "Replace generic camera, screenshot or draft names with descriptive words.",
    "filename.issue.hyphens": "Use descriptive hyphen-separated words.",
    "filename.good.readable": "Filename is readable and hyphen-separated.",
    "filename.good.length": "Filename length is practical for publishing workflows.",
    "filename.good.characters": "Filename avoids unusual characters.",
    "report.title": "PublishReady Report",
    "report.description": "Copy a practical summary for your publishing workflow.",
    "report.copy": "Copy report",
    "report.copied": "Copied",
    "report.score": "Score",
    "report.preset": "Preset",
    "report.format": "Format",
    "report.dimensions": "Dimensions",
    "report.fileSize": "File size",
    "report.recommendations": "Recommendations:",
    "og.title": "Open Graph preview",
    "og.description": "Simulated 1.91:1 link card crop.",
    "og.empty": "Upload an image to preview the crop",
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
    "home.heroTitle": "Free Image Checker for Web, SEO and Social Media",
    "home.heroDescription":
      "Check if your image is ready for websites, SEO, social media, YouTube thumbnails, e-commerce, email headers, and more - privately in your browser.",
    "home.viewSizeGuide": "View size guide",
    "home.card.socialSizes.title": "Social Media Image Sizes Guide",
    "home.card.socialSizes.description":
      "Find the recommended image dimensions for every major social platform.",
    "home.card.websiteOptimizer.title": "Website Image Optimizer",
    "home.card.websiteOptimizer.description":
      "Compress, resize, and prepare website images before publishing.",
    "home.card.smartCheck.title": "Smart Image Publish Check",
    "home.card.smartCheck.description": "Check whether your image is ready before publishing.",
    "home.card.compress.title": "Compress Image Online",
    "home.card.compress.description":
      "Reduce image file size before publishing to websites, blogs and social platforms.",
    "home.card.resize.title": "Resize Image Online",
    "home.card.resize.description":
      "Export practical dimensions for web layouts, thumbnails and social media crops.",
    "home.card.metadata.title": "EXIF Data Viewer",
    "home.card.metadata.description":
      "Check image metadata and privacy signals before sharing photos online.",
    "home.checksEyebrow": "What the tool checks",
    "home.checksTitle": "What does PublishPixel check?",
    "home.checksDescription":
      "Image readiness is more than a file size number. The Smart Check combines dimensions, ratio, format, estimated compression and context so you can make a better publishing decision before an image goes live.",
    "home.check.0": "Dimensions, aspect ratio and orientation",
    "home.check.1": "Estimated file size and compression opportunity",
    "home.check.2": "Format suitability for the selected publishing context",
    "home.check.3": "SEO filename and alt text structure guidance",
    "home.check.4": "Open Graph and social compatibility signals",
    "home.check.5": "Warnings for heavy, small or mismatched images",
    "home.differentEyebrow": "Why PublishPixel is different",
    "home.differentTitle": "More than compression: a complete image publishing check",
    "home.differentDescription":
      "Most image tools focus on one action: compress, resize or convert. PublishPixel combines those steps with publishing context so you can decide whether an image is actually ready for the place it will appear.",
    "home.contextTitle": "Context-aware checks",
    "home.contextDescription":
      "Compare your image against practical presets for blogs, Open Graph previews, YouTube thumbnails, product images, email headers and social posts.",
    "home.workflowTitle": "Publishing copy workflow",
    "home.workflowDescription":
      "Keep your original file safe and export a dedicated version for the channel where the image will be published.",
    "home.scoreTitle": "Practical readiness score",
    "home.scoreDescription":
      "Get a simple score with clear warnings for size, dimensions, ratio, format, alt text, filename quality and metadata awareness.",
    "home.speedEyebrow": "Publishing speed",
    "home.readinessTitle": "Why image readiness matters",
    "home.readinessP1":
      "Images influence page speed, visual polish, social previews and the first impression of a post or product. A very large image can slow a page down, while a small or wrongly cropped image can look weak in previews. This tool helps you catch common issues early.",
    "home.readinessP2":
      "Recommendations are intentionally practical: resize for the channel, convert when it may reduce weight, compress carefully and avoid making claims about visual content the tool cannot inspect.",
    "home.workflowEyebrow": "Pre-publish workflow",
    "home.workflowSectionTitle": "A practical pre-publish workflow for images",
    "home.workflowSectionDescription":
      "Many image tools focus only on compression or conversion. PublishPixel combines multiple publishing checks in one workflow so you can review the image before it reaches your CMS, store, campaign page or social post.",
    "home.beforeUploadTitle": "Before uploading",
    "home.beforeUploadDescription": "Check dimensions, ratio, weight and format before the file enters your publishing system.",
    "home.beforeShareTitle": "Before sharing",
    "home.beforeShareDescription": "Prepare Open Graph, thumbnail and social crops so previews look intentional.",
    "home.beforeArchiveTitle": "Before archiving",
    "home.beforeArchiveDescription": "Export a publishing copy instead of using the original file when privacy, metadata or size matters.",
    "home.accessibilityEyebrow": "Accessibility checklist",
    "home.accessibilityTitle": "Prepare images that more people can understand",
    "home.accessibilityP1":
      "Publishing readiness includes more than pixels. A useful image should have a purpose, a readable crop and an alt text plan that describes the visible content honestly. If an image is decorative, the final page should treat it that way instead of forcing noisy alt text.",
    "home.accessibilityP2":
      "PublishPixel gives filename and alt text structure guidance without inventing a visual description. You stay in control of the final wording because you know the image and page context best.",
    "home.performanceEyebrow": "Performance checklist",
    "home.performanceTitle": "Catch heavy files before they slow a page",
    "home.performanceP1":
      "Large images can make a good page feel slow. Before publishing, check whether the file is larger than the destination needs, whether the dimensions match the layout and whether WebP or JPG would be a better export format.",
    "home.performanceP2":
      "The browser-based export tools help create lighter previews for common workflows. They are useful for preparation, while production sites should still use responsive image markup and caching.",
    "home.scoringEyebrow": "How scoring works",
    "home.scoringTitle": "Smart Image Publish Check explained",
    "home.scoringDescription":
      "The PublishReady Score weighs dimensions and aspect ratio, file size, recommended format and context-specific quality signals. It is designed to guide fast decisions, not to replace official platform requirements.",
    "home.scorePart.0": "40% dimensions and aspect ratio",
    "home.scorePart.1": "25% file size",
    "home.scorePart.2": "20% recommended format",
    "home.scorePart.3": "15% context and quality heuristics",
    "home.guidesEyebrow": "Related guides",
    "home.guidesTitle": "Learn the image publishing checklist",
    "home.guidesDescription":
      "These original guides explain the decisions behind the checker: image dimensions, metadata, alt text, compression, privacy and format choice.",
    "home.popularEyebrow": "Popular presets",
    "home.popularTitle": "Popular image presets",
    "home.presetNote": "{dimensions}; recommended ratio {ratio}.",
    "home.privacyEyebrow": "Privacy-first image analysis",
    "home.privacyTitle": "Your image stays in your browser",
    "home.privacyDescription":
      "PublishPixel does not upload your image to a server for analysis. Browser APIs read the file, calculate dimensions and create optional exported versions locally. Preferences such as theme, preset and consent may use localStorage; images are not stored.",
    "home.audienceEyebrow": "Who is this for?",
    "home.audience.0": "Bloggers",
    "home.audience.1": "SEO professionals",
    "home.audience.2": "YouTubers",
    "home.audience.3": "E-commerce sellers",
    "home.audience.4": "Social media creators",
    "home.audience.5": "Designers",
    "home.audience.6": "Students",
    "home.audience.7": "Small businesses",
    "home.faqEyebrow": "FAQ",
    "home.faqTitle": "Common questions",
    "home.disclaimerLabel": "Accuracy disclaimer:",
    "home.disclaimerText":
      "Results are estimates based on common platform patterns and technical checks available in the browser. Platform requirements can change, and this tool does not guarantee SEO ranking, approval or final rendering on any third-party service.",
    "home.faq.upload.q": "Does PublishPixel upload my image?",
    "home.faq.upload.a":
      "No. The main analysis runs locally in your browser with File API, Canvas API and native image decoding where available.",
    "home.faq.score.q": "Is the PublishReady Score an official platform score?",
    "home.faq.score.a":
      "No. It is an estimated score based on common publishing guidelines, file size targets, dimensions, aspect ratio and practical quality heuristics.",
    "home.faq.og.q": "Can I use this for Open Graph images?",
    "home.faq.og.a":
      "Yes. Choose the Open Graph preset to check the common 1200 x 630 pixel format, file size and format recommendations.",
    "home.faq.compress.q": "Can the tool compress images?",
    "home.faq.compress.a":
      "Yes. After uploading a supported raster image, you can export an optimized JPG, WebP or PNG preview from your browser.",
    "home.faq.resize.q": "Does resizing improve image quality?",
    "home.faq.resize.a":
      "Resizing can fit a publishing target, but upscaling a small image may not recover lost detail. The tool warns when the source looks too small.",
    "home.faq.exif.q": "Does the tool remove EXIF metadata?",
    "home.faq.exif.a":
      "Re-exporting through Canvas normally removes EXIF metadata, but behavior can vary by browser and format, so this should not be treated as a perfect metadata removal guarantee.",
    "home.faq.formats.q": "Which formats are supported?",
    "home.faq.formats.a":
      "The initial version supports JPG, JPEG, PNG, WebP, static GIF checks and basic SVG dimension analysis.",
    "home.faq.youtube.q": "Can I use this for YouTube thumbnails?",
    "home.faq.youtube.a":
      "Yes. The YouTube preset checks the common 1280 x 720 pixel size, 16:9 ratio and file size recommendations.",
    "home.faq.free.q": "Is this tool free?",
    "home.faq.free.a":
      "Yes. The app is designed as a free browser-based utility. AdSense support is prepared, but ads are not shown unless an approved publisher client is configured.",
    "home.faq.verify.q": "Should I verify official requirements?",
    "home.faq.verify.a":
      "Yes. Platform requirements can change, so verify official documentation when the image is critical for a campaign, upload or launch.",
    "guide.image-size-for-web.title": "Image Size for Web: Practical Dimensions Before Publishing",
    "guide.image-size-for-web.description": "Learn how to choose web image dimensions that look sharp without slowing down your pages.",
    "guide.remove-image-metadata.title": "How to Remove Image Metadata Before Publishing",
    "guide.remove-image-metadata.description": "Understand EXIF metadata, privacy risks and safer ways to publish images online.",
    "guide.image-alt-text.title": "How to Write Useful Image Alt Text",
    "guide.image-alt-text.description": "Write clearer alt text for accessibility, context and better image publishing workflows.",
    "guide.webp-vs-jpeg-vs-png.title": "WebP vs JPEG vs PNG: Which Image Format Should You Use?",
    "guide.webp-vs-jpeg-vs-png.description": "Compare common image formats and choose a practical publishing format for web pages and social previews.",
    "guide.image-seo-checklist.title": "Image SEO Checklist Before Publishing",
    "guide.image-seo-checklist.description": "A practical checklist for filenames, alt text, dimensions, file size and social previews.",
    "guide.social-media-image-sizes.title": "Social Media Image Sizes: A Practical Publishing Guide",
    "guide.social-media-image-sizes.description": "Prepare image crops for Open Graph, YouTube thumbnails, Instagram, LinkedIn, Pinterest and product feeds.",
    "guide.compress-images-without-losing-quality.title": "How to Compress Images Without Losing Too Much Quality",
    "guide.compress-images-without-losing-quality.description": "Reduce image weight while keeping photos and graphics clear enough for publishing.",
    "guide.photo-privacy-before-publishing.title": "Photo Privacy Checklist Before Publishing Online",
    "guide.photo-privacy-before-publishing.description": "Review metadata, visible details, permissions and sensitive context before publishing photos.",
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
    "nav.Smart Check": "Revisión",
    "nav.Compress": "Comprimir",
    "nav.Resize": "Redimensionar",
    "nav.Convert": "Convertir",
    "nav.Sizes": "Tamaños",
    "nav.SEO Meta": "SEO y metadatos",
    "nav.Guides": "Guías",
    "nav.Open Graph Checker": "Revisor Open Graph",
    "nav.YouTube Thumbnail Checker": "Miniaturas YouTube",
    "nav.Alt Text Checker": "Revisor de texto alternativo",
    "nav.Metadata Checker": "Revisor de metadatos",
    "nav.Website Image Optimizer": "Optimizador web",
    "nav.Instagram Checker": "Instagram",
    "nav.About": "Acerca de",
    "nav.Contact": "Contacto",
    "nav.Privacy Policy": "Política de privacidad",
    "nav.Terms": "Términos",
    "nav.Cookie Policy": "Política de cookies",
    "nav.Editorial Policy": "Política editorial",
    "nav.Disclaimer": "Aviso legal",
    "action.uploadImage": "Subir una imagen",
    "header.mainNav": "Navegación principal",
    "header.mobileNav": "Navegación móvil",
    "header.openMenu": "Abrir menú",
    "header.closeMenu": "Cerrar menú",
    "footer.tools": "Herramientas",
    "footer.company": "Empresa",
    "footer.description":
      "Revisiones de imagen basadas en el navegador para creadores, editores y equipos pequeños. Tus imágenes se analizan localmente y esta aplicación no las sube a un servidor.",
    "footer.copyright":
      "Copyright {year} PublishPixel. Las recomendaciones son estimaciones basadas en patrones comunes de publicación.",
    "footer.contact": "Contacto: {email}",
    "trust.0": "Análisis en el navegador",
    "trust.1": "Sin registro",
    "trust.2": "Utilidad gratuita",
    "trust.3": "Flujo centrado en la privacidad",
    "tool.eyebrow": "Herramienta gratis en el navegador",
    "tool.defaultHeading": "Revisión inteligente de imagen",
    "tool.defaultDescription":
      "Sube una imagen y recibe una puntuación práctica de preparación para sitios web, SEO, redes sociales, miniaturas, productos y más.",
    "tool.altLabel": "Borrador de texto alternativo",
    "tool.altPlaceholder": "Describe el sujeto visible y el contexto de la página.",
    "tool.altHelp":
      "Revisión opcional de accesibilidad. PublishPixel no inventa descripciones visuales.",
    "tool.analyzing": "Analizando la imagen localmente...",
    "tool.empty":
      "Elige un ajuste predefinido, sube una imagen y los resultados aparecerán aquí con puntuación, avisos, recomendaciones prácticas y herramientas de exportación.",
    "tool.errorFallback": "Esta imagen no se pudo analizar en tu navegador.",
    "tool.ogTitle": "Ejemplo de título de artículo o página de producto",
    "tool.ogDescription":
      "Esta vista previa simula el recorte ancho usado comúnmente por tarjetas de enlace.",
    "tool.altStatus.missing": "Falta",
    "tool.altStatus.needsDetail": "Necesita detalle",
    "tool.altStatus.looksUseful": "Parece útil",
    "tool.altMessage.missing":
      "Añade texto alternativo cuando la imagen comunica información útil. Las imágenes decorativas pueden usar alt vacío en el HTML final.",
    "tool.altMessage.needsDetail":
      "Este texto alternativo puede ser demasiado corto. Incluye el sujeto visible y por qué importa en la página.",
    "tool.altMessage.looksUseful":
      "El borrador tiene longitud suficiente para una descripción útil. Verifica que sea preciso y no rellene palabras clave.",
    "tool.altCheck": "Revisión de texto alternativo: {status}",
    "uploader.aria": "Subir archivo de imagen",
    "uploader.drop": "Arrastra tu imagen aquí o elige un archivo",
    "uploader.support":
      "Soporta JPG, PNG, WebP, GIF estático y SVG básico. Límite visual recomendado: hasta 15 MB.",
    "uploader.privacy": "Privacidad primero: tu imagen se analiza localmente en tu navegador.",
    "uploader.unsupported":
      "Este formato aún no es compatible. Prueba JPG, PNG, WebP, GIF estático o SVG básico.",
    "uploader.large":
      "Este archivo pesa {size}. El análisis puede ser más lento; se recomienda 15 MB o menos.",
    "preset.label": "Ajuste predefinido de publicación",
    "preset.help":
      "Las puntuaciones se estiman con guías comunes de plataformas y heurísticas prácticas de publicación.",
    "score.title": "Puntuación PublishReady",
    "score.dimensions": "Dimensiones",
    "score.size": "Peso",
    "score.format": "Formato",
    "score.context": "Contexto",
    "status.Ready to publish": "Lista para publicar",
    "status.Good but can improve": "Bien, pero puede mejorar",
    "status.Needs resizing": "Necesita redimensionarse",
    "status.Too heavy": "Demasiado pesada",
    "status.Wrong aspect ratio": "Proporción incorrecta",
    "status.Too small": "Demasiado pequeña",
    "status.Not recommended": "No recomendada",
    "quality.website-blog":
      "Normalmente funciona mejor como WebP o JPG ligero con ancho suficiente para diseños adaptables.",
    "quality.seo-featured": "Una imagen grande y comprimida puede ayudar a las vistas previas manteniendo la página rápida.",
    "quality.open-graph": "Usa un área focal clara porque diferentes servicios pueden recortar las vistas previas.",
    "quality.google-discover": "Usa una fuente de alta calidad y comprime con cuidado cuando sea posible.",
    "quality.youtube-thumbnail": "Deja espacio para títulos, marcas de tiempo y superposiciones de interfaz.",
    "quality.instagram-post": "Ajusta la imagen a una de las proporciones comunes del feed para evitar recortes inesperados.",
    "quality.instagram-story": "Mantén detalles importantes lejos de las zonas superior e inferior de la interfaz.",
    "quality.facebook-post": "Una imagen 1.91:1 suele funcionar bien para vistas previas de enlaces y uso amplio.",
    "quality.linkedin-post": "Usa una composición clara y evita texto diminuto cuando sea posible.",
    "quality.pinterest-pin": "Las imágenes altas suelen dar más espacio para producto, receta o detalle de guía.",
    "quality.ecommerce-product":
      "Una imagen cuadrada y un fondo limpio suelen ayudar, pero la calidad del fondo no se detecta.",
    "quality.favicon": "Usa una forma simple y legible que siga siendo reconocible en tamaños muy pequeños.",
    "quality.email-header": "Los archivos ligeros ayudan porque los clientes de email y las redes varían.",
    "quality.hero-banner": "Usa suficiente ancho para pantallas grandes; luego comprime y sirve tamaños adaptables.",
    "panel.warnings": "Avisos",
    "panel.actions": "Acciones recomendadas",
    "panel.good": "Puntos positivos",
    "preview.uploadedAlt": "Vista previa subida",
    "preview.svgNotice":
      "La vista previa SVG se limita intencionalmente. El archivo se analiza para dimensiones básicas sin insertar el marcado SVG en la página.",
    "preview.file": "Archivo",
    "preview.originalSize": "Peso original",
    "preview.format": "Formato",
    "preview.dimensions": "Dimensiones",
    "preview.clear": "Limpiar imagen",
    "metrics.fileSize": "Peso del archivo",
    "metrics.dimensions": "Dimensiones",
    "metrics.aspectRatio": "Proporción",
    "metrics.megapixels": "Megapíxeles",
    "metrics.format": "Formato",
    "metrics.orientation": "Orientación",
    "metrics.transparency": "Transparencia",
    "metrics.exif": "Metadatos EXIF",
    "metrics.compressionOpportunity": "Oportunidad de compresión",
    "metrics.blurryRisk": "Riesgo de desenfoque",
    "metrics.optimizedEstimate": "Estimación optimizada",
    "metrics.notChecked": "No comprobado",
    "metrics.detected": "Detectado",
    "metrics.noneFound": "No encontrado",
    "metrics.estimatedPercent": "{value}% estimado",
    "orientation.square": "cuadrada",
    "orientation.portrait": "vertical",
    "orientation.landscape": "horizontal",
    "orientation.wide": "panorámica",
    "orientation.vertical": "vertical estrecha",
    "risk.low": "bajo",
    "risk.medium": "medio",
    "risk.high": "alto",
    "compression.title": "Comprimir y convertir",
    "compression.quality": "Calidad: {value}%",
    "compression.pngHelp": "La exportación PNG puede ignorar los ajustes de calidad en algunos navegadores.",
    "compression.exportFormat": "Formato de exportación",
    "compression.estimatedOutput": "Salida estimada:",
    "compression.estimatedSaving": "Ahorro estimado:",
    "compression.notAvailable": "n/d",
    "compression.svgExport":
      "La exportación raster de SVG no está activada aquí. Usa los resultados de la revisión inteligente para una revisión básica del SVG.",
    "compression.download": "Descargar vista previa optimizada",
    "compression.success": "{format} optimizado generado localmente en tu navegador.",
    "compression.error": "No se pudo crear la imagen optimizada.",
    "resize.title": "Redimensionar imagen",
    "resize.width": "Ancho",
    "resize.height": "Alto",
    "resize.lockAspect": "Bloquear proporción",
    "resize.format": "Formato",
    "resize.svgExport":
      "Esta herramienta del navegador no exporta redimensiones SVG. Usa tu editor SVG para crear variantes raster.",
    "resize.download": "Descargar imagen redimensionada",
    "resize.success": "Imagen redimensionada creada localmente. Tamaño estimado: {size}.",
    "resize.error": "No se pudo crear la imagen redimensionada.",
    "format.title": "Recomendación de formato",
    "format.recommended": "Formato recomendado:",
    "metadata.title": "Notas SEO y de metadatos",
    "metadata.filename": "Sugerencia de nombre SEO",
    "metadata.altStructure": "Estructura del texto alternativo",
    "metadata.altDefault": "Describe el sujeto visible, el contexto y el propósito de la página sin rellenar palabras clave.",
    "metadata.exifSignal": "Señal de metadatos EXIF",
    "metadata.exifNotChecked": "Este formato no se comprobó para metadatos EXIF.",
    "metadata.exifDetected":
      "Se detectaron marcadores básicos de metadatos EXIF. Considera exportar una copia limpia para publicar.",
    "metadata.exifNone":
      "No se encontró un marcador EXIF obvio en la primera parte de este archivo JPEG.",
    "metadata.notice":
      "Reexportar mediante Canvas normalmente elimina metadatos EXIF, pero esta aplicación no promete una eliminación perfecta para todos los navegadores y archivos.",
    "filename.title": "Revisión SEO del nombre: {status}",
    "filename.strong": "Fuerte",
    "filename.usable": "Usable",
    "filename.needsCleanup": "Necesita limpieza",
    "filename.description":
      "Un nombre de archivo descriptivo puede hacer más claro tu flujo de publicación. Usa palabras naturales separadas por guiones, evita nombres genéricos de cámara y mantén el nombre legible.",
    "filename.issue.spaces": "Usa guiones en vez de espacios.",
    "filename.issue.underscores": "Usa guiones en vez de guiones bajos.",
    "filename.issue.characters": "Evita caracteres especiales en nombres de imágenes.",
    "filename.issue.length": "Mantén los nombres cortos y descriptivos.",
    "filename.issue.generic": "Cambia nombres genéricos de cámara, captura o borrador por palabras descriptivas.",
    "filename.issue.hyphens": "Usa palabras descriptivas separadas por guiones.",
    "filename.good.readable": "El nombre es legible y usa guiones.",
    "filename.good.length": "La longitud del nombre es práctica para flujos de publicación.",
    "filename.good.characters": "El nombre evita caracteres inusuales.",
    "report.title": "Informe PublishReady",
    "report.description": "Copia un resumen práctico para tu flujo de publicación.",
    "report.copy": "Copiar informe",
    "report.copied": "Copiado",
    "report.score": "Puntuación",
    "report.preset": "Ajuste predefinido",
    "report.format": "Formato",
    "report.dimensions": "Dimensiones",
    "report.fileSize": "Peso del archivo",
    "report.recommendations": "Recomendaciones:",
    "og.title": "Vista previa Open Graph",
    "og.description": "Simulación de tarjeta de enlace con recorte 1.91:1.",
    "og.empty": "Sube una imagen para previsualizar el recorte",
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
    "home.heroTitle": "Herramienta gratuita para revisar imágenes antes de publicar",
    "home.heroDescription":
      "Comprueba si tu imagen está lista para sitios web, SEO, redes sociales, miniaturas de YouTube, e-commerce, encabezados de email y más, de forma privada en tu navegador.",
    "home.viewSizeGuide": "Ver guía de tamaños",
    "home.card.socialSizes.title": "Guía de tamaños de imagen para redes sociales",
    "home.card.socialSizes.description":
      "Consulta dimensiones recomendadas para las principales plataformas sociales.",
    "home.card.websiteOptimizer.title": "Optimizador de imágenes para sitios web",
    "home.card.websiteOptimizer.description":
      "Comprime, redimensiona y prepara imágenes web antes de publicarlas.",
    "home.card.smartCheck.title": "Revisión inteligente de imágenes antes de publicar",
    "home.card.smartCheck.description": "Comprueba si tu imagen está lista antes de publicarla.",
    "home.card.compress.title": "Comprimir imagen online",
    "home.card.compress.description":
      "Reduce el peso del archivo antes de publicarlo en sitios web, blogs y redes sociales.",
    "home.card.resize.title": "Redimensionar imagen online",
    "home.card.resize.description":
      "Exporta dimensiones prácticas para diseños web, miniaturas y recortes sociales.",
    "home.card.metadata.title": "Visor de datos EXIF",
    "home.card.metadata.description":
      "Revisa metadatos y señales de privacidad antes de compartir fotos online.",
    "home.checksEyebrow": "Qué revisa la herramienta",
    "home.checksTitle": "¿Qué revisa PublishPixel?",
    "home.checksDescription":
      "La preparación de una imagen es más que un número de peso. La revisión inteligente combina dimensiones, proporción, formato, compresión estimada y contexto para ayudarte a decidir mejor antes de publicar.",
    "home.check.0": "Dimensiones, relación de aspecto y orientación",
    "home.check.1": "Peso estimado y oportunidad de compresión",
    "home.check.2": "Formato adecuado según el contexto de publicación",
    "home.check.3": "Guía de nombre SEO y estructura del texto alternativo",
    "home.check.4": "Señales de compatibilidad Open Graph y redes sociales",
    "home.check.5": "Avisos para imágenes pesadas, pequeñas o desajustadas",
    "home.differentEyebrow": "Por qué PublishPixel es diferente",
    "home.differentTitle": "Más que compresión: una revisión completa antes de publicar",
    "home.differentDescription":
      "La mayoría de herramientas se centran en una acción: comprimir, redimensionar o convertir. PublishPixel combina esos pasos con contexto de publicación para ayudarte a decidir si una imagen está realmente lista.",
    "home.contextTitle": "Revisiones según el contexto",
    "home.contextDescription":
      "Compara tu imagen con ajustes predefinidos prácticos para blogs, vistas previas Open Graph, miniaturas de YouTube, productos, encabezados de email y publicaciones sociales.",
    "home.workflowTitle": "Flujo de copia para publicar",
    "home.workflowDescription":
      "Mantén seguro tu archivo original y exporta una versión dedicada para el canal donde se publicará la imagen.",
    "home.scoreTitle": "Puntuación práctica de preparación",
    "home.scoreDescription":
      "Obtén una puntuación simple con avisos claros sobre peso, dimensiones, proporción, formato, texto alternativo, nombre de archivo y metadatos.",
    "home.speedEyebrow": "Velocidad de publicación",
    "home.readinessTitle": "Por qué importa preparar las imágenes",
    "home.readinessP1":
      "Las imágenes influyen en la velocidad, el acabado visual, las vistas previas sociales y la primera impresión de una publicación o producto. Una imagen muy pesada puede ralentizar una página; una imagen pequeña o mal recortada puede verse débil en vistas previas.",
    "home.readinessP2":
      "Las recomendaciones son prácticas: redimensiona para el canal, convierte cuando pueda reducir peso, comprime con cuidado y evita asumir cosas que la herramienta no puede inspeccionar.",
    "home.workflowEyebrow": "Flujo previo a publicar",
    "home.workflowSectionTitle": "Un flujo práctico para revisar imágenes antes de publicar",
    "home.workflowSectionDescription":
      "PublishPixel combina varias revisiones de publicación en un solo flujo para revisar una imagen antes de que llegue a tu CMS o gestor de contenido, tienda, campaña o publicación social.",
    "home.beforeUploadTitle": "Antes de subir",
    "home.beforeUploadDescription": "Revisa dimensiones, proporción, peso y formato antes de que el archivo entre en tu sistema de publicación.",
    "home.beforeShareTitle": "Antes de compartir",
    "home.beforeShareDescription": "Prepara recortes para Open Graph, miniaturas y redes sociales para que las vistas previas se vean intencionales.",
    "home.beforeArchiveTitle": "Antes de archivar",
    "home.beforeArchiveDescription": "Exporta una copia para publicar en vez de usar el original cuando importen privacidad, metadatos o peso.",
    "home.accessibilityEyebrow": "Checklist de accesibilidad",
    "home.accessibilityTitle": "Prepara imágenes que más personas puedan entender",
    "home.accessibilityP1":
      "Una imagen útil debe tener propósito, un recorte legible y un plan de texto alternativo que describa el contenido visible con honestidad. Si es decorativa, la página final debería tratarla como decorativa.",
    "home.accessibilityP2":
      "PublishPixel orienta sobre nombre de archivo y estructura de texto alternativo sin inventar descripciones visuales. Tú mantienes control sobre el texto final.",
    "home.performanceEyebrow": "Checklist de rendimiento",
    "home.performanceTitle": "Detecta archivos pesados antes de ralentizar una página",
    "home.performanceP1":
      "Antes de publicar, revisa si el archivo pesa más de lo necesario, si las dimensiones coinciden con el diseño y si WebP o JPG serían mejores formatos de exportación.",
    "home.performanceP2":
      "Las herramientas de exportación en el navegador ayudan a crear vistas previas más ligeras para flujos comunes. En producción, conviene usar imágenes adaptables y caché.",
    "home.scoringEyebrow": "Cómo funciona la puntuación",
    "home.scoringTitle": "Explicación de la revisión inteligente de PublishPixel",
    "home.scoringDescription":
      "La puntuación PublishReady pondera dimensiones y proporción, peso, formato recomendado y señales de calidad según el contexto. Está diseñada para guiar decisiones rápidas, no para reemplazar requisitos oficiales.",
    "home.scorePart.0": "40% dimensiones y proporción",
    "home.scorePart.1": "25% peso del archivo",
    "home.scorePart.2": "20% formato recomendado",
    "home.scorePart.3": "15% contexto y heurísticas de calidad",
    "home.guidesEyebrow": "Guías relacionadas",
    "home.guidesTitle": "Aprende el checklist para publicar imágenes",
    "home.guidesDescription":
      "Estas guías originales explican las decisiones detrás de la revisión: dimensiones, metadatos, texto alternativo, compresión, privacidad y elección de formato.",
    "home.popularEyebrow": "Ajustes populares",
    "home.popularTitle": "Ajustes predefinidos de imagen populares",
    "home.presetNote": "{dimensions}; proporción recomendada {ratio}.",
    "home.privacyEyebrow": "Análisis de imagen centrado en la privacidad",
    "home.privacyTitle": "Tu imagen permanece en tu navegador",
    "home.privacyDescription":
      "PublishPixel no sube tu imagen a un servidor para analizarla. Las APIs del navegador leen el archivo, calculan dimensiones y crean versiones exportadas localmente cuando lo solicitas.",
    "home.audienceEyebrow": "¿Para quién es?",
    "home.audience.0": "Bloggers",
    "home.audience.1": "Profesionales SEO",
    "home.audience.2": "YouTubers",
    "home.audience.3": "Vendedores e-commerce",
    "home.audience.4": "Creadores de redes sociales",
    "home.audience.5": "Diseñadores",
    "home.audience.6": "Estudiantes",
    "home.audience.7": "Pequeños negocios",
    "home.faqEyebrow": "Preguntas frecuentes",
    "home.faqTitle": "Preguntas frecuentes",
    "home.disclaimerLabel": "Aviso de precisión:",
    "home.disclaimerText":
      "Los resultados son estimaciones basadas en patrones comunes de plataformas y revisiones técnicas disponibles en el navegador. Los requisitos pueden cambiar y esta herramienta no garantiza posicionamiento SEO, aprobación ni renderizado final en servicios externos.",
    "home.faq.upload.q": "¿PublishPixel sube mi imagen?",
    "home.faq.upload.a":
      "No. El análisis principal se ejecuta localmente en tu navegador con File API, Canvas API y decodificación nativa cuando está disponible.",
    "home.faq.score.q": "¿La puntuación PublishReady es una puntuación oficial?",
    "home.faq.score.a":
      "No. Es una puntuación estimada basada en guías comunes de publicación, peso, dimensiones, proporción y heurísticas prácticas.",
    "home.faq.og.q": "¿Puedo usarlo para imágenes Open Graph?",
    "home.faq.og.a":
      "Sí. Elige el ajuste predefinido Open Graph para revisar el formato común 1200 x 630 px, peso y recomendaciones de formato.",
    "home.faq.compress.q": "¿La herramienta puede comprimir imágenes?",
    "home.faq.compress.a":
      "Sí. Tras subir una imagen raster compatible, puedes exportar una vista previa optimizada en JPG, WebP o PNG desde tu navegador.",
    "home.faq.resize.q": "¿Redimensionar mejora la calidad?",
    "home.faq.resize.a":
      "Redimensionar puede ajustar una imagen al destino, pero ampliar una imagen pequeña no recupera detalle perdido. La herramienta avisa cuando la fuente parece demasiado pequeña.",
    "home.faq.exif.q": "¿La herramienta elimina metadatos EXIF?",
    "home.faq.exif.a":
      "Reexportar mediante Canvas normalmente no conserva EXIF, pero puede variar por navegador y formato. No debe considerarse una garantía perfecta.",
    "home.faq.formats.q": "¿Qué formatos son compatibles?",
    "home.faq.formats.a":
      "La versión inicial soporta JPG, JPEG, PNG, WebP, revisiones de GIF estático y análisis básico de dimensiones SVG.",
    "home.faq.youtube.q": "¿Puedo usarlo para miniaturas de YouTube?",
    "home.faq.youtube.a":
      "Sí. El ajuste predefinido de YouTube revisa el tamaño común 1280 x 720 px, proporción 16:9 y recomendaciones de peso.",
    "home.faq.free.q": "¿La herramienta es gratis?",
    "home.faq.free.a":
      "Sí. La aplicación está diseñada como una utilidad gratuita en el navegador. El soporte para AdSense está preparado, pero no se muestran anuncios sin un editor aprobado.",
    "home.faq.verify.q": "¿Debo verificar requisitos oficiales?",
    "home.faq.verify.a":
      "Sí. Los requisitos de plataformas pueden cambiar; verifica documentación oficial cuando la imagen sea crítica para una campaña, subida o lanzamiento.",
    "guide.image-size-for-web.title": "Tamaño de imagen para web: dimensiones prácticas antes de publicar",
    "guide.image-size-for-web.description": "Aprende a elegir dimensiones que se vean nítidas sin ralentizar tus páginas.",
    "guide.remove-image-metadata.title": "Cómo eliminar metadatos de una imagen antes de publicar",
    "guide.remove-image-metadata.description": "Comprende metadatos EXIF, riesgos de privacidad y formas más seguras de publicar imágenes online.",
    "guide.image-alt-text.title": "Cómo escribir texto alternativo útil para imágenes",
    "guide.image-alt-text.description": "Escribe texto alternativo más claro para accesibilidad, contexto y mejores flujos de publicación.",
    "guide.webp-vs-jpeg-vs-png.title": "WebP vs JPEG vs PNG: qué formato de imagen usar",
    "guide.webp-vs-jpeg-vs-png.description": "Compara formatos comunes y elige un formato práctico para páginas web y vistas previas sociales.",
    "guide.image-seo-checklist.title": "Checklist SEO de imágenes antes de publicar",
    "guide.image-seo-checklist.description": "Un checklist práctico para nombres de archivo, texto alternativo, dimensiones, peso y vistas previas sociales.",
    "guide.social-media-image-sizes.title": "Tamaños de imagen para redes sociales: guía práctica",
    "guide.social-media-image-sizes.description": "Prepara recortes para Open Graph, YouTube, Instagram, LinkedIn, Pinterest y feeds de producto.",
    "guide.compress-images-without-losing-quality.title": "Cómo comprimir imágenes sin perder demasiada calidad",
    "guide.compress-images-without-losing-quality.description": "Reduce el peso de imágenes manteniendo fotos y gráficos suficientemente claros.",
    "guide.photo-privacy-before-publishing.title": "Checklist de privacidad antes de publicar fotos online",
    "guide.photo-privacy-before-publishing.description": "Revisa metadatos, detalles visibles, permisos y contexto sensible antes de publicar fotos.",
    "preset.website-blog": "Imagen para sitio web o blog",
    "preset.seo-featured": "Imagen destacada SEO",
    "preset.open-graph": "Imagen Open Graph",
    "preset.google-discover": "Imagen Google Discover",
    "preset.youtube-thumbnail": "Miniatura de YouTube",
    "preset.instagram-post": "Publicación de Instagram",
    "preset.instagram-story": "Historia de Instagram",
    "preset.facebook-post": "Publicación de Facebook",
    "preset.linkedin-post": "Publicación de LinkedIn",
    "preset.pinterest-pin": "Pin de Pinterest",
    "preset.ecommerce-product": "Imagen de producto e-commerce",
    "preset.favicon": "Favicon",
    "preset.email-header": "Encabezado de email",
    "preset.hero-banner": "Banner principal"
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

export function LanguageProvider({
  children,
  initialLanguage = "en"
}: {
  children: React.ReactNode;
  initialLanguage?: Language;
}) {
  const pathname = usePathname();
  const routeLanguage = getLocaleFromPathname(pathname || "/");
  const [language, setLanguageState] = useState<Language>(initialLanguage);

  useEffect(() => {
    setLanguageState(routeLanguage);
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, routeLanguage);
    document.documentElement.lang = routeLanguage;
  }, [routeLanguage]);

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

export function T({ k, vars }: { k: string; vars?: TranslationVars }) {
  const { t } = useLanguage();
  return <>{t(k, vars)}</>;
}
