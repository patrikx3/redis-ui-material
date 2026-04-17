const strings = {
  error: {
    server_error: "伺服器錯誤，請重試",
    aiPromptTooLong: "AI 提示過長（最多 4096 個字元）",
  },
  title: {
    donate: "捐贈",
    donateTitle: "支持 P3X Redis UI",
    donateDescription: "P3X Redis UI 是一個免費的開源項目。應用程式、AI 功能、Docker 映像、伺服器和基礎設施的維護成本均來自開發者自掏腰包。如果您覺得這個工具有用，請考慮通過捐款支持其持續開發。每一份貢獻都有助於保持項目的活力和成長。謝謝！",
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
    threads: "執行緒"
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
    invalidCredentials: "無效的用戶名或密碼。",
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
    downloadJson: "下載 JSON",
    pubsubMonitor: "PubSub",
    pulse: "Pulse",
    profiler: "Profiler",
    memoryAnalysis: "Analysis",
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
    logout: "登出",
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
    fieldTtl: "欄位 TTL",
    digest: "摘要",
    delete: "刪除",
    remove: "刪除",
    areYouSure: "你確定嗎？",
    sure: "當然可以",
    testConnection: "測試連接",
    getKey: "正在載入 Redis 金鑰和相關資料...",
    jsonViewShow: "顯示 JSON",
    jsonViewEditor: "編輯JSON",
    quickConsole: "快速控制台",
    moveUp: "上移",
    moveDown: "下移",
  },
  diff: {
    reviewChanges: "\u6aa2\u8996\u8b8a\u66f4",
    inline: "\u884c\u5167",
    sideBySide: "\u4e26\u6392",
    additions: "\u65b0\u589e",
    deletions: "\u522a\u9664",
    unchangedLines: "\u672a\u8b8a\u66f4\u7684\u884c",
    noChanges: "\u672a\u5075\u6e2c\u5230\u8b8a\u66f4",
    before: "\u8b8a\u66f4\u524d",
    after: "\u8b8a\u66f4\u5f8c",
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
    aiRoutingNetwork: "AI 查詢透過 network.corifeus.com 路由。如果您有自己的免費 Groq API 金鑰，可以關閉此開關，無需經過 network.corifeus.com 直接連到 Groq。",
    aiMaxTokens: "AI 最大 Token 數",
    aiMaxTokensInfo: "AI 回應的最大 token 數量。較高的值可產生較長回應，但可能會使用更多 API 額度。",
    consoleDrawer: {
      toggleTooltip: "切換控制台",
      clearTooltip: "清除回捲記錄",
      closeTooltip: "關閉控制台",
      aiSettingsTooltip: "AI 設定",
      modeRedis: "REDIS",
      modeAi: "AI",
      connectionChipNoDb: opts => `${opts.name}`,
      connectionChipWithDb: opts => `${opts.name} · db ${opts.db}`,
      pageChip: opts => `頁面: ${opts.page}`,
      connectingTo: opts => `正在連接到 ${opts.name}…`,
      connectedTo: opts => `已連接到 ${opts.name}（Redis ${opts.version} ${opts.mode}，已載入 ${opts.modules} 個模組）`,
      connectedToNoInfo: opts => `已連接到 ${opts.name}`,
      disconnectedFrom: opts => `已從 ${opts.name} 斷線`,
      notConnected: "未連接。",
      limitedAiOnly: "只限有限 AI 模式，仍可使用一般 Redis 問答。",
      connectHint: "如需即時診斷，請輸入：connect <name>",
      cheatsheetHint: "輸入 ai: help 查看你可以問什麼。",
      needsConnection: "此功能需要有效連接。請先輸入 \"connect <name>\"。",
      aiNeedsConnectionReason: "即時狀態 AI（tool use）只會在已連接 Redis 時提供。",
      verbNeedsConnection: opts => `"${opts.verb}" 需要有效連接，請先輸入 "connect <name>"。`,
      aiLimitedMode: "AI 現在處於有限模式，在連接前只支援一般 Redis 知識問題。",
      welcomeDisconnected: "歡迎。你目前尚未連接到任何 Redis 實例。",
      readyIndicator: "就緒。",
    },
    cheatsheet: {
      title: "AI 速查表 — 我可以問甚麼？",
      subtitle: "點擊任何提示即可貼到主控台，然後按 Enter。",
      searchPlaceholder: "篩選提示…",
      openOfficialDocs: "Redis 指令 ↗",
      openOfficialDocsTooltip: "在 redis.io 開啟官方 Redis 指令參考",
      closeTooltip: "關閉 (Esc)",
      empty: "沒有提示符合你的篩選條件。",
      footerHint: "提示：輸入 \"ai:\" 再加上任何語言的任何內容 — AI 支援 54 種語言，並會在需要時使用即時的 Redis 狀態。",

      // Each group has: name (category label), match (search-filter alias), prompts (array of example strings)
      groups: {
        diagnostics: {
          name: "即時診斷",
          description: "請 AI 透過安全的唯讀工具調查伺服器的即時狀態。",
          prompts: [
            "為甚麼記憶體這麼高？",
            "顯示最慢的 10 條查詢",
            "有哪些客戶端連線中？",
            "maxmemory 策略是甚麼？",
            "最近有沒有鍵被驅逐？",
            "有沒有延遲事件？",
            "伺服器運行了多久？",
            "命中率是多少？",
            "顯示 CPU 使用率",
            "總結鍵空間",
            "每種資料類型使用多少記憶體？",
            "目前有甚麼正在阻塞伺服器？"
          ]
        },
        keys: {
          name: "鍵",
          description: "不用在樹狀結構中點擊就能檢視、搜尋與分析鍵。",
          prompts: [
            "找出所有符合 user:* 的鍵",
            "每個資料庫有多少個鍵？",
            "顯示這個 db 中最大的 hash",
            "找出 TTL 少於 60 秒的鍵",
            "哪些鍵沒有 TTL？",
            "鍵 session:abc 是甚麼類型？",
            "估算 \"session:\" 前綴所使用的記憶體",
            "顯示鍵 user:42 的物件編碼",
            "有沒有鍵快要過期？",
            "哪個命名空間使用最多記憶體？"
          ]
        },
        dataTypes: {
          name: "資料類型",
          description: "用自然語言描述來對每一種 Redis 類型進行建立／讀取／更新。",
          prompts: [
            "建立一個名為 user:1 的 hash，欄位 name=Alice age=30",
            "在 list tasks 加入三個項目",
            "在 set favourites 加入成員",
            "在 sorted set leaderboard 加入帶分數的成員",
            "在 stream events 附加一個事件",
            "取得 stream events 的最後 10 筆紀錄",
            "取得 hash user:1 的所有欄位",
            "取得 set favourites 的成員",
            "從 leaderboard 取得分數前 10 的成員"
          ]
        },
        modules: {
          name: "模組",
          description: "針對已載入的 Redis 模組的查詢（下方分類只會在對應模組存在時顯示）。",
          prompts: []
        },
        json: {
          name: "RedisJSON",
          description: "當 ReJSON 模組載入時可用。",
          prompts: [
            "在 user:42 建立一個 JSON 文件，內容為 { name: \"Alice\", age: 30 }",
            "讀取 user:42 的 name 欄位",
            "將 user:42 的 age 更新為 31",
            "列出所有 JSON 鍵",
            "從 JSON 文件刪除一個欄位",
            "使用 JSONPath 取得巢狀欄位"
          ]
        },
        search: {
          name: "RediSearch",
          description: "當 search 模組載入時可用。",
          prompts: [
            "列出所有全文索引",
            "在索引 idx:products 上以 \"redis\" 進行全文搜尋",
            "建立一個以 hash 為底的索引,欄位 title (TEXT) 與 price (NUMERIC)",
            "取得索引 idx:products 的資訊",
            "刪除索引 idx:products",
            "找出價格介於 10 到 50 之間的文件",
            "撰寫一個結合文字與向量相似度的混合搜尋"
          ]
        },
        timeseries: {
          name: "RedisTimeSeries",
          description: "當 timeseries 模組載入時可用。",
          prompts: [
            "列出所有 timeseries 鍵",
            "在 temp:room1 加入一個資料點",
            "取得 temp:room1 從昨天到現在的範圍",
            "依標籤 sensor=temp 取得多重範圍",
            "為 temp:room1 產生 100 個正弦波資料點",
            "顯示 temp:room1 的保留期與標籤"
          ]
        },
        bloom: {
          name: "RedisBloom (Bloom / Cuckoo / Top-K / CMS / T-Digest)",
          description: "當 bf 模組載入時可用。",
          prompts: [
            "檢查項目 foo 是否存在於 bloom filter spam:ips 中",
            "將項目加入 bloom filter spam:ips",
            "建立一個名為 popular 的 top-K,K=10",
            "對鍵 /home 查詢 count-min sketch traffic",
            "將數值加入 t-digest 並取得第 95 百分位數",
            "顯示 bloom filter spam:ips 的資訊"
          ]
        },
        vectorSet: {
          name: "VectorSet (Redis 8+)",
          description: "當偵測到 Redis 8+ 時可用（原生 VECTORSET 類型）。",
          prompts: [
            "在 embeddings 加入一個向量",
            "找出與查詢向量最相似的 10 個向量",
            "顯示 vectorset embeddings 的維度與數量",
            "從 vectorset embeddings 刪除一個元素",
            "使用 VSIM 依元素名稱搜尋"
          ]
        },
        redis8: {
          name: "Redis 8+ 功能",
          description: "當偵測到 Redis 8+ 時顯示。",
          prompts: [
            "使用 HEXPIRE 設定 hash 欄位的 TTL",
            "取得字串值的摘要",
            "執行混合全文 + 向量搜尋 (FT.HYBRID)",
            "使用 MSETEX 為多個鍵設定共用的過期時間",
            "以消費者群組刪除 stream 項目 (XDELEX)",
            "顯示前 10 個 slot 的 cluster slot-stats"
          ]
        },
        scripting: {
          name: "腳本",
          description: "根據自然語言描述產生 Lua / EVAL 腳本。",
          prompts: [
            "撰寫一個原子腳本,只在 Y > 5 時遞增計數器 X",
            "使用 Lua 產生 100 個隨機鍵",
            "將這條 shell pipeline 轉換成單一 EVAL：keys user:* | GET | grep inactive | DEL",
            "為了 cluster 安全,將一個批次操作移植到 Lua",
            "在單一 Lua 呼叫中進行 check-and-set 風格的更新",
            "遍歷一個 hash 並刪除符合特定樣式的欄位"
          ]
        },
        cluster: {
          name: "叢集",
          description: "僅在 cluster 模式下顯示。",
          prompts: [
            "顯示 cluster 資訊",
            "列出 cluster 節點",
            "依鍵數量顯示前 10 個 slot",
            "依記憶體顯示前 10 個 slot",
            "哪個 master 擁有 slot 5000？"
          ]
        },
        acl: {
          name: "ACL (Redis 6+)",
          description: "檢視存取控制的使用者以及目前的連線。",
          prompts: [
            "我目前以哪個身份連線？",
            "列出所有 ACL 使用者",
            "我有哪些權限？",
            "顯示 default 使用者的規則"
          ]
        },
        qna: {
          name: "一般問答",
          description: "詢問 Redis 的知識問題 — 不使用工具,只給答案。",
          prompts: [
            "甚麼是 ZADD？",
            "cluster failover 如何運作？",
            "解釋 SCAN 與 KEYS 的差別",
            "甚麼時候該用 EVAL 而不是多條指令？",
            "Redis 的持久化選項有哪些？",
            "RDB 與 AOF 有甚麼分別？",
            "Redis Sentinel 如何決定新的 master？",
            "解釋 cluster 模式下的 hash tag"
          ]
        },
        translate: {
          name: "自然語言 → Redis 指令",
          description: "用中文（或 54 種語言的任何一種）描述你想做的事,AI 會寫出對應的 Redis 指令。",
          prompts: [
            "刪除鍵 user:42",
            "將鍵 foo 重新命名為 bar",
            "將鍵 session:abc 在 10 秒後過期",
            "將鍵 source 複製到 destination",
            "將計數器 visits 加 5",
            "將鍵 greeting 設為 \"hello\",有效 1 小時",
            "顯示最常被存取的 10 個鍵",
            "刪除所有符合 temp:* 的鍵"
          ]
        }
      }
    },
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
    aclAuthHint: "使用 Redis ACL 使用者名稱和密碼進行驗證。對沒有密碼的預設使用者請留空。",
    tlsWithoutCert: "無需額外憑證即可啟用 TLS",
    tlsRejectUnauthorized: "拒絕未經授權的證書",
    tlsSecure: "如果您看到以 P3X 開頭的 TLS 設定或所有 TLS 設定看起來都相同，則這是一項安全功能。要更改設置，只需將這些設置替換為空或其他內容即可保存它們。如果您不更改 TLS 設置，這些設置將保留在伺服器上的原樣。",
    treeSeparatorEmpty: "如果樹分隔符號為空，則樹將沒有巢狀節點，只有一個純列表",
    treeSeparatorEmptyNote: "沒有巢狀節點，只是一個純列表",
    welcomeConsole: "歡迎來到 Redis 控制台",
    welcomeConsoleInfo: "SHIFT + 啟用遊標向上或向下歷史記錄",
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
    languageAuto: "Auto (system)",
    shortcutCommandPalette: "命令面板",
    commandPalette: "命令面板",
    noResults: "沒有結果",
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
    desktopNotifications: "桌面通知",
    desktopNotificationsEnabled: "啟用桌面通知",
    desktopNotificationsInfo: "當應用程式不在焦點時，接收 Redis 斷線和重新連線的作業系統通知。"
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
    reverted: "\u5df2\u9084\u539f",
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
    set: "密鑰已設定/新增",
    connectionRestored: "連線已恢復",
    socketDisconnected: "已斷開連線",
    socketError: "連線錯誤",
    deletedHashKey: "雜湊鍵已刪除",
    deletedSetMember: "集合成員已刪除",
    deletedListElement: "列表元素已刪除",
    deletedZSetMember: "有序集合成員已刪除",
    deletedStreamTimestamp: "串流條目已刪除",
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
    invalid_console_command: "該命令無法透過 GUI 運行。",
    "AI_DISABLED": "AI 已停用。請在 AI 設定中啟用。",
    "AI_PROMPT_REQUIRED": "需要 AI 提示。",
    "GROQ_API_KEY_READONLY": "Groq API 金鑰為唯讀，無法修改。",
    "blocked_api_access": "您的 Groq API 方案不允許存取此模型。請升級您的 Groq 方案或使用 network.corifeus.com 代理。",
    "rate_limit": "已達到 AI 速率限制。請稍後再試或在設定中使用您自己的 Groq API 金鑰。"
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
      keyCount: (opts) => {
        return `鑰匙數量：${opts?.keyCount ?? 0}`;
      },
      label: {
        animation: "使用動畫",
        noAnimation: "無動畫",
        undoEnabled: "\u5df2\u555f\u7528\u5fa9\u539f",
        undoDisabled: "\u5df2\u505c\u7528\u5fa9\u539f",
        diffEnabled: "\u5132\u5b58\u524d\u986f\u793a diff",
        diffDisabled: "\u5df2\u505c\u7528\u5132\u5b58\u524d diff",
        jsonFormatTwoSpace: "格式為 JSON，含 2 個空格",
        jsonFormatFourSpace: "格式為 JSON，有 4 個空格",
        formName: "Redis 設定",
        searchModeClient: "客戶搜尋模式",
        searchModeServer: "伺服器搜尋模式",
        searchModeStartsWith: "搜尋以模式開頭",
        searchModeIncludes: "搜尋包含模式"
      },
      undoHint: "\u5fa9\u539f\u50c5\u9069\u7528\u65bc string \u548c JSON \u985e\u578b\u7684\u9375",
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
        value: "價值",
        errorRate: "錯誤率",
        capacity: "容量",
        topk: "Top K",
        width: "寬度",
        depth: "深度",
        decay: "衰減",
        compression: "壓縮",
        increment: "增量",
        item: "項目",
        vectorValues: "向量值（以逗號分隔）",
        element: "元素名稱",
      },
      error: {
        streamTimestamp: "時間戳記是必要的，可以是 Redis 格式或 *",
        key: "關鍵是至少有一個字符",
        hashKey: "哈希表鍵至少為一個字符",
        score: "需要排序後的集合分數",
        value: "該值是必需的",
        errorRate: "錯誤率必須介於 0 到 1 之間（例如 0.01）",
        capacity: "容量必須是正整數",
        topk: "Top K 必須是正整數",
        width: "寬度必須是正整數",
        depth: "深度必須是正整數",
        item: "項目是必填的"
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
      hybridMode: "混合搜尋 (FT.HYBRID)",
      vectorField: "向量欄位",
      vectorValues: "向量值",
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
      noSlowQueries: "沒有記錄到慢查詢",
      confirmSlowLogReset: "確定要重設慢查詢日誌嗎？",
      slowLogResetDone: "慢查詢日誌已重設",
      totalCommands: "總計",
      expired: "已過期",
      evicted: "已驅逐",
      clientList: "用戶端列表",
      topKeys: "記憶體最大的金鑰",
      killClient: "終止用戶端",
      clientKilled: "用戶端已終止",
      confirmKillClient: "確定要終止此用戶端嗎？",
      noKeys: "沒有金鑰",
      rss: "RSS",
      peak: "峰值",
      fragmentation: "碎片化",
      hitsAndMisses: "命中 / 未中",
      noClients: "沒有用戶端",
      slotStats: "叢集槽統計",
      serverInfo: "伺服器資訊",
      os: "作業系統",
      port: "網絡端口",
      pid: "行程編號",
      configFile: "設定檔",
      uptime: "正常運作時間",
      keyspace: "Redis 鍵空間",
      keys: "Redis 鍵",
      expires: "過期",
      noKeyspace: "沒有 Redis 鍵",
      persistence: "資料持久化",
      rdbLastSave: "RDB 最後保存",
      rdbStatus: "關係資料庫狀態",
      rdbChanges: "自上次儲存以來的更改",
      aofEnabled: "啟用 AOF",
      aofSize: "AOF 大小",
      replication: "Redis 複製",
      role: "複製角色",
      replicas: "連接的副本",
      masterHost: "主節點主機",
      linkStatus: "複製連結狀態",
      cpu: "中央處理器使用率",
      cpuSys: "系統",
      cpuUser: "使用者",
      modules: "已載入 Redis 模組",
      noModules: "未載入 Redis 模組",
      clusterSlotMap: "叢集槽位對應圖",
      slotRange: "槽位範圍",
      totalSlots: "總槽位數",
      noClusterData: "沒有可用的叢集資料",
    },
    analysis: {
      title: "記憶體分析",
      runAnalysis: "執行分析",
      running: "分析中...",
      typeDistribution: "類型分佈",
      prefixMemory: "按前綴分記憶體",
      topKeysByMemory: "按記憶體排名的金鑰",
      expirationOverview: "金鑰過期",
      memoryBreakdown: "記憶體明細",
      keysScanned: "已掃描金鑰",
      totalMemory: "總記憶體",
      rssMemory: "RSS 記憶體",
      peakMemory: "峰值記憶體",
      luaMemory: "Lua 記憶體",
      overheadMemory: "額外開銷",
      datasetMemory: "數據集",
      fragmentation: "碎片化",
      allocator: "分配器",
      withTTL: "有 TTL",
      persistent: "永久",
      avgTTL: "平均 TTL",
      prefix: "前綴",
      keyCount: "金鑰數量",
      memoryUsage: "記憶體使用量",
      noPrefix: "(無前綴)",
      topN: "Top N",
      maxScanKeys: "最大掃描金鑰數",
      type: "類型",
      noData: "無數據。點擊執行分析開始。",
      exportAll: "匯出全部",
      memoryDoctor: "Memory Doctor",
      doctorNoData: "按一下重新整理以執行 Memory Doctor 診斷。",
    },
    acl: {
      title: "ACL 使用者",
      loadUsers: "載入使用者",
      loading: "載入中...",
      username: "使用者名稱",
      status: "狀態",
      enabled: "已啟用",
      disabled: "已停用",
      commands: "命令",
      commandsHint: "例如，+@all or +@read -@dangerous",
      keys: "Redis 鍵模式",
      keysHint: "例如，~* or ~user:*",
      channels: "Pub/Sub 頻道",
      channelsHint: "例如，&* or &notifications:*",
      password: "密碼",
      noPassword: "無密碼（nopass）",
      passwordHint: "留空以保留目前密碼",
      currentUser: "目前",
      createUser: "建立使用者",
      editUser: "編輯使用者",
      deleteUser: "刪除",
      confirmDelete: "確定要刪除 ACL 使用者嗎",
      userDeleted: "ACL 使用者已刪除",
      userSaved: "ACL 使用者已儲存",
      cannotDeleteDefault: "無法刪除預設使用者",
      cannotDeleteSelf: "無法刪除目前已連線的使用者",
      noUsers: "ACL 需要 Redis 6.0+。",
      groupCommon: "通用",
      groupDataTypes: "資料類型",
      groupOperations: "操作",
      rules: "規則",
      rulesHint: "以空格分隔的權杖（例如 on >password +@all ~* &*）",
      defaultUserWarning: "注意：修改預設使用者可能會鎖定所有連線。如果發生這種情況，您將需要重新啟動 Redis 或使用 redis-cli 來恢復存取。",
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
        compression: "壓縮",
        aiRateLimited: "已達到 AI 請求限制。請稍後再試或在設定中使用您自己的 Groq API 金鑰。",
        aiError: "AI 查詢失敗",
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
      },
      probabilistic: {
        info: "資訊",
        addItem: "新增項目",
        checkItem: "檢查項目",
        item: "項目",
        exists: "存在",
        doesNotExist: "不存在",
        topkList: "熱門項目",
        topkCount: "數量",
        queryCount: "查詢數量",
        queryResult: "查詢結果",
        addedSuccessfully: "項目已成功新增",
        deletedSuccessfully: "項目已成功刪除",
        quantile: "分位數",
        quantileResult: "結果",
        noItems: "沒有項目可顯示",
        resetConfirm: "重置此 T-Digest 中的所有資料？"
      },
      vectorset: {
        info: "資訊",
        elements: "元素",
        similarity: "相似度搜尋",
        searchByElement: "按元素搜尋",
        searchByVector: "按向量搜尋",
        vectorValues: "向量值",
        element: "元素",
        score: "分數",
        count: "數量",
        addElement: "新增元素",
        attributes: "屬性",
        noAttributes: "沒有屬性",
        dimensions: "維度",
        removeConfirm: "從 VectorSet 中移除此元素？",
        noElements: "沒有元素",
        filter: "篩選",
        searchComplete: "搜尋完成",
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
        info: (opts) => "客戶端搜尋意味著它與搜尋輸入中的文字相符。伺服器端搜尋意味著，就像在 *{search-text}* 這樣的鍵模式中進行搜尋。對於大型搜尋集，最好使用伺服器端搜尋。對於較小的搜尋集，最好使用客戶端搜尋模式。" + ` 如果鑰匙數已結束${opts?.maxLightKeysCount ?? 110000}，只能在伺服器端搜尋。`,
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
    timeseries: "Time Series",
    bloom: "Bloom 過濾器",
    cuckoo: "Cuckoo 過濾器",
    topk: "Top-K",
    cms: "Count-Min Sketch",
    tdigest: "T-Digest",
    vectorset: "VectorSet",
  },
  promo: {
    title: "AI 網絡助手",
    description: "歡迎到 network.corifeus.com 體驗我哋免費嘅 AI 網絡助手，分析網域、IP、DNS 記錄、SSL 憑證、電郵安全同網絡基礎設施。由 AI 驅動，即時提供全面結果。",
    disclaimer: "此推廣只會喺示範網站顯示，不會出現在 Docker、Electron 或網頁應用程式部署中。",
    toastMessage: "試用我哋喺 network.corifeus.com 嘅免費 AI 網絡助手，分析網域、DNS、SSL 等等！",
    visit: "前往 network.corifeus.com",
  }
};
module.exports = strings;
