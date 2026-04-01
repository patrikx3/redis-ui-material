const strings = {
  error: {
    cleared_license: "Očišćena licenca",
    invalid_license: "Nevažeća licenca",
    license_max_devices_reached: "Dosegnut je maksimalan broj mjesta na uređaju",
    license_readonly: "Licenca se može promijeniti samo s poslužiteljskog terminala.",
    server_error: "Pogreška poslužitelja, pokušajte ponovo"
  },
  title: {
    donate: "Donirajte",
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
    threads: "Niti",
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
    deleteAllKeys: opts => {
      return `Izbriši ovo stablo i sve njegove ključeve (${opts.key})?`;
    },
    socketioConnectError: "Socket.IO se ne može spojiti na poslužitelj, možete ponovno učitati i pokušati sami riješiti pogrešku veze, klijent ne zna kako to sam riješiti.",
    socketioAuthRequired: "Potrebna je autorizacija Socket.IO. Provjerite autentičnost pomoću HTTP Basic Auth (korisničko ime/lozinka) i ponovno učitajte.",
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
    },
    license: {
      title: "Postavite licencu",
      textContent: "Ako želite koristiti značajke koje se plaćaju, kontaktirajte support@corifeus.com kako biste zatražili licencu. Cijene su Pro 400 HUF/mjesec (1€/mjesec) ili 4.000 HUF/godišnje (10€/godišnje), a Enterprise 1.200 HUF/mjesec (3€/mjesec) ili 12.000 HUF/godišnje (30€/godina). Godišnje je 10x mjesečno. Sa 27% VAT, ukupni iznosi su Pro 500 HUF/mjesec (1,27 €/mjesec) ili 5,100 HUF/godišnje (12,70 €/godišnje), Enterprise 1,500 HUF/mjesec (3,81€/mjesečno) ili 15.200 HUF/godišnje (38,10€/godišnje). Validacija licence zahtijeva pristup internetu. Zadana licenca uključuje 5 mjesta. Ako trebate više mjesta, kontaktirajte nas na support@corifeus.com.",
      placeholder: "Ključ licence"
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
    importKeys: "Uvezi ključeve",
    saveWithFormatJson: "Spremi s formatom",
    formatJson: "Format Json",
    wrap: "Zamotati",
    unwrap: "Odmotajte",
    downloadJson: "Preuzmite JSON",
    pubsubMonitor: "PubSub Monitor",
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
    license: "Postavite licencu",
    delete: "Izbriši",
    remove: "Ukloniti",
    sure: "naravno",
    testConnection: "Testirajte vezu",
    getKey: "Učitavanje ključa Redis i povezanih podataka ...",
    jsonViewShow: "Prikaz JSON",
    jsonViewEditor: "Uredi JSON",
    quickConsole: "Brza konzola",
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
    aiGroqApiKeyInvalid: "Invalid Groq API key",
    aiGroqApiKeyNotSet: "Nije postavljeno (zadano poslužitelja)",
    aiEnabled: "AI omogućeno",
    aiEnabledYes: "Da",
    aiEnabledNo: "Ne",
    aiRouteViaNetwork: "Route via network.corifeus.com",
    aiRoutingDirect: "Queries go directly to Groq using your own API key, bypassing network.corifeus.com.",
    aiRoutingNetwork: "AI queries are routed through network.corifeus.com. If you have your own free Groq API key, you can turn off this switch to route directly to Groq without network.corifeus.com.",
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
    tlsWithoutCert: "Omogućite TLS bez dodatnog certifikata",
    tlsRejectUnauthorized: "Odbaci neovlašteni certifikat",
    tlsSecure: "Ako vidite TLS konfiguraciju koja počinje s P3X ili sve TLS postavke izgledaju isto, to je sigurna značajka. Da biste promijenili postavke, samo zamijenite ove postavke praznim ili nečim drugim i one će biti spremljene. Ako ne promijenite TLS postavke, postavke će se zadržati onakve kakve jesu na poslužitelju.",
    treeSeparatorEmpty: "Ako je separator stabla prazan, stablo neće imati ugniježđene čvorove, samo čistu listu",
    treeSeparatorEmptyNote: "Nema ugniježđenih čvorova, samo čisti popis",
    welcomeConsole: "Dobrodošli na Redis konzolu",
    welcomeConsoleInfo: "Povijest kursora GORE ili DOLJE je omogućena",
    redisListIndexInfo: "Prazno za dodavanje, -1 za dodavanje ispred ili spremanje na prikazano mjesto.",
    console: "Konzola",
    connectiondAdd: "Dodaj vezu",
    connectiondEdit: "Uredi vezu",
    connectiondView: "Pregledajte vezu",
    connections: "Veze",
    licenseInfo: "Licenca",
    licenseEditable: "Licenca se može uređivati",
    licenseEditableYes: "da",
    licenseEditableNo: "br",
    licenseTerminalOnly: "Licenca se može konfigurirati samo s poslužiteljskog terminala.",
    licenseTierPolicyTitle: "Politika razine",
    licenseTierPolicyText: "<h4>Free</h4>core Redis samo korisničko sučelje; nema SSH tuneliranja, nema načina veze samo za čitanje, nema Cluster/Sentinel, nema Uređivanje JSON/Učitaj binarno/Preuzmi binarno, ne ReJSON.<br/><strong>Cijena: 0 HUF/mjesečno (0€/mjesec).</strong><br/><br/><h4>Pro</h4>SSH tuneliranje, način veze samo za čitanje (uključujući --readonly-connections/-r), Uredi JSON, Upload binary, Download binary, ReJSON.<br/><strong>Osnovna cijena: 400 HUF/mjesec (1€/mjesec) ili 4.000 HUF/godišnje (10 €/godišnje).</strong><br/><strong>Ukupno sa 27% VAT: 500 HUF/mjesečno (1,27 € mjesečno) ili 5100 HUF godišnje (12,70 €/godina).</strong><br/><br/><h4>Enterprise</h4>SSH tuneliranje, Cluster i Sentinel, plus Uredi JSON, Prenesi binarno, Preuzmi binarno, ReJSON; --readonly-connections/-r također radi.<br/><strong>Osnovna cijena: 1.200 HUF/mjesec (3€/mjesec) ili 12.000 HUF/godišnje (30€/godina).</strong><br/><strong>Ukupno sa 27% VAT: 1500 HUF/mjesec (3,81€/mjesec) ili 15.200 HUF/godišnje (38,10 €/godišnje).</strong><br/><br/><h4>Godišnje pravilo</h4>Godišnja cijena je 10x mjesečna cijena.<br/><br/><h4>Sjedala</h4>Zadana licenca uključuje 5 sjedala. Ako trebate više mjesta, kontaktirajte nas na <a href='mailto:mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><br/><h4>Eprobno razdoblje za poduzeća</h4>10 dana besplatno za bilo koga sa stvarno postojećom e-adresom (netestna e-pošta).<br/><hr/><h4>Informacije o naplati u e-pošti</h4>Ime, E-pošta za naplatu, Državni broj, Poštanski broj, Grad, Adresa, VAT ID (izborno).<br/><br/><h4>Plaćanje</h4>PayPal plaćanje je dostupno samo u HUF (forint); nakon slanja novca @ <a href='https://paypal.me/corifeus'>https://paypal.me/corifeus</a> poslat ću vam fakturu. Sve uplate su nepovratne.<br/><br/><h4>VAT</h4>VAT dodaje se cijeni (27% u Mađarska).<br/><hr/><h4>Kontakt</h4>Ako želite pozdraviti ili imate pitanje, kontaktirajte <a href='mailto:mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><hr/><h4>Language</h4>Račun i licencna e-pošta komunikacija je na engleskom jeziku. Valuta fakture je HUF.<br/><hr/><h4>Note</h4>Provjera valjanosti licence zahtijeva pristup internetu.",
    licenseState: "Država",
    licenseStateActive: "Aktivno",
    licenseStateInactive: "Neaktivan",
    licenseStateNoLicense: "Bez dozvole",
    licenseKeyMasked: "Spremljen ključ",
    licenseTier: "Razina",
    licenseValid: "Valjano",
    licenseStatus: "Status licence",
    licenseReason: "razum",
    licenseCheckedAt: "Provjereno u",
    licenseStartsAt: "Počinje u",
    licenseExpiresAt: "Istječe u",
    licenseDaysLeft: "Preostalo dana",
    licenseMaxDevices: "Max uređaja",
    licenseActiveDevices: "Aktivni uređaji",
    licenseActiveDevicesInfo: "Ako se uređaj više ne koristi, njegovo se sjedište automatski oslobađa nakon 75 minuta.",
    licenseCustomerEmail: "E-pošta kupca",
    licenseFeatures: "Značajke",
    licenseFeaturesEmpty: "Nema dodatnih značajki",
    licenseFeatureReadonlyMode: "Način veze samo za čitanje",
    licenseFeatureReadonlyConnectionsFlag: "Veze samo za čitanje (--readonly-connections/-r)",
    licenseFeatureSsh: "SSH tuneliranje",
    licenseFeatureCluster: "Cluster veze",
    licenseFeatureSentinel: "Sentinel veze",
    licenseFeatureReJSON: "ReJSON (tip podataka JSON)",
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
    proSshOnly: "SSH dostupan je u verzijama Pro ili Enterprise.",
    proReadonlyOnly: "Način povezivanja samo za čitanje dostupan je u Pro ili Enterprise.",
    enterpriseClusterSentinelOnly: "Cluster i Sentinel dostupni su samo u Enterpriseu.",
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
    loading: "Učitavanje...",
    autoRefresh: "Auto",
    exportSearchHint: "Izvoz samo ključeva koji odgovaraju trenutnom pretraživanju",
    importSearchHint: "Uvoz se primjenjuje na cijelu bazu podataka, ne samo na rezultate pretrage",
    importNoKeys: "Nisu pronađeni ključevi u datoteci",
  },
  status: {
    dataCopied: "Podaci su u međuspremniku",
    licenseSaved: "Licenca spremljena",
    exportDone: "Izvoz završen",
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
    set: "Ključ je postavljen/dodan"
  },
  code: {
    "delete-connection": "Ova veza je izbrisana, tako da ste prekinuti s ovom Redis instancom.",
    "save-connection": "Ova je veza promijenjena, tako da ste prekinuti s ovom Redis instancom. Možete se ponovno povezati.",
    "readonly-connections": "Veze dodavanje/spremanje/brisanje su samo za čitanje!",
    "readonly-connection-mode": "Ova veza je samo za čitanje!",
    "list-out-of-bounds": "Ovaj indeks popisa je izvan granica",
    "donation-ware-feature": "Ova je značajka prisutna u verziji za donacije.",
    "feature-pro-readonly-required": "Način veze samo za čitanje zahtijeva Pro ili Enterprise licencu.",
    "feature-pro-ssh-required": "SSH tuneliranje zahtijeva Pro ili Enterprise licencu.",
    "feature-enterprise-cluster-sentinel-required": "Cluster i Sentinel zahtijevaju Enterprise licencu.",
    "feature-pro-json-binary-required": "Uredi JSON, Upload binary i Download binary zahtijevaju Pro ili Enterprise licencu.",
    "feature-pro-rejson-required": "ReJSON (tip podataka JSON) zahtijeva Pro ili Enterprise licencu.",
    "invalid-json-value": "Vrijednost nije važeća JSON.",
    "http_auth_required": "Potrebna autorizacija: provjerite autentičnost pomoću HTTP Basic Auth i ponovno učitajte.",
    "auto-connection-failed": "Moguće je da je zbog toga veza uklonjena i automatsko povezivanje nije uspjelo.",
    invalid_console_command: "Ova naredba ne radi putem GUI."
  },
  licenseReason: {
    LICENSE_VALID: "Licenca je važeća",
    LICENSE_INVALID: "Licenca je nevažeća",
    LICENSE_MISSING: "Nije postavljen licencni ključ",
    LICENSE_DISABLED: "Licenca je onemogućena u konfiguraciji poslužitelja",
    LICENSE_NOT_FOUND: "Licenca nije pronađena",
    LICENSE_EXPIRED: "Licenca je istekla",
    LICENSE_CLEARED: "Ključ licence je izbrisan",
    LICENSE_MAX_DEVICES_REACHED: "Dosegnut je maksimalan broj mjesta na uređaju",
    PRODUCT_MISMATCH: "Licencni proizvod ne odgovara"
  },
  licenseStatusValue: {
    active: "Aktivno",
    deleted: "Izbrisano",
    all: "sve",
    expired: "isteklo",
    missing: "Nedostaje",
    inactive: "Neaktivan"
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
      keyCount: () => {
        return `Broj tipki: ${p3xr.state.keysRaw.length}`;
      },
      label: {
        animation: "Koristite animaciju",
        noAnimation: "Nema animacije",
        jsonFormatTwoSpace: "Format JSON s 2 razmaka",
        jsonFormatFourSpace: "Format JSON s 4 razmaka",
        formName: "Redis postavke",
        searchModeClient: "Način pretraživanja klijenata",
        searchModeServer: "Način pretraživanja poslužitelja",
        searchModeStartsWith: "Pretraga s počinje s načinom",
        searchModeIncludes: "Pretraga uključuje način"
      },
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
        value: "Vrijednost"
      },
      error: {
        streamTimestamp: "Vremenska oznaka je obavezna, u formatu Redis ili kao *",
        key: "Ključ je, barem, jedan znak",
        hashKey: "Ključ hash tablice je najmanje jedan znak",
        score: "Potreban je poredani rezultat seta",
        value: "Vrijednost je obavezna"
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
      totalCommands: "Ukupno",
      expired: "Isteklo",
      evicted: "Izbačeno",
      clientList: "Popis klijenata",
      topKeys: "Najveći ključevi po memoriji",
      killClient: "Ubij klijenta",
      clientKilled: "Klijent ubijen",
      confirmKillClient: "Jeste li sigurni da želite zaustaviti ovog klijenta?",
      noKeys: "Nema ključeva",
      noClients: "Nema klijenata",
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
      }
    },
    treeControls: {
      settings: "Postavke stabla",
      expandAll: "Proširi sve",
      collapseAll: "Sažmi sve",
      search: {
        search: "Traži u ključevima",
        clear: "Izbrišite trenutno pretraživanje da biste ga postavili praznim",
        placeholderClient: "Pretraži klijentsku stranu",
        placeholderServer: "Pretraživanje na strani poslužitelja",
        info: "Pretraživanje na strani klijenta znači da odgovara tekstu u unosu pretraživanja. Pretraživanje na strani poslužitelja znači da je to poput pretraživanja u uzorcima ključeva kao *{search-text}*. Za velike skupove pretraživanja bolje je koristiti pretraživanje na strani poslužitelja. Za manje skupove pretraživanja, bolje je koristiti način pretraživanja na strani klijenta." + ` Ako je brojanje ključeva gotovo ${p3xr.settings.maxLightKeysCount}, možete pretraživati samo na strani poslužitelja.`,
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
    loading: "Učitavanje...",
    years: "godina",
    months: "mjeseca",
    days: "dana",
    year: "godine",
    month: "mjesec",
    day: "dan"
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
