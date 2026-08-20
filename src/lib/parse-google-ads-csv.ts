import Papa from "papaparse";
import type { CampaignRow } from "./types";

const COLUMN_ALIASES: Record<string, string[]> = {
  campaign: ["campaign", "campaign name", "кампания", "название кампании"],
  status: [
    "campaign state",
    "status",
    "статус",
    "статус кампании",
    "состояние кампании",
  ],
  date: ["day", "date", "день", "дата"],
  impressions: ["impr.", "impressions", "impr", "показы"],
  clicks: ["clicks", "клики"],
  cost: ["cost", "расходы", "стоимость", "cost (aed)", "cost, aed"],
  conversions: ["conversions", "конверсии"],
};

function normalizeHeader(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

/** Parses a number formatted with thousands separators, currency symbols, or a trailing "%". */
function parseNumber(raw: string | undefined): number {
  if (!raw) return 0;
  let s = raw.trim().replace(/[^\d.,-]/g, "");
  if (!s) return 0;

  const lastComma = s.lastIndexOf(",");
  const lastDot = s.lastIndexOf(".");

  if (lastComma > -1 && lastDot > -1) {
    // Whichever separator appears last is the decimal point.
    s = lastComma > lastDot
      ? s.replace(/\./g, "").replace(",", ".")
      : s.replace(/,/g, "");
  } else if (lastComma > -1) {
    // A single comma with exactly two trailing digits is a decimal separator;
    // otherwise treat it as a thousands separator (e.g. "1,234").
    const decimals = s.length - lastComma - 1;
    s = decimals === 2 ? s.replace(",", ".") : s.replace(/,/g, "");
  }

  const num = parseFloat(s);
  return Number.isFinite(num) ? num : 0;
}

function findColumnIndex(headerRow: string[], key: keyof typeof COLUMN_ALIASES): number {
  const aliases = COLUMN_ALIASES[key];
  return headerRow.findIndex((cell) => aliases.includes(normalizeHeader(cell)));
}

/**
 * Parses a Google Ads "Campaigns" report CSV export. These exports typically have
 * one or two metadata lines before the real header row, and a trailing "Total"
 * row — this scans for the row that actually contains recognizable column names.
 */
export function parseGoogleAdsCsv(csvText: string): CampaignRow[] {
  const result = Papa.parse<string[]>(csvText, { skipEmptyLines: true, delimiter: "," });
  const rows = result.data;

  let headerIndex = -1;
  let campaignCol = -1;

  for (let i = 0; i < rows.length; i++) {
    const idx = findColumnIndex(rows[i], "campaign");
    if (idx !== -1) {
      headerIndex = i;
      campaignCol = idx;
      break;
    }
  }

  if (headerIndex === -1) {
    throw new Error(
      "Не удалось найти колонку «Campaign» / «Кампания» в файле. Экспортируйте отчёт по кампаниям из Google Ads (Campaigns report) в формате CSV."
    );
  }

  const header = rows[headerIndex];
  const statusCol = findColumnIndex(header, "status");
  const dateCol = findColumnIndex(header, "date");
  const impressionsCol = findColumnIndex(header, "impressions");
  const clicksCol = findColumnIndex(header, "clicks");
  const costCol = findColumnIndex(header, "cost");
  const conversionsCol = findColumnIndex(header, "conversions");

  const data: CampaignRow[] = [];

  for (let i = headerIndex + 1; i < rows.length; i++) {
    const row = rows[i];
    const campaign = row[campaignCol]?.trim();
    if (!campaign || /^total/i.test(campaign) || /^всего/i.test(campaign)) continue;

    data.push({
      date: dateCol !== -1 ? row[dateCol]?.trim() || null : null,
      campaign,
      status: statusCol !== -1 ? row[statusCol]?.trim() || "" : "",
      impressions: parseNumber(row[impressionsCol]),
      clicks: parseNumber(row[clicksCol]),
      cost: parseNumber(row[costCol]),
      conversions: parseNumber(row[conversionsCol]),
    });
  }

  if (data.length === 0) {
    throw new Error("В файле не найдено ни одной строки с данными по кампаниям.");
  }

  return data;
}
