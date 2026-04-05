const strings = {
  error: {
    server_error: "Errore del server, riprova"
  },
  title: {
    donate: "Dona",
    jsonRecursive: "Espansione di tutte le foglie",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "Puoi scegliere una connessione Redis dal menu in basso a sinistra.",
    statistics: "Statistiche",
    error: "Errore",
    connectingRedis: "Connessione a Redis ...",
    socketioConnectError: "Errore Socket.IO",
    db: "DB",
    server: "Server",
    clients: "Client",
    memory: "Memoria",
    persistence: "Persistenza",
    stats: "Statistiche",
    replication: "Replica",
    cpu: "CPU",
    cluster: "Cluster",
    modules: "Moduli",
    errorstats: "Statistiche errori",
    commandstats: "Statistiche comandi",
    latencystats: "Statistiche latenza",
    keysizes: "Dimensioni chiavi",
    threads: "Thread",
  },
  confirm: {
    dropIndex: "Sei sicuro di voler eliminare questo indice?",
    uploadBuffer: "Sei sicuro di voler caricare questi dati binari?",
    uploadBufferDone: "I dati binari sono stati caricati",
    uploadBufferDoneAndSave: "I dati binari sono stati caricati e salvati sul server",
    title: "Conferma",
    alert: "Avviso",
    info: "Info",
    deleteListItem: "Sei sicuro di voler eliminare questo elemento della lista?",
    deleteHashKey: "Sei sicuro di voler eliminare questo elemento della chiave hash?",
    deleteStreamTimestamp: "Sei sicuro di voler eliminare questo timestamp dello stream?",
    deleteSetMember: "Sei sicuro di voler eliminare questo membro del set?",
    deleteZSetMember: "Sei sicuro di voler eliminare questo membro del set ordinato?",
    deleteConnection: "Conferma",
    deleteConnectionText: "Sei sicuro di voler eliminare questa connessione Redis?",
    deleteNode: "Sei sicuro di voler eliminare questo nodo Redis?",
    delete: "Eliminare?",
    deleteAllKeys: opts => {
      return `Eliminare questo albero e tutte le sue chiavi (${opts.key})?`;
    },
    deleteSearchKeys: opts => {
      return `Sei sicuro di voler eliminare tutte le chiavi corrispondenti a "${opts.pattern}"? Trovate ${opts.count} chiavi.`;
    },
    socketioConnectError: "Socket.IO non riesce a connettersi al server. Puoi ricaricare e provare a risolvere l'errore di connessione, il client non sa come risolverlo da solo.",
    socketioAuthRequired: "Autorizzazione Socket.IO richiesta. Autenticati con HTTP Basic Auth (nome utente/password) e ricarica.",
    deleteKey: "Sei sicuro di voler eliminare questa chiave?",
    rename: {
      title: "Sei sicuro di voler rinominare questa chiave?",
      textContent: "Questa azione rinomina la chiave in modo permanente.",
      placeholder: "La chiave Redis (obbligatoria)"
    },
    ttl: {
      title: "Sei sicuro di voler modificare il TTL di questa chiave?",
      textContent: "La modifica del TTL aggiorna il tempo di vita di questa chiave. Lascia vuoto per mantenere questa chiave per sempre.",
      placeholder: "Il TTL della chiave Redis (intero o vuoto)",
      placeholderPlaceholder: "Vuoto significa che persiste per sempre; altrimenti inserisci un intero.",
      convertTextToTime: "Converti testo in tempo",
      convertTextToTimePlaceholder: "Es. 1d sarà 86400"
    },
  },
  language: {
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
    copy: "Copia",
    downloadBuffer: "Scarica binario",
    setBuffer: "Carica binario",
    exportKeys: "Esporta chiavi",
    exportAllKeys: (opts) => `Esporta tutte le ${opts.count} chiavi`,
    exportSearchResults: (opts) => `Esporta ${opts.count} risultati`,
    deleteAllKeysMenu: (opts) => `Elimina tutto ${opts.count}`,
    importKeys: "Importa chiavi",
    deleteSearchKeys: (opts) => `Elimina ${opts.count} chiavi corrispondenti`,
    saveWithFormatJson: "Salva con formato",
    formatJson: "Formatta JSON",
    wrap: "A capo",
    unwrap: "Non a capo",
    downloadJson: "Scarica JSON",
    pubsubMonitor: "PubSub",
    pulse: "Pulse",
    profiler: "Profiler",
    memoryAnalysis: "Analysis",
    language: "Lingua / Language",
    ok: "OK",
    addKey: "Aggiungi a questa chiave",
    addKeyRoot: "Aggiungi una chiave radice",
    reloadKey: "Ricarica chiave",
    reload: "Ricarica",
    close: "Chiudi",
    commands: "Comandi",
    view: "Visualizza",
    statistics: "Statistiche",
    refresh: "Aggiorna",
    pause: "Pausa",
    resume: "Riprendi",
    clear: "Cancella",
    rename: "Rinomina",
    main: "Database",
    cancel: "Annulla",
    theme: "Tema",
    github: "GitHub",
    githubRepo: "Repository",
    githubRelease: "Release",
    githubChangelog: "Changelog",
    info: "Info",
    settings: "Impostazioni",
    connect: "Connetti",
    disconnect: "Disconnetti",
    overview: "Panoramica",
    console: "Console",
    noConnections: "Nessuna connessione, aggiungi una connessione nel menu impostazioni.",
    noConnectionsInSettings: "Nessuna connessione, puoi aggiungere una NUOVA CONNESSIONE sopra.",
    connectionAdd: "Nuova connessione",
    addGroup: "Aggiungi gruppo",
    extend: "Espandi",
    collapse: "Comprimi",
    add: "Aggiungi",
    edit: "Modifica",
    save: "Salva",
    ttl: "Imposta TTL",
    delete: "Elimina",
    remove: "Rimuovi",
    areYouSure: "Sei sicuro?",
    sure: "Sicuro",
    testConnection: "Testa connessione",
    getKey: "Caricamento chiave Redis e dati associati ...",
    jsonViewShow: "Visualizza JSON",
    jsonViewEditor: "Modifica JSON",
    quickConsole: "Console Rapida",
  },
  label: {
    id: {
      nodeId: 'ID Nodo',
      id: "ID Connessione",
      info: "Se non vuoi modificare le proprietà di: sshPassword, sshPrivateKey, password, tlsCrt, tlsKey, tlsCa, inserisci l'ID della connessione in quelle proprietà per mantenere i valori intatti. Se vuoi la stessa logica per la password del nodo, inserisci l'ID del nodo nella password del nodo."
    },
    secureFeature: 'Se vedi un valore che inizia con P3X e sembra uguale, è una funzionalità di sicurezza. Per modificare le impostazioni, sostituisci queste impostazioni con vuoto o qualcos\'altro e verranno salvate. Se non modifichi le impostazioni, rimarranno come sono sul server.',
    aiTranslating: "Traduzione...",
    aiSettings: "Impostazioni IA",
    aiGroqApiKey: "Chiave API Groq",
    aiGroqApiKeyInfo: "Opzionale. La propria chiave API Groq per prestazioni migliori. Ottieni una chiave gratuita da",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "Chiave API IA salvata",
    aiGroqApiKeyInvalid: "Chiave API Groq non valida",
    aiGroqApiKeyNotSet: "Non impostato (predefinito del server)",
    aiEnabled: "IA abilitata",
    aiEnabledYes: "Sì",
    aiEnabledNo: "No",
    aiRouteViaNetwork: "Route via network.corifeus.com",
    aiRoutingDirect: "Le query vanno direttamente a Groq usando la propria chiave API, senza passare per network.corifeus.com.",
    aiRoutingNetwork: "Le query AI vengono instradate tramite network.corifeus.com. Se hai la tua chiave API Groq gratuita, puoi disattivare questo interruttore.",
    ssh: {
      on: 'SSH attivo',
      off: 'SSH disattivo',
      sshHost: 'Host SSH',
      sshPort: 'Porta SSH',
      sshUsername: 'Nome utente SSH',
      sshPassword: 'Password SSH',
      sshPrivateKey: 'Chiave privata SSH'
    },
    isBuffer: opts => `[object ArrayBuffer] significa che il valore è un dato binario o il valore è maggiore di ${opts.maxValueAsBuffer}`,
    streamValue: `Il campo e il valore dello stream sono su una riga. Es.: field1 value1 "field 2" "value 2"`,
    streamTimestampId: `'*' significa generato automaticamente o la specifica come <millisecondiTempo>-<numeroSequenza>`,
    unableToLoadKey: ({
      key
    }) => {
      return `Impossibile caricare questa chiave: ${key}. Possibile che la chiave sia stata eliminata. L'errore esatto è nella console.`;
    },
    bigJson: "Questo oggetto JSON è superiore a 10 kb, assicurati di sapere cosa stai facendo, perché alcune funzioni possono essere lente nel rendering.",
    addNode: "Aggiungi nodo",
    validateJson: "Valida JSON",
    reducedFunction: `Funzionalità ridotta`,
    tooManyKeys: opts => {
      return `Per le funzioni massime complete, il totale di chiavi consentite è ${opts.maxLightKeysCount}. Questo database supera il totale di chiavi consentite: ${opts.count}. L'ordinamento delle chiavi e le informazioni aggiuntive dell'albero sono disabilitate. La ricerca avviene solo sul server invece che sul client.`;
    },
    redisCommandNotFound: "Nessun comando Redis corrispondente trovato ...",
    treeKeyStore: `L'ordinamento (confronto naturale) viene eseguito sul client, cioè il browser, il che significa che per grandi set, come oltre 10k chiavi, potrebbe aggiungere un po' di tempo al rendering della pagina. Non esiste un ordinamento delle chiavi in Redis, solo così.`,
    socketIoTimeout: options => {
      return `Socket.IO ha raggiunto il timeout per questa richiesta (max ${options.timeout / 1000} secondi) ...`;
    },
    resizerInfo: options => {
      return `La larghezza minima del pannello sinistro o destro è ${options.width}px`;
    },
    jsonViewNotParsable: "Questo valore non è analizzabile come JSON  ",
    ttlTitle: "Imposta il TTL in secondi",
    passwordSecure: "La password potrebbe essere vuota, ma mostrerà comunque dei caratteri, questa è una funzionalità di sicurezza.",
    tlsWithoutCert: "Abilita TLS senza certificato aggiuntivo",
    tlsRejectUnauthorized: "Rifiuta certificato non autorizzato",
    tlsSecure: "Se vedi una configurazione TLS che inizia con P3X o tutte le impostazioni TLS sembrano uguali, è una funzionalità di sicurezza. Per modificare le impostazioni, sostituiscile con vuoto o qualcos'altro e verranno salvate. Se non modifichi le impostazioni TLS, rimarranno come sono sul server.",
    treeSeparatorEmpty: "Se il separatore dell'albero è vuoto, l'albero non avrà nodi annidati, solo una lista semplice",
    treeSeparatorEmptyNote: "Nessun nodo annidato, solo una lista semplice",
    welcomeConsole: "Benvenuto nella Console Redis",
    welcomeConsoleInfo: "La cronologia con cursore SU o GIÙ è abilitata",
    redisListIndexInfo: "Vuoto per aggiungere in coda, -1 per aggiungere in testa o salva nella posizione mostrata.",
    console: "Console",
    connectiondAdd: "Aggiungi connessione",
    connectiondEdit: "Modifica connessione",
    connectiondView: "Visualizza connessione",
    connections: "Connessioni",
    keysSort: {
      on: "Ordinamento chiavi attivo",
      off: "Ordinamento chiavi disattivo"
    },
    cluster: {
      on: "Cluster attivo",
      off: "Cluster disattivo"
    },
    sentinel: {
      on: "Sentinel attivo",
      off: "Sentinel disattivo",
      name: "Nome Sentinel"
    },
    readonly: {
      on: "Sola lettura attiva",
      off: "Sola lettura disattiva"
    },
    theme: {
      light: "Chiaro",
      dark: "Scuro enterprise",
      darkNeu: "Scuro",
      darkoBluo: "Darko bluo",
      enterprise: "Enterprise",
      redis: "Redis",
      matrix: "Matrix"
    },
    connected: opts => {
      return `Connesso: ${opts.name}`;
    },
    tree: "Albero",
    askAuth: "Richiedi autorizzazione",
    keyboardShortcuts: "Scorciatoie da tastiera",
    about: "Informazioni",
    supportedLanguages: "Lingue supportate",
    version: "Versione",
    redisVersion: "Versione di Redis",
    modules: "Moduli",
    shortcutRefresh: "Aggiorna",
    shortcutSearch: "Metti a fuoco la ricerca",
    shortcutNewKey: "Nuova chiave",
    shortcutDisconnect: "Disconnetti",
    themeAuto: "Automatico (sistema)",
    languageAuto: "Automatico (sistema)",
    shortcutCommandPalette: "Tavolozza comandi",
    commandPalette: "Tavolozza comandi",
    noResults: "Nessun risultato",
    redisCommandsReference: "Comandi Redis",
    ungrouped: "Senza gruppo",
    grouped: "Raggruppati",
    connectFirst: "Connettiti prima a un server Redis",
    searchLanguage: "Cerca lingua...",
    exportProgress: "Esportazione chiavi...",
    importProgress: "Importazione chiavi...",
    importPreview: "Anteprima",
    importOverwrite: "Sovrascrivi",
    importSkip: "Salta",
    importConflict: "Se la chiave esiste già:",
    noKeysToExport: "Nessuna chiave da esportare",
    time: "Tempo",
    type: "Tipo",
    format: "Formato",
    loading: "Caricamento...",
    autoRefresh: "Auto",
    exportSearchHint: "Esportazione solo delle chiavi corrispondenti alla ricerca corrente",
    importSearchHint: "L'importazione si applica all'intero database, non solo ai risultati della ricerca",
    deleteSearchHint: "Elimina tutte le chiavi corrispondenti alla ricerca corrente",
    deletingSearchKeys: "Eliminazione delle chiavi corrispondenti...",
    importNoKeys: "Nessuna chiave trovata nel file",
    desktopNotifications: "Notifiche desktop",
    desktopNotificationsEnabled: "Abilita notifiche desktop",
    desktopNotificationsInfo: "Ricevi notifiche del sistema operativo per disconnessioni e riconnessioni Redis quando l'app non è in primo piano.",
  },
  status: {
    dataCopied: "I dati sono negli appunti",
    exportDone: "Esportazione completata",
    deletedSearchKeys: (opts) => `${opts.count} chiavi eliminate`,
    indexCreated: "Indice creato",
    indexDropped: "Indice eliminato",
    importDone: (opts) => `Importazione completata: ${opts.created} creati, ${opts.skipped} saltati, ${opts.errors} errori`,
    nodeRemoved: "Nodo rimosso",
    keyIsNotExisting: "Questa chiave potrebbe essere stata eliminata o scaduta.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "Nessuna chiave";
      } else if (opts.keyCount === 1) {
        return "1 chiave";
      } else {
        return `${opts.keyCount} chiavi`;
      }
    },
    treeExpandAll: "Espandi tutte le foglie dell'albero. Questa operazione può essere costosa e richiedere tempo ...",
    noRedisKeys: "Non ci sono chiavi in questo database.",
    redisConnected: "Redis connesso con successo",
    reloadingDataInfo: "Ricaricamento informazioni dati Redis",
    added: "Aggiunto",
    saved: "Aggiornato",
    cancelled: "Annullato",
    deleted: "Eliminato",
    savedRedis: "Dati Redis salvati",
    redisDisconnected: opts => {
      return `La connessione corrente ha avuto un errore: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `L'indice del database impostato a ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `La chiave dell'albero è stata eliminata (${opts.key}).`;
    },
    deletedKey: opts => {
      return `La chiave è stata eliminata (${opts.key}).`;
    },
    renamedKey: "Questa chiave è stata rinominata",
    ttlChanged: "Il TTL di questa chiave è stato modificato",
    notInteger: "Questo input non è un intero",
    persisted: "Questa chiave è persistente per sempre",
    set: "La chiave è impostata/aggiunta",
    connectionRestored: "Connessione ripristinata",
  },
  code: {
    "delete-connection": "Questa connessione è stata eliminata, quindi sei disconnesso da questa istanza Redis.",
    "save-connection": "Questa connessione è stata modificata, quindi sei disconnesso da questa istanza Redis. Puoi riconnetterti.",
    "readonly-connections": "L'aggiunta/salvataggio/eliminazione delle connessioni è in sola lettura!",
    "readonly-connection-mode": "Questa connessione è in modalità sola lettura!",
    "list-out-of-bounds": "Questo indice della lista è fuori dai limiti",
    "invalid-json-value": "The value is not valid JSON.",
    "http_auth_required": "Autorizzazione richiesta: autenticati con HTTP Basic Auth e ricarica.",
    "auto-connection-failed": "Possibile che la connessione sia stata rimossa e la connessione automatica sia fallita per questo motivo.",
    invalid_console_command: "Questo comando non funziona tramite la GUI."
  },
  form: {
    error: {
      required: "Obbligatorio",
      port: "La porta è tra 1-65535",
      invalid: "Il modulo non è valido"
    },
    connection: {
      label: {
        name: "Nome",
        group: "Gruppo",
        host: "Nome host",
        port: "Porta",
        password: "Password",
        username: "Nome utente"
      }
    },
    treeSettings: {
      maxValueDisplay: "Lunghezza massima stringa di visualizzazione valore",
      maxValueDisplayInfo: "Se impostato a 0, mostra i valori completi. Se maggiore di 0, tronca a questa lunghezza. Se -1: per le stringhe, nasconde il valore fino alla modifica; per gli altri tipi, mostra il contenuto completo.",
      maxKeys: "Numero massimo di chiavi",
      maxKeysInfo: "Per evitare che la GUI si blocchi, limitiamo il numero massimo di chiavi.",
      keyCount: (opts) => {
        return `Numero di chiavi: ${opts?.keyCount ?? 0}`;
      },
      label: {
        animation: "Usa animazione",
        noAnimation: "Nessuna animazione",
        jsonFormatTwoSpace: "Formatta JSON con 2 spazi",
        jsonFormatFourSpace: "Formatta JSON con 4 spazi",
        formName: "Impostazioni Redis",
        searchModeClient: "Modalità ricerca client",
        searchModeServer: "Modalità ricerca server",
        searchModeStartsWith: "Ricerca con modalità inizia con",
        searchModeIncludes: "Ricerca con modalità contiene"
      },
      field: {
        treeSeparator: "Separatore albero",
        treeSeparatorSelector: "Selettore separatore albero",
        page: "Conteggio paginazione albero",
        keyPageCount: "Conteggio paginazione chiavi",
        keysSort: "Ordina le chiavi",
        searchMode: "Modalità di ricerca",
        searchModeStartsWith: "Ricerca inizia con / contiene"
      },
      error: {
        keyPageCount: "Il conteggio paginazione chiavi deve essere un intero tra 5 e 100",
        page: "Il conteggio paginazione deve essere un intero tra 10 e 5000",
        maxValueDisplay: "Il valore massimo di visualizzazione deve essere un intero tra -1 e 32768",
        maxKeys: "Il valore massimo del conteggio chiavi deve essere un intero tra 100 e 100000"
      }
    },
    key: {
      label: {
        formName: {
          add: "Aggiungi nuova chiave Redis",
          edit: "Modifica chiave Redis",
          append: "Aggiungi a chiave Redis esistente"
        }
      },
      field: {
        streamTimestamp: "Timestamp",
        key: "Chiave",
        type: "Tipo",
        index: "Indice",
        hashKey: "Chiave hash",
        score: "Punteggio",
        value: "Valore"
      },
      error: {
        streamTimestamp: "Il timestamp è obbligatorio, in formato Redis o come *",
        key: "La chiave deve essere almeno un carattere",
        hashKey: "La chiave della tabella hash deve essere almeno un carattere",
        score: "Il punteggio del set ordinato è obbligatorio",
        value: "Il valore è obbligatorio"
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
      title: "Ricerca",
      index: "Indice",
      query: "Query",
      results: "Risultati",
      noIndex: "Nessun indice trovato",
      createIndex: "Crea indice",
      dropIndex: "Elimina indice",
      indexInfo: "Info indice",
      indexName: "Nome indice",
      prefix: "Prefisso chiave (opzionale)",
      fieldName: "Nome campo",
    },
    monitor: {
      title: "Monitoraggio",
      memory: "Memoria",
      opsPerSec: "Ops/sec",
      clients: "Client",
      blocked: "Bloccati",
      hitsMisses: "Tasso di successo",
      networkIo: "Rete I/O",
      slowLog: "Log lento",
      totalCommands: "Totale",
      expired: "Scadute",
      evicted: "Sfrattate",
      clientList: "Lista client",
      topKeys: "Chiavi più grandi per memoria",
      killClient: "Termina client",
      clientKilled: "Client terminato",
      confirmKillClient: "Sei sicuro di voler terminare questo client?",
      noKeys: "Nessuna chiave",
      rss: "RSS",
      peak: "Picco",
      fragmentation: "Frammentazione",
      hitsAndMisses: "Successi / Mancati",
      noClients: "Nessun client",
    },
    analysis: {
      title: "Analisi Memoria",
      runAnalysis: "Esegui Analisi",
      running: "Analisi in corso...",
      typeDistribution: "Distribuzione Tipi",
      prefixMemory: "Memoria per Prefisso",
      topKeysByMemory: "Chiavi Più Grandi per Memoria",
      expirationOverview: "Scadenza Chiavi",
      memoryBreakdown: "Dettaglio Memoria",
      keysScanned: "Chiavi Analizzate",
      totalMemory: "Memoria Totale",
      rssMemory: "Memoria RSS",
      peakMemory: "Memoria di Picco",
      luaMemory: "Memoria Lua",
      overheadMemory: "Overhead",
      datasetMemory: "Dataset",
      fragmentation: "Frammentazione",
      allocator: "Allocatore",
      withTTL: "Con TTL",
      persistent: "Persistenti",
      avgTTL: "TTL Medio",
      prefix: "Prefisso",
      keyCount: "Conteggio Chiavi",
      memoryUsage: "Utilizzo Memoria",
      noPrefix: "(senza prefisso)",
      topN: "Top N",
      maxScanKeys: "Max. Chiavi Analizzate",
      type: "Tipo",
      noData: "Nessun dato. Clicca Esegui Analisi per iniziare.",
      exportAll: "Esporta Tutto",
    },

    overview: {
      noConnected: "Non c'è nessuna connessione a Redis.",
      overviewClients: "Elenca i connessi per numero di client",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "1 client";
        }
        return `${opt.length} client`;
      }
    },
    key: {
      label: {
        key: "Chiave",
        encoding: "Codifica",
        compression: "Compressione",
        aiRateLimited: "Limite di richieste AI raggiunto. Riprova più tardi o usa la tua chiave API Groq nelle Impostazioni.",
        aiError: "Query AI fallita",
        length: "Dimensione",
        ttl: "TTL",
        ttlTitle: "Tempo di vita",
        type: "Tipo",
        ttlNotExpire: "non scade",
        lengthString: "byte",
        lengthItem: "elementi",
        actions: "Azioni"
      },
      list: {
        table: {
          index: "Indice",
          value: "Valore"
        }
      },
      hash: {
        table: {
          hashkey: "Chiave hash",
          value: "Valore"
        }
      },
      set: {
        table: {
          value: "Membro"
        }
      },
      zset: {
        table: {
          value: "Membro",
          score: "Punteggio"
        }
      },
      stream: {
        table: {
          timestamp: "ID Timestamp",
          field: "Campo",
          value: "Valore"
        }
      },
      timeseries: {
        chart: "Grafico",
        info: "Info",
        addPoint: "Aggiungi punto",
        from: "Da (ms o -)",
        to: "A (ms o +)",
        aggregation: "Aggregazione",
        timeBucket: "Bucket (ms)",
        none: "Nessuno",
        dataPoints: "punti dati",
        labels: "Etichette",
        rules: "Regole",
        retention: "Conservazione",
        timestamp: "Timestamp",
        value: "Valore",
        retentionHint: "0 = nessuna scadenza, o millisecondi",
        duplicatePolicy: "Politica duplicati",
        labelsHint: "chiave1 valore1 chiave2 valore2",
        timestampHint: "'*' significa generato automaticamente, o timestamp in millisecondi",
        editAllHint: "Un punto dati per riga: timestamp valore (il timestamp può essere * per automatico)",
        autoSpread: "Intervallo di diffusione automatico *",
        formula: "Formula",
        formulaLinear: "Lineare",
        formulaRandom: "Casuale",
        formulaSawtooth: "Dente di sega",
        formulaPoints: "Punti",
        formulaAmplitude: "Ampiezza",
        formulaOffset: "Offset",
        generate: "Genera",
        exportChart: "Esporta PNG",
        overlay: "Sovrapponi chiavi",
        overlayHint: "Chiavi separate da virgola",
        mrangeFilter: "Filtro etichette",
        bulkMode: "Generazione di massa",
        mrangeHint: "es. sensor=temp"
      }
    },
    treeControls: {
      settings: "Impostazioni albero",
      expandAll: "Espandi tutto",
      collapseAll: "Comprimi tutto",
      level: "Livello",
      search: {
        search: "Cerca nelle chiavi",
        clear: "Cancella la ricerca corrente",
        placeholderClient: "Ricerca lato client",
        placeholderServer: "Ricerca lato server",
        info: (opts) => "La ricerca lato client significa che corrisponde al testo nell'input di ricerca. La ricerca lato server significa che cerca nei pattern delle chiavi come *{testo-di-ricerca}*. Per grandi set di ricerca, è meglio usare la ricerca lato server. Per set più piccoli, è meglio usare la ricerca lato client." + ` Se il conteggio delle chiavi supera ${opts?.maxLightKeysCount ?? 110000}, puoi cercare solo lato server.`,
        largeSetInfo: "In un set grande, la ricerca lato client è disabilitata, quindi al momento è possibile solo la ricerca lato server.",
        infoDetails: "Per scoprire come funziona la ricerca, consulta le impostazioni"
      },
      pager: {
        next: "Successivo",
        prev: "Precedente",
        first: "Primo",
        last: "Ultimo"
      }
    }
  },
  time: {
    type: "Tipo",
    format: "Formato",
    loading: "Caricamento...",
    years: "anni",
    months: "mesi",
    days: "giorni",
    year: "anno",
    month: "mese",
    day: "giorno",
    second: "secondo",
    seconds: "secondi",
    minute: "minuto",
    minutes: "minuti",
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
