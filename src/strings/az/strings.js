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
    moveDown: "Aşağı daşı",
  },
  diff: {
    reviewChanges: "D\u0259yi\u015fiklikl\u0259ri n\u0259z\u0259rd\u0259n ke\u00e7ir",
    inline: "S\u0259tirdaxili",
    sideBySide: "Yan-yana",
    additions: "\u0259lav\u0259l\u0259r",
    deletions: "silinm\u0259l\u0259r",
    unchangedLines: "d\u0259yi\u015fm\u0259y\u0259n s\u0259tirl\u0259r",
    noChanges: "He\u00e7 bir d\u0259yi\u015fiklik a\u015fkarlanmad\u0131",
    before: "\u018fvv\u0259l",
    after: "Sonra",
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
    consoleDrawer: {
      toggleTooltip: "Konsolu dəyişdirin",
      clearTooltip: "Geriyə sürüşdürməni silin",
      closeTooltip: "Konsolu bağlayın",
      aiSettingsTooltip: "AI parametrləri",
      modeRedis: "REDIS",
      modeAi: "AI",
      connectionChipNoDb: opts => `${opts.name}`,
      connectionChipWithDb: opts => `${opts.name} · db ${opts.db}`,
      pageChip: opts => `səhifə: ${opts.page}`,
      connectingTo: opts => `${opts.name} ilə qoşulur…`,
      connectedTo: opts => `${opts.name}-ə qoşuldu (Redis ${opts.version} ${opts.mode}, ${opts.modules} modulları yükləndi)`,
      connectedToNoInfo: opts => `${opts.name} ilə qoşulub`,
      disconnectedFrom: opts => `${opts.name} ilə əlaqə kəsildi`,
      readyIndicator: "Hazır."
    },
    cheatsheet: {
      title: "AI Cheatsheet — Mən nə soruşa bilərəm?",
      subtitle: "Konsola yapışdırmaq üçün istənilən sorğuya klikləyin. Sonra Enter düyməsini basın.",
      searchPlaceholder: "Filtr sorğuları...",
      openOfficialDocs: "Redis Əmrlər ↗",
      openOfficialDocsTooltip: "redis.io ünvanında rəsmi Redis əmr arayışını açın",
      closeTooltip: "Bağlayın (Esc)",
      empty: "Filtrinizə uyğun bildiriş yoxdur.",
      footerHint: "İpucu: \"ai:\" yazın, ardınca istənilən dildə hər hansı bir şey yazın — AI 54 dili başa düşür və lazım olduqda canlı Redis vəziyyətindən istifadə edir.",
      groups: {
        diagnostics: {
          name: "Canlı diaqnostika",
          description: "AI-dan yalnız oxumaq üçün təhlükəsiz alətlər vasitəsilə canlı server vəziyyətini araşdırmasını xahiş edin.",
          prompts: [
            "yaddaş niyə yüksəkdir?",
            "mənə ən yavaş 10 sorğunu göstər",
            "hansı müştərilər bağlıdır?",
            "maxmemory siyasəti nədir?",
            "bu yaxınlarda çıxarılanlar varmı?",
            "hər hansı gecikmə hadisəsi var?",
            "server nə vaxtdır işləyir?",
            "hit dərəcəsi nədir?",
            "CPU istifadəsini göstərin",
            "açar boşluğunu ümumiləşdirin",
            "hər bir məlumat növü nə qədər yaddaş istifadə edir?",
            "serveri bloklayan bir şey var?"
          ]
        },
        keys: {
          name: "Açarlar",
          description: "Ağacdan keçmədən açarları yoxlayın, tapın və əsaslandırın.",
          prompts: [
            "user:* uyğun gələn bütün açarları tapın",
            "hər verilənlər bazasında neçə açar var?",
            "bu db ən böyük hashı göstərin",
            "60 saniyədən az TTL ilə açarları tapın",
            "hansı düymələrdə TTL yoxdur?",
            "session:abc açarı hansı növdür?",
            "\"session:\" prefiksi tərəfindən istifadə edilən yaddaşı təxmin edin",
            "user:42 açarının obyekt kodlamasını göstərin",
            "vaxtı bitmək üzrə olan açarlar varmı?",
            "hansı ad sahəsi daha çox yaddaş istifadə edir?"
          ]
        },
        dataTypes: {
          name: "Məlumat növləri",
          description: "Hər Redis növündə yaratmaq/oxumaq/güncəlləmək üçün təbii dildə ifadələr.",
          prompts: [
            "user adlı hash yaradın: 1 sahələri ilə name=Alice age=30",
            "siyahıya üç element əlavə edin tasks",
            "favourites qurmaq üçün üzvlər əlavə edin",
            "sıralanmış dəstəyə xal toplayan üzvləri əlavə edin leaderboard",
            "axın etmək üçün hadisə əlavə edin events",
            "events axınından son 10 girişi əldə edin",
            "hash istifadəçisinin bütün sahələrini əldə edin: 1",
            "favourites dəstinin üzvlərini əldə edin",
            "leaderboard xalına görə ilk 10-u əldə edin"
          ]
        },
        modules: {
          name: "Modullar",
          description: "Yüklənmiş Redis modulları üçün sorğular (aşağıdakı kateqoriyalar yalnız modul mövcud olduqda görünür).",
          prompts: []
        },
        json: {
          name: "RedisJSON",
          description: "ReJSON modulu yükləndikdə mövcuddur.",
          prompts: [
            "user:42 ünvanında { adı: \"Alice\", yaş: 30 } ilə JSON sənəd yaradın",
            "user:42 ad sahəsini oxuyun",
            "user:42 yaşını 31-ə yeniləyin",
            "bütün JSON düymələrini sadalayın",
            "JSON sənədindən sahəni silin",
            "JSONPath istifadə edərək daxili sahə əldə edin"
          ]
        },
        search: {
          name: "RediSearch",
          description: "Axtarış modulu yükləndikdə mövcuddur.",
          prompts: [
            "bütün tam mətn indekslərini sadalayın",
            "idx:products indeksində \"redis\" üçün tam mətnli axtarış aparın",
            "sahələrin başlığı (TEXT) və qiyməti (NUMERIC) ilə hash dəstəkli indeks yaradın",
            "idx:products indeksi haqqında məlumat əldə edin",
            "düşmə indeksi idx:products",
            "qiymətin 10 ilə 50 arasında olduğu sənədləri tapın",
            "mətn və vektor oxşarlığını birləşdirən hibrid axtarış yazın"
          ]
        },
        timeseries: {
          name: "RedisTimeSeries",
          description: "Zaman seriyası modulu yükləndikdə mövcuddur.",
          prompts: [
            "bütün timeseries düymələrini sadalayın",
            "temp:room1-a məlumat nöqtəsi əlavə edin",
            "dünəndən indiyə qədər temp:room1 diapazonunu əldə edin",
            "sensor=temp etiketi ilə çox diapazon əldə edin",
            "temp:room1 üçün 100 sinus dalğa məlumat nöqtəsi yaradın",
            "temp:room1 üçün saxlama və etiketləri göstərin"
          ]
        },
        bloom: {
          name: "RedisBloom (Çiçəklənmə / Ququ / Top-K / CMS / T-Digest)",
          description: "Bf modulu yükləndikdə mövcuddur.",
          prompts: [
            "foo elementinin çiçəklənmə filtrində olub olmadığını yoxlayın spam:ips",
            "çiçəklənmə filtrinə elementlər əlavə edin spam:ips",
            "K=10 olan popular adlı top-K yaradın",
            "sorğu sayı-dəqiqə eskizi traffic açarı üçün /home",
            "t-həzminə dəyərlər əlavə edin və 95-ci faizlik əldə edin",
            "çiçəkləmə filtri üçün məlumatı göstər spam:ips"
          ]
        },
        vectorSet: {
          name: "VectorSet (Redis 8+)",
          description: "Redis 8+ aşkar edildikdə əlçatandır (doğma VECTORSET növü).",
          prompts: [
            "vektor əlavə edin embeddings",
            "sorğu vektoruna ən çox oxşar olan 10 vektoru tapın",
            "vektor dəstinin ölçülərini və sayını göstər embeddings",
            "vektor dəstindən elementi silin embeddings",
            "VSIM ilə element adına görə axtarın"
          ]
        },
        redis8: {
          name: "Redis 8+ funksiyalar",
          description: "Redis 8+ aşkar edildikdə göstərilir.",
          prompts: [
            "HEXPIRE ilə hash sahəsi ttl təyin edin",
            "sətir dəyərinin həzmini əldə edin",
            "hibrid tam mətn + vektor axtarışını işlədin (FT.HYBRID)",
            "MSETEX istifadə edərək ortaq istifadə müddəti olan birdən çox açar təyin edin",
            "istehlakçı qrupu ilə axın girişini silin (XDELEX)",
            "ilk 10 slot üçün klaster slot statistikasını göstərin"
          ]
        },
        scripting: {
          name: "Ssenari yazmaq",
          description: "Təbii dil təsvirlərindən Lua / EVAL skriptləri yaradın.",
          prompts: [
            "yalnız Y > 5 olduqda counter X artıran atom skripti yazın",
            "Lua ilə 100 təsadüfi açar yaradın",
            "bu qabıq boru kəmərini tək EVAL çevirmək: düymələr user:* | GET | grep qeyri-aktiv | DEL",
            "klaster təhlükəsizliyi üçün toplu əməliyyatı Lua portuna köçürün",
            "bir Lua zəngində yoxlayın və təyin edin stil yeniləməsi",
            "hash üzərində təkrarlayın və nümunəyə uyğun sahələri silin"
          ]
        },
        cluster: {
          name: "Klaster",
          description: "Yalnız klaster rejimində göstərilir.",
          prompts: [
            "klaster məlumatını göstərin",
            "klaster qovşaqlarının siyahısı",
            "əsas sayına görə ilk 10 yeri göstərin",
            "yaddaşa görə ilk 10 yeri göstərin",
            "5000 slotu hansı ustanın sahibidir?"
          ]
        },
        acl: {
          name: "ACL (Redis 6+)",
          description: "Giriş nəzarəti istifadəçilərini və cari əlaqəni yoxlayın.",
          prompts: [
            "mən kimə bağlıyam?",
            "bütün ACL istifadəçilərini siyahıya salın",
            "mənim hansı icazələrim var?",
            "standart istifadəçi qaydalarını göstərin"
          ]
        },
        qna: {
          name: "Ümumi sual-cavab",
          description: "Redis biliyə dair suallar verin — alətlər yoxdur, sadəcə cavablar.",
          prompts: [
            "ZADD nədir?",
            "klaster uğursuzluğu necə işləyir?",
            "izah edin SCAN vs KEYS",
            "EVAL və çoxlu əmrləri nə vaxt istifadə etməliyəm?",
            "Redis davamlılıq seçimləri hansılardır?",
            "RDB və AOF arasındakı fərq nədir?",
            "Redis Sentinel yeni ustaya necə qərar verir?",
            "klaster rejimində hash teqlərini izah edin"
          ]
        },
        translate: {
          name: "Təbii dil → Redis əmri",
          description: "İstədiyinizi 54 dildən hər hansı birində təsvir edin; AI Redis əmrini yazır.",
          prompts: [
            "açarı silin user:42",
            "foo düyməsinin adını bara dəyişdirin",
            "session:abc açarının müddəti 10 saniyəyə başa çatır",
            "əsas mənbəni təyinat yerinə köçürün",
            "əks ziyarətləri 5 artırın",
            "Açar salamlamanı \"hello\" olaraq 1 saata təyin edin",
            "bütün user:* açarlarını sil",
            "mənə ən məşğul 10 açarı göstər"
          ]
        }
      }
    },
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
    aclAuthHint: "Doğrulamaq üçün Redis ACL istifadəçi adı və paroldan istifadə edin. Parolsuz standart istifadəçi üçün boş buraxın.",
    tlsWithoutCert: "Əlavə sertifikat olmadan TLS-ni aktivləşdirin",
    tlsRejectUnauthorized: "İcazəsiz sertifikatı rədd edin",
    tlsSecure: "P3X ilə başlayan TLS konfiqurasiyasını görürsünüzsə və ya bütün TLS parametrləri eyni kimi görünürsə, bu, təhlükəsiz xüsusiyyətdir. Parametrləri dəyişdirmək üçün sadəcə bu parametrləri boş və ya başqa bir şeylə əvəz edin və onlar yadda saxlanılacaq. TLS parametrlərini dəyişdirməsəniz, parametrlər serverdə olduğu kimi saxlanılacaq.",
    treeSeparatorEmpty: "Ağac ayırıcı boşdursa, ağacın iç içə qovşaqları olmayacaq, sadəcə təmiz siyahı olacaq",
    treeSeparatorEmptyNote: "İçəri daxil edilmiş qovşaqlar yoxdur, sadəcə təmiz siyahıdır",
    welcomeConsole: "Redis Konsoluna xoş gəlmisiniz",
    welcomeConsoleInfo: "SHIFT + Kursor YUKARI və ya AŞAĞI tarix aktivləşdirilib",
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
    reverted: "Geri qaytar\u0131ld\u0131",
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
    connectionRestored: "Bağlantı bərpa edildi",
    socketDisconnected: "Bağlantı kəsildi",
    socketError: "Bağlantı xətası",
    deletedHashKey: "Hash açarı silindi",
    deletedSetMember: "Çoxluq üzvü silindi",
    deletedListElement: "Siyahı elementi silindi",
    deletedZSetMember: "Sıralanmış çoxluq üzvü silindi",
    deletedStreamTimestamp: "Axın girişi silindi",
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
        undoEnabled: "Geri alma aktivdir",
        undoDisabled: "Geri alma deaktivdir",
        diffEnabled: "Yadda saxlamadan \u0259vv\u0259l diff g\u00f6st\u0259r",
        diffDisabled: "Yadda saxlamadan \u0259vv\u0259l diff deaktivdir",
        jsonFormatTwoSpace: "JSON-ni 2 boşluqla formatlayın",
        jsonFormatFourSpace: "JSON-ni 4 boşluqla formatlayın",
        formName: "Redis parametrləri",
        searchModeClient: "Müştəri axtarış rejimi",
        searchModeServer: "Server axtarış rejimi",
        searchModeStartsWith: "Axtarış rejimi ilə başlayır",
        searchModeIncludes: "Axtarış rejimi daxildir"
      },
      undoHint: "Geri alma yaln\u0131z string v\u0259 JSON a\u00e7ar tipl\u0259ri \u00fc\u00e7\u00fcn m\u00f6vcuddur",
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
      noSlowQueries: "Yavaş sorğular qeydə alınmayıb.",
      confirmSlowLogReset: "Yavaş jurnalı sıfırlamaq istədiyinizə əminsiniz?",
      slowLogResetDone: "Yavaş jurnal sıfırlandı.",
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
      serverInfo: "Server məlumatı",
      os: "Əməliyyat sistemi",
      port: "Şəbəkə Portu",
      pid: "Proses ID",
      configFile: "Konfiqurasiya faylı",
      uptime: "İş vaxtı",
      keyspace: "Redis açar boşluğu",
      keys: "Redis açarları",
      expires: "Müddəti bitir",
      noKeyspace: "Açar yoxdur",
      persistence: "Məlumat Davamlılığı",
      rdbLastSave: "RDB Son Saxla",
      rdbStatus: "RDB Vəziyyəti",
      rdbChanges: "Son Saxlamadan Sonra Dəyişikliklər",
      aofEnabled: "AOF Aktivdir",
      aofSize: "AOF ölçüsü",
      replication: "Redis Replikasiyası",
      role: "Replikasiya Rolu",
      replicas: "Qoşulmuş Replikalar",
      masterHost: "Əsas Host",
      linkStatus: "Replikasiya Linki Vəziyyəti",
      cpu: "CPU İstifadəsi",
      cpuSys: "Sistem",
      cpuUser: "İstifadəçi",
      modules: "Redis Modulları yükləndi",
      noModules: "Redis modulları yüklənməyib",
      clusterSlotMap: "Redis klaster slot xəritəsi",
      slotRange: "Klaster yuvası diapazonu",
      totalSlots: "Ümumi klaster yuvaları",
      noClusterData: "Redis klaster datası mövcud deyil.",
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
      exportAll: "Hamısını İxrac Et",
      memoryDoctor: "Memory Doctor",
      doctorNoData: "Memory Doctor diaqnostikasını işə salmaq üçün Yeniləyin düyməsini klikləyin.",
    },
    acl: {
      title: "ACL istifadəçiləri",
      loadUsers: "İstifadəçiləri yükləyin",
      loading: "Yüklənir...",
      username: "İstifadəçi adı",
      status: "Vəziyyət",
      enabled: "Aktivdir",
      disabled: "Deaktiv",
      commands: "Əmrlər",
      commandsHint: "məsələn, +@all or +@read -@dangerous",
      keys: "Redis açar nümunələri",
      keysHint: "məsələn, ~* or ~user:*",
      channels: "Pub/Sub kanalları",
      channelsHint: "məsələn, &* or &notifications:*",
      password: "parol",
      noPassword: "Parol yoxdur (nopass)",
      passwordHint: "Cari parolu saxlamaq üçün boş buraxın",
      currentUser: "Cari",
      createUser: "İstifadəçi yaradın",
      editUser: "İstifadəçini redaktə et",
      deleteUser: "Sil",
      confirmDelete: "ACL istifadəçisini silmək istədiyinizə əminsiniz?",
      userDeleted: "ACL istifadəçisi silindi.",
      userSaved: "ACL istifadəçisi saxlanıldı.",
      cannotDeleteDefault: "Defolt istifadəçini silmək mümkün deyil.",
      cannotDeleteSelf: "Hazırda qoşulmuş istifadəçini silmək mümkün deyil.",
      noUsers: "ACL Redis 6.0+ tələb edir.",
      groupCommon: "Ümumi",
      groupDataTypes: "Məlumat növləri",
      groupOperations: "Əməliyyatlar",
      rules: "Qaydalar",
      rulesHint: "Boşluqla ayrılmış tokenlər (məsələn, on >password +@all ~* &*)",
      defaultUserWarning: "Diqqət: Defolt istifadəçinin dəyişdirilməsi bütün əlaqələri bloklaya bilər. Bu baş verərsə, girişi bərpa etmək üçün Redis-ni yenidən başlatmalı və ya redis-cli istifadə etməlisiniz.",
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
  },
  promo: {
    title: "AI Şəbəkə Köməkçisi",
    description: "network.corifeus.com ünvanında pulsuz AI Şəbəkə Köməkçisini kəşf edin — domenləri, IPs, DNS qeydləri, SSL sertifikatları, e-poçt təhlükəsizliyini və şəbəkə infrastrukturunu təhlil edin. Ani, hərtərəfli nəticələr üçün AI tərəfindən təchiz edilmişdir.",
    disclaimer: "Bu tanıtım yalnız demo saytında göstərilir və Docker, Electron və ya veb tətbiq yerləşdirmələrində görünməyəcək.",
    toastMessage: "Pulsuz AI Şəbəkə Köməkçisini network.corifeus.com ünvanında sınayın — domenləri təhlil edin, DNS, SSL və s.!",
    visit: "network.corifeus.com ziyarət edin"
  }
};
module.exports = strings;
