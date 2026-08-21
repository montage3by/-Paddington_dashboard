import type { CampaignRow, LeadRow } from "@/lib/types";

/**
 * Static report data for Paddington Park ELC — Google Ads, 1–20 августа 2026.
 * This is the source of truth for the deployed dashboard. To update the
 * numbers for a new period, edit the arrays/objects below and push — no
 * upload UI exists on the site itself.
 */

export const REPORT_CURRENCY = "AED";
export const REPORT_PERIOD = "1–20 августа 2026";

export const campaignRows: CampaignRow[] = [
  { date: null, campaign: "PPD | Search | Generic Dubai", status: "Активна", impressions: 12005, clicks: 730, cost: 1981, conversions: 0 },
  { date: null, campaign: "PPD | Search | Near Me", status: "Активна", impressions: 5874, clicks: 310, cost: 844, conversions: 0 },
  { date: null, campaign: "PPD | Search | Age Specific", status: "Активна", impressions: 6818, clicks: 357, cost: 990, conversions: 0 },
  { date: null, campaign: "PPD | Search | Location Core", status: "Активна", impressions: 1375, clicks: 138, cost: 627, conversions: 0 },
  { date: null, campaign: "PPD | Search | Brand", status: "Активна", impressions: 332, clicks: 76, cost: 61, conversions: 0 },
  { date: null, campaign: "PPD | Search | EYFS British", status: "Активна", impressions: 788, clicks: 52, cost: 137, conversions: 0 },
  { date: null, campaign: "PPD | Search | Premium Communities", status: "Активна", impressions: 497, clicks: 28, cost: 146, conversions: 0 },
  { date: null, campaign: "PPD | Summer Camp | Ages 1-5", status: "Активна", impressions: 482, clicks: 29, cost: 85, conversions: 0 },
  { date: null, campaign: "PPD | Summer Camp | Indoor Preschool", status: "Активна", impressions: 494, clicks: 14, cost: 40, conversions: 0 },
  { date: null, campaign: "Youtube Shorts", status: "Активна", impressions: 150633, clicks: 533, cost: 822, conversions: 0 },
  { date: null, campaign: "PPD | Search | Montessori Reggio", status: "Пауза", impressions: 0, clicks: 0, cost: 0, conversions: 0 },
  { date: null, campaign: "PPD | Summer Camp | Local", status: "Пауза", impressions: 0, clicks: 0, cost: 0, conversions: 0 },
  { date: null, campaign: "PPD | Summer Camp | High Intent", status: "Пауза", impressions: 0, clicks: 0, cost: 0, conversions: 0 },
];

const campaignAssignments = [
  ...Array(8).fill("PPD | Search | Location Core"),
  ...Array(5).fill("PPD | Search | Generic Dubai"),
  ...Array(4).fill("PPD | Search | Brand"),
  ...Array(3).fill("PPD | Search | Age Specific"),
  ...Array(2).fill("PPD | Search | Near Me"),
  ...Array(1).fill("PPD | Summer Camp | Ages 1-5"),
  ...Array(2).fill("GBP / прямые Google"),
  ...Array(1).fill("Не определено"),
];

const formAssignments = [
  ...Array(15).fill("Tour in Paddington Park (Pricelist)"),
  ...Array(5).fill("FOUNDING FAMILY OFFER (main page)"),
  ...Array(3).fill("VIRTUAL TOUR"),
  ...Array(2).fill("Tour in Paddington Park"),
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
  { date: "20.08", cost: 250, leads: 0 },
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
];

export const channelSummary = {
  search: { cost: 4914, clicks: 1734, impressions: 28665 },
  youtube: { cost: 822, clicks: 533, impressions: 150633, views: 10917 },
};

export const periodComparison = [
  { label: "2–9 июля", cost: 4853, clicks: 1736, leads: null as number | null, cpl: null as number | null },
  { label: "9–16 июля", cost: 3159, clicks: 1112, leads: null, cpl: null },
  { label: "17–24 июля", cost: 2895, clicks: 1024, leads: null, cpl: null },
  { label: "25 июл–2 авг", cost: 2780, clicks: 967, leads: null, cpl: null },
  { label: "3–10 авг", cost: 1015, clicks: 382, leads: null, cpl: null },
  { label: "1–20 авг", cost: 5736, clicks: 1767, leads: 26, cpl: 220 },
];

export const youtubeStats = {
  viewsTotal: 177200,
  views48h: 58992,
  impressionsGA: 150633,
  clicksGA: 533,
  spend: 822,
  retention: "68.7%",
  avgDuration: "0:41",
  trafficSource: "Ads 100%",
  strategy: "Target CPM",
};

export const searchYoutubeComparison = {
  search: { cost: 4914, impressions: 28665, clicks: 1734, ctr: "6.05%", leads: 26, strategy: "Maximize clicks" },
  youtube: { cost: 822, impressions: 150633, clicks: 533, ctr: "0.35%", leads: 0, strategy: "Target CPM" },
};
