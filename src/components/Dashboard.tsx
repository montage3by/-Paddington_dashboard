"use client";

import { useMemo, useState } from "react";
import type { Dataset } from "@/lib/types";
import {
  calculateTotals,
  countUnmatchedLeads,
  dailySeries,
  leadsByForm,
  summarizeCampaigns,
} from "@/lib/aggregate";
import { formatCurrency, formatNumber, formatPercent } from "@/lib/format";
import { clearDataset, loadDataset, saveDataset } from "@/lib/dataset-storage";
import { UploadPanel } from "./UploadPanel";
import { StatTile } from "./StatTile";
import { OverviewChart } from "./OverviewChart";
import { CampaignsChart } from "./CampaignsChart";
import { LeadsChart } from "./LeadsChart";
import { CampaignsTable } from "./CampaignsTable";
import { LeadsFormTable } from "./LeadsFormTable";

type Tab = "overview" | "campaigns" | "leads";

export function Dashboard() {
  const [initial] = useState(() => loadDataset());
  const [dataset, setDataset] = useState<Dataset | null>(initial);
  const [currency, setCurrency] = useState(initial?.currency ?? "USD");
  const [tab, setTab] = useState<Tab>("overview");

  function handleDataset(next: Dataset) {
    setDataset(next);
    saveDataset(next);
    if (next.campaigns.length > 0) setTab("overview");
  }

  function handleClear() {
    setDataset(null);
    clearDataset();
  }

  function handleCurrencyChange(next: string) {
    setCurrency(next);
    if (dataset) {
      const updated = { ...dataset, currency: next };
      setDataset(updated);
      saveDataset(updated);
    }
  }

  const campaigns = useMemo(
    () => (dataset ? summarizeCampaigns(dataset) : []),
    [dataset]
  );
  const totals = useMemo(
    () => (dataset ? calculateTotals(dataset) : null),
    [dataset]
  );
  const daily = useMemo(() => (dataset ? dailySeries(dataset) : []), [dataset]);
  const formBreakdown = useMemo(
    () => (dataset ? leadsByForm(dataset.leads) : []),
    [dataset]
  );
  const unmatchedLeads = useMemo(
    () => (dataset ? countUnmatchedLeads(dataset) : 0),
    [dataset]
  );

  const hasData = Boolean(dataset && dataset.campaigns.length > 0);
  const hasLeads = Boolean(dataset && dataset.leads.length > 0);

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="text-xs text-[var(--text-secondary)]">Google Ads · загрузка из файла</div>
          <h1 className="text-xl font-medium text-[var(--text-primary)]">
            Дашборд по рекламным кампаниям
          </h1>
          {hasData && (
            <div className="mt-2 flex flex-wrap gap-1.5">
              <span className="rounded-md bg-[#e6f1fb] px-2.5 py-1 text-xs text-[#185fa5]">
                {campaigns.length} кампаний
              </span>
              {hasLeads && (
                <span className="rounded-md bg-[#eaf3de] px-2.5 py-1 text-xs text-[#3b6d11]">
                  {dataset!.leads.length} лидов из CRM
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="mb-6">
        <UploadPanel
          dataset={dataset}
          currency={currency}
          onCurrencyChange={handleCurrencyChange}
          onDataset={handleDataset}
          onClear={handleClear}
        />
      </div>

      {!hasData ? (
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-6 py-10 text-center text-sm text-[var(--text-secondary)]">
          Загрузите отчёт по кампаниям, чтобы увидеть дашборд.
          <br />
          В Google Ads: Campaigns → значок скачивания → CSV. Лиды из CRM — опционально, для расчёта CPL.
        </div>
      ) : (
        <>
          <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <StatTile label="Расход" value={formatCurrency(totals!.cost, currency)} />
            <StatTile label="Показы" value={formatNumber(totals!.impressions)} />
            <StatTile label="Клики" value={formatNumber(totals!.clicks)} />
            <StatTile label="CTR" value={formatPercent(totals!.ctr)} />
            <StatTile label="Ср. CPC" value={formatCurrency(totals!.avgCpc, currency)} />
            {hasLeads && (
              <>
                <StatTile label="Лиды (CRM)" value={formatNumber(totals!.leads)} tone="good" />
                <StatTile
                  label="CPL"
                  value={totals!.cpl != null ? formatCurrency(totals!.cpl, currency) : "—"}
                />
              </>
            )}
          </div>

          <div className="mb-4 flex flex-wrap gap-1.5">
            {(
              [
                ["overview", "Обзор"],
                ["campaigns", "Кампании"],
                ...(hasLeads ? [["leads", "Лиды"] as const] : []),
              ] as [Tab, string][]
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => setTab(id)}
                className={`rounded-lg border px-3.5 py-1.5 text-xs ${
                  tab === id
                    ? "border-[var(--series-1)] bg-[var(--surface)] font-medium text-[var(--series-1)]"
                    : "border-[var(--border)] bg-[var(--gridline)] text-[var(--text-secondary)]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
            {tab === "overview" && (
              <div className="flex flex-col gap-6">
                <div>
                  <div className="mb-3 text-sm font-medium text-[var(--text-primary)]">
                    Расход{hasLeads ? " и лиды" : ""} по дням
                  </div>
                  {daily.length > 0 ? (
                    <OverviewChart data={daily} currency={currency} />
                  ) : (
                    <p className="text-sm text-[var(--text-secondary)]">
                      В файле нет колонки с датой (Day) — график по дням недоступен.
                    </p>
                  )}
                </div>
                <div>
                  <div className="mb-3 text-sm font-medium text-[var(--text-primary)]">
                    Топ кампаний по расходу
                  </div>
                  <CampaignsChart campaigns={campaigns} currency={currency} />
                </div>
              </div>
            )}

            {tab === "campaigns" && (
              <div>
                <div className="mb-3 text-sm font-medium text-[var(--text-primary)]">
                  Все кампании
                </div>
                <CampaignsTable campaigns={campaigns} currency={currency} showLeads={hasLeads} />
              </div>
            )}

            {tab === "leads" && hasLeads && (
              <div className="flex flex-col gap-6">
                {unmatchedLeads > 0 && (
                  <div className="rounded-lg border border-[#ba7517] bg-[#faeeda] px-3 py-2 text-xs text-[#854f0b]">
                    {unmatchedLeads} лид(ов) не сопоставлены ни с одной кампанией —
                    проверьте, что названия кампаний в файле лидов совпадают с
                    названиями в отчёте Google Ads.
                  </div>
                )}
                <div>
                  <div className="mb-3 text-sm font-medium text-[var(--text-primary)]">
                    Лиды по кампаниям
                  </div>
                  <LeadsChart campaigns={campaigns} />
                </div>
                <div>
                  <div className="mb-3 text-sm font-medium text-[var(--text-primary)]">
                    По типу формы
                  </div>
                  <LeadsFormTable rows={formBreakdown} total={dataset!.leads.length} />
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
