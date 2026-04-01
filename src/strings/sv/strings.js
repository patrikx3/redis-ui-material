const strings = {
  error: {
    cleared_license: "Licensen har rensats",
    invalid_license: "Ogiltig licens",
    license_max_devices_reached: "Maximalt antal enhetsplatser har nåtts",
    license_readonly: "Licensen kan bara ändras från serverns terminal.",
    server_error: "Serverfel, vänligen försök igen"
  },
  title: {
    donate: "Donera",
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
    threads: "Trådar",
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
    socketioConnectError: "Socket.IO kan inte ansluta till servern, du kan ladda om och försöka lösa anslutningsfelet själv, klienten vet inte hur den ska lösa det.",
    socketioAuthRequired: "Socket.IO-auktorisering krävs. Vänligen autentisera med HTTP Basic Auth (användarnamn/lösenord) och ladda om.",
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
    },
    license: {
      title: "Ange licens",
      textContent: "Om du vill använda betalfunktioner, kontakta support@corifeus.com för att begära en licens. Priset är Pro 400 HUF/månad (€1/månad) eller 4 000 HUF/år (€10/år), och Enterprise 1 200 HUF/månad (€3/månad) eller 12 000 HUF/år (€30/år). Årspris är 10x månadspriset. Med 27% moms blir totalen Pro 500 HUF/månad (€1,27/månad) eller 5 100 HUF/år (€12,70/år), Enterprise 1 500 HUF/månad (€3,81/månad) eller 15 200 HUF/år (€38,10/år). Licensvalidering kräver internetåtkomst. Standardlicensen inkluderar 5 platser. Om du behöver fler platser, kontakta oss på support@corifeus.com.",
      placeholder: "Licensnyckel"
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
    importKeys: "Importera nycklar",
    saveWithFormatJson: "Spara med formatering",
    formatJson: "Formatera Json",
    wrap: "Radbrytning",
    unwrap: "Ingen radbrytning",
    downloadJson: "Ladda ner JSON",
    pubsubMonitor: "PubSub-övervakare",
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
    license: "Ange licens",
    delete: "Radera",
    remove: "Ta bort",
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
    licenseInfo: "Licens",
    licenseEditable: "Licens redigerbar",
    licenseEditableYes: "Ja",
    licenseEditableNo: "Nej",
    licenseTerminalOnly: "Licensen kan bara konfigureras från serverns terminal.",
    licenseTierPolicyTitle: "Nivåpolicy",
    licenseTierPolicyText: "<h4>Gratis</h4>Enbart grundläggande Redis UI; ingen SSH-tunnel, inget skrivskyddat anslutningsläge, inget Cluster/Sentinel, ingen Redigera JSON/Ladda upp binär/Ladda ner binär, ingen ReJSON.<br/><strong>Pris: 0 HUF/månad (€0/månad).</strong><br/><br/><h4>Pro</h4>SSH-tunnel, skrivskyddat anslutningsläge (inklusive --readonly-connections/-r), Redigera JSON, Ladda upp binär, Ladda ner binär, ReJSON.<br/><strong>Baspris: 400 HUF/månad (€1/månad) eller 4 000 HUF/år (€10/år).</strong><br/><strong>Totalt med 27% moms: 500 HUF/månad (€1,27/månad) eller 5 100 HUF/år (€12,70/år).</strong><br/><br/><h4>Enterprise</h4>SSH-tunnel, Cluster och Sentinel, plus Redigera JSON, Ladda upp binär, Ladda ner binär, ReJSON; --readonly-connections/-r fungerar också.<br/><strong>Baspris: 1 200 HUF/månad (€3/månad) eller 12 000 HUF/år (€30/år).</strong><br/><strong>Totalt med 27% moms: 1 500 HUF/månad (€3,81/månad) eller 15 200 HUF/år (€38,10/år).</strong><br/><br/><h4>Årsregel</h4>Årspriset är 10x månadspriset.<br/><br/><h4>Platser</h4>Standardlicensen inkluderar 5 platser. Om du behöver fler platser, kontakta oss på <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><br/><h4>Enterprise-provperiod</h4>10 dagars gratis provperiod för alla med en riktig befintlig e-postadress (ej test-e-post).<br/><hr/><h4>Faktureringsinfo via e-post</h4>Namn, Faktura-e-post, Landskod, Postnummer, Stad, Adress, Momsregistreringsnummer (valfritt).<br/><br/><h4>Betalning</h4>PayPal-betalning är tillgänglig enbart i HUF (forint); efter att du skickat pengarna @ <a href='https://paypal.me/corifeus'>https://paypal.me/corifeus</a> skickar jag en faktura. Alla betalningar är icke-återbetalningsbara.<br/><br/><h4>Moms</h4>Moms läggs till priset (27% i Ungern).<br/><hr/><h4>Kontakt</h4>Om du vill hälsa eller har en fråga, kontakta <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><hr/><h4>Språk</h4>Faktura och licens-e-postkommunikation sker på engelska. Fakturavaluta är HUF.<br/><hr/><h4>Obs</h4>Licensvalidering kräver internetåtkomst.",
    licenseState: "Status",
    licenseStateActive: "Aktiv",
    licenseStateInactive: "Inaktiv",
    licenseStateNoLicense: "Ingen licens",
    licenseKeyMasked: "Sparad nyckel",
    licenseTier: "Nivå",
    licenseValid: "Giltig",
    licenseStatus: "Licensstatus",
    licenseReason: "Orsak",
    licenseCheckedAt: "Kontrollerad",
    licenseStartsAt: "Börjar",
    licenseExpiresAt: "Går ut",
    licenseDaysLeft: "Dagar kvar",
    licenseMaxDevices: "Max enheter",
    licenseActiveDevices: "Aktiva enheter",
    licenseActiveDevicesInfo: "Om en enhet inte längre används frigörs dess plats automatiskt efter 75 minuter.",
    licenseCustomerEmail: "Kund-e-post",
    licenseFeatures: "Funktioner",
    licenseFeaturesEmpty: "Inga extra funktioner",
    licenseFeatureReadonlyMode: "Skrivskyddat anslutningsläge",
    licenseFeatureReadonlyConnectionsFlag: "Skrivskyddade anslutningar (--readonly-connections/-r)",
    licenseFeatureSsh: "SSH-tunnel",
    licenseFeatureCluster: "Cluster-anslutningar",
    licenseFeatureSentinel: "Sentinel-anslutningar",
    licenseFeatureReJSON: "ReJSON (JSON data type)",
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
    proSshOnly: "SSH är tillgängligt i Pro eller Enterprise.",
    proReadonlyOnly: "Skrivskyddat anslutningsläge är tillgängligt i Pro eller Enterprise.",
    enterpriseClusterSentinelOnly: "Cluster och Sentinel är tillgängliga enbart i Enterprise.",
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
    loading: "Laddar...",
    autoRefresh: "Auto",
    exportSearchHint: "Exporterar bara nycklar som matchar aktuell sökning",
    importSearchHint: "Import gäller hela databasen, inte bara sökresultat",
    importNoKeys: "Inga nycklar hittades i filen",
  },
  status: {
    dataCopied: "Datan finns i urklipp",
    licenseSaved: "Licensen sparad",
    exportDone: "Export klar",
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
    set: "Nyckeln är satt/tillagd"
  },
  code: {
    "delete-connection": "Denna anslutning raderades, så du är frånkopplad från denna Redis-instans.",
    "save-connection": "Denna anslutning ändrades, så du är frånkopplad från denna Redis-instans. Du kan ansluta igen.",
    "readonly-connections": "Anslutningar lägg till/spara/radera är enbart skrivskyddade!",
    "readonly-connection-mode": "Denna anslutning är i skrivskyddat läge!",
    "list-out-of-bounds": "Detta listindex är utanför intervallet",
    "donation-ware-feature": "Denna funktion finns i donationsversionen.",
    "feature-pro-readonly-required": "Skrivskyddat anslutningsläge kräver Pro- eller Enterprise-licens.",
    "feature-pro-ssh-required": "SSH-tunnel kräver Pro- eller Enterprise-licens.",
    "feature-enterprise-cluster-sentinel-required": "Cluster och Sentinel kräver Enterprise-licens.",
    "feature-pro-json-binary-required": "Redigera JSON, Ladda upp binär och Ladda ner binär kräver Pro- eller Enterprise-licens.",
    "feature-pro-rejson-required": "ReJSON (JSON data type) requires Pro or Enterprise license.",
    "invalid-json-value": "The value is not valid JSON.",
    "http_auth_required": "Auktorisering krävs: vänligen autentisera med HTTP Basic Auth och ladda om.",
    "auto-connection-failed": "Möjligen togs anslutningen bort och den automatiska anslutningen misslyckades på grund av detta.",
    invalid_console_command: "Detta kommando fungerar inte via GUI."
  },
  licenseReason: {
    LICENSE_VALID: "Licensen är giltig",
    LICENSE_INVALID: "Licensen är ogiltig",
    LICENSE_MISSING: "Ingen licensnyckel angiven",
    LICENSE_DISABLED: "Licensen är inaktiverad i serverkonfigurationen",
    LICENSE_NOT_FOUND: "Licensen hittades inte",
    LICENSE_EXPIRED: "Licensen har gått ut",
    LICENSE_CLEARED: "Licensnyckeln har rensats",
    LICENSE_MAX_DEVICES_REACHED: "Maximalt antal enhetsplatser har nåtts",
    PRODUCT_MISMATCH: "Licensprodukten matchar inte"
  },
  licenseStatusValue: {
    active: "Aktiv",
    deleted: "Raderad",
    all: "Alla",
    expired: "Utgången",
    missing: "Saknas",
    inactive: "Inaktiv"
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
      keyCount: () => {
        return `Antal nycklar: ${p3xr.state.keysRaw.length}`;
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
      fieldName: "Fältnamn",
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
      noClients: "Inga klienter",
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
      }
    },
    treeControls: {
      settings: "Trädinställningar",
      expandAll: "Expandera alla",
      collapseAll: "Komprimera alla",
      search: {
        search: "Sök bland nycklarna",
        clear: "Rensa aktuell sökning",
        placeholderClient: "Sök på klientsidan",
        placeholderServer: "Sök på serversidan",
        info: "Klientsidessökning innebär att den matchar texten i sökfältet. Serversidessökning innebär att den söker i nyckelmönster som *{sök-text}*. För stora sökuppsättningar är det bättre att använda serversidessökning. För mindre sökuppsättningar är det bättre att använda klientsidessökning." + ` Om nyckelantalet överstiger ${p3xr.settings.maxLightKeysCount} kan du bara söka på serversidan.`,
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
    loading: "Laddar...",
    years: "år",
    months: "månader",
    days: "dagar",
    year: "år",
    month: "månad",
    day: "dag"
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
