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
import type { CampaignSummary } from "@/lib/aggregate";

export function LeadsChart({ campaigns }: { campaigns: CampaignSummary[] }) {
  const data = campaigns
    .filter((c) => c.leads > 0)
    .sort((a, b) => b.leads - a.leads)
    .slice(0, 12);

  return (
    <ResponsiveContainer width="100%" height={Math.max(180, data.length * 32)}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{ left: 0, right: 16, top: 4, bottom: 4 }}
      >
        <CartesianGrid stroke="var(--gridline)" horizontal={false} />
        <XAxis
          type="number"
          allowDecimals={false}
          tick={{ fill: "var(--text-muted)", fontSize: 11 }}
          axisLine={{ stroke: "var(--baseline)" }}
          tickLine={false}
        />
        <YAxis
          type="category"
          dataKey="campaign"
          tick={{ fill: "var(--text-secondary)", fontSize: 11 }}
          axisLine={false}
          tickLine={false}
          width={170}
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
          formatter={(value) => [value, "Лиды"]}
        />
        <Bar dataKey="leads" fill="#1baf7a" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
