import Papa from "papaparse";
import type { LeadRow } from "./types";

const COLUMN_ALIASES: Record<string, string[]> = {
  date: ["date", "дата", "created", "created at", "дата создания"],
  campaign: [
    "campaign",
    "кампания",
    "utm_campaign",
    "utm campaign",
    "source campaign",
  ],
  form: ["form", "форма", "form name", "название формы", "source", "источник"],
};

function normalizeHeader(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

function findColumnIndex(headerRow: string[], key: keyof typeof COLUMN_ALIASES): number {
  const aliases = COLUMN_ALIASES[key];
  return headerRow.findIndex((cell) => aliases.includes(normalizeHeader(cell)));
}

/**
 * Parses a CRM leads export CSV. Column names are matched loosely (English/Russian,
 * common CRM naming) — at minimum a campaign/source column is required so leads can
 * be attributed to campaigns.
 */
export function parseLeadsCsv(csvText: string): LeadRow[] {
  const result = Papa.parse<string[]>(csvText, { skipEmptyLines: true, delimiter: "," });
  const rows = result.data;

  if (rows.length === 0) {
    throw new Error("Файл с лидами пуст.");
  }

  const header = rows[0];
  const campaignCol = findColumnIndex(header, "campaign");
  const formCol = findColumnIndex(header, "form");
  const dateCol = findColumnIndex(header, "date");

  if (campaignCol === -1 && formCol === -1) {
    throw new Error(
      "Не удалось найти колонку с кампанией/источником в файле лидов (ожидались заголовки вроде «Campaign», «UTM Campaign», «Source»)."
    );
  }

  const data: LeadRow[] = [];
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const campaign = (campaignCol !== -1 ? row[campaignCol] : "")?.trim();
    const form = (formCol !== -1 ? row[formCol] : "")?.trim();
    if (!campaign && !form) continue;

    data.push({
      date: dateCol !== -1 ? row[dateCol]?.trim() || null : null,
      campaign: campaign || "Не определено",
      form: form || "Не указано",
    });
  }

  return data;
}
