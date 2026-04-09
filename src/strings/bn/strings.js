const strings = {
  error: {
    server_error: "সার্ভার ত্রুটি, আবার চেষ্টা করুন"
  },
  title: {
    donate: "দান করুন",
    donateTitle: "P3X Redis UI সমর্থন করুন",
    donateDescription: "P3X Redis UI একটি বিনামূল্যে, ওপেন-সোর্স প্রকল্প। অ্যাপ, AI ফিচার, Docker ইমেজ, সার্ভার এবং অবকাঠামো রক্ষণাবেক্ষণের খরচ ডেভেলপারের নিজের পকেট থেকে আসে। আপনি যদি এই টুলটি দরকারী মনে করেন, দয়া করে একটি অনুদান দিয়ে এর ক্রমাগত উন্নয়নে সহায়তা করুন। প্রতিটি অবদান প্রকল্পটিকে জীবিত ও ক্রমবর্ধমান রাখতে সাহায্য করে। ধন্যবাদ!",
    jsonRecursive: "সব পাতা প্রসারিত",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "আপনি বাম নীচের মেনু থেকে সংযোগ করতে একটি Redis সংযোগ চয়ন করতে পারেন৷",
    statistics: "পরিসংখ্যান",
    error: "ত্রুটি",
    connectingRedis: "Redis ��র সাথে সংযুক্ত হচ্ছে...",
    socketioConnectError: "Socket.IO ত্রুটি৷",
    db: "DB",
    server: "সার্ভার",
    clients: "ক্লায়েন্টদের",
    memory: "স্মৃতি",
    persistence: "জেদ",
    stats: "পরিসংখ্যান",
    replication: "প্রতিলিপি",
    cpu: "CPU",
    cluster: "Cluster",
    modules: "মডিউল",
    errorstats: "ত্রুটির পরিসংখ্যান",
    commandstats: "কমান্ড পরিসংখ্যান",
    latencystats: "বিলম্ব পরিসংখ্যান",
    keysizes: "কী আকার",
    threads: "থ্রেড"
  },
  confirm: {
    dropIndex: "আপনি কি এই ইনডেক্স মুছতে চান?",
    uploadBuffer: "আপনি কি এই বাইনারি ডেটা আপলোড করার বিষয়ে নিশ্চিত?",
    uploadBufferDone: "বাইনারি ডেটা আপলোড করা হয়",
    uploadBufferDoneAndSave: "বাইনারি ডেটা সার্ভারে আপলোড এবং সংরক্ষণ করা হয়",
    title: "নিশ্চিত করুন",
    alert: "সতর্কতা",
    info: "তথ্য",
    deleteListItem: "আপনি এই তালিকা আইটেম মুছে ফেলার বিষয়ে নিশ্চিত?",
    deleteHashKey: "আপনি এই হ্যাশ কী ��ইটেম মুছে ফেলার বিষয়ে নিশ্চিত?",
    deleteStreamTimestamp: "আপনি কি এই স্ট্রিম টাইমস্ট্যাম্প মুছে ফেলার বিষয়ে নিশ্চিত?",
    deleteSetMember: "আপনি এই সেট সদস্য মুছে ফেলার বিষয়ে নিশ্চিত?",
    deleteZSetMember: "আপনি এই সাজানো সেট সদস্য মুছে ফেলার বিষয়ে নিশ্চিত?",
    deleteConnection: "নিশ্চিত করুন",
    deleteConnectionText: "আপনি কি এই Redis সংযোগ মুছে ফেলার বিষয়ে নিশ্চিত?",
    deleteNode: "আপনি কি এই Redis নোড মুছে ফেলার বিষয়ে নিশ্চিত?",
    delete: "মুছে ফেলবেন?",
    deleteAllKeys: opts => {
      return `এই গাছ এবং এর সমস্ত কীগুলি মুছুন (${opts.key})?`;
    },
    deleteSearchKeys: opts => {
      return `আপনি কি "${opts.pattern}" এর সাথে মিলে যাওয়া সমস্ত কী মুছে ফেলতে চান? ${opts.count} টি কী পাওয়া গেছে।`;
    },
    socketioConnectError: "Socket.IO সার্ভারের সাথে সংযোগ করতে পারে না, আপনি পুনরায় লোড করতে পারেন এবং সংযোগ ত্রুটি নিজেই সমাধান করার চেষ্টা করতে পারেন, ক্লায়েন্ট নিজেই জানেন না কিভাবে এটি সমাধান করতে হয়।",
    socketioAuthRequired: "Socket.IO অনুমোদন প্রয়োজন৷ অনুগ্রহ করে HTTP Basic Auth (ব্যবহারকারীর নাম/পাসওয়ার্ড) দিয়ে প্রমাণীকরণ করুন এবং পুনরায় লোড করুন।",
    invalidCredentials: "অবৈধ ব্যবহারকারীর নাম বা পাসওয়ার্ড।",
    deleteKey: "আপনি এই কী মুছে ফেলার বিষয়ে নিশ্চিত?",
    rename: {
      title: "আপনি কি এই কীটির নাম পরিবর্তন করার বিষয়ে নিশ্চিত?",
      textContent: "এই ক্রিয়াটি স্থায়ীভাবে কীটির নাম পরিবর্তন করে।",
      placeholder: "Redis কী (প্রয়োজনীয়)"
    },
    ttl: {
      title: "আপনি কি এই কীটির TTL পরিবর্তন করার বিষয়ে নিশ্চিত?",
      textContent: "TTL পরিবর্তন করা এই কীটির বেঁচে থাকার সময়কে আপডেট করে। চিরতরে এই কী রাখতে খালি ছেড়ে দিন।",
      placeholder: "Redis কী এর TTL (পূর্ণসংখ্যা বা খালি)",
      placeholderPlaceholder: "খালি মানে এটা চিরকাল টিকে থাকে; অন্যথায় একটি পূর্ণসংখ্যা লিখুন।",
      convertTextToTime: "পাঠ্যকে সময়ে রূপান্তর করুন",
      convertTextToTimePlaceholder: "যেমন 1d হবে 86400"
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
    copy: "কপি",
    downloadBuffer: "বাইনারি ডাউনলোড করুন",
    setBuffer: "বাইনারি আপলোড করুন",
    exportKeys: "কী রপ্তানি করুন",
    exportAllKeys: (opts) => `সমস্ত ${opts.count} কী রপ্তানি করুন`,
    exportSearchResults: (opts) => `${opts.count} ফলাফল রপ্তানি করুন`,
    deleteAllKeysMenu: (opts) => `সব মুছুন ${opts.count}`,
    importKeys: "কী আমদানি করুন",
    deleteSearchKeys: (opts) => `${opts.count} টি মিলে যাওয়া কী মুছুন`,
    saveWithFormatJson: "বিন্যাস সঙ্গে সংরক্ষণ করুন",
    formatJson: "ফরম্যাট Json",
    wrap: "মোড়ানো",
    unwrap: "মোড়ক খুলুন",
    downloadJson: "JSON ডাউনলোড করুন",
    pubsubMonitor: "PubSub",
    pulse: "Pulse",
    profiler: "Profiler",
    memoryAnalysis: "Analysis",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "ভাষা",
    ok: "ঠিক আছে",
    addKey: "এই কী যোগ করুন",
    addKeyRoot: "একটি রুট কী যোগ করুন",
    reloadKey: "কী পুনরায় লোড করুন",
    reload: "পুনরায় লোড করুন",
    close: "বন্ধ",
    commands: "কমান্ড",
    view: "দেখুন",
    statistics: "পরিসংখ্যান",
    refresh: "রিফ্রেশ",
    pause: "বিরতি",
    resume: "পুনরায় শুরু",
    clear: "পরিষ্কার",
    rename: "না��� পরিবর্তন করুন",
    main: "ডাটাবেস",
    cancel: "বাতিল করুন",
    theme: "থিম",
    github: "GitHub",
    githubRepo: "ভান্ডার",
    githubRelease: "মুক্তি দেয়",
    githubChangelog: "চেঞ্জলগ",
    info: "Info",
    settings: "সেটিংস",
    connect: "সংযোগ করুন",
    disconnect: "সংযোগ বিচ্ছিন্ন করুন",
    logout: "লগআউট",
    overview: "ওভারভিউ",
    console: "কনসোল",
    noConnections: "কোনো সংযোগ নেই, সেটিংস মেনুতে একটি সংযোগ যোগ করুন।",
    noConnectionsInSettings: "কোনো সংযোগ নেই, আপনি উপরে একটি নতুন সংযোগ যোগ করতে পারেন৷",
    connectionAdd: "নতুন সংযোগ",
    addGroup: "গ্রুপ যোগ করুন",
    extend: "প্রসারিত করুন",
    collapse: "সঙ্কুচিত",
    add: "যোগ করুন",
    edit: "সম্পাদনা করুন",
    save: "সংরক্ষণ করুন",
    ttl: "TTL সেট করুন",
    delete: "মুছে দিন",
    remove: "সরান",
    areYouSure: "আপনি কি নিশ্চিত?",
    sure: "নিশ্চিত",
    testConnection: "পরীক্ষা সংযোগ",
    getKey: "Redis কী এবং সংশ্লিষ্ট ডেটা লোড হচ্ছে...",
    jsonViewShow: "JSON প্রদর্শন করুন",
    jsonViewEditor: "JSON সম্পাদনা করুন",
    quickConsole: "দ্রুত কনসোল"
  },
  label: {
    id: {
      nodeId: "নোড আইডি",
      id: "সংযোগ আইডি",
      info: "আপনি যদি এর বৈশিষ্ট্যগুলি পরিবর্তন করতে না চান: sshPassword, sshPrivateKey, পাসওয়ার্ড, tlsCrt, tlsKey, tlsCa, অনুগ্রহ করে সম্পত্তির মানগুলি অক্ষুণ্ণ রাখতে সেই বৈশিষ্ট্যগুলিতে সংযোগের আইডি লিখুন৷ আপনি যদি নোড পাসওয়ার্ডে একই যুক্তি চান তবে নোড পাসওয়ার্ডে নোড আইডি দিন।"
    },
    secureFeature: "আপনি যদি P3X দিয়ে শুরু হয় এমন একটি মান দেখতে দেখতে একই রকম দেখতে পান তবে এটি একটি সুরক্ষিত বৈশিষ্ট্য। সেটিংস পরিবর্তন করতে, এই সেটিংসগুলিকে খালি বা অন্য কিছু দিয়ে প্রতিস্থাপন করুন এবং সেগুলি সংরক্ষণ করা হবে। আপনি যদি সেটিংস পরিবর্তন না করেন তবে সেটিংস সার্ভারে যেমন আছে তেমনই রাখা হবে।",
    aiTranslating: "Translating...",
    aiSettings: "AI সেটিংস",
    aiGroqApiKey: "Groq API কী",
    aiGroqApiKeyInfo: "ঐচ্ছিক। ভালো পারফরম্যান্সের জন্য নিজের Groq API কী। বিনামূল্যে কী পান",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "AI API কী সংরক্ষিত",
    aiGroqApiKeyInvalid: "Invalid Groq API key",
    aiGroqApiKeyNotSet: "সেট করা হয়নি (সার্ভার ডিফল্ট)",
    aiEnabled: "AI Enabled",
    aiEnabledYes: "Yes",
    aiEnabledNo: "No",
    aiRouteViaNetwork: "Route via network.corifeus.com",
    aiRoutingDirect: "Queries go directly to Groq using your own API key, bypassing network.corifeus.com.",
    aiRoutingNetwork: "AI queries are routed through network.corifeus.com. If you have your own free Groq API key, you can turn off this switch to route directly to Groq without network.corifeus.com.",
    ssh: {
      on: "SSH চালু",
      off: "SSH বন্ধ",
      sshHost: "SSH হোস্ট",
      sshPort: "SSH পোর্ট",
      sshUsername: "SSH ব্যবহারকারীর নাম",
      sshPassword: "SSH পাসওয়ার্ড",
      sshPrivateKey: "SSH ব্যক্তিগত কী"
    },
    isBuffer: opts => `[object ArrayBuffer] মানে হল যে মানটি বাইনারি ডেটা বা মানটি এর চেয়ে বড় ${opts.maxValueAsBuffer}`,
    streamValue: `স্ট্রিম ক্ষেত্র এবং মান একটি একলাইনার। যেমন: ক্ষেত্র1 মান1 "ক্ষেত্র 2" "মান 2"`,
    streamTimestampId: `'*' মানে স্বয়ংক্রিয়ভাবে তৈরি বা <millisecondsTime>-<sequenceNumber> হিসাবে স্পেসিফিকেশন`,
    unableToLoadKey: ({
      key
    }) => {
      return `এই কী লোড করতে অক্ষম: ${key}. সম্ভব, কী মুছে ফেলা হয়েছে. সঠিক ত্রুটিটি কনসোলে রয়েছে।`;
    },
    bigJson: "এই JSON অবজেক্ট 10 kb ���র বেশি, তাই আপনি কি করছেন তা নিশ্চিত করুন, কারণ কিছু ফাংশন ধীর রেন্ডারিং হতে পারে।",
    addNode: "নোড যোগ করুন",
    validateJson: "JSON যাচাই করুন",
    reducedFunction: `কার্যকারিতা হ্রাস`,
    tooManyKeys: opts => {
      return `সম্পূর্ণ সর্বাধিক ফাংশনের জন্য অনুমোদিত কীগুলি মোট ${opts.maxLightKeysCount} গণনা এই ডাটাবেসে মোট অনুমোদিত কী আছে ${opts.count}. কী বাছাই এবং অতিরিক্ত অভিনব গাছের তথ্য নিষ্ক্রিয় করা হয়েছে। ক্লায়েন্ট অনুসন্ধানের পরিবর্তে সার্ভারে অনুসন্ধানটি ঘটছে।`;
    },
    redisCommandNotFound: "কোন Redis কমান্ড মিল পাওয়া যায়নি...",
    treeKeyStore: `বাছাই করা (প্রাকৃতিক তুলনা) ক্লায়েন্ট ওরফে ব্রাউজারে কার্যকর করা হয়, যার মানে এটির জন্য বড় বড় সেটের জন্য একটি জরিমানা রয়েছে, যেমন 10k-এর বেশি কী, এটি পৃষ্ঠা রেন্ডারিংয়ে একটু সময় যোগ করতে পারে। Redis এ কোন কী বাছাই নেই, শুধুমাত্র এইরকম।`,
    socketIoTimeout: options => {
      return `এই অনুরোধে�� জন্য Socket.IO সময় শেষ হয়েছে (সর্বোচ্চ ${options.timeout / 1000} সেকেন্ড)...`;
    },
    resizerInfo: options => {
      return `বাম বা ডান প্যানেলের ন্যূনতম প্রস্থ ${options.width}px`;
    },
    jsonViewNotParsable: "এই মান JSON পার্সযোগ্য নয়  ",
    ttlTitle: "সেকেন্ডের মধ্যে TTL সেট করুন",
    passwordSecure: "পাসওয়ার্ড খালি হতে পারে, কিন্তু তবুও এটি অক্ষর দেখাবে, এটি একটি নিরাপত্তা বৈশিষ্ট্য।",
    tlsWithoutCert: "অতিরিক্ত শংসাপত্র ছাড়াই TLS সক্ষম করুন৷",
    tlsRejectUnauthorized: "অননুমোদিত শংসাপত্র প্রত্যাখ্যান করুন",
    tlsSecure: "আপনি যদি একটি TLS কনফিগারেশন দেখতে পান যা একটি P3X দিয়ে শুরু হয় বা সমস্ত TLS সেটিংস একই রকম দেখায় তবে এটি একটি সুরক্ষিত বৈশিষ্ট্য৷ সেটিংস পরিবর্তন করতে, এই সেটিংসগুলিকে খালি বা অন্য কিছু দিয়ে প্রতিস্থ��পন করুন এবং সেগুলি সংরক্ষণ করা হবে। আপনি যদি TLS সেটিংস পরিবর্তন না করেন, সেটিংগুলি সার্ভারে থাকা অবস্থায় রাখা হবে৷",
    treeSeparatorEmpty: "গাছ বিভাজক খালি থাকলে, গাছের কোনো নেস্টেড নোড থাকবে না, শুধু একটি বিশুদ্ধ তালিকা",
    treeSeparatorEmptyNote: "কোনো ন���স্টেড নোড নেই, শুধু একটি বিশুদ্ধ তালিকা",
    welcomeConsole: "Redis কনসোলে স্বাগতম",
    welcomeConsoleInfo: "কার্সার UP বা ডাউন ইতিহাস সক্ষম করা হয়েছে",
    redisListIndexInfo: "যোগ করার জন্য খালি, -1 প্রিপেন্ড করতে বা দেখানো অবস্থানে সংরক্ষণ করতে।",
    console: "কনসোল",
    connectiondAdd: "সংযোগ যোগ করুন",
    connectiondEdit: "সংযোগ সম্পাদনা করুন",
    connectiondView: "সংযোগ দেখুন",
    connections: "সংযোগ",
    keysSort: {
      on: "কি বাছাই উপর",
      off: "কী বাছাই বন্ধ"
    },
    cluster: {
      on: "Cluster চালু",
      off: "Cluster বন্ধ"
    },
    sentinel: {
      on: "Sentinel চালু",
      off: "Sentinel বন্ধ",
      name: "Sentinel নাম"
    },
    readonly: {
      on: "শুধুমাত্র পঠনযোগ্য",
      off: "শুধুমাত্র পঠন বন্ধ"
    },
    theme: {
      light: "আলো",
      dark: "অন্ধকার এন্টারপ্রাইজ",
      darkNeu: "অন্ধকার",
      darkoBluo: "ডার্কো ব্লু",
      enterprise: "এন্টারপ্রাইজ",
      redis: "Redis",
      matrix: "ম্যাট্রিক্স"
    },
    connected: opts => {
      return `সংযুক্ত: ${opts.name}`;
    },
    tree: "গাছ",
    askAuth: "অনুমোদনের জন্য জিজ্ঞাসা করুন",
    keyboardShortcuts: "Keyboard Shortcuts",
    about: "About",
    supportedLanguages: "Supported Languages",
    version: "Version",
    redisVersion: "Redis Version",
    modules: "মডিউল",
    shortcutRefresh: "Refresh",
    shortcutSearch: "Focus Search",
    shortcutNewKey: "New Key",
    shortcutDisconnect: "সংযোগ বিচ্ছিন্ন করুন",
    themeAuto: "Auto (system)",
    languageAuto: "Auto (system)",
    shortcutCommandPalette: "Command Palette",
    commandPalette: "Command Palette",
    noResults: "No results",
    redisCommandsReference: "Redis কমান্ড",
    ungrouped: "গ্রুপবিহীন",
    grouped: "Grouped",
    connectFirst: "প্রথমে একটি Redis সার্ভারে সংযোগ করুন",
    searchLanguage: "ভাষা অনুসন্ধান...",
    exportProgress: "কী রপ্তানি হচ্ছে...",
    importProgress: "কী আমদানি হচ্ছে...",
    importPreview: "পূর্বরূপ",
    importOverwrite: "ওভাররাইট",
    importSkip: "এড়িয়ে যান",
    importConflict: "কী ইতিমধ্যে বিদ্যমান থাকলে:",
    noKeysToExport: "রপ্তানির জন্য কোনো কী নেই",
    time: "সময়",
    type: "ধরন",
    format: "ফরম্যাট",
    loading: "লোড হচ্ছে...",
    autoRefresh: "স্বয়ংক্রিয়",
    exportSearchHint: "শুধুমাত্র বর্তমান অনুসন্ধানের সাথে মিলে যাওয়া কী রপ্তানি হচ্ছে",
    importSearchHint: "আমদানি সম্পূর্ণ ডাটাবেসে প্রযোজ্য, শুধু অনুসন্ধান ফলাফলে নয়",
    deleteSearchHint: "সার্ভারে বর্তমান অনুসন্ধানের সাথে মিলে যাওয়া সমস্ত কী মুছে ফেলে",
    deletingSearchKeys: "মিলে যাওয়া কী মুছে ফেলা হচ্ছে...",
    importNoKeys: "ফাইলে কোনো কী পাওয়া যায়নি",
    desktopNotifications: "ডেস্কটপ বিজ্ঞপ্তি",
    desktopNotificationsEnabled: "ডেস্কটপ বিজ্ঞপ্তি সক্রিয় করুন",
    desktopNotificationsInfo: "Redis সংযোগ বিচ্ছিন্ন এবং পুনঃসংযোগের জন্য OS বিজ্ঞপ্তি পান যখন অ্যাপটি ফোকাসে নেই।"
  },
  status: {
    dataCopied: "ডেটা ক্লিপবোর্ডে রয়েছে",
    exportDone: "রপ্তানি সম্পন্ন",
    deletedSearchKeys: (opts) => `${opts.count} টি কী মুছে ফেলা হয়েছে`,
    indexCreated: "ইনডেক্স তৈরি হয়েছে",
    indexDropped: "ইনডেক্স মুছে ফেলা হয়েছে",
    importDone: (opts) => `আমদানি সম্পন্ন: ${opts.created} তৈরি, ${opts.skipped} এড়িয়ে গেছে, ${opts.errors} ত্রুটি`,
    nodeRemoved: "নোড সরানো হয়েছে",
    keyIsNotExisting: "এই কীটি মুছে ফেলা বা মেয়াদোত্তীর্ণ হতে পারে।",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "কোন চাবি নেই";
      } else if (opts.keyCount === 1) {
        return "1 কী";
      } else {
        return `${opts.keyCount} চাবি`;
      }
    },
    treeExpandAll: "সমস্ত গাছের পাতা প্রসারিত করুন। এই অপারেশন ব্যয়বহুল হতে পারে এবং সময় লাগতে পারে...",
    noRedisKeys: "এই ডাটাবেসে কোন কী নেই।",
    redisConnected: "Redis সফলভাবে সংযুক্ত হয়েছে৷",
    reloadingDataInfo: "Redis ডেটা তথ্য পুনরায় লোড করা হচ্ছে",
    added: "যোগ করা হয়েছে",
    saved: "আপডেট করা হয়েছে",
    cancelled: "বাতিল",
    deleted: "মুছে ফেলা হয়েছে",
    savedRedis: "Redis ডেটা সংরক্ষিত হয়",
    redisDisconnected: opts => {
      return `বর্তমান সংযোগে একটি ত্রুটি ছিল: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `db সূচক সেট করা হয়েছে ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `গাছের কী মুছে ফেলা হয়েছে (${opts.key})`;
    },
    deletedKey: opts => {
      return `কী মুছে ফেলা হয়েছে (${opts.key})`;
    },
    renamedKey: "এই কীটির নাম পরিবর্তন করা হয়েছে",
    ttlChanged: "এই কীটির TTL পরিবর্তন করা হয়েছে৷",
    notInteger: "এই ���নপুট একটি পূর্ণসংখ্যা নয়",
    persisted: "এই কী চিরকাল স্থায়ী হয়",
    set: "কী সেট/যোগ করা হয়েছে",
    connectionRestored: "সংযোগ পুনরুদ্ধার হয়েছে"
  },
  code: {
    "delete-connection": "এই সংযোগটি মুছে ফেলা হয়েছে, তাই আপনি এই Redis উদাহরণের সাথে সংযোগ বিচ্ছিন্ন করেছেন৷",
    "save-connection": "এই সংযোগটি পরিবর্তন করা হয়েছে, তাই আপনি এই Redis উদাহরণের সাথে সংযোগ বিচ্ছিন্ন করেছেন৷ আপনি আবার সংযোগ করতে পারেন.",
    "readonly-connections": "সংযোগ যোগ/সংরক্ষণ/মুছুন শুধুমাত্র পঠনযোগ্য!",
    "readonly-connection-mode": "এই সংযোগ শুধুমাত্র পঠন মোড!",
    "list-out-of-bounds": "এই তালিকা সূচক সীমার বাইরে",
    "invalid-json-value": "মানটি বৈধ নয় JSON৷",
    "http_auth_required": "অনুমোদন প্রয়োজন: অনুগ্রহ করে HTTP Basic Auth দিয়ে প্রমাণীকরণ করুন এ��ং পুনরায় লোড করুন।",
    "auto-connection-failed": "সম্ভব, সংযোগ সরানো হয়েছে এবং স্বয়ংক্রিয় সংযোগ ব্যর্থ হয়েছে, এই কারণে।",
    invalid_console_command: "এই কমান্ডটি GUI এর মাধ্যমে কাজ করছে না।",
    "AI_DISABLED": "AI নিষ্ক্রিয়। AI সেটিংসে এটি সক্রিয় করুন।",
    "AI_PROMPT_REQUIRED": "AI প্রম্পট প্রয়োজন।",
    "GROQ_API_KEY_READONLY": "Groq API কী শুধুমাত্র পঠনযোগ্য এবং পরিবর্তন করা যায় না।",
    "blocked_api_access": "আপনার Groq API পরিকল্পনা এই মডেলে অ্যাক্সেসের অনুমতি দেয় না। অনুগ্রহ করে আপনার Groq পরিকল্পনা আপগ্রেড করুন বা network.corifeus.com প্রক্সি ব্যবহার করুন।",
    "rate_limit": "AI হার সীমায় পৌঁছেছে। পরে আবার চেষ্টা করুন বা সেটিংসে আপনার নিজের Groq API কী ব্যবহার করুন।"
  },
  form: {
    error: {
      required: "প্রয়োজন",
      port: "বন্দরটি 1-65535 এর মধ্যে",
      invalid: "ফর্মটি অবৈধ৷"
    },
    connection: {
      label: {
        name: "নাম",
        group: "Group",
        host: "হোস্টনাম",
        port: "বন্দর",
        password: "পাসওয়ার্ড",
        username: "ব্যবহারকারীর নাম"
      }
    },
    treeSettings: {
      maxValueDisplay: "সর্বাধিক মান প্রদর্শন স্ট্রিং দৈর্ঘ্য",
      maxValueDisplayInfo: "0 তে সেট করা হলে, সম্পূর্ণ মান দেখান। 0-এর বেশি হলে, এই দৈর্ঘ্যে ছাঁটাই করুন। যদি -1: স্ট্রিংয়ের জন্য, সম্পাদনা না হওয়া পর্যন্ত মানটি লুকান; অন্যান্য ধরনের জন্য, সম্পূর্ণ বিষয়বস্তু দেখান।",
      maxKeys: "সর্বাধিক কী গণনা",
      maxKeysInfo: "যাতে GUI ক্র্যাশ না হয়, আমরা সর্বাধিক কী গণনা সীমিত করি।",
      keyCount: (opts) => {
        return `কী সংখ্যা: ${opts?.keyCount ?? 0}`;
      },
      label: {
        animation: "অ্যানিমেশন ব্যবহার করুন",
        noAnimation: "অ্যানিমেশন নেই",
        jsonFormatTwoSpace: "2 স্পেস সহ JSON ফর্ম্যাট করুন",
        jsonFormatFourSpace: "4টি স্পেস সহ JSON ফরম্যাট করুন",
        formName: "Redis সেটিংস",
        searchModeClient: "ক্লায়েন্ট অনুসন্ধান মোড",
        searchModeServer: "সার্ভার অনুসন্ধান মোড",
        searchModeStartsWith: "মোড দিয়ে শুরু করে অনুসন্ধান করুন",
        searchModeIncludes: "অনুসন্ধান মোড অ���্তর্ভুক্ত"
      },
      field: {
        treeSeparator: "গাছ বিভাজক",
        treeSeparatorSelector: "গাছ বিভাজক নির্বাচক",
        page: "ট্রি পেজিং গণনা",
        keyPageCount: "কী পেজিং গণনা",
        keysSort: "কীগুলি সাজান",
        searchMode: "অনুসন্ধান মোড",
        searchModeStartsWith: "অনুসন্ধান শুরু হয় / অন্তর্ভুক্ত করে"
      },
      error: {
        keyPageCount: "মূল পৃষ্ঠার সংখ্যা অবশ্যই 5 - 100 এর মধ্যে একটি পূর্ণসংখ্যা হতে হবে",
        page: "পৃষ্ঠা সংখ্যা 10 - 5000 এর মধ্যে একটি পূর্ণসংখ্যা হতে হবে",
        maxValueDisplay: "সর্বোচ্চ প্রদর্শন মান অবশ্যই -1 এবং 32768 এর মধ্যে একটি পূর্ণসংখ্যা হতে হবে",
        maxKeys: "সর্বাধিক কী গণনা মান 100 এবং 100000 এর মধ্যে একটি পূর্ণসংখ্যা হতে হবে"
      }
    },
    key: {
      label: {
        formName: {
          add: "নতুন Redis কী যোগ করুন",
          edit: "Redis কী সম্পাদনা করুন",
          append: "বিদ্যমান Redis কী যোগ করুন"
        }
      },
      field: {
        streamTimestamp: "টাইমস্ট্যাম্প",
        key: "চাবি",
        type: "টাইপ",
        index: "সূচক",
        hashKey: "হ্যাশ কী",
        score: "স্কোর",
        value: "মান",
        errorRate: "ত্রুটির হার",
        capacity: "ধারণক্ষমতা",
        topk: "Top K",
        width: "প্রস্থ",
        depth: "গভীরতা",
        decay: "ক্ষয়",
        compression: "সংকোচন",
        increment: "বৃদ্ধি",
        item: "আইটেম",
        vectorValues: "ভেক্টর মান (কমা-বিভক্ত)",
        element: "উপাদানের নাম",
      },
      error: {
        streamTimestamp: "টাইমস্ট্যাম্প প্রয়োজন, হয় Redis ফর্ম্যাট বা * হিসাবে",
        key: "মূল হল, অন্তত একটি অক্ষর",
        hashKey: "হ্যাশ টেবিল কী অন্তত একটি অক্ষর",
        score: "সাজানো সেট স্কোর প্রয়োজন",
        value: "মান প্রয়োজন",
        errorRate: "ত্রুটির হার 0 এবং 1 এর মধ্যে হতে হবে (যেমন 0.01)",
        capacity: "ধারণক্ষমতা একটি ধনাত্মক পূর্ণসংখ্যা হতে হবে",
        topk: "Top K একটি ধনাত্মক পূর্ণসংখ্যা হতে হবে",
        width: "প্রস্থ একটি ধনাত্মক পূর্ণসংখ্যা হতে হবে",
        depth: "গভীরতা একটি ধনাত্মক পূর্ণসংখ্যা হতে হবে",
        item: "আইটেম প্রয়োজন"
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
      title: "অনুসন্ধান",
      index: "ইনডেক্স",
      query: "কুয়েরি",
      results: "ফলাফল",
      noIndex: "কোনো ইনডেক্স পাওয়া যায়নি",
      createIndex: "ইনডেক্স তৈরি",
      dropIndex: "ইনডেক্স মুছুন",
      indexInfo: "ইনডেক্স তথ্য",
      indexName: "ইনডেক্স নাম",
      prefix: "কী প্রিফিক্স (ঐচ্ছিক)",
      fieldName: "ফিল্ডের নাম"
    },
    monitor: {
      title: "মনিটরিং",
      memory: "মেমোরি",
      opsPerSec: "অপস/সেকেন্ড",
      clients: "ক্লায়েন্ট",
      blocked: "ব্লকড",
      hitsMisses: "হিট রেট",
      networkIo: "নেটওয়ার্ক I/O",
      slowLog: "স্লো লগ",
      totalCommands: "মোট",
      expired: "মেয়াদোত্তীর্ণ",
      evicted: "উচ্ছেদ",
      clientList: "ক্লায়েন্ট তালিকা",
      topKeys: "মেমোরি অনুযায়ী শীর্ষ কী",
      killClient: "ক্লায়েন্ট বন্ধ করুন",
      clientKilled: "ক্লায়েন্ট বন্ধ হয়েছে",
      confirmKillClient: "আপনি কি এই ক্লায়েন্ট বন্ধ করতে চান?",
      noKeys: "কোনো কী নেই",
      rss: "RSS",
      peak: "সর্বোচ্চ",
      fragmentation: "ফ্র্যাগমেন্টেশন",
      hitsAndMisses: "হিট / মিস",
      noClients: "কোনো ক্লায়েন্ট নেই"
    },
    analysis: {
      title: "মেমোরি বিশ্লেষণ",
      runAnalysis: "বিশ্লেষণ চালান",
      running: "বিশ্লেষণ হচ্ছে...",
      typeDistribution: "টাইপ বিতরণ",
      prefixMemory: "প্রিফিক্স অনুযায়ী মেমোরি",
      topKeysByMemory: "মেমোরি অনুযায়ী শীর্ষ কী",
      expirationOverview: "কী মেয়াদোত্তীর্ণ",
      memoryBreakdown: "মেমোরি বিভাজন",
      keysScanned: "স্ক্যান করা কী",
      totalMemory: "মোট মেমোরি",
      rssMemory: "RSS মেমোরি",
      peakMemory: "সর্বোচ্চ মেমোরি",
      luaMemory: "Lua মেমোরি",
      overheadMemory: "ওভারহেড",
      datasetMemory: "ডেটাসেট",
      fragmentation: "ফ্র্যাগমেন্টেশন",
      allocator: "অ্যালোকেটর",
      withTTL: "TTL সহ",
      persistent: "স্থায়ী",
      avgTTL: "গড় TTL",
      prefix: "প্রিফিক্স",
      keyCount: "কী সংখ্যা",
      memoryUsage: "মেমোরি ব্যবহার",
      noPrefix: "(প্রিফিক্স নেই)",
      topN: "Top N",
      maxScanKeys: "সর্বোচ্চ স্ক্যান কী",
      type: "টাইপ",
      noData: "কোনো ডেটা নেই। শুরু করতে বিশ্লেষণ চালান ক্লিক করুন।",
      exportAll: "সব রপ্তানি"
    },

    overview: {
      noConnected: "Redis এর সাথে কোন সংযোগ নেই।",
      overviewClients: "ক্লায়েন্ট গণনা দ্বারা সংযুক্ত তালিকা",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "1 ক্লায়েন্ট";
        }
        return `${opt.length} ক্লায়েন্ট`;
      }
    },
    key: {
      label: {
        key: "চাবি",
        encoding: "এনকোডিং",
        compression: "সংকোচন",
        aiRateLimited: "AI অনুরোধের সীমা পৌঁছেছে। পরে আবার চেষ্টা করুন অথবা সেটিংসে আপনার নিজের Groq API কী ব্যবহার করুন।",
        aiError: "AI কোয়েরি ব্যর্থ হয়েছে",
        length: "আকার",
        ttl: "TTL",
        ttlTitle: "টাইম টু লাইভ",
        type: "টাইপ",
        ttlNotExpire: "মেয়াদ শেষ হয় না",
        lengthString: "বাইট",
        lengthItem: "আইটেম",
        actions: "কর্ম"
      },
      list: {
        table: {
          index: "সূচক",
          value: "মান"
        }
      },
      hash: {
        table: {
          hashkey: "হ্যাশকি",
          value: "মান"
        }
      },
      set: {
        table: {
          value: "সদস্য"
        }
      },
      zset: {
        table: {
          value: "সদস্য",
          score: "স্কোর"
        }
      },
      stream: {
        table: {
          timestamp: "টাইমস্ট্যাম্প আইডি",
          field: "মাঠ",
          value: "মান"
        }
      },
      timeseries: {
        chart: "চার্ট",
        info: "তথ্য",
        addPoint: "ডেটা পয়েন্ট যোগ করুন",
        from: "থেকে (ms বা -)",
        to: "পর্যন্ত (ms বা +)",
        aggregation: "সমষ্টি",
        timeBucket: "বালতি (ms)",
        none: "কিছুই না",
        dataPoints: "ডেটা পয়েন্ট",
        labels: "লেবেল",
        rules: "নিয়ম",
        retention: "ধারণ",
        timestamp: "টাইমস্ট্যাম্প",
        value: "মান",
        retentionHint: "0 = মেয়াদোত্তীর্ণ হবে না, অথবা মিলিসেকেন্ড",
        duplicatePolicy: "ডুপ্লিকেট নীতি",
        labelsHint: "key1 value1 key2 value2",
        timestampHint: "'*' মানে স্বয়ংক্রিয়ভাবে তৈরি, অথবা মিলিসেকেন্ড টাইমস্ট্যাম্প",
        editAllHint: "প্রতি লাইনে একটি ডেটা পয়েন্ট: টাইমস্ট্যাম্প মান (টাইমস্ট্যাম্প স্বয়ংক্রিয়ের জন্য * হতে পারে)",
        autoSpread: "স্বয়ংক্রিয় * বিস্তার ব্যবধান",
        formula: "সূত্র",
        formulaLinear: "রৈখিক",
        formulaRandom: "এলোমেলো",
        formulaSawtooth: "করাতের দাঁত",
        formulaPoints: "পয়েন্ট",
        formulaAmplitude: "প্রশস্ততা",
        formulaOffset: "অফসেট",
        generate: "তৈরি করুন",
        exportChart: "PNG রপ্তানি করুন",
        overlay: "ওভারলে কী",
        overlayHint: "কমা-বিভক্ত কী",
        mrangeFilter: "লেবেল ফিল্টার",
        bulkMode: "বাল্ক জেনারেট",
        mrangeHint: "যেমন sensor=temp"
      },
      probabilistic: {
        info: "তথ্য",
        addItem: "আইটেম যোগ করুন",
        checkItem: "আইটেম পরীক্ষা করুন",
        item: "আইটেম",
        exists: "বিদ্যমান",
        doesNotExist: "বিদ্যমান নেই",
        topkList: "শীর্ষ আইটেম",
        topkCount: "গণনা",
        queryCount: "কোয়েরি গণনা",
        queryResult: "কোয়েরি ফলাফল",
        addedSuccessfully: "আইটেম সফলভাবে যোগ করা হয়েছে",
        deletedSuccessfully: "আইটেম সফলভাবে মুছে ফেলা হয়েছে",
        quantile: "কোয়ান্টাইল",
        quantileResult: "ফলাফল",
        noItems: "প্রদর্শনের জন্য কোনো আইটেম নেই",
        resetConfirm: "এই T-Digest-এর সমস্ত ডেটা রিসেট করবেন?",
      },
      vectorset: {
        info: "তথ্য",
        elements: "উপাদানসমূহ",
        similarity: "সাদৃশ্য অনুসন্ধান",
        searchByElement: "উপাদান দ্বারা অনুসন্ধান",
        searchByVector: "ভেক্টর দ্বারা অনুসন্ধান",
        vectorValues: "ভেক্টর মান",
        element: "উপাদান",
        score: "স্কোর",
        count: "গণনা",
        addElement: "উপাদান যোগ করুন",
        attributes: "বৈশিষ্ট্য",
        noAttributes: "কোনো বৈশিষ্ট্য নেই",
        dimensions: "মাত্রা",
        removeConfirm: "এই উপাদানটি VectorSet থেকে সরাতে চান?",
        noElements: "কোনো উপাদান নেই",
      }
    },
    treeControls: {
      settings: "গাছের সেটিংস",
      expandAll: "সব প্রসারিত",
      collapseAll: "সব সঙ্কুচিত করুন",
      level: "স্তর",
      search: {
        search: "কীগুলিতে অনুসন্ধান করুন",
        clear: "খালি সেট করতে বর্তমান অনুসন্ধান সাফ করুন",
        placeholderClient: "ক্লায়েন্ট সাইড অনুসন্ধান করুন",
        placeholderServer: "সার্ভার সাইড সার্চ করুন",
        info: (opts) => "ক্লায়েন্ট সাইড সার্চ মানে, যে এটি সার্চ ইনপুটের লেখার সাথে মেলে। সার্ভার সাইড সার্চের মানে হল, এটি কী প্যাটার্নে *{search-text}* হিসাবে সার্চ করার মত। বড় সার্চ সেটের জন্য, সার্ভার সাইড সার্চিং ব্যবহার করা ভালো। ছোট অনুসন্ধান সেটের জন্য, ক্লায়েন্ট সাইড অনুসন্ধান মোড ব্যবহার করা ভাল।" + ` চাবি গণনা শেষ হলে ${opts?.maxLightKeysCount ?? 110000}, আপনি শুধুমাত্র সার্ভার সাইডে অনুসন্ধান করতে পারেন.`,
        largeSetInfo: "একটি বড় সেটে, ক্লায়েন্ট সাইড অনুসন্ধান অক্ষম করা হয়। তাই এই মুহূর্তে শুধুমাত্র সার্ভার সাইড সার্চ করা সম্ভব।",
        infoDetails: "অনুসন্ধান কিভাবে কাজ করে তা জানতে, অনুগ্রহ করে সেটিংস দেখুন"
      },
      pager: {
        next: "পরবর্তী",
        prev: "আগের",
        first: "প্���থম",
        last: "শেষ"
      }
    }
  },
  time: {
    type: "ধরন",
    format: "ফরম্যাট",
    loading: "লোড হচ্ছে...",
    years: "বছর",
    months: "মাস",
    days: "দিন",
    year: "বছর",
    month: "মাস",
    day: "দিন",
    second: "সেকেন্ড",
    seconds: "সেকেন্ড",
    minute: "মিনিট",
    minutes: "মিনিট",
    hour: "ঘন্টা",
    hours: "ঘন্টা"
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
    bloom: "Bloom ফিল্টার",
    cuckoo: "Cuckoo ফিল্টার",
    topk: "Top-K",
    cms: "Count-Min Sketch",
    tdigest: "T-Digest",
    vectorset: "VectorSet",
  }
};
module.exports = strings;
