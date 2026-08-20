"use client";

const RANGES: { label: string; value: string }[] = [
  { label: "7 days", value: "LAST_7_DAYS" },
  { label: "30 days", value: "LAST_30_DAYS" },
  { label: "90 days", value: "LAST_90_DAYS" },
  { label: "This month", value: "THIS_MONTH" },
];

export function DateRangeSelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="inline-flex rounded-lg border border-[var(--border)] bg-[var(--surface)] p-1">
      {RANGES.map((r) => (
        <button
          key={r.value}
          type="button"
          onClick={() => onChange(r.value)}
          className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
            value === r.value
              ? "bg-[var(--series-1)] text-white"
              : "text-[var(--text-secondary)] hover:bg-[var(--gridline)]"
          }`}
        >
          {r.label}
        </button>
      ))}
    </div>
  );
}
