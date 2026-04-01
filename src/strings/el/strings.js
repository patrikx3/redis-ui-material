const strings = {
  error: {
    cleared_license: "Η άδεια καθαρίστηκε",
    invalid_license: "Μη έγκυρη άδεια",
    license_max_devices_reached: "Επιτεύχθηκε ο μέγιστος αριθμός θέσεων συσκευών",
    license_readonly: "Η άδεια μπορεί να αλλάξει μόνο από το τερματικό του διακομιστή.",
    server_error: "Σφάλμα διακομιστή, παρακαλώ δοκιμάστε ξανά"
  },
  title: {
    donate: "Δωρεά",
    jsonRecursive: "Ανάπτυξη όλων των κλαδιών",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "Μπορείτε να επιλέξετε μια σύνδεση Redis από το κάτω αριστερό μενού.",
    statistics: "Στατιστικά",
    error: "Σφάλμα",
    connectingRedis: "Σύνδεση στο Redis ...",
    socketioConnectError: "Σφάλμα Socket.IO",
    db: "DB",
    server: "Διακομιστής",
    clients: "Πελάτες",
    memory: "Μνήμη",
    persistence: "Μονιμότητα",
    stats: "Στατιστικά",
    replication: "Αντιγραφή",
    cpu: "CPU",
    cluster: "Cluster",
    modules: "Ενότητες",
    errorstats: "Στατιστικά σφαλμάτων",
    commandstats: "Στατιστικά εντολών",
    latencystats: "Στατιστικά καθυστέρησης",
    keysizes: "Μεγέθη κλειδιών",
    threads: "Νήματα",
  },
  confirm: {
    dropIndex: "Είστε σίγουροι ότι θέλετε να διαγράψετε αυτό το ευρετήριο;",
    uploadBuffer: "Είστε σίγουροι ότι θέλετε να ανεβάσετε αυτά τα δυαδικά δεδομένα;",
    uploadBufferDone: "Τα δυαδικά δεδομένα ανέβηκαν",
    uploadBufferDoneAndSave: "Τα δυαδικά δεδομένα ανέβηκαν και αποθηκεύτηκαν στον διακομιστή",
    title: "Επιβεβαίωση",
    alert: "Ειδοποίηση",
    info: "Πληροφορίες",
    deleteListItem: "Είστε σίγουροι ότι θέλετε να διαγράψετε αυτό το στοιχείο λίστας;",
    deleteHashKey: "Είστε σίγουροι ότι θέλετε να διαγράψετε αυτό το κλειδί hash;",
    deleteStreamTimestamp: "Είστε σίγουροι ότι θέλετε να διαγράψετε αυτή τη χρονοσήμανση ροής;",
    deleteSetMember: "Είστε σίγουροι ότι θέλετε να διαγράψετε αυτό το μέλος συνόλου;",
    deleteZSetMember: "Είστε σίγουροι ότι θέλετε να διαγράψετε αυτό το μέλος ταξινομημένου συνόλου;",
    deleteConnection: "Επιβεβαίωση",
    deleteConnectionText: "Είστε σίγουροι ότι θέλετε να διαγράψετε αυτή τη σύνδεση Redis;",
    deleteNode: "Είστε σίγουροι ότι θέλετε να διαγράψετε αυτόν τον κόμβο Redis;",
    deleteAllKeys: opts => {
      return `Διαγραφή αυτού του δέντρου και όλων των κλειδιών του (${opts.key});`;
    },
    socketioConnectError: "Το Socket.IO δεν μπορεί να συνδεθεί στον διακομιστή, μπορείτε να κάνετε επαναφόρτωση και να προσπαθήσετε να επιλύσετε το σφάλμα σύνδεσης μόνοι σας, ο πελάτης δεν γνωρίζει πώς να το λύσει μόνος του.",
    socketioAuthRequired: "Απαιτείται εξουσιοδότηση Socket.IO. Παρακαλώ πιστοποιηθείτε με HTTP Basic Auth (όνομα χρήστη/κωδικό πρόσβασης) και κάντε επαναφόρτωση.",
    deleteKey: "Είστε σίγουροι ότι θέλετε να διαγράψετε αυτό το κλειδί;",
    rename: {
      title: "Είστε σίγουροι ότι θέλετε να μετονομάσετε αυτό το κλειδί;",
      textContent: "Αυτή η ενέργεια μετονομάζει το κλειδί μόνιμα.",
      placeholder: "Το κλειδί Redis (υποχρεωτικό)"
    },
    ttl: {
      title: "Είστε σίγουροι ότι θέλετε να αλλάξετε το TTL αυτού του κλειδιού;",
      textContent: "Η αλλαγή του TTL ενημερώνει τον χρόνο ζωής αυτού του κλειδιού. Αφήστε κενό για να διατηρήσετε αυτό το κλειδί για πάντα.",
      placeholder: "Το TTL του κλειδιού Redis (ακέραιος ή κενό)",
      placeholderPlaceholder: "Κενό σημαίνει ότι παραμένει για πάντα· διαφορετικά εισάγετε έναν ακέραιο.",
      convertTextToTime: "Μετατροπή κειμένου σε χρόνο",
      convertTextToTimePlaceholder: "Π.χ. 1d θα γίνει 86400"
    },
    license: {
      title: "Ορισμός άδειας",
      textContent: "Αν θέλετε να χρησιμοποιήσετε λειτουργίες επί πληρωμή, παρακαλώ επικοινωνήστε με support@corifeus.com για να ζητήσετε άδεια. Οι τιμές είναι Pro 400 HUF/μήνα (€1/μήνα) ή 4.000 HUF/έτος (€10/έτος) και Enterprise 1.200 HUF/μήνα (€3/μήνα) ή 12.000 HUF/έτος (€30/έτος). Η ετήσια τιμή είναι 10x η μηνιαία. Με 27% ΦΠΑ, τα σύνολα είναι Pro 500 HUF/μήνα (€1,27/μήνα) ή 5.100 HUF/έτος (€12,70/έτος), Enterprise 1.500 HUF/μήνα (€3,81/μήνα) ή 15.200 HUF/έτος (€38,10/έτος). Η επαλήθευση άδειας απαιτεί πρόσβαση στο διαδίκτυο. Η προεπιλεγμένη άδεια περιλαμβάνει 5 θέσεις. Αν χρειάζεστε περισσότερες θέσεις, επικοινωνήστε μαζί μας στο support@corifeus.com.",
      placeholder: "Κλειδί άδειας"
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
    copy: "Αντιγραφή",
    downloadBuffer: "Λήψη δυαδικών",
    setBuffer: "Ανέβασμα δυαδικών",
    exportKeys: "Εξαγωγή κλειδιών",
    exportAllKeys: (opts) => `Εξαγωγή όλων των ${opts.count} κλειδιών`,
    exportSearchResults: (opts) => `Εξαγωγή ${opts.count} αποτελεσμάτων`,
    importKeys: "Εισαγωγή κλειδιών",
    saveWithFormatJson: "Αποθήκευση με μορφοποίηση",
    formatJson: "Μορφοποίηση Json",
    wrap: "Αναδίπλωση",
    unwrap: "Χωρίς αναδίπλωση",
    downloadJson: "Λήψη JSON",
    pubsubMonitor: "Παρακολούθηση PubSub",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "Γλώσσα / Language",
    ok: "OK",
    addKey: "Προσθήκη σε αυτό το κλειδί",
    addKeyRoot: "Προσθήκη κλειδιού ρίζας",
    reloadKey: "Επαναφόρτωση κλειδιού",
    reload: "Επαναφόρτωση",
    close: "Κλείσιμο",
    commands: "Εντολές",
    view: "Προβολή",
    statistics: "Στατιστικά",
    refresh: "Ανανέωση",
    pause: "Παύση",
    resume: "Συνέχεια",
    clear: "Εκκαθάριση",
    rename: "Μετονομασία",
    main: "Βάση δεδομένων",
    cancel: "Ακύρωση",
    theme: "Θέμα",
    github: "GitHub",
    githubRepo: "Αποθετήριο",
    githubRelease: "Εκδόσεις",
    githubChangelog: "Ιστορικό αλλαγών",
    info: "Info",
    settings: "Ρυθμίσεις",
    connect: "Σύνδεση",
    disconnect: "Αποσύνδεση",
    overview: "Επισκόπηση",
    console: "Κονσόλα",
    noConnections: "Δεν υπάρχουν συνδέσεις, προσθέστε μια σύνδεση στο μενού ρυθμίσεων.",
    noConnectionsInSettings: "Δεν υπάρχουν συνδέσεις, μπορείτε να προσθέσετε ΝΕΑ ΣΥΝΔΕΣΗ παραπάνω.",
    connectionAdd: "Νέα σύνδεση",
    addGroup: "Προσθήκη ομάδας",
    extend: "Ανάπτυξη",
    collapse: "Σύμπτυξη",
    add: "Προσθήκη",
    edit: "Επεξεργασία",
    save: "Αποθήκευση",
    ttl: "Ορισμός TTL",
    license: "Ορισμός άδειας",
    delete: "Διαγραφή",
    remove: "Αφαίρεση",
    sure: "Σίγουρα",
    testConnection: "Δοκιμή σύνδεσης",
    getKey: "Φόρτωση κλειδιού Redis και σχετικών δεδομένων ...",
    jsonViewShow: "Εμφάνιση JSON",
    jsonViewEditor: "Επεξεργασία JSON",
    quickConsole: "Γρήγορη κονσόλα",
  },
  label: {
    id: {
      nodeId: 'ID κόμβου',
      id: "ID σύνδεσης",
      info: "Αν δεν θέλετε να αλλάξετε τις ιδιότητες: sshPassword, sshPrivateKey, password, tlsCrt, tlsKey, tlsCa, παρακαλώ εισάγετε το ID της σύνδεσης σε αυτές τις ιδιότητες για να διατηρήσετε τις τιμές ανέπαφες. Αν θέλετε την ίδια λογική στον κωδικό πρόσβασης κόμβου, εισάγετε το ID κόμβου στον κωδικό πρόσβασης κόμβου."
    },
    secureFeature: 'Αν βλέπετε μια τιμή που αρχίζει με P3X και μοιάζει η ίδια, πρόκειται για δυνατότητα ασφαλείας. Για να αλλάξετε τις ρυθμίσεις, απλά αντικαταστήστε αυτές τις ρυθμίσεις με κενό ή κάτι άλλο και θα αποθηκευτούν. Αν δεν αλλάξετε τις ρυθμίσεις, θα διατηρηθούν ως έχουν στον διακομιστή.',
    aiTranslating: "Μετάφραση...",
    aiSettings: "Ρυθμίσεις AI",
    aiGroqApiKey: "Κλειδί API Groq",
    aiGroqApiKeyInfo: "Προαιρετικό. Δικό σας κλειδί API Groq για καλύτερη απόδοση. Αποκτήστε δωρεάν κλειδί από",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "Το κλειδί API AI αποθηκεύτηκε",
    aiGroqApiKeyInvalid: "Invalid Groq API key",
    aiGroqApiKeyNotSet: "Δεν έχει οριστεί (προεπιλογή διακομιστή)",
    aiEnabled: "AI ενεργοποιημένο",
    aiEnabledYes: "Ναι",
    aiEnabledNo: "Όχι",
    aiRouteViaNetwork: "Route via network.corifeus.com",
    aiRoutingDirect: "Queries go directly to Groq using your own API key, bypassing network.corifeus.com.",
    aiRoutingNetwork: "AI queries are routed through network.corifeus.com. If you have your own free Groq API key, you can turn off this switch to route directly to Groq without network.corifeus.com.",
    ssh: {
      on: 'SSH ενεργό',
      off: 'SSH ανενεργό',
      sshHost: 'SSH Host',
      sshPort: 'SSH θύρα',
      sshUsername: 'SSH όνομα χρήστη',
      sshPassword: 'SSH κωδικός πρόσβασης',
      sshPrivateKey: 'SSH ιδιωτικό κλειδί'
    },
    isBuffer: opts => `[object ArrayBuffer] σημαίνει ότι η τιμή είναι δυαδικά δεδομένα ή η τιμή είναι μεγαλύτερη από ${opts.maxValueAsBuffer}`,
    streamValue: `Το πεδίο και η τιμή ροής είναι σε μία γραμμή. Π.χ.: field1 value1 "field 2" "value 2"`,
    streamTimestampId: `'*' σημαίνει αυτόματη δημιουργία ή η προδιαγραφή ως <millisecondsTime>-<sequenceNumber>`,
    unableToLoadKey: ({
      key
    }) => {
      return `Αδυναμία φόρτωσης αυτού του κλειδιού: ${key}. Πιθανόν, το κλειδί διαγράφηκε. Το ακριβές σφάλμα βρίσκεται στην κονσόλα.`;
    },
    bigJson: "Αυτό το αντικείμενο JSON ξεπερνά τα 10 kb, οπότε βεβαιωθείτε ότι ξέρετε τι κάνετε, γιατί ορισμένες λειτουργίες μπορεί να αποδίδουν αργά.",
    addNode: "Προσθήκη κόμβου",
    validateJson: "Επικύρωση JSON",
    reducedFunction: `Μειωμένη λειτουργικότητα`,
    tooManyKeys: opts => {
      return `Για τις πλήρεις μέγιστες λειτουργίες, ο επιτρεπόμενος αριθμός κλειδιών είναι ${opts.maxLightKeysCount}. Αυτή η βάση δεδομένων έχει περισσότερα κλειδιά από τα επιτρεπόμενα: ${opts.count}. Η ταξινόμηση κλειδιών και οι πρόσθετες πληροφορίες δέντρου είναι απενεργοποιημένες. Η αναζήτηση γίνεται μόνο στον διακομιστή αντί στον πελάτη.`;
    },
    redisCommandNotFound: "Δεν βρέθηκε αντιστοίχιση εντολής Redis ...",
    treeKeyStore: `Η ταξινόμηση (φυσική σύγκριση) εκτελείται στον πελάτη δηλαδή τον περιηγητή, πράγμα που σημαίνει ότι υπάρχει ποινή για μεγάλα σύνολα, όπως πάνω από 10k κλειδιά, μπορεί να προσθέσει λίγο χρόνο στην απόδοση της σελίδας. Δεν υπάρχει ταξινόμηση κλειδιών στο Redis, μόνο με αυτόν τον τρόπο.`,
    socketIoTimeout: options => {
      return `Το Socket.IO εξάντλησε τον χρόνο αναμονής για αυτό το αίτημα (μέγ. ${options.timeout / 1000} δευτερόλεπτα) ...`;
    },
    resizerInfo: options => {
      return `Το ελάχιστο πλάτος αριστερού ή δεξιού πάνελ είναι ${options.width}px`;
    },
    jsonViewNotParsable: "Αυτή η τιμή δεν μπορεί να αναλυθεί ως JSON  ",
    ttlTitle: "Ορίστε το TTL σε δευτερόλεπτα",
    passwordSecure: "Ο κωδικός πρόσβασης μπορεί να είναι κενός, αλλά θα εμφανίζει χαρακτήρες, αυτή είναι μια δυνατότητα ασφαλείας.",
    tlsWithoutCert: "Ενεργοποίηση TLS χωρίς πρόσθετο πιστοποιητικό",
    tlsRejectUnauthorized: "Απόρριψη μη εξουσιοδοτημένου πιστοποιητικού",
    tlsSecure: "Αν βλέπετε μια ρύθμιση TLS που αρχίζει με P3X ή όλες οι ρυθμίσεις TLS μοιάζουν ίδιες, πρόκειται για δυνατότητα ασφαλείας. Για να αλλάξετε τις ρυθμίσεις, απλά αντικαταστήστε τες με κενό ή κάτι άλλο και θα αποθηκευτούν. Αν δεν αλλάξετε τις ρυθμίσεις TLS, θα διατηρηθούν ως έχουν στον διακομιστή.",
    treeSeparatorEmpty: "Αν ο διαχωριστής δέντρου είναι κενός, το δέντρο δεν θα έχει ένθετους κόμβους, μόνο μια απλή λίστα",
    treeSeparatorEmptyNote: "Χωρίς ένθετους κόμβους, μόνο μια απλή λίστα",
    welcomeConsole: "Καλώς ήλθατε στην κονσόλα Redis",
    welcomeConsoleInfo: "Το ιστορικό με τα βέλη ΠΑΝΩ ή ΚΑΤΩ είναι ενεργοποιημένο",
    redisListIndexInfo: "Κενό για προσάρτηση, -1 για εισαγωγή στην αρχή ή αποθηκεύστε στη θέση που εμφανίζεται.",
    console: "Κονσόλα",
    connectiondAdd: "Προσθήκη σύνδεσης",
    connectiondEdit: "Επεξεργασία σύνδεσης",
    connectiondView: "Προβολή σύνδεσης",
    connections: "Συνδέσεις",
    licenseInfo: "Άδεια",
    licenseEditable: "Επεξεργάσιμη άδεια",
    licenseEditableYes: "Ναι",
    licenseEditableNo: "Όχι",
    licenseTerminalOnly: "Η άδεια μπορεί να ρυθμιστεί μόνο από το τερματικό του διακομιστή.",
    licenseTierPolicyTitle: "Πολιτική επιπέδων",
    licenseTierPolicyText: "<h4>Δωρεάν</h4>μόνο βασικό Redis UI· χωρίς SSH tunneling, χωρίς λειτουργία σύνδεσης μόνο ανάγνωσης, χωρίς Cluster/Sentinel, χωρίς Επεξεργασία JSON/Ανέβασμα δυαδικών/Λήψη δυαδικών, χωρίς ReJSON.<br/><strong>Τιμή: 0 HUF/μήνα (€0/μήνα).</strong><br/><br/><h4>Pro</h4>SSH tunneling, λειτουργία σύνδεσης μόνο ανάγνωσης (συμπεριλαμβανομένου --readonly-connections/-r), Επεξεργασία JSON, Ανέβασμα δυαδικών, Λήψη δυαδικών, ReJSON.<br/><strong>Βασική τιμή: 400 HUF/μήνα (€1/μήνα) ή 4.000 HUF/έτος (€10/έτος).</strong><br/><strong>Σύνολο με 27% ΦΠΑ: 500 HUF/μήνα (€1,27/μήνα) ή 5.100 HUF/έτος (€12,70/έτος).</strong><br/><br/><h4>Enterprise</h4>SSH tunneling, Cluster και Sentinel, καθώς και Επεξεργασία JSON, Ανέβασμα δυαδικών, Λήψη δυαδικών, ReJSON· --readonly-connections/-r λειτουργεί επίσης.<br/><strong>Βασική τιμή: 1.200 HUF/μήνα (€3/μήνα) ή 12.000 HUF/έτος (€30/έτος).</strong><br/><strong>Σύνολο με 27% ΦΠΑ: 1.500 HUF/μήνα (€3,81/μήνα) ή 15.200 HUF/έτος (€38,10/έτος).</strong><br/><br/><h4>Ετήσιος κανόνας</h4>Η ετήσια τιμή είναι 10x η μηνιαία τιμή.<br/><br/><h4>Θέσεις</h4>Η προεπιλεγμένη άδεια περιλαμβάνει 5 θέσεις. Αν χρειάζεστε περισσότερες θέσεις, επικοινωνήστε μαζί μας στο <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><br/><h4>Δοκιμή Enterprise</h4>10 ημέρες δωρεάν για οποιονδήποτε με πραγματικό υπάρχον email (μη δοκιμαστικό email).<br/><hr/><h4>Στοιχεία τιμολόγησης μέσω e-mail</h4>Όνομα, Email τιμολόγησης, Κωδικός χώρας, Ταχυδρομικός κώδικας, Πόλη, Διεύθυνση, ΑΦΜ (προαιρετικά).<br/><br/><h4>Πληρωμή</h4>Η πληρωμή PayPal είναι διαθέσιμη μόνο σε HUF (φιορίνι)· μετά την αποστολή χρημάτων στο <a href='https://paypal.me/corifeus'>https://paypal.me/corifeus</a> θα σας στείλω τιμολόγιο. Όλες οι πληρωμές δεν επιστρέφονται.<br/><br/><h4>ΦΠΑ</h4>Ο ΦΠΑ προστίθεται στην τιμή (27% στην Ουγγαρία).<br/><hr/><h4>Επικοινωνία</h4>Αν θέλετε να πείτε γεια ή έχετε ερώτηση, επικοινωνήστε με <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><hr/><h4>Γλώσσα</h4>Η επικοινωνία τιμολογίων και αδειών μέσω email γίνεται στα Αγγλικά. Το νόμισμα τιμολογίων είναι HUF.<br/><hr/><h4>Σημείωση</h4>Η επαλήθευση άδειας απαιτεί πρόσβαση στο διαδίκτυο.",
    licenseState: "Κατάσταση",
    licenseStateActive: "Ενεργή",
    licenseStateInactive: "Ανενεργή",
    licenseStateNoLicense: "Χωρίς άδεια",
    licenseKeyMasked: "Αποθηκευμένο κλειδί",
    licenseTier: "Επίπεδο",
    licenseValid: "Έγκυρη",
    licenseStatus: "Κατάσταση άδειας",
    licenseReason: "Αιτία",
    licenseCheckedAt: "Ελέγχθηκε στις",
    licenseStartsAt: "Αρχίζει στις",
    licenseExpiresAt: "Λήγει στις",
    licenseDaysLeft: "Υπόλοιπες ημέρες",
    licenseMaxDevices: "Μέγιστες συσκευές",
    licenseActiveDevices: "Ενεργές συσκευές",
    licenseActiveDevicesInfo: "Αν μια συσκευή δεν χρησιμοποιείται πλέον, η θέση της απελευθερώνεται αυτόματα μετά από 75 λεπτά.",
    licenseCustomerEmail: "Email πελάτη",
    licenseFeatures: "Χαρακτηριστικά",
    licenseFeaturesEmpty: "Χωρίς επιπλέον χαρακτηριστικά",
    licenseFeatureReadonlyMode: "Λειτουργία σύνδεσης μόνο ανάγνωσης",
    licenseFeatureReadonlyConnectionsFlag: "Συνδέσεις μόνο ανάγνωσης (--readonly-connections/-r)",
    licenseFeatureSsh: "SSH tunneling",
    licenseFeatureCluster: "Συνδέσεις Cluster",
    licenseFeatureSentinel: "Συνδέσεις Sentinel",
    licenseFeatureReJSON: "ReJSON (JSON data type)",
    keysSort: {
      on: "Ταξινόμηση κλειδιών ενεργή",
      off: "Ταξινόμηση κλειδιών ανενεργή"
    },
    cluster: {
      on: "Cluster ενεργό",
      off: "Cluster ανενεργό"
    },
    sentinel: {
      on: "Sentinel ενεργό",
      off: "Sentinel ανενεργό",
      name: "Όνομα Sentinel"
    },
    readonly: {
      on: "Μόνο ανάγνωση ενεργό",
      off: "Μόνο ανάγνωση ανενεργό"
    },
    proSshOnly: "Το SSH είναι διαθέσιμο σε Pro ή Enterprise.",
    proReadonlyOnly: "Η λειτουργία σύνδεσης μόνο ανάγνωσης είναι διαθέσιμη σε Pro ή Enterprise.",
    enterpriseClusterSentinelOnly: "Τα Cluster και Sentinel είναι διαθέσιμα μόνο σε Enterprise.",
    theme: {
      light: "Φωτεινό",
      dark: "Σκοτεινό enterprise",
      darkNeu: "Σκοτεινό",
      darkoBluo: "Darko bluo",
      enterprise: "Enterprise",
      redis: "Redis",
      matrix: "Matrix"
    },
    connected: opts => {
      return `Συνδεδεμένο: ${opts.name}`;
    },
    tree: "Δέντρο",
    askAuth: "Ζήτηση εξουσιοδότησης",
    keyboardShortcuts: "Συντομεύσεις πληκτρολογίου",
    about: "Σχετικά",
    supportedLanguages: "Υποστηριζόμενες γλώσσες",
    version: "Έκδοση",
    redisVersion: "Έκδοση Redis",
    modules: "Ενότητες",
    shortcutRefresh: "Ανανέωση",
    shortcutSearch: "Εστίαση αναζήτησης",
    shortcutNewKey: "Νέο κλειδί",
    shortcutDisconnect: "Αποσύνδεση",
    themeAuto: "Αυτόματο (σύστημα)",
    shortcutCommandPalette: "Παλέτα εντολών",
    commandPalette: "Παλέτα εντολών",
    noResults: "Κανένα αποτέλεσμα",
    redisCommandsReference: "Εντολές Redis",
    ungrouped: "Χωρίς ομάδα",
    grouped: "Ομαδοποιημένα",
    connectFirst: "Συνδεθείτε πρώτα σε έναν διακομιστή Redis",
    searchLanguage: "Αναζήτηση γλώσσας...",
    exportProgress: "Εξαγωγή κλειδιών...",
    importProgress: "Εισαγωγή κλειδιών...",
    importPreview: "Προεπισκόπηση",
    importOverwrite: "Αντικατάσταση",
    importSkip: "Παράλειψη",
    importConflict: "Αν το κλειδί υπάρχει ήδη:",
    noKeysToExport: "Δεν υπάρχουν κλειδιά για εξαγωγή",
    time: "Χρόνος",
    loading: "Φόρτωση...",
    autoRefresh: "Αυτόματο",
    exportSearchHint: "Εξαγωγή μόνο κλειδιών που ταιριάζουν με την τρέχουσα αναζήτηση",
    importSearchHint: "Η εισαγωγή εφαρμόζεται σε ολόκληρη τη βάση δεδομένων, όχι μόνο στα αποτελέσματα αναζήτησης",
    importNoKeys: "Δεν βρέθηκαν κλειδιά στο αρχείο",
  },
  status: {
    dataCopied: "Τα δεδομένα βρίσκονται στο πρόχειρο",
    licenseSaved: "Η άδεια αποθηκεύτηκε",
    exportDone: "Η εξαγωγή ολοκληρώθηκε",
    indexCreated: "Ευρετήριο δημιουργήθηκε",
    indexDropped: "Ευρετήριο διαγράφηκε",
    importDone: (opts) => `Εισαγωγή ολοκληρώθηκε: ${opts.created} δημιουργήθηκαν, ${opts.skipped} παραλείφθηκαν, ${opts.errors} σφάλματα`,
    nodeRemoved: "Ο κόμβος αφαιρέθηκε",
    keyIsNotExisting: "Αυτό το κλειδί μπορεί να έχει διαγραφεί ή να έχει λήξει.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "Κανένα κλειδί";
      } else if (opts.keyCount === 1) {
        return "1 κλειδί";
      } else {
        return `${opts.keyCount} κλειδιά`;
      }
    },
    treeExpandAll: "Ανάπτυξη όλων των κλαδιών δέντρου. Αυτή η λειτουργία μπορεί να είναι δαπανηρή και μπορεί να πάρει χρόνο ...",
    noRedisKeys: "Δεν υπάρχουν κλειδιά σε αυτή τη βάση δεδομένων.",
    redisConnected: "Επιτυχής σύνδεση στο Redis",
    reloadingDataInfo: "Επαναφόρτωση δεδομένων Redis",
    added: "Προστέθηκε",
    saved: "Ενημερώθηκε",
    cancelled: "Ακυρώθηκε",
    deleted: "Διαγράφηκε",
    savedRedis: "Τα δεδομένα Redis αποθηκεύτηκαν",
    redisDisconnected: opts => {
      return `Η τρέχουσα σύνδεση είχε σφάλμα: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `Ο δείκτης βάσης δεδομένων ορίστηκε σε ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `Το κλειδί δέντρου διαγράφηκε (${opts.key}).`;
    },
    deletedKey: opts => {
      return `Το κλειδί διαγράφηκε (${opts.key}).`;
    },
    renamedKey: "Αυτό το κλειδί μετονομάστηκε",
    ttlChanged: "Το TTL αυτού του κλειδιού άλλαξε",
    notInteger: "Αυτή η είσοδος δεν είναι ακέραιος αριθμός",
    persisted: "Αυτό το κλειδί διατηρείται για πάντα",
    set: "Το κλειδί ορίστηκε/προστέθηκε"
  },
  code: {
    "delete-connection": "Αυτή η σύνδεση διαγράφηκε, οπότε αποσυνδεθήκατε από αυτή την παρουσία Redis.",
    "save-connection": "Αυτή η σύνδεση άλλαξε, οπότε αποσυνδεθήκατε από αυτή την παρουσία Redis. Μπορείτε να επανασυνδεθείτε.",
    "readonly-connections": "Οι λειτουργίες προσθήκης/αποθήκευσης/διαγραφής συνδέσεων είναι μόνο για ανάγνωση!",
    "readonly-connection-mode": "Αυτή η σύνδεση είναι σε λειτουργία μόνο ανάγνωσης!",
    "list-out-of-bounds": "Αυτός ο δείκτης λίστας είναι εκτός ορίων",
    "donation-ware-feature": "Αυτή η δυνατότητα υπάρχει στην έκδοση δωρεάς.",
    "feature-pro-readonly-required": "Η λειτουργία σύνδεσης μόνο ανάγνωσης απαιτεί άδεια Pro ή Enterprise.",
    "feature-pro-ssh-required": "Το SSH tunneling απαιτεί άδεια Pro ή Enterprise.",
    "feature-enterprise-cluster-sentinel-required": "Τα Cluster και Sentinel απαιτούν άδεια Enterprise.",
    "feature-pro-json-binary-required": "Η Επεξεργασία JSON, το Ανέβασμα δυαδικών και η Λήψη δυαδικών απαιτούν άδεια Pro ή Enterprise.",
    "feature-pro-rejson-required": "ReJSON (JSON data type) requires Pro or Enterprise license.",
    "invalid-json-value": "The value is not valid JSON.",
    "http_auth_required": "Απαιτείται εξουσιοδότηση: παρακαλώ πιστοποιηθείτε με HTTP Basic Auth και κάντε επαναφόρτωση.",
    "auto-connection-failed": "Πιθανόν, η σύνδεση αφαιρέθηκε και η αυτόματη σύνδεση απέτυχε εξαιτίας αυτού.",
    invalid_console_command: "Αυτή η εντολή δεν λειτουργεί μέσω του GUI."
  },
  licenseReason: {
    LICENSE_VALID: "Η άδεια είναι έγκυρη",
    LICENSE_INVALID: "Η άδεια δεν είναι έγκυρη",
    LICENSE_MISSING: "Δεν έχει οριστεί κλειδί άδειας",
    LICENSE_DISABLED: "Η άδεια είναι απενεργοποιημένη στις ρυθμίσεις διακομιστή",
    LICENSE_NOT_FOUND: "Η άδεια δεν βρέθηκε",
    LICENSE_EXPIRED: "Η άδεια έχει λήξει",
    LICENSE_CLEARED: "Το κλειδί άδειας καθαρίστηκε",
    LICENSE_MAX_DEVICES_REACHED: "Επιτεύχθηκε ο μέγιστος αριθμός θέσεων συσκευών",
    PRODUCT_MISMATCH: "Το προϊόν της άδειας δεν αντιστοιχεί"
  },
  licenseStatusValue: {
    active: "Ενεργή",
    deleted: "Διαγραμμένη",
    all: "Όλες",
    expired: "Ληγμένη",
    missing: "Απούσα",
    inactive: "Ανενεργή"
  },
  form: {
    error: {
      required: "Υποχρεωτικό",
      port: "Η θύρα πρέπει να είναι μεταξύ 1-65535",
      invalid: "Η φόρμα δεν είναι έγκυρη"
    },
    connection: {
      label: {
        name: "Όνομα",
        group: "Ομάδα",
        host: "Όνομα κεντρικού υπολογιστή",
        port: "Θύρα",
        password: "Κωδικός πρόσβασης",
        username: "Όνομα χρήστη"
      }
    },
    treeSettings: {
      maxValueDisplay: "Μέγιστο μήκος εμφάνισης τιμής",
      maxValueDisplayInfo: "Αν οριστεί σε 0, εμφανίζονται πλήρεις τιμές. Αν είναι μεγαλύτερο του 0, περικόπτεται σε αυτό το μήκος. Αν -1: για συμβολοσειρές, η τιμή κρύβεται μέχρι την επεξεργασία· για άλλους τύπους, εμφανίζεται πλήρες περιεχόμενο.",
      maxKeys: "Μέγιστος αριθμός κλειδιών",
      maxKeysInfo: "Για να μην κρασάρει το GUI, περιορίζουμε τον μέγιστο αριθμό κλειδιών.",
      keyCount: () => {
        return `Αριθμός κλειδιών: ${p3xr.state.keysRaw.length}`;
      },
      label: {
        animation: "Χρήση κίνησης",
        noAnimation: "Χωρίς κίνηση",
        jsonFormatTwoSpace: "Μορφοποίηση JSON με 2 κενά",
        jsonFormatFourSpace: "Μορφοποίηση JSON με 4 κενά",
        formName: "Ρυθμίσεις Redis",
        searchModeClient: "Αναζήτηση στον πελάτη",
        searchModeServer: "Αναζήτηση στον διακομιστή",
        searchModeStartsWith: "Αναζήτηση με αρχίζει με",
        searchModeIncludes: "Αναζήτηση με περιέχει"
      },
      field: {
        treeSeparator: "Διαχωριστής δέντρου",
        treeSeparatorSelector: "Επιλογέας διαχωριστή δέντρου",
        page: "Αριθμός σελιδοποίησης δέντρου",
        keyPageCount: "Αριθμός σελιδοποίησης κλειδιών",
        keysSort: "Ταξινόμηση κλειδιών",
        searchMode: "Λειτουργία αναζήτησης",
        searchModeStartsWith: "Αναζήτηση αρχίζει με / περιέχει"
      },
      error: {
        keyPageCount: "Ο αριθμός σελιδοποίησης κλειδιών πρέπει να είναι ακέραιος μεταξύ 5 - 100",
        page: "Ο αριθμός σελιδοποίησης πρέπει να είναι ακέραιος μεταξύ 10 - 5000",
        maxValueDisplay: "Η μέγιστη τιμή εμφάνισης πρέπει να είναι ακέραιος μεταξύ -1 και 32768",
        maxKeys: "Η μέγιστη τιμή αριθμού κλειδιών πρέπει να είναι ακέραιος μεταξύ 100 και 100000"
      }
    },
    key: {
      label: {
        formName: {
          add: "Προσθήκη νέου κλειδιού Redis",
          edit: "Επεξεργασία κλειδιού Redis",
          append: "Προσθήκη σε υπάρχον κλειδί Redis"
        }
      },
      field: {
        streamTimestamp: "Χρονοσήμανση",
        key: "Κλειδί",
        type: "Τύπος",
        index: "Δείκτης",
        hashKey: "Κλειδί hash",
        score: "Βαθμολογία",
        value: "Τιμή"
      },
      error: {
        streamTimestamp: "Η χρονοσήμανση είναι υποχρεωτική, είτε σε μορφή Redis είτε ως *",
        key: "Το κλειδί πρέπει να έχει τουλάχιστον έναν χαρακτήρα",
        hashKey: "Το κλειδί hash πρέπει να έχει τουλάχιστον έναν χαρακτήρα",
        score: "Η βαθμολογία ταξινομημένου συνόλου είναι υποχρεωτική",
        value: "Η τιμή είναι υποχρεωτική"
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
      title: "Αναζήτηση",
      index: "Ευρετήριο",
      query: "Ερώτημα",
      results: "Αποτελέσματα",
      noIndex: "Δεν βρέθηκαν ευρετήρια",
      createIndex: "Δημιουργία ευρετηρίου",
      dropIndex: "Διαγραφή ευρετηρίου",
      indexInfo: "Πληροφορίες ευρετηρίου",
      indexName: "Όνομα ευρετηρίου",
      prefix: "Πρόθεμα κλειδιού (προαιρετικό)",
      fieldName: "Όνομα πεδίου",
    },
    monitor: {
      title: "Παρακολούθηση",
      memory: "Μνήμη",
      opsPerSec: "Λειτουργίες/δευτ",
      clients: "Πελάτες",
      blocked: "Αποκλεισμένοι",
      hitsMisses: "Ποσοστό επιτυχίας",
      networkIo: "Δίκτυο I/O",
      slowLog: "Αργό αρχείο",
      totalCommands: "Σύνολο",
      expired: "Ληγμένα",
      evicted: "Αποβληθέντα",
      clientList: "Λίστα πελατών",
      topKeys: "Μεγαλύτερα κλειδιά",
      killClient: "Τερματισμός πελάτη",
      clientKilled: "Ο πελάτης τερματίστηκε",
      confirmKillClient: "Είστε σίγουροι ότι θέλετε να τερματίσετε αυτόν τον πελάτη;",
      noKeys: "Χωρίς κλειδιά",
      noClients: "Χωρίς πελάτες",
    },
    overview: {
      noConnected: "Δεν υπάρχει σύνδεση στο Redis.",
      overviewClients: "Λίστα συνδεδεμένων ανά αριθμό πελατών",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "1 πελάτης";
        }
        return `${opt.length} πελάτες`;
      }
    },
    key: {
      label: {
        key: "Κλειδί",
        encoding: "Κωδικοποίηση",
        length: "Μέγεθος",
        ttl: "TTL",
        ttlTitle: "Χρόνος ζωής",
        type: "Τύπος",
        ttlNotExpire: "δεν λήγει",
        lengthString: "bytes",
        lengthItem: "στοιχεία",
        actions: "Ενέργειες"
      },
      list: {
        table: {
          index: "Δείκτης",
          value: "Τιμή"
        }
      },
      hash: {
        table: {
          hashkey: "Κλειδί hash",
          value: "Τιμή"
        }
      },
      set: {
        table: {
          value: "Μέλος"
        }
      },
      zset: {
        table: {
          value: "Μέλος",
          score: "Βαθμολογία"
        }
      },
      stream: {
        table: {
          timestamp: "ID χρονοσήμανσης",
          field: "Πεδίο",
          value: "Τιμή"
        }
      }
    },
    treeControls: {
      settings: "Ρυθμίσεις δέντρου",
      expandAll: "Ανάπτυξη όλων",
      collapseAll: "Σύμπτυξη όλων",
      search: {
        search: "Αναζήτηση στα κλειδιά",
        clear: "Εκκαθάριση τρέχουσας αναζήτησης",
        placeholderClient: "Αναζήτηση στον πελάτη",
        placeholderServer: "Αναζήτηση στον διακομιστή",
        info: "Η αναζήτηση στον πελάτη σημαίνει ότι αντιστοιχίζει το κείμενο στην είσοδο αναζήτησης. Η αναζήτηση στον διακομιστή σημαίνει ότι αναζητά στα μοτίβα κλειδιών ως *{κείμενο-αναζήτησης}*. Για μεγάλα σύνολα αναζήτησης, είναι καλύτερα να χρησιμοποιείτε αναζήτηση στον διακομιστή. Για μικρότερα σύνολα, είναι καλύτερα να χρησιμοποιείτε αναζήτηση στον πελάτη." + ` Αν ο αριθμός κλειδιών ξεπερνά τα ${p3xr.settings.maxLightKeysCount}, μπορείτε να αναζητήσετε μόνο στον διακομιστή.`,
        largeSetInfo: "Σε μεγάλο σύνολο, η αναζήτηση στον πελάτη είναι απενεργοποιημένη. Αυτή τη στιγμή είναι δυνατή μόνο η αναζήτηση στον διακομιστή.",
        infoDetails: "Για να μάθετε πώς λειτουργεί η αναζήτηση, ελέγξτε τις ρυθμίσεις"
      },
      pager: {
        next: "Επόμενο",
        prev: "Προηγούμενο",
        first: "Πρώτο",
        last: "Τελευταίο"
      }
    }
  },
  time: {
    loading: "Φόρτωση...",
    years: "χρόνια",
    months: "μήνες",
    days: "ημέρες",
    year: "χρόνος",
    month: "μήνας",
    day: "ημέρα"
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
