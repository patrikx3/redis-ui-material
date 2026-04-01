const strings = {
  error: {
    cleared_license: "Licentie gewist",
    invalid_license: "Ongeldige licentie",
    license_max_devices_reached: "Maximaal aantal apparaatplaatsen bereikt",
    license_readonly: "De licentie kan alleen worden gewijzigd vanuit de serverterminal.",
    server_error: "Serverfout, probeer het opnieuw"
  },
  title: {
    donate: "Doneren",
    jsonRecursive: "Alle takken uitvouwen",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "U kunt een Redis-verbinding kiezen via het menu linksonder.",
    statistics: "Statistieken",
    error: "Fout",
    connectingRedis: "Verbinden met Redis ...",
    socketioConnectError: "Socket.IO-fout",
    db: "DB",
    server: "Server",
    clients: "Clients",
    memory: "Geheugen",
    persistence: "Persistentie",
    stats: "Statistieken",
    replication: "Replicatie",
    cpu: "CPU",
    cluster: "Cluster",
    modules: "Modules",
    errorstats: "Foutstatistieken",
    commandstats: "Commandostatistieken",
    latencystats: "Latentiestatistieken",
    keysizes: "Sleutelgroottes",
    threads: "Threads",
  },
  confirm: {
    dropIndex: "Weet u zeker dat u deze index wilt verwijderen?",
    uploadBuffer: "Weet u zeker dat u deze binaire gegevens wilt uploaden?",
    uploadBufferDone: "De binaire gegevens zijn geüpload",
    uploadBufferDoneAndSave: "De binaire gegevens zijn geüpload en opgeslagen op de server",
    title: "Bevestigen",
    alert: "Waarschuwing",
    info: "Info",
    deleteListItem: "Weet u zeker dat u dit lijstitem wilt verwijderen?",
    deleteHashKey: "Weet u zeker dat u deze hash-sleutel wilt verwijderen?",
    deleteStreamTimestamp: "Weet u zeker dat u dit stream-tijdstempel wilt verwijderen?",
    deleteSetMember: "Weet u zeker dat u dit set-lid wilt verwijderen?",
    deleteZSetMember: "Weet u zeker dat u dit gesorteerde set-lid wilt verwijderen?",
    deleteConnection: "Bevestigen",
    deleteConnectionText: "Weet u zeker dat u deze Redis-verbinding wilt verwijderen?",
    deleteNode: "Weet u zeker dat u dit Redis-knooppunt wilt verwijderen?",
    deleteAllKeys: opts => {
      return `Deze boom en al zijn sleutels verwijderen (${opts.key})?`;
    },
    socketioConnectError: "Socket.IO kan geen verbinding maken met de server. U kunt herladen en proberen de verbindingsfout zelf op te lossen; de client weet niet hoe het zelf op te lossen.",
    socketioAuthRequired: "Socket.IO-autorisatie is vereist. Authenticeer met HTTP Basic Auth (gebruikersnaam/wachtwoord) en herlaad.",
    deleteKey: "Weet u zeker dat u deze sleutel wilt verwijderen?",
    rename: {
      title: "Weet u zeker dat u deze sleutel wilt hernoemen?",
      textContent: "Deze actie hernoemt de sleutel permanent.",
      placeholder: "De Redis-sleutel (verplicht)"
    },
    ttl: {
      title: "Weet u zeker dat u de TTL van deze sleutel wilt wijzigen?",
      textContent: "Het wijzigen van de TTL werkt de levensduur van deze sleutel bij. Laat leeg om de sleutel voor altijd te bewaren.",
      placeholder: "De TTL van de Redis-sleutel (geheel getal of leeg)",
      placeholderPlaceholder: "Leeg betekent dat het voor altijd blijft bestaan; voer anders een geheel getal in.",
      convertTextToTime: "Tekst omzetten naar tijd",
      convertTextToTimePlaceholder: "Bijv. 1d wordt 86400"
    },
    license: {
      title: "Licentie instellen",
      textContent: "Als u betaalde functies wilt gebruiken, neem dan contact op met support@corifeus.com om een licentie aan te vragen. De prijs is Pro 400 HUF/maand (€1/maand) of 4.000 HUF/jaar (€10/jaar), en Enterprise 1.200 HUF/maand (€3/maand) of 12.000 HUF/jaar (€30/jaar). Jaarlijks is 10x maandelijks. Met 27% BTW zijn de totalen Pro 500 HUF/maand (€1,27/maand) of 5.100 HUF/jaar (€12,70/jaar), Enterprise 1.500 HUF/maand (€3,81/maand) of 15.200 HUF/jaar (€38,10/jaar). Licentieverificatie vereist internettoegang. De standaardlicentie bevat 5 plaatsen. Als u meer plaatsen nodig hebt, neem dan contact met ons op via support@corifeus.com.",
      placeholder: "Licentiesleutel"
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
    copy: "Kopiëren",
    downloadBuffer: "Binair downloaden",
    setBuffer: "Binair uploaden",
    exportKeys: "Sleutels exporteren",
    exportAllKeys: (opts) => `Alle ${opts.count} sleutels exporteren`,
    exportSearchResults: (opts) => `${opts.count} resultaten exporteren`,
    importKeys: "Sleutels importeren",
    saveWithFormatJson: "Opslaan met opmaak",
    formatJson: "Json opmaken",
    wrap: "Terugloop",
    unwrap: "Geen terugloop",
    downloadJson: "JSON downloaden",
    pubsubMonitor: "PubSub Monitor",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "Taal / Language",
    ok: "OK",
    addKey: "Toevoegen aan deze sleutel",
    addKeyRoot: "Een hoofdsleutel toevoegen",
    reloadKey: "Sleutel herladen",
    reload: "Herladen",
    close: "Sluiten",
    commands: "Opdrachten",
    view: "Beeld",
    statistics: "Statistieken",
    refresh: "Vernieuwen",
    pause: "Pauzeren",
    resume: "Hervatten",
    clear: "Wissen",
    rename: "Hernoemen",
    main: "Database",
    cancel: "Annuleren",
    theme: "Thema",
    github: "GitHub",
    githubRepo: "Repository",
    githubRelease: "Releases",
    githubChangelog: "Wijzigingslogboek",
    info: "Info",
    settings: "Instellingen",
    connect: "Verbinden",
    disconnect: "Verbinding verbreken",
    overview: "Overzicht",
    console: "Console",
    noConnections: "Geen verbindingen, voeg een verbinding toe in het instellingenmenu.",
    noConnectionsInSettings: "Geen verbindingen, u kunt hierboven een NIEUWE VERBINDING toevoegen.",
    connectionAdd: "Nieuwe verbinding",
    addGroup: "Groep toevoegen",
    extend: "Uitvouwen",
    collapse: "Invouwen",
    add: "Toevoegen",
    edit: "Bewerken",
    save: "Opslaan",
    ttl: "TTL instellen",
    license: "Licentie instellen",
    delete: "Verwijderen",
    remove: "Verwijderen",
    sure: "Zeker",
    testConnection: "Verbinding testen",
    getKey: "Redis-sleutel en bijbehorende gegevens laden ...",
    jsonViewShow: "JSON weergeven",
    jsonViewEditor: "JSON bewerken",
    quickConsole: "Snelle Console",
  },
  label: {
    id: {
      nodeId: 'Knooppunt-ID',
      id: "Verbindings-ID",
      info: "Als u de volgende eigenschappen niet wilt wijzigen: sshPassword, sshPrivateKey, password, tlsCrt, tlsKey, tlsCa, voer dan de ID van de verbinding in bij die eigenschappen om de waarden intact te houden. Als u dezelfde logica wilt voor het knooppuntwachtwoord, voer dan de knooppunt-ID in bij het knooppuntwachtwoord."
    },
    secureFeature: 'Als u een waarde ziet die begint met P3X en er hetzelfde uitziet, dan is het een beveiligingsfunctie. Om de instellingen te wijzigen, vervangt u deze instellingen door lege waarden of iets anders en ze worden opgeslagen. Als u de instellingen niet wijzigt, blijven ze zoals ze op de server staan.',
    aiTranslating: "Vertalen...",
    aiSettings: "AI-instellingen",
    aiGroqApiKey: "Groq API-sleutel",
    aiGroqApiKeyInfo: "Optioneel. Eigen Groq API-sleutel voor betere prestaties. Verkrijg een gratis sleutel op",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "AI API-sleutel opgeslagen",
    aiGroqApiKeyInvalid: "Ongeldige Groq API-sleutel",
    aiGroqApiKeyNotSet: "Niet ingesteld (server standaard)",
    aiEnabled: "AI ingeschakeld",
    aiEnabledYes: "Ja",
    aiEnabledNo: "Nee",
    aiRouteViaNetwork: "Route via network.corifeus.com",
    aiRoutingDirect: "Queries gaan rechtstreeks naar Groq met uw eigen API-sleutel, zonder network.corifeus.com.",
    aiRoutingNetwork: "AI-queries worden via network.corifeus.com gerouteerd. Als u uw eigen gratis Groq API-sleutel hebt, kunt u deze schakelaar uitschakelen.",
    ssh: {
      on: 'SSH aan',
      off: 'SSH uit',
      sshHost: 'SSH-host',
      sshPort: 'SSH-poort',
      sshUsername: 'SSH-gebruikersnaam',
      sshPassword: 'SSH-wachtwoord',
      sshPrivateKey: 'SSH-privésleutel'
    },
    isBuffer: opts => `[object ArrayBuffer] betekent dat de waarde binaire gegevens is of de waarde groter is dan ${opts.maxValueAsBuffer}`,
    streamValue: `Stream-veld en waarde staan op één regel. Bijv.: veld1 waarde1 "veld 2" "waarde 2"`,
    streamTimestampId: `'*' betekent automatisch gegenereerd of de specificatie als <millisecondsTime>-<sequenceNumber>`,
    unableToLoadKey: ({
      key
    }) => {
      return `Kan deze sleutel niet laden: ${key}. Mogelijk is de sleutel verwijderd. De exacte fout staat in de console.`;
    },
    bigJson: "Dit JSON-object is groter dan 10 kb, wees er dus zeker van dat u weet wat u doet, want sommige functies kunnen traag renderen.",
    addNode: "Knooppunt toevoegen",
    validateJson: "JSON valideren",
    reducedFunction: `Beperkte functionaliteit`,
    tooManyKeys: opts => {
      return `Voor volledige functionaliteit is het maximale aantal toegestane sleutels ${opts.maxLightKeysCount}. Deze database heeft meer sleutels dan toegestaan, namelijk ${opts.count}. Het sorteren van sleutels en de extra boominformatie is uitgeschakeld. Het zoeken vindt alleen plaats op de server in plaats van de client.`;
    },
    redisCommandNotFound: "Geen overeenkomende Redis-opdracht gevonden ...",
    treeKeyStore: `Het sorteren (natuurlijke vergelijking) wordt uitgevoerd op de client (de browser), wat een nadeel heeft voor grote sets, zoals meer dan 10k sleutels; het kan wat extra tijd toevoegen aan het renderen van de pagina. Er is geen sleutelsortering in Redis, alleen op deze manier.`,
    socketIoTimeout: options => {
      return `De Socket.IO-aanvraag is verlopen (maximaal ${options.timeout / 1000} seconden) ...`;
    },
    resizerInfo: options => {
      return `De minimale breedte van het linker- of rechterpaneel is ${options.width}px`;
    },
    jsonViewNotParsable: "Deze waarde is niet als JSON te parseren  ",
    ttlTitle: "Stel de TTL in seconden in",
    passwordSecure: "Het wachtwoord kan leeg zijn, maar er worden toch tekens getoond; dit is een beveiligingsfunctie.",
    tlsWithoutCert: "TLS inschakelen zonder extra certificaat",
    tlsRejectUnauthorized: "Niet-geautoriseerd certificaat weigeren",
    tlsSecure: "Als u een TLS-configuratie ziet die begint met P3X of als alle TLS-instellingen er hetzelfde uitzien, is het een beveiligingsfunctie. Om de instellingen te wijzigen, vervangt u deze door lege waarden of iets anders en ze worden opgeslagen. Als u de TLS-instellingen niet wijzigt, blijven ze zoals ze op de server staan.",
    treeSeparatorEmpty: "Als het boomscheidingsteken leeg is, heeft de boom geen geneste knooppunten, maar slechts een platte lijst",
    treeSeparatorEmptyNote: "Geen geneste knooppunten, slechts een platte lijst",
    welcomeConsole: "Welkom bij de Redis Console",
    welcomeConsoleInfo: "Cursor OMHOOG of OMLAAG voor geschiedenis is ingeschakeld",
    redisListIndexInfo: "Leeg om toe te voegen, -1 om vooraan te plaatsen of sla het op op de getoonde positie.",
    console: "Console",
    connectiondAdd: "Verbinding toevoegen",
    connectiondEdit: "Verbinding bewerken",
    connectiondView: "Verbinding bekijken",
    connections: "Verbindingen",
    licenseInfo: "Licentie",
    licenseEditable: "Licentie bewerkbaar",
    licenseEditableYes: "Ja",
    licenseEditableNo: "Nee",
    licenseTerminalOnly: "De licentie kan alleen worden geconfigureerd vanuit de serverterminal.",
    licenseTierPolicyTitle: "Tariefbeleid",
    licenseTierPolicyText: "<h4>Free</h4>alleen basis Redis UI; geen SSH-tunneling, geen Readonly-verbindingsmodus, geen Cluster/Sentinel, geen Edit JSON/Upload binary/Download binary, geen ReJSON.<br/><strong>Prijs: 0 HUF/maand (€0/maand).</strong><br/><br/><h4>Pro</h4>SSH-tunneling, Readonly-verbindingsmodus (inclusief --readonly-connections/-r), Edit JSON, Upload binary, Download binary, ReJSON.<br/><strong>Basisprijs: 400 HUF/maand (€1/maand) of 4.000 HUF/jaar (€10/jaar).</strong><br/><strong>Totaal met 27% BTW: 500 HUF/maand (€1,27/maand) of 5.100 HUF/jaar (€12,70/jaar).</strong><br/><br/><h4>Enterprise</h4>SSH-tunneling, Cluster en Sentinel, plus Edit JSON, Upload binary, Download binary, ReJSON; --readonly-connections/-r werkt ook.<br/><strong>Basisprijs: 1.200 HUF/maand (€3/maand) of 12.000 HUF/jaar (€30/jaar).</strong><br/><strong>Totaal met 27% BTW: 1.500 HUF/maand (€3,81/maand) of 15.200 HUF/jaar (€38,10/jaar).</strong><br/><br/><h4>Jaarregel</h4>De jaarprijs is 10x de maandprijs.<br/><br/><h4>Plaatsen</h4>De standaardlicentie bevat 5 plaatsen. Als u meer plaatsen nodig hebt, neem dan contact met ons op via <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><br/><h4>Enterprise-proefversie</h4>10 dagen gratis voor iedereen met een bestaand e-mailadres (geen test-e-mail).<br/><hr/><h4>Facturatiegegevens per e-mail</h4>Naam, Facturatie-e-mail, Landcode, Postcode, Stad, Adres, BTW-nummer (optioneel).<br/><br/><h4>Betaling</h4>PayPal-betaling is alleen beschikbaar in HUF (forint); na het verzenden van het geld via <a href='https://paypal.me/corifeus'>https://paypal.me/corifeus</a> stuur ik u een factuur. Alle betalingen zijn niet-restitueerbaar.<br/><br/><h4>BTW</h4>BTW wordt toegevoegd aan de prijs (27% in Hongarije).<br/><hr/><h4>Contact</h4>Als u hallo wilt zeggen of een vraag hebt, neem dan contact op met <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><hr/><h4>Taal</h4>Facturen en licentie-e-mailcommunicatie zijn in het Engels. Factuurvaluta is HUF.<br/><hr/><h4>Opmerking</h4>Licentieverificatie vereist internettoegang.",
    licenseState: "Status",
    licenseStateActive: "Actief",
    licenseStateInactive: "Inactief",
    licenseStateNoLicense: "Geen licentie",
    licenseKeyMasked: "Opgeslagen sleutel",
    licenseTier: "Tarief",
    licenseValid: "Geldig",
    licenseStatus: "Licentiestatus",
    licenseReason: "Reden",
    licenseCheckedAt: "Gecontroleerd op",
    licenseStartsAt: "Start op",
    licenseExpiresAt: "Verloopt op",
    licenseDaysLeft: "Resterende dagen",
    licenseMaxDevices: "Max. apparaten",
    licenseActiveDevices: "Actieve apparaten",
    licenseActiveDevicesInfo: "Als een apparaat niet meer wordt gebruikt, wordt de plaats automatisch na 75 minuten vrijgegeven.",
    licenseCustomerEmail: "E-mail van klant",
    licenseFeatures: "Functies",
    licenseFeaturesEmpty: "Geen extra functies",
    licenseFeatureReadonlyMode: "Alleen-lezen verbindingsmodus",
    licenseFeatureReadonlyConnectionsFlag: "Alleen-lezen verbindingen (--readonly-connections/-r)",
    licenseFeatureSsh: "SSH-tunneling",
    licenseFeatureCluster: "Cluster-verbindingen",
    licenseFeatureSentinel: "Sentinel-verbindingen",
    licenseFeatureReJSON: "ReJSON (JSON data type)",
    keysSort: {
      on: "Sleutelsortering aan",
      off: "Sleutelsortering uit"
    },
    cluster: {
      on: "Cluster aan",
      off: "Cluster uit"
    },
    sentinel: {
      on: "Sentinel aan",
      off: "Sentinel uit",
      name: "Sentinel-naam"
    },
    readonly: {
      on: "Alleen-lezen aan",
      off: "Alleen-lezen uit"
    },
    proSshOnly: "SSH is beschikbaar in Pro of Enterprise.",
    proReadonlyOnly: "Alleen-lezen verbindingsmodus is beschikbaar in Pro of Enterprise.",
    enterpriseClusterSentinelOnly: "Cluster en Sentinel zijn alleen beschikbaar in Enterprise.",
    theme: {
      light: "Licht",
      dark: "Donker enterprise",
      darkNeu: "Donker",
      darkoBluo: "Darko bluo",
      enterprise: "Enterprise",
      redis: "Redis",
      matrix: "Matrix"
    },
    connected: opts => {
      return `Verbonden: ${opts.name}`;
    },
    tree: "Boom",
    askAuth: "Autorisatie aanvragen",
    keyboardShortcuts: "Sneltoetsen",
    about: "Over",
    supportedLanguages: "Ondersteunde talen",
    version: "Versie",
    redisVersion: "Redis-versie",
    modules: "Modules",
    shortcutRefresh: "Vernieuwen",
    shortcutSearch: "Zoeken focussen",
    shortcutNewKey: "Nieuwe sleutel",
    shortcutDisconnect: "Verbinding verbreken",
    themeAuto: "Automatisch (systeem)",
    shortcutCommandPalette: "Opdrachtenpalet",
    commandPalette: "Opdrachtenpalet",
    noResults: "Geen resultaten",
    redisCommandsReference: "Redis Commando's",
    ungrouped: "Ongegroepeerd",
    grouped: "Gegroepeerd",
    connectFirst: "Maak eerst verbinding met een Redis-server",
    searchLanguage: "Taal zoeken...",
    exportProgress: "Sleutels exporteren...",
    importProgress: "Sleutels importeren...",
    importPreview: "Voorbeeld",
    importOverwrite: "Overschrijven",
    importSkip: "Overslaan",
    importConflict: "Als de sleutel al bestaat:",
    noKeysToExport: "Geen sleutels om te exporteren",
    time: "Tijd",
    loading: "Laden...",
    autoRefresh: "Auto",
    exportSearchHint: "Alleen sleutels die overeenkomen met de huidige zoekopdracht worden geëxporteerd",
    importSearchHint: "Import is van toepassing op de gehele database, niet alleen op zoekresultaten",
    importNoKeys: "Geen sleutels gevonden in bestand",
  },
  status: {
    dataCopied: "De gegevens staan op het klembord",
    licenseSaved: "Licentie opgeslagen",
    exportDone: "Export voltooid",
    indexCreated: "Index aangemaakt",
    indexDropped: "Index verwijderd",
    importDone: (opts) => `Import voltooid: ${opts.created} aangemaakt, ${opts.skipped} overgeslagen, ${opts.errors} fouten`,
    nodeRemoved: "Knooppunt verwijderd",
    keyIsNotExisting: "Deze sleutel is mogelijk verwijderd of verlopen.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "Geen sleutel";
      } else if (opts.keyCount === 1) {
        return "1 sleutel";
      } else {
        return `${opts.keyCount} sleutels`;
      }
    },
    treeExpandAll: "Alle boomtakken uitvouwen. Deze bewerking kan duur zijn en kan enige tijd duren ...",
    noRedisKeys: "Er zijn geen sleutels in deze database.",
    redisConnected: "Redis succesvol verbonden",
    reloadingDataInfo: "Redis-gegevens opnieuw laden",
    added: "Toegevoegd",
    saved: "Bijgewerkt",
    cancelled: "Geannuleerd",
    deleted: "Verwijderd",
    savedRedis: "Redis-gegevens zijn opgeslagen",
    redisDisconnected: opts => {
      return `De huidige verbinding had een fout: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `De database-index is ingesteld op ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `De boomsleutel is verwijderd (${opts.key}).`;
    },
    deletedKey: opts => {
      return `De sleutel is verwijderd (${opts.key}).`;
    },
    renamedKey: "Deze sleutel is hernoemd",
    ttlChanged: "De TTL van deze sleutel is gewijzigd",
    notInteger: "Deze invoer is geen geheel getal",
    persisted: "Deze sleutel wordt voor altijd bewaard",
    set: "De sleutel is ingesteld/toegevoegd"
  },
  code: {
    "delete-connection": "Deze verbinding is verwijderd, dus u bent losgekoppeld van deze Redis-instantie.",
    "save-connection": "Deze verbinding is gewijzigd, dus u bent losgekoppeld van deze Redis-instantie. U kunt opnieuw verbinden.",
    "readonly-connections": "Verbindingen toevoegen/opslaan/verwijderen is alleen-lezen!",
    "readonly-connection-mode": "Deze verbinding is alleen-lezen!",
    "list-out-of-bounds": "Deze lijstindex valt buiten het bereik",
    "donation-ware-feature": "Deze functie is beschikbaar in de donatieversie.",
    "feature-pro-readonly-required": "Alleen-lezen verbindingsmodus vereist een Pro- of Enterprise-licentie.",
    "feature-pro-ssh-required": "SSH-tunneling vereist een Pro- of Enterprise-licentie.",
    "feature-enterprise-cluster-sentinel-required": "Cluster en Sentinel vereisen een Enterprise-licentie.",
    "feature-pro-json-binary-required": "Edit JSON, Upload binary en Download binary vereisen een Pro- of Enterprise-licentie.",
    "feature-pro-rejson-required": "ReJSON (JSON data type) requires Pro or Enterprise license.",
    "invalid-json-value": "The value is not valid JSON.",
    "http_auth_required": "Autorisatie vereist: authenticeer met HTTP Basic Auth en herlaad.",
    "auto-connection-failed": "Mogelijk is de verbinding verwijderd en is de automatische verbinding om die reden mislukt.",
    invalid_console_command: "Deze opdracht werkt niet via de GUI."
  },
  licenseReason: {
    LICENSE_VALID: "Licentie is geldig",
    LICENSE_INVALID: "Licentie is ongeldig",
    LICENSE_MISSING: "Geen licentiesleutel ingesteld",
    LICENSE_DISABLED: "Licentie is uitgeschakeld in de serverconfiguratie",
    LICENSE_NOT_FOUND: "Licentie niet gevonden",
    LICENSE_EXPIRED: "Licentie is verlopen",
    LICENSE_CLEARED: "Licentiesleutel is gewist",
    LICENSE_MAX_DEVICES_REACHED: "Maximaal aantal apparaatplaatsen bereikt",
    PRODUCT_MISMATCH: "Licentieproduct komt niet overeen"
  },
  licenseStatusValue: {
    active: "Actief",
    deleted: "Verwijderd",
    all: "Alle",
    expired: "Verlopen",
    missing: "Ontbreekt",
    inactive: "Inactief"
  },
  form: {
    error: {
      required: "Verplicht",
      port: "De poort is tussen 1-65535",
      invalid: "Het formulier is ongeldig"
    },
    connection: {
      label: {
        name: "Naam",
        group: "Groep",
        host: "Hostnaam",
        port: "Poort",
        password: "Wachtwoord",
        username: "Gebruikersnaam"
      }
    },
    treeSettings: {
      maxValueDisplay: "Maximale lengte weergavewaarde",
      maxValueDisplayInfo: "Indien ingesteld op 0, worden volledige waarden getoond. Indien groter dan 0, wordt afgekapt tot deze lengte. Indien -1: voor strings wordt de waarde verborgen tot bewerking; voor andere typen wordt de volledige inhoud getoond.",
      maxKeys: "Maximaal aantal sleutels",
      maxKeysInfo: "Om te voorkomen dat de GUI vastloopt, beperken we het maximale aantal sleutels.",
      keyCount: () => {
        return `Aantal sleutels: ${p3xr.state.keysRaw.length}`;
      },
      label: {
        animation: "Animatie gebruiken",
        noAnimation: "Geen animatie",
        jsonFormatTwoSpace: "JSON opmaken met 2 spaties",
        jsonFormatFourSpace: "JSON opmaken met 4 spaties",
        formName: "Redis-instellingen",
        searchModeClient: "Zoekmodus client",
        searchModeServer: "Zoekmodus server",
        searchModeStartsWith: "Zoeken met begint-met-modus",
        searchModeIncludes: "Zoeken met bevat-modus"
      },
      field: {
        treeSeparator: "Boomscheidingsteken",
        treeSeparatorSelector: "Boomscheidingstekenkiezer",
        page: "Aantal boompagina's",
        keyPageCount: "Aantal sleutelpagina's",
        keysSort: "Sleutels sorteren",
        searchMode: "Zoekmodus",
        searchModeStartsWith: "Begint met / bevat zoeken"
      },
      error: {
        keyPageCount: "Het aantal sleutelpagina's moet een geheel getal zijn tussen 5 - 100",
        page: "Het aantal pagina's moet een geheel getal zijn tussen 10 - 5000",
        maxValueDisplay: "De maximale weergavewaarde moet een geheel getal zijn tussen -1 en 32768",
        maxKeys: "Het maximale aantal sleutels moet een geheel getal zijn tussen 100 en 100000"
      }
    },
    key: {
      label: {
        formName: {
          add: "Nieuwe Redis-sleutel toevoegen",
          edit: "Redis-sleutel bewerken",
          append: "Toevoegen aan bestaande Redis-sleutel"
        }
      },
      field: {
        streamTimestamp: "Tijdstempel",
        key: "Sleutel",
        type: "Type",
        index: "Index",
        hashKey: "Hash-sleutel",
        score: "Score",
        value: "Waarde"
      },
      error: {
        streamTimestamp: "Het tijdstempel is verplicht, in Redis-formaat of als *",
        key: "De sleutel moet minimaal één teken bevatten",
        hashKey: "De hash-tabelsleutel moet minimaal één teken bevatten",
        score: "De gesorteerde set-score is verplicht",
        value: "De waarde is verplicht"
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
      title: "Zoeken",
      index: "Index",
      query: "Zoekopdracht",
      results: "Resultaten",
      noIndex: "Geen indexen gevonden",
      createIndex: "Index aanmaken",
      dropIndex: "Index verwijderen",
      indexInfo: "Index info",
      indexName: "Indexnaam",
      prefix: "Sleutelprefix (optioneel)",
      fieldName: "Veldnaam",
    },
    monitor: {
      title: "Bewaking",
      memory: "Geheugen",
      opsPerSec: "Ops/sec",
      clients: "Clients",
      blocked: "Geblokkeerd",
      hitsMisses: "Trefkans",
      networkIo: "Netwerk I/O",
      slowLog: "Traag logboek",
      totalCommands: "Totaal",
      expired: "Verlopen",
      evicted: "Verdreven",
      clientList: "Clientlijst",
      topKeys: "Grootste sleutels op geheugen",
      killClient: "Client beëindigen",
      clientKilled: "Client beëindigd",
      confirmKillClient: "Weet u zeker dat u deze client wilt beëindigen?",
      noKeys: "Geen sleutels",
      noClients: "Geen clients",
    },
    overview: {
      noConnected: "Er is geen verbinding met Redis.",
      overviewClients: "Verbonden weergeven op aantal clients",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "1 client";
        }
        return `${opt.length} clients`;
      }
    },
    key: {
      label: {
        key: "Sleutel",
        encoding: "Codering",
        length: "Grootte",
        ttl: "TTL",
        ttlTitle: "Time To Live",
        type: "Type",
        ttlNotExpire: "verloopt niet",
        lengthString: "bytes",
        lengthItem: "items",
        actions: "Acties"
      },
      list: {
        table: {
          index: "Index",
          value: "Waarde"
        }
      },
      hash: {
        table: {
          hashkey: "Hash-sleutel",
          value: "Waarde"
        }
      },
      set: {
        table: {
          value: "Lid"
        }
      },
      zset: {
        table: {
          value: "Lid",
          score: "Score"
        }
      },
      stream: {
        table: {
          timestamp: "Tijdstempel-ID",
          field: "Veld",
          value: "Waarde"
        }
      }
    },
    treeControls: {
      settings: "Boominstellingen",
      expandAll: "Alles uitvouwen",
      collapseAll: "Alles invouwen",
      search: {
        search: "Zoeken in de sleutels",
        clear: "Huidige zoekopdracht wissen",
        placeholderClient: "Zoeken aan clientzijde",
        placeholderServer: "Zoeken aan serverzijde",
        info: "Zoeken aan de clientzijde betekent dat het overeenkomt met de tekst in het zoekveld. Zoeken aan de serverzijde betekent dat het zoekt in de sleutelpatronen als *{zoektekst}*. Voor grote zoeksets is het beter om aan de serverzijde te zoeken. Voor kleinere zoeksets is het beter om aan de clientzijde te zoeken." + ` Als het aantal sleutels meer is dan ${p3xr.settings.maxLightKeysCount}, kunt u alleen aan de serverzijde zoeken.`,
        largeSetInfo: "In een grote set is zoeken aan de clientzijde uitgeschakeld, dus momenteel is alleen zoeken aan de serverzijde mogelijk.",
        infoDetails: "Om te weten hoe het zoeken werkt, bekijk de instellingen"
      },
      pager: {
        next: "Volgende",
        prev: "Vorige",
        first: "Eerste",
        last: "Laatste"
      }
    }
  },
  time: {
    loading: "Laden...",
    years: "jaren",
    months: "maanden",
    days: "dagen",
    year: "jaar",
    month: "maand",
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
