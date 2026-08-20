import type { CampaignSummary } from "@/lib/aggregate";
import { formatCurrency, formatNumber, formatPercent } from "@/lib/format";

export function CampaignsTable({
  campaigns,
  currency,
  showLeads,
}: {
  campaigns: CampaignSummary[];
  currency: string;
  showLeads: boolean;
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-[var(--border)] bg-[var(--surface)]">
      <table className="w-full min-w-[720px] text-sm">
        <thead>
          <tr className="border-b border-[var(--border)] text-left text-[var(--text-secondary)]">
            <th className="px-4 py-3 font-medium">Кампания</th>
            <th className="px-4 py-3 font-medium">Статус</th>
            <th className="px-4 py-3 text-right font-medium">Показы</th>
            <th className="px-4 py-3 text-right font-medium">Клики</th>
            <th className="px-4 py-3 text-right font-medium">CTR</th>
            <th className="px-4 py-3 text-right font-medium">Ср. CPC</th>
            <th className="px-4 py-3 text-right font-medium">Расход</th>
            {showLeads && <th className="px-4 py-3 text-right font-medium">Лиды</th>}
            {showLeads && <th className="px-4 py-3 text-right font-medium">CPL</th>}
          </tr>
        </thead>
        <tbody className="[font-variant-numeric:tabular-nums]">
          {campaigns.map((c) => (
            <tr key={c.campaign} className="border-b border-[var(--border)] last:border-0">
              <td className="px-4 py-3 text-[var(--text-primary)]">{c.campaign}</td>
              <td className="px-4 py-3 text-[var(--text-secondary)]">{c.status}</td>
              <td className="px-4 py-3 text-right text-[var(--text-primary)]">
                {formatNumber(c.impressions)}
              </td>
              <td className="px-4 py-3 text-right text-[var(--text-primary)]">
                {formatNumber(c.clicks)}
              </td>
              <td className="px-4 py-3 text-right text-[var(--text-primary)]">
                {c.impressions > 0 ? formatPercent(c.ctr) : "—"}
              </td>
              <td className="px-4 py-3 text-right text-[var(--text-primary)]">
                {c.clicks > 0 ? formatCurrency(c.avgCpc, currency) : "—"}
              </td>
              <td className="px-4 py-3 text-right text-[var(--text-primary)]">
                {formatCurrency(c.cost, currency)}
              </td>
              {showLeads && (
                <td className="px-4 py-3 text-right text-[var(--text-primary)]">
                  {c.leads > 0 ? formatNumber(c.leads) : "—"}
                </td>
              )}
              {showLeads && (
                <td className="px-4 py-3 text-right text-[var(--text-primary)]">
                  {c.cpl != null ? formatCurrency(c.cpl, currency) : "—"}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
