const strings = {
  error: {
    cleared_license: "Ачышчаная ліцэнзія",
    invalid_license: "Несапраўдная ліцэнзія",
    license_max_devices_reached: "Дасягнута максімальная колькасць месцаў для прылад",
    license_readonly: "Ліцэнзію можна змяніць толькі з тэрмінала сервера.",
    server_error: "Памылка сервера, паспрабуйце яшчэ раз"
  },
  title: {
    donate: "Ахвяраваць",
    jsonRecursive: "Разгарнуўшы ўсе лісце",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "Вы можаце выбраць злучэнне Redis для падлучэння з левага ніжняга меню.",
    statistics: "Статыстыка",
    error: "Памылка",
    connectingRedis: "Падключэнне да Redis...",
    socketioConnectError: "Памылка Socket.IO",
    db: "DB",
    server: "Сервер",
    clients: "Кліенты",
    memory: "Памяць",
    persistence: "Настойлівасць",
    stats: "Статыстыка",
    replication: "Рэплікацыя",
    cpu: "CPU",
    cluster: "Cluster",
    modules: "Модулі",
    errorstats: "Статыстыка памылак",
    commandstats: "Статыстыка каманд",
    latencystats: "Статыстыка затрымак",
    keysizes: "Памеры ключоў",
    threads: "Патокі",
  },
  confirm: {
    dropIndex: "Вы ўпэўнены, што хочаце выдаліць гэты індэкс?",
    uploadBuffer: "Вы ўпэўненыя, што хочаце загрузіць гэтыя двайковыя дадзеныя?",
    uploadBufferDone: "Двайковыя дадзеныя загружаюцца",
    uploadBufferDoneAndSave: "Двайковыя дадзеныя загружаюцца і захоўваюцца на серверы",
    title: "Пацвердзіць",
    alert: "Абвестка",
    info: "Інфармацыя",
    deleteListItem: "Вы ўпэўнены, што хочаце выдаліць гэты элемент спісу?",
    deleteHashKey: "Вы ўпэўнены, што хочаце выдаліць гэты элемент хэш-ключа?",
    deleteStreamTimestamp: "Вы ўпэўнены, што хочаце выдаліць гэту метку часу?",
    deleteSetMember: "Вы ўпэўнены, што хочаце выдаліць гэты ўдзельнік?",
    deleteZSetMember: "Вы ўпэўнены, што хочаце выдаліць гэты адсартаваны элемент?",
    deleteConnection: "Пацвердзіць",
    deleteConnectionText: "Вы ўпэўнены, што хочаце выдаліць гэта злучэнне Redis?",
    deleteNode: "Вы ўпэўнены, што хочаце выдаліць гэты вузел Redis?",
    deleteAllKeys: opts => {
      return `Выдаліць гэта дрэва і ўсе яго ключы (${opts.key})?`;
    },
    socketioConnectError: "Socket.IO не можа падключыцца да сервера, вы можаце перазагрузіць і паспрабаваць вырашыць памылку злучэння самастойна, кліент не ведае, як яе вырашыць.",
    socketioAuthRequired: "Патрабуецца аўтарызацыя Socket.IO. Прайдзіце аўтэнтыфікацыю з дапамогай HTTP Basic Auth (імя карыстальніка/пароль) і перазагрузіце.",
    deleteKey: "Вы ўпэўнены, што хочаце выдаліць гэты ключ?",
    rename: {
      title: "Вы ўпэўнены, што хочаце перайменаваць гэты ключ?",
      textContent: "Гэта дзеянне назаўсёды перайменуе ключ.",
      placeholder: "Ключ Redis (абавязковы)"
    },
    ttl: {
      title: "Вы ўпэўнены, што хочаце змяніць TTL гэтага ключа?",
      textContent: "Змена TTL абнаўляе час жыцця гэтага ключа. Пакіньце пустым, каб захаваць гэты ключ назаўжды.",
      placeholder: "TTL ключа Redis (цэлы або пусты)",
      placeholderPlaceholder: "Пусты азначае, што ён захоўваецца вечна; інакш увядзіце цэлы лік.",
      convertTextToTime: "Пераўтварэнне тэксту ў час",
      convertTextToTimePlaceholder: "напр. 1d будзе 86400"
    },
    license: {
      title: "Усталяваць ліцэнзію",
      textContent: "Калі вы хочаце выкарыстоўваць платныя функцыі, звяжыцеся з support@corifeus.com, каб запытаць ліцэнзію. Кошт Pro 400 HUF/месяц (1 еўра/месяц) або 4000 HUF/год (10 еўра/год), а Enterprise — 1200 HUF/месяц (3 еўра/месяц) або 12 000 HUF/год (30 €/год). Штогод - 10 разоў на месяц. З 27% VAT, агульны кошт складае Pro 500 HUF/месяц (1,27 €/месяц) або 5100 HUF/год (12,70 €/год), Enterprise 1500 HUF/месяц (3,81 €/месяц) або 15 200 HUF/год (38,10 €/год). Для праверкі ліцэнзіі неабходны доступ у Інтэрнэт. Ліцэнзія па змаўчанні ўключае 5 месцаў. Калі вам трэба больш месцаў, звяжыцеся з намі па адрасе support@corifeus.com.",
      placeholder: "Ліцэнзійны ключ"
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
    copy: "Копія",
    downloadBuffer: "Спампаваць двайковы файл",
    setBuffer: "Загрузіць двайковы файл",
    exportKeys: "Экспарт ключоў",
    exportAllKeys: (opts) => `Экспарт усіх ${opts.count} ключоў`,
    exportSearchResults: (opts) => `Экспарт ${opts.count} вынікаў`,
    importKeys: "Імпарт ключоў",
    saveWithFormatJson: "Захаваць у фармаце",
    formatJson: "Фармат Json",
    wrap: "Абгарнуць",
    unwrap: "Разгарнуць",
    downloadJson: "Спампаваць JSON",
    pubsubMonitor: "Манітор PubSub",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "мова",
    ok: "добра",
    addKey: "Дадайце да гэтага ключа",
    addKeyRoot: "Дадайце каранёвы ключ",
    reloadKey: "Ключ перазагрузкі",
    reload: "Перазагрузіць",
    close: "Блізка",
    commands: "Каманды",
    view: "Выгляд",
    statistics: "Статыстыка",
    refresh: "Абнавіць",
    pause: "Паўза",
    resume: "Працягнуць",
    clear: "Ясна",
    rename: "Перайменаваць",
    main: "База дадзеных",
    cancel: "Адмяніць",
    theme: "Тэма",
    github: "GitHub",
    githubRepo: "Сховішча",
    githubRelease: "Рэлізы",
    githubChangelog: "Журнал змяненняў",
    info: "Info",
    settings: "Налады",
    connect: "Злучыцца",
    disconnect: "Адключыцца",
    overview: "Агляд",
    console: "Кансоль",
    noConnections: "Няма падключэнняў, дадайце падключэнне ў меню налад.",
    noConnectionsInSettings: "Няма падключэнняў, вы можаце дадаць НОВАЕ ПАДКЛЮЧЭННЕ вышэй.",
    connectionAdd: "Новае злучэнне",
    addGroup: "Дадаць групу",
    extend: "Пашырыць",
    collapse: "Згарнуць",
    add: "Дадаць",
    edit: "Рэдагаваць",
    save: "Захаваць",
    ttl: "Набор TTL",
    license: "Усталяваць ліцэнзію",
    delete: "Выдаліць",
    remove: "Выдаліць",
    sure: "Вядома",
    testConnection: "Тэставае злучэнне",
    getKey: "Загрузка ключа Redis і звязаных з ім даных...",
    jsonViewShow: "Дысплей JSON",
    jsonViewEditor: "Рэдагаваць JSON",
    quickConsole: "Хуткая кансоль",
  },
  label: {
    id: {
      nodeId: "Ідэнтыфікатар вузла",
      id: "Ідэнтыфікатар злучэння",
      info: "Калі вы не хочаце змяняць уласцівасці: sshPassword, sshPrivateKey, password, tlsCrt, tlsKey, tlsCa, увядзіце ідэнтыфікатар злучэння ў гэтыя ўласцівасці, каб захаваць значэнні ўласцівасцей. Калі вы хочаце такую ​​ж логіку ў паролі вузла, увядзіце ідэнтыфікатар вузла ў паролі вузла."
    },
    secureFeature: "Калі вы бачыце значэнне, якое пачынаецца з P3X і выглядае аднолькава, гэта бяспечная функцыя. Каб змяніць налады, проста заменіце гэтыя налады пустымі або іншымі, і яны будуць захаваны. Калі вы не зменіце налады, налады будуць захаваны ў тым выглядзе, у якім яны ёсць на серверы.",
    aiTranslating: "Translating...",
    aiSettings: "Налады ШІ",
    aiGroqApiKey: "Ключ API Groq",
    aiGroqApiKeyInfo: "Неабавязкова. Уласны ключ API Groq для лепшай прадукцыйнасці. Атрымайце бясплатны ключ на",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "Ключ API ШІ захаваны",
    aiGroqApiKeyNotSet: "Не ўстаноўлена (па змаўчанні сервера)",
    ssh: {
      on: "SSH ук��",
      off: "SSH выключаны",
      sshHost: "Хост SSH",
      sshPort: "Порт SSH",
      sshUsername: "SSH імя карыстальніка",
      sshPassword: "Пароль SSH",
      sshPrivateKey: "Закрыты ключ SSH"
    },
    isBuffer: opts => `[object ArrayBuffer] азначае, што значэнне з'яўляецца двайковым даным або значэнне большае за ${opts.maxValueAsBuffer}`,
    streamValue: `Поле і значэнне патоку з'яўляюцца адзіным радком. Напрыклад: поле1 значэнне1 "поле 2" "значэнне 2"`,
    streamTimestampId: `«*» азначае аўтаматычнае стварэнне або спецыфікацыю як <millisecondsTime>-<sequenceNumber>`,
    unableToLoadKey: ({
      key
    }) => {
      return `Немагчыма загрузіць гэты ключ: ${key}. Магчыма, ключ быў выдалены. Дакладная памылка знаходзіцца ў кансолі.`;
    },
    bigJson: "Гэты аб'ект JSON мае больш за 10 кб, таму пераканайцеся, што вы ведаеце, што вы робіце, таму што некаторыя функцыі могуць павольна адлюстроўвацца.",
    addNode: "Дадаць вузел",
    validateJson: "Праверце JSON",
    reducedFunction: `Зніжэнне функцыянальнасці`,
    tooManyKeys: opts => {
      return `Для поўнай максімальнай колькасці дазволеных функцый агульная колькасць ключоў складае ${opts.maxLightKeysCount} разлічваць. У гэтай базе дадзеных больш за дазволеных ключоў ${opts.count}. Сартаванне па ключах і дадатковая мудрагелістая інфармацыя аб дрэве адключана. Пошук адбываецца толькі на серверы замест пошуку кліента.`;
    },
    redisCommandNotFound: "Супадзенне каманды Redis не знойдзена ...",
    treeKeyStore: `Сартаванне (натуральнае параўнанне) выконваецца на кліенце, таксама вядомым як браўзер, што азначае, што ён мае штраф для вялікіх набораў, такіх як больш за 10 тысяч ключоў, гэта можа дадаць трохі часу для рэндэрынгу старонкі. У Redis няма сартавання ключоў, толькі вось так.`,
    socketIoTimeout: options => {
      return `Час чакання Socket.IO для гэтага запыту скончыўся (макс ${options.timeout / 1000} секунды)...`;
    },
    resizerInfo: options => {
      return `Мінімальная шырыня левай або правай панэлі ${options.width}пікс`;
    },
    jsonViewNotParsable: "Гэта значэнне не паддаецца аналізу JSON  ",
    ttlTitle: "Усталюйце TTL за секунды",
    passwordSecure: "Пароль можа быць пустым, але ён будзе паказваць сімвалы, гэта функцыя бяспекі.",
    tlsWithoutCert: "Уключыць TLS без дадатковага сертыфіката",
    tlsRejectUnauthorized: "Адхіліць несанкцыянаваны сертыфікат",
    tlsSecure: "Калі вы бачыце канфігурацыю TLS, якая пачынаецца з P3X або ўсе налады TLS выглядаюць аднолькава, гэта бяспечная функцыя. Каб змяніць налады, проста заменіце гэтыя налады пустымі або іншымі, і яны будуць захаваны. Калі вы не зменіце налады TLS, налады будуць захаваны ў тым выглядзе, у якім яны ёсць на серверы.",
    treeSeparatorEmpty: "Калі падзельнік дрэва пусты, дрэва не будзе мець укладзеных вузлоў, толькі чысты спіс",
    treeSeparatorEmptyNote: "Няма ўкладзеных вузлоў, толькі чысты спіс",
    welcomeConsole: "Вітаем у кансолі Redis",
    welcomeConsoleInfo: "Гісторыя курсора УВЕРХ або ЎНІЗ уключана",
    redisListIndexInfo: "Пусты, каб дадаць, -1, каб дадаць або захаваць у паказанае месца.",
    console: "Кансоль",
    connectiondAdd: "Дадаць злучэнне",
    connectiondEdit: "Рэдагаваць злучэнне",
    connectiondView: "Прагляд злучэння",
    connections: "Сувязі",
    licenseInfo: "Ліцэнзія",
    licenseEditable: "Ліцэнзію можна рэдагаваць",
    licenseEditableYes: "так",
    licenseEditableNo: "няма",
    licenseTerminalOnly: "Ліцэнзію можна наладзіць толькі з тэрмінала сервера.",
    licenseTierPolicyTitle: "Палітыка ўзроўню",
    licenseTierPolicyText: "<h4>Free</h4>core Redis толькі карыстацкі інтэрфейс; ��яма тунэлявання SSH, няма рэжыму злучэння толькі для чытання, няма Cluster/Sentinel, няма Рэдагаваць JSON/Загрузіць двайковы файл/Спампаваць двайковы файл, няма ReJSON.<br/><strong>Цана: 0 HUF/месяц (€0/месяц).</strong><br/><br/><h4>Pro</h4>SSH тунэляванне, рэжым злучэння толькі для чытання (уключаючы --readonly-connections/-r), Рэдагаваць JSON, Загрузіць двайковы файл, Спамп��ваць двайковы файл, ReJSON.<br/><strong>Базавая цана: 400 HUF/месяц (1 еўра/месяц) або 4000 HUF/год (10 €/год).</strong><br/><strong>Усяго з 27% VAT: 500 HUF/месяц (1,27 €/месяц) або 5100 HUF/год (12,70 €/год).</strong><br/><br/><h4>Enterprise</h4>SSH тунэляванне, Cluster і Sentinel, а таксама рэдагаваць JSON, загружаць двайковы файл, спампоўваць двайковы файл, ReJSON; --readonly-connections/-r таксама працуе. <br/><strong>Базавая цана: 1200 HUF/месяц (3 €/месяц) або 12 000 HUF/год (30 еўра/год).</strong><br/><strong>Усяго з 27% VAT: 1500 HUF/месяц (3,81 еўра/месяц) або 15200 HUF/год (38,10 еўра/год).</strong><br/><br/><h4>Гадавы правіла</h4>Гадавы кошт у 10 разоў большы за месяц цана.<br/><br/><h4>Seats</h4>Ліцэнзія па змаўчанні ўключае 5 месцаў. Калі вам патрэбна больш месцаў, звяжыцеся з намі па адрасе <a href='mailto:mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><br/><h4>EПрабная версія для прадпрыемства</h4>10 дзён бясплатна для тых, хто мае рэальны існуючы адрас электроннай пошты (нетэставая электронная пошта).<br/><hr/><h4>Інфармацыя аб аплаце ў электроннай пошце</h4>Імя, адрас электроннай пошты для выстаўлення рахункаў, код краіны, паштовы індэкс, горад, адрас, VAT ID (неабавязкова).<br/><br/><h4>Аплата</h4>PayPal аплата даступная толькі ў HUF (форынт); пасля адпраўкі грошай @ <a href='https://paypal.me/corifeus'>https://paypal.me/corifeus</a> я вышлю вам рахунак. Усе плацяжы вяртанню не падлягаюць.<br/><br/><h4>VAT</h4>VAT дадаецца да кошту (27% у Венгрыя).<br/><hr/><h4>Кантакт</h4>Калі вы хочаце перадаць прывітанне ці ў вас ёсць пытанне, звяжыцеся <a href='mailto:mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><hr/><h4>Language</h4>Рахунак-фактура і ліцэнзія па электроннай пошце на англійскай мове. Валюта рахунка-фактуры: HUF.<br/><hr/><h4>Note</h4>Праверка ліцэнзіі патрабуе доступу ў Інтэрнэт.",
    licenseState: "Дзяржава",
    licenseStateActive: "Актыўны",
    licenseStateInactive: "Неактыўны",
    licenseStateNoLicense: "Няма ліцэнзіі",
    licenseKeyMasked: "Захаваны ключ",
    licenseTier: "Ярус",
    licenseValid: "Сапраўдны",
    licenseStatus: "Статус ліцэнзіі",
    licenseReason: "Прычына",
    licenseCheckedAt: "Праверана ў",
    licenseStartsAt: "Пачынаецца ў",
    licenseExpiresAt: "Тэрмін дзеяння заканчваецца ў",
    licenseDaysLeft: "Засталося дзён",
    licenseMaxDevices: "Макс прылад",
    licenseActiveDevices: "Актыўныя прылады",
    licenseActiveDevicesInfo: "Калі прылада больш не выкарыстоўваецца, яе сядзенне вызваляецца аўтаматычна праз 75 хвілін.",
    licenseCustomerEmail: "Электронная пошта кліента",
    licenseFeatures: "Асаблівасці",
    licenseFeaturesEmpty: "Ніякіх дадатковых функцый",
    licenseFeatureReadonlyMode: "Рэжым злучэння толькі для чытання",
    licenseFeatureReadonlyConnectionsFlag: "Злучэнні толькі для чытання (--readonly-connections/-r)",
    licenseFeatureSsh: "SSH тунэляванне",
    licenseFeatureCluster: "Злучэнні Cluster",
    licenseFeatureSentinel: "Злучэнні Sentinel",
    licenseFeatureReJSON: "ReJSON (тып даны�� JSON)",
    keysSort: {
      on: "Сартаванне ключоў уключана",
      off: "Сартаванне ключоў выключана"
    },
    cluster: {
      on: "Cluster укл",
      off: "Cluster выключаны"
    },
    sentinel: {
      on: "Sentinel укл",
      off: "Sentinel выключаны",
      name: "Назва Sentinel"
    },
    readonly: {
      on: "Толькі для чытання ўключана",
      off: "Толькі чытанне выключана"
    },
    proSshOnly: "SSH даступны ў версіях Pro або Enterprise.",
    proReadonlyOnly: "Рэжым падключэння толькі для чытання даступны ў Pro або Enterprise.",
    enterpriseClusterSentinelOnly: "Cluster і Sentinel даступныя толькі ў Enterprise.",
    theme: {
      light: "Святло",
      dark: "Цёмнае прадпрыемства",
      darkNeu: "Цёмны",
      darkoBluo: "Дарка Блуо",
      enterprise: "Прадпрыемства",
      redis: "Redis",
      matrix: "Матрыца"
    },
    connected: opts => {
      return `Падключана: ${opts.name}`;
    },
    tree: "Дрэва",
    askAuth: "Запытаць дазвол",
    keyboardShortcuts: "Keyboard Shortcuts",
    about: "About",
    supportedLanguages: "Supported Languages",
    version: "Version",
    redisVersion: "Redis Version",
    modules: "Модулі",
    shortcutRefresh: "Refresh",
    shortcutSearch: "Focus Search",
    shortcutNewKey: "New Key",
    shortcutDisconnect: "Адключыцца",
    themeAuto: "Auto (system)",
    shortcutCommandPalette: "Command Palette",
    commandPalette: "Command Palette",
    noResults: "No results",
    redisCommandsReference: "Каманды Redis",
    ungrouped: "Без групы",
    grouped: "Grouped",
    connectFirst: "Спачатку падключыцеся да сервера Redis",
    searchLanguage: "Шукаць мову...",
    exportProgress: "Экспарт ключоў...",
    importProgress: "Імпарт ключоў...",
    importPreview: "Папярэдні прагляд",
    importOverwrite: "Перазапісаць",
    importSkip: "Прапусціць",
    importConflict: "Калі ключ ужо існуе:",
    noKeysToExport: "Няма ключоў для экспарту",
    time: "Час",
    loading: "Загрузка...",
    autoRefresh: "Аўта",
    exportSearchHint: "Экспартуюцца толькі ключы, якія адпавядаюць бягучаму пошуку",
    importSearchHint: "Імпарт прымяняецца да ўсёй базы дадзеных, а не толькі да вынікаў пошуку",
    importNoKeys: "Ключы ў файле не знойдзены",
  },
  status: {
    dataCopied: "Дадзеныя знаходзяцца ў буферы абмену",
    licenseSaved: "Ліцэнзія захавана",
    exportDone: "Экспарт завершаны",
    indexCreated: "Індэкс створаны",
    indexDropped: "Індэкс выдалены",
    importDone: (opts) => `Імпарт завершаны: ${opts.created} створана, ${opts.skipped} прапушчана, ${opts.errors} памылак`,
    nodeRemoved: "Вузел выдалены",
    keyIsNotExisting: "Гэты ключ мог быць выдалены або пратэрмінаваны.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "Няма ключа";
      } else if (opts.keyCount === 1) {
        return "1 ключ";
      } else {
        return `${opts.keyCount} ключы`;
      }
    },
    treeExpandAll: "Разгарніце ўсе лісце дрэва. Гэтая аперацыя можа быць дарагой і можа заняць час ...",
    noRedisKeys: "У гэтай базе няма ключоў.",
    redisConnected: "Redis паспяхова падключыўся",
    reloadingDataInfo: "Перазагрузка даных Redis",
    added: "Дададзена",
    saved: "Абноўлены",
    cancelled: "Адменена",
    deleted: "Выдалены",
    savedRedis: "Даныя Redis захаваны",
    redisDisconnected: opts => {
      return `Бягучае злучэнне мела памылку: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `Індэкс db усталяваны ў ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `Ключ дрэва быў выдалены (${opts.key}).`;
    },
    deletedKey: opts => {
      return `Ключ быў выдалены (${opts.key}).`;
    },
    renamedKey: "Гэты ключ быў перайменаваны",
    ttlChanged: "TTL гэтага ключа быў зменены",
    notInteger: "Гэты ўвод не з'яўляецца цэлым лікам",
    persisted: "Гэты ключ захоўваецца вечна",
    set: "Ключ усталяваны/дададзены"
  },
  code: {
    "delete-connection": "Гэта злучэнне было выдалена, таму вы адключаны ад гэтага асобніка Redis.",
    "save-connection": "Гэта злучэнне было зменена, таму вы адключаны ад гэтага асобніка Redis. Вы можаце паўторна падключыцц��.",
    "readonly-connections": "Даданне/захаванне/выдаленне злучэнняў толькі для чытання!",
    "readonly-connection-mode": "Гэта злучэнне ў рэжыме толькі для чытання!",
    "list-out-of-bounds": "Гэты індэкс спісу па-за межамі",
    "donation-ware-feature": "Гэтая функцыя прысутнічае ў версіі для ахвяраванняў.",
    "feature-pro-readonly-required": "Рэжым злучэння толькі для чытання патрабуе ліцэнзіі Pro або Enterprise.",
    "feature-pro-ssh-required": "Тунэляванне SSH патрабуе ліцэнзіі Pro або Enterprise.",
    "feature-enterprise-cluster-sentinel-required": "Cluster і Sentinel патрабуюць ліцэнзіі Enterprise.",
    "feature-pro-json-binary-required": "Рэдагаванне JSON, загрузка двайковага файла і загрузка двайковага файла патрабуюць ліцэнзіі Pro або Enterprise.",
    "feature-pro-rejson-required": "ReJSON (тып даных JSON) патрабуе ліцэнзіі Pro або Enterprise.",
    "invalid-json-value": "Значэнне несапраўднае JSON.",
    "http_auth_required": "Патрабуецца аўтарызацыя: прайдзіце аўтэнтыфікацыю з дапамогай HTTP Basic Auth і перазагрузіце.",
    "auto-connection-failed": "Магчыма, з-за гэтага злучэнне было выдалена і аўтаматычнае злучэнне не атрымалася.",
    invalid_console_command: "Гэтая каманда не працуе праз GUI."
  },
  licenseReason: {
    LICENSE_VALID: "Ліцэнзія сапраўдная",
    LICENSE_INVALID: "Ліцэнзія несапраўдная",
    LICENSE_MISSING: "Ліцэнзійны ключ не ўсталяваны",
    LICENSE_DISABLED: "Ліцэнзія адключана ў канфігурацыі сервера",
    LICENSE_NOT_FOUND: "Ліцэнзія не знойдзена",
    LICENSE_EXPIRED: "Тэрмін дзеяння ліцэнзіі скончыўся",
    LICENSE_CLEARED: "Ліцэнзійны ключ ачышчаны",
    LICENSE_MAX_DEVICES_REACHED: "Дасягнута максімальная колькасць месцаў для прылад",
    PRODUCT_MISMATCH: "Ліцэнзійны прадукт не супадае"
  },
  licenseStatusValue: {
    active: "Актыўны",
    deleted: "Выдалены",
    all: "Усе",
    expired: "Пратэрмінаваны",
    missing: "Прапаў без вестак",
    inactive: "Неактыўны"
  },
  form: {
    error: {
      required: "абавязковы",
      port: "Порт знаходзіцца паміж 1-65535",
      invalid: "Форма несапраўдная"
    },
    connection: {
      label: {
        name: "Імя",
        group: "Group",
        host: "Імя хаста",
        port: "Порт",
        password: "Пароль",
        username: "Імя карыстальніка"
      }
    },
    treeSettings: {
      maxValueDisplay: "Максімальная даўжыня радка адлюстравання значэння",
      maxValueDisplayInfo: "Калі ўстаноўлена 0, паказваць поўныя значэнні. Калі больш за 0, скараціць да гэтай даўжыні. Калі -1: для радкоў, схаваць значэнне да рэдагавання; для іншых тыпаў, паказаць поўны кантэнт.",
      maxKeys: "Максімальная колькасць ключоў",
      maxKeysInfo: "Каб GUI не выходзіць з ладу, мы абмяжоўваем максімальную колькасць ключоў.",
      keyCount: () => {
        return `Колькасць клавіш: ${p3xr.state.keysRaw.length}`;
      },
      label: {
        animation: "Выкарыстоўвайце анімацыю",
        noAnimation: "Без анімацыі",
        jsonFormatTwoSpace: "Фармат JSON з 2 прабеламі",
        jsonFormatFourSpace: "Фармат JSON з 4 прабеламі",
        formName: "Налады Redis",
        searchModeClient: "Рэжым пошуку кліента",
        searchModeServer: "Рэжым пошуку сервера",
        searchModeStartsWith: "Пошук з пачынаецца з рэжыму",
        searchModeIncludes: "Пошук уключае рэжым"
      },
      field: {
        treeSeparator: "Раздзяляльнік дрэў",
        treeSeparatorSelector: "Селектар падзельніка дрэва",
        page: "Колькасць старонак дрэва",
        keyPageCount: "Колькасць ключавых старонак",
        keysSort: "Сартуйце ключы",
        searchMode: "Рэжым пошуку",
        searchModeStartsWith: "Пошук пачынаецца з / уключае"
      },
      error: {
        keyPageCount: "Колькасць ключавых старонак павінна быць цэлым лікам ад 5 да 100",
        page: "Колькасць старонак павінна быць цэлым лікам ад 10 да 5000",
        maxValueDisplay: "Максімальнае адлюстраванае значэнне павінна быць цэлым лікам ад -1 да 32768",
        maxKeys: "Максімальнае значэнне колькасці ключоў павінна быць цэлым лікам ад 100 да 100000"
      }
    },
    key: {
      label: {
        formName: {
          add: "Дадайце новы ключ Redis",
          edit: "Рэдагаваць ключ Redis",
          append: "Дадаць да існуючага ключа Redis"
        }
      },
      field: {
        streamTimestamp: "Метка часу",
        key: "ключ",
        type: "Тып",
        index: "Паказальнік",
        hashKey: "Хэш ключ",
        score: "Ацэнка",
        value: "Каштоўнасць"
      },
      error: {
        streamTimestamp: "Патрабуецца пазнака часу ў фармаце Redis або ў выглядзе *",
        key: "Ключ - гэта хаця б адзін знак",
        hashKey: "Ключ хэш-табліцы складаецца як мінімум з аднаго сімвала",
        score: "Патрабуецца адсартаваны бал",
        value: "Значэнне абавязковае"
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
      title: "Пошук",
      index: "Індэкс",
      query: "Запыт",
      results: "Вынікі",
      noIndex: "Індэксы не знойдзены",
      createIndex: "Стварыць індэкс",
      dropIndex: "Выдаліць індэкс",
      indexInfo: "Інфа пра індэкс",
      indexName: "Назва індэкса",
      prefix: "Прэфікс ключа (неабавязкова)",
      fieldName: "Назва поля",
    },
    monitor: {
      title: "Маніторынг",
      memory: "Памяць",
      opsPerSec: "Аперацый/с",
      clients: "Кліенты",
      blocked: "Заблакіравана",
      hitsMisses: "Каэфіцыент трапленняў",
      networkIo: "Сеткавы ўвод/вывад",
      slowLog: "Павольны журнал",
      totalCommands: "Усяго",
      expired: "Пратэрмінавана",
      evicted: "Выселена",
      clientList: "Спіс кліентаў",
      topKeys: "Найбуйнейшыя ключы",
      killClient: "Забіць кліента",
      clientKilled: "Кліент забіты",
      confirmKillClient: "Вы ўпэўнены, што хочаце спыніць гэтага кліента?",
      noKeys: "Няма ключоў",
      noClients: "Няма кліентаў",
    },
    overview: {
      noConnected: "Няма сувязі з Redis.",
      overviewClients: "Пералічыце падлучаных па колькасці кліентаў",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "1 кліент";
        }
        return `${opt.length} кліентаў`;
      }
    },
    key: {
      label: {
        key: "ключ",
        encoding: "Кадзіроўка",
        length: "Памер",
        ttl: "TTL",
        ttlTitle: "Час жыць",
        type: "Тып",
        ttlNotExpire: "не мінае",
        lengthString: "байт",
        lengthItem: "элементы",
        actions: "Дзеянні"
      },
      list: {
        table: {
          index: "Паказальнік",
          value: "Каштоўнасць"
        }
      },
      hash: {
        table: {
          hashkey: "Хэшкі",
          value: "Каштоўнасць"
        }
      },
      set: {
        table: {
          value: "Член"
        }
      },
      zset: {
        table: {
          value: "Член",
          score: "Ацэнка"
        }
      },
      stream: {
        table: {
          timestamp: "Ідэнтыфікатар пазнакі часу",
          field: "Палявы",
          value: "Каштоўнасць"
        }
      }
    },
    treeControls: {
      settings: "Налады дрэва",
      expandAll: "Разгарнуць усе",
      collapseAll: "Згарнуць усё",
      search: {
        search: "Пошук па ключах",
        clear: "Ачысціць бягучы пошук, каб зрабіць пустым",
        placeholderClient: "Пошук на баку кліента",
        placeholderServer: "Пошук на баку сервера",
        info: "Пошук на баку кліента азначае, што ён адпа��ядае тэксту ўводу пошуку. Пошук на баку сервера азначае, што ён падобны да пошуку ў шаблонах ключоў *{search-text}*. Для вялікіх пошукавых набораў лепш выкарыстоўваць пошук на серверы. Для меншых набораў пошуку лепш выкарыстоўваць рэжым пошуку на баку кліента." + ` Калі падлік ключоў скончыўся ${p3xr.settings.maxLightKeysCount}, вы можаце шукаць толькі на баку сервера.`,
        largeSetInfo: "У вялікім наборы пошук на баку кліента адключаны. таму зараз магчымы толькі пошук на серверы.",
        infoDetails: "Каб даведацца, як працуе пошук, праверце налады"
      },
      pager: {
        next: "Далей",
        prev: "Папярэдні",
        first: "Першы",
        last: "Апошні"
      }
    }
  },
  time: {
    loading: "Загрузка...",
    years: "гадоў",
    months: "месяцаў",
    days: "дзён",
    year: "год",
    month: "месяц",
    day: "дзень"
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
