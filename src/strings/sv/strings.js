const strings = {
  error: {
    server_error: "Serverfel, vänligen försök igen"
  },
  title: {
    donate: "Donera",
    donateTitle: "Stöd P3X Redis UI",
    donateDescription: "P3X Redis UI är ett gratis projekt med öppen källkod. Kostnaderna för underhåll av appen, AI-funktioner, Docker-images, servrar och infrastruktur kommer ur utvecklarens egen ficka. Om du tycker att detta verktyg är användbart, överväg att stödja dess fortsatta utveckling med en donation. Varje bidrag hjälper projektet att leva och växa. Tack!",
    jsonRecursive: "Expanderar alla löv",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "Du kan välja en Redis-anslutning att ansluta till från menyn nere till vänster.",
    statistics: "Statistik",
    error: "Fel",
    connectingRedis: "Ansluter till Redis ...",
    socketioConnectError: "Socket.IO-fel",
    db: "DB",
    server: "Server",
    clients: "Klienter",
    memory: "Minne",
    persistence: "Persistens",
    stats: "Statistik",
    replication: "Replikering",
    cpu: "CPU",
    cluster: "Cluster",
    modules: "Moduler",
    errorstats: "Felstatistik",
    commandstats: "Kommandostatistik",
    latencystats: "Latensstatistik",
    keysizes: "Nyckelstorlekar",
    threads: "Trådar"
  },
  confirm: {
    dropIndex: "Är du säker på att du vill ta bort detta index?",
    uploadBuffer: "Är du säker på att du vill ladda upp denna binärdata?",
    uploadBufferDone: "Binärdatan har laddats upp",
    uploadBufferDoneAndSave: "Binärdatan har laddats upp och sparats på servern",
    title: "Bekräfta",
    alert: "Varning",
    info: "Info",
    deleteListItem: "Är du säker på att du vill radera detta listobjekt?",
    deleteHashKey: "Är du säker på att du vill radera denna hash-nyckel?",
    deleteStreamTimestamp: "Är du säker på att du vill radera denna stream-tidsstämpel?",
    deleteSetMember: "Är du säker på att du vill radera denna uppsättningsmedlem?",
    deleteZSetMember: "Är du säker på att du vill radera denna sorterade uppsättningsmedlem?",
    deleteConnection: "Bekräfta",
    deleteConnectionText: "Är du säker på att du vill radera denna Redis-anslutning?",
    deleteNode: "Är du säker på att du vill radera denna Redis-nod?",
    deleteAllKeys: opts => {
      return `Radera detta träd och alla dess nycklar (${opts.key})?`;
    },
    deleteSearchKeys: opts => {
      return `Är du säker på att du vill radera alla nycklar som matchar "${opts.pattern}"? Hittade ${opts.count} nycklar.`;
    },
    socketioConnectError: "Socket.IO kan inte ansluta till servern, du kan ladda om och försöka lösa anslutningsfelet själv, klienten vet inte hur den ska lösa det.",
    socketioAuthRequired: "Socket.IO-auktorisering krävs. Vänligen autentisera med HTTP Basic Auth (användarnamn/lösenord) och ladda om.",
    delete: "Radera?",
    deleteKey: "Är du säker på att du vill radera denna nyckel?",
    rename: {
      title: "Är du säker på att du vill byta namn på denna nyckel?",
      textContent: "Denna åtgärd byter namn på nyckeln permanent.",
      placeholder: "Redis-nyckeln (obligatorisk)"
    },
    ttl: {
      title: "Är du säker på att du vill ändra denna nyckels TTL?",
      textContent: "Att ändra TTL uppdaterar nyckelns livstid. Lämna tomt för att behålla nyckeln för alltid.",
      placeholder: "Redis-nyckelns TTL (heltal eller tomt)",
      placeholderPlaceholder: "Tomt betyder att den finns kvar för alltid; annars ange ett heltal.",
      convertTextToTime: "Konvertera text till tid",
      convertTextToTimePlaceholder: "T.ex. 1d blir 86400"
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
    copy: "Kopiera",
    downloadBuffer: "Ladda ner binär",
    setBuffer: "Ladda upp binär",
    exportKeys: "Exportera nycklar",
    exportAllKeys: (opts) => `Exportera alla ${opts.count} nycklar`,
    exportSearchResults: (opts) => `Exportera ${opts.count} resultat`,
    deleteAllKeysMenu: (opts) => `Radera alla ${opts.count}`,
    importKeys: "Importera nycklar",
    deleteSearchKeys: (opts) => `Radera ${opts.count} matchande nycklar`,
    saveWithFormatJson: "Spara med formatering",
    formatJson: "Formatera Json",
    wrap: "Radbrytning",
    unwrap: "Ingen radbrytning",
    downloadJson: "Ladda ner JSON",
    pubsubMonitor: "PubSub",
    pulse: "Pulse",
    profiler: "Profiler",
    memoryAnalysis: "Analysis",
    language: "Språk / Language",
    ok: "OK",
    addKey: "Lägg till i denna nyckel",
    addKeyRoot: "Lägg till en rotnyckel",
    reloadKey: "Ladda om nyckel",
    reload: "Ladda om",
    close: "Stäng",
    commands: "Kommandon",
    view: "Visa",
    statistics: "Statistik",
    refresh: "Uppdatera",
    pause: "Pausa",
    resume: "Återuppta",
    clear: "Rensa",
    rename: "Byt namn",
    main: "Databas",
    cancel: "Avbryt",
    theme: "Tema",
    github: "GitHub",
    githubRepo: "Förråd",
    githubRelease: "Utgåvor",
    githubChangelog: "Ändringslogg",
    info: "Info",
    settings: "Inställningar",
    connect: "Anslut",
    disconnect: "Koppla från",
    overview: "Översikt",
    console: "Konsol",
    noConnections: "Inga anslutningar, lägg till en anslutning i inställningsmenyn.",
    noConnectionsInSettings: "Inga anslutningar, du kan lägga till en NY ANSLUTNING ovan.",
    connectionAdd: "Ny anslutning",
    addGroup: "Lägg till grupp",
    extend: "Expandera",
    collapse: "Komprimera",
    add: "Lägg till",
    edit: "Redigera",
    save: "Spara",
    ttl: "Ange TTL",
    delete: "Radera",
    remove: "Ta bort",
    areYouSure: "Är du säker?",
    sure: "Säker",
    testConnection: "Testa anslutning",
    getKey: "Laddar Redis-nyckel och tillhörande data ...",
    jsonViewShow: "Visa JSON",
    jsonViewEditor: "Redigera JSON",
    quickConsole: "Snabbkonsol"
  },
  label: {
    id: {
      nodeId: 'Nod-ID',
      id: "Anslutnings-ID",
      info: "Om du inte vill ändra egenskaperna för: sshPassword, sshPrivateKey, password, tlsCrt, tlsKey, tlsCa, ange anslutningens ID i dessa egenskaper för att behålla värdena. Om du vill ha samma logik för nodlösenordet, ange nod-ID:t i nodlösenordet."
    },
    secureFeature: 'Om du ser ett värde som börjar med P3X och ser likadant ut, är det en säkerhetsfunktion. För att ändra inställningarna, ersätt dem med tomt eller något annat så sparas de. Om du inte ändrar inställningarna behålls de som de är på servern.',
    aiTranslating: "Översätter...",
    aiSettings: "AI-inställningar",
    aiGroqApiKey: "Groq API-nyckel",
    aiGroqApiKeyInfo: "Valfritt. Egen Groq API-nyckel för bättre prestanda. Skaffa en gratis nyckel på",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "AI API-nyckel sparad",
    aiGroqApiKeyInvalid: "Ogiltig Groq API-nyckel",
    aiGroqApiKeyNotSet: "Ej inställd (serverstandard)",
    aiEnabled: "AI aktiverad",
    aiEnabledYes: "Ja",
    aiEnabledNo: "Nej",
    aiRouteViaNetwork: "Dirigera via network.corifeus.com",
    aiRoutingDirect: "Frågor går direkt till Groq med din egen API-nyckel, utan network.corifeus.com.",
    aiRoutingNetwork: "AI-frågor dirigeras via network.corifeus.com. Om du har din egen gratis Groq API-nyckel kan du stänga av denna växel.",
    ssh: {
      on: 'SSH på',
      off: 'SSH av',
      sshHost: 'SSH-värd',
      sshPort: 'SSH-port',
      sshUsername: 'SSH-användarnamn',
      sshPassword: 'SSH-lösenord',
      sshPrivateKey: 'SSH privat nyckel'
    },
    isBuffer: opts => `[object ArrayBuffer] betyder att värdet är binärdata eller att värdet är större än ${opts.maxValueAsBuffer}`,
    streamValue: `Stream-fält och värde är på en rad. T.ex.: field1 value1 "field 2" "value 2"`,
    streamTimestampId: `'*' betyder autogenererat eller specifikationen som <millisekunderTid>-<sekvensnummer>`,
    unableToLoadKey: ({
      key
    }) => {
      return `Kan inte ladda denna nyckel: ${key}. Möjligen har nyckeln raderats. Det exakta felet finns i konsolen.`;
    },
    bigJson: "Detta JSON-objekt är över 10 kb, så se till att du vet vad du gör, eftersom vissa funktioner kan vara långsamma att rendera.",
    addNode: "Lägg till nod",
    validateJson: "Validera JSON",
    reducedFunction: `Reducerad funktionalitet`,
    tooManyKeys: opts => {
      return `Det maximala antalet nycklar för full funktionalitet är ${opts.maxLightKeysCount}. Denna databas har fler nycklar totalt ${opts.count}. Nyckelsortering och ytterligare trädinfo är inaktiverat. Sökningen sker bara på servern istället för klientsökning.`;
    },
    redisCommandNotFound: "Inget matchande Redis-kommando hittades ...",
    treeKeyStore: `Sorteringen (naturlig jämförelse) utförs på klienten, dvs. webbläsaren, vilket innebär att det finns en prestandakostnad för stora uppsättningar, som över 10k nycklar, det kan lägga till lite tid till sidans rendering. Det finns ingen nyckelsortering i Redis, bara så här.`,
    socketIoTimeout: options => {
      return `Socket.IO-förfrågan tog för lång tid (max ${options.timeout / 1000} sekunder) ...`;
    },
    resizerInfo: options => {
      return `Minsta bredd för vänster eller höger panel är ${options.width}px`;
    },
    jsonViewNotParsable: "Detta värde kan inte tolkas som JSON  ",
    ttlTitle: "Ange TTL i sekunder",
    passwordSecure: "Lösenordet kan vara tomt, men det visar fortfarande tecken, detta är en säkerhetsfunktion.",
    tlsWithoutCert: "Aktivera TLS utan ytterligare certifikat",
    tlsRejectUnauthorized: "Avvisa obehörigt certifikat",
    tlsSecure: "Om du ser en TLS-konfiguration som börjar med P3X eller alla TLS-inställningar ser likadana ut, är det en säkerhetsfunktion. För att ändra inställningarna, ersätt dem med tomt eller något annat så sparas de. Om du inte ändrar TLS-inställningarna behålls de som de är på servern.",
    treeSeparatorEmpty: "Om trädseparatorn är tom kommer trädet inte ha några kapslade noder, bara en ren lista",
    treeSeparatorEmptyNote: "Inga kapslade noder, bara en ren lista",
    welcomeConsole: "Välkommen till Redis-konsolen",
    welcomeConsoleInfo: "Piltangent UPP eller NER för historik är aktiverat",
    redisListIndexInfo: "Tomt för att lägga till sist, -1 för att lägga till först eller spara på den visade positionen.",
    console: "Konsol",
    connectiondAdd: "Lägg till anslutning",
    connectiondEdit: "Redigera anslutning",
    connectiondView: "Visa anslutning",
    connections: "Anslutningar",
    keysSort: {
      on: "Nyckelsortering på",
      off: "Nyckelsortering av"
    },
    cluster: {
      on: "Cluster på",
      off: "Cluster av"
    },
    sentinel: {
      on: "Sentinel på",
      off: "Sentinel av",
      name: "Sentinel-namn"
    },
    readonly: {
      on: "Skrivskydd på",
      off: "Skrivskydd av"
    },
    theme: {
      light: "Ljus",
      dark: "Mörk enterprise",
      darkNeu: "Mörk",
      darkoBluo: "Darko bluo",
      enterprise: "Enterprise",
      redis: "Redis",
      matrix: "Matrix"
    },
    connected: opts => {
      return `Ansluten: ${opts.name}`;
    },
    tree: "Träd",
    askAuth: "Fråga efter auktorisering",
    keyboardShortcuts: "Kortkommandon",
    about: "Om",
    supportedLanguages: "Språk som stöds",
    version: "Version",
    redisVersion: "Redis-version",
    modules: "Moduler",
    shortcutRefresh: "Uppdatera",
    shortcutSearch: "Fokusera sökning",
    shortcutNewKey: "Ny nyckel",
    shortcutDisconnect: "Koppla från",
    themeAuto: "Automatisk (system)",
    languageAuto: "Automatisk (system)",
    shortcutCommandPalette: "Kommandopalett",
    commandPalette: "Kommandopalett",
    noResults: "Inga resultat",
    redisCommandsReference: "Redis Kommandon",
    ungrouped: "Ogrupperad",
    grouped: "Grupperad",
    connectFirst: "Anslut först till en Redis-server",
    searchLanguage: "Sök språk...",
    exportProgress: "Exporterar nycklar...",
    importProgress: "Importerar nycklar...",
    importPreview: "Förhandsgranskning",
    importOverwrite: "Skriv över",
    importSkip: "Hoppa över",
    importConflict: "Om nyckeln redan finns:",
    noKeysToExport: "Inga nycklar att exportera",
    time: "Tid",
    type: "Typ",
    format: "Format",
    loading: "Laddar...",
    autoRefresh: "Auto",
    exportSearchHint: "Exporterar bara nycklar som matchar aktuell sökning",
    importSearchHint: "Import gäller hela databasen, inte bara sökresultat",
    deleteSearchHint: "Raderar alla nycklar som matchar den aktuella sökningen på servern",
    deletingSearchKeys: "Raderar matchande nycklar...",
    importNoKeys: "Inga nycklar hittades i filen",
    desktopNotifications: "Skrivbordsmeddelanden",
    desktopNotificationsEnabled: "Aktivera skrivbordsmeddelanden",
    desktopNotificationsInfo: "Få OS-meddelanden för Redis-frånkopplingar och återanslutningar när appen inte är i fokus."
  },
  status: {
    dataCopied: "Datan finns i urklipp",
    exportDone: "Export klar",
    deletedSearchKeys: (opts) => `${opts.count} nycklar raderade`,
    indexCreated: "Index skapat",
    indexDropped: "Index borttaget",
    importDone: (opts) => `Import klar: ${opts.created} skapade, ${opts.skipped} hoppade över, ${opts.errors} fel`,
    nodeRemoved: "Nod borttagen",
    keyIsNotExisting: "Denna nyckel kan ha raderats eller gått ut.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "Ingen nyckel";
      } else if (opts.keyCount === 1) {
        return "1 nyckel";
      } else {
        return `${opts.keyCount} nycklar`;
      }
    },
    treeExpandAll: "Expandera alla trädlöv. Denna operation kan vara kostsam och kan ta tid ...",
    noRedisKeys: "Det finns inga nycklar i denna databas.",
    redisConnected: "Redis anslutet framgångsrikt",
    reloadingDataInfo: "Laddar om Redis-datainfo",
    added: "Tillagd",
    saved: "Uppdaterad",
    cancelled: "Avbruten",
    deleted: "Raderad",
    savedRedis: "Redis-data är sparad",
    redisDisconnected: opts => {
      return `Den aktuella anslutningen hade ett fel: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `DB-index satt till ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `Trädnyckeln raderades (${opts.key}).`;
    },
    deletedKey: opts => {
      return `Nyckeln raderades (${opts.key}).`;
    },
    renamedKey: "Denna nyckel har bytt namn",
    ttlChanged: "Denna nyckels TTL har ändrats",
    notInteger: "Denna inmatning är inte ett heltal",
    persisted: "Denna nyckel finns kvar för alltid",
    set: "Nyckeln är satt/tillagd",
    connectionRestored: "Anslutningen återställd"
  },
  code: {
    "delete-connection": "Denna anslutning raderades, så du är frånkopplad från denna Redis-instans.",
    "save-connection": "Denna anslutning ändrades, så du är frånkopplad från denna Redis-instans. Du kan ansluta igen.",
    "readonly-connections": "Anslutningar lägg till/spara/radera är enbart skrivskyddade!",
    "readonly-connection-mode": "Denna anslutning är i skrivskyddat läge!",
    "list-out-of-bounds": "Detta listindex är utanför intervallet",
    "invalid-json-value": "The value is not valid JSON.",
    "http_auth_required": "Auktorisering krävs: vänligen autentisera med HTTP Basic Auth och ladda om.",
    "auto-connection-failed": "Möjligen togs anslutningen bort och den automatiska anslutningen misslyckades på grund av detta.",
    invalid_console_command: "Detta kommando fungerar inte via GUI.",
    "AI_DISABLED": "AI är inaktiverad. Aktivera det i AI-inställningar.",
    "AI_PROMPT_REQUIRED": "AI-förfrågan krävs.",
    "GROQ_API_KEY_READONLY": "Groq API-nyckeln är skrivskyddad och kan inte ändras.",
    "blocked_api_access": "Din Groq API-plan tillåter inte åtkomst till denna modell. Uppgradera din Groq-plan eller använd network.corifeus.com proxy.",
    "rate_limit": "AI-hastighetsgräns nådd. Försök igen senare eller använd din egen Groq API-nyckel i inställningarna."
  },
  form: {
    error: {
      required: "Obligatoriskt",
      port: "Porten måste vara mellan 1-65535",
      invalid: "Formuläret är ogiltigt"
    },
    connection: {
      label: {
        name: "Namn",
        group: "Grupp",
        host: "Värdnamn",
        port: "Port",
        password: "Lösenord",
        username: "Användarnamn"
      }
    },
    treeSettings: {
      maxValueDisplay: "Max visningslängd för värde",
      maxValueDisplayInfo: "Om satt till 0, visa fullständiga värden. Om större än 0, korta av till denna längd. Om -1: för strängar, dölj värdet tills redigering; för andra typer, visa fullständigt innehåll.",
      maxKeys: "Max antal nycklar",
      maxKeysInfo: "För att GUI:t inte ska krascha begränsar vi max antal nycklar.",
      keyCount: (opts) => {
        return `Antal nycklar: ${opts?.keyCount ?? 0}`;
      },
      label: {
        animation: "Använd animation",
        noAnimation: "Ingen animation",
        jsonFormatTwoSpace: "Formatera JSON med 2 mellanslag",
        jsonFormatFourSpace: "Formatera JSON med 4 mellanslag",
        formName: "Redis-inställningar",
        searchModeClient: "Klientsökningsläge",
        searchModeServer: "Serversökningsläge",
        searchModeStartsWith: "Sök med börjar-med-läge",
        searchModeIncludes: "Sök med innehåller-läge"
      },
      field: {
        treeSeparator: "Trädseparator",
        treeSeparatorSelector: "Trädseparatorväljare",
        page: "Trädpagineringsantal",
        keyPageCount: "Nyckelpagineringsantal",
        keysSort: "Sortera nycklarna",
        searchMode: "Sökläge",
        searchModeStartsWith: "Sök börjar med / innehåller"
      },
      error: {
        keyPageCount: "Nyckelsidantal måste vara ett heltal mellan 5 - 100",
        page: "Sidantalet måste vara ett heltal mellan 10 - 5000",
        maxValueDisplay: "Det maximala visningsvärdet måste vara ett heltal mellan -1 och 32768",
        maxKeys: "Det maximala nyckelantalet måste vara ett heltal mellan 100 och 100000"
      }
    },
    key: {
      label: {
        formName: {
          add: "Lägg till ny Redis-nyckel",
          edit: "Redigera Redis-nyckel",
          append: "Lägg till i befintlig Redis-nyckel"
        }
      },
      field: {
        streamTimestamp: "Tidsstämpel",
        key: "Nyckel",
        type: "Typ",
        index: "Index",
        hashKey: "Hash-nyckel",
        score: "Poäng",
        value: "Värde"
      },
      error: {
        streamTimestamp: "Tidsstämpeln krävs, antingen Redis-format eller som *",
        key: "Nyckeln måste ha minst ett tecken",
        hashKey: "Hash-tabellnyckeln måste ha minst ett tecken",
        score: "Sorterad uppsättningspoäng krävs",
        value: "Värdet krävs"
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
      title: "Sök",
      index: "Index",
      query: "Fråga",
      results: "Resultat",
      noIndex: "Inga index hittades",
      createIndex: "Skapa index",
      dropIndex: "Ta bort index",
      indexInfo: "Indexinfo",
      indexName: "Indexnamn",
      prefix: "Nyckelprefix (valfritt)",
      fieldName: "Fältnamn"
    },
    monitor: {
      title: "Övervakning",
      memory: "Minne",
      opsPerSec: "Ops/sek",
      clients: "Klienter",
      blocked: "Blockerade",
      hitsMisses: "Träffkvot",
      networkIo: "Nätverk I/O",
      slowLog: "Långsam logg",
      totalCommands: "Totalt",
      expired: "Utgångna",
      evicted: "Borttagna",
      clientList: "Klientlista",
      topKeys: "Största nycklar efter minne",
      killClient: "Avsluta klient",
      clientKilled: "Klient avslutad",
      confirmKillClient: "Är du säker på att du vill avsluta denna klient?",
      noKeys: "Inga nycklar",
      rss: "RSS",
      peak: "Topp",
      fragmentation: "Fragmentering",
      hitsAndMisses: "Träffar / Missar",
      noClients: "Inga klienter"
    },
    analysis: {
      title: "Minnesanalys",
      runAnalysis: "Kör analys",
      running: "Analyserar...",
      typeDistribution: "Typfördelning",
      prefixMemory: "Minne per prefix",
      topKeysByMemory: "Största nycklar per minne",
      expirationOverview: "Nyckelutgång",
      memoryBreakdown: "Minnesfördelning",
      keysScanned: "Skannade nycklar",
      totalMemory: "Totalt minne",
      rssMemory: "RSS-minne",
      peakMemory: "Toppminne",
      luaMemory: "Lua-minne",
      overheadMemory: "Overhead",
      datasetMemory: "Datauppsättning",
      fragmentation: "Fragmentering",
      allocator: "Allokator",
      withTTL: "Med TTL",
      persistent: "Permanenta",
      avgTTL: "Genomsnittlig TTL",
      prefix: "Prefix",
      keyCount: "Antal nycklar",
      memoryUsage: "Minnesanvändning",
      noPrefix: "(inget prefix)",
      topN: "Top N",
      maxScanKeys: "Max. skannade nycklar",
      type: "Typ",
      noData: "Ingen data. Klicka Kör analys för att starta.",
      exportAll: "Exportera allt"
    },

    overview: {
      noConnected: "Det finns ingen anslutning till Redis.",
      overviewClients: "Lista de anslutna efter antal klienter",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "1 klient";
        }
        return `${opt.length} klienter`;
      }
    },
    key: {
      label: {
        key: "Nyckel",
        encoding: "Kodning",
        compression: "Komprimering",
        aiRateLimited: "AI-förfrågningsgränsen har nåtts. Försök igen senare eller använd din egen Groq API-nyckel i Inställningar.",
        aiError: "AI-förfrågan misslyckades",
        length: "Storlek",
        ttl: "TTL",
        ttlTitle: "Livstid",
        type: "Typ",
        ttlNotExpire: "går inte ut",
        lengthString: "byte",
        lengthItem: "objekt",
        actions: "Åtgärder"
      },
      list: {
        table: {
          index: "Index",
          value: "Värde"
        }
      },
      hash: {
        table: {
          hashkey: "Hash-nyckel",
          value: "Värde"
        }
      },
      set: {
        table: {
          value: "Medlem"
        }
      },
      zset: {
        table: {
          value: "Medlem",
          score: "Poäng"
        }
      },
      stream: {
        table: {
          timestamp: "Tidsstämpel-ID",
          field: "Fält",
          value: "Värde"
        }
      },
      timeseries: {
        chart: "Diagram",
        info: "Info",
        addPoint: "Lägg till datapunkt",
        from: "Från (ms eller -)",
        to: "Till (ms eller +)",
        aggregation: "Aggregering",
        timeBucket: "Tidsintervall (ms)",
        none: "Ingen",
        dataPoints: "datapunkter",
        labels: "Etiketter",
        rules: "Regler",
        retention: "Lagring",
        timestamp: "Tidsstämpel",
        value: "Värde",
        retentionHint: "0 = ingen utgång, eller millisekunder",
        duplicatePolicy: "Dubblettpolicy",
        labelsHint: "nyckel1 värde1 nyckel2 värde2",
        timestampHint: "'*' betyder automatisk generering, eller tidsstämpel i millisekunder",
        editAllHint: "En datapunkt per rad: tidsstämpel värde (tidsstämpel kan vara * för auto)",
        autoSpread: "Automatiskt * spridningsintervall",
        formula: "Formel",
        formulaLinear: "Linjär",
        formulaRandom: "Slumpmässig",
        formulaSawtooth: "Sågtand",
        formulaPoints: "Punkter",
        formulaAmplitude: "Amplitud",
        formulaOffset: "Förskjutning",
        generate: "Generera",
        exportChart: "Exportera PNG",
        overlay: "Överlagra nycklar",
        overlayHint: "Kommaseparerade nycklar",
        mrangeFilter: "Etikettfilter",
        bulkMode: "Massgenerering",
        mrangeHint: "t.ex. sensor=temp"
      }
    },
    treeControls: {
      settings: "Trädinställningar",
      expandAll: "Expandera alla",
      collapseAll: "Komprimera alla",
      level: "Nivå",
      search: {
        search: "Sök bland nycklarna",
        clear: "Rensa aktuell sökning",
        placeholderClient: "Sök på klientsidan",
        placeholderServer: "Sök på serversidan",
        info: (opts) => "Klientsidessökning innebär att den matchar texten i sökfältet. Serversidessökning innebär att den söker i nyckelmönster som *{sök-text}*. För stora sökuppsättningar är det bättre att använda serversidessökning. För mindre sökuppsättningar är det bättre att använda klientsidessökning." + ` Om nyckelantalet överstiger ${opts?.maxLightKeysCount ?? 110000} kan du bara söka på serversidan.`,
        largeSetInfo: "I en stor uppsättning är klientsidessökning inaktiverad, så just nu är bara serversidessökning möjlig.",
        infoDetails: "För att ta reda på hur sökningen fungerar, kontrollera inställningarna"
      },
      pager: {
        next: "Nästa",
        prev: "Föregående",
        first: "Första",
        last: "Sista"
      }
    }
  },
  time: {
    type: "Typ",
    format: "Format",
    loading: "Laddar...",
    years: "år",
    months: "månader",
    days: "dagar",
    year: "år",
    month: "månad",
    day: "dag",
    second: "sekund",
    seconds: "sekunder",
    minute: "minut",
    minutes: "minuter",
    hour: "timme",
    hours: "timmar"
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
