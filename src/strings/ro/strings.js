const strings = {
  error: {
    server_error: "Eroare de server, va rugam incercati din nou"
  },
  title: {
    donate: "Donatie",
    jsonRecursive: "Se extind toate ramurile",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "Puteti alege o conexiune Redis din meniul din stanga jos.",
    statistics: "Statistici",
    error: "Eroare",
    connectingRedis: "Conectare la Redis ...",
    socketioConnectError: "Eroare Socket.IO",
    db: "BD",
    server: "Server",
    clients: "Clienti",
    memory: "Memorie",
    persistence: "Persistenta",
    stats: "Statistici",
    replication: "Replicare",
    cpu: "CPU",
    cluster: "Cluster",
    modules: "Module",
    errorstats: "Statistici erori",
    commandstats: "Statistici comenzi",
    latencystats: "Statistici latență",
    keysizes: "Dimensiuni chei",
    threads: "Fire de execuție",
  },
  confirm: {
    dropIndex: "Sunteți sigur că doriți să ștergeți acest index?",
    uploadBuffer: "Sunteti sigur ca doriti sa incarcati aceste date binare?",
    uploadBufferDone: "Datele binare au fost incarcate",
    uploadBufferDoneAndSave: "Datele binare au fost incarcate si salvate pe server",
    title: "Confirmare",
    alert: "Alerta",
    info: "Informatii",
    deleteListItem: "Sunteti sigur ca doriti sa stergeti acest element din lista?",
    deleteHashKey: "Sunteti sigur ca doriti sa stergeti aceasta cheie hash?",
    deleteStreamTimestamp: "Sunteti sigur ca doriti sa stergeti aceasta marca temporala din stream?",
    deleteSetMember: "Sunteti sigur ca doriti sa stergeti acest membru al setului?",
    deleteZSetMember: "Sunteti sigur ca doriti sa stergeti acest membru al setului sortat?",
    deleteConnection: "Confirmare",
    deleteConnectionText: "Sunteti sigur ca doriti sa stergeti aceasta conexiune Redis?",
    deleteNode: "Sunteti sigur ca doriti sa stergeti acest nod Redis?",
    deleteAllKeys: opts => {
      return `Stergeti acest arbore si toate cheile sale (${opts.key})?`;
    },
    deleteSearchKeys: opts => {
      return `Sigur doriți să ștergeți toate cheile care corespund "${opts.pattern}"? S-au găsit ${opts.count} chei.`;
    },
    socketioConnectError: "Socket.IO nu se poate conecta la server, puteti reincarca si incerca sa rezolvati eroarea de conexiune singur, clientul nu stie cum sa o rezolve.",
    socketioAuthRequired: "Autorizarea Socket.IO este necesara. Va rugam autentificati-va cu HTTP Basic Auth (utilizator/parola) si reincarcati.",
    delete: "Stergeti?",
    deleteKey: "Sunteti sigur ca doriti sa stergeti aceasta cheie?",
    rename: {
      title: "Sunteti sigur ca doriti sa redenumiti aceasta cheie?",
      textContent: "Aceasta actiune redenumeste cheia permanent.",
      placeholder: "Cheia Redis (obligatoriu)"
    },
    ttl: {
      title: "Sunteti sigur ca doriti sa schimbati TTL-ul acestei chei?",
      textContent: "Schimbarea TTL-ului actualizeaza durata de viata a acestei chei. Lasati gol pentru a pastra cheia pentru totdeauna.",
      placeholder: "TTL-ul cheii Redis (numar intreg sau gol)",
      placeholderPlaceholder: "Gol inseamna ca persista pentru totdeauna; altfel introduceti un numar intreg.",
      convertTextToTime: "Convertire text in timp",
      convertTextToTimePlaceholder: "Ex. 1d va fi 86400"
    },
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
    copy: "Copiere",
    downloadBuffer: "Descarcare binar",
    setBuffer: "Incarcare binar",
    exportKeys: "Exportă chei",
    exportAllKeys: (opts) => `Exportă toate cele ${opts.count} chei`,
    exportSearchResults: (opts) => `Exportă ${opts.count} rezultate`,
    deleteAllKeysMenu: (opts) => `Șterge tot ${opts.count}`,
    importKeys: "Importă chei",
    deleteSearchKeys: (opts) => `Șterge ${opts.count} chei corespunzătoare`,
    saveWithFormatJson: "Salvare cu formatare",
    formatJson: "Formatare Json",
    wrap: "Încadrare",
    unwrap: "Fără încadrare",
    downloadJson: "Descarcă JSON",
    pubsubMonitor: "PubSub",
    pulse: "Pulse",
    profiler: "Profiler",
    memoryAnalysis: "Analysis",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "Limba / Language",
    ok: "OK",
    addKey: "Adaugare la aceasta cheie",
    addKeyRoot: "Adaugare cheie principala",
    reloadKey: "Reincarcare cheie",
    reload: "Reincarcare",
    close: "Inchide",
    commands: "Comenzi",
    view: "Vizualizare",
    statistics: "Statistici",
    refresh: "Actualizeaza",
    pause: "Pauză",
    resume: "Reluare",
    clear: "Curata",
    rename: "Redenumire",
    main: "Bază de date",
    cancel: "Anulare",
    theme: "Tema",
    github: "GitHub",
    githubRepo: "Depozit",
    githubRelease: "Versiuni",
    githubChangelog: "Jurnal de modificari",
    info: "Info",
    settings: "Setari",
    connect: "Conectare",
    disconnect: "Deconectare",
    overview: "Prezentare generala",
    console: "Consola",
    noConnections: "Nu exista conexiuni, adaugati o conexiune in meniul de setari.",
    noConnectionsInSettings: "Nu exista conexiuni, puteti adauga o CONEXIUNE NOUA mai sus.",
    connectionAdd: "Conexiune noua",
    addGroup: "Adăugare grup",
    extend: "Extindere",
    collapse: "Restrangere",
    add: "Adaugare",
    edit: "Editare",
    save: "Salvare",
    ttl: "Setare TTL",
    delete: "Stergere",
    remove: "Eliminare",
    areYouSure: "Ești sigur?",
    sure: "Sigur",
    testConnection: "Testare conexiune",
    getKey: "Se incarca cheia Redis si datele asociate ...",
    jsonViewShow: "Afisare JSON",
    jsonViewEditor: "Editare JSON",
    quickConsole: "Consola rapida",
  },
  label: {
    id: {
      nodeId: 'ID nod',
      id: "ID conexiune",
      info: "Daca nu doriti sa schimbati proprietatile: sshPassword, sshPrivateKey, password, tlsCrt, tlsKey, tlsCa, va rugam introduceti ID-ul conexiunii in acele proprietati pentru a pastra valorile intacte. Daca doriti aceeasi logica pentru parola nodului, introduceti ID-ul nodului in parola nodului."
    },
    secureFeature: 'Daca vedeti o valoare care incepe cu P3X si arata la fel, este o functie de securitate. Pentru a schimba setarile, inlocuiti aceste setari cu gol sau altceva si vor fi salvate. Daca nu schimbati setarile, acestea vor ramane asa cum sunt pe server.',
    aiTranslating: "Se traduce...",
    aiSettings: "Setări AI",
    aiGroqApiKey: "Cheie API Groq",
    aiGroqApiKeyInfo: "Opțional. Cheia API Groq proprie pentru performanță mai bună. Obțineți o cheie gratuită de la",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "Cheie API AI salvată",
    aiGroqApiKeyInvalid: "Invalid Groq API key",
    aiGroqApiKeyNotSet: "Nesetat (implicit server)",
    aiEnabled: "AI activat",
    aiEnabledYes: "Da",
    aiEnabledNo: "Nu",
    aiRouteViaNetwork: "Route via network.corifeus.com",
    aiRoutingDirect: "Queries go directly to Groq using your own API key, bypassing network.corifeus.com.",
    aiRoutingNetwork: "AI queries are routed through network.corifeus.com. If you have your own free Groq API key, you can turn off this switch to route directly to Groq without network.corifeus.com.",
    ssh: {
      on: 'SSH activat',
      off: 'SSH dezactivat',
      sshHost: 'Gazda SSH',
      sshPort: 'Port SSH',
      sshUsername: 'Utilizator SSH',
      sshPassword: 'Parola SSH',
      sshPrivateKey: 'Cheie privata SSH'
    },
    isBuffer: opts => `[object ArrayBuffer] inseamna ca valoarea este date binare sau valoarea este mai mare decat ${opts.maxValueAsBuffer}`,
    streamValue: `Campul si valoarea stream-ului sunt pe o singura linie. Ex.: camp1 valoare1 "camp 2" "valoare 2"`,
    streamTimestampId: `'*' inseamna generat automat sau specificatia ca <millisecondsTime>-<sequenceNumber>`,
    unableToLoadKey: ({
      key
    }) => {
      return `Nu s-a putut incarca aceasta cheie: ${key}. Posibil, cheia a fost stearsa. Eroarea exacta este in consola.`;
    },
    bigJson: "Acest obiect JSON depaseste 10 kb, asigurati-va ca stiti ce faceti, deoarece unele functii pot fi lente la randare.",
    addNode: "Adaugare nod",
    validateJson: "Validare JSON",
    reducedFunction: `Functionalitate redusa`,
    tooManyKeys: opts => {
      return `Pentru functiile complete maxime, numarul total de chei permis este ${opts.maxLightKeysCount}. Aceasta baza de date are mai mult decat cheile permise, totalul fiind ${opts.count}. Sortarea cheilor si informatiile suplimentare din arbore sunt dezactivate. Cautarea se face doar pe server in loc de cautarea pe client.`;
    },
    redisCommandNotFound: "Nu s-a gasit nicio comanda Redis potrivita ...",
    treeKeyStore: `Sortarea (comparare naturala) se executa pe client (adica browserul), ceea ce inseamna ca are un cost pentru seturi mari, cum ar fi peste 10k chei, ar putea adauga putin timp la randarea paginii. Nu exista sortare de chei in Redis, doar in acest mod.`,
    socketIoTimeout: options => {
      return `Socket.IO a depasit limita de timp pentru aceasta cerere (maxim ${options.timeout / 1000} secunde) ...`;
    },
    resizerInfo: options => {
      return `Latimea minima a panoului stang sau drept este ${options.width}px`;
    },
    jsonViewNotParsable: "Aceasta valoare nu poate fi parsata ca JSON  ",
    ttlTitle: "Setati TTL-ul in secunde",
    passwordSecure: "Parola ar putea fi goala, dar tot va afisa caractere, aceasta este o functie de securitate.",
    tlsWithoutCert: "Activare TLS fara certificat suplimentar",
    tlsRejectUnauthorized: "Respingere certificat neautorizat",
    tlsSecure: "Daca vedeti o configuratie TLS care incepe cu P3X sau toate setarile TLS arata la fel, este o functie de securitate. Pentru a schimba setarile, inlocuiti aceste setari cu gol sau altceva si vor fi salvate. Daca nu schimbati setarile TLS, acestea vor ramane asa cum sunt pe server.",
    treeSeparatorEmpty: "Daca separatorul de arbore este gol, arborele nu va avea noduri imbricate, ci doar o lista simpla",
    treeSeparatorEmptyNote: "Fara noduri imbricate, doar o lista simpla",
    welcomeConsole: "Bine ati venit in consola Redis",
    welcomeConsoleInfo: "Istoricul cu tastele SUS sau JOS este activat",
    redisListIndexInfo: "Gol pentru a adauga la sfarsit, -1 pentru a adauga la inceput sau salvati la pozitia afisata.",
    console: "Consola",
    connectiondAdd: "Adaugare conexiune",
    connectiondEdit: "Editare conexiune",
    connectiondView: "Vizualizare conexiune",
    connections: "Conexiuni",
    keysSort: {
      on: "Sortare chei activata",
      off: "Sortare chei dezactivata"
    },
    cluster: {
      on: "Cluster activat",
      off: "Cluster dezactivat"
    },
    sentinel: {
      on: "Sentinel activat",
      off: "Sentinel dezactivat",
      name: "Nume Sentinel"
    },
    readonly: {
      on: "Doar citire activat",
      off: "Doar citire dezactivat"
    },
    theme: {
      light: "Luminos",
      dark: "Inchis enterprise",
      darkNeu: "Inchis",
      darkoBluo: "Darko bluo",
      enterprise: "Enterprise",
      redis: "Redis",
      matrix: "Matrix"
    },
    connected: opts => {
      return `Conectat: ${opts.name}`;
    },
    tree: "Arbore",
    askAuth: "Solicitare autorizare",
    keyboardShortcuts: "Comenzi rapide de la tastatură",
    about: "Despre",
    supportedLanguages: "Limbi acceptate",
    version: "Versiune",
    redisVersion: "Versiune Redis",
    modules: "Module",
    shortcutRefresh: "Reîmprospătare",
    shortcutSearch: "Focalizare căutare",
    shortcutNewKey: "Cheie nouă",
    shortcutDisconnect: "Deconectare",
    themeAuto: "Automat (sistem)",
    languageAuto: "Automat (sistem)",
    shortcutCommandPalette: "Paletă de comenzi",
    commandPalette: "Paletă de comenzi",
    noResults: "Fără rezultate",
    redisCommandsReference: "Comenzi Redis",
    ungrouped: "Fără grup",
    grouped: "Grupate",
    connectFirst: "Conectați-vă mai întâi la un server Redis",
    searchLanguage: "Caută limbă...",
    exportProgress: "Exportare chei...",
    importProgress: "Importare chei...",
    importPreview: "Previzualizare",
    importOverwrite: "Suprascrie",
    importSkip: "Omite",
    importConflict: "Dacă cheia există deja:",
    noKeysToExport: "Nu există chei de exportat",
    time: "Timp",
    type: "Tip",
    format: "Format",
    loading: "Se încarcă...",
    autoRefresh: "Auto",
    exportSearchHint: "Se exportă doar cheile care corespund căutării curente",
    importSearchHint: "Importul se aplică întregii baze de date, nu doar rezultatelor căutării",
    deleteSearchHint: "Șterge toate cheile care corespund căutării curente de pe server",
    deletingSearchKeys: "Se șterg cheile corespunzătoare...",
    importNoKeys: "Nu s-au găsit chei în fișier",
    desktopNotifications: "Notificări desktop",
    desktopNotificationsEnabled: "Activare notificări desktop",
    desktopNotificationsInfo: "Primiți notificări OS pentru deconectări și reconectări Redis când aplicația nu este în prim-plan.",
  },
  status: {
    dataCopied: "Datele sunt in clipboard",
    exportDone: "Export finalizat",
    deletedSearchKeys: (opts) => `${opts.count} chei șterse`,
    indexCreated: "Index creat",
    indexDropped: "Index șters",
    importDone: (opts) => `Import finalizat: ${opts.created} create, ${opts.skipped} omise, ${opts.errors} erori`,
    nodeRemoved: "Nodul a fost eliminat",
    keyIsNotExisting: "Aceasta cheie ar fi putut fi stearsa sau expirata.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "Nicio cheie";
      } else if (opts.keyCount === 1) {
        return "1 cheie";
      } else {
        return `${opts.keyCount} chei`;
      }
    },
    treeExpandAll: "Extindere toate ramurile arborelui. Aceasta operatie poate fi costisitoare si poate dura ...",
    noRedisKeys: "Nu exista chei in aceasta baza de date.",
    redisConnected: "Redis conectat cu succes",
    reloadingDataInfo: "Se reincarca informatiile de date Redis",
    added: "Adaugat",
    saved: "Actualizat",
    cancelled: "Anulat",
    deleted: "Sters",
    savedRedis: "Datele Redis au fost salvate",
    redisDisconnected: opts => {
      return `Conexiunea curenta a avut o eroare: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `Indexul bazei de date a fost setat la ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `Cheia din arbore a fost stearsa (${opts.key}).`;
    },
    deletedKey: opts => {
      return `Cheia a fost stearsa (${opts.key}).`;
    },
    renamedKey: "Aceasta cheie a fost redenumita",
    ttlChanged: "TTL-ul acestei chei a fost modificat",
    notInteger: "Aceasta valoare introdusa nu este un numar intreg",
    persisted: "Aceasta cheie este persistenta pentru totdeauna",
    set: "Cheia a fost setata/adaugata",
    connectionRestored: "Conexiune restabilită",
  },
  code: {
    "delete-connection": "Aceasta conexiune a fost stearsa, asa ca sunteti deconectat de la aceasta instanta Redis.",
    "save-connection": "Aceasta conexiune a fost modificata, asa ca sunteti deconectat de la aceasta instanta Redis. Va puteti reconecta.",
    "readonly-connections": "Adaugarea/salvarea/stergerea conexiunilor este doar in citire!",
    "readonly-connection-mode": "Aceasta conexiune este in mod doar citire!",
    "list-out-of-bounds": "Indexul acestei liste este in afara limitelor",
    "invalid-json-value": "The value is not valid JSON.",
    "http_auth_required": "Autorizare necesara: va rugam autentificati-va cu HTTP Basic Auth si reincarcati.",
    "auto-connection-failed": "Posibil, conexiunea a fost eliminata si conectarea automata a esuat din aceasta cauza.",
    invalid_console_command: "Aceasta comanda nu functioneaza prin GUI."
  },
  form: {
    error: {
      required: "Obligatoriu",
      port: "Portul este intre 1-65535",
      invalid: "Formularul este invalid"
    },
    connection: {
      label: {
        name: "Nume",
        group: "Grup",
        host: "Nume gazda",
        port: "Port",
        password: "Parola",
        username: "Utilizator"
      }
    },
    treeSettings: {
      maxValueDisplay: "Lungimea maxima de afisare a valorii",
      maxValueDisplayInfo: "Daca este setat la 0, afiseaza valorile complete. Daca este mai mare de 0, trunchiaza la aceasta lungime. Daca este -1: pentru siruri, ascunde valoarea pana la editare; pentru alte tipuri, afiseaza continutul complet.",
      maxKeys: "Numarul maxim de chei",
      maxKeysInfo: "Pentru ca GUI-ul sa nu se blocheze, limitam numarul maxim de chei.",
      keyCount: (opts) => {
        return `Numarul de chei: ${opts?.keyCount ?? 0}`;
      },
      label: {
        animation: "Foloseste animatie",
        noAnimation: "Fara animatie",
        jsonFormatTwoSpace: "Formatare JSON cu 2 spatii",
        jsonFormatFourSpace: "Formatare JSON cu 4 spatii",
        formName: "Setari Redis",
        searchModeClient: "Mod de cautare pe client",
        searchModeServer: "Mod de cautare pe server",
        searchModeStartsWith: "Cautare cu incepe cu",
        searchModeIncludes: "Cautare cu include"
      },
      field: {
        treeSeparator: "Separator arbore",
        treeSeparatorSelector: "Selector separator arbore",
        page: "Numar de paginare arbore",
        keyPageCount: "Numar de paginare chei",
        keysSort: "Sorteaza cheile",
        searchMode: "Mod de cautare",
        searchModeStartsWith: "Cautare incepe cu / include"
      },
      error: {
        keyPageCount: "Numarul de paginare a cheilor trebuie sa fie un numar intreg intre 5 - 100",
        page: "Numarul de paginare trebuie sa fie un numar intreg intre 10 - 5000",
        maxValueDisplay: "Valoarea maxima de afisare trebuie sa fie un numar intreg intre -1 si 32768",
        maxKeys: "Numarul maxim de chei trebuie sa fie un numar intreg intre 100 si 100000"
      }
    },
    key: {
      label: {
        formName: {
          add: "Adaugare cheie Redis noua",
          edit: "Editare cheie Redis",
          append: "Adaugare la cheia Redis existenta"
        }
      },
      field: {
        streamTimestamp: "Marca temporala",
        key: "Cheie",
        type: "Tip",
        index: "Index",
        hashKey: "Cheie hash",
        score: "Scor",
        value: "Valoare"
      },
      error: {
        streamTimestamp: "Marca temporala este obligatorie, fie in format Redis, fie ca *",
        key: "Cheia are cel putin un caracter",
        hashKey: "Cheia tabelului hash are cel putin un caracter",
        score: "Scorul setului sortat este obligatoriu",
        value: "Valoarea este obligatorie"
      }
    },
    main: {
      label: {
        database: "BD"
      }
    }
  },
  page: {
    search: {
      title: "Căutare",
      index: "Index",
      query: "Interogare",
      results: "Rezultate",
      noIndex: "Nu s-au găsit indexuri",
      createIndex: "Creează index",
      dropIndex: "Șterge index",
      indexInfo: "Info index",
      indexName: "Nume index",
      prefix: "Prefix cheie (opțional)",
      fieldName: "Nume câmp",
    },
    monitor: {
      title: "Monitorizare",
      memory: "Memorie",
      opsPerSec: "Operații/sec",
      clients: "Clienți",
      blocked: "Blocați",
      hitsMisses: "Rata de succes",
      networkIo: "Rețea I/O",
      slowLog: "Jurnal lent",
      totalCommands: "Total",
      expired: "Expirate",
      evicted: "Evacuate",
      clientList: "Lista clienților",
      topKeys: "Cele mai mari chei după memorie",
      killClient: "Oprește clientul",
      clientKilled: "Clientul a fost oprit",
      confirmKillClient: "Sunteți sigur că doriți să opriți acest client?",
      noKeys: "Fără chei",
      rss: "RSS",
      peak: "Vârf",
      fragmentation: "Fragmentare",
      hitsAndMisses: "Reușite / Ratări",
      noClients: "Fără clienți",
    },
    analysis: {
      title: "Analiză Memorie",
      runAnalysis: "Rulează Analiză",
      running: "Se analizează...",
      typeDistribution: "Distribuția Tipurilor",
      prefixMemory: "Memorie după Prefix",
      topKeysByMemory: "Cele Mai Mari Chei după Memorie",
      expirationOverview: "Expirarea Cheilor",
      memoryBreakdown: "Defalcarea Memoriei",
      keysScanned: "Chei Scanate",
      totalMemory: "Memorie Totală",
      rssMemory: "Memorie RSS",
      peakMemory: "Memorie de Vârf",
      luaMemory: "Memorie Lua",
      overheadMemory: "Suprasarcină",
      datasetMemory: "Set de Date",
      fragmentation: "Fragmentare",
      allocator: "Alocator",
      withTTL: "Cu TTL",
      persistent: "Permanente",
      avgTTL: "TTL Mediu",
      prefix: "Prefix",
      keyCount: "Număr de Chei",
      memoryUsage: "Utilizare Memorie",
      noPrefix: "(fără prefix)",
      topN: "Top N",
      maxScanKeys: "Max. Chei Scanate",
      type: "Tip",
      noData: "Fără date. Faceți clic pe Rulează Analiză pentru a începe.",
      exportAll: "Exportă Tot",
    },

    overview: {
      noConnected: "Nu exista conexiune la Redis.",
      overviewClients: "Listeaza conexiunile dupa numarul de clienti",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "1 client";
        }
        return `${opt.length} clienti`;
      }
    },
    key: {
      label: {
        key: "Cheie",
        encoding: "Codificare",
        compression: "Compresie",
        aiRateLimited: "Limita de solicitări AI a fost atinsă. Încercați din nou mai târziu sau utilizați propria cheie API Groq în Setări.",
        aiError: "Interogarea AI a eșuat",
        length: "Dimensiune",
        ttl: "TTL",
        ttlTitle: "Durata de viata",
        type: "Tip",
        ttlNotExpire: "nu expira",
        lengthString: "octeti",
        lengthItem: "elemente",
        actions: "Actiuni"
      },
      list: {
        table: {
          index: "Index",
          value: "Valoare"
        }
      },
      hash: {
        table: {
          hashkey: "Cheie hash",
          value: "Valoare"
        }
      },
      set: {
        table: {
          value: "Membru"
        }
      },
      zset: {
        table: {
          value: "Membru",
          score: "Scor"
        }
      },
      stream: {
        table: {
          timestamp: "ID marca temporala",
          field: "Camp",
          value: "Valoare"
        }
      },
      timeseries: {
        chart: "Grafic",
        info: "Informatii",
        addPoint: "Adauga punct de date",
        from: "De la (ms sau -)",
        to: "Pana la (ms sau +)",
        aggregation: "Agregare",
        timeBucket: "Interval (ms)",
        none: "Niciunul",
        dataPoints: "puncte de date",
        labels: "Etichete",
        rules: "Reguli",
        retention: "Retentie",
        timestamp: "Marca temporala",
        value: "Valoare",
        retentionHint: "0 = fara expirare, sau milisecunde",
        duplicatePolicy: "Politica de duplicate",
        labelsHint: "cheie1 valoare1 cheie2 valoare2",
        timestampHint: "'*' inseamna generare automata, sau marca temporala in milisecunde",
        editAllHint: "Un punct de date pe linie: marca_temporala valoare (marca_temporala poate fi * pentru auto)",
        autoSpread: "Interval de distribuire automata *",
        formula: "Formula",
        formulaLinear: "Liniar",
        formulaRandom: "Aleatoriu",
        formulaSawtooth: "Dinte de fierastrau",
        formulaPoints: "Puncte",
        formulaAmplitude: "Amplitudine",
        formulaOffset: "Decalaj",
        generate: "Genereaza",
        exportChart: "Exporta PNG",
        overlay: "Suprapunere chei",
        overlayHint: "Chei separate prin virgula",
        mrangeFilter: "Filtru etichete",
        bulkMode: "Generare în masă",
        mrangeHint: "ex. sensor=temp"
      }
    },
    treeControls: {
      settings: "Setari arbore",
      expandAll: "Extinde tot",
      collapseAll: "Restrange tot",
      level: "Nivel",
      search: {
        search: "Cautare in chei",
        clear: "Curata cautarea curenta",
        placeholderClient: "Cautare pe client",
        placeholderServer: "Cautare pe server",
        info: (opts) => "Cautarea pe client inseamna potrivirea textului din campul de cautare. Cautarea pe server inseamna cautare cu modele in chei ca *{text-cautat}*. Pentru seturi mari de cautare, este mai bine sa folositi cautarea pe server. Pentru seturi mai mici, este mai bine sa folositi cautarea pe client." + ` Daca numarul de chei depaseste ${opts?.maxLightKeysCount ?? 110000}, puteti cauta doar pe server.`,
        largeSetInfo: "Intr-un set mare, cautarea pe client este dezactivata, asa ca in acest moment doar cautarea pe server este posibila.",
        infoDetails: "Pentru a afla cum functioneaza cautarea, verificati setarile"
      },
      pager: {
        next: "Urmatorul",
        prev: "Anterior",
        first: "Primul",
        last: "Ultimul"
      }
    }
  },
  time: {
    type: "Tip",
    format: "Format",
    loading: "Se încarcă...",
    years: "ani",
    months: "luni",
    days: "zile",
    year: "an",
    month: "luna",
    day: "zi",
    second: "secunda",
    seconds: "secunde",
    minute: "minut",
    minutes: "minute",
    hour: "ora",
    hours: "ore"
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
