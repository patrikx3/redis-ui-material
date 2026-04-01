const strings = {
  error: {
    cleared_license: "Licence vymazána",
    invalid_license: "Neplatná licence",
    license_max_devices_reached: "Dosažen maximální počet zařízení",
    license_readonly: "Licenci lze změnit pouze ze serverového terminálu.",
    server_error: "Chyba serveru, zkuste to prosím znovu"
  },
  title: {
    donate: "Přispět",
    jsonRecursive: "Rozbalení všech listů",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "Můžete si vybrat Redis připojení z levého spodního menu.",
    statistics: "Statistiky",
    error: "Chyba",
    connectingRedis: "Připojování k Redis ...",
    socketioConnectError: "Chyba Socket.IO",
    db: "DB",
    server: "Server",
    clients: "Klienti",
    memory: "Paměť",
    persistence: "Perzistence",
    stats: "Statistiky",
    replication: "Replikace",
    cpu: "CPU",
    cluster: "Cluster",
    modules: "Moduly",
    errorstats: "Statistiky chyb",
    commandstats: "Statistiky příkazů",
    latencystats: "Statistiky latence",
    keysizes: "Velikosti klíčů",
    threads: "Vlákna",
  },
  confirm: {
    dropIndex: "Opravdu chcete smazat tento index?",
    uploadBuffer: "Opravdu chcete nahrát tyto binární data?",
    uploadBufferDone: "Binární data byla nahrána",
    uploadBufferDoneAndSave: "Binární data byla nahrána a uložena na serveru",
    title: "Potvrzení",
    alert: "Upozornění",
    info: "Informace",
    deleteListItem: "Opravdu chcete smazat tuto položku seznamu?",
    deleteHashKey: "Opravdu chcete smazat tuto položku hash klíče?",
    deleteStreamTimestamp: "Opravdu chcete smazat tuto časovou značku streamu?",
    deleteSetMember: "Opravdu chcete smazat tohoto člena množiny?",
    deleteZSetMember: "Opravdu chcete smazat tohoto člena seřazené množiny?",
    deleteConnection: "Potvrzení",
    deleteConnectionText: "Opravdu chcete smazat toto Redis připojení?",
    deleteNode: "Opravdu chcete smazat tento Redis uzel?",
    deleteAllKeys: opts => {
      return `Smazat tento strom a všechny jeho klíče (${opts.key})?`;
    },
    socketioConnectError: "Socket.IO se nemůže připojit k serveru, můžete stránku znovu načíst a pokusit se chybu připojení vyřešit sami, klient neví, jak ji vyřešit sám.",
    socketioAuthRequired: "Je vyžadována autorizace Socket.IO. Prosím ověřte se pomocí HTTP Basic Auth (uživatelské jméno/heslo) a znovu načtěte stránku.",
    deleteKey: "Opravdu chcete smazat tento klíč?",
    rename: {
      title: "Opravdu chcete přejmenovat tento klíč?",
      textContent: "Tato akce klíč trvale přejmenuje.",
      placeholder: "Redis klíč (povinný)"
    },
    ttl: {
      title: "Opravdu chcete změnit TTL tohoto klíče?",
      textContent: "Změna TTL aktualizuje dobu životnosti tohoto klíče. Ponechte prázdné pro uchování klíče navždy.",
      placeholder: "TTL Redis klíče (celé číslo nebo prázdné)",
      placeholderPlaceholder: "Prázdné znamená, že se uchová navždy; jinak zadejte celé číslo.",
      convertTextToTime: "Převést text na čas",
      convertTextToTimePlaceholder: "Např. 1d bude 86400"
    },
    license: {
      title: "Nastavit licenci",
      textContent: "Pokud chcete používat placené funkce, kontaktujte prosím support@corifeus.com a požádejte o licenci. Ceny jsou Pro 400 HUF/měsíc (€1/měsíc) nebo 4,000 HUF/rok (€10/rok) a Enterprise 1,200 HUF/měsíc (€3/měsíc) nebo 12,000 HUF/rok (€30/rok). Roční cena je 10x měsíční. S 27% DPH jsou celkové ceny Pro 500 HUF/měsíc (€1.27/měsíc) nebo 5,100 HUF/rok (€12.70/rok), Enterprise 1,500 HUF/měsíc (€3.81/měsíc) nebo 15,200 HUF/rok (€38.10/rok). Ověření licence vyžaduje přístup k internetu. Výchozí licence zahrnuje 5 míst. Pokud potřebujete více míst, kontaktujte nás na support@corifeus.com.",
      placeholder: "Licenční klíč"
    }
  },
  language: {
    // When you translate the english name, keep the Language in English
    // eg. Inglés / English
    bg: "Български / Bulgarian",
    cs: "Čeština / Czech",
    de: "Deutsch / German",
    el: "Ελληνικά / Greek",
    en: "English",
    es: "Español / Spanish",
    fr: "Français / French",
    hu: "Magyar / Hungarian",
    it: "Italiano / Italian",
    ja: "日本語 / Japanese",
    nl: "Nederlands / Dutch",
    pl: "Polski / Polish",
    "pt-PT": "Português / Portuguese",
    ro: "Română / Romanian",
    ru: "Русский / Russian",
    sk: "Slovenčina / Slovak",
    sr: "Српски / Serbian",
    sv: "Svenska / Swedish",
    tr: "Türkçe / Turkish",
    uk: "Українська / Ukrainian",
    zn: "中文 / Chinese",
    ar: "العربية / Arabic",
    az: "Azərbaycanca / Azerbaijani",
    be: "Беларуская / Belarusian",
    bn: "বাংলা / Bengali",
    da: "Dansk / Danish",
    et: "Eesti / Estonian",
    fi: "Suomi / Finnish",
    fil: "Filipino / Filipino",
    he: "עברית / Hebrew",
    hr: "Hrvatski / Croatian",
    hy: "Հայերեն / Armenian",
    id: "Bahasa Indonesia / Indonesian",
    ka: "ქართული / Georgian",
    kk: "Қазақша / Kazakh",
    km: "ខ្មែរ / Khmer",
    ko: "한국어 / Korean",
    ky: "Кыргызча / Kyrgyz",
    lt: "Lietuvių / Lithuanian",
    mk: "Македонски / Macedonian",
    ms: "Bahasa Melayu / Malay",
    ne: "नेपाली / Nepali",
    no: "Norsk / Norwegian",
    "pt-BR": "Português (Brasil) / Portuguese (Brazil)",
    sl: "Slovenščina / Slovenian",
    tg: "Тоҷикӣ / Tajik",
    th: "ไทย / Thai",
    vi: "Tiếng Việt / Vietnamese",
    "zh-HK": "中文（香港） / Chinese (Hong Kong)",
    "zh-TW": "中文（台灣） / Chinese (Taiwan)",
    bs: 'Bosanski / Bosnian',
    si: 'සිංහල / Sinhala',
    sw: 'Kiswahili / Swahili',
    ta: 'தமிழ் / Tamil'
  },
  intention: {
    copy: "Kopírovat",
    downloadBuffer: "Stáhnout binární soubor",
    setBuffer: "Nahrát binární soubor",
    exportKeys: "Exportovat klíče",
    exportAllKeys: (opts) => `Exportovat všech ${opts.count} klíčů`,
    exportSearchResults: (opts) => `Exportovat ${opts.count} výsledků`,
    importKeys: "Importovat klíče",
    saveWithFormatJson: "Uložit s formátováním",
    formatJson: "Formátovat Json",
    wrap: "Zalamovat",
    unwrap: "Nezalamovat",
    downloadJson: "Stáhnout JSON",
    pubsubMonitor: "PubSub Monitor",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "Jazyk / Language",
    ok: "OK",
    addKey: "Přidat k tomuto klíči",
    addKeyRoot: "Přidat kořenový klíč",
    reloadKey: "Znovu načíst klíč",
    reload: "Znovu načíst",
    close: "Zavřít",
    commands: "Příkazy",
    view: "Zobrazení",
    statistics: "Statistiky",
    refresh: "Obnovit",
    pause: "Pozastavit",
    resume: "Pokračovat",
    clear: "Vymazat",
    rename: "Přejmenovat",
    main: "Databáze",
    cancel: "Zrušit",
    theme: "Motiv",
    github: "GitHub",
    githubRepo: "Repozitář",
    githubRelease: "Vydání",
    githubChangelog: "Seznam změn",
    info: "Info",
    settings: "Nastavení",
    connect: "Připojit",
    disconnect: "Odpojit",
    overview: "Přehled",
    console: "Konzole",
    noConnections: "Žádná připojení, přidejte připojení v menu nastavení.",
    noConnectionsInSettings: "Žádná připojení, můžete přidat NOVÉ PŘIPOJENÍ výše.",
    connectionAdd: "Nové připojení",
    addGroup: "Přidat skupinu",
    extend: "Rozbalit",
    collapse: "Sbalit",
    add: "Přidat",
    edit: "Upravit",
    save: "Uložit",
    ttl: "Nastavit TTL",
    license: "Nastavit licenci",
    delete: "Smazat",
    remove: "Odebrat",
    sure: "Jistě",
    testConnection: "Otestovat připojení",
    getKey: "Načítání Redis klíče a přidružených dat ...",
    jsonViewShow: "Zobrazit JSON",
    jsonViewEditor: "Upravit JSON",
    quickConsole: "Rychlá konzole"
  },
  label: {
    id: {
      nodeId: 'ID uzlu',
      id: "ID připojení",
      info: "Pokud nechcete měnit vlastnosti: sshPassword, sshPrivateKey, password, tlsCrt, tlsKey, tlsCa, zadejte prosím ID připojení do těchto vlastností, aby se hodnoty zachovaly. Pokud chcete stejnou logiku pro heslo uzlu, zadejte ID uzlu do hesla uzlu."
    },
    secureFeature: 'Pokud vidíte hodnotu, která začíná na P3X a vypadá stejně, jedná se o bezpečnostní funkci. Chcete-li změnit nastavení, jednoduše nahraďte tato nastavení prázdnými nebo něčím jiným a budou uložena. Pokud nastavení nezměníte, zůstanou zachována tak, jak jsou na serveru.',
    ssh: {
      on: 'SSH zapnuto',
      off: 'SSH vypnuto',
      sshHost: 'SSH Hostitel',
      sshPort: 'SSH Port',
      sshUsername: 'SSH Uživatelské jméno',
      sshPassword: 'SSH Heslo',
      sshPrivateKey: 'SSH Soukromý klíč'
    },
    isBuffer: opts => `[object ArrayBuffer] znamená, že hodnota jsou binární data nebo je hodnota větší než ${opts.maxValueAsBuffer}`,
    streamValue: `Pole a hodnota streamu jsou na jednom řádku. Např.: field1 value1 "field 2" "value 2"`,
    streamTimestampId: `'*' znamená automatické generování nebo specifikace jako <millisecondsTime>-<sequenceNumber>`,
    unableToLoadKey: ({
      key
    }) => {
      return `Nelze načíst tento klíč: ${key}. Je možné, že klíč byl smazán. Přesná chyba je v konzoli.`;
    },
    bigJson: "Tento JSON objekt má více než 10 kb, ujistěte se, že víte, co děláte, protože některé funkce mohou být pomalé při vykreslování.",
    addNode: "Přidat uzel",
    validateJson: "Ověřit JSON",
    reducedFunction: `Omezená funkčnost`,
    tooManyKeys: opts => {
      return `Pro plné maximální funkce je povolený celkový počet klíčů ${opts.maxLightKeysCount}. Tato databáze má více než povolený celkový počet klíčů ${opts.count}. Řazení klíčů a dodatečné informace o stromě jsou vypnuty. Vyhledávání probíhá pouze na serveru místo na klientovi.`;
    },
    redisCommandNotFound: "Nebyl nalezen žádný odpovídající Redis příkaz ...",
    treeKeyStore: `Řazení (přirozené porovnávání) se provádí na klientovi, tedy v prohlížeči, což znamená, že pro velké sady dat, jako je více než 10 tisíc klíčů, může přidat trochu času k vykreslení stránky. V Redis neexistuje řazení klíčů, pouze tímto způsobem.`,
    socketIoTimeout: options => {
      return `Socket.IO vypršel pro tento požadavek (max ${options.timeout / 1000} sekund) ...`;
    },
    resizerInfo: options => {
      return `Minimální šířka levého nebo pravého panelu je ${options.width}px`;
    },
    jsonViewNotParsable: "Tuto hodnotu nelze parsovat jako JSON  ",
    ttlTitle: "Nastavte TTL v sekundách",
    passwordSecure: "Heslo může být prázdné, ale přesto bude zobrazovat znaky, to je bezpečnostní funkce.",
    tlsWithoutCert: "Povolit TLS bez dalšího certifikátu",
    tlsRejectUnauthorized: "Odmítnout neautorizovaný certifikát",
    tlsSecure: "Pokud vidíte konfiguraci TLS, která začíná na P3X nebo všechna nastavení TLS vypadají stejně, jedná se o bezpečnostní funkci. Chcete-li změnit nastavení, jednoduše je nahraďte prázdnými nebo něčím jiným a budou uložena. Pokud nastavení TLS nezměníte, zůstanou zachována tak, jak jsou na serveru.",
    treeSeparatorEmpty: "Pokud je oddělovač stromě prázdný, strom nebude mít vnořené uzly, pouze prostý seznam",
    treeSeparatorEmptyNote: "Žádné vnořené uzly, pouze prostý seznam",
    welcomeConsole: "Vítejte v Redis Konzoli",
    welcomeConsoleInfo: "Historie s kurzorem NAHORU nebo DOLŮ je povolena",
    redisListIndexInfo: "Prázdné pro připojení na konec, -1 pro vložení na začátek nebo uložte na zobrazenou pozici.",
    console: "Konzole",
    connectiondAdd: "Přidat připojení",
    connectiondEdit: "Upravit připojení",
    connectiondView: "Zobrazit připojení",
    connections: "Připojení",
    licenseInfo: "Licence",
    licenseEditable: "Licence upravitelná",
    licenseEditableYes: "Ano",
    licenseEditableNo: "Ne",
    licenseTerminalOnly: "Licenci lze konfigurovat pouze ze serverového terminálu.",
    licenseTierPolicyTitle: "Cenová politika",
    licenseTierPolicyText: "<h4>Zdarma</h4>Pouze základní Redis UI; bez SSH tunelování, bez režimu Readonly připojení, bez Cluster/Sentinel, bez Úpravy JSON/Nahrání binárních souborů/Stažení binárních souborů, bez ReJSON.<br/><strong>Cena: 0 HUF/měsíc (€0/měsíc).</strong><br/><br/><h4>Pro</h4>SSH tunelování, režim Readonly připojení (včetně --readonly-connections/-r), Úprava JSON, Nahrání binárních souborů, Stažení binárních souborů, ReJSON.<br/><strong>Základní cena: 400 HUF/měsíc (€1/měsíc) nebo 4,000 HUF/rok (€10/rok).</strong><br/><strong>Celkem s 27% DPH: 500 HUF/měsíc (€1.27/měsíc) nebo 5,100 HUF/rok (€12.70/rok).</strong><br/><br/><h4>Enterprise</h4>SSH tunelování, Cluster a Sentinel, plus Úprava JSON, Nahrání binárních souborů, Stažení binárních souborů, ReJSON; --readonly-connections/-r také funguje.<br/><strong>Základní cena: 1,200 HUF/měsíc (€3/měsíc) nebo 12,000 HUF/rok (€30/rok).</strong><br/><strong>Celkem s 27% DPH: 1,500 HUF/měsíc (€3.81/měsíc) nebo 15,200 HUF/rok (€38.10/rok).</strong><br/><br/><h4>Roční pravidlo</h4>Roční cena je 10x měsíční cena.<br/><br/><h4>Místa</h4>Výchozí licence zahrnuje 5 míst. Pokud potřebujete více míst, kontaktujte nás na <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><br/><h4>Enterprise zkušební verze</h4>10 dní zdarma pro každého se skutečnou existující e-mailovou adresou (ne testovací e-mail).<br/><hr/><h4>Fakturační údaje e-mailem</h4>Jméno, Fakturační e-mail, Kód země, PSČ, Město, Adresa, DIČ (volitelné).<br/><br/><h4>Platba</h4>PayPal platba je k dispozici pouze v HUF (forinty); po odeslání peněz @ <a href='https://paypal.me/corifeus'>https://paypal.me/corifeus</a> vám zašlu fakturu. Všechny platby jsou nevratné.<br/><br/><h4>DPH</h4>K ceně se přidává DPH (27% v Maďarsku).<br/><hr/><h4>Kontakt</h4>Pokud se chcete pozdravit nebo máte dotaz, kontaktujte <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><hr/><h4>Jazyk</h4>Faktura a licenční e-mailová komunikace je v angličtině. Měna faktury je HUF.<br/><hr/><h4>Poznámka</h4>Ověření licence vyžaduje přístup k internetu.",
    licenseState: "Stav",
    licenseStateActive: "Aktivní",
    licenseStateInactive: "Neaktivní",
    licenseStateNoLicense: "Žádná licence",
    licenseKeyMasked: "Uložený klíč",
    licenseTier: "Úroveň",
    licenseValid: "Platná",
    licenseStatus: "Stav licence",
    licenseReason: "Důvod",
    licenseCheckedAt: "Zkontrolováno",
    licenseStartsAt: "Začíná",
    licenseExpiresAt: "Vyprší",
    licenseDaysLeft: "Zbývající dny",
    licenseMaxDevices: "Maximální počet zařízení",
    licenseActiveDevices: "Aktivní zařízení",
    licenseActiveDevicesInfo: "Pokud se zařízení již nepoužívá, jeho místo se automaticky uvolní po 75 minutách.",
    licenseCustomerEmail: "E-mail zákazníka",
    licenseFeatures: "Funkce",
    licenseFeaturesEmpty: "Žádné další funkce",
    licenseFeatureReadonlyMode: "Režim Readonly připojení",
    licenseFeatureReadonlyConnectionsFlag: "Readonly připojení (--readonly-connections/-r)",
    licenseFeatureSsh: "SSH tunelování",
    licenseFeatureCluster: "Cluster připojení",
    licenseFeatureSentinel: "Sentinel připojení",
    licenseFeatureReJSON: "ReJSON (JSON data type)",
    keysSort: {
      on: "Řazení klíčů zapnuto",
      off: "Řazení klíčů vypnuto"
    },
    cluster: {
      on: "Cluster zapnut",
      off: "Cluster vypnut"
    },
    sentinel: {
      on: "Sentinel zapnut",
      off: "Sentinel vypnut",
      name: "Sentinel název"
    },
    readonly: {
      on: "Readonly zapnuto",
      off: "Readonly vypnuto"
    },
    proSshOnly: "SSH je dostupné v Pro nebo Enterprise.",
    proReadonlyOnly: "Režim Readonly připojení je dostupný v Pro nebo Enterprise.",
    enterpriseClusterSentinelOnly: "Cluster a Sentinel jsou dostupné pouze v Enterprise.",
    theme: {
      light: "Světlý",
      dark: "Tmavý enterprise",
      darkNeu: "Tmavý",
      darkoBluo: "Darko bluo",
      enterprise: "Enterprise",
      redis: "Redis",
      matrix: "Matrix"
    },
    connected: opts => {
      return `Připojeno: ${opts.name}`;
    },
    tree: "Strom",
    askAuth: "Žádost o autorizaci",
    keyboardShortcuts: "Klávesové zkratky",
    about: "O aplikaci",
    supportedLanguages: "Podporované jazyky",
    version: "Verze",
    redisVersion: "Verze Redis",
    modules: "Moduly",
    shortcutRefresh: "Obnovit",
    shortcutSearch: "Zaměřit vyhledávání",
    shortcutNewKey: "Nový klíč",
    shortcutDisconnect: "Odpojit",
    themeAuto: "Automaticky (systém)",
    shortcutCommandPalette: "Paleta příkazů",
    commandPalette: "Paleta příkazů",
    noResults: "Žádné výsledky",
    redisCommandsReference: "Redis Příkazy",
    ungrouped: "Bez skupiny",
    grouped: "Seskupené",
    connectFirst: "Nejprve se připojte k serveru Redis",
    searchLanguage: "Hledat jazyk...",
    exportProgress: "Exportování klíčů...",
    importProgress: "Importování klíčů...",
    importPreview: "Náhled",
    importOverwrite: "Přepsat",
    importSkip: "Přeskočit",
    importConflict: "Pokud klíč již existuje:",
    noKeysToExport: "Žádné klíče k exportu",
    time: "Čas",
    loading: "Načítání...",
    autoRefresh: "Auto",
    exportSearchHint: "Exportují se pouze klíče odpovídající aktuálnímu vyhledávání",
    importSearchHint: "Import se vztahuje na celou databázi, nejen na výsledky vyhledávání",
    importNoKeys: "V souboru nebyly nalezeny žádné klíče",
  },
  status: {
    dataCopied: "Data jsou ve schránce",
    licenseSaved: "Licence uložena",
    exportDone: "Export dokončen",
    indexCreated: "Index vytvořen",
    indexDropped: "Index smazán",
    importDone: (opts) => `Import dokončen: ${opts.created} vytvořeno, ${opts.skipped} přeskočeno, ${opts.errors} chyb`,
    nodeRemoved: "Uzel odstraněn",
    keyIsNotExisting: "Tento klíč mohl být smazán nebo vypršel.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "Žádný klíč";
      } else if (opts.keyCount === 1) {
        return "1 klíč";
      } else {
        return `${opts.keyCount} klíčů`;
      }
    },
    treeExpandAll: "Rozbalit všechny listy stromě. Tato operace může být náročná a zabrat čas ...",
    noRedisKeys: "V této databázi nejsou žádné klíče.",
    redisConnected: "Redis úspěšně připojen",
    reloadingDataInfo: "Znovu načítání informací o Redis datech",
    added: "Přidáno",
    saved: "Aktualizováno",
    cancelled: "Zrušeno",
    deleted: "Smazáno",
    savedRedis: "Redis data jsou uložena",
    redisDisconnected: opts => {
      return `Aktuální připojení mělo chybu: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `Index DB nastaven na ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `Klíč stromě byl smazán (${opts.key}).`;
    },
    deletedKey: opts => {
      return `Klíč byl smazán (${opts.key}).`;
    },
    renamedKey: "Tento klíč byl přejmenován",
    ttlChanged: "TTL tohoto klíče bylo změněno",
    notInteger: "Tento vstup není celé číslo",
    persisted: "Tento klíč je uchován navždy",
    set: "Klíč je nastaven/přidán"
  },
  code: {
    "delete-connection": "Toto připojení bylo smazáno, proto jste odpojeni od této Redis instance.",
    "save-connection": "Toto připojení bylo změněno, proto jste odpojeni od této Redis instance. Můžete se znovu připojit.",
    "readonly-connections": "Přidání/uložení/smazání připojení je pouze pro čtení!",
    "readonly-connection-mode": "Toto připojení je v režimu pouze pro čtení!",
    "list-out-of-bounds": "Index seznamu je mimo rozsah",
    "donation-ware-feature": "Tato funkce je dostupná v placené verzi.",
    "feature-pro-readonly-required": "Režim Readonly připojení vyžaduje licenci Pro nebo Enterprise.",
    "feature-pro-ssh-required": "SSH tunelování vyžaduje licenci Pro nebo Enterprise.",
    "feature-enterprise-cluster-sentinel-required": "Cluster a Sentinel vyžadují licenci Enterprise.",
    "feature-pro-json-binary-required": "Úprava JSON, Nahrání binárních souborů a Stažení binárních souborů vyžadují licenci Pro nebo Enterprise.",
    "feature-pro-rejson-required": "ReJSON (JSON data type) requires Pro or Enterprise license.",
    "invalid-json-value": "The value is not valid JSON.",
    "http_auth_required": "Je vyžadována autorizace: prosím ověřte se pomocí HTTP Basic Auth a znovu načtěte stránku.",
    "auto-connection-failed": "Je možné, že připojení bylo odstraněno a automatické připojení selhalo kvůli tomu.",
    invalid_console_command: "Tento příkaz nefunguje přes GUI."
  },
  licenseReason: {
    LICENSE_VALID: "Licence je platná",
    LICENSE_INVALID: "Licence je neplatná",
    LICENSE_MISSING: "Licenční klíč není nastaven",
    LICENSE_DISABLED: "Licence je zakázána v konfiguraci serveru",
    LICENSE_NOT_FOUND: "Licence nebyla nalezena",
    LICENSE_EXPIRED: "Licence vypršela",
    LICENSE_CLEARED: "Licenční klíč byl vymazán",
    LICENSE_MAX_DEVICES_REACHED: "Dosažen maximální počet zařízení",
    PRODUCT_MISMATCH: "Produkt licence neodpovídá"
  },
  licenseStatusValue: {
    active: "Aktivní",
    deleted: "Smazaná",
    all: "Vše",
    expired: "Vypršelá",
    missing: "Chybí",
    inactive: "Neaktivní"
  },
  form: {
    error: {
      required: "Povinné",
      port: "Port je mezi 1-65535",
      invalid: "Formulář je neplatný"
    },
    connection: {
      label: {
        name: "Název",
        group: "Skupina",
        host: "Hostitel",
        port: "Port",
        password: "Heslo",
        username: "Uživatelské jméno"
      }
    },
    treeSettings: {
      maxValueDisplay: "Maximální délka zobrazovaného textu",
      maxValueDisplayInfo: "Pokud je nastaveno na 0, zobrazí úplné hodnoty. Pokud je větší než 0, zkrátí na tuto délku. Pokud je -1: pro řetězce skryje hodnotu do úpravy; pro ostatní typy zobrazí úplný obsah.",
      maxKeys: "Maximální počet klíčů",
      maxKeysInfo: "Aby GUI nespadlo, omezujeme maximální počet klíčů.",
      keyCount: () => {
        return `Počet klíčů: ${p3xr.state.keysRaw.length}`;
      },
      label: {
        animation: "Použít animaci",
        noAnimation: "Bez animace",
        jsonFormatTwoSpace: "Formátovat JSON se 2 mezerami",
        jsonFormatFourSpace: "Formátovat JSON se 4 mezerami",
        formName: "Redis nastavení",
        searchModeClient: "Režim vyhledávání na klientovi",
        searchModeServer: "Režim vyhledávání na serveru",
        searchModeStartsWith: "Vyhledávání v režimu 'začíná na'",
        searchModeIncludes: "Režim vyhledávání 'obsahuje'"
      },
      field: {
        treeSeparator: "Oddělovač stromě",
        treeSeparatorSelector: "Selektor oddělovače stromě",
        page: "Počet stránek stromě",
        keyPageCount: "Počet klíčů na stránku",
        keysSort: "Seřadit klíče",
        searchMode: "Režim vyhledávání",
        searchModeStartsWith: "Vyhledávání 'začíná na' / 'obsahuje'"
      },
      error: {
        keyPageCount: "Počet klíčů na stránku musí být celé číslo mezi 5 - 100",
        page: "Počet stránek musí být celé číslo mezi 10 - 5000",
        maxValueDisplay: "Maximální zobrazovaná hodnota musí být celé číslo mezi -1 a 32768",
        maxKeys: "Maximální počet klíčů musí být celé číslo mezi 100 a 100000"
      }
    },
    key: {
      label: {
        formName: {
          add: "Přidat nový Redis klíč",
          edit: "Upravit Redis klíč",
          append: "Přidat k existujícímu Redis klíči"
        }
      },
      field: {
        streamTimestamp: "Časová značka",
        key: "Klíč",
        type: "Typ",
        index: "Index",
        hashKey: "Hash klíč",
        score: "Skóre",
        value: "Hodnota"
      },
      error: {
        streamTimestamp: "Časová značka je povinná, buď ve formátu Redis nebo jako *",
        key: "Klíč musí mít alespoň jeden znak",
        hashKey: "Hash klíč musí mít alespoň jeden znak",
        score: "Skóre seřazené množiny je povinné",
        value: "Hodnota je povinná"
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
      title: "Hledat",
      index: "Index",
      query: "Dotaz",
      results: "Výsledky",
      noIndex: "Žádné indexy",
      createIndex: "Vytvořit index",
      dropIndex: "Smazat index",
      indexInfo: "Info o indexu",
      indexName: "Název indexu",
      prefix: "Prefix klíče (volitelné)",
      fieldName: "Název pole",
    },
    monitor: {
      title: "Monitorování",
      memory: "Paměť",
      opsPerSec: "Operací/s",
      clients: "Klienti",
      blocked: "Blokováno",
      hitsMisses: "Úspěšnost",
      networkIo: "Síťový I/O",
      slowLog: "Pomalý log",
      totalCommands: "Celkem",
      expired: "Vypršelo",
      evicted: "Vyřazeno",
      clientList: "Seznam klientů",
      topKeys: "Největší klíče podle paměti",
      killClient: "Zabít klienta",
      clientKilled: "Klient zabit",
      confirmKillClient: "Opravdu chcete ukončit tohoto klienta?",
      noKeys: "Žádné klíče",
      noClients: "Žádní klienti",
    },
    overview: {
      noConnected: "Není připojení k Redis.",
      overviewClients: "Seznam připojených podle počtu klientů",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "1 klient";
        }
        return `${opt.length} klientů`;
      }
    },
    key: {
      label: {
        key: "Klíč",
        encoding: "Kódování",
        length: "Velikost",
        ttl: "TTL",
        ttlTitle: "Doba životnosti",
        type: "Typ",
        ttlNotExpire: "nevyprší",
        lengthString: "bajtů",
        lengthItem: "položek",
        actions: "Akce"
      },
      list: {
        table: {
          index: "Index",
          value: "Hodnota"
        }
      },
      hash: {
        table: {
          hashkey: "Hash klíč",
          value: "Hodnota"
        }
      },
      set: {
        table: {
          value: "Člen"
        }
      },
      zset: {
        table: {
          value: "Člen",
          score: "Skóre"
        }
      },
      stream: {
        table: {
          timestamp: "ID časové značky",
          field: "Pole",
          value: "Hodnota"
        }
      }
    },
    treeControls: {
      settings: "Nastavení stromě",
      expandAll: "Rozbalit vše",
      collapseAll: "Sbalit vše",
      search: {
        search: "Hledat v klíčích",
        clear: "Vymazat aktuální vyhledávání",
        placeholderClient: "Hledat na straně klienta",
        placeholderServer: "Hledat na straně serveru",
        info: "Hledání na straně klienta znamená, že odpovídá textu ve vyhledávacím poli. Hledání na straně serveru znamená, že vyhledává ve vzorcích klíčů jako *{hledaný-text}*. Pro velké sady dat je lepší použít vyhledávání na straně serveru. Pro menší sady dat je lepší použít režim vyhledávání na straně klienta." + ` Pokud je počet klíčů nad ${p3xr.settings.maxLightKeysCount}, můžete vyhledávat pouze na straně serveru.`,
        largeSetInfo: "Ve velké sadě dat je vyhledávání na straně klienta zakázáno, takže v tuto chvíli je možné pouze vyhledávání na straně serveru.",
        infoDetails: "Chcete-li zjistit, jak vyhledávání funguje, podívejte se do nastavení"
      },
      pager: {
        next: "Další",
        prev: "Předchozí",
        first: "První",
        last: "Poslední"
      }
    }
  },
  time: {
    loading: "Načítání...",
    years: "let",
    months: "měsíců",
    days: "dní",
    year: "rok",
    month: "měsíc",
    day: "den"
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
