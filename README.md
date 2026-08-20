# Paddington Dashboard — Google Ads

A Next.js dashboard for Google Ads campaign performance. No API setup
required for day-to-day use: you export a CSV from Google Ads and drop it
into the dashboard, and it renders KPIs, charts, and a campaign table —
matching the look of the original static report. Optionally add a CRM leads
export to get per-campaign CPL.

The dashboard runs entirely in the browser: files are parsed client-side and
saved to your browser's local storage, so nothing is uploaded to a server.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000, then upload files as described below.

## Using it

### 1. Export the campaigns report from Google Ads

In Google Ads: **Campaigns** tab → select the date range you want → the
download icon (top-right of the table) → **CSV**.

Drop that file onto **"Отчёт по кампаниям"** in the dashboard. Required
columns (English or Russian headers both work): Campaign, Campaign state,
Impr., Clicks, Cost, Conversions. A Day/Date column is optional — without it
you still get all totals and the per-campaign breakdown, just not the
day-by-day chart.

### 2. (Optional) Export leads from your CRM

Any CSV with a campaign/source column works — column names are matched
loosely (`Campaign`, `UTM Campaign`, `Source`, etc.), plus optional `Date`
and `Form` columns. Drop it onto **"Лиды из CRM"**.

**Important:** campaign names in the leads file must match the campaign
names in the Google Ads export exactly, or those leads won't be attributed
to a campaign (the dashboard warns you when this happens, on the Leads tab).

### 3. Set your currency

Type the 3-letter currency code (default `USD`) next to the upload boxes —
it only affects how numbers are formatted, not the data itself.

That's it — the KPI row, "Обзор" (overview), "Кампании" (campaigns), and
"Лиды" (leads) tabs populate automatically. Re-uploading a file replaces
that dataset; "Очистить загруженные данные" resets everything.

## How it works

- `src/lib/parse-google-ads-csv.ts` / `parse-leads-csv.ts` — CSV parsers.
  Google Ads exports have a couple of metadata lines before the real header
  row and a trailing "Total" row — the parser scans for the row that
  actually has recognizable column names and ignores the rest. Numbers with
  thousands separators, currency symbols, or `%` are normalized.
- `src/lib/aggregate.ts` — turns raw rows into per-campaign summaries, KPI
  totals, and a daily spend/leads series.
- `src/lib/dataset-storage.ts` — persists the parsed dataset to
  `localStorage` so it survives a page reload.
- `src/components/Dashboard.tsx` and friends — the tabbed UI (Обзор /
  Кампании / Лиды), stat tiles, and charts (Recharts).

## Also included: direct Google Ads API integration

The repo also has a working Google Ads API client (`src/lib/google-ads.ts`)
and an API route (`/api/google-ads/campaigns`) for pulling data live via
OAuth instead of manual CSV exports — useful if you want the dashboard to
auto-refresh without anyone uploading files. It's not wired into the main
page right now (the CSV flow above is simpler to get running), but the
pieces are there if you want to switch to it later. See git history for
`.env.example` and `scripts/get-refresh-token.mjs`, which walk through
getting a developer token, OAuth client, and refresh token.

## Scaling this up

- **Multi-user / shared dashboard**: right now data lives in the browser's
  local storage, so it's private to whoever uploaded it. For a dashboard
  shared across a team, swap `dataset-storage.ts` for an API route that
  stores the parsed dataset in a database, and everyone reads from there.
- **No-code alternative**: for a quick dashboard without custom code, Google
  Ads' built-in connector to **Looker Studio** or a **BigQuery Data
  Transfer** export are viable alternatives.
