const strings = {
  error: {
    server_error: "Błąd serwera, spróbuj ponownie",
    aiPromptTooLong: "Prompt AI jest za długi (maks. 4096 znaków)",
  },
  title: {
    donate: "Wspomóż",
    donateTitle: "Wesprzyj P3X Redis UI",
    donateDescription: "P3X Redis UI to darmowy projekt open source. Koszty utrzymania aplikacji, funkcji AI, obrazów Docker, serwerów i infrastruktury pokrywane są z kieszeni programisty. Jeśli uważasz to narzędzie za przydatne, rozważ wsparcie jego dalszego rozwoju darowizną. Każdy wkład pomaga utrzymać projekt przy życiu i rozwijać go. Dziękujemy!",
    jsonRecursive: "Rozwijanie wszystkich gałęzi",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "Możesz wybrać połączenie Redis z menu w lewym dolnym rogu.",
    statistics: "Statystyki",
    error: "Błąd",
    connectingRedis: "Łączenie z Redis ...",
    socketioConnectError: "Błąd Socket.IO",
    db: "DB",
    server: "Serwer",
    clients: "Klienty",
    memory: "Pamięć",
    persistence: "Trwałość",
    stats: "Statystyki",
    replication: "Replikacja",
    cpu: "CPU",
    cluster: "Cluster",
    modules: "Moduły",
    errorstats: "Statystyki błędów",
    commandstats: "Statystyki poleceń",
    latencystats: "Statystyki opóźnień",
    keysizes: "Rozmiary kluczy",
    threads: "Wątki"
  },
  confirm: {
    dropIndex: "Czy na pewno chcesz usunąć ten indeks?",
    uploadBuffer: "Czy na pewno chcesz przesłać te dane binarne?",
    uploadBufferDone: "Dane binarne zostały przesłane",
    uploadBufferDoneAndSave: "Dane binarne zostały przesłane i zapisane na serwerze",
    title: "Potwierdzenie",
    alert: "Ostrzeżenie",
    info: "Informacja",
    deleteListItem: "Czy na pewno chcesz usunąć ten element listy?",
    deleteHashKey: "Czy na pewno chcesz usunąć ten klucz hash?",
    deleteStreamTimestamp: "Czy na pewno chcesz usunąć ten znacznik czasu strumienia?",
    deleteSetMember: "Czy na pewno chcesz usunąć ten element zbioru?",
    deleteZSetMember: "Czy na pewno chcesz usunąć ten element zbioru posortowanego?",
    deleteConnection: "Potwierdzenie",
    deleteConnectionText: "Czy na pewno chcesz usunąć to połączenie Redis?",
    deleteNode: "Czy na pewno chcesz usunąć ten węzeł Redis?",
    deleteAllKeys: opts => {
      return `Usunąć to drzewo i wszystkie jego klucze (${opts.key})?`;
    },
    deleteSearchKeys: opts => {
      return `Czy na pewno chcesz usunąć wszystkie klucze pasujące do "${opts.pattern}"? Znaleziono ${opts.count} kluczy.`;
    },
    socketioConnectError: "Socket.IO nie może połączyć się z serwerem. Możesz przeładować stronę i spróbować samodzielnie rozwiązać problem z połączeniem; klient nie potrafi rozwiązać go samodzielnie.",
    socketioAuthRequired: "Wymagana jest autoryzacja Socket.IO. Uwierzytelnij się za pomocą HTTP Basic Auth (nazwa użytkownika/hasło) i przeładuj stronę.",
    invalidCredentials: "Nieprawidłowa nazwa użytkownika lub hasło.",
    delete: "Usunąć?",
    deleteKey: "Czy na pewno chcesz usunąć ten klucz?",
    rename: {
      title: "Czy na pewno chcesz zmienić nazwę tego klucza?",
      textContent: "Ta operacja trwale zmienia nazwę klucza.",
      placeholder: "Klucz Redis (wymagany)"
    },
    ttl: {
      title: "Czy na pewno chcesz zmienić TTL tego klucza?",
      textContent: "Zmiana TTL aktualizuje czas życia tego klucza. Pozostaw puste, aby zachować klucz na zawsze.",
      placeholder: "TTL klucza Redis (liczba całkowita lub puste)",
      placeholderPlaceholder: "Puste oznacza, że klucz istnieje na zawsze; w przeciwnym razie wpisz liczbę całkowitą.",
      convertTextToTime: "Konwertuj tekst na czas",
      convertTextToTimePlaceholder: "Np. 1d to 86400"
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
    copy: "Kopiuj",
    downloadBuffer: "Pobierz dane binarne",
    setBuffer: "Prześlij dane binarne",
    exportKeys: "Eksportuj klucze",
    exportAllKeys: (opts) => `Eksportuj wszystkie ${opts.count} kluczy`,
    exportSearchResults: (opts) => `Eksportuj ${opts.count} wyników`,
    deleteAllKeysMenu: (opts) => `Usuń wszystkie ${opts.count}`,
    importKeys: "Importuj klucze",
    deleteSearchKeys: (opts) => `Usuń ${opts.count} pasujących kluczy`,
    saveWithFormatJson: "Zapisz z formatowaniem",
    formatJson: "Formatuj Json",
    wrap: "Zawijaj",
    unwrap: "Nie zawijaj",
    downloadJson: "Pobierz JSON",
    pubsubMonitor: "PubSub",
    pulse: "Pulse",
    profiler: "Profiler",
    memoryAnalysis: "Analysis",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "Język / Language",
    ok: "OK",
    addKey: "Dodaj do tego klucza",
    addKeyRoot: "Dodaj klucz główny",
    reloadKey: "Przeładuj klucz",
    reload: "Przeładuj",
    close: "Zamknij",
    commands: "Polecenia",
    view: "Widok",
    statistics: "Statystyki",
    refresh: "Odśwież",
    pause: "Pauza",
    resume: "Wznów",
    clear: "Wyczyść",
    rename: "Zmień nazwę",
    main: "Baza danych",
    cancel: "Anuluj",
    theme: "Motyw",
    github: "GitHub",
    githubRepo: "Repozytorium",
    githubRelease: "Wydania",
    githubChangelog: "Dziennik zmian",
    info: "Info",
    settings: "Ustawienia",
    connect: "Połącz",
    disconnect: "Rozłącz",
    logout: "Wyloguj",
    overview: "Przegląd",
    console: "Konsola",
    noConnections: "Brak połączeń, dodaj połączenie w menu ustawień.",
    noConnectionsInSettings: "Brak połączeń, możesz dodać NOWE POŁĄCZENIE powyżej.",
    connectionAdd: "Nowe połączenie",
    addGroup: "Dodaj grupę",
    extend: "Rozwiń",
    collapse: "Zwiń",
    add: "Dodaj",
    edit: "Edytuj",
    save: "Zapisz",
    ttl: "Ustaw TTL",
    fieldTtl: "TTL pola",
    digest: "Skrót",
    delete: "Usuń",
    remove: "Usuń",
    areYouSure: "Czy jesteś pewien?",
    sure: "Pewne",
    testConnection: "Testuj połączenie",
    getKey: "Ładowanie klucza Redis i powiązanych danych ...",
    jsonViewShow: "Wyświetl JSON",
    jsonViewEditor: "Edytuj JSON",
    quickConsole: "Szybka Konsola",
    moveUp: "Przesuń w górę",
    moveDown: "Przesuń w dół",
  },
  diff: {
    reviewChanges: "Przejrzyj zmiany",
    inline: "W linii",
    sideBySide: "Obok siebie",
    additions: "dodatki",
    deletions: "usuni\u0119cia",
    unchangedLines: "niezmienione linie",
    noChanges: "Nie wykryto zmian",
    before: "Przed",
    after: "Po",
  },
  label: {
    id: {
      nodeId: 'ID węzła',
      id: "ID połączenia",
      info: "Jeśli nie chcesz zmieniać właściwości: sshPassword, sshPrivateKey, password, tlsCrt, tlsKey, tlsCa, wpisz ID połączenia w tych właściwościach, aby zachować wartości bez zmian. Jeśli chcesz zastosować tę samą logikę dla hasła węzła, wpisz ID węzła w haśle węzła."
    },
    secureFeature: 'Jeśli widzisz wartość zaczynającą się od P3X, która wygląda tak samo, jest to funkcja bezpieczeństwa. Aby zmienić ustawienia, po prostu zastąp je pustymi lub innymi wartościami, a zostaną zapisane. Jeśli nie zmienisz ustawień, pozostaną takie, jakie są na serwerze.',
    aiTranslating: "Tłumaczenie...",
    aiSettings: "Ustawienia AI",
    aiGroqApiKey: "Klucz API Groq",
    aiGroqApiKeyInfo: "Opcjonalnie. Własny klucz API Groq dla lepszej wydajności. Uzyskaj darmowy klucz na",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "Klucz API AI zapisany",
    aiGroqApiKeyInvalid: "Nieprawidłowy klucz API Groq",
    aiGroqApiKeyNotSet: "Nie ustawiono (domyślne serwera)",
    aiEnabled: "AI włączone",
    aiEnabledYes: "Tak",
    aiEnabledNo: "Nie",
    aiRouteViaNetwork: "Trasa przez network.corifeus.com",
    aiRoutingDirect: "Zapytania kierowane bezpośrednio do Groq przy użyciu własnego klucza API, z pominięciem network.corifeus.com.",
    aiRoutingNetwork: "Zapytania AI są kierowane przez network.corifeus.com. Jeśli masz własny darmowy klucz API Groq, możesz wyłączyć ten przełącznik, aby kierować je bezpośrednio do Groq bez network.corifeus.com.",
    aiMaxTokens: "Maksymalna liczba tokenów AI",
    aiMaxTokensInfo: "Maksymalna liczba tokenów dla odpowiedzi AI. Wyższe wartości pozwalają na dłuższe odpowiedzi, ale mogą zużywać więcej kredytów API.",
    consoleDrawer: {
      toggleTooltip: "Przełącz konsolę",
      clearTooltip: "Wyczyść historię konsoli",
      closeTooltip: "Zamknij konsolę",
      aiSettingsTooltip: "Ustawienia AI",
      modeRedis: "REDIS",
      modeAi: "AI",
      connectionChipNoDb: opts => `${opts.name}`,
      connectionChipWithDb: opts => `${opts.name} · db ${opts.db}`,
      pageChip: opts => `strona: ${opts.page}`,
      connectingTo: opts => `Łączenie z ${opts.name}…`,
      connectedTo: opts => `Połączono z ${opts.name} (Redis ${opts.version} ${opts.mode}, załadowano ${opts.modules} modułów)`,
      connectedToNoInfo: opts => `Połączono z ${opts.name}`,
      disconnectedFrom: opts => `Odłączono od ${opts.name}`,
      notConnected: "Nie połączono.",
      limitedAiOnly: "Tylko ograniczony AI — działają ogólne pytania i odpowiedzi o Redis.",
      connectHint: "Aby uzyskać diagnostykę na żywo, wpisz: connect <name>",
      cheatsheetHint: "Wpisz ai: help, aby zobaczyć, o co możesz zapytać.",
      needsConnection: "To wymaga aktywnego połączenia. Najpierw wpisz \"connect <name>\".",
      aiNeedsConnectionReason: "AI stanu na żywo (tool use) jest dostępne tylko po połączeniu z Redis.",
      verbNeedsConnection: opts => `"${opts.verb}" wymaga aktywnego połączenia — najpierw wpisz "connect <name>".`,
      aiLimitedMode: "AI działa w trybie ograniczonym — dopóki się nie połączysz, działają tylko pytania o ogólną wiedzę o Redis.",
      welcomeDisconnected: "Witaj. Nie jesteś jeszcze połączony z żadną instancją Redis.",
      readyIndicator: "Gotowe.",
    },
    cheatsheet: {
      title: "Ściągawka AI — O co mogę zapytać?",
      subtitle: "Kliknij dowolny monit, aby wkleić go do konsoli. Następnie naciśnij Enter.",
      searchPlaceholder: "Filtruj monity…",
      openOfficialDocs: "Polecenia Redis ↗",
      openOfficialDocsTooltip: "Otwórz oficjalną dokumentację poleceń Redis na redis.io",
      closeTooltip: "Zamknij (Esc)",
      empty: "Żaden monit nie pasuje do filtru.",
      footerHint: "Wskazówka: wpisz \"ai:\", a po nim cokolwiek w dowolnym języku — AI rozumie 54 języki i w razie potrzeby korzysta z aktualnego stanu Redis.",

      // Each group has: name (category label), match (search-filter alias), prompts (array of example strings)
      groups: {
        diagnostics: {
          name: "Diagnostyka na żywo",
          description: "Poproś AI o zbadanie bieżącego stanu serwera za pomocą bezpiecznych narzędzi tylko do odczytu.",
          prompts: [
            "dlaczego zużycie pamięci jest wysokie?",
            "pokaż mi 10 najwolniejszych zapytań",
            "którzy klienci są połączeni?",
            "jaka jest polityka maxmemory?",
            "czy były ostatnio jakieś eksmisje?",
            "czy wystąpiło zdarzenie opóźnienia?",
            "jak długo serwer jest uruchomiony?",
            "jaki jest współczynnik trafień?",
            "pokaż użycie CPU",
            "podsumuj przestrzeń kluczy",
            "ile pamięci używa każdy typ danych?",
            "czy coś blokuje teraz serwer?"
          ]
        },
        keys: {
          name: "Klucze",
          description: "Badaj, znajduj i analizuj klucze bez przeklikiwania drzewa.",
          prompts: [
            "znajdź wszystkie klucze pasujące do user:*",
            "ile kluczy jest w każdej bazie danych?",
            "pokaż największy hash w tej bazie",
            "znajdź klucze z TTL mniejszym niż 60 sekund",
            "które klucze nie mają TTL?",
            "jakiego typu jest klucz session:abc?",
            "oszacuj pamięć używaną przez prefiks \"session:\"",
            "pokaż kodowanie obiektu klucza user:42",
            "czy są klucze, którym za chwilę wygaśnie ważność?",
            "która przestrzeń nazw używa najwięcej pamięci?"
          ]
        },
        dataTypes: {
          name: "Typy danych",
          description: "Naturalny język dla tworzenia/odczytu/aktualizacji każdego typu Redis.",
          prompts: [
            "utwórz hash o nazwie user:1 z polami name=Alice age=30",
            "dodaj trzy elementy do listy tasks",
            "dodaj członków do zbioru favourites",
            "dodaj członków z wynikiem do zbioru posortowanego leaderboard",
            "dołącz zdarzenie do strumienia events",
            "pobierz 10 ostatnich wpisów ze strumienia events",
            "pobierz wszystkie pola hasha user:1",
            "pobierz członków zbioru favourites",
            "pobierz top 10 według wyniku z leaderboard"
          ]
        },
        modules: {
          name: "Moduły",
          description: "Zapytania dla załadowanych modułów Redis (poniższe kategorie pojawiają się tylko, gdy moduł jest obecny).",
          prompts: []
        },
        json: {
          name: "RedisJSON",
          description: "Dostępne, gdy moduł ReJSON jest załadowany.",
          prompts: [
            "utwórz dokument JSON na user:42 z { name: \"Alice\", age: 30 }",
            "odczytaj pole name z user:42",
            "zaktualizuj age na user:42 do 31",
            "pokaż wszystkie klucze JSON",
            "usuń pole z dokumentu JSON",
            "pobierz zagnieżdżone pole za pomocą JSONPath"
          ]
        },
        search: {
          name: "RediSearch",
          description: "Dostępne, gdy moduł search jest załadowany.",
          prompts: [
            "pokaż wszystkie indeksy pełnotekstowe",
            "wykonaj wyszukiwanie pełnotekstowe \"redis\" w indeksie idx:products",
            "utwórz indeks oparty na hashu z polami title (TEXT) i price (NUMERIC)",
            "pobierz informacje o indeksie idx:products",
            "usuń indeks idx:products",
            "znajdź dokumenty, w których price mieści się między 10 a 50",
            "napisz wyszukiwanie hybrydowe łączące tekst i podobieństwo wektorowe"
          ]
        },
        timeseries: {
          name: "RedisTimeSeries",
          description: "Dostępne, gdy moduł timeseries jest załadowany.",
          prompts: [
            "pokaż wszystkie klucze timeseries",
            "dodaj punkt danych do temp:room1",
            "pobierz zakres temp:room1 od wczoraj do teraz",
            "pobierz multi-range według etykiety sensor=temp",
            "wygeneruj 100 punktów sinusoidy dla temp:room1",
            "pokaż retencję i etykiety dla temp:room1"
          ]
        },
        bloom: {
          name: "RedisBloom (Bloom / Cuckoo / Top-K / CMS / T-Digest)",
          description: "Dostępne, gdy moduł bf jest załadowany.",
          prompts: [
            "sprawdź, czy element foo istnieje w filtrze bloom spam:ips",
            "dodaj elementy do filtra bloom spam:ips",
            "utwórz top-K o nazwie popular z K=10",
            "zapytaj count-min sketch traffic dla klucza /home",
            "dodaj wartości do t-digest i pobierz 95. percentyl",
            "pokaż informacje o filtrze bloom spam:ips"
          ]
        },
        vectorSet: {
          name: "VectorSet (Redis 8+)",
          description: "Dostępne, gdy wykryto Redis 8+ (natywny typ VECTORSET).",
          prompts: [
            "dodaj wektor do embeddings",
            "znajdź 10 najbardziej podobnych wektorów do wektora zapytania",
            "pokaż wymiary i liczbę elementów vectorset embeddings",
            "usuń element z vectorset embeddings",
            "wyszukaj po nazwie elementu za pomocą VSIM"
          ]
        },
        redis8: {
          name: "Funkcje Redis 8+",
          description: "Wyświetlane, gdy wykryto Redis 8+.",
          prompts: [
            "ustaw TTL pola hasha za pomocą HEXPIRE",
            "pobierz digest wartości tekstowej",
            "wykonaj hybrydowe wyszukiwanie pełnotekstowe + wektorowe (FT.HYBRID)",
            "ustaw wiele kluczy ze wspólnym czasem wygaśnięcia za pomocą MSETEX",
            "usuń wpis strumienia z grupą konsumentów (XDELEX)",
            "pokaż cluster slot-stats dla 10 najbardziej obciążonych slotów"
          ]
        },
        scripting: {
          name: "Skrypty",
          description: "Generuj skrypty Lua / EVAL z opisów w języku naturalnym.",
          prompts: [
            "napisz atomowy skrypt, który zwiększa licznik X tylko jeśli Y > 5",
            "wygeneruj 100 losowych kluczy za pomocą Lua",
            "przekonwertuj ten potok powłoki na pojedynczy EVAL: keys user:* | GET | grep inactive | DEL",
            "przenieś operację wsadową do Lua dla bezpieczeństwa klastra",
            "aktualizacja w stylu check-and-set w jednym wywołaniu Lua",
            "iteruj po haszu i usuń pola pasujące do wzorca"
          ]
        },
        cluster: {
          name: "Klaster",
          description: "Wyświetlane tylko w trybie klastra.",
          prompts: [
            "pokaż informacje o klastrze",
            "pokaż węzły klastra",
            "pokaż 10 najbardziej obciążonych slotów według liczby kluczy",
            "pokaż 10 najbardziej obciążonych slotów według pamięci",
            "który master jest właścicielem slotu 5000?"
          ]
        },
        acl: {
          name: "ACL (Redis 6+)",
          description: "Badaj użytkowników kontroli dostępu i bieżące połączenie.",
          prompts: [
            "jako kto jestem połączony?",
            "pokaż wszystkich użytkowników ACL",
            "jakie mam uprawnienia?",
            "pokaż reguły użytkownika default"
          ]
        },
        qna: {
          name: "Ogólne Q&A",
          description: "Zadawaj pytania o wiedzę Redis — bez narzędzi, tylko odpowiedzi.",
          prompts: [
            "czym jest ZADD?",
            "jak działa failover klastra?",
            "wyjaśnij SCAN kontra KEYS",
            "kiedy używać EVAL zamiast wielu poleceń?",
            "jakie są opcje trwałości Redis?",
            "jaka jest różnica między RDB a AOF?",
            "jak Redis Sentinel decyduje o nowym masterze?",
            "wyjaśnij hash tags w trybie klastra"
          ]
        },
        translate: {
          name: "Język naturalny → polecenie Redis",
          description: "Opisz, czego chcesz, prostym polskim (lub w dowolnym z 54 języków); AI napisze polecenie Redis.",
          prompts: [
            "usuń klucz user:42",
            "zmień nazwę klucza foo na bar",
            "ustaw wygaśnięcie klucza session:abc za 10 sekund",
            "skopiuj klucz source do destination",
            "zwiększ licznik visits o 5",
            "ustaw klucz greeting na \"hello\" na 1 godzinę",
            "pokaż mi 10 najczęściej używanych kluczy",
            "usuń wszystkie klucze pasujące do temp:*"
          ]
        }
      }
    },
    ssh: {
      on: 'SSH włączony',
      off: 'SSH wyłączony',
      sshHost: 'Host SSH',
      sshPort: 'Port SSH',
      sshUsername: 'Nazwa użytkownika SSH',
      sshPassword: 'Hasło SSH',
      sshPrivateKey: 'Klucz prywatny SSH'
    },
    isBuffer: opts => `[object ArrayBuffer] oznacza, że wartość jest danymi binarnymi lub wartość jest większa niż ${opts.maxValueAsBuffer}`,
    streamValue: `Pole i wartość strumienia są w jednej linii. Np.: pole1 wartość1 "pole 2" "wartość 2"`,
    streamTimestampId: `'*' oznacza automatycznie wygenerowany lub specyfikacja jako <millisecondsTime>-<sequenceNumber>`,
    unableToLoadKey: ({
      key
    }) => {
      return `Nie można załadować tego klucza: ${key}. Możliwe, że klucz został usunięty. Dokładny błąd znajduje się w konsoli.`;
    },
    bigJson: "Ten obiekt JSON ma ponad 10 kb, upewnij się, że wiesz co robisz, ponieważ niektóre funkcje mogą renderować się wolno.",
    addNode: "Dodaj węzeł",
    validateJson: "Waliduj JSON",
    reducedFunction: `Ograniczona funkcjonalność`,
    tooManyKeys: opts => {
      return `Dla pełnej funkcjonalności maksymalna dozwolona liczba kluczy to ${opts.maxLightKeysCount}. Ta baza danych ma więcej kluczy niż dozwolono, łącznie ${opts.count}. Sortowanie kluczy i dodatkowe informacje o drzewie są wyłączone. Wyszukiwanie odbywa się tylko po stronie serwera, a nie klienta.`;
    },
    redisCommandNotFound: "Nie znaleziono pasującego polecenia Redis ...",
    treeKeyStore: `Sortowanie (porównanie naturalne) jest wykonywane na kliencie, czyli w przeglądarce, co oznacza karę wydajności dla dużych zbiorów, np. ponad 10 tys. kluczy; może to dodać trochę czasu do renderowania strony. W Redis nie ma sortowania kluczy, tylko w ten sposób.`,
    socketIoTimeout: options => {
      return `Socket.IO przekroczył limit czasu dla tego żądania (maks. ${options.timeout / 1000} sekund) ...`;
    },
    resizerInfo: options => {
      return `Minimalna szerokość lewego lub prawego panelu to ${options.width}px`;
    },
    jsonViewNotParsable: "Ta wartość nie jest parsowalna jako JSON  ",
    ttlTitle: "Ustaw TTL w sekundach",
    passwordSecure: "Hasło może być puste, ale nadal będzie wyświetlać znaki; jest to funkcja bezpieczeństwa.",
    aclAuthHint: "Do uwierzytelnienia użyj nazwy użytkownika i hasła Redis ACL. Pozostaw puste dla domyślnego użytkownika bez hasła.",
    tlsWithoutCert: "Włącz TLS bez dodatkowego certyfikatu",
    tlsRejectUnauthorized: "Odrzuć nieautoryzowany certyfikat",
    tlsSecure: "Jeśli widzisz konfigurację TLS zaczynającą się od P3X lub wszystkie ustawienia TLS wyglądają tak samo, jest to funkcja bezpieczeństwa. Aby zmienić ustawienia, zastąp je pustymi lub innymi wartościami, a zostaną zapisane. Jeśli nie zmienisz ustawień TLS, pozostaną takie, jakie są na serwerze.",
    treeSeparatorEmpty: "Jeśli separator drzewa jest pusty, drzewo nie będzie miało zagnieżdżonych węzłów, tylko prostą listę",
    treeSeparatorEmptyNote: "Brak zagnieżdżonych węzłów, tylko prosta lista",
    welcomeConsole: "Witamy w konsoli Redis",
    welcomeConsoleInfo: "SHIFT + Historia za pomocą kursora W GÓRĘ lub W DÓŁ jest włączona",
    redisListIndexInfo: "Puste, aby dodać na końcu, -1, aby dodać na początku lub zapisać na wyświetlanej pozycji.",
    console: "Konsola",
    connectiondAdd: "Dodaj połączenie",
    connectiondEdit: "Edytuj połączenie",
    connectiondView: "Wyświetl połączenie",
    connections: "Połączenia",
    keysSort: {
      on: "Sortowanie kluczy włączone",
      off: "Sortowanie kluczy wyłączone"
    },
    cluster: {
      on: "Cluster włączony",
      off: "Cluster wyłączony"
    },
    sentinel: {
      on: "Sentinel włączony",
      off: "Sentinel wyłączony",
      name: "Nazwa Sentinel"
    },
    readonly: {
      on: "Tylko do odczytu włączony",
      off: "Tylko do odczytu wyłączony"
    },
    theme: {
      light: "Jasny",
      dark: "Ciemny enterprise",
      darkNeu: "Ciemny",
      darkoBluo: "Darko bluo",
      enterprise: "Enterprise",
      redis: "Redis",
      matrix: "Matrix"
    },
    connected: opts => {
      return `Połączono: ${opts.name}`;
    },
    tree: "Drzewo",
    askAuth: "Żądaj autoryzacji",
    keyboardShortcuts: "Skróty klawiaturowe",
    about: "O programie",
    supportedLanguages: "Obsługiwane języki",
    version: "Wersja",
    redisVersion: "Wersja Redis",
    modules: "Moduły",
    shortcutRefresh: "Odśwież",
    shortcutSearch: "Fokus na wyszukiwanie",
    shortcutNewKey: "Nowy klucz",
    shortcutDisconnect: "Rozłącz",
    themeAuto: "Automatyczny (system)",
    languageAuto: "Auto (system)",
    shortcutCommandPalette: "Paleta poleceń",
    commandPalette: "Paleta poleceń",
    noResults: "Brak wyników",
    redisCommandsReference: "Polecenia Redis",
    ungrouped: "Bez grupy",
    grouped: "Pogrupowane",
    connectFirst: "Najpierw połącz się z serwerem Redis",
    searchLanguage: "Szukaj języka...",
    exportProgress: "Eksportowanie kluczy...",
    importProgress: "Importowanie kluczy...",
    importPreview: "Podgląd",
    importOverwrite: "Nadpisz",
    importSkip: "Pomiń",
    importConflict: "Jeśli klucz już istnieje:",
    noKeysToExport: "Brak kluczy do eksportu",
    type: "Typ",
    time: "Czas",
    format: "Format",
    loading: "Ładowanie...",
    autoRefresh: "Auto",
    exportSearchHint: "Eksportowane są tylko klucze pasujące do bieżącego wyszukiwania",
    importSearchHint: "Import dotyczy całej bazy danych, nie tylko wyników wyszukiwania",
    deleteSearchHint: "Usuwa wszystkie klucze pasujące do bieżącego wyszukiwania na serwerze",
    deletingSearchKeys: "Usuwanie pasujących kluczy...",
    importNoKeys: "Nie znaleziono kluczy w pliku",
    desktopNotifications: "Powiadomienia pulpitu",
    desktopNotificationsEnabled: "Włącz powiadomienia pulpitu",
    desktopNotificationsInfo: "Otrzymuj powiadomienia systemu operacyjnego o rozłączeniach i ponownych połączeniach Redis, gdy aplikacja nie jest w centrum uwagi."
  },
  status: {
    dataCopied: "Dane są w schowku",
    exportDone: "Eksport zakończony",
    deletedSearchKeys: (opts) => `Usunięto ${opts.count} kluczy`,
    indexCreated: "Indeks utworzony",
    indexDropped: "Indeks usunięty",
    importDone: (opts) => `Import zakończony: ${opts.created} utworzono, ${opts.skipped} pominięto, ${opts.errors} błędów`,
    nodeRemoved: "Węzeł usunięty",
    keyIsNotExisting: "Ten klucz mógł zostać usunięty lub wygasnąć.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "Brak kluczy";
      } else if (opts.keyCount === 1) {
        return "1 klucz";
      } else {
        return `${opts.keyCount} kluczy`;
      }
    },
    treeExpandAll: "Rozwiń wszystkie gałęzie drzewa. Ta operacja może być kosztowna i może zająć trochę czasu ...",
    noRedisKeys: "Brak kluczy w tej bazie danych.",
    redisConnected: "Połączenie z Redis nawiązane pomyślnie",
    reverted: "Cofni\u0119to",
    reloadingDataInfo: "Ponowne ładowanie informacji o danych Redis",
    added: "Dodano",
    saved: "Zaktualizowano",
    cancelled: "Anulowano",
    deleted: "Usunięto",
    savedRedis: "Dane Redis zostały zapisane",
    redisDisconnected: opts => {
      return `Bieżące połączenie napotkało błąd: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `Indeks bazy danych ustawiony na ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `Klucz drzewa został usunięty (${opts.key}).`;
    },
    deletedKey: opts => {
      return `Klucz został usunięty (${opts.key}).`;
    },
    renamedKey: "Nazwa tego klucza została zmieniona",
    ttlChanged: "TTL tego klucza został zmieniony",
    notInteger: "Ta wartość nie jest liczbą całkowitą",
    persisted: "Ten klucz jest zachowany na zawsze",
    set: "Klucz został ustawiony/dodany",
    connectionRestored: "Połączenie przywrócone",
    socketDisconnected: "Rozłączono",
    socketError: "Błąd połączenia",
    deletedHashKey: "Klucz hash usunięty",
    deletedSetMember: "Członek zbioru usunięty",
    deletedListElement: "Element listy usunięty",
    deletedZSetMember: "Członek zbioru posortowanego usunięty",
    deletedStreamTimestamp: "Wpis strumienia usunięty",
  },
  code: {
    "delete-connection": "To połączenie zostało usunięte, dlatego zostałeś rozłączony z tą instancją Redis.",
    "save-connection": "To połączenie zostało zmienione, dlatego zostałeś rozłączony z tą instancją Redis. Możesz ponownie się połączyć.",
    "readonly-connections": "Dodawanie/zapisywanie/usuwanie połączeń jest w trybie tylko do odczytu!",
    "readonly-connection-mode": "To połączenie jest w trybie tylko do odczytu!",
    "list-out-of-bounds": "Indeks tej listy jest poza zakresem",
    "invalid-json-value": "The value is not valid JSON.",
    "http_auth_required": "Wymagana autoryzacja: uwierzytelnij się za pomocą HTTP Basic Auth i przeładuj stronę.",
    "auto-connection-failed": "Możliwe, że połączenie zostało usunięte i automatyczne połączenie nie powiodło się z tego powodu.",
    invalid_console_command: "To polecenie nie działa przez GUI.",
    "AI_DISABLED": "AI jest wyłączone. Włącz je w ustawieniach AI.",
    "AI_PROMPT_REQUIRED": "Zapytanie AI jest wymagane.",
    "GROQ_API_KEY_READONLY": "Klucz Groq API jest tylko do odczytu i nie może być modyfikowany.",
    "blocked_api_access": "Twój plan Groq API nie pozwala na dostęp do tego modelu. Zaktualizuj plan Groq lub użyj proxy network.corifeus.com.",
    "rate_limit": "Osiągnięto limit AI. Spróbuj ponownie później lub użyj własnego klucza Groq API w ustawieniach."
  },
  form: {
    error: {
      required: "Wymagane",
      port: "Port musi być w zakresie 1-65535",
      invalid: "Formularz jest nieprawidłowy"
    },
    connection: {
      label: {
        name: "Nazwa",
        group: "Grupa",
        host: "Nazwa hosta",
        port: "Port",
        password: "Hasło",
        username: "Nazwa użytkownika"
      }
    },
    treeSettings: {
      maxValueDisplay: "Maksymalna długość wyświetlanej wartości",
      maxValueDisplayInfo: "Jeśli ustawiono na 0, wyświetlane są pełne wartości. Jeśli większe niż 0, obcinane do tej długości. Jeśli -1: dla stringów wartość jest ukryta do edycji; dla innych typów wyświetlana jest pełna zawartość.",
      maxKeys: "Maksymalna liczba kluczy",
      maxKeysInfo: "Aby GUI się nie zawieszał, ograniczamy maksymalną liczbę kluczy.",
      keyCount: (opts) => {
        return `Liczba kluczy: ${opts?.keyCount ?? 0}`;
      },
      label: {
        animation: "Użyj animacji",
        noAnimation: "Bez animacji",
        undoEnabled: "Cofanie w\u0142\u0105czone",
        undoDisabled: "Cofanie wy\u0142\u0105czone",
        diffEnabled: "Poka\u017c diff przed zapisaniem",
        diffDisabled: "Diff przed zapisem wy\u0142\u0105czony",
        jsonFormatTwoSpace: "Formatuj JSON z 2 spacjami",
        jsonFormatFourSpace: "Formatuj JSON z 4 spacjami",
        formName: "Ustawienia Redis",
        searchModeClient: "Tryb wyszukiwania po stronie klienta",
        searchModeServer: "Tryb wyszukiwania po stronie serwera",
        searchModeStartsWith: "Wyszukiwanie zaczynające się od",
        searchModeIncludes: "Wyszukiwanie zawierające"
      },
      undoHint: "Cofanie jest dost\u0119pne tylko dla typ\u00f3w kluczy string i JSON",
      field: {
        treeSeparator: "Separator drzewa",
        treeSeparatorSelector: "Selektor separatora drzewa",
        page: "Liczba stron drzewa",
        keyPageCount: "Liczba stron kluczy",
        keysSort: "Sortuj klucze",
        searchMode: "Tryb wyszukiwania",
        searchModeStartsWith: "Wyszukiwanie zaczyna się od / zawiera"
      },
      error: {
        keyPageCount: "Liczba stron kluczy musi być liczbą całkowitą w zakresie 5 - 100",
        page: "Liczba stron musi być liczbą całkowitą w zakresie 10 - 5000",
        maxValueDisplay: "Maksymalna wyświetlana wartość musi być liczbą całkowitą w zakresie od -1 do 32768",
        maxKeys: "Maksymalna liczba kluczy musi być liczbą całkowitą w zakresie od 100 do 100000"
      }
    },
    key: {
      label: {
        formName: {
          add: "Dodaj nowy klucz Redis",
          edit: "Edytuj klucz Redis",
          append: "Dodaj do istniejącego klucza Redis"
        }
      },
      field: {
        streamTimestamp: "Znacznik czasu",
        key: "Klucz",
        type: "Typ",
        index: "Indeks",
        hashKey: "Klucz hash",
        score: "Wynik",
        value: "Wartość",
        errorRate: "Współczynnik błędu",
        capacity: "Pojemność",
        topk: "Top K",
        width: "Szerokość",
        depth: "Głębokość",
        decay: "Zanik",
        compression: "Kompresja",
        increment: "Przyrost",
        item: "Element",
        vectorValues: "Wartości wektora (oddzielone przecinkami)",
        element: "Nazwa elementu",
      },
      error: {
        streamTimestamp: "Znacznik czasu jest wymagany, w formacie Redis lub jako *",
        key: "Klucz musi mieć co najmniej jeden znak",
        hashKey: "Klucz tabeli hash musi mieć co najmniej jeden znak",
        score: "Wynik zbioru posortowanego jest wymagany",
        value: "Wartość jest wymagana",
        errorRate: "Współczynnik błędu musi wynosić od 0 do 1 (np. 0.01)",
        capacity: "Pojemność musi być dodatnią liczbą całkowitą",
        topk: "Top K musi być dodatnią liczbą całkowitą",
        width: "Szerokość musi być dodatnią liczbą całkowitą",
        depth: "Głębokość musi być dodatnią liczbą całkowitą",
        item: "Element jest wymagany"
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
      title: "Szukaj",
      index: "Indeks",
      query: "Zapytanie",
      results: "Wyniki",
      noIndex: "Nie znaleziono indeksów",
      createIndex: "Utwórz indeks",
      dropIndex: "Usuń indeks",
      indexInfo: "Info o indeksie",
      indexName: "Nazwa indeksu",
      prefix: "Prefiks klucza (opcjonalnie)",
      fieldName: "Nazwa pola",
      hybridMode: "Wyszukiwanie hybrydowe (FT.HYBRID)",
      vectorField: "Pole wektorowe",
      vectorValues: "Wartości wektorowe",
    },
    monitor: {
      title: "Monitorowanie",
      memory: "Pamięć",
      opsPerSec: "Operacji/s",
      clients: "Klienci",
      blocked: "Zablokowane",
      hitsMisses: "Trafienia",
      networkIo: "Sieć I/O",
      slowLog: "Wolny log",
      noSlowQueries: "Nie zarejestrowano żadnych powolnych zapytań.",
      confirmSlowLogReset: "Czy na pewno chcesz zresetować powolny dziennik?",
      slowLogResetDone: "Powolny dziennik został zresetowany.",
      totalCommands: "Łącznie",
      expired: "Wygasłe",
      evicted: "Usunięte",
      clientList: "Lista klientów",
      topKeys: "Największe klucze według pamięci",
      killClient: "Zabij klienta",
      clientKilled: "Klient zabity",
      confirmKillClient: "Czy na pewno chcesz zakończyć tego klienta?",
      noKeys: "Brak kluczy",
      rss: "RSS",
      peak: "Szczyt",
      fragmentation: "Fragmentacja",
      hitsAndMisses: "Trafienia / Chybienia",
      noClients: "Brak klientów",
      slotStats: "Statystyki slotów klastra",
      serverInfo: "Informacje o serwerze",
      os: "System operacyjny",
      port: "Port sieciowy",
      pid: "Identyfikator procesu",
      configFile: "Plik konfiguracyjny",
      uptime: "Czas pracy",
      keyspace: "Przestrzeń kluczy Redis",
      keys: "Klucze Redis",
      expires: "Wygasa",
      noKeyspace: "Brak kluczy",
      persistence: "Trwałość danych",
      rdbLastSave: "Ostatni zapis RDB",
      rdbStatus: "Stan RDB",
      rdbChanges: "Zmiany od ostatniego zapisu",
      aofEnabled: "Funkcja AOF włączona",
      aofSize: "Rozmiar AOF",
      replication: "Replikacja Redis",
      role: "Rola replikacji",
      replicas: "Połączone repliki",
      masterHost: "Główny gospodarz",
      linkStatus: "Stan łącza replikacji",
      cpu: "Użycie procesora",
      cpuSys: "Systemu",
      cpuUser: "Użytkownik",
      modules: "Załadowano moduły Redis",
      noModules: "Nie załadowano żadnych modułów Redis",
      clusterSlotMap: "Mapa gniazd klastra Redis",
      slotRange: "Zakres szczelin klastra",
      totalSlots: "Łączna liczba gniazd klastra",
      noClusterData: "Brak dostępnych danych klastra Redis.",
    },
    analysis: {
      title: "Analiza pamięci",
      runAnalysis: "Uruchom analizę",
      running: "Analizowanie...",
      typeDistribution: "Rozkład typów",
      prefixMemory: "Pamięć wg prefiksu",
      topKeysByMemory: "Największe klucze wg pamięci",
      expirationOverview: "Wygasanie kluczy",
      memoryBreakdown: "Podział pamięci",
      keysScanned: "Przeskanowane klucze",
      totalMemory: "Całkowita pamięć",
      rssMemory: "Pamięć RSS",
      peakMemory: "Szczytowa pamięć",
      luaMemory: "Pamięć Lua",
      overheadMemory: "Narzut",
      datasetMemory: "Zbiór danych",
      fragmentation: "Fragmentacja",
      allocator: "Alokator",
      withTTL: "Z TTL",
      persistent: "Trwałe",
      avgTTL: "Średni TTL",
      prefix: "Prefiks",
      keyCount: "Liczba kluczy",
      memoryUsage: "Użycie pamięci",
      noPrefix: "(bez prefiksu)",
      topN: "Top N",
      maxScanKeys: "Maks. przeskanowanych kluczy",
      type: "Typ",
      noData: "Brak danych. Kliknij Uruchom analizę, aby rozpocząć.",
      exportAll: "Eksportuj wszystko",
      memoryDoctor: "Memory Doctor",
      doctorNoData: "Kliknij Odśwież, aby uruchomić diagnostykę Memory Doctor.",
    },
    acl: {
      title: "Użytkownicy ACL",
      loadUsers: "Załaduj użytkowników",
      loading: "Ładowanie...",
      username: "Nazwa użytkownika",
      status: "Stan",
      enabled: "Włączone",
      disabled: "Wyłączony",
      commands: "Polecenia",
      commandsHint: "np. +@all or +@read -@dangerous",
      keys: "Kluczowe wzorce Redis",
      keysHint: "np. ~* or ~user:*",
      channels: "Kanały Pub/Sub",
      channelsHint: "np. &* or &notifications:*",
      password: "Hasło",
      noPassword: "Brak hasła (nopass)",
      passwordHint: "Pozostaw puste, aby zachować aktualne hasło",
      currentUser: "Aktualny",
      createUser: "Utwórz użytkownika",
      editUser: "Edytuj użytkownika",
      deleteUser: "Usuń",
      confirmDelete: "Czy na pewno chcesz usunąć użytkownika ACL?",
      userDeleted: "Użytkownik ACL został usunięty.",
      userSaved: "Użytkownik ACL został zapisany.",
      cannotDeleteDefault: "Nie można usunąć domyślnego użytkownika.",
      cannotDeleteSelf: "Nie można usunąć aktualnie podłączonego użytkownika.",
      noUsers: "ACL wymaga Redis 6.0+.",
      groupCommon: "Ogólne",
      groupDataTypes: "Typy danych",
      groupOperations: "Operacje",
      rules: "Reguły",
      rulesHint: "Tokeny oddzielone spacjami (na przykład on >password +@all ~* &*)",
      defaultUserWarning: "Uwaga: Modyfikacja domyślnego użytkownika może zablokować wszystkie połączenia. Jeśli tak się stanie, będziesz musiał ponownie uruchomić Redis lub użyć redis-cli, aby przywrócić dostęp.",
    },
    overview: {
      noConnected: "Brak połączenia z Redis.",
      overviewClients: "Wyświetl połączonych według liczby klientów",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "1 klient";
        }
        return `${opt.length} klientów`;
      }
    },
    key: {
      label: {
        key: "Klucz",
        encoding: "Kodowanie",
        compression: "Kompresja",
        aiRateLimited: "Osiągnięto limit zapytań AI. Spróbuj ponownie później lub użyj własnego klucza API Groq w Ustawieniach.",
        aiError: "Zapytanie AI nie powiodło się",
        length: "Rozmiar",
        ttl: "TTL",
        ttlTitle: "Time To Live",
        type: "Typ",
        ttlNotExpire: "nie wygasa",
        lengthString: "bajtów",
        lengthItem: "elementów",
        actions: "Akcje"
      },
      list: {
        table: {
          index: "Indeks",
          value: "Wartość"
        }
      },
      hash: {
        table: {
          hashkey: "Klucz hash",
          value: "Wartość"
        }
      },
      set: {
        table: {
          value: "Element"
        }
      },
      zset: {
        table: {
          value: "Element",
          score: "Wynik"
        }
      },
      stream: {
        table: {
          timestamp: "ID znacznika czasu",
          field: "Pole",
          value: "Wartość"
        }
      },
      timeseries: {
        chart: "Wykres",
        info: "Informacje",
        addPoint: "Dodaj punkt danych",
        from: "Od (ms lub -)",
        to: "Do (ms lub +)",
        aggregation: "Agregacja",
        timeBucket: "Przedział (ms)",
        none: "Brak",
        dataPoints: "punkty danych",
        labels: "Etykiety",
        rules: "Reguły",
        retention: "Retencja",
        timestamp: "Znacznik czasu",
        value: "Wartość",
        retentionHint: "0 = bez wygaśnięcia, lub milisekundy",
        duplicatePolicy: "Polityka duplikatów",
        labelsHint: "klucz1 wartość1 klucz2 wartość2",
        timestampHint: "'*' oznacza automatyczne generowanie, lub znacznik czasu w milisekundach",
        editAllHint: "Jeden punkt danych na linię: znacznik_czasu wartość (znacznik_czasu może być * dla auto)",
        autoSpread: "Automatyczny interwał rozrzutu *",
        formula: "Formuła",
        formulaLinear: "Liniowa",
        formulaRandom: "Losowa",
        formulaSawtooth: "Piłokształtna",
        formulaPoints: "Punkty",
        formulaAmplitude: "Amplituda",
        formulaOffset: "Przesunięcie",
        generate: "Generuj",
        exportChart: "Eksportuj PNG",
        overlay: "Nakładanie kluczy",
        overlayHint: "Klucze oddzielone przecinkami",
        mrangeFilter: "Filtr etykiet",
        bulkMode: "Generowanie masowe",
        mrangeHint: "np. sensor=temp"
      },
      probabilistic: {
        info: "Informacje",
        addItem: "Dodaj element",
        checkItem: "Sprawdź element",
        item: "Element",
        exists: "Istnieje",
        doesNotExist: "Nie istnieje",
        topkList: "Najczęstsze elementy",
        topkCount: "Liczba",
        queryCount: "Liczba zapytań",
        queryResult: "Wynik zapytania",
        addedSuccessfully: "Element dodany pomyślnie",
        deletedSuccessfully: "Element usunięty pomyślnie",
        quantile: "Kwantyl",
        quantileResult: "Wynik",
        noItems: "Brak elementów do wyświetlenia",
        resetConfirm: "Zresetować wszystkie dane w tym T-Digest?"
      },
      vectorset: {
        info: "Informacje",
        elements: "Elementy",
        similarity: "Wyszukiwanie podobieństwa",
        searchByElement: "Szukaj po elemencie",
        searchByVector: "Szukaj po wektorze",
        vectorValues: "Wartości wektora",
        element: "Element",
        score: "Wynik",
        count: "Liczba",
        addElement: "Dodaj element",
        attributes: "Atrybuty",
        noAttributes: "Brak atrybutów",
        dimensions: "Wymiary",
        removeConfirm: "Usunąć ten element z VectorSet?",
        noElements: "Brak elementów",
        filter: "Filtr",
        searchComplete: "Wyszukiwanie zakończone",
      }
    },
    treeControls: {
      settings: "Ustawienia drzewa",
      expandAll: "Rozwiń wszystko",
      collapseAll: "Zwiń wszystko",
      level: "Poziom",
      search: {
        search: "Szukaj w kluczach",
        clear: "Wyczyść bieżące wyszukiwanie",
        placeholderClient: "Szukaj po stronie klienta",
        placeholderServer: "Szukaj po stronie serwera",
        info: (opts) => "Wyszukiwanie po stronie klienta oznacza dopasowanie tekstu w polu wyszukiwania. Wyszukiwanie po stronie serwera oznacza wyszukiwanie we wzorcach kluczy jako *{szukany-tekst}*. Dla dużych zbiorów lepiej jest używać wyszukiwania po stronie serwera. Dla mniejszych zbiorów lepiej jest używać wyszukiwania po stronie klienta." + ` Jeśli liczba kluczy przekracza ${opts?.maxLightKeysCount ?? 110000}, możesz wyszukiwać tylko po stronie serwera.`,
        largeSetInfo: "W dużym zbiorze wyszukiwanie po stronie klienta jest wyłączone, więc obecnie możliwe jest tylko wyszukiwanie po stronie serwera.",
        infoDetails: "Aby dowiedzieć się, jak działa wyszukiwanie, sprawdź ustawienia"
      },
      pager: {
        next: "Następna",
        prev: "Poprzednia",
        first: "Pierwsza",
        last: "Ostatnia"
      }
    }
  },
  time: {
    years: "lat",
    months: "miesięcy",
    days: "dni",
    year: "rok",
    month: "miesiąc",
    day: "dzień",
    second: "sekunda",
    seconds: "sekundy",
    minute: "minuta",
    minutes: "minuty",
    hour: "godzina",
    hours: "godziny"
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
    title: "Asystent sieci AI",
    description: "Odkryj naszego bezpłatnego asystenta sieci AI na network.corifeus.com — analizuj domeny, adresy IP, rekordy DNS, certyfikaty SSL, bezpieczeństwo poczty e-mail i infrastrukturę sieciową. Napędzany przez AI, aby zapewniać natychmiastowe, kompleksowe wyniki.",
    disclaimer: "Ta promocja jest wyświetlana tylko na stronie demo i nie pojawi się we wdrożeniach Docker, Electron ani aplikacji webowej.",
    toastMessage: "Wypróbuj naszego bezpłatnego asystenta sieci AI na network.corifeus.com — analizuj domeny, DNS, SSL i nie tylko!",
    visit: "Odwiedź network.corifeus.com",
  }
};
module.exports = strings;
