import { NextRequest, NextResponse } from "next/server";
import { fetchCampaignMetrics, isGoogleAdsConfigured } from "@/lib/google-ads";
import { mockCampaignMetrics } from "@/lib/mock-data";

export async function GET(request: NextRequest) {
  const dateRange = request.nextUrl.searchParams.get("range") || "LAST_30_DAYS";

  if (!isGoogleAdsConfigured()) {
    return NextResponse.json({
      source: "mock",
      campaigns: mockCampaignMetrics,
    });
  }

  try {
    const campaigns = await fetchCampaignMetrics(dateRange);
    return NextResponse.json({ source: "google-ads", campaigns });
  } catch (error) {
    console.error("Failed to fetch Google Ads campaign metrics", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to fetch Google Ads data",
      },
      { status: 502 }
    );
  }
}
