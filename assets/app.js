/* ============================================================
   ОБЩИЙ СКРИПТ САЙТА
   Работает на всех страницах: корзина, модалка товара,
   анимации по скроллу, вольтметровая рейка, формы.
   Блоки, которых нет на странице, просто пропускаются.
   ============================================================ */
(() => {
'use strict';

const BUILDS = window.VOLTAZH.BUILDS;

/* пользователь просил не анимировать — уважаем на всех страницах */
const RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
/* единый формат цены: неразрывные пробелы и рубль */
const rub = n => n.toLocaleString('ru-RU') + ' ₽';

/* ============================================================
   ГЕНЕРАТОР SVG-КОРПУСА
   Один параметрический рисунок на все сборки: пропорции,
   число вентиляторов, тип охлаждения и цвет подсветки — из style.
   ============================================================ */
function pcSVG(b, scale){
  const s = b.style, W = s.w, H = s.h, g = s.glow;
  const uid = b.id + (scale || '');
  const vbW = W + 24, vbH = H + 24;
  const x = 12, y = 12;
  const fans = [];
  const gap = (H - 40) / (s.fans + (s.fans > 2 ? 0 : 1));
  for(let i = 0; i < s.fans; i++){
    const cy = y + 26 + gap * i;
    fans.push(fan(x + 15, cy, 10.5, g, i % 2 ? 'fan fan--slow' : 'fan'));
  }
  // видеокарта
  const gpuW = s.gpu === 'short' ? W * .62 : s.gpu === 'mid' ? W * .72 : W * .82;
  const gpuX = x + W - gpuW - 10;
  const gpuY = y + H * (s.sff ? .52 : .60);
  // охлаждение
  let cool = '';
  if(s.cooler === 'air'){
    cool = `<rect x="${x+W*.30}" y="${y+H*.16}" width="${W*.40}" height="${H*.28}" rx="3" fill="#23201B" stroke="#3E362B"/>` +
           fan(x + W * .50, y + H * .30, Math.min(W * .17, 16), g, 'fan fan--slow');
  } else if(s.cooler === 'custom'){
    cool = `<rect x="${x+10}" y="${y+8}" width="${W-20}" height="${H*.09}" rx="2.5" fill="#2A241C" stroke="#4A3A26"/>` +
           `<path d="M${x+W*.30} ${y+H*.13} v${H*.14} h${W*.34}" stroke="${g}" stroke-width="2.6" fill="none" opacity=".75"/>` +
           `<rect x="${x+W*.28}" y="${y+H*.26}" width="${W*.42}" height="${H*.12}" rx="3" fill="#1B1813" stroke="${g}" stroke-opacity=".5"/>`;
  } else {
    const rw = s.cooler === 'aio360' ? W - 20 : W * .70;
    cool = `<rect x="${x+(W-rw)/2}" y="${y+8}" width="${rw}" height="${H*.085}" rx="2.5" fill="#22201B" stroke="#3E362B"/>` +
           `<path d="M${x+W*.34} ${y+H*.13} v${H*.12}" stroke="#4A4034" stroke-width="3" stroke-linecap="round"/>` +
           `<rect x="${x+W*.30}" y="${y+H*.24}" width="${W*.40}" height="${H*.13}" rx="3" fill="#1B1813" stroke="#3E362B"/>` +
           `<circle cx="${x+W*.50}" cy="${y+H*.305}" r="${H*.04}" fill="none" stroke="${g}" stroke-width="1.6" opacity=".8"/>`;
  }
  // в карточке корпуса отрисованы в реальной пропорции друг к другу:
  // компактная сборка визуально ниже флагманской башни
  const inline = scale === 'card' ? ` style="height:${Math.round(96 + (H / 252) * 102)}px"` : '';
  return `<svg viewBox="0 0 ${vbW} ${vbH}" fill="none" role="img" aria-label="Корпус сборки ${b.name}"${inline}>
    <defs>
      <linearGradient id="c${uid}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2A251F"/><stop offset="1" stop-color="#16130F"/>
      </linearGradient>
      <linearGradient id="g${uid}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${g}" stop-opacity=".10"/>
        <stop offset=".55" stop-color="#FFFFFF" stop-opacity=".035"/>
        <stop offset="1" stop-color="${g}" stop-opacity=".05"/>
      </linearGradient>
    </defs>
    <ellipse cx="${x+W/2}" cy="${y+H+9}" rx="${W*.52}" ry="5" fill="${g}" opacity=".2"/>
    <rect x="${x}" y="${y}" width="${W}" height="${H}" rx="7" fill="url(#c${uid})" stroke="#3A3227" stroke-width="1.3"/>
    <rect x="${x+30}" y="${y+H*.12}" width="${W-42}" height="${H*.42}" rx="3" fill="#1C2822" stroke="#2C4137" stroke-width=".9"/>
    ${cool}
    <rect x="${x+W-30}" y="${y+H*.16}" width="5.5" height="${H*.22}" rx="1.5" fill="#2C241B" stroke="#4A3A26" stroke-width=".8"/>
    <rect x="${x+W-22}" y="${y+H*.16}" width="5.5" height="${H*.22}" rx="1.5" fill="#2C241B" stroke="#4A3A26" stroke-width=".8"/>
    <rect x="${x+W-30}" y="${y+H*.16}" width="5.5" height="4" rx="1.5" fill="${g}" opacity=".9"/>
    <rect x="${x+W-22}" y="${y+H*.16}" width="5.5" height="4" rx="1.5" fill="${g}" opacity=".9"/>
    <rect x="${gpuX}" y="${gpuY}" width="${gpuW}" height="${H*.145}" rx="3" fill="#241E17" stroke="#453A2C" stroke-width=".9"/>
    <rect x="${gpuX+4}" y="${gpuY+H*.145-2.5}" width="${gpuW-8}" height="2.5" rx="1.2" fill="${g}" class="pulse"/>
    ${fan(gpuX + gpuW * .30, gpuY + H * .072, Math.min(gpuW * .14, 9.5), '#7A6444', 'fan')}
    ${fan(gpuX + gpuW * .70, gpuY + H * .072, Math.min(gpuW * .14, 9.5), '#7A6444', 'fan fan--rev')}
    <rect x="${x+28}" y="${y+H-(s.sff?26:34)}" width="${W-40}" height="${s.sff?18:26}" rx="3" fill="#1C1915" stroke="#3A3227" stroke-width=".9"/>
    <path d="M${x+34} ${y+H-(s.sff?18:24)}h${W*.28}" stroke="#4A4034" stroke-width="1.2" stroke-linecap="round"/>
    ${fans.join('')}
    <rect x="${x}" y="${y}" width="${W}" height="${H}" rx="7" fill="url(#g${uid})" stroke="#4B4133" stroke-width="1.3"/>
    <path d="M${x+8} ${y+H-10} L${x+W-8} ${y+16}" stroke="#FFFFFF" stroke-opacity=".045" stroke-width="16"/>
    <circle cx="${x+W-10}" cy="${y+9}" r="1.9" fill="${g}" class="pulse"/>
    <path d="M${x+9} ${y+H} v4.5 M${x+W-9} ${y+H} v4.5" stroke="#3A3227" stroke-width="3" stroke-linecap="round"/>
  </svg>`;
}
/* сборка из конфигуратора приходит без style — подставляем корпус
   по её же параметрам, чтобы в корзине она выглядела как товар */
function customShape(c){
  return {
    id: 'custom',
    name: c.name,
    style: c.shape || { h:212, w:122, fans:3, glow:'#FF9A1F', gpu:'mid', cooler:'air', glass:true }
  };
}

/* слой с разрядом: три дуги бьют в корпус при наведении */
function zapSVG(color){
  return `<svg class="zap" viewBox="0 0 200 220" aria-hidden="true"
      style="filter:drop-shadow(0 0 4px ${color})">
    <path d="M54 20 L70 50 L56 55 L72 82" stroke="${color}"/>
    <path d="M148 28 L132 58 L146 63 L130 90" stroke="${color}"/>
    <circle cx="72" cy="82" r="2.8" fill="${color}"/>
    <circle cx="130" cy="90" r="2.4" fill="${color}"/>
  </svg>`;
}
function fan(cx, cy, r, color, cls){
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#171410" stroke="${color}" stroke-opacity=".38" stroke-width="1.1"/>` +
    `<g class="${cls}">` +
    `<path d="M${cx} ${cy} L${cx} ${cy-r*.82} M${cx} ${cy} L${cx+r*.71} ${cy+r*.48} M${cx} ${cy} L${cx-r*.71} ${cy+r*.48}" ` +
    `stroke="${color}" stroke-width="${Math.max(r*.26,2)}" stroke-linecap="round" opacity=".88"/></g>` +
    `<circle cx="${cx}" cy="${cy}" r="${Math.max(r*.22,1.6)}" fill="#2A241D" stroke="#4A4034" stroke-width=".7"/>`;
}

/* Рассрочка 0-0-12: без первого взноса и переплаты, поэтому это
   просто цена, делённая на 12 и округлённая вверх до сотни. */
const INSTAL_MONTHS = 12;
const perMonth = price => Math.ceil(price / INSTAL_MONTHS / 100) * 100;

/* ============================================================
   КАТАЛОГ
   ============================================================ */
const grid = document.getElementById('grid');

function cardHTML(b, i){
  const tag = b.tag ? `<span class="card__tag${b.tagCold ? ' card__tag--cold' : ''}">${b.tag}</span>` : '';
  const save = b.old ? `<s>${rub(b.old)}</s><i>−${rub(b.old - b.price)}</i>` : '';
  const specs = b.short.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('');
  return `<article class="card rise" data-id="${b.id}" data-cats="${b.cats.join(' ')}" data-price="${b.price}" data-d="${i % 3}">
    ${tag}
    <div class="card__art">${pcSVG(b, 'card')}${zapSVG(b.style.glow)}</div>
    <div class="card__body">
      <div class="card__volt"><span>${b.volt} V</span><b>VLTZ-${b.volt}</b></div>
      <a class="card__name" href="build.html?id=${b.id}">${b.name}</a>
      <p class="card__for">${b.for}</p>
      <dl class="spec">${specs}</dl>
      <div class="card__foot">
        <div class="price"><b>${rub(b.price)}</b>${save}</div>
        <p class="instal">или <b>${rub(perMonth(b.price))}</b> в месяц — рассрочка 0-0-12</p>
        <div class="card__btns">
          <button class="btn btn--sm" data-add="${b.id}">В корзину</button>
          <button class="btn btn--ghost btn--sm" data-more="${b.id}">Подробнее</button>
        </div>
        <label class="card__cmp">
          <input type="checkbox" data-cmp="${b.id}"><span>Сравнить</span>
        </label>
      </div>
    </div>
  </article>`;
}
// на главной сетка показывает только выбранные сборки (data-only="id,id"),
// в каталоге — все шесть
if(grid){
  const only = (grid.dataset.only || '').split(',').filter(Boolean);
  const list = only.length ? only.map(id => BUILDS.find(b => b.id === id)).filter(Boolean) : BUILDS;
  grid.innerHTML = list.map(cardHTML).join('');
}

/* фильтры + бюджет — есть только на странице каталога */
let activeCat = 'all';
let maxBudget = 700000;
const budget = document.getElementById('budget');
const budgetOut = document.getElementById('budgetOut');

/* сортировка: порядок задаём через CSS order, чтобы не перерисовывать карточки */
const sortSel = document.getElementById('sort');
const found = document.getElementById('found');
const SORTS = {
  default: null,
  cheap:  (a, b) => a.price - b.price,
  pricey: (a, b) => b.price - a.price,
  power:  (a, b) => b.volt - a.volt
};

function applySort(){
  if(!grid || !sortSel) return;
  const cmp = SORTS[sortSel.value];
  const order = cmp ? [...BUILDS].sort(cmp).map(b => b.id) : BUILDS.map(b => b.id);
  grid.querySelectorAll('.card').forEach(card => {
    card.style.order = order.indexOf(card.dataset.id);
  });
}

function applyFilters(){
  if(!grid) return;
  let shown = 0;
  grid.querySelectorAll('.card').forEach(card => {
    const cats = card.dataset.cats.split(' ');
    const okCat = activeCat === 'all' || cats.includes(activeCat);
    const okPrice = +card.dataset.price <= maxBudget;
    card.classList.toggle('is-hidden', !okCat);
    card.classList.toggle('is-out', okCat && !okPrice);
    if(okCat) shown++;
  });
  const empty = grid.querySelector('.empty');
  if(shown === 0 && !empty){
    grid.insertAdjacentHTML('beforeend',
      '<p class="empty">В этой категории пока нет сборок. Соберём под заказ — позвоните нам.</p>');
  } else if(shown > 0 && empty){ empty.remove(); }

  if(found){
    const total = grid.querySelectorAll('.card').length;
    found.innerHTML = shown === total
      ? `Все <b>${total}</b> сборки`
      : `Показано <b>${shown}</b> из ${total}`;
  }
}
if(sortSel) sortSel.addEventListener('change', applySort);
document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.chip').forEach(c => c.setAttribute('aria-pressed', String(c === chip)));
    activeCat = chip.dataset.filter;
    applyFilters();
  });
});
if(budget){
  budget.addEventListener('input', () => {
    maxBudget = +budget.value;
    budgetOut.textContent = maxBudget >= 700000 ? 'без лимита' : rub(maxBudget);
    applyFilters();
  });
  budgetOut.textContent = 'без лимита';
}

/* ============================================================
   КОРЗИНА
   ============================================================ */
/* Корзина хранит два вида позиций:
   items   — количество по id ({ razryad: 1 })
   customs — сборки из конфигуратора ({ 'custom-1712…': {name, price, specs, glow} })
   Общая на все страницы: лежит в localStorage. */
const KEY = 'voltazh_cart_v2';
let cart = { items: {}, customs: {} };
try {
  const raw = JSON.parse(localStorage.getItem(KEY));
  if(raw && raw.items) cart = { items: raw.items || {}, customs: raw.customs || {} };
} catch(e) { /* приватный режим или отключённое хранилище — работаем без сохранения */ }

const drawer = document.getElementById('drawer');
const scrim  = document.getElementById('scrim');
const cartN  = document.getElementById('cartN');
const cartBody = document.getElementById('cartBody');
const cartFoot = document.getElementById('cartFoot');
let orderDone = false;

const save = () => { try { localStorage.setItem(KEY, JSON.stringify(cart)); } catch(e){} };
const count = () => Object.values(cart.items).reduce((a, b) => a + b, 0);

// позиция корзины: либо готовая сборка из каталога, либо собранная вручную
function item(id){
  return cart.customs[id] || BUILDS.find(b => b.id === id) || null;
}
const total = () => Object.entries(cart.items)
  .reduce((a, [id, q]) => a + ((item(id) || {}).price || 0) * q, 0);

/* добавить сборку из конфигуратора; вызывается из config.js */
function addCustom(custom){
  const id = 'custom-' + Date.now().toString(36);
  cart.customs[id] = custom;
  cart.items[id] = 1;
  save(); renderCart(); openCart();
  return id;
}

function renderCart(){
  const n = count();
  cartN.textContent = n;
  if(n) cartN.removeAttribute('data-zero'); else cartN.setAttribute('data-zero', '');
  // счётчик визуальный, поэтому состояние дублируем в подпись кнопки для скринридера
  const opener = document.getElementById('cartOpen');
  if(opener) opener.setAttribute('aria-label',
    n ? `Открыть корзину, товаров: ${n}` : 'Открыть корзину, пока пусто');

  if(!n){
    // вместо тупика предлагаем конкретную сборку — ту, которую берут чаще всего
    const pick = BUILDS.find(b => b.tag === 'Хит') || BUILDS[1];
    cartBody.innerHTML = `<div class="empty-wrap">
      <div class="drawer__empty">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M2 3h3l2.6 12.4h10.2L21 6.2H6" stroke="currentColor" stroke-width="1.6"
                stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="10" cy="20" r="1.6" fill="currentColor"/>
          <circle cx="17.5" cy="20" r="1.6" fill="currentColor"/>
        </svg>
        <h4>В корзине пока пусто</h4>
        <p>Начните с той сборки, которую у нас берут чаще всего — или посмотрите все шесть.</p>
        <button class="btn btn--ghost btn--sm" data-go-catalog>Открыть каталог</button>
      </div>
      <div class="offer">
        <div class="offer__label">Хит продаж</div>
        <div class="offer__row">
          <div class="line__art">${pcSVG(pick, 'mini')}</div>
          <div class="offer__mid">
            <div class="line__n">${pick.name}</div>
            <div class="line__v">${pick.volt} V · ${pick.short[1][1]}</div>
            <div class="offer__price"><b>${rub(pick.price)}</b>${pick.old ? `<s>${rub(pick.old)}</s>` : ''}</div>
          </div>
        </div>
        <button class="btn btn--wide btn--sm" data-add="${pick.id}">Добавить в корзину</button>
      </div>
    </div>`;
    cartFoot.hidden = true;
    cartFoot.innerHTML = '';   // чтобы старый итог не всплыл при повторном открытии
    return;
  }
  orderDone = false;

  cartBody.innerHTML = Object.entries(cart.items).map(([id, q]) => {
    const b = item(id);
    if(!b) return '';
    const art = b.style ? pcSVG(b, 'mini') : pcSVG(customShape(b), 'mini');
    const sub = b.volt ? `${b.volt} V · VLTZ-${b.volt}` : b.specs;
    return `<div class="line">
      <div class="line__art">${art}</div>
      <div class="line__mid">
        <div class="line__n">${b.name}</div>
        <div class="line__v">${sub}</div>
        <div class="line__p">${rub(b.price * q)}</div>
        <div class="qty">
          <button data-dec="${id}" aria-label="Уменьшить количество">−</button>
          <span>${q}</span>
          <button data-inc="${id}" aria-label="Увеличить количество">+</button>
          <button class="rm" data-rm="${id}">удалить</button>
        </div>
      </div>
    </div>`;
  }).join('');

  const sum = total();
  const delivery = sum >= 150000 ? 0 : 2900;
  cartFoot.hidden = false;
  cartFoot.innerHTML = `
    <div class="sum"><span>Сборки (${n})</span><span>${rub(sum)}</span></div>
    <div class="sum"><span>Доставка</span><span>${delivery ? rub(delivery) : 'бесплатно'}</span></div>
    <div class="sum sum--total"><span>Итого</span><b>${rub(sum + delivery)}</b></div>
    <form class="form" id="orderForm" novalidate>
      <div class="field"><label for="fName">Имя</label><input id="fName" name="name" autocomplete="name" placeholder="Как к вам обращаться"><span class="err">Укажите имя</span></div>
      <div class="field"><label for="fPhone">Телефон</label><input id="fPhone" name="phone" inputmode="tel" autocomplete="tel" placeholder="+7 (___) ___-__-__"><span class="err">Нужно не меньше 10 цифр</span></div>
      <div class="field"><label for="fCity">Город доставки</label><input id="fCity" name="city" autocomplete="address-level2" placeholder="Например, Томск"><span class="err">Укажите город</span></div>
      <div class="field"><label for="fPay">Оплата</label>
        <select id="fPay" name="pay">
          <option>Картой онлайн</option><option>Рассрочка 0-0-12</option>
          <option>Наличными при получении</option><option>Счёт для юрлица</option>
        </select>
      </div>
      <div class="field field--agree">
        <label class="agree">
          <input type="checkbox" id="fAgree">
          <span>Согласен на обработку персональных данных и с <a href="policy.html" target="_blank" rel="noopener">политикой конфиденциальности</a></span>
        </label>
        <span class="err">Без согласия мы не имеем права принять заказ</span>
      </div>
      <button class="btn btn--wide" type="submit">Оформить заказ</button>
    </form>`;
}

/* ---------- доступность всплывающих слоёв ----------
   Пока корзина или карточка открыты, Tab не должен уводить фокус
   на страницу под ними, а при закрытии фокус обязан вернуться на ту
   кнопку, которой слой открыли. Иначе с клавиатуры сайт непроходим. */
const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])';
let lastFocused = null;

function trapFocus(e){
  if(e.key !== 'Tab') return;
  const box = modal.classList.contains('on') ? modal
            : drawer.classList.contains('on') ? drawer : null;
  if(!box) return;
  const items = [...box.querySelectorAll(FOCUSABLE)].filter(el => el.offsetParent !== null);
  if(!items.length) return;
  const first = items[0], last = items[items.length - 1];
  if(e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
  else if(!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
}
document.addEventListener('keydown', trapFocus);

function restoreFocus(){
  if(modal.classList.contains('on') || drawer.classList.contains('on')) return;
  if(lastFocused && document.contains(lastFocused)) lastFocused.focus({ preventScroll: true });
  lastFocused = null;
}

function openCart(){
  if(!drawer.classList.contains('on') && !modal.classList.contains('on')) lastFocused = document.activeElement;
  drawer.classList.add('on'); scrim.classList.add('on');
  drawer.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  const f = drawer.querySelector('input, button');
  if(f) f.focus({ preventScroll: true });
}
function closeCart(){
  drawer.classList.remove('on');
  drawer.setAttribute('aria-hidden', 'true');
  // подложка и блокировка скролла нужны, пока открыта модалка товара
  if(!modal.classList.contains('on')){
    scrim.classList.remove('on');
    document.body.style.overflow = '';
  }
  if(orderDone){ orderDone = false; renderCart(); }
  restoreFocus();
}

document.getElementById('cartOpen').addEventListener('click', openCart);
document.getElementById('cartClose').addEventListener('click', closeCart);
scrim.addEventListener('click', () => { closeCart(); closeModal(); });

document.addEventListener('click', e => {
  if(e.target.closest('[data-go-catalog]')){
    closeCart();
    // на главной и в каталоге сборки рядом, с остальных страниц уводим в каталог
    const here = document.getElementById('catalog');
    if(here) here.scrollIntoView({ behavior: RM ? 'auto' : 'smooth', block: 'start' });
    else location.href = 'catalog.html';
    return;
  }
  const add = e.target.closest('[data-add]');
  if(add){
    const id = add.dataset.add;
    cart.items[id] = (cart.items[id] || 0) + 1;
    save(); renderCart();
    if(add.closest('#modal')) closeModal();   // из карточки товара уходим сразу в корзину
    openCart();
    add.textContent = 'Добавлено';
    setTimeout(() => { add.textContent = 'В корзину'; }, 1400);
    return;
  }
  const inc = e.target.closest('[data-inc]');
  if(inc){ cart.items[inc.dataset.inc]++; save(); renderCart(); return; }
  const dec = e.target.closest('[data-dec]');
  if(dec){
    const id = dec.dataset.dec;
    if(--cart.items[id] <= 0){ delete cart.items[id]; delete cart.customs[id]; }
    save(); renderCart(); return;
  }
  const rm = e.target.closest('[data-rm]');
  if(rm){ delete cart.items[rm.dataset.rm]; delete cart.customs[rm.dataset.rm]; save(); renderCart(); return; }
  const more = e.target.closest('[data-more]');
  if(more){ openModal(more.dataset.more); return; }
});

/* Общая проверка полей: возвращает true, если всё заполнено.
   У флажков берём состояние, у остальных — значение. */
function validate(form, checks){
  let ok = true;
  checks.forEach(([id, test]) => {
    const input = form.querySelector('#' + id);
    if(!input) return;
    const good = test(input.type === 'checkbox' ? input.checked : input.value);
    input.closest('.field').classList.toggle('bad', !good);
    if(!good && ok){ input.focus(); ok = false; }
  });
  return ok;
}

/* ============================================================
   ОТПРАВКА ЗАЯВОК
   Пока ENDPOINT пуст, формы работают как витрина: показывают экран
   благодарности и никуда ничего не шлют. Чтобы заявки приходили
   по-настоящему, впишите адрес приёмника — например, форму Formspree
   вида https://formspree.io/f/xxxxxxx. Остальной код менять не нужно.
   ============================================================ */
const ENDPOINT = '';

async function send(kind, data){
  if(!ENDPOINT) return true;                 // витринный режим
  try{
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ _subject: `Вольтаж — ${kind}`, ...data })
    });
    return res.ok;
  } catch(err){ return false; }
}

function sendFailed(form){
  const box = form.querySelector('.form-error') || Object.assign(document.createElement('p'), { className: 'form-error' });
  box.textContent = 'Не получилось отправить — проверьте связь или напишите нам в телеграм.';
  if(!box.parentNode) form.appendChild(box);
}

/* вопрос мастеру */
document.addEventListener('submit', async e => {
  if(e.target.id !== 'askForm') return;
  e.preventDefault();
  const f = e.target;
  const ok = validate(f, [
    ['aName',    v => v.trim().length >= 2],
    ['aContact', v => v.trim().length >= 4],
    ['aText',    v => v.trim().length >= 10],
    ['aAgree',   v => v === true]
  ]);
  if(!ok) return;

  const btn = f.querySelector('button[type=submit]');
  btn.disabled = true; btn.textContent = 'Отправляем…';
  const sent = await send('вопрос мастеру', {
    name:    f.querySelector('#aName').value.trim(),
    contact: f.querySelector('#aContact').value.trim(),
    text:    f.querySelector('#aText').value.trim()
  });
  if(!sent){
    btn.disabled = false; btn.textContent = 'Отправить вопрос';
    sendFailed(f); return;
  }

  const name = f.querySelector('#aName').value.trim().split(' ')[0];
  f.innerHTML = `<div class="done">
    <div class="done__i">✓</div>
    <h3>Вопрос отправлен</h3>
    <p>${name}, спасибо. Мастер прочитает и ответит на указанный контакт — в рабочее время обычно в течение часа.</p>
    <span class="hand" style="font-size:21px; color:var(--volt)">до связи!</span>
  </div>`;
});

/* оформление заказа */
document.addEventListener('submit', async e => {
  if(e.target.id !== 'orderForm') return;
  e.preventDefault();
  const f = e.target;
  const ok = validate(f, [
    ['fName',  v => v.trim().length >= 2],
    ['fPhone', v => (v.match(/\d/g) || []).length >= 10],
    ['fCity',  v => v.trim().length >= 2],
    ['fAgree', v => v === true]
  ]);
  if(!ok) return;

  const btn = f.querySelector('button[type=submit]');
  btn.disabled = true; btn.textContent = 'Отправляем…';
  const sent = await send('заказ', {
    name:  f.querySelector('#fName').value.trim(),
    phone: f.querySelector('#fPhone').value.trim(),
    city:  f.querySelector('#fCity').value.trim(),
    pay:   f.querySelector('#fPay').value,
    order: Object.entries(cart.items)
             .map(([id, q]) => `${(item(id) || {}).name || id} ×${q}`).join(', '),
    total: total()
  });
  if(!sent){
    btn.disabled = false; btn.textContent = 'Оформить заказ';
    sendFailed(f); return;
  }

  const name = f.querySelector('#fName').value.trim().split(' ')[0];
  const sum = total();
  orderDone = true;
  cartBody.innerHTML = `<div class="done">
    <div class="done__i">✓</div>
    <h3>Заказ принят</h3>
    <p>${name}, спасибо! Заявка на ${rub(sum + (sum >= 150000 ? 0 : 2900))} у мастера.
    Позвоним в течение 20 минут, чтобы согласовать конфигурацию до оплаты.</p>
    <p style="font-family:var(--f-mono); font-size:12px; letter-spacing:.06em; color:var(--ink-3)">Номер заявки VLTZ-${Math.floor(Math.random() * 9000 + 1000)}</p>
  </div>`;
  cartFoot.hidden = true;
  cart = { items: {}, customs: {} }; save();
  cartN.textContent = '0'; cartN.setAttribute('data-zero', '');
});

renderCart();

/* ============================================================
   МОДАЛКА ТОВАРА
   ============================================================ */
const modal = document.getElementById('modal');
const modalGrid = document.getElementById('modalGrid');

function openModal(id){
  const b = BUILDS.find(x => x.id === id);
  if(!b) return;
  const max = Math.max(...b.fps.map(f => f[1]));
  const rows = b.full.map(([k, v]) => `<tr><th>${k}</th><td>${v}</td></tr>`).join('');
  const bars = b.fps.map(([g, v]) =>
    `<div class="fps__row"><span>${g}</span><div class="fps__bar"><i data-w="${Math.round(v / max * 100)}"></i></div><span class="fps__v">${v}</span></div>`
  ).join('');
  const save = b.old ? `<s>${rub(b.old)}</s><i>выгода ${rub(b.old - b.price)}</i>` : '';

  modalGrid.innerHTML = `
    <div class="modal__art">${pcSVG(b, 'modal')}${zapSVG(b.style.glow)}</div>
    <div class="modal__body">
      <div class="card__volt" style="max-width:220px"><span>${b.volt} V</span><b>VLTZ-${b.volt}</b></div>
      <h3>${b.name}</h3>
      <p class="modal__for">${b.for}</p>
      <table class="tbl"><tbody>${rows}</tbody></table>
      <h4 style="font-size:15px; font-weight:600; letter-spacing:-.02em; margin-bottom:16px">Сколько кадров выдаёт</h4>
      <div class="fps">${bars}</div>
      <p class="fps__note">${b.fpsNote}</p>
      <div class="price"><b>${rub(b.price)}</b>${save}</div>
      <p class="instal instal--big">или <b>${rub(perMonth(b.price))}</b> в месяц — рассрочка 0-0-12 без переплаты</p>
      <div class="card__btns" style="margin-top:18px">
        <button class="btn" data-add="${b.id}">В корзину</button>
        <a class="btn btn--ghost" href="build.html?id=${b.id}">Открыть страницу</a>
        <button class="btn btn--ghost" data-close-modal>Закрыть</button>
      </div>
    </div>`;

  showModal();
  requestAnimationFrame(() => {
    modal.querySelectorAll('.fps__bar i').forEach(i => { i.style.width = i.dataset.w + '%'; });
  });
}

/* сравнение показываем в той же модалке — это тот же слой поверх каталога */
function openCompare(){
  modalGrid.innerHTML = cmpTable();
  showModal();
}

function showModal(){
  if(!modal.classList.contains('on') && !drawer.classList.contains('on')) lastFocused = document.activeElement;
  modal.classList.add('on'); scrim.classList.add('on');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  modal.scrollTop = 0;
  document.getElementById('modalClose').focus({ preventScroll: true });
}
function closeModal(){
  if(!modal.classList.contains('on')) return;
  modal.classList.remove('on');
  modal.setAttribute('aria-hidden', 'true');
  if(!drawer.classList.contains('on')){
    scrim.classList.remove('on');
    document.body.style.overflow = '';
  }
  restoreFocus();
}
document.getElementById('modalClose').addEventListener('click', closeModal);
modalGrid.addEventListener('click', e => { if(e.target.closest('[data-close-modal]')) closeModal(); });
document.addEventListener('keydown', e => {
  if(e.key === 'Escape'){ closeModal(); closeCart(); }
});
if(grid){
  grid.addEventListener('click', e => {
    const card = e.target.closest('.card');
    // клик по любому органу управления внутри карточки — это действие
    // самого органа, а не «открыть карточку»
    if(card && !e.target.closest('button, a, label, input, select, textarea')) openModal(card.dataset.id);
  });
}

/* ============================================================
   АНИМАЦИЯ ПО СКРОЛЛУ
   ============================================================ */
const root = document.documentElement;
const top = document.getElementById('top');
const railRead = document.getElementById('railRead');
const rail = document.getElementById('rail');

/* Деления рейки строятся по реальным секциям страницы, поэтому рейка
   живёт только на главной: на каталоге и в конфигураторе этих секций нет
   и деления схлопнулись бы в одну точку. */
const MARKS = [
  ['#hero', '0 V'], ['#catalog', '220 V'], ['#why', '380 V'],
  ['#how', '660 V'], ['#faq', '1000 V']
];
if(rail){
  const track = rail.querySelector('.rail__track');
  MARKS.forEach(([sel, label]) => {
    if(!document.querySelector(sel)) return;
    const el = document.createElement('div');
    el.className = 'rail__tick';
    el.dataset.sel = sel;
    el.innerHTML = `<i></i><span>${label}</span>`;
    track.appendChild(el);
  });
}
function layoutTicks(){
  if(!rail) return;
  const docH = document.body.scrollHeight - innerHeight;
  rail.querySelectorAll('.rail__tick').forEach(t => {
    const sec = document.querySelector(t.dataset.sel);
    if(!sec) return;
    const p = Math.min(1, Math.max(0, sec.offsetTop / (docH || 1)));
    t.style.top = (p * 100) + '%';
  });
}

let ticking = false;
function onScroll(){
  const docH = document.body.scrollHeight - innerHeight;
  const p = docH > 0 ? Math.min(1, Math.max(0, scrollY / docH)) : 0;
  root.style.setProperty('--sp', p.toFixed(4));
  top.classList.toggle('stuck', scrollY > 12);
  if(rail){
    railRead.textContent = Math.round(p * 1000) + ' V';
    rail.querySelectorAll('.rail__tick').forEach(t => {
      t.classList.toggle('on', parseFloat(t.style.top) / 100 <= p + .002);
    });
  }
  ticking = false;
}
addEventListener('scroll', () => {
  if(!ticking){ ticking = true; requestAnimationFrame(onScroll); }
}, { passive: true });
addEventListener('resize', () => { layoutTicks(); onScroll(); });
layoutTicks(); onScroll();

/* ============================================================
   ПЛАВНАЯ ПРОКРУТКА
   Колесо мыши не двигает страницу рывком, а задаёт цель, к которой
   позиция подтягивается каждый кадр. Только для мыши: на тачпаде и
   на сенсорных экранах инерция уже своя, вмешиваться в неё вредно.
   Клавиатура, полоса прокрутки и якорные ссылки работают как обычно —
   мы их не перехватываем, а подстраиваемся.
   ============================================================ */
if(!RM && matchMedia('(pointer:fine)').matches){
  let target = scrollY, cur = target, raf = null, own = false;
  const limit = () => document.documentElement.scrollHeight - innerHeight;

  function glide(){
    cur += (target - cur) * 0.14;
    if(Math.abs(target - cur) < 0.4){ cur = target; raf = null; }
    else raf = requestAnimationFrame(glide);
    // instant обязателен: у html стоит scroll-behavior:smooth для якорей,
    // иначе каждый кадр запускал бы ещё одну плавную прокрутку поверх нашей
    own = true; scrollTo({ top: cur, behavior: 'instant' }); own = false;
  }

  addEventListener('wheel', e => {
    if(e.ctrlKey) return;                                   // масштабирование не трогаем
    if(document.body.style.overflow === 'hidden') return;    // открыта корзина или карточка
    const t = e.target;
    if(t && t.closest && t.closest('.drawer, .modal')) return; // внутри панелей прокрутка родная
    e.preventDefault();
    const step = e.deltaMode === 1 ? e.deltaY * 18 : e.deltaY;
    target = Math.max(0, Math.min(limit(), target + step));
    if(!raf) raf = requestAnimationFrame(glide);
  }, { passive: false });

  // если страницу двинули иначе — клавишами, полосой, якорем, — берём новую точку отсчёта
  addEventListener('scroll', () => { if(!own && !raf) target = cur = scrollY; }, { passive: true });
  addEventListener('resize', () => { target = cur = scrollY; });
}

/* появление блоков */
const io = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); }
  });
}, { threshold: .05, rootMargin: '0px 0px -8% 0px' });   // начинаем раньше — проявление мягче
document.querySelectorAll('.rise, .step').forEach(el => io.observe(el));

/* счётчики */
const cio = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if(!en.isIntersecting) return;
    const el = en.target;
    cio.unobserve(el);
    if(el.dataset.static){ el.textContent = el.dataset.static; return; }
    const target = +el.dataset.count;
    const suffix = el.dataset.suffix || '';
    const small = el.querySelector('small');
    const tail = small ? small.outerHTML : '';
    if(RM){ el.innerHTML = target.toLocaleString('ru-RU') + suffix + tail; return; }
    const t0 = performance.now(), dur = 1300;
    (function step(t){
      const k = Math.min(1, (t - t0) / dur);
      const e = 1 - Math.pow(1 - k, 3);
      el.innerHTML = Math.round(target * e).toLocaleString('ru-RU') + (k === 1 ? suffix : '') + tail;
      if(k < 1) requestAnimationFrame(step);
    })(performance.now());
  });
}, { threshold: .5 });
document.querySelectorAll('[data-count]').forEach(el => cio.observe(el));

/* ============================================================
   СЦЕНАРИЙ ГЕРОЯ
   Цикл 18 с. Запускается при наведении и крутится, пока курсор
   на компьютере. Если курсор увели — доигрываем до конца, чтобы
   ПК никогда не остался разобранным.
   ============================================================ */
const art = document.querySelector('.hero__art');
if(art && !RM){
  const CYCLE = 18000;
  const PHASES = [
    ['spark',     0],      // искрит
    ['overload',  5000],   // перегрузка, тряска
    ['boom',      7000],   // взрыв
    ['dark',      8000],   // обломки и дым
    ['repair',    12000],  // сборка обратно
    ['restored',  16800]   // питание вернулось
  ];
  let timers = [], running = false, stopAfterCycle = false;

  const phase = p => { art.className = 'hero__art seq p-' + p; };
  const clear = () => { timers.forEach(clearTimeout); timers = []; };

  function cycle(){
    PHASES.forEach(([name, at]) => timers.push(setTimeout(() => phase(name), at)));
    timers.push(setTimeout(() => {
      if(stopAfterCycle){ running = false; stopAfterCycle = false; phase('idle'); }
      else cycle();
    }, CYCLE));
  }

  art.addEventListener('pointerenter', () => {
    stopAfterCycle = false;
    if(running) return;
    running = true;
    art.classList.add('seq');
    clear(); cycle();
  });
  art.addEventListener('pointerleave', () => { if(running) stopAfterCycle = true; });
}

/* подсветка за курсором */
const glow = document.getElementById('cursorGlow');
if(!RM && matchMedia('(pointer:fine)').matches){
  addEventListener('pointermove', e => {
    glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    glow.style.opacity = '1';
  }, { passive: true });
  addEventListener('pointerleave', () => { glow.style.opacity = '0'; });
}

applyFilters();

/* ============================================================
   СРАВНЕНИЕ СБОРОК
   Отмеченные карточки копятся в панели внизу; по кнопке
   открывается таблица в той же модалке, что и карточка товара.
   Строки, где значения различаются, подсвечиваются — ради этого
   сравнение и затевают.
   ============================================================ */
const cmpBar = document.getElementById('cmpbar');
const CMP_MAX = 3;
let cmp = [];

function renderCmpBar(){
  if(!cmpBar) return;
  cmpBar.classList.toggle('is-on', cmp.length > 0);
  if(!cmp.length) return;
  const chips = cmp.map(id => {
    const b = BUILDS.find(x => x.id === id);
    return `<span class="cmpchip">${b.name}
      <button data-cmp-off="${id}" aria-label="Убрать ${b.name} из сравнения">✕</button></span>`;
  }).join('');
  cmpBar.querySelector('.cmpbar__in').innerHTML = `
    <div class="cmpbar__list">${chips}</div>
    <span class="cmpbar__hint">${cmp.length < 2 ? 'Отметьте ещё одну сборку' : `Выбрано ${cmp.length} из ${CMP_MAX}`}</span>
    <button class="btn btn--sm" data-cmp-open ${cmp.length < 2 ? 'disabled' : ''}>Сравнить</button>
    <button class="btn btn--ghost btn--sm" data-cmp-clear>Сбросить</button>`;
}

function setCmp(id, on){
  if(on && !cmp.includes(id)){
    if(cmp.length >= CMP_MAX){
      const drop = cmp.shift();
      const box = document.querySelector(`[data-cmp="${drop}"]`);
      if(box) box.checked = false;
    }
    cmp.push(id);
  }
  if(!on) cmp = cmp.filter(x => x !== id);
  const box = document.querySelector(`[data-cmp="${id}"]`);
  if(box) box.checked = cmp.includes(id);
  renderCmpBar();
}

function cmpTable(){
  const list = cmp.map(id => BUILDS.find(b => b.id === id));
  // строки берём из полной спецификации первой сборки: порядок у всех одинаковый
  const rows = list[0].full.map(([label], i) => {
    const values = list.map(b => (b.full[i] || ['', '—'])[1]);
    const diff = new Set(values).size > 1;
    return `<tr class="${diff ? 'is-diff' : ''}">
      <th scope="row">${label}</th>${values.map(v => `<td>${v}</td>`).join('')}</tr>`;
  }).join('');

  return `<div class="modal__body" style="grid-column:1/-1">
    <div class="eyebrow">Сравнение</div>
    <h3 style="text-transform:none">${list.map(b => b.name).join(' · ')}</h3>
    <div class="cmp__wrap">
      <table class="cmp__tbl">
        <thead><tr><th>Характеристика</th>${list.map(b => `<th>${b.name}<br><span style="font-family:var(--f-mono);font-size:11px;color:var(--volt);font-weight:400">${b.volt} V</span></th>`).join('')}</tr></thead>
        <tbody>
          <tr><th scope="row">Цена</th>${list.map(b => `<td class="cmp__price">${rub(b.price)}</td>`).join('')}</tr>
          <tr><th scope="row">В месяц</th>${list.map(b => `<td>${rub(perMonth(b.price))}</td>`).join('')}</tr>
          <tr><th scope="row">Рассчитан на</th>${list.map(b => `<td>${b.for}</td>`).join('')}</tr>
          ${rows}
        </tbody>
      </table>
    </div>
    <p class="cmp__legend"><i></i> Подсвечены строки, где сборки различаются</p>
    <div class="card__btns" style="margin-top:22px">
      ${list.map(b => `<button class="btn btn--sm" data-add="${b.id}">${b.name} в корзину</button>`).join('')}
    </div>
  </div>`;
}

document.addEventListener('change', e => {
  const box = e.target.closest('[data-cmp]');
  if(box) setCmp(box.dataset.cmp, box.checked);
});
document.addEventListener('click', e => {
  const off = e.target.closest('[data-cmp-off]');
  if(off){ setCmp(off.dataset.cmpOff, false); return; }
  if(e.target.closest('[data-cmp-clear]')){
    [...cmp].forEach(id => setCmp(id, false));
    return;
  }
  if(e.target.closest('[data-cmp-open]') && cmp.length > 1) openCompare();
});

/* ============================================================
   МОБИЛЬНОЕ МЕНЮ
   Ниже 900px горизонтальная навигация не помещается и раскрывается
   панелью под шапкой. Закрывается по ссылке, по Escape, по клику
   мимо и при возврате на широкий экран.
   ============================================================ */
const burger = document.getElementById('burger');
const navBox = document.getElementById('nav');
if(burger && navBox){
  const setNav = open => {
    navBox.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
  };
  burger.addEventListener('click', () => setNav(!navBox.classList.contains('is-open')));
  navBox.addEventListener('click', e => { if(e.target.closest('a')) setNav(false); });
  document.addEventListener('keydown', e => { if(e.key === 'Escape') setNav(false); });
  document.addEventListener('click', e => {
    if(!navBox.classList.contains('is-open')) return;
    if(e.target.closest('#nav, #burger')) return;   // клик по самому меню не считается
    setNav(false);
  });
  addEventListener('resize', () => { if(innerWidth > 900) setNav(false); });
}

/* ============================================================
   COOKIE
   Баннер показывается один раз, пока выбор не сделан. Отказ от
   необязательных — такая же полноценная кнопка, как согласие:
   ничего не прячем за «настройками». Передумать можно в подвале.
   ============================================================ */
const CKEY = 'voltazh_cookie_v1';
const cookieBox = document.getElementById('cookie');
if(cookieBox){
  let choice = null;
  try { choice = localStorage.getItem(CKEY); } catch(e){}
  // показываем всё, кроме случая, когда выбор уже сделан осознанно
  if(choice !== 'all' && choice !== 'need') cookieBox.classList.add('is-on');

  document.addEventListener('click', e => {
    const pick = e.target.closest('[data-cookie]');
    if(pick){
      try { localStorage.setItem(CKEY, pick.dataset.cookie); } catch(e){}
      cookieBox.classList.remove('is-on');
      return;
    }
    if(e.target.closest('[data-cookie-open]')){
      cookieBox.style.setProperty('--cd', '0s');   // открыли вручную — без паузы
      cookieBox.classList.add('is-on');
      cookieBox.scrollIntoView({ behavior: RM ? 'auto' : 'smooth', block: 'nearest' });
    }
  });
}

/* ============================================================
   МИКРОРАЗМЕТКА SCHEMA.ORG
   Собирается из того, что реально есть на странице: товары — из
   данных каталога, вопросы — из блока FAQ, крошки — из навигации.
   Так разметка не может разойтись с содержимым.
   ============================================================ */
const SITE = 'https://voltazh.ru';
function jsonLd(data){
  const tag = document.createElement('script');
  tag.type = 'application/ld+json';
  tag.textContent = JSON.stringify(data);
  document.head.appendChild(tag);
}

const blocks = [{
  '@context': 'https://schema.org',
  '@type': 'Store',
  name: 'ВОЛЬТАЖ',
  description: 'Мастерская сборки игровых компьютеров под заказ',
  url: SITE + '/',
  logo: SITE + '/favicon.svg',
  image: SITE + '/og-image.png',
  telephone: '+7-3822-55-50-19',
  email: 'zakaz@voltazh.ru',
  priceRange: '94900–649900 RUB',
  address: { '@type': 'PostalAddress', addressLocality: 'Томск', addressCountry: 'RU' },
  openingHours: 'Mo-Sa 10:00-20:00'
}];

// каталог сборок — только там, где показаны все шесть
if(grid && !grid.dataset.only){
  blocks.push({
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Каталог игровых сборок ВОЛЬТАЖ',
    numberOfItems: BUILDS.length,
    itemListElement: BUILDS.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Product',
        name: `ВОЛЬТАЖ ${b.name} ${b.volt} V`,
        description: b.for,
        sku: `VLTZ-${b.volt}`,
        url: `${SITE}/build.html?id=${b.id}`,
        brand: { '@type': 'Brand', name: 'ВОЛЬТАЖ' },
        offers: {
          '@type': 'Offer', priceCurrency: 'RUB', price: b.price,
          availability: 'https://schema.org/InStock',
          url: `${SITE}/build.html?id=${b.id}`
        }
      }
    }))
  });
}

// вопросы — читаем прямо из блока FAQ
const faq = document.querySelectorAll('.faq .q');
if(faq.length){
  blocks.push({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [...faq].map(q => ({
      '@type': 'Question',
      name: q.querySelector('summary').textContent.trim(),
      acceptedAnswer: { '@type': 'Answer', text: q.querySelector('.q__a').textContent.trim() }
    }))
  });
}

// хлебные крошки — из самой навигации, если она на странице есть
const crumbNav = document.querySelector('.crumbs');
if(crumbNav){
  const parts = [...crumbNav.children].filter(el => el.tagName === 'A' || el.tagName === 'SPAN')
    .filter(el => el.textContent.trim() !== '/');
  blocks.push({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: parts.map((el, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: el.textContent.trim(),
      item: el.tagName === 'A' ? SITE + '/' + el.getAttribute('href').replace(/^\.?\//, '') : location.href
    }))
  });
}

blocks.forEach(jsonLd);

/* то, что нужно конфигуратору на отдельной странице */
window.VOLTAZH.api = { rub, pcSVG, addCustom, openCart, validate };

})();
