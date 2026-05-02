"use client";

import { Gauge, ImageIcon, Layers, ScanSearch } from "lucide-react";
import type { ImageAnalysisResult } from "@/lib/imageAnalysis";
import { formatBytes } from "@/lib/imageUtils";
import { formatLabel } from "@/lib/publishRules";
import { useLanguage } from "./LanguageProvider";

export default function ImageMetrics({ analysis }: { analysis: ImageAnalysisResult }) {
  const { t } = useLanguage();
  const metrics = [
    { label: t("metrics.fileSize"), value: formatBytes(analysis.size), icon: Gauge },
    { label: t("metrics.dimensions"), value: `${analysis.width} x ${analysis.height}px`, icon: ImageIcon },
    { label: t("metrics.aspectRatio"), value: analysis.ratioLabel, icon: ScanSearch },
    { label: t("metrics.megapixels"), value: `${analysis.megapixels} MP`, icon: Layers },
    { label: t("metrics.format"), value: formatLabel(analysis.format), icon: ImageIcon },
    { label: t("metrics.orientation"), value: t(`orientation.${analysis.orientation}`), icon: ScanSearch },
    {
      label: t("metrics.transparency"),
      value:
        analysis.hasTransparency === null ? t("metrics.notChecked") : analysis.hasTransparency ? t("metrics.detected") : t("metrics.noneFound"),
      icon: Layers
    },
    {
      label: t("metrics.exif"),
      value:
        analysis.hasExifMetadata === null
          ? t("metrics.notChecked")
          : analysis.hasExifMetadata
            ? t("metrics.detected")
            : t("metrics.noneFound"),
      icon: Layers
    },
    {
      label: t("metrics.compressionOpportunity"),
      value: t("metrics.estimatedPercent", { value: analysis.compressionOpportunity }),
      icon: Gauge
    },
    { label: t("metrics.blurryRisk"), value: t(`risk.${analysis.blurryRisk}`), icon: ScanSearch },
    { label: t("metrics.optimizedEstimate"), value: formatBytes(analysis.estimatedOptimizedSize), icon: Gauge }
  ];

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        return (
          <div
            key={metric.label}
            className="rounded-lg border border-slate-200 bg-white/78 p-3 dark:border-slate-800 dark:bg-slate-900/78"
          >
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
              <Icon size={15} aria-hidden="true" />
              <p className="label">{metric.label}</p>
            </div>
            <p className="mt-2 text-sm font-bold capitalize text-slate-950 dark:text-white">
              {metric.value}
            </p>
          </div>
        );
      })}
    </div>
  );
}
