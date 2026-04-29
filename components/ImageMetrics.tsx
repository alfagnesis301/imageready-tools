import { Gauge, ImageIcon, Layers, ScanSearch } from "lucide-react";
import type { ImageAnalysisResult } from "@/lib/imageAnalysis";
import { formatBytes } from "@/lib/imageUtils";
import { formatLabel } from "@/lib/publishRules";

export default function ImageMetrics({ analysis }: { analysis: ImageAnalysisResult }) {
  const metrics = [
    { label: "File size", value: formatBytes(analysis.size), icon: Gauge },
    { label: "Dimensions", value: `${analysis.width} x ${analysis.height}px`, icon: ImageIcon },
    { label: "Aspect ratio", value: analysis.ratioLabel, icon: ScanSearch },
    { label: "Megapixels", value: `${analysis.megapixels} MP`, icon: Layers },
    { label: "Format", value: formatLabel(analysis.format), icon: ImageIcon },
    { label: "Orientation", value: analysis.orientation, icon: ScanSearch },
    {
      label: "Transparency",
      value:
        analysis.hasTransparency === null ? "Not checked" : analysis.hasTransparency ? "Detected" : "None found",
      icon: Layers
    },
    {
      label: "Compression opportunity",
      value: `${analysis.compressionOpportunity}% estimated`,
      icon: Gauge
    },
    { label: "Blurry risk", value: analysis.blurryRisk, icon: ScanSearch },
    { label: "Optimized estimate", value: formatBytes(analysis.estimatedOptimizedSize), icon: Gauge }
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
