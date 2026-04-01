const strings = {
  error: {
    cleared_license: "Ліцензію очищено",
    invalid_license: "Недійсна ліцензія",
    license_max_devices_reached: "Досягнуто максимальну кількість місць для пристроїв",
    license_readonly: "Ліцензію можна змінити лише з термінала сервера.",
    server_error: "Помилка сервера, будь ласка, спробуйте ще раз"
  },
  title: {
    donate: "Пожертвувати",
    jsonRecursive: "Розгортання всіх гілок",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "Ви можете вибрати Redis-з'єднання для підключення з меню внизу зліва.",
    statistics: "Статистика",
    error: "Помилка",
    connectingRedis: "Підключення до Redis ...",
    socketioConnectError: "Помилка Socket.IO",
    db: "DB",
    server: "Сервер",
    clients: "Клієнти",
    memory: "Пам'ять",
    persistence: "Збереження",
    stats: "Статистика",
    replication: "Реплікація",
    cpu: "CPU",
    cluster: "Cluster",
    modules: "Модулі",
    errorstats: "Статистика помилок",
    commandstats: "Статистика команд",
    latencystats: "Статистика затримок",
    keysizes: "Розміри ключів",
    threads: "Потоки",
  },
  confirm: {
    dropIndex: "Ви впевнені, що хочете видалити цей індекс?",
    uploadBuffer: "Ви впевнені, що хочете завантажити ці бінарні дані?",
    uploadBufferDone: "Бінарні дані завантажено",
    uploadBufferDoneAndSave: "Бінарні дані завантажено та збережено на сервері",
    title: "Підтвердити",
    alert: "Попередження",
    info: "Інформація",
    deleteListItem: "Ви впевнені, що хочете видалити цей елемент списку?",
    deleteHashKey: "Ви впевнені, що хочете видалити цей хеш-ключ?",
    deleteStreamTimestamp: "Ви впевнені, що хочете видалити цю мітку часу потоку?",
    deleteSetMember: "Ви впевнені, що хочете видалити цього члена множини?",
    deleteZSetMember: "Ви впевнені, що хочете видалити цього члена впорядкованої множини?",
    deleteConnection: "Підтвердити",
    deleteConnectionText: "Ви впевнені, що хочете видалити це Redis-з'єднання?",
    deleteNode: "Ви впевнені, що хочете видалити цей Redis-вузол?",
    deleteAllKeys: opts => {
      return `Видалити це дерево та всі його ключі (${opts.key})?`;
    },
    socketioConnectError: "Socket.IO не може підключитися до сервера, ви можете перезавантажити та спробувати вирішити помилку підключення самостійно, клієнт не знає, як її вирішити.",
    socketioAuthRequired: "Потрібна авторизація Socket.IO. Будь ласка, автентифікуйтесь за допомогою HTTP Basic Auth (ім'я користувача/пароль) та перезавантажте.",
    deleteKey: "Ви впевнені, що хочете видалити цей ключ?",
    rename: {
      title: "Ви впевнені, що хочете перейменувати цей ключ?",
      textContent: "Ця дія перейменовує ключ назавжди.",
      placeholder: "Redis-ключ (обов'язковий)"
    },
    ttl: {
      title: "Ви впевнені, що хочете змінити TTL цього ключа?",
      textContent: "Зміна TTL оновлює час життя цього ключа. Залиште порожнім, щоб зберегти ключ назавжди.",
      placeholder: "TTL Redis-ключа (ціле число або порожнє)",
      placeholderPlaceholder: "Порожнє означає, що він зберігається назавжди; інакше введіть ціле число.",
      convertTextToTime: "Конвертувати текст у час",
      convertTextToTimePlaceholder: "Напр. 1d буде 86400"
    },
    license: {
      title: "Встановити ліцензію",
      textContent: "Якщо ви хочете використовувати платні функції, зверніться на support@corifeus.com для запиту ліцензії. Ціна Pro 400 HUF/місяць (€1/місяць) або 4 000 HUF/рік (€10/рік), та Enterprise 1 200 HUF/місяць (€3/місяць) або 12 000 HUF/рік (€30/рік). Річна ціна в 10 разів більша за місячну. З 27% ПДВ підсумки: Pro 500 HUF/місяць (€1,27/місяць) або 5 100 HUF/рік (€12,70/рік), Enterprise 1 500 HUF/місяць (€3,81/місяць) або 15 200 HUF/рік (€38,10/рік). Перевірка ліцензії потребує доступу до інтернету. Стандартна ліцензія включає 5 місць. Якщо потрібно більше місць, зверніться до нас на support@corifeus.com.",
      placeholder: "Ліцензійний ключ"
    }
  },
  language: {
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
    copy: "Копіювати",
    downloadBuffer: "Завантажити бінарний файл",
    setBuffer: "Вивантажити бінарний файл",
    exportKeys: "Експорт ключів",
    exportAllKeys: (opts) => `Експорт усіх ${opts.count} ключів`,
    exportSearchResults: (opts) => `Експорт ${opts.count} результатів`,
    importKeys: "Імпорт ключів",
    saveWithFormatJson: "Зберегти з форматуванням",
    formatJson: "Форматувати Json",
    wrap: "Перенос",
    unwrap: "Без переносу",
    downloadJson: "Завантажити JSON",
    pubsubMonitor: "PubSub-монітор",
    language: "Мова / Language",
    ok: "OK",
    addKey: "Додати до цього ключа",
    addKeyRoot: "Додати кореневий ключ",
    reloadKey: "Перезавантажити ключ",
    reload: "Перезавантажити",
    close: "Закрити",
    commands: "Команди",
    view: "Вигляд",
    statistics: "Статистика",
    refresh: "Оновити",
    pause: "Пауза",
    resume: "Продовжити",
    clear: "Очистити",
    rename: "Перейменувати",
    main: "База даних",
    cancel: "Скасувати",
    theme: "Тема",
    github: "GitHub",
    githubRepo: "Репозиторій",
    githubRelease: "Релізи",
    githubChangelog: "Журнал змін",
    info: "Info",
    settings: "Налаштування",
    connect: "Підключити",
    disconnect: "Відключити",
    overview: "Огляд",
    console: "Консоль",
    noConnections: "Немає з'єднань, додайте з'єднання в меню налаштувань.",
    noConnectionsInSettings: "Немає з'єднань, ви можете додати НОВЕ З'ЄДНАННЯ вище.",
    connectionAdd: "Нове з'єднання",
    addGroup: "Додати групу",
    extend: "Розгорнути",
    collapse: "Згорнути",
    add: "Додати",
    edit: "Редагувати",
    save: "Зберегти",
    ttl: "Встановити TTL",
    license: "Встановити ліцензію",
    delete: "Видалити",
    remove: "Вилучити",
    sure: "Впевнені",
    testConnection: "Тестувати з'єднання",
    getKey: "Завантаження Redis-ключа та пов'язаних даних ...",
    jsonViewShow: "Показати JSON",
    jsonViewEditor: "Редагувати JSON",
    quickConsole: "Швидка консоль",
  },
  label: {
    id: {
      nodeId: 'ID вузла',
      id: "ID з'єднання",
      info: "Якщо ви не хочете змінювати властивості: sshPassword, sshPrivateKey, password, tlsCrt, tlsKey, tlsCa, введіть ID з'єднання в ці властивості, щоб зберегти значення. Якщо ви хочете такої ж логіки для пароля вузла, введіть ID вузла в поле пароля вузла."
    },
    secureFeature: 'Якщо ви бачите значення, яке починається з P3X і виглядає однаково, це функція безпеки. Щоб змінити налаштування, замініть їх порожніми або чимось іншим, і вони будуть збережені. Якщо ви не зміните налаштування, вони залишаться такими, як є на сервері.',
    aiTranslating: "Переклад...",
    aiSettings: "Налаштування ШІ",
    aiGroqApiKey: "Ключ API Groq",
    aiGroqApiKeyInfo: "Необов'язково. Власний ключ API Groq для кращої продуктивності. Отримайте безкоштовний ключ на",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "Ключ API ШІ збережено",
    aiGroqApiKeyNotSet: "Не встановлено (за замовчуванням сервера)",
    ssh: {
      on: 'SSH увімкнено',
      off: 'SSH вимкнено',
      sshHost: 'SSH-хост',
      sshPort: 'SSH-порт',
      sshUsername: "SSH ім'я користувача",
      sshPassword: 'SSH-пароль',
      sshPrivateKey: 'SSH приватний ключ'
    },
    isBuffer: opts => `[object ArrayBuffer] означає, що значення є бінарними даними або значення більше ніж ${opts.maxValueAsBuffer}`,
    streamValue: `Поле та значення Stream записуються в один рядок. Напр.: field1 value1 "field 2" "value 2"`,
    streamTimestampId: `'*' означає автоматично згенероване або специфікація як <мілісекундиЧасу>-<номерПослідовності>`,
    unableToLoadKey: ({
      key
    }) => {
      return `Неможливо завантажити цей ключ: ${key}. Можливо, ключ було видалено. Точна помилка знаходиться в консолі.`;
    },
    bigJson: "Цей JSON-об'єкт більше 10 кб, тому переконайтесь, що ви знаєте, що робите, оскільки деякі функції можуть повільно відображатися.",
    addNode: "Додати вузол",
    validateJson: "Перевірити JSON",
    reducedFunction: `Обмежена функціональність`,
    tooManyKeys: opts => {
      return `Максимальна кількість ключів для повної функціональності — ${opts.maxLightKeysCount}. У цій базі даних ключів більше ніж дозволено: ${opts.count}. Сортування ключів та додаткова інформація дерева вимкнені. Пошук здійснюється лише на сервері, а не на клієнті.`;
    },
    redisCommandNotFound: "Відповідну команду Redis не знайдено ...",
    treeKeyStore: `Сортування (природне порівняння) виконується на клієнті, тобто в браузері, що означає штраф продуктивності для великих наборів, наприклад понад 10 тис. ключів, це може додати трохи часу до рендерингу сторінки. У Redis немає сортування ключів, тільки таким чином.`,
    socketIoTimeout: options => {
      return `Час очікування Socket.IO для цього запиту вичерпано (макс. ${options.timeout / 1000} секунд) ...`;
    },
    resizerInfo: options => {
      return `Мінімальна ширина лівої або правої панелі — ${options.width}px`;
    },
    jsonViewNotParsable: "Це значення не може бути розпізнане як JSON  ",
    ttlTitle: "Встановіть TTL у секундах",
    passwordSecure: "Пароль може бути порожнім, але все одно відображатиме символи, це функція безпеки.",
    tlsWithoutCert: "Увімкнути TLS без додаткового сертифіката",
    tlsRejectUnauthorized: "Відхилити неавторизований сертифікат",
    tlsSecure: "Якщо ви бачите конфігурацію TLS, яка починається з P3X, або всі налаштування TLS виглядають однаково, це функція безпеки. Щоб змінити налаштування, замініть їх порожніми або чимось іншим, і вони будуть збережені. Якщо ви не зміните налаштування TLS, вони залишаться такими, як є на сервері.",
    treeSeparatorEmpty: "Якщо роздільник дерева порожній, дерево не матиме вкладених вузлів, лише простий список",
    treeSeparatorEmptyNote: "Немає вкладених вузлів, лише простий список",
    welcomeConsole: "Ласкаво просимо до консолі Redis",
    welcomeConsoleInfo: "Історія курсором ВГОРУ або ВНИЗ увімкнена",
    redisListIndexInfo: "Порожнє для додавання в кінець, -1 для додавання на початок або збережіть на показану позицію.",
    console: "Консоль",
    connectiondAdd: "Додати з'єднання",
    connectiondEdit: "Редагувати з'єднання",
    connectiondView: "Переглянути з'єднання",
    connections: "З'єднання",
    licenseInfo: "Ліцензія",
    licenseEditable: "Ліцензія редагована",
    licenseEditableYes: "Так",
    licenseEditableNo: "Ні",
    licenseTerminalOnly: "Ліцензію можна налаштувати лише з термінала сервера.",
    licenseTierPolicyTitle: "Політика рівнів",
    licenseTierPolicyText: "<h4>Безкоштовно</h4>Лише базовий Redis UI; без SSH-тунелювання, без режиму підключення лише для читання, без Cluster/Sentinel, без Редагування JSON/Завантаження бінарних файлів/Вивантаження бінарних файлів, без ReJSON.<br/><strong>Ціна: 0 HUF/місяць (€0/місяць).</strong><br/><br/><h4>Pro</h4>SSH-тунелювання, режим підключення лише для читання (включаючи --readonly-connections/-r), Редагування JSON, Завантаження бінарних файлів, Вивантаження бінарних файлів, ReJSON.<br/><strong>Базова ціна: 400 HUF/місяць (€1/місяць) або 4 000 HUF/рік (€10/рік).</strong><br/><strong>Разом з 27% ПДВ: 500 HUF/місяць (€1,27/місяць) або 5 100 HUF/рік (€12,70/рік).</strong><br/><br/><h4>Enterprise</h4>SSH-тунелювання, Cluster та Sentinel, плюс Редагування JSON, Завантаження бінарних файлів, Вивантаження бінарних файлів, ReJSON; --readonly-connections/-r також працює.<br/><strong>Базова ціна: 1 200 HUF/місяць (€3/місяць) або 12 000 HUF/рік (€30/рік).</strong><br/><strong>Разом з 27% ПДВ: 1 500 HUF/місяць (€3,81/місяць) або 15 200 HUF/рік (€38,10/рік).</strong><br/><br/><h4>Річне правило</h4>Річна ціна в 10 разів більша за місячну.<br/><br/><h4>Місця</h4>Стандартна ліцензія включає 5 місць. Якщо потрібно більше місць, зверніться до нас на <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><br/><h4>Пробна версія Enterprise</h4>10 днів безкоштовно для всіх з реальною існуючою електронною адресою (не тестова пошта).<br/><hr/><h4>Платіжна інформація в е-пошті</h4>Ім'я, Електронна адреса для рахунків, Код країни, Поштовий індекс, Місто, Адреса, ІПН (необов'язково).<br/><br/><h4>Оплата</h4>Оплата PayPal доступна лише в HUF (форинт); після надсилання грошей @ <a href='https://paypal.me/corifeus'>https://paypal.me/corifeus</a> я надішлю вам рахунок-фактуру. Усі платежі не підлягають поверненню.<br/><br/><h4>ПДВ</h4>ПДВ додається до ціни (27% в Угорщині).<br/><hr/><h4>Контакти</h4>Якщо ви хочете привітатися або маєте запитання, зверніться на <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><hr/><h4>Мова</h4>Рахунки та листування щодо ліцензії ведеться англійською мовою. Валюта рахунку — HUF.<br/><hr/><h4>Примітка</h4>Перевірка ліцензії потребує доступу до інтернету.",
    licenseState: "Стан",
    licenseStateActive: "Активна",
    licenseStateInactive: "Неактивна",
    licenseStateNoLicense: "Немає ліцензії",
    licenseKeyMasked: "Збережений ключ",
    licenseTier: "Рівень",
    licenseValid: "Дійсна",
    licenseStatus: "Статус ліцензії",
    licenseReason: "Причина",
    licenseCheckedAt: "Перевірено",
    licenseStartsAt: "Починається",
    licenseExpiresAt: "Закінчується",
    licenseDaysLeft: "Днів залишилось",
    licenseMaxDevices: "Макс. пристроїв",
    licenseActiveDevices: "Активні пристрої",
    licenseActiveDevicesInfo: "Якщо пристрій більше не використовується, його місце автоматично звільняється через 75 хвилин.",
    licenseCustomerEmail: "Електронна пошта клієнта",
    licenseFeatures: "Функції",
    licenseFeaturesEmpty: "Немає додаткових функцій",
    licenseFeatureReadonlyMode: "Режим підключення лише для читання",
    licenseFeatureReadonlyConnectionsFlag: "Підключення лише для читання (--readonly-connections/-r)",
    licenseFeatureSsh: "SSH-тунелювання",
    licenseFeatureCluster: "Cluster-з'єднання",
    licenseFeatureSentinel: "Sentinel-з'єднання",
    licenseFeatureReJSON: "ReJSON (JSON data type)",
    keysSort: {
      on: "Сортування ключів увімкнено",
      off: "Сортування ключів вимкнено"
    },
    cluster: {
      on: "Cluster увімкнено",
      off: "Cluster вимкнено"
    },
    sentinel: {
      on: "Sentinel увімкнено",
      off: "Sentinel вимкнено",
      name: "Назва Sentinel"
    },
    readonly: {
      on: "Лише для читання увімкнено",
      off: "Лише для читання вимкнено"
    },
    proSshOnly: "SSH доступний у Pro або Enterprise.",
    proReadonlyOnly: "Режим підключення лише для читання доступний у Pro або Enterprise.",
    enterpriseClusterSentinelOnly: "Cluster та Sentinel доступні лише в Enterprise.",
    theme: {
      light: "Світла",
      dark: "Темна enterprise",
      darkNeu: "Темна",
      darkoBluo: "Darko bluo",
      enterprise: "Enterprise",
      redis: "Redis",
      matrix: "Matrix"
    },
    connected: opts => {
      return `Підключено: ${opts.name}`;
    },
    tree: "Дерево",
    askAuth: "Запитати авторизацію",
    keyboardShortcuts: "Гарячі клавіші",
    about: "Про програму",
    supportedLanguages: "Підтримувані мови",
    version: "Версія",
    redisVersion: "Версія Redis",
    modules: "Модулі",
    shortcutRefresh: "Оновити",
    shortcutSearch: "Фокус на пошуку",
    shortcutNewKey: "Новий ключ",
    shortcutDisconnect: "Відключити",
    themeAuto: "Автоматично (система)",
    shortcutCommandPalette: "Палітра команд",
    commandPalette: "Палітра команд",
    noResults: "Немає результатів",
    redisCommandsReference: "Команди Redis",
    ungrouped: "Без групи",
    grouped: "Згруповані",
    connectFirst: "Спочатку підключіться до сервера Redis",
    searchLanguage: "Пошук мови...",
    exportProgress: "Експорт ключів...",
    importProgress: "Імпорт ключів...",
    importPreview: "Попередній перегляд",
    importOverwrite: "Перезаписати",
    importSkip: "Пропустити",
    importConflict: "Якщо ключ вже існує:",
    noKeysToExport: "Немає ключів для експорту",
    time: "Час",
    loading: "Завантаження...",
    autoRefresh: "Авто",
    exportSearchHint: "Експортуються лише ключі, що відповідають поточному пошуку",
    importSearchHint: "Імпорт застосовується до всієї бази даних, а не лише до результатів пошуку",
    importNoKeys: "Ключі не знайдено у файлі",
  },
  status: {
    dataCopied: "Дані скопійовано в буфер обміну",
    licenseSaved: "Ліцензію збережено",
    exportDone: "Експорт завершено",
    indexCreated: "Індекс створено",
    indexDropped: "Індекс видалено",
    importDone: (opts) => `Імпорт завершено: ${opts.created} створено, ${opts.skipped} пропущено, ${opts.errors} помилок`,
    nodeRemoved: "Вузол видалено",
    keyIsNotExisting: "Цей ключ міг бути видалений або його термін дії минув.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "Немає ключів";
      } else if (opts.keyCount === 1) {
        return "1 ключ";
      } else {
        return `${opts.keyCount} ключів`;
      }
    },
    treeExpandAll: "Розгорнути всі гілки дерева. Ця операція може бути ресурсоємною і зайняти час ...",
    noRedisKeys: "У цій базі даних немає ключів.",
    redisConnected: "Redis підключено успішно",
    reloadingDataInfo: "Перезавантаження інформації Redis",
    added: "Додано",
    saved: "Оновлено",
    cancelled: "Скасовано",
    deleted: "Видалено",
    savedRedis: "Дані Redis збережено",
    redisDisconnected: opts => {
      return `Поточне з'єднання мало помилку: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `Індекс БД встановлено на ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `Ключ дерева було видалено (${opts.key}).`;
    },
    deletedKey: opts => {
      return `Ключ було видалено (${opts.key}).`;
    },
    renamedKey: "Цей ключ було перейменовано",
    ttlChanged: "TTL цього ключа було змінено",
    notInteger: "Це введення не є цілим числом",
    persisted: "Цей ключ зберігається назавжди",
    set: "Ключ встановлено/додано"
  },
  code: {
    "delete-connection": "Це з'єднання було видалено, тому вас від'єднано від цього екземпляра Redis.",
    "save-connection": "Це з'єднання було змінено, тому вас від'єднано від цього екземпляра Redis. Ви можете підключитися знову.",
    "readonly-connections": "Додавання/збереження/видалення з'єднань доступне лише для читання!",
    "readonly-connection-mode": "Це з'єднання в режимі лише для читання!",
    "list-out-of-bounds": "Цей індекс списку виходить за межі",
    "donation-ware-feature": "Ця функція доступна у версії з пожертвуванням.",
    "feature-pro-readonly-required": "Режим підключення лише для читання потребує Pro або Enterprise ліцензії.",
    "feature-pro-ssh-required": "SSH-тунелювання потребує Pro або Enterprise ліцензії.",
    "feature-enterprise-cluster-sentinel-required": "Cluster та Sentinel потребують Enterprise ліцензії.",
    "feature-pro-json-binary-required": "Редагування JSON, завантаження та вивантаження бінарних файлів потребують Pro або Enterprise ліцензії.",
    "feature-pro-rejson-required": "ReJSON (JSON data type) requires Pro or Enterprise license.",
    "invalid-json-value": "The value is not valid JSON.",
    "http_auth_required": "Потрібна авторизація: будь ласка, автентифікуйтесь за допомогою HTTP Basic Auth та перезавантажте.",
    "auto-connection-failed": "Можливо, з'єднання було видалено і через це автоматичне підключення не вдалося.",
    invalid_console_command: "Ця команда не працює через GUI."
  },
  licenseReason: {
    LICENSE_VALID: "Ліцензія дійсна",
    LICENSE_INVALID: "Ліцензія недійсна",
    LICENSE_MISSING: "Ліцензійний ключ не встановлено",
    LICENSE_DISABLED: "Ліцензію вимкнено в конфігурації сервера",
    LICENSE_NOT_FOUND: "Ліцензію не знайдено",
    LICENSE_EXPIRED: "Термін дії ліцензії минув",
    LICENSE_CLEARED: "Ліцензійний ключ очищено",
    LICENSE_MAX_DEVICES_REACHED: "Досягнуто максимальну кількість місць для пристроїв",
    PRODUCT_MISMATCH: "Продукт ліцензії не відповідає"
  },
  licenseStatusValue: {
    active: "Активна",
    deleted: "Видалена",
    all: "Всі",
    expired: "Прострочена",
    missing: "Відсутня",
    inactive: "Неактивна"
  },
  form: {
    error: {
      required: "Обов'язкове",
      port: "Порт повинен бути між 1-65535",
      invalid: "Форма недійсна"
    },
    connection: {
      label: {
        name: "Назва",
        group: "Група",
        host: "Ім'я хоста",
        port: "Порт",
        password: "Пароль",
        username: "Ім'я користувача"
      }
    },
    treeSettings: {
      maxValueDisplay: "Максимальна довжина відображення значення",
      maxValueDisplayInfo: "Якщо встановлено 0, показувати повні значення. Якщо більше 0, обрізати до цієї довжини. Якщо -1: для рядків — приховати значення до редагування; для інших типів — показувати повний вміст.",
      maxKeys: "Максимальна кількість ключів",
      maxKeysInfo: "Щоб GUI не зламався, ми обмежуємо максимальну кількість ключів.",
      keyCount: () => {
        return `Кількість ключів: ${p3xr.state.keysRaw.length}`;
      },
      label: {
        animation: "Використовувати анімацію",
        noAnimation: "Без анімації",
        jsonFormatTwoSpace: "Форматувати JSON з 2 пробілами",
        jsonFormatFourSpace: "Форматувати JSON з 4 пробілами",
        formName: "Налаштування Redis",
        searchModeClient: "Режим пошуку на клієнті",
        searchModeServer: "Режим пошуку на сервері",
        searchModeStartsWith: "Пошук з режимом «починається з»",
        searchModeIncludes: "Пошук з режимом «містить»"
      },
      field: {
        treeSeparator: "Роздільник дерева",
        treeSeparatorSelector: "Вибір роздільника дерева",
        page: "Кількість сторінок дерева",
        keyPageCount: "Кількість сторінок ключів",
        keysSort: "Сортувати ключі",
        searchMode: "Режим пошуку",
        searchModeStartsWith: "Пошук починається з / містить"
      },
      error: {
        keyPageCount: "Кількість сторінок ключів повинна бути цілим числом від 5 до 100",
        page: "Кількість сторінок повинна бути цілим числом від 10 до 5000",
        maxValueDisplay: "Максимальне значення відображення повинно бути цілим числом від -1 до 32768",
        maxKeys: "Максимальна кількість ключів повинна бути цілим числом від 100 до 100000"
      }
    },
    key: {
      label: {
        formName: {
          add: "Додати новий Redis-ключ",
          edit: "Редагувати Redis-ключ",
          append: "Додати до існуючого Redis-ключа"
        }
      },
      field: {
        streamTimestamp: "Мітка часу",
        key: "Ключ",
        type: "Тип",
        index: "Індекс",
        hashKey: "Хеш-ключ",
        score: "Оцінка",
        value: "Значення"
      },
      error: {
        streamTimestamp: "Мітка часу обов'язкова, у форматі Redis або як *",
        key: "Ключ повинен містити щонайменше один символ",
        hashKey: "Ключ хеш-таблиці повинен містити щонайменше один символ",
        score: "Оцінка впорядкованої множини обов'язкова",
        value: "Значення обов'язкове"
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
      index: "Індекс",
      query: "Запит",
      results: "Результати",
      noIndex: "Індекси не знайдено",
      createIndex: "Створити індекс",
      dropIndex: "Видалити індекс",
      indexInfo: "Інформація про індекс",
      indexName: "Назва індексу",
      prefix: "Префікс ключа (необов'язково)",
      fieldName: "Назва поля",
    },
    monitor: {
      title: "Моніторинг",
      memory: "Пам'ять",
      opsPerSec: "Операцій/сек",
      clients: "Клієнти",
      blocked: "Заблоковано",
      hitsMisses: "Влучність",
      networkIo: "Мережа I/O",
      slowLog: "Повільний журнал",
      totalCommands: "Всього",
      expired: "Прострочено",
      evicted: "Витіснено",
      clientList: "Список клієнтів",
      topKeys: "Найбільші ключі за памяттю",
      killClient: "Завершити клієнта",
      clientKilled: "Клієнта завершено",
      confirmKillClient: "Ви впевнені, що хочете завершити цього клієнта?",
      noKeys: "Немає ключів",
      noClients: "Немає клієнтів",
    },
    overview: {
      noConnected: "Немає підключення до Redis.",
      overviewClients: "Перелік підключених за кількістю клієнтів",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "1 клієнт";
        }
        return `${opt.length} клієнтів`;
      }
    },
    key: {
      label: {
        key: "Ключ",
        encoding: "Кодування",
        length: "Розмір",
        ttl: "TTL",
        ttlTitle: "Час життя",
        type: "Тип",
        ttlNotExpire: "не закінчується",
        lengthString: "байт",
        lengthItem: "елементів",
        actions: "Дії"
      },
      list: {
        table: {
          index: "Індекс",
          value: "Значення"
        }
      },
      hash: {
        table: {
          hashkey: "Хеш-ключ",
          value: "Значення"
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
          score: "Оцінка"
        }
      },
      stream: {
        table: {
          timestamp: "ID мітки часу",
          field: "Поле",
          value: "Значення"
        }
      }
    },
    treeControls: {
      settings: "Налаштування дерева",
      expandAll: "Розгорнути все",
      collapseAll: "Згорнути все",
      search: {
        search: "Пошук серед ключів",
        clear: "Очистити поточний пошук",
        placeholderClient: "Пошук на стороні клієнта",
        placeholderServer: "Пошук на стороні сервера",
        info: "Пошук на стороні клієнта означає, що текст збігається з введеним у пошуковому полі. Пошук на стороні сервера означає пошук у шаблонах ключів як *{текст-пошуку}*. Для великих наборів даних краще використовувати пошук на стороні сервера. Для менших наборів даних краще використовувати пошук на стороні клієнта." + ` Якщо кількість ключів перевищує ${p3xr.settings.maxLightKeysCount}, ви можете шукати лише на стороні сервера.`,
        largeSetInfo: "У великому наборі даних пошук на стороні клієнта вимкнено, тому зараз можливий лише пошук на стороні сервера.",
        infoDetails: "Щоб дізнатися, як працює пошук, перегляньте налаштування"
      },
      pager: {
        next: "Наступна",
        prev: "Попередня",
        first: "Перша",
        last: "Остання"
      }
    }
  },
  time: {
    loading: "Завантаження...",
    years: "років",
    months: "місяців",
    days: "днів",
    year: "рік",
    month: "місяць",
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
