const strings = {
  error: {
    server_error: "სერვერის შეცდომა, გთხოვთ სცადოთ ხელახლა"
  },
  title: {
    donate: "შემოწირულობა",
    jsonRecursive: "ყველა ფოთლის გაფართოება",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "თქვენ შეგიძლიათ აირჩიოთ Redis კავშირი ქვედა მარცხენა მენიუდან დასაკავშირებლად.",
    statistics: "სტატისტიკა",
    error: "შეცდომა",
    connectingRedis: "დაკავშირება Redis-თან ...",
    socketioConnectError: "Socket.IO შეცდომა",
    db: "DB",
    server: "სერვერი",
    clients: "კლიენტები",
    memory: "მეხსიერება",
    persistence: "გამძლეობა",
    stats: "სტატისტიკა",
    replication: "რეპლიკაცია",
    cpu: "CPU",
    cluster: "Cluster",
    modules: "მოდულები",
    errorstats: "errorstats",
    commandstats: "commandstats",
    latencystats: "latencystats",
    keysizes: "keysizes",
    threads: "threads",
  },
  confirm: {
    dropIndex: "დარწმუნebuli ხართ?",
    uploadBuffer: "დარწმუნებული ხართ, რომ ატვირთავთ ამ ორობით მონაცემს?",
    uploadBufferDone: "ორობითი მონაცემები ატვირთულია",
    uploadBufferDoneAndSave: "ბინარული მონაცემები აიტვირთება და ინახება სერვერზე",
    title: "დაადასტურეთ",
    alert: "გაფრთხილება",
    info: "ინფორმაცია",
    deleteListItem: "დარწმუნებული ხართ, რომ წაშლით ამ სიის ერთეულს?",
    deleteHashKey: "დარწმუნებული ხართ, რომ წაშლით ამ ჰეშის გასაღების ერთეულს?",
    deleteStreamTimestamp: "დარწმუნებული ხართ, რომ წაშლით ამ ნაკადის დროის ნიშანს?",
    deleteSetMember: "დარწმუნებული ხართ, რომ წაშლით ამ ნ���კრების წევრს?",
    deleteZSetMember: "დარწმუნებული ხართ, რომ წაშლით ამ დალაგებული ნაკრების წევრს?",
    deleteConnection: "დაადასტურეთ",
    deleteConnectionText: "დარწმუნებული ხართ, რომ წაშალეთ ეს Redis კავშირი?",
    delete: "\u10ec\u10d0\u10e8\u10da\u10d0?",
    deleteNode: "დარწმუნებული ხართ, რომ წაშლით ამ Redis კვანძს?",
    deleteAllKeys: opts => {
      return `წაშალე ეს ხე და მისი ყველა გასაღები (${opts.key})?`;
    },
    deleteSearchKeys: opts => {
      return `დარწმუნებული ხართ, რომ წაშლით ყველა გასაღებს, რომლებიც ემთხვევა "${opts.pattern}"-ს? ნაპოვნია ${opts.count} გასაღები.`;
    },
    socketioConnectError: "Socket.IO ვერ დაუკავშირდება სერვერს, შეგიძლიათ გადატვირთოთ და თავად სცადოთ კავშირის შეცდომის მოგვარება, კლიენტმა არ იცის როგორ მოაგვაროს იგი.",
    socketioAuthRequired: "საჭიროა Socket.IO ავტორიზაცია. გთხოვთ, გადაამოწმოთ ავტორიზაცია HTTP Basic Auth (მომხმარებლის სახელი/პაროლი) და გადატვირთეთ.",
    deleteKey: "დარწმუნებული ხართ, რომ წაშალეთ ეს გასაღები?",
    rename: {
      title: "დარწმუნებული ხართ, რომ გადაარქმევთ ამ გასაღებს?",
      textContent: "ეს მოქმედება კლავს სამუდამოდ გადარქმევს.",
      placeholder: "Redis გასაღები (აუცილებელია)"
    },
    ttl: {
      title: "დარწმუნებული ხართ, რომ გსურთ შეცვალოთ ამ გასაღების TTL?",
      textContent: "TTL-ის შეცვლა განაახლებს ამ გასაღების სიცოცხლის ხანგრძლივობას. დატოვეთ ცარიელი, რომ ეს გასაღები სამუდამოდ შეინახოთ.",
      placeholder: "Redis გასაღების TTL (მთელი ან ცარიელი)",
      placeholderPlaceholder: "ცარიელი ნიშნავს, რომ ის სამუდამოდ გრძელდება; წინააღმდეგ შემთხვევაში შეიყვანეთ მთელი რიცხვი.",
      convertTextToTime: "ტექსტის დროში გადაყვანა",
      convertTextToTimePlaceholder: "მაგ. 1d იქნება 86400"
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
    copy: "კოპირება",
    downloadBuffer: "ჩამოტვირთეთ ორობითი",
    setBuffer: "ატვირთეთ ორობითი",
    exportKeys: "გასაღებების ექსპორტი",
    exportAllKeys: (opts) => `ყველა ${opts.count} გასაღების ექსპორტი`,
    exportSearchResults: (opts) => `${opts.count} შედეგის ექსპორტი`,
    deleteAllKeysMenu: (opts) => `ყველას წაშლა ${opts.count}`,
    importKeys: "გასაღებების იმპორტი",
    deleteSearchKeys: (opts) => `${opts.count} შესაბამისი გასაღების წაშლა`,
    saveWithFormatJson: "შეინახეთ ფორმატით",
    formatJson: "ფორმატი Json",
    wrap: "შეფუთვა",
    unwrap: "გაშალეთ",
    downloadJson: "ჩამოტვირთეთ JSON",
    pubsubMonitor: "PubSub",
    pulse: "Pulse",
    profiler: "Profiler",
    memoryAnalysis: "Analysis",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "ენა",
    ok: "OK",
    addKey: "დაამატეთ ამ გასაღებს",
    addKeyRoot: "დაამატეთ root გასაღები",
    reloadKey: "გადატვირთეთ გასაღები",
    reload: "გა��ატვირთვა",
    close: "დახურვა",
    commands: "ბრძანებები",
    view: "ხედი",
    statistics: "სტატისტიკა",
    refresh: "განაახლეთ",
    pause: "პაუზა",
    resume: "გაგრძელება",
    clear: "წმინდა",
    rename: "გადარქმევა",
    main: "მონაცემთა ბაზა",
    cancel: "გაუქმება",
    theme: "თემა",
    github: "GitHub",
    githubRepo: "საცავი",
    githubRelease: "რელიზები",
    githubChangelog: "ცვლილებების ჟურნალი",
    info: "Info",
    settings: "პარამეტრები",
    connect: "დაკავშირება",
    disconnect: "გათიშვა",
    overview: "მიმოხილვა",
    console: "კონსოლი",
    noConnections: "კავშირები არ არის, დაამატეთ კავშირი პარამეტრების მენიუში.",
    noConnectionsInSettings: "კავშირები არ არის, ზემოთ შეგიძლიათ დაამატოთ ახალი კავშირი.",
    connectionAdd: "ახალი კავშირი",
    addGroup: "ჯგუფის დამატება",
    extend: "გააგრძელე",
    collapse: "კოლაფსი",
    add: "დამატება",
    edit: "რედაქტირება",
    save: "შენახვა",
    ttl: "დააყენეთ TTL",
    delete: "წაშლა",
    remove: "ამოღება",
    sure: "რა თქმა უნდა",
    testConnection: "ტესტი კავშირი",
    getKey: "იტვირთება Redis გასაღები და მასთან დაკავშირებული მონაცემები...",
    jsonViewShow: "ეკრანი JSON",
    jsonViewEditor: "JSON რედაქტირება",
    quickConsole: "სწრაფი კონსოლი",
  },
  label: {
    id: {
      nodeId: "კვანძის ID",
      id: "კავშირის ID",
      info: "თუ არ გსურთ შეცვალოთ თვისებები: sshPassword, sshPrivateKey, პაროლი, tlsCrt, tlsKey, tlsCa, გთხოვთ, შეიყვანოთ კავშირის ID ამ თვისებებში, რათა შეინარჩუნოთ ქონების მნიშვნელობები ხელუხლებელი. თუ გსურთ იგივე ლოგიკა კვანძის პაროლში, მაშინ შეიყვანეთ კვანძის ID კვანძის პაროლში."
    },
    secureFeature: "თუ ხედავთ მნიშვნელობას, რომელიც იწყება P3X-ით, იგივე გამოიყურება, ეს უსაფრთხო ფუნქციაა. პარამეტრების შესაცვლელად, უბრალოდ შეცვალეთ ეს პარამეტრები ცარიელი ან ს��ვა რამით და ისინი შეინახება. თუ არ შეცვლით პარამეტრებს, პარამეტრები შენარჩუნდება როგორც სერვერზეა.",
    aiTranslating: "Translating...",
    aiSettings: "AI პარამეტრები",
    aiGroqApiKey: "Groq API გასაღები",
    aiGroqApiKeyInfo: "არასავალდებულო. თქვენი Groq API გასაღები უკეთესი წარმადობისთვის. მიიღეთ უფასო გასაღები",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "AI API გასაღები შენახულია",
    aiGroqApiKeyInvalid: "Invalid Groq API key",
    aiGroqApiKeyNotSet: "არ არის დაყენებული (სერვერის ნაგულისხმევი)",
    aiEnabled: "AI Enabled",
    aiEnabledYes: "Yes",
    aiEnabledNo: "No",
    aiRouteViaNetwork: "Route via network.corifeus.com",
    aiRoutingDirect: "Queries go directly to Groq using your own API key, bypassing network.corifeus.com.",
    aiRoutingNetwork: "AI queries are routed through network.corifeus.com. If you have your own free Groq API key, you can turn off this switch to route directly to Groq without network.corifeus.com.",
    ssh: {
      on: "SSH ჩართულია",
      off: "SSH გამორთულია",
      sshHost: "SSH ჰოსტი",
      sshPort: "SSH პორტი",
      sshUsername: "SSH მომხმარებლის სახელი",
      sshPassword: "SSH პაროლი",
      sshPrivateKey: "SSH პირადი გასაღები"
    },
    isBuffer: opts => `[object ArrayBuffer] ნიშნავს, რომ მნიშვნელობა არის ორობითი მონაცემები ან მნიშვნელობა უფრო დიდია ${opts.maxValueAsBuffer}`,
    streamValue: `ნაკადის ველი და მნიშვნელობა არის ერთი ხაზი. მაგ.: field1 value1 "ველი 2" "მნიშვნელობა 2"`,
    streamTimestampId: `'*' ნიშნავს ავტომატურად გენერირებულს ან სპეციფიკაციას, როგორც <millisecondsTime>-<sequenceNumber>`,
    unableToLoadKey: ({
      key
    }) => {
      return `ამ გასაღების ჩატვირთვა შეუძლებელია: ${key}. შესაძლებელია, გასაღები წაიშალა. ზუსტი შეცდომა კონსოლშია.`;
    },
    bigJson: "ეს JSON ობიექტი 10 კბ-ზე მეტია, ამიტომ დარწმუნდით, რომ იცით რას აკეთებთ, რადგან ზოგიერთი ფუნქცია შეიძლება იყოს ნელი რენდერით.",
    addNode: "კვანძის დამატება",
    validateJson: "დაადასტურეთ JSON",
    reducedFunction: `შემცირებული ფუნქციონირება`,
    tooManyKeys: opts => {
      return `სრული მაქსიმალური ფუნქციებისთვის ნებადართული კლავიშები არის ${opts.maxLightKeysCount} ითვლიან. ამ მონაცემთა ბაზას აქვს ნებადართული გასაღებები მთლიანობაში ${opts.count}. გასაღების დახარისხება და დამატებითი ლამაზი ხის ინფორმაცია გამორთულია. ძებნა ხდება მხოლოდ სერვერზე, კლიენტის ძიების ნაცვლად.`;
    },
    redisCommandNotFound: "Redis ბრძანების შესატყვისი ვერ მოიძებნა ...",
    treeKeyStore: `დახარისხება (ბუნებრივი შედარება) შესრულებულია კლიენტზე, ანუ ბრაუზერზე, რაც ნიშნავს, რომ მას აქვს ჯარიმა დიდი დიდი ნაკრებისთვის, როგორიცაა 10 ათასზე მეტი კლავიატურა, შესაძლოა ცოტა დრო დაამატოს გვერდის რენდერს. Redis-ში არ არის გასაღების დახარისხება, მხოლოდ ასე.`,
    socketIoTimeout: options => {
      return `Socket.IO ამ მოთხოვნის დრო ამოიწურა (მაქს ${options.timeout / 1000} წამი)...`;
    },
    resizerInfo: options => {
      return `მარცხენა ან მარჯვენა პანელის მინიმალური სიგანეა ${options.width}px`;
    },
    jsonViewNotParsable: "ეს მნიშვნელობა არ არის JSON გასაანალიზებელი  ",
    ttlTitle: "დააყენეთ TTL წამებში",
    passwordSecure: "პაროლი შეიძლება ცარიელი იყოს, მაგრამ მაინც აჩვენებს სიმბოლოებს, ეს უსაფრთხოების ფუნქციაა.",
    tlsWithoutCert: "ჩართეთ TLS დამატებითი სერტიფიკატის გარეშე",
    tlsRejectUnauthorized: "უარი თქვით არასანქცირებულ სერტიფიკატზე",
    tlsSecure: "თუ ხედავთ TLS კონფიგურაციას, რომელიც იწყება P3X-ით ან ყველა TLS პარამეტრი ერთნაირად გამოიყურება, ეს უსაფრთხო ფუნქციაა. პარამეტრების შესაცვლელად, უბრალოდ შეცვალეთ ეს პარამეტრები ცარიელი ან სხვა რამით და ისინი შეინახება. თუ არ შეცვლით TLS პარამეტრებს, პარამეტრები შენარჩუნდება როგორც სერვერზეა.",
    treeSeparatorEmpty: "თუ ხეების გამყოფი ცარიელია, ხეს არ ექნება ჩადგმული კვანძები, მხოლოდ სუფთა სია",
    treeSeparatorEmptyNote: "არ არის ჩადგმული კვანძები, მხოლოდ სუფთა სია",
    welcomeConsole: "კეთილი იყოს თქვენი მობრძანება Redis კონსოლში",
    welcomeConsoleInfo: "კურსორის UP ან DOWN ისტორია ჩართულია",
    redisListIndexInfo: "ცარიელი დასამატებლად, -1 დასამაგრებლად ან შესანახად ნაჩვენები პოზიციაზე.",
    console: "კონსოლი",
    connectiondAdd: "კავშირის დამატება",
    connectiondEdit: "კავშირის რედაქტირება",
    connectiondView: "კავშირის ნახვა",
    connections: "კავშირები",
    keysSort: {
      on: "გასაღების დახარისხება ჩართულია",
      off: "გასაღების დახარისხება"
    },
    cluster: {
      on: "Cluster ჩართულია",
      off: "Cluster გამორთულია"
    },
    sentinel: {
      on: "Sentinel ჩართულია",
      off: "Sentinel გამორთულია",
      name: "Sentinel სახელი"
    },
    readonly: {
      on: "მხოლოდ წაკითხვაზე",
      off: "მხოლოდ წასაკითხად გამორთულია"
    },
    theme: {
      light: "სინათლე",
      dark: "ბნელი საწარმო",
      darkNeu: "ბნელი",
      darkoBluo: "დარკო ბლუო",
      enterprise: "საწარმო",
      redis: "Redis",
      matrix: "მატრ��ცა"
    },
    connected: opts => {
      return `დაკავშირებულია: ${opts.name}`;
    },
    tree: "ხე",
    askAuth: "მოითხოვეთ ავტორიზაცია",
    keyboardShortcuts: "Keyboard Shortcuts",
    about: "About",
    supportedLanguages: "Supported Languages",
    version: "Version",
    redisVersion: "Redis Version",
    modules: "მოდულები",
    shortcutRefresh: "Refresh",
    shortcutSearch: "Focus Search",
    shortcutNewKey: "New Key",
    shortcutDisconnect: "გათიშვა",
    themeAuto: "Auto (system)",
    shortcutCommandPalette: "Command Palette",
    commandPalette: "Command Palette",
    noResults: "No results",
    redisCommandsReference: "Redis ბრძანebebi",
    ungrouped: "ჯგუფის გარეშე",
    grouped: "Grouped",
    connectFirst: "connectFirst",
    searchLanguage: "ენის ძიება...",
    exportProgress: "გასაღebebis ექსპორტი...",
    importProgress: "გასაღebebis იმპორტი...",
    importPreview: "წინასწარი ნახვა",
    importOverwrite: "გადაწერა",
    importSkip: "გამოტოვება",
    importConflict: "თუ გასაღები უკვე არსებobs:",
    noKeysToExport: "არ არის გასაღebebi ექსპორტისთვის",
    time: "დრო",
    type: "ტიპი",
    format: "ფორმატი",
    loading: "იტvirtheba...",
    autoRefresh: "ავტო",
    exportSearchHint: "ექსპორტი მხოლოდ მიმდინარე ძიებას შესაბამისი გასაღebebis",
    importSearchHint: "იმპორტი ვრცeldeba მთელ მონაცემთა ბაზაზე",
    deleteSearchHint: "სერვერზე მიმდინარე ძიების შესაბამისი ყველა გასაღების წაშლა",
    deletingSearchKeys: "შესაბამისი გასაღebebis წdelays...",
    importNoKeys: "ფაილში გასაღebebi ვერ მოიძებna",
  },
  status: {
    dataCopied: "მონაცემები ბუფერშია",
    exportDone: "ექსპორტი დასრულda",
    deletedSearchKeys: (opts) => `წაშლილია ${opts.count} გასაღები`,
    indexCreated: "ინდექსი შეიქმნა",
    indexDropped: "ინდექსი წაიშალა",
    importDone: (opts) => `იმპორტი დასრულda: ${opts.created} შეიქმნა, ${opts.skipped} გამოტოვda, ${opts.errors} შეცdomna`,
    nodeRemoved: "კვანძი ამოღებულია",
    keyIsNotExisting: "ეს გასაღები შეიძლება წაშლილი ან ვადაგასული ყოფილიყო.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "გასაღები არ არის";
      } else if (opts.keyCount === 1) {
        return "1 გასაღები";
      } else {
        return `${opts.keyCount} გასაღებები`;
      }
    },
    treeExpandAll: "გააფართოვეთ ყველა ხის ფოთოლი. ეს ოპერაცია შეიძლება იყოს ძვირი და შეიძლება დრო დასჭირდეს ...",
    noRedisKeys: "ამ მონაცემთა ბაზაში გასაღებები არ არის.",
    redisConnected: "Redis დაკავშირებულია წარმატებით",
    reloadingDataInfo: "მიმდინარეობს Redis მონაცემთა ინფორმაციის გადატვირთვა",
    added: "დამატებულია",
    saved: "განახლებულია",
    cancelled: "გაუქმდა",
    deleted: "წაშლილია",
    savedRedis: "Redis მონაცემები შენახულია",
    redisDisconnected: opts => {
      return `მიმდინარე კავშირს ჰქონდა შეცდომა: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `db ინდექსი დაყენებულია ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `ხის გასაღები წაი��ალა (${opts.key}).`;
    },
    deletedKey: opts => {
      return `გასაღები წაიშალა (${opts.key}).`;
    },
    renamedKey: "ამ გასაღებს დაარქვეს სახელი",
    ttlChanged: "ამ გასაღების TTL შეიცვალა",
    notInteger: "ეს შეყვანა არ არის მთელი რიცხვი",
    persisted: "ეს გასაღები სამუდამოდ რჩება",
    set: "გასაღები დაყენებულია/დამატებულია"
  },
  code: {
    "delete-connection": "ეს კავშირი წაიშალა, ასე რომ თქვენ გათიშული ხართ ამ Redis ეგზემპლართან.",
    "save-connection": "ეს კავშირი შეიცვალა, ასე რომ თქვენ გათიშული ხართ ამ Redis ეგზემპლართან. შეგიძლიათ ხელახლა დაუკავშირდეთ.",
    "readonly-connections": "კავშირების დამატება/შენახვა/წაშლა მხოლოდ წაკი���ხულია!",
    "readonly-connection-mode": "ეს კავშირი მხოლოდ წაკითხვის რეჟიმშია!",
    "list-out-of-bounds": "ეს სიის ინდექსი საზღვრებს გარეთაა",
    "invalid-json-value": "მნიშვნელობა არ არის სწორი JSON.",
    "http_auth_required": "საჭიროა ავტორიზაცია: გთხოვთ, გადაამოწმოთ ავთენტიფიკაცია HTTP Basic Auth-ით და გადატვირთეთ.",
    "auto-connection-failed": "შესაძლებელია, კავშირი წაიშალა და ავტომატური კავშირი ვერ მოხერხდა ამის გამო.",
    invalid_console_command: "ეს ბრძანება არ მუშაობს GUI-ით."
  },
  form: {
    error: {
      required: "საჭირო",
      port: "პორტი არის 1-65535 შორის",
      invalid: "ფორმა არასწორია"
    },
    connection: {
      label: {
        name: "სახელი",
        group: "Group",
        host: "მასპინძლის სახელი",
        port: "პორტი",
        password: "პაროლი",
        username: "მომხმარებლის სახელი"
      }
    },
    treeSettings: {
      maxValueDisplay: "მაქსიმალური მნიშვნელობის ჩვენების სტრიქონის სიგრძე",
      maxValueDisplayInfo: "თუ დაყენებულია 0-ზე, აჩვენეთ სრული მნიშვნელობები. თუ 0-ზე მეტია, შეკვეცეთ ამ სიგრძეზე. თუ -1: სტრიქონებისთვის დამალეთ მნიშვნელობა რედაქტირებამდე; სხვა ტიპებისთვის, სრული შინაარსის ჩვენება.",
      maxKeys: "გასაღების მაქსიმალური რაოდენობა",
      maxKeysInfo: "იმისათვის, რომ GUI არ დაირღვეს, ჩვენ ვზღუდავთ გასაღების მაქსიმალურ რაოდენობას.",
      keyCount: (opts) => {
        return `გასაღებების რაოდენობა: ${opts?.keyCount ?? 0}`;
      },
      label: {
        animation: "გამოიყენეთ ანიმაცია",
        noAnimation: "არავითარი ანიმაცია",
        jsonFormatTwoSpace: "ფორმატირება JSON 2 ინტერვალით",
        jsonFormatFourSpace: "ფორმატირება JSON 4 ინტერვალით",
        formName: "Redis პარამეტრები",
        searchModeClient: "კლიენტის ძიების რეჟიმი",
        searchModeServer: "სერვერის ძიების რეჟიმი",
        searchModeStartsWith: "ძებნა იწყება რეჟიმით",
        searchModeIncludes: "ძებნა მოიცავს რეჟიმს"
      },
      field: {
        treeSeparator: "ხეების გამყოფი",
        treeSeparatorSelector: "ხეების გამყოფის სელექტორი",
        page: "ხეების პეიჯინგის რაოდენობა",
        keyPageCount: "საკვანძო პეიჯინგის რაოდენობა",
        keysSort: "დაალაგეთ გასაღებები",
        searchMode: "ძიების რეჟიმი",
        searchModeStartsWith: "ძებნა იწყება / მოიცავს"
      },
      error: {
        keyPageCount: "საკვანძო გვერდების რაოდენობა უნდა იყოს მთელი რიცხვი 5-დან 100-მდე",
        page: "გვერდების რაოდენობა უნდა იყოს მთელი რიცხვი 10-დან 5000-მდე",
        maxValueDisplay: "მაქსიმალური ჩვენების მნიშვნელობა უნდა იყოს მთელი რიცხვი -1-დან 32768-მდე",
        maxKeys: "გასაღების დათვლის მაქსიმალური მნიშვნელობა უნდა იყოს მთელი რიცხვი 100-დან 100000-მდე"
      }
    },
    key: {
      label: {
        formName: {
          add: "დაამატეთ ახალი Redis გასაღები",
          edit: "Redis კლავიშის რედაქტირება",
          append: "დაამატეთ არსებულ Redis გასაღებს"
        }
      },
      field: {
        streamTimestamp: "დროის შტამპი",
        key: "გასაღები",
        type: "ტიპი",
        index: "ინდექსი",
        hashKey: "ჰეშის გასაღები",
        score: "ქულა",
        value: "��ირებულება"
      },
      error: {
        streamTimestamp: "დროის ანაბეჭდი საჭიროა, ან Redis ფორმატში ან როგორც *",
        key: "მთავარი მაინც ერთი პერსონაჟია",
        hashKey: "ჰეშის ცხრილის გასაღები არის მინიმუმ ერთი სიმბოლო",
        score: "საჭიროა დალაგებული ნაკრების ქულა",
        value: "ღირებულება აუცილებელია"
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
      title: "ძიeba",
      index: "ინdelays",
      query: "მoთxovna",
      results: "შედეgebi",
      noIndex: "ინdelays",
      createIndex: "ინdelays",
      dropIndex: "ინdelays",
      indexInfo: "ინdelays",
      indexName: "ინdelays",
      prefix: "ინdelays",
      fieldName: "ინdelays",
    },
    monitor: {
      title: "მონიტორინგი",
      memory: "მეხსიერება",
      opsPerSec: "ოპერაცია/წმ",
      clients: "კლიენტები",
      blocked: "დაბლოკილი",
      hitsMisses: "მოხვედრის სიხშირე",
      networkIo: "ქსელი I/O",
      slowLog: "ნელი ჟურნალი",
      totalCommands: "სულ",
      expired: "ვადაგასული",
      evicted: "გამოძevebuli",
      clientList: "კლიენტების სია",
      topKeys: "უდიდესი გასაღebebi",
      killClient: "კლიენტის გაchერeba",
      clientKilled: "კლიენტი გაchერda",
      confirmKillClient: "დარწმუნebuli ხართ კლიენტის შეჩerebashi?",
      noKeys: "გასაღebebi არ არის",
      rss: "RSS",
      peak: "პიკი",
      fragmentation: "ფრაგმენტაცია",
      hitsAndMisses: "მოხვედრები / გაცდენები",
      noClients: "კლიენტebi არ არის",
    },
    analysis: {
      title: "მეხსიერების ანალიზი",
      runAnalysis: "ანალიზის გაშვება",
      running: "ანალიზდება...",
      typeDistribution: "ტიპების განაწილება",
      prefixMemory: "მეხსიერება პრეფიქსით",
      topKeysByMemory: "უდიდესი გასაღებები მეხსიერებით",
      expirationOverview: "გასაღებების ვადა",
      memoryBreakdown: "მეხსიერების დეტალები",
      keysScanned: "სკანირებული გასაღებები",
      totalMemory: "სრული მეხსიერება",
      rssMemory: "RSS მეხსიერება",
      peakMemory: "პიკური მეხსიერება",
      luaMemory: "Lua მეხსიერება",
      overheadMemory: "ზედნადები",
      datasetMemory: "მონაცემთა ნაკრები",
      fragmentation: "ფრაგმენტაცია",
      allocator: "ალოკატორი",
      withTTL: "TTL-ით",
      persistent: "მუდმივი",
      avgTTL: "საშუალო TTL",
      prefix: "პრეფიქსი",
      keyCount: "გასაღებების რაოდენობა",
      memoryUsage: "მეხსიერების მოხმარება",
      noPrefix: "(პრეფიქსის გარეშე)",
      topN: "Top N",
      maxScanKeys: "მაქს. სკანირებული გასაღებები",
      type: "ტიპი",
      noData: "მონაცემები არ არის. დააწკაპუნეთ ანალიზის გაშვება დასაწყებად.",
      exportAll: "ყველას ექსპორტი",
    },

    overview: {
      noConnected: "არ არის კავშირი Redis-თან.",
      overviewClients: "ჩამოთვალეთ დაკავშირებული კლიენტები��� რაოდენობის მიხედვით",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "1 კლიენტი";
        }
        return `${opt.length} კლიენტებს`;
      }
    },
    key: {
      label: {
        key: "გასაღები",
        encoding: "კოდირება",
        compression: "შეკუმშვა",
        aiRateLimited: "AI მოთხოვნების ლიმიტი ამოიწურა. სცადეთ მოგვიანებით ან გამოიყენეთ თქვენი Groq API გასაღები პარამეტრებში.",
        aiError: "AI მოთხოვნა ვერ შესრულდა",
        length: "ზომა",
        ttl: "TTL",
        ttlTitle: "დროა ვიცხოვროთ",
        type: "ტიპი",
        ttlNotExpire: "არ იწურება",
        lengthString: "ბაიტები",
        lengthItem: "ნივთები",
        actions: "მოქმედებები"
      },
      list: {
        table: {
          index: "ინდექსი",
          value: "��ირებულება"
        }
      },
      hash: {
        table: {
          hashkey: "ჰეშკი",
          value: "��ირებულება"
        }
      },
      set: {
        table: {
          value: "წევრი"
        }
      },
      zset: {
        table: {
          value: "წევრი",
          score: "ქულა"
        }
      },
      stream: {
        table: {
          timestamp: "დროის ანაბეჭდის ID",
          field: "ველი",
          value: "��ირებულება"
        }
      },
      timeseries: {
        chart: "\u10d3\u10d8\u10d0\u10d2\u10e0\u10d0\u10db\u10d0",
        info: "\u10d8\u10dc\u10e4\u10dd\u10e0\u10db\u10d0\u10ea\u10d8\u10d0",
        addPoint: "\u10db\u10dd\u10dc\u10d0\u10ea\u10d4\u10db\u10d7\u10d0 \u10ec\u10d4\u10e0\u10e2\u10d8\u10da\u10d8\u10e1 \u10d3\u10d0\u10db\u10d0\u10e2\u10d4\u10d1\u10d0",
        from: "\u10e1\u10d0\u10d8\u10d3\u10d0\u10dc (ms \u10d0\u10dc -)",
        to: "\u10db\u10d3\u10d4 (ms \u10d0\u10dc +)",
        aggregation: "\u10d0\u10d2\u10e0\u10d4\u10d2\u10d0\u10ea\u10d8\u10d0",
        timeBucket: "\u10d7\u10d0\u10e1\u10d8 (ms)",
        none: "\u10d0\u10e0\u10ea\u10d4\u10e0\u10d7\u10d8",
        dataPoints: "\u10db\u10dd\u10dc\u10d0\u10ea\u10d4\u10db\u10d7\u10d0 \u10ec\u10d4\u10e0\u10e2\u10d8\u10da\u10d4\u10d1\u10d8",
        labels: "\u10d8\u10d0\u10e0\u10da\u10d8\u10e7\u10d4\u10d1\u10d8",
        rules: "\u10ec\u10d4\u10e1\u10d4\u10d1\u10d8",
        retention: "\u10e8\u10d4\u10dc\u10d0\u10ee\u10d5\u10d0",
        timestamp: "\u10d3\u10e0\u10dd\u10d8\u10e1 \u10d0\u10dc\u10d0\u10d1\u10d4\u10ed\u10d3\u10d8",
        value: "\u10e6\u10d8\u10e0\u10d4\u10d1\u10e3\u10da\u10d4\u10d1\u10d0",
        retentionHint: "0 = \u10d5\u10d0\u10d3\u10d8\u10e1 \u10d2\u10d0\u10e0\u10d4\u10e8\u10d4, \u10d0\u10dc \u10db\u10d8\u10da\u10d8\u10ec\u10d0\u10db\u10d4\u10d1\u10d8",
        duplicatePolicy: "\u10d3\u10e3\u10d1\u10da\u10d8\u10e0\u10d4\u10d1\u10d8\u10e1 \u10de\u10dd\u10da\u10d8\u10e2\u10d8\u10d9\u10d0",
        labelsHint: "key1 value1 key2 value2",
        timestampHint: "'*' \u10dc\u10d8\u10e8\u10dc\u10d0\u10d5\u10e1 \u10d0\u10d5\u10e2\u10dd\u10db\u10d0\u10e2\u10e3\u10e0\u10d0\u10d3 \u10d2\u10d4\u10dc\u10d4\u10e0\u10d8\u10e0\u10d4\u10d1\u10e3\u10da\u10e1, \u10d0\u10dc \u10db\u10d8\u10da\u10d8\u10ec\u10d0\u10db\u10d4\u10d1\u10d8\u10e1 \u10d3\u10e0\u10dd\u10d8\u10e1 \u10d0\u10dc\u10d0\u10d1\u10d4\u10ed\u10d3\u10d8",
        editAllHint: "\u10d4\u10e0\u10d7\u10d8 \u10db\u10dd\u10dc\u10d0\u10ea\u10d4\u10db\u10d7\u10d0 \u10ec\u10d4\u10e0\u10e2\u10d8\u10da\u10d8 \u10d7\u10d8\u10d7\u10dd \u10ee\u10d0\u10d6\u10d6\u10d4: \u10d3\u10e0\u10dd\u10d8\u10e1_\u10d0\u10dc\u10d0\u10d1\u10d4\u10ed\u10d3\u10d8 \u10e6\u10d8\u10e0\u10d4\u10d1\u10e3\u10da\u10d4\u10d1\u10d0 (\u10d3\u10e0\u10dd\u10d8\u10e1 \u10d0\u10dc\u10d0\u10d1\u10d4\u10ed\u10d3\u10d8 \u10e8\u10d4\u10d8\u10eb\u10da\u10d4\u10d1\u10d0 \u10d8\u10e7\u10dd\u10e1 * \u10d0\u10d5\u10e2\u10dd\u10db\u10d0\u10e2\u10e3\u10e0\u10d8\u10e1\u10d7\u10d5\u10d8\u10e1)",
        autoSpread: "\u10d0\u10d5\u10e2\u10dd\u10db\u10d0\u10e2\u10e3\u10e0\u10d8 * \u10d2\u10d0\u10dc\u10d0\u10ec\u10d8\u10da\u10d4\u10d1\u10d8\u10e1 \u10d8\u10dc\u10e2\u10d4\u10e0\u10d5\u10d0\u10da\u10d8",
        formula: "\u10e4\u10dd\u10e0\u10db\u10e3\u10da\u10d0",
        formulaLinear: "\u10ec\u10e0\u10e4\u10d8\u10d5\u10d8",
        formulaRandom: "\u10e8\u10d4\u10db\u10d7\u10ee\u10d5\u10d4\u10d5\u10d8\u10d7\u10d8",
        formulaSawtooth: "\u10ee\u10d4\u10e0\u10ee\u10d8\u10e1\u10db\u10d0\u10d2\u10d5\u10d0\u10e0\u10d8",
        formulaPoints: "\u10ec\u10d4\u10e0\u10e2\u10d8\u10da\u10d4\u10d1\u10d8",
        formulaAmplitude: "\u10d0\u10db\u10de\u10da\u10d8\u10e2\u10e3\u10d3\u10d0",
        formulaOffset: "\u10ec\u10d0\u10dc\u10d0\u10ea\u10d5\u10da\u10d4\u10d1\u10d0",
        generate: "\u10d2\u10d4\u10dc\u10d4\u10e0\u10d8\u10e0\u10d4\u10d1\u10d0",
        exportChart: "PNG \u10d4\u10e5\u10e1\u10de\u10dd\u10e0\u10e2\u10d8",
        overlay: "\u10d2\u10d0\u10e1\u10d0\u10e6\u10d4\u10d1\u10d4\u10d1\u10d8\u10e1 \u10d2\u10d0\u10d3\u10d0\u10e4\u10d0\u10e0\u10d5\u10d0",
        overlayHint: "\u10db\u10eb\u10d8\u10db\u10d8\u10d7 \u10d2\u10d0\u10db\u10dd\u10e7\u10dd\u10e4\u10d8\u10da\u10d8 \u10d2\u10d0\u10e1\u10d0\u10e6\u10d4\u10d1\u10d4\u10d1\u10d8",
        mrangeFilter: "\u10d8\u10d0\u10e0\u10da\u10d8\u10e7\u10d4\u10d1\u10d8\u10e1 \u10e4\u10d8\u10da\u10e2\u10e0\u10d8",
        bulkMode: "მასიური გენერაცია",
        mrangeHint: "\u10db\u10d0\u10d2. sensor=temp"
      }
    },
    treeControls: {
      settings: "ხის პარამეტრები",
      expandAll: "გააფართოვეთ ყველა",
      collapseAll: "ყველა ჩაშალე",
      level: "დონე",
      search: {
        search: "ძიება გასაღებებში",
        clear: "წაშალეთ მიმდინარე ძიება ცარიელის დასაყენებლად",
        placeholderClient: "მოძებნეთ კლიენტის მხარე",
        placeholderServer: "მოძებნეთ სერვერის მხარე",
        info: (opts) => "კლიენტის მხრიდან ძიება ნიშნავს, რომ იგი ემთხვევა საძიებო შეყვანის ტექსტს. სერვერის მხრიდან ძიება ნიშნავს, რომ ეს არის კლავიშების შაბლონებში ძიება, როგორც *{search-text}*. დიდი საძიებო ნაკრებისთვის, უმჯობესია გამოიყენოთ სერვერის მხრიდან ძებნა. მცირე საძიებო ნაკრებისთვის უმჯობესია გამოიყენოთ კლიენტის მხარის ძიების რეჟიმი." + ` თუ გასაღებების რაოდენობა დასრულდა ${opts?.maxLightKeysCount ?? 110000}, შეგიძლიათ მოძებნოთ მხოლოდ სერვერის მხარეს.`,
        largeSetInfo: "დიდ კომპლექტში კლიენტის მხრიდან ძებნა გამორთულია. ასე რომ, ახლა შესაძლებელია მხოლოდ სერვერის მხრიდან ძებნა.",
        infoDetails: "იმის გასარკვევად, თუ როგორ მუშაობს ძებნა, გთხოვთ, გადახედოთ პარამეტრებს"
      },
      pager: {
        next: "შემდეგი",
        prev: "წინა",
        first: "პირველი",
        last: "ბოლო"
      }
    }
  },
  time: {
    type: "ტიპი",
    format: "ფორმატი",
    loading: "იტvirtheba...",
    years: "წლები",
    months: "თვეების",
    days: "დღეები",
    year: "წელიწადი",
    month: "თვე",
    day: "დღე",
    second: "\u10ec\u10d0\u10db\u10d8",
    seconds: "\u10ec\u10d0\u10db\u10d4\u10d1\u10d8",
    minute: "\u10ec\u10e3\u10d7\u10d8",
    minutes: "\u10ec\u10e3\u10d7\u10d4\u10d1\u10d8",
    hour: "\u10e1\u10d0\u10d0\u10d7\u10d8",
    hours: "\u10e1\u10d0\u10d0\u10d7\u10d4\u10d1\u10d8"
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
