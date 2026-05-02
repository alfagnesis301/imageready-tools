"use client";

import type { PresetId } from "@/lib/publishRules";
import { PRESET_ORDER, PUBLISH_RULES } from "@/lib/publishRules";
import { useLanguage } from "./LanguageProvider";

type PlatformPresetSelectorProps = {
  value: PresetId;
  onChange: (preset: PresetId) => void;
};

export default function PlatformPresetSelector({ value, onChange }: PlatformPresetSelectorProps) {
  const { t } = useLanguage();

  return (
    <div className="grid gap-2">
      <label htmlFor="preset" className="label">
        {t("preset.label")}
      </label>
      <select
        id="preset"
        value={value}
        onChange={(event) => onChange(event.target.value as PresetId)}
        className="input"
      >
        {PRESET_ORDER.map((presetId) => (
          <option key={presetId} value={presetId}>
            {t(`preset.${presetId}`) || PUBLISH_RULES[presetId].label}
          </option>
        ))}
      </select>
      <p className="text-xs leading-5 text-slate-500 dark:text-slate-400">
        {t("preset.help")}
      </p>
    </div>
  );
}
