const strings = {
  error: {
    server_error: "Serveri viga, proovige uuesti",
    aiPromptTooLong: "AI viip on liiga pikk (max 4096 tähemärki)",
  },
  title: {
    donate: "Anneta",
    donateTitle: "Toetage P3X Redis UI-d",
    donateDescription: "P3X Redis UI on tasuta avatud lähtekoodiga projekt. Rakenduse, AI funktsioonide, Dockeri piltide, serverite ja taristu hoolduskulud tulevad arendaja enda taskust. Kui leiate selle tööriista kasulikuks, kaaluge palun selle jätkuva arenduse toetamist annetusega. Iga panus aitab projekti elus ja kasvamas hoida. Aitäh!",
    jsonRecursive: "Kõigi lehtede laiendamine",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "Saate valida ühenduse loomiseks Redis ühenduse vasakpoolsest alumisest menüüst.",
    statistics: "Statistika",
    error: "Viga",
    connectingRedis: "Ühendamine seadmega Redis ...",
    socketioConnectError: "Socket.IO viga",
    db: "DB",
    server: "Server",
    clients: "Kliendid",
    memory: "Mälu",
    persistence: "Püsivus",
    stats: "Statistika",
    replication: "Replikatsioon",
    cpu: "CPU",
    cluster: "Cluster",
    modules: "Moodulid",
    errorstats: "Vigade statistika",
    commandstats: "Käskude statistika",
    latencystats: "Viivituse statistika",
    keysizes: "Võtmesuurused",
    threads: "Lõimed"
  },
  confirm: {
    dropIndex: "Kas olete kindel, et soovite selle indeksi kustutada?",
    uploadBuffer: "Kas olete kindel, et laadite need binaarandmed üles?",
    uploadBufferDone: "Binaarandmed laaditakse üles",
    uploadBufferDoneAndSave: "Binaarandmed laaditakse üles ja salvestatakse serverisse",
    title: "Kinnita",
    alert: "Hoiatus",
    info: "Info",
    deleteListItem: "Kas olete kindel, et kustutate selle loendiüksuse?",
    deleteHashKey: "Kas olete kindel, et kustutate selle räsivõtme üksuse?",
    deleteStreamTimestamp: "Kas olete kindel, et kustutate selle voo ajatempli?",
    deleteSetMember: "Kas olete kindel, et kustutate selle komplekti liikme?",
    deleteZSetMember: "Kas olete kindel, et kustutate selle sorteeritud komplekti liikme?",
    deleteConnection: "Kinnita",
    deleteConnectionText: "Kas olete kindel, et kustutate selle Redis ühenduse?",
    deleteNode: "Kas olete kindel, et kustutate selle Redis sõlme?",
    delete: "Kustutada?",
    deleteAllKeys: opts => {
      return `Kustuta see puu ja kõik selle võtmed (${opts.key})?`;
    },
    deleteSearchKeys: opts => {
      return `Kas olete kindel, et soovite kustutada kõik mustrile "${opts.pattern}" vastavad võtmed? Leiti ${opts.count} võtit.`;
    },
    socketioConnectError: "Socket.IO ei saa serveriga ühendust, saate uuesti laadida ja proovida ühenduse tõrke ise lahendada, klient ei tea, kuidas seda ise lahendada.",
    socketioAuthRequired: "Nõutav on Socket.IO autoriseerimine. Autentige koodiga HTTP Basic Auth (kasutajanimi/parool) ja laadige uuesti.",
    invalidCredentials: "Vale kasutajanimi või parool.",
    deleteKey: "Kas olete kindel, et kustutate selle võtme?",
    rename: {
      title: "Kas olete kindel, et nimetate selle võtme ümber?",
      textContent: "See toiming nimetab võtme jäädavalt ümber.",
      placeholder: "Võti Redis (nõutav)"
    },
    ttl: {
      title: "Kas olete kindel, et soovite selle võtme TTL muuta?",
      textContent: "TTL muutmine värskendab selle võtme elamisaega. Selle võtme igaveseks säilitamiseks jätke tühjaks.",
      placeholder: "Võtme Redis TTL (täisarv või tühi)",
      placeholderPlaceholder: "Tühi tähendab, et see püsib igavesti; muul juhul sisestage täisarv.",
      convertTextToTime: "Teisendage tekst kellaajaks",
      convertTextToTimePlaceholder: "Nt. 1d on 86400"
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
    copy: "Kopeeri",
    downloadBuffer: "Laadige alla binaarfail",
    setBuffer: "Laadige üles binaarfail",
    exportKeys: "Ekspordi võtmed",
    exportAllKeys: (opts) => `Ekspordi kõik ${opts.count} võtit`,
    exportSearchResults: (opts) => `Ekspordi ${opts.count} tulemust`,
    deleteAllKeysMenu: (opts) => `Kustuta kõik ${opts.count}`,
    importKeys: "Impordi võtmed",
    deleteSearchKeys: (opts) => `Kustuta ${opts.count} vastavat võtit`,
    saveWithFormatJson: "Salvestage vorminguga",
    formatJson: "Vorming Json",
    wrap: "Mähi",
    unwrap: "Lahti pakkida",
    downloadJson: "Laadige alla JSON",
    pubsubMonitor: "PubSub",
    pulse: "Pulse",
    profiler: "Profiler",
    memoryAnalysis: "Analysis",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "Keel",
    ok: "OK",
    addKey: "Lisa sellele võtmele",
    addKeyRoot: "Lisa juurvõti",
    reloadKey: "Laadi võti uuesti",
    reload: "Laadi uuesti",
    close: "Sule",
    commands: "Käsud",
    view: "Vaade",
    statistics: "Statistika",
    refresh: "Värskenda",
    pause: "Peata",
    resume: "Jätka",
    clear: "Selge",
    rename: "Nimeta ümber",
    main: "Andmebaas",
    cancel: "Tühista",
    theme: "Teema",
    github: "GitHub",
    githubRepo: "Hoidla",
    githubRelease: "Väljaanded",
    githubChangelog: "Muudatuste logi",
    info: "Info",
    settings: "Seaded",
    connect: "Ühendage",
    disconnect: "Katkesta ühendus",
    logout: "Logi välja",
    overview: "Ülevaade",
    console: "konsool",
    noConnections: "Ühendusi pole, lisage ühendus seadete menüüs.",
    noConnectionsInSettings: "Ühendusi pole, võite ülal lisada UUE ÜHENDUSE.",
    connectionAdd: "Uus ühendus",
    addGroup: "Lisa rühm",
    extend: "Pikendada",
    collapse: "Ahenda",
    add: "Lisa",
    edit: "Muuda",
    save: "Salvesta",
    ttl: "Komplekt TTL",
    fieldTtl: "Välja TTL",
    digest: "Kokkuvõte",
    delete: "Kustuta",
    remove: "Eemalda",
    areYouSure: "Kas olete kindel?",
    sure: "Muidugi",
    testConnection: "Katsetage ühendust",
    getKey: "Võtme Redis ja seotud andmete laadimine ...",
    jsonViewShow: "Ekraan JSON",
    jsonViewEditor: "Redigeerige JSON",
    quickConsole: "Kiirkonsool",
    moveUp: "Liiguta üles",
    moveDown: "Liiguta alla",
  },
  diff: {
    reviewChanges: "Vaata muudatused \u00fcle",
    inline: "Reas",
    sideBySide: "K\u00f5rvuti",
    additions: "lisamised",
    deletions: "kustutamised",
    unchangedLines: "muutmata read",
    noChanges: "Muudatusi ei tuvastatud",
    before: "Enne",
    after: "P\u00e4rast",
  },
  label: {
    id: {
      nodeId: "Sõlme ID",
      id: "Ühenduse ID",
      info: "Kui te ei soovi muuta atribuute: sshPassword, sshPrivateKey, password, tlsCrt, tlsKey, tlsCa, sisestage atribuutide väärtuste muutmiseks nendesse atribuutidesse ühenduse ID. Kui soovid sõlme paroolis sama loogikat, siis sisesta sõlme paroolisse sõlme ID."
    },
    secureFeature: "Kui näete väärtust, mis algab P3X-iga ja näeb välja sama, on see turvaline funktsioon. Seadete muutmiseks lihtsalt asenda need sätted tühjade või millegi muuga ja need salvestatakse. Kui te sätteid ei muuda, säilitatakse sätted serveris nii, nagu need on.",
    aiTranslating: "Tõlgitakse...",
    aiSettings: "AI seaded",
    aiGroqApiKey: "Groq API võti",
    aiGroqApiKeyInfo: "Valikuline. Oma Groq API võti parema jõudluse jaoks. Hankige tasuta võti",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "AI API võti salvestatud",
    aiGroqApiKeyInvalid: "Vale Groq API võti",
    aiGroqApiKeyNotSet: "Pole seatud (serveri vaikeväärtus)",
    aiEnabled: "AI on lubatud",
    aiEnabledYes: "Jah",
    aiEnabledNo: "Ei",
    aiRouteViaNetwork: "Suuna läbi network.corifeus.com-i",
    aiRoutingDirect: "Päringud lähevad otse Groq'i teie oma API-võtmega, möödudes network.corifeus.com-ist.",
    aiRoutingNetwork: "AI-päringud suunatakse läbi network.corifeus.com-i. Kui teil on oma tasuta Groq API-võti, saate selle lüliti välja lülitada, et minna otse Groq'i ilma network.corifeus.com-ita.",
    aiMaxTokens: "AI maksimaalsed tokenid",
    aiMaxTokensInfo: "Maksimaalne tokenite arv AI vastuste jaoks. Suuremad väärtused võimaldavad pikemaid vastuseid, kuid võivad kasutada rohkem API-krediite.",
    consoleDrawer: {
      toggleTooltip: "Lülitage konsooli sisse",
      clearTooltip: "Kustuta tagasikerimine",
      closeTooltip: "Sulgege konsool",
      aiSettingsTooltip: "AI seaded",
      modeRedis: "REDIS",
      modeAi: "AI",
      connectionChipNoDb: opts => `${opts.name}`,
      connectionChipWithDb: opts => `${opts.name} · db ${opts.db}`,
      pageChip: opts => `leht: ${opts.page}`,
      connectingTo: opts => `Ühenduse loomine seadmega ${opts.name}…`,
      connectedTo: opts => `Ühendatud seadmega ${opts.name} (Redis ${opts.version} ${opts.mode}, ${opts.modules} moodulit on laaditud)`,
      connectedToNoInfo: opts => `Ühendatud: ${opts.name}`,
      disconnectedFrom: opts => `Ühendus seadmega ${opts.name} katkestatud`,
      readyIndicator: "Valmis."
    },
    cheatsheet: {
      title: "AI Cheatsheet – mida ma saan küsida?",
      subtitle: "Klõpsake mis tahes viipa, et see konsooli kleepida. Seejärel vajutage sisestusklahvi.",
      searchPlaceholder: "Filtreeri viipasid…",
      openOfficialDocs: "Redis Käsud ↗",
      openOfficialDocsTooltip: "Avage ametlik Redis käskude viide aadressil redis.io",
      closeTooltip: "Sule (Esc)",
      empty: "Teie filtrile ei vasta ükski viip.",
      footerHint: "Näpunäide: tippige \"ai:\", millele järgneb mis tahes keeles – AI mõistab 54 keelt ja kasutab vajadusel reaalajas olekut Redis.",
      groups: {
        diagnostics: {
          name: "Live diagnostika",
          description: "Paluge AI uurida reaalajas serveri olekut ohutute kirjutuskaitstud tööriistade abil.",
          prompts: [
            "miks mälu on kõrge?",
            "näita mulle 10 kõige aeglasemat päringut",
            "millised kliendid on ühendatud?",
            "mis on maksimaalse mälu poliitika?",
            "kas hiljuti on välja tõstetud?",
            "kas on mingi latentsussündmus?",
            "kaua server üleval on olnud?",
            "mis on tabamusprotsent?",
            "näidata protsessori kasutamist",
            "võtke klahviruum kokku",
            "kui palju mälu iga andmetüüp kasutab?",
            "kas miski blokeerib praegu serverit?"
          ]
        },
        keys: {
          name: "Võtmed",
          description: "Kontrollige, leidke ja põhjendage võtmeid ilma puu kaudu klõpsamata.",
          prompts: [
            "leia kõik võtmed, mis vastavad user:*",
            "mitu võtit on igas andmebaasis?",
            "näita selle db suurimat räsi",
            "leida võtmeid, mille TTL on vähem kui 60 sekundit",
            "millistel võtmetel pole TTL-i?",
            "mis tüüpi on võti session:abc?",
            "hinnanguline mälu, mida kasutab eesliit \"session:\"",
            "näita võtme user:42 objekti kodeeringut",
            "kas võtmed hakkavad aeguma?",
            "milline nimeruum kasutab kõige rohkem mälu?"
          ]
        },
        dataTypes: {
          name: "Andmetüübid",
          description: "Loomulikkeelne sõnastus iga Redis tüübi loomiseks/lugemiseks/värskendamiseks.",
          prompts: [
            "looge räsi nimega user:1 väljadega name=Alice age=30",
            "lisage loendisse kolm üksust tasks",
            "lisa liikmeid komplekti favourites",
            "lisa hinnatud liikmed sorteeritud komplekti leaderboard",
            "lisa voogesituse sündmus events",
            "hankige voost events viimased 10 kirjet",
            "hankige kõik räsi kasutaja väljad:1",
            "hankige komplekti favourites liikmed",
            "saavuta leaderboard punktide järgi top 10"
          ]
        },
        modules: {
          name: "Moodulid",
          description: "Laaditud Redis moodulite päringud (allolevad kategooriad kuvatakse ainult siis, kui moodul on olemas).",
          prompts: []
        },
        json: {
          name: "RedisJSON",
          description: "Saadaval, kui moodul ReJSON on laaditud.",
          prompts: [
            "looge JSON dokument aadressil user:42 { nimi: \"Alice\", vanus: 30 }",
            "loe user:42 nimevälja",
            "värskendage user:42 vanust 31-le",
            "loetlege kõik JSON võtmed",
            "kustutage väli dokumendist JSON",
            "hankige pesastatud väli, kasutades JSONPath"
          ]
        },
        search: {
          name: "RediSearch",
          description: "Saadaval, kui otsingumoodul on laaditud.",
          prompts: [
            "loetleda kõik täistekstiindeksid",
            "käivitage \"redis\" täistekstiotsing indeksis idx:products",
            "looge räsipõhise indeks väljadega pealkiri (TEXT) ja hind (NUMERIC)",
            "hankige teavet indeksi idx:products kohta",
            "langusindeks idx:products",
            "otsige dokumente, mille hind on vahemikus 10 kuni 50",
            "kirjutage hübriidotsing, mis ühendab teksti ja vektori sarnasuse"
          ]
        },
        timeseries: {
          name: "RedisTimeSeries",
          description: "Saadaval ajaridade mooduli laadimisel.",
          prompts: [
            "loetlege kõik ajaridade võtmed",
            "lisage andmepunkt temp:room1",
            "hankige vahemik temp:room1 eilsest praeguseni",
            "hankige mitu vahemikku sildi järgi sensor=temp",
            "genereerida 100 siinuslaine andmepunkti temp:room1 jaoks",
            "kuva temp:room1 säilitamine ja sildid"
          ]
        },
        bloom: {
          name: "RedisBloom (Bloom / Kägu / Top-K / CMS / T-Digest)",
          description: "Saadaval, kui bf-moodul on laaditud.",
          prompts: [
            "kontrollige, kas üksus foo on õitsemisfiltris spam:ips",
            "lisa üksused õitsemisfiltrisse spam:ips",
            "loo top-K nimega popular, mille K=10",
            "päringu loendus-min sketš traffic võtme /home jaoks",
            "lisage t-digestile väärtused ja saate 95. protsentiili",
            "näita õitsemisfiltri teavet spam:ips"
          ]
        },
        vectorSet: {
          name: "VectorSet (Redis 8+)",
          description: "Saadaval, kui tuvastatakse Redis 8+ (omatüüp VECTORSET).",
          prompts: [
            "lisage vektorisse embeddings",
            "otsige päringuvektoriga 10 kõige sarnasemat vektorit",
            "näita vektorkomplekti mõõtmeid ja arvu embeddings",
            "elemendi kustutamine vektorkomplektist embeddings",
            "otsi elemendi nime järgi VSIM"
          ]
        },
        redis8: {
          name: "Redis 8+ funktsiooni",
          description: "Kuvatakse, kui tuvastatakse Redis 8+.",
          prompts: [
            "määrake räsiväli ttl väärtusega HEXPIRE",
            "saada stringiväärtuse kokkuvõte",
            "käivitage hübriidne täistekst + vektorotsing (FT.HYBRID)",
            "määrake mitu jagatud aegumisega võtit, kasutades MSETEX",
            "voo kirje kustutamine tarbijarühmaga (XDELEX)",
            "kuva klastri pesa statistika 10 parima pesa kohta"
          ]
        },
        scripting: {
          name: "Skriptimine",
          description: "Looge loomulikest kirjeldustest Lua / EVAL skripte.",
          prompts: [
            "kirjutage aatomskript, mis suurendab counter X ainult siis, kui Y > 5",
            "genereerige 100 juhuslikku võtit Lua abil",
            "teisenda see shell-konveier üheks EVAL: võtmed user:* | SAADA | grep passiivne | DEL",
            "porti partii toimingu Lua klastri ohutuse tagamiseks",
            "kontrollige ja määrake stiilivärskendus ühe Lua kõnega",
            "korrake räsi ja kustutage mustriga vastavad väljad"
          ]
        },
        cluster: {
          name: "Klaster",
          description: "Kuvatakse ainult kobarrežiimis.",
          prompts: [
            "näita klastri teavet",
            "klastri sõlmede loend",
            "kuva 10 parimat pesa võtmete arvu järgi",
            "kuva 10 parimat pesa mälu järgi",
            "millisele meistrile kuulub pesa 5000?"
          ]
        },
        acl: {
          name: "ACL (Redis 6+)",
          description: "Kontrollige juurdepääsukontrolli kasutajaid ja praegust ühendust.",
          prompts: [
            "kellena ma seotud olen?",
            "loetlege kõik ACL kasutajad",
            "mis load mul on?",
            "kuvada kasutaja vaikereeglid"
          ]
        },
        qna: {
          name: "Üldised küsimused ja vastused",
          description: "Esitage Redis teadmisi puudutavaid küsimusi – pole tööriistu, vaid vastused.",
          prompts: [
            "mis on ZADD?",
            "kuidas klastrite tõrkesiirde toimib?",
            "selgitage SCAN vs KEYS",
            "millal peaksin kasutama EVAL vs mitut käsku?",
            "millised on Redis püsivusvalikud?",
            "mis vahe on RDB ja AOF vahel?",
            "kuidas Redis Sentinel uue meistri kasuks otsustab?",
            "selgitage räsimärgendeid klastrirežiimis"
          ]
        },
        translate: {
          name: "Loomulik keel → Redis käsk",
          description: "Kirjeldage, mida soovite ühes 54 keelest; AI kirjutab käsu Redis.",
          prompts: [
            "kustutamisvõti user:42",
            "nimeta võti foo ribaks ümber",
            "aeguvad võti session:abc 10 sekundi pärast",
            "kopeerige võtmeallikas sihtkohta",
            "suurendage loenduri külastusi 5 võrra",
            "määrake klahvitervituseks 1 tunniks \"hello\"",
            "kustuta kõik user:* võtmed",
            "näita mulle 10 kõige hõivatumat võtit"
          ]
        }
      }
    },
    ssh: {
      on: "SSH sisse lülitatud",
      off: "SSH väljas",
      sshHost: "SSH Host",
      sshPort: "Port SSH",
      sshUsername: "SSH kasutajanimi",
      sshPassword: "SSH parool",
      sshPrivateKey: "SSH privaatvõti"
    },
    isBuffer: opts => `[object ArrayBuffer] tähendab, et väärtus on binaarandmed või väärtus on suurem kui ${opts.maxValueAsBuffer}`,
    streamValue: `Voo väli ja väärtus on üksus. Nt: väli1 väärtus1 "väli 2" "väärtus 2"`,
    streamTimestampId: `„*” tähendab automaatselt genereeritud või spetsifikatsiooni kujul <millisecondsTime>-<sequenceNumber>`,
    unableToLoadKey: ({
      key
    }) => {
      return `Seda võtit ei saa laadida: ${key}. Võimalik, võti kustutati. Täpne viga on konsoolis.`;
    },
    bigJson: "See JSON objekt on üle 10 kb, seega veenduge, et teate, mida teete, sest mõned funktsioonid võivad olla aeglased.",
    addNode: "Lisa sõlm",
    validateJson: "Kinnitage JSON",
    reducedFunction: `Vähendatud funktsionaalsus`,
    tooManyKeys: opts => {
      return `Täielike funktsioonide jaoks on lubatud klahvide kogusumma ${opts.maxLightKeysCount} loendama. Selles andmebaasis on kokku üle lubatud võtmete ${opts.count}. Võtmete sortimine ja täiendav väljamõeldud puuteave on keelatud. Otsing toimub kliendiotsingu asemel ainult serveris.`;
    },
    redisCommandNotFound: "Ühtegi vastet Redis ei leitud ...",
    treeKeyStore: `Sorteerimine (loomulik võrdlus) teostatakse kliendil ehk brauseris, mis tähendab, et suurte suurte komplektide puhul, nagu üle 10 000 võtme, on see trahv, mis võib lehe renderdamisele veidi aega lisada. Redis-s võtmete sorteerimine puudub, ainult niimoodi.`,
    socketIoTimeout: options => {
      return `Socket.IO aegus selle taotluse jaoks (max ${options.timeout / 1000} sekundit)...`;
    },
    resizerInfo: options => {
      return `Vasaku või parema paneeli minimaalne laius on ${options.width}px`;
    },
    jsonViewNotParsable: "See väärtus ei ole parseeritav JSON  ",
    ttlTitle: "Seadistage TTL sekunditega",
    passwordSecure: "Parool võib olla tühi, kuid see näitab siiski märke, see on turvafunktsioon.",
    aclAuthHint: "Kasutage autentimiseks Redis ACL kasutajanime ja parooli. Paroolita vaikekasutaja jaoks jätke tühjaks.",
    tlsWithoutCert: "Luba TLS ilma täiendava sertifikaadita",
    tlsRejectUnauthorized: "Keeldu volitamata sertifikaadist",
    tlsSecure: "Kui näete TLS-i konfiguratsiooni, mis algab P3X-iga või kõik TLS-i sätted näevad välja ühesugused, on see turvaline funktsioon. Seadete muutmiseks lihtsalt asenda need sätted tühjade või millegi muuga ja need salvestatakse. Kui te TLS-i sätteid ei muuda, säilitatakse sätted serveris nii, nagu need on.",
    treeSeparatorEmpty: "Kui puu eraldaja on tühi, pole puul pesastatud sõlme, vaid puhas loend",
    treeSeparatorEmptyNote: "Pole pesastatud sõlme, vaid puhas loend",
    welcomeConsole: "Tere tulemast Redis konsooli",
    welcomeConsoleInfo: "SHIFT + Kursori UP või DOWN ajalugu on lubatud",
    redisListIndexInfo: "Tühjendage lisamiseks, -1 lisamiseks või salvestamiseks näidatud kohta.",
    console: "konsool",
    connectiondAdd: "Lisage ühendus",
    connectiondEdit: "Redigeeri ühendust",
    connectiondView: "Vaata ühendust",
    connections: "Ühendused",
    keysSort: {
      on: "Võtmete sorteerimine sisse",
      off: "Võtmete sorteerimine ära"
    },
    cluster: {
      on: "Cluster sisse lülitatud",
      off: "Cluster väljas"
    },
    sentinel: {
      on: "Sentinel sisse lülitatud",
      off: "Sentinel väljas",
      name: "Sentinel nimi"
    },
    readonly: {
      on: "Ainult lugemiseks edasi",
      off: "Readonly off"
    },
    theme: {
      light: "Valgus",
      dark: "Tume ettevõtmine",
      darkNeu: "Tume",
      darkoBluo: "Tume bluo",
      enterprise: "Ettevõtlus",
      redis: "Redis",
      matrix: "Maatriks"
    },
    connected: opts => {
      return `Ühendatud: ${opts.name}`;
    },
    tree: "Puu",
    askAuth: "Küsi luba",
    keyboardShortcuts: "Keyboard Shortcuts",
    about: "About",
    supportedLanguages: "Supported Languages",
    version: "Version",
    redisVersion: "Redis Version",
    modules: "Moodulid",
    shortcutRefresh: "Refresh",
    shortcutSearch: "Focus Search",
    shortcutNewKey: "New Key",
    shortcutDisconnect: "Katkesta ühendus",
    themeAuto: "Auto (system)",
    languageAuto: "Auto (system)",
    shortcutCommandPalette: "Command Palette",
    commandPalette: "Command Palette",
    noResults: "No results",
    redisCommandsReference: "Redis Käsud",
    ungrouped: "Rühmitamata",
    grouped: "Grouped",
    connectFirst: "Ühenduge esmalt Redis serveriga",
    searchLanguage: "Otsi keelt...",
    exportProgress: "Võtmete eksportimine...",
    importProgress: "Võtmete importimine...",
    importPreview: "Eelvaade",
    importOverwrite: "Kirjuta üle",
    importSkip: "Jäta vahele",
    importConflict: "Kui võti on juba olemas:",
    noKeysToExport: "Pole võtmeid eksportimiseks",
    time: "Aeg",
    type: "Tüüp",
    format: "Formaat",
    loading: "Laadimine...",
    autoRefresh: "Auto",
    exportSearchHint: "Eksporditakse ainult praegusele otsingule vastavad võtmed",
    importSearchHint: "Import kehtib kogu andmebaasile, mitte ainult otsingutulemustele",
    deleteSearchHint: "Kustutab kõik serveris praegusele otsingule vastavad võtmed",
    deletingSearchKeys: "Vastavate võtmete kustutamine...",
    importNoKeys: "Failis ei leitud võtmeid",
    desktopNotifications: "Töölaua teavitused",
    desktopNotificationsEnabled: "Luba töölaua teavitused",
    desktopNotificationsInfo: "Saate OS-i teavitusi Redise lahtiühenduste ja taasühenduste kohta, kui rakendus ei ole fookuses."
  },
  status: {
    dataCopied: "Andmed on lõikepuhvril",
    exportDone: "Eksport lõpetatud",
    deletedSearchKeys: (opts) => `Kustutatud ${opts.count} võtit`,
    indexCreated: "Indeks loodud",
    indexDropped: "Indeks kustutatud",
    importDone: (opts) => `Import lõpetatud: ${opts.created} loodud, ${opts.skipped} vahele jäetud, ${opts.errors} viga`,
    nodeRemoved: "Sõlm eemaldatud",
    keyIsNotExisting: "See võti võis olla kustutatud või aegunud.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "Võti puudub";
      } else if (opts.keyCount === 1) {
        return "1 võti";
      } else {
        return `${opts.keyCount} võtmed`;
      }
    },
    treeExpandAll: "Laiendage kõiki puulehti. See operatsioon võib olla kulukas ja võib võtta aega...",
    noRedisKeys: "Selles andmebaasis pole võtmeid.",
    redisConnected: "Redis ühendamine õnnestus",
    reverted: "Ennistatud",
    reloadingDataInfo: "Redis andmete uuesti laadimine",
    added: "Lisatud",
    saved: "Uuendatud",
    cancelled: "Tühistatud",
    deleted: "Kustutatud",
    savedRedis: "Redis andmed salvestatakse",
    redisDisconnected: opts => {
      return `Praegusel ühendusel ilmnes viga: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `db indeks on seatud väärtusele ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `Puu võti kustutati (${opts.key}).`;
    },
    deletedKey: opts => {
      return `võti kustutati (${opts.key}).`;
    },
    renamedKey: "See võti on ümber nimetatud",
    ttlChanged: "Selle võtme TTL on muudetud",
    notInteger: "See sisend ei ole täisarv",
    persisted: "See võti püsib igavesti",
    set: "Võti on seatud/lisatud",
    connectionRestored: "Ühendus taastatud",
    socketDisconnected: "Ühendus katkestatud",
    socketError: "Ühenduse viga",
    deletedHashKey: "Räsivõti kustutatud",
    deletedSetMember: "Hulga liige kustutatud",
    deletedListElement: "Loendi element kustutatud",
    deletedZSetMember: "Sorteeritud hulga liige kustutatud",
    deletedStreamTimestamp: "Voo kirje kustutatud",
  },
  code: {
    "delete-connection": "See ühendus kustutati, nii et olete selle Redis eksemplariga katkestatud.",
    "save-connection": "Seda ühendust muudeti, nii et olete selle Redis eksemplariga katkestatud. Võite uuesti ühendada.",
    "readonly-connections": "Ühenduste lisamine/salvestamine/kustutamine on kirjutuskaitstud!",
    "readonly-connection-mode": "See ühendus on kirjutuskaitstud režiimis!",
    "list-out-of-bounds": "See loendi register on väljaspool piire",
    "invalid-json-value": "Väärtus ei kehti JSON.",
    "http_auth_required": "Nõutav autoriseerimine: autentige HTTP Basic Auth ja laadige uuesti.",
    "auto-connection-failed": "Võimalik, et ühendus eemaldati ja automaatne ühendus ebaõnnestus.",
    invalid_console_command: "See käsk ei tööta GUI kaudu.",
    "AI_DISABLED": "AI on keelatud. Lubage see AI seadetes.",
    "AI_PROMPT_REQUIRED": "AI päring on nõutav.",
    "GROQ_API_KEY_READONLY": "Groq API võti on kirjutuskaitstud ja seda ei saa muuta.",
    "blocked_api_access": "Teie Groq API plaan ei luba juurdepääsu sellele mudelile. Uuendage oma Groq plaani või kasutage network.corifeus.com puhverserverit.",
    "rate_limit": "AI piirang saavutatud. Proovige hiljem uuesti või kasutage seadetes oma Groq API võtit."
  },
  form: {
    error: {
      required: "Nõutav",
      port: "Sadam on vahemikus 1-65535",
      invalid: "Vorm on kehtetu"
    },
    connection: {
      label: {
        name: "Nimi",
        group: "Group",
        host: "Hostinimi",
        port: "Port",
        password: "Parool",
        username: "Kasutajanimi"
      }
    },
    treeSettings: {
      maxValueDisplay: "Maksimaalse väärtuse kuvatava stringi pikkus",
      maxValueDisplayInfo: "Kui see on 0, kuvage täisväärtusi. Kui see on suurem kui 0, kärbige selle pikkuseni. Kui -1: stringide puhul peida väärtus kuni muutmiseni; muude tüüpide puhul kuva kogu sisu.",
      maxKeys: "Maksimaalne võtmete arv",
      maxKeysInfo: "Selleks, et GUI ei jookseks kokku, piirame maksimaalset võtmete arvu.",
      keyCount: (opts) => {
        return `Võtmete arv: ${opts?.keyCount ?? 0}`;
      },
      label: {
        animation: "Kasutage animatsiooni",
        noAnimation: "Animatsiooni pole",
        undoEnabled: "Tagasiv\u00f5tmine lubatud",
        undoDisabled: "Tagasiv\u00f5tmine keelatud",
        diffEnabled: "N\u00e4ita diffi enne salvestamist",
        diffDisabled: "Diff enne salvestamist on keelatud",
        jsonFormatTwoSpace: "Vorming JSON 2 tühikuga",
        jsonFormatFourSpace: "Vorming JSON 4 tühikuga",
        formName: "Redis seaded",
        searchModeClient: "Kliendiotsingu režiim",
        searchModeServer: "Serveri otsingurežiim",
        searchModeStartsWith: "Otsimine algab režiimiga",
        searchModeIncludes: "Otsing sisaldab režiimi"
      },
      undoHint: "Tagasiv\u00f5tmine on saadaval ainult string- ja JSON-v\u00f5tmet\u00fc\u00fcpidele",
      field: {
        treeSeparator: "Puude eraldaja",
        treeSeparatorSelector: "Puude eraldaja valija",
        page: "Puu otsimise arv",
        keyPageCount: "Võtme otsimise arv",
        keysSort: "Sorteeri võtmed",
        searchMode: "Otsingurežiim",
        searchModeStartsWith: "Otsing algab tähega / hõlmab"
      },
      error: {
        keyPageCount: "Võtmelehtede arv peab olema täisarv vahemikus 5–100",
        page: "Lehtede arv peab olema täisarv vahemikus 10–5000",
        maxValueDisplay: "Maksimaalne kuvatav väärtus peab olema täisarv vahemikus –1 kuni 32768",
        maxKeys: "Võtmete maksimaalne loendusväärtus peab olema täisarv vahemikus 100 kuni 100 000"
      }
    },
    key: {
      label: {
        formName: {
          add: "Lisage uus võti Redis",
          edit: "Redigeerige võtit Redis",
          append: "Lisage olemasolevale võtmele Redis"
        }
      },
      field: {
        streamTimestamp: "Ajatempel",
        key: "Võti",
        type: "Tüüp",
        index: "Indeks",
        hashKey: "Räsivõti",
        score: "Skoor",
        value: "Väärtus",
        errorRate: "Veamäär",
        capacity: "Mahtuvus",
        topk: "Top K",
        width: "Laius",
        depth: "Sügavus",
        decay: "Kadu",
        compression: "Tihendamine",
        increment: "Kasv",
        item: "Element",
        vectorValues: "Vektori väärtused (komaga eraldatud)",
        element: "Elemendi nimi",
      },
      error: {
        streamTimestamp: "Ajatempel on nõutav kas vormingus Redis või kujul *",
        key: "Võti on vähemalt üks märk",
        hashKey: "Räsitabeli võti koosneb vähemalt ühest tähemärgist",
        score: "Nõutav on sorteeritud komplekti punktisumma",
        value: "Väärtus on nõutav",
        errorRate: "Veamäär peab olema vahemikus 0 kuni 1 (nt. 0.01)",
        capacity: "Mahtuvus peab olema positiivne täisarv",
        topk: "Top K peab olema positiivne täisarv",
        width: "Laius peab olema positiivne täisarv",
        depth: "Sügavus peab olema positiivne täisarv",
        item: "Element on nõutav"
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
      title: "Otsing",
      index: "Indeks",
      query: "Päring",
      results: "Tulemused",
      noIndex: "Indekseid ei leitud",
      createIndex: "Loo indeks",
      dropIndex: "Kustuta indeks",
      indexInfo: "Indeksi info",
      indexName: "Indeksi nimi",
      prefix: "Võtme prefiks (valikuline)",
      fieldName: "Välja nimi",
      hybridMode: "Hübriidotsing (FT.HYBRID)",
      vectorField: "Vektoriväli",
      vectorValues: "Vektori väärtused",
    },
    monitor: {
      title: "Seire",
      memory: "Mälu",
      opsPerSec: "Ops/sek",
      clients: "Kliendid",
      blocked: "Blokeeritud",
      hitsMisses: "Tabamuste määr",
      networkIo: "Võrgu I/O",
      slowLog: "Aeglane logi",
      noSlowQueries: "Aeglasi päringuid ei salvestatud.",
      confirmSlowLogReset: "Kas olete kindel, et soovite aeglase logi lähtestada?",
      slowLogResetDone: "Aeglane logi lähtestati.",
      totalCommands: "Kokku",
      expired: "Aegunud",
      evicted: "Välja tõstetud",
      clientList: "Klientide loend",
      topKeys: "Suurimad võtmed mälu järgi",
      killClient: "Tapa klient",
      clientKilled: "Klient tapetud",
      confirmKillClient: "Kas olete kindel, et soovite selle kliendi lõpetada?",
      noKeys: "Võtmeid pole",
      rss: "RSS",
      peak: "Tipp",
      fragmentation: "Fragmenteerumine",
      hitsAndMisses: "Tabamused / Möödapanekud",
      noClients: "Kliente pole",
      slotStats: "Klastri pesa statistika",
      serverInfo: "Serveriteave",
      os: "Operatsioonisüsteem",
      port: "Võrguport",
      pid: "Protsessi ID",
      configFile: "Konfiguratsioonifail",
      uptime: "Tööaeg",
      keyspace: "Redis võtmeruum",
      keys: "Redis võtmed",
      expires: "Aegub",
      noKeyspace: "Võtmeid pole",
      persistence: "Andmete püsivus",
      rdbLastSave: "RDB viimane salvestamine",
      rdbStatus: "RDB olek",
      rdbChanges: "Muudatused pärast viimast salvestamist",
      aofEnabled: "AOF lubatud",
      aofSize: "AOF suurus",
      replication: "Redis replikatsioon",
      role: "Replikatsiooni roll",
      replicas: "Ühendatud koopiad",
      masterHost: "Esmane host",
      linkStatus: "Replikatsioonilingi olek",
      cpu: "CPU kasutamine",
      cpuSys: "Süsteem",
      cpuUser: "Kasutaja",
      modules: "Laaditud Redis moodulid",
      noModules: "Redis mooduleid pole laaditud",
      clusterSlotMap: "Redise klastri pesa kaart",
      slotRange: "Kobarate pesavahemik",
      totalSlots: "Kobarate pesad kokku",
      noClusterData: "Redise klastri andmed pole saadaval.",
    },
    analysis: {
      title: "Mälu analüüs",
      runAnalysis: "Käivita analüüs",
      running: "Analüüsimine...",
      typeDistribution: "Tüübi jaotus",
      prefixMemory: "Mälu prefiksi järgi",
      topKeysByMemory: "Suurimad võtmed mälu järgi",
      expirationOverview: "Võtmete aegumine",
      memoryBreakdown: "Mälu jaotus",
      keysScanned: "Skannitud võtmed",
      totalMemory: "Kogumälu",
      rssMemory: "RSS mälu",
      peakMemory: "Tippmälu",
      luaMemory: "Lua mälu",
      overheadMemory: "Üldkulu",
      datasetMemory: "Andmestik",
      fragmentation: "Fragmenteerumine",
      allocator: "Eraldaja",
      withTTL: "TTL-iga",
      persistent: "Püsivad",
      avgTTL: "Keskmine TTL",
      prefix: "Prefiks",
      keyCount: "Võtmete arv",
      memoryUsage: "Mälukasutus",
      noPrefix: "(prefiksita)",
      topN: "Top N",
      maxScanKeys: "Maks. skannitud võtmed",
      type: "Tüüp",
      noData: "Andmed puuduvad. Klõpsake Käivita analüüs alustamiseks.",
      exportAll: "Ekspordi kõik",
      memoryDoctor: "Memory Doctor",
      doctorNoData: "Memory Doctori diagnostika käivitamiseks klõpsake Värskenda.",
    },
    acl: {
      title: "ACL kasutajad",
      loadUsers: "Laadige kasutajaid",
      loading: "Laadimine...",
      username: "Kasutajanimi",
      status: "Olek",
      enabled: "Lubatud",
      disabled: "Keelatud",
      commands: "Käsud",
      commandsHint: "nt +@all or +@read -@dangerous",
      keys: "Redis võtmemustrid",
      keysHint: "nt ~* or ~user:*",
      channels: "Pub/Sub kanalid",
      channelsHint: "nt &* or &notifications:*",
      password: "Parool",
      noPassword: "Parool puudub (nopass)",
      passwordHint: "Praeguse parooli säilitamiseks jätke tühjaks",
      currentUser: "Praegune",
      createUser: "Loo kasutaja",
      editUser: "Muuda kasutajat",
      deleteUser: "Kustuta",
      confirmDelete: "Kas olete kindel, et soovite ACL kasutaja kustutada?",
      userDeleted: "ACL-i kasutaja kustutati.",
      userSaved: "ACL kasutaja salvestati.",
      cannotDeleteDefault: "Vaikekasutajat ei saa kustutada.",
      cannotDeleteSelf: "Praegu ühendatud kasutajat ei saa kustutada.",
      noUsers: "ACL jaoks on vajalik Redis 6.0+.",
      groupCommon: "Üldine",
      groupDataTypes: "Andmetüübid",
      groupOperations: "Toimingud",
      rules: "Reeglid",
      rulesHint: "Tühikuga eraldatud märgid (nt on >password +@all ~* &*)",
      defaultUserWarning: "Ettevaatust. Vaikekasutaja muutmine võib kõik ühendused lukustada. Kui see juhtub, peate juurdepääsu taastamiseks taaskäivitama Redis või kasutama redis-cli.",
    },
    overview: {
      noConnected: "Seadmega Redis pole ühendust.",
      overviewClients: "Loetlege ühendatud klientide arvu järgi",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "1 klient";
        }
        return `${opt.length} kliendid`;
      }
    },
    key: {
      label: {
        key: "Võti",
        encoding: "Kodeerimine",
        compression: "Tihendamine",
        aiRateLimited: "AI päringute limiit on saavutatud. Proovige hiljem uuesti või kasutage oma Groq API võtit Seadetes.",
        aiError: "AI päring ebaõnnestus",
        length: "Suurus",
        ttl: "TTL",
        ttlTitle: "Aeg Elada",
        type: "Tüüp",
        ttlNotExpire: "ei aegu",
        lengthString: "baiti",
        lengthItem: "esemed",
        actions: "Tegevused"
      },
      list: {
        table: {
          index: "Indeks",
          value: "Väärtus"
        }
      },
      hash: {
        table: {
          hashkey: "Hashkey",
          value: "Väärtus"
        }
      },
      set: {
        table: {
          value: "liige"
        }
      },
      zset: {
        table: {
          value: "liige",
          score: "Skoor"
        }
      },
      stream: {
        table: {
          timestamp: "Ajatempli ID",
          field: "Väli",
          value: "Väärtus"
        }
      },
      timeseries: {
        chart: "Diagramm",
        info: "Teave",
        addPoint: "Lisa andmepunkt",
        from: "Alates (ms või -)",
        to: "Kuni (ms või +)",
        aggregation: "Agregatsioon",
        timeBucket: "Ämber (ms)",
        none: "Puudub",
        dataPoints: "andmepunktid",
        labels: "Sildid",
        rules: "Reeglid",
        retention: "Säilitamine",
        timestamp: "Ajatempel",
        value: "Väärtus",
        retentionHint: "0 = ei aegu, või millisekundid",
        duplicatePolicy: "Duplikaatide poliitika",
        labelsHint: "key1 value1 key2 value2",
        timestampHint: "'*' tähendab automaatselt genereeritud, või millisekundite ajatempel",
        editAllHint: "Üks andmepunkt rea kohta: ajatempel väärtus (ajatempel võib olla * automaatse jaoks)",
        autoSpread: "Automaatne * leviku intervall",
        formula: "Valem",
        formulaLinear: "Lineaarne",
        formulaRandom: "Juhuslik",
        formulaSawtooth: "Saehamba",
        formulaPoints: "Punktid",
        formulaAmplitude: "Amplituud",
        formulaOffset: "Nihe",
        generate: "Genereeri",
        exportChart: "Ekspordi PNG",
        overlay: "Kattuvad võtmed",
        overlayHint: "Komadega eraldatud võtmed",
        mrangeFilter: "Siltide filter",
        bulkMode: "Hulgi genereerimine",
        mrangeHint: "nt. sensor=temp"
      },
      probabilistic: {
        info: "Teave",
        addItem: "Lisa element",
        checkItem: "Kontrolli elementi",
        item: "Element",
        exists: "Eksisteerib",
        doesNotExist: "Ei eksisteeri",
        topkList: "Populaarseimad elemendid",
        topkCount: "Arv",
        queryCount: "Päringute arv",
        queryResult: "Päringu tulemus",
        addedSuccessfully: "Element lisati edukalt",
        deletedSuccessfully: "Element kustutati edukalt",
        quantile: "Kvantiil",
        quantileResult: "Tulemus",
        noItems: "Elemente pole kuvamiseks",
        resetConfirm: "Lähtestada kõik andmed selles T-Digest-is?",
      },
      vectorset: {
        info: "Teave",
        elements: "Elemendid",
        similarity: "Sarnasuse otsing",
        searchByElement: "Otsi elemendi järgi",
        searchByVector: "Otsi vektori järgi",
        vectorValues: "Vektori väärtused",
        element: "Element",
        score: "Skoor",
        count: "Arv",
        addElement: "Lisa element",
        attributes: "Atribuudid",
        noAttributes: "Atribuute pole",
        dimensions: "Mõõtmed",
        removeConfirm: "Eemaldada see element VectorSet-ist?",
        noElements: "Elemente pole",
        filter: "Filter",
        searchComplete: "Otsing lõpetatud",
      }
    },
    treeControls: {
      settings: "Puu seaded",
      expandAll: "Laienda kõik",
      collapseAll: "Ahenda kõik",
      level: "Tase",
      search: {
        search: "Otsige klahvidest",
        clear: "Tühjendamiseks tühjenda praegune otsing",
        placeholderClient: "Otsige kliendi poolelt",
        placeholderServer: "Otsi serveri poolelt",
        info: (opts) => "Kliendipoolne otsing tähendab, et see vastab otsingusisendis olevale tekstile. Serveripoolne otsing tähendab, et see on nagu otsing võtmemustrites *{otsingutekst}*. Suurte otsingukomplektide puhul on parem kasutada serveripoolset otsingut. Väiksemate otsingukomplektide jaoks on parem kasutada kliendipoolset otsingurežiimi." + ` Kui klahvide arv on lõppenud ${opts?.maxLightKeysCount ?? 110000}, saate otsida ainult serveri poolel.`,
        largeSetInfo: "Suures komplektis on kliendipoolne otsing keelatud. nii et praegu on võimalik ainult serveripoolne otsing.",
        infoDetails: "Et teada saada, kuidas otsing töötab, vaadake palun seadeid"
      },
      pager: {
        next: "Edasi",
        prev: "Eelmine",
        first: "Esiteks",
        last: "Viimane"
      }
    }
  },
  time: {
    years: "aastat",
    months: "kuud",
    days: "päevadel",
    year: "aastal",
    month: "kuu",
    day: "päeval",
    second: "sekund",
    seconds: "sekundit",
    minute: "minut",
    minutes: "minutit",
    hour: "tund",
    hours: "tundi"
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
    title: "AI Võrguabi",
    description: "Avastage meie tasuta AI võrguabi aadressil network.corifeus.com — analüüsige domeene, IPs, DNS kirjeid, SSL sertifikaate, meiliturvet ja võrguinfrastruktuuri. Toiteallikaks on AI koheste ja kõikehõlmavate tulemuste saavutamiseks.",
    disclaimer: "Seda reklaami näidatakse ainult demosaidil ja seda ei kuvata Docker, Electron ega veebirakenduste juurutustes.",
    toastMessage: "Proovige meie tasuta AI võrguabi aadressil network.corifeus.com — analüüsige domeene, DNS, SSL ja palju muud!",
    visit: "Külastage network.corifeus.com"
  }
};
module.exports = strings;
