"use client";

import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { DailyPoint } from "@/lib/aggregate";
import { formatCurrency } from "@/lib/format";

export function OverviewChart({
  data,
  currency,
}: {
  data: DailyPoint[];
  currency: string;
}) {
  return (
    <div>
      <ResponsiveContainer width="100%" height={240}>
        <ComposedChart data={data} margin={{ left: 0, right: 8, top: 4, bottom: 4 }}>
          <CartesianGrid stroke="var(--gridline)" vertical={false} />
          <XAxis
            dataKey="date"
            tick={{ fill: "var(--text-muted)", fontSize: 11 }}
            axisLine={{ stroke: "var(--baseline)" }}
            tickLine={false}
          />
          <YAxis
            yAxisId="cost"
            tick={{ fill: "var(--text-muted)", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            width={56}
          />
          <YAxis
            yAxisId="leads"
            orientation="right"
            tick={{ fill: "#1baf7a", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            allowDecimals={false}
            width={32}
          />
          <Tooltip
            contentStyle={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 8,
              fontSize: 12,
              color: "var(--text-primary)",
            }}
            formatter={(value, name) =>
              name === "cost"
                ? [formatCurrency(Number(value), currency), "Расход"]
                : [value, "Лиды"]
            }
          />
          <Bar yAxisId="cost" dataKey="cost" fill="var(--series-1)" radius={[3, 3, 0, 0]} />
          <Line
            yAxisId="leads"
            type="monotone"
            dataKey="leads"
            stroke="#1baf7a"
            strokeWidth={2}
            dot={{ r: 3, fill: "#1baf7a" }}
          />
        </ComposedChart>
      </ResponsiveContainer>
      <div className="mt-2 flex gap-4 text-xs text-[var(--text-secondary)]">
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-[var(--series-1)]" />
          Расход
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-[#1baf7a]" />
          Лиды
        </span>
      </div>
    </div>
  );
}
