import spacetime from './src/index.js'
// spacetime.extend(require('./plugins/dst/src/index.js'))

const aliases = {
  // 'Canada/East-Saskatchewan': 'America/Regina',
  'asia/volgograd': 'Europe/Moscow',
  // 'America/Argentina': '', //multiple timezones...
  // 'America/Indiana': '', //both central/eastern
  // 'America/Kentucky': '', //both central/eastern
  // 'America/North_Dakota': '' //both central/mountain

  // CldrAliases from Timezonenames
  // https://Github.com/Mj1856/Timezonenames
  'america/argentina/buenos_aires': 'America/Buenos_Aires',
  'america/argentina/cordoba': 'America/Cordoba',
  'america/rosario': 'America/Cordoba',
  'america/argentina/catamarca': 'America/Catamarca',
  'america/argentina/comodrivadavia': 'America/Catamarca',
  'america/argentina/jujuy': 'America/Jujuy',
  'america/argentina/mendoza': 'America/Mendoza',
  'pacific/samoa': 'Pacific/Pago_Pago',
  'us/samoa': 'Pacific/Pago_Pago',
  'australia/south': 'Australia/Adelaide',
  'australia/yancowinna': 'Australia/Broken_Hill',
  'australia/queensland': 'Australia/Brisbane',
  'australia/north': 'Australia/Darwin',
  'australia/tasmania': 'Australia/Hobart',
  'australia/lhi': 'Australia/Lord_Howe',
  'australia/victoria': 'Australia/Melbourne',
  'australia/west': 'Australia/Perth',
  'australia/act': 'Australia/Sydney',
  'australia/canberra': 'Australia/Sydney',
  'australia/nsw': 'Australia/Sydney',
  'asia/dacca': 'Asia/Dhaka',
  'brazil/denoronha': 'America/Noronha',
  'brazil/west': 'America/Manaus',
  'america/porto_acre': 'America/Rio_Branco',
  'brazil/acre': 'America/Rio_Branco',
  'brazil/east': 'America/Sao_Paulo',
  'asia/thimbu': 'Asia/Thimphu',
  'canada/mountain': 'America/Edmonton',
  'canada/atlantic': 'America/Halifax',
  'canada/east-saskatchewan': 'America/Regina',
  'canada/saskatchewan': 'America/Regina',
  'canada/newfoundland': 'America/St_Johns',
  'canada/eastern': 'America/Toronto',
  'canada/pacific': 'America/Vancouver',
  'canada/central': 'America/Winnipeg',
  'canada/yukon': 'America/Whitehorse',
  'america/atikokan': 'America/Coral_Harbour',
  'chile/easterisland': 'Pacific/Easter',
  'chile/continental': 'America/Santiago',
  'asia/chongqing': 'Asia/Shanghai',
  'asia/chungking': 'Asia/Shanghai',
  'asia/harbin': 'Asia/Shanghai',
  prc: 'Asia/Shanghai',
  'asia/kashgar': 'Asia/Urumqi',
  cuba: 'America/Havana',
  'europe/nicosia': 'Asia/Nicosia',
  egypt: 'Africa/Cairo',
  'africa/asmara': 'Africa/Asmera',
  'pacific/pohnpei': 'Pacific/Ponape',
  'pacific/chuuk': 'Pacific/Truk',
  'pacific/yap': 'Pacific/Truk',
  'atlantic/faroe': 'Atlantic/Faeroe',
  'europe/belfast': 'Europe/London',
  gb: 'Europe/London',
  'gb-eire': 'Europe/London',
  'america/nuuk': 'America/Godthab',
  'etc/gmt+0': 'Etc/GMT',
  'etc/gmt-0': 'Etc/GMT',
  'etc/gmt0': 'Etc/GMT',
  'etc/greenwich': 'Etc/GMT',
  gmt: 'Etc/GMT',
  'gmt+0': 'Etc/GMT',
  'gmt-0': 'Etc/GMT',
  gmt0: 'Etc/GMT',
  greenwich: 'Etc/GMT',
  hongkong: 'Asia/Hong_Kong',
  'asia/ujung_pandang': 'Asia/Makassar',
  eire: 'Europe/Dublin',
  'asia/kolkata': 'Asia/Calcutta',
  iran: 'Asia/Tehran',
  iceland: 'Atlantic/Reykjavik',
  'asia/tel_aviv': 'Asia/Jerusalem',
  israel: 'Asia/Jerusalem',
  jamaica: 'America/Jamaica',
  japan: 'Asia/Tokyo',
  rok: 'Asia/Seoul',
  libya: 'Africa/Tripoli',
  'europe/tiraspol': 'Europe/Chisinau',
  kwajalein: 'Pacific/Kwajalein',
  'africa/timbuktu': 'Africa/Bamako',
  'asia/yangon': 'Asia/Rangoon',
  'asia/ulan_bator': 'Asia/Ulaanbaatar',
  'asia/macao': 'Asia/Macau',
  'mexico/general': 'America/Mexico_City',
  'mexico/bajasur': 'America/Mazatlan',
  'america/ensenada': 'America/Tijuana',
  'mexico/bajanorte': 'America/Tijuana',
  'asia/kathmandu': 'Asia/Katmandu',
  'antarctica/south_pole': 'Pacific/Auckland',
  nz: 'Pacific/Auckland',
  'nz-chat': 'Pacific/Chatham',
  poland: 'Europe/Warsaw',
  portugal: 'Europe/Lisbon',
  'w-su': 'Europe/Moscow',
  singapore: 'Asia/Singapore',
  'atlantic/jan_mayen': 'Arctic/Longyearbyen',
  'asia/ashkhabad': 'Asia/Ashgabat',
  'asia/istanbul': 'Europe/Istanbul',
  turkey: 'Europe/Istanbul',
  roc: 'Asia/Taipei',
  'america/atka': 'America/Adak',
  'us/aleutian': 'America/Adak',
  'us/alaska': 'America/Anchorage',
  'us/central': 'America/Chicago',
  'america/shiprock': 'America/Denver',
  navajo: 'America/Denver',
  'us/mountain': 'America/Denver',
  'us/michigan': 'America/Detroit',
  'us/hawaii': 'Pacific/Honolulu',
  'america/fort_wayne': 'America/Indianapolis',
  'america/indiana/indianapolis': 'America/Indianapolis',
  'us/east-indiana': 'America/Indianapolis',
  'america/knox_in': 'America/Indiana/Knox',
  'us/indiana-starke': 'America/Indiana/Knox',
  'us/pacific': 'America/Los_Angeles',
  'us/pacific-new': 'America/Los_Angeles',
  'america/kentucky/louisville': 'America/Louisville',
  'us/eastern': 'America/New_York',
  'us/arizona': 'America/Phoenix',
  'etc/uct': 'Etc/UTC',
  'etc/universal': 'Etc/UTC',
  'etc/zulu': 'Etc/UTC',
  uct: 'Etc/UTC',
  utc: 'Etc/UTC',
  universal: 'Etc/UTC',
  zulu: 'Etc/UTC',
  est: 'Etc/GMT+5',
  mst: 'Etc/GMT+7',
  hst: 'Etc/GMT+10',
  'america/virgin': 'America/St_Thomas',
  'asia/ho_chi_minh': 'Asia/Saigon',
  cet: 'Europe/Paris',
  eet: 'Europe/Bucharest',
  met: 'Europe/Berlin',
  wet: 'Atlantic/Canary'
  // 'antarctica/rothera': 'America/Buenos_Aires'
}
console.log(Object.keys(aliases).length)
Object.keys(aliases).forEach(k => {
  try {

    const s = spacetime('sep 1 2000', k)
    s.timezone()
    delete aliases[k]
  } catch (e) {
    console.log(k)

  }
})
console.log(Object.keys(aliases).length)

// console.log(aliases)