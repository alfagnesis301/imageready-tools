import { FileText, Info } from "lucide-react";
import type { ImageAnalysisResult } from "@/lib/imageAnalysis";

export default function MetadataPanel({ analysis }: { analysis: ImageAnalysisResult }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white/82 p-4 dark:border-slate-800 dark:bg-slate-900/82">
      <div className="flex items-center gap-2">
        <FileText size={18} className="text-blue-600 dark:text-blue-300" aria-hidden="true" />
        <h3 className="text-sm font-bold text-slate-950 dark:text-white">SEO and metadata notes</h3>
      </div>
      <dl className="mt-3 grid gap-3 text-sm">
        <div>
          <dt className="label">SEO filename suggestion</dt>
          <dd className="mt-1 font-semibold text-slate-950 dark:text-white">{analysis.seoFilename}</dd>
        </div>
        <div>
          <dt className="label">Alt text structure</dt>
          <dd className="mt-1 leading-6 text-slate-600 dark:text-slate-400">
            {analysis.altTextStructure}
          </dd>
        </div>
        <div className="flex items-start gap-2 rounded-lg bg-slate-50 p-3 text-slate-600 dark:bg-slate-950 dark:text-slate-400">
          <Info size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
          <p>
            Re-exporting through Canvas normally removes EXIF metadata, but this app does not promise
            perfect metadata removal for every browser and file.
          </p>
        </div>
      </dl>
    </div>
  );
}
