# Paddington Dashboard — Google Ads

A Next.js dashboard for Paddington Park ELC's Google Ads performance. It's a
static, read-only site: there is no upload UI and no per-visitor state.
Everyone who opens it sees the same report, and the data comes from one file
in the repo — updates happen by editing that file and pushing (or asking
Claude to update it), not by anyone uploading a CSV in the browser.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Updating the numbers

All report data lives in **`src/data/report.ts`**: campaign rows, leads
(by campaign / by form), the daily spend+leads series, the period-comparison
table, and the YouTube Shorts stats. Edit the values there, commit, and push
— the KPI tiles, charts, and tables on all four tabs (Обзор / Кампании /
Лиды / YouTube Shorts) recompute automatically from those arrays via
`src/lib/aggregate.ts`.

There's no CSV upload, no `localStorage`, and no per-visitor data — this is
intentional: it's a single shared report, not a personal tool.

## How it works

- `src/data/report.ts` — the single source of truth for the current
  reporting period's numbers.
- `src/lib/aggregate.ts` — turns the raw campaign/lead rows into
  per-campaign summaries and KPI totals.
- `src/components/Dashboard.tsx` and friends — the tabbed UI, stat tiles,
  and charts (Recharts).

## Also included: direct Google Ads API integration

The repo also has a working Google Ads API client (`src/lib/google-ads.ts`)
and an API route (`/api/google-ads/campaigns`) for pulling data live via
OAuth — useful if this should eventually auto-refresh instead of being
edited by hand. It's not wired into the main page. See git history for
`.env.example` and `scripts/get-refresh-token.mjs`, which walk through
getting a developer token, OAuth client, and refresh token.

## Deploying on Railway

The repo includes a `railway.json` (Nixpacks builder, `npm run start` as the
start command) so Railway can deploy it with no extra config.

1. Push this repo to GitHub (already done if you're reading this from the
   deployed branch).
2. In [Railway](https://railway.app): **New Project → Deploy from GitHub
   repo** → pick this repository.
3. Railway auto-detects Node.js, runs `npm install` and `npm run build`, then
   starts the app with `npm run start`. It sets `PORT` itself — `next start`
   picks that up automatically, nothing to configure.
4. Any push to the connected branch triggers a new deploy automatically —
   so updating `src/data/report.ts` and pushing is all it takes to refresh
   the live site.

## Scaling this up

- **Live data instead of hand-edited**: wire up the Google Ads API client
  mentioned above (and a CRM export/API for leads) behind a scheduled job or
  the existing `/api/google-ads/campaigns` route, and have it write into
  `src/data/report.ts` (or a database `Dashboard` reads from) instead of
  editing it by hand each period.
- **No-code alternative**: for a quick dashboard without custom code, Google
  Ads' built-in connector to **Looker Studio** or a **BigQuery Data
  Transfer** export are viable alternatives.
