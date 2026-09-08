import type { CampaignRow, LeadRow } from "@/lib/types";

/**
 * Static report data for Paddington Park ELC — Google Ads. This is the
 * source of truth for the deployed dashboard; there is no upload UI on
 * the site itself. Months are kept as separate, non-cumulative periods
 * (see `periods` below) so August and September numbers don't blend
 * together — the dashboard lets the viewer switch between them.
 *
 * Each period's campaign totals came from a Google Ads campaigns-table
 * screenshot for that exact date range (so no cross-period double
 * counting), except 1–20 Aug which came from a pre-aggregated report and
 * 20–31 Aug which were built from two overlapping screenshot windows
 * (20–28 and 26–31 Aug), so a few late-August days are counted twice
 * within August's own total (small double-count, accepted) — that
 * doesn't affect September, which has its own clean 1–7 Sep screenshot.
 * Daily spend within a screenshot window (no daily breakdown given) is
 * split evenly across its days.
 *
 * Leads are exact — pulled per-row from CRM exports by date — filtered
 * to Google Ads (utm_source=google&utm_medium=cpc), Google/GBP
 * (utm_source=gbp), and no-UTM-tag submissions; social (ig), other UTM
 * sources (posev, chatgpt.com), non-admissions form submissions
 * (advisory-committee signup, thank-you pings), and test submissions are
 * excluded. The Youtube Shorts campaign ran 11–31 Aug and ended before
 * September (zero September activity).
 */

export const REPORT_CURRENCY = "AED";

export interface PeriodData {
  key: string;
  label: string;
  campaignRows: CampaignRow[];
  leadRows: LeadRow[];
  dailyOverview: { date: string; cost: number; leads: number }[];
  leadsByDay: { date: string; leads: number }[];
  channelSummary: {
    search: { cost: number; clicks: number; impressions: number };
    youtube: { cost: number; clicks: number; impressions: number; views: number };
  };
  youtubeStats: {
    viewsTotal: number;
    views48h: number;
    impressionsGA: number;
    clicksGA: number;
    spend: number;
    retention: string;
    avgDuration: string;
    trafficSource: string;
    strategy: string;
  };
  searchYoutubeComparison: {
    search: { cost: number; impressions: number; clicks: number; ctr: string; leads: number; strategy: string };
    youtube: { cost: number; impressions: number; clicks: number; ctr: string; leads: number; strategy: string };
  };
}

function buildLeadRows(campaignAssignments: string[], formAssignments: string[]): LeadRow[] {
  return campaignAssignments.map((campaign, i) => ({ date: null, campaign, form: formAssignments[i] }));
}

const augustData: PeriodData = {
  key: "august",
  label: "1–31 августа 2026",
  campaignRows: [
    { date: null, campaign: "PPD | Search | Generic Dubai", status: "Активна", impressions: 23045, clicks: 1431, cost: 5022.29, conversions: 0 },
    { date: null, campaign: "PPD | Search | Near Me", status: "Активна", impressions: 11595, clicks: 621, cost: 1717.99, conversions: 0 },
    { date: null, campaign: "PPD | Search | Age Specific", status: "Активна", impressions: 13357, clicks: 730, cost: 2683.84, conversions: 0 },
    { date: null, campaign: "PPD | Search | Location Core", status: "Активна", impressions: 2514, clicks: 260, cost: 1170.95, conversions: 0 },
    { date: null, campaign: "PPD | Search | Brand", status: "Активна", impressions: 811, clicks: 180, cost: 146.66, conversions: 0 },
    { date: null, campaign: "PPD | Search | EYFS British", status: "Активна", impressions: 1737, clicks: 102, cost: 280.43, conversions: 0 },
    { date: null, campaign: "PPD | Search | Premium Communities", status: "Активна", impressions: 1134, clicks: 57, cost: 308.96, conversions: 0 },
    { date: null, campaign: "PPD | Summer Camp | Ages 1-5", status: "Активна", impressions: 691, clicks: 41, cost: 118.84, conversions: 0 },
    { date: null, campaign: "PPD | Summer Camp | Indoor Preschool", status: "Активна", impressions: 755, clicks: 19, cost: 54.64, conversions: 0 },
    { date: null, campaign: "Youtube Shorts", status: "Завершена", impressions: 478800, clicks: 666, cost: 2590.20, conversions: 0 },
    { date: null, campaign: "PPD | Search | Montessori Reggio", status: "Пауза", impressions: 0, clicks: 0, cost: 0, conversions: 0 },
    { date: null, campaign: "PPD | Summer Camp | Local", status: "Пауза", impressions: 0, clicks: 0, cost: 0, conversions: 0 },
    { date: null, campaign: "PPD | Summer Camp | High Intent", status: "Пауза", impressions: 0, clicks: 0, cost: 0, conversions: 0 },
  ],
  leadRows: buildLeadRows(
    [
      ...Array(14).fill("PPD | Search | Generic Dubai"),
      ...Array(11).fill("PPD | Search | Location Core"),
      ...Array(8).fill("PPD | Search | Brand"),
      ...Array(8).fill("PPD | Search | Age Specific"),
      ...Array(2).fill("PPD | Search | Near Me"),
      ...Array(1).fill("PPD | Summer Camp | Ages 1-5"),
      ...Array(14).fill("GBP / прямые Google"),
      ...Array(22).fill("Не определено"),
    ],
    [
      ...Array(49).fill("Tour in Paddington Park (Pricelist)"),
      ...Array(16).fill("VIRTUAL TOUR"),
      ...Array(10).fill("FOUNDING FAMILY OFFER (main page)"),
      ...Array(4).fill("Tour in Paddington Park"),
      ...Array(1).fill("Не определено"),
    ]
  ),
  dailyOverview: [
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
  ],
  leadsByDay: [
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
  ],
  channelSummary: {
    search: { cost: 11504.60, clicks: 3441, impressions: 55639 },
    youtube: { cost: 2590.20, clicks: 666, impressions: 478800, views: 10917 },
  },
  youtubeStats: {
    viewsTotal: 177200,
    views48h: 58992,
    impressionsGA: 478800,
    clicksGA: 666,
    spend: 2590.20,
    retention: "68.7%",
    avgDuration: "0:41",
    trafficSource: "Ads 100%",
    strategy: "Target CPM",
  },
  searchYoutubeComparison: {
    search: { cost: 11504.60, impressions: 55639, clicks: 3441, ctr: "6.19%", leads: 80, strategy: "Maximize clicks" },
    youtube: { cost: 2590.20, impressions: 478800, clicks: 666, ctr: "0.14%", leads: 0, strategy: "Target CPM" },
  },
};

const septemberData: PeriodData = {
  key: "september",
  label: "1–7 сентября 2026",
  campaignRows: [
    { date: null, campaign: "PPD | Search | Generic Dubai", status: "Активна", impressions: 1626, clicks: 109, cost: 2166.71, conversions: 0 },
    { date: null, campaign: "PPD | Search | Near Me", status: "Активна", impressions: 2856, clicks: 120, cost: 309.36, conversions: 0 },
    { date: null, campaign: "PPD | Search | Age Specific", status: "Активна", impressions: 1609, clicks: 111, cost: 1659.60, conversions: 0 },
    { date: null, campaign: "PPD | Search | Location Core", status: "Активна", impressions: 472, clicks: 37, cost: 169.60, conversions: 0 },
    { date: null, campaign: "PPD | Search | Brand", status: "Активна", impressions: 127, clicks: 25, cost: 21.07, conversions: 0 },
    { date: null, campaign: "PPD | Search | EYFS British", status: "Активна", impressions: 1041, clicks: 52, cost: 142.39, conversions: 0 },
    { date: null, campaign: "PPD | Search | Premium Communities", status: "Активна", impressions: 216, clicks: 17, cost: 88.28, conversions: 0 },
    { date: null, campaign: "PPD | Summer Camp | Ages 1-5", status: "Активна", impressions: 18, clicks: 0, cost: 0, conversions: 0 },
    { date: null, campaign: "PPD | Summer Camp | Indoor Preschool", status: "Активна", impressions: 87, clicks: 2, cost: 5.97, conversions: 0 },
    { date: null, campaign: "Youtube Shorts", status: "Завершена", impressions: 0, clicks: 0, cost: 0, conversions: 0 },
    { date: null, campaign: "PPD | Search | Montessori Reggio", status: "Пауза", impressions: 0, clicks: 0, cost: 0, conversions: 0 },
    { date: null, campaign: "PPD | Summer Camp | Local", status: "Пауза", impressions: 0, clicks: 0, cost: 0, conversions: 0 },
    { date: null, campaign: "PPD | Summer Camp | High Intent", status: "Пауза", impressions: 0, clicks: 0, cost: 0, conversions: 0 },
  ],
  leadRows: buildLeadRows(
    [
      ...Array(4).fill("PPD | Search | Generic Dubai"),
      ...Array(3).fill("PPD | Search | Age Specific"),
      ...Array(2).fill("PPD | Search | Near Me"),
      ...Array(2).fill("PPD | Search | Location Core"),
      ...Array(1).fill("PPD | Search | Brand"),
      ...Array(5).fill("GBP / прямые Google"),
      ...Array(5).fill("Не определено"),
    ],
    [
      ...Array(15).fill("Tour in Paddington Park (Pricelist)"),
      ...Array(4).fill("VIRTUAL TOUR"),
      ...Array(3).fill("FOUNDING FAMILY OFFER (main page)"),
    ]
  ),
  dailyOverview: [
    { date: "01.09", cost: 652, leads: 0 },
    { date: "02.09", cost: 652, leads: 5 },
    { date: "03.09", cost: 652, leads: 6 },
    { date: "04.09", cost: 652, leads: 2 },
    { date: "05.09", cost: 652, leads: 1 },
    { date: "06.09", cost: 652, leads: 4 },
    { date: "07.09", cost: 652, leads: 4 },
  ],
  leadsByDay: [
    { date: "02.09", leads: 5 },
    { date: "03.09", leads: 6 },
    { date: "04.09", leads: 2 },
    { date: "05.09", leads: 1 },
    { date: "06.09", leads: 4 },
    { date: "07.09", leads: 4 },
  ],
  channelSummary: {
    search: { cost: 4562.98, clicks: 473, impressions: 8052 },
    youtube: { cost: 0, clicks: 0, impressions: 0, views: 0 },
  },
  youtubeStats: {
    viewsTotal: 0,
    views48h: 0,
    impressionsGA: 0,
    clicksGA: 0,
    spend: 0,
    retention: "—",
    avgDuration: "—",
    trafficSource: "—",
    strategy: "Campaign ended 31 Aug",
  },
  searchYoutubeComparison: {
    search: { cost: 4562.98, impressions: 8052, clicks: 473, ctr: "5.87%", leads: 22, strategy: "Maximize clicks" },
    youtube: { cost: 0, impressions: 0, clicks: 0, ctr: "—", leads: 0, strategy: "Ended" },
  },
};

export const periods: PeriodData[] = [augustData, septemberData];
export const defaultPeriodKey = septemberData.key;

export const periodComparison = [
  { label: "2–9 июля", cost: 4853, clicks: 1736, leads: null as number | null, cpl: null as number | null },
  { label: "9–16 июля", cost: 3159, clicks: 1112, leads: null, cpl: null },
  { label: "17–24 июля", cost: 2895, clicks: 1024, leads: null, cpl: null },
  { label: "25 июл–2 авг", cost: 2780, clicks: 967, leads: null, cpl: null },
  { label: "3–10 авг", cost: 1015, clicks: 382, leads: null, cpl: null },
  { label: "1–31 авг", cost: 14095, clicks: 4107, leads: 80, cpl: 176 },
  { label: "1–7 сент", cost: 4563, clicks: 473, leads: 22, cpl: 207 },
];
