const strings = {
  error: {
    cleared_license: "清除许可证",
    invalid_license: "无效的许可证",
    server_error: "服务器错误，请重试",
  },
  title: {
    donate: "捐赠",
    jsonRecursive: "展开所有叶子",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "您可以从左下方菜单中选择要连接的Redis进行连接访问",
    statistics: "Statistics",
    error: "错误",
    connectingRedis: "连接到Redis ...",
    socketioConnectError: "Socket.IO 错误",

    db: "DB",
    server: "服务端",
    clients: "客户端",
    memory: "内存",
    persistence: "持久性",
    stats: "统计",
    replication: "同步复制",
    cpu: "CPU",
    cluster: "集群",
  },
  confirm: {
    title: "确认",
    alert: "警告",
    info: "信息",
    deleteListItem: "您确定要删除该列表项吗？",
    deleteHashKey: "您确定要删除该哈希键项吗？",
    deleteStreamTimestamp: "您确定要删除此流时间戳吗？",
    deleteSetMember: "您确定要删除该集合成员？",
    deleteZSetMember: "您确定要删除该有序集合成员？",
    deleteConnection: "确认",
    deleteConnectionText: "您确定要删除此Redis连接吗？",
    deleteNode: "您确定要删除此Redis节点吗？",
    deleteAllKeys: (opts) => {
      return `删除此树及其所有键 (${opts.key})?`;
    },
    socketioConnectError:
      "Socket.IO 无法连接到该服务，请重新加载并尝试解决此错误，客户端无法解决此错误",
    deleteKey: "您确定要删除此键吗？",
    rename: {
      title: "您确定要重命名此键吗？",
      textContent: "如果您点击重命名按钮，它将永久重命名此键。",
      placeholder: "Redis键（必须存在）",
    },
    ttl: {
      title: "您要更改此键的TTL吗？",
      textContent:
        "如果您点击更改TTL按钮，将更改此键的生存时间，将其设置为空表示永久有效。",
      placeholder: "Redis键的TTL（整数或空）",
      placeholderPlaceholder: "空表示永久存在，否则使用所提供的整数。",
      convertTextToTime: "将文本转换为时间",
      convertTextToTimePlaceholder: "例如，1d 表示 86400",
    },
    license: {
      title: "启用捐赠许可证？",
      textContent:
        "如果要使用捐赠版本的功能，请联系alabard@gmail.com申请许可证。 捐赠金额为每月1美元。",
      placeholder: "注册码",
    },
  },
  language: {
    en: "英语 / English",
    zn: "中文 / Chinese",
    ru: "Русский / Russian",
  },
  intention: {
    copy: "复制",
    downloadBuffer: "下載二進位文件",
    setBuffer: "上傳二進位文件",
    saveWithFormatJson: "保存格式",
    formatJson: "格式化Json",
    pubsubMonitor: "PubSub监视器",
    language: "语言 / Language",
    ok: "确定",
    addKey: "加入此键",
    addKeyRoot: "加入一个根键",
    reloadKey: "重载键",
    reload: "重载",
    close: "关闭",
    commands: "命令",
    view: "视图",
    statistics: "统计",
    refresh: "刷新",
    clear: "清除",
    rename: "重命名",
    main: "主页",
    cancel: "取消",
    theme: "主题",
    github: "GitHub",
    githubRepo: "仓库",
    githubRelease: "发布",
    githubChangelog: "更新日志",
    settings: "设置",
    connect: "连接",
    disconnect: "断开",
    overview: "概览",
    console: "控制台",
    noConnections: "没有任何连接，请在设置菜单中添加一个连接。",
    noConnectionsInSettings: "没有连接，您可以在上面添加一个新的连接。",
    connectionAdd: "新连接",
    extend: "拓展",
    collapse: "折叠",
    add: "添加",
    edit: "编辑",
    save: "保存",
    ttl: "设置 TTL",
    license: "设定牌照",
    delete: "删除",
    remove: "删除",
    sure: "确定",
    testConnection: "测试连接",
    getKey: "加载Redis键及相关数据...",
    jsonViewShow: "显示 JSON 树",
    jsonViewEditor: "编辑JSON",
    quickConsole: "快的",
  },
  label: {
    isBuffer: "[object ArrayBuffer] 表示該值是二進位緩衝區或該值大於 0.5MB",
    streamValue: `流字段和值是唯一的。 例如：field1 value1 "field 2" "value 2"`,
    streamTimestampId: `'*'表示自动生成或指定为<millisecondsTime>-<sequenceNumber>`,
    unableToLoadKey: ({ key }) => {
      return `无法加载此密钥：: ${key}。可能，密钥被删除了。确切的错误在控制台中。`;
    },
    bigJson:
      "此JSON对象超过10 kb，因此请确保您知道自己在做什么，因为某些功能可能会缓慢呈现。",
    addNode: "添加节点",
    validateJson: "验证JSON",
    reducedFunction: `功能限制`,
    tooManyKeys: (opts) => {
      return `对于最大函数允许的键个数为 ${opts.maxLightKeysCount}. 该数据库允许共超过的键总数为 ${opts.count}.但键的排序及范式树等相关信息会被禁用。搜索仅在服务器上进行，而不是客户端搜索。`;
    },
    redisCommandNotFound: "找不到匹配的Redis命令...",
    treeKeyStore: `该排序(自然排序)运行在客户端的浏览器上, 意味着针对大型集合(例如超过1W个键),渲染的时长开销需要增加.Redis中没有键排序, 就像这样。`,
    socketIoTimeout: (options) => {
      return `Socket.IO 请求超时,请求时最长(最大 ${
        options.timeout / 1000
      }秒) ...`;
    },
    resizerInfo: (options) => {
      return `面板(左/右)的最小宽度是 ${options.width}像素`;
    },
    jsonViewNotParsable: "该值JSON无法解析",
    ttlTitle: "设置TTL时间(秒)",
    passwordSecure: "密码可能为空，但仍会显示字符，这是一项安全功能。",
    treeSeparatorEmpty: "如果树分隔符为空，则树将没有嵌套节点，只有纯列表",
    tlsWithoutCert: "无需额外证书即可启用 TLS",
    tlsRejectUnauthorized: "拒绝未经授权的证书",
    tlsSecure:
      "如果您看到以 P3X 开头的 TLS 配置或所有 TLS 设置看起来都相同，则这是一项安全功能。 要更改设置，只需将这些设置替换为空或其他内容即可保存。 如果您不更改 TLS 设置，这些设置将保持在服务器上的原样。",
    treeSeparatorEmptyNote: "没有嵌套节点，只是一个纯列表",
    welcomeConsole: "欢迎来到Redis控制台",
    welcomeConsoleInfo: "上下方向键选择历史记录功能已启用",
    redisListIndexInfo: "空值追加, -1 到前置或保存到光标之处",
    console: "控制台",
    connectiondAdd: "添加连接",
    connectiondEdit: "编辑连接",
    connectiondView: "查看连接",
    connections: "连接",
    keysSort: {
      on: "开启键排序",
      off: "关闭键排序",
    },
    cluster: {
      on: "群集",
      off: "集群关闭",
    },
    readonly: {
      on: "只读",
      off: "只读关闭",
    },
    theme: {
      light: "浅棕",
      dark: "黑暗企业",
      darkNeu: "暗色",
      darkoBluo: "蓝色",
      enterprise: "企业风",
      redis: "Redis风格",
      matrix: "矩阵",
    },
    connected: (opts) => {
      return `已连接: ${opts.name}`;
    },
    tree: "树",
    askAuth: "请求授权",
  },
  status: {
    dataCopied: "数据在剪贴板中",
    licenseSaved: "许可证已保存",
    nodeRemoved: "节点已删除",
    keyIsNotExisting: "此键可能已被删除或过期。",
    keyCount: (opts) => {
      if (opts.keyCount === 0) {
        return "没有任何键";
      } else if (opts.keyCount === 1) {
        return "1 个键";
      } else {
        return `${opts.keyCount} 键`;
      }
    },
    treeExpandAll:
      "展开所可能的原因是，连接已删除，自动连接失败有树,该操作的代价就是有点费时...",
    noRedisKeys: "此数据库中没有任何键。",
    redisConnected: "Redis 连接成功",
    reloadingDataInfo: "重新加载Redis数据信息",
    added: "已添加",
    saved: "已更新",
    cancelled: "已取消",
    deleted: "已删除",
    savedRedis: "Redis数据已保存",
    redisDisconnected: (opts) => {
      return `该连接有一个错误: ${opts.error.message}`;
    },
    dbChanged: (opts) => {
      return `db索引设置为 ${opts.db}. `;
    },
    treeDeleted: (opts) => {
      return `该树已删除 (${opts.key}).`;
    },
    deletedKey: (opts) => {
      return `该键已删除 (${opts.key}).`;
    },
    renamedKey: "该键已重命名",
    ttlChanged: "该键TTL已被更改",
    notInteger: "输入值不是一个整数",
    persisted: "永久键",
    set: "键已设置/添加",
  },
  code: {
    "delete-connection": "此连接已删除，因此您与此Redis实例断开连接。",
    "save-connection":
      "此连接已更改，因此您与此Redis实例断开连接。 你可以重新连接。",
    "readonly-connections": "连接(添加/保存/删除)只是只读！",
    "readonly-connection-mode": "此连接为只读模式！",
    "list-out-of-bounds": "此列表索引超出范围",
    "donation-ware-feature": "捐赠版本中提供了此功能。",
    "auto-connection-failed": "因此，可能导致连接被删除并且自动连接失败。",
    invalid_console_command: "此命令无法通过 GUI 运行。",
  },
  form: {
    error: {
      required: "必填",
      port: "端口号范围是 1-65535",
      invalid: "值无效,请重新输入",
    },
    connection: {
      label: {
        name: "连接名字",
        host: "主机名",
        port: "端口",
        password: "密码",
        username: "用户名",
      },
    },
    treeSettings: {
      maxValueDisplay: "最大值显示字符串长度",
      maxValueDisplayInfo:
        "如果最大值显示为零，则显示所有内容，如果大于0，则将截断。 如果它是-1，它将不显示没有编辑字符串的值，对于其他人，它显示所有内容。",
      maxKeys: "最大密钥数",
      maxKeysInfo: "为了避免GUI崩溃，我们限制了最大密钥数。",
      keyCount: () => {
        return `键数: ${p3xr.state.keysRaw.length}`;
      },
      label: {
        animation: "使用动画",
        noAnimation: "没有动画",
        jsonFormatTwoSpace: "用2个空格格式化JSON",
        jsonFormatFourSpace: "用4个空格格式化JSON",
        formName: "Redis设置",
        searchModeClient: "客户端搜索模式",
        searchModeServer: "服务端搜索模式",
        searchModeStartsWith: "以模式启动搜索",
        searchModeIncludes: "搜索包括模式",
      },
      field: {
        treeSeparator: "树分隔符",
        treeSeparatorSelector: "树分隔符选择器",
        page: "树分页数",
        keyPageCount: "按键分页数",
        keysSort: "对键进行排序",
        searchMode: "搜索模式",
        searchModeStartsWith: "搜索以 / 开头",
      },
      error: {
        keyPageCount: "密钥页数必须为5到100之间的整数",
        page: "页数必须是10  -  500之间的整数",
        maxValueDisplay: "最大显示值必须是介于-1和32768之间的整数",
        maxKeys: "最大密钥计数值必须是100到100000之间的整数",
      },
    },
    key: {
      label: {
        formName: {
          add: "添加新的Redis键",
          edit: "编辑 Redis key",
          append: "添加到现有的Redis键",
        },
      },
      field: {
        streamTimestamp: "时间戳记",
        key: "键",
        type: "类型",
        index: "索引",
        hashKey: "哈希键",
        score: "分数",
        value: "值",
      },
      error: {
        streamTimestamp: "时间戳是必需的，可以是Redis格式，也可以*",
        key: "键至少存在一个字符",
        hashKey: "哈希表键至少是一个字符",
        score: "排序的集合分数是必需的",
        value: "该值是必填的",
      },
    },
    main: {
      label: {
        database: "DB",
      },
    },
  },
  page: {
    overview: {
      noConnected: "没有任何连接到Redis",
      overviewClients: "按客户端连接计数展示所有连接",
      connectedCount: (opt) => {
        if (opt.length === 1) {
          return "1 客户端";
        }
        return `${opt.length} 客户端`;
      },
    },
    key: {
      label: {
        key: "键",
        encoding: "编码",
        length: "大小",
        ttl: "TTL",
        ttlTitle: "生存时间",
        type: "类型",
        ttlNotExpire: "不会过期",
        lengthString: "位元組",
        lengthItem: "项数",
        actions: "操作",
      },
      list: {
        table: {
          index: "索引",
          value: "值",
        },
      },
      hash: {
        table: {
          hashkey: "哈希",
          value: "值",
        },
      },
      set: {
        table: {
          value: "成员",
        },
      },
      zset: {
        table: {
          value: "成员",
          score: "分数",
        },
      },
      stream: {
        table: {
          timestamp: "时间戳ID",
          field: "领域",
          value: "值",
        },
      },
    },
    treeControls: {
      settings: "树设置",
      expandAll: "展开所有",
      collapseAll: "折叠所有",
      search: {
        search: "在键中搜索",
        clear: "清空当前搜索结果",
        placeholderClient: "客户端搜索",
        placeholderServer: "服务端搜索",
        info: `客户端搜索是匹配输入的文本,服务端搜索则遵循*{search-text}*模式搜索.对于大量数据的搜索最好在服务端进行搜索,而较小数据量可以考虑客户端搜索。如果键数超过  ${p3xr.settings.maxLightKeysCount}个的则只能在服务端搜索`,
        largeSetInfo:
          "在大型集合中，禁用客户端搜索。 所以现在只能进行服务器端搜索。",
        infoDetails: "要了解搜索的工作原理，请查看设置",
      },
      pager: {
        next: "下一页",
        prev: "上一页",
        first: "首页",
        last: "末页",
      },
    },
  },
  time: {
    years: "年份",
    months: "个月",
    days: "天",
    year: "年",
    month: "月",
    day: "天",
  },
  redisTypes: {
    string: "字符串",
    list: "列表",
    hash: "哈希表",
    set: "集合",
    zset: "有序集合 - zset",
    stream: "流",
  },
};

module.exports = strings;
