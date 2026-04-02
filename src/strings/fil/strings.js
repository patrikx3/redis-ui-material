const strings = {
  error: {
    server_error: "Error sa server, pakisubukang muli"
  },
  title: {
    donate: "Mag-donate",
    jsonRecursive: "Pagpapalawak ng lahat ng mga dahon",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "Maaari kang pumili ng Redis na koneksyon upang kumonekta mula sa kaliwang ibabang menu.",
    statistics: "Mga istatistika",
    error: "Error",
    connectingRedis: "Kumokonekta sa Redis ...",
    socketioConnectError: "Socket.IO Error",
    db: "DB",
    server: "Server",
    clients: "Mga kliyente",
    memory: "Alaala",
    persistence: "Pagtitiyaga",
    stats: "Mga istatistika",
    replication: "Pagtitiklop",
    cpu: "CPU",
    cluster: "Cluster",
    modules: "Mga Module",
    errorstats: "Estadistika ng Error",
    commandstats: "Estadistika ng Command",
    latencystats: "Estadistika ng Latency",
    keysizes: "Laki ng Susi",
    threads: "Mga Thread",
  },
  confirm: {
    dropIndex: "Sigurado ka bang tanggalin ang index na ito?",
    uploadBuffer: "Sigurado ka bang ia-upload ang binary data na ito?",
    uploadBufferDone: "Ang binary data ay na-upload",
    uploadBufferDoneAndSave: "Ang binary data ay na-upload at nai-save sa server",
    title: "Kumpirmahin",
    alert: "Alerto",
    info: "Impormasyon",
    deleteListItem: "Sigurado ka bang tatanggalin ang item sa listahan na ito?",
    deleteHashKey: "Sigurado ka bang tatanggalin ang hash key item na ito?",
    deleteStreamTimestamp: "Sigurado ka bang tatanggalin ang timestamp ng stream na ito?",
    deleteSetMember: "Sigurado ka bang tatanggalin ang set member na ito?",
    deleteZSetMember: "Sigurado ka bang tatanggalin ang pinagsunod-sunod na miyembrong ito?",
    deleteConnection: "Kumpirmahin",
    deleteConnectionText: "Sigurado ka bang tatanggalin ang koneksyong Redis na ito?",
    deleteNode: "Sigurado ka bang tatanggalin ang Redis node na ito?",
    delete: "Tanggalin?",
    deleteAllKeys: opts => {
      return `Tanggalin ang punong ito at lahat ng susi nito (${opts.key})?`;
    },
    deleteSearchKeys: opts => {
      return `Sigurado ka bang gusto mong tanggalin ang lahat ng key na tumutugma sa "${opts.pattern}"? Nahanap ang ${opts.count} key.`;
    },
    socketioConnectError: "Ang Socket.IO ay hindi makakonekta sa server, maaari mong i-reload at subukang lutasin ang error sa koneksyon sa iyong sarili, hindi alam ng kliyente kung paano lutasin ito mismo.",
    socketioAuthRequired: "Kinakailangan ang pahintulot ng Socket.IO. Paki-authenticate gamit ang HTTP Basic Auth (username/password) at i-reload.",
    deleteKey: "Sigurado ka bang tatanggalin ang key na ito?",
    rename: {
      title: "Sigurado ka bang papalitan ang pangalan ng key na ito?",
      textContent: "Ang pagkilos na ito ay permanenteng pinapalitan ang pangalan ng susi.",
      placeholder: "Ang Redis key (kinakailangan)"
    },
    ttl: {
      title: "Sigurado ka bang gusto mong baguhin ang TTL ng key na ito?",
      textContent: "Ang pagpapalit ng TTL ay nag-a-update sa oras ng key na ito upang mabuhay. Iwanang walang laman upang panatilihin ang susi na ito magpakailanman.",
      placeholder: "Ang Redis key ng TTL (integer o walang laman)",
      placeholderPlaceholder: "Ang walang laman ay nangangahulugan na ito ay nagpapatuloy magpakailanman; kung hindi, maglagay ng integer.",
      convertTextToTime: "I-convert ang teksto sa oras",
      convertTextToTimePlaceholder: "Hal. Ang 1d ay magiging 86400"
    },
  },
  language: {
    ar: "العربية / Arabic",
    az: "Azərbaycanca / Azerbaijani",
    be: "Беларуская / Belarusian",
    bg: "Български / Bulgarian",
    bn: "বাংলা / Bengali",
    cs: "Čeština / Czech",
    da: "Dansk / Danish",
    de: "Deutsch / German",
    el: "Ελληνικά / Greek",
    en: "English",
    es: "Español / Spanish",
    et: "Eesti / Estonian",
    fi: "Suomi / Finnish",
    fil: "Filipino / Filipino",
    fr: "Français / French",
    he: "עברית / Hebrew",
    hr: "Hrvatski / Croatian",
    hu: "Magyar / Hungarian",
    hy: "Հայերեն / Armenian",
    id: "Bahasa Indonesia / Indonesian",
    it: "Italiano / Italian",
    ja: "日本語 / Japanese",
    ka: "ქართული / Georgian",
    kk: "Қазақша / Kazakh",
    km: "ខ្មែរ / Khmer",
    ko: "한국어 / Korean",
    ky: "Кыргызча / Kyrgyz",
    lt: "Lietuvių / Lithuanian",
    mk: "Македонски / Macedonian",
    ms: "Bahasa Melayu / Malay",
    ne: "नेपाली / Nepali",
    nl: "Nederlands / Dutch",
    no: "Norsk / Norwegian",
    pl: "Polski / Polish",
    "pt-BR": "Português (Brasil) / Portuguese (Brazil)",
    "pt-PT": "Português / Portuguese",
    ro: "Română / Romanian",
    ru: "Русский / Russian",
    sk: "Slovenčina / Slovak",
    sl: "Slovenščina / Slovenian",
    sr: "Српски / Serbian",
    sv: "Svenska / Swedish",
    tg: "Тоҷикӣ / Tajik",
    th: "ไทย / Thai",
    tr: "Türkçe / Turkish",
    uk: "Українська / Ukrainian",
    vi: "Tiếng Việt / Vietnamese",
    "zh-HK": "中文（香港） / Chinese (Hong Kong)",
    "zh-TW": "中文（台灣） / Chinese (Taiwan)",
    zn: "中文 / Chinese",
    bs: 'Bosanski / Bosnian',
    si: 'සිංහල / Sinhala',
    sw: 'Kiswahili / Swahili',
    ta: 'தமிழ் / Tamil'
  },
  intention: {
    copy: "Kopyahin",
    downloadBuffer: "I-download ang binary",
    setBuffer: "Mag-upload ng binary",
    exportKeys: "I-export ang mga key",
    exportAllKeys: (opts) => `I-export lahat ng ${opts.count} key`,
    exportSearchResults: (opts) => `I-export ${opts.count} resulta`,
    deleteAllKeysMenu: (opts) => `Tanggalin lahat ${opts.count}`,
    importKeys: "I-import ang mga key",
    deleteSearchKeys: (opts) => `Tanggalin ang ${opts.count} tumutugmang key`,
    saveWithFormatJson: "I-save gamit ang format",
    formatJson: "I-format si Json",
    wrap: "Balutin",
    unwrap: "I-unwrap",
    downloadJson: "I-download ang JSON",
    pubsubMonitor: "PubSub",
    pulse: "Pulse",
    profiler: "Profiler",
    memoryAnalysis: "Analysis",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "Wika",
    ok: "OK",
    addKey: "Idagdag sa key na ito",
    addKeyRoot: "Magdagdag ng root key",
    reloadKey: "I-reload ang key",
    reload: "I-reload",
    close: "Isara",
    commands: "Mga utos",
    view: "Tingnan",
    statistics: "Mga istatistika",
    refresh: "I-refresh",
    pause: "I-pause",
    resume: "Ituloy",
    clear: "Maaliwalas",
    rename: "Palitan ang pangalan",
    main: "Database",
    cancel: "Kanselahin",
    theme: "Tema",
    github: "GitHub",
    githubRepo: "Imbakan",
    githubRelease: "Mga release",
    githubChangelog: "Changelog",
    info: "Info",
    settings: "Mga setting",
    connect: "Kumonekta",
    disconnect: "Idiskonekta",
    overview: "Pangkalahatang-ideya",
    console: "Console",
    noConnections: "Walang koneksyon, magdagdag ng koneksyon sa menu ng mga setting.",
    noConnectionsInSettings: "Walang koneksyon, maaari kang magdagdag ng BAGONG CONNECTION sa itaas.",
    connectionAdd: "Bagong koneksyon",
    addGroup: "Magdagdag ng grupo",
    extend: "Palawigin",
    collapse: "I-collapse",
    add: "Idagdag",
    edit: "I-edit",
    save: "I-save",
    ttl: "Itakda ang TTL",
    delete: "Tanggalin",
    remove: "Alisin",
    sure: "Oo naman",
    testConnection: "Subukan ang koneksyon",
    getKey: "Nilo-load ang Redis key at nauugnay na data ...",
    jsonViewShow: "Ipakita ang JSON",
    jsonViewEditor: "I-edit ang JSON",
    quickConsole: "Mabilis na Console",
  },
  label: {
    id: {
      nodeId: "Node ID",
      id: "ID ng Koneksyon",
      info: "Kung ayaw mong baguhin ang mga katangian ng: sshPassword, sshPrivateKey, password, tlsCrt, tlsKey, tlsCa, mangyaring ilagay ang ID ng koneksyon sa mga property na iyon upang mapanatiling buo ang mga value ng property. Kung gusto mo ng parehong logic sa node password, pagkatapos ay ilagay ang node ID sa node password."
    },
    secureFeature: "Kung makakita ka ng isang halaga na nagsisimula sa isang P3X na katulad ng hitsura, ito ay isang secure na tampok. Upang baguhin ang mga setting, palitan lamang ang mga setting na ito ng walang laman o iba pa at mase-save ang mga ito. Kung hindi mo babaguhin ang mga setting, ang mga setting ay pananatilihin habang ang mga ito ay nasa server.",
    aiTranslating: "Translating...",
    aiSettings: "Mga Setting ng AI",
    aiGroqApiKey: "Groq API Key",
    aiGroqApiKeyInfo: "Opsyonal. Sariling Groq API key para sa mas magandang performance. Kumuha ng libreng key mula sa",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "Na-save ang AI API key",
    aiGroqApiKeyInvalid: "Invalid Groq API key",
    aiGroqApiKeyNotSet: "Hindi nakatakda (server default)",
    aiEnabled: "AI Enabled",
    aiEnabledYes: "Yes",
    aiEnabledNo: "No",
    aiRouteViaNetwork: "Route via network.corifeus.com",
    aiRoutingDirect: "Queries go directly to Groq using your own API key, bypassing network.corifeus.com.",
    aiRoutingNetwork: "AI queries are routed through network.corifeus.com. If you have your own free Groq API key, you can turn off this switch to route directly to Groq without network.corifeus.com.",
    ssh: {
      on: "Naka-on ang SSH",
      off: "Naka-off ang SSH",
      sshHost: "SSH Host",
      sshPort: "SSH port",
      sshUsername: "SSH username",
      sshPassword: "SSH password",
      sshPrivateKey: "SSH pribadong key"
    },
    isBuffer: opts => `[object ArrayBuffer] ay nangangahulugan na ang halaga ay binary data o ang halaga ay mas malaki kaysa ${opts.maxValueAsBuffer}`,
    streamValue: `Ang field ng stream at value ay isang oneliner. Hal.: field1 value1 "field 2" "value 2"`,
    streamTimestampId: `Ang ibig sabihin ng '*' ay awtomatikong nabuo o ang detalye bilang <millisecondsTime>-<sequenceNumber>`,
    unableToLoadKey: ({
      key
    }) => {
      return `Hindi ma-load ang key na ito: ${key}. Posible, ang susi ay tinanggal. Ang eksaktong error ay nasa console.`;
    },
    bigJson: "Ang JSON object na ito ay higit sa 10 kb, kaya siguraduhing alam mo kung ano ang iyong ginagawa, dahil ang ilang mga function ay maaaring mabagal na pag-render.",
    addNode: "Magdagdag ng node",
    validateJson: "I-validate ang JSON",
    reducedFunction: `Nabawasan ang pag-andar`,
    tooManyKeys: opts => {
      return `Para sa buong maximum na mga function na pinapayagan ang kabuuang mga key ay ${opts.maxLightKeysCount} bilangin. Ang database na ito ay may higit sa pinapayagang mga key sa kabuuan ${opts.count}. Ang pag-uuri ng susi at ang karagdagang impormasyon ng magarbong puno ay hindi pinagana. Ang paghahanap ay nangyayari lamang sa server sa halip na ang paghahanap ng kliyente.`;
    },
    redisCommandNotFound: "Walang nakitang Redis command match ...",
    treeKeyStore: `Ang pag-uuri (natural na paghahambing) ay isinasagawa sa kliyente aka browser, na nangangahulugang mayroon itong parusa para sa malalaking malalaking set, tulad ng higit sa 10k key, maaari itong magdagdag ng kaunting oras sa pag-render ng page. Walang key sorting sa Redis, ganito lang.`,
    socketIoTimeout: options => {
      return `Nag-time out ang Socket.IO para sa kahilingang ito (max ${options.timeout / 1000} segundo)...`;
    },
    resizerInfo: options => {
      return `Kaliwa o kanang panel minimum na lapad ay ${options.width}px`;
    },
    jsonViewNotParsable: "Ang value na ito ay hindi JSON parsable  ",
    ttlTitle: "Itakda ang TTL sa ilang segundo",
    passwordSecure: "Maaaring walang laman ang password, ngunit magpapakita pa rin ito ng mga character, isa itong tampok na panseguridad.",
    tlsWithoutCert: "Paganahin ang TLS nang walang karagdagang certificate",
    tlsRejectUnauthorized: "Tanggihan ang hindi awtorisadong sertipiko",
    tlsSecure: "Kung makakita ka ng configuration ng TLS na nagsisimula sa isang P3X o lahat ng mga setting ng TLS ay mukhang pareho, isa itong secure na feature. Upang baguhin ang mga setting, palitan lamang ang mga setting na ito ng walang laman o iba pa at mase-save ang mga ito. Kung hindi mo babaguhin ang mga setting ng TLS, pananatilihin ang mga setting habang nasa server ang mga ito.",
    treeSeparatorEmpty: "Kung ang tree separator ay walang laman, ang puno ay walang nested node, isang purong listahan lamang",
    treeSeparatorEmptyNote: "Walang nested node, puro listahan lang",
    welcomeConsole: "Maligayang pagdating sa Redis Console",
    welcomeConsoleInfo: "Cursor UP o DOWN history ay pinagana",
    redisListIndexInfo: "Walang laman para idagdag, -1 para i-prepend o i-save ito sa ipinapakitang posisyon.",
    console: "Console",
    connectiondAdd: "Magdagdag ng koneksyon",
    connectiondEdit: "I-edit ang koneksyon",
    connectiondView: "Tingnan ang koneksyon",
    connections: "Mga koneksyon",
    keysSort: {
      on: "Naka-on ang pag-uuri ng susi",
      off: "Pag-uuri ng susi"
    },
    cluster: {
      on: "Naka-on ang Cluster",
      off: "Naka-off ang Cluster"
    },
    sentinel: {
      on: "Naka-on ang Sentinel",
      off: "Naka-off ang Sentinel",
      name: "Sentinel pangalan"
    },
    readonly: {
      on: "Readonly on",
      off: "Readonly off"
    },
    theme: {
      light: "Liwanag",
      dark: "Madilim na negosyo",
      darkNeu: "Madilim",
      darkoBluo: "Darko bluo",
      enterprise: "Enterprise",
      redis: "Redis",
      matrix: "Matrix"
    },
    connected: opts => {
      return `Nakakonekta: ${opts.name}`;
    },
    tree: "Puno",
    askAuth: "Humingi ng pahintulot",
    keyboardShortcuts: "Keyboard Shortcuts",
    about: "About",
    supportedLanguages: "Supported Languages",
    version: "Version",
    redisVersion: "Redis Version",
    modules: "Mga Module",
    shortcutRefresh: "Refresh",
    shortcutSearch: "Focus Search",
    shortcutNewKey: "New Key",
    shortcutDisconnect: "Idiskonekta",
    themeAuto: "Auto (system)",
    shortcutCommandPalette: "Command Palette",
    commandPalette: "Command Palette",
    noResults: "No results",
    redisCommandsReference: "Mga Utos ng Redis",
    ungrouped: "Walang pangkat",
    grouped: "Grouped",
    connectFirst: "Kumonekta muna sa isang Redis server",
    searchLanguage: "Maghanap ng wika...",
    exportProgress: "Nag-e-export ng mga key...",
    importProgress: "Nag-i-import ng mga key...",
    importPreview: "Preview",
    importOverwrite: "I-overwrite",
    importSkip: "Laktawan",
    importConflict: "Kung ang key ay mayroon na:",
    noKeysToExport: "Walang key na ie-export",
    time: "Oras",
    type: "Uri",
    format: "Format",
    loading: "Naglo-load...",
    autoRefresh: "Auto",
    exportSearchHint: "Nag-e-export lamang ng mga key na tumutugma sa kasalukuyang paghahanap",
    importSearchHint: "Ang import ay nalalapat sa buong database, hindi lamang sa mga resulta ng paghahanap",
    deleteSearchHint: "Tinatanggal ang lahat ng key na tumutugma sa kasalukuyang paghahanap sa server",
    deletingSearchKeys: "Tinatanggal ang mga tumutugmang key...",
    importNoKeys: "Walang nahanap na key sa file",
  },
  status: {
    dataCopied: "Ang data ay nasa clipboard",
    exportDone: "Kumpleto na ang export",
    deletedSearchKeys: (opts) => `Natanggal ang ${opts.count} key`,
    indexCreated: "Index nilikha",
    indexDropped: "Index tinanggal",
    importDone: (opts) => `Kumpleto na ang import: ${opts.created} nilikha, ${opts.skipped} nilaktawan, ${opts.errors} mga error`,
    nodeRemoved: "Inalis ang node",
    keyIsNotExisting: "Maaaring natanggal o nag-expire ang key na ito.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "Walang susi";
      } else if (opts.keyCount === 1) {
        return "1 susi";
      } else {
        return `${opts.keyCount} mga susi`;
      }
    },
    treeExpandAll: "Palawakin ang lahat ng mga dahon ng puno. Maaaring magastos ang operasyong ito at maaaring magtagal...",
    noRedisKeys: "Walang mga susi sa database na ito.",
    redisConnected: "Matagumpay na nakakonekta ang Redis",
    reloadingDataInfo: "Nire-reload ang impormasyon ng data ng Redis",
    added: "Idinagdag",
    saved: "Na-update",
    cancelled: "Kinansela",
    deleted: "Tinanggal",
    savedRedis: "Ang data ng Redis ay nai-save",
    redisDisconnected: opts => {
      return `Nagkaroon ng error ang kasalukuyang koneksyon: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `Nakatakda ang db index sa ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `Ang tree key ay tinanggal (${opts.key}).`;
    },
    deletedKey: opts => {
      return `Ang susi ay tinanggal (${opts.key}).`;
    },
    renamedKey: "Ang susi na ito ay pinalitan ng pangalan",
    ttlChanged: "Ang TTL ng key na ito ay nabago",
    notInteger: "Ang input na ito ay hindi isang integer",
    persisted: "Ang susi na ito ay nananatili magpakailanman",
    set: "Ang susi ay itinakda/idinagdag"
  },
  code: {
    "delete-connection": "Ang koneksyon na ito ay tinanggal, kaya ikaw ay nadiskonekta sa Redis instance na ito.",
    "save-connection": "Binago ang koneksyon na ito, kaya nadiskonekta ka sa Redis instance na ito. Maaari kang muling kumonekta.",
    "readonly-connections": "Ang mga koneksyon na idinaragdag/i-save/tanggal ay readonly lamang!",
    "readonly-connection-mode": "Read only mode ang koneksyon na ito!",
    "list-out-of-bounds": "Ang listahan ng index na ito ay wala sa hangganan",
    "invalid-json-value": "Ang halaga ay hindi wasto JSON.",
    "http_auth_required": "Kinakailangan ang pahintulot: mangyaring patotohanan gamit ang HTTP Basic Auth at i-reload.",
    "auto-connection-failed": "Posible, naalis ang koneksyon at nabigo ang awtomatikong koneksyon, dahil dito.",
    invalid_console_command: "Hindi gumagana ang command na ito sa pamamagitan ng GUI."
  },
  form: {
    error: {
      required: "Kinakailangan",
      port: "Ang port ay nasa pagitan ng 1-65535",
      invalid: "Ang form ay hindi wasto"
    },
    connection: {
      label: {
        name: "Pangalan",
        group: "Group",
        host: "Hostname",
        port: "Port",
        password: "Password",
        username: "Username"
      }
    },
    treeSettings: {
      maxValueDisplay: "Max value na haba ng string ng display",
      maxValueDisplayInfo: "Kung nakatakda sa 0, ipakita ang buong halaga. Kung mas malaki sa 0, putulin ang haba na ito. Kung -1: para sa mga string, itago ang halaga hanggang sa i-edit; para sa iba pang mga uri, ipakita ang buong nilalaman.",
      maxKeys: "Ang max na bilang ng susi",
      maxKeysInfo: "Para hindi mag-crash ang GUI, nililimitahan namin ang max key count.",
      keyCount: () => {
        return `Bilang ng mga susi: ${p3xr.state.keysRaw.length}`;
      },
      label: {
        animation: "Gumamit ng animation",
        noAnimation: "Walang animation",
        jsonFormatTwoSpace: "I-format ang JSON na may 2 espasyo",
        jsonFormatFourSpace: "I-format ang JSON na may 4 na espasyo",
        formName: "Mga setting ng Redis",
        searchModeClient: "Mode ng paghahanap ng kliyente",
        searchModeServer: "Mode ng paghahanap ng server",
        searchModeStartsWith: "Ang paghahanap ay nagsisimula sa mode",
        searchModeIncludes: "Kasama sa paghahanap ang mode"
      },
      field: {
        treeSeparator: "Tagahiwalay ng puno",
        treeSeparatorSelector: "Tagapili ng tree separator",
        page: "Bilang ng paging ng puno",
        keyPageCount: "Bilang ng pangunahing paging",
        keysSort: "Pagbukud-bukurin ang mga susi",
        searchMode: "Mode ng paghahanap",
        searchModeStartsWith: "Nagsisimula ang paghahanap sa / kasama"
      },
      error: {
        keyPageCount: "Ang pangunahing bilang ng pahina ay dapat na isang integer sa pagitan ng 5 - 100",
        page: "Ang bilang ng pahina ay dapat na isang integer sa pagitan ng 10 - 5000",
        maxValueDisplay: "Ang maximum na halaga ng display ay dapat na isang integer sa pagitan ng -1 at 32768",
        maxKeys: "Ang maximum na halaga ng bilang ng susi ay dapat na isang integer sa pagitan ng 100 at 100000"
      }
    },
    key: {
      label: {
        formName: {
          add: "Magdagdag ng bagong Redis key",
          edit: "I-edit ang Redis key",
          append: "Idagdag sa kasalukuyang Redis key"
        }
      },
      field: {
        streamTimestamp: "Timestamp",
        key: "Susi",
        type: "Uri",
        index: "Index",
        hashKey: "Hash key",
        score: "Puntos",
        value: "Halaga"
      },
      error: {
        streamTimestamp: "Kinakailangan ang timestamp, alinman sa Redis na format o bilang *",
        key: "Ang susi ay, hindi bababa sa, isang karakter",
        hashKey: "Ang hash table key ay hindi bababa sa isang character",
        score: "Kinakailangan ang pinagsunod-sunod na marka",
        value: "Kinakailangan ang halaga"
      }
    },
    main: {
      label: {
        database: "DB"
      }
    }
  },
  page: {
    search: {
      title: "Paghahanap",
      index: "Index",
      query: "Query",
      results: "Mga resulta",
      noIndex: "Walang nahanap na index",
      createIndex: "Lumikha ng index",
      dropIndex: "Tanggalin ang index",
      indexInfo: "Info ng index",
      indexName: "Pangalan ng index",
      prefix: "Key prefix (opsyonal)",
      fieldName: "Pangalan ng field",
    },
    monitor: {
      title: "Monitoring",
      memory: "Memorya",
      opsPerSec: "Ops/seg",
      clients: "Mga kliyente",
      blocked: "Na-block",
      hitsMisses: "Hit Rate",
      networkIo: "Network I/O",
      slowLog: "Mabagal na log",
      totalCommands: "Kabuuan",
      expired: "Nag-expire",
      evicted: "Na-evict",
      clientList: "Listahan ng kliyente",
      topKeys: "Pinakamalaking key sa memorya",
      killClient: "Patayin ang kliyente",
      clientKilled: "Napatay ang kliyente",
      confirmKillClient: "Sigurado ka bang ihinto ang client na ito?",
      noKeys: "Walang key",
      rss: "RSS",
      peak: "Pinakamataas",
      fragmentation: "Fragmentation",
      hitsAndMisses: "Hits / Misses",
      noClients: "Walang client",
    },
    analysis: {
      title: "Pagsusuri ng Memory",
      runAnalysis: "Patakbuhin ang Pagsusuri",
      running: "Sinusuri...",
      typeDistribution: "Distribusyon ng Uri",
      prefixMemory: "Memory ayon sa Prefix",
      topKeysByMemory: "Pinakamalaking Key ayon sa Memory",
      expirationOverview: "Pag-expire ng Key",
      memoryBreakdown: "Paghahati ng Memory",
      keysScanned: "Na-scan na Key",
      totalMemory: "Kabuuang Memory",
      rssMemory: "RSS Memory",
      peakMemory: "Pinakamataas na Memory",
      luaMemory: "Lua Memory",
      overheadMemory: "Overhead",
      datasetMemory: "Dataset",
      fragmentation: "Fragmentation",
      allocator: "Allocator",
      withTTL: "May TTL",
      persistent: "Permanente",
      avgTTL: "Average na TTL",
      prefix: "Prefix",
      keyCount: "Bilang ng Key",
      memoryUsage: "Paggamit ng Memory",
      noPrefix: "(walang prefix)",
      topN: "Top N",
      maxScanKeys: "Maks. na-scan na Key",
      type: "Uri",
      noData: "Walang data. I-click ang Patakbuhin ang Pagsusuri para magsimula.",
      exportAll: "I-export Lahat",
    },

    overview: {
      noConnected: "Walang koneksyon sa Redis.",
      overviewClients: "Ilista ang konektado sa pamamagitan ng bilang ng mga kliyente",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "1 kliyente";
        }
        return `${opt.length} mga kliyente`;
      }
    },
    key: {
      label: {
        key: "Susi",
        encoding: "Encoding",
        length: "Sukat",
        ttl: "TTL",
        ttlTitle: "Oras Para Mabuhay",
        type: "Uri",
        ttlNotExpire: "hindi mawawalan ng bisa",
        lengthString: "byte",
        lengthItem: "mga bagay",
        actions: "Mga aksyon"
      },
      list: {
        table: {
          index: "Index",
          value: "Halaga"
        }
      },
      hash: {
        table: {
          hashkey: "Hashkey",
          value: "Halaga"
        }
      },
      set: {
        table: {
          value: "Miyembro"
        }
      },
      zset: {
        table: {
          value: "Miyembro",
          score: "Puntos"
        }
      },
      stream: {
        table: {
          timestamp: "Timestamp ID",
          field: "Patlang",
          value: "Halaga"
        }
      },
      timeseries: {
        chart: "Tsart",
        info: "Impormasyon",
        addPoint: "Magdagdag ng Data Point",
        from: "Mula (ms o -)",
        to: "Hanggang (ms o +)",
        aggregation: "Pagsasama-sama",
        timeBucket: "Timba (ms)",
        none: "Wala",
        dataPoints: "mga data point",
        labels: "Mga Label",
        rules: "Mga Panuntunan",
        retention: "Pagpapanatili",
        timestamp: "Timestamp",
        value: "Halaga",
        retentionHint: "0 = walang expiry, o milliseconds",
        duplicatePolicy: "Patakaran sa duplicate",
        labelsHint: "key1 value1 key2 value2",
        timestampHint: "'*' ay nangangahulugang auto generated, o milliseconds timestamp",
        editAllHint: "Isang data point bawat linya: timestamp halaga (timestamp ay maaaring * para sa auto)",
        autoSpread: "Auto * spread interval",
        formula: "Formula",
        formulaLinear: "Linear",
        formulaRandom: "Random",
        formulaSawtooth: "Sawtooth",
        formulaPoints: "Mga Punto",
        formulaAmplitude: "Amplitude",
        formulaOffset: "Offset",
        generate: "I-generate",
        exportChart: "I-export ang PNG",
        overlay: "I-overlay ang mga susi",
        overlayHint: "Mga susi na pinaghihiwalay ng kuwit",
        mrangeFilter: "Filter ng label",
        bulkMode: "Bulk generate",
        mrangeHint: "hal. sensor=temp"
      }
    },
    treeControls: {
      settings: "Mga setting ng puno",
      expandAll: "Palawakin lahat",
      collapseAll: "I-collapse lahat",
      level: "Antas",
      search: {
        search: "Maghanap sa mga susi",
        clear: "I-clear ang kasalukuyang paghahanap upang itakdang walang laman",
        placeholderClient: "Maghanap sa panig ng kliyente",
        placeholderServer: "Maghanap sa gilid ng server",
        info: "Ang ibig sabihin ng paghahanap sa panig ng kliyente, na tumutugma ito sa teksto sa input ng paghahanap. Ang ibig sabihin ng paghahanap sa gilid ng server, iyon ay tulad ng paghahanap sa mga pattern ng key bilang *{search-text}*. Para sa malalaking hanay ng paghahanap, mas mainam na gumamit ng paghahanap sa gilid ng server. Para sa mas maliliit na hanay ng paghahanap, mas mainam na gamitin ang client side search mode." + ` Kung ang bilang ng mga susi ay tapos na ${p3xr.settings.maxLightKeysCount}, maaari ka lamang maghanap sa gilid ng server.`,
        largeSetInfo: "Sa isang malaking hanay, hindi pinagana ang paghahanap sa panig ng kliyente. kaya sa ngayon tanging server side searching lang ang posible.",
        infoDetails: "Upang malaman kung paano gumagana ang paghahanap, pakitingnan ang mga setting"
      },
      pager: {
        next: "Susunod",
        prev: "Nakaraang",
        first: "Una",
        last: "Huli"
      }
    }
  },
  time: {
    type: "Uri",
    format: "Format",
    loading: "Naglo-load...",
    years: "taon",
    months: "buwan",
    days: "araw",
    year: "taon",
    month: "buwan",
    day: "araw",
    second: "segundo",
    seconds: "mga segundo",
    minute: "minuto",
    minutes: "mga minuto",
    hour: "oras",
    hours: "mga oras"
  },
  redisTypes: {
    string: "String",
    list: "List",
    hash: "Hash table",
    set: "Set",
    zset: "Sorted set - zset",
    stream: "Stream",
    json: "JSON",
    timeseries: "Time Series"
  }
};
module.exports = strings;
