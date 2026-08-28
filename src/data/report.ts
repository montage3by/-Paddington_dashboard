import type { CampaignRow, LeadRow } from "@/lib/types";

/**
 * Static report data for Paddington Park ELC — Google Ads, 1–28 августа 2026.
 * This is the source of truth for the deployed dashboard. To update the
 * numbers for a new period, edit the arrays/objects below and push — no
 * upload UI exists on the site itself.
 *
 * The 1–20 Aug figures came from a pre-aggregated report; the 20–28 Aug
 * increment came from a Google Ads campaigns-table screenshot that only
 * gave 9-day totals (no daily breakdown), so day 20 is counted in both
 * halves (small double-count, accepted) and daily spend for 20–28 is
 * split evenly across those 9 days. Leads for 20–28 are exact — pulled
 * per-row from the CRM export by date — filtered to Google Ads (utm_source
 * =google&utm_medium=cpc), Google/GBP (utm_source=gbp), and no-UTM-tag
 * submissions; social (ig), other UTM sources (posev), and non-admissions
 * form submissions (advisory-committee signup, thank-you pings) excluded.
 */

export const REPORT_CURRENCY = "AED";
export const REPORT_PERIOD = "1–28 августа 2026";

export const campaignRows: CampaignRow[] = [
  { date: null, campaign: "PPD | Search | Generic Dubai", status: "Активна", impressions: 20564, clicks: 1288, cost: 4069.41, conversions: 0 },
  { date: null, campaign: "PPD | Search | Near Me", status: "Активна", impressions: 10316, clicks: 555, cost: 1533.71, conversions: 0 },
  { date: null, campaign: "PPD | Search | Age Specific", status: "Активна", impressions: 11833, clicks: 650, cost: 2140.16, conversions: 0 },
  { date: null, campaign: "PPD | Search | Location Core", status: "Активна", impressions: 2239, clicks: 234, cost: 1052.25, conversions: 0 },
  { date: null, campaign: "PPD | Search | Brand", status: "Активна", impressions: 697, clicks: 157, cost: 126.26, conversions: 0 },
  { date: null, campaign: "PPD | Search | EYFS British", status: "Активна", impressions: 1502, clicks: 90, cost: 246.49, conversions: 0 },
  { date: null, campaign: "PPD | Search | Premium Communities", status: "Активна", impressions: 976, clicks: 47, cost: 251.84, conversions: 0 },
  { date: null, campaign: "PPD | Summer Camp | Ages 1-5", status: "Активна", impressions: 655, clicks: 39, cost: 112.90, conversions: 0 },
  { date: null, campaign: "PPD | Summer Camp | Indoor Preschool", status: "Активна", impressions: 715, clicks: 19, cost: 54.64, conversions: 0 },
  { date: null, campaign: "Youtube Shorts", status: "Активна", impressions: 409553, clicks: 625, cost: 2213.80, conversions: 0 },
  { date: null, campaign: "PPD | Search | Montessori Reggio", status: "Пауза", impressions: 0, clicks: 0, cost: 0, conversions: 0 },
  { date: null, campaign: "PPD | Summer Camp | Local", status: "Пауза", impressions: 0, clicks: 0, cost: 0, conversions: 0 },
  { date: null, campaign: "PPD | Summer Camp | High Intent", status: "Пауза", impressions: 0, clicks: 0, cost: 0, conversions: 0 },
];

const campaignAssignments = [
  ...Array(14).fill("PPD | Search | Generic Dubai"),
  ...Array(11).fill("PPD | Search | Location Core"),
  ...Array(8).fill("PPD | Search | Brand"),
  ...Array(8).fill("PPD | Search | Age Specific"),
  ...Array(2).fill("PPD | Search | Near Me"),
  ...Array(1).fill("PPD | Summer Camp | Ages 1-5"),
  ...Array(10).fill("GBP / прямые Google"),
  ...Array(19).fill("Не определено"),
];

const formAssignments = [
  ...Array(45).fill("Tour in Paddington Park (Pricelist)"),
  ...Array(15).fill("VIRTUAL TOUR"),
  ...Array(8).fill("FOUNDING FAMILY OFFER (main page)"),
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
  { date: "26.08", cost: 674, leads: 6 },
  { date: "27.08", cost: 674, leads: 6 },
  { date: "28.08", cost: 674, leads: 1 },
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
];

export const channelSummary = {
  search: { cost: 9587.66, clicks: 3079, impressions: 49497 },
  youtube: { cost: 2213.80, clicks: 625, impressions: 409553, views: 10917 },
};

export const periodComparison = [
  { label: "2–9 июля", cost: 4853, clicks: 1736, leads: null as number | null, cpl: null as number | null },
  { label: "9–16 июля", cost: 3159, clicks: 1112, leads: null, cpl: null },
  { label: "17–24 июля", cost: 2895, clicks: 1024, leads: null, cpl: null },
  { label: "25 июл–2 авг", cost: 2780, clicks: 967, leads: null, cpl: null },
  { label: "3–10 авг", cost: 1015, clicks: 382, leads: null, cpl: null },
  { label: "1–28 авг", cost: 11801, clicks: 3704, leads: 73, cpl: 162 },
];

export const youtubeStats = {
  viewsTotal: 177200,
  views48h: 58992,
  impressionsGA: 409553,
  clicksGA: 625,
  spend: 2213.80,
  retention: "68.7%",
  avgDuration: "0:41",
  trafficSource: "Ads 100%",
  strategy: "Target CPM",
};

export const searchYoutubeComparison = {
  search: { cost: 9587.66, impressions: 49497, clicks: 3079, ctr: "6.22%", leads: 73, strategy: "Maximize clicks" },
  youtube: { cost: 2213.80, impressions: 409553, clicks: 625, ctr: "0.15%", leads: 0, strategy: "Target CPM" },
};
