import { CheckCircle2, ShieldCheck, Sparkles, UserRoundCheck } from "lucide-react";
import { TRUST_BADGES } from "@/lib/constants";

const icons = [ShieldCheck, UserRoundCheck, Sparkles, CheckCircle2];

export default function TrustBadges() {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4" aria-label="Trust signals">
      {TRUST_BADGES.map((badge, index) => {
        const Icon = icons[index] || CheckCircle2;
        return (
          <li
            key={badge}
            className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white/78 px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900/78 dark:text-slate-200"
          >
            <Icon size={17} className="text-emerald-500" aria-hidden="true" />
            {badge}
          </li>
        );
      })}
    </ul>
  );
}
