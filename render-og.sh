#!/usr/bin/env bash
# Пересобирает og-image.png из og-image.svg через headless-браузер.
# Шрифты подгружаются с Google Fonts, поэтому нужен интернет.
#   bash render-og.sh
set -e
cd "$(dirname "$0")"
T="${TEMP:-/tmp}"
BROWSER=""
for p in "/c/Program Files/Google/Chrome/Application/chrome.exe" \
         "/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" \
         "/c/Program Files/Microsoft/Edge/Application/msedge.exe"; do
  [ -f "$p" ] && BROWSER="$p" && break
done
[ -z "$BROWSER" ] && { echo "Не нашёл Chrome или Edge"; exit 1; }

{ echo '<!doctype html><html><head><meta charset="utf-8">'
  echo '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600&family=Unbounded:wght@700;800&display=swap">'
  echo '<style>html,body{margin:0;padding:0;width:1200px;height:630px;overflow:hidden;background:#12100E}'
  echo 'svg{display:block;width:1200px;height:630px}</style></head><body>'
  cat og-image.svg
  echo '</body></html>'; } > "$T/og.html"

"$BROWSER" --headless=new --disable-gpu --hide-scrollbars --no-sandbox \
  --force-device-scale-factor=1 --window-size=1200,630 --virtual-time-budget=10000 \
  --screenshot="$(cygpath -w "$T/og-image.png" 2>/dev/null || echo "$T/og-image.png")" \
  "file:///$(cygpath -m "$T/og.html" 2>/dev/null || echo "$T/og.html")" 2>&1 | tail -1

cp "$T/og-image.png" og-image.png
rm -f "$T/og.html" "$T/og-image.png"
echo "og-image.png готов: $(wc -c < og-image.png) байт"
