const strings = {
  error: {
    server_error: "Սերվերի սխալ, խնդրում ենք կրկին փորձել"
  },
  title: {
    donate: "Նվիրաբերել",
    jsonRecursive: "Ընդլայնելով բոլոր տերևները",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "Դուք կարող եք ընտրել Redis կապ՝ ներքևի ձախ ցանկից միանալու համար:",
    statistics: "Վիճակագրություն",
    error: "Սխալ",
    connectingRedis: "Միացում Redis-ին...",
    socketioConnectError: "Socket.IO Սխալ",
    db: "DB",
    server: "Սերվեր",
    clients: "Հաճախորդներ",
    memory: "Հիշողություն",
    persistence: "Համառություն",
    stats: "Վիճակագրություն",
    replication: "Կրկնօրինակում",
    cpu: "CPU",
    cluster: "Cluster",
    modules: "Մoդուլներ",
    errorstats: "errorstats",
    commandstats: "commandstats",
    latencystats: "latencystats",
    keysizes: "keysizes",
    threads: "threads",
  },
  confirm: {
    dropIndex: "Vստah eq?",
    uploadBuffer: "Վստա՞հ եք վերբեռնելու այս երկուական տվյալները:",
    uploadBufferDone: "Երկուական տվյալները վերբեռնված են",
    uploadBufferDoneAndSave: "Երկուական տվյալները վերբեռնվում և պահվում են սերվերում",
    title: "Հաստատել",
    alert: "Զգուշացում",
    info: "Ինֆո",
    deleteListItem: "Վստա՞հ եք ջնջելու այս ցանկի տարրը:",
    deleteHashKey: "Վստա՞հ եք ջնջելու այս հեշ բանալի տարրը:",
    deleteStreamTimestamp: "Վստա՞հ եք ջնջելու այս հոսքի ժամանակի դրոշմը:",
    deleteSetMember: "Վստա՞հ եք ջնջելու այս խմբի անդամին:",
    deleteZSetMember: "Վստա՞հ եք ջնջելու այս տեսակավորված խմբի անդամին:",
    deleteConnection: "Հաստատել",
    deleteConnectionText: "Վստա՞հ եք ջնջելու այս Redis կապը:",
    delete: "Ջնջե՞լ:",
    deleteNode: "Վստա՞հ եք ջնջելու այս Redis հանգույցը:",
    deleteAllKeys: opts => {
      return `Ջնջել այս ծառը և դրա բոլոր բանալիները (${opts.key})?`;
    },
    deleteSearchKeys: opts => {
      return `Վստա՞հ եք ջնջելու բոլոր բանալիները, որոնք համապատասխանում են "${opts.pattern}"-ին? Գտնվել է ${opts.count} բանալի.`;
    },
    socketioConnectError: "Socket.IO-ը չի կարող միանալ սերվերին, կարող եք վերաբեռնել և փորձել ինքներդ լուծել կապի սխալը, հաճախորդը չգիտի, թե ինչպես լուծել այն:",
    socketioAuthRequired: "Socket.IO թույլտվություն է պահանջվում: Խնդրում ենք նույնականացնել HTTP Basic Auth-ով (օգտանուն/գաղտնաբառ) և վերաբեռնել:",
    deleteKey: "Վստա՞հ եք ջնջելու այս բանալին:",
    rename: {
      title: "Վստա՞հ եք վերանվանելու այս բանալին:",
      textContent: "Այս գործողությամբ բանալին ընդմիշտ վերանվանվում է:",
      placeholder: "Redis բանալի (պարտադիր)"
    },
    ttl: {
      title: "Իսկապե՞ս ուզում եք փոխել այս բանալին TTL:",
      textContent: "TTL-ի փոփոխությունը թարմացնում է այս բանալին ապրելու ժամանակը: Դատարկ թողեք այս բանալին ընդմիշտ պահելու համար:",
      placeholder: "Redis բանալի TTL (ամբողջական կամ դատարկ)",
      placeholderPlaceholder: "Դատարկ նշանակում է, որ այն պահպանվում է ընդմիշտ. հակառակ դեպքում մուտքագրեք ամբողջ թիվ:",
      convertTextToTime: "Փոխարկել տեքստը ժամանակի",
      convertTextToTimePlaceholder: "Օրինակ. 1d-ը կլինի 86400"
    },
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
    copy: "Պատճենել",
    downloadBuffer: "Ներբեռնեք երկուական",
    setBuffer: "Վերբեռնեք երկուական",
    exportKeys: "Արտահանել բանալիները",
    exportAllKeys: (opts) => `Արտահանել բոլոր ${opts.count} բանալի`,
    exportSearchResults: (opts) => `Արտահանել ${opts.count} արդյունք`,
    deleteAllKeysMenu: (opts) => `Delete all ${opts.count}`,
    importKeys: "Ներմուծել բանալիներ",
    deleteSearchKeys: (opts) => `Ջնջել ${opts.count} համապատասխող բանալիներ`,
    saveWithFormatJson: "Պահպանել ձևաչափով",
    formatJson: "Ձևաչափեք Json",
    wrap: "Փաթաթել",
    unwrap: "Փաթաթել",
    downloadJson: "Ներբեռնեք JSON",
    pubsubMonitor: "PubSub",
    pulse: "Pulse",
    profiler: "Profiler",
    memoryAnalysis: "Analysis",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "Լեզու",
    ok: "Լավ",
    addKey: "Ավելացնել այս բանալին",
    addKeyRoot: "Ավելացնել արմատային բանալի",
    reloadKey: "Վերբեռնել բանալին",
    reload: "Վերբեռնել",
    close: "Փակել",
    commands: "Հրամաններ",
    view: "Դիտել",
    statistics: "Վիճակագրություն",
    refresh: "Թարմացնել",
    pause: "Դadar",
    resume: "Շarunakել",
    clear: "Պարզ",
    rename: "Վերանվանել",
    main: "Տատաբազա",
    cancel: "Չեղարկել",
    theme: "Թեմա",
    github: "GitHub",
    githubRepo: "Պահեստարան",
    githubRelease: "Թողարկումներ",
    githubChangelog: "Փոփոխություններ",
    info: "Info",
    settings: "Կարգավորումներ",
    connect: "Միացնել",
    disconnect: "Անջատել",
    overview: "Ընդհանուր ակնարկ",
    console: "Վահանակ",
    noConnections: "Կապ չկա, ավելացրեք կապ կարգավորումների ցանկում:",
    noConnectionsInSettings: "Կապ չկա, վերևում կարող եք ավելացնել ՆՈՐ ՄԻԱՑՈՒՄ:",
    connectionAdd: "Նոր կապ",
    addGroup: "Ավելացնել խումբ",
    extend: "Ընդլայնել",
    collapse: "Փլուզվել",
    add: "Ավելացնել",
    edit: "Խմբագրել",
    save: "Պահպանել",
    ttl: "Սահմանել TTL",
    delete: "Ջնջել",
    remove: "Հեռացնել",
    sure: "Իհարկե",
    testConnection: "Փորձնական կապ",
    getKey: "Բեռնվում է Redis բանալի և հարակից տվյալները...",
    jsonViewShow: "Ցուցադրել JSON",
    jsonViewEditor: "Խմբագրել JSON",
    quickConsole: "Արագ կոնسول",
  },
  label: {
    id: {
      nodeId: "Հանգույցի ID",
      id: "Միացման ID",
      info: "Եթե չեք ցանկանում փոխել sshPassword, sshPrivateKey, գաղտնաբառը, tlsCrt, tlsKey, tlsCa-ի հատկությունները, խնդրում ենք մուտքագրել կապի ID-ն այդ հատկություններում՝ գույքի արժեքները անփոփոխ պահելու համար: Եթե ​​ցանկանում եք նույն տրամաբանությունը հանգույցի գաղտնաբառում, ապա մուտքագրեք հանգույցի ID-ն հանգույցի գաղտնաբառում:"
    },
    secureFeature: "Եթե տեսնում եք մի արժեք, որը սկսվում է P3X-ով և նման է նույն տեսքին, դա ապահով հատկություն է: Պարամետրերը փոխելու համար պարզապես փոխարինեք այս կարգավորումները դատարկ կամ այլ բանով, և դրանք կպահպանվեն: Եթե ​​դուք չեք փոխում կարգավորումները, կարգավորումները կպահվեն այնպես, ինչպես կան սերվերում:",
    aiTranslating: "\u0539\u0561\u0580\u0563\u0574\u0561\u0576\u0578\u0582\u0574...",
    aiSettings: "AI \u053f\u0561\u0580\u0563\u0561\u057e\u0578\u0580\u0578\u0582\u0574\u0576\u0565\u0580",
    aiGroqApiKey: "Groq API \u0562\u0561\u0576\u0561\u056c\u056b",
    aiGroqApiKeyInfo: "\u0538\u0576\u057f\u0580\u0578\u057e\u056b\u0589 \u0541\u0565\u0580 Groq API \u0562\u0561\u0576\u0561\u056c\u056b\u0576\u0589 \u0531\u0576\u057e\u0573\u0561\u0580 \u0562\u0561\u0576\u0561\u056c\u056b \u057d\u057f\u0561\u0576\u0561\u056c\u0578\u0582",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "AI API \u0562\u0561\u0576\u0561\u056c\u056b\u0576 \u057a\u0561\u0570\u057a\u0561\u0576\u057e\u0565\u056c \u0567",
    aiGroqApiKeyInvalid: "Invalid Groq API key",
    aiGroqApiKeyNotSet: "\u054d\u0561\u0570\u0574\u0561\u0576\u057e\u0561\u056e \u0579\u0567 (\u057d\u0565\u0580\u057e\u0565\u0580\u056b \u056c\u0580\u0561\u0581\u0578\u0582\u0574)",
    aiEnabled: "AI Enabled",
    aiEnabledYes: "Yes",
    aiEnabledNo: "No",
    aiRouteViaNetwork: "Route via network.corifeus.com",
    aiRoutingDirect: "Queries go directly to Groq using your own API key, bypassing network.corifeus.com.",
    aiRoutingNetwork: "AI queries are routed through network.corifeus.com. If you have your own free Groq API key, you can turn off this switch to route directly to Groq without network.corifeus.com.",
    ssh: {
      on: "SSH միացված է",
      off: "SSH անջատված է",
      sshHost: "SSH հյուրընկալող",
      sshPort: "SSH նավահանգիստ",
      sshUsername: "SSH օգտվողի անուն",
      sshPassword: "SSH գաղտնաբառը",
      sshPrivateKey: "SSH անձնական բանալի"
    },
    isBuffer: opts => `[object ArrayBuffer] նշանակում է, որ արժեքը երկուական տվյալ է կամ արժեքը ավելի մեծ է, քան ${opts.maxValueAsBuffer}`,
    streamValue: `Հոսքի դաշտը և արժեքը մեկ գիծ է: Օրինակ՝ դաշտ1 արժեք1 «դաշտ 2» «արժեք 2»`,
    streamTimestampId: `«*» նշանակում է ավտոմատ գեներացված կամ բնութագրում որպես <millisecondsTime>-<sequenceNumber>`,
    unableToLoadKey: ({
      key
    }) => {
      return `Հնարավոր չէ բեռնել այս բանալին. ${key}. Հնարավոր է, բանալին ջնջվել է: Ճշգրիտ սխալը գտնվում է վահանակում:`;
    },
    bigJson: "Այս JSON օբյեկտը ավելի քան 10 կբ է, այնպես որ համոզվեք, որ գիտեք, թե ինչ եք անում, քանի որ որոշ գործառույթներ կարող են դանդաղ մատուցվել:",
    addNode: "Ավելացնել հանգույց",
    validateJson: "Վավերացնել JSON",
    reducedFunction: `Նվազեցված ֆունկցիոնալությունը`,
    tooManyKeys: opts => {
      return `Լրիվ առավելագույն գործառույթների համար թույլատրված ստեղները ընդհանուր է ${opts.maxLightKeysCount} հաշվել. Այս տվյալների բազան ընդհանուր առմամբ ունի ավելի քան թույլատրելի ստեղներ ${opts.count}. Բանալների տեսակավորումը և ծառերի լրացուցիչ երևակայական տեղեկությունները անջատված են: Որոնումը կատարվում է միայն սերվերի վրա՝ հաճախորդի որոնման փոխարեն:`;
    },
    redisCommandNotFound: "Redis հրամանի համընկնում չի գտնվել…",
    treeKeyStore: `Տեսակավորումը (բնական համեմատությունը) իրականացվում է հաճախորդի վրա, որը կոչվում է բրաուզեր, ինչը նշանակում է, որ այն ունի տուգանք մեծ մեծ հավաքածուների համար, ինչպիսիք են ավելի քան 10 հազար ստեղները, այն կարող է մի փոքր ժամանակ ավելացնել էջի մատուցմանը: Redis-ում բանալիների տեսակավորում չկա, միայն այսպես.`,
    socketIoTimeout: options => {
      return `Socket.IO-ի ժամանակը սպա��վել է այս հարցման համար (առավել ${options.timeout / 1000} վայրկյան)...`;
    },
    resizerInfo: options => {
      return `Ձախ կամ աջ վահանակի նվազագույն լայնությունը ${options.width}px`;
    },
    jsonViewNotParsable: "Այս արժեքը JSON վերլուծելի չէ  ",
    ttlTitle: "Սահմանեք TTL-ը վայրկյանների ընթացքում",
    passwordSecure: "Գաղտնաբառը կարող է դատարկ լինել, բայց այն դեռ ցույց կտա նիշեր, սա անվտանգության հատկանիշ է:",
    tlsWithoutCert: "Միացնել TLS-ն առանց լրացուցիչ վկայագրի",
    tlsRejectUnauthorized: "Մերժել չարտոնված վկայականը",
    tlsSecure: "Եթե տեսնում եք TLS կոնֆիգուրացիա, որը սկսվում է P3X-ով կամ բոլոր TLS կարգավորումները նույնն են թվում, դա ապահով հատկություն է: Պարամետրերը փոխելու համար պարզապես փոխարինեք այս կարգավորումները դատարկ կամ այլ բանով, և դրանք կպահպանվեն: Եթե ​​չ��ոխեք TLS-ի կարգավորումները, կարգավորումները կպահվեն այնպես, ինչպես կան սերվերում:",
    treeSeparatorEmpty: "Եթե ծառի բաժանարարը դատարկ է, ծառը չի ունենա բնադրված հանգույցներ, պարզապես մաքուր ցուցակ",
    treeSeparatorEmptyNote: "Ոչ մի տեղավորված հանգույցներ, պարզապես մաքուր ցուցակ",
    welcomeConsole: "Բարի գալուստ Redis վահանակ",
    welcomeConsoleInfo: "Կուրսորը UP կամ DOWN պատմությունը միացված է",
    redisListIndexInfo: "Դատարկ՝ ավելացնելու համար, -1՝ այն նախապես տեղադրելու կամ պահելու համար ցուցադրված դիրքում:",
    console: "Վահանակ",
    connectiondAdd: "Ավելացնել կապ",
    connectiondEdit: "Խմբագրել կապը",
    connectiondView: "Դիտել կապը",
    connections: "Միացումներ",
    keysSort: {
      on: "Բանալների տեսակավորումը միացված է",
      off: "Բանալին դասավորվում է"
    },
    cluster: {
      on: "Cluster միացված է",
      off: "Cluster անջատված է"
    },
    sentinel: {
      on: "Sentinel միացված է",
      off: "Sentinel անջատված է",
      name: "Sentinel անունը"
    },
    readonly: {
      on: "Միայն կարդալու միացված է",
      off: "Միայն կարդալու անջատված է"
    },
    theme: {
      light: "Լույս",
      dark: "Մութ ձեռնարկություն",
      darkNeu: "Մութ",
      darkoBluo: "Դարկո բլյու",
      enterprise: "Ձեռնարկություն",
      redis: "Redis",
      matrix: "Մատրիցա"
    },
    connected: opts => {
      return `Միացված է՝ ${opts.name}`;
    },
    tree: "Ծառ",
    askAuth: "Խնդրեք թույլտվություն",
    keyboardShortcuts: "Keyboard Shortcuts",
    about: "About",
    supportedLanguages: "Supported Languages",
    version: "Version",
    redisVersion: "Redis Version",
    modules: "Մoդուլներ",
    shortcutRefresh: "Refresh",
    shortcutSearch: "Focus Search",
    shortcutNewKey: "New Key",
    shortcutDisconnect: "Անջատել",
    themeAuto: "Auto (system)",
    shortcutCommandPalette: "Command Palette",
    commandPalette: "Command Palette",
    noResults: "No results",
    redisCommandsReference: "Redis Հրամաններ",
    ungrouped: "Չխմբավորված",
    grouped: "Grouped",
    connectFirst: "connectFirst",
    searchLanguage: "Որոնել լեզու...",
    exportProgress: "Արտահանում են բանալիները...",
    importProgress: "Ners բdelay...",
    importPreview: "Նախադիտարկում",
    importOverwrite: "Delays",
    importSkip: "Delays",
    importConflict: "Եթե բանալին արդեն գոյություն ունի:",
    noKeysToExport: "Արտահանման բանալիներ չկան",
    time: "Ժamanak",
    type: "Type",
    format: "Format",
    loading: "Բեռնվում է...",
    autoRefresh: "Ավտո",
    exportSearchHint: "Արտահանվում են միայն ընթացիկ որոնմանը համապատասխող բանալիները",
    importSearchHint: "Ներմուծումը կիրառվում է ամբողջ տվյալների բազային",
    deleteSearchHint: "Ջնջում է սերվերի վրա ընթացիկ որոնման համապատասխող բոլոր բանալիները",
    deletingSearchKeys: "Համապատասխող բանալիների ջնջում...",
    importNoKeys: "Ֆայլում բանալիներ չկան",
  },
  status: {
    dataCopied: "Տվյալները սեղմատախտակում են",
    exportDone: "Արտահանումն ավարտվել է",
    deletedSearchKeys: (opts) => `Ջնջվել է ${opts.count} բանալի`,
    indexCreated: "Index ստeghts",
    indexDropped: "Index ջnjved",
    importDone: (opts) => `Ներմուծումն ավարտվել է: ${opts.created} ստեղծված, ${opts.skipped} բաց թողված, ${opts.errors} սխալ`,
    nodeRemoved: "Հանգույցը հեռացվեց",
    keyIsNotExisting: "Այս բանալին կարող էր ջնջվել կամ ժամկետանց լինել:",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "Բանալին չկա";
      } else if (opts.keyCount === 1) {
        return "1 բանալի";
      } else {
        return `${opts.keyCount} բանալիներ`;
      }
    },
    treeExpandAll: "Ընդարձակեք բոլոր ծառերի տերևները: Այս վիրահատությունը կարող է թանկ լինել և կարող է ժամանակ պահանջել...",
    noRedisKeys: "Այս տվյալների բազայում բանալիներ չկան:",
    redisConnected: "Redis-ը հաջողությամբ միացավ",
    reloadingDataInfo: "Redis տվյալների վերաբեռնում",
    added: "Ավելացված է",
    saved: "Թարմացվել է",
    cancelled: "Չեղարկված է",
    deleted: "Ջնջված է",
    savedRedis: "Redis տվյալները պահպանված են",
    redisDisconnected: opts => {
      return `Ընթացիկ կապը սխա�� է ունեցել. ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `db ինդեքսը սահմանվել է ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `Ծառի բանալին ջնջվել է (${opts.key})`;
    },
    deletedKey: opts => {
      return `Բանալին ջնջվել է (${opts.key})`;
    },
    renamedKey: "Այս բանալին վերանվանվել է",
    ttlChanged: "Այս բանալին TTL փոխվել է",
    notInteger: "Այս մուտքագրումը ամբողջ թիվ չէ",
    persisted: "Այս բանալին ընդմիշտ պահպանվում է",
    set: "Բանալին դրված է/ավելացվել է"
  },
  code: {
    "delete-connection": "Այս կապը ջնջվել է, ուստի դուք անջատված եք այս Redis օրինակից:",
    "save-connection": "Այս կապը փոխվել է, ուստի դուք անջատված եք այս Redis օրինակից: Դուք կարող եք նորից միանալ:",
    "readonly-connections": "Միացումներ ավելացնել/պահպանել/ջնջել միայն կարդալու են:",
    "readonly-connection-mode": "Այս կապը միայն կարդալու ռեժիմ է:",
    "list-out-of-bounds": "Ցուցակի այս ցուցանիշը սահմաններից դուրս է",
    "invalid-json-value": "Արժեքը վավեր չէ JSON:",
    "http_auth_required": "Պահանջվում է թույլտվություն. խնդրում ենք նույնականացնել HTTP Basic Auth-ով և վերաբեռնել:",
    "auto-connection-failed": "Հնարավոր է, որ կապը հեռացվել է, և ավտոմատ միացումը ձախողվել է, դրա պատճառով:",
    invalid_console_command: "Այս հրամանը չի աշխատում GUI-ի միջոցով:"
  },
  form: {
    error: {
      required: "Պահանջվում է",
      port: "Նավահանգիստը գտնվում է 1-65535-ի միջև",
      invalid: "Ձևն անվավեր է"
    },
    connection: {
      label: {
        name: "Անուն",
        group: "Group",
        host: "Հյուրընկալողի անունը",
        port: "Պորտ",
        password: "Գաղտնաբառ",
        username: "Օգտվողի անունը"
      }
    },
    treeSettings: {
      maxValueDisplay: "Առավելագույն արժեքը ցուցադրվող տողի երկարությունը",
      maxValueDisplayInfo: "Եթե դրված է 0, ցույց տվեք ամբողջական արժեքները: Եթե ​​0-ից մեծ է, կրճատեք այս երկարությամբ: Եթե ​​-1՝ տողերի համար, թաքցրեք արժեքը մինչև խմբագրումը; այլ տեսակների համար ցուցադրեք ամբողջական բովանդակությունը:",
      maxKeys: "Բանալինների առավելագույն քանակը",
      maxKeysInfo: "Որպեսզի GUI-ը չխափանի, մենք սահմանափակում ենք բանալիների առավելագույն քանակը:",
      keyCount: (opts) => {
        return `Բանալիների քանակը: ${opts?.keyCount ?? 0}`;
      },
      label: {
        animation: "Օգտագործեք անիմացիա",
        noAnimation: "Ոչ մի անիմացիա",
        jsonFormatTwoSpace: "Ձևաչափեք JSON 2 բացատով",
        jsonFormatFourSpace: "Ձևաչափեք JSON 4 բացատով",
        formName: "Redis կարգավորումներ",
        searchModeClient: "Հաճախորդի որոնման ռեժիմ",
        searchModeServer: "Սերվերի որոնման ռեժիմ",
        searchModeStartsWith: "Որոնումը սկսվում է ռեժիմից",
        searchModeIncludes: "Որոնումը ներառում է ռեժիմ"
      },
      field: {
        treeSeparator: "Ծառերի բաժանարար",
        treeSeparatorSelector: "Ծառի բաժանարար ընտրիչ",
        page: "Ծառի էջերի քանակը",
        keyPageCount: "Հիմնական էջերի քանակը",
        keysSort: "Տեսակավորել ստեղները",
        searchMode: "Որոնման ռեժիմ",
        searchModeStartsWith: "Որոնումը սկսվում է / ներառում է"
      },
      error: {
        keyPageCount: "Հիմնական էջերի քանակը պետք է լինի ամբողջ թիվ 5-ից 100-ի միջև",
        page: "Էջերի քանակը պետք է լինի ամբողջ թիվ 10-ից 5000-ի միջև",
        maxValueDisplay: "Ցուցադրման առավելագույն արժեքը պետք է լինի ամբողջ թիվ -1-ից մինչև 32768",
        maxKeys: "Բանալների քանակի առավելագույն արժեքը պետք է լինի ամբողջ թիվ 100-ից 100000-ի միջև"
      }
    },
    key: {
      label: {
        formName: {
          add: "Ավելացնել նոր Redis բանալի",
          edit: "Խմբագրել Redis ստեղնը",
          append: "Ավելացնել առկա Redis բանալիին"
        }
      },
      field: {
        streamTimestamp: "Ժամացույց",
        key: "Բանալին",
        type: "Տեսակ",
        index: "Ցուցանիշ",
        hashKey: "Հեշ բանալի",
        score: "Միավոր",
        value: "Արժեք"
      },
      error: {
        streamTimestamp: "Պահանջվում է ժամանակի դրոշմ՝ Redis ձևաչա��ով կամ որպես *",
        key: "Հիմնական բանը, առնվազն, մեկ կերպար է",
        hashKey: "Հեշ աղյուսակի ստեղնը առնվազն մեկ նիշ է",
        score: "Տեսակավորված հավաքածուի միավորը պարտադիր է",
        value: "Արժեքը պարտադիր է"
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
      title: "Որոնում",
      index: "Ինդեքս",
      query: "Հարցում",
      results: "Արդյունքներ",
      noIndex: "Ինդեքսներ չկան",
      createIndex: "Ստեղծել ինդեքս",
      dropIndex: "Ջնջել ինդեքս",
      indexInfo: "Ինդեքսի տեղեկություն",
      indexName: "Ինդեքսի անուն",
      prefix: "Բանալի նախածանց (կամընտրական)",
      fieldName: "Դաշտի անուն",
    },
    monitor: {
      title: "Մոնիտորինգ",
      memory: "Հիշողություն",
      opsPerSec: "Ops/վ",
      clients: "Հաճախորդներ",
      blocked: "Արգելափակված",
      hitsMisses: "Հարվածների տոկոս",
      networkIo: "Ցանց I/O",
      slowLog: "Դանդաղ գրանցում",
      totalCommands: "Ընդհանուր",
      expired: "Լրացած",
      evicted: "Հեռացված",
      clientList: "Հաճախորդների ցանկ",
      topKeys: "Մեծ բանալիներ ըստ հիշողության",
      killClient: "Դադարեցնել հաճախորդը",
      clientKilled: "Հաճախորդը դադարեցված է",
      confirmKillClient: "Vստah eq klientin?",
      noKeys: "Բանալիներ չկան",
      rss: "RSS",
      peak: "Գագաթնակետ",
      fragmentation: "Մասնատվածում",
      hitsAndMisses: "Հարվածներ / Վրիպներ",
      noClients: "Հաճախորդներ չկան",
    },
    analysis: {
      title: "Հիշողություն վերլուծություն",
      runAnalysis: "Գործարկել վերլուծությունը",
      running: "Վերլուծում...",
      typeDistribution: "Տիպերի բաշսվածում",
      prefixMemory: "Հիշողություն ըստ նախածանցի",
      topKeysByMemory: "Մեծ բանալիներ ըստ հիշողության",
      expirationOverview: "Բանալիների ժամկետ",
      memoryBreakdown: "Հիշողությունի բաշսում",
      keysScanned: "Սկանավորված բանալիներ",
      totalMemory: "Ընդհանուր հիշողություն",
      rssMemory: "RSS հիշողություն",
      peakMemory: "Գագաթնակետ հիշողություն",
      luaMemory: "Lua հիշողություն",
      overheadMemory: "Լրացուցիչ ծանրաբեռնվածություն",
      datasetMemory: "Տվյալների հավաքածու",
      fragmentation: "Մասնատվածում",
      allocator: "Հատկացնող",
      withTTL: "TTL-ով",
      persistent: "Մշտապես",
      avgTTL: "Միջին TTL",
      prefix: "Նախածանց",
      keyCount: "Բանալիների քանակը",
      memoryUsage: "Հիշողությունի օգտագործում",
      noPrefix: "(առանց նախածանցի)",
      topN: "Top N",
      maxScanKeys: "Առավելագույն սկանավորման բանալիներ",
      type: "Տիպ",
      noData: "Տվյալներ չկան։ Սեղմեք Գործարկել վերլուծությունը սկսելու համար։",
      exportAll: "Արտահանել ամբողջը",
    },

    overview: {
      noConnected: "Redis-ի հետ կապ չկա:",
      overviewClients: "Թվարկե՛ք կապակցվածները՝ ըստ հաճախորդների թվի",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "1 հաճախորդ";
        }
        return `${opt.length} հաճախորդներ`;
      }
    },
    key: {
      label: {
        key: "Բանալին",
        encoding: "Կոդավորում",
        compression: "Սեղմում",
        aiRateLimited: "AI հարցումների սdelays reached. Try again later or use your own Groq API key in Settings.",
        aiError: "AI query failed",
        length: "Չափը",
        ttl: "TTL",
        ttlTitle: "Ապրելու ժամանակ",
        type: "Տեսակ",
        ttlNotExpire: "չի սպառվում",
        lengthString: "բայթ",
        lengthItem: "իրեր",
        actions: "Գործողություններ"
      },
      list: {
        table: {
          index: "Ցուցանիշ",
          value: "Արժեք"
        }
      },
      hash: {
        table: {
          hashkey: "Հաշկի",
          value: "Արժեք"
        }
      },
      set: {
        table: {
          value: "Անդամ"
        }
      },
      zset: {
        table: {
          value: "Անդամ",
          score: "Միավոր"
        }
      },
      stream: {
        table: {
          timestamp: "Ժամdelays ID",
          field: "Դdelays",
          value: "Delays"
        }
      },
      timeseries: {
        chart: "\u0533\u0580\u0561\u0586\u056b\u056f",
        info: "\u054f\u0565\u0572\u0565\u056f\u0561\u057f\u057e\u0578\u0582\u0569\u0575\u0578\u0582\u0576",
        addPoint: "\u0531\u057e\u0565\u056c\u0561\u0581\u0576\u0565\u056c \u057f\u057e\u0575\u0561\u056c\u0576\u0565\u0580\u056b \u056f\u0565\u057f",
        from: "\u054d\u056f\u0566\u0562\u056b\u0581 (ms \u056f\u0561\u0574 -)",
        to: "\u0544\u056b\u0576\u0579\u0587 (ms \u056f\u0561\u0574 +)",
        aggregation: "\u0540\u0561\u057e\u0561\u0584\u0561\u056f\u0581\u0578\u0582\u0574",
        timeBucket: "\u054d\u057e\u0565\u0564 (ms)",
        none: "\u0548\u0579",
        dataPoints: "\u057f\u057e\u0575\u0561\u056c\u0576\u0565\u0580\u056b \u056f\u0565\u057f\u0565\u0580",
        labels: "\u054a\u056b\u057f\u0561\u056f\u0576\u0565\u0580",
        rules: "\u053f\u0561\u0576\u0578\u0576\u0576\u0565\u0580",
        retention: "\u054a\u0561\u0570\u057a\u0561\u0576\u0578\u0582\u0574",
        timestamp: "\u053a\u0561\u0574\u0561\u0576\u0561\u056f\u0561\u057e\u0578\u0580 \u0564\u0580\u0578\u0577\u0574\u0561\u056f",
        value: "\u0531\u0580\u056a\u0565\u0584",
        retentionHint: "0 = \u0561\u057c\u0561\u0576\u0581 \u056a\u0561\u0574\u056f\u0565\u057f\u056b \u0561\u057e\u0561\u0580\u057f\u056b, \u056f\u0561\u0574 \u0574\u056b\u056c\u056b\u057e\u0561\u0575\u0580\u056f\u0575\u0561\u0576\u0576\u0565\u0580",
        duplicatePolicy: "\u053f\u0580\u056f\u0576\u0585\u0580\u056b\u0576\u0561\u056f\u0576\u0565\u0580\u056b \u0584\u0561\u0572\u0561\u0584\u0561\u056f\u0561\u0576\u0578\u0582\u0569\u0575\u0578\u0582\u0576",
        labelsHint: "key1 value1 key2 value2",
        timestampHint: "'*' \u0576\u0577\u0561\u0576\u0561\u056f\u0578\u0582\u0574 \u0567 \u056b\u0576\u0584\u0576\u0561\u0563\u0565\u0576\u0565\u0580\u0561\u0581\u057e\u0561\u056e, \u056f\u0561\u0574 \u0574\u056b\u056c\u056b\u057e\u0561\u0575\u0580\u056f\u0575\u0561\u0576\u0576\u0565\u0580\u056b \u056a\u0561\u0574\u0561\u0576\u0561\u056f\u0561\u057e\u0578\u0580 \u0564\u0580\u0578\u0577\u0574\u0561\u056f",
        editAllHint: "\u0544\u0565\u056f \u057f\u057e\u0575\u0561\u056c\u0576\u0565\u0580\u056b \u056f\u0565\u057f \u0574\u0565\u056f \u057f\u0578\u0572\u0578\u0582\u0574\u0589 \u056a\u0561\u0574\u0561\u0576\u0561\u056f\u0561\u057e\u0578\u0580_\u0564\u0580\u0578\u0577\u0574\u0561\u056f \u0561\u0580\u056a\u0565\u0584 (\u056a\u0561\u0574\u0561\u0576\u0561\u056f\u0561\u057e\u0578\u0580 \u0564\u0580\u0578\u0577\u0574\u0561\u056f\u0568 \u056f\u0561\u0580\u0578\u0572 \u0567 \u056c\u056b\u0576\u0565\u056c * \u056b\u0576\u0584\u0576\u0561\u0563\u0565\u0576\u0565\u0580\u0561\u0581\u0574\u0561\u0576 \u0570\u0561\u0574\u0561\u0580)",
        autoSpread: "\u053b\u0576\u0584\u0576\u0561 * \u057f\u0561\u0580\u0561\u056e\u0574\u0561\u0576 \u0574\u056b\u057b\u0561\u056f\u0561\u0575\u0584",
        formula: "\u0532\u0561\u0576\u0561\u0571\u0587",
        formulaLinear: "\u0533\u056e\u0561\u0575\u056b\u0576",
        formulaRandom: "\u054a\u0561\u057f\u0561\u0570\u0561\u056f\u0561\u0576",
        formulaSawtooth: "\u054d\u0572\u0578\u0581\u0561\u0571\u0587",
        formulaPoints: "\u053f\u0565\u057f\u0565\u0580",
        formulaAmplitude: "\u0531\u0574\u057a\u056c\u056b\u057f\u0578\u0582\u0564",
        formulaOffset: "\u054f\u0565\u0572\u0561\u0577\u0561\u0580\u056a",
        generate: "\u0533\u0565\u0576\u0565\u0580\u0561\u0581\u0576\u0565\u056c",
        exportChart: "\u0531\u0580\u057f\u0561\u0570\u0561\u0576\u0565\u056c PNG",
        overlay: "\u054e\u0580\u0561\u0564\u0580\u0565\u056c \u057d\u057f\u0565\u0572\u0576\u0565\u0580\u0568",
        overlayHint: "\u054d\u057f\u0565\u0572\u0576\u0565\u0580\u0568 \u057d\u057f\u0578\u0580\u0561\u056f\u0565\u057f\u0578\u057e \u0561\u0576\u057b\u0561\u057f\u057e\u0561\u056e",
        mrangeFilter: "\u054a\u056b\u057f\u0561\u056f\u0576\u0565\u0580\u056b \u0566\u057f\u056b\u0579",
        bulkMode: "Bulk generate",
        mrangeHint: "\u0585\u0580. sensor=temp"
      }
    },
    treeControls: {
      settings: "\u053e\u0561\u057c\u056b \u056f\u0561\u0580\u0563\u0561\u057e\u0578\u0580\u0578\u0582\u0574\u0576\u0565\u0580\u0568",
      expandAll: "\u0538\u0576\u0564\u056c\u0561\u0575\u0576\u0565\u056c \u0562\u0578\u056c\u0578\u0580\u0568",
      collapseAll: "\u0553\u056c\u0578\u0582\u0566\u0565\u056c \u0562\u0578\u056c\u0578\u0580\u0568",
      level: "Մակdelays",
      search: {
        search: "\u0548\u0580\u0578\u0576\u0565\u056c \u057d\u057f\u0565\u0572\u0576\u0565\u0580\u056b \u0574\u0565\u057b",
        clear: "\u0544\u0561\u0584\u0580\u0565\u056c \u0568\u0576\u0569\u0561\u0581\u056b\u056f \u0578\u0580\u0578\u0576\u0578\u0582\u0574\u0568 \u0564\u0561\u057f\u0561\u0580\u056f \u057f\u0565\u0572\u0561\u0564\u0580\u0565\u056c\u0578\u0582 \u0570\u0561\u0574\u0561\u0580",
        placeholderClient: "\u0548\u0580\u0578\u0576\u0565\u056c \u0570\u0561\u0573\u0561\u056d\u0578\u0580\u0564\u056b \u056f\u0578\u0572\u0574\u0568",
        placeholderServer: "\u0548\u0580\u0578\u0576\u0565\u056c \u057d\u0565\u0580\u057e\u0565\u0580\u056b \u056f\u0578\u0572\u0574\u0568",
        info: (opts) => "\u0540\u0561\u0573\u0561\u056d\u0578\u0580\u0564\u056b \u056f\u0578\u0572\u0574\u056b\u0581 \u0578\u0580\u0578\u0576\u0578\u0582\u0574\u0568 \u0576\u0577\u0561\u0576\u0561\u056f\u0578\u0582\u0574 \u0567, \u0578\u0580 \u0561\u0575\u0576 \u0570\u0561\u0574\u0561\u057a\u0561\u057f\u0561\u057d\u056d\u0561\u0576\u0578\u0582\u0574 \u0567 \u0578\u0580\u0578\u0576\u0574\u0561\u0576 \u0574\u0578\u0582\u057f\u0584\u0561\u0563\u0580\u0574\u0561\u0576 \u057f\u0565\u0584\u057d\u057f\u056b\u0576: \u054d\u0565\u0580\u057e\u0565\u0580\u056b \u056f\u0578\u0572\u0574\u056b\u0581 \u0578\u0580\u0578\u0576\u0578\u0582\u0574\u0568 \u0576\u0577\u0561\u0576\u0561\u056f\u0578\u0582\u0574 \u0567, \u0578\u0580 \u0564\u0561 \u0576\u0574\u0561\u0576 \u0567 \u057d\u057f\u0565\u0572\u0576\u0565\u0580\u056b \u0585\u0580\u056b\u0576\u0561\u0579\u0561\u0583\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0576\u0565\u0580\u056b \u0578\u0580\u0578\u0576\u0574\u0561\u0576\u0568 \u0578\u0580\u057a\u0565\u057d *{search-text}*: \u0544\u0565\u056e \u0578\u0580\u0578\u0576\u0574\u0561\u0576 \u056d\u0574\u0562\u0565\u0580\u056b \u0570\u0561\u0574\u0561\u0580 \u0561\u057e\u0565\u056c\u056b \u056c\u0561\u057e \u0567 \u0585\u0563\u057f\u0561\u0563\u0578\u0580\u056e\u0565\u056c \u057d\u0565\u0580\u057e\u0565\u0580\u056b \u056f\u0578\u0572\u0574\u056b\u0581 \u0578\u0580\u0578\u0576\u0578\u0582\u0574\u0568: \u0531\u057e\u0565\u056c\u056b \u0583\u0578\u0584\u0580 \u0578\u0580\u0578\u0576\u0574\u0561\u0576 \u056d\u0574\u0562\u0565\u0580\u056b \u0570\u0561\u0574\u0561\u0580 \u0561\u057e\u0565\u056c\u056b \u056c\u0561\u057e \u0567 \u0585\u0563\u057f\u0561\u0563\u0578\u0580\u056e\u0565\u056c \u0570\u0561\u0573\u0561\u056d\u0578\u0580\u0564\u056b \u056f\u0578\u0572\u0574\u056b\u0581 \u0578\u0580\u0578\u0576\u0574\u0561\u0576 \u057c\u0565\u056a\u056b\u0574\u0568:" + ` \u0535\u0569\u0565 \u0562\u0561\u0576\u0561\u056c\u056b\u0576\u0565\u0580\u056b \u0570\u0561\u0577\u057e\u0561\u0580\u056f\u0576 \u0561\u057e\u0561\u0580\u057f\u057e\u0561\u056e \u0567 ${opts?.maxLightKeysCount ?? 110000}, \u056f\u0561\u0580\u0578\u0572 \u0565\u0584 \u0578\u0580\u0578\u0576\u0565\u056c \u0574\u056b\u0561\u0575\u0576 \u057d\u0565\u0580\u057e\u0565\u0580\u056b \u056f\u0578\u0572\u0574\u056b\u0581:`,
        largeSetInfo: "\u0544\u0565\u056e \u0570\u0561\u057e\u0561\u0584\u0561\u056e\u0578\u0582\u0578\u0582\u0574 \u0570\u0561\u0573\u0561\u056d\u0578\u0580\u0564\u056b \u056f\u0578\u0572\u0574\u056b\u0581 \u0578\u0580\u0578\u0576\u0578\u0582\u0574\u0576 \u0561\u0576\u057b\u0561\u057f\u057e\u0561\u056e \u0567: \u0561\u0575\u0576\u057a\u0565\u057d \u0578\u0580 \u0561\u0575\u057d \u057a\u0561\u0570\u056b\u0576 \u0570\u0576\u0561\u0580\u0561\u057e\u0578\u0580 \u0567 \u0574\u056b\u0561\u0575\u0576 \u057d\u0565\u0580\u057e\u0565\u0580\u056b \u056f\u0578\u0572\u0574\u056b\u0581 \u0578\u0580\u0578\u0576\u0578\u0582\u0574:",
        infoDetails: "\u054a\u0561\u0580\u0566\u0565\u056c\u0578\u0582 \u0570\u0561\u0574\u0561\u0580, \u0569\u0565 \u056b\u0576\u0579\u057a\u0565\u057d \u0567 \u0561\u0577\u056d\u0561\u057f\u0578\u0582\u0574 \u0578\u0580\u0578\u0576\u0578\u0582\u0574\u0568, \u056d\u0576\u0564\u0580\u0578\u0582\u0574 \u0565\u0576\u0584 \u057d\u057f\u0578\u0582\u0563\u0565\u056c \u056f\u0561\u0580\u0563\u0561\u057e\u0578\u0580\u0578\u0582\u0574\u0576\u0565\u0580\u0568"
      },
      pager: {
        next: "\u0540\u0561\u057b\u0578\u0580\u0564\u0568",
        prev: "\u0546\u0561\u056d\u0578\u0580\u0564",
        first: "\u0531\u057c\u0561\u057b\u056b\u0576",
        last: "\u054e\u0565\u0580\u057b\u056b\u0576"
      }
    }
  },
  time: {
    type: "Type",
    format: "Format",
    loading: "\u0532\u0565\u057c\u0576\u057e\u0578\u0582\u0574 \u0567...",
    years: "\u057f\u0561\u0580\u056b\u0576\u0565\u0580",
    months: "\u0561\u0574\u056b\u057d\u0576\u0565\u0580",
    days: "\u0585\u0580\u0565\u0580",
    year: "\u057f\u0561\u0580\u056b\u0576",
    month: "\u0561\u0574\u056b\u057d",
    day: "\u0585\u0580",
    second: "\u057e\u0561\u0575\u0580\u056f\u0575\u0561\u0576",
    seconds: "\u057e\u0561\u0575\u0580\u056f\u0575\u0561\u0576\u0576\u0565\u0580",
    minute: "\u0580\u0578\u057a\u0565",
    minutes: "\u0580\u0578\u057a\u0565\u0576\u0565\u0580",
    hour: "\u056a\u0561\u0574",
    hours: "\u056a\u0561\u0574\u0565\u0580"
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
