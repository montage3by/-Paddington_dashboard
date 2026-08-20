import { formatNumber, formatPercent } from "@/lib/format";

export function LeadsFormTable({
  rows,
  total,
}: {
  rows: { form: string; count: number }[];
  total: number;
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-[var(--border)] bg-[var(--surface)]">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[var(--border)] text-left text-[var(--text-secondary)]">
            <th className="px-4 py-3 font-medium">Форма</th>
            <th className="px-4 py-3 text-right font-medium">Лидов</th>
            <th className="px-4 py-3 text-right font-medium">%</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.form} className="border-b border-[var(--border)] last:border-0">
              <td className="px-4 py-3 text-[var(--text-primary)]">{r.form}</td>
              <td className="px-4 py-3 text-right text-[var(--text-primary)]">
                {formatNumber(r.count)}
              </td>
              <td className="px-4 py-3 text-right text-[var(--text-secondary)]">
                {total > 0 ? formatPercent(r.count / total) : "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
