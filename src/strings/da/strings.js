const strings = {
  error: {
    cleared_license: "Godkendt licens",
    invalid_license: "Ugyldig licens",
    license_max_devices_reached: "Det maksimale antal enhedspladser er nået",
    license_readonly: "Licens kan kun ændres fra serverterminalen.",
    server_error: "Serverfejl, prøv venligst igen"
  },
  title: {
    donate: "Doner",
    jsonRecursive: "Udvidelse af alle blade",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "Du kan vælge en Redis-forbindelse til at forbinde fra den nederste venstre menu.",
    statistics: "Statistik",
    error: "Fejl",
    connectingRedis: "Opretter forbindelse til Redis ...",
    socketioConnectError: "Socket.IO fejl",
    db: "DB",
    server: "Server",
    clients: "Kunder",
    memory: "Hukommelse",
    persistence: "Vedholdenhed",
    stats: "Statistik",
    replication: "Replikation",
    cpu: "CPU",
    cluster: "Cluster",
    modules: "Moduler",
    errorstats: "Fejlstatistik",
    commandstats: "Kommandostatistik",
    latencystats: "Latensstatistik",
    keysizes: "Nøglestørrelser",
    threads: "Tråde",
  },
  confirm: {
    dropIndex: "Er du sikker på at du vil slette dette index?",
    uploadBuffer: "Er du sikker på at uploade disse binære data?",
    uploadBufferDone: "De binære data uploades",
    uploadBufferDoneAndSave: "De binære data uploades og gemmes på serveren",
    title: "Bekræft",
    alert: "Advarsel",
    info: "Info",
    deleteListItem: "Er du sikker på at slette dette listeelement?",
    deleteHashKey: "Er du sikker på at slette dette hash-nøgleelement?",
    deleteStreamTimestamp: "Er du sikker på at slette dette streamtidsstempel?",
    deleteSetMember: "Er du sikker på at slette dette sætmedlem?",
    deleteZSetMember: "Er du sikker på at slette dette sorterede sætmedlem?",
    deleteConnection: "Bekræft",
    deleteConnectionText: "Er du sikker på at slette denne Redis-forbindelse?",
    deleteNode: "Er du sikker på at slette denne Redis node?",
    deleteAllKeys: opts => {
      return `Slet dette træ og alle dets nøgler (${opts.key})?`;
    },
    socketioConnectError: "Socket.IO kan ikke oprette forbindelse til serveren, du kan genindlæse og prøve at løse forbindelsesfejlen selv, klienten ved ikke, hvordan den selv skal løse det.",
    socketioAuthRequired: "Socket.IO-autorisation er påkrævet. Godkend venligst med HTTP Basic Auth (brugernavn/adgangskode) og genindlæs.",
    deleteKey: "Er du sikker på at du vil slette denne nøgle?",
    rename: {
      title: "Er du sikker på at omdøbe denne nøgle?",
      textContent: "Denne handling omdøber nøglen permanent.",
      placeholder: "Redis-nøglen (påkrævet)"
    },
    ttl: {
      title: "Er du sikker på, at du vil ændre denne nøgles TTL?",
      textContent: "Ændring af TTL opdaterer denne nøgles time to live. Lad være tom for at beholde denne nøgle for evigt.",
      placeholder: "Redis-nøglens TTL (heltal eller tom)",
      placeholderPlaceholder: "Tom betyder, at den består for evigt; ellers skal du indtaste et heltal.",
      convertTextToTime: "Konverter tekst til tid",
      convertTextToTimePlaceholder: "F.eks. 1d vil være 86400"
    },
    license: {
      title: "Indstil licens",
      textContent: "If you want to use paid features, please contact support@corifeus.com to request a license. Pricing is Pro 400 HUF/month (€1/month) or 4,000 HUF/year (€10/year), and Enterprise 1,200 HUF/month (€3/month) or 12,000 HUF/year (€30/year). Yearly is 10x monthly. With 27% VAT, totals are Pro 500 HUF/month (€1.27/month) or 5,100 HUF/year (€12.70/year), Enterprise 1,500 HUF/month (€3.81/month) or 15,200 HUF/year (€38.10/year). License validation requires internet access. Default license includes 5 seats. If you need more seats, contact us at support@corifeus.com.",
      placeholder: "Licensnøgle"
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
    copy: "Kopiér",
    downloadBuffer: "Download binær",
    setBuffer: "Upload binær",
    exportKeys: "Eksportér nøgler",
    exportAllKeys: (opts) => `Eksportér alle ${opts.count} nøgler`,
    exportSearchResults: (opts) => `Eksportér ${opts.count} resultater`,
    importKeys: "Importér nøgler",
    saveWithFormatJson: "Gem med format",
    formatJson: "Formater Json",
    wrap: "Indpakning",
    unwrap: "Pak ud",
    downloadJson: "Download JSON",
    pubsubMonitor: "PubSub skærm",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "Sprog",
    ok: "OK",
    addKey: "Tilføj til denne nøgle",
    addKeyRoot: "Tilføj en rodnøgle",
    reloadKey: "Genindlæs nøgle",
    reload: "Genindlæs",
    close: "Luk",
    commands: "Kommandoer",
    view: "Visning",
    statistics: "Statistik",
    refresh: "Opdater",
    pause: "Pause",
    resume: "Genoptag",
    clear: "Klar",
    rename: "Omdøb",
    main: "Database",
    cancel: "Annuller",
    theme: "Tema",
    github: "GitHub",
    githubRepo: "Depot",
    githubRelease: "Udgivelser",
    githubChangelog: "Ændringslog",
    info: "Info",
    settings: "Indstillinger",
    connect: "Forbind",
    disconnect: "Afbryd forbindelsen",
    overview: "Oversigt",
    console: "Konsol",
    noConnections: "Ingen forbindelser, tilføj en forbindelse i indstillingsmenuen.",
    noConnectionsInSettings: "Ingen forbindelser, du kan tilføje en NY FORBINDELSE ovenfor.",
    connectionAdd: "Ny forbindelse",
    addGroup: "Tilføj gruppe",
    extend: "Forlæng",
    collapse: "Kollaps",
    add: "Tilføj",
    edit: "Rediger",
    save: "Gem",
    ttl: "Indstil TTL",
    license: "Indstil licens",
    delete: "Slet",
    remove: "Fjern",
    sure: "Selvfølgelig",
    testConnection: "Test forbindelse",
    getKey: "Indlæser Redis nøgle og tilhørende data ...",
    jsonViewShow: "Vis JSON",
    jsonViewEditor: "Rediger JSON",
    quickConsole: "Hurtig konsol",
  },
  label: {
    id: {
      nodeId: "Node ID",
      id: "Forbindelses-id",
      info: "Hvis du ikke ønsker at ændre egenskaberne for: sshPassword, sshPrivateKey, password, tlsCrt, tlsKey, tlsCa, skal du indtaste forbindelsens ID i disse egenskaber for at holde egenskabsværdierne intakte. Hvis du ønsker den samme logik i node-adgangskoden, skal du indtaste node-id'et i node-adgangskoden."
    },
    secureFeature: "Hvis du ser en værdi, der starter med en P3X og ligner den samme, er det en sikker funktion. For at ændre indstillingerne skal du bare erstatte disse indstillinger med tomme eller noget andet, og de vil blive gemt. Hvis du ikke ændrer indstillingerne, bevares indstillingerne, som de er på serveren.",
    aiTranslating: "Oversætter...",
    aiSettings: "AI-indstillinger",
    aiGroqApiKey: "Groq API-nøgle",
    aiGroqApiKeyInfo: "Valgfrit. Egen Groq API-nøgle for bedre ydeevne. Få en gratis nøgle på",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "AI API-nøgle gemt",
    aiGroqApiKeyInvalid: "Invalid Groq API key",
    aiGroqApiKeyNotSet: "Ikke indstillet (serverstandard)",
    aiEnabled: "AI aktiveret",
    aiEnabledYes: "Ja",
    aiEnabledNo: "Nej",
    aiRouteViaNetwork: "Route via network.corifeus.com",
    aiRoutingDirect: "Queries go directly to Groq using your own API key, bypassing network.corifeus.com.",
    aiRoutingNetwork: "AI queries are routed through network.corifeus.com. If you have your own free Groq API key, you can turn off this switch to route directly to Groq without network.corifeus.com.",
    ssh: {
      on: "SSH tændt",
      off: "SSH slukket",
      sshHost: "SSH vært",
      sshPort: "SSH port",
      sshUsername: "SSH brugernavn",
      sshPassword: "SSH adgangskode",
      sshPrivateKey: "SSH privat nøgle"
    },
    isBuffer: opts => `[object ArrayBuffer] betyder, at værdien er binære data, eller værdien er større end ${opts.maxValueAsBuffer}`,
    streamValue: `Stream felt og værdi er en oneliner. F.eks.: felt1 værdi1 "felt 2" "værdi 2"`,
    streamTimestampId: `'*' betyder automatisk genereret eller specifikationen som <millisecondsTime>-<sequenceNumber>`,
    unableToLoadKey: ({
      key
    }) => {
      return `Kan ikke indlæse denne nøgle: ${key}. Muligt, nøglen blev slettet. Den nøjagtige fejl er i konsollen.`;
    },
    bigJson: "Dette JSON objekt er over 10 kb, så sørg for, at du ved, hvad du laver, for nogle funktioner kan være langsom gengivelse.",
    addNode: "Tilføj node",
    validateJson: "Valider JSON",
    reducedFunction: `Reduceret funktionalitet`,
    tooManyKeys: opts => {
      return `For de fulde maksimalt tilladte funktioner er tasterne i alt ${opts.maxLightKeysCount} tælle. Denne database har over de tilladte nøgler i alt ${opts.count}. Nøglesorteringen og de ekstra fancy træoplysninger er deaktiveret. Søgningen foregår kun på serveren i stedet for klientsøgningen.`;
    },
    redisCommandNotFound: "Ingen Redis kommando match fundet ...",
    treeKeyStore: `Sorteringen (naturlig sammenligning) udføres på klienten aka browseren, hvilket betyder, at den har en straf for store store sæt, som over 10k nøgler, det kan tilføje lidt tid til sidegengivelsen. Der er ingen nøglesortering i Redis, kun sådan.`,
    socketIoTimeout: options => {
      return `Socket.IO fik timeout for denne anmodning (maks ${options.timeout / 1000} sekunder)...`;
    },
    resizerInfo: options => {
      return `Venstre eller højre panels minimumsbredde er ${options.width}px`;
    },
    jsonViewNotParsable: "Denne værdi er ikke JSON parserbar  ",
    ttlTitle: "Indstil TTL på få sekunder",
    passwordSecure: "Adgangskoden vil muligvis være tom, men den vil stadig vise tegn, dette er en sikkerhedsfunktion.",
    tlsWithoutCert: "Aktiver TLS uden yderligere certifikat",
    tlsRejectUnauthorized: "Afvis uautoriseret certifikat",
    tlsSecure: "Hvis du ser en TLS-konfiguration, der starter med en P3X, eller alle TLS-indstillingerne ligner ens, er det en sikker funktion. For at ændre indstillingerne skal du bare erstatte disse indstillinger med tomme eller noget andet, og de vil blive gemt. Hvis du ikke ændrer TLS-indstillingerne, bevares indstillingerne, som de er på serveren.",
    treeSeparatorEmpty: "Hvis træseparatoren er tom, vil træet ikke have nogen indlejrede noder, kun en ren liste",
    treeSeparatorEmptyNote: "Ingen indlejrede noder, kun en ren liste",
    welcomeConsole: "Velkommen til Redis-konsollen",
    welcomeConsoleInfo: "Markør OP- eller NED-historik er aktiveret",
    redisListIndexInfo: "Tom for at tilføje, -1 for at lægge foran eller gemme den til den viste position.",
    console: "Konsol",
    connectiondAdd: "Tilføj forbindelse",
    connectiondEdit: "Rediger forbindelse",
    connectiondView: "Se forbindelsen",
    connections: "Forbindelser",
    licenseInfo: "Licens",
    licenseEditable: "Licens kan redigeres",
    licenseEditableYes: "Ja",
    licenseEditableNo: "Nej",
    licenseTerminalOnly: "Licens kan kun konfigureres fra serverterminalen.",
    licenseTierPolicyTitle: "Tier politik",
    licenseTierPolicyText: "<h4>Free</h4>core Redis UI only; no SSH tunneling, no Readonly connection mode, no Cluster/Sentinel, no Edit JSON/Upload binary/Download binary, no ReJSON.<br/><strong>Price: 0 HUF/month (€0/month).</strong><br/><br/><h4>Pro</h4>SSH tunneling, Readonly connection mode (including --readonly-connections/-r), Edit JSON, Upload binary, Download binary, ReJSON.<br/><strong>Base price: 400 HUF/month (€1/month) or 4,000 HUF/year (€10/year).</strong><br/><strong>Total with 27% VAT: 500 HUF/month (€1.27/month) or 5,100 HUF/year (€12.70/year).</strong><br/><br/><h4>Enterprise</h4>SSH tunneling, Cluster and Sentinel, plus Edit JSON, Upload binary, Download binary, ReJSON; --readonly-connections/-r also works.<br/><strong>Base price: 1,200 HUF/month (€3/month) or 12,000 HUF/year (€30/year).</strong><br/><strong>Total with 27% VAT: 1,500 HUF/month (€3.81/month) or 15,200 HUF/year (€38.10/year).</strong><br/><br/><h4>Yearly rule</h4>Yearly price is 10x the monthly price.<br/><br/><h4>Seats</h4>Default license includes 5 seats. If you need more seats, contact us at <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><br/><h4>Enterprise trial</h4>10 days free for anyone with a real existing email address (non-test email).<br/><hr/><h4>Billing info in e-mail</h4>Name, Billing e-mail, Country code, Postal code, City, Address, VAT ID (optional).<br/><br/><h4>Payment</h4>PayPal payment is available only in HUF (forint); after sending the money @ <a href='https://paypal.me/corifeus'>https://paypal.me/corifeus</a> I will send you an invoice. All payments are non-refundable.<br/><br/><h4>VAT</h4>VAT is added to the price (27% in Hungary).<br/><hr/><h4>Contact</h4>If you want to say hi or have a question, contact <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><hr/><h4>Language</h4>Invoice and license e-mail communication is in English. Invoice currency is HUF.<br/><hr/><h4>Note</h4>License validation requires internet access.",
    licenseState: "stat",
    licenseStateActive: "Aktiv",
    licenseStateInactive: "Inaktiv",
    licenseStateNoLicense: "Ingen licens",
    licenseKeyMasked: "Gemt nøgle",
    licenseTier: "Tier",
    licenseValid: "Gyldig",
    licenseStatus: "Licensstatus",
    licenseReason: "Årsag",
    licenseCheckedAt: "Tjekkede kl",
    licenseStartsAt: "Starter kl",
    licenseExpiresAt: "Udløber kl",
    licenseDaysLeft: "Dage tilbage",
    licenseMaxDevices: "Max enheder",
    licenseActiveDevices: "Aktive enheder",
    licenseActiveDevicesInfo: "Hvis en enhed ikke længere bruges, frigøres dens sæde automatisk efter 75 minutter.",
    licenseCustomerEmail: "Kundens e-mail",
    licenseFeatures: "Funktioner",
    licenseFeaturesEmpty: "Ingen ekstra funktioner",
    licenseFeatureReadonlyMode: "Skrivebeskyttet forbindelsestilstand",
    licenseFeatureReadonlyConnectionsFlag: "Skrivebeskyttede forbindelser (--readonly-connections/-r)",
    licenseFeatureSsh: "SSH tunneling",
    licenseFeatureCluster: "Cluster forbindelser",
    licenseFeatureSentinel: "Sentinel forbindelser",
    licenseFeatureReJSON: "ReJSON (JSON datatype)",
    keysSort: {
      on: "Nøglesortering videre",
      off: "Nøgle sortering fra"
    },
    cluster: {
      on: "Cluster tændt",
      off: "Cluster slukket"
    },
    sentinel: {
      on: "Sentinel tændt",
      off: "Sentinel slukket",
      name: "Sentinel navn"
    },
    readonly: {
      on: "Skrivebeskyttet videre",
      off: "Skrivebeskyttet fra"
    },
    proSshOnly: "SSH er tilgængelig i Pro eller Enterprise.",
    proReadonlyOnly: "Skrivebeskyttet forbindelsestilstand er tilgængelig i Pro eller Enterprise.",
    enterpriseClusterSentinelOnly: "Cluster og Sentinel er kun tilgængelige i Enterprise.",
    theme: {
      light: "Lys",
      dark: "Mørk virksomhed",
      darkNeu: "Mørk",
      darkoBluo: "Mørk blå",
      enterprise: "Enterprise",
      redis: "Redis",
      matrix: "Matrix"
    },
    connected: opts => {
      return `Tilsluttet: ${opts.name}`;
    },
    tree: "Træ",
    askAuth: "Spørg om autorisation",
    keyboardShortcuts: "Keyboard Shortcuts",
    about: "About",
    supportedLanguages: "Supported Languages",
    version: "Version",
    redisVersion: "Redis Version",
    modules: "Moduler",
    shortcutRefresh: "Refresh",
    shortcutSearch: "Focus Search",
    shortcutNewKey: "New Key",
    shortcutDisconnect: "Afbryd forbindelsen",
    themeAuto: "Auto (system)",
    shortcutCommandPalette: "Command Palette",
    commandPalette: "Command Palette",
    noResults: "No results",
    redisCommandsReference: "Redis Kommandoer",
    ungrouped: "Uden gruppe",
    grouped: "Grouped",
    connectFirst: "Forbind først til en Redis-server",
    searchLanguage: "Søg sprog...",
    exportProgress: "Eksporterer nøgler...",
    importProgress: "Importerer nøgler...",
    importPreview: "Forhåndsvisning",
    importOverwrite: "Overskriv",
    importSkip: "Spring over",
    importConflict: "Hvis nøglen allerede findes:",
    noKeysToExport: "Ingen nøgler at eksportere",
    time: "Tid",
    loading: "Indlæser...",
    autoRefresh: "Auto",
    exportSearchHint: "Eksporterer kun nøgler der matcher den aktuelle søgning",
    importSearchHint: "Import gælder for hele databasen, ikke kun søgeresultater",
    importNoKeys: "Ingen nøgler fundet i filen",
  },
  status: {
    dataCopied: "Dataene er i udklipsholderen",
    licenseSaved: "Licensen er gemt",
    exportDone: "Eksport fuldført",
    indexCreated: "Index oprettet",
    indexDropped: "Index slettet",
    importDone: (opts) => `Import fuldført: ${opts.created} oprettet, ${opts.skipped} sprunget over, ${opts.errors} fejl`,
    nodeRemoved: "Node fjernet",
    keyIsNotExisting: "Denne nøgle kunne være blevet slettet eller udløbet.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "Ingen nøgle";
      } else if (opts.keyCount === 1) {
        return "1 nøgle";
      } else {
        return `${opts.keyCount} nøgler`;
      }
    },
    treeExpandAll: "Udvid alle træblade. Denne operation kan være dyr og kan tage tid ...",
    noRedisKeys: "Der er ingen nøgler i denne database.",
    redisConnected: "Redis tilsluttet lykkedes",
    reloadingDataInfo: "Genindlæser Redis datainfo",
    added: "Tilføjet",
    saved: "Opdateret",
    cancelled: "Annulleret",
    deleted: "Slettet",
    savedRedis: "Redis data gemmes",
    redisDisconnected: opts => {
      return `Den aktuelle forbindelse havde en fejl: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `db-indekset sat til ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `Trænøglen blev slettet (${opts.key}).`;
    },
    deletedKey: opts => {
      return `Nøglen blev slettet (${opts.key}).`;
    },
    renamedKey: "Denne nøgle er blevet omdøbt",
    ttlChanged: "Denne nøgles TTL er blevet ændret",
    notInteger: "Dette input er ikke et heltal",
    persisted: "Denne nøgle er vedvarende for evigt",
    set: "Nøglen indstilles/tilføjes"
  },
  code: {
    "delete-connection": "Denne forbindelse blev slettet, så du er afbrudt til denne Redis-instans.",
    "save-connection": "Denne forbindelse blev ændret, så du er afbrudt til denne Redis-instans. Du kan oprette forbindelse igen.",
    "readonly-connections": "Forbindelser tilføje/gem/slet er skrivebeskyttet!",
    "readonly-connection-mode": "Denne forbindelse er skrivebeskyttet!",
    "list-out-of-bounds": "Dette listeindeks er uden for grænserne",
    "donation-ware-feature": "Denne funktion er til stede i donationsversionen.",
    "feature-pro-readonly-required": "Skrivebeskyttet forbindelsestilstand kræver Pro- eller Enterprise-licens.",
    "feature-pro-ssh-required": "SSH tunneling kræver Pro- eller Enterprise-licens.",
    "feature-enterprise-cluster-sentinel-required": "Cluster og Sentinel kræver Enterprise-licens.",
    "feature-pro-json-binary-required": "Rediger JSON, Upload binær og Download binær kræver Pro- eller Enterprise-licens.",
    "feature-pro-rejson-required": "ReJSON (JSON datatype) kræver Pro- eller Enterprise-licens.",
    "invalid-json-value": "Værdien er ikke gyldig JSON.",
    "http_auth_required": "Godkendelse påkrævet: godkend venligst med HTTP Basic Auth og genindlæs.",
    "auto-connection-failed": "Muligt, forbindelsen blev fjernet, og den automatiske forbindelse mislykkedes på grund af dette.",
    invalid_console_command: "Denne kommando virker ikke via GUI."
  },
  licenseReason: {
    LICENSE_VALID: "Licensen er gyldig",
    LICENSE_INVALID: "Licensen er ugyldig",
    LICENSE_MISSING: "Der er ikke angivet nogen licensnøgle",
    LICENSE_DISABLED: "Licens er deaktiveret i serverkonfiguration",
    LICENSE_NOT_FOUND: "Licens blev ikke fundet",
    LICENSE_EXPIRED: "Licensen er udløbet",
    LICENSE_CLEARED: "Licensnøgle blev slettet",
    LICENSE_MAX_DEVICES_REACHED: "Det maksimale antal enhedspladser er nået",
    PRODUCT_MISMATCH: "Licensproduktet stemmer ikke overens"
  },
  licenseStatusValue: {
    active: "Aktiv",
    deleted: "Slettet",
    all: "Alle",
    expired: "Udløbet",
    missing: "Mangler",
    inactive: "Inaktiv"
  },
  form: {
    error: {
      required: "Påkrævet",
      port: "Porten er mellem 1-65535",
      invalid: "Formularen er ugyldig"
    },
    connection: {
      label: {
        name: "Navn",
        group: "Group",
        host: "Værtsnavn",
        port: "Havn",
        password: "Adgangskode",
        username: "Brugernavn"
      }
    },
    treeSettings: {
      maxValueDisplay: "Max værdi display streng længde",
      maxValueDisplayInfo: "Vis fulde værdier, hvis den er sat til 0. Hvis større end 0, afkortes til denne længde. Hvis -1: for strenge, skjul værdien indtil edit; for andre typer, vis det fulde indhold.",
      maxKeys: "Det maksimale nøgletal",
      maxKeysInfo: "For at GUI ikke går ned, begrænser vi det maksimale nøgletal.",
      keyCount: () => {
        return `Antal nøgler: ${p3xr.state.keysRaw.length}`;
      },
      label: {
        animation: "Brug animation",
        noAnimation: "Ingen animation",
        jsonFormatTwoSpace: "Formater JSON med 2 mellemrum",
        jsonFormatFourSpace: "Formater JSON med 4 mellemrum",
        formName: "Redis indstillinger",
        searchModeClient: "Klientsøgningstilstand",
        searchModeServer: "Server søgetilstand",
        searchModeStartsWith: "Søg med starter med tilstand",
        searchModeIncludes: "Søgning inkluderer tilstand"
      },
      field: {
        treeSeparator: "Træudskiller",
        treeSeparatorSelector: "Træudskillervælger",
        page: "Antal træsøgninger",
        keyPageCount: "Antal nøglepersonsøgninger",
        keysSort: "Sorter nøglerne",
        searchMode: "Søgetilstand",
        searchModeStartsWith: "Søgning starter med / inkluderer"
      },
      error: {
        keyPageCount: "Antallet af nøglesider skal være et heltal mellem 5 - 100",
        page: "Sideantallet skal være et heltal mellem 10 - 5000",
        maxValueDisplay: "Den maksimale visningsværdi skal være et heltal mellem -1 og 32768",
        maxKeys: "Den maksimale nøgletalsværdi skal være et heltal mellem 100 og 100.000"
      }
    },
    key: {
      label: {
        formName: {
          add: "Tilføj ny Redis nøgle",
          edit: "Rediger Redis nøgle",
          append: "Tilføj til eksisterende Redis nøgle"
        }
      },
      field: {
        streamTimestamp: "Tidsstempel",
        key: "Nøgle",
        type: "Type",
        index: "Indeks",
        hashKey: "Hash nøgle",
        score: "Score",
        value: "Værdi"
      },
      error: {
        streamTimestamp: "Tidsstemplet er påkrævet, enten Redis-format eller som *",
        key: "Nøglen er mindst ét tegn",
        hashKey: "Hash-tabelnøglen er mindst ét tegn",
        score: "Den sorterede sætscore er påkrævet",
        value: "Værdien er påkrævet"
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
      title: "Søg",
      index: "Indeks",
      query: "Forespørgsel",
      results: "Resultater",
      noIndex: "Ingen indekser",
      createIndex: "Opret indeks",
      dropIndex: "Slet indeks",
      indexInfo: "Indeksinfo",
      indexName: "Indeksnavn",
      prefix: "Nøglepræfiks (valgfrit)",
      fieldName: "Feltnavn",
    },
    monitor: {
      title: "Overvågning",
      memory: "Hukommelse",
      opsPerSec: "Ops/sek",
      clients: "Klienter",
      blocked: "Blokeret",
      hitsMisses: "Hitrate",
      networkIo: "Netværk I/O",
      slowLog: "Langsom log",
      totalCommands: "Total",
      expired: "Udløbet",
      evicted: "Fjernet",
      clientList: "Klientliste",
      topKeys: "Største nøgler efter hukommelse",
      killClient: "Afslut klient",
      clientKilled: "Klient afsluttet",
      confirmKillClient: "Er du sikker på at du vil afslutte denne klient?",
      noKeys: "Ingen nøgler",
      noClients: "Ingen klienter",
    },
    overview: {
      noConnected: "Der er ingen forbindelse til Redis.",
      overviewClients: "List de tilsluttede efter antallet af klienter",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "1 klient";
        }
        return `${opt.length} klienter`;
      }
    },
    key: {
      label: {
        key: "Nøgle",
        encoding: "Kodning",
        length: "Størrelse",
        ttl: "TTL",
        ttlTitle: "Tid til at leve",
        type: "Type",
        ttlNotExpire: "udløber ikke",
        lengthString: "bytes",
        lengthItem: "genstande",
        actions: "Handlinger"
      },
      list: {
        table: {
          index: "Indeks",
          value: "Værdi"
        }
      },
      hash: {
        table: {
          hashkey: "Hashkey",
          value: "Værdi"
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
          score: "Score"
        }
      },
      stream: {
        table: {
          timestamp: "Tidsstempel-id",
          field: "Felt",
          value: "Værdi"
        }
      }
    },
    treeControls: {
      settings: "Træindstillinger",
      expandAll: "Udvid alle",
      collapseAll: "Skjul alle sammen",
      search: {
        search: "Søg i tasterne",
        clear: "Ryd den aktuelle søgning for at angive tom",
        placeholderClient: "Søg på klientsiden",
        placeholderServer: "Søg på serversiden",
        info: "Klientsidens søgning betyder, at den matcher teksten i søgeinputtet. Søgning på serversiden betyder, det vil sige at søge i nøglemønstrene som *{søgetekst}*. For store søgesæt er det bedre at bruge søgning på serversiden. For mindre søgesæt er det bedre at bruge søgetilstand på klientsiden." + ` Hvis nøgletal er slut ${p3xr.settings.maxLightKeysCount}, du kan kun søge på serversiden.`,
        largeSetInfo: "I et stort sæt er søgning på klientsiden deaktiveret. så lige nu er kun søgning på serversiden mulig.",
        infoDetails: "For at finde ud af, hvordan søgningen fungerer, tjek venligst indstillingerne"
      },
      pager: {
        next: "Næste",
        prev: "Forrige",
        first: "Først",
        last: "Sidst"
      }
    }
  },
  time: {
    loading: "Indlæser...",
    years: "år",
    months: "måneder",
    days: "dage",
    year: "år",
    month: "måned",
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
