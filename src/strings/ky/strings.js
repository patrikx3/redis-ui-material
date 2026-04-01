const strings = {
  error: {
    cleared_license: "Тазаланган лицензия",
    invalid_license: "Жараксыз лицензия",
    license_max_devices_reached: "Түзмөктүн максималдуу орундарына жетти",
    license_readonly: "Лицензияны сервер терминалынан гана өзгөртүүгө болот.",
    server_error: "Сервер катасы, кайталап к��рүңүз"
  },
  title: {
    donate: "Кайрымдуулук кылуу",
    jsonRecursive: "Бардык жалбырактарды кеңейтүү",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "Төмөнкү сол менюдан туташуу үчүн Redis байланышын тандасаңыз болот.",
    statistics: "Статистика",
    error: "Ката",
    connectingRedis: "Redis менен туташууда ...",
    socketioConnectError: "Socket.IO катасы",
    db: "DB",
    server: "Server",
    clients: "Кардарлар",
    memory: "Эстутум",
    persistence: "Туруктуулук",
    stats: "Статистика",
    replication: "Репликация",
    cpu: "CPU",
    cluster: "Cluster",
    modules: "Модулдар",
    errorstats: "Ката статistикасы",
    commandstats: "Команда статistикасы",
    latencystats: "Кечigүү статistикасы",
    keysizes: "Ачкыч өлчөмдөрү",
    threads: "Жиптер",
  },
  confirm: {
    dropIndex: "Бул индексти жоюуга ишенесизби?",
    uploadBuffer: "Бул экилик берилиштерди жүктөйсүзбү?",
    uploadBufferDone: "бинардык маалыматтар жүктөлүп берилди",
    uploadBufferDoneAndSave: "бинардык маалыматтар жүктөлөт жана серверде сакталат",
    title: "ырастоо",
    alert: "Alert",
    info: "Маалымат",
    deleteListItem: "Бул тизмени чын эле жок кыласызбы?",
    deleteHashKey: "Бул хэш ачкычты чын эле жок кыласызбы?",
    deleteStreamTimestamp: "Бул агымдын убакыт белгисин чын эле жок кыласызбы?",
    deleteSetMember: "Бул топтомдун мүчөсүн чын эле жок кыласы��бы?",
    deleteZSetMember: "Бул иреттелген топтом мүчөсүн чын эле жок кыласызбы?",
    deleteConnection: "ырастоо",
    deleteConnectionText: "Бул Redis байланышын чын эле жок кыласызбы?",
    deleteNode: "Бул Redis түйүнүн чын эле жок кыласызбы?",
    deleteAllKeys: opts => {
      return `Бул даракты жана анын бардык ачкычтарын жок кылыңыз (${opts.key})?`;
    },
    socketioConnectError: "Socket.IO серверге туташа албайт, сиз кайра жүктөп, байланыш катасын өзүңүз чечип көрүңүз, кардар аны кантип чечүүнү билбейт.",
    socketioAuthRequired: "Socket.IO авторизациясы талап кылынат. Сураныч, HTTP Basic Auth (колдонуучунун аты/сырсөз) менен аныктыгын текшерип, кайра жүктөңүз.",
    deleteKey: "Бул ачкычты чын эле жок кыласызбы?",
    rename: {
      title: "Бул ачкычтын атын чын эле өзгөртөсүзбү?",
      textContent: "Бул аракет ачкычтын атын биротоло өзгөртөт.",
      placeholder: "Redis ачкычы (талап кылынат)"
    },
    ttl: {
      title: "Чын эле бул ачкычтын TTL өзгөрткүңүз келеби?",
      textContent: "TTL өзгөртүү бул ачкычтын жашоо убактысын жаңыртат. Бул ачкычты түбөлүккө сактоо үчүн бош калтырыңыз.",
      placeholder: "Redis ачкычынын TTL (бүтүн же бош)",
      placeholderPlaceholder: "бош дегенди билдирет, ал түбөлүккө сакталат; антпесе бүтүн санды киргизиңиз.",
      convertTextToTime: "Текстти убакытка айландыруу",
      convertTextToTimePlaceholder: "Мис. 1d 86400 болот"
    },
    license: {
      title: "Лицензия коюу",
      textContent: "If you want to use paid features, please contact support@corifeus.com to request a license. Pricing is Pro 400 HUF/month (€1/month) or 4,000 HUF/year (€10/year), and Enterprise 1,200 HUF/month (€3/month) or 12,000 HUF/year (€30/year). Yearly is 10x monthly. With 27% VAT, totals are Pro 500 HUF/month (€1.27/month) or 5,100 HUF/year (€12.70/year), Enterprise 1,500 HUF/month (€3.81/month) or 15,200 HUF/year (€38.10/year). License validation requires internet access. Default license includes 5 seats. If you need more seats, contact us at support@corifeus.com.",
      placeholder: "Лицензия ачкычы"
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
    copy: "Көч��рмө",
    downloadBuffer: "экилик жүктөө",
    setBuffer: "экилик жүктөө",
    exportKeys: "Ачкычтарды экспорттоо",
    exportAllKeys: (opts) => `Бардык ${opts.count} ачкычты экспорттоо`,
    exportSearchResults: (opts) => `${opts.count} натыйжаны экспорттоо`,
    importKeys: "Ачкычтарды импорттоо",
    saveWithFormatJson: "Формат менен сактоо",
    formatJson: "Json форматы",
    wrap: "Ороо",
    unwrap: "Оракты ачуу",
    downloadJson: "JSON жүктөп алыңыз",
    pubsubMonitor: "PubSub Монитор",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "Тил",
    ok: "макул",
    addKey: "Бул ачкычка кошуу",
    addKeyRoot: "Тамыр ачкычын кошуңуз",
    reloadKey: "Ачкычты кайра жүктөө",
    reload: "Кайра жүктөө",
    close: "Жабуу",
    commands: "Командалар",
    view: "Көрүү",
    statistics: "Статистика",
    refresh: "Жаңылоо",
    pause: "Тыным",
    resume: "Улантуу",
    clear: "Таза",
    rename: "Атын өзгөртүү",
    main: "Маалымат базасы",
    cancel: "Жокко чыгаруу",
    theme: "Тема",
    github: "GitHub",
    githubRepo: "Репозиторий",
    githubRelease: "Релиздер",
    githubChangelog: "Changelog",
    info: "Info",
    settings: "Орнотуулар",
    connect: "Туташуу",
    disconnect: "Ажыратуу",
    overview: "Обзор",
    console: "Консол",
    noConnections: "Туташуулар жок, жөндөөлөр менюсуна туташууну кошуңуз.",
    noConnectionsInSettings: "Туташуулар жок, жогорудагы ЖАҢЫ БАЙЛАНЫШ кошсоңуз болот.",
    connectionAdd: "Жаңы байланыш",
    addGroup: "Топ кошуу",
    extend: "Узартуу",
    collapse: "Жыйыштыруу",
    add: "кошуу",
    edit: "Түзөтүү",
    save: "Сактоо",
    ttl: "TTL орнотуңуз",
    license: "Лицензия коюу",
    delete: "Жок кылуу",
    remove: "Алып салуу",
    sure: "Албетте",
    testConnection: "Сыноо байланышы",
    getKey: "Redis ачкычы жана ага байланыштуу дайындар жүктөлүүдө ...",
    jsonViewShow: "JSON көрсөтүү",
    jsonViewEditor: "JSON түзөтүү",
    quickConsole: "Ыкчам консол",
  },
  label: {
    id: {
      nodeId: "Түйүн ID",
      id: "Туташуу ID",
      info: "Эгерде сиз төмөнкүлөрдүн касиеттерин өзгөртүүнү каалабасаңыз: sshPassword, sshPrivateKey, сырсөз, tlsCrt, tlsKey, tlsCa, касиеттин баалуулуктарын сактап калуу үчүн ошол пропорцияларга байланыштын идентификаторун киргизиңиз. Түйүндүн сырсөзүндө ошол эле логиканы кааласаңыз, түйүн сырсөзүнө түйүн идентификаторун киргизиңиз."
    },
    secureFeature: "Эгер сиз P3X менен башталган бир маанини көрсөңүз, анда бул коопсуз функция. Орнотууларды өзгөртүү үчүн, жөн гана бул жөндөөлөрдү бош же башка нерсе менен алмаштырыңыз жана алар сакталат. Эгер сиз орнотууларды өзгөртпөсөңүз, орнотуулар сервердегидей сакталып калат.",
    aiTranslating: "Translating...",
    aiSettings: "AI Орнотуулар",
    aiGroqApiKey: "Groq API ачкычы",
    aiGroqApiKeyInfo: "Милдеттүү эмес. Жакшыраак иштөө үчүн өзүңүздүн Groq API ачкычы. Акысыз ачкыч алыңыз",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "AI API ачкычы сакталды",
    aiGroqApiKeyInvalid: "Invalid Groq API key",
    aiGroqApiKeyNotSet: "Коюлган эмес (сервер демейки)",
    aiEnabled: "AI Enabled",
    aiEnabledYes: "Yes",
    aiEnabledNo: "No",
    aiRouteViaNetwork: "Route via network.corifeus.com",
    aiRoutingDirect: "Queries go directly to Groq using your own API key, bypassing network.corifeus.com.",
    aiRoutingNetwork: "AI queries are routed through network.corifeus.com. If you have your own free Groq API key, you can turn off this switch to route directly to Groq without network.corifeus.com.",
    ssh: {
      on: "SSH күйүк",
      off: "SSH өчүк",
      sshHost: "SSH Хост",
      sshPort: "SSH порту",
      sshUsername: "SSH колдонуучунун аты",
      sshPassword: "SSH сырсөз",
      sshPrivateKey: "SSH купуя ачкычы"
    },
    isBuffer: opts => `[object ArrayBuffer] мааниси экилик маалымат экенин же маани андан чоң экенин билдирет ${opts.maxValueAsBuffer}`,
    streamValue: `Агым талаасы жана мааниси oneliner болуп саналат. Мис.: талаа1 мааниси1 "талаа 2" "маани 2"`,
    streamTimestampId: `'*' автоматтык түрдө түзүлгөн же <millisecondsTime>-<sequenceNumber> катары спецификацияны билдирет`,
    unableToLoadKey: ({
      key
    }) => {
      return `Бул ачкыч жүктөлбөй жатат: ${key}. Мүмкүн, ачкыч өчүрүлгөн. Так ката консолдо.`;
    },
    bigJson: "Бул JSON объектиси 10 кбтан ашат, андыктан эмне кылып жатканыңызды билип алыңыз, анткени кээ бир функциялар жай рендеринг болушу мүмкүн.",
    addNode: "Түйүн кошуу",
    validateJson: "JSON текшерүү",
    reducedFunction: `Кыскартылган функция`,
    tooManyKeys: opts => {
      return `Толук максималдуу функциялар үчүн уруксат берилген баскычтардын бардыгы болуп саналат ${opts.maxLightKeysCount} сана. Бул маалымат базасында жалпысынан уруксат берилген ачкычтар бар ${opts.count}. Ачкычтарды сорттоо жана кошумча кооз дарак маалыматы өчүрүлгөн. Кардар издөөнүн ордуна издөө серверде гана жүрүп жатат.`;
    },
    redisCommandNotFound: "Redis буйрук дал келген жок ...",
    treeKeyStore: `Сорттоо (табигый салыштыруу) кардар, башкача айтканда, браузерде аткарылат, демек, чоң чоң топтомдор үчүн жаза бар, мисалы 10 миңден ашык баскычтар, ал баракты көрсөтүүгө бир аз убакыт кошуп коюшу мүмкүн. Redis ичинде ачкыч сорттоо жок, болгону ушул сыяктуу.`,
    socketIoTimeout: options => {
      return `Socket.IO бул сурам үчүн убакыт бүттү (макс ${options.timeout / 1000} секунд)...`;
    },
    resizerInfo: options => {
      return `Сол же оң панелдин минималдуу туурасы ${options.width}px`;
    },
    jsonViewNotParsable: "Бул маани JSON талдоо эмес  ",
    ttlTitle: "TTL секунданын ичинде орнотуңуз",
    passwordSecure: "Сырсөз бош болушу мүмкүн, бирок ал дагы эле белгилерди көрсөтөт, бул коопсуздук өзгөчөлүгү.",
    tlsWithoutCert: "TLSти кошумча сертификатсыз иштетүү",
    tlsRejectUnauthorized: "Уруксатсыз сертификатты четке кагуу",
    tlsSecure: "Эгер сиз P3X менен ��ашталган TLS конфигурациясын көрсөңүз же бардык TLS жөндөөлөрү окшош болсо, бул коопсуз функция. Орнотууларды өзгөртүү үчүн, жөн гана бул жөндөөлөрдү бош же башка нерсе менен алмаштырыңыз жана алар сакталат. TLS жөндөөлөрүн өзгөртпөсөңүз, орнотуулар сервердегидей сакталып калат.",
    treeSeparatorEmpty: "Эгерде дарак бөлгүч бош болсо, анда дарактын эч кандай түйүндөрү болбойт, болгону таза тизме",
    treeSeparatorEmptyNote: "Уюшкан түйүндөр жок, жөн гана тизме",
    welcomeConsole: "Redis консолуна кош келиңиз",
    welcomeConsoleInfo: "Курсор ЖОГОРУ же ТӨМӨН тарых иштетилген",
    redisListIndexInfo: "Коштоо үчүн бош, -1 алдына коюу же көрсөтүлгөн орунга сактоо үчүн.",
    console: "Консол",
    connectiondAdd: "Туташуу кошуу",
    connectiondEdit: "Туташууну түзөтүү",
    connectiondView: "Байланышты көрүү",
    connections: "Байланыштар",
    licenseInfo: "Лицензия",
    licenseEditable: "Лицензия түзөтүлөт",
    licenseEditableYes: "Ооба",
    licenseEditableNo: "жок",
    licenseTerminalOnly: "Лицензияны сервер терминалынан гана конфигурациялоого болот.",
    licenseTierPolicyTitle: "Деңгээл саясаты",
    licenseTierPolicyText: "<h4>Free</h4>core Redis UI only; no SSH tunneling, no Readonly connection mode, no Cluster/Sentinel, no Edit JSON/Upload binary/Download binary, no ReJSON.<br/><strong>Price: 0 HUF/month (€0/month).</strong><br/><br/><h4>Pro</h4>SSH tunneling, Readonly connection mode (including --readonly-connections/-r), Edit JSON, Upload binary, Download binary, ReJSON.<br/><strong>Base price: 400 HUF/month (€1/month) or 4,000 HUF/year (€10/year).</strong><br/><strong>Total with 27% VAT: 500 HUF/month (€1.27/month) or 5,100 HUF/year (€12.70/year).</strong><br/><br/><h4>Enterprise</h4>SSH tunneling, Cluster and Sentinel, plus Edit JSON, Upload binary, Download binary, ReJSON; --readonly-connections/-r also works.<br/><strong>Base price: 1,200 HUF/month (€3/month) or 12,000 HUF/year (€30/year).</strong><br/><strong>Total with 27% VAT: 1,500 HUF/month (€3.81/month) or 15,200 HUF/year (€38.10/year).</strong><br/><br/><h4>Yearly rule</h4>Yearly price is 10x the monthly price.<br/><br/><h4>Seats</h4>Default license includes 5 seats. If you need more seats, contact us at <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><br/><h4>Enterprise trial</h4>10 days free for anyone with a real existing email address (non-test email).<br/><hr/><h4>Billing info in e-mail</h4>Name, Billing e-mail, Country code, Postal code, City, Address, VAT ID (optional).<br/><br/><h4>Payment</h4>PayPal payment is available only in HUF (forint); after sending the money @ <a href='https://paypal.me/corifeus'>https://paypal.me/corifeus</a> I will send you an invoice. All payments are non-refundable.<br/><br/><h4>VAT</h4>VAT is added to the price (27% in Hungary).<br/><hr/><h4>Contact</h4>If you want to say hi or have a question, contact <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><hr/><h4>Language</h4>Invoice and license e-mail communication is in English. Invoice currency is HUF.<br/><hr/><h4>Note</h4>License validation requires internet access.",
    licenseState: "Мамлекет",
    licenseStateActive: "Активдүү",
    licenseStateInactive: "Жигерсиз",
    licenseStateNoLicense: "Лицензия жок",
    licenseKeyMasked: "Сакталган ачкыч",
    licenseTier: "Деңгээл",
    licenseValid: "Жарактуу",
    licenseStatus: "Лицензия статусу",
    licenseReason: "Себеп",
    licenseCheckedAt: "текшерилди",
    licenseStartsAt: "башталат",
    licenseExpiresAt: "Мөөнөтү бүтөт",
    licenseDaysLeft: "Күндөр калды",
    licenseMaxDevices: "Максималдуу түзмөктөр",
    licenseActiveDevices: "Активдүү түзмөктөр",
    licenseActiveDevicesInfo: "Эгер аппарат колдонулбай калса, анын отургучу 75 мүнөттөн кийин автоматтык түрдө бошотулат.",
    licenseCustomerEmail: "Кардардын электрондук почтасы",
    licenseFeatures: "Өзгөчөлүктөрү",
    licenseFeaturesEmpty: "Эч кандай кошумча функциялар",
    licenseFeatureReadonlyMode: "окуу үчүн гана туташуу режими",
    licenseFeatureReadonlyConnectionsFlag: "Окуу үчүн гана туташуулар (--readonly-connections/-r)",
    licenseFeatureSsh: "SSH туннелдер",
    licenseFeatureCluster: "Cluster байланыштары",
    licenseFeatureSentinel: "Sentinel байланыштары",
    licenseFeatureReJSON: "ReJSON (JSON маалымат түрү)",
    keysSort: {
      on: "Ачкычтарды иреттөө күйүк",
      off: "Ачкычты сорттоо"
    },
    cluster: {
      on: "Cluster күйүк",
      off: "Cluster өчүк"
    },
    sentinel: {
      on: "Sentinel күйүк",
      off: "Sentinel өчүк",
      name: "Sentinel аты"
    },
    readonly: {
      on: "Окуу үчүн гана",
      off: "Окуу үчүн гана өчүрүү"
    },
    proSshOnly: "SSH Pro же Ишканада жеткиликтүү.",
    proReadonlyOnly: "Окуу үчүн гана туташуу режими Pro же Ишканада жеткиликтүү.",
    enterpriseClusterSentinelOnly: "Cluster жана Sentinel Ишканада гана жеткиликтүү.",
    theme: {
      light: "Жарык",
      dark: "��араңгы ишкана",
      darkNeu: "Караңгы",
      darkoBluo: "Darko blue",
      enterprise: "Enterprise",
      redis: "Redis",
      matrix: "Матрица"
    },
    connected: opts => {
      return `Туташкан: ${opts.name}`;
    },
    tree: "Дарак",
    askAuth: "Авторизация сураңыз",
    keyboardShortcuts: "Keyboard Shortcuts",
    about: "About",
    supportedLanguages: "Supported Languages",
    version: "Version",
    redisVersion: "Redis Version",
    modules: "Модулдар",
    shortcutRefresh: "Refresh",
    shortcutSearch: "Focus Search",
    shortcutNewKey: "New Key",
    shortcutDisconnect: "Ажыратуу",
    themeAuto: "Auto (system)",
    shortcutCommandPalette: "Command Palette",
    commandPalette: "Command Palette",
    noResults: "No results",
    redisCommandsReference: "Redis Буйруктары",
    ungrouped: "Топсуз",
    grouped: "Grouped",
    connectFirst: "Алгач Redis серверине туташыңыз",
    searchLanguage: "Тилди издөө...",
    exportProgress: "Ачкычтар экспортолууда...",
    importProgress: "Ачкычтар импортолууда...",
    importPreview: "Алдын ала көрүү",
    importOverwrite: "Кайра жазуу",
    importSkip: "Өткөрүп жиберүү",
    importConflict: "Ачкыч мурунтан бар болсо:",
    noKeysToExport: "Экспорттоо үчүн ачкычтар жок",
    time: "Убакыт",
    loading: "Жүктөлүүдө...",
    autoRefresh: "Авто",
    exportSearchHint: "Учурдагы издөөгө дал келген ачкычтар гана экспортолот",
    importSearchHint: "Импорт издөө натыйжаларына эмес, бүт маалымат базасына колдонулат",
    importNoKeys: "Файлдан ачкычтар табылган жок",
  },
  status: {
    dataCopied: "Маалымат алмашуу буферинде",
    licenseSaved: "Лицензия сакталды",
    exportDone: "Экспорт аякталды",
    indexCreated: "Индекс түзүлдү",
    indexDropped: "Индекс жоюлду",
    importDone: (opts) => `Импорт аякталды: ${opts.created} түзүлдү, ${opts.skipped} өткөрүлдү, ${opts.errors} ката`,
    nodeRemoved: "Түйүн алынып салынды",
    keyIsNotExisting: "Бул ачкыч жок кылынган же мөөнөтү бүткөн болушу мүмкүн.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "Ачкыч жок";
      } else if (opts.keyCount === 1) {
        return "1 ачкыч";
      } else {
        return `${opts.keyCount} ачкычтар`;
      }
    },
    treeExpandAll: "Бардык дарак жалбырактарын кеңейтүү. Бул операция кымбат болушу мүмкүн жана убакыт талап кылынышы мүмкүн ...",
    noRedisKeys: "Бул маалымат базасында ачкычтар жок.",
    redisConnected: "Redis ийгиликтүү туташты",
    reloadingDataInfo: "Redis маалыматы кайра жүктөлүүдө",
    added: "Кошулган",
    saved: "Жаңыртылган",
    cancelled: "Жокко чыгарылды",
    deleted: "Жок кылынды",
    savedRedis: "Redis маалыматтар сакталды",
    redisDisconnected: opts => {
      return `Учурдагы туташууда ката кетти: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `db ин��екси коюлган ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `Дарактын ачкычы жок кылынды (${opts.key}).`;
    },
    deletedKey: opts => {
      return `Ачкыч өчүрүлдү (${opts.key}).`;
    },
    renamedKey: "Бул ачкычтын аталышы өзгөртүлдү",
    ttlChanged: "Бул ачкычтын TTL өзгөртүлдү",
    notInteger: "Бул киргизүү бүтүн сан эмес",
    persisted: "Бул ачкыч түбөлүккө сакталат",
    set: "Ачкыч коюлган/кошулган"
  },
  code: {
    "delete-connection": "Бул туташуу өчүрүлдү, андыктан сиз бул Redis инстанциясына ажыратылдыңыз.",
    "save-connection": "Бул туташуу өзгөртүлдү, андыктан сиз бул Redis инстанциясынан ажыратылдыңыз. Сиз кайра туташа аласыз.",
    "readonly-connections": "Туташууларды кошуу/сактоо/жок кылуу окуу үчүн гана!",
    "readonly-connection-mode": "Бул байланыш окуу гана режими!",
    "list-out-of-bounds": "Бул тизме индекси чектен чыккан",
    "donation-ware-feature": "Бул өзгөчөлүк кайрымдуулук версиясында бар.",
    "feature-pro-readonly-required": "Окуу үчүн гана туташуу режими Pro же Enterprise лицензиясын талап кылат.",
    "feature-pro-ssh-required": "SSH туннелдөө үчүн Pro же Enterprise лицензиясы талап кылынат.",
    "feature-enterprise-cluster-sentinel-required": "Cluster жана Sentinel Enterprise лицензиясын талап кылат.",
    "feature-pro-json-binary-required": "JSON түзөтүү, экилик жүктөө жана экилик жүктөө Pro же Enterprise лицензиясын талап кылат.",
    "feature-pro-rejson-required": "ReJSON (JSON маалымат түрү) Pro же Enterprise лицензиясын талап кылат.",
    "invalid-json-value": "Маани жарактуу эмес JSON.",
    "http_auth_required": "Авторизация талап кылынат: HTTP Basic Auth менен аныктыгын текшерип, кайра жүктөңүз.",
    "auto-connection-failed": "Мүмкүн, туташуу өчүрүлүп, автоматтык туташуу ишке ашпай калды, ушундан улам.",
    invalid_console_command: "Бул буйрук GUI аркылуу иштебейт."
  },
  licenseReason: {
    LICENSE_VALID: "Лицензия жарактуу",
    LICENSE_INVALID: "Лицензия жараксыз",
    LICENSE_MISSING: "Лицензия ачкычы коюлган эмес",
    LICENSE_DISABLED: "Лицензия сервер конфигурациясында өчүрүлгөн",
    LICENSE_NOT_FOUND: "Лицензия табылган жок",
    LICENSE_EXPIRED: "Лицензиянын мөөнөтү бүттү",
    LICENSE_CLEARED: "Лицензия ачкычы тазаланды",
    LICENSE_MAX_DEVICES_REACHED: "Түзмөктүн максималдуу орундарына жетти",
    PRODUCT_MISMATCH: "Лицензия продукт дал келбейт"
  },
  licenseStatusValue: {
    active: "Активдүү",
    deleted: "Жок кылынды",
    all: "Баары",
    expired: "Мөөнөтү бүттү",
    missing: "Жок",
    inactive: "Жигерсиз"
  },
  form: {
    error: {
      required: "Талап кылынат",
      port: "Порт 1-65535 ортосунда",
      invalid: "Форма жараксыз"
    },
    connection: {
      label: {
        name: "аты",
        group: "Group",
        host: "Хост аты",
        port: "Порт",
        password: "Сырсөз",
        username: "Колдонуучунун аты"
      }
    },
    treeSettings: {
      maxValueDisplay: "Максималдуу маани дисплей сап узундугу",
      maxValueDisplayInfo: "0 деп коюлса, толук маанилерди көрсөтүңүз. 0ден чоң болсо, бул узундукка чейин кыскартыңыз. Эгерде -1: саптар үчүн, өзгөртүүгө чейин маанини жашырыңыз; башка түрлөрү үчүн, толук мазмунду көрсөтүү.",
      maxKeys: "Максималдуу ачкыч саны",
      maxKeysInfo: "GUI бузулуп калбашы үчүн, биз ачкычтардын максималдуу санын чектейбиз.",
      keyCount: () => {
        return `Ачкычтардын саны: ${p3xr.state.keysRaw.length}`;
      },
      label: {
        animation: "Анимацияны колдонуңуз",
        noAnimation: "Анимация жок",
        jsonFormatTwoSpace: "JSON форматын 2 боштук менен түзүңүз",
        jsonFormatFourSpace: "4 боштук менен JSON форматтаңыз",
        formName: "Redis орнотуулары",
        searchModeClient: "Кардар издөө режими",
        searchModeServer: "Сервер издөө режими",
        searchModeStartsWith: "Издөө режими менен башталат",
        searchModeIncludes: "Издөө режимин камтыйт"
      },
      field: {
        treeSeparator: "Дарак бөлгүч",
        treeSeparatorSelector: "Дарак бөлгүч тандагыч",
        page: "Дарак пейджинг саны",
        keyPageCount: "Ачкыч пейджинг саны",
        keysSort: "Ачкычтарды иреттөө",
        searchMode: "Издөө режими",
        searchModeStartsWith: "Издөө / камтыйт менен башталат"
      },
      error: {
        keyPageCount: "Негизги беттердин саны 5 - 100 ортосундагы бүтүн сан болушу керек",
        page: "Барактардын саны 10 - 5000 ортосундагы бүтүн сан болушу керек",
        maxValueDisplay: "Дисплейдин максималдуу мааниси -1 менен 32768 ортосундагы бүтүн сан болушу керек",
        maxKeys: "Ачкыч санынын максималдуу мааниси 100 менен 100000 ортосундагы бүтүн сан болушу керек"
      }
    },
    key: {
      label: {
        formName: {
          add: "Жаңы Redis ачкычын кошуңуз",
          edit: "Redis ачкычын түзөтүңүз",
          append: "Учурдагы Redis ачкычына кошуу"
        }
      },
      field: {
        streamTimestamp: "Убакыт белгиси",
        key: "ачкыч",
        type: "Түр",
        index: "Индекс",
        hashKey: "Хеш ачкычы",
        score: "Упай",
        value: "Нарк"
      },
      error: {
        streamTimestamp: "Redis форматында же * катары убакыт белгиси талап кылынат",
        key: "Негизгиси, жок эле дегенде, бир каарман",
        hashKey: "Хэш таблицанын ачкычы жок дегенде бир белгиден турат",
        score: "Сорттолгон упай талап кылынат",
        value: "Маани талап кылынат"
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
      title: "Издөө",
      index: "Индекс",
      query: "Суроо",
      results: "Натыйжалар",
      noIndex: "Индекстер табылган жок",
      createIndex: "Индекс түзүү",
      dropIndex: "Индексти жоюу",
      indexInfo: "Индекс маалыматы",
      indexName: "Индекс аты",
      prefix: "Ачкыч префикси (милдеттүү эмес)",
      fieldName: "Талаа аты",
    },
    monitor: {
      title: "Мониторинг",
      memory: "Эстутум",
      opsPerSec: "Операция/сек",
      clients: "Кардарлар",
      blocked: "Бөгөттөлгөн",
      hitsMisses: "Жетишкендик",
      networkIo: "Тармак I/O",
      slowLog: "Жай журнал",
      totalCommands: "Бардыгы",
      expired: "Мөөнөтү бүткөн",
      evicted: "Чыгарылган",
      clientList: "Кардарлар тизмеси",
      topKeys: "Эстутум боюнча чоң ачкычтар",
      killClient: "Кардарды токтотуу",
      clientKilled: "Кардар токтотулду",
      confirmKillClient: "Бул кардарды токтотууга ишенесизби?",
      noKeys: "Ачкычтар жок",
      noClients: "Кардарлар жок",
    },
    overview: {
      noConnected: "Redis менен байланыш жок.",
      overviewClients: "Кардарлардын саны боюнча туташкандарды тизмектеңиз",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "1 кардар";
        }
        return `${opt.length} кардарлар`;
      }
    },
    key: {
      label: {
        key: "ачкыч",
        encoding: "Коддоо",
        length: "Өлчөмү",
        ttl: "TTL",
        ttlTitle: "Жашоо убактысы",
        type: "Түр",
        ttlNotExpire: "мөөнөтү бүтпөйт",
        lengthString: "байт",
        lengthItem: "буюмдар",
        actions: "Аракеттер"
      },
      list: {
        table: {
          index: "Индекс",
          value: "Нарк"
        }
      },
      hash: {
        table: {
          hashkey: "Hashkey",
          value: "Нарк"
        }
      },
      set: {
        table: {
          value: "мүчө"
        }
      },
      zset: {
        table: {
          value: "мүчө",
          score: "Упай"
        }
      },
      stream: {
        table: {
          timestamp: "Убакыт белгиси",
          field: "Талаа",
          value: "Нарк"
        }
      }
    },
    treeControls: {
      settings: "Дарак орнотуулары",
      expandAll: "Баарын кеңейтүү",
      collapseAll: "Баарын жыйноо",
      search: {
        search: "Ачкычтардан издеңиз",
        clear: "Бош коюу үчүн учурдагы издөөнү тазалаңыз",
        placeholderClient: "Кардар тарабынан издөө",
        placeholderServer: "Издөө сервер тарабы",
        info: "Кардар тарабынан издөө дегенди билдирет, ал издөө киргизүүдөгү тек��тке дал келет. Сервер тарабында издөө, бул *{search-text}* сыяктуу баскычтардын үлгүлөрүндөгү издөө сыяктуу. Чоң издөө топтомдору үчүн сервердик издөөнү колдонуу жакшы. Кичинекей издөө топтомдору үчүн кардар тарабынан издөө режимин колдонуу жакшы." + ` Эгер ачкычтарды эсептөө бүтсө ${p3xr.settings.maxLightKeysCount}, сиз сервер тараптан гана издей аласыз.`,
        largeSetInfo: "Чоң топтомдо кардар тарабынан издөө өчүрүлгөн. ошондуктан азыр сервер тараптан издөө гана мүмкүн.",
        infoDetails: "Издөө кандай иштээрин билүү үчүн, жөндөөлөрдү текшериңиз"
      },
      pager: {
        next: "Кийинки",
        prev: "Мурунку",
        first: "Биринчи",
        last: "Акыркы"
      }
    }
  },
  time: {
    loading: "Жүктөлүүдө...",
    years: "жыл",
    months: "айлар",
    days: "күн",
    year: "жыл",
    month: "ай",
    day: "күн"
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
