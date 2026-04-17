const strings = {
  error: {
    server_error: "שגיאת שרת, אנא נסה שוב",
    aiPromptTooLong: "בקשת AI ארוכה מדי (מקסימום 4096 תווים)",
  },
  title: {
    donate: "לתרום",
    donateTitle: "תמכו ב-P3X Redis UI",
    donateDescription: "P3X Redis UI הוא פרויקט חינמי בקוד פתוח. עלויות תחזוקת האפליקציה, תכונות AI, תמונות Docker, שרתים ותשתית יוצאות מכיסו של המפתח. אם אתם מוצאים כלי זה שימושי, אנא שקלו לתמוך בפיתוח המתמשך שלו בתרומה. כל תרומה עוזרת לשמור על הפרויקט חי וצומח. תודה!",
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
    threads: "תהליכונים"
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
    delete: "למחוק?",
    deleteAllKeys: opts => {
      return `מחק את העץ הזה ואת כל המפתחות שלו (${opts.key})?`;
    },
    deleteSearchKeys: opts => {
      return `האם אתה בטוח שברצונך למחוק את כל המפתחות התואמים ל-"${opts.pattern}"? נמצאו ${opts.count} מפתחות.`;
    },
    socketioConnectError: "Socket.IO לא יכול להתחבר לשרת, אתה יכול לטעון מחדש ולנסות לפתור את שגיאת החיבור בעצמך, הלקוח לא יודע איך לפתור אותה בעצמו.",
    socketioAuthRequired: "נדרש אישור Socket.IO. נא לאמת באמצעות HTTP Basic Auth (שם משתמש/סיסמה) וטען מחדש.",
    invalidCredentials: "שם משתמש או סיסמה לא תקינים.",
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
    deleteAllKeysMenu: (opts) => `מחק הכל ${opts.count}`,
    importKeys: "ייבוא מפתחות",
    deleteSearchKeys: (opts) => `מחק ${opts.count} מפתחות תואמים`,
    saveWithFormatJson: "שמור עם פורמט",
    formatJson: "פורמט Json",
    wrap: "לעטוף",
    unwrap: "פתח את העטיפה",
    downloadJson: "הורד את JSON",
    pubsubMonitor: "PubSub",
    pulse: "Pulse",
    profiler: "Profiler",
    memoryAnalysis: "Analysis",
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
    logout: "התנתק",
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
    fieldTtl: "TTL שדה",
    digest: "תקציר",
    delete: "מחק",
    remove: "הסר",
    areYouSure: "?האם אתה בטוח",
    sure: "בטח",
    testConnection: "בדיקת חיבור",
    getKey: "טוען מפתח Redis ונתונים קשורים...",
    jsonViewShow: "הצג את JSON",
    jsonViewEditor: "ערוך את JSON",
    quickConsole: "קונסולה מהירה",
    moveUp: "העבר למעלה",
    moveDown: "העבר למטה",
  },
  diff: {
    reviewChanges: "\u05e1\u05e7\u05d9\u05e8\u05ea \u05e9\u05d9\u05e0\u05d5\u05d9\u05d9\u05dd",
    inline: "\u05d1\u05ea\u05d5\u05da \u05d4\u05e9\u05d5\u05e8\u05d4",
    sideBySide: "\u05d6\u05d4 \u05dc\u05e6\u05d3 \u05d6\u05d4",
    additions: "\u05ea\u05d5\u05e1\u05e4\u05d5\u05ea",
    deletions: "\u05de\u05d7\u05d9\u05e7\u05d5\u05ea",
    unchangedLines: "\u05e9\u05d5\u05e8\u05d5\u05ea \u05dc\u05dc\u05d0 \u05e9\u05d9\u05e0\u05d5\u05d9",
    noChanges: "\u05dc\u05d0 \u05d6\u05d5\u05d4\u05d5 \u05e9\u05d9\u05e0\u05d5\u05d9\u05d9\u05dd",
    before: "\u05dc\u05e4\u05e0\u05d9",
    after: "\u05d0\u05d7\u05e8\u05d9",
  },
  label: {
    id: {
      nodeId: "מזהה צומת",
      id: "מזהה חיבור",
      info: "אם אינך רוצה לשנות את המאפיינים של: sshPassword, sshPrivateKey, password, tlsCrt, tlsKey, tlsCa, אנא הזן את מזהה החיבור במאפיינים אלה כדי לשמור על ערכי הנכס ללא פגע. אם אתה רוצה את אותו היגיון בסיסמת הצומת, הזן את מזהה הצומת בסיסמת הצומת."
    },
    secureFeature: "אם אתה רואה ערך שמתחיל ב-P3X במראה זהה, זוהי תכונה מאובטחת. כדי לשנות את ההגדרות, פשוט החליפו את ההגדרות הללו בריקות או במשהו אחר והן יישמרו. אם לא תשנה את ההגדרות, ההגדרות יישמרו כפי שהן בשרת.",
    aiTranslating: "מתרגם...",
    aiSettings: "הגדרות AI",
    aiGroqApiKey: "מפתח API של Groq",
    aiGroqApiKeyInfo: "אופציונלי. מפתח API Groq משלך לביצועים טובים יותר. קבל מפתח חינמי מ",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "מפתח API AI נשמר",
    aiGroqApiKeyInvalid: "מפתח Groq API לא תקין",
    aiGroqApiKeyNotSet: "לא הוגדר (ברירת מחדל של השרת)",
    aiEnabled: "AI מופעל",
    aiEnabledYes: "כן",
    aiEnabledNo: "לא",
    aiRouteViaNetwork: "ניתוב דרך network.corifeus.com",
    aiRoutingDirect: "השאילתות נשלחות ישירות ל-Groq באמצעות מפתח ה-API שלך, תוך עקיפת network.corifeus.com.",
    aiRoutingNetwork: "שאילתות AI מנותבות דרך network.corifeus.com. אם יש לך מפתח Groq API חינמי משלך, אפשר לכבות את המתג הזה כדי לנתב ישירות ל-Groq ללא network.corifeus.com.",
    aiMaxTokens: "מספר אסימוני AI מרבי",
    aiMaxTokensInfo: "מספר האסימונים המרבי לתגובות AI. ערכים גבוהים יותר מאפשרים תגובות ארוכות יותר, אך עשויים לצרוך יותר קרדיט API.",
    consoleDrawer: {
      toggleTooltip: "החלף את המסוף",
      clearTooltip: "נקה גלילה לאחור",
      closeTooltip: "סגור קונסולה",
      aiSettingsTooltip: "הגדרות AI",
      modeRedis: "REDIS",
      modeAi: "AI",
      connectionChipNoDb: opts => `${opts.name}`,
      connectionChipWithDb: opts => `${opts.name} · db ${opts.db}`,
      pageChip: opts => `עמוד: ${opts.page}`,
      connectingTo: opts => `מתחבר אל ${opts.name}...`,
      connectedTo: opts => `מחובר ל-${opts.name} (Redis ${opts.version} ${opts.mode}, ${opts.modules} מודולים נטענים)`,
      connectedToNoInfo: opts => `מחובר ל-${opts.name}`,
      disconnectedFrom: opts => `מנותק מ-${opts.name}`,
      readyIndicator: "מוכן."
    },
    cheatsheet: {
      title: "AI Cheatsheet - מה אני יכול לשאול?",
      subtitle: "לחץ על כל בקשה כדי להדביק אותה בקונסולה. לאחר מכן הקש Enter.",
      searchPlaceholder: "סינון הנחיות...",
      openOfficialDocs: "Redis פקודות ↗",
      openOfficialDocsTooltip: "פתח את ההפניה הרשמית לפקודות Redis ב-redis.io",
      closeTooltip: "סגור (Esc)",
      empty: "אין הנחיות שתואמות למסנן שלך.",
      footerHint: "טיפ: הקלד \"ai:\" ואחריו כל דבר בכל שפה - ה-AI מבין 54 שפות ומשתמש במצב Redis חי בעת הצורך.",
      groups: {
        diagnostics: {
          name: "אבחון חי",
          description: "בקש מה-AI לחקור את מצב השרת החי באמצעות כלים בטוחים לקריאה בלבד.",
          prompts: [
            "למה הזיכרון גבוה?",
            "הראה לי את 10 השאילתות האיטיות ביותר",
            "אילו לקוחות מחוברים?",
            "מה מדיניות ה-maxmemory?",
            "האם יש פינויים אחרונים?",
            "האם יש אירוע חביון כלשהו?",
            "כמה זמן השרת פתוח?",
            "מה שיעור הפגיעה",
            "הצג שימוש במעבד",
            "לסכם את מרחב המקשים",
            "כמה זיכרון משתמש כל סוג נתונים?",
            "משהו חוסם את השרת כרגע?"
          ]
        },
        keys: {
          name: "מפתחות",
          description: "בדוק, מצא והנמק מפתחות מבלי ללחוץ על העץ.",
          prompts: [
            "מצא את כל המפתחות התואמים user:*",
            "כמה מפתחות בכל מסד נתונים?",
            "הצג את ה-hash הגדול ביותר ב-db הזה",
            "למצוא מפתחות עם TTL פחות מ-60 שניות",
            "לאילו מפתחות אין TTL?",
            "איזה סוג הוא מפתח session:abc?",
            "אומדן זיכרון המשמש את הקידומת \"session:\"",
            "הצג את קידוד האובייקט של מפתח user:42",
            "האם יש מפתחות שעומדים לפוג?",
            "איזה מרחב שמות משתמש הכי הרבה זיכרון?"
          ]
        },
        dataTypes: {
          name: "סוגי נתונים",
          description: "ניסוח בשפה טבעית ליצירה/קריאה/עדכון בכל סוג Redis.",
          prompts: [
            "צור hash בשם user:1 עם שדות name=Alice age=30",
            "הוסף שלושה פריטים לרשימה tasks",
            "הוסף חברים לסט favourites",
            "הוסף חברים עם ניקוד לסט ממוין leaderboard",
            "הוסף אירוע לזרם events",
            "קבל את 10 הערכים האחרונים מהזרם events",
            "קבל את כל השדות של משתמש hash:1",
            "קבל חברים בסט favourites",
            "קבל את הטופ 10 לפי ציון מ-leaderboard"
          ]
        },
        modules: {
          name: "מודולים",
          description: "שאילתות עבור מודולי Redis טעונים (הקטגוריות למטה מופיעות רק כאשר המודול קיים).",
          prompts: []
        },
        json: {
          name: "RedisJSON",
          description: "זמין כאשר מודול ReJSON נטען.",
          prompts: [
            "צור מסמך JSON ב-user:42 עם { שם: \"Alice\", גיל: 30 }",
            "קרא את שדה השם של user:42",
            "עדכן את הגיל של user:42 ל-31",
            "רשום את כל המפתחות JSON",
            "מחק שדה ממסמך JSON",
            "קבל שדה מקונן באמצעות JSONPath"
          ]
        },
        search: {
          name: "RediSearch",
          description: "זמין כאשר מודול החיפוש נטען.",
          prompts: [
            "רשום את כל האינדקסים בטקסט מלא",
            "הפעל חיפוש בטקסט מלא עבור \"redis\" באינדקס idx:products",
            "צור אינדקס מגובב עם כותרת השדות (TEXT) ומחיר (NUMERIC)",
            "קבל מידע על אינדקס idx:products",
            "אינדקס ירידה idx:products",
            "מצא מסמכים שבהם המחיר הוא בין 10 ל-50",
            "כתוב חיפוש היברידי המשלב דמיון וקטורי של טקסט"
          ]
        },
        timeseries: {
          name: "RedisTimeSeries",
          description: "זמין כאשר מודול סדרת הזמן נטען.",
          prompts: [
            "רשום את כל מפתחות סדרת הזמן",
            "הוסף נקודת נתונים ל-temp:room1",
            "קבל את הטווח של temp:room1 מאתמול לעכשיו",
            "קבל ריבוי טווחים לפי תווית sensor=temp",
            "צור 100 נקודות נתונים בגל סינוס עבור temp:room1",
            "הצג שמירה ותוויות עבור temp:room1"
          ]
        },
        bloom: {
          name: "RedisBloom (בלום / קוקיה / Top-K / CMS / T-Digest)",
          description: "זמין כאשר מודול bf נטען.",
          prompts: [
            "בדוק אם פריט foo קיים במסנן פריחה spam:ips",
            "הוסף פריטים למסנן הפריחה spam:ips",
            "צור K-top בשם popular עם K=10",
            "שרטוט ספירת-דקות שאילתה traffic עבור מפתח /home",
            "להוסיף ערכים ל-t-digest ולקבל את האחוזון ה-95",
            "הצג מידע עבור מסנן פריחה spam:ips"
          ]
        },
        vectorSet: {
          name: "VectorSet (Redis 8+)",
          description: "זמין כאשר מזוהה Redis 8+ (סוג מקורי VECTORSET).",
          prompts: [
            "הוסף וקטור לembeddings",
            "מצא את 10 הוקטורים הדומים ביותר לווקטור שאילתה",
            "הצג מידות וספירה של ערכת וקטור embeddings",
            "מחק אלמנט מ-Vectorset embeddings",
            "חפש לפי שם רכיב עם VSIM"
          ]
        },
        redis8: {
          name: "Redis 8+ תכונות",
          description: "מוצג כאשר Redis 8+ מזוהה.",
          prompts: [
            "הגדר שדה hash ttl עם HEXPIRE",
            "קבל את התקציר של ערך מחרוזת",
            "הפעל חיפוש היברידי של טקסט מלא + וקטור (FT.HYBRID)",
            "הגדר מספר מפתחות עם תפוגה משותפת באמצעות MSETEX",
            "מחק ערך זרם עם קבוצת צרכנים (XDELEX)",
            "הצג סטטיסטיקות של משבצות אשכול עבור 10 המשבצות המובילות"
          ]
        },
        scripting: {
          name: "סקריפטים",
          description: "צור סקריפטים Lua / EVAL מתיאורי שפה טבעית.",
          prompts: [
            "כתוב סקריפט אטומי שמגדיל את counter X רק אם Y > 5",
            "צור 100 מפתחות אקראיים עם Lua",
            "המרת צינור מעטפת זה ל-EVAL יחיד: מפתחות user:* | קבל | grep לא פעיל | DEL",
            "העבר פעולת אצווה לLua לבטיחות אשכול",
            "בדוק וקבע עדכון סגנון בקריאה אחת Lua",
            "לחזור על hash ולמחוק שדות התואמים דפוס"
          ]
        },
        cluster: {
          name: "אשכול",
          description: "מוצג רק במצב אשכול.",
          prompts: [
            "הצג מידע על אשכול",
            "רשימת צמתי אשכול",
            "הצג את 10 המשבצות המובילות לפי ספירת מפתחות",
            "הצג את 10 החריצים המובילים לפי זיכרון",
            "לאיזה מאסטר יש חריץ 5000?"
          ]
        },
        acl: {
          name: "ACL (Redis 6+)",
          description: "בדוק את משתמשי בקרת הגישה ואת החיבור הנוכחי.",
          prompts: [
            "למי אני מחובר",
            "רשום את כל משתמשי ACL",
            "איזה הרשאות יש לי",
            "הצג את כללי המשתמש המוגדרים כברירת מחדל"
          ]
        },
        qna: {
          name: "שאלות ותשובות כלליות",
          description: "שאל Redis שאלות ידע - ללא כלים, רק תשובות.",
          prompts: [
            "מה זה ZADD?",
            "איך עובד כשל באשכול?",
            "הסבר SCAN לעומת KEYS",
            "מתי עלי להשתמש ב-EVAL לעומת פקודות מרובות?",
            "מהן אפשרויות ההתמדה Redis?",
            "מה ההבדל בין RDB ל-AOF?",
            "איך Redis Sentinel מחליט על מאסטר חדש?",
            "להסביר תגי hash במצב אשכול"
          ]
        },
        translate: {
          name: "שפה טבעית → פקודת Redis",
          description: "תאר מה אתה רוצה בכל אחת מ-54 שפות; ה-AI כותב את הפקודה Redis.",
          prompts: [
            "מחק מפתח user:42",
            "שנה את שם המפתח foo לסרגל",
            "פג תוקף מפתח session:abc תוך 10 שניות",
            "העתק מקור מפתח ליעד",
            "הגדל את ביקורי הנגד ב-5",
            "הגדר את ברכת המפתח ל-\"hello\" למשך שעה",
            "מחק את כל המפתחות user:*",
            "הראה לי את 10 המפתחות העמוסים ביותר"
          ]
        }
      }
    },
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
    streamTimestampId: `'*' פירושו נוצר אוטומטית או המפרט כ-<millisecondsTime>-<sequenceNumber>`,
    unableToLoadKey: ({
      key
    }) => {
      return `לא ניתן לטעון את המפתח הזה: ${key}. ייתכן, המפתח נמחק. השגיאה המדויקת נמצאת בקונסולה.`;
    },
    bigJson: "אובייקט JSON זה הוא מעל 10 קילובייט, אז ודא שאתה יודע מה אתה עושה, מכיוון שחלק מהפונקציות עשויות להיות בעיבוד איטי.",
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
    aclAuthHint: "השתמש בשם המשתמש והסיסמה של Redis ACL כדי לאמת. השאר ריק עבור משתמש ברירת המחדל ללא סיסמה.",
    tlsWithoutCert: "אפשר TLS ללא אישור נוסף",
    tlsRejectUnauthorized: "דחה אישור לא מורשה",
    tlsSecure: "אם אתה רואה תצורת TLS שמתחילה ב-P3X או שכל הגדרות ה-TLS נראות זהות, זו תכונה מאובטחת. כדי לשנות את ההגדרות, פשוט החליפו את ההגדרות הללו בריקות או במשהו אחר והן יישמרו. אם לא תשנה את הגדרות ה-TLS, ההגדרות יישמרו כפי שהן בשרת.",
    treeSeparatorEmpty: "אם מפריד העצים ריק, לעץ לא יהיו צמתים מקוננים, רק רשימה טהורה",
    treeSeparatorEmptyNote: "אין צמתים מקוננים, רק רשימה טהורה",
    welcomeConsole: "ברוכים הבאים לקונסולת Redis",
    welcomeConsoleInfo: "SHIFT + היסטוריית הסמן למעלה או למטה מופעלת",
    redisListIndexInfo: "ריק כדי להוסיף, -1 כדי להוסיף או לשמור אותו במיקום המוצג.",
    console: "קונסולה",
    connectiondAdd: "הוסף חיבור",
    connectiondEdit: "ערוך חיבור",
    connectiondView: "צפה בחיבור",
    connections: "חיבורים",
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
    languageAuto: "Auto (system)",
    shortcutCommandPalette: "לוח פקודות",
    commandPalette: "לוח פקודות",
    noResults: "אין תוצאות",
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
    type: "סוג",
    format: "פורמט",
    loading: "טוען...",
    autoRefresh: "אוטומטי",
    exportSearchHint: "מייצא רק מפתחות התואמים לחיפוש הנוכחי",
    importSearchHint: "הייבוא חל על כל מסד הנתונים, לא רק על תוצאות החיפוש",
    deleteSearchHint: "מוחק את כל המפתחות התואמים לחיפוש הנוכחי בשרת",
    deletingSearchKeys: "מוחק מפתחות תואמים...",
    importNoKeys: "לא נמצאו מפתחות בקובץ",
    desktopNotifications: "התראות שולחן עבודה",
    desktopNotificationsEnabled: "הפעל התראות שולחן עבודה",
    desktopNotificationsInfo: "קבל התראות מערכת הפעלה על ניתוקים וחיבורים מחדש של Redis כשהאפליקציה לא בפוקוס."
  },
  status: {
    dataCopied: "הנתונים נמצאים בלוח",
    exportDone: "הייצוא הושלם",
    deletedSearchKeys: (opts) => `נמחקו ${opts.count} מפתחות`,
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
    reverted: "\u05e9\u05d5\u05d7\u05d6\u05e8",
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
      return `אינדקס db מוגדר ל ${opts.db}. `;
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
    set: "המפתח מוגדר/נוסף",
    connectionRestored: "החיבור שוחזר",
    socketDisconnected: "מנותק",
    socketError: "שגיאת חיבור",
    deletedHashKey: "מפתח האש נמחק",
    deletedSetMember: "חבר הסט נמחק",
    deletedListElement: "רכיב הרשימה נמחק",
    deletedZSetMember: "חבר הסט הממוין נמחק",
    deletedStreamTimestamp: "רשומת הזרם נמחקה",
  },
  code: {
    "delete-connection": "חיבור זה נמחק, אז אתה מנותק למופע Redis זה.",
    "save-connection": "חיבור זה השתנה, אז אתה מנותק למופע Redis זה. אתה יכול להתחבר מחדש.",
    "readonly-connections": "הוספה/שמירה/מחיקה של חיבורים הם לקריאה בלבד!",
    "readonly-connection-mode": "חיבור זה הוא במצב קריאה בלבד!",
    "list-out-of-bounds": "אינדקס רשימה זה מחוץ לתחום",
    "invalid-json-value": "הערך אינו חוקי JSON.",
    "http_auth_required": "נדרשת הרשאה: נא לאמת עם HTTP Basic Auth וטען מחדש.",
    "auto-connection-failed": "ייתכן, החיבור הוסר והחיבור האוטומטי נכשל, בגלל זה.",
    invalid_console_command: "פקודה זו אינה פועלת דרך ה-GUI.",
    "AI_DISABLED": "AI מושבת. הפעל אותו בהגדרות AI.",
    "AI_PROMPT_REQUIRED": "נדרשת שאילתת AI.",
    "GROQ_API_KEY_READONLY": "מפתח Groq API הוא לקריאה בלבד ולא ניתן לשנותו.",
    "blocked_api_access": "תוכנית Groq API שלך אינה מאפשרת גישה למודל זה. שדרג את תוכנית Groq או השתמש בפרוקסי network.corifeus.com.",
    "rate_limit": "הגעת למגבלת קצב AI. נסה שוב מאוחר יותר או השתמש במפתח Groq API שלך בהגדרות."
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
      keyCount: (opts) => {
        return `מספר מפתחות: ${opts?.keyCount ?? 0}`;
      },
      label: {
        animation: "השתמש באנימציה",
        noAnimation: "אין אנימציה",
        undoEnabled: "\u05d1\u05d9\u05d8\u05d5\u05dc \u05e4\u05e2\u05d9\u05dc",
        undoDisabled: "\u05d1\u05d9\u05d8\u05d5\u05dc \u05de\u05d5\u05e9\u05d1\u05ea",
        diffEnabled: "\u05d4\u05e6\u05d2 diff \u05dc\u05e4\u05e0\u05d9 \u05d4\u05e9\u05de\u05d9\u05e8\u05d4",
        diffDisabled: "diff \u05dc\u05e4\u05e0\u05d9 \u05d4\u05e9\u05de\u05d9\u05e8\u05d4 \u05de\u05d5\u05e9\u05d1\u05ea",
        jsonFormatTwoSpace: "פורמט JSON עם 2 רווחים",
        jsonFormatFourSpace: "פורמט JSON עם 4 רווחים",
        formName: "הגדרות Redis",
        searchModeClient: "מצב חיפוש לקוח",
        searchModeServer: "מצב חיפוש שרת",
        searchModeStartsWith: "חיפוש עם מתחיל עם מצב",
        searchModeIncludes: "החיפוש כולל מצב"
      },
      undoHint: "\u05d4\u05d1\u05d9\u05d8\u05d5\u05dc \u05d6\u05de\u05d9\u05df \u05e8\u05e7 \u05e2\u05d1\u05d5\u05e8 \u05e1\u05d5\u05d2\u05d9 \u05de\u05e4\u05ea\u05d7 string \u05d5-JSON",
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
        value: "ערך",
        errorRate: "שיעור שגיאה",
        capacity: "קיבולת",
        topk: "Top K",
        width: "רוחב",
        depth: "עומק",
        decay: "דעיכה",
        compression: "דחיסה",
        increment: "תוספת",
        item: "פריט",
        vectorValues: "ערכי וקטור (מופרדים בפסיק)",
        element: "שם אלמנט",
      },
      error: {
        streamTimestamp: "חותמת הזמן נדרשת, בפורמט Redis או בתור *",
        key: "המפתח הוא, לפחות, תו אחד",
        hashKey: "מפתח טבלת הגיבוב הוא תו אחד לפחות",
        score: "נדרש ציון הסט הממוין",
        value: "הערך נדרש",
        errorRate: "שיעור השגיאה חייב להיות בין 0 ל-1 (לדוגמה 0.01)",
        capacity: "הקיבולת חייבת להיות מספר שלם חיובי",
        topk: "Top K חייב להיות מספר שלם חיובי",
        width: "הרוחב חייב להיות מספר שלם חיובי",
        depth: "העומק חייב להיות מספר שלם חיובי",
        item: "הפריט נדרש"
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
      hybridMode: "חיפוש היברידי (FT.HYBRID)",
      vectorField: "שדה וקטור",
      vectorValues: "ערכי וקטור",
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
      noSlowQueries: "לא נרשמו שאילתות איטיות.",
      confirmSlowLogReset: "האם אתה בטוח שברצונך לאפס את היומן האיטי?",
      slowLogResetDone: "היומן האיטי אופס.",
      totalCommands: "סה\x22כ",
      expired: "פג תוקף",
      evicted: "פונו",
      clientList: "רשימת לקוחות",
      topKeys: "מפתחות גדולים לפי זיכרון",
      killClient: "סגור לקוח",
      clientKilled: "הלקוח נסגר",
      confirmKillClient: "האם אתה בטוח שברצונך לסגור לקוח זה?",
      noKeys: "אין מפתחות",
      rss: "RSS",
      peak: "שיא",
      fragmentation: "פרגמנטציה",
      hitsAndMisses: "פגיעות / החטאות",
      noClients: "אין לקוחות",
      slotStats: "סטטיסטיקות חריצי אשכול",
      serverInfo: "מידע שרת",
      os: "מערכת הפעלה",
      port: "יציאת רשת",
      pid: "מזהה תהליך",
      configFile: "קובץ תצורה",
      uptime: "זמן פעולה",
      keyspace: "מרווח מפתח Redis",
      keys: "מפתחות Redis",
      expires: "פג תוקף",
      noKeyspace: "אין מפתחות",
      persistence: "התמדה בנתונים",
      rdbLastSave: "שמירה אחרונה של RDB",
      rdbStatus: "סטטוס RDB",
      rdbChanges: "שינויים מאז השמירה האחרונה",
      aofEnabled: "AOF מופעל",
      aofSize: "גודל AOF",
      replication: "שכפול Redis",
      role: "תפקיד שכפול",
      replicas: "העתקים מחוברים",
      masterHost: "מארח ראשי",
      linkStatus: "סטטוס קישור שכפול",
      cpu: "שימוש במעבד",
      cpuSys: "מערכת",
      cpuUser: "משתמש",
      modules: "מודולי Redis טעונים",
      noModules: "לא נטענו מודולי Redis",
      clusterSlotMap: "מפת חריצי אשכול Redis",
      slotRange: "טווח חריצי אשכול",
      totalSlots: "סה\"כ חריצי אשכול",
      noClusterData: "אין נתוני אשכול Redis זמינים.",
    },
    analysis: {
      title: "ניתוח זיכרון",
      runAnalysis: "הפעל ניתוח",
      running: "מנתח...",
      typeDistribution: "התפלגות סוגים",
      prefixMemory: "זיכרון לפי קידומת",
      topKeysByMemory: "מפתחות גדולים לפי זיכרון",
      expirationOverview: "תפוגת מפתחות",
      memoryBreakdown: "פירוט זיכרון",
      keysScanned: "מפתחות שנסרקו",
      totalMemory: "זיכרון כולל",
      rssMemory: "זיכרון RSS",
      peakMemory: "זיכרון שיא",
      luaMemory: "זיכרון Lua",
      overheadMemory: "עלות נוספת",
      datasetMemory: "מערך נתונים",
      fragmentation: "פרגמנטציה",
      allocator: "מקצה",
      withTTL: "עם TTL",
      persistent: "קבועים",
      avgTTL: "TTL ממוצע",
      prefix: "קידומת",
      keyCount: "מספר מפתחות",
      memoryUsage: "שימוש בזיכרון",
      noPrefix: "(ללא קידומת)",
      topN: "Top N",
      maxScanKeys: "מקס. מפתחות לסריקה",
      type: "סוג",
      noData: "אין נתונים. לחץ על הפעל ניתוח כדי להתחיל.",
      exportAll: "ייצוא הכל",
      memoryDoctor: "Memory Doctor",
      doctorNoData: "לחץ על רענן כדי להפעיל אבחון Memory Doctor.",
    },
    acl: {
      title: "משתמשי ACL",
      loadUsers: "טען משתמשים",
      loading: "טוען...",
      username: "שם משתמש",
      status: "סטטוס",
      enabled: "מופעל",
      disabled: "מושבת",
      commands: "פקודות",
      commandsHint: "למשל, +@all or +@read -@dangerous",
      keys: "דפוסי מפתחות Redis",
      keysHint: "למשל, ~* or ~user:*",
      channels: "ערוצי Pub/Sub",
      channelsHint: "למשל, &* or &notifications:*",
      password: "סיסמה",
      noPassword: "אין סיסמה (nopass)",
      passwordHint: "השאר ריק כדי לשמור את הסיסמה הנוכחית",
      currentUser: "נוכחי",
      createUser: "צור משתמש",
      editUser: "ערוך משתמש",
      deleteUser: "מחק",
      confirmDelete: "האם אתה בטוח שברצונך למחוק את משתמש ACL?",
      userDeleted: "המשתמש ACL נמחק.",
      userSaved: "המשתמש ACL נשמר.",
      cannotDeleteDefault: "לא ניתן למחוק את משתמש ברירת המחדל.",
      cannotDeleteSelf: "לא ניתן למחוק את המשתמש המחובר כעת.",
      noUsers: "ACL דורש Redis 6.0+.",
      groupCommon: "כללי",
      groupDataTypes: "סוגי נתונים",
      groupOperations: "פעולות",
      rules: "כללים",
      rulesHint: "אסימונים מופרדים ברווחים (לדוגמה on >password +@all ~* &*)",
      defaultUserWarning: "זהירות: שינוי משתמש ברירת המחדל יכול לנעול את כל החיבורים. אם זה קורה, יהיה עליך להפעיל מחדש את Redis או להשתמש ב-redis-cli כדי לשחזר את הגישה.",
    },
    overview: {
      noConnected: "אין חיבור ל-Redis.",
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
        compression: "דחיסה",
        aiRateLimited: "הגעת למגבלת הבקשות של AI. נסה שוב מאוחר יותר או השתמש במפתח Groq API שלך בהגדרות.",
        aiError: "שאילתת AI נכשלה",
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
      },
      timeseries: {
        chart: "תרשים",
        info: "מידע",
        addPoint: "הוסף נקודת נתונים",
        from: "מ- (ms או -)",
        to: "עד (ms או +)",
        aggregation: "צבירה",
        timeBucket: "דלי (ms)",
        none: "ללא",
        dataPoints: "נקודות נתונים",
        labels: "תוויות",
        rules: "כללים",
        retention: "שמירה",
        timestamp: "חותמת זמן",
        value: "ערך",
        retentionHint: "0 = ללא תפוגה, או מילישניות",
        duplicatePolicy: "מדיניות כפילויות",
        labelsHint: "key1 value1 key2 value2",
        timestampHint: "'*' פירושו נוצר אוטומטית, או חותמת זמן במילישניות",
        editAllHint: "נקודת נתונים אחת בכל שורה: חותמת_זמן ערך (חותמת הזמן יכולה להיות * לאוטומטי)",
        autoSpread: "מרווח פיזור אוטומטי *",
        formula: "נוסחה",
        formulaLinear: "ליניארי",
        formulaRandom: "אקראי",
        formulaSawtooth: "שן מסור",
        formulaPoints: "נקודות",
        formulaAmplitude: "משרעת",
        formulaOffset: "היסט",
        generate: "צור",
        exportChart: "ייצא PNG",
        overlay: "שכבות מפתחות",
        overlayHint: "מפתחות מופרדים בפסיק",
        mrangeFilter: "סינון תוויות",
        bulkMode: "יצירה המונית",
        mrangeHint: "לדוגמה sensor=temp"
      },
      probabilistic: {
        info: "מידע",
        addItem: "הוסף פריט",
        checkItem: "בדוק פריט",
        item: "פריט",
        exists: "קיים",
        doesNotExist: "לא קיים",
        topkList: "פריטים מובילים",
        topkCount: "ספירה",
        queryCount: "ספירת שאילתות",
        queryResult: "תוצאת שאילתה",
        addedSuccessfully: "הפריט נוסף בהצלחה",
        deletedSuccessfully: "הפריט נמחק בהצלחה",
        quantile: "אחוזון",
        quantileResult: "תוצאה",
        noItems: "אין פריטים להצגה",
        resetConfirm: "לאפס את כל הנתונים ב-T-Digest הזה?",
      },
      vectorset: {
        info: "מידע",
        elements: "אלמנטים",
        similarity: "חיפוש דמיון",
        searchByElement: "חיפוש לפי אלמנט",
        searchByVector: "חיפוש לפי וקטור",
        vectorValues: "ערכי וקטור",
        element: "אלמנט",
        score: "ציון",
        count: "ספירה",
        addElement: "הוסף אלמנט",
        attributes: "תכונות",
        noAttributes: "אין תכונות",
        dimensions: "ממדים",
        removeConfirm: "להסיר אלמנט זה מה-VectorSet?",
        noElements: "אין אלמנטים",
        filter: "סינון",
        searchComplete: "החיפוש הושלם",
      }
    },
    treeControls: {
      settings: "הגדרות עץ",
      expandAll: "הרחב הכל",
      collapseAll: "כווץ הכל",
      level: "רמה",
      search: {
        search: "חפש במפתחות",
        clear: "נקה את החיפוש הנוכחי כדי להגדיר ריק",
        placeholderClient: "חפש בצד הלקוח",
        placeholderServer: "חפש בצד השרת",
        info: (opts) => "החיפוש בצד הלקוח אומר שהוא מתאים לטקסט בקלט החיפוש. פירוש החיפוש בצד השרת הוא, כלומר כמו חיפוש בתבניות המפתחות כמו *{חיפוש-טקסט}*. עבור מערכי חיפוש גדולים, עדיף להשתמש בחיפוש בצד השרת. עבור קבוצות חיפוש קטנות יותר, עדיף להשתמש במצב חיפוש בצד הלקוח." + ` אם ספירת המפתחות הסתיימה ${opts?.maxLightKeysCount ?? 110000}, אתה יכול לחפש רק בצד השרת.`,
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
    years: "שנים",
    months: "חודשים",
    days: "ימים",
    year: "שנה",
    month: "חודש",
    day: "יום",
    second: "שנייה",
    seconds: "שניות",
    minute: "דקה",
    minutes: "דקות",
    hour: "שעה",
    hours: "שעות"
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
    bloom: "Bloom מסנן",
    cuckoo: "Cuckoo מסנן",
    topk: "Top-K",
    cms: "Count-Min Sketch",
    tdigest: "T-Digest",
    vectorset: "VectorSet",
  },
  promo: {
    title: "AI עוזר רשת",
    description: "גלה את עוזר הרשת AI החינמי שלנו ב-network.corifeus.com - נתח דומיינים, IPs, רשומות DNS, אישורי SSL, אבטחת דוא\"ל ותשתית רשת. מופעל על ידי AI לתוצאות מיידיות ומקיפות.",
    disclaimer: "קידום זה מוצג רק באתר ההדגמה ולא יופיע בפריסות Docker, Electron או אפליקציות אינטרנט.",
    toastMessage: "נסה את עוזר הרשת AI החינמי שלנו ב-network.corifeus.com - נתח דומיינים, DNS, SSL ועוד!",
    visit: "בקר ב-network.corifeus.com"
  }
};
module.exports = strings;
