const strings = {
  error: {
    cleared_license: "Leseni imesafishwa",
    invalid_license: "Leseni batili",
    license_max_devices_reached: "Idadi ya juu ya vifaa imefikiwa",
    license_readonly: "Leseni inaweza kubadilishwa kutoka kwenye terminal ya seva pekee.",
    server_error: "Hitilafu ya seva, tafadhali jaribu tena"
  },
  title: {
    donate: "Changia",
    jsonRecursive: "Kupanua majani yote",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "Unaweza kuchagua muunganisho wa Redis kutoka kwenye menyu ya chini kushoto.",
    statistics: "Takwimu",
    error: "Hitilafu",
    connectingRedis: "Inaunganisha na Redis ...",
    socketioConnectError: "Hitilafu ya Socket.IO",
    db: "DB",
    server: "Seva",
    clients: "Wateja",
    memory: "Kumbukumbu",
    persistence: "Uhifadhi",
    stats: "Takwimu",
    replication: "Urudufishaji",
    cpu: "CPU",
    cluster: "Nguzo",
    modules: "Moduli",
    errorstats: "Takwimu za makosa",
    commandstats: "Takwimu za amri",
    latencystats: "Takwimu za ucheleweshaji",
    keysizes: "Ukubwa wa funguo",
    threads: "Nyuzi",
  },
  confirm: {
    dropIndex: "Una uhakika unataka kufuta faharasa hii?",
    uploadBuffer: "Una uhakika wa kupakia data hii ya binary?",
    uploadBufferDone: "Data ya binary imepakiwa",
    uploadBufferDoneAndSave: "Data ya binary imepakiwa na kuhifadhiwa kwenye seva",
    title: "Thibitisha",
    alert: "Tahadhari",
    info: "Taarifa",
    deleteListItem: "Una uhakika wa kufuta kipengee hiki cha orodha?",
    deleteHashKey: "Una uhakika wa kufuta kipengee hiki cha ufunguo wa hash?",
    deleteStreamTimestamp: "Una uhakika wa kufuta muhuri huu wa wakati wa mkondo?",
    deleteSetMember: "Una uhakika wa kufuta mwanachama huyu wa seti?",
    deleteZSetMember: "Una uhakika wa kufuta mwanachama huyu wa seti iliyopangwa?",
    deleteConnection: "Thibitisha",
    deleteConnectionText: "Una uhakika wa kufuta muunganisho huu wa Redis?",
    deleteNode: "Una uhakika wa kufuta nodi hii ya Redis?",
    deleteAllKeys: opts => {
      return `Futa mti huu na funguo zake zote (${opts.key})?`;
    },
    socketioConnectError: "Socket.IO haiwezi kuunganisha na seva, unaweza kupakia upya na kujaribu kutatua hitilafu ya muunganisho mwenyewe, mteja hajui jinsi ya kutatua peke yake.",
    socketioAuthRequired: "Idhini ya Socket.IO inahitajika. Tafadhali thibitisha na HTTP Basic Auth (jina la mtumiaji/nenosiri) na upakia upya.",
    deleteKey: "Una uhakika wa kufuta ufunguo huu?",
    rename: {
      title: "Una uhakika wa kubadilisha jina la ufunguo huu?",
      textContent: "Hatua hii inabadilisha jina la ufunguo kwa kudumu.",
      placeholder: "Ufunguo wa Redis (lazima)"
    },
    ttl: {
      title: "Una uhakika unataka kubadilisha TTL ya ufunguo huu?",
      textContent: "Kubadilisha TTL kunasasisha muda wa kuishi wa ufunguo huu. Acha tupu ili kuhifadhi ufunguo huu milele.",
      placeholder: "TTL ya ufunguo wa Redis (nambari kamili au tupu)",
      placeholderPlaceholder: "Tupu inamaanisha unaendelea milele; vinginevyo ingiza nambari kamili.",
      convertTextToTime: "Badilisha maandishi kuwa wakati",
      convertTextToTimePlaceholder: "Mfano 1d itakuwa 86400"
    },
    license: {
      title: "Weka leseni",
      textContent: "If you want to use paid features, please contact support@corifeus.com to request a license. Pricing is Pro 400 HUF/month (\u20ac1/month) or 4,000 HUF/year (\u20ac10/year), and Enterprise 1,200 HUF/month (\u20ac3/month) or 12,000 HUF/year (\u20ac30/year). Yearly is 10x monthly. With 27% VAT, totals are Pro 500 HUF/month (\u20ac1.27/month) or 5,100 HUF/year (\u20ac12.70/year), Enterprise 1,500 HUF/month (\u20ac3.81/month) or 15,200 HUF/year (\u20ac38.10/year). License validation requires internet access. Default license includes 5 seats. If you need more seats, contact us at support@corifeus.com.",
      placeholder: "Ufunguo wa leseni"
    }
  },
  language: {
    // When you translate the english name, keep the Language in English
    // eg. Inglés / English
    bg: "Kibulgaria / Bulgarian",
    cs: "Kicheki / Czech",
    de: "Kijerumani / German",
    el: "Kigiriki / Greek",
    en: "Kiingereza / English",
    es: "Kihispania / Spanish",
    fr: "Kifaransa / French",
    hu: "Kihungari / Hungarian",
    it: "Kiitaliano / Italian",
    ja: "Kijapani / Japanese",
    nl: "Kiholanzi / Dutch",
    pl: "Kipolandi / Polish",
    "pt-PT": "Kireno / Portuguese",
    ro: "Kiromania / Romanian",
    ru: "Kirusi / Russian",
    sk: "Kislovaki / Slovak",
    sr: "Kiserbia / Serbian",
    sv: "Kiswidi / Swedish",
    tr: "Kituruki / Turkish",
    uk: "Kiukrania / Ukrainian",
    zn: "Kichina / Chinese",
    ar: "Kiarabu / Arabic",
    az: "Kiazabaijani / Azerbaijani",
    be: "Kibelarusi / Belarusian",
    bn: "Kibengali / Bengali",
    da: "Kidenmaki / Danish",
    et: "Kiestonia / Estonian",
    fi: "Kifini / Finnish",
    fil: "Kifilipino / Filipino",
    he: "Kiebrania / Hebrew",
    hr: "Kikroeshia / Croatian",
    hy: "Kiarmenia / Armenian",
    id: "Kiindonesia / Indonesian",
    ka: "Kijojia / Georgian",
    kk: "Kikazaki / Kazakh",
    km: "Kikambodia / Khmer",
    ko: "Kikorea / Korean",
    ky: "Kikirigizi / Kyrgyz",
    lt: "Kilithuania / Lithuanian",
    mk: "Kimasedonia / Macedonian",
    ms: "Kimalei / Malay",
    ne: "Kinepali / Nepali",
    no: "Kinorwe / Norwegian",
    "pt-BR": "Kireno (Brazili) / Portuguese (Brazil)",
    sl: "Kislovenia / Slovenian",
    tg: "Kitajiki / Tajik",
    th: "Kithai / Thai",
    vi: "Kivietinamu / Vietnamese",
    "zh-HK": "Kichina (Hong Kong) / Chinese (Hong Kong)",
    "zh-TW": "Kichina (Taiwan) / Chinese (Taiwan)",
    sw: "Kiswahili / Swahili",
    si: "Kisinhala / Sinhala",
    ta: "Kitamili / Tamil",
    bs: "Kibosnia / Bosnian"
  },
  intention: {
    copy: "Nakili",
    downloadBuffer: "Pakua binary",
    setBuffer: "Pakia binary",
    exportKeys: "Hamisha funguo",
    exportAllKeys: (opts) => `Hamisha funguo zote ${opts.count}`,
    exportSearchResults: (opts) => `Hamisha matokeo ${opts.count}`,
    importKeys: "Ingiza funguo",
    saveWithFormatJson: "Hifadhi na muundo",
    formatJson: "Umbiza Json",
    wrap: "Funga",
    unwrap: "Fungua",
    downloadJson: "Pakua JSON",
    pubsubMonitor: "Mfuatiliaji wa PubSub",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "Lugha / Language",
    ok: "Sawa",
    addKey: "Ongeza kwa ufunguo huu",
    addKeyRoot: "Ongeza ufunguo wa msingi",
    reloadKey: "Pakia upya ufunguo",
    reload: "Pakia upya",
    close: "Funga",
    commands: "Amri",
    view: "Tazama",
    statistics: "Takwimu",
    refresh: "Onyesha upya",
    pause: "Simamisha",
    resume: "Endelea",
    clear: "Futa",
    rename: "Badilisha jina",
    main: "Hifadhidata",
    cancel: "Ghairi",
    theme: "Mandhari",
    github: "GitHub",
    githubRepo: "Hifadhi",
    githubRelease: "Matoleo",
    githubChangelog: "Kumbukumbu ya mabadiliko",
    info: "Info",
    settings: "Mipangilio",
    connect: "Unganisha",
    disconnect: "Tenganisha",
    overview: "Muhtasari",
    console: "Konsoli",
    noConnections: "Hakuna muunganisho, ongeza muunganisho kwenye menyu ya mipangilio.",
    noConnectionsInSettings: "Hakuna muunganisho, unaweza kuongeza MUUNGANISHO MPYA hapo juu.",
    connectionAdd: "Muunganisho mpya",
    addGroup: "Ongeza kundi",
    extend: "Panua",
    collapse: "Kunja",
    add: "Ongeza",
    edit: "Hariri",
    save: "Hifadhi",
    ttl: "Weka TTL",
    license: "Weka leseni",
    delete: "Futa",
    remove: "Ondoa",
    sure: "Hakika",
    testConnection: "Jaribu muunganisho",
    getKey: "Inapakia ufunguo wa Redis na data inayohusiana ...",
    jsonViewShow: "Onyesha JSON",
    jsonViewEditor: "Hariri JSON",
    quickConsole: "Konsoli ya Haraka",
  },
  label: {
    id: {
      nodeId: 'Kitambulisho cha Nodi',
      id: "Kitambulisho cha Muunganisho",
      info: "Ikiwa hutaki kubadilisha mali za: sshPassword, sshPrivateKey, password, tlsCrt, tlsKey, tlsCa, tafadhali ingiza Kitambulisho cha muunganisho kwenye mali hizo ili kuhifadhi thamani za mali. Ikiwa unataka mantiki sawa katika nenosiri la nodi, basi ingiza Kitambulisho cha nodi kwenye nenosiri la nodi."
    },
    secureFeature: 'Ikiwa unaona thamani inayoanza na P3X na inaonekana sawa, ni kipengele cha usalama. Ili kubadilisha mipangilio, badilisha mipangilio hii na tupu au kitu kingine na itahifadhiwa. Ikiwa haubadilishi mipangilio, mipangilio itabaki kama ilivyo kwenye seva.',
    aiTranslating: "Translating...",
    aiSettings: "Mipangilio ya AI",
    aiGroqApiKey: "Ufunguo wa API Groq",
    aiGroqApiKeyInfo: "Hiari. Ufunguo wako wa API Groq kwa utendaji bora. Pata ufunguo bila malipo kutoka",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "Ufunguo wa API AI umehifadhiwa",
    aiGroqApiKeyInvalid: "Invalid Groq API key",
    aiGroqApiKeyNotSet: "Haijawekwa (chaguo-msingi la seva)",
    aiEnabled: "AI Enabled",
    aiEnabledYes: "Yes",
    aiEnabledNo: "No",
    aiRouteViaNetwork: "Route via network.corifeus.com",
    aiRoutingDirect: "Queries go directly to Groq using your own API key, bypassing network.corifeus.com.",
    aiRoutingNetwork: "AI queries are routed through network.corifeus.com. If you have your own free Groq API key, you can turn off this switch to route directly to Groq without network.corifeus.com.",
    ssh: {
      on: 'SSH imewashwa',
      off: 'SSH imezimwa',
      sshHost: 'Mwenyeji wa SSH',
      sshPort: 'Bandari ya SSH',
      sshUsername: 'Jina la mtumiaji wa SSH',
      sshPassword: 'Nenosiri la SSH',
      sshPrivateKey: 'Ufunguo wa faragha wa SSH'
    },
    isBuffer: opts => `[object ArrayBuffer] inamaanisha kuwa thamani ni data ya binary au thamani ni kubwa kuliko ${opts.maxValueAsBuffer}`,
    streamValue: `Uga na thamani ya mkondo ni mstari mmoja. Mfano: field1 value1 "field 2" "value 2"`,
    streamTimestampId: `'*' inamaanisha kuzalishwa kiotomatiki au ainisho kama <millisecondsTime>-<sequenceNumber>`,
    unableToLoadKey: ({
      key
    }) => {
      return `Haiwezekani kupakia ufunguo huu: ${key}. Huenda ufunguo umefutwa. Hitilafu halisi iko kwenye konsoli.`;
    },
    bigJson: "Kitu hiki cha JSON kina zaidi ya 10 kb, kwa hivyo hakikisha unajua unachofanya, kwa sababu baadhi ya kazi zinaweza kuwa polepole katika uonyeshaji.",
    addNode: "Ongeza nodi",
    validateJson: "Thibitisha JSON",
    reducedFunction: `Utendaji uliopunguzwa`,
    tooManyKeys: opts => {
      return `Kwa kazi kamili za juu, funguo zinazoruhusiwa ni ${opts.maxLightKeysCount} jumla. Hifadhidata hii ina zaidi ya funguo zinazoruhusiwa jumla ${opts.count}. Upangaji wa funguo na taarifa za ziada za mti wa mapambo zimezimwa. Utafutaji unafanyika kwenye seva badala ya utafutaji wa mteja.`;
    },
    redisCommandNotFound: "Hakuna amri ya Redis inayolingana iliyopatikana ...",
    treeKeyStore: `Upangaji (ulinganisho wa asili) unatekelezwa kwenye mteja yaani kivinjari, ambayo inamaanisha ina adhabu kwa seti kubwa, kama zaidi ya funguo 10k, inaweza kuongeza muda kidogo kwa uonyeshaji wa ukurasa. Hakuna upangaji wa funguo katika Redis, ni kama hii tu.`,
    socketIoTimeout: options => {
      return `Socket.IO imekwisha muda kwa ombi hili (upeo ${options.timeout / 1000} sekunde) ...`;
    },
    resizerInfo: options => {
      return `Upana wa chini wa paneli ya kushoto au kulia ni ${options.width}px`;
    },
    jsonViewNotParsable: "Thamani hii haiwezi kuchambuliwa kama JSON  ",
    ttlTitle: "Weka TTL kwa sekunde",
    passwordSecure: "Nenosiri linaweza kuwa tupu, lakini bado litaonyesha herufi, hii ni kipengele cha usalama.",
    tlsWithoutCert: "Wezesha TLS bila cheti cha ziada",
    tlsRejectUnauthorized: "Kataa cheti kisichoidhinishwa",
    tlsSecure: "Ikiwa unaona usanidi wa TLS unaoanza na P3X au mipangilio yote ya TLS inaonekana sawa, ni kipengele cha usalama. Ili kubadilisha mipangilio, badilisha mipangilio hii na tupu au kitu kingine na itahifadhiwa. Ikiwa haubadilishi mipangilio ya TLS, mipangilio itabaki kama ilivyo kwenye seva.",
    treeSeparatorEmpty: "Ikiwa kitenganishi cha mti ni tupu, mti hautakuwa na nodi zilizopachikwa, orodha safi tu",
    treeSeparatorEmptyNote: "Hakuna nodi zilizopachikwa, orodha safi tu",
    welcomeConsole: "Karibu kwenye Konsoli ya Redis",
    welcomeConsoleInfo: "Historia ya Mshale JUU au CHINI imewezeshwa",
    redisListIndexInfo: "Tupu kuongeza, -1 kuongeza mbele au hifadhi kwenye nafasi iliyoonyeshwa.",
    console: "Konsoli",
    connectiondAdd: "Ongeza muunganisho",
    connectiondEdit: "Hariri muunganisho",
    connectiondView: "Tazama muunganisho",
    connections: "Muunganisho",
    licenseInfo: "Leseni",
    licenseEditable: "Leseni inaweza kuhaririwa",
    licenseEditableYes: "Ndiyo",
    licenseEditableNo: "Hapana",
    licenseTerminalOnly: "Leseni inaweza kusanidiwa kutoka kwenye terminal ya seva pekee.",
    licenseTierPolicyTitle: "Sera ya ngazi",
    licenseTierPolicyText: "<h4>Bure</h4>Redis UI ya msingi pekee; hakuna uhandisi wa SSH, hakuna hali ya muunganisho wa Kusoma tu, hakuna Nguzo/Mlinzi, hakuna Kuhariri JSON/Kupakia binary/Kupakua binary, hakuna ReJSON.<br/><strong>Bei: 0 HUF/mwezi (\u20ac0/mwezi).</strong><br/><br/><h4>Pro</h4>Uhandisi wa SSH, hali ya muunganisho wa Kusoma tu (ikiwa ni pamoja na --readonly-connections/-r), Kuhariri JSON, Kupakia binary, Kupakua binary, ReJSON.<br/><strong>Bei ya msingi: 400 HUF/mwezi (\u20ac1/mwezi) au 4,000 HUF/mwaka (\u20ac10/mwaka).</strong><br/><strong>Jumla na 27% VAT: 500 HUF/mwezi (\u20ac1.27/mwezi) au 5,100 HUF/mwaka (\u20ac12.70/mwaka).</strong><br/><br/><h4>Enterprise</h4>Uhandisi wa SSH, Nguzo na Mlinzi, pamoja na Kuhariri JSON, Kupakia binary, Kupakua binary, ReJSON; --readonly-connections/-r pia inafanya kazi.<br/><strong>Bei ya msingi: 1,200 HUF/mwezi (\u20ac3/mwezi) au 12,000 HUF/mwaka (\u20ac30/mwaka).</strong><br/><strong>Jumla na 27% VAT: 1,500 HUF/mwezi (\u20ac3.81/mwezi) au 15,200 HUF/mwaka (\u20ac38.10/mwaka).</strong><br/><br/><h4>Kanuni ya kila mwaka</h4>Bei ya kila mwaka ni 10x bei ya kila mwezi.<br/><br/><h4>Viti</h4>Leseni ya kawaida inajumuisha viti 5. Ikiwa unahitaji viti zaidi, wasiliana nasi kwa <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><br/><h4>Jaribio la Enterprise</h4>Siku 10 bure kwa mtu yeyote aliye na anwani halisi ya barua pepe (sio barua pepe ya majaribio).<br/><hr/><h4>Taarifa za malipo kwa barua pepe</h4>Jina, Barua pepe ya malipo, Msimbo wa nchi, Msimbo wa posta, Jiji, Anwani, Kitambulisho cha VAT (hiari).<br/><br/><h4>Malipo</h4>Malipo ya PayPal yanapatikana kwa HUF (forint) pekee; baada ya kutuma pesa @ <a href='https://paypal.me/corifeus'>https://paypal.me/corifeus</a> nitakutumia ankara. Malipo yote hayarudishwi.<br/><br/><h4>VAT</h4>VAT inaongezwa kwenye bei (27% nchini Hungaria).<br/><hr/><h4>Mawasiliano</h4>Ikiwa unataka kusema habari au una swali, wasiliana na <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><hr/><h4>Lugha</h4>Ankara na mawasiliano ya barua pepe ya leseni ni kwa Kiingereza. Sarafu ya ankara ni HUF.<br/><hr/><h4>Kumbuka</h4>Uthibitishaji wa leseni unahitaji upatikanaji wa mtandao.",
    licenseState: "Hali",
    licenseStateActive: "Hai",
    licenseStateInactive: "Haifanyi kazi",
    licenseStateNoLicense: "Hakuna leseni",
    licenseKeyMasked: "Ufunguo uliohifadhiwa",
    licenseTier: "Ngazi",
    licenseValid: "Halali",
    licenseStatus: "Hali ya leseni",
    licenseReason: "Sababu",
    licenseCheckedAt: "Imeangaliwa saa",
    licenseStartsAt: "Inaanza saa",
    licenseExpiresAt: "Inaisha saa",
    licenseDaysLeft: "Siku zilizobaki",
    licenseMaxDevices: "Vifaa vya juu",
    licenseActiveDevices: "Vifaa vilivyo hai",
    licenseActiveDevicesInfo: "Ikiwa kifaa hakitumiki tena, kiti chake kinatolewa kiotomatiki baada ya dakika 75.",
    licenseCustomerEmail: "Barua pepe ya mteja",
    licenseFeatures: "Vipengele",
    licenseFeaturesEmpty: "Hakuna vipengele vya ziada",
    licenseFeatureReadonlyMode: "Hali ya muunganisho wa kusoma tu",
    licenseFeatureReadonlyConnectionsFlag: "Muunganisho wa kusoma tu (--readonly-connections/-r)",
    licenseFeatureSsh: "Uhandisi wa SSH",
    licenseFeatureCluster: "Muunganisho wa nguzo",
    licenseFeatureSentinel: "Muunganisho wa mlinzi",
    licenseFeatureReJSON: "ReJSON (aina ya data ya JSON)",
    keysSort: {
      on: "Upangaji wa funguo umewashwa",
      off: "Upangaji wa funguo umezimwa"
    },
    cluster: {
      on: "Nguzo imewashwa",
      off: "Nguzo imezimwa"
    },
    sentinel: {
      on: "Mlinzi amewashwa",
      off: "Mlinzi amezimwa",
      name: "Jina la mlinzi"
    },
    readonly: {
      on: "Kusoma tu kumewashwa",
      off: "Kusoma tu kumezimwa"
    },
    proSshOnly: "SSH inapatikana katika Pro au Enterprise.",
    proReadonlyOnly: "Hali ya muunganisho wa kusoma tu inapatikana katika Pro au Enterprise.",
    enterpriseClusterSentinelOnly: "Nguzo na Mlinzi zinapatikana katika Enterprise pekee.",
    theme: {
      light: "Mwanga",
      dark: "Giza enterprise",
      darkNeu: "Giza",
      darkoBluo: "Darko bluo",
      enterprise: "Enterprise",
      redis: "Redis",
      matrix: "Matrix"
    },
    connected: opts => {
      return `Imeunganishwa: ${opts.name}`;
    },
    tree: "Mti",
    askAuth: "Omba idhini",
    keyboardShortcuts: "Keyboard Shortcuts",
    about: "About",
    supportedLanguages: "Supported Languages",
    version: "Version",
    redisVersion: "Redis Version",
    modules: "Moduli",
    shortcutRefresh: "Refresh",
    shortcutSearch: "Focus Search",
    shortcutNewKey: "New Key",
    shortcutDisconnect: "Tenganisha",
    themeAuto: "Auto (system)",
    shortcutCommandPalette: "Command Palette",
    commandPalette: "Command Palette",
    noResults: "No results",
    redisCommandsReference: "Amri za Redis",
    ungrouped: "Bila kikundi",
    grouped: "Grouped",
    connectFirst: "Unganisha kwanza kwa seva ya Redis",
    searchLanguage: "Tafuta lugha...",
    exportProgress: "Kuhamisha funguo...",
    importProgress: "Kuingiza funguo...",
    importPreview: "Hakiki",
    importOverwrite: "Andika juu",
    importSkip: "Ruka",
    importConflict: "Ikiwa ufunguo tayari upo:",
    noKeysToExport: "Hakuna funguo za kuhamisha",
    time: "Muda",
    loading: "Inapakia...",
    autoRefresh: "Otomatiki",
    exportSearchHint: "Kuhamisha funguo zinazolingana na utafutaji wa sasa pekee",
    importSearchHint: "Uingizaji unatumika kwa hifadhidata nzima, si matokeo ya utafutaji pekee",
    importNoKeys: "Hakuna funguo zilizopatikana kwenye faili",
  },
  status: {
    dataCopied: "Data iko kwenye ubao wa kunakili",
    licenseSaved: "Leseni imehifadhiwa",
    exportDone: "Uhamishaji umekamilika",
    indexCreated: "Faharasa imeundwa",
    indexDropped: "Faharasa imefutwa",
    importDone: (opts) => `Uingizaji umekamilika: ${opts.created} vimeundwa, ${opts.skipped} vimerukwa, ${opts.errors} makosa`,
    nodeRemoved: "Nodi imeondolewa",
    keyIsNotExisting: "Ufunguo huu unaweza kuwa umefutwa au umekwisha muda.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "Hakuna ufunguo";
      } else if (opts.keyCount === 1) {
        return "Ufunguo 1";
      } else {
        return `Funguo ${opts.keyCount}`;
      }
    },
    treeExpandAll: "Panua majani yote ya mti. Operesheni hii inaweza kuwa ghali na inaweza kuchukua muda ...",
    noRedisKeys: "Hakuna funguo katika hifadhidata hii.",
    redisConnected: "Redis imeunganishwa kwa mafanikio",
    reloadingDataInfo: "Inapakia upya taarifa za data za Redis",
    added: "Imeongezwa",
    saved: "Imesasishwa",
    cancelled: "Imeghairiwa",
    deleted: "Imefutwa",
    savedRedis: "Data ya Redis imehifadhiwa",
    redisDisconnected: opts => {
      return `Muunganisho wa sasa ulikuwa na hitilafu: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `Faharasa ya db imewekwa kuwa ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `Ufunguo wa mti umefutwa (${opts.key}).`;
    },
    deletedKey: opts => {
      return `Ufunguo umefutwa (${opts.key}).`;
    },
    renamedKey: "Ufunguo huu umebadilishwa jina",
    ttlChanged: "TTL ya ufunguo huu imebadilishwa",
    notInteger: "Ingizo hili si nambari kamili",
    persisted: "Ufunguo huu umehifadhiwa milele",
    set: "Ufunguo umewekwa/imeongezwa"
  },
  code: {
    "delete-connection": "Muunganisho huu umefutwa, kwa hivyo umetenganishwa na mfano huu wa Redis.",
    "save-connection": "Muunganisho huu umebadilishwa, kwa hivyo umetenganishwa na mfano huu wa Redis. Unaweza kuunganisha tena.",
    "readonly-connections": "Muunganisho wa kuongeza/kuhifadhi/kufuta ni wa kusoma pekee!",
    "readonly-connection-mode": "Muunganisho huu ni wa hali ya kusoma pekee!",
    "list-out-of-bounds": "Faharasa hii ya orodha iko nje ya mipaka",
    "donation-ware-feature": "Kipengele hiki kipo katika toleo la mchango.",
    "feature-pro-readonly-required": "Hali ya muunganisho wa kusoma pekee inahitaji leseni ya Pro au Enterprise.",
    "feature-pro-ssh-required": "Uhandisi wa SSH unahitaji leseni ya Pro au Enterprise.",
    "feature-enterprise-cluster-sentinel-required": "Nguzo na Mlinzi zinahitaji leseni ya Enterprise.",
    "feature-pro-json-binary-required": "Kuhariri JSON, Kupakia binary na Kupakua binary zinahitaji leseni ya Pro au Enterprise.",
    "feature-pro-rejson-required": "ReJSON (aina ya data ya JSON) inahitaji leseni ya Pro au Enterprise.",
    "invalid-json-value": "Thamani si JSON halali.",
    "http_auth_required": "Idhini inahitajika: tafadhali thibitisha na HTTP Basic Auth na upakia upya.",
    "auto-connection-failed": "Huenda muunganisho uliondolewa na muunganisho wa kiotomatiki umeshindwa kwa sababu hiyo.",
    invalid_console_command: "Amri hii haifanyi kazi kupitia GUI."
  },
  licenseReason: {
    LICENSE_VALID: "Leseni ni halali",
    LICENSE_INVALID: "Leseni ni batili",
    LICENSE_MISSING: "Hakuna ufunguo wa leseni uliowekwa",
    LICENSE_DISABLED: "Leseni imezimwa katika usanidi wa seva",
    LICENSE_NOT_FOUND: "Leseni haikupatikana",
    LICENSE_EXPIRED: "Leseni imekwisha muda",
    LICENSE_CLEARED: "Ufunguo wa leseni umesafishwa",
    LICENSE_MAX_DEVICES_REACHED: "Idadi ya juu ya viti vya vifaa imefikiwa",
    PRODUCT_MISMATCH: "Bidhaa ya leseni hailingani"
  },
  licenseStatusValue: {
    active: "Hai",
    deleted: "Imefutwa",
    all: "Zote",
    expired: "Imekwisha muda",
    missing: "Inakosekana",
    inactive: "Haifanyi kazi"
  },
  form: {
    error: {
      required: "Inahitajika",
      port: "Bandari ni kati ya 1-65535",
      invalid: "Fomu ni batili"
    },
    connection: {
      label: {
        name: "Jina",
        group: "Group",
        host: "Jina la mwenyeji",
        port: "Bandari",
        password: "Nenosiri",
        username: "Jina la mtumiaji"
      }
    },
    treeSettings: {
      maxValueDisplay: "Urefu wa juu wa kuonyesha thamani",
      maxValueDisplayInfo: "Ikiwa imewekwa 0, onyesha thamani kamili. Ikiwa kubwa kuliko 0, punguza hadi urefu huu. Ikiwa -1: kwa herufi, ficha thamani hadi kuhariri; kwa aina nyingine, onyesha maudhui kamili.",
      maxKeys: "Idadi ya juu ya funguo",
      maxKeysInfo: "Ili GUI isishindwe, tunapunguza idadi ya juu ya funguo.",
      keyCount: () => {
        return `Idadi ya funguo: ${p3xr.state.keysRaw.length}`;
      },
      label: {
        animation: "Tumia uhuishaji",
        noAnimation: "Hakuna uhuishaji",
        jsonFormatTwoSpace: "Umbiza JSON na nafasi 2",
        jsonFormatFourSpace: "Umbiza JSON na nafasi 4",
        formName: "Mipangilio ya Redis",
        searchModeClient: "Hali ya utafutaji wa mteja",
        searchModeServer: "Hali ya utafutaji wa seva",
        searchModeStartsWith: "Tafuta na hali ya kuanza na",
        searchModeIncludes: "Tafuta inajumuisha hali"
      },
      field: {
        treeSeparator: "Kitenganishi cha mti",
        treeSeparatorSelector: "Kichaguzi cha kitenganishi cha mti",
        page: "Idadi ya kurasa za mti",
        keyPageCount: "Idadi ya kurasa za funguo",
        keysSort: "Panga funguo",
        searchMode: "Hali ya utafutaji",
        searchModeStartsWith: "Utafutaji huanza na / inajumuisha"
      },
      error: {
        keyPageCount: "Idadi ya kurasa za funguo lazima iwe nambari kamili kati ya 5 - 100",
        page: "Idadi ya kurasa lazima iwe nambari kamili kati ya 10 - 5000",
        maxValueDisplay: "Thamani ya juu ya kuonyesha lazima iwe nambari kamili kati ya -1 na 32768",
        maxKeys: "Thamani ya juu ya idadi ya funguo lazima iwe nambari kamili kati ya 100 na 100000"
      }
    },
    key: {
      label: {
        formName: {
          add: "Ongeza ufunguo mpya wa Redis",
          edit: "Hariri ufunguo wa Redis",
          append: "Ongeza kwa ufunguo uliopo wa Redis"
        }
      },
      field: {
        streamTimestamp: "Muhuri wa wakati",
        key: "Ufunguo",
        type: "Aina",
        index: "Faharasa",
        hashKey: "Ufunguo wa Hash",
        score: "Alama",
        value: "Thamani"
      },
      error: {
        streamTimestamp: "Muhuri wa wakati unahitajika, ama muundo wa Redis au kama *",
        key: "Ufunguo ni, angalau, herufi moja",
        hashKey: "Ufunguo wa jedwali la hash ni angalau herufi moja",
        score: "Alama ya seti iliyopangwa inahitajika",
        value: "Thamani inahitajika"
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
      title: "Tafuta",
      index: "Faharasa",
      query: "Swali",
      results: "Matokeo",
      noIndex: "Hakuna faharasa",
      createIndex: "Unda faharasa",
      dropIndex: "Futa faharasa",
      indexInfo: "Maelezo ya faharasa",
      indexName: "Jina la faharasa",
      prefix: "Kiambishi awali cha ufunguo (hiari)",
      fieldName: "Jina la uga",
    },
    monitor: {
      title: "Ufuatiliaji",
      memory: "Kumbukumbu",
      opsPerSec: "Ops/sek",
      clients: "Wateja",
      blocked: "Imezuiwa",
      hitsMisses: "Kiwango cha hit",
      networkIo: "Mtandao I/O",
      slowLog: "Logi polepole",
      totalCommands: "Jumla",
      expired: "Imeisha muda",
      evicted: "Imefukuzwa",
      clientList: "Orodha ya wateja",
      topKeys: "Funguo kubwa zaidi kwa kumbukumbu",
      killClient: "Ua mteja",
      clientKilled: "Mteja ameondolewa",
      confirmKillClient: "Una uhakika unataka kusimamisha mteja huyu?",
      noKeys: "Hakuna funguo",
      noClients: "Hakuna wateja",
    },
    overview: {
      noConnected: "Hakuna muunganisho na Redis.",
      overviewClients: "Orodhesha wateja waliounganishwa kwa idadi ya wateja",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "Mteja 1";
        }
        return `Wateja ${opt.length}`;
      }
    },
    key: {
      label: {
        key: "Ufunguo",
        encoding: "Usimbaji",
        length: "Ukubwa",
        ttl: "TTL",
        ttlTitle: "Muda wa Kuishi",
        type: "Aina",
        ttlNotExpire: "haiishi",
        lengthString: "baiti",
        lengthItem: "vipengee",
        actions: "Vitendo"
      },
      list: {
        table: {
          index: "Faharasa",
          value: "Thamani"
        }
      },
      hash: {
        table: {
          hashkey: "Ufunguo wa Hash",
          value: "Thamani"
        }
      },
      set: {
        table: {
          value: "Mwanachama"
        }
      },
      zset: {
        table: {
          value: "Mwanachama",
          score: "Alama"
        }
      },
      stream: {
        table: {
          timestamp: "Kitambulisho cha Muhuri wa Wakati",
          field: "Uga",
          value: "Thamani"
        }
      }
    },
    treeControls: {
      settings: "Mipangilio ya mti",
      expandAll: "Panua yote",
      collapseAll: "Kunja yote",
      search: {
        search: "Tafuta kwenye funguo",
        clear: "Futa utafutaji wa sasa ili kuweka tupu",
        placeholderClient: "Tafuta upande wa mteja",
        placeholderServer: "Tafuta upande wa seva",
        info: "Utafutaji wa upande wa mteja unamaanisha kuwa unalingana na maandishi kwenye ingizo la utafutaji. Utafutaji wa upande wa seva unamaanisha kuwa ni utafutaji kama katika mifumo ya funguo kama *{search-text}*. Kwa seti kubwa za utafutaji, ni bora kutumia utafutaji wa upande wa seva. Kwa seti ndogo za utafutaji, ni bora kutumia hali ya utafutaji wa upande wa mteja." + ` Ikiwa idadi ya funguo ni zaidi ya ${p3xr.settings.maxLightKeysCount}, unaweza kutafuta tu upande wa seva.`,
        largeSetInfo: "Katika seti kubwa, utafutaji wa upande wa mteja umezimwa. kwa hivyo sasa hivi utafutaji wa upande wa seva pekee ndio unaowezekana.",
        infoDetails: "Ili kujua jinsi utafutaji unavyofanya kazi, tafadhali angalia mipangilio"
      },
      pager: {
        next: "Inayofuata",
        prev: "Iliyotangulia",
        first: "Ya kwanza",
        last: "Ya mwisho"
      }
    }
  },
  time: {
    loading: "Inapakia...",
    years: "miaka",
    months: "miezi",
    days: "siku",
    year: "mwaka",
    month: "mwezi",
    day: "siku"
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
