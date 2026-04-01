const strings = {
  error: {
    cleared_license: "Licenc törölve",
    invalid_license: "Érvénytelen licenc",
    license_max_devices_reached: "Maximális eszközhelyek elérve",
    license_readonly: "A licenc csak a szerver terminálból módosítható.",
    server_error: "Szerverhiba, kérjük próbálja újra"
  },
  title: {
    donate: "Adományozás",
    jsonRecursive: "Összes ág kibontása",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "Válasszon egy Redis kapcsolatot a bal alsó menüből.",
    statistics: "Statisztikák",
    error: "Hiba",
    connectingRedis: "Csatlakozás a Redis-hez ...",
    socketioConnectError: "Socket.IO Hiba",
    db: "DB",
    server: "Szerver",
    clients: "Kliensek",
    memory: "Memória",
    persistence: "Perzisztencia",
    stats: "Statisztikák",
    replication: "Replikáció",
    cpu: "CPU",
    cluster: "Klaszter",
    modules: "Modulok",
    errorstats: "Hiba statisztika",
    commandstats: "Parancs statisztika",
    latencystats: "Késleltetés statisztika",
    keysizes: "Kulcsméretek",
    threads: "Szálak",
  },
  confirm: {
    dropIndex: "Biztosan törli ezt az indexet?",
    uploadBuffer: "Biztosan feltölti ezt a bináris adatot?",
    uploadBufferDone: "A bináris adat feltöltve",
    uploadBufferDoneAndSave: "A bináris adat feltöltve és mentve a szerveren",
    title: "Megerősítés",
    alert: "Figyelmeztetés",
    info: "Információ",
    deleteListItem: "Biztosan törli ezt a listaelemet?",
    deleteHashKey: "Biztosan törli ezt a hash kulcs elemet?",
    deleteStreamTimestamp: "Biztosan törli ezt a stream időbélyeget?",
    deleteSetMember: "Biztosan törli ezt a halmaz tagot?",
    deleteZSetMember: "Biztosan törli ezt a rendezett halmaz tagot?",
    deleteConnection: "Megerősítés",
    deleteConnectionText: "Biztosan törli ezt a Redis kapcsolatot?",
    deleteNode: "Biztosan törli ezt a Redis csomópontot?",
    deleteAllKeys: opts => {
      return `Törli ezt a fát és az összes kulcsát (${opts.key})?`;
    },
    socketioConnectError: "A Socket.IO nem tud csatlakozni a szerverhez. Újratöltéssel megpróbálhatja megoldani a kapcsolódási hibát, a kliens nem tudja önállóan megoldani.",
    socketioAuthRequired: "Socket.IO hitelesítés szükséges. Kérjük, hitelesítsen HTTP Basic Auth (felhasználónév/jelszó) segítségével, majd töltse újra.",
    deleteKey: "Biztosan törli ezt a kulcsot?",
    rename: {
      title: "Biztosan átnevezi ezt a kulcsot?",
      textContent: "Ez a művelet véglegesen átnevezi a kulcsot.",
      placeholder: "A Redis kulcs (kötelező)"
    },
    ttl: {
      title: "Biztosan módosítja ennek a kulcsnak a TTL értékét?",
      textContent: "A TTL módosítása frissíti a kulcs élettartamát. Hagyja üresen, ha a kulcsot örökre meg akarja tartani.",
      placeholder: "A Redis kulcs TTL-je (egész szám vagy üres)",
      placeholderPlaceholder: "Az üres azt jelenti, hogy örökre megmarad; egyébként adjon meg egy egész számot.",
      convertTextToTime: "Szöveg átalakítása idővé",
      convertTextToTimePlaceholder: "Pl. 1d = 86400"
    },
    license: {
      title: "Licenc beállítása",
      textContent: "Ha fizetős funkciókat szeretne használni, kérjük lépjen kapcsolatba a support@corifeus.com címmel licenc igényléséhez. Az árak: Pro 400 HUF/hó (€1/hó) vagy 4,000 HUF/év (€10/év), Enterprise 1,200 HUF/hó (€3/hó) vagy 12,000 HUF/év (€30/év). Az éves ár a havi 10-szerese. 27% ÁFÁ-val a végösszegek: Pro 500 HUF/hó (€1.27/hó) vagy 5,100 HUF/év (€12.70/év), Enterprise 1,500 HUF/hó (€3.81/hó) vagy 15,200 HUF/év (€38.10/év). A licenc érvényesítéshez internetkapcsolat szükséges. Az alapértelmezett licenc 5 helyet tartalmaz. Ha több helyre van szüksége, lépjen kapcsolatba velünk a support@corifeus.com címen.",
      placeholder: "Licenckulcs"
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
    copy: "Másolás",
    downloadBuffer: "Bináris letöltése",
    setBuffer: "Bináris feltöltése",
    exportKeys: "Kulcsok exportálása",
    exportAllKeys: (opts) => `Mind a ${opts.count} kulcs exportálása`,
    exportSearchResults: (opts) => `${opts.count} eredmény exportálása`,
    importKeys: "Kulcsok importálása",
    saveWithFormatJson: "Mentés formázással",
    formatJson: "JSON formázása",
    wrap: "Tördelés",
    unwrap: "Nem tördelés",
    downloadJson: "JSON letöltése",
    pubsubMonitor: "PubSub Monitor",
    language: "Nyelv / Language",
    ok: "OK",
    addKey: "Hozzáadás ehhez a kulcshoz",
    addKeyRoot: "Gyökér kulcs hozzáadása",
    reloadKey: "Kulcs újratöltése",
    reload: "Újratöltés",
    close: "Bezárás",
    commands: "Parancsok",
    view: "Nézet",
    statistics: "Statisztikák",
    refresh: "Frissítés",
    pause: "Szünet",
    resume: "Folytatás",
    clear: "Törlés",
    rename: "Átnevezés",
    main: "Adatbázis",
    cancel: "Mégse",
    theme: "Téma",
    github: "GitHub",
    githubRepo: "Tároló",
    githubRelease: "Kiadások",
    githubChangelog: "Változásnapló",
    info: "Info",
    settings: "Beállítások",
    connect: "Csatlakozás",
    disconnect: "Leválasztás",
    overview: "Áttekintés",
    console: "Konzol",
    noConnections: "Nincs kapcsolat, adjon hozzá egyet a beállítások menüben.",
    noConnectionsInSettings: "Nincs kapcsolat, hozzáadhat egy ÚJ KAPCSOLATOT fent.",
    connectionAdd: "Új kapcsolat",
    addGroup: "Csoport hozzáadása",
    extend: "Kibontás",
    collapse: "Összecsukás",
    add: "Hozzáadás",
    edit: "Szerkesztés",
    save: "Mentés",
    ttl: "TTL beállítása",
    license: "Licenc beállítása",
    delete: "Törlés",
    remove: "Eltávolítás",
    sure: "Biztos",
    testConnection: "Kapcsolat tesztelése",
    getKey: "Redis kulcs és kapcsolódó adatok betöltése ...",
    jsonViewShow: "JSON megjelenítése",
    jsonViewEditor: "JSON szerkesztése",
    quickConsole: "Gyors Konzol"
  },
  label: {
    id: {
      nodeId: 'Csomópont ID',
      id: "Kapcsolat ID",
      info: "Ha nem szeretné módosítani a következő tulajdonságokat: sshPassword, sshPrivateKey, password, tlsCrt, tlsKey, tlsCa, kérjük adja meg a kapcsolat azonosítóját ezekben a tulajdonságokban az értékek megtartásához. Ha ugyanezt a logikát szeretné a csomópont jelszónál, akkor adja meg a csomópont azonosítóját a csomópont jelszóban."
    },
    secureFeature: 'Ha olyan értéket lát, ami P3X-szel kezdődik és hasonlónak tűnik, az egy biztonsági funkció. A beállítások módosításához cserélje ki ezeket üresre vagy valami másra, és mentésre kerülnek. Ha nem módosítja a beállításokat, azok a szerveren maradnak.',
    ssh: {
      on: 'SSH be',
      off: 'SSH ki',
      sshHost: 'SSH hoszt',
      sshPort: 'SSH port',
      sshUsername: 'SSH felhasználónév',
      sshPassword: 'SSH jelszó',
      sshPrivateKey: 'SSH privát kulcs'
    },
    isBuffer: opts => `[object ArrayBuffer] azt jelenti, hogy az érték bináris adat vagy az érték nagyobb, mint ${opts.maxValueAsBuffer}`,
    streamValue: `Stream mező és érték egysoros. Pl.: field1 value1 "field 2" "value 2"`,
    streamTimestampId: `'*' automatikusan generált, vagy a specifikáció szerint <ezredmásodpercIdő>-<sorszám>`,
    unableToLoadKey: ({
      key
    }) => {
      return `Nem sikerült betölteni ezt a kulcsot: ${key}. Lehetséges, hogy a kulcs törölve lett. A pontos hiba a konzolban található.`;
    },
    bigJson: "Ez a JSON objektum nagyobb mint 10 kb, ezért győződjön meg róla, hogy tudja mit csinál, mert egyes funkciók lassan renderelhetnek.",
    addNode: "Csomópont hozzáadása",
    validateJson: "JSON érvényesítése",
    reducedFunction: `Korlátozott funkcionalitás`,
    tooManyKeys: opts => {
      return `A teljes maximális funkciókhoz engedélyezett kulcsok összesen ${opts.maxLightKeysCount} darab. Ez az adatbázis meghaladja az engedélyezett kulcsok számát: összesen ${opts.count}. A kulcsrendezés és a további fa információk le vannak tiltva. A keresés csak a szerveren történik a kliens keresés helyett.`;
    },
    redisCommandNotFound: "Nem található egyező Redis parancs ...",
    treeKeyStore: `A rendezés (természetes összehasonlítás) a kliensen, azaz a böngészőben történik, ami azt jelenti, hogy nagy adathalmazoknál, például 10k kulcs felett, büntetéssel jár, és egy kis időt adhat az oldal rendereléséhez. A Redis-ben nincs kulcsrendezés, csak így.`,
    socketIoTimeout: options => {
      return `A Socket.IO időtúllépés történt ennél a kérésnél (max ${options.timeout / 1000} másodperc) ...`;
    },
    resizerInfo: options => {
      return `A bal vagy jobb panel minimális szélessége ${options.width}px`;
    },
    jsonViewNotParsable: "Ez az érték nem JSON-ként értelmezhető  ",
    ttlTitle: "TTL beállítása másodpercekben",
    passwordSecure: "A jelszó lehet üres, de mégis karaktereket fog mutatni, ez egy biztonsági funkció.",
    tlsWithoutCert: "TLS engedélyezése további tanúsítvány nélkül",
    tlsRejectUnauthorized: "Nem hitelesített tanúsítvány elutasítása",
    tlsSecure: "Ha olyan TLS konfigurációt lát, ami P3X-szel kezdődik, vagy az összes TLS beállítás hasonlónak tűnik, az egy biztonsági funkció. A beállítások módosításához cserélje ki üresre vagy valami másra, és mentésre kerülnek. Ha nem módosítja a TLS beállításokat, azok a szerveren maradnak.",
    treeSeparatorEmpty: "Ha a fa elválasztó üres, a fa nem tartalmaz beágyazott csomópontokat, csak egy egyszerű listát",
    treeSeparatorEmptyNote: "Nincs beágyazott csomópont, csak egyszerű lista",
    welcomeConsole: "Üdvözöljük a Redis Konzolban",
    welcomeConsoleInfo: "Kurzor FEL vagy LE előzménynavigáció engedélyezve",
    redisListIndexInfo: "Üres a hozzáfűzéshez, -1 az elejére beszúráshoz, vagy mentse a mutatott pozícióba.",
    console: "Konzol",
    connectiondAdd: "Kapcsolat hozzáadása",
    connectiondEdit: "Kapcsolat szerkesztése",
    connectiondView: "Kapcsolat megtekintése",
    connections: "Kapcsolatok",
    licenseInfo: "Licenc",
    licenseEditable: "Licenc szerkeszthető",
    licenseEditableYes: "Igen",
    licenseEditableNo: "Nem",
    licenseTerminalOnly: "A licenc csak a szerver terminálból konfigurálható.",
    licenseTierPolicyTitle: "Szintszabályzat",
    licenseTierPolicyText: "<h4>Ingyenes</h4>Csak alap Redis UI; nincs SSH alagút, nincs Csak olvasható kapcsolat mód, nincs Klaszter/Sentinel, nincs JSON szerkesztés/Bináris feltöltés/Bináris letöltés, nincs ReJSON.<br/><strong>Ár: 0 HUF/hó (€0/hó).</strong><br/><br/><h4>Pro</h4>SSH alagút, Csak olvasható kapcsolat mód (beleértve --readonly-connections/-r), JSON szerkesztés, Bináris feltöltés, Bináris letöltés, ReJSON.<br/><strong>Alapár: 400 HUF/hó (€1/hó) vagy 4,000 HUF/év (€10/év).</strong><br/><strong>Összesen 27% ÁFÁ-val: 500 HUF/hó (€1.27/hó) vagy 5,100 HUF/év (€12.70/év).</strong><br/><br/><h4>Enterprise</h4>SSH alagút, Klaszter és Sentinel, valamint JSON szerkesztés, Bináris feltöltés, Bináris letöltés, ReJSON; --readonly-connections/-r szintén működik.<br/><strong>Alapár: 1,200 HUF/hó (€3/hó) vagy 12,000 HUF/év (€30/év).</strong><br/><strong>Összesen 27% ÁFÁ-val: 1,500 HUF/hó (€3.81/hó) vagy 15,200 HUF/év (€38.10/év).</strong><br/><br/><h4>Éves szabály</h4>Az éves ár a havi ár 10-szerese.<br/><br/><h4>Helyek</h4>Az alapértelmezett licenc 5 helyet tartalmaz. Ha több helyre van szüksége, lépjen kapcsolatba velünk a <a href='mailto:support@corifeus.com'>support@corifeus.com</a> címen.<br/><br/><h4>Enterprise próba</h4>10 nap ingyenes próba bármely valós e-mail címmel (nem teszt e-mail).<br/><hr/><h4>Számlázási adatok e-mailben</h4>Név, Számlázási e-mail, Országkód, Irányítószám, Város, Cím, Adószám (opcionális).<br/><br/><h4>Fizetés</h4>PayPal fizetés csak HUF-ban (forint) érhető el; a pénz elküldése után a <a href='https://paypal.me/corifeus'>https://paypal.me/corifeus</a> címen küldök egy számlát. Minden fizetés visszatéríthetetlen.<br/><br/><h4>ÁFA</h4>Az ÁFA hozzáadódik az árhoz (27% Magyarországon).<br/><hr/><h4>Kapcsolat</h4>Ha üdvözölni szeretne vagy kérdése van, írjon a <a href='mailto:support@corifeus.com'>support@corifeus.com</a> címre.<br/><hr/><h4>Nyelv</h4>A számla és a licenc e-mail kommunikáció angol nyelven történik. A számla pénzneme HUF.<br/><hr/><h4>Megjegyzés</h4>A licenc érvényesítéshez internetkapcsolat szükséges.",
    licenseState: "Állapot",
    licenseStateActive: "Aktív",
    licenseStateInactive: "Inaktív",
    licenseStateNoLicense: "Nincs licenc",
    licenseKeyMasked: "Mentett kulcs",
    licenseTier: "Szint",
    licenseValid: "Érvényes",
    licenseStatus: "Licenc állapot",
    licenseReason: "Ok",
    licenseCheckedAt: "Ellenőrizve",
    licenseStartsAt: "Kezdődik",
    licenseExpiresAt: "Lejár",
    licenseDaysLeft: "Hátralévő napok",
    licenseMaxDevices: "Max eszközök",
    licenseActiveDevices: "Aktív eszközök",
    licenseActiveDevicesInfo: "Ha egy eszköz már nincs használatban, a helye automatikusan felszabadul 75 perc után.",
    licenseCustomerEmail: "Ügyfél e-mail",
    licenseFeatures: "Funkciók",
    licenseFeaturesEmpty: "Nincs extra funkció",
    licenseFeatureReadonlyMode: "Csak olvasható kapcsolat mód",
    licenseFeatureReadonlyConnectionsFlag: "Csak olvasható kapcsolatok (--readonly-connections/-r)",
    licenseFeatureSsh: "SSH alagút",
    licenseFeatureCluster: "Klaszter kapcsolatok",
    licenseFeatureSentinel: "Sentinel kapcsolatok",
    licenseFeatureReJSON: "ReJSON (JSON data type)",
    keysSort: {
      on: "Kulcsrendezés be",
      off: "Kulcsrendezés ki"
    },
    cluster: {
      on: "Klaszter be",
      off: "Klaszter ki"
    },
    sentinel: {
      on: "Sentinel be",
      off: "Sentinel ki",
      name: "Sentinel név"
    },
    readonly: {
      on: "Csak olvasható be",
      off: "Csak olvasható ki"
    },
    proSshOnly: "Az SSH a Pro vagy Enterprise verzióban érhető el.",
    proReadonlyOnly: "A csak olvasható kapcsolat mód a Pro vagy Enterprise verzióban érhető el.",
    enterpriseClusterSentinelOnly: "A Klaszter és Sentinel csak az Enterprise verzióban érhető el.",
    theme: {
      light: "Világos",
      dark: "Sötét enterprise",
      darkNeu: "Sötét",
      darkoBluo: "Darko bluo",
      enterprise: "Enterprise",
      redis: "Redis",
      matrix: "Matrix"
    },
    connected: opts => {
      return `Csatlakozva: ${opts.name}`;
    },
    tree: "Fa",
    askAuth: "Hitelesítés kérése",
    keyboardShortcuts: "Billentyűparancsok",
    about: "Névjegy",
    supportedLanguages: "Támogatott nyelvek",
    version: "Verzió",
    redisVersion: "Redis verzió",
    modules: "Modulok",
    shortcutRefresh: "Frissítés",
    shortcutSearch: "Keresés fókuszálása",
    shortcutNewKey: "Új kulcs",
    shortcutDisconnect: "Leválasztás",
    themeAuto: "Automatikus (rendszer)",
    shortcutCommandPalette: "Parancspaletta",
    commandPalette: "Parancspaletta",
    noResults: "Nincs találat",
    redisCommandsReference: "Redis Parancsok",
    ungrouped: "Csoportosítatlan",
    grouped: "Csoportosított",
    connectFirst: "Először csatlakozzon egy Redis szerverhez",
    searchLanguage: "Nyelv keresése...",
    exportProgress: "Kulcsok exportálása...",
    importProgress: "Kulcsok importálása...",
    importPreview: "Előnézet",
    importOverwrite: "Felülírás",
    importSkip: "Kihagyás",
    importConflict: "Ha a kulcs már létezik:",
    noKeysToExport: "Nincs exportálandó kulcs",
    time: "Idő",
    loading: "Betöltés...",
    autoRefresh: "Auto",
    exportSearchHint: "Csak az aktuális keresésnek megfelelő kulcsok exportálása",
    importSearchHint: "Az importálás a teljes adatbázisra vonatkozik, nem csak a keresési eredményekre",
    importNoKeys: "Nem található kulcs a fájlban",
  },
  status: {
    dataCopied: "Az adat a vágólapon van",
    licenseSaved: "Licenc mentve",
    exportDone: "Exportálás kész",
    indexCreated: "Index létrehozva",
    indexDropped: "Index törölve",
    importDone: (opts) => `Importálás kész: ${opts.created} létrehozva, ${opts.skipped} kihagyva, ${opts.errors} hiba`,
    nodeRemoved: "Csomópont eltávolítva",
    keyIsNotExisting: "Ez a kulcs törölve vagy lejárt lehetett.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "Nincs kulcs";
      } else if (opts.keyCount === 1) {
        return "1 kulcs";
      } else {
        return `${opts.keyCount} kulcs`;
      }
    },
    treeExpandAll: "Összes fa ág kibontása. Ez a művelet költséges lehet és időbe telhet ...",
    noRedisKeys: "Nincsenek kulcsok ebben az adatbázisban.",
    redisConnected: "Redis sikeresen csatlakoztatva",
    reloadingDataInfo: "Redis adatinformáció újratöltése",
    added: "Hozzáadva",
    saved: "Frissítve",
    cancelled: "Megszakítva",
    deleted: "Törölve",
    savedRedis: "Redis adat mentve",
    redisDisconnected: opts => {
      return `A jelenlegi kapcsolatban hiba történt: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `Az adatbázis index beállítva: ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `A fa kulcs törölve (${opts.key}).`;
    },
    deletedKey: opts => {
      return `A kulcs törölve (${opts.key}).`;
    },
    renamedKey: "Ez a kulcs átnevezve",
    ttlChanged: "Ennek a kulcsnak a TTL értéke módosult",
    notInteger: "Ez a bemenet nem egész szám",
    persisted: "Ez a kulcs örökre megmarad",
    set: "A kulcs beállítva/hozzáadva"
  },
  code: {
    "delete-connection": "Ez a kapcsolat törölve lett, ezért leválasztásra került erről a Redis példányról.",
    "save-connection": "Ez a kapcsolat módosult, ezért leválasztásra került erről a Redis példányról. Újra csatlakozhat.",
    "readonly-connections": "A kapcsolatok hozzáadása/mentése/törlése csak olvasható!",
    "readonly-connection-mode": "Ez a kapcsolat csak olvasható módban van!",
    "list-out-of-bounds": "Ez a listaindex határon kívül van",
    "donation-ware-feature": "Ez a funkció az adományos verzióban érhető el.",
    "feature-pro-readonly-required": "A csak olvasható kapcsolat mód Pro vagy Enterprise licencet igényel.",
    "feature-pro-ssh-required": "Az SSH alagút Pro vagy Enterprise licencet igényel.",
    "feature-enterprise-cluster-sentinel-required": "A Klaszter és Sentinel Enterprise licencet igényel.",
    "feature-pro-json-binary-required": "A JSON szerkesztés, Bináris feltöltés és Bináris letöltés Pro vagy Enterprise licencet igényel.",
    "feature-pro-rejson-required": "ReJSON (JSON data type) requires Pro or Enterprise license.",
    "invalid-json-value": "The value is not valid JSON.",
    "http_auth_required": "Hitelesítés szükséges: kérjük hitelesítsen HTTP Basic Auth segítségével és töltse újra.",
    "auto-connection-failed": "Lehetséges, hogy a kapcsolat eltávolításra került és az automatikus csatlakozás emiatt sikertelen volt.",
    invalid_console_command: "Ez a parancs nem működik a GUI-n keresztül."
  },
  licenseReason: {
    LICENSE_VALID: "A licenc érvényes",
    LICENSE_INVALID: "A licenc érvénytelen",
    LICENSE_MISSING: "Nincs licenckulcs beállítva",
    LICENSE_DISABLED: "A licenc le van tiltva a szerver konfigurációban",
    LICENSE_NOT_FOUND: "A licenc nem található",
    LICENSE_EXPIRED: "A licenc lejárt",
    LICENSE_CLEARED: "A licenckulcs törölve lett",
    LICENSE_MAX_DEVICES_REACHED: "Maximális eszközhelyek elérve",
    PRODUCT_MISMATCH: "A licenc termék nem egyezik"
  },
  licenseStatusValue: {
    active: "Aktív",
    deleted: "Törölt",
    all: "Összes",
    expired: "Lejárt",
    missing: "Hiányzó",
    inactive: "Inaktív"
  },
  form: {
    error: {
      required: "Kötelező",
      port: "A port 1-65535 között van",
      invalid: "Az űrlap érvénytelen"
    },
    connection: {
      label: {
        name: "Név",
        group: "Csoport",
        host: "Hosznév",
        port: "Port",
        password: "Jelszó",
        username: "Felhasználónév"
      }
    },
    treeSettings: {
      maxValueDisplay: "Maximális érték megjelenítési karakterhossz",
      maxValueDisplayInfo: "Ha 0, a teljes értéket mutatja. Ha nagyobb mint 0, erre a hosszra vágja. Ha -1: karakterláncoknál elrejti az értéket szerkesztésig; más típusoknál teljes tartalmat mutat.",
      maxKeys: "Maximális kulcsszám",
      maxKeysInfo: "Hogy a GUI ne fagyjon le, korlátozzuk a maximális kulcsszámot.",
      keyCount: () => {
        return `Kulcsok száma: ${p3xr.state.keysRaw.length}`;
      },
      label: {
        animation: "Animáció használata",
        noAnimation: "Nincs animáció",
        jsonFormatTwoSpace: "JSON formázása 2 szóközzel",
        jsonFormatFourSpace: "JSON formázása 4 szóközzel",
        formName: "Redis beállítások",
        searchModeClient: "Kliens keresési mód",
        searchModeServer: "Szerver keresési mód",
        searchModeStartsWith: "Keresés kezdődik-e móddal",
        searchModeIncludes: "Keresés tartalmazza móddal"
      },
      field: {
        treeSeparator: "Fa elválasztó",
        treeSeparatorSelector: "Fa elválasztó választó",
        page: "Fa lapozási szám",
        keyPageCount: "Kulcs lapozási szám",
        keysSort: "Kulcsok rendezése",
        searchMode: "Keresési mód",
        searchModeStartsWith: "Keresés kezdődik-e / tartalmazza"
      },
      error: {
        keyPageCount: "A kulcs lapozási szám 5 és 100 közötti egész szám kell legyen",
        page: "A lapozási szám 10 és 5000 közötti egész szám kell legyen",
        maxValueDisplay: "A maximális megjelenítési érték -1 és 32768 közötti egész szám kell legyen",
        maxKeys: "A maximális kulcsszám 100 és 100000 közötti egész szám kell legyen"
      }
    },
    key: {
      label: {
        formName: {
          add: "Új Redis kulcs hozzáadása",
          edit: "Redis kulcs szerkesztése",
          append: "Hozzáadás meglévő Redis kulcshoz"
        }
      },
      field: {
        streamTimestamp: "Időbélyeg",
        key: "Kulcs",
        type: "Típus",
        index: "Index",
        hashKey: "Hash kulcs",
        score: "Pontszám",
        value: "Érték"
      },
      error: {
        streamTimestamp: "Az időbélyeg kötelező, Redis formátumban vagy *-ként",
        key: "A kulcs legalább egy karakter",
        hashKey: "A hash tábla kulcs legalább egy karakter",
        score: "A rendezett halmaz pontszám kötelező",
        value: "Az érték kötelező"
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
      title: "Keresés",
      index: "Index",
      query: "Lekérdezés",
      results: "Eredmények",
      noIndex: "Nem található index",
      createIndex: "Index létrehozása",
      dropIndex: "Index törlése",
      indexInfo: "Index info",
      indexName: "Index neve",
      prefix: "Kulcs előtag (opcionális)",
      fieldName: "Mező neve",
    },
    monitor: {
      title: "Figyelés",
      memory: "Memória",
      opsPerSec: "Művelet/mp",
      clients: "Kliensek",
      blocked: "Blokkolt",
      hitsMisses: "Találati arány",
      networkIo: "Hálózat I/O",
      slowLog: "Lassú napló",
      totalCommands: "Összesen",
      expired: "Lejárt",
      evicted: "Kiszorított",
      clientList: "Klienslista",
      topKeys: "Legnagyobb kulcsok memória szerint",
      killClient: "Kliens leállítása",
      clientKilled: "Kliens leállítva",
      confirmKillClient: "Biztosan le szeretné állítani ezt a klienst?",
      noKeys: "Nincsenek kulcsok",
      noClients: "Nincsenek kliensek",
    },
    overview: {
      noConnected: "Nincs Redis kapcsolat.",
      overviewClients: "Csatlakozott kliensek száma szerinti lista",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "1 kliens";
        }
        return `${opt.length} kliens`;
      }
    },
    key: {
      label: {
        key: "Kulcs",
        encoding: "Kódolás",
        length: "Méret",
        ttl: "TTL",
        ttlTitle: "Élettartam",
        type: "Típus",
        ttlNotExpire: "nem jár le",
        lengthString: "bájt",
        lengthItem: "elem",
        actions: "Műveletek"
      },
      list: {
        table: {
          index: "Index",
          value: "Érték"
        }
      },
      hash: {
        table: {
          hashkey: "Hash kulcs",
          value: "Érték"
        }
      },
      set: {
        table: {
          value: "Tag"
        }
      },
      zset: {
        table: {
          value: "Tag",
          score: "Pontszám"
        }
      },
      stream: {
        table: {
          timestamp: "Időbélyeg ID",
          field: "Mező",
          value: "Érték"
        }
      }
    },
    treeControls: {
      settings: "Fa beállítások",
      expandAll: "Összes kibontása",
      collapseAll: "Összes összecsukása",
      search: {
        search: "Keresés a kulcsok között",
        clear: "Jelenlegi keresés törlése",
        placeholderClient: "Keresés kliens oldalon",
        placeholderServer: "Keresés szerver oldalon",
        info: "A kliens oldali keresés azt jelenti, hogy a keresőmezőben lévő szöveget egyezteti. A szerver oldali keresés azt jelenti, hogy a kulcsmintákban keres, mint *{keresett-szöveg}*. Nagy adathalmazoknál jobb a szerver oldali keresés. Kisebb halmazoknál jobb a kliens oldali keresés." + ` Ha a kulcsok száma meghaladja a ${p3xr.settings.maxLightKeysCount} értéket, csak szerver oldalon kereshet.`,
        largeSetInfo: "Nagy adathalmaz esetén a kliens oldali keresés le van tiltva, jelenleg csak szerver oldali keresés lehetséges.",
        infoDetails: "A keresés működésének megismeréséhez tekintse meg a beállításokat"
      },
      pager: {
        next: "Következő",
        prev: "Előző",
        first: "Első",
        last: "Utolsó"
      }
    }
  },
  time: {
    years: "év",
    months: "hónap",
    days: "nap",
    year: "év",
    month: "hónap",
    day: "nap"
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
