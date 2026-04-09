const strings = {
  error: {
    server_error: "Server xətası, yenidən cəhd edin",
    aiPromptTooLong: "AI sorğusu çox uzundur (maksimum 4096 simvol)",
  },
  title: {
    donate: "Bağışlayın",
    donateTitle: "P3X Redis UI-ni dəstəkləyin",
    donateDescription: "P3X Redis UI pulsuz, açıq mənbəli layihədir. Tətbiqin, AI funksiyalarının, Docker təsvirlərinin, serverlərin və infrastrukturun saxlanma xərcləri tərtibatçının öz cibindən ödənilir. Bu aləti faydalı hesab edirsinizsə, inkişafını dəstəkləmək üçün ianə etməyi düşünün. Hər bir töhfə layihənin yaşamasına və böyüməsinə kömək edir. Təşəkkürlər!",
    jsonRecursive: "Bütün yarpaqları genişləndirmək",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "Siz sol alt menyudan qoşulmaq üçün Redis bağlantısını seçə bilərsiniz.",
    statistics: "Statistika",
    error: "Xəta",
    connectingRedis: "Redis-ə qoşulur...",
    socketioConnectError: "Socket.IO Xətası",
    db: "DB",
    server: "Server",
    clients: "Müştərilər",
    memory: "Yaddaş",
    persistence: "Əzmkarlıq",
    stats: "Statistika",
    replication: "Replikasiya",
    cpu: "CPU",
    cluster: "Cluster",
    modules: "Modullar",
    errorstats: "Xəta Statistikaları",
    commandstats: "Əmr Statistikaları",
    latencystats: "Gecikmə Statistikaları",
    keysizes: "Açar Ölçüləri",
    threads: "Mövzular"
  },
  confirm: {
    dropIndex: "Bu indeksi silmək istədiyinizə əminsiniz?",
    uploadBuffer: "Bu ikili datanı yükləməyinizə əminsiniz?",
    uploadBufferDone: "İkili məlumatlar yüklənir",
    uploadBufferDoneAndSave: "Binar məlumatlar yüklənir və serverdə saxlanılır",
    title: "Təsdiq edin",
    alert: "Xəbərdarlıq",
    info: "Məlumat",
    deleteListItem: "Bu siyahı elementini siləcəyinizə əminsiniz?",
    deleteHashKey: "Bu heş açar elementini siləcəyinizə əminsiniz?",
    deleteStreamTimestamp: "Bu yayımın vaxt damğasını siləcəyinizə əminsiniz?",
    deleteSetMember: "Bu qrup üzvünü siləcəyinizə əminsiniz?",
    deleteZSetMember: "Bu çeşidlənmiş qrup üzvünü siləcəyinizə əminsiniz?",
    deleteConnection: "Təsdiq edin",
    deleteConnectionText: "Bu Redis bağlantısını siləcəyinizə əminsiniz?",
    deleteNode: "Bu Redis qovşağını siləcəyinizə əminsiniz?",
    delete: "Silinsin?",
    deleteAllKeys: opts => {
      return `Bu ağacı və onun bütün açarlarını silin (${opts.key})?`;
    },
    deleteSearchKeys: opts => {
      return `"${opts.pattern}" ilə uyğun gələn bütün açarları silmək istədiyinizə əminsiniz? ${opts.count} açar tapıldı.`;
    },
    socketioConnectError: "Socket.IO serverə qoşula bilmir, siz yenidən yükləyə və qoşulma xətasını özünüz həll etməyə cəhd edə bilərsiniz, müştəri özü bunu necə həll edəcəyini bilmir.",
    socketioAuthRequired: "Socket.IO icazəsi tələb olunur. HTTP Basic Auth (istifadəçi adı/parol) ilə autentifikasiya edin və yenidən yükləyin.",
    invalidCredentials: "İstifadəçi adı və ya şifrə yanlışdır.",
    deleteKey: "Bu açarı siləcəyinizə əminsiniz?",
    rename: {
      title: "Bu açarın adını dəyişəcəyinizə əminsiniz?",
      textContent: "Bu əməliyyat açarın adını həmişəlik dəyişdirir.",
      placeholder: "Redis açarı (tələb olunur)"
    },
    ttl: {
      title: "Bu açarın TTL-ni dəyişmək istədiyinizə əminsiniz?",
      textContent: "TTL-nin dəyişdirilməsi bu açarın yaşamaq vaxtını yeniləyir. Bu açarı həmişəlik saxlamaq üçün boş buraxın.",
      placeholder: "Redis açarının TTL (tam və ya boş)",
      placeholderPlaceholder: "Boş o deməkdir ki, əbədi qalacaq; əks halda tam ədəd daxil edin.",
      convertTextToTime: "Mətni zamana çevirin",
      convertTextToTimePlaceholder: "Məs. 1d 86400 olacaq"
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
    copy: "Kopyalayın",
    downloadBuffer: "İkili faylı yükləyin",
    setBuffer: "İkili yükləyin",
    exportKeys: "Açarları ixrac et",
    exportAllKeys: (opts) => `Bütün ${opts.count} açarı ixrac et`,
    exportSearchResults: (opts) => `${opts.count} nəticəni ixrac et`,
    deleteAllKeysMenu: (opts) => `Hamısını sil ${opts.count}`,
    importKeys: "Açarları idxal et",
    deleteSearchKeys: (opts) => `${opts.count} uyğun açarı sil`,
    saveWithFormatJson: "Formatla yadda saxlayın",
    formatJson: "Json formatı",
    wrap: "Sarın",
    unwrap: "Açın",
    downloadJson: "JSON yükləyin",
    pubsubMonitor: "PubSub",
    pulse: "Pulse",
    profiler: "Profiler",
    memoryAnalysis: "Analysis",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "Dil",
    ok: "OK",
    addKey: "Bu açara əlavə edin",
    addKeyRoot: "Kök açarı əlavə edin",
    reloadKey: "Açarı yenidən yükləyin",
    reload: "Yenidən yükləyin",
    close: "Bağlayın",
    commands: "Əmrlər",
    view: "Baxın",
    statistics: "Statistika",
    refresh: "Yeniləyin",
    pause: "Pauza",
    resume: "Davam et",
    clear: "Təmiz",
    rename: "Adını dəyişdirin",
    main: "Verilənlər bazası",
    cancel: "Ləğv et",
    theme: "Mövzu",
    github: "GitHub",
    githubRepo: "Repozitoriya",
    githubRelease: "Buraxılışlar",
    githubChangelog: "Dəyişikliklər jurnalı",
    info: "Info",
    settings: "Parametrlər",
    connect: "Qoşun",
    disconnect: "Bağlantını kəsin",
    logout: "Çıxış",
    overview: "Ümumi baxış",
    console: "Konsol",
    noConnections: "Bağlantı yoxdur, parametrlər menyusunda əlaqə əlavə edin.",
    noConnectionsInSettings: "Bağlantı yoxdur, yuxarıda YENİ ƏLAQƏ əlavə edə bilərsiniz.",
    connectionAdd: "Yeni əlaqə",
    addGroup: "Qrup əlavə et",
    extend: "Uzatmaq",
    collapse: "Yıxılma",
    add: "Əlavə et",
    edit: "Redaktə et",
    save: "Saxla",
    ttl: "TTL təyin edin",
    fieldTtl: "Sahə TTL",
    digest: "Xülasə",
    delete: "Sil",
    remove: "Sil",
    areYouSure: "Əminsiniz?",
    sure: "Əlbəttə",
    testConnection: "Test bağlantısı",
    getKey: "Redis açarı və əlaqəli data yüklənir...",
    jsonViewShow: "JSON göstərin",
    jsonViewEditor: "JSON redaktə edin",
    quickConsole: "Sürətli Konsol",
    moveUp: "Yuxarı daşı",
    moveDown: "Aşağı daşı"
  },
  label: {
    id: {
      nodeId: "Node ID",
      id: "Bağlantı ID",
      info: "Əgər aşağıdakıların xassələrini dəyişmək istəmirsinizsə: sshPassword, sshPrivateKey, password, tlsCrt, tlsKey, tlsCa, xassə dəyərlərinin toxunulmazlığını qorumaq üçün lütfən, əlaqənin identifikatorunu həmin xüsusiyyətlərə daxil edin. Əgər qovşaq parolunda eyni məntiqin olmasını istəyirsinizsə, onda node parolunda node ID-ni daxil edin."
    },
    secureFeature: "P3X ilə başlayan dəyərin eyni göründüyünü görsəniz, bu təhlükəsiz xüsusiyyətdir. Parametrləri dəyişdirmək üçün sadəcə bu parametrləri boş və ya başqa bir şeylə əvəz edin və onlar yadda saxlanılacaq. Parametrləri dəyişdirməsəniz, parametrlər serverdə olduğu kimi saxlanılacaq.",
    aiTranslating: "Tərcümə edilir...",
    aiSettings: "AI Parametrlər",
    aiGroqApiKey: "Groq API açarı",
    aiGroqApiKeyInfo: "İstəyə bağlı. Daha yaxşı performans üçün öz Groq API açarınız. Pulsuz açar əldə edin",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "AI API açarı saxlanıldı",
    aiGroqApiKeyInvalid: "Yanlış Groq API açarı",
    aiGroqApiKeyNotSet: "Təyin edilməyib (server standartı)",
    aiEnabled: "AI aktivdir",
    aiEnabledYes: "Bəli",
    aiEnabledNo: "Xeyr",
    aiRouteViaNetwork: "network.corifeus.com vasitəsilə yönləndir",
    aiRoutingDirect: "Sorğular öz API açarınızdan istifadə edərək birbaşa Groq-a göndərilir, network.corifeus.com yan keçilir.",
    aiRoutingNetwork: "AI sorğuları network.corifeus.com vasitəsilə yönləndirilir. Öz pulsuz Groq API açarınız varsa, bu açarı söndürüb network.corifeus.com olmadan birbaşa Groq-a yönləndirə bilərsiniz.",
    aiMaxTokens: "AI maksimum tokenləri",
    aiMaxTokensInfo: "AI cavabları üçün maksimum token sayı. Daha yüksək dəyərlər daha uzun cavablara imkan verir, lakin daha çox API krediti istifadə edə bilər.",
    ssh: {
      on: "SSH aktivdir",
      off: "SSH deaktivdir",
      sshHost: "SSH Host",
      sshPort: "SSH portu",
      sshUsername: "SSH istifadəçi adı",
      sshPassword: "SSH parol",
      sshPrivateKey: "SSH şəxsi açar"
    },
    isBuffer: opts => `[object ArrayBuffer] dəyərin ikili məlumat olduğunu və ya dəyərin ondan böyük olduğunu bildirir ${opts.maxValueAsBuffer}`,
    streamValue: `Yayım sahəsi və dəyəri bir laynerdir. Məsələn: sahə1 dəyər1 "sahə 2" "dəyər 2"`,
    streamTimestampId: `'*' avtomatik yaradılan və ya <millisecondsTime>-<sequenceNumber> kimi spesifikasiya deməkdir`,
    unableToLoadKey: ({
      key
    }) => {
      return `Bu açarı yükləmək mümkün deyil: ${key}. Mümkündür, açar silinib. Dəqiq səhv konsoldadır.`;
    },
    bigJson: "Bu JSON obyekti 10 kb-dən çoxdur, ona görə də nə etdiyinizi bildiyinizə əmin olun, çünki bəzi funksiyalar ləngiyə bilər.",
    addNode: "Düyün əlavə edin",
    validateJson: "JSON-ni təsdiq edin",
    reducedFunction: `Azaldılmış funksionallıq`,
    tooManyKeys: opts => {
      return `Tam maksimum funksiyalar üçün icazə verilən düymələrin cəmidir ${opts.maxLightKeysCount} saymaq. Bu verilənlər bazasında cəmi icazə verilən açarlar var ${opts.count}. Açar çeşidləmə və əlavə bəzəkli ağac məlumatı deaktiv edilib. Axtarış müştəri axtarışı əvəzinə yalnız serverdə baş verir.`;
    },
    redisCommandNotFound: "Redis komanda uyğunluğu tapılmadı...",
    treeKeyStore: `Çeşidləmə (təbii müqayisə) müştəri aka brauzerdə həyata keçirilir, yəni 10k-dan çox düymələr kimi böyük böyük dəstlər üçün cəzası var, səhifənin göstərilməsinə bir az vaxt əlavə edə bilər. Redis-də əsas çeşidləmə yoxdur, yalnız belədir.`,
    socketIoTimeout: options => {
      return `Socket.IO bu sorğu üçün vaxtı keçdi (maks ${options.timeout / 1000} saniyə)...`;
    },
    resizerInfo: options => {
      return `Sol və ya sağ panelin minimum eni ${options.width}px`;
    },
    jsonViewNotParsable: "Bu dəyər JSON parsable deyil  ",
    ttlTitle: "TTL-ni saniyəyə təyin edin",
    passwordSecure: "Parol boş ola bilər, lakin yenə də simvolları göstərəcək, bu təhlükəsizlik xüsusiyyətidir.",
    tlsWithoutCert: "Əlavə sertifikat olmadan TLS-ni aktivləşdirin",
    tlsRejectUnauthorized: "İcazəsiz sertifikatı rədd edin",
    tlsSecure: "P3X ilə başlayan TLS konfiqurasiyasını görürsünüzsə və ya bütün TLS parametrləri eyni kimi görünürsə, bu, təhlükəsiz xüsusiyyətdir. Parametrləri dəyişdirmək üçün sadəcə bu parametrləri boş və ya başqa bir şeylə əvəz edin və onlar yadda saxlanılacaq. TLS parametrlərini dəyişdirməsəniz, parametrlər serverdə olduğu kimi saxlanılacaq.",
    treeSeparatorEmpty: "Ağac ayırıcı boşdursa, ağacın iç içə qovşaqları olmayacaq, sadəcə təmiz siyahı olacaq",
    treeSeparatorEmptyNote: "İçəri daxil edilmiş qovşaqlar yoxdur, sadəcə təmiz siyahıdır",
    welcomeConsole: "Redis Konsoluna xoş gəlmisiniz",
    welcomeConsoleInfo: "Kursor YUKARI və ya AŞAĞI tarix aktivləşdirilib",
    redisListIndexInfo: "Əlavə etmək üçün boş, yuxarıya əlavə etmək və ya göstərilən mövqeyə saxlamaq üçün -1.",
    console: "Konsol",
    connectiondAdd: "Bağlantı əlavə edin",
    connectiondEdit: "Bağlantını redaktə edin",
    connectiondView: "Bağlantıya baxın",
    connections: "Əlaqələr",
    keysSort: {
      on: "Açar çeşidlənməsi aktivdir",
      off: "Açarın çeşidlənməsi"
    },
    cluster: {
      on: "Cluster aktivdir",
      off: "Cluster deaktivdir"
    },
    sentinel: {
      on: "Sentinel aktivdir",
      off: "Sentinel deaktivdir",
      name: "Sentinel adı"
    },
    readonly: {
      on: "Yalnız oxumaq aktivdir",
      off: "Yalnız oxumaq deaktivdir"
    },
    theme: {
      light: "İşıq",
      dark: "Qaranlıq müəssisə",
      darkNeu: "Qaranlıq",
      darkoBluo: "Darko mavi",
      enterprise: "Müəssisə",
      redis: "Redis",
      matrix: "Matris"
    },
    connected: opts => {
      return `Qoşuldu: ${opts.name}`;
    },
    tree: "Ağac",
    askAuth: "İcazə tələb edin",
    keyboardShortcuts: "Keyboard Shortcuts",
    about: "About",
    supportedLanguages: "Supported Languages",
    version: "Version",
    redisVersion: "Redis Version",
    modules: "Modullar",
    shortcutRefresh: "Refresh",
    shortcutSearch: "Focus Search",
    shortcutNewKey: "New Key",
    shortcutDisconnect: "Bağlantını kəsin",
    themeAuto: "Auto (system)",
    languageAuto: "Auto (system)",
    shortcutCommandPalette: "Əmr palitrası",
    commandPalette: "Əmr palitrası",
    noResults: "Nəticə yoxdur",
    redisCommandsReference: "Redis Əmrləri",
    ungrouped: "Qruplaşdırılmamış",
    grouped: "Grouped",
    connectFirst: "Əvvəlcə Redis serverinə qoşulun",
    searchLanguage: "Dil axtar...",
    exportProgress: "Açarlar ixrac edilir...",
    importProgress: "Açarlar idxal edilir...",
    importPreview: "Önizləmə",
    importOverwrite: "Üzərinə yaz",
    importSkip: "Keç",
    importConflict: "Açar artıq mövcuddursa:",
    noKeysToExport: "İxrac üçün açar yoxdur",
    time: "Vaxt",
    type: "Növ",
    format: "Format",
    loading: "Yüklənir...",
    autoRefresh: "Avto",
    exportSearchHint: "Yalnız cari axtarışa uyğun açarlar ixrac edilir",
    importSearchHint: "İdxal bütün verilənlər bazasına tətbiq olunur, yalnız axtarış nəticələrinə deyil",
    deleteSearchHint: "Serverdəki cari axtarışa uyğun bütün açarları silir",
    deletingSearchKeys: "Uyğun açarlar silinir...",
    importNoKeys: "Faylda açar tapılmadı",
    desktopNotifications: "Masaüstü Bildirişləri",
    desktopNotificationsEnabled: "Masaüstü bildirişlərini aktiv edin",
    desktopNotificationsInfo: "Redis bağlantısı kəsilərkən və ya yenidən qoşularkən, tətbiq fokusdankənar olduqda ƏS bildirişləri alın."
  },
  status: {
    dataCopied: "Məlumat mübadilə buferindədir",
    exportDone: "İxrac tamamlandı",
    deletedSearchKeys: (opts) => `${opts.count} açar silindi`,
    indexCreated: "İndeks yaradıldı",
    indexDropped: "İndeks silindi",
    importDone: (opts) => `İdxal tamamlandı: ${opts.created} yaradıldı, ${opts.skipped} keçildi, ${opts.errors} xəta`,
    nodeRemoved: "Düyün silindi",
    keyIsNotExisting: "Bu açar silinmiş və ya vaxtı keçmiş ola bilərdi.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "Açar yoxdur";
      } else if (opts.keyCount === 1) {
        return "1 açar";
      } else {
        return `${opts.keyCount} açarlar`;
      }
    },
    treeExpandAll: "Bütün ağac yarpaqlarını genişləndirin. Bu əməliyyat bahalı ola bilər və vaxt apara bilər...",
    noRedisKeys: "Bu verilənlər bazasında heç bir açar yoxdur.",
    redisConnected: "Redis uğurla qoşuldu",
    reloadingDataInfo: "Redis məlumatı yenidən yüklənir",
    added: "Əlavə edilib",
    saved: "Yenilənib",
    cancelled: "Ləğv edildi",
    deleted: "Silindi",
    savedRedis: "Redis məlumatı saxlanılır",
    redisDisconnected: opts => {
      return `Cari əlaqədə xəta baş verdi: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `db indeksi təyin edildi ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `Ağac açarı silindi (${opts.key}).`;
    },
    deletedKey: opts => {
      return `Açar silindi (${opts.key}).`;
    },
    renamedKey: "Bu açarın adı dəyişdirilib",
    ttlChanged: "Bu açarın TTL dəyişdirildi",
    notInteger: "Bu daxiletmə tam ədəd deyil",
    persisted: "Bu açar əbədi olaraq qalır",
    set: "Açar quraşdırılıb/əlavə edilib",
    connectionRestored: "Bağlantı bərpa edildi"
  },
  code: {
    "delete-connection": "Bu əlaqə silindi, ona görə də siz bu Redis nümunəsi ilə əlaqəni kəsdiniz.",
    "save-connection": "Bu əlaqə dəyişdirildi, ona görə də siz bu Redis nümunəsi ilə əlaqəni kəsdiniz. Yenidən qoşula bilərsiniz.",
    "readonly-connections": "Əlavə etmək/saxlamaq/silmək əlaqələri yalnız oxunur!",
    "readonly-connection-mode": "Bu əlaqə yalnız oxumaq rejimidir!",
    "list-out-of-bounds": "Bu siyahı indeksi həddən kənardır",
    "invalid-json-value": "Dəyər etibarlı deyil JSON.",
    "http_auth_required": "Avtorizasiya tələb olunur: HTTP Basic Auth ilə autentifikasiya edin və yenidən yükləyin.",
    "auto-connection-failed": "Mümkündür ki, bu səbəbdən əlaqə silindi və avtomatik qoşulma uğursuz oldu.",
    invalid_console_command: "Bu əmr GUI vasitəsilə işləmir.",
    "AI_DISABLED": "AI deaktivdir. AI Parametrlərindən aktivləşdirin.",
    "AI_PROMPT_REQUIRED": "AI sorğusu tələb olunur.",
    "GROQ_API_KEY_READONLY": "Groq API açarı yalnız oxunur və dəyişdirilə bilməz.",
    "blocked_api_access": "Groq API planınız bu modelə girişə icazə vermir. Groq planınızı yüksəldin və ya network.corifeus.com proksisindən istifadə edin.",
    "rate_limit": "AI limit həddinə çatıldı. Daha sonra yenidən cəhd edin və ya Parametrlərdə öz Groq API açarınızı istifadə edin."
  },
  form: {
    error: {
      required: "Tələb olunur",
      port: "Liman 1-65535 arasındadır",
      invalid: "Forma etibarsızdır"
    },
    connection: {
      label: {
        name: "ad",
        group: "Group",
        host: "Host adı",
        port: "liman",
        password: "parol",
        username: "İstifadəçi adı"
      }
    },
    treeSettings: {
      maxValueDisplay: "Maksimum dəyər ekran uzunluğu",
      maxValueDisplayInfo: "0-a təyin edilərsə, tam dəyərləri göstərin. 0-dan böyükdürsə, bu uzunluğa qədər kəsin. Əgər -1: sətirlər üçün, redaktəyə qədər dəyəri gizlədin; digər növlər üçün tam məzmunu göstərin.",
      maxKeys: "Maksimum açar sayı",
      maxKeysInfo: "GUI qəzaya uğramaması üçün maksimum açar sayını məhdudlaşdırırıq.",
      keyCount: (opts) => {
        return `Açarların sayı: ${opts?.keyCount ?? 0}`;
      },
      label: {
        animation: "Animasiyadan istifadə edin",
        noAnimation: "Animasiya yoxdur",
        jsonFormatTwoSpace: "JSON-ni 2 boşluqla formatlayın",
        jsonFormatFourSpace: "JSON-ni 4 boşluqla formatlayın",
        formName: "Redis parametrləri",
        searchModeClient: "Müştəri axtarış rejimi",
        searchModeServer: "Server axtarış rejimi",
        searchModeStartsWith: "Axtarış rejimi ilə başlayır",
        searchModeIncludes: "Axtarış rejimi daxildir"
      },
      field: {
        treeSeparator: "Ağac ayırıcı",
        treeSeparatorSelector: "Ağac ayırıcı seçici",
        page: "Ağac səhifələmə sayı",
        keyPageCount: "Açar səhifələmə sayı",
        keysSort: "Açarları sıralayın",
        searchMode: "Axtarış rejimi",
        searchModeStartsWith: "Axtarış / daxildir ilə başlayır"
      },
      error: {
        keyPageCount: "Açar səhifələrin sayı 5 - 100 arasında tam ədəd olmalıdır",
        page: "Səhifə sayı 10 - 5000 arasında tam ədəd olmalıdır",
        maxValueDisplay: "Maksimum ekran dəyəri -1 və 32768 arasında tam ədəd olmalıdır",
        maxKeys: "Maksimum açar sayma dəyəri 100 ilə 100000 arasında tam ədəd olmalıdır"
      }
    },
    key: {
      label: {
        formName: {
          add: "Yeni Redis açarı əlavə edin",
          edit: "Redis düyməsini redaktə edin",
          append: "Mövcud Redis açarına əlavə edin"
        }
      },
      field: {
        streamTimestamp: "Vaxt möhürü",
        key: "Açar",
        type: "Növ",
        index: "indeks",
        hashKey: "Hash açarı",
        score: "Hesab",
        value: "Dəyər",
        errorRate: "Xəta dərəcəsi",
        capacity: "Tutum",
        topk: "Top K",
        width: "En",
        depth: "Dərinlik",
        decay: "Azalma",
        compression: "Sıxılma",
        increment: "Artım",
        item: "Element",
        vectorValues: "Vektor dəyərləri (vergüllə ayrılmış)",
        element: "Element adı",
      },
      error: {
        streamTimestamp: "Zaman damğası ya Redis formatında, ya da * kimi tələb olunur",
        key: "Əsas odur ki, ən azı bir simvol",
        hashKey: "Hash cədvəlinin açarı ən azı bir simvoldur",
        score: "Çeşidlənmiş xal tələb olunur",
        value: "Dəyər tələb olunur",
        errorRate: "Xəta dərəcəsi 0 ilə 1 arasında olmalıdır (məs. 0.01)",
        capacity: "Tutum müsbət tam ədəd olmalıdır",
        topk: "Top K müsbət tam ədəd olmalıdır",
        width: "En müsbət tam ədəd olmalıdır",
        depth: "Dərinlik müsbət tam ədəd olmalıdır",
        item: "Element tələb olunur"
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
      title: "Axtarış",
      index: "İndeks",
      query: "Sorğu",
      results: "Nəticələr",
      noIndex: "İndeks tapılmadı",
      createIndex: "İndeks yarat",
      dropIndex: "İndeksi sil",
      indexInfo: "İndeks məlumatı",
      indexName: "İndeks adı",
      prefix: "Açar prefiksi (isteğe bağlı)",
      fieldName: "Sahə adı",
      hybridMode: "Hibrid Axtarış (FT.HYBRID)",
      vectorField: "Vektor sahəsi",
      vectorValues: "Vektor dəyərləri",
    },
    monitor: {
      title: "Monitorinq",
      memory: "Yaddaş",
      opsPerSec: "Əməliyyat/san",
      clients: "Müştərilər",
      blocked: "Bloklanmış",
      hitsMisses: "İsabət dərəcəsi",
      networkIo: "Şəbəkə I/O",
      slowLog: "Yavaş jurnal",
      totalCommands: "Cəmi",
      expired: "Müddəti bitmiş",
      evicted: "Çıxarılmış",
      clientList: "Müştəri siyahısı",
      topKeys: "Yaddaşa görə ən böyük açarlar",
      killClient: "Müştərini öldür",
      clientKilled: "Müştəri öldürüldü",
      confirmKillClient: "Bu müştərini dayandırmaq istədiyinizə əminsiniz?",
      noKeys: "Açar yoxdur",
      rss: "RSS",
      peak: "Pik",
      fragmentation: "Fraqmentasiya",
      hitsAndMisses: "Uğurlu / Uğursuz",
      noClients: "Müştəri yoxdur",
      slotStats: "Klaster slot statistikası",
    },
    analysis: {
      title: "Yaddaş Analizi",
      runAnalysis: "Analizi Başlat",
      running: "Analiz edilir...",
      typeDistribution: "Tip Paylanması",
      prefixMemory: "Prefiksə görə Yaddaş",
      topKeysByMemory: "Yaddaşa görə Ən Böyük Açarlar",
      expirationOverview: "Açar Müddəti",
      memoryBreakdown: "Yaddaş Bölgüsü",
      keysScanned: "Skan Edilən Açarlar",
      totalMemory: "Ümumi Yaddaş",
      rssMemory: "RSS Yaddaş",
      peakMemory: "Pik Yaddaş",
      luaMemory: "Lua Yaddaş",
      overheadMemory: "Əlavə Yük",
      datasetMemory: "Verilənlər Dəsti",
      fragmentation: "Fraqmentasiya",
      allocator: "Ayırıcı",
      withTTL: "TTL ilə",
      persistent: "Daimi",
      avgTTL: "Orta TTL",
      prefix: "Prefiks",
      keyCount: "Açar Sayı",
      memoryUsage: "Yaddaş İstifadəsi",
      noPrefix: "(prefiks yoxdur)",
      topN: "Top N",
      maxScanKeys: "Maks Skan Açarları",
      type: "Tip",
      noData: "Verilən yoxdur. Başlamaq üçün Analizi Başlat düyməsinə klikləyin.",
      exportAll: "Hamısını İxrac Et"
    },

    overview: {
      noConnected: "Redis ilə əlaqə yoxdur.",
      overviewClients: "Müştərilərin sayına görə bağlı olanları sadalayın",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "1 müştəri";
        }
        return `${opt.length} müştərilər`;
      }
    },
    key: {
      label: {
        key: "Açar",
        encoding: "Kodlaşdırma",
        compression: "Sıxışdırma",
        aiRateLimited: "AI sorğu limiti aşıldı. Daha sonra yenidən cəhd edin və ya Ayarlarda öz Groq API açarınızı istifadə edin.",
        aiError: "AI sorğusu uğursuz oldu",
        length: "Ölçü",
        ttl: "TTL",
        ttlTitle: "Yaşamaq Zamanı",
        type: "Növ",
        ttlNotExpire: "müddəti bitmir",
        lengthString: "bayt",
        lengthItem: "maddələr",
        actions: "Fəaliyyətlər"
      },
      list: {
        table: {
          index: "indeks",
          value: "Dəyər"
        }
      },
      hash: {
        table: {
          hashkey: "Hashkey",
          value: "Dəyər"
        }
      },
      set: {
        table: {
          value: "Üzv"
        }
      },
      zset: {
        table: {
          value: "Üzv",
          score: "Hesab"
        }
      },
      stream: {
        table: {
          timestamp: "Vaxt möhürü ID",
          field: "Sahə",
          value: "Dəyər"
        }
      },
      timeseries: {
        chart: "Diaqram",
        info: "Məlumat",
        addPoint: "Məlumat Nöqtəsi Əlavə Et",
        from: "Başlanğıc (ms və ya -)",
        to: "Son (ms və ya +)",
        aggregation: "Aqreqasiya",
        timeBucket: "Vedrə (ms)",
        none: "Heç biri",
        dataPoints: "məlumat nöqtələri",
        labels: "Etiketlər",
        rules: "Qaydalar",
        retention: "Saxlama",
        timestamp: "Vaxt möhürü",
        value: "Dəyər",
        retentionHint: "0 = müddətsiz, və ya millisaniyə",
        duplicatePolicy: "Dublikat siyasəti",
        labelsHint: "key1 value1 key2 value2",
        timestampHint: "'*' avtomatik yaradılma deməkdir, və ya millisaniyə vaxt möhürü",
        editAllHint: "Hər sətirdə bir məlumat nöqtəsi: vaxt_möhürü dəyər (vaxt möhürü avtomatik üçün * ola bilər)",
        autoSpread: "Avtomatik * yayılma intervalı",
        formula: "Formula",
        formulaLinear: "Xətti",
        formulaRandom: "Təsadüfi",
        formulaSawtooth: "Mişar dişi",
        formulaPoints: "Nöqtələr",
        formulaAmplitude: "Amplituda",
        formulaOffset: "Ofset",
        generate: "Yarat",
        exportChart: "PNG ixrac et",
        overlay: "Üst-üstə düşən açarlar",
        overlayHint: "Vergüllə ayrılmış açarlar",
        mrangeFilter: "Etiket filtri",
        bulkMode: "Toplu yaratma",
        mrangeHint: "məs. sensor=temp"
      },
      probabilistic: {
        info: "Məlumat",
        addItem: "Element əlavə et",
        checkItem: "Elementi yoxla",
        item: "Element",
        exists: "Mövcuddur",
        doesNotExist: "Mövcud deyil",
        topkList: "Ən yuxarı elementlər",
        topkCount: "Say",
        queryCount: "Sorğu sayı",
        queryResult: "Sorğu nəticəsi",
        addedSuccessfully: "Element uğurla əlavə edildi",
        deletedSuccessfully: "Element uğurla silindi",
        quantile: "Kvantil",
        quantileResult: "Nəticə",
        noItems: "Göstəriləcək element yoxdur",
        resetConfirm: "Bu T-Digest-dəki bütün məlumatlar sıfırlansın?",
      },
      vectorset: {
        info: "Məlumat",
        elements: "Elementlər",
        similarity: "Oxşarlıq axtarışı",
        searchByElement: "Elementə görə axtar",
        searchByVector: "Vektora görə axtar",
        vectorValues: "Vektor dəyərləri",
        element: "Element",
        score: "Xal",
        count: "Say",
        addElement: "Element əlavə et",
        attributes: "Atributlar",
        noAttributes: "Atribut yoxdur",
        dimensions: "Ölçülər",
        removeConfirm: "Bu element VectorSet-dən silinsin?",
        noElements: "Element yoxdur",
        filter: "Filtr",
        searchComplete: "Axtarış tamamlandı",
      }
    },
    treeControls: {
      settings: "Ağac parametrləri",
      expandAll: "Hamısını genişləndirin",
      collapseAll: "Hamısını yığışdırın",
      level: "Səviyyə",
      search: {
        search: "Düymələrdə axtarın",
        clear: "Boş təyin etmək üçün cari axtarışı silin",
        placeholderClient: "Müştəri tərəfini axtarın",
        placeholderServer: "Axtarış server tərəfi",
        info: (opts) => "Müştəri tərəfi axtarışı o deməkdir ki, axtarış girişindəki mətnə uyğun gəlir. Server tərəfində axtarış o deməkdir ki, bu, *{search-text}* kimi açar nümunələrində axtarışa bənzəyir. Böyük axtarış dəstləri üçün server tərəfində axtarışdan istifadə etmək daha yaxşıdır. Daha kiçik axtarış dəstləri üçün müştəri tərəfi axtarış rejimindən istifadə etmək daha yaxşıdır." + ` Əgər açarların sayı bitibsə ${opts?.maxLightKeysCount ?? 110000}, yalnız server tərəfində axtarış edə bilərsiniz.`,
        largeSetInfo: "Böyük dəstdə müştəri tərəfində axtarış deaktiv edilib. belə ki, hazırda yalnız server tərəfində axtarış mümkündür.",
        infoDetails: "Axtarışın necə işlədiyini öyrənmək üçün parametrləri yoxlayın"
      },
      pager: {
        next: "Sonrakı",
        prev: "Əvvəlki",
        first: "Birinci",
        last: "Son"
      }
    }
  },
  time: {
    years: "illər",
    months: "ay",
    days: "günlər",
    year: "il",
    month: "ay",
    day: "gün",
    second: "saniyə",
    seconds: "saniyə",
    minute: "dəqiqə",
    minutes: "dəqiqə",
    hour: "saat",
    hours: "saat"
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
    bloom: "Bloom filtr",
    cuckoo: "Cuckoo filtr",
    topk: "Top-K",
    cms: "Count-Min Sketch",
    tdigest: "T-Digest",
    vectorset: "VectorSet",
  }
};
module.exports = strings;
