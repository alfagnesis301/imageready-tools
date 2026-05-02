import type { Language } from "@/components/LanguageProvider";

const PRESET_LABEL_ES: Record<string, string> = {
  "Website / Blog Image": "imagen para website o blog",
  "SEO Featured Image": "imagen destacada SEO",
  "Open Graph Image": "imagen Open Graph",
  "Google Discover Image": "imagen Google Discover",
  "YouTube Thumbnail": "miniatura de YouTube",
  "Instagram Post": "post de Instagram",
  "Instagram Story": "historia de Instagram",
  "Facebook Post": "post de Facebook",
  "LinkedIn Post": "post de LinkedIn",
  "Pinterest Pin": "pin de Pinterest",
  "E-commerce Product Image": "imagen de producto e-commerce",
  Favicon: "favicon",
  "Email Header": "header de email",
  "Hero Banner": "hero banner"
};

const SHORT_LABEL_ES: Record<string, string> = {
  Website: "website",
  SEO: "SEO",
  "Open Graph": "Open Graph",
  Discover: "Discover",
  YouTube: "YouTube",
  "Instagram Post": "Instagram",
  Story: "Story",
  Facebook: "Facebook",
  LinkedIn: "LinkedIn",
  Pinterest: "Pinterest",
  Product: "producto",
  Favicon: "favicon",
  Email: "email",
  Hero: "hero"
};

export function translatePublishText(message: string, language: Language) {
  if (language !== "es") return message;

  if (message === "PNG is useful for transparency; WebP may also reduce file size when supported by your workflow.") {
    return "PNG es útil para transparencia; WebP también puede reducir peso si tu flujo lo soporta.";
  }

  if (message === "Use WebP when you need transparency with a smaller file size; keep PNG if maximum compatibility is more important.") {
    return "Usa WebP cuando necesites transparencia con menor peso; conserva PNG si la compatibilidad máxima es más importante.";
  }

  if (message === "Keep important text and faces away from the edges because interface overlays may cover them.") {
    return "Mantén texto importante y rostros lejos de los bordes porque los overlays de interfaz pueden cubrirlos.";
  }

  if (message === "A clean, uncluttered background is usually helpful for product images; this tool does not detect background quality.") {
    return "Un fondo limpio y ordenado suele ayudar en imágenes de producto; esta herramienta no detecta la calidad del fondo.";
  }

  if (message === "Create a square version before exporting favicon sizes such as 16, 32, 48, 180 and 512 px.") {
    return "Crea una versión cuadrada antes de exportar tamaños de favicon como 16, 32, 48, 180 y 512 px.";
  }

  if (message === "Use a high-quality source image and verify critical publisher requirements when the image is business-critical.") {
    return "Usa una imagen fuente de alta calidad y verifica requisitos oficiales cuando la imagen sea crítica para el negocio.";
  }

  const replacements: Array<[RegExp, (...matches: string[]) => string]> = [
    [
      /^This image is too small for (.+)\. Recommended: (.+)\.$/,
      (_, preset, dimensions) =>
        `Esta imagen es demasiado pequeña para ${translatePresetLabel(preset)}. Recomendado: ${dimensions}.`
    ],
    [
      /^Resize or export a larger source image for (.+); upscaling may not recover lost detail\.$/,
      (_, preset) =>
        `Redimensiona o exporta una fuente más grande para ${translatePresetLabel(preset)}; ampliar una imagen pequeña puede no recuperar detalle perdido.`
    ],
    [
      /^Dimensions are usable for (.+)\.$/,
      (_, preset) => `Las dimensiones son utilizables para ${translatePresetLabel(preset)}.`
    ],
    [
      /^The aspect ratio does not closely match (.+)\.$/,
      (_, ratio) => `La relación de aspecto no se acerca a ${ratio}.`
    ],
    [
      /^Resize or crop toward (.+) for better (.+) compatibility\.$/,
      (_, dimensions, preset) =>
        `Redimensiona o recorta hacia ${dimensions} para mejorar la compatibilidad con ${translateShortLabel(preset)}.`
    ],
    [
      /^Aspect ratio is close to the recommended (.+) shape\.$/,
      (_, ratio) => `La relación de aspecto se acerca a la forma recomendada ${ratio}.`
    ],
    [
      /^The file is heavier than the recommended (.+) KB target for this preset\.$/,
      (_, size) => `El archivo pesa más que el objetivo recomendado de ${size} KB para este preset.`
    ],
    [
      /^Compress the image; keeping it below (.+) KB may improve loading speed\.$/,
      (_, size) => `Comprime la imagen; mantenerla por debajo de ${size} KB puede mejorar la velocidad de carga.`
    ],
    [
      /^File size is within the recommended target for this preset\.$/,
      () => "El peso del archivo está dentro del objetivo recomendado para este preset."
    ],
    [
      /^(.+) is not the preferred format for (.+)\.$/,
      (_, format, preset) => `${format} no es el formato preferido para ${translatePresetLabel(preset)}.`
    ],
    [
      /^(.+) is a suitable format for this preset\.$/,
      (_, format) => `${format} es un formato adecuado para este preset.`
    ],
    [
      /^PNG may be heavier for photos\. Convert to (.+) to reduce file size while keeping good quality\.$/,
      (_, format) => `PNG puede ser más pesado para fotos. Convierte a ${format} para reducir peso manteniendo buena calidad.`
    ],
    [
      /^Convert to (.+) for a format commonly recommended for (.+)\.$/,
      (_, format, preset) => `Convierte a ${format}, un formato comúnmente recomendado para ${translatePresetLabel(preset)}.`
    ],
    [
      /^(.+) is appropriate here\. Consider (.+) if you need a smaller export\.$/,
      (_, format, preferred) => `${format} es adecuado aquí. Considera ${preferred} si necesitas una exportación más ligera.`
    ],
    [
      /^Your image matches the main (.+) checks\. You may still create responsive sizes for production use\.$/,
      (_, preset) =>
        `Tu imagen coincide con los chequeos principales de ${translateShortLabel(preset)}. Aun así, puedes crear tamaños responsive para producción.`
    ]
  ];

  for (const [pattern, translate] of replacements) {
    const match = message.match(pattern);
    if (match) return translate(...match);
  }

  return message;
}

function translatePresetLabel(label: string) {
  return PRESET_LABEL_ES[label] || label;
}

function translateShortLabel(label: string) {
  return SHORT_LABEL_ES[label] || label;
}
