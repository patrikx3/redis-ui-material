const strings = {
  error: {
    cleared_license: "רישיון מאושר",
    invalid_license: "רישיון לא חוקי",
    license_max_devices_reached: "הושגה מקסימום מושבים במכשיר",
    license_readonly: "ניתן לשנות את הרישיון רק ממסוף השרת.",
    server_error: "שגיאת שרת, אנא נסה שוב"
  },
  title: {
    donate: "לתרום",
    jsonRecursive: "הרחבת כל העלים",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "אתה יכול לבחור חיבור Redis לחיבור מהתפריט התחתון השמאלי.",
    statistics: "סטטיסטיקה",
    error: "שגיאה",
    connectingRedis: "מתחבר ל-Redis ...",
    socketioConnectError: "שגיאה Socket.IO",
    db: "DB",
    server: "שרת",
    clients: "לקוחות",
    memory: "זיכרון",
    persistence: "התמדה",
    stats: "סטטיסטיקה",
    replication: "שכפול",
    cpu: "CPU",
    cluster: "Cluster",
    modules: "מודולים",
    errorstats: "סטטיסטיקת שגיאות",
    commandstats: "סטטיסטיקת פקודות",
    latencystats: "סטטיסטיקת השהיה",
    keysizes: "גדלי מפתחות",
    threads: "תהליכונים",
  },
  confirm: {
    dropIndex: "האם אתה בטוח שברצונך למחוק אינדקס זה?",
    uploadBuffer: "האם אתה בטוח שהעלית את הנתונים הבינאריים האלה?",
    uploadBufferDone: "הנתונים הבינאריים מועלים",
    uploadBufferDoneAndSave: "הנתונים הבינאריים מועלים ונשמרים בשרת",
    title: "אשר",
    alert: "התראה",
    info: "מידע",
    deleteListItem: "האם אתה בטוח שאתה מחק פריט זה ברשימה?",
    deleteHashKey: "האם אתה בטוח שתמחק את פריט מפתח ה-hash הזה?",
    deleteStreamTimestamp: "האם אתה בטוח שאתה מחק את חותמת הזמן של השידור הזה?",
    deleteSetMember: "האם אתה בטוח שתמחק את חבר הסט הזה?",
    deleteZSetMember: "האם אתה בטוח שתמחק את חבר הסט הממוין הזה?",
    deleteConnection: "אשר",
    deleteConnectionText: "האם אתה בטוח שמחקת חיבור Redis זה?",
    deleteNode: "האם אתה בטוח שתמחק את צומת Redis זה?",
    deleteAllKeys: opts => {
      return `מחק את העץ הזה ואת כל המפתחות שלו (${opts.key})?`;
    },
    socketioConnectError: "Socket.IO לא יכול להתחבר לשרת, אתה יכול לטעון מחדש ולנסות לפתור את שגיאת החיבור בעצמך, הלקוח לא יודע איך לפתור אותה בעצמו.",
    socketioAuthRequired: "נדרש אישור Socket.IO. נא לאמת באמצעות HTTP Basic Auth (שם משתמש/סיסמה) וטען מחדש.",
    deleteKey: "האם אתה בטוח שמחקת מפתח זה?",
    rename: {
      title: "האם אתה בטוח לשנות את שם המפתח הזה?",
      textContent: "פעולה זו משנה את שם המפתח לצמיתות.",
      placeholder: "מפתח Redis (חובה)"
    },
    ttl: {
      title: "האם אתה בטוח שברצונך לשנות את ה-TTL של מפתח זה?",
      textContent: "שינוי TTL מעדכן את הזמן של מפתח זה לחיות. השאר ריק כדי לשמור את המפתח הזה לנצח.",
      placeholder: "TTL של מפתח Redis (מספר שלם או ריק)",
      placeholderPlaceholder: "ריק פירושו שהוא נמשך לנצח; אחרת הזן מספר שלם.",
      convertTextToTime: "המרת טקסט לזמן",
      convertTextToTimePlaceholder: "למשל 1d יהיה 86400"
    },
    license: {
      title: "הגדר רישיון",
      textContent: "If you want to use paid features, please contact support@corifeus.com to request a license. Pricing is Pro 400 HUF/month (€1/month) or 4,000 HUF/year (€10/year), and Enterprise 1,200 HUF/month (€3/month) or 12,000 HUF/year (€30/year). Yearly is 10x monthly. With 27% VAT, totals are Pro 500 HUF/month (€1.27/month) or 5,100 HUF/year (€12.70/year), Enterprise 1,500 HUF/month (€3.81/month) or 15,200 HUF/year (€38.10/year). License validation requires internet access. Default license includes 5 seats. If you need more seats, contact us at support@corifeus.com.",
      placeholder: "מפתח רישיון"
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
    copy: "העתק",
    downloadBuffer: "הורד בינארי",
    setBuffer: "העלה בינארי",
    exportKeys: "ייצוא מפתחות",
    exportAllKeys: (opts) => `ייצוא כל ${opts.count} המפתחות`,
    exportSearchResults: (opts) => `ייצוא ${opts.count} תוצאות`,
    importKeys: "ייבוא מפתחות",
    saveWithFormatJson: "שמור עם פורמט",
    formatJson: "פורמט Json",
    wrap: "לעטוף",
    unwrap: "פתח את העטיפה",
    downloadJson: "הורד את JSON",
    pubsubMonitor: "צג PubSub",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "שפה",
    ok: "בסדר",
    addKey: "הוסף למפתח הזה",
    addKeyRoot: "הוסף מפתח שורש",
    reloadKey: "טען מחדש מפתח",
    reload: "טען מחדש",
    close: "סגור",
    commands: "פקודות",
    view: "הצג",
    statistics: "סטטיסטיקה",
    refresh: "רענן",
    pause: "השהה",
    resume: "המשך",
    clear: "ברור",
    rename: "שנה שם",
    main: "מסד נתונים",
    cancel: "בטל",
    theme: "נושא",
    github: "GitHub",
    githubRepo: "מאגר",
    githubRelease: "משחרר",
    githubChangelog: "יומן שינויים",
    info: "Info",
    settings: "הגדרות",
    connect: "התחבר",
    disconnect: "התנתק",
    overview: "סקירה כללית",
    console: "קונסולה",
    noConnections: "אין חיבורים, הוסף חיבור בתפריט ההגדרות.",
    noConnectionsInSettings: "אין חיבורים, אתה יכול להוסיף חיבור חדש למעלה.",
    connectionAdd: "חיבור חדש",
    addGroup: "הוסף קבוצה",
    extend: "הארך",
    collapse: "התמוטט",
    add: "הוסף",
    edit: "ערוך",
    save: "שמור",
    ttl: "הגדר TTL",
    license: "הגדר רישיון",
    delete: "מחק",
    remove: "הסר",
    sure: "בטח",
    testConnection: "בדיקת חיבור",
    getKey: "טוען מפתח Redis ונתונים קשורים...",
    jsonViewShow: "הצג את JSON",
    jsonViewEditor: "ערוך את JSON",
    quickConsole: "קונסולה מהירה",
  },
  label: {
    id: {
      nodeId: "מזהה צומת",
      id: "מזה�� חיבור",
      info: "אם אינך רוצה לשנות את המאפיינים של: sshPassword, sshPrivateKey, password, tlsCrt, tlsKey, tlsCa, אנא הזן את מזהה החיבור במאפיינים אלה כדי לשמור על ערכי הנכס ללא פגע. אם אתה רוצה את אותו היגיון בסיסמת הצומת, הזן את מזהה הצומת בסיסמת הצומת."
    },
    secureFeature: "אם אתה רואה ערך שמתחיל ב-P3X במראה זהה, זוהי תכונה מאובטחת. כדי לשנות את ההגדרות, פשוט החליפו את ההגדרות הללו בריקות או במשהו אחר והן יישמרו. אם לא תשנה את ההגדרות, ההגדרות יישמרו כפי שהן בשרת.",
    aiTranslating: "מתרגם...",
    aiSettings: "הגדרות AI",
    aiGroqApiKey: "מפתח API של Groq",
    aiGroqApiKeyInfo: "אופציונלי. מפתח API Groq משלך לביצועים טובים יותר. קבל מפתח חינמי מ",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "מפתח API AI נשמר",
    aiGroqApiKeyNotSet: "לא הוגדר (ברירת מחדל של השרת)",
    ssh: {
      on: "SSH פועל",
      off: "SSH כבוי",
      sshHost: "מארח SSH",
      sshPort: "יציאת SSH",
      sshUsername: "שם משתמש SSH",
      sshPassword: "סיסמת SSH",
      sshPrivateKey: "מפתח פרטי SSH"
    },
    isBuffer: opts => `[object ArrayBuffer] פירושו שהערך הוא נתונים בינאריים או שהערך גדול מ- ${opts.maxValueAsBuffer}`,
    streamValue: `השדה והערך של זרם הם oneliner. לדוגמה: שדה1 ערך1 "שדה 2" "ערך 2"`,
    streamTimestampId: `'*' פירושו ��נוצר אוטומטית או המפרט כ-<millisecondsTime>-<sequenceNumber>`,
    unableToLoadKey: ({
      key
    }) => {
      return `לא ניתן לטעון את המפתח הזה: ${key}. ייתכן, המפתח נמחק. השגיאה המדויקת נמצאת בקונסולה.`;
    },
    bigJson: "��ובייקט JSON זה הוא מעל 10 קילובייט, אז ודא שאתה יודע מה אתה עושה, מכיוון שחלק מהפונקציות עשויות להיות עיבוד איטי.",
    addNode: "הוסף צומת",
    validateJson: "אמת את JSON",
    reducedFunction: `פונקציונליות מופחתת`,
    tooManyKeys: opts => {
      return `עבור כל הפונקציות המקסימליות המותרות המפתחות סך הכל הוא ${opts.maxLightKeysCount} לספור. למסד נתונים זה יש מעל המפתחות המותרים בסך הכל ${opts.count}. מיון המפתחות ומידע העץ המפואר הנוסף מושבתים. החיפוש מתרחש רק בשרת במקום חיפוש הלקוח.`;
    },
    redisCommandNotFound: "לא נמצאה התאמת פקודה Redis ...",
    treeKeyStore: `המיון (השוואה טבעית) מבוצע על הלקוח הלא הוא הדפדפן, מה שאומר שיש לו עונש על קבוצות גדולות גדולות, כמו מעל 10,000 מפתחות, זה עשוי להוסיף מעט זמן לעיבוד העמוד. אין מיון מפתחות ב-Redis, רק ככה.`,
    socketIoTimeout: options => {
      return `הזמן הקצוב ל-Socket.IO תם לבקשה זו (מקסימום ${options.timeout / 1000} שניות)...`;
    },
    resizerInfo: options => {
      return `הרוחב המינימלי של הלוח השמאלי או הימני הוא ${options.width}פיקסלים`;
    },
    jsonViewNotParsable: "ערך זה אינו ניתן לניתוח JSON  ",
    ttlTitle: "הגדר את ה-TTL בשניות",
    passwordSecure: "ייתכן שהסיסמה תהיה ריקה, אבל עדיין היא תציג תווים, זו תכונת אבטחה.",
    tlsWithoutCert: "אפשר TLS ללא אישור נוסף",
    tlsRejectUnauthorized: "דחה אישור לא מורשה",
    tlsSecure: "אם אתה רואה תצורת TLS שמתחילה ב-P3X או שכל הגדרות ה-TLS נראות זהות, זו תכונה מאובטחת. כדי לשנות את ההגדרות, פשוט החליפו את ההגדרות הללו בריקות או במשהו אחר והן יישמרו. אם לא תשנה את הגדרות ה-TLS, ההגדרות יישמרו כפי שהן בשרת.",
    treeSeparatorEmpty: "אם מפריד העצים ריק, לעץ לא יהיו צמתים מקוננים, רק רשימה טהורה",
    treeSeparatorEmptyNote: "אין צמתים מקוננים, רק רשימה טהורה",
    welcomeConsole: "ברוכים הבאים לקונסולת Redis",
    welcomeConsoleInfo: "היסטוריית הסמן למעלה או למטה מופעלת",
    redisListIndexInfo: "ריק כדי להוסיף, -1 כדי להוסיף או לשמור אותו במיקום המוצג.",
    console: "קונסולה",
    connectiondAdd: "הוסף חיבור",
    connectiondEdit: "ערוך חיבור",
    connectiondView: "צפה בחיבור",
    connections: "חיבורים",
    licenseInfo: "רישיון",
    licenseEditable: "רישיון ניתן לעריכה",
    licenseEditableYes: "כן",
    licenseEditableNo: "לא",
    licenseTerminalOnly: "ניתן להגדיר רישיון רק ממסוף השרת.",
    licenseTierPolicyTitle: "מדיניות שכבה",
    licenseTierPolicyText: "<h4>Free</h4>core Redis UI only; no SSH tunneling, no Readonly connection mode, no Cluster/Sentinel, no Edit JSON/Upload binary/Download binary, no ReJSON.<br/><strong>Price: 0 HUF/month (€0/month).</strong><br/><br/><h4>Pro</h4>SSH tunneling, Readonly connection mode (including --readonly-connections/-r), Edit JSON, Upload binary, Download binary, ReJSON.<br/><strong>Base price: 400 HUF/month (€1/month) or 4,000 HUF/year (€10/year).</strong><br/><strong>Total with 27% VAT: 500 HUF/month (€1.27/month) or 5,100 HUF/year (€12.70/year).</strong><br/><br/><h4>Enterprise</h4>SSH tunneling, Cluster and Sentinel, plus Edit JSON, Upload binary, Download binary, ReJSON; --readonly-connections/-r also works.<br/><strong>Base price: 1,200 HUF/month (€3/month) or 12,000 HUF/year (€30/year).</strong><br/><strong>Total with 27% VAT: 1,500 HUF/month (€3.81/month) or 15,200 HUF/year (€38.10/year).</strong><br/><br/><h4>Yearly rule</h4>Yearly price is 10x the monthly price.<br/><br/><h4>Seats</h4>Default license includes 5 seats. If you need more seats, contact us at <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><br/><h4>Enterprise trial</h4>10 days free for anyone with a real existing email address (non-test email).<br/><hr/><h4>Billing info in e-mail</h4>Name, Billing e-mail, Country code, Postal code, City, Address, VAT ID (optional).<br/><br/><h4>Payment</h4>PayPal payment is available only in HUF (forint); after sending the money @ <a href='https://paypal.me/corifeus'>https://paypal.me/corifeus</a> I will send you an invoice. All payments are non-refundable.<br/><br/><h4>VAT</h4>VAT is added to the price (27% in Hungary).<br/><hr/><h4>Contact</h4>If you want to say hi or have a question, contact <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><hr/><h4>Language</h4>Invoice and license e-mail communication is in English. Invoice currency is HUF.<br/><hr/><h4>Note</h4>License validation requires internet access.",
    licenseState: "מדינה",
    licenseStateActive: "פעיל",
    licenseStateInactive: "לא פעיל",
    licenseStateNoLicense: "אין רישיון",
    licenseKeyMasked: "מפתח שמור",
    licenseTier: "שכבה",
    licenseValid: "תקף",
    licenseStatus: "מצב רישיון",
    licenseReason: "סיבה",
    licenseCheckedAt: "בדק ב",
    licenseStartsAt: "מתחיל ב",
    licenseExpiresAt: "יפוג בשעה",
    licenseDaysLeft: "נותרו ימים",
    licenseMaxDevices: "מקסימום מכשירים",
    licenseActiveDevices: "מכשירים פעילים",
    licenseActiveDevicesInfo: "אם מכשיר אינו בשימוש יותר, המושב שלו משתחרר אוטומטית לאחר 75 דקות.",
    licenseCustomerEmail: "מייל לקוח",
    licenseFeatures: "תכונות",
    licenseFeaturesEmpty: "אין תכונות נוספות",
    licenseFeatureReadonlyMode: "מצב חיבור לקריאה בלבד",
    licenseFeatureReadonlyConnectionsFlag: "חיבורים לקריאה בלבד (--readonly-connections/-r)",
    licenseFeatureSsh: "SSH מנהור",
    licenseFeatureCluster: "חיבורי Cluster",
    licenseFeatureSentinel: "חיבורי Sentinel",
    licenseFeatureReJSON: "ReJSON (סוג נתונים JSON)",
    keysSort: {
      on: "מיון מפתחות על",
      off: "מיון מפתחות"
    },
    cluster: {
      on: "Cluster פועל",
      off: "Cluster כבוי"
    },
    sentinel: {
      on: "Sentinel פועל",
      off: "Sentinel כבוי",
      name: "שם Sentinel"
    },
    readonly: {
      on: "המשך לקריאה בלבד",
      off: "כבוי לקריאה בלבד"
    },
    proSshOnly: "SSH זמין ב-Pro או Enterprise.",
    proReadonlyOnly: "מצב חיבור לקריאה בלבד זמין ב-Pro או Enterprise.",
    enterpriseClusterSentinelOnly: "Cluster ו-Sentinel זמינים ב-Enterprise בלבד.",
    theme: {
      light: "אור",
      dark: "מפעל אפל",
      darkNeu: "כהה",
      darkoBluo: "Darko bluo",
      enterprise: "ארגונים",
      redis: "Redis",
      matrix: "מטריקס"
    },
    connected: opts => {
      return `מחובר: ${opts.name}`;
    },
    tree: "עץ",
    askAuth: "בקשו אישור",
    keyboardShortcuts: "Keyboard Shortcuts",
    about: "About",
    supportedLanguages: "Supported Languages",
    version: "Version",
    redisVersion: "Redis Version",
    modules: "מודולים",
    shortcutRefresh: "Refresh",
    shortcutSearch: "Focus Search",
    shortcutNewKey: "New Key",
    shortcutDisconnect: "התנתק",
    themeAuto: "Auto (system)",
    shortcutCommandPalette: "Command Palette",
    commandPalette: "Command Palette",
    noResults: "No results",
    redisCommandsReference: "פקודות Redis",
    ungrouped: "ללא קבוצה",
    grouped: "Grouped",
    connectFirst: "התחבר תחילה לשרת Redis",
    searchLanguage: "חיפוש שפה...",
    exportProgress: "מייצא מפתחות...",
    importProgress: "מייבא מפתחות...",
    importPreview: "תצוגה מקדימה",
    importOverwrite: "דריסה",
    importSkip: "דלג",
    importConflict: "אם המפתח כבר קיים:",
    noKeysToExport: "אין מפתחות לייצוא",
    time: "זמן",
    loading: "טוען...",
    autoRefresh: "אוטומטי",
    exportSearchHint: "מייצא רק מפתחות התואמים לחיפוש הנוכחי",
    importSearchHint: "הייבוא חל על כל מסד הנתונים, לא רק על תוצאות החיפוש",
    importNoKeys: "לא נמצאו מפתחות בקובץ",
  },
  status: {
    dataCopied: "הנתונים נמצאים בלוח",
    licenseSaved: "הרישיון נשמר",
    exportDone: "הייצוא הושלם",
    indexCreated: "אינדקס נוצר",
    indexDropped: "אינדקס נמחק",
    importDone: (opts) => `ייבוא הושלם: ${opts.created} נוצרו, ${opts.skipped} דולגו, ${opts.errors} שגיאות`,
    nodeRemoved: "הצומת הוסר",
    keyIsNotExisting: "יכול להיות שהמפתח הזה נמחק או שפג תוקפו.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "אין מפתח";
      } else if (opts.keyCount === 1) {
        return "מפתח 1";
      } else {
        return `${opts.keyCount} מפתחות`;
      }
    },
    treeExpandAll: "הרחב את כל עלי העץ. פעולה זו עשויה להיות יקרה ועשויה לקחת זמן...",
    noRedisKeys: "אין מפתחות במסד נתונים זה.",
    redisConnected: "Redis מחובר בהצלחה",
    reloadingDataInfo: "טוען מחדש את פרטי הנתונים של Redis",
    added: "נוסף",
    saved: "עודכן",
    cancelled: "בוטלה",
    deleted: "נמחק",
    savedRedis: "נתוני Redis נשמרים",
    redisDisconnected: opts => {
      return `בחיבור הנוכחי הייתה שגיאה: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `��ינדקס db מוגדר ל ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `מפתח העץ נמחק (${opts.key}).`;
    },
    deletedKey: opts => {
      return `המפתח נמחק (${opts.key}).`;
    },
    renamedKey: "השם של מפתח זה שונה",
    ttlChanged: "ה-TTL של מפתח זה השתנה",
    notInteger: "קלט זה אינו מספר שלם",
    persisted: "מפתח זה נמשך לנצח",
    set: "המפתח מוגדר/נוסף"
  },
  code: {
    "delete-connection": "חיבור זה נמחק, אז אתה מנותק למופע Redis זה.",
    "save-connection": "חיבור זה השתנה, אז אתה מנותק למופע Redis זה. אתה יכול להתחבר מחדש.",
    "readonly-connections": "הוספה/שמירה/מחיקה של חיבורים הם לקריאה בלבד!",
    "readonly-connection-mode": "חיבור זה הוא במצב קריאה בלבד!",
    "list-out-of-bounds": "אינדקס רשימה זה מחוץ לתחום",
    "donation-ware-feature": "תכונה זו קיימת בגרסת התרומה.",
    "feature-pro-readonly-required": "מצב חיבור לקריאה בלבד דורש רישיון Pro או Enterprise.",
    "feature-pro-ssh-required": "מנהור SSH דורש רישיון Pro או Enterprise.",
    "feature-enterprise-cluster-sentinel-required": "Cluster ו-Sentinel דורשים רישיון Enterprise.",
    "feature-pro-json-binary-required": "ערוך JSON, העלה בינארי והורד בינארי דורשים רישיון Pro או Enterprise.",
    "feature-pro-rejson-required": "ReJSON (סוג נתונים JSON) דורש רישיון Pro או Enterprise.",
    "invalid-json-value": "הערך אינו חוקי JSON.",
    "http_auth_required": "נדרשת הרשאה: נא לאמת עם HTTP Basic Auth וטען מחדש.",
    "auto-connection-failed": "ייתכן, החיבור הוסר והחיבור האוטומטי נכשל, בגלל זה.",
    invalid_console_command: "פקודה זו אינה פועלת דרך ה-GUI."
  },
  licenseReason: {
    LICENSE_VALID: "הרישיון תקף",
    LICENSE_INVALID: "הרישיון אינו חוקי",
    LICENSE_MISSING: "לא הוגדר מפתח רישיון",
    LICENSE_DISABLED: "הרישיון מושבת בתצורת השרת",
    LICENSE_NOT_FOUND: "הרישיון לא נמצא",
    LICENSE_EXPIRED: "פג תוקף הרישיון",
    LICENSE_CLEARED: "מפתח הרישיון נוקה",
    LICENSE_MAX_DEVICES_REACHED: "הושגה מקסימום מושבים במכשיר",
    PRODUCT_MISMATCH: "מוצר הרישיון אינו תואם"
  },
  licenseStatusValue: {
    active: "פעיל",
    deleted: "נמחק",
    all: "הכל",
    expired: "פג תוקף",
    missing: "חסר",
    inactive: "לא פעיל"
  },
  form: {
    error: {
      required: "חובה",
      port: "הנמל הוא בין 1-65535",
      invalid: "הטופס אינו חוקי"
    },
    connection: {
      label: {
        name: "שם",
        group: "Group",
        host: "שם מארח",
        port: "נמל",
        password: "סיסמה",
        username: "שם משתמש"
      }
    },
    treeSettings: {
      maxValueDisplay: "אורך מחרוזת תצוגת ערך מקסימלי",
      maxValueDisplayInfo: "אם מוגדר ל-0, הצג ערכים מלאים. אם הוא גדול מ-0, חתוך לאורך זה. אם -1: עבור מחרוזות, הסתר את הערך עד לעריכה; עבור סוגים אחרים, הצג תוכן מלא.",
      maxKeys: "ספירת המפתחות המקסימלית",
      maxKeysInfo: "כדי שה-GUI לא יקרוס, אנו מגבילים את ספירת המפתחות המקסימלית.",
      keyCount: () => {
        return `מספר מפתחות: ${p3xr.state.keysRaw.length}`;
      },
      label: {
        animation: "השתמש באנימציה",
        noAnimation: "אין אנימציה",
        jsonFormatTwoSpace: "פורמט JSON עם 2 רווחים",
        jsonFormatFourSpace: "פורמט JSON עם 4 רווחים",
        formName: "הגדרות Redis",
        searchModeClient: "מצב חיפוש לקוח",
        searchModeServer: "מצב חיפוש שרת",
        searchModeStartsWith: "חיפוש עם מתחיל עם מצב",
        searchModeIncludes: "החיפוש כולל מצב"
      },
      field: {
        treeSeparator: "מפריד עצים",
        treeSeparatorSelector: "בורר מפריד עצים",
        page: "ספירת דפי עצים",
        keyPageCount: "ספירת דפי מפתח",
        keysSort: "מיין את המפתחות",
        searchMode: "מצב חיפוש",
        searchModeStartsWith: "החיפוש מתחיל עם / כולל"
      },
      error: {
        keyPageCount: "ספירת דפי המפתח חייבת להיות מספר שלם בין 5 - 100",
        page: "ספירת הדפים חייבת להיות מספר שלם בין 10 - 5000",
        maxValueDisplay: "ערך התצוגה המקסימלי חייב להיות מספר שלם בין -1 ל-32768",
        maxKeys: "ערך ספירת המפתח המקסימלי חייב להיות מספר שלם בין 100 ל-100000"
      }
    },
    key: {
      label: {
        formName: {
          add: "הוסף מפתח Redis חדש",
          edit: "ערוך מפתח Redis",
          append: "הוסף למפתח Redis הקיים"
        }
      },
      field: {
        streamTimestamp: "חותמת זמן",
        key: "מפתח",
        type: "הקלד",
        index: "אינדקס",
        hashKey: "מפתח Hash",
        score: "ציון",
        value: "ערך"
      },
      error: {
        streamTimestamp: "חותמת הזמן נדרשת, בפורמט Redis או בתור *",
        key: "המפתח הוא, לפחות, תו אחד",
        hashKey: "מפתח טבלת הגיבוב הוא תו אחד לפחות",
        score: "נדרש ציון הסט הממוין",
        value: "הערך נדרש"
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
      title: "חיפוש",
      index: "אינדקס",
      query: "שאילתה",
      results: "תוצאות",
      noIndex: "לא נמצאו אינדקסים",
      createIndex: "צור אינדקס",
      dropIndex: "מחק אינדקס",
      indexInfo: "מידע אינדקס",
      indexName: "שם האינדקס",
      prefix: "תחילית מפתח (אופציונלי)",
      fieldName: "שם השדה",
    },
    monitor: {
      title: "ניטור",
      memory: "זיכרון",
      opsPerSec: "פעולות/שנייה",
      clients: "לקוחות",
      blocked: "חסומים",
      hitsMisses: "שיעור פגיעה",
      networkIo: "רשת I/O",
      slowLog: "יומן איטי",
      totalCommands: "סה\x22כ",
      expired: "פג תוקף",
      evicted: "פונו",
      clientList: "רשימת לקוחות",
      topKeys: "מפתחות גדולים לפי זיכרון",
      killClient: "סגור לקוח",
      clientKilled: "הלקוח נסגר",
      confirmKillClient: "האם אתה בטוח שברצונך לסגור לקוח זה?",
      noKeys: "אין מפתחות",
      noClients: "אין לקוחות",
    },
    overview: {
      noConnected: "אין חי��ור ל-Redis.",
      overviewClients: "רשום את המחוברים לפי ספירת הלקוחות",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "לקוח 1";
        }
        return `${opt.length} לקוחות`;
      }
    },
    key: {
      label: {
        key: "מפתח",
        encoding: "קידוד",
        length: "גודל",
        ttl: "TTL",
        ttlTitle: "זמן לחיות",
        type: "הקלד",
        ttlNotExpire: "לא יפוג",
        lengthString: "בתים",
        lengthItem: "פריטים",
        actions: "פעולות"
      },
      list: {
        table: {
          index: "אינדקס",
          value: "ערך"
        }
      },
      hash: {
        table: {
          hashkey: "חשקי",
          value: "ערך"
        }
      },
      set: {
        table: {
          value: "חבר"
        }
      },
      zset: {
        table: {
          value: "חבר",
          score: "ציון"
        }
      },
      stream: {
        table: {
          timestamp: "מזהה חותמת זמן",
          field: "שדה",
          value: "ערך"
        }
      }
    },
    treeControls: {
      settings: "הגדרות עץ",
      expandAll: "הרחב הכל",
      collapseAll: "כווץ הכל",
      search: {
        search: "חפש במפתחות",
        clear: "נקה את החיפוש הנוכחי כדי להגדיר ריק",
        placeholderClient: "חפש בצד הלקוח",
        placeholderServer: "חפש בצד השרת",
        info: "החיפוש בצד הלקוח אומר שהוא מתאים לטקסט בקלט החיפוש. פירוש החיפוש בצד השרת הוא, כלומר כמו חיפוש בתבניות המפתחות כמו *{חיפוש-טקסט}*. עבור מערכי חיפוש גדולים, עדיף להשתמש בחיפוש בצד השרת. עבור קבוצות חיפוש קטנות יותר, עדיף להשתמש במצב חיפוש בצד הלקוח." + ` אם ספירת המפתחות הסתיימה ${p3xr.settings.maxLightKeysCount}, אתה יכול לחפש רק בצד השרת.`,
        largeSetInfo: "בקבוצה גדולה, החיפוש בצד הלקוח מושבת. אז כרגע רק חיפוש בצד השרת אפשרי.",
        infoDetails: "כדי לגלות כיצד פועל החיפוש, אנא עיין בהגדרות"
      },
      pager: {
        next: "הבא",
        prev: "הקודם",
        first: "ראשית",
        last: "אחרון"
      }
    }
  },
  time: {
    loading: "טוען...",
    years: "שנים",
    months: "חודשים",
    days: "ימים",
    year: "שנה",
    month: "חודש",
    day: "יום"
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
