const strings = {
  error: {
    cleared_license: "Licenta a fost stearsa",
    invalid_license: "Licenta invalida",
    license_max_devices_reached: "Numarul maxim de locuri pentru dispozitive a fost atins",
    license_readonly: "Licenta poate fi modificata doar din terminalul serverului.",
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
    socketioConnectError: "Socket.IO nu se poate conecta la server, puteti reincarca si incerca sa rezolvati eroarea de conexiune singur, clientul nu stie cum sa o rezolve.",
    socketioAuthRequired: "Autorizarea Socket.IO este necesara. Va rugam autentificati-va cu HTTP Basic Auth (utilizator/parola) si reincarcati.",
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
    license: {
      title: "Setare licenta",
      textContent: "Daca doriti sa utilizati functii platite, va rugam contactati support@corifeus.com pentru a solicita o licenta. Pretul este Pro 400 HUF/luna (\u20AC1/luna) sau 4.000 HUF/an (\u20AC10/an), si Enterprise 1.200 HUF/luna (\u20AC3/luna) sau 12.000 HUF/an (\u20AC30/an). Anual este 10x lunar. Cu TVA 27%, totalurile sunt Pro 500 HUF/luna (\u20AC1,27/luna) sau 5.100 HUF/an (\u20AC12,70/an), Enterprise 1.500 HUF/luna (\u20AC3,81/luna) sau 15.200 HUF/an (\u20AC38,10/an). Validarea licentei necesita acces la internet. Licenta implicita include 5 locuri. Daca aveti nevoie de mai multe locuri, contactati-ne la support@corifeus.com.",
      placeholder: "Cheie de licenta"
    }
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
    importKeys: "Importă chei",
    saveWithFormatJson: "Salvare cu formatare",
    formatJson: "Formatare Json",
    wrap: "Încadrare",
    unwrap: "Fără încadrare",
    downloadJson: "Descarcă JSON",
    pubsubMonitor: "Monitor PubSub",
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
    license: "Setare licenta",
    delete: "Stergere",
    remove: "Eliminare",
    sure: "Sigur",
    testConnection: "Testare conexiune",
    getKey: "Se incarca cheia Redis si datele asociate ...",
    jsonViewShow: "Afisare JSON",
    jsonViewEditor: "Editare JSON",
    quickConsole: "Consola rapida"
  },
  label: {
    id: {
      nodeId: 'ID nod',
      id: "ID conexiune",
      info: "Daca nu doriti sa schimbati proprietatile: sshPassword, sshPrivateKey, password, tlsCrt, tlsKey, tlsCa, va rugam introduceti ID-ul conexiunii in acele proprietati pentru a pastra valorile intacte. Daca doriti aceeasi logica pentru parola nodului, introduceti ID-ul nodului in parola nodului."
    },
    secureFeature: 'Daca vedeti o valoare care incepe cu P3X si arata la fel, este o functie de securitate. Pentru a schimba setarile, inlocuiti aceste setari cu gol sau altceva si vor fi salvate. Daca nu schimbati setarile, acestea vor ramane asa cum sunt pe server.',
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
    licenseInfo: "Licenta",
    licenseEditable: "Licenta editabila",
    licenseEditableYes: "Da",
    licenseEditableNo: "Nu",
    licenseTerminalOnly: "Licenta poate fi configurata doar din terminalul serverului.",
    licenseTierPolicyTitle: "Politica de niveluri",
    licenseTierPolicyText: "<h4>Free</h4>doar Redis UI de baza; fara tunelare SSH, fara mod conexiune Readonly, fara Cluster/Sentinel, fara Edit JSON/Upload binary/Download binary, fara ReJSON.<br/><strong>Pret: 0 HUF/luna (\u20AC0/luna).</strong><br/><br/><h4>Pro</h4>tunelare SSH, mod conexiune Readonly (inclusiv --readonly-connections/-r), Edit JSON, Upload binary, Download binary, ReJSON.<br/><strong>Pret de baza: 400 HUF/luna (\u20AC1/luna) sau 4.000 HUF/an (\u20AC10/an).</strong><br/><strong>Total cu TVA 27%: 500 HUF/luna (\u20AC1,27/luna) sau 5.100 HUF/an (\u20AC12,70/an).</strong><br/><br/><h4>Enterprise</h4>tunelare SSH, Cluster si Sentinel, plus Edit JSON, Upload binary, Download binary, ReJSON; --readonly-connections/-r functioneaza de asemenea.<br/><strong>Pret de baza: 1.200 HUF/luna (\u20AC3/luna) sau 12.000 HUF/an (\u20AC30/an).</strong><br/><strong>Total cu TVA 27%: 1.500 HUF/luna (\u20AC3,81/luna) sau 15.200 HUF/an (\u20AC38,10/an).</strong><br/><br/><h4>Regula anuala</h4>Pretul anual este de 10x pretul lunar.<br/><br/><h4>Locuri</h4>Licenta implicita include 5 locuri. Daca aveti nevoie de mai multe locuri, contactati-ne la <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><br/><h4>Perioada de proba Enterprise</h4>10 zile gratuit pentru oricine cu o adresa de email reala existenta (nu email de test).<br/><hr/><h4>Informatii de facturare prin e-mail</h4>Nume, Email de facturare, Cod tara, Cod postal, Oras, Adresa, Cod TVA (optional).<br/><br/><h4>Plata</h4>Plata prin PayPal este disponibila doar in HUF (forint); dupa trimiterea banilor la <a href='https://paypal.me/corifeus'>https://paypal.me/corifeus</a> va voi trimite o factura. Toate platile sunt nerambursabile.<br/><br/><h4>TVA</h4>TVA-ul este adaugat la pret (27% in Ungaria).<br/><hr/><h4>Contact</h4>Daca doriti sa ne salutati sau aveti o intrebare, contactati <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><hr/><h4>Limba</h4>Comunicarea privind factura si licenta se face in limba engleza. Moneda facturii este HUF.<br/><hr/><h4>Nota</h4>Validarea licentei necesita acces la internet.",
    licenseState: "Stare",
    licenseStateActive: "Activa",
    licenseStateInactive: "Inactiva",
    licenseStateNoLicense: "Fara licenta",
    licenseKeyMasked: "Cheie salvata",
    licenseTier: "Nivel",
    licenseValid: "Valida",
    licenseStatus: "Starea licentei",
    licenseReason: "Motiv",
    licenseCheckedAt: "Verificata la",
    licenseStartsAt: "Incepe la",
    licenseExpiresAt: "Expira la",
    licenseDaysLeft: "Zile ramase",
    licenseMaxDevices: "Numar maxim de dispozitive",
    licenseActiveDevices: "Dispozitive active",
    licenseActiveDevicesInfo: "Daca un dispozitiv nu mai este utilizat, locul sau este eliberat automat dupa 75 de minute.",
    licenseCustomerEmail: "Email client",
    licenseFeatures: "Functionalitati",
    licenseFeaturesEmpty: "Fara functionalitati suplimentare",
    licenseFeatureReadonlyMode: "Mod conexiune doar citire",
    licenseFeatureReadonlyConnectionsFlag: "Conexiuni doar citire (--readonly-connections/-r)",
    licenseFeatureSsh: "Tunelare SSH",
    licenseFeatureCluster: "Conexiuni Cluster",
    licenseFeatureSentinel: "Conexiuni Sentinel",
    licenseFeatureReJSON: "ReJSON (JSON data type)",
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
    proSshOnly: "SSH este disponibil in Pro sau Enterprise.",
    proReadonlyOnly: "Modul conexiune doar citire este disponibil in Pro sau Enterprise.",
    enterpriseClusterSentinelOnly: "Cluster si Sentinel sunt disponibile doar in Enterprise.",
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
    loading: "Se încarcă...",
    autoRefresh: "Auto",
    exportSearchHint: "Se exportă doar cheile care corespund căutării curente",
    importSearchHint: "Importul se aplică întregii baze de date, nu doar rezultatelor căutării",
    importNoKeys: "Nu s-au găsit chei în fișier",
  },
  status: {
    dataCopied: "Datele sunt in clipboard",
    licenseSaved: "Licenta salvata",
    exportDone: "Export finalizat",
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
    set: "Cheia a fost setata/adaugata"
  },
  code: {
    "delete-connection": "Aceasta conexiune a fost stearsa, asa ca sunteti deconectat de la aceasta instanta Redis.",
    "save-connection": "Aceasta conexiune a fost modificata, asa ca sunteti deconectat de la aceasta instanta Redis. Va puteti reconecta.",
    "readonly-connections": "Adaugarea/salvarea/stergerea conexiunilor este doar in citire!",
    "readonly-connection-mode": "Aceasta conexiune este in mod doar citire!",
    "list-out-of-bounds": "Indexul acestei liste este in afara limitelor",
    "donation-ware-feature": "Aceasta functie este disponibila in versiunea cu donatie.",
    "feature-pro-readonly-required": "Modul conexiune doar citire necesita licenta Pro sau Enterprise.",
    "feature-pro-ssh-required": "Tunelarea SSH necesita licenta Pro sau Enterprise.",
    "feature-enterprise-cluster-sentinel-required": "Cluster si Sentinel necesita licenta Enterprise.",
    "feature-pro-json-binary-required": "Edit JSON, Upload binary si Download binary necesita licenta Pro sau Enterprise.",
    "feature-pro-rejson-required": "ReJSON (JSON data type) requires Pro or Enterprise license.",
    "invalid-json-value": "The value is not valid JSON.",
    "http_auth_required": "Autorizare necesara: va rugam autentificati-va cu HTTP Basic Auth si reincarcati.",
    "auto-connection-failed": "Posibil, conexiunea a fost eliminata si conectarea automata a esuat din aceasta cauza.",
    invalid_console_command: "Aceasta comanda nu functioneaza prin GUI."
  },
  licenseReason: {
    LICENSE_VALID: "Licenta este valida",
    LICENSE_INVALID: "Licenta este invalida",
    LICENSE_MISSING: "Nicio cheie de licenta nu este setata",
    LICENSE_DISABLED: "Licenta este dezactivata in configuratia serverului",
    LICENSE_NOT_FOUND: "Licenta nu a fost gasita",
    LICENSE_EXPIRED: "Licenta a expirat",
    LICENSE_CLEARED: "Cheia de licenta a fost stearsa",
    LICENSE_MAX_DEVICES_REACHED: "Numarul maxim de locuri pentru dispozitive a fost atins",
    PRODUCT_MISMATCH: "Produsul licentei nu se potriveste"
  },
  licenseStatusValue: {
    active: "Activa",
    deleted: "Stearsa",
    all: "Toate",
    expired: "Expirata",
    missing: "Lipsa",
    inactive: "Inactiva"
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
      keyCount: () => {
        return `Numarul de chei: ${p3xr.state.keysRaw.length}`;
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
      noClients: "Fără clienți",
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
      }
    },
    treeControls: {
      settings: "Setari arbore",
      expandAll: "Extinde tot",
      collapseAll: "Restrange tot",
      search: {
        search: "Cautare in chei",
        clear: "Curata cautarea curenta",
        placeholderClient: "Cautare pe client",
        placeholderServer: "Cautare pe server",
        info: "Cautarea pe client inseamna potrivirea textului din campul de cautare. Cautarea pe server inseamna cautare cu modele in chei ca *{text-cautat}*. Pentru seturi mari de cautare, este mai bine sa folositi cautarea pe server. Pentru seturi mai mici, este mai bine sa folositi cautarea pe client." + ` Daca numarul de chei depaseste ${p3xr.settings.maxLightKeysCount}, puteti cauta doar pe server.`,
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
    loading: "Se încarcă...",
    years: "ani",
    months: "luni",
    days: "zile",
    year: "an",
    month: "luna",
    day: "zi"
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
