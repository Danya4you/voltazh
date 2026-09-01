/* ============================================================
   ДАННЫЕ САЙТА
   Единственный файл, который меняется при обновлении ассортимента.
   При переносе на WordPress этот массив заменяется циклом по записям.

   Цены — розница РФ, ориентир на 2026 год. Порядок величин сверен
   с выдачей Citilink: там даже RTX 3060 держится в районе 37–52 тыс.,
   поэтому сборка на актуальной карте начинается за сотню.
   ============================================================ */
window.VOLTAZH = window.VOLTAZH || {};

const BUILDS = [
  {
    id:'iskra', name:'Искра', volt:110, price:104900, old:0,
    tag:'Старт', for:'Киберспорт и сетевые игры в Full HD',
    cats:['fhd'], style:{h:196,w:116,fans:3,glow:'#FF9A1F',gpu:'short',cooler:'air',glass:true},
    short:[['Процессор','Ryzen 5 8400F'],['Видеокарта','RTX 5050 8 ГБ'],['Память','16 ГБ DDR5-5600']],
    full:[
      ['Процессор','AMD Ryzen 5 8400F, 6 ядер / 12 потоков, до 4.7 ГГц'],
      ['Материнская плата','MSI PRO B650M-P, mATX, DDR5'],
      ['Оперативная память','16 ГБ DDR5-5600 (2×8), Kingston Fury Beast'],
      ['Видеокарта','GeForce RTX 5050 8 ГБ GDDR6'],
      ['Накопитель','1 ТБ NVMe PCIe 4.0, до 5000 МБ/с'],
      ['Охлаждение','Башенный кулер, 4 медные трубки, 120 мм'],
      ['Блок питания','650 Вт, 80 PLUS Bronze'],
      ['Корпус','mATX с сетчатым фронтом, 3 вентилятора ARGB'],
      ['Система','Windows 11 Pro, драйверы установлены']
    ],
    fps:[['CS2',300],['Valorant',360],['Dota 2',240],['Fortnite',140],['Apex Legends',130]],
    fpsNote:'1920×1080, высокие настройки, DLSS Quality где доступно'
  },
  {
    id:'zaryad', name:'Заряд', volt:150, price:127900, old:139900,
    tag:'', for:'Full HD на высоких во всех современных играх',
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
    fps:[['CS2',340],['Valorant',400],['Fortnite',165],['Cyberpunk 2077',95],['Warzone',130]],
    fpsNote:'1920×1080, высокие настройки, DLSS Quality где доступно'
  },
  {
    id:'impuls', name:'Импульс', volt:180, price:136900, old:0,
    tag:'', for:'Full HD на ультра с запасом по памяти',
    cats:['fhd'], style:{h:204,w:120,fans:3,glow:'#FF9A1F',gpu:'short',cooler:'air',glass:true},
    short:[['Процессор','Core i5-13400F'],['Видеокарта','RTX 5060 8 ГБ'],['Память','32 ГБ DDR5-5600']],
    full:[
      ['Процессор','Intel Core i5-13400F, 10 ядер / 16 потоков, до 4.6 ГГц'],
      ['Материнская плата','MSI PRO B760M-A, mATX, DDR5'],
      ['Оперативная память','32 ГБ DDR5-5600 (2×16), Kingston Fury Beast'],
      ['Видеокарта','GeForce RTX 5060 8 ГБ GDDR7'],
      ['Накопитель','1 ТБ NVMe PCIe 4.0, до 7000 МБ/с'],
      ['Охлаждение','Башенный кулер, 4 медные трубки, 120 мм'],
      ['Блок питания','650 Вт, 80 PLUS Bronze'],
      ['Корпус','mATX с сетчатым фронтом, 3 вентилятора ARGB'],
      ['Система','Windows 11 Pro, драйверы установлены']
    ],
    fps:[['CS2',330],['Fortnite',170],['Cyberpunk 2077',98],['Baldur’s Gate 3',115],['Hogwarts Legacy',90]],
    fpsNote:'1920×1080, ультра, DLSS Quality где доступно'
  },
  {
    id:'vspyshka', name:'Вспышка', volt:220, price:192900, old:0,
    tag:'', for:'Вход в 1440p с 16 ГБ видеопамяти',
    cats:['fhd','2k'], style:{h:210,w:122,fans:3,glow:'#FF9A1F',gpu:'mid',cooler:'air',glass:true},
    short:[['Процессор','Ryzen 5 9600X'],['Видеокарта','RX 9060 XT 16 ГБ'],['Память','32 ГБ DDR5-6000']],
    full:[
      ['Процессор','AMD Ryzen 5 9600X, 6 ядер / 12 потоков, до 5.4 ГГц'],
      ['Материнская плата','ASUS TUF Gaming B650-Plus, ATX'],
      ['Оперативная память','32 ГБ DDR5-6000 CL30 (2×16), EXPO'],
      ['Видеокарта','Radeon RX 9060 XT 16 ГБ GDDR6'],
      ['Накопитель','2 ТБ NVMe PCIe 4.0, до 7400 МБ/с'],
      ['Охлаждение','Двухбашенный кулер, 6 трубок, 2×120 мм'],
      ['Блок питания','750 Вт, 80 PLUS Gold, модульный'],
      ['Корпус','ATX, закалённое стекло, 4 вентилятора ARGB'],
      ['Система','Windows 11 Pro, драйверы установлены']
    ],
    fps:[['CS2',290],['Warzone',150],['Cyberpunk 2077',72],['Forza Horizon 5',140],['Starfield',80]],
    fpsNote:'2560×1440, высокие настройки, FSR Quality'
  },
  {
    id:'razryad', name:'Разряд', volt:240, price:194900, old:214900,
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
    id:'kontur', name:'Контур', volt:270, price:204900, old:0,
    tag:'', for:'1440p на восьми ядрах, с запасом под стриминг',
    cats:['2k'], style:{h:216,w:124,fans:3,glow:'#FF9A1F',gpu:'mid',cooler:'air',glass:true},
    short:[['Процессор','Ryzen 7 7700'],['Видеокарта','RTX 5060 Ti 16 ГБ'],['Память','32 ГБ DDR5-6000']],
    full:[
      ['Процессор','AMD Ryzen 7 7700, 8 ядер / 16 потоков, до 5.3 ГГц'],
      ['Материнская плата','ASUS TUF Gaming B650-Plus, ATX'],
      ['Оперативная память','32 ГБ DDR5-6000 CL30 (2×16), EXPO'],
      ['Видеокарта','GeForce RTX 5060 Ti 16 ГБ GDDR7'],
      ['Накопитель','2 ТБ NVMe PCIe 4.0, до 7400 МБ/с'],
      ['Охлаждение','Двухбашенный кулер, 6 трубок, 2×120 мм'],
      ['Блок питания','750 Вт, 80 PLUS Gold, модульный'],
      ['Корпус','ATX, закалённое стекло, 4 вентилятора ARGB'],
      ['Система','Windows 11 Pro, драйверы установлены']
    ],
    fps:[['CS2',320],['Warzone',175],['Cyberpunk 2077',82],['Alan Wake 2',68],['Forza Horizon 5',150]],
    fpsNote:'2560×1440, высокие настройки, DLSS Quality'
  },
  {
    id:'duga', name:'Дуга', volt:320, price:256900, old:0,
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
    id:'faza', name:'Фаза', volt:360, price:264900, old:0,
    tag:'', for:'1440p на платформе Intel с разгоном памяти',
    cats:['2k'], style:{h:226,w:126,fans:3,glow:'#FF9A1F',gpu:'long',cooler:'aio240',glass:true},
    short:[['Процессор','Core Ultra 5 245K'],['Видеокарта','RTX 5070 12 ГБ'],['Память','32 ГБ DDR5-6000']],
    full:[
      ['Процессор','Intel Core Ultra 5 245K, 14 ядер, разблокированный множитель'],
      ['Материнская плата','ASUS TUF Gaming Z890-Plus, ATX'],
      ['Оперативная память','32 ГБ DDR5-6000 CL30 (2×16), XMP'],
      ['Видеокарта','GeForce RTX 5070 12 ГБ GDDR7'],
      ['Накопитель','2 ТБ NVMe PCIe 4.0, до 7400 МБ/с'],
      ['Охлаждение','Жидкостное 240 мм, помпа с керамическим подшипником'],
      ['Блок питания','850 Вт, 80 PLUS Gold, модульный'],
      ['Корпус','ATX с высоким продувом, 6 вентиляторов ARGB'],
      ['Система','Windows 11 Pro, драйверы установлены']
    ],
    fps:[['Cyberpunk 2077',106],['Alan Wake 2',92],['Warzone',200],['Starfield',95],['Flight Simulator 2024',78]],
    fpsNote:'2560×1440, ультра, DLSS Quality + Frame Generation'
  },
  {
    id:'plazma', name:'Плазма', volt:400, price:284900, old:0,
    tag:'', for:'Максимум для 1440p с 3D V-Cache',
    cats:['2k'], style:{h:230,w:128,fans:3,glow:'#FF9A1F',gpu:'long',cooler:'aio240',glass:true},
    short:[['Процессор','Ryzen 7 7800X3D'],['Видеокарта','RX 9070 XT 16 ГБ'],['Память','32 ГБ DDR5-6000']],
    full:[
      ['Процессор','AMD Ryzen 7 7800X3D, 8 ядер, 96 МБ 3D V-Cache'],
      ['Материнская плата','MSI MAG B650E Tomahawk, ATX'],
      ['Оперативная память','32 ГБ DDR5-6000 CL30 (2×16), EXPO'],
      ['Видеокарта','Radeon RX 9070 XT 16 ГБ GDDR6'],
      ['Накопитель','2 ТБ NVMe PCIe 4.0, до 7400 МБ/с'],
      ['Охлаждение','Жидкостное 240 мм, помпа с керамическим подшипником'],
      ['Блок питания','850 Вт, 80 PLUS Gold, модульный'],
      ['Корпус','ATX с высоким продувом, 6 вентиляторов ARGB'],
      ['Система','Windows 11 Pro, драйверы установлены']
    ],
    fps:[['Cyberpunk 2077',118],['Warzone',235],['CS2',450],['Red Dead Redemption 2',148],['Forza Horizon 5',195]],
    fpsNote:'2560×1440, ультра, FSR Quality + Frame Generation'
  },
  {
    id:'yadro', name:'Ядро', volt:430, price:299900, old:0,
    tag:'Компакт', tagCold:true, for:'Мощность 1440p в корпусе на 14 литров',
    cats:['2k','sff'], style:{h:150,w:132,fans:2,glow:'#8FE3FF',gpu:'long',cooler:'aio240',glass:true,sff:true},
    short:[['Процессор','Ryzen 7 7800X3D'],['Видеокарта','RTX 5070 12 ГБ'],['Объём корпуса','14 литров']],
    full:[
      ['Процессор','AMD Ryzen 7 7800X3D, 8 ядер, 96 МБ 3D V-Cache'],
      ['Материнская плата','ASUS ROG Strix B650E-I, mini-ITX'],
      ['Оперативная память','32 ГБ DDR5-6000 CL30 (2×16), низкопрофильная'],
      ['Видеокарта','GeForce RTX 5070 12 ГБ GDDR7, 2.5 слота'],
      ['Накопитель','2 ТБ NVMe PCIe 5.0, до 12 000 МБ/с'],
      ['Охлаждение','СЖО 240 мм, вертикальная компоновка'],
      ['Блок питания','850 Вт SFX, 80 PLUS Platinum'],
      ['Корпус','Mini-ITX, 14 л, алюминий и стекло, 34×22×20 см'],
      ['Система','Windows 11 Pro, драйверы установлены']
    ],
    fps:[['Cyberpunk 2077',115],['Alan Wake 2',98],['CS2',430],['Starfield',102],['Warzone',225]],
    fpsNote:'2560×1440, ультра, DLSS Quality + Frame Generation'
  },
  {
    id:'katushka', name:'Катушка', volt:480, price:347900, old:0,
    tag:'', for:'1440p с запасом и уверенный вход в 4K',
    cats:['2k','4k'], style:{h:234,w:130,fans:3,glow:'#FF9A1F',gpu:'long',cooler:'aio360',glass:true},
    short:[['Процессор','Ryzen 7 9700X'],['Видеокарта','RTX 5070 Ti 16 ГБ'],['Охлаждение','СЖО 360 мм']],
    full:[
      ['Процессор','AMD Ryzen 7 9700X, 8 ядер / 16 потоков, до 5.5 ГГц'],
      ['Материнская плата','ASUS ROG Strix X870-A, ATX'],
      ['Оперативная память','32 ГБ DDR5-6400 CL28 (2×16), EXPO'],
      ['Видеокарта','GeForce RTX 5070 Ti 16 ГБ GDDR7'],
      ['Накопитель','2 ТБ NVMe PCIe 5.0, до 14 000 МБ/с'],
      ['Охлаждение','Жидкостное 360 мм, дисплей температур на помпе'],
      ['Блок питания','1000 Вт, 80 PLUS Gold, ATX 3.1'],
      ['Корпус','ATX с высоким продувом, 6 вентиляторов ARGB'],
      ['Система','Windows 11 Pro, драйверы установлены']
    ],
    fps:[['Cyberpunk 2077',142],['Alan Wake 2',124],['Warzone',260],['Black Myth: Wukong',115],['Forza Horizon 5',210]],
    fpsNote:'2560×1440, ультра с трассировкой, DLSS Quality + Frame Generation'
  },
  {
    id:'volt', name:'Вольт', volt:540, price:376900, old:0,
    tag:'', for:'4K на 90 кадров с лучшим игровым процессором',
    cats:['4k'], style:{h:238,w:130,fans:3,glow:'#FF9A1F',gpu:'long',cooler:'aio360',glass:true},
    short:[['Процессор','Ryzen 7 9800X3D'],['Видеокарта','RTX 5070 Ti 16 ГБ'],['Память','32 ГБ DDR5-6400']],
    full:[
      ['Процессор','AMD Ryzen 7 9800X3D, 8 ядер / 16 потоков, 3D V-Cache'],
      ['Материнская плата','ASUS ROG Strix X870-A, ATX'],
      ['Оперативная память','32 ГБ DDR5-6400 CL28 (2×16), EXPO'],
      ['Видеокарта','GeForce RTX 5070 Ti 16 ГБ GDDR7'],
      ['Накопитель','2 ТБ NVMe PCIe 5.0, до 14 000 МБ/с'],
      ['Охлаждение','Жидкостное 360 мм, дисплей температур на помпе'],
      ['Блок питания','1000 Вт, 80 PLUS Gold, ATX 3.1'],
      ['Корпус','ATX с высоким продувом, 6 вентиляторов ARGB'],
      ['Система','Windows 11 Pro, драйверы установлены']
    ],
    fps:[['Cyberpunk 2077',92],['Alan Wake 2',84],['Warzone',175],['Black Myth: Wukong',78],['Forza Horizon 5',140]],
    fpsNote:'3840×2160, ультра с трассировкой, DLSS Quality + Frame Generation'
  },
  {
    id:'tesla', name:'Тесла', volt:600, price:411900, old:0,
    tag:'', for:'4K на платформе Intel, много ядер под стриминг',
    cats:['4k'], style:{h:240,w:132,fans:3,glow:'#FF9A1F',gpu:'long',cooler:'aio360',glass:true},
    short:[['Процессор','Core Ultra 7 265K'],['Видеокарта','RTX 5080 16 ГБ'],['Память','32 ГБ DDR5-6400']],
    full:[
      ['Процессор','Intel Core Ultra 7 265K, 20 ядер, сильный в рендере'],
      ['Материнская плата','ASUS TUF Gaming Z890-Plus, ATX'],
      ['Оперативная память','32 ГБ DDR5-6400 CL28 (2×16), XMP'],
      ['Видеокарта','GeForce RTX 5080 16 ГБ GDDR7'],
      ['Накопитель','2 ТБ NVMe PCIe 5.0, до 14 000 МБ/с'],
      ['Охлаждение','Жидкостное 360 мм, дисплей температур на помпе'],
      ['Блок питания','1000 Вт, 80 PLUS Gold, ATX 3.1'],
      ['Корпус','ATX с высоким продувом, 6 вентиляторов ARGB'],
      ['Система','Windows 11 Pro, драйверы установлены']
    ],
    fps:[['Cyberpunk 2077',112],['Alan Wake 2',99],['Warzone',185],['Starfield',105],['Flight Simulator 2024',88]],
    fpsNote:'3840×2160, ультра с трассировкой, DLSS Quality + Frame Generation'
  },
  {
    id:'razryadnik', name:'Разрядник', volt:640, price:427900, old:0,
    tag:'Компакт', tagCold:true, for:'4K в корпусе, который помещается на стол',
    cats:['4k','sff'], style:{h:156,w:136,fans:2,glow:'#8FE3FF',gpu:'long',cooler:'aio240',glass:true,sff:true},
    short:[['Процессор','Ryzen 7 9800X3D'],['Видеокарта','RTX 5080 16 ГБ'],['Объём корпуса','16 литров']],
    full:[
      ['Процессор','AMD Ryzen 7 9800X3D, 8 ядер / 16 потоков, 3D V-Cache'],
      ['Материнская плата','ASUS ROG Strix B650E-I, mini-ITX'],
      ['Оперативная память','32 ГБ DDR5-6400 CL28 (2×16), низкопрофильная'],
      ['Видеокарта','GeForce RTX 5080 16 ГБ GDDR7, 2.5 слота'],
      ['Накопитель','2 ТБ NVMe PCIe 5.0, до 14 000 МБ/с'],
      ['Охлаждение','СЖО 240 мм, вертикальная компоновка'],
      ['Блок питания','850 Вт SFX, 80 PLUS Platinum'],
      ['Корпус','Mini-ITX, 16 л, алюминий и стекло, 36×23×21 см'],
      ['Система','Windows 11 Pro, драйверы установлены']
    ],
    fps:[['Cyberpunk 2077',116],['Alan Wake 2',102],['Warzone',195],['Black Myth: Wukong',94],['CS2',480]],
    fpsNote:'3840×2160, ультра с трассировкой, DLSS Quality + Frame Generation'
  },
  {
    id:'groza', name:'Гроза', volt:680, price:449900, old:489900,
    tag:'4K', for:'4K на 120 кадров и стриминг без просадок',
    cats:['4k'], style:{h:244,w:134,fans:3,glow:'#FF9A1F',gpu:'long',cooler:'aio360',glass:true},
    short:[['Процессор','Ryzen 7 9800X3D'],['Видеокарта','RTX 5080 16 ГБ'],['Охлаждение','СЖО 360 мм']],
    full:[
      ['Процессор','AMD Ryzen 7 9800X3D, 8 ядер / 16 потоков, 3D V-Cache'],
      ['Материнская плата','ASUS ROG Strix X870-A, ATX'],
      ['Оперативная память','32 ГБ DDR5-6400 CL28 (2×16), EXPO'],
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
    id:'ciklon', name:'Циклон', volt:720, price:473900, old:0,
    tag:'', for:'4K и стрим одновременно: 12 ядер и 64 ГБ',
    cats:['4k'], style:{h:246,w:136,fans:3,glow:'#FF9A1F',gpu:'long',cooler:'aio360',glass:true},
    short:[['Процессор','Ryzen 9 9900X'],['Видеокарта','RTX 5080 16 ГБ'],['Память','64 ГБ DDR5-6000']],
    full:[
      ['Процессор','AMD Ryzen 9 9900X, 12 ядер / 24 потока, до 5.6 ГГц'],
      ['Материнская плата','ASUS ROG Strix X870-A, ATX'],
      ['Оперативная память','64 ГБ DDR5-6000 CL30 (2×32), EXPO'],
      ['Видеокарта','GeForce RTX 5080 16 ГБ GDDR7'],
      ['Накопитель','4 ТБ NVMe PCIe 5.0, до 14 000 МБ/с'],
      ['Охлаждение','Жидкостное 360 мм, дисплей температур на помпе'],
      ['Блок питания','1000 Вт, 80 PLUS Gold, ATX 3.1'],
      ['Корпус','Full-Tower, двухкамерный, 8 вентиляторов ARGB'],
      ['Система','Windows 11 Pro, драйверы установлены']
    ],
    fps:[['Cyberpunk 2077',115],['Alan Wake 2',101],['Warzone',188],['Starfield',110],['Flight Simulator 2024',95]],
    fpsNote:'3840×2160, ультра с трассировкой, DLSS Quality + Frame Generation'
  },
  {
    id:'titan', name:'Титан', volt:820, price:669900, old:0,
    tag:'', for:'4K без ограничений на 24 ядрах Intel',
    cats:['4k'], style:{h:248,w:138,fans:3,glow:'#FF9A1F',gpu:'long',cooler:'aio360',glass:true},
    short:[['Процессор','Core Ultra 9 285K'],['Видеокарта','RTX 5090 32 ГБ'],['Память','64 ГБ DDR5-6400']],
    full:[
      ['Процессор','Intel Core Ultra 9 285K, 24 ядра, флагман Intel'],
      ['Материнская плата','ASUS TUF Gaming Z890-Plus, ATX'],
      ['Оперативная память','64 ГБ DDR5-6400 CL30 (2×32), XMP'],
      ['Видеокарта','GeForce RTX 5090 32 ГБ GDDR7'],
      ['Накопитель','4 ТБ NVMe PCIe 5.0, до 14 000 МБ/с'],
      ['Охлаждение','Жидкостное 360 мм, дисплей температур на помпе'],
      ['Блок питания','1200 Вт, 80 PLUS Platinum, ATX 3.1'],
      ['Корпус','Full-Tower, двухкамерный, 8 вентиляторов ARGB'],
      ['Система','Windows 11 Pro, драйверы установлены']
    ],
    fps:[['Cyberpunk 2077',158],['Alan Wake 2',136],['Warzone',245],['Black Myth: Wukong',130],['Flight Simulator 2024',115]],
    fpsNote:'3840×2160, ультра с полной трассировкой, DLSS Quality + Frame Generation'
  },
  {
    id:'molniya', name:'Молния', volt:1000, price:734900, old:0,
    tag:'Флагман', for:'4K 240 Гц — максимум, что даёт воздух и вода',
    cats:['4k'], style:{h:250,w:140,fans:3,glow:'#FF9A1F',gpu:'long',cooler:'aio360',glass:true},
    short:[['Процессор','Ryzen 9 9950X3D'],['Видеокарта','RTX 5090 32 ГБ'],['Память','64 ГБ DDR5-6400']],
    full:[
      ['Процессор','AMD Ryzen 9 9950X3D, 16 ядер / 32 потока, 3D V-Cache'],
      ['Материнская плата','ASUS ROG Crosshair X870E Hero, ATX'],
      ['Оперативная память','64 ГБ DDR5-6400 CL30 (2×32), EXPO'],
      ['Видеокарта','GeForce RTX 5090 32 ГБ GDDR7'],
      ['Накопитель','4 ТБ NVMe PCIe 5.0, до 14 000 МБ/с'],
      ['Охлаждение','Жидкостное 360 мм, дисплей температур на помпе'],
      ['Блок питания','1200 Вт, 80 PLUS Platinum, ATX 3.1'],
      ['Корпус','Full-Tower, закалённое стекло с трёх сторон, 11 вентиляторов'],
      ['Система','Windows 11 Pro, драйверы установлены']
    ],
    fps:[['Cyberpunk 2077',165],['Alan Wake 2',142],['Warzone',260],['Black Myth: Wukong',138],['Flight Simulator 2024',120]],
    fpsNote:'3840×2160, ультра с полной трассировкой, DLSS Quality + Frame Generation'
  },
  {
    id:'reaktor', name:'Реактор', volt:1200, price:819900, old:0,
    tag:'', for:'Тот же максимум, но на кастомном контуре и в тишине',
    cats:['4k'], style:{h:252,w:142,fans:3,glow:'#FF9A1F',gpu:'long',cooler:'custom',glass:true},
    short:[['Процессор','Ryzen 9 9950X3D'],['Видеокарта','RTX 5090 32 ГБ'],['Охлаждение','Кастомный контур']],
    full:[
      ['Процессор','AMD Ryzen 9 9950X3D, 16 ядер / 32 потока, 3D V-Cache'],
      ['Материнская плата','ASUS ROG Crosshair X870E Hero, ATX'],
      ['Оперативная память','64 ГБ DDR5-6400 CL30 (2×32), EXPO'],
      ['Видеокарта','GeForce RTX 5090 32 ГБ GDDR7, водоблок'],
      ['Накопитель','4 ТБ NVMe PCIe 5.0, до 14 000 МБ/с'],
      ['Охлаждение','Кастомный контур: медные фитинги, два радиатора 360 мм'],
      ['Блок питания','1200 Вт, 80 PLUS Platinum, ATX 3.1'],
      ['Корпус','Full-Tower, закалённое стекло с трёх сторон, 11 вентиляторов'],
      ['Система','Windows 11 Pro, драйверы установлены']
    ],
    fps:[['Cyberpunk 2077',170],['Alan Wake 2',146],['Warzone',268],['Black Myth: Wukong',142],['Flight Simulator 2024',124]],
    fpsNote:'3840×2160, ультра с полной трассировкой, DLSS Quality + Frame Generation'
  },
  {
    id:'apeks', name:'Апекс', volt:1400, price:889900, old:0,
    tag:'Предел', for:'Всё лучшее сразу: 96 ГБ, 8 ТБ и кастомный контур',
    cats:['4k'], style:{h:254,w:144,fans:3,glow:'#FF9A1F',gpu:'long',cooler:'custom',glass:true},
    short:[['Процессор','Ryzen 9 9950X3D'],['Видеокарта','RTX 5090 32 ГБ'],['Память','96 ГБ DDR5-5600']],
    full:[
      ['Процессор','AMD Ryzen 9 9950X3D, 16 ядер / 32 потока, 3D V-Cache'],
      ['Материнская плата','ASUS ROG Crosshair X870E Hero, ATX'],
      ['Оперативная память','96 ГБ DDR5-5600 (2×48), EXPO'],
      ['Видеокарта','GeForce RTX 5090 32 ГБ GDDR7, водоблок'],
      ['Накопитель','4 ТБ PCIe 5.0 + 4 ТБ PCIe 5.0, всего 8 ТБ'],
      ['Охлаждение','Кастомный контур: медные фитинги, два радиатора 360 мм'],
      ['Блок питания','1200 Вт, 80 PLUS Platinum, ATX 3.1'],
      ['Корпус','Full-Tower, закалённое стекло с трёх сторон, 11 вентиляторов'],
      ['Система','Windows 11 Pro, драйверы установлены']
    ],
    fps:[['Cyberpunk 2077',170],['Alan Wake 2',146],['Warzone',268],['Black Myth: Wukong',142],['Flight Simulator 2024',126]],
    fpsNote:'3840×2160, ультра с полной трассировкой, DLSS Quality + Frame Generation'
  }
];

window.VOLTAZH.BUILDS = BUILDS;
/* ============================================================
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
      { id:'r5-7500f',   name:'AMD Ryzen 5 7500F',       note:'6 ядер / 12 потоков, до 5.0 ГГц',           price:15500, socket:'AM5',     tdp:65  },
      { id:'r5-9600x',   name:'AMD Ryzen 5 9600X',       note:'6 ядер / 12 потоков, до 5.4 ГГц',           price:26000, socket:'AM5',     tdp:65  },
      { id:'r7-9700x',   name:'AMD Ryzen 7 9700X',       note:'8 ядер / 16 потоков, до 5.5 ГГц',           price:37500, socket:'AM5',     tdp:65  },
      { id:'r7-7800x3d', name:'AMD Ryzen 7 7800X3D',     note:'8 ядер, 96 МБ 3D V-Cache — лучший в играх', price:47000, socket:'AM5',     tdp:120 },
      { id:'r7-9800x3d', name:'AMD Ryzen 7 9800X3D',     note:'8 ядер, 3D V-Cache нового поколения',       price:63000, socket:'AM5',     tdp:120 },
      { id:'r9-9950x3d', name:'AMD Ryzen 9 9950X3D',     note:'16 ядер / 32 потока, 3D V-Cache',           price:99000, socket:'AM5',     tdp:170 },
      { id:'cu5-245k',   name:'Intel Core Ultra 5 245K', note:'14 ядер, разблокированный множитель',       price:33000, socket:'LGA1851', tdp:125 },
      { id:'cu7-265k',   name:'Intel Core Ultra 7 265K', note:'20 ядер, сильный в рендере',                price:45000, socket:'LGA1851', tdp:125 },
      { id:'cu9-285k',   name:'Intel Core Ultra 9 285K', note:'24 ядра, флагман Intel',                    price:73000, socket:'LGA1851', tdp:125 }
    ]
  },

  mb: {
    title: 'Материнская плата', hint: 'Сокет обязан совпасть с процессором',
    options: [
      { id:'b650m-p',    name:'MSI PRO B650M-P',               note:'mATX, DDR5, 2 слота M.2',             price:12000, socket:'AM5',     form:'mATX' },
      { id:'tuf-b650',   name:'ASUS TUF Gaming B650-Plus',     note:'ATX, усиленное питание, 3 слота M.2', price:18000, socket:'AM5',     form:'ATX'  },
      { id:'tomahawk',   name:'MSI MAG B650E Tomahawk',        note:'ATX, PCIe 5.0, 4 слота M.2',          price:24000, socket:'AM5',     form:'ATX'  },
      { id:'strix-i',    name:'ASUS ROG Strix B650E-I',        note:'Mini-ITX для компактных сборок',      price:32000, socket:'AM5',     form:'ITX'  },
      { id:'strix-x870', name:'ASUS ROG Strix X870-A',         note:'ATX, Wi-Fi 7, USB4',                  price:38000, socket:'AM5',     form:'ATX'  },
      { id:'crosshair',  name:'ASUS ROG Crosshair X870E Hero', note:'ATX, топовое питание и обвес',        price:68000, socket:'AM5',     form:'ATX'  },
      { id:'b860m',      name:'MSI PRO B860M-A',               note:'mATX под Core Ultra',                 price:11000, socket:'LGA1851', form:'mATX' },
      { id:'tuf-z890',   name:'ASUS TUF Gaming Z890-Plus',     note:'ATX, разгон памяти',                  price:36000, socket:'LGA1851', form:'ATX'  }
    ]
  },

  ram: {
    title: 'Оперативная память', hint: 'Для игр достаточно 32 ГБ',
    options: [
      { id:'16-5600', name:'16 ГБ DDR5-5600',      note:'2×8 ГБ — минимум для Full HD',  price:6500  },
      { id:'32-6000', name:'32 ГБ DDR5-6000 CL30', note:'2×16 ГБ — оптимум для игр',     price:13000 },
      { id:'32-6400', name:'32 ГБ DDR5-6400 CL28', note:'2×16 ГБ, низкие задержки',      price:16500 },
      { id:'64-6000', name:'64 ГБ DDR5-6000 CL30', note:'2×32 ГБ — игры плюс работа',    price:27000 },
      { id:'96-5600', name:'96 ГБ DDR5-5600',      note:'2×48 ГБ для 3D и нейросетей',   price:42000 }
    ]
  },

  gpu: {
    title: 'Видеокарта', hint: 'Главное, что определяет кадры в играх',
    options: [
      { id:'rtx5060',   name:'GeForce RTX 5060 8 ГБ',     note:'Full HD на высоких',                price:52000,  tdp:145, len:245, res:'Full HD' },
      { id:'rtx5060ti', name:'GeForce RTX 5060 Ti 16 ГБ', note:'Full HD ультра, вход в 1440p',      price:74000,  tdp:180, len:265, res:'Full HD / 2K' },
      { id:'rtx5070',   name:'GeForce RTX 5070 12 ГБ',    note:'1440p на 144 Гц',                   price:96000,  tdp:250, len:285, res:'2K' },
      { id:'rx9070xt',  name:'Radeon RX 9070 XT 16 ГБ',   note:'1440p, много памяти за свои деньги',price:112000, tdp:304, len:320, res:'2K' },
      { id:'rtx5070ti', name:'GeForce RTX 5070 Ti 16 ГБ', note:'1440p с запасом, вход в 4K',        price:138000, tdp:300, len:305, res:'2K / 4K' },
      { id:'rtx5080',   name:'GeForce RTX 5080 16 ГБ',    note:'4K на 120 кадров',                  price:189000, tdp:360, len:330, res:'4K' },
      { id:'rtx5090',   name:'GeForce RTX 5090 32 ГБ',    note:'4K 240 Гц, максимум из возможного', price:335000, tdp:575, len:358, res:'4K' }
    ]
  },

  ssd: {
    title: 'Накопитель', hint: 'Одна современная игра занимает до 150 ГБ',
    options: [
      { id:'1tb-g4', name:'1 ТБ NVMe PCIe 4.0', note:'до 7000 МБ/с',   price:9000  },
      { id:'2tb-g4', name:'2 ТБ NVMe PCIe 4.0', note:'до 7400 МБ/с',   price:16000 },
      { id:'2tb-g5', name:'2 ТБ NVMe PCIe 5.0', note:'до 14 000 МБ/с', price:25000 },
      { id:'4tb-g5', name:'4 ТБ NVMe PCIe 5.0', note:'до 14 000 МБ/с', price:46000 }
    ]
  },

  cooler: {
    title: 'Охлаждение', hint: 'Должно покрывать тепловыделение процессора',
    options: [
      { id:'air-120',  name:'Башенный кулер, 4 трубки', note:'120 мм, тихий под нагрузкой',    price:4500,  maxTdp:95,  height:158 },
      { id:'air-dual', name:'Двухбашенный, 6 трубок',   note:'2×120 мм, держит восемь ядер',   price:8500,  maxTdp:180, height:165 },
      { id:'aio-240',  name:'СЖО 240 мм',               note:'Двухсекционный радиатор',        price:13000, maxTdp:200, rad:240 },
      { id:'aio-360',  name:'СЖО 360 мм',               note:'Дисплей температур на помпе',    price:19500, maxTdp:280, rad:360 },
      { id:'custom',   name:'Кастомный контур',         note:'Медные фитинги, водоблок на GPU',price:95000, maxTdp:400, rad:360 }
    ]
  },

  psu: {
    title: 'Блок питания', hint: 'Нужную мощность считаем автоматически',
    options: [
      { id:'650b',  name:'650 Вт, 80 PLUS Bronze',    note:'Для сборок начального уровня', price:7500,  watt:650  },
      { id:'750g',  name:'750 Вт, 80 PLUS Gold',      note:'Модульный, тихий',             price:12000, watt:750  },
      { id:'850g',  name:'850 Вт, 80 PLUS Gold',      note:'Модульный, ATX 3.1',           price:16500, watt:850  },
      { id:'1000g', name:'1000 Вт, 80 PLUS Gold',     note:'ATX 3.1, разъём 12V-2x6',      price:24000, watt:1000 },
      { id:'1200p', name:'1200 Вт, 80 PLUS Platinum', note:'С запасом под RTX 5090',       price:36000, watt:1200 }
    ]
  },

  pcase: {
    title: 'Корпус', hint: 'Ограничивает длину видеокарты и высоту кулера',
    options: [
      { id:'matx-mesh',  name:'mATX с сетчатым фронтом',  note:'3 вентилятора ARGB в комплекте',   price:7000,  forms:['mATX','ITX'],       gpuMax:330, coolerMax:160, radMax:240 },
      { id:'atx-glass',  name:'ATX, закалённое стекло',   note:'4 вентилятора ARGB',               price:13000, forms:['ATX','mATX','ITX'], gpuMax:360, coolerMax:170, radMax:360 },
      { id:'itx-14l',    name:'Mini-ITX, 14 литров',      note:'Алюминий и стекло, 34×22×20 см',   price:27000, forms:['ITX'],              gpuMax:322, coolerMax:70,  radMax:240 },
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
