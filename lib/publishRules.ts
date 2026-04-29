import { roundTo } from "./imageUtils";

export type ImageFormat = "jpg" | "png" | "webp" | "gif" | "svg" | "unknown";

export type PresetId =
  | "website-blog"
  | "seo-featured"
  | "open-graph"
  | "google-discover"
  | "youtube-thumbnail"
  | "instagram-post"
  | "instagram-story"
  | "facebook-post"
  | "linkedin-post"
  | "pinterest-pin"
  | "ecommerce-product"
  | "favicon"
  | "email-header"
  | "hero-banner";

export type PublishStatus =
  | "Ready to publish"
  | "Good but can improve"
  | "Needs resizing"
  | "Too heavy"
  | "Wrong aspect ratio"
  | "Too small"
  | "Not recommended";

export type PublishImageInput = {
  width: number;
  height: number;
  size: number;
  format: ImageFormat;
  hasTransparency?: boolean | null;
};

export type PublishRule = {
  id: PresetId;
  label: string;
  shortLabel: string;
  description: string;
  recommendedDimensions: string;
  recommendedFormats: ImageFormat[];
  preferredFormat: ImageFormat;
  recommendedMaxSizeKB: number;
  heavySizeKB: number;
  minWidth?: number;
  minHeight?: number;
  idealWidth?: [number, number];
  idealHeight?: [number, number];
  idealAspectRatios: number[];
  aspectLabel: string;
  aspectTolerance: number;
  qualityNote: string;
};

export type PublishResult = {
  preset: PublishRule;
  score: number;
  status: PublishStatus;
  recommendations: string[];
  warnings: string[];
  goodPoints: string[];
  formatRecommendation: string;
  scoreParts: {
    dimensions: number;
    fileSize: number;
    format: number;
    context: number;
  };
};

export const PRESET_ORDER: PresetId[] = [
  "website-blog",
  "seo-featured",
  "open-graph",
  "google-discover",
  "youtube-thumbnail",
  "instagram-post",
  "instagram-story",
  "facebook-post",
  "linkedin-post",
  "pinterest-pin",
  "ecommerce-product",
  "favicon",
  "email-header",
  "hero-banner"
];

export const PUBLISH_RULES: Record<PresetId, PublishRule> = {
  "website-blog": {
    id: "website-blog",
    label: "Website / Blog Image",
    shortLabel: "Website",
    description: "A general image for articles, landing pages and blog content.",
    recommendedDimensions: "1200-1600 px wide",
    recommendedFormats: ["webp", "jpg"],
    preferredFormat: "webp",
    recommendedMaxSizeKB: 300,
    heavySizeKB: 1024,
    minWidth: 800,
    idealWidth: [1200, 1600],
    idealAspectRatios: [16 / 9, 4 / 3, 3 / 2, 1],
    aspectLabel: "Flexible, commonly 16:9, 4:3 or square",
    aspectTolerance: 0.18,
    qualityNote: "Usually best as a lightweight WebP or JPG with enough width for responsive layouts."
  },
  "seo-featured": {
    id: "seo-featured",
    label: "SEO Featured Image",
    shortLabel: "SEO",
    description: "A primary article image intended for search and content previews.",
    recommendedDimensions: "1200 px wide or larger",
    recommendedFormats: ["webp", "jpg"],
    preferredFormat: "webp",
    recommendedMaxSizeKB: 500,
    heavySizeKB: 1100,
    minWidth: 1200,
    idealWidth: [1200, 1800],
    idealAspectRatios: [16 / 9, 4 / 3],
    aspectLabel: "16:9 or 4:3",
    aspectTolerance: 0.09,
    qualityNote: "A large, compressed image may help previews while keeping the page fast."
  },
  "open-graph": {
    id: "open-graph",
    label: "Open Graph Image",
    shortLabel: "Open Graph",
    description: "A share preview image for many messaging and social platforms.",
    recommendedDimensions: "1200 x 630 px",
    recommendedFormats: ["jpg", "png"],
    preferredFormat: "jpg",
    recommendedMaxSizeKB: 500,
    heavySizeKB: 1024,
    minWidth: 1200,
    minHeight: 630,
    idealWidth: [1180, 1240],
    idealHeight: [610, 650],
    idealAspectRatios: [1200 / 630],
    aspectLabel: "1.91:1",
    aspectTolerance: 0.04,
    qualityNote: "Use a clear focal area because previews may be cropped by different services."
  },
  "google-discover": {
    id: "google-discover",
    label: "Google Discover Image",
    shortLabel: "Discover",
    description: "A wide article image designed for high-quality discovery surfaces.",
    recommendedDimensions: "1200 px wide or larger",
    recommendedFormats: ["webp", "jpg"],
    preferredFormat: "webp",
    recommendedMaxSizeKB: 500,
    heavySizeKB: 1200,
    minWidth: 1200,
    idealWidth: [1200, 2000],
    idealAspectRatios: [16 / 9],
    aspectLabel: "16:9",
    aspectTolerance: 0.08,
    qualityNote: "Use a high-quality image and compress carefully when possible."
  },
  "youtube-thumbnail": {
    id: "youtube-thumbnail",
    label: "YouTube Thumbnail",
    shortLabel: "YouTube",
    description: "A video thumbnail preview with a wide 16:9 format.",
    recommendedDimensions: "1280 x 720 px",
    recommendedFormats: ["jpg", "png", "webp"],
    preferredFormat: "jpg",
    recommendedMaxSizeKB: 2048,
    heavySizeKB: 3072,
    minWidth: 1280,
    minHeight: 720,
    idealWidth: [1260, 1320],
    idealHeight: [700, 740],
    idealAspectRatios: [16 / 9],
    aspectLabel: "16:9",
    aspectTolerance: 0.035,
    qualityNote: "Leave breathing room for titles, timestamps and interface overlays."
  },
  "instagram-post": {
    id: "instagram-post",
    label: "Instagram Post",
    shortLabel: "Instagram Post",
    description: "A feed image for square, portrait or landscape post formats.",
    recommendedDimensions: "1080 x 1080, 1080 x 1350 or 1080 x 566 px",
    recommendedFormats: ["jpg", "png", "webp"],
    preferredFormat: "jpg",
    recommendedMaxSizeKB: 1200,
    heavySizeKB: 2500,
    minWidth: 1080,
    idealWidth: [1080, 1350],
    idealAspectRatios: [1, 4 / 5, 1080 / 566],
    aspectLabel: "1:1, 4:5 or 1.91:1",
    aspectTolerance: 0.045,
    qualityNote: "Match one of the common feed ratios to avoid unexpected cropping."
  },
  "instagram-story": {
    id: "instagram-story",
    label: "Instagram Story",
    shortLabel: "Story",
    description: "A full-screen vertical story image.",
    recommendedDimensions: "1080 x 1920 px",
    recommendedFormats: ["jpg", "png", "webp"],
    preferredFormat: "jpg",
    recommendedMaxSizeKB: 1500,
    heavySizeKB: 3000,
    minWidth: 1080,
    minHeight: 1920,
    idealWidth: [1060, 1120],
    idealHeight: [1880, 1960],
    idealAspectRatios: [9 / 16],
    aspectLabel: "9:16",
    aspectTolerance: 0.035,
    qualityNote: "Keep important details away from the top and bottom interface areas."
  },
  "facebook-post": {
    id: "facebook-post",
    label: "Facebook Post",
    shortLabel: "Facebook",
    description: "A feed or link-preview image with a wide share-friendly ratio.",
    recommendedDimensions: "1200 x 630 px",
    recommendedFormats: ["jpg", "png", "webp"],
    preferredFormat: "jpg",
    recommendedMaxSizeKB: 900,
    heavySizeKB: 1800,
    minWidth: 1200,
    minHeight: 630,
    idealAspectRatios: [1200 / 630],
    aspectLabel: "1.91:1",
    aspectTolerance: 0.05,
    qualityNote: "A 1.91:1 image usually works well for link previews and broad sharing."
  },
  "linkedin-post": {
    id: "linkedin-post",
    label: "LinkedIn Post",
    shortLabel: "LinkedIn",
    description: "A professional feed image or article preview.",
    recommendedDimensions: "1200 x 627 px",
    recommendedFormats: ["jpg", "png", "webp"],
    preferredFormat: "jpg",
    recommendedMaxSizeKB: 900,
    heavySizeKB: 1800,
    minWidth: 1200,
    minHeight: 627,
    idealAspectRatios: [1200 / 627],
    aspectLabel: "About 1.91:1",
    aspectTolerance: 0.05,
    qualityNote: "Use a clear composition and avoid tiny text where possible."
  },
  "pinterest-pin": {
    id: "pinterest-pin",
    label: "Pinterest Pin",
    shortLabel: "Pinterest",
    description: "A vertical image for pin-style discovery.",
    recommendedDimensions: "1000 x 1500 px",
    recommendedFormats: ["jpg", "png", "webp"],
    preferredFormat: "jpg",
    recommendedMaxSizeKB: 1200,
    heavySizeKB: 2500,
    minWidth: 1000,
    minHeight: 1500,
    idealAspectRatios: [2 / 3],
    aspectLabel: "2:3",
    aspectTolerance: 0.04,
    qualityNote: "Tall images usually offer more room for product, recipe or guide detail."
  },
  "ecommerce-product": {
    id: "ecommerce-product",
    label: "E-commerce Product Image",
    shortLabel: "Product",
    description: "A product image for listings, detail pages and catalogs.",
    recommendedDimensions: "1000 x 1000 px or larger",
    recommendedFormats: ["webp", "jpg"],
    preferredFormat: "webp",
    recommendedMaxSizeKB: 700,
    heavySizeKB: 1600,
    minWidth: 1000,
    minHeight: 1000,
    idealAspectRatios: [1],
    aspectLabel: "1:1 square",
    aspectTolerance: 0.04,
    qualityNote: "A square image and a clean background are commonly helpful, but background quality is not detected."
  },
  favicon: {
    id: "favicon",
    label: "Favicon",
    shortLabel: "Favicon",
    description: "A small brand icon used in browser tabs and app shortcuts.",
    recommendedDimensions: "Square; export 16, 32, 48, 180 and 512 px variants",
    recommendedFormats: ["svg", "png"],
    preferredFormat: "svg",
    recommendedMaxSizeKB: 100,
    heavySizeKB: 250,
    minWidth: 16,
    minHeight: 16,
    idealAspectRatios: [1],
    aspectLabel: "1:1 square",
    aspectTolerance: 0.015,
    qualityNote: "Use a simple, legible shape that stays recognizable at very small sizes."
  },
  "email-header": {
    id: "email-header",
    label: "Email Header",
    shortLabel: "Email",
    description: "A header image for newsletters and campaign emails.",
    recommendedDimensions: "600-1200 px wide",
    recommendedFormats: ["jpg", "png", "webp"],
    preferredFormat: "jpg",
    recommendedMaxSizeKB: 250,
    heavySizeKB: 700,
    minWidth: 600,
    idealWidth: [600, 1200],
    idealAspectRatios: [3, 2.4, 2, 16 / 9],
    aspectLabel: "Wide or banner-like",
    aspectTolerance: 0.18,
    qualityNote: "Lightweight files are helpful because email clients and networks vary."
  },
  "hero-banner": {
    id: "hero-banner",
    label: "Hero Banner",
    shortLabel: "Hero",
    description: "A large visual for page headers and marketing sections.",
    recommendedDimensions: "1600-2400 px wide",
    recommendedFormats: ["webp", "jpg"],
    preferredFormat: "webp",
    recommendedMaxSizeKB: 700,
    heavySizeKB: 1600,
    minWidth: 1600,
    idealWidth: [1600, 2400],
    idealAspectRatios: [21 / 9, 16 / 9, 3 / 1],
    aspectLabel: "Wide, commonly 16:9 to 3:1",
    aspectTolerance: 0.2,
    qualityNote: "Use enough width for large displays, then compress and serve responsive sizes."
  }
};

export function getPresetRule(presetId: PresetId): PublishRule {
  return PUBLISH_RULES[presetId] || PUBLISH_RULES["website-blog"];
}

export function calculatePublishReadyScore(
  image: PublishImageInput,
  presetId: PresetId
): PublishResult {
  const preset = getPresetRule(presetId);
  const sizeKB = image.size / 1024;
  const actualRatio = image.width / image.height;
  const nearestRatio = getNearestRatio(actualRatio, preset.idealAspectRatios);
  const ratioDiff = Math.abs(actualRatio - nearestRatio);
  const ratioFitness = getRatioFitness(ratioDiff, preset.aspectTolerance);
  const dimensionFitness = getDimensionFitness(image, preset);
  const dimensions = roundTo(40 * (ratioFitness * 0.55 + dimensionFitness * 0.45), 1);
  const fileSize = roundTo(getFileSizeScore(sizeKB, preset), 1);
  const format = roundTo(getFormatScore(image, preset), 1);
  const context = roundTo(getContextScore(image, preset, ratioFitness, dimensionFitness), 1);
  const rawScore = Math.max(0, Math.min(100, dimensions + fileSize + format + context));
  const score = Math.round(rawScore);

  const warnings: string[] = [];
  const recommendations: string[] = [];
  const goodPoints: string[] = [];
  const isTooSmall = isBelowMinimum(image, preset);
  const isTooHeavy = sizeKB > preset.recommendedMaxSizeKB;
  const isVeryHeavy = sizeKB > preset.heavySizeKB;
  const wrongAspect = ratioFitness < 0.55;
  const needsResize = dimensionFitness < 0.78 || wrongAspect;
  const formatIsRecommended = isFormatRecommended(image, preset);

  if (isTooSmall) {
    warnings.push(`This image is too small for ${preset.label}. Recommended: ${preset.recommendedDimensions}.`);
    recommendations.push(`Resize or export a larger source image for ${preset.label}; upscaling may not recover lost detail.`);
  } else {
    goodPoints.push(`Dimensions are usable for ${preset.label}.`);
  }

  if (wrongAspect) {
    warnings.push(`The aspect ratio does not closely match ${preset.aspectLabel}.`);
    recommendations.push(`Resize or crop toward ${preset.recommendedDimensions} for better ${preset.shortLabel} compatibility.`);
  } else {
    goodPoints.push(`Aspect ratio is close to the recommended ${preset.aspectLabel} shape.`);
  }

  if (isTooHeavy) {
    warnings.push(
      `The file is heavier than the recommended ${preset.recommendedMaxSizeKB} KB target for this preset.`
    );
    recommendations.push(
      `Compress the image; keeping it below ${preset.recommendedMaxSizeKB} KB may improve loading speed.`
    );
  } else {
    goodPoints.push(`File size is within the recommended target for this preset.`);
  }

  if (!formatIsRecommended) {
    warnings.push(`${formatLabel(image.format)} is not the preferred format for ${preset.label}.`);
    recommendations.push(getFormatRecommendation(image, preset));
  } else {
    goodPoints.push(`${formatLabel(image.format)} is a suitable format for this preset.`);
  }

  if (preset.id === "youtube-thumbnail") {
    recommendations.push("Keep important text and faces away from the edges because interface overlays may cover them.");
  }

  if (preset.id === "ecommerce-product") {
    recommendations.push("A clean, uncluttered background is usually helpful for product images; this tool does not detect background quality.");
  }

  if (preset.id === "favicon" && Math.abs(actualRatio - 1) > 0.02) {
    recommendations.push("Create a square version before exporting favicon sizes such as 16, 32, 48, 180 and 512 px.");
  }

  if (preset.id === "google-discover") {
    recommendations.push("Use a high-quality source image and verify critical publisher requirements when the image is business-critical.");
  }

  if (!recommendations.length) {
    recommendations.push(
      `Your image matches the main ${preset.shortLabel} checks. You may still create responsive sizes for production use.`
    );
  }

  const status: PublishStatus = getStatus({
    score,
    image,
    isTooSmall,
    isVeryHeavy,
    wrongAspect,
    needsResize,
    formatIsRecommended
  });

  return {
    preset,
    score,
    status,
    recommendations: dedupe(recommendations),
    warnings: dedupe(warnings),
    goodPoints: dedupe(goodPoints).slice(0, 4),
    formatRecommendation: getFormatRecommendation(image, preset),
    scoreParts: { dimensions, fileSize, format, context }
  };
}

function getRatioFitness(diff: number, tolerance: number): number {
  if (diff <= tolerance) return 1;
  if (diff <= tolerance * 2.5) return 0.72;
  if (diff <= tolerance * 5) return 0.38;
  return 0.12;
}

function getDimensionFitness(image: PublishImageInput, preset: PublishRule): number {
  let score = 1;

  if (preset.minWidth && image.width < preset.minWidth) {
    score -= Math.min(0.6, (preset.minWidth - image.width) / preset.minWidth);
  }
  if (preset.minHeight && image.height < preset.minHeight) {
    score -= Math.min(0.6, (preset.minHeight - image.height) / preset.minHeight);
  }

  if (preset.idealWidth) {
    const [min, max] = preset.idealWidth;
    if (image.width < min) score -= Math.min(0.25, (min - image.width) / min);
    if (image.width > max * 1.8) score -= 0.08;
  }

  if (preset.idealHeight) {
    const [min, max] = preset.idealHeight;
    if (image.height < min) score -= Math.min(0.25, (min - image.height) / min);
    if (image.height > max * 1.8) score -= 0.08;
  }

  return Math.max(0.08, Math.min(1, score));
}

function getFileSizeScore(sizeKB: number, preset: PublishRule): number {
  if (sizeKB <= preset.recommendedMaxSizeKB) return 25;
  if (sizeKB <= preset.heavySizeKB) {
    const progress =
      (sizeKB - preset.recommendedMaxSizeKB) /
      Math.max(1, preset.heavySizeKB - preset.recommendedMaxSizeKB);
    return 25 - progress * 15;
  }
  const over = Math.min(1, (sizeKB - preset.heavySizeKB) / preset.heavySizeKB);
  return 10 - over * 9;
}

function getFormatScore(image: PublishImageInput, preset: PublishRule): number {
  if (isFormatRecommended(image, preset)) return 20;
  if (image.format === "png" && image.hasTransparency) return 14;
  if (image.format === "gif" && preset.id !== "favicon") return 8;
  if (image.format === "unknown") return 4;
  return 11;
}

function getContextScore(
  image: PublishImageInput,
  preset: PublishRule,
  ratioFitness: number,
  dimensionFitness: number
): number {
  let score = 15;
  const megapixels = (image.width * image.height) / 1_000_000;

  if (preset.id === "hero-banner" && megapixels < 1.6) score -= 4;
  if (preset.id === "youtube-thumbnail" && (image.width < 1280 || image.height < 720)) score -= 4;
  if (preset.id === "favicon" && (image.width > 1024 || image.height > 1024)) score -= 3;
  if (preset.id === "email-header" && image.size / 1024 > preset.recommendedMaxSizeKB) score -= 3;
  if (ratioFitness < 0.55) score -= 3;
  if (dimensionFitness < 0.6) score -= 3;
  if (image.format === "svg" && preset.id !== "favicon") score -= 2;

  return Math.max(0, score);
}

function getStatus(args: {
  score: number;
  image: PublishImageInput;
  isTooSmall: boolean;
  isVeryHeavy: boolean;
  wrongAspect: boolean;
  needsResize: boolean;
  formatIsRecommended: boolean;
}): PublishStatus {
  if (args.image.format === "unknown") return "Not recommended";
  if (args.isTooSmall) return "Too small";
  if (args.isVeryHeavy) return "Too heavy";
  if (args.wrongAspect) return "Wrong aspect ratio";
  if (args.needsResize) return "Needs resizing";
  if (!args.formatIsRecommended && args.score < 72) return "Not recommended";
  if (args.score >= 85) return "Ready to publish";
  if (args.score >= 65) return "Good but can improve";
  return "Not recommended";
}

function isBelowMinimum(image: PublishImageInput, preset: PublishRule): boolean {
  return Boolean(
    (preset.minWidth && image.width < preset.minWidth) ||
      (preset.minHeight && image.height < preset.minHeight)
  );
}

function isFormatRecommended(image: PublishImageInput, preset: PublishRule): boolean {
  if (image.format === "png" && image.hasTransparency && preset.id !== "website-blog") {
    return preset.recommendedFormats.includes("png");
  }
  return preset.recommendedFormats.includes(image.format);
}

function getNearestRatio(actual: number, ratios: number[]): number {
  return ratios.reduce((best, ratio) =>
    Math.abs(actual - ratio) < Math.abs(actual - best) ? ratio : best
  );
}

function getFormatRecommendation(image: PublishImageInput, preset: PublishRule): string {
  if (image.hasTransparency && preset.recommendedFormats.includes("png")) {
    return "PNG is useful for transparency; WebP may also reduce file size when supported by your workflow.";
  }
  if (image.hasTransparency && preset.recommendedFormats.includes("webp")) {
    return "Use WebP when you need transparency with a smaller file size; keep PNG if maximum compatibility is more important.";
  }
  if (image.format === "png" && !image.hasTransparency) {
    return `PNG may be heavier for photos. Convert to ${formatLabel(preset.preferredFormat)} to reduce file size while keeping good quality.`;
  }
  if (!preset.recommendedFormats.includes(image.format)) {
    return `Convert to ${formatLabel(preset.preferredFormat)} for a format commonly recommended for ${preset.label}.`;
  }
  return `${formatLabel(image.format)} is appropriate here. Consider ${formatLabel(preset.preferredFormat)} if you need a smaller export.`;
}

export function formatLabel(format: ImageFormat): string {
  const labels: Record<ImageFormat, string> = {
    jpg: "JPG",
    png: "PNG",
    webp: "WebP",
    gif: "GIF",
    svg: "SVG",
    unknown: "Unknown format"
  };
  return labels[format];
}

function dedupe(items: string[]): string[] {
  return Array.from(new Set(items));
}
