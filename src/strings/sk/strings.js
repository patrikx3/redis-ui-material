const strings = {
  error: {
    cleared_license: "Licencia bola vymazana",
    invalid_license: "Neplatna licencia",
    license_max_devices_reached: "Dosiahnuty maximalny pocet zariadeni",
    license_readonly: "Licenciu je mozne zmenit iba z terminalu servera.",
    server_error: "Chyba servera, skuste to znovu"
  },
  title: {
    donate: "Prispiet",
    jsonRecursive: "Rozbalujem vsetky listy",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "Mozete si vybrat Redis pripojenie z menu vlavo dole.",
    statistics: "Statistiky",
    error: "Chyba",
    connectingRedis: "Pripajam sa k Redis ...",
    socketioConnectError: "Chyba Socket.IO",
    db: "DB",
    server: "Server",
    clients: "Klienti",
    memory: "Pamat",
    persistence: "Perzistencia",
    stats: "Statistiky",
    replication: "Replikacia",
    cpu: "CPU",
    cluster: "Cluster",
    modules: "Moduly",
    errorstats: "Štatistiky chýb",
    commandstats: "Štatistiky príkazov",
    latencystats: "Štatistiky latencie",
    keysizes: "Veľkosti kľúčov",
    threads: "Vlákna",
  },
  confirm: {
    dropIndex: "Naozaj chcete zmazať tento index?",
    uploadBuffer: "Ste si isty, ze chcete nahrat tieto binarne data?",
    uploadBufferDone: "Binarne data boli nahrate",
    uploadBufferDoneAndSave: "Binarne data boli nahrate a ulozene na serveri",
    title: "Potvrdenie",
    alert: "Upozornenie",
    info: "Informacia",
    deleteListItem: "Ste si isty, ze chcete vymazat tuto polozku zoznamu?",
    deleteHashKey: "Ste si isty, ze chcete vymazat tento hash kluc?",
    deleteStreamTimestamp: "Ste si isty, ze chcete vymazat tuto casovu znacku streamu?",
    deleteSetMember: "Ste si isty, ze chcete vymazat tohto clena mnoziny?",
    deleteZSetMember: "Ste si isty, ze chcete vymazat tohto clena zoradenej mnoziny?",
    deleteConnection: "Potvrdenie",
    deleteConnectionText: "Ste si isty, ze chcete vymazat toto Redis pripojenie?",
    deleteNode: "Ste si isty, ze chcete vymazat tento Redis uzol?",
    deleteAllKeys: opts => {
      return `Vymazat tento strom a vsetky jeho kluce (${opts.key})?`;
    },
    socketioConnectError: "Socket.IO sa nemoze pripojit k serveru, mozete znovu nacitat a skusit vyriesit chybu pripojenia sami, klient nevie ako ju vyriesit.",
    socketioAuthRequired: "Autorizacia Socket.IO je potrebna. Prosim autentifikujte sa cez HTTP Basic Auth (meno/heslo) a znovu nacitajte.",
    deleteKey: "Ste si isty, ze chcete vymazat tento kluc?",
    rename: {
      title: "Ste si isty, ze chcete premenovat tento kluc?",
      textContent: "Tato akcia kluc trvalo premenuje.",
      placeholder: "Redis kluc (povinne)"
    },
    ttl: {
      title: "Ste si isty, ze chcete zmenit TTL tohto kluca?",
      textContent: "Zmena TTL aktualizuje dobu zivotnosti tohto kluca. Nechajte prazdne pre zachovanie kluca natrvalo.",
      placeholder: "TTL Redis kluca (cele cislo alebo prazdne)",
      placeholderPlaceholder: "Prazdne znamena, ze pretrvava navzdy; inak zadajte cele cislo.",
      convertTextToTime: "Konvertovat text na cas",
      convertTextToTimePlaceholder: "Napr. 1d bude 86400"
    },
    license: {
      title: "Nastavit licenciu",
      textContent: "Ak chcete pouzivat platene funkcie, kontaktujte support@corifeus.com pre ziskanie licencie. Cena je Pro 400 HUF/mesiac (\u20AC1/mesiac) alebo 4 000 HUF/rok (\u20AC10/rok) a Enterprise 1 200 HUF/mesiac (\u20AC3/mesiac) alebo 12 000 HUF/rok (\u20AC30/rok). Rocna cena je 10x mesacnej. S 27% DPH su sumy Pro 500 HUF/mesiac (\u20AC1,27/mesiac) alebo 5 100 HUF/rok (\u20AC12,70/rok), Enterprise 1 500 HUF/mesiac (\u20AC3,81/mesiac) alebo 15 200 HUF/rok (\u20AC38,10/rok). Overenie licencie vyzaduje pristup na internet. Predvolena licencia zahrna 5 miest. Ak potrebujete viac miest, kontaktujte nas na support@corifeus.com.",
      placeholder: "Licencny kluc"
    }
  },
  language: {
    bg: "\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438 / Bulgarian",
    cs: "\u010Ce\u0161tina / Czech",
    de: "Deutsch / German",
    el: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC / Greek",
    en: "English",
    es: "Espa\u00F1ol / Spanish",
    fr: "Fran\u00E7ais / French",
    hu: "Magyar / Hungarian",
    it: "Italiano / Italian",
    ja: "\u65E5\u672C\u8A9E / Japanese",
    nl: "Nederlands / Dutch",
    pl: "Polski / Polish",
    "pt-PT": "Portugu\u00EAs / Portuguese",
    ro: "Rom\u00E2n\u0103 / Romanian",
    ru: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439 / Russian",
    sk: "Sloven\u010Dina / Slovak",
    sr: "\u0421\u0440\u043F\u0441\u043A\u0438 / Serbian",
    sv: "Svenska / Swedish",
    tr: "T\u00FCrk\u00E7e / Turkish",
    uk: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430 / Ukrainian",
    zn: "\u4E2D\u6587 / Chinese",
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
    copy: "Kopirovat",
    downloadBuffer: "Stiahnut binarny subor",
    setBuffer: "Nahrat binarny subor",
    exportKeys: "Exportovať kľúče",
    exportAllKeys: (opts) => `Exportovať všetkých ${opts.count} kľúčov`,
    exportSearchResults: (opts) => `Exportovať ${opts.count} výsledkov`,
    importKeys: "Importovať kľúče",
    saveWithFormatJson: "Ulozit s formatovanim",
    formatJson: "Formatovat Json",
    wrap: "Zalamovať",
    unwrap: "Nezalamovať",
    downloadJson: "Stiahnuť JSON",
    pubsubMonitor: "Monitor PubSub",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "Jazyk / Language",
    ok: "OK",
    addKey: "Pridat k tomuto klucu",
    addKeyRoot: "Pridat korenovy kluc",
    reloadKey: "Znovu nacitat kluc",
    reload: "Znovu nacitat",
    close: "Zavriet",
    commands: "Prikazy",
    view: "Zobrazenie",
    statistics: "Statistiky",
    refresh: "Obnovit",
    pause: "Pozastaviť",
    resume: "Pokračovať",
    clear: "Vymazat",
    rename: "Premenovat",
    main: "Databáza",
    cancel: "Zrusit",
    theme: "Tema",
    github: "GitHub",
    githubRepo: "Repozitar",
    githubRelease: "Vydania",
    githubChangelog: "Zaznam zmien",
    info: "Info",
    settings: "Nastavenia",
    connect: "Pripojit",
    disconnect: "Odpojit",
    overview: "Prehlad",
    console: "Konzola",
    noConnections: "Ziadne pripojenia, pridajte pripojenie v menu nastaveni.",
    noConnectionsInSettings: "Ziadne pripojenia, mozete pridat NOVE PRIPOJENIE vyssie.",
    connectionAdd: "Nove pripojenie",
    addGroup: "Pridať skupinu",
    extend: "Rozbalit",
    collapse: "Zbalit",
    add: "Pridat",
    edit: "Upravit",
    save: "Ulozit",
    ttl: "Nastavit TTL",
    license: "Nastavit licenciu",
    delete: "Vymazat",
    remove: "Odstranit",
    sure: "Iste",
    testConnection: "Otestovat pripojenie",
    getKey: "Nacitavam Redis kluc a prisluchajuce data ...",
    jsonViewShow: "Zobrazit JSON",
    jsonViewEditor: "Upravit JSON",
    quickConsole: "Rychla konzola"
  },
  label: {
    id: {
      nodeId: 'ID uzla',
      id: "ID pripojenia",
      info: "Ak nechcete menit vlastnosti: sshPassword, sshPrivateKey, password, tlsCrt, tlsKey, tlsCa, prosim zadajte ID pripojenia do tychto vlastnosti, aby ste zachovali hodnoty. Ak chcete rovnaku logiku pre heslo uzla, zadajte ID uzla do hesla uzla."
    },
    secureFeature: 'Ak vidite hodnotu, ktora zacina P3X a vyzera rovnako, je to bezpecnostna funkcia. Pre zmenu nastaveni jednoducho nahradte tieto nastavenia prazdnym retazcom alebo niecim inym a budu ulozene. Ak nastavenia nezmenite, zostanu tak ako su na serveri.',
    ssh: {
      on: 'SSH zapnute',
      off: 'SSH vypnute',
      sshHost: 'SSH host',
      sshPort: 'SSH port',
      sshUsername: 'SSH pouzivatelske meno',
      sshPassword: 'SSH heslo',
      sshPrivateKey: 'SSH sukromny kluc'
    },
    isBuffer: opts => `[object ArrayBuffer] znamena, ze hodnota su binarne data alebo hodnota je vacsia ako ${opts.maxValueAsBuffer}`,
    streamValue: `Pole a hodnota streamu su na jednom riadku. Napr.: pole1 hodnota1 "pole 2" "hodnota 2"`,
    streamTimestampId: `'*' znamena automaticky generovane alebo specifikacia ako <millisecondsTime>-<sequenceNumber>`,
    unableToLoadKey: ({
      key
    }) => {
      return `Nepodarilo sa nacitat tento kluc: ${key}. Je mozne, ze kluc bol vymazany. Presna chyba je v konzole.`;
    },
    bigJson: "Tento JSON objekt ma viac ako 10 kb, uistite sa ze viete co robite, pretoze niektore funkcie mozu byt pomale pri vykreslovani.",
    addNode: "Pridat uzol",
    validateJson: "Overit JSON",
    reducedFunction: `Obmedzena funkcionalita`,
    tooManyKeys: opts => {
      return `Pre plnu maximalnu funkcionalitu je povoleny celkovy pocet klucov ${opts.maxLightKeysCount}. Tato databaza ma viac klucov nez je povolene, celkovo ${opts.count}. Triedenie klucov a doplnkove informacie v strome su vypnute. Vyhladavanie prebieha len na serveri namiesto klienta.`;
    },
    redisCommandNotFound: "Nebol najdeny zodpovedajuci Redis prikaz ...",
    treeKeyStore: `Triedenie (prirodzene porovnanie) sa vykonava na klientovi (t.j. prehliadaci), co znamena, ze pre velke sady, ako napriklad viac ako 10k klucov, to moze pridat trochu casu k vykreslovaniu stranky. V Redis nie je triedenie klucov, iba takto.`,
    socketIoTimeout: options => {
      return `Socket.IO prekrocil casovy limit pre tuto poziadavku (max ${options.timeout / 1000} sekund) ...`;
    },
    resizerInfo: options => {
      return `Minimalna sirka laveho alebo praveho panelu je ${options.width}px`;
    },
    jsonViewNotParsable: "Tato hodnota nie je JSON parsovatelna  ",
    ttlTitle: "Nastavte TTL v sekundach",
    passwordSecure: "Heslo moze byt prazdne, ale stale bude zobrazovat znaky, toto je bezpecnostna funkcia.",
    tlsWithoutCert: "Povolit TLS bez doplnkoveho certifikatu",
    tlsRejectUnauthorized: "Odmietnut neautorizovany certifikat",
    tlsSecure: "Ak vidite TLS konfiguraciu, ktora zacina P3X alebo vsetky TLS nastavenia vyzeraju rovnako, je to bezpecnostna funkcia. Pre zmenu nastaveni jednoducho nahradte tieto nastavenia prazdnym retazcom alebo niecim inym a budu ulozene. Ak nezmenite TLS nastavenia, zostanu tak ako su na serveri.",
    treeSeparatorEmpty: "Ak je separator stromu prazdny, strom nebude mat vnorene uzly, len cisty zoznam",
    treeSeparatorEmptyNote: "Ziadne vnorene uzly, len cisty zoznam",
    welcomeConsole: "Vitajte v Redis konzole",
    welcomeConsoleInfo: "Historia kurzoru HORE alebo DOLE je povolena",
    redisListIndexInfo: "Prazdne pre pridanie na koniec, -1 pre pridanie na zaciatok alebo ulozit na zobrazenej pozicii.",
    console: "Konzola",
    connectiondAdd: "Pridat pripojenie",
    connectiondEdit: "Upravit pripojenie",
    connectiondView: "Zobrazit pripojenie",
    connections: "Pripojenia",
    licenseInfo: "Licencia",
    licenseEditable: "Licencia upravitelna",
    licenseEditableYes: "Ano",
    licenseEditableNo: "Nie",
    licenseTerminalOnly: "Licenciu je mozne nastavit len z terminalu servera.",
    licenseTierPolicyTitle: "Politika urovni",
    licenseTierPolicyText: "<h4>Free</h4>iba zakladne Redis UI; bez SSH tunelovania, bez rezimu Readonly pripojenia, bez Cluster/Sentinel, bez Edit JSON/Upload binary/Download binary, bez ReJSON.<br/><strong>Cena: 0 HUF/mesiac (\u20AC0/mesiac).</strong><br/><br/><h4>Pro</h4>SSH tunelovanie, rezim Readonly pripojenia (vratane --readonly-connections/-r), Edit JSON, Upload binary, Download binary, ReJSON.<br/><strong>Zakladna cena: 400 HUF/mesiac (\u20AC1/mesiac) alebo 4 000 HUF/rok (\u20AC10/rok).</strong><br/><strong>Celkom s DPH 27%: 500 HUF/mesiac (\u20AC1,27/mesiac) alebo 5 100 HUF/rok (\u20AC12,70/rok).</strong><br/><br/><h4>Enterprise</h4>SSH tunelovanie, Cluster a Sentinel, plus Edit JSON, Upload binary, Download binary, ReJSON; --readonly-connections/-r tiez funguje.<br/><strong>Zakladna cena: 1 200 HUF/mesiac (\u20AC3/mesiac) alebo 12 000 HUF/rok (\u20AC30/rok).</strong><br/><strong>Celkom s DPH 27%: 1 500 HUF/mesiac (\u20AC3,81/mesiac) alebo 15 200 HUF/rok (\u20AC38,10/rok).</strong><br/><br/><h4>Rocne pravidlo</h4>Rocna cena je 10x mesacnej ceny.<br/><br/><h4>Miesta</h4>Predvolena licencia zahrna 5 miest. Ak potrebujete viac miest, kontaktujte nas na <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><br/><h4>Enterprise skusobna doba</h4>10 dni zadarmo pre kohokoolvek s realnou existujucou emailovou adresou (nie testovaci email).<br/><hr/><h4>Fakturacne udaje e-mailom</h4>Meno, Fakturacny e-mail, Kod krajiny, PSC, Mesto, Adresa, IC DPH (volitelne).<br/><br/><h4>Platba</h4>Platba cez PayPal je dostupna len v HUF (forint); po odoslani penazi na <a href='https://paypal.me/corifeus'>https://paypal.me/corifeus</a> vam poslem fakturu. Vsetky platby su nevratne.<br/><br/><h4>DPH</h4>DPH sa pripocitava k cene (27% v Madarsku).<br/><hr/><h4>Kontakt</h4>Ak chcete pozdravit alebo mate otazku, kontaktujte <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><hr/><h4>Jazyk</h4>Komunikacia ohladne faktur a licencii je v anglickom jazyku. Mena faktury je HUF.<br/><hr/><h4>Poznamka</h4>Overenie licencie vyzaduje pristup na internet.",
    licenseState: "Stav",
    licenseStateActive: "Aktivna",
    licenseStateInactive: "Neaktivna",
    licenseStateNoLicense: "Bez licencie",
    licenseKeyMasked: "Ulozeny kluc",
    licenseTier: "Uroven",
    licenseValid: "Platna",
    licenseStatus: "Stav licencie",
    licenseReason: "Dovod",
    licenseCheckedAt: "Overene",
    licenseStartsAt: "Zacina",
    licenseExpiresAt: "Konci",
    licenseDaysLeft: "Zostava dni",
    licenseMaxDevices: "Max. zariadeni",
    licenseActiveDevices: "Aktivne zariadenia",
    licenseActiveDevicesInfo: "Ak sa zariadenie uz nepouziva, jeho miesto sa automaticky uvolni po 75 minutach.",
    licenseCustomerEmail: "Email zakaznika",
    licenseFeatures: "Funkcie",
    licenseFeaturesEmpty: "Ziadne doplnkove funkcie",
    licenseFeatureReadonlyMode: "Rezim pripojenia len na citanie",
    licenseFeatureReadonlyConnectionsFlag: "Pripojenia len na citanie (--readonly-connections/-r)",
    licenseFeatureSsh: "SSH tunelovanie",
    licenseFeatureCluster: "Cluster pripojenia",
    licenseFeatureSentinel: "Sentinel pripojenia",
    licenseFeatureReJSON: "ReJSON (JSON data type)",
    keysSort: {
      on: "Triedenie klucov zapnute",
      off: "Triedenie klucov vypnute"
    },
    cluster: {
      on: "Cluster zapnuty",
      off: "Cluster vypnuty"
    },
    sentinel: {
      on: "Sentinel zapnuty",
      off: "Sentinel vypnuty",
      name: "Nazov Sentinel"
    },
    readonly: {
      on: "Len na citanie zapnute",
      off: "Len na citanie vypnute"
    },
    proSshOnly: "SSH je dostupne v Pro alebo Enterprise.",
    proReadonlyOnly: "Rezim pripojenia len na citanie je dostupny v Pro alebo Enterprise.",
    enterpriseClusterSentinelOnly: "Cluster a Sentinel su dostupne len v Enterprise.",
    theme: {
      light: "Svetla",
      dark: "Tmava enterprise",
      darkNeu: "Tmava",
      darkoBluo: "Darko bluo",
      enterprise: "Enterprise",
      redis: "Redis",
      matrix: "Matrix"
    },
    connected: opts => {
      return `Pripojene: ${opts.name}`;
    },
    tree: "Strom",
    askAuth: "Poziadat o autorizaciu",
    keyboardShortcuts: "Klávesové skratky",
    about: "O aplikácii",
    supportedLanguages: "Podporované jazyky",
    version: "Verzia",
    redisVersion: "Verzia Redis",
    modules: "Moduly",
    shortcutRefresh: "Obnoviť",
    shortcutSearch: "Zamerať vyhľadávanie",
    shortcutNewKey: "Nový kľúč",
    shortcutDisconnect: "Odpojit",
    themeAuto: "Automaticky (systém)",
    shortcutCommandPalette: "Paleta príkazov",
    commandPalette: "Paleta príkazov",
    noResults: "Žiadne výsledky",
    redisCommandsReference: "Redis Príkazy",
    ungrouped: "Bez skupiny",
    grouped: "Zoskupené",
    connectFirst: "Najprv sa pripojte k serveru Redis",
    searchLanguage: "Hľadať jazyk...",
    exportProgress: "Exportovanie kľúčov...",
    importProgress: "Importovanie kľúčov...",
    importPreview: "Náhľad",
    importOverwrite: "Prepísať",
    importSkip: "Preskočiť",
    importConflict: "Ak kľúč už existuje:",
    noKeysToExport: "Žiadne kľúče na export",
    time: "Čas",
    loading: "Načítavanie...",
    autoRefresh: "Auto",
    exportSearchHint: "Exportujú sa iba kľúče zodpovedajúce aktuálnemu vyhľadávaniu",
    importSearchHint: "Import sa vzťahuje na celú databázu, nielen na výsledky vyhľadávania",
    importNoKeys: "V súbore neboli nájdené žiadne kľúče",
  },
  status: {
    dataCopied: "Data su v schranke",
    licenseSaved: "Licencia ulozena",
    exportDone: "Export dokončený",
    indexCreated: "Index vytvorený",
    indexDropped: "Index zmazaný",
    importDone: (opts) => `Import dokončený: ${opts.created} vytvorených, ${opts.skipped} preskočených, ${opts.errors} chýb`,
    nodeRemoved: "Uzol bol odstraneny",
    keyIsNotExisting: "Tento kluc mohol byt vymazany alebo vyprsal.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "Ziadny kluc";
      } else if (opts.keyCount === 1) {
        return "1 kluc";
      } else {
        return `${opts.keyCount} klucov`;
      }
    },
    treeExpandAll: "Rozbalit vsetky listy stromu. Tato operacia moze byt narocna a moze trvat ...",
    noRedisKeys: "V tejto databaze nie su ziadne kluce.",
    redisConnected: "Redis uspesne pripojeny",
    reloadingDataInfo: "Znovu nacitavam informacie o Redis datach",
    added: "Pridane",
    saved: "Aktualizovane",
    cancelled: "Zrusene",
    deleted: "Vymazane",
    savedRedis: "Redis data boli ulozene",
    redisDisconnected: opts => {
      return `Sucasne pripojenie malo chybu: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `Index databazy bol nastaveny na ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `Kluc stromu bol vymazany (${opts.key}).`;
    },
    deletedKey: opts => {
      return `Kluc bol vymazany (${opts.key}).`;
    },
    renamedKey: "Tento kluc bol premenovany",
    ttlChanged: "TTL tohto kluca bol zmeneny",
    notInteger: "Tento vstup nie je cele cislo",
    persisted: "Tento kluc pretrva navzdy",
    set: "Kluc bol nastaveny/pridany"
  },
  code: {
    "delete-connection": "Toto pripojenie bolo vymazane, takze ste odpojeny od tejto Redis instancie.",
    "save-connection": "Toto pripojenie bolo zmenene, takze ste odpojeny od tejto Redis instancie. Mozete sa znovu pripojit.",
    "readonly-connections": "Pridavanie/ukladanie/mazanie pripojeni je len na citanie!",
    "readonly-connection-mode": "Toto pripojenie je v rezime len na citanie!",
    "list-out-of-bounds": "Index tohto zoznamu je mimo rozsah",
    "donation-ware-feature": "Tato funkcia je pritomna v darovanej verzii.",
    "feature-pro-readonly-required": "Rezim pripojenia len na citanie vyzaduje licenciu Pro alebo Enterprise.",
    "feature-pro-ssh-required": "SSH tunelovanie vyzaduje licenciu Pro alebo Enterprise.",
    "feature-enterprise-cluster-sentinel-required": "Cluster a Sentinel vyzaduju licenciu Enterprise.",
    "feature-pro-json-binary-required": "Edit JSON, Upload binary a Download binary vyzaduju licenciu Pro alebo Enterprise.",
    "feature-pro-rejson-required": "ReJSON (JSON data type) requires Pro or Enterprise license.",
    "invalid-json-value": "The value is not valid JSON.",
    "http_auth_required": "Autorizacia potrebna: prosim autentifikujte sa cez HTTP Basic Auth a znovu nacitajte.",
    "auto-connection-failed": "Je mozne, ze pripojenie bolo odstranene a automaticke pripojenie zlyhalo z tohto dovodu.",
    invalid_console_command: "Tento prikaz nefunguje cez GUI."
  },
  licenseReason: {
    LICENSE_VALID: "Licencia je platna",
    LICENSE_INVALID: "Licencia je neplatna",
    LICENSE_MISSING: "Ziadny licencny kluc nie je nastaveny",
    LICENSE_DISABLED: "Licencia je vypnuta v konfiguraci servera",
    LICENSE_NOT_FOUND: "Licencia nebola najdena",
    LICENSE_EXPIRED: "Licencia vyprsala",
    LICENSE_CLEARED: "Licencny kluc bol vymazany",
    LICENSE_MAX_DEVICES_REACHED: "Dosiahnuty maximalny pocet zariadeni",
    PRODUCT_MISMATCH: "Produkt licencie sa nezhoduje"
  },
  licenseStatusValue: {
    active: "Aktivna",
    deleted: "Vymazana",
    all: "Vsetky",
    expired: "Vyprsana",
    missing: "Chyba",
    inactive: "Neaktivna"
  },
  form: {
    error: {
      required: "Povinne",
      port: "Port je medzi 1-65535",
      invalid: "Formular je neplatny"
    },
    connection: {
      label: {
        name: "Nazov",
        group: "Skupina",
        host: "Nazov hostu",
        port: "Port",
        password: "Heslo",
        username: "Pouzivatelske meno"
      }
    },
    treeSettings: {
      maxValueDisplay: "Maximalna dlzka zobrazenia hodnoty",
      maxValueDisplayInfo: "Ak je nastavene na 0, zobrazi uplne hodnoty. Ak je vacsie ako 0, skrati na tuto dlzku. Ak je -1: pre retazce skryje hodnotu az do upravy; pre ostatne typy zobrazi uplny obsah.",
      maxKeys: "Maximalny pocet klucov",
      maxKeysInfo: "Aby GUI nespadlo, obmedzujeme maximalny pocet klucov.",
      keyCount: () => {
        return `Pocet klucov: ${p3xr.state.keysRaw.length}`;
      },
      label: {
        animation: "Pouzit animaciu",
        noAnimation: "Bez animacie",
        jsonFormatTwoSpace: "Formatovat JSON s 2 medzerami",
        jsonFormatFourSpace: "Formatovat JSON so 4 medzerami",
        formName: "Nastavenia Redis",
        searchModeClient: "Rezim vyhladavania na klientovi",
        searchModeServer: "Rezim vyhladavania na serveri",
        searchModeStartsWith: "Vyhladavanie zacina na",
        searchModeIncludes: "Vyhladavanie obsahuje"
      },
      field: {
        treeSeparator: "Separator stromu",
        treeSeparatorSelector: "Volba separatora stromu",
        page: "Pocet strankovania stromu",
        keyPageCount: "Pocet strankovania klucov",
        keysSort: "Triedit kluce",
        searchMode: "Rezim vyhladavania",
        searchModeStartsWith: "Vyhladavanie zacina na / obsahuje"
      },
      error: {
        keyPageCount: "Pocet strankovania klucov musi byt cele cislo medzi 5 - 100",
        page: "Pocet strankovania musi byt cele cislo medzi 10 - 5000",
        maxValueDisplay: "Maximalna hodnota zobrazenia musi byt cele cislo medzi -1 a 32768",
        maxKeys: "Maximalny pocet klucov musi byt cele cislo medzi 100 a 100000"
      }
    },
    key: {
      label: {
        formName: {
          add: "Pridat novy Redis kluc",
          edit: "Upravit Redis kluc",
          append: "Pridat k existujucemu Redis klucu"
        }
      },
      field: {
        streamTimestamp: "Casova znacka",
        key: "Kluc",
        type: "Typ",
        index: "Index",
        hashKey: "Hash kluc",
        score: "Skore",
        value: "Hodnota"
      },
      error: {
        streamTimestamp: "Casova znacka je povinna, bud vo formate Redis alebo ako *",
        key: "Kluc ma aspon jeden znak",
        hashKey: "Hash kluc tabulky ma aspon jeden znak",
        score: "Skore zoradenej mnoziny je povinne",
        value: "Hodnota je povinna"
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
      title: "Hľadať",
      index: "Index",
      query: "Dopyt",
      results: "Výsledky",
      noIndex: "Žiadne indexy",
      createIndex: "Vytvoriť index",
      dropIndex: "Zmazať index",
      indexInfo: "Info o indexe",
      indexName: "Názov indexu",
      prefix: "Prefix kľúča (voliteľné)",
      fieldName: "Názov poľa",
    },
    monitor: {
      title: "Monitorovanie",
      memory: "Pamäť",
      opsPerSec: "Operácií/s",
      clients: "Klienti",
      blocked: "Blokovaní",
      hitsMisses: "Úspešnosť",
      networkIo: "Sieť I/O",
      slowLog: "Pomalý log",
      totalCommands: "Celkom",
      expired: "Vypršané",
      evicted: "Vyradené",
      clientList: "Zoznam klientov",
      topKeys: "Najväčšie kľúče podľa pamäte",
      killClient: "Zabiť klienta",
      clientKilled: "Klient zabitý",
      confirmKillClient: "Naozaj chcete ukončiť tohto klienta?",
      noKeys: "Žiadne kľúče",
      noClients: "Žiadni klienti",
    },
    overview: {
      noConnected: "Nie je ziadne pripojenie k Redis.",
      overviewClients: "Zoznam pripojenych podla poctu klientov",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "1 klient";
        }
        return `${opt.length} klientov`;
      }
    },
    key: {
      label: {
        key: "Kluc",
        encoding: "Kodovanie",
        length: "Velkost",
        ttl: "TTL",
        ttlTitle: "Doba zivotnosti",
        type: "Typ",
        ttlNotExpire: "nevyprsi",
        lengthString: "bajtov",
        lengthItem: "poloziek",
        actions: "Akcie"
      },
      list: {
        table: {
          index: "Index",
          value: "Hodnota"
        }
      },
      hash: {
        table: {
          hashkey: "Hash kluc",
          value: "Hodnota"
        }
      },
      set: {
        table: {
          value: "Clen"
        }
      },
      zset: {
        table: {
          value: "Clen",
          score: "Skore"
        }
      },
      stream: {
        table: {
          timestamp: "ID casovej znacky",
          field: "Pole",
          value: "Hodnota"
        }
      }
    },
    treeControls: {
      settings: "Nastavenia stromu",
      expandAll: "Rozbalit vsetko",
      collapseAll: "Zbalit vsetko",
      search: {
        search: "Hladat v klucoch",
        clear: "Vymazat aktualne vyhladavanie",
        placeholderClient: "Hladat na strane klienta",
        placeholderServer: "Hladat na strane servera",
        info: "Vyhladavanie na strane klienta znamena, ze sa text porovnava so vstupom vyhladavania. Vyhladavanie na strane servera znamena, ze sa hladaju vzory v klucoch ako *{hladany-text}*. Pre velke sady vyhladavania je lepsie pouzit vyhladavanie na serveri. Pre mensie sady je lepsie pouzit vyhladavanie na klientovi." + ` Ak pocet klucov presahuje ${p3xr.settings.maxLightKeysCount}, mozete hladat iba na serveri.`,
        largeSetInfo: "Vo velkej sade je vyhladavanie na strane klienta vypnute, takze momentalne je mozne iba vyhladavanie na serveri.",
        infoDetails: "Ak chcete zistit ako vyhladavanie funguje, skontrolujte nastavenia"
      },
      pager: {
        next: "Dalsi",
        prev: "Predchadzajuci",
        first: "Prvy",
        last: "Posledny"
      }
    }
  },
  time: {
    loading: "Načítavanie...",
    years: "rokov",
    months: "mesiacov",
    days: "dni",
    year: "rok",
    month: "mesiac",
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
