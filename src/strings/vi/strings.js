const strings = {
  error: {
    cleared_license: "Đã xóa giấy phép",
    invalid_license: "Giấy phép không hợp lệ",
    license_max_devices_reached: "Đã đạt đến số lượng thiết bị tối đa",
    license_readonly: "Giấy phép chỉ có thể được thay đổi từ thiết bị đầu cuối máy chủ.",
    server_error: "Lỗi máy chủ, vui lòng thử lại"
  },
  title: {
    donate: "Đóng góp",
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
    threads: "Luồng",
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
    socketioConnectError: "Socket.IO không kết nối được với máy chủ, bạn có thể tải lại và thử tự khắc phục lỗi kết nối, máy khách không biết tự giải quyết.",
    socketioAuthRequired: "Cần có ủy quyền Socket.IO. Vui lòng xác thực bằng HTTP Basic Auth (tên người dùng/mật khẩu) và tải lại.",
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
    },
    license: {
      title: "Đặt giấy phép",
      textContent: "Nếu bạn muốn sử dụng các tính năng trả phí, vui lòng liên hệ support@corifeus.com để yêu cầu giấy phép. Giá là Pro 400 HUF/tháng (€1/tháng) hoặc 4.000 HUF/năm (€10/năm) và Enterprise 1.200 HUF/tháng (€3/tháng) hoặc 12.000 HUF/năm (€30/năm). Hàng năm là 10x hàng tháng. Với 27% VAT, tổng cộng là Pro 500 HUF/tháng (€1,27/tháng) hoặc 5.100 HUF/năm (€12,70/năm), Doanh nghiệp 1.500 HUF/tháng (€3,81/tháng) hoặc 15.200 HUF/năm (€38,10/năm). Xác thực giấy phép yêu cầu truy cập internet. Giấy phép mặc định bao gồm 5 chỗ. Nếu bạn cần thêm chỗ ngồi, hãy liên hệ với chúng tôi tại support@corifeus.com.",
      placeholder: "Mã cấp phép"
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
    importKeys: "Nhập khóa",
    saveWithFormatJson: "Lưu với định dạng",
    formatJson: "Định dạng Json",
    wrap: "Bọc",
    unwrap: "Mở gói",
    downloadJson: "Tải xuống JSON",
    pubsubMonitor: "Màn hình PubSub",
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
    license: "Đặt giấy phép",
    delete: "Xóa",
    remove: "Xóa",
    sure: "Chắc chắn rồi",
    testConnection: "Kiểm tra kết nối",
    getKey: "Đang tải khóa Redis và dữ liệu liên quan ...",
    jsonViewShow: "Hiển thị JSON",
    jsonViewEditor: "Chỉnh sửa JSON",
    quickConsole: "Bảng điều khiển nhanh",
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
    aiGroqApiKeyInvalid: "Invalid Groq API key",
    aiGroqApiKeyNotSet: "Chưa đặt (mặc định máy chủ)",
    aiEnabled: "AI đã bật",
    aiEnabledYes: "Có",
    aiEnabledNo: "Không",
    aiRouteViaNetwork: "Route via network.corifeus.com",
    aiRoutingDirect: "Queries go directly to Groq using your own API key, bypassing network.corifeus.com.",
    aiRoutingNetwork: "AI queries are routed through network.corifeus.com. If you have your own free Groq API key, you can turn off this switch to route directly to Groq without network.corifeus.com.",
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
    tlsWithoutCert: "Kích hoạt TLS mà không cần chứng chỉ bổ sung",
    tlsRejectUnauthorized: "Từ chối chứng chỉ trái phép",
    tlsSecure: "Nếu bạn thấy cấu hình TLS bắt đầu bằng P3X hoặc tất cả cài đặt TLS trông giống nhau thì đó là một tính năng bảo mật. Để thay đổi cài đặt, chỉ cần thay thế các cài đặt này bằng trống hoặc cài đặt khác và chúng sẽ được lưu. Nếu bạn không thay đổi cài đặt TLS, cài đặt sẽ được giữ nguyên trên máy chủ.",
    treeSeparatorEmpty: "Nếu dấu tách cây trống, cây sẽ không có nút l���ng nhau, chỉ có một danh sách thuần túy",
    treeSeparatorEmptyNote: "Không có nút lồng nhau, chỉ có một danh sách thuần túy",
    welcomeConsole: "Chào mừng bạn đến với Bảng điều khiển Redis",
    welcomeConsoleInfo: "Lịch sử con trỏ LÊN hoặc XUỐNG được bật",
    redisListIndexInfo: "Trống để nối thêm, -1 để thêm vào trước hoặc lưu nó vào vị trí hiển thị.",
    console: "Bảng điều khiển",
    connectiondAdd: "Thêm kết nối",
    connectiondEdit: "Chỉnh sửa kết nối",
    connectiondView: "Xem kết nối",
    connections: "Kết nối",
    licenseInfo: "Giấy phép",
    licenseEditable: "Giấy phép có thể chỉnh sửa",
    licenseEditableYes: "Có",
    licenseEditableNo: "Không",
    licenseTerminalOnly: "Giấy phép chỉ có thể được cấu hình từ thiết bị đầu cuối của máy chủ.",
    licenseTierPolicyTitle: "Chính sách cấp độ",
    licenseTierPolicyText: "Chỉ giao diện người dùng <h4>Free</h4>core Redis; không có đường hầm SSH, không có chế độ kết nối Chỉ đọc, không có Cluster/Sentinel, không Chỉnh sửa JSON/Tải lên nhị phân/Tải xuống nhị phân, không ReJSON.<br/><strong>Giá: 0 HUF/tháng (€0/tháng).</strong><br/><br/><h4>Pro</h4>SSH, chế độ kết nối chỉ đọc (bao gồm --readonly-connections/-r), Chỉnh sửa JSON, Tải lên nhị phân, Tải xuống nhị phân, ReJSON.<br/><strong>Giá cơ bản: 400 HUF/tháng (€1/tháng) hoặc 4.000 HUF/năm (€10/năm).</strong><br/><strong>Tổng cộng với 27% VAT: 500 HUF/tháng (€1,27/tháng) hoặc 5.100 HUF/năm (€12,70/năm).</strong><br/><br/><h4>Enterprise</h4>SSH đào hầm, Cluster và Sentinel, cộng thêm Chỉnh sửa JSON, Tải lên nhị phân, Tải xuống nhị phân, ReJSON; --readonly-connections/-r cũng hoạt động.<br/><strong>Giá cơ bản: 1.200 HUF/tháng (€3/tháng) hoặc 12.000 HUF/năm (€30/năm).</strong><br/><strong>Tổng cộng với 27% VAT: 1.500 HUF/tháng (€3,81/tháng) hoặc 15.200 HUF/năm (€38,10/năm).</strong><br/><br/><h4>YQuy tắc sớm</h4>YGiá ban đầu là 10 lần giá hàng tháng price.<br/><br/><h4>Seats</h4>Giấy phép mặc định bao gồm 5 chỗ. Nếu bạn cần thêm chỗ ngồi, hãy liên hệ với chúng tôi tại <a href='mailto:mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><br/><h4>Bản dùng thử Enterprise</h4>10 ngày miễn phí cho bất kỳ ai có một địa chỉ email thực hiện có (email không kiểm tra).<br/><hr/><h4>Thông tin thanh toán trong e-mail</h4>Tên, e-mail thanh toán, Mã quốc gia, Mã bưu chính, Thành phố, Địa chỉ, VAT ID (tùy chọn).<br/><br/><h4>Payment</h4>PayPal thanh toán chỉ có sẵn bằng HUF (forint); sau khi gửi tiền @ <a href='https://paypal.me/corifeus'>https://paypal.me/corifeus</a> tôi sẽ gửi hóa đơn cho bạn. Tất cả các khoản thanh toán đều không được hoàn lại.<br/><br/><h4>VAT</h4>VAT được thêm vào giá (27% trong Hungary).<br/><hr/><h4>Liên hệ</h4>Nếu bạn muốn gửi lời chào hoặc có thắc mắc, hãy liên hệ <a href='mailto:mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><hr/><h4>Ngôn ngữ</h4>Giao tiếp qua e-mail hóa đơn và giấy phép bằng tiếng Anh. Đơn vị tiền tệ của hóa đơn là HUF.<br/><hr/><h4>Note</h4>Xác thực giấy phép yêu cầu truy cập internet.",
    licenseState: "tiểu bang",
    licenseStateActive: "Đang hoạt động",
    licenseStateInactive: "Không hoạt động",
    licenseStateNoLicense: "Không có giấy phép",
    licenseKeyMasked: "Khóa đã lưu",
    licenseTier: "cấp",
    licenseValid: "hợp lệ",
    licenseStatus: "Trạng thái giấy phép",
    licenseReason: "Lý do",
    licenseCheckedAt: "Đã kiểm tra tại",
    licenseStartsAt: "Bắt đầu lúc",
    licenseExpiresAt: "Hết hạn vào lúc",
    licenseDaysLeft: "Số ngày còn lại",
    licenseMaxDevices: "Số thiết bị tối đa",
    licenseActiveDevices: "Thiết bị hoạt động",
    licenseActiveDevicesInfo: "Nếu thiết bị không còn được sử dụng nữa, chỗ ngồi của thiết bị đó sẽ tự động được giải phóng sau 75 phút.",
    licenseCustomerEmail: "Email khách hàng",
    licenseFeatures: "Tính năng",
    licenseFeaturesEmpty: "Không có tính năng bổ sung",
    licenseFeatureReadonlyMode: "Chế độ kết nối chỉ đọc",
    licenseFeatureReadonlyConnectionsFlag: "Kết nối chỉ đọc (--readonly-connections/-r)",
    licenseFeatureSsh: "Đường hầm SSH",
    licenseFeatureCluster: "Kết nối Cluster",
    licenseFeatureSentinel: "K���t nối Sentinel",
    licenseFeatureReJSON: "ReJSON (kiểu dữ liệu JSON)",
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
    proSshOnly: "SSH có sẵn ở phiên bản Pro hoặc Enterprise.",
    proReadonlyOnly: "Chế độ kết nối chỉ đọc có sẵn trong Pro hoặc Enterprise.",
    enterpriseClusterSentinelOnly: "Cluster và Sentinel chỉ có sẵn trong Enterprise.",
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
    shortcutCommandPalette: "Command Palette",
    commandPalette: "Command Palette",
    noResults: "No results",
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
    loading: "Đang tải...",
    autoRefresh: "Tự động",
    exportSearchHint: "Chỉ xuất các khóa khớp với tìm kiếm hiện tại",
    importSearchHint: "Nhập áp dụng cho toàn bộ cơ sở dữ liệu, không chỉ kết quả tìm kiếm",
    importNoKeys: "Không tìm thấy khóa trong tệp",
  },
  status: {
    dataCopied: "Dữ liệu nằm trong clipboard",
    licenseSaved: "Đã lưu giấy phép",
    exportDone: "Xuất hoàn tất",
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
    set: "Khóa được đặt/thêm"
  },
  code: {
    "delete-connection": "Kết nối này đã bị xóa nên bạn bị ngắt kết nối với phiên bản Redis này.",
    "save-connection": "Kết nối này đã thay đổi nên bạn bị ngắt kết nối với phiên bản Redis này. Bạn có thể kết nối lại.",
    "readonly-connections": "Các kết nối thêm/lưu/xóa chỉ ở chế độ đọc!",
    "readonly-connection-mode": "Kết nối này là chế độ chỉ đọc!",
    "list-out-of-bounds": "Chỉ mục danh sách này nằm ngoài giới hạn",
    "donation-ware-feature": "Tính năng này có trong phiên bản quyên góp.",
    "feature-pro-readonly-required": "Chế độ kết nối chỉ đọc yêu cầu giấy phép Pro hoặc Enterprise.",
    "feature-pro-ssh-required": "Đường hầm SSH yêu cầu giấy phép Pro hoặc Enterprise.",
    "feature-enterprise-cluster-sentinel-required": "Cluster và Sentinel yêu cầu giấy phép Doanh nghiệp.",
    "feature-pro-json-binary-required": "Chỉnh sửa JSON, Tải lên nhị phân và Tải xuống nhị phân yêu cầu giấy phép Pro hoặc Enterprise.",
    "feature-pro-rejson-required": "ReJSON (loại dữ liệu JSON) yêu cầu giấy phép Pro hoặc Enterprise.",
    "invalid-json-value": "Giá trị không hợp lệ JSON.",
    "http_auth_required": "Yêu cầu ủy quyền: vui lòng xác thực bằng HTTP Basic Auth và tải lại.",
    "auto-connection-failed": "Có thể kết nối đã bị xóa và kết nối tự động không thành công vì điều này.",
    invalid_console_command: "Lệnh này không hoạt động thông qua GUI."
  },
  licenseReason: {
    LICENSE_VALID: "Giấy phép có hiệu lực",
    LICENSE_INVALID: "Giấy phép không hợp lệ",
    LICENSE_MISSING: "Không có mã cấp phép nào được đặt",
    LICENSE_DISABLED: "Giấy phép bị vô hiệu hóa trong cấu hình máy chủ",
    LICENSE_NOT_FOUND: "Không tìm thấy giấy phép",
    LICENSE_EXPIRED: "Giấy phép đã hết hạn",
    LICENSE_CLEARED: "Khóa cấp phép đã bị xóa",
    LICENSE_MAX_DEVICES_REACHED: "Đã đạt đến số lượng thiết bị tối đa",
    PRODUCT_MISMATCH: "Sản phẩm giấy phép không phù hợp"
  },
  licenseStatusValue: {
    active: "Đang hoạt động",
    deleted: "Đã xóa",
    all: "Tất cả",
    expired: "Đã hết hạn",
    missing: "Thiếu",
    inactive: "Không hoạt động"
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
      keyCount: () => {
        return `Số lượng phím: ${p3xr.state.keysRaw.length}`;
      },
      label: {
        animation: "Sử dụng hoạt ảnh",
        noAnimation: "Không có hình ảnh động",
        jsonFormatTwoSpace: "Định dạng JSON có 2 dấu cách",
        jsonFormatFourSpace: "Định dạng JSON có 4 dấu cách",
        formName: "Cài đặt Redis",
        searchModeClient: "Chế độ tìm kiếm khách hàng",
        searchModeServer: "Chế độ tìm kiếm máy chủ",
        searchModeStartsWith: "Tìm kiếm bằng chế độ bắt đầu",
        searchModeIncludes: "Tìm kiếm bao gồm chế độ"
      },
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
        value: "Giá trị"
      },
      error: {
        streamTimestamp: "Dấu thời gian là bắt buộc, ở định dạng Redis hoặc ở dạng *",
        key: "Chìa khóa ít nhất là một ký tự",
        hashKey: "Khóa bảng băm có ít nhất một ký tự",
        score: "Điểm số đã sắp xếp là bắt buộc",
        value: "Giá trị là bắt buộc"
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
      totalCommands: "Tổng",
      expired: "Hết hạn",
      evicted: "Bị loại",
      clientList: "Danh sách kết nối",
      topKeys: "Khóa lớn nhất theo bộ nhớ",
      killClient: "Ngắt kết nối",
      clientKilled: "Kết nối đã bị ngắt",
      confirmKillClient: "Bạn có chắc muốn ngắt kết nối này?",
      noKeys: "Không có khóa",
      noClients: "Không có kết nối",
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
      }
    },
    treeControls: {
      settings: "Cài đặt cây",
      expandAll: "Mở rộng tất cả",
      collapseAll: "Thu gọn tất cả",
      search: {
        search: "Tìm kiếm trong các phím",
        clear: "Xóa tìm kiếm hiện tại để đặt trống",
        placeholderClient: "Tìm kiếm phía khách hàng",
        placeholderServer: "Phía máy chủ tìm kiếm",
        info: "Tìm kiếm phía máy khách có nghĩa là nó khớp với văn bản trong đầu vào tìm kiếm. Tìm kiếm phía máy chủ có nghĩa là nó giống như tìm kiếm trong c��c mẫu khóa dưới dạng *{search-text}*. Đối với các tập hợp tìm kiếm lớn, tốt hơn nên sử dụng tìm kiếm phía máy chủ. Đối với các tập hợp tìm kiếm nhỏ hơn, tốt hơn nên sử dụng chế độ tìm kiếm phía máy khách." + ` Nếu số lượng phím kết thúc ${p3xr.settings.maxLightKeysCount}, bạn chỉ có thể tìm kiếm ở phía máy chủ.`,
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
    loading: "Đang tải...",
    years: "năm",
    months: "tháng",
    days: "ngày",
    year: "năm",
    month: "tháng",
    day: "ngày"
  },
  redisTypes: {
    string: "String",
    list: "List",
    hash: "Hash table",
    set: "Set",
    zset: "Sorted set - zset",
    stream: "Stream",
    json: "JSON"
  }
};
module.exports = strings;
