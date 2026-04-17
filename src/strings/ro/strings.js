const strings = {
  error: {
    server_error: "Eroare de server, va rugam incercati din nou",
    aiPromptTooLong: "Promptul AI este prea lung (maximum 4096 caractere)",
  },
  title: {
    donate: "Donatie",
    donateTitle: "Susțineți P3X Redis UI",
    donateDescription: "P3X Redis UI este un proiect gratuit, open-source. Costurile de întreținere a aplicației, funcțiilor AI, imaginilor Docker, serverelor și infrastructurii vin din buzunarul dezvoltatorului. Dacă considerați acest instrument util, vă rugăm să luați în considerare susținerea dezvoltării sale continue cu o donație. Fiecare contribuție ajută proiectul să rămână viu și în creștere. Mulțumim!",
    jsonRecursive: "Se extind toate ramurile",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "Puteti alege o conexiune Redis din meniul din stanga jos.",
    statistics: "Statistici",
    error: "Eroare",
    connectingRedis: "Conectare la Redis ...",
    socketioConnectError: "Eroare Socket.IO",
    db: "BD",
    server: "Server",
    clients: "Clienti",
    memory: "Memorie",
    persistence: "Persistenta",
    stats: "Statistici",
    replication: "Replicare",
    cpu: "CPU",
    cluster: "Cluster",
    modules: "Module",
    errorstats: "Statistici erori",
    commandstats: "Statistici comenzi",
    latencystats: "Statistici latență",
    keysizes: "Dimensiuni chei",
    threads: "Fire de execuție"
  },
  confirm: {
    dropIndex: "Sunteți sigur că doriți să ștergeți acest index?",
    uploadBuffer: "Sunteti sigur ca doriti sa incarcati aceste date binare?",
    uploadBufferDone: "Datele binare au fost incarcate",
    uploadBufferDoneAndSave: "Datele binare au fost incarcate si salvate pe server",
    title: "Confirmare",
    alert: "Alerta",
    info: "Informatii",
    deleteListItem: "Sunteti sigur ca doriti sa stergeti acest element din lista?",
    deleteHashKey: "Sunteti sigur ca doriti sa stergeti aceasta cheie hash?",
    deleteStreamTimestamp: "Sunteti sigur ca doriti sa stergeti aceasta marca temporala din stream?",
    deleteSetMember: "Sunteti sigur ca doriti sa stergeti acest membru al setului?",
    deleteZSetMember: "Sunteti sigur ca doriti sa stergeti acest membru al setului sortat?",
    deleteConnection: "Confirmare",
    deleteConnectionText: "Sunteti sigur ca doriti sa stergeti aceasta conexiune Redis?",
    deleteNode: "Sunteti sigur ca doriti sa stergeti acest nod Redis?",
    deleteAllKeys: opts => {
      return `Stergeti acest arbore si toate cheile sale (${opts.key})?`;
    },
    deleteSearchKeys: opts => {
      return `Sigur doriți să ștergeți toate cheile care corespund "${opts.pattern}"? S-au găsit ${opts.count} chei.`;
    },
    socketioConnectError: "Socket.IO nu se poate conecta la server, puteti reincarca si incerca sa rezolvati eroarea de conexiune singur, clientul nu stie cum sa o rezolve.",
    socketioAuthRequired: "Autorizarea Socket.IO este necesara. Va rugam autentificati-va cu HTTP Basic Auth (utilizator/parola) si reincarcati.",
    invalidCredentials: "Nume de utilizator sau parolă nevalide.",
    delete: "Stergeti?",
    deleteKey: "Sunteti sigur ca doriti sa stergeti aceasta cheie?",
    rename: {
      title: "Sunteti sigur ca doriti sa redenumiti aceasta cheie?",
      textContent: "Aceasta actiune redenumeste cheia permanent.",
      placeholder: "Cheia Redis (obligatoriu)"
    },
    ttl: {
      title: "Sunteti sigur ca doriti sa schimbati TTL-ul acestei chei?",
      textContent: "Schimbarea TTL-ului actualizeaza durata de viata a acestei chei. Lasati gol pentru a pastra cheia pentru totdeauna.",
      placeholder: "TTL-ul cheii Redis (numar intreg sau gol)",
      placeholderPlaceholder: "Gol inseamna ca persista pentru totdeauna; altfel introduceti un numar intreg.",
      convertTextToTime: "Convertire text in timp",
      convertTextToTimePlaceholder: "Ex. 1d va fi 86400"
    }
  },
  language: {
    bg: "\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438 / Bulgarian",
    cs: "\u010Ce\u0161tina / Czech",
    de: "Deutsch / German",
    el: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC / Greek",
    en: "English",
    es: "Espa\u00F1ol / Spanish",
    fr: "Fran\u00E7ais / French",
    hu: "Magyar / Hungarian",
    it: "Italiano / Italian",
    ja: "\u65E5\u672C\u8A9E / Japanese",
    nl: "Nederlands / Dutch",
    pl: "Polski / Polish",
    "pt-PT": "Portugu\u00EAs / Portuguese",
    ro: "Rom\u00E2n\u0103 / Romanian",
    ru: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439 / Russian",
    sk: "Sloven\u010Dina / Slovak",
    sr: "\u0421\u0440\u043F\u0441\u043A\u0438 / Serbian",
    sv: "Svenska / Swedish",
    tr: "T\u00FCrk\u00E7e / Turkish",
    uk: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430 / Ukrainian",
    zn: "\u4E2D\u6587 / Chinese",
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
    copy: "Copiere",
    downloadBuffer: "Descarcare binar",
    setBuffer: "Incarcare binar",
    exportKeys: "Exportă chei",
    exportAllKeys: (opts) => `Exportă toate cele ${opts.count} chei`,
    exportSearchResults: (opts) => `Exportă ${opts.count} rezultate`,
    deleteAllKeysMenu: (opts) => `Șterge tot ${opts.count}`,
    importKeys: "Importă chei",
    deleteSearchKeys: (opts) => `Șterge ${opts.count} chei corespunzătoare`,
    saveWithFormatJson: "Salvare cu formatare",
    formatJson: "Formatare Json",
    wrap: "Încadrare",
    unwrap: "Fără încadrare",
    downloadJson: "Descarcă JSON",
    pubsubMonitor: "PubSub",
    pulse: "Pulse",
    profiler: "Profiler",
    memoryAnalysis: "Analysis",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "Limba / Language",
    ok: "OK",
    addKey: "Adaugare la aceasta cheie",
    addKeyRoot: "Adaugare cheie principala",
    reloadKey: "Reincarcare cheie",
    reload: "Reincarcare",
    close: "Inchide",
    commands: "Comenzi",
    view: "Vizualizare",
    statistics: "Statistici",
    refresh: "Actualizeaza",
    pause: "Pauză",
    resume: "Reluare",
    clear: "Curata",
    rename: "Redenumire",
    main: "Bază de date",
    cancel: "Anulare",
    theme: "Tema",
    github: "GitHub",
    githubRepo: "Depozit",
    githubRelease: "Versiuni",
    githubChangelog: "Jurnal de modificari",
    info: "Info",
    settings: "Setari",
    connect: "Conectare",
    disconnect: "Deconectare",
    logout: "Deconectare",
    overview: "Prezentare generala",
    console: "Consola",
    noConnections: "Nu exista conexiuni, adaugati o conexiune in meniul de setari.",
    noConnectionsInSettings: "Nu exista conexiuni, puteti adauga o CONEXIUNE NOUA mai sus.",
    connectionAdd: "Conexiune noua",
    addGroup: "Adăugare grup",
    extend: "Extindere",
    collapse: "Restrangere",
    add: "Adaugare",
    edit: "Editare",
    save: "Salvare",
    ttl: "Setare TTL",
    fieldTtl: "TTL câmp",
    digest: "Rezumat",
    delete: "Stergere",
    remove: "Eliminare",
    areYouSure: "Ești sigur?",
    sure: "Sigur",
    testConnection: "Testare conexiune",
    getKey: "Se incarca cheia Redis si datele asociate ...",
    jsonViewShow: "Afisare JSON",
    jsonViewEditor: "Editare JSON",
    quickConsole: "Consola rapida",
    moveUp: "Mută în sus",
    moveDown: "Mută în jos",
  },
  diff: {
    reviewChanges: "Revizuie\u0219te modific\u0103rile",
    inline: "\u00cen linie",
    sideBySide: "Al\u0103turat",
    additions: "ad\u0103ug\u0103ri",
    deletions: "\u0219tergeri",
    unchangedLines: "linii nemodificate",
    noChanges: "Nu au fost detectate modific\u0103ri",
    before: "\u00cenainte",
    after: "Dup\u0103",
  },
  label: {
    id: {
      nodeId: 'ID nod',
      id: "ID conexiune",
      info: "Daca nu doriti sa schimbati proprietatile: sshPassword, sshPrivateKey, password, tlsCrt, tlsKey, tlsCa, va rugam introduceti ID-ul conexiunii in acele proprietati pentru a pastra valorile intacte. Daca doriti aceeasi logica pentru parola nodului, introduceti ID-ul nodului in parola nodului."
    },
    secureFeature: 'Daca vedeti o valoare care incepe cu P3X si arata la fel, este o functie de securitate. Pentru a schimba setarile, inlocuiti aceste setari cu gol sau altceva si vor fi salvate. Daca nu schimbati setarile, acestea vor ramane asa cum sunt pe server.',
    aiTranslating: "Se traduce...",
    aiSettings: "Setări AI",
    aiGroqApiKey: "Cheie API Groq",
    aiGroqApiKeyInfo: "Opțional. Cheia API Groq proprie pentru performanță mai bună. Obțineți o cheie gratuită de la",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "Cheie API AI salvată",
    aiGroqApiKeyInvalid: "Cheie API Groq nevalidă",
    aiGroqApiKeyNotSet: "Nesetat (implicit server)",
    aiEnabled: "AI activat",
    aiEnabledYes: "Da",
    aiEnabledNo: "Nu",
    aiRouteViaNetwork: "Rutare prin network.corifeus.com",
    aiRoutingDirect: "Interogările merg direct către Groq folosind propria cheie API, ocolind network.corifeus.com.",
    aiRoutingNetwork: "Interogările AI sunt rutate prin network.corifeus.com. Dacă aveți propria cheie API Groq gratuită, puteți dezactiva acest comutator pentru a ruta direct către Groq fără network.corifeus.com.",
    aiMaxTokens: "Număr maxim de tokeni AI",
    aiMaxTokensInfo: "Numărul maxim de tokeni pentru răspunsurile AI. Valorile mai mari permit răspunsuri mai lungi, dar pot consuma mai multe credite API.",
    consoleDrawer: {
      toggleTooltip: "Comută consola",
      clearTooltip: "Șterge istoricul consolei",
      closeTooltip: "Închide consola",
      aiSettingsTooltip: "Setări AI",
      modeRedis: "REDIS",
      modeAi: "AI",
      connectionChipNoDb: opts => `${opts.name}`,
      connectionChipWithDb: opts => `${opts.name} · db ${opts.db}`,
      pageChip: opts => `pagina: ${opts.page}`,
      connectingTo: opts => `Se conectează la ${opts.name}…`,
      connectedTo: opts => `Conectat la ${opts.name} (Redis ${opts.version} ${opts.mode}, ${opts.modules} module încărcate)`,
      connectedToNoInfo: opts => `Conectat la ${opts.name}`,
      disconnectedFrom: opts => `Deconectat de la ${opts.name}`,
      readyIndicator: "Gata.",
    },
    cheatsheet: {
      title: "Fișă AI — Ce pot întreba?",
      subtitle: "Faceți clic pe orice prompt pentru a-l insera în consolă. Apoi apăsați Enter.",
      searchPlaceholder: "Filtrați prompturile…",
      openOfficialDocs: "Comenzi Redis ↗",
      openOfficialDocsTooltip: "Deschideți referința oficială a comenzilor Redis la redis.io",
      closeTooltip: "Închide (Esc)",
      empty: "Niciun prompt nu se potrivește filtrului.",
      footerHint: "Sfat: tastați \"ai:\" urmat de orice, în orice limbă — AI-ul înțelege 54 de limbi și folosește starea live a Redis atunci când este necesar.",

      groups: {
        diagnostics: {
          name: "Diagnosticare live",
          description: "Cereți AI-ului să investigheze starea live a serverului prin instrumente sigure, doar pentru citire.",
          prompts: [
            "de ce este memoria mare?",
            "arată-mi cele mai lente 10 interogări",
            "ce clienți sunt conectați?",
            "care este politica maxmemory?",
            "există evacuări recente?",
            "există vreun eveniment de latență?",
            "de cât timp rulează serverul?",
            "care este rata de hit?",
            "arată utilizarea CPU",
            "rezumă keyspace-ul",
            "câtă memorie folosește fiecare tip de date?",
            "blochează ceva serverul chiar acum?"
          ]
        },
        keys: {
          name: "Chei",
          description: "Inspectați, găsiți și analizați chei fără să navigați prin arbore.",
          prompts: [
            "găsește toate cheile care se potrivesc cu user:*",
            "câte chei sunt în fiecare bază de date?",
            "arată cel mai mare hash din această bază de date",
            "găsește chei cu TTL mai mic de 60 de secunde",
            "ce chei nu au TTL?",
            "ce tip are cheia session:abc?",
            "estimează memoria folosită de prefixul \"session:\"",
            "arată codificarea obiectului pentru cheia user:42",
            "există chei pe cale să expire?",
            "care spațiu de nume folosește cea mai multă memorie?"
          ]
        },
        dataTypes: {
          name: "Tipuri de date",
          description: "Formulări în limbaj natural pentru creare/citire/actualizare pentru fiecare tip Redis.",
          prompts: [
            "creează un hash numit user:1 cu câmpurile name=Alice age=30",
            "adaugă trei elemente în lista tasks",
            "adaugă membri în setul favourites",
            "adaugă membri cu scor în setul ordonat leaderboard",
            "adaugă un eveniment în stream-ul events",
            "ia ultimele 10 intrări din stream-ul events",
            "ia toate câmpurile hash-ului user:1",
            "ia membrii setului favourites",
            "ia primele 10 după scor din leaderboard"
          ]
        },
        modules: {
          name: "Module",
          description: "Interogări pentru modulele Redis încărcate (categoriile de mai jos apar doar când modulul este prezent).",
          prompts: []
        },
        json: {
          name: "RedisJSON",
          description: "Disponibil când modulul ReJSON este încărcat.",
          prompts: [
            "creează un document JSON la user:42 cu { name: \"Alice\", age: 30 }",
            "citește câmpul name din user:42",
            "actualizează age din user:42 la 31",
            "listează toate cheile JSON",
            "șterge un câmp dintr-un document JSON",
            "ia un câmp imbricat folosind JSONPath"
          ]
        },
        search: {
          name: "RediSearch",
          description: "Disponibil când modulul de căutare este încărcat.",
          prompts: [
            "listează toate indexurile full-text",
            "rulează o căutare full-text pentru \"redis\" pe indexul idx:products",
            "creează un index bazat pe hash cu câmpurile title (TEXT) și price (NUMERIC)",
            "obține informații despre indexul idx:products",
            "șterge indexul idx:products",
            "găsește documente unde price este între 10 și 50",
            "scrie o căutare hibridă care combină text și similaritate vectorială"
          ]
        },
        timeseries: {
          name: "RedisTimeSeries",
          description: "Disponibil când modulul timeseries este încărcat.",
          prompts: [
            "listează toate cheile timeseries",
            "adaugă un punct de date în temp:room1",
            "ia intervalul pentru temp:room1 de ieri până acum",
            "ia multi-range după eticheta sensor=temp",
            "generează 100 de puncte de tip undă sinusoidală pentru temp:room1",
            "arată retenția și etichetele pentru temp:room1"
          ]
        },
        bloom: {
          name: "RedisBloom (Bloom / Cuckoo / Top-K / CMS / T-Digest)",
          description: "Disponibil când modulul bf este încărcat.",
          prompts: [
            "verifică dacă elementul foo există în filtrul Bloom spam:ips",
            "adaugă elemente în filtrul Bloom spam:ips",
            "creează un Top-K numit popular cu K=10",
            "interoghează count-min sketch traffic pentru cheia /home",
            "adaugă valori în t-digest și obține percentila 95",
            "arată informații despre filtrul Bloom spam:ips"
          ]
        },
        vectorSet: {
          name: "VectorSet (Redis 8+)",
          description: "Disponibil când este detectat Redis 8+ (tipul nativ VECTORSET).",
          prompts: [
            "adaugă un vector în embeddings",
            "găsește cei mai similari 10 vectori pentru un vector de interogare",
            "arată dimensiunile și numărul de elemente din vectorset-ul embeddings",
            "șterge un element din vectorset-ul embeddings",
            "caută după numele elementului cu VSIM"
          ]
        },
        redis8: {
          name: "Funcții Redis 8+",
          description: "Afișat când este detectat Redis 8+.",
          prompts: [
            "setează TTL pentru un câmp hash cu HEXPIRE",
            "obține digestul unei valori string",
            "rulează o căutare hibridă full-text + vector (FT.HYBRID)",
            "setează mai multe chei cu aceeași expirare folosind MSETEX",
            "șterge o intrare de stream cu grup de consumatori (XDELEX)",
            "arată cluster slot-stats pentru primele 10 sloturi"
          ]
        },
        scripting: {
          name: "Scriptare",
          description: "Generează scripturi Lua / EVAL din descrieri în limbaj natural.",
          prompts: [
            "scrie un script atomic care incrementează contorul X doar dacă Y > 5",
            "generează 100 de chei aleatoare cu Lua",
            "convertește acest pipeline shell într-un singur EVAL: keys user:* | GET | grep inactive | DEL",
            "portează o operație batch în Lua pentru siguranță în cluster",
            "fă o actualizare în stil check-and-set într-un singur apel Lua",
            "iterează printr-un hash și șterge câmpurile care se potrivesc unui model"
          ]
        },
        cluster: {
          name: "Cluster",
          description: "Afișat doar în modul cluster.",
          prompts: [
            "arată informațiile clusterului",
            "listează nodurile clusterului",
            "arată primele 10 sloturi după numărul de chei",
            "arată primele 10 sloturi după memorie",
            "ce master deține slotul 5000?"
          ]
        },
        acl: {
          name: "ACL (Redis 6+)",
          description: "Inspectați utilizatorii de control al accesului și conexiunea curentă.",
          prompts: [
            "cu ce utilizator sunt conectat?",
            "listează toți utilizatorii ACL",
            "ce permisiuni am?",
            "arată regulile utilizatorului implicit"
          ]
        },
        qna: {
          name: "Întrebări și răspunsuri generale",
          description: "Puneți întrebări despre Redis — fără unelte, doar răspunsuri.",
          prompts: [
            "ce este ZADD?",
            "cum funcționează failover-ul în cluster?",
            "explică SCAN vs KEYS",
            "când ar trebui să folosesc EVAL în loc de mai multe comenzi?",
            "care sunt opțiunile de persistență Redis?",
            "care este diferența dintre RDB și AOF?",
            "cum decide Redis Sentinel asupra unui nou master?",
            "explică hash tag-urile în modul cluster"
          ]
        },
        translate: {
          name: "Limbaj natural → comandă Redis",
          description: "Descrie ce vrei în oricare dintre cele 54 de limbi; AI-ul scrie comanda Redis.",
          prompts: [
            "șterge cheia user:42",
            "redenumește cheia foo în bar",
            "setează expirarea cheii session:abc la 10 secunde",
            "copiază cheia source în destination",
            "incrementează contorul visits cu 5",
            "setează cheia greeting la \"hello\" pentru 1 oră",
            "șterge toate cheile user:*",
            "arată-mi cele mai solicitate 10 chei"
          ]
        }
      }
    },
    ssh: {
      on: 'SSH activat',
      off: 'SSH dezactivat',
      sshHost: 'Gazda SSH',
      sshPort: 'Port SSH',
      sshUsername: 'Utilizator SSH',
      sshPassword: 'Parola SSH',
      sshPrivateKey: 'Cheie privata SSH'
    },
    isBuffer: opts => `[object ArrayBuffer] inseamna ca valoarea este date binare sau valoarea este mai mare decat ${opts.maxValueAsBuffer}`,
    streamValue: `Campul si valoarea stream-ului sunt pe o singura linie. Ex.: camp1 valoare1 "camp 2" "valoare 2"`,
    streamTimestampId: `'*' inseamna generat automat sau specificatia ca <millisecondsTime>-<sequenceNumber>`,
    unableToLoadKey: ({
      key
    }) => {
      return `Nu s-a putut incarca aceasta cheie: ${key}. Posibil, cheia a fost stearsa. Eroarea exacta este in consola.`;
    },
    bigJson: "Acest obiect JSON depaseste 10 kb, asigurati-va ca stiti ce faceti, deoarece unele functii pot fi lente la randare.",
    addNode: "Adaugare nod",
    validateJson: "Validare JSON",
    reducedFunction: `Functionalitate redusa`,
    tooManyKeys: opts => {
      return `Pentru functiile complete maxime, numarul total de chei permis este ${opts.maxLightKeysCount}. Aceasta baza de date are mai mult decat cheile permise, totalul fiind ${opts.count}. Sortarea cheilor si informatiile suplimentare din arbore sunt dezactivate. Cautarea se face doar pe server in loc de cautarea pe client.`;
    },
    redisCommandNotFound: "Nu s-a gasit nicio comanda Redis potrivita ...",
    treeKeyStore: `Sortarea (comparare naturala) se executa pe client (adica browserul), ceea ce inseamna ca are un cost pentru seturi mari, cum ar fi peste 10k chei, ar putea adauga putin timp la randarea paginii. Nu exista sortare de chei in Redis, doar in acest mod.`,
    socketIoTimeout: options => {
      return `Socket.IO a depasit limita de timp pentru aceasta cerere (maxim ${options.timeout / 1000} secunde) ...`;
    },
    resizerInfo: options => {
      return `Latimea minima a panoului stang sau drept este ${options.width}px`;
    },
    jsonViewNotParsable: "Aceasta valoare nu poate fi parsata ca JSON  ",
    ttlTitle: "Setati TTL-ul in secunde",
    passwordSecure: "Parola ar putea fi goala, dar tot va afisa caractere, aceasta este o functie de securitate.",
    aclAuthHint: "Utilizați numele de utilizator și parola Redis ACL pentru a vă autentifica. Lăsați gol pentru utilizatorul implicit fără parolă.",
    tlsWithoutCert: "Activare TLS fara certificat suplimentar",
    tlsRejectUnauthorized: "Respingere certificat neautorizat",
    tlsSecure: "Daca vedeti o configuratie TLS care incepe cu P3X sau toate setarile TLS arata la fel, este o functie de securitate. Pentru a schimba setarile, inlocuiti aceste setari cu gol sau altceva si vor fi salvate. Daca nu schimbati setarile TLS, acestea vor ramane asa cum sunt pe server.",
    treeSeparatorEmpty: "Daca separatorul de arbore este gol, arborele nu va avea noduri imbricate, ci doar o lista simpla",
    treeSeparatorEmptyNote: "Fara noduri imbricate, doar o lista simpla",
    welcomeConsole: "Bine ati venit in consola Redis",
    welcomeConsoleInfo: "SHIFT + Istoricul cu tastele SUS sau JOS este activat",
    redisListIndexInfo: "Gol pentru a adauga la sfarsit, -1 pentru a adauga la inceput sau salvati la pozitia afisata.",
    console: "Consola",
    connectiondAdd: "Adaugare conexiune",
    connectiondEdit: "Editare conexiune",
    connectiondView: "Vizualizare conexiune",
    connections: "Conexiuni",
    keysSort: {
      on: "Sortare chei activata",
      off: "Sortare chei dezactivata"
    },
    cluster: {
      on: "Cluster activat",
      off: "Cluster dezactivat"
    },
    sentinel: {
      on: "Sentinel activat",
      off: "Sentinel dezactivat",
      name: "Nume Sentinel"
    },
    readonly: {
      on: "Doar citire activat",
      off: "Doar citire dezactivat"
    },
    theme: {
      light: "Luminos",
      dark: "Inchis enterprise",
      darkNeu: "Inchis",
      darkoBluo: "Darko bluo",
      enterprise: "Enterprise",
      redis: "Redis",
      matrix: "Matrix"
    },
    connected: opts => {
      return `Conectat: ${opts.name}`;
    },
    tree: "Arbore",
    askAuth: "Solicitare autorizare",
    keyboardShortcuts: "Comenzi rapide de la tastatură",
    about: "Despre",
    supportedLanguages: "Limbi acceptate",
    version: "Versiune",
    redisVersion: "Versiune Redis",
    modules: "Module",
    shortcutRefresh: "Reîmprospătare",
    shortcutSearch: "Focalizare căutare",
    shortcutNewKey: "Cheie nouă",
    shortcutDisconnect: "Deconectare",
    themeAuto: "Automat (sistem)",
    languageAuto: "Auto (system)",
    shortcutCommandPalette: "Paletă de comenzi",
    commandPalette: "Paletă de comenzi",
    noResults: "Fără rezultate",
    redisCommandsReference: "Comenzi Redis",
    ungrouped: "Fără grup",
    grouped: "Grupate",
    connectFirst: "Conectați-vă mai întâi la un server Redis",
    searchLanguage: "Caută limbă...",
    exportProgress: "Exportare chei...",
    importProgress: "Importare chei...",
    importPreview: "Previzualizare",
    importOverwrite: "Suprascrie",
    importSkip: "Omite",
    importConflict: "Dacă cheia există deja:",
    noKeysToExport: "Nu există chei de exportat",
    type: "Tip",
    time: "Timp",
    format: "Format",
    loading: "Se încarcă...",
    autoRefresh: "Auto",
    exportSearchHint: "Se exportă doar cheile care corespund căutării curente",
    importSearchHint: "Importul se aplică întregii baze de date, nu doar rezultatelor căutării",
    deleteSearchHint: "Șterge toate cheile care corespund căutării curente de pe server",
    deletingSearchKeys: "Se șterg cheile corespunzătoare...",
    importNoKeys: "Nu s-au găsit chei în fișier",
    desktopNotifications: "Notificări desktop",
    desktopNotificationsEnabled: "Activare notificări desktop",
    desktopNotificationsInfo: "Primiți notificări OS pentru deconectări și reconectări Redis când aplicația nu este în prim-plan."
  },
  status: {
    dataCopied: "Datele sunt in clipboard",
    exportDone: "Export finalizat",
    deletedSearchKeys: (opts) => `${opts.count} chei șterse`,
    indexCreated: "Index creat",
    indexDropped: "Index șters",
    importDone: (opts) => `Import finalizat: ${opts.created} create, ${opts.skipped} omise, ${opts.errors} erori`,
    nodeRemoved: "Nodul a fost eliminat",
    keyIsNotExisting: "Aceasta cheie ar fi putut fi stearsa sau expirata.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "Nicio cheie";
      } else if (opts.keyCount === 1) {
        return "1 cheie";
      } else {
        return `${opts.keyCount} chei`;
      }
    },
    treeExpandAll: "Extindere toate ramurile arborelui. Aceasta operatie poate fi costisitoare si poate dura ...",
    noRedisKeys: "Nu exista chei in aceasta baza de date.",
    redisConnected: "Redis conectat cu succes",
    reverted: "Restabilit",
    reloadingDataInfo: "Se reincarca informatiile de date Redis",
    added: "Adaugat",
    saved: "Actualizat",
    cancelled: "Anulat",
    deleted: "Sters",
    savedRedis: "Datele Redis au fost salvate",
    redisDisconnected: opts => {
      return `Conexiunea curenta a avut o eroare: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `Indexul bazei de date a fost setat la ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `Cheia din arbore a fost stearsa (${opts.key}).`;
    },
    deletedKey: opts => {
      return `Cheia a fost stearsa (${opts.key}).`;
    },
    renamedKey: "Aceasta cheie a fost redenumita",
    ttlChanged: "TTL-ul acestei chei a fost modificat",
    notInteger: "Aceasta valoare introdusa nu este un numar intreg",
    persisted: "Aceasta cheie este persistenta pentru totdeauna",
    set: "Cheia a fost setata/adaugata",
    connectionRestored: "Conexiune restabilită",
    socketDisconnected: "Deconectat",
    socketError: "Eroare de conexiune",
    deletedHashKey: "Cheie hash ștearsă",
    deletedSetMember: "Membru set șters",
    deletedListElement: "Element listă șters",
    deletedZSetMember: "Membru set sortat șters",
    deletedStreamTimestamp: "Intrare stream ștearsă",
  },
  code: {
    "delete-connection": "Aceasta conexiune a fost stearsa, asa ca sunteti deconectat de la aceasta instanta Redis.",
    "save-connection": "Aceasta conexiune a fost modificata, asa ca sunteti deconectat de la aceasta instanta Redis. Va puteti reconecta.",
    "readonly-connections": "Adaugarea/salvarea/stergerea conexiunilor este doar in citire!",
    "readonly-connection-mode": "Aceasta conexiune este in mod doar citire!",
    "list-out-of-bounds": "Indexul acestei liste este in afara limitelor",
    "invalid-json-value": "The value is not valid JSON.",
    "http_auth_required": "Autorizare necesara: va rugam autentificati-va cu HTTP Basic Auth si reincarcati.",
    "auto-connection-failed": "Posibil, conexiunea a fost eliminata si conectarea automata a esuat din aceasta cauza.",
    invalid_console_command: "Aceasta comanda nu functioneaza prin GUI.",
    "AI_DISABLED": "AI este dezactivat. Activați-l în setările AI.",
    "AI_PROMPT_REQUIRED": "Interogarea AI este necesară.",
    "GROQ_API_KEY_READONLY": "Cheia Groq API este doar pentru citire și nu poate fi modificată.",
    "blocked_api_access": "Planul dvs. Groq API nu permite accesul la acest model. Actualizați planul Groq sau utilizați proxy-ul network.corifeus.com.",
    "rate_limit": "Limita de rată AI atinsă. Încercați din nou mai târziu sau utilizați propria cheie Groq API în setări."
  },
  form: {
    error: {
      required: "Obligatoriu",
      port: "Portul este intre 1-65535",
      invalid: "Formularul este invalid"
    },
    connection: {
      label: {
        name: "Nume",
        group: "Grup",
        host: "Nume gazda",
        port: "Port",
        password: "Parola",
        username: "Utilizator"
      }
    },
    treeSettings: {
      maxValueDisplay: "Lungimea maxima de afisare a valorii",
      maxValueDisplayInfo: "Daca este setat la 0, afiseaza valorile complete. Daca este mai mare de 0, trunchiaza la aceasta lungime. Daca este -1: pentru siruri, ascunde valoarea pana la editare; pentru alte tipuri, afiseaza continutul complet.",
      maxKeys: "Numarul maxim de chei",
      maxKeysInfo: "Pentru ca GUI-ul sa nu se blocheze, limitam numarul maxim de chei.",
      keyCount: (opts) => {
        return `Numarul de chei: ${opts?.keyCount ?? 0}`;
      },
      label: {
        animation: "Foloseste animatie",
        noAnimation: "Fara animatie",
        undoEnabled: "Anulare activat\u0103",
        undoDisabled: "Anulare dezactivat\u0103",
        diffEnabled: "Afi\u0219eaz\u0103 diff \u00eenainte de salvare",
        diffDisabled: "Diff \u00eenainte de salvare dezactivat",
        jsonFormatTwoSpace: "Formatare JSON cu 2 spatii",
        jsonFormatFourSpace: "Formatare JSON cu 4 spatii",
        formName: "Setari Redis",
        searchModeClient: "Mod de cautare pe client",
        searchModeServer: "Mod de cautare pe server",
        searchModeStartsWith: "Cautare cu incepe cu",
        searchModeIncludes: "Cautare cu include"
      },
      undoHint: "Anularea este disponibil\u0103 doar pentru tipurile de chei string \u0219i JSON",
      field: {
        treeSeparator: "Separator arbore",
        treeSeparatorSelector: "Selector separator arbore",
        page: "Numar de paginare arbore",
        keyPageCount: "Numar de paginare chei",
        keysSort: "Sorteaza cheile",
        searchMode: "Mod de cautare",
        searchModeStartsWith: "Cautare incepe cu / include"
      },
      error: {
        keyPageCount: "Numarul de paginare a cheilor trebuie sa fie un numar intreg intre 5 - 100",
        page: "Numarul de paginare trebuie sa fie un numar intreg intre 10 - 5000",
        maxValueDisplay: "Valoarea maxima de afisare trebuie sa fie un numar intreg intre -1 si 32768",
        maxKeys: "Numarul maxim de chei trebuie sa fie un numar intreg intre 100 si 100000"
      }
    },
    key: {
      label: {
        formName: {
          add: "Adaugare cheie Redis noua",
          edit: "Editare cheie Redis",
          append: "Adaugare la cheia Redis existenta"
        }
      },
      field: {
        streamTimestamp: "Marca temporala",
        key: "Cheie",
        type: "Tip",
        index: "Index",
        hashKey: "Cheie hash",
        score: "Scor",
        value: "Valoare",
        errorRate: "Rata de eroare",
        capacity: "Capacitate",
        topk: "Top K",
        width: "Latime",
        depth: "Adancime",
        decay: "Degradare",
        compression: "Compresie",
        increment: "Increment",
        item: "Element",
        vectorValues: "Valori vectoriale (separate prin virgulă)",
        element: "Numele elementului",
      },
      error: {
        streamTimestamp: "Marca temporala este obligatorie, fie in format Redis, fie ca *",
        key: "Cheia are cel putin un caracter",
        hashKey: "Cheia tabelului hash are cel putin un caracter",
        score: "Scorul setului sortat este obligatoriu",
        value: "Valoarea este obligatorie",
        errorRate: "Rata de eroare trebuie sa fie intre 0 si 1 (ex. 0.01)",
        capacity: "Capacitatea trebuie sa fie un numar intreg pozitiv",
        topk: "Top K trebuie sa fie un numar intreg pozitiv",
        width: "Latimea trebuie sa fie un numar intreg pozitiv",
        depth: "Adancimea trebuie sa fie un numar intreg pozitiv",
        item: "Elementul este obligatoriu"
      }
    },
    main: {
      label: {
        database: "BD"
      }
    }
  },
  page: {
    search: {
      title: "Căutare",
      index: "Index",
      query: "Interogare",
      results: "Rezultate",
      noIndex: "Nu s-au găsit indexuri",
      createIndex: "Creează index",
      dropIndex: "Șterge index",
      indexInfo: "Info index",
      indexName: "Nume index",
      prefix: "Prefix cheie (opțional)",
      fieldName: "Nume câmp",
      hybridMode: "Căutare hibridă (FT.HYBRID)",
      vectorField: "Câmp vectorial",
      vectorValues: "Valori vectoriale",
    },
    monitor: {
      title: "Monitorizare",
      memory: "Memorie",
      opsPerSec: "Operații/sec",
      clients: "Clienți",
      blocked: "Blocați",
      hitsMisses: "Rata de succes",
      networkIo: "Rețea I/O",
      slowLog: "Jurnal lent",
      noSlowQueries: "Nu au fost înregistrate interogări lente.",
      confirmSlowLogReset: "Sigur doriți să resetați jurnalul lent?",
      slowLogResetDone: "Jurnalul lent a fost resetat.",
      totalCommands: "Total",
      expired: "Expirate",
      evicted: "Evacuate",
      clientList: "Lista clienților",
      topKeys: "Cele mai mari chei după memorie",
      killClient: "Oprește clientul",
      clientKilled: "Clientul a fost oprit",
      confirmKillClient: "Sunteți sigur că doriți să opriți acest client?",
      noKeys: "Fără chei",
      rss: "RSS",
      peak: "Vârf",
      fragmentation: "Fragmentare",
      hitsAndMisses: "Reușite / Ratări",
      noClients: "Fără clienți",
      slotStats: "Statistici sloturi cluster",
      serverInfo: "Informații server",
      os: "Sistem de operare",
      port: "Port de rețea",
      pid: "ID proces",
      configFile: "Fișierul de configurare",
      uptime: "Timp de funcționare",
      keyspace: "Spațiu cheie Redis",
      keys: "Cheile Redis",
      expires: "Expiră",
      noKeyspace: "Fără chei",
      persistence: "Persistența datelor",
      rdbLastSave: "Ultima salvare RDB",
      rdbStatus: "Stare RDB",
      rdbChanges: "Modificări de la ultima salvare",
      aofEnabled: "AOF activat",
      aofSize: "Dimensiune AOF",
      replication: "Replicare Redis",
      role: "Rol de replicare",
      replicas: "Replicile conectate",
      masterHost: "Gazdă principală",
      linkStatus: "Starea legăturii de replicare",
      cpu: "Utilizarea CPU",
      cpuSys: "Sistem",
      cpuUser: "Utilizator",
      modules: "Modulele Redis încărcate",
      noModules: "Nu au fost încărcate module Redis",
      clusterSlotMap: "Harta sloturilor cluster Redis",
      slotRange: "Gama de sloturi cluster",
      totalSlots: "Total sloturi pentru cluster",
      noClusterData: "Nu sunt disponibile date de cluster Redis.",
    },
    analysis: {
      title: "Analiză Memorie",
      runAnalysis: "Rulează Analiză",
      running: "Se analizează...",
      typeDistribution: "Distribuția Tipurilor",
      prefixMemory: "Memorie după Prefix",
      topKeysByMemory: "Cele Mai Mari Chei după Memorie",
      expirationOverview: "Expirarea Cheilor",
      memoryBreakdown: "Defalcarea Memoriei",
      keysScanned: "Chei Scanate",
      totalMemory: "Memorie Totală",
      rssMemory: "Memorie RSS",
      peakMemory: "Memorie de Vârf",
      luaMemory: "Memorie Lua",
      overheadMemory: "Suprasarcină",
      datasetMemory: "Set de Date",
      fragmentation: "Fragmentare",
      allocator: "Alocator",
      withTTL: "Cu TTL",
      persistent: "Permanente",
      avgTTL: "TTL Mediu",
      prefix: "Prefix",
      keyCount: "Număr de Chei",
      memoryUsage: "Utilizare Memorie",
      noPrefix: "(fără prefix)",
      topN: "Top N",
      maxScanKeys: "Max. Chei Scanate",
      type: "Tip",
      noData: "Fără date. Faceți clic pe Rulează Analiză pentru a începe.",
      exportAll: "Exportă Tot",
      memoryDoctor: "Memory Doctor",
      doctorNoData: "Faceți clic pe Actualizeaza pentru a rula diagnosticarea Memory Doctor.",
    },
    acl: {
      title: "utilizatorii ACL",
      loadUsers: "Încărcați utilizatori",
      loading: "Se încarcă...",
      username: "Utilizator",
      status: "Stare",
      enabled: "Activat",
      disabled: "Dezactivat",
      commands: "Comenzi",
      commandsHint: "de exemplu, +@all or +@read -@dangerous",
      keys: "Modele pentru cheile Redis",
      keysHint: "de exemplu, ~* or ~user:*",
      channels: "Canale Pub/Sub",
      channelsHint: "de exemplu, &* or &notifications:*",
      password: "Parola",
      noPassword: "Fără parolă (nopass)",
      passwordHint: "Lăsați gol pentru a păstra parola curentă",
      currentUser: "Curent",
      createUser: "Creați utilizator",
      editUser: "Editați utilizatorul",
      deleteUser: "Stergere",
      confirmDelete: "Sigur doriți să ștergeți utilizatorul ACL?",
      userDeleted: "Utilizatorul ACL a fost șters.",
      userSaved: "Utilizatorul ACL a fost salvat.",
      cannotDeleteDefault: "Nu se poate șterge utilizatorul implicit.",
      cannotDeleteSelf: "Nu se poate șterge utilizatorul conectat în prezent.",
      noUsers: "ACL necesită Redis 6.0+.",
      groupCommon: "General",
      groupDataTypes: "Tipuri de date",
      groupOperations: "Operațiuni",
      rules: "Reguli",
      rulesHint: "Jetoane separate prin spațiu (de exemplu, on >password +@all ~* &*)",
      defaultUserWarning: "Atenție: Modificarea utilizatorului implicit poate bloca toate conexiunile. Dacă se întâmplă acest lucru, va trebui să reporniți Redis sau să utilizați redis-cli pentru a restabili accesul.",
    },
    overview: {
      noConnected: "Nu exista conexiune la Redis.",
      overviewClients: "Listeaza conexiunile dupa numarul de clienti",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "1 client";
        }
        return `${opt.length} clienti`;
      }
    },
    key: {
      label: {
        key: "Cheie",
        encoding: "Codificare",
        compression: "Compresie",
        aiRateLimited: "Limita de solicitări AI a fost atinsă. Încercați din nou mai târziu sau utilizați propria cheie API Groq în Setări.",
        aiError: "Interogarea AI a eșuat",
        length: "Dimensiune",
        ttl: "TTL",
        ttlTitle: "Durata de viata",
        type: "Tip",
        ttlNotExpire: "nu expira",
        lengthString: "octeti",
        lengthItem: "elemente",
        actions: "Actiuni"
      },
      list: {
        table: {
          index: "Index",
          value: "Valoare"
        }
      },
      hash: {
        table: {
          hashkey: "Cheie hash",
          value: "Valoare"
        }
      },
      set: {
        table: {
          value: "Membru"
        }
      },
      zset: {
        table: {
          value: "Membru",
          score: "Scor"
        }
      },
      stream: {
        table: {
          timestamp: "ID marca temporala",
          field: "Camp",
          value: "Valoare"
        }
      },
      timeseries: {
        chart: "Grafic",
        info: "Informatii",
        addPoint: "Adauga punct de date",
        from: "De la (ms sau -)",
        to: "Pana la (ms sau +)",
        aggregation: "Agregare",
        timeBucket: "Interval (ms)",
        none: "Niciunul",
        dataPoints: "puncte de date",
        labels: "Etichete",
        rules: "Reguli",
        retention: "Retentie",
        timestamp: "Marca temporala",
        value: "Valoare",
        retentionHint: "0 = fara expirare, sau milisecunde",
        duplicatePolicy: "Politica de duplicate",
        labelsHint: "cheie1 valoare1 cheie2 valoare2",
        timestampHint: "'*' inseamna generare automata, sau marca temporala in milisecunde",
        editAllHint: "Un punct de date pe linie: marca_temporala valoare (marca_temporala poate fi * pentru auto)",
        autoSpread: "Interval de distribuire automata *",
        formula: "Formula",
        formulaLinear: "Liniar",
        formulaRandom: "Aleatoriu",
        formulaSawtooth: "Dinte de fierastrau",
        formulaPoints: "Puncte",
        formulaAmplitude: "Amplitudine",
        formulaOffset: "Decalaj",
        generate: "Genereaza",
        exportChart: "Exporta PNG",
        overlay: "Suprapunere chei",
        overlayHint: "Chei separate prin virgula",
        mrangeFilter: "Filtru etichete",
        bulkMode: "Generare în masă",
        mrangeHint: "ex. sensor=temp"
      },
      probabilistic: {
        info: "Informatii",
        addItem: "Adaugare element",
        checkItem: "Verificare element",
        item: "Element",
        exists: "Exista",
        doesNotExist: "Nu exista",
        topkList: "Elemente principale",
        topkCount: "Numar",
        queryCount: "Numar interogari",
        queryResult: "Rezultat interogare",
        addedSuccessfully: "Elementul a fost adaugat cu succes",
        deletedSuccessfully: "Elementul a fost sters cu succes",
        quantile: "Cuantila",
        quantileResult: "Rezultat",
        noItems: "Nu exista elemente de afisat",
        resetConfirm: "Resetati toate datele din acest T-Digest?"
      },
      vectorset: {
        info: "Informații",
        elements: "Elemente",
        similarity: "Căutare după similaritate",
        searchByElement: "Căutare după element",
        searchByVector: "Căutare după vector",
        vectorValues: "Valori vectoriale",
        element: "Element",
        score: "Scor",
        count: "Număr",
        addElement: "Adăugare element",
        attributes: "Atribute",
        noAttributes: "Fără atribute",
        dimensions: "Dimensiuni",
        removeConfirm: "Eliminați acest element din VectorSet?",
        noElements: "Fără elemente",
        filter: "Filtru",
        searchComplete: "Căutare finalizată",
      }
    },
    treeControls: {
      settings: "Setari arbore",
      expandAll: "Extinde tot",
      collapseAll: "Restrange tot",
      level: "Nivel",
      search: {
        search: "Cautare in chei",
        clear: "Curata cautarea curenta",
        placeholderClient: "Cautare pe client",
        placeholderServer: "Cautare pe server",
        info: (opts) => "Cautarea pe client inseamna potrivirea textului din campul de cautare. Cautarea pe server inseamna cautare cu modele in chei ca *{text-cautat}*. Pentru seturi mari de cautare, este mai bine sa folositi cautarea pe server. Pentru seturi mai mici, este mai bine sa folositi cautarea pe client." + ` Daca numarul de chei depaseste ${opts?.maxLightKeysCount ?? 110000}, puteti cauta doar pe server.`,
        largeSetInfo: "Intr-un set mare, cautarea pe client este dezactivata, asa ca in acest moment doar cautarea pe server este posibila.",
        infoDetails: "Pentru a afla cum functioneaza cautarea, verificati setarile"
      },
      pager: {
        next: "Urmatorul",
        prev: "Anterior",
        first: "Primul",
        last: "Ultimul"
      }
    }
  },
  time: {
    years: "ani",
    months: "luni",
    days: "zile",
    year: "an",
    month: "luna",
    day: "zi",
    second: "secunda",
    seconds: "secunde",
    minute: "minut",
    minutes: "minute",
    hour: "ora",
    hours: "ore"
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
    bloom: "Bloom filtru",
    cuckoo: "Cuckoo filtru",
    topk: "Top-K",
    cms: "Count-Min Sketch",
    tdigest: "T-Digest",
    vectorset: "VectorSet",
  },
  promo: {
    title: "Asistent de rețea AI",
    description: "Descoperiți asistentul nostru gratuit de rețea AI la network.corifeus.com — analizați domenii, IP-uri, înregistrări DNS, certificate SSL, securitatea emailului și infrastructura de rețea. Alimentat de AI pentru rezultate instantanee și complete.",
    disclaimer: "Această promovare este afișată doar pe site-ul demo și nu va apărea în implementările Docker, Electron sau ale aplicației web.",
    toastMessage: "Încercați asistentul nostru gratuit de rețea AI la network.corifeus.com — analizați domenii, DNS, SSL și multe altele!",
    visit: "Vizitați network.corifeus.com",
  }
};
module.exports = strings;
