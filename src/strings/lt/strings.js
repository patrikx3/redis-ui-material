const strings = {
  error: {
    cleared_license: "Išvalyta licencija",
    invalid_license: "Neteisinga licencija",
    license_max_devices_reached: "Pasiektas maksimalus įrenginio vietų skaičius",
    license_readonly: "Licenciją galima pakeisti tik iš serverio terminalo.",
    server_error: "Serverio klaida, bandykite dar kartą"
  },
  title: {
    donate: "Paaukoti",
    jsonRecursive: "Išplečiant visus lapus",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "Kairiajame apatiniame meniu galite pasirinkti Redis jungtį.",
    statistics: "Statistika",
    error: "Klaida",
    connectingRedis: "Jungiamasi prie Redis...",
    socketioConnectError: "Socket.IO klaida",
    db: "DB",
    server: "Serveris",
    clients: "Klientai",
    memory: "Atmintis",
    persistence: "Patvarumas",
    stats: "Statistika",
    replication: "Replikacija",
    cpu: "CPU",
    cluster: "Cluster",
    modules: "Moduliai",
    errorstats: "Klaidų statistika",
    commandstats: "Komandų statistika",
    latencystats: "Vėlinimo statistika",
    keysizes: "Raktų dydžiai",
    threads: "Gijos",
  },
  confirm: {
    dropIndex: "Ar tikrai norite ištrinti šį indeksą?",
    uploadBuffer: "Ar tikrai įkelsite šiuos dvejetainius duomenis?",
    uploadBufferDone: "Dvejetainiai duomenys įkeliami",
    uploadBufferDoneAndSave: "Dvejetainiai duomenys įkeliami ir išsaugomi serveryje",
    title: "Patvirtinti",
    alert: "Įspėjimas",
    info: "Informacija",
    deleteListItem: "Ar tikrai ištrinsite šį sąrašo elementą?",
    deleteHashKey: "Ar tikrai ištrinsite šį maišos rakto elementą?",
    deleteStreamTimestamp: "Ar tikrai ištrinsite šią srauto laiko žymą?",
    deleteSetMember: "Ar tikrai ištrinsite šį rinkinio narį?",
    deleteZSetMember: "Ar tikrai ištrinsite šį surūšiuoto rinkinio narį?",
    deleteConnection: "Patvirtinti",
    deleteConnectionText: "Ar tikrai ištrinsite šį Redis ryšį?",
    deleteNode: "Ar tikrai ištrinsite šį Redis mazgą?",
    deleteAllKeys: opts => {
      return `Ištrinti šį medį ir visus jo raktus (${opts.key})?`;
    },
    socketioConnectError: "Socket.IO negali prisijungti prie serverio, galite perkrauti ir patys bandyti išspręsti ryšio klaidą, klientas pats nežino, kaip ją išspręsti.",
    socketioAuthRequired: "Reikalingas Socket.IO leidimas. Autentifikuokite naudodami HTTP Basic Auth (naudotojo vardą / slaptažodį) ir įkelkite iš naujo.",
    deleteKey: "Ar tikrai ištrinsite šį raktą?",
    rename: {
      title: "Ar tikrai pervardysite šį raktą?",
      textContent: "Šis veiksmas visam laikui pervadina raktą.",
      placeholder: "Raktas Redis (būtinas)"
    },
    ttl: {
      title: "Ar tikrai norite pakeisti šio rakto TTL?",
      textContent: "Pakeitus TTL atnaujinamas šio rakto gyvavimo laikas. Palikite tuščią, kad šis raktas liktų amžinai.",
      placeholder: "Redis rakto TTL (sveikasis skaičius arba tuščias)",
      placeholderPlaceholder: "Tuščia reiškia, kad ji išlieka amžinai; kitu atveju įveskite sveikąjį skaičių.",
      convertTextToTime: "Konvertuoti tekstą į laiką",
      convertTextToTimePlaceholder: "Pvz. 1d bus 86400"
    },
    license: {
      title: "Nustatyti licenciją",
      textContent: "If you want to use paid features, please contact support@corifeus.com to request a license. Pricing is Pro 400 HUF/month (€1/month) or 4,000 HUF/year (€10/year), and Enterprise 1,200 HUF/month (€3/month) or 12,000 HUF/year (€30/year). Yearly is 10x monthly. With 27% VAT, totals are Pro 500 HUF/month (€1.27/month) or 5,100 HUF/year (€12.70/year), Enterprise 1,500 HUF/month (€3.81/month) or 15,200 HUF/year (€38.10/year). License validation requires internet access. Default license includes 5 seats. If you need more seats, contact us at support@corifeus.com.",
      placeholder: "Licencijos raktas"
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
    copy: "Kopijuoti",
    downloadBuffer: "Parsisiųsti dvejetainį",
    setBuffer: "Įkelti dvejetainį failą",
    exportKeys: "Eksportuoti raktus",
    exportAllKeys: (opts) => `Eksportuoti visus ${opts.count} raktus`,
    exportSearchResults: (opts) => `Eksportuoti ${opts.count} rezultatų`,
    importKeys: "Importuoti raktus",
    saveWithFormatJson: "Išsaugoti naudojant formatą",
    formatJson: "Json formatas",
    wrap: "Apvyniokite",
    unwrap: "Išvynioti",
    downloadJson: "Atsisiųskite JSON",
    pubsubMonitor: "PubSub monitorius",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "Kalba",
    ok: "Gerai",
    addKey: "Pridėti prie šio rakto",
    addKeyRoot: "Pridėkite šakninį raktą",
    reloadKey: "Iš naujo įkelti raktą",
    reload: "Įkelti iš naujo",
    close: "Uždaryti",
    commands: "Komandos",
    view: "Žiūrėti",
    statistics: "Statistika",
    refresh: "Atnaujinti",
    pause: "Pristabdyti",
    resume: "Tęsti",
    clear: "Aišku",
    rename: "Pervardyti",
    main: "Duomenų bazė",
    cancel: "Atšaukti",
    theme: "Tema",
    github: "GitHub",
    githubRepo: "Saugykla",
    githubRelease: "Išleidimai",
    githubChangelog: "Pakeitimų žurnalas",
    info: "Info",
    settings: "Nustatymai",
    connect: "Prisijunkite",
    disconnect: "Atsijungti",
    overview: "Apžvalga",
    console: "konsolė",
    noConnections: "Nėra ryšių, pridėkite ryšį nustatymų meniu.",
    noConnectionsInSettings: "Nėra jokių ryšių, aukščiau galite pridėti NAUJĄ RYŠĮ.",
    connectionAdd: "Naujas ryšys",
    addGroup: "Pridėti grupę",
    extend: "Prailginti",
    collapse: "Sutraukti",
    add: "Pridėti",
    edit: "Redaguoti",
    save: "Išsaugoti",
    ttl: "Nustatyti TTL",
    license: "Nustatyti licenciją",
    delete: "Ištrinti",
    remove: "Pašalinti",
    sure: "Žinoma",
    testConnection: "Bandomasis ryšys",
    getKey: "Įkeliamas Redis raktas ir susiję duomenys...",
    jsonViewShow: "Ekranas JSON",
    jsonViewEditor: "Redaguoti JSON",
    quickConsole: "Greitoji konsolė",
  },
  label: {
    id: {
      nodeId: "Mazgo ID",
      id: "Ryšio ID",
      info: "Jei nenorite keisti ypatybių: sshPassword, sshPrivateKey, slaptažodžio, tlsCrt, tlsKey, tlsCa, įveskite ryšio ID šiose ypatybėse, kad ypatybių reikšmės liktų nepakitusios. Jei norite, kad mazgo slaptažodis būtų tokia pati, tada įveskite mazgo ID į mazgo slaptažodį."
    },
    secureFeature: "Jei matote reikšmę, kuri prasideda P3X ir atrodo taip pat, tai yra saugi funkcija. Norėdami pakeisti nustatymus, tiesiog pakeiskite ��iuos nustatymus tuščiais ar kažkuo kitu ir jie bus išsaugoti. Jei nustatymų nepakeisite, nustatymai išliks tokie, kokie yra serveryje.",
    aiTranslating: "Translating...",
    aiSettings: "AI nustatymai",
    aiGroqApiKey: "Groq API raktas",
    aiGroqApiKeyInfo: "Neprivaloma. Savo Groq API raktas geresniam veikimui. Gaukite nemokamą raktą",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "AI API raktas išsaugotas",
    aiGroqApiKeyInvalid: "Invalid Groq API key",
    aiGroqApiKeyNotSet: "Nenustatyta (serverio numatytasis)",
    aiEnabled: "AI Enabled",
    aiEnabledYes: "Yes",
    aiEnabledNo: "No",
    aiRouteViaNetwork: "Route via network.corifeus.com",
    aiRoutingDirect: "Queries go directly to Groq using your own API key, bypassing network.corifeus.com.",
    aiRoutingNetwork: "AI queries are routed through network.corifeus.com. If you have your own free Groq API key, you can turn off this switch to route directly to Groq without network.corifeus.com.",
    ssh: {
      on: "SSH įjungta",
      off: "SSH išjungtas",
      sshHost: "SSH Pagrindinis kompiuteris",
      sshPort: "SSH prievadas",
      sshUsername: "SSH vartotojo vardas",
      sshPassword: "SSH slaptažodis",
      sshPrivateKey: "SSH privatus raktas"
    },
    isBuffer: opts => `[object ArrayBuffer] reiškia, kad reikšmė yra dvejetainiai duomenys arba reikšmė yra didesnė nei ${opts.maxValueAsBuffer}`,
    streamValue: `Srauto laukas ir vertė yra vienareikšmė. Pvz.: 1 laukas 1 vertė "2 laukas" "2 reikšmė"`,
    streamTimestampId: `„*“ reiškia automatiškai sugeneruotą arba specifikaciją kaip <millisecondsTime>-<sequenceNumber>`,
    unableToLoadKey: ({
      key
    }) => {
      return `Nepavyko įkelti šio rakto: ${key}. Galimas dalykas, raktas buvo ištrintas. Tiksli klaida yra konsolėje.`;
    },
    bigJson: "Šis JSON objektas yra didesnis nei 10 kb, todėl įsitikinkite, kad žinote, ką darote, nes kai kurios funkcijos gali būti lėtos.",
    addNode: "Pridėti mazgą",
    validateJson: "Patvirtinkite JSON",
    reducedFunction: `Sumažintas funkcionalumas`,
    tooManyKeys: opts => {
      return `Visoms maksimalioms funkcijoms leidžiamų klavišų suma yra ${opts.maxLightKeysCount} skaičiuoti. Šioje duomenų bazėje iš viso yra daugiau nei leidžiami raktai ${opts.count}. Raktų rūšiavimas ir papildoma išgalvota medžio informacija išjungta. Paieška vyksta tik serveryje, o ne kliento paieška.`;
    },
    redisCommandNotFound: "Nerasta komandų Redis atitikmenų...",
    treeKeyStore: `Rūšiavimas (natūralus palyginimas) vykdomas kliente, dar žinomame kaip naršyklė, o tai reiškia, kad už didelius didelius rinkinius, pvz., daugiau nei 10 000 raktų, taikoma bauda, tai gali pridėti šiek tiek laiko puslapio atvaizdavimui. Redis raktų rūšiavimo nėra, tik taip.`,
    socketIoTimeout: options => {
      return `Baigėsi šios užklausos Socket.IO skirtasis laikas (maks ${options.timeout / 1000} sekundės)...`;
    },
    resizerInfo: options => {
      return `Minimalus kairiojo arba dešiniojo skydelio plotis yra ${options.width}px`;
    },
    jsonViewNotParsable: "Šios reikšmės JSON negalima analizuoti  ",
    ttlTitle: "Nustatykite TTL per kelias sekundes",
    passwordSecure: "Slaptažodis gali būti tuščias, bet vis tiek bus rodomi simboliai, tai yra saugos funkcija.",
    tlsWithoutCert: "Įgalinti TLS be papildomo sertifikato",
    tlsRejectUnauthorized: "Atmesti neteisėtą sertifikatą",
    tlsSecure: "Jei matote TLS konfigūraciją, kuri prasideda P3X arba visi TLS nustatymai atrodo taip pat, tai yra saugi funkcija. Norėdami pakeisti nustatymus, tiesiog pakeiskite ��iuos nustatymus tuščiais ar kažkuo kitu ir jie bus išsaugoti. Jei nepakeisite TLS nustatymų, nustatymai išliks tokie, kokie yra serveryje.",
    treeSeparatorEmpty: "Jei medžio separatorius tuščias, medis neturės įdėtų mazgų, tik gryną sąrašą",
    treeSeparatorEmptyNote: "Nėra įdėtų mazgų, tik grynas sąrašas",
    welcomeConsole: "Sveiki atvykę į Redis konsolę",
    welcomeConsoleInfo: "Žymeklio AUKŠTYN arba ŽEMYN istorija įjungta",
    redisListIndexInfo: "Tuščia, kad pridėtumėte, -1, kad pridėtumėte arba išsaugotumėte rodomoje pozicijoje.",
    console: "konsolė",
    connectiondAdd: "Pridėti ryšį",
    connectiondEdit: "Redaguoti ryšį",
    connectiondView: "Žiūrėti ryšį",
    connections: "Jungtys",
    licenseInfo: "Licencija",
    licenseEditable: "Licencija redaguojama",
    licenseEditableYes: "Taip",
    licenseEditableNo: "Nr",
    licenseTerminalOnly: "Licenciją galima konfigūruoti tik iš serverio terminalo.",
    licenseTierPolicyTitle: "Pakopų politika",
    licenseTierPolicyText: "<h4>Free</h4>core Redis UI only; no SSH tunneling, no Readonly connection mode, no Cluster/Sentinel, no Edit JSON/Upload binary/Download binary, no ReJSON.<br/><strong>Price: 0 HUF/month (€0/month).</strong><br/><br/><h4>Pro</h4>SSH tunneling, Readonly connection mode (including --readonly-connections/-r), Edit JSON, Upload binary, Download binary, ReJSON.<br/><strong>Base price: 400 HUF/month (€1/month) or 4,000 HUF/year (€10/year).</strong><br/><strong>Total with 27% VAT: 500 HUF/month (€1.27/month) or 5,100 HUF/year (€12.70/year).</strong><br/><br/><h4>Enterprise</h4>SSH tunneling, Cluster and Sentinel, plus Edit JSON, Upload binary, Download binary, ReJSON; --readonly-connections/-r also works.<br/><strong>Base price: 1,200 HUF/month (€3/month) or 12,000 HUF/year (€30/year).</strong><br/><strong>Total with 27% VAT: 1,500 HUF/month (€3.81/month) or 15,200 HUF/year (€38.10/year).</strong><br/><br/><h4>Yearly rule</h4>Yearly price is 10x the monthly price.<br/><br/><h4>Seats</h4>Default license includes 5 seats. If you need more seats, contact us at <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><br/><h4>Enterprise trial</h4>10 days free for anyone with a real existing email address (non-test email).<br/><hr/><h4>Billing info in e-mail</h4>Name, Billing e-mail, Country code, Postal code, City, Address, VAT ID (optional).<br/><br/><h4>Payment</h4>PayPal payment is available only in HUF (forint); after sending the money @ <a href='https://paypal.me/corifeus'>https://paypal.me/corifeus</a> I will send you an invoice. All payments are non-refundable.<br/><br/><h4>VAT</h4>VAT is added to the price (27% in Hungary).<br/><hr/><h4>Contact</h4>If you want to say hi or have a question, contact <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><hr/><h4>Language</h4>Invoice and license e-mail communication is in English. Invoice currency is HUF.<br/><hr/><h4>Note</h4>License validation requires internet access.",
    licenseState: "valstybė",
    licenseStateActive: "Aktyvus",
    licenseStateInactive: "Neaktyvus",
    licenseStateNoLicense: "Licencijos nėra",
    licenseKeyMasked: "Išsaugotas raktas",
    licenseTier: "Pakopa",
    licenseValid: "Galioja",
    licenseStatus: "Licencijos būsena",
    licenseReason: "Priežastis",
    licenseCheckedAt: "Patikrintas adresu",
    licenseStartsAt: "Prasideda val",
    licenseExpiresAt: "Galiojimas baigiasi val",
    licenseDaysLeft: "Liko dienos",
    licenseMaxDevices: "Max įrenginiai",
    licenseActiveDevices: "Aktyvūs įrenginiai",
    licenseActiveDevicesInfo: "Jei prietaisas nebenaudojamas, jo sėdynė automatiškai atleidžiama po 75 minučių.",
    licenseCustomerEmail: "Kliento el",
    licenseFeatures: "Savybės",
    licenseFeaturesEmpty: "Jokių papildomų funkcijų",
    licenseFeatureReadonlyMode: "Tik skaitymo ryšio režimas",
    licenseFeatureReadonlyConnectionsFlag: "Tik skaitymo jungtys (--readonly-connections/-r)",
    licenseFeatureSsh: "SSH tuneliavimas",
    licenseFeatureCluster: "Cluster jungtys",
    licenseFeatureSentinel: "Sentinel jungtys",
    licenseFeatureReJSON: "ReJSON (duomenų tipas JSON)",
    keysSort: {
      on: "Raktų rūšiavimas įjungtas",
      off: "Raktų rūšiavimas"
    },
    cluster: {
      on: "Cluster įjungta",
      off: "Cluster išjungtas"
    },
    sentinel: {
      on: "Sentinel įjungta",
      off: "Sentinel išjungtas",
      name: "Sentinel pavadinimas"
    },
    readonly: {
      on: "Tik skaityti",
      off: "Tik skaitymui išjungtas"
    },
    proSshOnly: "„SSH“ yra „Pro“ arba „Enterprise“.",
    proReadonlyOnly: "Tik skaitymo ryšio režimas galimas „Pro“ arba „Enterprise“.",
    enterpriseClusterSentinelOnly: "Cluster ir Sentinel pasiekiami tik įmonėje.",
    theme: {
      light: "Šviesa",
      dark: "Tamsi įmonė",
      darkNeu: "Tamsus",
      darkoBluo: "Darko mėlyna",
      enterprise: "Įmonė",
      redis: "Redis",
      matrix: "Matrica"
    },
    connected: opts => {
      return `Prisijungta: ${opts.name}`;
    },
    tree: "Medis",
    askAuth: "Paprašykite leidimo",
    keyboardShortcuts: "Keyboard Shortcuts",
    about: "About",
    supportedLanguages: "Supported Languages",
    version: "Version",
    redisVersion: "Redis Version",
    modules: "Moduliai",
    shortcutRefresh: "Refresh",
    shortcutSearch: "Focus Search",
    shortcutNewKey: "New Key",
    shortcutDisconnect: "Atsijungti",
    themeAuto: "Auto (system)",
    shortcutCommandPalette: "Command Palette",
    commandPalette: "Command Palette",
    noResults: "No results",
    redisCommandsReference: "Redis Komandos",
    ungrouped: "Be grupės",
    grouped: "Grouped",
    connectFirst: "Pirmiausia prisijunkite prie Redis serverio",
    searchLanguage: "Ieškoti kalbos...",
    exportProgress: "Eksportuojami raktai...",
    importProgress: "Importuojami raktai...",
    importPreview: "Peržiūra",
    importOverwrite: "Perrašyti",
    importSkip: "Praleisti",
    importConflict: "Jei raktas jau egzistuoja:",
    noKeysToExport: "Nėra raktų eksportavimui",
    time: "Laikas",
    loading: "Kraunama...",
    autoRefresh: "Auto",
    exportSearchHint: "Eksportuojami tik raktai, atitinkantys dabartinę paiešką",
    importSearchHint: "Importas taikomas visai duomenų bazei, ne tik paieškos rezultatams",
    importNoKeys: "Faile nerasta raktų",
  },
  status: {
    dataCopied: "Duomenys yra iškarpinėje",
    licenseSaved: "Licencija išsaugota",
    exportDone: "Eksportas baigtas",
    indexCreated: "Indeksas sukurtas",
    indexDropped: "Indeksas ištrintas",
    importDone: (opts) => `Importas baigtas: ${opts.created} sukurta, ${opts.skipped} praleista, ${opts.errors} klaidų`,
    nodeRemoved: "Mazgas pašalintas",
    keyIsNotExisting: "Šis raktas galėjo būti ištrintas arba pasibaigęs.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "Nėra rakto";
      } else if (opts.keyCount === 1) {
        return "1 raktas";
      } else {
        return `${opts.keyCount} raktus`;
      }
    },
    treeExpandAll: "Išskleiskite visus medžių lapus. Ši operacija gali būti brangi ir užtrukti...",
    noRedisKeys: "Šioje duomenų bazėje nėra raktų.",
    redisConnected: "Redis sėkmingai prijungtas",
    reloadingDataInfo: "Iš naujo įkeliama Redis duomenų informacija",
    added: "Pridėta",
    saved: "Atnaujinta",
    cancelled: "Atšaukta",
    deleted: "Ištrinta",
    savedRedis: "Redis duomenys išsaugomi",
    redisDisconnected: opts => {
      return `Dabartiniame ryšyje įvyko klaida: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `Db indeksas nustatytas į ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `Medžio raktas buvo ištrintas (${opts.key}).`;
    },
    deletedKey: opts => {
      return `Raktas buvo ištrintas (${opts.key}).`;
    },
    renamedKey: "Šis raktas buvo pervadintas",
    ttlChanged: "Šio rakto TTL buvo pakeistas",
    notInteger: "Ši įvestis nėra sveikasis skaičius",
    persisted: "Šis raktas išlieka amžinai",
    set: "Raktas nustatytas/pridėtas"
  },
  code: {
    "delete-connection": "Šis ryšys buvo ištrintas, todėl esate atjungtas nuo šio Redis egzemplioriaus.",
    "save-connection": "Šis ryšys buvo pakeistas, todėl esate atjungtas nuo šio Redis egzemplioriaus. Galite prisijungti iš naujo.",
    "readonly-connections": "Ryšiai pridėti / išsaugoti / ištrinti yra tik skaitomi!",
    "readonly-connection-mode": "Šis ryšys yra tik skaitymo režimas!",
    "list-out-of-bounds": "Šis sąrašo indeksas viršija ribas",
    "donation-ware-feature": "Ši funkcija yra donorystės versijoje.",
    "feature-pro-readonly-required": "Tik skaitymo ryšio režimui reikalinga Pro arba Enterprise licencija.",
    "feature-pro-ssh-required": "SSH tuneliavimui reikalinga Pro arba Enterprise licencija.",
    "feature-enterprise-cluster-sentinel-required": "Cluster ir Sentinel reikalinga įmonės licencija.",
    "feature-pro-json-binary-required": "Redaguoti JSON, įkelti dvejetainį ir atsisiųsti dvejetainį failą reikalauja Pro arba Enterprise licencijos.",
    "feature-pro-rejson-required": "ReJSON (duomenų tipas JSON) reikalinga Pro arba Enterprise licencija.",
    "invalid-json-value": "Vertė neteisinga JSON.",
    "http_auth_required": "Reikalingas įgaliojimas: patvirtinkite tapatybę naudodami HTTP Basic Auth ir įkelkite iš naujo.",
    "auto-connection-failed": "Gali būti, kad ryšys buvo pašalintas ir dėl to nepavyko prisijungti.",
    invalid_console_command: "Ši komanda neveikia naudojant GUI."
  },
  licenseReason: {
    LICENSE_VALID: "Licencija galioja",
    LICENSE_INVALID: "Licencija negalioja",
    LICENSE_MISSING: "Licencijos raktas nenustatytas",
    LICENSE_DISABLED: "Licencija išjungta serverio konfigūracijoje",
    LICENSE_NOT_FOUND: "Licencija nerasta",
    LICENSE_EXPIRED: "Licencija pasibaigė",
    LICENSE_CLEARED: "Licencijos raktas buvo išvalytas",
    LICENSE_MAX_DEVICES_REACHED: "Pasiektas maksimalus įrenginio vietų skaičius",
    PRODUCT_MISMATCH: "Licencijuotas produktas neatitinka"
  },
  licenseStatusValue: {
    active: "Aktyvus",
    deleted: "Ištrinta",
    all: "Visi",
    expired: "Baigėsi galiojimo laikas",
    missing: "Trūksta",
    inactive: "Neaktyvus"
  },
  form: {
    error: {
      required: "Reikalingas",
      port: "Uostas yra tarp 1-65535",
      invalid: "Forma neteisinga"
    },
    connection: {
      label: {
        name: "Vardas",
        group: "Group",
        host: "Pagrindinio kompiuterio pavadinimas",
        port: "Uostas",
        password: "Slaptažodis",
        username: "Vartotojo vardas"
      }
    },
    treeSettings: {
      maxValueDisplay: "Maksimalios vertės rodymo eilutės ilgis",
      maxValueDisplayInfo: "Jei nustatyta į 0, rodyti visas vertes. Jei didesnis nei 0, sutrumpinkite iki šio ilgio. Jei -1: eilutėms, slėpkite reikšmę iki redagavimo; kitiems tipams rodyti visą turinį.",
      maxKeys: "Maksimalus raktų skaičius",
      maxKeysInfo: "Kad GUI nesudužtų, apribojame maksimalų raktų skaičių.",
      keyCount: () => {
        return `Raktų skaičius: ${p3xr.state.keysRaw.length}`;
      },
      label: {
        animation: "Naudokite animaciją",
        noAnimation: "Nėra animacijos",
        jsonFormatTwoSpace: "Formatas JSON su 2 tarpais",
        jsonFormatFourSpace: "Formatas JSON su 4 tarpais",
        formName: "Redis nustatymai",
        searchModeClient: "Kliento paieškos režimas",
        searchModeServer: "Serverio paieškos režimas",
        searchModeStartsWith: "Paieška prasideda nuo režimo",
        searchModeIncludes: "Paieška apima režimą"
      },
      field: {
        treeSeparator: "Medžių separatorius",
        treeSeparatorSelector: "Medžių separatoriaus parinkiklis",
        page: "Medžių puslapių skaičius",
        keyPageCount: "Raktų puslapių skaičius",
        keysSort: "Rūšiuoti raktus",
        searchMode: "Paieškos režimas",
        searchModeStartsWith: "Paieška prasideda nuo / apima"
      },
      error: {
        keyPageCount: "Pagrindinis puslapių skaičius turi būti sveikasis skaičius nuo 5 iki 100",
        page: "Puslapių skaičius turi būti sveikasis skaičius nuo 10 iki 5000",
        maxValueDisplay: "Didžiausia rodoma reikšmė turi būti sveikasis skaičius nuo –1 iki 32768",
        maxKeys: "Didžiausia raktų skaičiaus vertė turi būti sveikasis skaičius nuo 100 iki 100 000"
      }
    },
    key: {
      label: {
        formName: {
          add: "Pridėkite naują Redis raktą",
          edit: "Redaguoti Redis raktą",
          append: "Pridėti prie esamo Redis rakto"
        }
      },
      field: {
        streamTimestamp: "Laiko žyma",
        key: "Raktas",
        type: "Tipas",
        index: "Rodyklė",
        hashKey: "Maišos raktas",
        score: "Rezultatas",
        value: "Vertė"
      },
      error: {
        streamTimestamp: "Būtina nurodyti laiko žymą Redis formatu arba kaip *",
        key: "Svarbiausia yra bent vienas simbolis",
        hashKey: "Maišos lentelės raktą sudaro bent vienas simbolis",
        score: "Reikalingas surūšiuotas rinkinio balas",
        value: "Reikšmė būtina"
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
      title: "Paieška",
      index: "Indeksas",
      query: "Užklausa",
      results: "Rezultatai",
      noIndex: "Indeksų nerasta",
      createIndex: "Sukurti indeksą",
      dropIndex: "Ištrinti indeksą",
      indexInfo: "Indekso info",
      indexName: "Indekso pavadinimas",
      prefix: "Rakto prefiksas (neprivaloma)",
      fieldName: "Lauko pavadinimas",
    },
    monitor: {
      title: "Stebėjimas",
      memory: "Atmintis",
      opsPerSec: "Operacijų/s",
      clients: "Klientai",
      blocked: "Užblokuota",
      hitsMisses: "Pataikymo rodiklis",
      networkIo: "Tinklas I/O",
      slowLog: "Lėtas žurnalas",
      totalCommands: "Viso",
      expired: "Pasibaigę",
      evicted: "Pašalinti",
      clientList: "Klientų sąrašas",
      topKeys: "Didžiausi raktai pagal atmintį",
      killClient: "Nutraukti klientą",
      clientKilled: "Klientas nutrauktas",
      confirmKillClient: "Ar tikrai norite nutraukti šį klientą?",
      noKeys: "Nėra raktų",
      noClients: "Nėra klientų",
    },
    overview: {
      noConnected: "Nėra ryšio su Redis.",
      overviewClients: "Išvardykite sujungtus pagal klientų skaičių",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "1 klientas";
        }
        return `${opt.length} klientų`;
      }
    },
    key: {
      label: {
        key: "Raktas",
        encoding: "Kodavimas",
        length: "Dydis",
        ttl: "TTL",
        ttlTitle: "Laikas gyventi",
        type: "Tipas",
        ttlNotExpire: "nesibaigia",
        lengthString: "baitų",
        lengthItem: "daiktų",
        actions: "Veiksmai"
      },
      list: {
        table: {
          index: "Rodyklė",
          value: "Vertė"
        }
      },
      hash: {
        table: {
          hashkey: "Hashkey",
          value: "Vertė"
        }
      },
      set: {
        table: {
          value: "narys"
        }
      },
      zset: {
        table: {
          value: "narys",
          score: "Rezultatas"
        }
      },
      stream: {
        table: {
          timestamp: "Laiko žymos ID",
          field: "Laukas",
          value: "Vertė"
        }
      }
    },
    treeControls: {
      settings: "Medžio nustatymai",
      expandAll: "Išskleisti viską",
      collapseAll: "Sutraukti viską",
      search: {
        search: "Ieškokite raktuose",
        clear: "Išvalykite dabartinę paiešką, kad nustatytumėte tuščią",
        placeholderClient: "Ieškokite kliento pusėje",
        placeholderServer: "Ieškoti serverio pusėje",
        info: "Kliento pusės paieška reiškia, kad ji atitinka tekstą paieškos įvestyje. Serverio pusės paieška reiškia, kad tai yra kaip paieška raktų šablonuose kaip *{search-text}*. Dideliems paieškos rinkiniams geriau naudoti paiešką serverio pusėje. Mažesniems paieškos rinkiniams geriau naudoti kliento pusės paieškos režimą." + ` Jei klavišų skaičiavimas baigėsi ${p3xr.settings.maxLightKeysCount}, galite ieškoti tik serverio pusėje.`,
        largeSetInfo: "Dideliame rinkinyje kliento pusės paieška išjungta. taigi šiuo metu galima tik paieška serverio pusėje.",
        infoDetails: "Norėdami sužinoti, kaip veikia paieška, peržiūrėkite nustatymus"
      },
      pager: {
        next: "Kitas",
        prev: "Ankstesnis",
        first: "Pirma",
        last: "Paskutinis"
      }
    }
  },
  time: {
    loading: "Kraunama...",
    years: "metų",
    months: "mėnesių",
    days: "dienų",
    year: "metų",
    month: "mėnuo",
    day: "dieną"
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
