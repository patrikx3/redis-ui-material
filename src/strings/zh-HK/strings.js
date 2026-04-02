const strings = {
  error: {
    server_error: "伺服器錯誤，請重試"
  },
  title: {
    donate: "捐贈",
    jsonRecursive: "展開所有葉子",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "您可以從左下方選單中選擇 Redis 連線進行連線。",
    statistics: "統計數據",
    error: "錯誤",
    connectingRedis: "正在連接到 Redis ...",
    socketioConnectError: "Socket.IO 錯誤",
    db: "DB",
    server: "伺服器",
    clients: "客戶",
    memory: "記憶體",
    persistence: "堅持",
    stats: "統計數據",
    replication: "複製",
    cpu: "CPU",
    cluster: "Cluster",
    modules: "模組",
    errorstats: "錯誤統計",
    commandstats: "命令統計",
    latencystats: "延遲統計",
    keysizes: "鍵大小",
    threads: "執行緒",
  },
  confirm: {
    dropIndex: "確定要刪除此索引嗎？",
    uploadBuffer: "您確定上傳此二進位資料嗎？",
    uploadBufferDone: "二進位數據已上傳",
    uploadBufferDoneAndSave: "二進位資料上傳並保存在伺服器上",
    title: "確認",
    alert: "警報",
    info: "資訊",
    deleteListItem: "您確定要刪除該清單項目嗎？",
    deleteHashKey: "您確定刪除該雜湊鍵項嗎？",
    deleteStreamTimestamp: "您確定要刪除該串流時間戳記嗎？",
    deleteSetMember: "您確定要刪除該集合成員嗎？",
    deleteZSetMember: "您確定要刪除這個排序集成員嗎？",
    deleteConnection: "確認",
    deleteConnectionText: "您確定刪除此 Redis 連線嗎？",
    deleteNode: "您確定要刪除這個Redis節點嗎？",
    delete: "刪除？",
    deleteAllKeys: opts => {
      return `刪除這棵樹及其所有鍵（${opts.key}）？`;
    },
    deleteSearchKeys: opts => {
      return `確定要刪除所有符合 "${opts.pattern}" 嘅金鑰嗎？搵到 ${opts.count} 個金鑰。`;
    },
    socketioConnectError: "Socket.IO 無法連接伺服器，您可以重新載入並嘗試自行解決連線錯誤，用戶端不知道如何解決。",
    socketioAuthRequired: "需要Socket.IO授權。請使用 HTTP Basic Auth（使用者名稱/密碼）進行身份驗證並重新載入。",
    deleteKey: "您確定要刪除該密鑰嗎？",
    rename: {
      title: "您確定要重新命名該鍵嗎？",
      textContent: "此操作將永久重命名該密鑰。",
      placeholder: "Redis 金鑰（必要）"
    },
    ttl: {
      title: "您確定要變更此金鑰的 TTL 嗎？",
      textContent: "變更 TTL 會更新此金鑰的生存時間。留空以永久保留此密鑰。",
      placeholder: "Redis 金鑰的 TTL（整數或空）",
      placeholderPlaceholder: "空意味著它永遠存在；否則輸入一個整數。",
      convertTextToTime: "將文字轉換為時間",
      convertTextToTimePlaceholder: "例如。 1d 將是 86400"
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
    copy: "複製",
    downloadBuffer: "下載二進位文件",
    setBuffer: "上傳二進位文件",
    exportKeys: "匯出金鑰",
    exportAllKeys: (opts) => `匯出全部 ${opts.count} 個金鑰`,
    exportSearchResults: (opts) => `匯出 ${opts.count} 個結果`,
    deleteAllKeysMenu: (opts) => `刪除全部 ${opts.count}`,
    importKeys: "匯入金鑰",
    deleteSearchKeys: (opts) => `刪除 ${opts.count} 個符合嘅金鑰`,
    saveWithFormatJson: "以格式儲存",
    formatJson: "格式化Json",
    wrap: "包裹",
    unwrap: "展開",
    downloadJson: "��載JSON",
    pubsubMonitor: "PubSub",
    pulse: "Pulse",
    profiler: "Profiler",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "語言",
    ok: "好的",
    addKey: "新增到此鍵",
    addKeyRoot: "新增根密鑰",
    reloadKey: "重新載入金鑰",
    reload: "重新載入",
    close: "關閉",
    commands: "命令",
    view: "查看",
    statistics: "統計數據",
    refresh: "重新整理",
    pause: "暫停",
    resume: "繼續",
    clear: "清除",
    rename: "重新命名",
    main: "資料庫",
    cancel: "取消",
    theme: "主題",
    github: "GitHub",
    githubRepo: "儲存庫",
    githubRelease: "發布",
    githubChangelog: "變更日誌",
    info: "Info",
    settings: "設定",
    connect: "連接",
    disconnect: "斷開連接",
    overview: "概述",
    console: "主機",
    noConnections: "沒有連接，請在設定選單中新增連接。",
    noConnectionsInSettings: "沒有連接，您可以在上面添加一個新連接。",
    connectionAdd: "新連接",
    addGroup: "添加分組",
    extend: "延伸",
    collapse: "崩潰",
    add: "添加",
    edit: "編輯",
    save: "儲存",
    ttl: "設定 TTL",
    delete: "刪除",
    remove: "刪除",
    sure: "當然可以",
    testConnection: "測試連接",
    getKey: "正在載入 Redis 金鑰和相關資料...",
    jsonViewShow: "顯示 JSON",
    jsonViewEditor: "編輯JSON",
    quickConsole: "快速控制台",
  },
  label: {
    id: {
      nodeId: "節點號",
      id: "連接ID",
      info: "如果您不想變更下列屬性：sshPassword、sshPrivateKey、password、tlsCrt、tlsKey、tlsCa，請在這些屬性中輸入連接 ID 以保持屬性值不變。如果您希望節點密碼具有相同的邏輯，則在節點密碼中輸入節點 ID。"
    },
    secureFeature: "如果您看到以 P3X 開頭的值並且看起來相似，則這是一項安全功能。要更改設置，只需將這些設置替換為空或其他內容即可保存它們。如果您不更改設置，這些設置將保留在伺服器上的原樣。",
    aiTranslating: "翻譯中...",
    aiSettings: "AI 設定",
    aiGroqApiKey: "Groq API 金鑰",
    aiGroqApiKeyInfo: "選填。使用自己嘅 Groq API 金鑰以獲得更好效能。免費取得金鑰",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "AI API 金鑰已儲存",
    aiGroqApiKeyInvalid: "無效的 Groq API 金鑰",
    aiGroqApiKeyNotSet: "未設定（使用伺服器預設）",
    aiEnabled: "AI 已啟用",
    aiEnabledYes: "是",
    aiEnabledNo: "否",
    aiRouteViaNetwork: "透過 network.corifeus.com 路由",
    aiRoutingDirect: "使用您自己的 API 金鑰直接向 Groq 發送查詢，繞過 network.corifeus.com。",
    aiRoutingNetwork: "AI 查詢透過 network.corifeus.com 路由。如果您有自己的免費 Groq API 金鑰，可以關閉此開關直接使用 Groq。",
    ssh: {
      on: "SSH 開啟",
      off: "SSH 關閉",
      sshHost: "SSH 主機",
      sshPort: "SSH 端口",
      sshUsername: "SSH 使用者名",
      sshPassword: "SSH 密碼",
      sshPrivateKey: "SSH 私鑰"
    },
    isBuffer: opts => `[object ArrayBuffer] 表示該值為二進位資料或該值大於${opts.maxValueAsBuffer}`,
    streamValue: `流字段和值是一個單行符。例如：field1 value1“字段2”“值2”`,
    streamTimestampId: `'*'表示自動產生或規格為<millisecondsTime>-<sequenceNumber>`,
    unableToLoadKey: ({
      key
    }) => {
      return `無法載入此密鑰：${key}。可能，該密鑰已被刪除。確切的錯誤在控制台中。`;
    },
    bigJson: "這個 JSON 物件超過 10 kb，因此請確保您知道自己在做什麼，因為某些函數可能會導致渲染速度變慢。",
    addNode: "新增節點",
    validateJson: "驗證 JSON",
    reducedFunction: `功能減少`,
    tooManyKeys: opts => {
      return `對於全部最大功能，允許的按鍵總數為${opts.maxLightKeysCount} 計數。該資料庫總共擁有超過允許的鍵${opts.count}。鍵排序和附加花式樹資訊被停用。搜尋僅發生在伺服器上，而不是客戶端搜尋。`;
    },
    redisCommandNotFound: "未找到 Redis 指令匹配...",
    treeKeyStore: `排序（自然比較）在客戶端（即瀏覽器）上執行，這意味著它會對大型集合（例如超過 10k 個鍵）造成懲罰，它可能會增加頁面渲染的時間。 Redis中沒有key排序，只有這樣。`,
    socketIoTimeout: options => {
      return `Socket.IO 此請求逾時（最大${options.timeout / 1000} 秒）...`;
    },
    resizerInfo: options => {
      return `左或右面板最小寬度為${options.width}像素`;
    },
    jsonViewNotParsable: "該值不可解析 JSON",
    ttlTitle: "以秒為單位設定 TTL",
    passwordSecure: "密碼可能為空，但仍會顯示字符，這是安全功能。",
    tlsWithoutCert: "無需額外憑證即可啟用 TLS",
    tlsRejectUnauthorized: "拒絕未經授權的證書",
    tlsSecure: "如果您看到以 P3X 開頭的 TLS 設定或所有 TLS 設定看起來都相同，則這是一項安全功能。要更改設置，只需將這些設置替換為空或其他內容即可保存它們。如果您不更改 TLS 設置，這些設置將保留在伺服器上的原樣。",
    treeSeparatorEmpty: "如果樹分隔符號為空，則樹將沒有巢狀節點，只有一個純列表",
    treeSeparatorEmptyNote: "沒有巢狀節點，只是一個純列��",
    welcomeConsole: "歡迎來到 Redis 控制台",
    welcomeConsoleInfo: "啟用遊標向上或向下歷史記錄",
    redisListIndexInfo: "為空表示附加，-1 表示新增或儲存到所示位置。",
    console: "主機",
    connectiondAdd: "新增連接",
    connectiondEdit: "編輯連接",
    connectiondView: "查看連接",
    connections: "連接",
    keysSort: {
      on: "键排序开启",
      off: "鑰匙分類"
    },
    cluster: {
      on: "Cluster 開啟",
      off: "Cluster 關閉"
    },
    sentinel: {
      on: "Sentinel 開啟",
      off: "Sentinel 關閉",
      name: "Sentinel 名称"
    },
    readonly: {
      on: "只读开启",
      off: "只讀關閉"
    },
    theme: {
      light: "光",
      dark: "黑暗企业",
      darkNeu: "黑暗",
      darkoBluo: "达科蓝",
      enterprise: "企業",
      redis: "Redis",
      matrix: "矩陣"
    },
    connected: opts => {
      return `已连接： ${opts.name}`;
    },
    tree: "樹",
    askAuth: "請求授權",
    keyboardShortcuts: "Keyboard Shortcuts",
    about: "About",
    supportedLanguages: "Supported Languages",
    version: "Version",
    redisVersion: "Redis Version",
    modules: "模組",
    shortcutRefresh: "Refresh",
    shortcutSearch: "Focus Search",
    shortcutNewKey: "New Key",
    shortcutDisconnect: "斷開連接",
    themeAuto: "Auto (system)",
    shortcutCommandPalette: "Command Palette",
    commandPalette: "Command Palette",
    noResults: "No results",
    redisCommandsReference: "Redis 命令",
    ungrouped: "未分組",
    grouped: "Grouped",
    connectFirst: "請先連接到 Redis 伺服器",
    searchLanguage: "搜尋語言...",
    exportProgress: "正在匯出金鑰...",
    importProgress: "正在匯入金鑰...",
    importPreview: "預覽",
    importOverwrite: "覆蓋",
    importSkip: "跳過",
    importConflict: "如果金鑰已存在：",
    noKeysToExport: "沒有金鑰可匯出",
    time: "時間",
    type: "類型",
    format: "格式",
    loading: "載入中...",
    autoRefresh: "自動",
    exportSearchHint: "僅匯出與當前搜尋匹配的金鑰",
    importSearchHint: "匯入適用於整個資料庫，而不僅僅是搜尋結果",
    deleteSearchHint: "刪除所有符合當前搜尋嘅金鑰",
    deletingSearchKeys: "正在刪除符合嘅金鑰...",
    importNoKeys: "檔案中未找到金鑰",
  },
  status: {
    dataCopied: "資料在剪貼簿中",
    exportDone: "匯出完成",
    deletedSearchKeys: (opts) => `已刪除 ${opts.count} 個金鑰`,
    indexCreated: "索引已建立",
    indexDropped: "索引已刪除",
    importDone: (opts) => `匯入完成：${opts.created} 已建立，${opts.skipped} 已跳過，${opts.errors} 個錯誤`,
    nodeRemoved: "節點已刪除",
    keyIsNotExisting: "該密鑰可能已被刪除或過期。",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "沒有鑰匙";
      } else if (opts.keyCount === 1) {
        return "1把鑰匙";
      } else {
        return `${opts.keyCount} 鍵`;
      }
    },
    treeExpandAll: "展開所有樹葉。此操作可能會很昂貴並且可能需要時間...",
    noRedisKeys: "該資料庫中沒有密鑰。",
    redisConnected: "Redis 連線成功",
    reloadingDataInfo: "正在重新載入Redis資料訊息",
    added: "已新增",
    saved: "已更新",
    cancelled: "取消",
    deleted: "已刪除",
    savedRedis: "Redis 資料已儲存",
    redisDisconnected: opts => {
      return `目前連線有錯誤：${opts.error.message}`;
    },
    dbChanged: opts => {
      return `資料庫索引設定為${opts.db}。 `;
    },
    treeDeleted: opts => {
      return `樹鍵已刪除（${opts.key}）。`;
    },
    deletedKey: opts => {
      return `密鑰已被刪除（${opts.key}）。`;
    },
    renamedKey: "該鍵已重新命名",
    ttlChanged: "該密鑰的 TTL 已更改",
    notInteger: "該輸入不是整數",
    persisted: "該密鑰將永遠保留",
    set: "密鑰已設定/新增"
  },
  code: {
    "delete-connection": "此連線已刪除，因此您與此 Redis 實例的連線已中斷。",
    "save-connection": "此連線已更改，因此您與此 Redis 實例的連線已中斷。您可以重新連線。",
    "readonly-connections": "連接新增/儲存/刪除是唯讀的！",
    "readonly-connection-mode": "此連接是唯讀模式！",
    "list-out-of-bounds": "此列表索引超出範圍",
    "invalid-json-value": "該值無效 JSON。",
    "http_auth_required": "需要授權：請使用HTTP Basic Auth進行身份驗證並重新載入。",
    "auto-connection-failed": "可能是因為這個原因，連線被刪除並且自動連線失敗。",
    invalid_console_command: "該命令無法透過 GUI 運行。"
  },
  form: {
    error: {
      required: "必填",
      port: "連接埠號碼在1-65535之間",
      invalid: "表格無效"
    },
    connection: {
      label: {
        name: "名稱",
        group: "Group",
        host: "主機名稱",
        port: "港口",
        password: "密碼",
        username: "使用者名稱"
      }
    },
    treeSettings: {
      maxValueDisplay: "最大值顯示字串長度",
      maxValueDisplayInfo: "如果設定為 0，則顯示完整值。如果大於 0，則截斷至此長度。如果-1：對於字串，隱藏該值直到編輯；對於其他類型，顯示完整內容。",
      maxKeys: "最大按鍵數",
      maxKeysInfo: "為了讓 GUI 不會崩潰，我們限制了最大按鍵數。",
      keyCount: () => {
        return `鑰匙數量：${p3xr.state.keysRaw.length}`;
      },
      label: {
        animation: "使用動畫",
        noAnimation: "無動畫",
        jsonFormatTwoSpace: "格式為 JSON，含 2 個空格",
        jsonFormatFourSpace: "格式為 JSON，有 4 個空格",
        formName: "Redis 設定",
        searchModeClient: "客戶搜尋模式",
        searchModeServer: "伺服器搜尋模式",
        searchModeStartsWith: "搜尋以模式開頭",
        searchModeIncludes: "搜尋包含模式"
      },
      field: {
        treeSeparator: "樹分隔符",
        treeSeparatorSelector: "樹分隔符號選擇器",
        page: "樹分頁計數",
        keyPageCount: "關鍵尋呼計數",
        keysSort: "對鍵進行排序",
        searchMode: "搜尋模式",
        searchModeStartsWith: "搜尋以 / 開頭"
      },
      error: {
        keyPageCount: "關鍵頁數必須是 5 - 100 之間的整數",
        page: "頁數必須是 10 - 5000 之間的整數",
        maxValueDisplay: "最大顯示值必須是 -1 到 32768 之間的整數",
        maxKeys: "最大鍵計數值必須是 100 到 100000 之間的整數"
      }
    },
    key: {
      label: {
        formName: {
          add: "新增新的 Redis 金鑰",
          edit: "編輯 Redis 金鑰",
          append: "新增至現有的 Redis 金鑰"
        }
      },
      field: {
        streamTimestamp: "時間戳",
        key: "鑰匙",
        type: "類型",
        index: "索引",
        hashKey: "哈希鍵",
        score: "分數",
        value: "價值"
      },
      error: {
        streamTimestamp: "時間戳記是必要的，可以是 Redis 格式或 *",
        key: "關鍵是至少有一個字符",
        hashKey: "哈希表鍵至少為一個字符",
        score: "需要排序後的集合分數",
        value: "該值是必需的"
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
      title: "搜尋",
      index: "索引",
      query: "查詢",
      results: "結果",
      noIndex: "未找到索引",
      createIndex: "建立索引",
      dropIndex: "刪除索引",
      indexInfo: "索引資訊",
      indexName: "索引名稱",
      prefix: "鍵前綴（可選）",
      fieldName: "欄位名稱",
    },
    monitor: {
      title: "監控",
      memory: "記憶體",
      opsPerSec: "操作/秒",
      clients: "用戶端",
      blocked: "已封鎖",
      hitsMisses: "命中率",
      networkIo: "網路 I/O",
      slowLog: "慢查詢日誌",
      totalCommands: "總計",
      expired: "已過期",
      evicted: "已驅逐",
      clientList: "用戶端列表",
      topKeys: "記憶體最大的金鑰",
      killClient: "終止用戶端",
      clientKilled: "用戶端已終止",
      confirmKillClient: "確定要終止此用戶端嗎？",
      noKeys: "沒有金鑰",
      noClients: "沒有用戶端",
    },
    overview: {
      noConnected: "與 Redis 沒有連接。",
      overviewClients: "按客戶端數量列出連接",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "1 名客戶";
        }
        return `${opt.length} 客戶`;
      }
    },
    key: {
      label: {
        key: "鑰匙",
        encoding: "編碼",
        length: "尺寸",
        ttl: "TTL",
        ttlTitle: "生存時間",
        type: "類型",
        ttlNotExpire: "不會過期",
        lengthString: "位元組",
        lengthItem: "專案",
        actions: "行動"
      },
      list: {
        table: {
          index: "索引",
          value: "價值"
        }
      },
      hash: {
        table: {
          hashkey: "哈希鍵",
          value: "價值"
        }
      },
      set: {
        table: {
          value: "會員"
        }
      },
      zset: {
        table: {
          value: "會員",
          score: "分數"
        }
      },
      stream: {
        table: {
          timestamp: "時間戳ID",
          field: "領域",
          value: "價值"
        }
      },
      timeseries: {
        chart: "圖表",
        info: "資訊",
        addPoint: "新增資料點",
        from: "起始 (ms 或 -)",
        to: "結束 (ms 或 +)",
        aggregation: "聚合",
        timeBucket: "桶 (ms)",
        none: "無",
        dataPoints: "資料點",
        labels: "標籤",
        rules: "規則",
        retention: "保留",
        timestamp: "時間戳",
        value: "值",
        retentionHint: "0 = 不過期，或毫秒",
        duplicatePolicy: "重複策略",
        labelsHint: "鍵1 值1 鍵2 值2",
        timestampHint: "'*' 表示自動產生，或毫秒時間戳",
        editAllHint: "每行一個資料點：時間戳 值（時間戳可以用 * 表示自動）",
        autoSpread: "自動 * 分散間隔",
        formula: "公式",
        formulaLinear: "線性",
        formulaRandom: "隨機",
        formulaSawtooth: "鋸齒波",
        formulaPoints: "點數",
        formulaAmplitude: "振幅",
        formulaOffset: "偏移",
        generate: "產生",
        exportChart: "匯出 PNG",
        overlay: "疊加鍵",
        overlayHint: "逗號分隔的鍵",
        mrangeFilter: "標籤篩選器",
        bulkMode: "批量生成",
        mrangeHint: "例如 sensor=temp"
      }
    },
    treeControls: {
      settings: "樹設定",
      expandAll: "全部展開",
      collapseAll: "全部折疊",
      level: "層級",
      search: {
        search: "在鍵中搜尋",
        clear: "清除目前搜尋以設定為空",
        placeholderClient: "搜尋客戶端",
        placeholderServer: "搜尋伺服器端",
        info: "客戶端搜尋意味著它與搜尋輸入中的文字相符。伺服器端搜尋意味著，就像在 *{search-text}* 這樣的鍵模式中進行搜尋。對於大型搜尋集，最好使用伺服器端搜尋。對於較小的搜尋集，最好使用客戶端搜尋模式。" + ` 如果鑰匙數已結束${p3xr.settings.maxLightKeysCount}，只能在伺服器端搜尋。`,
        largeSetInfo: "在大型集合中，停用客戶端搜尋。所以現在只能進行伺服器端搜尋。",
        infoDetails: "要了解搜尋的工作原理，請檢查設置"
      },
      pager: {
        next: "下一步",
        prev: "上一頁",
        first: "第一",
        last: "最後"
      }
    }
  },
  time: {
    type: "類型",
    format: "格式",
    loading: "載入中...",
    years: "年",
    months: "月",
    days: "天",
    year: "年",
    month: "月",
    day: "日",
    second: "秒",
    seconds: "秒",
    minute: "分鐘",
    minutes: "分鐘",
    hour: "小時",
    hours: "小時"
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
