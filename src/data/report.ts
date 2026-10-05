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
 * (pre-aggregated report), 20–28 Aug, 26–31 Aug, 1–30 Sep, and 1–5 Oct.
 * Each window's per-campaign totals are split evenly across that window's
 * days below — so day-level numbers within a window are an approximation,
 * but any range that aligns with (or spans) whole windows sums back to
 * the real reported totals. The 20–28 and 26–31 Aug windows overlap on
 * 26–28 Aug, so those days carry cost/impressions from both windows
 * (small double-count, accepted). September used to be stitched together
 * from four overlapping sub-windows (1–7, 8–14, 14–22, 22–27 Sep); that
 * approach was replaced on 1 Oct by a single 1–30 Sep screenshot (full
 * calendar month, no overlap) once it became available, since it is the
 * exact, authoritative per-campaign total for the whole month. The
 * screenshot's campaign table didn't show Summer Camp | Indoor Preschool
 * directly (cut off past row 10) — its numbers were backed out from the
 * gap between the visible rows and the account total (impr/clicks/cost
 * all reconciled exactly against Total: Account). The 1–5 Oct window has
 * no screenshot of its own — only a rolling 5 Sep–5 Oct screenshot was
 * available. Its per-campaign total was derived by subtracting the known
 * 1–30 Sep total (scaled to its 5–30 Sep portion) from the rolling
 * window's account total, then distributing that 1–5 Oct total across
 * campaigns using each campaign's share of the 5 Sep–5 Oct screenshot
 * (more robust than subtracting per campaign, which produced noisy/
 * negative results on the smaller campaigns over just 5 days) — treat
 * 1–5 Oct per-campaign numbers as a rougher estimate than earlier windows.
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
 * The Youtube Shorts campaign ran 11–31 Aug and had zero activity from
 * September onward (ended before 1 Sep).
 */

export const REPORT_CURRENCY = "AED";
export const DATA_MIN_DATE = "2026-08-01";
export const DATA_MAX_DATE = "2026-10-05";

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
const windowSep = datesBetween("2026-09-01", "2026-09-30"); // screenshot totals for full Sep (replaces the old 4 sub-windows)
const windowOct = datesBetween("2026-10-01", "2026-10-05"); // derived totals for 1–5 Oct (see header note)

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

  // 1–30 Sep (screenshot totals, full calendar month, exact — Youtube
  // Shorts ended before September). Summer Camp Indoor Preschool backed
  // out from the account-total gap — see header note.
  ...spread(CAMPAIGN.ageSpecific, "Активна", { impressions: 3923, clicks: 262, cost: 3958.23 }, windowSep),
  ...spread(CAMPAIGN.brand, "Активна", { impressions: 728, clicks: 175, cost: 148.55 }, windowSep),
  ...spread(CAMPAIGN.eyfs, "Активна", { impressions: 7010, clicks: 386, cost: 1049.17 }, windowSep),
  ...spread(CAMPAIGN.genericDubai, "Активна", { impressions: 4507, clicks: 293, cost: 5616.79 }, windowSep),
  ...spread(CAMPAIGN.locationCore, "Активна", { impressions: 2858, clicks: 245, cost: 1074.89 }, windowSep),
  ...spread(CAMPAIGN.nearMe, "Активна", { impressions: 14557, clicks: 721, cost: 1960.45 }, windowSep),
  ...spread(CAMPAIGN.premium, "Активна", { impressions: 1513, clicks: 105, cost: 575.95 }, windowSep),
  ...spread(CAMPAIGN.summerCampAges, "Активна", { impressions: 100, clicks: 3, cost: 7.14 }, windowSep),
  ...spread(CAMPAIGN.summerCampIndoor, "Активна", { impressions: 1446, clicks: 39, cost: 109.07 }, windowSep),

  // 1–5 Oct (derived, not a direct screenshot total — see header note)
  ...spread(CAMPAIGN.ageSpecific, "Активна", { impressions: 440, clicks: 33, cost: 342.68 }, windowOct),
  ...spread(CAMPAIGN.brand, "Активна", { impressions: 110, clicks: 29, cost: 16.19 }, windowOct),
  ...spread(CAMPAIGN.eyfs, "Активна", { impressions: 1029, clicks: 64, cost: 114.82 }, windowOct),
  ...spread(CAMPAIGN.genericDubai, "Активна", { impressions: 510, clicks: 37, cost: 513.87 }, windowOct),
  ...spread(CAMPAIGN.locationCore, "Активна", { impressions: 415, clicks: 41, cost: 119.22 }, windowOct),
  ...spread(CAMPAIGN.nearMe, "Активна", { impressions: 2070, clicks: 115, cost: 207.97 }, windowOct),
  ...spread(CAMPAIGN.premium, "Активна", { impressions: 236, clicks: 19, cost: 67.46 }, windowOct),
  ...spread(CAMPAIGN.summerCampAges, "Активна", { impressions: 16, clicks: 1, cost: 1.01 }, windowOct),
  ...spread(CAMPAIGN.summerCampIndoor, "Активна", { impressions: 232, clicks: 7, cost: 13.34 }, windowOct),

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
  ["2026-09-15", CAMPAIGN.locationCore, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-15", CAMPAIGN.locationCore, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-15", CAMPAIGN.unknown, "Tour in Paddington Park"],
  ["2026-09-16", CAMPAIGN.unknown, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-16", CAMPAIGN.gbp, "Tour in Paddington Park"],
  ["2026-09-16", CAMPAIGN.unknown, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-16", CAMPAIGN.unknown, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-16", CAMPAIGN.unknown, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-16", CAMPAIGN.genericDubai, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-17", CAMPAIGN.brand, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-17", CAMPAIGN.nearMe, "VIRTUAL TOUR"],
  ["2026-09-17", CAMPAIGN.genericDubai, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-18", CAMPAIGN.gbp, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-19", CAMPAIGN.gbp, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-19", CAMPAIGN.locationCore, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-19", CAMPAIGN.gbp, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-20", CAMPAIGN.brand, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-20", CAMPAIGN.unknown, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-20", CAMPAIGN.gbp, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-21", CAMPAIGN.ageSpecific, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-21", CAMPAIGN.brand, "VIRTUAL TOUR"],
  ["2026-09-21", CAMPAIGN.gbp, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-22", CAMPAIGN.ageSpecific, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-22", CAMPAIGN.unknown, "VIRTUAL TOUR"],
  ["2026-09-22", CAMPAIGN.nearMe, "VIRTUAL TOUR"],
  ["2026-09-23", CAMPAIGN.brand, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-23", CAMPAIGN.gbp, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-23", CAMPAIGN.gbp, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-23", CAMPAIGN.gbp, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-25", CAMPAIGN.gbp, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-25", CAMPAIGN.genericDubai, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-25", CAMPAIGN.genericDubai, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-26", CAMPAIGN.gbp, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-26", CAMPAIGN.brand, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-26", CAMPAIGN.brand, "VIRTUAL TOUR"],
  ["2026-09-27", CAMPAIGN.genericDubai, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-27", CAMPAIGN.gbp, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-28", CAMPAIGN.locationCore, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-28", CAMPAIGN.locationCore, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-28", CAMPAIGN.locationCore, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-29", CAMPAIGN.brand, "VIRTUAL TOUR"],
  ["2026-09-29", CAMPAIGN.brand, "VIRTUAL TOUR"],
  ["2026-09-29", CAMPAIGN.gbp, "Tour in Paddington Park (Pricelist)"],
  ["2026-09-30", CAMPAIGN.ageSpecific, "VIRTUAL TOUR"],
  ["2026-09-30", CAMPAIGN.gbp, "Tour in Paddington Park"],
  ["2026-09-30", CAMPAIGN.locationCore, "VIRTUAL TOUR"],
  ["2026-09-30", CAMPAIGN.nearMe, "Tour in Paddington Park (Pricelist)"],
  ["2026-10-01", CAMPAIGN.locationCore, "Tour in Paddington Park (Pricelist)"],
  ["2026-10-01", CAMPAIGN.ageSpecific, "VIRTUAL TOUR"],
  ["2026-10-01", CAMPAIGN.brand, "Tour in Paddington Park (Pricelist)"],
  ["2026-10-01", CAMPAIGN.eyfs, "Tour in Paddington Park (Pricelist)"],
  ["2026-10-01", CAMPAIGN.gbp, "Tour in Paddington Park (Pricelist)"],
  ["2026-10-02", CAMPAIGN.ageSpecific, "Tour in Paddington Park (Pricelist)"],
  ["2026-10-03", CAMPAIGN.unknown, "Tour in Paddington Park (Pricelist)"],
  ["2026-10-03", CAMPAIGN.gbp, "Tour in Paddington Park (Pricelist)"],
  ["2026-10-03", CAMPAIGN.unknown, "Tour in Paddington Park (Pricelist)"],
  ["2026-10-05", CAMPAIGN.brand, "Tour in Paddington Park (Pricelist)"],
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
  { label: "14–22 сент", cost: 4023, clicks: 713, leads: 22, cpl: 183 },
  { label: "22–27 сент", cost: 2403, clicks: 384, leads: 15, cpl: 160 },
  { label: "1–30 сент", cost: 14500, clicks: 2229, leads: 85, cpl: 171 },
  { label: "1–5 окт", cost: 1397, clicks: 346, leads: 10, cpl: 140 },
];
