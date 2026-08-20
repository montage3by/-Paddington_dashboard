# Paddington Dashboard — Google Ads

A Next.js dashboard that pulls campaign performance data from the Google Ads API.

Without credentials configured, the dashboard runs with sample data so the UI is
visible immediately. Once you add real credentials it switches to live data
automatically.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Connecting a real Google Ads account

You need four things: an OAuth client, a developer token, a refresh token, and
the customer ID of the account you want to read.

### 1. Create a Google Cloud OAuth client

1. Go to the [Google Cloud Console](https://console.cloud.google.com/), create
   (or pick) a project.
2. Enable the **Google Ads API** under "APIs & Services" → "Library".
3. Under "APIs & Services" → "Credentials", create an **OAuth client ID** of
   type "Desktop app".
4. Copy the **Client ID** and **Client secret**.

### 2. Get a developer token

1. Sign in to your [Google Ads](https://ads.google.com/) account (needs to be
   a Manager/MCC account for API access).
2. Go to **Tools & Settings → Setup → API Center**.
3. Copy the **developer token**. New tokens start in test-account access —
   fine for development. Apply for Basic/Standard access before going to
   production with a real account.

### 3. Get a refresh token

Run the included helper script with your OAuth client credentials:

```bash
GOOGLE_ADS_CLIENT_ID=xxx GOOGLE_ADS_CLIENT_SECRET=yyy node scripts/get-refresh-token.mjs
```

It prints a URL — open it, sign in with the Google account that has access to
the Ads account, approve access, and the script prints a refresh token in the
terminal.

### 4. Find your customer ID

The 10-digit ID shown top-right in the Google Ads UI (e.g. `123-456-7890` →
use `1234567890`, no dashes). If that account sits under a Manager account
(MCC), also set `GOOGLE_ADS_LOGIN_CUSTOMER_ID` to the manager account's ID.

### 5. Configure the app

```bash
cp .env.example .env.local
```

Fill in `.env.local`:

```
GOOGLE_ADS_CLIENT_ID=...
GOOGLE_ADS_CLIENT_SECRET=...
GOOGLE_ADS_DEVELOPER_TOKEN=...
GOOGLE_ADS_REFRESH_TOKEN=...
GOOGLE_ADS_CUSTOMER_ID=...
GOOGLE_ADS_LOGIN_CUSTOMER_ID=       # only if the account is under an MCC
```

Restart `npm run dev` — the dashboard now pulls live campaign metrics.

`.env.local` is git-ignored; never commit real credentials.

## How it works

- `src/lib/google-ads.ts` — Google Ads API client (via
  [`google-ads-api`](https://github.com/Opteo/google-ads-api)) and a GAQL
  query pulling per-campaign metrics (impressions, clicks, cost, conversions,
  CTR, avg. CPC).
- `src/app/api/google-ads/campaigns/route.ts` — API route the frontend calls;
  falls back to sample data (`src/lib/mock-data.ts`) when credentials aren't
  set, so the UI works before any setup.
- `src/components/Dashboard.tsx` — client component: date-range picker, stat
  tiles, a spend-by-campaign chart, and a campaigns table.

## Scaling this up

- **Caching / rate limits**: the Google Ads API has query quotas. For a
  dashboard used by multiple people, add a scheduled job (cron / a queue
  worker) that pulls data periodically into a database (Postgres, BigQuery),
  and have the API route read from there instead of calling Google Ads on
  every page load.
- **Multiple accounts**: loop `fetchCampaignMetrics` over several customer IDs
  under one MCC, or use `search_stream` for large accounts.
- **No-code alternative**: for a quick dashboard without custom code, Google
  Ads' built-in connector to **Looker Studio** or a **BigQuery Data Transfer**
  export are viable alternatives.
