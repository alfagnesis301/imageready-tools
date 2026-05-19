"use client";

import { useId } from "react";
import type { PresetId } from "@/lib/publishRules";
import { PRESET_ORDER, PUBLISH_RULES } from "@/lib/publishRules";
import { useLanguage } from "./LanguageProvider";

type PlatformPresetSelectorProps = {
  value: PresetId;
  onChange: (preset: PresetId) => void;
};

export default function PlatformPresetSelector({ value, onChange }: PlatformPresetSelectorProps) {
  const { t } = useLanguage();
  const helpId = useId();
  const groupName = `publish-preset-${helpId}`;

  return (
    <fieldset className="grid gap-3" aria-describedby={helpId}>
      <legend className="label">
        {t("preset.label")}
      </legend>
      <ul className="grid gap-2 sm:grid-cols-2">
        {PRESET_ORDER.map((presetId) => (
          <li key={presetId}>
            <label className="block">
              <input
                type="radio"
                name={groupName}
                value={presetId}
                checked={value === presetId}
                onChange={() => onChange(presetId)}
                className="peer sr-only"
              />
              <span className="block rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-slate-700 transition peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-800 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-blue-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:peer-checked:border-blue-400 dark:peer-checked:bg-blue-950/45 dark:peer-checked:text-blue-100">
                {t(`preset.${presetId}`) || PUBLISH_RULES[presetId].label}
              </span>
            </label>
          </li>
        ))}
      </ul>
      <p id={helpId} className="text-xs leading-5 text-slate-500 dark:text-slate-400">
        {t("preset.help")}
      </p>
    </fieldset>
  );
}
