"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { CampaignMetric } from "@/lib/google-ads";
import { formatCurrency } from "@/lib/format";

export function SpendChart({ campaigns }: { campaigns: CampaignMetric[] }) {
  const data = campaigns
    .map((c) => ({ name: c.campaignName, spend: c.costMicros / 1_000_000 }))
    .sort((a, b) => b.spend - a.spend);

  return (
    <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
      <div className="mb-4 text-sm font-medium text-[var(--text-primary)]">
        Spend by campaign
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data} margin={{ left: 0, right: 8, top: 4, bottom: 4 }}>
          <CartesianGrid stroke="var(--gridline)" vertical={false} />
          <XAxis
            dataKey="name"
            tick={{ fill: "var(--text-muted)", fontSize: 12 }}
            axisLine={{ stroke: "var(--baseline)" }}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "var(--text-muted)", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v: number) => `$${v.toLocaleString()}`}
            width={64}
          />
          <Tooltip
            cursor={{ fill: "var(--gridline)" }}
            contentStyle={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 8,
              fontSize: 12,
              color: "var(--text-primary)",
            }}
            formatter={(value) => [formatCurrency(Number(value) * 1_000_000), "Spend"]}
          />
          <Bar dataKey="spend" fill="var(--series-1)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
