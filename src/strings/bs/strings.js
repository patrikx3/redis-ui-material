const strings = {
  error: {
    server_error: "Greška servera, molimo pokušajte ponovo"
  },
  title: {
    donate: "Doniraj",
    jsonRecursive: "Proširivanje svih listova",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "Možete odabrati Redis konekciju iz donjeg lijevog menija.",
    statistics: "Statistika",
    error: "Greška",
    connectingRedis: "Povezivanje na Redis ...",
    socketioConnectError: "Socket.IO greška",
    db: "DB",
    server: "Server",
    clients: "Klijenti",
    memory: "Memorija",
    persistence: "Trajnost",
    stats: "Statistika",
    replication: "Replikacija",
    cpu: "CPU",
    cluster: "Klaster",
    modules: "Moduli",
    errorstats: "Statistike grešaka",
    commandstats: "Statistike naredbi",
    latencystats: "Statistike kašnjenja",
    keysizes: "Veličine ključeva",
    threads: "Niti",
  },
  confirm: {
    dropIndex: "Jeste li sigurni da želite obrisati ovaj indeks?",
    uploadBuffer: "Jeste li sigurni da želite učitati ove binarne podatke?",
    uploadBufferDone: "Binarni podaci su učitani",
    uploadBufferDoneAndSave: "Binarni podaci su učitani i sačuvani na serveru",
    title: "Potvrdi",
    alert: "Upozorenje",
    info: "Informacija",
    deleteListItem: "Jeste li sigurni da želite obrisati ovu stavku liste?",
    deleteHashKey: "Jeste li sigurni da želite obrisati ovu hash ključ stavku?",
    deleteStreamTimestamp: "Jeste li sigurni da želite obrisati ovaj vremenski pečat streama?",
    deleteSetMember: "Jeste li sigurni da želite obrisati ovog člana skupa?",
    deleteZSetMember: "Jeste li sigurni da želite obrisati ovog člana sortiranog skupa?",
    deleteConnection: "Potvrdi",
    deleteConnectionText: "Jeste li sigurni da želite obrisati ovu Redis konekciju?",
    deleteNode: "Jeste li sigurni da želite obrisati ovaj Redis čvor?",
    delete: "Obrisati?",
    deleteAllKeys: opts => {
      return `Obrisati ovo stablo i sve njegove ključeve (${opts.key})?`;
    },
    deleteSearchKeys: opts => {
      return `Jeste li sigurni da želite obrisati sve ključeve koji odgovaraju "${opts.pattern}"? Pronađeno ${opts.count} ključeva.`;
    },
    socketioConnectError: "Socket.IO ne može se povezati sa serverom, možete ponovo učitati i pokušati riješiti grešku konekcije sami, klijent ne zna kako to riješiti sam.",
    socketioAuthRequired: "Socket.IO autorizacija je potrebna. Molimo autentificirajte se sa HTTP Basic Auth (korisničko ime/lozinka) i ponovo učitajte.",
    deleteKey: "Jeste li sigurni da želite obrisati ovaj ključ?",
    rename: {
      title: "Jeste li sigurni da želite preimenovati ovaj ključ?",
      textContent: "Ova radnja trajno preimenuje ključ.",
      placeholder: "Redis ključ (obavezno)"
    },
    ttl: {
      title: "Jeste li sigurni da želite promijeniti TTL ovog ključa?",
      textContent: "Promjena TTL-a ažurira vrijeme života ovog ključa. Ostavite prazno da zadržite ovaj ključ zauvijek.",
      placeholder: "TTL Redis ključa (cijeli broj ili prazno)",
      placeholderPlaceholder: "Prazno znači da traje zauvijek; inače unesite cijeli broj.",
      convertTextToTime: "Pretvori tekst u vrijeme",
      convertTextToTimePlaceholder: "Npr. 1d će biti 86400"
    },
  },
  language: {
    // When you translate the english name, keep the Language in English
    // eg. Inglés / English
    bg: "Bugarski / Bulgarian",
    cs: "Češki / Czech",
    de: "Njemački / German",
    el: "Grčki / Greek",
    en: "Engleski / English",
    es: "Španski / Spanish",
    fr: "Francuski / French",
    hu: "Mađarski / Hungarian",
    it: "Italijanski / Italian",
    ja: "Japanski / Japanese",
    nl: "Holandski / Dutch",
    pl: "Poljski / Polish",
    "pt-PT": "Portugalski / Portuguese",
    ro: "Rumunski / Romanian",
    ru: "Ruski / Russian",
    sk: "Slovački / Slovak",
    sr: "Srpski / Serbian",
    sv: "Švedski / Swedish",
    tr: "Turski / Turkish",
    uk: "Ukrajinski / Ukrainian",
    zn: "Kineski / Chinese",
    ar: "Arapski / Arabic",
    az: "Azerbejdžanski / Azerbaijani",
    be: "Bjeloruski / Belarusian",
    bn: "Bengalski / Bengali",
    da: "Danski / Danish",
    et: "Estonski / Estonian",
    fi: "Finski / Finnish",
    fil: "Filipinski / Filipino",
    he: "Hebrejski / Hebrew",
    hr: "Hrvatski / Croatian",
    hy: "Jermenski / Armenian",
    id: "Indonezijski / Indonesian",
    ka: "Gruzijski / Georgian",
    kk: "Kazaški / Kazakh",
    km: "Kmerski / Khmer",
    ko: "Korejski / Korean",
    ky: "Kirgiski / Kyrgyz",
    lt: "Litvanski / Lithuanian",
    mk: "Makedonski / Macedonian",
    ms: "Malajski / Malay",
    ne: "Nepalski / Nepali",
    no: "Norveški / Norwegian",
    "pt-BR": "Portugalski (Brazil) / Portuguese (Brazil)",
    sl: "Slovenački / Slovenian",
    tg: "Tadžički / Tajik",
    th: "Tajlandski / Thai",
    vi: "Vijetnamski / Vietnamese",
    "zh-HK": "Kineski (Hong Kong) / Chinese (Hong Kong)",
    "zh-TW": "Kineski (Tajvan) / Chinese (Taiwan)",
    sw: "Svahili / Swahili",
    si: "Sinhalski / Sinhala",
    ta: "Tamilski / Tamil",
    bs: "Bosanski / Bosnian"
  },
  intention: {
    copy: "Kopiraj",
    downloadBuffer: "Preuzmi binarno",
    setBuffer: "Učitaj binarno",
    exportKeys: "Izvezi ključeve",
    exportAllKeys: (opts) => `Izvezi svih ${opts.count} ključeva`,
    exportSearchResults: (opts) => `Izvezi ${opts.count} rezultata`,
    deleteAllKeysMenu: (opts) => `Obriši sve ${opts.count}`,
    importKeys: "Uvezi ključeve",
    deleteSearchKeys: (opts) => `Obriši ${opts.count} odgovarajućih ključeva`,
    saveWithFormatJson: "Sačuvaj sa formatom",
    formatJson: "Formatiraj Json",
    wrap: "Prelomi",
    unwrap: "Raspakuj",
    downloadJson: "Preuzmi JSON",
    pubsubMonitor: "PubSub",
    pulse: "Pulse",
    profiler: "Profiler",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "Jezik / Language",
    ok: "OK",
    addKey: "Dodaj u ovaj ključ",
    addKeyRoot: "Dodaj korijeni ključ",
    reloadKey: "Ponovo učitaj ključ",
    reload: "Ponovo učitaj",
    close: "Zatvori",
    commands: "Komande",
    view: "Pregled",
    statistics: "Statistika",
    refresh: "Osvježi",
    pause: "Pauza",
    resume: "Nastavi",
    clear: "Obriši",
    rename: "Preimenuj",
    main: "Baza podataka",
    cancel: "Otkaži",
    theme: "Tema",
    github: "GitHub",
    githubRepo: "Repozitorij",
    githubRelease: "Izdanja",
    githubChangelog: "Dnevnik promjena",
    info: "Info",
    settings: "Postavke",
    connect: "Poveži",
    disconnect: "Prekini vezu",
    overview: "Pregled",
    console: "Konzola",
    noConnections: "Nema konekcija, dodajte konekciju u meniju postavki.",
    noConnectionsInSettings: "Nema konekcija, možete dodati NOVU KONEKCIJU iznad.",
    connectionAdd: "Nova konekcija",
    addGroup: "Dodaj grupu",
    extend: "Proširi",
    collapse: "Skupi",
    add: "Dodaj",
    edit: "Uredi",
    save: "Sačuvaj",
    ttl: "Postavi TTL",
    delete: "Obriši",
    remove: "Ukloni",
    sure: "Sigurno",
    testConnection: "Testiraj konekciju",
    getKey: "Učitavanje Redis ključa i povezanih podataka ...",
    jsonViewShow: "Prikaži JSON",
    jsonViewEditor: "Uredi JSON",
    quickConsole: "Brza konzola",
  },
  label: {
    id: {
      nodeId: 'ID čvora',
      id: "ID konekcije",
      info: "Ako ne želite promijeniti svojstva: sshPassword, sshPrivateKey, password, tlsCrt, tlsKey, tlsCa, molimo unesite ID konekcije u ta svojstva kako biste zadržali vrijednosti svojstava. Ako želite istu logiku u lozinci čvora, unesite ID čvora u lozinku čvora."
    },
    secureFeature: 'Ako vidite vrijednost koja počinje sa P3X i izgleda isto, to je sigurnosna funkcija. Da promijenite postavke, zamijenite ove postavke sa praznim ili nečim drugim i bit će sačuvane. Ako ne mijenjate postavke, postavke će ostati kakve jesu na serveru.',
    aiTranslating: "Translating...",
    aiSettings: "AI Postavke",
    aiGroqApiKey: "Groq API ključ",
    aiGroqApiKeyInfo: "Opcionalno. Vlastiti Groq API ključ za bolje performanse. Nabavite besplatni ključ na",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "AI API ključ sačuvan",
    aiGroqApiKeyInvalid: "Invalid Groq API key",
    aiGroqApiKeyNotSet: "Nije postavljeno (zadano servera)",
    aiEnabled: "AI omogućeno",
    aiEnabledYes: "Da",
    aiEnabledNo: "Ne",
    aiRouteViaNetwork: "Route via network.corifeus.com",
    aiRoutingDirect: "Queries go directly to Groq using your own API key, bypassing network.corifeus.com.",
    aiRoutingNetwork: "AI queries are routed through network.corifeus.com. If you have your own free Groq API key, you can turn off this switch to route directly to Groq without network.corifeus.com.",
    ssh: {
      on: 'SSH uključen',
      off: 'SSH isključen',
      sshHost: 'SSH host',
      sshPort: 'SSH port',
      sshUsername: 'SSH korisničko ime',
      sshPassword: 'SSH lozinka',
      sshPrivateKey: 'SSH privatni ključ'
    },
    isBuffer: opts => `[object ArrayBuffer] znači da je vrijednost binarna ili da je vrijednost veća od ${opts.maxValueAsBuffer}`,
    streamValue: `Polje i vrijednost streama su u jednom redu. Npr.: field1 value1 "field 2" "value 2"`,
    streamTimestampId: `'*' znači automatski generirano ili specifikacija kao <millisecondsTime>-<sequenceNumber>`,
    unableToLoadKey: ({
      key
    }) => {
      return `Nije moguće učitati ovaj ključ: ${key}. Moguće je da je ključ obrisan. Tačna greška je u konzoli.`;
    },
    bigJson: "Ovaj JSON objekat je preko 10 kb, pa provjerite da znate šta radite, jer neke funkcije mogu biti spore pri renderiranju.",
    addNode: "Dodaj čvor",
    validateJson: "Validiraj JSON",
    reducedFunction: `Smanjena funkcionalnost`,
    tooManyKeys: opts => {
      return `Za potpune maksimalne funkcije dozvoljeni ukupan broj ključeva je ${opts.maxLightKeysCount}. Ova baza podataka ima preko dozvoljenog ukupnog broja ključeva ${opts.count}. Sortiranje ključeva i dodatne informacije stabla su onemogućene. Pretraga se vrši samo na serveru umjesto na klijentu.`;
    },
    redisCommandNotFound: "Nije pronađena odgovarajuća Redis komanda ...",
    treeKeyStore: `Sortiranje (prirodno poređenje) se izvršava na klijentu tj. pregledniku, što znači da ima kaznu za velike skupove, poput preko 10k ključeva, može dodati malo vremena renderiranju stranice. U Redisu nema sortiranja ključeva, samo ovako.`,
    socketIoTimeout: options => {
      return `Socket.IO je istekao za ovaj zahtjev (maks ${options.timeout / 1000} sekundi) ...`;
    },
    resizerInfo: options => {
      return `Minimalna širina lijevog ili desnog panela je ${options.width}px`;
    },
    jsonViewNotParsable: "Ova vrijednost se ne može parsirati kao JSON  ",
    ttlTitle: "Postavi TTL u sekundama",
    passwordSecure: "Lozinka može biti prazna, ali će i dalje prikazivati znakove, ovo je sigurnosna funkcija.",
    tlsWithoutCert: "Omogući TLS bez dodatnog certifikata",
    tlsRejectUnauthorized: "Odbij neovlašteni certifikat",
    tlsSecure: "Ako vidite TLS konfiguraciju koja počinje sa P3X ili sve TLS postavke izgledaju isto, to je sigurnosna funkcija. Da promijenite postavke, zamijenite ove postavke sa praznim ili nečim drugim i bit će sačuvane. Ako ne mijenjate TLS postavke, postavke će ostati kakve jesu na serveru.",
    treeSeparatorEmpty: "Ako je separator stabla prazan, stablo neće imati ugniježđene čvorove, samo čistu listu",
    treeSeparatorEmptyNote: "Nema ugniježđenih čvorova, samo čista lista",
    welcomeConsole: "Dobrodošli u Redis konzolu",
    welcomeConsoleInfo: "Historija kursora GORE ili DOLJE je omogućena",
    redisListIndexInfo: "Prazno za dodavanje, -1 za dodavanje na početak ili sačuvaj na prikazanu poziciju.",
    console: "Konzola",
    connectiondAdd: "Dodaj konekciju",
    connectiondEdit: "Uredi konekciju",
    connectiondView: "Pregled konekcije",
    connections: "Konekcije",
    keysSort: {
      on: "Sortiranje ključeva uključeno",
      off: "Sortiranje ključeva isključeno"
    },
    cluster: {
      on: "Cluster uključen",
      off: "Cluster isključen"
    },
    sentinel: {
      on: "Sentinel uključen",
      off: "Sentinel isključen",
      name: "Sentinel ime"
    },
    readonly: {
      on: "Samo za čitanje uključeno",
      off: "Samo za čitanje isključeno"
    },
    theme: {
      light: "Svijetla",
      dark: "Tamna enterprise",
      darkNeu: "Tamna",
      darkoBluo: "Darko bluo",
      enterprise: "Enterprise",
      redis: "Redis",
      matrix: "Matrix"
    },
    connected: opts => {
      return `Povezano: ${opts.name}`;
    },
    tree: "Stablo",
    askAuth: "Zatraži autorizaciju",
    keyboardShortcuts: "Keyboard Shortcuts",
    about: "About",
    supportedLanguages: "Supported Languages",
    version: "Version",
    redisVersion: "Redis Version",
    modules: "Moduli",
    shortcutRefresh: "Refresh",
    shortcutSearch: "Focus Search",
    shortcutNewKey: "New Key",
    shortcutDisconnect: "Prekini vezu",
    themeAuto: "Auto (system)",
    shortcutCommandPalette: "Command Palette",
    commandPalette: "Command Palette",
    noResults: "No results",
    redisCommandsReference: "Redis Naredbe",
    ungrouped: "Bez grupe",
    grouped: "Grouped",
    connectFirst: "Prvo se povežite na Redis server",
    searchLanguage: "Pretraži jezik...",
    exportProgress: "Izvoz ključeva...",
    importProgress: "Uvoz ključeva...",
    importPreview: "Pregled",
    importOverwrite: "Prepiši",
    importSkip: "Preskoči",
    importConflict: "Ako ključ već postoji:",
    noKeysToExport: "Nema ključeva za izvoz",
    time: "Vrijeme",
    type: "Tip",
    format: "Format",
    loading: "Učitavanje...",
    autoRefresh: "Auto",
    exportSearchHint: "Izvoz samo ključeva koji odgovaraju trenutnom pretraživanju",
    importSearchHint: "Uvoz se primjenjuje na cijelu bazu podataka, ne samo na rezultate pretrage",
    deleteSearchHint: "Briše sve ključeve koji odgovaraju trenutnom pretraživanju na serveru",
    deletingSearchKeys: "Brisanje odgovarajućih ključeva...",
    importNoKeys: "Nisu pronađeni ključevi u datoteci",
  },
  status: {
    dataCopied: "Podaci su u međuspremniku",
    exportDone: "Izvoz završen",
    deletedSearchKeys: (opts) => `Obrisano ${opts.count} ključeva`,
    indexCreated: "Indeks kreiran",
    indexDropped: "Indeks obrisan",
    importDone: (opts) => `Uvoz završen: ${opts.created} kreirano, ${opts.skipped} preskočeno, ${opts.errors} grešaka`,
    nodeRemoved: "Čvor je uklonjen",
    keyIsNotExisting: "Ovaj ključ je mogao biti obrisan ili je istekao.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "Nema ključeva";
      } else if (opts.keyCount === 1) {
        return "1 ključ";
      } else {
        return `${opts.keyCount} ključeva`;
      }
    },
    treeExpandAll: "Proširi sve listove stabla. Ova operacija može biti skupa i može potrajati ...",
    noRedisKeys: "Nema ključeva u ovoj bazi podataka.",
    redisConnected: "Redis uspješno povezan",
    reloadingDataInfo: "Ponovno učitavanje informacija o Redis podacima",
    added: "Dodano",
    saved: "Ažurirano",
    cancelled: "Otkazano",
    deleted: "Obrisano",
    savedRedis: "Redis podaci su sačuvani",
    redisDisconnected: opts => {
      return `Trenutna konekcija je imala grešku: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `DB indeks je postavljen na ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `Ključ stabla je obrisan (${opts.key}).`;
    },
    deletedKey: opts => {
      return `Ključ je obrisan (${opts.key}).`;
    },
    renamedKey: "Ovaj ključ je preimenovan",
    ttlChanged: "TTL ovog ključa je promijenjen",
    notInteger: "Ovaj unos nije cijeli broj",
    persisted: "Ovaj ključ traje zauvijek",
    set: "Ključ je postavljen/dodan"
  },
  code: {
    "delete-connection": "Ova konekcija je obrisana, pa ste odspojeni sa ove Redis instance.",
    "save-connection": "Ova konekcija je promijenjena, pa ste odspojeni sa ove Redis instance. Možete se ponovo povezati.",
    "readonly-connections": "Konekcije dodaj/sačuvaj/obriši su samo za čitanje!",
    "readonly-connection-mode": "Ova konekcija je u načinu rada samo za čitanje!",
    "list-out-of-bounds": "Ovaj indeks liste je izvan granica",
    "invalid-json-value": "Vrijednost nije validan JSON.",
    "http_auth_required": "Autorizacija je potrebna: molimo autentificirajte se sa HTTP Basic Auth i ponovo učitajte.",
    "auto-connection-failed": "Moguće je da je konekcija uklonjena i automatska konekcija je zbog toga neuspjela.",
    invalid_console_command: "Ova komanda ne radi putem GUI-ja."
  },
  form: {
    error: {
      required: "Obavezno",
      port: "Port je između 1-65535",
      invalid: "Forma je nevažeća"
    },
    connection: {
      label: {
        name: "Naziv",
        group: "Group",
        host: "Ime hosta",
        port: "Port",
        password: "Lozinka",
        username: "Korisničko ime"
      }
    },
    treeSettings: {
      maxValueDisplay: "Maksimalna dužina prikaza vrijednosti",
      maxValueDisplayInfo: "Ako je postavljeno na 0, prikaži pune vrijednosti. Ako je veće od 0, skrati na ovu dužinu. Ako je -1: za stringove, sakrij vrijednost do uređivanja; za ostale tipove, prikaži puni sadržaj.",
      maxKeys: "Maksimalni broj ključeva",
      maxKeysInfo: "Da GUI ne padne, ograničavamo maksimalni broj ključeva.",
      keyCount: () => {
        return `Broj ključeva: ${p3xr.state.keysRaw.length}`;
      },
      label: {
        animation: "Koristi animaciju",
        noAnimation: "Bez animacije",
        jsonFormatTwoSpace: "Formatiraj JSON sa 2 razmaka",
        jsonFormatFourSpace: "Formatiraj JSON sa 4 razmaka",
        formName: "Redis postavke",
        searchModeClient: "Način pretrage na klijentu",
        searchModeServer: "Način pretrage na serveru",
        searchModeStartsWith: "Pretraga sa početkom",
        searchModeIncludes: "Pretraga sa uključivanjem"
      },
      field: {
        treeSeparator: "Separator stabla",
        treeSeparatorSelector: "Selektor separatora stabla",
        page: "Broj stranica stabla",
        keyPageCount: "Broj stranica ključeva",
        keysSort: "Sortiraj ključeve",
        searchMode: "Način pretrage",
        searchModeStartsWith: "Pretraga počinje sa / uključuje"
      },
      error: {
        keyPageCount: "Broj stranica ključeva mora biti cijeli broj između 5 - 100",
        page: "Broj stranica mora biti cijeli broj između 10 - 5000",
        maxValueDisplay: "Maksimalna vrijednost prikaza mora biti cijeli broj između -1 i 32768",
        maxKeys: "Maksimalna vrijednost broja ključeva mora biti cijeli broj između 100 i 100000"
      }
    },
    key: {
      label: {
        formName: {
          add: "Dodaj novi Redis ključ",
          edit: "Uredi Redis ključ",
          append: "Dodaj u postojeći Redis ključ"
        }
      },
      field: {
        streamTimestamp: "Vremenski pečat",
        key: "Ključ",
        type: "Tip",
        index: "Indeks",
        hashKey: "Hash ključ",
        score: "Rezultat",
        value: "Vrijednost"
      },
      error: {
        streamTimestamp: "Vremenski pečat je obavezan, ili Redis format ili kao *",
        key: "Ključ mora imati barem jedan znak",
        hashKey: "Hash ključ mora imati barem jedan znak",
        score: "Rezultat sortiranog skupa je obavezan",
        value: "Vrijednost je obavezna"
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
      title: "Pretraga",
      index: "Indeks",
      query: "Upit",
      results: "Rezultati",
      noIndex: "Nisu pronađeni indeksi",
      createIndex: "Kreiraj indeks",
      dropIndex: "Obriši indeks",
      indexInfo: "Info o indeksu",
      indexName: "Naziv indeksa",
      prefix: "Prefiks ključa (opcionalno)",
      fieldName: "Naziv polja",
    },
    monitor: {
      title: "Monitoring",
      memory: "Memorija",
      opsPerSec: "Operacija/sek",
      clients: "Klijenti",
      blocked: "Blokirani",
      hitsMisses: "Stopa pogodaka",
      networkIo: "Mrežni I/O",
      slowLog: "Spori log",
      totalCommands: "Ukupno",
      expired: "Isteklo",
      evicted: "Izbačeno",
      clientList: "Lista klijenata",
      topKeys: "Najveći ključevi po memoriji",
      killClient: "Ubij klijenta",
      clientKilled: "Klijent ubijen",
      confirmKillClient: "Jeste li sigurni da želite zaustaviti ovog klijenta?",
      noKeys: "Nema ključeva",
      noClients: "Nema klijenata",
    },
    overview: {
      noConnected: "Nema konekcije na Redis.",
      overviewClients: "Listaj povezane po broju klijenata",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "1 klijent";
        }
        return `${opt.length} klijenata`;
      }
    },
    key: {
      label: {
        key: "Ključ",
        encoding: "Kodiranje",
        length: "Veličina",
        ttl: "TTL",
        ttlTitle: "Vrijeme života",
        type: "Tip",
        ttlNotExpire: "ne ističe",
        lengthString: "bajtova",
        lengthItem: "stavki",
        actions: "Akcije"
      },
      list: {
        table: {
          index: "Indeks",
          value: "Vrijednost"
        }
      },
      hash: {
        table: {
          hashkey: "Hash ključ",
          value: "Vrijednost"
        }
      },
      set: {
        table: {
          value: "Član"
        }
      },
      zset: {
        table: {
          value: "Član",
          score: "Rezultat"
        }
      },
      stream: {
        table: {
          timestamp: "ID vremenskog pečata",
          field: "Polje",
          value: "Vrijednost"
        }
      },
      timeseries: {
        chart: "Grafikon",
        info: "Informacije",
        addPoint: "Dodaj tačku podataka",
        from: "Od (ms ili -)",
        to: "Do (ms ili +)",
        aggregation: "Agregacija",
        timeBucket: "Kanta (ms)",
        none: "Nema",
        dataPoints: "tačke podataka",
        labels: "Oznake",
        rules: "Pravila",
        retention: "Zadržavanje",
        timestamp: "Vremenski pečat",
        value: "Vrijednost",
        retentionHint: "0 = bez isteka, ili milisekunde",
        duplicatePolicy: "Politika duplikata",
        labelsHint: "key1 value1 key2 value2",
        timestampHint: "'*' znači automatski generisano, ili vremenski pečat u milisekundama",
        editAllHint: "Jedna tačka podataka po liniji: vremenski_pečat vrijednost (vremenski pečat može biti * za automatsko)",
        autoSpread: "Automatski * interval širenja",
        formula: "Formula",
        formulaLinear: "Linearno",
        formulaRandom: "Nasumično",
        formulaSawtooth: "Pilasti",
        formulaPoints: "Tačke",
        formulaAmplitude: "Amplituda",
        formulaOffset: "Pomak",
        generate: "Generiši",
        exportChart: "Izvezi PNG",
        overlay: "Preklapanje ključeva",
        overlayHint: "Ključevi odvojeni zarezom",
        mrangeFilter: "Filter oznaka",
        bulkMode: "Masovno generisanje",
        mrangeHint: "npr. sensor=temp"
      }
    },
    treeControls: {
      settings: "Postavke stabla",
      expandAll: "Proširi sve",
      collapseAll: "Skupi sve",
      level: "Nivo",
      search: {
        search: "Pretraži ključeve",
        clear: "Obriši trenutnu pretragu za prazno",
        placeholderClient: "Pretraga na strani klijenta",
        placeholderServer: "Pretraga na strani servera",
        info: "Pretraga na strani klijenta znači da se podudara tekst u polju za pretragu. Pretraga na strani servera znači da pretražuje po obrascima ključeva kao *{search-text}*. Za velike skupove pretrage, bolje je koristiti pretragu na strani servera. Za manje skupove pretrage, bolje je koristiti način pretrage na strani klijenta." + ` Ako je broj ključeva preko ${p3xr.settings.maxLightKeysCount}, možete pretraživati samo na strani servera.`,
        largeSetInfo: "U velikom skupu, pretraga na strani klijenta je onemogućena. Trenutno je moguća samo pretraga na strani servera.",
        infoDetails: "Da saznate kako pretraga radi, molimo provjerite postavke"
      },
      pager: {
        next: "Sljedeća",
        prev: "Prethodna",
        first: "Prva",
        last: "Zadnja"
      }
    }
  },
  time: {
    type: "Tip",
    format: "Format",
    loading: "Učitavanje...",
    years: "godina",
    months: "mjeseci",
    days: "dana",
    year: "godina",
    month: "mjesec",
    day: "dan",
    second: "sekunda",
    seconds: "sekunde",
    minute: "minuta",
    minutes: "minute",
    hour: "sat",
    hours: "sati"
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
