import type { Language } from "@/components/LanguageProvider";

const PRESET_LABEL_ES: Record<string, string> = {
  "Website / Blog Image": "imagen para sitio web o blog",
  "SEO Featured Image": "imagen destacada SEO",
  "Open Graph Image": "imagen Open Graph",
  "Google Discover Image": "imagen Google Discover",
  "YouTube Thumbnail": "miniatura de YouTube",
  "Instagram Post": "publicación de Instagram",
  "Instagram Story": "historia de Instagram",
  "Facebook Post": "publicación de Facebook",
  "LinkedIn Post": "publicación de LinkedIn",
  "Pinterest Pin": "pin de Pinterest",
  "E-commerce Product Image": "imagen de producto e-commerce",
  Favicon: "favicon",
  "Email Header": "encabezado de email",
  "Hero Banner": "banner principal"
};

const SHORT_LABEL_ES: Record<string, string> = {
  Website: "sitio web",
  SEO: "SEO",
  "Open Graph": "Open Graph",
  Discover: "Discover",
  YouTube: "YouTube",
  "Instagram Post": "Instagram",
  Story: "historia",
  Facebook: "Facebook",
  LinkedIn: "LinkedIn",
  Pinterest: "Pinterest",
  Product: "producto",
  Favicon: "favicon",
  Email: "email",
  Hero: "banner principal"
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
    return "Mantén texto importante y rostros lejos de los bordes porque las superposiciones de interfaz pueden cubrirlos.";
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
        `Esta imagen es demasiado pequeña para ${translatePresetLabel(preset)}. Recomendación: ${translateDimensionText(dimensions)}.`
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
      (_, ratio) => `La proporción no se acerca a ${translateAspectText(ratio)}.`
    ],
    [
      /^Resize or crop toward (.+) for better (.+) compatibility\.$/,
      (_, dimensions, preset) =>
        `Redimensiona o recorta hacia ${translateDimensionText(dimensions)} para mejorar la compatibilidad con ${translateShortLabel(preset)}.`
    ],
    [
      /^Aspect ratio is close to the recommended (.+) shape\.$/,
      (_, ratio) => `La proporción se acerca a la forma recomendada ${translateAspectText(ratio)}.`
    ],
    [
      /^The file is heavier than the recommended (.+) KB target for this preset\.$/,
      (_, size) => `El archivo pesa más que el objetivo recomendado de ${size} KB para este ajuste predefinido.`
    ],
    [
      /^Compress the image; keeping it below (.+) KB may improve loading speed\.$/,
      (_, size) => `Comprime la imagen; mantenerla por debajo de ${size} KB puede mejorar la velocidad de carga.`
    ],
    [
      /^File size is within the recommended target for this preset\.$/,
      () => "El peso del archivo está dentro del objetivo recomendado para este ajuste predefinido."
    ],
    [
      /^(.+) is not the preferred format for (.+)\.$/,
      (_, format, preset) => `${format} no es el formato preferido para ${translatePresetLabel(preset)}.`
    ],
    [
      /^(.+) is a suitable format for this preset\.$/,
      (_, format) => `${format} es un formato adecuado para este ajuste predefinido.`
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
        `Tu imagen coincide con las revisiones principales de ${translateShortLabel(preset)}. Aun así, puedes crear tamaños adaptables para producción.`
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

function translateDimensionText(value: string) {
  return value
    .replace("1200-1600 px wide", "1200-1600 px de ancho")
    .replace("1200 px wide or larger", "1200 px de ancho o más")
    .replace("1080 x 1080, 1080 x 1350 or 1080 x 566 px", "1080 x 1080, 1080 x 1350 o 1080 x 566 px")
    .replace("1000 x 1000 px or larger", "1000 x 1000 px o más")
    .replace("Square; export 16, 32, 48, 180 and 512 px variants", "Cuadrado; exporta variantes de 16, 32, 48, 180 y 512 px")
    .replace("600-1200 px wide", "600-1200 px de ancho")
    .replace("1600-2400 px wide", "1600-2400 px de ancho");
}

function translateAspectText(value: string) {
  return value
    .replace("Flexible, commonly 16:9, 4:3 or square", "flexible, comúnmente 16:9, 4:3 o cuadrada")
    .replace("16:9 or 4:3", "16:9 o 4:3")
    .replace("1:1, 4:5 or 1.91:1", "1:1, 4:5 o 1.91:1")
    .replace("About 1.91:1", "aproximadamente 1.91:1")
    .replace("1:1 square", "1:1 cuadrada")
    .replace("Wide or banner-like", "ancha o tipo banner")
    .replace("Wide, commonly 16:9 to 3:1", "ancha, comúnmente 16:9 a 3:1");
}
