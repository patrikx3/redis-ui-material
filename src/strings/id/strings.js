const strings = {
  error: {
    server_error: "Kesalahan server, silakan coba lagi",
    aiPromptTooLong: "Prompt AI terlalu panjang (maksimal 4096 karakter)",
  },
  title: {
    donate: "Donasi",
    donateTitle: "Dukung P3X Redis UI",
    donateDescription: "P3X Redis UI adalah proyek gratis dan open-source. Biaya pemeliharaan aplikasi, fitur AI, image Docker, server, dan infrastruktur berasal dari kantong pengembang sendiri. Jika Anda merasa alat ini berguna, pertimbangkan untuk mendukung pengembangan berkelanjutannya dengan donasi. Setiap kontribusi membantu menjaga proyek tetap hidup dan berkembang. Terima kasih!",
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
    threads: "Thread"
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
    delete: "Hapus?",
    deleteAllKeys: opts => {
      return `Hapus pohon ini dan semua kuncinya (${opts.key})?`;
    },
    deleteSearchKeys: opts => {
      return `Apakah Anda yakin ingin menghapus semua kunci yang cocok dengan "${opts.pattern}"? Ditemukan ${opts.count} kunci.`;
    },
    socketioConnectError: "Socket.IO tidak dapat terhubung ke server, Anda dapat memuat ulang dan mencoba mengatasi sendiri kesalahan koneksi, klien tidak tahu cara menyelesaikannya sendiri.",
    socketioAuthRequired: "Diperlukan otorisasi Socket.IO. Harap autentikasi dengan HTTP Basic Auth (nama pengguna/kata sandi) dan muat ulang.",
    invalidCredentials: "Nama pengguna atau kata sandi tidak valid.",
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
    deleteAllKeysMenu: (opts) => `Hapus semua ${opts.count}`,
    importKeys: "Impor kunci",
    deleteSearchKeys: (opts) => `Hapus ${opts.count} kunci yang cocok`,
    saveWithFormatJson: "Simpan dengan format",
    formatJson: "Format JSON",
    wrap: "Bungkus",
    unwrap: "Buka bungkusnya",
    downloadJson: "Unduh JSON",
    pubsubMonitor: "PubSub",
    pulse: "Pulse",
    profiler: "Profiler",
    memoryAnalysis: "Analysis",
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
    logout: "Keluar",
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
    fieldTtl: "TTL bidang",
    digest: "Ringkasan",
    delete: "Hapus",
    remove: "Hapus",
    areYouSure: "Apakah Anda yakin?",
    sure: "Tentu",
    testConnection: "Uji koneksi",
    getKey: "Memuat kunci Redis dan data terkait ...",
    jsonViewShow: "Tampilkan JSON",
    jsonViewEditor: "Sunting JSON",
    quickConsole: "Konsol Cepat",
    moveUp: "Pindahkan ke atas",
    moveDown: "Pindahkan ke bawah",
  },
  diff: {
    reviewChanges: "Tinjau perubahan",
    inline: "Sebaris",
    sideBySide: "Berdampingan",
    additions: "penambahan",
    deletions: "penghapusan",
    unchangedLines: "baris yang tidak berubah",
    noChanges: "Tidak ada perubahan yang terdeteksi",
    before: "Sebelum",
    after: "Sesudah",
  },
  label: {
    id: {
      nodeId: "ID simpul",
      id: "ID Koneksi",
      info: "Jika Anda tidak ingin mengubah properti: sshPassword, sshPrivateKey, password, tlsCrt, tlsKey, tlsCa, silakan masukkan ID koneksi di properti tersebut agar nilai properti tetap utuh. Jika ingin logika yang sama pada kata sandi simpul, maka masukkan ID simpul pada kata sandi simpul."
    },
    secureFeature: "Jika Anda melihat nilai yang dimulai dengan P3X dan terlihat sama, itu adalah fitur aman. Untuk mengubah pengaturan, cukup ganti pengaturan ini dengan yang kosong atau yang lain dan pengaturan itu akan disimpan. Jika Anda tidak mengubah pengaturan, pengaturan akan tetap seperti yang ada di server.",
    aiTranslating: "Menerjemahkan...",
    aiSettings: "Pengaturan AI",
    aiGroqApiKey: "Kunci API Groq",
    aiGroqApiKeyInfo: "Opsional. Kunci API Groq sendiri untuk performa lebih baik. Dapatkan kunci gratis dari",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "Kunci API AI tersimpan",
    aiGroqApiKeyInvalid: "Kunci API Groq tidak valid",
    aiGroqApiKeyNotSet: "Belum diatur (bawaan server)",
    aiEnabled: "AI diaktifkan",
    aiEnabledYes: "Ya",
    aiEnabledNo: "Tidak",
    aiRouteViaNetwork: "Rutekan melalui network.corifeus.com",
    aiRoutingDirect: "Kueri langsung ke Groq menggunakan kunci API Anda sendiri, melewati network.corifeus.com.",
    aiRoutingNetwork: "Kueri AI dirutekan melalui network.corifeus.com. Jika Anda memiliki kunci API Groq gratis sendiri, Anda dapat mematikan sakelar ini untuk merutekan langsung ke Groq tanpa network.corifeus.com.",
    aiMaxTokens: "Token AI maksimum",
    aiMaxTokensInfo: "Jumlah token maksimum untuk respons AI. Nilai yang lebih tinggi memungkinkan respons yang lebih panjang tetapi dapat menggunakan lebih banyak kredit API.",
    consoleDrawer: {
      toggleTooltip: "Alihkan konsol",
      clearTooltip: "Hapus gulir balik",
      closeTooltip: "Tutup konsol",
      aiSettingsTooltip: "pengaturan AI",
      modeRedis: "REDIS",
      modeAi: "AI",
      connectionChipNoDb: opts => `${opts.name}`,
      connectionChipWithDb: opts => `${opts.name} · db ${opts.db}`,
      pageChip: opts => `halaman: ${opts.page}`,
      connectingTo: opts => `Menyambungkan ke ${opts.name}…`,
      connectedTo: opts => `Terhubung ke ${opts.name} (Redis ${opts.version} ${opts.mode}, modul ${opts.modules} dimuat)`,
      connectedToNoInfo: opts => `Terhubung ke ${opts.name}`,
      disconnectedFrom: opts => `Terputus dari ${opts.name}`,
      readyIndicator: "Siap."
    },
    cheatsheet: {
      title: "AI Lembar Curang — Apa yang bisa saya tanyakan?",
      subtitle: "Klik perintah apa pun untuk menempelkannya ke konsol. Lalu tekan Enter.",
      searchPlaceholder: "Filter perintah…",
      openOfficialDocs: "Redis Perintah ↗",
      openOfficialDocsTooltip: "Buka referensi perintah resmi Redis di redis.io",
      closeTooltip: "Tutup (Esc)",
      empty: "Tidak ada perintah yang cocok dengan filter Anda.",
      footerHint: "Tip: ketik \"ai:\" diikuti dengan apa pun dalam bahasa apa pun — AI memahami 54 bahasa dan menggunakan status Redis langsung saat diperlukan.",
      groups: {
        diagnostics: {
          name: "Diagnostik langsung",
          description: "Minta AI untuk menyelidiki status server langsung melalui alat baca-saja yang aman.",
          prompts: [
            "kenapa memorinya tinggi?",
            "tunjukkan 10 pertanyaan paling lambat",
            "klien mana yang terhubung?",
            "apa kebijakan maxmemory?",
            "apakah ada penggusuran baru-baru ini?",
            "apakah ada kejadian latensi?",
            "sudah berapa lama servernya aktif?",
            "berapa tingkat keberhasilannya?",
            "tampilkan penggunaan CPU",
            "meringkas ruang kunci",
            "berapa banyak memori yang digunakan setiap tipe data?",
            "apakah ada yang memblokir server saat ini?"
          ]
        },
        keys: {
          name: "Kunci",
          description: "Periksa, temukan, dan pertimbangkan kunci tanpa mengklik pohonnya.",
          prompts: [
            "temukan semua kunci yang cocok dengan user:*",
            "berapa banyak kunci di setiap database?",
            "tampilkan hash terbesar di db ini",
            "temukan kunci dengan TTL kurang dari 60 detik",
            "kunci mana yang tidak memiliki TTL?",
            "jenis kunci apa session:abc?",
            "memperkirakan memori yang digunakan oleh awalan \"session:\"",
            "tampilkan pengkodean objek kunci user:42",
            "apakah ada kunci yang akan kedaluwarsa?",
            "namespace mana yang paling banyak menggunakan memori?"
          ]
        },
        dataTypes: {
          name: "Tipe data",
          description: "Ungkapan bahasa alami untuk membuat/membaca/memperbarui pada setiap jenis Redis.",
          prompts: [
            "buat hash bernama pengguna:1 dengan bidang nama=Alice age=30",
            "tambahkan tiga item ke daftar tasks",
            "tambahkan anggota untuk mengatur favourites",
            "tambahkan anggota yang diberi skor ke kumpulan yang diurutkan leaderboard",
            "menambahkan acara ke streaming events",
            "dapatkan 10 entri terakhir dari aliran events",
            "dapatkan semua bidang pengguna hash:1",
            "dapatkan anggota set favourites",
            "dapatkan 10 besar berdasarkan skor dari leaderboard"
          ]
        },
        modules: {
          name: "Modul",
          description: "Kueri untuk modul Redis yang dimuat (kategori di bawah hanya muncul jika modul ada).",
          prompts: []
        },
        json: {
          name: "RedisJSON",
          description: "Tersedia saat modul ReJSON dimuat.",
          prompts: [
            "buat dokumen JSON di user:42 dengan { nama: \"Alice\", umur: 30 }",
            "baca kolom nama user:42",
            "perbarui usia user:42 menjadi 31",
            "daftar semua kunci JSON",
            "hapus bidang dari dokumen JSON",
            "dapatkan bidang bersarang menggunakan JSONPath"
          ]
        },
        search: {
          name: "RediSearch",
          description: "Tersedia saat modul pencarian dimuat.",
          prompts: [
            "daftar semua indeks teks lengkap",
            "jalankan pencarian teks lengkap untuk \"redis\" pada indeks idx:products",
            "buat indeks yang didukung hash dengan judul bidang (TEXT) dan harga (NUMERIC)",
            "dapatkan info tentang indeks idx:products",
            "jatuhkan indeks idx:products",
            "temukan dokumen yang harganya antara 10 dan 50",
            "tulis pencarian hibrid yang menggabungkan kesamaan teks dan vektor"
          ]
        },
        timeseries: {
          name: "RedisTimeSeries",
          description: "Tersedia ketika modul deret waktu dimuat.",
          prompts: [
            "daftar semua kunci deret waktu",
            "tambahkan titik data ke temp:room1",
            "dapatkan rentang temp:room1 dari kemarin hingga sekarang",
            "dapatkan multi-rentang dengan label sensor=temp",
            "menghasilkan 100 titik data gelombang sinus untuk temp:room1",
            "tampilkan retensi dan label untuk temp:room1"
          ]
        },
        bloom: {
          name: "RedisBloom (Mekar / Cuckoo / Top-K / CMS / T-Digest)",
          description: "Tersedia saat modul bf dimuat.",
          prompts: [
            "periksa apakah item foo ada di filter mekar spam:ips",
            "tambahkan item ke filter mekar spam:ips",
            "buat top-K bernama popular dengan K=10",
            "sketsa hitungan menit kueri traffic untuk kunci /home",
            "tambahkan nilai ke t-digest dan dapatkan persentil ke-95",
            "tampilkan info untuk filter mekar spam:ips"
          ]
        },
        vectorSet: {
          name: "VectorSet (Redis 8+)",
          description: "Tersedia ketika Redis 8+ terdeteksi (tipe asli VECTORSET).",
          prompts: [
            "tambahkan vektor ke embeddings",
            "temukan 10 vektor yang paling mirip dengan vektor kueri",
            "tampilkan dimensi dan jumlah vektorset embeddings",
            "hapus elemen dari vectorset embeddings",
            "cari berdasarkan nama elemen dengan VSIM"
          ]
        },
        redis8: {
          name: "Redis 8+ fitur",
          description: "Ditampilkan ketika Redis 8+ terdeteksi.",
          prompts: [
            "atur bidang hash ttl dengan HEXPIRE",
            "mendapatkan intisari nilai string",
            "menjalankan pencarian teks lengkap + vektor hybrid (FT.HYBRID)",
            "atur beberapa kunci dengan masa berlaku bersama menggunakan MSETEX",
            "hapus entri aliran dengan grup konsumen (XDELEX)",
            "tampilkan statistik slot cluster untuk 10 slot teratas"
          ]
        },
        scripting: {
          name: "skrip",
          description: "Hasilkan skrip Lua / EVAL dari deskripsi bahasa alami.",
          prompts: [
            "tulis skrip atom yang menambah counter X hanya jika Y > 5",
            "hasilkan 100 kunci acak dengan Lua",
            "ubah pipa shell ini menjadi satu EVAL: kunci user:* | DAPATKAN | grep tidak aktif | DEL",
            "porting operasi batch ke Lua untuk keamanan cluster",
            "pembaruan gaya check-and-set dalam satu panggilan Lua",
            "ulangi hash dan hapus bidang yang cocok dengan suatu pola"
          ]
        },
        cluster: {
          name: "Gugus",
          description: "Hanya ditampilkan dalam mode cluster.",
          prompts: [
            "tampilkan info cluster",
            "daftar node cluster",
            "tampilkan 10 slot teratas berdasarkan jumlah kunci",
            "tampilkan 10 slot teratas berdasarkan memori",
            "master mana yang memiliki slot 5000?"
          ]
        },
        acl: {
          name: "ACL (Redis 6+)",
          description: "Periksa pengguna kontrol akses dan koneksi saat ini.",
          prompts: [
            "dengan siapa aku terhubung?",
            "daftar semua pengguna ACL",
            "izin apa yang saya miliki?",
            "tampilkan aturan pengguna default"
          ]
        },
        qna: {
          name: "Tanya Jawab Umum",
          description: "Ajukan pertanyaan pengetahuan Redis — tanpa alat, hanya jawaban.",
          prompts: [
            "apa itu ZADD?",
            "bagaimana cara kerja failover klaster?",
            "jelaskan SCAN vs KEYS",
            "kapan saya harus menggunakan EVAL vs beberapa perintah?",
            "apa saja opsi persistensi Redis?",
            "apa perbedaan antara RDB dan AOF?",
            "bagaimana Redis Sentinel memutuskan master baru?",
            "jelaskan tag hash dalam mode cluster"
          ]
        },
        translate: {
          name: "Bahasa alami → perintah Redis",
          description: "Jelaskan apa yang Anda inginkan dalam salah satu dari 54 bahasa; AI menulis perintah Redis.",
          prompts: [
            "hapus kunci user:42",
            "ganti nama kunci foo menjadi bar",
            "kunci kedaluwarsa session:abc dalam 10 detik",
            "salin sumber kunci ke tujuan",
            "meningkatkan kunjungan balik sebesar 5",
            "atur salam kunci ke \"hello\" selama 1 jam",
            "hapus semua kunci user:*",
            "tunjukkan 10 kunci tersibuk"
          ]
        }
      }
    },
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
    aclAuthHint: "Gunakan nama pengguna dan kata sandi Redis ACL untuk mengautentikasi. Biarkan kosong untuk pengguna default tanpa kata sandi.",
    tlsWithoutCert: "Aktifkan TLS tanpa sertifikat tambahan",
    tlsRejectUnauthorized: "Tolak sertifikat yang tidak sah",
    tlsSecure: "Jika Anda melihat konfigurasi TLS yang dimulai dengan P3X atau semua pengaturan TLS terlihat sama, itu adalah fitur aman. Untuk mengubah pengaturan, cukup ganti pengaturan ini dengan yang kosong atau yang lain dan pengaturan itu akan disimpan. Jika Anda tidak mengubah pengaturan TLS, pengaturan akan tetap seperti yang ada di server.",
    treeSeparatorEmpty: "Jika pemisah pohon kosong, pohon tidak akan memiliki simpul bersarang, hanya daftar murni",
    treeSeparatorEmptyNote: "Tidak ada node bersarang, hanya daftar murni",
    welcomeConsole: "Selamat datang di Konsol Redis",
    welcomeConsoleInfo: "SHIFT + Riwayat kursor ATAS atau BAWAH diaktifkan",
    redisListIndexInfo: "Kosong untuk menambahkan, -1 untuk menambahkan atau menyimpannya ke posisi yang ditunjukkan.",
    console: "Konsol",
    connectiondAdd: "Tambahkan koneksi",
    connectiondEdit: "Sunting koneksi",
    connectiondView: "Lihat koneksi",
    connections: "Koneksi",
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
    languageAuto: "Auto (system)",
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
    type: "Tipe",
    format: "Format",
    loading: "Memuat...",
    autoRefresh: "Otomatis",
    exportSearchHint: "Mengekspor hanya kunci yang cocok dengan pencarian saat ini",
    importSearchHint: "Impor berlaku untuk seluruh database, bukan hanya hasil pencarian",
    deleteSearchHint: "Menghapus semua kunci yang cocok dengan pencarian saat ini di server",
    deletingSearchKeys: "Menghapus kunci yang cocok...",
    importNoKeys: "Tidak ditemukan kunci dalam file",
    desktopNotifications: "Notifikasi Desktop",
    desktopNotificationsEnabled: "Aktifkan notifikasi desktop",
    desktopNotificationsInfo: "Terima notifikasi OS untuk pemutusan dan penyambungan ulang Redis saat aplikasi tidak dalam fokus."
  },
  status: {
    dataCopied: "Datanya ada di clipboard",
    exportDone: "Ekspor selesai",
    deletedSearchKeys: (opts) => `${opts.count} kunci dihapus`,
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
    reverted: "Dikembalikan",
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
    set: "Kuncinya disetel/ditambahkan",
    connectionRestored: "Koneksi dipulihkan",
    socketDisconnected: "Terputus",
    socketError: "Kesalahan koneksi",
    deletedHashKey: "Kunci hash dihapus",
    deletedSetMember: "Anggota set dihapus",
    deletedListElement: "Elemen daftar dihapus",
    deletedZSetMember: "Anggota sorted set dihapus",
    deletedStreamTimestamp: "Entri stream dihapus",
  },
  code: {
    "delete-connection": "Sambungan ini telah dihapus, jadi sambungan Anda terputus ke instans Redis ini.",
    "save-connection": "Koneksi ini telah diubah, jadi Anda terputus ke instance Redis ini. Anda dapat menyambung kembali.",
    "readonly-connections": "Koneksi tambah/simpan/hapus hanya dapat dibaca!",
    "readonly-connection-mode": "Koneksi ini adalah mode hanya baca!",
    "list-out-of-bounds": "Indeks daftar ini di luar batas",
    "invalid-json-value": "Nilai JSON tidak valid.",
    "http_auth_required": "Diperlukan otorisasi: harap autentikasi dengan HTTP Basic Auth dan muat ulang.",
    "auto-connection-failed": "Kemungkinan, koneksi terputus dan koneksi otomatis gagal, karena hal ini.",
    invalid_console_command: "Perintah ini tidak berfungsi melalui GUI.",
    "AI_DISABLED": "AI dinonaktifkan. Aktifkan di Pengaturan AI.",
    "AI_PROMPT_REQUIRED": "Permintaan AI diperlukan.",
    "GROQ_API_KEY_READONLY": "Kunci Groq API hanya-baca dan tidak dapat diubah.",
    "blocked_api_access": "Paket Groq API Anda tidak mengizinkan akses ke model ini. Tingkatkan paket Groq Anda atau gunakan proxy network.corifeus.com.",
    "rate_limit": "Batas kecepatan AI tercapai. Coba lagi nanti atau gunakan kunci Groq API Anda sendiri di Pengaturan."
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
      keyCount: (opts) => {
        return `Jumlah kunci: ${opts?.keyCount ?? 0}`;
      },
      label: {
        animation: "Gunakan animasi",
        noAnimation: "Tidak ada animasi",
        undoEnabled: "Urungkan aktif",
        undoDisabled: "Urungkan nonaktif",
        diffEnabled: "Tampilkan diff sebelum menyimpan",
        diffDisabled: "Diff sebelum simpan dinonaktifkan",
        jsonFormatTwoSpace: "Format JSON dengan 2 spasi",
        jsonFormatFourSpace: "Format JSON dengan 4 spasi",
        formName: "Pengaturan Redis",
        searchModeClient: "Mode pencarian klien",
        searchModeServer: "Modus pencarian server",
        searchModeStartsWith: "Pencarian dengan dimulai dengan mode",
        searchModeIncludes: "Pencarian mencakup mode"
      },
      undoHint: "Urungkan hanya tersedia untuk tipe kunci string dan JSON",
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
        value: "Nilai",
        errorRate: "Tingkat kesalahan",
        capacity: "Kapasitas",
        topk: "Top K",
        width: "Lebar",
        depth: "Kedalaman",
        decay: "Peluruhan",
        compression: "Kompresi",
        increment: "Kenaikan",
        item: "Item",
        vectorValues: "Nilai vektor (dipisahkan koma)",
        element: "Nama elemen",
      },
      error: {
        streamTimestamp: "Stempel waktu diperlukan, baik format Redis atau sebagai *",
        key: "Kuncinya adalah, setidaknya, satu karakter",
        hashKey: "Kunci tabel hash setidaknya terdiri dari satu karakter",
        score: "Skor set yang diurutkan diperlukan",
        value: "Nilainya diperlukan",
        errorRate: "Tingkat kesalahan harus antara 0 dan 1 (mis. 0,01)",
        capacity: "Kapasitas harus berupa bilangan bulat positif",
        topk: "Top K harus berupa bilangan bulat positif",
        width: "Lebar harus berupa bilangan bulat positif",
        depth: "Kedalaman harus berupa bilangan bulat positif",
        item: "Item diperlukan"
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
      hybridMode: "Pencarian hibrida (FT.HYBRID)",
      vectorField: "Bidang vektor",
      vectorValues: "Nilai vektor",
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
      noSlowQueries: "Tidak ada kueri lambat yang tercatat.",
      confirmSlowLogReset: "Apakah Anda yakin ingin menyetel ulang log lambat?",
      slowLogResetDone: "Log lambat telah diatur ulang.",
      totalCommands: "Total",
      expired: "Kedaluwarsa",
      evicted: "Dikeluarkan",
      clientList: "Daftar klien",
      topKeys: "Kunci terbesar berdasarkan memori",
      killClient: "Matikan klien",
      clientKilled: "Klien dimatikan",
      confirmKillClient: "Yakin ingin menghentikan klien ini?",
      noKeys: "Tidak ada kunci",
      rss: "RSS",
      peak: "Puncak",
      fragmentation: "Fragmentasi",
      hitsAndMisses: "Hit / Miss",
      noClients: "Tidak ada klien",
      slotStats: "Statistik slot kluster",
      serverInfo: "Informasi Server",
      os: "Sistem Operasi",
      port: "Port Jaringan",
      pid: "ID Proses",
      configFile: "File Konfigurasi",
      uptime: "Waktu aktif",
      keyspace: "Ruang kunci Redis",
      keys: "Kunci Redis",
      expires: "Kedaluwarsa",
      noKeyspace: "Tidak ada kunci",
      persistence: "Persistensi Data",
      rdbLastSave: "Penyimpanan Terakhir RDB",
      rdbStatus: "Status RDB",
      rdbChanges: "Perubahan Sejak Penyimpanan Terakhir",
      aofEnabled: "AOF Diaktifkan",
      aofSize: "Ukuran AOF",
      replication: "Replikasi Redis",
      role: "Peran Replikasi",
      replicas: "Replika Terhubung",
      masterHost: "Tuan Rumah Utama",
      linkStatus: "Status Tautan Replikasi",
      cpu: "Penggunaan CPU",
      cpuSys: "Sistem",
      cpuUser: "Pengguna",
      modules: "Modul Redis yang dimuat",
      noModules: "Tidak ada modul Redis yang dimuat",
      clusterSlotMap: "Peta slot cluster Redis",
      slotRange: "Rentang slot cluster",
      totalSlots: "Total slot cluster",
      noClusterData: "Tidak ada data klaster Redis yang tersedia.",
    },
    analysis: {
      title: "Analisis Memori",
      runAnalysis: "Jalankan Analisis",
      running: "Menganalisis...",
      typeDistribution: "Distribusi Tipe",
      prefixMemory: "Memori berdasarkan Prefiks",
      topKeysByMemory: "Kunci Terbesar berdasarkan Memori",
      expirationOverview: "Kedaluwarsa Kunci",
      memoryBreakdown: "Rincian Memori",
      keysScanned: "Kunci Dipindai",
      totalMemory: "Total Memori",
      rssMemory: "Memori RSS",
      peakMemory: "Memori Puncak",
      luaMemory: "Memori Lua",
      overheadMemory: "Overhead",
      datasetMemory: "Dataset",
      fragmentation: "Fragmentasi",
      allocator: "Pengalokasi",
      withTTL: "Dengan TTL",
      persistent: "Permanen",
      avgTTL: "Rata-rata TTL",
      prefix: "Prefiks",
      keyCount: "Jumlah Kunci",
      memoryUsage: "Penggunaan Memori",
      noPrefix: "(tanpa prefiks)",
      topN: "Top N",
      maxScanKeys: "Maks. Kunci Dipindai",
      type: "Tipe",
      noData: "Tidak ada data. Klik Jalankan Analisis untuk memulai.",
      exportAll: "Ekspor Semua",
      memoryDoctor: "Memory Doctor",
      doctorNoData: "Klik Segarkan untuk menjalankan diagnostik Memory Doctor.",
    },
    acl: {
      title: "pengguna ACL",
      loadUsers: "Memuat pengguna",
      loading: "Memuat...",
      username: "Nama pengguna",
      status: "Status",
      enabled: "Diaktifkan",
      disabled: "Dinonaktifkan",
      commands: "Perintah",
      commandsHint: "misalnya, +@all or +@read -@dangerous",
      keys: "Pola kunci redis",
      keysHint: "misalnya, ~* or ~user:*",
      channels: "Saluran Pub/Sub",
      channelsHint: "misalnya, &* or &notifications:*",
      password: "Kata sandi",
      noPassword: "Tidak ada kata sandi (tidak ada pass)",
      passwordHint: "Biarkan kosong untuk menyimpan kata sandi saat ini",
      currentUser: "Saat ini",
      createUser: "Buat pengguna",
      editUser: "Sunting pengguna",
      deleteUser: "Hapus",
      confirmDelete: "Apakah Anda yakin ingin menghapus pengguna ACL?",
      userDeleted: "Pengguna ACL telah dihapus.",
      userSaved: "Pengguna ACL telah disimpan.",
      cannotDeleteDefault: "Tidak dapat menghapus pengguna default.",
      cannotDeleteSelf: "Tidak dapat menghapus pengguna yang terhubung saat ini.",
      noUsers: "ACL memerlukan Redis 6.0+.",
      groupCommon: "Umum",
      groupDataTypes: "Tipe Data",
      groupOperations: "Operasi",
      rules: "Aturan",
      rulesHint: "Token yang dipisahkan spasi (misalnya on >password +@all ~* &*)",
      defaultUserWarning: "Perhatian: Memodifikasi pengguna default dapat mengunci semua koneksi. Jika ini terjadi, Anda perlu memulai ulang Redis atau menggunakan redis-cli untuk memulihkan akses.",
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
        compression: "Kompresi",
        aiRateLimited: "Batas permintaan AI tercapai. Coba lagi nanti atau gunakan kunci API Groq Anda sendiri di Pengaturan.",
        aiError: "Kueri AI gagal",
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
      },
      timeseries: {
        chart: "Grafik",
        info: "Info",
        addPoint: "Tambah Titik Data",
        from: "Dari (ms atau -)",
        to: "Ke (ms atau +)",
        aggregation: "Agregasi",
        timeBucket: "Ember (ms)",
        none: "Tidak ada",
        dataPoints: "titik data",
        labels: "Label",
        rules: "Aturan",
        retention: "Retensi",
        timestamp: "Stempel waktu",
        value: "Nilai",
        retentionHint: "0 = tidak kedaluwarsa, atau milidetik",
        duplicatePolicy: "Kebijakan duplikat",
        labelsHint: "key1 value1 key2 value2",
        timestampHint: "'*' berarti dibuat otomatis, atau stempel waktu milidetik",
        editAllHint: "Satu titik data per baris: stempel_waktu nilai (stempel waktu bisa * untuk otomatis)",
        autoSpread: "Interval penyebaran otomatis *",
        formula: "Rumus",
        formulaLinear: "Linier",
        formulaRandom: "Acak",
        formulaSawtooth: "Gigi gergaji",
        formulaPoints: "Titik",
        formulaAmplitude: "Amplitudo",
        formulaOffset: "Offset",
        generate: "Hasilkan",
        exportChart: "Ekspor PNG",
        overlay: "Overlay kunci",
        overlayHint: "Kunci dipisahkan koma",
        mrangeFilter: "Filter label",
        bulkMode: "Pembuatan massal",
        mrangeHint: "mis. sensor=temp"
      },
      probabilistic: {
        info: "Info",
        addItem: "Tambah Item",
        checkItem: "Periksa Item",
        item: "Item",
        exists: "Ada",
        doesNotExist: "Tidak ada",
        topkList: "Item Teratas",
        topkCount: "Jumlah",
        queryCount: "Jumlah Kueri",
        queryResult: "Hasil Kueri",
        addedSuccessfully: "Item berhasil ditambahkan",
        deletedSuccessfully: "Item berhasil dihapus",
        quantile: "Kuantil",
        quantileResult: "Hasil",
        noItems: "Tidak ada item untuk ditampilkan",
        resetConfirm: "Setel ulang semua data di T-Digest ini?"
      },
      vectorset: {
        info: "Info",
        elements: "Elemen",
        similarity: "Pencarian Kemiripan",
        searchByElement: "Cari berdasarkan elemen",
        searchByVector: "Cari berdasarkan vektor",
        vectorValues: "Nilai vektor",
        element: "Elemen",
        score: "Skor",
        count: "Jumlah",
        addElement: "Tambah Elemen",
        attributes: "Atribut",
        noAttributes: "Tidak ada atribut",
        dimensions: "Dimensi",
        removeConfirm: "Hapus elemen ini dari VectorSet?",
        noElements: "Tidak ada elemen",
        filter: "Filter",
        searchComplete: "Pencarian selesai",
      }
    },
    treeControls: {
      settings: "Pengaturan pohon",
      expandAll: "Perluas semuanya",
      collapseAll: "Ciutkan semuanya",
      level: "Tingkat",
      search: {
        search: "Cari di kunci",
        clear: "Hapus pencarian saat ini untuk mengosongkannya",
        placeholderClient: "Cari sisi klien",
        placeholderServer: "Sisi server pencarian",
        info: (opts) => "Pencarian sisi klien berarti cocok dengan teks dalam input pencarian. Maksudnya pencarian sisi server, seperti pencarian dalam pola kunci sebagai *{teks-pencarian}*. Untuk kumpulan pencarian yang besar, lebih baik menggunakan pencarian sisi server. Untuk kumpulan pencarian yang lebih kecil, lebih baik menggunakan mode pencarian sisi klien." + ` Jika penghitungan kunci sudah selesai ${opts?.maxLightKeysCount ?? 110000}, Anda hanya dapat mencari di sisi server.`,
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
    years: "tahun",
    months: "bulan",
    days: "hari",
    year: "tahun",
    month: "bulan",
    day: "hari",
    second: "detik",
    seconds: "detik",
    minute: "menit",
    minutes: "menit",
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
    timeseries: "Time Series",
    bloom: "Bloom filter",
    cuckoo: "Cuckoo filter",
    topk: "Top-K",
    cms: "Count-Min Sketch",
    tdigest: "T-Digest",
    vectorset: "VectorSet",
  },
  promo: {
    title: "AI Asisten Jaringan",
    description: "Temukan Asisten Jaringan AI gratis kami di network.corifeus.com — menganalisis domain, IPs, data DNS, sertifikat SSL, keamanan email, dan infrastruktur jaringan. Didukung oleh AI untuk hasil yang instan dan komprehensif.",
    disclaimer: "Promosi ini hanya ditampilkan di situs demo dan tidak akan muncul di Docker, Electron, atau penerapan aplikasi web.",
    toastMessage: "Coba Asisten Jaringan AI gratis kami di network.corifeus.com — analisis domain, DNS, SSL, dan banyak lagi!",
    visit: "Kunjungi network.corifeus.com"
  }
};
module.exports = strings;
