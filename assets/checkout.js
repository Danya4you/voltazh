/* ============================================================
   ОФОРМЛЕНИЕ ЗАКАЗА
   Отдельная страница, потому что в узкой панели корзины анкете тесно.
   Слева — данные покупателя, справа липкий состав заказа, чтобы было
   видно, за что платишь, пока заполняешь поля.
   ============================================================ */
(() => {
'use strict';

const form = document.getElementById('checkout');
if(!form) return;

const api = window.VOLTAZH.api;
const { rub, pcSVG, customShape, validate, send, sendFailed, deliveryFor, FREE_FROM } = api;

const sumBox   = document.getElementById('coSum');
const emptyBox = document.getElementById('coEmpty');
const formBox  = document.getElementById('coForm');

/* ---------- состав заказа ---------- */
function renderSummary(){
  const lines = api.cartLines();

  if(!lines.length){
    formBox.hidden = true;
    emptyBox.hidden = false;
    sumBox.innerHTML = '';
    return;
  }
  formBox.hidden = false;
  emptyBox.hidden = true;

  const sum = api.cartTotal();
  const delivery = deliveryFor(sum);
  const toFree = FREE_FROM - sum;

  sumBox.innerHTML = `
    <h2 class="co__sumh">Ваш заказ</h2>
    <div class="co__lines">
      ${lines.map(({ build: b, qty }) => `
        <div class="co__line">
          <div class="line__art">${b.style ? pcSVG(b, 'mini') : pcSVG(customShape(b), 'mini')}</div>
          <div class="line__mid">
            <div class="line__n">${b.name}</div>
            <div class="line__v">${b.volt ? `${b.volt} V · VLTZ-${b.volt}` : b.specs}</div>
            <div class="co__qty">${qty} шт. × ${rub(b.price)}</div>
          </div>
          <div class="co__lp">${rub(b.price * qty)}</div>
        </div>`).join('')}
    </div>
    <div class="sum"><span>Сборки (${api.cartCount()})</span><span>${rub(sum)}</span></div>
    <div class="sum"><span>Доставка</span><span>${delivery ? rub(delivery) : 'бесплатно'}</span></div>
    <div class="sum sum--total"><span>Итого</span><b>${rub(sum + delivery)}</b></div>
    ${toFree > 0 ? `<p class="tofree">Ещё <b>${rub(toFree)}</b> — и доставка бесплатно</p>` : ''}
    <p class="instal">или <b>${rub(api.perMonth(sum + delivery))}</b> в месяц — рассрочка 0-0-12</p>
    <a class="co__back" href="catalog.html">← Вернуться в каталог</a>`;
}

/* ---------- отправка ---------- */
form.addEventListener('submit', async e => {
  e.preventDefault();

  const ok = validate(form, [
    ['coName',  v => v.trim().length >= 2],
    ['coPhone', v => (v.match(/\d/g) || []).length >= 10],
    ['coCity',  v => v.trim().length >= 2],
    ['coAgree', v => v === true]
  ]);
  if(!ok) return;

  const btn = form.querySelector('button[type=submit]');
  btn.disabled = true; btn.textContent = 'Отправляем…';

  const lines = api.cartLines();
  const sum = api.cartTotal();
  const sent = await send('заказ', {
    name:    form.querySelector('#coName').value.trim(),
    phone:   form.querySelector('#coPhone').value.trim(),
    city:    form.querySelector('#coCity').value.trim(),
    address: form.querySelector('#coAddr').value.trim(),
    delivery: form.querySelector('#coWay').value,
    pay:     form.querySelector('#coPay').value,
    comment: form.querySelector('#coNote').value.trim(),
    order:   lines.map(l => `${l.build.name} ×${l.qty}`).join(', '),
    total:   sum + deliveryFor(sum)
  });

  if(!sent){
    btn.disabled = false; btn.textContent = 'Подтвердить заказ';
    sendFailed(form); return;
  }

  const name = form.querySelector('#coName').value.trim().split(' ')[0];
  const num = 'VLTZ-' + Math.floor(Math.random() * 9000 + 1000);

  document.getElementById('coWrap').innerHTML = `
    <div class="co__done">
      <div class="done__i">✓</div>
      <h1>Заказ принят</h1>
      <p class="lead">${name}, спасибо. Заявка на <b>${rub(sum + deliveryFor(sum))}</b> уже у мастера.
      Позвоним в течение 20 минут, чтобы согласовать конфигурацию до оплаты —
      если что-то в сборке стоит поменять, скажем об этом до того, как вы заплатите.</p>
      <p class="co__num">Номер заявки ${num}</p>
      <div class="hero__cta">
        <a class="btn" href="index.html">На главную</a>
        <a class="btn btn--ghost" href="catalog.html">В каталог</a>
      </div>
      <span class="hand" style="font-size:22px;color:var(--volt);display:block;margin-top:26px">до связи!</span>
    </div>`;

  api.clearCart();
});

renderSummary();
})();
