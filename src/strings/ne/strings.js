const strings = {
  error: {
    cleared_license: "लाइसेन्स खाली गरियो",
    invalid_license: "अवैध इजाजतपत्र",
    license_max_devices_reached: "अधिकतम उपकरण सिट पुग्यो",
    license_readonly: "सर्भर टर्मिनलबाट मात्र इजाजतपत्र परिवर्तन गर्न सकिन्छ।",
    server_error: "सर्भर त्रुटि, कृपया पुन: प्रयास गर्नुहोस्"
  },
  title: {
    donate: "दान गर्नुहोस्",
    jsonRecursive: "सबै पातहरू विस्तार गर्दै",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "बायाँ तलको मेनुबाट जडान गर्न तपाईंले Redis जडान रोज्न सक्नुहुन्छ।",
    statistics: "तथ्याङ्क",
    error: "त्रुटि",
    connectingRedis: "Redis मा जडान गर्दै...",
    socketioConnectError: "Socket.IO त्रुटि",
    db: "DB",
    server: "सर्भर",
    clients: "ग्राहकहरु",
    memory: "मेमोरी",
    persistence: "दृढता",
    stats: "तथ्याङ्क",
    replication: "प्रतिकृति",
    cpu: "CPU",
    cluster: "Cluster",
    modules: "मoड्युलहरू",
    errorstats: "errorstats",
    commandstats: "commandstats",
    latencystats: "latencystats",
    keysizes: "keysizes",
    threads: "threads",
  },
  confirm: {
    dropIndex: "के तपाईं यो इन्डेक्स हटाउन निश्चित हुनुहुन्छ?",
    uploadBuffer: "के तपाइँ यो बाइनरी डाटा अपलोड गर्न निश्चित हुनुहुन्छ?",
    uploadBufferDone: "बाइनरी डाटा अपलोड गरिएको छ",
    uploadBufferDoneAndSave: "बाइनरी डाटा अपलोड र सर्भरमा बचत गरिएको छ",
    title: "पुष्टि गर्नुहोस्",
    alert: "अलर्ट",
    info: "जानकारी",
    deleteListItem: "के तपाइँ यो सूची वस्तु मेटाउन निश्चित हुनुहुन्छ?",
    deleteHashKey: "के तपाइँ यो ह्यास कुञ्��ी वस्तु मेटाउन निश्चित हुनुहुन्छ?",
    deleteStreamTimestamp: "के तपाइँ यो स्ट्रिम टाइमस्ट्याम्प मेटाउन निश्चित हुनुहुन्छ?",
    deleteSetMember: "के तपाइँ यो सेट सदस्य मेटाउन निश्चित हुनुहुन्छ?",
    deleteZSetMember: "के तपाइँ यो क्रमबद्ध सेट सदस्य मेटाउन निश्चित हुनुहु��्छ?",
    deleteConnection: "पुष्टि गर्नुहोस्",
    deleteConnectionText: "के तपाइँ यो Redis जडान मेटाउन निश्चित हुनुहुन्छ?",
    deleteNode: "के तपाइँ यो Redis नोड मेटाउन निश्चित हुनुहुन्छ?",
    deleteAllKeys: opts => {
      return `यो रूख र यसका सबै कुञ्जीहरू मेटाउनुहोस् (${opts.key})?`;
    },
    socketioConnectError: "Socket.IO सर्भरमा जडान हुन सक्दैन, तपाइँ पुन: लोड गर्न सक्नुहुन्छ र जडान त्रुटि आफैं समाधान गर्न प्रयास गर्न सक्नुहुन्छ, ग्राहकलाई थाहा छैन कि यसलाई कसरी समाधान गर्ने।",
    socketioAuthRequired: "Socket.IO प्राधिकरण आवश्यक छ। कृपया HTTP Basic Auth (प्रयोगकर्ता नाम/पासवर्ड) को साथ प्रमाणीकरण गर्नुहोस् र पुन: लोड गर्नुहोस्।",
    deleteKey: "के तपाइँ यो कुञ्जी मेटाउन निश्चित हुनुहुन्छ?",
    rename: {
      title: "के तपाइँ यो कुञ्जी पुन: नामाकरण गर्न निश्चित हुनुहुन्छ?",
      textContent: "यो कार्यले स्थायी रूपमा कुञ्जीलाई पुन: नामाकरण गर्छ।",
      placeholder: "Redis कुञ्जी (आवश्यक)"
    },
    ttl: {
      title: "के तपाइँ यो कुञ्जीको TTL परिवर्तन गर्न निश्चित हुनुहुन्छ?",
      textContent: "TTL परिवर्तन गर्नाले यो कुञ्जीको बाँच्ने समय अपडेट हुन्छ। यो कुञ्जीलाई सधैंभरि राख्न खाली छोड्नुहोस्।",
      placeholder: "Redis कुञ्जीको TTL (पूर्णांक वा खाली)",
      placeholderPlaceholder: "खाली को अर्थ यो सधैंभरि रहन्छ; अन्यथा एक पूर्णांक प्रविष्ट गर्नुहोस्।",
      convertTextToTime: "पाठलाई समयमा रूपान्तरण गर्नुहोस्",
      convertTextToTimePlaceholder: "जस्तै। 1d 86400 हुनेछ"
    },
    license: {
      title: "लाइसेन्स सेट गर्नुहोस्",
      textContent: "If you want to use paid features, please contact support@corifeus.com to request a license. Pricing is Pro 400 HUF/month (€1/month) or 4,000 HUF/year (€10/year), and Enterprise 1,200 HUF/month (€3/month) or 12,000 HUF/year (€30/year). Yearly is 10x monthly. With 27% VAT, totals are Pro 500 HUF/month (€1.27/month) or 5,100 HUF/year (€12.70/year), Enterprise 1,500 HUF/month (€3.81/month) or 15,200 HUF/year (€38.10/year). License validation requires internet access. Default license includes 5 seats. If you need more seats, contact us at support@corifeus.com.",
      placeholder: "इजाजतपत्र कुञ्जी"
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
    copy: "प्रतिलिपि गर्नुहोस्",
    downloadBuffer: "बाइनरी डाउनलोड गर्नुहोस्",
    setBuffer: "बाइनरी अपलोड गर्नुहोस्",
    exportKeys: "कुञ्जीहरू निर्यात गर्नुहोस्",
    exportAllKeys: (opts) => `सबै ${opts.count} कुञ्जीहरू निर्यात`,
    exportSearchResults: (opts) => `${opts.count} परिणामहरू निर्यात`,
    importKeys: "कुञ्जीहरू आयात गर्नुहोस्",
    saveWithFormatJson: "ढाँचा संग बचत गर्नुहोस्",
    formatJson: "ढाँचा Json",
    wrap: "लपेट्���ुहोस्",
    unwrap: "खोल्नुहोस्",
    downloadJson: "JSON डाउनलोड गर्नुहोस्",
    pubsubMonitor: "PubSub मनिटर",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "भाषा",
    ok: "ठीक छ",
    addKey: "यो कुञ्जीमा थप्नुहोस्",
    addKeyRoot: "रूट कुञ्जी थप्नुहोस्",
    reloadKey: "कुञ्जी पुन: लोड गर्नुहोस्",
    reload: "पुन: लोड गर्नुहोस्",
    close: "बन्द गर्नुहोस्",
    commands: "आदेशहरू",
    view: "हेर्नुहोस्",
    statistics: "तथ्याङ्क",
    refresh: "रिफ्रेस गर्नुहोस्",
    pause: "रोक्नुहोस्",
    resume: "जारी राख्नुहोस्",
    clear: "खाली गर्नुहोस्",
    rename: "पुन: नामाकरण गर्नुहोस्",
    main: "डाटाबेस",
    cancel: "रद्द गर्नुहोस्",
    theme: "वि���यवस्तु",
    github: "GitHub",
    githubRepo: "भण्डार",
    githubRelease: "रिलीज गर्दछ",
    githubChangelog: "Changelog",
    info: "Info",
    settings: "सेटिङहरू",
    connect: "जडान गर्नुहोस्",
    disconnect: "जडान विच्छेद गर्नुहोस्",
    overview: "अवलोकन",
    console: "कन्सोल",
    noConnections: "कुनै जडान छैन, सेटिङ मेनुमा जडान थप्नुहोस्।",
    noConnectionsInSettings: "कुनै जडानहरू छैनन्, तपाईंले माथि नयाँ जडान थप्न सक्नुहुन्छ।",
    connectionAdd: "नयाँ जडान",
    addGroup: "समूह थप्नुहोस्",
    extend: "विस्तार गर्नुहोस्",
    collapse: "संक्षिप्त गर्नुहोस्",
    add: "थप्नुहोस्",
    edit: "सम्पादन गर्नुहोस्",
    save: "बचत गर्नुहोस्",
    ttl: "TTL सेट गर्नुहोस्",
    license: "लाइसेन्स सेट गर्नुहोस्",
    delete: "मेट्नुहोस्",
    remove: "हटाउनुहोस्",
    sure: "पक्का",
    testConnection: "परीक्षण जडान",
    getKey: "Redis कुञ्जी र सम्बन्धित डाटा लोड गर्दै...",
    jsonViewShow: "JSON प्रदर्शन गर्नुहोस्",
    jsonViewEditor: "JSON सम्पादन गर्नुहोस्",
    quickConsole: "द्रुत कन्सोल",
  },
  label: {
    id: {
      nodeId: "नोड आईडी",
      id: "जडान ID",
      info: "यदि तपाइँ निम्न गुणहरू परिवर्तन गर्न चाहनुहुन्न भने: sshPassword, sshPrivateKey, पासवर्ड, tlsCrt, tlsKey, tlsCa, कृपया गुण मानहरू अक्षुण्ण राख्न ती गुणहरूमा जडानको ID प्रविष्ट गर्नुहोस्। यदि तपाइँ नोड पासवर्डमा समान तर्क चाहनुहुन्छ भने, त्यसपछि नोड पासवर्डमा नोड आईडी प्रविष्ट गर्नुहोस्।"
    },
    secureFeature: "यदि तपाईंले P3X बाट सुरु हुने मान देख्नुभयो भने, यो एक सुरक्षित सुविधा हो। सेटिङ्हरू परिवर्तन गर्नका लागि, यी सेटिङहरूलाई खाली वा अरू केहीले बदल्नुहोस् र तिनीहरू बचत हुनेछन्। यदि तपाइँ सेटिङहरू परिवर्तन गर्नुहुन्न भने, सेटिङहरू सर्भरमा जस्तै राखिनेछ।",
    ssh: {
      on: "SSH सक्रिय",
      off: "SSH बन्द",
      sshHost: "SSH होस्ट",
      sshPort: "SSH पोर्ट",
      sshUsername: "SSH प्रयोगकर्ता नाम",
      sshPassword: "SSH पासवर्ड",
      sshPrivateKey: "SSH निजी कुञ्जी"
    },
    isBuffer: opts => `[object ArrayBuffer] को अर्थ हो कि मान बाइनरी डेटा हो वा मान भन्दा ठूलो छ ${opts.maxValueAsBuffer}`,
    streamValue: `स्ट्रिम फिल्ड र मान एक लाइनर हो। उदाहरण: क्षेत्र1 मान1 "क्षेत्र 2" "मान 2"`,
    streamTimestampId: `'*' भनेको स्वत: उत्पन्न वा <millisecondsTime>-<sequenceNumber> को रूपमा निर्दिष्टीकरण हो।`,
    unableToLoadKey: ({
      key
    }) => {
      return `यो कुञ्जी लोड गर्न असमर्थ: ${key}। सम्भव छ, कुञ्जी मेटाइयो। सही त्रुटि कन्सोलमा छ।`;
    },
    bigJson: "यो JSON वस्तु 10 kb भन्दा बढी छ, त्यसैले निश्चित गर्नुहोस् कि तपाइँ के गर्दै हुनुहुन्छ थाहा छ, किनकि केहि प्रकार्यहरू ढिलो रेन्डरिङ हुन सक्छ।",
    addNode: "नोड थप्नुहोस्",
    validateJson: "JSON मान्य गर्नुहोस्",
    reducedFunction: `कम कार्यक्षमता`,
    tooManyKeys: opts => {
      return `पूर्ण अधिकतम प्रकार्यहरूको लागि अनुमति कुञ्जी कुल हो ${opts.maxLightKeysCount} गणना। यो डाटाबेसमा कुल अनुमति कुञ्जीहरू छन् ${opts.count}। कुञ्जी क्रमबद्ध र अतिरिक्त फेन्सी रूख जानकारी असक्षम गरिएको छ। खोजी ग्राहक खोजको सट्टा सर्भरमा मात्र भइरहेको छ।`;
    },
    redisCommandNotFound: "कुनै Redis आदेश मिल्दो छैन ...",
    treeKeyStore: `क्रमबद्ध (प्राकृतिक तुलना) लाई क्लाइन्ट उर्फ ब्राउजरमा कार्यान्वयन गरिन्छ, जसको मतलब यो ठूला ठूला सेटहरूको लागि पेनाल्टी छ, जस्तै 10k कुञ्जीहरू, यसले पृष्ठ रेन्डरिङमा थोरै समय थप्न सक्छ। Redis मा कुनै कुञ्जी क्रमबद्ध छैन, केवल यो जस्तै।`,
    socketIoTimeout: options => {
      return `Socket.IO यो अनुरोधको लागि समय सकियो (अधिकतम ${options.timeout / 1000} सेकेन्ड)...`;
    },
    resizerInfo: options => {
      return `बायाँ वा दायाँ प्यानल न्यूनतम चौडाइ हो ${options.width}px`;
    },
    jsonViewNotParsable: "यो मान JSON पार्सयोग्य छै���  ",
    ttlTitle: "TTL सेकेन्डमा सेट गर्नुहोस्",
    passwordSecure: "पासवर्ड खाली हुन सक्छ, तर अझै पनि यसले क्यारेक्टरहरू देखाउनेछ, यो एक सुरक्षा सुविधा हो।",
    tlsWithoutCert: "अतिरिक्त प्रमाणपत्र बिना TLS सक्षम गर्नुहोस्",
    tlsRejectUnauthorized: "अनधिकृत प्रमाणपत्र अस्वीकार गर्नुहोस्",
    tlsSecure: "यदि तपाइँ P3X बाट सुरु हुने TLS कन्फिगरेसन देख्नुहुन्छ वा सबै TLS सेटिङहरू उस्तै देखिन्छन् भने, यो सुरक्षित सुविधा हो। सेटिङ्हरू परिवर्तन गर्नका लागि, यी सेटिङहरूलाई खाली वा अरू केहीले बदल्नुहोस् र तिनीहरू बचत हुन���छन्। यदि तपाईंले TLS सेटिङहरू परिवर्तन गर्नुभएन भने, सेटिङहरूलाई सर्भरमा जस्तै राखिनेछ।",
    treeSeparatorEmpty: "यदि रूख विभाजक खाली छ भने, रूखमा कुनै नेस्टेड नोडहरू हुनेछैन, केवल एक शुद्ध सूची",
    treeSeparatorEmptyNote: "कुनै नेस्टेड नोडहरू, केवल एक शुद्�� सूची",
    welcomeConsole: "Redis कन्सोलमा स्वागत छ",
    welcomeConsoleInfo: "कर्सर माथि वा तल इतिहास सक्षम छ",
    redisListIndexInfo: "जोड्नको लागि खाली, -1 लाई प्रिपेन्ड गर्न वा देखाइएको स्थितिमा बचत गर्न।",
    console: "कन्सोल",
    connectiondAdd: "जडान थप्नुहोस्",
    connectiondEdit: "जडान सम्पादन गर्नुहोस्",
    connectiondView: "जडान हेर्नुहोस्",
    connections: "जडानहरू",
    licenseInfo: "इजाजतपत्र",
    licenseEditable: "लाइसेन्स सम्पादन योग्य",
    licenseEditableYes: "हो",
    licenseEditableNo: "छैन",
    licenseTerminalOnly: "इजाजतपत्र सर्भर टर्मिनलबाट मात्र कन्फिगर गर्न सकिन्छ।",
    licenseTierPolicyTitle: "स्तरीय नीति",
    licenseTierPolicyText: "<h4>Free</h4>core Redis UI only; no SSH tunneling, no Readonly connection mode, no Cluster/Sentinel, no Edit JSON/Upload binary/Download binary, no ReJSON.<br/><strong>Price: 0 HUF/month (€0/month).</strong><br/><br/><h4>Pro</h4>SSH tunneling, Readonly connection mode (including --readonly-connections/-r), Edit JSON, Upload binary, Download binary, ReJSON.<br/><strong>Base price: 400 HUF/month (€1/month) or 4,000 HUF/year (€10/year).</strong><br/><strong>Total with 27% VAT: 500 HUF/month (€1.27/month) or 5,100 HUF/year (€12.70/year).</strong><br/><br/><h4>Enterprise</h4>SSH tunneling, Cluster and Sentinel, plus Edit JSON, Upload binary, Download binary, ReJSON; --readonly-connections/-r also works.<br/><strong>Base price: 1,200 HUF/month (€3/month) or 12,000 HUF/year (€30/year).</strong><br/><strong>Total with 27% VAT: 1,500 HUF/month (€3.81/month) or 15,200 HUF/year (€38.10/year).</strong><br/><br/><h4>Yearly rule</h4>Yearly price is 10x the monthly price.<br/><br/><h4>Seats</h4>Default license includes 5 seats. If you need more seats, contact us at <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><br/><h4>Enterprise trial</h4>10 days free for anyone with a real existing email address (non-test email).<br/><hr/><h4>Billing info in e-mail</h4>Name, Billing e-mail, Country code, Postal code, City, Address, VAT ID (optional).<br/><br/><h4>Payment</h4>PayPal payment is available only in HUF (forint); after sending the money @ <a href='https://paypal.me/corifeus'>https://paypal.me/corifeus</a> I will send you an invoice. All payments are non-refundable.<br/><br/><h4>VAT</h4>VAT is added to the price (27% in Hungary).<br/><hr/><h4>Contact</h4>If you want to say hi or have a question, contact <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><hr/><h4>Language</h4>Invoice and license e-mail communication is in English. Invoice currency is HUF.<br/><hr/><h4>Note</h4>License validation requires internet access.",
    licenseState: "राज्य",
    licenseStateActive: "सक्रिय",
    licenseStateInactive: "निष्क्रिय",
    licenseStateNoLicense: "लाइसेन्स छैन",
    licenseKeyMasked: "बचत गरिएको कुञ्जी",
    licenseTier: "टियर",
    licenseValid: "मान्य",
    licenseStatus: "लाइसेन्स स्थिति",
    licenseReason: "कारण",
    licenseCheckedAt: "मा जाँच गरियो",
    licenseStartsAt: "मा सुरु हुन्छ",
    licenseExpiresAt: "मा म्याद सकिन्छ",
    licenseDaysLeft: "दिन बाँकी",
    licenseMaxDevices: "अधिकतम उपकरणहरू",
    licenseActiveDevices: "सक्रिय उपकरणहरू",
    licenseActiveDevicesInfo: "यदि कुनै उपकरण अब प्रयोग गरिएन भने, यसको सीट 75 मिनेट पछि स्वचालित रूपमा रिलिज हुन्छ।",
    licenseCustomerEmail: "ग्राहक इमेल",
    licenseFeatures: "सुविधाहरू",
    licenseFeaturesEmpty: "कुनै अतिरिक्त सुविधाहरू छैन",
    licenseFeatureReadonlyMode: "पढ्ने मात्र जडान मोड",
    licenseFeatureReadonlyConnectionsFlag: "पढ्ने मात्र जडानहरू (--readonly-connections/-r)",
    licenseFeatureSsh: "SSH टनेलिङ",
    licenseFeatureCluster: "Cluster जडानहरू",
    licenseFeatureSentinel: "Sentinel जडानहरू",
    licenseFeatureReJSON: "ReJSON (JSON डाटा प्रकार)",
    keysSort: {
      on: "कुञ्जी क्रमबद्ध गर्दै",
      off: "कुञ्जी क्रमबद्ध बन्द"
    },
    cluster: {
      on: "Cluster सक्रिय",
      off: "Cluster बन्द"
    },
    sentinel: {
      on: "Sentinel सक्रिय",
      off: "Sentinel बन्द",
      name: "Sentinel नाम"
    },
    readonly: {
      on: "पढ्न मात्र",
      off: "पढ्ने मात्र बन्द"
    },
    proSshOnly: "SSH प्रो वा इन्टरप्राइजमा उपलब्ध छ।",
    proReadonlyOnly: "केवल पढ्ने जडान मोड प्रो वा इन्टरप्राइजमा उपलब्ध छ।",
    enterpriseClusterSentinelOnly: "Cluster र Sentinel इन्टरप्राइजमा मात्र उपलब्ध छन्।",
    theme: {
      light: "उज्यालो",
      dark: "अँध्यारो उद्यम",
      darkNeu: "अँध्यारो",
      darkoBluo: "डार्को ब्लू",
      enterprise: "उद्यम",
      redis: "Redis",
      matrix: "म्याट्रिक्स"
    },
    connected: opts => {
      return `जडान गरिएको: ${opts.name}`;
    },
    tree: "रुख",
    askAuth: "प्राधिकरणको लागि सोध्नुहोस्",
    keyboardShortcuts: "Keyboard Shortcuts",
    about: "About",
    supportedLanguages: "Supported Languages",
    version: "Version",
    redisVersion: "Redis Version",
    modules: "मoड्युलहरू",
    shortcutRefresh: "Refresh",
    shortcutSearch: "Focus Search",
    shortcutNewKey: "New Key",
    shortcutDisconnect: "जडान विच्छेद गर्नुहोस्",
    themeAuto: "Auto (system)",
    shortcutCommandPalette: "Command Palette",
    commandPalette: "Command Palette",
    noResults: "No results",
    redisCommandsReference: "Redis आदेशहरू",
    ungrouped: "समूहविहीन",
    grouped: "Grouped",
    connectFirst: "connectFirst",
    searchLanguage: "भाषा खोज्नुहोस्...",
    exportProgress: "कुञ्जीहरू निर्यात हुँदैछ...",
    importProgress: "कुञ्जीहरू आयात हुँदैछ...",
    importPreview: "पूर्वावलोकन",
    importOverwrite: "अधिलेखन",
    importSkip: "छोड्नुहोस्",
    importConflict: "कुञ्जी पहिले नै अवस्थित छ भने:",
    noKeysToExport: "निर्यात गर्न कुञ्जीहरू छैनन्",
    time: "समय",
    loading: "लोड हुँदैछ...",
    autoRefresh: "स्वचालित",
    exportSearchHint: "हालको खोजसँग मिल्ने कुञ्जीहरू मात्र निर्यात हुँदैछ",
    importSearchHint: "आयात सम्पूर्ण डाटाबेसमा लागू हुन्छ, खोज परिणामहरूमा मात्र होइन",
    importNoKeys: "फाइलमा कुञ्जीहरू फेला परेनन्",
  },
  status: {
    dataCopied: "डाटा क्लिपबोर्डमा छ",
    licenseSaved: "इजाजतपत्र बचत गरियो",
    exportDone: "निर्यात पूरा भयो",
    indexCreated: "इन्डेक्स सिर्जना भयो",
    indexDropped: "इन्डेक्स हटाइयो",
    importDone: (opts) => `आयात पूरा: ${opts.created} सिर्जित, ${opts.skipped} छोडिएको, ${opts.errors} त्रुटि`,
    nodeRemoved: "नोड हटाइयो",
    keyIsNotExisting: "यो कुञ्जी मेटाउन वा म्याद सकिएको हुन सक्छ।",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "कुञ्जी छैन";
      } else if (opts.keyCount === 1) {
        return "१ कुञ्जी";
      } else {
        return `${opts.keyCount} कुञ्जीहरू`;
      }
    },
    treeExpandAll: "सबै रूख पातहरू विस्तार गर्नुहोस्। यो अपरेशन महँगो हुन सक्छ र समय लाग्न सक्छ ...",
    noRedisKeys: "यस डाटाबेसमा कुनै कुञ्जीहरू छैनन्।",
    redisConnected: "Redis सफल जडान भयो",
    reloadingDataInfo: "Redis डाटा जानकारी पुन: लोड गर्दै",
    added: "थपियो",
    saved: "अद्यावधिक गरियो",
    cancelled: "रद्द गरियो",
    deleted: "मेटाइयो",
    savedRedis: "Redis डाटा बचत गरिएको छ",
    redisDisconnected: opts => {
      return `हालक�� जडानमा त्रुटि थियो: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `db सूचकांक सेट गरियो ${opts.db}। `;
    },
    treeDeleted: opts => {
      return `रूख कुञ्जी मेटाइयो (${opts.key})।`;
    },
    deletedKey: opts => {
      return `कुञ्जी मेटाइयो (${opts.key})।`;
    },
    renamedKey: "यो कुञ्जी पुन: नामाकरण गरिएको छ",
    ttlChanged: "यो कुञ्जीको TTL परिवर्तन गरिएको छ",
    notInteger: "यो इनपुट पूर्णांक होइन",
    persisted: "यो कुञ्जी सधैंभरि रहन्छ",
    set: "कुञ्जी सेट/थपिएको छ"
  },
  code: {
    "delete-connection": "यो जडान मेटाइएको थियो, त्यसैले तपाईं यस Redis उदाहरणमा विच्छेद हुनुभएको छ।",
    "save-connection": "यो जडान परिवर्तन गरिएको थियो, त्यसैले तपाईं यस Redis उदाहरणमा विच्छेद हुनुभएको छ। तपाइँ पुन: जडान गर्न सक्नुहुन्छ।",
    "readonly-connections": "जडानहरू थप्नुहोस्/बचत गर्नुहोस्/मेटाउनुहोस् केवल पढ्ने मात्र हो!",
    "readonly-connection-mode": "यो जडान पढ्ने मात्र मोड हो!",
    "list-out-of-bounds": "यो सूची सूचकांक सीमा बाहिर छ",
    "donation-ware-feature": "यो सुविधा दान संस्करणमा अवस्थित छ।",
    "feature-pro-readonly-required": "पढ्ने मात्र जडान मोडलाई प्रो वा इन्टरप्राइज इजाजतपत्र चाहिन्छ।",
    "feature-pro-ssh-required": "SSH टनेलिङलाई प्रो वा इन्टरप्राइज इजाजतपत्र चाहिन्छ।",
    "feature-enterprise-cluster-sentinel-required": "Cluster र Sentinel लाई इन्टरप्राइज इजाजतपत्र चाहिन्छ।",
    "feature-pro-json-binary-required": "JSON सम्पादन गर्नुहोस्, बाइनरी अपलोड गर्नुहोस् र बाइनरी डाउनलोड गर्नुहोस् प्रो वा इन्टरप्राइज इजाजतपत्र चाहिन्छ।",
    "feature-pro-rejson-required": "ReJSON (JSON डाटा प्रकार) लाई प्रो वा इन्टरप्राइज इजाजतपत्र चाहिन्छ।",
    "invalid-json-value": "मान मान्य छैन JSON।",
    "http_auth_required": "प्राधिकरण आवश्यक छ: कृपया HTTP Basic Auth को साथ प्रमाणीकरण गर्नुहोस् र पुन: लोड गर्नुहोस्।",
    "auto-connection-failed": "सम्भव छ, जडान हटाइयो र स्वत जडान असफल भयो, यस कारण।",
    invalid_console_command: "यो आदेश GUI मार्फत काम गरिरहेको छैन।"
  },
  licenseReason: {
    LICENSE_VALID: "इजाजतपत्र मान्य छ",
    LICENSE_INVALID: "इजाजतपत्र अवैध छ",
    LICENSE_MISSING: "कुनै इजाजतपत्र कुञ्जी सेट गरिएको छैन",
    LICENSE_DISABLED: "सर्भर कन्फिगरेसनमा इजाजतपत्र असक्षम पारिएको छ",
    LICENSE_NOT_FOUND: "लाइसेन्स फेला परेन",
    LICENSE_EXPIRED: "इजाजतपत्रको म्याद सकिएको छ",
    LICENSE_CLEARED: "इजाजतपत्र कुञ्जी खाली गरियो",
    LICENSE_MAX_DEVICES_REACHED: "अधिकतम उपकरण सिट पुग्यो",
    PRODUCT_MISMATCH: "लाइसेन्स उत्पादन मेल खाँदैन"
  },
  licenseStatusValue: {
    active: "सक्रिय",
    deleted: "मेटाइयो",
    all: "सबै",
    expired: "म्याद सकियो",
    missing: "हराइरहेको छ",
    inactive: "निष्क्रिय"
  },
  form: {
    error: {
      required: "आवश्यक छ",
      port: "पोर्ट १-६५५३५ को बीचमा छ",
      invalid: "फारम अमान्य छ"
    },
    connection: {
      label: {
        name: "ना��",
        group: "Group",
        host: "होस्टनाम",
        port: "पोर्ट",
        password: "पासवर्ड",
        username: "प्रयोगकर्ता नाम"
      }
    },
    treeSettings: {
      maxValueDisplay: "अधिकतम मान प्रदर्शन स्ट्रिङ लम्बाइ",
      maxValueDisplayInfo: "यदि ० मा सेट गरियो भने, पूर्ण मानहरू देखाउनुहोस्। यदि ० भन्दा ठूलो छ भने, यो लम्बाइमा काट्नुहोस्। यदि -१: तारका लागि, सम्पादन नगरेसम्म मान लुकाउनुहोस्; अन्य प्रकारका लागि, पूर्ण सामग्री देखाउनुहोस्।",
      maxKeys: "अधिकतम कुञ्जी गणना",
      maxKeysInfo: "GUI क्र्यास नहोस् भनेर, हामी अधिकतम कुञ्जी गणना सीमित गर्छौं।",
      keyCount: () => {
        return `कुञ्जीहरूको संख्या: ${p3xr.state.keysRaw.length}`;
      },
      label: {
        animation: "एनिमेसन प्रयोग गर्नुहोस्",
        noAnimation: "एनिमेसन छैन",
        jsonFormatTwoSpace: "ढाँचा JSON २ खाली ठाउँहरू सहित",
        jsonFormatFourSpace: "ढाँचा JSON 4 खाली ठाउँहरू सहित",
        formName: "Redis सेटिङहरू",
        searchModeClient: "ग्राहक खोज मोड",
        searchModeServer: "सर्भर खोज मोड",
        searchModeStartsWith: "खोज मोडको साथ सुरु हुन्छ",
        searchModeIncludes: "खोज मोड समावेश छ"
      },
      field: {
        treeSeparator: "रूख विभाजक",
        treeSeparatorSelector: "रूख विभाजक चयनकर्ता",
        page: "रूख पृष्ठ गणना",
        keyPageCount: "कुञ्जी पृष्ठ गणना",
        keysSort: "कुञ्जीहरू क्रमबद्ध गर्नुहोस्",
        searchMode: "खोज मोड",
        searchModeStartsWith: "खोज / समावेश संग सुरु हुन्छ"
      },
      error: {
        keyPageCount: "कुञ्जी पृष्ठ गणना 5 - 100 बीचको पूर्णांक हुनुपर्छ",
        page: "पृष्ठ गणना 10 - 5000 बीचको पूर्णांक हुनुपर्छ",
        maxValueDisplay: "अधिकतम प्रदर्शन मान -1 र 32768 बीचको पूर्णांक हुनुपर्छ",
        maxKeys: "अधिकतम कुञ्जी गणना मान 100 र 100000 बीचको पूर्णांक हुनुपर्छ"
      }
    },
    key: {
      label: {
        formName: {
          add: "नयाँ Redis कुञ्जी थप्नुहोस्",
          edit: "Redis कु��्जी सम्पादन गर्नुहोस्",
          append: "अवस्थित Redis कुञ्जीमा थप्नुहोस्"
        }
      },
      field: {
        streamTimestamp: "टाइमस्ट्याम्प",
        key: "कुञ्जी",
        type: "टाइप गर्नुहोस्",
        index: "अनुक्रमणिका",
        hashKey: "ह्यास कुञ्जी",
        score: "स्कोर",
        value: "मूल्य"
      },
      error: {
        streamTimestamp: "टाइमस्ट्याम्प आवश्यक छ, या त Redis ढाँचा वा * को रूपमा",
        key: "कुञ्जी हो, कम्तिमा, एक वर्ण",
        hashKey: "ह्यास तालिका कुञ्जी कम्तिमा एक वर्ण हो",
        score: "क्रमबद्ध सेट स्कोर आवश्यक छ",
        value: "मूल्य आवश्यक छ"
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
      title: "खोज",
      index: "इन्डेक्स",
      query: "क्वेरी",
      results: "परिणामहरू",
      noIndex: "इन्डेक्स फेला परेन",
      createIndex: "इन्डेक्स बनाउनुहोस्",
      dropIndex: "इन्डेक्स हटाउनुहोस्",
      indexInfo: "इन्डेक्स जानकारी",
      indexName: "इन्डेक्स नाम",
      prefix: "कुञ्जी उपसर्ग (वैकल्पिक)",
      fieldName: "फिल्ड नाम",
    },
    monitor: {
      title: "निगरानी",
      memory: "मेमोरी",
      opsPerSec: "अपरेशन/सेकेन्ड",
      clients: "ग्राहकहरू",
      blocked: "अवरुद्ध",
      hitsMisses: "हिट दर",
      networkIo: "नेटवर्क I/O",
      slowLog: "ढिलो लग",
      totalCommands: "जम्मा",
      expired: "म्याद सकिएको",
      evicted: "निकालिएको",
      clientList: "ग्राहक सूची",
      topKeys: "मेमोरी अनुसार ठूला कुञ्जीहरू",
      killClient: "ग्राहक बन्द गर्नुहोस्",
      clientKilled: "ग्राहक बन्द गरियो",
      confirmKillClient: "के तपाईं यो ग्राहक बन्द गर्न निश्चित हुनुहुन्छ?",
      noKeys: "कुञ्जीहरू छैनन्",
      noClients: "ग्राहकहरू छैनन्",
    },
    overview: {
      noConnected: "Redis सँग कुनै जडान छैन।",
      overviewClients: "ग्राहकहरूको गणनाद्वारा जडान गरिएको सूची गर्नुहोस्",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "१ ग्राहक";
        }
        return `${opt.length} ग्राहकहरु`;
      }
    },
    key: {
      label: {
        key: "कुञ्जी",
        encoding: "इन्कोडिङ",
        length: "साइज",
        ttl: "TTL",
        ttlTitle: "ब��ँच्ने समय",
        type: "टाइप गर्नुहोस्",
        ttlNotExpire: "म्याद समाप्त हुँदैन",
        lengthString: "बाइट्स",
        lengthItem: "वस्तुहरू",
        actions: "कार्यहरू"
      },
      list: {
        table: {
          index: "अनुक्रमणिका",
          value: "मूल्य"
        }
      },
      hash: {
        table: {
          hashkey: "हैसके",
          value: "मूल्य"
        }
      },
      set: {
        table: {
          value: "सदस्य"
        }
      },
      zset: {
        table: {
          value: "सदस्य",
          score: "स्कोर"
        }
      },
      stream: {
        table: {
          timestamp: "टाइमस्ट्याम्प आईडी",
          field: "क्षेत्र",
          value: "मूल्य"
        }
      }
    },
    treeControls: {
      settings: "रूख सेटिङहरू",
      expandAll: "सबै विस्तार गर्नुहोस्",
      collapseAll: "सबै संक्षिप्त गर्नुहोस्",
      search: {
        search: "कुञ्जीहरूमा खोज्नुहोस्",
        clear: "खाली सेट गर्न हालको खोज खाली गर्नुहोस्",
        placeholderClient: "ग्राहक पक्ष खोज्नुहोस्",
        placeholderServer: "सर्भर साइड खोज्नुहोस्",
        info: "क्लाइन्ट साइड खोजको अर्थ, यो खोज इनपुटमा पाठसँग मेल खान्छ। सर्भर साइड खोजको अर्थ, यो कुञ्जी ढाँचामा *{search-text}* को रूपमा खोजी जस्तै हो। ठूला खोज सेटहरूको लागि, यो सर्भर साइड खोजी प्रयोग गर्न राम्रो छ। साना खोज सेटहरूको लागि, ग्राहक पक्ष खोज मोड प्रयोग गर्न राम्रो छ।" + ` यदि कुञ्जी गणना सकियो ${p3xr.settings.maxLightKeysCount}, तपाईले सर्भर साइडमा मात्र खोज्न सक्नुहुन्छ।`,
        largeSetInfo: "ठूलो सेटमा, ग्राहक पक्ष खोज असक्षम गरिएको छ। त्यसैले अहिले मात्र सर्भर साइड खोजी सम्भव छ।",
        infoDetails: "खोज कसरी काम गर्छ पत्ता लगाउन, कृपया सेटिङहरू जाँच गर्नुहोस्"
      },
      pager: {
        next: "अर्को",
        prev: "अघिल्लो",
        first: "पहिले",
        last: "अन्तिम"
      }
    }
  },
  time: {
    loading: "लोड हुँदैछ...",
    years: "वर्ष",
    months: "महिना",
    days: "दिनहरू",
    year: "वर्ष",
    month: "महिना",
    day: "दिन"
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
