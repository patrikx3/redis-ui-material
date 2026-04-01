const strings = {
  error: {
    cleared_license: "Puhastatud litsents",
    invalid_license: "Kehtetu litsents",
    license_max_devices_reached: "Seadmete maksimaalne istekohtade arv on täis",
    license_readonly: "Litsentsi saab muuta ainult serveriterminalist.",
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
    deleteAllKeys: opts => {
      return `Kustuta see puu ja kõik selle võtmed (${opts.key})?`;
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
    license: {
      title: "Määra litsents",
      textContent: "If you want to use paid features, please contact support@corifeus.com to request a license. Pricing is Pro 400 HUF/month (€1/month) or 4,000 HUF/year (€10/year), and Enterprise 1,200 HUF/month (€3/month) or 12,000 HUF/year (€30/year). Yearly is 10x monthly. With 27% VAT, totals are Pro 500 HUF/month (€1.27/month) or 5,100 HUF/year (€12.70/year), Enterprise 1,500 HUF/month (€3.81/month) or 15,200 HUF/year (€38.10/year). License validation requires internet access. Default license includes 5 seats. If you need more seats, contact us at support@corifeus.com.",
      placeholder: "Litsentsi võti"
    }
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
    importKeys: "Impordi võtmed",
    saveWithFormatJson: "Salvestage vorminguga",
    formatJson: "Vorming Json",
    wrap: "Mähi",
    unwrap: "Lahti pakkida",
    downloadJson: "Laadige alla JSON",
    pubsubMonitor: "Monitor PubSub",
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
    license: "Määra litsents",
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
    licenseInfo: "Litsents",
    licenseEditable: "Litsentsi saab redigeerida",
    licenseEditableYes: "Jah",
    licenseEditableNo: "Ei",
    licenseTerminalOnly: "Litsentsi saab konfigureerida ainult serveriterminali kaudu.",
    licenseTierPolicyTitle: "Tasemepoliitika",
    licenseTierPolicyText: "<h4>Free</h4>core Redis UI only; no SSH tunneling, no Readonly connection mode, no Cluster/Sentinel, no Edit JSON/Upload binary/Download binary, no ReJSON.<br/><strong>Price: 0 HUF/month (€0/month).</strong><br/><br/><h4>Pro</h4>SSH tunneling, Readonly connection mode (including --readonly-connections/-r), Edit JSON, Upload binary, Download binary, ReJSON.<br/><strong>Base price: 400 HUF/month (€1/month) or 4,000 HUF/year (€10/year).</strong><br/><strong>Total with 27% VAT: 500 HUF/month (€1.27/month) or 5,100 HUF/year (€12.70/year).</strong><br/><br/><h4>Enterprise</h4>SSH tunneling, Cluster and Sentinel, plus Edit JSON, Upload binary, Download binary, ReJSON; --readonly-connections/-r also works.<br/><strong>Base price: 1,200 HUF/month (€3/month) or 12,000 HUF/year (€30/year).</strong><br/><strong>Total with 27% VAT: 1,500 HUF/month (€3.81/month) or 15,200 HUF/year (€38.10/year).</strong><br/><br/><h4>Yearly rule</h4>Yearly price is 10x the monthly price.<br/><br/><h4>Seats</h4>Default license includes 5 seats. If you need more seats, contact us at <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><br/><h4>Enterprise trial</h4>10 days free for anyone with a real existing email address (non-test email).<br/><hr/><h4>Billing info in e-mail</h4>Name, Billing e-mail, Country code, Postal code, City, Address, VAT ID (optional).<br/><br/><h4>Payment</h4>PayPal payment is available only in HUF (forint); after sending the money @ <a href='https://paypal.me/corifeus'>https://paypal.me/corifeus</a> I will send you an invoice. All payments are non-refundable.<br/><br/><h4>VAT</h4>VAT is added to the price (27% in Hungary).<br/><hr/><h4>Contact</h4>If you want to say hi or have a question, contact <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><hr/><h4>Language</h4>Invoice and license e-mail communication is in English. Invoice currency is HUF.<br/><hr/><h4>Note</h4>License validation requires internet access.",
    licenseState: "osariik",
    licenseStateActive: "Aktiivne",
    licenseStateInactive: "Mitteaktiivne",
    licenseStateNoLicense: "Litsentsi pole",
    licenseKeyMasked: "Salvestatud võti",
    licenseTier: "Tase",
    licenseValid: "Kehtiv",
    licenseStatus: "Litsentsi olek",
    licenseReason: "Põhjus",
    licenseCheckedAt: "Kontrollitud kell",
    licenseStartsAt: "Algus kell",
    licenseExpiresAt: "Aegub kell",
    licenseDaysLeft: "Päevad jäänud",
    licenseMaxDevices: "Max seadmed",
    licenseActiveDevices: "Aktiivsed seadmed",
    licenseActiveDevicesInfo: "Kui seadet enam ei kasutata, vabastatakse selle iste automaatselt 75 minuti pärast.",
    licenseCustomerEmail: "Kliendi email",
    licenseFeatures: "Omadused",
    licenseFeaturesEmpty: "Ei mingeid lisafunktsioone",
    licenseFeatureReadonlyMode: "Kirjutuskaitstud ühenduse režiim",
    licenseFeatureReadonlyConnectionsFlag: "Kirjutuskaitstud ühendused (--readonly-connections/-r)",
    licenseFeatureSsh: "Tunneldamine SSH",
    licenseFeatureCluster: "Cluster ühendused",
    licenseFeatureSentinel: "Sentinel ühendused",
    licenseFeatureReJSON: "ReJSON (andmetüüp JSON)",
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
    proSshOnly: "SSH on saadaval Pro või Enterprise versioonides.",
    proReadonlyOnly: "Kirjutuskaitstud ühendusrežiim on saadaval Pro või Enterprise puhul.",
    enterpriseClusterSentinelOnly: "Cluster ja Sentinel on saadaval ainult ettevõttes.",
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
    loading: "Laadimine...",
    autoRefresh: "Auto",
    exportSearchHint: "Eksporditakse ainult praegusele otsingule vastavad võtmed",
    importSearchHint: "Import kehtib kogu andmebaasile, mitte ainult otsingutulemustele",
    importNoKeys: "Failis ei leitud võtmeid",
  },
  status: {
    dataCopied: "Andmed on lõikepuhvril",
    licenseSaved: "Litsents salvestatud",
    exportDone: "Eksport lõpetatud",
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
    "donation-ware-feature": "See funktsioon on annetamise versioonis olemas.",
    "feature-pro-readonly-required": "Kirjutuskaitstud ühenduse režiim nõuab Pro või Enterprise litsentsi.",
    "feature-pro-ssh-required": "SSH tunnelimiseks on vaja Pro või Enterprise litsentsi.",
    "feature-enterprise-cluster-sentinel-required": "Cluster ja Sentinel nõuavad ettevõtte litsentsi.",
    "feature-pro-json-binary-required": "Redigeerige JSON, binaarfailide üleslaadimine ja kahendfaili allalaadimine nõuavad Pro või Enterprise litsentsi.",
    "feature-pro-rejson-required": "ReJSON (andmetüüp JSON) nõuab Pro või Enterprise litsentsi.",
    "invalid-json-value": "Väärtus ei kehti JSON.",
    "http_auth_required": "Nõutav autoriseerimine: autentige HTTP Basic Auth ja laadige uuesti.",
    "auto-connection-failed": "Võimalik, et ühendus eemaldati ja automaatne ühendus ebaõnnestus.",
    invalid_console_command: "See käsk ei tööta GUI kaudu."
  },
  licenseReason: {
    LICENSE_VALID: "Litsents kehtib",
    LICENSE_INVALID: "Litsents on kehtetu",
    LICENSE_MISSING: "Litsentsivõtit pole määratud",
    LICENSE_DISABLED: "Litsents on serveri konfiguratsioonis keelatud",
    LICENSE_NOT_FOUND: "Litsentsi ei leitud",
    LICENSE_EXPIRED: "Litsents on aegunud",
    LICENSE_CLEARED: "Litsentsivõti kustutati",
    LICENSE_MAX_DEVICES_REACHED: "Seadmete maksimaalne istekohtade arv on täis",
    PRODUCT_MISMATCH: "Litsentsiga toode ei sobi"
  },
  licenseStatusValue: {
    active: "Aktiivne",
    deleted: "Kustutatud",
    all: "Kõik",
    expired: "Aegunud",
    missing: "Kadunud",
    inactive: "Mitteaktiivne"
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
      keyCount: () => {
        return `Võtmete arv: ${p3xr.state.keysRaw.length}`;
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
      noClients: "Kliente pole",
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
      }
    },
    treeControls: {
      settings: "Puu seaded",
      expandAll: "Laienda kõik",
      collapseAll: "Ahenda kõik",
      search: {
        search: "Otsige klahvidest",
        clear: "Tühjendamiseks tühjenda praegune otsing",
        placeholderClient: "Otsige kliendi poolelt",
        placeholderServer: "Otsi serveri poolelt",
        info: "Kliendipoolne otsing tähendab, et see vastab otsingusisendis olevale tekstile. Serveripoolne otsing tähendab, et see on nagu otsing võtmemustrites *{otsingutekst}*. Suurte otsingukomplektide puhul on parem kasutada serveripoolset otsingut. Väiksemate otsingukomplektide jaoks on parem kasutada kliendipoolset otsingurežiimi." + ` Kui klahvide arv on lõppenud ${p3xr.settings.maxLightKeysCount}, saate otsida ainult serveri poolel.`,
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
    loading: "Laadimine...",
    years: "aastat",
    months: "kuud",
    days: "päevadel",
    year: "aastal",
    month: "kuu",
    day: "päeval"
  },
  redisTypes: {
    string: "String",
    list: "List",
    hash: "Hash table",
    set: "Set",
    zset: "Sorted set - zset",
    stream: "Stream",
    json: "JSON"
  }
};
module.exports = strings;
