const strings = {
  error: {
    server_error: "サーバーエラー、もう一度お試しください"
  },
  title: {
    donate: "寄付",
    jsonRecursive: "すべてのリーフを展開中",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "左下のメニューからRedis接続を選択してください。",
    statistics: "統計",
    error: "エラー",
    connectingRedis: "Redisに接続中 ...",
    socketioConnectError: "Socket.IO エラー",
    db: "DB",
    server: "サーバー",
    clients: "クライアント",
    memory: "メモリ",
    persistence: "永続化",
    stats: "統計",
    replication: "レプリケーション",
    cpu: "CPU",
    cluster: "クラスター",
    modules: "モジュール",
    errorstats: "エラー統計",
    commandstats: "コマンド統計",
    latencystats: "レイテンシ統計",
    keysizes: "キーサイズ",
    threads: "スレッド",
  },
  confirm: {
    dropIndex: "このインデックスを削除しますか？",
    uploadBuffer: "このバイナリデータをアップロードしてもよろしいですか？",
    uploadBufferDone: "バイナリデータがアップロードされました",
    uploadBufferDoneAndSave: "バイナリデータがアップロードされ、サーバーに保存されました",
    title: "確認",
    alert: "警告",
    info: "情報",
    deleteListItem: "このリスト項目を削除してもよろしいですか？",
    deleteHashKey: "このハッシュキー項目を削除してもよろしいですか？",
    deleteStreamTimestamp: "このストリームタイムスタンプを削除してもよろしいですか？",
    deleteSetMember: "このセットメンバーを削除してもよろしいですか？",
    deleteZSetMember: "このソート済みセットメンバーを削除してもよろしいですか？",
    deleteConnection: "確認",
    deleteConnectionText: "このRedis接続を削除してもよろしいですか？",
    deleteNode: "このRedisノードを削除してもよろしいですか？",
    delete: "削除しますか？",
    deleteAllKeys: opts => {
      return `このツリーとすべてのキーを削除しますか (${opts.key})？`;
    },
    deleteSearchKeys: opts => {
      return `"${opts.pattern}" に一致するすべてのキーを削除してもよろしいですか？ ${opts.count} 件のキーが見つかりました。`;
    },
    socketioConnectError: "Socket.IOがサーバーに接続できません。再読み込みして接続エラーの解決を試みることができますが、クライアント側では自動的に解決できません。",
    socketioAuthRequired: "Socket.IO認証が必要です。HTTP Basic Auth（ユーザー名/パスワード）で認証し、再読み込みしてください。",
    deleteKey: "このキーを削除してもよろしいですか？",
    rename: {
      title: "このキーの名前を変更してもよろしいですか？",
      textContent: "この操作はキーの名前を恒久的に変更します。",
      placeholder: "Redisキー（必須）"
    },
    ttl: {
      title: "このキーのTTLを変更してもよろしいですか？",
      textContent: "TTLの変更はこのキーの有効期限を更新します。キーを永続的に保持するには空のままにしてください。",
      placeholder: "RedisキーのTTL（整数または空）",
      placeholderPlaceholder: "空の場合は永続的に保持されます。それ以外の場合は整数を入力してください。",
      convertTextToTime: "テキストを時間に変換",
      convertTextToTimePlaceholder: "例：1dは86400になります"
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
    copy: "コピー",
    downloadBuffer: "バイナリをダウンロード",
    setBuffer: "バイナリをアップロード",
    exportKeys: "キーをエクスポート",
    exportAllKeys: (opts) => `全 ${opts.count} キーをエクスポート`,
    exportSearchResults: (opts) => `${opts.count} 件の結果をエクスポート`,
    deleteAllKeysMenu: (opts) => `すべて削除 ${opts.count}`,
    importKeys: "キーをインポート",
    deleteSearchKeys: (opts) => `一致する ${opts.count} 件のキーを削除`,
    saveWithFormatJson: "フォーマット付きで保存",
    formatJson: "JSONをフォーマット",
    wrap: "折り返し",
    unwrap: "折り返しなし",
    downloadJson: "JSONダウンロード",
    pubsubMonitor: "PubSub",
    pulse: "Pulse",
    profiler: "Profiler",
    memoryAnalysis: "Analysis",
    language: "言語 / Language",
    ok: "OK",
    addKey: "このキーに追加",
    addKeyRoot: "ルートキーを追加",
    reloadKey: "キーを再読み込み",
    reload: "再読み込み",
    close: "閉じる",
    commands: "コマンド",
    view: "表示",
    statistics: "統計",
    refresh: "更新",
    pause: "一時停止",
    resume: "再開",
    clear: "クリア",
    rename: "名前変更",
    main: "データベース",
    cancel: "キャンセル",
    theme: "テーマ",
    github: "GitHub",
    githubRepo: "リポジトリ",
    githubRelease: "リリース",
    githubChangelog: "変更履歴",
    info: "Info",
    settings: "設定",
    connect: "接続",
    disconnect: "切断",
    overview: "概要",
    console: "コンソール",
    noConnections: "接続がありません。設定メニューで接続を追加してください。",
    noConnectionsInSettings: "接続がありません。上の「新しい接続」から追加できます。",
    connectionAdd: "新しい接続",
    addGroup: "グループを追加",
    extend: "展開",
    collapse: "折りたたむ",
    add: "追加",
    edit: "編集",
    save: "保存",
    ttl: "TTLを設定",
    delete: "削除",
    remove: "除去",
    areYouSure: "本当にいいですか？",
    sure: "確認",
    testConnection: "接続テスト",
    getKey: "Redisキーと関連データを読み込み中 ...",
    jsonViewShow: "JSONを表示",
    jsonViewEditor: "JSONを編集",
    quickConsole: "クイックコンソール",
  },
  label: {
    id: {
      nodeId: 'ノードID',
      id: "接続ID",
      info: "sshPassword、sshPrivateKey、password、tlsCrt、tlsKey、tlsCaのプロパティを変更したくない場合は、それらのプロパティに接続IDを入力して値を維持してください。ノードパスワードでも同じロジックを使用する場合は、ノードパスワードにノードIDを入力してください。"
    },
    secureFeature: 'P3Xで始まる同じように見える値がある場合、それはセキュリティ機能です。設定を変更するには、これらの設定を空または他の値に置き換えると保存されます。設定を変更しない場合、サーバー上のまま維持されます。',
    aiTranslating: "翻訳中...",
    aiSettings: "AI 設定",
    aiGroqApiKey: "Groq API キー",
    aiGroqApiKeyInfo: "任意。自分のGroq APIキーでパフォーマンス向上。無料キーの取得先",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "AI APIキーを保存しました",
    aiGroqApiKeyInvalid: "無効なGroq APIキー",
    aiGroqApiKeyNotSet: "未設定（サーバーデフォルト）",
    aiEnabled: "AI 有効",
    aiEnabledYes: "はい",
    aiEnabledNo: "いいえ",
    aiRouteViaNetwork: "network.corifeus.com経由",
    aiRoutingDirect: "自分のAPIキーを使用してGroqに直接クエリを送信します。network.corifeus.comを経由しません。",
    aiRoutingNetwork: "AIクエリはnetwork.corifeus.comを経由します。無料のGroq APIキーをお持ちの場合、このスイッチをオフにして直接Groqを使用できます。",
    ssh: {
      on: 'SSH オン',
      off: 'SSH オフ',
      sshHost: 'SSHホスト',
      sshPort: 'SSHポート',
      sshUsername: 'SSHユーザー名',
      sshPassword: 'SSHパスワード',
      sshPrivateKey: 'SSH秘密鍵'
    },
    isBuffer: opts => `[object ArrayBuffer]は値がバイナリデータであるか、値が${opts.maxValueAsBuffer}より大きいことを意味します`,
    streamValue: `ストリームのフィールドと値は1行です。例：field1 value1 "field 2" "value 2"`,
    streamTimestampId: `'*'は自動生成を意味するか、仕様に従い<ミリ秒時間>-<シーケンス番号>`,
    unableToLoadKey: ({
      key
    }) => {
      return `このキーを読み込めません: ${key}。キーが削除された可能性があります。正確なエラーはコンソールにあります。`;
    },
    bigJson: "このJSONオブジェクトは10kbを超えています。一部の機能のレンダリングが遅くなる可能性があるため、操作内容を理解した上で行ってください。",
    addNode: "ノードを追加",
    validateJson: "JSONを検証",
    reducedFunction: `機能制限`,
    tooManyKeys: opts => {
      return `フル機能で許可されるキーの合計は${opts.maxLightKeysCount}個です。このデータベースは許可されたキーの合計${opts.count}を超えています。キーのソートと追加のツリー情報は無効になっています。検索はクライアント検索の代わりにサーバー側でのみ行われます。`;
    },
    redisCommandNotFound: "一致するRedisコマンドが見つかりません ...",
    treeKeyStore: `ソート（自然比較）はクライアント、つまりブラウザで実行されます。これは10k以上のキーのような大きなデータセットの場合、ページレンダリングに少し時間がかかる可能性があることを意味します。Redisにはキーソートはなく、この方法のみです。`,
    socketIoTimeout: options => {
      return `このリクエストでSocket.IOがタイムアウトしました（最大${options.timeout / 1000}秒）...`;
    },
    resizerInfo: options => {
      return `左または右パネルの最小幅は${options.width}pxです`;
    },
    jsonViewNotParsable: "この値はJSONとして解析できません  ",
    ttlTitle: "TTLを秒単位で設定",
    passwordSecure: "パスワードが空でも文字が表示される場合がありますが、これはセキュリティ機能です。",
    tlsWithoutCert: "追加の証明書なしでTLSを有効にする",
    tlsRejectUnauthorized: "未承認の証明書を拒否する",
    tlsSecure: "P3Xで始まるTLS設定や、すべてのTLS設定が同じように見える場合、それはセキュリティ機能です。設定を変更するには、空または他の値に置き換えると保存されます。TLS設定を変更しない場合、サーバー上のまま維持されます。",
    treeSeparatorEmpty: "ツリー区切りが空の場合、ツリーにはネストされたノードはなく、単純なリストのみになります",
    treeSeparatorEmptyNote: "ネストされたノードはなく、単純なリストのみ",
    welcomeConsole: "Redisコンソールへようこそ",
    welcomeConsoleInfo: "カーソル上下キーによる履歴機能が有効です",
    redisListIndexInfo: "空で末尾に追加、-1で先頭に追加、または表示されている位置に保存します。",
    console: "コンソール",
    connectiondAdd: "接続を追加",
    connectiondEdit: "接続を編集",
    connectiondView: "接続を表示",
    connections: "接続",
    keysSort: {
      on: "キーソート オン",
      off: "キーソート オフ"
    },
    cluster: {
      on: "クラスター オン",
      off: "クラスター オフ"
    },
    sentinel: {
      on: "Sentinel オン",
      off: "Sentinel オフ",
      name: "Sentinel名"
    },
    readonly: {
      on: "読み取り専用 オン",
      off: "読み取り専用 オフ"
    },
    theme: {
      light: "ライト",
      dark: "ダーク enterprise",
      darkNeu: "ダーク",
      darkoBluo: "Darko bluo",
      enterprise: "Enterprise",
      redis: "Redis",
      matrix: "Matrix"
    },
    connected: opts => {
      return `接続済み: ${opts.name}`;
    },
    tree: "ツリー",
    askAuth: "認証を要求",
    keyboardShortcuts: "キーボードショートカット",
    about: "バージョン情報",
    supportedLanguages: "対応言語",
    version: "バージョン",
    redisVersion: "Redisバージョン",
    modules: "モジュール",
    shortcutRefresh: "更新",
    shortcutSearch: "検索にフォーカス",
    shortcutNewKey: "新しいキー",
    shortcutDisconnect: "切断",
    themeAuto: "自動（システム）",
    shortcutCommandPalette: "コマンドパレット",
    commandPalette: "コマンドパレット",
    noResults: "結果なし",
    redisCommandsReference: "Redis コマンド",
    ungrouped: "未分類",
    grouped: "グループ化",
    connectFirst: "まずRedisサーバーに接続してください",
    searchLanguage: "言語を検索...",
    exportProgress: "キーをエクスポート中...",
    importProgress: "キーをインポート中...",
    importPreview: "プレビュー",
    importOverwrite: "上書き",
    importSkip: "スキップ",
    importConflict: "キーが既に存在する場合:",
    noKeysToExport: "エクスポートするキーがありません",
    time: "時間",
    type: "タイプ",
    format: "フォーマット",
    loading: "読み込み中...",
    autoRefresh: "自動",
    exportSearchHint: "現在の検索に一致するキーのみをエクスポート",
    importSearchHint: "インポートは検索結果だけでなくデータベース全体に適用されます",
    deleteSearchHint: "現在の検索に一致するすべてのキーを削除",
    deletingSearchKeys: "一致するキーを削除中...",
    importNoKeys: "ファイルにキーが見つかりません",
  },
  status: {
    dataCopied: "データがクリップボードにコピーされました",
    exportDone: "エクスポート完了",
    deletedSearchKeys: (opts) => `${opts.count} 件のキーを削除しました`,
    indexCreated: "インデックス作成完了",
    indexDropped: "インデックス削除完了",
    importDone: (opts) => `インポート完了: ${opts.created} 作成、${opts.skipped} スキップ、${opts.errors} エラー`,
    nodeRemoved: "ノードが削除されました",
    keyIsNotExisting: "このキーは削除済みまたは有効期限切れの可能性があります。",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "キーなし";
      } else if (opts.keyCount === 1) {
        return "1 キー";
      } else {
        return `${opts.keyCount} キー`;
      }
    },
    treeExpandAll: "すべてのツリーリーフを展開します。この操作は負荷が高く、時間がかかる場合があります ...",
    noRedisKeys: "このデータベースにはキーがありません。",
    redisConnected: "Redisの接続に成功しました",
    reloadingDataInfo: "Redisデータ情報を再読み込み中",
    added: "追加済み",
    saved: "更新済み",
    cancelled: "キャンセル済み",
    deleted: "削除済み",
    savedRedis: "Redisデータが保存されました",
    redisDisconnected: opts => {
      return `現在の接続でエラーが発生しました: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `データベースインデックスが${opts.db}に設定されました。 `;
    },
    treeDeleted: opts => {
      return `ツリーキーが削除されました (${opts.key})。`;
    },
    deletedKey: opts => {
      return `キーが削除されました (${opts.key})。`;
    },
    renamedKey: "このキーの名前が変更されました",
    ttlChanged: "このキーのTTLが変更されました",
    notInteger: "この入力は整数ではありません",
    persisted: "このキーは永続的に保持されます",
    set: "キーが設定/追加されました"
  },
  code: {
    "delete-connection": "この接続は削除されたため、このRedisインスタンスから切断されました。",
    "save-connection": "この接続は変更されたため、このRedisインスタンスから切断されました。再接続できます。",
    "readonly-connections": "接続の追加/保存/削除は読み取り専用です！",
    "readonly-connection-mode": "この接続は読み取り専用モードです！",
    "list-out-of-bounds": "このリストインデックスは範囲外です",
    "invalid-json-value": "The value is not valid JSON.",
    "http_auth_required": "認証が必要です。HTTP Basic Authで認証し、再読み込みしてください。",
    "auto-connection-failed": "接続が削除された可能性があり、そのため自動接続に失敗しました。",
    invalid_console_command: "このコマンドはGUIでは動作しません。"
  },
  form: {
    error: {
      required: "必須",
      port: "ポートは1-65535の範囲です",
      invalid: "フォームが無効です"
    },
    connection: {
      label: {
        name: "名前",
        group: "グループ",
        host: "ホスト名",
        port: "ポート",
        password: "パスワード",
        username: "ユーザー名"
      }
    },
    treeSettings: {
      maxValueDisplay: "値表示の最大文字列長",
      maxValueDisplayInfo: "0の場合、完全な値を表示します。0より大きい場合、この長さに切り詰めます。-1の場合：文字列は編集するまで値を非表示にし、その他の型は完全なコンテンツを表示します。",
      maxKeys: "最大キー数",
      maxKeysInfo: "GUIがクラッシュしないように、最大キー数を制限しています。",
      keyCount: (opts) => {
        return `キー数: ${opts?.keyCount ?? 0}`;
      },
      label: {
        animation: "アニメーションを使用",
        noAnimation: "アニメーションなし",
        jsonFormatTwoSpace: "2スペースでJSONをフォーマット",
        jsonFormatFourSpace: "4スペースでJSONをフォーマット",
        formName: "Redis設定",
        searchModeClient: "クライアント検索モード",
        searchModeServer: "サーバー検索モード",
        searchModeStartsWith: "前方一致検索モード",
        searchModeIncludes: "部分一致検索モード"
      },
      field: {
        treeSeparator: "ツリー区切り文字",
        treeSeparatorSelector: "ツリー区切り文字セレクター",
        page: "ツリーページング数",
        keyPageCount: "キーページング数",
        keysSort: "キーをソート",
        searchMode: "検索モード",
        searchModeStartsWith: "前方一致 / 部分一致検索"
      },
      error: {
        keyPageCount: "キーページング数は5から100の整数である必要があります",
        page: "ページング数は10から5000の整数である必要があります",
        maxValueDisplay: "最大表示値は-1から32768の整数である必要があります",
        maxKeys: "最大キー数は100から100000の整数である必要があります"
      }
    },
    key: {
      label: {
        formName: {
          add: "新しいRedisキーを追加",
          edit: "Redisキーを編集",
          append: "既存のRedisキーに追加"
        }
      },
      field: {
        streamTimestamp: "タイムスタンプ",
        key: "キー",
        type: "タイプ",
        index: "インデックス",
        hashKey: "ハッシュキー",
        score: "スコア",
        value: "値"
      },
      error: {
        streamTimestamp: "タイムスタンプは必須です。Redis形式または*として入力してください",
        key: "キーは少なくとも1文字必要です",
        hashKey: "ハッシュテーブルキーは少なくとも1文字必要です",
        score: "ソート済みセットのスコアは必須です",
        value: "値は必須です"
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
      title: "検索",
      index: "インデックス",
      query: "クエリ",
      results: "結果",
      noIndex: "インデックスが見つかりません",
      createIndex: "インデックス作成",
      dropIndex: "インデックス削除",
      indexInfo: "インデックス情報",
      indexName: "インデックス名",
      prefix: "キープレフィックス（任意）",
      fieldName: "フィールド名",
    },
    monitor: {
      title: "モニタリング",
      memory: "メモリ",
      opsPerSec: "操作/秒",
      clients: "クライアント",
      blocked: "ブロック",
      hitsMisses: "ヒット率",
      networkIo: "ネットワーク I/O",
      slowLog: "スローログ",
      totalCommands: "合計",
      expired: "期限切れ",
      evicted: "追い出し",
      clientList: "クライアント一覧",
      topKeys: "メモリ使用量トップキー",
      killClient: "クライアント切断",
      clientKilled: "クライアントを切断しました",
      confirmKillClient: "このクライアントを切断しますか？",
      noKeys: "キーがありません",
      rss: "RSS",
      peak: "ピーク",
      fragmentation: "フラグメンテーション",
      hitsAndMisses: "ヒット / ミス",
      noClients: "クライアントがありません",
    },
    analysis: {
      title: "メモリ分析",
      runAnalysis: "分析を実行",
      running: "分析中...",
      typeDistribution: "タイプ分布",
      prefixMemory: "プレフィックス別メモリ",
      topKeysByMemory: "メモリ上位キー",
      expirationOverview: "キー有効期限",
      memoryBreakdown: "メモリ内訳",
      keysScanned: "スキャン済みキー",
      totalMemory: "合計メモリ",
      rssMemory: "RSSメモリ",
      peakMemory: "ピークメモリ",
      luaMemory: "Luaメモリ",
      overheadMemory: "オーバーヘッド",
      datasetMemory: "データセット",
      fragmentation: "フラグメンテーション",
      allocator: "アロケータ",
      withTTL: "TTLあり",
      persistent: "永続",
      avgTTL: "平均TTL",
      prefix: "プレフィックス",
      keyCount: "キー数",
      memoryUsage: "メモリ使用量",
      noPrefix: "(プレフィックスなし)",
      topN: "Top N",
      maxScanKeys: "最大スキャンキー数",
      type: "タイプ",
      noData: "データがありません。分析を実行をクリックして開始してください。",
      exportAll: "すべてエクスポート",
    },

    overview: {
      noConnected: "Redisへの接続がありません。",
      overviewClients: "クライアント数で接続一覧を表示",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "1 クライアント";
        }
        return `${opt.length} クライアント`;
      }
    },
    key: {
      label: {
        key: "キー",
        encoding: "エンコーディング",
        compression: "圧縮",
        aiRateLimited: "AIリクエストの制限に達しました。後でもう一度お試しいただくか、設定で独自のGroq APIキーを使用してください。",
        aiError: "AIクエリが失敗しました",
        length: "サイズ",
        ttl: "TTL",
        ttlTitle: "有効期限",
        type: "タイプ",
        ttlNotExpire: "期限なし",
        lengthString: "バイト",
        lengthItem: "アイテム",
        actions: "操作"
      },
      list: {
        table: {
          index: "インデックス",
          value: "値"
        }
      },
      hash: {
        table: {
          hashkey: "ハッシュキー",
          value: "値"
        }
      },
      set: {
        table: {
          value: "メンバー"
        }
      },
      zset: {
        table: {
          value: "メンバー",
          score: "スコア"
        }
      },
      stream: {
        table: {
          timestamp: "タイムスタンプID",
          field: "フィールド",
          value: "値"
        }
      },
      timeseries: {
        chart: "チャート",
        info: "情報",
        addPoint: "ポイント追加",
        from: "開始 (ms または -)",
        to: "終了 (ms または +)",
        aggregation: "集計",
        timeBucket: "バケット (ms)",
        none: "なし",
        dataPoints: "データポイント",
        labels: "ラベル",
        rules: "ルール",
        retention: "保持期間",
        timestamp: "タイムスタンプ",
        value: "値",
        retentionHint: "0 = 有効期限なし、またはミリ秒",
        duplicatePolicy: "重複ポリシー",
        labelsHint: "キー1 値1 キー2 値2",
        timestampHint: "'*' は自動生成、またはミリ秒タイムスタンプ",
        editAllHint: "1行に1データポイント: タイムスタンプ 値 (タイムスタンプは自動の場合 * を使用)",
        autoSpread: "自動 * 分散間隔",
        formula: "数式",
        formulaLinear: "リニア",
        formulaRandom: "ランダム",
        formulaSawtooth: "ノコギリ波",
        formulaPoints: "ポイント",
        formulaAmplitude: "振幅",
        formulaOffset: "オフセット",
        generate: "生成",
        exportChart: "PNG エクスポート",
        overlay: "キーを重ねる",
        overlayHint: "カンマ区切りのキー",
        mrangeFilter: "ラベルフィルター",
        bulkMode: "一括生成",
        mrangeHint: "例: sensor=temp"
      }
    },
    treeControls: {
      settings: "ツリー設定",
      expandAll: "すべて展開",
      collapseAll: "すべて折りたたむ",
      level: "レベル",
      search: {
        search: "キー内を検索",
        clear: "現在の検索をクリア",
        placeholderClient: "クライアント側で検索",
        placeholderServer: "サーバー側で検索",
        info: (opts) => "クライアント側検索は、検索入力のテキストに一致します。サーバー側検索は、*{検索テキスト}*のようなキーパターンで検索します。大きな検索セットではサーバー側検索が適しています。小さな検索セットではクライアント側検索が適しています。" + ` キー数が${opts?.maxLightKeysCount ?? 110000}を超える場合、サーバー側でのみ検索できます。`,
        largeSetInfo: "大きなデータセットでは、クライアント側検索は無効になっており、現在サーバー側検索のみ可能です。",
        infoDetails: "検索の仕組みについては、設定を確認してください"
      },
      pager: {
        next: "次へ",
        prev: "前へ",
        first: "最初",
        last: "最後"
      }
    }
  },
  time: {
    type: "タイプ",
    format: "フォーマット",
    loading: "読み込み中...",
    years: "年",
    months: "ヶ月",
    days: "日",
    year: "年",
    month: "ヶ月",
    day: "日",
    second: "秒",
    seconds: "秒",
    minute: "分",
    minutes: "分",
    hour: "時間",
    hours: "時間"
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
