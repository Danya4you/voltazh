#!/usr/bin/env bash
# Собирает однофайловые версии страниц: CSS и JS вклеиваются внутрь HTML.
# Нужно там, где нельзя положить папку assets рядом — превью, блок T123 в Тильде,
# отправка страницы одним файлом.
#
#   bash build.sh          → dist/index.html, dist/catalog.html, dist/configurator.html
#   bash build.sh artifact → плюс dist/_a-*.html: то же самое, но без обёртки
#                            <html>/<head>/<body> и со ссылками на опубликованные копии
#
# Ссылки для режима artifact:
A_INDEX="https://claude.ai/code/artifact/9986d560-bc45-4273-9dfd-bfeb27bdb34b"
A_CATALOG="https://claude.ai/code/artifact/6f56c462-fad8-4d6c-8e8c-4a4a90ff387a"
A_CONFIG="https://claude.ai/code/artifact/f5af7b14-e6db-401b-bb6f-8c973b04b35e"
A_POLICY="https://claude.ai/code/artifact/4a46e137-725b-4a48-abe8-b0d1a1e88bbd"
A_BUILD="https://claude.ai/code/artifact/476a7e47-d36b-4c51-885a-01f7cc8ea01e"
A_CHECKOUT="https://claude.ai/code/artifact/417e508b-b503-489d-822c-a8632dd4fe06"

set -e
cd "$(dirname "$0")"
mkdir -p dist

PAGES="index.html catalog.html configurator.html policy.html build.html checkout.html 404.html"

inline () {
  awk '
    /<link rel="stylesheet" href="assets\/style.css">/ {
      print "<style>"; while ((getline line < "assets/style.css") > 0) print line
      close("assets/style.css"); print "</style>"; next
    }
    /<script src="assets\// {
      match($0, /assets\/[a-z]+\.js/); f = substr($0, RSTART, RLENGTH)
      print "<script>"; while ((getline line < f) > 0) print line
      close(f); print "</script>"; next
    }
    { print }
  ' "$1" > "dist/$1"
  printf '  %-20s → dist/%-20s %s КБ\n' "$1" "$1" "$(( $(wc -c < "dist/$1") / 1024 ))"
}

echo "Сборка однофайловых версий:"
for p in $PAGES; do inline "$p"; done

if [ "$1" = "artifact" ]; then
  echo "Версии для публикации:"
  for p in $PAGES; do
    sed -e '/^<!doctype html>$/d' -e '/^<html lang="ru">$/d' \
        -e '/^<head>$/d' -e '/^<\/head>$/d' -e '/^<body>$/d' \
        -e '/^<\/body>$/d' -e '/^<\/html>$/d' \
        -e '/^<meta charset/d' -e '/^<meta name="viewport"/d' -e '/^<meta name="description"/d' \
        -e '/^<meta name="robots"/d' -e '/^<link rel="canonical"/d' -e '/^<link rel="icon"/d' \
        -e '/^<meta name="theme-color"/d' -e '/^<meta property="og:/d' -e '/^<meta name="twitter:/d' \
        -e "s|href=\"index\.html|href=\"$A_INDEX|g" \
        -e "s|href=\"catalog\.html|href=\"$A_CATALOG|g" \
        -e "s|href=\"configurator\.html|href=\"$A_CONFIG|g" \
        -e "s|href=\"policy\.html|href=\"$A_POLICY|g" \
        -e "s|href=\"build\.html|href=\"$A_BUILD|g" \
        -e "s|href=\"checkout\.html|href=\"$A_CHECKOUT|g" \
        -e "s|'catalog\.html'|'$A_CATALOG'|g" \
        -e "s|build\.html?id=|$A_BUILD?id=|g" \
        "dist/$p" > "dist/_a-$p"
  done
  sed -i '1s|.*|<title>Вольтаж</title>|'               dist/_a-index.html
  sed -i '1s|.*|<title>Каталог сборок Вольтаж</title>|' dist/_a-catalog.html
  sed -i '1s|.*|<title>Конфигуратор Вольтаж</title>|'   dist/_a-configurator.html
  sed -i '1s|.*|<title>Конфиденциальность Вольтаж</title>|' dist/_a-policy.html
  for p in $PAGES; do printf '  dist/_a-%s\n' "$p"; done
fi

echo "Готово."
