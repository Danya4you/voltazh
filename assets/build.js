/* ============================================================
   СТРАНИЦА ОТДЕЛЬНОЙ СБОРКИ
   Одна разметка на все сборки: нужная берётся из ?id= в адресе.
   Заголовок, описание, canonical и микроразметку страница
   проставляет себе сама — чтобы ссылку можно было отправить
   и чтобы её понимал поисковик.
   ============================================================ */
(() => {
'use strict';

const box = document.getElementById('buildPage');
if(!box) return;

const { BUILDS, api } = window.VOLTAZH;
const { rub, pcSVG } = api;
const SITE = 'https://danya4you.github.io/voltazh';

const id = new URLSearchParams(location.search).get('id');
const b = BUILDS.find(x => x.id === id);

/* ---------- сборки нет: не молчим, а показываем каталог ---------- */
if(!b){
  document.title = 'Сборка не найдена — Вольтаж';
  box.innerHTML = `<div class="oops__in" style="padding:40px 0">
    <div class="eyebrow">Ошибка</div>
    <h1 style="font-size:clamp(28px,4vw,46px)">Такой сборки нет</h1>
    <p class="lead">Ссылка устарела или в адресе опечатка. Все шесть конфигураций — в каталоге.</p>
    <div class="hero__cta"><a class="btn" href="catalog.html">Открыть каталог</a></div>
  </div>`;
  return;
}

/* ---------- метаданные страницы ---------- */
const url = `${SITE}/build.html?id=${b.id}`;
const title = `${b.name} ${b.volt} V — игровой ПК за ${rub(b.price)} · Вольтаж`;
const desc = `${b.for}. ${b.short.map(s => s[1]).join(', ')}. Гарантия 3 года на весь компьютер, 12 часов стресс-теста перед отправкой.`;

document.title = title;
const setMeta = (sel, attr, val) => {
  const el = document.querySelector(sel);
  if(el) el.setAttribute(attr, val);
};
setMeta('meta[name="description"]', 'content', desc);
setMeta('link[rel="canonical"]', 'href', url);
setMeta('meta[property="og:url"]', 'content', url);
setMeta('meta[property="og:title"]', 'content', title);
setMeta('meta[property="og:description"]', 'content', desc);
setMeta('meta[name="twitter:title"]', 'content', title);
setMeta('meta[name="twitter:description"]', 'content', desc);

const crumbs = document.getElementById('crumbs');
if(crumbs) crumbs.insertAdjacentHTML('beforeend', `<span>/</span><span>${b.name}</span>`);

/* ---------- микроразметка товара ---------- */
const ld = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: `Игровой компьютер ВОЛЬТАЖ ${b.name} ${b.volt} V`,
  description: desc,
  sku: `VLTZ-${b.volt}`,
  brand: { '@type': 'Brand', name: 'ВОЛЬТАЖ' },
  category: 'Компьютеры > Игровые системные блоки',
  additionalProperty: b.full.map(([name, value]) => ({
    '@type': 'PropertyValue', name, value
  })),
  offers: {
    '@type': 'Offer',
    url,
    priceCurrency: 'RUB',
    price: b.price,
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
    warranty: { '@type': 'WarrantyPromise', durationOfWarranty: { '@type': 'QuantitativeValue', value: 3, unitCode: 'ANN' } },
    seller: { '@type': 'Organization', name: 'ВОЛЬТАЖ' }
  }
};
const crumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Каталог', item: `${SITE}/catalog.html` },
    { '@type': 'ListItem', position: 3, name: b.name, item: url }
  ]
};
const tag = document.createElement('script');
tag.type = 'application/ld+json';
tag.textContent = JSON.stringify([ld, crumbLd]);
document.head.appendChild(tag);

/* ---------- сама страница ---------- */
const save = b.old ? `<s>${rub(b.old)}</s><i>выгода ${rub(b.old - b.price)}</i>` : '';
const rows = b.full.map(([k, v]) => `<tr><th scope="row">${k}</th><td>${v}</td></tr>`).join('');
const max = Math.max(...b.fps.map(f => f[1]));
const bars = b.fps.map(([g, v]) =>
  `<div class="fps__row"><span>${g}</span>
     <div class="fps__bar"><i style="width:${Math.round(v / max * 100)}%"></i></div>
     <span class="fps__v">${v}</span></div>`).join('');
const others = BUILDS.filter(x => x.id !== b.id).slice(0, 3);

box.innerHTML = `
  <div class="buildpg">
    <div class="buildpg__art">
      ${pcSVG(b, 'page')}
    </div>
    <div class="buildpg__info">
      <div class="card__volt" style="max-width:230px"><span>${b.volt} V</span><b>VLTZ-${b.volt}</b></div>
      <h1>${b.name}</h1>
      <p class="lead" style="margin-top:12px">${b.for}</p>

      <div class="price" style="margin-top:26px"><b>${rub(b.price)}</b>${save}</div>
      <p class="instal instal--big">или <b>${rub(Math.ceil(b.price / 12 / 100) * 100)}</b> в месяц — рассрочка 0-0-12 без переплаты</p>

      <div class="card__btns" style="margin-top:22px">
        <button class="btn" data-add="${b.id}">В корзину</button>
        <a class="btn btn--ghost" href="configurator.html">Изменить состав</a>
      </div>

      <ul class="buildpg__gua">
        <li>Гарантия 3 года на весь компьютер, а не на каждую деталь</li>
        <li>12 часов под нагрузкой перед отправкой, протокол в коробке</li>
        <li>Доставка по России бесплатно от 150 000 ₽</li>
      </ul>
    </div>
  </div>

  <div class="buildpg__cols">
    <section>
      <h2>Что внутри</h2>
      <table class="tbl" style="margin-top:20px"><tbody>${rows}</tbody></table>
    </section>
    <section>
      <h2>Сколько кадров выдаёт</h2>
      <div class="fps" style="margin-top:20px">${bars}</div>
      <p class="fps__note" style="margin-top:0">${b.fpsNote}</p>
    </section>
  </div>

  <section style="margin-top:clamp(44px,6vw,76px)">
    <h2>Другие сборки</h2>
    <div class="grid" style="margin-top:26px">
      ${others.map(o => `
        <a class="card card--link" href="build.html?id=${o.id}">
          <div class="card__art">${pcSVG(o, 'card')}</div>
          <div class="card__body">
            <div class="card__volt"><span>${o.volt} V</span><b>VLTZ-${o.volt}</b></div>
            <div class="card__name">${o.name}</div>
            <p class="card__for">${o.for}</p>
            <div class="card__foot"><div class="price"><b>${rub(o.price)}</b></div></div>
          </div>
        </a>`).join('')}
    </div>
  </section>`;

// карточки этой страницы появляются после старта — включаем им проявление вручную
box.querySelectorAll('.card').forEach(c => c.classList.add('in'));
})();
