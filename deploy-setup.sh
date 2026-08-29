#!/usr/bin/env bash
# Готовит проект к публикации на GitHub Pages: подставляет реальный адрес
# сайта вместо заглушки voltazh.ru в canonical, Open Graph, robots и sitemap.
#
#   bash deploy-setup.sh <логин-на-github> <имя-репозитория>
#
# Пример:
#   bash deploy-setup.sh danyaforyou voltazh
#   → https://danyaforyou.github.io/voltazh
#
# Для своего домена вместо этого:
#   bash deploy-setup.sh --url https://voltazh.ru

set -e
cd "$(dirname "$0")"

if [ "$1" = "--url" ] && [ -n "$2" ]; then
  URL="${2%/}"
elif [ -n "$1" ] && [ -n "$2" ]; then
  URL="https://$1.github.io/$2"
else
  sed -n '2,13p' "$0" | sed 's/^# \{0,1\}//'
  exit 1
fi

OLD="https://voltazh.ru"
FILES=$(grep -rl "$OLD" *.html *.txt *.xml 2>/dev/null || true)

if [ -z "$FILES" ]; then
  echo "Заглушка $OLD уже заменена — менять нечего."
  echo "Текущий адрес в canonical: $(grep -ho 'rel="canonical" href="[^"]*"' index.html)"
  exit 0
fi

echo "Заменяю $OLD → $URL"
for f in $FILES; do
  sed -i "s|$OLD|$URL|g" "$f"
  printf '  %s\n' "$f"
done

# адрес сайта прописан ещё и в двух скриптах
sed -i "s|const SITE = '$OLD'|const SITE = '$URL'|" assets/app.js assets/build.js 2>/dev/null || true

bash build.sh >/dev/null
echo
echo "Готово. Дальше:"
echo "  git add -A && git commit -m 'Адрес сайта: $URL'"
if [ "$1" != "--url" ]; then
  echo "  git remote add origin https://github.com/$1/$2.git"
  echo "  git push -u origin main"
else
  echo "  git remote add origin https://github.com/<логин>/<репозиторий>.git"
  echo "  git push -u origin main"
fi
echo
echo "Затем в репозитории: Settings → Pages → Source: Deploy from a branch"
echo "                     Branch: main / (root) → Save"
echo "Через минуту сайт будет по адресу: $URL/"
