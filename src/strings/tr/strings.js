const strings = {
  error: {
    cleared_license: "Lisans temizlendi",
    invalid_license: "Geçersiz lisans",
    license_max_devices_reached: "Maksimum cihaz kotasına ulaşıldı",
    license_readonly: "Lisans yalnızca sunucu terminalinden değiştirilebilir.",
    server_error: "Sunucu hatası, lütfen tekrar deneyin"
  },
  title: {
    donate: "Bağış Yap",
    jsonRecursive: "Tüm yapraklar genişletiliyor",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "Sol alt menüden bağlanmak için bir Redis bağlantısı seçebilirsiniz.",
    statistics: "İstatistikler",
    error: "Hata",
    connectingRedis: "Redis'e bağlanılıyor ...",
    socketioConnectError: "Socket.IO Hatası",
    db: "DB",
    server: "Sunucu",
    clients: "İstemciler",
    memory: "Bellek",
    persistence: "Kalıcılık",
    stats: "İstatistikler",
    replication: "Replikasyon",
    cpu: "CPU",
    cluster: "Cluster",
    modules: "Modüller",
    errorstats: "Hata İstatistikleri",
    commandstats: "Komut İstatistikleri",
    latencystats: "Gecikme İstatistikleri",
    keysizes: "Anahtar Boyutları",
    threads: "İş Parçacıkları",
  },
  confirm: {
    dropIndex: "Bu indeksi silmek istediğinizden emin misiniz?",
    uploadBuffer: "Bu ikili veriyi yüklemek istediğinizden emin misiniz?",
    uploadBufferDone: "İkili veri yüklendi",
    uploadBufferDoneAndSave: "İkili veri yüklendi ve sunucuya kaydedildi",
    title: "Onayla",
    alert: "Uyarı",
    info: "Bilgi",
    deleteListItem: "Bu liste öğesini silmek istediğinizden emin misiniz?",
    deleteHashKey: "Bu hash anahtarını silmek istediğinizden emin misiniz?",
    deleteStreamTimestamp: "Bu stream zaman damgasını silmek istediğinizden emin misiniz?",
    deleteSetMember: "Bu küme üyesini silmek istediğinizden emin misiniz?",
    deleteZSetMember: "Bu sıralı küme üyesini silmek istediğinizden emin misiniz?",
    deleteConnection: "Onayla",
    deleteConnectionText: "Bu Redis bağlantısını silmek istediğinizden emin misiniz?",
    deleteNode: "Bu Redis düğümünü silmek istediğinizden emin misiniz?",
    deleteAllKeys: opts => {
      return `Bu ağacı ve tüm anahtarlarını silmek istiyor musunuz (${opts.key})?`;
    },
    socketioConnectError: "Socket.IO sunucuya bağlanamıyor, yeniden yükleyip bağlantı hatasını kendiniz çözmeyi deneyebilirsiniz, istemci bunu kendi başına nasıl çözeceğini bilmiyor.",
    socketioAuthRequired: "Socket.IO yetkilendirmesi gerekli. Lütfen HTTP Basic Auth (kullanıcı adı/şifre) ile kimlik doğrulaması yapın ve yeniden yükleyin.",
    deleteKey: "Bu anahtarı silmek istediğinizden emin misiniz?",
    rename: {
      title: "Bu anahtarı yeniden adlandırmak istediğinizden emin misiniz?",
      textContent: "Bu işlem anahtarı kalıcı olarak yeniden adlandırır.",
      placeholder: "Redis anahtarı (zorunlu)"
    },
    ttl: {
      title: "Bu anahtarın TTL değerini değiştirmek istediğinizden emin misiniz?",
      textContent: "TTL'yi değiştirmek bu anahtarın yaşam süresini günceller. Anahtarı kalıcı tutmak için boş bırakın.",
      placeholder: "Redis anahtarının TTL değeri (tamsayı veya boş)",
      placeholderPlaceholder: "Boş, kalıcı olduğu anlamına gelir; aksi takdirde bir tamsayı girin.",
      convertTextToTime: "Metni zamana dönüştür",
      convertTextToTimePlaceholder: "Örn. 1d, 86400 olacaktır"
    },
    license: {
      title: "Lisans ayarla",
      textContent: "Ücretli özellikleri kullanmak istiyorsanız, lisans talep etmek için support@corifeus.com adresine başvurun. Fiyatlandırma Pro ayda 400 HUF (ayda €1) veya yılda 4.000 HUF (yılda €10) ve Enterprise ayda 1.200 HUF (ayda €3) veya yılda 12.000 HUF (yılda €30). Yıllık fiyat aylığın 10 katıdır. %27 KDV ile toplamlar Pro ayda 500 HUF (ayda €1,27) veya yılda 5.100 HUF (yılda €12,70), Enterprise ayda 1.500 HUF (ayda €3,81) veya yılda 15.200 HUF (yılda €38,10). Lisans doğrulaması internet erişimi gerektirir. Varsayılan lisans 5 koltuk içerir. Daha fazla koltuğa ihtiyacınız varsa support@corifeus.com adresinden bize ulaşın.",
      placeholder: "Lisans anahtarı"
    }
  },
  language: {
    bg: "Български / Bulgarian",
    cs: "Čeština / Czech",
    de: "Deutsch / German",
    el: "Ελληνικά / Greek",
    en: "English",
    es: "Español / Spanish",
    fr: "Français / French",
    hu: "Magyar / Hungarian",
    it: "Italiano / Italian",
    ja: "日本語 / Japanese",
    nl: "Nederlands / Dutch",
    pl: "Polski / Polish",
    "pt-PT": "Português / Portuguese",
    ro: "Română / Romanian",
    ru: "Русский / Russian",
    sk: "Slovenčina / Slovak",
    sr: "Српски / Serbian",
    sv: "Svenska / Swedish",
    tr: "Türkçe / Turkish",
    uk: "Українська / Ukrainian",
    zn: "中文 / Chinese",
    ar: "العربية / Arabic",
    az: "Azərbaycanca / Azerbaijani",
    be: "Беларуская / Belarusian",
    bn: "বাংলা / Bengali",
    da: "Dansk / Danish",
    et: "Eesti / Estonian",
    fi: "Suomi / Finnish",
    fil: "Filipino / Filipino",
    he: "עברית / Hebrew",
    hr: "Hrvatski / Croatian",
    hy: "Հայերեն / Armenian",
    id: "Bahasa Indonesia / Indonesian",
    ka: "ქართული / Georgian",
    kk: "Қазақша / Kazakh",
    km: "ខ្មែរ / Khmer",
    ko: "한국어 / Korean",
    ky: "Кыргызча / Kyrgyz",
    lt: "Lietuvių / Lithuanian",
    mk: "Македонски / Macedonian",
    ms: "Bahasa Melayu / Malay",
    ne: "नेपाली / Nepali",
    no: "Norsk / Norwegian",
    "pt-BR": "Português (Brasil) / Portuguese (Brazil)",
    sl: "Slovenščina / Slovenian",
    tg: "Тоҷикӣ / Tajik",
    th: "ไทย / Thai",
    vi: "Tiếng Việt / Vietnamese",
    "zh-HK": "中文（香港） / Chinese (Hong Kong)",
    "zh-TW": "中文（台灣） / Chinese (Taiwan)",
    bs: 'Bosanski / Bosnian',
    si: 'සිංහල / Sinhala',
    sw: 'Kiswahili / Swahili',
    ta: 'தமிழ் / Tamil'
  },
  intention: {
    copy: "Kopyala",
    downloadBuffer: "İkili indir",
    setBuffer: "İkili yükle",
    exportKeys: "Anahtarları dışa aktar",
    exportAllKeys: (opts) => `Tüm ${opts.count} anahtarı dışa aktar`,
    exportSearchResults: (opts) => `${opts.count} sonucu dışa aktar`,
    importKeys: "Anahtarları içe aktar",
    saveWithFormatJson: "Biçimle kaydet",
    formatJson: "Json Biçimle",
    wrap: "Kaydır",
    unwrap: "Kaydırma",
    downloadJson: "JSON indir",
    pubsubMonitor: "PubSub İzleyici",
    language: "Dil / Language",
    ok: "Tamam",
    addKey: "Bu anahtara ekle",
    addKeyRoot: "Kök anahtar ekle",
    reloadKey: "Anahtarı yeniden yükle",
    reload: "Yeniden yükle",
    close: "Kapat",
    commands: "Komutlar",
    view: "Görünüm",
    statistics: "İstatistikler",
    refresh: "Yenile",
    pause: "Duraklat",
    resume: "Devam et",
    clear: "Temizle",
    rename: "Yeniden adlandır",
    main: "Veritabanı",
    cancel: "İptal",
    theme: "Tema",
    github: "GitHub",
    githubRepo: "Depo",
    githubRelease: "Sürümler",
    githubChangelog: "Değişiklik günlüğü",
    info: "Info",
    settings: "Ayarlar",
    connect: "Bağlan",
    disconnect: "Bağlantıyı kes",
    overview: "Genel Bakış",
    console: "Konsol",
    noConnections: "Bağlantı yok, ayarlar menüsünden bir bağlantı ekleyin.",
    noConnectionsInSettings: "Bağlantı yok, yukarıdan YENİ BAĞLANTI ekleyebilirsiniz.",
    connectionAdd: "Yeni bağlantı",
    addGroup: "Grup ekle",
    extend: "Genişlet",
    collapse: "Daralt",
    add: "Ekle",
    edit: "Düzenle",
    save: "Kaydet",
    ttl: "TTL Ayarla",
    license: "Lisans ayarla",
    delete: "Sil",
    remove: "Kaldır",
    sure: "Emin",
    testConnection: "Bağlantıyı test et",
    getKey: "Redis anahtarı ve ilgili veriler yükleniyor ...",
    jsonViewShow: "JSON Görüntüle",
    jsonViewEditor: "JSON Düzenle",
    quickConsole: "Hızlı Konsol",
  },
  label: {
    id: {
      nodeId: 'Düğüm ID',
      id: "Bağlantı ID",
      info: "sshPassword, sshPrivateKey, password, tlsCrt, tlsKey, tlsCa özelliklerini değiştirmek istemiyorsanız, değerleri korumak için bu özelliklere bağlantı ID'sini girin. Aynı mantığı düğüm şifresi için istiyorsanız, düğüm şifresine düğüm ID'sini girin."
    },
    secureFeature: 'P3X ile başlayan ve aynı görünen bir değer görüyorsanız, bu bir güvenlik özelliğidir. Ayarları değiştirmek için bunları boş veya başka bir şeyle değiştirin, kaydedilecektir. Ayarları değiştirmezseniz sunucudaki haliyle korunacaktır.',
    aiTranslating: "Çevriliyor...",
    aiSettings: "AI Ayarları",
    aiGroqApiKey: "Groq API Anahtarı",
    aiGroqApiKeyInfo: "İsteğe bağlı. Daha iyi performans için kendi Groq API anahtarınız. Ücretsiz anahtar alın",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "AI API anahtarı kaydedildi",
    aiGroqApiKeyNotSet: "Ayarlanmamış (sunucu varsayılanı)",
    ssh: {
      on: 'SSH açık',
      off: 'SSH kapalı',
      sshHost: 'SSH Ana Bilgisayar',
      sshPort: 'SSH port',
      sshUsername: 'SSH kullanıcı adı',
      sshPassword: 'SSH şifre',
      sshPrivateKey: 'SSH özel anahtar'
    },
    isBuffer: opts => `[object ArrayBuffer] değerin ikili veri olduğu veya değerin ${opts.maxValueAsBuffer} değerinden büyük olduğu anlamına gelir`,
    streamValue: `Stream alanı ve değeri tek satırdır. Örn.: field1 value1 "field 2" "value 2"`,
    streamTimestampId: `'*' otomatik oluşturulmuş anlamına gelir veya <milisaniyeZamanı>-<sıraNumarası> biçiminde belirtim`,
    unableToLoadKey: ({
      key
    }) => {
      return `Bu anahtar yüklenemiyor: ${key}. Muhtemelen anahtar silinmiş. Tam hata konsolda görünür.`;
    },
    bigJson: "Bu JSON nesnesi 10 kb'den büyük, bu yüzden ne yaptığınızı bildiğinizden emin olun, çünkü bazı işlevler yavaş render edebilir.",
    addNode: "Düğüm ekle",
    validateJson: "JSON Doğrula",
    reducedFunction: `Azaltılmış işlevsellik`,
    tooManyKeys: opts => {
      return `Tam işlevsellik için izin verilen maksimum anahtar sayısı ${opts.maxLightKeysCount}. Bu veritabanında toplam ${opts.count} izin verilen üzerinde anahtar var. Anahtar sıralama ve ek ağaç bilgisi devre dışı bırakıldı. Arama istemci araması yerine yalnızca sunucuda yapılıyor.`;
    },
    redisCommandNotFound: "Eşleşen Redis komutu bulunamadı ...",
    treeKeyStore: `Sıralama (doğal karşılaştırma) istemcide yani tarayıcıda yapılır, bu da 10k üzerinde anahtar gibi büyük veri kümeleri için bir performans maliyeti olduğu anlamına gelir, sayfa oluşturmaya biraz zaman ekleyebilir. Redis'te anahtar sıralaması yoktur, yalnızca bu şekilde yapılır.`,
    socketIoTimeout: options => {
      return `Bu istek için Socket.IO zaman aşımına uğradı (maks ${options.timeout / 1000} saniye) ...`;
    },
    resizerInfo: options => {
      return `Sol veya sağ panel minimum genişliği ${options.width}px`;
    },
    jsonViewNotParsable: "Bu değer JSON olarak ayrıştırılamaz  ",
    ttlTitle: "TTL'yi saniye olarak ayarlayın",
    passwordSecure: "Şifre boş olabilir, ancak yine de karakterler gösterecektir, bu bir güvenlik özelliğidir.",
    tlsWithoutCert: "Ek sertifika olmadan TLS'yi etkinleştir",
    tlsRejectUnauthorized: "Yetkisiz sertifikayı reddet",
    tlsSecure: "P3X ile başlayan bir TLS yapılandırması görüyorsanız veya tüm TLS ayarları aynı görünüyorsa, bu bir güvenlik özelliğidir. Ayarları değiştirmek için bunları boş veya başka bir şeyle değiştirin, kaydedilecektir. TLS ayarlarını değiştirmezseniz sunucudaki haliyle korunacaktır.",
    treeSeparatorEmpty: "Ağaç ayırıcısı boşsa, ağaçta iç içe düğümler olmaz, sadece düz bir liste olur",
    treeSeparatorEmptyNote: "İç içe düğüm yok, sadece düz bir liste",
    welcomeConsole: "Redis Konsoluna Hoş Geldiniz",
    welcomeConsoleInfo: "İmleç YUKARI veya AŞAĞI geçmişi etkindir",
    redisListIndexInfo: "Sona eklemek için boş bırakın, başa eklemek için -1 veya gösterilen konuma kaydedin.",
    console: "Konsol",
    connectiondAdd: "Bağlantı ekle",
    connectiondEdit: "Bağlantı düzenle",
    connectiondView: "Bağlantı görüntüle",
    connections: "Bağlantılar",
    licenseInfo: "Lisans",
    licenseEditable: "Lisans düzenlenebilir",
    licenseEditableYes: "Evet",
    licenseEditableNo: "Hayır",
    licenseTerminalOnly: "Lisans yalnızca sunucu terminalinden yapılandırılabilir.",
    licenseTierPolicyTitle: "Katman politikası",
    licenseTierPolicyText: "<h4>Ücretsiz</h4>Yalnızca temel Redis UI; SSH tüneli yok, Salt okunur bağlantı modu yok, Cluster/Sentinel yok, JSON Düzenleme/İkili Yükleme/İkili İndirme yok, ReJSON yok.<br/><strong>Fiyat: 0 HUF/ay (€0/ay).</strong><br/><br/><h4>Pro</h4>SSH tüneli, Salt okunur bağlantı modu (--readonly-connections/-r dahil), JSON Düzenleme, İkili Yükleme, İkili İndirme, ReJSON.<br/><strong>Taban fiyat: 400 HUF/ay (€1/ay) veya 4.000 HUF/yıl (€10/yıl).</strong><br/><strong>%27 KDV ile toplam: 500 HUF/ay (€1,27/ay) veya 5.100 HUF/yıl (€12,70/yıl).</strong><br/><br/><h4>Enterprise</h4>SSH tüneli, Cluster ve Sentinel, artı JSON Düzenleme, İkili Yükleme, İkili İndirme, ReJSON; --readonly-connections/-r de çalışır.<br/><strong>Taban fiyat: 1.200 HUF/ay (€3/ay) veya 12.000 HUF/yıl (€30/yıl).</strong><br/><strong>%27 KDV ile toplam: 1.500 HUF/ay (€3,81/ay) veya 15.200 HUF/yıl (€38,10/yıl).</strong><br/><br/><h4>Yıllık kural</h4>Yıllık fiyat aylık fiyatın 10 katıdır.<br/><br/><h4>Koltuklar</h4>Varsayılan lisans 5 koltuk içerir. Daha fazla koltuğa ihtiyacınız varsa <a href='mailto:support@corifeus.com'>support@corifeus.com</a> adresinden bize ulaşın.<br/><br/><h4>Enterprise deneme</h4>Gerçek mevcut bir e-posta adresine sahip herkes için 10 gün ücretsiz (test e-postası değil).<br/><hr/><h4>E-posta ile fatura bilgisi</h4>Ad, Fatura e-postası, Ülke kodu, Posta kodu, Şehir, Adres, KDV numarası (isteğe bağlı).<br/><br/><h4>Ödeme</h4>PayPal ödemesi yalnızca HUF (forint) ile yapılabilir; parayı @ <a href='https://paypal.me/corifeus'>https://paypal.me/corifeus</a> adresine gönderdikten sonra size bir fatura göndereceğim. Tüm ödemeler iade edilemez.<br/><br/><h4>KDV</h4>KDV fiyata eklenir (Macaristan'da %27).<br/><hr/><h4>İletişim</h4>Merhaba demek veya bir sorunuz varsa <a href='mailto:support@corifeus.com'>support@corifeus.com</a> ile iletişime geçin.<br/><hr/><h4>Dil</h4>Fatura ve lisans e-posta iletişimi İngilizcedir. Fatura para birimi HUF'tur.<br/><hr/><h4>Not</h4>Lisans doğrulaması internet erişimi gerektirir.",
    licenseState: "Durum",
    licenseStateActive: "Aktif",
    licenseStateInactive: "Pasif",
    licenseStateNoLicense: "Lisans yok",
    licenseKeyMasked: "Kayıtlı anahtar",
    licenseTier: "Katman",
    licenseValid: "Geçerli",
    licenseStatus: "Lisans durumu",
    licenseReason: "Sebep",
    licenseCheckedAt: "Kontrol tarihi",
    licenseStartsAt: "Başlangıç",
    licenseExpiresAt: "Bitiş",
    licenseDaysLeft: "Kalan gün",
    licenseMaxDevices: "Maks cihaz",
    licenseActiveDevices: "Aktif cihazlar",
    licenseActiveDevicesInfo: "Bir cihaz artık kullanılmıyorsa, koltuğu 75 dakika sonra otomatik olarak serbest bırakılır.",
    licenseCustomerEmail: "Müşteri e-postası",
    licenseFeatures: "Özellikler",
    licenseFeaturesEmpty: "Ek özellik yok",
    licenseFeatureReadonlyMode: "Salt okunur bağlantı modu",
    licenseFeatureReadonlyConnectionsFlag: "Salt okunur bağlantılar (--readonly-connections/-r)",
    licenseFeatureSsh: "SSH tüneli",
    licenseFeatureCluster: "Cluster bağlantıları",
    licenseFeatureSentinel: "Sentinel bağlantıları",
    licenseFeatureReJSON: "ReJSON (JSON data type)",
    keysSort: {
      on: "Anahtar sıralama açık",
      off: "Anahtar sıralama kapalı"
    },
    cluster: {
      on: "Cluster açık",
      off: "Cluster kapalı"
    },
    sentinel: {
      on: "Sentinel açık",
      off: "Sentinel kapalı",
      name: "Sentinel adı"
    },
    readonly: {
      on: "Salt okunur açık",
      off: "Salt okunur kapalı"
    },
    proSshOnly: "SSH, Pro veya Enterprise sürümünde kullanılabilir.",
    proReadonlyOnly: "Salt okunur bağlantı modu, Pro veya Enterprise sürümünde kullanılabilir.",
    enterpriseClusterSentinelOnly: "Cluster ve Sentinel yalnızca Enterprise sürümünde kullanılabilir.",
    theme: {
      light: "Açık",
      dark: "Koyu enterprise",
      darkNeu: "Koyu",
      darkoBluo: "Darko bluo",
      enterprise: "Enterprise",
      redis: "Redis",
      matrix: "Matrix"
    },
    connected: opts => {
      return `Bağlandı: ${opts.name}`;
    },
    tree: "Ağaç",
    askAuth: "Yetkilendirme iste",
    keyboardShortcuts: "Klavye kısayolları",
    about: "Hakkında",
    supportedLanguages: "Desteklenen diller",
    version: "Sürüm",
    redisVersion: "Redis sürümü",
    modules: "Modüller",
    shortcutRefresh: "Yenile",
    shortcutSearch: "Aramaya odaklan",
    shortcutNewKey: "Yeni anahtar",
    shortcutDisconnect: "Bağlantıyı kes",
    themeAuto: "Otomatik (sistem)",
    shortcutCommandPalette: "Komut paleti",
    commandPalette: "Komut paleti",
    noResults: "Sonuç yok",
    redisCommandsReference: "Redis Komutları",
    ungrouped: "Grupsuz",
    grouped: "Gruplanmış",
    connectFirst: "Önce bir Redis sunucusuna bağlanın",
    searchLanguage: "Dil ara...",
    exportProgress: "Anahtarlar dışa aktarılıyor...",
    importProgress: "Anahtarlar içe aktarılıyor...",
    importPreview: "Önizleme",
    importOverwrite: "Üzerine yaz",
    importSkip: "Atla",
    importConflict: "Anahtar zaten varsa:",
    noKeysToExport: "Dışa aktarılacak anahtar yok",
    time: "Zaman",
    loading: "Yükleniyor...",
    autoRefresh: "Otomatik",
    exportSearchHint: "Yalnızca mevcut aramayla eşleşen anahtarlar dışa aktarılıyor",
    importSearchHint: "İçe aktarma yalnızca arama sonuçlarına değil, tüm veritabanına uygulanır",
    importNoKeys: "Dosyada anahtar bulunamadı",
  },
  status: {
    dataCopied: "Veri panoya kopyalandı",
    licenseSaved: "Lisans kaydedildi",
    exportDone: "Dışa aktarma tamamlandı",
    indexCreated: "İndeks oluşturuldu",
    indexDropped: "İndeks silindi",
    importDone: (opts) => `İçe aktarma tamamlandı: ${opts.created} oluşturuldu, ${opts.skipped} atlandı, ${opts.errors} hata`,
    nodeRemoved: "Düğüm kaldırıldı",
    keyIsNotExisting: "Bu anahtar silinmiş veya süresi dolmuş olabilir.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "Anahtar yok";
      } else if (opts.keyCount === 1) {
        return "1 anahtar";
      } else {
        return `${opts.keyCount} anahtar`;
      }
    },
    treeExpandAll: "Tüm ağaç yapraklarını genişlet. Bu işlem maliyetli olabilir ve zaman alabilir ...",
    noRedisKeys: "Bu veritabanında anahtar bulunmuyor.",
    redisConnected: "Redis bağlantısı başarılı",
    reloadingDataInfo: "Redis veri bilgisi yeniden yükleniyor",
    added: "Eklendi",
    saved: "Güncellendi",
    cancelled: "İptal edildi",
    deleted: "Silindi",
    savedRedis: "Redis verisi kaydedildi",
    redisDisconnected: opts => {
      return `Mevcut bağlantıda bir hata oluştu: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `DB indeksi ${opts.db} olarak ayarlandı. `;
    },
    treeDeleted: opts => {
      return `Ağaç anahtarı silindi (${opts.key}).`;
    },
    deletedKey: opts => {
      return `Anahtar silindi (${opts.key}).`;
    },
    renamedKey: "Bu anahtar yeniden adlandırıldı",
    ttlChanged: "Bu anahtarın TTL değeri değiştirildi",
    notInteger: "Bu girdi bir tamsayı değil",
    persisted: "Bu anahtar kalıcı olarak saklanıyor",
    set: "Anahtar ayarlandı/eklendi"
  },
  code: {
    "delete-connection": "Bu bağlantı silindi, bu yüzden bu Redis örneğinden bağlantınız kesildi.",
    "save-connection": "Bu bağlantı değiştirildi, bu yüzden bu Redis örneğinden bağlantınız kesildi. Yeniden bağlanabilirsiniz.",
    "readonly-connections": "Bağlantı ekleme/kaydetme/silme yalnızca salt okunurdur!",
    "readonly-connection-mode": "Bu bağlantı salt okunur modda!",
    "list-out-of-bounds": "Bu liste indeksi sınır dışında",
    "donation-ware-feature": "Bu özellik bağış sürümünde mevcuttur.",
    "feature-pro-readonly-required": "Salt okunur bağlantı modu Pro veya Enterprise lisansı gerektirir.",
    "feature-pro-ssh-required": "SSH tüneli Pro veya Enterprise lisansı gerektirir.",
    "feature-enterprise-cluster-sentinel-required": "Cluster ve Sentinel, Enterprise lisansı gerektirir.",
    "feature-pro-json-binary-required": "JSON Düzenleme, İkili Yükleme ve İkili İndirme Pro veya Enterprise lisansı gerektirir.",
    "feature-pro-rejson-required": "ReJSON (JSON data type) requires Pro or Enterprise license.",
    "invalid-json-value": "The value is not valid JSON.",
    "http_auth_required": "Yetkilendirme gerekli: lütfen HTTP Basic Auth ile kimlik doğrulaması yapın ve yeniden yükleyin.",
    "auto-connection-failed": "Muhtemelen bağlantı kaldırıldı ve bu nedenle otomatik bağlantı başarısız oldu.",
    invalid_console_command: "Bu komut GUI üzerinden çalışmıyor."
  },
  licenseReason: {
    LICENSE_VALID: "Lisans geçerli",
    LICENSE_INVALID: "Lisans geçersiz",
    LICENSE_MISSING: "Lisans anahtarı ayarlanmamış",
    LICENSE_DISABLED: "Lisans sunucu yapılandırmasında devre dışı bırakıldı",
    LICENSE_NOT_FOUND: "Lisans bulunamadı",
    LICENSE_EXPIRED: "Lisansın süresi doldu",
    LICENSE_CLEARED: "Lisans anahtarı temizlendi",
    LICENSE_MAX_DEVICES_REACHED: "Maksimum cihaz kotasına ulaşıldı",
    PRODUCT_MISMATCH: "Lisans ürünü eşleşmiyor"
  },
  licenseStatusValue: {
    active: "Aktif",
    deleted: "Silindi",
    all: "Tümü",
    expired: "Süresi doldu",
    missing: "Eksik",
    inactive: "Pasif"
  },
  form: {
    error: {
      required: "Zorunlu",
      port: "Port 1-65535 arasında olmalıdır",
      invalid: "Form geçersiz"
    },
    connection: {
      label: {
        name: "Ad",
        group: "Grup",
        host: "Ana bilgisayar adı",
        port: "Port",
        password: "Şifre",
        username: "Kullanıcı adı"
      }
    },
    treeSettings: {
      maxValueDisplay: "Maksimum değer görüntüleme uzunluğu",
      maxValueDisplayInfo: "0 olarak ayarlanırsa tam değerleri gösterir. 0'dan büyükse bu uzunluğa kısaltır. -1 ise: dizeler için düzenlemeye kadar değeri gizler; diğer türler için tam içeriği gösterir.",
      maxKeys: "Maksimum anahtar sayısı",
      maxKeysInfo: "GUI'nin çökmemesi için maksimum anahtar sayısını sınırlıyoruz.",
      keyCount: () => {
        return `Anahtar sayısı: ${p3xr.state.keysRaw.length}`;
      },
      label: {
        animation: "Animasyon kullan",
        noAnimation: "Animasyon yok",
        jsonFormatTwoSpace: "JSON'u 2 boşlukla biçimle",
        jsonFormatFourSpace: "JSON'u 4 boşlukla biçimle",
        formName: "Redis ayarları",
        searchModeClient: "İstemci arama modu",
        searchModeServer: "Sunucu arama modu",
        searchModeStartsWith: "İle başlayan modda ara",
        searchModeIncludes: "İçeren modda ara"
      },
      field: {
        treeSeparator: "Ağaç ayırıcısı",
        treeSeparatorSelector: "Ağaç ayırıcı seçici",
        page: "Ağaç sayfalama sayısı",
        keyPageCount: "Anahtar sayfalama sayısı",
        keysSort: "Anahtarları sırala",
        searchMode: "Arama modu",
        searchModeStartsWith: "İle başlayan / içeren arama"
      },
      error: {
        keyPageCount: "Anahtar sayfa sayısı 5 - 100 arasında bir tamsayı olmalıdır",
        page: "Sayfa sayısı 10 - 5000 arasında bir tamsayı olmalıdır",
        maxValueDisplay: "Maksimum görüntüleme değeri -1 ile 32768 arasında bir tamsayı olmalıdır",
        maxKeys: "Maksimum anahtar sayısı değeri 100 ile 100000 arasında bir tamsayı olmalıdır"
      }
    },
    key: {
      label: {
        formName: {
          add: "Yeni Redis anahtarı ekle",
          edit: "Redis anahtarını düzenle",
          append: "Mevcut Redis anahtarına ekle"
        }
      },
      field: {
        streamTimestamp: "Zaman damgası",
        key: "Anahtar",
        type: "Tür",
        index: "İndeks",
        hashKey: "Hash anahtarı",
        score: "Puan",
        value: "Değer"
      },
      error: {
        streamTimestamp: "Zaman damgası gereklidir, Redis formatında veya * olarak",
        key: "Anahtar en az bir karakter olmalıdır",
        hashKey: "Hash tablosu anahtarı en az bir karakter olmalıdır",
        score: "Sıralı küme puanı gereklidir",
        value: "Değer gereklidir"
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
      title: "Arama",
      index: "İndeks",
      query: "Sorgu",
      results: "Sonuçlar",
      noIndex: "İndeks bulunamadı",
      createIndex: "İndeks oluştur",
      dropIndex: "İndeksi sil",
      indexInfo: "İndeks bilgisi",
      indexName: "İndeks adı",
      prefix: "Anahtar ön eki (isteğe bağlı)",
      fieldName: "Alan adı",
    },
    monitor: {
      title: "İzleme",
      memory: "Bellek",
      opsPerSec: "İşlem/sn",
      clients: "İstemciler",
      blocked: "Engellenen",
      hitsMisses: "İsabet oranı",
      networkIo: "Ağ I/O",
      slowLog: "Yavaş günlük",
      totalCommands: "Toplam",
      expired: "Süresi dolan",
      evicted: "Çıkarılan",
      clientList: "İstemci listesi",
      topKeys: "Belleğe göre en büyük anahtarlar",
      killClient: "İstemciyi sonlandır",
      clientKilled: "İstemci sonlandırıldı",
      confirmKillClient: "Bu istemciyi sonlandırmak istediğinizden emin misiniz?",
      noKeys: "Anahtar yok",
      noClients: "İstemci yok",
    },
    overview: {
      noConnected: "Redis'e bağlantı yok.",
      overviewClients: "Bağlı olanları istemci sayısına göre listele",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "1 istemci";
        }
        return `${opt.length} istemci`;
      }
    },
    key: {
      label: {
        key: "Anahtar",
        encoding: "Kodlama",
        length: "Boyut",
        ttl: "TTL",
        ttlTitle: "Yaşam Süresi",
        type: "Tür",
        ttlNotExpire: "süresi dolmaz",
        lengthString: "bayt",
        lengthItem: "öğe",
        actions: "İşlemler"
      },
      list: {
        table: {
          index: "İndeks",
          value: "Değer"
        }
      },
      hash: {
        table: {
          hashkey: "Hash anahtarı",
          value: "Değer"
        }
      },
      set: {
        table: {
          value: "Üye"
        }
      },
      zset: {
        table: {
          value: "Üye",
          score: "Puan"
        }
      },
      stream: {
        table: {
          timestamp: "Zaman damgası ID",
          field: "Alan",
          value: "Değer"
        }
      }
    },
    treeControls: {
      settings: "Ağaç ayarları",
      expandAll: "Tümünü genişlet",
      collapseAll: "Tümünü daralt",
      search: {
        search: "Anahtarlarda ara",
        clear: "Mevcut aramayı temizle",
        placeholderClient: "İstemci tarafında ara",
        placeholderServer: "Sunucu tarafında ara",
        info: "İstemci tarafı araması, arama girişindeki metni eşleştirmek anlamına gelir. Sunucu tarafı araması, anahtar kalıplarında *{arama-metni}* gibi arama yapmak anlamına gelir. Büyük arama kümeleri için sunucu tarafı araması kullanmak daha iyidir. Küçük arama kümeleri için istemci tarafı arama modu kullanmak daha iyidir." + ` Anahtar sayısı ${p3xr.settings.maxLightKeysCount} üzerindeyse yalnızca sunucu tarafında arama yapabilirsiniz.`,
        largeSetInfo: "Büyük bir veri kümesinde istemci tarafı araması devre dışıdır, şu anda yalnızca sunucu tarafı araması yapılabilir.",
        infoDetails: "Aramanın nasıl çalıştığını öğrenmek için lütfen ayarları kontrol edin"
      },
      pager: {
        next: "Sonraki",
        prev: "Önceki",
        first: "İlk",
        last: "Son"
      }
    }
  },
  time: {
    loading: "Yükleniyor...",
    years: "yıl",
    months: "ay",
    days: "gün",
    year: "yıl",
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
