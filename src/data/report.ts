import type { CampaignRow, LeadRow } from "@/lib/types";

/**
 * Static report data for Paddington Park ELC — Google Ads, 1 августа – 7
 * сентября 2026. This is the source of truth for the deployed dashboard.
 * To update the numbers for a new period, edit the arrays/objects below
 * and push — no upload UI exists on the site itself.
 *
 * The 1–20 Aug figures came from a pre-aggregated report; the 20–28 Aug,
 * 26–31 Aug, and 1–7 Sep increments each came from a Google Ads
 * campaigns-table screenshot that only gave period totals (no daily
 * breakdown), so days 20 and 26–28 Aug are counted in two overlapping
 * windows each (small double-count, accepted) — 1–7 Sep has no overlap.
 * Daily spend within each screenshot window is split evenly across its
 * days. Leads are exact — pulled per-row from CRM exports by date —
 * filtered to Google Ads (utm_source=google&utm_medium=cpc), Google/GBP
 * (utm_source=gbp), and no-UTM-tag submissions; social (ig), other UTM
 * sources (posev, chatgpt.com), non-admissions form submissions
 * (advisory-committee signup, thank-you pings), and test submissions are
 * excluded. The Youtube Shorts campaign ended 31 Aug (no further spend).
 */

export const REPORT_CURRENCY = "AED";
export const REPORT_PERIOD = "1 августа – 7 сентября 2026";

export const campaignRows: CampaignRow[] = [
  { date: null, campaign: "PPD | Search | Generic Dubai", status: "Активна", impressions: 24671, clicks: 1540, cost: 7189.00, conversions: 0 },
  { date: null, campaign: "PPD | Search | Near Me", status: "Активна", impressions: 14451, clicks: 741, cost: 2027.35, conversions: 0 },
  { date: null, campaign: "PPD | Search | Age Specific", status: "Активна", impressions: 14966, clicks: 841, cost: 4343.44, conversions: 0 },
  { date: null, campaign: "PPD | Search | Location Core", status: "Активна", impressions: 2986, clicks: 297, cost: 1340.55, conversions: 0 },
  { date: null, campaign: "PPD | Search | Brand", status: "Активна", impressions: 938, clicks: 205, cost: 167.73, conversions: 0 },
  { date: null, campaign: "PPD | Search | EYFS British", status: "Активна", impressions: 2778, clicks: 154, cost: 422.82, conversions: 0 },
  { date: null, campaign: "PPD | Search | Premium Communities", status: "Активна", impressions: 1350, clicks: 74, cost: 397.24, conversions: 0 },
  { date: null, campaign: "PPD | Summer Camp | Ages 1-5", status: "Активна", impressions: 709, clicks: 41, cost: 118.84, conversions: 0 },
  { date: null, campaign: "PPD | Summer Camp | Indoor Preschool", status: "Активна", impressions: 842, clicks: 21, cost: 60.61, conversions: 0 },
  { date: null, campaign: "Youtube Shorts", status: "Завершена", impressions: 478800, clicks: 666, cost: 2590.20, conversions: 0 },
  { date: null, campaign: "PPD | Search | Montessori Reggio", status: "Пауза", impressions: 0, clicks: 0, cost: 0, conversions: 0 },
  { date: null, campaign: "PPD | Summer Camp | Local", status: "Пауза", impressions: 0, clicks: 0, cost: 0, conversions: 0 },
  { date: null, campaign: "PPD | Summer Camp | High Intent", status: "Пауза", impressions: 0, clicks: 0, cost: 0, conversions: 0 },
];

const campaignAssignments = [
  ...Array(18).fill("PPD | Search | Generic Dubai"),
  ...Array(13).fill("PPD | Search | Location Core"),
  ...Array(9).fill("PPD | Search | Brand"),
  ...Array(11).fill("PPD | Search | Age Specific"),
  ...Array(4).fill("PPD | Search | Near Me"),
  ...Array(1).fill("PPD | Summer Camp | Ages 1-5"),
  ...Array(19).fill("GBP / прямые Google"),
  ...Array(27).fill("Не определено"),
];

const formAssignments = [
  ...Array(64).fill("Tour in Paddington Park (Pricelist)"),
  ...Array(20).fill("VIRTUAL TOUR"),
  ...Array(13).fill("FOUNDING FAMILY OFFER (main page)"),
  ...Array(4).fill("Tour in Paddington Park"),
  ...Array(1).fill("Не определено"),
];

export const leadRows: LeadRow[] = campaignAssignments.map((campaign, i) => ({
  date: null,
  campaign,
  form: formAssignments[i],
}));

export const dailyOverview: { date: string; cost: number; leads: number }[] = [
  { date: "01.08", cost: 0, leads: 0 },
  { date: "02.08", cost: 0, leads: 0 },
  { date: "03.08", cost: 265, leads: 0 },
  { date: "04.08", cost: 265, leads: 0 },
  { date: "05.08", cost: 265, leads: 0 },
  { date: "06.08", cost: 265, leads: 0 },
  { date: "07.08", cost: 265, leads: 2 },
  { date: "08.08", cost: 265, leads: 2 },
  { date: "09.08", cost: 265, leads: 0 },
  { date: "10.08", cost: 200, leads: 2 },
  { date: "11.08", cost: 200, leads: 5 },
  { date: "12.08", cost: 150, leads: 0 },
  { date: "13.08", cost: 150, leads: 2 },
  { date: "14.08", cost: 150, leads: 0 },
  { date: "15.08", cost: 200, leads: 2 },
  { date: "16.08", cost: 200, leads: 2 },
  { date: "17.08", cost: 250, leads: 2 },
  { date: "18.08", cost: 300, leads: 5 },
  { date: "19.08", cost: 250, leads: 2 },
  { date: "20.08", cost: 924, leads: 5 },
  { date: "21.08", cost: 674, leads: 16 },
  { date: "22.08", cost: 674, leads: 0 },
  { date: "23.08", cost: 674, leads: 8 },
  { date: "24.08", cost: 674, leads: 5 },
  { date: "25.08", cost: 674, leads: 0 },
  { date: "26.08", cost: 1056, leads: 6 },
  { date: "27.08", cost: 1056, leads: 6 },
  { date: "28.08", cost: 1056, leads: 1 },
  { date: "29.08", cost: 382, leads: 1 },
  { date: "30.08", cost: 382, leads: 5 },
  { date: "31.08", cost: 382, leads: 1 },
  { date: "01.09", cost: 652, leads: 0 },
  { date: "02.09", cost: 652, leads: 5 },
  { date: "03.09", cost: 652, leads: 6 },
  { date: "04.09", cost: 652, leads: 2 },
  { date: "05.09", cost: 652, leads: 1 },
  { date: "06.09", cost: 652, leads: 4 },
  { date: "07.09", cost: 652, leads: 4 },
];

export const leadsByDay = [
  { date: "07.08", leads: 2 },
  { date: "08.08", leads: 2 },
  { date: "10.08", leads: 2 },
  { date: "11.08", leads: 5 },
  { date: "13.08", leads: 2 },
  { date: "15.08", leads: 2 },
  { date: "16.08", leads: 2 },
  { date: "17.08", leads: 2 },
  { date: "18.08", leads: 5 },
  { date: "19.08", leads: 2 },
  { date: "20.08", leads: 5 },
  { date: "21.08", leads: 16 },
  { date: "23.08", leads: 8 },
  { date: "24.08", leads: 5 },
  { date: "26.08", leads: 6 },
  { date: "27.08", leads: 6 },
  { date: "28.08", leads: 1 },
  { date: "29.08", leads: 1 },
  { date: "30.08", leads: 5 },
  { date: "31.08", leads: 1 },
  { date: "02.09", leads: 5 },
  { date: "03.09", leads: 6 },
  { date: "04.09", leads: 2 },
  { date: "05.09", leads: 1 },
  { date: "06.09", leads: 4 },
  { date: "07.09", leads: 4 },
];

export const channelSummary = {
  search: { cost: 16067.58, clicks: 3914, impressions: 63691 },
  youtube: { cost: 2590.20, clicks: 666, impressions: 478800, views: 10917 },
};

export const periodComparison = [
  { label: "2–9 июля", cost: 4853, clicks: 1736, leads: null as number | null, cpl: null as number | null },
  { label: "9–16 июля", cost: 3159, clicks: 1112, leads: null, cpl: null },
  { label: "17–24 июля", cost: 2895, clicks: 1024, leads: null, cpl: null },
  { label: "25 июл–2 авг", cost: 2780, clicks: 967, leads: null, cpl: null },
  { label: "3–10 авг", cost: 1015, clicks: 382, leads: null, cpl: null },
  { label: "1 авг – 7 сент", cost: 18658, clicks: 4580, leads: 102, cpl: 183 },
];

export const youtubeStats = {
  viewsTotal: 177200,
  views48h: 58992,
  impressionsGA: 478800,
  clicksGA: 666,
  spend: 2590.20,
  retention: "68.7%",
  avgDuration: "0:41",
  trafficSource: "Ads 100%",
  strategy: "Target CPM",
};

export const searchYoutubeComparison = {
  search: { cost: 16067.58, impressions: 63691, clicks: 3914, ctr: "6.15%", leads: 102, strategy: "Maximize clicks" },
  youtube: { cost: 2590.20, impressions: 478800, clicks: 666, ctr: "0.14%", leads: 0, strategy: "Target CPM" },
};
