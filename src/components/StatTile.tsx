export function StatTile({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone?: "good" | "bad";
}) {
  const toneClass =
    tone === "good"
      ? "text-[#3b6d11]"
      : tone === "bad"
        ? "text-[#a32d2d]"
        : "text-[var(--text-primary)]";

  return (
    <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-5 py-4">
      <div className="text-sm text-[var(--text-secondary)]">{label}</div>
      <div
        className={`mt-1 text-2xl font-semibold [font-variant-numeric:tabular-nums] ${toneClass}`}
      >
        {value}
      </div>
    </div>
  );
}
