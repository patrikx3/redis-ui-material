const strings = {
  error: {
    server_error: "Pogreška poslužitelja, pokušajte ponovo",
    aiPromptTooLong: "AI upit je predug (maksimalno 4096 znakova)",
  },
  title: {
    donate: "Donirajte",
    donateTitle: "Podržite P3X Redis UI",
    donateDescription: "P3X Redis UI je besplatan projekt otvorenog koda. Troškovi održavanja aplikacije, AI značajki, Docker slika, servera i infrastrukture dolaze iz džepa programera. Ako vam je ovaj alat koristan, razmislite o podršci daljnjem razvoju donacijom. Svaki doprinos pomaže da projekt živi i raste. Hvala!",
    jsonRecursive: "Širenje svih listova",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "Možete odabrati Redis vezu za povezivanje s donjeg lijevog izbornika.",
    statistics: "Statistika",
    error: "Greška",
    connectingRedis: "Povezivanje na Redis ...",
    socketioConnectError: "Socket.IO Greška",
    db: "DB",
    server: "poslužitelj",
    clients: "Klijenti",
    memory: "Memorija",
    persistence: "Postojanost",
    stats: "Statistika",
    replication: "Replikacija",
    cpu: "CPU",
    cluster: "Cluster",
    modules: "Moduli",
    errorstats: "Statistike pogrešaka",
    commandstats: "Statistike naredbi",
    latencystats: "Statistike kašnjenja",
    keysizes: "Veličine ključeva",
    threads: "Niti"
  },
  confirm: {
    dropIndex: "Jeste li sigurni da želite obrisati ovaj indeks?",
    uploadBuffer: "Jeste li sigurni da želite učitati ove binarne podatke?",
    uploadBufferDone: "Binarni podaci su učitani",
    uploadBufferDoneAndSave: "Binarni podaci se učitavaju i spremaju na poslužitelj",
    title: "Potvrdi",
    alert: "uzbuna",
    info: "Info",
    deleteListItem: "Jeste li sigurni da želite izbrisati ovu stavku popisa?",
    deleteHashKey: "Jeste li sigurni da želite izbrisati ovu stavku hash ključa?",
    deleteStreamTimestamp: "Jeste li sigurni da želite izbrisati ovu vremensku oznaku streama?",
    deleteSetMember: "Jeste li sigurni da želite izbrisati ovaj član skupa?",
    deleteZSetMember: "Jeste li sigurni da želite izbrisati ovaj sortirani član skupa?",
    deleteConnection: "Potvrdi",
    deleteConnectionText: "Jeste li sigurni da želite izbrisati ovu Redis vezu?",
    deleteNode: "Jeste li sigurni da želite izbrisati ovaj Redis čvor?",
    delete: "Izbrisati?",
    deleteAllKeys: opts => {
      return `Izbriši ovo stablo i sve njegove ključeve (${opts.key})?`;
    },
    deleteSearchKeys: opts => {
      return `Jeste li sigurni da želite izbrisati sve ključeve koji odgovaraju "${opts.pattern}"? Pronađeno ${opts.count} ključeva.`;
    },
    socketioConnectError: "Socket.IO se ne može spojiti na poslužitelj, možete ponovno učitati i pokušati sami riješiti pogrešku veze, klijent ne zna kako to sam riješiti.",
    socketioAuthRequired: "Potrebna je autorizacija Socket.IO. Provjerite autentičnost pomoću HTTP Basic Auth (korisničko ime/lozinka) i ponovno učitajte.",
    invalidCredentials: "Neispravno korisničko ime ili lozinka.",
    deleteKey: "Jeste li sigurni da želite izbrisati ovaj ključ?",
    rename: {
      title: "Jeste li sigurni da želite preimenovati ovaj ključ?",
      textContent: "Ova radnja trajno preimenuje ključ.",
      placeholder: "Ključ Redis (obavezno)"
    },
    ttl: {
      title: "Jeste li sigurni da želite promijeniti TTL ovog ključa?",
      textContent: "Promjena TTL ažurira vrijeme života ovog ključa. Ostavite prazno kako biste zauvijek zadržali ovaj ključ.",
      placeholder: "Redis ključa TTL (cijeli ili prazan)",
      placeholderPlaceholder: "Prazan znači da traje zauvijek; inače unesite cijeli broj.",
      convertTextToTime: "Pretvori tekst u vrijeme",
      convertTextToTimePlaceholder: "Npr. 1d će biti 86400"
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
    downloadBuffer: "Preuzmite binarnu datoteku",
    setBuffer: "Učitaj binarno",
    exportKeys: "Izvezi ključeve",
    exportAllKeys: (opts) => `Izvezi svih ${opts.count} ključeva`,
    exportSearchResults: (opts) => `Izvezi ${opts.count} rezultata`,
    deleteAllKeysMenu: (opts) => `Izbriši sve ${opts.count}`,
    importKeys: "Uvezi ključeve",
    deleteSearchKeys: (opts) => `Izbriši ${opts.count} odgovarajućih ključeva`,
    saveWithFormatJson: "Spremi s formatom",
    formatJson: "Format Json",
    wrap: "Zamotati",
    unwrap: "Odmotajte",
    downloadJson: "Preuzmite JSON",
    pubsubMonitor: "PubSub",
    pulse: "Pulse",
    profiler: "Profiler",
    memoryAnalysis: "Analysis",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "Jezik",
    ok: "OK",
    addKey: "Dodaj ovom ključu",
    addKeyRoot: "Dodajte korijenski ključ",
    reloadKey: "Ključ za ponovno učitavanje",
    reload: "Ponovno učitaj",
    close: "Zatvori",
    commands: "Naredbe",
    view: "pogled",
    statistics: "Statistika",
    refresh: "Osvježi",
    pause: "Pauza",
    resume: "Nastavi",
    clear: "čisto",
    rename: "Preimenuj",
    main: "Baza podataka",
    cancel: "Odustani",
    theme: "Tema",
    github: "GitHub",
    githubRepo: "Spremište",
    githubRelease: "Izdanja",
    githubChangelog: "Dnevnik promjena",
    info: "Info",
    settings: "postavke",
    connect: "Poveži se",
    disconnect: "Prekini vezu",
    logout: "Odjava",
    overview: "Pregled",
    console: "Konzola",
    noConnections: "Nema veza, dodajte vezu u izborniku postavki.",
    noConnectionsInSettings: "Nema veza, možete dodati NOVU VEZU iznad.",
    connectionAdd: "Nova veza",
    addGroup: "Dodaj grupu",
    extend: "Proširi",
    collapse: "Sažimanje",
    add: "Dodaj",
    edit: "Uredi",
    save: "spremiti",
    ttl: "Postavite TTL",
    fieldTtl: "TTL polja",
    digest: "Sažetak",
    delete: "Izbriši",
    remove: "Ukloniti",
    areYouSure: "Jeste li sigurni?",
    sure: "naravno",
    testConnection: "Testirajte vezu",
    getKey: "Učitavanje ključa Redis i povezanih podataka ...",
    jsonViewShow: "Prikaz JSON",
    jsonViewEditor: "Uredi JSON",
    quickConsole: "Brza konzola",
    moveUp: "Pomakni gore",
    moveDown: "Pomakni dolje",
  },
  diff: {
    reviewChanges: "Pregledaj promjene",
    inline: "U retku",
    sideBySide: "Jedno uz drugo",
    additions: "dodavanja",
    deletions: "brisanja",
    unchangedLines: "nepromijenjeni redci",
    noChanges: "Nema otkrivenih promjena",
    before: "Prije",
    after: "Poslije",
  },
  label: {
    id: {
      nodeId: "ID čvora",
      id: "ID veze",
      info: "Ako ne želite promijeniti svojstva: sshPassword, sshPrivateKey, password, tlsCrt, tlsKey, tlsCa, unesite ID veze u ta svojstva kako biste zadržali vrijednosti svojstava netaknutima. Ako želite istu logiku u zaporci čvora, tada unesite ID čvora u zaporku čvora."
    },
    secureFeature: "Ako vidite vrijednost koja počinje s P3X i izgleda isto, to je sigurna značajka. Da biste promijenili postavke, samo zamijenite ove postavke praznim ili nečim drugim i one će biti spremljene. Ako ne promijenite postavke, postavke će se zadržati onakve kakve jesu na poslužitelju.",
    aiTranslating: "Prevođenje...",
    aiSettings: "AI Postavke",
    aiGroqApiKey: "Groq API ključ",
    aiGroqApiKeyInfo: "Opcionalno. Vlastiti Groq API ključ za bolju izvedbu. Nabavite besplatni ključ na",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "AI API ključ spremljen",
    aiGroqApiKeyInvalid: "Neispravan Groq API ključ",
    aiGroqApiKeyNotSet: "Nije postavljeno (zadano poslužitelja)",
    aiEnabled: "AI omogućeno",
    aiEnabledYes: "Da",
    aiEnabledNo: "Ne",
    aiRouteViaNetwork: "Usmjeri preko network.corifeus.com",
    aiRoutingDirect: "Upiti idu izravno prema Groqu koristeći vaš vlastiti API ključ, zaobilazeći network.corifeus.com.",
    aiRoutingNetwork: "AI upiti se usmjeravaju kroz network.corifeus.com. Ako imate vlastiti besplatni Groq API ključ, možete isključiti ovaj prekidač kako biste se povezali izravno na Groq bez network.corifeus.com.",
    aiMaxTokens: "Maksimalni AI tokeni",
    aiMaxTokensInfo: "Maksimalan broj tokena za AI odgovore. Veće vrijednosti omogućuju dulje odgovore, ali mogu koristiti više API kredita.",
    consoleDrawer: {
      toggleTooltip: "Prebacivanje konzole",
      clearTooltip: "Očisti pomicanje unatrag",
      closeTooltip: "Zatvori konzolu",
      aiSettingsTooltip: "AI postavke",
      modeRedis: "REDIS",
      modeAi: "AI",
      connectionChipNoDb: opts => `${opts.name}`,
      connectionChipWithDb: opts => `${opts.name} · db ${opts.db}`,
      pageChip: opts => `stranica: ${opts.page}`,
      connectingTo: opts => `Povezivanje s ${opts.name}…`,
      connectedTo: opts => `Povezano s ${opts.name} (Redis ${opts.version} ${opts.mode}, ${opts.modules} modula učitano)`,
      connectedToNoInfo: opts => `Povezano s ${opts.name}`,
      disconnectedFrom: opts => `Prekinuta veza s ${opts.name}`,
      readyIndicator: "spreman"
    },
    cheatsheet: {
      title: "AI Cheatsheet — Što mogu pitati?",
      subtitle: "Pritisnite bilo koji upit da ga zalijepite u konzolu. Zatim pritisnite Enter.",
      searchPlaceholder: "Filtrirajte upite...",
      openOfficialDocs: "Redis Naredbe ↗",
      openOfficialDocsTooltip: "Otvorite službenu referencu naredbi Redis na redis.io",
      closeTooltip: "Zatvori (Esc)",
      empty: "Nijedan upit ne odgovara vašem filtru.",
      footerHint: "Savjet: upišite \"ai:\" nakon čega slijedi bilo što na bilo kojem jeziku — AI razumije 54 jezika i koristi stanje Redis uživo kada je to potrebno.",
      groups: {
        diagnostics: {
          name: "Dijagnostika uživo",
          description: "Zamolite AI da istraži stanje poslužitelja uživo putem sigurnih alata samo za čitanje.",
          prompts: [
            "zašto je memorija visoka?",
            "pokaži mi 10 najsporijih upita",
            "koji klijenti su povezani?",
            "koja je politika maksimalne memorije?",
            "ima li nedavnih deložacija?",
            "postoji li neki događaj kašnjenja?",
            "koliko dugo server radi?",
            "koja je stopa pogodaka?",
            "pokazati korištenje procesora",
            "sažeti prostor ključeva",
            "koliko memorije koristi svaka vrsta podataka?",
            "blokira li nešto server trenutno?"
          ]
        },
        keys: {
          name: "Ključevi",
          description: "Pregledajte, pronađite i rasuđujte o ključevima bez klikanja kroz stablo.",
          prompts: [
            "pronađi sve ključeve koji odgovaraju user:*",
            "koliko ključeva u svakoj bazi podataka?",
            "prikaži najveći hash u ovom db",
            "pronađite ključeve s TTL manje od 60 sekundi",
            "koje tipke nemaju TTL?",
            "koja je vrsta ključa session:abc?",
            "procijeniti memoriju koju koristi prefiks \"session:\"",
            "prikaži kodiranje objekta ključa user:42",
            "ima li ključeva koji će uskoro isteći?",
            "koji imenski prostor koristi najviše memorije?"
          ]
        },
        dataTypes: {
          name: "Vrste podataka",
          description: "Fraze na prirodnom jeziku za stvaranje/čitanje/ažuriranje na svakoj vrsti Redis.",
          prompts: [
            "kreirajte hash pod nazivom user:1 s poljima name=Alice age=30",
            "dodaj tri stavke na popis tasks",
            "dodaj članove u skup favourites",
            "dodaj bodovane članove sortiranom skupu leaderboard",
            "dodaj događaj u stream events",
            "dohvati zadnjih 10 unosa iz toka events",
            "dobiti sva polja hash korisnika:1",
            "dohvati članove skupa favourites",
            "dođite među 10 najboljih po rezultatu iz leaderboard"
          ]
        },
        modules: {
          name: "Moduli",
          description: "Upiti za učitane Redis module (kategorije u nastavku pojavljuju se samo kada je modul prisutan).",
          prompts: []
        },
        json: {
          name: "RedisJSON",
          description: "Dostupno kada je modul ReJSON učitan.",
          prompts: [
            "izradi JSON dokument na user:42 s { ime: \"Alice\", dob: 30 }",
            "pročitajte polje imena user:42",
            "ažuriraj dob user:42 na 31",
            "popis svih ključeva JSON",
            "brisanje polja iz dokumenta JSON",
            "dobiti ugniježđeno polje pomoću JSONPath"
          ]
        },
        search: {
          name: "RediSearch",
          description: "Dostupno kada se učita modul za pretraživanje.",
          prompts: [
            "popis svih indeksa punog teksta",
            "pokrenite pretraživanje cijelog teksta za \"redis\" na indeksu idx:products",
            "izradite indeks podržan hashom s poljima naslov (TEXT) i cijena (NUMERIC)",
            "dobiti informacije o indeksu idx:products",
            "pad indeks idx:products",
            "pronađite dokumente gdje je cijena između 10 i 50",
            "napisati hibridno pretraživanje kombinirajući tekst i vektorsku sličnost"
          ]
        },
        timeseries: {
          name: "RedisTimeSeries",
          description: "Dostupno kada se učita modul vremenske serije.",
          prompts: [
            "popis svih ključeva vremenske serije",
            "dodaj podatkovnu točku u temp:room1",
            "dobijte raspon temp:room1 od jučer do sada",
            "dobiti više raspona prema oznaci sensor=temp",
            "generiraj 100 podatkovnih točaka sinusnog vala za temp:room1",
            "prikaži zadržavanje i oznake za temp:room1"
          ]
        },
        bloom: {
          name: "RedisBloom (Bloom / Kukavica / Top-K / CMS / T-Digest)",
          description: "Dostupno kada je bf modul učitan.",
          prompts: [
            "provjerite postoji li stavka foo u cvjetnom filtru spam:ips",
            "dodaj stavke u cvjetni filter spam:ips",
            "kreirajte top-K pod nazivom popular s K=10",
            "skica brojača upita traffic za ključ /home",
            "dodajte vrijednosti u t-digest i dobijete 95. percentil",
            "prikaži informacije za filter cvjetanja spam:ips"
          ]
        },
        vectorSet: {
          name: "VectorSet (Redis 8+)",
          description: "Dostupno kada se otkrije Redis 8+ (izvorni tip VECTORSET).",
          prompts: [
            "dodaj vektor u embeddings",
            "pronaći 10 najsličnijih vektora vektoru upita",
            "prikaži dimenzije i broj skupa vektora embeddings",
            "brisanje elementa iz vektorskog skupa embeddings",
            "pretraži po nazivu elementa s VSIM"
          ]
        },
        redis8: {
          name: "Redis 8+ značajki",
          description: "Prikazuje se kada se otkrije Redis 8+.",
          prompts: [
            "postavite hash polje ttl s HEXPIRE",
            "dobiti sažetak vrijednosti niza",
            "pokreni hibridno pretraživanje cijelog teksta + vektora (FT.HYBRID)",
            "postavite više ključeva sa zajedničkim istekom pomoću MSETEX",
            "brisanje unosa toka s grupom potrošača (XDELEX)",
            "prikaži statistiku utora klastera za prvih 10 utora"
          ]
        },
        scripting: {
          name: "Skriptiranje",
          description: "Generirajte skripte Lua / EVAL iz opisa na prirodnom jeziku.",
          prompts: [
            "napišite atomsku skriptu koja povećava counter X samo ako Y > 5",
            "generiraj 100 slučajnih ključeva s Lua",
            "pretvoriti ovaj shell cjevovod u jedan EVAL: ključevi user:* | DOBITI | grep neaktivan | DEL",
            "port batch operacije na Lua za sigurnost klastera",
            "provjeri i postavi ažuriranje stila u jednom Lua pozivu",
            "ponavljanje preko hasha i brisanje polja koja odgovaraju uzorku"
          ]
        },
        cluster: {
          name: "Grozd",
          description: "Prikazuje se samo u načinu klastera.",
          prompts: [
            "prikaži informacije o klasteru",
            "popis čvorova klastera",
            "prikaži 10 najboljih utora prema broju ključeva",
            "prikaži 10 najboljih mjesta po pamćenju",
            "koji master posjeduje slot 5000?"
          ]
        },
        acl: {
          name: "ACL (Redis 6+)",
          description: "Pregledajte korisnike s kontrolom pristupa i trenutnu vezu.",
          prompts: [
            "s kim sam povezan?",
            "popis svih ACL korisnika",
            "koja dopuštenja imam?",
            "prikazati zadana korisnička pravila"
          ]
        },
        qna: {
          name: "Opća pitanja i odgovori",
          description: "Postavljajte Redis pitanja znanja — nema alata, samo odgovori.",
          prompts: [
            "što je ZADD?",
            "kako funkcionira preusmjeravanje klastera?",
            "objasni SCAN nasuprot KEYS",
            "kada trebam koristiti EVAL u odnosu na više naredbi?",
            "koje su opcije postojanosti Redis?",
            "koja je razlika između RDB i AOF?",
            "kako Redis Sentinel odlučuje o novom gospodaru?",
            "objasniti hash oznake u načinu klastera"
          ]
        },
        translate: {
          name: "Naredba prirodnog jezika → Redis",
          description: "Opišite što želite na bilo kojem od 54 jezika; AI piše naredbu Redis.",
          prompts: [
            "brisanje ključa user:42",
            "preimenujte tipku foo u traku",
            "istekne ključ session:abc za 10 sekundi",
            "kopiraj izvor ključa na odredište",
            "povećati brojač posjeta za 5",
            "postavite ključni pozdrav na \"hello\" na 1 sat",
            "obriši sve ključeve user:*",
            "pokaži mi 10 najzauzetijih ključeva"
          ]
        }
      }
    },
    ssh: {
      on: "SSH uključen",
      off: "SSH isključeno",
      sshHost: "SSH Host",
      sshPort: "SSH priključak",
      sshUsername: "SSH korisničko ime",
      sshPassword: "SSH lozinka",
      sshPrivateKey: "SSH privatni ključ"
    },
    isBuffer: opts => `[objekt ArrayBuffer] znači da je vrijednost binarni podatak ili je vrijednost veća od ${opts.maxValueAsBuffer}`,
    streamValue: `Polje i vrijednost toka su jednolinijski. Npr.: polje1 vrijednost1 "polje 2" "vrijednost 2"`,
    streamTimestampId: `'*' znači automatski generirano ili specifikaciju kao <millisecondsTime>-<sequenceNumber>`,
    unableToLoadKey: ({
      key
    }) => {
      return `Nije moguće učitati ovaj ključ: ${key}. Moguće, ključ je izbrisan. Točna greška je u konzoli.`;
    },
    bigJson: "Ovaj JSON objekt ima više od 10 kb, stoga budite sigurni da znate što radite, jer neke funkcije mogu sporo renderirati.",
    addNode: "Dodaj čvor",
    validateJson: "Potvrdite JSON",
    reducedFunction: `Smanjena funkcionalnost`,
    tooManyKeys: opts => {
      return `Za potpune maksimalne dopuštene funkcije ukupno je ${opts.maxLightKeysCount} brojati. Ova baza podataka ima više od ukupno dopuštenih ključeva ${opts.count}. Onemogućeno je razvrstavanje po ključu i dodatni otmjeni podaci o stablu. Pretraživanje se odvija samo na poslužitelju umjesto pretraživanja klijenta.`;
    },
    redisCommandNotFound: "Nije pronađeno podudaranje naredbe Redis ...",
    treeKeyStore: `Razvrstavanje (prirodna usporedba) izvršava se na klijentu koji se zove preglednik, što znači da ima kaznu za velike velike skupove, poput preko 10 tisuća ključeva, što bi moglo dodati malo vremena renderiranju stranice. U Redis nema sortiranja ključeva, samo ovako.`,
    socketIoTimeout: options => {
      return `Isteklo je vrijeme Socket.IO za ovaj zahtjev (maks ${options.timeout / 1000} sekundi) ...`;
    },
    resizerInfo: options => {
      return `Minimalna širina lijeve ili desne ploče je ${options.width}px`;
    },
    jsonViewNotParsable: "Ova vrijednost nije JSON parsable  ",
    ttlTitle: "Postavite TTL u sekundi",
    passwordSecure: "Lozinka može biti prazna, ali će i dalje prikazivati znakove, ovo je sigurnosna značajka.",
    aclAuthHint: "Koristite Redis ACL korisničko ime i lozinku za autentifikaciju. Ostavite prazno za zadanog korisnika bez lozinke.",
    tlsWithoutCert: "Omogućite TLS bez dodatnog certifikata",
    tlsRejectUnauthorized: "Odbaci neovlašteni certifikat",
    tlsSecure: "Ako vidite TLS konfiguraciju koja počinje s P3X ili sve TLS postavke izgledaju isto, to je sigurna značajka. Da biste promijenili postavke, samo zamijenite ove postavke praznim ili nečim drugim i one će biti spremljene. Ako ne promijenite TLS postavke, postavke će se zadržati onakve kakve jesu na poslužitelju.",
    treeSeparatorEmpty: "Ako je separator stabla prazan, stablo neće imati ugniježđene čvorove, samo čistu listu",
    treeSeparatorEmptyNote: "Nema ugniježđenih čvorova, samo čisti popis",
    welcomeConsole: "Dobrodošli na Redis konzolu",
    welcomeConsoleInfo: "SHIFT + Povijest kursora GORE ili DOLJE je omogućena",
    redisListIndexInfo: "Prazno za dodavanje, -1 za dodavanje ispred ili spremanje na prikazano mjesto.",
    console: "Konzola",
    connectiondAdd: "Dodaj vezu",
    connectiondEdit: "Uredi vezu",
    connectiondView: "Pregledajte vezu",
    connections: "Veze",
    keysSort: {
      on: "Razvrstavanje ključeva uključeno",
      off: "Razvrstavanje ključeva isključeno"
    },
    cluster: {
      on: "Cluster uključen",
      off: "Cluster isključeno"
    },
    sentinel: {
      on: "Sentinel uključen",
      off: "Sentinel isključeno",
      name: "Sentinel ime"
    },
    readonly: {
      on: "Samo za čitanje uključeno",
      off: "Isključeno samo za čitanje"
    },
    theme: {
      light: "svjetlo",
      dark: "Mračno poduzeće",
      darkNeu: "tamno",
      darkoBluo: "Darko bluo",
      enterprise: "Poduzeće",
      redis: "Redis",
      matrix: "Matrica"
    },
    connected: opts => {
      return `Povezano: ${opts.name}`;
    },
    tree: "Drvo",
    askAuth: "Zatražite autorizaciju",
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
    languageAuto: "Auto (system)",
    shortcutCommandPalette: "Command Palette",
    commandPalette: "Command Palette",
    noResults: "No results",
    redisCommandsReference: "Redis Naredbe",
    ungrouped: "Bez grupe",
    grouped: "Grouped",
    connectFirst: "Prvo se povežite na Redis poslužitelj",
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
    deleteSearchHint: "Briše sve ključeve koji odgovaraju trenutnom pretraživanju na poslužitelju",
    deletingSearchKeys: "Brisanje odgovarajućih ključeva...",
    importNoKeys: "Nisu pronađeni ključevi u datoteci",
    desktopNotifications: "Obavijesti na radnoj površini",
    desktopNotificationsEnabled: "Omogući obavijesti na radnoj površini",
    desktopNotificationsInfo: "Primajte OS obavijesti za prekide i ponovne veze Redis-a kada aplikacija nije u fokusu."
  },
  status: {
    dataCopied: "Podaci su u međuspremniku",
    exportDone: "Izvoz završen",
    deletedSearchKeys: (opts) => `Izbrisano ${opts.count} ključeva`,
    indexCreated: "Indeks kreiran",
    indexDropped: "Indeks obrisan",
    importDone: (opts) => `Uvoz završen: ${opts.created} kreirano, ${opts.skipped} preskočeno, ${opts.errors} grešaka`,
    nodeRemoved: "Čvor uklonjen",
    keyIsNotExisting: "Ovaj je ključ mogao biti izbrisan ili istekao.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "Nema ključa";
      } else if (opts.keyCount === 1) {
        return "1 ključ";
      } else {
        return `${opts.keyCount} ključevi`;
      }
    },
    treeExpandAll: "Proširite sve listove drveća. Ova operacija može biti skupa i može potrajati ...",
    noRedisKeys: "U ovoj bazi podataka nema ključeva.",
    redisConnected: "Redis uspješno povezan",
    reverted: "Vra\u0107eno",
    reloadingDataInfo: "Ponovno učitavanje podataka Redis",
    added: "Dodano",
    saved: "Ažurirano",
    cancelled: "Otkazano",
    deleted: "Izbrisano",
    savedRedis: "Podaci Redis su spremljeni",
    redisDisconnected: opts => {
      return `Trenutna veza je imala pogrešku: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `Indeks db postavljen na ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `Ključ stabla je izbrisan (${opts.key}).`;
    },
    deletedKey: opts => {
      return `Ključ je izbrisan (${opts.key}).`;
    },
    renamedKey: "Ovaj ključ je preimenovan",
    ttlChanged: "TTL ovog ključa je promijenjen",
    notInteger: "Ovaj unos nije cijeli broj",
    persisted: "Ovaj ključ ostaje zauvijek",
    set: "Ključ je postavljen/dodan",
    connectionRestored: "Veza obnovljena",
    socketDisconnected: "Prekinuta veza",
    socketError: "Greška u vezi",
    deletedHashKey: "Hash ključ izbrisan",
    deletedSetMember: "Član skupa izbrisan",
    deletedListElement: "Element liste izbrisan",
    deletedZSetMember: "Član sortiranog skupa izbrisan",
    deletedStreamTimestamp: "Unos streama izbrisan",
  },
  code: {
    "delete-connection": "Ova veza je izbrisana, tako da ste prekinuti s ovom Redis instancom.",
    "save-connection": "Ova je veza promijenjena, tako da ste prekinuti s ovom Redis instancom. Možete se ponovno povezati.",
    "readonly-connections": "Veze dodavanje/spremanje/brisanje su samo za čitanje!",
    "readonly-connection-mode": "Ova veza je samo za čitanje!",
    "list-out-of-bounds": "Ovaj indeks popisa je izvan granica",
    "invalid-json-value": "Vrijednost nije važeća JSON.",
    "http_auth_required": "Potrebna autorizacija: provjerite autentičnost pomoću HTTP Basic Auth i ponovno učitajte.",
    "auto-connection-failed": "Moguće je da je zbog toga veza uklonjena i automatsko povezivanje nije uspjelo.",
    invalid_console_command: "Ova naredba ne radi putem GUI.",
    "AI_DISABLED": "AI je onemogućen. Omogućite ga u AI postavkama.",
    "AI_PROMPT_REQUIRED": "AI upit je obavezan.",
    "GROQ_API_KEY_READONLY": "Groq API ključ je samo za čitanje i ne može se mijenjati.",
    "blocked_api_access": "Vaš Groq API plan ne dopušta pristup ovom modelu. Nadogradite Groq plan ili koristite network.corifeus.com proxy.",
    "rate_limit": "Dosegnut je AI limit. Pokušajte ponovno kasnije ili koristite vlastiti Groq API ključ u postavkama."
  },
  form: {
    error: {
      required: "Obavezno",
      port: "Luka je između 1-65535",
      invalid: "Obrazac je nevažeći"
    },
    connection: {
      label: {
        name: "Ime",
        group: "Group",
        host: "Naziv hosta",
        port: "Luka",
        password: "Lozinka",
        username: "Korisničko ime"
      }
    },
    treeSettings: {
      maxValueDisplay: "Maksimalna duljina niza za prikaz vrijednosti",
      maxValueDisplayInfo: "Ako je postavljeno na 0, prikaži pune vrijednosti. Ako je veći od 0, skrati na ovu duljinu. Ako je -1: za nizove, sakrijte vrijednost do uređivanja; za ostale vrste, prikaži puni sadržaj.",
      maxKeys: "Maksimalni broj ključeva",
      maxKeysInfo: "Kako se GUI ne bi srušio, ograničavamo maksimalan broj ključeva.",
      keyCount: (opts) => {
        return `Broj tipki: ${opts?.keyCount ?? 0}`;
      },
      label: {
        animation: "Koristite animaciju",
        noAnimation: "Nema animacije",
        undoEnabled: "Poni\u0161tavanje uklju\u010deno",
        undoDisabled: "Poni\u0161tavanje isklju\u010deno",
        diffEnabled: "Prika\u017ei diff prije spremanja",
        diffDisabled: "Diff prije spremanja je isklju\u010den",
        jsonFormatTwoSpace: "Format JSON s 2 razmaka",
        jsonFormatFourSpace: "Format JSON s 4 razmaka",
        formName: "Redis postavke",
        searchModeClient: "Način pretraživanja klijenata",
        searchModeServer: "Način pretraživanja poslužitelja",
        searchModeStartsWith: "Pretraga s počinje s načinom",
        searchModeIncludes: "Pretraga uključuje način"
      },
      undoHint: "Poni\u0161tavanje je dostupno samo za string i JSON vrste klju\u010deva",
      field: {
        treeSeparator: "Razdjelnik stabala",
        treeSeparatorSelector: "Selektor separatora stabla",
        page: "Broj stranica stabla",
        keyPageCount: "Broj straničnih stranica",
        keysSort: "Razvrstaj ključeve",
        searchMode: "Način pretraživanja",
        searchModeStartsWith: "Pretraživanje počinje s / uključuje"
      },
      error: {
        keyPageCount: "Broj ključnih stranica mora biti cijeli broj između 5 - 100",
        page: "Broj stranica mora biti cijeli broj između 10 - 5000",
        maxValueDisplay: "Maksimalna prikazana vrijednost mora biti cijeli broj između -1 i 32768",
        maxKeys: "Maksimalna vrijednost broja ključeva mora biti cijeli broj između 100 i 100 000"
      }
    },
    key: {
      label: {
        formName: {
          add: "Dodajte novi ključ Redis",
          edit: "Uredi ključ Redis",
          append: "Dodajte postojećem ključu Redis"
        }
      },
      field: {
        streamTimestamp: "Vremenska oznaka",
        key: "Ključ",
        type: "Vrsta",
        index: "Indeks",
        hashKey: "Hash ključ",
        score: "rezultat",
        value: "Vrijednost",
        errorRate: "Stopa pogreške",
        capacity: "Kapacitet",
        topk: "Top K",
        width: "Širina",
        depth: "Dubina",
        decay: "Raspad",
        compression: "Kompresija",
        increment: "Inkrement",
        item: "Stavka",
        vectorValues: "Vektorske vrijednosti (odvojene zarezom)",
        element: "Naziv elementa",
      },
      error: {
        streamTimestamp: "Vremenska oznaka je obavezna, u formatu Redis ili kao *",
        key: "Ključ je, barem, jedan znak",
        hashKey: "Ključ hash tablice je najmanje jedan znak",
        score: "Potreban je poredani rezultat seta",
        value: "Vrijednost je obavezna",
        errorRate: "Stopa pogreške mora biti između 0 i 1 (npr. 0.01)",
        capacity: "Kapacitet mora biti pozitivan cijeli broj",
        topk: "Top K mora biti pozitivan cijeli broj",
        width: "Širina mora biti pozitivan cijeli broj",
        depth: "Dubina mora biti pozitivan cijeli broj",
        item: "Stavka je obavezna"
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
      hybridMode: "Hibridno pretraživanje (FT.HYBRID)",
      vectorField: "Vektorsko polje",
      vectorValues: "Vektorske vrijednosti",
    },
    monitor: {
      title: "Nadzor",
      memory: "Memorija",
      opsPerSec: "Operacija/sek",
      clients: "Klijenti",
      blocked: "Blokirani",
      hitsMisses: "Stopa pogodaka",
      networkIo: "Mrežni I/O",
      slowLog: "Spori log",
      noSlowQueries: "Nema zabilježenih sporih upita.",
      confirmSlowLogReset: "Jeste li sigurni da želite poništiti spori dnevnik?",
      slowLogResetDone: "Spori dnevnik je poništen.",
      totalCommands: "Ukupno",
      expired: "Isteklo",
      evicted: "Izbačeno",
      clientList: "Popis klijenata",
      topKeys: "Najveći ključevi po memoriji",
      killClient: "Ubij klijenta",
      clientKilled: "Klijent ubijen",
      confirmKillClient: "Jeste li sigurni da želite zaustaviti ovog klijenta?",
      noKeys: "Nema ključeva",
      rss: "RSS",
      peak: "Vrh",
      fragmentation: "Fragmentacija",
      hitsAndMisses: "Pogoci / Promašaji",
      noClients: "Nema klijenata",
      slotStats: "Statistika slotova klastera",
      serverInfo: "Informacije o poslužitelju",
      os: "Operativni sustav",
      port: "Mrežni priključak",
      pid: "ID procesa",
      configFile: "Konfiguracijska datoteka",
      uptime: "Vrijeme rada",
      keyspace: "Redis prostor ključa",
      keys: "Redis tipke",
      expires: "ističe",
      noKeyspace: "Nema ključeva",
      persistence: "Postojanost podataka",
      rdbLastSave: "RDB zadnje spremanje",
      rdbStatus: "RDB status",
      rdbChanges: "Promjene od posljednjeg spremanja",
      aofEnabled: "AOF omogućen",
      aofSize: "Veličina AOF",
      replication: "Redis Replikacija",
      role: "Uloga replikacije",
      replicas: "Povezane replike",
      masterHost: "Primarni domaćin",
      linkStatus: "Status replikacijske veze",
      cpu: "Upotreba CPU-a",
      cpuSys: "sustav",
      cpuUser: "Korisnik",
      modules: "Učitani Redis moduli",
      noModules: "Nema učitanih Redis modula",
      clusterSlotMap: "Mapa utora klastera Redis",
      slotRange: "Raspon utora klastera",
      totalSlots: "Ukupno mjesta klastera",
      noClusterData: "Nema dostupnih podataka Redis klastera.",
    },
    analysis: {
      title: "Analiza memorije",
      runAnalysis: "Pokreni analizu",
      running: "Analiziranje...",
      typeDistribution: "Distribucija tipova",
      prefixMemory: "Memorija po prefiksu",
      topKeysByMemory: "Najveći ključevi po memoriji",
      expirationOverview: "Istek ključeva",
      memoryBreakdown: "Raspodjela memorije",
      keysScanned: "Skenirani ključevi",
      totalMemory: "Ukupna memorija",
      rssMemory: "RSS memorija",
      peakMemory: "Vršna memorija",
      luaMemory: "Lua memorija",
      overheadMemory: "Dodatno opterećenje",
      datasetMemory: "Skup podataka",
      fragmentation: "Fragmentacija",
      allocator: "Alokator",
      withTTL: "S TTL",
      persistent: "Trajni",
      avgTTL: "Prosječni TTL",
      prefix: "Prefiks",
      keyCount: "Broj ključeva",
      memoryUsage: "Korištenje memorije",
      noPrefix: "(bez prefiksa)",
      topN: "Top N",
      maxScanKeys: "Maks. skeniranih ključeva",
      type: "Tip",
      noData: "Nema podataka. Kliknite Pokreni analizu za početak.",
      exportAll: "Izvezi sve",
      memoryDoctor: "Memory Doctor",
      doctorNoData: "Pritisnite Osvježi za pokretanje Memory Doctor dijagnostike.",
    },
    acl: {
      title: "ACL korisnici",
      loadUsers: "Učitaj korisnike",
      loading: "Učitavanje...",
      username: "Korisničko ime",
      status: "Status",
      enabled: "Omogućeno",
      disabled: "Onesposobljeno",
      commands: "Naredbe",
      commandsHint: "npr. +@all or +@read -@dangerous",
      keys: "Redis ključni uzorci",
      keysHint: "npr. ~* or ~user:*",
      channels: "Pub/Sub kanali",
      channelsHint: "npr. &* or &notifications:*",
      password: "Lozinka",
      noPassword: "Bez zaporke (nopass)",
      passwordHint: "Ostavite prazno kako biste zadržali trenutnu lozinku",
      currentUser: "Trenutni",
      createUser: "Stvori korisnika",
      editUser: "Uredi korisnika",
      deleteUser: "Izbriši",
      confirmDelete: "Jeste li sigurni da želite izbrisati ACL korisnika?",
      userDeleted: "Korisnik ACL je izbrisan.",
      userSaved: "Korisnik ACL je spremljen.",
      cannotDeleteDefault: "Nije moguće izbrisati zadanog korisnika.",
      cannotDeleteSelf: "Nije moguće izbrisati trenutno povezanog korisnika.",
      noUsers: "ACL zahtijeva Redis 6.0+.",
      groupCommon: "Općenito",
      groupDataTypes: "Vrste podataka",
      groupOperations: "Operacije",
      rules: "Pravila",
      rulesHint: "Tokeni odvojeni razmakom (na primjer on >password +@all ~* &*)",
      defaultUserWarning: "Oprez: Promjena zadanog korisnika može zaključati sve veze. Ako se to dogodi, morat ćete ponovno pokrenuti Redis ili upotrijebiti redis-cli za vraćanje pristupa.",
    },
    overview: {
      noConnected: "Ne postoji veza sa Redis.",
      overviewClients: "Navedite povezane prema broju klijenata",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "1 klijent";
        }
        return `${opt.length} klijentima`;
      }
    },
    key: {
      label: {
        key: "Ključ",
        encoding: "Kodiranje",
        compression: "Kompresija",
        aiRateLimited: "Dosegnuto je ograničenje AI zahtjeva. Pokušajte ponovno kasnije ili koristite vlastiti Groq API ključ u Postavkama.",
        aiError: "AI upit nije uspio",
        length: "Veličina",
        ttl: "TTL",
        ttlTitle: "Vrijeme za život",
        type: "Vrsta",
        ttlNotExpire: "ne ističe",
        lengthString: "bajtova",
        lengthItem: "stavke",
        actions: "Radnje"
      },
      list: {
        table: {
          index: "Indeks",
          value: "Vrijednost"
        }
      },
      hash: {
        table: {
          hashkey: "Hashkey",
          value: "Vrijednost"
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
          timestamp: "ID vremenske oznake",
          field: "Polje",
          value: "Vrijednost"
        }
      },
      timeseries: {
        chart: "Grafikon",
        info: "Informacije",
        addPoint: "Dodaj podatkovnu točku",
        from: "Od (ms ili -)",
        to: "Do (ms ili +)",
        aggregation: "Agregacija",
        timeBucket: "Spremnik (ms)",
        none: "Nema",
        dataPoints: "podatkovne točke",
        labels: "Oznake",
        rules: "Pravila",
        retention: "Zadržavanje",
        timestamp: "Vremenska oznaka",
        value: "Vrijednost",
        retentionHint: "0 = bez isteka, ili milisekunde",
        duplicatePolicy: "Pravilo dupliciranja",
        labelsHint: "key1 value1 key2 value2",
        timestampHint: "'*' znači automatski generirano, ili milisekundna vremenska oznaka",
        editAllHint: "Jedna podatkovna točka po retku: vremenska_oznaka vrijednost (vremenska oznaka može biti * za automatsko)",
        autoSpread: "Automatski * interval širenja",
        formula: "Formula",
        formulaLinear: "Linearna",
        formulaRandom: "Nasumična",
        formulaSawtooth: "Pilasta",
        formulaPoints: "Točke",
        formulaAmplitude: "Amplituda",
        formulaOffset: "Pomak",
        generate: "Generiraj",
        exportChart: "Izvezi PNG",
        overlay: "Preklapanje ključeva",
        overlayHint: "Ključevi odvojeni zarezom",
        mrangeFilter: "Filter oznaka",
        bulkMode: "Masovno generiranje",
        mrangeHint: "npr. sensor=temp"
      },
      probabilistic: {
        info: "Informacije",
        addItem: "Dodaj stavku",
        checkItem: "Provjeri stavku",
        item: "Stavka",
        exists: "Postoji",
        doesNotExist: "Ne postoji",
        topkList: "Najpopularnije stavke",
        topkCount: "Broj",
        queryCount: "Broj upita",
        queryResult: "Rezultat upita",
        addedSuccessfully: "Stavka uspješno dodana",
        deletedSuccessfully: "Stavka uspješno obrisana",
        quantile: "Kvantil",
        quantileResult: "Rezultat",
        noItems: "Nema stavki za prikaz",
        resetConfirm: "Resetirati sve podatke u ovom T-Digest-u?",
      },
      vectorset: {
        info: "Informacije",
        elements: "Elementi",
        similarity: "Pretraživanje sličnosti",
        searchByElement: "Pretraži po elementu",
        searchByVector: "Pretraži po vektoru",
        vectorValues: "Vektorske vrijednosti",
        element: "Element",
        score: "Rezultat",
        count: "Broj",
        addElement: "Dodaj element",
        attributes: "Atributi",
        noAttributes: "Nema atributa",
        dimensions: "Dimenzije",
        removeConfirm: "Ukloniti ovaj element iz VectorSet-a?",
        noElements: "Nema elemenata",
        filter: "Filtar",
        searchComplete: "Pretraživanje završeno",
      }
    },
    treeControls: {
      settings: "Postavke stabla",
      expandAll: "Proširi sve",
      collapseAll: "Sažmi sve",
      level: "Razina",
      search: {
        search: "Traži u ključevima",
        clear: "Izbrišite trenutno pretraživanje da biste ga postavili praznim",
        placeholderClient: "Pretraži klijentsku stranu",
        placeholderServer: "Pretraživanje na strani poslužitelja",
        info: (opts) => "Pretraživanje na strani klijenta znači da odgovara tekstu u unosu pretraživanja. Pretraživanje na strani poslužitelja znači da je to poput pretraživanja u uzorcima ključeva kao *{search-text}*. Za velike skupove pretraživanja bolje je koristiti pretraživanje na strani poslužitelja. Za manje skupove pretraživanja, bolje je koristiti način pretraživanja na strani klijenta." + ` Ako je brojanje ključeva gotovo ${opts?.maxLightKeysCount ?? 110000}, možete pretraživati samo na strani poslužitelja.`,
        largeSetInfo: "U velikom skupu, pretraživanje na strani klijenta je onemogućeno. tako da je trenutno moguće samo pretraživanje na strani poslužitelja.",
        infoDetails: "Da biste saznali kako pretraživanje radi, pogledajte postavke"
      },
      pager: {
        next: "Dalje",
        prev: "Prethodno",
        first: "Prvo",
        last: "Zadnje"
      }
    }
  },
  time: {
    years: "godina",
    months: "mjeseca",
    days: "dana",
    year: "godine",
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
    timeseries: "Time Series",
    bloom: "Bloom filtar",
    cuckoo: "Cuckoo filtar",
    topk: "Top-K",
    cms: "Count-Min Sketch",
    tdigest: "T-Digest",
    vectorset: "VectorSet",
  },
  promo: {
    title: "AI Mrežni pomoćnik",
    description: "Otkrijte našeg besplatnog AI mrežnog pomoćnika na network.corifeus.com — analizirajte domene, IPs, DNS zapise, SSL certifikate, sigurnost e-pošte i mrežnu infrastrukturu. Pokreće AI za trenutne, sveobuhvatne rezultate.",
    disclaimer: "Ova se promocija prikazuje samo na demo web-mjestu i neće se pojaviti u Docker, Electron ili implementacijama web-aplikacija.",
    toastMessage: "Isprobajte naš besplatni AI mrežni pomoćnik na network.corifeus.com — analizirajte domene, DNS, SSL i više!",
    visit: "Posjetite network.corifeus.com"
  }
};
module.exports = strings;
