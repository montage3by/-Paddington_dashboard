#!/bin/sh
# Starts chrome-devtools-mcp for Claude Code (see .mcp.json).
# Locally it uses your installed Chrome. In a Claude Code cloud session
# (detected by /opt/pw-browsers/chromium) it runs the preinstalled Chromium
# headless, without the OS sandbox and through the session's HTTPS proxy.
set -e

set -- --no-usage-statistics --no-performance-crux "$@"

if [ -x /opt/pw-browsers/chromium ]; then
  set -- --headless --isolated \
    --executablePath=/opt/pw-browsers/chromium \
    --chromeArg=--no-sandbox \
    --viewport=1440x900 \
    "$@"
  if [ -n "${HTTPS_PROXY:-}" ]; then
    set -- --proxyServer="$HTTPS_PROXY" "$@"
  fi
fi

exec npx -y chrome-devtools-mcp@1.13.0 "$@"
