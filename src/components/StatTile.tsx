export function StatTile({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-5 py-4">
      <div className="text-sm text-[var(--text-secondary)]">{label}</div>
      <div className="mt-1 text-2xl font-semibold text-[var(--text-primary)] [font-variant-numeric:tabular-nums]">
        {value}
      </div>
    </div>
  );
}
