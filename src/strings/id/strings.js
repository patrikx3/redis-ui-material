const strings = {
  error: {
    cleared_license: "Lisensi yang sudah dibersihkan",
    invalid_license: "Lisensi tidak valid",
    license_max_devices_reached: "Kursi perangkat maksimum telah tercapai",
    license_readonly: "Lisensi hanya dapat diubah dari terminal server.",
    server_error: "Kesalahan server, silakan coba lagi"
  },
  title: {
    donate: "Donasi",
    jsonRecursive: "Memperluas semua daun",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "Anda dapat memilih koneksi Redis untuk dihubungkan dari menu kiri bawah.",
    statistics: "Statistik",
    error: "Kesalahan",
    connectingRedis: "Menghubungkan ke Redis ...",
    socketioConnectError: "Kesalahan Socket.IO",
    db: "DB",
    server: "pelayan",
    clients: "Klien",
    memory: "Memori",
    persistence: "Kegigihan",
    stats: "Statistik",
    replication: "Replikasi",
    cpu: "CPU",
    cluster: "Cluster",
    modules: "Modul",
    errorstats: "Statistik Kesalahan",
    commandstats: "Statistik Perintah",
    latencystats: "Statistik Latensi",
    keysizes: "Ukuran Kunci",
    threads: "Thread",
  },
  confirm: {
    dropIndex: "Yakin ingin menghapus indeks ini?",
    uploadBuffer: "Apakah Anda yakin akan mengunggah data biner ini?",
    uploadBufferDone: "Data biner diunggah",
    uploadBufferDoneAndSave: "Data biner diunggah dan disimpan di server",
    title: "Konfirmasikan",
    alert: "Waspada",
    info: "Informasi",
    deleteListItem: "Apakah Anda yakin akan menghapus item daftar ini?",
    deleteHashKey: "Apakah Anda yakin akan menghapus item kunci hash ini?",
    deleteStreamTimestamp: "Apakah Anda yakin akan menghapus stempel waktu streaming ini?",
    deleteSetMember: "Apakah Anda yakin akan menghapus anggota kumpulan ini?",
    deleteZSetMember: "Apakah Anda yakin akan menghapus anggota kumpulan yang diurutkan ini?",
    deleteConnection: "Konfirmasikan",
    deleteConnectionText: "Apakah Anda yakin akan menghapus koneksi Redis ini?",
    deleteNode: "Apakah Anda yakin akan menghapus simpul Redis ini?",
    deleteAllKeys: opts => {
      return `Hapus pohon ini dan semua kuncinya (${opts.key})?`;
    },
    socketioConnectError: "Socket.IO tidak dapat terhubung ke server, Anda dapat memuat ulang dan mencoba mengatasi sendiri kesalahan koneksi, klien tidak tahu cara menyelesaikannya sendiri.",
    socketioAuthRequired: "Diperlukan otorisasi Socket.IO. Harap autentikasi dengan HTTP Basic Auth (nama pengguna/kata sandi) dan muat ulang.",
    deleteKey: "Apakah Anda yakin akan menghapus kunci ini?",
    rename: {
      title: "Apakah Anda yakin akan mengganti nama kunci ini?",
      textContent: "Tindakan ini mengganti nama kunci secara permanen.",
      placeholder: "Kunci Redis (wajib)"
    },
    ttl: {
      title: "Apakah Anda yakin ingin mengubah TTL kunci ini?",
      textContent: "Mengubah TTL akan memperbarui waktu aktif kunci ini. Biarkan kosong untuk menyimpan kunci ini selamanya.",
      placeholder: "Redis kunci TTL (integer atau kosong)",
      placeholderPlaceholder: "Kosong artinya tetap ada selamanya; jika tidak, masukkan bilangan bulat.",
      convertTextToTime: "Ubah teks menjadi waktu",
      convertTextToTimePlaceholder: "Misalnya. 1 hari akan menjadi 86400"
    },
    license: {
      title: "Tetapkan lisensi",
      textContent: "Jika Anda ingin menggunakan fitur berbayar, silakan hubungi support@corifeus.com untuk meminta lisensi. Harganya adalah Pro 400 HUF/bulan (€1/bulan) atau 4.000 HUF/tahun (€10/tahun), dan Enterprise 1.200 HUF/bulan (€3/bulan) atau 12.000 HUF/tahun (€30/tahun). Tahunan adalah 10x bulanan. Dengan 27% VAT, totalnya adalah Pro 500 HUF/bulan (€1,27/bulan) atau 5.100 HUF/tahun (€12,70/tahun), Enterprise 1,500 HUF/bulan (€3,81/bulan) atau 15.200 HUF/tahun (€38,10/tahun). Validasi lisensi memerlukan akses internet. Lisensi default mencakup 5 kursi. Jika Anda membutuhkan lebih banyak kursi, hubungi kami di support@corifeus.com.",
      placeholder: "Kunci lisensi"
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
    copy: "Salin",
    downloadBuffer: "Unduh biner",
    setBuffer: "Unggah biner",
    exportKeys: "Ekspor kunci",
    exportAllKeys: (opts) => `Ekspor semua ${opts.count} kunci`,
    exportSearchResults: (opts) => `Ekspor ${opts.count} hasil`,
    importKeys: "Impor kunci",
    saveWithFormatJson: "Simpan dengan format",
    formatJson: "Format JSON",
    wrap: "Bungkus",
    unwrap: "Buka bungkusnya",
    downloadJson: "Unduh JSON",
    pubsubMonitor: "Monitor PubSub",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "Bahasa",
    ok: "Oke",
    addKey: "Tambahkan ke kunci ini",
    addKeyRoot: "Tambahkan kunci root",
    reloadKey: "Muat ulang kunci",
    reload: "Muat ulang",
    close: "Tutup",
    commands: "Perintah",
    view: "Lihat",
    statistics: "Statistik",
    refresh: "Segarkan",
    pause: "Jeda",
    resume: "Lanjutkan",
    clear: "Jelas",
    rename: "Ganti nama",
    main: "Basis data",
    cancel: "Batalkan",
    theme: "Tema",
    github: "GitHub",
    githubRepo: "Gudang",
    githubRelease: "Rilis",
    githubChangelog: "log perubahan",
    info: "Info",
    settings: "Pengaturan",
    connect: "Hubungkan",
    disconnect: "Putuskan sambungan",
    overview: "Ikhtisar",
    console: "Konsol",
    noConnections: "Tidak ada koneksi, tambahkan koneksi di menu pengaturan.",
    noConnectionsInSettings: "Tidak ada koneksi, Anda dapat menambahkan KONEKSI BARU di atas.",
    connectionAdd: "Koneksi baru",
    addGroup: "Tambah grup",
    extend: "Perpanjang",
    collapse: "Runtuh",
    add: "Tambahkan",
    edit: "Sunting",
    save: "Simpan",
    ttl: "Setel TTL",
    license: "Tetapkan lisensi",
    delete: "Hapus",
    remove: "Hapus",
    sure: "Tentu",
    testConnection: "Uji koneksi",
    getKey: "Memuat kunci Redis dan data terkait ...",
    jsonViewShow: "Tampilkan JSON",
    jsonViewEditor: "Sunting JSON",
    quickConsole: "Konsol Cepat",
  },
  label: {
    id: {
      nodeId: "ID simpul",
      id: "ID Koneksi",
      info: "Jika Anda tidak ingin mengubah properti: sshPassword, sshPrivateKey, password, tlsCrt, tlsKey, tlsCa, silakan masukkan ID koneksi di properti tersebut agar nilai properti tetap utuh. Jika ingin logika yang sama pada kata sandi simpul, maka masukkan ID simpul pada kata sandi simpul."
    },
    secureFeature: "Jika Anda melihat nilai yang dimulai dengan P3X dan terlihat sama, itu adalah fitur aman. Untuk mengubah pengaturan, cukup ganti pengaturan ini dengan yang kosong atau yang lain dan pengaturan itu akan disimpan. Jika Anda tidak mengubah pengaturan, pengaturan akan tetap seperti yang ada di server.",
    ssh: {
      on: "SSH aktif",
      off: "SSH mati",
      sshHost: "Tuan rumah SSH",
      sshPort: "Pelabuhan SSH",
      sshUsername: "Nama pengguna SSH",
      sshPassword: "Kata sandi SSH",
      sshPrivateKey: "Kunci pribadi SSH"
    },
    isBuffer: opts => `[object ArrayBuffer] artinya nilainya adalah data biner atau nilainya lebih besar dari ${opts.maxValueAsBuffer}`,
    streamValue: `Bidang dan nilai aliran bersifat oneliner. Misalnya: bidang1 nilai1 "bidang 2" "nilai 2"`,
    streamTimestampId: `'*' berarti dibuat secara otomatis atau spesifikasinya sebagai <millisecondsTime>-<sequenceNumber>`,
    unableToLoadKey: ({
      key
    }) => {
      return `Tidak dapat memuat kunci ini: ${key}. Kemungkinan, kuncinya telah dihapus. Kesalahan sebenarnya ada di konsol.`;
    },
    bigJson: "Objek JSON ini berukuran lebih dari 10 kb, jadi pastikan Anda mengetahui apa yang Anda lakukan, karena beberapa fungsi dapat memperlambat rendering.",
    addNode: "Tambahkan simpul",
    validateJson: "Validasi JSON",
    reducedFunction: `Fungsionalitas berkurang`,
    tooManyKeys: opts => {
      return `Untuk fungsi maksimal penuh, total tombol yang diperbolehkan adalah ${opts.maxLightKeysCount} menghitung. Basis data ini memiliki total lebih dari kunci yang diizinkan ${opts.count}. Penyortiran kunci dan informasi pohon mewah tambahan dinonaktifkan. Pencarian hanya terjadi di server, bukan pencarian klien.`;
    },
    redisCommandNotFound: "Tidak ditemukan kecocokan perintah Redis ...",
    treeKeyStore: `Penyortiran (perbandingan alami) dijalankan pada klien alias browser, yang berarti memiliki penalti untuk kumpulan besar, seperti lebih dari 10 ribu kunci, mungkin menambah sedikit waktu pada rendering halaman. Tidak ada penyortiran kunci di Redis, hanya seperti ini.`,
    socketIoTimeout: options => {
      return `Waktu Socket.IO habis untuk permintaan ini (maks ${options.timeout / 1000} detik) ...`;
    },
    resizerInfo: options => {
      return `Lebar minimum panel kiri atau kanan adalah ${options.width}piksel`;
    },
    jsonViewNotParsable: "Nilai ini tidak dapat diurai JSON  ",
    ttlTitle: "Atur TTL dalam hitungan detik",
    passwordSecure: "Kata sandinya mungkin kosong, tetapi tetap menampilkan karakter, ini adalah fitur keamanan.",
    tlsWithoutCert: "Aktifkan TLS tanpa sertifikat tambahan",
    tlsRejectUnauthorized: "Tolak sertifikat yang tidak sah",
    tlsSecure: "Jika Anda melihat konfigurasi TLS yang dimulai dengan P3X atau semua pengaturan TLS terlihat sama, itu adalah fitur aman. Untuk mengubah pengaturan, cukup ganti pengaturan ini dengan yang kosong atau yang lain dan pengaturan itu akan disimpan. Jika Anda tidak mengubah pengaturan TLS, pengaturan akan tetap seperti yang ada di server.",
    treeSeparatorEmpty: "Jika pemisah pohon kosong, pohon tidak akan memiliki simpul bersarang, hanya daftar murni",
    treeSeparatorEmptyNote: "Tidak ada node bersarang, hanya daftar murni",
    welcomeConsole: "Selamat datang di Konsol Redis",
    welcomeConsoleInfo: "Riwayat kursor ATAS atau BAWAH diaktifkan",
    redisListIndexInfo: "Kosong untuk menambahkan, -1 untuk menambahkan atau menyimpannya ke posisi yang ditunjukkan.",
    console: "Konsol",
    connectiondAdd: "Tambahkan koneksi",
    connectiondEdit: "Sunting koneksi",
    connectiondView: "Lihat koneksi",
    connections: "Koneksi",
    licenseInfo: "Lisensi",
    licenseEditable: "Lisensi dapat diedit",
    licenseEditableYes: "Ya",
    licenseEditableNo: "Tidak",
    licenseTerminalOnly: "Lisensi hanya dapat dikonfigurasi dari terminal server.",
    licenseTierPolicyTitle: "Kebijakan tingkat",
    licenseTierPolicyText: "<h4>Gratis</h4>core Redis UI saja; tidak ada terowongan SSH, tidak ada mode koneksi Readonly, tidak ada Cluster/Sentinel, tidak ada Edit JSON/Unggah biner/Unduh biner, tidak ada ReJSON.<br/><strong>Harga: 0 HUF/bulan (€0/bulan).</strong><br/><br/><h4>Pro</h4>SSH tunneling, mode koneksi Readonly (termasuk --readonly-connections/-r), Edit JSON, Unggah biner, Unduh biner, ReJSON.<br/><strong>Harga dasar: 400 HUF/bulan (€1/bulan) atau 4.000 HUF/tahun (€10/tahun).</strong><br/><strong>Total dengan 27% VAT: 500 HUF/bulan (€1,27/bulan) atau 5.100 HUF/tahun (€12,70/tahun) Cluster dan Sentinel, ditambah Edit JSON, Unggah biner, Unduh biner, ReJSON; --readonly-connections/-r juga berfungsi.<br/><strong>Harga dasar: 1.200 HUF/bulan (€3/bulan) atau 12.000 HUF/tahun (€30/tahun).</strong><br/><strong>Total dengan 27% VAT: 1.500 HUF/bulan (€3,81/bulan) atau 15.200 HUF/tahun (€38,10/tahun).</strong><br/><br/><h4>Aturan tahunan</h4>Harga tahunan adalah 10x bulanan price.<br/><br/><h4>Seats</h4>Lisensi default mencakup 5 kursi. Jika Anda memerlukan lebih banyak kursi, hubungi kami di <a href='mailto:mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><br/><h4>Uji coba perusahaan</h4>10 hari gratis bagi siapa pun yang memiliki alamat email asli (email non-tes).<br/><hr/><h4>Info penagihan dalam email</h4>Nama, Email penagihan, Kode negara, Kode pos, Kota, Alamat, VAT ID (opsional).<br/><br/><h4>Pembayaran</h4>PayPal pembayaran hanya tersedia di HUF (forint); setelah mengirimkan uang @ <a href='https://paypal.me/corifeus'>https://paypal.me/corifeus</a> saya akan mengirimkan invoice kepada Anda. Semua pembayaran tidak dapat dikembalikan.<br/><br/><h4>VAT</h4>VAT ditambahkan ke harga (27% dalam Hongaria).<br/><hr/><h4>Kontak</h4>Jika Anda ingin menyapa atau memiliki pertanyaan, hubungi <a href='mailto:mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><hr/><h4>Bahasa</h4>Komunikasi email faktur dan lisensi dalam bahasa Inggris. Mata uang faktur adalah HUF.<br/><hr/><h4>Note</h4>Validasi lisensi memerlukan akses internet.",
    licenseState: "Negara",
    licenseStateActive: "Aktif",
    licenseStateInactive: "Tidak aktif",
    licenseStateNoLicense: "Tidak ada lisensi",
    licenseKeyMasked: "Kunci tersimpan",
    licenseTier: "Tingkat",
    licenseValid: "Sah",
    licenseStatus: "Status lisensi",
    licenseReason: "Alasan",
    licenseCheckedAt: "Diperiksa di",
    licenseStartsAt: "Dimulai pada",
    licenseExpiresAt: "Berakhir pada",
    licenseDaysLeft: "Tinggal beberapa hari lagi",
    licenseMaxDevices: "Perangkat maksimal",
    licenseActiveDevices: "Perangkat aktif",
    licenseActiveDevicesInfo: "Jika perangkat tidak digunakan lagi, dudukannya akan dilepas secara otomatis setelah 75 menit.",
    licenseCustomerEmail: "Email pelanggan",
    licenseFeatures: "Fitur",
    licenseFeaturesEmpty: "Tidak ada fitur tambahan",
    licenseFeatureReadonlyMode: "Mode koneksi hanya baca",
    licenseFeatureReadonlyConnectionsFlag: "Koneksi hanya baca (--readonly-connections/-r)",
    licenseFeatureSsh: "Penerowongan SSH",
    licenseFeatureCluster: "Koneksi Cluster",
    licenseFeatureSentinel: "Koneksi Sentinel",
    licenseFeatureReJSON: "ReJSON (tipe data JSON)",
    keysSort: {
      on: "Penyortiran kunci aktif",
      off: "Penyortiran kunci"
    },
    cluster: {
      on: "Cluster aktif",
      off: "Cluster mati"
    },
    sentinel: {
      on: "Sentinel aktif",
      off: "Sentinel mati",
      name: "Nama Sentinel"
    },
    readonly: {
      on: "Hanya baca aktif",
      off: "Hanya baca mati"
    },
    proSshOnly: "SSH tersedia dalam Pro atau Perusahaan.",
    proReadonlyOnly: "Mode koneksi hanya baca tersedia di Pro atau Perusahaan.",
    enterpriseClusterSentinelOnly: "Cluster dan Sentinel hanya tersedia di Perusahaan.",
    theme: {
      light: "Ringan",
      dark: "Perusahaan gelap",
      darkNeu: "Gelap",
      darkoBluo: "Gelap biru",
      enterprise: "Perusahaan",
      redis: "Redis",
      matrix: "Matriks"
    },
    connected: opts => {
      return `Terhubung: ${opts.name}`;
    },
    tree: "Pohon",
    askAuth: "Minta otorisasi",
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
    shortcutCommandPalette: "Command Palette",
    commandPalette: "Command Palette",
    noResults: "No results",
    redisCommandsReference: "Perintah Redis",
    ungrouped: "Tanpa grup",
    grouped: "Grouped",
    connectFirst: "Hubungkan ke server Redis terlebih dahulu",
    searchLanguage: "Cari bahasa...",
    exportProgress: "Mengekspor kunci...",
    importProgress: "Mengimpor kunci...",
    importPreview: "Pratinjau",
    importOverwrite: "Timpa",
    importSkip: "Lewati",
    importConflict: "Jika kunci sudah ada:",
    noKeysToExport: "Tidak ada kunci untuk diekspor",
    time: "Waktu",
    loading: "Memuat...",
    autoRefresh: "Otomatis",
    exportSearchHint: "Mengekspor hanya kunci yang cocok dengan pencarian saat ini",
    importSearchHint: "Impor berlaku untuk seluruh database, bukan hanya hasil pencarian",
    importNoKeys: "Tidak ditemukan kunci dalam file",
  },
  status: {
    dataCopied: "Datanya ada di clipboard",
    licenseSaved: "Lisensi disimpan",
    exportDone: "Ekspor selesai",
    indexCreated: "Indeks dibuat",
    indexDropped: "Indeks dihapus",
    importDone: (opts) => `Impor selesai: ${opts.created} dibuat, ${opts.skipped} dilewati, ${opts.errors} kesalahan`,
    nodeRemoved: "Node dihapus",
    keyIsNotExisting: "Kunci ini mungkin telah dihapus atau kedaluwarsa.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "Tidak ada kunci";
      } else if (opts.keyCount === 1) {
        return "1 kunci";
      } else {
        return `${opts.keyCount} kunci`;
      }
    },
    treeExpandAll: "Perluas semua daun pohon. Operasi ini bisa mahal dan mungkin memerlukan waktu ...",
    noRedisKeys: "Tidak ada kunci dalam database ini.",
    redisConnected: "Redis terhubung berhasil",
    reloadingDataInfo: "Memuat ulang info data Redis",
    added: "Ditambahkan",
    saved: "Diperbarui",
    cancelled: "Dibatalkan",
    deleted: "Dihapus",
    savedRedis: "Data Redis disimpan",
    redisDisconnected: opts => {
      return `Koneksi saat ini mengalami kesalahan: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `Indeks db disetel ke ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `Kunci pohon telah dihapus (${opts.key}).`;
    },
    deletedKey: opts => {
      return `Kuncinya telah dihapus (${opts.key}).`;
    },
    renamedKey: "Kunci ini telah diganti namanya",
    ttlChanged: "TTL kunci ini telah diubah",
    notInteger: "Masukan ini bukan bilangan bulat",
    persisted: "Kunci ini disimpan selamanya",
    set: "Kuncinya disetel/ditambahkan"
  },
  code: {
    "delete-connection": "Sambungan ini telah dihapus, jadi sambungan Anda terputus ke instans Redis ini.",
    "save-connection": "Koneksi ini telah diubah, jadi Anda terputus ke instance Redis ini. Anda dapat menyambung kembali.",
    "readonly-connections": "Koneksi tambah/simpan/hapus hanya dapat dibaca!",
    "readonly-connection-mode": "Koneksi ini adalah mode hanya baca!",
    "list-out-of-bounds": "Indeks daftar ini di luar batas",
    "donation-ware-feature": "Fitur ini hadir pada versi donasi.",
    "feature-pro-readonly-required": "Mode koneksi hanya baca memerlukan lisensi Pro atau Perusahaan.",
    "feature-pro-ssh-required": "Penerowongan SSH memerlukan lisensi Pro atau Perusahaan.",
    "feature-enterprise-cluster-sentinel-required": "Cluster dan Sentinel memerlukan lisensi Perusahaan.",
    "feature-pro-json-binary-required": "Edit JSON, Unggah biner dan Unduh biner memerlukan lisensi Pro atau Perusahaan.",
    "feature-pro-rejson-required": "ReJSON (tipe data JSON) memerlukan lisensi Pro atau Perusahaan.",
    "invalid-json-value": "Nilai JSON tidak valid.",
    "http_auth_required": "Diperlukan otorisasi: harap autentikasi dengan HTTP Basic Auth dan muat ulang.",
    "auto-connection-failed": "Kemungkinan, koneksi terputus dan koneksi otomatis gagal, karena hal ini.",
    invalid_console_command: "Perintah ini tidak berfungsi melalui GUI."
  },
  licenseReason: {
    LICENSE_VALID: "Lisensi valid",
    LICENSE_INVALID: "Lisensi tidak valid",
    LICENSE_MISSING: "Tidak ada kunci lisensi yang disetel",
    LICENSE_DISABLED: "Lisensi dinonaktifkan di konfigurasi server",
    LICENSE_NOT_FOUND: "Lisensi tidak ditemukan",
    LICENSE_EXPIRED: "Lisensi sudah habis masa berlakunya",
    LICENSE_CLEARED: "Kunci lisensi telah dihapus",
    LICENSE_MAX_DEVICES_REACHED: "Kursi perangkat maksimum telah tercapai",
    PRODUCT_MISMATCH: "Produk lisensi tidak cocok"
  },
  licenseStatusValue: {
    active: "Aktif",
    deleted: "Dihapus",
    all: "Semua",
    expired: "Kedaluwarsa",
    missing: "Hilang",
    inactive: "Tidak aktif"
  },
  form: {
    error: {
      required: "Diperlukan",
      port: "Portnya antara 1-65535",
      invalid: "Formulirnya tidak valid"
    },
    connection: {
      label: {
        name: "Nama",
        group: "Group",
        host: "Nama host",
        port: "Pelabuhan",
        password: "Kata sandi",
        username: "Nama pengguna"
      }
    },
    treeSettings: {
      maxValueDisplay: "Panjang string tampilan nilai maksimal",
      maxValueDisplayInfo: "Jika disetel ke 0, tampilkan nilai penuh. Jika lebih besar dari 0, potong sepanjang ini. Jika -1: untuk string, sembunyikan nilainya hingga diedit; untuk tipe lainnya, tampilkan konten lengkap.",
      maxKeys: "Jumlah kunci maksimal",
      maxKeysInfo: "Agar GUI tidak crash, kami membatasi jumlah kunci maksimal.",
      keyCount: () => {
        return `Jumlah kunci: ${p3xr.state.keysRaw.length}`;
      },
      label: {
        animation: "Gunakan animasi",
        noAnimation: "Tidak ada animasi",
        jsonFormatTwoSpace: "Format JSON dengan 2 spasi",
        jsonFormatFourSpace: "Format JSON dengan 4 spasi",
        formName: "Pengaturan Redis",
        searchModeClient: "Mode pencarian klien",
        searchModeServer: "Modus pencarian server",
        searchModeStartsWith: "Pencarian dengan dimulai dengan mode",
        searchModeIncludes: "Pencarian mencakup mode"
      },
      field: {
        treeSeparator: "Pemisah pohon",
        treeSeparatorSelector: "Pemilih pemisah pohon",
        page: "Jumlah halaman pohon",
        keyPageCount: "Jumlah halaman kunci",
        keysSort: "Urutkan kuncinya",
        searchMode: "Modus pencarian",
        searchModeStartsWith: "Pencarian dimulai dengan / termasuk"
      },
      error: {
        keyPageCount: "Jumlah halaman kunci harus berupa bilangan bulat antara 5 - 100",
        page: "Jumlah halaman harus berupa bilangan bulat antara 10 - 5000",
        maxValueDisplay: "Nilai tampilan maksimum harus berupa bilangan bulat antara -1 dan 32768",
        maxKeys: "Nilai jumlah kunci maksimum harus berupa bilangan bulat antara 100 dan 100.000"
      }
    },
    key: {
      label: {
        formName: {
          add: "Tambahkan kunci Redis baru",
          edit: "Edit kunci Redis",
          append: "Tambahkan ke kunci Redis yang ada"
        }
      },
      field: {
        streamTimestamp: "Stempel waktu",
        key: "Kunci",
        type: "Ketik",
        index: "Indeks",
        hashKey: "Kunci hash",
        score: "Skor",
        value: "Nilai"
      },
      error: {
        streamTimestamp: "Stempel waktu diperlukan, baik format Redis atau sebagai *",
        key: "Kuncinya adalah, setidaknya, satu karakter",
        hashKey: "Kunci tabel hash setidaknya terdiri dari satu karakter",
        score: "Skor set yang diurutkan diperlukan",
        value: "Nilainya diperlukan"
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
      title: "Cari",
      index: "Indeks",
      query: "Kueri",
      results: "Hasil",
      noIndex: "Tidak ada indeks",
      createIndex: "Buat indeks",
      dropIndex: "Hapus indeks",
      indexInfo: "Info indeks",
      indexName: "Nama indeks",
      prefix: "Prefiks kunci (opsional)",
      fieldName: "Nama field",
    },
    monitor: {
      title: "Pemantauan",
      memory: "Memori",
      opsPerSec: "Ops/detik",
      clients: "Klien",
      blocked: "Diblokir",
      hitsMisses: "Tingkat hit",
      networkIo: "Jaringan I/O",
      slowLog: "Log lambat",
      totalCommands: "Total",
      expired: "Kedaluwarsa",
      evicted: "Dikeluarkan",
      clientList: "Daftar klien",
      topKeys: "Kunci terbesar berdasarkan memori",
      killClient: "Matikan klien",
      clientKilled: "Klien dimatikan",
      confirmKillClient: "Yakin ingin menghentikan klien ini?",
      noKeys: "Tidak ada kunci",
      noClients: "Tidak ada klien",
    },
    overview: {
      noConnected: "Tidak ada koneksi ke Redis.",
      overviewClients: "Buat daftar yang terhubung berdasarkan jumlah klien",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "1 klien";
        }
        return `${opt.length} klien`;
      }
    },
    key: {
      label: {
        key: "Kunci",
        encoding: "Pengkodean",
        length: "Ukuran",
        ttl: "TTL",
        ttlTitle: "Saatnya Hidup",
        type: "Ketik",
        ttlNotExpire: "tidak kedaluwarsa",
        lengthString: "byte",
        lengthItem: "item",
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
          hashkey: "kunci hash",
          value: "Nilai"
        }
      },
      set: {
        table: {
          value: "Anggota"
        }
      },
      zset: {
        table: {
          value: "Anggota",
          score: "Skor"
        }
      },
      stream: {
        table: {
          timestamp: "ID stempel waktu",
          field: "Bidang",
          value: "Nilai"
        }
      }
    },
    treeControls: {
      settings: "Pengaturan pohon",
      expandAll: "Perluas semuanya",
      collapseAll: "Ciutkan semuanya",
      search: {
        search: "Cari di kunci",
        clear: "Hapus pencarian saat ini untuk mengosongkannya",
        placeholderClient: "Cari sisi klien",
        placeholderServer: "Sisi server pencarian",
        info: "Pencarian sisi klien berarti cocok dengan teks dalam input pencarian. Maksudnya pencarian sisi server, seperti pencarian dalam pola kunci sebagai *{teks-pencarian}*. Untuk kumpulan pencarian yang besar, lebih baik menggunakan pencarian sisi server. Untuk kumpulan pencarian yang lebih kecil, lebih baik menggunakan mode pencarian sisi klien." + ` Jika penghitungan kunci sudah selesai ${p3xr.settings.maxLightKeysCount}, Anda hanya dapat mencari di sisi server.`,
        largeSetInfo: "Dalam kumpulan besar, pencarian sisi klien dinonaktifkan. jadi saat ini hanya pencarian sisi server yang dimungkinkan.",
        infoDetails: "Untuk mengetahui cara kerja pencarian, silakan periksa pengaturannya"
      },
      pager: {
        next: "Selanjutnya",
        prev: "Sebelumnya",
        first: "Pertama",
        last: "Terakhir"
      }
    }
  },
  time: {
    loading: "Memuat...",
    years: "tahun",
    months: "bulan",
    days: "hari",
    year: "tahun",
    month: "bulan",
    day: "hari"
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
