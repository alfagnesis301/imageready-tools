"use client";

import { AlertTriangle, FileImage, ShieldCheck, UploadCloud } from "lucide-react";
import { ChangeEvent, DragEvent, useRef, useState } from "react";
import { MAX_RECOMMENDED_FILE_SIZE, SUPPORTED_IMAGE_TYPES } from "@/lib/constants";
import { formatBytes } from "@/lib/imageUtils";
import { useLanguage } from "./LanguageProvider";

type ImageUploaderProps = {
  onFileAccepted: (file: File, warning?: string) => void;
  isLoading?: boolean;
};

export default function ImageUploader({ onFileAccepted, isLoading }: ImageUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [message, setMessage] = useState<{ type: "error" | "warning"; text: string } | null>(null);
  const { t } = useLanguage();

  function handleFiles(files: FileList | null) {
    const file = files?.[0];
    if (!file) return;

    const formatSupported =
      SUPPORTED_IMAGE_TYPES.includes(file.type) || /\.(jpe?g|png|webp|gif|svg)$/i.test(file.name);

    if (!formatSupported) {
      setMessage({
        type: "error",
        text: t("uploader.unsupported")
      });
      return;
    }

    const warning =
      file.size > MAX_RECOMMENDED_FILE_SIZE
        ? t("uploader.large", { size: formatBytes(file.size) })
        : undefined;

    setMessage(warning ? { type: "warning", text: warning } : null);
    onFileAccepted(file, warning);
  }

  function onDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(false);
    handleFiles(event.dataTransfer.files);
  }

  function onInputChange(event: ChangeEvent<HTMLInputElement>) {
    handleFiles(event.target.files);
    event.target.value = "";
  }

  return (
    <div className="grid gap-3">
      <div
        onDrop={onDrop}
        onDragOver={(event) => {
          event.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        className={`rounded-lg border-2 border-dashed p-5 text-center transition ${
          isDragging
            ? "border-blue-500 bg-blue-50 dark:border-blue-400 dark:bg-blue-950/40"
            : "border-slate-300 bg-slate-50/80 hover:border-blue-400 hover:bg-blue-50/60 dark:border-slate-700 dark:bg-slate-950/50 dark:hover:border-blue-500 dark:hover:bg-blue-950/30"
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          className="sr-only"
          accept="image/jpeg,image/png,image/webp,image/gif,image/svg+xml,.jpg,.jpeg,.png,.webp,.gif,.svg"
          onChange={onInputChange}
          aria-label={t("uploader.aria")}
        />
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-sm">
          {isLoading ? (
            <FileImage size={25} className="animate-pulse" aria-hidden="true" />
          ) : (
            <UploadCloud size={26} aria-hidden="true" />
          )}
        </div>
        <div className="mt-4 space-y-2">
          <p className="text-base font-bold text-slate-950 dark:text-white">
            {t("uploader.drop")}
          </p>
          <p className="mx-auto max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-400">
            {t("uploader.support")}
          </p>
          <button
            type="button"
            className="button-primary"
            onClick={() => inputRef.current?.click()}
            disabled={isLoading}
          >
            <UploadCloud size={17} aria-hidden="true" />
            {t("action.uploadImage")}
          </button>
        </div>
      </div>

      <div className="flex items-start gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-900 dark:border-emerald-900/70 dark:bg-emerald-950/40 dark:text-emerald-200">
        <ShieldCheck size={17} className="mt-0.5 shrink-0" aria-hidden="true" />
        <p>{t("uploader.privacy")}</p>
      </div>

      {message ? (
        <div
          className={`flex items-start gap-2 rounded-lg border px-3 py-2 text-sm ${
            message.type === "error"
              ? "border-red-200 bg-red-50 text-red-800 dark:border-red-900/70 dark:bg-red-950/40 dark:text-red-200"
              : "border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900/70 dark:bg-amber-950/40 dark:text-amber-200"
          }`}
          role={message.type === "error" ? "alert" : "status"}
        >
          <AlertTriangle size={17} className="mt-0.5 shrink-0" aria-hidden="true" />
          <p>{message.text}</p>
        </div>
      ) : null}
    </div>
  );
}
