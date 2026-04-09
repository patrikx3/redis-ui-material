const strings = {
  error: {
    server_error: "Napaka strežnika, poskusite znova",
    aiPromptTooLong: "AI poziv je predolg (največ 4096 znakov)",
  },
  title: {
    donate: "Donirajte",
    donateTitle: "Podprite P3X Redis UI",
    donateDescription: "P3X Redis UI je brezplačen odprtokodni projekt. Stroški vzdrževanja aplikacije, funkcij AI, Docker slik, strežnikov in infrastrukture prihajajo iz žepa razvijalca. Če se vam zdi to orodje koristno, razmislite o podpori njegovega nadaljnjega razvoja z donacijo. Vsak prispevek pomaga ohranjati projekt živ in rastoč. Hvala!",
    jsonRecursive: "Razširitev vseh listov",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "V levem spodnjem meniju lahko izberete povezavo Redis za povezavo.",
    statistics: "Statistika",
    error: "Napaka",
    connectingRedis: "Povezovanje z Redis ...",
    socketioConnectError: "Socket.IO Napaka",
    db: "DB",
    server: "Strežnik",
    clients: "Stranke",
    memory: "Spomin",
    persistence: "Vztrajnost",
    stats: "Statistika",
    replication: "Replikacija",
    cpu: "CPU",
    cluster: "Cluster",
    modules: "Moduli",
    errorstats: "Statistike napak",
    commandstats: "Statistike ukazov",
    latencystats: "Statistike zakasnitev",
    keysizes: "Velikosti ključev",
    threads: "Niti"
  },
  confirm: {
    dropIndex: "Ali ste prepričani, da želite izbrisati ta indeks?",
    uploadBuffer: "Ali ste prepričani, da želite naložiti te binarne podatke?",
    uploadBufferDone: "Binarni podatki so naloženi",
    uploadBufferDoneAndSave: "Binarni podatki se naložijo in shranijo na strežnik",
    title: "Potrdi",
    alert: "Opozorilo",
    info: "Informacije",
    deleteListItem: "Ali ste prepričani, da želite izbrisati ta element seznama?",
    deleteHashKey: "Ali ste prepričani, da želite izbrisati ta element zgoščenega ključa?",
    deleteStreamTimestamp: "Ali ste prepričani, da želite izbrisati ta časovni žig toka?",
    deleteSetMember: "Ali ste prepričani, da želite izbrisati tega člana niza?",
    deleteZSetMember: "Ali ste prepričani, da želite izbrisati ta razvrščeni član niza?",
    deleteConnection: "Potrdi",
    deleteConnectionText: "Ali ste prepričani, da želite izbrisati to povezavo Redis?",
    deleteNode: "Ali ste prepričani, da želite izbrisati to vozlišče Redis?",
    deleteAllKeys: opts => {
      return `Izbriši to drevo in vse njegove ključe (${opts.key})?`;
    },
    deleteSearchKeys: opts => {
      return `Ali ste prepričani, da želite izbrisati vse ključe, ki ustrezajo "${opts.pattern}"? Najdenih ${opts.count} ključev.`;
    },
    socketioConnectError: "Socket.IO se ne more povezati s strežnikom, lahko znova naložite in poskusite sami odpraviti napako povezave, odjemalec ne ve, kako bi jo rešil sam.",
    socketioAuthRequired: "Zahtevana je avtorizacija Socket.IO. Preverite pristnost z HTTP Basic Auth (uporabniško ime/geslo) in znova naložite.",
    invalidCredentials: "Neveljavno uporabniško ime ali geslo.",
    delete: "Izbrisati?",
    deleteKey: "Ali ste prepričani, da želite izbrisati ta ključ?",
    rename: {
      title: "Ali ste prepričani, da želite preimenovati ta ključ?",
      textContent: "To dejanje trajno preimenuje ključ.",
      placeholder: "Ključ Redis (obvezno)"
    },
    ttl: {
      title: "Ali ste prepričani, da želite spremeniti TTL tega ključa?",
      textContent: "Spreminjanje TTL posodobi čas delovanja tega ključa. Pustite prazno, da obdržite ta ključ za vedno.",
      placeholder: "TTL ključa Redis (celo število ali prazno)",
      placeholderPlaceholder: "Prazno pomeni, da traja večno; drugače vnesite celo število.",
      convertTextToTime: "Pretvori besedilo v čas",
      convertTextToTimePlaceholder: "Npr. 1d bo 86400"
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
    copy: "Kopiraj",
    downloadBuffer: "Prenesite binarno datoteko",
    setBuffer: "Naloži dvojiško datoteko",
    exportKeys: "Izvozi ključe",
    exportAllKeys: (opts) => `Izvozi vseh ${opts.count} ključev`,
    exportSearchResults: (opts) => `Izvozi ${opts.count} rezultatov`,
    deleteAllKeysMenu: (opts) => `Izbriši vse ${opts.count}`,
    importKeys: "Uvozi ključe",
    deleteSearchKeys: (opts) => `Izbriši ${opts.count} ujemajočih ključev`,
    saveWithFormatJson: "Shrani z obliko",
    formatJson: "Format Json",
    wrap: "Ovitek",
    unwrap: "Odvij",
    downloadJson: "Prenesite JSON",
    pubsubMonitor: "PubSub",
    pulse: "Pulse",
    profiler: "Profiler",
    memoryAnalysis: "Analysis",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "Jezik",
    ok: "OK",
    addKey: "Dodajte temu ključu",
    addKeyRoot: "Dodajte korenski ključ",
    reloadKey: "Ključ za ponovno nalaganje",
    reload: "Ponovno naloži",
    close: "Zapri",
    commands: "Ukazi",
    view: "Pogled",
    statistics: "Statistika",
    refresh: "Osveži",
    pause: "Premor",
    resume: "Nadaljuj",
    clear: "jasno",
    rename: "Preimenuj",
    main: "Podatkovna baza",
    cancel: "Prekliči",
    theme: "Tema",
    github: "GitHub",
    githubRepo: "Repozitorij",
    githubRelease: "Izdaje",
    githubChangelog: "Dnevnik sprememb",
    info: "Info",
    settings: "nastavitve",
    connect: "Povežite se",
    disconnect: "Prekini povezavo",
    logout: "Odjava",
    overview: "Pregled",
    console: "Konzola",
    noConnections: "Brez povezav, dodajte povezavo v meniju z nastavitvami.",
    noConnectionsInSettings: "Ni povezav, zgoraj lahko dodate NOVO POVEZAVO.",
    connectionAdd: "Nova povezava",
    addGroup: "Dodaj skupino",
    extend: "Podaljšaj",
    collapse: "Strni",
    add: "Dodaj",
    edit: "Uredi",
    save: "Shrani",
    ttl: "Nastavite TTL",
    fieldTtl: "TTL polja",
    digest: "Povzetek",
    delete: "Izbriši",
    remove: "Odstrani",
    areYouSure: "Ste prepričani?",
    sure: "seveda",
    testConnection: "Testna povezava",
    getKey: "Nalaganje ključa Redis in povezanih podatkov ...",
    jsonViewShow: "Prikaz JSON",
    jsonViewEditor: "Uredi JSON",
    quickConsole: "Hitra konzola",
    moveUp: "Premakni gor",
    moveDown: "Premakni dol"
  },
  label: {
    id: {
      nodeId: "ID vozlišča",
      id: "ID povezave",
      info: "Če ne želite spremeniti lastnosti: sshPassword, sshPrivateKey, password, tlsCrt, tlsKey, tlsCa, vnesite ID povezave v te lastnosti, da ohranite vrednosti lastnosti nedotaknjene. Če želite isto logiko v geslu vozlišča, potem vnesite ID vozlišča v geslo vozlišča."
    },
    secureFeature: "Če vidite vrednost, ki se začne s P3X in izgleda enako, je to varna funkcija. Če želite spremeniti nastavitve, le zamenjajte te nastavitve s praznimi ali s čim drugim in shranjene bodo. Če nastavitev ne spremenite, bodo nastavitve ohranjene takšne, kot so na strežniku.",
    aiTranslating: "Prevajanje...",
    aiSettings: "AI Nastavitve",
    aiGroqApiKey: "Groq API ključ",
    aiGroqApiKeyInfo: "Izbirno. Lasten Groq API ključ za boljše delovanje. Pridobite brezplačen ključ na",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "AI API ključ shranjen",
    aiGroqApiKeyInvalid: "Neveljaven ključ Groq API",
    aiGroqApiKeyNotSet: "Ni nastavljeno (privzeto strežnika)",
    aiEnabled: "AI omogočeno",
    aiEnabledYes: "Da",
    aiEnabledNo: "Ne",
    aiRouteViaNetwork: "Usmeri prek network.corifeus.com",
    aiRoutingDirect: "Poizvedbe gredo neposredno v Groq z uporabo vašega ključa API in obidejo network.corifeus.com.",
    aiRoutingNetwork: "Poizvedbe AI se usmerjajo prek network.corifeus.com. Če imate svoj brezplačni ključ Groq API, lahko izklopite to stikalo in usmerjate neposredno v Groq brez network.corifeus.com.",
    aiMaxTokens: "Največje število žetonov AI",
    aiMaxTokensInfo: "Največje število žetonov za odgovore AI. Višje vrednosti omogočajo daljše odgovore, vendar lahko porabijo več API dobropisa.",
    ssh: {
      on: "SSH vklopljen",
      off: "SSH izklopljen",
      sshHost: "Gostitelj SSH",
      sshPort: "Vrata SSH",
      sshUsername: "SSH uporabniško ime",
      sshPassword: "SSH geslo",
      sshPrivateKey: "SSH zasebni ključ"
    },
    isBuffer: opts => `[objekt ArrayBuffer] pomeni, da je vrednost binarni podatek ali da je vrednost večja od ${opts.maxValueAsBuffer}`,
    streamValue: `Polje in vrednost toka sta ena vrstica. Npr.: polje1 vrednost1 "polje 2" "vrednost 2"`,
    streamTimestampId: `'*' pomeni samodejno ustvarjeno ali specifikacijo kot <millisecondsTime>-<sequenceNumber>`,
    unableToLoadKey: ({
      key
    }) => {
      return `Tega ključa ni mogoče naložiti: ${key}. Mogoče je bil ključ izbrisan. Natančna napaka je v konzoli.`;
    },
    bigJson: "Ta objekt JSON je večji od 10 kb, zato se prepričajte, da veste, kaj počnete, saj se lahko nekatere funkcije upodabljajo počasi.",
    addNode: "Dodaj vozlišče",
    validateJson: "Potrdite JSON",
    reducedFunction: `Zmanjšana funkcionalnost`,
    tooManyKeys: opts => {
      return `Za polne največje dovoljene funkcije je skupno število ključev ${opts.maxLightKeysCount} štetje. Ta baza podatkov ima skupno več kot dovoljene ključe ${opts.count}. Razvrščanje po ključu in dodatne modne informacije o drevesu so onemogočene. Iskanje se dogaja samo na strežniku namesto iskanja odjemalca.`;
    },
    redisCommandNotFound: "Ujemanje z ukazom Redis ni bilo najdeno ...",
    treeKeyStore: `Razvrščanje (naravna primerjava) se izvaja na odjemalcu ali brskalniku, kar pomeni, da ima kazen za velike velike nize, kot je več kot 10.000 ključev, lahko doda malo časa upodabljanju strani. V Redis ni razvrščanja po ključu, samo tako.`,
    socketIoTimeout: options => {
      return `Socket.IO je potekla za to zahtevo (maks ${options.timeout / 1000} sekund) ...`;
    },
    resizerInfo: options => {
      return `Najmanjša širina leve ali desne plošče je ${options.width}px`;
    },
    jsonViewNotParsable: "Te vrednosti JSON ni mogoče razčleniti  ",
    ttlTitle: "Nastavite TTL v nekaj sekundah",
    passwordSecure: "Geslo bo morda prazno, vendar bodo še vedno prikazani znaki, to je varnostna funkcija.",
    tlsWithoutCert: "Omogoči TLS brez dodatnega potrdila",
    tlsRejectUnauthorized: "Zavrni nepooblaščeno potrdilo",
    tlsSecure: "Če vidite konfiguracijo TLS, ki se začne s P3X ali so vse nastavitve TLS videti enake, je to varna funkcija. Če želite spremeniti nastavitve, le zamenjajte te nastavitve s praznimi ali s čim drugim in shranjene bodo. Če nastavitev TLS ne spremenite, bodo nastavitve ohranjene takšne, kot so na strežniku.",
    treeSeparatorEmpty: "Če je ločilo dreves prazno, drevo ne bo imelo ugnezdenih vozlišč, le čisti seznam",
    treeSeparatorEmptyNote: "Brez ugnezdenih vozlišč, samo čisti seznam",
    welcomeConsole: "Dobrodošli v konzoli Redis",
    welcomeConsoleInfo: "Zgodovina kazalca GOR ali DOL je omogočena",
    redisListIndexInfo: "Prazno za dodajanje, -1 za dodajanje pred ali shranjevanje na prikazano mesto.",
    console: "Konzola",
    connectiondAdd: "Dodajte povezavo",
    connectiondEdit: "Uredi povezavo",
    connectiondView: "Ogled povezave",
    connections: "Povezave",
    keysSort: {
      on: "Razvrščanje ključev vklopljeno",
      off: "Razvrščanje ključev izklopljeno"
    },
    cluster: {
      on: "Cluster vklopljen",
      off: "Cluster izklopljen"
    },
    sentinel: {
      on: "Sentinel vklopljen",
      off: "Sentinel izklopljen",
      name: "Ime Sentinel"
    },
    readonly: {
      on: "Vklopljeno samo za branje",
      off: "Samo za branje izklopljeno"
    },
    theme: {
      light: "Svetloba",
      dark: "Temno podjetje",
      darkNeu: "Temno",
      darkoBluo: "Darko bluo",
      enterprise: "Podjetje",
      redis: "Redis",
      matrix: "Matrix"
    },
    connected: opts => {
      return `Povezan: ${opts.name}`;
    },
    tree: "Drevo",
    askAuth: "Vprašajte za avtorizacijo",
    keyboardShortcuts: "Keyboard Shortcuts",
    about: "About",
    supportedLanguages: "Supported Languages",
    version: "Version",
    redisVersion: "Redis Version",
    modules: "Moduli",
    shortcutRefresh: "Refresh",
    shortcutSearch: "Focus Search",
    shortcutNewKey: "New Key",
    shortcutDisconnect: "Prekini povezavo",
    themeAuto: "Auto (system)",
    languageAuto: "Auto (system)",
    shortcutCommandPalette: "Paleta ukazov",
    commandPalette: "Paleta ukazov",
    noResults: "Ni rezultatov",
    redisCommandsReference: "Redis Ukazi",
    ungrouped: "Brez skupine",
    grouped: "Grouped",
    connectFirst: "Najprej se povežite s strežnikom Redis",
    searchLanguage: "Išči jezik...",
    exportProgress: "Izvažanje ključev...",
    importProgress: "Uvažanje ključev...",
    importPreview: "Predogled",
    importOverwrite: "Prepiši",
    importSkip: "Preskoči",
    importConflict: "Če ključ že obstaja:",
    noKeysToExport: "Ni ključev za izvoz",
    time: "Čas",
    type: "Tip",
    format: "Format",
    loading: "Nalaganje...",
    autoRefresh: "Auto",
    exportSearchHint: "Izvažajo se samo ključi, ki ustrezajo trenutnemu iskanju",
    importSearchHint: "Uvoz se nanaša na celotno bazo podatkov, ne le na rezultate iskanja",
    deleteSearchHint: "Izbriše vse ključe, ki ustrezajo trenutnemu iskanju na strežniku",
    deletingSearchKeys: "Brisanje ujemajočih ključev...",
    importNoKeys: "V datoteki ni bilo najdenih ključev",
    desktopNotifications: "Obvestila na namizju",
    desktopNotificationsEnabled: "Omogoči obvestila na namizju",
    desktopNotificationsInfo: "Prejemajte obvestila OS za prekinitve in ponovne povezave Redis, ko aplikacija ni v fokusu."
  },
  status: {
    dataCopied: "Podatki so v odložišču",
    exportDone: "Izvoz zaključen",
    deletedSearchKeys: (opts) => `Izbrisanih ${opts.count} ključev`,
    indexCreated: "Indeks ustvarjen",
    indexDropped: "Indeks izbrisan",
    importDone: (opts) => `Uvoz zaključen: ${opts.created} ustvarjenih, ${opts.skipped} preskočenih, ${opts.errors} napak`,
    nodeRemoved: "Vozlišče odstranjeno",
    keyIsNotExisting: "Ta ključ je morda izbrisan ali potekel.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "Brez ključa";
      } else if (opts.keyCount === 1) {
        return "1 ključ";
      } else {
        return `${opts.keyCount} ključi`;
      }
    },
    treeExpandAll: "Razširite vse drevesne liste. Ta operacija je lahko draga in lahko traja dolgo ...",
    noRedisKeys: "V tej bazi podatkov ni ključev.",
    redisConnected: "Redis povezava je bila uspešna",
    reloadingDataInfo: "Ponovno nalaganje informacij o podatkih Redis",
    added: "Dodano",
    saved: "Posodobljeno",
    cancelled: "Preklicano",
    deleted: "Izbrisano",
    savedRedis: "Podatki Redis so shranjeni",
    redisDisconnected: opts => {
      return `Trenutna povezava je imela napako: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `Indeks db nastavljen na ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `Ključ drevesa je bil izbrisan (${opts.key}).`;
    },
    deletedKey: opts => {
      return `Ključ je bil izbrisan (${opts.key}).`;
    },
    renamedKey: "Ta ključ je bil preimenovan",
    ttlChanged: "TTL tega ključa je bil spremenjen",
    notInteger: "Ta vnos ni celo število",
    persisted: "Ta ključ se ohrani za vedno",
    set: "Ključ je nastavljen/dodan",
    connectionRestored: "Povezava obnovljena"
  },
  code: {
    "delete-connection": "Ta povezava je bila izbrisana, zato ste prekinjeni s tem primerkom Redis.",
    "save-connection": "Ta povezava je bila spremenjena, zato ste prekinjeni s tem primerkom Redis. Lahko se znova povežete.",
    "readonly-connections": "Dodajanje/shranjevanje/brisanje povezav je samo za branje!",
    "readonly-connection-mode": "Ta povezava je način samo za branje!",
    "list-out-of-bounds": "Indeks tega seznama je izven meja",
    "invalid-json-value": "Vrednost ni veljavna JSON.",
    "http_auth_required": "Zahtevana avtorizacija: preverite pristnost z HTTP Basic Auth in znova naložite.",
    "auto-connection-failed": "Mogoče je bila povezava odstranjena in samodejna povezava zaradi tega ni uspela.",
    invalid_console_command: "Ta ukaz ne deluje prek GUI.",
    "AI_DISABLED": "AI je onemogočen. Omogočite ga v nastavitvah AI.",
    "AI_PROMPT_REQUIRED": "Zahteva AI je obvezna.",
    "GROQ_API_KEY_READONLY": "Ključ Groq API je samo za branje in ga ni mogoče spremeniti.",
    "blocked_api_access": "Vaš načrt Groq API ne dovoljuje dostopa do tega modela. Nadgradite načrt Groq ali uporabite proxy network.corifeus.com.",
    "rate_limit": "Dosežena je omejitev AI. Poskusite znova pozneje ali uporabite lastni ključ Groq API v nastavitvah."
  },
  form: {
    error: {
      required: "Obvezno",
      port: "Pristanišče je med 1-65535",
      invalid: "Obrazec je neveljaven"
    },
    connection: {
      label: {
        name: "Ime",
        group: "Group",
        host: "Ime gostitelja",
        port: "Pristanišče",
        password: "Geslo",
        username: "Uporabniško ime"
      }
    },
    treeSettings: {
      maxValueDisplay: "Največja dolžina niza prikaza vrednosti",
      maxValueDisplayInfo: "Če je nastavljeno na 0, prikaži celotne vrednosti. Če je večji od 0, ga skrajšajte na to dolžino. Če -1: za nize skrije vrednost do urejanja; za druge vrste pokaži celotno vsebino.",
      maxKeys: "Največje število ključev",
      maxKeysInfo: "Da se GUI ne zruši, omejimo največje število ključev.",
      keyCount: (opts) => {
        return `Število ključev: ${opts?.keyCount ?? 0}`;
      },
      label: {
        animation: "Uporabite animacijo",
        noAnimation: "Brez animacije",
        jsonFormatTwoSpace: "Oblika JSON z 2 presledkoma",
        jsonFormatFourSpace: "Oblika JSON s 4 presledki",
        formName: "nastavitve Redis",
        searchModeClient: "Način iskanja strank",
        searchModeServer: "Način iskanja strežnika",
        searchModeStartsWith: "Iskanje z se začne z načinom",
        searchModeIncludes: "Iskanje vključuje način"
      },
      field: {
        treeSeparator: "Ločevalec dreves",
        treeSeparatorSelector: "Izbirnik drevesnega ločila",
        page: "Število stranskih strani dreves",
        keyPageCount: "Število stranskih ključev",
        keysSort: "Razvrsti ključe",
        searchMode: "Način iskanja",
        searchModeStartsWith: "Iskanje se začne z / vključuje"
      },
      error: {
        keyPageCount: "Število ključnih strani mora biti celo število med 5 in 100",
        page: "Število strani mora biti celo število med 10 in 5000",
        maxValueDisplay: "Največja prikazana vrednost mora biti celo število med -1 in 32768",
        maxKeys: "Največja vrednost števila ključev mora biti celo število med 100 in 100000"
      }
    },
    key: {
      label: {
        formName: {
          add: "Dodajte nov ključ Redis",
          edit: "Uredi ključ Redis",
          append: "Dodaj obstoječemu ključu Redis"
        }
      },
      field: {
        streamTimestamp: "Časovni žig",
        key: "Ključ",
        type: "Vrsta",
        index: "Kazalo",
        hashKey: "Hash ključ",
        score: "rezultat",
        value: "Vrednost",
        errorRate: "Stopnja napak",
        capacity: "Zmogljivost",
        topk: "Top K",
        width: "Širina",
        depth: "Globina",
        decay: "Razpad",
        compression: "Stiskanje",
        increment: "Prirastek",
        item: "Element",
        vectorValues: "Vektorske vrednosti (ločene z vejico)",
        element: "Ime elementa",
      },
      error: {
        streamTimestamp: "Potreben je časovni žig v obliki Redis ali kot *",
        key: "Ključ je vsaj en znak",
        hashKey: "Ključ razpršilne tabele je vsaj en znak",
        score: "Potreben je razvrščen rezultat niza",
        value: "Vrednost je obvezna",
        errorRate: "Stopnja napak mora biti med 0 in 1 (npr. 0.01)",
        capacity: "Zmogljivost mora biti pozitivno celo število",
        topk: "Top K mora biti pozitivno celo število",
        width: "Širina mora biti pozitivno celo število",
        depth: "Globina mora biti pozitivno celo število",
        item: "Element je obvezen"
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
      title: "Iskanje",
      index: "Indeks",
      query: "Poizvedba",
      results: "Rezultati",
      noIndex: "Indeksov ni",
      createIndex: "Ustvari indeks",
      dropIndex: "Izbriši indeks",
      indexInfo: "Info o indeksu",
      indexName: "Ime indeksa",
      prefix: "Predpona ključa (neobvezno)",
      fieldName: "Ime polja",
      hybridMode: "Hibridno iskanje (FT.HYBRID)",
      vectorField: "Vektorsko polje",
      vectorValues: "Vektorske vrednosti",
    },
    monitor: {
      title: "Nadzor",
      memory: "Pomnilnik",
      opsPerSec: "Operacij/s",
      clients: "Odjemalci",
      blocked: "Blokirani",
      hitsMisses: "Stopnja zadetkov",
      networkIo: "Omrežje I/O",
      slowLog: "Počasen dnevnik",
      totalCommands: "Skupaj",
      expired: "Potekli",
      evicted: "Izgnani",
      clientList: "Seznam odjemalcev",
      topKeys: "Največji ključi po pomnilniku",
      killClient: "Ubij odjemalca",
      clientKilled: "Odjemalec ubit",
      confirmKillClient: "Ali ste prepričani, da želite ustaviti tega odjemalca?",
      noKeys: "Ni ključev",
      rss: "RSS",
      peak: "Vrhunec",
      fragmentation: "Fragmentacija",
      hitsAndMisses: "Zadetki / Zgrešitve",
      noClients: "Ni odjemalcev",
      slotStats: "Statistika rež gruče",
    },
    analysis: {
      title: "Analiza pomnilnika",
      runAnalysis: "Zaženi analizo",
      running: "Analiziranje...",
      typeDistribution: "Porazdelitev tipov",
      prefixMemory: "Pomnilnik po predponi",
      topKeysByMemory: "Največji ključi po pomnilniku",
      expirationOverview: "Potek ključev",
      memoryBreakdown: "Razčlenitev pomnilnika",
      keysScanned: "Pregledani ključi",
      totalMemory: "Skupni pomnilnik",
      rssMemory: "RSS pomnilnik",
      peakMemory: "Vrhunec pomnilnika",
      luaMemory: "Lua pomnilnik",
      overheadMemory: "Dodatna obremenitev",
      datasetMemory: "Podatkovni niz",
      fragmentation: "Fragmentacija",
      allocator: "Alokator",
      withTTL: "S TTL",
      persistent: "Trajni",
      avgTTL: "Povprečni TTL",
      prefix: "Predpona",
      keyCount: "Število ključev",
      memoryUsage: "Uporaba pomnilnika",
      noPrefix: "(brez predpone)",
      topN: "Top N",
      maxScanKeys: "Maks. pregledanih ključev",
      type: "Tip",
      noData: "Ni podatkov. Kliknite Zaženi analizo za začetek.",
      exportAll: "Izvozi vse"
    },

    overview: {
      noConnected: "Ni povezave z Redis.",
      overviewClients: "Navedite povezane po številu strank",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "1 stranka";
        }
        return `${opt.length} stranke`;
      }
    },
    key: {
      label: {
        key: "Ključ",
        encoding: "Kodiranje",
        compression: "Stiskanje",
        aiRateLimited: "Dosežena je omejitev AI zahtev. Poskusite znova pozneje ali uporabite lasten Groq API ključ v Nastavitvah.",
        aiError: "AI poizvedba ni uspela",
        length: "Velikost",
        ttl: "TTL",
        ttlTitle: "Čas za življenje",
        type: "Vrsta",
        ttlNotExpire: "ne poteče",
        lengthString: "bajtov",
        lengthItem: "predmete",
        actions: "Dejanja"
      },
      list: {
        table: {
          index: "Kazalo",
          value: "Vrednost"
        }
      },
      hash: {
        table: {
          hashkey: "Hashkey",
          value: "Vrednost"
        }
      },
      set: {
        table: {
          value: "član"
        }
      },
      zset: {
        table: {
          value: "član",
          score: "rezultat"
        }
      },
      stream: {
        table: {
          timestamp: "ID časovnega žiga",
          field: "Polje",
          value: "Vrednost"
        }
      },
      timeseries: {
        chart: "Grafikon",
        info: "Informacije",
        addPoint: "Dodaj podatkovno točko",
        from: "Od (ms ali -)",
        to: "Do (ms ali +)",
        aggregation: "Združevanje",
        timeBucket: "Vedro (ms)",
        none: "Brez",
        dataPoints: "podatkovne točke",
        labels: "Oznake",
        rules: "Pravila",
        retention: "Zadrževanje",
        timestamp: "Časovni žig",
        value: "Vrednost",
        retentionHint: "0 = brez poteka, ali milisekunde",
        duplicatePolicy: "Politika podvojenih",
        labelsHint: "ključ1 vrednost1 ključ2 vrednost2",
        timestampHint: "'*' pomeni samodejno generirano, ali milisekundni časovni žig",
        editAllHint: "Ena podatkovna točka na vrstico: časovni_žig vrednost (časovni žig je lahko * za samodejno)",
        autoSpread: "Samodejni * interval razpršitve",
        formula: "Formula",
        formulaLinear: "Linearna",
        formulaRandom: "Naključna",
        formulaSawtooth: "Žagasta",
        formulaPoints: "Točke",
        formulaAmplitude: "Amplituda",
        formulaOffset: "Odmik",
        generate: "Generiraj",
        exportChart: "Izvozi PNG",
        overlay: "Prekrivni ključi",
        overlayHint: "Z vejico ločeni ključi",
        mrangeFilter: "Filter oznak",
        bulkMode: "Masovno generiranje",
        mrangeHint: "npr. sensor=temp"
      },
      probabilistic: {
        info: "Informacije",
        addItem: "Dodaj element",
        checkItem: "Preveri element",
        item: "Element",
        exists: "Obstaja",
        doesNotExist: "Ne obstaja",
        topkList: "Glavni elementi",
        topkCount: "Število",
        queryCount: "Število poizvedb",
        queryResult: "Rezultat poizvedbe",
        addedSuccessfully: "Element uspešno dodan",
        deletedSuccessfully: "Element uspešno izbrisan",
        quantile: "Kvantil",
        quantileResult: "Rezultat",
        noItems: "Ni elementov za prikaz",
        resetConfirm: "Ponastaviti vse podatke v tem T-Digest?"
      },
      vectorset: {
        info: "Informacije",
        elements: "Elementi",
        similarity: "Iskanje po podobnosti",
        searchByElement: "Iskanje po elementu",
        searchByVector: "Iskanje po vektorju",
        vectorValues: "Vektorske vrednosti",
        element: "Element",
        score: "Rezultat",
        count: "Število",
        addElement: "Dodaj element",
        attributes: "Atributi",
        noAttributes: "Brez atributov",
        dimensions: "Dimenzije",
        removeConfirm: "Odstraniti ta element iz VectorSet?",
        noElements: "Brez elementov",
        filter: "Filter",
        searchComplete: "Iskanje končano",
      }
    },
    treeControls: {
      settings: "Nastavitve drevesa",
      expandAll: "Razširi vse",
      collapseAll: "Strni vse",
      level: "Raven",
      search: {
        search: "Išči v ključih",
        clear: "Počistite trenutno iskanje, da nastavite prazno",
        placeholderClient: "Iskanje na strani odjemalca",
        placeholderServer: "Iskanje na strani strežnika",
        info: (opts) => "Iskanje na strani odjemalca pomeni, da se ujema z besedilom v iskalnem vnosu. Iskanje na strani strežnika pomeni, da je podobno iskanju v vzorcih ključev, kot je *{search-text}*. Za velike iskalne nize je bolje uporabiti iskanje na strani strežnika. Za manjše iskalne nize je bolje uporabiti način iskanja na strani odjemalca." + ` Če število ključev preseže ${opts?.maxLightKeysCount ?? 110000}, lahko iščete samo na strani strežnika.`,
        largeSetInfo: "V velikem nizu je iskanje na strani odjemalca onemogočeno. tako da je trenutno možno samo iskanje na strani strežnika.",
        infoDetails: "Če želite izvedeti, kako iskanje deluje, preverite nastavitve"
      },
      pager: {
        next: "Naprej",
        prev: "Prejšnja",
        first: "najprej",
        last: "Zadnji"
      }
    }
  },
  time: {
    years: "leta",
    months: "mesecih",
    days: "dni",
    year: "leto",
    month: "mesec",
    day: "dan",
    second: "sekunda",
    seconds: "sekunde",
    minute: "minuta",
    minutes: "minute",
    hour: "ura",
    hours: "ure"
  },
  redisTypes: {
    string: "String",
    list: "List",
    hash: "Hash table",
    set: "Set",
    zset: "Sorted set - zset",
    stream: "Stream",
    json: "JSON",
    timeseries: "Time Series",
    bloom: "Bloom filter",
    cuckoo: "Cuckoo filter",
    topk: "Top-K",
    cms: "Count-Min Sketch",
    tdigest: "T-Digest",
    vectorset: "VectorSet",
  }
};
module.exports = strings;
