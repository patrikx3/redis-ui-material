const strings = {
  error: {
    server_error: "កំហុសម៉ាស៊ីនមេ សូមព្យាយាមម្តងទៀត"
  },
  title: {
    donate: "បរិច្ចាគ",
    jsonRecursive: "ពង្រីកស្លឹកទាំងអស់។",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "អ្នកអាចជ្រើសរើសការភ្ជាប់ Redis ដើម្បីភ្ជាប់ពីម៉ឺនុយខាងក្រោមខាងឆ្វេង។",
    statistics: "ស្ថិតិ",
    error: "កំហុស",
    connectingRedis: "កំពុងភ្ជាប់ទៅ Redis...",
    socketioConnectError: "កំហុស Socket.IO",
    db: "DB",
    server: "ម៉ាស៊ីនមេ",
    clients: "អតិថិជន",
    memory: "ការចងចាំ",
    persistence: "ការតស៊ូ",
    stats: "ស្ថិតិ",
    replication: "ការចម្លង",
    cpu: "CPU",
    cluster: "Cluster",
    modules: "modules",
    errorstats: "errorstats",
    commandstats: "commandstats",
    latencystats: "latencystats",
    keysizes: "keysizes",
    threads: "threads",
  },
  confirm: {
    dropIndex: "តើអ្នកពិតជាចង់លុបសន្ទស្សន៍នេះមែនទេ?",
    uploadBuffer: "តើអ្នកប្រាកដក្នុងការបង្ហោះទិន្នន័យគោលពីរនេះទេ?",
    uploadBufferDone: "ទិន្នន័យគោលពីរត្រូវបានផ្ទុកឡើង",
    uploadBufferDoneAndSave: "ទិន្នន័យគោលពីរត្រូវបានផ្ទុកឡើង និងរក្សាទុកនៅលើម៉ាស៊ីនមេ",
    title: "បញ្ជាក់",
    alert: "ដាស់តឿន",
    info: "ព័ត៌មាន",
    deleteListItem: "តើអ្នកប្រាកដក្នុងការលុបធាតុក្នុងបញ្ជីនេះទេ?",
    deleteHashKey: "តើ​អ្នក​ប្រាកដ​ក្នុង​ចិត្ត​លុប​ធាតុ​សោ​សញ្ញា​នេះ​ឬ?",
    deleteStreamTimestamp: "តើ​អ្នក​ប្រាកដ​ក្នុង​ចិត្ត​លុប​ត្រា​ពេល​វេលា​នៃ​ការ​ផ្សាយ​នេះ?",
    deleteSetMember: "តើអ្នកប្រាកដក្នុងការលុបសមាជិកឈុតនេះទេ?",
    deleteZSetMember: "តើអ្នកប្រាកដក្នុងការលុបសមាជិកដែលបានតម្រៀបនេះទេ?",
    deleteConnection: "បញ្ជាក់",
    deleteConnectionText: "តើអ្នកប្រាកដក្នុងការលុបការតភ្ជាប់ Redis នេះទេ?",
    delete: "\u179b\u17bb\u1794?",
    deleteNode: "តើអ្នកប្រាកដក្នុងការលុបថ្នាំង Redis នេះទេ?",
    deleteAllKeys: opts => {
      return `លុបមែកធាងនេះ និងសោទាំងអស់របស់វា (${opts.key})?`;
    },
    deleteSearchKeys: opts => {
      return `តើអ្នកប្រាកដថាចង់លុបសោទាំងអស់ដែលផ្គូផ្គងនឹង "${opts.pattern}" ទេ? បានរកឃើញ ${opts.count} សោ។`;
    },
    socketioConnectError: "Socket.IO មិនអាចភ្ជាប់ទៅម៉ាស៊ីនមេបានទេ អ្នកអាចផ្ទុកឡើងវិញ ហើយព្យាយាមដោះស្រាយកំហុសក្នុងការតភ្ជាប់ដោយខ្លួនឯង អតិថិជនមិនដឹងពីរបៀបដោះស្រាយវាដោយខ្លួនឯងទេ។",
    socketioAuthRequired: "ការអនុញ្ញាត Socket.IO ត្រូវបានទាមទារ។ សូមផ្ទៀងផ្ទាត់ភាពត្រឹមត្រូវជាមួយ HTTP Basic Auth (ឈ្មោះអ្នកប្រើប្រាស់/ពាក្យសម្ងាត់) ហើយផ្ទុកឡើង���ិញ។",
    deleteKey: "តើអ្នកប្រាកដក្នុងការលុបសោនេះទេ?",
    rename: {
      title: "តើអ្នកប្រាកដក្នុងការប្តូរឈ្មោះសោនេះទេ?",
      textContent: "សកម្មភាពនេះប្តូរឈ្មោះសោជាអចិន្ត្រៃយ៍។",
      placeholder: "គ្រាប់ចុច Redis (ទាមទារ)"
    },
    ttl: {
      title: "តើអ្នកប្រាកដថាចង់ផ្លាស់ប្តូរ TTL របស់សោនេះទេ?",
      textContent: "ការផ្លាស់ប្តូរ TTL ធ្វើបច្ចុប្បន្នភាពពេលវេលារបស់សោនេះដើម្បីរស់នៅ។ ទុក​ទទេ​ដើម្បី​រក្សា​សោ​នេះ​ជា​រៀង​រហូត។",
      placeholder: "Redis របស់ TTL (ចំនួនគត់ ឬទទេ)",
      placeholderPlaceholder: "ទទេមានន័យថាវាបន្តជារៀងរហូត; បើមិនដូច្នេះទេ បញ្ចូលចំនួនគត់។",
      convertTextToTime: "បំលែងអត្ថបទទៅជាពេលវេលា",
      convertTextToTimePlaceholder: "ឧ. 1d នឹងមាន 86400"
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
    copy: "ចម្លង",
    downloadBuffer: "ទាញយកប្រព័ន្ធគោលពីរ",
    setBuffer: "បង្ហោះប្រព័ន្ធគោលពីរ",
    exportKeys: "នាំចេញសោ",
    exportAllKeys: (opts) => `នាំចេញសោទាំង ${opts.count}`,
    exportSearchResults: (opts) => `នាំចេញ ${opts.count} លទ្ធផល`,
    deleteAllKeysMenu: (opts) => `លុបទាំងអស់ ${opts.count}`,
    importKeys: "នាំចូលសោ",
    deleteSearchKeys: (opts) => `លុប ${opts.count} សោដែលផ្គូផ្គង`,
    saveWithFormatJson: "រក្សាទុកជាមួយទម្រង់",
    formatJson: "ទម្រង់ Json",
    wrap: "រុំ",
    unwrap: "ដោះរុំ",
    downloadJson: "ទាញយក JSON",
    pubsubMonitor: "PubSub",
    pulse: "Pulse",
    profiler: "Profiler",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "ភាសា",
    ok: "យល់ព្រម",
    addKey: "បន្ថែមទៅគន្លឹះនេះ។",
    addKeyRoot: "បន្ថែមសោជា root",
    reloadKey: "ផ្ទុកគ្រាប់ចុចឡើងវិញ",
    reload: "ផ្ទុកឡើងវិញ",
    close: "បិទ",
    commands: "ពាក្យបញ្ជា",
    view: "មើល",
    statistics: "ស្ថិតិ",
    refresh: "ធ្វើឱ្យស្រស់",
    pause: "ផ្អាក",
    resume: "បន្ត",
    clear: "ច្បាស់",
    rename: "ប្តូរឈ្មោះ",
    main: "មូលដ្ឋានទិន្នន័យ",
    cancel: "��ោះបង់",
    theme: "ប្រធានបទ",
    github: "GitHub",
    githubRepo: "ឃ្លាំង",
    githubRelease: "ការចេញផ្សាយ",
    githubChangelog: "កំណត់ហេតុផ្លាស់ប្តូរ",
    info: "Info",
    settings: "ការកំណត់",
    connect: "ភ្ជាប់",
    disconnect: "ផ្តាច់",
    overview: "ទិដ្ឋភាពទូទៅ",
    console: "កុងសូល។",
    noConnections: "មិនមានការតភ្ជាប់ទេ បន្ថែមការតភ្ជាប់នៅក្នុងម៉ឺនុយការកំណត់។",
    noConnectionsInSettings: "មិនមានការតភ្ជាប់ទេ អ្នកអាចបន្ថែមការភ្ជាប់ថ្មីខាងលើ។",
    connectionAdd: "ការតភ្ជាប់ថ្មី។",
    addGroup: "បន្ថែមក្រុម",
    extend: "ពង្រីក",
    collapse: "ដួលរលំ",
    add: "បន្ថែម",
    edit: "កែសម្រួល",
    save: "រក្សាទុក",
    ttl: "កំណត់ TTL",
    delete: "លុប",
    remove: "ដកចេញ",
    sure: "ប្រាកដ",
    testConnection: "ការភ្ជាប់សាកល្បង",
    getKey: "កំពុងផ្ទុកគ្រាប់ចុច Redis និងទិន្នន័យដែលពាក់ព័ន្ធ...",
    jsonViewShow: "បង្ហាញ JSON",
    jsonViewEditor: "កែសម្រួល JSON",
    quickConsole: "កុងសូលរហ័ស",
  },
  label: {
    id: {
      nodeId: "លេខសម្គាល់ថ្នាំង",
      id: "លេខសម្គាល់ការតភ្ជាប់",
      info: "ប្រសិនបើអ្នកមិនចង់ផ្លាស់ប្តូរលក្ខណសម្បត្តិរបស់៖ sshPassword, sshPrivateKey, ពាក្យសម្ងាត់, tlsCrt, tlsKey, tlsCa សូមបញ្ចូលលេខសម្គាល់នៃការតភ្ជាប់នៅក្នុង propertes ទាំងនោះ ដើម្បីរក្សាតម្លៃទ្រព្យសម្បត្តិនៅដដែល។ ប្រសិនបើអ្នកចង់បានតក្កវិជ្ជាដូចគ្នានៅក្នុងពាក្យសម្ងាត់ថ្នាំង បន្ទាប់មកបញ្ចូលល���ខសម្គាល់ថ្នាំងក្នុងពាក្យសម្ងាត់ថ្នាំង។"
    },
    secureFeature: "ប្រសិនបើអ្នកឃើញតម្លៃដែលចាប់ផ្តើមដោយ P3X មើលទៅដូចគ្នា វាគឺជាមុខងារសុវត្ថិភាព។ ដើម្បីផ្លាស់ប្តូរការកំណត់ គ្រាន់តែជំនួសការកំណត់ទាំងនេះដោយទទេ ឬអ្វីផ្សេងទៀត ហើយពួកវានឹងត្រូវបានរក្សាទុក។ ប្រសិនបើអ្នកមិនផ្លាស់ប្តូរការកំណត់ទេ ការកំណត់នឹងត្រូវបានរក្សាទុកដូចដែលពួកវាស្ថិតនៅលើម៉ាស៊ីនមេ។",
    aiTranslating: "Translating...",
    aiSettings: "ការកំណត់ AI",
    aiGroqApiKey: "សោ API Groq",
    aiGroqApiKeyInfo: "ជាជម្រើស។ សោ API Groq ផ្ទាល់ខ្លួនសម្រាប់ដំណើរការកាន់តែប្រសើរ។ ទទួលបានសោឥតគិតថ្លៃពី",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "សោ API AI ត្រូវបានរក្សាទុក",
    aiGroqApiKeyInvalid: "Invalid Groq API key",
    aiGroqApiKeyNotSet: "មិនទាន់កំណត់ (លំនាំដើមម៉ាស៊ីនមេ)",
    aiEnabled: "AI Enabled",
    aiEnabledYes: "Yes",
    aiEnabledNo: "No",
    aiRouteViaNetwork: "Route via network.corifeus.com",
    aiRoutingDirect: "Queries go directly to Groq using your own API key, bypassing network.corifeus.com.",
    aiRoutingNetwork: "AI queries are routed through network.corifeus.com. If you have your own free Groq API key, you can turn off this switch to route directly to Groq without network.corifeus.com.",
    ssh: {
      on: "SSH បើក",
      off: "បិទ SSH",
      sshHost: "ម៉ាស៊ីន SSH",
      sshPort: "ច្រក SSH",
      sshUsername: "ឈ្មោះអ្នកប្រើ SSH",
      sshPassword: "ពាក្យសម្ងាត់ SSH",
      sshPrivateKey: "សោឯកជន SSH"
    },
    isBuffer: opts => `[object ArrayBuffer] មានន័យថាតម្លៃគឺជាទិន្នន័យគោលពីរ ឬតម្លៃធំជាង ${opts.maxValueAsBuffer}`,
    streamValue: `វាលស្ទ្រីម និងតម្លៃគឺជាបន្ទាត់តែមួយ។ ឧ.៖ field1 value1 "field 2" "value 2"`,
    streamTimestampId: `'*' មាន​ន័យ​ថា​បង្កើត​ដោយ​ស្វ័យ​ប្រវត្តិ ឬ​ការ​បញ្ជាក់​ជា <millisecondsTime>-<sequenceNumber>`,
    unableToLoadKey: ({
      key
    }) => {
      return `មិនអាចផ្ទុកសោនេះបានទេ៖ ${key}. អាចទៅរួច សោត្រូវបានលុប។ កំហុសពិតប្រាកដគឺនៅក្នុងកុងសូល។`;
    },
    bigJson: "វត្ថុ JSON នេះមានលើសពី 10 kb ដូច្នេះត្រូវប្រាកដថាអ្នកដឹងពីអ្វីដែលអ្នកកំពុងធ្វើ ពីព្រោះមុខងារមួយចំនួនអាចបង្ហាញយឺត។",
    addNode: "បន្ថែមថ្នាំង",
    validateJson: "ធ្វើឱ្យមានសុពលភាព JSON",
    reducedFunction: `មុខងារកាត់បន្ថយ`,
    tooManyKeys: opts => {
      return `សម្រាប់មុខងារអតិបរមាពេញលេញ គ្រាប់ចុចដែលអនុញ្ញាតសរុបគឺ ${opts.maxLightKeysCount} រាប់។ មូលដ្ឋានទិន្នន័យនេះមានលើសពីសោដែលបានអនុញ្ញាតសរុប ${opts.count}. ការតម្រៀបគន្លឹះ និងព័ត៌មានអំពីមែកធាងពុម្ពអក្សរក្បូរក្បាច់បន្ថែមត្រូវបានបិទ។ ការស្វែងរកគឺកើតឡើងតែនៅលើម៉ាស៊ីនមេ ជំនួសឱ្យការស្វែងរកអតិថិជន។`;
    },
    redisCommandNotFound: "រកមិនឃើញពាក្យបញ្ជា Redis ទេ...",
    treeKeyStore: `ការតម្រៀប (ការប្រៀបធៀបធម្មជាតិ) ត្រូវបានប្រតិបត្តិនៅលើម៉ាស៊ីនភ្ញៀវ aka កម្មវិធីរុករក ដែលមានន័យថាវាមានការផាកពិន័យសម្រាប់ឈុតធំ ៗ ដូចជាគ្រាប់ចុចលើសពី 10k វាអាចបន្ថែមពេលវេលាតិចតួចក្នុងការបង្ហាញទំព័រ។ មិនមានការតម្រៀបគន្លឹះនៅក្នុង Redis ទេ មានតែដូចនេះប៉ុណ្ណោះ។`,
    socketIoTimeout: options => {
      return `Socket.IO អស់ពេលសម្រាប់សំណើនេះ (អតិបរមា ${options.timeout / 1000} វិនាទី)...`;
    },
    resizerInfo: options => {
      return `ទទឹងអប្បបរមាបន្ទះខាងឆ្វេងឬស្តាំគឺ ${options.width}ភីច`;
    },
    jsonViewNotParsable: "តម្លៃនេះមិនអាចញែក JSON បានទេ។  ",
    ttlTitle: "កំណត់ TTL ជាវិនាទី",
    passwordSecure: "ពាក្យ​សម្ងាត់​អាច​នឹង​ទទេ ប៉ុន្តែ​នៅ​តែ​វា​នឹង​បង្ហាញ​តួអក្សរ នេះ​ជា​មុខងារ​សុវត្ថិភាព។",
    tlsWithoutCert: "បើកដំណើរការ TLS ដោយ��្មានវិញ្ញាបនបត្របន្ថែម",
    tlsRejectUnauthorized: "បដិសេធវិញ្ញាបនបត្រដែលគ្មានការអនុញ្ញាត",
    tlsSecure: "ប្រសិនបើអ្នកឃើញការកំណត់រចនាសម្ព័ន្ធ TLS ដែលចាប់ផ្តើមដោយ P3X ឬការកំណត់ TLS ទាំងអស់មើលទៅដូចគ្នា វាគឺជាមុខងារសុវត្ថិភាព។ ដើម្បីផ្លាស់ប្តូរការកំណត់ គ្រាន់តែជំនួសការកំណត់ទាំងនេះដោយទទេ ឬអ្វីផ្សេងទៀត ហើយពួកវានឹងត្រូវបានរក្សាទុក។ ប្រសិនបើអ្នកមិនផ្លាស់ប្តូរការកំណត់ TLS ទេ ការកំណត់នឹងត្រូវបានរក្សាទុកដូចដែលពួកវាស្ថិតនៅលើម៉ាស៊ីនមេ។",
    treeSeparatorEmpty: "ប្រសិនបើធាតុបំបែកមែកធាងគឺទទេ មែកធាងនឹងមិនមានថ្នាំងដែលជាប់គាំងទេ គ្រាន់តែជាបញ្ជីសុទ្ធប៉ុណ្ណោះ។",
    treeSeparatorEmptyNote: "គ្មាន​ថ្នាំង​ដែល​ជាប់​គ្នា​ទេ គ្រាន់​តែ​ជា​បញ្ជី​សុទ្ធ",
    welcomeConsole: "សូមស្វាគមន៍មកកាន់កុងសូល Redis",
    welcomeConsoleInfo: "ប្រវត្តិទស្សន៍ទ្រនិចឡើងលើ ឬចុះក្រោមត្រូវបានបើក",
    redisListIndexInfo: "ទទេ​ដើម្បី​បន្ថែម -1 ដើម្បី​បន្ថែម ឬ​រក្សាទុក​វា​ទៅ​ទីតាំង​ដែល​បាន​បង្ហាញ។",
    console: "កុងសូល។",
    connectiondAdd: "បន្ថែមការតភ្ជាប់",
    connectiondEdit: "កែសម្រួលការតភ្ជាប់",
    connectiondView: "មើលការតភ្ជាប់",
    connections: "ការតភ្ជាប់",
    keysSort: {
      on: "ការតម្រៀបគ្រាប់ចុចបើក",
      off: "ការតម្រៀបគ្រាប់ចុចបិទ"
    },
    cluster: {
      on: "Cluster បើក",
      off: "បិទ Cluster"
    },
    sentinel: {
      on: "Sentinel បើក",
      off: "បិទ Sentinel",
      name: "ឈ្មោះ Sentinel"
    },
    readonly: {
      on: "បានតែអានប៉ុណ្ណោះ។",
      off: "បិទការអានតែប៉ុណ្ណោះ"
    },
    theme: {
      light: "ពន្លឺ",
      dark: "សហគ្រាសងងឹត",
      darkNeu: "ងងឹត",
      darkoBluo: "ដាកូប៊្លូ",
      enterprise: "សហគ្រាស",
      redis: "Redis",
      matrix: "ម៉ាទ្រីស"
    },
    connected: opts => {
      return `បានភ្ជាប់៖ ${opts.name}`;
    },
    tree: "ដើមឈើ",
    askAuth: "សុំការអនុញ្ញាត",
    keyboardShortcuts: "Keyboard Shortcuts",
    about: "About",
    supportedLanguages: "Supported Languages",
    version: "Version",
    redisVersion: "Redis Version",
    modules: "modules",
    shortcutRefresh: "Refresh",
    shortcutSearch: "Focus Search",
    shortcutNewKey: "New Key",
    shortcutDisconnect: "ផ្តាច់",
    themeAuto: "Auto (system)",
    shortcutCommandPalette: "Command Palette",
    commandPalette: "Command Palette",
    noResults: "No results",
    redisCommandsReference: "Redis ពាក្យបញ្ជា",
    ungrouped: "គ្មានក្រុម",
    grouped: "Grouped",
    connectFirst: "connectFirst",
    searchLanguage: "ស្វែងរកភាសា...",
    exportProgress: "កំពុងនាំចេញសោ...",
    importProgress: "កំពុងនាំចូលសោ...",
    importPreview: "មើលជាមុន",
    importOverwrite: "សរសេរជំនួស",
    importSkip: "រំលង",
    importConflict: "ប្រសិនបើសោមានរួចហើយ:",
    noKeysToExport: "គ្មានសោដើម្បីនាំចេញ",
    time: "ពេលវេលា",
    type: "ប្រភេទ",
    format: "ទម្រង់",
    loading: "កំពុងផ្ទុក...",
    autoRefresh: "ស្វ័យប្រវត្តិ",
    exportSearchHint: "នាំចេញតែសោដែលផ្គូផ្គងនឹងការស្វែងរកបច្ចុប្បន្ន",
    importSearchHint: "ការនាំចូលអនុវត្តចំពោះមូលដ្ឋានទិន្នន័យទាំងមូល មិនមែនតែលទ្ធផលស្វែងរកទេ",
    deleteSearchHint: "លុបសោទាំងអស់ដែលផ្គូផ្គងនឹងការស្វែងរកបច្ចុប្បន្ននៅលើម៉ាស៊ីនមេ",
    deletingSearchKeys: "កំពុងលុបសោដែលផ្គូផ្គង...",
    importNoKeys: "រកមិនឃើញសោក្នុងឯកសារ",
  },
  status: {
    dataCopied: "ទិន្នន័យគឺនៅក្នុងក្ដារតម្បៀតខ្ទាស់",
    exportDone: "ការនាំចេញបានបញ្ចប់",
    deletedSearchKeys: (opts) => `បានលុប ${opts.count} សោ`,
    indexCreated: "បង្កើតសន្ទស្សន៍រួចរាល់",
    indexDropped: "លុបសន្ទស្សន៍រួចរាល់",
    importDone: (opts) => `ការនាំចូលបានបញ្ចប់: ${opts.created} បង្កើត, ${opts.skipped} រំលង, ${opts.errors} កំហុស`,
    nodeRemoved: "ថ្នាំងត្រូវបានដកចេញ",
    keyIsNotExisting: "សោនេះអាចត្រូវបានលុប ឬផុតកំណត់។",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "គ្មានសោ";
      } else if (opts.keyCount === 1) {
        return "កូនសោ 1";
      } else {
        return `${opts.keyCount} សោ`;
      }
    },
    treeExpandAll: "ពង្រីកស្លឹកឈើទាំងអស់។ ប្រតិបត្តិការនេះអាចមានតម្លៃថ្លៃ ហើយអាចចំណាយពេល...",
    noRedisKeys: "មិនមានសោនៅក្នុងមូលដ្ឋានទិន្នន័យនេះទេ។",
    redisConnected: "ការតភ្ជាប់ Redis បានជោគជ័យ",
    reloadingDataInfo: "កំពុងផ្ទុកព័ត៌មានទិន្នន័យ Redis ឡើងវិញ",
    added: "បន្ថែម",
    saved: "បានធ្វើបច្ចុប្បន្នភាព",
    cancelled: "បានលុបចោល",
    deleted: "បានលុប",
    savedRedis: "ទិន្នន័យ Redis ត្រូវបានរក្សាទុក",
    redisDisconnected: opts => {
      return `ការតភ្ជាប់បច្ចុប្បន្នមានកំហុស៖ ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `សន្ទស្សន៍ db ត្រូវបានកំណត់ទៅ ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `សោមែកធាងត្រូវបានលុប (${opts.key})`;
    },
    deletedKey: opts => {
      return `សោត្រូវបានលុប (${opts.key})`;
    },
    renamedKey: "សោនេះត្រូវបានប្តូរឈ្មោះ",
    ttlChanged: "TTL របស់សោនេះត្រូវបានផ្លាស់ប្តូរ",
    notInteger: "ការបញ្ចូលនេះមិនមែនជាចំនួនគត់ទេ។",
    persisted: "គន្លឹះ​នេះ​ស្ថិត​នៅ​ជា​រៀង​រហូត",
    set: "គ្រាប់ចុចត្រូវបានកំណត់ / បន្ថែម"
  },
  code: {
    "delete-connection": "ការ​តភ្ជាប់​នេះ​ត្រូវ​បាន​លុប ដូច្នេះ​អ្នក​ត្រូវ​បាន​ផ្ដាច់​ទៅ​នឹង​ឧទាហរណ៍ Redis នេះ។",
    "save-connection": "ការ​តភ្ជាប់​នេះ​ត្រូវ​បាន​ផ្លាស់​ប្តូ​រ ដូច្នេះ​អ្នក​ត្រូវ​បាន​ផ្ដាច់​ទៅ​នឹង​ឧទាហរណ៍ Redis នេះ។ អ្នកអាចភ្ជាប់ឡើងវិញបាន។",
    "readonly-connections": "ការតភ្ជាប់បន្ថែម / រក្សាទុក / លុបគឺបានតែអាន!",
    "readonly-connection-mode": "ការតភ្ជាប់នេះគ្រាន់តែជារបៀបអានប៉ុណ្ណោះ!",
    "list-out-of-bounds": "លិបិក្រមបញ្ជីនេះគឺហួសព្រំដែន",
    "invalid-json-value": "តម្លៃមិនត្រឹមត្រូវ JSON ។",
    "http_auth_required": "តម្រូវឱ្យមានការអនុញ្ញាត៖ សូមផ្ទៀងផ្ទាត់ជាមួយ HTTP Basic Auth ហើយផ្ទុកឡើងវិញ។",
    "auto-connection-failed": "អាចធ្វើទៅបាន ការតភ្ជាប់ត្រូវបានដកចេញ ហើយការភ្ជាប់ដោយស្វ័យប្រវត្តិបានបរាជ័យ ដោយសារបញ្ហានេះ។",
    invalid_console_command: "ពាក្យបញ្ជានេះមិនដំណើរការតាមរយៈ GUI ទេ។"
  },
  form: {
    error: {
      required: "ទាមទារ",
      port: "ច្រកស្ថិតនៅចន្លោះ 1-65535",
      invalid: "ទម្រង់​នេះ​មិន​ត្រឹមត្រូវ។"
    },
    connection: {
      label: {
        name: "ឈ្មោះ",
        group: "Group",
        host: "ឈ្មោះម៉ាស៊ីន",
        port: "ច្រក",
        password: "ពាក្យសម្ងាត់",
        username: "ឈ្មោះអ្នកប្រើប្រាស់"
      }
    },
    treeSettings: {
      maxValueDisplay: "តម្លៃអតិបរមាបង្ហាញប្រវែងខ្សែអក្សរ",
      maxValueDisplayInfo: "ប្រសិនបើកំណត់ទៅ 0 បង្ហាញតម្លៃពេញ។ ប្រសិនបើធំជាង 0 កាត់ឱ្យខ្លីទៅប្រវែងនេះ។ ប្រសិនបើ -1: សម្រាប់ខ្សែអក្សរ លាក់តម្លៃរហូតដល់កែសម្រួល។ សម្រាប់ប្រភេទផ្សេងទៀត បង្ហាញខ្លឹ��សារពេញលេញ។",
      maxKeys: "ចំនួនគន្លឹះអតិបរមា",
      maxKeysInfo: "ដូច្នេះ GUI មិនគាំង យើងកំណត់ចំនួនគ្រាប់ចុចអតិបរមា។",
      keyCount: () => {
        return `ចំនួនសោ៖ ${p3xr.state.keysRaw.length}`;
      },
      label: {
        animation: "ប្រើ���លនា",
        noAnimation: "គ្មានចលនា",
        jsonFormatTwoSpace: "ធ្វើទ្រង់ទ្រាយ JSON ដែលមាន 2 ដកឃ្លា",
        jsonFormatFourSpace: "ធ្វើទ្រង់ទ្រាយ JSON ដែលមាន 4 ដកឃ្លា",
        formName: "ការកំណត់ Redis",
        searchModeClient: "របៀបស្វែងរកអតិថិជន",
        searchModeServer: "របៀបស្វែងរកម៉ាស៊ីនមេ",
        searchModeStartsWith: "ស្វែងរកដោយចាប់ផ្តើមដោយរបៀប",
        searchModeIncludes: "ការស្វែងរករួមមានរបៀប"
      },
      field: {
        treeSeparator: "អ្នកបំបែកដើមឈើ",
        treeSeparatorSelector: "ឧបករណ៍ជ្រើសរើសសញ្ញាបំបែកដើមឈើ",
        page: "ការរាប់ចំនួនដើមឈើ",
        keyPageCount: "ចំនួនទំព័រសំខាន់ៗ",
        keysSort: "តម្រៀបសោ",
        searchMode: "របៀបស្វែងរក",
        searchModeStartsWith: "ការស្វែងរកចាប់ផ្តើមដោយ / រួមបញ្ចូល"
      },
      error: {
        keyPageCount: "ចំនួនទំព័រគន្លឹះត្រូវតែជាចំនួនគត់ចន្លោះពី 5 ទៅ 100",
        page: "ចំនួនទំព័រត្រូវតែជាចំនួនគត់ចន្លោះពី 10 ទៅ 5000",
        maxValueDisplay: "តម្លៃបង្ហាញអតិបរមាត្រូវតែជាចំនួនគត់រវាង -1 និង 32768",
        maxKeys: "តម្លៃរាប់គ្រាប់ចុចអតិបរមាត្រូវតែជាចំនួនគត់ចន្លោះពី 100 ទៅ 100000"
      }
    },
    key: {
      label: {
        formName: {
          add: "បន្ថែមគ្រាប់ចុច Redis ថ្មី។",
          edit: "កែសម្រួលគ្រាប់ចុច Redis",
          append: "បន្ថែមទៅគ្រាប់ចុច Redis ដែលមានស្រាប់"
        }
      },
      field: {
        streamTimestamp: "ត្រាពេលវេលា",
        key: "សោ",
        type: "ប្រភេទ",
        index: "សន្ទស្សន៍",
        hashKey: "គ្រាប់ចុចហាស",
        score: "ពិន្ទុ",
        value: "តម្លៃ"
      },
      error: {
        streamTimestamp: "ត្រាពេលវេលាត្រូវបានទាមទារ ទាំងទម្រង់ Redis ឬជា *",
        key: "គន្លឹះគឺយ៉ាងហោចណាស់តួអក្សរមួយ។",
        hashKey: "គ្រាប់ចុចតារាង hash គឺយ៉ាងហោចណាស់មួយតួអក្សរ",
        score: "ពិន្ទុដែលបានតម្រៀបត្រូវបានទាមទារ",
        value: "តម្លៃត្រូវបានទាមទារ"
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
      title: "ស្វែងរក",
      index: "សន្ទស្សន៍",
      query: "សំណួរ",
      results: "លទ្ធផល",
      noIndex: "រកមិនឃើញសន្ទស្សន៍",
      createIndex: "បង្កើតសន្ទស្សន៍",
      dropIndex: "លុបសន្ទស្សន៍",
      indexInfo: "ព័ត៌មានសន្ទស្សន៍",
      indexName: "ឈ្មោះសន្ទស្សន៍",
      prefix: "បុព្វបទសោ (ជាជម្រើស)",
      fieldName: "ឈ្មោះវាល",
    },
    monitor: {
      title: "ការត្រួតពិនិត្យ",
      memory: "អង្គចងចាំ",
      opsPerSec: "ប្រតិបត្តិការ/វិ",
      clients: "អតិថិជន",
      blocked: "បានរារាំង",
      hitsMisses: "អត្រាបម្រើ",
      networkIo: "បណ្តាញ I/O",
      slowLog: "កំណត់ហេតុយឺត",
      totalCommands: "សរុប",
      expired: "ផុតកំណត់",
      evicted: "បណ្តេញចេញ",
      clientList: "បញ្ជីអតិថិជន",
      topKeys: "សោធំបំផុតតាមអង្គចងចាំ",
      killClient: "បិទអតិថិជន",
      clientKilled: "អតិថិជនត្រូវបានបិទ",
      confirmKillClient: "តើអ្នកពិតជាចង់បិទអតិថិជននេះមែនទេ?",
      noKeys: "គ្មានសោ",
      noClients: "គ្មានអតិថិជន",
    },
    overview: {
      noConnected: "មិនមានទំនាក់ទំនងជាមួយ Redis ទេ។",
      overviewClients: "រាយបញ្ជីទំនាក់ទំនងដោយចំនួនអតិថិជន",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "អតិថិជន 1 នាក់។";
        }
        return `${opt.length} អតិថិជន`;
      }
    },
    key: {
      label: {
        key: "សោ",
        encoding: "ការអ៊ិនកូដ",
        length: "ទំហំ",
        ttl: "TTL",
        ttlTitle: "ពេលវេលាដើម្បីរស់នៅ",
        type: "ប្រភេទ",
        ttlNotExpire: "មិនផុតកំណត់ទេ។",
        lengthString: "បៃ",
        lengthItem: "ធាតុ",
        actions: "សកម្មភាព"
      },
      list: {
        table: {
          index: "សន្ទស្សន៍",
          value: "តម្លៃ"
        }
      },
      hash: {
        table: {
          hashkey: "ហាស់ឃី",
          value: "តម្លៃ"
        }
      },
      set: {
        table: {
          value: "សមាជិក"
        }
      },
      zset: {
        table: {
          value: "សមាជិក",
          score: "ពិន្ទុ"
        }
      },
      stream: {
        table: {
          timestamp: "លេខសម្គាល់ពេលវេលា",
          field: "វាល",
          value: "តម្លៃ"
        }
      },
      timeseries: {
        chart: "\u1780\u17d2\u179a\u17b6\u17a0\u17d2\u179c\u17b7\u1780",
        info: "\u1796\u17c0\u178f\u17cc\u1798\u17b6\u1793",
        addPoint: "\u1794\u1793\u17d2\u1790\u17c2\u1798\u1785\u17c6\u178e\u17bb\u1785\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799",
        from: "\u1796\u17b8 (ms \u17ac -)",
        to: "\u178a\u179b\u17cb (ms \u17ac +)",
        aggregation: "\u1780\u17b6\u179a\u1794\u1789\u17d2\u1785\u17bc\u179b\u1782\u17d2\u1793\u17b6",
        timeBucket: "\u1790\u17bb\u1784 (ms)",
        none: "\u1782\u17d2\u1798\u17b6\u1793",
        dataPoints: "\u1785\u17c6\u178e\u17bb\u1785\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799",
        labels: "\u179f\u17d2\u179b\u17b6\u1780\u179f\u1789\u17d2\u1789\u17b6",
        rules: "\u179c\u17b7\u1793\u17d0\u1799",
        retention: "\u1780\u17b6\u179a\u179a\u1780\u17d2\u179f\u17b6\u1791\u17bb\u1780",
        timestamp: "\u179f\u17d2\u178f\u17b6\u1798\u1796\u17c1\u179b\u179c\u17c1\u179b\u17b6",
        value: "\u178f\u1798\u17d2\u179b\u17c3",
        retentionHint: "0 = \u1798\u17b7\u1793\u17a2\u179f\u17cb\u17a2\u17b6\u1799\u17bb, \u17ac \u1798\u17b7\u179b\u17d2\u179b\u17b8\u179c\u17b7\u1793\u17b6\u1791\u17b8",
        duplicatePolicy: "\u1782\u17c4\u179b\u1793\u17b6\u1799\u17d4\u179f\u17c6\u1785\u17c6\u179b\u1784\u179f\u17d2\u1791\u17c0\u179a",
        labelsHint: "key1 value1 key2 value2",
        timestampHint: "'*' \u1798\u17b6\u1793\u1793\u17d0\u1799\u1790\u17b6\u1794\u1784\u17d2\u1780\u17be\u178f\u178a\u17c4\u1799\u179f\u17d2\u179c\u17d0\u1799\u1794\u17d2\u179a\u179c\u178f\u17d2\u178f\u17b7, \u17ac \u179f\u17d2\u178f\u17b6\u1798\u1796\u17c1\u179b\u179c\u17c1\u179b\u17b6\u1798\u17b7\u179b\u17d2\u179b\u17b8\u179c\u17b7\u1793\u17b6\u1791\u17b8",
        editAllHint: "\u1798\u17bd\u1799\u1785\u17c6\u178e\u17bb\u1785\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1780\u17d2\u1793\u17bb\u1784\u1798\u17bd\u1799\u1787\u17bd\u179a: \u179f\u17d2\u178f\u17b6\u1798\u1796\u17c1\u179b\u179c\u17c1\u179b\u17b6 \u178f\u1798\u17d2\u179b\u17c3 (\u179f\u17d2\u178f\u17b6\u1798\u1796\u17c1\u179b\u179c\u17c1\u179b\u17b6\u17a2\u17b6\u1785\u1787\u17b6 * \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u179f\u17d2\u179c\u17d0\u1799\u1794\u17d2\u179a\u179c\u178f\u17d2\u178f\u17b7)",
        autoSpread: "\u1785\u1793\u17d2\u179b\u17c4\u17c7\u1796\u17c1\u179b\u179a\u17b6\u179b\u17a0\u17b6\u1799\u179f\u17d2\u179c\u17d0\u1799\u1794\u17d2\u179a\u179c\u178f\u17d2\u178f\u17b7 *",
        formula: "\u179a\u17bc\u1794\u1798\u1793\u17d2\u178f",
        formulaLinear: "\u179b\u17b8\u1793\u17c1\u17a2\u17ca\u17c2\u179a",
        formulaRandom: "\u1785\u17c3\u178a\u1793\u17d2\u1799",
        formulaSawtooth: "\u1790\u17d2\u1780\u17c2\u179c\u17a2\u17ca\u17b8",
        formulaPoints: "\u1785\u17c6\u178e\u17bb\u1785",
        formulaAmplitude: "\u17a2\u17b6\u17c6\u1797\u17d2\u179b\u17b8\u1792\u17bc\u178a",
        formulaOffset: "\u17a2\u17bb\u1794\u179f\u17c1\u178f",
        generate: "\u1794\u1784\u17d2\u1780\u17be\u178f",
        exportChart: "\u1793\u17b6\u17c6\u1785\u17c1\u1789 PNG",
        overlay: "\u179f\u17c4\u178f\u17d2\u179a\u17b6\u1794\u17cb\u1782\u17d2\u1793\u17b6",
        overlayHint: "\u179f\u17c4\u1794\u17c6\u1794\u17c2\u1780\u178a\u17c4\u1799\u179f\u17c0\u1789\u1780\u17c6\u178e\u178f",
        mrangeFilter: "\u178f\u1798\u17d2\u179a\u1784\u179f\u17d2\u179b\u17b6\u1780\u179f\u1789\u17d2\u1789\u17b6",
        bulkMode: "បង្កើតច្រើន",
        mrangeHint: "\u17a7\u1791\u17b6. sensor=temp"
      }
    },
    treeControls: {
      settings: "ការកំណត់ដើមឈើ",
      expandAll: "ពង្រីកទាំងអស់។",
      collapseAll: "ដួលរលំទាំងអស់។",
      level: "កម្រិdelays",
      search: {
        search: "ស្វែងរកក្នុងសោ",
        clear: "សម្អាតការស្វែងរកបច្ចុប្បន្នដើម្បីកំណត់ទទេ",
        placeholderClient: "ស្វែងរកផ្នែកអតិថិជន",
        placeholderServer: "ស្វែងរកផ្នែកខាងម៉ាស៊ីនមេ",
        info: "ការស្វែងរកភាគីអតិថិជនមានន័យថា វាត្រូវគ្នានឹងអត្ថបទនៅក្នុងការបញ្ចូលការស្វែងរក។ ការស្វែងរកផ្នែកខាងម៉ាស៊ីនមេមានន័យថា វាដូចជាការស្វែងរកក្នុងទម្រង់សោជា *{search-text}*។ សម្រាប់សំណុំស្វែងរកធំ វាជាការប្រសើរក្នុងការប្រើការស្វែងរកផ្នែកខាងម៉ាស៊ីនមេ។ សម្រាប់​សំណុំ​ការ​ស្វែងរក​តូច​ជាង​នេះ វា​ជា​ការ​ប្រសើរ​ក្នុង​ការ​ប្រើ​របៀប​ស���វែងរក​ខាង​អតិថិជន។" + ` ប្រសិនបើចំនួនសោត្រូវបានបញ្ចប់ ${p3xr.settings.maxLightKeysCount}អ្នកអាចស្វែងរកតែនៅផ្នែកខាងម៉ាស៊ីនមេប៉ុណ្ណោះ។`,
        largeSetInfo: "នៅក្នុងសំណុំធំ ការស្វែងរកភាគីអតិថិជនត្រូវបានបិទ។ ដូច្នេះឥឡូវនេះមានតែការស្វែងរកផ្នែកខាងម៉ាស៊ីនមេប៉ុណ្ណោះដែលអាចធ្វើទៅបាន។",
        infoDetails: "ដើម្បីស្វែងយល់ពីរបៀបដែលការស្វែងរកដំណើរការ សូមពិនិត្យមើលការកំណត់"
      },
      pager: {
        next: "បន្ទាប់",
        prev: "មុន",
        first: "ទីមួយ",
        last: "ចុងក្រោយ"
      }
    }
  },
  time: {
    type: "ប្រភេទ",
    format: "ទម្រង់",
    loading: "កំពុងផ្ទុក...",
    years: "ឆ្នាំ",
    months: "ខែ",
    days: "ថ្ងៃ",
    year: "ឆ្នាំ",
    month: "ខែ",
    day: "ថ្ងៃ",
    second: "\u179c\u17b7\u1793\u17b6\u1791\u17b8",
    seconds: "\u179c\u17b7\u1793\u17b6\u1791\u17b8",
    minute: "\u1793\u17b6\u1791\u17b8",
    minutes: "\u1793\u17b6\u1791\u17b8",
    hour: "\u1798\u17c9\u17c4\u1784",
    hours: "\u1798\u17c9\u17c4\u1784"
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
