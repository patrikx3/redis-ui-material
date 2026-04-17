const strings = {
  error: {
    server_error: "\u0413\u0440\u0435\u0448\u043A\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043C\u043E\u043B\u0438\u043C\u043E \u043F\u043E\u043A\u0443\u0448\u0430\u0458\u0442\u0435 \u043F\u043E\u043D\u043E\u0432\u043E",
    aiPromptTooLong: "AI упит је предуг (максимално 4096 знакова)",
  },
  title: {
    donate: "\u0414\u043E\u043D\u0430\u0446\u0438\u0458\u0430",
    donateTitle: "Подржите P3X Redis UI",
    donateDescription: "P3X Redis UI је бесплатан пројекат отвореног кода. Трошкови одржавања апликације, AI функција, Docker слика, сервера и инфраструктуре долазе из џепа програмера. Ако вам је овај алат користан, размислите о подршци даљем развоју донацијом. Сваки допринос помаже да пројекат живи и расте. Хвала!",
    jsonRecursive: "\u041F\u0440\u043E\u0448\u0438\u0440\u0438\u0432\u0430\u045A\u0435 \u0441\u0432\u0438\u0445 \u0433\u0440\u0430\u043D\u0430",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "\u041C\u043E\u0436\u0435\u0442\u0435 \u0438\u0437\u0430\u0431\u0440\u0430\u0442\u0438 Redis \u043A\u043E\u043D\u0435\u043A\u0446\u0438\u0458\u0443 \u0437\u0430 \u043F\u043E\u0432\u0435\u0437\u0438\u0432\u0430\u045A\u0435 \u0438\u0437 \u043C\u0435\u043D\u0438\u0458\u0430 \u0434\u043E\u043B\u0435 \u043B\u0435\u0432\u043E.",
    statistics: "\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430",
    error: "\u0413\u0440\u0435\u0448\u043A\u0430",
    connectingRedis: "\u041F\u043E\u0432\u0435\u0437\u0438\u0432\u0430\u045A\u0435 \u043D\u0430 Redis ...",
    socketioConnectError: "\u0413\u0440\u0435\u0448\u043A\u0430 Socket.IO",
    db: "\u0411\u0414",
    server: "\u0421\u0435\u0440\u0432\u0435\u0440",
    clients: "\u041A\u043B\u0438\u0458\u0435\u043D\u0442\u0438",
    memory: "\u041C\u0435\u043C\u043E\u0440\u0438\u0458\u0430",
    persistence: "\u041F\u0435\u0440\u0437\u0438\u0441\u0442\u0435\u043D\u0446\u0438\u0458\u0430",
    stats: "\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430",
    replication: "\u0420\u0435\u043F\u043B\u0438\u043A\u0430\u0446\u0438\u0458\u0430",
    cpu: "CPU",
    cluster: "Cluster",
    modules: "Модулi",
    errorstats: "Статистика грешака",
    commandstats: "Статистика команди",
    latencystats: "Статистика кашњења",
    keysizes: "Величине кључева",
    threads: "Нити"
  },
  confirm: {
    dropIndex: "Да ли сте сигурни да желите да обришете овај индекс?",
    uploadBuffer: "\u0414\u0430 \u043B\u0438 \u0441\u0442\u0435 \u0441\u0438\u0433\u0443\u0440\u043D\u0438 \u0434\u0430 \u0436\u0435\u043B\u0438\u0442\u0435 \u0434\u0430 \u043E\u0442\u043F\u0440\u0435\u043C\u0438\u0442\u0435 \u043E\u0432\u0435 \u0431\u0438\u043D\u0430\u0440\u043D\u0435 \u043F\u043E\u0434\u0430\u0442\u043A\u0435?",
    uploadBufferDone: "\u0411\u0438\u043D\u0430\u0440\u043D\u0438 \u043F\u043E\u0434\u0430\u0446\u0438 \u0441\u0443 \u043E\u0442\u043F\u0440\u0435\u043C\u0459\u0435\u043D\u0438",
    uploadBufferDoneAndSave: "\u0411\u0438\u043D\u0430\u0440\u043D\u0438 \u043F\u043E\u0434\u0430\u0446\u0438 \u0441\u0443 \u043E\u0442\u043F\u0440\u0435\u043C\u0459\u0435\u043D\u0438 \u0438 \u0441\u0430\u0447\u0443\u0432\u0430\u043D\u0438 \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0443",
    title: "\u041F\u043E\u0442\u0432\u0440\u0434\u0430",
    alert: "\u0423\u043F\u043E\u0437\u043E\u0440\u0435\u045A\u0435",
    info: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0458\u0430",
    deleteListItem: "\u0414\u0430 \u043B\u0438 \u0441\u0442\u0435 \u0441\u0438\u0433\u0443\u0440\u043D\u0438 \u0434\u0430 \u0436\u0435\u043B\u0438\u0442\u0435 \u0434\u0430 \u043E\u0431\u0440\u0438\u0448\u0435\u0442\u0435 \u043E\u0432\u0443 \u0441\u0442\u0430\u0432\u043A\u0443 \u043B\u0438\u0441\u0442\u0435?",
    deleteHashKey: "\u0414\u0430 \u043B\u0438 \u0441\u0442\u0435 \u0441\u0438\u0433\u0443\u0440\u043D\u0438 \u0434\u0430 \u0436\u0435\u043B\u0438\u0442\u0435 \u0434\u0430 \u043E\u0431\u0440\u0438\u0448\u0435\u0442\u0435 \u043E\u0432\u0430\u0458 \u0445\u0435\u0448 \u043A\u0459\u0443\u0447?",
    deleteStreamTimestamp: "\u0414\u0430 \u043B\u0438 \u0441\u0442\u0435 \u0441\u0438\u0433\u0443\u0440\u043D\u0438 \u0434\u0430 \u0436\u0435\u043B\u0438\u0442\u0435 \u0434\u0430 \u043E\u0431\u0440\u0438\u0448\u0435\u0442\u0435 \u043E\u0432\u0443 \u0432\u0440\u0435\u043C\u0435\u043D\u0441\u043A\u0443 \u043E\u0437\u043D\u0430\u043A\u0443 \u0441\u0442\u0440\u0438\u043C\u0430?",
    deleteSetMember: "\u0414\u0430 \u043B\u0438 \u0441\u0442\u0435 \u0441\u0438\u0433\u0443\u0440\u043D\u0438 \u0434\u0430 \u0436\u0435\u043B\u0438\u0442\u0435 \u0434\u0430 \u043E\u0431\u0440\u0438\u0448\u0435\u0442\u0435 \u043E\u0432\u043E\u0433 \u0447\u043B\u0430\u043D\u0430 \u0441\u043A\u0443\u043F\u0430?",
    deleteZSetMember: "\u0414\u0430 \u043B\u0438 \u0441\u0442\u0435 \u0441\u0438\u0433\u0443\u0440\u043D\u0438 \u0434\u0430 \u0436\u0435\u043B\u0438\u0442\u0435 \u0434\u0430 \u043E\u0431\u0440\u0438\u0448\u0435\u0442\u0435 \u043E\u0432\u043E\u0433 \u0447\u043B\u0430\u043D\u0430 \u0441\u043E\u0440\u0442\u0438\u0440\u0430\u043D\u043E\u0433 \u0441\u043A\u0443\u043F\u0430?",
    deleteConnection: "\u041F\u043E\u0442\u0432\u0440\u0434\u0430",
    deleteConnectionText: "\u0414\u0430 \u043B\u0438 \u0441\u0442\u0435 \u0441\u0438\u0433\u0443\u0440\u043D\u0438 \u0434\u0430 \u0436\u0435\u043B\u0438\u0442\u0435 \u0434\u0430 \u043E\u0431\u0440\u0438\u0448\u0435\u0442\u0435 \u043E\u0432\u0443 Redis \u043A\u043E\u043D\u0435\u043A\u0446\u0438\u0458\u0443?",
    deleteNode: "\u0414\u0430 \u043B\u0438 \u0441\u0442\u0435 \u0441\u0438\u0433\u0443\u0440\u043D\u0438 \u0434\u0430 \u0436\u0435\u043B\u0438\u0442\u0435 \u0434\u0430 \u043E\u0431\u0440\u0438\u0448\u0435\u0442\u0435 \u043E\u0432\u0430\u0458 Redis \u0447\u0432\u043E\u0440?",
    deleteAllKeys: opts => {
      return `\u041E\u0431\u0440\u0438\u0441\u0430\u0442\u0438 \u043E\u0432\u043E \u0441\u0442\u0430\u0431\u043B\u043E \u0438 \u0441\u0432\u0435 \u045A\u0435\u0433\u043E\u0432\u0435 \u043A\u0459\u0443\u0447\u0435\u0432\u0435 (${opts.key})?`;
    },
    deleteSearchKeys: opts => {
      return `Да ли сте сигурни да желите да обришете све кључеве који одговарају "${opts.pattern}"? Пронађено ${opts.count} кључева.`;
    },
    socketioConnectError: "Socket.IO \u043D\u0435 \u043C\u043E\u0436\u0435 \u0434\u0430 \u0441\u0435 \u043F\u043E\u0432\u0435\u0436\u0435 \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440, \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u043D\u043E\u0432\u043E \u0443\u0447\u0438\u0442\u0430\u0442\u0438 \u0438 \u043F\u043E\u043A\u0443\u0448\u0430\u0442\u0438 \u0434\u0430 \u0440\u0435\u0448\u0438\u0442\u0435 \u0433\u0440\u0435\u0448\u043A\u0443 \u043F\u043E\u0432\u0435\u0437\u0438\u0432\u0430\u045A\u0430 \u0441\u0430\u043C\u0438, \u043A\u043B\u0438\u0458\u0435\u043D\u0442 \u043D\u0435 \u0437\u043D\u0430 \u043A\u0430\u043A\u043E \u0434\u0430 \u0458\u0435 \u0440\u0435\u0448\u0438.",
    socketioAuthRequired: "\u041F\u043E\u0442\u0440\u0435\u0431\u043D\u0430 \u0458\u0435 Socket.IO \u0430\u0443\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0458\u0430. \u041C\u043E\u043B\u0438\u043C\u043E \u0430\u0443\u0442\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0443\u0458\u0442\u0435 \u0441\u0435 \u043F\u0443\u0442\u0435\u043C HTTP Basic Auth (\u043A\u043E\u0440\u0438\u0441\u043D\u0438\u0447\u043A\u043E \u0438\u043C\u0435/\u043B\u043E\u0437\u0438\u043D\u043A\u0430) \u0438 \u043F\u043E\u043D\u043E\u0432\u043E \u0443\u0447\u0438\u0442\u0430\u0458\u0442\u0435.",
    invalidCredentials: "Неважеће корисничко име или лозинка.",
    delete: "Обрисати?",
    deleteKey: "\u0414\u0430 \u043B\u0438 \u0441\u0442\u0435 \u0441\u0438\u0433\u0443\u0440\u043D\u0438 \u0434\u0430 \u0436\u0435\u043B\u0438\u0442\u0435 \u0434\u0430 \u043E\u0431\u0440\u0438\u0448\u0435\u0442\u0435 \u043E\u0432\u0430\u0458 \u043A\u0459\u0443\u0447?",
    rename: {
      title: "\u0414\u0430 \u043B\u0438 \u0441\u0442\u0435 \u0441\u0438\u0433\u0443\u0440\u043D\u0438 \u0434\u0430 \u0436\u0435\u043B\u0438\u0442\u0435 \u0434\u0430 \u043F\u0440\u0435\u0438\u043C\u0435\u043D\u0443\u0458\u0435\u0442\u0435 \u043E\u0432\u0430\u0458 \u043A\u0459\u0443\u0447?",
      textContent: "\u041E\u0432\u0430 \u0440\u0430\u0434\u045A\u0430 \u0442\u0440\u0430\u0458\u043D\u043E \u043F\u0440\u0435\u0438\u043C\u0435\u043D\u0443\u0458\u0435 \u043A\u0459\u0443\u0447.",
      placeholder: "Redis \u043A\u0459\u0443\u0447 (\u043E\u0431\u0430\u0432\u0435\u0437\u043D\u043E)"
    },
    ttl: {
      title: "\u0414\u0430 \u043B\u0438 \u0441\u0442\u0435 \u0441\u0438\u0433\u0443\u0440\u043D\u0438 \u0434\u0430 \u0436\u0435\u043B\u0438\u0442\u0435 \u0434\u0430 \u043F\u0440\u043E\u043C\u0435\u043D\u0438\u0442\u0435 TTL \u043E\u0432\u043E\u0433 \u043A\u0459\u0443\u0447\u0430?",
      textContent: "\u041F\u0440\u043E\u043C\u0435\u043D\u0430 TTL-\u0430 \u0430\u0436\u0443\u0440\u0438\u0440\u0430 \u0432\u0440\u0435\u043C\u0435 \u0436\u0438\u0432\u043E\u0442\u0430 \u043E\u0432\u043E\u0433 \u043A\u0459\u0443\u0447\u0430. \u041E\u0441\u0442\u0430\u0432\u0438\u0442\u0435 \u043F\u0440\u0430\u0437\u043D\u043E \u0437\u0430 \u0442\u0440\u0430\u0458\u043D\u043E \u0447\u0443\u0432\u0430\u045A\u0435 \u043A\u0459\u0443\u0447\u0430.",
      placeholder: "TTL Redis \u043A\u0459\u0443\u0447\u0430 (\u0446\u0435\u043E \u0431\u0440\u043E\u0458 \u0438\u043B\u0438 \u043F\u0440\u0430\u0437\u043D\u043E)",
      placeholderPlaceholder: "\u041F\u0440\u0430\u0437\u043D\u043E \u0437\u043D\u0430\u0447\u0438 \u0434\u0430 \u0442\u0440\u0430\u0458\u0435 \u0437\u0430\u0443\u0432\u0435\u043A; \u0438\u043D\u0430\u0447\u0435 \u0443\u043D\u0435\u0441\u0438\u0442\u0435 \u0446\u0435\u043E \u0431\u0440\u043E\u0458.",
      convertTextToTime: "\u041F\u0440\u0435\u0442\u0432\u043E\u0440\u0438 \u0442\u0435\u043A\u0441\u0442 \u0443 \u0432\u0440\u0435\u043C\u0435",
      convertTextToTimePlaceholder: "\u041D\u043F\u0440. 1d \u045B\u0435 \u0431\u0438\u0442\u0438 86400"
    }
  },
  language: {
    bg: "\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438 / Bulgarian",
    cs: "\u010Ce\u0161tina / Czech",
    de: "Deutsch / German",
    el: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC / Greek",
    en: "English",
    es: "Espa\u00F1ol / Spanish",
    fr: "Fran\u00E7ais / French",
    hu: "Magyar / Hungarian",
    it: "Italiano / Italian",
    ja: "\u65E5\u672C\u8A9E / Japanese",
    nl: "Nederlands / Dutch",
    pl: "Polski / Polish",
    "pt-PT": "Portugu\u00EAs / Portuguese",
    ro: "Rom\u00E2n\u0103 / Romanian",
    ru: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439 / Russian",
    sk: "Sloven\u010Dina / Slovak",
    sr: "\u0421\u0440\u043F\u0441\u043A\u0438 / Serbian",
    sv: "Svenska / Swedish",
    tr: "T\u00FCrk\u00E7e / Turkish",
    uk: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430 / Ukrainian",
    zn: "\u4E2D\u6587 / Chinese",
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
    copy: "\u041A\u043E\u043F\u0438\u0440\u0430\u0458",
    downloadBuffer: "\u041F\u0440\u0435\u0443\u0437\u043C\u0438 \u0431\u0438\u043D\u0430\u0440\u043D\u043E",
    setBuffer: "\u041E\u0442\u043F\u0440\u0435\u043C\u0438 \u0431\u0438\u043D\u0430\u0440\u043D\u043E",
    exportKeys: "Извези кључеве",
    exportAllKeys: (opts) => `Извези свих ${opts.count} кључева`,
    exportSearchResults: (opts) => `Извези ${opts.count} резултата`,
    deleteAllKeysMenu: (opts) => `Обриши све ${opts.count}`,
    importKeys: "Увези кључеве",
    deleteSearchKeys: (opts) => `Обриши ${opts.count} одговарајућих кључева`,
    saveWithFormatJson: "\u0421\u0430\u0447\u0443\u0432\u0430\u0458 \u0441\u0430 \u0444\u043E\u0440\u043C\u0430\u0442\u043E\u043C",
    formatJson: "\u0424\u043E\u0440\u043C\u0430\u0442\u0438\u0440\u0430\u0458 Json",
    wrap: "Преламање",
    unwrap: "Без преламања",
    downloadJson: "Преузми JSON",
    pubsubMonitor: "PubSub",
    pulse: "Pulse",
    profiler: "Profiler",
    memoryAnalysis: "Analysis",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "\u0408\u0435\u0437\u0438\u043A / Language",
    ok: "\u041E\u041A",
    addKey: "\u0414\u043E\u0434\u0430\u0458 \u043E\u0432\u043E\u043C \u043A\u0459\u0443\u0447\u0443",
    addKeyRoot: "\u0414\u043E\u0434\u0430\u0458 \u043A\u043E\u0440\u0435\u043D\u0441\u043A\u0438 \u043A\u0459\u0443\u0447",
    reloadKey: "\u041F\u043E\u043D\u043E\u0432\u043E \u0443\u0447\u0438\u0442\u0430\u0458 \u043A\u0459\u0443\u0447",
    reload: "\u041F\u043E\u043D\u043E\u0432\u043E \u0443\u0447\u0438\u0442\u0430\u0458",
    close: "\u0417\u0430\u0442\u0432\u043E\u0440\u0438",
    commands: "\u041A\u043E\u043C\u0430\u043D\u0434\u0435",
    view: "\u041F\u0440\u0438\u043A\u0430\u0437",
    statistics: "\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430",
    refresh: "\u041E\u0441\u0432\u0435\u0436\u0438",
    pause: "Пауза",
    resume: "Настави",
    clear: "\u041E\u0447\u0438\u0441\u0442\u0438",
    rename: "\u041F\u0440\u0435\u0438\u043C\u0435\u043D\u0443\u0458",
    main: "\u041F\u043E\u0447\u0435\u0442\u043D\u0430",
    cancel: "\u041E\u0442\u043A\u0430\u0436\u0438",
    theme: "\u0422\u0435\u043C\u0430",
    github: "GitHub",
    githubRepo: "\u0420\u0435\u043F\u043E\u0437\u0438\u0442\u043E\u0440\u0438\u0458\u0443\u043C",
    githubRelease: "\u0418\u0437\u0434\u0430\u045A\u0430",
    githubChangelog: "\u0418\u0441\u0442\u043E\u0440\u0438\u0458\u0430 \u043F\u0440\u043E\u043C\u0435\u043D\u0430",
    info: "Info",
    settings: "\u041F\u043E\u0434\u0435\u0448\u0430\u0432\u0430\u045A\u0430",
    connect: "\u041F\u043E\u0432\u0435\u0436\u0438",
    disconnect: "\u041E\u0434\u0432\u043E\u0458\u0438",
    logout: "Одјава",
    overview: "\u041F\u0440\u0435\u0433\u043B\u0435\u0434",
    console: "\u041A\u043E\u043D\u0437\u043E\u043B\u0430",
    noConnections: "\u041D\u0435\u043C\u0430 \u043A\u043E\u043D\u0435\u043A\u0446\u0438\u0458\u0430, \u0434\u043E\u0434\u0430\u0458\u0442\u0435 \u043A\u043E\u043D\u0435\u043A\u0446\u0438\u0458\u0443 \u0443 \u043C\u0435\u043D\u0438\u0458\u0443 \u043F\u043E\u0434\u0435\u0448\u0430\u0432\u0430\u045A\u0430.",
    noConnectionsInSettings: "\u041D\u0435\u043C\u0430 \u043A\u043E\u043D\u0435\u043A\u0446\u0438\u0458\u0430, \u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u043E\u0434\u0430\u0442\u0438 \u041D\u041E\u0412\u0423 \u041A\u041E\u041D\u0415\u041A\u0426\u0418\u0408\u0423 \u0438\u0437\u043D\u0430\u0434.",
    connectionAdd: "\u041D\u043E\u0432\u0430 \u043A\u043E\u043D\u0435\u043A\u0446\u0438\u0458\u0430",
    addGroup: "Додај групу",
    extend: "\u041F\u0440\u043E\u0448\u0438\u0440\u0438",
    collapse: "\u0421\u043A\u0443\u043F\u0438",
    add: "\u0414\u043E\u0434\u0430\u0458",
    edit: "\u0423\u0440\u0435\u0434\u0438",
    save: "\u0421\u0430\u0447\u0443\u0432\u0430\u0458",
    ttl: "\u041F\u043E\u0441\u0442\u0430\u0432\u0438 TTL",
    fieldTtl: "TTL поља",
    digest: "Сажетак",
    delete: "\u041E\u0431\u0440\u0438\u0448\u0438",
    remove: "\u0423\u043A\u043B\u043E\u043D\u0438",
    areYouSure: "Да ли сте сигурни?",
    sure: "\u0421\u0438\u0433\u0443\u0440\u043D\u043E",
    testConnection: "\u0422\u0435\u0441\u0442\u0438\u0440\u0430\u0458 \u043A\u043E\u043D\u0435\u043A\u0446\u0438\u0458\u0443",
    getKey: "\u0423\u0447\u0438\u0442\u0430\u0432\u0430\u045A\u0435 Redis \u043A\u0459\u0443\u0447\u0430 \u0438 \u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0438\u0445 \u043F\u043E\u0434\u0430\u0442\u0430\u043A\u0430 ...",
    jsonViewShow: "\u041F\u0440\u0438\u043A\u0430\u0436\u0438 JSON",
    jsonViewEditor: "\u0423\u0440\u0435\u0434\u0438 JSON",
    quickConsole: "\u0411\u0440\u0437\u0430 \u043A\u043E\u043D\u0437\u043E\u043B\u0430",
    moveUp: "Помери горе",
    moveDown: "Помери доле",
  },
  diff: {
    reviewChanges: "\u041f\u0440\u0435\u0433\u043b\u0435\u0434\u0430\u0458 \u043f\u0440\u043e\u043c\u0435\u043d\u0435",
    inline: "\u0423 \u0440\u0435\u0434\u0443",
    sideBySide: "\u0408\u0435\u0434\u043d\u043e \u043f\u043e\u0440\u0435\u0434 \u0434\u0440\u0443\u0433\u043e\u0433",
    additions: "\u0434\u043e\u0434\u0430\u0432\u0430\u045a\u0430",
    deletions: "\u0431\u0440\u0438\u0441\u0430\u045a\u0430",
    unchangedLines: "\u043d\u0435\u043f\u0440\u043e\u043c\u0435\u045a\u0435\u043d\u0435 \u043b\u0438\u043d\u0438\u0458\u0435",
    noChanges: "\u041d\u0435\u043c\u0430 \u043e\u0442\u043a\u0440\u0438\u0432\u0435\u043d\u0438\u0445 \u043f\u0440\u043e\u043c\u0435\u043d\u0430",
    before: "\u041f\u0440\u0435",
    after: "\u041f\u043e\u0441\u043b\u0435",
  },
  label: {
    id: {
      nodeId: 'ID \u0447\u0432\u043E\u0440\u0430',
      id: "ID \u043A\u043E\u043D\u0435\u043A\u0446\u0438\u0458\u0435",
      info: "\u0410\u043A\u043E \u043D\u0435 \u0436\u0435\u043B\u0438\u0442\u0435 \u0434\u0430 \u043C\u0435\u045A\u0430\u0442\u0435 \u0441\u0432\u043E\u0458\u0441\u0442\u0432\u0430: sshPassword, sshPrivateKey, password, tlsCrt, tlsKey, tlsCa, \u043C\u043E\u043B\u0438\u043C\u043E \u0443\u043D\u0435\u0441\u0438\u0442\u0435 ID \u043A\u043E\u043D\u0435\u043A\u0446\u0438\u0458\u0435 \u0443 \u0442\u0430 \u0441\u0432\u043E\u0458\u0441\u0442\u0432\u0430 \u0434\u0430 \u0431\u0438\u0441\u0442\u0435 \u0441\u0430\u0447\u0443\u0432\u0430\u043B\u0438 \u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442\u0438. \u0410\u043A\u043E \u0436\u0435\u043B\u0438\u0442\u0435 \u0438\u0441\u0442\u0443 \u043B\u043E\u0433\u0438\u043A\u0443 \u0437\u0430 \u043B\u043E\u0437\u0438\u043D\u043A\u0443 \u0447\u0432\u043E\u0440\u0430, \u0443\u043D\u0435\u0441\u0438\u0442\u0435 ID \u0447\u0432\u043E\u0440\u0430 \u0443 \u043B\u043E\u0437\u0438\u043D\u043A\u0443 \u0447\u0432\u043E\u0440\u0430."
    },
    secureFeature: '\u0410\u043A\u043E \u0432\u0438\u0434\u0438\u0442\u0435 \u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442 \u043A\u043E\u0458\u0430 \u043F\u043E\u0447\u0438\u045A\u0435 \u0441\u0430 P3X \u0438 \u0438\u0437\u0433\u043B\u0435\u0434\u0430 \u0438\u0441\u0442\u043E, \u0442\u043E \u0458\u0435 \u0431\u0435\u0437\u0431\u0435\u0434\u043D\u043E\u0441\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430. \u0417\u0430 \u043F\u0440\u043E\u043C\u0435\u043D\u0443 \u043F\u043E\u0434\u0435\u0448\u0430\u0432\u0430\u045A\u0430, \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u0435 \u043E\u0432\u0430 \u043F\u043E\u0434\u0435\u0448\u0430\u0432\u0430\u045A\u0430 \u043F\u0440\u0430\u0437\u043D\u0438\u043C \u0438\u043B\u0438 \u043D\u0435\u0447\u0438\u043C \u0434\u0440\u0443\u0433\u0438\u043C \u0438 \u0431\u0438\u045B\u0435 \u0441\u0430\u0447\u0443\u0432\u0430\u043D\u0430. \u0410\u043A\u043E \u043D\u0435 \u043F\u0440\u043E\u043C\u0435\u043D\u0438\u0442\u0435 \u043F\u043E\u0434\u0435\u0448\u0430\u0432\u0430\u045A\u0430, \u043E\u043D\u0430 \u045B\u0435 \u043E\u0441\u0442\u0430\u0442\u0438 \u043A\u0430\u043A\u0432\u0430 \u0458\u0435\u0441\u0443 \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0443.',
    aiTranslating: "Превођење...",
    aiSettings: "AI Подешавања",
    aiGroqApiKey: "Groq API кључ",
    aiGroqApiKeyInfo: "Опционално. Сопствени Groq API кључ за боље перформансе. Набавите бесплатан кључ на",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "AI API кључ сачуван",
    aiGroqApiKeyInvalid: "Nevažeći Groq API ključ",
    aiGroqApiKeyNotSet: "Није подешено (подразумевано сервера)",
    aiEnabled: "AI omogućeno",
    aiEnabledYes: "Da",
    aiEnabledNo: "Ne",
    aiRouteViaNetwork: "Usmeri preko network.corifeus.com",
    aiRoutingDirect: "Upiti idu direktno u Groq koristeći vaš sopstveni API ključ, zaobilazeći network.corifeus.com.",
    aiRoutingNetwork: "AI upiti se usmeravaju kroz network.corifeus.com. Ako imate sopstveni besplatni Groq API ključ, možete isključiti ovaj prekidač i usmeravati direktno u Groq bez network.corifeus.com.",
    aiMaxTokens: "Maksimalan broj AI tokena",
    aiMaxTokensInfo: "Maksimalan broj tokena za AI odgovore. Veće vrednosti omogućavaju duže odgovore, ali mogu potrošiti više API kredita.",
    consoleDrawer: {
      toggleTooltip: "Прикажи/сакриј конзолу",
      clearTooltip: "Очисти историју конзоле",
      closeTooltip: "Затвори конзолу",
      aiSettingsTooltip: "AI подешавања",
      modeRedis: "REDIS",
      modeAi: "AI",
      connectionChipNoDb: opts => `${opts.name}`,
      connectionChipWithDb: opts => `${opts.name} · db ${opts.db}`,
      pageChip: opts => `страница: ${opts.page}`,
      connectingTo: opts => `Повезивање са ${opts.name}…`,
      connectedTo: opts => `Повезано са ${opts.name} (Redis ${opts.version} ${opts.mode}, учитано ${opts.modules} модула)`,
      connectedToNoInfo: opts => `Повезано са ${opts.name}`,
      disconnectedFrom: opts => `Веза са ${opts.name} је прекинута`,
      notConnected: "Није повезано.",
      limitedAiOnly: "Доступан је само ограничени AI — раде општа питања и одговори о Redis-у.",
      connectHint: "За дијагностику уживо укуцајте: connect <name>",
      cheatsheetHint: "Укуцајте ai: help да видите шта можете да питате.",
      needsConnection: "Ово захтева активну везу. Прво укуцајте \"connect <name>\".",
      aiNeedsConnectionReason: "AI за живо стање (коришћење алата) доступан је само када сте повезани на Redis.",
      verbNeedsConnection: opts => `"${opts.verb}" захтева активну везу — прво укуцајте "connect <name>".`,
      aiLimitedMode: "AI је у ограниченом режиму — док се не повежете, раде само општа питања о Redis-у.",
      welcomeDisconnected: "Добро дошли. Још нисте повезани ни на једну Redis инстанцу.",
      readyIndicator: "Спремно.",
    },
    cheatsheet: {
      title: "AI подсетник — шта могу да питам?",
      subtitle: "Кликните на било који упит да га налепите у конзолу. Затим притисните Enter.",
      searchPlaceholder: "Филтрирај упите…",
      openOfficialDocs: "Redis команде ↗",
      openOfficialDocsTooltip: "Отвори званичну референцу Redis команди на redis.io",
      closeTooltip: "Затвори (Esc)",
      empty: "Ниједан упит не одговара вашем филтеру.",
      footerHint: "Савет: укуцајте \"ai:\" и било шта на било ком језику — AI разуме 54 језика и по потреби користи тренутно стање Redis-а.",

      // Each group has: name (category label), match (search-filter alias), prompts (array of example strings)
      groups: {
        diagnostics: {
          name: "Дијагностика у реалном времену",
          description: "Замолите AI да испита тренутно стање сервера помоћу безбедних алатки само за читање.",
          prompts: [
            "зашто је меморија висока?",
            "покажи ми 10 најспоријих упита",
            "који клијенти су повезани?",
            "каква је maxmemory политика?",
            "има ли скорашњих избацивања?",
            "да ли постоји неки догађај кашњења?",
            "колико дуго сервер ради?",
            "колика је стопа погодака?",
            "покажи употребу процесора",
            "сажми keyspace",
            "колико меморије користи сваки тип података?",
            "да ли нешто тренутно блокира сервер?"
          ]
        },
        keys: {
          name: "Кључеви",
          description: "Прегледајте, пронађите и анализирајте кључеве без кликтања кроз стабло.",
          prompts: [
            "пронађи све кључеве који одговарају user:*",
            "колико кључева има у свакој бази података?",
            "покажи највећи hash у овој бази",
            "пронађи кључеве са TTL мањим од 60 секунди",
            "који кључеви немају TTL?",
            "ког је типа кључ session:abc?",
            "процени меморију коју користи префикс \"session:\"",
            "покажи кодирање објекта за кључ user:42",
            "да ли неки кључеви ускоро истичу?",
            "који именски простор користи највише меморије?"
          ]
        },
        dataTypes: {
          name: "Типови података",
          description: "Формулације на природном језику за креирање/читање/ажурирање свих Redis типова.",
          prompts: [
            "креирај hash са именом user:1 са пољима name=Alice age=30",
            "додај три ставке у листу tasks",
            "додај чланове у скуп favourites",
            "додај чланове са резултатом у сортирани скуп leaderboard",
            "додај догађај у stream events",
            "преузми последњих 10 уноса из stream-а events",
            "преузми сва поља hash-а user:1",
            "преузми чланове скупа favourites",
            "преузми топ 10 по резултату из leaderboard"
          ]
        },
        modules: {
          name: "Модули",
          description: "Упити за учитане Redis модуле (категорије испод се приказују само када је модул присутан).",
          prompts: []
        },
        json: {
          name: "RedisJSON",
          description: "Доступно када је учитан ReJSON модул.",
          prompts: [
            "креирај JSON документ на user:42 са { name: \"Alice\", age: 30 }",
            "прочитај поље name за user:42",
            "ажурирај године за user:42 на 31",
            "излистај све JSON кључеве",
            "обриши поље из JSON документа",
            "преузми угнежђено поље помоћу JSONPath"
          ]
        },
        search: {
          name: "RediSearch",
          description: "Доступно када је учитан search модул.",
          prompts: [
            "излистај све full-text индексе",
            "покрени full-text претрагу за \"redis\" на индексу idx:products",
            "креирај индекс заснован на hash-у са пољима title (TEXT) и price (NUMERIC)",
            "преузми информације о индексу idx:products",
            "избриши индекс idx:products",
            "пронађи документе где је price између 10 и 50",
            "напиши хибридну претрагу која комбинује текст и векторску сличност"
          ]
        },
        timeseries: {
          name: "RedisTimeSeries",
          description: "Доступно када је учитан timeseries модул.",
          prompts: [
            "излистај све timeseries кључеве",
            "додај тачку података у temp:room1",
            "преузми опсег temp:room1 од јуче до сада",
            "преузми multi-range по ознаци sensor=temp",
            "генериши 100 тачака података синусног таласа за temp:room1",
            "прикажи ретенцију и ознаке за temp:room1"
          ]
        },
        bloom: {
          name: "RedisBloom (Bloom / Cuckoo / Top-K / CMS / T-Digest)",
          description: "Доступно када је учитан bf модул.",
          prompts: [
            "провери да ли ставка foo постоји у bloom филтеру spam:ips",
            "додај ставке у bloom филтер spam:ips",
            "креирај top-K са именом popular и K=10",
            "упитај count-min sketch traffic за кључ /home",
            "додај вредности у t-digest и преузми 95. перцентил",
            "прикажи информације за bloom филтер spam:ips"
          ]
        },
        vectorSet: {
          name: "VectorSet (Redis 8+)",
          description: "Доступно када је детектован Redis 8+ (нативни тип VECTORSET).",
          prompts: [
            "додај вектор у embeddings",
            "пронађи 10 најсличнијих вектора датом вектору упита",
            "прикажи димензије и број vectorset embeddings",
            "обриши елемент из vectorset embeddings",
            "тражи по имену елемента са VSIM"
          ]
        },
        redis8: {
          name: "Redis 8+ функције",
          description: "Приказано када је детектован Redis 8+.",
          prompts: [
            "постави TTL за поље hash-а помоћу HEXPIRE",
            "преузми digest вредности ниске",
            "покрени хибридну full-text + вектор претрагу (FT.HYBRID)",
            "постави више кључева са заједничким истицањем помоћу MSETEX",
            "обриши унос stream-а са групом потрошача (XDELEX)",
            "прикажи cluster slot-stats за топ 10 слотова"
          ]
        },
        scripting: {
          name: "Скриптовање",
          description: "Генериши Lua / EVAL скрипте из описа на природном језику.",
          prompts: [
            "напиши атомску скрипту која увећава бројач X само ако је Y > 5",
            "генериши 100 насумичних кључева помоћу Lua",
            "претвори овај shell пајплајн у један EVAL: keys user:* | GET | grep inactive | DEL",
            "пренеси групну операцију у Lua ради безбедности у cluster-у",
            "ажурирање у стилу check-and-set у једном Lua позиву",
            "итерирај кроз hash и обриши поља која одговарају шаблону"
          ]
        },
        cluster: {
          name: "Cluster",
          description: "Приказано само у cluster режиму.",
          prompts: [
            "прикажи информације о cluster-у",
            "излистај чворове cluster-а",
            "прикажи топ 10 слотова по броју кључева",
            "прикажи топ 10 слотова по меморији",
            "који master поседује слот 5000?"
          ]
        },
        acl: {
          name: "ACL (Redis 6+)",
          description: "Прегледајте кориснике контроле приступа и тренутну везу.",
          prompts: [
            "као који корисник сам повезан?",
            "излистај све ACL кориснике",
            "које дозволе имам?",
            "прикажи правила подразумеваног корисника"
          ]
        },
        qna: {
          name: "Општа питања и одговори",
          description: "Постављајте питања о знању Redis-а — без алатки, само одговори.",
          prompts: [
            "шта је ZADD?",
            "како функционише cluster failover?",
            "објасни SCAN у односу на KEYS",
            "када треба да користим EVAL уместо више команди?",
            "које су опције трајности у Redis-у?",
            "која је разлика између RDB и AOF?",
            "како Redis Sentinel одлучује о новом master-у?",
            "објасни hash tags у cluster режиму"
          ]
        },
        translate: {
          name: "Природни језик → Redis команда",
          description: "Опишите шта желите на српском (или на било ком од 54 језика); AI ће написати Redis команду.",
          prompts: [
            "обриши кључ user:42",
            "преименуј кључ foo у bar",
            "постави да кључ session:abc истекне за 10 секунди",
            "копирај кључ source у destination",
            "увећај бројач visits за 5",
            "постави кључ greeting на \"hello\" у трајању од 1 сата",
            "покажи ми 10 најчешће коришћених кључева",
            "обриши све кључеве који одговарају temp:*"
          ]
        }
      }
    },
    ssh: {
      on: 'SSH \u0443\u043A\u0459\u0443\u0447\u0435\u043D',
      off: 'SSH \u0438\u0441\u043A\u0459\u0443\u0447\u0435\u043D',
      sshHost: 'SSH \u0445\u043E\u0441\u0442',
      sshPort: 'SSH \u043F\u043E\u0440\u0442',
      sshUsername: 'SSH \u043A\u043E\u0440\u0438\u0441\u043D\u0438\u0447\u043A\u043E \u0438\u043C\u0435',
      sshPassword: 'SSH \u043B\u043E\u0437\u0438\u043D\u043A\u0430',
      sshPrivateKey: 'SSH \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u0438 \u043A\u0459\u0443\u0447'
    },
    isBuffer: opts => `[object ArrayBuffer] \u0437\u043D\u0430\u0447\u0438 \u0434\u0430 \u0458\u0435 \u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442 \u0431\u0438\u043D\u0430\u0440\u043D\u0438 \u043F\u043E\u0434\u0430\u0442\u0430\u043A \u0438\u043B\u0438 \u0458\u0435 \u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442 \u0432\u0435\u045B\u0430 \u043E\u0434 ${opts.maxValueAsBuffer}`,
    streamValue: `\u041F\u043E\u0459\u0435 \u0438 \u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442 \u0441\u0442\u0440\u0438\u043C\u0430 \u0441\u0443 \u0443 \u0458\u0435\u0434\u043D\u043E\u043C \u0440\u0435\u0434\u0443. \u041D\u043F\u0440.: \u043F\u043E\u0459\u04351 \u0432\u0440\u0435\u0434\u043D\u043E\u0441\u04421 "\u043F\u043E\u0459\u0435 2" "\u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442 2"`,
    streamTimestampId: `'*' \u0437\u043D\u0430\u0447\u0438 \u0430\u0443\u0442\u043E\u043C\u0430\u0442\u0441\u043A\u0438 \u0433\u0435\u043D\u0435\u0440\u0438\u0441\u0430\u043D\u043E \u0438\u043B\u0438 \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0458\u0430 \u043A\u0430\u043E <millisecondsTime>-<sequenceNumber>`,
    unableToLoadKey: ({
      key
    }) => {
      return `\u041D\u0438\u0458\u0435 \u043C\u043E\u0433\u0443\u045B\u0435 \u0443\u0447\u0438\u0442\u0430\u0442\u0438 \u043E\u0432\u0430\u0458 \u043A\u0459\u0443\u0447: ${key}. \u041C\u043E\u0433\u0443\u045B\u0435 \u0458\u0435 \u0434\u0430 \u0458\u0435 \u043A\u0459\u0443\u0447 \u043E\u0431\u0440\u0438\u0441\u0430\u043D. \u0422\u0430\u0447\u043D\u0430 \u0433\u0440\u0435\u0448\u043A\u0430 \u0458\u0435 \u0443 \u043A\u043E\u043D\u0437\u043E\u043B\u0438.`;
    },
    bigJson: "\u041E\u0432\u0430\u0458 JSON \u043E\u0431\u0458\u0435\u043A\u0430\u0442 \u0458\u0435 \u043F\u0440\u0435\u043A\u043E 10 kb, \u043F\u0430 \u0441\u0435 \u0443\u0432\u0435\u0440\u0438\u0442\u0435 \u0434\u0430 \u0437\u043D\u0430\u0442\u0435 \u0448\u0442\u0430 \u0440\u0430\u0434\u0438\u0442\u0435, \u0458\u0435\u0440 \u043D\u0435\u043A\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435 \u043C\u043E\u0433\u0443 \u0431\u0438\u0442\u0438 \u0441\u043F\u043E\u0440\u0435 \u043F\u0440\u0438 \u043F\u0440\u0438\u043A\u0430\u0437\u0438\u0432\u0430\u045A\u0443.",
    addNode: "\u0414\u043E\u0434\u0430\u0458 \u0447\u0432\u043E\u0440",
    validateJson: "\u0412\u0430\u043B\u0438\u0434\u0438\u0440\u0430\u0458 JSON",
    reducedFunction: `\u0421\u043C\u0430\u045A\u0435\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u043D\u043E\u0441\u0442`,
    tooManyKeys: opts => {
      return `\u0417\u0430 \u043F\u0443\u043D\u0435 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u043D\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435, \u0434\u043E\u0437\u0432\u043E\u0459\u0435\u043D\u0438 \u0443\u043A\u0443\u043F\u043D\u0438 \u0431\u0440\u043E\u0458 \u043A\u0459\u0443\u0447\u0435\u0432\u0430 \u0458\u0435 ${opts.maxLightKeysCount}. \u041E\u0432\u0430 \u0431\u0430\u0437\u0430 \u043F\u043E\u0434\u0430\u0442\u0430\u043A\u0430 \u0438\u043C\u0430 \u0432\u0438\u0448\u0435 \u043E\u0434 \u0434\u043E\u0437\u0432\u043E\u0459\u0435\u043D\u0438\u0445 \u043A\u0459\u0443\u0447\u0435\u0432\u0430, \u0443\u043A\u0443\u043F\u043D\u043E ${opts.count}. \u0421\u043E\u0440\u0442\u0438\u0440\u0430\u045A\u0435 \u043A\u0459\u0443\u0447\u0435\u0432\u0430 \u0438 \u0434\u043E\u0434\u0430\u0442\u043D\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0458\u0435 \u0441\u0442\u0430\u0431\u043B\u0430 \u0441\u0443 \u0438\u0441\u043A\u0459\u0443\u0447\u0435\u043D\u0435. \u041F\u0440\u0435\u0442\u0440\u0430\u0433\u0430 \u0441\u0435 \u0432\u0440\u0448\u0438 \u0441\u0430\u043C\u043E \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0443 \u0443\u043C\u0435\u0441\u0442\u043E \u043D\u0430 \u043A\u043B\u0438\u0458\u0435\u043D\u0442\u0443.`;
    },
    redisCommandNotFound: "\u041D\u0438\u0458\u0435 \u043F\u0440\u043E\u043D\u0430\u0452\u0435\u043D\u0430 \u043E\u0434\u0433\u043E\u0432\u0430\u0440\u0430\u0458\u0443\u045B\u0430 Redis \u043A\u043E\u043C\u0430\u043D\u0434\u0430 ...",
    treeKeyStore: `\u0421\u043E\u0440\u0442\u0438\u0440\u0430\u045A\u0435 (\u043F\u0440\u0438\u0440\u043E\u0434\u043D\u043E \u043F\u043E\u0440\u0435\u0452\u0435\u045A\u0435) \u0441\u0435 \u0438\u0437\u0432\u0440\u0448\u0430\u0432\u0430 \u043D\u0430 \u043A\u043B\u0438\u0458\u0435\u043D\u0442\u0443 (\u0442\u0458. \u043F\u0440\u0435\u0433\u043B\u0435\u0434\u0430\u0447\u0443), \u0448\u0442\u043E \u0437\u043D\u0430\u0447\u0438 \u0434\u0430 \u0438\u043C\u0430 \u0446\u0435\u043D\u0443 \u0437\u0430 \u0432\u0435\u043B\u0438\u043A\u0435 \u0441\u043A\u0443\u043F\u043E\u0432\u0435, \u043A\u0430\u043E \u043F\u0440\u0435\u043A\u043E 10k \u043A\u0459\u0443\u0447\u0435\u0432\u0430, \u043C\u043E\u0436\u0435 \u0434\u043E\u0434\u0430\u0442\u0438 \u043C\u0430\u043B\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0430 \u043F\u0440\u0438\u043A\u0430\u0437\u0438\u0432\u0430\u045A\u0443 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435. \u0423 Redis-\u0443 \u043D\u0435\u043C\u0430 \u0441\u043E\u0440\u0442\u0438\u0440\u0430\u045A\u0430 \u043A\u0459\u0443\u0447\u0435\u0432\u0430, \u0441\u0430\u043C\u043E \u043D\u0430 \u043E\u0432\u0430\u0458 \u043D\u0430\u0447\u0438\u043D.`,
    socketIoTimeout: options => {
      return `Socket.IO \u0458\u0435 \u043F\u0440\u0435\u043A\u043E\u0440\u0430\u0447\u0438\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0441\u043A\u043E \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u045A\u0435 \u0437\u0430 \u043E\u0432\u0430\u0458 \u0437\u0430\u0445\u0442\u0435\u0432 (\u043C\u0430\u043A\u0441 ${options.timeout / 1000} \u0441\u0435\u043A\u0443\u043D\u0434\u0438) ...`;
    },
    resizerInfo: options => {
      return `\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u043D\u0430 \u0448\u0438\u0440\u0438\u043D\u0430 \u043B\u0435\u0432\u043E\u0433 \u0438\u043B\u0438 \u0434\u0435\u0441\u043D\u043E\u0433 \u043F\u0430\u043D\u0435\u043B\u0430 \u0458\u0435 ${options.width}px`;
    },
    jsonViewNotParsable: "\u041E\u0432\u0430 \u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442 \u043D\u0438\u0458\u0435 JSON \u043F\u0430\u0440\u0441\u0438\u0440\u0459\u0438\u0432\u0430  ",
    ttlTitle: "\u041F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u0435 TTL \u0443 \u0441\u0435\u043A\u0443\u043D\u0434\u0430\u043C\u0430",
    passwordSecure: "\u041B\u043E\u0437\u0438\u043D\u043A\u0430 \u043C\u043E\u0436\u0435 \u0431\u0438\u0442\u0438 \u043F\u0440\u0430\u0437\u043D\u0430, \u0430\u043B\u0438 \u045B\u0435 \u0438 \u0434\u0430\u0459\u0435 \u043F\u0440\u0438\u043A\u0430\u0437\u0438\u0432\u0430\u0442\u0438 \u043A\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0435, \u043E\u0432\u043E \u0458\u0435 \u0431\u0435\u0437\u0431\u0435\u0434\u043D\u043E\u0441\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430.",
    aclAuthHint: "Користите Redis ACL корисничко име и лозинку за аутентификацију. Оставите празно за подразумеваног корисника без лозинке.",
    tlsWithoutCert: "\u041E\u043C\u043E\u0433\u0443\u045B\u0438 TLS \u0431\u0435\u0437 \u0434\u043E\u0434\u0430\u0442\u043D\u043E\u0433 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u0430",
    tlsRejectUnauthorized: "\u041E\u0434\u0431\u0438\u0458 \u043D\u0435\u0430\u0443\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043D\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442",
    tlsSecure: "\u0410\u043A\u043E \u0432\u0438\u0434\u0438\u0442\u0435 TLS \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0458\u0443 \u043A\u043E\u0458\u0430 \u043F\u043E\u0447\u0438\u045A\u0435 \u0441\u0430 P3X \u0438\u043B\u0438 \u0441\u0432\u0430 TLS \u043F\u043E\u0434\u0435\u0448\u0430\u0432\u0430\u045A\u0430 \u0438\u0437\u0433\u043B\u0435\u0434\u0430\u0458\u0443 \u0438\u0441\u0442\u043E, \u0442\u043E \u0458\u0435 \u0431\u0435\u0437\u0431\u0435\u0434\u043D\u043E\u0441\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430. \u0417\u0430 \u043F\u0440\u043E\u043C\u0435\u043D\u0443 \u043F\u043E\u0434\u0435\u0448\u0430\u0432\u0430\u045A\u0430, \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u0435 \u043E\u0432\u0430 \u043F\u043E\u0434\u0435\u0448\u0430\u0432\u0430\u045A\u0430 \u043F\u0440\u0430\u0437\u043D\u0438\u043C \u0438\u043B\u0438 \u043D\u0435\u0447\u0438\u043C \u0434\u0440\u0443\u0433\u0438\u043C \u0438 \u0431\u0438\u045B\u0435 \u0441\u0430\u0447\u0443\u0432\u0430\u043D\u0430. \u0410\u043A\u043E \u043D\u0435 \u043F\u0440\u043E\u043C\u0435\u043D\u0438\u0442\u0435 TLS \u043F\u043E\u0434\u0435\u0448\u0430\u0432\u0430\u045A\u0430, \u043E\u043D\u0430 \u045B\u0435 \u043E\u0441\u0442\u0430\u0442\u0438 \u043A\u0430\u043A\u0432\u0430 \u0458\u0435\u0441\u0443 \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0443.",
    treeSeparatorEmpty: "\u0410\u043A\u043E \u0458\u0435 \u0441\u0435\u043F\u0430\u0440\u0430\u0442\u043E\u0440 \u0441\u0442\u0430\u0431\u043B\u0430 \u043F\u0440\u0430\u0437\u0430\u043D, \u0441\u0442\u0430\u0431\u043B\u043E \u043D\u0435\u045B\u0435 \u0438\u043C\u0430\u0442\u0438 \u0443\u0433\u045A\u0435\u0436\u0434\u0435\u043D\u0435 \u0447\u0432\u043E\u0440\u043E\u0432\u0435, \u0441\u0430\u043C\u043E \u0447\u0438\u0441\u0442\u0443 \u043B\u0438\u0441\u0442\u0443",
    treeSeparatorEmptyNote: "\u0411\u0435\u0437 \u0443\u0433\u045A\u0435\u0436\u0434\u0435\u043D\u0438\u0445 \u0447\u0432\u043E\u0440\u043E\u0432\u0430, \u0441\u0430\u043C\u043E \u0447\u0438\u0441\u0442\u0430 \u043B\u0438\u0441\u0442\u0430",
    welcomeConsole: "\u0414\u043E\u0431\u0440\u043E\u0434\u043E\u0448\u043B\u0438 \u0443 Redis \u043A\u043E\u043D\u0437\u043E\u043B\u0443",
    welcomeConsoleInfo: "SHIFT + \u0418\u0441\u0442\u043E\u0440\u0438\u0458\u0430\u0442 \u043A\u0443\u0440\u0441\u043E\u0440\u043E\u043C \u0413\u041E\u0420\u0415 \u0438\u043B\u0438 \u0414\u041E\u041B\u0415 \u0458\u0435 \u043E\u043C\u043E\u0433\u0443\u045B\u0435\u043D\u0430",
    redisListIndexInfo: "\u041F\u0440\u0430\u0437\u043D\u043E \u0437\u0430 \u0434\u043E\u0434\u0430\u0432\u0430\u045A\u0435 \u043D\u0430 \u043A\u0440\u0430\u0458, -1 \u0437\u0430 \u0434\u043E\u0434\u0430\u0432\u0430\u045A\u0435 \u043D\u0430 \u043F\u043E\u0447\u0435\u0442\u0430\u043A \u0438\u043B\u0438 \u0441\u0430\u0447\u0443\u0432\u0430\u0458\u0442\u0435 \u043D\u0430 \u043F\u0440\u0438\u043A\u0430\u0437\u0430\u043D\u0443 \u043F\u043E\u0437\u0438\u0446\u0438\u0458\u0443.",
    console: "\u041A\u043E\u043D\u0437\u043E\u043B\u0430",
    connectiondAdd: "\u0414\u043E\u0434\u0430\u0458 \u043A\u043E\u043D\u0435\u043A\u0446\u0438\u0458\u0443",
    connectiondEdit: "\u0423\u0440\u0435\u0434\u0438 \u043A\u043E\u043D\u0435\u043A\u0446\u0438\u0458\u0443",
    connectiondView: "\u041F\u0440\u0435\u0433\u043B\u0435\u0434\u0430\u0458 \u043A\u043E\u043D\u0435\u043A\u0446\u0438\u0458\u0443",
    connections: "\u041A\u043E\u043D\u0435\u043A\u0446\u0438\u0458\u0435",
    keysSort: {
      on: "\u0421\u043E\u0440\u0442\u0438\u0440\u0430\u045A\u0435 \u043A\u0459\u0443\u0447\u0435\u0432\u0430 \u0443\u043A\u0459\u0443\u0447\u0435\u043D\u043E",
      off: "\u0421\u043E\u0440\u0442\u0438\u0440\u0430\u045A\u0435 \u043A\u0459\u0443\u0447\u0435\u0432\u0430 \u0438\u0441\u043A\u0459\u0443\u0447\u0435\u043D\u043E"
    },
    cluster: {
      on: "Cluster \u0443\u043A\u0459\u0443\u0447\u0435\u043D",
      off: "Cluster \u0438\u0441\u043A\u0459\u0443\u0447\u0435\u043D"
    },
    sentinel: {
      on: "Sentinel \u0443\u043A\u0459\u0443\u0447\u0435\u043D",
      off: "Sentinel \u0438\u0441\u043A\u0459\u0443\u0447\u0435\u043D",
      name: "\u0418\u043C\u0435 Sentinel"
    },
    readonly: {
      on: "\u0421\u0430\u043C\u043E \u0437\u0430 \u0447\u0438\u0442\u0430\u045A\u0435 \u0443\u043A\u0459\u0443\u0447\u0435\u043D\u043E",
      off: "\u0421\u0430\u043C\u043E \u0437\u0430 \u0447\u0438\u0442\u0430\u045A\u0435 \u0438\u0441\u043A\u0459\u0443\u0447\u0435\u043D\u043E"
    },
    theme: {
      light: "\u0421\u0432\u0435\u0442\u043B\u0430",
      dark: "\u0422\u0430\u043C\u043D\u0430 enterprise",
      darkNeu: "\u0422\u0430\u043C\u043D\u0430",
      darkoBluo: "Darko bluo",
      enterprise: "Enterprise",
      redis: "Redis",
      matrix: "Matrix"
    },
    connected: opts => {
      return `\u041F\u043E\u0432\u0435\u0437\u0430\u043D\u043E: ${opts.name}`;
    },
    tree: "\u0421\u0442\u0430\u0431\u043B\u043E",
    askAuth: "\u0417\u0430\u0442\u0440\u0430\u0436\u0438 \u0430\u0443\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0458\u0443",
    keyboardShortcuts: "\u041F\u0440\u0435\u0447\u0438\u0446\u0435 \u043D\u0430 \u0442\u0430\u0441\u0442\u0430\u0442\u0443\u0440\u0438",
    about: "\u041E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0443",
    supportedLanguages: "\u041F\u043E\u0434\u0440\u0436\u0430\u043D\u0438 \u0458\u0435\u0437\u0438\u0446\u0438",
    version: "\u0412\u0435\u0440\u0437\u0438\u0458\u0430",
    redisVersion: "Redis \u0432\u0435\u0440\u0437\u0438\u0458\u0430",
    modules: "Модулi",
    shortcutRefresh: "\u041E\u0441\u0432\u0435\u0436\u0438",
    shortcutSearch: "\u0424\u043E\u043A\u0443\u0441 \u043D\u0430 \u043F\u0440\u0435\u0442\u0440\u0430\u0433\u0443",
    shortcutNewKey: "\u041D\u043E\u0432\u0438 \u043A\u0459\u0443\u0447",
    shortcutDisconnect: "\u041E\u0434\u0432\u043E\u0458\u0438",
    themeAuto: "Аутоматски (систем)",
    languageAuto: "Auto (system)",
    shortcutCommandPalette: "\u041F\u0430\u043B\u0435\u0442\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0438",
    commandPalette: "\u041F\u0430\u043B\u0435\u0442\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0438",
    noResults: "\u041D\u0435\u043C\u0430 \u0440\u0435\u0437\u0443\u043B\u0442\u0430\u0442\u0430",
    redisCommandsReference: "Redis Команде",
    ungrouped: "Без групе",
    grouped: "Груписано",
    connectFirst: "Прво се повежите на Redis сервер",
    searchLanguage: "Претражи језик...",
    exportProgress: "Извоз кључева...",
    importProgress: "Увоз кључева...",
    importPreview: "Преглед",
    importOverwrite: "Препиши",
    importSkip: "Прескочи",
    importConflict: "Ако кључ већ постоји:",
    noKeysToExport: "Нема кључева за извоз",
    time: "Време",
    type: "Тип",
    format: "Формат",
    loading: "Учитавање...",
    autoRefresh: "Ауто",
    exportSearchHint: "Извозе се само кључеви који одговарају тренутној претрази",
    importSearchHint: "Увоз се примењује на целу базу података, не само на резултате претраге",
    deleteSearchHint: "Брише све кључеве који одговарају тренутној претрази на серверу",
    deletingSearchKeys: "Брисање одговарајућих кључева...",
    importNoKeys: "Кључеви нису пронађени у датотеци",
    desktopNotifications: "Обавештења на радној површини",
    desktopNotificationsEnabled: "Омогући обавештења на радној површини",
    desktopNotificationsInfo: "Примајте OS обавештења за прекиде и поновна повезивања Redis-а када апликација није у фокусу."
  },
  status: {
    dataCopied: "\u041F\u043E\u0434\u0430\u0446\u0438 \u0441\u0443 \u0443 \u043C\u0435\u0452\u0443\u0441\u043F\u0440\u0435\u043C\u043D\u0438\u043A\u0443",
    exportDone: "Извоз завршен",
    deletedSearchKeys: (opts) => `Обрисано ${opts.count} кључева`,
    indexCreated: "Индекс креиран",
    indexDropped: "Индекс обрисан",
    importDone: (opts) => `Увоз завршен: ${opts.created} креирано, ${opts.skipped} прескочено, ${opts.errors} грешака`,
    nodeRemoved: "\u0427\u0432\u043E\u0440 \u0458\u0435 \u0443\u043A\u043B\u043E\u045A\u0435\u043D",
    keyIsNotExisting: "\u041E\u0432\u0430\u0458 \u043A\u0459\u0443\u0447 \u0458\u0435 \u043C\u043E\u0433\u0430\u043E \u0431\u0438\u0442\u0438 \u043E\u0431\u0440\u0438\u0441\u0430\u043D \u0438\u043B\u0438 \u0438\u0441\u0442\u0435\u043A\u0430\u043E.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "\u041D\u0435\u043C\u0430 \u043A\u0459\u0443\u0447\u0435\u0432\u0430";
      } else if (opts.keyCount === 1) {
        return "1 \u043A\u0459\u0443\u0447";
      } else {
        return `${opts.keyCount} \u043A\u0459\u0443\u0447\u0435\u0432\u0430`;
      }
    },
    treeExpandAll: "\u041F\u0440\u043E\u0448\u0438\u0440\u0438 \u0441\u0432\u0435 \u0433\u0440\u0430\u043D\u0435 \u0441\u0442\u0430\u0431\u043B\u0430. \u041E\u0432\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0458\u0430 \u043C\u043E\u0436\u0435 \u0431\u0438\u0442\u0438 \u0437\u0430\u0445\u0442\u0435\u0432\u043D\u0430 \u0438 \u043C\u043E\u0436\u0435 \u043F\u043E\u0442\u0440\u0430\u0458\u0430\u0442\u0438 ...",
    noRedisKeys: "\u041D\u0435\u043C\u0430 \u043A\u0459\u0443\u0447\u0435\u0432\u0430 \u0443 \u043E\u0432\u043E\u0458 \u0431\u0430\u0437\u0438 \u043F\u043E\u0434\u0430\u0442\u0430\u043A\u0430.",
    redisConnected: "Redis \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043F\u043E\u0432\u0435\u0437\u0430\u043D",
    reverted: "\u0412\u0440\u0430\u045b\u0435\u043d\u043e",
    reloadingDataInfo: "\u041F\u043E\u043D\u043E\u0432\u043D\u043E \u0443\u0447\u0438\u0442\u0430\u0432\u0430\u045A\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0458\u0430 \u043E Redis \u043F\u043E\u0434\u0430\u0446\u0438\u043C\u0430",
    added: "\u0414\u043E\u0434\u0430\u0442\u043E",
    saved: "\u0410\u0436\u0443\u0440\u0438\u0440\u0430\u043D\u043E",
    cancelled: "\u041E\u0442\u043A\u0430\u0437\u0430\u043D\u043E",
    deleted: "\u041E\u0431\u0440\u0438\u0441\u0430\u043D\u043E",
    savedRedis: "Redis \u043F\u043E\u0434\u0430\u0446\u0438 \u0441\u0443 \u0441\u0430\u0447\u0443\u0432\u0430\u043D\u0438",
    redisDisconnected: opts => {
      return `\u0422\u0440\u0435\u043D\u0443\u0442\u043D\u0430 \u043A\u043E\u043D\u0435\u043A\u0446\u0438\u0458\u0430 \u0458\u0435 \u0438\u043C\u0430\u043B\u0430 \u0433\u0440\u0435\u0448\u043A\u0443: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `\u0418\u043D\u0434\u0435\u043A\u0441 \u0431\u0430\u0437\u0435 \u043F\u043E\u0434\u0430\u0442\u0430\u043A\u0430 \u0458\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u0459\u0435\u043D \u043D\u0430 ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `\u041A\u0459\u0443\u0447 \u0441\u0442\u0430\u0431\u043B\u0430 \u0458\u0435 \u043E\u0431\u0440\u0438\u0441\u0430\u043D (${opts.key}).`;
    },
    deletedKey: opts => {
      return `\u041A\u0459\u0443\u0447 \u0458\u0435 \u043E\u0431\u0440\u0438\u0441\u0430\u043D (${opts.key}).`;
    },
    renamedKey: "\u041E\u0432\u0430\u0458 \u043A\u0459\u0443\u0447 \u0458\u0435 \u043F\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D",
    ttlChanged: "TTL \u043E\u0432\u043E\u0433 \u043A\u0459\u0443\u0447\u0430 \u0458\u0435 \u043F\u0440\u043E\u043C\u0435\u045A\u0435\u043D",
    notInteger: "\u041E\u0432\u0430\u0458 \u0443\u043D\u043E\u0441 \u043D\u0438\u0458\u0435 \u0446\u0435\u043E \u0431\u0440\u043E\u0458",
    persisted: "\u041E\u0432\u0430\u0458 \u043A\u0459\u0443\u0447 \u0458\u0435 \u0442\u0440\u0430\u0458\u043D\u043E \u0441\u0430\u0447\u0443\u0432\u0430\u043D",
    set: "\u041A\u0459\u0443\u0447 \u0458\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u0459\u0435\u043D/\u0434\u043E\u0434\u0430\u0442",
    connectionRestored: "Веза обновљена",
    socketDisconnected: "Веза прекинута",
    socketError: "Грешка повезивања",
    deletedHashKey: "Хеш кључ обрисан",
    deletedSetMember: "Члан скупа обрисан",
    deletedListElement: "Елемент листе обрисан",
    deletedZSetMember: "Члан сортираног скупа обрисан",
    deletedStreamTimestamp: "Унос тока обрисан",
  },
  code: {
    "delete-connection": "\u041E\u0432\u0430 \u043A\u043E\u043D\u0435\u043A\u0446\u0438\u0458\u0430 \u0458\u0435 \u043E\u0431\u0440\u0438\u0441\u0430\u043D\u0430, \u0442\u0430\u043A\u043E \u0434\u0430 \u0441\u0442\u0435 \u043E\u0434\u0432\u043E\u0458\u0435\u043D\u0438 \u043E\u0434 \u043E\u0432\u0435 Redis \u0438\u043D\u0441\u0442\u0430\u043D\u0446\u0435.",
    "save-connection": "\u041E\u0432\u0430 \u043A\u043E\u043D\u0435\u043A\u0446\u0438\u0458\u0430 \u0458\u0435 \u043F\u0440\u043E\u043C\u0435\u045A\u0435\u043D\u0430, \u0442\u0430\u043A\u043E \u0434\u0430 \u0441\u0442\u0435 \u043E\u0434\u0432\u043E\u0458\u0435\u043D\u0438 \u043E\u0434 \u043E\u0432\u0435 Redis \u0438\u043D\u0441\u0442\u0430\u043D\u0446\u0435. \u041C\u043E\u0436\u0435\u0442\u0435 \u0441\u0435 \u043F\u043E\u043D\u043E\u0432\u043E \u043F\u043E\u0432\u0435\u0437\u0430\u0442\u0438.",
    "readonly-connections": "\u0414\u043E\u0434\u0430\u0432\u0430\u045A\u0435/\u0447\u0443\u0432\u0430\u045A\u0435/\u0431\u0440\u0438\u0441\u0430\u045A\u0435 \u043A\u043E\u043D\u0435\u043A\u0446\u0438\u0458\u0430 \u0458\u0435 \u0441\u0430\u043C\u043E \u0437\u0430 \u0447\u0438\u0442\u0430\u045A\u0435!",
    "readonly-connection-mode": "\u041E\u0432\u0430 \u043A\u043E\u043D\u0435\u043A\u0446\u0438\u0458\u0430 \u0458\u0435 \u0443 \u0440\u0435\u0436\u0438\u043C\u0443 \u0441\u0430\u043C\u043E \u0437\u0430 \u0447\u0438\u0442\u0430\u045A\u0435!",
    "list-out-of-bounds": "\u0418\u043D\u0434\u0435\u043A\u0441 \u043E\u0432\u0435 \u043B\u0438\u0441\u0442\u0435 \u0458\u0435 \u0432\u0430\u043D \u0433\u0440\u0430\u043D\u0438\u0446\u0430",
    "invalid-json-value": "The value is not valid JSON.",
    "http_auth_required": "\u041F\u043E\u0442\u0440\u0435\u0431\u043D\u0430 \u0430\u0443\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0458\u0430: \u043C\u043E\u043B\u0438\u043C\u043E \u0430\u0443\u0442\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0443\u0458\u0442\u0435 \u0441\u0435 \u043F\u0443\u0442\u0435\u043C HTTP Basic Auth \u0438 \u043F\u043E\u043D\u043E\u0432\u043E \u0443\u0447\u0438\u0442\u0430\u0458\u0442\u0435.",
    "auto-connection-failed": "\u041C\u043E\u0433\u0443\u045B\u0435 \u0458\u0435 \u0434\u0430 \u0458\u0435 \u043A\u043E\u043D\u0435\u043A\u0446\u0438\u0458\u0430 \u0443\u043A\u043B\u043E\u045A\u0435\u043D\u0430 \u0438 \u0430\u0443\u0442\u043E\u043C\u0430\u0442\u0441\u043A\u043E \u043F\u043E\u0432\u0435\u0437\u0438\u0432\u0430\u045A\u0435 \u043D\u0438\u0458\u0435 \u0443\u0441\u043F\u0435\u043B\u043E \u0437\u0431\u043E\u0433 \u0442\u043E\u0433\u0430.",
    invalid_console_command: "\u041E\u0432\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043D\u0435 \u0440\u0430\u0434\u0438 \u043F\u0440\u0435\u043A\u043E GUI.",
    "AI_DISABLED": "AI је онемогућен. Омогућите га у AI подешавањима.",
    "AI_PROMPT_REQUIRED": "AI упит је обавезан.",
    "GROQ_API_KEY_READONLY": "Groq API кључ је само за читање и не може се мењати.",
    "blocked_api_access": "Ваш Groq API план не дозвољава приступ овом моделу. Надоградите Groq план или користите network.corifeus.com прокси.",
    "rate_limit": "Достигнут је AI лимит. Покушајте поново касније или користите сопствени Groq API кључ у подешавањима."
  },
  form: {
    error: {
      required: "\u041E\u0431\u0430\u0432\u0435\u0437\u043D\u043E",
      port: "\u041F\u043E\u0440\u0442 \u0458\u0435 \u0438\u0437\u043C\u0435\u0452\u0443 1-65535",
      invalid: "\u0424\u043E\u0440\u043C\u0443\u043B\u0430\u0440 \u0458\u0435 \u043D\u0435\u0432\u0430\u0436\u0435\u045B\u0438"
    },
    connection: {
      label: {
        name: "\u0418\u043C\u0435",
        group: "Група",
        host: "\u0418\u043C\u0435 \u0445\u043E\u0441\u0442\u0430",
        port: "\u041F\u043E\u0440\u0442",
        password: "\u041B\u043E\u0437\u0438\u043D\u043A\u0430",
        username: "\u041A\u043E\u0440\u0438\u0441\u043D\u0438\u0447\u043A\u043E \u0438\u043C\u0435"
      }
    },
    treeSettings: {
      maxValueDisplay: "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u043D\u0430 \u0434\u0443\u0436\u0438\u043D\u0430 \u043F\u0440\u0438\u043A\u0430\u0437\u0430 \u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442\u0438",
      maxValueDisplayInfo: "\u0410\u043A\u043E \u0458\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u0459\u0435\u043D\u043E \u043D\u0430 0, \u043F\u0440\u0438\u043A\u0430\u0437\u0443\u0458\u0435 \u043F\u0443\u043D\u0435 \u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442\u0438. \u0410\u043A\u043E \u0458\u0435 \u0432\u0435\u045B\u0435 \u043E\u0434 0, \u0441\u043A\u0440\u0430\u045B\u0443\u0458\u0435 \u043D\u0430 \u043E\u0432\u0443 \u0434\u0443\u0436\u0438\u043D\u0443. \u0410\u043A\u043E \u0458\u0435 -1: \u0437\u0430 \u0441\u0442\u0440\u0438\u043D\u0433\u043E\u0432\u0435, \u0441\u043A\u0440\u0438\u0432\u0430 \u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442 \u0434\u043E \u0443\u0440\u0435\u0452\u0438\u0432\u0430\u045A\u0430; \u0437\u0430 \u043E\u0441\u0442\u0430\u043B\u0435 \u0442\u0438\u043F\u043E\u0432\u0435, \u043F\u0440\u0438\u043A\u0430\u0437\u0443\u0458\u0435 \u043F\u0443\u043D \u0441\u0430\u0434\u0440\u0436\u0430\u0458.",
      maxKeys: "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u0430\u043D \u0431\u0440\u043E\u0458 \u043A\u0459\u0443\u0447\u0435\u0432\u0430",
      maxKeysInfo: "\u0414\u0430 \u0441\u0435 GUI \u043D\u0435 \u0431\u0438 \u0441\u0440\u0443\u0448\u0438\u043E, \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0430\u0432\u0430\u043C\u043E \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u0430\u043D \u0431\u0440\u043E\u0458 \u043A\u0459\u0443\u0447\u0435\u0432\u0430.",
      keyCount: (opts) => {
        return `\u0411\u0440\u043E\u0458 \u043A\u0459\u0443\u0447\u0435\u0432\u0430: ${opts?.keyCount ?? 0}`;
      },
      label: {
        animation: "\u041A\u043E\u0440\u0438\u0441\u0442\u0438 \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u0458\u0443",
        noAnimation: "\u0411\u0435\u0437 \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u0458\u0435",
        undoEnabled: "\u041f\u043e\u043d\u0438\u0448\u0442\u0430\u0432\u0430\u045a\u0435 \u0443\u043a\u0459\u0443\u0447\u0435\u043d\u043e",
        undoDisabled: "\u041f\u043e\u043d\u0438\u0448\u0442\u0430\u0432\u0430\u045a\u0435 \u0438\u0441\u043a\u0459\u0443\u0447\u0435\u043d\u043e",
        diffEnabled: "\u041f\u0440\u0438\u043a\u0430\u0436\u0438 diff \u043f\u0440\u0435 \u0447\u0443\u0432\u0430\u045a\u0430",
        diffDisabled: "Diff \u043f\u0440\u0435 \u0447\u0443\u0432\u0430\u045a\u0430 \u0458\u0435 \u0438\u0441\u043a\u0459\u0443\u0447\u0435\u043d",
        jsonFormatTwoSpace: "\u0424\u043E\u0440\u043C\u0430\u0442\u0438\u0440\u0430\u0458 JSON \u0441\u0430 2 \u0440\u0430\u0437\u043C\u0430\u043A\u0430",
        jsonFormatFourSpace: "\u0424\u043E\u0440\u043C\u0430\u0442\u0438\u0440\u0430\u0458 JSON \u0441\u0430 4 \u0440\u0430\u0437\u043C\u0430\u043A\u0430",
        formName: "Redis \u043F\u043E\u0434\u0435\u0448\u0430\u0432\u0430\u045A\u0430",
        searchModeClient: "\u0420\u0435\u0436\u0438\u043C \u043F\u0440\u0435\u0442\u0440\u0430\u0433\u0435 \u043D\u0430 \u043A\u043B\u0438\u0458\u0435\u043D\u0442\u0443",
        searchModeServer: "\u0420\u0435\u0436\u0438\u043C \u043F\u0440\u0435\u0442\u0440\u0430\u0433\u0435 \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0443",
        searchModeStartsWith: "\u041F\u0440\u0435\u0442\u0440\u0430\u0433\u0430 \u043F\u043E\u0447\u0438\u045A\u0435 \u0441\u0430",
        searchModeIncludes: "\u041F\u0440\u0435\u0442\u0440\u0430\u0433\u0430 \u0441\u0430\u0434\u0440\u0436\u0438"
      },
      undoHint: "\u041f\u043e\u043d\u0438\u0448\u0442\u0430\u0432\u0430\u045a\u0435 \u0458\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0441\u0430\u043c\u043e \u0437\u0430 string \u0438 JSON \u0442\u0438\u043f\u043e\u0432\u0435 \u043a\u0459\u0443\u0447\u0435\u0432\u0430",
      field: {
        treeSeparator: "\u0421\u0435\u043F\u0430\u0440\u0430\u0442\u043E\u0440 \u0441\u0442\u0430\u0431\u043B\u0430",
        treeSeparatorSelector: "\u0418\u0437\u0431\u043E\u0440 \u0441\u0435\u043F\u0430\u0440\u0430\u0442\u043E\u0440\u0430 \u0441\u0442\u0430\u0431\u043B\u0430",
        page: "\u0411\u0440\u043E\u0458 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0441\u0442\u0430\u0431\u043B\u0430",
        keyPageCount: "\u0411\u0440\u043E\u0458 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043A\u0459\u0443\u0447\u0435\u0432\u0430",
        keysSort: "\u0421\u043E\u0440\u0442\u0438\u0440\u0430\u0458 \u043A\u0459\u0443\u0447\u0435\u0432\u0435",
        searchMode: "\u0420\u0435\u0436\u0438\u043C \u043F\u0440\u0435\u0442\u0440\u0430\u0433\u0435",
        searchModeStartsWith: "\u041F\u0440\u0435\u0442\u0440\u0430\u0433\u0430 \u043F\u043E\u0447\u0438\u045A\u0435 \u0441\u0430 / \u0441\u0430\u0434\u0440\u0436\u0438"
      },
      error: {
        keyPageCount: "\u0411\u0440\u043E\u0458 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043A\u0459\u0443\u0447\u0435\u0432\u0430 \u043C\u043E\u0440\u0430 \u0431\u0438\u0442\u0438 \u0446\u0435\u043E \u0431\u0440\u043E\u0458 \u0438\u0437\u043C\u0435\u0452\u0443 5 - 100",
        page: "\u0411\u0440\u043E\u0458 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043C\u043E\u0440\u0430 \u0431\u0438\u0442\u0438 \u0446\u0435\u043E \u0431\u0440\u043E\u0458 \u0438\u0437\u043C\u0435\u0452\u0443 10 - 5000",
        maxValueDisplay: "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u043D\u0430 \u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442 \u043F\u0440\u0438\u043A\u0430\u0437\u0430 \u043C\u043E\u0440\u0430 \u0431\u0438\u0442\u0438 \u0446\u0435\u043E \u0431\u0440\u043E\u0458 \u0438\u0437\u043C\u0435\u0452\u0443 -1 \u0438 32768",
        maxKeys: "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u0430\u043D \u0431\u0440\u043E\u0458 \u043A\u0459\u0443\u0447\u0435\u0432\u0430 \u043C\u043E\u0440\u0430 \u0431\u0438\u0442\u0438 \u0446\u0435\u043E \u0431\u0440\u043E\u0458 \u0438\u0437\u043C\u0435\u0452\u0443 100 \u0438 100000"
      }
    },
    key: {
      label: {
        formName: {
          add: "\u0414\u043E\u0434\u0430\u0458 \u043D\u043E\u0432\u0438 Redis \u043A\u0459\u0443\u0447",
          edit: "\u0423\u0440\u0435\u0434\u0438 Redis \u043A\u0459\u0443\u0447",
          append: "\u0414\u043E\u0434\u0430\u0458 \u043F\u043E\u0441\u0442\u043E\u0458\u0435\u045B\u0435\u043C Redis \u043A\u0459\u0443\u0447\u0443"
        }
      },
      field: {
        streamTimestamp: "\u0412\u0440\u0435\u043C\u0435\u043D\u0441\u043A\u0430 \u043E\u0437\u043D\u0430\u043A\u0430",
        key: "\u041A\u0459\u0443\u0447",
        type: "\u0422\u0438\u043F",
        index: "\u0418\u043D\u0434\u0435\u043A\u0441",
        hashKey: "\u0425\u0435\u0448 \u043A\u0459\u0443\u0447",
        score: "\u0420\u0435\u0437\u0443\u043B\u0442\u0430\u0442",
        value: "\u0412\u0440\u0435\u0434\u043D\u043E\u0441\u0442",
        errorRate: "Стопа грешке",
        capacity: "Капацитет",
        topk: "Top K",
        width: "Ширина",
        depth: "Дубина",
        decay: "Опадање",
        compression: "Компресија",
        increment: "Инкремент",
        item: "Ставка",
        vectorValues: "Векторске вредности (раздвојене зарезом)",
        element: "Назив елемента",
      },
      error: {
        streamTimestamp: "\u0412\u0440\u0435\u043C\u0435\u043D\u0441\u043A\u0430 \u043E\u0437\u043D\u0430\u043A\u0430 \u0458\u0435 \u043E\u0431\u0430\u0432\u0435\u0437\u043D\u0430, \u0431\u0438\u043B\u043E \u0443 Redis \u0444\u043E\u0440\u043C\u0430\u0442\u0443 \u0438\u043B\u0438 \u043A\u0430\u043E *",
        key: "\u041A\u0459\u0443\u0447 \u0438\u043C\u0430 \u043D\u0430\u0458\u043C\u0430\u045A\u0435 \u0458\u0435\u0434\u0430\u043D \u043A\u0430\u0440\u0430\u043A\u0442\u0435\u0440",
        hashKey: "\u0425\u0435\u0448 \u043A\u0459\u0443\u0447 \u0442\u0430\u0431\u0435\u043B\u0435 \u0438\u043C\u0430 \u043D\u0430\u0458\u043C\u0430\u045A\u0435 \u0458\u0435\u0434\u0430\u043D \u043A\u0430\u0440\u0430\u043A\u0442\u0435\u0440",
        score: "\u0420\u0435\u0437\u0443\u043B\u0442\u0430\u0442 \u0441\u043E\u0440\u0442\u0438\u0440\u0430\u043D\u043E\u0433 \u0441\u043A\u0443\u043F\u0430 \u0458\u0435 \u043E\u0431\u0430\u0432\u0435\u0437\u0430\u043D",
        value: "\u0412\u0440\u0435\u0434\u043D\u043E\u0441\u0442 \u0458\u0435 \u043E\u0431\u0430\u0432\u0435\u0437\u043D\u0430",
        errorRate: "Стопа грешке мора бити између 0 и 1 (нпр. 0.01)",
        capacity: "Капацитет мора бити позитиван цео број",
        topk: "Top K мора бити позитиван цео број",
        width: "Ширина мора бити позитиван цео број",
        depth: "Дубина мора бити позитиван цео број",
        item: "Ставка је обавезна"
      }
    },
    main: {
      label: {
        database: "\u0411\u0414"
      }
    }
  },
  page: {
    search: {
      title: "Претрага",
      index: "Индекс",
      query: "Упит",
      results: "Резултати",
      noIndex: "Нису пронађени индекси",
      createIndex: "Креирај индекс",
      dropIndex: "Обриши индекс",
      indexInfo: "Инфо о индексу",
      indexName: "Назив индекса",
      prefix: "Префикс кључа (опционално)",
      fieldName: "Назив поља",
      hybridMode: "Хибридна претрага (FT.HYBRID)",
      vectorField: "Векторско поље",
      vectorValues: "Векторске вредности",
    },
    monitor: {
      title: "Надгледање",
      memory: "Меморија",
      opsPerSec: "Операција/сек",
      clients: "Клијенти",
      blocked: "Блокирани",
      hitsMisses: "Стопа погодака",
      networkIo: "Мрежа I/O",
      slowLog: "Спор дневник",
      noSlowQueries: "Нису забележени спори упити.",
      confirmSlowLogReset: "Да ли сте сигурни да желите да ресетујете спори дневник?",
      slowLogResetDone: "Спор дневник је ресетован.",
      totalCommands: "Укупно",
      expired: "Истекли",
      evicted: "Избачени",
      clientList: "Листа клијената",
      topKeys: "Највећи кључеви по меморији",
      killClient: "Убиј клијента",
      clientKilled: "Клијент убијен",
      confirmKillClient: "Да ли сте сигурни да желите да прекинете овог клијента?",
      noKeys: "Нема кључева",
      rss: "RSS",
      peak: "Врх",
      fragmentation: "Фрагментација",
      hitsAndMisses: "Погоци / Промашаји",
      noClients: "Нема клијената",
      slotStats: "Статистика слотова кластера",
      serverInfo: "Информације о серверу",
      os: "Оперативни систем",
      port: "Мрежни порт",
      pid: "ИД процеса",
      configFile: "Цонфигуратион Филе",
      uptime: "Уптиме",
      keyspace: "П3Кс_РЕДИС простор за кључеве",
      keys: "П3Кс_РЕДИС кључеви",
      expires: "Истиче",
      noKeyspace: "Нема кључева",
      persistence: "Дата Персистенце",
      rdbLastSave: "РДБ Ласт Саве",
      rdbStatus: "РДБ Статус",
      rdbChanges: "Промене од последњег чувања",
      aofEnabled: "АОФ је омогућен",
      aofSize: "АОФ Сизе",
      replication: "П3Кс_РЕДИС репликација",
      role: "Улога репликације",
      replicas: "Повезане реплике",
      masterHost: "Примари Хост",
      linkStatus: "Статус везе репликације",
      cpu: "ЦПУ Усаге",
      cpuSys: "Систем",
      cpuUser: "Корисник",
      modules: "Учитани П3Кс_РЕДИС модули",
      noModules: "Нема учитаних П3Кс_РЕДИС модула",
      clusterSlotMap: "Редис мапа слотова кластера",
      slotRange: "Распон слотова за кластер",
      totalSlots: "Укупан број слотова за кластере",
      noClusterData: "Нема доступних података о Редис кластеру.",
    },
    analysis: {
      title: "Анализа меморије",
      runAnalysis: "Покрени анализу",
      running: "Анализирање...",
      typeDistribution: "Дистрибуција типова",
      prefixMemory: "Меморија по префиксу",
      topKeysByMemory: "Највећи кључеви по меморији",
      expirationOverview: "Истицање кључева",
      memoryBreakdown: "Расподела меморије",
      keysScanned: "Скенирани кључеви",
      totalMemory: "Укупна меморија",
      rssMemory: "RSS меморија",
      peakMemory: "Вршна меморија",
      luaMemory: "Lua меморија",
      overheadMemory: "Додатно оптерећење",
      datasetMemory: "Скуп података",
      fragmentation: "Фрагментација",
      allocator: "Алокатор",
      withTTL: "Са TTL",
      persistent: "Трајни",
      avgTTL: "Просечан TTL",
      prefix: "Префикс",
      keyCount: "Број кључева",
      memoryUsage: "Коришћење меморије",
      noPrefix: "(без префикса)",
      topN: "Top N",
      maxScanKeys: "Макс. скенираних кључева",
      type: "Тип",
      noData: "Нема података. Кликните Покрени анализу за почетак.",
      exportAll: "Извези све",
      memoryDoctor: "Memory Doctor",
      doctorNoData: "Кликните на Освежи да бисте покренули дијагностику Memory Doctor.",
    },
    acl: {
      title: "ACL корисници",
      loadUsers: "Учитај кориснике",
      loading: "Учитавање...",
      username: "Корисничко име",
      status: "Статус",
      enabled: "Омогућено",
      disabled: "Онемогућено",
      commands: "Команде",
      commandsHint: "нпр. П3Кс_ЦМД_ЕКСАМПЛЕ",
      keys: "Обрасци Redis кључева",
      keysHint: "нпр. П3Кс_КЕИ_ЕКСАМПЛЕ",
      channels: "П3Кс_ПУБСУБ канали",
      channelsHint: "нпр. П3Кс_ЦХАННЕЛ_ЕКСАМПЛЕ",
      password: "Лозинка",
      noPassword: "Нема лозинке (нопасс)",
      passwordHint: "Оставите празно да задржите тренутну лозинку",
      currentUser: "Тренутни",
      createUser: "Креирајте корисника",
      editUser: "Уреди корисника",
      deleteUser: "Обриши",
      confirmDelete: "Да ли сте сигурни да желите да избришете ACL корисника?",
      userDeleted: "ACL корисник је обрисан.",
      userSaved: "ACL корисник је сачуван.",
      cannotDeleteDefault: "Није могуће избрисати подразумеваног корисника.",
      cannotDeleteSelf: "Није могуће избрисати тренутно повезаног корисника.",
      noUsers: "За ACL је потребан Redis 6.0+.",
      groupCommon: "Опште",
      groupDataTypes: "Типови података",
      groupOperations: "Операције",
      rules: "Правила",
      rulesHint: "Токени раздвојени размаком (на пример on >password +@all ~* &*)",
      defaultUserWarning: "Опрез: Измена подразумеваног корисника може да закључа све везе. Ако се то догоди, мораћете поново да покренете Redis или користите redis-cli да бисте вратили приступ.",
    },
    overview: {
      noConnected: "\u041D\u0435\u043C\u0430 \u043F\u043E\u0432\u0435\u0437\u0438\u0432\u0430\u045A\u0430 \u043D\u0430 Redis.",
      overviewClients: "\u041F\u0440\u0438\u043A\u0430\u0437 \u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0438\u0445 \u043F\u043E \u0431\u0440\u043E\u0458\u0443 \u043A\u043B\u0438\u0458\u0435\u043D\u0430\u0442\u0430",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "1 \u043A\u043B\u0438\u0458\u0435\u043D\u0442";
        }
        return `${opt.length} \u043A\u043B\u0438\u0458\u0435\u043D\u0430\u0442\u0430`;
      }
    },
    key: {
      label: {
        key: "\u041A\u0459\u0443\u0447",
        encoding: "\u041A\u043E\u0434\u0438\u0440\u0430\u045A\u0435",
        compression: "Компресија",
        aiRateLimited: "Достигнут је лимит AI захтева. Покушајте поново касније или користите сопствени Groq API кључ у Подешавањима.",
        aiError: "AI упит није успео",
        length: "\u0412\u0435\u043B\u0438\u0447\u0438\u043D\u0430",
        ttl: "TTL",
        ttlTitle: "\u0412\u0440\u0435\u043C\u0435 \u0436\u0438\u0432\u043E\u0442\u0430",
        type: "\u0422\u0438\u043F",
        ttlNotExpire: "\u043D\u0435 \u0438\u0441\u0442\u0438\u0447\u0435",
        lengthString: "\u0431\u0430\u0458\u0442\u043E\u0432\u0430",
        lengthItem: "\u0441\u0442\u0430\u0432\u043A\u0438",
        actions: "\u0410\u043A\u0446\u0438\u0458\u0435"
      },
      list: {
        table: {
          index: "\u0418\u043D\u0434\u0435\u043A\u0441",
          value: "\u0412\u0440\u0435\u0434\u043D\u043E\u0441\u0442"
        }
      },
      hash: {
        table: {
          hashkey: "\u0425\u0435\u0448 \u043A\u0459\u0443\u0447",
          value: "\u0412\u0440\u0435\u0434\u043D\u043E\u0441\u0442"
        }
      },
      set: {
        table: {
          value: "\u0427\u043B\u0430\u043D"
        }
      },
      zset: {
        table: {
          value: "\u0427\u043B\u0430\u043D",
          score: "\u0420\u0435\u0437\u0443\u043B\u0442\u0430\u0442"
        }
      },
      stream: {
        table: {
          timestamp: "ID \u0432\u0440\u0435\u043C\u0435\u043D\u0441\u043A\u0435 \u043E\u0437\u043D\u0430\u043A\u0435",
          field: "\u041F\u043E\u0459\u0435",
          value: "\u0412\u0440\u0435\u0434\u043D\u043E\u0441\u0442"
        }
      },
      timeseries: {
        chart: "Графикон",
        info: "Информације",
        addPoint: "Додај тачку података",
        from: "Од (ms или -)",
        to: "До (ms или +)",
        aggregation: "Агрегација",
        timeBucket: "Корпа (ms)",
        none: "Ниједан",
        dataPoints: "тачке података",
        labels: "Ознаке",
        rules: "Правила",
        retention: "Задржавање",
        timestamp: "Временска ознака",
        value: "Вредност",
        retentionHint: "0 = без истека, или милисекунде",
        duplicatePolicy: "Политика дупликата",
        labelsHint: "кључ1 вредност1 кључ2 вредност2",
        timestampHint: "'*' значи аутоматски генерисано, или милисекундна временска ознака",
        editAllHint: "Једна тачка података по реду: временска_ознака вредност (временска ознака може бити * за аутоматски)",
        autoSpread: "Аутоматски * интервал распростирања",
        formula: "Формула",
        formulaLinear: "Линеарна",
        formulaRandom: "Случајна",
        formulaSawtooth: "Тестераста",
        formulaPoints: "Тачке",
        formulaAmplitude: "Амплитуда",
        formulaOffset: "Помак",
        generate: "Генериши",
        exportChart: "Извези PNG",
        overlay: "Преклапајући кључеви",
        overlayHint: "Кључеви раздвојени зарезом",
        mrangeFilter: "Филтер ознака",
        bulkMode: "Масовно генерисање",
        mrangeHint: "нпр. sensor=temp"
      },
      probabilistic: {
        info: "Информације",
        addItem: "Додај ставку",
        checkItem: "Провери ставку",
        item: "Ставка",
        exists: "Постоји",
        doesNotExist: "Не постоји",
        topkList: "Главне ставке",
        topkCount: "Број",
        queryCount: "Број упита",
        queryResult: "Резултат упита",
        addedSuccessfully: "Ставка успешно додата",
        deletedSuccessfully: "Ставка успешно обрисана",
        quantile: "Квантил",
        quantileResult: "Резултат",
        noItems: "Нема ставки за приказ",
        resetConfirm: "Ресетовати све податке у овом T-Digest?"
      },
      vectorset: {
        info: "Информације",
        elements: "Елементи",
        similarity: "Претрага по сличности",
        searchByElement: "Претрага по елементу",
        searchByVector: "Претрага по вектору",
        vectorValues: "Векторске вредности",
        element: "Елемент",
        score: "Резултат",
        count: "Број",
        addElement: "Додај елемент",
        attributes: "Атрибути",
        noAttributes: "Нема атрибута",
        dimensions: "Димензије",
        removeConfirm: "Уклонити овај елемент из VectorSet?",
        noElements: "Нема елемената",
        filter: "Филтер",
        searchComplete: "Претрага завршена",
      }
    },
    treeControls: {
      settings: "\u041F\u043E\u0434\u0435\u0448\u0430\u0432\u0430\u045A\u0430 \u0441\u0442\u0430\u0431\u043B\u0430",
      expandAll: "\u041F\u0440\u043E\u0448\u0438\u0440\u0438 \u0441\u0432\u0435",
      collapseAll: "\u0421\u043A\u0443\u043F\u0438 \u0441\u0432\u0435",
      level: "Ниво",
      search: {
        search: "\u041F\u0440\u0435\u0442\u0440\u0430\u0433\u0430 \u0443 \u043A\u0459\u0443\u0447\u0435\u0432\u0438\u043C\u0430",
        clear: "\u041E\u0447\u0438\u0441\u0442\u0438 \u0442\u0440\u0435\u043D\u0443\u0442\u043D\u0443 \u043F\u0440\u0435\u0442\u0440\u0430\u0433\u0443",
        placeholderClient: "\u041F\u0440\u0435\u0442\u0440\u0430\u0433\u0430 \u043D\u0430 \u043A\u043B\u0438\u0458\u0435\u043D\u0442\u0443",
        placeholderServer: "\u041F\u0440\u0435\u0442\u0440\u0430\u0433\u0430 \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0443",
        info: (opts) => "\u041F\u0440\u0435\u0442\u0440\u0430\u0433\u0430 \u043D\u0430 \u043A\u043B\u0438\u0458\u0435\u043D\u0442\u0443 \u0437\u043D\u0430\u0447\u0438 \u043F\u043E\u0434\u0443\u0434\u0430\u0440\u0430\u045A\u0435 \u0442\u0435\u043A\u0441\u0442\u0430 \u0443 \u043F\u043E\u0459\u0443 \u043F\u0440\u0435\u0442\u0440\u0430\u0433\u0435. \u041F\u0440\u0435\u0442\u0440\u0430\u0433\u0430 \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0443 \u0437\u043D\u0430\u0447\u0438 \u043F\u0440\u0435\u0442\u0440\u0430\u0433\u0443 \u043E\u0431\u0440\u0430\u0437\u0430\u0446\u0430 \u0443 \u043A\u0459\u0443\u0447\u0435\u0432\u0438\u043C\u0430 \u043A\u0430\u043E *{\u0442\u0435\u043A\u0441\u0442-\u043F\u0440\u0435\u0442\u0440\u0430\u0433\u0435}*. \u0417\u0430 \u0432\u0435\u043B\u0438\u043A\u0435 \u0441\u043A\u0443\u043F\u043E\u0432\u0435 \u043F\u0440\u0435\u0442\u0440\u0430\u0433\u0435, \u0431\u043E\u0459\u0435 \u0458\u0435 \u043A\u043E\u0440\u0438\u0441\u0442\u0438\u0442\u0438 \u043F\u0440\u0435\u0442\u0440\u0430\u0433\u0443 \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0443. \u0417\u0430 \u043C\u0430\u045A\u0435 \u0441\u043A\u0443\u043F\u043E\u0432\u0435 \u043F\u0440\u0435\u0442\u0440\u0430\u0433\u0435, \u0431\u043E\u0459\u0435 \u0458\u0435 \u043A\u043E\u0440\u0438\u0441\u0442\u0438\u0442\u0438 \u043F\u0440\u0435\u0442\u0440\u0430\u0433\u0443 \u043D\u0430 \u043A\u043B\u0438\u0458\u0435\u043D\u0442\u0443." + ` \u0410\u043A\u043E \u0431\u0440\u043E\u0458 \u043A\u0459\u0443\u0447\u0435\u0432\u0430 \u043F\u0440\u0435\u043B\u0430\u0437\u0438 ${opts?.maxLightKeysCount ?? 110000}, \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0440\u0435\u0442\u0440\u0430\u0436\u0438\u0432\u0430\u0442\u0438 \u0441\u0430\u043C\u043E \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0443.`,
        largeSetInfo: "\u0423 \u0432\u0435\u043B\u0438\u043A\u043E\u043C \u0441\u043A\u0443\u043F\u0443, \u043F\u0440\u0435\u0442\u0440\u0430\u0433\u0430 \u043D\u0430 \u043A\u043B\u0438\u0458\u0435\u043D\u0442\u0443 \u0458\u0435 \u0438\u0441\u043A\u0459\u0443\u0447\u0435\u043D\u0430, \u0442\u0430\u043A\u043E \u0434\u0430 \u0458\u0435 \u0442\u0440\u0435\u043D\u0443\u0442\u043D\u043E \u043C\u043E\u0433\u0443\u045B\u0430 \u0441\u0430\u043C\u043E \u043F\u0440\u0435\u0442\u0440\u0430\u0433\u0430 \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0443.",
        infoDetails: "\u0414\u0430 \u0431\u0438\u0441\u0442\u0435 \u0441\u0430\u0437\u043D\u0430\u043B\u0438 \u043A\u0430\u043A\u043E \u043F\u0440\u0435\u0442\u0440\u0430\u0433\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0438\u0448\u0435, \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u0435 \u043F\u043E\u0434\u0435\u0448\u0430\u0432\u0430\u045A\u0430"
      },
      pager: {
        next: "\u0421\u043B\u0435\u0434\u0435\u045B\u0430",
        prev: "\u041F\u0440\u0435\u0442\u0445\u043E\u0434\u043D\u0430",
        first: "\u041F\u0440\u0432\u0430",
        last: "\u041F\u043E\u0441\u043B\u0435\u0434\u045A\u0430"
      }
    }
  },
  time: {
    years: "\u0433\u043E\u0434\u0438\u043D\u0430",
    months: "\u043C\u0435\u0441\u0435\u0446\u0438",
    days: "\u0434\u0430\u043D\u0430",
    year: "\u0433\u043E\u0434\u0438\u043D\u0430",
    month: "\u043C\u0435\u0441\u0435\u0446",
    day: "\u0434\u0430\u043D",
    second: "\u0441\u0435\u043A\u0443\u043D\u0434\u0430",
    seconds: "\u0441\u0435\u043A\u0443\u043D\u0434\u0435",
    minute: "\u043C\u0438\u043D\u0443\u0442",
    minutes: "\u043C\u0438\u043D\u0443\u0442\u0430",
    hour: "\u0441\u0430\u0442",
    hours: "\u0441\u0430\u0442\u0438"
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
    bloom: "Bloom филтер",
    cuckoo: "Cuckoo филтер",
    topk: "Top-K",
    cms: "Count-Min Sketch",
    tdigest: "T-Digest",
    vectorset: "VectorSet",
  },
  promo: {
    title: "AI мрежни асистент",
    description: "Откријте наш бесплатни AI мрежни асистент на network.corifeus.com — анализирајте домене, IP адресе, DNS записе, SSL сертификате, безбедност е-поште и мрежну инфраструктуру. Покреће га AI за тренутне и свеобухватне резултате.",
    disclaimer: "Ова промоција се приказује само на demo страници и неће се појавити у Docker, Electron или веб апликацијским имплементацијама.",
    toastMessage: "Испробајте наш бесплатни AI мрежни асистент на network.corifeus.com — анализирајте домене, DNS, SSL и још много тога!",
    visit: "Посетите network.corifeus.com",
  }
};
module.exports = strings;
