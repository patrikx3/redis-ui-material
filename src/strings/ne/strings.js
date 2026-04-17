const strings = {
  error: {
    server_error: "सर्भर त्रुटि, कृपया पुन: प्रयास गर्नुहोस्",
    aiPromptTooLong: "AI अनुरोध धेरै लामो छ (अधिकतम 4096 अक्षर)",
  },
  title: {
    donate: "दान गर्नुहोस्",
    donateTitle: "P3X Redis UI लाई समर्थन गर्नुहोस्",
    donateDescription: "P3X Redis UI एक निःशुल्क, ओपन-सोर्स परियोजना हो। अ्यप, AI सुविधाहरू, Docker छविहरू, सर्भरहरू र पूर्वाधारको मर्मत खर्च विकासकर्ताको आफ्नै खल्तीबाट आउँछ। यदि तपाईंलाई यो उपकरण उपयोगी लाग्छ भने, कृपया दानको माध्यमबाट यसको निरन्तर विकासलाई समर्थन गर्ने विचार गर्नुहोस्। प्रत्येक योगदानले परियोजनालाई जीवित र बढ्दो राख्न मद्दत गर्छ। धन्यवाद!",
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
    threads: "threads"
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
    deleteHashKey: "के तपाइँ यो ह्यास कुञ्जी वस्तु मेटाउन निश्चित हुनुहुन्छ?",
    deleteStreamTimestamp: "के तपाइँ यो स्ट्रिम टाइमस्ट्याम्प मेटाउन निश्चित हुनुहुन्छ?",
    deleteSetMember: "के तपाइँ यो सेट सदस्य मेटाउन निश्चित हुनुहुन्छ?",
    deleteZSetMember: "के तपाइँ यो क्रमबद्ध सेट सदस्य मेटाउन निश्चित हुनुहुन्छ?",
    deleteConnection: "पुष्टि गर्नुहोस्",
    deleteConnectionText: "के तपाइँ यो Redis जडान मेटाउन निश्चित हुनुहुन्छ?",
    deleteNode: "के तपाइँ यो Redis नोड मेटाउन निश्चित हुनुहुन्छ?",
    deleteAllKeys: opts => {
      return `यो रूख र यसका सबै कुञ्जीहरू मेटाउनुहोस् (${opts.key})?`;
    },
    deleteSearchKeys: opts => {
      return `"${opts.pattern}" सँग मिल्ने सबै कुञ्जीहरू मेटाउन निश्चित हुनुहुन्छ? ${opts.count} कुञ्जीहरू फेला परे।`;
    },
    socketioConnectError: "Socket.IO सर्भरमा जडान हुन सक्दैन, तपाइँ पुन: लोड गर्न सक्नुहुन्छ र जडान त्रुटि आफैं समाधान गर्न प्रयास गर्न सक्नुहुन्छ, ग्राहकलाई थाहा छैन कि यसलाई कसरी समाधान गर्ने।",
    socketioAuthRequired: "Socket.IO प्राधिकरण आवश्यक छ। कृपया HTTP Basic Auth (प्रयोगकर्ता नाम/पासवर्ड) को साथ प्रमाणीकरण गर्नुहोस् र पुन: लोड गर्नुहोस्।",
    invalidCredentials: "अमान्य प्रयोगकर्ता नाम वा पासवर्ड।",
    delete: "मेटाउने?",
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
    deleteAllKeysMenu: (opts) => `सबै मेटाउनुहोस् ${opts.count}`,
    importKeys: "कुञ्जीहरू आयात गर्नुहोस्",
    deleteSearchKeys: (opts) => `${opts.count} मिल्ने कुञ्जीहरू मेटाउनुहोस्`,
    saveWithFormatJson: "ढाँचा संग बचत गर्नुहोस्",
    formatJson: "ढाँचा Json",
    wrap: "लपेट्नुहोस्",
    unwrap: "खोल्नुहोस्",
    downloadJson: "JSON डाउनलोड गर्नुहोस्",
    pubsubMonitor: "PubSub",
    pulse: "Pulse",
    profiler: "Profiler",
    memoryAnalysis: "विश्लेषण",
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
    theme: "विषयवस्तु",
    github: "GitHub",
    githubRepo: "भण्डार",
    githubRelease: "रिलीज गर्दछ",
    githubChangelog: "परिवर्तन सूची",
    info: "जानकारी",
    settings: "सेटिङहरू",
    connect: "जडान गर्नुहोस्",
    disconnect: "जडान विच्छेद गर्नुहोस्",
    logout: "लगआउट",
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
    fieldTtl: "फिल्ड TTL",
    digest: "डाइजेस्ट",
    delete: "मेट्नुहोस्",
    remove: "हटाउनुहोस्",
    areYouSure: "के तपाईं पक्का हुनुहुन्छ?",
    sure: "पक्का",
    testConnection: "परीक्षण जडान",
    getKey: "Redis कुञ्जी र सम्बन्धित डाटा लोड गर्दै...",
    jsonViewShow: "JSON प्रदर्शन गर्नुहोस्",
    jsonViewEditor: "JSON सम्पादन गर्नुहोस्",
    quickConsole: "द्रुत कन्सोल",
    moveUp: "माथि सार्नुहोस्",
    moveDown: "तल सार्नुहोस्",
  },
  diff: {
    reviewChanges: "\u092a\u0930\u093f\u0935\u0930\u094d\u0924\u0928\u0939\u0930\u0942 \u0938\u092e\u0940\u0915\u094d\u0937\u093e \u0917\u0930\u094d\u0928\u0941\u0939\u094b\u0938\u094d",
    inline: "\u0907\u0928\u0932\u093e\u0907\u0928",
    sideBySide: "\u0938\u0901\u0917\u0938\u0901\u0917\u0948",
    additions: "\u0925\u092a\u093f\u090f\u0915\u093e",
    deletions: "\u0939\u091f\u093e\u0907\u090f\u0915\u093e",
    unchangedLines: "\u0905\u092a\u0930\u093f\u0935\u0930\u094d\u0924\u093f\u0924 \u0932\u093e\u0907\u0928\u0939\u0930\u0942",
    noChanges: "\u0915\u0941\u0928\u0948 \u092a\u0930\u093f\u0935\u0930\u094d\u0924\u0928 \u092b\u0947\u0932\u093e \u092a\u0930\u0947\u0928",
    before: "\u0905\u0918\u093f",
    after: "\u092a\u091b\u093f",
  },
  label: {
    id: {
      nodeId: "नोड आईडी",
      id: "जडान ID",
      info: "यदि तपाइँ निम्न गुणहरू परिवर्तन गर्न चाहनुहुन्न भने: sshPassword, sshPrivateKey, पासवर्ड, tlsCrt, tlsKey, tlsCa, कृपया गुण मानहरू अक्षुण्ण राख्न ती गुणहरूमा जडानको ID प्रविष्ट गर्नुहोस्। यदि तपाइँ नोड पासवर्डमा समान तर्क चाहनुहुन्छ भने, त्यसपछि नोड पासवर्डमा नोड आईडी प्रविष्ट गर्नुहोस्।"
    },
    secureFeature: "यदि तपाईंले P3X बाट सुरु हुने मान देख्नुभयो भने, यो एक सुरक्षित सुविधा हो। सेटिङ्हरू परिवर्तन गर्नका लागि, यी सेटिङहरूलाई खाली वा अरू केहीले बदल्नुहोस् र तिनीहरू बचत हुनेछन्। यदि तपाइँ सेटिङहरू परिवर्तन गर्नुहुन्न भने, सेटिङहरू सर्भरमा जस्तै राखिनेछ।",
    aiTranslating: "अनुवाद गर्दै...",
    aiSettings: "AI सेटिङ",
    aiGroqApiKey: "Groq API कुञ्जी",
    aiGroqApiKeyInfo: "वैकल्पिक। राम्रो प्रदर्शनको लागि आफ्नो Groq API कुञ्जी। निःशुल्क कुञ्जी प्राप्त गर्नुहोस्",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "AI API कुञ्जी सुरक्षित गरियो",
    aiGroqApiKeyInvalid: "Groq API कुञ्जी अमान्य छ",
    aiGroqApiKeyNotSet: "सेट गरिएको छैन (सर्भर पूर्वनिर्धारित)",
    aiEnabled: "AI सक्षम",
    aiEnabledYes: "हो",
    aiEnabledNo: "होइन",
    aiRouteViaNetwork: "network.corifeus.com मार्फत पठाउनुहोस्",
    aiRoutingDirect: "अनुरोधहरू तपाईंको आफ्नै API कुञ्जी प्रयोग गरेर network.corifeus.com बिना सीधै Groq मा जान्छन्।",
    aiRoutingNetwork: "AI अनुरोधहरू network.corifeus.com मार्फत पठाइन्छन्। यदि तपाईंसँग आफ्नै निःशुल्क Groq API कुञ्जी छ भने, यो स्विच बन्द गरेर network.corifeus.com बिना सीधै Groq मा पठाउन सक्नुहुन्छ।",
    aiMaxTokens: "AI अधिकतम टोकन",
    aiMaxTokensInfo: "AI प्रतिक्रियाका लागि अधिकतम टोकन संख्या। उच्च मानले लामो उत्तर दिन सक्छ, तर API क्रेडिट बढी प्रयोग हुन सक्छ।",
    consoleDrawer: {
      toggleTooltip: "कन्सोल टगल गर्नुहोस्",
      clearTooltip: "कन्सोल इतिहास खाली गर्नुहोस्",
      closeTooltip: "कन्सोल बन्द गर्नुहोस्",
      aiSettingsTooltip: "AI सेटिङ",
      modeRedis: "REDIS",
      modeAi: "AI",
      connectionChipNoDb: opts => `${opts.name}`,
      connectionChipWithDb: opts => `${opts.name} · db ${opts.db}`,
      pageChip: opts => `पृष्ठ: ${opts.page}`,
      connectingTo: opts => `${opts.name} मा जडान गर्दै…`,
      connectedTo: opts => `${opts.name} सँग जडान भयो (Redis ${opts.version} ${opts.mode}, ${opts.modules} मोड्युल लोड गरिएका छन्)`,
      connectedToNoInfo: opts => `${opts.name} सँग जडान भयो`,
      disconnectedFrom: opts => `${opts.name} बाट विच्छेद भयो`,
      notConnected: "जडान गरिएको छैन।",
      limitedAiOnly: "सीमित AI मात्र — सामान्य Redis प्रश्नोत्तर काम गर्छ।",
      connectHint: "लाइभ डायग्नोस्टिक्सका लागि टाइप गर्नुहोस्: connect <name>",
      cheatsheetHint: "के सोध्न सक्नुहुन्छ हेर्न ai: help टाइप गर्नुहोस्।",
      needsConnection: "यसका लागि सक्रिय जडान चाहिन्छ। पहिले \"connect <name>\" टाइप गर्नुहोस्।",
      aiNeedsConnectionReason: "लाइभ-स्टेट AI (tool use) Redis सँग जडान हुँदा मात्र उपलब्ध हुन्छ।",
      verbNeedsConnection: opts => `"${opts.verb}" का लागि सक्रिय जडान चाहिन्छ — पहिले "connect <name>" टाइप गर्नुहोस्।`,
      aiLimitedMode: "AI सीमित मोडमा छ — तपाईं जडान नहुञ्जेल सामान्य Redis ज्ञानसम्बन्धी प्रश्नहरू मात्र काम गर्छन्।",
      welcomeDisconnected: "स्वागत छ। तपाईं अझै कुनै पनि Redis इन्स्ट्यान्समा जडान हुनुभएको छैन।",
      readyIndicator: "तयार।",
    },
    cheatsheet: {
      title: "AI चिटशीट — म के सोध्न सक्छु?",
      subtitle: "कुनै पनि प्रम्प्ट क्लिक गरेर कन्सोलमा टाँस्नुहोस्। त्यसपछि Enter थिच्नुहोस्।",
      searchPlaceholder: "प्रम्प्टहरू फिल्टर गर्नुहोस्…",
      openOfficialDocs: "Redis कमाण्डहरू ↗",
      openOfficialDocsTooltip: "redis.io मा आधिकारिक Redis कमाण्ड सन्दर्भ खोल्नुहोस्",
      closeTooltip: "बन्द गर्नुहोस् (Esc)",
      empty: "तपाईंको फिल्टरसँग कुनै प्रम्प्ट मेल खाँदैन।",
      footerHint: "सुझाव: कुनै पनि भाषामा \"ai:\" पछाडि केही पनि टाइप गर्नुहोस् — AI ले 54 भाषा बुझ्छ र आवश्यक परेमा प्रत्यक्ष Redis स्थिति प्रयोग गर्छ।",

      // Each group has: name (category label), match (search-filter alias), prompts (array of example strings)
      groups: {
        diagnostics: {
          name: "प्रत्यक्ष निदान",
          description: "सुरक्षित पढ्ने-मात्र उपकरणहरू मार्फत प्रत्यक्ष सर्भर स्थिति जाँच्न AI लाई भन्नुहोस्।",
          prompts: [
            "मेमोरी किन उच्च छ?",
            "मलाई १० सबैभन्दा सुस्त क्वेरीहरू देखाउनुहोस्",
            "कुन क्लाइन्टहरू जडान भएका छन्?",
            "maxmemory नीति के हो?",
            "भर्खरै कुनै eviction भएको छ?",
            "कुनै latency घटना छ?",
            "सर्भर कहिलेदेखि चलिरहेको छ?",
            "हिट रेट कति छ?",
            "CPU प्रयोग देखाउनुहोस्",
            "keyspace को सारांश दिनुहोस्",
            "प्रत्येक डाटा प्रकारले कति मेमोरी प्रयोग गर्छ?",
            "अहिले सर्भरलाई केहीले रोकिरहेको छ?"
          ]
        },
        keys: {
          name: "कुञ्जीहरू",
          description: "ट्रीमा क्लिक नगरी कुञ्जीहरूको निरीक्षण, खोज र विश्लेषण गर्नुहोस्।",
          prompts: [
            "user:* सँग मेल खाने सबै कुञ्जीहरू फेला पार्नुहोस्",
            "प्रत्येक डाटाबेसमा कति कुञ्जीहरू छन्?",
            "यो db मा सबैभन्दा ठूलो hash देखाउनुहोस्",
            "६० सेकेन्डभन्दा कम TTL भएका कुञ्जीहरू फेला पार्नुहोस्",
            "कुन कुञ्जीहरूसँग TTL छैन?",
            "कुञ्जी session:abc को प्रकार के हो?",
            "\"session:\" उपसर्गले प्रयोग गरेको मेमोरीको अनुमान गर्नुहोस्",
            "कुञ्जी user:42 को वस्तु एन्कोडिङ देखाउनुहोस्",
            "म्याद सकिन लागेका कुनै कुञ्जीहरू छन्?",
            "कुन namespace ले सबैभन्दा धेरै मेमोरी प्रयोग गर्छ?"
          ]
        },
        dataTypes: {
          name: "डाटा प्रकारहरू",
          description: "हरेक Redis प्रकारमा निर्माण/पढ्ने/अद्यावधिकका लागि प्राकृतिक-भाषाको वाक्यांश।",
          prompts: [
            "name=Alice age=30 फिल्डहरू सहित user:1 नामक hash बनाउनुहोस्",
            "list tasks मा तीन आइटम थप्नुहोस्",
            "set favourites मा सदस्यहरू थप्नुहोस्",
            "sorted set leaderboard मा स्कोर सहित सदस्यहरू थप्नुहोस्",
            "stream events मा एउटा घटना थप्नुहोस्",
            "stream events बाट अन्तिम १० प्रविष्टिहरू ल्याउनुहोस्",
            "hash user:1 का सबै फिल्डहरू ल्याउनुहोस्",
            "set favourites का सदस्यहरू ल्याउनुहोस्",
            "leaderboard बाट स्कोरको आधारमा शीर्ष १० ल्याउनुहोस्"
          ]
        },
        modules: {
          name: "मोड्युलहरू",
          description: "लोड भएका Redis मोड्युलका लागि क्वेरी (तलका श्रेणीहरू मोड्युल उपस्थित हुँदा मात्र देखिन्छन्)।",
          prompts: []
        },
        json: {
          name: "RedisJSON",
          description: "ReJSON मोड्युल लोड हुँदा उपलब्ध।",
          prompts: [
            "user:42 मा { name: \"Alice\", age: 30 } सँगको JSON कागजात बनाउनुहोस्",
            "user:42 को name फिल्ड पढ्नुहोस्",
            "user:42 को age अद्यावधिक गरेर 31 बनाउनुहोस्",
            "सबै JSON कुञ्जीहरू सूचीबद्ध गर्नुहोस्",
            "JSON कागजातबाट एउटा फिल्ड मेटाउनुहोस्",
            "JSONPath प्रयोग गरेर नेस्टेड फिल्ड ल्याउनुहोस्"
          ]
        },
        search: {
          name: "RediSearch",
          description: "search मोड्युल लोड हुँदा उपलब्ध।",
          prompts: [
            "सबै पूर्ण-पाठ अनुक्रमणिकाहरू सूचीबद्ध गर्नुहोस्",
            "idx:products अनुक्रमणिकामा \"redis\" का लागि पूर्ण-पाठ खोज चलाउनुहोस्",
            "title (TEXT) र price (NUMERIC) फिल्डहरू सहित hash-आधारित अनुक्रमणिका बनाउनुहोस्",
            "अनुक्रमणिका idx:products बारे जानकारी ल्याउनुहोस्",
            "अनुक्रमणिका idx:products ड्रप गर्नुहोस्",
            "मूल्य १० र ५० बीचका कागजातहरू फेला पार्नुहोस्",
            "पाठ र भेक्टर समानता संयोजन गर्ने हाइब्रिड खोज लेख्नुहोस्"
          ]
        },
        timeseries: {
          name: "RedisTimeSeries",
          description: "timeseries मोड्युल लोड हुँदा उपलब्ध।",
          prompts: [
            "सबै timeseries कुञ्जीहरू सूचीबद्ध गर्नुहोस्",
            "temp:room1 मा एउटा डाटा बिन्दु थप्नुहोस्",
            "temp:room1 को हिजोदेखि अहिलेसम्मको दायरा ल्याउनुहोस्",
            "लेबल sensor=temp अनुसार बहु-दायरा ल्याउनुहोस्",
            "temp:room1 का लागि १०० साइन-वेभ डाटा बिन्दुहरू उत्पन्न गर्नुहोस्",
            "temp:room1 का लागि अवधारण र लेबलहरू देखाउनुहोस्"
          ]
        },
        bloom: {
          name: "RedisBloom (Bloom / Cuckoo / Top-K / CMS / T-Digest)",
          description: "bf मोड्युल लोड हुँदा उपलब्ध।",
          prompts: [
            "bloom filter spam:ips मा foo आइटम छ कि छैन जाँच्नुहोस्",
            "bloom filter spam:ips मा आइटमहरू थप्नुहोस्",
            "K=१० सहित popular नामक top-K बनाउनुहोस्",
            "कुञ्जी /home का लागि count-min sketch traffic क्वेरी गर्नुहोस्",
            "t-digest मा मानहरू थपेर ९५औं प्रतिशतक ल्याउनुहोस्",
            "bloom filter spam:ips को जानकारी देखाउनुहोस्"
          ]
        },
        vectorSet: {
          name: "VectorSet (Redis 8+)",
          description: "Redis 8+ पत्ता लाग्दा उपलब्ध (नेटिभ VECTORSET प्रकार)।",
          prompts: [
            "embeddings मा एउटा भेक्टर थप्नुहोस्",
            "क्वेरी भेक्टरसँग सबैभन्दा मिल्ने १० भेक्टरहरू फेला पार्नुहोस्",
            "vectorset embeddings का आयामहरू र गणना देखाउनुहोस्",
            "vectorset embeddings बाट एउटा तत्व मेटाउनुहोस्",
            "VSIM सँग तत्वको नामद्वारा खोज्नुहोस्"
          ]
        },
        redis8: {
          name: "Redis 8+ सुविधाहरू",
          description: "Redis 8+ पत्ता लाग्दा देखाइन्छ।",
          prompts: [
            "HEXPIRE सँग hash फिल्ड ttl सेट गर्नुहोस्",
            "स्ट्रिङ मानको digest ल्याउनुहोस्",
            "हाइब्रिड पूर्ण-पाठ + भेक्टर खोज चलाउनुहोस् (FT.HYBRID)",
            "MSETEX प्रयोग गरेर साझा म्यादसँग धेरै कुञ्जी सेट गर्नुहोस्",
            "consumer group सँग stream प्रविष्टि मेटाउनुहोस् (XDELEX)",
            "शीर्ष १० slots का लागि cluster slot-stats देखाउनुहोस्"
          ]
        },
        scripting: {
          name: "स्क्रिप्टिङ",
          description: "प्राकृतिक-भाषाको विवरणबाट Lua / EVAL स्क्रिप्टहरू उत्पन्न गर्नुहोस्।",
          prompts: [
            "Y > 5 भएमा मात्र counter X बढाउने परमाणु स्क्रिप्ट लेख्नुहोस्",
            "Lua सँग १०० अनियमित कुञ्जीहरू उत्पन्न गर्नुहोस्",
            "यो shell pipeline लाई एउटै EVAL मा बदल्नुहोस्: keys user:* | GET | grep inactive | DEL",
            "cluster सुरक्षाका लागि batch सञ्चालनलाई Lua मा पोर्ट गर्नुहोस्",
            "एउटै Lua कलमा check-and-set शैलीको अद्यावधिक",
            "hash मा iterate गरेर ढाँचासँग मिल्ने फिल्डहरू मेटाउनुहोस्"
          ]
        },
        cluster: {
          name: "क्लस्टर",
          description: "क्लस्टर मोडमा मात्र देखाइन्छ।",
          prompts: [
            "क्लस्टर जानकारी देखाउनुहोस्",
            "क्लस्टर नोडहरू सूचीबद्ध गर्नुहोस्",
            "कुञ्जी गणनाद्वारा शीर्ष १० slots देखाउनुहोस्",
            "मेमोरीद्वारा शीर्ष १० slots देखाउनुहोस्",
            "slot 5000 कुन master को हो?"
          ]
        },
        acl: {
          name: "ACL (Redis 6+)",
          description: "access-control प्रयोगकर्ताहरू र हालको जडानको निरीक्षण गर्नुहोस्।",
          prompts: [
            "म कसको रूपमा जडान भएको छु?",
            "सबै ACL प्रयोगकर्ताहरू सूचीबद्ध गर्नुहोस्",
            "मसँग के के अनुमति छन्?",
            "पूर्वनिर्धारित प्रयोगकर्ताका नियमहरू देखाउनुहोस्"
          ]
        },
        qna: {
          name: "सामान्य प्रश्न-उत्तर",
          description: "Redis ज्ञानका प्रश्न सोध्नुहोस् — उपकरण होइन, जवाफ मात्र।",
          prompts: [
            "ZADD के हो?",
            "cluster failover कसरी काम गर्छ?",
            "SCAN र KEYS को तुलना गर्नुहोस्",
            "EVAL कहिले र धेरै कमाण्डहरू कहिले प्रयोग गर्ने?",
            "Redis का persistence विकल्पहरू के के हुन्?",
            "RDB र AOF बीचको भिन्नता के हो?",
            "Redis Sentinel ले नयाँ master कसरी निर्णय गर्छ?",
            "क्लस्टर मोडमा hash tags बुझाउनुहोस्"
          ]
        },
        translate: {
          name: "प्राकृतिक-भाषा → Redis कमाण्ड",
          description: "तपाईं के चाहनुहुन्छ साधारण अंग्रेजी (वा ५४ भाषामध्ये कुनैमा) वर्णन गर्नुहोस्; AI ले Redis कमाण्ड लेख्नेछ।",
          prompts: [
            "कुञ्जी user:42 मेटाउनुहोस्",
            "कुञ्जी foo को नाम bar मा बदल्नुहोस्",
            "कुञ्जी session:abc को म्याद १० सेकेन्डमा सकिने बनाउनुहोस्",
            "कुञ्जी source लाई destination मा प्रतिलिपि गर्नुहोस्",
            "counter visits लाई ५ ले बढाउनुहोस्",
            "कुञ्जी greeting लाई १ घण्टाका लागि \"hello\" मा सेट गर्नुहोस्",
            "सबैभन्दा बारम्बार पहुँच गरिएका १० कुञ्जीहरू देखाउनुहोस्",
            "temp:* सँग मेल खाने सबै कुञ्जीहरू मेटाउनुहोस्"
          ]
        }
      }
    },
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
    jsonViewNotParsable: "यो मान JSON पार्स गर्न मिल्दैन।",
    ttlTitle: "TTL सेकेन्डमा सेट गर्नुहोस्",
    passwordSecure: "पासवर्ड खाली हुन सक्छ, तर अझै पनि यसले क्यारेक्टरहरू देखाउनेछ, यो एक सुरक्षा सुविधा हो।",
    aclAuthHint: "प्रमाणीकरण गर्न Redis ACL प्रयोगकर्ता नाम र पासवर्ड प्रयोग गर्नुहोस्। पासवर्ड नभएको पूर्वनिर्धारित प्रयोगकर्ताका लागि खाली छोड्नुहोस्।",
    tlsWithoutCert: "अतिरिक्त प्रमाणपत्र बिना TLS सक्षम गर्नुहोस्",
    tlsRejectUnauthorized: "अनधिकृत प्रमाणपत्र अस्वीकार गर्नुहोस्",
    tlsSecure: "यदि तपाइँ P3X बाट सुरु हुने TLS कन्फिगरेसन देख्नुहुन्छ वा सबै TLS सेटिङहरू उस्तै देखिन्छन् भने, यो सुरक्षित सुविधा हो। सेटिङहरू परिवर्तन गर्न यी सेटिङहरूलाई खाली वा अरू केहीले बदल्नुहोस्, र ती बचत हुनेछन्। यदि तपाईंले TLS सेटिङहरू परिवर्तन गर्नुभएन भने, ती सर्भरमा जस्तै राखिनेछन्।",
    treeSeparatorEmpty: "यदि रूख विभाजक खाली छ भने, रूखमा कुनै नेस्टेड नोडहरू हुनेछैन, केवल एक शुद्ध सूची",
    treeSeparatorEmptyNote: "कुनै नेस्टेड नोडहरू छैनन्, केवल शुद्ध सूची",
    welcomeConsole: "Redis कन्सोलमा स्वागत छ",
    welcomeConsoleInfo: "SHIFT + कर्सर माथि वा तल इतिहास सक्षम छ",
    redisListIndexInfo: "जोड्नको लागि खाली, -1 लाई प्रिपेन्ड गर्न वा देखाइएको स्थितिमा बचत गर्न।",
    console: "कन्सोल",
    connectiondAdd: "जडान थप्नुहोस्",
    connectiondEdit: "जडान सम्पादन गर्नुहोस्",
    connectiondView: "जडान हेर्नुहोस्",
    connections: "जडानहरू",
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
    languageAuto: "Auto (system)",
    shortcutCommandPalette: "कमान्ड प्यालेट",
    commandPalette: "कमान्ड प्यालेट",
    noResults: "कुनै परिणाम छैन",
    redisCommandsReference: "Redis आदेशहरू",
    ungrouped: "समूहविहीन",
    grouped: "समूहबद्ध",
    connectFirst: "पहिले Redis सर्भरसँग जडान गर्नुहोस्",
    searchLanguage: "भाषा खोज्नुहोस्...",
    exportProgress: "कुञ्जीहरू निर्यात हुँदैछ...",
    importProgress: "कुञ्जीहरू आयात हुँदैछ...",
    importPreview: "पूर्वावलोकन",
    importOverwrite: "अधिलेखन",
    importSkip: "छोड्नुहोस्",
    importConflict: "कुञ्जी पहिले नै अवस्थित छ भने:",
    noKeysToExport: "निर्यात गर्न कुञ्जीहरू छैनन्",
    time: "समय",
    type: "प्रकार",
    format: "ढाँचा",
    loading: "लोड हुँदैछ...",
    autoRefresh: "स्वचालित",
    exportSearchHint: "हालको खोजसँग मिल्ने कुञ्जीहरू मात्र निर्यात हुँदैछ",
    importSearchHint: "आयात सम्पूर्ण डाटाबेसमा लागू हुन्छ, खोज परिणामहरूमा मात्र होइन",
    deleteSearchHint: "सर्भरमा हालको खोजसँग मिल्ने सबै कुञ्जीहरू मेटाउँछ",
    deletingSearchKeys: "मिल्ने कुञ्जीहरू मेटाउँदै...",
    importNoKeys: "फाइलमा कुञ्जीहरू फेला परेनन्",
    desktopNotifications: "Desktop Notifications",
    desktopNotificationsEnabled: "Enable desktop notifications",
    desktopNotificationsInfo: "एपमा फोकस नभएको बेला Redis विच्छेद र पुन: जडानका लागि OS सूचनाहरू प्राप्त गर्नुहोस्।"
  },
  status: {
    dataCopied: "डाटा क्लिपबोर्डमा छ",
    exportDone: "निर्यात पूरा भयो",
    deletedSearchKeys: (opts) => `${opts.count} कुञ्जीहरू मेटाइयो`,
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
    reverted: "\u092b\u093f\u0930\u094d\u0924\u093e \u0917\u0930\u093f\u092f\u094b",
    reloadingDataInfo: "Redis डाटा जानकारी पुन: लोड गर्दै",
    added: "थपियो",
    saved: "अद्यावधिक गरियो",
    cancelled: "रद्द गरियो",
    deleted: "मेटाइयो",
    savedRedis: "Redis डाटा बचत गरिएको छ",
    redisDisconnected: opts => {
      return `हालको जडानमा त्रुटि थियो: ${opts.error.message}`;
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
    set: "कुञ्जी सेट/थपिएको छ",
    connectionRestored: "जडान पुनर्स्थापित भयो",
    socketDisconnected: "विच्छेद भयो",
    socketError: "जडान त्रुटि",
    deletedHashKey: "ह्यास कुञ्जी मेटाइयो",
    deletedSetMember: "सेट सदस्य मेटाइयो",
    deletedListElement: "सूची तत्व मेटाइयो",
    deletedZSetMember: "क्रमबद्ध सेट सदस्य मेटाइयो",
    deletedStreamTimestamp: "स्ट्रिम प्रविष्टि मेटाइयो",
  },
  code: {
    "delete-connection": "यो जडान मेटाइएको थियो, त्यसैले तपाईं यस Redis उदाहरणमा विच्छेद हुनुभएको छ।",
    "save-connection": "यो जडान परिवर्तन गरिएको थियो, त्यसैले तपाईं यस Redis उदाहरणमा विच्छेद हुनुभएको छ। तपाइँ पुन: जडान गर्न सक्नुहुन्छ।",
    "readonly-connections": "जडानहरू थप्नुहोस्/बचत गर्नुहोस्/मेटाउनुहोस् केवल पढ्ने मात्र हो!",
    "readonly-connection-mode": "यो जडान पढ्ने मात्र मोड हो!",
    "list-out-of-bounds": "यो सूची सूचकांक सीमा बाहिर छ",
    "invalid-json-value": "मान मान्य छैन JSON।",
    "http_auth_required": "प्राधिकरण आवश्यक छ: कृपया HTTP Basic Auth को साथ प्रमाणीकरण गर्नुहोस् र पुन: लोड गर्नुहोस्।",
    "auto-connection-failed": "सम्भव छ, जडान हटाइयो र स्वत जडान असफल भयो, यस कारण।",
    invalid_console_command: "यो आदेश GUI मार्फत काम गरिरहेको छैन।",
    "AI_DISABLED": "AI निष्क्रिय छ। AI सेटिङमा सक्रिय गर्नुहोस्।",
    "AI_PROMPT_REQUIRED": "AI प्रम्प्ट आवश्यक छ।",
    "GROQ_API_KEY_READONLY": "Groq API कुञ्जी पठन-मात्र हो र परिमार्जन गर्न सकिँदैन।",
    "blocked_api_access": "तपाईंको Groq API योजनाले यो मोडेलमा पहुँच दिँदैन। Groq योजना अपग्रेड गर्नुहोस् वा network.corifeus.com प्रोक्सी प्रयोग गर्नुहोस्।",
    "rate_limit": "AI दर सीमामा पुगियो। पछि फेरि प्रयास गर्नुहोस् वा सेटिङमा आफ्नो Groq API कुञ्जी प्रयोग गर्नुहोस्।"
  },
  form: {
    error: {
      required: "आवश्यक छ",
      port: "पोर्ट १-६५५३५ को बीचमा छ",
      invalid: "फारम अमान्य छ"
    },
    connection: {
      label: {
        name: "नाम",
        group: "समूह",
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
      keyCount: (opts) => {
        return `कुञ्जीहरूको संख्या: ${opts?.keyCount ?? 0}`;
      },
      label: {
        animation: "एनिमेसन प्रयोग गर्नुहोस्",
        noAnimation: "एनिमेसन छैन",
        undoEnabled: "\u092a\u0942\u0930\u094d\u0935\u0935\u0924\u094d \u0938\u0915\u094d\u0937\u092e \u091b",
        undoDisabled: "\u092a\u0942\u0930\u094d\u0935\u0935\u0924\u094d \u0905\u0915\u094d\u0937\u092e \u091b",
        diffEnabled: "\u0938\u0947\u092d \u0917\u0930\u094d\u0928\u0941 \u0905\u0918\u093f diff \u0926\u0947\u0916\u093e\u0909\u0928\u0941\u0939\u094b\u0938\u094d",
        diffDisabled: "\u0938\u0947\u092d \u0917\u0930\u094d\u0928\u0941 \u0905\u0918\u093f diff \u0928\u093f\u0937\u094d\u0915\u094d\u0930\u093f\u092f \u091b",
        jsonFormatTwoSpace: "ढाँचा JSON २ खाली ठाउँहरू सहित",
        jsonFormatFourSpace: "ढाँचा JSON 4 खाली ठाउँहरू सहित",
        formName: "Redis सेटिङहरू",
        searchModeClient: "ग्राहक खोज मोड",
        searchModeServer: "सर्भर खोज मोड",
        searchModeStartsWith: "खोज मोडको साथ सुरु हुन्छ",
        searchModeIncludes: "खोज मोड समावेश छ"
      },
      undoHint: "\u092a\u0942\u0930\u094d\u0935\u0935\u0924\u094d string \u0930 JSON \u0915\u0941\u091e\u094d\u091c\u0940 \u092a\u094d\u0930\u0915\u093e\u0930\u0915\u093e \u0932\u093e\u0917\u093f \u092e\u093e\u0924\u094d\u0930 \u0909\u092a\u0932\u092c\u094d\u0927 \u091b",
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
          edit: "Redis कुञ्जी सम्पादन गर्नुहोस्",
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
        value: "मूल्य",
        errorRate: "त्रुटि दर",
        capacity: "क्षमता",
        topk: "Top K",
        width: "चौडाइ",
        depth: "गहिराइ",
        decay: "क्षय",
        compression: "कम्प्रेसन",
        increment: "वृद्धि",
        item: "वस्तु",
        vectorValues: "भेक्टर मानहरू (अल्पविरामले छुट्याइएको)",
        element: "तत्वको नाम",
      },
      error: {
        streamTimestamp: "टाइमस्ट्याम्प आवश्यक छ, या त Redis ढाँचा वा * को रूपमा",
        key: "कुञ्जी हो, कम्तिमा, एक वर्ण",
        hashKey: "ह्यास तालिका कुञ्जी कम्तिमा एक वर्ण हो",
        score: "क्रमबद्ध सेट स्कोर आवश्यक छ",
        value: "मूल्य आवश्यक छ",
        errorRate: "त्रुटि दर 0 र 1 बीच हुनुपर्छ (उदा. 0.01)",
        capacity: "क्षमता सकारात्मक पूर्णांक हुनुपर्छ",
        topk: "Top K सकारात्मक पूर्णांक हुनुपर्छ",
        width: "चौडाइ सकारात्मक पूर्णांक हुनुपर्छ",
        depth: "गहिराइ सकारात्मक पूर्णांक हुनुपर्छ",
        item: "वस्तु आवश्यक छ"
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
      hybridMode: "हाइब्रिड खोज (FT.HYBRID)",
      vectorField: "भेक्टर फिल्ड",
      vectorValues: "भेक्टर मानहरू",
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
      noSlowQueries: "कुनै ढिलो प्रश्नहरू रेकर्ड गरिएको छैन।",
      confirmSlowLogReset: "के तपाइँ ढिलो लग रिसेट गर्न निश्चित हुनुहुन्छ?",
      slowLogResetDone: "ढिलो लग रिसेट गरियो।",
      totalCommands: "जम्मा",
      expired: "म्याद सकिएको",
      evicted: "निकालिएको",
      clientList: "ग्राहक सूची",
      topKeys: "मेमोरी अनुसार ठूला कुञ्जीहरू",
      killClient: "ग्राहक बन्द गर्नुहोस्",
      clientKilled: "ग्राहक बन्द गरियो",
      confirmKillClient: "के तपाईं यो ग्राहक बन्द गर्न निश्चित हुनुहुन्छ?",
      noKeys: "कुञ्जीहरू छैनन्",
      rss: "RSS",
      peak: "शिखर",
      fragmentation: "फ्र्यागमेन्टेसन",
      hitsAndMisses: "हिट / मिस",
      noClients: "ग्राहकहरू छैनन्",
      slotStats: "क्लस्टर स्लट तथ्याङ्क",
      serverInfo: "सर्भर जानकारी",
      os: "अपरेटिङ सिस्टम",
      port: "नेटवर्क पोर्ट",
      pid: "प्रक्रिया आईडी",
      configFile: "कन्फिगरेसन फाइल",
      uptime: "अपटाइम",
      keyspace: "Redis कुञ्जी स्पेस",
      keys: "Redis कुञ्जीहरू",
      expires: "म्याद सकिन्छ",
      noKeyspace: "कुञ्जीहरू छैनन्",
      persistence: "डाटा स्थिरता",
      rdbLastSave: "RDB अन्तिम बचत",
      rdbStatus: "RDB स्थिति",
      rdbChanges: "पछिल्लो बचत पछि परिवर्तनहरू",
      aofEnabled: "AOF सक्षम गरियो",
      aofSize: "AOF आकार",
      replication: "Redis प्रतिकृति",
      role: "प्रतिकृति भूमिका",
      replicas: "जडान गरिएका प्रतिकृतिहरू",
      masterHost: "प्राथमिक होस्ट",
      linkStatus: "प्रतिकृति लिङ्क स्थिति",
      cpu: "CPU उपयोग",
      cpuSys: "प्रणाली",
      cpuUser: "प्रयोगकर्ता",
      modules: "Redis मोड्युलहरू लोड गरियो",
      noModules: "कुनै Redis मोड्युल लोड गरिएको छैन",
      clusterSlotMap: "Redis क्लस्टर स्लट नक्शा",
      slotRange: "क्लस्टर स्लट दायरा",
      totalSlots: "कुल क्लस्टर स्लटहरू",
      noClusterData: "कुनै Redis क्लस्टर डाटा उपलब्ध छैन।",
    },
    analysis: {
      title: "मेमोरी विश्लेषण",
      runAnalysis: "विश्लेषण चलाउनुहोस्",
      running: "विश्लेषण गर्दै...",
      typeDistribution: "प्रकार वितरण",
      prefixMemory: "उपसर्ग अनुसार मेमोरी",
      topKeysByMemory: "मेमोरी अनुसार शीर्ष कुञ्जी",
      expirationOverview: "कुञ्जी म्याद",
      memoryBreakdown: "मेमोरी विभाजन",
      keysScanned: "स्क्यान गरिएका कुञ्जी",
      totalMemory: "कुल मेमोरी",
      rssMemory: "RSS मेमोरी",
      peakMemory: "शिखर मेमोरी",
      luaMemory: "Lua मेमोरी",
      overheadMemory: "ओभरहेड",
      datasetMemory: "डाटासेट",
      fragmentation: "फ्र्यागमेन्टेसन",
      allocator: "एलोकेटर",
      withTTL: "TTL सहित",
      persistent: "स्थायी",
      avgTTL: "औसत TTL",
      prefix: "उपसर्ग",
      keyCount: "कुञ्जी संख्या",
      memoryUsage: "मेमोरी प्रयोग",
      noPrefix: "(उपसर्ग छैन)",
      topN: "Top N",
      maxScanKeys: "अधिकतम स्क्यान कुञ्जी",
      type: "प्रकार",
      noData: "कुनै डाटा छैन। सुरु गर्न विश्लेषण चलाउनुहोस् मा क्लिक गर्नुहोस्।",
      exportAll: "सबै निर्यात",
      memoryDoctor: "Memory Doctor",
      doctorNoData: "Memory Doctor निदान चलाउन रिफ्रेस गर्नुहोस् मा क्लिक गर्नुहोस्।",
    },
    acl: {
      title: "ACL प्रयोगकर्ताहरू",
      loadUsers: "प्रयोगकर्ताहरू लोड गर्नुहोस्",
      loading: "लोड हुँदैछ...",
      username: "प्रयोगकर्ता नाम",
      status: "स्थिति",
      enabled: "सक्षम गरियो",
      disabled: "असक्षम",
      commands: "आदेशहरू",
      commandsHint: "जस्तै, +@all or +@read -@dangerous",
      keys: "Redis कुञ्जी ढाँचाहरू",
      keysHint: "जस्तै, ~* or ~user:*",
      channels: "Pub/Sub च्यानलहरू",
      channelsHint: "जस्तै, &* or &notifications:*",
      password: "पासवर्ड",
      noPassword: "कुनै पासवर्ड छैन (नोपास)",
      passwordHint: "हालको पासवर्ड राख्न खाली छोड्नुहोस्",
      currentUser: "वर्तमान",
      createUser: "प्रयोगकर्ता सिर्जना गर्नुहोस्",
      editUser: "प्रयोगकर्ता सम्पादन गर्नुहोस्",
      deleteUser: "मेट्नुहोस्",
      confirmDelete: "के तपाइँ ACL प्रयोगकर्ता मेटाउन निश्चित हुनुहुन्छ?",
      userDeleted: "ACL प्रयोगकर्ता मेटाइयो।",
      userSaved: "ACL प्रयोगकर्ता बचत गरियो।",
      cannotDeleteDefault: "पूर्वनिर्धारित प्रयोगकर्ता मेटाउन सकिँदैन।",
      cannotDeleteSelf: "हाल जडान गरिएको प्रयोगकर्तालाई मेटाउन सकिँदैन।",
      noUsers: "ACL लाई Redis 6.0+ आवश्यक छ।",
      groupCommon: "सामान्य",
      groupDataTypes: "डाटा प्रकारहरू",
      groupOperations: "सञ्चालनहरू",
      rules: "नियमहरू",
      rulesHint: "स्पेस-विभाजित टोकनहरू (उदाहरणका लागि on >password +@all ~* &*)",
      defaultUserWarning: "सावधानी: पूर्वनिर्धारित प्रयोगकर्ता परिमार्जन गर्नाले सबै जडानहरू बन्द गर्न सक्छ। यदि यो हुन्छ भने, तपाईंले Redis पुन: सुरु गर्न वा पहुँच पुनर्स्थापना गर्न redis-cli प्रयोग गर्न आवश्यक छ।",
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
        compression: "कम्प्रेसन",
        aiRateLimited: "AI अनुरोध सीमा पुग्यो। पछि फेरि प्रयास गर्नुहोस् वा सेटिङमा आफ्नो Groq API कुञ्जी प्रयोग गर्नुहोस्।",
        aiError: "AI क्वेरी असफल भयो",
        length: "साइज",
        ttl: "TTL",
        ttlTitle: "बाँच्ने समय",
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
      },
      timeseries: {
        chart: "चार्ट",
        info: "जानकारी",
        addPoint: "डाटा बिन्दु थप्नुहोस्",
        from: "देखि (ms वा -)",
        to: "सम्म (ms वा +)",
        aggregation: "एकत्रीकरण",
        timeBucket: "बाल्टी (ms)",
        none: "कुनै पनि छैन",
        dataPoints: "डाटा बिन्दुहरू",
        labels: "लेबलहरू",
        rules: "नियमहरू",
        retention: "धारण",
        timestamp: "टाइमस्ट्याम्प",
        value: "मान",
        retentionHint: "0 = म्याद सकिँदैन, वा मिलिसेकेन्ड",
        duplicatePolicy: "नक्कल नीति",
        labelsHint: "कुञ्जी1 मान1 कुञ्जी2 मान2",
        timestampHint: "'*' स्वचालित रूपमा उत्पन्न हुन्छ, वा मिलिसेकेन्ड टाइमस्ट्याम्प",
        editAllHint: "प्रति पंक्ति एउटा डाटा बिन्दु: टाइमस्ट्याम्प मान (टाइमस्ट्याम्प स्वचालितको लागि * हुन सक्छ)",
        autoSpread: "स्वचालित * फैलावट अन्तराल",
        formula: "सूत्र",
        formulaLinear: "रैखिक",
        formulaRandom: "अनियमित",
        formulaSawtooth: "करौंती दाँत",
        formulaPoints: "बिन्दुहरू",
        formulaAmplitude: "आयाम",
        formulaOffset: "अफसेट",
        generate: "उत्पन्न गर्नुहोस्",
        exportChart: "PNG निर्यात गर्नुहोस्",
        overlay: "ओभरले कुञ्जीहरू",
        overlayHint: "अल्पविरामले छुट्याइएका कुञ्जीहरू",
        mrangeFilter: "लेबल फिल्टर",
        bulkMode: "बल्क जेनरेट",
        mrangeHint: "उदा. sensor=temp"
      },
      probabilistic: {
        info: "जानकारी",
        addItem: "वस्तु थप्नुहोस्",
        checkItem: "वस्तु जाँच गर्नुहोस्",
        item: "वस्तु",
        exists: "अवस्थित छ",
        doesNotExist: "अवस्थित छैन",
        topkList: "शीर्ष वस्तुहरू",
        topkCount: "गणना",
        queryCount: "क्वेरी गणना",
        queryResult: "क्वेरी परिणाम",
        addedSuccessfully: "वस्तु सफलतापूर्वक थपियो",
        deletedSuccessfully: "वस्तु सफलतापूर्वक मेटियो",
        quantile: "क्वान्टाइल",
        quantileResult: "परिणाम",
        noItems: "प्रदर्शन गर्न कुनै वस्तु छैन",
        resetConfirm: "यो T-Digest मा सबै डाटा रिसेट गर्ने?"
      },
      vectorset: {
        info: "जानकारी",
        elements: "तत्वहरू",
        similarity: "समानता खोज",
        searchByElement: "तत्वद्वारा खोज्नुहोस्",
        searchByVector: "भेक्टरद्वारा खोज्नुहोस्",
        vectorValues: "भेक्टर मानहरू",
        element: "तत्व",
        score: "स्कोर",
        count: "गणना",
        addElement: "तत्व थप्नुहोस्",
        attributes: "विशेषताहरू",
        noAttributes: "कुनै विशेषता छैन",
        dimensions: "आयामहरू",
        removeConfirm: "यो तत्वलाई VectorSet बाट हटाउने?",
        noElements: "कुनै तत्व छैन",
        filter: "फिल्टर",
        searchComplete: "खोज पूरा भयो",
      }
    },
    treeControls: {
      settings: "रूख सेटिङहरू",
      expandAll: "सबै विस्तार गर्नुहोस्",
      collapseAll: "सबै संक्षिप्त गर्नुहोस्",
      level: "स्तर",
      search: {
        search: "कुञ्जीहरूमा खोज्नुहोस्",
        clear: "खाली सेट गर्न हालको खोज खाली गर्नुहोस्",
        placeholderClient: "ग्राहक पक्ष खोज्नुहोस्",
        placeholderServer: "सर्भर साइड खोज्नुहोस्",
        info: (opts) => "क्लाइन्ट साइड खोजको अर्थ, यो खोज इनपुटमा पाठसँग मेल खान्छ। सर्भर साइड खोजको अर्थ, यो कुञ्जी ढाँचामा *{search-text}* को रूपमा खोजी जस्तै हो। ठूला खोज सेटहरूको लागि, यो सर्भर साइड खोजी प्रयोग गर्न राम्रो छ। साना खोज सेटहरूको लागि, ग्राहक पक्ष खोज मोड प्रयोग गर्न राम्रो छ।" + ` यदि कुञ्जी गणना सकियो ${opts?.maxLightKeysCount ?? 110000}, तपाईले सर्भर साइडमा मात्र खोज्न सक्नुहुन्छ।`,
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
    years: "वर्ष",
    months: "महिना",
    days: "दिनहरू",
    year: "वर्ष",
    month: "महिना",
    day: "दिन",
    second: "सेकेन्ड",
    seconds: "सेकेन्ड",
    minute: "मिनेट",
    minutes: "मिनेट",
    hour: "घण्टा",
    hours: "घण्टा"
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
    bloom: "Bloom फिल्टर",
    cuckoo: "Cuckoo फिल्टर",
    topk: "Top-K",
    cms: "Count-Min Sketch",
    tdigest: "T-Digest",
    vectorset: "VectorSet",
  },
  promo: {
    title: "AI नेटवर्क सहायक",
    description: "network.corifeus.com मा हाम्रो निःशुल्क AI नेटवर्क सहायक हेर्नुहोस् — डोमेन, IP, DNS रेकर्ड, SSL प्रमाणपत्र, इमेल सुरक्षा र नेटवर्क पूर्वाधार विश्लेषण गर्नुहोस्। तुरुन्त र विस्तृत नतिजाका लागि AI द्वारा सञ्चालित।",
    disclaimer: "यो प्रचार सामग्री डेमो साइटमा मात्र देखाइन्छ र Docker, Electron वा web app deployment मा देखिने छैन।",
    toastMessage: "network.corifeus.com मा हाम्रो निःशुल्क AI नेटवर्क सहायक प्रयोग गर्नुहोस् — डोमेन, DNS, SSL र अझ धेरै विश्लेषण गर्नुहोस्!",
    visit: "network.corifeus.com भ्रमण गर्नुहोस्",
  }
};
module.exports = strings;
