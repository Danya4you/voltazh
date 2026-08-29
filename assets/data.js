/* ============================================================
   ДАННЫЕ САЙТА
   Единственный файл, который меняется при обновлении ассортимента.
   При переносе на WordPress этот массив заменяется циклом по записям.
   ============================================================ */
window.VOLTAZH = window.VOLTAZH || {};

const BUILDS = [
  {
    id:'iskra', name:'Искра', volt:110, price:94900, old:109900,
    tag:'Старт', for:'Киберспорт и сетевые игры в Full HD',
    cats:['fhd'], style:{h:200,w:118,fans:3,glow:'#FF9A1F',gpu:'short',cooler:'air',glass:true},
    short:[['Процессор','Ryzen 5 7500F'],['Видеокарта','RTX 5060 8 ГБ'],['Память','16 ГБ DDR5-5600']],
    full:[
      ['Процессор','AMD Ryzen 5 7500F, 6 ядер / 12 потоков, до 5.0 ГГц'],
      ['Материнская плата','MSI PRO B650M-P, mATX, DDR5'],
      ['Оперативная память','16 ГБ DDR5-5600 (2×8), Kingston Fury Beast'],
      ['Видеокарта','GeForce RTX 5060 8 ГБ GDDR7'],
      ['Накопитель','1 ТБ NVMe PCIe 4.0, до 5000 МБ/с'],
      ['Охлаждение','Башенный кулер, 4 медные трубки, 120 мм'],
      ['Блок питания','650 Вт, 80 PLUS Bronze'],
      ['Корпус','mATX с сетчатым фронтом, 3 вентилятора ARGB'],
      ['Система','Windows 11 Pro, драйверы установлены']
    ],
    fps:[['CS2',340],['Valorant',400],['Fortnite',165],['Dota 2',280],['Cyberpunk 2077',95]],
    fpsNote:'1920×1080, высокие настройки, DLSS Quality где доступно'
  },
  {
    id:'razryad', name:'Разряд', volt:220, price:139900, old:154900,
    tag:'Хит', for:'Ультра в Full HD, комфортный вход в 1440p',
    cats:['fhd','2k'], style:{h:212,w:122,fans:3,glow:'#FF9A1F',gpu:'mid',cooler:'air',glass:true},
    short:[['Процессор','Ryzen 5 9600X'],['Видеокарта','RTX 5060 Ti 16 ГБ'],['Память','32 ГБ DDR5-6000']],
    full:[
      ['Процессор','AMD Ryzen 5 9600X, 6 ядер / 12 потоков, до 5.4 ГГц'],
      ['Материнская плата','ASUS TUF Gaming B650-Plus, ATX'],
      ['Оперативная память','32 ГБ DDR5-6000 CL30 (2×16), EXPO'],
      ['Видеокарта','GeForce RTX 5060 Ti 16 ГБ GDDR7'],
      ['Накопитель','1 ТБ NVMe PCIe 4.0, до 7000 МБ/с'],
      ['Охлаждение','Двухбашенный кулер, 6 трубок, 2×120 мм'],
      ['Блок питания','750 Вт, 80 PLUS Gold, модульный'],
      ['Корпус','ATX, закалённое стекло, 4 вентилятора ARGB'],
      ['Система','Windows 11 Pro, драйверы установлены']
    ],
    fps:[['CS2',300],['Warzone',165],['Cyberpunk 2077',78],['Baldur’s Gate 3',120],['Hogwarts Legacy',95]],
    fpsNote:'2560×1440, высокие настройки, DLSS Quality'
  },
  {
    id:'duga', name:'Дуга', volt:380, price:214900, old:0,
    tag:'', for:'1440p на 144 Гц без компромиссов',
    cats:['2k'], style:{h:224,w:126,fans:3,glow:'#FF9A1F',gpu:'long',cooler:'aio240',glass:true},
    short:[['Процессор','Ryzen 7 9700X'],['Видеокарта','RTX 5070 12 ГБ'],['Охлаждение','СЖО 240 мм']],
    full:[
      ['Процессор','AMD Ryzen 7 9700X, 8 ядер / 16 потоков, до 5.5 ГГц'],
      ['Материнская плата','MSI MAG B650E Tomahawk, ATX'],
      ['Оперативная память','32 ГБ DDR5-6000 CL30 (2×16), EXPO'],
      ['Видеокарта','GeForce RTX 5070 12 ГБ GDDR7'],
      ['Накопитель','2 ТБ NVMe PCIe 4.0, до 7400 МБ/с'],
      ['Охлаждение','Жидкостное 240 мм, помпа с керамическим подшипником'],
      ['Блок питания','850 Вт, 80 PLUS Gold, модульный'],
      ['Корпус','ATX с высоким продувом, 6 вентиляторов ARGB'],
      ['Система','Windows 11 Pro, драйверы установлены']
    ],
    fps:[['Cyberpunk 2077',110],['Alan Wake 2',95],['Warzone',210],['Red Dead Redemption 2',135],['Forza Horizon 5',180]],
    fpsNote:'2560×1440, ультра, DLSS Quality + Frame Generation'
  },
  {
    id:'yadro', name:'Ядро', volt:380, price:249900, old:0,
    tag:'Компакт', tagCold:true, for:'Мощность 1440p в корпусе на 14 литров',
    cats:['2k','sff'], style:{h:150,w:132,fans:2,glow:'#8FE3FF',gpu:'long',cooler:'aio240',glass:true,sff:true},
    short:[['Процессор','Ryzen 7 7800X3D'],['Видеокарта','RTX 5070 Ti 16 ГБ'],['Объём корпуса','14 литров']],
    full:[
      ['Процессор','AMD Ryzen 7 7800X3D, 8 ядер / 16 потоков, 96 МБ 3D V-Cache'],
      ['Материнская плата','ASUS ROG Strix B650E-I, mini-ITX'],
      ['Оперативная память','32 ГБ DDR5-6000 CL30 (2×16), низкопрофильная'],
      ['Видеокарта','GeForce RTX 5070 Ti 16 ГБ GDDR7, 2.5 слота'],
      ['Накопитель','1 ТБ NVMe PCIe 5.0, до 12 000 МБ/с'],
      ['Охлаждение','СЖО 240 мм, вертикальная компоновка'],
      ['Блок питания','850 Вт SFX, 80 PLUS Platinum'],
      ['Корпус','Mini-ITX, 14 л, алюминий и стекло, 34×22×20 см'],
      ['Система','Windows 11 Pro, драйверы установлены']
    ],
    fps:[['Cyberpunk 2077',128],['Alan Wake 2',112],['CS2',420],['Starfield',105],['Flight Simulator 2024',95]],
    fpsNote:'2560×1440, ультра, DLSS Quality + Frame Generation'
  },
  {
    id:'groza', name:'Гроза', volt:660, price:359900, old:389900,
    tag:'4K', for:'4K на 120 кадров и стриминг без просадок',
    cats:['4k'], style:{h:238,w:132,fans:3,glow:'#FF9A1F',gpu:'long',cooler:'aio360',glass:true},
    short:[['Процессор','Ryzen 7 9800X3D'],['Видеокарта','RTX 5080 16 ГБ'],['Охлаждение','СЖО 360 мм']],
    full:[
      ['Процессор','AMD Ryzen 7 9800X3D, 8 ядер / 16 потоков, 3D V-Cache'],
      ['Материнская плата','ASUS ROG Strix X870-A, ATX'],
      ['Оперативная память','32 ГБ DDR5-6000 CL28 (2×16), EXPO'],
      ['Видеокарта','GeForce RTX 5080 16 ГБ GDDR7'],
      ['Накопитель','2 ТБ NVMe PCIe 5.0, до 14 000 МБ/с'],
      ['Охлаждение','Жидкостное 360 мм, дисплей температур на помпе'],
      ['Блок питания','1000 Вт, 80 PLUS Gold, ATX 3.1'],
      ['Корпус','Full-Tower, двухкамерный, 8 вентиляторов ARGB'],
      ['Система','Windows 11 Pro, драйверы установлены']
    ],
    fps:[['Cyberpunk 2077',118],['Alan Wake 2',104],['Warzone',190],['Black Myth: Wukong',96],['Forza Horizon 5',165]],
    fpsNote:'3840×2160, ультра с трассировкой, DLSS Quality + Frame Generation'
  },
  {
    id:'molniya', name:'Молния', volt:1000, price:649900, old:0,
    tag:'Флагман', for:'4K 240 Гц, кастомная СЖО, максимум из возможного',
    cats:['4k'], style:{h:252,w:140,fans:3,glow:'#FF9A1F',gpu:'long',cooler:'custom',glass:true},
    short:[['Процессор','Ryzen 9 9950X3D'],['Видеокарта','RTX 5090 32 ГБ'],['Память','64 ГБ DDR5-6400']],
    full:[
      ['Процессор','AMD Ryzen 9 9950X3D, 16 ядер / 32 потока, 3D V-Cache'],
      ['Материнская плата','ASUS ROG Crosshair X870E Hero, ATX'],
      ['Оперативная память','64 ГБ DDR5-6400 CL30 (2×32), EXPO'],
      ['Видеокарта','GeForce RTX 5090 32 ГБ GDDR7'],
      ['Накопитель','4 ТБ NVMe PCIe 5.0 + 4 ТБ PCIe 4.0'],
      ['Охлаждение','Кастомный контур: медные фитинги, два радиатора 360 мм, GPU-водоблок'],
      ['Блок питания','1200 Вт, 80 PLUS Platinum, ATX 3.1'],
      ['Корпус','Full-Tower, закалённое стекло с трёх сторон, 11 вентиляторов'],
      ['Система','Windows 11 Pro, драйверы установлены']
    ],
    fps:[['Cyberpunk 2077',165],['Alan Wake 2',142],['Warzone',260],['Black Myth: Wukong',138],['Flight Simulator 2024',120]],
    fpsNote:'3840×2160, ультра с полной трассировкой, DLSS Quality + Frame Generation'
  }
];

window.VOLTAZH.BUILDS = BUILDS;

/* ============================================================
   КОМПЛЕКТУЮЩИЕ ДЛЯ КОНФИГУРАТОРА
   У каждой позиции есть технические поля, по которым считается
   совместимость и нужная мощность блока питания:
     socket    — сокет процессора и платы
     tdp       — тепловыделение, Вт
     form      — форм-фактор платы
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
      { id:'r5-7500f',   name:'AMD Ryzen 5 7500F',       note:'6 ядер / 12 потоков, до 5.0 ГГц',           price:14900, socket:'AM5',     tdp:65  },
      { id:'r5-9600x',   name:'AMD Ryzen 5 9600X',       note:'6 ядер / 12 потоков, до 5.4 ГГц',           price:22900, socket:'AM5',     tdp:65  },
      { id:'r7-9700x',   name:'AMD Ryzen 7 9700X',       note:'8 ядер / 16 потоков, до 5.5 ГГц',           price:32900, socket:'AM5',     tdp:65  },
      { id:'r7-7800x3d', name:'AMD Ryzen 7 7800X3D',     note:'8 ядер, 96 МБ 3D V-Cache — лучший в играх', price:38900, socket:'AM5',     tdp:120 },
      { id:'r7-9800x3d', name:'AMD Ryzen 7 9800X3D',     note:'8 ядер, 3D V-Cache нового поколения',       price:51900, socket:'AM5',     tdp:120 },
      { id:'r9-9950x3d', name:'AMD Ryzen 9 9950X3D',     note:'16 ядер / 32 потока, 3D V-Cache',           price:84900, socket:'AM5',     tdp:170 },
      { id:'cu5-245k',   name:'Intel Core Ultra 5 245K', note:'14 ядер, разблокированный множитель',       price:27900, socket:'LGA1851', tdp:125 },
      { id:'cu7-265k',   name:'Intel Core Ultra 7 265K', note:'20 ядер, сильный в рендере',                price:39900, socket:'LGA1851', tdp:125 },
      { id:'cu9-285k',   name:'Intel Core Ultra 9 285K', note:'24 ядра, флагман Intel',                    price:62900, socket:'LGA1851', tdp:125 }
    ]
  },

  mb: {
    title: 'Материнская плата', hint: 'Сокет обязан совпасть с процессором',
    options: [
      { id:'b650m-p',    name:'MSI PRO B650M-P',               note:'mATX, DDR5, 2 слота M.2',             price:11900, socket:'AM5',     form:'mATX' },
      { id:'tuf-b650',   name:'ASUS TUF Gaming B650-Plus',     note:'ATX, усиленное питание, 3 слота M.2', price:17900, socket:'AM5',     form:'ATX'  },
      { id:'tomahawk',   name:'MSI MAG B650E Tomahawk',        note:'ATX, PCIe 5.0, 4 слота M.2',          price:22900, socket:'AM5',     form:'ATX'  },
      { id:'strix-i',    name:'ASUS ROG Strix B650E-I',        note:'Mini-ITX для компактных сборок',      price:29900, socket:'AM5',     form:'ITX'  },
      { id:'strix-x870', name:'ASUS ROG Strix X870-A',         note:'ATX, Wi-Fi 7, USB4',                  price:34900, socket:'AM5',     form:'ATX'  },
      { id:'crosshair',  name:'ASUS ROG Crosshair X870E Hero', note:'ATX, топовое питание и обвес',        price:62900, socket:'AM5',     form:'ATX'  },
      { id:'b860m',      name:'MSI PRO B860M-A',               note:'mATX под Core Ultra',                 price:16900, socket:'LGA1851', form:'mATX' },
      { id:'tuf-z890',   name:'ASUS TUF Gaming Z890-Plus',     note:'ATX, разгон памяти',                  price:32900, socket:'LGA1851', form:'ATX'  }
    ]
  },

  ram: {
    title: 'Оперативная память', hint: 'Для игр достаточно 32 ГБ',
    options: [
      { id:'16-5600', name:'16 ГБ DDR5-5600',      note:'2×8 ГБ — минимум для Full HD',  price:5900  },
      { id:'32-6000', name:'32 ГБ DDR5-6000 CL30', note:'2×16 ГБ — оптимум для игр',     price:11900 },
      { id:'32-6400', name:'32 ГБ DDR5-6400 CL28', note:'2×16 ГБ, низкие задержки',      price:14900 },
      { id:'64-6000', name:'64 ГБ DDR5-6000 CL30', note:'2×32 ГБ — игры плюс работа',    price:23900 },
      { id:'96-5600', name:'96 ГБ DDR5-5600',      note:'2×48 ГБ для 3D и нейросетей',   price:36900 }
    ]
  },

  gpu: {
    title: 'Видеокарта', hint: 'Главное, что определяет кадры в играх',
    options: [
      { id:'rtx5060',   name:'GeForce RTX 5060 8 ГБ',     note:'Full HD на высоких',                price:34900,  tdp:145, len:245, res:'Full HD' },
      { id:'rtx5060ti', name:'GeForce RTX 5060 Ti 16 ГБ', note:'Full HD ультра, вход в 1440p',      price:49900,  tdp:180, len:265, res:'Full HD / 2K' },
      { id:'rtx5070',   name:'GeForce RTX 5070 12 ГБ',    note:'1440p на 144 Гц',                   price:69900,  tdp:250, len:285, res:'2K' },
      { id:'rx9070xt',  name:'Radeon RX 9070 XT 16 ГБ',   note:'1440p, много памяти за свои деньги',price:79900,  tdp:304, len:320, res:'2K' },
      { id:'rtx5070ti', name:'GeForce RTX 5070 Ti 16 ГБ', note:'1440p с запасом, вход в 4K',        price:94900,  tdp:300, len:305, res:'2K / 4K' },
      { id:'rtx5080',   name:'GeForce RTX 5080 16 ГБ',    note:'4K на 120 кадров',                  price:139900, tdp:360, len:330, res:'4K' },
      { id:'rtx5090',   name:'GeForce RTX 5090 32 ГБ',    note:'4K 240 Гц, максимум из возможного', price:279900, tdp:575, len:358, res:'4K' }
    ]
  },

  ssd: {
    title: 'Накопитель', hint: 'Одна современная игра занимает до 150 ГБ',
    options: [
      { id:'1tb-g4', name:'1 ТБ NVMe PCIe 4.0', note:'до 7000 МБ/с',   price:7900  },
      { id:'2tb-g4', name:'2 ТБ NVMe PCIe 4.0', note:'до 7400 МБ/с',   price:13900 },
      { id:'2tb-g5', name:'2 ТБ NVMe PCIe 5.0', note:'до 14 000 МБ/с', price:21900 },
      { id:'4tb-g5', name:'4 ТБ NVMe PCIe 5.0', note:'до 14 000 МБ/с', price:39900 }
    ]
  },

  cooler: {
    title: 'Охлаждение', hint: 'Должно покрывать тепловыделение процессора',
    options: [
      { id:'air-120',  name:'Башенный кулер, 4 трубки', note:'120 мм, тихий под нагрузкой',    price:3900,  maxTdp:95,  height:158 },
      { id:'air-dual', name:'Двухбашенный, 6 трубок',   note:'2×120 мм, держит восемь ядер',   price:7900,  maxTdp:180, height:165 },
      { id:'aio-240',  name:'СЖО 240 мм',               note:'Двухсекционный радиатор',        price:11900, maxTdp:200, rad:240 },
      { id:'aio-360',  name:'СЖО 360 мм',               note:'Дисплей температур на помпе',    price:17900, maxTdp:280, rad:360 },
      { id:'custom',   name:'Кастомный контур',         note:'Медные фитинги, водоблок на GPU',price:89900, maxTdp:400, rad:360 }
    ]
  },

  psu: {
    title: 'Блок питания', hint: 'Нужную мощность считаем автоматически',
    options: [
      { id:'650b',  name:'650 Вт, 80 PLUS Bronze',    note:'Для сборок начального уровня', price:6900,  watt:650  },
      { id:'750g',  name:'750 Вт, 80 PLUS Gold',      note:'Модульный, тихий',             price:10900, watt:750  },
      { id:'850g',  name:'850 Вт, 80 PLUS Gold',      note:'Модульный, ATX 3.1',           price:14900, watt:850  },
      { id:'1000g', name:'1000 Вт, 80 PLUS Gold',     note:'ATX 3.1, разъём 12V-2x6',      price:21900, watt:1000 },
      { id:'1200p', name:'1200 Вт, 80 PLUS Platinum', note:'С запасом под RTX 5090',       price:32900, watt:1200 }
    ]
  },

  pcase: {
    title: 'Корпус', hint: 'Ограничивает длину видеокарты и высоту кулера',
    options: [
      { id:'matx-mesh',  name:'mATX с сетчатым фронтом',  note:'3 вентилятора ARGB в комплекте',   price:6900,  forms:['mATX','ITX'],       gpuMax:330, coolerMax:160, radMax:240 },
      { id:'atx-glass',  name:'ATX, закалённое стекло',   note:'4 вентилятора ARGB',               price:11900, forms:['ATX','mATX','ITX'], gpuMax:360, coolerMax:170, radMax:360 },
      { id:'itx-14l',    name:'Mini-ITX, 14 литров',      note:'Алюминий и стекло, 34×22×20 см',   price:24900, forms:['ITX'],              gpuMax:322, coolerMax:70,  radMax:240 },
      { id:'full-tower', name:'Full-Tower, двухкамерный', note:'8 вентиляторов, место под контур', price:24900, forms:['ATX','mATX','ITX'], gpuMax:420, coolerMax:190, radMax:360 }
    ]
  }
};

/* Порядок вывода категорий в конфигураторе */
window.VOLTAZH.PART_ORDER = ['cpu','mb','ram','gpu','ssd','cooler','psu','pcase'];

/* Готовые сборки как отправная точка конфигуратора */
window.VOLTAZH.PRESETS = {
  iskra:   { cpu:'r5-7500f',   mb:'b650m-p',    ram:'16-5600', gpu:'rtx5060',   ssd:'1tb-g4', cooler:'air-120',  psu:'650b',  pcase:'matx-mesh'  },
  razryad: { cpu:'r5-9600x',   mb:'tuf-b650',   ram:'32-6000', gpu:'rtx5060ti', ssd:'1tb-g4', cooler:'air-dual', psu:'750g',  pcase:'atx-glass'  },
  duga:    { cpu:'r7-9700x',   mb:'tomahawk',   ram:'32-6000', gpu:'rtx5070',   ssd:'2tb-g4', cooler:'aio-240',  psu:'850g',  pcase:'atx-glass'  },
  yadro:   { cpu:'r7-7800x3d', mb:'strix-i',    ram:'32-6000', gpu:'rtx5070ti', ssd:'2tb-g5', cooler:'aio-240',  psu:'850g',  pcase:'itx-14l'    },
  groza:   { cpu:'r7-9800x3d', mb:'strix-x870', ram:'32-6400', gpu:'rtx5080',   ssd:'2tb-g5', cooler:'aio-360',  psu:'1000g', pcase:'full-tower' },
  molniya: { cpu:'r9-9950x3d', mb:'crosshair',  ram:'64-6000', gpu:'rtx5090',   ssd:'4tb-g5', cooler:'custom',   psu:'1200p', pcase:'full-tower' }
};
