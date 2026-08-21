"use client";

import { useMemo, useState } from "react";
import type { Dataset } from "@/lib/types";
import { calculateTotals, leadsByForm, summarizeCampaigns } from "@/lib/aggregate";
import { formatCurrency, formatNumber, formatPercent } from "@/lib/format";
import {
  REPORT_CURRENCY,
  REPORT_PERIOD,
  campaignRows,
  channelSummary,
  dailyOverview,
  leadRows,
  leadsByDay,
  periodComparison,
  searchYoutubeComparison,
  youtubeStats,
} from "@/data/report";
import Image from "next/image";
import { StatTile } from "./StatTile";
import { OverviewChart } from "./OverviewChart";
import { CampaignsChart } from "./CampaignsChart";
import { LeadsChart } from "./LeadsChart";
import { CampaignsTable } from "./CampaignsTable";
import { LeadsFormTable } from "./LeadsFormTable";
import { LeadsByDayChart } from "./LeadsByDayChart";

type Tab = "overview" | "campaigns" | "leads" | "youtube";

const dataset: Dataset = {
  currency: REPORT_CURRENCY,
  campaigns: campaignRows,
  leads: leadRows,
  campaignsFileName: null,
  leadsFileName: null,
  uploadedAt: new Date().toISOString(),
};

export function Dashboard() {
  const [tab, setTab] = useState<Tab>("overview");
  const currency = dataset.currency;

  const campaigns = useMemo(() => summarizeCampaigns(dataset), []);
  const activeCampaigns = useMemo(() => campaigns.filter((c) => c.cost > 0), [campaigns]);
  const totals = useMemo(() => calculateTotals(dataset), []);
  const formBreakdown = useMemo(() => leadsByForm(dataset.leads), []);

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-center gap-4">
          <Image
            src="/logo-pad.png"
            alt="Paddington Park ELC"
            width={963}
            height={229}
            className="h-auto w-full max-w-[520px]"
            priority
          />
          <div>
            <div className="text-xs text-[var(--text-secondary)]">
              Paddington Park ELC · Google Ads · {REPORT_PERIOD}
            </div>
            <h1 className="text-xl font-medium text-[var(--text-primary)]">
              Дашборд по рекламным кампаниям
            </h1>
            <div className="mt-2 flex flex-wrap gap-1.5">
              <span className="rounded-md bg-[#e6f1fb] px-2.5 py-1 text-xs text-[#185fa5]">
                {campaigns.length} кампаний
              </span>
              <span className="rounded-md bg-[#eaf3de] px-2.5 py-1 text-xs text-[#3b6d11]">
                {dataset.leads.length} лидов из CRM
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatTile label="Расход" value={formatCurrency(totals.cost, currency)} />
        <StatTile label="Показы" value={formatNumber(totals.impressions)} />
        <StatTile label="Клики" value={formatNumber(totals.clicks)} />
        <StatTile label="CTR" value={formatPercent(totals.ctr)} />
        <StatTile label="Ср. CPC" value={formatCurrency(totals.avgCpc, currency)} />
        <StatTile label="Лиды (Google)" value={formatNumber(totals.leads)} tone="good" />
        <StatTile
          label="CPL"
          value={totals.cpl != null ? formatCurrency(totals.cpl, currency) : "—"}
        />
        <StatTile label="YouTube views" value={formatNumber(youtubeStats.viewsTotal)} />
      </div>

      <div className="mb-4 flex flex-wrap gap-1.5">
        {(
          [
            ["overview", "Обзор"],
            ["campaigns", "Кампании"],
            ["leads", "Лиды"],
            ["youtube", "YouTube Shorts"],
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
                Расход и лиды по дням
              </div>
              <OverviewChart data={dailyOverview} currency={currency} />
            </div>

            <div>
              <div className="mb-3 text-sm font-medium text-[var(--text-primary)]">Каналы</div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-lg bg-[var(--gridline)] px-4 py-3">
                  <div className="text-xs text-[var(--text-secondary)]">Search campaigns</div>
                  <div className="mt-1 text-lg font-medium text-[var(--text-primary)]">
                    {formatCurrency(channelSummary.search.cost, currency)}
                  </div>
                  <div className="text-xs text-[var(--text-secondary)]">
                    {formatNumber(channelSummary.search.clicks)} клика ·{" "}
                    {formatNumber(channelSummary.search.impressions)} показов
                  </div>
                </div>
                <div className="rounded-lg bg-[var(--gridline)] px-4 py-3">
                  <div className="text-xs text-[var(--text-secondary)]">YouTube Shorts</div>
                  <div className="mt-1 text-lg font-medium text-[var(--text-primary)]">
                    {formatCurrency(channelSummary.youtube.cost, currency)}
                  </div>
                  <div className="text-xs text-[var(--text-secondary)]">
                    {formatNumber(channelSummary.youtube.views)} views ·{" "}
                    {formatNumber(channelSummary.youtube.clicks)} клика ·{" "}
                    {formatNumber(channelSummary.youtube.impressions)} показов
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-3 text-sm font-medium text-[var(--text-primary)]">
                Сравнение периодов
              </div>
              <div className="overflow-x-auto rounded-lg border border-[var(--border)]">
                <table className="w-full min-w-[640px] text-sm">
                  <thead>
                    <tr className="border-b border-[var(--border)] text-left text-[var(--text-secondary)]">
                      <th className="px-4 py-3 font-medium">Метрика</th>
                      {periodComparison.map((p) => (
                        <th key={p.label} className="px-4 py-3 text-right font-medium">
                          {p.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[var(--border)]">
                      <td className="px-4 py-3 text-[var(--text-primary)]">Расход</td>
                      {periodComparison.map((p) => (
                        <td key={p.label} className="px-4 py-3 text-right text-[var(--text-primary)]">
                          {formatCurrency(p.cost, currency)}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-[var(--text-primary)]">Клики</td>
                      {periodComparison.map((p) => (
                        <td key={p.label} className="px-4 py-3 text-right text-[var(--text-primary)]">
                          {formatNumber(p.clicks)}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {tab === "campaigns" && (
          <div className="flex flex-col gap-6">
            <div>
              <div className="mb-3 text-sm font-medium text-[var(--text-primary)]">
                Активные кампании
              </div>
              <CampaignsTable campaigns={activeCampaigns} currency={currency} showLeads={false} />
            </div>
            <div>
              <div className="mb-3 text-sm font-medium text-[var(--text-primary)]">
                Расход по активным кампаниям
              </div>
              <CampaignsChart campaigns={activeCampaigns} currency={currency} />
            </div>
          </div>
        )}

        {tab === "leads" && (
          <div className="flex flex-col gap-6">
            <div>
              <div className="mb-3 text-sm font-medium text-[var(--text-primary)]">
                Лиды по кампаниям
              </div>
              <LeadsChart campaigns={campaigns} />
            </div>
            <div>
              <div className="mb-3 text-sm font-medium text-[var(--text-primary)]">
                Лиды по дням
              </div>
              <LeadsByDayChart data={leadsByDay} />
            </div>
            <div>
              <div className="mb-3 text-sm font-medium text-[var(--text-primary)]">
                По типу формы
              </div>
              <LeadsFormTable rows={formBreakdown} total={dataset.leads.length} />
            </div>
          </div>
        )}

        {tab === "youtube" && (
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <StatTile label="Views (всего)" value={formatNumber(youtubeStats.viewsTotal)} />
              <StatTile label="Views (48h)" value={formatNumber(youtubeStats.views48h)} />
              <StatTile label="Показы (GA)" value={formatNumber(youtubeStats.impressionsGA)} />
              <StatTile label="Клики (GA)" value={formatNumber(youtubeStats.clicksGA)} />
              <StatTile label="Расход" value={formatCurrency(youtubeStats.spend, currency)} />
              <StatTile label="Досмотры" value={youtubeStats.retention} />
              <StatTile label="Avg. duration" value={youtubeStats.avgDuration} />
              <StatTile label="Traffic source" value={youtubeStats.trafficSource} />
            </div>

            <div className="overflow-x-auto rounded-lg border border-[var(--border)]">
              <table className="w-full min-w-[480px] text-sm">
                <thead>
                  <tr className="border-b border-[var(--border)] text-left text-[var(--text-secondary)]">
                    <th className="px-4 py-3 font-medium">Метрика</th>
                    <th className="px-4 py-3 text-right font-medium">YouTube Shorts</th>
                    <th className="px-4 py-3 text-right font-medium">Search (total)</th>
                  </tr>
                </thead>
                <tbody className="[font-variant-numeric:tabular-nums]">
                  <tr className="border-b border-[var(--border)]">
                    <td className="px-4 py-3 text-[var(--text-primary)]">Расход</td>
                    <td className="px-4 py-3 text-right text-[var(--text-primary)]">
                      {formatCurrency(searchYoutubeComparison.youtube.cost, currency)}
                    </td>
                    <td className="px-4 py-3 text-right text-[var(--text-primary)]">
                      {formatCurrency(searchYoutubeComparison.search.cost, currency)}
                    </td>
                  </tr>
                  <tr className="border-b border-[var(--border)]">
                    <td className="px-4 py-3 text-[var(--text-primary)]">Показы</td>
                    <td className="px-4 py-3 text-right text-[var(--text-primary)]">
                      {formatNumber(searchYoutubeComparison.youtube.impressions)}
                    </td>
                    <td className="px-4 py-3 text-right text-[var(--text-primary)]">
                      {formatNumber(searchYoutubeComparison.search.impressions)}
                    </td>
                  </tr>
                  <tr className="border-b border-[var(--border)]">
                    <td className="px-4 py-3 text-[var(--text-primary)]">Клики</td>
                    <td className="px-4 py-3 text-right text-[var(--text-primary)]">
                      {formatNumber(searchYoutubeComparison.youtube.clicks)}
                    </td>
                    <td className="px-4 py-3 text-right text-[var(--text-primary)]">
                      {formatNumber(searchYoutubeComparison.search.clicks)}
                    </td>
                  </tr>
                  <tr className="border-b border-[var(--border)]">
                    <td className="px-4 py-3 text-[var(--text-primary)]">CTR</td>
                    <td className="px-4 py-3 text-right text-[var(--text-primary)]">
                      {searchYoutubeComparison.youtube.ctr}
                    </td>
                    <td className="px-4 py-3 text-right text-[var(--text-primary)]">
                      {searchYoutubeComparison.search.ctr}
                    </td>
                  </tr>
                  <tr className="border-b border-[var(--border)]">
                    <td className="px-4 py-3 text-[var(--text-primary)]">Лиды (CRM)</td>
                    <td className="px-4 py-3 text-right text-[var(--text-primary)]">
                      {searchYoutubeComparison.youtube.leads}
                    </td>
                    <td className="px-4 py-3 text-right text-[var(--text-primary)]">
                      {searchYoutubeComparison.search.leads}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-[var(--text-primary)]">Стратегия</td>
                    <td className="px-4 py-3 text-right text-[var(--text-primary)]">
                      {searchYoutubeComparison.youtube.strategy}
                    </td>
                    <td className="px-4 py-3 text-right text-[var(--text-primary)]">
                      {searchYoutubeComparison.search.strategy}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
