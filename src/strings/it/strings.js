const strings = {
  error: {
    cleared_license: "Licenza cancellata",
    invalid_license: "Licenza non valida",
    license_max_devices_reached: "Numero massimo di dispositivi raggiunto",
    license_readonly: "La licenza può essere modificata solo dal terminale del server.",
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
    deleteAllKeys: opts => {
      return `Eliminare questo albero e tutte le sue chiavi (${opts.key})?`;
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
    license: {
      title: "Imposta licenza",
      textContent: "Se vuoi utilizzare le funzionalità a pagamento, contatta support@corifeus.com per richiedere una licenza. I prezzi sono Pro 400 HUF/mese (€1/mese) o 4,000 HUF/anno (€10/anno), ed Enterprise 1,200 HUF/mese (€3/mese) o 12,000 HUF/anno (€30/anno). L'annuale è 10 volte il mensile. Con il 27% di IVA, i totali sono Pro 500 HUF/mese (€1.27/mese) o 5,100 HUF/anno (€12.70/anno), Enterprise 1,500 HUF/mese (€3.81/mese) o 15,200 HUF/anno (€38.10/anno). La validazione della licenza richiede accesso a Internet. La licenza predefinita include 5 postazioni. Se hai bisogno di più postazioni, contattaci a support@corifeus.com.",
      placeholder: "Chiave di licenza"
    }
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
    importKeys: "Importa chiavi",
    saveWithFormatJson: "Salva con formato",
    formatJson: "Formatta JSON",
    wrap: "A capo",
    unwrap: "Non a capo",
    downloadJson: "Scarica JSON",
    pubsubMonitor: "PubSub Monitor",
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
    license: "Imposta licenza",
    delete: "Elimina",
    remove: "Rimuovi",
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
    aiGroqApiKeyNotSet: "Non impostato (predefinito del server)",
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
    licenseInfo: "Licenza",
    licenseEditable: "Licenza modificabile",
    licenseEditableYes: "Sì",
    licenseEditableNo: "No",
    licenseTerminalOnly: "La licenza può essere configurata solo dal terminale del server.",
    licenseTierPolicyTitle: "Politica dei livelli",
    licenseTierPolicyText: "<h4>Gratuito</h4>Solo Redis UI di base; nessun tunnel SSH, nessuna modalità connessione di sola lettura, nessun Cluster/Sentinel, nessuna modifica JSON/Caricamento binario/Download binario, nessun ReJSON.<br/><strong>Prezzo: 0 HUF/mese (€0/mese).</strong><br/><br/><h4>Pro</h4>Tunnel SSH, Modalità connessione di sola lettura (incluso --readonly-connections/-r), Modifica JSON, Caricamento binario, Download binario, ReJSON.<br/><strong>Prezzo base: 400 HUF/mese (€1/mese) o 4,000 HUF/anno (€10/anno).</strong><br/><strong>Totale con 27% IVA: 500 HUF/mese (€1.27/mese) o 5,100 HUF/anno (€12.70/anno).</strong><br/><br/><h4>Enterprise</h4>Tunnel SSH, Cluster e Sentinel, più Modifica JSON, Caricamento binario, Download binario, ReJSON; --readonly-connections/-r funziona anche.<br/><strong>Prezzo base: 1,200 HUF/mese (€3/mese) o 12,000 HUF/anno (€30/anno).</strong><br/><strong>Totale con 27% IVA: 1,500 HUF/mese (€3.81/mese) o 15,200 HUF/anno (€38.10/anno).</strong><br/><br/><h4>Regola annuale</h4>Il prezzo annuale è 10 volte il prezzo mensile.<br/><br/><h4>Postazioni</h4>La licenza predefinita include 5 postazioni. Se hai bisogno di più postazioni, contattaci a <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><br/><h4>Prova Enterprise</h4>10 giorni gratuiti per chiunque con un indirizzo email reale esistente (non email di test).<br/><hr/><h4>Dati di fatturazione via e-mail</h4>Nome, E-mail di fatturazione, Codice paese, Codice postale, Città, Indirizzo, Partita IVA (opzionale).<br/><br/><h4>Pagamento</h4>Il pagamento PayPal è disponibile solo in HUF (fiorino); dopo aver inviato il denaro a <a href='https://paypal.me/corifeus'>https://paypal.me/corifeus</a> ti invierò una fattura. Tutti i pagamenti non sono rimborsabili.<br/><br/><h4>IVA</h4>L'IVA viene aggiunta al prezzo (27% in Ungheria).<br/><hr/><h4>Contatto</h4>Se vuoi salutare o hai una domanda, contatta <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><hr/><h4>Lingua</h4>La fattura e la comunicazione e-mail della licenza sono in inglese. La valuta della fattura è HUF.<br/><hr/><h4>Nota</h4>La validazione della licenza richiede accesso a Internet.",
    licenseState: "Stato",
    licenseStateActive: "Attivo",
    licenseStateInactive: "Inattivo",
    licenseStateNoLicense: "Nessuna licenza",
    licenseKeyMasked: "Chiave salvata",
    licenseTier: "Livello",
    licenseValid: "Valida",
    licenseStatus: "Stato della licenza",
    licenseReason: "Motivo",
    licenseCheckedAt: "Verificata il",
    licenseStartsAt: "Inizia il",
    licenseExpiresAt: "Scade il",
    licenseDaysLeft: "Giorni rimanenti",
    licenseMaxDevices: "Dispositivi massimi",
    licenseActiveDevices: "Dispositivi attivi",
    licenseActiveDevicesInfo: "Se un dispositivo non è più in uso, la sua postazione viene rilasciata automaticamente dopo 75 minuti.",
    licenseCustomerEmail: "Email del cliente",
    licenseFeatures: "Funzionalità",
    licenseFeaturesEmpty: "Nessuna funzionalità extra",
    licenseFeatureReadonlyMode: "Modalità connessione di sola lettura",
    licenseFeatureReadonlyConnectionsFlag: "Connessioni di sola lettura (--readonly-connections/-r)",
    licenseFeatureSsh: "Tunnel SSH",
    licenseFeatureCluster: "Connessioni Cluster",
    licenseFeatureSentinel: "Connessioni Sentinel",
    licenseFeatureReJSON: "ReJSON (JSON data type)",
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
    proSshOnly: "SSH è disponibile in Pro o Enterprise.",
    proReadonlyOnly: "La modalità connessione di sola lettura è disponibile in Pro o Enterprise.",
    enterpriseClusterSentinelOnly: "Cluster e Sentinel sono disponibili solo in Enterprise.",
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
    loading: "Caricamento...",
    autoRefresh: "Auto",
    exportSearchHint: "Esportazione solo delle chiavi corrispondenti alla ricerca corrente",
    importSearchHint: "L'importazione si applica all'intero database, non solo ai risultati della ricerca",
    importNoKeys: "Nessuna chiave trovata nel file",
  },
  status: {
    dataCopied: "I dati sono negli appunti",
    licenseSaved: "Licenza salvata",
    exportDone: "Esportazione completata",
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
    set: "La chiave è impostata/aggiunta"
  },
  code: {
    "delete-connection": "Questa connessione è stata eliminata, quindi sei disconnesso da questa istanza Redis.",
    "save-connection": "Questa connessione è stata modificata, quindi sei disconnesso da questa istanza Redis. Puoi riconnetterti.",
    "readonly-connections": "L'aggiunta/salvataggio/eliminazione delle connessioni è in sola lettura!",
    "readonly-connection-mode": "Questa connessione è in modalità sola lettura!",
    "list-out-of-bounds": "Questo indice della lista è fuori dai limiti",
    "donation-ware-feature": "Questa funzionalità è presente nella versione donazione.",
    "feature-pro-readonly-required": "La modalità connessione di sola lettura richiede una licenza Pro o Enterprise.",
    "feature-pro-ssh-required": "Il tunnel SSH richiede una licenza Pro o Enterprise.",
    "feature-enterprise-cluster-sentinel-required": "Cluster e Sentinel richiedono una licenza Enterprise.",
    "feature-pro-json-binary-required": "Modifica JSON, Caricamento binario e Download binario richiedono una licenza Pro o Enterprise.",
    "feature-pro-rejson-required": "ReJSON (JSON data type) requires Pro or Enterprise license.",
    "invalid-json-value": "The value is not valid JSON.",
    "http_auth_required": "Autorizzazione richiesta: autenticati con HTTP Basic Auth e ricarica.",
    "auto-connection-failed": "Possibile che la connessione sia stata rimossa e la connessione automatica sia fallita per questo motivo.",
    invalid_console_command: "Questo comando non funziona tramite la GUI."
  },
  licenseReason: {
    LICENSE_VALID: "La licenza è valida",
    LICENSE_INVALID: "La licenza non è valida",
    LICENSE_MISSING: "Nessuna chiave di licenza impostata",
    LICENSE_DISABLED: "La licenza è disabilitata nella configurazione del server",
    LICENSE_NOT_FOUND: "Licenza non trovata",
    LICENSE_EXPIRED: "La licenza è scaduta",
    LICENSE_CLEARED: "La chiave di licenza è stata cancellata",
    LICENSE_MAX_DEVICES_REACHED: "Numero massimo di dispositivi raggiunto",
    PRODUCT_MISMATCH: "Il prodotto della licenza non corrisponde"
  },
  licenseStatusValue: {
    active: "Attivo",
    deleted: "Eliminato",
    all: "Tutti",
    expired: "Scaduto",
    missing: "Mancante",
    inactive: "Inattivo"
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
      keyCount: () => {
        return `Numero di chiavi: ${p3xr.state.keysRaw.length}`;
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
      noClients: "Nessun client",
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
      }
    },
    treeControls: {
      settings: "Impostazioni albero",
      expandAll: "Espandi tutto",
      collapseAll: "Comprimi tutto",
      search: {
        search: "Cerca nelle chiavi",
        clear: "Cancella la ricerca corrente",
        placeholderClient: "Ricerca lato client",
        placeholderServer: "Ricerca lato server",
        info: "La ricerca lato client significa che corrisponde al testo nell'input di ricerca. La ricerca lato server significa che cerca nei pattern delle chiavi come *{testo-di-ricerca}*. Per grandi set di ricerca, è meglio usare la ricerca lato server. Per set più piccoli, è meglio usare la ricerca lato client." + ` Se il conteggio delle chiavi supera ${p3xr.settings.maxLightKeysCount}, puoi cercare solo lato server.`,
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
    loading: "Caricamento...",
    years: "anni",
    months: "mesi",
    days: "giorni",
    year: "anno",
    month: "mese",
    day: "giorno"
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
