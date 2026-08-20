"use client";

import { useRef, useState } from "react";
import type { Dataset } from "@/lib/types";
import { parseGoogleAdsCsv } from "@/lib/parse-google-ads-csv";
import { parseLeadsCsv } from "@/lib/parse-leads-csv";

export function UploadPanel({
  dataset,
  currency,
  onCurrencyChange,
  onDataset,
  onClear,
}: {
  dataset: Dataset | null;
  currency: string;
  onCurrencyChange: (currency: string) => void;
  onDataset: (dataset: Dataset) => void;
  onClear: () => void;
}) {
  const [error, setError] = useState<string | null>(null);
  const campaignsInput = useRef<HTMLInputElement>(null);
  const leadsInput = useRef<HTMLInputElement>(null);

  async function handleCampaignsFile(file: File) {
    setError(null);
    try {
      const text = await file.text();
      const campaigns = parseGoogleAdsCsv(text);
      onDataset({
        currency,
        campaigns,
        leads: dataset?.leads ?? [],
        campaignsFileName: file.name,
        leadsFileName: dataset?.leadsFileName ?? null,
        uploadedAt: new Date().toISOString(),
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Не удалось прочитать файл");
    }
  }

  async function handleLeadsFile(file: File) {
    setError(null);
    try {
      const text = await file.text();
      const leads = parseLeadsCsv(text);
      onDataset({
        currency,
        campaigns: dataset?.campaigns ?? [],
        leads,
        campaignsFileName: dataset?.campaignsFileName ?? null,
        leadsFileName: file.name,
        uploadedAt: new Date().toISOString(),
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Не удалось прочитать файл");
    }
  }

  return (
    <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
      <div className="mb-3 text-sm font-medium text-[var(--text-primary)]">
        Загрузка данных
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => campaignsInput.current?.click()}
          className="rounded-lg border border-dashed border-[var(--baseline)] px-4 py-3 text-left text-sm hover:border-[var(--series-1)]"
        >
          <div className="font-medium text-[var(--text-primary)]">
            Отчёт по кампаниям (обязательно)
          </div>
          <div className="mt-1 text-xs text-[var(--text-secondary)]">
            {dataset?.campaignsFileName ?? "CSV из Google Ads: Campaigns report"}
          </div>
        </button>
        <input
          ref={campaignsInput}
          type="file"
          accept=".csv,text/csv"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleCampaignsFile(file);
            e.target.value = "";
          }}
        />

        <button
          type="button"
          onClick={() => leadsInput.current?.click()}
          className="rounded-lg border border-dashed border-[var(--baseline)] px-4 py-3 text-left text-sm hover:border-[var(--series-1)]"
        >
          <div className="font-medium text-[var(--text-primary)]">
            Лиды из CRM (опционально)
          </div>
          <div className="mt-1 text-xs text-[var(--text-secondary)]">
            {dataset?.leadsFileName ?? "CSV с колонками Campaign / Date / Form"}
          </div>
        </button>
        <input
          ref={leadsInput}
          type="file"
          accept=".csv,text/csv"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleLeadsFile(file);
            e.target.value = "";
          }}
        />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
        <label className="flex items-center gap-2 text-[var(--text-secondary)]">
          Валюта
          <input
            value={currency}
            onChange={(e) => onCurrencyChange(e.target.value.toUpperCase().slice(0, 3))}
            className="w-16 rounded border border-[var(--border)] bg-transparent px-2 py-1 text-[var(--text-primary)]"
            maxLength={3}
          />
        </label>

        {dataset && (
          <button
            type="button"
            onClick={onClear}
            className="text-[color:#a32d2d] hover:underline"
          >
            Очистить загруженные данные
          </button>
        )}
      </div>

      {error && (
        <div className="mt-3 rounded-lg border border-[color:#a32d2d] bg-[color:#faeeda] px-3 py-2 text-sm text-[color:#a32d2d]">
          {error}
        </div>
      )}
    </div>
  );
}
