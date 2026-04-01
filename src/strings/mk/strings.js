const strings = {
  error: {
    cleared_license: "Исчистена лиценца",
    invalid_license: "Неважечка лиценца",
    license_max_devices_reached: "Достигнати се максимални места на уредот",
    license_readonly: "Лиценцата може да се смени само од терминалот на серверот.",
    server_error: "Грешка на серверот, обидете се повторно"
  },
  title: {
    donate: "Донирајте",
    jsonRecursive: "Проширување на сите лисја",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "Може да изберете Redis конекција за поврзување од левото долно мени.",
    statistics: "Статистика",
    error: "Грешка",
    connectingRedis: "Се поврзува со Redis ...",
    socketioConnectError: "Socket.IO Грешка",
    db: "DB",
    server: "Сервер",
    clients: "Клиенти",
    memory: "Меморија",
    persistence: "Упорност",
    stats: "Статистика",
    replication: "Репликација",
    cpu: "CPU",
    cluster: "Cluster",
    modules: "Модuli",
    errorstats: "errorstats",
    commandstats: "commandstats",
    latencystats: "latencystats",
    keysizes: "keysizes",
    threads: "threads",
  },
  confirm: {
    dropIndex: "Дали сте сигурни дека сакате да го избришете овој индекс?",
    uploadBuffer: "Дали сте сигурни дека ќе ги поставите овие бинарни податоци?",
    uploadBufferDone: "Бинарните податоци се поставени",
    uploadBufferDoneAndSave: "Бинарните податоци се поставуваат и се зачувуваат на серверот",
    title: "Потврди",
    alert: "Предупредување",
    info: "Инфо",
    deleteListItem: "Дали сте сигурни дека ќе ја избришете оваа ставка од списокот?",
    deleteHashKey: "Дали сте сигурни дека ќе ја избришете оваа хаш-клучна ставка?",
    deleteStreamTimestamp: "Дали сигурно ќе го избришете овој временски печат за пренос?",
    deleteSetMember: "Дали сте сигурни дека ќе го избришете овој член на сет?",
    deleteZSetMember: "Дали сте сигурни дека ќе го избришете овој подреден сет член?",
    deleteConnection: "Потврди",
    deleteConnectionText: "Дали сте сигурни дека ќе ја избришете оваа врска Redis?",
    deleteNode: "Дали сте сигурни дека ќе го избришете овој Redis јазол?",
    deleteAllKeys: opts => {
      return `Избришете го ова дрво и сите негови клучеви (${opts.key})?`;
    },
    socketioConnectError: "Socket.IO не може да се поврзе со серверот, можете повторно да вчитате и да се обидете сами да ја решите грешката во врската, клиентот не знае како сам да ја реши.",
    socketioAuthRequired: "Потребна е овластување Socket.IO. Ве молиме проверете ја автентичноста со HTTP Basic Auth (корисничко име/лозинка) и вчитајте повторно.",
    deleteKey: "Дали сигурно ќе го избришете овој клуч?",
    rename: {
      title: "Дали сигурно ќе го преименувате овој клуч?",
      textContent: "Оваа акција трајно го преименува клучот.",
      placeholder: "Копчето Redis (задолжително)"
    },
    ttl: {
      title: "Дали сте сигурни дека сакате да го промените TTL на овој клуч?",
      textContent: "Промената на TTL го ажурира времето на живеење на овој клуч. Оставете празен за да го задржите овој клуч засекогаш.",
      placeholder: "TTL на клучот Redis (цел број или празен)",
      placeholderPlaceholder: "Празно значи дека опстојува засекогаш; во спротивно внесете цел број.",
      convertTextToTime: "Претворете го текстот во време",
      convertTextToTimePlaceholder: "На пр. 1d ќе биде 86400"
    },
    license: {
      title: "Поставете лиценца",
      textContent: "If you want to use paid features, please contact support@corifeus.com to request a license. Pricing is Pro 400 HUF/month (€1/month) or 4,000 HUF/year (€10/year), and Enterprise 1,200 HUF/month (€3/month) or 12,000 HUF/year (€30/year). Yearly is 10x monthly. With 27% VAT, totals are Pro 500 HUF/month (€1.27/month) or 5,100 HUF/year (€12.70/year), Enterprise 1,500 HUF/month (€3.81/month) or 15,200 HUF/year (€38.10/year). License validation requires internet access. Default license includes 5 seats. If you need more seats, contact us at support@corifeus.com.",
      placeholder: "Лиценца клуч"
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
    copy: "Копирај",
    downloadBuffer: "Преземете бинарно",
    setBuffer: "Поставете бинарно",
    exportKeys: "Извези клучеви",
    exportAllKeys: (opts) => `Извези ги сите ${opts.count} клучеви`,
    exportSearchResults: (opts) => `Извези ${opts.count} резултати`,
    importKeys: "Увези клучеви",
    saveWithFormatJson: "Зач��вај со формат",
    formatJson: "Форматирајте Json",
    wrap: "Завиткајте",
    unwrap: "Одвиткајте",
    downloadJson: "Преземете го JSON",
    pubsubMonitor: "PubSub Монитор",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "Јазик",
    ok: "Во ред",
    addKey: "Додај на овој клуч",
    addKeyRoot: "Додадете root клуч",
    reloadKey: "Вчитај повторно клуч",
    reload: "Вчитај повторно",
    close: "Затвори",
    commands: "Наредби",
    view: "Прикажи",
    statistics: "Статистика",
    refresh: "Освежи",
    pause: "Пауза",
    resume: "Продолжи",
    clear: "Јасно",
    rename: "Преименувај",
    main: "База на податоци",
    cancel: "Откажи",
    theme: "Тема",
    github: "GitHub",
    githubRepo: "Репозиториум",
    githubRelease: "Изданија",
    githubChangelog: "Промена",
    info: "Info",
    settings: "Поставки",
    connect: "Поврзете се",
    disconnect: "Исклучете се",
    overview: "Преглед",
    console: "Конзола",
    noConnections: "Нема врски, додајте врска во менито за поставки.",
    noConnectionsInSettings: "Нема врски, можете да додадете НОВА ВРСКА погоре.",
    connectionAdd: "Нова врска",
    addGroup: "Додади група",
    extend: "Прошири",
    collapse: "Колапс",
    add: "Додадете",
    edit: "Уреди",
    save: "Зачувај",
    ttl: "Поставете TTL",
    license: "Поставете лиценца",
    delete: "Избриши",
    remove: "Отстрани",
    sure: "Секако",
    testConnection: "Тест за поврзување",
    getKey: "Се вчитува клучот Redis и поврзаните податоци ...",
    jsonViewShow: "Приказ JSON",
    jsonViewEditor: "Уреди JSON",
    quickConsole: "Брза конзола",
  },
  label: {
    id: {
      nodeId: "ИД на јазол",
      id: "ID за поврзување",
      info: "Ако не сакате да ги промените својствата на: sshPassword, sshPrivateKey, лозинка, tlsCrt, tlsKey, tlsCa, ве молиме внесете го ID на врската во тие својства за да ги задржите вредностите на својствата непроменети. Ако ја сакате истата логика во лозинката на јазолот, тогаш внесете го ID на јазолот во лозинката на јазолот."
    },
    secureFeature: "Ако видите вредност што започнува со P3X и изгледа исто, тоа е безбедна карактеристика. За да ги промените поставките, само заменете ги со празни или нешто друго и тие ќе бидат зачувани. Ако не ги промените поставките, поставките ќе се задржат како што се на серверот.",
    aiTranslating: "Translating...",
    aiSettings: "AI Поставки",
    aiGroqApiKey: "Groq API клуч",
    aiGroqApiKeyInfo: "Опционално. Сопствен Groq API клуч за подобри перформанси. Добијте бесплатен клуч од",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "AI API клучот е зачуван",
    aiGroqApiKeyNotSet: "Не е поставено (стандардно на серверот)",
    ssh: {
      on: "SSH вклучен",
      off: "SSH исклучено",
      sshHost: "SSH Домаќин",
      sshPort: "SSH порта",
      sshUsername: "Корисничко име SSH",
      sshPassword: "SSH лозинка",
      sshPrivateKey: "SSH приватен клуч"
    },
    isBuffer: opts => `[object ArrayBuffer] значи дека вредноста е бинарен податок или вредноста е поголема од ${opts.maxValueAsBuffer}`,
    streamValue: `Полето и вредноста за стриминг се единечни линии. На пр.: поле 1 вредност1 "поле 2" "вредност 2"`,
    streamTimestampId: `„*“ значи автоматско генерирање или спецификација како <millisecondsTime>-<sequenceNumber>`,
    unableToLoadKey: ({
      key
    }) => {
      return `Не може да се вчита овој клуч: ${key}. Можно е, клучот е избришан. Точната грешка е во конзолата.`;
    },
    bigJson: "Овој објект JSON е над 10 kb, затоа погрижете се да знаете што правите, бидејќи некои функции може да бидат бавно рендерирање.",
    addNode: "Додадете јазол",
    validateJson: "Потврдете го JSON",
    reducedFunction: `Намалена функционалност`,
    tooManyKeys: opts => {
      return `За целосните максимални функции дозволените копчиња вкупно е ${opts.maxLightKeysCount} брои. Оваа база на податоци има вкупно над дозволените клучеви ${opts.count}. Сортирањето на копчињата и дополнителните фенси информации за дрвото се оневозможени. Пребарувањето се случува само на серверот наместо пребарувањето на клиентот.`;
    },
    redisCommandNotFound: "Не е пронајдено совпаѓање на командата Redis ...",
    treeKeyStore: `Сортирањето (природно споредување) се извршува на клиентот или прелистувачот, што значи дека има казна за големи големи комплети, како клучеви од над 10 илјади, може да додаде малку време на прикажувањето на страницата. Нема сортирање на клучеви во Redis, само вака.`,
    socketIoTimeout: options => {
      return `Времето на Socket.IO истече за ова барање (макс ${options.timeout / 1000} секунди) ...`;
    },
    resizerInfo: options => {
      return `Минималната ширина на левата или десната плоча е ${options.width}px`;
    },
    jsonViewNotParsable: "Оваа вредност не може да се анализира JSON  ",
    ttlTitle: "Поставете го TTL за секунди",
    passwordSecure: "Лозинката можеби ќе биде празна, но сепак ќе прикажува знаци, ова е безбедносна карактеристика.",
    tlsWithoutCert: "Овозможете TLS без дополнителен сертификат",
    tlsRejectUnauthorized: "Одбијте неовластен сертификат",
    tlsSecure: "Ако видите TLS конфигурација што започнува со P3X или сите поставки за TLS изгледаат исто, тоа е безбедна карактеристика. За да ги промените поставките, само заменете ги со празни или нешто друго и тие ќе бидат зачувани. Ако не ги промените поставките за TLS, поставките ќе се задржат како што се на серверот.",
    treeSeparatorEmpty: "Ако сепараторот на дрвото е празен, дрвото нема да има вгнездени јазли, само чиста листа",
    treeSeparatorEmptyNote: "Нема вгнездени јазли, само чиста листа",
    welcomeConsole: "Добредојдовте во конзолата Redis",
    welcomeConsoleInfo: "Историјата на курсорот ГОРЕ или ДОЛУ е овозможена",
    redisListIndexInfo: "Празен за додавање, -1 за прикачување или зачувување на прикажаната позиција.",
    console: "Конзола",
    connectiondAdd: "Додадете врска",
    connectiondEdit: "Уред�� врска",
    connectiondView: "Прикажи ја врската",
    connections: "Врски",
    licenseInfo: "Лиценца",
    licenseEditable: "Лиценца за уредување",
    licenseEditableYes: "Да",
    licenseEditableNo: "бр",
    licenseTerminalOnly: "Лиценцата може да се конфигурира само од терминалот на серверот.",
    licenseTierPolicyTitle: "Политика на нивоа",
    licenseTierPolicyText: "<h4>Free</h4>core Redis UI only; no SSH tunneling, no Readonly connection mode, no Cluster/Sentinel, no Edit JSON/Upload binary/Download binary, no ReJSON.<br/><strong>Price: 0 HUF/month (€0/month).</strong><br/><br/><h4>Pro</h4>SSH tunneling, Readonly connection mode (including --readonly-connections/-r), Edit JSON, Upload binary, Download binary, ReJSON.<br/><strong>Base price: 400 HUF/month (€1/month) or 4,000 HUF/year (€10/year).</strong><br/><strong>Total with 27% VAT: 500 HUF/month (€1.27/month) or 5,100 HUF/year (€12.70/year).</strong><br/><br/><h4>Enterprise</h4>SSH tunneling, Cluster and Sentinel, plus Edit JSON, Upload binary, Download binary, ReJSON; --readonly-connections/-r also works.<br/><strong>Base price: 1,200 HUF/month (€3/month) or 12,000 HUF/year (€30/year).</strong><br/><strong>Total with 27% VAT: 1,500 HUF/month (€3.81/month) or 15,200 HUF/year (€38.10/year).</strong><br/><br/><h4>Yearly rule</h4>Yearly price is 10x the monthly price.<br/><br/><h4>Seats</h4>Default license includes 5 seats. If you need more seats, contact us at <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><br/><h4>Enterprise trial</h4>10 days free for anyone with a real existing email address (non-test email).<br/><hr/><h4>Billing info in e-mail</h4>Name, Billing e-mail, Country code, Postal code, City, Address, VAT ID (optional).<br/><br/><h4>Payment</h4>PayPal payment is available only in HUF (forint); after sending the money @ <a href='https://paypal.me/corifeus'>https://paypal.me/corifeus</a> I will send you an invoice. All payments are non-refundable.<br/><br/><h4>VAT</h4>VAT is added to the price (27% in Hungary).<br/><hr/><h4>Contact</h4>If you want to say hi or have a question, contact <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><hr/><h4>Language</h4>Invoice and license e-mail communication is in English. Invoice currency is HUF.<br/><hr/><h4>Note</h4>License validation requires internet access.",
    licenseState: "држава",
    licenseStateActive: "Активен",
    licenseStateInactive: "Неактивен",
    licenseStateNoLicense: "Без лиценца",
    licenseKeyMasked: "Зачуван клуч",
    licenseTier: "Ниво",
    licenseValid: "Важи",
    licenseStatus: "Статус на лиценца",
    licenseReason: "Причина",
    licenseCheckedAt: "Проверено во",
    licenseStartsAt: "Започнува во",
    licenseExpiresAt: "Истекува во",
    licenseDaysLeft: "Преостануваат денови",
    licenseMaxDevices: "Макс уреди",
    licenseActiveDevices: "Активни уреди",
    licenseActiveDevicesInfo: "Ако некој уред повеќе не се користи, неговото седиште автоматски се ослободува по 75 минути.",
    licenseCustomerEmail: "Е-пошта на клиентите",
    licenseFeatures: "Карактеристики",
    licenseFeaturesEmpty: "Нема дополнителни функции",
    licenseFeatureReadonlyMode: "Режим за поврзување само за читање",
    licenseFeatureReadonlyConnectionsFlag: "Врски само за читање (--readonly-connections/-r)",
    licenseFeatureSsh: "SSH тунелирање",
    licenseFeatureCluster: "Cluster врски",
    licenseFeatureSentinel: "Sentinel врски",
    licenseFeatureReJSON: "ReJSON (тип на податоци JSON)",
    keysSort: {
      on: "Вклучено е сортирање на копчињата",
      off: "Сортирање на копчињата"
    },
    cluster: {
      on: "Cluster вклучен",
      off: "Cluster исклучено"
    },
    sentinel: {
      on: "Sentinel вклучен",
      off: "Sentinel исклучено",
      name: "Sentinel име"
    },
    readonly: {
      on: "Вклучено само за читање",
      off: "Исклучено само за читање"
    },
    proSshOnly: "SSH е достапен во Pro или Enterprise.",
    proReadonlyOnly: "Режимот за поврзување само за читање е достапен во Pro или Enterprise.",
    enterpriseClusterSentinelOnly: "Cluster и Sentinel се достапн�� само во Enterprise.",
    theme: {
      light: "Светлина",
      dark: "Темно претпријатие",
      darkNeu: "Темно",
      darkoBluo: "Дарко Блуо",
      enterprise: "Претпријатие",
      redis: "Redis",
      matrix: "Матрица"
    },
    connected: opts => {
      return `Поврзано: ${opts.name}`;
    },
    tree: "Дрво",
    askAuth: "Побарајте овластување",
    keyboardShortcuts: "Keyboard Shortcuts",
    about: "About",
    supportedLanguages: "Supported Languages",
    version: "Version",
    redisVersion: "Redis Version",
    modules: "Модuli",
    shortcutRefresh: "Refresh",
    shortcutSearch: "Focus Search",
    shortcutNewKey: "New Key",
    shortcutDisconnect: "Исклучете се",
    themeAuto: "Auto (system)",
    shortcutCommandPalette: "Command Palette",
    commandPalette: "Command Palette",
    noResults: "No results",
    redisCommandsReference: "Redis Команди",
    ungrouped: "Без група",
    grouped: "Grouped",
    connectFirst: "connectFirst",
    searchLanguage: "Пребарај јазик...",
    exportProgress: "Извезување на клучеви...",
    importProgress: "Увезување на клучеви...",
    importPreview: "Преглед",
    importOverwrite: "Препишано",
    importSkip: "Прескокни",
    importConflict: "Ако клучот веќе постои:",
    noKeysToExport: "Нема клучеви за извоз",
    time: "Време",
    loading: "Се вчитува...",
    autoRefresh: "Авто",
    exportSearchHint: "Извоз само на клучеви кои одговараат на тековното пребарување",
    importSearchHint: "Увозот се применува на целата база на податоци, не само на резултатите од пребарувањето",
    importNoKeys: "Не се пронајдени клучеви во датотеката",
  },
  status: {
    dataCopied: "Податоците се во таблата со исечоци",
    licenseSaved: "Лиценцата е зачувана",
    exportDone: "Извозот е завршен",
    indexCreated: "Индексот е создаден",
    indexDropped: "Индексот е избришан",
    importDone: (opts) => `Увозот завршен: ${opts.created} создадени, ${opts.skipped} прескокнати, ${opts.errors} грешки`,
    nodeRemoved: "Јазолот е отстранет",
    keyIsNotExisting: "Овој клуч можеше да биде избришан или истечен.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "Нема клуч";
      } else if (opts.keyCount === 1) {
        return "1 клуч";
      } else {
        return `${opts.keyCount} клучеви`;
      }
    },
    treeExpandAll: "Проширете ги сите лисја на дрвјата. Оваа операција може да биде скапа и може да потрае ...",
    noRedisKeys: "Нема клучеви во оваа база на податоци.",
    redisConnected: "Redis е поврзан успешно",
    reloadingDataInfo: "Повторно вчитување податоци за Redis",
    added: "Додадено",
    saved: "Ажурирано",
    cancelled: "Откажано",
    deleted: "Избришано",
    savedRedis: "Податоците Redis се зачувани",
    redisDisconnected: opts => {
      return `Тековната врска имаше грешка: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `Индексот db е поставен на ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `Клучот на дрвото беше избришан (${opts.key}).`;
    },
    deletedKey: opts => {
      return `Клучот е избришан (${opts.key}).`;
    },
    renamedKey: "Овој клуч е преименуван",
    ttlChanged: "TTL на овој клуч е променет",
    notInteger: "Овој влез не е цел број",
    persisted: "Овој клуч останува засекогаш",
    set: "Клучот е поставен/додаден"
  },
  code: {
    "delete-connection": "Оваа врска е избришана, така што сте исклучени со овој примерок Redis.",
    "save-connection": "Оваа врска е променета, така што сте исклучени со овој примерок Redis. Може повторно да се поврзете.",
    "readonly-connections": "Врските за додавање/зачувување/бришење се само за читање!",
    "readonly-connection-mode": "Оваа врска е режим само за читање!",
    "list-out-of-bounds": "Овој индекс на список е надвор од границите",
    "donation-ware-feature": "Оваа функција е присутна во верзијата за донации.",
    "feature-pro-readonly-required": "Режимот за поврзување само за читање бара лиценца Pro или Enterprise.",
    "feature-pro-ssh-required": "За тунелирање SSH е потребна лиценца Pro или Enterprise.",
    "feature-enterprise-cluster-sentinel-required": "Cluster и Sentinel бараат лиценца на Enterprise.",
    "feature-pro-json-binary-required": "Уредете го JSON, Поставете бинарно и преземање бинарно бара лиценца Pro или Enterprise.",
    "feature-pro-rejson-required": "ReJSON (тип на податоци JSON) бара лиценца Pro или Enterprise.",
    "invalid-json-value": "Вредноста не е валидна JSON.",
    "http_auth_required": "Потребна е овластување: ве молиме проверете ја автентичноста со HTTP Basic Auth и вчитајте ја повторно.",
    "auto-connection-failed": "Можно е, врската е отстранета и автоматската врска не успеа, поради ова.",
    invalid_console_command: "Оваа команда не работи преку GUI."
  },
  licenseReason: {
    LICENSE_VALID: "Лиценцата е валидна",
    LICENSE_INVALID: "Лиценцата е неважечка",
    LICENSE_MISSING: "Не е поставен клуч за лиценца",
    LICENSE_DISABLED: "Лиценцата е оневозможена во конфигурацијата на серверот",
    LICENSE_NOT_FOUND: "Лиценцата не е пронајдена",
    LICENSE_EXPIRED: "Лиценцата е истечена",
    LICENSE_CLEARED: "Клучот за лиценца беше исчистен",
    LICENSE_MAX_DEVICES_REACHED: "Достигнати се максимални места на уредот",
    PRODUCT_MISMATCH: "Производот за лиценцирање не се совпаѓа"
  },
  licenseStatusValue: {
    active: "Активен",
    deleted: "Избришано",
    all: "Сите",
    expired: "Истечен",
    missing: "Недостасува",
    inactive: "Неактивен"
  },
  form: {
    error: {
      required: "Задолжително",
      port: "Пристаништето е помеѓу 1-65535",
      invalid: "Формата е неважечка"
    },
    connection: {
      label: {
        name: "Име",
        group: "Group",
        host: "Име на домаќин",
        port: "Пристаниште",
        password: "Лозинка",
        username: "Корисничко име"
      }
    },
    treeSettings: {
      maxValueDisplay: "Максимална вредност приказ на должина на низата",
      maxValueDisplayInfo: "Ако е поставено на 0, прикажете ги целосните вредности. Ако е поголемо од 0, скратете го на оваа должина. Ако -1: за низи, скријте ја вредноста до уредување; за други типови, прикажете целосна содржина.",
      maxKeys: "Максималниот број на клучеви",
      maxKeysInfo: "За да не падне GUI, го ограничуваме максималниот број на клучеви.",
      keyCount: () => {
        return `Број на клучеви: ${p3xr.state.keysRaw.length}`;
      },
      label: {
        animation: "Користете анимација",
        noAnimation: "Нема анимација",
        jsonFormatTwoSpace: "Форматирајте го JSON со 2 празни места",
        jsonFormatFourSpace: "Форматирајте го JSON со 4 празни места",
        formName: "Поставки за Redis",
        searchModeClient: "Режим за пребарување на клиент",
        searchModeServer: "Режим за пребарување на серверот",
        searchModeStartsWith: "Пребарувањето со започнува со режим",
        searchModeIncludes: "Пребарувањето вклучува режим"
      },
      field: {
        treeSeparator: "Сепаратор на дрвја",
        treeSeparatorSelector: "Избирач на сепаратор на дрвја",
        page: "Број на страници на дрвото",
        keyPageCount: "Број на страници со клучеви",
        keysSort: "Подреди ги копчињата",
        searchMode: "Режим на пребарување",
        searchModeStartsWith: "Пребарувањето започнува со / вклучува"
      },
      error: {
        keyPageCount: "Бројот на клучните страници мора да биде цел број помеѓу 5 - 100",
        page: "Бројот на страници мора да биде цел број помеѓу 10 - 5000",
        maxValueDisplay: "Максималната вредност на прикажување мора да биде цел број помеѓу -1 и 32768",
        maxKeys: "Максималната вредност на бројот на клучеви мора да биде цел број помеѓу 100 и 100000"
      }
    },
    key: {
      label: {
        formName: {
          add: "Додадете нов клуч Redis",
          edit: "Уредете го клучот Redis",
          append: "Додај во постоечкиот клуч Redis"
        }
      },
      field: {
        streamTimestamp: "Временски печат",
        key: "Клуч",
        type: "Тип",
        index: "Индекс",
        hashKey: "Хеш клуч",
        score: "Резултат",
        value: "Вредност"
      },
      error: {
        streamTimestamp: "Потребен е временскиот печат, или формат Redis или како *",
        key: "Клучот е, барем, еден лик",
        hashKey: "Копчето за хеш табела е најмалку еден знак",
        score: "Потребен е подредениот сет резултат",
        value: "Вредноста е потребна"
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
      title: "Пребарување",
      index: "Индекс",
      query: "Барање",
      results: "Резултати",
      noIndex: "Не се пронајдени индекси",
      createIndex: "Создај индекс",
      dropIndex: "Избриши индекс",
      indexInfo: "Инфо за индекс",
      indexName: "Име на индекс",
      prefix: "Префикс на клуч (опционално)",
      fieldName: "Име на поле",
    },
    monitor: {
      title: "Мониторинг",
      memory: "Меморија",
      opsPerSec: "Операции/сек",
      clients: "Клиенти",
      blocked: "Блокирани",
      hitsMisses: "Стапка на погодоци",
      networkIo: "Мрежа I/O",
      slowLog: "Бавен дневник",
      totalCommands: "Вкупно",
      expired: "Истечени",
      evicted: "Избркани",
      clientList: "Листа на клиенти",
      topKeys: "Најголеми клучеви по меморија",
      killClient: "Убиј клиент",
      clientKilled: "Клиентот е убиен",
      confirmKillClient: "Дали сте сигурни дека сакате да го прекинете овој клиент?",
      noKeys: "Нема клучеви",
      noClients: "Нема клиенти",
    },
    overview: {
      noConnected: "Нема врска со Redis.",
      overviewClients: "Наведете ги поврзаните според бројот на клиенти",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "1 клиент";
        }
        return `${opt.length} клиенти`;
      }
    },
    key: {
      label: {
        key: "Клуч",
        encoding: "Кодирање",
        length: "Големина",
        ttl: "TTL",
        ttlTitle: "Време да се живее",
        type: "Тип",
        ttlNotExpire: "не истекува",
        lengthString: "бајти",
        lengthItem: "предмети",
        actions: "Акции"
      },
      list: {
        table: {
          index: "Индекс",
          value: "Вредност"
        }
      },
      hash: {
        table: {
          hashkey: "Хашки",
          value: "Вредност"
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
          score: "Резултат"
        }
      },
      stream: {
        table: {
          timestamp: "ID на временски печат",
          field: "Поле",
          value: "Вредност"
        }
      }
    },
    treeControls: {
      settings: "Поставки за дрво",
      expandAll: "Прошири ги сите",
      collapseAll: "Собори ги сите",
      search: {
        search: "Пребарајте во копчињата",
        clear: "Исчистете го тековното пребарување за да го поставите празно",
        placeholderClient: "Пребарајте ја страната на клиентот",
        placeholderServer: "Пребарување на страната на серверот",
        info: "Пребарувањето од страна на клиентот значи дека се совпаѓа со текстот во влезот за пребарување. Пребарувањето од страна на серверот значи, тоа е како пребарување во шаблоните на копчињата како *{search-text}*. За големи групи на пребарување, подобро е да користите пребарување од страна на серверот. За помали групи за пребарување, подобро е да се користи режимот за пребарување од страна на клиентот." + ` Ако пребројувањето на копчињата заврши ${p3xr.settings.maxLightKeysCount}, можете да пребарувате само на страната на серверот.`,
        largeSetInfo: "Во голем сет, пребарувањето од страна на клиентот е оневозможено. така што во моментов е можно само пребарување од страна на серверот.",
        infoDetails: "За да дознаете како функционира пребарувањето, проверете ги поставките"
      },
      pager: {
        next: "Следно",
        prev: "Претходна",
        first: "Прво",
        last: "Последно"
      }
    }
  },
  time: {
    loading: "Се вчитува...",
    years: "години",
    months: "месеци",
    days: "денови",
    year: "година",
    month: "месец",
    day: "ден"
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
