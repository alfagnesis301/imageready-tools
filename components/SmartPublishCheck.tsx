"use client";

import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import CompressionEstimator from "./CompressionEstimator";
import FormatRecommendation from "./FormatRecommendation";
import ImageMetrics from "./ImageMetrics";
import ImagePreview from "./ImagePreview";
import ImageUploader from "./ImageUploader";
import MetadataPanel from "./MetadataPanel";
import PlatformPresetSelector from "./PlatformPresetSelector";
import PublishScoreCard from "./PublishScoreCard";
import RecommendationPanel from "./RecommendationPanel";
import ResizeSuggestions from "./ResizeSuggestions";
import { analyzeImage, analyzeImageForPreset, type ImageAnalysisResult } from "@/lib/imageAnalysis";
import type { PresetId } from "@/lib/publishRules";

type SmartPublishCheckProps = {
  initialPreset?: PresetId;
  heading?: string;
  description?: string;
};

const PRESET_STORAGE_KEY = "irt-last-preset";

export default function SmartPublishCheck({
  initialPreset = "website-blog",
  heading = "Smart Image Publish Check",
  description = "Upload an image and get a practical readiness score for websites, SEO, social platforms, thumbnails, product images and more."
}: SmartPublishCheckProps) {
  const [preset, setPreset] = useState<PresetId>(initialPreset);
  const [analysis, setAnalysis] = useState<ImageAnalysisResult | null>(null);
  const [objectUrl, setObjectUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [warning, setWarning] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (initialPreset !== "website-blog") return;
    const stored = window.localStorage.getItem(PRESET_STORAGE_KEY) as PresetId | null;
    if (stored) setPreset(stored);
  }, [initialPreset]);

  useEffect(() => {
    window.localStorage.setItem(PRESET_STORAGE_KEY, preset);
  }, [preset]);

  useEffect(() => {
    return () => {
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [objectUrl]);

  const result = useMemo(() => (analysis ? analyzeImageForPreset(analysis, preset) : null), [analysis, preset]);

  async function handleFileAccepted(file: File, fileWarning?: string) {
    setIsLoading(true);
    setError(null);
    setWarning(fileWarning || null);
    setAnalysis(null);
    if (objectUrl) URL.revokeObjectURL(objectUrl);
    setObjectUrl(URL.createObjectURL(file));

    try {
      const nextAnalysis = await analyzeImage(file, preset);
      setAnalysis(nextAnalysis);
    } catch (nextError) {
      setError(
        nextError instanceof Error
          ? nextError.message
          : "This image could not be analyzed in your browser."
      );
      setAnalysis(null);
    } finally {
      setIsLoading(false);
    }
  }

  function clearImage() {
    if (objectUrl) URL.revokeObjectURL(objectUrl);
    setObjectUrl(null);
    setAnalysis(null);
    setWarning(null);
    setError(null);
  }

  return (
    <section id="tool" className="panel scroll-mt-24 p-4 sm:p-6">
      <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="label">Free browser tool</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-normal text-slate-950 sm:text-3xl dark:text-white">
            {heading}
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">{description}</p>
          <div className="mt-5">
            <ImageUploader onFileAccepted={handleFileAccepted} isLoading={isLoading} />
          </div>
        </div>

        <div className="grid gap-4">
          <PlatformPresetSelector value={preset} onChange={setPreset} />

          {warning ? (
            <div className="flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-900 dark:border-amber-900/70 dark:bg-amber-950/40 dark:text-amber-200">
              <AlertCircle size={17} className="mt-0.5 shrink-0" aria-hidden="true" />
              <p>{warning}</p>
            </div>
          ) : null}

          {isLoading ? (
            <div className="rounded-lg border border-slate-200 bg-white/82 p-6 text-center dark:border-slate-800 dark:bg-slate-900/82" role="status">
              <Loader2 size={26} className="mx-auto animate-spin text-blue-600" aria-hidden="true" />
              <p className="mt-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
                Analyzing image locally...
              </p>
            </div>
          ) : null}

          {error ? (
            <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800 dark:border-red-900/70 dark:bg-red-950/40 dark:text-red-200" role="alert">
              <AlertCircle size={17} className="mt-0.5 shrink-0" aria-hidden="true" />
              <p>{error}</p>
            </div>
          ) : null}

          {!analysis && !isLoading && !error ? (
            <div className="rounded-lg border border-slate-200 bg-white/72 p-5 text-sm leading-6 text-slate-600 dark:border-slate-800 dark:bg-slate-900/72 dark:text-slate-400">
              <CheckCircle2 size={20} className="mb-3 text-emerald-500" aria-hidden="true" />
              Choose a preset, upload an image and the results will appear here with score,
              warnings, practical recommendations and export tools.
            </div>
          ) : null}
        </div>
      </div>

      {analysis && result && objectUrl ? (
        <div className="mt-6 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="grid gap-4">
            <ImagePreview analysis={analysis} objectUrl={objectUrl} onClear={clearImage} />
            <ImageMetrics analysis={analysis} />
          </div>
          <div className="grid gap-4">
            <PublishScoreCard result={result} />
            <RecommendationPanel result={result} />
            <FormatRecommendation result={result} />
            <MetadataPanel analysis={analysis} />
          </div>
          <div className="grid gap-4 lg:col-span-2 lg:grid-cols-2">
            <CompressionEstimator analysis={analysis} />
            <ResizeSuggestions analysis={analysis} />
          </div>
        </div>
      ) : null}
    </section>
  );
}
