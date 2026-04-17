const strings = {
  error: {
    server_error: "Error sa server, pakisubukang muli",
    aiPromptTooLong: "Masyadong mahaba ang AI prompt (max 4096 character)",
  },
  title: {
    donate: "Mag-donate",
    donateTitle: "Suportahan ang P3X Redis UI",
    donateDescription: "Ang P3X Redis UI ay isang libre, open-source na proyekto. Ang mga gastos sa pagpapanatili ng app, AI features, Docker images, servers, at infrastructure ay galing sa sariling bulsa ng developer. Kung nakakatulong sa iyo ang tool na ito, pag-isipang suportahan ang patuloy na pag-develop nito sa pamamagitan ng donasyon. Bawat kontribusyon ay nakakatulong na mapanatiling buhay at lumalaki ang proyekto. Salamat!",
    jsonRecursive: "Pagpapalawak ng lahat ng mga dahon",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "Maaari kang pumili ng Redis na koneksyon upang kumonekta mula sa kaliwang ibabang menu.",
    statistics: "Mga istatistika",
    error: "Error",
    connectingRedis: "Kumokonekta sa Redis ...",
    socketioConnectError: "Socket.IO Error",
    db: "DB",
    server: "Server",
    clients: "Mga kliyente",
    memory: "Alaala",
    persistence: "Pagtitiyaga",
    stats: "Mga istatistika",
    replication: "Pagtitiklop",
    cpu: "CPU",
    cluster: "Cluster",
    modules: "Mga Module",
    errorstats: "Estadistika ng Error",
    commandstats: "Estadistika ng Command",
    latencystats: "Estadistika ng Latency",
    keysizes: "Laki ng Susi",
    threads: "Mga Thread"
  },
  confirm: {
    dropIndex: "Sigurado ka bang tanggalin ang index na ito?",
    uploadBuffer: "Sigurado ka bang ia-upload ang binary data na ito?",
    uploadBufferDone: "Ang binary data ay na-upload",
    uploadBufferDoneAndSave: "Ang binary data ay na-upload at nai-save sa server",
    title: "Kumpirmahin",
    alert: "Alerto",
    info: "Impormasyon",
    deleteListItem: "Sigurado ka bang tatanggalin ang item sa listahan na ito?",
    deleteHashKey: "Sigurado ka bang tatanggalin ang hash key item na ito?",
    deleteStreamTimestamp: "Sigurado ka bang tatanggalin ang timestamp ng stream na ito?",
    deleteSetMember: "Sigurado ka bang tatanggalin ang set member na ito?",
    deleteZSetMember: "Sigurado ka bang tatanggalin ang pinagsunod-sunod na miyembrong ito?",
    deleteConnection: "Kumpirmahin",
    deleteConnectionText: "Sigurado ka bang tatanggalin ang koneksyong Redis na ito?",
    deleteNode: "Sigurado ka bang tatanggalin ang Redis node na ito?",
    delete: "Tanggalin?",
    deleteAllKeys: opts => {
      return `Tanggalin ang punong ito at lahat ng susi nito (${opts.key})?`;
    },
    deleteSearchKeys: opts => {
      return `Sigurado ka bang gusto mong tanggalin ang lahat ng key na tumutugma sa "${opts.pattern}"? Nahanap ang ${opts.count} key.`;
    },
    socketioConnectError: "Ang Socket.IO ay hindi makakonekta sa server, maaari mong i-reload at subukang lutasin ang error sa koneksyon sa iyong sarili, hindi alam ng kliyente kung paano lutasin ito mismo.",
    socketioAuthRequired: "Kinakailangan ang pahintulot ng Socket.IO. Paki-authenticate gamit ang HTTP Basic Auth (username/password) at i-reload.",
    invalidCredentials: "Di-wastong username o password.",
    deleteKey: "Sigurado ka bang tatanggalin ang key na ito?",
    rename: {
      title: "Sigurado ka bang papalitan ang pangalan ng key na ito?",
      textContent: "Ang pagkilos na ito ay permanenteng pinapalitan ang pangalan ng susi.",
      placeholder: "Ang Redis key (kinakailangan)"
    },
    ttl: {
      title: "Sigurado ka bang gusto mong baguhin ang TTL ng key na ito?",
      textContent: "Ang pagpapalit ng TTL ay nag-a-update sa oras ng key na ito upang mabuhay. Iwanang walang laman upang panatilihin ang susi na ito magpakailanman.",
      placeholder: "Ang Redis key ng TTL (integer o walang laman)",
      placeholderPlaceholder: "Ang walang laman ay nangangahulugan na ito ay nagpapatuloy magpakailanman; kung hindi, maglagay ng integer.",
      convertTextToTime: "I-convert ang teksto sa oras",
      convertTextToTimePlaceholder: "Hal. Ang 1d ay magiging 86400"
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
    copy: "Kopyahin",
    downloadBuffer: "I-download ang binary",
    setBuffer: "Mag-upload ng binary",
    exportKeys: "I-export ang mga key",
    exportAllKeys: (opts) => `I-export lahat ng ${opts.count} key`,
    exportSearchResults: (opts) => `I-export ${opts.count} resulta`,
    deleteAllKeysMenu: (opts) => `Tanggalin lahat ${opts.count}`,
    importKeys: "I-import ang mga key",
    deleteSearchKeys: (opts) => `Tanggalin ang ${opts.count} tumutugmang key`,
    saveWithFormatJson: "I-save gamit ang format",
    formatJson: "I-format si Json",
    wrap: "Balutin",
    unwrap: "I-unwrap",
    downloadJson: "I-download ang JSON",
    pubsubMonitor: "PubSub",
    pulse: "Pulse",
    profiler: "Profiler",
    memoryAnalysis: "Analysis",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "Wika",
    ok: "OK",
    addKey: "Idagdag sa key na ito",
    addKeyRoot: "Magdagdag ng root key",
    reloadKey: "I-reload ang key",
    reload: "I-reload",
    close: "Isara",
    commands: "Mga utos",
    view: "Tingnan",
    statistics: "Mga istatistika",
    refresh: "I-refresh",
    pause: "I-pause",
    resume: "Ituloy",
    clear: "Maaliwalas",
    rename: "Palitan ang pangalan",
    main: "Database",
    cancel: "Kanselahin",
    theme: "Tema",
    github: "GitHub",
    githubRepo: "Imbakan",
    githubRelease: "Mga release",
    githubChangelog: "Changelog",
    info: "Info",
    settings: "Mga setting",
    connect: "Kumonekta",
    disconnect: "Idiskonekta",
    logout: "Mag-logout",
    overview: "Pangkalahatang-ideya",
    console: "Console",
    noConnections: "Walang koneksyon, magdagdag ng koneksyon sa menu ng mga setting.",
    noConnectionsInSettings: "Walang koneksyon, maaari kang magdagdag ng BAGONG CONNECTION sa itaas.",
    connectionAdd: "Bagong koneksyon",
    addGroup: "Magdagdag ng grupo",
    extend: "Palawigin",
    collapse: "I-collapse",
    add: "Idagdag",
    edit: "I-edit",
    save: "I-save",
    ttl: "Itakda ang TTL",
    fieldTtl: "TTL ng field",
    digest: "Digest",
    delete: "Tanggalin",
    remove: "Alisin",
    areYouSure: "Sigurado ka ba?",
    sure: "Oo naman",
    testConnection: "Subukan ang koneksyon",
    getKey: "Nilo-load ang Redis key at nauugnay na data ...",
    jsonViewShow: "Ipakita ang JSON",
    jsonViewEditor: "I-edit ang JSON",
    quickConsole: "Mabilis na Console",
    moveUp: "Itaas",
    moveDown: "Pababa",
  },
  diff: {
    reviewChanges: "Suriin ang mga pagbabago",
    inline: "Inline",
    sideBySide: "Magkatabi",
    additions: "mga dagdag",
    deletions: "mga pagtanggal",
    unchangedLines: "mga linyang hindi nagbago",
    noChanges: "Walang natukoy na pagbabago",
    before: "Bago",
    after: "Pagkatapos",
  },
  label: {
    id: {
      nodeId: "Node ID",
      id: "ID ng Koneksyon",
      info: "Kung ayaw mong baguhin ang mga katangian ng: sshPassword, sshPrivateKey, password, tlsCrt, tlsKey, tlsCa, mangyaring ilagay ang ID ng koneksyon sa mga property na iyon upang mapanatiling buo ang mga value ng property. Kung gusto mo ng parehong logic sa node password, pagkatapos ay ilagay ang node ID sa node password."
    },
    secureFeature: "Kung makakita ka ng isang halaga na nagsisimula sa isang P3X na katulad ng hitsura, ito ay isang secure na tampok. Upang baguhin ang mga setting, palitan lamang ang mga setting na ito ng walang laman o iba pa at mase-save ang mga ito. Kung hindi mo babaguhin ang mga setting, ang mga setting ay pananatilihin habang ang mga ito ay nasa server.",
    aiTranslating: "Isinasalin...",
    aiSettings: "Mga Setting ng AI",
    aiGroqApiKey: "Groq API Key",
    aiGroqApiKeyInfo: "Opsyonal. Sariling Groq API key para sa mas magandang performance. Kumuha ng libreng key mula sa",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "Na-save ang AI API key",
    aiGroqApiKeyInvalid: "Di-wastong Groq API key",
    aiGroqApiKeyNotSet: "Hindi nakatakda (server default)",
    aiEnabled: "Naka-enable ang AI",
    aiEnabledYes: "Oo",
    aiEnabledNo: "Hindi",
    aiRouteViaNetwork: "I-route sa pamamagitan ng network.corifeus.com",
    aiRoutingDirect: "Ang mga query ay dumiretso sa Groq gamit ang sarili mong API key, nilalampasan ang network.corifeus.com.",
    aiRoutingNetwork: "Ang mga AI query ay niruruta sa pamamagitan ng network.corifeus.com. Kung mayroon kang sarili mong libreng Groq API key, maaari mong i-off ang switch na ito para dumiretso sa Groq nang walang network.corifeus.com.",
    aiMaxTokens: "Pinakamataas na token ng AI",
    aiMaxTokensInfo: "Pinakamataas na bilang ng token para sa mga sagot ng AI. Ang mas mataas na halaga ay nagbibigay ng mas mahahabang sagot ngunit maaaring gumamit ng mas maraming API credit.",
    consoleDrawer: {
      toggleTooltip: "I-toggle ang console",
      clearTooltip: "I-clear ang scrollback",
      closeTooltip: "Isara ang console",
      aiSettingsTooltip: "AI mga setting",
      modeRedis: "REDIS",
      modeAi: "AI",
      connectionChipNoDb: opts => `${opts.name}`,
      connectionChipWithDb: opts => `${opts.name} · db ${opts.db}`,
      pageChip: opts => `pahina: ${opts.page}`,
      connectingTo: opts => `Kumokonekta sa ${opts.name}…`,
      connectedTo: opts => `Nakakonekta sa ${opts.name} (Redis ${opts.version} ${opts.mode}, ${opts.modules} module na na-load)`,
      connectedToNoInfo: opts => `Nakakonekta sa ${opts.name}`,
      disconnectedFrom: opts => `Nadiskonekta mula sa ${opts.name}`,
      readyIndicator: "handa na."
    },
    cheatsheet: {
      title: "AI Cheatsheet — Ano ang maitatanong ko?",
      subtitle: "I-click ang anumang prompt para i-paste ito sa console. Pagkatapos ay pindutin ang Enter.",
      searchPlaceholder: "I-filter ang mga prompt...",
      openOfficialDocs: "Redis Mga Utos ↗",
      openOfficialDocsTooltip: "Buksan ang opisyal na Redis command reference sa redis.io",
      closeTooltip: "Isara (Esc)",
      empty: "Walang mga prompt na tumutugma sa iyong filter.",
      footerHint: "Tip: i-type ang \"ai:\" na sinusundan ng kahit ano sa anumang wika — ang AI ay nakakaunawa ng 54 na wika at gumagamit ng live na Redis na estado kung kinakailangan.",
      groups: {
        diagnostics: {
          name: "Mga live na diagnostic",
          description: "Hilingin sa AI na siyasatin ang estado ng live na server sa pamamagitan ng mga ligtas na read-only na tool.",
          prompts: [
            "bakit mataas ang memory?",
            "ipakita sa akin ang 10 pinakamabagal na query",
            "aling mga kliyente ang konektado?",
            "ano ang maxmemory policy?",
            "mayroon bang mga kamakailang pagpapaalis?",
            "mayroon bang latency na kaganapan?",
            "gaano katagal ang server?",
            "ano ang hit rate?",
            "ipakita ang paggamit ng cpu",
            "ibuod ang keyspace",
            "gaano karaming memory ang ginagamit ng bawat uri ng data?",
            "may humaharang ba sa server ngayon?"
          ]
        },
        keys: {
          name: "Mga susi",
          description: "Siyasatin, hanapin, at mangatuwiran tungkol sa mga susi nang hindi nagki-click sa puno.",
          prompts: [
            "hanapin ang lahat ng key na tumutugma sa user:*",
            "ilang susi sa bawat database?",
            "ipakita ang pinakamalaking hash dito db",
            "maghanap ng mga key na may TTL na wala pang 60 segundo",
            "aling mga susi ang walang TTL?",
            "anong uri ang susi session:abc?",
            "tantyahin ang memorya na ginamit ng \"session:\" prefix",
            "ipakita ang object encoding ng key user:42",
            "mayroon bang anumang mga susi na malapit nang mag-expire?",
            "aling namespace ang gumagamit ng pinakamaraming memorya?"
          ]
        },
        dataTypes: {
          name: "Mga uri ng data",
          description: "Natural-language na parirala para sa paggawa/pagbasa/pag-update sa bawat uri ng Redis.",
          prompts: [
            "lumikha ng hash na pinangalanang user:1 na may mga field name=Alice age=30",
            "magdagdag ng tatlong item sa listahan tasks",
            "magdagdag ng mga miyembro sa set favourites",
            "magdagdag ng mga nakapuntos na miyembro sa pinagsunod-sunod na hanay leaderboard",
            "magdagdag ng kaganapan upang mag-stream events",
            "makuha ang huling 10 entry mula sa stream events",
            "makuha ang lahat ng field ng hash user:1",
            "kumuha ng mga miyembro ng set favourites",
            "makuha ang nangungunang 10 sa pamamagitan ng iskor mula sa leaderboard"
          ]
        },
        modules: {
          name: "Mga module",
          description: "Mga query para sa na-load na Redis na mga module (lalabas lang ang mga kategorya sa ibaba kapag naroroon ang module).",
          prompts: []
        },
        json: {
          name: "RedisJSON",
          description: "Available kapag na-load ang ReJSON module.",
          prompts: [
            "gumawa ng JSON na dokumento sa user:42 na may { name: \"Alice\", edad: 30 }",
            "basahin ang field ng pangalan ng user:42",
            "i-update ang edad na user:42 hanggang 31",
            "ilista ang lahat ng JSON key",
            "magtanggal ng field mula sa isang JSON na dokumento",
            "kumuha ng nested field gamit ang JSONPath"
          ]
        },
        search: {
          name: "RediSearch",
          description: "Available kapag na-load ang module ng paghahanap.",
          prompts: [
            "ilista ang lahat ng full-text index",
            "magpatakbo ng full-text na paghahanap para sa \"redis\" sa index idx:products",
            "lumikha ng hash-backed index na may pamagat ng mga field (TEXT) at presyo (NUMERIC)",
            "kumuha ng impormasyon tungkol sa index idx:products",
            "drop index idx:products",
            "maghanap ng mga dokumento kung saan ang presyo ay nasa pagitan ng 10 at 50",
            "sumulat ng hybrid na paghahanap na pinagsasama ang pagkakatulad ng text at vector"
          ]
        },
        timeseries: {
          name: "RedisTimeSeries",
          description: "Available kapag na-load ang timeseries module.",
          prompts: [
            "ilista ang lahat ng timeseries key",
            "magdagdag ng data point sa temp:room1",
            "makuha ang saklaw ng temp:room1 mula kahapon hanggang ngayon",
            "kumuha ng multi-range ayon sa label sensor=temp",
            "bumuo ng 100 sine-wave data point para sa temp:room1",
            "ipakita ang pagpapanatili at mga label para sa temp:room1"
          ]
        },
        bloom: {
          name: "RedisBloom (Bloom / Cuckoo / Top-K / CMS / T-Digest)",
          description: "Available kapag na-load ang bf module.",
          prompts: [
            "suriin kung ang item na foo ay umiiral sa bloom filter spam:ips",
            "magdagdag ng mga item sa bloom filter spam:ips",
            "lumikha ng top-K na may pangalang popular na may K=10",
            "query count-min sketch traffic para sa key /home",
            "magdagdag ng mga halaga sa t-digest at makuha ang 95th percentile",
            "ipakita ang impormasyon para sa bloom filter spam:ips"
          ]
        },
        vectorSet: {
          name: "VectorSet (Redis 8+)",
          description: "Available kapag natukoy ang Redis 8+ (native VECTORSET type).",
          prompts: [
            "magdagdag ng vector sa embeddings",
            "hanapin ang 10 pinakakatulad na vector sa isang query vector",
            "ipakita ang mga sukat at bilang ng vectorset embeddings",
            "tanggalin ang isang elemento mula sa vectorset embeddings",
            "maghanap ayon sa pangalan ng elemento gamit ang VSIM"
          ]
        },
        redis8: {
          name: "Redis 8+ na feature",
          description: "Ipinapakita kapag natukoy ang Redis 8+.",
          prompts: [
            "itakda ang hash field ttl na may HEXPIRE",
            "makuha ang digest ng isang string value",
            "magpatakbo ng hybrid full-text + vector search (FT.HYBRID)",
            "magtakda ng maraming key na may nakabahaging pag-expire gamit ang MSETEX",
            "tanggalin ang isang stream entry sa pangkat ng consumer (XDELEX)",
            "ipakita ang cluster slot-stats para sa nangungunang 10 slot"
          ]
        },
        scripting: {
          name: "Pag-iskrip",
          description: "Bumuo ng Lua / EVAL na mga script mula sa mga paglalarawan sa natural na wika.",
          prompts: [
            "sumulat ng atomic script na tumataas counter X lamang kung Y > 5",
            "bumuo ng 100 random na key gamit ang Lua",
            "i-convert ang shell pipeline na ito sa isang solong EVAL: mga key user:* | KUMUHA | hindi aktibo ang grep | DEL",
            "i-port ang isang batch operation sa Lua para sa kaligtasan ng cluster",
            "check-and-set style update sa isang Lua na tawag",
            "umulit sa isang hash at magtanggal ng mga field na tumutugma sa isang pattern"
          ]
        },
        cluster: {
          name: "Cluster",
          description: "Ipinapakita lang sa cluster mode.",
          prompts: [
            "ipakita ang impormasyon ng cluster",
            "ilista ang mga cluster node",
            "ipakita ang nangungunang 10 puwang ayon sa bilang ng susi",
            "ipakita ang nangungunang 10 puwang ayon sa memorya",
            "sinong master ang nagmamay-ari ng slot 5000?"
          ]
        },
        acl: {
          name: "ACL (Redis 6+)",
          description: "Siyasatin ang mga user ng access-control at ang kasalukuyang koneksyon.",
          prompts: [
            "kanino ako konektado?",
            "ilista ang lahat ng ACL user",
            "anong mga pahintulot ang mayroon ako?",
            "ipakita ang mga default na panuntunan ng user"
          ]
        },
        qna: {
          name: "Pangkalahatang Q&A",
          description: "Magtanong ng Redis mga tanong sa kaalaman — walang mga tool, mga sagot lang.",
          prompts: [
            "ano ang ZADD?",
            "paano gumagana ang cluster failover?",
            "ipaliwanag SCAN vs KEYS",
            "kailan ko dapat gamitin ang EVAL vs maramihang mga utos?",
            "ano ang Redis na mga pagpipilian sa pagtitiyaga?",
            "ano ang pagkakaiba ng RDB at AOF?",
            "paano nagpapasya si Redis Sentinel sa isang bagong master?",
            "ipaliwanag ang mga hash tag sa cluster mode"
          ]
        },
        translate: {
          name: "Natural-wika → Redis utos",
          description: "Ilarawan kung ano ang gusto mo sa alinman sa 54 na wika; ang AI ay nagsusulat ng Redis na utos.",
          prompts: [
            "delete key user:42",
            "palitan ang pangalan ng key foo sa bar",
            "expire key session:abc sa loob ng 10 segundo",
            "kopyahin ang key source sa destinasyon",
            "dagdagan ang mga counter visit ng 5",
            "itakda ang susing pagbati sa \"hello\" sa loob ng 1 oras",
            "burahin lahat ng mga key user:*",
            "ipakita sa akin ang 10 pinakaabalang mga key"
          ]
        }
      }
    },
    ssh: {
      on: "Naka-on ang SSH",
      off: "Naka-off ang SSH",
      sshHost: "SSH Host",
      sshPort: "SSH port",
      sshUsername: "SSH username",
      sshPassword: "SSH password",
      sshPrivateKey: "SSH pribadong key"
    },
    isBuffer: opts => `[object ArrayBuffer] ay nangangahulugan na ang halaga ay binary data o ang halaga ay mas malaki kaysa ${opts.maxValueAsBuffer}`,
    streamValue: `Ang field ng stream at value ay isang oneliner. Hal.: field1 value1 "field 2" "value 2"`,
    streamTimestampId: `Ang ibig sabihin ng '*' ay awtomatikong nabuo o ang detalye bilang <millisecondsTime>-<sequenceNumber>`,
    unableToLoadKey: ({
      key
    }) => {
      return `Hindi ma-load ang key na ito: ${key}. Posible, ang susi ay tinanggal. Ang eksaktong error ay nasa console.`;
    },
    bigJson: "Ang JSON object na ito ay higit sa 10 kb, kaya siguraduhing alam mo kung ano ang iyong ginagawa, dahil ang ilang mga function ay maaaring mabagal na pag-render.",
    addNode: "Magdagdag ng node",
    validateJson: "I-validate ang JSON",
    reducedFunction: `Nabawasan ang pag-andar`,
    tooManyKeys: opts => {
      return `Para sa buong maximum na mga function na pinapayagan ang kabuuang mga key ay ${opts.maxLightKeysCount} bilangin. Ang database na ito ay may higit sa pinapayagang mga key sa kabuuan ${opts.count}. Ang pag-uuri ng susi at ang karagdagang impormasyon ng magarbong puno ay hindi pinagana. Ang paghahanap ay nangyayari lamang sa server sa halip na ang paghahanap ng kliyente.`;
    },
    redisCommandNotFound: "Walang nakitang Redis command match ...",
    treeKeyStore: `Ang pag-uuri (natural na paghahambing) ay isinasagawa sa kliyente aka browser, na nangangahulugang mayroon itong parusa para sa malalaking malalaking set, tulad ng higit sa 10k key, maaari itong magdagdag ng kaunting oras sa pag-render ng page. Walang key sorting sa Redis, ganito lang.`,
    socketIoTimeout: options => {
      return `Nag-time out ang Socket.IO para sa kahilingang ito (max ${options.timeout / 1000} segundo)...`;
    },
    resizerInfo: options => {
      return `Kaliwa o kanang panel minimum na lapad ay ${options.width}px`;
    },
    jsonViewNotParsable: "Ang value na ito ay hindi JSON parsable  ",
    ttlTitle: "Itakda ang TTL sa ilang segundo",
    passwordSecure: "Maaaring walang laman ang password, ngunit magpapakita pa rin ito ng mga character, isa itong tampok na panseguridad.",
    aclAuthHint: "Gamitin ang Redis ACL username at password upang patotohanan. Iwanang walang laman para sa default na user na walang password.",
    tlsWithoutCert: "Paganahin ang TLS nang walang karagdagang certificate",
    tlsRejectUnauthorized: "Tanggihan ang hindi awtorisadong sertipiko",
    tlsSecure: "Kung makakita ka ng configuration ng TLS na nagsisimula sa isang P3X o lahat ng mga setting ng TLS ay mukhang pareho, isa itong secure na feature. Upang baguhin ang mga setting, palitan lamang ang mga setting na ito ng walang laman o iba pa at mase-save ang mga ito. Kung hindi mo babaguhin ang mga setting ng TLS, pananatilihin ang mga setting habang nasa server ang mga ito.",
    treeSeparatorEmpty: "Kung ang tree separator ay walang laman, ang puno ay walang nested node, isang purong listahan lamang",
    treeSeparatorEmptyNote: "Walang nested node, puro listahan lang",
    welcomeConsole: "Maligayang pagdating sa Redis Console",
    welcomeConsoleInfo: "SHIFT + Cursor UP o DOWN history ay pinagana",
    redisListIndexInfo: "Walang laman para idagdag, -1 para i-prepend o i-save ito sa ipinapakitang posisyon.",
    console: "Console",
    connectiondAdd: "Magdagdag ng koneksyon",
    connectiondEdit: "I-edit ang koneksyon",
    connectiondView: "Tingnan ang koneksyon",
    connections: "Mga koneksyon",
    keysSort: {
      on: "Naka-on ang pag-uuri ng susi",
      off: "Pag-uuri ng susi"
    },
    cluster: {
      on: "Naka-on ang Cluster",
      off: "Naka-off ang Cluster"
    },
    sentinel: {
      on: "Naka-on ang Sentinel",
      off: "Naka-off ang Sentinel",
      name: "Sentinel pangalan"
    },
    readonly: {
      on: "Readonly on",
      off: "Readonly off"
    },
    theme: {
      light: "Liwanag",
      dark: "Madilim na negosyo",
      darkNeu: "Madilim",
      darkoBluo: "Darko bluo",
      enterprise: "Enterprise",
      redis: "Redis",
      matrix: "Matrix"
    },
    connected: opts => {
      return `Nakakonekta: ${opts.name}`;
    },
    tree: "Puno",
    askAuth: "Humingi ng pahintulot",
    keyboardShortcuts: "Keyboard Shortcuts",
    about: "About",
    supportedLanguages: "Supported Languages",
    version: "Version",
    redisVersion: "Redis Version",
    modules: "Mga Module",
    shortcutRefresh: "Refresh",
    shortcutSearch: "Focus Search",
    shortcutNewKey: "New Key",
    shortcutDisconnect: "Idiskonekta",
    themeAuto: "Auto (system)",
    languageAuto: "Auto (system)",
    shortcutCommandPalette: "Command Palette",
    commandPalette: "Command Palette",
    noResults: "No results",
    redisCommandsReference: "Mga Utos ng Redis",
    ungrouped: "Walang pangkat",
    grouped: "Grouped",
    connectFirst: "Kumonekta muna sa isang Redis server",
    searchLanguage: "Maghanap ng wika...",
    exportProgress: "Nag-e-export ng mga key...",
    importProgress: "Nag-i-import ng mga key...",
    importPreview: "Preview",
    importOverwrite: "I-overwrite",
    importSkip: "Laktawan",
    importConflict: "Kung ang key ay mayroon na:",
    noKeysToExport: "Walang key na ie-export",
    time: "Oras",
    type: "Uri",
    format: "Format",
    loading: "Naglo-load...",
    autoRefresh: "Auto",
    exportSearchHint: "Nag-e-export lamang ng mga key na tumutugma sa kasalukuyang paghahanap",
    importSearchHint: "Ang import ay nalalapat sa buong database, hindi lamang sa mga resulta ng paghahanap",
    deleteSearchHint: "Tinatanggal ang lahat ng key na tumutugma sa kasalukuyang paghahanap sa server",
    deletingSearchKeys: "Tinatanggal ang mga tumutugmang key...",
    importNoKeys: "Walang nahanap na key sa file",
    desktopNotifications: "Mga Notification sa Desktop",
    desktopNotificationsEnabled: "I-enable ang desktop notifications",
    desktopNotificationsInfo: "Tumanggap ng mga notification sa OS para sa Redis disconnection at reconnection kapag ang app ay wala sa focus."
  },
  status: {
    dataCopied: "Ang data ay nasa clipboard",
    exportDone: "Kumpleto na ang export",
    deletedSearchKeys: (opts) => `Natanggal ang ${opts.count} key`,
    indexCreated: "Index nilikha",
    indexDropped: "Index tinanggal",
    importDone: (opts) => `Kumpleto na ang import: ${opts.created} nilikha, ${opts.skipped} nilaktawan, ${opts.errors} mga error`,
    nodeRemoved: "Inalis ang node",
    keyIsNotExisting: "Maaaring natanggal o nag-expire ang key na ito.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "Walang susi";
      } else if (opts.keyCount === 1) {
        return "1 susi";
      } else {
        return `${opts.keyCount} mga susi`;
      }
    },
    treeExpandAll: "Palawakin ang lahat ng mga dahon ng puno. Maaaring magastos ang operasyong ito at maaaring magtagal...",
    noRedisKeys: "Walang mga susi sa database na ito.",
    redisConnected: "Matagumpay na nakakonekta ang Redis",
    reverted: "Naibalik",
    reloadingDataInfo: "Nire-reload ang impormasyon ng data ng Redis",
    added: "Idinagdag",
    saved: "Na-update",
    cancelled: "Kinansela",
    deleted: "Tinanggal",
    savedRedis: "Ang data ng Redis ay nai-save",
    redisDisconnected: opts => {
      return `Nagkaroon ng error ang kasalukuyang koneksyon: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `Nakatakda ang db index sa ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `Ang tree key ay tinanggal (${opts.key}).`;
    },
    deletedKey: opts => {
      return `Ang susi ay tinanggal (${opts.key}).`;
    },
    renamedKey: "Ang susi na ito ay pinalitan ng pangalan",
    ttlChanged: "Ang TTL ng key na ito ay nabago",
    notInteger: "Ang input na ito ay hindi isang integer",
    persisted: "Ang susi na ito ay nananatili magpakailanman",
    set: "Ang susi ay itinakda/idinagdag",
    connectionRestored: "Naibalik ang koneksyon",
    socketDisconnected: "Nadiskonekta",
    socketError: "Error sa koneksyon",
    deletedHashKey: "Natanggal ang hash key",
    deletedSetMember: "Natanggal ang miyembro ng set",
    deletedListElement: "Natanggal ang elemento ng listahan",
    deletedZSetMember: "Natanggal ang miyembro ng sorted set",
    deletedStreamTimestamp: "Natanggal ang entry ng stream",
  },
  code: {
    "delete-connection": "Ang koneksyon na ito ay tinanggal, kaya ikaw ay nadiskonekta sa Redis instance na ito.",
    "save-connection": "Binago ang koneksyon na ito, kaya nadiskonekta ka sa Redis instance na ito. Maaari kang muling kumonekta.",
    "readonly-connections": "Ang mga koneksyon na idinaragdag/i-save/tanggal ay readonly lamang!",
    "readonly-connection-mode": "Read only mode ang koneksyon na ito!",
    "list-out-of-bounds": "Ang listahan ng index na ito ay wala sa hangganan",
    "invalid-json-value": "Ang halaga ay hindi wasto JSON.",
    "http_auth_required": "Kinakailangan ang pahintulot: mangyaring patotohanan gamit ang HTTP Basic Auth at i-reload.",
    "auto-connection-failed": "Posible, naalis ang koneksyon at nabigo ang awtomatikong koneksyon, dahil dito.",
    invalid_console_command: "Hindi gumagana ang command na ito sa pamamagitan ng GUI.",
    "AI_DISABLED": "Ang AI ay naka-disable. I-enable ito sa AI Settings.",
    "AI_PROMPT_REQUIRED": "Kinakailangan ang AI prompt.",
    "GROQ_API_KEY_READONLY": "Ang Groq API key ay read-only at hindi maaaring baguhin.",
    "blocked_api_access": "Hindi pinapayagan ng iyong Groq API plan ang access sa modelong ito. Mag-upgrade ng Groq plan o gamitin ang network.corifeus.com proxy.",
    "rate_limit": "Naabot na ang AI rate limit. Subukan muli mamaya o gamitin ang sariling Groq API key sa Settings."
  },
  form: {
    error: {
      required: "Kinakailangan",
      port: "Ang port ay nasa pagitan ng 1-65535",
      invalid: "Ang form ay hindi wasto"
    },
    connection: {
      label: {
        name: "Pangalan",
        group: "Group",
        host: "Hostname",
        port: "Port",
        password: "Password",
        username: "Username"
      }
    },
    treeSettings: {
      maxValueDisplay: "Max value na haba ng string ng display",
      maxValueDisplayInfo: "Kung nakatakda sa 0, ipakita ang buong halaga. Kung mas malaki sa 0, putulin ang haba na ito. Kung -1: para sa mga string, itago ang halaga hanggang sa i-edit; para sa iba pang mga uri, ipakita ang buong nilalaman.",
      maxKeys: "Ang max na bilang ng susi",
      maxKeysInfo: "Para hindi mag-crash ang GUI, nililimitahan namin ang max key count.",
      keyCount: (opts) => {
        return `Bilang ng mga susi: ${opts?.keyCount ?? 0}`;
      },
      label: {
        animation: "Gumamit ng animation",
        noAnimation: "Walang animation",
        undoEnabled: "Naka-enable ang undo",
        undoDisabled: "Naka-disable ang undo",
        diffEnabled: "Ipakita ang diff bago i-save",
        diffDisabled: "Naka-disable ang diff bago i-save",
        jsonFormatTwoSpace: "I-format ang JSON na may 2 espasyo",
        jsonFormatFourSpace: "I-format ang JSON na may 4 na espasyo",
        formName: "Mga setting ng Redis",
        searchModeClient: "Mode ng paghahanap ng kliyente",
        searchModeServer: "Mode ng paghahanap ng server",
        searchModeStartsWith: "Ang paghahanap ay nagsisimula sa mode",
        searchModeIncludes: "Kasama sa paghahanap ang mode"
      },
      undoHint: "Available lang ang undo para sa mga uri ng key na string at JSON",
      field: {
        treeSeparator: "Tagahiwalay ng puno",
        treeSeparatorSelector: "Tagapili ng tree separator",
        page: "Bilang ng paging ng puno",
        keyPageCount: "Bilang ng pangunahing paging",
        keysSort: "Pagbukud-bukurin ang mga susi",
        searchMode: "Mode ng paghahanap",
        searchModeStartsWith: "Nagsisimula ang paghahanap sa / kasama"
      },
      error: {
        keyPageCount: "Ang pangunahing bilang ng pahina ay dapat na isang integer sa pagitan ng 5 - 100",
        page: "Ang bilang ng pahina ay dapat na isang integer sa pagitan ng 10 - 5000",
        maxValueDisplay: "Ang maximum na halaga ng display ay dapat na isang integer sa pagitan ng -1 at 32768",
        maxKeys: "Ang maximum na halaga ng bilang ng susi ay dapat na isang integer sa pagitan ng 100 at 100000"
      }
    },
    key: {
      label: {
        formName: {
          add: "Magdagdag ng bagong Redis key",
          edit: "I-edit ang Redis key",
          append: "Idagdag sa kasalukuyang Redis key"
        }
      },
      field: {
        streamTimestamp: "Timestamp",
        key: "Susi",
        type: "Uri",
        index: "Index",
        hashKey: "Hash key",
        score: "Puntos",
        value: "Halaga",
        errorRate: "Rate ng error",
        capacity: "Kapasidad",
        topk: "Top K",
        width: "Lapad",
        depth: "Lalim",
        decay: "Pagkabulok",
        compression: "Compression",
        increment: "Dagdag",
        item: "Aytem",
        vectorValues: "Mga halaga ng vector (pinaghihiwalay ng kuwit)",
        element: "Pangalan ng elemento",
      },
      error: {
        streamTimestamp: "Kinakailangan ang timestamp, alinman sa Redis na format o bilang *",
        key: "Ang susi ay, hindi bababa sa, isang karakter",
        hashKey: "Ang hash table key ay hindi bababa sa isang character",
        score: "Kinakailangan ang pinagsunod-sunod na marka",
        value: "Kinakailangan ang halaga",
        errorRate: "Ang rate ng error ay dapat nasa pagitan ng 0 at 1 (hal. 0.01)",
        capacity: "Ang kapasidad ay dapat positibong integer",
        topk: "Ang Top K ay dapat positibong integer",
        width: "Ang lapad ay dapat positibong integer",
        depth: "Ang lalim ay dapat positibong integer",
        item: "Kinakailangan ang aytem"
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
      title: "Paghahanap",
      index: "Index",
      query: "Query",
      results: "Mga resulta",
      noIndex: "Walang nahanap na index",
      createIndex: "Lumikha ng index",
      dropIndex: "Tanggalin ang index",
      indexInfo: "Info ng index",
      indexName: "Pangalan ng index",
      prefix: "Key prefix (opsyonal)",
      fieldName: "Pangalan ng field",
      hybridMode: "Hybrid na paghahanap (FT.HYBRID)",
      vectorField: "Vector field",
      vectorValues: "Mga vector value",
    },
    monitor: {
      title: "Monitoring",
      memory: "Memorya",
      opsPerSec: "Ops/seg",
      clients: "Mga kliyente",
      blocked: "Na-block",
      hitsMisses: "Hit Rate",
      networkIo: "Network I/O",
      slowLog: "Mabagal na log",
      noSlowQueries: "Walang mabagal na query na naitala.",
      confirmSlowLogReset: "Sigurado ka bang gusto mong i-reset ang mabagal na log?",
      slowLogResetDone: "Na-reset ang mabagal na log.",
      totalCommands: "Kabuuan",
      expired: "Nag-expire",
      evicted: "Na-evict",
      clientList: "Listahan ng kliyente",
      topKeys: "Pinakamalaking key sa memorya",
      killClient: "Patayin ang kliyente",
      clientKilled: "Napatay ang kliyente",
      confirmKillClient: "Sigurado ka bang ihinto ang client na ito?",
      noKeys: "Walang key",
      rss: "RSS",
      peak: "Pinakamataas",
      fragmentation: "Fragmentation",
      hitsAndMisses: "Hits / Misses",
      noClients: "Walang client",
      slotStats: "Cluster slot statistics",
      serverInfo: "Impormasyon ng Server",
      os: "Operating System",
      port: "Port ng Network",
      pid: "Process ID",
      configFile: "File ng Configuration",
      uptime: "Uptime",
      keyspace: "Redis key space",
      keys: "Redis key",
      expires: "Mag-e-expire",
      noKeyspace: "Walang key",
      persistence: "Pagpapanatili ng Data",
      rdbLastSave: "Huling I-save ng RDB",
      rdbStatus: "Katayuan ng RDB",
      rdbChanges: "Mga Pagbabago Mula Noong Huling Pag-save",
      aofEnabled: "Naka-enable ang AOF",
      aofSize: "Laki ng AOF",
      replication: "Redis Replikasyon",
      role: "Tungkulin ng Replikasyon",
      replicas: "Mga Konektadong Replika",
      masterHost: "Pangunahing Host",
      linkStatus: "Status ng Replikasyon ng Link",
      cpu: "Paggamit ng CPU",
      cpuSys: "Sistema",
      cpuUser: "Gumagamit",
      modules: "Nag-load ng Redis Module",
      noModules: "Walang na-load na Redis module",
      clusterSlotMap: "Mapa ng slot ng cluster ng Redis",
      slotRange: "Saklaw ng cluster slot",
      totalSlots: "Kabuuang mga cluster slot",
      noClusterData: "Walang available na data ng cluster ng Redis.",
    },
    analysis: {
      title: "Pagsusuri ng Memory",
      runAnalysis: "Patakbuhin ang Pagsusuri",
      running: "Sinusuri...",
      typeDistribution: "Distribusyon ng Uri",
      prefixMemory: "Memory ayon sa Prefix",
      topKeysByMemory: "Pinakamalaking Key ayon sa Memory",
      expirationOverview: "Pag-expire ng Key",
      memoryBreakdown: "Paghahati ng Memory",
      keysScanned: "Na-scan na Key",
      totalMemory: "Kabuuang Memory",
      rssMemory: "RSS Memory",
      peakMemory: "Pinakamataas na Memory",
      luaMemory: "Lua Memory",
      overheadMemory: "Overhead",
      datasetMemory: "Dataset",
      fragmentation: "Fragmentation",
      allocator: "Allocator",
      withTTL: "May TTL",
      persistent: "Permanente",
      avgTTL: "Average na TTL",
      prefix: "Prefix",
      keyCount: "Bilang ng Key",
      memoryUsage: "Paggamit ng Memory",
      noPrefix: "(walang prefix)",
      topN: "Top N",
      maxScanKeys: "Maks. na-scan na Key",
      type: "Uri",
      noData: "Walang data. I-click ang Patakbuhin ang Pagsusuri para magsimula.",
      exportAll: "I-export Lahat",
      memoryDoctor: "Memory Doctor",
      doctorNoData: "I-click ang I-refresh upang patakbuhin ang Memory Doctor diagnostics.",
    },
    acl: {
      title: "Mga gumagamit ng ACL",
      loadUsers: "Mag-load ng mga user",
      loading: "Naglo-load...",
      username: "Username",
      status: "Katayuan",
      enabled: "Pinagana",
      disabled: "Hindi pinagana",
      commands: "Mga utos",
      commandsHint: "hal., +@all or +@read -@dangerous",
      keys: "Mga pattern para sa mga Redis key",
      keysHint: "hal., ~* or ~user:*",
      channels: "Mga Pub/Sub Channel",
      channelsHint: "hal., &* or &notifications:*",
      password: "Password",
      noPassword: "Walang password (nopass)",
      passwordHint: "Iwanang walang laman upang mapanatili ang kasalukuyang password",
      currentUser: "Kasalukuyan",
      createUser: "Lumikha ng user",
      editUser: "I-edit ang user",
      deleteUser: "Tanggalin",
      confirmDelete: "Sigurado ka bang gusto mong tanggalin ang ACL user?",
      userDeleted: "Ang ACL user ay tinanggal.",
      userSaved: "Ang gumagamit ng ACL ay nai-save.",
      cannotDeleteDefault: "Hindi matanggal ang default na user.",
      cannotDeleteSelf: "Hindi matanggal ang kasalukuyang nakakonektang user.",
      noUsers: "Ang ACL ay nangangailangan ng Redis 6.0+.",
      groupCommon: "Pangkalahatan",
      groupDataTypes: "Mga Uri ng Data",
      groupOperations: "Mga Operasyon",
      rules: "Mga Panuntunan",
      rulesHint: "Mga token na pinaghihiwalay ng espasyo (halimbawa on >password +@all ~* &*)",
      defaultUserWarning: "Babala: Ang pagbabago sa default na user ay maaaring i-lock out ang lahat ng koneksyon. Kung mangyari ito, kakailanganin mong i-restart ang Redis o gamitin ang redis-cli para ibalik ang access.",
    },
    overview: {
      noConnected: "Walang koneksyon sa Redis.",
      overviewClients: "Ilista ang konektado sa pamamagitan ng bilang ng mga kliyente",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "1 kliyente";
        }
        return `${opt.length} mga kliyente`;
      }
    },
    key: {
      label: {
        key: "Susi",
        encoding: "Encoding",
        compression: "Compression",
        aiRateLimited: "Naabot na ang limitasyon ng AI. Subukan muli mamaya o gamitin ang iyong sariling Groq API key sa Mga Setting.",
        aiError: "Nabigo ang AI query",
        length: "Sukat",
        ttl: "TTL",
        ttlTitle: "Oras Para Mabuhay",
        type: "Uri",
        ttlNotExpire: "hindi mawawalan ng bisa",
        lengthString: "byte",
        lengthItem: "mga bagay",
        actions: "Mga aksyon"
      },
      list: {
        table: {
          index: "Index",
          value: "Halaga"
        }
      },
      hash: {
        table: {
          hashkey: "Hashkey",
          value: "Halaga"
        }
      },
      set: {
        table: {
          value: "Miyembro"
        }
      },
      zset: {
        table: {
          value: "Miyembro",
          score: "Puntos"
        }
      },
      stream: {
        table: {
          timestamp: "Timestamp ID",
          field: "Patlang",
          value: "Halaga"
        }
      },
      timeseries: {
        chart: "Tsart",
        info: "Impormasyon",
        addPoint: "Magdagdag ng Data Point",
        from: "Mula (ms o -)",
        to: "Hanggang (ms o +)",
        aggregation: "Pagsasama-sama",
        timeBucket: "Timba (ms)",
        none: "Wala",
        dataPoints: "mga data point",
        labels: "Mga Label",
        rules: "Mga Panuntunan",
        retention: "Pagpapanatili",
        timestamp: "Timestamp",
        value: "Halaga",
        retentionHint: "0 = walang expiry, o milliseconds",
        duplicatePolicy: "Patakaran sa duplicate",
        labelsHint: "key1 value1 key2 value2",
        timestampHint: "'*' ay nangangahulugang auto generated, o milliseconds timestamp",
        editAllHint: "Isang data point bawat linya: timestamp halaga (timestamp ay maaaring * para sa auto)",
        autoSpread: "Auto * spread interval",
        formula: "Formula",
        formulaLinear: "Linear",
        formulaRandom: "Random",
        formulaSawtooth: "Sawtooth",
        formulaPoints: "Mga Punto",
        formulaAmplitude: "Amplitude",
        formulaOffset: "Offset",
        generate: "I-generate",
        exportChart: "I-export ang PNG",
        overlay: "I-overlay ang mga susi",
        overlayHint: "Mga susi na pinaghihiwalay ng kuwit",
        mrangeFilter: "Filter ng label",
        bulkMode: "Bulk generate",
        mrangeHint: "hal. sensor=temp"
      },
      probabilistic: {
        info: "Impormasyon",
        addItem: "Magdagdag ng aytem",
        checkItem: "Suriin ang aytem",
        item: "Aytem",
        exists: "Umiiral",
        doesNotExist: "Hindi umiiral",
        topkList: "Nangungunang mga aytem",
        topkCount: "Bilang",
        queryCount: "Bilang ng query",
        queryResult: "Resulta ng query",
        addedSuccessfully: "Matagumpay na naidagdag ang aytem",
        deletedSuccessfully: "Matagumpay na nabura ang aytem",
        quantile: "Quantile",
        quantileResult: "Resulta",
        noItems: "Walang mga aytem na ipapakita",
        resetConfirm: "I-reset ang lahat ng data sa T-Digest na ito?",
      },
      vectorset: {
        info: "Impormasyon",
        elements: "Mga elemento",
        similarity: "Paghahanap ng pagkakapareho",
        searchByElement: "Maghanap ayon sa elemento",
        searchByVector: "Maghanap ayon sa vector",
        vectorValues: "Mga halaga ng vector",
        element: "Elemento",
        score: "Iskor",
        count: "Bilang",
        addElement: "Magdagdag ng elemento",
        attributes: "Mga katangian",
        noAttributes: "Walang mga katangian",
        dimensions: "Mga dimensyon",
        removeConfirm: "Alisin ang elementong ito mula sa VectorSet?",
        noElements: "Walang mga elemento",
        filter: "Filter",
        searchComplete: "Tapos na ang paghahanap",
      }
    },
    treeControls: {
      settings: "Mga setting ng puno",
      expandAll: "Palawakin lahat",
      collapseAll: "I-collapse lahat",
      level: "Antas",
      search: {
        search: "Maghanap sa mga susi",
        clear: "I-clear ang kasalukuyang paghahanap upang itakdang walang laman",
        placeholderClient: "Maghanap sa panig ng kliyente",
        placeholderServer: "Maghanap sa gilid ng server",
        info: (opts) => "Ang ibig sabihin ng paghahanap sa panig ng kliyente, na tumutugma ito sa teksto sa input ng paghahanap. Ang ibig sabihin ng paghahanap sa gilid ng server, iyon ay tulad ng paghahanap sa mga pattern ng key bilang *{search-text}*. Para sa malalaking hanay ng paghahanap, mas mainam na gumamit ng paghahanap sa gilid ng server. Para sa mas maliliit na hanay ng paghahanap, mas mainam na gamitin ang client side search mode." + ` Kung ang bilang ng mga susi ay tapos na ${opts?.maxLightKeysCount ?? 110000}, maaari ka lamang maghanap sa gilid ng server.`,
        largeSetInfo: "Sa isang malaking hanay, hindi pinagana ang paghahanap sa panig ng kliyente. kaya sa ngayon tanging server side searching lang ang posible.",
        infoDetails: "Upang malaman kung paano gumagana ang paghahanap, pakitingnan ang mga setting"
      },
      pager: {
        next: "Susunod",
        prev: "Nakaraang",
        first: "Una",
        last: "Huli"
      }
    }
  },
  time: {
    years: "taon",
    months: "buwan",
    days: "araw",
    year: "taon",
    month: "buwan",
    day: "araw",
    second: "segundo",
    seconds: "mga segundo",
    minute: "minuto",
    minutes: "mga minuto",
    hour: "oras",
    hours: "mga oras"
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
    title: "AI Network Assistant",
    description: "Tuklasin ang aming libreng AI Network Assistant sa network.corifeus.com — suriin ang mga domain, IPs, DNS record, SSL certificate, email security, at network infrastructure. Pinapatakbo ng AI para sa instant, komprehensibong resulta.",
    disclaimer: "Ang promosyon na ito ay ipinapakita lamang sa demo site at hindi lilitaw sa Docker, Electron, o mga web app deployment.",
    toastMessage: "Subukan ang aming libreng AI Network Assistant sa network.corifeus.com — suriin ang mga domain, DNS, SSL, at higit pa!",
    visit: "Bisitahin ang network.corifeus.com"
  }
};
module.exports = strings;
