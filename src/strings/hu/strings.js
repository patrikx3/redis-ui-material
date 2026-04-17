const strings = {
  error: {
    server_error: "Szerverhiba, kérjük próbálja újra",
    aiPromptTooLong: "Az AI kérés túl hosszú (max. 4096 karakter)",
  },
  title: {
    donate: "Adományozás",
    donateTitle: "Támogasd a P3X Redis UI-t",
    donateDescription: "A P3X Redis UI egy ingyenes, nyílt forráskódú projekt. Az alkalmazás, az AI funkciók, a Docker képfájlok, a szerverek és az infrastruktúra karbantartási költségei a fejlesztő saját zsebéből jönnek. Ha hasznosnak találod ezt az eszközt, kérjük, fontold meg a folyamatos fejlesztés támogatását adománnyal. Minden hozzájárulás segít a projekt életben tartásában és növekedésében. Köszönjük!",
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
    threads: "Szálak"
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
    deleteSearchKeys: opts => {
      return `Biztosan törölni szeretné az összes "${opts.pattern}" mintának megfelelő kulcsot? ${opts.count} kulcs található.`;
    },
    socketioConnectError: "A Socket.IO nem tud csatlakozni a szerverhez. Újratöltéssel megpróbálhatja megoldani a kapcsolódási hibát, a kliens nem tudja önállóan megoldani.",
    socketioAuthRequired: "Socket.IO hitelesítés szükséges. Kérjük, hitelesítsen HTTP Basic Auth (felhasználónév/jelszó) segítségével, majd töltse újra.",
    invalidCredentials: "Érvénytelen felhasználónév vagy jelszó.",
    delete: "Törlés?",
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
    deleteAllKeysMenu: (opts) => `Összes törlése ${opts.count}`,
    importKeys: "Kulcsok importálása",
    deleteSearchKeys: (opts) => `${opts.count} egyező kulcs törlése`,
    saveWithFormatJson: "Mentés formázással",
    formatJson: "JSON formázása",
    wrap: "Tördelés",
    unwrap: "Nem tördelés",
    downloadJson: "JSON letöltése",
    pubsubMonitor: "PubSub",
    pulse: "Pulse",
    profiler: "Profiler",
    memoryAnalysis: "Analysis",
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
    logout: "Kijelentkezés",
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
    fieldTtl: "Mező TTL",
    digest: "Kivonat",
    delete: "Törlés",
    remove: "Eltávolítás",
    areYouSure: "Biztos vagy benne?",
    sure: "Biztos",
    testConnection: "Kapcsolat tesztelése",
    getKey: "Redis kulcs és kapcsolódó adatok betöltése ...",
    jsonViewShow: "JSON megjelenítése",
    jsonViewEditor: "JSON szerkesztése",
    quickConsole: "Gyors Konzol",
    moveUp: "Mozgatás felfelé",
    moveDown: "Mozgatás lefelé",
  },
  diff: {
    reviewChanges: "M\u00f3dos\u00edt\u00e1sok \u00e1ttekint\u00e9se",
    inline: "Soron bel\u00fcl",
    sideBySide: "Egym\u00e1s mellett",
    additions: "hozz\u00e1ad\u00e1sok",
    deletions: "t\u00f6rl\u00e9sek",
    unchangedLines: "v\u00e1ltozatlan sorok",
    noChanges: "Nem tal\u00e1lhat\u00f3k v\u00e1ltoz\u00e1sok",
    before: "El\u0151tte",
    after: "Ut\u00e1na",
  },
  label: {
    id: {
      nodeId: 'Csomópont ID',
      id: "Kapcsolat ID",
      info: "Ha nem szeretné módosítani a következő tulajdonságokat: sshPassword, sshPrivateKey, password, tlsCrt, tlsKey, tlsCa, kérjük adja meg a kapcsolat azonosítóját ezekben a tulajdonságokban az értékek megtartásához. Ha ugyanezt a logikát szeretné a csomópont jelszónál, akkor adja meg a csomópont azonosítóját a csomópont jelszóban."
    },
    secureFeature: 'Ha olyan értéket lát, ami P3X-szel kezdődik és hasonlónak tűnik, az egy biztonsági funkció. A beállítások módosításához cserélje ki ezeket üresre vagy valami másra, és mentésre kerülnek. Ha nem módosítja a beállításokat, azok a szerveren maradnak.',
    aiTranslating: "Fordítás...",
    aiSettings: "AI Beállítások",
    aiGroqApiKey: "Groq API Kulcs",
    aiGroqApiKeyInfo: "Opcionális. Saját Groq API kulcs a jobb teljesítményért. Ingyenes kulcs beszerzése:",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "AI beállítások mentve",
    aiGroqApiKeyInvalid: "Érvénytelen Groq API kulcs",
    aiGroqApiKeyNotSet: "Nincs beállítva (szerver alapértelmezett)",
    aiEnabled: "AI engedélyezve",
    aiEnabledYes: "Igen",
    aiEnabledNo: "Nem",
    aiRouteViaNetwork: "Útvonal a network.corifeus.com-on keresztül",
    aiRoutingDirect: "A lekérdezések közvetlenül a Groq-hoz mennek a saját API kulcsoddal, megkerülve a network.corifeus.com-ot.",
    aiRoutingNetwork: "Az AI lekérdezések a network.corifeus.com-on keresztül kerülnek továbbításra. Ha van saját ingyenes Groq API kulcsod, kikapcsolhatod ezt a kapcsolót, hogy közvetlenül a Groq-ot használd a network.corifeus.com nélkül.",
    aiMaxTokens: "AI maximális tokenek",
    aiMaxTokensInfo: "Az AI válaszokhoz használt tokenek maximális száma. A nagyobb értékek hosszabb válaszokat tesznek lehetővé, de több API-kreditet használhatnak.",
    consoleDrawer: {
      toggleTooltip: "Váltó konzol",
      clearTooltip: "Visszagörgetés törlése",
      closeTooltip: "Zárja be a konzolt",
      aiSettingsTooltip: "AI beállítások",
      modeRedis: "REDIS",
      modeAi: "AI",
      connectionChipNoDb: opts => `${opts.name}`,
      connectionChipWithDb: opts => `${opts.name} · db ${opts.db}`,
      pageChip: opts => `oldal: ${opts.page}`,
      connectingTo: opts => `Csatlakozás a következőhöz: ${opts.name}…`,
      connectedTo: opts => `Csatlakozva a következőhöz: ${opts.name} (Redis ${opts.version} ${opts.mode}, ${opts.modules} modul betöltve)`,
      connectedToNoInfo: opts => `Csatlakozva a következőhöz: ${opts.name}`,
      disconnectedFrom: opts => `Nincs kapcsolat a következővel: ${opts.name}`,
      readyIndicator: "Kész."
    },
    cheatsheet: {
      title: "AI Cheatsheet – Mit kérdezhetek?",
      subtitle: "Kattintson bármelyik promptra, hogy beillessze azt a konzolba. Ezután nyomja meg az Enter billentyűt.",
      searchPlaceholder: "Prompts szűrése…",
      openOfficialDocs: "Redis Parancsok ↗",
      openOfficialDocsTooltip: "Nyissa meg a hivatalos Redis parancsreferenciát a redis.io címen",
      closeTooltip: "Bezárás (Esc)",
      empty: "Egyetlen kérdés sem felel meg a szűrőnek.",
      footerHint: "Tipp: írja be a „ai:” kifejezést, majd bármit bármilyen nyelven – a AI 54 nyelvet ért, és szükség esetén élő Redis állapotot használ.",
      groups: {
        diagnostics: {
          name: "Élő diagnosztika",
          description: "Kérje meg a AI, hogy vizsgálja meg az élő szerver állapotát biztonságos, csak olvasható eszközök segítségével.",
          prompts: [
            "miért magas a memória?",
            "mutasd meg a 10 leglassabb lekérdezést",
            "mely kliensek csatlakoznak?",
            "mi a maxmemória szabályzat?",
            "vannak mostanában kilakoltatások?",
            "van valami késleltetési esemény?",
            "mióta működik a szerver?",
            "mi a találati arány?",
            "CPU használat megjelenítése",
            "foglalja össze a kulcsteret",
            "mennyi memóriát használnak az egyes adattípusok?",
            "most valami blokkolja a szervert?"
          ]
        },
        keys: {
          name: "Kulcsok",
          description: "Nézze meg, keresse meg és indokolja meg a kulcsokat anélkül, hogy a fára kattintana.",
          prompts: [
            "megtalálja a user:* megfelelő kulcsot",
            "hány kulcs van az egyes adatbázisokban?",
            "mutasd a legnagyobb hash-t ebben a db",
            "60 másodpercnél rövidebb TTL-lel rendelkező kulcsok keresése",
            "melyik kulcson nincs TTL?",
            "milyen típusú kulcs a session:abc?",
            "becsülje meg a \"session:\" előtag által használt memóriát",
            "mutasd meg a user:42 kulcs objektumkódolását",
            "vannak olyan kulcsok, amelyek hamarosan lejárnak?",
            "melyik névtér használja a legtöbb memóriát?"
          ]
        },
        dataTypes: {
          name: "Adattípusok",
          description: "Természetes nyelvű megfogalmazás a létrehozáshoz/olvasáshoz/frissítéshez minden Redis típuson.",
          prompts: [
            "hozzon létre egy user:1 nevű hash-t name=Alice age=30 mezőkkel",
            "három elem hozzáadása a listához tasks",
            "tagok hozzáadása a favourites készlethez",
            "pontozott tagok hozzáadása a rendezett halmazhoz leaderboard",
            "esemény csatolása a streamhez events",
            "az utolsó 10 bejegyzés lekérése a events adatfolyamból",
            "lekérni a hash user összes mezőjét:1",
            "a favourites készlet tagjainak lekérése",
            "kerülj a legjobb 10-be a következő pontszám alapján: leaderboard"
          ]
        },
        modules: {
          name: "Modulok",
          description: "Lekérdezések betöltött Redis modulokhoz (az alábbi kategóriák csak akkor jelennek meg, ha a modul jelen van).",
          prompts: []
        },
        json: {
          name: "RedisJSON",
          description: "A ReJSON modul betöltésekor elérhető.",
          prompts: [
            "JSON dokumentum létrehozása a user:42 címen a következővel: { név: \"Alice\", életkor: 30 }",
            "olvassa el a user:42 névmezőjét",
            "frissítse a user:42 korát 31-re",
            "felsorolja az összes JSON kulcsot",
            "töröljön egy mezőt egy JSON dokumentumból",
            "beágyazott mező beszerzése a JSONPath használatával"
          ]
        },
        search: {
          name: "RediSearch",
          description: "A keresőmodul betöltésekor elérhető.",
          prompts: [
            "felsorolja az összes teljes szövegű indexet",
            "futtasson teljes szöveges keresést a \"redis\" kifejezésre a idx:products indexen",
            "hozzon létre egy hash-alapú indexet a cím (TEXT) és az ár (NUMERIC) mezőkkel",
            "információ a idx:products indexről",
            "cseppindex idx:products",
            "keressen olyan dokumentumokat, ahol az ár 10 és 50 között van",
            "írjon hibrid keresést, amely kombinálja a szöveg és a vektor hasonlóságát"
          ]
        },
        timeseries: {
          name: "RedisTimeSeries",
          description: "Az idősor modul betöltésekor elérhető.",
          prompts: [
            "listázza az összes idősor kulcsot",
            "adatpont hozzáadása a következőhöz: temp:room1",
            "szerezze be a temp:room1 tartományt tegnaptól máig",
            "több tartomány beszerzése a sensor=temp címkével",
            "100 szinuszos adatpont generálása a temp:room1 számára",
            "megőrzés és címkék megjelenítése a következőhöz: temp:room1"
          ]
        },
        bloom: {
          name: "RedisBloom (Bloom / Cuckoo / Top-K / CMS / T-Digest)",
          description: "A bf modul betöltésekor elérhető.",
          prompts: [
            "ellenőrizze, hogy a foo elem létezik-e a spam:ips virágszűrőben",
            "elemek hozzáadása a virágzási szűrőhöz spam:ips",
            "hozzon létre egy popular nevű top-K-t K=10-zel",
            "lekérdezés count-min vázlat traffic a /home kulcshoz",
            "adjunk hozzá értékeket a t-emésztéshez, és kapjuk meg a 95. percentilist",
            "mutasd a virágzásszűrő adatait spam:ips"
          ]
        },
        vectorSet: {
          name: "VectorSet (Redis 8+)",
          description: "Redis 8+ észlelésekor érhető el (natív VECTORSET típus).",
          prompts: [
            "vektor hozzáadása ehhez: embeddings",
            "keresse meg a 10 leginkább hasonló vektort egy lekérdezési vektorhoz",
            "mutasd a vektorkészlet méretét és számát embeddings",
            "elem törlése a vektorkészletből embeddings",
            "keresés elemnév alapján a következővel: VSIM"
          ]
        },
        redis8: {
          name: "Redis 8+ funkciók",
          description: "Redis 8+ észlelésekor jelenik meg.",
          prompts: [
            "állítsa be a ttl hash mezőt a következővel: HEXPIRE",
            "lekérni egy karakterlánc érték kivonatát",
            "futtasson hibrid teljes szöveg + vektor keresést (FT.HYBRID)",
            "állítson be több kulcsot megosztott lejárattal a MSETEX használatával",
            "streambejegyzés törlése fogyasztói csoporttal (XDELEX)",
            "mutasd meg a fürthely-statisztikát a legjobb 10 helyhez"
          ]
        },
        scripting: {
          name: "Szkriptelés",
          description: "Lua / EVAL szkriptek létrehozása természetes nyelvű leírásokból.",
          prompts: [
            "írjon egy atomi szkriptet, amely csak akkor növeli a counter X értéket, ha Y > 5",
            "generáljon 100 véletlenszerű kulcsot a Lua segítségével",
            "konvertálja ezt a shell folyamatot egyetlen EVAL: kulcsok user:* | GET | grep inaktív | DEL",
            "portoljon egy kötegelt műveletet a Lua-ra a fürt biztonsága érdekében",
            "ellenőrizze és állítsa be a stílusfrissítést egyetlen Lua hívásban",
            "iteráljon egy hash-en, és törölje a mintának megfelelő mezőket"
          ]
        },
        cluster: {
          name: "Klaszter",
          description: "Csak fürt módban látható.",
          prompts: [
            "klaszterinformációk megjelenítése",
            "klaszter csomópontok listája",
            "mutasd meg a 10 legjobb helyet a kulcsok száma alapján",
            "a legjobb 10 slot megjelenítése memória szerint",
            "melyik mesternek van az 5000-es slotja?"
          ]
        },
        acl: {
          name: "ACL (Redis 6+)",
          description: "Ellenőrizze a hozzáférés-vezérlő felhasználókat és az aktuális kapcsolatot.",
          prompts: [
            "kihez kapcsolódom?",
            "listázza ki az összes ACL felhasználót",
            "milyen engedélyeim vannak?",
            "az alapértelmezett felhasználói szabályok megjelenítése"
          ]
        },
        qna: {
          name: "Általános kérdések és válaszok",
          description: "Tegyen fel Redis tudásra vonatkozó kérdéseket – eszközök nélkül, csak válaszok.",
          prompts: [
            "mi az a ZADD?",
            "hogyan működik a fürt feladatátvétel?",
            "magyarázat SCAN vs KEYS",
            "mikor használjam a EVAL vs multiple parancsokat?",
            "melyek a Redis fennmaradási lehetőségek?",
            "mi a különbség a RDB és a AOF között?",
            "hogyan dönt a Redis Sentinel az új mester mellett?",
            "magyarázza el a hash címkéket fürt módban"
          ]
        },
        translate: {
          name: "Természetes nyelv → Redis parancs",
          description: "Írja le, hogy mit szeretne az 54 nyelv bármelyikén; a AI írja a Redis parancsot.",
          prompts: [
            "törlési kulcs user:42",
            "nevezze át a foo kulcsot sávra",
            "lejárati kulcs session:abc 10 másodpercen belül",
            "kulcsforrás másolása a célállomásra",
            "növelje a számlálólátogatásokat 5-tel",
            "állítsa a billentyű üdvözlést \"hello\" értékre 1 órára",
            "töröld az összes user:* kulcsot",
            "mutasd meg a 10 legforgalmasabb kulcsot"
          ]
        }
      }
    },
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
    aclAuthHint: "A hitelesítéshez használja a Redis ACL felhasználónevet és jelszót. Az alapértelmezett, jelszó nélküli felhasználóhoz hagyja üresen.",
    tlsWithoutCert: "TLS engedélyezése további tanúsítvány nélkül",
    tlsRejectUnauthorized: "Nem hitelesített tanúsítvány elutasítása",
    tlsSecure: "Ha olyan TLS konfigurációt lát, ami P3X-szel kezdődik, vagy az összes TLS beállítás hasonlónak tűnik, az egy biztonsági funkció. A beállítások módosításához cserélje ki üresre vagy valami másra, és mentésre kerülnek. Ha nem módosítja a TLS beállításokat, azok a szerveren maradnak.",
    treeSeparatorEmpty: "Ha a fa elválasztó üres, a fa nem tartalmaz beágyazott csomópontokat, csak egy egyszerű listát",
    treeSeparatorEmptyNote: "Nincs beágyazott csomópont, csak egyszerű lista",
    welcomeConsole: "Üdvözöljük a Redis Konzolban",
    welcomeConsoleInfo: "SHIFT + Kurzor FEL vagy LE előzménynavigáció engedélyezve",
    redisListIndexInfo: "Üres a hozzáfűzéshez, -1 az elejére beszúráshoz, vagy mentse a mutatott pozícióba.",
    console: "Konzol",
    connectiondAdd: "Kapcsolat hozzáadása",
    connectiondEdit: "Kapcsolat szerkesztése",
    connectiondView: "Kapcsolat megtekintése",
    connections: "Kapcsolatok",
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
    languageAuto: "Auto (system)",
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
    type: "Típus",
    format: "Formátum",
    loading: "Betöltés...",
    autoRefresh: "Auto",
    exportSearchHint: "Csak az aktuális keresésnek megfelelő kulcsok exportálása",
    importSearchHint: "Az importálás a teljes adatbázisra vonatkozik, nem csak a keresési eredményekre",
    deleteSearchHint: "Törli az összes kulcsot, amely megfelel az aktuális keresésnek a szerveren",
    deletingSearchKeys: "Egyező kulcsok törlése...",
    importNoKeys: "Nem található kulcs a fájlban",
    desktopNotifications: "Asztali értesítések",
    desktopNotificationsEnabled: "Asztali értesítések engedélyezése",
    desktopNotificationsInfo: "OS értesítések fogadása Redis lecsatlakozásoknál és újracsatlakozásoknál, amikor az alkalmazás nincs fókuszban."
  },
  status: {
    dataCopied: "Az adat a vágólapon van",
    exportDone: "Exportálás kész",
    deletedSearchKeys: (opts) => `${opts.count} kulcs törölve`,
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
    reverted: "Visszavonva",
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
    set: "A kulcs beállítva/hozzáadva",
    connectionRestored: "Kapcsolat helyreállítva",
    socketDisconnected: "Leválasztva",
    socketError: "Kapcsolati hiba",
    deletedHashKey: "Hash kulcs törölve",
    deletedSetMember: "Halmaz tag törölve",
    deletedListElement: "Listaelem törölve",
    deletedZSetMember: "Rendezett halmaz tag törölve",
    deletedStreamTimestamp: "Stream bejegyzés törölve",
  },
  code: {
    "delete-connection": "Ez a kapcsolat törölve lett, ezért leválasztásra került erről a Redis példányról.",
    "save-connection": "Ez a kapcsolat módosult, ezért leválasztásra került erről a Redis példányról. Újra csatlakozhat.",
    "readonly-connections": "A kapcsolatok hozzáadása/mentése/törlése csak olvasható!",
    "readonly-connection-mode": "Ez a kapcsolat csak olvasható módban van!",
    "list-out-of-bounds": "Ez a listaindex határon kívül van",
    "invalid-json-value": "The value is not valid JSON.",
    "http_auth_required": "Hitelesítés szükséges: kérjük hitelesítsen HTTP Basic Auth segítségével és töltse újra.",
    "auto-connection-failed": "Lehetséges, hogy a kapcsolat eltávolításra került és az automatikus csatlakozás emiatt sikertelen volt.",
    invalid_console_command: "Ez a parancs nem működik a GUI-n keresztül.",
    "AI_DISABLED": "Az AI le van tiltva. Engedélyezze az AI beállításokban.",
    "AI_PROMPT_REQUIRED": "AI lekérdezés szükséges.",
    "GROQ_API_KEY_READONLY": "A Groq API kulcs csak olvasható és nem módosítható.",
    "blocked_api_access": "A Groq API csomagja nem engedélyezi a hozzáférést ehhez a modellhez. Frissítse a Groq csomagját vagy használja a network.corifeus.com proxyt.",
    "rate_limit": "AI sebességkorlát elérve. Próbálja újra később vagy használja saját Groq API kulcsát a beállításokban."
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
      keyCount: (opts) => {
        return `Kulcsok száma: ${opts?.keyCount ?? 0}`;
      },
      label: {
        animation: "Animáció használata",
        noAnimation: "Nincs animáció",
        undoEnabled: "Visszavon\u00e1s enged\u00e9lyezve",
        undoDisabled: "Visszavon\u00e1s letiltva",
        diffEnabled: "Diff megjelen\u00edt\u00e9se ment\u00e9s el\u0151tt",
        diffDisabled: "Ment\u00e9s el\u0151tti diff kikapcsolva",
        jsonFormatTwoSpace: "JSON formázása 2 szóközzel",
        jsonFormatFourSpace: "JSON formázása 4 szóközzel",
        formName: "Redis beállítások",
        searchModeClient: "Kliens keresési mód",
        searchModeServer: "Szerver keresési mód",
        searchModeStartsWith: "Keresés kezdődik-e móddal",
        searchModeIncludes: "Keresés tartalmazza móddal"
      },
      undoHint: "A visszavon\u00e1s csak string \u00e9s JSON kulcst\u00edpusokn\u00e1l \u00e9rhet\u0151 el",
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
        value: "Érték",
        errorRate: "Hibaarány",
        capacity: "Kapacitás",
        topk: "Top K",
        width: "Szélesség",
        depth: "Mélység",
        decay: "Lecsengés",
        compression: "Tömörítés",
        increment: "Növekmény",
        item: "Elem",
        vectorValues: "Vektor értékek (vesszővel elválasztva)",
        element: "Elem neve",
      },
      error: {
        streamTimestamp: "Az időbélyeg kötelező, Redis formátumban vagy *-ként",
        key: "A kulcs legalább egy karakter",
        hashKey: "A hash tábla kulcs legalább egy karakter",
        score: "A rendezett halmaz pontszám kötelező",
        value: "Az érték kötelező",
        errorRate: "A hibaaránynak 0 és 1 között kell lennie (pl. 0.01)",
        capacity: "A kapacitásnak pozitív egész számnak kell lennie",
        topk: "A Top K-nak pozitív egész számnak kell lennie",
        width: "A szélességnek pozitív egész számnak kell lennie",
        depth: "A mélységnek pozitív egész számnak kell lennie",
        item: "Az elem kötelező"
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
      hybridMode: "Hibrid keresés (FT.HYBRID)",
      vectorField: "Vektor mező",
      vectorValues: "Vektor értékek",
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
      noSlowQueries: "Nem rögzítettek lassú lekérdezéseket.",
      confirmSlowLogReset: "Biztosan visszaállítja a lassú naplót?",
      slowLogResetDone: "A lassú napló visszaállításra került.",
      totalCommands: "Összesen",
      expired: "Lejárt",
      evicted: "Kiszorított",
      clientList: "Klienslista",
      topKeys: "Legnagyobb kulcsok memória szerint",
      killClient: "Kliens leállítása",
      clientKilled: "Kliens leállítva",
      confirmKillClient: "Biztosan le szeretné állítani ezt a klienst?",
      noKeys: "Nincsenek kulcsok",
      rss: "RSS",
      peak: "Csúcs",
      fragmentation: "Töredezettség",
      hitsAndMisses: "Találatok / Tévesztések",
      noClients: "Nincsenek kliensek",
      slotStats: "Klaszter slot statisztika",
      serverInfo: "Szerver információ",
      os: "Operációs rendszer",
      port: "Hálózati port",
      pid: "Folyamatazonosító",
      configFile: "Konfigurációs fájl",
      uptime: "Üzemidő",
      keyspace: "Redis kulcstér",
      keys: "Redis kulcsok",
      expires: "Lejár",
      noKeyspace: "Nincsenek kulcsok",
      persistence: "Perzisztencia",
      rdbLastSave: "RDB Utolsó mentés",
      rdbStatus: "RDB állapot",
      rdbChanges: "Változások az utolsó mentés óta",
      aofEnabled: "AOF engedélyezve",
      aofSize: "AOF méret",
      replication: "Redis replikáció",
      role: "Replikációs szerepkör",
      replicas: "Csatlakoztatott replikák",
      masterHost: "Elsődleges gazdagép",
      linkStatus: "Replikációs hivatkozás állapota",
      cpu: "CPU használat",
      cpuSys: "Rendszer",
      cpuUser: "Felhasználó",
      modules: "Betöltött Redis modulok",
      noModules: "Nincsenek betöltve Redis modulok",
      clusterSlotMap: "Redis fürt slot térkép",
      slotRange: "Cluster slot tartomány",
      totalSlots: "Összes fürthely",
      noClusterData: "Nem állnak rendelkezésre Redis-fürtadatok.",
    },
    analysis: {
      title: "Memória analízis",
      runAnalysis: "Analízis futtatása",
      running: "Elemzés...",
      typeDistribution: "Típus eloszlás",
      prefixMemory: "Memória prefix szerint",
      topKeysByMemory: "Legnagyobb kulcsok memória szerint",
      expirationOverview: "Kulcs lejárat",
      memoryBreakdown: "Memória bontás",
      keysScanned: "Vizsgált kulcsok",
      totalMemory: "Összes memória",
      rssMemory: "RSS memória",
      peakMemory: "Csúcs memória",
      luaMemory: "Lua memória",
      overheadMemory: "Többletterhelés",
      datasetMemory: "Adathalmaz",
      fragmentation: "Töredezettség",
      allocator: "Allokátor",
      withTTL: "TTL-lel",
      persistent: "Állandó",
      avgTTL: "Átlagos TTL",
      prefix: "Prefix",
      keyCount: "Kulcsok száma",
      memoryUsage: "Memória használat",
      noPrefix: "(nincs prefix)",
      topN: "Top N",
      maxScanKeys: "Max. vizsgált kulcsok",
      type: "Típus",
      noData: "Nincs adat. Kattintson az Analízis futtatása gombra a kezdéshez.",
      exportAll: "Összes exportálása",
      memoryDoctor: "Memory Doctor",
      doctorNoData: "Kattintson a Frissítés elemre a Memory Doctor diagnosztika futtatásához.",
    },
    acl: {
      title: "ACL felhasználók",
      loadUsers: "Felhasználók betöltése",
      loading: "Betöltés...",
      username: "Felhasználónév",
      status: "Állapot",
      enabled: "Engedélyezve",
      disabled: "Letiltva",
      commands: "Parancsok",
      commandsHint: "például +@all or +@read -@dangerous",
      keys: "Redis kulcsminták",
      keysHint: "pl. ~* or ~user:*",
      channels: "Pub/Sub csatornák",
      channelsHint: "pl. &* or &notifications:*",
      password: "Jelszó",
      noPassword: "Nincs jelszó (nopass)",
      passwordHint: "Hagyja üresen a jelenlegi jelszó megtartásához",
      currentUser: "Aktuális",
      createUser: "Felhasználó létrehozása",
      editUser: "Felhasználó szerkesztése",
      deleteUser: "Törlés",
      confirmDelete: "Biztosan törli a ACL felhasználót?",
      userDeleted: "A ACL felhasználót törölték.",
      userSaved: "A ACL felhasználó mentése megtörtént.",
      cannotDeleteDefault: "Az alapértelmezett felhasználót nem lehet törölni.",
      cannotDeleteSelf: "A jelenleg csatlakoztatott felhasználó nem törölhető.",
      noUsers: "Az ACL-hez Redis 6.0+ szükséges.",
      groupCommon: "Általános",
      groupDataTypes: "Adattípusok",
      groupOperations: "Műveletek",
      rules: "Szabályok",
      rulesHint: "Szóközökkel elválasztott tokenek (például on >password +@all ~* &*)",
      defaultUserWarning: "Vigyázat: Az alapértelmezett felhasználó módosítása minden kapcsolatot lezárhat. Ha ez megtörténik, újra kell indítania a Redis-t, vagy a redis-cli segítségével vissza kell állítania a hozzáférést.",
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
        compression: "Tömörítés",
        aiRateLimited: "AI kéréslimit elérve. Próbálja újra később, vagy használja saját Groq API kulcsát a Beállításokban.",
        aiError: "AI lekérdezés sikertelen",
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
      },
      timeseries: {
        chart: "Diagram",
        info: "Információ",
        addPoint: "Adatpont hozzáadása",
        from: "Ettől (ms vagy -)",
        to: "Eddig (ms vagy +)",
        aggregation: "Aggregáció",
        timeBucket: "Időszelet (ms)",
        none: "Nincs",
        dataPoints: "adatpontok",
        labels: "Címkék",
        rules: "Szabályok",
        retention: "Megőrzés",
        timestamp: "Időbélyeg",
        value: "Érték",
        retentionHint: "0 = nincs lejárat, vagy ezredmásodperc",
        duplicatePolicy: "Duplikátum-kezelés",
        labelsHint: "kulcs1 érték1 kulcs2 érték2",
        timestampHint: "'*' automatikus generálást jelent, vagy ezredmásodperc időbélyeg",
        editAllHint: "Soronként egy adatpont: időbélyeg érték (az időbélyeg lehet * az automatikushoz)",
        autoSpread: "Automatikus * szórási intervallum",
        formula: "Képlet",
        formulaLinear: "Lineáris",
        formulaRandom: "Véletlenszerű",
        formulaSawtooth: "Fűrészfog",
        formulaPoints: "Pontok",
        formulaAmplitude: "Amplitúdó",
        formulaOffset: "Eltolás",
        generate: "Generálás",
        exportChart: "Exportálás PNG",
        overlay: "Kulcsok átfedése",
        overlayHint: "Vesszővel elválasztott kulcsok",
        mrangeFilter: "Címke szűrő",
        bulkMode: "Tömeges generálás",
        mrangeHint: "pl. sensor=temp"
      },
      probabilistic: {
        info: "Információ",
        addItem: "Elem hozzáadása",
        checkItem: "Elem ellenőrzése",
        item: "Elem",
        exists: "Létezik",
        doesNotExist: "Nem létezik",
        topkList: "Leggyakoribb elemek",
        topkCount: "Darabszám",
        queryCount: "Lekérdezések száma",
        queryResult: "Lekérdezés eredménye",
        addedSuccessfully: "Elem sikeresen hozzáadva",
        deletedSuccessfully: "Elem sikeresen törölve",
        quantile: "Kvantilis",
        quantileResult: "Eredmény",
        noItems: "Nincsenek megjelenítendő elemek",
        resetConfirm: "Visszaállítja az összes adatot ebben a T-Digest-ben?",
      },
      vectorset: {
        info: "Információ",
        elements: "Elemek",
        similarity: "Hasonlósági keresés",
        searchByElement: "Keresés elem szerint",
        searchByVector: "Keresés vektor szerint",
        vectorValues: "Vektor értékek",
        element: "Elem",
        score: "Pontszám",
        count: "Darabszám",
        addElement: "Elem hozzáadása",
        attributes: "Attribútumok",
        noAttributes: "Nincsenek attribútumok",
        dimensions: "Dimenziók",
        removeConfirm: "Eltávolítja ezt az elemet a VectorSet-ből?",
        noElements: "Nincsenek elemek",
        filter: "Szűrő",
        searchComplete: "Keresés kész",
      }
    },
    treeControls: {
      settings: "Fa beállítások",
      expandAll: "Összes kibontása",
      collapseAll: "Összes összecsukása",
      level: "Szint",
      search: {
        search: "Keresés a kulcsok között",
        clear: "Jelenlegi keresés törlése",
        placeholderClient: "Keresés kliens oldalon",
        placeholderServer: "Keresés szerver oldalon",
        info: (opts) => "A kliens oldali keresés azt jelenti, hogy a keresőmezőben lévő szöveget egyezteti. A szerver oldali keresés azt jelenti, hogy a kulcsmintákban keres, mint *{keresett-szöveg}*. Nagy adathalmazoknál jobb a szerver oldali keresés. Kisebb halmazoknál jobb a kliens oldali keresés." + ` Ha a kulcsok száma meghaladja a ${opts?.maxLightKeysCount ?? 110000} értéket, csak szerver oldalon kereshet.`,
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
    day: "nap",
    second: "másodperc",
    seconds: "másodperc",
    minute: "perc",
    minutes: "perc",
    hour: "óra",
    hours: "óra"
  },
  redisTypes: {
    string: "String",
    list: "List",
    hash: "Hash table",
    set: "Set",
    zset: "Sorted set - zset",
    stream: "Stream",
    json: "JSON",
    timeseries: "Time Series",
    bloom: "Bloom szűrő",
    cuckoo: "Cuckoo szűrő",
    topk: "Top-K",
    cms: "Count-Min Sketch",
    tdigest: "T-Digest",
    vectorset: "VectorSet",
  },
  promo: {
    title: "AI Hálózati asszisztens",
    description: "Fedezze fel ingyenes AI Hálózati asszisztensünket a network.corifeus.com címen – elemezze a domaineket, IPs, DNS rekordokat, SSL tanúsítványokat, e-mail biztonságot és hálózati infrastruktúrát. Powered by AI az azonnali, átfogó eredményekért.",
    disclaimer: "Ez a promóció csak a bemutató webhelyen jelenik meg, és nem jelenik meg Docker, Electron vagy webalkalmazás-telepítésekben.",
    toastMessage: "Próbálja ki ingyenes AI Hálózati asszisztensünket a network.corifeus.com címen – elemezzen domaineket, DNS, SSL és még sok mást!",
    visit: "Látogassa meg a network.corifeus.com"
  }
};
module.exports = strings;
