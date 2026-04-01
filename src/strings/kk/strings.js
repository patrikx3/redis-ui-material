const strings = {
  error: {
    cleared_license: "Тазартылған лицензия",
    invalid_license: "Жарамсыз лицензия",
    license_max_devices_reached: "Құрылғыдағы максималды орындарға жетті",
    license_readonly: "Лицензияны тек сервер терминалынан өзгертуге болады.",
    server_error: "Сервер қатесі, әрекетті қайталаңыз"
  },
  title: {
    donate: "Садақа беру",
    jsonRecursive: "Барлық жапырақтарды кеңейту",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "Төменгі сол жақ мәзірден қосылу үшін Redis қосылымын таңдауға болады.",
    statistics: "Статистика",
    error: "Қате",
    connectingRedis: "Redis қосылуда ...",
    socketioConnectError: "Socket.IO қ��тесі",
    db: "DB",
    server: "Сервер",
    clients: "Клиенттер",
    memory: "Жад",
    persistence: "Табандылық",
    stats: "Статистика",
    replication: "Репликация",
    cpu: "CPU",
    cluster: "Cluster",
    modules: "Модульдер",
    errorstats: "Қate статistикасы",
    commandstats: "Команда статistикасы",
    latencystats: "Кідіріс статistикасы",
    keysizes: "Кілт өлшемдері",
    threads: "Ағындар",
  },
  confirm: {
    dropIndex: "Бұл индексті жоюға сенімдісіз бе?",
    uploadBuffer: "Бұл екілік деректерді жүктеп салуға сенімдісіз бе?",
    uploadBufferDone: "Екілік деректер жүктеледі",
    uploadBufferDoneAndSave: "Екілік деректер серверде жүктеледі және сақталады",
    title: "Растау",
    alert: "Ескерту",
    info: "Ақпарат",
    deleteListItem: "Бұл тізім элементін жоюға сенімдісіз бе?",
    deleteHashKey: "Осы хэш кілтін жоюға сенімдісіз бе?",
    deleteStreamTimestamp: "Бұл трансляция уақыт белгісін шынымен жою керек пе?",
    deleteSetMember: "Осы жиын мүшесін шынымен жою керек пе?",
    deleteZSetMember: "Осы сұрыпталған жиын мүшесін шынымен жою керек пе?",
    deleteConnection: "Растау",
    deleteConnectionText: "Осы Redis қосылымын жойғыңыз келетініне сенімдісіз бе?",
    deleteNode: "Осы Redis түйінін жоюға сенімдісіз бе?",
    deleteAllKeys: opts => {
      return `Осы ағашты және оның барлық кілттерін жойыңыз (${opts.key})?`;
    },
    socketioConnectError: "Socket.IO серверге қосыла алмайды, сіз қайта жүктеп, қосылым қатесін өзіңіз шеше аласыз, клиент оны қалай шешу керектігін білмейді.",
    socketioAuthRequired: "Socket.IO авторизациясы қажет. HTTP Basic Auth (пайдаланушы аты/құпия сөз) көмегімен аутентификациядан өтіп, қайта жүктеңіз.",
    deleteKey: "Бұл кілтті шынымен жоясыз ба?",
    rename: {
      title: "Бұл кілттің атын өзгерту керек пе?",
      textContent: "Бұл әрекет кілттің атын біржола өзгертеді.",
      placeholder: "Redis кілті (міндетті)"
    },
    ttl: {
      title: "Осы кілттің TTL өзгерткіңіз келетініне сенімдісіз бе?",
      textContent: "TTL өзгерту бұл кілттің өмір сүру уақытын жаңартады. Бұл кілтті мәңгі сақтау үшін бос қалдырыңыз.",
      placeholder: "Redis кілтінің TTL (бүтін немесе бос)",
      placeholderPlaceholder: "Бос бұл мәңгілік сақталады дегенді білдіреді; әйтпесе бүтін санды енгізіңіз.",
      convertTextToTime: "Мәтінді уақытқа түрлендіру",
      convertTextToTimePlaceholder: "Мысалы. 1d 86400 болады"
    },
    license: {
      title: "Лицензияны орнату",
      textContent: "If you want to use paid features, please contact support@corifeus.com to request a license. Pricing is Pro 400 HUF/month (€1/month) or 4,000 HUF/year (€10/year), and Enterprise 1,200 HUF/month (€3/month) or 12,000 HUF/year (€30/year). Yearly is 10x monthly. With 27% VAT, totals are Pro 500 HUF/month (€1.27/month) or 5,100 HUF/year (€12.70/year), Enterprise 1,500 HUF/month (€3.81/month) or 15,200 HUF/year (€38.10/year). License validation requires internet access. Default license includes 5 seats. If you need more seats, contact us at support@corifeus.com.",
      placeholder: "Лицензия кілті"
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
    copy: "Көшір��",
    downloadBuffer: "Екілік файлды жүктеп алыңыз",
    setBuffer: "Екілік файлды жүктеп салу",
    exportKeys: "Кілттерді экспорттау",
    exportAllKeys: (opts) => `Барлық ${opts.count} кілтті экспорттау`,
    exportSearchResults: (opts) => `${opts.count} нәтижені экспорттау`,
    importKeys: "Кілттерді импорттау",
    saveWithFormatJson: "Пішіммен сақтау",
    formatJson: "Json пішімі",
    wrap: "Орау",
    unwrap: "Орамды ашу",
    downloadJson: "JSON жүктеп алыңыз",
    pubsubMonitor: "PubSub Монитор",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "Тіл",
    ok: "Жарайды",
    addKey: "Осы кілтке қосыңыз",
    addKeyRoot: "Түбірлік кілтті қосыңыз",
    reloadKey: "Қайта жүктеу кілті",
    reload: "Қайта жүктеңіз",
    close: "Жабу",
    commands: "Командалар",
    view: "Көру",
    statistics: "Статистика",
    refresh: "Жаңарту",
    pause: "Үзіліс",
    resume: "Жалғастыру",
    clear: "Таза",
    rename: "Атын өзгерту",
    main: "Дерекқор",
    cancel: "Болдырмау",
    theme: "Тақырып",
    github: "GitHub",
    githubRepo: "Репозиторий",
    githubRelease: "Шығарылымдар",
    githubChangelog: "Өзгеріс журналы",
    info: "Info",
    settings: "Параметрлер",
    connect: "Қосылу",
    disconnect: "Ажырату",
    overview: "Шолу",
    console: "Консоль",
    noConnections: "Қосылымд��р жоқ, қосылымды параметрлер мәзірінде қосыңыз.",
    noConnectionsInSettings: "Қосылымдар жоқ, жоғарыдан ЖАҢА ҚОСЫЛЫМ қосуға болады.",
    connectionAdd: "Жаңа байланыс",
    addGroup: "Топ қосу",
    extend: "Ұзарту",
    collapse: "Жыйрату",
    add: "қосу",
    edit: "Өңдеу",
    save: "Сақтау",
    ttl: "TTL орнатыңыз",
    license: "Лицензияны орнату",
    delete: "Жою",
    remove: "Жою",
    sure: "Әрине",
    testConnection: "Сынақ қосылымы",
    getKey: "Redis кілті мен байланысты деректер жүктелуде ...",
    jsonViewShow: "JSON дисплейі",
    jsonViewEditor: "JSON өңдеу",
    quickConsole: "Жылдам консоль",
  },
  label: {
    id: {
      nodeId: "Түйін идентификаторы",
      id: "Қосылым идентификаторы",
      info: "Мыналардың сипаттарын өзгерткіңіз келмесе: sshPassword, sshPrivateKey, құпия сөз, tlsCrt, tlsKey, tlsCa, сипат мәндерін өзгеріссіз сақтау үшін осы сипаттарға қосылым идентификаторын енгізіңіз. Түйін құпия сөзінде бірдей логиканы қаласаңыз, түйін құпия сөзіне түйін идентификаторын енгізіңіз."
    },
    secureFeature: "P3X-тен басталатын мәнді көрсеңіз, ұқсайды, ол қауіпсіз мүмкіндік болып табылады. Параметрлерді өзгерту үшін бұл параметрлерді бос немесе басқа нәрсемен ауыстырыңыз, сонда олар сақталады. Параметрлерді өзгертпесеңіз, параметрлер сервердегідей сақталады.",
    aiTranslating: "Translating...",
    aiSettings: "AI Параметрлер",
    aiGroqApiKey: "Groq API кілті",
    aiGroqApiKeyInfo: "Міндетті емес. Жақсы өнімділік үшін өз Groq API кілтіңіз. Тегін кілт алыңыз",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "AI API кілті сақталды",
    aiGroqApiKeyInvalid: "Invalid Groq API key",
    aiGroqApiKeyNotSet: "Орнатылмаған (сервер әдепкісі)",
    aiEnabled: "AI Enabled",
    aiEnabledYes: "Yes",
    aiEnabledNo: "No",
    aiRouteViaNetwork: "Route via network.corifeus.com",
    aiRoutingDirect: "Queries go directly to Groq using your own API key, bypassing network.corifeus.com.",
    aiRoutingNetwork: "AI queries are routed through network.corifeus.com. If you have your own free Groq API key, you can turn off this switch to route directly to Groq without network.corifeus.com.",
    ssh: {
      on: "SSH қосулы",
      off: "SSH өшірулі",
      sshHost: "SSH Хост",
      sshPort: "SSH порты",
      sshUsername: "SSH пайдаланушы аты",
      sshPassword: "SSH құпия сөз",
      sshPrivateKey: "SSH жеке кілт"
    },
    isBuffer: opts => `[object ArrayBuffer] мәннің екілік деректер екенін немесе мәннің одан үлкен екенін білдіреді ${opts.maxValueAsBuffer}`,
    streamValue: `Ағын өрісі мен мәні - бір сызық. Мысалы: өріс1 мән1 "өріс 2" "2 мән"`,
    streamTimestampId: `'*' автоматты түрде жасалған немесе <millisecondsTime>-<sequenceNumber> ретінде сипаттаманы білдіреді`,
    unableToLoadKey: ({
      key
    }) => {
      return `Бұл кілтті жүктеу мүмкін емес: ${key}. Мүмкін, кілт жойылған. Нақты қате консольде.`;
    },
    bigJson: "Бұл JSON нысаны 10 кб-тан жоғары, сондықт��н не істеп жатқаныңызды білетініңізге көз жеткізіңіз, себебі кейбір функциялар баяу көрсетуі мүмкін.",
    addNode: "Түйін қосу",
    validateJson: "JSON растау",
    reducedFunction: `Қысқартылған функционалдылық`,
    tooManyKeys: opts => {
      return `Толық максималды функциялар үшін рұқсат етілген пернелердің жалпы саны ${opts.maxLightKeysCount} санау. Бұл дерекқорда жалпы рұқсат етілген кілттер бар ${opts.count}. Кілттерді сұрыптау және қосымша сәнді ағаш ақпараты өшірілген. Іздеу клиентті іздеудің орнына серверде ғана орындалады.`;
    },
    redisCommandNotFound: "Redis пәрмен сәйкестігі табылмады ...",
    treeKeyStore: `Сұрыптау (табиғи салыстыру) кли��нтте, яғни браузерде орындалады, яғни 10 мыңнан астам кілттер сияқты үлкен үлкен жиынтықтар үшін айыппұл бар дегенді білдіреді, ол бетті көрсетуге аз уақыт қосуы мүмкін. Redis ішінде кілт сұрыптау жоқ, тек осылай.`,
    socketIoTimeout: options => {
      return `Socket.IO осы сұрау үшін уақыт бітті (макс ${options.timeout / 1000} секунд)...`;
    },
    resizerInfo: options => {
      return `Сол немесе оң панельдің ең төменгі ені ${options.width}px`;
    },
    jsonViewNotParsable: "Бұл мән JSON талдауға жатпайды  ",
    ttlTitle: "TTL секундтарда орнатыңыз",
    passwordSecure: "Құпия сөз бос болуы мүмкін, бірақ ол әлі де таңбаларды көрсетеді, бұл қауіпсіздік мүмкіндігі.",
    tlsWithoutCert: "Қосымша сертификатсыз TLS қосыңыз",
    tlsRejectUnauthorized: "Рұқсат етілмеген сертификаттан бас тарту",
    tlsSecure: "P3X-тен басталатын TLS конфигурациясын көрсеңіз немесе барлық TLS параметрлері бірдей көрінсе, бұл қауіпсіз мүмкіндік болып табылады. Параметрлерді өзгерту үшін бұл параметрлерді бос немесе басқа нәрсемен ауыстырыңыз, сонда олар сақталады. TLS параметрлерін өзгертпесеңіз, параметрлер сервердегідей сақталады.",
    treeSeparatorEmpty: "Ағаш бөлгіш бос болса, ағаштың кірістірілген түйіндері болмайды, тек таза тізім болады",
    treeSeparatorEmptyNote: "Кірістірілген түйіндер жоқ, тек таза тізім",
    welcomeConsole: "Redis консоліне қош келдіңіз",
    welcomeConsoleInfo: "Жүгіргіні ЖОҒАРЫ немесе ТӨМЕН журналы қосулы",
    redisListIndexInfo: "Қосу үшін бос, алдына қо�� немесе оны көрсетілген орынға сақтау үшін -1.",
    console: "Консоль",
    connectiondAdd: "Қосылым қосыңыз",
    connectiondEdit: "Қосылымды өңдеу",
    connectiondView: "Қосылымды көру",
    connections: "Қосылымдар",
    licenseInfo: "Лицензия",
    licenseEditable: "Лицензия өңделеді",
    licenseEditableYes: "Иә",
    licenseEditableNo: "Жоқ",
    licenseTerminalOnly: "Лицензияны тек сервер терминалынан конфигурациялауға болады.",
    licenseTierPolicyTitle: "Деңгейлік саясат",
    licenseTierPolicyText: "<h4>Free</h4>core Redis UI only; no SSH tunneling, no Readonly connection mode, no Cluster/Sentinel, no Edit JSON/Upload binary/Download binary, no ReJSON.<br/><strong>Price: 0 HUF/month (€0/month).</strong><br/><br/><h4>Pro</h4>SSH tunneling, Readonly connection mode (including --readonly-connections/-r), Edit JSON, Upload binary, Download binary, ReJSON.<br/><strong>Base price: 400 HUF/month (€1/month) or 4,000 HUF/year (€10/year).</strong><br/><strong>Total with 27% VAT: 500 HUF/month (€1.27/month) or 5,100 HUF/year (€12.70/year).</strong><br/><br/><h4>Enterprise</h4>SSH tunneling, Cluster and Sentinel, plus Edit JSON, Upload binary, Download binary, ReJSON; --readonly-connections/-r also works.<br/><strong>Base price: 1,200 HUF/month (€3/month) or 12,000 HUF/year (€30/year).</strong><br/><strong>Total with 27% VAT: 1,500 HUF/month (€3.81/month) or 15,200 HUF/year (€38.10/year).</strong><br/><br/><h4>Yearly rule</h4>Yearly price is 10x the monthly price.<br/><br/><h4>Seats</h4>Default license includes 5 seats. If you need more seats, contact us at <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><br/><h4>Enterprise trial</h4>10 days free for anyone with a real existing email address (non-test email).<br/><hr/><h4>Billing info in e-mail</h4>Name, Billing e-mail, Country code, Postal code, City, Address, VAT ID (optional).<br/><br/><h4>Payment</h4>PayPal payment is available only in HUF (forint); after sending the money @ <a href='https://paypal.me/corifeus'>https://paypal.me/corifeus</a> I will send you an invoice. All payments are non-refundable.<br/><br/><h4>VAT</h4>VAT is added to the price (27% in Hungary).<br/><hr/><h4>Contact</h4>If you want to say hi or have a question, contact <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><hr/><h4>Language</h4>Invoice and license e-mail communication is in English. Invoice currency is HUF.<br/><hr/><h4>Note</h4>License validation requires internet access.",
    licenseState: "Мемлекет",
    licenseStateActive: "Белсенді",
    licenseStateInactive: "Белсенді емес",
    licenseStateNoLicense: "Лицензия жоқ",
    licenseKeyMasked: "Сақталған кілт",
    licenseTier: "Деңгей",
    licenseValid: "Жарамды",
    licenseStatus: "Лицензия күйі",
    licenseReason: "Себеп",
    licenseCheckedAt: "Тексерілді",
    licenseStartsAt: "басталады",
    licenseExpiresAt: "Мерзімі аяқталады",
    licenseDaysLeft: "Күндер қалды",
    licenseMaxDevices: "Максималды құрылғылар",
    licenseActiveDevices: "Белсенді құрылғылар",
    licenseActiveDevicesInfo: "Құрылғы бұдан былай пайдаланылмаса, оның орны 75 минуттан кейін автоматты түрде босатылады.",
    licenseCustomerEmail: "Тұтынушының электрондық поштасы",
    licenseFeatures: "Ерекшеліктер",
    licenseFeaturesEmpty: "Қосымша мүмкіндіктер жоқ",
    licenseFeatureReadonlyMode: "Тек оқуға арналған қосылым режимі",
    licenseFeatureReadonlyConnectionsFlag: "Тек оқуға арналған қосылымдар (--readonly-connections/-r)",
    licenseFeatureSsh: "SSH туннельдеу",
    licenseFeatureCluster: "Cluster қосылымдары",
    licenseFeatureSentinel: "Sentinel қосылымдары",
    licenseFeatureReJSON: "ReJSON (JSON деректер түрі)",
    keysSort: {
      on: "Кілтті сұрыптау қосулы",
      off: "Кілтті сұрыптау"
    },
    cluster: {
      on: "Cluster қосулы",
      off: "Cluster өшірулі"
    },
    sentinel: {
      on: "Sentinel қосулы",
      off: "Sentinel өшірулі",
      name: "Sentinel атауы"
    },
    readonly: {
      on: "Тек оқуға арналған",
      off: "Тек оқу үшін өшірулі"
    },
    proSshOnly: "SSH Pro немесе Enterprise нұсқаларында қол жетімді.",
    proReadonlyOnly: "Тек оқуға арналған қосылым режимі Pro немесе Enterprise жүйесінде қолжетімді.",
    enterpriseClusterSentinelOnly: "Cluster және Sentinel тек Enterprise жүйесінде қолжетімді.",
    theme: {
      light: "Жарық",
      dark: "Қараңғы кәсіпорын",
      darkNeu: "Қараңғы",
      darkoBluo: "Darko blue",
      enterprise: "Кәсіпорын",
      redis: "Redis",
      matrix: "Матрица"
    },
    connected: opts => {
      return `Қосылды: ${opts.name}`;
    },
    tree: "Ағаш",
    askAuth: "Рұқсат сұраңыз",
    keyboardShortcuts: "Keyboard Shortcuts",
    about: "About",
    supportedLanguages: "Supported Languages",
    version: "Version",
    redisVersion: "Redis Version",
    modules: "Модульдер",
    shortcutRefresh: "Refresh",
    shortcutSearch: "Focus Search",
    shortcutNewKey: "New Key",
    shortcutDisconnect: "Ажырату",
    themeAuto: "Auto (system)",
    shortcutCommandPalette: "Command Palette",
    commandPalette: "Command Palette",
    noResults: "No results",
    redisCommandsReference: "Redis Командалары",
    ungrouped: "Топсыз",
    grouped: "Grouped",
    connectFirst: "Алдымен Redis серверіне қосылыңыз",
    searchLanguage: "Тілді іздеу...",
    exportProgress: "Кілттер экспортталуда...",
    importProgress: "Кілттер импортталуда...",
    importPreview: "Алдын ала қарау",
    importOverwrite: "Қайта жазу",
    importSkip: "Өткізіп жіберу",
    importConflict: "Кілт бұрыннан бар болса:",
    noKeysToExport: "Экспорттайтын кілттер жоқ",
    time: "Уақыт",
    loading: "Жүктелуде...",
    autoRefresh: "Авто",
    exportSearchHint: "Тек ағымдағы іздеуге сәйкес кілттер экспортталады",
    importSearchHint: "Импорт іздеу нәтижелеріне ғана емес, бүкіл дерекқорға қолданылады",
    importNoKeys: "Файлдан кілттер табылмады",
  },
  status: {
    dataCopied: "Деректер алмасу буферінде",
    licenseSaved: "Лицензия сақталды",
    exportDone: "Экспорт аяқталды",
    indexCreated: "Индекс жасалды",
    indexDropped: "Индекс жойылды",
    importDone: (opts) => `Импорт аяқталды: ${opts.created} жасалды, ${opts.skipped} өткізілді, ${opts.errors} қате`,
    nodeRemoved: "Түйін жойылды",
    keyIsNotExisting: "Бұл кілт жойылған немесе мерзімі өткен болуы мүмкін.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "Кілт жоқ";
      } else if (opts.keyCount === 1) {
        return "1 кілт";
      } else {
        return `${opts.keyCount} пернелер`;
      }
    },
    treeExpandAll: "Барлық ағаш жапырақтарын кеңейтіңіз. Бұл операция қымбат болуы мүмкін және уақыт алуы мүмкін ...",
    noRedisKeys: "Бұл дерекқорда кілттер жоқ.",
    redisConnected: "Redis сәтті қосылды",
    reloadingDataInfo: "Redis деректер ақпараты қайта жүктелуде",
    added: "Қосылды",
    saved: "Жаңартылған",
    cancelled: "Бас тартылды",
    deleted: "Жойылды",
    savedRedis: "Redis деректері сақталады",
    redisDisconnected: opts => {
      return `Ағымдағы қосылымда қате болды: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `db индексі орнатылды ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `Ағаш кілті жойылды (${opts.key}).`;
    },
    deletedKey: opts => {
      return `Кілт жойылды (${opts.key}).`;
    },
    renamedKey: "Бұл кілттің атауы өзгертілді",
    ttlChanged: "Бұл кілттің TTL өзгертілді",
    notInteger: "Бұл кіріс бүтін сан емес",
    persisted: "Бұл кілт мәңгі сақталады",
    set: "Кілт орнатылған/қосылған"
  },
  code: {
    "delete-connection": "Бұл қосылым жойылды, сондықтан сіз осы Redis данасына ажыратылдыңыз.",
    "save-connection": "Бұл қосылым өзгертілді, сондықтан сіз осы Redis данасына ажыратылдыңыз. Сіз қайта қосыла аласыз.",
    "readonly-connections": "Қосылымдар қосу/сақтау/жою тек оқуға арналған!",
    "readonly-connection-mode": "Бұл қосылым тек оқуға арналған режим!",
    "list-out-of-bounds": "Бұл тізім индексі шектен тыс",
    "donation-ware-feature": "Бұл мүмкіндік қайырымдылық нұсқасында бар.",
    "feature-pro-readonly-required": "Тек оқуға арналған қосылым режимі Pro немесе Enterprise лицензиясын қажет етеді.",
    "feature-pro-ssh-required": "SSH туннельдеу үшін Pro немесе Enterprise лицензиясы қажет.",
    "feature-enterprise-cluster-sentinel-required": "Cluster және Sentinel Кәсіпорын лицензиясын қажет етеді.",
    "feature-pro-json-binary-required": "JSON өңдеу, екілік жүктеу және екілік жүктеу Pro немесе Enterprise лицензиясын қажет етеді.",
    "feature-pro-rejson-required": "ReJSON (JSON деректер түрі) Pro немесе Enterprise лицензиясын қажет етеді.",
    "invalid-json-value": "Мән жарамсыз JSON.",
    "http_auth_required": "Авторизация қажет: HTTP Basic Auth көмегімен аутентификациядан өтіп, қайта жүктеңіз.",
    "auto-connection-failed": "Мүмкін, осыған байланысты қосылым жойылды және автоматты қосылым сәтсіз аяқталды.",
    invalid_console_command: "Бұл пәрмен GUI арқылы жұмыс істемейді."
  },
  licenseReason: {
    LICENSE_VALID: "Лицензия жарамды",
    LICENSE_INVALID: "Лицензия жарамсыз",
    LICENSE_MISSING: "Ешқандай лицензия кілті орнатылмаған",
    LICENSE_DISABLED: "Лицензия сервер конфигурациясында өшірілген",
    LICENSE_NOT_FOUND: "Лицензия табылмады",
    LICENSE_EXPIRED: "Лицензияның мерзімі аяқталды",
    LICENSE_CLEARED: "Лицензия кілті тазартылды",
    LICENSE_MAX_DEVICES_REACHED: "Құрылғыдағы максималды орындарға жетті",
    PRODUCT_MISMATCH: "Лицензия өнімі сәйкес келмейді"
  },
  licenseStatusValue: {
    active: "Белсенді",
    deleted: "Жойылды",
    all: "Барлығы",
    expired: "Мерзімі бітті",
    missing: "Жоқ",
    inactive: "Белсенді емес"
  },
  form: {
    error: {
      required: "Міндетті",
      port: "Порт 1-65535 аралығында",
      invalid: "Пішін жарамсыз"
    },
    connection: {
      label: {
        name: "Аты",
        group: "Group",
        host: "Хост атауы",
        port: "Порт",
        password: "Құпия сөз",
        username: "Пайдаланушы аты"
      }
    },
    treeSettings: {
      maxValueDisplay: "Максималды мәнді көрсету жолының ұзындығы",
      maxValueDisplayInfo: "0 мәніне орнатылса, толық мәндерді көрсетіңіз. 0-ден үлкен болса, осы ұзындыққа дейін қысқартыңыз. Егер -1: жолдар үшін өңдеуге дейін мәнді жасырыңыз; басқа түрлер үшін толық мазмұнды көрсетіңіз.",
      maxKeys: "Максималды кілттер саны",
      maxKeysInfo: "GUI бұзылып қалмауы үшін біз кілттердің максималды санын шектейміз.",
      keyCount: () => {
        return `Кілттер саны: ${p3xr.state.keysRaw.length}`;
      },
      label: {
        animation: "Анимацияны қолданыңыз",
        noAnimation: "Анимация жоқ",
        jsonFormatTwoSpace: "JSON пішімі 2 бос орынмен",
        jsonFormatFourSpace: "JSON пішімі 4 бос орынмен",
        formName: "Redis параметрлері",
        searchModeClient: "Клиент іздеу режимі",
        searchModeServer: "Серверді іздеу режимі",
        searchModeStartsWith: "Режиммен басталатын іздеу",
        searchModeIncludes: "Іздеу режимін қамтиды"
      },
      field: {
        treeSeparator: "Ағаш бөлгіш",
        treeSeparatorSelector: "Ағаш бөлгіш селекторы",
        page: "Ағаш пейджинг саны",
        keyPageCount: "Негізгі пейджинг саны",
        keysSort: "Кілттерді сұрыптаңыз",
        searchMode: "Іздеу режимі",
        searchModeStartsWith: "Іздеу / қамтиды"
      },
      error: {
        keyPageCount: "Негізгі беттер саны 5 - 100 аралығындағы бүтін сан болуы керек",
        page: "Бет саны 10 - 5000 аралығындағы бүтін сан болуы керек",
        maxValueDisplay: "Ең үлкен дисплей мәні -1 мен 32768 арасындағы бүтін сан болуы керек",
        maxKeys: "Кілттерді санаудың ең үлкен мәні 100 мен 100000 арасындағы бүтін сан болуы керек"
      }
    },
    key: {
      label: {
        formName: {
          add: "Жаңа Redis кілтін қосыңыз",
          edit: "Redis пернесін өңдеу",
          append: "Бар Redis кілтіне қосыңыз"
        }
      },
      field: {
        streamTimestamp: "Уақыт белгісі",
        key: "Кілт",
        type: "Түр",
        index: "Индекс",
        hashKey: "Хэш кілті",
        score: "Ұпай",
        value: "Мән"
      },
      error: {
        streamTimestamp: "Уақыт белгісі қажет, Redis пішімі немесе * ретінде",
        key: "Ең бастысы, кем дегенде бір таңба",
        hashKey: "Хэш кестесінің кілті кемінде бір таңбадан тұрады",
        score: "Сұрыпталған жиынтық ұпай қажет",
        value: "Мән қажет"
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
      title: "Іздеу",
      index: "Индекс",
      query: "Сұраныс",
      results: "Нәтижелер",
      noIndex: "Индекстер табылмады",
      createIndex: "Индекс жасау",
      dropIndex: "Индексті жою",
      indexInfo: "Индекс ақпараты",
      indexName: "Индекс атауы",
      prefix: "Кілт префиксі (міндетті емес)",
      fieldName: "Өріс атауы",
    },
    monitor: {
      title: "Мониторинг",
      memory: "Жады",
      opsPerSec: "Операция/сек",
      clients: "Клиенттер",
      blocked: "Бұғатталған",
      hitsMisses: "Тиімділік",
      networkIo: "Желі I/O",
      slowLog: "Баяу журнал",
      totalCommands: "Барлығы",
      expired: "Мерзімі біткен",
      evicted: "Шығарылған",
      clientList: "Клиенттер тізімі",
      topKeys: "Жады бойынша ең үлкен кілттер",
      killClient: "Клиентті тоқтату",
      clientKilled: "Клиент тоқтатылды",
      confirmKillClient: "Бұл клиентті тоқтатуға сенімдісіз бе?",
      noKeys: "Кілттер жоқ",
      noClients: "Клиенттер жоқ",
    },
    overview: {
      noConnected: "Redis қосылымы жоқ.",
      overviewClients: "Клиенттер саны бойынша қосылғандарды тізімдеңіз",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "1 клиент";
        }
        return `${opt.length} клиенттер`;
      }
    },
    key: {
      label: {
        key: "Кілт",
        encoding: "Кодтау",
        length: "Өлшем",
        ttl: "TTL",
        ttlTitle: "Өмір сүру уақыты",
        type: "Түр",
        ttlNotExpire: "мерзімі бітпейді",
        lengthString: "байт",
        lengthItem: "заттар",
        actions: "Әрекеттер"
      },
      list: {
        table: {
          index: "Индекс",
          value: "Мән"
        }
      },
      hash: {
        table: {
          hashkey: "Хэшкей",
          value: "Мән"
        }
      },
      set: {
        table: {
          value: "мүше"
        }
      },
      zset: {
        table: {
          value: "мүше",
          score: "Ұпай"
        }
      },
      stream: {
        table: {
          timestamp: "Уақыт белгісінің идентификаторы",
          field: "Өріс",
          value: "Мән"
        }
      }
    },
    treeControls: {
      settings: "Ағаш параметрлері",
      expandAll: "Барлығын кеңейту",
      collapseAll: "Барлығын жинаңыз",
      search: {
        search: "Пернелерден іздеңіз",
        clear: "Бос орнату үшін ағымдағы іздеуді өшіріңіз",
        placeholderClient: "Клиент жағынан іздеу",
        placeholderServer: "Сервер жағынан іздеу",
        info: "Клиенттік іздеу оның іздеу кірісіндегі мәтінге сәйкес келетінін б��лдіреді. Сервер жағынан іздеу дегеніміз, бұл *{search-text}* сияқты пернелер үлгілеріндегі іздеу сияқты. Үлкен іздеу жиындары үшін серверлік іздеуді қолданған дұрыс. Кішірек іздеу жиындары үшін клиенттік іздеу режимін қолданған дұрыс." + ` Егер кілттерді санау аяқталса ${p3xr.settings.maxLightKeysCount}, тек сервер жағынан іздеуге болады.`,
        largeSetInfo: "Үлкен жиынтықта клиенттік іздеу өшірілген. сондықтан дәл қазір тек сервер жағынан іздеу мүмкін.",
        infoDetails: "Іздеу қалай жұмыс істейтінін білу үшін параметрлерді тексеріңіз"
      },
      pager: {
        next: "Келесі",
        prev: "Алдыңғы",
        first: "Бірінші",
        last: "Соңғы"
      }
    }
  },
  time: {
    loading: "Жүктелуде...",
    years: "жылдар",
    months: "айлар",
    days: "күндер",
    year: "жыл",
    month: "ай",
    day: "күні"
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
