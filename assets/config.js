/* ============================================================
   КОНФИГУРАТОР
   Собирает ПК из комплектующих и проверяет, что они друг другу
   подходят: сокет, форм-фактор, длина видеокарты, высота кулера,
   размер радиатора, запас по мощности блока питания.
   Каждая найденная несовместимость умеет чиниться в одно нажатие.
   ============================================================ */
(() => {
'use strict';

const { PARTS, PART_ORDER, PRESETS, BUILDS, api } = window.VOLTAZH;
const list = document.getElementById('cfgList');
if(!list) return;

const side  = document.getElementById('cfgSum');
const rub   = api.rub;

let state = Object.assign({}, PRESETS.razryad);
let openCat = null;                       // какая категория сейчас развёрнута

const part = (cat, id) => PARTS[cat].options.find(o => o.id === id);
const chosen = cat => part(cat, state[cat]);

/* ---------- расчёты ---------- */
function draw(){                          // потребление под нагрузкой, Вт
  return chosen('cpu').tdp + chosen('gpu').tdp + 120;
}
function neededWatt(){                    // рекомендуемый блок питания с запасом 30%
  return Math.ceil(draw() * 1.3 / 50) * 50;
}
function sum(){
  return PART_ORDER.reduce((a, cat) => a + chosen(cat).price, 0);
}

/* ---------- совместимость ----------
   Каждая проблема знает, чем её можно вылечить: категория и
   самая дешёвая подходящая замена. */
function issues(){
  const out = [];
  const cpu = chosen('cpu'), mb = chosen('mb'), gpu = chosen('gpu');
  const cooler = chosen('cooler'), psu = chosen('psu'), pc = chosen('pcase');

  const cheapest = (cat, test) => {
    const ok = PARTS[cat].options.filter(test).sort((a, b) => a.price - b.price);
    return ok.length ? ok[0].id : null;
  };

  if(cpu.socket !== mb.socket){
    out.push({ level:'error',
      text:`Процессор ${cpu.name} — сокет ${cpu.socket}, а плата — ${mb.socket}. Вместе они не заработают.`,
      cat:'mb', pick: cheapest('mb', o => o.socket === cpu.socket) });
  }
  if(chosen('ram').mem !== mb.mem){
    out.push({ level:'error',
      text:`Плата «${mb.name}» работает с ${mb.mem}, а выбрана память ${chosen('ram').mem}. Модули просто не встанут в слоты.`,
      cat:'ram', pick: cheapest('ram', o => o.mem === mb.mem && o.gb >= chosen('ram').gb) });
  }
  if(!pc.forms.includes(mb.form)){
    out.push({ level:'error',
      text:`Плата формата ${mb.form} не встанет в корпус «${pc.name}».`,
      cat:'pcase', pick: cheapest('pcase', o => o.forms.includes(mb.form)) });
  }
  if(gpu.len > pc.gpuMax){
    out.push({ level:'error',
      text:`Видеокарта длиной ${gpu.len} мм не влезет: корпус принимает до ${pc.gpuMax} мм.`,
      cat:'pcase', pick: cheapest('pcase', o => o.gpuMax >= gpu.len && o.forms.includes(mb.form)) });
  }
  if(cooler.height && cooler.height > pc.coolerMax){
    out.push({ level:'error',
      text:`Кулер высотой ${cooler.height} мм не поместится: под крышкой ${pc.coolerMax} мм.`,
      cat:'cooler', pick: cheapest('cooler', o => (o.height ? o.height <= pc.coolerMax : o.rad <= pc.radMax) && o.maxTdp >= cpu.tdp) });
  }
  if(cooler.rad && cooler.rad > pc.radMax){
    out.push({ level:'error',
      text:`Радиатор ${cooler.rad} мм не встанет: корпус рассчитан на ${pc.radMax} мм.`,
      cat:'cooler', pick: cheapest('cooler', o => (o.rad ? o.rad <= pc.radMax : o.height <= pc.coolerMax) && o.maxTdp >= cpu.tdp) });
  }
  if(cooler.maxTdp < cpu.tdp){
    out.push({ level:'error',
      text:`Охлаждение рассчитано на ${cooler.maxTdp} Вт, а процессор выделяет ${cpu.tdp} Вт. Будет троттлить.`,
      cat:'cooler', pick: cheapest('cooler', o => o.maxTdp >= cpu.tdp && (o.height ? o.height <= pc.coolerMax : o.rad <= pc.radMax)) });
  }
  const need = neededWatt();
  if(psu.watt < draw()){
    out.push({ level:'error',
      text:`Блока на ${psu.watt} Вт не хватит: под нагрузкой сборка просит около ${draw()} Вт.`,
      cat:'psu', pick: cheapest('psu', o => o.watt >= need) });
  } else if(psu.watt < need){
    out.push({ level:'warn',
      text:`Запаса маловато. Под ${draw()} Вт нагрузки советуем блок от ${need} Вт — тише и живёт дольше.`,
      cat:'psu', pick: cheapest('psu', o => o.watt >= need) });
  }
  const ram = chosen('ram');
  if(ram.gb <= 16 && gpu.price >= 58000){
    out.push({ level:'warn',
      text:'16 ГБ памяти будут сдерживать такую видеокарту. Для игр берите 32 ГБ.',
      cat:'ram', pick: cheapest('ram', o => o.mem === mb.mem && o.gb >= 32) });
  }
  return out;
}

/* подходит ли позиция к остальной сборке (для пометок в списке выбора) */
function optionProblem(cat, o){
  const cpu = chosen('cpu'), mb = chosen('mb'), pc = chosen('pcase');
  if(cat === 'cpu'  && o.socket !== mb.socket)                      return 'другой сокет';
  if(cat === 'mb'){
    if(o.socket !== cpu.socket)                                     return 'другой сокет';
    if(!pc.forms.includes(o.form))                                  return 'не влезет в корпус';
    if(o.mem !== chosen('ram').mem)                                 return `нужна ${o.mem}`;
  }
  if(cat === 'ram' && o.mem !== mb.mem)                             return `плата под ${mb.mem}`;
  if(cat === 'gpu'  && o.len > pc.gpuMax)                           return 'длиннее корпуса';
  if(cat === 'cooler'){
    if(o.maxTdp < cpu.tdp)                                          return 'не потянет процессор';
    if(o.height && o.height > pc.coolerMax)                         return 'выше корпуса';
    if(o.rad && o.rad > pc.radMax)                                  return 'радиатор не встанет';
  }
  if(cat === 'psu'  && o.watt < draw())                             return 'не хватит мощности';
  if(cat === 'pcase'){
    if(!o.forms.includes(mb.form))                                  return 'не примет плату';
    if(o.gpuMax < chosen('gpu').len)                                return 'коротка для видеокарты';
  }
  return null;
}

/* ---------- отрисовка ---------- */
function rowHTML(cat){
  const meta = PARTS[cat], cur = chosen(cat), isOpen = openCat === cat;
  const options = meta.options.map(o => {
    const problem = o.id === cur.id ? null : optionProblem(cat, o);
    return `<button class="opt${o.id === cur.id ? ' is-on' : ''}${problem ? ' is-bad' : ''}"
              data-pick="${cat}:${o.id}">
      <span class="opt__main">
        <span class="opt__name">${o.name}</span>
        <span class="opt__note">${problem ? '⚠ ' + problem : o.note}</span>
      </span>
      <span class="opt__price">${rub(o.price)}</span>
    </button>`;
  }).join('');

  return `<div class="row${isOpen ? ' is-open' : ''}" data-cat="${cat}">
    <button class="row__head" data-toggle="${cat}" aria-expanded="${isOpen}">
      <span class="row__cat">${meta.title}</span>
      <span class="row__pick">${cur.name}</span>
      <span class="row__price">${rub(cur.price)}</span>
      <span class="row__chev" aria-hidden="true">▾</span>
    </button>
    <div class="row__body">
      <p class="row__hint">${meta.hint}</p>
      <div class="opts">${options}</div>
    </div>
  </div>`;
}

function sideHTML(){
  const probs = issues();
  const errors = probs.filter(p => p.level === 'error');
  const gpu = chosen('gpu');

  const problems = probs.length
    ? probs.map((p, i) => `<div class="issue issue--${p.level}">
        <span>${p.text}</span>
        ${p.pick ? `<button class="issue__fix" data-fix="${i}">Исправить</button>` : ''}
      </div>`).join('')
    : `<div class="issue issue--ok"><span>Всё сходится: сокет, габариты и питание в порядке.</span></div>`;

  return `<div class="sumcard">
    <div class="sumcard__top">
      <div class="offer__label">Ваша сборка</div>
      <div class="sumcard__price">${rub(sum())}</div>
    </div>

    <dl class="sumcard__facts">
      <div><dt>Потребление под нагрузкой</dt><dd>${draw()} Вт</dd></div>
      <div><dt>Рекомендуемый блок</dt><dd>от ${neededWatt()} Вт</dd></div>
      <div><dt>Расчётное разрешение</dt><dd>${gpu.res}</dd></div>
    </dl>

    <div class="issues">${problems}</div>

    <button class="btn btn--wide" data-cfg-add ${errors.length ? 'disabled' : ''}>
      ${errors.length ? 'Сначала исправьте несовместимости' : 'Добавить в корзину'}
    </button>
    <p class="ask__note">Перед оплатой мастер созвонится и перепроверит сборку. Если что-то подобрано неудачно — предложим замену.</p>
  </div>`;
}

function render(){
  list.innerHTML = PART_ORDER.map(rowHTML).join('');
  side.innerHTML = sideHTML();
  document.querySelectorAll('[data-preset]').forEach(b => {
    b.setAttribute('aria-pressed', String(sameAsPreset(b.dataset.preset)));
  });
}
function sameAsPreset(id){
  const p = PRESETS[id];
  return !!p && PART_ORDER.every(cat => p[cat] === state[cat]);
}

/* ---------- события ---------- */
document.addEventListener('click', e => {
  const toggle = e.target.closest('[data-toggle]');
  if(toggle){
    openCat = openCat === toggle.dataset.toggle ? null : toggle.dataset.toggle;
    render();
    return;
  }

  const pick = e.target.closest('[data-pick]');
  if(pick){
    const [cat, id] = pick.dataset.pick.split(':');
    state[cat] = id;
    openCat = null;
    render();
    return;
  }

  const preset = e.target.closest('[data-preset]');
  if(preset){
    state = Object.assign({}, PRESETS[preset.dataset.preset]);
    openCat = null;
    render();
    return;
  }

  const fix = e.target.closest('[data-fix]');
  if(fix){
    const p = issues()[+fix.dataset.fix];
    if(p && p.pick){ state[p.cat] = p.pick; render(); }
    return;
  }

  if(e.target.closest('[data-cfg-add]')){
    const gpu = chosen('gpu'), cpu = chosen('cpu'), pc = chosen('pcase');
    api.addCustom({
      name: 'Своя сборка',
      price: sum(),
      specs: `${cpu.name.replace(/^(AMD|Intel) /, '')} + ${gpu.name.replace('GeForce ', '').replace('Radeon ', '')}`,
      shape: {
        h: pc.id === 'itx-14l' ? 150 : pc.id === 'full-tower' ? 248 : 214,
        w: pc.id === 'itx-14l' ? 132 : 126,
        fans: pc.id === 'itx-14l' ? 2 : 3,
        glow: '#FF9A1F',
        gpu: gpu.len > 300 ? 'long' : gpu.len > 260 ? 'mid' : 'short',
        cooler: chosen('cooler').rad === 360 ? 'aio360' : chosen('cooler').rad ? 'aio' : 'air',
        glass: true,
        sff: pc.id === 'itx-14l'
      }
    });
  }
});

render();
})();
