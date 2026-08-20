import { GoogleAdsApi, type Customer } from "google-ads-api";

export interface CampaignMetric {
  campaignId: string;
  campaignName: string;
  status: string;
  impressions: number;
  clicks: number;
  costMicros: number;
  conversions: number;
  conversionsValue: number;
  ctr: number;
  averageCpc: number;
}

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(
      `Missing ${name}. Copy .env.example to .env.local and fill in your Google Ads credentials.`
    );
  }
  return value;
}

/** True once all required Google Ads env vars are present. */
export function isGoogleAdsConfigured(): boolean {
  return [
    "GOOGLE_ADS_CLIENT_ID",
    "GOOGLE_ADS_CLIENT_SECRET",
    "GOOGLE_ADS_DEVELOPER_TOKEN",
    "GOOGLE_ADS_REFRESH_TOKEN",
    "GOOGLE_ADS_CUSTOMER_ID",
  ].every((name) => Boolean(process.env[name]));
}

function getCustomer(): Customer {
  const client = new GoogleAdsApi({
    client_id: requireEnv("GOOGLE_ADS_CLIENT_ID"),
    client_secret: requireEnv("GOOGLE_ADS_CLIENT_SECRET"),
    developer_token: requireEnv("GOOGLE_ADS_DEVELOPER_TOKEN"),
  });

  return client.Customer({
    customer_id: requireEnv("GOOGLE_ADS_CUSTOMER_ID"),
    login_customer_id: process.env.GOOGLE_ADS_LOGIN_CUSTOMER_ID || undefined,
    refresh_token: requireEnv("GOOGLE_ADS_REFRESH_TOKEN"),
  });
}

/**
 * Pulls per-campaign performance metrics for the given date range using GAQL.
 * dateRange accepts any Google Ads predefined range, e.g. LAST_7_DAYS, LAST_30_DAYS, THIS_MONTH.
 */
export async function fetchCampaignMetrics(
  dateRange: string = "LAST_30_DAYS"
): Promise<CampaignMetric[]> {
  const customer = getCustomer();

  const rows = await customer.query(`
    SELECT
      campaign.id,
      campaign.name,
      campaign.status,
      metrics.impressions,
      metrics.clicks,
      metrics.cost_micros,
      metrics.conversions,
      metrics.conversions_value,
      metrics.ctr,
      metrics.average_cpc
    FROM campaign
    WHERE segments.date DURING ${dateRange}
      AND campaign.status != 'REMOVED'
    ORDER BY metrics.cost_micros DESC
  `);

  return rows.map((row) => ({
    campaignId: String(row.campaign?.id ?? ""),
    campaignName: row.campaign?.name ?? "",
    status: String(row.campaign?.status ?? ""),
    impressions: Number(row.metrics?.impressions ?? 0),
    clicks: Number(row.metrics?.clicks ?? 0),
    costMicros: Number(row.metrics?.cost_micros ?? 0),
    conversions: Number(row.metrics?.conversions ?? 0),
    conversionsValue: Number(row.metrics?.conversions_value ?? 0),
    ctr: Number(row.metrics?.ctr ?? 0),
    averageCpc: Number(row.metrics?.average_cpc ?? 0),
  }));
}
