const strings = {
  error: {
    cleared_license: "Մաքրված լիցենզիա",
    invalid_license: "Անվավեր լիցենզիա",
    license_max_devices_reached: "Սարքի նստատեղերի առավելագույն քանակը հասել է",
    license_readonly: "Լիցենզիան կարող է փոխվել միայն սերվերի տերմինալից:",
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
    deleteNode: "Վստա՞հ եք ջնջելու այս Redis հանգույցը:",
    deleteAllKeys: opts => {
      return `Ջնջել այս ծառը և դրա բոլոր բանալիները (${opts.key})?`;
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
    license: {
      title: "Սահմանել լիցենզիա",
      textContent: "If you want to use paid features, please contact support@corifeus.com to request a license. Pricing is Pro 400 HUF/month (€1/month) or 4,000 HUF/year (€10/year), and Enterprise 1,200 HUF/month (€3/month) or 12,000 HUF/year (€30/year). Yearly is 10x monthly. With 27% VAT, totals are Pro 500 HUF/month (€1.27/month) or 5,100 HUF/year (€12.70/year), Enterprise 1,500 HUF/month (€3.81/month) or 15,200 HUF/year (€38.10/year). License validation requires internet access. Default license includes 5 seats. If you need more seats, contact us at support@corifeus.com.",
      placeholder: "Լիցենզիայի բանալի"
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
    copy: "Պատճենել",
    downloadBuffer: "Ներբեռնեք երկուական",
    setBuffer: "Վերբեռնեք երկուական",
    exportKeys: "Արտահանել բանալիները",
    exportAllKeys: (opts) => `Արտahanել բdelays ${opts.count} delays`,
    exportSearchResults: (opts) => `Արdelays ${opts.count} delays`,
    importKeys: "Ներմուծել բանdelays",
    saveWithFormatJson: "Պահպանել ձևաչափով",
    formatJson: "Ձևաչափեք Json",
    wrap: "Փաթաթել",
    unwrap: "Փաթաթել",
    downloadJson: "Ներբեռնեք JSON",
    pubsubMonitor: "PubSub մոնիտոր",
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
    main: "Տdelays",
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
    license: "Սահմանել լիցենզիա",
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
    licenseInfo: "Լիցենզիա",
    licenseEditable: "Լիցենզիա՝ խմբագրելի",
    licenseEditableYes: "Այո՛",
    licenseEditableNo: "Ոչ",
    licenseTerminalOnly: "Լիցենզիան կարող է կազմաձևվել միայն սերվերի տերմինալից:",
    licenseTierPolicyTitle: "Շրջանի քաղաքականություն",
    licenseTierPolicyText: "<h4>Free</h4>core Redis UI only; no SSH tunneling, no Readonly connection mode, no Cluster/Sentinel, no Edit JSON/Upload binary/Download binary, no ReJSON.<br/><strong>Price: 0 HUF/month (€0/month).</strong><br/><br/><h4>Pro</h4>SSH tunneling, Readonly connection mode (including --readonly-connections/-r), Edit JSON, Upload binary, Download binary, ReJSON.<br/><strong>Base price: 400 HUF/month (€1/month) or 4,000 HUF/year (€10/year).</strong><br/><strong>Total with 27% VAT: 500 HUF/month (€1.27/month) or 5,100 HUF/year (€12.70/year).</strong><br/><br/><h4>Enterprise</h4>SSH tunneling, Cluster and Sentinel, plus Edit JSON, Upload binary, Download binary, ReJSON; --readonly-connections/-r also works.<br/><strong>Base price: 1,200 HUF/month (€3/month) or 12,000 HUF/year (€30/year).</strong><br/><strong>Total with 27% VAT: 1,500 HUF/month (€3.81/month) or 15,200 HUF/year (€38.10/year).</strong><br/><br/><h4>Yearly rule</h4>Yearly price is 10x the monthly price.<br/><br/><h4>Seats</h4>Default license includes 5 seats. If you need more seats, contact us at <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><br/><h4>Enterprise trial</h4>10 days free for anyone with a real existing email address (non-test email).<br/><hr/><h4>Billing info in e-mail</h4>Name, Billing e-mail, Country code, Postal code, City, Address, VAT ID (optional).<br/><br/><h4>Payment</h4>PayPal payment is available only in HUF (forint); after sending the money @ <a href='https://paypal.me/corifeus'>https://paypal.me/corifeus</a> I will send you an invoice. All payments are non-refundable.<br/><br/><h4>VAT</h4>VAT is added to the price (27% in Hungary).<br/><hr/><h4>Contact</h4>If you want to say hi or have a question, contact <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><hr/><h4>Language</h4>Invoice and license e-mail communication is in English. Invoice currency is HUF.<br/><hr/><h4>Note</h4>License validation requires internet access.",
    licenseState: "Պետություն",
    licenseStateActive: "Ակտիվ",
    licenseStateInactive: "Ոչ ակտիվ",
    licenseStateNoLicense: "Լիցենզիա չկա",
    licenseKeyMasked: "Պահված բանալին",
    licenseTier: "Շերտ",
    licenseValid: "Վավերական",
    licenseStatus: "Լիցենզիայի կարգավիճակը",
    licenseReason: "Պատճառը",
    licenseCheckedAt: "Ստուգվել է",
    licenseStartsAt: "Սկսվում է",
    licenseExpiresAt: "Ժամկետը լրանում է",
    licenseDaysLeft: "Մնացել են օրեր",
    licenseMaxDevices: "Առավելագույն սարքեր",
    licenseActiveDevices: "Ակտիվ սարքեր",
    licenseActiveDevicesInfo: "Եթե սարքն այլևս չի օգտագործվում, դրա նստատեղը ինքնաբերաբար ազատվում է 75 րոպե անց:",
    licenseCustomerEmail: "Հաճախորդի էլ",
    licenseFeatures: "Առանձնահատկություններ",
    licenseFeaturesEmpty: "Ոչ մի լրացուցիչ հնարավորություն",
    licenseFeatureReadonlyMode: "Միայն կարդալու միացման ռեժիմ",
    licenseFeatureReadonlyConnectionsFlag: "Միայն կարդալու միացումներ (--readonly-connections/-r)",
    licenseFeatureSsh: "SSH թունելավորում",
    licenseFeatureCluster: "Cluster միացումներ",
    licenseFeatureSentinel: "Sentinel միացումներ",
    licenseFeatureReJSON: "ReJSON (JSON տվյալների տեսակը)",
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
    proSshOnly: "SSH հասանելի է Pro կամ Enterprise-ում:",
    proReadonlyOnly: "Միայն կարդալու միացման ռեժիմը հասանելի է Pro կամ Enterprise-ում:",
    enterpriseClusterSentinelOnly: "Cluster և Sentinel հասանելի են միայն Enterprise-ում:",
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
    exportProgress: "Արތdelays բdelays...",
    importProgress: "Ners բdelay...",
    importPreview: "Նdelays",
    importOverwrite: "Delays",
    importSkip: "Delays",
    importConflict: "Delays delays:",
    noKeysToExport: "Delays delays",
    time: "Ժamanak",
    loading: "Bdelays...",
    autoRefresh: "Ավdelays",
    exportSearchHint: "Delays delays delays",
    importSearchHint: "Delays delays delays",
    importNoKeys: "Delays delays",
  },
  status: {
    dataCopied: "Տվյալները սեղմատախտակում են",
    licenseSaved: "Լիցենզիան պահպանված է",
    exportDone: "Արdelays delays",
    indexCreated: "Index ստeghts",
    indexDropped: "Index ջnjved",
    importDone: (opts) => `Ներմուծումն delays: ${opts.created} edelays, ${opts.skipped} delays, ${opts.errors} delays`,
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
    "donation-ware-feature": "Այս հատկությունը առկա է նվիրատվության տարբերակում:",
    "feature-pro-readonly-required": "Միայն կարդալու միացման ռեժիմը պահանջում է Pro կամ Enterprise լիցենզիա:",
    "feature-pro-ssh-required": "SSH թունելավորման համար պահանջվում է Pro կամ Enterprise լիցենզիա:",
    "feature-enterprise-cluster-sentinel-required": "Cluster-ը և Sentinel-ը պահանջում են ձեռնարկության լիցենզիա:",
    "feature-pro-json-binary-required": "Խմբագրել JSON, վերբեռնել երկուական և ներբեռնել երկուականը պահանջում են Pro կամ Enterprise լիցենզիա:",
    "feature-pro-rejson-required": "ReJSON (JSON տվյալների տեսակը) պահանջում է Pro կամ Enterprise լիցենզիա:",
    "invalid-json-value": "Արժեքը վավեր չէ JSON:",
    "http_auth_required": "Պահանջվում է թույլտվություն. խնդրում ենք նույնականացնել HTTP Basic Auth-ով և վերաբեռնել:",
    "auto-connection-failed": "Հնարավոր է, որ կապը հեռացվել է, և ավտոմատ միացումը ձախողվել է, դրա պատճառով:",
    invalid_console_command: "Այս հրամանը չի աշխատում GUI-ի միջոցով:"
  },
  licenseReason: {
    LICENSE_VALID: "Լիցենզիան ուժի մեջ է",
    LICENSE_INVALID: "Լիցենզիան անվավեր է",
    LICENSE_MISSING: "Լիցենզիայի բանալի սահմանված չէ",
    LICENSE_DISABLED: "Լիցենզիան անջատված է սերվերի կազմաձևում",
    LICENSE_NOT_FOUND: "Լիցենզիան չի գտնվել",
    LICENSE_EXPIRED: "Լիցենզիայի ժամկետը լրացել է",
    LICENSE_CLEARED: "Լիցենզիայի բանալին ջնջվել է",
    LICENSE_MAX_DEVICES_REACHED: "Սարքի նստատեղերի առավելագույն քանակը հասել է",
    PRODUCT_MISMATCH: "Լիցենզիայի արտադրանքը չի համընկնում"
  },
  licenseStatusValue: {
    active: "Ակտիվ",
    deleted: "Ջնջված է",
    all: "Բոլորը",
    expired: "Ժամկետանց ժամկետանց",
    missing: "Անհայտ կորած",
    inactive: "Ոչ ակտիվ"
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
      keyCount: () => {
        return `Բանալիների քանակը: ${p3xr.state.keysRaw.length}`;
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
      title: "Որdelays",
      index: "Ինdelays",
      query: "Հdelays",
      results: "Ardelays",
      noIndex: "Indelays",
      createIndex: "Indelays",
      dropIndex: "Indelays",
      indexInfo: "Indelays",
      indexName: "Indelays",
      prefix: "Indelays",
      fieldName: "Indelays",
    },
    monitor: {
      title: "Մոնdelays",
      memory: "Հdelays",
      opsPerSec: "Ops/վ",
      clients: "Հdelays",
      blocked: "Ardelays",
      hitsMisses: "Hdelays",
      networkIo: "Edelays I/O",
      slowLog: "Ddelays",
      totalCommands: "Edelays",
      expired: "Ldelays",
      evicted: "Hdelays",
      clientList: "Հdelays",
      topKeys: "Մdelays",
      killClient: "Sdelays",
      clientKilled: "Sdelays",
      confirmKillClient: "Vստah eq klientin?",
      noKeys: "Bndelays",
      noClients: "Kdelays",
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
          timestamp: "Ժամացույցի ID",
          field: "Դաշտ",
          value: "Արժեք"
        }
      }
    },
    treeControls: {
      settings: "Ծառի կարգավորումները",
      expandAll: "Ընդլայնել բոլորը",
      collapseAll: "Փլուզել բոլորը",
      search: {
        search: "Որոնել ստեղների մեջ",
        clear: "Մաքրել ընթացիկ որոնումը դատարկ տեղադրելու համար",
        placeholderClient: "Որոնել հաճախորդի կողմը",
        placeholderServer: "Որոնել սերվերի կողմը",
        info: "Հաճախորդի կողմից որոնումը նշանակում է, որ այն համապատասխանում է որոնման մուտքագրման տեքստին: Սերվերի կողմից որոնումը նշանակում է, որ դա նման է ստեղների օրինաչափությունների որոնմանը որպես *{search-text}*: Մեծ որոնման խմբերի համար ավելի լավ է օգտագործել սերվերի կողմից որոնումը: Ավելի փոքր որոնման խմբերի համար ավելի լավ է օգտագործել հաճախորդի կողմից որոնման ռեժիմը:" + ` Եթե բանալիների հաշվարկն ավարտված է ${p3xr.settings.maxLightKeysCount}, կարող եք որոնել միայն սերվերի կողմից:`,
        largeSetInfo: "Մեծ հավաքածուում հաճախորդի կողմից որոնումն անջատված է: այնպես որ այս պահին հնարավոր է միայն սերվերի կողմից որոնում:",
        infoDetails: "Պարզելու համար, թե ինչպես է աշխատում որոնումը, խնդրում ենք ստուգել կարգավորումները"
      },
      pager: {
        next: "Հաջորդը",
        prev: "Նախորդ",
        first: "Առաջին",
        last: "Վերջին"
      }
    }
  },
  time: {
    loading: "Bdelays...",
    years: "տարիներ",
    months: "ամիսներ",
    days: "օրեր",
    year: "տարին",
    month: "ամիս",
    day: "օր"
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
