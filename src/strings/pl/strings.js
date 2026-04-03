const strings = {
  error: {
    server_error: "Błąd serwera, spróbuj ponownie"
  },
  title: {
    donate: "Wspomóż",
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
    threads: "Wątki",
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
    },
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
    delete: "Usuń",
    remove: "Usuń",
    sure: "Pewne",
    testConnection: "Testuj połączenie",
    getKey: "Ładowanie klucza Redis i powiązanych danych ...",
    jsonViewShow: "Wyświetl JSON",
    jsonViewEditor: "Edytuj JSON",
    quickConsole: "Szybka Konsola",
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
    aiRoutingDirect: "Zapytania kierowane bezpośrednio do Groq z własnym kluczem API, omijając network.corifeus.com.",
    aiRoutingNetwork: "Zapytania AI kierowane przez network.corifeus.com. Jeśli masz własny darmowy klucz API Groq, możesz wyłączyć ten przełącznik.",
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
    tlsWithoutCert: "Włącz TLS bez dodatkowego certyfikatu",
    tlsRejectUnauthorized: "Odrzuć nieautoryzowany certyfikat",
    tlsSecure: "Jeśli widzisz konfigurację TLS zaczynającą się od P3X lub wszystkie ustawienia TLS wyglądają tak samo, jest to funkcja bezpieczeństwa. Aby zmienić ustawienia, zastąp je pustymi lub innymi wartościami, a zostaną zapisane. Jeśli nie zmienisz ustawień TLS, pozostaną takie, jakie są na serwerze.",
    treeSeparatorEmpty: "Jeśli separator drzewa jest pusty, drzewo nie będzie miało zagnieżdżonych węzłów, tylko prostą listę",
    treeSeparatorEmptyNote: "Brak zagnieżdżonych węzłów, tylko prosta lista",
    welcomeConsole: "Witamy w konsoli Redis",
    welcomeConsoleInfo: "Historia za pomocą kursora W GÓRĘ lub W DÓŁ jest włączona",
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
    time: "Czas",
    type: "Typ",
    format: "Format",
    loading: "Ładowanie...",
    autoRefresh: "Auto",
    exportSearchHint: "Eksportowane są tylko klucze pasujące do bieżącego wyszukiwania",
    importSearchHint: "Import dotyczy całej bazy danych, nie tylko wyników wyszukiwania",
    deleteSearchHint: "Usuwa wszystkie klucze pasujące do bieżącego wyszukiwania na serwerze",
    deletingSearchKeys: "Usuwanie pasujących kluczy...",
    importNoKeys: "Nie znaleziono kluczy w pliku",
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
    set: "Klucz został ustawiony/dodany"
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
    invalid_console_command: "To polecenie nie działa przez GUI."
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
        jsonFormatTwoSpace: "Formatuj JSON z 2 spacjami",
        jsonFormatFourSpace: "Formatuj JSON z 4 spacjami",
        formName: "Ustawienia Redis",
        searchModeClient: "Tryb wyszukiwania po stronie klienta",
        searchModeServer: "Tryb wyszukiwania po stronie serwera",
        searchModeStartsWith: "Wyszukiwanie zaczynające się od",
        searchModeIncludes: "Wyszukiwanie zawierające"
      },
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
        value: "Wartość"
      },
      error: {
        streamTimestamp: "Znacznik czasu jest wymagany, w formacie Redis lub jako *",
        key: "Klucz musi mieć co najmniej jeden znak",
        hashKey: "Klucz tabeli hash musi mieć co najmniej jeden znak",
        score: "Wynik zbioru posortowanego jest wymagany",
        value: "Wartość jest wymagana"
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
    type: "Typ",
    format: "Format",
    loading: "Ładowanie...",
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
    timeseries: "Time Series"
  }
};
module.exports = strings;
