const strings = {
  error: {
    cleared_license: "رخصة مسح",
    invalid_license: "ترخيص غير صالح",
    license_max_devices_reached: "تم الوصول إلى الحد الأقصى لعدد مقاعد الجهاز",
    license_readonly: "لا يمكن تغيير الترخيص إلا من محطة الخادم.",
    server_error: "خطأ في الخادم، يرجى المحاولة مرة أخرى"
  },
  title: {
    donate: "تبرع",
    jsonRecursive: "توسيع جميع الأوراق",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "يمكنك اختيار اتصال Redis للاتصال من القائمة السفلية اليسرى.",
    statistics: "الإحصائيات",
    error: "خطأ",
    connectingRedis: "الاتصال بـ Redis ...",
    socketioConnectError: "خطأ Socket.IO",
    db: "DB",
    server: "الخادم",
    clients: "العملاء",
    memory: "الذاكرة",
    persistence: "المثابرة",
    stats: "الإحصائيات",
    replication: "النسخ المتماثل",
    cpu: "CPU",
    cluster: "Cluster",
    modules: "الوحدات",
    errorstats: "إحصائيات الأخطاء",
    commandstats: "إحصائيات الأوامر",
    latencystats: "إحصائيات زمن الاستجابة",
    keysizes: "أحجام المفاتيح",
    threads: "الخيوط",
  },
  confirm: {
    dropIndex: "هل أنت متأكد من حذف هذا الفهرس؟",
    uploadBuffer: "هل أنت متأكد من تحميل هذه البيانات الثنائية؟",
    uploadBufferDone: "يتم تحميل البيانات الثنائية",
    uploadBufferDoneAndSave: "يتم تحميل البيانات الثنائية وحفظها على الخادم",
    title: "تأكيد",
    alert: "تنبيه",
    info: "معلومات",
    deleteListItem: "هل أنت متأكد من حذف عنصر القائمة هذا؟",
    deleteHashKey: "هل أنت متأكد من حذف عنصر مفتاح التجزئة هذا؟",
    deleteStreamTimestamp: "هل أنت متأكد من حذف هذا الطابع الزمني للبث؟",
    deleteSetMember: "هل أنت متأكد من حذف هذا العضو في المجموعة؟",
    deleteZSetMember: "هل أنت متأكد من حذف عضو المجموعة الذي تم فرزه؟",
    deleteConnection: "تأكيد",
    deleteConnectionText: "هل أنت متأكد من حذف اتصال Redis هذا؟",
    deleteNode: "هل أنت متأكد من حذف عقدة Redis هذه؟",
    deleteAllKeys: opts => {
      return `احذف هذه الشجرة وكل مفاتيحها (${opts.key})؟`;
    },
    socketioConnectError: "لا يمكن لـ Socket.IO الاتصال بالخادم، يمكنك إعادة التحميل ومحاولة حل خطأ الاتصال بنفسك، ولا يعرف العميل كيفية حل المشكلة بنفسه.",
    socketioAuthRequired: "مطلوب إذن Socket.IO. يرجى المصادقة باستخدام HTTP Basic Auth (اسم المستخدم/كلمة المرور) وإعادة التحميل.",
    deleteKey: "هل أنت متأكد من حذف هذا المفتاح؟",
    rename: {
      title: "هل أنت متأكد من إعادة تسمية هذا المفتاح؟",
      textContent: "يؤدي هذا الإجراء إلى إعادة تسمية المفتاح بشكل دائم.",
      placeholder: "مفتاح Redis (مطلوب)"
    },
    ttl: {
      title: "هل أنت متأكد أنك تريد تغيير TTL لهذا المفتاح؟",
      textContent: "يؤدي تغيير TTL إلى تحديث مدة بقاء هذا المفتاح. اتركه فارغًا للاحتفاظ بهذا المفتاح إلى الأبد.",
      placeholder: "مفتاح Redis TTL (عدد صحيح أو فارغ)",
      placeholderPlaceholder: "فارغة تعني أنها ستستمر إلى الأبد؛ وإلا أدخل عددًا صحيحًا.",
      convertTextToTime: "تحويل النص إلى وقت",
      convertTextToTimePlaceholder: "على سبيل المثال. 1d سيكون 86400"
    },
    license: {
      title: "تعيين الترخيص",
      textContent: "إذا كنت ترغب في استخدام الميزات المدفوعة، يرجى الاتصال بـ support@corifeus.com لطلب الترخيص. السعر هو Pro 400 HUF/شهر (1 يورو/شهر) أو 4000 HUF/سنة (10 يورو/سنة)، وEnterprise 1200 HUF/شهر (3 يورو/شهر) أو 12000 HUF/سنة (30 يورو/سنة). سنويا هو 10x شهريا. مع 27% VAT، يكون الإجمالي Pro 500 HUF/الشهر (1.27 يورو/الشهر) أو 5,100 HUF/السنة (12.70 يورو/السنة)، Enterprise 1,500 HUF/الشهر (3.81 يورو/الشهر) أو 15,200 HUF/سنة (38.10 يورو/سنة). يتطلب التحقق من الترخيص الوصول إلى الإنترنت. يتضمن الترخيص الافتراضي 5 مقاعد. إذا كنت بحاجة إلى المزيد من المقاعد، اتصل بنا على support@corifeus.com.",
      placeholder: "مفتاح الترخيص"
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
    copy: "نسخ",
    downloadBuffer: "تحميل ثنائي",
    setBuffer: "تحميل ثنائي",
    exportKeys: "تصدير المفاتيح",
    exportAllKeys: (opts) => `تصدير جميع المفاتيح (${opts.count})`,
    exportSearchResults: (opts) => `تصدير ${opts.count} نتيجة`,
    importKeys: "استيراد المفاتيح",
    saveWithFormatJson: "حفظ مع التنسيق",
    formatJson: "تنسيق جيسون",
    wrap: "التفاف",
    unwrap: "بسط",
    downloadJson: "تحميل JSON",
    pubsubMonitor: "شاشة PubSub",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "اللغة",
    ok: "حسنًا",
    addKey: "أضف إلى هذا المفتاح",
    addKeyRoot: "أضف مفتاح الجذر",
    reloadKey: "إعادة تحميل المفتاح",
    reload: "إعادة تحميل",
    close: "إغلاق",
    commands: "الأوامر",
    view: "عرض",
    statistics: "الإحصائيات",
    refresh: "تحديث",
    pause: "إيقاف مؤقت",
    resume: "استئناف",
    clear: "واضح",
    rename: "إعادة تسمية",
    main: "قاعدة البيانات",
    cancel: "إلغاء",
    theme: "الموضوع",
    github: "GitHub",
    githubRepo: "مستودع",
    githubRelease: "الإصدارات",
    githubChangelog: "سجل التغيير",
    info: "Info",
    settings: "الإعدادات",
    connect: "الاتصال",
    disconnect: "قطع الاتصال",
    overview: "نظرة عامة",
    console: "وحدة التحكم",
    noConnections: "لا يوجد اتصالات، قم بإضافة اتصال في قائمة الإعدادات.",
    noConnectionsInSettings: "لا توجد اتصالات، يمكنك إضافة اتصال جديد أعلاه.",
    connectionAdd: "اتصال جديد",
    addGroup: "إضافة مجموعة",
    extend: "تمديد",
    collapse: "طي",
    add: "أضف",
    edit: "تحرير",
    save: "حفظ",
    ttl: "قم بتعيين TTL",
    license: "تعيين الترخيص",
    delete: "حذف",
    remove: "إزالة",
    sure: "بالتأكيد",
    testConnection: "اتصال الاختبار",
    getKey: "جارٍ تحميل مفتاح Redis والبيانات المرتبطة به ...",
    jsonViewShow: "عرض JSON",
    jsonViewEditor: "تحرير JSON",
    quickConsole: "وحدة التحكم السريعة",
  },
  label: {
    id: {
      nodeId: "معرف العقدة",
      id: "معرف الاتصال",
      info: "إذا كنت لا ترغب في تغيير خصائص: sshPassword، وsshPrivateKey، وpassword، وtlsCrt، وtlsKey، وtlsCa، فيرجى إدخال معرف الاتصال في تلك الخصائص للحفاظ على قيم الخاصية سليمة. إذا كنت تريد نفس المنطق في كلمة مرور العقدة، فأدخل معرف العقدة في كلمة مرور العقدة."
    },
    secureFeature: "إذا رأيت قيمة تبدأ بـ P3X بنفس الشكل، فهذه ميزة آمنة. لتغيير الإعدادات، ما عليك سوى استبدال هذه الإعدادات بفارغة أو أي شيء آخر وسيتم حفظها. إذا لم تقم بتغيير الإعدادات، فسيتم الاحتفاظ بالإعدادات كما هي على الخادم.",
    aiTranslating: "جاري الترجمة...",
    aiSettings: "إعدادات AI",
    aiGroqApiKey: "مفتاح API Groq",
    aiGroqApiKeyInfo: "اختياري. مفتاح API Groq خاص بك لأداء أفضل. احصل على مفتاح مجاني من",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "تم حفظ مفتاح API AI",
    aiGroqApiKeyNotSet: "غير محدد (الافتراضي للخادم)",
    ssh: {
      on: "SSH على",
      off: "إيقاف تشغيل SSH",
      sshHost: "المضيف SSH",
      sshPort: "منفذ SSH",
      sshUsername: "اسم المستخدم SSH",
      sshPassword: "كلمة المرور SSH",
      sshPrivateKey: "SSH المفتاح الخاص"
    },
    isBuffer: opts => `[object ArrayBuffer] يعني أن القيمة عبارة عن بيانات ثنائية أو أن القيمة أكبر منها ${opts.maxValueAsBuffer}`,
    streamValue: `حقل الدفق والقيمة عبارة عن خط واحد. على سبيل المثال: الحقل 1 القيمة 1 "الحقل 2" "القيمة 2"`,
    streamTimestampId: `"*" يعني إنشاء تلقائي أو المواصفات كـ <millisecondsTime>-<sequenceNumber>`,
    unableToLoadKey: ({
      key
    }) => {
      return `غير قادر على تحميل هذا المفتاح: ${key}. ممكن، تم حذف المفتاح. الخطأ الدقيق موجود في وحدة التحكم.`;
    },
    bigJson: "يزيد حجم كائن JSON هذا عن 10 كيلو بايت، لذا تأكد من أنك تعرف ما تفعله، لأن بعض الوظائف قد تكون بطيئة في العرض.",
    addNode: "أضف عقدة",
    validateJson: "التحقق من صحة JSON",
    reducedFunction: `انخفاض الوظائف`,
    tooManyKeys: opts => {
      return `للحصول على الحد الأقصى الكامل للوظائف المسموح بها، إجمالي المفاتيح هو ${opts.maxLightKeysCount} العد. تحتوي قاعدة البيانات هذه على المفاتيح المسموح بها إجمالاً ${opts.count}. تم تعطيل فرز المفاتيح ومعلومات الشجرة الفاخرة الإضافية. يتم البحث فقط على الخادم بدلاً من بحث العميل.`;
    },
    redisCommandNotFound: "لم يتم العثور على تطابق أمر Redis ...",
    treeKeyStore: `يتم تنفيذ الفرز (المقارنة الطبيعية) على العميل المعروف أيضًا باسم المتصفح، مما يعني أنه يفرض عقوبة على المجموعات الكبيرة الكبيرة، مثل أكثر من 10 آلاف مفتاح، وقد يضيف القليل من الوقت لعرض الصفحة. لا يوجد فرز للمفاتيح في Redis، فقط هكذا.`,
    socketIoTimeout: options => {
      return `انتهت مهلة Socket.IO لهذا الطلب (بحد أقصى ${options.timeout / 1000} ثواني)...`;
    },
    resizerInfo: options => {
      return `الحد الأدنى لعرض اللوحة اليسرى أو اليمنى هو ${options.width}بكسل`;
    },
    jsonViewNotParsable: "هذه القيمة غير قابلة للتحليل JSON  ",
    ttlTitle: "اضبط TTL في ثوانٍ",
    passwordSecure: "قد تكون كلمة المرور فارغة، ولكنها ستظهر أحرفًا، وهذه ميزة أمنية.",
    tlsWithoutCert: "تمكين TLS بدون شهادة إضافية",
    tlsRejectUnauthorized: "رفض الشهادة غير المصرح بها",
    tlsSecure: "إذا رأيت تكوين TLS يبدأ بـ P3X أو تبدو جميع إعدادات TLS متشابهة، فهذه ميزة آمنة. لتغيير الإعدادات، ما عليك سوى استبدال هذه الإعدادات بفارغة أو أي شيء آخر وسيتم حفظها. إذا لم تقم بتغيير إعدادات TLS، فسيتم الاحتفاظ بالإعدادات كما هي على الخادم.",
    treeSeparatorEmpty: "إذا كان فاصل الشجرة فارغًا، فلن تحتوي الشجرة على عقد متداخلة، بل مجرد قائمة خالصة",
    treeSeparatorEmptyNote: "لا توجد عقد متداخلة، مجرد قائمة نقية",
    welcomeConsole: "مرحبًا بك في وحدة التحكم Redis",
    welcomeConsoleInfo: "تم تمكين سجل المؤشر لأعلى أو لأسفل",
    redisListIndexInfo: "فارغ للإلحاق، -1 للإلحاق به أو حفظه في الموضع الموضح.",
    console: "وحدة التحكم",
    connectiondAdd: "إضافة اتصال",
    connectiondEdit: "تحرير الاتصال",
    connectiondView: "عرض الاتصال",
    connections: "اتصالات",
    licenseInfo: "الترخيص",
    licenseEditable: "الترخيص قابل للتحرير",
    licenseEditableYes: "نعم",
    licenseEditableNo: "لا",
    licenseTerminalOnly: "لا يمكن تكوين الترخيص إلا من محطة الخادم.",
    licenseTierPolicyTitle: "سياسة الطبقة",
    licenseTierPolicyText: "<h4>Free</h4>core Redis واجهة المستخدم فقط؛ لا يوجد نفق SSH، لا يوجد وضع اتصال للقراءة فقط، لا يوجد Cluster/Sentinel، لا يوجد تحرير JSON/تحميل ثنائي/تنزيل ثنائي، لا ReJSON.<br/><strong>السعر: 0 HUF/شهر (0 يورو/شهر).</strong><br/><br/><h4>Pro</h4>SSH النفق، وضع الاتصال للقراءة فقط (بما في ذلك --readonly-connections/-r)، تحرير JSON، تحميل ثنائي، تنزيل ثنائي، ReJSON.<br/><strong> السعر الأساسي: 400 HUF/شهر (1 يورو/شهر) أو 4000 HUF/سنة (10 يورو في السنة).</strong><br/><strong>الإجمالي بنسبة 27% VAT: 500 HUF/شهر (1.27 يورو/شهر) أو 5,100 HUF/السنة (12.70 يورو/السنة).</strong><br/><br/><h4>Enterprise</h4>SSH حفر الأنفاق، Cluster وSentinel، بالإضافة إلى تحرير JSON، تحميل ثنائي، تنزيل ثنائي، ReJSON؛ --readonly-connections/-r يعمل أيضًا.<br/><strong> السعر الأساسي: 1200 HUF/الشهر (3 يورو/الشهر) أو 12000 HUF/السنة (30 يورو في السنة).</strong><br/><strong>الإجمالي بنسبة 27% VAT: 1,500 HUF/شهر (3.81 يورو/شهر) أو 15,200 HUF/سنة (38.10 يورو/سنة).</strong><br/><br/><h4>القاعدة السنوية</h4>السعر السنوي هو 10 أضعاف الشهري السعر.<br/><br/><h4>Seats</h4> الترخيص الافتراضي يتضمن 5 مقاعد. إذا كنت بحاجة إلى المزيد من المقاعد، فاتصل بنا على <a href='mailto:mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><br/><h4>الإصدار التجريبي </h4> 10 أيام مجانًا أي شخص لديه عنوان بريد إلكتروني حقيقي (بريد إلكتروني غير اختباري).<br/><hr/><h4> معلومات الفواتير في البريد الإلكتروني</h4>الاسم، البريد الإلكتروني للفوترة، رمز البلد، الرمز البريدي، المدينة، العنوان، معرف VAT (اختياري).<br/><br/><h4>Payment</h4>PayPal متاح فقط في HUF (فورنت)؛ بعد إرسال الأموال @ <a href='https://paypal.me/corifeus'>https://paypal.me/corifeus</a> سأرسل لك فاتورة. كافة المدفوعات غير قابلة للاسترداد. المجر).<br/><hr/><h4>Contact</h4>إذا كنت تريد أن تقول مرحبًا أو لد��ك سؤال، فاتصل <a href='mailto:mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><hr/><h4>Language</h4> يتم التواصل عبر البريد الإلكتروني الخاص بالفاتورة والترخيص باللغة الإنجليزية. عملة الفاتورة هي HUF.<br/><hr/><h4>Note</h4> يتطلب التحقق من صحة الترخيص الوصول إلى الإنترنت.",
    licenseState: "الدولة",
    licenseStateActive: "نشط",
    licenseStateInactive: "غير نشط",
    licenseStateNoLicense: "لا يوجد ترخيص",
    licenseKeyMasked: "المفتاح المحفوظ",
    licenseTier: "الطبقة",
    licenseValid: "صالح",
    licenseStatus: "حالة الترخيص",
    licenseReason: "السبب",
    licenseCheckedAt: "تم التحقق في",
    licenseStartsAt: "يبدأ في",
    licenseExpiresAt: "تنتهي عند",
    licenseDaysLeft: "الأيام المتبقية",
    licenseMaxDevices: "أجهزة ماكس",
    licenseActiveDevices: "الأجهزة النشطة",
    licenseActiveDevicesInfo: "إذا لم يعد الجهاز مستخدمًا، فسيتم تحرير مقعده تلقائيًا بعد 75 دقيقة.",
    licenseCustomerEmail: "البريد الإلكتروني للعميل",
    licenseFeatures: "الميزات",
    licenseFeaturesEmpty: "لا توجد ميزات إضافية",
    licenseFeatureReadonlyMode: "وضع الاتصال للقراءة فقط",
    licenseFeatureReadonlyConnectionsFlag: "اتصالات للقراءة فقط (--readonly-connections/-r)",
    licenseFeatureSsh: "SSH نفق",
    licenseFeatureCluster: "اتصالات Cluster",
    licenseFeatureSentinel: "اتصالات Sentinel",
    licenseFeatureReJSON: "ReJSON (نوع البيانات JSON)",
    keysSort: {
      on: "تشغيل فرز المفاتيح",
      off: "فرز المفاتيح"
    },
    cluster: {
      on: "Cluster على",
      off: "إيقاف تشغيل Cluster"
    },
    sentinel: {
      on: "Sentinel على",
      off: "إيقاف تشغيل Sentinel",
      name: "اسم Sentinel"
    },
    readonly: {
      on: "تشغيل للقراءة فقط",
      off: "إيقاف للقراءة فقط"
    },
    proSshOnly: "SSH متاح في Pro أو Enterprise.",
    proReadonlyOnly: "يتوفر وضع الاتصال للقراءة فقط في Pro أو Enterprise.",
    enterpriseClusterSentinelOnly: "يتوفر Cluster وSentinel في المؤسسات فقط.",
    theme: {
      light: "ضوء",
      dark: "مؤسسة مظلمة",
      darkNeu: "الظلام",
      darkoBluo: "داركو بلو",
      enterprise: "المؤسسة",
      redis: "Redis",
      matrix: "مصفوفة"
    },
    connected: opts => {
      return `متصل: ${opts.name}`;
    },
    tree: "شجرة",
    askAuth: "اطلب الترخيص",
    keyboardShortcuts: "Keyboard Shortcuts",
    about: "About",
    supportedLanguages: "Supported Languages",
    version: "Version",
    redisVersion: "Redis Version",
    modules: "الوحدات",
    shortcutRefresh: "Refresh",
    shortcutSearch: "Focus Search",
    shortcutNewKey: "New Key",
    shortcutDisconnect: "قطع الاتصال",
    themeAuto: "Auto (system)",
    shortcutCommandPalette: "Command Palette",
    commandPalette: "Command Palette",
    noResults: "No results",
    redisCommandsReference: "أوامر Redis",
    ungrouped: "بدون مجموعة",
    grouped: "Grouped",
    connectFirst: "اتصل بخادم Redis أولاً",
    searchLanguage: "بحث عن لغة...",
    exportProgress: "جارٍ تصدير المفاتيح...",
    importProgress: "جارٍ استيراد المفاتيح...",
    importPreview: "معاينة",
    importOverwrite: "الكتابة فوق",
    importSkip: "تخطي",
    importConflict: "إذا كان المفتاح موجودًا بالفعل:",
    noKeysToExport: "لا توجد مفاتيح للتصدير",
    time: "الوقت",
    loading: "جارٍ التحميل...",
    autoRefresh: "تلقائي",
    exportSearchHint: "تصدير المفاتيح المطابقة للبحث الحالي فقط",
    importSearchHint: "الاستيراد يطبق على قاعدة البيانات بالكامل وليس نتائج البحث فقط",
    importNoKeys: "لم يتم العثور على مفاتيح في الملف",
  },
  status: {
    dataCopied: "البيانات موجودة في الحافظة",
    licenseSaved: "تم حفظ الترخيص",
    exportDone: "اكتمل التصدير",
    indexCreated: "تم إنشاء الفهرس",
    indexDropped: "تم حذف الفهرس",
    importDone: (opts) => `اكتمل الاستيراد: ${opts.created} تم إنشاؤه، ${opts.skipped} تم تخطيه، ${opts.errors} أخطاء`,
    nodeRemoved: "تمت إزالة العقدة",
    keyIsNotExisting: "ربما تم حذف هذا المفتاح أو انتهت صلاحيته.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "لا يوجد مفتاح";
      } else if (opts.keyCount === 1) {
        return "1 مفتاح";
      } else {
        return `${opts.keyCount} مفاتيح`;
      }
    },
    treeExpandAll: "قم بتوسيع جميع أوراق الشجرة. قد تكون هذه العملية مكلفة وقد تستغرق وقتا طويلا..",
    noRedisKeys: "لا توجد مفاتيح في قاعدة البيانات هذه.",
    redisConnected: "تم توصيل Redis بنجاح",
    reloadingDataInfo: "إعادة تحميل معلومات بيانات Redis",
    added: "تمت الإضافة",
    saved: "تم التحديث",
    cancelled: "تم الإلغاء",
    deleted: "تم الحذف",
    savedRedis: "يتم حفظ بيانات Redis",
    redisDisconnected: opts => {
      return `حدث خطأ في الاتصال الحالي: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `تم تعيين مؤشر db على ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `تم حذف مفتاح الشجرة (${opts.key}).`;
    },
    deletedKey: opts => {
      return `تم حذف المفتاح (${opts.key}).`;
    },
    renamedKey: "تمت إعادة تسمية هذا المفتاح",
    ttlChanged: "تم تغيير TTL لهذا المفتاح",
    notInteger: "هذا الإدخال ليس عددًا صحيحًا",
    persisted: "ويستمر هذا المفتاح إلى الأبد",
    set: "تم ضبط/إضافة المفتاح"
  },
  code: {
    "delete-connection": "تم حذف هذا الاتصال، لذا تم قطع اتصالك بمثيل Redis هذا.",
    "save-connection": "تم تغيير هذا الاتصال، لذا تم قطع اتصالك بمثيل Redis هذا. يمكنك إعادة الاتصال.",
    "readonly-connections": "اتصالات إضافة/حفظ/حذف للقراءة فقط!",
    "readonly-connection-mode": "يتم قراءة هذا الاتصال فقط الوضع!",
    "list-out-of-bounds": "فهرس القائمة هذا خارج الحدود",
    "donation-ware-feature": "هذه الميزة موجودة في نسخة التبرع.",
    "feature-pro-readonly-required": "يتطلب وضع الاتصال للقراءة فقط ترخيص Pro أو Enterprise.",
    "feature-pro-ssh-required": "يتطلب الاتصال النفقي SSH ترخيص Pro أو Enterprise.",
    "feature-enterprise-cluster-sentinel-required": "يتطلب Cluster وSentinel ترخيصًا مؤسسيًا.",
    "feature-pro-json-binary-required": "يتطلب تحرير JSON وتحميل الملف الثنائي وتنزيل الملف الثنائي ترخيص Pro أو Enterprise.",
    "feature-pro-rejson-required": "يتطلب ReJSON (نوع البيانات JSON) ترخيص Pro أو Enterprise.",
    "invalid-json-value": "القيمة غير صالحة JSON.",
    "http_auth_required": "التفويض مطلوب: يرجى المصادقة باستخدام HTTP Basic Auth وإعادة التحميل.",
    "auto-connection-failed": "ممكن تم حذف الاتصال وفشل الاتصال التلقائي لهذا السبب.",
    invalid_console_command: "هذا الأمر لا يعمل عبر GUI."
  },
  licenseReason: {
    LICENSE_VALID: "الترخيص ساري المفعول",
    LICENSE_INVALID: "الترخيص غير صالح",
    LICENSE_MISSING: "لم يتم تعيين مفتاح الترخيص",
    LICENSE_DISABLED: "تم تعطيل الترخيص في تكوين الخادم",
    LICENSE_NOT_FOUND: "لم يتم العثور على الترخيص",
    LICENSE_EXPIRED: "انتهت صلاحية الترخيص",
    LICENSE_CLEARED: "تم مسح مفتاح الترخيص",
    LICENSE_MAX_DEVICES_REACHED: "تم الوصول إلى الحد الأقصى لعدد مقاعد الجهاز",
    PRODUCT_MISMATCH: "منتج الترخيص غير متطابق"
  },
  licenseStatusValue: {
    active: "نشط",
    deleted: "تم الحذف",
    all: "الكل",
    expired: "انتهت صلاحيتها",
    missing: "مفقود",
    inactive: "غير نشط"
  },
  form: {
    error: {
      required: "مطلوب",
      port: "المنفذ بين 1-65535",
      invalid: "النموذج غير صالح"
    },
    connection: {
      label: {
        name: "الاسم",
        group: "Group",
        host: "اسم المضيف",
        port: "ميناء",
        password: "كلمة المرور",
        username: "اسم المستخدم"
      }
    },
    treeSettings: {
      maxValueDisplay: "الحد الأقصى لطول سلسلة عرض القيمة",
      maxValueDisplayInfo: "إذا تم التعيين على 0، قم بإظهار القيم الكاملة. إذا كان أكبر من 0، اقتطاع إلى هذا الطول. إذا -1: بالنسبة للسلاسل، قم بإخفاء القيمة حتى يتم التحرير؛ أما بالنسبة للأنواع الأخرى، أظهر المحتوى الكامل.",
      maxKeys: "الحد الأقصى لعدد المفاتيح",
      maxKeysInfo: "لكي لا يتعطل GUI، فإننا نحدد الحد الأقصى لعدد المفاتيح.",
      keyCount: () => {
        return `عدد المفاتيح: ${p3xr.state.keysRaw.length}`;
      },
      label: {
        animation: "استخدم الرسوم المتحركة",
        noAnimation: "لا الرسوم المتحركة",
        jsonFormatTwoSpace: "قم بتنسيق JSON بمسافتين",
        jsonFormatFourSpace: "قم بتنسيق JSON بأربع مسافات",
        formName: "إعدادات Redis",
        searchModeClient: "وضع البحث عن العميل",
        searchModeServer: "وضع البحث عن الخادم",
        searchModeStartsWith: "البحث مع يبدأ مع الوضع",
        searchModeIncludes: "البحث يشمل الوضع"
      },
      field: {
        treeSeparator: "فاصل الشجرة",
        treeSeparatorSelector: "محدد فاصل الشجرة",
        page: "عدد صفحات الشجرة",
        keyPageCount: "عدد الصفحات الرئيسية",
        keysSort: "فرز المفاتيح",
        searchMode: "وضع البحث",
        searchModeStartsWith: "يبدأ البحث بـ / يتضمن"
      },
      error: {
        keyPageCount: "يجب أن يكون عدد الصفحات الرئيسية عددًا صحيحًا بين 5 - 100",
        page: "يجب أن يكون عدد الصفحات عددًا صحيحًا بين 10 - 5000",
        maxValueDisplay: "يجب أن تكون قيمة العرض القصوى عددًا صحيحًا بين -1 و32768",
        maxKeys: "يجب أن يكون الحد الأقصى لقيمة عدد المفاتيح عددًا صحيحًا بين 100 و100000"
      }
    },
    key: {
      label: {
        formName: {
          add: "أضف مفتاح Redis جديد",
          edit: "تحرير مفتاح Redis",
          append: "أضف إلى مفتاح Redis الموجود"
        }
      },
      field: {
        streamTimestamp: "الطابع الزمني",
        key: "مفتاح",
        type: "اكتب",
        index: "الفهرس",
        hashKey: "مفتاح التجزئة",
        score: "النتيجة",
        value: "القيمة"
      },
      error: {
        streamTimestamp: "الطابع الزمني مطلوب، إما بتنسيق Redis أو *",
        key: "المفتاح هو، على الأقل، حرف واحد",
        hashKey: "يتكون مفتاح جدول التجزئة من حرف واحد على الأقل",
        score: "مطلوب النتيجة المحددة التي تم فرزها",
        value: "القيمة مطلوبة"
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
      title: "بحث",
      index: "فهرس",
      query: "استعلام",
      results: "النتائج",
      noIndex: "لم يتم العثور على فهارس",
      createIndex: "إنشاء فهرس",
      dropIndex: "حذف فهرس",
      indexInfo: "معلومات الفهرس",
      indexName: "اسم الفهرس",
      prefix: "بادئة المفتاح (اختياري)",
      fieldName: "اسم الحقل",
    },
    monitor: {
      title: "المراقبة",
      memory: "الذاكرة",
      opsPerSec: "عمليات/ثانية",
      clients: "العملاء",
      blocked: "محظور",
      hitsMisses: "معدل الإصابة",
      networkIo: "إدخال/إخراج الشبكة",
      slowLog: "السجل البطيء",
      totalCommands: "الإجمالي",
      expired: "منتهي الصلاحية",
      evicted: "مطرود",
      clientList: "قائمة العملاء",
      topKeys: "أكبر المفاتيح حسب الذاكرة",
      killClient: "إنهاء العميل",
      clientKilled: "تم إنهاء العميل",
      confirmKillClient: "هل أنت متأكد من إنهاء هذا العميل؟",
      noKeys: "لا توجد مفاتيح",
      noClients: "لا يوجد عملاء",
    },
    overview: {
      noConnected: "لا يوجد اتصال بـ Redis.",
      overviewClients: "قم بإدراج المتصلين حسب عدد العملاء",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "1 عميل";
        }
        return `${opt.length} عملاء`;
      }
    },
    key: {
      label: {
        key: "مفتاح",
        encoding: "الترميز",
        length: "الحجم",
        ttl: "TTL",
        ttlTitle: "الوقت للعيش",
        type: "اكتب",
        ttlNotExpire: "لا تنتهي صلاحيته",
        lengthString: "بايت",
        lengthItem: "العناصر",
        actions: "الإجراءات"
      },
      list: {
        table: {
          index: "الفهرس",
          value: "القيمة"
        }
      },
      hash: {
        table: {
          hashkey: "هاشكي",
          value: "القيمة"
        }
      },
      set: {
        table: {
          value: "عضو"
        }
      },
      zset: {
        table: {
          value: "عضو",
          score: "النتيجة"
        }
      },
      stream: {
        table: {
          timestamp: "معرف الطابع الزمني",
          field: "الميدان",
          value: "القيمة"
        }
      }
    },
    treeControls: {
      settings: "إعدادات الشجرة",
      expandAll: "قم بتوسيع الكل",
      collapseAll: "طي الكل",
      search: {
        search: "ابحث في المفاتيح",
        clear: "مسح البحث الحالي لتعيينه فارغا",
        placeholderClient: "البحث من جانب العميل",
        placeholderServer: "بحث جانب الخادم",
        info: "يعني البحث من جانب العميل أنه يطابق النص الموجود في إدخال البحث. يعني البحث من جانب الخادم أنه يشبه البحث في أنماط المفاتيح مثل *{search-text}*. بالنسبة لمجموعات البحث الكبيرة، من الأفضل استخدام البحث من جانب الخادم. بالنسبة لمجموعات البحث الأصغر، فمن الأفضل استخدام وضع البحث من جانب العميل." + ` إذا انتهى عدد المفاتيح ${p3xr.settings.maxLightKeysCount}، يمكنك البحث فقط على جانب الخادم.`,
        largeSetInfo: "في مجموعة كبيرة، يتم تعطيل البحث من جانب العميل. لذا، في الوقت الحالي، أصبح البحث من جانب الخادم فقط ممكنًا.",
        infoDetails: "لمعرفة كيفية عمل البحث، يرجى مراجعة الإعدادات"
      },
      pager: {
        next: "التالي",
        prev: "السابق",
        first: "أولا",
        last: "الاخير"
      }
    }
  },
  time: {
    loading: "جارٍ التحميل...",
    years: "سنوات",
    months: "أشهر",
    days: "أيام",
    year: "سنة",
    month: "شهر",
    day: "يوم"
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
