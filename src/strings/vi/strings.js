const strings = {
  error: {
    server_error: "Lỗi máy chủ, vui lòng thử lại",
    aiPromptTooLong: "Lời nhắc AI quá dài (tối đa 4096 ký tự)",
  },
  title: {
    donate: "Đóng góp",
    donateTitle: "Hỗ trợ P3X Redis UI",
    donateDescription: "P3X Redis UI là một dự án miễn phí, mã nguồn mở. Chi phí bảo trì ứng dụng, tính năng AI, Docker image, máy chủ và cơ sở hạ tầng đều từ túi tiền riêng của nhà phát triển. Nếu bạn thấy công cụ này hữu ích, vui lòng cân nhắc hỗ trợ sự phát triển liên tục của nó bằng một khoản quyên góp. Mọi đóng góp đều giúp dự án sống và phát triển. Cảm ơn bạn!",
    jsonRecursive: "Mở rộng tất cả các lá",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "Bạn có thể chọn kết nối Redis để kết nối từ menu phía dưới bên trái.",
    statistics: "Thống kê",
    error: "Lỗi",
    connectingRedis: "Đang kết nối với Redis ...",
    socketioConnectError: "Lỗi Socket.IO",
    db: "DB",
    server: "Máy chủ",
    clients: "Khách hàng",
    memory: "Bộ nhớ",
    persistence: "Kiên trì",
    stats: "Thống kê",
    replication: "Sao chép",
    cpu: "CPU",
    cluster: "Cluster",
    modules: "Mô-đun",
    errorstats: "Thống kê lỗi",
    commandstats: "Thống kê lệnh",
    latencystats: "Thống kê độ trễ",
    keysizes: "Kích thước khóa",
    threads: "Luồng"
  },
  confirm: {
    dropIndex: "Bạn có chắc muốn xóa chỉ mục này?",
    uploadBuffer: "Bạn có chắc chắn tải lên dữ liệu nhị phân này không?",
    uploadBufferDone: "Dữ liệu nhị phân được tải lên",
    uploadBufferDoneAndSave: "Dữ liệu nhị phân được tải lên và lưu trên máy chủ",
    title: "Xác nhận",
    alert: "Cảnh báo",
    info: "Thông tin",
    deleteListItem: "Bạn có chắc chắn xóa mục danh sách này không?",
    deleteHashKey: "Bạn có chắc chắn xóa mục khóa băm này không?",
    deleteStreamTimestamp: "Bạn có chắc chắn xóa dấu thời gian của luồng này không?",
    deleteSetMember: "Bạn có chắc chắn xóa thành viên đã đặt này không?",
    deleteZSetMember: "Bạn có chắc chắn xóa thành viên tập hợp đã sắp xếp này không?",
    deleteConnection: "Xác nhận",
    deleteConnectionText: "Bạn có chắc chắn xóa kết nối Redis này không?",
    deleteNode: "Bạn có chắc chắn xóa nút Redis này không?",
    deleteAllKeys: opts => {
      return `Xóa cây này và tất cả các khóa của nó (${opts.key})?`;
    },
    deleteSearchKeys: opts => {
      return `Bạn có chắc chắn muốn xóa tất cả các khóa khớp với "${opts.pattern}" không? Tìm thấy ${opts.count} khóa.`;
    },
    socketioConnectError: "Socket.IO không kết nối được với máy chủ, bạn có thể tải lại và thử tự khắc phục lỗi kết nối, máy khách không biết tự giải quyết.",
    socketioAuthRequired: "Cần có ủy quyền Socket.IO. Vui lòng xác thực bằng HTTP Basic Auth (tên người dùng/mật khẩu) và tải lại.",
    invalidCredentials: "Tên người dùng hoặc mật khẩu không hợp lệ.",
    delete: "Xóa?",
    deleteKey: "Bạn có chắc chắn xóa khóa này không?",
    rename: {
      title: "Bạn có chắc chắn đổi tên khóa này không?",
      textContent: "Hành động này đổi tên khóa vĩnh viễn.",
      placeholder: "Khóa Redis (bắt buộc)"
    },
    ttl: {
      title: "Bạn có chắc chắn muốn thay đổi TTL của khóa này không?",
      textContent: "Việc thay đổi TTL sẽ cập nhật thời gian tồn tại của khóa này. Để trống để giữ chìa khóa này mãi mãi.",
      placeholder: "TTL của khóa Redis (số nguyên hoặc trống)",
      placeholderPlaceholder: "Trống rỗng có nghĩa là nó tồn tại mãi mãi; nếu không thì nhập một số nguyên.",
      convertTextToTime: "Chuyển đổi văn bản thành thời gian",
      convertTextToTimePlaceholder: "Ví dụ: 1d sẽ là 86400"
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
    copy: "Sao chép",
    downloadBuffer: "Tải xuống nhị phân",
    setBuffer: "Tải lên nhị phân",
    exportKeys: "Xuất khóa",
    exportAllKeys: (opts) => `Xuất tất cả ${opts.count} khóa`,
    exportSearchResults: (opts) => `Xuất ${opts.count} kết quả`,
    deleteAllKeysMenu: (opts) => `Xóa tất cả ${opts.count}`,
    importKeys: "Nhập khóa",
    deleteSearchKeys: (opts) => `Xóa ${opts.count} khóa khớp`,
    saveWithFormatJson: "Lưu với định dạng",
    formatJson: "Định dạng Json",
    wrap: "Bọc",
    unwrap: "Mở gói",
    downloadJson: "Tải xuống JSON",
    pubsubMonitor: "PubSub",
    pulse: "Pulse",
    profiler: "Profiler",
    memoryAnalysis: "Analysis",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "Ngôn ngữ",
    ok: "được rồi",
    addKey: "Thêm vào khóa này",
    addKeyRoot: "Thêm khóa gốc",
    reloadKey: "Phím tải lại",
    reload: "Tải lại",
    close: "Đóng",
    commands: "Lệnh",
    view: "Xem",
    statistics: "Thống kê",
    refresh: "Làm mới",
    pause: "Tạm dừng",
    resume: "Tiếp tục",
    clear: "Xóa",
    rename: "Đổi tên",
    main: "Cơ sở dữ liệu",
    cancel: "Hủy bỏ",
    theme: "chủ đề",
    github: "GitHub",
    githubRepo: "Kho lưu trữ",
    githubRelease: "phát hành",
    githubChangelog: "Nhật ký thay đổi",
    info: "Info",
    settings: "Cài đặt",
    connect: "Kết nối",
    disconnect: "Ngắt kết nối",
    logout: "Đăng xuất",
    overview: "Tổng quan",
    console: "Bảng điều khiển",
    noConnections: "Không có kết nối, thêm kết nối trong menu cài đặt.",
    noConnectionsInSettings: "Không có kết nối, bạn có thể thêm KẾT NỐI MỚI ở trên.",
    connectionAdd: "Kết nối mới",
    addGroup: "Thêm nhóm",
    extend: "Gia hạn",
    collapse: "Thu gọn",
    add: "Thêm",
    edit: "Chỉnh sửa",
    save: "Lưu",
    ttl: "Đặt TTL",
    fieldTtl: "TTL trường",
    digest: "Tóm tắt",
    delete: "Xóa",
    remove: "Xóa",
    areYouSure: "Bạn có chắc không?",
    sure: "Chắc chắn rồi",
    testConnection: "Kiểm tra kết nối",
    getKey: "Đang tải khóa Redis và dữ liệu liên quan ...",
    jsonViewShow: "Hiển thị JSON",
    jsonViewEditor: "Chỉnh sửa JSON",
    quickConsole: "Bảng điều khiển nhanh",
    moveUp: "Di chuyển lên",
    moveDown: "Di chuyển xuống",
  },
  diff: {
    reviewChanges: "Xem l\u1ea1i thay \u0111\u1ed5i",
    inline: "Trong d\u00f2ng",
    sideBySide: "C\u1ea1nh nhau",
    additions: "ph\u1ea7n th\u00eam",
    deletions: "ph\u1ea7n x\u00f3a",
    unchangedLines: "d\u00f2ng kh\u00f4ng thay \u0111\u1ed5i",
    noChanges: "Kh\u00f4ng ph\u00e1t hi\u1ec7n thay \u0111\u1ed5i",
    before: "Tr\u01b0\u1edbc",
    after: "Sau",
  },
  label: {
    id: {
      nodeId: "ID nút",
      id: "ID kết nối",
      info: "Nếu bạn không muốn thay đổi các thuộc tính của: sshPassword, sshPrivateKey, mật khẩu, tlsCrt, tlsKey, tlsCa, vui lòng nhập ID của kết nối vào các thuộc tính đó để giữ nguyên các giá trị thuộc tính. Nếu bạn muốn logic tương tự trong mật khẩu nút, hãy nhập ID nút vào mật khẩu nút."
    },
    secureFeature: "Nếu bạn thấy một giá trị bắt đầu bằng P3X và trông giống như vậy thì đó là một tính năng bảo mật. Để thay đổi cài đặt, chỉ cần thay thế các cài đặt này bằng trống hoặc cài đặt khác và chúng sẽ được lưu. Nếu bạn không thay đổi cài đặt, cài đặt sẽ được giữ nguyên trên máy chủ.",
    aiTranslating: "Đang dịch...",
    aiSettings: "Cài đặt AI",
    aiGroqApiKey: "Khóa API Groq",
    aiGroqApiKeyInfo: "Tùy chọn. Khóa API Groq riêng để có hiệu suất tốt hơn. Nhận khóa miễn phí từ",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "Đã lưu khóa API AI",
    aiGroqApiKeyInvalid: "Khóa Groq API không hợp lệ",
    aiGroqApiKeyNotSet: "Chưa đặt (mặc định máy chủ)",
    aiEnabled: "AI đã bật",
    aiEnabledYes: "Có",
    aiEnabledNo: "Không",
    aiRouteViaNetwork: "Định tuyến qua network.corifeus.com",
    aiRoutingDirect: "Truy vấn được gửi trực tiếp tới Groq bằng khóa API riêng của bạn, bỏ qua network.corifeus.com.",
    aiRoutingNetwork: "Các truy vấn AI được định tuyến qua network.corifeus.com. Nếu bạn có khóa Groq API miễn phí của riêng mình, bạn có thể tắt công tắc này để định tuyến trực tiếp tới Groq mà không cần network.corifeus.com.",
    aiMaxTokens: "Số token AI tối đa",
    aiMaxTokensInfo: "Số lượng token tối đa cho phản hồi AI. Giá trị cao hơn cho phép phản hồi dài hơn nhưng có thể dùng nhiều tín dụng API hơn.",
    consoleDrawer: {
      toggleTooltip: "Bật/tắt bảng điều khiển",
      clearTooltip: "Xóa lịch sử cuộn",
      closeTooltip: "Đóng bảng điều khiển",
      aiSettingsTooltip: "Cài đặt AI",
      modeRedis: "REDIS",
      modeAi: "AI",
      connectionChipNoDb: opts => `${opts.name}`,
      connectionChipWithDb: opts => `${opts.name} · db ${opts.db}`,
      pageChip: opts => `trang: ${opts.page}`,
      connectingTo: opts => `Đang kết nối tới ${opts.name}…`,
      connectedTo: opts => `Đã kết nối tới ${opts.name} (Redis ${opts.version} ${opts.mode}, đã tải ${opts.modules} mô-đun)`,
      connectedToNoInfo: opts => `Đã kết nối tới ${opts.name}`,
      disconnectedFrom: opts => `Đã ngắt kết nối khỏi ${opts.name}`,
      notConnected: "Chưa kết nối.",
      limitedAiOnly: "Chỉ AI ở chế độ giới hạn — vẫn dùng được hỏi đáp Redis chung.",
      connectHint: "Để chẩn đoán trực tiếp, hãy gõ: connect <name>",
      cheatsheetHint: "Gõ ai: help để xem bạn có thể hỏi gì.",
      needsConnection: "Tính năng này cần một kết nối đang hoạt động. Hãy gõ \"connect <name>\" trước.",
      aiNeedsConnectionReason: "AI theo trạng thái trực tiếp (tool use) chỉ khả dụng khi đã kết nối với Redis.",
      verbNeedsConnection: opts => `"${opts.verb}" cần một kết nối đang hoạt động — hãy gõ "connect <name>" trước.`,
      aiLimitedMode: "AI đang ở chế độ giới hạn — chỉ các câu hỏi kiến thức Redis chung hoạt động cho tới khi bạn kết nối.",
      welcomeDisconnected: "Chào mừng. Bạn chưa kết nối tới bất kỳ phiên Redis nào.",
      readyIndicator: "Sẵn sàng.",
    },
    cheatsheet: {
      title: "Cẩm nang AI — Tôi có thể hỏi gì?",
      subtitle: "Nhấp vào bất kỳ gợi ý nào để dán vào bảng điều khiển. Sau đó nhấn Enter.",
      searchPlaceholder: "Lọc gợi ý…",
      openOfficialDocs: "Redis Commands ↗",
      openOfficialDocsTooltip: "Mở tài liệu lệnh Redis chính thức tại redis.io",
      closeTooltip: "Đóng (Esc)",
      empty: "Không có gợi ý nào khớp với bộ lọc.",
      footerHint: "Mẹo: gõ \"ai:\" rồi viết bất cứ điều gì bằng bất kỳ ngôn ngữ nào — AI hiểu 54 ngôn ngữ và sử dụng trạng thái Redis trực tiếp khi cần.",

      // Each group has: name (category label), match (search-filter alias), prompts (array of example strings)
      groups: {
        diagnostics: {
          name: "Chẩn đoán trực tiếp",
          description: "Yêu cầu AI kiểm tra trạng thái máy chủ trực tiếp qua các công cụ chỉ đọc an toàn.",
          prompts: [
            "tại sao bộ nhớ cao?",
            "cho tôi xem 10 truy vấn chậm nhất",
            "những client nào đang kết nối?",
            "chính sách maxmemory là gì?",
            "có lần trục xuất nào gần đây không?",
            "có sự kiện độ trễ nào không?",
            "máy chủ đã chạy bao lâu rồi?",
            "tỷ lệ hit là bao nhiêu?",
            "hiển thị mức sử dụng cpu",
            "tóm tắt keyspace",
            "mỗi loại dữ liệu dùng bao nhiêu bộ nhớ?",
            "có gì đang chặn máy chủ ngay bây giờ không?"
          ]
        },
        keys: {
          name: "Khóa",
          description: "Kiểm tra, tìm và phân tích các khóa mà không cần nhấp qua cây.",
          prompts: [
            "tìm tất cả các khóa khớp user:*",
            "mỗi cơ sở dữ liệu có bao nhiêu khóa?",
            "hiển thị hash lớn nhất trong db này",
            "tìm các khóa có TTL dưới 60 giây",
            "khóa nào không có TTL?",
            "khóa session:abc thuộc kiểu gì?",
            "ước lượng bộ nhớ dùng bởi tiền tố \"session:\"",
            "hiển thị mã hóa đối tượng của khóa user:42",
            "có khóa nào sắp hết hạn không?",
            "namespace nào dùng nhiều bộ nhớ nhất?"
          ]
        },
        dataTypes: {
          name: "Kiểu dữ liệu",
          description: "Diễn đạt bằng ngôn ngữ tự nhiên cho thao tác tạo/đọc/cập nhật trên mọi kiểu Redis.",
          prompts: [
            "tạo một hash có tên user:1 với các trường name=Alice age=30",
            "thêm ba mục vào list tasks",
            "thêm thành viên vào set favourites",
            "thêm thành viên có điểm vào sorted set leaderboard",
            "thêm một sự kiện vào stream events",
            "lấy 10 bản ghi cuối cùng từ stream events",
            "lấy tất cả các trường của hash user:1",
            "lấy các thành viên của set favourites",
            "lấy top 10 theo điểm từ leaderboard"
          ]
        },
        modules: {
          name: "Module",
          description: "Truy vấn cho các module Redis đã tải (các danh mục bên dưới chỉ hiển thị khi module có mặt).",
          prompts: []
        },
        json: {
          name: "RedisJSON",
          description: "Có sẵn khi module ReJSON được tải.",
          prompts: [
            "tạo một tài liệu JSON tại user:42 với { name: \"Alice\", age: 30 }",
            "đọc trường name của user:42",
            "cập nhật age của user:42 thành 31",
            "liệt kê tất cả các khóa JSON",
            "xóa một trường khỏi tài liệu JSON",
            "lấy một trường lồng nhau dùng JSONPath"
          ]
        },
        search: {
          name: "RediSearch",
          description: "Có sẵn khi module search được tải.",
          prompts: [
            "liệt kê tất cả các chỉ mục toàn văn",
            "chạy tìm kiếm toàn văn cho \"redis\" trên chỉ mục idx:products",
            "tạo một chỉ mục dựa trên hash với các trường title (TEXT) và price (NUMERIC)",
            "lấy thông tin về chỉ mục idx:products",
            "xóa chỉ mục idx:products",
            "tìm tài liệu có price nằm giữa 10 và 50",
            "viết một tìm kiếm lai kết hợp văn bản và độ tương đồng vector"
          ]
        },
        timeseries: {
          name: "RedisTimeSeries",
          description: "Có sẵn khi module timeseries được tải.",
          prompts: [
            "liệt kê tất cả các khóa timeseries",
            "thêm một điểm dữ liệu vào temp:room1",
            "lấy dải temp:room1 từ hôm qua đến bây giờ",
            "lấy multi-range theo nhãn sensor=temp",
            "tạo 100 điểm dữ liệu dạng sóng sin cho temp:room1",
            "hiển thị retention và nhãn cho temp:room1"
          ]
        },
        bloom: {
          name: "RedisBloom (Bloom / Cuckoo / Top-K / CMS / T-Digest)",
          description: "Có sẵn khi module bf được tải.",
          prompts: [
            "kiểm tra xem mục foo có trong bloom filter spam:ips không",
            "thêm các mục vào bloom filter spam:ips",
            "tạo một top-K tên popular với K=10",
            "truy vấn count-min sketch traffic cho khóa /home",
            "thêm giá trị vào t-digest và lấy phân vị thứ 95",
            "hiển thị thông tin cho bloom filter spam:ips"
          ]
        },
        vectorSet: {
          name: "VectorSet (Redis 8+)",
          description: "Có sẵn khi phát hiện Redis 8+ (kiểu VECTORSET gốc).",
          prompts: [
            "thêm một vector vào embeddings",
            "tìm 10 vector tương tự nhất với một vector truy vấn",
            "hiển thị số chiều và số lượng của vectorset embeddings",
            "xóa một phần tử khỏi vectorset embeddings",
            "tìm kiếm theo tên phần tử với VSIM"
          ]
        },
        redis8: {
          name: "Tính năng Redis 8+",
          description: "Hiển thị khi phát hiện Redis 8+.",
          prompts: [
            "đặt TTL cho trường hash với HEXPIRE",
            "lấy digest của một giá trị chuỗi",
            "chạy tìm kiếm lai toàn văn + vector (FT.HYBRID)",
            "đặt nhiều khóa với thời hạn dùng chung bằng MSETEX",
            "xóa một bản ghi stream với consumer group (XDELEX)",
            "hiển thị slot-stats cluster cho 10 slot hàng đầu"
          ]
        },
        scripting: {
          name: "Viết script",
          description: "Tạo script Lua / EVAL từ mô tả bằng ngôn ngữ tự nhiên.",
          prompts: [
            "viết một script nguyên tử tăng counter X chỉ khi Y > 5",
            "tạo 100 khóa ngẫu nhiên bằng Lua",
            "chuyển pipeline shell này thành một EVAL duy nhất: keys user:* | GET | grep inactive | DEL",
            "chuyển một thao tác hàng loạt sang Lua để an toàn cho cluster",
            "cập nhật kiểu check-and-set trong một lệnh Lua duy nhất",
            "duyệt qua một hash và xóa các trường khớp mẫu"
          ]
        },
        cluster: {
          name: "Cluster",
          description: "Chỉ hiển thị trong chế độ cluster.",
          prompts: [
            "hiển thị thông tin cluster",
            "liệt kê các node của cluster",
            "hiển thị 10 slot hàng đầu theo số lượng khóa",
            "hiển thị 10 slot hàng đầu theo bộ nhớ",
            "master nào sở hữu slot 5000?"
          ]
        },
        acl: {
          name: "ACL (Redis 6+)",
          description: "Kiểm tra người dùng kiểm soát truy cập và kết nối hiện tại.",
          prompts: [
            "tôi đang kết nối với tư cách ai?",
            "liệt kê tất cả người dùng ACL",
            "tôi có những quyền gì?",
            "hiển thị các quy tắc của người dùng mặc định"
          ]
        },
        qna: {
          name: "Hỏi & Đáp chung",
          description: "Đặt câu hỏi về kiến thức Redis — không cần công cụ, chỉ cần trả lời.",
          prompts: [
            "ZADD là gì?",
            "cluster failover hoạt động như thế nào?",
            "giải thích SCAN so với KEYS",
            "khi nào nên dùng EVAL thay vì nhiều lệnh?",
            "các tùy chọn lưu trữ bền vững của Redis là gì?",
            "sự khác biệt giữa RDB và AOF là gì?",
            "Redis Sentinel quyết định master mới như thế nào?",
            "giải thích hash tag trong chế độ cluster"
          ]
        },
        translate: {
          name: "Ngôn ngữ tự nhiên → Lệnh Redis",
          description: "Mô tả điều bạn muốn bằng tiếng Việt đơn giản (hoặc bất kỳ ngôn ngữ nào trong 54 ngôn ngữ); AI sẽ viết lệnh Redis.",
          prompts: [
            "xóa khóa user:42",
            "đổi tên khóa foo thành bar",
            "cho khóa session:abc hết hạn sau 10 giây",
            "sao chép khóa source sang destination",
            "tăng counter visits thêm 5",
            "đặt khóa greeting thành \"hello\" trong 1 giờ",
            "cho tôi xem 10 khóa được truy cập thường xuyên nhất",
            "xóa tất cả khóa khớp temp:*"
          ]
        }
      }
    },
    ssh: {
      on: "SSH đang bật",
      off: "Tắt SSH",
      sshHost: "Máy chủ SSH",
      sshPort: "Cổng SSH",
      sshUsername: "Tên người dùng SSH",
      sshPassword: "Mật khẩu SSH",
      sshPrivateKey: "Khóa riêng SSH"
    },
    isBuffer: opts => `[đối tượng ArrayBuffer] có nghĩa là giá trị là dữ liệu nhị phân hoặc giá trị lớn hơn ${opts.maxValueAsBuffer}`,
    streamValue: `Trường luồng và giá trị là một oneliner. Ví dụ: field1 value1 "field 2" "value 2"`,
    streamTimestampId: `'*' có nghĩa là được tạo tự động hoặc thông số kỹ thuật là <millisecondsTime>-<sequenceNumber>`,
    unableToLoadKey: ({
      key
    }) => {
      return `Không thể tải khóa này: ${key}. Có thể, chìa khóa đã bị xóa. Lỗi chính xác là trong bảng điều khiển.`;
    },
    bigJson: "Đối tượng JSON này có dung lượng trên 10 kb, vì vậy hãy đảm bảo bạn biết mình đang làm gì vì một số chức năng có thể hiển thị chậm.",
    addNode: "Thêm nút",
    validateJson: "Xác thực JSON",
    reducedFunction: `Giảm chức năng`,
    tooManyKeys: opts => {
      return `Đối với các chức năng tối đa đầy đủ, tổng số phím được phép là ${opts.maxLightKeysCount} đếm. Cơ sở dữ liệu này có tổng số khóa được phép ${opts.count}. Việc sắp xếp khóa và thông tin cây ưa thích bổ sung bị vô hiệu hóa. Việc tìm kiếm chỉ diễn ra trên máy chủ thay vì tìm kiếm trên máy khách.`;
    },
    redisCommandNotFound: "Không tìm thấy lệnh Redis nào khớp ...",
    treeKeyStore: `Việc sắp xếp (so sánh tự nhiên) được thực thi trên máy khách hay còn gọi là trình duyệt, có nghĩa là nó có một hình phạt đối với các tập hợp lớn, chẳng hạn như hơn 10 nghìn khóa, nó có thể tốn thêm một chút thời gian để hiển thị trang. Không có cách sắp xếp khóa nào trong Redis, chỉ như thế này.`,
    socketIoTimeout: options => {
      return `Socket.IO đã hết thời gian chờ cho yêu cầu này (tối đa ${options.timeout / 1000} giây)...`;
    },
    resizerInfo: options => {
      return `Chiều rộng tối thiểu của bảng bên trái hoặc bên phải là ${options.width}px`;
    },
    jsonViewNotParsable: "Giá trị này không thể phân tích được JSON  ",
    ttlTitle: "Đặt TTL trong vài giây",
    passwordSecure: "Mật khẩu có thể trống nhưng vẫn hiển thị các ký tự, đây là một tính năng bảo mật.",
    aclAuthHint: "Sử dụng tên người dùng và mật khẩu Redis ACL để xác thực. Để trống cho người dùng mặc định không có mật khẩu.",
    tlsWithoutCert: "Kích hoạt TLS mà không cần chứng chỉ bổ sung",
    tlsRejectUnauthorized: "Từ chối chứng chỉ trái phép",
    tlsSecure: "Nếu bạn thấy cấu hình TLS bắt đầu bằng P3X hoặc tất cả cài đặt TLS trông giống nhau thì đó là một tính năng bảo mật. Để thay đổi cài đặt, chỉ cần thay thế các cài đặt này bằng trống hoặc cài đặt khác và chúng sẽ được lưu. Nếu bạn không thay đổi cài đặt TLS, cài đặt sẽ được giữ nguyên trên máy chủ.",
    treeSeparatorEmpty: "Nếu dấu tách cây trống, cây sẽ không có nút lồng nhau, chỉ có một danh sách thuần túy",
    treeSeparatorEmptyNote: "Không có nút lồng nhau, chỉ có một danh sách thuần túy",
    welcomeConsole: "Chào mừng bạn đến với Bảng điều khiển Redis",
    welcomeConsoleInfo: "SHIFT + Lịch sử con trỏ LÊN hoặc XUỐNG được bật",
    redisListIndexInfo: "Trống để nối thêm, -1 để thêm vào trước hoặc lưu nó vào vị trí hiển thị.",
    console: "Bảng điều khiển",
    connectiondAdd: "Thêm kết nối",
    connectiondEdit: "Chỉnh sửa kết nối",
    connectiondView: "Xem kết nối",
    connections: "Kết nối",
    keysSort: {
      on: "Sắp xếp khóa đang bật",
      off: "Sắp xếp chìa khóa"
    },
    cluster: {
      on: "Cluster đang bật",
      off: "Tắt Cluster"
    },
    sentinel: {
      on: "Sentinel đang bật",
      off: "Tắt Sentinel",
      name: "Tên Sentinel"
    },
    readonly: {
      on: "Bật chế độ chỉ đọc",
      off: "Tắt chế độ chỉ đọc"
    },
    theme: {
      light: "Ánh sáng",
      dark: "Doanh nghiệp đen tối",
      darkNeu: "Tối",
      darkoBluo: "màu xanh đậm",
      enterprise: "Doanh nghiệp",
      redis: "Redis",
      matrix: "Ma trận"
    },
    connected: opts => {
      return `Đã kết nối: ${opts.name}`;
    },
    tree: "Cây",
    askAuth: "Yêu cầu ủy quyền",
    keyboardShortcuts: "Keyboard Shortcuts",
    about: "About",
    supportedLanguages: "Supported Languages",
    version: "Version",
    redisVersion: "Redis Version",
    modules: "Mô-đun",
    shortcutRefresh: "Refresh",
    shortcutSearch: "Focus Search",
    shortcutNewKey: "New Key",
    shortcutDisconnect: "Ngắt kết nối",
    themeAuto: "Auto (system)",
    languageAuto: "Auto (system)",
    shortcutCommandPalette: "Bảng lệnh",
    commandPalette: "Bảng lệnh",
    noResults: "Không có kết quả",
    redisCommandsReference: "Lệnh Redis",
    ungrouped: "Không nhóm",
    grouped: "Grouped",
    connectFirst: "Kết nối với máy chủ Redis trước",
    searchLanguage: "Tìm kiếm ngôn ngữ...",
    exportProgress: "Đang xuất khóa...",
    importProgress: "Đang nhập khóa...",
    importPreview: "Xem trước",
    importOverwrite: "Ghi đè",
    importSkip: "Bỏ qua",
    importConflict: "Nếu khóa đã tồn tại:",
    noKeysToExport: "Không có khóa để xuất",
    time: "Thời gian",
    type: "Loại",
    format: "Định dạng",
    loading: "Đang tải...",
    autoRefresh: "Tự động",
    exportSearchHint: "Chỉ xuất các khóa khớp với tìm kiếm hiện tại",
    importSearchHint: "Nhập áp dụng cho toàn bộ cơ sở dữ liệu, không chỉ kết quả tìm kiếm",
    deleteSearchHint: "Xóa tất cả các khóa khớp với tìm kiếm hiện tại trên máy chủ",
    deletingSearchKeys: "Đang xóa các khóa khớp...",
    importNoKeys: "Không tìm thấy khóa trong tệp",
    desktopNotifications: "Thông báo trên máy tính",
    desktopNotificationsEnabled: "Bật thông báo trên máy tính",
    desktopNotificationsInfo: "Nhận thông báo hệ điều hành cho các ngắt kết nối và kết nối lại Redis khi ứng dụng không được focus."
  },
  status: {
    dataCopied: "Dữ liệu nằm trong clipboard",
    exportDone: "Xuất hoàn tất",
    deletedSearchKeys: (opts) => `Đã xóa ${opts.count} khóa`,
    indexCreated: "Đã tạo chỉ mục",
    indexDropped: "Đã xóa chỉ mục",
    importDone: (opts) => `Nhập hoàn tất: ${opts.created} đã tạo, ${opts.skipped} đã bỏ qua, ${opts.errors} lỗi`,
    nodeRemoved: "Đã xóa nút",
    keyIsNotExisting: "Khóa này có thể đã bị xóa hoặc hết hạn.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "Không có chìa khóa";
      } else if (opts.keyCount === 1) {
        return "1 chìa khóa";
      } else {
        return `${opts.keyCount} phím`;
      }
    },
    treeExpandAll: "Mở rộng tất cả các lá cây. Hoạt động này có thể tốn kém và có thể mất thời gian...",
    noRedisKeys: "Không có chìa khóa trong cơ sở dữ liệu này.",
    redisConnected: "Redis đã kết nối thành công",
    reverted: "\u0110\u00e3 ho\u00e0n t\u00e1c",
    reloadingDataInfo: "Đang tải lại thông tin dữ liệu Redis",
    added: "Đã thêm",
    saved: "Đã cập nhật",
    cancelled: "Đã hủy",
    deleted: "Đã xóa",
    savedRedis: "Dữ liệu Redis được lưu",
    redisDisconnected: opts => {
      return `Kết nối hiện tại có lỗi: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `Chỉ mục db được đặt thành ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `Khóa cây đã bị xóa (${opts.key}).`;
    },
    deletedKey: opts => {
      return `Chìa khóa đã bị xóa (${opts.key}).`;
    },
    renamedKey: "Chìa khóa này đã được đổi tên",
    ttlChanged: "TTL của khóa này đã được thay đổi",
    notInteger: "Dữ liệu đầu vào này không phải là số nguyên",
    persisted: "Chìa khóa này được tồn tại mãi mãi",
    set: "Khóa được đặt/thêm",
    connectionRestored: "Kết nối đã được khôi phục",
    socketDisconnected: "Đã ngắt kết nối",
    socketError: "Lỗi kết nối",
    deletedHashKey: "Khóa hash đã xóa",
    deletedSetMember: "Thành viên set đã xóa",
    deletedListElement: "Phần tử danh sách đã xóa",
    deletedZSetMember: "Thành viên sorted set đã xóa",
    deletedStreamTimestamp: "Mục stream đã xóa",
  },
  code: {
    "delete-connection": "Kết nối này đã bị xóa nên bạn bị ngắt kết nối với phiên bản Redis này.",
    "save-connection": "Kết nối này đã thay đổi nên bạn bị ngắt kết nối với phiên bản Redis này. Bạn có thể kết nối lại.",
    "readonly-connections": "Các kết nối thêm/lưu/xóa chỉ ở chế độ đọc!",
    "readonly-connection-mode": "Kết nối này là chế độ chỉ đọc!",
    "list-out-of-bounds": "Chỉ mục danh sách này nằm ngoài giới hạn",
    "invalid-json-value": "Giá trị không hợp lệ JSON.",
    "http_auth_required": "Yêu cầu ủy quyền: vui lòng xác thực bằng HTTP Basic Auth và tải lại.",
    "auto-connection-failed": "Có thể kết nối đã bị xóa và kết nối tự động không thành công vì điều này.",
    invalid_console_command: "Lệnh này không hoạt động thông qua GUI.",
    "AI_DISABLED": "AI đã bị tắt. Bật nó trong Cài đặt AI.",
    "AI_PROMPT_REQUIRED": "Yêu cầu AI là bắt buộc.",
    "GROQ_API_KEY_READONLY": "Khóa Groq API chỉ đọc và không thể sửa đổi.",
    "blocked_api_access": "Gói Groq API của bạn không cho phép truy cập vào mô hình này. Vui lòng nâng cấp gói Groq hoặc sử dụng proxy network.corifeus.com.",
    "rate_limit": "Đã đạt giới hạn tốc độ AI. Thử lại sau hoặc sử dụng khóa Groq API của riêng bạn trong Cài đặt."
  },
  form: {
    error: {
      required: "Bắt buộc",
      port: "Cổng nằm trong khoảng 1-65535",
      invalid: "Biểu mẫu không hợp lệ"
    },
    connection: {
      label: {
        name: "Tên",
        group: "Group",
        host: "Tên máy chủ",
        port: "Cảng",
        password: "Mật khẩu",
        username: "Tên người dùng"
      }
    },
    treeSettings: {
      maxValueDisplay: "Độ dài chuỗi hiển thị giá trị tối đa",
      maxValueDisplayInfo: "Nếu được đặt thành 0, hiển thị giá trị đầy đủ. Nếu lớn hơn 0, hãy cắt bớt độ dài này. Nếu -1: đối với chuỗi, ẩn giá trị cho đến khi chỉnh sửa; đối với các loại khác, hiển thị nội dung đầy đủ.",
      maxKeys: "Số lượng phím tối đa",
      maxKeysInfo: "Để GUI không gặp sự cố, chúng tôi giới hạn số lượng khóa tối đa.",
      keyCount: (opts) => {
        return `Số lượng phím: ${opts?.keyCount ?? 0}`;
      },
      label: {
        animation: "Sử dụng hoạt ảnh",
        noAnimation: "Không có hình ảnh động",
        undoEnabled: "Ho\u00e0n t\u00e1c \u0111\u00e3 b\u1eadt",
        undoDisabled: "Ho\u00e0n t\u00e1c \u0111\u00e3 t\u1eaft",
        diffEnabled: "Hi\u1ec3n th\u1ecb diff tr\u01b0\u1edbc khi l\u01b0u",
        diffDisabled: "Diff tr\u01b0\u1edbc khi l\u01b0u \u0111\u00e3 t\u1eaft",
        jsonFormatTwoSpace: "Định dạng JSON có 2 dấu cách",
        jsonFormatFourSpace: "Định dạng JSON có 4 dấu cách",
        formName: "Cài đặt Redis",
        searchModeClient: "Chế độ tìm kiếm khách hàng",
        searchModeServer: "Chế độ tìm kiếm máy chủ",
        searchModeStartsWith: "Tìm kiếm bằng chế độ bắt đầu",
        searchModeIncludes: "Tìm kiếm bao gồm chế độ"
      },
      undoHint: "Ho\u00e0n t\u00e1c ch\u1ec9 kh\u1ea3 d\u1ee5ng cho lo\u1ea1i kh\u00f3a string v\u00e0 JSON",
      field: {
        treeSeparator: "Tách cây",
        treeSeparatorSelector: "Bộ chọn tách cây",
        page: "Số lần phân trang cây",
        keyPageCount: "Số lần phân trang chính",
        keysSort: "Sắp xếp các phím",
        searchMode: "Chế độ tìm kiếm",
        searchModeStartsWith: "Tìm kiếm bắt đầu bằng / bao gồm"
      },
      error: {
        keyPageCount: "Số trang chính phải là số nguyên trong khoảng từ 5 - 100",
        page: "Số trang phải là số nguyên trong khoảng 10 - 5000",
        maxValueDisplay: "Giá trị hiển thị tối đa phải là số nguyên trong khoảng từ -1 đến 32768",
        maxKeys: "Giá trị số lượng khóa tối đa phải là số nguyên trong khoảng từ 100 đến 100000"
      }
    },
    key: {
      label: {
        formName: {
          add: "Thêm khóa Redis mới",
          edit: "Chỉnh sửa khóa Redis",
          append: "Thêm vào khóa Redis hiện có"
        }
      },
      field: {
        streamTimestamp: "Dấu thời gian",
        key: "Chìa khóa",
        type: "Loại",
        index: "chỉ mục",
        hashKey: "Khóa băm",
        score: "Điểm",
        value: "Giá trị",
        errorRate: "Tỷ lệ lỗi",
        capacity: "Dung lượng",
        topk: "Top K",
        width: "Chiều rộng",
        depth: "Chiều sâu",
        decay: "Suy giảm",
        compression: "Nén",
        increment: "Gia tăng",
        item: "Mục",
        vectorValues: "Giá trị vector (phân tách bằng dấu phẩy)",
        element: "Tên phần tử",
      },
      error: {
        streamTimestamp: "Dấu thời gian là bắt buộc, ở định dạng Redis hoặc ở dạng *",
        key: "Chìa khóa ít nhất là một ký tự",
        hashKey: "Khóa bảng băm có ít nhất một ký tự",
        score: "Điểm số đã sắp xếp là bắt buộc",
        value: "Giá trị là bắt buộc",
        errorRate: "Tỷ lệ lỗi phải nằm trong khoảng từ 0 đến 1 (vd. 0.01)",
        capacity: "Dung lượng phải là số nguyên dương",
        topk: "Top K phải là số nguyên dương",
        width: "Chiều rộng phải là số nguyên dương",
        depth: "Chiều sâu phải là số nguyên dương",
        item: "Mục là bắt buộc"
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
      title: "Tìm kiếm",
      index: "Chỉ mục",
      query: "Truy vấn",
      results: "Kết quả",
      noIndex: "Không tìm thấy chỉ mục",
      createIndex: "Tạo chỉ mục",
      dropIndex: "Xóa chỉ mục",
      indexInfo: "Thông tin chỉ mục",
      indexName: "Tên chỉ mục",
      prefix: "Tiền tố khóa (tùy chọn)",
      fieldName: "Tên trường",
      hybridMode: "Tìm kiếm kết hợp (FT.HYBRID)",
      vectorField: "Trường vector",
      vectorValues: "Giá trị vector",
    },
    monitor: {
      title: "Giám sát",
      memory: "Bộ nhớ",
      opsPerSec: "Thao tác/giây",
      clients: "Kết nối",
      blocked: "Bị chặn",
      hitsMisses: "Tỷ lệ trúng",
      networkIo: "Mạng I/O",
      slowLog: "Nhật ký chậm",
      noSlowQueries: "Không có truy vấn chậm nào được ghi lại.",
      confirmSlowLogReset: "Bạn có chắc chắn muốn đặt lại nhật ký chậm không?",
      slowLogResetDone: "Nhật ký chậm đã được đặt lại.",
      totalCommands: "Tổng",
      expired: "Hết hạn",
      evicted: "Bị loại",
      clientList: "Danh sách kết nối",
      topKeys: "Khóa lớn nhất theo bộ nhớ",
      killClient: "Ngắt kết nối",
      clientKilled: "Kết nối đã bị ngắt",
      confirmKillClient: "Bạn có chắc muốn ngắt kết nối này?",
      noKeys: "Không có khóa",
      rss: "RSS",
      peak: "Đỉnh",
      fragmentation: "Phân Mảnh",
      hitsAndMisses: "Trúng / Trượt",
      noClients: "Không có kết nối",
      slotStats: "Thống kê slot cụm",
      serverInfo: "Thông tin máy chủ",
      os: "Hệ điều hành",
      port: "Cổng mạng",
      pid: "ID tiến trình",
      configFile: "Tệp cấu hình",
      uptime: "Thời gian hoạt động",
      keyspace: "Không gian khóa Redis",
      keys: "Phím Redis",
      expires: "Hết hạn",
      noKeyspace: "Không có khóa",
      persistence: "Tính kiên trì của dữ liệu",
      rdbLastSave: "Lưu lần cuối RDB",
      rdbStatus: "Trạng thái RDB",
      rdbChanges: "Những thay đổi kể từ lần lưu cuối cùng",
      aofEnabled: "Đã bật AOF",
      aofSize: "Kích thước AOF",
      replication: "Bản sao Redis",
      role: "Vai trò sao chép",
      replicas: "Bản sao được kết nối",
      masterHost: "Máy chủ chính",
      linkStatus: "Trạng thái liên kết sao chép",
      cpu: "Sử dụng CPU",
      cpuSys: "Hệ thống",
      cpuUser: "người dùng",
      modules: "Đã tải mô-đun Redis",
      noModules: "Không có mô-đun Redis nào được tải",
      clusterSlotMap: "Bản đồ vị trí cụm Redis",
      slotRange: "Phạm vi khe cắm cụm",
      totalSlots: "Tổng số vị trí cụm",
      noClusterData: "Không có dữ liệu cụm Redis.",
    },
    analysis: {
      title: "Phân Tích Bộ Nhớ",
      runAnalysis: "Chạy Phân Tích",
      running: "Đang phân tích...",
      typeDistribution: "Phân Bố Loại",
      prefixMemory: "Bộ Nhớ theo Tiền Tố",
      topKeysByMemory: "Khóa Lớn Nhất theo Bộ Nhớ",
      expirationOverview: "Hết Hạn Khóa",
      memoryBreakdown: "Chi Tiết Bộ Nhớ",
      keysScanned: "Khóa Đã Quét",
      totalMemory: "Tổng Bộ Nhớ",
      rssMemory: "Bộ Nhớ RSS",
      peakMemory: "Bộ Nhớ Đỉnh",
      luaMemory: "Bộ Nhớ Lua",
      overheadMemory: "Chi Phí Phụ",
      datasetMemory: "Tập Dữ Liệu",
      fragmentation: "Phân Mảnh",
      allocator: "Bộ Cấp Phát",
      withTTL: "Có TTL",
      persistent: "Vĩnh Viễn",
      avgTTL: "TTL Trung Bình",
      prefix: "Tiền Tố",
      keyCount: "Số Lượng Khóa",
      memoryUsage: "Sử Dụng Bộ Nhớ",
      noPrefix: "(không có tiền tố)",
      topN: "Top N",
      maxScanKeys: "Tối Đa Khóa Quét",
      type: "Loại",
      noData: "Không có dữ liệu. Nhấp Chạy Phân Tích để bắt đầu.",
      exportAll: "Xuất Tất Cả",
      memoryDoctor: "Memory Doctor",
      doctorNoData: "Nhấp vào Làm mới để chạy chẩn đoán Memory Doctor.",
    },
    acl: {
      title: "Người dùng ACL",
      loadUsers: "Tải người dùng",
      loading: "Đang tải...",
      username: "Tên người dùng",
      status: "Trạng thái",
      enabled: "Đã bật",
      disabled: "Đã tắt",
      commands: "Lệnh",
      commandsHint: "ví dụ: +@all or +@read -@dangerous",
      keys: "Mẫu khóa Redis",
      keysHint: "ví dụ: ~* or ~user:*",
      channels: "Kênh Pub/Sub",
      channelsHint: "ví dụ: &* or &notifications:*",
      password: "Mật khẩu",
      noPassword: "Không có mật khẩu (nopass)",
      passwordHint: "Để trống để giữ mật khẩu hiện tại",
      currentUser: "hiện tại",
      createUser: "Tạo người dùng",
      editUser: "Chỉnh sửa người dùng",
      deleteUser: "Xóa",
      confirmDelete: "Bạn có chắc chắn muốn xóa người dùng ACL không?",
      userDeleted: "Người dùng ACL đã bị xóa.",
      userSaved: "Người dùng ACL đã được lưu.",
      cannotDeleteDefault: "Không thể xóa người dùng mặc định.",
      cannotDeleteSelf: "Không thể xóa người dùng hiện đang kết nối.",
      noUsers: "ACL yêu cầu Redis 6.0+.",
      groupCommon: "Chung",
      groupDataTypes: "Kiểu dữ liệu",
      groupOperations: "Hoạt động",
      rules: "Quy tắc",
      rulesHint: "Mã thông báo được phân tách bằng dấu cách (ví dụ on >password +@all ~* &*)",
      defaultUserWarning: "Thận trọng: Việc sửa đổi người dùng mặc định có thể khóa tất cả các kết nối. Nếu điều này xảy ra, bạn sẽ cần phải khởi động lại Redis hoặc sử dụng redis-cli để khôi phục quyền truy cập.",
    },
    overview: {
      noConnected: "Không có kết nối với Redis.",
      overviewClients: "Liệt kê các kết nối theo số lượng khách hàng",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "1 khách hàng";
        }
        return `${opt.length} khách hàng`;
      }
    },
    key: {
      label: {
        key: "Chìa khóa",
        encoding: "Mã hóa",
        compression: "Nén",
        aiRateLimited: "Đã đạt giới hạn yêu cầu AI. Thử lại sau hoặc sử dụng khóa API Groq của riêng bạn trong Cài đặt.",
        aiError: "Truy vấn AI thất bại",
        length: "Kích thước",
        ttl: "TTL",
        ttlTitle: "Thời gian để sống",
        type: "Loại",
        ttlNotExpire: "không hết hạn",
        lengthString: "byte",
        lengthItem: "đồ vật",
        actions: "hành động"
      },
      list: {
        table: {
          index: "chỉ mục",
          value: "Giá trị"
        }
      },
      hash: {
        table: {
          hashkey: "Mã băm",
          value: "Giá trị"
        }
      },
      set: {
        table: {
          value: "Thành viên"
        }
      },
      zset: {
        table: {
          value: "Thành viên",
          score: "Điểm"
        }
      },
      stream: {
        table: {
          timestamp: "ID dấu thời gian",
          field: "trường",
          value: "Giá trị"
        }
      },
      timeseries: {
        chart: "Biểu đồ",
        info: "Thông tin",
        addPoint: "Thêm điểm dữ liệu",
        from: "Từ (ms hoặc -)",
        to: "Đến (ms hoặc +)",
        aggregation: "Tổng hợp",
        timeBucket: "Nhóm (ms)",
        none: "Không có",
        dataPoints: "điểm dữ liệu",
        labels: "Nhãn",
        rules: "Quy tắc",
        retention: "Lưu giữ",
        timestamp: "Dấu thời gian",
        value: "Giá trị",
        retentionHint: "0 = không hết hạn, hoặc mili giây",
        duplicatePolicy: "Chính sách trùng lặp",
        labelsHint: "khóa1 giá_trị1 khóa2 giá_trị2",
        timestampHint: "'*' nghĩa là tự động tạo, hoặc dấu thời gian mili giây",
        editAllHint: "Một điểm dữ liệu mỗi dòng: dấu_thời_gian giá_trị (dấu thời gian có thể là * để tự động)",
        autoSpread: "Khoảng cách phân tán tự động *",
        formula: "Công thức",
        formulaLinear: "Tuyến tính",
        formulaRandom: "Ngẫu nhiên",
        formulaSawtooth: "Răng cưa",
        formulaPoints: "Điểm",
        formulaAmplitude: "Biên độ",
        formulaOffset: "Độ lệch",
        generate: "Tạo",
        exportChart: "Xuất PNG",
        overlay: "Chồng lấp khóa",
        overlayHint: "Các khóa phân cách bằng dấu phẩy",
        mrangeFilter: "Bộ lọc nhãn",
        bulkMode: "Tạo hàng loạt",
        mrangeHint: "vd. sensor=temp"
      },
      probabilistic: {
        info: "Thông tin",
        addItem: "Thêm mục",
        checkItem: "Kiểm tra mục",
        item: "Mục",
        exists: "Tồn tại",
        doesNotExist: "Không tồn tại",
        topkList: "Mục hàng đầu",
        topkCount: "Số lượng",
        queryCount: "Số lượng truy vấn",
        queryResult: "Kết quả truy vấn",
        addedSuccessfully: "Mục đã được thêm thành công",
        deletedSuccessfully: "Mục đã được xóa thành công",
        quantile: "Phân vị",
        quantileResult: "Kết quả",
        noItems: "Không có mục để hiển thị",
        resetConfirm: "Đặt lại tất cả dữ liệu trong T-Digest này?"
      },
      vectorset: {
        info: "Thông tin",
        elements: "Phần tử",
        similarity: "Tìm kiếm tương đồng",
        searchByElement: "Tìm theo phần tử",
        searchByVector: "Tìm theo vector",
        vectorValues: "Giá trị vector",
        element: "Phần tử",
        score: "Điểm",
        count: "Số lượng",
        addElement: "Thêm phần tử",
        attributes: "Thuộc tính",
        noAttributes: "Không có thuộc tính",
        dimensions: "Chiều",
        removeConfirm: "Xóa phần tử này khỏi VectorSet?",
        noElements: "Không có phần tử",
        filter: "Bộ lọc",
        searchComplete: "Tìm kiếm hoàn tất",
      }
    },
    treeControls: {
      settings: "Cài đặt cây",
      expandAll: "Mở rộng tất cả",
      collapseAll: "Thu gọn tất cả",
      level: "Cấp",
      search: {
        search: "Tìm kiếm trong các phím",
        clear: "Xóa tìm kiếm hiện tại để đặt trống",
        placeholderClient: "Tìm kiếm phía khách hàng",
        placeholderServer: "Phía máy chủ tìm kiếm",
        info: (opts) => "Tìm kiếm phía máy khách nghĩa là nó khớp với văn bản trong ô tìm kiếm. Tìm kiếm phía máy chủ nghĩa là nó giống như tìm trong các mẫu khóa dạng *{search-text}*. Với các tập kết quả lớn, nên dùng tìm kiếm phía máy chủ. Với các tập nhỏ hơn, nên dùng chế độ tìm kiếm phía máy khách." + ` Nếu số lượng khóa vượt quá ${opts?.maxLightKeysCount ?? 110000}, bạn chỉ có thể tìm kiếm ở phía máy chủ.`,
        largeSetInfo: "Trong một tập hợp lớn, tìm kiếm phía máy khách bị vô hiệu hóa. vì vậy hiện tại chỉ có thể tìm kiếm phía máy chủ.",
        infoDetails: "Để tìm hiểu cách hoạt động của tìm kiếm, vui lòng kiểm tra cài đặt"
      },
      pager: {
        next: "Tiếp theo",
        prev: "trước đó",
        first: "đầu tiên",
        last: "Cuối cùng"
      }
    }
  },
  time: {
    years: "năm",
    months: "tháng",
    days: "ngày",
    year: "năm",
    month: "tháng",
    day: "ngày",
    second: "giây",
    seconds: "giây",
    minute: "phút",
    minutes: "phút",
    hour: "giờ",
    hours: "giờ"
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
    bloom: "Bloom bộ lọc",
    cuckoo: "Cuckoo bộ lọc",
    topk: "Top-K",
    cms: "Count-Min Sketch",
    tdigest: "T-Digest",
    vectorset: "VectorSet",
  },
  promo: {
    title: "Trợ lý Mạng AI",
    description: "Khám phá Trợ lý Mạng AI miễn phí của chúng tôi tại network.corifeus.com — phân tích tên miền, IP, bản ghi DNS, chứng chỉ SSL, bảo mật email và hạ tầng mạng. Được hỗ trợ bởi AI để cho kết quả tức thì và toàn diện.",
    disclaimer: "Khuyến nghị này chỉ hiển thị trên trang demo và sẽ không xuất hiện trong các bản triển khai Docker, Electron hoặc ứng dụng web.",
    toastMessage: "Hãy thử Trợ lý Mạng AI miễn phí của chúng tôi tại network.corifeus.com — phân tích tên miền, DNS, SSL và hơn thế nữa!",
    visit: "Truy cập network.corifeus.com",
  }
};
module.exports = strings;
