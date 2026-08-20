import type { CampaignRow, Dataset, LeadRow } from "./types";

export interface CampaignSummary {
  campaign: string;
  status: string;
  impressions: number;
  clicks: number;
  cost: number;
  conversions: number;
  ctr: number;
  avgCpc: number;
  leads: number;
  cpl: number | null;
}

export interface Totals {
  impressions: number;
  clicks: number;
  cost: number;
  conversions: number;
  ctr: number;
  avgCpc: number;
  leads: number;
  cpl: number | null;
}

export interface DailyPoint {
  date: string;
  cost: number;
  leads: number;
}

function leadsByCampaign(leads: LeadRow[]): Map<string, number> {
  const map = new Map<string, number>();
  for (const lead of leads) {
    map.set(lead.campaign, (map.get(lead.campaign) ?? 0) + 1);
  }
  return map;
}

export function summarizeCampaigns(dataset: Dataset): CampaignSummary[] {
  const byCampaign = new Map<string, CampaignRow[]>();
  for (const row of dataset.campaigns) {
    const list = byCampaign.get(row.campaign) ?? [];
    list.push(row);
    byCampaign.set(row.campaign, list);
  }

  const leadCounts = leadsByCampaign(dataset.leads);

  return Array.from(byCampaign.entries()).map(([campaign, rows]) => {
    const impressions = rows.reduce((sum, r) => sum + r.impressions, 0);
    const clicks = rows.reduce((sum, r) => sum + r.clicks, 0);
    const cost = rows.reduce((sum, r) => sum + r.cost, 0);
    const conversions = rows.reduce((sum, r) => sum + r.conversions, 0);
    const leads = leadCounts.get(campaign) ?? 0;

    return {
      campaign,
      status: rows[rows.length - 1]?.status || "",
      impressions,
      clicks,
      cost,
      conversions,
      ctr: impressions > 0 ? clicks / impressions : 0,
      avgCpc: clicks > 0 ? cost / clicks : 0,
      leads,
      cpl: leads > 0 ? cost / leads : null,
    };
  }).sort((a, b) => b.cost - a.cost);
}

export function calculateTotals(dataset: Dataset): Totals {
  const impressions = dataset.campaigns.reduce((sum, r) => sum + r.impressions, 0);
  const clicks = dataset.campaigns.reduce((sum, r) => sum + r.clicks, 0);
  const cost = dataset.campaigns.reduce((sum, r) => sum + r.cost, 0);
  const conversions = dataset.campaigns.reduce((sum, r) => sum + r.conversions, 0);
  const leads = dataset.leads.length;

  return {
    impressions,
    clicks,
    cost,
    conversions,
    ctr: impressions > 0 ? clicks / impressions : 0,
    avgCpc: clicks > 0 ? cost / clicks : 0,
    leads,
    cpl: leads > 0 ? cost / leads : null,
  };
}

export function dailySeries(dataset: Dataset): DailyPoint[] {
  const costByDate = new Map<string, number>();
  for (const row of dataset.campaigns) {
    if (!row.date) continue;
    costByDate.set(row.date, (costByDate.get(row.date) ?? 0) + row.cost);
  }

  const leadsByDate = new Map<string, number>();
  for (const lead of dataset.leads) {
    if (!lead.date) continue;
    leadsByDate.set(lead.date, (leadsByDate.get(lead.date) ?? 0) + 1);
  }

  const dates = Array.from(new Set([...costByDate.keys(), ...leadsByDate.keys()])).sort();

  return dates.map((date) => ({
    date,
    cost: costByDate.get(date) ?? 0,
    leads: leadsByDate.get(date) ?? 0,
  }));
}

/** Leads whose campaign name has no match in the campaigns report — these are excluded from per-campaign CPL. */
export function countUnmatchedLeads(dataset: Dataset): number {
  const campaignNames = new Set(dataset.campaigns.map((c) => c.campaign));
  return dataset.leads.filter((lead) => !campaignNames.has(lead.campaign)).length;
}

export function leadsByForm(leads: LeadRow[]): { form: string; count: number }[] {
  const map = new Map<string, number>();
  for (const lead of leads) {
    map.set(lead.form, (map.get(lead.form) ?? 0) + 1);
  }
  return Array.from(map.entries())
    .map(([form, count]) => ({ form, count }))
    .sort((a, b) => b.count - a.count);
}
