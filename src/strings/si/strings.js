const strings = {
  error: {
    cleared_license: "බලපත්\u200dරය ඉවත් කරන ලදී",
    invalid_license: "අවලංගු බලපත්\u200dරය",
    license_max_devices_reached: "උපරිම උපාංග ආසන සීමාවට ළඟා විය",
    license_readonly: "බලපත්\u200dරය සේවාදායක පර්යන්තයෙන් පමණක් වෙනස් කළ හැක.",
    server_error: "සේවාදායක දෝෂයක්, කරුණාකර නැවත උත්සාහ කරන්න"
  },
  title: {
    donate: "පරිත්\u200dයාග කරන්න",
    jsonRecursive: "සියලුම කොළ පුළුල් කරමින්",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "ඔබට වම් පහළ මෙනුවෙන් Redis සම්බන්ධතාවයක් තෝරා ගත හැක.",
    statistics: "සංඛ්\u200dයාලේඛන",
    error: "දෝෂය",
    connectingRedis: "Redis වෙත සම්බන්ධ වෙමින් ...",
    socketioConnectError: "Socket.IO දෝෂය",
    db: "DB",
    server: "සේවාදායකය",
    clients: "සේවාලාභීන්",
    memory: "මතකය",
    persistence: "පවත්වාගෙන යාම",
    stats: "සංඛ්\u200dයාලේඛන",
    replication: "අනුරූපණය",
    cpu: "CPU",
    cluster: "සමූහය",
    modules: "modules",
    errorstats: "errorstats",
    commandstats: "commandstats",
    latencystats: "latencystats",
    keysizes: "keysizes",
    threads: "threads",
  },
  confirm: {
    dropIndex: "මෙම සුචිය මැකීමට විශ්වාසද?",
    uploadBuffer: "ඔබට මෙම ද්විමය දත්ත උඩුගත කිරීමට අවශ්\u200dය බව විශ්වාසද?",
    uploadBufferDone: "ද්විමය දත්ත උඩුගත කරන ලදී",
    uploadBufferDoneAndSave: "ද්විමය දත්ත උඩුගත කර සේවාදායකයේ සුරකින ලදී",
    title: "තහවුරු කරන්න",
    alert: "ඇඟවීම",
    info: "තොරතුරු",
    deleteListItem: "ඔබට මෙම ලැයිස්තු අයිතමය මකා දැමීමට අවශ්\u200dය බව විශ්වාසද?",
    deleteHashKey: "ඔබට මෙම hash යතුරු අයිතමය මකා දැමීමට අවශ්\u200dය බව විශ්වාසද?",
    deleteStreamTimestamp: "ඔබට මෙම ප්\u200dරවාහ කාල මුද්\u200dරාව මකා දැමීමට අවශ්\u200dය බව විශ්වාසද?",
    deleteSetMember: "ඔබට මෙම කට්ටල සාමාජිකයා මකා දැමීමට අවශ්\u200dය බව විශ්වාසද?",
    deleteZSetMember: "ඔබට මෙම වර්ග කළ කට්ටල සාමාජිකයා මකා දැමීමට අවශ්\u200dය බව විශ්වාසද?",
    deleteConnection: "තහවුරු කරන්න",
    deleteConnectionText: "ඔබට මෙම Redis සම්බන්ධතාවය මකා දැමීමට අවශ්\u200dය බව විශ්වාසද?",
    deleteNode: "ඔබට මෙම Redis නෝඩය මකා දැමීමට අවශ්\u200dය බව විශ්වාසද?",
    deleteAllKeys: opts => {
      return `මෙම ගස සහ එහි සියලුම යතුරු මකන්නද (${opts.key})?`;
    },
    socketioConnectError: "Socket.IO සේවාදායකයට සම්බන්ධ විය නොහැක, ඔබට නැවත පූරණය කර සම්බන්ධතා දෝෂය විසඳීමට උත්සාහ කළ හැක, සේවාලාභියාට එය තනිවම විසඳන්නේ කෙසේදැයි නොදනී.",
    socketioAuthRequired: "Socket.IO අවසරය අවශ්\u200dයයි. කරුණාකර HTTP Basic Auth (පරිශීලක නාමය/මුරපදය) සමඟ සත්\u200dයාපනය කර නැවත පූරණය කරන්න.",
    deleteKey: "ඔබට මෙම යතුර මකා දැමීමට අවශ්\u200dය බව විශ්වාසද?",
    rename: {
      title: "ඔබට මෙම යතුර නැවත නම් කිරීමට අවශ්\u200dය බව විශ්වාසද?",
      textContent: "මෙම ක්\u200dරියාව යතුර ස්ථිරවම නැවත නම් කරයි.",
      placeholder: "Redis යතුර (අවශ්\u200dයයි)"
    },
    ttl: {
      title: "ඔබට මෙම යතුරේ TTL වෙනස් කිරීමට අවශ්\u200dය බව විශ්වාසද?",
      textContent: "TTL වෙනස් කිරීමෙන් මෙම යතුරේ ජීවිත කාලය යාවත්කාලීන වේ. මෙම යතුර සදාකාලිකව තබා ගැනීමට හිස්ව තබන්න.",
      placeholder: "Redis යතුරේ TTL (පූර්ණ සංඛ්\u200dයාවක් හෝ හිස්)",
      placeholderPlaceholder: "හිස් යනු සදාකාලිකව පවතිනවා; නැතිනම් පූර්ණ සංඛ්\u200dයාවක් ඇතුළත් කරන්න.",
      convertTextToTime: "පෙළ කාලයට පරිවර්තනය කරන්න",
      convertTextToTimePlaceholder: "උදා. 1d 86400 වනු ඇත"
    },
    license: {
      title: "බලපත්\u200dරය සකසන්න",
      textContent: "If you want to use paid features, please contact support@corifeus.com to request a license. Pricing is Pro 400 HUF/month (\u20ac1/month) or 4,000 HUF/year (\u20ac10/year), and Enterprise 1,200 HUF/month (\u20ac3/month) or 12,000 HUF/year (\u20ac30/year). Yearly is 10x monthly. With 27% VAT, totals are Pro 500 HUF/month (\u20ac1.27/month) or 5,100 HUF/year (\u20ac12.70/year), Enterprise 1,500 HUF/month (\u20ac3.81/month) or 15,200 HUF/year (\u20ac38.10/year). License validation requires internet access. Default license includes 5 seats. If you need more seats, contact us at support@corifeus.com.",
      placeholder: "බලපත්\u200dර යතුර"
    }
  },
  language: {
    // When you translate the english name, keep the Language in English
    // eg. Inglés / English
    bg: "බල්ගේරියානු / Bulgarian",
    cs: "චෙක් / Czech",
    de: "ජර්මන් / German",
    el: "ග්\u200dරීක / Greek",
    en: "ඉංග්\u200dරීසි / English",
    es: "ස්පාඤ්ඤ / Spanish",
    fr: "ප්\u200dරංශ / French",
    hu: "හංගේරියානු / Hungarian",
    it: "ඉතාලි / Italian",
    ja: "ජපන් / Japanese",
    nl: "ලන්දේසි / Dutch",
    pl: "පෝලන්ත / Polish",
    "pt-PT": "පෘතුගීසි / Portuguese",
    ro: "රොමේනියානු / Romanian",
    ru: "රුසියානු / Russian",
    sk: "ස්ලෝවැක් / Slovak",
    sr: "සර්බියානු / Serbian",
    sv: "ස්වීඩන් / Swedish",
    tr: "තුර්කි / Turkish",
    uk: "යුක්\u200dරේනියානු / Ukrainian",
    zn: "චීන / Chinese",
    ar: "අරාබි / Arabic",
    az: "අසර්බයිජානු / Azerbaijani",
    be: "බෙලරුසියානු / Belarusian",
    bn: "බෙංගාලි / Bengali",
    da: "ඩේනිශ් / Danish",
    et: "එස්තෝනියානු / Estonian",
    fi: "ෆින්ලන්ත / Finnish",
    fil: "පිලිපීන / Filipino",
    he: "හීබ්\u200dරු / Hebrew",
    hr: "ක්\u200dරොඒශියානු / Croatian",
    hy: "ආර්මේනියානු / Armenian",
    id: "ඉන්දුනීසියානු / Indonesian",
    ka: "ජෝර්ජියානු / Georgian",
    kk: "කසාක් / Kazakh",
    km: "කමර් / Khmer",
    ko: "කොරියානු / Korean",
    ky: "කිර්ගිස් / Kyrgyz",
    lt: "ලිතුවේනියානු / Lithuanian",
    mk: "මැසිඩෝනියානු / Macedonian",
    ms: "මැලේ / Malay",
    ne: "නේපාල / Nepali",
    no: "නෝර්වේජියානු / Norwegian",
    "pt-BR": "පෘතුගීසි (බ්\u200dරසීලය) / Portuguese (Brazil)",
    sl: "ස්ලෝවේනියානු / Slovenian",
    tg: "ටජික් / Tajik",
    th: "තායි / Thai",
    vi: "වියට්නාම / Vietnamese",
    "zh-HK": "චීන (හොංකොං) / Chinese (Hong Kong)",
    "zh-TW": "චීන (තායිවානය) / Chinese (Taiwan)",
    sw: "ස්වාහිලි / Swahili",
    si: "සිංහල / Sinhala",
    ta: "දෙමළ / Tamil",
    bs: "බොස්නියානු / Bosnian"
  },
  intention: {
    copy: "පිටපත් කරන්න",
    downloadBuffer: "ද්විමය බාගත කරන්න",
    setBuffer: "ද්විමය උඩුගත කරන්න",
    exportKeys: "යතුරු අපනයනය",
    exportAllKeys: (opts) => `සියලුම ${opts.count} යතුරු අපනයනය`,
    exportSearchResults: (opts) => `${opts.count} ප්‍රතිඵල අපනයනය`,
    importKeys: "යතුරු ආනයනය",
    saveWithFormatJson: "ආකෘතිය සමඟ සුරකින්න",
    formatJson: "Json ආකෘතිකරණය",
    wrap: "ඔතන්න",
    unwrap: "ලිහන්න",
    downloadJson: "JSON බාගත කරන්න",
    pubsubMonitor: "PubSub නිරීක්ෂකය",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "භාෂාව / Language",
    ok: "හරි",
    addKey: "මෙම යතුරට එක් කරන්න",
    addKeyRoot: "මූල යතුරක් එක් කරන්න",
    reloadKey: "යතුර නැවත පූරණය කරන්න",
    reload: "නැවත පූරණය",
    close: "වසන්න",
    commands: "විධාන",
    view: "බලන්න",
    statistics: "සංඛ්\u200dයාලේඛන",
    refresh: "නැවුම් කරන්න",
    pause: "විරාමය",
    resume: "නැවත ආරම්භ",
    clear: "මකන්න",
    rename: "නැවත නම් කරන්න",
    main: "දත්ත සමුදාය",
    cancel: "අවලංගු කරන්න",
    theme: "තේමාව",
    github: "GitHub",
    githubRepo: "ගබඩාව",
    githubRelease: "නිකුතු",
    githubChangelog: "වෙනස්කම් ලොගය",
    info: "Info",
    settings: "සැකසුම්",
    connect: "සම්බන්ධ වන්න",
    disconnect: "විසන්ධි කරන්න",
    overview: "දළ විශ්ලේෂණය",
    console: "කොන්සෝලය",
    noConnections: "සම්බන්ධතා නැත, සැකසුම් මෙනුවේ සම්බන්ධතාවයක් එක් කරන්න.",
    noConnectionsInSettings: "සම්බන්ධතා නැත, ඔබට ඉහළින් නව සම්බන්ධතාවයක් එක් කළ හැක.",
    connectionAdd: "නව සම්බන්ධතාවය",
    addGroup: "කණ්ඩායම එකතු කරන්න",
    extend: "පුළුල් කරන්න",
    collapse: "හකුළන්න",
    add: "එක් කරන්න",
    edit: "සංස්කරණය කරන්න",
    save: "සුරකින්න",
    ttl: "TTL සකසන්න",
    license: "බලපත්\u200dරය සකසන්න",
    delete: "මකන්න",
    remove: "ඉවත් කරන්න",
    sure: "විශ්වාසයි",
    testConnection: "සම්බන්ධතාවය පරීක්ෂා කරන්න",
    getKey: "Redis යතුර සහ ආශ්\u200dරිත දත්ත පූරණය වෙමින් ...",
    jsonViewShow: "JSON පෙන්වන්න",
    jsonViewEditor: "JSON සංස්කරණය",
    quickConsole: "ඉක්මන් කොන්සෝලය",
  },
  label: {
    id: {
      nodeId: 'නෝඩ ID',
      id: "සම්බන්ධතා ID",
      info: "ඔබට sshPassword, sshPrivateKey, password, tlsCrt, tlsKey, tlsCa හි ගුණාංග වෙනස් කිරීමට අවශ්\u200dය නැතිනම්, කරුණාකර ගුණාංග අගයන් නොවෙනස්ව තැබීමට එම ගුණාංගවල සම්බන්ධතා ID ඇතුළත් කරන්න. නෝඩ මුරපදයේ එම තර්කනයම අවශ්\u200dය නම්, නෝඩ මුරපදයේ නෝඩ ID ඇතුළත් කරන්න."
    },
    secureFeature: 'ඔබට P3X සමඟ ආරම්භ වන අගයක් පෙනෙන්නේ නම් සහ සියල්ල සමානව පෙනේ නම්, එය ආරක්ෂිත විශේෂාංගයකි. සැකසුම් වෙනස් කිරීමට, මෙම සැකසුම් හිස් හෝ වෙනත් දෙයකින් ආදේශ කරන්න, ඒවා සුරැකෙනු ඇත. ඔබ සැකසුම් වෙනස් නොකරන්නේ නම්, සැකසුම් සේවාදායකයේ ඇති ආකාරයටම පවතිනු ඇත.',
    aiTranslating: "Translating...",
    aiSettings: "AI සැකසුම්",
    aiGroqApiKey: "Groq API යතුර",
    aiGroqApiKeyInfo: "විකල්ප. වඩා හොඳ ක්‍රියාකාරීත්වය සඳහා ඔබේම Groq API යතුර. නොමිලේ යතුරක් ලබා ගන්න",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "AI API යතුර සුරකින ලදී",
    aiGroqApiKeyInvalid: "Invalid Groq API key",
    aiGroqApiKeyNotSet: "සකසා නැත (සේවාදායක පෙරනිමිය)",
    aiEnabled: "AI Enabled",
    aiEnabledYes: "Yes",
    aiEnabledNo: "No",
    aiRouteViaNetwork: "Route via network.corifeus.com",
    aiRoutingDirect: "Queries go directly to Groq using your own API key, bypassing network.corifeus.com.",
    aiRoutingNetwork: "AI queries are routed through network.corifeus.com. If you have your own free Groq API key, you can turn off this switch to route directly to Groq without network.corifeus.com.",
    ssh: {
      on: 'SSH සක්\u200dරීයයි',
      off: 'SSH අක්\u200dරීයයි',
      sshHost: 'SSH සත්කාරකය',
      sshPort: 'SSH පෝර්ටුව',
      sshUsername: 'SSH පරිශීලක නාමය',
      sshPassword: 'SSH මුරපදය',
      sshPrivateKey: 'SSH පෞද්ගලික යතුර'
    },
    isBuffer: opts => `[object ArrayBuffer] යනු අගය ද්විමය දත්ත බව හෝ අගය ${opts.maxValueAsBuffer} ට වඩා විශාල බව අදහස් වේ`,
    streamValue: `ප්\u200dරවාහ ක්ෂේත්\u200dරය සහ අගය එක පේළියකි. උදා.: field1 value1 "field 2" "value 2"`,
    streamTimestampId: `'*' යනු ස්වයංක්\u200dරීයව ජනනය කළ හෝ <millisecondsTime>-<sequenceNumber> ලෙස පිරිවිතර`,
    unableToLoadKey: ({
      key
    }) => {
      return `මෙම යතුර පූරණය කළ නොහැක: ${key}. සමහර විට යතුර මකා දමා ඇත. නිවැරදි දෝෂය කොන්සෝලයේ ඇත.`;
    },
    bigJson: "මෙම JSON වස්තුව 10 kb ට වඩා වැඩියි, එබැවින් ඔබ කරන දේ දන්නා බවට වග බලා ගන්න, මන්ද සමහර කාර්යයන් රෙන්ඩරින්ගේදී මන්දගාමී විය හැක.",
    addNode: "නෝඩයක් එක් කරන්න",
    validateJson: "JSON වලංගු කරන්න",
    reducedFunction: `අඩු කළ ක්\u200dරියාකාරිත්වය`,
    tooManyKeys: opts => {
      return `සම්පූර්ණ උපරිම කාර්යයන් සඳහා අවසර ලත් යතුරු මුළු ප්\u200dරමාණය ${opts.maxLightKeysCount} කි. මෙම දත්ත සමුදායේ අවසර ලත් මුළු යතුරු ${opts.count} ට වඩා ඇත. යතුරු වර්ග කිරීම සහ අමතර ගස් තොරතුරු අක්\u200dරීය කර ඇත. සෙවීම සේවාලාභියා වෙනුවට සේවාදායකයේ පමණක් සිදු වේ.`;
    },
    redisCommandNotFound: "ගැළපෙන Redis විධානයක් හමු නොවීය ...",
    treeKeyStore: `වර්ග කිරීම (ස්වාභාවික සංසන්දනය) සේවාලාභියා එනම් බ්\u200dරව්සරයේ ක්\u200dරියාත්මක වේ, එනම් 10k යතුරු වැනි විශාල කට්ටල සඳහා දඬුවමක් ඇත, පිටු රෙන්ඩරින්ගට සුළු කාලයක් එකතු විය හැක. Redis තුළ යතුරු වර්ග කිරීමක් නැත, මේ ආකාරයට පමණයි.`,
    socketIoTimeout: options => {
      return `Socket.IO මෙම ඉල්ලීම සඳහා කල් ඉකුත් විය (උපරිම ${options.timeout / 1000} තත්පර) ...`;
    },
    resizerInfo: options => {
      return `වම් හෝ දකුණු පැනලයේ අවම පළල ${options.width}px`;
    },
    jsonViewNotParsable: "මෙම අගය JSON ලෙස විග්\u200dරහ කළ නොහැක  ",
    ttlTitle: "TTL තත්පර වලින් සකසන්න",
    passwordSecure: "මුරපදය හිස් විය හැක, නමුත් තවමත් අක්ෂර පෙන්වනු ඇත, මෙය ආරක්ෂිත විශේෂාංගයකි.",
    tlsWithoutCert: "අමතර සහතිකයක් නොමැතිව TLS සක්\u200dරීය කරන්න",
    tlsRejectUnauthorized: "අනවසර සහතිකය ප්\u200dරතික්ෂේප කරන්න",
    tlsSecure: "ඔබට P3X සමඟ ආරම්භ වන TLS වින්\u200dයාසයක් පෙනෙන්නේ නම් හෝ සියලුම TLS සැකසුම් සමානව පෙනේ නම්, එය ආරක්ෂිත විශේෂාංගයකි. සැකසුම් වෙනස් කිරීමට, මෙම සැකසුම් හිස් හෝ වෙනත් දෙයකින් ආදේශ කරන්න, ඒවා සුරැකෙනු ඇත. ඔබ TLS සැකසුම් වෙනස් නොකරන්නේ නම්, සැකසුම් සේවාදායකයේ ඇති ආකාරයටම පවතිනු ඇත.",
    treeSeparatorEmpty: "ගස් වෙන්කරන්නා හිස් නම්, ගසට කැදැලි නෝඩ නොමැත, සරල ලැයිස්තුවක් පමණි",
    treeSeparatorEmptyNote: "කැදැලි නෝඩ නැත, සරල ලැයිස්තුවක් පමණි",
    welcomeConsole: "Redis කොන්සෝලයට සාදරයෙන් පිළිගනිමු",
    welcomeConsoleInfo: "කර්සරය ඉහළ හෝ පහළ ඉතිහාසය සක්\u200dරීය කර ඇත",
    redisListIndexInfo: "එකතු කිරීමට හිස්, -1 ආරම්භයට එක් කිරීමට හෝ පෙන්වා ඇති ස්ථානයට සුරකින්න.",
    console: "කොන්සෝලය",
    connectiondAdd: "සම්බන්ධතාවය එක් කරන්න",
    connectiondEdit: "සම්බන්ධතාවය සංස්කරණය කරන්න",
    connectiondView: "සම්බන්ධතාවය බලන්න",
    connections: "සම්බන්ධතා",
    licenseInfo: "බලපත්\u200dරය",
    licenseEditable: "බලපත්\u200dරය සංස්කරණය කළ හැක",
    licenseEditableYes: "ඔව්",
    licenseEditableNo: "නැත",
    licenseTerminalOnly: "බලපත්\u200dරය සේවාදායක පර්යන්තයෙන් පමණක් වින්\u200dයාස කළ හැක.",
    licenseTierPolicyTitle: "මට්ටම් ප්\u200dරතිපත්තිය",
    licenseTierPolicyText: "<h4>නොමිලේ</h4>මූලික Redis UI පමණි; SSH උමගක් නැත, කියවීම පමණක් සම්බන්ධතා ප්\u200dරකාරය නැත, Cluster/Sentinel නැත, JSON සංස්කරණය/ද්විමය උඩුගත/ද්විමය බාගත නැත, ReJSON නැත.<br/><strong>මිල: 0 HUF/මාසය (\u20ac0/මාසය).</strong><br/><br/><h4>Pro</h4>SSH උමගක්, කියවීම පමණක් සම්බන්ධතා ප්\u200dරකාරය (--readonly-connections/-r ඇතුළුව), JSON සංස්කරණය, ද්විමය උඩුගත, ද්විමය බාගත, ReJSON.<br/><strong>මූලික මිල: 400 HUF/මාසය (\u20ac1/මාසය) හෝ 4,000 HUF/වසරකට (\u20ac10/වසරකට).</strong><br/><strong>27% VAT සමඟ මුළු: 500 HUF/මාසය (\u20ac1.27/මාසය) හෝ 5,100 HUF/වසරකට (\u20ac12.70/වසරකට).</strong><br/><br/><h4>Enterprise</h4>SSH උමගක්, Cluster සහ Sentinel, තවද JSON සංස්කරණය, ද්විමය උඩුගත, ද්විමය බාගත, ReJSON; --readonly-connections/-r ද ක්\u200dරියා කරයි.<br/><strong>මූලික මිල: 1,200 HUF/මාසය (\u20ac3/මාසය) හෝ 12,000 HUF/වසරකට (\u20ac30/වසරකට).</strong><br/><strong>27% VAT සමඟ මුළු: 1,500 HUF/මාසය (\u20ac3.81/මාසය) හෝ 15,200 HUF/වසරකට (\u20ac38.10/වසරකට).</strong><br/><br/><h4>වාර්ෂික නියමය</h4>වාර්ෂික මිල මාසික මිලේ 10x වේ.<br/><br/><h4>ආසන</h4>පෙරනිමි බලපත්\u200dරයට ආසන 5ක් ඇතුළත් වේ. ඔබට තවත් ආසන අවශ්\u200dය නම්, <a href='mailto:support@corifeus.com'>support@corifeus.com</a> හරහා අපව සම්බන්ධ කර ගන්න.<br/><br/><h4>Enterprise අත්හදා බැලීම</h4>සැබෑ විද්\u200dයුත් තැපැල් ලිපිනයක් ඇති ඕනෑම කෙනෙකුට දින 10ක් නොමිලේ (පරීක්ෂණ විද්\u200dයුත් තැපෑල නොවේ).<br/><hr/><h4>විද්\u200dයුත් තැපෑලෙන් බිල්පත් තොරතුරු</h4>නම, බිල්පත් විද්\u200dයුත් තැපෑල, රට කේතය, තැපැල් කේතය, නගරය, ලිපිනය, VAT ID (විකල්ප).<br/><br/><h4>ගෙවීම</h4>PayPal ගෙවීම HUF (forint) වලින් පමණක් ලබා ගත හැක; <a href='https://paypal.me/corifeus'>https://paypal.me/corifeus</a> @ මුදල් යැවීමෙන් පසු මම ඔබට ඉන්වොයිසියක් එවන්නෙමි. සියලුම ගෙවීම් ආපසු නොගෙවේ.<br/><br/><h4>VAT</h4>VAT මිලට එකතු වේ (හංගේරියාවේ 27%).<br/><hr/><h4>සම්බන්ධ වන්න</h4>ඔබට ආයුබෝවන් කීමට හෝ ප්\u200dරශ්නයක් ඇත්නම්, <a href='mailto:support@corifeus.com'>support@corifeus.com</a> අමතන්න.<br/><hr/><h4>භාෂාව</h4>ඉන්වොයිසිය සහ බලපත්\u200dර විද්\u200dයුත් තැපැල් සන්නිවේදනය ඉංග්\u200dරීසියෙන්. ඉන්වොයිසි මුදල් HUF.<br/><hr/><h4>සටහන</h4>බලපත්\u200dර වලංගුකරණයට අන්තර්ජාල ප්\u200dරවේශය අවශ්\u200dයයි.",
    licenseState: "තත්ත්වය",
    licenseStateActive: "සක්\u200dරීය",
    licenseStateInactive: "අක්\u200dරීය",
    licenseStateNoLicense: "බලපත්\u200dරයක් නැත",
    licenseKeyMasked: "සුරකින ලද යතුර",
    licenseTier: "මට්ටම",
    licenseValid: "වලංගු",
    licenseStatus: "බලපත්\u200dර තත්ත්වය",
    licenseReason: "හේතුව",
    licenseCheckedAt: "පරීක්ෂා කළ වේලාව",
    licenseStartsAt: "ආරම්භ වේලාව",
    licenseExpiresAt: "කල් ඉකුත් වන වේලාව",
    licenseDaysLeft: "ඉතිරි දින",
    licenseMaxDevices: "උපරිම උපාංග",
    licenseActiveDevices: "සක්\u200dරීය උපාංග",
    licenseActiveDevicesInfo: "උපාංගයක් තවදුරටත් භාවිතා නොකරන්නේ නම්, එහි ආසනය මිනිත්තු 75කට පසු ස්වයංක්\u200dරීයව මුදා හරිනු ලැබේ.",
    licenseCustomerEmail: "පාරිභෝගික විද්\u200dයුත් තැපෑල",
    licenseFeatures: "විශේෂාංග",
    licenseFeaturesEmpty: "අමතර විශේෂාංග නැත",
    licenseFeatureReadonlyMode: "කියවීම පමණක් සම්බන්ධතා ප්\u200dරකාරය",
    licenseFeatureReadonlyConnectionsFlag: "කියවීම පමණක් සම්බන්ධතා (--readonly-connections/-r)",
    licenseFeatureSsh: "SSH උමගක්",
    licenseFeatureCluster: "Cluster සම්බන්ධතා",
    licenseFeatureSentinel: "Sentinel සම්බන්ධතා",
    licenseFeatureReJSON: "ReJSON (JSON දත්ත වර්ගය)",
    keysSort: {
      on: "යතුරු වර්ග කිරීම සක්\u200dරීයයි",
      off: "යතුරු වර්ග කිරීම අක්\u200dරීයයි"
    },
    cluster: {
      on: "Cluster සක්\u200dරීයයි",
      off: "Cluster අක්\u200dරීයයි"
    },
    sentinel: {
      on: "Sentinel සක්\u200dරීයයි",
      off: "Sentinel අක්\u200dරීයයි",
      name: "Sentinel නම"
    },
    readonly: {
      on: "කියවීම පමණක් සක්\u200dරීයයි",
      off: "කියවීම පමණක් අක්\u200dරීයයි"
    },
    proSshOnly: "SSH Pro හෝ Enterprise වලින් ලබා ගත හැක.",
    proReadonlyOnly: "කියවීම පමණක් සම්බන්ධතා ප්\u200dරකාරය Pro හෝ Enterprise වලින් ලබා ගත හැක.",
    enterpriseClusterSentinelOnly: "Cluster සහ Sentinel Enterprise වලින් පමණක් ලබා ගත හැක.",
    theme: {
      light: "ලා",
      dark: "අඳුරු enterprise",
      darkNeu: "අඳුරු",
      darkoBluo: "Darko bluo",
      enterprise: "Enterprise",
      redis: "Redis",
      matrix: "Matrix"
    },
    connected: opts => {
      return `සම්බන්ධිතයි: ${opts.name}`;
    },
    tree: "ගස",
    askAuth: "අවසරය ඉල්ලන්න",
    keyboardShortcuts: "Keyboard Shortcuts",
    about: "About",
    supportedLanguages: "Supported Languages",
    version: "Version",
    redisVersion: "Redis Version",
    modules: "modules",
    shortcutRefresh: "Refresh",
    shortcutSearch: "Focus Search",
    shortcutNewKey: "New Key",
    shortcutDisconnect: "විසන්ධි කරන්න",
    themeAuto: "Auto (system)",
    shortcutCommandPalette: "Command Palette",
    commandPalette: "Command Palette",
    noResults: "No results",
    redisCommandsReference: "Redis විධානය",
    ungrouped: "කණ්ඩායම් නොකළ",
    grouped: "Grouped",
    connectFirst: "connectFirst",
    searchLanguage: "භාෂාව සොයන්න...",
    exportProgress: "යතුරු අපනයනය කරමින්...",
    importProgress: "යතුරු ආනයනය කරමින්...",
    importPreview: "පෙරදසුන",
    importOverwrite: "නැවත ලියන්න",
    importSkip: "මඟ හරින්න",
    importConflict: "යතුර දැනටමත් පවතී නම්:",
    noKeysToExport: "අපනයනය කිරීමට යතුරු නැත",
    time: "කාලය",
    loading: "පූරණය වෙමින්...",
    autoRefresh: "ස්වයං",
    exportSearchHint: "වත්මන් සෙවීමට ගැළපෙන යතුරු පමණක් අපනයනය කරයි",
    importSearchHint: "ආනයනය සෙවුම් ප්‍රතිඵලවලට පමණක් නොව සම්පූර්ණ දත්ත සමුදායට අදාළ වේ",
    importNoKeys: "ගොනුවේ යතුරු හමු නොවීය",
  },
  status: {
    dataCopied: "දත්ත පසුරු පුවරුවේ ඇත",
    licenseSaved: "බලපත්\u200dරය සුරකින ලදී",
    exportDone: "අපනයනය සම්පූර්ණයි",
    indexCreated: "සුචිය සාදන ලදී",
    indexDropped: "සුචිය මකා දමන ලදී",
    importDone: (opts) => `ආනයනය සම්පූර්ණයි: ${opts.created} සාදන ලදී, ${opts.skipped} මඟ හැරිණි, ${opts.errors} දෝෂ`,
    nodeRemoved: "නෝඩය ඉවත් කරන ලදී",
    keyIsNotExisting: "මෙම යතුර මකා දමා හෝ කල් ඉකුත් වී ඇති විය හැක.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "යතුරක් නැත";
      } else if (opts.keyCount === 1) {
        return "යතුරු 1";
      } else {
        return `යතුරු ${opts.keyCount}`;
      }
    },
    treeExpandAll: "සියලුම ගස් කොළ පුළුල් කරන්න. මෙම මෙහෙයුම මිල අධික විය හැකි අතර කාලය ගත විය හැක ...",
    noRedisKeys: "මෙම දත්ත සමුදායේ යතුරු නැත.",
    redisConnected: "Redis සාර්ථකව සම්බන්ධ විය",
    reloadingDataInfo: "Redis දත්ත තොරතුරු නැවත පූරණය වෙමින්",
    added: "එක් කරන ලදී",
    saved: "යාවත්කාලීන කරන ලදී",
    cancelled: "අවලංගු කරන ලදී",
    deleted: "මකන ලදී",
    savedRedis: "Redis දත්ත සුරකින ලදී",
    redisDisconnected: opts => {
      return `වත්මන් සම්බන්ධතාවයේ දෝෂයක් ඇති විය: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `db දර්ශකය ${opts.db} ලෙස සකසන ලදී. `;
    },
    treeDeleted: opts => {
      return `ගස් යතුර මකන ලදී (${opts.key}).`;
    },
    deletedKey: opts => {
      return `යතුර මකන ලදී (${opts.key}).`;
    },
    renamedKey: "මෙම යතුර නැවත නම් කරන ලදී",
    ttlChanged: "මෙම යතුරේ TTL වෙනස් කරන ලදී",
    notInteger: "මෙම ආදානය පූර්ණ සංඛ්\u200dයාවක් නොවේ",
    persisted: "මෙම යතුර සදාකාලිකව පවතී",
    set: "යතුර සකසන ලදී/එක් කරන ලදී"
  },
  code: {
    "delete-connection": "මෙම සම්බන්ධතාවය මකා දමන ලදී, එබැවින් ඔබ මෙම Redis අවස්ථාවෙන් විසන්ධි වී ඇත.",
    "save-connection": "මෙම සම්බන්ධතාවය වෙනස් කරන ලදී, එබැවින් ඔබ මෙම Redis අවස්ථාවෙන් විසන්ධි වී ඇත. ඔබට නැවත සම්බන්ධ විය හැක.",
    "readonly-connections": "සම්බන්ධතා එක් කිරීම/සුරැකීම/මකා දැමීම කියවීම පමණි!",
    "readonly-connection-mode": "මෙම සම්බන්ධතාවය කියවීම පමණක් ප්\u200dරකාරයකි!",
    "list-out-of-bounds": "මෙම ලැයිස්තු දර්ශකය සීමාවෙන් පිටතය",
    "donation-ware-feature": "මෙම විශේෂාංගය පරිත්\u200dයාග අනුවාදයේ ඇත.",
    "feature-pro-readonly-required": "කියවීම පමණක් සම්බන්ධතා ප්\u200dරකාරයට Pro හෝ Enterprise බලපත්\u200dරයක් අවශ්\u200dයයි.",
    "feature-pro-ssh-required": "SSH උමගට Pro හෝ Enterprise බලපත්\u200dරයක් අවශ්\u200dයයි.",
    "feature-enterprise-cluster-sentinel-required": "Cluster සහ Sentinel සඳහා Enterprise බලපත්\u200dරයක් අවශ්\u200dයයි.",
    "feature-pro-json-binary-required": "JSON සංස්කරණය, ද්විමය උඩුගත සහ ද්විමය බාගත කිරීමට Pro හෝ Enterprise බලපත්\u200dරයක් අවශ්\u200dයයි.",
    "feature-pro-rejson-required": "ReJSON (JSON දත්ත වර්ගය) සඳහා Pro හෝ Enterprise බලපත්\u200dරයක් අවශ්\u200dයයි.",
    "invalid-json-value": "අගය වලංගු JSON නොවේ.",
    "http_auth_required": "අවසරය අවශ්\u200dයයි: කරුණාකර HTTP Basic Auth සමඟ සත්\u200dයාපනය කර නැවත පූරණය කරන්න.",
    "auto-connection-failed": "සම්බන්ධතාවය ඉවත් කර ඇති විය හැකි අතර ස්වයංක්\u200dරීය සම්බන්ධතාවය මේ නිසා අසාර්ථක විය.",
    invalid_console_command: "මෙම විධානය GUI හරහා ක්\u200dරියා නොකරයි."
  },
  licenseReason: {
    LICENSE_VALID: "බලපත්\u200dරය වලංගුයි",
    LICENSE_INVALID: "බලපත්\u200dරය අවලංගුයි",
    LICENSE_MISSING: "බලපත්\u200dර යතුරක් සකසා නැත",
    LICENSE_DISABLED: "සේවාදායක වින්\u200dයාසයේ බලපත්\u200dරය අක්\u200dරීය කර ඇත",
    LICENSE_NOT_FOUND: "බලපත්\u200dරය හමු නොවීය",
    LICENSE_EXPIRED: "බලපත්\u200dරය කල් ඉකුත් වී ඇත",
    LICENSE_CLEARED: "බලපත්\u200dර යතුර ඉවත් කරන ලදී",
    LICENSE_MAX_DEVICES_REACHED: "උපරිම උපාංග ආසන සීමාවට ළඟා විය",
    PRODUCT_MISMATCH: "බලපත්\u200dර නිෂ්පාදනය නොගැළපේ"
  },
  licenseStatusValue: {
    active: "සක්\u200dරීය",
    deleted: "මකන ලදී",
    all: "සියල්ල",
    expired: "කල් ඉකුත් වී ඇත",
    missing: "අතුරුදහන්",
    inactive: "අක්\u200dරීය"
  },
  form: {
    error: {
      required: "අවශ්\u200dයයි",
      port: "පෝර්ටුව 1-65535 අතර විය යුතුය",
      invalid: "පෝරමය අවලංගුයි"
    },
    connection: {
      label: {
        name: "නම",
        group: "Group",
        host: "සත්කාරක නම",
        port: "පෝර්ටුව",
        password: "මුරපදය",
        username: "පරිශීලක නාමය"
      }
    },
    treeSettings: {
      maxValueDisplay: "උපරිම අගය පෙන්වීමේ දිග",
      maxValueDisplayInfo: "0 ලෙස සකසන්නේ නම්, සම්පූර්ණ අගයන් පෙන්වන්න. 0 ට වඩා වැඩි නම්, මෙම දිගට කපන්න. -1 නම්: තන්තු සඳහා, සංස්කරණය කරන තුරු අගය සඟවන්න; වෙනත් වර්ග සඳහා, සම්පූර්ණ අන්තර්ගතය පෙන්වන්න.",
      maxKeys: "උපරිම යතුරු ගණන",
      maxKeysInfo: "GUI කඩා නොවැටෙන පරිදි, අපි උපරිම යතුරු ගණන සීමා කරමු.",
      keyCount: () => {
        return `යතුරු ගණන: ${p3xr.state.keysRaw.length}`;
      },
      label: {
        animation: "සජීවිකරණය භාවිතා කරන්න",
        noAnimation: "සජීවිකරණය නැත",
        jsonFormatTwoSpace: "හිස්තැන් 2 කින් JSON ආකෘතිකරණය",
        jsonFormatFourSpace: "හිස්තැන් 4 කින් JSON ආකෘතිකරණය",
        formName: "Redis සැකසුම්",
        searchModeClient: "සේවාලාභී සෙවුම් ප්\u200dරකාරය",
        searchModeServer: "සේවාදායක සෙවුම් ප්\u200dරකාරය",
        searchModeStartsWith: "ආරම්භ වන ප්\u200dරකාරයෙන් සොයන්න",
        searchModeIncludes: "ඇතුළත් වන ප්\u200dරකාරයෙන් සොයන්න"
      },
      field: {
        treeSeparator: "ගස් වෙන්කරන්නා",
        treeSeparatorSelector: "ගස් වෙන්කරන්නා තෝරකය",
        page: "ගස් පිටු ගණන",
        keyPageCount: "යතුරු පිටු ගණන",
        keysSort: "යතුරු වර්ග කරන්න",
        searchMode: "සෙවුම් ප්\u200dරකාරය",
        searchModeStartsWith: "සෙවුම ආරම්භ වේ / ඇතුළත් වේ"
      },
      error: {
        keyPageCount: "යතුරු පිටු ගණන 5 - 100 අතර පූර්ණ සංඛ්\u200dයාවක් විය යුතුය",
        page: "පිටු ගණන 10 - 5000 අතර පූර්ණ සංඛ්\u200dයාවක් විය යුතුය",
        maxValueDisplay: "උපරිම පෙන්වීමේ අගය -1 සහ 32768 අතර පූර්ණ සංඛ්\u200dයාවක් විය යුතුය",
        maxKeys: "උපරිම යතුරු ගණන 100 සහ 100000 අතර පූර්ණ සංඛ්\u200dයාවක් විය යුතුය"
      }
    },
    key: {
      label: {
        formName: {
          add: "නව Redis යතුරක් එක් කරන්න",
          edit: "Redis යතුර සංස්කරණය කරන්න",
          append: "පවතින Redis යතුරට එක් කරන්න"
        }
      },
      field: {
        streamTimestamp: "කාල මුද්\u200dරාව",
        key: "යතුර",
        type: "වර්ගය",
        index: "දර්ශකය",
        hashKey: "Hash යතුර",
        score: "ලකුණු",
        value: "අගය"
      },
      error: {
        streamTimestamp: "කාල මුද්\u200dරාව අවශ්\u200dයයි, Redis ආකෘතිය හෝ * ලෙස",
        key: "යතුර අවම වශයෙන් එක් අක්ෂරයක් විය යුතුය",
        hashKey: "hash වගු යතුර අවම වශයෙන් එක් අක්ෂරයක් විය යුතුය",
        score: "වර්ග කළ කට්ටලයේ ලකුණු අවශ්\u200dයයි",
        value: "අගය අවශ්\u200dයයි"
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
      title: "සොයන්න",
      index: "සුචිය",
      query: "විමසුම",
      results: "ප්‍රතිඵල",
      noIndex: "සුචි හමු නොවීය",
      createIndex: "සුචිය සාදන්න",
      dropIndex: "සුචිය මකන්න",
      indexInfo: "සුචි තොරතුරු",
      indexName: "සුචි නම",
      prefix: "යතුරු උපසර්ගය (විකල්ප)",
      fieldName: "ක්ෂේත්‍ර නම",
    },
    monitor: {
      title: "අධීක්ෂණය",
      memory: "මතකය",
      opsPerSec: "මෙහෙයුම්/තත්පර",
      clients: "සේවාදායකයින්",
      blocked: "අවහිර",
      hitsMisses: "පහර අනුපාතය",
      networkIo: "ජාලය I/O",
      slowLog: "මන්දගාමී ලොගය",
      totalCommands: "මුළු",
      expired: "කල් ඉකුත්",
      evicted: "පිටුවහල්",
      clientList: "සේවාදායක ලැයිස්තුව",
      topKeys: "මතකය අනුව විශාලතම යතුරු",
      killClient: "සේවාදායකයා නැවැත්වීම",
      clientKilled: "සේවාදායකයා නැවැත්විණි",
      confirmKillClient: "මෙම සේවාදායකයා නැවැත්වීමට විශ්වාසද?",
      noKeys: "යතුරු නැත",
      noClients: "සේවාදායකයින් නැත",
    },
    overview: {
      noConnected: "Redis වෙත සම්බන්ධතාවයක් නැත.",
      overviewClients: "සේවාලාභීන් ගණන අනුව සම්බන්ධිත ලැයිස්තුව",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "සේවාලාභියෙක් 1";
        }
        return `සේවාලාභීන් ${opt.length}`;
      }
    },
    key: {
      label: {
        key: "යතුර",
        encoding: "සංකේතනය",
        length: "ප්\u200dරමාණය",
        ttl: "TTL",
        ttlTitle: "ජීවිත කාලය",
        type: "වර්ගය",
        ttlNotExpire: "කල් ඉකුත් නොවේ",
        lengthString: "බයිට්",
        lengthItem: "අයිතම",
        actions: "ක්\u200dරියා"
      },
      list: {
        table: {
          index: "දර්ශකය",
          value: "අගය"
        }
      },
      hash: {
        table: {
          hashkey: "Hash යතුර",
          value: "අගය"
        }
      },
      set: {
        table: {
          value: "සාමාජිකයා"
        }
      },
      zset: {
        table: {
          value: "සාමාජිකයා",
          score: "ලකුණු"
        }
      },
      stream: {
        table: {
          timestamp: "කාල මුද්\u200dරා ID",
          field: "ක්ෂේත්\u200dරය",
          value: "අගය"
        }
      }
    },
    treeControls: {
      settings: "ගස් සැකසුම්",
      expandAll: "සියල්ල පුළුල් කරන්න",
      collapseAll: "සියල්ල හකුළන්න",
      search: {
        search: "යතුරු තුළ සොයන්න",
        clear: "වත්මන් සෙවුම හිස් කිරීමට මකන්න",
        placeholderClient: "සේවාලාභී පැත්තෙන් සොයන්න",
        placeholderServer: "සේවාදායක පැත්තෙන් සොයන්න",
        info: "සේවාලාභී පැත්තේ සෙවුම යනු සෙවුම් ආදානයේ පෙළට ගැළපීමයි. සේවාදායක පැත්තේ සෙවුම යනු *{search-text}* ලෙස යතුරු රටා තුළ සෙවීමයි. විශාල සෙවුම් කට්ටල සඳහා, සේවාදායක පැත්තේ සෙවුම භාවිතා කිරීම වඩා හොඳය. කුඩා සෙවුම් කට්ටල සඳහා, සේවාලාභී පැත්තේ සෙවුම් ප්\u200dරකාරය භාවිතා කිරීම වඩා හොඳය." + ` යතුරු ගණන ${p3xr.settings.maxLightKeysCount} ට වඩා වැඩි නම්, ඔබට සේවාදායක පැත්තෙන් පමණක් සෙවිය හැක.`,
        largeSetInfo: "විශාල කට්ටලයක, සේවාලාභී පැත්තේ සෙවුම අක්\u200dරීය කර ඇත. එබැවින් දැන් සේවාදායක පැත්තේ සෙවුම පමණක් හැකිය.",
        infoDetails: "සෙවුම ක්\u200dරියා කරන ආකාරය දැන ගැනීමට, කරුණාකර සැකසුම් පරීක්ෂා කරන්න"
      },
      pager: {
        next: "ඊළඟ",
        prev: "පෙර",
        first: "පළමු",
        last: "අවසාන"
      }
    }
  },
  time: {
    loading: "පූරණය වෙමින්...",
    years: "අවුරුදු",
    months: "මාස",
    days: "දින",
    year: "අවුරුද්ද",
    month: "මාසය",
    day: "දිනය"
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
