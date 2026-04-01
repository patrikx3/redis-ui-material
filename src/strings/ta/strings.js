const strings = {
  error: {
    cleared_license: "உரிமம் அழிக்கப்பட்டது",
    invalid_license: "தவறான உரிமம்",
    license_max_devices_reached: "அதிகபட்ச சாதன இடங்கள் எட்டப்பட்டது",
    license_readonly: "உரிமத்தை சேவையக முனையத்தில் இருந்து மட்டுமே மாற்ற முடியும்.",
    server_error: "சேவையக பிழை, மீண்டும் முயற்சிக்கவும்"
  },
  title: {
    donate: "நன்கொடை",
    jsonRecursive: "அனைத்து இலைகளையும் விரிவாக்குகிறது",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "இடது கீழ் மெனுவிலிருந்து Redis இணைப்பைத் தேர்வு செய்யலாம்.",
    statistics: "புள்ளிவிவரங்கள்",
    error: "பிழை",
    connectingRedis: "Redis உடன் இணைக்கிறது ...",
    socketioConnectError: "Socket.IO பிழை",
    db: "DB",
    server: "சேவையகம்",
    clients: "வாடிக்கையாளர்கள்",
    memory: "நினைவகம்",
    persistence: "நிலைத்தன்மை",
    stats: "புள்ளிவிவரங்கள்",
    replication: "நகலாக்கம்",
    cpu: "CPU",
    cluster: "கொத்து",
    modules: "modules",
    errorstats: "errorstats",
    commandstats: "commandstats",
    latencystats: "latencystats",
    keysizes: "keysizes",
    threads: "threads",
  },
  confirm: {
    dropIndex: "இந்த குறியீட்டை நீக்க விரும்புகிறீர்களா?",
    uploadBuffer: "இந்த பைனரி தரவை பதிவேற்ற விரும்புகிறீர்களா?",
    uploadBufferDone: "பைனரி தரவு பதிவேற்றப்பட்டது",
    uploadBufferDoneAndSave: "பைனரி தரவு பதிவேற்றப்பட்டு சேவையகத்தில் சேமிக்கப்பட்டது",
    title: "உறுதிப்படுத்தவும்",
    alert: "எச்சரிக்கை",
    info: "தகவல்",
    deleteListItem: "இந்த பட்டியல் உருப்படியை நிச்சயமாக நீக்க விரும்புகிறீர்களா?",
    deleteHashKey: "இந்த ஹாஷ் விசை உருப்படியை நிச்சயமாக நீக்க விரும்புகிறீர்களா?",
    deleteStreamTimestamp: "இந்த ஸ்ட்ரீம் நேர முத்திரையை நிச்சயமாக நீக்க விரும்புகிறீர்களா?",
    deleteSetMember: "இந்த தொகுப்பு உறுப்பினரை நிச்சயமாக நீக்க விரும்புகிறீர்களா?",
    deleteZSetMember: "இந்த வரிசைப்படுத்தப்பட்ட தொகுப்பு உறுப்பினரை நிச்சயமாக நீக்க விரும்புகிறீர்களா?",
    deleteConnection: "உறுதிப்படுத்தவும்",
    deleteConnectionText: "இந்த Redis இணைப்பை நிச்சயமாக நீக்க விரும்புகிறீர்களா?",
    deleteNode: "இந்த Redis முனையை நிச்சயமாக நீக்க விரும்புகிறீர்களா?",
    deleteAllKeys: opts => {
      return `இந்த மரத்தையும் அதன் அனைத்து விசைகளையும் நீக்கவா (${opts.key})?`;
    },
    socketioConnectError: "Socket.IO சேவையகத்துடன் இணைக்க முடியவில்லை, நீங்கள் மீளேற்றம் செய்து இணைப்புப் பிழையை தீர்க்க முயற்சிக்கலாம், வாடிக்கையாளருக்கு அதை தானே தீர்க்கத் தெரியவில்லை.",
    socketioAuthRequired: "Socket.IO அங்கீகாரம் தேவை. தயவுசெய்து HTTP Basic Auth (பயனர்பெயர்/கடவுச்சொல்) மூலம் அங்கீகரித்து மீளேற்றம் செய்யவும்.",
    deleteKey: "இந்த விசையை நிச்சயமாக நீக்க விரும்புகிறீர்களா?",
    rename: {
      title: "இந்த விசையை நிச்சயமாக மறுபெயரிட விரும்புகிறீர்களா?",
      textContent: "இந்த செயல் விசையை நிரந்தரமாக மறுபெயரிடும்.",
      placeholder: "Redis விசை (தேவை)"
    },
    ttl: {
      title: "இந்த விசையின் TTL ஐ மாற்ற விரும்புகிறீர்களா?",
      textContent: "TTL ஐ மாற்றுவது இந்த விசையின் வாழ்நாளை புதுப்பிக்கும். இந்த விசையை எப்போதும் வைக்க காலியாக விடவும்.",
      placeholder: "Redis விசையின் TTL (முழு எண் அல்லது காலி)",
      placeholderPlaceholder: "காலி என்றால் நிரந்தரமாக இருக்கும்; இல்லையெனில் முழு எண்ணை உள்ளிடவும்.",
      convertTextToTime: "உரையை நேரமாக மாற்றவும்",
      convertTextToTimePlaceholder: "எ.கா. 1d 86400 ஆக இருக்கும்"
    },
    license: {
      title: "உரிமத்தை அமைக்கவும்",
      textContent: "If you want to use paid features, please contact support@corifeus.com to request a license. Pricing is Pro 400 HUF/month (\u20ac1/month) or 4,000 HUF/year (\u20ac10/year), and Enterprise 1,200 HUF/month (\u20ac3/month) or 12,000 HUF/year (\u20ac30/year). Yearly is 10x monthly. With 27% VAT, totals are Pro 500 HUF/month (\u20ac1.27/month) or 5,100 HUF/year (\u20ac12.70/year), Enterprise 1,500 HUF/month (\u20ac3.81/month) or 15,200 HUF/year (\u20ac38.10/year). License validation requires internet access. Default license includes 5 seats. If you need more seats, contact us at support@corifeus.com.",
      placeholder: "உரிம விசை"
    }
  },
  language: {
    // When you translate the english name, keep the Language in English
    // eg. Inglés / English
    bg: "பல்கேரியன் / Bulgarian",
    cs: "செக் / Czech",
    de: "ஜெர்மன் / German",
    el: "கிரேக்கம் / Greek",
    en: "ஆங்கிலம் / English",
    es: "ஸ்பானிஷ் / Spanish",
    fr: "பிரெஞ்சு / French",
    hu: "ஹங்கேரியன் / Hungarian",
    it: "இத்தாலியன் / Italian",
    ja: "ஜப்பானியம் / Japanese",
    nl: "டச்சு / Dutch",
    pl: "போலிஷ் / Polish",
    "pt-PT": "போர்த்துகீசியம் / Portuguese",
    ro: "ரோமேனியன் / Romanian",
    ru: "ரஷ்யன் / Russian",
    sk: "ஸ்லோவாக் / Slovak",
    sr: "செர்பியன் / Serbian",
    sv: "ஸ்வீடிஷ் / Swedish",
    tr: "துருக்கியம் / Turkish",
    uk: "உக்ரேனியன் / Ukrainian",
    zn: "சீனம் / Chinese",
    ar: "அரபு / Arabic",
    az: "அசர்பைஜானி / Azerbaijani",
    be: "பெலருசியன் / Belarusian",
    bn: "வங்காளம் / Bengali",
    da: "டேனிஷ் / Danish",
    et: "எஸ்தோனியன் / Estonian",
    fi: "பின்னிஷ் / Finnish",
    fil: "பிலிப்பினோ / Filipino",
    he: "எபிரேயம் / Hebrew",
    hr: "குரோஷியன் / Croatian",
    hy: "ஆர்மீனியன் / Armenian",
    id: "இந்தோனேசியன் / Indonesian",
    ka: "ஜோர்ஜியன் / Georgian",
    kk: "கசாக் / Kazakh",
    km: "கெமர் / Khmer",
    ko: "கொரியன் / Korean",
    ky: "கிர்கிஸ் / Kyrgyz",
    lt: "லிதுவேனியன் / Lithuanian",
    mk: "மாசிடோனியன் / Macedonian",
    ms: "மலாய் / Malay",
    ne: "நேபாளி / Nepali",
    no: "நார்வேஜியன் / Norwegian",
    "pt-BR": "போர்த்துகீசியம் (பிரேசில்) / Portuguese (Brazil)",
    sl: "ஸ்லோவேனியன் / Slovenian",
    tg: "தஜிக் / Tajik",
    th: "தாய் / Thai",
    vi: "வியட்நாமியம் / Vietnamese",
    "zh-HK": "சீனம் (ஹாங்காங்) / Chinese (Hong Kong)",
    "zh-TW": "சீனம் (தைவான்) / Chinese (Taiwan)",
    sw: "ஸ்வாஹிலி / Swahili",
    si: "சிங்களம் / Sinhala",
    ta: "தமிழ் / Tamil",
    bs: "போஸ்னியன் / Bosnian"
  },
  intention: {
    copy: "நகலெடு",
    downloadBuffer: "பைனரி பதிவிறக்கம்",
    setBuffer: "பைனரி பதிவேற்றம்",
    exportKeys: "விசைகளை ஏற்றுமதி செய்",
    exportAllKeys: (opts) => `அனைத்து ${opts.count} விசைகளையும் ஏற்றுமதி செய்`,
    exportSearchResults: (opts) => `${opts.count} முடிவுகளை ஏற்றுமதி செய்`,
    importKeys: "விசைகளை இறக்குமதி செய்",
    saveWithFormatJson: "வடிவமைப்புடன் சேமி",
    formatJson: "Json வடிவமை",
    wrap: "மடி",
    unwrap: "விரி",
    downloadJson: "JSON பதிவிறக்கம்",
    pubsubMonitor: "PubSub கண்காணிப்பான்",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "மொழி / Language",
    ok: "சரி",
    addKey: "இந்த விசைக்கு சேர்",
    addKeyRoot: "ரூட் விசையை சேர்",
    reloadKey: "விசையை மீளேற்றம் செய்",
    reload: "மீளேற்றம்",
    close: "மூடு",
    commands: "கட்டளைகள்",
    view: "பார்",
    statistics: "புள்ளிவிவரங்கள்",
    refresh: "புதுப்பி",
    pause: "இடைநிறுத்தம்",
    resume: "தொடர்",
    clear: "அழி",
    rename: "மறுபெயரிடு",
    main: "தரவுத்தளம்",
    cancel: "ரத்து",
    theme: "தீம்",
    github: "GitHub",
    githubRepo: "களஞ்சியம்",
    githubRelease: "வெளியீடுகள்",
    githubChangelog: "மாற்ற பதிவு",
    info: "Info",
    settings: "அமைப்புகள்",
    connect: "இணை",
    disconnect: "துண்டி",
    overview: "கண்ணோட்டம்",
    console: "கன்சோல்",
    noConnections: "இணைப்புகள் இல்லை, அமைப்புகள் மெனுவில் இணைப்பைச் சேர்க்கவும்.",
    noConnectionsInSettings: "இணைப்புகள் இல்லை, மேலே புதிய இணைப்பைச் சேர்க்கலாம்.",
    connectionAdd: "புதிய இணைப்பு",
    addGroup: "குழுவைச் சேர்",
    extend: "விரிவாக்கு",
    collapse: "சுருக்கு",
    add: "சேர்",
    edit: "திருத்து",
    save: "சேமி",
    ttl: "TTL அமை",
    license: "உரிமம் அமை",
    delete: "நீக்கு",
    remove: "அகற்று",
    sure: "உறுதி",
    testConnection: "இணைப்பை சோதி",
    getKey: "Redis விசை மற்றும் தொடர்புடைய தரவை ஏற்றுகிறது ...",
    jsonViewShow: "JSON காட்சி",
    jsonViewEditor: "JSON திருத்தம்",
    quickConsole: "விரைவு கன்சோல்",
  },
  label: {
    id: {
      nodeId: 'முனை ID',
      id: "இணைப்பு ID",
      info: "நீங்கள் sshPassword, sshPrivateKey, password, tlsCrt, tlsKey, tlsCa ஆகியவற்றின் பண்புகளை மாற்ற விரும்பவில்லை எனில், பண்பு மதிப்புகளை அப்படியே வைக்க அந்த பண்புகளில் இணைப்பு ID ஐ உள்ளிடவும். முனை கடவுச்சொல்லிலும் அதே தர்க்கம் வேண்டுமெனில், முனை கடவுச்சொல்லில் முனை ID ஐ உள்ளிடவும்."
    },
    secureFeature: 'P3X உடன் தொடங்கும் மதிப்பை நீங்கள் கண்டால் மற்றும் அனைத்தும் ஒரே மாதிரியாக தெரிந்தால், அது ஒரு பாதுகாப்பு அம்சம். அமைப்புகளை மாற்ற, இந்த அமைப்புகளை காலி அல்லது வேறு ஏதாவது மாற்றவும், அவை சேமிக்கப்படும். அமைப்புகளை மாற்றவில்லை என்றால், சேவையகத்தில் உள்ளபடியே இருக்கும்.',
    aiTranslating: "Translating...",
    aiSettings: "AI அமைப்புகள்",
    aiGroqApiKey: "Groq API விசை",
    aiGroqApiKeyInfo: "விருப்பத்தேர்வு. சிறந்த செயல்திறனுக்கு உங்கள் Groq API விசை. இலவச விசையைப் பெறுங்கள்",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "AI API விசை சேமிக்கப்பட்டது",
    aiGroqApiKeyInvalid: "Invalid Groq API key",
    aiGroqApiKeyNotSet: "அமைக்கப்படவில்லை (சேவையக இயல்புநிலை)",
    aiEnabled: "AI Enabled",
    aiEnabledYes: "Yes",
    aiEnabledNo: "No",
    aiRouteViaNetwork: "Route via network.corifeus.com",
    aiRoutingDirect: "Queries go directly to Groq using your own API key, bypassing network.corifeus.com.",
    aiRoutingNetwork: "AI queries are routed through network.corifeus.com. If you have your own free Groq API key, you can turn off this switch to route directly to Groq without network.corifeus.com.",
    ssh: {
      on: 'SSH இயக்கப்பட்டது',
      off: 'SSH முடக்கப்பட்டது',
      sshHost: 'SSH ஹோஸ்ட்',
      sshPort: 'SSH போர்ட்',
      sshUsername: 'SSH பயனர்பெயர்',
      sshPassword: 'SSH கடவுச்சொல்',
      sshPrivateKey: 'SSH தனிப்பட்ட விசை'
    },
    isBuffer: opts => `[object ArrayBuffer] என்பது மதிப்பு பைனரி தரவு அல்லது மதிப்பு ${opts.maxValueAsBuffer} ஐ விட பெரியது என்பதைக் குறிக்கிறது`,
    streamValue: `ஸ்ட்ரீம் புலம் மற்றும் மதிப்பு ஒரு வரியில் உள்ளது. எ.கா.: field1 value1 "field 2" "value 2"`,
    streamTimestampId: `'*' என்பது தானாக உருவாக்கப்பட்டது அல்லது <millisecondsTime>-<sequenceNumber> வடிவில்`,
    unableToLoadKey: ({
      key
    }) => {
      return `இந்த விசையை ஏற்ற முடியவில்லை: ${key}. விசை நீக்கப்பட்டிருக்கலாம். சரியான பிழை கன்சோலில் உள்ளது.`;
    },
    bigJson: "இந்த JSON பொருள் 10 kb க்கு மேல் உள்ளது, எனவே நீங்கள் என்ன செய்கிறீர்கள் என்பதை உறுதிப்படுத்திக்கொள்ளுங்கள், ஏனெனில் சில செயல்பாடுகள் ரெண்டரிங்கில் மெதுவாக இருக்கலாம்.",
    addNode: "முனையைச் சேர்",
    validateJson: "JSON ஐ சரிபார்",
    reducedFunction: `குறைக்கப்பட்ட செயல்பாடு`,
    tooManyKeys: opts => {
      return `முழு அதிகபட்ச செயல்பாடுகளுக்கு அனுமதிக்கப்பட்ட மொத்த விசைகள் ${opts.maxLightKeysCount} ஆகும். இந்த தரவுத்தளத்தில் அனுமதிக்கப்பட்ட மொத்த ${opts.count} விசைகளுக்கு மேல் உள்ளது. விசை வரிசைப்படுத்தல் மற்றும் கூடுதல் மர தகவல்கள் முடக்கப்பட்டுள்ளன. தேடல் வாடிக்கையாளர் தேடலுக்குப் பதிலாக சேவையகத்தில் மட்டுமே நடக்கிறது.`;
    },
    redisCommandNotFound: "பொருந்தும் Redis கட்டளை கிடைக்கவில்லை ...",
    treeKeyStore: `வரிசைப்படுத்தல் (இயற்கை ஒப்பீடு) வாடிக்கையாளரில் அதாவது உலாவியில் செயல்படுத்தப்படுகிறது, அதாவது 10k விசைகளுக்கு மேல் உள்ள பெரிய தொகுப்புகளுக்கு அபராதம் உண்டு, பக்க ரெண்டரிங்குக்கு சிறிது நேரம் சேர்க்கலாம். Redis இல் விசை வரிசைப்படுத்தல் இல்லை, இது போல் மட்டுமே.`,
    socketIoTimeout: options => {
      return `Socket.IO இந்த கோரிக்கைக்கு காலாவதியானது (அதிகபட்சம் ${options.timeout / 1000} வினாடிகள்) ...`;
    },
    resizerInfo: options => {
      return `இடது அல்லது வலது பேனலின் குறைந்தபட்ச அகலம் ${options.width}px`;
    },
    jsonViewNotParsable: "இந்த மதிப்பை JSON ஆக பாகுபடுத்த முடியாது  ",
    ttlTitle: "TTL ஐ வினாடிகளில் அமைக்கவும்",
    passwordSecure: "கடவுச்சொல் காலியாக இருக்கலாம், ஆனால் எழுத்துக்களைக் காட்டும், இது ஒரு பாதுகாப்பு அம்சம்.",
    tlsWithoutCert: "கூடுதல் சான்றிதழ் இல்லாமல் TLS ஐ இயக்கு",
    tlsRejectUnauthorized: "அங்கீகரிக்கப்படாத சான்றிதழை நிராகரி",
    tlsSecure: "P3X உடன் தொடங்கும் TLS உள்ளமைவை நீங்கள் கண்டால் அல்லது அனைத்து TLS அமைப்புகளும் ஒரே மாதிரியாக தெரிந்தால், அது ஒரு பாதுகாப்பு அம்சம். அமைப்புகளை மாற்ற, இந்த அமைப்புகளை காலி அல்லது வேறு ஏதாவது மாற்றவும், அவை சேமிக்கப்படும். TLS அமைப்புகளை மாற்றவில்லை என்றால், சேவையகத்தில் உள்ளபடியே இருக்கும்.",
    treeSeparatorEmpty: "மர பிரிப்பான் காலியாக இருந்தால், மரத்தில் உள்ளமை முனைகள் இருக்காது, தூய பட்டியல் மட்டுமே",
    treeSeparatorEmptyNote: "உள்ளமை முனைகள் இல்லை, தூய பட்டியல் மட்டுமே",
    welcomeConsole: "Redis கன்சோலுக்கு வரவேற்கிறோம்",
    welcomeConsoleInfo: "கர்சர் மேல் அல்லது கீழ் வரலாறு இயக்கப்பட்டுள்ளது",
    redisListIndexInfo: "சேர்க்க காலி, -1 முன்னிணைக்க அல்லது காட்டப்பட்ட நிலையில் சேமிக்கவும்.",
    console: "கன்சோல்",
    connectiondAdd: "இணைப்பைச் சேர்",
    connectiondEdit: "இணைப்பைத் திருத்து",
    connectiondView: "இணைப்பைப் பார்",
    connections: "இணைப்புகள்",
    licenseInfo: "உரிமம்",
    licenseEditable: "உரிமம் திருத்தக்கூடியது",
    licenseEditableYes: "ஆம்",
    licenseEditableNo: "இல்லை",
    licenseTerminalOnly: "உரிமத்தை சேவையக முனையத்தில் இருந்து மட்டுமே உள்ளமைக்க முடியும்.",
    licenseTierPolicyTitle: "அடுக்கு கொள்கை",
    licenseTierPolicyText: "<h4>இலவசம்</h4>அடிப்படை Redis UI மட்டும்; SSH சுரங்கப்பாதை இல்லை, படிக்க மட்டும் இணைப்பு முறை இல்லை, Cluster/Sentinel இல்லை, JSON திருத்தம்/பைனரி பதிவேற்றம்/பைனரி பதிவிறக்கம் இல்லை, ReJSON இல்லை.<br/><strong>விலை: 0 HUF/மாதம் (\u20ac0/மாதம்).</strong><br/><br/><h4>Pro</h4>SSH சுரங்கப்பாதை, படிக்க மட்டும் இணைப்பு முறை (--readonly-connections/-r உட்பட), JSON திருத்தம், பைனரி பதிவேற்றம், பைனரி பதிவிறக்கம், ReJSON.<br/><strong>அடிப்படை விலை: 400 HUF/மாதம் (\u20ac1/மாதம்) அல்லது 4,000 HUF/ஆண்டு (\u20ac10/ஆண்டு).</strong><br/><strong>27% VAT உடன் மொத்தம்: 500 HUF/மாதம் (\u20ac1.27/மாதம்) அல்லது 5,100 HUF/ஆண்டு (\u20ac12.70/ஆண்டு).</strong><br/><br/><h4>Enterprise</h4>SSH சுரங்கப்பாதை, Cluster மற்றும் Sentinel, மற்றும் JSON திருத்தம், பைனரி பதிவேற்றம், பைனரி பதிவிறக்கம், ReJSON; --readonly-connections/-r வும் வேலை செய்யும்.<br/><strong>அடிப்படை விலை: 1,200 HUF/மாதம் (\u20ac3/மாதம்) அல்லது 12,000 HUF/ஆண்டு (\u20ac30/ஆண்டு).</strong><br/><strong>27% VAT உடன் மொத்தம்: 1,500 HUF/மாதம் (\u20ac3.81/மாதம்) அல்லது 15,200 HUF/ஆண்டு (\u20ac38.10/ஆண்டு).</strong><br/><br/><h4>ஆண்டு விதி</h4>ஆண்டு விலை மாத விலையின் 10 மடங்கு.<br/><br/><h4>இடங்கள்</h4>இயல்புநிலை உரிமத்தில் 5 இடங்கள் அடங்கும். மேலும் இடங்கள் தேவைப்பட்டால், <a href='mailto:support@corifeus.com'>support@corifeus.com</a> இல் எங்களைத் தொடர்பு கொள்ளவும்.<br/><br/><h4>Enterprise சோதனை</h4>உண்மையான மின்னஞ்சல் முகவரி உள்ள எவருக்கும் 10 நாட்கள் இலவசம் (சோதனை மின்னஞ்சல் அல்ல).<br/><hr/><h4>மின்னஞ்சலில் பில்லிங் தகவல்</h4>பெயர், பில்லிங் மின்னஞ்சல், நாட்டுக் குறியீடு, அஞ்சல் குறியீடு, நகரம், முகவரி, VAT ID (விருப்பத்திற்கு).<br/><br/><h4>பணம் செலுத்துதல்</h4>PayPal பணம் செலுத்துதல் HUF (forint) இல் மட்டுமே கிடைக்கும்; <a href='https://paypal.me/corifeus'>https://paypal.me/corifeus</a> @ பணம் அனுப்பிய பிறகு நான் உங்களுக்கு விலைப்பட்டியல் அனுப்புவேன். அனைத்து பணம் செலுத்துதல்களும் திரும்பப் பெற இயலாது.<br/><br/><h4>VAT</h4>VAT விலையில் சேர்க்கப்படும் (ஹங்கேரியில் 27%).<br/><hr/><h4>தொடர்பு</h4>நீங்கள் வணக்கம் சொல்ல அல்லது கேள்வி இருந்தால், <a href='mailto:support@corifeus.com'>support@corifeus.com</a> ஐ தொடர்பு கொள்ளவும்.<br/><hr/><h4>மொழி</h4>விலைப்பட்டியல் மற்றும் உரிம மின்னஞ்சல் தொடர்பு ஆங்கிலத்தில். விலைப்பட்டியல் நாணயம் HUF.<br/><hr/><h4>குறிப்பு</h4>உரிம சரிபார்ப்புக்கு இணைய அணுகல் தேவை.",
    licenseState: "நிலை",
    licenseStateActive: "செயலில்",
    licenseStateInactive: "செயலற்றது",
    licenseStateNoLicense: "உரிமம் இல்லை",
    licenseKeyMasked: "சேமிக்கப்பட்ட விசை",
    licenseTier: "அடுக்கு",
    licenseValid: "செல்லுபடியாகும்",
    licenseStatus: "உரிம நிலை",
    licenseReason: "காரணம்",
    licenseCheckedAt: "சரிபார்க்கப்பட்ட நேரம்",
    licenseStartsAt: "தொடக்க நேரம்",
    licenseExpiresAt: "காலாவதி நேரம்",
    licenseDaysLeft: "மீதமுள்ள நாட்கள்",
    licenseMaxDevices: "அதிகபட்ச சாதனங்கள்",
    licenseActiveDevices: "செயலில் உள்ள சாதனங்கள்",
    licenseActiveDevicesInfo: "ஒரு சாதனம் இனி பயன்படுத்தப்படாவிட்டால், அதன் இடம் 75 நிமிடங்களுக்குப் பிறகு தானாகவே விடுவிக்கப்படும்.",
    licenseCustomerEmail: "வாடிக்கையாளர் மின்னஞ்சல்",
    licenseFeatures: "அம்சங்கள்",
    licenseFeaturesEmpty: "கூடுதல் அம்சங்கள் இல்லை",
    licenseFeatureReadonlyMode: "படிக்க மட்டும் இணைப்பு முறை",
    licenseFeatureReadonlyConnectionsFlag: "படிக்க மட்டும் இணைப்புகள் (--readonly-connections/-r)",
    licenseFeatureSsh: "SSH சுரங்கப்பாதை",
    licenseFeatureCluster: "Cluster இணைப்புகள்",
    licenseFeatureSentinel: "Sentinel இணைப்புகள்",
    licenseFeatureReJSON: "ReJSON (JSON தரவு வகை)",
    keysSort: {
      on: "விசை வரிசைப்படுத்தல் இயக்கப்பட்டது",
      off: "விசை வரிசைப்படுத்தல் முடக்கப்பட்டது"
    },
    cluster: {
      on: "Cluster இயக்கப்பட்டது",
      off: "Cluster முடக்கப்பட்டது"
    },
    sentinel: {
      on: "Sentinel இயக்கப்பட்டது",
      off: "Sentinel முடக்கப்பட்டது",
      name: "Sentinel பெயர்"
    },
    readonly: {
      on: "படிக்க மட்டும் இயக்கப்பட்டது",
      off: "படிக்க மட்டும் முடக்கப்பட்டது"
    },
    proSshOnly: "SSH Pro அல்லது Enterprise இல் கிடைக்கும்.",
    proReadonlyOnly: "படிக்க மட்டும் இணைப்பு முறை Pro அல்லது Enterprise இல் கிடைக்கும்.",
    enterpriseClusterSentinelOnly: "Cluster மற்றும் Sentinel Enterprise இல் மட்டுமே கிடைக்கும்.",
    theme: {
      light: "ஒளி",
      dark: "இருள் enterprise",
      darkNeu: "இருள்",
      darkoBluo: "Darko bluo",
      enterprise: "Enterprise",
      redis: "Redis",
      matrix: "Matrix"
    },
    connected: opts => {
      return `இணைக்கப்பட்டது: ${opts.name}`;
    },
    tree: "மரம்",
    askAuth: "அங்கீகாரம் கேள்",
    keyboardShortcuts: "Keyboard Shortcuts",
    about: "About",
    supportedLanguages: "Supported Languages",
    version: "Version",
    redisVersion: "Redis Version",
    modules: "modules",
    shortcutRefresh: "Refresh",
    shortcutSearch: "Focus Search",
    shortcutNewKey: "New Key",
    shortcutDisconnect: "துண்டி",
    themeAuto: "Auto (system)",
    shortcutCommandPalette: "Command Palette",
    commandPalette: "Command Palette",
    noResults: "No results",
    redisCommandsReference: "Redis கட்டளைகள்",
    ungrouped: "குழுவில்லாது",
    grouped: "Grouped",
    connectFirst: "connectFirst",
    searchLanguage: "மொழி தேடு...",
    exportProgress: "விசைகள் ஏற்றுமதி செய்யப்படுகின்றன...",
    importProgress: "விசைகள் இறக்குமதி செய்யப்படுகின்றன...",
    importPreview: "முன்னோட்டம்",
    importOverwrite: "மேலெழுது",
    importSkip: "தவிர்",
    importConflict: "விசை ஏற்கனவே இருந்தால்:",
    noKeysToExport: "ஏற்றுமதி செய்ய விசைகள் இல்லை",
    time: "நேரம்",
    loading: "ஏற்றுகிறது...",
    autoRefresh: "தானி",
    exportSearchHint: "தற்போதைய தேடலுடன் பொருந்தும் விசைகளை மட்டும் ஏற்றுமதி செய்கிறது",
    importSearchHint: "இறக்குமதி தேடல் முடிவுகளுக்கு மட்டுமல்ல, முழு தரவுத்தளத்திற்கும் பொருந்தும்",
    importNoKeys: "கோப்பில் விசைகள் காணப்படவில்லை",
  },
  status: {
    dataCopied: "தரவு கிளிப்போர்டில் உள்ளது",
    licenseSaved: "உரிமம் சேமிக்கப்பட்டது",
    exportDone: "ஏற்றுமதி முடிந்தது",
    indexCreated: "குறியீடு உருவாக்கப்பட்டது",
    indexDropped: "குறியீடு நீக்கப்பட்டது",
    importDone: (opts) => `இறக்குமதி முடிந்தது: ${opts.created} உருவாக்கப்பட்டது, ${opts.skipped} தவிர்க்கப்பட்டது, ${opts.errors} பிழைகள்`,
    nodeRemoved: "முனை அகற்றப்பட்டது",
    keyIsNotExisting: "இந்த விசை நீக்கப்பட்டிருக்கலாம் அல்லது காலாவதியாகியிருக்கலாம்.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "விசை இல்லை";
      } else if (opts.keyCount === 1) {
        return "1 விசை";
      } else {
        return `${opts.keyCount} விசைகள்`;
      }
    },
    treeExpandAll: "அனைத்து மர இலைகளையும் விரிவாக்கு. இந்த செயல்பாடு விலை உயர்ந்ததாக இருக்கலாம் மற்றும் நேரம் எடுக்கலாம் ...",
    noRedisKeys: "இந்த தரவுத்தளத்தில் விசைகள் இல்லை.",
    redisConnected: "Redis வெற்றிகரமாக இணைக்கப்பட்டது",
    reloadingDataInfo: "Redis தரவு தகவலை மீளேற்றம் செய்கிறது",
    added: "சேர்க்கப்பட்டது",
    saved: "புதுப்பிக்கப்பட்டது",
    cancelled: "ரத்து செய்யப்பட்டது",
    deleted: "நீக்கப்பட்டது",
    savedRedis: "Redis தரவு சேமிக்கப்பட்டது",
    redisDisconnected: opts => {
      return `தற்போதைய இணைப்பில் பிழை ஏற்பட்டது: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `db குறியீடு ${opts.db} ஆக அமைக்கப்பட்டது. `;
    },
    treeDeleted: opts => {
      return `மர விசை நீக்கப்பட்டது (${opts.key}).`;
    },
    deletedKey: opts => {
      return `விசை நீக்கப்பட்டது (${opts.key}).`;
    },
    renamedKey: "இந்த விசை மறுபெயரிடப்பட்டது",
    ttlChanged: "இந்த விசையின் TTL மாற்றப்பட்டது",
    notInteger: "இந்த உள்ளீடு முழு எண் அல்ல",
    persisted: "இந்த விசை நிரந்தரமாக சேமிக்கப்பட்டது",
    set: "விசை அமைக்கப்பட்டது/சேர்க்கப்பட்டது"
  },
  code: {
    "delete-connection": "இந்த இணைப்பு நீக்கப்பட்டது, எனவே இந்த Redis நிகழ்வுடன் துண்டிக்கப்பட்டீர்கள்.",
    "save-connection": "இந்த இணைப்பு மாற்றப்பட்டது, எனவே இந்த Redis நிகழ்வுடன் துண்டிக்கப்பட்டீர்கள். மீண்டும் இணையலாம்.",
    "readonly-connections": "இணைப்புகள் சேர்/சேமி/நீக்கு படிக்க மட்டுமே!",
    "readonly-connection-mode": "இந்த இணைப்பு படிக்க மட்டும் முறையில் உள்ளது!",
    "list-out-of-bounds": "இந்த பட்டியல் குறியீடு எல்லைக்கு அப்பாற்பட்டது",
    "donation-ware-feature": "இந்த அம்சம் நன்கொடை பதிப்பில் உள்ளது.",
    "feature-pro-readonly-required": "படிக்க மட்டும் இணைப்பு முறைக்கு Pro அல்லது Enterprise உரிமம் தேவை.",
    "feature-pro-ssh-required": "SSH சுரங்கப்பாதைக்கு Pro அல்லது Enterprise உரிமம் தேவை.",
    "feature-enterprise-cluster-sentinel-required": "Cluster மற்றும் Sentinel க்கு Enterprise உரிமம் தேவை.",
    "feature-pro-json-binary-required": "JSON திருத்தம், பைனரி பதிவேற்றம் மற்றும் பைனரி பதிவிறக்கத்திற்கு Pro அல்லது Enterprise உரிமம் தேவை.",
    "feature-pro-rejson-required": "ReJSON (JSON தரவு வகை) க்கு Pro அல்லது Enterprise உரிமம் தேவை.",
    "invalid-json-value": "மதிப்பு செல்லுபடியான JSON அல்ல.",
    "http_auth_required": "அங்கீகாரம் தேவை: தயவுசெய்து HTTP Basic Auth மூலம் அங்கீகரித்து மீளேற்றம் செய்யவும்.",
    "auto-connection-failed": "இணைப்பு அகற்றப்பட்டிருக்கலாம் மற்றும் தானியங்கி இணைப்பு இதனால் தோல்வியடைந்தது.",
    invalid_console_command: "இந்த கட்டளை GUI வழியாக வேலை செய்யாது."
  },
  licenseReason: {
    LICENSE_VALID: "உரிமம் செல்லுபடியாகும்",
    LICENSE_INVALID: "உரிமம் செல்லாது",
    LICENSE_MISSING: "உரிம விசை அமைக்கப்படவில்லை",
    LICENSE_DISABLED: "சேவையக உள்ளமைவில் உரிமம் முடக்கப்பட்டுள்ளது",
    LICENSE_NOT_FOUND: "உரிமம் கண்டறியப்படவில்லை",
    LICENSE_EXPIRED: "உரிமம் காலாவதியானது",
    LICENSE_CLEARED: "உரிம விசை அழிக்கப்பட்டது",
    LICENSE_MAX_DEVICES_REACHED: "அதிகபட்ச சாதன இடங்கள் எட்டப்பட்டது",
    PRODUCT_MISMATCH: "உரிம தயாரிப்பு பொருந்தவில்லை"
  },
  licenseStatusValue: {
    active: "செயலில்",
    deleted: "நீக்கப்பட்டது",
    all: "அனைத்தும்",
    expired: "காலாவதியானது",
    missing: "காணவில்லை",
    inactive: "செயலற்றது"
  },
  form: {
    error: {
      required: "தேவை",
      port: "போர்ட் 1-65535 க்கு இடையில் இருக்க வேண்டும்",
      invalid: "படிவம் தவறானது"
    },
    connection: {
      label: {
        name: "பெயர்",
        group: "Group",
        host: "ஹோஸ்ட்பெயர்",
        port: "போர்ட்",
        password: "கடவுச்சொல்",
        username: "பயனர்பெயர்"
      }
    },
    treeSettings: {
      maxValueDisplay: "அதிகபட்ச மதிப்பு காட்சி நீளம்",
      maxValueDisplayInfo: "0 ஆக அமைத்தால், முழு மதிப்புகளைக் காட்டு. 0 ஐ விட அதிகமாக இருந்தால், இந்த நீளத்திற்கு வெட்டு. -1 என்றால்: சரங்களுக்கு, திருத்தும் வரை மதிப்பை மறை; மற்ற வகைகளுக்கு, முழு உள்ளடக்கத்தைக் காட்டு.",
      maxKeys: "அதிகபட்ச விசை எண்ணிக்கை",
      maxKeysInfo: "GUI செயலிழக்காமல் இருக்க, அதிகபட்ச விசை எண்ணிக்கையை வரம்பிடுகிறோம்.",
      keyCount: () => {
        return `விசைகளின் எண்ணிக்கை: ${p3xr.state.keysRaw.length}`;
      },
      label: {
        animation: "அசைவூட்டம் பயன்படுத்து",
        noAnimation: "அசைவூட்டம் இல்லை",
        jsonFormatTwoSpace: "2 இடைவெளிகளுடன் JSON வடிவமை",
        jsonFormatFourSpace: "4 இடைவெளிகளுடன் JSON வடிவமை",
        formName: "Redis அமைப்புகள்",
        searchModeClient: "வாடிக்கையாளர் தேடல் முறை",
        searchModeServer: "சேவையக தேடல் முறை",
        searchModeStartsWith: "தொடங்குவதன் மூலம் தேடு",
        searchModeIncludes: "உள்ளடக்கும் முறையில் தேடு"
      },
      field: {
        treeSeparator: "மர பிரிப்பான்",
        treeSeparatorSelector: "மர பிரிப்பான் தேர்வி",
        page: "மர பக்க எண்ணிக்கை",
        keyPageCount: "விசை பக்க எண்ணிக்கை",
        keysSort: "விசைகளை வரிசைப்படுத்து",
        searchMode: "தேடல் முறை",
        searchModeStartsWith: "தேடல் தொடங்குவது / உள்ளடக்குவது"
      },
      error: {
        keyPageCount: "விசை பக்க எண்ணிக்கை 5 - 100 க்கு இடையிலான முழு எண்ணாக இருக்க வேண்டும்",
        page: "பக்க எண்ணிக்கை 10 - 5000 க்கு இடையிலான முழு எண்ணாக இருக்க வேண்டும்",
        maxValueDisplay: "அதிகபட்ச காட்சி மதிப்பு -1 மற்றும் 32768 க்கு இடையிலான முழு எண்ணாக இருக்க வேண்டும்",
        maxKeys: "அதிகபட்ச விசை எண்ணிக்கை 100 மற்றும் 100000 க்கு இடையிலான முழு எண்ணாக இருக்க வேண்டும்"
      }
    },
    key: {
      label: {
        formName: {
          add: "புதிய Redis விசையைச் சேர்",
          edit: "Redis விசையைத் திருத்து",
          append: "ஏற்கனவே உள்ள Redis விசைக்கு சேர்"
        }
      },
      field: {
        streamTimestamp: "நேர முத்திரை",
        key: "விசை",
        type: "வகை",
        index: "குறியீடு",
        hashKey: "Hash விசை",
        score: "மதிப்பெண்",
        value: "மதிப்பு"
      },
      error: {
        streamTimestamp: "நேர முத்திரை தேவை, Redis வடிவம் அல்லது * ஆக",
        key: "விசை குறைந்தது ஒரு எழுத்தாவது இருக்க வேண்டும்",
        hashKey: "hash அட்டவணை விசை குறைந்தது ஒரு எழுத்தாவது இருக்க வேண்டும்",
        score: "வரிசைப்படுத்தப்பட்ட தொகுப்பு மதிப்பெண் தேவை",
        value: "மதிப்பு தேவை"
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
      title: "தேடு",
      index: "குறியீடு",
      query: "வினவல்",
      results: "முடிவுகள்",
      noIndex: "குறியீடுகள் காணப்படவில்லை",
      createIndex: "குறியீடு உருவாக்கு",
      dropIndex: "குறியீடு நீக்கு",
      indexInfo: "குறியீடு தகவல்",
      indexName: "குறியீடு பெயர்",
      prefix: "விசை முன்னொட்டு (விருப்பம்)",
      fieldName: "புலப் பெயர்",
    },
    monitor: {
      title: "கண்காணிப்பு",
      memory: "நினைவகம்",
      opsPerSec: "செயல்/வி",
      clients: "வாடிக்கையாளர்கள்",
      blocked: "தடுக்கப்பட்டது",
      hitsMisses: "வெற்றி விகிதம்",
      networkIo: "நெட்வொர்க் I/O",
      slowLog: "மெதுவான பதிவு",
      totalCommands: "மொத்தம்",
      expired: "காலாவதி",
      evicted: "வெளியேற்றப்பட்டது",
      clientList: "வாடிக்கையாளர் பட்டியல்",
      topKeys: "நினைவகத்தின் படி பெரிய விசைகள்",
      killClient: "வாடிக்கையாளரை நிறுத்து",
      clientKilled: "வாடிக்கையாளர் நிறுத்தப்பட்டார்",
      confirmKillClient: "இந்த வாடிக்கையாளரை நிறுத்த விரும்புகிறீர்களா?",
      noKeys: "விசைகள் இல்லை",
      noClients: "வாடிக்கையாளர்கள் இல்லை",
    },
    overview: {
      noConnected: "Redis உடன் இணைப்பு இல்லை.",
      overviewClients: "வாடிக்கையாளர்களின் எண்ணிக்கையின் படி இணைக்கப்பட்டவற்றை பட்டியலிடு",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "1 வாடிக்கையாளர்";
        }
        return `${opt.length} வாடிக்கையாளர்கள்`;
      }
    },
    key: {
      label: {
        key: "விசை",
        encoding: "குறியாக்கம்",
        length: "அளவு",
        ttl: "TTL",
        ttlTitle: "வாழ்நாள்",
        type: "வகை",
        ttlNotExpire: "காலாவதியாகாது",
        lengthString: "பைட்கள்",
        lengthItem: "உருப்படிகள்",
        actions: "செயல்கள்"
      },
      list: {
        table: {
          index: "குறியீடு",
          value: "மதிப்பு"
        }
      },
      hash: {
        table: {
          hashkey: "Hash விசை",
          value: "மதிப்பு"
        }
      },
      set: {
        table: {
          value: "உறுப்பினர்"
        }
      },
      zset: {
        table: {
          value: "உறுப்பினர்",
          score: "மதிப்பெண்"
        }
      },
      stream: {
        table: {
          timestamp: "நேர முத்திரை ID",
          field: "புலம்",
          value: "மதிப்பு"
        }
      }
    },
    treeControls: {
      settings: "மர அமைப்புகள்",
      expandAll: "அனைத்தையும் விரிவாக்கு",
      collapseAll: "அனைத்தையும் சுருக்கு",
      search: {
        search: "விசைகளில் தேடு",
        clear: "தற்போதைய தேடலை காலியாக்க அழி",
        placeholderClient: "வாடிக்கையாளர் பக்கம் தேடு",
        placeholderServer: "சேவையக பக்கம் தேடு",
        info: "வாடிக்கையாளர் பக்க தேடல் என்பது தேடல் உள்ளீட்டில் உள்ள உரையுடன் பொருத்துவது. சேவையக பக்க தேடல் என்பது *{search-text}* போன்ற விசை வடிவங்களில் தேடுவது. பெரிய தேடல் தொகுப்புகளுக்கு, சேவையக பக்க தேடலைப் பயன்படுத்துவது நல்லது. சிறிய தேடல் தொகுப்புகளுக்கு, வாடிக்கையாளர் பக்க தேடல் முறையைப் பயன்படுத்துவது நல்லது." + ` விசைகளின் எண்ணிக்கை ${p3xr.settings.maxLightKeysCount} ஐ விட அதிகமாக இருந்தால், சேவையக பக்கத்தில் மட்டுமே தேடலாம்.`,
        largeSetInfo: "பெரிய தொகுப்பில், வாடிக்கையாளர் பக்க தேடல் முடக்கப்பட்டுள்ளது. எனவே தற்போது சேவையக பக்க தேடல் மட்டுமே சாத்தியம்.",
        infoDetails: "தேடல் எவ்வாறு வேலை செய்கிறது என்பதை அறிய, அமைப்புகளைப் பார்க்கவும்"
      },
      pager: {
        next: "அடுத்தது",
        prev: "முந்தையது",
        first: "முதல்",
        last: "கடைசி"
      }
    }
  },
  time: {
    loading: "ஏற்றுகிறது...",
    years: "ஆண்டுகள்",
    months: "மாதங்கள்",
    days: "நாட்கள்",
    year: "ஆண்டு",
    month: "மாதம்",
    day: "நாள்"
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
