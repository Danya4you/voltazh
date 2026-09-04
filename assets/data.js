/* ============================================================
   КАТАЛОГ И КОМПЛЕКТУЮЩИЕ
   Единственный источник данных для всех страниц.

   Десять сборок вместо витрины хотелок. Правила, по которым
   собран ряд:
     1. Процессор подбирается под видеокарту. В 1440p упор идёт
        в карту, поэтому рядом с RTX 5070 стоит Ryzen 5 7500F,
        а не старший X3D — так делают живые магазины.
     2. Внизу каталога — AM4 и DDR4. Платформа старая, но живая
        и вдвое дешевле; в киберспорте на 1080p разницы нет.
     3. Потолок — RTX 5080. RTX 5090 стоит как весь топовый
        компьютер целиком и даёт в 4K около четверти прироста.

   Цены — розница РФ, ориентир на 2026 год. Порядок величин
   сверен с каталогами iden-pc, Digital Razor и K&K: готовый ПК
   на RTX 5060 Ti и Ryzen 5 7500F там стоит 115–137 тыс.,
   на RTX 5080 и Ryzen 7 9800X3D — около 275 тыс.
   ============================================================ */
window.VOLTAZH = window.VOLTAZH || {};

const BUILDS = [
  {
    id:'iskra', name:'Искра', volt:110, price:69900, old:0,
    tag:'Старт', for:'Киберспорт в Full HD без компромиссов по кадрам',
    cats:['fhd'], style:{h:178,w:112,fans:2,glow:'#FF9A1F',gpu:'short',cooler:'air',glass:true},
    short:[['Процессор','Ryzen 5 5500'],['Видеокарта','RTX 5050 8 ГБ'],['Память','16 ГБ DDR4-3200']],
    full:[
      ['Процессор','AMD Ryzen 5 5500, 6 ядер / 12 потоков, до 4.2 ГГц'],
      ['Материнская плата','MSI A520M-A PRO, mATX, DDR4'],
      ['Оперативная память','16 ГБ DDR4-3200 (2×8), Kingston Fury Beast'],
      ['Видеокарта','GeForce RTX 5050 8 ГБ GDDR6'],
      ['Накопитель','512 ГБ NVMe PCIe 3.0, до 3500 МБ/с'],
      ['Охлаждение','Башенный кулер, 4 медные трубки, 120 мм'],
      ['Блок питания','550 Вт, 80 PLUS Bronze'],
      ['Корпус','mATX с сетчатым фронтом, 3 вентилятора ARGB'],
      ['Система','Windows 11 Pro, драйверы установлены']
    ],
    fps:[['CS2',240],['Valorant',300],['Dota 2',190],['Fortnite',120],['Apex Legends',110]],
    fpsNote:'1920×1080, высокие настройки, DLSS Quality где доступно'
  },
  {
    id:'zaryad', name:'Заряд', volt:170, price:94900, old:104900,
    tag:'Цена/кадр', for:'Плюс двадцать тысяч к Искре — плюс сорок процентов кадров',
    cats:['fhd'], style:{h:184,w:114,fans:3,glow:'#FF9A1F',gpu:'short',cooler:'air',glass:true},
    short:[['Процессор','Ryzen 5 5600'],['Видеокарта','RTX 5060 8 ГБ'],['Память','16 ГБ DDR4-3200']],
    full:[
      ['Процессор','AMD Ryzen 5 5600, 6 ядер / 12 потоков, до 4.4 ГГц'],
      ['Материнская плата','Gigabyte B550M K, mATX, DDR4'],
      ['Оперативная память','16 ГБ DDR4-3200 (2×8), Kingston Fury Beast'],
      ['Видеокарта','GeForce RTX 5060 8 ГБ GDDR7'],
      ['Накопитель','1 ТБ NVMe PCIe 4.0, до 7000 МБ/с'],
      ['Охлаждение','Башенный кулер, 4 медные трубки, 120 мм'],
      ['Блок питания','650 Вт, 80 PLUS Bronze'],
      ['Корпус','mATX с сетчатым фронтом, 3 вентилятора ARGB'],
      ['Система','Windows 11 Pro, драйверы установлены']
    ],
    fps:[['CS2',300],['Valorant',350],['Fortnite',150],['Cyberpunk 2077',80],['Warzone',115]],
    fpsNote:'1920×1080, высокие настройки, DLSS Quality где доступно'
  },
  {
    id:'impuls', name:'Импульс', volt:230, price:109900, old:0,
    tag:'', for:'Та же видеокарта, что у Заряда, но платформа с запасом на апгрейд',
    cats:['fhd'], style:{h:190,w:116,fans:3,glow:'#FF9A1F',gpu:'short',cooler:'air',glass:true},
    short:[['Процессор','Ryzen 5 7500F'],['Видеокарта','RTX 5060 8 ГБ'],['Память','16 ГБ DDR5-5600']],
    full:[
      ['Процессор','AMD Ryzen 5 7500F, 6 ядер / 12 потоков, до 5.0 ГГц'],
      ['Материнская плата','MSI PRO B650M-P, mATX, DDR5, сокет AM5'],
      ['Оперативная память','16 ГБ DDR5-5600 (2×8), Kingston Fury Beast'],
      ['Видеокарта','GeForce RTX 5060 8 ГБ GDDR7'],
      ['Накопитель','1 ТБ NVMe PCIe 4.0, до 7000 МБ/с'],
      ['Охлаждение','Башенный кулер, 4 медные трубки, 120 мм'],
      ['Блок питания','650 Вт, 80 PLUS Bronze'],
      ['Корпус','mATX с сетчатым фронтом, 3 вентилятора ARGB'],
      ['Система','Windows 11 Pro, драйверы установлены']
    ],
    fps:[['CS2',340],['Valorant',390],['Fortnite',165],['Cyberpunk 2077',88],['Warzone',130]],
    fpsNote:'1920×1080, ультра, DLSS Quality где доступно'
  },
  {
    id:'razryad', name:'Разряд', volt:320, price:139900, old:154900,
    tag:'Хит', for:'Здесь начинаются 16 ГБ видеопамяти — и текстуры на ультра',
    cats:['fhd','2k'], style:{h:200,w:120,fans:3,glow:'#FF9A1F',gpu:'mid',cooler:'air',glass:true},
    short:[['Процессор','Ryzen 5 7500F'],['Видеокарта','RTX 5060 Ti 16 ГБ'],['Память','32 ГБ DDR5-6000']],
    full:[
      ['Процессор','AMD Ryzen 5 7500F, 6 ядер / 12 потоков, до 5.0 ГГц'],
      ['Материнская плата','MSI PRO B650M-P, mATX, DDR5, сокет AM5'],
      ['Оперативная память','32 ГБ DDR5-6000 CL30 (2×16), EXPO'],
      ['Видеокарта','GeForce RTX 5060 Ti 16 ГБ GDDR7'],
      ['Накопитель','1 ТБ NVMe PCIe 4.0, до 7000 МБ/с'],
      ['Охлаждение','Башенный кулер, 4 медные трубки, 120 мм — под 65 Вт больше не нужно'],
      ['Блок питания','750 Вт, 80 PLUS Gold, модульный'],
      ['Корпус','mATX с сетчатым фронтом, 3 вентилятора ARGB'],
      ['Система','Windows 11 Pro, драйверы установлены']
    ],
    fps:[['CS2',280],['Fortnite',140],['Warzone',120],['Cyberpunk 2077',78],['Alan Wake 2',62]],
    fpsNote:'2560×1440, высокие настройки, DLSS Quality'
  },
  {
    id:'kontur', name:'Контур', volt:400, price:164900, old:0,
    tag:'Для работы', for:'Четырнадцать ядер: стрим и рендер идут параллельно с игрой',
    cats:['2k'], style:{h:206,w:124,fans:3,glow:'#FF9A1F',gpu:'mid',cooler:'air',glass:true},
    short:[['Процессор','Core Ultra 5 245KF'],['Видеокарта','RTX 5060 Ti 16 ГБ'],['Память','32 ГБ DDR5-6000']],
    full:[
      ['Процессор','Intel Core Ultra 5 245KF, 14 ядер, до 5.2 ГГц'],
      ['Материнская плата','MSI PRO B860M-A, mATX, DDR5, сокет LGA1851'],
      ['Оперативная память','32 ГБ DDR5-6000 CL30 (2×16), XMP'],
      ['Видеокарта','GeForce RTX 5060 Ti 16 ГБ GDDR7'],
      ['Накопитель','2 ТБ NVMe PCIe 4.0, до 7400 МБ/с'],
      ['Охлаждение','Двухбашенный кулер, 6 трубок, 2×120 мм'],
      ['Блок питания','750 Вт, 80 PLUS Gold, модульный'],
      ['Корпус','ATX, закалённое стекло, 4 вентилятора ARGB'],
      ['Система','Windows 11 Pro, драйверы установлены']
    ],
    fps:[['CS2',290],['Fortnite',145],['Warzone',125],['Cyberpunk 2077',82],['Alan Wake 2',65]],
    fpsNote:'2560×1440, высокие настройки, DLSS Quality'
  },
  {
    id:'duga', name:'Дуга', volt:470, price:179900, old:0,
    tag:'', for:'Правильный перекос для 1440p: дешёвый процессор, сильная карта',
    cats:['2k'], style:{h:212,w:126,fans:3,glow:'#FF9A1F',gpu:'long',cooler:'aio240',glass:true},
    short:[['Процессор','Ryzen 5 7500F'],['Видеокарта','RTX 5070 12 ГБ'],['Память','32 ГБ DDR5-6000']],
    full:[
      ['Процессор','AMD Ryzen 5 7500F, 6 ядер / 12 потоков, до 5.0 ГГц'],
      ['Материнская плата','ASUS TUF Gaming B650-Plus, ATX, DDR5'],
      ['Оперативная память','32 ГБ DDR5-6000 CL30 (2×16), EXPO'],
      ['Видеокарта','GeForce RTX 5070 12 ГБ GDDR7'],
      ['Накопитель','2 ТБ NVMe PCIe 4.0, до 7400 МБ/с'],
      ['Охлаждение','Жидкостное 240 мм, двухсекционный радиатор'],
      ['Блок питания','750 Вт, 80 PLUS Gold, модульный'],
      ['Корпус','ATX, закалённое стекло, 4 вентилятора ARGB'],
      ['Система','Windows 11 Pro, драйверы установлены']
    ],
    fps:[['Fortnite',175],['Warzone',155],['Cyberpunk 2077',100],['Alan Wake 2',82],['Black Myth: Wukong',75]],
    fpsNote:'2560×1440, ультра, DLSS Quality'
  },
  {
    id:'faza', name:'Фаза', volt:560, price:199900, old:0,
    tag:'Radeon', for:'Уровень 5070 Ti по цене 5070 — если играете в растре',
    cats:['2k'], style:{h:220,w:130,fans:3,glow:'#FF9A1F',gpu:'long',cooler:'aio240',glass:true},
    short:[['Процессор','Ryzen 5 9600X'],['Видеокарта','RX 9070 XT 16 ГБ'],['Память','32 ГБ DDR5-6000']],
    full:[
      ['Процессор','AMD Ryzen 5 9600X, 6 ядер / 12 потоков, до 5.4 ГГц'],
      ['Материнская плата','ASUS TUF Gaming B650-Plus, ATX, DDR5'],
      ['Оперативная память','32 ГБ DDR5-6000 CL30 (2×16), EXPO'],
      ['Видеокарта','Radeon RX 9070 XT 16 ГБ GDDR6 — сильнее в растре, слабее в трассировке'],
      ['Накопитель','2 ТБ NVMe PCIe 4.0, до 7400 МБ/с'],
      ['Охлаждение','Жидкостное 240 мм, двухсекционный радиатор'],
      ['Блок питания','850 Вт, 80 PLUS Gold, ATX 3.1'],
      ['Корпус','ATX, закалённое стекло, 4 вентилятора ARGB'],
      ['Система','Windows 11 Pro, драйверы установлены']
    ],
    fps:[['Fortnite',195],['Warzone',175],['Cyberpunk 2077',112],['Alan Wake 2',88],['Black Myth: Wukong',82]],
    fpsNote:'2560×1440, ультра без трассировки, FSR Quality'
  },
  {
    id:'yadro', name:'Ядро', volt:650, price:219900, old:0,
    tag:'Компакт', for:'Четырнадцать литров на столе — и полноценные 1440p',
    cats:['2k','sff'], style:{h:152,w:132,fans:2,glow:'#39D3E6',gpu:'long',cooler:'aio240',glass:true,sff:true},
    short:[['Процессор','Ryzen 7 7800X3D'],['Видеокарта','RTX 5070 12 ГБ'],['Корпус','Mini-ITX, 14 литров']],
    full:[
      ['Процессор','AMD Ryzen 7 7800X3D, 8 ядер, 96 МБ 3D V-Cache'],
      ['Материнская плата','ASUS ROG Strix B650E-I, Mini-ITX, DDR5'],
      ['Оперативная память','32 ГБ DDR5-6000 CL30 (2×16), EXPO'],
      ['Видеокарта','GeForce RTX 5070 12 ГБ GDDR7'],
      ['Накопитель','2 ТБ NVMe PCIe 4.0, до 7400 МБ/с'],
      ['Охлаждение','Жидкостное 240 мм, двухсекционный радиатор'],
      ['Блок питания','850 Вт SFX, 80 PLUS Gold'],
      ['Корпус','Mini-ITX, 14 литров, алюминий и стекло, 34×22×20 см'],
      ['Система','Windows 11 Pro, драйверы установлены']
    ],
    fps:[['Fortnite',190],['Warzone',175],['Cyberpunk 2077',105],['Alan Wake 2',85],['Black Myth: Wukong',78]],
    fpsNote:'2560×1440, ультра, DLSS Quality'
  },
  {
    id:'groza', name:'Гроза', volt:800, price:259900, old:279900,
    tag:'Выбор мастера', for:'Лучший игровой процессор за свои деньги и карта под 4K',
    cats:['2k','4k'], style:{h:236,w:136,fans:3,glow:'#FF9A1F',gpu:'long',cooler:'aio360',glass:true},
    short:[['Процессор','Ryzen 7 7800X3D'],['Видеокарта','RTX 5070 Ti 16 ГБ'],['Память','32 ГБ DDR5-6000']],
    full:[
      ['Процессор','AMD Ryzen 7 7800X3D, 8 ядер, 96 МБ 3D V-Cache'],
      ['Материнская плата','ASUS TUF Gaming B650-Plus, ATX, DDR5'],
      ['Оперативная память','32 ГБ DDR5-6000 CL30 (2×16), EXPO'],
      ['Видеокарта','GeForce RTX 5070 Ti 16 ГБ GDDR7'],
      ['Накопитель','2 ТБ NVMe PCIe 4.0, до 7400 МБ/с'],
      ['Охлаждение','Жидкостное 360 мм, дисплей температур на помпе'],
      ['Блок питания','850 Вт, 80 PLUS Gold, ATX 3.1'],
      ['Корпус','ATX, закалённое стекло, 4 вентилятора ARGB'],
      ['Система','Windows 11 Pro, драйверы установлены']
    ],
    fps:[['Fortnite',230],['Warzone',205],['Cyberpunk 2077',135],['Alan Wake 2',105],['Black Myth: Wukong',95]],
    fpsNote:'2560×1440, ультра с трассировкой, DLSS Quality'
  },
  {
    id:'reaktor', name:'Реактор', volt:1000, price:349900, old:0,
    tag:'Флагман', for:'Потолок каталога — намеренно на RTX 5080, а не на 5090',
    cats:['4k'], style:{h:252,w:142,fans:3,glow:'#FF9A1F',gpu:'long',cooler:'aio360',glass:true},
    short:[['Процессор','Ryzen 7 9800X3D'],['Видеокарта','RTX 5080 16 ГБ'],['Память','32 ГБ DDR5-6400']],
    full:[
      ['Процессор','AMD Ryzen 7 9800X3D, 8 ядер, 3D V-Cache нового поколения'],
      ['Материнская плата','ASUS ROG Strix X870-A, ATX, Wi-Fi 7'],
      ['Оперативная память','32 ГБ DDR5-6400 CL28 (2×16), EXPO'],
      ['Видеокарта','GeForce RTX 5080 16 ГБ GDDR7'],
      ['Накопитель','2 ТБ NVMe PCIe 5.0, до 14 000 МБ/с'],
      ['Охлаждение','Жидкостное 360 мм, дисплей температур на помпе'],
      ['Блок питания','1000 Вт, 80 PLUS Gold, ATX 3.1'],
      ['Корпус','Full-Tower, двухкамерный, 8 вентиляторов ARGB'],
      ['Система','Windows 11 Pro, драйверы установлены']
    ],
    fps:[['Fortnite',165],['Warzone',175],['Cyberpunk 2077',118],['Alan Wake 2',96],['Black Myth: Wukong',84]],
    fpsNote:'3840×2160, ультра с трассировкой, DLSS Quality + Frame Generation'
  }
];

window.VOLTAZH.BUILDS = BUILDS;
/* ============================================================
   У каждой позиции есть технические поля, по которым считается
   совместимость и нужная мощность блока питания:
     socket    — сокет процессора и платы
     tdp       — тепловыделение, Вт
     form      — форм-фактор платы
     mem       — тип памяти: плата и модули обязаны совпасть
     gb        — объём памяти, ГБ
     forms     — какие платы принимает корпус
     len       — длина видеокарты, мм
     gpuMax    — какая длина видеокарты влезает в корпус, мм
     height    — высота башенного кулера, мм
     coolerMax — какая высота кулера влезает в корпус, мм
     rad       — размер радиатора СЖО, мм
     radMax    — какой радиатор принимает корпус, мм
   ============================================================ */
window.VOLTAZH.PARTS = {
  cpu: {
    title: 'Процессор', hint: 'Задаёт сокет — плата должна совпасть',
    options: [
      { id:'r5-5500',    name:'AMD Ryzen 5 5500',        note:'6 ядер / 12 потоков — дешёвый вход в игры',  price:5500,  socket:'AM4',     tdp:65  },
      { id:'r5-5600',    name:'AMD Ryzen 5 5600',        note:'6 ядер / 12 потоков, до 4.4 ГГц',            price:8000,  socket:'AM4',     tdp:65  },
      { id:'r7-5700x3d', name:'AMD Ryzen 7 5700X3D',     note:'8 ядер с 3D V-Cache — потолок AM4',          price:19000, socket:'AM4',     tdp:105 },
      { id:'r5-7500f',   name:'AMD Ryzen 5 7500F',       note:'6 ядер / 12 потоков, до 5.0 ГГц',            price:15500, socket:'AM5',     tdp:65  },
      { id:'r5-9600x',   name:'AMD Ryzen 5 9600X',       note:'6 ядер / 12 потоков, до 5.4 ГГц',            price:26000, socket:'AM5',     tdp:65  },
      { id:'r7-9700x',   name:'AMD Ryzen 7 9700X',       note:'8 ядер / 16 потоков, до 5.5 ГГц',            price:37500, socket:'AM5',     tdp:65  },
      { id:'r7-7800x3d', name:'AMD Ryzen 7 7800X3D',     note:'8 ядер, 96 МБ 3D V-Cache — лучший в играх',  price:47000, socket:'AM5',     tdp:120 },
      { id:'r7-9800x3d', name:'AMD Ryzen 7 9800X3D',     note:'8 ядер, 3D V-Cache нового поколения',        price:63000, socket:'AM5',     tdp:120 },
      { id:'cu5-245kf',  name:'Intel Core Ultra 5 245KF',note:'14 ядер — игра и стрим одновременно',        price:30000, socket:'LGA1851', tdp:125 },
      { id:'cu7-265k',   name:'Intel Core Ultra 7 265K', note:'20 ядер, сильный в рендере',                 price:45000, socket:'LGA1851', tdp:125 }
    ]
  },

  mb: {
    title: 'Материнская плата', hint: 'Сокет и тип памяти обязаны совпасть',
    options: [
      { id:'a520m',      name:'MSI A520M-A PRO',           note:'mATX, DDR4 — минимум для AM4',        price:5000,  socket:'AM4',     form:'mATX', mem:'DDR4' },
      { id:'b550m',      name:'Gigabyte B550M K',          note:'mATX, DDR4, PCIe 4.0',                price:7500,  socket:'AM4',     form:'mATX', mem:'DDR4' },
      { id:'b650m-p',    name:'MSI PRO B650M-P',           note:'mATX, DDR5, 2 слота M.2',             price:10000, socket:'AM5',     form:'mATX', mem:'DDR5' },
      { id:'tuf-b650',   name:'ASUS TUF Gaming B650-Plus', note:'ATX, усиленное питание, 3 слота M.2', price:15000, socket:'AM5',     form:'ATX',  mem:'DDR5' },
      { id:'tomahawk',   name:'MSI MAG B650E Tomahawk',    note:'ATX, PCIe 5.0, 4 слота M.2',          price:21000, socket:'AM5',     form:'ATX',  mem:'DDR5' },
      { id:'strix-i',    name:'ASUS ROG Strix B650E-I',    note:'Mini-ITX для компактных сборок',      price:22000, socket:'AM5',     form:'ITX',  mem:'DDR5' },
      { id:'strix-x870', name:'ASUS ROG Strix X870-A',     note:'ATX, Wi-Fi 7, USB4',                  price:32000, socket:'AM5',     form:'ATX',  mem:'DDR5' },
      { id:'b860m',      name:'MSI PRO B860M-A',           note:'mATX под Core Ultra',                 price:10000, socket:'LGA1851', form:'mATX', mem:'DDR5' },
      { id:'tuf-z890',   name:'ASUS TUF Gaming Z890-Plus', note:'ATX, разгон памяти',                  price:30000, socket:'LGA1851', form:'ATX',  mem:'DDR5' }
    ]
  },

  ram: {
    title: 'Оперативная память', hint: 'Тип должен совпасть с платой; для игр берите 32 ГБ',
    options: [
      { id:'16-ddr4', name:'16 ГБ DDR4-3200',      note:'2×8 ГБ — для сборок на AM4',    price:3200,  mem:'DDR4', gb:16 },
      { id:'32-ddr4', name:'32 ГБ DDR4-3200',      note:'2×16 ГБ — для сборок на AM4',   price:6000,  mem:'DDR4', gb:32 },
      { id:'16-5600', name:'16 ГБ DDR5-5600',      note:'2×8 ГБ — минимум для Full HD',  price:6000,  mem:'DDR5', gb:16 },
      { id:'32-6000', name:'32 ГБ DDR5-6000 CL30', note:'2×16 ГБ — оптимум для игр',     price:11000, mem:'DDR5', gb:32 },
      { id:'32-6400', name:'32 ГБ DDR5-6400 CL28', note:'2×16 ГБ, низкие задержки',      price:14000, mem:'DDR5', gb:32 },
      { id:'64-6000', name:'64 ГБ DDR5-6000 CL30', note:'2×32 ГБ — игры плюс работа',    price:23000, mem:'DDR5', gb:64 }
    ]
  },

  gpu: {
    title: 'Видеокарта', hint: 'Главное, что определяет кадры в играх',
    options: [
      { id:'rtx5050',   name:'GeForce RTX 5050 8 ГБ',     note:'Киберспорт в Full HD',               price:24000,  tdp:130, len:240, res:'Full HD' },
      { id:'rtx5060',   name:'GeForce RTX 5060 8 ГБ',     note:'Full HD на высоких',                 price:40000,  tdp:145, len:245, res:'Full HD' },
      { id:'rtx5060ti', name:'GeForce RTX 5060 Ti 16 ГБ', note:'16 ГБ памяти — текстуры на ультра',  price:58000,  tdp:180, len:265, res:'Full HD / 2K' },
      { id:'rtx5070',   name:'GeForce RTX 5070 12 ГБ',    note:'1440p на 144 Гц',                    price:72000,  tdp:250, len:285, res:'2K' },
      { id:'rx9070xt',  name:'Radeon RX 9070 XT 16 ГБ',   note:'Сильнее в растре, слабее в лучах',   price:88000,  tdp:304, len:320, res:'2K' },
      { id:'rtx5070ti', name:'GeForce RTX 5070 Ti 16 ГБ', note:'1440p с запасом, вход в 4K',         price:112000, tdp:300, len:305, res:'2K / 4K' },
      { id:'rtx5080',   name:'GeForce RTX 5080 16 ГБ',    note:'4K на 120 кадров — потолок каталога',price:150000, tdp:360, len:330, res:'4K' }
    ]
  },

  ssd: {
    title: 'Накопитель', hint: 'Одна современная игра занимает до 150 ГБ',
    options: [
      { id:'512-g3', name:'512 ГБ NVMe PCIe 3.0', note:'до 3500 МБ/с',   price:4500  },
      { id:'1tb-g4', name:'1 ТБ NVMe PCIe 4.0',   note:'до 7000 МБ/с',   price:8000  },
      { id:'2tb-g4', name:'2 ТБ NVMe PCIe 4.0',   note:'до 7400 МБ/с',   price:14000 },
      { id:'2tb-g5', name:'2 ТБ NVMe PCIe 5.0',   note:'до 14 000 МБ/с', price:21000 }
    ]
  },

  cooler: {
    title: 'Охлаждение', hint: 'Должно покрывать тепловыделение процессора',
    options: [
      { id:'air-120',  name:'Башенный кулер, 4 трубки', note:'120 мм, тихий под нагрузкой',     price:4000,  maxTdp:95,  height:158 },
      { id:'air-dual', name:'Двухбашенный, 6 трубок',   note:'2×120 мм, держит восемь ядер',    price:7500,  maxTdp:180, height:165 },
      { id:'aio-240',  name:'СЖО 240 мм',               note:'Двухсекционный радиатор',         price:11000, maxTdp:200, rad:240 },
      { id:'aio-360',  name:'СЖО 360 мм',               note:'Дисплей температур на помпе',     price:17000, maxTdp:280, rad:360 },
      { id:'custom',   name:'Кастомный контур',         note:'Медные фитинги, водоблок на GPU', price:78000, maxTdp:400, rad:360 }
    ]
  },

  psu: {
    title: 'Блок питания', hint: 'Нужную мощность считаем автоматически',
    options: [
      { id:'550b',  name:'550 Вт, 80 PLUS Bronze', note:'Для сборок начального уровня', price:5500,  watt:550  },
      { id:'650b',  name:'650 Вт, 80 PLUS Bronze', note:'Запас под RTX 5060',           price:7000,  watt:650  },
      { id:'750g',  name:'750 Вт, 80 PLUS Gold',   note:'Модульный, тихий',             price:10500, watt:750  },
      { id:'850g',  name:'850 Вт, 80 PLUS Gold',   note:'Модульный, ATX 3.1',           price:14000, watt:850  },
      { id:'1000g', name:'1000 Вт, 80 PLUS Gold',  note:'ATX 3.1, разъём 12V-2x6',      price:21000, watt:1000 }
    ]
  },

  pcase: {
    title: 'Корпус', hint: 'Ограничивает длину видеокарты и высоту кулера',
    options: [
      { id:'matx-mesh',  name:'mATX с сетчатым фронтом',  note:'3 вентилятора ARGB в комплекте',   price:6000,  forms:['mATX','ITX'],       gpuMax:330, coolerMax:160, radMax:240 },
      { id:'atx-glass',  name:'ATX, закалённое стекло',   note:'4 вентилятора ARGB',               price:11000, forms:['ATX','mATX','ITX'], gpuMax:360, coolerMax:170, radMax:360 },
      { id:'itx-14l',    name:'Mini-ITX, 14 литров',      note:'Алюминий и стекло, 34×22×20 см',   price:19000, forms:['ITX'],              gpuMax:322, coolerMax:70,  radMax:240 },
      { id:'full-tower', name:'Full-Tower, двухкамерный', note:'8 вентиляторов, место под контур', price:21000, forms:['ATX','mATX','ITX'], gpuMax:420, coolerMax:190, radMax:360 }
    ]
  }
};

/* Порядок вывода категорий в конфигураторе */
window.VOLTAZH.PART_ORDER = ['cpu','mb','ram','gpu','ssd','cooler','psu','pcase'];

/* Готовые сборки как отправная точка конфигуратора.
   Сумма комплектующих выходит на 5–15% ниже цены готовой сборки:
   разницу составляют сборка, прогон и трёхлетняя гарантия. */
window.VOLTAZH.PRESETS = {
  iskra:   { cpu:'r5-5500',    mb:'a520m',      ram:'16-ddr4', gpu:'rtx5050',   ssd:'512-g3', cooler:'air-120',  psu:'550b',  pcase:'matx-mesh'  },
  razryad: { cpu:'r5-7500f',   mb:'b650m-p',    ram:'32-6000', gpu:'rtx5060ti', ssd:'1tb-g4', cooler:'air-120',   psu:'750g',  pcase:'matx-mesh'  },
  duga:    { cpu:'r5-7500f',   mb:'tuf-b650',   ram:'32-6000', gpu:'rtx5070',   ssd:'2tb-g4', cooler:'aio-240',  psu:'750g',  pcase:'atx-glass'  },
  yadro:   { cpu:'r7-7800x3d', mb:'strix-i',    ram:'32-6000', gpu:'rtx5070',   ssd:'2tb-g4', cooler:'aio-240',  psu:'850g',  pcase:'itx-14l'    },
  groza:   { cpu:'r7-7800x3d', mb:'tuf-b650',   ram:'32-6000', gpu:'rtx5070ti', ssd:'2tb-g4', cooler:'aio-360',  psu:'850g',  pcase:'atx-glass'  },
  reaktor: { cpu:'r7-9800x3d', mb:'strix-x870', ram:'32-6400', gpu:'rtx5080',   ssd:'2tb-g5', cooler:'aio-360',  psu:'1000g', pcase:'full-tower' }
};
