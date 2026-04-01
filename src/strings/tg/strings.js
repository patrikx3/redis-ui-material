const strings = {
  error: {
    cleared_license: "Иҷозатномаи тозашуда",
    invalid_license: "Иҷозатномаи беэътибор",
    license_max_devices_reached: "Ба ҳадди ниҳоии курсиҳои дастгоҳ расид",
    license_readonly: "Литсензияро танҳо аз терминали сервер иваз кардан мумкин аст.",
    server_error: "Хатогии сервер, лутфан бори дигар кӯшиш кунед"
  },
  title: {
    donate: "Садақа кунед",
    jsonRecursive: "Васеъ кардани ҳама баргҳо",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "Шумо метавонед пайвасти Redis-ро барои пайвастшавӣ аз менюи поёни чап интихоб кунед.",
    statistics: "Статистика",
    error: "Хатогӣ",
    connectingRedis: "Пайвастшавӣ ба Redis ...",
    socketioConnectError: "Хатогии Socket.IO",
    db: "DB",
    server: "Сервер",
    clients: "Мизоҷон",
    memory: "Хотира",
    persistence: "Устуворӣ",
    stats: "Статистика",
    replication: "Репликатсия",
    cpu: "CPU",
    cluster: "Cluster",
    modules: "Модулҳо",
    errorstats: "errorstats",
    commandstats: "commandstats",
    latencystats: "latencystats",
    keysizes: "keysizes",
    threads: "threads",
  },
  confirm: {
    dropIndex: "Шумо мутмаинед, ки ин индексро нест кунед?",
    uploadBuffer: "Оё мутмаин ҳастед, ки ин маълумоти бинариро бор кунед?",
    uploadBufferDone: "Маълумоти дуӣ бор карда мешавад",
    uploadBufferDoneAndSave: "Маълумоти дуӣ боргузорӣ ва дар сервер захира карда мешавад",
    title: "Тасдиқ кунед",
    alert: "Огоҳӣ",
    info: "Маълумот",
    deleteListItem: "Оё мутмаин ҳастед, ки ин ҷузъи рӯйхатро нест кунед?",
    deleteHashKey: "Оё мутмаин ҳастед, ки ин калиди ҳашро нест кунед?",
    deleteStreamTimestamp: "Оё мутмаин ҳастед, ки ин тамғаи ҷараёнро нест кунед?",
    deleteSetMember: "Оё мутмаин ҳастед, ки ин узви маҷмӯаро нест мекунед?",
    deleteZSetMember: "Оё мутмаин ҳастед, ки ин узви маҷмӯи ҷудошударо нест кунед?",
    deleteConnection: "Тасдиқ кунед",
    deleteConnectionText: "Оё мутмаин ҳастед, ки ин пайвасти Redis-ро нест кунед?",
    deleteNode: "Оё мутмаин ҳастед, ки ин гиреҳи Redis-ро нест кунед?",
    deleteAllKeys: opts => {
      return `Ин дарахт ва ҳамаи калидҳои онро нест кунед (${opts.key})?`;
    },
    socketioConnectError: "Socket.IO ба сервер пайваст шуда наметавонад, шумо метавонед аз нав бор кунед ва кӯшиш кунед, ки хатои пайвастшавиро худатон ҳал кунед, муштарӣ намедонад худаш чӣ гуна онро ҳал кунад.",
    socketioAuthRequired: "Иҷозатномаи Socket.IO лозим аст. Лутфан бо HTTP Basic Auth (номи корбар/парол) тасдиқ кунед ва аз нав бор кунед.",
    deleteKey: "Оё мутмаин ҳастед, ки ин калидро нест кунед?",
    rename: {
      title: "Оё мутмаин ҳастед, ки ин калидро тағир диҳед?",
      textContent: "Ин амал калидро ба таври доимӣ иваз мекунад.",
      placeholder: "Калиди Redis (талаб)"
    },
    ttl: {
      title: "Шумо мутмаин ҳастед, ки мехоҳед ин калиди TTL-ро иваз кунед?",
      textContent: "Тағйир додани TTL вақти зинда мондани ин калидро нав мекунад. Барои то абад нигоҳ доштани ин калид холӣ гузоред.",
      placeholder: "Калиди Redis TTL (шумораи бутун ё холӣ)",
      placeholderPlaceholder: "Холӣ маънои онро дорад, ки он то абад боқӣ мемонад; дар акси ҳол адади бутун ворид ку��ед.",
      convertTextToTime: "Матнро ба вақт табдил диҳед",
      convertTextToTimePlaceholder: "Масалан. 1d 86400 хоҳад буд"
    },
    license: {
      title: "Муқаррар кардани иҷозатнома",
      textContent: "If you want to use paid features, please contact support@corifeus.com to request a license. Pricing is Pro 400 HUF/month (€1/month) or 4,000 HUF/year (€10/year), and Enterprise 1,200 HUF/month (€3/month) or 12,000 HUF/year (€30/year). Yearly is 10x monthly. With 27% VAT, totals are Pro 500 HUF/month (€1.27/month) or 5,100 HUF/year (€12.70/year), Enterprise 1,500 HUF/month (€3.81/month) or 15,200 HUF/year (€38.10/year). License validation requires internet access. Default license includes 5 seats. If you need more seats, contact us at support@corifeus.com.",
      placeholder: "Калиди иҷозатнома"
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
    copy: "Нусхабардорӣ",
    downloadBuffer: "Бинариро зеркашӣ кунед",
    setBuffer: "Бинариро бор кунед",
    exportKeys: "Содирот кардани калидҳо",
    exportAllKeys: (opts) => `Содироти ҳамаи ${opts.count} калидҳо`,
    exportSearchResults: (opts) => `Содироти ${opts.count} натиҷа`,
    importKeys: "Воридот кардани калидҳо",
    saveWithFormatJson: "Бо формат захира кунед",
    formatJson: "Формат Json",
    wrap: "печонед",
    unwrap: "Кушодан",
    downloadJson: "Download JSON",
    pubsubMonitor: "Монитор PubSub",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "Забон",
    ok: "Хуб",
    addKey: "Ба ин калид илова кунед",
    addKeyRoot: "Калиди решаро илова кунед",
    reloadKey: "Калидро аз нав бор кунед",
    reload: "Аз нав бор кунед",
    close: "Пӯшед",
    commands: "Фармонҳо",
    view: "Намоиш",
    statistics: "Статистика",
    refresh: "Навсозӣ",
    pause: "Таваққуф",
    resume: "Идома додан",
    clear: "Тоза",
    rename: "Номи дигар",
    main: "Пойгоҳи додаҳо",
    cancel: "Бекор кардан",
    theme: "Мавзӯъ",
    github: "GitHub",
    githubRepo: "Анбор",
    githubRelease: "Варақаҳои",
    githubChangelog: "Тағйирот",
    info: "Info",
    settings: "Танзимотҳо",
    connect: "Пайваст кунед",
    disconnect: "Қатъ кунед",
    overview: "Барраси",
    console: "Консол",
    noConnections: "Пайвастшавӣ нест, пайвастро дар менюи танзимот илова кунед.",
    noConnectionsInSettings: "Пайвастшавӣ нест, шумо метавонед дар боло ПАЙВАСТИ НАВ илова кунед.",
    connectionAdd: "Пайвастагии нав",
    addGroup: "Гурӯҳ илова кунед",
    extend: "дароз кардан",
    collapse: "Фурӯпошӣ",
    add: "Илова",
    edit: "Таҳрир",
    save: "Захира кунед",
    ttl: "Танзими TTL",
    license: "Муқаррар кардани иҷозатнома",
    delete: "Ноб��д кунед",
    remove: "Хориҷ кунед",
    sure: "Албатта",
    testConnection: "Пайвастшавӣ озмоиш",
    getKey: "Калиди Redis ва маълумоти алоқаманд бор карда мешавад ...",
    jsonViewShow: "Намоиши JSON",
    jsonViewEditor: "Таҳрири JSON",
    quickConsole: "Консол зуд",
  },
  label: {
    id: {
      nodeId: "ID гиреҳ",
      id: "ID пайваст",
      info: "Агар шумо нахоҳед, ки хосиятҳои зеринро тағир диҳед: sshPassword, sshPrivateKey, парол, tlsCrt, tlsKey, tlsCa, лутфан ID-и пайвастшавиро дар он хосиятҳо ворид кунед, то арзишҳои амвол бетағйир нигоҳ дошта шаванд. Агар шумо хоҳед, ки мантиқи якхела дар пароли гиреҳ бошад, пас ID-и гиреҳро дар пароли гиреҳ ворид кунед."
    },
    secureFeature: "Агар шумо арзишеро бинед, ки бо P3X оғоз мешавад ва ба як намуди он монанд аст, он хусусияти бехатар аст. Барои тағир додани танзимот, танҳо ин танзимотҳоро бо холӣ ё чизи дигар иваз кунед ва онҳо захира карда мешаванд. Агар шумо танзимотро тағир надиҳед, танзимот ҳамчунон дар сервер нигоҳ дошта мешаванд.",
    ssh: {
      on: "SSH дар",
      off: "SSH хомӯш",
      sshHost: "SSH Мизбон",
      sshPort: "Порти SSH",
      sshUsername: "Номи корбари SSH",
      sshPassword: "пароли SSH",
      sshPrivateKey: "SSH калиди хусусӣ"
    },
    isBuffer: opts => `[object ArrayBuffer] маънои онро дорад, ки арзиш маълумоти дуӣ аст ё арзиш аз он калонтар аст ${opts.maxValueAsBuffer}`,
    streamValue: `Майдони ҷараён ва арзиши он oneliner аст. Масалан: майдони1 арзиши1 "майдони 2" "арзиши 2"`,
    streamTimestampId: `'*' маънои худкор тавлидшуда ё мушаххасотро ҳамчун <millisecondsTime>-<sequenceNumber> дорад`,
    unableToLoadKey: ({
      key
    }) => {
      return `Ин калидро бор кардан ғайриимкон аст: ${key}. Эҳтимол, калид нест карда шуд. Хатогии дақиқ дар консол аст.`;
    },
    bigJson: "Ин объекти JSON зиёда аз 10 кб аст, бинобар ин боварӣ ҳосил кунед, ки шумо чӣ кор карда истодаед, медонед, зеро баъзе вазифаҳо метавонанд суст гардонанд.",
    addNode: "Иловаи гиреҳ",
    validateJson: "Тасдиқ кардани JSON",
    reducedFunction: `Функсияҳои камшуда`,
    tooManyKeys: opts => {
      return `Барои ҳадди пурраи функсияҳои иҷозатдодашуда калидҳои умумии аст ${opts.maxLightKeysCount} шумор. Ин базаи маълумот дар маҷмӯъ зиёда аз калидҳои иҷозатдодашуда дорад ${opts.count}. Ҷудокунии калидҳо ва маълумоти иловагӣ дар бораи дарахти зебо ғайрифаъол аст. Ҷустуҷӯ танҳо дар сервер ба ҷои ҷустуҷӯи муштарӣ сурат мегирад.`;
    },
    redisCommandNotFound: "Ягон мувофиқати фармони Redis ёфт нашуд ...",
    treeKeyStore: `Ҷудокунӣ (муқоисаи табиӣ) дар муштарӣ, яъне браузер иҷро карда мешавад, ки ин маънои онро дорад, ки он барои маҷмӯаҳои калон ҷарима дорад, ба монанди беш аз 10k калидҳо, он метавонад ба намоиши саҳифа вақти каме илова кунад. Дар Redis навъбандии калидӣ вуҷуд надорад, танҳо ҳамин тавр.`,
    socketIoTimeout: options => {
      return `Socket.IO барои ин дархост вақт тамом шуд (макс ${options.timeout / 1000} сония)...`;
    },
    resizerInfo: options => {
      return `Паҳнои ҳадди ақали панели чап ё рост аст ${options.width}px`;
    },
    jsonViewNotParsable: "Ин арзиш аст, JSON parsable нест  ",
    ttlTitle: "TTL-ро дар сонияҳо насб кунед",
    passwordSecure: "Парол метавонад холӣ бошад, аммо ба ҳар ҳол он аломатҳоро нишон медиҳад, ин хусусияти амниятӣ аст.",
    tlsWithoutCert: "TLS-ро бе сертификати иловагӣ фаъол созед",
    tlsRejectUnauthorized: "Шаҳодатномаи беиҷозатро рад кунед",
    tlsSecure: "Агар шумо конфигуратсияи TLS-ро бинед, ки бо P3X оғоз мешавад ё ҳамаи танзимоти TLS ба якхела монанд аст, ин хусусияти бехатар аст. Барои тағир додани танзимот, танҳо ин танзимотҳоро бо холӣ ё чизи дигар иваз кунед ва онҳо захира карда мешаванд. Агар шумо танзимоти TLS-ро тағир надиҳед, танзимот ҳамчунон дар сервер нигоҳ дошта мешаванд.",
    treeSeparatorEmpty: "Агар ҷудокунандаи дарахт холӣ бошад, дарахт ҳеҷ гиреҳи лона надорад, танҳо рӯйхати пок аст",
    treeSeparatorEmptyNote: "Не гиреҳҳои лона, танҳо рӯйхати пок",
    welcomeConsole: "Хуш омадед ба консол Redis",
    welcomeConsoleInfo: "Таърихи курсор ба боло ё поён фаъол аст",
    redisListIndexInfo: "Холӣ барои замима, -1 барои пешнавис ё захира кардани он ба мавқеи нишон додашуда.",
    console: "Консол",
    connectiondAdd: "Пайвастшавӣ илова кунед",
    connectiondEdit: "Таҳрири пайвастшавӣ",
    connectiondView: "Пайвастшавиро дидан",
    connections: "Пайвастшавӣ",
    licenseInfo: "Иҷозатнома",
    licenseEditable: "Литсензия таҳриршаванда",
    licenseEditableYes: "Бале",
    licenseEditableNo: "Не",
    licenseTerminalOnly: "Литсензияро танҳо аз терминали сервер танзим кардан мумкин аст.",
    licenseTierPolicyTitle: "Сиёсати сатҳ",
    licenseTierPolicyText: "<h4>Free</h4>core Redis UI only; no SSH tunneling, no Readonly connection mode, no Cluster/Sentinel, no Edit JSON/Upload binary/Download binary, no ReJSON.<br/><strong>Price: 0 HUF/month (€0/month).</strong><br/><br/><h4>Pro</h4>SSH tunneling, Readonly connection mode (including --readonly-connections/-r), Edit JSON, Upload binary, Download binary, ReJSON.<br/><strong>Base price: 400 HUF/month (€1/month) or 4,000 HUF/year (€10/year).</strong><br/><strong>Total with 27% VAT: 500 HUF/month (€1.27/month) or 5,100 HUF/year (€12.70/year).</strong><br/><br/><h4>Enterprise</h4>SSH tunneling, Cluster and Sentinel, plus Edit JSON, Upload binary, Download binary, ReJSON; --readonly-connections/-r also works.<br/><strong>Base price: 1,200 HUF/month (€3/month) or 12,000 HUF/year (€30/year).</strong><br/><strong>Total with 27% VAT: 1,500 HUF/month (€3.81/month) or 15,200 HUF/year (€38.10/year).</strong><br/><br/><h4>Yearly rule</h4>Yearly price is 10x the monthly price.<br/><br/><h4>Seats</h4>Default license includes 5 seats. If you need more seats, contact us at <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><br/><h4>Enterprise trial</h4>10 days free for anyone with a real existing email address (non-test email).<br/><hr/><h4>Billing info in e-mail</h4>Name, Billing e-mail, Country code, Postal code, City, Address, VAT ID (optional).<br/><br/><h4>Payment</h4>PayPal payment is available only in HUF (forint); after sending the money @ <a href='https://paypal.me/corifeus'>https://paypal.me/corifeus</a> I will send you an invoice. All payments are non-refundable.<br/><br/><h4>VAT</h4>VAT is added to the price (27% in Hungary).<br/><hr/><h4>Contact</h4>If you want to say hi or have a question, contact <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><hr/><h4>Language</h4>Invoice and license e-mail communication is in English. Invoice currency is HUF.<br/><hr/><h4>Note</h4>License validation requires internet access.",
    licenseState: "Давлат",
    licenseStateActive: "Фаъол",
    licenseStateInactive: "ғайрифаъол",
    licenseStateNoLicense: "Не иҷозатнома",
    licenseKeyMasked: "Калиди захирашуда",
    licenseTier: "Сатҳи",
    licenseValid: "Эътибор дорад",
    licenseStatus: "Ҳолати иҷозатнома",
    licenseReason: "Сабаб",
    licenseCheckedAt: "Санҷида шуд",
    licenseStartsAt: "Сар мешавад",
    licenseExpiresAt: "Мӯҳлаташ дар",
    licenseDaysLeft: "Рӯзҳо мондаанд",
    licenseMaxDevices: "Дастгоҳҳои максималӣ",
    licenseActiveDevices: "Дастгоҳҳои фаъол",
    licenseActiveDevicesInfo: "Агар дастгоҳ дигар истифода нашавад, курсии он пас аз 75 дақиқа ба таври худкор озод карда мешавад.",
    licenseCustomerEmail: "почтаи электронии муштарӣ",
    licenseFeatures: "Хусусиятҳо",
    licenseFeaturesEmpty: "Ҳеҷ гуна хусусиятҳои иловагӣ",
    licenseFeatureReadonlyMode: "Ҳолати пайвастшавӣ танҳо барои хондан",
    licenseFeatureReadonlyConnectionsFlag: "Пайвастҳои танҳо барои хондан (--readonly-connections/-r)",
    licenseFeatureSsh: "Нақби SSH",
    licenseFeatureCluster: "Пайвастҳои Cluster",
    licenseFeatureSentinel: "Пайвастҳои Sentinel",
    licenseFeatureReJSON: "ReJSON (навъи маълумот JSON)",
    keysSort: {
      on: "Ҷудокунии калид фаъол аст",
      off: "Хомӯш кардани калид"
    },
    cluster: {
      on: "Cluster дар",
      off: "Cluster хомӯш"
    },
    sentinel: {
      on: "Sentinel дар",
      off: "Sentinel хомӯш",
      name: "Номи Sentinel"
    },
    readonly: {
      on: "Танҳо хондан дар",
      off: "Танҳо барои хондан хомӯш"
    },
    proSshOnly: "SSH дар Pro ё Enterprise дастрас аст.",
    proReadonlyOnly: "Ҳолати пайвастшавӣ танҳо барои хондан дар Pro ё Enterprise дастрас аст.",
    enterpriseClusterSentinelOnly: "Cluster ва Sentinel танҳо дар Enterprise дастрасанд.",
    theme: {
      light: "Нур",
      dark: "Корхонаи сиёҳ",
      darkNeu: "Торик",
      darkoBluo: "Дарко блуо",
      enterprise: "Корхона",
      redis: "Redis",
      matrix: "Матритса"
    },
    connected: opts => {
      return `Пайваст: ${opts.name}`;
    },
    tree: "Дарахт",
    askAuth: "Иҷозат талаб кунед",
    keyboardShortcuts: "Keyboard Shortcuts",
    about: "About",
    supportedLanguages: "Supported Languages",
    version: "Version",
    redisVersion: "Redis Version",
    modules: "Модулҳо",
    shortcutRefresh: "Refresh",
    shortcutSearch: "Focus Search",
    shortcutNewKey: "New Key",
    shortcutDisconnect: "Қатъ кунед",
    themeAuto: "Auto (system)",
    shortcutCommandPalette: "Command Palette",
    commandPalette: "Command Palette",
    noResults: "No results",
    redisCommandsReference: "Фармонҳои Redis",
    ungrouped: "Бе гурӯҳ",
    grouped: "Grouped",
    connectFirst: "Аввал ба сервери Redis пайваст шавед",
    searchLanguage: "Ҷустуҷӯи забон...",
    exportProgress: "Содироти калидҳо...",
    importProgress: "Воридоти калидҳо...",
    importPreview: "Пешнамоиш",
    importOverwrite: "Аз нав навиштан",
    importSkip: "Гузаштан",
    importConflict: "Агар калид аллакай мавҷуд бошад:",
    noKeysToExport: "Калидҳо барои содирот нест",
    time: "Вақт",
    loading: "Бор мешавад...",
    autoRefresh: "Авто",
    exportSearchHint: "Танҳо калидҳои мувофиқи ҷустуҷӯи ҷорӣ содирот мешаванд",
    importSearchHint: "Воридот ба тамоми пойгоҳи додаҳо татбиқ мешавад, на танҳо ба натиҷаҳои ҷустуҷӯ",
    importNoKeys: "Дар файл калидҳо ёфт нашуд",
  },
  status: {
    dataCopied: "Маълумот дар буфер аст",
    licenseSaved: "Иҷозатнома захира карда шуд",
    exportDone: "Содирот анҷом ёфт",
    indexCreated: "Индекс сохта шуд",
    indexDropped: "Индекс нест шуд",
    importDone: (opts) => `Воридот анҷом ёфт: ${opts.created} сохта шуд, ${opts.skipped} гузашт, ${opts.errors} хато`,
    nodeRemoved: "Гиреҳ хориҷ карда шуд",
    keyIsNotExisting: "Ин калид метавонист нест карда шавад ё мӯҳлати истифодааш гузашта бошад.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "Калид нест";
      } else if (opts.keyCount === 1) {
        return "1 калид";
      } else {
        return `${opts.keyCount} калидҳо`;
      }
    },
    treeExpandAll: "Ҳама баргҳои дарахтонро васеъ кунед. Ин амалиёт метавонад қимат бошад ва метавонад вақтро талаб кунад ...",
    noRedisKeys: "Да�� ин база ягон калид вуҷуд надорад.",
    redisConnected: "Redis бомуваффақият пайваст",
    reloadingDataInfo: "Бозборкунии маълумоти Redis",
    added: "Илова карда шуд",
    saved: "Навсозӣ",
    cancelled: "Бекор карда шуд",
    deleted: "Нобуд",
    savedRedis: "Маълумоти Redis захира карда мешавад",
    redisDisconnected: opts => {
      return `Пайвасти ҷорӣ хатогӣ дошт: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `Индекси db ба ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `Калиди дарахт нест карда шуд (${opts.key}).`;
    },
    deletedKey: opts => {
      return `Калид нест карда шуд (${opts.key}).`;
    },
    renamedKey: "Ин калид номгузорӣ шудааст",
    ttlChanged: "Ин калиди TTL тағир дода шудааст",
    notInteger: "Ин вуруд адади бутун нест",
    persisted: "Ин калид то абад нигоҳ дошта мешавад",
    set: "Калид гузошта шудааст/илова карда шудааст"
  },
  code: {
    "delete-connection": "Ин пайвастшавӣ нест карда шуд, бинобар ин шумо аз ин мисоли Redis ҷудо кардаед.",
    "save-connection": "Ин пайвастшавӣ тағир дода шуд, бинобар ин шумо аз ин мисоли Redis ҷудо шудаед. Шумо метавонед дубора пайваст шавед.",
    "readonly-connections": "Пайвастшавӣ илова/захира/нест кардан танҳо барои хондан аст!",
    "readonly-connection-mode": "Ин пайвастшавӣ ҳолати танҳо барои хондан аст!",
    "list-out-of-bounds": "Ин шохиси рӯйхат берун аз ҳудуди аст",
    "donation-ware-feature": "Ин хусусият дар версияи хайрия мавҷуд аст.",
    "feature-pro-readonly-required": "Ҳолати пайвастшавӣ танҳо барои хондан иҷозатномаи Pro ё Enterprise -ро талаб мекунад.",
    "feature-pro-ssh-required": "Нақби SSH иҷозатномаи Pro ё Enterprise-ро талаб мекунад.",
    "feature-enterprise-cluster-sentinel-required": "Cluster ва Sentinel иҷозатномаи корхонаро талаб мекунанд.",
    "feature-pro-json-binary-required": "Таҳрири JSON, Боркунии бинарӣ ва зеркашии бинарӣ иҷозатномаи Pro ё Enterprise талаб мекунанд.",
    "feature-pro-rejson-required": "ReJSON (навъи маълумот JSON) иҷозатномаи Pro ё Enterprise -ро талаб мекунад.",
    "invalid-json-value": "Қимат JSON эътибор надорад.",
    "http_auth_required": "Иҷозатнома талаб карда мешавад: лутфан б�� HTTP Basic Auth аутентификатсия кунед ва аз нав бор кунед.",
    "auto-connection-failed": "Эҳтимол аст, ки пайвастшавӣ хориҷ карда шуд ва пайвасти худкор аз ин сабаб ноком шуд.",
    invalid_console_command: "Ин фармон тавассути GUI кор намекунад."
  },
  licenseReason: {
    LICENSE_VALID: "Иҷозатнома эътибор дорад",
    LICENSE_INVALID: "Иҷозатнома беэътибор аст",
    LICENSE_MISSING: "Калиди литсензия муқаррар карда нашудааст",
    LICENSE_DISABLED: "Литсензия дар конфигуратсияи сервер ғайрифаъол аст",
    LICENSE_NOT_FOUND: "Литсензия ёфт нашуд",
    LICENSE_EXPIRED: "Мӯҳлати иҷозатнома ба охир расидааст",
    LICENSE_CLEARED: "Калиди литсензия тоза карда шуд",
    LICENSE_MAX_DEVICES_REACHED: "Ба ҳадди ниҳоии курсиҳои дастгоҳ расид",
    PRODUCT_MISMATCH: "Маҳсулоти иҷозатнома мувофиқат намекунад"
  },
  licenseStatusValue: {
    active: "Фаъол",
    deleted: "Нобуд",
    all: "Ҳама",
    expired: "Муддат гузаштааст",
    missing: "Бедарак",
    inactive: "ғайрифаъол"
  },
  form: {
    error: {
      required: "Талаб карда мешавад",
      port: "Порт дар байни 1-65535 аст",
      invalid: "Шакл беэътибор аст"
    },
    connection: {
      label: {
        name: "Ном",
        group: "Group",
        host: "Номи мизбон",
        port: "Порт",
        password: "Рамз",
        username: "Номи корбар"
      }
    },
    treeSettings: {
      maxValueDisplay: "Арзиши максималии дарозии сатри намоиш",
      maxValueDisplayInfo: "Агар ба 0 муқаррар карда шавад, арзишҳои пурраро нишон диҳед. Агар аз 0 зиёд бошад, ба ин дарозӣ буред. Агар -1: барои сатрҳо, арзишро то таҳрир пинҳон кунед; барои навъҳои дигар, мундариҷаи пурраро нишон диҳед.",
      maxKeys: "Шумораи максималии калид",
      maxKeysInfo: "Барои он ки GUI суқут накунад, мо шумораи максималии калидҳоро маҳдуд мекунем.",
      keyCount: () => {
        return `Шумораи калидҳо: ${p3xr.state.keysRaw.length}`;
      },
      label: {
        animation: "Аниматсияро истифода баред",
        noAnimation: "Аниматсия нест",
        jsonFormatTwoSpace: "Формат JSON бо 2 фосила",
        jsonFormatFourSpace: "Формат JSON бо 4 фосила",
        formName: "Танзимоти Redis",
        searchModeClient: "Ҳолати ҷустуҷӯи муштарӣ",
        searchModeServer: "Ҳолати ҷустуҷӯи сервер",
        searchModeStartsWith: "Ҷустуҷӯ бо оғоз бо режим",
        searchModeIncludes: "Ҷустуҷӯ режимро дар бар мегирад"
      },
      field: {
        treeSeparator: "Ҷудокунандаи дарахт",
        treeSeparatorSelector: "Интихобкунандаи ҷудокунандаи дарахт",
        page: "Шумораи пейджинги дарахт",
        keyPageCount: "Шумораи пейджинги калидӣ",
        keysSort: "Калидҳоро ҷудо кунед",
        searchMode: "Ҳолати ҷустуҷӯ",
        searchModeStartsWith: "Ҷустуҷӯ бо / дар бар мегирад"
      },
      error: {
        keyPageCount: "Шумораи саҳифаҳои калидӣ бояд адад аз 5 то 100 бошад",
        page: "Шумораи саҳифаҳо бояд адади бутуни аз 10 то 5000 бошад",
        maxValueDisplay: "Қимати максималии намоиш бояд адади бутуни байни -1 ва 32768 бошад",
        maxKeys: "Қимати максималии ҳисобкунии калид бояд адад аз 100 то 100000 бошад"
      }
    },
    key: {
      label: {
        formName: {
          add: "Калиди нави Redis илова кунед",
          edit: "Калиди Redis-ро таҳрир кунед",
          append: "Ба калиди мавҷудаи Redis илова кунед"
        }
      },
      field: {
        streamTimestamp: "Тамғаи вақт",
        key: "Калид",
        type: "Навъи",
        index: "Индекс",
        hashKey: "Калиди хэш",
        score: "Хол",
        value: "Арзиш"
      },
      error: {
        streamTimestamp: "Тамғаи вақт талаб карда мешавад, ё формати Redis ё ҳамчун *",
        key: "Калид, ҳад��и аққал як аломат аст",
        hashKey: "Калиди ҷадвали ҳаш ҳадди аққал як аломат аст",
        score: "Холи маҷмӯи мураттабшуда талаб карда мешавад",
        value: "Арзиш талаб карда мешавад"
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
      title: "Ҷустуҷӯ",
      index: "Индекс",
      query: "Дархост",
      results: "Натиҷаҳо",
      noIndex: "Индексҳо ёфт нашуд",
      createIndex: "Индекс созед",
      dropIndex: "Индексро нест кунед",
      indexInfo: "Маълумоти индекс",
      indexName: "Номи индекс",
      prefix: "Пешванди калид (ихтиёрӣ)",
      fieldName: "Номи майдон",
    },
    monitor: {
      title: "Мониторинг",
      memory: "Хотира",
      opsPerSec: "Амалиёт/сон",
      clients: "Муштариён",
      blocked: "Басташуда",
      hitsMisses: "Сатҳи бурд",
      networkIo: "Шабака I/O",
      slowLog: "Гузориши суст",
      totalCommands: "Ҷамъ",
      expired: "Мӯҳлаташ гузашт",
      evicted: "Ронда шуд",
      clientList: "Рӯйхати муштариён",
      topKeys: "Калидҳои калон аз рӯи хотира",
      killClient: "Муштариро фурӯзонед",
      clientKilled: "Муштарӣ фурӯзонда шуд",
      confirmKillClient: "Шумо мутмаинед, ки ин муштариро қатъ кунед?",
      noKeys: "Калидҳо нест",
      noClients: "Муштариён нест",
    },
    overview: {
      noConnected: "Ба Redis пайв��ст нест.",
      overviewClients: "Рӯйхати пайвастшавӣ аз рӯи шумораи муштариён",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "1 муштарӣ";
        }
        return `${opt.length} мизоҷон`;
      }
    },
    key: {
      label: {
        key: "Калид",
        encoding: "Рамзгузорӣ",
        length: "Андоза",
        ttl: "TTL",
        ttlTitle: "Вақт барои зиндагӣ",
        type: "Навъи",
        ttlNotExpire: "ба охир намерасад",
        lengthString: "байт",
        lengthItem: "ашё",
        actions: "Амалҳо"
      },
      list: {
        table: {
          index: "Индекс",
          value: "Арзиш"
        }
      },
      hash: {
        table: {
          hashkey: "Хешкей",
          value: "Арзиш"
        }
      },
      set: {
        table: {
          value: "аъзо"
        }
      },
      zset: {
        table: {
          value: "аъзо",
          score: "Хол"
        }
      },
      stream: {
        table: {
          timestamp: "ID тамғаи вақт",
          field: "Майдон",
          value: "Арзиш"
        }
      }
    },
    treeControls: {
      settings: "Танзимоти дарахт",
      expandAll: "Ҳамаро васеъ кунед",
      collapseAll: "Ҳамаро вайрон кунед",
      search: {
        search: "Дар калидҳо ҷустуҷӯ кунед",
        clear: "Ҷустуҷӯи ҷориро тоза кунед, то холӣ таъин кунед",
        placeholderClient: "Ҷустуҷӯи тарафи муштарӣ",
        placeholderServer: "Ҷустуҷӯи тарафи сервер",
        info: "Ҷустуҷӯи ҷониби муштарӣ маънои онро дорад, ки он ба матни вуруди ҷустуҷӯ мувофиқат мекунад. Ҷустуҷӯи тарафи сервер маънои онро дорад, ки он мисли ҷустуҷӯ дар намунаҳои калидҳо ҳамчун *{search-text}* аст. Барои маҷмӯаҳои ҷустуҷӯии калон, беҳтар аст, ки ҷустуҷӯи серверро истифода баред. Барои маҷмӯаҳои ҷустуҷӯии хурдтар, беҳтар аст, ки режими ҷустуҷӯи муштарӣ истифода шавад." + ` Агар шумори калидҳо тамом шавад ${p3xr.settings.maxLightKeysCount}, шумо метавонед танҳо дар тарафи сервер ҷустуҷӯ кунед.`,
        largeSetInfo: "Дар маҷмӯи калон ҷустуҷӯи муштарӣ ғайрифаъол аст. бинобар ин ҳоло танҳо ҷустуҷӯи сервер имконпазир аст.",
        infoDetails: "Барои фаҳмидани он ки ҷустуҷӯ чӣ гуна кор мекунад, лутфан танзимотро тафтиш кунед"
      },
      pager: {
        next: "Оянда",
        prev: "Гузашта",
        first: "Аввал",
        last: "Охирин"
      }
    }
  },
  time: {
    loading: "Бор мешавад...",
    years: "сол",
    months: "моҳҳо",
    days: "рӯз",
    year: "сол",
    month: "моҳ",
    day: "рӯз"
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
