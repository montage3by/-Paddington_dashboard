import type { CampaignRow, LeadRow } from "@/lib/types";

/**
 * Static report data for Paddington Park ELC — Google Ads. This is the
 * source of truth for the deployed dashboard; there is no upload UI on
 * the site itself — the dashboard's date-range picker filters these
 * arrays client-side, so any range within [DATA_MIN_DATE, DATA_MAX_DATE]
 * can be viewed.
 *
 * Campaign rows: Google Ads only reports period totals per campaign (no
 * daily breakdown), pulled from screenshots for five windows: 1–20 Aug
 * (pre-aggregated report), 20–28 Aug, 26–31 Aug, 1–7 Sep, and 8–14 Sep.
 * Each window's per-campaign totals are split evenly across that
 * window's days below — so day-level numbers within a window are an
 * approximation, but any range that aligns with (or spans) whole windows
 * sums back to the real reported totals. The 20–28 and 26–31 Aug windows
 * overlap on 26–28 Aug, so those three days carry cost/impressions from
 * both windows (small double-count, accepted); September windows don't
 * overlap.
 *
 * Lead rows: exact per-row dates from CRM exports for 20 Aug onward,
 * filtered to Google Ads (utm_source=google&utm_medium=cpc, attributed
 * to the matching campaign), Google/GBP (utm_source=gbp), and no-UTM-tag
 * submissions; social (ig), other UTM sources (posev, chatgpt.com),
 * non-admissions form submissions (advisory-committee signup, thank-you
 * pings), and test submissions are excluded. 1–19 Aug predates row-level
 * CRM exports — those 26 leads come from a pre-aggregated report that
 * only gave daily counts and separate campaign/form totals, so their
 * dates are exact but the campaign+form pairing on each is an
 * approximation (marginal totals are correct, the joint pairing isn't
 * verified per-row).
 *
 * The Youtube Shorts campaign ran 11–31 Aug and had zero September
 * activity (ended before 1 Sep).
 */

export const REPORT_CURRENCY = "AED";
export const DATA_MIN_DATE = "2026-08-01";
export const DATA_MAX_DATE = "2026-09-14";

function datesBetween(start: string, end: string): string[] {
  const dates: string[] = [];
  const cur = new Date(start + "T00:00:00Z");
  const last = new Date(end + "T00:00:00Z");
  while (cur <= last) {
    dates.push(cur.toISOString().slice(0, 10));
    cur.setUTCDate(cur.getUTCDate() + 1);
  }
  return dates;
}

function spread(
  campaign: string,
  status: string,
  totals: { impressions: number; clicks: number; cost: number },
  dates: string[]
): CampaignRow[] {
  const n = dates.length;
  return dates.map((date) => ({
    date,
    campaign,
    status,
    impressions: totals.impressions / n,
    clicks: totals.clicks / n,
    cost: totals.cost / n,
    conversions: 0,
  }));
}

const windowA = datesBetween("2026-08-03", "2026-08-20"); // pre-aggregated 1–20 Aug report (no spend before Aug 3)
const windowB = datesBetween("2026-08-20", "2026-08-28"); // screenshot totals for 20–28 Aug
const windowC = datesBetween("2026-08-26", "2026-08-31"); // screenshot totals for 26–31 Aug
const windowD = datesBetween("2026-09-01", "2026-09-07"); // screenshot totals for 1–7 Sep
const windowE = datesBetween("2026-09-08", "2026-09-14"); // screenshot totals for 8–14 Sep (partial — see header note)

const CAMPAIGN = {
  genericDubai: "PPD | Search | Generic Dubai",
  nearMe: "PPD | Search | Near Me",
  ageSpecific: "PPD | Search | Age Specific",
  locationCore: "PPD | Search | Location Core",
  brand: "PPD | Search | Brand",
  eyfs: "PPD | Search | EYFS British",
  premium: "PPD | Search | Premium Communities",
  summerCampAges: "PPD | Summer Camp | Ages 1-5",
  summerCampIndoor: "PPD | Summer Camp | Indoor Preschool",
  youtube: "Youtube Shorts",
  gbp: "GBP / прямые Google",
  unknown: "Не определено",
};

export const campaignRows: CampaignRow[] = [
  // 1–20 Aug (pre-aggregated report totals)
  ...spread(CAMPAIGN.genericDubai, "Активна", { impressions: 12005, clicks: 730, cost: 1981 }, windowA),
  ...spread(CAMPAIGN.nearMe, "Активна", { impressions: 5874, clicks: 310, cost: 844 }, windowA),
  ...spread(CAMPAIGN.ageSpecific, "Активна", { impressions: 6818, clicks: 357, cost: 990 }, windowA),
  ...spread(CAMPAIGN.locationCore, "Активна", { impressions: 1375, clicks: 138, cost: 627 }, windowA),
  ...spread(CAMPAIGN.brand, "Активна", { impressions: 332, clicks: 76, cost: 61 }, windowA),
  ...spread(CAMPAIGN.eyfs, "Активна", { impressions: 788, clicks: 52, cost: 137 }, windowA),
  ...spread(CAMPAIGN.premium, "Активна", { impressions: 497, clicks: 28, cost: 146 }, windowA),
  ...spread(CAMPAIGN.summerCampAges, "Активна", { impressions: 482, clicks: 29, cost: 85 }, windowA),
  ...spread(CAMPAIGN.summerCampIndoor, "Активна", { impressions: 494, clicks: 14, cost: 40 }, windowA),
  ...spread(CAMPAIGN.youtube, "Активна", { impressions: 150633, clicks: 533, cost: 822 }, windowA),

  // 20–28 Aug (screenshot totals)
  ...spread(CAMPAIGN.genericDubai, "Активна", { impressions: 8559, clicks: 558, cost: 2088.41 }, windowB),
  ...spread(CAMPAIGN.nearMe, "Активна", { impressions: 4442, clicks: 245, cost: 689.71 }, windowB),
  ...spread(CAMPAIGN.ageSpecific, "Активна", { impressions: 5015, clicks: 293, cost: 1150.16 }, windowB),
  ...spread(CAMPAIGN.locationCore, "Активна", { impressions: 864, clicks: 96, cost: 425.25 }, windowB),
  ...spread(CAMPAIGN.brand, "Активна", { impressions: 365, clicks: 81, cost: 65.26 }, windowB),
  ...spread(CAMPAIGN.eyfs, "Активна", { impressions: 714, clicks: 38, cost: 109.49 }, windowB),
  ...spread(CAMPAIGN.premium, "Активна", { impressions: 479, clicks: 19, cost: 105.84 }, windowB),
  ...spread(CAMPAIGN.summerCampAges, "Активна", { impressions: 173, clicks: 10, cost: 27.90 }, windowB),
  ...spread(CAMPAIGN.summerCampIndoor, "Активна", { impressions: 221, clicks: 5, cost: 14.64 }, windowB),
  ...spread(CAMPAIGN.youtube, "Активна", { impressions: 258920, clicks: 92, cost: 1391.80 }, windowB),

  // 26–31 Aug (screenshot totals)
  ...spread(CAMPAIGN.genericDubai, "Активна", { impressions: 2481, clicks: 143, cost: 952.88 }, windowC),
  ...spread(CAMPAIGN.nearMe, "Активна", { impressions: 1279, clicks: 66, cost: 184.28 }, windowC),
  ...spread(CAMPAIGN.ageSpecific, "Активна", { impressions: 1524, clicks: 80, cost: 543.68 }, windowC),
  ...spread(CAMPAIGN.locationCore, "Активна", { impressions: 275, clicks: 26, cost: 118.70 }, windowC),
  ...spread(CAMPAIGN.brand, "Активна", { impressions: 114, clicks: 23, cost: 20.40 }, windowC),
  ...spread(CAMPAIGN.eyfs, "Активна", { impressions: 235, clicks: 12, cost: 33.94 }, windowC),
  ...spread(CAMPAIGN.premium, "Активна", { impressions: 158, clicks: 10, cost: 57.12 }, windowC),
  ...spread(CAMPAIGN.summerCampAges, "Активна", { impressions: 36, clicks: 2, cost: 5.94 }, windowC),
  ...spread(CAMPAIGN.summerCampIndoor, "Активна", { impressions: 40, clicks: 0, cost: 0 }, windowC),
  ...spread(CAMPAIGN.youtube, "Активна", { impressions: 69247, clicks: 41, cost: 376.40 }, windowC),

  // 1–7 Sep (screenshot totals; Youtube Shorts ended before September)
  ...spread(CAMPAIGN.genericDubai, "Активна", { impressions: 1626, clicks: 109, cost: 2166.71 }, windowD),
  ...spread(CAMPAIGN.nearMe, "Активна", { impressions: 2856, clicks: 120, cost: 309.36 }, windowD),
  ...spread(CAMPAIGN.ageSpecific, "Активна", { impressions: 1609, clicks: 111, cost: 1659.60 }, windowD),
  ...spread(CAMPAIGN.locationCore, "Активна", { impressions: 472, clicks: 37, cost: 169.60 }, windowD),
  ...spread(CAMPAIGN.brand, "Активна", { impressions: 127, clicks: 25, cost: 21.07 }, windowD),
  ...spread(CAMPAIGN.eyfs, "Активна", { impressions: 1041, clicks: 52, cost: 142.39 }, windowD),
  ...spread(CAMPAIGN.premium, "Активна", { impressions: 216, clicks: 17, cost: 88.28 }, windowD),
  ...spread(CAMPAIGN.summerCampAges, "Активна", { impressions: 18, clicks: 0, cost: 0 }, windowD),
  ...spread(CAMPAIGN.summerCampIndoor, "Активна", { impressions: 87, clicks: 2, cost: 5.97 }, windowD),

  // 8–14 Sep (screenshot totals, exact — cost derived from Impr × Avg.
  // CPM / 1000, cross-checked against the account total and clicks sum)
  ...spread(CAMPAIGN.eyfs, "Активна", { impressions: 1641, clicks: 92, cost: 254.30 }, windowE),
  ...spread(CAMPAIGN.genericDubai, "Активна", { impressions: 1272, clicks: 73, cost: 1157.70 }, windowE),
  ...spread(CAMPAIGN.locationCore, "Активна", { impressions: 827, clicks: 71, cost: 316.90 }, windowE),
  ...spread(CAMPAIGN.ageSpecific, "Активна", { impressions: 798, clicks: 49, cost: 788.30 }, windowE),
  ...spread(CAMPAIGN.premium, "Активна", { impressions: 387, clicks: 36, cost: 200.70 }, windowE),
  ...spread(CAMPAIGN.brand, "Активна", { impressions: 156, clicks: 36, cost: 31.68 }, windowE),
  ...spread(CAMPAIGN.summerCampIndoor, "Активна", { impressions: 515, clicks: 10, cost: 29.08 }, windowE),
  ...spread(CAMPAIGN.summerCampAges, "Активна", { impressions: 26, clicks: 1, cost: 2.86 }, windowE),
  ...spread(CAMPAIGN.nearMe, "Активна", { impressions: 3644, clicks: 184, cost: 497.55 }, windowE),

  // Paused all along — always shown (date: null rows aren't range-filtered), zero spend
  { date: null, campaign: "PPD | Search | Montessori Reggio", status: "Пауза", impressions: 0, clicks: 0, cost: 0, conversions: 0 },
  { date: null, campaign: "PPD | Summer Camp | Local", status: "Пауза", impressions: 0, clicks: 0, cost: 0, conversions: 0 },
  { date: null, campaign: "PPD | Summer Camp | High Intent", status: "Пауза", impressions: 0, clicks: 0, cost: 0, conversions: 0 },
];

// 1–19 Aug: dates are exact (daily counts from the source report), but
// campaign/form pairing per lead is an approximation — see file header.
const aug1to19Dates = [
  "2026-08-07", "2026-08-07",
  "2026-08-08", "2026-08-08",
  "2026-08-10", "2026-08-10",
  "2026-08-11", "2026-08-11", "2026-08-11", "2026-08-11", "2026-08-11",
  "2026-08-13", "2026-08-13",
  "2026-08-15", "2026-08-15",
  "2026-08-16", "2026-08-16",
  "2026-08-17", "2026-08-17",
  "2026-08-18", "2026-08-18", "2026-08-18", "2026-08-18", "2026-08-18",
  "2026-08-19", "2026-08-19",
];
const aug1to19Campaigns = [
  ...Array(8).fill(CAMPAIGN.locationCore),
  ...Array(5).fill(CAMPAIGN.genericDubai),
  ...Array(4).fill(CAMPAIGN.brand),
  ...Array(3).fill(CAMPAIGN.ageSpecific),
  ...Array(2).fill(CAMPAIGN.nearMe),
  ...Array(1).fill(CAMPAIGN.summerCampAges),
  ...Array(2).fill(CAMPAIGN.gbp),
  ...Array(1).fill(CAMPAIGN.unknown),
];
const aug1to19Forms = [
  ...Array(15).fill("Tour in Paddington Park (Pricelist)"),
  ...Array(5).fill("FOUNDING FAMILY OFFER (main page)"),
  ...Array(3).fill("VIRTUAL TOUR"),
  ...Array(2).fill("Tour in Paddington Park"),
  ...Array(1).fill("Не определено"),
];
const aug1to19Leads: LeadRow[] = aug1to19Dates.map((date, i) => ({
  date,
  campaign: aug1to19Campaigns[i],
  form: aug1to19Forms[i],
}));

// 20 Aug – 7 Sep: exact per-row date + campaign + form from CRM exports.
const datedLeads: [string, string, string][] = [
  ["2026-08-20", CAMPAIGN.unknown, "VIRTUAL TOUR"],
  ["2026-08-20", CAMPAIGN.ageSpecific, "VIRTUAL TOUR"],
  ["2026-08-20", CAMPAIGN.unknown, "Tour in Paddington Park (Pricelist)"],
  ["2026-08-20", CAMPAIGN.genericDubai, "FOUNDING FAMILY OFFER (main page)"],
  ["2026-08-20", CAMPAIGN.genericDubai, "Tour in Paddington Park (Pricelist)"],
  ["2026-08-21", CAMPAIGN.genericDubai, "Tour in Paddington Park (Pricelist)"],
  ["2026-08-21", CAMPAIGN.brand, "Tour in Paddington Park (Pricelist)"],
  ["2026-08-21", CAMPAIGN.brand, "Tour in Paddington Park (Pricelist)"],
  ["2026-08-21", CAMPAIGN.locationCore, "Tour in Paddington Park (Pricelist)"],
  ["2026-08-21", CAMPAIGN.unknown, "VIRTUAL TOUR"],
  ["2026-08-21", CAMPAIGN.unknown, "FOUNDING FAMILY OFFER (main page)"],
  ["2026-08-21", CAMPAIGN.unknown, "VIRTUAL TOUR"],
  ["2026-08-21", CAMPAIGN.unknown, "VIRTUAL TOUR"],
  ["2026-08-21", CAMPAIGN.ageSpecific, "Tour in Paddington Park (Pricelist)"],
  ["2026-08-21", CAMPAIGN.gbp, "Tour in Paddington Park (Pricelist)"],
  ["2026-08-21", CAMPAIGN.unknown, "VIRTUAL TOUR"],
  ["2026-08-21", CAMPAIGN.unknown, "Tour in Paddington Park (Pricelist)"],
  ["2026-08-21", CAMPAIGN.ageSpecific, "Tour in Paddington Park (Pricelist)"],
  ["2026-08-21", CAMPAIGN.genericDubai, "Tour in Paddington Park (Pricelist)"],
  ["2026-08-21", CAMPAIGN.unknown, "Tour in Paddington Park (Pricelist)"],
  ["2026-08-21", CAMPAIGN.gbp, "VIRTUAL TOUR"],
  ["2026-08-23", CAMPAIGN.locationCore, "Tour in Paddington Park (Pricelist)"],
  ["2026-08-23", CAMPAIGN.unknown, "Tour in Paddington Park (Pricelist)"],
  ["2026-08-23", CAMPAIGN.unknown, "Tour in Paddington Park (Pricelist)"],
  ["2026-08-23", CAMPAIGN.unknown, "Tour in Paddington Park (Pricelist)"],
  ["2026-08-23", CAMPAIGN.brand, "FOUNDING FAMILY OFFER (main page)"],
  ["2026-08-23", CAMPAIGN.genericDubai, "Tour in Paddington Park"],
  ["2026-08-23", CAMPAIGN.brand, "VIRTUAL TOUR"],
  ["2026-08-23", CAMPAIGN.gbp, "Tour in Paddington Park (Pricelist)"],
  ["2026-08-24", CAMPAIGN.locationCore, "Tour in Paddington Park (Pricelist)"],
  ["2026-08-24", CAMPAIGN.gbp, "Tour in Paddington Park (Pricelist)"],
  ["2026-08-24", CAMPAIGN.unknown, "Tour in Paddington Park (Pricelist)"],
  ["2026-08-24", CAMPAIGN.unknown, "Tour in Paddington Park (Pricelist)"],
  ["2026-08-24", CAMPAIGN.ageSpecific, "Tour in Paddington Park (Pricelist)"],
  ["2026-08-26", CAMPAIGN.genericDubai, "Tour in Paddington Park (Pricelist)"],
  ["2026-08-26", CAMPAIGN.genericDubai, "Tour in Paddington Park (Pricelist)"],
  ["2026-08-26", CAMPAIGN.gbp, "Tour in Paddington Park (Pricelist)"],
  ["2026-08-26", CAMPAIGN.gbp, "Tour in Paddington Park"],
  ["2026-08-26", CAMPAIGN.gbp, "VIRTUAL TOUR"],
  ["2026-08-26", CAMPAIGN.unknown, "Tour in Paddington Park (Pricelist)"],
  ["2026-08-27", CAMPAIGN.unknown, "Tour in Paddington Park (Pricelist)"],
  ["2026-08-27", CAMPAIGN.gbp, "VIRTUAL TOUR"],
  ["2026-08-27", CAMPAIGN.genericDubai, "VIRTUAL TOUR"],
  ["2026-08-27", CAMPAIGN.ageSpecific, "Tour in Paddington Park (Pricelist)"],
  ["2026-08-27", CAMPAIGN.unknown, "Tour in Paddington Park (Pricelist)"],
  ["2026-08-27", CAMPAIGN.genericDubai, "VIRTUAL TOUR"],
  ["2026-08-28", CAMPAIGN.unknown, "Tour in Paddington Park (Pricelist)"],
  ["2026-08-29", CAMPAIGN.gbp, "VIRTUAL TOUR"],
  ["2026-08-30", CAMPAIGN.unknown, "Tour in Paddington Park (Pricelist)"],
  ["2026-08-30", CAMPAIGN.unknown, "Tour in Paddington Park (Pricelist)"],
  ["2026-08-30", CAMPAIGN.gbp, "FOUNDING FAMILY OFFER (main page)"],
  ["2026-08-30", CAMPAIGN.gbp, "Tour in Paddington Park (Pricelist)"],
  ["2026-08-30", CAMPAIGN.gbp, "FOUNDING FAMILY OFFER (main page)"],
  ["2026-08-31", CAMPAIGN.unknown, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-02", CAMPAIGN.gbp, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-02", CAMPAIGN.gbp, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-02", CAMPAIGN.genericDubai, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-02", CAMPAIGN.genericDubai, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-02", CAMPAIGN.ageSpecific, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-03", CAMPAIGN.gbp, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-03", CAMPAIGN.unknown, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-03", CAMPAIGN.nearMe, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-03", CAMPAIGN.genericDubai, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-03", CAMPAIGN.genericDubai, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-03", CAMPAIGN.unknown, "VIRTUAL TOUR"],
  ["2026-09-04", CAMPAIGN.unknown, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-04", CAMPAIGN.nearMe, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-05", CAMPAIGN.ageSpecific, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-06", CAMPAIGN.ageSpecific, "FOUNDING FAMILY OFFER (main page)"],
  ["2026-09-06", CAMPAIGN.unknown, "VIRTUAL TOUR"],
  ["2026-09-06", CAMPAIGN.locationCore, "FOUNDING FAMILY OFFER (main page)"],
  ["2026-09-06", CAMPAIGN.gbp, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-07", CAMPAIGN.gbp, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-07", CAMPAIGN.unknown, "VIRTUAL TOUR"],
  ["2026-09-07", CAMPAIGN.brand, "VIRTUAL TOUR"],
  ["2026-09-07", CAMPAIGN.locationCore, "FOUNDING FAMILY OFFER (main page)"],
  ["2026-09-08", CAMPAIGN.ageSpecific, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-08", CAMPAIGN.gbp, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-08", CAMPAIGN.gbp, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-09", CAMPAIGN.unknown, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-09", CAMPAIGN.genericDubai, "VIRTUAL TOUR"],
  ["2026-09-10", CAMPAIGN.gbp, "Tour in Paddington Park"],
  ["2026-09-10", CAMPAIGN.gbp, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-11", CAMPAIGN.unknown, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-11", CAMPAIGN.locationCore, "VIRTUAL TOUR"],
  ["2026-09-11", CAMPAIGN.ageSpecific, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-11", CAMPAIGN.nearMe, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-11", CAMPAIGN.gbp, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-12", CAMPAIGN.genericDubai, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-13", CAMPAIGN.brand, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-13", CAMPAIGN.genericDubai, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-14", CAMPAIGN.unknown, "Tour in Paddington Park (Pricelist)"],
];

export const leadRows: LeadRow[] = [
  ...aug1to19Leads,
  ...datedLeads.map(([date, campaign, form]) => ({ date, campaign, form })),
];

// Lifetime figures for the (now-ended) Youtube Shorts campaign that can't
// be sliced by day — no YT-Studio daily export exists. Shown as-is
// regardless of the selected range, since they cover the campaign's
// whole 11–31 Aug run.
export const youtubeLifetimeStats = {
  viewsTotal: 177200,
  views48h: 58992,
  retention: "68.7%",
  avgDuration: "0:41",
  trafficSource: "Ads 100%",
  runDates: "11–31 августа 2026",
};

export const periodComparison = [
  { label: "2–9 июля", cost: 4853, clicks: 1736, leads: null as number | null, cpl: null as number | null },
  { label: "9–16 июля", cost: 3159, clicks: 1112, leads: null, cpl: null },
  { label: "17–24 июля", cost: 2895, clicks: 1024, leads: null, cpl: null },
  { label: "25 июл–2 авг", cost: 2780, clicks: 967, leads: null, cpl: null },
  { label: "3–10 авг", cost: 1015, clicks: 382, leads: null, cpl: null },
  { label: "1–31 авг", cost: 14095, clicks: 4107, leads: 80, cpl: 176 },
  { label: "1–7 сент", cost: 4563, clicks: 473, leads: 22, cpl: 207 },
  { label: "8–14 сент", cost: 3279, clicks: 552, leads: 16, cpl: 205 },
];
