import { Replace } from "lucide-react";
import type { PublishResult } from "@/lib/publishRules";
import { formatLabel } from "@/lib/publishRules";

export default function FormatRecommendation({ result }: { result: PublishResult }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white/82 p-4 dark:border-slate-800 dark:bg-slate-900/82">
      <div className="flex items-center gap-2">
        <Replace size={18} className="text-violet-600 dark:text-violet-300" aria-hidden="true" />
        <h3 className="text-sm font-bold text-slate-950 dark:text-white">Format recommendation</h3>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
        Recommended format:{" "}
        <span className="font-bold text-slate-950 dark:text-white">
          {formatLabel(result.preset.preferredFormat)}
        </span>
        . {result.formatRecommendation}
      </p>
    </div>
  );
}
