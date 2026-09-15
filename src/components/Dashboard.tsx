"use client";

import { useMemo, useState } from "react";
import type { Dataset } from "@/lib/types";
import { calculateTotals, dailySeries, leadsByForm, summarizeCampaigns } from "@/lib/aggregate";
import { formatCurrency, formatNumber, formatPercent } from "@/lib/format";
import {
  DATA_MAX_DATE,
  DATA_MIN_DATE,
  REPORT_CURRENCY,
  campaignRows,
  leadRows,
  periodComparison,
  youtubeLifetimeStats,
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

const currentMonthStart = DATA_MAX_DATE.slice(0, 7) + "-01";
const DEFAULT_START = currentMonthStart >= DATA_MIN_DATE ? currentMonthStart : DATA_MIN_DATE;

function inRange(date: string | null, start: string, end: string): boolean {
  return date === null || (date >= start && date <= end);
}

function formatRangeLabel(start: string, end: string): string {
  const fmt = (d: string) => {
    const [, m, day] = d.split("-");
    const months = ["янв", "фев", "мар", "апр", "мая", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"];
    return `${parseInt(day, 10)} ${months[parseInt(m, 10) - 1]}`;
  };
  return `${fmt(start)} – ${fmt(end)} ${end.slice(0, 4)}`;
}

export function Dashboard() {
  const [tab, setTab] = useState<Tab>("overview");
  const [rangeStart, setRangeStart] = useState(DEFAULT_START);
  const [rangeEnd, setRangeEnd] = useState(DATA_MAX_DATE);
  const currency = REPORT_CURRENCY;

  const dataset: Dataset = useMemo(() => {
    const campaigns = campaignRows.filter((r) => inRange(r.date, rangeStart, rangeEnd));
    const leads = leadRows.filter((r) => inRange(r.date, rangeStart, rangeEnd));
    return {
      currency,
      campaigns,
      leads,
      campaignsFileName: null,
      leadsFileName: null,
      uploadedAt: new Date().toISOString(),
    };
  }, [currency, rangeStart, rangeEnd]);

  const campaigns = useMemo(() => summarizeCampaigns(dataset), [dataset]);
  const activeCampaigns = useMemo(() => campaigns.filter((c) => c.cost > 0), [campaigns]);
  const totals = useMemo(() => calculateTotals(dataset), [dataset]);
  const formBreakdown = useMemo(() => leadsByForm(dataset.leads), [dataset]);
  const daily = useMemo(() => dailySeries(dataset), [dataset]);
  const leadsPerDay = useMemo(
    () => daily.filter((d) => d.leads > 0).map((d) => ({ date: d.date, leads: d.leads })),
    [daily]
  );

  const youtube = campaigns.find((c) => c.campaign === "Youtube Shorts") ?? null;
  const searchOnly = useMemo(() => {
    const impressions = totals.impressions - (youtube?.impressions ?? 0);
    const clicks = totals.clicks - (youtube?.clicks ?? 0);
    const cost = totals.cost - (youtube?.cost ?? 0);
    return { impressions, clicks, cost, ctr: impressions > 0 ? clicks / impressions : 0 };
  }, [totals, youtube]);

  function setPreset(start: string, end: string) {
    setRangeStart(start);
    setRangeEnd(end);
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-center gap-4">
          <Image
            src="/logo-pad-v2.png"
            alt="Paddington Park ELC"
            width={963}
            height={229}
            className="h-auto w-full max-w-[520px]"
            priority
          />
          <div>
            <div className="text-xs text-[var(--text-secondary)]">
              Paddington Park ELC · Google Ads · {formatRangeLabel(rangeStart, rangeEnd)}
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

      <div className="mb-6 flex flex-wrap items-end gap-3 rounded-lg border border-[var(--border)] bg-[var(--gridline)] px-4 py-3">
        <div>
          <label className="block text-[11px] text-[var(--text-secondary)]">С даты</label>
          <input
            type="date"
            value={rangeStart}
            min={DATA_MIN_DATE}
            max={rangeEnd}
            onChange={(e) => setRangeStart(e.target.value)}
            className="mt-0.5 rounded-md border border-[var(--border)] bg-[var(--surface)] px-2 py-1 text-xs text-[var(--text-primary)]"
          />
        </div>
        <div>
          <label className="block text-[11px] text-[var(--text-secondary)]">По дату</label>
          <input
            type="date"
            value={rangeEnd}
            min={rangeStart}
            max={DATA_MAX_DATE}
            onChange={(e) => setRangeEnd(e.target.value)}
            className="mt-0.5 rounded-md border border-[var(--border)] bg-[var(--surface)] px-2 py-1 text-xs text-[var(--text-primary)]"
          />
        </div>
        <div className="flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => setPreset(currentMonthStart, DATA_MAX_DATE)}
            className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1 text-xs text-[var(--text-secondary)]"
          >
            Текущий месяц
          </button>
          <button
            type="button"
            onClick={() => setPreset("2026-08-01", "2026-08-31")}
            className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1 text-xs text-[var(--text-secondary)]"
          >
            Август
          </button>
          <button
            type="button"
            onClick={() => setPreset(DATA_MIN_DATE, DATA_MAX_DATE)}
            className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1 text-xs text-[var(--text-secondary)]"
          >
            Весь период
          </button>
        </div>
        <div className="ml-auto text-[11px] text-[var(--text-secondary)]">
          Данные обновлены по {formatRangeLabel(DATA_MAX_DATE, DATA_MAX_DATE).split(" ").slice(0, 2).join(" ")}
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
        <StatTile label="YouTube views" value={formatNumber(youtubeLifetimeStats.viewsTotal)} />
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
              {daily.length > 0 ? (
                <OverviewChart data={daily} currency={currency} />
              ) : (
                <p className="text-sm text-[var(--text-secondary)]">Нет данных за выбранный период.</p>
              )}
            </div>

            <div>
              <div className="mb-3 text-sm font-medium text-[var(--text-primary)]">Каналы</div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-lg bg-[var(--gridline)] px-4 py-3">
                  <div className="text-xs text-[var(--text-secondary)]">Search campaigns</div>
                  <div className="mt-1 text-lg font-medium text-[var(--text-primary)]">
                    {formatCurrency(searchOnly.cost, currency)}
                  </div>
                  <div className="text-xs text-[var(--text-secondary)]">
                    {formatNumber(searchOnly.clicks)} клика · {formatNumber(searchOnly.impressions)} показов
                  </div>
                </div>
                <div className="rounded-lg bg-[var(--gridline)] px-4 py-3">
                  <div className="text-xs text-[var(--text-secondary)]">YouTube Shorts</div>
                  <div className="mt-1 text-lg font-medium text-[var(--text-primary)]">
                    {formatCurrency(youtube?.cost ?? 0, currency)}
                  </div>
                  <div className="text-xs text-[var(--text-secondary)]">
                    {formatNumber(youtube?.clicks ?? 0)} клика ·{" "}
                    {formatNumber(youtube?.impressions ?? 0)} показов
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
              {leadsPerDay.length > 0 ? (
                <LeadsByDayChart data={leadsPerDay} />
              ) : (
                <p className="text-sm text-[var(--text-secondary)]">Нет лидов за выбранный период.</p>
              )}
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
              <StatTile label="Показы (GA)" value={formatNumber(youtube?.impressions ?? 0)} />
              <StatTile label="Клики (GA)" value={formatNumber(youtube?.clicks ?? 0)} />
              <StatTile label="Расход" value={formatCurrency(youtube?.cost ?? 0, currency)} />
              <StatTile label="Views (всего)" value={formatNumber(youtubeLifetimeStats.viewsTotal)} />
              <StatTile label="Views (48h)" value={formatNumber(youtubeLifetimeStats.views48h)} />
              <StatTile label="Досмотры" value={youtubeLifetimeStats.retention} />
              <StatTile label="Avg. duration" value={youtubeLifetimeStats.avgDuration} />
              <StatTile label="Traffic source" value={youtubeLifetimeStats.trafficSource} />
            </div>
            <p className="text-xs text-[var(--text-secondary)]">
              Views/досмотры/avg. duration — данные YouTube Studio за весь прогон кампании (
              {youtubeLifetimeStats.runDates}), не режутся по выбранному периоду. Показы, клики и
              расход выше — по выбранному периоду из Google Ads.
            </p>

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
                      {formatCurrency(youtube?.cost ?? 0, currency)}
                    </td>
                    <td className="px-4 py-3 text-right text-[var(--text-primary)]">
                      {formatCurrency(searchOnly.cost, currency)}
                    </td>
                  </tr>
                  <tr className="border-b border-[var(--border)]">
                    <td className="px-4 py-3 text-[var(--text-primary)]">Показы</td>
                    <td className="px-4 py-3 text-right text-[var(--text-primary)]">
                      {formatNumber(youtube?.impressions ?? 0)}
                    </td>
                    <td className="px-4 py-3 text-right text-[var(--text-primary)]">
                      {formatNumber(searchOnly.impressions)}
                    </td>
                  </tr>
                  <tr className="border-b border-[var(--border)]">
                    <td className="px-4 py-3 text-[var(--text-primary)]">Клики</td>
                    <td className="px-4 py-3 text-right text-[var(--text-primary)]">
                      {formatNumber(youtube?.clicks ?? 0)}
                    </td>
                    <td className="px-4 py-3 text-right text-[var(--text-primary)]">
                      {formatNumber(searchOnly.clicks)}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-[var(--text-primary)]">CTR</td>
                    <td className="px-4 py-3 text-right text-[var(--text-primary)]">
                      {formatPercent(youtube ? youtube.ctr : 0)}
                    </td>
                    <td className="px-4 py-3 text-right text-[var(--text-primary)]">
                      {formatPercent(searchOnly.ctr)}
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
