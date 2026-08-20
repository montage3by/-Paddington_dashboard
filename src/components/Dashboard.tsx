"use client";

import { useEffect, useState } from "react";
import type { CampaignMetric } from "@/lib/google-ads";
import { StatTile } from "./StatTile";
import { SpendChart } from "./SpendChart";
import { CampaignsTable } from "./CampaignsTable";
import { DateRangeSelect } from "./DateRangeSelect";
import { formatCurrency, formatNumber, formatPercent } from "@/lib/format";

interface ApiResponse {
  source: "mock" | "google-ads";
  campaigns: CampaignMetric[];
}

export function Dashboard() {
  const [range, setRange] = useState("LAST_30_DAYS");
  const [data, setData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    fetch(`/api/google-ads/campaigns?range=${range}`)
      .then(async (res) => {
        const body = await res.json();
        if (!res.ok) throw new Error(body.error || "Request failed");
        return body as ApiResponse;
      })
      .then((body) => {
        if (cancelled) return;
        setData(body);
        setError(null);
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err instanceof Error ? err.message : "Unknown error");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [range]);

  const campaigns = data?.campaigns ?? [];
  const totals = campaigns.reduce(
    (acc, c) => ({
      spend: acc.spend + c.costMicros,
      clicks: acc.clicks + c.clicks,
      impressions: acc.impressions + c.impressions,
      conversions: acc.conversions + c.conversions,
    }),
    { spend: 0, clicks: 0, impressions: 0, conversions: 0 }
  );
  const avgCtr = totals.impressions > 0 ? totals.clicks / totals.impressions : 0;

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold text-[var(--text-primary)]">
            Google Ads performance
          </h1>
          {data?.source === "mock" && (
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              Showing sample data — add Google Ads credentials in{" "}
              <code className="rounded bg-[var(--gridline)] px-1 py-0.5">.env.local</code>{" "}
              to see live numbers. See README for setup steps.
            </p>
          )}
        </div>
        <DateRangeSelect
          value={range}
          onChange={(next) => {
            setLoading(true);
            setRange(next);
          }}
        />
      </div>

      {error && (
        <div className="mb-6 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[color:#d03b3b]">
          {error}
        </div>
      )}

      {loading ? (
        <p className="text-sm text-[var(--text-secondary)]">Loading campaign data…</p>
      ) : (
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <StatTile label="Spend" value={formatCurrency(totals.spend)} />
            <StatTile label="Clicks" value={formatNumber(totals.clicks)} />
            <StatTile label="Conversions" value={formatNumber(totals.conversions)} />
            <StatTile label="Avg. CTR" value={formatPercent(avgCtr)} />
          </div>

          <SpendChart campaigns={campaigns} />
          <CampaignsTable campaigns={campaigns} />
        </div>
      )}
    </div>
  );
}
