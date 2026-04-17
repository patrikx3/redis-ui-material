const strings = {
  error: {
    server_error: "සේවාදායක දෝෂයක්, කරුණාකර නැවත උත්සාහ කරන්න",
    aiPromptTooLong: "AI විමසුම ඉතා දිගුය (උපරිම අක්ෂර 4096)",
  },
  title: {
    donate: "පරිත්\u200dයාග කරන්න",
    donateTitle: "P3X Redis UI සඳහා සහාය වන්න",
    donateDescription: "P3X Redis UI නිදහස්, විවෘත මූලාශ්‍ර ව්‍යාපෘතියකි. යෙදුම, AI විශේෂාංග, Docker පින්තූර, සේවාදායක සහ යටිතල පහසුකම් නඩත්තු කිරීමේ වියදම් සංවර්ධකයාගේ සාක්කුවෙන් පැමිණේ. ඔබට මෙම මෙවලම ප්‍රයෝජනවත් යැයි හැඟේ නම්, කරුණාකර පරිත්‍යාගයක් මගින් එහි අඛණ්ඩ සංවර්ධනයට සහාය දීම සලකා බලන්න. සෑම දායකත්වයක්ම ව්‍යාපෘතිය ජීවමාන හා වර්ධනය වෙමින් පවත්වා ගැනීමට උපකාරී වේ. ස්තූතියි!",
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
    threads: "threads"
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
    deleteSearchKeys: opts => {
      return `"${opts.pattern}" සමඟ ගැළපෙන සියලුම යතුරු මකා දැමීමට අවශ්‍ය බව විශ්වාසද? යතුරු ${opts.count}ක් හමු විය.`;
    },
    socketioConnectError: "Socket.IO සේවාදායකයට සම්බන්ධ විය නොහැක, ඔබට නැවත පූරණය කර සම්බන්ධතා දෝෂය විසඳීමට උත්සාහ කළ හැක, සේවාලාභියාට එය තනිවම විසඳන්නේ කෙසේදැයි නොදනී.",
    socketioAuthRequired: "Socket.IO අවසරය අවශ්\u200dයයි. කරුණාකර HTTP Basic Auth (පරිශීලක නාමය/මුරපදය) සමඟ සත්\u200dයාපනය කර නැවත පූරණය කරන්න.",
    invalidCredentials: "වලංගු නොවන පරිශීලක නාමය හෝ මුරපදය.",
    delete: "මකන්නද?",
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
    deleteAllKeysMenu: (opts) => `සියල්ල මකන්න ${opts.count}`,
    importKeys: "යතුරු ආනයනය",
    deleteSearchKeys: (opts) => `ගැළපෙන යතුරු ${opts.count}ක් මකන්න`,
    saveWithFormatJson: "ආකෘතිය සමඟ සුරකින්න",
    formatJson: "Json ආකෘතිකරණය",
    wrap: "ඔතන්න",
    unwrap: "ලිහන්න",
    downloadJson: "JSON බාගත කරන්න",
    pubsubMonitor: "PubSub",
    pulse: "Pulse",
    profiler: "Profiler",
    memoryAnalysis: "Analysis",
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
    logout: "පිටවීම",
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
    fieldTtl: "ක්ෂේත්‍ර TTL",
    digest: "සාරාංශය",
    delete: "මකන්න",
    remove: "ඉවත් කරන්න",
    areYouSure: "ඔබට විශ්වාසද?",
    sure: "විශ්වාසයි",
    testConnection: "සම්බන්ධතාවය පරීක්ෂා කරන්න",
    getKey: "Redis යතුර සහ ආශ්\u200dරිත දත්ත පූරණය වෙමින් ...",
    jsonViewShow: "JSON පෙන්වන්න",
    jsonViewEditor: "JSON සංස්කරණය",
    quickConsole: "ඉක්මන් කොන්සෝලය",
    moveUp: "ඉහළට ගෙනයන්න",
    moveDown: "පහළට ගෙනයන්න",
  },
  diff: {
    reviewChanges: "\u0dc0\u0dd9\u0db1\u0dc3\u0dca\u0d9a\u0db8\u0dca \u0dc3\u0db8\u0dcf\u0dbd\u0ddd\u0da0\u0db1\u0dba \u0d9a\u0dbb\u0db1\u0dca\u0db1",
    inline: "\u0db4\u0dda\u0dc5\u0dd2\u0dba \u0dad\u0dd4\u0dc5",
    sideBySide: "\u0db4\u0dd0\u0dad\u0dca\u0dad\u0dd9\u0db1\u0dca \u0db4\u0dd0\u0dad\u0dca\u0dad\u0da7",
    additions: "\u0d91\u0d9a\u0dad\u0dd4 \u0d9a\u0dd2\u0dbb\u0dd3\u0db8\u0dca",
    deletions: "\u0d89\u0dc0\u0dad\u0dca \u0d9a\u0dd2\u0dbb\u0dd3\u0db8\u0dca",
    unchangedLines: "\u0dc0\u0dd9\u0db1\u0dc3\u0dca \u0db1\u0ddc\u0dc0\u0dd6 \u0db4\u0dda\u0dc5\u0dd2",
    noChanges: "\u0dc0\u0dd9\u0db1\u0dc3\u0dca\u0d9a\u0db8\u0dca \u0dc4\u0db3\u0dd4\u0db1\u0dcf\u0d9c\u0dad \u0db1\u0ddc\u0dc4\u0dd0\u0d9a\u0dd2 \u0dc0\u0dd2\u0dba",
    before: "\u0db4\u0dd9\u0dbb",
    after: "\u0db4\u0dc3\u0dd4",
  },
  label: {
    id: {
      nodeId: 'නෝඩ ID',
      id: "සම්බන්ධතා ID",
      info: "ඔබට sshPassword, sshPrivateKey, password, tlsCrt, tlsKey, tlsCa හි ගුණාංග වෙනස් කිරීමට අවශ්\u200dය නැතිනම්, කරුණාකර ගුණාංග අගයන් නොවෙනස්ව තැබීමට එම ගුණාංගවල සම්බන්ධතා ID ඇතුළත් කරන්න. නෝඩ මුරපදයේ එම තර්කනයම අවශ්\u200dය නම්, නෝඩ මුරපදයේ නෝඩ ID ඇතුළත් කරන්න."
    },
    secureFeature: 'ඔබට P3X සමඟ ආරම්භ වන අගයක් පෙනෙන්නේ නම් සහ සියල්ල සමානව පෙනේ නම්, එය ආරක්ෂිත විශේෂාංගයකි. සැකසුම් වෙනස් කිරීමට, මෙම සැකසුම් හිස් හෝ වෙනත් දෙයකින් ආදේශ කරන්න, ඒවා සුරැකෙනු ඇත. ඔබ සැකසුම් වෙනස් නොකරන්නේ නම්, සැකසුම් සේවාදායකයේ ඇති ආකාරයටම පවතිනු ඇත.',
    aiTranslating: "පරිවර්තනය වෙමින්...",
    aiSettings: "AI සැකසුම්",
    aiGroqApiKey: "Groq API යතුර",
    aiGroqApiKeyInfo: "විකල්ප. වඩා හොඳ ක්‍රියාකාරීත්වය සඳහා ඔබේම Groq API යතුර. නොමිලේ යතුරක් ලබා ගන්න",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "AI API යතුර සුරකින ලදී",
    aiGroqApiKeyInvalid: "වලංගු නොවන Groq API යතුර",
    aiGroqApiKeyNotSet: "සකසා නැත (සේවාදායක පෙරනිමිය)",
    aiEnabled: "AI සක්‍රියයි",
    aiEnabledYes: "ඔව්",
    aiEnabledNo: "නැහැ",
    aiRouteViaNetwork: "network.corifeus.com හරහා මාර්ගගත කරන්න",
    aiRoutingDirect: "ඔබගේම API යතුර භාවිතා කර විමසුම් network.corifeus.com මඟ හැර සෘජුවම Groq වෙත යවයි.",
    aiRoutingNetwork: "AI විමසුම් network.corifeus.com හරහා මාර්ගගත කෙරේ. ඔබට ඔබේම නොමිලේ Groq API යතුරක් තිබේ නම්, මෙම ස්විචය අක්‍රිය කර network.corifeus.com නොමැතිව සෘජුවම Groq වෙත මාර්ගගත කළ හැක.",
    aiMaxTokens: "AI උපරිම ටෝකන",
    aiMaxTokensInfo: "AI ප්‍රතිචාර සඳහා උපරිම ටෝකන ගණන. වැඩි අගයන් දිගු ප්‍රතිචාර ලබා දෙයි, නමුත් වැඩි API ක්‍රෙඩිට් භාවිත කළ හැක.",
    consoleDrawer: {
      toggleTooltip: "කොන්සෝලය පෙන්වන්න/සඟවන්න",
      clearTooltip: "කොන්සෝල ඉතිහාසය හිස් කරන්න",
      closeTooltip: "කොන්සෝලය වසන්න",
      aiSettingsTooltip: "AI සැකසුම්",
      modeRedis: "REDIS",
      modeAi: "AI",
      connectionChipNoDb: opts => `${opts.name}`,
      connectionChipWithDb: opts => `${opts.name} · db ${opts.db}`,
      pageChip: opts => `පිටුව: ${opts.page}`,
      connectingTo: opts => `${opts.name} වෙත සම්බන්ධ වෙමින්…`,
      connectedTo: opts => `${opts.name} වෙත සම්බන්ධයි (Redis ${opts.version} ${opts.mode}, මොඩියුල ${opts.modules} පූරණය කර ඇත)`,
      connectedToNoInfo: opts => `${opts.name} වෙත සම්බන්ධයි`,
      disconnectedFrom: opts => `${opts.name} සමඟ සම්බන්ධතාවය කඩවිය`,
      notConnected: "සම්බන්ධ වී නැත.",
      limitedAiOnly: "සීමිත AI පමණි — සාමාන්‍ය Redis ප්‍රශ්න සහ පිළිතුරු ක්‍රියා කරයි.",
      connectHint: "සජීවී රෝගනිර්ණය සඳහා මෙය ටයිප් කරන්න: connect <name>",
      cheatsheetHint: "ඔබට කුමක් අසන්න පුළුවන්ද බලන්න ai: help ටයිප් කරන්න.",
      needsConnection: "මෙයට සක්‍රීය සම්බන්ධතාවයක් අවශ්‍යයි. මුලින් \"connect <name>\" ටයිප් කරන්න.",
      aiNeedsConnectionReason: "සජීවී තත්ත්ව AI (tool use) Redis වෙත සම්බන්ධ වූ විට පමණක් ලබාගත හැක.",
      verbNeedsConnection: opts => `"${opts.verb}" සඳහා සක්‍රීය සම්බන්ධතාවයක් අවශ්‍යයි — මුලින් "connect <name>" ටයිප් කරන්න.`,
      aiLimitedMode: "AI සීමිත මාදිලියේ ඇත — ඔබ සම්බන්ධ වන තෙක් සාමාන්‍ය Redis දැනුම පිළිබඳ ප්‍රශ්න පමණක් ක්‍රියා කරයි.",
      welcomeDisconnected: "සාදරයෙන් පිළිගනිමු. ඔබ තවමත් කිසිදු Redis instance එකකට සම්බන්ධ වී නොමැත.",
      readyIndicator: "සූදානම්.",
    },
    cheatsheet: {
      title: "AI චීට්ෂීට් — මට අසන්න පුළුවන් මොනවාද?",
      subtitle: "කොන්සෝලයට අලවන්න ඕනෑම ප්‍රොම්ප්ට් එකක් ක්ලික් කරන්න. ඉන්පසු Enter ඔබන්න.",
      searchPlaceholder: "ප්‍රොම්ප්ට් පෙරහන් කරන්න…",
      openOfficialDocs: "Redis විධාන ↗",
      openOfficialDocsTooltip: "redis.io හි නිල Redis විධාන යොමුව විවෘත කරන්න",
      closeTooltip: "වසන්න (Esc)",
      empty: "ඔබේ පෙරනයට ගැළපෙන ප්‍රොම්ප්ට් නොමැත.",
      footerHint: "ඉඟිය: ඕනෑම භාෂාවකින් \"ai:\" පසුව ඕනෑම දෙයක් ටයිප් කරන්න — AI භාෂා 54ක් තේරුම් ගෙන අවශ්‍ය විට සජීවී Redis තත්ත්වය භාවිත කරයි.",

      // Each group has: name (category label), match (search-filter alias), prompts (array of example strings)
      groups: {
        diagnostics: {
          name: "සජීවී විනිශ්චය",
          description: "ආරක්ෂිත කියවීම-පමණක් මෙවලම් හරහා සජීවී සේවාදායක තත්ත්වය පරීක්ෂා කිරීමට AI ට කියන්න.",
          prompts: [
            "මතකය ඉහළ ඇයි?",
            "මන්දගාමීම විමසුම් 10 පෙන්වන්න",
            "කුමන සේවාදායකයන් සම්බන්ධ වී ඇත්ද?",
            "maxmemory ප්‍රතිපත්තිය කුමක්ද?",
            "මෑතකාලීන eviction කිසිවක් තිබේද?",
            "latency සිදුවීමක් තිබේද?",
            "සේවාදායකය කොපමණ කාලයක් ක්‍රියාත්මකව තිබේද?",
            "hit rate කුමක්ද?",
            "CPU භාවිතය පෙන්වන්න",
            "keyspace සාරාංශ කරන්න",
            "එක් එක් දත්ත වර්ගය කොපමණ මතකයක් භාවිත කරයිද?",
            "දැන් සේවාදායකය අවහිර කරන දෙයක් තිබේද?"
          ]
        },
        keys: {
          name: "යතුරු",
          description: "ගසෙහි ක්ලික් නොකර යතුරු පරීක්ෂා කිරීම, සොයා ගැනීම සහ විනිශ්චය කිරීම.",
          prompts: [
            "user:* හා ගැළපෙන සියලු යතුරු සොයන්න",
            "එක් එක් දත්ත සමුදායේ යතුරු කීයක් තිබේද?",
            "මෙම db හි විශාලතම hash පෙන්වන්න",
            "තත්පර 60ට වඩා අඩු TTL ඇති යතුරු සොයන්න",
            "කුමන යතුරුවලට TTL නැතිද?",
            "session:abc යතුර කුමන වර්ගයද?",
            "\"session:\" උපසර්ගයෙන් භාවිත වන මතකය ඇස්තමේන්තු කරන්න",
            "user:42 යතුරේ වස්තු කේතනය පෙන්වන්න",
            "අවසන් වීමට ආසන්න යතුරු තිබේද?",
            "කුමන namespace වැඩිම මතකය භාවිත කරයිද?"
          ]
        },
        dataTypes: {
          name: "දත්ත වර්ග",
          description: "සෑම Redis වර්ගයක්ම සඳහා නිර්මාණය/කියවීම/යාවත්කාලීනය සඳහා ස්වභාවික භාෂා වදන්.",
          prompts: [
            "name=Alice age=30 ක්ෂේත්‍ර සහිත user:1 නමින් hash එකක් සාදන්න",
            "list tasks වෙත අයිතම තුනක් එකතු කරන්න",
            "set favourites වෙත සාමාජිකයන් එකතු කරන්න",
            "sorted set leaderboard වෙත ලකුණු සහිත සාමාජිකයන් එකතු කරන්න",
            "stream events වෙත සිදුවීමක් එකතු කරන්න",
            "stream events වෙතින් අවසන් ඇතුළත් කිරීම් 10 ලබා ගන්න",
            "hash user:1 හි සියලු ක්ෂේත්‍ර ලබා ගන්න",
            "set favourites හි සාමාජිකයන් ලබා ගන්න",
            "leaderboard වෙතින් ලකුණු අනුව ඉහළ 10 ලබා ගන්න"
          ]
        },
        modules: {
          name: "මොඩියුල",
          description: "පූරණය කළ Redis මොඩියුල සඳහා විමසුම් (මොඩියුලය පවතින විට පමණක් පහත කාණ්ඩ දිස්වේ).",
          prompts: []
        },
        json: {
          name: "RedisJSON",
          description: "ReJSON මොඩියුලය පූරණය කළ විට ලබා ගත හැක.",
          prompts: [
            "user:42 හි { name: \"Alice\", age: 30 } සමඟ JSON ලේඛනයක් සාදන්න",
            "user:42 හි name ක්ෂේත්‍රය කියවන්න",
            "user:42 හි age 31 වෙත යාවත්කාලීන කරන්න",
            "සියලු JSON යතුරු ලැයිස්තුගත කරන්න",
            "JSON ලේඛනයකින් ක්ෂේත්‍රයක් මකන්න",
            "JSONPath භාවිතයෙන් කූඩු කළ ක්ෂේත්‍රයක් ලබා ගන්න"
          ]
        },
        search: {
          name: "RediSearch",
          description: "search මොඩියුලය පූරණය කළ විට ලබා ගත හැක.",
          prompts: [
            "සියලු සම්පූර්ණ-පාඨ දර්ශක ලැයිස්තුගත කරන්න",
            "idx:products දර්ශකය මත \"redis\" සඳහා සම්පූර්ණ-පාඨ සෙවුමක් ධාවනය කරන්න",
            "title (TEXT) සහ price (NUMERIC) ක්ෂේත්‍ර සහිත hash-පාදක දර්ශකයක් සාදන්න",
            "idx:products දර්ශකය පිළිබඳ තොරතුරු ලබා ගන්න",
            "idx:products දර්ශකය ඉවත් කරන්න",
            "මිල 10 සහ 50 අතර ලේඛන සොයන්න",
            "පාඨ සහ වෙක්ටර් සමානතාව ඒකාබද්ධ කරන දෙමුහුන් සෙවුමක් ලියන්න"
          ]
        },
        timeseries: {
          name: "RedisTimeSeries",
          description: "timeseries මොඩියුලය පූරණය කළ විට ලබා ගත හැක.",
          prompts: [
            "සියලු timeseries යතුරු ලැයිස්තුගත කරන්න",
            "temp:room1 වෙත දත්ත ලක්ෂ්‍යයක් එකතු කරන්න",
            "ඊයේ සිට දැන් දක්වා temp:room1 පරාසය ලබා ගන්න",
            "sensor=temp ලේබලය අනුව බහු-පරාසය ලබා ගන්න",
            "temp:room1 සඳහා sine-wave දත්ත ලක්ෂ්‍ය 100ක් ජනනය කරන්න",
            "temp:room1 සඳහා රඳවා තබා ගැනීම සහ ලේබල පෙන්වන්න"
          ]
        },
        bloom: {
          name: "RedisBloom (Bloom / Cuckoo / Top-K / CMS / T-Digest)",
          description: "bf මොඩියුලය පූරණය කළ විට ලබා ගත හැක.",
          prompts: [
            "bloom filter spam:ips හි foo අයිතමය තිබේදැයි පරීක්ෂා කරන්න",
            "bloom filter spam:ips වෙත අයිතම එකතු කරන්න",
            "K=10 සහිත popular නමින් top-K එකක් සාදන්න",
            "/home යතුර සඳහා count-min sketch traffic විමසන්න",
            "t-digest වෙත අගයන් එකතු කර 95 වන පර්සන්ටයිලය ලබා ගන්න",
            "bloom filter spam:ips සඳහා තොරතුරු පෙන්වන්න"
          ]
        },
        vectorSet: {
          name: "VectorSet (Redis 8+)",
          description: "Redis 8+ හඳුනාගත් විට ලබා ගත හැක (දේශීය VECTORSET වර්ගය).",
          prompts: [
            "embeddings වෙත වෙක්ටරයක් එකතු කරන්න",
            "විමසුම් වෙක්ටරයට වඩාත්ම සමාන වෙක්ටර 10 සොයන්න",
            "vectorset embeddings හි මාන සහ ගණන පෙන්වන්න",
            "vectorset embeddings වෙතින් මූලද්‍රව්‍යයක් මකන්න",
            "VSIM සමඟ මූලද්‍රව්‍ය නාමයෙන් සොයන්න"
          ]
        },
        redis8: {
          name: "Redis 8+ විශේෂාංග",
          description: "Redis 8+ හඳුනාගත් විට පෙන්වයි.",
          prompts: [
            "HEXPIRE සමඟ hash ක්ෂේත්‍ර ttl සකසන්න",
            "string අගයක digest එක ලබා ගන්න",
            "දෙමුහුන් සම්පූර්ණ-පාඨ + වෙක්ටර් සෙවුමක් ධාවනය කරන්න (FT.HYBRID)",
            "MSETEX භාවිතා කර බෙදාගත් කල් ඉකුත්වීමක් සමඟ බහු යතුරු සකසන්න",
            "consumer group සමඟ stream ඇතුළත් කිරීමක් මකන්න (XDELEX)",
            "ඉහළ slot 10 සඳහා cluster slot-stats පෙන්වන්න"
          ]
        },
        scripting: {
          name: "ස්ක්‍රිප්ටින්",
          description: "ස්වභාවික භාෂා විස්තරවලින් Lua / EVAL ස්ක්‍රිප්ට් ජනනය කරන්න.",
          prompts: [
            "Y > 5 නම් පමණක් counter X වැඩි කරන පරමාණුක ස්ක්‍රිප්ට් එකක් ලියන්න",
            "Lua සමඟ අහඹු යතුරු 100ක් ජනනය කරන්න",
            "මෙම shell pipeline එක තනි EVAL එකකට පරිවර්තනය කරන්න: keys user:* | GET | grep inactive | DEL",
            "cluster ආරක්ෂාව සඳහා batch මෙහෙයුමක් Lua වෙත පෝට් කරන්න",
            "තනි Lua ඇමතුමක් තුළ check-and-set ආකාරයේ යාවත්කාලීනයක්",
            "hash එකක් හරහා iterate කර රටාවට ගැළපෙන ක්ෂේත්‍ර මකන්න"
          ]
        },
        cluster: {
          name: "පොකුර",
          description: "පොකුර මාදිලියේදී පමණක් පෙන්වයි.",
          prompts: [
            "cluster තොරතුරු පෙන්වන්න",
            "cluster node ලැයිස්තුගත කරන්න",
            "යතුරු ගණන අනුව ඉහළ slot 10 පෙන්වන්න",
            "මතකය අනුව ඉහළ slot 10 පෙන්වන්න",
            "slot 5000 හිමි master කවුද?"
          ]
        },
        acl: {
          name: "ACL (Redis 6+)",
          description: "access-control පරිශීලකයන් සහ වත්මන් සම්බන්ධතාව පරීක්ෂා කරන්න.",
          prompts: [
            "මම කවුරුන් ලෙස සම්බන්ධ වී සිටිමිද?",
            "සියලු ACL පරිශීලකයන් ලැයිස්තුගත කරන්න",
            "මට ඇති අවසර මොනවාද?",
            "පෙරනිමි පරිශීලකයාගේ නීති පෙන්වන්න"
          ]
        },
        qna: {
          name: "සාමාන්‍ය ප්‍රශ්න හා පිළිතුරු",
          description: "Redis දැනුම පිළිබඳ ප්‍රශ්න අසන්න — මෙවලම් නැත, පිළිතුරු පමණි.",
          prompts: [
            "ZADD යනු කුමක්ද?",
            "cluster failover ක්‍රියා කරන්නේ කෙසේද?",
            "SCAN සහ KEYS අතර වෙනස පැහැදිලි කරන්න",
            "EVAL කවදා භාවිත කළ යුතුද බහු විධාන කවදාද?",
            "Redis persistence විකල්ප මොනවාද?",
            "RDB සහ AOF අතර වෙනස කුමක්ද?",
            "Redis Sentinel නව master එකක් තීරණය කරන්නේ කෙසේද?",
            "cluster මාදිලියේ hash tags පැහැදිලි කරන්න"
          ]
        },
        translate: {
          name: "ස්වභාවික භාෂාව → Redis විධානය",
          description: "ඔබට අවශ්‍ය දේ සරල ඉංග්‍රීසියෙන් (හෝ භාෂා 54න් එකකින්) විස්තර කරන්න; AI Redis විධානය ලියයි.",
          prompts: [
            "user:42 යතුර මකන්න",
            "foo යතුර bar ලෙස නැවත නම් කරන්න",
            "session:abc යතුර තත්පර 10කින් කල් ඉකුත්වන්න",
            "source යතුර destination වෙත පිටපත් කරන්න",
            "counter visits 5කින් වැඩි කරන්න",
            "greeting යතුර පැය 1ක් සඳහා \"hello\" ලෙස සකසන්න",
            "වැඩිම වාර ගණනක් ප්‍රවේශ වූ යතුරු 10 පෙන්වන්න",
            "temp:* හා ගැළපෙන සියලු යතුරු මකන්න"
          ]
        }
      }
    },
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
    aclAuthHint: "සත්‍යාපනය සඳහා Redis ACL පරිශීලක නාමය සහ මුරපදය භාවිතා කරන්න. මුරපදයක් නොමැති පෙරනිමි පරිශීලකයා සඳහා හිස්ව තබන්න.",
    tlsWithoutCert: "අමතර සහතිකයක් නොමැතිව TLS සක්\u200dරීය කරන්න",
    tlsRejectUnauthorized: "අනවසර සහතිකය ප්\u200dරතික්ෂේප කරන්න",
    tlsSecure: "ඔබට P3X සමඟ ආරම්භ වන TLS වින්\u200dයාසයක් පෙනෙන්නේ නම් හෝ සියලුම TLS සැකසුම් සමානව පෙනේ නම්, එය ආරක්ෂිත විශේෂාංගයකි. සැකසුම් වෙනස් කිරීමට, මෙම සැකසුම් හිස් හෝ වෙනත් දෙයකින් ආදේශ කරන්න, ඒවා සුරැකෙනු ඇත. ඔබ TLS සැකසුම් වෙනස් නොකරන්නේ නම්, සැකසුම් සේවාදායකයේ ඇති ආකාරයටම පවතිනු ඇත.",
    treeSeparatorEmpty: "ගස් වෙන්කරන්නා හිස් නම්, ගසට කැදැලි නෝඩ නොමැත, සරල ලැයිස්තුවක් පමණි",
    treeSeparatorEmptyNote: "කැදැලි නෝඩ නැත, සරල ලැයිස්තුවක් පමණි",
    welcomeConsole: "Redis කොන්සෝලයට සාදරයෙන් පිළිගනිමු",
    welcomeConsoleInfo: "SHIFT + කර්සරය ඉහළ හෝ පහළ ඉතිහාසය සක්\u200dරීය කර ඇත",
    redisListIndexInfo: "එකතු කිරීමට හිස්, -1 ආරම්භයට එක් කිරීමට හෝ පෙන්වා ඇති ස්ථානයට සුරකින්න.",
    console: "කොන්සෝලය",
    connectiondAdd: "සම්බන්ධතාවය එක් කරන්න",
    connectiondEdit: "සම්බන්ධතාවය සංස්කරණය කරන්න",
    connectiondView: "සම්බන්ධතාවය බලන්න",
    connections: "සම්බන්ධතා",
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
    languageAuto: "Auto (system)",
    shortcutCommandPalette: "විධාන පුවරුව",
    commandPalette: "විධාන පුවරුව",
    noResults: "ප්‍රතිඵල නැත",
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
    type: "වර්ගය",
    format: "ආකෘතිය",
    loading: "පූරණය වෙමින්...",
    autoRefresh: "ස්වයං",
    exportSearchHint: "වත්මන් සෙවීමට ගැළපෙන යතුරු පමණක් අපනයනය කරයි",
    importSearchHint: "ආනයනය සෙවුම් ප්‍රතිඵලවලට පමණක් නොව සම්පූර්ණ දත්ත සමුදායට අදාළ වේ",
    deleteSearchHint: "සේවාදායකයේ වත්මන් සෙවීමට ගැළපෙන සියලුම යතුරු මකා දමයි",
    deletingSearchKeys: "ගැළපෙන යතුරු මකා දමමින්...",
    importNoKeys: "ගොනුවේ යතුරු හමු නොවීය",
    desktopNotifications: "Desktop Notifications",
    desktopNotificationsEnabled: "Enable desktop notifications",
    desktopNotificationsInfo: "Receive OS notifications for Redis disconnections and reconnections when the app is not focused."
  },
  status: {
    dataCopied: "දත්ත පසුරු පුවරුවේ ඇත",
    exportDone: "අපනයනය සම්පූර්ණයි",
    deletedSearchKeys: (opts) => `යතුරු ${opts.count}ක් මකා දමන ලදී`,
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
    reverted: "\u0d86\u0db4\u0dc3\u0dd4 \u0dc4\u0dbb\u0dc0\u0dcf \u0d87\u0dad",
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
    set: "යතුර සකසන ලදී/එක් කරන ලදී",
    connectionRestored: "සම්බන්ධතාවය ප්‍රතිස්ථාපනය විය",
    socketDisconnected: "විසන්ධි විය",
    socketError: "සම්බන්ධතා දෝෂය",
    deletedHashKey: "හැෂ් යතුර මකා දමන ලදී",
    deletedSetMember: "කට්ටල සාමාජිකයා මකා දමන ලදී",
    deletedListElement: "ලැයිස්තු මූලද්‍රව්‍යය මකා දමන ලදී",
    deletedZSetMember: "පිළිවෙලට සැකසූ කට්ටල සාමාජිකයා මකා දමන ලදී",
    deletedStreamTimestamp: "ප්‍රවාහ ඇතුළත් කිරීම මකා දමන ලදී",
  },
  code: {
    "delete-connection": "මෙම සම්බන්ධතාවය මකා දමන ලදී, එබැවින් ඔබ මෙම Redis අවස්ථාවෙන් විසන්ධි වී ඇත.",
    "save-connection": "මෙම සම්බන්ධතාවය වෙනස් කරන ලදී, එබැවින් ඔබ මෙම Redis අවස්ථාවෙන් විසන්ධි වී ඇත. ඔබට නැවත සම්බන්ධ විය හැක.",
    "readonly-connections": "සම්බන්ධතා එක් කිරීම/සුරැකීම/මකා දැමීම කියවීම පමණි!",
    "readonly-connection-mode": "මෙම සම්බන්ධතාවය කියවීම පමණක් ප්\u200dරකාරයකි!",
    "list-out-of-bounds": "මෙම ලැයිස්තු දර්ශකය සීමාවෙන් පිටතය",
    "invalid-json-value": "අගය වලංගු JSON නොවේ.",
    "http_auth_required": "අවසරය අවශ්\u200dයයි: කරුණාකර HTTP Basic Auth සමඟ සත්\u200dයාපනය කර නැවත පූරණය කරන්න.",
    "auto-connection-failed": "සම්බන්ධතාවය ඉවත් කර ඇති විය හැකි අතර ස්වයංක්\u200dරීය සම්බන්ධතාවය මේ නිසා අසාර්ථක විය.",
    invalid_console_command: "මෙම විධානය GUI හරහා ක්\u200dරියා නොකරයි.",
    "AI_DISABLED": "AI අක්‍රියයි. AI සැකසුම් තුළ සක්‍රිය කරන්න.",
    "AI_PROMPT_REQUIRED": "AI ඉල්ලීම අවශ්‍යයි.",
    "GROQ_API_KEY_READONLY": "Groq API යතුර කියවීම පමණක් වන අතර වෙනස් කළ නොහැක.",
    "blocked_api_access": "ඔබේ Groq API සැලැස්ම මෙම ආකෘතියට ප්‍රවේශය ලබා දෙන්නේ නැත. Groq සැලැස්ම උත්ශ්‍රේණි කරන්න හෝ network.corifeus.com proxy භාවිතා කරන්න.",
    "rate_limit": "AI අනුපාත සීමාවට ළඟා විය. පසුව නැවත උත්සාහ කරන්න හෝ සැකසුම් තුළ ඔබේම Groq API යතුර භාවිතා කරන්න."
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
      keyCount: (opts) => {
        return `යතුරු ගණන: ${opts?.keyCount ?? 0}`;
      },
      label: {
        animation: "සජීවිකරණය භාවිතා කරන්න",
        noAnimation: "සජීවිකරණය නැත",
        undoEnabled: "\u0d86\u0db4\u0dc3\u0dd4 \u0dc4\u0dd0\u0dbb\u0dc0\u0dd3\u0db8 \u0dc3\u0d9a\u0dca\u200d\u0dbb\u0dd2\u0dba\u0dba\u0dd2",
        undoDisabled: "\u0d86\u0db4\u0dc3\u0dd4 \u0dc4\u0dd0\u0dbb\u0dc0\u0dd3\u0db8 \u0d85\u0d9a\u0dca\u200d\u0dbb\u0dd2\u0dba\u0dba\u0dd2",
        diffEnabled: "\u0dc3\u0dd4\u0dbb\u0dd0\u0d9a\u0dd3\u0db8\u0da7 \u0db4\u0dd9\u0dbb diff \u0db4\u0dd9\u0db1\u0dca\u0dc0\u0db1\u0dca\u0db1",
        diffDisabled: "\u0dc3\u0dd4\u0dbb\u0dd0\u0d9a\u0dd3\u0db8\u0da7 \u0db4\u0dd9\u0dbb diff \u0d85\u0d9a\u0dca\u200d\u0dbb\u0dd2\u0dba\u0dba\u0dd2",
        jsonFormatTwoSpace: "හිස්තැන් 2 කින් JSON ආකෘතිකරණය",
        jsonFormatFourSpace: "හිස්තැන් 4 කින් JSON ආකෘතිකරණය",
        formName: "Redis සැකසුම්",
        searchModeClient: "සේවාලාභී සෙවුම් ප්\u200dරකාරය",
        searchModeServer: "සේවාදායක සෙවුම් ප්\u200dරකාරය",
        searchModeStartsWith: "ආරම්භ වන ප්\u200dරකාරයෙන් සොයන්න",
        searchModeIncludes: "ඇතුළත් වන ප්\u200dරකාරයෙන් සොයන්න"
      },
      undoHint: "\u0d86\u0db4\u0dc3\u0dd4 \u0dc4\u0dd0\u0dbb\u0dc0\u0dd3\u0db8 \u0dbd\u0db6\u0dcf\u0d9c\u0dad \u0dc4\u0dd0\u0d9a\u0dca\u0d9a\u0dda string \u0dc3\u0dc4 JSON key \u0dc0\u0dbb\u0dca\u0d9c \u0dc3\u0db3\u0dc4\u0dcf \u0db4\u0db8\u0dab\u0dd2",
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
        value: "අගය",
        errorRate: "දෝෂ අනුපාතය",
        capacity: "ධාරිතාව",
        topk: "Top K",
        width: "පළල",
        depth: "ගැඹුර",
        decay: "ක්ෂය",
        compression: "සම්පීඩනය",
        increment: "වර්ධකය",
        item: "අයිතමය",
        vectorValues: "දෛශික අගයන් (කොමාවෙන් වෙන් කළ)",
        element: "මූලද්\u200dරව්\u200dය නම",
      },
      error: {
        streamTimestamp: "කාල මුද්\u200dරාව අවශ්\u200dයයි, Redis ආකෘතිය හෝ * ලෙස",
        key: "යතුර අවම වශයෙන් එක් අක්ෂරයක් විය යුතුය",
        hashKey: "hash වගු යතුර අවම වශයෙන් එක් අක්ෂරයක් විය යුතුය",
        score: "වර්ග කළ කට්ටලයේ ලකුණු අවශ්\u200dයයි",
        value: "අගය අවශ්\u200dයයි",
        errorRate: "දෝෂ අනුපාතය 0 සහ 1 අතර විය යුතුය (උදා. 0.01)",
        capacity: "ධාරිතාව ධන පූර්ණ සංඛ්\u200dයාවක් විය යුතුය",
        topk: "Top K ධන පූර්ණ සංඛ්\u200dයාවක් විය යුතුය",
        width: "පළල ධන පූර්ණ සංඛ්\u200dයාවක් විය යුතුය",
        depth: "ගැඹුර ධන පූර්ණ සංඛ්\u200dයාවක් විය යුතුය",
        item: "අයිතමය අවශ්\u200dයයි"
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
      hybridMode: "මිශ්‍ර සෙවීම (FT.HYBRID)",
      vectorField: "දෛශික ක්ෂේත්‍රය",
      vectorValues: "දෛශික අගයන්",
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
      noSlowQueries: "මන්දගාමී විමසුම් වාර්තා කර නොමැත.",
      confirmSlowLogReset: "ඔබට මන්දගාමී ලොගය යළි පිහිටුවීමට අවශ්‍ය බව විශ්වාසද?",
      slowLogResetDone: "මන්දගාමී ලොගය යළි පිහිටුවන ලදී.",
      totalCommands: "මුළු",
      expired: "කල් ඉකුත්",
      evicted: "පිටුවහල්",
      clientList: "සේවාදායක ලැයිස්තුව",
      topKeys: "මතකය අනුව විශාලතම යතුරු",
      killClient: "සේවාදායකයා නැවැත්වීම",
      clientKilled: "සේවාදායකයා නැවැත්විණි",
      confirmKillClient: "මෙම සේවාදායකයා නැවැත්වීමට විශ්වාසද?",
      noKeys: "යතුරු නැත",
      rss: "RSS",
      peak: "උපරිම",
      fragmentation: "ඛණ්ඩනය",
      hitsAndMisses: "වාර / මග හැරීම්",
      noClients: "සේවාදායකයින් නැත",
      slotStats: "පොකුරු තව් සංඛ්‍යාලේඛන",
      serverInfo: "සේවාදායක තොරතුරු",
      os: "මෙහෙයුම් පද්ධතිය",
      port: "ජාල වරාය",
      pid: "ක්‍රියාවලි ID",
      configFile: "වින්‍යාස ගොනුව",
      uptime: "අතිකාල",
      keyspace: "Redis යතුරු ඉඩ",
      keys: "Redis යතුරු",
      expires: "කල් ඉකුත් වේ",
      noKeyspace: "යතුරු නැත",
      persistence: "දත්ත අඛණ්ඩතාව",
      rdbLastSave: "RDB අවසාන සුරැකීම",
      rdbStatus: "RDB තත්ත්වය",
      rdbChanges: "අවසන් සුරැකීමේ සිට වෙනස්කම්",
      aofEnabled: "AOF සබල කර ඇත",
      aofSize: "AOF ප්රමාණය",
      replication: "Redis අනුකරණය",
      role: "අනුකරණය කිරීමේ භූමිකාව",
      replicas: "සම්බන්ධිත අනුරූ",
      masterHost: "ප්‍රාථමික සත්කාරක",
      linkStatus: "අනුකරණ සබැඳි තත්ත්වය",
      cpu: "CPU භාවිතය",
      cpuSys: "පද්ධතිය",
      cpuUser: "පරිශීලක",
      modules: "Redis මොඩියුල පූරණය කරන ලදී",
      noModules: "Redis මොඩියුල පූරණය කර නැත",
      clusterSlotMap: "රෙඩිස් පොකුරු තව් සිතියම",
      slotRange: "පොකුරු තව් පරාසය",
      totalSlots: "සම්පූර්ණ පොකුරු තව්",
      noClusterData: "Redis පොකුරු දත්ත නොමැත.",
    },
    analysis: {
      title: "මතක විශ්ලේෂණය",
      runAnalysis: "විශ්ලේෂණය ක්‍රියාත්මක කරන්න",
      running: "විශ්ලේෂණය වෙමින්...",
      typeDistribution: "වර්ග බෙදීම",
      prefixMemory: "උපසර්ගය අනුව මතකය",
      topKeysByMemory: "මතකය අනුව විශාලතම යතුරු",
      expirationOverview: "යතුරු කල් ඉකුත්වීම",
      memoryBreakdown: "මතක බෙදීම",
      keysScanned: "ස්කෑන් කළ යතුරු",
      totalMemory: "මුළු මතකය",
      rssMemory: "RSS මතකය",
      peakMemory: "උපරිම මතකය",
      luaMemory: "Lua මතකය",
      overheadMemory: "අතිරේක බර",
      datasetMemory: "දත්ත කට්ටලය",
      fragmentation: "ඛණ්ඩනය",
      allocator: "වෙන් කරන්නා",
      withTTL: "TTL සමඟ",
      persistent: "ස්ථිර",
      avgTTL: "සාමාන්‍ය TTL",
      prefix: "උපසර්ගය",
      keyCount: "යතුරු ගණන",
      memoryUsage: "මතක භාවිතය",
      noPrefix: "(උපසර්ගයක් නැත)",
      topN: "Top N",
      maxScanKeys: "උපරිම ස්කෑන් යතුරු",
      type: "වර්ගය",
      noData: "දත්ත නැත. ආරම්භ කිරීමට විශ්ලේෂණය ක්‍රියාත්මක කරන්න ක්ලික් කරන්න.",
      exportAll: "සියල්ල අපනයනය",
      memoryDoctor: "Memory Doctor",
      doctorNoData: "Memory Doctor රෝග විනිශ්චය ක්‍රියාත්මක කිරීමට නැවුම් කරන්න ක්ලික් කරන්න.",
    },
    acl: {
      title: "ACL භාවිතා කරන්නන්",
      loadUsers: "පරිශීලකයන් පැටවීම",
      loading: "පූරණය වෙමින්...",
      username: "පරිශීලක නාමය",
      status: "තත්ත්වය",
      enabled: "සබල කර ඇත",
      disabled: "අක්‍රිය",
      commands: "විධාන",
      commandsHint: "උදා., +@all or +@read -@dangerous",
      keys: "Redis යතුරු රටා",
      keysHint: "උදා., ~* or ~user:*",
      channels: "Pub/Sub නාලිකා",
      channelsHint: "උදා., &* or &notifications:*",
      password: "මුරපදය",
      noPassword: "මුරපදයක් නැත (nopass)",
      passwordHint: "වත්මන් මුරපදය තබා ගැනීමට හිස්ව තබන්න",
      currentUser: "වත්මන්",
      createUser: "පරිශීලකයා සාදන්න",
      editUser: "පරිශීලක සංස්කරණය කරන්න",
      deleteUser: "මකන්න",
      confirmDelete: "ඔබට ACL පරිශීලකයා මැකීමට අවශ්‍ය බව විශ්වාසද?",
      userDeleted: "ACL පරිශීලකයා මකා දමන ලදී.",
      userSaved: "ACL පරිශීලක සුරකින ලදී.",
      cannotDeleteDefault: "පෙරනිමි පරිශීලකයා මකා දැමිය නොහැක.",
      cannotDeleteSelf: "දැනට සම්බන්ධිත පරිශීලකයා මකා දැමිය නොහැක.",
      noUsers: "ACL සඳහා Redis 6.0+ අවශ්‍යයි.",
      groupCommon: "පොදු",
      groupDataTypes: "දත්ත වර්ග",
      groupOperations: "මෙහෙයුම්",
      rules: "නීති",
      rulesHint: "අවකාශයෙන් වෙන් කළ ටෝකන (උදාහරණයක් ලෙස on >password +@all ~* &*)",
      defaultUserWarning: "අවවාදයයි: පෙරනිමි පරිශීලකයා වෙනස් කිරීමෙන් සියලු සම්බන්ධතා අගුලු දැමිය හැක. මෙය සිදුවුවහොත්, ඔබට ප්‍රවේශය ප්‍රතිසාධනය කිරීමට Redis නැවත ආරම්භ කිරීමට හෝ redis-cli භාවිතා කිරීමට අවශ්‍ය වනු ඇත.",
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
        compression: "සම්පීඩනය",
        aiRateLimited: "AI ඉල්ලීම් සීමාවට ළඟා විය. පසුව නැවත උත්සාහ කරන්න හෝ සැකසීම් තුළ ඔබේම Groq API යතුර භාවිතා කරන්න.",
        aiError: "AI විමසුම අසාර්ථක විය",
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
      },
      timeseries: {
        chart: "ප්\u200dරස්තාරය",
        info: "තොරතුරු",
        addPoint: "දත්ත ලක්ෂ්\u200dයක් එක් කරන්න",
        from: "සිට (ms හෝ -)",
        to: "දක්වා (ms හෝ +)",
        aggregation: "එකතු කිරීම",
        timeBucket: "බාල්දිය (ms)",
        none: "කිසිවක් නැත",
        dataPoints: "දත්ත ලක්ෂ්\u200dය",
        labels: "ලේබල",
        rules: "නීති",
        retention: "රඳවා තබා ගැනීම",
        retentionHint: "0 = කල් ඉකුත් වීමක් නැත, හෝ මිලිතත්පර",
        duplicatePolicy: "අනුපිටපත් ප්‍රතිපත්තිය",
        labelsHint: "යතුර1 අගය1 යතුර2 අගය2",
        timestampHint: "'*' යනු ස්වයංක්‍රීයව ජනනය වූ, හෝ මිලිතත්පර කාල මුද්‍රාව",
        editAllHint: "පේළියකට එක දත්ත ලක්ෂ්‍යයක්: කාල_මුද්‍රාව අගය (කාල මුද්‍රාව ස්වයංක්‍රීය සඳහා * විය හැක)",
        autoSpread: "ස්වයංක්‍රීය * පැතිරීමේ පරතරය",
        formula: "සූත්‍රය",
        formulaLinear: "රේඛීය",
        formulaRandom: "අහඹු",
        formulaSawtooth: "කියත් දත්",
        formulaPoints: "ලක්ෂ්‍ය",
        formulaAmplitude: "විස්තාරය",
        formulaOffset: "ඕෆ්සෙට්",
        generate: "ජනනය කරන්න",
        exportChart: "PNG අපනයනය",
        overlay: "අතිච්ඡාදනය යතුරු",
        overlayHint: "කොමාවෙන් වෙන් කළ යතුරු",
        mrangeFilter: "ලේබල පෙරහන",
        bulkMode: "තොග ජනනය",
        mrangeHint: "උදා. sensor=temp",
        timestamp: "කාල මුද්\u200dරාව",
        value: "අගය"
      },
      probabilistic: {
        info: "තොරතුරු",
        addItem: "අයිතමය එක් කරන්න",
        checkItem: "අයිතමය පරීක්ෂා කරන්න",
        item: "අයිතමය",
        exists: "පවතී",
        doesNotExist: "නොපවතී",
        topkList: "ප්\u200dරමුඛ අයිතම",
        topkCount: "ගණන",
        queryCount: "විමසුම් ගණන",
        queryResult: "විමසුම් ප්\u200dරතිඵලය",
        addedSuccessfully: "අයිතමය සාර්ථකව එක් කරන ලදි",
        deletedSuccessfully: "අයිතමය සාර්ථකව මකා දමන ලදි",
        quantile: "ප්\u200dරමාණාංකය",
        quantileResult: "ප්\u200dරතිඵලය",
        noItems: "පෙන්වීමට අයිතම නැත",
        resetConfirm: "මෙම T-Digest හි සියලුම දත්ත යළි සකසන්නද?"
      },
      vectorset: {
        info: "තොරතුරු",
        elements: "මූලද්\u200dරව්\u200dය",
        similarity: "සමානතා සෙවීම",
        searchByElement: "මූලද්\u200dරව්\u200dය අනුව සොයන්න",
        searchByVector: "දෛශිකය අනුව සොයන්න",
        vectorValues: "දෛශික අගයන්",
        element: "මූලද්\u200dරව්\u200dය",
        score: "ලකුණු",
        count: "ගණන",
        addElement: "මූලද්\u200dරව්\u200dය එක් කරන්න",
        attributes: "ගුණාංග",
        noAttributes: "ගුණාංග නැත",
        dimensions: "මාන",
        removeConfirm: "මෙම මූලද්\u200dරව්\u200dය VectorSet වෙතින් ඉවත් කරන්නද?",
        noElements: "මූලද්\u200dරව්\u200dය නැත",
        filter: "පෙරහන",
        searchComplete: "සෙවීම සම්පූර්ණයි",
      }
    },
    treeControls: {
      settings: "ගස් සැකසුම්",
      expandAll: "සියල්ල පුළුල් කරන්න",
      collapseAll: "සියල්ල හකුළන්න",
      level: "මට්ටම",
      search: {
        search: "යතුරු තුළ සොයන්න",
        clear: "වත්මන් සෙවුම හිස් කිරීමට මකන්න",
        placeholderClient: "සේවාලාභී පැත්තෙන් සොයන්න",
        placeholderServer: "සේවාදායක පැත්තෙන් සොයන්න",
        info: (opts) => "සේවාලාභී පැත්තේ සෙවුම යනු සෙවුම් ආදානයේ පෙළට ගැළපීමයි. සේවාදායක පැත්තේ සෙවුම යනු *{search-text}* ලෙස යතුරු රටා තුළ සෙවීමයි. විශාල සෙවුම් කට්ටල සඳහා, සේවාදායක පැත්තේ සෙවුම භාවිතා කිරීම වඩා හොඳය. කුඩා සෙවුම් කට්ටල සඳහා, සේවාලාභී පැත්තේ සෙවුම් ප්\u200dරකාරය භාවිතා කිරීම වඩා හොඳය." + ` යතුරු ගණන ${opts?.maxLightKeysCount ?? 110000} ට වඩා වැඩි නම්, ඔබට සේවාදායක පැත්තෙන් පමණක් සෙවිය හැක.`,
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
    years: "අවුරුදු",
    months: "මාස",
    days: "දින",
    year: "අවුරුද්ද",
    month: "මාසය",
    day: "දිනය",
    second: "තත්පරය",
    seconds: "තත්පර",
    minute: "මිනිත්තුව",
    minutes: "මිනිත්තු",
    hour: "පැය",
    hours: "පැය"
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
    bloom: "Bloom පෙරහන",
    cuckoo: "Cuckoo පෙරහන",
    topk: "Top-K",
    cms: "Count-Min Sketch",
    tdigest: "T-Digest",
    vectorset: "VectorSet",
  },
  promo: {
    title: "AI ජාල සහායකයා",
    description: "network.corifeus.com හි ඇති අපගේ නොමිලේ AI ජාල සහායකයා සොයා බලන්න — domains, IPs, DNS records, SSL certificates, email security සහ network infrastructure විශ්ලේෂණය කරන්න. ක්ෂණික සහ සම්පූර්ණ ප්‍රතිඵල සඳහා AI බලගන්වයි.",
    disclaimer: "මෙම ප්‍රවර්ධනය පෙන්වන්නේ demo site එකේ පමණක් වන අතර Docker, Electron හෝ web app deployments වල නොපෙන්වයි.",
    toastMessage: "network.corifeus.com හි ඇති අපගේ නොමිලේ AI ජාල සහායකයා උත්සාහ කරන්න — domains, DNS, SSL සහ තවත් බොහෝ දේ විශ්ලේෂණය කරන්න!",
    visit: "network.corifeus.com වෙත යන්න",
  }
};
module.exports = strings;
