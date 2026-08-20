import type { CampaignMetric } from "@/lib/google-ads";
import { formatCurrency, formatNumber, formatPercent } from "@/lib/format";

export function CampaignsTable({ campaigns }: { campaigns: CampaignMetric[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-[var(--border)] bg-[var(--surface)]">
      <table className="w-full min-w-[640px] text-sm">
        <thead>
          <tr className="border-b border-[var(--border)] text-left text-[var(--text-secondary)]">
            <th className="px-4 py-3 font-medium">Campaign</th>
            <th className="px-4 py-3 font-medium">Status</th>
            <th className="px-4 py-3 text-right font-medium">Impressions</th>
            <th className="px-4 py-3 text-right font-medium">Clicks</th>
            <th className="px-4 py-3 text-right font-medium">CTR</th>
            <th className="px-4 py-3 text-right font-medium">Avg. CPC</th>
            <th className="px-4 py-3 text-right font-medium">Spend</th>
            <th className="px-4 py-3 text-right font-medium">Conversions</th>
          </tr>
        </thead>
        <tbody className="[font-variant-numeric:tabular-nums]">
          {campaigns.map((c) => (
            <tr key={c.campaignId} className="border-b border-[var(--border)] last:border-0">
              <td className="px-4 py-3 text-[var(--text-primary)]">{c.campaignName}</td>
              <td className="px-4 py-3 text-[var(--text-secondary)]">{c.status}</td>
              <td className="px-4 py-3 text-right text-[var(--text-primary)]">
                {formatNumber(c.impressions)}
              </td>
              <td className="px-4 py-3 text-right text-[var(--text-primary)]">
                {formatNumber(c.clicks)}
              </td>
              <td className="px-4 py-3 text-right text-[var(--text-primary)]">
                {formatPercent(c.ctr)}
              </td>
              <td className="px-4 py-3 text-right text-[var(--text-primary)]">
                {formatCurrency(c.averageCpc)}
              </td>
              <td className="px-4 py-3 text-right text-[var(--text-primary)]">
                {formatCurrency(c.costMicros)}
              </td>
              <td className="px-4 py-3 text-right text-[var(--text-primary)]">
                {formatNumber(c.conversions)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
