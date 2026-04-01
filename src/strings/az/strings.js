const strings = {
  error: {
    cleared_license: "Təmizlənmiş lisenziya",
    invalid_license: "Etibarsız lisenziya",
    license_max_devices_reached: "Maksimum cihaz oturacaqlarına çatıldı",
    license_readonly: "Lisenziya yalnız server terminalından dəyişdirilə bilər.",
    server_error: "Server xətası, yenidən cəhd edin"
  },
  title: {
    donate: "Bağışlayın",
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
    threads: "Mövzular",
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
    deleteAllKeys: opts => {
      return `Bu ağacı və onun bütün açarlarını silin (${opts.key})?`;
    },
    socketioConnectError: "Socket.IO serverə qoşula bilmir, siz yenidən yükləyə və qoşulma xətasını özünüz həll etməyə cəhd edə bilərsiniz, müştəri özü bunu necə həll edəcəyini bilmir.",
    socketioAuthRequired: "Socket.IO icazəsi tələb olunur. HTTP Basic Auth (istifadəçi adı/parol) ilə autentifikasiya edin və yenidən yükləyin.",
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
    },
    license: {
      title: "Lisenziya təyin edin",
      textContent: "If you want to use paid features, please contact support@corifeus.com to request a license. Pricing is Pro 400 HUF/month (€1/month) or 4,000 HUF/year (€10/year), and Enterprise 1,200 HUF/month (€3/month) or 12,000 HUF/year (€30/year). Yearly is 10x monthly. With 27% VAT, totals are Pro 500 HUF/month (€1.27/month) or 5,100 HUF/year (€12.70/year), Enterprise 1,500 HUF/month (€3.81/month) or 15,200 HUF/year (€38.10/year). License validation requires internet access. Default license includes 5 seats. If you need more seats, contact us at support@corifeus.com.",
      placeholder: "Lisenziya açarı"
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
    importKeys: "Açarları idxal et",
    saveWithFormatJson: "Formatla yadda saxlayın",
    formatJson: "Json formatı",
    wrap: "Sarın",
    unwrap: "Açın",
    downloadJson: "JSON yükləyin",
    pubsubMonitor: "PubSub Monitor",
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
    license: "Lisenziya təyin edin",
    delete: "Sil",
    remove: "Sil",
    sure: "Əlbəttə",
    testConnection: "Test bağlantısı",
    getKey: "Redis açarı və əlaqəli data yüklənir...",
    jsonViewShow: "JSON göstərin",
    jsonViewEditor: "JSON redaktə edin",
    quickConsole: "Sürətli Konsol",
  },
  label: {
    id: {
      nodeId: "Node ID",
      id: "Bağlantı ID",
      info: "Əgər aşağıdakıların xassələrini dəyişmək istəmirsinizsə: sshPassword, sshPrivateKey, password, tlsCrt, tlsKey, tlsCa, xassə d��yərlərinin toxunulmazlığını qorumaq üçün lütfən, əlaqənin identifikatorunu həmin xüsusiyyətlərə daxil edin. Əgər qovşaq parolunda eyni məntiqin olmasını istəyirsinizsə, onda node parolunda node ID-ni daxil edin."
    },
    secureFeature: "P3X ilə başlayan dəyərin eyni göründüyünü görsəniz, bu təhlükəsiz xüsusiyyətdir. Parametrləri dəyişdirmək üçün sadəcə bu parametrləri boş və ya başqa bir şeylə əvəz edin və onlar yadda saxlanılacaq. Parametrləri dəyişdirməsəniz, parametrlər serverdə olduğu kimi saxlanılacaq.",
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
    licenseInfo: "Lisenziya",
    licenseEditable: "Lisenziya redaktə edilə bilər",
    licenseEditableYes: "Bəli",
    licenseEditableNo: "yox",
    licenseTerminalOnly: "Lisenziya yalnız server terminalından konfiqurasiya edilə bilər.",
    licenseTierPolicyTitle: "Səviyyə siyasəti",
    licenseTierPolicyText: "<h4>Free</h4>core Redis UI only; no SSH tunneling, no Readonly connection mode, no Cluster/Sentinel, no Edit JSON/Upload binary/Download binary, no ReJSON.<br/><strong>Price: 0 HUF/month (€0/month).</strong><br/><br/><h4>Pro</h4>SSH tunneling, Readonly connection mode (including --readonly-connections/-r), Edit JSON, Upload binary, Download binary, ReJSON.<br/><strong>Base price: 400 HUF/month (€1/month) or 4,000 HUF/year (€10/year).</strong><br/><strong>Total with 27% VAT: 500 HUF/month (€1.27/month) or 5,100 HUF/year (€12.70/year).</strong><br/><br/><h4>Enterprise</h4>SSH tunneling, Cluster and Sentinel, plus Edit JSON, Upload binary, Download binary, ReJSON; --readonly-connections/-r also works.<br/><strong>Base price: 1,200 HUF/month (€3/month) or 12,000 HUF/year (€30/year).</strong><br/><strong>Total with 27% VAT: 1,500 HUF/month (€3.81/month) or 15,200 HUF/year (€38.10/year).</strong><br/><br/><h4>Yearly rule</h4>Yearly price is 10x the monthly price.<br/><br/><h4>Seats</h4>Default license includes 5 seats. If you need more seats, contact us at <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><br/><h4>Enterprise trial</h4>10 days free for anyone with a real existing email address (non-test email).<br/><hr/><h4>Billing info in e-mail</h4>Name, Billing e-mail, Country code, Postal code, City, Address, VAT ID (optional).<br/><br/><h4>Payment</h4>PayPal payment is available only in HUF (forint); after sending the money @ <a href='https://paypal.me/corifeus'>https://paypal.me/corifeus</a> I will send you an invoice. All payments are non-refundable.<br/><br/><h4>VAT</h4>VAT is added to the price (27% in Hungary).<br/><hr/><h4>Contact</h4>If you want to say hi or have a question, contact <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><hr/><h4>Language</h4>Invoice and license e-mail communication is in English. Invoice currency is HUF.<br/><hr/><h4>Note</h4>License validation requires internet access.",
    licenseState: "dövlət",
    licenseStateActive: "Aktiv",
    licenseStateInactive: "Qeyri-aktiv",
    licenseStateNoLicense: "Lisenziya yoxdur",
    licenseKeyMasked: "Yadda saxlanan açar",
    licenseTier: "Səviyyə",
    licenseValid: "Etibarlıdır",
    licenseStatus: "Lisenziya statusu",
    licenseReason: "Səbəb",
    licenseCheckedAt: "Yoxlanılıb",
    licenseStartsAt: "Başlayır",
    licenseExpiresAt: "Vaxtı bitir",
    licenseDaysLeft: "Günlər qalıb",
    licenseMaxDevices: "Maks cihazlar",
    licenseActiveDevices: "Aktiv cihazlar",
    licenseActiveDevicesInfo: "Əgər cihaz artıq istifadə edilmirsə, onun oturacağı 75 dəqiqədən sonra avtomatik olaraq buraxılır.",
    licenseCustomerEmail: "Müştəri e-poçtu",
    licenseFeatures: "Xüsusiyyətlər",
    licenseFeaturesEmpty: "Əlavə funksiyalar yoxdur",
    licenseFeatureReadonlyMode: "Yalnız oxumaq üçün əlaqə rejimi",
    licenseFeatureReadonlyConnectionsFlag: "Yalnız oxumaq üçün bağlantılar (--readonly-connections/-r)",
    licenseFeatureSsh: "SSH tunel",
    licenseFeatureCluster: "Cluster əlaqələri",
    licenseFeatureSentinel: "Sentinel əlaqələri",
    licenseFeatureReJSON: "ReJSON (JSON məlumat növü)",
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
    proSshOnly: "SSH Pro və ya Enterprise-da mövcuddur.",
    proReadonlyOnly: "Yalnız oxumaq üçün əlaqə rejimi Pro və ya Enterprise-də mövcuddur.",
    enterpriseClusterSentinelOnly: "Cluster və Sentinel yalnız Enterprise-də mövcuddur.",
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
    shortcutCommandPalette: "Command Palette",
    commandPalette: "Command Palette",
    noResults: "No results",
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
    loading: "Yüklənir...",
    autoRefresh: "Avto",
    exportSearchHint: "Yalnız cari axtarışa uyğun açarlar ixrac edilir",
    importSearchHint: "İdxal bütün verilənlər bazasına tətbiq olunur, yalnız axtarış nəticələrinə deyil",
    importNoKeys: "Faylda açar tapılmadı",
  },
  status: {
    dataCopied: "Məlumat mübadilə buferindədir",
    licenseSaved: "Lisenziya saxlandı",
    exportDone: "İxrac tamamlandı",
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
    ttlChanged: "Bu açarın TTL d��yişdirildi",
    notInteger: "Bu daxiletmə tam ədəd deyil",
    persisted: "Bu açar əbədi olaraq qalır",
    set: "Açar quraşdırılıb/əlavə edilib"
  },
  code: {
    "delete-connection": "Bu əlaqə silindi, ona görə də siz bu Redis nümunəsi ilə əlaqəni kəsdiniz.",
    "save-connection": "Bu əlaqə dəyişdirildi, ona görə də siz bu Redis nümunəsi ilə əlaqəni kəsdiniz. Yenidən qoşula bilərsiniz.",
    "readonly-connections": "Əlavə etmək/saxlamaq/silmək əlaqələri yalnız oxunur!",
    "readonly-connection-mode": "Bu əlaqə yalnız oxumaq rejimidir!",
    "list-out-of-bounds": "Bu siyahı indeksi həddən kənardır",
    "donation-ware-feature": "Bu xüsusiyyət ianə versiyasında mövcuddur.",
    "feature-pro-readonly-required": "Yalnız oxumaq üçün əlaqə rejimi Pro və ya Enterprise lisenziyası tələb edir.",
    "feature-pro-ssh-required": "SSH tunelləmə Pro və ya Enterprise lisenziyası tələb edir.",
    "feature-enterprise-cluster-sentinel-required": "Cluster və Sentinel Müəssisə lisenziyası tələb edir.",
    "feature-pro-json-binary-required": "JSON redaktə edin, ikili yükləyin və ikili faylı yükləyin Pro və ya Enterprise lisenziyası tələb olunur.",
    "feature-pro-rejson-required": "ReJSON (JSON məlumat növü) Pro və ya Enterprise lisenziyası tələb edir.",
    "invalid-json-value": "Dəyər etibarlı deyil JSON.",
    "http_auth_required": "Avtorizasiya tələb olunur: HTTP Basic Auth ilə autentifikasiya edin və yenidən yükləyin.",
    "auto-connection-failed": "Mümkündür ki, bu səbəbdən əlaqə silindi və avtomatik qoşulma uğursuz oldu.",
    invalid_console_command: "Bu əmr GUI vasitəsilə işləmir."
  },
  licenseReason: {
    LICENSE_VALID: "Lisenziya etibarlıdır",
    LICENSE_INVALID: "Lisenziya etibarsızdır",
    LICENSE_MISSING: "Lisenziya açarı təyin edilməyib",
    LICENSE_DISABLED: "Lisenziya server konfiqurasiyasında deaktiv edilib",
    LICENSE_NOT_FOUND: "Lisenziya tapılmadı",
    LICENSE_EXPIRED: "Lisenziyanın müddəti bitib",
    LICENSE_CLEARED: "Lisenziya açarı təmizləndi",
    LICENSE_MAX_DEVICES_REACHED: "Maksimum cihaz oturacaqlarına çatıldı",
    PRODUCT_MISMATCH: "Lisenziya məhsulu uyğun gəlmir"
  },
  licenseStatusValue: {
    active: "Aktiv",
    deleted: "Silindi",
    all: "Hamısı",
    expired: "İstifadə müddəti bitdi",
    missing: "İtkin",
    inactive: "Qeyri-aktiv"
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
      keyCount: () => {
        return `Açarların sayı: ${p3xr.state.keysRaw.length}`;
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
        value: "Dəyər"
      },
      error: {
        streamTimestamp: "Zaman damğası ya Redis formatında, ya da * kimi tələb olunur",
        key: "Əsas odur ki, ən azı bir simvol",
        hashKey: "Hash cədvəlinin açarı ən azı bir simvoldur",
        score: "Çeşidlənmiş xal tələb olunur",
        value: "Dəyər tələb olunur"
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
      noClients: "Müştəri yoxdur",
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
      }
    },
    treeControls: {
      settings: "Ağac parametrləri",
      expandAll: "Hamısını genişləndirin",
      collapseAll: "Hamısını yığışdırın",
      search: {
        search: "Düymələrdə axtarın",
        clear: "Boş təyin etmək üçün cari axtarışı silin",
        placeholderClient: "Müştəri tərəfini axtarın",
        placeholderServer: "Axtarış server tərəfi",
        info: "Müştəri tərəfi axtarışı o deməkdir ki, axtarış girişindəki mətnə uyğun gəlir. Server tərəfində axtarış o deməkdir ki, bu, *{search-text}* kimi açar nümunələrində axtarışa bənzəyir. Böyük axtarış dəstləri üçün server tərəfində axtarışdan istifadə etmək daha yaxşıdır. Daha kiçik axtarış dəstləri üçün müştəri tərəfi axtarış rejimindən istifadə etmək daha yaxşıdır." + ` Əgər açarların sayı bitibsə ${p3xr.settings.maxLightKeysCount}, yalnız server tərəfində axtarış edə bilərsiniz.`,
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
    loading: "Yüklənir...",
    years: "illər",
    months: "ay",
    days: "günlər",
    year: "il",
    month: "ay",
    day: "gün"
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
