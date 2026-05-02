"use client";

import { useLanguage } from "@/components/LanguageProvider";
import type { PublishRule, PresetId } from "@/lib/publishRules";

const ES_PRESET_DIMENSIONS: Record<PresetId, string> = {
  "website-blog": "1200-1600 px de ancho",
  "seo-featured": "1200 px de ancho o más",
  "open-graph": "1200 x 630 px",
  "google-discover": "1200 px de ancho o más",
  "youtube-thumbnail": "1280 x 720 px",
  "instagram-post": "1080 x 1080, 1080 x 1350 o 1080 x 566 px",
  "instagram-story": "1080 x 1920 px",
  "facebook-post": "1200 x 630 px",
  "linkedin-post": "1200 x 627 px",
  "pinterest-pin": "1000 x 1500 px",
  "ecommerce-product": "1000 x 1000 px o más",
  favicon: "Cuadrado; exporta variantes de 16, 32, 48, 180 y 512 px",
  "email-header": "600-1200 px de ancho",
  "hero-banner": "1600-2400 px de ancho"
};

const ES_PRESET_RATIOS: Record<PresetId, string> = {
  "website-blog": "flexible, comúnmente 16:9, 4:3 o cuadrada",
  "seo-featured": "16:9 o 4:3",
  "open-graph": "1.91:1",
  "google-discover": "16:9",
  "youtube-thumbnail": "16:9",
  "instagram-post": "1:1, 4:5 o 1.91:1",
  "instagram-story": "9:16",
  "facebook-post": "1.91:1",
  "linkedin-post": "aproximadamente 1.91:1",
  "pinterest-pin": "2:3",
  "ecommerce-product": "1:1 cuadrada",
  favicon: "1:1 cuadrada",
  "email-header": "ancha o tipo banner",
  "hero-banner": "ancha, comúnmente 16:9 a 3:1"
};

export default function LocalizedPresetNote({ preset }: { preset: PublishRule }) {
  const { language, t } = useLanguage();
  const dimensions = language === "es" ? ES_PRESET_DIMENSIONS[preset.id] : preset.recommendedDimensions;
  const ratio = language === "es" ? ES_PRESET_RATIOS[preset.id] : preset.aspectLabel;

  return <>{t("home.presetNote", { dimensions, ratio })}</>;
}
