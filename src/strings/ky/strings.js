const strings = {
  error: {
    server_error: "Сервер катасы, кайталап көрүңүз",
    aiPromptTooLong: "AI сурамы өтө узун (максимум 4096 белги)",
  },
  title: {
    donate: "Кайрымдуулук кылуу",
    donateTitle: "P3X Redis UI-ди колдоңуз",
    donateDescription: "P3X Redis UI — бекер, ачык баштапкы коддуу долбоор. Колдонмону, AI мүмкүнчүлүктөрүн, Docker сүрөттөрүн, серверлерди жана инфраструктураны тейлөө чыгымдары иштеп чыгуучунун өз чөнтөгүнөн чыгат. Бул куралды пайдалуу деп тапсаңыз, аны кайрымдуулук менен колдоону карап көрүңүз. Ар бир салым долбоорду тирүү жана өсүп жатканда кармоого жардам берет. Рахмат!",
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
    threads: "Жиптер"
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
    deleteSetMember: "Бул топтомдун мүчөсүн чын эле жок кыласызбы?",
    deleteZSetMember: "Бул иреттелген топтом мүчөсүн чын эле жок кыласызбы?",
    deleteConnection: "ырастоо",
    deleteConnectionText: "Бул Redis байланышын чын эле жок кыласызбы?",
    deleteNode: "Бул Redis түйүнүн чын эле жок кыласызбы?",
    deleteAllKeys: opts => {
      return `Бул даракты жана анын бардык ачкычтарын жок кылыңыз (${opts.key})?`;
    },
    deleteSearchKeys: opts => {
      return `"${opts.pattern}" дал келген бардык ачкычтарды жок кыласызбы? ${opts.count} ачкыч табылды.`;
    },
    socketioConnectError: "Socket.IO серверге туташа албайт, сиз кайра жүктөп, байланыш катасын өзүңүз чечип көрүңүз, кардар аны кантип чечүүнү билбейт.",
    socketioAuthRequired: "Socket.IO авторизациясы талап кылынат. Сураныч, HTTP Basic Auth (колдонуучунун аты/сырсөз) менен аныктыгын текшерип, кайра жүктөңүз.",
    invalidCredentials: "Жараксыз колдонуучу аты же сырсөз.",
    delete: "Жок кылуу?",
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
    copy: "Көчүрүү",
    downloadBuffer: "экилик жүктөө",
    setBuffer: "экилик жүктөө",
    exportKeys: "Ачкычтарды экспорттоо",
    exportAllKeys: (opts) => `Бардык ${opts.count} ачкычты экспорттоо`,
    exportSearchResults: (opts) => `${opts.count} натыйжаны экспорттоо`,
    deleteAllKeysMenu: (opts) => `Баарын жок кылуу ${opts.count}`,
    importKeys: "Ачкычтарды импорттоо",
    deleteSearchKeys: (opts) => `${opts.count} дал келген ачкычтарды жок кылуу`,
    saveWithFormatJson: "Формат менен сактоо",
    formatJson: "Json форматы",
    wrap: "Ороо",
    unwrap: "Оракты ачуу",
    downloadJson: "JSON жүктөп алыңыз",
    pubsubMonitor: "PubSub",
    pulse: "Pulse",
    profiler: "Profiler",
    memoryAnalysis: "Analysis",
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
    logout: "Чыгуу",
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
    fieldTtl: "Талaa TTL",
    digest: "Дайджест",
    delete: "Жок кылуу",
    remove: "Алып салуу",
    areYouSure: "Ишенесизби?",
    sure: "Албетте",
    testConnection: "Сыноо байланышы",
    getKey: "Redis ачкычы жана ага байланыштуу дайындар жүктөлүүдө ...",
    jsonViewShow: "JSON көрсөтүү",
    jsonViewEditor: "JSON түзөтүү",
    quickConsole: "Ыкчам консол",
    moveUp: "Жогору жылдыруу",
    moveDown: "Төмөн жылдыруу",
  },
  diff: {
    reviewChanges: "\u04e8\u0437\u0433\u04e9\u0440\u0442\u04af\u04af\u043b\u04e9\u0440\u0434\u04af \u043a\u0430\u0440\u0430\u043f \u0447\u044b\u0433\u0443\u0443",
    inline: "\u0421\u0430\u043f \u0438\u0447\u0438\u043d\u0434\u0435",
    sideBySide: "\u0416\u0430\u043d\u0430\u0448\u0430",
    additions: "\u043a\u043e\u0448\u0443\u043c\u0447\u0430\u043b\u0430\u0440",
    deletions: "\u04e9\u0447\u04af\u0440\u04af\u04af\u043b\u04e9\u0440",
    unchangedLines: "\u04e9\u0437\u0433\u04e9\u0440\u0431\u04e9\u0433\u04e9\u043d \u0441\u0430\u043f\u0442\u0430\u0440",
    noChanges: "\u04e8\u0437\u0433\u04e9\u0440\u0442\u04af\u04af \u0442\u0430\u0431\u044b\u043b\u0433\u0430\u043d \u0436\u043e\u043a",
    before: "\u041c\u0443\u0440\u0443\u043d",
    after: "\u041a\u0438\u0439\u0438\u043d",
  },
  label: {
    id: {
      nodeId: "Түйүн ID",
      id: "Туташуу ID",
      info: "Эгерде сиз төмөнкүлөрдүн касиеттерин өзгөртүүнү каалабасаңыз: sshPassword, sshPrivateKey, сырсөз, tlsCrt, tlsKey, tlsCa, касиеттин баалуулуктарын сактап калуу үчүн ошол пропорцияларга байланыштын идентификаторун киргизиңиз. Түйүндүн сырсөзүндө ошол эле логиканы кааласаңыз, түйүн сырсөзүнө түйүн идентификаторун киргизиңиз."
    },
    secureFeature: "Эгер сиз P3X менен башталган бир маанини көрсөңүз, анда бул коопсуз функция. Орнотууларды өзгөртүү үчүн, жөн гана бул жөндөөлөрдү бош же башка нерсе менен алмаштырыңыз жана алар сакталат. Эгер сиз орнотууларды өзгөртпөсөңүз, орнотуулар сервердегидей сакталып калат.",
    aiTranslating: "Которулууда...",
    aiSettings: "AI Орнотуулар",
    aiGroqApiKey: "Groq API ачкычы",
    aiGroqApiKeyInfo: "Милдеттүү эмес. Жакшыраак иштөө үчүн өзүңүздүн Groq API ачкычы. Акысыз ачкыч алыңыз",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "AI API ачкычы сакталды",
    aiGroqApiKeyInvalid: "Жараксыз Groq API ачкычы",
    aiGroqApiKeyNotSet: "Коюлган эмес (сервер демейки)",
    aiEnabled: "AI иштетилген",
    aiEnabledYes: "Ооба",
    aiEnabledNo: "Жок",
    aiRouteViaNetwork: "network.corifeus.com аркылуу багыттоо",
    aiRoutingDirect: "Суроолор өзүңүздүн API ачкычыңызды колдонуп түздөн-түз Groq'ка жөнөтүлөт, network.corifeus.com айланып өтүлөт.",
    aiRoutingNetwork: "AI суроолору network.corifeus.com аркылуу багытталат. Эгер өзүңүздүн акысыз Groq API ачкычыңыз болсо, бул которгучту өчүрүп, network.corifeus.com'суз түздөн-түз Groq'ка багыттай аласыз.",
    aiMaxTokens: "AI максималдуу токендери",
    aiMaxTokensInfo: "AI жооптору үчүн токендердин максималдуу саны. Жогорку маанилер узунураак жоопторго мүмкүндүк берет, бирок көбүрөөк API кредитин колдонушу мүмкүн.",
    consoleDrawer: {
      toggleTooltip: "Консолду которуу",
      clearTooltip: "Чыгыш тарыхын тазалоо",
      closeTooltip: "Консолду жабуу",
      aiSettingsTooltip: "AI жөндөөлөрү",
      modeRedis: "REDIS",
      modeAi: "AI",
      connectionChipNoDb: opts => `${opts.name}`,
      connectionChipWithDb: opts => `${opts.name} · db ${opts.db}`,
      pageChip: opts => `бет: ${opts.page}`,
      connectingTo: opts => `Туташууда: ${opts.name}…`,
      connectedTo: opts => `Туташты: ${opts.name} (Redis ${opts.version} ${opts.mode}, ${opts.modules} модуль жүктөлдү)`,
      connectedToNoInfo: opts => `Туташты: ${opts.name}`,
      disconnectedFrom: opts => `Ажыратылды: ${opts.name}`,
      notConnected: "Туташкан эмес.",
      limitedAiOnly: "Чектелген AI гана жеткиликтүү. Redis боюнча жалпы суроо-жооп иштейт.",
      connectHint: "Жандуу диагностика үчүн муну жазыңыз: connect <name>",
      cheatsheetHint: "Эмнени сураса болорун көрүү үчүн ai: help деп жазыңыз.",
      needsConnection: "Бул үчүн активдүү туташуу керек. Адегенде \"connect <name>\" деп жазыңыз.",
      aiNeedsConnectionReason: "Жандуу абал боюнча AI (tool use) Redis'ке туташканда гана жеткиликтүү.",
      verbNeedsConnection: opts => `"${opts.verb}" үчүн активдүү туташуу керек. Адегенде "connect <name>" деп жазыңыз.`,
      aiLimitedMode: "AI чектелген режимде турат. Туташмайынча Redis боюнча жалпы билим суроолору гана иштейт.",
      welcomeDisconnected: "Кош келиңиз. Азырынча эч бир Redis instance'ине туташкан жоксуз.",
      readyIndicator: "Даяр.",
    },
    cheatsheet: {
      title: "AI барагы — эмнени сурасам болот?",
      subtitle: "Консолго чаптоо үчүн каалаган сурамды басыңыз. Андан соң Enter басыңыз.",
      searchPlaceholder: "Сурамдарды чыпкалоо…",
      openOfficialDocs: "Redis Commands ↗",
      openOfficialDocsTooltip: "redis.io сайтындагы расмий Redis буйруктарынын маалыматтамасын ачуу",
      closeTooltip: "Жабуу (Esc)",
      empty: "Чыпкага дал келген сурам жок.",
      footerHint: "Кеңеш: \"ai:\" деп жазып, андан кийин каалаган тилде каалаган текст жазыңыз — AI 54 тилди түшүнөт жана керек болгондо Redis'тин тирүү абалын колдонот.",

      // Each group has: name (category label), match (search-filter alias), prompts (array of example strings)
      groups: {
        diagnostics: {
          name: "Тирүү диагностика",
          description: "Коопсуз окуу куралдары аркылуу сервердин тирүү абалын изилдөөнү AI'дан сура.",
          prompts: [
            "эмнеге эс тутум жогору?",
            "эң жай 10 сурамды көрсөт",
            "кайсы кардарлар кошулган?",
            "maxmemory саясаты кандай?",
            "жакында эвикциялар болдубу?",
            "кечигүү окуялары барбы?",
            "сервер канча убакыттан бери иштеп жатат?",
            "hit rate кандай?",
            "cpu жүктөмүн көрсөт",
            "keyspace жыйынтыгын чыгар",
            "ар бир маалымат түрү канча эс тутум колдонот?",
            "азыр серверди бир нерсе бөгөп турабы?"
          ]
        },
        keys: {
          name: "Ачкычтар",
          description: "Даракты басып отурбастан ачкычтарды кароо, табуу жана талдоо.",
          prompts: [
            "user:* үлгүсүнө дал келген бардык ачкычтарды тап",
            "ар бир базада канча ачкыч бар?",
            "бул базадагы эң чоң hash'ты көрсөт",
            "TTL'и 60 секунддан аз ачкычтарды тап",
            "кайсы ачкычтарда TTL жок?",
            "session:abc ачкычы кандай түрдө?",
            "\"session:\" префикси канча эс тутум колдонорун баалап бер",
            "user:42 ачкычынын object encoding'ин көрсөт",
            "жакында мөөнөтү бүткөн ачкычтар барбы?",
            "кайсы namespace эң көп эс тутум колдонот?"
          ]
        },
        dataTypes: {
          name: "Маалымат түрлөрү",
          description: "Ар бир Redis түрү үчүн түзүү/окуу/жаңылоону табигый тилде баяндоо.",
          prompts: [
            "name=Alice age=30 талаалары менен user:1 аттуу hash түз",
            "tasks тизмесине үч элемент кош",
            "favourites жыйындысына мүчөлөрдү кош",
            "leaderboard sorted set'ке упай менен мүчөлөрдү кош",
            "events агымына окуя кош",
            "events агымынан акыркы 10 жазууну ал",
            "user:1 hash'ынын бардык талааларын ал",
            "favourites жыйындысынын мүчөлөрүн ал",
            "leaderboard'дон упай боюнча топ-10'ду ал"
          ]
        },
        modules: {
          name: "Модулдар",
          description: "Жүктөлгөн Redis модулдарына сурамдар (төмөнкү категориялар модуль болгондо гана көрүнөт).",
          prompts: []
        },
        json: {
          name: "RedisJSON",
          description: "ReJSON модулу жүктөлгөндө жеткиликтүү.",
          prompts: [
            "user:42'де { name: \"Alice\", age: 30 } JSON документин түз",
            "user:42'нин name талаасын окуп чык",
            "user:42'нин age'ин 31'ге жаңыла",
            "бардык JSON ачкычтарды тизмеле",
            "JSON документтен талааны өчүр",
            "JSONPath аркылуу ичтеги талааны ал"
          ]
        },
        search: {
          name: "RediSearch",
          description: "search модулу жүктөлгөндө жеткиликтүү.",
          prompts: [
            "бардык толук-текст индекстерин тизмеле",
            "idx:products индексинде \"redis\" боюнча толук-текст издөө жүргүз",
            "title (TEXT) жана price (NUMERIC) талаалары менен hash негизиндеги индекс түз",
            "idx:products индекси жөнүндө маалымат ал",
            "idx:products индексин өчүр",
            "price 10 менен 50 ортосундагы документтерди тап",
            "текст жана вектордук окшоштукту бириктирген гибрид издөөнү жаз"
          ]
        },
        timeseries: {
          name: "RedisTimeSeries",
          description: "timeseries модулу жүктөлгөндө жеткиликтүү.",
          prompts: [
            "бардык timeseries ачкычтарды тизмеле",
            "temp:room1'ге маалымат чекитин кош",
            "temp:room1'дин диапазонун кечээтен азыркыга чейин ал",
            "sensor=temp белгиси боюнча multi-range ал",
            "temp:room1 үчүн 100 синусоидалык чекит жасап бер",
            "temp:room1 үчүн retention жана белгилерди көрсөт"
          ]
        },
        bloom: {
          name: "RedisBloom (Bloom / Cuckoo / Top-K / CMS / T-Digest)",
          description: "bf модулу жүктөлгөндө жеткиликтүү.",
          prompts: [
            "spam:ips bloom filter'инде foo элементи бар-жогун текшер",
            "spam:ips bloom filter'ине элементтерди кош",
            "K=10 менен popular аттуу top-K түз",
            "/home ачкычы боюнча count-min sketch traffic сура",
            "t-digest'ке маанилерди кошуп, 95-пайыздык чекти ал",
            "spam:ips bloom filter жөнүндө маалыматты көрсөт"
          ]
        },
        vectorSet: {
          name: "VectorSet (Redis 8+)",
          description: "Redis 8+ аныкталганда жеткиликтүү (тубаса VECTORSET түрү).",
          prompts: [
            "embeddings'ке вектор кош",
            "сурам векторуна эң окшош 10 векторду тап",
            "vectorset embeddings'тин өлчөмдүгү жана санын көрсөт",
            "vectorset embeddings'тен элементти өчүр",
            "VSIM аркылуу элементтин аты боюнча издөө"
          ]
        },
        redis8: {
          name: "Redis 8+ мүмкүнчүлүктөрү",
          description: "Redis 8+ аныкталганда көрүнөт.",
          prompts: [
            "HEXPIRE аркылуу hash талаасынын ttl'ин койгула",
            "сап маанисинин digest'ин ал",
            "гибрид толук-текст + вектордук издөөнү иштет (FT.HYBRID)",
            "MSETEX аркылуу бир нече ачкычты жалпы мөөнөт менен койгула",
            "consumer group менен stream жазуусун өчүр (XDELEX)",
            "топ-10 слот үчүн cluster slot-stats көрсөт"
          ]
        },
        scripting: {
          name: "Скрипт жазуу",
          description: "Табигый тилдеги сыпаттамалардан Lua / EVAL скрипттерин жаратуу.",
          prompts: [
            "Y > 5 болгондо гана counter X'ти көбөйтүүчү атомдук скрипт жаз",
            "Lua менен 100 кокустук ачкыч жаратып бер",
            "бул shell куюлмасын бир EVAL'ге айландыр: keys user:* | GET | grep inactive | DEL",
            "кластер үчүн коопсуз болсун деп, партиялык операцияны Lua'га көчүр",
            "бир Lua чакырыгында check-and-set стилиндеги жаңылоо",
            "hash'ты айлантып, үлгүгө туура келген талааларды өчүр"
          ]
        },
        cluster: {
          name: "Кластер",
          description: "Кластер режиминде гана көрүнөт.",
          prompts: [
            "кластер жөнүндө маалыматты көрсөт",
            "кластер түйүндөрүн тизмеле",
            "ачкыч саны боюнча топ-10 слотту көрсөт",
            "эс тутум боюнча топ-10 слотту көрсөт",
            "5000-слотко кайсы master ээ?"
          ]
        },
        acl: {
          name: "ACL (Redis 6+)",
          description: "Мүмкүнчүлүктү башкаруу колдонуучуларын жана учурдагы туташууну көрүү.",
          prompts: [
            "мен кайсы колдонуучу катары туташканмын?",
            "бардык ACL колдонуучуларды тизмеле",
            "менде кандай уруксаттар бар?",
            "default колдонуучусунун эрежелерин көрсөт"
          ]
        },
        qna: {
          name: "Жалпы суроо-жооп",
          description: "Redis жөнүндөгү билим суроолорун бер — куралдарсыз, жоопторду гана.",
          prompts: [
            "ZADD деген эмне?",
            "кластердин failover'и кантип иштейт?",
            "SCAN менен KEYS'тин айырмасын түшүндүр",
            "бир нече буйруктун ордуна EVAL'ди качан колдонуу керек?",
            "Redis persistence варианттары кайсылар?",
            "RDB менен AOF'тун айырмасы эмнеде?",
            "Redis Sentinel жаңы master'ди кантип тандайт?",
            "кластер режиминдеги hash tag'дерди түшүндүр"
          ]
        },
        translate: {
          name: "Табигый тил → Redis буйругу",
          description: "Эмне кааласаңыз жөнөкөй кыргызча (же 54 тилдин кайсынысында болбосун) сүрөттөп бериңиз; AI Redis буйругун жазат.",
          prompts: [
            "user:42 ачкычын өчүр",
            "foo ачкычынын атын bar'га өзгөрт",
            "session:abc ачкычын 10 секундда мөөнөтү бүтсүн",
            "source ачкычын destination'го көчүр",
            "visits эсептегичин 5'ке көбөйт",
            "greeting ачкычын 1 саатка \"hello\" деп койгула",
            "эң көп чакырылган 10 ачкычты көрсөт",
            "temp:* үлгүсүнө дал келген бардык ачкычтарды өчүр"
          ]
        }
      }
    },
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
    aclAuthHint: "Аныктыгын текшерүү үчүн Redis ACL колдонуучу атын жана сырсөзүн колдонуңуз. Сырсөзсүз демейки колдонуучу үчүн бош калтырыңыз.",
    tlsWithoutCert: "TLSти кошумча сертификатсыз иштетүү",
    tlsRejectUnauthorized: "Уруксатсыз сертификатты четке кагуу",
    tlsSecure: "Эгер сиз P3X менен башталган TLS конфигурациясын көрсөңүз же бардык TLS жөндөөлөрү окшош болсо, бул коопсуз функция. Орнотууларды өзгөртүү үчүн, жөн гана бул жөндөөлөрдү бош же башка нерсе менен алмаштырыңыз жана алар сакталат. TLS жөндөөлөрүн өзгөртпөсөңүз, орнотуулар сервердегидей сакталып калат.",
    treeSeparatorEmpty: "Эгерде дарак бөлгүч бош болсо, анда дарактын эч кандай түйүндөрү болбойт, болгону таза тизме",
    treeSeparatorEmptyNote: "Уюшкан түйүндөр жок, жөн гана тизме",
    welcomeConsole: "Redis консолуна кош келиңиз",
    welcomeConsoleInfo: "SHIFT + Курсор ЖОГОРУ же ТӨМӨН тарых иштетилген",
    redisListIndexInfo: "Коштоо үчүн бош, -1 алдына коюу же көрсөтүлгөн орунга сактоо үчүн.",
    console: "Консол",
    connectiondAdd: "Туташуу кошуу",
    connectiondEdit: "Туташууну түзөтүү",
    connectiondView: "Байланышты көрүү",
    connections: "Байланыштар",
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
    theme: {
      light: "Жарык",
      dark: "Караңгы ишкана",
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
    languageAuto: "Auto (system)",
    shortcutCommandPalette: "Буйрук палитрасы",
    commandPalette: "Буйрук палитрасы",
    noResults: "Натыйжа жок",
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
    type: "Түрү",
    format: "Формат",
    loading: "Жүктөлүүдө...",
    autoRefresh: "Авто",
    exportSearchHint: "Учурдагы издөөгө дал келген ачкычтар гана экспортолот",
    importSearchHint: "Импорт издөө натыйжаларына эмес, бүт маалымат базасына колдонулат",
    deleteSearchHint: "Серверде учурдагы издөөгө дал келген бардык ачкычтарды жок кылат",
    deletingSearchKeys: "Дал келген ачкычтарды жок кылуу...",
    importNoKeys: "Файлдан ачкычтар табылган жок",
    desktopNotifications: "Desktop Notifications",
    desktopNotificationsEnabled: "Enable desktop notifications",
    desktopNotificationsInfo: "Receive OS notifications for Redis disconnections and reconnections when the app is not focused."
  },
  status: {
    dataCopied: "Маалымат алмашуу буферинде",
    exportDone: "Экспорт аякталды",
    deletedSearchKeys: (opts) => `${opts.count} ачкыч жок кылынды`,
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
    reverted: "\u0410\u0440\u0442\u043a\u0430 \u043a\u0430\u0439\u0442\u0430\u0440\u044b\u043b\u0434\u044b",
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
      return `db индекси коюлган ${opts.db}. `;
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
    set: "Ачкыч коюлган/кошулган",
    connectionRestored: "Байланыш калыбына келтирилди",
    socketDisconnected: "Ажыратылды",
    socketError: "Байланыш катасы",
    deletedHashKey: "Хэш ачкычы жок кылынды",
    deletedSetMember: "Жыйын мүчөсү жок кылынды",
    deletedListElement: "Тизме элементи жок кылынды",
    deletedZSetMember: "Сорттолгон жыйын мүчөсү жок кылынды",
    deletedStreamTimestamp: "Агым жазуусу жок кылынды",
  },
  code: {
    "delete-connection": "Бул туташуу өчүрүлдү, андыктан сиз бул Redis инстанциясына ажыратылдыңыз.",
    "save-connection": "Бул туташуу өзгөртүлдү, андыктан сиз бул Redis инстанциясынан ажыратылдыңыз. Сиз кайра туташа аласыз.",
    "readonly-connections": "Туташууларды кошуу/сактоо/жок кылуу окуу үчүн гана!",
    "readonly-connection-mode": "Бул байланыш окуу гана режими!",
    "list-out-of-bounds": "Бул тизме индекси чектен чыккан",
    "invalid-json-value": "Маани жарактуу эмес JSON.",
    "http_auth_required": "Авторизация талап кылынат: HTTP Basic Auth менен аныктыгын текшерип, кайра жүктөңүз.",
    "auto-connection-failed": "Мүмкүн, туташуу өчүрүлүп, автоматтык туташуу ишке ашпай калды, ушундан улам.",
    invalid_console_command: "Бул буйрук GUI аркылуу иштебейт.",
    "AI_DISABLED": "AI өчүрүлгөн. AI жөндөөлөрүндө иштетиңиз.",
    "AI_PROMPT_REQUIRED": "AI суроосу талап кылынат.",
    "GROQ_API_KEY_READONLY": "Groq API ачкычы окуу үчүн гана жана өзгөртүүгө болбойт.",
    "blocked_api_access": "Groq API планыңыз бул моделге кирүүгө уруксат бербейт. Groq планын жаңыртыңыз же network.corifeus.com проксисин колдонуңуз.",
    "rate_limit": "AI ылдамдык чегине жетти. Кийинчерээк кайталаңыз же жөндөөлөрдө өз Groq API ачкычыңызды колдонуңуз."
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
      keyCount: (opts) => {
        return `Ачкычтардын саны: ${opts?.keyCount ?? 0}`;
      },
      label: {
        animation: "Анимацияны колдонуңуз",
        noAnimation: "Анимация жок",
        undoEnabled: "\u0410\u0440\u0442\u043a\u0430 \u043a\u0430\u0439\u0442\u0430\u0440\u0443\u0443 \u043a\u04af\u0439\u0433\u04af\u0437\u04af\u043b\u0433\u04e9\u043d",
        undoDisabled: "\u0410\u0440\u0442\u043a\u0430 \u043a\u0430\u0439\u0442\u0430\u0440\u0443\u0443 \u04e9\u0447\u04af\u0440\u04af\u043b\u0433\u04e9\u043d",
        diffEnabled: "\u0421\u0430\u043a\u0442\u043e\u043e\u0434\u043e\u043d \u043c\u0443\u0440\u0434\u0430 diff \u043a\u04e9\u0440\u0441\u04e9\u0442",
        diffDisabled: "\u0421\u0430\u043a\u0442\u043e\u043e\u0434\u043e\u043d \u043c\u0443\u0440\u0434\u0430 diff \u04e9\u0447\u04af\u0440\u04af\u043b\u0433\u04e9\u043d",
        jsonFormatTwoSpace: "JSON форматын 2 боштук менен түзүңүз",
        jsonFormatFourSpace: "4 боштук менен JSON форматтаңыз",
        formName: "Redis орнотуулары",
        searchModeClient: "Кардар издөө режими",
        searchModeServer: "Сервер издөө режими",
        searchModeStartsWith: "Издөө режими менен башталат",
        searchModeIncludes: "Издөө режимин камтыйт"
      },
      undoHint: "\u0410\u0440\u0442\u043a\u0430 \u043a\u0430\u0439\u0442\u0430\u0440\u0443\u0443 string \u0436\u0430\u043d\u0430 JSON \u0430\u0447\u043a\u044b\u0447 \u0442\u04af\u0440\u043b\u04e9\u0440\u04af \u04af\u0447\u04af\u043d \u0433\u0430\u043d\u0430 \u0436\u0435\u0442\u043a\u0438\u043b\u0438\u043a\u0442\u04af\u04af",
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
        value: "Нарк",
        errorRate: "Ката деңгээли",
        capacity: "Сыйымдуулук",
        topk: "Top K",
        width: "Туурасы",
        depth: "Тереңдиги",
        decay: "Ыдыроо",
        compression: "Кысуу",
        increment: "Өсүш",
        item: "Элемент",
        vectorValues: "Вектор маанилери (үтүр менен бөлүнгөн)",
        element: "Элемент аталышы",
      },
      error: {
        streamTimestamp: "Redis форматында же * катары убакыт белгиси талап кылынат",
        key: "Негизгиси, жок эле дегенде, бир каарман",
        hashKey: "Хэш таблицанын ачкычы жок дегенде бир белгиден турат",
        score: "Сорттолгон упай талап кылынат",
        value: "Маани талап кылынат",
        errorRate: "Ката деңгээли 0 менен 1 ортосунда болушу керек (мис. 0.01)",
        capacity: "Сыйымдуулук оң бүтүн сан болушу керек",
        topk: "Top K оң бүтүн сан болушу керек",
        width: "Туурасы оң бүтүн сан болушу керек",
        depth: "Тереңдиги оң бүтүн сан болушу керек",
        item: "Элемент талап кылынат"
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
      hybridMode: "Гибриддик издөө (FT.HYBRID)",
      vectorField: "Вектор талаасы",
      vectorValues: "Вектор маанилери",
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
      noSlowQueries: "Жай сурамдар жазылган жок.",
      confirmSlowLogReset: "Чын эле жай таржымалын баштапкы абалга келтиргиңиз келеби?",
      slowLogResetDone: "Жай журнал баштапкы абалга келтирилди.",
      totalCommands: "Бардыгы",
      expired: "Мөөнөтү бүткөн",
      evicted: "Чыгарылган",
      clientList: "Кардарлар тизмеси",
      topKeys: "Эстутум боюнча чоң ачкычтар",
      killClient: "Кардарды токтотуу",
      clientKilled: "Кардар токтотулду",
      confirmKillClient: "Бул кардарды токтотууга ишенесизби?",
      noKeys: "Ачкычтар жок",
      rss: "RSS",
      peak: "Чокусу",
      fragmentation: "Фрагментация",
      hitsAndMisses: "Тийгендер / Өтүп кеткендер",
      noClients: "Кардарлар жок",
      slotStats: "Кластер слот статистикасы",
      serverInfo: "Сервер маалыматы",
      os: "Операция системасы",
      port: "Тармак порту",
      pid: "Процесс ID",
      configFile: "Конфигурация файлы",
      uptime: "Иштөө убактысы",
      keyspace: "Redis ачкыч мейкиндиги",
      keys: "Redis баскычтары",
      expires: "Мөөнөтү бүтөт",
      noKeyspace: "Ачкычтар жок",
      persistence: "Маалыматтын туруктуулугу",
      rdbLastSave: "RDB Акыркы сактоо",
      rdbStatus: "RDB абалы",
      rdbChanges: "Акыркы сакталгандан берки өзгөрүүлөр",
      aofEnabled: "AOF иштетилген",
      aofSize: "AOF өлчөмү",
      replication: "Redis репликациясы",
      role: "Репликация ролу",
      replicas: "Туташкан репликалар",
      masterHost: "Негизги хост",
      linkStatus: "Репликация шилтемесинин абалы",
      cpu: "CPU колдонуу",
      cpuSys: "Система",
      cpuUser: "Колдонуучу",
      modules: "Redis модулдары жүктөлдү",
      noModules: "Redis модулдары жүктөлгөн жок",
      clusterSlotMap: "Redis кластердик слот картасы",
      slotRange: "Кластер уячасынын диапазону",
      totalSlots: "Жалпы кластердик уячалар",
      noClusterData: "Redis кластеринин маалыматы жок.",
    },
    analysis: {
      title: "Эс тутум талдоосу",
      runAnalysis: "Талдоону баштоо",
      running: "Талдануда...",
      typeDistribution: "Түр боюнча бөлүштүрүү",
      prefixMemory: "Префикс боюнча эс тутум",
      topKeysByMemory: "Эс тутум боюнча эң чоң ачкычтар",
      expirationOverview: "Ачкыч мөөнөтү",
      memoryBreakdown: "Эс тутум бөлүнүшү",
      keysScanned: "Сканерленген ачкычтар",
      totalMemory: "Жалпы эс тутум",
      rssMemory: "RSS эс тутум",
      peakMemory: "Чокусу эс тутум",
      luaMemory: "Lua эс тутум",
      overheadMemory: "Кошумча жүк",
      datasetMemory: "Маалымат жыйындысы",
      fragmentation: "Фрагментация",
      allocator: "Бөлүштүрүүчү",
      withTTL: "TTL менен",
      persistent: "Туруктуу",
      avgTTL: "Орточо TTL",
      prefix: "Префикс",
      keyCount: "Ачкыч саны",
      memoryUsage: "Эс тутум колдонуу",
      noPrefix: "(префикссиз)",
      topN: "Top N",
      maxScanKeys: "Макс. сканерлөө ачкычтары",
      type: "Түр",
      noData: "Маалымат жок. Баштоо үчүн Талдоону баштоо баскычын басыңыз.",
      exportAll: "Баарын экспорттоо",
      memoryDoctor: "Memory Doctor",
      doctorNoData: "Memory Doctor диагностикасын иштетүү үчүн Жаңылоо чыкылдатыңыз.",
    },
    acl: {
      title: "ACL колдонуучулары",
      loadUsers: "Колдонуучуларды жүктөө",
      loading: "Жүктөлүүдө...",
      username: "Колдонуучунун аты",
      status: "Статус",
      enabled: "Иштетилди",
      disabled: "Өчүрүлгөн",
      commands: "Командалар",
      commandsHint: "мис., +@all or +@read -@dangerous",
      keys: "Redis ачкычтары үчүн үлгүлөр",
      keysHint: "мис., ~* or ~user:*",
      channels: "Pub/Sub каналдары",
      channelsHint: "мис., &* or &notifications:*",
      password: "Сырсөз",
      noPassword: "Сырсөз жок (жок)",
      passwordHint: "Учурдагы сырсөздү сактоо үчүн бош калтырыңыз",
      currentUser: "Учурдагы",
      createUser: "Колдонуучу түзүү",
      editUser: "Колдонуучуну түзөтүү",
      deleteUser: "Жок кылуу",
      confirmDelete: "ACL колдонуучуну чын эле жок кылгыңыз келеби?",
      userDeleted: "ACL колдонуучусу жок кылынды.",
      userSaved: "ACL колдонуучусу сакталды.",
      cannotDeleteDefault: "Демейки колдонуучуну жок кылуу мүмкүн эмес.",
      cannotDeleteSelf: "Учурда туташкан колдонуучуну жок кылуу мүмкүн эмес.",
      noUsers: "ACL үчүн Redis 6.0+ талап кылынат.",
      groupCommon: "Жалпы",
      groupDataTypes: "Маалымат түрлөрү",
      groupOperations: "Операциялар",
      rules: "Эрежелер",
      rulesHint: "Боштук менен бөлүнгөн токендер (мисалы, on >password +@all ~* &*)",
      defaultUserWarning: "Эскертүү: Демейки колдонуучуну өзгөртүү бардык байланыштарды бөгөттөп салышы мүмкүн. Мындай болуп калса, кирүү мүмкүнчүлүгүн калыбына келтирүү үчүн Redisди өчүрүп күйгүзүшүңүз же redis-cli колдонушуңуз керек болот.",
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
        compression: "Кысуу",
        aiRateLimited: "AI суроо-талаптар чегине жетти. Кийинчерээк кайра аракет кылыңыз же Жөндөөлөрдө өзүңүздүн Groq API ачкычыңызды колдонуңуз.",
        aiError: "AI суроо-талап ишке ашкан жок",
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
      },
      timeseries: {
        chart: "Диаграмма",
        info: "Маалымат",
        addPoint: "Маалымат чекити кошуу",
        from: "Баштоо (ms же -)",
        to: "Аяктоо (ms же +)",
        aggregation: "Агрегация",
        timeBucket: "Чака (ms)",
        none: "Жок",
        dataPoints: "маалымат чекиттери",
        labels: "Энбелгилер",
        rules: "Эрежелер",
        retention: "Сактоо",
        timestamp: "Убакыт белгиси",
        value: "Маани",
        retentionHint: "0 = мөөнөтү жок, же миллисекунд",
        duplicatePolicy: "Кайталоо саясаты",
        labelsHint: "ачкыч1 маани1 ачкыч2 маани2",
        timestampHint: "'*' автоматтык түрдө түзүлөт, же миллисекунд убакыт белгиси",
        editAllHint: "Бир сапка бир маалымат чекити: убакыт_белгиси маани (убакыт белгиси * авто үчүн болот)",
        autoSpread: "Авто * жайылтуу аралыгы",
        formula: "Формула",
        formulaLinear: "Сызыктуу",
        formulaRandom: "Кокустук",
        formulaSawtooth: "Араа тиш",
        formulaPoints: "Чекиттер",
        formulaAmplitude: "Амплитуда",
        formulaOffset: "Оффсет",
        generate: "Түзүү",
        exportChart: "PNG экспорттоо",
        overlay: "Үстүнө коюу ачкычтары",
        overlayHint: "Үтүр менен бөлүнгөн ачкычтар",
        mrangeFilter: "Энбелги чыпкасы",
        bulkMode: "Массалык генерация",
        mrangeHint: "мис. sensor=temp"
      },
      probabilistic: {
        info: "Маалымат",
        addItem: "Элемент кошуу",
        checkItem: "Элементти текшерүү",
        item: "Элемент",
        exists: "Бар",
        doesNotExist: "Жок",
        topkList: "Мыкты элементтер",
        topkCount: "Сан",
        queryCount: "Суроо саны",
        queryResult: "Суроо натыйжасы",
        addedSuccessfully: "Элемент ийгиликтүү кошулду",
        deletedSuccessfully: "Элемент ийгиликтүү жоюлdu",
        quantile: "Квантиль",
        quantileResult: "Натыйжа",
        noItems: "Көрсөтүлө турган элементтер жок",
        resetConfirm: "Бул T-Digest ичиндеги бардык маалыматтарды баштапкы абалга келтирүүбү?"
      },
      vectorset: {
        info: "Маалымат",
        elements: "Элементтер",
        similarity: "Окшоштук издөө",
        searchByElement: "Элемент боюнча издөө",
        searchByVector: "Вектор боюнча издөө",
        vectorValues: "Вектор маанилери",
        element: "Элемент",
        score: "Упай",
        count: "Саны",
        addElement: "Элемент кошуу",
        attributes: "Атрибуттар",
        noAttributes: "Атрибуттар жок",
        dimensions: "Өлчөмдөр",
        removeConfirm: "Бул элементти VectorSet-тен алып салуу керекпи?",
        noElements: "Элементтер жок",
        filter: "Чыпка",
        searchComplete: "Издөө аяктады",
      }
    },
    treeControls: {
      settings: "Дарак орнотуулары",
      expandAll: "Баарын кеңейтүү",
      collapseAll: "Баарын жыйноо",
      level: "Деңgeeл",
      search: {
        search: "Ачкычтардан издеңиз",
        clear: "Бош коюу үчүн учурдагы издөөнү тазалаңыз",
        placeholderClient: "Кардар тарабынан издөө",
        placeholderServer: "Издөө сервер тарабы",
        info: (opts) => "Кардар тарабынан издөө дегенди билдирет, ал издөө киргизүүсүндөгү текстке дал келет. Сервер тарабындагы издөө *{search-text}* сыяктуу ачкыч үлгүлөрү боюнча издөөгө окшош. Чоң издөө топтомдору үчүн сервердик издөөнү колдонуу жакшы. Кичинекей издөө топтомдору үчүн кардар тарабынан издөө режимин колдонуу жакшы." + ` Эгер ачкычтарды эсептөө бүтсө ${opts?.maxLightKeysCount ?? 110000}, сиз сервер тараптан гана издей аласыз.`,
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
    years: "жыл",
    months: "айлар",
    days: "күн",
    year: "жыл",
    month: "ай",
    day: "күн",
    second: "секунд",
    seconds: "секунд",
    minute: "мүнөт",
    minutes: "мүнөт",
    hour: "саат",
    hours: "саат"
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
    bloom: "Bloom чыпкасы",
    cuckoo: "Cuckoo чыпкасы",
    topk: "Top-K",
    cms: "Count-Min Sketch",
    tdigest: "T-Digest",
    vectorset: "VectorSet",
  },
  promo: {
    title: "AI тармак жардамчысы",
    description: "network.corifeus.com сайтындагы акысыз AI тармак жардамчыбызды колдонуп көрүңүз. Домендерди, IP даректерди, DNS жазууларын, SSL сертификаттарын, электрондук почта коопсуздугун жана тармак инфраструктурасын талдаңыз. AI ыкчам жана толук жыйынтыктарды берет.",
    disclaimer: "Бул промо демо сайтта гана көрсөтүлөт жана Docker, Electron же web app жайгаштырууларында көрүнбөйт.",
    toastMessage: "network.corifeus.com сайтындагы акысыз AI тармак жардамчыбызды байкап көрүңүз. Домендерди, DNS, SSL жана башкаларды талдаңыз!",
    visit: "network.corifeus.com сайтына өтүү",
  }
};
module.exports = strings;
