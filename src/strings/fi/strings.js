const strings = {
  error: {
    server_error: "Palvelinvirhe, yritä uudelleen",
    aiPromptTooLong: "AI-kehote on liian pitkä (enintään 4096 merkkiä)",
  },
  title: {
    donate: "Lahjoita",
    donateTitle: "Tue P3X Redis UI:ta",
    donateDescription: "P3X Redis UI on ilmainen avoimen lähdekoodin projekti. Sovelluksen, AI-ominaisuuksien, Docker-kuvien, palvelimien ja infrastruktuurin ylläpitokustannukset tulevat kehittäjän omasta taskusta. Jos pidät tätä työkalua hyödyllisenä, harkitse sen jatkuvan kehityksen tukemista lahjoituksella. Jokainen panos auttaa pitämään projektin elossa ja kasvamassa. Kiitos!",
    jsonRecursive: "Kaikkien lehtien laajentaminen",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "Voit valita yhdistettäväksi Redis-liitännän vasemmasta alavalikosta.",
    statistics: "Tilastot",
    error: "Virhe",
    connectingRedis: "Yhdistetään Redis...",
    socketioConnectError: "Socket.IO Virhe",
    db: "DB",
    server: "Palvelin",
    clients: "Asiakkaat",
    memory: "Muisti",
    persistence: "Pysyvyys",
    stats: "Tilastot",
    replication: "Replikointi",
    cpu: "CPU",
    cluster: "Cluster",
    modules: "Moduulit",
    errorstats: "Virhetilastot",
    commandstats: "Komentotilastot",
    latencystats: "Viiveтilastot",
    keysizes: "Avainkoot",
    threads: "Säikeet"
  },
  confirm: {
    dropIndex: "Haluatko varmasti poistaa tämän indeksin?",
    uploadBuffer: "Oletko varma, että lähetät nämä binaaritiedot?",
    uploadBufferDone: "Binääritiedot ladataan",
    uploadBufferDoneAndSave: "Binääritiedot ladataan ja tallennetaan palvelimelle",
    title: "Vahvista",
    alert: "Varoitus",
    info: "Tietoja",
    deleteListItem: "Haluatko varmasti poistaa tämän luettelokohteen?",
    deleteHashKey: "Haluatko varmasti poistaa tämän hash-avainkohteen?",
    deleteStreamTimestamp: "Haluatko varmasti poistaa tämän striimin aikaleiman?",
    deleteSetMember: "Haluatko varmasti poistaa tämän sarjan jäsenen?",
    deleteZSetMember: "Haluatko varmasti poistaa tämän lajitellun joukon jäsenen?",
    deleteConnection: "Vahvista",
    deleteConnectionText: "Haluatko varmasti poistaa tämän Redis-yhteyden?",
    deleteNode: "Haluatko varmasti poistaa tämän Redis-solmun?",
    deleteAllKeys: opts => {
      return `Poista tämä puu ja kaikki sen avaimet (${opts.key})?`;
    },
    deleteSearchKeys: opts => {
      return `Haluatko varmasti poistaa kaikki hakua "${opts.pattern}" vastaavat avaimet? Löytyi ${opts.count} avainta.`;
    },
    socketioConnectError: "Socket.IO ei voi muodostaa yhteyttä palvelimeen, voit ladata uudelleen ja yrittää ratkaista yhteysvirheen itse, asiakas ei osaa ratkaista sitä itse.",
    socketioAuthRequired: "Socket.IO-valtuutus vaaditaan. Todennus komennolla HTTP Basic Auth (käyttäjänimi/salasana) ja lataa uudelleen.",
    invalidCredentials: "Virheellinen käyttäjänimi tai salasana.",
    delete: "Poista?",
    deleteKey: "Haluatko varmasti poistaa tämän avaimen?",
    rename: {
      title: "Haluatko varmasti nimetä tämän avaimen uudelleen?",
      textContent: "Tämä toiminto nimeää avaimen pysyvästi uudelleen.",
      placeholder: "Avain Redis (pakollinen)"
    },
    ttl: {
      title: "Haluatko varmasti vaihtaa tämän avaimen TTL?",
      textContent: "TTL:n vaihtaminen päivittää tämän avaimen ajan elää. Jätä tyhjäksi, jotta tämä avain säilyy ikuisesti.",
      placeholder: "Redis-avaimen TTL (kokonaisluku tai tyhjä)",
      placeholderPlaceholder: "Tyhjä tarkoittaa, että se säilyy ikuisesti; muussa tapauksessa syötä kokonaisluku.",
      convertTextToTime: "Muunna teksti aikaan",
      convertTextToTimePlaceholder: "Esim. 1d on 86400"
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
    copy: "Kopioi",
    downloadBuffer: "Lataa binaari",
    setBuffer: "Lataa binaari",
    exportKeys: "Vie avaimet",
    exportAllKeys: (opts) => `Vie kaikki ${opts.count} avainta`,
    exportSearchResults: (opts) => `Vie ${opts.count} tulosta`,
    deleteAllKeysMenu: (opts) => `Poista kaikki ${opts.count}`,
    importKeys: "Tuo avaimet",
    deleteSearchKeys: (opts) => `Poista ${opts.count} vastaavaa avainta`,
    saveWithFormatJson: "Tallenna muodossa",
    formatJson: "Muotoile Json",
    wrap: "Kääri",
    unwrap: "Avaa pakkaus",
    downloadJson: "Lataa JSON",
    pubsubMonitor: "PubSub",
    pulse: "Pulse",
    profiler: "Profiler",
    memoryAnalysis: "Analysis",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "Kieli",
    ok: "OK",
    addKey: "Lisää tähän avaimeen",
    addKeyRoot: "Lisää juuriavain",
    reloadKey: "Lataa avain uudelleen",
    reload: "Lataa uudelleen",
    close: "Sulje",
    commands: "komennot",
    view: "Näytä",
    statistics: "Tilastot",
    refresh: "Päivitä",
    pause: "Tauko",
    resume: "Jatka",
    clear: "Selkeä",
    rename: "Nimeä uudelleen",
    main: "Tietokanta",
    cancel: "Peruuta",
    theme: "Teema",
    github: "GitHub",
    githubRepo: "Arkisto",
    githubRelease: "Julkaisut",
    githubChangelog: "Muutosloki",
    info: "Info",
    settings: "Asetukset",
    connect: "Yhdistä",
    disconnect: "Katkaise yhteys",
    logout: "Kirjaudu ulos",
    overview: "Yleiskatsaus",
    console: "konsoli",
    noConnections: "Ei yhteyksiä, lisää yhteys asetusvalikossa.",
    noConnectionsInSettings: "Ei yhteyksiä, voit lisätä UUDEN YHTEYDEN yllä.",
    connectionAdd: "Uusi yhteys",
    addGroup: "Lisää ryhmä",
    extend: "Laajenna",
    collapse: "Kutista",
    add: "Lisää",
    edit: "Muokkaa",
    save: "Tallenna",
    ttl: "Aseta TTL",
    fieldTtl: "Kentän TTL",
    digest: "Tiivistelmä",
    delete: "Poista",
    remove: "Poista",
    areYouSure: "Oletko varma?",
    sure: "Toki",
    testConnection: "Testaa yhteys",
    getKey: "Ladataan Redis-avainta ja siihen liittyviä tietoja...",
    jsonViewShow: "Näyttö JSON",
    jsonViewEditor: "Muokkaa JSON",
    quickConsole: "Pikakonsoli",
    moveUp: "Siirrä ylös",
    moveDown: "Siirrä alas"
  },
  label: {
    id: {
      nodeId: "Solmun tunnus",
      id: "Yhteystunnus",
      info: "Jos et halua muuttaa seuraavia ominaisuuksia: sshPassword, sshPrivateKey, password, tlsCrt, tlsKey, tlsCa, kirjoita yhteyden tunnus näihin ominaisuuksiin, jotta ominaisuusarvot pysyvät ennallaan. Jos haluat saman logiikan solmun salasanaan, kirjoita solmun tunnus solmun salasanaan."
    },
    secureFeature: "Jos näet arvon, joka alkaa P3X:llä ja näyttää samalta, se on turvallinen ominaisuus. Jos haluat muuttaa asetuksia, korvaa nämä asetukset tyhjällä tai jollain muulla, ja ne tallennetaan. Jos et muuta asetuksia, asetukset säilytetään sellaisina kuin ne ovat palvelimella.",
    aiTranslating: "Käännetään...",
    aiSettings: "AI-asetukset",
    aiGroqApiKey: "Groq API-avain",
    aiGroqApiKeyInfo: "Valinnainen. Oma Groq API-avain parempaan suorituskykyyn. Hanki ilmainen avain",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "AI API-avain tallennettu",
    aiGroqApiKeyInvalid: "Virheellinen Groq API-avain",
    aiGroqApiKeyNotSet: "Ei asetettu (palvelimen oletus)",
    aiEnabled: "AI käytössä",
    aiEnabledYes: "Kyllä",
    aiEnabledNo: "Ei",
    aiRouteViaNetwork: "Reititä network.corifeus.comin kautta",
    aiRoutingDirect: "Kyselyt menevät suoraan Groqiin omalla API-avaimellasi ohittaen network.corifeus.comin.",
    aiRoutingNetwork: "AI-kyselyt reititetään network.corifeus.comin kautta. Jos sinulla on oma ilmainen Groq API-avain, voit kytkeä tämän pois päältä ja reitittää suoraan Groqiin ilman network.corifeus.comia.",
    aiMaxTokens: "AI:n enimmäistokenit",
    aiMaxTokensInfo: "AI-vastausten enimmäistokenimäärä. Suuremmat arvot mahdollistavat pidemmät vastaukset, mutta voivat kuluttaa enemmän API-krediittejä.",
    ssh: {
      on: "SSH päällä",
      off: "SSH pois päältä",
      sshHost: "SSH Isäntä",
      sshPort: "SSH-portti",
      sshUsername: "SSH käyttäjätunnus",
      sshPassword: "SSH salasana",
      sshPrivateKey: "SSH yksityinen avain"
    },
    isBuffer: opts => `[object ArrayBuffer] tarkoittaa, että arvo on binääritietoa tai arvo on suurempi kuin ${opts.maxValueAsBuffer}`,
    streamValue: `Stream-kenttä ja -arvo on yksiviivainen. Esim.: kenttä1 arvo1 "kenttä 2" "arvo 2"`,
    streamTimestampId: `'*' tarkoittaa automaattisesti luotua tai määritystä muodossa <millisecondsTime>-<sequenceNumber>`,
    unableToLoadKey: ({
      key
    }) => {
      return `Tätä avainta ei voi ladata: ${key}. Mahdollista, avain poistettiin. Tarkka vika löytyy konsolista.`;
    },
    bigJson: "Tämä JSON-objekti on yli 10 kt, joten varmista, että tiedät mitä teet, koska jotkut toiminnot voivat olla hidasta renderöityä.",
    addNode: "Lisää solmu",
    validateJson: "Vahvista JSON",
    reducedFunction: `Vähentynyt toiminnallisuus`,
    tooManyKeys: opts => {
      return `Täysi enimmäistoimintojen sallitut näppäimet yhteensä on ${opts.maxLightKeysCount} laskea. Tässä tietokannassa on yhteensä yli sallitut avaimet ${opts.count}. Avainten lajittelu ja ylimääräiset hienot puutiedot on poistettu käytöstä. Haku tapahtuu vain palvelimella asiakashaun sijaan.`;
    },
    redisCommandNotFound: "Komentoa Redis ei löytynyt...",
    treeKeyStore: `Lajittelu (luonnollinen vertailu) suoritetaan asiakkaalla eli selaimella, mikä tarkoittaa, että sillä on sakko isoista suurista sarjoista, kuten yli 10 000 avaimista, se saattaa lisätä sivun renderöintiin hieman aikaa. Redis:ssä ei ole avainten lajittelua, vain näin.`,
    socketIoTimeout: options => {
      return `Socket.IO aikakatkaistiin tälle pyynnölle (max ${options.timeout / 1000} sekuntia)...`;
    },
    resizerInfo: options => {
      return `Vasemman tai oikean paneelin vähimmäisleveys on ${options.width}px`;
    },
    jsonViewNotParsable: "Tämä arvo ei ole JSON jäsennettävä  ",
    ttlTitle: "Aseta TTL sekunneissa",
    passwordSecure: "Salasana saattaa olla tyhjä, mutta silti siinä näkyy merkkejä, tämä on suojausominaisuus.",
    tlsWithoutCert: "Ota TLS käyttöön ilman lisävarmennetta",
    tlsRejectUnauthorized: "Hylkää luvaton varmenne",
    tlsSecure: "Jos näet TLS-määrityksen, joka alkaa P3X:stä tai kaikki TLS-asetukset näyttävät samalta, se on suojattu ominaisuus. Jos haluat muuttaa asetuksia, korvaa nämä asetukset tyhjällä tai jollain muulla, ja ne tallennetaan. Jos et muuta TLS-asetuksia, asetukset säilyvät sellaisina kuin ne ovat palvelimella.",
    treeSeparatorEmpty: "Jos puun erotin on tyhjä, puussa ei ole sisäkkäisiä solmuja, vain puhdas luettelo",
    treeSeparatorEmptyNote: "Ei sisäkkäisiä solmuja, vain puhdas luettelo",
    welcomeConsole: "Tervetuloa Redis-konsoliin",
    welcomeConsoleInfo: "Kohdistimen YLÖS- tai ALAS-historia on käytössä",
    redisListIndexInfo: "Tyhjä lisätäksesi, -1 lisätäksesi tai tallentaaksesi sen näkyvään kohtaan.",
    console: "konsoli",
    connectiondAdd: "Lisää yhteys",
    connectiondEdit: "Muokkaa yhteyttä",
    connectiondView: "Näytä yhteys",
    connections: "Liitännät",
    keysSort: {
      on: "Avainten lajittelu päällä",
      off: "Avainten lajittelu pois"
    },
    cluster: {
      on: "Cluster päällä",
      off: "Cluster pois päältä"
    },
    sentinel: {
      on: "Sentinel päällä",
      off: "Sentinel pois päältä",
      name: "Sentinel nimi"
    },
    readonly: {
      on: "Vain luku päällä",
      off: "Vain luku pois päältä"
    },
    theme: {
      light: "Kevyt",
      dark: "Pimeä yritys",
      darkNeu: "Tumma",
      darkoBluo: "Tumma bluo",
      enterprise: "Yritys",
      redis: "Redis",
      matrix: "Matrix"
    },
    connected: opts => {
      return `Yhdistetty: ${opts.name}`;
    },
    tree: "puu",
    askAuth: "Pyydä lupa",
    keyboardShortcuts: "Keyboard Shortcuts",
    about: "About",
    supportedLanguages: "Supported Languages",
    version: "Version",
    redisVersion: "Redis Version",
    modules: "Moduulit",
    shortcutRefresh: "Refresh",
    shortcutSearch: "Focus Search",
    shortcutNewKey: "New Key",
    shortcutDisconnect: "Katkaise yhteys",
    themeAuto: "Auto (system)",
    languageAuto: "Auto (system)",
    shortcutCommandPalette: "Command Palette",
    commandPalette: "Command Palette",
    noResults: "No results",
    redisCommandsReference: "Redis Komennot",
    ungrouped: "Ryhmittelemätön",
    grouped: "Grouped",
    connectFirst: "Yhdistä ensin Redis-palvelimeen",
    searchLanguage: "Hae kieltä...",
    exportProgress: "Viedään avaimia...",
    importProgress: "Tuodaan avaimia...",
    importPreview: "Esikatselu",
    importOverwrite: "Korvaa",
    importSkip: "Ohita",
    importConflict: "Jos avain on jo olemassa:",
    noKeysToExport: "Ei avaimia vietäväksi",
    time: "Aika",
    type: "Tyyppi",
    format: "Muoto",
    loading: "Ladataan...",
    autoRefresh: "Auto",
    exportSearchHint: "Viedään vain nykyistä hakua vastaavat avaimet",
    importSearchHint: "Tuonti koskee koko tietokantaa, ei vain hakutuloksia",
    deleteSearchHint: "Poistaa kaikki palvelimen nykyistä hakua vastaavat avaimet",
    deletingSearchKeys: "Poistetaan vastaavia avaimia...",
    importNoKeys: "Tiedostosta ei löytynyt avaimia",
    desktopNotifications: "Työpöytäilmoitukset",
    desktopNotificationsEnabled: "Ota työpöytäilmoitukset käyttöön",
    desktopNotificationsInfo: "Vastaanota käyttöjärjestelmän ilmoituksia Redis-yhteyden katkeamisista ja uudelleenyhdistämisistä, kun sovellus ei ole etualalla."
  },
  status: {
    dataCopied: "Tiedot ovat leikepöydällä",
    exportDone: "Vienti valmis",
    deletedSearchKeys: (opts) => `${opts.count} avainta poistettu`,
    indexCreated: "Indeksi luotu",
    indexDropped: "Indeksi poistettu",
    importDone: (opts) => `Tuonti valmis: ${opts.created} luotu, ${opts.skipped} ohitettu, ${opts.errors} virhettä`,
    nodeRemoved: "Solmu poistettu",
    keyIsNotExisting: "Tämä avain on voitu poistaa tai vanhentunut.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "Ei avainta";
      } else if (opts.keyCount === 1) {
        return "1 avain";
      } else {
        return `${opts.keyCount} avaimet`;
      }
    },
    treeExpandAll: "Laajenna kaikki puun lehdet. Tämä toimenpide voi olla kallis ja voi viedä aikaa...",
    noRedisKeys: "Tässä tietokannassa ei ole avaimia.",
    redisConnected: "Redis yhdistäminen onnistui",
    reloadingDataInfo: "Ladataan uudelleen Redis-tietoja",
    added: "Lisätty",
    saved: "Päivitetty",
    cancelled: "Peruutettu",
    deleted: "Poistettu",
    savedRedis: "Redis tiedot tallennetaan",
    redisDisconnected: opts => {
      return `Nykyisessä yhteydessä oli virhe: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `db-indeksi on asetettu arvoon ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `Puuavain poistettiin (${opts.key}).`;
    },
    deletedKey: opts => {
      return `avain poistettiin (${opts.key}).`;
    },
    renamedKey: "Tämä avain on nimetty uudelleen",
    ttlChanged: "Tämän avaimen TTL on muutettu",
    notInteger: "Tämä syöte ei ole kokonaisluku",
    persisted: "Tämä avain säilyy ikuisesti",
    set: "Avain on asetettu/lisätty",
    connectionRestored: "Yhteys palautettu"
  },
  code: {
    "delete-connection": "Tämä yhteys poistettiin, joten yhteys tähän Redis-esiintymään on katkaistu.",
    "save-connection": "Tätä yhteyttä on muutettu, joten yhteys tähän Redis-instanssiin on katkennut. Voit muodostaa yhteyden uudelleen.",
    "readonly-connections": "Lisää/tallenna/poista yhteydet ovat vain luku -tilassa!",
    "readonly-connection-mode": "Tämä yhteys on vain luku -tilassa!",
    "list-out-of-bounds": "Tämä luettelohakemisto on rajojen ulkopuolella",
    "invalid-json-value": "Arvo ei ole kelvollinen JSON.",
    "http_auth_required": "Valtuutus vaaditaan: todenna HTTP Basic Auth ja lataa uudelleen.",
    "auto-connection-failed": "Mahdollisesti yhteys katkesi ja automaattinen yhteys epäonnistui tämän vuoksi.",
    invalid_console_command: "Tämä komento ei toimi GUI:n kautta.",
    "AI_DISABLED": "AI on pois käytöstä. Ota se käyttöön AI-asetuksissa.",
    "AI_PROMPT_REQUIRED": "AI-kysely vaaditaan.",
    "GROQ_API_KEY_READONLY": "Groq API-avain on vain luku -tilassa eikä sitä voi muokata.",
    "blocked_api_access": "Groq API-suunnitelmasi ei salli pääsyä tähän malliin. Päivitä Groq-suunnitelmasi tai käytä network.corifeus.com-välityspalvelinta.",
    "rate_limit": "AI-nopeusraja saavutettu. Yritä myöhemmin uudelleen tai käytä omaa Groq API-avainta asetuksissa."
  },
  form: {
    error: {
      required: "Pakollinen",
      port: "Portti on välillä 1-65535",
      invalid: "Lomake on virheellinen"
    },
    connection: {
      label: {
        name: "Nimi",
        group: "Group",
        host: "Isäntänimi",
        port: "Portti",
        password: "Salasana",
        username: "Käyttäjätunnus"
      }
    },
    treeSettings: {
      maxValueDisplay: "Näytön merkkijonon enimmäispituus",
      maxValueDisplayInfo: "Jos asetettu arvoon 0, näytä täydet arvot. Jos suurempi kuin 0, lyhennä tähän pituuteen. Jos -1: merkkijonoille, piilota arvo, kunnes muokkaa; muille tyypeille, näytä koko sisältö.",
      maxKeys: "Avainten enimmäismäärä",
      maxKeysInfo: "Jotta GUI ei kaatuisi, rajoitamme avainten enimmäismäärää.",
      keyCount: (opts) => {
        return `Avainten määrä: ${opts?.keyCount ?? 0}`;
      },
      label: {
        animation: "Käytä animaatiota",
        noAnimation: "Ei animaatiota",
        jsonFormatTwoSpace: "Muoto JSON, jossa on 2 välilyöntiä",
        jsonFormatFourSpace: "Muoto JSON, jossa on 4 välilyöntiä",
        formName: "Redis-asetukset",
        searchModeClient: "Asiakashakutila",
        searchModeServer: "Palvelimen hakutila",
        searchModeStartsWith: "Haku alkaa tilalla",
        searchModeIncludes: "Haku sisältää tilan"
      },
      field: {
        treeSeparator: "Puiden erotin",
        treeSeparatorSelector: "Puiden erottimen valitsin",
        page: "Puun sivujen määrä",
        keyPageCount: "Avainten sivujen määrä",
        keysSort: "Lajittele avaimet",
        searchMode: "Hakutila",
        searchModeStartsWith: "Haku alkaa / sisältää"
      },
      error: {
        keyPageCount: "Avainsivumäärän on oltava kokonaisluku väliltä 5–100",
        page: "Sivumäärän tulee olla kokonaisluku välillä 10 - 5000",
        maxValueDisplay: "Näytön enimmäisarvon on oltava kokonaisluku välillä -1 ja 32768",
        maxKeys: "Avainten enimmäismäärän arvon on oltava kokonaisluku välillä 100–100 000"
      }
    },
    key: {
      label: {
        formName: {
          add: "Lisää uusi Redis-avain",
          edit: "Muokkaa avainta Redis",
          append: "Lisää olemassa olevaan Redis-avaimeen"
        }
      },
      field: {
        streamTimestamp: "Aikaleima",
        key: "Avain",
        type: "Kirjoita",
        index: "Hakemisto",
        hashKey: "Hash-avain",
        score: "Pisteet",
        value: "Arvo",
        errorRate: "Virhesuhde",
        capacity: "Kapasiteetti",
        topk: "Top K",
        width: "Leveys",
        depth: "Syvyys",
        decay: "Vaimeneminen",
        compression: "Pakkaus",
        increment: "Kasvu",
        item: "Kohde",
        vectorValues: "Vektoriarvot (pilkuilla erotetut)",
        element: "Elementin nimi",
      },
      error: {
        streamTimestamp: "Aikaleima vaaditaan joko muodossa Redis tai muodossa *",
        key: "Avain on ainakin yksi merkki",
        hashKey: "Hajautustaulukon avain on vähintään yksi merkki",
        score: "Lajiteltu pistemäärä vaaditaan",
        value: "Arvo vaaditaan",
        errorRate: "Virhesuhteen on oltava välillä 0 ja 1 (esim. 0.01)",
        capacity: "Kapasiteetin on oltava positiivinen kokonaisluku",
        topk: "Top K:n on oltava positiivinen kokonaisluku",
        width: "Leveyden on oltava positiivinen kokonaisluku",
        depth: "Syvyyden on oltava positiivinen kokonaisluku",
        item: "Kohde vaaditaan"
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
      title: "Haku",
      index: "Indeksi",
      query: "Kysely",
      results: "Tulokset",
      noIndex: "Indeksejä ei löytynyt",
      createIndex: "Luo indeksi",
      dropIndex: "Poista indeksi",
      indexInfo: "Indeksin tiedot",
      indexName: "Indeksin nimi",
      prefix: "Avaimen etuliite (valinnainen)",
      fieldName: "Kentän nimi",
      hybridMode: "Hybridihaku (FT.HYBRID)",
      vectorField: "Vektorikenttä",
      vectorValues: "Vektoriarvot",
    },
    monitor: {
      title: "Seuranta",
      memory: "Muisti",
      opsPerSec: "Ops/sek",
      clients: "Asiakkaat",
      blocked: "Estetty",
      hitsMisses: "Osumisaste",
      networkIo: "Verkko I/O",
      slowLog: "Hidas loki",
      totalCommands: "Yhteensä",
      expired: "Vanhentuneet",
      evicted: "Häädetyt",
      clientList: "Asiakasluettelo",
      topKeys: "Suurimmat avaimet muistin mukaan",
      killClient: "Tapa asiakas",
      clientKilled: "Asiakas tapettu",
      confirmKillClient: "Haluatko varmasti lopettaa tämän asiakkaan?",
      noKeys: "Ei avaimia",
      rss: "RSS",
      peak: "Huippu",
      fragmentation: "Fragmentoituminen",
      hitsAndMisses: "Osumat / Ohitukset",
      noClients: "Ei asiakkaita",
      slotStats: "Klusterin paikan tilastot",
    },
    analysis: {
      title: "Muistianalyysi",
      runAnalysis: "Suorita analyysi",
      running: "Analysoidaan...",
      typeDistribution: "Tyyppien jakauma",
      prefixMemory: "Muisti etuliitteen mukaan",
      topKeysByMemory: "Suurimmat avaimet muistin mukaan",
      expirationOverview: "Avainten vanheneminen",
      memoryBreakdown: "Muistin erittely",
      keysScanned: "Skannatut avaimet",
      totalMemory: "Kokonaismuisti",
      rssMemory: "RSS-muisti",
      peakMemory: "Huippumuisti",
      luaMemory: "Lua-muisti",
      overheadMemory: "Yleisrasite",
      datasetMemory: "Tietojoukko",
      fragmentation: "Fragmentoituminen",
      allocator: "Varaaja",
      withTTL: "TTL:llä",
      persistent: "Pysyvät",
      avgTTL: "Keskimääräinen TTL",
      prefix: "Etuliite",
      keyCount: "Avainten määrä",
      memoryUsage: "Muistin käyttö",
      noPrefix: "(ei etuliitettä)",
      topN: "Top N",
      maxScanKeys: "Maks. skannatut avaimet",
      type: "Tyyppi",
      noData: "Ei tietoja. Napsauta Suorita analyysi aloittaaksesi.",
      exportAll: "Vie kaikki"
    },

    overview: {
      noConnected: "Ei yhteyttä laitteeseen Redis.",
      overviewClients: "Listaa yhdistetyt asiakkaiden lukumäärän mukaan",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "1 asiakas";
        }
        return `${opt.length} asiakkaita`;
      }
    },
    key: {
      label: {
        key: "Avain",
        encoding: "Koodaus",
        compression: "Pakkaus",
        aiRateLimited: "AI-pyyntöjen raja saavutettu. Yritä myöhemmin uudelleen tai käytä omaa Groq API -avainta Asetuksissa.",
        aiError: "AI-kysely epäonnistui",
        length: "Koko",
        ttl: "TTL",
        ttlTitle: "Aika elää",
        type: "Kirjoita",
        ttlNotExpire: "ei vanhene",
        lengthString: "tavua",
        lengthItem: "kohteita",
        actions: "Toiminnot"
      },
      list: {
        table: {
          index: "Hakemisto",
          value: "Arvo"
        }
      },
      hash: {
        table: {
          hashkey: "Hashkey",
          value: "Arvo"
        }
      },
      set: {
        table: {
          value: "jäsen"
        }
      },
      zset: {
        table: {
          value: "jäsen",
          score: "Pisteet"
        }
      },
      stream: {
        table: {
          timestamp: "Aikaleiman tunnus",
          field: "Kenttä",
          value: "Arvo"
        }
      },
      timeseries: {
        chart: "Kaavio",
        info: "Tiedot",
        addPoint: "Lisää datapiste",
        from: "Alkaen (ms tai -)",
        to: "Asti (ms tai +)",
        aggregation: "Aggregointi",
        timeBucket: "Aikaväli (ms)",
        none: "Ei mitään",
        dataPoints: "datapistettä",
        labels: "Tunnisteet",
        rules: "Säännöt",
        retention: "Säilytys",
        timestamp: "Aikaleima",
        value: "Arvo",
        retentionHint: "0 = ei vanhene, tai millisekunteja",
        duplicatePolicy: "Duplikaattikäytäntö",
        labelsHint: "avain1 arvo1 avain2 arvo2",
        timestampHint: "'*' tarkoittaa automaattista luontia, tai aikaleima millisekunteina",
        editAllHint: "Yksi datapiste per rivi: aikaleima arvo (aikaleima voi olla * automaattiselle)",
        autoSpread: "Automaattinen * hajontaväli",
        formula: "Kaava",
        formulaLinear: "Lineaarinen",
        formulaRandom: "Satunnainen",
        formulaSawtooth: "Sahalaita",
        formulaPoints: "Pisteet",
        formulaAmplitude: "Amplitudi",
        formulaOffset: "Siirtymä",
        generate: "Luo",
        exportChart: "Vie PNG",
        overlay: "Päällekkäiset avaimet",
        overlayHint: "Pilkuilla erotetut avaimet",
        mrangeFilter: "Tunnistesuodatin",
        bulkMode: "Massagenerointi",
        mrangeHint: "esim. sensor=temp"
      },
      probabilistic: {
        info: "Tiedot",
        addItem: "Lisää kohde",
        checkItem: "Tarkista kohde",
        item: "Kohde",
        exists: "On olemassa",
        doesNotExist: "Ei ole olemassa",
        topkList: "Suosituimmat kohteet",
        topkCount: "Lukumäärä",
        queryCount: "Kyselyiden määrä",
        queryResult: "Kyselyn tulos",
        addedSuccessfully: "Kohde lisätty onnistuneesti",
        deletedSuccessfully: "Kohde poistettu onnistuneesti",
        quantile: "Kvantiili",
        quantileResult: "Tulos",
        noItems: "Ei kohteita näytettäväksi",
        resetConfirm: "Nollataanko kaikki tiedot tässä T-Digest-rakenteessa?",
      },
      vectorset: {
        info: "Tiedot",
        elements: "Elementit",
        similarity: "Samankaltaisuushaku",
        searchByElement: "Hae elementin mukaan",
        searchByVector: "Hae vektorin mukaan",
        vectorValues: "Vektoriarvot",
        element: "Elementti",
        score: "Pistemäärä",
        count: "Lukumäärä",
        addElement: "Lisää elementti",
        attributes: "Attribuutit",
        noAttributes: "Ei attribuutteja",
        dimensions: "Ulottuvuudet",
        removeConfirm: "Poistetaanko tämä elementti VectorSet-rakenteesta?",
        noElements: "Ei elementtejä",
        filter: "Suodatin",
        searchComplete: "Haku valmis",
      }
    },
    treeControls: {
      settings: "Puun asetukset",
      expandAll: "Laajenna kaikki",
      collapseAll: "Kutista kaikki",
      level: "Taso",
      search: {
        search: "Etsi avaimista",
        clear: "Tyhjennä nykyinen haku tyhjäksi",
        placeholderClient: "Haku asiakkaan puolelta",
        placeholderServer: "Haku palvelimen puolelta",
        info: (opts) => "Asiakaspuolen haku tarkoittaa, että se vastaa hakusyötteen tekstiä. Palvelinpuolen haku tarkoittaa, että se on kuin haku näppäinmalleissa *{search-text}*. Suurille hakusarjoille on parempi käyttää palvelinpuolen hakua. Pienemmille hakusarjoille on parempi käyttää asiakaspuolen hakutilaa." + ` Jos avainten määrä on ohi ${opts?.maxLightKeysCount ?? 110000}, voit etsiä vain palvelimen puolelta.`,
        largeSetInfo: "Suuressa joukossa asiakaspuolen haku on poistettu käytöstä. joten tällä hetkellä vain palvelinpuolen haku on mahdollista.",
        infoDetails: "Jos haluat tietää, miten haku toimii, tarkista asetukset"
      },
      pager: {
        next: "Seuraavaksi",
        prev: "Edellinen",
        first: "Ensin",
        last: "Viimeinen"
      }
    }
  },
  time: {
    years: "vuotta",
    months: "kuukautta",
    days: "päivää",
    year: "vuosi",
    month: "kuukausi",
    day: "päivä",
    second: "sekunti",
    seconds: "sekuntia",
    minute: "minuutti",
    minutes: "minuuttia",
    hour: "tunti",
    hours: "tuntia"
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
    bloom: "Bloom suodatin",
    cuckoo: "Cuckoo suodatin",
    topk: "Top-K",
    cms: "Count-Min Sketch",
    tdigest: "T-Digest",
    vectorset: "VectorSet",
  }
};
module.exports = strings;
