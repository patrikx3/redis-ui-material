const strings = {
  error: {
    cleared_license: "გასუფთავებული ლიცენზია",
    invalid_license: "არასწორი ლიცენზია",
    license_max_devices_reached: "მიღწეულია მოწყობილობის ადგილების მაქსიმალური რაოდენობა",
    license_readonly: "ლიცენზიის შეცვლა შესაძლებელია მხოლოდ სერვერის ტერმინალიდან.",
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
    deleteNode: "დარწმუნებული ხართ, რომ წაშლით ამ Redis კვანძს?",
    deleteAllKeys: opts => {
      return `წაშალე ეს ხე და მისი ყველა გასაღები (${opts.key})?`;
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
    license: {
      title: "ლიცენზიის დაყენება",
      textContent: "If you want to use paid features, please contact support@corifeus.com to request a license. Pricing is Pro 400 HUF/month (€1/month) or 4,000 HUF/year (€10/year), and Enterprise 1,200 HUF/month (€3/month) or 12,000 HUF/year (€30/year). Yearly is 10x monthly. With 27% VAT, totals are Pro 500 HUF/month (€1.27/month) or 5,100 HUF/year (€12.70/year), Enterprise 1,500 HUF/month (€3.81/month) or 15,200 HUF/year (€38.10/year). License validation requires internet access. Default license includes 5 seats. If you need more seats, contact us at support@corifeus.com.",
      placeholder: "ლიცენზიის გასაღები"
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
    copy: "კოპირება",
    downloadBuffer: "ჩამოტვირთეთ ორობითი",
    setBuffer: "ატვირთეთ ორობითი",
    exportKeys: "გასაღებების ექსპორტი",
    exportAllKeys: (opts) => `ყველა ${opts.count} გასაღების ექსპორტი`,
    exportSearchResults: (opts) => `${opts.count} შედეგის ექსპორტი`,
    importKeys: "გასაღებების იმპორტი",
    saveWithFormatJson: "შეინახეთ ფორმატით",
    formatJson: "ფორმატი Json",
    wrap: "შეფუთვა",
    unwrap: "გაშალეთ",
    downloadJson: "ჩამოტვირთეთ JSON",
    pubsubMonitor: "PubSub მონიტორი",
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
    license: "ლიცენზიის დაყენება",
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
    aiGroqApiKeyNotSet: "არ არის დაყენებული (სერვერის ნაგულისხმევი)",
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
    licenseInfo: "ლიცენზია",
    licenseEditable: "ლიცენზიის რედაქტირებადი",
    licenseEditableYes: "დიახ",
    licenseEditableNo: "არა",
    licenseTerminalOnly: "ლიცენზიის კონფიგურაცია შესაძლებელია მხოლოდ სერვერის ტერმინალიდან.",
    licenseTierPolicyTitle: "დონის პოლიტიკა",
    licenseTierPolicyText: "<h4>Free</h4>core Redis UI only; no SSH tunneling, no Readonly connection mode, no Cluster/Sentinel, no Edit JSON/Upload binary/Download binary, no ReJSON.<br/><strong>Price: 0 HUF/month (€0/month).</strong><br/><br/><h4>Pro</h4>SSH tunneling, Readonly connection mode (including --readonly-connections/-r), Edit JSON, Upload binary, Download binary, ReJSON.<br/><strong>Base price: 400 HUF/month (€1/month) or 4,000 HUF/year (€10/year).</strong><br/><strong>Total with 27% VAT: 500 HUF/month (€1.27/month) or 5,100 HUF/year (€12.70/year).</strong><br/><br/><h4>Enterprise</h4>SSH tunneling, Cluster and Sentinel, plus Edit JSON, Upload binary, Download binary, ReJSON; --readonly-connections/-r also works.<br/><strong>Base price: 1,200 HUF/month (€3/month) or 12,000 HUF/year (€30/year).</strong><br/><strong>Total with 27% VAT: 1,500 HUF/month (€3.81/month) or 15,200 HUF/year (€38.10/year).</strong><br/><br/><h4>Yearly rule</h4>Yearly price is 10x the monthly price.<br/><br/><h4>Seats</h4>Default license includes 5 seats. If you need more seats, contact us at <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><br/><h4>Enterprise trial</h4>10 days free for anyone with a real existing email address (non-test email).<br/><hr/><h4>Billing info in e-mail</h4>Name, Billing e-mail, Country code, Postal code, City, Address, VAT ID (optional).<br/><br/><h4>Payment</h4>PayPal payment is available only in HUF (forint); after sending the money @ <a href='https://paypal.me/corifeus'>https://paypal.me/corifeus</a> I will send you an invoice. All payments are non-refundable.<br/><br/><h4>VAT</h4>VAT is added to the price (27% in Hungary).<br/><hr/><h4>Contact</h4>If you want to say hi or have a question, contact <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><hr/><h4>Language</h4>Invoice and license e-mail communication is in English. Invoice currency is HUF.<br/><hr/><h4>Note</h4>License validation requires internet access.",
    licenseState: "სახელ���წიფო",
    licenseStateActive: "აქტიური",
    licenseStateInactive: "არააქტიური",
    licenseStateNoLicense: "არანაირი ლიცენზია",
    licenseKeyMasked: "შენახული გასაღები",
    licenseTier: "იარუსი",
    licenseValid: "მოქმედებს",
    licenseStatus: "ლიცენზიის სტატუსი",
    licenseReason: "მიზეზი",
    licenseCheckedAt: "შემოწმებულია",
    licenseStartsAt: "იწყება",
    licenseExpiresAt: "ვადა იწურება",
    licenseDaysLeft: "დარჩენილია დღეები",
    licenseMaxDevices: "მაქსიმალური მოწყობილობები",
    licenseActiveDevices: "აქტიური მოწყობილობები",
    licenseActiveDevicesInfo: "თუ მოწყობილობა აღარ გამოიყენება, მისი სავარძელი ავტომატურად იხსნება 75 წუთის შემდეგ.",
    licenseCustomerEmail: "მომხმარებლის ელ.წერილი",
    licenseFeatures: "მახასიათებლები",
    licenseFeaturesEmpty: "არანაირი დამატებითი ფუნქციები",
    licenseFeatureReadonlyMode: "მხ��ლოდ წაკითხვის კავშირის რეჟიმი",
    licenseFeatureReadonlyConnectionsFlag: "მხოლოდ წაკითხვადი კავშირები (--readonly-connections/-r)",
    licenseFeatureSsh: "SSH გვირაბი",
    licenseFeatureCluster: "Cluster კავშირები",
    licenseFeatureSentinel: "Sentinel კავშირები",
    licenseFeatureReJSON: "ReJSON (JSON მონაცემთა ტიპი)",
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
    proSshOnly: "SSH ხელმისაწვდომია Pro ან Enterprise-ში.",
    proReadonlyOnly: "მხოლოდ წაკითხვის კავშირის რეჟიმი ხელმისაწვდომია Pro ან Enterprise-ში.",
    enterpriseClusterSentinelOnly: "Cluster და Sentinel ხელმისაწვდომია მხოლოდ Enterprise-ში.",
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
    loading: "იტvirtheba...",
    autoRefresh: "ავტო",
    exportSearchHint: "ექსპორტი მხოლოდ მიმდინარე ძიებას შესაბამისი გასაღebebis",
    importSearchHint: "იმპორტი ვრცeldeba მთელ მონაცემთა ბაზაზე",
    importNoKeys: "ფაილში გასაღebebi ვერ მოიძებna",
  },
  status: {
    dataCopied: "მონაცემები ბუფერშია",
    licenseSaved: "ლიცენზია შენახულია",
    exportDone: "ექსპორტი დასრულda",
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
    "donation-ware-feature": "ეს ფუნქცია წარმოდგენილია შემოწირულობის ვერსიაში.",
    "feature-pro-readonly-required": "მხოლოდ წაკითხული კავშირის რეჟიმი მოითხოვს Pro ან Enterprise ლიცენზიას.",
    "feature-pro-ssh-required": "SSH გვირაბისთვის საჭიროა Pro ან Enterprise ლიცენზია.",
    "feature-enterprise-cluster-sentinel-required": "Cluster და Sentinel საჭიროებენ Enterprise ლიცენზიას.",
    "feature-pro-json-binary-required": "JSON-ის რედაქტირება, ბინარის ატვირთვა და ორობითი ჩამოტვირთვა მოითხოვს Pro ან Enterprise ლიცენზიას.",
    "feature-pro-rejson-required": "ReJSON (JSON მონაცემთა ტიპი) მოითხოვს Pro ან Enterprise ლიცენზიას.",
    "invalid-json-value": "მნიშვნელობა არ არის სწორი JSON.",
    "http_auth_required": "საჭიროა ავტორიზაცია: გთხოვთ, გადაამოწმოთ ავთენტიფიკაცია HTTP Basic Auth-ით და გადატვირთეთ.",
    "auto-connection-failed": "შესაძლებელია, კავშირი წაიშალა და ავტომატური კავშირი ვერ მოხერხდა ამის გამო.",
    invalid_console_command: "ეს ბრძანება არ მუშაობს GUI-ით."
  },
  licenseReason: {
    LICENSE_VALID: "ლიცენზია მოქმედებს",
    LICENSE_INVALID: "ლიცენზია არასწორია",
    LICENSE_MISSING: "ლიცენზიის გასაღები არ არის დაყენებული",
    LICENSE_DISABLED: "ლიცენზია გამორთულია სერვერის კონფიგურაციაში",
    LICENSE_NOT_FOUND: "ლიცენზია ვერ მოიძებნა",
    LICENSE_EXPIRED: "ლიცენზიას ვადა გაუვიდა",
    LICENSE_CLEARED: "ლიცენზიის გასაღები გასუფთავდა",
    LICENSE_MAX_DEVICES_REACHED: "მიღწეულია მოწყობილობის ადგილების მაქსიმალური რაოდენობა",
    PRODUCT_MISMATCH: "სალიცენზიო პროდუქტი არ ემთხვევა"
  },
  licenseStatusValue: {
    active: "აქტიური",
    deleted: "წაშლილია",
    all: "ყველა",
    expired: "ვადა გაუვიდა",
    missing: "დაკარგული",
    inactive: "არააქტიური"
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
      keyCount: () => {
        return `გასაღებების რაოდენობა: ${p3xr.state.keysRaw.length}`;
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
      noClients: "კლიენტebi არ არის",
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
      }
    },
    treeControls: {
      settings: "ხის პარამეტრები",
      expandAll: "გააფართოვეთ ყველა",
      collapseAll: "ყველა ჩაშალე",
      search: {
        search: "ძიება გასაღებებში",
        clear: "წაშალეთ მიმდინარე ძიება ცარიელის დასაყენებლად",
        placeholderClient: "მოძებნეთ კლიენტის მხარე",
        placeholderServer: "მოძებნეთ სერვერის მხარე",
        info: "კლიენტის მხრიდან ძიება ნიშნავს, რომ იგი ემთხვევა საძიებო შეყვანის ტექსტს. სერვერის მხრიდან ძიება ნიშნავს, რომ ეს არის კლავიშების შაბლონებში ძიება, როგორც *{search-text}*. დიდი საძიებო ნაკრებისთვის, უმჯობესია გამოიყენოთ სერვერის მხრიდან ძებნა. მცირე საძიებო ნაკრებისთვის უმჯობესია გამოიყენოთ კლიენტის მხარის ძიების რეჟიმი." + ` თუ გასაღებების რაოდენობა დასრულდა ${p3xr.settings.maxLightKeysCount}, შეგიძლიათ მოძებნოთ მხოლოდ სერვერის მხარეს.`,
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
    loading: "იტvirtheba...",
    years: "წლები",
    months: "თვეების",
    days: "დღეები",
    year: "წელიწადი",
    month: "თვე",
    day: "დღე"
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
