const strings = {
  error: {
    cleared_license: "Godkjent lisens",
    invalid_license: "Ugyldig lisens",
    license_max_devices_reached: "Maksimalt antall enhetsplasser nådd",
    license_readonly: "Lisens kan bare endres fra serverterminalen.",
    server_error: "Serverfeil, prøv igjen"
  },
  title: {
    donate: "Doner",
    jsonRecursive: "Utvider alle blader",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "Du kan velge en Redis-tilkobling for å koble til fra menyen nederst til venstre.",
    statistics: "Statistikk",
    error: "Feil",
    connectingRedis: "Kobler til Redis ...",
    socketioConnectError: "Socket.IO Feil",
    db: "DB",
    server: "Server",
    clients: "Kunder",
    memory: "Minne",
    persistence: "Utholdenhet",
    stats: "Statistikk",
    replication: "Replikering",
    cpu: "CPU",
    cluster: "Cluster",
    modules: "Moduler",
    errorstats: "Feilstatistikk",
    commandstats: "Kommandostatistikk",
    latencystats: "Latensstatistikk",
    keysizes: "Nøkkelstørrelser",
    threads: "Tråder",
  },
  confirm: {
    dropIndex: "Er du sikker på at du vil slette denne indeksen?",
    uploadBuffer: "Er du sikker på at du laster opp disse binære dataene?",
    uploadBufferDone: "De binære dataene lastes opp",
    uploadBufferDoneAndSave: "De binære dataene lastes opp og lagres på serveren",
    title: "Bekreft",
    alert: "Varsel",
    info: "Info",
    deleteListItem: "Er du sikker på at du vil slette dette listeelementet?",
    deleteHashKey: "Er du sikker på at du vil slette dette hash-nøkkelelementet?",
    deleteStreamTimestamp: "Er du sikker på at du vil slette dette tidsstempelet for strømmen?",
    deleteSetMember: "Er du sikker på at du vil slette dette settemedlemmet?",
    deleteZSetMember: "Er du sikker på at du vil slette dette sorterte settmedlemmet?",
    deleteConnection: "Bekreft",
    deleteConnectionText: "Er du sikker på å slette denne Redis-tilkoblingen?",
    deleteNode: "Er du sikker på å slette denne Redis-noden?",
    deleteAllKeys: opts => {
      return `Slett dette treet og alle dets nøkler (${opts.key})?`;
    },
    socketioConnectError: "Socket.IO kan ikke koble til serveren, du kan laste inn på nytt og prøve å løse tilkoblingsfeilen selv, klienten vet ikke hvordan den skal løse det selv.",
    socketioAuthRequired: "Socket.IO-autorisasjon kreves. Vennligst autentiser med HTTP Basic Auth (brukernavn/passord) og last inn på nytt.",
    deleteKey: "Er du sikker på at du vil slette denne nøkkelen?",
    rename: {
      title: "Er du sikker på at du vil gi nytt navn til denne nøkkelen?",
      textContent: "Denne handlingen gir nytt navn til nøkkelen permanent.",
      placeholder: "Redis-nøkkelen (påkrevd)"
    },
    ttl: {
      title: "Er du sikker på at du vil endre denne nøkkelens TTL?",
      textContent: "Å endre TTL oppdaterer denne nøkkelens tid til å leve. La den stå tom for å beholde denne nøkkelen for alltid.",
      placeholder: "Redis-nøkkelens TTL (heltall eller tom)",
      placeholderPlaceholder: "Tom betyr at den vedvarer for alltid; ellers skriv inn et heltall.",
      convertTextToTime: "Konverter tekst til tid",
      convertTextToTimePlaceholder: "F.eks. 1d vil være 86400"
    },
    license: {
      title: "Angi lisens",
      textContent: "If you want to use paid features, please contact support@corifeus.com to request a license. Pricing is Pro 400 HUF/month (€1/month) or 4,000 HUF/year (€10/year), and Enterprise 1,200 HUF/month (€3/month) or 12,000 HUF/year (€30/year). Yearly is 10x monthly. With 27% VAT, totals are Pro 500 HUF/month (€1.27/month) or 5,100 HUF/year (€12.70/year), Enterprise 1,500 HUF/month (€3.81/month) or 15,200 HUF/year (€38.10/year). License validation requires internet access. Default license includes 5 seats. If you need more seats, contact us at support@corifeus.com.",
      placeholder: "Lisensnøkkel"
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
    copy: "Kopier",
    downloadBuffer: "Last ned binær",
    setBuffer: "Last opp binær",
    exportKeys: "Eksporter nøkler",
    exportAllKeys: (opts) => `Eksporter alle ${opts.count} nøkler`,
    exportSearchResults: (opts) => `Eksporter ${opts.count} resultater`,
    importKeys: "Importer nøkler",
    saveWithFormatJson: "Lagre med format",
    formatJson: "Format Json",
    wrap: "Pakk inn",
    unwrap: "Pakk ut",
    downloadJson: "Last ned JSON",
    pubsubMonitor: "PubSub-skjerm",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "Språk",
    ok: "OK",
    addKey: "Legg til denne nøkkelen",
    addKeyRoot: "Legg til en rotnøkkel",
    reloadKey: "Last inn nøkkelen på nytt",
    reload: "Last inn på nytt",
    close: "Lukk",
    commands: "Kommandoer",
    view: "Visning",
    statistics: "Statistikk",
    refresh: "Oppdater",
    pause: "Pause",
    resume: "Gjenoppta",
    clear: "Klart",
    rename: "Gi nytt navn",
    main: "Database",
    cancel: "Avbryt",
    theme: "Tema",
    github: "GitHub",
    githubRepo: "Depot",
    githubRelease: "Utgivelser",
    githubChangelog: "Endringslogg",
    info: "Info",
    settings: "Innstillinger",
    connect: "Koble til",
    disconnect: "Koble fra",
    overview: "Oversikt",
    console: "Konsoll",
    noConnections: "Ingen tilkoblinger, legg til en tilkobling i innstillingsmenyen.",
    noConnectionsInSettings: "Ingen tilkoblinger, du kan legge til en NY TILKOBLING ovenfor.",
    connectionAdd: "Ny tilkobling",
    addGroup: "Legg til gruppe",
    extend: "Forleng",
    collapse: "Skjul sammen",
    add: "Legg til",
    edit: "Rediger",
    save: "Lagre",
    ttl: "Sett TTL",
    license: "Angi lisens",
    delete: "Slett",
    remove: "Fjern",
    sure: "Klart det",
    testConnection: "Test tilkobling",
    getKey: "Laster inn Redis-nøkkel og tilhørende data ...",
    jsonViewShow: "Vis JSON",
    jsonViewEditor: "Rediger JSON",
    quickConsole: "Hurtigkonsoll",
  },
  label: {
    id: {
      nodeId: "Node ID",
      id: "Tilkoblings-ID",
      info: "Hvis du ikke vil endre egenskapene til: sshPassword, sshPrivateKey, passord, tlsCrt, tlsKey, tlsCa, vennligst skriv inn ID-en til tilkoblingen i disse egenskapene for å holde egenskapsverdiene intakte. Hvis du vil ha samme logikk i nodepassordet, skriv inn node-ID i nodepassordet."
    },
    secureFeature: "Hvis du ser en verdi som starter med en P3X og ser ut som den samme, er det en sikker funksjon. For å endre innstillingene, erstatt disse innstillingene med tomme eller noe annet, og de vil bli lagret. Hvis du ikke endrer innstillingene, beholdes innstillingene slik de er på serveren.",
    ssh: {
      on: "SSH på",
      off: "SSH av",
      sshHost: "SSH Vert",
      sshPort: "SSH-port",
      sshUsername: "SSH brukernavn",
      sshPassword: "SSH passord",
      sshPrivateKey: "SSH privat nøkkel"
    },
    isBuffer: opts => `[object ArrayBuffer] betyr at verdien er binære data eller verdien er større enn ${opts.maxValueAsBuffer}`,
    streamValue: `Strømfelt og verdi er en oneliner. Eks.: felt1 verdi1 "felt 2" "verdi 2"`,
    streamTimestampId: `'*' betyr automatisk generert eller spesifikasjonen som <millisecondsTime>-<sequenceNumber>`,
    unableToLoadKey: ({
      key
    }) => {
      return `Kan ikke laste denne nøkkelen: ${key}. Mulig, nøkkelen ble slettet. Den nøyaktige feilen er i konsollen.`;
    },
    bigJson: "Dette JSON-objektet er over 10 kb, så sørg for at du vet hva du gjør, fordi noen funksjoner kan være treg gjengivelse.",
    addNode: "Legg til node",
    validateJson: "Valider JSON",
    reducedFunction: `Redusert funksjonalitet`,
    tooManyKeys: opts => {
      return `For de fulle maksimale funksjonene tillatte tastene totalt er ${opts.maxLightKeysCount} telle. Denne databasen har over de tillatte nøklene totalt ${opts.count}. Nøkkelsortering og ekstra fancy treinformasjon er deaktivert. Søket skjer bare på serveren i stedet for klientsøket.`;
    },
    redisCommandNotFound: "Ingen Redis-kommandotreff funnet ...",
    treeKeyStore: `Sorteringen (naturlig sammenligning) utføres på klienten aka nettleseren, noe som betyr at den har en straff for store store sett, som over 10k nøkler, det kan legge til litt tid til sidegjengivelsen. Det er ingen nøkkelsortering i Redis, bare slik.`,
    socketIoTimeout: options => {
      return `Socket.IO ble tidsavbrutt for denne forespørselen (maks ${options.timeout / 1000} sekunder) ...`;
    },
    resizerInfo: options => {
      return `Minste bredde på venstre eller høyre panel er ${options.width}px`;
    },
    jsonViewNotParsable: "Denne verdien er ikke JSON parserbar  ",
    ttlTitle: "Still inn TTL på sekunder",
    passwordSecure: "Passordet kan være tomt, men det vil fortsatt vise tegn, dette er en sikkerhetsfunksjon.",
    tlsWithoutCert: "Aktiver TLS uten ekstra sertifikat",
    tlsRejectUnauthorized: "Avvis uautorisert sertifikat",
    tlsSecure: "Hvis du ser en TLS-konfigurasjon som starter med en P3X eller alle TLS-innstillingene ser like ut, er det en sikker funksjon. For å endre innstillingene, erstatt disse innstillingene med tomme eller noe annet, og de vil bli lagret. Hvis du ikke endrer TLS-innstillingene, beholdes innstillingene slik de er på serveren.",
    treeSeparatorEmpty: "Hvis treskilleren er tom, vil treet ikke ha noen nestede noder, bare en ren liste",
    treeSeparatorEmptyNote: "Ingen nestede noder, bare en ren liste",
    welcomeConsole: "Velkommen til Redis-konsollen",
    welcomeConsoleInfo: "Markør OPP- eller NED-historikk er aktivert",
    redisListIndexInfo: "Tom for å legge til, -1 for å legge til eller lagre den til posisjonen som vises.",
    console: "Konsoll",
    connectiondAdd: "Legg til tilkobling",
    connectiondEdit: "Rediger tilkobling",
    connectiondView: "Se tilkoblingen",
    connections: "Tilkoblinger",
    licenseInfo: "Lisens",
    licenseEditable: "Lisens kan redigeres",
    licenseEditableYes: "Ja",
    licenseEditableNo: "Nei",
    licenseTerminalOnly: "Lisens kan bare konfigureres fra serverterminalen.",
    licenseTierPolicyTitle: "Nivåpolicy",
    licenseTierPolicyText: "<h4>Free</h4>core Redis UI only; no SSH tunneling, no Readonly connection mode, no Cluster/Sentinel, no Edit JSON/Upload binary/Download binary, no ReJSON.<br/><strong>Price: 0 HUF/month (€0/month).</strong><br/><br/><h4>Pro</h4>SSH tunneling, Readonly connection mode (including --readonly-connections/-r), Edit JSON, Upload binary, Download binary, ReJSON.<br/><strong>Base price: 400 HUF/month (€1/month) or 4,000 HUF/year (€10/year).</strong><br/><strong>Total with 27% VAT: 500 HUF/month (€1.27/month) or 5,100 HUF/year (€12.70/year).</strong><br/><br/><h4>Enterprise</h4>SSH tunneling, Cluster and Sentinel, plus Edit JSON, Upload binary, Download binary, ReJSON; --readonly-connections/-r also works.<br/><strong>Base price: 1,200 HUF/month (€3/month) or 12,000 HUF/year (€30/year).</strong><br/><strong>Total with 27% VAT: 1,500 HUF/month (€3.81/month) or 15,200 HUF/year (€38.10/year).</strong><br/><br/><h4>Yearly rule</h4>Yearly price is 10x the monthly price.<br/><br/><h4>Seats</h4>Default license includes 5 seats. If you need more seats, contact us at <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><br/><h4>Enterprise trial</h4>10 days free for anyone with a real existing email address (non-test email).<br/><hr/><h4>Billing info in e-mail</h4>Name, Billing e-mail, Country code, Postal code, City, Address, VAT ID (optional).<br/><br/><h4>Payment</h4>PayPal payment is available only in HUF (forint); after sending the money @ <a href='https://paypal.me/corifeus'>https://paypal.me/corifeus</a> I will send you an invoice. All payments are non-refundable.<br/><br/><h4>VAT</h4>VAT is added to the price (27% in Hungary).<br/><hr/><h4>Contact</h4>If you want to say hi or have a question, contact <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><hr/><h4>Language</h4>Invoice and license e-mail communication is in English. Invoice currency is HUF.<br/><hr/><h4>Note</h4>License validation requires internet access.",
    licenseState: "stat",
    licenseStateActive: "Aktiv",
    licenseStateInactive: "Inaktiv",
    licenseStateNoLicense: "Ingen lisens",
    licenseKeyMasked: "Lagret nøkkel",
    licenseTier: "Nivå",
    licenseValid: "Gyldig",
    licenseStatus: "Lisensstatus",
    licenseReason: "Grunn",
    licenseCheckedAt: "Sjekket kl",
    licenseStartsAt: "Starter kl",
    licenseExpiresAt: "Utløper kl",
    licenseDaysLeft: "Dager igjen",
    licenseMaxDevices: "Maks enheter",
    licenseActiveDevices: "Aktive enheter",
    licenseActiveDevicesInfo: "Hvis en enhet ikke lenger brukes, frigjøres setet automatisk etter 75 minutter.",
    licenseCustomerEmail: "Kundens e-post",
    licenseFeatures: "Funksjoner",
    licenseFeaturesEmpty: "Ingen ekstra funksjoner",
    licenseFeatureReadonlyMode: "Skrivebeskyttet tilkoblingsmodus",
    licenseFeatureReadonlyConnectionsFlag: "Skrivebeskyttede tilkoblinger (--readonly-connections/-r)",
    licenseFeatureSsh: "SSH tunnelering",
    licenseFeatureCluster: "Cluster tilkoblinger",
    licenseFeatureSentinel: "Sentinel tilkoblinger",
    licenseFeatureReJSON: "ReJSON (JSON datatype)",
    keysSort: {
      on: "Nøkkelsortering på",
      off: "Nøkkelsortering"
    },
    cluster: {
      on: "Cluster på",
      off: "Cluster av"
    },
    sentinel: {
      on: "Sentinel på",
      off: "Sentinel av",
      name: "Sentinel navn"
    },
    readonly: {
      on: "Skrivebeskyttet på",
      off: "Skrivebeskyttet av"
    },
    proSshOnly: "SSH er tilgjengelig i Pro eller Enterprise.",
    proReadonlyOnly: "Skrivebeskyttet tilkoblingsmodus er tilgjengelig i Pro eller Enterprise.",
    enterpriseClusterSentinelOnly: "Cluster og Sentinel er kun tilgjengelig i Enterprise.",
    theme: {
      light: "Lys",
      dark: "Mørk bedrift",
      darkNeu: "Mørkt",
      darkoBluo: "Mørk blå",
      enterprise: "Enterprise",
      redis: "Redis",
      matrix: "Matrise"
    },
    connected: opts => {
      return `Tilkoblet: ${opts.name}`;
    },
    tree: "Tre",
    askAuth: "Be om autorisasjon",
    keyboardShortcuts: "Keyboard Shortcuts",
    about: "About",
    supportedLanguages: "Supported Languages",
    version: "Version",
    redisVersion: "Redis Version",
    modules: "Moduler",
    shortcutRefresh: "Refresh",
    shortcutSearch: "Focus Search",
    shortcutNewKey: "New Key",
    shortcutDisconnect: "Koble fra",
    themeAuto: "Auto (system)",
    shortcutCommandPalette: "Command Palette",
    commandPalette: "Command Palette",
    noResults: "No results",
    redisCommandsReference: "Redis Kommandoer",
    ungrouped: "Uten gruppe",
    grouped: "Grouped",
    connectFirst: "Koble til en Redis-server først",
    searchLanguage: "Søk språk...",
    exportProgress: "Eksporterer nøkler...",
    importProgress: "Importerer nøkler...",
    importPreview: "Forhåndsvisning",
    importOverwrite: "Overskriv",
    importSkip: "Hopp over",
    importConflict: "Hvis nøkkelen allerede finnes:",
    noKeysToExport: "Ingen nøkler å eksportere",
    time: "Tid",
    loading: "Laster...",
    autoRefresh: "Auto",
    exportSearchHint: "Eksporterer kun nøkler som matcher gjeldende søk",
    importSearchHint: "Import gjelder for hele databasen, ikke bare søkeresultater",
    importNoKeys: "Ingen nøkler funnet i filen",
  },
  status: {
    dataCopied: "Dataene er i utklippstavlen",
    licenseSaved: "Lisensen er lagret",
    exportDone: "Eksport fullført",
    indexCreated: "Indeks opprettet",
    indexDropped: "Indeks slettet",
    importDone: (opts) => `Import fullført: ${opts.created} opprettet, ${opts.skipped} hoppet over, ${opts.errors} feil`,
    nodeRemoved: "Node fjernet",
    keyIsNotExisting: "Denne nøkkelen kan ha blitt slettet eller utløpt.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "Ingen nøkkel";
      } else if (opts.keyCount === 1) {
        return "1 nøkkel";
      } else {
        return `${opts.keyCount} nøkler`;
      }
    },
    treeExpandAll: "Utvid alle trebladene. Denne operasjonen kan være dyr og kan ta tid ...",
    noRedisKeys: "Det er ingen nøkler i denne databasen.",
    redisConnected: "Redis tilkoblet vellykket",
    reloadingDataInfo: "Laster Redis datainfo på nytt",
    added: "Lagt til",
    saved: "Oppdatert",
    cancelled: "Kansellert",
    deleted: "Slettet",
    savedRedis: "Redis-data er lagret",
    redisDisconnected: opts => {
      return `Den gjeldende tilkoblingen hadde en feil: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `db-indeksen satt til ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `Trenøkkelen ble slettet (${opts.key}).`;
    },
    deletedKey: opts => {
      return `Nøkkelen ble slettet (${opts.key}).`;
    },
    renamedKey: "Denne nøkkelen har fått nytt navn",
    ttlChanged: "Denne nøkkelens TTL er endret",
    notInteger: "Denne inngangen er ikke et heltall",
    persisted: "Denne nøkkelen er vedvart for alltid",
    set: "Nøkkelen er satt/lagt til"
  },
  code: {
    "delete-connection": "Denne tilkoblingen ble slettet, så du er frakoblet denne Redis-forekomsten.",
    "save-connection": "Denne tilkoblingen ble endret, så du er koblet fra denne Redis-forekomsten. Du kan koble til på nytt.",
    "readonly-connections": "Tilkoblinger legg til/lagre/slett er skrivebeskyttet!",
    "readonly-connection-mode": "Denne tilkoblingen er skrivebeskyttet modus!",
    "list-out-of-bounds": "Denne listeindeksen er utenfor grensene",
    "donation-ware-feature": "Denne funksjonen er til stede i donasjonsversjonen.",
    "feature-pro-readonly-required": "Skrivebeskyttet tilkoblingsmodus krever Pro- eller Enterprise-lisens.",
    "feature-pro-ssh-required": "SSH-tunnelering krever Pro- eller Enterprise-lisens.",
    "feature-enterprise-cluster-sentinel-required": "Cluster og Sentinel krever Enterprise-lisens.",
    "feature-pro-json-binary-required": "Rediger JSON, Last opp binær og Last ned binær krever Pro- eller Enterprise-lisens.",
    "feature-pro-rejson-required": "ReJSON (JSON datatype) krever Pro- eller Enterprise-lisens.",
    "invalid-json-value": "Verdien er ikke gyldig JSON.",
    "http_auth_required": "Autorisasjon kreves: vennligst autentiser med HTTP Basic Auth og last inn på nytt.",
    "auto-connection-failed": "Mulig, tilkoblingen ble fjernet og den automatiske tilkoblingen mislyktes på grunn av dette.",
    invalid_console_command: "Denne kommandoen fungerer ikke via GUI."
  },
  licenseReason: {
    LICENSE_VALID: "Lisensen er gyldig",
    LICENSE_INVALID: "Lisensen er ugyldig",
    LICENSE_MISSING: "Ingen lisensnøkkel er angitt",
    LICENSE_DISABLED: "Lisensen er deaktivert i serverkonfigurasjonen",
    LICENSE_NOT_FOUND: "Finner ikke lisensen",
    LICENSE_EXPIRED: "Lisensen er utløpt",
    LICENSE_CLEARED: "Lisensnøkkelen ble slettet",
    LICENSE_MAX_DEVICES_REACHED: "Maksimalt antall enhetsplasser nådd",
    PRODUCT_MISMATCH: "Lisensproduktet samsvarer ikke"
  },
  licenseStatusValue: {
    active: "Aktiv",
    deleted: "Slettet",
    all: "Alle",
    expired: "Utløpt",
    missing: "Mangler",
    inactive: "Inaktiv"
  },
  form: {
    error: {
      required: "Obligatorisk",
      port: "Porten er mellom 1-65535",
      invalid: "Skjemaet er ugyldig"
    },
    connection: {
      label: {
        name: "Navn",
        group: "Group",
        host: "Vertsnavn",
        port: "Port",
        password: "Passord",
        username: "Brukernavn"
      }
    },
    treeSettings: {
      maxValueDisplay: "Maks verdi for visningsstrenglengde",
      maxValueDisplayInfo: "Hvis satt til 0, vis hele verdiene. Hvis større enn 0, avkort til denne lengden. Hvis -1: for strenger, skjul verdien til du redigerer; for andre typer, vis fullt innhold.",
      maxKeys: "Maks nøkkeltall",
      maxKeysInfo: "For at GUI ikke skal krasje, begrenser vi maks nøkkeltall.",
      keyCount: () => {
        return `Antall nøkler: ${p3xr.state.keysRaw.length}`;
      },
      label: {
        animation: "Bruk animasjon",
        noAnimation: "Ingen animasjon",
        jsonFormatTwoSpace: "Formater JSON med 2 mellomrom",
        jsonFormatFourSpace: "Formater JSON med 4 mellomrom",
        formName: "Redis-innstillinger",
        searchModeClient: "Klientsøkemodus",
        searchModeServer: "Serversøkemodus",
        searchModeStartsWith: "Søk med starter med modus",
        searchModeIncludes: "Søk inkluderer modus"
      },
      field: {
        treeSeparator: "Treskiller",
        treeSeparatorSelector: "Treskillevelger",
        page: "Antall tresøking",
        keyPageCount: "Antall nøkkelsøking",
        keysSort: "Sorter nøklene",
        searchMode: "Søkemodus",
        searchModeStartsWith: "Søket starter med / inkluderer"
      },
      error: {
        keyPageCount: "Antall nøkkelsider må være et heltall mellom 5 og 100",
        page: "Sideantallet må være et heltall mellom 10 - 5000",
        maxValueDisplay: "Den maksimale visningsverdien må være et heltall mellom -1 og 32768",
        maxKeys: "Den maksimale nøkkeltallverdien må være et heltall mellom 100 og 100 000"
      }
    },
    key: {
      label: {
        formName: {
          add: "Legg til ny Redis-nøkkel",
          edit: "Rediger Redis nøkkel",
          append: "Legg til eksisterende Redis-nøkkel"
        }
      },
      field: {
        streamTimestamp: "Tidsstempel",
        key: "Nøkkel",
        type: "Type",
        index: "Indeks",
        hashKey: "Hash-nøkkel",
        score: "Score",
        value: "Verdi"
      },
      error: {
        streamTimestamp: "Tidsstemplet er påkrevd, enten Redis-format eller som *",
        key: "Nøkkelen er minst ett tegn",
        hashKey: "Hash-tabellnøkkelen er minst ett tegn",
        score: "Den sorterte settpoengsummen er påkrevd",
        value: "Verdien er påkrevd"
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
      title: "Søk",
      index: "Indeks",
      query: "Spørring",
      results: "Resultater",
      noIndex: "Ingen indekser funnet",
      createIndex: "Opprett indeks",
      dropIndex: "Slett indeks",
      indexInfo: "Indeksinfo",
      indexName: "Indeksnavn",
      prefix: "Nøkkelprefiks (valgfritt)",
      fieldName: "Feltnavn",
    },
    monitor: {
      title: "Overvåking",
      memory: "Minne",
      opsPerSec: "Ops/sek",
      clients: "Klienter",
      blocked: "Blokkert",
      hitsMisses: "Treffrate",
      networkIo: "Nettverk I/O",
      slowLog: "Treg logg",
      totalCommands: "Totalt",
      expired: "Utløpt",
      evicted: "Kastet ut",
      clientList: "Klientliste",
      topKeys: "Største nøkler etter minne",
      killClient: "Avslutt klient",
      clientKilled: "Klient avsluttet",
      confirmKillClient: "Er du sikker på at du vil avslutte denne klienten?",
      noKeys: "Ingen nøkler",
      noClients: "Ingen klienter",
    },
    overview: {
      noConnected: "Det er ingen tilkobling til Redis.",
      overviewClients: "List de tilknyttede etter antall klienter",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "1 klient";
        }
        return `${opt.length} klienter`;
      }
    },
    key: {
      label: {
        key: "Nøkkel",
        encoding: "Koding",
        length: "Størrelse",
        ttl: "TTL",
        ttlTitle: "Tid å leve",
        type: "Type",
        ttlNotExpire: "utløper ikke",
        lengthString: "bytes",
        lengthItem: "gjenstander",
        actions: "Handlinger"
      },
      list: {
        table: {
          index: "Indeks",
          value: "Verdi"
        }
      },
      hash: {
        table: {
          hashkey: "Hashkey",
          value: "Verdi"
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
          timestamp: "Tidsstempel-ID",
          field: "Felt",
          value: "Verdi"
        }
      }
    },
    treeControls: {
      settings: "Treinnstillinger",
      expandAll: "Utvid alle",
      collapseAll: "Skjul alle",
      search: {
        search: "Søk i tastene",
        clear: "Slett gjeldende søk for å sette tomt",
        placeholderClient: "Søk på klientsiden",
        placeholderServer: "Søk på serversiden",
        info: "Søket på klientsiden betyr at det samsvarer med teksten i søkeinndataene. Søket på serversiden betyr at det er som å søke i nøkkelmønstrene som *{søk-tekst}*. For store søkesett er det bedre å bruke søk på serversiden. For mindre søkesett er det bedre å bruke søkemodus på klientsiden." + ` Hvis nøklene er over ${p3xr.settings.maxLightKeysCount}, kan du bare søke på serversiden.`,
        largeSetInfo: "I et stort sett er søk på klientsiden deaktivert. så akkurat nå er det bare søk på serversiden som er mulig.",
        infoDetails: "For å finne ut hvordan søket fungerer, sjekk innstillingene"
      },
      pager: {
        next: "Neste",
        prev: "Forrige",
        first: "Først",
        last: "Sist"
      }
    }
  },
  time: {
    loading: "Laster...",
    years: "år",
    months: "måneder",
    days: "dager",
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
