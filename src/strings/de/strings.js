const strings = {
  error: {
    cleared_license: "Lizenz gelöscht",
    invalid_license: "Ungültige Lizenz",
    license_max_devices_reached: "Maximale Anzahl der Geräteplätze erreicht",
    license_readonly: "Die Lizenz kann nur über das Server-Terminal geändert werden.",
    server_error: "Serverfehler, bitte versuchen Sie es erneut"
  },
  title: {
    donate: "Spenden",
    jsonRecursive: "Alle Blätter aufklappen",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "Sie können eine Redis-Verbindung aus dem unteren linken Menü auswählen.",
    statistics: "Statistiken",
    error: "Fehler",
    connectingRedis: "Verbindung zu Redis wird hergestellt ...",
    socketioConnectError: "Socket.IO Fehler",
    db: "DB",
    server: "Server",
    clients: "Clients",
    memory: "Speicher",
    persistence: "Persistenz",
    stats: "Statistiken",
    replication: "Replikation",
    cpu: "CPU",
    cluster: "Cluster",
    modules: "Module",
    errorstats: "Fehlerstatistiken",
    commandstats: "Befehlsstatistiken",
    latencystats: "Latenzstatistiken",
    keysizes: "Schlüsselgrößen",
    threads: "Threads",
  },
  confirm: {
    dropIndex: "Sind Sie sicher, dass Sie diesen Index löschen möchten?",
    uploadBuffer: "Sind Sie sicher, dass Sie diese Binärdaten hochladen möchten?",
    uploadBufferDone: "Die Binärdaten wurden hochgeladen",
    uploadBufferDoneAndSave: "Die Binärdaten wurden hochgeladen und auf dem Server gespeichert",
    title: "Bestätigung",
    alert: "Warnung",
    info: "Info",
    deleteListItem: "Sind Sie sicher, dass Sie dieses Listenelement löschen möchten?",
    deleteHashKey: "Sind Sie sicher, dass Sie diesen Hash-Schlüssel löschen möchten?",
    deleteStreamTimestamp: "Sind Sie sicher, dass Sie diesen Stream-Zeitstempel löschen möchten?",
    deleteSetMember: "Sind Sie sicher, dass Sie dieses Set-Mitglied löschen möchten?",
    deleteZSetMember: "Sind Sie sicher, dass Sie dieses Mitglied der sortierten Menge löschen möchten?",
    deleteConnection: "Bestätigung",
    deleteConnectionText: "Sind Sie sicher, dass Sie diese Redis-Verbindung löschen möchten?",
    deleteNode: "Sind Sie sicher, dass Sie diesen Redis-Knoten löschen möchten?",
    deleteAllKeys: opts => {
      return `Diesen Baum und alle seine Schlüssel löschen (${opts.key})?`;
    },
    socketioConnectError: "Socket.IO kann keine Verbindung zum Server herstellen. Sie können die Seite neu laden und versuchen, den Verbindungsfehler selbst zu beheben. Der Client weiß nicht, wie er ihn selbst lösen kann.",
    socketioAuthRequired: "Socket.IO-Autorisierung erforderlich. Bitte authentifizieren Sie sich mit HTTP Basic Auth (Benutzername/Passwort) und laden Sie die Seite neu.",
    deleteKey: "Sind Sie sicher, dass Sie diesen Schlüssel löschen möchten?",
    rename: {
      title: "Sind Sie sicher, dass Sie diesen Schlüssel umbenennen möchten?",
      textContent: "Diese Aktion benennt den Schlüssel dauerhaft um.",
      placeholder: "Der Redis-Schlüssel (erforderlich)"
    },
    ttl: {
      title: "Sind Sie sicher, dass Sie die TTL dieses Schlüssels ändern möchten?",
      textContent: "Das Ändern der TTL aktualisiert die Lebensdauer dieses Schlüssels. Leer lassen, um den Schlüssel dauerhaft zu behalten.",
      placeholder: "Die TTL des Redis-Schlüssels (Ganzzahl oder leer)",
      placeholderPlaceholder: "Leer bedeutet, dass er dauerhaft gespeichert wird; andernfalls geben Sie eine Ganzzahl ein.",
      convertTextToTime: "Text in Zeit umwandeln",
      convertTextToTimePlaceholder: "Z.B. 1d wird 86400"
    },
    license: {
      title: "Lizenz festlegen",
      textContent: "Wenn Sie kostenpflichtige Funktionen nutzen möchten, kontaktieren Sie bitte support@corifeus.com, um eine Lizenz anzufordern. Die Preise sind Pro 400 HUF/Monat (€1/Monat) oder 4,000 HUF/Jahr (€10/Jahr) und Enterprise 1,200 HUF/Monat (€3/Monat) oder 12,000 HUF/Jahr (€30/Jahr). Der Jahrespreis ist das 10-fache des Monatspreises. Mit 27% MwSt. betragen die Gesamtpreise Pro 500 HUF/Monat (€1.27/Monat) oder 5,100 HUF/Jahr (€12.70/Jahr), Enterprise 1,500 HUF/Monat (€3.81/Monat) oder 15,200 HUF/Jahr (€38.10/Jahr). Die Lizenzvalidierung erfordert Internetzugang. Die Standardlizenz umfasst 5 Plätze. Wenn Sie mehr Plätze benötigen, kontaktieren Sie uns unter support@corifeus.com.",
      placeholder: "Lizenzschlüssel"
    }
  },
  language: {
    // When you translate the english name, keep the Language in English
    // eg. Inglés / English
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
    copy: "Kopieren",
    downloadBuffer: "Binärdatei herunterladen",
    setBuffer: "Binärdatei hochladen",
    exportKeys: "Schlüssel exportieren",
    exportAllKeys: (opts) => `Alle ${opts.count} Schlüssel exportieren`,
    exportSearchResults: (opts) => `${opts.count} Ergebnisse exportieren`,
    importKeys: "Schlüssel importieren",
    saveWithFormatJson: "Mit Formatierung speichern",
    formatJson: "Json formatieren",
    wrap: "Umbrechen",
    unwrap: "Nicht umbrechen",
    downloadJson: "JSON herunterladen",
    pubsubMonitor: "PubSub Monitor",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "Sprache / Language",
    ok: "OK",
    addKey: "Zu diesem Schlüssel hinzufügen",
    addKeyRoot: "Stammschlüssel hinzufügen",
    reloadKey: "Schlüssel neu laden",
    reload: "Neu laden",
    close: "Schließen",
    commands: "Befehle",
    view: "Ansicht",
    statistics: "Statistiken",
    refresh: "Aktualisieren",
    pause: "Pause",
    resume: "Fortsetzen",
    clear: "Leeren",
    rename: "Umbenennen",
    main: "Datenbank",
    cancel: "Abbrechen",
    theme: "Design",
    github: "GitHub",
    githubRepo: "Repository",
    githubRelease: "Versionen",
    githubChangelog: "Änderungsprotokoll",
    info: "Info",
    settings: "Einstellungen",
    connect: "Verbinden",
    disconnect: "Trennen",
    overview: "Übersicht",
    console: "Konsole",
    noConnections: "Keine Verbindungen, fügen Sie eine Verbindung im Einstellungsmenü hinzu.",
    noConnectionsInSettings: "Keine Verbindungen, Sie können oben eine NEUE VERBINDUNG hinzufügen.",
    connectionAdd: "Neue Verbindung",
    addGroup: "Gruppe hinzufügen",
    extend: "Erweitern",
    collapse: "Zuklappen",
    add: "Hinzufügen",
    edit: "Bearbeiten",
    save: "Speichern",
    ttl: "TTL festlegen",
    license: "Lizenz festlegen",
    delete: "Löschen",
    remove: "Entfernen",
    sure: "Sicher",
    testConnection: "Verbindung testen",
    getKey: "Redis-Schlüssel und zugehörige Daten werden geladen ...",
    jsonViewShow: "JSON anzeigen",
    jsonViewEditor: "JSON bearbeiten",
    quickConsole: "Schnellkonsole",
  },
  label: {
    id: {
      nodeId: 'Knoten-ID',
      id: "Verbindungs-ID",
      info: "Wenn Sie die Eigenschaften sshPassword, sshPrivateKey, password, tlsCrt, tlsKey, tlsCa nicht ändern möchten, geben Sie bitte die Verbindungs-ID in diesen Eigenschaften ein, um die Eigenschaftswerte beizubehalten. Wenn Sie die gleiche Logik für das Knotenpasswort möchten, geben Sie die Knoten-ID im Knotenpasswort ein."
    },
    secureFeature: 'Wenn Sie einen Wert sehen, der mit P3X beginnt und gleich aussieht, handelt es sich um eine Sicherheitsfunktion. Um die Einstellungen zu ändern, ersetzen Sie diese Einstellungen einfach durch leere oder andere Werte und sie werden gespeichert. Wenn Sie die Einstellungen nicht ändern, werden sie so beibehalten, wie sie auf dem Server sind.',
    aiTranslating: "Übersetze...",
    aiSettings: "AI Einstellungen",
    aiGroqApiKey: "Groq API-Schlüssel",
    aiGroqApiKeyInfo: "Optional. Eigener Groq API-Schlüssel für bessere Leistung. Kostenlosen Schlüssel erhalten von",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "AI API-Schlüssel gespeichert",
    aiGroqApiKeyInvalid: "Ungültiger Groq API-Schlüssel",
    aiGroqApiKeyNotSet: "Nicht gesetzt (Server-Standard)",
    aiEnabled: "AI aktiviert",
    aiEnabledYes: "Ja",
    aiEnabledNo: "Nein",
    aiRouteViaNetwork: "Route über network.corifeus.com",
    aiRoutingDirect: "Anfragen gehen direkt an Groq mit Ihrem eigenen API-Schlüssel, ohne network.corifeus.com.",
    aiRoutingNetwork: "AI-Anfragen werden über network.corifeus.com weitergeleitet. Wenn Sie Ihren eigenen kostenlosen Groq API-Schlüssel haben, können Sie diesen Schalter ausschalten.",
    ssh: {
      on: 'SSH ein',
      off: 'SSH aus',
      sshHost: 'SSH Host',
      sshPort: 'SSH Port',
      sshUsername: 'SSH Benutzername',
      sshPassword: 'SSH Passwort',
      sshPrivateKey: 'SSH Privater Schlüssel'
    },
    isBuffer: opts => `[object ArrayBuffer] bedeutet, dass der Wert Binärdaten sind oder der Wert größer als ${opts.maxValueAsBuffer} ist`,
    streamValue: `Stream-Feld und -Wert stehen in einer Zeile. Z.B.: field1 value1 "field 2" "value 2"`,
    streamTimestampId: `'*' bedeutet automatisch generiert oder die Spezifikation als <millisecondsTime>-<sequenceNumber>`,
    unableToLoadKey: ({
      key
    }) => {
      return `Dieser Schlüssel konnte nicht geladen werden: ${key}. Möglicherweise wurde der Schlüssel gelöscht. Der genaue Fehler ist in der Konsole.`;
    },
    bigJson: "Dieses JSON-Objekt ist über 10 KB groß. Stellen Sie sicher, dass Sie wissen, was Sie tun, da einige Funktionen beim Rendern langsam sein können.",
    addNode: "Knoten hinzufügen",
    validateJson: "JSON validieren",
    reducedFunction: `Eingeschränkte Funktionalität`,
    tooManyKeys: opts => {
      return `Für die vollen maximalen Funktionen beträgt die erlaubte Gesamtanzahl der Schlüssel ${opts.maxLightKeysCount}. Diese Datenbank hat mehr als die erlaubte Gesamtanzahl der Schlüssel ${opts.count}. Die Schlüsselsortierung und die zusätzlichen Bauminformationen sind deaktiviert. Die Suche erfolgt nur auf dem Server statt auf dem Client.`;
    },
    redisCommandNotFound: "Kein passender Redis-Befehl gefunden ...",
    treeKeyStore: `Die Sortierung (natürlicher Vergleich) wird auf dem Client, also dem Browser, ausgeführt, was bedeutet, dass bei großen Datensätzen mit mehr als 10.000 Schlüsseln etwas zusätzliche Zeit zum Rendern der Seite benötigt werden kann. In Redis gibt es keine Schlüsselsortierung, nur auf diese Weise.`,
    socketIoTimeout: options => {
      return `Socket.IO hat bei dieser Anfrage das Zeitlimit überschritten (max ${options.timeout / 1000} Sekunden) ...`;
    },
    resizerInfo: options => {
      return `Die Mindestbreite des linken oder rechten Panels beträgt ${options.width}px`;
    },
    jsonViewNotParsable: "Dieser Wert kann nicht als JSON geparst werden  ",
    ttlTitle: "TTL in Sekunden festlegen",
    passwordSecure: "Das Passwort kann leer sein, zeigt aber dennoch Zeichen an. Dies ist eine Sicherheitsfunktion.",
    tlsWithoutCert: "TLS ohne zusätzliches Zertifikat aktivieren",
    tlsRejectUnauthorized: "Nicht autorisiertes Zertifikat ablehnen",
    tlsSecure: "Wenn Sie eine TLS-Konfiguration sehen, die mit P3X beginnt, oder alle TLS-Einstellungen gleich aussehen, handelt es sich um eine Sicherheitsfunktion. Um die Einstellungen zu ändern, ersetzen Sie diese Einstellungen einfach durch leere oder andere Werte und sie werden gespeichert. Wenn Sie die TLS-Einstellungen nicht ändern, werden sie so beibehalten, wie sie auf dem Server sind.",
    treeSeparatorEmpty: "Wenn der Baumtrenner leer ist, hat der Baum keine verschachtelten Knoten, nur eine einfache Liste",
    treeSeparatorEmptyNote: "Keine verschachtelten Knoten, nur eine einfache Liste",
    welcomeConsole: "Willkommen in der Redis-Konsole",
    welcomeConsoleInfo: "Verlauf mit Cursor HOCH oder RUNTER ist aktiviert",
    redisListIndexInfo: "Leer zum Anhängen, -1 zum Voranstellen oder an der angezeigten Position speichern.",
    console: "Konsole",
    connectiondAdd: "Verbindung hinzufügen",
    connectiondEdit: "Verbindung bearbeiten",
    connectiondView: "Verbindung anzeigen",
    connections: "Verbindungen",
    licenseInfo: "Lizenz",
    licenseEditable: "Lizenz bearbeitbar",
    licenseEditableYes: "Ja",
    licenseEditableNo: "Nein",
    licenseTerminalOnly: "Die Lizenz kann nur über das Server-Terminal konfiguriert werden.",
    licenseTierPolicyTitle: "Stufenrichtlinie",
    licenseTierPolicyText: "<h4>Kostenlos</h4>Nur grundlegende Redis UI; kein SSH-Tunneling, kein Readonly-Verbindungsmodus, kein Cluster/Sentinel, kein JSON bearbeiten/Binärdatei hochladen/Binärdatei herunterladen, kein ReJSON.<br/><strong>Preis: 0 HUF/Monat (€0/Monat).</strong><br/><br/><h4>Pro</h4>SSH-Tunneling, Readonly-Verbindungsmodus (einschließlich --readonly-connections/-r), JSON bearbeiten, Binärdatei hochladen, Binärdatei herunterladen, ReJSON.<br/><strong>Grundpreis: 400 HUF/Monat (€1/Monat) oder 4,000 HUF/Jahr (€10/Jahr).</strong><br/><strong>Gesamt mit 27% MwSt.: 500 HUF/Monat (€1.27/Monat) oder 5,100 HUF/Jahr (€12.70/Jahr).</strong><br/><br/><h4>Enterprise</h4>SSH-Tunneling, Cluster und Sentinel, plus JSON bearbeiten, Binärdatei hochladen, Binärdatei herunterladen, ReJSON; --readonly-connections/-r funktioniert ebenfalls.<br/><strong>Grundpreis: 1,200 HUF/Monat (€3/Monat) oder 12,000 HUF/Jahr (€30/Jahr).</strong><br/><strong>Gesamt mit 27% MwSt.: 1,500 HUF/Monat (€3.81/Monat) oder 15,200 HUF/Jahr (€38.10/Jahr).</strong><br/><br/><h4>Jahresregel</h4>Der Jahrespreis ist das 10-fache des Monatspreises.<br/><br/><h4>Plätze</h4>Die Standardlizenz umfasst 5 Plätze. Wenn Sie mehr Plätze benötigen, kontaktieren Sie uns unter <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><br/><h4>Enterprise-Testversion</h4>10 Tage kostenlos für jeden mit einer echten E-Mail-Adresse (keine Test-E-Mail).<br/><hr/><h4>Rechnungsinformationen per E-Mail</h4>Name, Rechnungs-E-Mail, Ländercode, Postleitzahl, Stadt, Adresse, USt-IdNr. (optional).<br/><br/><h4>Zahlung</h4>PayPal-Zahlung ist nur in HUF (Forint) verfügbar; nach Überweisung des Betrags @ <a href='https://paypal.me/corifeus'>https://paypal.me/corifeus</a> sende ich Ihnen eine Rechnung. Alle Zahlungen sind nicht erstattungsfähig.<br/><br/><h4>MwSt.</h4>MwSt. wird zum Preis hinzugefügt (27% in Ungarn).<br/><hr/><h4>Kontakt</h4>Wenn Sie Hallo sagen oder eine Frage haben möchten, kontaktieren Sie <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><hr/><h4>Sprache</h4>Rechnungs- und Lizenz-E-Mail-Kommunikation ist auf Englisch. Die Rechnungswährung ist HUF.<br/><hr/><h4>Hinweis</h4>Die Lizenzvalidierung erfordert Internetzugang.",
    licenseState: "Status",
    licenseStateActive: "Aktiv",
    licenseStateInactive: "Inaktiv",
    licenseStateNoLicense: "Keine Lizenz",
    licenseKeyMasked: "Gespeicherter Schlüssel",
    licenseTier: "Stufe",
    licenseValid: "Gültig",
    licenseStatus: "Lizenzstatus",
    licenseReason: "Grund",
    licenseCheckedAt: "Geprüft am",
    licenseStartsAt: "Beginnt am",
    licenseExpiresAt: "Läuft ab am",
    licenseDaysLeft: "Verbleibende Tage",
    licenseMaxDevices: "Maximale Geräteanzahl",
    licenseActiveDevices: "Aktive Geräte",
    licenseActiveDevicesInfo: "Wenn ein Gerät nicht mehr verwendet wird, wird sein Platz automatisch nach 75 Minuten freigegeben.",
    licenseCustomerEmail: "Kunden-E-Mail",
    licenseFeatures: "Funktionen",
    licenseFeaturesEmpty: "Keine zusätzlichen Funktionen",
    licenseFeatureReadonlyMode: "Readonly-Verbindungsmodus",
    licenseFeatureReadonlyConnectionsFlag: "Readonly-Verbindungen (--readonly-connections/-r)",
    licenseFeatureSsh: "SSH-Tunneling",
    licenseFeatureCluster: "Cluster-Verbindungen",
    licenseFeatureSentinel: "Sentinel-Verbindungen",
    licenseFeatureReJSON: "ReJSON (JSON data type)",
    keysSort: {
      on: "Schlüsselsortierung ein",
      off: "Schlüsselsortierung aus"
    },
    cluster: {
      on: "Cluster ein",
      off: "Cluster aus"
    },
    sentinel: {
      on: "Sentinel ein",
      off: "Sentinel aus",
      name: "Sentinel-Name"
    },
    readonly: {
      on: "Readonly ein",
      off: "Readonly aus"
    },
    proSshOnly: "SSH ist in Pro oder Enterprise verfügbar.",
    proReadonlyOnly: "Der Readonly-Verbindungsmodus ist in Pro oder Enterprise verfügbar.",
    enterpriseClusterSentinelOnly: "Cluster und Sentinel sind nur in Enterprise verfügbar.",
    theme: {
      light: "Hell",
      dark: "Dunkel Enterprise",
      darkNeu: "Dunkel",
      darkoBluo: "Darko bluo",
      enterprise: "Enterprise",
      redis: "Redis",
      matrix: "Matrix"
    },
    connected: opts => {
      return `Verbunden: ${opts.name}`;
    },
    tree: "Baum",
    askAuth: "Autorisierung anfordern",
    keyboardShortcuts: "Tastenkürzel",
    about: "Über",
    supportedLanguages: "Unterstützte Sprachen",
    version: "Version",
    redisVersion: "Redis-Version",
    modules: "Module",
    shortcutRefresh: "Aktualisieren",
    shortcutSearch: "Suche fokussieren",
    shortcutNewKey: "Neuer Schlüssel",
    shortcutDisconnect: "Trennen",
    themeAuto: "Automatisch (System)",
    shortcutCommandPalette: "Befehlspalette",
    commandPalette: "Befehlspalette",
    noResults: "Keine Ergebnisse",
    redisCommandsReference: "Redis Befehle",
    ungrouped: "Ohne Gruppe",
    grouped: "Gruppiert",
    connectFirst: "Verbinden Sie sich zuerst mit einem Redis-Server",
    searchLanguage: "Sprache suchen...",
    exportProgress: "Schlüssel werden exportiert...",
    importProgress: "Schlüssel werden importiert...",
    importPreview: "Vorschau",
    importOverwrite: "Überschreiben",
    importSkip: "Überspringen",
    importConflict: "Wenn der Schlüssel bereits existiert:",
    noKeysToExport: "Keine Schlüssel zum Exportieren",
    time: "Zeit",
    loading: "Laden...",
    autoRefresh: "Auto",
    exportSearchHint: "Es werden nur Schlüssel exportiert, die der aktuellen Suche entsprechen",
    importSearchHint: "Import gilt für die gesamte Datenbank, nicht nur für Suchergebnisse",
    importNoKeys: "Keine Schlüssel in der Datei gefunden",
  },
  status: {
    dataCopied: "Die Daten sind in der Zwischenablage",
    licenseSaved: "Lizenz gespeichert",
    exportDone: "Export abgeschlossen",
    indexCreated: "Index erstellt",
    indexDropped: "Index gelöscht",
    importDone: (opts) => `Import abgeschlossen: ${opts.created} erstellt, ${opts.skipped} übersprungen, ${opts.errors} Fehler`,
    nodeRemoved: "Knoten entfernt",
    keyIsNotExisting: "Dieser Schlüssel wurde möglicherweise gelöscht oder ist abgelaufen.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "Kein Schlüssel";
      } else if (opts.keyCount === 1) {
        return "1 Schlüssel";
      } else {
        return `${opts.keyCount} Schlüssel`;
      }
    },
    treeExpandAll: "Alle Baumblätter aufklappen. Diese Operation kann aufwändig sein und Zeit in Anspruch nehmen ...",
    noRedisKeys: "Es gibt keine Schlüssel in dieser Datenbank.",
    redisConnected: "Redis erfolgreich verbunden",
    reloadingDataInfo: "Redis-Dateninformationen werden neu geladen",
    added: "Hinzugefügt",
    saved: "Aktualisiert",
    cancelled: "Abgebrochen",
    deleted: "Gelöscht",
    savedRedis: "Redis-Daten wurden gespeichert",
    redisDisconnected: opts => {
      return `Die aktuelle Verbindung hatte einen Fehler: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `Der DB-Index wurde auf ${opts.db} gesetzt. `;
    },
    treeDeleted: opts => {
      return `Der Baumschlüssel wurde gelöscht (${opts.key}).`;
    },
    deletedKey: opts => {
      return `Der Schlüssel wurde gelöscht (${opts.key}).`;
    },
    renamedKey: "Dieser Schlüssel wurde umbenannt",
    ttlChanged: "Die TTL dieses Schlüssels wurde geändert",
    notInteger: "Diese Eingabe ist keine Ganzzahl",
    persisted: "Dieser Schlüssel wird dauerhaft gespeichert",
    set: "Der Schlüssel ist gesetzt/hinzugefügt"
  },
  code: {
    "delete-connection": "Diese Verbindung wurde gelöscht, daher sind Sie von dieser Redis-Instanz getrennt.",
    "save-connection": "Diese Verbindung wurde geändert, daher sind Sie von dieser Redis-Instanz getrennt. Sie können sich erneut verbinden.",
    "readonly-connections": "Verbindungen hinzufügen/speichern/löschen ist schreibgeschützt!",
    "readonly-connection-mode": "Diese Verbindung ist im schreibgeschützten Modus!",
    "list-out-of-bounds": "Dieser Listenindex liegt außerhalb des Bereichs",
    "donation-ware-feature": "Diese Funktion ist in der kostenpflichtigen Version verfügbar.",
    "feature-pro-readonly-required": "Der Readonly-Verbindungsmodus erfordert eine Pro- oder Enterprise-Lizenz.",
    "feature-pro-ssh-required": "SSH-Tunneling erfordert eine Pro- oder Enterprise-Lizenz.",
    "feature-enterprise-cluster-sentinel-required": "Cluster und Sentinel erfordern eine Enterprise-Lizenz.",
    "feature-pro-json-binary-required": "JSON bearbeiten, Binärdatei hochladen und Binärdatei herunterladen erfordern eine Pro- oder Enterprise-Lizenz.",
    "feature-pro-rejson-required": "ReJSON (JSON data type) requires Pro or Enterprise license.",
    "invalid-json-value": "The value is not valid JSON.",
    "http_auth_required": "Autorisierung erforderlich: Bitte authentifizieren Sie sich mit HTTP Basic Auth und laden Sie die Seite neu.",
    "auto-connection-failed": "Möglicherweise wurde die Verbindung entfernt und die automatische Verbindung ist deshalb fehlgeschlagen.",
    invalid_console_command: "Dieser Befehl funktioniert nicht über die GUI."
  },
  licenseReason: {
    LICENSE_VALID: "Lizenz ist gültig",
    LICENSE_INVALID: "Lizenz ist ungültig",
    LICENSE_MISSING: "Kein Lizenzschlüssel festgelegt",
    LICENSE_DISABLED: "Lizenz ist in der Serverkonfiguration deaktiviert",
    LICENSE_NOT_FOUND: "Lizenz wurde nicht gefunden",
    LICENSE_EXPIRED: "Lizenz ist abgelaufen",
    LICENSE_CLEARED: "Lizenzschlüssel wurde gelöscht",
    LICENSE_MAX_DEVICES_REACHED: "Maximale Anzahl der Geräteplätze erreicht",
    PRODUCT_MISMATCH: "Lizenzprodukt stimmt nicht überein"
  },
  licenseStatusValue: {
    active: "Aktiv",
    deleted: "Gelöscht",
    all: "Alle",
    expired: "Abgelaufen",
    missing: "Fehlend",
    inactive: "Inaktiv"
  },
  form: {
    error: {
      required: "Erforderlich",
      port: "Der Port liegt zwischen 1-65535",
      invalid: "Das Formular ist ungültig"
    },
    connection: {
      label: {
        name: "Name",
        group: "Gruppe",
        host: "Hostname",
        port: "Port",
        password: "Passwort",
        username: "Benutzername"
      }
    },
    treeSettings: {
      maxValueDisplay: "Maximale Anzeigelänge des Wertes",
      maxValueDisplayInfo: "Bei 0 werden vollständige Werte angezeigt. Bei größer als 0 wird auf diese Länge gekürzt. Bei -1: Für Zeichenketten wird der Wert bis zur Bearbeitung ausgeblendet; für andere Typen wird der vollständige Inhalt angezeigt.",
      maxKeys: "Maximale Schlüsselanzahl",
      maxKeysInfo: "Damit die GUI nicht abstürzt, begrenzen wir die maximale Schlüsselanzahl.",
      keyCount: () => {
        return `Anzahl der Schlüssel: ${p3xr.state.keysRaw.length}`;
      },
      label: {
        animation: "Animation verwenden",
        noAnimation: "Keine Animation",
        jsonFormatTwoSpace: "JSON mit 2 Leerzeichen formatieren",
        jsonFormatFourSpace: "JSON mit 4 Leerzeichen formatieren",
        formName: "Redis-Einstellungen",
        searchModeClient: "Client-Suchmodus",
        searchModeServer: "Server-Suchmodus",
        searchModeStartsWith: "Suche mit Beginnt-mit-Modus",
        searchModeIncludes: "Enthält-Suchmodus"
      },
      field: {
        treeSeparator: "Baumtrenner",
        treeSeparatorSelector: "Baumtrenner-Selektor",
        page: "Baum-Seitenanzahl",
        keyPageCount: "Schlüssel pro Seite",
        keysSort: "Schlüssel sortieren",
        searchMode: "Suchmodus",
        searchModeStartsWith: "Suche beginnt mit / enthält"
      },
      error: {
        keyPageCount: "Die Schlüsselanzahl pro Seite muss eine Ganzzahl zwischen 5 - 100 sein",
        page: "Die Seitenanzahl muss eine Ganzzahl zwischen 10 - 5000 sein",
        maxValueDisplay: "Der maximale Anzeigewert muss eine Ganzzahl zwischen -1 und 32768 sein",
        maxKeys: "Die maximale Schlüsselanzahl muss eine Ganzzahl zwischen 100 und 100000 sein"
      }
    },
    key: {
      label: {
        formName: {
          add: "Neuen Redis-Schlüssel hinzufügen",
          edit: "Redis-Schlüssel bearbeiten",
          append: "Zu bestehendem Redis-Schlüssel hinzufügen"
        }
      },
      field: {
        streamTimestamp: "Zeitstempel",
        key: "Schlüssel",
        type: "Typ",
        index: "Index",
        hashKey: "Hash-Schlüssel",
        score: "Punktzahl",
        value: "Wert"
      },
      error: {
        streamTimestamp: "Der Zeitstempel ist erforderlich, entweder im Redis-Format oder als *",
        key: "Der Schlüssel muss mindestens ein Zeichen lang sein",
        hashKey: "Der Hash-Schlüssel muss mindestens ein Zeichen lang sein",
        score: "Die Punktzahl der sortierten Menge ist erforderlich",
        value: "Der Wert ist erforderlich"
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
      title: "Suche",
      index: "Index",
      query: "Abfrage",
      results: "Ergebnisse",
      noIndex: "Keine Indizes gefunden",
      createIndex: "Index erstellen",
      dropIndex: "Index löschen",
      indexInfo: "Index-Info",
      indexName: "Indexname",
      prefix: "Schlüsselpräfix (optional)",
      fieldName: "Feldname",
    },
    monitor: {
      title: "Überwachung",
      memory: "Speicher",
      opsPerSec: "Ops/Sek",
      clients: "Clients",
      blocked: "Blockiert",
      hitsMisses: "Trefferquote",
      networkIo: "Netzwerk I/O",
      slowLog: "Langsamer Log",
      totalCommands: "Gesamt",
      expired: "Abgelaufen",
      evicted: "Verdrängt",
      clientList: "Client-Liste",
      topKeys: "Größte Schlüssel nach Speicher",
      killClient: "Client beenden",
      clientKilled: "Client beendet",
      confirmKillClient: "Sind Sie sicher, dass Sie diesen Client beenden möchten?",
      noKeys: "Keine Schlüssel",
      noClients: "Keine Clients",
    },
    overview: {
      noConnected: "Es besteht keine Verbindung zu Redis.",
      overviewClients: "Verbundene nach Anzahl der Clients auflisten",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "1 Client";
        }
        return `${opt.length} Clients`;
      }
    },
    key: {
      label: {
        key: "Schlüssel",
        encoding: "Kodierung",
        length: "Größe",
        ttl: "TTL",
        ttlTitle: "Lebensdauer",
        type: "Typ",
        ttlNotExpire: "läuft nicht ab",
        lengthString: "Bytes",
        lengthItem: "Elemente",
        actions: "Aktionen"
      },
      list: {
        table: {
          index: "Index",
          value: "Wert"
        }
      },
      hash: {
        table: {
          hashkey: "Hash-Schlüssel",
          value: "Wert"
        }
      },
      set: {
        table: {
          value: "Mitglied"
        }
      },
      zset: {
        table: {
          value: "Mitglied",
          score: "Punktzahl"
        }
      },
      stream: {
        table: {
          timestamp: "Zeitstempel-ID",
          field: "Feld",
          value: "Wert"
        }
      }
    },
    treeControls: {
      settings: "Baumeinstellungen",
      expandAll: "Alle aufklappen",
      collapseAll: "Alle zuklappen",
      search: {
        search: "In Schlüsseln suchen",
        clear: "Aktuelle Suche leeren",
        placeholderClient: "Clientseitig suchen",
        placeholderServer: "Serverseitig suchen",
        info: "Die clientseitige Suche bedeutet, dass der Text im Suchfeld abgeglichen wird. Die serverseitige Suche bedeutet, dass in den Schlüsselmustern wie *{Suchtext}* gesucht wird. Für große Datensätze ist es besser, die serverseitige Suche zu verwenden. Für kleinere Datensätze ist es besser, den clientseitigen Suchmodus zu verwenden." + ` Wenn die Schlüsselanzahl über ${p3xr.settings.maxLightKeysCount} liegt, können Sie nur serverseitig suchen.`,
        largeSetInfo: "Bei einem großen Datensatz ist die clientseitige Suche deaktiviert, daher ist derzeit nur die serverseitige Suche möglich.",
        infoDetails: "Um herauszufinden, wie die Suche funktioniert, überprüfen Sie bitte die Einstellungen"
      },
      pager: {
        next: "Nächste",
        prev: "Vorherige",
        first: "Erste",
        last: "Letzte"
      }
    }
  },
  time: {
    loading: "Laden...",
    years: "Jahre",
    months: "Monate",
    days: "Tage",
    year: "Jahr",
    month: "Monat",
    day: "Tag"
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
