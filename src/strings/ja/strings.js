const strings = {
  error: {
    server_error: "サーバーエラー、もう一度お試しください",
    aiPromptTooLong: "AIプロンプトが長すぎます（最大 4096 文字）",
  },
  title: {
    donate: "寄付",
    donateTitle: "P3X Redis UIを支援する",
    donateDescription: "P3X Redis UIは無料のオープンソースプロジェクトです。アプリの保守、AI機能、Dockerイメージ、サーバー、インフラストラクチャの費用は開発者の自腹で賄われています。このツールが役立つと感じたら、寄付で継続的な開発をサポートしてください。すべての貢献がプロジェクトを存続させ、成長させる助けになります。ありがとうございます！",
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
    threads: "スレッド"
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
    invalidCredentials: "ユーザー名またはパスワードが無効です。",
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
    logout: "ログアウト",
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
    fieldTtl: "フィールドTTL",
    digest: "ダイジェスト",
    delete: "削除",
    remove: "除去",
    areYouSure: "本当にいいですか？",
    sure: "確認",
    testConnection: "接続テスト",
    getKey: "Redisキーと関連データを読み込み中 ...",
    jsonViewShow: "JSONを表示",
    jsonViewEditor: "JSONを編集",
    quickConsole: "クイックコンソール",
    moveUp: "上へ移動",
    moveDown: "下へ移動",
  },
  diff: {
    reviewChanges: "\u5909\u66f4\u3092\u78ba\u8a8d",
    inline: "\u30a4\u30f3\u30e9\u30a4\u30f3",
    sideBySide: "\u5de6\u53f3\u6bd4\u8f03",
    additions: "\u8ffd\u52a0",
    deletions: "\u524a\u9664",
    unchangedLines: "\u5909\u66f4\u306a\u3057\u306e\u884c",
    noChanges: "\u5909\u66f4\u306f\u691c\u51fa\u3055\u308c\u307e\u305b\u3093\u3067\u3057\u305f",
    before: "\u5909\u66f4\u524d",
    after: "\u5909\u66f4\u5f8c",
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
    aiMaxTokens: "AI 最大トークン数",
    aiMaxTokensInfo: "AI応答の最大トークン数です。値を大きくすると長い応答が可能になりますが、APIクレジットを多く消費する場合があります。",
    consoleDrawer: {
      toggleTooltip: "コンソールの切り替え",
      clearTooltip: "スクロールバックをクリア",
      closeTooltip: "コンソールを閉じます",
      aiSettingsTooltip: "AI 設定",
      modeRedis: "REDIS",
      modeAi: "AI",
      connectionChipNoDb: opts => `${opts.name}`,
      connectionChipWithDb: opts => `${opts.name} · db ${opts.db}`,
      pageChip: opts => `ページ: ${opts.page}`,
      connectingTo: opts => `${opts.name} に接続しています…`,
      connectedTo: opts => `${opts.name} に接続済み（Redis ${opts.version} ${opts.mode}、${opts.modules} モジュール読み込み済み）`,
      connectedToNoInfo: opts => `${opts.name} に接続しました`,
      disconnectedFrom: opts => `${opts.name} から切断されました`,
      readyIndicator: "いいぜ。"
    },
    cheatsheet: {
      title: "AI チートシート — 何を聞けますか？",
      subtitle: "任意のプロンプトをクリックするとコンソールに貼り付けられます。その後 Enter を押してください。",
      searchPlaceholder: "プロンプトを絞り込む…",
      openOfficialDocs: "Redis コマンド ↗",
      openOfficialDocsTooltip: "redis.io にある公式の Redis コマンドリファレンスを開きます",
      closeTooltip: "閉じる (Esc)",
      empty: "フィルターに一致するプロンプトはありません。",
      footerHint: "ヒント：\"ai:\" の後に任意の言語で何でも入力してください — AI は 54 言語を理解し、必要に応じてライブの Redis 状態を参照します。",
      groups: {
        diagnostics: {
          name: "ライブ診断",
          description: "安全な読み取り専用ツールを使って、AI にサーバーの現在の状態を調査させます。",
          prompts: [
            "なぜメモリ使用量が高いのですか？",
            "最も遅いクエリを 10 件見せてください",
            "どのクライアントが接続していますか？",
            "maxmemory ポリシーは何ですか？",
            "最近エビクションは発生していますか？",
            "レイテンシーイベントはありますか？",
            "サーバーはどのくらい稼働していますか？",
            "ヒット率はどのくらいですか？",
            "CPU 使用率を見せてください",
            "キースペースを要約してください",
            "各データ型はどれくらいメモリを使っていますか？",
            "今、サーバーを止めている要因はありますか？"
          ]
        },
        keys: {
          name: "キー",
          description: "ツリーをクリックして辿ることなく、キーを検査・検索・分析します。",
          prompts: [
            "user:* にマッチするすべてのキーを見つける",
            "各データベースにいくつのキーがありますか？",
            "この db で最大の hash を見せてください",
            "TTL が 60 秒未満のキーを見つける",
            "TTL が設定されていないキーはどれですか？",
            "キー session:abc の型は何ですか？",
            "\"session:\" プレフィックスが使用しているメモリ量を推定してください",
            "キー user:42 のオブジェクトエンコーディングを見せてください",
            "まもなく期限切れになるキーはありますか？",
            "最もメモリを使用している名前空間はどれですか？"
          ]
        },
        dataTypes: {
          name: "データ型",
          description: "すべての Redis 型に対する作成／読み取り／更新の自然言語表現。",
          prompts: [
            "user:1 という名前の hash を作成し、フィールド name=Alice age=30 を設定する",
            "list tasks に 3 つの要素を追加する",
            "set favourites にメンバーを追加する",
            "sorted set leaderboard にスコア付きメンバーを追加する",
            "stream events にイベントを追加する",
            "stream events から最後の 10 件を取得する",
            "hash user:1 のすべてのフィールドを取得する",
            "set favourites のメンバーを取得する",
            "leaderboard からスコア上位 10 件を取得する"
          ]
        },
        modules: {
          name: "モジュール",
          description: "読み込まれている Redis モジュール向けのクエリ（以下のカテゴリは該当モジュールが存在する場合のみ表示されます）。",
          prompts: []
        },
        json: {
          name: "RedisJSON",
          description: "ReJSON モジュールが読み込まれている場合に利用できます。",
          prompts: [
            "user:42 に { name: \"Alice\", age: 30 } という JSON ドキュメントを作成する",
            "user:42 の name フィールドを読み取る",
            "user:42 の age を 31 に更新する",
            "すべての JSON キーを一覧表示する",
            "JSON ドキュメントからフィールドを削除する",
            "JSONPath でネストされたフィールドを取得する"
          ]
        },
        search: {
          name: "RediSearch",
          description: "search モジュールが読み込まれている場合に利用できます。",
          prompts: [
            "全文検索インデックスを一覧表示する",
            "インデックス idx:products に対して \"redis\" の全文検索を実行する",
            "title (TEXT) と price (NUMERIC) のフィールドを持つ hash ベースのインデックスを作成する",
            "インデックス idx:products の情報を取得する",
            "インデックス idx:products を削除する",
            "価格が 10 から 50 の間のドキュメントを見つける",
            "テキストとベクトル類似度を組み合わせたハイブリッド検索を書く"
          ]
        },
        timeseries: {
          name: "RedisTimeSeries",
          description: "timeseries モジュールが読み込まれている場合に利用できます。",
          prompts: [
            "すべての timeseries キーを一覧表示する",
            "temp:room1 にデータポイントを追加する",
            "temp:room1 の昨日から現在までの範囲を取得する",
            "ラベル sensor=temp でマルチレンジを取得する",
            "temp:room1 向けに正弦波のデータポイントを 100 個生成する",
            "temp:room1 の保持期間とラベルを表示する"
          ]
        },
        bloom: {
          name: "RedisBloom (Bloom / Cuckoo / Top-K / CMS / T-Digest)",
          description: "bf モジュールが読み込まれている場合に利用できます。",
          prompts: [
            "Bloom フィルター spam:ips にアイテム foo が存在するか確認する",
            "Bloom フィルター spam:ips にアイテムを追加する",
            "popular という名前の Top-K を K=10 で作成する",
            "キー /home に対して count-min sketch traffic を問い合わせる",
            "t-digest に値を追加し、95 パーセンタイルを取得する",
            "Bloom フィルター spam:ips の情報を表示する"
          ]
        },
        vectorSet: {
          name: "VectorSet (Redis 8+)",
          description: "Redis 8+ が検出されたときに利用できます（ネイティブの VECTORSET 型）。",
          prompts: [
            "embeddings にベクトルを追加する",
            "クエリベクトルに最も類似する 10 件のベクトルを見つける",
            "vectorset embeddings の次元数と件数を表示する",
            "vectorset embeddings から要素を削除する",
            "VSIM で要素名を指定して検索する"
          ]
        },
        redis8: {
          name: "Redis 8+ 機能",
          description: "Redis 8+ が検出されたときに表示されます。",
          prompts: [
            "HEXPIRE で hash フィールドに TTL を設定する",
            "文字列値のダイジェストを取得する",
            "ハイブリッドの全文 + ベクトル検索を実行する (FT.HYBRID)",
            "MSETEX で複数のキーに共通の有効期限を設定する",
            "コンシューマーグループ付きで stream エントリを削除する (XDELEX)",
            "上位 10 スロットの cluster slot-stats を表示する"
          ]
        },
        scripting: {
          name: "スクリプト",
          description: "自然言語の説明から Lua / EVAL スクリプトを生成します。",
          prompts: [
            "Y > 5 のときのみカウンター X をインクリメントするアトミックなスクリプトを書く",
            "Lua で 100 個のランダムなキーを生成する",
            "このシェルパイプラインを単一の EVAL に変換する：keys user:* | GET | grep inactive | DEL",
            "クラスター安全性のためにバッチ操作を Lua に移植する",
            "単一の Lua 呼び出しで check-and-set 形式の更新を行う",
            "hash を走査し、パターンに一致するフィールドを削除する"
          ]
        },
        cluster: {
          name: "クラスター",
          description: "クラスターモードのときのみ表示されます。",
          prompts: [
            "cluster 情報を表示する",
            "cluster ノードを一覧表示する",
            "キー数で上位 10 個のスロットを表示する",
            "メモリ使用量で上位 10 個のスロットを表示する",
            "スロット 5000 を所有している master はどれですか？"
          ]
        },
        acl: {
          name: "ACL (Redis 6+)",
          description: "アクセス制御ユーザーと現在の接続を確認します。",
          prompts: [
            "私はどのユーザーで接続していますか？",
            "すべての ACL ユーザーを一覧表示する",
            "私はどのような権限を持っていますか？",
            "default ユーザーのルールを表示する"
          ]
        },
        qna: {
          name: "一般 Q&A",
          description: "Redis に関する知識の質問を行います — ツールは使わず、回答だけ返します。",
          prompts: [
            "ZADD とは何ですか？",
            "cluster failover はどのように動作しますか？",
            "SCAN と KEYS の違いを説明してください",
            "EVAL と複数コマンドはどう使い分けるべきですか？",
            "Redis の永続化オプションには何がありますか？",
            "RDB と AOF の違いは何ですか？",
            "Redis Sentinel はどうやって新しい master を決定しますか？",
            "クラスターモードでの hash tag について説明してください"
          ]
        },
        translate: {
          name: "自然言語 → Redis コマンド",
          description: "やりたいことを日本語（または 54 言語のいずれか）で説明してください。AI が対応する Redis コマンドを書きます。",
          prompts: [
            "キー user:42 を削除する",
            "キー foo の名前を bar に変更する",
            "キー session:abc を 10 秒後に期限切れにする",
            "キー source を destination にコピーする",
            "カウンター visits を 5 増やす",
            "キー greeting を \"hello\" に設定し、1 時間有効にする",
            "最もよくアクセスされているキーを 10 件表示する",
            "temp:* にマッチするすべてのキーを削除する"
          ]
        }
      }
    },
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
    aclAuthHint: "Redis ACL のユーザー名とパスワードを使用して認証します。パスワードのないデフォルトユーザーの場合は空のままにします。",
    tlsWithoutCert: "追加の証明書なしでTLSを有効にする",
    tlsRejectUnauthorized: "未承認の証明書を拒否する",
    tlsSecure: "P3Xで始まるTLS設定や、すべてのTLS設定が同じように見える場合、それはセキュリティ機能です。設定を変更するには、空または他の値に置き換えると保存されます。TLS設定を変更しない場合、サーバー上のまま維持されます。",
    treeSeparatorEmpty: "ツリー区切りが空の場合、ツリーにはネストされたノードはなく、単純なリストのみになります",
    treeSeparatorEmptyNote: "ネストされたノードはなく、単純なリストのみ",
    welcomeConsole: "Redisコンソールへようこそ",
    welcomeConsoleInfo: "SHIFT + カーソル上下キーによる履歴機能が有効です",
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
    languageAuto: "Auto (system)",
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
    type: "種類",
    time: "時間",
    format: "形式",
    loading: "読み込み中...",
    autoRefresh: "自動",
    exportSearchHint: "現在の検索に一致するキーのみをエクスポート",
    importSearchHint: "インポートは検索結果だけでなくデータベース全体に適用されます",
    deleteSearchHint: "現在の検索に一致するすべてのキーを削除",
    deletingSearchKeys: "一致するキーを削除中...",
    importNoKeys: "ファイルにキーが見つかりません",
    desktopNotifications: "デスクトップ通知",
    desktopNotificationsEnabled: "デスクトップ通知を有効にする",
    desktopNotificationsInfo: "アプリがフォーカスされていない時に、Redisの切断と再接続のOS通知を受け取ります。"
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
    reverted: "\u5143\u306b\u623b\u3057\u307e\u3057\u305f",
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
    set: "キーが設定/追加されました",
    connectionRestored: "接続が復元されました",
    socketDisconnected: "切断されました",
    socketError: "接続エラー",
    deletedHashKey: "ハッシュキーが削除されました",
    deletedSetMember: "セットメンバーが削除されました",
    deletedListElement: "リスト要素が削除されました",
    deletedZSetMember: "ソート済みセットメンバーが削除されました",
    deletedStreamTimestamp: "ストリームエントリが削除されました",
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
    invalid_console_command: "このコマンドはGUIでは動作しません。",
    "AI_DISABLED": "AIが無効です。AI設定で有効にしてください。",
    "AI_PROMPT_REQUIRED": "AIプロンプトが必要です。",
    "GROQ_API_KEY_READONLY": "Groq APIキーは読み取り専用で変更できません。",
    "blocked_api_access": "お使いのGroq APIプランではこのモデルにアクセスできません。Groqプランをアップグレードするか、network.corifeus.comプロキシを使用してください。",
    "rate_limit": "AIレート制限に達しました。後でもう一度お試しいただくか、設定で独自のGroq APIキーを使用してください。"
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
        undoEnabled: "\u5143\u306b\u623b\u3059\u3092\u6709\u52b9\u5316",
        undoDisabled: "\u5143\u306b\u623b\u3059\u3092\u7121\u52b9\u5316",
        diffEnabled: "\u4fdd\u5b58\u524d\u306b diff \u3092\u8868\u793a",
        diffDisabled: "\u4fdd\u5b58\u524d\u306e diff \u306f\u7121\u52b9",
        jsonFormatTwoSpace: "2スペースでJSONをフォーマット",
        jsonFormatFourSpace: "4スペースでJSONをフォーマット",
        formName: "Redis設定",
        searchModeClient: "クライアント検索モード",
        searchModeServer: "サーバー検索モード",
        searchModeStartsWith: "前方一致検索モード",
        searchModeIncludes: "部分一致検索モード"
      },
      undoHint: "\u5143\u306b\u623b\u3059\u306f string \u3068 JSON \u306e\u30ad\u30fc\u30bf\u30a4\u30d7\u3067\u306e\u307f\u5229\u7528\u3067\u304d\u307e\u3059",
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
        value: "値",
        errorRate: "エラー率",
        capacity: "容量",
        topk: "Top K",
        width: "幅",
        depth: "深さ",
        decay: "減衰",
        compression: "圧縮",
        increment: "増分",
        item: "アイテム",
        vectorValues: "ベクトル値（カンマ区切り）",
        element: "要素名",
      },
      error: {
        streamTimestamp: "タイムスタンプは必須です。Redis形式または*として入力してください",
        key: "キーは少なくとも1文字必要です",
        hashKey: "ハッシュテーブルキーは少なくとも1文字必要です",
        score: "ソート済みセットのスコアは必須です",
        value: "値は必須です",
        errorRate: "エラー率は0から1の間でなければなりません（例：0.01）",
        capacity: "容量は正の整数でなければなりません",
        topk: "Top Kは正の整数でなければなりません",
        width: "幅は正の整数でなければなりません",
        depth: "深さは正の整数でなければなりません",
        item: "アイテムは必須です"
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
      hybridMode: "ハイブリッド検索 (FT.HYBRID)",
      vectorField: "ベクトルフィールド",
      vectorValues: "ベクトル値",
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
      noSlowQueries: "記録された遅いクエリはありません。",
      confirmSlowLogReset: "スローログをリセットしてもよろしいですか?",
      slowLogResetDone: "スローログがリセットされました。",
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
      slotStats: "クラスタースロット統計",
      serverInfo: "サーバー情報",
      os: "オペレーティングシステム",
      port: "ネットワークポート",
      pid: "プロセスID",
      configFile: "設定ファイル",
      uptime: "稼働時間",
      keyspace: "Redis キースペース",
      keys: "Redis キー",
      expires: "有効期限が切れます",
      noKeyspace: "キーがありません",
      persistence: "データの永続性",
      rdbLastSave: "RDBの最終保存",
      rdbStatus: "RDBステータス",
      rdbChanges: "前回の保存以降の変更",
      aofEnabled: "AOF 有効",
      aofSize: "AOFサイズ",
      replication: "Redis レプリケーション",
      role: "レプリケーションの役割",
      replicas: "接続されたレプリカ",
      masterHost: "プライマリホスト",
      linkStatus: "レプリケーションリンクステータス",
      cpu: "CPU使用率",
      cpuSys: "システム",
      cpuUser: "ユーザー",
      modules: "ロードされた Redis モジュール",
      noModules: "Redis モジュールがロードされていません",
      clusterSlotMap: "Redis クラスターのスロット マップ",
      slotRange: "クラスターのスロット範囲",
      totalSlots: "クラスタースロット総数",
      noClusterData: "利用可能な Redis クラスター データがありません。",
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
      memoryDoctor: "Memory Doctor",
      doctorNoData: "更新をクリックして、Memory Doctor 診断を実行します。",
    },
    acl: {
      title: "ACLユーザー",
      loadUsers: "ユーザーを読み込む",
      loading: "読み込み中...",
      username: "ユーザー名",
      status: "ステータス",
      enabled: "有効",
      disabled: "無効",
      commands: "コマンド",
      commandsHint: "例: +@all or +@read -@dangerous",
      keys: "Redis キー パターン",
      keysHint: "例: ~* or ~user:*",
      channels: "Pub/Sub チャネル",
      channelsHint: "例: &* or &notifications:*",
      password: "パスワード",
      noPassword: "パスワードなし (ノーパス)",
      passwordHint: "現在のパスワードを保持するには空のままにしておきます",
      currentUser: "現在",
      createUser: "ユーザーの作成",
      editUser: "ユーザーの編集",
      deleteUser: "削除",
      confirmDelete: "ACL ユーザーを削除してもよろしいですか?",
      userDeleted: "ACL ユーザーが削除されました。",
      userSaved: "ACL ユーザーが保存されました。",
      cannotDeleteDefault: "デフォルトのユーザーは削除できません。",
      cannotDeleteSelf: "現在接続しているユーザーを削除できません。",
      noUsers: "ACL には Redis 6.0+ が必要です。",
      groupCommon: "共通",
      groupDataTypes: "データ型",
      groupOperations: "操作",
      rules: "ルール",
      rulesHint: "スペースで区切られたトークン (例: on >password +@all ~* &*)",
      defaultUserWarning: "注意: デフォルトのユーザーを変更すると、すべての接続がロックアウトされる可能性があります。この問題が発生した場合は、Redis を再起動するか、redis-cli を使用してアクセスを復元する必要があります。",
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
      },
      probabilistic: {
        info: "情報",
        addItem: "アイテム追加",
        checkItem: "アイテム確認",
        item: "アイテム",
        exists: "存在する",
        doesNotExist: "存在しない",
        topkList: "トップアイテム",
        topkCount: "カウント",
        queryCount: "クエリカウント",
        queryResult: "クエリ結果",
        addedSuccessfully: "アイテムが正常に追加されました",
        deletedSuccessfully: "アイテムが正常に削除されました",
        quantile: "分位数",
        quantileResult: "結果",
        noItems: "表示するアイテムがありません",
        resetConfirm: "このT-Digestのすべてのデータをリセットしますか？"
      },
      vectorset: {
        info: "情報",
        elements: "要素",
        similarity: "類似検索",
        searchByElement: "要素で検索",
        searchByVector: "ベクトルで検索",
        vectorValues: "ベクトル値",
        element: "要素",
        score: "スコア",
        count: "件数",
        addElement: "要素を追加",
        attributes: "属性",
        noAttributes: "属性なし",
        dimensions: "次元",
        removeConfirm: "この要素をVectorSetから削除しますか？",
        noElements: "要素なし",
        filter: "フィルター",
        searchComplete: "検索完了",
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
    timeseries: "Time Series",
    bloom: "Bloom フィルター",
    cuckoo: "Cuckoo フィルター",
    topk: "Top-K",
    cms: "Count-Min Sketch",
    tdigest: "T-Digest",
    vectorset: "VectorSet",
  },
  promo: {
    title: "AI ネットワークアシスタント",
    description: "無料の AI ネットワークアシスタントを network.corifeus.com でご覧ください。ドメイン、IP、DNS レコード、SSL 証明書、メールセキュリティ、ネットワークインフラストラクチャを分析します。AI 駆動で即座に包括的な結果を得られます。",
    disclaimer: "このプロモーションはデモサイトにのみ表示され、Docker、Electron、またはウェブアプリのデプロイメントには表示されません。",
    toastMessage: "無料の AI ネットワークアシスタントを network.corifeus.com でお試しください。ドメイン、DNS、SSL などを分析してください！",
    visit: "network.corifeus.com にアクセス"
  }
};
module.exports = strings;
