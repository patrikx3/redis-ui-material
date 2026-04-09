const strings = {
  error: {
    server_error: "Сервер қатесі, әрекетті қайталаңыз"
  },
  title: {
    donate: "Садақа беру",
    donateTitle: "P3X Redis UI-ді қолдаңыз",
    donateDescription: "P3X Redis UI — тегін, ашық бастапқы код жобасы. Қосымшаны, AI мүмкіндіктерін, Docker кескіндерін, серверлерді және инфрақұрылымды ұстау шығындары әзірлеушінің өз қалтасынан шығады. Бұл құралды пайдалы деп тапсаңыз, оның үздіксіз дамуын қайырмалдықпен қолдауды қарастырыңыз. Әрбір үлес жобаны тірі және өсіп келе жатқан ұстауға көмектеседі. Рахмет!",
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
    threads: "Ағындар"
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
    delete: "\u0416\u043e\u044e?",
    deleteNode: "Осы Redis түйінін жоюға сенімдісіз бе?",
    deleteAllKeys: opts => {
      return `Осы ағашты және оның барлық кілттерін жойыңыз (${opts.key})?`;
    },
    deleteSearchKeys: opts => {
      return `"${opts.pattern}" сәйкес келетін барлық кілттерді жоюға сенімдісіз бе? ${opts.count} кілт табылды.`;
    },
    socketioConnectError: "Socket.IO серверге қосыла алмайды, сіз қайта жүктеп, қосылым қатесін өзіңіз шеше аласыз, клиент оны қалай шешу керектігін білмейді.",
    socketioAuthRequired: "Socket.IO авторизациясы қажет. HTTP Basic Auth (пайдаланушы аты/құпия сөз) көмегімен аутентификациядан өтіп, қайта жүктеңіз.",
    invalidCredentials: "Жарамсыз пайдаланушы аты немесе құпия сөз.",
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
    deleteAllKeysMenu: (opts) => `Барлығын жою ${opts.count}`,
    importKeys: "Кілттерді импорттау",
    deleteSearchKeys: (opts) => `${opts.count} сәйкес кілтті жою`,
    saveWithFormatJson: "Пішіммен сақтау",
    formatJson: "Json пішімі",
    wrap: "Орау",
    unwrap: "Орамды ашу",
    downloadJson: "JSON жүктеп алыңыз",
    pubsubMonitor: "PubSub",
    pulse: "Pulse",
    profiler: "Profiler",
    memoryAnalysis: "Analysis",
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
    logout: "Шығу",
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
    delete: "Жою",
    remove: "Жою",
    areYouSure: "Сенімдісіз бе?",
    sure: "Әрине",
    testConnection: "Сынақ қосылымы",
    getKey: "Redis кілті мен байланысты деректер жүктелуде ...",
    jsonViewShow: "JSON дисплейі",
    jsonViewEditor: "JSON өңдеу",
    quickConsole: "Жылдам консоль"
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
    languageAuto: "Auto (system)",
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
    type: "Түрі",
    format: "Формат",
    loading: "Жүктелуде...",
    autoRefresh: "Авто",
    exportSearchHint: "Тек ағымдағы іздеуге сәйкес кілттер экспортталады",
    importSearchHint: "Импорт іздеу нәтижелеріне ғана емес, бүкіл дерекқорға қолданылады",
    deleteSearchHint: "Сервердегі ағымдағы іздеуге сәйкес барлық кілттерді жояды",
    deletingSearchKeys: "Сәйкес кілттер жойылуда...",
    importNoKeys: "Файлдан кілттер табылмады",
    desktopNotifications: "Desktop Notifications",
    desktopNotificationsEnabled: "Enable desktop notifications",
    desktopNotificationsInfo: "Receive OS notifications for Redis disconnections and reconnections when the app is not focused."
  },
  status: {
    dataCopied: "Деректер алмасу буферінде",
    exportDone: "Экспорт аяқталды",
    deletedSearchKeys: (opts) => `${opts.count} кілт жойылды`,
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
    set: "Кілт орнатылған/қосылған",
    connectionRestored: "Connection restored"
  },
  code: {
    "delete-connection": "Бұл қосылым жойылды, сондықтан сіз осы Redis данасына ажыратылдыңыз.",
    "save-connection": "Бұл қосылым өзгертілді, сондықтан сіз осы Redis данасына ажыратылдыңыз. Сіз қайта қосыла аласыз.",
    "readonly-connections": "Қосылымдар қосу/сақтау/жою тек оқуға арналған!",
    "readonly-connection-mode": "Бұл қосылым тек оқуға арналған режим!",
    "list-out-of-bounds": "Бұл тізім индексі шектен тыс",
    "invalid-json-value": "Мән жарамсыз JSON.",
    "http_auth_required": "Авторизация қажет: HTTP Basic Auth көмегімен аутентификациядан өтіп, қайта жүктеңіз.",
    "auto-connection-failed": "Мүмкін, осыған байланысты қосылым жойылды және автоматты қосылым сәтсіз аяқталды.",
    invalid_console_command: "Бұл пәрмен GUI арқылы жұмыс істемейді.",
    "AI_DISABLED": "AI өшірілген. AI параметрлерінде қосыңыз.",
    "AI_PROMPT_REQUIRED": "AI сұрауы қажет.",
    "GROQ_API_KEY_READONLY": "Groq API кілті тек оқу үшін және өзгертуге болмайды.",
    "blocked_api_access": "Groq API жоспарыңыз бұл модельге кіруге рұқсат бермейді. Groq жоспарын жаңартыңыз немесе network.corifeus.com проксиін пайдаланыңыз.",
    "rate_limit": "AI жылдамдық шегіне жетті. Кейінірек қайталаңыз немесе параметрлерде өз Groq API кілтіңізді пайдаланыңыз."
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
      keyCount: (opts) => {
        return `Кілттер саны: ${opts?.keyCount ?? 0}`;
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
        value: "Мән",
        errorRate: "Қате деңгейі",
        capacity: "Сыйымділік",
        topk: "Top K",
        width: "Ені",
        depth: "Тереңдігі",
        decay: "Ыдырау",
        compression: "Сығымдау",
        increment: "Өсім",
        item: "Элемент",
        vectorValues: "Вектор мәндері (үтірмен бөлінген)",
        element: "Элемент атауы",
      },
      error: {
        streamTimestamp: "Уақыт белгісі қажет, Redis пішімі немесе * ретінде",
        key: "Ең бастысы, кем дегенде бір таңба",
        hashKey: "Хэш кестесінің кілті кемінде бір таңбадан тұрады",
        score: "Сұрыпталған жиынтық ұпай қажет",
        value: "Мән қажет",
        errorRate: "Қате деңгейі 0 мен 1 арасында болуы керек (мыс. 0.01)",
        capacity: "Сыйымділік оң бүтін сан болуы керек",
        topk: "Top K оң бүтін сан болуы керек",
        width: "Ені оң бүтін сан болуы керек",
        depth: "Тереңдігі оң бүтін сан болуы керек",
        item: "Элемент қажет"
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
      fieldName: "Өріс атауы"
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
      rss: "RSS",
      peak: "Шың",
      fragmentation: "Фрагментация",
      hitsAndMisses: "Тапқандар / Жоғалтқандар",
      noClients: "Клиенттер жоқ"
    },
    analysis: {
      title: "Жад талдауы",
      runAnalysis: "Талдауды бастау",
      running: "Талдануда...",
      typeDistribution: "Түр бойынша таралуы",
      prefixMemory: "Префикс бойынша жад",
      topKeysByMemory: "Жад бойынша ең үлкен кілттер",
      expirationOverview: "Кілт мерзімі",
      memoryBreakdown: "Жад бөлінісі",
      keysScanned: "Сканерленген кілттер",
      totalMemory: "Жалпы жад",
      rssMemory: "RSS жады",
      peakMemory: "Шыңдық жад",
      luaMemory: "Lua жады",
      overheadMemory: "Қосымша жүктеме",
      datasetMemory: "Деректер жиыны",
      fragmentation: "Фрагментация",
      allocator: "Бөлгіш",
      withTTL: "TTL бар",
      persistent: "Тұрақты",
      avgTTL: "Орташа TTL",
      prefix: "Префикс",
      keyCount: "Кілт саны",
      memoryUsage: "Жад қолданылуы",
      noPrefix: "(префикссіз)",
      topN: "Top N",
      maxScanKeys: "Макс. сканерлеу кілттері",
      type: "Түр",
      noData: "Деректер жоқ. Бастау үшін Талдауды бастау батырмасын басыңыз.",
      exportAll: "Барлығын экспорттау"
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
        compression: "Сығымдау",
        aiRateLimited: "AI сұраныстар шегіне жетті. Кейінірек қайталап көріңіз немесе Параметрлерде өз Groq API кілтіңізді пайдаланыңыз.",
        aiError: "AI сұранысы сәтсіз аяқталды",
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
      },
      timeseries: {
        chart: "\u0414\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0430",
        info: "\u0410\u049b\u043f\u0430\u0440\u0430\u0442",
        addPoint: "\u0414\u0435\u0440\u0435\u043a\u0442\u0435\u0440 \u043d\u04af\u043a\u0442\u0435\u0441\u0456\u043d \u049b\u043e\u0441\u0443",
        from: "\u0411\u0430\u0441\u0442\u0430\u043f (ms \u043d\u0435\u043c\u0435\u0441\u0435 -)",
        to: "\u0410\u044f\u049b\u0442\u0430\u043b\u0443 (ms \u043d\u0435\u043c\u0435\u0441\u0435 +)",
        aggregation: "\u0410\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u044f",
        timeBucket: "\u0428\u0435\u043b\u0435\u043a (ms)",
        none: "\u0416\u043e\u049b",
        dataPoints: "\u0434\u0435\u0440\u0435\u043a\u0442\u0435\u0440 \u043d\u04af\u043a\u0442\u0435\u043b\u0435\u0440\u0456",
        labels: "\u0411\u0435\u043b\u0433\u0456\u043b\u0435\u0440",
        rules: "\u0415\u0440\u0435\u0436\u0435\u043b\u0435\u0440",
        retention: "\u0421\u0430\u049b\u0442\u0430\u0443",
        timestamp: "\u0423\u0430\u049b\u044b\u0442 \u0431\u0435\u043b\u0433\u0456\u0441\u0456",
        value: "\u041c\u04d9\u043d",
        retentionHint: "0 = \u043c\u0435\u0440\u0437\u0456\u043c\u0456 \u0436\u043e\u049b, \u043d\u0435\u043c\u0435\u0441\u0435 \u043c\u0438\u043b\u043b\u0438\u0441\u0435\u043a\u0443\u043d\u0434",
        duplicatePolicy: "\u041a\u04e9\u0448\u0456\u0440\u043c\u0435 \u0441\u0430\u044f\u0441\u0430\u0442\u044b",
        labelsHint: "key1 value1 key2 value2",
        timestampHint: "'*' \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0442\u044b \u0442\u04af\u0440\u0434\u0435 \u0436\u0430\u0441\u0430\u043b\u0430\u0434\u044b, \u043d\u0435\u043c\u0435\u0441\u0435 \u043c\u0438\u043b\u043b\u0438\u0441\u0435\u043a\u0443\u043d\u0434 \u0443\u0430\u049b\u044b\u0442 \u0431\u0435\u043b\u0433\u0456\u0441\u0456",
        editAllHint: "\u04d8\u0440 \u0436\u043e\u043b\u0434\u0430 \u0431\u0456\u0440 \u0434\u0435\u0440\u0435\u043a\u0442\u0435\u0440 \u043d\u04af\u043a\u0442\u0435\u0441\u0456: \u0443\u0430\u049b\u044b\u0442_\u0431\u0435\u043b\u0433\u0456\u0441\u0456 \u043c\u04d9\u043d (\u0443\u0430\u049b\u044b\u0442 \u0431\u0435\u043b\u0433\u0456\u0441\u0456 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0442\u044b \u04af\u0448\u0456\u043d * \u0431\u043e\u043b\u0443\u044b \u043c\u04af\u043c\u043a\u0456\u043d)",
        autoSpread: "\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0442\u044b * \u0442\u0430\u0440\u0430\u043b\u0443 \u0430\u0440\u0430\u043b\u044b\u0493\u044b",
        formula: "\u0424\u043e\u0440\u043c\u0443\u043b\u0430",
        formulaLinear: "\u0421\u044b\u0437\u044b\u049b\u0442\u044b\u049b",
        formulaRandom: "\u041a\u0435\u0437\u0434\u0435\u0439\u0441\u043e\u049b",
        formulaSawtooth: "\u0410\u0440\u0430 \u0442\u0456\u0441\u0442\u0456",
        formulaPoints: "\u041d\u04af\u043a\u0442\u0435\u043b\u0435\u0440",
        formulaAmplitude: "\u0410\u043c\u043f\u043b\u0438\u0442\u0443\u0434\u0430",
        formulaOffset: "\u042b\u0493\u044b\u0441\u0443",
        generate: "\u0416\u0430\u0441\u0430\u0443",
        exportChart: "PNG \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0442\u0430\u0443",
        overlay: "\u04ae\u0441\u0442\u0456\u043d\u0435 \u049b\u043e\u044e \u043a\u0456\u043b\u0442\u0442\u0435\u0440",
        overlayHint: "\u04ae\u0442\u0456\u0440\u043c\u0435\u043d \u0431\u04e9\u043b\u0456\u043d\u0433\u0435\u043d \u043a\u0456\u043b\u0442\u0442\u0435\u0440",
        mrangeFilter: "\u0411\u0435\u043b\u0433\u0456\u043b\u0435\u0440 \u0441\u04af\u0437\u0433\u0456\u0441\u0456",
        bulkMode: "Жаппай генерация",
        mrangeHint: "\u043c\u044b\u0441. sensor=temp"
      },
      probabilistic: {
        info: "Ақпарат",
        addItem: "Элемент қосу",
        checkItem: "Элементті тексеру",
        item: "Элемент",
        exists: "Бар",
        doesNotExist: "Жоқ",
        topkList: "Үздік элементтер",
        topkCount: "Саны",
        queryCount: "Сұраныс саны",
        queryResult: "Сұраныс нәтижесі",
        addedSuccessfully: "Элемент сәтті қосылды",
        deletedSuccessfully: "Элемент сәтті жойылды",
        quantile: "Квантиль",
        quantileResult: "Нәтиже",
        noItems: "Көрсетілетін элементтер жоқ",
        resetConfirm: "Осы T-Digest ішіндегі барлық деректерді қалпына келтіру керек пе?"
      },
      vectorset: {
        info: "Ақпарат",
        elements: "Элементтер",
        similarity: "Ұқсастық іздеу",
        searchByElement: "Элемент бойынша іздеу",
        searchByVector: "Вектор бойынша іздеу",
        vectorValues: "Вектор мәндері",
        element: "Элемент",
        score: "Ұпай",
        count: "Саны",
        addElement: "Элемент қосу",
        attributes: "Атрибуттар",
        noAttributes: "Атрибуттар жоқ",
        dimensions: "Өлшемдер",
        removeConfirm: "Бұл элементті VectorSet-тен жою керек пе?",
        noElements: "Элементтер жоқ",
      }
    },
    treeControls: {
      settings: "Ағаш параметрлері",
      expandAll: "Барлығын кеңейту",
      collapseAll: "Барлығын жинаңыз",
      level: "Деңгей",
      search: {
        search: "Пернелерден іздеңіз",
        clear: "Бос орнату үшін ағымдағы іздеуді өшіріңіз",
        placeholderClient: "Клиент жағынан іздеу",
        placeholderServer: "Сервер жағынан іздеу",
        info: (opts) => "Клиенттік іздеу оның іздеу кірісіндегі мәтінге сәйкес келетінін б��лдіреді. Сервер жағынан іздеу дегеніміз, бұл *{search-text}* сияқты пернелер үлгілеріндегі іздеу сияқты. Үлкен іздеу жиындары үшін серверлік іздеуді қолданған дұрыс. Кішірек іздеу жиындары үшін клиенттік іздеу режимін қолданған дұрыс." + ` Егер кілттерді санау аяқталса ${opts?.maxLightKeysCount ?? 110000}, тек сервер жағынан іздеуге болады.`,
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
    type: "Түрі",
    format: "Формат",
    loading: "Жүктелуде...",
    years: "жылдар",
    months: "айлар",
    days: "күндер",
    year: "жыл",
    month: "ай",
    day: "күні",
    second: "\u0441\u0435\u043a\u0443\u043d\u0434",
    seconds: "\u0441\u0435\u043a\u0443\u043d\u0434",
    minute: "\u043c\u0438\u043d\u0443\u0442",
    minutes: "\u043c\u0438\u043d\u0443\u0442",
    hour: "\u0441\u0430\u0493\u0430\u0442",
    hours: "\u0441\u0430\u0493\u0430\u0442"
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
    bloom: "Bloom сүзgі",
    cuckoo: "Cuckoo сүзgі",
    topk: "Top-K",
    cms: "Count-Min Sketch",
    tdigest: "T-Digest",
    vectorset: "VectorSet",
  }
};
module.exports = strings;
