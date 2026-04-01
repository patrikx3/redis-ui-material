const strings = {
  error: {
    cleared_license: "Täytetty lisenssi",
    invalid_license: "Virheellinen lisenssi",
    license_max_devices_reached: "Laitepaikkojen enimmäismäärä saavutettu",
    license_readonly: "Lisenssi voidaan vaihtaa vain palvelinpäätteestä.",
    server_error: "Palvelinvirhe, yritä uudelleen"
  },
  title: {
    donate: "Lahjoita",
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
    threads: "Säikeet",
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
    socketioConnectError: "Socket.IO ei voi muodostaa yhteyttä palvelimeen, voit ladata uudelleen ja yrittää ratkaista yhteysvirheen itse, asiakas ei osaa ratkaista sitä itse.",
    socketioAuthRequired: "Socket.IO-valtuutus vaaditaan. Todennus komennolla HTTP Basic Auth (käyttäjänimi/salasana) ja lataa uudelleen.",
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
    },
    license: {
      title: "Aseta lisenssi",
      textContent: "If you want to use paid features, please contact support@corifeus.com to request a license. Pricing is Pro 400 HUF/month (€1/month) or 4,000 HUF/year (€10/year), and Enterprise 1,200 HUF/month (€3/month) or 12,000 HUF/year (€30/year). Yearly is 10x monthly. With 27% VAT, totals are Pro 500 HUF/month (€1.27/month) or 5,100 HUF/year (€12.70/year), Enterprise 1,500 HUF/month (€3.81/month) or 15,200 HUF/year (€38.10/year). License validation requires internet access. Default license includes 5 seats. If you need more seats, contact us at support@corifeus.com.",
      placeholder: "Lisenssiavain"
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
    importKeys: "Tuo avaimet",
    saveWithFormatJson: "Tallenna muodossa",
    formatJson: "Muotoile Json",
    wrap: "Kääri",
    unwrap: "Avaa pakkaus",
    downloadJson: "Lataa JSON",
    pubsubMonitor: "PubSub näyttö",
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
    license: "Aseta lisenssi",
    delete: "Poista",
    remove: "Poista",
    sure: "Toki",
    testConnection: "Testaa yhteys",
    getKey: "Ladataan Redis-avainta ja siihen liittyviä tietoja...",
    jsonViewShow: "Näyttö JSON",
    jsonViewEditor: "Muokkaa JSON",
    quickConsole: "Pikakonsoli",
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
    aiGroqApiKeyInvalid: "Invalid Groq API key",
    aiGroqApiKeyNotSet: "Ei asetettu (palvelimen oletus)",
    aiEnabled: "AI käytössä",
    aiEnabledYes: "Kyllä",
    aiEnabledNo: "Ei",
    aiRouteViaNetwork: "Route via network.corifeus.com",
    aiRoutingDirect: "Queries go directly to Groq using your own API key, bypassing network.corifeus.com.",
    aiRoutingNetwork: "AI queries are routed through network.corifeus.com. If you have your own free Groq API key, you can turn off this switch to route directly to Groq without network.corifeus.com.",
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
    licenseInfo: "Lisenssi",
    licenseEditable: "Lisenssi muokattavissa",
    licenseEditableYes: "Kyllä",
    licenseEditableNo: "Ei",
    licenseTerminalOnly: "Lisenssi voidaan määrittää vain palvelinpäätteestä.",
    licenseTierPolicyTitle: "Tasopolitiikka",
    licenseTierPolicyText: "<h4>Free</h4>core Redis UI only; no SSH tunneling, no Readonly connection mode, no Cluster/Sentinel, no Edit JSON/Upload binary/Download binary, no ReJSON.<br/><strong>Price: 0 HUF/month (€0/month).</strong><br/><br/><h4>Pro</h4>SSH tunneling, Readonly connection mode (including --readonly-connections/-r), Edit JSON, Upload binary, Download binary, ReJSON.<br/><strong>Base price: 400 HUF/month (€1/month) or 4,000 HUF/year (€10/year).</strong><br/><strong>Total with 27% VAT: 500 HUF/month (€1.27/month) or 5,100 HUF/year (€12.70/year).</strong><br/><br/><h4>Enterprise</h4>SSH tunneling, Cluster and Sentinel, plus Edit JSON, Upload binary, Download binary, ReJSON; --readonly-connections/-r also works.<br/><strong>Base price: 1,200 HUF/month (€3/month) or 12,000 HUF/year (€30/year).</strong><br/><strong>Total with 27% VAT: 1,500 HUF/month (€3.81/month) or 15,200 HUF/year (€38.10/year).</strong><br/><br/><h4>Yearly rule</h4>Yearly price is 10x the monthly price.<br/><br/><h4>Seats</h4>Default license includes 5 seats. If you need more seats, contact us at <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><br/><h4>Enterprise trial</h4>10 days free for anyone with a real existing email address (non-test email).<br/><hr/><h4>Billing info in e-mail</h4>Name, Billing e-mail, Country code, Postal code, City, Address, VAT ID (optional).<br/><br/><h4>Payment</h4>PayPal payment is available only in HUF (forint); after sending the money @ <a href='https://paypal.me/corifeus'>https://paypal.me/corifeus</a> I will send you an invoice. All payments are non-refundable.<br/><br/><h4>VAT</h4>VAT is added to the price (27% in Hungary).<br/><hr/><h4>Contact</h4>If you want to say hi or have a question, contact <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><hr/><h4>Language</h4>Invoice and license e-mail communication is in English. Invoice currency is HUF.<br/><hr/><h4>Note</h4>License validation requires internet access.",
    licenseState: "osavaltio",
    licenseStateActive: "Aktiivinen",
    licenseStateInactive: "Ei-aktiivinen",
    licenseStateNoLicense: "Ei lisenssiä",
    licenseKeyMasked: "Avain tallennettu",
    licenseTier: "Taso",
    licenseValid: "Voimassa",
    licenseStatus: "Lisenssin tila",
    licenseReason: "Syy",
    licenseCheckedAt: "Tarkastettu klo",
    licenseStartsAt: "Alkaa klo",
    licenseExpiresAt: "Päättyy klo",
    licenseDaysLeft: "Päiviä jäljellä",
    licenseMaxDevices: "Max laitteet",
    licenseActiveDevices: "Aktiiviset laitteet",
    licenseActiveDevicesInfo: "Jos laitetta ei enää käytetä, sen istuin vapautuu automaattisesti 75 minuutin kuluttua.",
    licenseCustomerEmail: "Asiakkaan sähköposti",
    licenseFeatures: "Ominaisuudet",
    licenseFeaturesEmpty: "Ei lisäominaisuuksia",
    licenseFeatureReadonlyMode: "Vain luku -yhteystila",
    licenseFeatureReadonlyConnectionsFlag: "Vain luku -liitännät (--readonly-connections/-r)",
    licenseFeatureSsh: "SSH tunnelointi",
    licenseFeatureCluster: "Cluster liitännät",
    licenseFeatureSentinel: "Sentinel liitännät",
    licenseFeatureReJSON: "ReJSON (JSON tietotyyppi)",
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
    proSshOnly: "SSH on saatavilla Pro- tai Enterprise-versiossa.",
    proReadonlyOnly: "Vain luku -yhteystila on käytettävissä Prossa tai Enterprisessa.",
    enterpriseClusterSentinelOnly: "Cluster ja Sentinel ovat saatavilla vain Enterprisessa.",
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
    loading: "Ladataan...",
    autoRefresh: "Auto",
    exportSearchHint: "Viedään vain nykyistä hakua vastaavat avaimet",
    importSearchHint: "Tuonti koskee koko tietokantaa, ei vain hakutuloksia",
    importNoKeys: "Tiedostosta ei löytynyt avaimia",
  },
  status: {
    dataCopied: "Tiedot ovat leikepöydällä",
    licenseSaved: "Lisenssi tallennettu",
    exportDone: "Vienti valmis",
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
    set: "Avain on asetettu/lisätty"
  },
  code: {
    "delete-connection": "Tämä yhteys poistettiin, joten yhteys tähän Redis-esiintymään on katkaistu.",
    "save-connection": "Tätä yhteyttä on muutettu, joten yhteys tähän Redis-instanssiin on katkennut. Voit muodostaa yhteyden uudelleen.",
    "readonly-connections": "Lisää/tallenna/poista yhteydet ovat vain luku -tilassa!",
    "readonly-connection-mode": "Tämä yhteys on vain luku -tilassa!",
    "list-out-of-bounds": "Tämä luettelohakemisto on rajojen ulkopuolella",
    "donation-ware-feature": "Tämä ominaisuus on mukana lahjoitusversiossa.",
    "feature-pro-readonly-required": "Vain luku -yhteystila vaatii Pro- tai Enterprise-lisenssin.",
    "feature-pro-ssh-required": "SSH tunnelointi vaatii Pro- tai Enterprise-lisenssin.",
    "feature-enterprise-cluster-sentinel-required": "Cluster ja Sentinel vaativat Enterprise-lisenssin.",
    "feature-pro-json-binary-required": "Muokkaa JSON, lataa binaari ja lataa binaari vaatii Pro- tai Enterprise-lisenssin.",
    "feature-pro-rejson-required": "ReJSON (JSON-tietotyyppi) vaatii Pro- tai Enterprise-lisenssin.",
    "invalid-json-value": "Arvo ei ole kelvollinen JSON.",
    "http_auth_required": "Valtuutus vaaditaan: todenna HTTP Basic Auth ja lataa uudelleen.",
    "auto-connection-failed": "Mahdollisesti yhteys katkesi ja automaattinen yhteys epäonnistui tämän vuoksi.",
    invalid_console_command: "Tämä komento ei toimi GUI:n kautta."
  },
  licenseReason: {
    LICENSE_VALID: "Lisenssi on voimassa",
    LICENSE_INVALID: "Lisenssi on virheellinen",
    LICENSE_MISSING: "Lisenssiavainta ei ole asetettu",
    LICENSE_DISABLED: "Lisenssi on poistettu käytöstä palvelimen asetuksissa",
    LICENSE_NOT_FOUND: "Lisenssiä ei löytynyt",
    LICENSE_EXPIRED: "Lisenssi on vanhentunut",
    LICENSE_CLEARED: "Lisenssiavain tyhjennettiin",
    LICENSE_MAX_DEVICES_REACHED: "Laitepaikkojen enimmäismäärä saavutettu",
    PRODUCT_MISMATCH: "Lisenssituote ei täsmää"
  },
  licenseStatusValue: {
    active: "Aktiivinen",
    deleted: "Poistettu",
    all: "Kaikki",
    expired: "Vanhentunut",
    missing: "Puuttuu",
    inactive: "Ei-aktiivinen"
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
      keyCount: () => {
        return `Avainten määrä: ${p3xr.state.keysRaw.length}`;
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
        value: "Arvo"
      },
      error: {
        streamTimestamp: "Aikaleima vaaditaan joko muodossa Redis tai muodossa *",
        key: "Avain on ainakin yksi merkki",
        hashKey: "Hajautustaulukon avain on vähintään yksi merkki",
        score: "Lajiteltu pistemäärä vaaditaan",
        value: "Arvo vaaditaan"
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
      noClients: "Ei asiakkaita",
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
      }
    },
    treeControls: {
      settings: "Puun asetukset",
      expandAll: "Laajenna kaikki",
      collapseAll: "Kutista kaikki",
      search: {
        search: "Etsi avaimista",
        clear: "Tyhjennä nykyinen haku tyhjäksi",
        placeholderClient: "Haku asiakkaan puolelta",
        placeholderServer: "Haku palvelimen puolelta",
        info: "Asiakaspuolen haku tarkoittaa, että se vastaa hakusyötteen tekstiä. Palvelinpuolen haku tarkoittaa, että se on kuin haku näppäinmalleissa *{search-text}*. Suurille hakusarjoille on parempi käyttää palvelinpuolen hakua. Pienemmille hakusarjoille on parempi käyttää asiakaspuolen hakutilaa." + ` Jos avainten määrä on ohi ${p3xr.settings.maxLightKeysCount}, voit etsiä vain palvelimen puolelta.`,
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
    loading: "Ladataan...",
    years: "vuotta",
    months: "kuukautta",
    days: "päivää",
    year: "vuosi",
    month: "kuukausi",
    day: "päivä"
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
