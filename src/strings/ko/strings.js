const strings = {
  error: {
    server_error: "서버 오류입니다. 다시 시도해 주세요."
  },
  title: {
    donate: "기부",
    jsonRecursive: "모든 잎 확장",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "왼쪽 하단 메뉴에서 Redis 연결을 선택하여 연결할 수 있습니다.",
    statistics: "통계",
    error: "오류",
    connectingRedis: "Redis에 연결하는 중...",
    socketioConnectError: "Socket.IO 오류",
    db: "DB",
    server: "서버",
    clients: "클라이언트",
    memory: "메모리",
    persistence: "지속성",
    stats: "통계",
    replication: "복제",
    cpu: "CPU",
    cluster: "Cluster",
    modules: "모듈",
    errorstats: "오류 통계",
    commandstats: "명령 통계",
    latencystats: "지연 통계",
    keysizes: "키 크기",
    threads: "스레드",
  },
  confirm: {
    dropIndex: "이 인덱스를 삭제하시겠습니까?",
    uploadBuffer: "이 바이너��� 데이터를 업로드하시겠습니까?",
    uploadBufferDone: "바이너리 데이터가 업로드되었습니다.",
    uploadBufferDoneAndSave: "바이너리 데이터가 서버에 업로드되어 저장됩니다.",
    title: "확인",
    alert: "경고",
    info: "정보",
    deleteListItem: "이 목록 항목을 삭제하시겠습니까?",
    deleteHashKey: "이 해시 키 항목을 삭제하시겠습니까?",
    deleteStreamTimestamp: "이 스트림 타임스탬프를 삭제하시겠습니까?",
    deleteSetMember: "이 세트 구성원을 삭제하시겠습니까?",
    deleteZSetMember: "이 정렬된 집합 구성원을 삭제하시겠습니까?",
    deleteConnection: "확인",
    deleteConnectionText: "이 Redis 연결을 삭제하시겠습니까?",
    deleteNode: "이 Redis 노드를 삭제하시겠습니까?",
    delete: "삭제하시겠습니까?",
    deleteAllKeys: opts => {
      return `이 트리와 모든 키를 삭제합니다(${opts.key})?`;
    },
    deleteSearchKeys: opts => {
      return `"${opts.pattern}"와 일치하는 모든 키를 삭제하시겠습니까? ${opts.count}개의 키가 발견되었습니다.`;
    },
    socketioConnectError: "Socket.IO는 서버에 연결할 수 없습니다. 다시 로드하여 연결 오류를 직접 해결할 수 있습니다. 클라이언트는 자체적으로 문제를 해결하는 방법을 모릅니다.",
    socketioAuthRequired: "Socket.IO 인증이 필요합니다. HTTP Basic Auth(사용자 이름/비밀번호)로 인증하고 다시 로드하세요.",
    deleteKey: "이 키를 삭제하시겠습니까?",
    rename: {
      title: "이 키의 이름을 바꾸시겠습니까?",
      textContent: "이 작업을 수행하면 키 이름이 영구적으로 변경됩니다.",
      placeholder: "Redis 키(필수)"
    },
    ttl: {
      title: "이 키의 TTL를 변경하시겠습니까?",
      textContent: "TTL를 변경하면 이 키의 수명이 업데이트됩니다. 이 키를 영원히 보관하려면 비워 두세요.",
      placeholder: "Redis 키의 TTL(정수 또는 비어 있음)",
      placeholderPlaceholder: "비어 있다는 것은 그것이 영원히 지속된다는 것을 의미합니다. 그렇지 않으면 정수를 입력하십시오.",
      convertTextToTime: "텍스트를 시간으로 변환",
      convertTextToTimePlaceholder: "예. 1d는 86400이 됩니다."
    },
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
    copy: "복사",
    downloadBuffer: "바이너리 다운로드",
    setBuffer: "바이너리 업로드",
    exportKeys: "키 내보내기",
    exportAllKeys: (opts) => `전체 ${opts.count} 키 내보내기`,
    exportSearchResults: (opts) => `${opts.count} 결과 내보내기`,
    deleteAllKeysMenu: (opts) => `모두 삭제 ${opts.count}`,
    importKeys: "키 가져오기",
    deleteSearchKeys: (opts) => `일치하는 ${opts.count}개 키 삭제`,
    saveWithFormatJson: "형식으로 저장",
    formatJson: "JSON 형식",
    wrap: "랩",
    unwrap: "포장 풀기",
    downloadJson: "JSON 다운로드",
    pubsubMonitor: "PubSub",
    pulse: "Pulse",
    profiler: "Profiler",
    memoryAnalysis: "Analysis",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "언어",
    ok: "알았어",
    addKey: "이 키에 추가",
    addKeyRoot: "루트 키 추가",
    reloadKey: "키 새로고침",
    reload: "새로고침",
    close: "닫기",
    commands: "명령",
    view: "보기",
    statistics: "통계",
    refresh: "새로고침",
    pause: "일시정지",
    resume: "재개",
    clear: "지우기",
    rename: "이름 바꾸기",
    main: "데이터베이스",
    cancel: "취소",
    theme: "테마",
    github: "GitHub",
    githubRepo: "저장소",
    githubRelease: "릴리스",
    githubChangelog: "변경 내역",
    info: "Info",
    settings: "설정",
    connect: "연결하다",
    disconnect: "연결 끊기",
    overview: "개요",
    console: "콘솔",
    noConnections: "연결이 없습니다. 설정 메뉴에서 연결을 추가하세요.",
    noConnectionsInSettings: "연결이 없습니다. 위에서 새 연결을 추가할 수 있습니다.",
    connectionAdd: "새로운 연결",
    addGroup: "그룹 추가",
    extend: "연장",
    collapse: "접기",
    add: "추가",
    edit: "편집",
    save: "저장",
    ttl: "TTL 설정",
    delete: "삭제",
    remove: "제거",
    sure: "물론이죠",
    testConnection: "테스트 연결",
    getKey: "Redis 키 및 관련 데이터 로드 중...",
    jsonViewShow: "JSON 표시",
    jsonViewEditor: "JSON 편집",
    quickConsole: "빠른 콘솔",
  },
  label: {
    id: {
      nodeId: "노드 ID",
      id: "연결 ID",
      info: "sshPassword, sshPrivateKey, 비밀번호, tlsCrt, tlsKey, tlsCa 속성을 변경하지 않으려면 해당 속성에 연결 ID를 입력하여 속성 값을 그대로 유지하세요. 노드 비밀번호에 동일한 논리를 적용하려면 노드 비밀번호에 노드 ID를 입력하세요."
    },
    secureFeature: "P3X로 시작하는 값이 동일하게 보이면 이는 보안 기능입니다. 설정을 변경하려면 해당 설정을 ��어 있거나 다른 것으로 바꾸면 저장됩니다. 설정을 변경하지 않으면 설정이 서버에 있는 그대로 유지됩니다.",
    aiTranslating: "번역 중...",
    aiSettings: "AI 설정",
    aiGroqApiKey: "Groq API 키",
    aiGroqApiKeyInfo: "선택사항. 더 나은 성능을 위한 자체 Groq API 키. 무료 키 받기",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "AI API 키 저장됨",
    aiGroqApiKeyInvalid: "유효하지 않은 Groq API 키",
    aiGroqApiKeyNotSet: "미설정 (서버 기본값)",
    aiEnabled: "AI 활성화",
    aiEnabledYes: "예",
    aiEnabledNo: "아니오",
    aiRouteViaNetwork: "network.corifeus.com 경유",
    aiRoutingDirect: "자체 API 키를 사용하여 Groq에 직접 쿼리합니다. network.corifeus.com을 거치지 않습니다.",
    aiRoutingNetwork: "AI 쿼리는 network.corifeus.com을 통해 라우팅됩니다. 무료 Groq API 키가 있으면 이 스위치를 끄고 직접 사용할 수 있습니다.",
    ssh: {
      on: "SSH 켜짐",
      off: "SSH 꺼짐",
      sshHost: "SSH 호스트",
      sshPort: "SSH 포트",
      sshUsername: "SSH 사용자 이름",
      sshPassword: "SSH 비밀번호",
      sshPrivateKey: "SSH 개인 키"
    },
    isBuffer: opts => `[객체 ArrayBuffer]는 값이 이진 데이터이거나 값이 다음보다 크다는 것을 의미합니다. ${opts.maxValueAsBuffer}`,
    streamValue: `스트림 필드와 값은 하나의 라이너입니다. 예: 필드1 값1 "필드 2" "값 2"`,
    streamTimestampId: `'*'는 자동 생성 또는 <millisecondsTime>-<sequenceNumber>로 지정됨을 의미합니다.`,
    unableToLoadKey: ({
      key
    }) => {
      return `이 키를 로드할 수 없습니다: ${key}. 가능합니다. 키가 삭제되었습니다. 정확한 오류는 콘솔에 ���습니다.`;
    },
    bigJson: "이 JSON 개체는 10kb를 초과하므로 일부 기능은 렌더링 속도가 느려질 수 있으므로 수행 중인 작업을 알고 있는지 확인하세요.",
    addNode: "노드 추가",
    validateJson: "JSON 검증",
    reducedFunction: `기능 감소`,
    tooManyKeys: opts => {
      return `전체 최대 기능에 대해 허용되는 키의 총계는 다음과 같습니다. ${opts.maxLightKeysCount} 카운트. 이 데이터베이스에는 허용된 총 키가 초과되었습니다. ${opts.count}. 키 정렬 및 추가 팬��� 트리 정보가 비활성화됩니다. 검색은 클라이언트 검색 대신 서버에서만 발생합니다.`;
    },
    redisCommandNotFound: "일치하는 Redis 명령이 없습니다...",
    treeKeyStore: `정렬(자연 비교)은 클라이언트(일명 브라우저)에서 실행됩니다. 즉, 10,000개가 넘는 키와 같은 대규모 세트에 대한 페널티가 있으며 페이지 렌더링에 약간의 시간이 추가될 수 있습니다. Redis에는 이와 같은 키 정렬이 없습니다.`,
    socketIoTimeout: options => {
      return `이 요청에 대한 Socket.IO 시간이 초과되었습니다(최대 ${options.timeout / 1000} 초) ...`;
    },
    resizerInfo: options => {
      return `왼쪽 또는 오른쪽 패널의 최소 너비는 다음과 같습니다. ${options.width}px`;
    },
    jsonViewNotParsable: "이 값은 JSON 구문 분��이 불가능합니다.  ",
    ttlTitle: "초 단위로 TTL 설정",
    passwordSecure: "비밀번호는 비어 있을 수 있지만 여전히 문자가 표시됩니다. 이는 보안 기능입니다.",
    tlsWithoutCert: "추가 인증서 없이 TLS 활성화",
    tlsRejectUnauthorized: "승인되지 않은 인증서 거부",
    tlsSecure: "P3X로 시작하는 TLS 구성이 보이거나 모든 TLS 설정이 동일해 보이는 경우 이는 보안 기능입니다. 설정을 변경하려면 해당 설정을 비어 있거나 다른 것으로 바꾸면 저장됩니다. TLS 설정을 변경하지 않으면 설정이 서버에 있는 그대로 유지됩니다.",
    treeSeparatorEmpty: "트리 구분 기호가 비어 있으면 트리에는 중첩 노드가 없고 순수 목록만 있습니다.",
    treeSeparatorEmptyNote: "중첩된 노드가 없고 순수한 목록만 있음",
    welcomeConsole: "Redis 콘솔에 오신 것을 환영합니다.",
    welcomeConsoleInfo: "커서 UP 또는 DOWN 기록이 활성화되었습니다.",
    redisListIndexInfo: "추가하려면 비우고, 표시된 위치에 앞에 추가하거나 저장하려면 -1입니다.",
    console: "콘솔",
    connectiondAdd: "연결 추가",
    connectiondEdit: "연결 수정",
    connectiondView: "연결 보기",
    connections: "연결",
    keysSort: {
      on: "키 정렬 켜짐",
      off: "키 정렬 꺼짐"
    },
    cluster: {
      on: "Cluster 켜짐",
      off: "Cluster 꺼짐"
    },
    sentinel: {
      on: "Sentinel 켜짐",
      off: "Sentinel 꺼짐",
      name: "Sentinel 이름"
    },
    readonly: {
      on: "읽기 전용",
      off: "읽기 전용 꺼짐"
    },
    theme: {
      light: "빛",
      dark: "어둠의 기업",
      darkNeu: "어둠",
      darkoBluo: "다르코 블루오",
      enterprise: "기업",
      redis: "Redis",
      matrix: "매트릭스"
    },
    connected: opts => {
      return `연결됨: ${opts.name}`;
    },
    tree: "나무",
    askAuth: "승인을 요청하세요",
    keyboardShortcuts: "Keyboard Shortcuts",
    about: "About",
    supportedLanguages: "Supported Languages",
    version: "Version",
    redisVersion: "Redis Version",
    modules: "모듈",
    shortcutRefresh: "Refresh",
    shortcutSearch: "Focus Search",
    shortcutNewKey: "New Key",
    shortcutDisconnect: "연결 끊기",
    themeAuto: "Auto (system)",
    shortcutCommandPalette: "Command Palette",
    commandPalette: "Command Palette",
    noResults: "No results",
    redisCommandsReference: "Redis 명령어",
    ungrouped: "그룹 없음",
    grouped: "Grouped",
    connectFirst: "먼저 Redis 서버에 연결하세요",
    searchLanguage: "언어 검색...",
    exportProgress: "키 내보내는 중...",
    importProgress: "키 가져오는 중...",
    importPreview: "미리보기",
    importOverwrite: "덮어쓰기",
    importSkip: "건너뛰기",
    importConflict: "키가 이미 있는 경우:",
    noKeysToExport: "내보낼 키가 없습니다",
    time: "시간",
    type: "유형",
    format: "형식",
    loading: "로딩 중...",
    autoRefresh: "자동",
    exportSearchHint: "현재 검색과 일치하는 키만 내보내기",
    importSearchHint: "가져오기는 검색 결과뿐만 아니라 전체 데이터베이스에 적용됩니다",
    deleteSearchHint: "현재 검색과 일치하는 모든 키 삭제",
    deletingSearchKeys: "일치하는 키 삭제 중...",
    importNoKeys: "파일에서 키를 찾을 수 없습니다",
  },
  status: {
    dataCopied: "데이터가 클립보드에 있습니다.",
    exportDone: "내보내기 완료",
    deletedSearchKeys: (opts) => `${opts.count}개 키 삭제됨`,
    indexCreated: "인덱스 생성됨",
    indexDropped: "인덱스 삭제됨",
    importDone: (opts) => `가져오기 완료: ${opts.created} 생성, ${opts.skipped} 건너뜀, ${opts.errors} 오류`,
    nodeRemoved: "노드가 제거되었습니다.",
    keyIsNotExisting: "이 키는 삭제되었거나 만료되었을 수 있습니다.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "열쇠 없음";
      } else if (opts.keyCount === 1) {
        return "키 1개";
      } else {
        return `${opts.keyCount} 열쇠`;
      }
    },
    treeExpandAll: "모든 나무 잎을 확장하십시오. 이 작업은 비용이 많이 들고 시간이 걸릴 수 있습니다.",
    noRedisKeys: "이 데이터베이스에는 키가 없습니다.",
    redisConnected: "Redis 연결 성공",
    reloadingDataInfo: "Redis 데이터 정보를 다시 로드하는 중",
    added: "추가됨",
    saved: "업데이트됨",
    cancelled: "취소됨",
    deleted: "삭제됨",
    savedRedis: "Redis 데이터가 저장되었습니다",
    redisDisconnected: opts => {
      return `현재 연결에 오류가 있습니다: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `db 인덱스는 다음으로 설정됩니다. ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `트리 키가 삭제되었습니다(${opts.key}).`;
    },
    deletedKey: opts => {
      return `키가 삭제되었습니다(${opts.key}).`;
    },
    renamedKey: "이 키의 이름이 변경되었습니다.",
    ttlChanged: "이 키의 TTL가 변경되었습니다.",
    notInteger: "이 입력은 정수가 아닙니다.",
    persisted: "이 키는 영원히 유지됩니다.",
    set: "���가 설정/추가되었습니다."
  },
  code: {
    "delete-connection": "이 연결이 삭제되어 이 Redis 인스턴스에 대한 연결이 끊어졌습니다.",
    "save-connection": "이 연결이 변경되어 이 Redis 인스턴스에 대한 연결이 끊어졌습니다. 다시 연결하실 수 있습니다.",
    "readonly-connections": "연결 추가/저장/삭제는 읽기 전용입니다!",
    "readonly-connection-mode": "이 연결은 읽기 전용 모드입니다!",
    "list-out-of-bounds": "이 목록 색인은 범위를 벗어났습니다.",
    "invalid-json-value": "값이 유효한 JSON가 아닙니다.",
    "http_auth_required": "승인 필요: HTTP Basic Auth로 인증하고 다시 로드하세요.",
    "auto-connection-failed": "이로 인해 연결이 제거되고 자동 연결이 실패했을 수도 있습니다.",
    invalid_console_command: "이 명령은 GUI를 통해 작동하지 않습니다."
  },
  form: {
    error: {
      required: "필수",
      port: "포트는 1-65535 사이입니다.",
      invalid: "양식이 잘못되었습니다."
    },
    connection: {
      label: {
        name: "이름",
        group: "Group",
        host: "호스트 이름",
        port: "항구",
        password: "비밀번호",
        username: "사용자 이름"
      }
    },
    treeSettings: {
      maxValueDisplay: "최대값 표시 문자열 길이",
      maxValueDisplayInfo: "0으로 설정하면 전체 값이 표시됩니다. 0보다 크면 이 길이로 자릅니다. -1인 경우: 문자열의 경우 편집할 때까지 값을 숨깁니다. 다른 유형의 경우 전체 콘텐츠를 표시하세요.",
      maxKeys: "최대 키 수",
      maxKeysInfo: "GUI가 충돌하지 않도록 최대 키 수를 제한합니다.",
      keyCount: () => {
        return `키 수: ${p3xr.state.keysRaw.length}`;
      },
      label: {
        animation: "애니메이션 사용",
        noAnimation: "애니메이션 없음",
        jsonFormatTwoSpace: "공백 2개로 JSON 형식을 지정하세요.",
        jsonFormatFourSpace: "공백 4개로 JSON 형식을 지정하세요.",
        formName: "Redis 설정",
        searchModeClient: "클라이언트 검색 모드",
        searchModeServer: "서버 검색 모드",
        searchModeStartsWith: "모드로 시작으로 검색",
        searchModeIncludes: "검색 포함 모드"
      },
      field: {
        treeSeparator: "트리 구분 기호",
        treeSeparatorSelector: "트리 구분자 선택기",
        page: "트리 페이징 수",
        keyPageCount: "키 페이징 횟수",
        keysSort: "키 정렬",
        searchMode: "검색 모드",
        searchModeStartsWith: "검색 시작 / 포함"
      },
      error: {
        keyPageCount: "주요 페이지 수는 5~100 사이의 정수여야 합니다.",
        page: "페이지 수는 10 - 5000 사이의 정수여야 합니다.",
        maxValueDisplay: "최대 표시 값은 -1에서 32768 사이의 정수여야 합니다.",
        maxKeys: "최대 키 개수 값은 100에서 100000 사이의 정수여야 합니다."
      }
    },
    key: {
      label: {
        formName: {
          add: "새로운 Redis 키 추가",
          edit: "Redis 키 편집",
          append: "기존 Redis 키에 추가"
        }
      },
      field: {
        streamTimestamp: "타임스탬프",
        key: "열쇠",
        type: "유형",
        index: "색인",
        hashKey: "해시 키",
        score: "점수",
        value: "가치"
      },
      error: {
        streamTimestamp: "Redis 형식 또는 * 형식의 타임스탬프가 필요합니다.",
        key: "키는 1자 이상입니다.",
        hashKey: "해시 테이블 키는 1자 이상입니다.",
        score: "정렬된 세트 스코어가 필요합니다.",
        value: "값은 필수입니다."
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
      title: "검색",
      index: "인덱스",
      query: "쿼리",
      results: "결과",
      noIndex: "인덱스 없음",
      createIndex: "인덱스 생성",
      dropIndex: "인덱스 삭제",
      indexInfo: "인덱스 정보",
      indexName: "인덱스 이름",
      prefix: "키 접두사 (선택)",
      fieldName: "필드 이름",
    },
    monitor: {
      title: "모니터링",
      memory: "메모리",
      opsPerSec: "초당 작업",
      clients: "클라이언트",
      blocked: "차단됨",
      hitsMisses: "적중률",
      networkIo: "네트워크 I/O",
      slowLog: "슬로우 로그",
      totalCommands: "전체",
      expired: "만료됨",
      evicted: "제거됨",
      clientList: "클라이언트 목록",
      topKeys: "메모리 기준 상위 키",
      killClient: "클라이언트 종료",
      clientKilled: "클라이언트가 종료되었습니다",
      confirmKillClient: "이 클라이언트를 종료하시겠습니까?",
      noKeys: "키 없음",
      rss: "RSS",
      peak: "최대",
      fragmentation: "단편화",
      hitsAndMisses: "적중 / 미스",
      noClients: "클라이언트 없음",
    },
    analysis: {
      title: "메모리 분석",
      runAnalysis: "분석 실행",
      running: "분석 중...",
      typeDistribution: "타입 분포",
      prefixMemory: "접두사별 메모리",
      topKeysByMemory: "메모리별 상위 키",
      expirationOverview: "키 만료",
      memoryBreakdown: "메모리 분석",
      keysScanned: "스캔된 키",
      totalMemory: "전체 메모리",
      rssMemory: "RSS 메모리",
      peakMemory: "최대 메모리",
      luaMemory: "Lua 메모리",
      overheadMemory: "오버헤드",
      datasetMemory: "데이터셋",
      fragmentation: "단편화",
      allocator: "할당자",
      withTTL: "TTL 있음",
      persistent: "영구",
      avgTTL: "평균 TTL",
      prefix: "접두사",
      keyCount: "키 수",
      memoryUsage: "메모리 사용량",
      noPrefix: "(접두사 없음)",
      topN: "Top N",
      maxScanKeys: "최대 스캔 키 수",
      type: "타입",
      noData: "데이터 없음. 분석 실행을 클릭하여 시작하세요.",
      exportAll: "모두 내보내기",
    },

    overview: {
      noConnected: "Redis에 연결되어 있지 않습니다.",
      overviewClients: "클라이언트 수에 따라 연결된 목록을 나열합니다.",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "클라이언트 1명";
        }
        return `${opt.length} 클라이언트`;
      }
    },
    key: {
      label: {
        key: "열쇠",
        encoding: "인코딩",
        length: "크기",
        ttl: "TTL",
        ttlTitle: "생존 시간",
        type: "유형",
        ttlNotExpire: "만료되지 않습니다",
        lengthString: "바이트",
        lengthItem: "아이템",
        actions: "���업"
      },
      list: {
        table: {
          index: "색인",
          value: "가치"
        }
      },
      hash: {
        table: {
          hashkey: "해시키",
          value: "가치"
        }
      },
      set: {
        table: {
          value: "회원"
        }
      },
      zset: {
        table: {
          value: "회원",
          score: "점수"
        }
      },
      stream: {
        table: {
          timestamp: "타임스탬프 ID",
          field: "필드",
          value: "가치"
        }
      },
      timeseries: {
        chart: "차트",
        info: "정보",
        addPoint: "포인트 추가",
        from: "시작 (ms 또는 -)",
        to: "종료 (ms 또는 +)",
        aggregation: "집계",
        timeBucket: "버킷 (ms)",
        none: "없음",
        dataPoints: "데이터 포인트",
        labels: "레이블",
        rules: "규칙",
        retention: "보존",
        timestamp: "타임스탬프",
        value: "값",
        retentionHint: "0 = 만료 없음, 또는 밀리초",
        duplicatePolicy: "중복 정책",
        labelsHint: "키1 값1 키2 값2",
        timestampHint: "'*'는 자동 생성, 또는 밀리초 타임스탬프",
        editAllHint: "한 줄에 하나의 데이터 포인트: 타임스탬프 값 (타임스탬프는 자동의 경우 * 사용)",
        autoSpread: "자동 * 분산 간격",
        formula: "수식",
        formulaLinear: "선형",
        formulaRandom: "랜덤",
        formulaSawtooth: "톱니파",
        formulaPoints: "포인트",
        formulaAmplitude: "진폭",
        formulaOffset: "오프셋",
        generate: "생성",
        exportChart: "PNG 내보내기",
        overlay: "키 오버레이",
        overlayHint: "쉼표로 구분된 키",
        mrangeFilter: "레이블 필터",
        bulkMode: "대량 생성",
        mrangeHint: "예: sensor=temp"
      }
    },
    treeControls: {
      settings: "트리 설정",
      expandAll: "모두 펼치기",
      collapseAll: "모두 접기",
      level: "레벨",
      search: {
        search: "키에서 검색",
        clear: "비워두려면 현재 검색을 삭제하세요.",
        placeholderClient: "클라이언트 측 검색",
        placeholderServer: "검색 서버 측",
        info: "클라이언트 측 검색은 검색 입력의 텍스트와 일치함을 의미합니다. 서버 측 검색은 *{search-text}*와 같은 키 패턴 검색과 유사함을 의미합니다. 대규모 검색 세트의 경우 서버 측 검색을 사용하는 것이 좋습니다. 더 작은 검색 세트의 경우 클라이언트측 검색 모드를 사용하는 것이 좋습니다." + ` 열쇠 개수가 초과된 경우 ${p3xr.settings.maxLightKeysCount}, 서버 측에서만 검색할 수 있습니다.`,
        largeSetInfo: "대규모 세트에서는 클라이언트 측 검색이 비활성화됩니다. 그래서 지금은 서버 측 검색만 가능합니다.",
        infoDetails: "검색이 어떻게 작동하는지 알아보려면 설정을 확인하세요."
      },
      pager: {
        next: "다음",
        prev: "이전",
        first: "첫 번째",
        last: "마지막"
      }
    }
  },
  time: {
    type: "유형",
    format: "형식",
    loading: "로딩 중...",
    years: "년",
    months: "개월",
    days: "일",
    year: "년",
    month: "달",
    day: "일",
    second: "초",
    seconds: "초",
    minute: "분",
    minutes: "분",
    hour: "시간",
    hours: "시간"
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
