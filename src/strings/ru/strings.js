const strings = {
  error: {
    cleared_license: "Очищенная лицензия",
    invalid_license: "Неверная лицензия",
    license_max_devices_reached: "Достигнут максимальный лимит устройств",
    license_readonly: "Лицензию можно изменить только из терминала сервера.",
    server_error: "Серверная ошибка, пожалуйсто попробуйте снова"
  },
  title: {
    donate: "Донат",
    jsonRecursive: "Расширяем все листья",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "Вы можете выбрать Redis коннектор для соединения из меню снизу слева.",
    statistics: "Статистика",
    error: "Ошибка",
    connectingRedis: "Подключаемся к Redis ...",
    socketioConnectError: "Ошибка Socket.IO",
    db: "База данных",
    server: "Сервер",
    clients: "Клиент",
    memory: "Память",
    persistence: "Постоянность",
    stats: "Статистика",
    replication: "Репликация",
    cpu: "ЦПУ",
    cluster: "Кластер",
    modules: "Модули",
    errorstats: "Статистика ошибок",
    commandstats: "Статистика команд",
    latencystats: "Статистика задержек",
    keysizes: "Размеры ключей",
    threads: "Потоки",
  },
  confirm: {
    dropIndex: "Вы уверены, что хотите удалить этот индекс?",
    uploadBuffer: "Вы уверены, чтобы загрузить эти двоичные данные?",
    uploadBufferDone: "Двоичные данные загружаются",
    uploadBufferDoneAndSave: "Двоичные данные загружаются и сохраняются на сервере.",
    title: "Подтвердить",
    alert: "Внимание",
    info: "Информация",
    deleteListItem: "Вы точно хотите удалить этот список?",
    deleteHashKey: "Вы точно хотите удалить этот хэш?",
    deleteStreamTimestamp: "Вы точно хотите удалить эту временную отметку потока?",
    deleteSetMember: "Вы точно хотите удалить этого члена набора?",
    deleteZSetMember: "Вы точно хотите удалить этого члена сортированного набора?",
    deleteConnection: "Подтвердить",
    deleteConnectionText: "Вы точно хотите удалить это подключение Redis?",
    deleteNode: "Вы точно хотите удалить эту ноду Redis?",
    deleteAllKeys: opts => {
      return `Удалить это дерево и все его ключи (${opts.key})?`;
    },
    socketioConnectError: "Socket.IO не может подключится к серверу, вы можете перезагрузить и решить проблему с соединением самостоятельно, клиент не знает как решить это.",
    socketioAuthRequired: "Для Socket.IO нужна авторизация. Выполните вход через HTTP Basic Auth (логин/пароль) и перезагрузите страницу.",
    deleteKey: "Вы точно хотите удалить этот ключ?",
    rename: {
      title: "Вы точно хотите переименовать этот ключ?",
      textContent: 'Если вы нажмёте кнопку "Переименоват" вы навсегда переименуете этот ключ.',
      placeholder: "Ключ Redis (обязательно)"
    },
    ttl: {
      title: "Вы точно хотите изменить TTL этого ключа?",
      textContent: 'Если вы нажмёте "Изменить" вы измените TTL этого ключа, пустой TTL равен вечному.',
      placeholder: "TTL ключа Redis (цельная цифра или ничего)",
      placeholderPlaceholder: "Пустота означает вечность, для других случаев используйте целое число.",
      convertTextToTime: "Конвертировать текст во время",
      convertTextToTimePlaceholder: "Например, 1d равен 86400"
    },
    license: {
      title: "Установить лицензию",
      textContent: "Если вы хотите использовать платные функции, запросите лицензию у support@corifeus.com. Цена: Pro — 400 HUF/месяц (€1/месяц) или 4 000 HUF/год (€10/год), Enterprise — 1 200 HUF/месяц (€3/месяц) или 12 000 HUF/год (€30/год). Годовая цена = 10x месячной. С НДС 27% итог: Pro — 500 HUF/месяц (€1.27/месяц) или 5 100 HUF/год (€12.70/год), Enterprise — 1 500 HUF/месяц (€3.81/месяц) или 15 200 HUF/год (€38.10/год). Для проверки лицензии требуется подключение к интернету. По умолчанию лицензия включает 5 мест (seats). Если нужно больше мест, свяжитесь с нами: support@corifeus.com.",
      placeholder: "Ключ лицензии"
    }
  },
  language: {
    // When you translate the english name, keep the Language in English
    // eg. Inglés / English
    bg: "Български / Bulgarian",
    cs: "Čeština / Czech",
    de: "Deutsch / German",
    el: "Ελληνικά / Greek",
    en: "Английский / English",
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
    copy: "Копировать",
    downloadBuffer: "Скачать бинарный файл",
    setBuffer: "Загрузить двоичный файл",
    exportKeys: "Экспорт ключей",
    exportAllKeys: (opts) => `Экспорт всех ${opts.count} ключей`,
    exportSearchResults: (opts) => `Экспорт ${opts.count} результатов`,
    importKeys: "Импорт ключей",
    saveWithFormatJson: "Сохранить с форматом",
    formatJson: "Форматировать Json",
    wrap: "Перенос",
    unwrap: "Без переноса",
    downloadJson: "Скачать JSON",
    pubsubMonitor: "Мониторинг PubSub",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "Язык / Language",
    ok: "ОК",
    addKey: "Добавить к этому ключу",
    addKeyRoot: "Добавить к корневому ключу",
    reloadKey: "Кнопка перезагрузки",
    reload: "Перезагрузить",
    close: "Закрыть",
    commands: "Команды",
    view: "Вид",
    statistics: "Статистика",
    refresh: "Обновить",
    pause: "Пауза",
    resume: "Продолжить",
    clear: "Очистить",
    rename: "Переименовать",
    main: "База данных",
    cancel: "Отмена",
    theme: "Тема",
    github: "GitHub",
    githubRepo: "Репозиторий",
    githubRelease: "Релизы",
    githubChangelog: "Изменения",
    info: "Info",
    settings: "Настройки",
    connect: "Подключиться",
    disconnect: "Отключится",
    overview: "Обзор",
    console: "Консоль",
    noConnections: "Подключения отсутствуют, добавьте подключение в меню настроек.",
    noConnectionsInSettings: "Подключения отсутствуют, вы можете добавить НОВОЕ ПОДКЛЮЧЕНИЕ выше.",
    connectionAdd: "Новое подключение",
    addGroup: "Добавить группу",
    extend: "Расширить",
    collapse: "Схлопнуть",
    add: "Добавить",
    edit: "Редактировать",
    save: "Сохранить",
    ttl: "Выбрать TTL",
    license: "Установить лицензию",
    delete: "Удалить",
    remove: "Убрать",
    sure: "Хорошо",
    testConnection: "Проверка соединения",
    getKey: "Загрузка ключа Redis и асоциированных данных ...",
    jsonViewShow: "Показать JSON",
    jsonViewEditor: "Редактировать JSON",
    quickConsole: "Быстрый"
  },
  label: {
    id: {
      nodeId: 'Идентификатор узла',
      id: "Идентификатор соединения",
      info: "Если вы не хотите изменять свойства: sshPassword, sshPrivateKey, пароля, tlsCrt, tlsKey, tlsCa, введите идентификатор соединения в эти свойства, чтобы сохранить значения свойств нетронутыми. Если вы хотите использовать ту же логику в пароле узла, введите идентификатор узла в пароле узла."
    },
    secureFeature: 'Если вы видите значение, которое начинается с P3X и выглядит похоже, это функция безопасности. Чтобы изменить настройки, просто замените эти настройки на пустые или что-то другое, и они будут сохранены. Если вы не измените настройки, настройки останутся такими, какие они есть на сервере.',
    ssh: {
      on: 'SSH включен',
      off: 'SSH выключен',
      sshHost: 'Хост SSH',
      sshPort: 'Порт SSH',
      sshUsername: 'Имя пользователя SSH',
      sshPassword: 'Пароль SSH',
      sshPrivateKey: 'Приватный ключ SSH'
    },
    isBuffer: opts => `[object ArrayBuffer] означает, что значение представляет собой двоичный буфер или значение превышает ${opts.maxValueAsBuffer}`,
    streamValue: `Поле и значение потока это однополосник. Например: поле1 значение1 "поле 2" "значение 2"`,
    streamTimestampId: `'*' означает автогенерацию или определяется как <millisecondsTime>-<sequenceNumber>`,
    unableToLoadKey: ({
      key
    }) => {
      return `Не вышло загрузить ключ: ${key}. Возможно он был удалён. Полная ошибка написана в консоли.`;
    },
    bigJson: "Этот JSON обьект больше 10 kb, удостоверьтесь что вы знаете что делаете, так как некоторые функции рендерятся медленнее.",
    addNode: "Добавить ноду",
    validateJson: "Проверить JSON",
    reducedFunction: `Урезанная функциональность`,
    tooManyKeys: opts => {
      return `Для полноценной работы максимума функций разрешены ключи в общем количестве ${opts.maxLightKeysCount} штук. Эта база данных имеет больше ключей чем разрешено, суммой ${opts.count}. Сортировка и информация древом для ключей выключены. Поиск будет производится только на серверной стороне.`;
    },
    redisCommandNotFound: "Ни одна команда Redis не совпадает с вводом ...",
    treeKeyStore: `Сортировка (природное сравнение) выполняется в клиенте (он же браузер), что замедляет большие сортировки, например больше чем 10k ключей, это может добавить немного задержки к прогрузке страницы. В самом Redis нету сортировки ключей, это можно делать только так.`,
    socketIoTimeout: options => {
      return `Socket.IO не успел ответить на запрос (максимум ${options.timeout / 1000} секунд) ...`;
    },
    resizerInfo: options => {
      return `Минимальная ширина левой или правой панели это ${options.width}px`;
    },
    jsonViewNotParsable: "Это значение не подобно JSON",
    ttlTitle: "Выбрать TTL в секундах",
    passwordSecure: "Пароль может быть пустым, но он всё ещё будет отображать символы, это фича для безопасности.",
    tlsWithoutCert: "Включить TLS без дополнительного сертификата",
    tlsRejectUnauthorized: "Reject unauthorized certificate",
    tlsSecure: "Если вы видите TLS конфигурацию которая начинается с P3X или все настройки TLS выглядят одинаково, это фича для безопасности. Для изминения настроек надо заменить эти настройки пустыми или чем либо ещё, и они сохранятся. Если вы ек измените настройки TLS, настройки останутся такими же как и на самом сервере.",
    treeSeparatorEmpty: "Если разделитель дерева пуст, в дереве вместо вложенных нод будет лишь чистый список",
    treeSeparatorEmptyNote: "Никаких вложенных нод, только чистый список",
    welcomeConsole: "Добро пожаловать в консоль Redis",
    welcomeConsoleInfo: "История по нажатию ВВЕРХ или ВНИЗ кллючена",
    redisListIndexInfo: "Пустое для добавления, -1 что бы сделать вид или сохранить в указанную позицию.",
    console: "Консоль",
    connectiondAdd: "Добавить соединение",
    connectiondEdit: "Изменить соединение",
    connectiondView: "Осмотреть соединение",
    connections: "Соединения",
    licenseInfo: "Лицензия",
    licenseEditable: "Редактирование лицензии",
    licenseEditableYes: "Да",
    licenseEditableNo: "Нет",
    licenseTerminalOnly: "Лицензию можно настроить только из терминала сервера.",
    licenseTierPolicyTitle: "Политика тарифов",
    licenseTierPolicyText: "<h4>Free</h4>только базовый Redis UI; без SSH-туннелирования, без режима Readonly connection mode, без Cluster/Sentinel, без Edit JSON/Upload binary/Download binary, без ReJSON.<br/><strong>Цена: 0 HUF/месяц (€0/месяц).</strong><br/><br/><h4>Pro</h4>SSH-туннелирование, режим Readonly connection mode (включая --readonly-connections/-r), Edit JSON, Upload binary, Download binary, ReJSON.<br/><strong>Базовая цена: 400 HUF/месяц (€1/месяц) или 4 000 HUF/год (€10/год).</strong><br/><strong>Итог с НДС 27%: 500 HUF/месяц (€1.27/месяц) или 5 100 HUF/год (€12.70/год).</strong><br/><br/><h4>Enterprise</h4>SSH-туннелирование, Cluster и Sentinel, а также Edit JSON, Upload binary, Download binary, ReJSON; --readonly-connections/-r тоже работает.<br/><strong>Базовая цена: 1 200 HUF/месяц (€3/месяц) или 12 000 HUF/год (€30/год).</strong><br/><strong>Итог с НДС 27%: 1 500 HUF/месяц (€3.81/месяц) или 15 200 HUF/год (€38.10/год).</strong><br/><br/><h4>Годовое правило</h4>Годовая цена = 10x месячной.<br/><br/><h4>Места</h4>По умолчанию лицензия включает 5 мест (seats). Если нужно больше мест, свяжитесь с нами: <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><br/><h4>Пробный Enterprise</h4>10 дней бесплатно для любого пользователя с реальным существующим email (не тестовым).<br/><hr/><h4>Данные для письма</h4>Имя, Billing e-mail, Код страны, Почтовый индекс, Город, Адрес, VAT ID (если есть).<br/><br/><h4>Оплата</h4>Оплата через PayPal доступна только в HUF (форинт); после отправки денег на <a href='https://paypal.me/corifeus'>https://paypal.me/corifeus</a> я отправлю вам счет. Все платежи не подлежат возврату.<br/><br/><h4>НДС</h4>НДС добавляется к цене (в Венгрии 27%).<br/><hr/><h4>Контакт</h4>Если хотите просто поздороваться или задать вопрос, напишите на <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><hr/><h4>Язык</h4>Коммуникация по счетам и отправке лицензионного ключа ведется на английском языке. Валюта счета: HUF.<br/><hr/><h4>Примечание</h4>Для проверки лицензии требуется подключение к интернету.",
    licenseState: "Состояние",
    licenseStateActive: "Активна",
    licenseStateInactive: "Неактивна",
    licenseStateNoLicense: "Лицензия отсутствует",
    licenseKeyMasked: "Сохраненный ключ",
    licenseTier: "Тариф",
    licenseValid: "Валидна",
    licenseStatus: "Статус лицензии",
    licenseReason: "Причина",
    licenseCheckedAt: "Проверено",
    licenseStartsAt: "Начало",
    licenseExpiresAt: "Истекает",
    licenseDaysLeft: "Осталось дней",
    licenseMaxDevices: "Макс. устройств",
    licenseActiveDevices: "Активные устройства",
    licenseActiveDevicesInfo: "Если устройство больше не используется, его место освобождается автоматически через 75 минут.",
    licenseCustomerEmail: "Email клиента",
    licenseFeatures: "Функции",
    licenseFeaturesEmpty: "Дополнительных функций нет",
    licenseFeatureReadonlyMode: "Режим \"только чтение\"",
    licenseFeatureReadonlyConnectionsFlag: "Глобальный readonly (--readonly-connections/-r)",
    licenseFeatureSsh: "SSH-туннелирование",
    licenseFeatureCluster: "Подключения Cluster",
    licenseFeatureSentinel: "Подключения Sentinel",
    licenseFeatureReJSON: "ReJSON (JSON data type)",
    keysSort: {
      on: "Сортировка ключей включена",
      off: "Сортировка ключей выключена"
    },
    cluster: {
      on: "Кластеризация активирована",
      off: "Кластеризация деактивирована"
    },
    sentinel: {
      on: "Сентинел включен",
      off: "Сентинел выключен",
      name: "Имя дозорного"
    },
    readonly: {
      on: 'Режим "только чтение"',
      off: 'Режим "редактирование"'
    },
    proSshOnly: "SSH доступен в тарифах Pro и Enterprise.",
    proReadonlyOnly: 'Режим "только чтение" доступен в тарифах Pro и Enterprise.',
    enterpriseClusterSentinelOnly: "Cluster и Sentinel доступны только в Enterprise.",
    theme: {
      light: "Светлая",
      dark: "Тёмная корпоративная",
      darkNeu: "Тёмная",
      darkoBluo: "Тёмное синево",
      enterprise: "Корпоративная",
      redis: "Redis",
      matrix: "Матрица"
    },
    connected: opts => {
      return `Подключено: ${opts.name}`;
    },
    tree: "Дерево",
    askAuth: "Запросить авторизацию",
    keyboardShortcuts: "Горячие клавиши",
    about: "О программе",
    supportedLanguages: "Поддерживаемые языки",
    version: "Версия",
    redisVersion: "Версия Redis",
    modules: "Модули",
    shortcutRefresh: "Обновить",
    shortcutSearch: "Фокус на поиске",
    shortcutNewKey: "Новый ключ",
    shortcutDisconnect: "Отключится",
    themeAuto: "Авто (система)",
    shortcutCommandPalette: "Палитра команд",
    commandPalette: "Палитра команд",
    noResults: "Нет результатов",
    redisCommandsReference: "Команды Redis",
    ungrouped: "Без группы",
    grouped: "Сгруппированы",
    connectFirst: "Сначала подключитесь к серверу Redis",
    searchLanguage: "Поиск языка...",
    exportProgress: "Экспорт ключей...",
    importProgress: "Импорт ключей...",
    importPreview: "Предпросмотр",
    importOverwrite: "Перезаписать",
    importSkip: "Пропустить",
    importConflict: "Если ключ уже существует:",
    noKeysToExport: "Нет ключей для экспорта",
    time: "Время",
    loading: "Загрузка...",
    autoRefresh: "Авто",
    exportSearchHint: "Экспортируются только ключи, соответствующие текущему поиску",
    importSearchHint: "Импорт применяется ко всей базе данных, а не только к результатам поиска",
    importNoKeys: "Ключи не найдены в файле",
  },
  status: {
    dataCopied: "Данные скопированы в буфер обмена",
    licenseSaved: "Лицензия сохранена",
    exportDone: "Экспорт завершён",
    indexCreated: "Индекс создан",
    indexDropped: "Индекс удалён",
    importDone: (opts) => `Импорт завершён: ${opts.created} создано, ${opts.skipped} пропущено, ${opts.errors} ошибок`,
    nodeRemoved: "Нода удалена",
    keyIsNotExisting: "Этот ключ вероятно был удалён или истёк.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "Нету ключей";
      } else if (opts.keyCount === 1) {
        return "1 ключ";
      } else {
        return `${opts.keyCount} ключей`;
      }
    },
    treeExpandAll: "Развернуть все листья дерева, это имеет цену, временную ...",
    noRedisKeys: "Нету ключей в базе данных.",
    redisConnected: "Redis успешно подключен",
    reloadingDataInfo: "Перезагружаем информацию о данных Redis",
    added: "Добавлено",
    saved: "Обновлено",
    cancelled: "Отменено",
    deleted: "Удалено",
    savedRedis: "Данные Redis были сохранены",
    redisDisconnected: opts => {
      return `Произошла ошибка в теперешнем соединении: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `Выбран индекс базы данных ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `Ключ дерева был удалён (${opts.key}).`;
    },
    deletedKey: opts => {
      return `Ключ был удалён (${opts.key}).`;
    },
    renamedKey: "Этот ключ был переименован",
    ttlChanged: "TTL этого ключа был изменён",
    notInteger: "Этот ввод не для цельной цифры",
    persisted: "Этот ключ не исчезнет сам",
    set: "Этот ключ был применён/добавлен"
  },
  code: {
    "delete-connection": "Это соединение было удалено и по этому вы были отключены от этой инстанции Redis.",
    "save-connection": "Это подключение было изменено и по этому вы были отключены от этой инстанции Redis. Вы можете переподключится.",
    "readonly-connections": 'Добавление/сохранение/удаление соединений в режиме "только чтение"!',
    "readonly-connection-mode": 'Это соединение в режиме "только чтение"!',
    "list-out-of-bounds": "Индекс этого списка вышел за границы",
    "donation-ware-feature": "Эта функция доступна в донатерской версии.",
    "feature-pro-readonly-required": 'Режим "только чтение" требует лицензию Pro или Enterprise.',
    "feature-pro-ssh-required": "SSH-туннелирование требует лицензию Pro или Enterprise.",
    "feature-enterprise-cluster-sentinel-required": "Cluster и Sentinel требуют лицензию Enterprise.",
    "feature-pro-json-binary-required": "Edit JSON, Upload binary и Download binary требуют лицензию Pro или Enterprise.",
    "feature-pro-rejson-required": "ReJSON (JSON data type) requires Pro or Enterprise license.",
    "invalid-json-value": "The value is not valid JSON.",
    "http_auth_required": "Требуется авторизация: выполните вход через HTTP Basic Auth и перезагрузите страницу.",
    "auto-connection-failed": "Вероятно, соединение было удалено и авто-соединение провалилось по таковой причине.",
    invalid_console_command: "Эта команда не работает через GUI."
  },
  licenseReason: {
    LICENSE_VALID: "Лицензия действительна",
    LICENSE_INVALID: "Лицензия недействительна",
    LICENSE_MISSING: "Ключ лицензии не задан",
    LICENSE_DISABLED: "Лицензия отключена в конфигурации сервера",
    LICENSE_NOT_FOUND: "Лицензия не найдена",
    LICENSE_EXPIRED: "Срок лицензии истек",
    LICENSE_CLEARED: "Ключ лицензии очищен",
    LICENSE_MAX_DEVICES_REACHED: "Достигнут максимальный лимит устройств",
    PRODUCT_MISMATCH: "Продукт лицензии не совпадает"
  },
  licenseStatusValue: {
    active: "Активна",
    deleted: "Удалена",
    all: "Все",
    expired: "Истекла",
    missing: "Отсутствует",
    inactive: "Неактивна"
  },
  form: {
    error: {
      required: "Обязательно",
      port: "Порт в границах 1-65535",
      invalid: "Форма заполнена неверно"
    },
    connection: {
      label: {
        name: "Название",
        group: "Группа",
        host: "Имя хоста",
        port: "Порт",
        password: "Пароль",
        username: "Имя пользователя"
      }
    },
    treeSettings: {
      maxValueDisplay: "Длинна видимой строки",
      maxValueDisplayInfo: "Если значение длинны показа равно нулю, будет показано всё, если же оно больше - вывод будет урезан. Если он равен минус одному, вывод будет скрыт до начала редактирования для строк, для других же типов будет показано всё.",
      maxKeys: "Максимум символов",
      maxKeysInfo: "Максимум ключей ограничен что бы GUI не падал.",
      keyCount: () => {
        return `Количество ключей: ${p3xr.state.keysRaw.length}`;
      },
      label: {
        animation: "Использовать анимацию",
        noAnimation: "Выключить анимацию",
        jsonFormatTwoSpace: "Форматировать JSON двумя пробелами",
        jsonFormatFourSpace: "Форматировать JSON четырьмя пробелами",
        formName: "Настройки Redis",
        searchModeClient: "Клиентский режим поиска",
        searchModeServer: "Серверный режим поиска",
        searchModeStartsWith: "Поиск начала",
        searchModeIncludes: "Поиск содержимого"
      },
      field: {
        treeSeparator: "Разделитель дерева",
        treeSeparatorSelector: "Избиратель разделителя дерева",
        page: "Счётчик количества страниц",
        keyPageCount: "Счётчик количества ключей",
        keysSort: "Сортировка ключей",
        searchMode: "Режим поиска",
        searchModeStartsWith: "Поиск начинается с / содержит"
      },
      error: {
        keyPageCount: "Ограничитель показа ключей на странице должен быть цельным числом в границах 5 - 100",
        page: "Ограничитель показа страниц должен быть цельным числом в границах 10 - 5000",
        maxValueDisplay: "Максимальное количество показываемых значений должен быть цельным числом между -1 и 32768",
        maxKeys: "Максимальное количество показываемых ключей должен быть цельным числом между 100 и 100000"
      }
    },
    key: {
      label: {
        formName: {
          add: "Добавить новый ключ Redis",
          edit: "Редактировать ключ Redis",
          append: "Добавить к существующему ключу Redis"
        }
      },
      field: {
        streamTimestamp: "Временная отметка",
        key: "Ключ",
        type: "Тип",
        index: "Индекс",
        hashKey: "Хэш",
        score: "Очки",
        value: "Значение"
      },
      error: {
        streamTimestamp: "Временная отметка обязательна, либо в формате Redis либо как *",
        key: "Ключ должен иметь длинну минимум одного символа",
        hashKey: "Стол хэшей ключей должен иметь длинну минимум одного символа",
        score: "Очки сортировки набора обязательны",
        value: "Значение обязательно"
      }
    },
    main: {
      label: {
        database: "База данных"
      }
    }
  },
  page: {
    search: {
      title: "Поиск",
      index: "Индекс",
      query: "Запрос",
      results: "Результаты",
      noIndex: "Индексы не найдены",
      createIndex: "Создать индекс",
      dropIndex: "Удалить индекс",
      indexInfo: "Информация об индексе",
      indexName: "Имя индекса",
      prefix: "Префикс ключа (необязательно)",
      fieldName: "Имя поля",
    },
    monitor: {
      title: "Мониторинг",
      memory: "Память",
      opsPerSec: "Операций/сек",
      clients: "Клиенты",
      blocked: "Заблокировано",
      hitsMisses: "Попадания",
      networkIo: "Сеть I/O",
      slowLog: "Медленный журнал",
      totalCommands: "Всего",
      expired: "Истекли",
      evicted: "Вытеснено",
      clientList: "Список клиентов",
      topKeys: "Крупнейшие ключи по памяти",
      killClient: "Завершить клиента",
      clientKilled: "Клиент завершён",
      confirmKillClient: "Вы уверены, что хотите завершить этого клиента?",
      noKeys: "Нет ключей",
      noClients: "Нет клиентов",
    },
    overview: {
      noConnected: "Нету подключения к Redis.",
      overviewClients: "Показать подключения по количеству клиентов",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "1 клиент";
        }
        return `${opt.length} клиентов`;
      }
    },
    key: {
      label: {
        key: "Ключ",
        encoding: "Кодировка",
        length: "Размер",
        ttl: "TTL",
        ttlTitle: "Время На Жизнь (TTL)",
        type: "Тип",
        ttlNotExpire: "не истекает",
        lengthString: "байты",
        lengthItem: "обьекты",
        actions: "Действия"
      },
      list: {
        table: {
          index: "Индекс",
          value: "Значение"
        }
      },
      hash: {
        table: {
          hashkey: "Хэш",
          value: "Значение"
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
          score: "Очки"
        }
      },
      stream: {
        table: {
          timestamp: "Идентификатор временной отметки",
          field: "Поле",
          value: "Значение"
        }
      }
    },
    treeControls: {
      settings: "Настройки дерева",
      expandAll: "Развернуть все",
      collapseAll: "Свернуть все",
      search: {
        search: "Поиск ключа",
        clear: "Очистить теперешний поиск",
        placeholderClient: "Искать в клиенте",
        placeholderServer: "Искать на сервере",
        largeSetInfo: "In a large set, client side searching is disabled. so right now only server side searching is possible.",
        info: "Поиск в клиенте означает совпадание с содержимым поля поиска. Серверный поиск означает поиск паттерном на подобие *{искомый-текст}*. Для поиска больших наборов лучше использовать серверный поиск. Для меньших поисковых наборов лучше использовать поиск клиентом." + ` Если количество ключей превышает ${p3xr.settings.maxLightKeysCount}, можно будет искать только серверным поиском.`,
        infoDetails: "Что бы понять как поиск работает, изучите настройки"
      },
      pager: {
        next: "Следующий",
        prev: "Предыдущий",
        first: "Первый",
        last: "Последний"
      }
    }
  },
  time: {
    loading: "Загрузка...",
    years: "года",
    months: "месяца",
    days: "дни",
    year: "год",
    month: "месяц",
    day: "день"
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
