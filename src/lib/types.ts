export interface CampaignRow {
  date: string | null;
  campaign: string;
  status: string;
  impressions: number;
  clicks: number;
  cost: number;
  conversions: number;
}

export interface LeadRow {
  date: string | null;
  campaign: string;
  form: string;
}

export interface Dataset {
  currency: string;
  campaigns: CampaignRow[];
  leads: LeadRow[];
  campaignsFileName: string | null;
  leadsFileName: string | null;
  uploadedAt: string;
}
