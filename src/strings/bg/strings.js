const strings = {
  error: {
    server_error: "Грешка на сървъра, моля опитайте отново"
  },
  title: {
    donate: "Дарение",
    donateTitle: "Подкрепете P3X Redis UI",
    donateDescription: "P3X Redis UI е безплатен проект с отворен код. Разходите за поддръжка на приложението, AI функциите, Docker образите, сървърите и инфраструктурата идват от собствения джоб на разработчика. Ако намирате този инструмент за полезен, моля обмислете да подкрепите развитието му с дарение. Всеки принос помага проектът да живее и расте. Благодаря!",
    jsonRecursive: "Разгъване на всички листа",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "Можете да изберете Redis връзка от долното ляво меню.",
    statistics: "Статистика",
    error: "Грешка",
    connectingRedis: "Свързване с Redis ...",
    socketioConnectError: "Грешка на Socket.IO",
    db: "БД",
    server: "Сървър",
    clients: "Клиенти",
    memory: "Памет",
    persistence: "Устойчивост",
    stats: "Статистика",
    replication: "Репликация",
    cpu: "CPU",
    cluster: "Клъстер",
    modules: "Модули",
    errorstats: "Статистика за грешки",
    commandstats: "Статистика на командите",
    latencystats: "Статистика на закъсненията",
    keysizes: "Размери на ключовете",
    threads: "Нишки"
  },
  confirm: {
    dropIndex: "Сигурни ли сте, че искате да изтриете този индекс?",
    uploadBuffer: "Сигурни ли сте, че искате да качите тези двоични данни?",
    uploadBufferDone: "Двоичните данни са качени",
    uploadBufferDoneAndSave: "Двоичните данни са качени и запазени на сървъра",
    title: "Потвърждение",
    alert: "Внимание",
    info: "Информация",
    deleteListItem: "Сигурни ли сте, че искате да изтриете този елемент от списъка?",
    deleteHashKey: "Сигурни ли сте, че искате да изтриете този хеш ключ?",
    deleteStreamTimestamp: "Сигурни ли сте, че искате да изтриете тази времева марка от потока?",
    deleteSetMember: "Сигурни ли сте, че искате да изтриете този член на множеството?",
    deleteZSetMember: "Сигурни ли сте, че искате да изтриете този член на подреденото множество?",
    deleteConnection: "Потвърждение",
    deleteConnectionText: "Сигурни ли сте, че искате да изтриете тази Redis връзка?",
    deleteNode: "Сигурни ли сте, че искате да изтриете този Redis възел?",
    deleteAllKeys: opts => {
      return `Изтриване на това дърво и всички негови ключове (${opts.key})?`;
    },
    deleteSearchKeys: opts => {
      return `Сигурни ли сте, че искате да изтриете всички ключове, съответстващи на "${opts.pattern}"? Намерени ${opts.count} ключа.`;
    },
    socketioConnectError: "Socket.IO не може да се свърже със сървъра, можете да презаредите и да опитате да разрешите грешката при свързването сами, клиентът не знае как да я разреши сам.",
    socketioAuthRequired: "Необходима е оторизация чрез Socket.IO. Моля, удостоверете се с HTTP Basic Auth (потребителско име/парола) и презаредете.",
    delete: "Изтриване?",
    deleteKey: "Сигурни ли сте, че искате да изтриете този ключ?",
    rename: {
      title: "Сигурни ли сте, че искате да преименувате този ключ?",
      textContent: "Това действие преименува ключа окончателно.",
      placeholder: "Redis ключ (задължителен)"
    },
    ttl: {
      title: "Сигурни ли сте, че искате да промените TTL на този ключ?",
      textContent: "Промяната на TTL обновява времето за живот на този ключ. Оставете празно, за да запазите ключа завинаги.",
      placeholder: "TTL на Redis ключа (цяло число или празно)",
      placeholderPlaceholder: "Празно означава, че се запазва завинаги; в противен случай въведете цяло число.",
      convertTextToTime: "Преобразуване на текст във време",
      convertTextToTimePlaceholder: "Напр. 1d ще бъде 86400"
    }
  },
  language: {
    // When you translate the english name, keep the Language in English
    // eg. Inglés / English
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
    copy: "Копирай",
    downloadBuffer: "Изтегли двоичен файл",
    setBuffer: "Качи двоичен файл",
    exportKeys: "Експортиране на ключове",
    exportAllKeys: (opts) => `Експорт на всички ${opts.count} ключа`,
    exportSearchResults: (opts) => `Експорт на ${opts.count} резултата`,
    deleteAllKeysMenu: (opts) => `Изтрий всички ${opts.count}`,
    importKeys: "Импортиране на ключове",
    deleteSearchKeys: (opts) => `Изтриване на ${opts.count} съвпадащи ключа`,
    saveWithFormatJson: "Запази с форматиране",
    formatJson: "Форматирай Json",
    wrap: "Обвиване",
    unwrap: "Развиване",
    downloadJson: "Изтегли JSON",
    pubsubMonitor: "PubSub",
    pulse: "Pulse",
    profiler: "Profiler",
    memoryAnalysis: "Analysis",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "Език / Language",
    ok: "OK",
    addKey: "Добави към този ключ",
    addKeyRoot: "Добави основен ключ",
    reloadKey: "Презареди ключ",
    reload: "Презареди",
    close: "Затвори",
    commands: "Команди",
    view: "Изглед",
    statistics: "Статистика",
    refresh: "Обнови",
    pause: "Пауза",
    resume: "Продължи",
    clear: "Изчисти",
    rename: "Преименувай",
    main: "База данни",
    cancel: "Отказ",
    theme: "Тема",
    github: "GitHub",
    githubRepo: "Хранилище",
    githubRelease: "Издания",
    githubChangelog: "Списък с промени",
    info: "Info",
    settings: "Настройки",
    connect: "Свържи",
    disconnect: "Прекъсни",
    overview: "Преглед",
    console: "Конзола",
    noConnections: "Няма връзки, добавете връзка в менюто с настройки.",
    noConnectionsInSettings: "Няма връзки, можете да добавите НОВА ВРЪЗКА по-горе.",
    connectionAdd: "Нова връзка",
    addGroup: "Добави група",
    extend: "Разгъни",
    collapse: "Свий",
    add: "Добави",
    edit: "Редактирай",
    save: "Запази",
    ttl: "Задай TTL",
    delete: "Изтрий",
    remove: "Премахни",
    areYouSure: "Сигурни ли сте?",
    sure: "Сигурен",
    testConnection: "Тестване на връзката",
    getKey: "Зареждане на Redis ключ и свързани данни ...",
    jsonViewShow: "Покажи JSON",
    jsonViewEditor: "Редактирай JSON",
    quickConsole: "Бърза конзола"
  },
  label: {
    id: {
      nodeId: 'ID на възела',
      id: "ID на връзката",
      info: "Ако не искате да променяте свойствата: sshPassword, sshPrivateKey, password, tlsCrt, tlsKey, tlsCa, моля въведете ID на връзката в тези полета, за да запазите стойностите на свойствата. Ако искате същата логика за паролата на възела, въведете ID на възела в паролата на възела."
    },
    secureFeature: 'Ако видите стойност, която започва с P3X и изглежда еднаква, това е защитна функция. За да промените настройките, просто заменете тези настройки с празни или нещо друго и те ще бъдат запазени. Ако не промените настройките, те ще бъдат запазени така, както са на сървъра.',
    aiTranslating: "Превод...",
    aiSettings: "AI Настройки",
    aiGroqApiKey: "Groq API ключ",
    aiGroqApiKeyInfo: "По избор. Собствен Groq API ключ за по-добра производителност. Получете безплатен ключ от",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "AI API ключът е запазен",
    aiGroqApiKeyInvalid: "Invalid Groq API key",
    aiGroqApiKeyNotSet: "Не е зададен (по подразбиране на сървъра)",
    aiEnabled: "AI активирано",
    aiEnabledYes: "Да",
    aiEnabledNo: "Не",
    aiRouteViaNetwork: "Route via network.corifeus.com",
    aiRoutingDirect: "Queries go directly to Groq using your own API key, bypassing network.corifeus.com.",
    aiRoutingNetwork: "AI queries are routed through network.corifeus.com. If you have your own free Groq API key, you can turn off this switch to route directly to Groq without network.corifeus.com.",
    ssh: {
      on: 'SSH включен',
      off: 'SSH изключен',
      sshHost: 'SSH Хост',
      sshPort: 'SSH Порт',
      sshUsername: 'SSH Потребителско име',
      sshPassword: 'SSH Парола',
      sshPrivateKey: 'SSH Частен ключ'
    },
    isBuffer: opts => `[object ArrayBuffer] означава, че стойността е двоични данни или стойността е по-голяма от ${opts.maxValueAsBuffer}`,
    streamValue: `Полето и стойността на потока са на един ред. Напр.: field1 value1 "field 2" "value 2"`,
    streamTimestampId: `'*' означава автоматично генериране или спецификация като <millisecondsTime>-<sequenceNumber>`,
    unableToLoadKey: ({
      key
    }) => {
      return `Не може да се зареди този ключ: ${key}. Възможно е ключът да е изтрит. Точната грешка е в конзолата.`;
    },
    bigJson: "Този JSON обект е над 10 кб, затова се уверете, че знаете какво правите, защото някои функции могат да се визуализират бавно.",
    addNode: "Добави възел",
    validateJson: "Валидирай JSON",
    reducedFunction: `Намалена функционалност`,
    tooManyKeys: opts => {
      return `За пълните максимални функции допустимият общ брой ключове е ${opts.maxLightKeysCount}. Тази база данни има повече от допустимия общ брой ключове ${opts.count}. Сортирането на ключовете и допълнителната информация за дървото са деактивирани. Търсенето се извършва само на сървъра, вместо на клиента.`;
    },
    redisCommandNotFound: "Не е намерена съвпадаща Redis команда ...",
    treeKeyStore: `Сортирането (естествено сравнение) се изпълнява на клиента, т.е. браузъра, което означава, че има забавяне при големи набори от данни, като над 10 хил. ключа, може да добави малко време за визуализация на страницата. В Redis няма сортиране на ключове, само по този начин.`,
    socketIoTimeout: options => {
      return `Socket.IO изтече за тази заявка (макс. ${options.timeout / 1000} секунди) ...`;
    },
    resizerInfo: options => {
      return `Минималната ширина на левия или десния панел е ${options.width}px`;
    },
    jsonViewNotParsable: "Тази стойност не може да бъде обработена като JSON  ",
    ttlTitle: "Задайте TTL в секунди",
    passwordSecure: "Паролата може да е празна, но все пак ще показва символи, това е защитна функция.",
    tlsWithoutCert: "Активиране на TLS без допълнителен сертификат",
    tlsRejectUnauthorized: "Отхвърляне на неоторизиран сертификат",
    tlsSecure: "Ако видите TLS конфигурация, която започва с P3X или всички TLS настройки изглеждат еднакви, това е защитна функция. За да промените настройките, просто заменете тези настройки с празни или нещо друго и те ще бъдат запазени. Ако не промените TLS настройките, те ще бъдат запазени така, както са на сървъра.",
    treeSeparatorEmpty: "Ако разделителят на дървото е празен, дървото няма да има вложени възли, а само обикновен списък",
    treeSeparatorEmptyNote: "Без вложени възли, само обикновен списък",
    welcomeConsole: "Добре дошли в Redis Конзолата",
    welcomeConsoleInfo: "Историята с курсора НАГОРЕ или НАДОЛУ е активирана",
    redisListIndexInfo: "Празно за добавяне накрая, -1 за добавяне в началото или запазете на показаната позиция.",
    console: "Конзола",
    connectiondAdd: "Добави връзка",
    connectiondEdit: "Редактирай връзка",
    connectiondView: "Преглед на връзка",
    connections: "Връзки",
    keysSort: {
      on: "Сортиране на ключове включено",
      off: "Сортиране на ключове изключено"
    },
    cluster: {
      on: "Клъстер включен",
      off: "Клъстер изключен"
    },
    sentinel: {
      on: "Sentinel включен",
      off: "Sentinel изключен",
      name: "Sentinel име"
    },
    readonly: {
      on: "Readonly включен",
      off: "Readonly изключен"
    },
    theme: {
      light: "Светла",
      dark: "Тъмна enterprise",
      darkNeu: "Тъмна",
      darkoBluo: "Darko bluo",
      enterprise: "Enterprise",
      redis: "Redis",
      matrix: "Matrix"
    },
    connected: opts => {
      return `Свързан: ${opts.name}`;
    },
    tree: "Дърво",
    askAuth: "Заявка за оторизация",
    keyboardShortcuts: "Клавишни комбинации",
    about: "Относно",
    supportedLanguages: "Поддържани езици",
    version: "Версия",
    redisVersion: "Redis версия",
    modules: "Модули",
    shortcutRefresh: "Опресняване",
    shortcutSearch: "Фокус върху търсенето",
    shortcutNewKey: "Нов ключ",
    shortcutDisconnect: "Прекъсни",
    themeAuto: "Автоматично (система)",
    languageAuto: "Автоматично (система)",
    shortcutCommandPalette: "Палитра с команди",
    commandPalette: "Палитра с команди",
    noResults: "Няма резултати",
    redisCommandsReference: "Redis Команди",
    ungrouped: "Без група",
    grouped: "Групирани",
    connectFirst: "Първо се свържете с Redis сървър",
    searchLanguage: "Търсене на език...",
    exportProgress: "Експортиране на ключове...",
    importProgress: "Импортиране на ключове...",
    importPreview: "Преглед",
    importOverwrite: "Презаписване",
    importSkip: "Пропускане",
    importConflict: "Ако ключът вече съществува:",
    noKeysToExport: "Няма ключове за експортиране",
    time: "Време",
    type: "Тип",
    format: "Формат",
    loading: "Зареждане...",
    autoRefresh: "Авто",
    exportSearchHint: "Експортиране само на ключове, съвпадащи с текущото търсене",
    importSearchHint: "Импортът се прилага към цялата база данни, не само към резултатите от търсенето",
    deleteSearchHint: "Изтрива всички ключове, съответстващи на текущото търсене на сървъра",
    deletingSearchKeys: "Изтриване на съвпадащи ключове...",
    importNoKeys: "Не са намерени ключове във файла",
    desktopNotifications: "Настолни известия",
    desktopNotificationsEnabled: "Активиране на настолни известия",
    desktopNotificationsInfo: "Получавайте известия от ОС при прекъсване и възстановяване на Redis връзката, когато приложението не е на фокус."
  },
  status: {
    dataCopied: "Данните са в клипборда",
    exportDone: "Експортът е завършен",
    deletedSearchKeys: (opts) => `Изтрити ${opts.count} ключа`,
    indexCreated: "Индексът е създаден",
    indexDropped: "Индексът е изтрит",
    importDone: (opts) => `Импортът завършен: ${opts.created} създадени, ${opts.skipped} пропуснати, ${opts.errors} грешки`,
    nodeRemoved: "Възелът е премахнат",
    keyIsNotExisting: "Този ключ може да е бил изтрит или изтекъл.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "Няма ключове";
      } else if (opts.keyCount === 1) {
        return "1 ключ";
      } else {
        return `${opts.keyCount} ключа`;
      }
    },
    treeExpandAll: "Разгъване на всички листа на дървото. Тази операция може да е ресурсоемка и да отнеме време ...",
    noRedisKeys: "Няма ключове в тази база данни.",
    redisConnected: "Redis е свързан успешно",
    reloadingDataInfo: "Презареждане на информацията за Redis данните",
    added: "Добавено",
    saved: "Обновено",
    cancelled: "Отменено",
    deleted: "Изтрито",
    savedRedis: "Redis данните са запазени",
    redisDisconnected: opts => {
      return `Текущата връзка имаше грешка: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `Индексът на БД е зададен на ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `Ключът на дървото е изтрит (${opts.key}).`;
    },
    deletedKey: opts => {
      return `Ключът е изтрит (${opts.key}).`;
    },
    renamedKey: "Този ключ е преименуван",
    ttlChanged: "TTL на този ключ е променен",
    notInteger: "Този вход не е цяло число",
    persisted: "Този ключ е запазен завинаги",
    set: "Ключът е зададен/добавен",
    connectionRestored: "Връзката е възстановена"
  },
  code: {
    "delete-connection": "Тази връзка е изтрита, затова сте прекъснати от тази Redis инстанция.",
    "save-connection": "Тази връзка е променена, затова сте прекъснати от тази Redis инстанция. Можете да се свържете отново.",
    "readonly-connections": "Връзките за добавяне/запазване/изтриване са само за четене!",
    "readonly-connection-mode": "Тази връзка е в режим само за четене!",
    "list-out-of-bounds": "Индексът на списъка е извън обхвата",
    "invalid-json-value": "The value is not valid JSON.",
    "http_auth_required": "Необходима е оторизация: моля, удостоверете се с HTTP Basic Auth и презаредете.",
    "auto-connection-failed": "Възможно е връзката да е била премахната и автоматичното свързване е неуспешно поради това.",
    invalid_console_command: "Тази команда не работи чрез GUI.",
    "AI_DISABLED": "AI е деактивиран. Активирайте го в AI настройките.",
    "AI_PROMPT_REQUIRED": "Необходим е AI запрос.",
    "GROQ_API_KEY_READONLY": "Ключът на Groq API е само за четене и не може да бъде променен.",
    "blocked_api_access": "Вашият план на Groq API не позволява достъп до този модел. Моля, надградете плана си или използвайте прокси network.corifeus.com.",
    "rate_limit": "Достигнат е лимитът на AI. Опитайте по-късно или използвайте собствен Groq API ключ в настройките."
  },
  form: {
    error: {
      required: "Задължително",
      port: "Портът е между 1-65535",
      invalid: "Формулярът е невалиден"
    },
    connection: {
      label: {
        name: "Име",
        group: "Група",
        host: "Хост",
        port: "Порт",
        password: "Парола",
        username: "Потребителско име"
      }
    },
    treeSettings: {
      maxValueDisplay: "Максимална дължина на показвания текст",
      maxValueDisplayInfo: "Ако е зададено 0, показва пълните стойности. Ако е по-голямо от 0, съкращава до тази дължина. Ако е -1: за низове скрива стойността до редактиране; за други типове показва пълното съдържание.",
      maxKeys: "Максимален брой ключове",
      maxKeysInfo: "За да не се срине GUI, ограничаваме максималния брой ключове.",
      keyCount: (opts) => {
        return `Брой ключове: ${opts?.keyCount ?? 0}`;
      },
      label: {
        animation: "Използвай анимация",
        noAnimation: "Без анимация",
        jsonFormatTwoSpace: "Форматиране на JSON с 2 интервала",
        jsonFormatFourSpace: "Форматиране на JSON с 4 интервала",
        formName: "Redis настройки",
        searchModeClient: "Търсене от страната на клиента",
        searchModeServer: "Търсене от страната на сървъра",
        searchModeStartsWith: "Търсене с режим 'започва с'",
        searchModeIncludes: "Режим на търсене 'съдържа'"
      },
      field: {
        treeSeparator: "Разделител на дървото",
        treeSeparatorSelector: "Селектор на разделител на дървото",
        page: "Брой страници на дървото",
        keyPageCount: "Брой ключове на страница",
        keysSort: "Сортиране на ключовете",
        searchMode: "Режим на търсене",
        searchModeStartsWith: "Търсене 'започва с' / 'съдържа'"
      },
      error: {
        keyPageCount: "Броят ключове на страница трябва да е цяло число между 5 - 100",
        page: "Броят на страниците трябва да е цяло число между 10 - 5000",
        maxValueDisplay: "Максималната показвана стойност трябва да е цяло число между -1 и 32768",
        maxKeys: "Максималният брой ключове трябва да е цяло число между 100 и 100000"
      }
    },
    key: {
      label: {
        formName: {
          add: "Добавяне на нов Redis ключ",
          edit: "Редактиране на Redis ключ",
          append: "Добавяне към съществуващ Redis ключ"
        }
      },
      field: {
        streamTimestamp: "Времева марка",
        key: "Ключ",
        type: "Тип",
        index: "Индекс",
        hashKey: "Хеш ключ",
        score: "Резултат",
        value: "Стойност"
      },
      error: {
        streamTimestamp: "Времевата марка е задължителна, във формат на Redis или като *",
        key: "Ключът е поне един символ",
        hashKey: "Хеш ключът е поне един символ",
        score: "Резултатът на подреденото множество е задължителен",
        value: "Стойността е задължителна"
      }
    },
    main: {
      label: {
        database: "БД"
      }
    }
  },
  page: {
    search: {
      title: "Търсене",
      index: "Индекс",
      query: "Заявка",
      results: "Резултати",
      noIndex: "Не са намерени индекси",
      createIndex: "Създай индекс",
      dropIndex: "Изтрий индекс",
      indexInfo: "Инфо за индекс",
      indexName: "Име на индекс",
      prefix: "Префикс на ключ (по избор)",
      fieldName: "Име на поле"
    },
    monitor: {
      title: "Мониторинг",
      memory: "Памет",
      opsPerSec: "Операции/сек",
      clients: "Клиенти",
      blocked: "Блокирани",
      hitsMisses: "Процент попадения",
      networkIo: "Мрежов I/O",
      slowLog: "Бавен журнал",
      totalCommands: "Общо",
      expired: "Изтекли",
      evicted: "Изгонени",
      clientList: "Списък с клиенти",
      topKeys: "Най-големи ключове",
      killClient: "Убий клиент",
      clientKilled: "Клиентът е убит",
      confirmKillClient: "Сигурни ли сте, че искате да спрете този клиент?",
      noKeys: "Няма ключове",
      rss: "RSS",
      peak: "Пик",
      fragmentation: "Фрагментация",
      hitsAndMisses: "Попадения / Пропуски",
      noClients: "Няма клиенти"
    },
    analysis: {
      title: "Анализ на паметта",
      runAnalysis: "Стартирай анализ",
      running: "Анализиране...",
      typeDistribution: "Разпределение по типове",
      prefixMemory: "Памет по префикс",
      topKeysByMemory: "Най-големи ключове по памет",
      expirationOverview: "Изтичане на ключове",
      memoryBreakdown: "Разбивка на паметта",
      keysScanned: "Сканирани ключове",
      totalMemory: "Обща памет",
      rssMemory: "RSS памет",
      peakMemory: "Пикова памет",
      luaMemory: "Lua памет",
      overheadMemory: "Допълнителни разходи",
      datasetMemory: "Набор данни",
      fragmentation: "Фрагментация",
      allocator: "Алокатор",
      withTTL: "С TTL",
      persistent: "Постоянни",
      avgTTL: "Среден TTL",
      prefix: "Префикс",
      keyCount: "Брой ключове",
      memoryUsage: "Използване на памет",
      noPrefix: "(без префикс)",
      topN: "Top N",
      maxScanKeys: "Макс. сканирани ключове",
      type: "Тип",
      noData: "Няма данни. Кликнете Стартирай анализ, за да започнете.",
      exportAll: "Експорт на всичко"
    },

    overview: {
      noConnected: "Няма връзка с Redis.",
      overviewClients: "Списък на свързаните по брой клиенти",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "1 клиент";
        }
        return `${opt.length} клиента`;
      }
    },
    key: {
      label: {
        key: "Ключ",
        encoding: "Кодиране",
        compression: "Компресия",
        aiRateLimited: "Достигнат е лимитът на AI заявки. Опитайте отново по-късно или използвайте собствен Groq API ключ в Настройки.",
        aiError: "AI заявката е неуспешна",
        length: "Размер",
        ttl: "TTL",
        ttlTitle: "Време за живот",
        type: "Тип",
        ttlNotExpire: "не изтича",
        lengthString: "байта",
        lengthItem: "елемента",
        actions: "Действия"
      },
      list: {
        table: {
          index: "Индекс",
          value: "Стойност"
        }
      },
      hash: {
        table: {
          hashkey: "Хеш ключ",
          value: "Стойност"
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
          timestamp: "ID на времева марка",
          field: "Поле",
          value: "Стойност"
        }
      },
      timeseries: {
        chart: "Графика",
        info: "Информация",
        addPoint: "Добавяне на точка от данни",
        from: "От (мс или -)",
        to: "До (мс или +)",
        aggregation: "Агрегация",
        timeBucket: "Интервал (мс)",
        none: "Няма",
        dataPoints: "точки от данни",
        labels: "Етикети",
        rules: "Правила",
        retention: "Задържане",
        timestamp: "Времева марка",
        value: "Стойност",
        retentionHint: "0 = без изтичане, или милисекунди",
        duplicatePolicy: "Политика за дубликати",
        labelsHint: "ключ1 стойност1 ключ2 стойност2",
        timestampHint: "'*' означава автоматично генериране, или времева марка в милисекунди",
        editAllHint: "Една точка от данни на ред: времева_марка стойност (времева_марка може да е * за авто)",
        autoSpread: "Автоматичен интервал на разпределение *",
        formula: "Формула",
        formulaLinear: "Линейна",
        formulaRandom: "Случайна",
        formulaSawtooth: "Трионовидна",
        formulaPoints: "Точки",
        formulaAmplitude: "Амплитуда",
        formulaOffset: "Отместване",
        generate: "Генериране",
        exportChart: "Експорт PNG",
        overlay: "Наслагване на ключове",
        overlayHint: "Ключове, разделени със запетая",
        mrangeFilter: "Филтър по етикети",
        bulkMode: "Масово генериране",
        mrangeHint: "напр. sensor=temp"
      }
    },
    treeControls: {
      settings: "Настройки на дървото",
      expandAll: "Разгъни всичко",
      collapseAll: "Свий всичко",
      level: "Ниво",
      search: {
        search: "Търсене в ключовете",
        clear: "Изчисти текущото търсене",
        placeholderClient: "Търсене от страната на клиента",
        placeholderServer: "Търсене от страната на сървъра",
        info: (opts) => "Търсенето от страната на клиента означава, че съвпада текстът във входното поле за търсене. Търсенето от страната на сървъра означава, че се търси в шаблоните на ключовете като *{текст-за-търсене}*. За големи набори от данни е по-добре да се използва търсене от страната на сървъра. За по-малки набори от данни е по-добре да се използва режим на търсене от страната на клиента." + ` Ако броят на ключовете е над ${opts?.maxLightKeysCount ?? 110000}, можете да търсите само от страната на сървъра.`,
        largeSetInfo: "При голям набор от данни търсенето от страната на клиента е деактивирано, така че в момента е възможно само търсене от страната на сървъра.",
        infoDetails: "За да разберете как работи търсенето, моля проверете настройките"
      },
      pager: {
        next: "Следващ",
        prev: "Предишен",
        first: "Първи",
        last: "Последен"
      }
    }
  },
  time: {
    type: "Тип",
    format: "Формат",
    loading: "Зареждане...",
    years: "години",
    months: "месеци",
    days: "дни",
    year: "година",
    month: "месец",
    day: "ден",
    second: "секунда",
    seconds: "секунди",
    minute: "минута",
    minutes: "минути",
    hour: "час",
    hours: "часа"
  },
  redisTypes: {
    string: "String",
    list: "List",
    hash: "Hash table",
    set: "Set",
    zset: "Sorted set - zset",
    stream: "Stream",
    json: "JSON",
    timeseries: "Time Series"
  }
};
module.exports = strings;
