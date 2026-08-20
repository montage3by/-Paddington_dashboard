#!/usr/bin/env node
/**
 * One-time helper to obtain a Google Ads API refresh token via the OAuth2
 * installed-app flow (loopback redirect on localhost).
 *
 * Usage:
 *   GOOGLE_ADS_CLIENT_ID=... GOOGLE_ADS_CLIENT_SECRET=... node scripts/get-refresh-token.mjs
 *
 * The script opens a local server on http://localhost:4321, prints an
 * authorization URL to visit in your browser, and prints the refresh token
 * once you approve access. Add that token to .env.local as
 * GOOGLE_ADS_REFRESH_TOKEN.
 */
import http from "node:http";
import { URL } from "node:url";

const PORT = 4321;
const REDIRECT_URI = `http://localhost:${PORT}`;
const SCOPE = "https://www.googleapis.com/auth/adwords";

const clientId = process.env.GOOGLE_ADS_CLIENT_ID;
const clientSecret = process.env.GOOGLE_ADS_CLIENT_SECRET;

if (!clientId || !clientSecret) {
  console.error(
    "Set GOOGLE_ADS_CLIENT_ID and GOOGLE_ADS_CLIENT_SECRET env vars first (from your Google Cloud OAuth client)."
  );
  process.exit(1);
}

const authUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");
authUrl.searchParams.set("client_id", clientId);
authUrl.searchParams.set("redirect_uri", REDIRECT_URI);
authUrl.searchParams.set("response_type", "code");
authUrl.searchParams.set("scope", SCOPE);
authUrl.searchParams.set("access_type", "offline");
authUrl.searchParams.set("prompt", "consent");

console.log("\n1. Open this URL in a browser and approve access:\n");
console.log(authUrl.toString());
console.log(`\n2. Waiting for the redirect back to ${REDIRECT_URI} ...\n`);

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, REDIRECT_URI);
  const code = url.searchParams.get("code");

  if (!code) {
    res.end("No authorization code received. Check the terminal and try again.");
    return;
  }

  res.end("Success! You can close this tab and return to the terminal.");

  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: REDIRECT_URI,
      grant_type: "authorization_code",
    }),
  });

  const tokenBody = await tokenRes.json();

  if (!tokenRes.ok) {
    console.error("Failed to exchange code for tokens:", tokenBody);
    process.exitCode = 1;
  } else {
    console.log("\nRefresh token (add to .env.local as GOOGLE_ADS_REFRESH_TOKEN):\n");
    console.log(tokenBody.refresh_token);
  }

  server.close();
});

server.listen(PORT);
