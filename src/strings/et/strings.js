const strings = {
  error: {
    server_error: "Serveri viga, proovige uuesti"
  },
  title: {
    donate: "Anneta",
    jsonRecursive: "Kõigi lehtede laiendamine",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "Saate valida ühenduse loomiseks Redis ühenduse vasakpoolsest alumisest menüüst.",
    statistics: "Statistika",
    error: "Viga",
    connectingRedis: "Ühendamine seadmega Redis ...",
    socketioConnectError: "Socket.IO viga",
    db: "DB",
    server: "Server",
    clients: "Kliendid",
    memory: "Mälu",
    persistence: "Püsivus",
    stats: "Statistika",
    replication: "Replikatsioon",
    cpu: "CPU",
    cluster: "Cluster",
    modules: "Moodulid",
    errorstats: "Vigade statistika",
    commandstats: "Käskude statistika",
    latencystats: "Viivituse statistika",
    keysizes: "Võtmesuurused",
    threads: "Lõimed",
  },
  confirm: {
    dropIndex: "Kas olete kindel, et soovite selle indeksi kustutada?",
    uploadBuffer: "Kas olete kindel, et laadite need binaarandmed üles?",
    uploadBufferDone: "Binaarandmed laaditakse üles",
    uploadBufferDoneAndSave: "Binaarandmed laaditakse üles ja salvestatakse serverisse",
    title: "Kinnita",
    alert: "Hoiatus",
    info: "Info",
    deleteListItem: "Kas olete kindel, et kustutate selle loendiüksuse?",
    deleteHashKey: "Kas olete kindel, et kustutate selle räsivõtme üksuse?",
    deleteStreamTimestamp: "Kas olete kindel, et kustutate selle voo ajatempli?",
    deleteSetMember: "Kas olete kindel, et kustutate selle komplekti liikme?",
    deleteZSetMember: "Kas olete kindel, et kustutate selle sorteeritud komplekti liikme?",
    deleteConnection: "Kinnita",
    deleteConnectionText: "Kas olete kindel, et kustutate selle Redis ühenduse?",
    deleteNode: "Kas olete kindel, et kustutate selle Redis sõlme?",
    delete: "Kustutada?",
    deleteAllKeys: opts => {
      return `Kustuta see puu ja kõik selle võtmed (${opts.key})?`;
    },
    deleteSearchKeys: opts => {
      return `Kas olete kindel, et soovite kustutada kõik mustrile "${opts.pattern}" vastavad võtmed? Leiti ${opts.count} võtit.`;
    },
    socketioConnectError: "Socket.IO ei saa serveriga ühendust, saate uuesti laadida ja proovida ühenduse tõrke ise lahendada, klient ei tea, kuidas seda ise lahendada.",
    socketioAuthRequired: "Nõutav on Socket.IO autoriseerimine. Autentige koodiga HTTP Basic Auth (kasutajanimi/parool) ja laadige uuesti.",
    deleteKey: "Kas olete kindel, et kustutate selle võtme?",
    rename: {
      title: "Kas olete kindel, et nimetate selle võtme ümber?",
      textContent: "See toiming nimetab võtme jäädavalt ümber.",
      placeholder: "Võti Redis (nõutav)"
    },
    ttl: {
      title: "Kas olete kindel, et soovite selle võtme TTL muuta?",
      textContent: "TTL muutmine värskendab selle võtme elamisaega. Selle võtme igaveseks säilitamiseks jätke tühjaks.",
      placeholder: "Võtme Redis TTL (täisarv või tühi)",
      placeholderPlaceholder: "Tühi tähendab, et see püsib igavesti; muul juhul sisestage täisarv.",
      convertTextToTime: "Teisendage tekst kellaajaks",
      convertTextToTimePlaceholder: "Nt. 1d on 86400"
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
    copy: "Kopeeri",
    downloadBuffer: "Laadige alla binaarfail",
    setBuffer: "Laadige üles binaarfail",
    exportKeys: "Ekspordi võtmed",
    exportAllKeys: (opts) => `Ekspordi kõik ${opts.count} võtit`,
    exportSearchResults: (opts) => `Ekspordi ${opts.count} tulemust`,
    deleteAllKeysMenu: (opts) => `Kustuta kõik ${opts.count}`,
    importKeys: "Impordi võtmed",
    deleteSearchKeys: (opts) => `Kustuta ${opts.count} vastavat võtit`,
    saveWithFormatJson: "Salvestage vorminguga",
    formatJson: "Vorming Json",
    wrap: "Mähi",
    unwrap: "Lahti pakkida",
    downloadJson: "Laadige alla JSON",
    pubsubMonitor: "PubSub",
    pulse: "Pulse",
    profiler: "Profiler",
    memoryAnalysis: "Analysis",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "Keel",
    ok: "OK",
    addKey: "Lisa sellele võtmele",
    addKeyRoot: "Lisa juurvõti",
    reloadKey: "Laadi võti uuesti",
    reload: "Laadi uuesti",
    close: "Sule",
    commands: "Käsud",
    view: "Vaade",
    statistics: "Statistika",
    refresh: "Värskenda",
    pause: "Peata",
    resume: "Jätka",
    clear: "Selge",
    rename: "Nimeta ümber",
    main: "Andmebaas",
    cancel: "Tühista",
    theme: "Teema",
    github: "GitHub",
    githubRepo: "Hoidla",
    githubRelease: "Väljaanded",
    githubChangelog: "Muudatuste logi",
    info: "Info",
    settings: "Seaded",
    connect: "Ühendage",
    disconnect: "Katkesta ühendus",
    overview: "Ülevaade",
    console: "konsool",
    noConnections: "Ühendusi pole, lisage ühendus seadete menüüs.",
    noConnectionsInSettings: "Ühendusi pole, võite ülal lisada UUE ÜHENDUSE.",
    connectionAdd: "Uus ühendus",
    addGroup: "Lisa rühm",
    extend: "Pikendada",
    collapse: "Ahenda",
    add: "Lisa",
    edit: "Muuda",
    save: "Salvesta",
    ttl: "Komplekt TTL",
    delete: "Kustuta",
    remove: "Eemalda",
    sure: "Muidugi",
    testConnection: "Katsetage ühendust",
    getKey: "Võtme Redis ja seotud andmete laadimine ...",
    jsonViewShow: "Ekraan JSON",
    jsonViewEditor: "Redigeerige JSON",
    quickConsole: "Kiirkonsool",
  },
  label: {
    id: {
      nodeId: "Sõlme ID",
      id: "Ühenduse ID",
      info: "Kui te ei soovi muuta atribuute: sshPassword, sshPrivateKey, password, tlsCrt, tlsKey, tlsCa, sisestage atribuutide väärtuste muutmiseks nendesse atribuutidesse ühenduse ID. Kui soovid sõlme paroolis sama loogikat, siis sisesta sõlme paroolisse sõlme ID."
    },
    secureFeature: "Kui näete väärtust, mis algab P3X-iga ja näeb välja sama, on see turvaline funktsioon. Seadete muutmiseks lihtsalt asenda need sätted tühjade või millegi muuga ja need salvestatakse. Kui te sätteid ei muuda, säilitatakse sätted serveris nii, nagu need on.",
    aiTranslating: "Translating...",
    aiSettings: "AI seaded",
    aiGroqApiKey: "Groq API võti",
    aiGroqApiKeyInfo: "Valikuline. Oma Groq API võti parema jõudluse jaoks. Hankige tasuta võti",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "AI API võti salvestatud",
    aiGroqApiKeyInvalid: "Invalid Groq API key",
    aiGroqApiKeyNotSet: "Pole seatud (serveri vaikeväärtus)",
    aiEnabled: "AI Enabled",
    aiEnabledYes: "Yes",
    aiEnabledNo: "No",
    aiRouteViaNetwork: "Route via network.corifeus.com",
    aiRoutingDirect: "Queries go directly to Groq using your own API key, bypassing network.corifeus.com.",
    aiRoutingNetwork: "AI queries are routed through network.corifeus.com. If you have your own free Groq API key, you can turn off this switch to route directly to Groq without network.corifeus.com.",
    ssh: {
      on: "SSH sisse lülitatud",
      off: "SSH väljas",
      sshHost: "SSH Host",
      sshPort: "Port SSH",
      sshUsername: "SSH kasutajanimi",
      sshPassword: "SSH parool",
      sshPrivateKey: "SSH privaatvõti"
    },
    isBuffer: opts => `[object ArrayBuffer] tähendab, et väärtus on binaarandmed või väärtus on suurem kui ${opts.maxValueAsBuffer}`,
    streamValue: `Voo väli ja väärtus on üksus. Nt: väli1 väärtus1 "väli 2" "väärtus 2"`,
    streamTimestampId: `„*” tähendab automaatselt genereeritud või spetsifikatsiooni kujul <millisecondsTime>-<sequenceNumber>`,
    unableToLoadKey: ({
      key
    }) => {
      return `Seda võtit ei saa laadida: ${key}. Võimalik, võti kustutati. Täpne viga on konsoolis.`;
    },
    bigJson: "See JSON objekt on üle 10 kb, seega veenduge, et teate, mida teete, sest mõned funktsioonid võivad olla aeglased.",
    addNode: "Lisa sõlm",
    validateJson: "Kinnitage JSON",
    reducedFunction: `Vähendatud funktsionaalsus`,
    tooManyKeys: opts => {
      return `Täielike funktsioonide jaoks on lubatud klahvide kogusumma ${opts.maxLightKeysCount} loendama. Selles andmebaasis on kokku üle lubatud võtmete ${opts.count}. Võtmete sortimine ja täiendav väljamõeldud puuteave on keelatud. Otsing toimub kliendiotsingu asemel ainult serveris.`;
    },
    redisCommandNotFound: "Ühtegi vastet Redis ei leitud ...",
    treeKeyStore: `Sorteerimine (loomulik võrdlus) teostatakse kliendil ehk brauseris, mis tähendab, et suurte suurte komplektide puhul, nagu üle 10 000 võtme, on see trahv, mis võib lehe renderdamisele veidi aega lisada. Redis-s võtmete sorteerimine puudub, ainult niimoodi.`,
    socketIoTimeout: options => {
      return `Socket.IO aegus selle taotluse jaoks (max ${options.timeout / 1000} sekundit)...`;
    },
    resizerInfo: options => {
      return `Vasaku või parema paneeli minimaalne laius on ${options.width}px`;
    },
    jsonViewNotParsable: "See väärtus ei ole parseeritav JSON  ",
    ttlTitle: "Seadistage TTL sekunditega",
    passwordSecure: "Parool võib olla tühi, kuid see näitab siiski märke, see on turvafunktsioon.",
    tlsWithoutCert: "Luba TLS ilma täiendava sertifikaadita",
    tlsRejectUnauthorized: "Keeldu volitamata sertifikaadist",
    tlsSecure: "Kui näete TLS-i konfiguratsiooni, mis algab P3X-iga või kõik TLS-i sätted näevad välja ühesugused, on see turvaline funktsioon. Seadete muutmiseks lihtsalt asenda need sätted tühjade või millegi muuga ja need salvestatakse. Kui te TLS-i sätteid ei muuda, säilitatakse sätted serveris nii, nagu need on.",
    treeSeparatorEmpty: "Kui puu eraldaja on tühi, pole puul pesastatud sõlme, vaid puhas loend",
    treeSeparatorEmptyNote: "Pole pesastatud sõlme, vaid puhas loend",
    welcomeConsole: "Tere tulemast Redis konsooli",
    welcomeConsoleInfo: "Kursori UP või DOWN ajalugu on lubatud",
    redisListIndexInfo: "Tühjendage lisamiseks, -1 lisamiseks või salvestamiseks näidatud kohta.",
    console: "konsool",
    connectiondAdd: "Lisage ühendus",
    connectiondEdit: "Redigeeri ühendust",
    connectiondView: "Vaata ühendust",
    connections: "Ühendused",
    keysSort: {
      on: "Võtmete sorteerimine sisse",
      off: "Võtmete sorteerimine ära"
    },
    cluster: {
      on: "Cluster sisse lülitatud",
      off: "Cluster väljas"
    },
    sentinel: {
      on: "Sentinel sisse lülitatud",
      off: "Sentinel väljas",
      name: "Sentinel nimi"
    },
    readonly: {
      on: "Ainult lugemiseks edasi",
      off: "Readonly off"
    },
    theme: {
      light: "Valgus",
      dark: "Tume ettevõtmine",
      darkNeu: "Tume",
      darkoBluo: "Tume bluo",
      enterprise: "Ettevõtlus",
      redis: "Redis",
      matrix: "Maatriks"
    },
    connected: opts => {
      return `Ühendatud: ${opts.name}`;
    },
    tree: "Puu",
    askAuth: "Küsi luba",
    keyboardShortcuts: "Keyboard Shortcuts",
    about: "About",
    supportedLanguages: "Supported Languages",
    version: "Version",
    redisVersion: "Redis Version",
    modules: "Moodulid",
    shortcutRefresh: "Refresh",
    shortcutSearch: "Focus Search",
    shortcutNewKey: "New Key",
    shortcutDisconnect: "Katkesta ühendus",
    themeAuto: "Auto (system)",
    shortcutCommandPalette: "Command Palette",
    commandPalette: "Command Palette",
    noResults: "No results",
    redisCommandsReference: "Redis Käsud",
    ungrouped: "Rühmitamata",
    grouped: "Grouped",
    connectFirst: "Ühenduge esmalt Redis serveriga",
    searchLanguage: "Otsi keelt...",
    exportProgress: "Võtmete eksportimine...",
    importProgress: "Võtmete importimine...",
    importPreview: "Eelvaade",
    importOverwrite: "Kirjuta üle",
    importSkip: "Jäta vahele",
    importConflict: "Kui võti on juba olemas:",
    noKeysToExport: "Pole võtmeid eksportimiseks",
    time: "Aeg",
    type: "Tüüp",
    format: "Formaat",
    loading: "Laadimine...",
    autoRefresh: "Auto",
    exportSearchHint: "Eksporditakse ainult praegusele otsingule vastavad võtmed",
    importSearchHint: "Import kehtib kogu andmebaasile, mitte ainult otsingutulemustele",
    deleteSearchHint: "Kustutab kõik serveris praegusele otsingule vastavad võtmed",
    deletingSearchKeys: "Vastavate võtmete kustutamine...",
    importNoKeys: "Failis ei leitud võtmeid",
  },
  status: {
    dataCopied: "Andmed on lõikepuhvril",
    exportDone: "Eksport lõpetatud",
    deletedSearchKeys: (opts) => `Kustutatud ${opts.count} võtit`,
    indexCreated: "Indeks loodud",
    indexDropped: "Indeks kustutatud",
    importDone: (opts) => `Import lõpetatud: ${opts.created} loodud, ${opts.skipped} vahele jäetud, ${opts.errors} viga`,
    nodeRemoved: "Sõlm eemaldatud",
    keyIsNotExisting: "See võti võis olla kustutatud või aegunud.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "Võti puudub";
      } else if (opts.keyCount === 1) {
        return "1 võti";
      } else {
        return `${opts.keyCount} võtmed`;
      }
    },
    treeExpandAll: "Laiendage kõiki puulehti. See operatsioon võib olla kulukas ja võib võtta aega...",
    noRedisKeys: "Selles andmebaasis pole võtmeid.",
    redisConnected: "Redis ühendamine õnnestus",
    reloadingDataInfo: "Redis andmete uuesti laadimine",
    added: "Lisatud",
    saved: "Uuendatud",
    cancelled: "Tühistatud",
    deleted: "Kustutatud",
    savedRedis: "Redis andmed salvestatakse",
    redisDisconnected: opts => {
      return `Praegusel ühendusel ilmnes viga: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `db indeks on seatud väärtusele ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `Puu võti kustutati (${opts.key}).`;
    },
    deletedKey: opts => {
      return `võti kustutati (${opts.key}).`;
    },
    renamedKey: "See võti on ümber nimetatud",
    ttlChanged: "Selle võtme TTL on muudetud",
    notInteger: "See sisend ei ole täisarv",
    persisted: "See võti püsib igavesti",
    set: "Võti on seatud/lisatud"
  },
  code: {
    "delete-connection": "See ühendus kustutati, nii et olete selle Redis eksemplariga katkestatud.",
    "save-connection": "Seda ühendust muudeti, nii et olete selle Redis eksemplariga katkestatud. Võite uuesti ühendada.",
    "readonly-connections": "Ühenduste lisamine/salvestamine/kustutamine on kirjutuskaitstud!",
    "readonly-connection-mode": "See ühendus on kirjutuskaitstud režiimis!",
    "list-out-of-bounds": "See loendi register on väljaspool piire",
    "invalid-json-value": "Väärtus ei kehti JSON.",
    "http_auth_required": "Nõutav autoriseerimine: autentige HTTP Basic Auth ja laadige uuesti.",
    "auto-connection-failed": "Võimalik, et ühendus eemaldati ja automaatne ühendus ebaõnnestus.",
    invalid_console_command: "See käsk ei tööta GUI kaudu."
  },
  form: {
    error: {
      required: "Nõutav",
      port: "Sadam on vahemikus 1-65535",
      invalid: "Vorm on kehtetu"
    },
    connection: {
      label: {
        name: "Nimi",
        group: "Group",
        host: "Hostinimi",
        port: "Port",
        password: "Parool",
        username: "Kasutajanimi"
      }
    },
    treeSettings: {
      maxValueDisplay: "Maksimaalse väärtuse kuvatava stringi pikkus",
      maxValueDisplayInfo: "Kui see on 0, kuvage täisväärtusi. Kui see on suurem kui 0, kärbige selle pikkuseni. Kui -1: stringide puhul peida väärtus kuni muutmiseni; muude tüüpide puhul kuva kogu sisu.",
      maxKeys: "Maksimaalne võtmete arv",
      maxKeysInfo: "Selleks, et GUI ei jookseks kokku, piirame maksimaalset võtmete arvu.",
      keyCount: (opts) => {
        return `Võtmete arv: ${opts?.keyCount ?? 0}`;
      },
      label: {
        animation: "Kasutage animatsiooni",
        noAnimation: "Animatsiooni pole",
        jsonFormatTwoSpace: "Vorming JSON 2 tühikuga",
        jsonFormatFourSpace: "Vorming JSON 4 tühikuga",
        formName: "Redis seaded",
        searchModeClient: "Kliendiotsingu režiim",
        searchModeServer: "Serveri otsingurežiim",
        searchModeStartsWith: "Otsimine algab režiimiga",
        searchModeIncludes: "Otsing sisaldab režiimi"
      },
      field: {
        treeSeparator: "Puude eraldaja",
        treeSeparatorSelector: "Puude eraldaja valija",
        page: "Puu otsimise arv",
        keyPageCount: "Võtme otsimise arv",
        keysSort: "Sorteeri võtmed",
        searchMode: "Otsingurežiim",
        searchModeStartsWith: "Otsing algab tähega / hõlmab"
      },
      error: {
        keyPageCount: "Võtmelehtede arv peab olema täisarv vahemikus 5–100",
        page: "Lehtede arv peab olema täisarv vahemikus 10–5000",
        maxValueDisplay: "Maksimaalne kuvatav väärtus peab olema täisarv vahemikus –1 kuni 32768",
        maxKeys: "Võtmete maksimaalne loendusväärtus peab olema täisarv vahemikus 100 kuni 100 000"
      }
    },
    key: {
      label: {
        formName: {
          add: "Lisage uus võti Redis",
          edit: "Redigeerige võtit Redis",
          append: "Lisage olemasolevale võtmele Redis"
        }
      },
      field: {
        streamTimestamp: "Ajatempel",
        key: "Võti",
        type: "Tüüp",
        index: "Indeks",
        hashKey: "Räsivõti",
        score: "Skoor",
        value: "Väärtus"
      },
      error: {
        streamTimestamp: "Ajatempel on nõutav kas vormingus Redis või kujul *",
        key: "Võti on vähemalt üks märk",
        hashKey: "Räsitabeli võti koosneb vähemalt ühest tähemärgist",
        score: "Nõutav on sorteeritud komplekti punktisumma",
        value: "Väärtus on nõutav"
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
      title: "Otsing",
      index: "Indeks",
      query: "Päring",
      results: "Tulemused",
      noIndex: "Indekseid ei leitud",
      createIndex: "Loo indeks",
      dropIndex: "Kustuta indeks",
      indexInfo: "Indeksi info",
      indexName: "Indeksi nimi",
      prefix: "Võtme prefiks (valikuline)",
      fieldName: "Välja nimi",
    },
    monitor: {
      title: "Seire",
      memory: "Mälu",
      opsPerSec: "Ops/sek",
      clients: "Kliendid",
      blocked: "Blokeeritud",
      hitsMisses: "Tabamuste määr",
      networkIo: "Võrgu I/O",
      slowLog: "Aeglane logi",
      totalCommands: "Kokku",
      expired: "Aegunud",
      evicted: "Välja tõstetud",
      clientList: "Klientide loend",
      topKeys: "Suurimad võtmed mälu järgi",
      killClient: "Tapa klient",
      clientKilled: "Klient tapetud",
      confirmKillClient: "Kas olete kindel, et soovite selle kliendi lõpetada?",
      noKeys: "Võtmeid pole",
      rss: "RSS",
      peak: "Tipp",
      fragmentation: "Fragmenteerumine",
      hitsAndMisses: "Tabamused / Möödapanekud",
      noClients: "Kliente pole",
    },
    analysis: {
      title: "Mälu analüüs",
      runAnalysis: "Käivita analüüs",
      running: "Analüüsimine...",
      typeDistribution: "Tüübi jaotus",
      prefixMemory: "Mälu prefiksi järgi",
      topKeysByMemory: "Suurimad võtmed mälu järgi",
      expirationOverview: "Võtmete aegumine",
      memoryBreakdown: "Mälu jaotus",
      keysScanned: "Skannitud võtmed",
      totalMemory: "Kogumälu",
      rssMemory: "RSS mälu",
      peakMemory: "Tippmälu",
      luaMemory: "Lua mälu",
      overheadMemory: "Üldkulu",
      datasetMemory: "Andmestik",
      fragmentation: "Fragmenteerumine",
      allocator: "Eraldaja",
      withTTL: "TTL-iga",
      persistent: "Püsivad",
      avgTTL: "Keskmine TTL",
      prefix: "Prefiks",
      keyCount: "Võtmete arv",
      memoryUsage: "Mälukasutus",
      noPrefix: "(prefiksita)",
      topN: "Top N",
      maxScanKeys: "Maks. skannitud võtmed",
      type: "Tüüp",
      noData: "Andmed puuduvad. Klõpsake Käivita analüüs alustamiseks.",
      exportAll: "Ekspordi kõik",
    },

    overview: {
      noConnected: "Seadmega Redis pole ühendust.",
      overviewClients: "Loetlege ühendatud klientide arvu järgi",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "1 klient";
        }
        return `${opt.length} kliendid`;
      }
    },
    key: {
      label: {
        key: "Võti",
        encoding: "Kodeerimine",
        compression: "Tihendamine",
        aiRateLimited: "AI päringute limiit on saavutatud. Proovige hiljem uuesti või kasutage oma Groq API võtit Seadetes.",
        aiError: "AI päring ebaõnnestus",
        length: "Suurus",
        ttl: "TTL",
        ttlTitle: "Aeg Elada",
        type: "Tüüp",
        ttlNotExpire: "ei aegu",
        lengthString: "baiti",
        lengthItem: "esemed",
        actions: "Tegevused"
      },
      list: {
        table: {
          index: "Indeks",
          value: "Väärtus"
        }
      },
      hash: {
        table: {
          hashkey: "Hashkey",
          value: "Väärtus"
        }
      },
      set: {
        table: {
          value: "liige"
        }
      },
      zset: {
        table: {
          value: "liige",
          score: "Skoor"
        }
      },
      stream: {
        table: {
          timestamp: "Ajatempli ID",
          field: "Väli",
          value: "Väärtus"
        }
      },
      timeseries: {
        chart: "Diagramm",
        info: "Teave",
        addPoint: "Lisa andmepunkt",
        from: "Alates (ms või -)",
        to: "Kuni (ms või +)",
        aggregation: "Agregatsioon",
        timeBucket: "Ämber (ms)",
        none: "Puudub",
        dataPoints: "andmepunktid",
        labels: "Sildid",
        rules: "Reeglid",
        retention: "Säilitamine",
        timestamp: "Ajatempel",
        value: "Väärtus",
        retentionHint: "0 = ei aegu, või millisekundid",
        duplicatePolicy: "Duplikaatide poliitika",
        labelsHint: "key1 value1 key2 value2",
        timestampHint: "'*' tähendab automaatselt genereeritud, või millisekundite ajatempel",
        editAllHint: "Üks andmepunkt rea kohta: ajatempel väärtus (ajatempel võib olla * automaatse jaoks)",
        autoSpread: "Automaatne * leviku intervall",
        formula: "Valem",
        formulaLinear: "Lineaarne",
        formulaRandom: "Juhuslik",
        formulaSawtooth: "Saehamba",
        formulaPoints: "Punktid",
        formulaAmplitude: "Amplituud",
        formulaOffset: "Nihe",
        generate: "Genereeri",
        exportChart: "Ekspordi PNG",
        overlay: "Kattuvad võtmed",
        overlayHint: "Komadega eraldatud võtmed",
        mrangeFilter: "Siltide filter",
        bulkMode: "Hulgi genereerimine",
        mrangeHint: "nt. sensor=temp"
      }
    },
    treeControls: {
      settings: "Puu seaded",
      expandAll: "Laienda kõik",
      collapseAll: "Ahenda kõik",
      level: "Tase",
      search: {
        search: "Otsige klahvidest",
        clear: "Tühjendamiseks tühjenda praegune otsing",
        placeholderClient: "Otsige kliendi poolelt",
        placeholderServer: "Otsi serveri poolelt",
        info: (opts) => "Kliendipoolne otsing tähendab, et see vastab otsingusisendis olevale tekstile. Serveripoolne otsing tähendab, et see on nagu otsing võtmemustrites *{otsingutekst}*. Suurte otsingukomplektide puhul on parem kasutada serveripoolset otsingut. Väiksemate otsingukomplektide jaoks on parem kasutada kliendipoolset otsingurežiimi." + ` Kui klahvide arv on lõppenud ${opts?.maxLightKeysCount ?? 110000}, saate otsida ainult serveri poolel.`,
        largeSetInfo: "Suures komplektis on kliendipoolne otsing keelatud. nii et praegu on võimalik ainult serveripoolne otsing.",
        infoDetails: "Et teada saada, kuidas otsing töötab, vaadake palun seadeid"
      },
      pager: {
        next: "Edasi",
        prev: "Eelmine",
        first: "Esiteks",
        last: "Viimane"
      }
    }
  },
  time: {
    type: "Tüüp",
    format: "Formaat",
    loading: "Laadimine...",
    years: "aastat",
    months: "kuud",
    days: "päevadel",
    year: "aastal",
    month: "kuu",
    day: "päeval",
    second: "sekund",
    seconds: "sekundit",
    minute: "minut",
    minutes: "minutit",
    hour: "tund",
    hours: "tundi"
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
