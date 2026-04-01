const strings = {
  error: {
    cleared_license: "Cleared license",
    invalid_license: "Invalid license",
    license_max_devices_reached: "Maximum device seats reached",
    license_readonly: "License can only be changed from the server terminal.",
    server_error: "Server error, please try again"
  },
  title: {
    donate: "Donate",
    jsonRecursive: "Expanding all leaves",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "You may choose a Redis connection to connect from the left bottom menu.",
    statistics: "Statistics",
    error: "Error",
    connectingRedis: "Connecting to Redis ...",
    socketioConnectError: "Socket.IO Error",
    db: "DB",
    server: "Server",
    clients: "Clients",
    memory: "Memory",
    persistence: "Persistence",
    stats: "Statistics",
    replication: "Replication",
    cpu: "CPU",
    cluster: "Cluster",
    modules: "Modules",
    errorstats: "Error Statistics",
    commandstats: "Command Statistics",
    latencystats: "Latency Statistics",
    keysizes: "Key Sizes",
    threads: "Threads",
  },
  confirm: {
    dropIndex: "Are you sure to drop this index?",
    uploadBuffer: "Are you sure to upload this binary data?",
    uploadBufferDone: "The binary data is uploaded",
    uploadBufferDoneAndSave: "The binary data is uploaded and saved on the server",
    title: "Confirm",
    alert: "Alert",
    info: "Info",
    deleteListItem: "Are you sure to delete this list item?",
    deleteHashKey: "Are you sure to delete this hash key item?",
    deleteStreamTimestamp: "Are you sure to delete this stream timestamp?",
    deleteSetMember: "Are you sure to delete this set member?",
    deleteZSetMember: "Are you sure to delete this sorted set member?",
    deleteConnection: "Confirm",
    deleteConnectionText: "Are you sure to delete this Redis connection?",
    deleteNode: "Are you sure to delete this Redis node?",
    deleteAllKeys: opts => {
      return `Delete this tree and all it\'s keys (${opts.key})?`;
    },
    socketioConnectError: "Socket.IO cannot connect to the server, you can reload and try resolve the connection error yourself, the client does not know how to solve it itself.",
    socketioAuthRequired: "Socket.IO authorization is required. Please authenticate with HTTP Basic Auth (username/password) and reload.",
    deleteKey: "Are you sure to delete this key?",
    rename: {
      title: "Are you sure to rename this key?",
      textContent: "This action renames the key permanently.",
      placeholder: "The Redis key (required)"
    },
    ttl: {
      title: "Are you sure you want to change this key's TTL?",
      textContent: "Changing the TTL updates this key's time to live. Leave empty to keep this key forever.",
      placeholder: "The Redis key's TTL (integer or empty)",
      placeholderPlaceholder: "Empty means it persists forever; otherwise enter an integer.",
      convertTextToTime: "Convert text to time",
      convertTextToTimePlaceholder: "Eg. 1d will be 86400"
    },
    license: {
      title: "Set license",
      textContent: "If you want to use paid features, please contact support@corifeus.com to request a license. Pricing is Pro 400 HUF/month (€1/month) or 4,000 HUF/year (€10/year), and Enterprise 1,200 HUF/month (€3/month) or 12,000 HUF/year (€30/year). Yearly is 10x monthly. With 27% VAT, totals are Pro 500 HUF/month (€1.27/month) or 5,100 HUF/year (€12.70/year), Enterprise 1,500 HUF/month (€3.81/month) or 15,200 HUF/year (€38.10/year). License validation requires internet access. Default license includes 5 seats. If you need more seats, contact us at support@corifeus.com.",
      placeholder: "License key"
    }
  },
  language: {
    // When you translate the english name, keep the Language in English
    // eg. Inglés / English
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
    copy: "Copy",
    downloadBuffer: "Download binary",
    setBuffer: "Upload binary",
    exportKeys: "Export keys",
    exportAllKeys: (opts) => `Export all ${opts.count} keys`,
    exportSearchResults: (opts) => `Export ${opts.count} results`,
    importKeys: "Import keys",
    saveWithFormatJson: "Save with format",
    formatJson: "Format Json",
    wrap: "Wrap",
    unwrap: "Unwrap",
    downloadJson: "Download JSON",
    pubsubMonitor: "PubSub Monitor",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "Language",
    ok: "OK",
    addKey: "Add to this key",
    addKeyRoot: "Add a root key",
    reloadKey: "Reload key",
    reload: "Reload",
    close: "Close",
    commands: "Commands",
    view: "View",
    statistics: "Statistics",
    refresh: "Refresh",
    pause: "Pause",
    resume: "Resume",
    clear: "Clear",
    rename: "Rename",
    main: "Database",
    cancel: "Cancel",
    theme: "Theme",
    github: "GitHub",
    githubRepo: "Repository",
    githubRelease: "Releases",
    githubChangelog: "Changelog",
    info: "Info",
    settings: "Settings",
    connect: "Connect",
    disconnect: "Disconnect",
    overview: "Overview",
    console: "Console",
    noConnections: "No connections, add a connection in the settings menu.",
    noConnectionsInSettings: "No connections, you may add a NEW CONNECTION above.",
    connectionAdd: "New connection",
    addGroup: "Add Group",
    extend: "Extend",
    collapse: "Collapse",
    add: "Add",
    edit: "Edit",
    save: "Save",
    ttl: "Set TTL",
    license: "Set license",
    delete: "Delete",
    remove: "Remove",
    sure: "Sure",
    testConnection: "Test connection",
    getKey: "Loading Redis key and associated data ...",
    jsonViewShow: "Display JSON",
    jsonViewEditor: "Edit JSON",
    quickConsole: "Quick Console",
  },
  label: {
    id: {
      nodeId: 'Node ID',
      id: "Connection ID",
      info: "If you do not wan't to change the properties of: sshPassword, sshPrivateKey, password, tlsCrt, tlsKey, tlsCa, please enter the ID of the connection in those propertes to keep the property values intact. If you want the same logic in the node password, then enter the node ID in the node password."
    },
    secureFeature: 'If you see a value that starts with a P3X an look like the same, it is a secure feature. To change the settings, just replace these settings with empty or something else and they will be saved. If you do not change the settings, the settings will be kept as they are on the server.',
    aiTranslating: "Translating...",
    aiSettings: "AI Settings",
    aiGroqApiKey: "Groq API Key",
    aiGroqApiKeyInfo: "Optional. Your own Groq API key for better performance. Get a free key from",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "AI API key saved",
    aiGroqApiKeyNotSet: "Not set (using server default)",
    ssh: {
      on: 'SSH on',
      off: 'SSH off',
      sshHost: 'SSH Host',
      sshPort: 'SSH port',
      sshUsername: 'SSH username',
      sshPassword: 'SSH password',
      sshPrivateKey: 'SSH private key'
    },
    isBuffer: opts => `[object ArrayBuffer] means that the value is binary data or the value is bigger than ${opts.maxValueAsBuffer}`,
    streamValue: `Stream field and value is a oneliner. Eg.: field1 value1 "field 2" "value 2"`,
    streamTimestampId: `'*' means auto generated or the specification as <millisecondsTime>-<sequenceNumber>`,
    unableToLoadKey: ({
      key
    }) => {
      return `Unable to load this key: ${key}. Possible, the key was deleted. The exact error is in the console.`;
    },
    bigJson: "This JSON object is over 10 kb, so make sure you know what you doing, because some functions can be slow rendering.",
    addNode: "Add node",
    validateJson: "Validate JSON",
    reducedFunction: `Reduced functionality`,
    tooManyKeys: opts => {
      return `For the full maximum functions allowed keys total is ${opts.maxLightKeysCount} count. This database has over the allowed keys in total ${opts.count}. The key sorting and the additional fancy tree information is disabled. The searching is happening only on the server instead the client search.`;
    },
    redisCommandNotFound: "No Redis command match found ...",
    treeKeyStore: `The sorting (natural compare) is executed on the client aka the browser, which means it has a penalty for big large sets, like over 10k keys, it might add a little time to the page rendering. There is no key sorting in Redis, only like this.`,
    socketIoTimeout: options => {
      return `The Socket.IO timed out for this request (max ${options.timeout / 1000} seconds) ...`;
    },
    resizerInfo: options => {
      return `Left or right panel minimum width is ${options.width}px`;
    },
    jsonViewNotParsable: "This value is not JSON parsable  ",
    ttlTitle: "Set the TTL in seconds",
    passwordSecure: "The password might will be empty, but still it will show characters, this is a security feature.",
    tlsWithoutCert: "Enable TLS without additional certificate",
    tlsRejectUnauthorized: "Reject unauthorized certificate",
    tlsSecure: "If you see a TLS configuration that starts with a P3X or all the TLS settings look like the same, it is a secure feature. To change the settings, just replace these settings with empty or something else and they will be saved. If you do not change the TLS settings, the settings will be kept as they are on the server.",
    treeSeparatorEmpty: "If the tree separator is empty, the tree wil have no nested nodes, just a pure list",
    treeSeparatorEmptyNote: "No nested nodes, just a pure list",
    welcomeConsole: "Welcome to the Redis Console",
    welcomeConsoleInfo: "Cursor UP or DOWN history is enabled",
    redisListIndexInfo: "Empty to append, -1 to prepend or save it to the position shown.",
    console: "Console",
    connectiondAdd: "Add connection",
    connectiondEdit: "Edit connection",
    connectiondView: "View connection",
    connections: "Connections",
    licenseInfo: "License",
    licenseEditable: "License editable",
    licenseEditableYes: "Yes",
    licenseEditableNo: "No",
    licenseTerminalOnly: "License can only be configured from the server terminal.",
    licenseTierPolicyTitle: "Tier policy",
    licenseTierPolicyText: "<h4>Free</h4>core Redis UI only; no SSH tunneling, no Readonly connection mode, no Cluster/Sentinel, no Edit JSON/Upload binary/Download binary, no ReJSON.<br/><strong>Price: 0 HUF/month (€0/month).</strong><br/><br/><h4>Pro</h4>SSH tunneling, Readonly connection mode (including --readonly-connections/-r), Edit JSON, Upload binary, Download binary, ReJSON.<br/><strong>Base price: 400 HUF/month (€1/month) or 4,000 HUF/year (€10/year).</strong><br/><strong>Total with 27% VAT: 500 HUF/month (€1.27/month) or 5,100 HUF/year (€12.70/year).</strong><br/><br/><h4>Enterprise</h4>SSH tunneling, Cluster and Sentinel, plus Edit JSON, Upload binary, Download binary, ReJSON; --readonly-connections/-r also works.<br/><strong>Base price: 1,200 HUF/month (€3/month) or 12,000 HUF/year (€30/year).</strong><br/><strong>Total with 27% VAT: 1,500 HUF/month (€3.81/month) or 15,200 HUF/year (€38.10/year).</strong><br/><br/><h4>Yearly rule</h4>Yearly price is 10x the monthly price.<br/><br/><h4>Seats</h4>Default license includes 5 seats. If you need more seats, contact us at <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><br/><h4>Enterprise trial</h4>10 days free for anyone with a real existing email address (non-test email).<br/><hr/><h4>Billing info in e-mail</h4>Name, Billing e-mail, Country code, Postal code, City, Address, VAT ID (optional).<br/><br/><h4>Payment</h4>PayPal payment is available only in HUF (forint); after sending the money @ <a href='https://paypal.me/corifeus'>https://paypal.me/corifeus</a> I will send you an invoice. All payments are non-refundable.<br/><br/><h4>VAT</h4>VAT is added to the price (27% in Hungary).<br/><hr/><h4>Contact</h4>If you want to say hi or have a question, contact <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><hr/><h4>Language</h4>Invoice and license e-mail communication is in English. Invoice currency is HUF.<br/><hr/><h4>Note</h4>License validation requires internet access.",
    licenseState: "State",
    licenseStateActive: "Active",
    licenseStateInactive: "Inactive",
    licenseStateNoLicense: "No license",
    licenseKeyMasked: "Saved key",
    licenseTier: "Tier",
    licenseValid: "Valid",
    licenseStatus: "License status",
    licenseReason: "Reason",
    licenseCheckedAt: "Checked at",
    licenseStartsAt: "Starts at",
    licenseExpiresAt: "Expires at",
    licenseDaysLeft: "Days left",
    licenseMaxDevices: "Max devices",
    licenseActiveDevices: "Active devices",
    licenseActiveDevicesInfo: "If a device is no longer used, its seat is released automatically after 75 minutes.",
    licenseCustomerEmail: "Customer email",
    licenseFeatures: "Features",
    licenseFeaturesEmpty: "No extra features",
    licenseFeatureReadonlyMode: "Readonly connection mode",
    licenseFeatureReadonlyConnectionsFlag: "Readonly connections (--readonly-connections/-r)",
    licenseFeatureSsh: "SSH tunneling",
    licenseFeatureCluster: "Cluster connections",
    licenseFeatureSentinel: "Sentinel connections",
    licenseFeatureReJSON: "ReJSON (JSON data type)",
    keysSort: {
      on: "Key sorting on",
      off: "Key sorting off"
    },
    cluster: {
      on: "Cluster on",
      off: "Cluster off"
    },
    sentinel: {
      on: "Sentinel on",
      off: "Sentinel off",
      name: "Sentinel name"
    },
    readonly: {
      on: "Readonly on",
      off: "Readonly off"
    },
    proSshOnly: "SSH is available in Pro or Enterprise.",
    proReadonlyOnly: "Readonly connection mode is available in Pro or Enterprise.",
    enterpriseClusterSentinelOnly: "Cluster and Sentinel are available in Enterprise only.",
    theme: {
      light: "Light",
      dark: "Dark enterprise",
      darkNeu: "Dark",
      darkoBluo: "Darko bluo",
      enterprise: "Enterprise",
      redis: "Redis",
      matrix: "Matrix"
    },
    connected: opts => {
      return `Connected: ${opts.name}`;
    },
    tree: "Tree",
    askAuth: "Ask for authorization",
    keyboardShortcuts: "Keyboard Shortcuts",
    about: "About",
    supportedLanguages: "Supported Languages",
    version: "Version",
    redisVersion: "Redis Version",
    modules: "Modules",
    shortcutRefresh: "Refresh",
    shortcutSearch: "Focus Search",
    shortcutNewKey: "New Key",
    shortcutDisconnect: "Disconnect",
    themeAuto: "Auto (system)",
    shortcutCommandPalette: "Command Palette",
    commandPalette: "Command Palette",
    noResults: "No results",
    redisCommandsReference: "Redis Commands",
    connectFirst: "Connect to a Redis server first",
    ungrouped: "Ungrouped",
    grouped: "Grouped",
    searchLanguage: "Search language...",
    exportProgress: "Exporting keys...",
    importProgress: "Importing keys...",
    importPreview: "Preview",
    importOverwrite: "Overwrite",
    importSkip: "Skip",
    importConflict: "If key already exists:",
    noKeysToExport: "No keys to export",
    type: "Type",
    time: "Time",
    loading: "Loading...",
    autoRefresh: "Auto",
    importNoKeys: "No keys found in file",
    exportSearchHint: "Exporting only keys matching current search",
    importSearchHint: "Import applies to the full database, not just search results",
  },
  status: {
    dataCopied: "The data is in the clipboard",
    licenseSaved: "License saved",
    exportDone: "Export complete",
    indexCreated: "Index created",
    indexDropped: "Index dropped",
    importDone: (opts) => `Import complete: ${opts.created} created, ${opts.skipped} skipped, ${opts.errors} errors`,
    nodeRemoved: "Node removed",
    keyIsNotExisting: "This key could have been deleted or expired.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "No key";
      } else if (opts.keyCount === 1) {
        return "1 key";
      } else {
        return `${opts.keyCount} keys`;
      }
    },
    treeExpandAll: "Expand all tree leaves. This operation can be expensive and may take time ...",
    noRedisKeys: "There are no keys in this database.",
    redisConnected: "Redis connected successful",
    reloadingDataInfo: "Reloading Redis data info",
    added: "Added",
    saved: "Updated",
    cancelled: "Cancelled",
    deleted: "Deleted",
    savedRedis: "Redis data is saved",
    redisDisconnected: opts => {
      return `The current connection had an error: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `The db index set to ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `The tree key was deleted (${opts.key}).`;
    },
    deletedKey: opts => {
      return `The key was deleted (${opts.key}).`;
    },
    renamedKey: "This key has been renamed",
    ttlChanged: "This key's TTL has been changed",
    notInteger: "This input is not an integer",
    persisted: "This key is persisted forever",
    set: "The key is set/added"
  },
  code: {
    "delete-connection": "This connection was deleted, so you are disconnected to this Redis instance.",
    "save-connection": "This connection was changed, so you are disconnected to this Redis instance. You may re-connect.",
    "readonly-connections": "Connections add/save/delete are readonly only!",
    "readonly-connection-mode": "This connection is read only mode!",
    "list-out-of-bounds": "This list index is out of bounds",
    "donation-ware-feature": "This feature is present in the donation version.",
    "feature-pro-readonly-required": "Readonly connection mode requires Pro or Enterprise license.",
    "feature-pro-ssh-required": "SSH tunneling requires Pro or Enterprise license.",
    "feature-enterprise-cluster-sentinel-required": "Cluster and Sentinel require Enterprise license.",
    "feature-pro-json-binary-required": "Edit JSON, Upload binary and Download binary require Pro or Enterprise license.",
    "feature-pro-rejson-required": "ReJSON (JSON data type) requires Pro or Enterprise license.",
    "invalid-json-value": "The value is not valid JSON.",
    "http_auth_required": "Authorization required: please authenticate with HTTP Basic Auth and reload.",
    "auto-connection-failed": "Possible, the connection was removed and the auto connection failed, because of this.",
    invalid_console_command: "This command is not working via the GUI."
  },
  licenseReason: {
    LICENSE_VALID: "License is valid",
    LICENSE_INVALID: "License is invalid",
    LICENSE_MISSING: "No license key is set",
    LICENSE_DISABLED: "License is disabled in server config",
    LICENSE_NOT_FOUND: "License was not found",
    LICENSE_EXPIRED: "License is expired",
    LICENSE_CLEARED: "License key was cleared",
    LICENSE_MAX_DEVICES_REACHED: "Maximum device seats reached",
    PRODUCT_MISMATCH: "License product does not match"
  },
  licenseStatusValue: {
    active: "Active",
    deleted: "Deleted",
    all: "All",
    expired: "Expired",
    missing: "Missing",
    inactive: "Inactive"
  },
  form: {
    error: {
      required: "Required",
      port: "The port is between 1-65535",
      invalid: "The form is invalid"
    },
    connection: {
      label: {
        name: "Name",
        group: "Group",
        host: "Hostname",
        port: "Port",
        password: "Password",
        username: "Username"
      }
    },
    treeSettings: {
      maxValueDisplay: "Max value display string length",
      maxValueDisplayInfo: "If set to 0, show full values. If greater than 0, truncate to this length. If -1: for strings, hide the value until edit; for other types, show full content.",
      maxKeys: "The max key count",
      maxKeysInfo: "So that the GUI does not crash, we limit the max key count.",
      keyCount: () => {
        return `Number of keys: ${p3xr.state.keysRaw.length}`;
      },
      label: {
        animation: "Use animation",
        noAnimation: "No animation",
        jsonFormatTwoSpace: "Format JSON with 2 spaces",
        jsonFormatFourSpace: "Format JSON with 4 spaces",
        formName: "Redis settings",
        searchModeClient: "Client search mode",
        searchModeServer: "Server search mode",
        searchModeStartsWith: "Search with starts with mode",
        searchModeIncludes: "Search includes mode"
      },
      field: {
        treeSeparator: "Tree separator",
        treeSeparatorSelector: "Tree separator selector",
        page: "Tree paging count",
        keyPageCount: "Key paging count",
        keysSort: "Sort the keys",
        searchMode: "Search mode",
        searchModeStartsWith: "Search starts with / includes"
      },
      error: {
        keyPageCount: "The key page count must be an integer between 5 - 100",
        page: "The page count must be an integer between 10 - 5000",
        maxValueDisplay: "The maximum display value must be an integer between -1 and 32768",
        maxKeys: "The maximum key count value must be an integer between 100 and 100000"
      }
    },
    key: {
      label: {
        formName: {
          add: "Add new Redis key",
          edit: "Edit Redis key",
          append: "Add to existing Redis key"
        }
      },
      field: {
        streamTimestamp: "Timestamp",
        key: "Key",
        type: "Type",
        index: "Index",
        hashKey: "Hash key",
        score: "Score",
        value: "Value"
      },
      error: {
        streamTimestamp: "The timestamp is required, either Redis format or as *",
        key: "The key is, at least, one character",
        hashKey: "The hash table key is at least one character",
        score: "The sorted set score is required",
        value: "The value is required"
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
      title: "Search",
      index: "Index",
      query: "Query",
      results: "Results",
      noIndex: "No indexes found",
      createIndex: "Create Index",
      dropIndex: "Drop Index",
      indexInfo: "Index Info",
      indexName: "Index Name",
      prefix: "Key Prefix (optional)",
      fieldName: "Field Name",
    },
    monitor: {
      title: "Monitoring",
      memory: "Memory",
      opsPerSec: "Ops/sec",
      clients: "Clients",
      blocked: "Blocked",
      hitsMisses: "Hit Rate",
      networkIo: "Network I/O",
      slowLog: "Slow Log",
      totalCommands: "Total",
      expired: "Expired",
      evicted: "Evicted",
      clientList: "Client List",
      topKeys: "Top Keys by Memory",
      killClient: "Kill client",
      clientKilled: "Client killed",
      confirmKillClient: "Are you sure to kill this client?",
      noKeys: "No keys",
      noClients: "No clients",
    },
    overview: {
      noConnected: "There is no connection to Redis.",
      overviewClients: "List the connected by the count of clients",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "1 client";
        }
        return `${opt.length} clients`;
      }
    },
    key: {
      label: {
        key: "Key",
        encoding: "Encoding",
        length: "Size",
        ttl: "TTL",
        ttlTitle: "Time To Live",
        type: "Type",
        ttlNotExpire: "does not expire",
        lengthString: "bytes",
        lengthItem: "items",
        actions: "Actions"
      },
      list: {
        table: {
          index: "Index",
          value: "Value"
        }
      },
      hash: {
        table: {
          hashkey: "Hashkey",
          value: "Value"
        }
      },
      set: {
        table: {
          value: "Member"
        }
      },
      zset: {
        table: {
          value: "Member",
          score: "Score"
        }
      },
      stream: {
        table: {
          timestamp: "Timestamp ID",
          field: "Field",
          value: "Value"
        }
      }
    },
    treeControls: {
      settings: "Tree settings",
      expandAll: "Expand all",
      collapseAll: "Collapse all",
      search: {
        search: "Search in the keys",
        clear: "Clear current search to set empty",
        placeholderClient: "Search client side",
        placeholderServer: "Search server side",
        info: "The client side search means, that it matches the text in the search input. The server side search means, that is it like search in the keys patterns as *{search-text}*. For large search sets, it is better to use server side searching. For smaller search sets, it is better to use client side search mode." + ` If the keys count is over ${p3xr.settings.maxLightKeysCount}, you can only search on server side.`,
        largeSetInfo: "In a large set, client side searching is disabled. so right now only server side searching is possible.",
        infoDetails: "To find out how the search works, please check out the settings"
      },
      pager: {
        next: "Next",
        prev: "Previous",
        first: "First",
        last: "Last"
      }
    }
  },
  time: {
    years: "years",
    months: "months",
    days: "days",
    year: "year",
    month: "month",
    day: "day"
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
