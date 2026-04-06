const strings = {
  error: {
    server_error: "Ralat pelayan, sila cuba lagi"
  },
  title: {
    donate: "Menderma",
    donateTitle: "Sokong P3X Redis UI",
    donateDescription: "P3X Redis UI adalah projek percuma dan sumber terbuka. Kos penyelenggaraan aplikasi, ciri AI, imej Docker, pelayan dan infrastruktur datang dari poket pembangun sendiri. Jika anda mendapati alat ini berguna, sila pertimbangkan untuk menyokong pembangunan berterusannya dengan derma. Setiap sumbangan membantu memastikan projek ini terus hidup dan berkembang. Terima kasih!",
    jsonRecursive: "Mengembangkan semua daun",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "Anda boleh memilih sambungan Redis untuk disambungkan dari menu bawah kiri.",
    statistics: "Perangkaan",
    error: "ralat",
    connectingRedis: "Menyambung ke Redis ...",
    socketioConnectError: "Ralat Socket.IO",
    db: "DB",
    server: "pelayan",
    clients: "Pelanggan",
    memory: "Ingatan",
    persistence: "Kegigihan",
    stats: "Perangkaan",
    replication: "Replikasi",
    cpu: "CPU",
    cluster: "Cluster",
    modules: "Modul",
    errorstats: "Statistik Ralat",
    commandstats: "Statistik Arahan",
    latencystats: "Statistik Kependaman",
    keysizes: "Saiz Kunci",
    threads: "Benang"
  },
  confirm: {
    dropIndex: "Adakah anda pasti mahu memadam indeks ini?",
    uploadBuffer: "Adakah anda pasti untuk memuat naik data binari ini?",
    uploadBufferDone: "Data binari dimuat naik",
    uploadBufferDoneAndSave: "Data binari dimuat naik dan disimpan pada pelayan",
    title: "sahkan",
    alert: "Makluman",
    info: "info",
    deleteListItem: "Adakah anda pasti akan memadamkan item senarai ini?",
    deleteHashKey: "Adakah anda pasti akan memadamkan item kunci cincang ini?",
    deleteStreamTimestamp: "Adakah anda pasti akan memadamkan cap masa strim ini?",
    deleteSetMember: "Adakah anda pasti akan memadamkan ahli set ini?",
    deleteZSetMember: "Adakah anda pasti akan memadamkan ahli set yang diisih ini?",
    deleteConnection: "sahkan",
    deleteConnectionText: "Adakah anda pasti akan memadamkan sambungan Redis ini?",
    deleteNode: "Adakah anda pasti akan memadamkan nod Redis ini?",
    deleteAllKeys: opts => {
      return `Padamkan pokok ini dan semua kuncinya (${opts.key})?`;
    },
    deleteSearchKeys: opts => {
      return `Adakah anda pasti untuk memadamkan semua kunci yang sepadan dengan "${opts.pattern}"? Dijumpai ${opts.count} kunci.`;
    },
    socketioConnectError: "Socket.IO tidak boleh menyambung ke pelayan, anda boleh memuat semula dan cuba menyelesaikan sendiri ralat sambungan, pelanggan tidak tahu bagaimana untuk menyelesaikannya sendiri.",
    socketioAuthRequired: "Keizinan Socket.IO diperlukan. Sila sahkan dengan HTTP Basic Auth (nama pengguna/kata laluan) dan muat semula.",
    invalidCredentials: "Nama pengguna atau kata laluan tidak sah.",
    delete: "Padam?",
    deleteKey: "Adakah anda pasti akan memadamkan kunci ini?",
    rename: {
      title: "Adakah anda pasti untuk menamakan semula kunci ini?",
      textContent: "Tindakan ini menamakan semula kunci secara kekal.",
      placeholder: "Kunci Redis (diperlukan)"
    },
    ttl: {
      title: "Adakah anda pasti mahu menukar TTL kunci ini?",
      textContent: "Menukar TTL mengemas kini masa kunci ini untuk hidup. Biarkan kosong untuk menyimpan kunci ini selama-lamanya.",
      placeholder: "Kunci Redis TTL (integer atau kosong)",
      placeholderPlaceholder: "Kosong bermakna ia berterusan selama-lamanya; jika tidak masukkan integer.",
      convertTextToTime: "Tukar teks kepada masa",
      convertTextToTimePlaceholder: "Cth. 1d ialah 86400"
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
    copy: "salin",
    downloadBuffer: "Muat turun binari",
    setBuffer: "Muat naik binari",
    exportKeys: "Eksport kunci",
    exportAllKeys: (opts) => `Eksport semua ${opts.count} kunci`,
    exportSearchResults: (opts) => `Eksport ${opts.count} keputusan`,
    deleteAllKeysMenu: (opts) => `Padam semua ${opts.count}`,
    importKeys: "Import kunci",
    deleteSearchKeys: (opts) => `Padamkan ${opts.count} kunci yang sepadan`,
    saveWithFormatJson: "Simpan dengan format",
    formatJson: "Format Json",
    wrap: "Bungkus",
    unwrap: "Buka bungkus",
    downloadJson: "Muat turun JSON",
    pubsubMonitor: "PubSub",
    pulse: "Pulse",
    profiler: "Profiler",
    memoryAnalysis: "Analysis",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "Bahasa",
    ok: "OK",
    addKey: "Tambahkan pada kunci ini",
    addKeyRoot: "Tambah kunci akar",
    reloadKey: "Muat semula kunci",
    reload: "Muat semula",
    close: "tutup",
    commands: "Perintah",
    view: "Lihat",
    statistics: "Perangkaan",
    refresh: "Segarkan semula",
    pause: "Jeda",
    resume: "Sambung",
    clear: "Jelas",
    rename: "Namakan semula",
    main: "Pangkalan data",
    cancel: "Batal",
    theme: "Tema",
    github: "GitHub",
    githubRepo: "Repositori",
    githubRelease: "Keluaran",
    githubChangelog: "Changelog",
    info: "Info",
    settings: "tetapan",
    connect: "Sambung",
    disconnect: "Putuskan sambungan",
    logout: "Log keluar",
    overview: "Gambaran keseluruhan",
    console: "Konsol",
    noConnections: "Tiada sambungan, tambah sambungan dalam menu tetapan.",
    noConnectionsInSettings: "Tiada sambungan, anda boleh menambah SAMBUNGAN BARU di atas.",
    connectionAdd: "Sambungan baharu",
    addGroup: "Tambah kumpulan",
    extend: "Panjangkan",
    collapse: "Runtuh",
    add: "Tambah",
    edit: "Sunting",
    save: "Jimat",
    ttl: "Tetapkan TTL",
    delete: "Padam",
    remove: "Alih keluar",
    areYouSure: "Adakah anda pasti?",
    sure: "pasti",
    testConnection: "Uji sambungan",
    getKey: "Memuatkan kunci Redis dan data yang berkaitan ...",
    jsonViewShow: "Paparkan JSON",
    jsonViewEditor: "Edit JSON",
    quickConsole: "Konsol Pantas"
  },
  label: {
    id: {
      nodeId: "ID nod",
      id: "ID Sambungan",
      info: "Jika anda tidak mahu menukar sifat-sifat: sshPassword, sshPrivateKey, kata laluan, tlsCrt, tlsKey, tlsCa, sila masukkan ID sambungan dalam sifat-sifat tersebut untuk mengekalkan nilai harta benda tersebut. Jika anda mahukan logik yang sama dalam kata laluan nod, kemudian masukkan ID nod dalam kata laluan nod."
    },
    secureFeature: "Jika anda melihat nilai yang bermula dengan P3X rupa yang sama, ia adalah ciri selamat. Untuk menukar tetapan, cuma gantikan tetapan ini dengan kosong atau sesuatu yang lain dan ia akan disimpan. Jika anda tidak menukar tetapan, tetapan akan disimpan kerana ia berada pada pelayan.",
    aiTranslating: "Translating...",
    aiSettings: "Tetapan AI",
    aiGroqApiKey: "Kunci API Groq",
    aiGroqApiKeyInfo: "Pilihan. Kunci API Groq sendiri untuk prestasi lebih baik. Dapatkan kunci percuma dari",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "Kunci API AI disimpan",
    aiGroqApiKeyInvalid: "Invalid Groq API key",
    aiGroqApiKeyNotSet: "Tidak ditetapkan (lalai pelayan)",
    aiEnabled: "AI Enabled",
    aiEnabledYes: "Yes",
    aiEnabledNo: "No",
    aiRouteViaNetwork: "Route via network.corifeus.com",
    aiRoutingDirect: "Queries go directly to Groq using your own API key, bypassing network.corifeus.com.",
    aiRoutingNetwork: "AI queries are routed through network.corifeus.com. If you have your own free Groq API key, you can turn off this switch to route directly to Groq without network.corifeus.com.",
    ssh: {
      on: "SSH dihidupkan",
      off: "SSH dimatikan",
      sshHost: "SSH Hos",
      sshPort: "SSH port",
      sshUsername: "SSH nama pengguna",
      sshPassword: "Kata laluan SSH",
      sshPrivateKey: "Kunci peribadi SSH"
    },
    isBuffer: opts => `[objek ArrayBuffer] bermakna bahawa nilai adalah data binari atau nilainya lebih besar daripada ${opts.maxValueAsBuffer}`,
    streamValue: `Medan dan nilai strim ialah satu pelapis. Cth.: medan1 nilai1 "medan 2" "nilai 2"`,
    streamTimestampId: `'*' bermaksud dijana secara automatik atau spesifikasi sebagai <millisecondsTime>-<sequenceNumber>`,
    unableToLoadKey: ({
      key
    }) => {
      return `Tidak dapat memuatkan kunci ini: ${key}. Kemungkinan, kunci telah dipadamkan. Ralat yang tepat adalah dalam konsol.`;
    },
    bigJson: "Objek JSON ini melebihi 10 kb, jadi pastikan anda tahu perkara yang anda lakukan, kerana sesetengah fungsi boleh menjadi pemaparan perlahan.",
    addNode: "Tambah nod",
    validateJson: "Sahkan JSON",
    reducedFunction: `Mengurangkan fungsi`,
    tooManyKeys: opts => {
      return `Untuk fungsi maksimum penuh yang dibenarkan jumlah kunci adalah ${opts.maxLightKeysCount} kira. Pangkalan data ini mempunyai lebih daripada kunci yang dibenarkan secara keseluruhan ${opts.count}. Pengisihan kunci dan maklumat pokok mewah tambahan dilumpuhkan. Pencarian hanya berlaku pada pelayan dan bukannya carian klien.`;
    },
    redisCommandNotFound: "Tiada padanan arahan Redis ditemui ...",
    treeKeyStore: `Pengisihan (perbandingan semula jadi) dilaksanakan pada klien aka penyemak imbas, yang bermaksud ia mempunyai penalti untuk set besar yang besar, seperti lebih daripada 10k kekunci, ia mungkin menambah sedikit masa pada pemaparan halaman. Tiada pengisihan kunci dalam Redis, hanya seperti ini.`,
    socketIoTimeout: options => {
      return `Socket.IO tamat masa untuk permintaan ini (maks ${options.timeout / 1000} saat)...`;
    },
    resizerInfo: options => {
      return `Lebar minimum panel kiri atau kanan ialah ${options.width}px`;
    },
    jsonViewNotParsable: "Nilai ini bukan boleh dihuraikan JSON  ",
    ttlTitle: "Tetapkan TTL dalam beberapa saat",
    passwordSecure: "Kata laluan mungkin kosong, tetapi tetap akan menunjukkan aksara, ini adalah ciri keselamatan.",
    tlsWithoutCert: "Dayakan TLS tanpa sijil tambahan",
    tlsRejectUnauthorized: "Tolak sijil yang tidak dibenarkan",
    tlsSecure: "Jika anda melihat konfigurasi TLS yang bermula dengan P3X atau semua tetapan TLS kelihatan sama, ia adalah ciri selamat. Untuk menukar tetapan, cuma gantikan tetapan ini dengan kosong atau sesuatu yang lain dan ia akan disimpan. Jika anda tidak menukar tetapan TLS, tetapan akan disimpan kerana ia berada pada pelayan.",
    treeSeparatorEmpty: "Jika pemisah pokok kosong, pokok itu tidak mempunyai nod bersarang, hanya senarai tulen",
    treeSeparatorEmptyNote: "Tiada nod bersarang, hanya senarai tulen",
    welcomeConsole: "Selamat datang ke Konsol Redis",
    welcomeConsoleInfo: "Sejarah ATAS atau BAWAH kursor didayakan",
    redisListIndexInfo: "Kosong untuk menambah, -1 untuk menambah atau menyimpannya ke kedudukan yang ditunjukkan.",
    console: "Konsol",
    connectiondAdd: "Tambah sambungan",
    connectiondEdit: "Edit sambungan",
    connectiondView: "Lihat sambungan",
    connections: "Sambungan",
    keysSort: {
      on: "Pengisihan kunci dihidupkan",
      off: "Pengisihan kunci dimatikan"
    },
    cluster: {
      on: "Cluster dihidupkan",
      off: "Cluster dimatikan"
    },
    sentinel: {
      on: "Sentinel dihidupkan",
      off: "Sentinel dimatikan",
      name: "Nama Sentinel"
    },
    readonly: {
      on: "Baca sahaja",
      off: "Baca sahaja dimatikan"
    },
    theme: {
      light: "Cahaya",
      dark: "Perusahaan gelap",
      darkNeu: "Gelap",
      darkoBluo: "Darko bluo",
      enterprise: "Perusahaan",
      redis: "Redis",
      matrix: "Matriks"
    },
    connected: opts => {
      return `Bersambung: ${opts.name}`;
    },
    tree: "pokok",
    askAuth: "Minta kebenaran",
    keyboardShortcuts: "Keyboard Shortcuts",
    about: "About",
    supportedLanguages: "Supported Languages",
    version: "Version",
    redisVersion: "Redis Version",
    modules: "Modul",
    shortcutRefresh: "Refresh",
    shortcutSearch: "Focus Search",
    shortcutNewKey: "New Key",
    shortcutDisconnect: "Putuskan sambungan",
    themeAuto: "Auto (system)",
    languageAuto: "Auto (system)",
    shortcutCommandPalette: "Command Palette",
    commandPalette: "Command Palette",
    noResults: "No results",
    redisCommandsReference: "Arahan Redis",
    ungrouped: "Tanpa kumpulan",
    grouped: "Grouped",
    connectFirst: "Sambung ke pelayan Redis terlebih dahulu",
    searchLanguage: "Cari bahasa...",
    exportProgress: "Mengeksport kunci...",
    importProgress: "Mengimport kunci...",
    importPreview: "Pratonton",
    importOverwrite: "Tulis ganti",
    importSkip: "Langkau",
    importConflict: "Jika kunci sudah wujud:",
    noKeysToExport: "Tiada kunci untuk dieksport",
    time: "Masa",
    type: "Jenis",
    format: "Format",
    loading: "Memuatkan...",
    autoRefresh: "Auto",
    exportSearchHint: "Mengeksport hanya kunci yang sepadan dengan carian semasa",
    importSearchHint: "Import dikenakan pada keseluruhan pangkalan data, bukan hanya hasil carian",
    deleteSearchHint: "Memadamkan semua kunci yang sepadan dengan carian semasa di pelayan",
    deletingSearchKeys: "Memadamkan kunci yang sepadan...",
    importNoKeys: "Tiada kunci ditemui dalam fail",
    desktopNotifications: "Pemberitahuan Desktop",
    desktopNotificationsEnabled: "Dayakan pemberitahuan desktop",
    desktopNotificationsInfo: "Terima pemberitahuan OS untuk pemutusan dan penyambungan semula Redis apabila aplikasi tidak dalam fokus."
  },
  status: {
    dataCopied: "Data berada dalam papan keratan",
    exportDone: "Eksport selesai",
    deletedSearchKeys: (opts) => `${opts.count} kunci dipadamkan`,
    indexCreated: "Indeks dicipta",
    indexDropped: "Indeks dipadam",
    importDone: (opts) => `Import selesai: ${opts.created} dicipta, ${opts.skipped} dilangkau, ${opts.errors} ralat`,
    nodeRemoved: "Nod dialih keluar",
    keyIsNotExisting: "Kunci ini mungkin telah dipadamkan atau tamat tempoh.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "Tiada kunci";
      } else if (opts.keyCount === 1) {
        return "1 kunci";
      } else {
        return `${opts.keyCount} kunci`;
      }
    },
    treeExpandAll: "Kembangkan semua daun pokok. Operasi ini mungkin mahal dan mungkin mengambil masa...",
    noRedisKeys: "Tiada kunci dalam pangkalan data ini.",
    redisConnected: "Redis berjaya disambungkan",
    reloadingDataInfo: "Memuat semula maklumat data Redis",
    added: "Ditambah",
    saved: "dikemas kini",
    cancelled: "Dibatalkan",
    deleted: "Dipadamkan",
    savedRedis: "Data Redis disimpan",
    redisDisconnected: opts => {
      return `Sambungan semasa mempunyai ralat: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `Indeks db ditetapkan kepada ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `Kunci pokok telah dipadamkan (${opts.key}).`;
    },
    deletedKey: opts => {
      return `Kunci telah dipadamkan (${opts.key}).`;
    },
    renamedKey: "Kunci ini telah dinamakan semula",
    ttlChanged: "TTL kunci ini telah ditukar",
    notInteger: "Input ini bukan integer",
    persisted: "Kunci ini dikekalkan selama-lamanya",
    set: "Kunci ditetapkan/ditambah",
    connectionRestored: "Sambungan dipulihkan"
  },
  code: {
    "delete-connection": "Sambungan ini telah dipadamkan, jadi anda terputus sambungan ke tika Redis ini.",
    "save-connection": "Sambungan ini telah ditukar, jadi anda terputus sambungan ke tika Redis ini. Anda boleh menyambung semula.",
    "readonly-connections": "Sambungan tambah/simpan/padam hanya baca sahaja!",
    "readonly-connection-mode": "Sambungan ini adalah mod baca sahaja!",
    "list-out-of-bounds": "Indeks senarai ini di luar sempadan",
    "invalid-json-value": "Nilai ini tidak sah JSON.",
    "http_auth_required": "Keizinan diperlukan: sila sahkan dengan HTTP Basic Auth dan muat semula.",
    "auto-connection-failed": "Kemungkinan, sambungan telah dialih keluar dan sambungan automatik gagal, kerana ini.",
    invalid_console_command: "Perintah ini tidak berfungsi melalui GUI.",
    "AI_DISABLED": "AI dinyahaktifkan. Aktifkan dalam Tetapan AI.",
    "AI_PROMPT_REQUIRED": "Permintaan AI diperlukan.",
    "GROQ_API_KEY_READONLY": "Kunci Groq API adalah baca sahaja dan tidak boleh diubah.",
    "blocked_api_access": "Pelan Groq API anda tidak membenarkan akses kepada model ini. Naik taraf pelan Groq anda atau gunakan proksi network.corifeus.com.",
    "rate_limit": "Had kadar AI dicapai. Cuba lagi kemudian atau gunakan kunci Groq API anda sendiri dalam Tetapan."
  },
  form: {
    error: {
      required: "Diperlukan",
      port: "Pelabuhan adalah antara 1-65535",
      invalid: "Borang itu tidak sah"
    },
    connection: {
      label: {
        name: "Nama",
        group: "Group",
        host: "Nama hos",
        port: "Pelabuhan",
        password: "Kata laluan",
        username: "Nama pengguna"
      }
    },
    treeSettings: {
      maxValueDisplay: "Panjang rentetan paparan nilai maksimum",
      maxValueDisplayInfo: "Jika ditetapkan kepada 0, tunjukkan nilai penuh. Jika lebih daripada 0, potong ke panjang ini. Jika -1: untuk rentetan, sembunyikan nilai sehingga mengedit; untuk jenis lain, tunjukkan kandungan penuh.",
      maxKeys: "Kiraan kunci maks",
      maxKeysInfo: "Supaya GUI tidak ranap, kami mengehadkan kiraan kunci maks.",
      keyCount: (opts) => {
        return `Bilangan kunci: ${opts?.keyCount ?? 0}`;
      },
      label: {
        animation: "Gunakan animasi",
        noAnimation: "Tiada animasi",
        jsonFormatTwoSpace: "Format JSON dengan 2 ruang",
        jsonFormatFourSpace: "Format JSON dengan 4 ruang",
        formName: "Tetapan Redis",
        searchModeClient: "Mod carian pelanggan",
        searchModeServer: "Mod carian pelayan",
        searchModeStartsWith: "Cari dengan bermula dengan mod",
        searchModeIncludes: "Carian termasuk mod"
      },
      field: {
        treeSeparator: "Pemisah pokok",
        treeSeparatorSelector: "Pemilih pemisah pokok",
        page: "Kiraan paging pokok",
        keyPageCount: "Kiraan halaman utama",
        keysSort: "Isih kekunci",
        searchMode: "Mod carian",
        searchModeStartsWith: "Carian bermula dengan / termasuk"
      },
      error: {
        keyPageCount: "Kiraan halaman utama mestilah integer antara 5 - 100",
        page: "Kiraan halaman mestilah integer antara 10 - 5000",
        maxValueDisplay: "Nilai paparan maksimum mestilah integer antara -1 dan 32768",
        maxKeys: "Nilai kiraan kunci maksimum mestilah integer antara 100 dan 100000"
      }
    },
    key: {
      label: {
        formName: {
          add: "Tambahkan kunci Redis baharu",
          edit: "Edit kunci Redis",
          append: "Tambahkan pada kunci Redis sedia ada"
        }
      },
      field: {
        streamTimestamp: "Cap masa",
        key: "kunci",
        type: "taip",
        index: "Indeks",
        hashKey: "Kunci cincang",
        score: "skor",
        value: "Nilai"
      },
      error: {
        streamTimestamp: "Cap masa diperlukan, sama ada format Redis atau sebagai *",
        key: "Kuncinya, sekurang-kurangnya, satu watak",
        hashKey: "Kekunci jadual cincang ialah sekurang-kurangnya satu aksara",
        score: "Skor set yang diisih diperlukan",
        value: "Nilai itu diperlukan"
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
      title: "Carian",
      index: "Indeks",
      query: "Pertanyaan",
      results: "Keputusan",
      noIndex: "Tiada indeks",
      createIndex: "Cipta indeks",
      dropIndex: "Padam indeks",
      indexInfo: "Info indeks",
      indexName: "Nama indeks",
      prefix: "Awalan kunci (pilihan)",
      fieldName: "Nama medan"
    },
    monitor: {
      title: "Pemantauan",
      memory: "Memori",
      opsPerSec: "Ops/saat",
      clients: "Pelanggan",
      blocked: "Disekat",
      hitsMisses: "Kadar hit",
      networkIo: "Rangkaian I/O",
      slowLog: "Log perlahan",
      totalCommands: "Jumlah",
      expired: "Tamat tempoh",
      evicted: "Diusir",
      clientList: "Senarai pelanggan",
      topKeys: "Kunci terbesar mengikut memori",
      killClient: "Bunuh pelanggan",
      clientKilled: "Pelanggan dibunuh",
      confirmKillClient: "Adakah anda pasti mahu menamatkan pelanggan ini?",
      noKeys: "Tiada kunci",
      rss: "RSS",
      peak: "Puncak",
      fragmentation: "Fragmentasi",
      hitsAndMisses: "Hit / Miss",
      noClients: "Tiada pelanggan"
    },
    analysis: {
      title: "Analisis Memori",
      runAnalysis: "Jalankan Analisis",
      running: "Menganalisis...",
      typeDistribution: "Taburan Jenis",
      prefixMemory: "Memori mengikut Awalan",
      topKeysByMemory: "Kunci Terbesar mengikut Memori",
      expirationOverview: "Tamat Tempoh Kunci",
      memoryBreakdown: "Pecahan Memori",
      keysScanned: "Kunci Diimbas",
      totalMemory: "Jumlah Memori",
      rssMemory: "Memori RSS",
      peakMemory: "Memori Puncak",
      luaMemory: "Memori Lua",
      overheadMemory: "Overhead",
      datasetMemory: "Set Data",
      fragmentation: "Fragmentasi",
      allocator: "Pengagih",
      withTTL: "Dengan TTL",
      persistent: "Kekal",
      avgTTL: "Purata TTL",
      prefix: "Awalan",
      keyCount: "Bilangan Kunci",
      memoryUsage: "Penggunaan Memori",
      noPrefix: "(tiada awalan)",
      topN: "Top N",
      maxScanKeys: "Maks. Kunci Diimbas",
      type: "Jenis",
      noData: "Tiada data. Klik Jalankan Analisis untuk mula.",
      exportAll: "Eksport Semua"
    },

    overview: {
      noConnected: "Tiada sambungan ke Redis.",
      overviewClients: "Senaraikan yang disambungkan dengan kiraan pelanggan",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "1 pelanggan";
        }
        return `${opt.length} pelanggan`;
      }
    },
    key: {
      label: {
        key: "kunci",
        encoding: "Pengekodan",
        compression: "Pemampatan",
        aiRateLimited: "Had permintaan AI dicapai. Cuba lagi kemudian atau gunakan kunci API Groq anda sendiri dalam Tetapan.",
        aiError: "Pertanyaan AI gagal",
        length: "Saiz",
        ttl: "TTL",
        ttlTitle: "Masa Untuk Hidup",
        type: "taip",
        ttlNotExpire: "tidak luput",
        lengthString: "bait",
        lengthItem: "barang",
        actions: "Tindakan"
      },
      list: {
        table: {
          index: "Indeks",
          value: "Nilai"
        }
      },
      hash: {
        table: {
          hashkey: "Hashkey",
          value: "Nilai"
        }
      },
      set: {
        table: {
          value: "Ahli"
        }
      },
      zset: {
        table: {
          value: "Ahli",
          score: "skor"
        }
      },
      stream: {
        table: {
          timestamp: "ID cap masa",
          field: "Padang",
          value: "Nilai"
        }
      },
      timeseries: {
        chart: "Carta",
        info: "Maklumat",
        addPoint: "Tambah Titik Data",
        from: "Dari (ms atau -)",
        to: "Hingga (ms atau +)",
        aggregation: "Pengagregatan",
        timeBucket: "Baldi (ms)",
        none: "Tiada",
        dataPoints: "titik data",
        labels: "Label",
        rules: "Peraturan",
        retention: "Pengekalan",
        timestamp: "Cap masa",
        value: "Nilai",
        retentionHint: "0 = tiada tamat tempoh, atau milisaat",
        duplicatePolicy: "Dasar pendua",
        labelsHint: "kunci1 nilai1 kunci2 nilai2",
        timestampHint: "'*' bermaksud dijana automatik, atau cap masa milisaat",
        editAllHint: "Satu titik data setiap baris: cap_masa nilai (cap masa boleh * untuk automatik)",
        autoSpread: "Selang sebaran automatik *",
        formula: "Formula",
        formulaLinear: "Linear",
        formulaRandom: "Rawak",
        formulaSawtooth: "Gigi gergaji",
        formulaPoints: "Titik",
        formulaAmplitude: "Amplitud",
        formulaOffset: "Ofset",
        generate: "Jana",
        exportChart: "Eksport PNG",
        overlay: "Tindih kunci",
        overlayHint: "Kunci dipisahkan koma",
        mrangeFilter: "Penapis label",
        bulkMode: "Penjanaan pukal",
        mrangeHint: "cth. sensor=temp"
      }
    },
    treeControls: {
      settings: "Tetapan pokok",
      expandAll: "Kembangkan semua",
      collapseAll: "Runtuhkan semua",
      level: "Tahap",
      search: {
        search: "Cari dalam kekunci",
        clear: "Kosongkan carian semasa untuk ditetapkan kosong",
        placeholderClient: "Cari bahagian pelanggan",
        placeholderServer: "Cari bahagian pelayan",
        info: (opts) => "Carian sebelah klien bermaksud, ia sepadan dengan teks dalam input carian. Carian sisi pelayan bermaksud, ia seperti carian dalam corak kunci sebagai *{teks carian}*. Untuk set carian yang besar, lebih baik menggunakan carian sisi pelayan. Untuk set carian yang lebih kecil, lebih baik menggunakan mod carian sisi klien." + ` Jika kiraan kunci sudah tamat ${opts?.maxLightKeysCount ?? 110000}, anda hanya boleh mencari di sebelah pelayan.`,
        largeSetInfo: "Dalam set besar, carian sebelah pelanggan dilumpuhkan. jadi buat masa ini hanya carian sebelah pelayan boleh dilakukan.",
        infoDetails: "Untuk mengetahui cara carian berfungsi, sila semak tetapan"
      },
      pager: {
        next: "Seterusnya",
        prev: "Sebelumnya",
        first: "Pertama",
        last: "Terakhir"
      }
    }
  },
  time: {
    type: "Jenis",
    format: "Format",
    loading: "Memuatkan...",
    years: "tahun",
    months: "bulan",
    days: "hari",
    year: "tahun",
    month: "bulan",
    day: "hari",
    second: "saat",
    seconds: "saat",
    minute: "minit",
    minutes: "minit",
    hour: "jam",
    hours: "jam"
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
