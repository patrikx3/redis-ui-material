const strings = {
  error: {
    server_error: "Erreur du serveur, veuillez réessayer"
  },
  title: {
    donate: "Don",
    jsonRecursive: "Expansion de toutes les feuilles",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "Vous pouvez choisir une connexion Redis depuis le menu en bas à gauche.",
    statistics: "Statistiques",
    error: "Erreur",
    connectingRedis: "Connexion à Redis ...",
    socketioConnectError: "Erreur Socket.IO",
    db: "DB",
    server: "Serveur",
    clients: "Clients",
    memory: "Mémoire",
    persistence: "Persistance",
    stats: "Statistiques",
    replication: "Réplication",
    cpu: "CPU",
    cluster: "Cluster",
    modules: "Modules",
    errorstats: "Statistiques d'erreurs",
    commandstats: "Statistiques de commandes",
    latencystats: "Statistiques de latence",
    keysizes: "Tailles des clés",
    threads: "Fils d'exécution",
  },
  confirm: {
    dropIndex: "Voulez-vous vraiment supprimer cet index ?",
    uploadBuffer: "Êtes-vous sûr de vouloir télécharger ces données binaires ?",
    uploadBufferDone: "Les données binaires ont été téléchargées",
    uploadBufferDoneAndSave: "Les données binaires ont été téléchargées et enregistrées sur le serveur",
    title: "Confirmer",
    alert: "Alerte",
    info: "Info",
    deleteListItem: "Êtes-vous sûr de vouloir supprimer cet élément de la liste ?",
    deleteHashKey: "Êtes-vous sûr de vouloir supprimer cette clé hash ?",
    deleteStreamTimestamp: "Êtes-vous sûr de vouloir supprimer cet horodatage du flux ?",
    deleteSetMember: "Êtes-vous sûr de vouloir supprimer ce membre de l'ensemble ?",
    deleteZSetMember: "Êtes-vous sûr de vouloir supprimer ce membre de l'ensemble trié ?",
    deleteConnection: "Confirmer",
    deleteConnectionText: "Êtes-vous sûr de vouloir supprimer cette connexion Redis ?",
    deleteNode: "Êtes-vous sûr de vouloir supprimer ce nœud Redis ?",
    delete: "Supprimer ?",
    deleteAllKeys: opts => {
      return `Supprimer cet arbre et toutes ses clés (${opts.key}) ?`;
    },
    deleteSearchKeys: opts => {
      return `Êtes-vous sûr de vouloir supprimer toutes les clés correspondant à "${opts.pattern}" ? ${opts.count} clés trouvées.`;
    },
    socketioConnectError: "Socket.IO ne peut pas se connecter au serveur. Vous pouvez recharger et essayer de résoudre l'erreur de connexion vous-même, le client ne sait pas comment la résoudre seul.",
    socketioAuthRequired: "Autorisation Socket.IO requise. Veuillez vous authentifier avec HTTP Basic Auth (nom d'utilisateur/mot de passe) et recharger.",
    deleteKey: "Êtes-vous sûr de vouloir supprimer cette clé ?",
    rename: {
      title: "Êtes-vous sûr de vouloir renommer cette clé ?",
      textContent: "Cette action renomme la clé de manière permanente.",
      placeholder: "La clé Redis (obligatoire)"
    },
    ttl: {
      title: "Êtes-vous sûr de vouloir modifier le TTL de cette clé ?",
      textContent: "La modification du TTL met à jour la durée de vie de cette clé. Laissez vide pour conserver cette clé indéfiniment.",
      placeholder: "Le TTL de la clé Redis (entier ou vide)",
      placeholderPlaceholder: "Vide signifie qu'elle persiste indéfiniment ; sinon entrez un entier.",
      convertTextToTime: "Convertir le texte en temps",
      convertTextToTimePlaceholder: "Ex. 1d donnera 86400"
    },
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
    copy: "Copier",
    downloadBuffer: "Télécharger le binaire",
    setBuffer: "Télécharger le binaire",
    exportKeys: "Exporter les clés",
    exportAllKeys: (opts) => `Exporter les ${opts.count} clés`,
    exportSearchResults: (opts) => `Exporter ${opts.count} résultats`,
    deleteAllKeysMenu: (opts) => `Supprimer tout ${opts.count}`,
    importKeys: "Importer les clés",
    deleteSearchKeys: (opts) => `Supprimer ${opts.count} clés correspondantes`,
    saveWithFormatJson: "Enregistrer avec formatage",
    formatJson: "Formater Json",
    wrap: "Retour à la ligne",
    unwrap: "Sans retour à la ligne",
    downloadJson: "Télécharger JSON",
    pubsubMonitor: "PubSub",
    pulse: "Pulse",
    profiler: "Profiler",
    memoryAnalysis: "Analysis",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "Langue / Language",
    ok: "OK",
    addKey: "Ajouter à cette clé",
    addKeyRoot: "Ajouter une clé racine",
    reloadKey: "Recharger la clé",
    reload: "Recharger",
    close: "Fermer",
    commands: "Commandes",
    view: "Affichage",
    statistics: "Statistiques",
    refresh: "Actualiser",
    pause: "Pause",
    resume: "Reprendre",
    clear: "Effacer",
    rename: "Renommer",
    main: "Base de données",
    cancel: "Annuler",
    theme: "Thème",
    github: "GitHub",
    githubRepo: "Dépôt",
    githubRelease: "Versions",
    githubChangelog: "Journal des modifications",
    info: "Info",
    settings: "Paramètres",
    connect: "Connecter",
    disconnect: "Déconnecter",
    overview: "Vue d'ensemble",
    console: "Console",
    noConnections: "Aucune connexion, ajoutez une connexion dans le menu des paramètres.",
    noConnectionsInSettings: "Aucune connexion, vous pouvez ajouter une NOUVELLE CONNEXION ci-dessus.",
    connectionAdd: "Nouvelle connexion",
    addGroup: "Ajouter un groupe",
    extend: "Développer",
    collapse: "Réduire",
    add: "Ajouter",
    edit: "Modifier",
    save: "Enregistrer",
    ttl: "Définir le TTL",
    delete: "Supprimer",
    remove: "Retirer",
    areYouSure: "Êtes-vous sûr ?",
    sure: "Confirmer",
    testConnection: "Tester la connexion",
    getKey: "Chargement de la clé Redis et des données associées ...",
    jsonViewShow: "Afficher JSON",
    jsonViewEditor: "Modifier JSON",
    quickConsole: "Console rapide",
  },
  label: {
    id: {
      nodeId: 'ID du nœud',
      id: "ID de connexion",
      info: "Si vous ne souhaitez pas modifier les propriétés : sshPassword, sshPrivateKey, password, tlsCrt, tlsKey, tlsCa, veuillez entrer l'ID de la connexion dans ces propriétés pour conserver les valeurs intactes. Si vous souhaitez la même logique pour le mot de passe du nœud, entrez l'ID du nœud dans le mot de passe du nœud."
    },
    secureFeature: 'Si vous voyez une valeur qui commence par P3X et qui semble identique, c\'est une fonctionnalité de sécurité. Pour modifier les paramètres, remplacez simplement ces paramètres par une valeur vide ou autre chose et ils seront enregistrés. Si vous ne modifiez pas les paramètres, ils seront conservés tels quels sur le serveur.',
    aiTranslating: "Traduction...",
    aiSettings: "Paramètres IA",
    aiGroqApiKey: "Clé API Groq",
    aiGroqApiKeyInfo: "Optionnel. Votre propre clé API Groq pour de meilleures performances. Obtenez une clé gratuite sur",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "Clé API IA enregistrée",
    aiGroqApiKeyInvalid: "Clé API Groq invalide",
    aiGroqApiKeyNotSet: "Non défini (par défaut du serveur)",
    aiEnabled: "IA activée",
    aiEnabledYes: "Oui",
    aiEnabledNo: "Non",
    aiRouteViaNetwork: "Route via network.corifeus.com",
    aiRoutingDirect: "Les requêtes vont directement à Groq avec votre propre clé API, sans passer par network.corifeus.com.",
    aiRoutingNetwork: "Les requêtes IA sont acheminées via network.corifeus.com. Si vous avez votre propre clé API Groq gratuite, vous pouvez désactiver ce commutateur.",
    ssh: {
      on: 'SSH activé',
      off: 'SSH désactivé',
      sshHost: 'SSH Host',
      sshPort: 'Port SSH',
      sshUsername: 'Nom d\'utilisateur SSH',
      sshPassword: 'Mot de passe SSH',
      sshPrivateKey: 'Clé privée SSH'
    },
    isBuffer: opts => `[object ArrayBuffer] signifie que la valeur est des données binaires ou que la valeur est supérieure à ${opts.maxValueAsBuffer}`,
    streamValue: `Le champ et la valeur du flux sont sur une seule ligne. Ex. : field1 value1 "field 2" "value 2"`,
    streamTimestampId: `'*' signifie généré automatiquement ou la spécification en <millisecondsTime>-<sequenceNumber>`,
    unableToLoadKey: ({
      key
    }) => {
      return `Impossible de charger cette clé : ${key}. Il est possible que la clé ait été supprimée. L'erreur exacte se trouve dans la console.`;
    },
    bigJson: "Cet objet JSON dépasse 10 ko, assurez-vous donc de savoir ce que vous faites, car certaines fonctions peuvent rendre l'affichage lent.",
    addNode: "Ajouter un nœud",
    validateJson: "Valider JSON",
    reducedFunction: `Fonctionnalité réduite`,
    tooManyKeys: opts => {
      return `Pour les fonctions maximales complètes, le nombre total de clés autorisées est ${opts.maxLightKeysCount}. Cette base de données dépasse le nombre de clés autorisées : ${opts.count}. Le tri des clés et les informations supplémentaires de l'arbre sont désactivés. La recherche s'effectue uniquement côté serveur au lieu du client.`;
    },
    redisCommandNotFound: "Aucune correspondance de commande Redis trouvée ...",
    treeKeyStore: `Le tri (comparaison naturelle) est exécuté côté client, c'est-à-dire le navigateur, ce qui signifie qu'il y a une pénalité pour les grands ensembles, comme plus de 10k clés, cela peut ajouter un peu de temps au rendu de la page. Il n'y a pas de tri des clés dans Redis, seulement de cette manière.`,
    socketIoTimeout: options => {
      return `Socket.IO a expiré pour cette requête (max ${options.timeout / 1000} secondes) ...`;
    },
    resizerInfo: options => {
      return `La largeur minimale du panneau gauche ou droit est de ${options.width}px`;
    },
    jsonViewNotParsable: "Cette valeur n'est pas analysable en JSON  ",
    ttlTitle: "Définir le TTL en secondes",
    passwordSecure: "Le mot de passe peut être vide, mais il affichera quand même des caractères, c'est une fonctionnalité de sécurité.",
    tlsWithoutCert: "Activer TLS sans certificat supplémentaire",
    tlsRejectUnauthorized: "Rejeter le certificat non autorisé",
    tlsSecure: "Si vous voyez une configuration TLS qui commence par P3X ou si tous les paramètres TLS se ressemblent, c'est une fonctionnalité de sécurité. Pour modifier les paramètres, remplacez simplement ces paramètres par une valeur vide ou autre chose et ils seront enregistrés. Si vous ne modifiez pas les paramètres TLS, ils seront conservés tels quels sur le serveur.",
    treeSeparatorEmpty: "Si le séparateur d'arbre est vide, l'arbre n'aura pas de nœuds imbriqués, juste une liste simple",
    treeSeparatorEmptyNote: "Pas de nœuds imbriqués, juste une liste simple",
    welcomeConsole: "Bienvenue dans la console Redis",
    welcomeConsoleInfo: "L'historique avec les flèches HAUT ou BAS est activé",
    redisListIndexInfo: "Vide pour ajouter à la fin, -1 pour ajouter au début ou enregistrer à la position affichée.",
    console: "Console",
    connectiondAdd: "Ajouter une connexion",
    connectiondEdit: "Modifier une connexion",
    connectiondView: "Voir la connexion",
    connections: "Connexions",
    keysSort: {
      on: "Tri des clés activé",
      off: "Tri des clés désactivé"
    },
    cluster: {
      on: "Cluster activé",
      off: "Cluster désactivé"
    },
    sentinel: {
      on: "Sentinel activé",
      off: "Sentinel désactivé",
      name: "Nom Sentinel"
    },
    readonly: {
      on: "Lecture seule activée",
      off: "Lecture seule désactivée"
    },
    theme: {
      light: "Clair",
      dark: "Sombre enterprise",
      darkNeu: "Sombre",
      darkoBluo: "Darko bluo",
      enterprise: "Enterprise",
      redis: "Redis",
      matrix: "Matrix"
    },
    connected: opts => {
      return `Connecté : ${opts.name}`;
    },
    tree: "Arbre",
    askAuth: "Demander l'autorisation",
    keyboardShortcuts: "Raccourcis clavier",
    about: "À propos",
    supportedLanguages: "Langues prises en charge",
    version: "Version",
    redisVersion: "Version de Redis",
    modules: "Modules",
    shortcutRefresh: "Actualiser",
    shortcutSearch: "Cibler la recherche",
    shortcutNewKey: "Nouvelle clé",
    shortcutDisconnect: "Déconnecter",
    themeAuto: "Automatique (système)",
    languageAuto: "Automatique (système)",
    shortcutCommandPalette: "Palette de commandes",
    commandPalette: "Palette de commandes",
    noResults: "Aucun résultat",
    redisCommandsReference: "Commandes Redis",
    ungrouped: "Sans groupe",
    grouped: "Groupés",
    connectFirst: "Connectez-vous d'abord à un serveur Redis",
    searchLanguage: "Rechercher une langue...",
    exportProgress: "Exportation des clés...",
    importProgress: "Importation des clés...",
    importPreview: "Aperçu",
    importOverwrite: "Écraser",
    importSkip: "Ignorer",
    importConflict: "Si la clé existe déjà :",
    noKeysToExport: "Aucune clé à exporter",
    time: "Temps",
    type: "Type",
    format: "Format",
    loading: "Chargement...",
    autoRefresh: "Auto",
    exportSearchHint: "Exportation uniquement des clés correspondant à la recherche en cours",
    importSearchHint: "L'importation s'applique à toute la base de données, pas seulement aux résultats de recherche",
    deleteSearchHint: "Supprimer toutes les clés correspondant à la recherche actuelle",
    deletingSearchKeys: "Suppression des clés correspondantes...",
    importNoKeys: "Aucune clé trouvée dans le fichier",
    desktopNotifications: "Notifications du bureau",
    desktopNotificationsEnabled: "Activer les notifications du bureau",
    desktopNotificationsInfo: "Recevez des notifications du système lors des déconnexions et reconnexions Redis quand l'application n'est pas au premier plan.",
  },
  status: {
    dataCopied: "Les données sont dans le presse-papiers",
    exportDone: "Exportation terminée",
    deletedSearchKeys: (opts) => `${opts.count} clés supprimées`,
    indexCreated: "Index créé",
    indexDropped: "Index supprimé",
    importDone: (opts) => `Importation terminée : ${opts.created} créés, ${opts.skipped} ignorés, ${opts.errors} erreurs`,
    nodeRemoved: "Nœud supprimé",
    keyIsNotExisting: "Cette clé a peut-être été supprimée ou a expiré.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "Aucune clé";
      } else if (opts.keyCount === 1) {
        return "1 clé";
      } else {
        return `${opts.keyCount} clés`;
      }
    },
    treeExpandAll: "Développer toutes les feuilles de l'arbre. Cette opération peut être coûteuse et prendre du temps ...",
    noRedisKeys: "Il n'y a aucune clé dans cette base de données.",
    redisConnected: "Connexion à Redis réussie",
    reloadingDataInfo: "Rechargement des données Redis",
    added: "Ajouté",
    saved: "Mis à jour",
    cancelled: "Annulé",
    deleted: "Supprimé",
    savedRedis: "Les données Redis sont enregistrées",
    redisDisconnected: opts => {
      return `La connexion actuelle a rencontré une erreur : ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `L'index de la base de données est défini à ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `La clé de l'arbre a été supprimée (${opts.key}).`;
    },
    deletedKey: opts => {
      return `La clé a été supprimée (${opts.key}).`;
    },
    renamedKey: "Cette clé a été renommée",
    ttlChanged: "Le TTL de cette clé a été modifié",
    notInteger: "Cette entrée n'est pas un nombre entier",
    persisted: "Cette clé est conservée indéfiniment",
    set: "La clé est définie/ajoutée",
    connectionRestored: "Connexion rétablie",
  },
  code: {
    "delete-connection": "Cette connexion a été supprimée, vous êtes donc déconnecté de cette instance Redis.",
    "save-connection": "Cette connexion a été modifiée, vous êtes donc déconnecté de cette instance Redis. Vous pouvez vous reconnecter.",
    "readonly-connections": "Les opérations d'ajout/enregistrement/suppression de connexions sont en lecture seule !",
    "readonly-connection-mode": "Cette connexion est en mode lecture seule !",
    "list-out-of-bounds": "Cet index de liste est hors limites",
    "invalid-json-value": "The value is not valid JSON.",
    "http_auth_required": "Autorisation requise : veuillez vous authentifier avec HTTP Basic Auth et recharger.",
    "auto-connection-failed": "Il est possible que la connexion ait été supprimée et que la connexion automatique ait échoué à cause de cela.",
    invalid_console_command: "Cette commande ne fonctionne pas via le GUI."
  },
  form: {
    error: {
      required: "Obligatoire",
      port: "Le port doit être entre 1-65535",
      invalid: "Le formulaire n'est pas valide"
    },
    connection: {
      label: {
        name: "Nom",
        group: "Groupe",
        host: "Nom d'hôte",
        port: "Port",
        password: "Mot de passe",
        username: "Nom d'utilisateur"
      }
    },
    treeSettings: {
      maxValueDisplay: "Longueur maximale d'affichage de la valeur",
      maxValueDisplayInfo: "Si défini à 0, affiche les valeurs complètes. Si supérieur à 0, tronque à cette longueur. Si -1 : pour les chaînes, masque la valeur jusqu'à la modification ; pour les autres types, affiche le contenu complet.",
      maxKeys: "Nombre maximum de clés",
      maxKeysInfo: "Pour éviter que le GUI ne plante, nous limitons le nombre maximum de clés.",
      keyCount: (opts) => {
        return `Nombre de clés : ${opts?.keyCount ?? 0}`;
      },
      label: {
        animation: "Utiliser l'animation",
        noAnimation: "Pas d'animation",
        jsonFormatTwoSpace: "Formater JSON avec 2 espaces",
        jsonFormatFourSpace: "Formater JSON avec 4 espaces",
        formName: "Paramètres Redis",
        searchModeClient: "Mode recherche côté client",
        searchModeServer: "Mode recherche côté serveur",
        searchModeStartsWith: "Recherche avec mode commence par",
        searchModeIncludes: "Mode recherche inclut"
      },
      field: {
        treeSeparator: "Séparateur d'arbre",
        treeSeparatorSelector: "Sélecteur de séparateur d'arbre",
        page: "Nombre de pagination de l'arbre",
        keyPageCount: "Nombre de pagination des clés",
        keysSort: "Trier les clés",
        searchMode: "Mode de recherche",
        searchModeStartsWith: "Recherche commence par / inclut"
      },
      error: {
        keyPageCount: "Le nombre de pagination des clés doit être un entier entre 5 - 100",
        page: "Le nombre de pagination doit être un entier entre 10 - 5000",
        maxValueDisplay: "La valeur maximale d'affichage doit être un entier entre -1 et 32768",
        maxKeys: "Le nombre maximum de clés doit être un entier entre 100 et 100000"
      }
    },
    key: {
      label: {
        formName: {
          add: "Ajouter une nouvelle clé Redis",
          edit: "Modifier la clé Redis",
          append: "Ajouter à une clé Redis existante"
        }
      },
      field: {
        streamTimestamp: "Horodatage",
        key: "Clé",
        type: "Type",
        index: "Index",
        hashKey: "Clé hash",
        score: "Score",
        value: "Valeur"
      },
      error: {
        streamTimestamp: "L'horodatage est obligatoire, soit au format Redis soit en tant que *",
        key: "La clé doit comporter au moins un caractère",
        hashKey: "La clé hash doit comporter au moins un caractère",
        score: "Le score de l'ensemble trié est obligatoire",
        value: "La valeur est obligatoire"
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
      title: "Recherche",
      index: "Index",
      query: "Requête",
      results: "Résultats",
      noIndex: "Aucun index trouvé",
      createIndex: "Créer un index",
      dropIndex: "Supprimer l'index",
      indexInfo: "Info index",
      indexName: "Nom de l'index",
      prefix: "Préfixe de clé (optionnel)",
      fieldName: "Nom du champ",
    },
    monitor: {
      title: "Surveillance",
      memory: "Mémoire",
      opsPerSec: "Ops/sec",
      clients: "Clients",
      blocked: "Bloqués",
      hitsMisses: "Taux de succès",
      networkIo: "Réseau I/O",
      slowLog: "Journal lent",
      totalCommands: "Total",
      expired: "Expirées",
      evicted: "Évincées",
      clientList: "Liste des clients",
      topKeys: "Plus grandes clés par mémoire",
      killClient: "Tuer le client",
      clientKilled: "Client tué",
      confirmKillClient: "Voulez-vous vraiment terminer ce client ?",
      noKeys: "Aucune clé",
      rss: "RSS",
      peak: "Maximum",
      fragmentation: "Fragmentation",
      hitsAndMisses: "Succès / Échecs",
      noClients: "Aucun client",
    },
    analysis: {
      title: "Analyse Mémoire",
      runAnalysis: "Lancer l'analyse",
      running: "Analyse en cours...",
      typeDistribution: "Distribution des Types",
      prefixMemory: "Mémoire par Préfixe",
      topKeysByMemory: "Plus Grandes Clés par Mémoire",
      expirationOverview: "Expiration des Clés",
      memoryBreakdown: "Répartition Mémoire",
      keysScanned: "Clés Analysées",
      totalMemory: "Mémoire Totale",
      rssMemory: "Mémoire RSS",
      peakMemory: "Mémoire Maximale",
      luaMemory: "Mémoire Lua",
      overheadMemory: "Surcharge",
      datasetMemory: "Jeu de Données",
      fragmentation: "Fragmentation",
      allocator: "Allocateur",
      withTTL: "Avec TTL",
      persistent: "Persistantes",
      avgTTL: "TTL Moyen",
      prefix: "Préfixe",
      keyCount: "Nombre de Clés",
      memoryUsage: "Utilisation Mémoire",
      noPrefix: "(sans préfixe)",
      topN: "Top N",
      maxScanKeys: "Max. Clés Analysées",
      type: "Type",
      noData: "Aucune donnée. Cliquez sur Lancer l'analyse pour commencer.",
      exportAll: "Tout Exporter",
    },

    overview: {
      noConnected: "Il n'y a pas de connexion à Redis.",
      overviewClients: "Liste des connectés par nombre de clients",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "1 client";
        }
        return `${opt.length} clients`;
      }
    },
    key: {
      label: {
        key: "Clé",
        encoding: "Encodage",
        compression: "Compression",
        aiRateLimited: "Limite de requêtes AI atteinte. Réessayez plus tard ou utilisez votre propre clé API Groq dans les Paramètres.",
        aiError: "La requête AI a échoué",
        length: "Taille",
        ttl: "TTL",
        ttlTitle: "Durée de vie",
        type: "Type",
        ttlNotExpire: "n'expire pas",
        lengthString: "octets",
        lengthItem: "éléments",
        actions: "Actions"
      },
      list: {
        table: {
          index: "Index",
          value: "Valeur"
        }
      },
      hash: {
        table: {
          hashkey: "Clé hash",
          value: "Valeur"
        }
      },
      set: {
        table: {
          value: "Membre"
        }
      },
      zset: {
        table: {
          value: "Membre",
          score: "Score"
        }
      },
      stream: {
        table: {
          timestamp: "ID d'horodatage",
          field: "Champ",
          value: "Valeur"
        }
      },
      timeseries: {
        chart: "Graphique",
        info: "Info",
        addPoint: "Ajouter un point",
        from: "De (ms ou -)",
        to: "À (ms ou +)",
        aggregation: "Agrégation",
        timeBucket: "Bucket (ms)",
        none: "Aucun",
        dataPoints: "points de données",
        labels: "Étiquettes",
        rules: "Règles",
        retention: "Rétention",
        timestamp: "Horodatage",
        value: "Valeur",
        retentionHint: "0 = pas d'expiration, ou millisecondes",
        duplicatePolicy: "Politique de doublons",
        labelsHint: "clé1 valeur1 clé2 valeur2",
        timestampHint: "'*' signifie généré automatiquement, ou horodatage en millisecondes",
        editAllHint: "Un point de données par ligne : horodatage valeur (l'horodatage peut être * pour automatique)",
        autoSpread: "Intervalle de diffusion automatique *",
        formula: "Formule",
        formulaLinear: "Linéaire",
        formulaRandom: "Aléatoire",
        formulaSawtooth: "Dent de scie",
        formulaPoints: "Points",
        formulaAmplitude: "Amplitude",
        formulaOffset: "Décalage",
        generate: "Générer",
        exportChart: "Exporter PNG",
        overlay: "Superposer les clés",
        overlayHint: "Clés séparées par des virgules",
        mrangeFilter: "Filtre d'étiquettes",
        bulkMode: "Génération en masse",
        mrangeHint: "ex. sensor=temp"
      }
    },
    treeControls: {
      settings: "Paramètres de l'arbre",
      expandAll: "Tout développer",
      collapseAll: "Tout réduire",
      level: "Niveau",
      search: {
        search: "Rechercher dans les clés",
        clear: "Effacer la recherche actuelle",
        placeholderClient: "Recherche côté client",
        placeholderServer: "Recherche côté serveur",
        info: (opts) => "La recherche côté client signifie qu'elle correspond au texte dans le champ de recherche. La recherche côté serveur signifie qu'elle recherche dans les modèles de clés comme *{texte-de-recherche}*. Pour les grands ensembles de recherche, il est préférable d'utiliser la recherche côté serveur. Pour les ensembles plus petits, il est préférable d'utiliser la recherche côté client." + ` Si le nombre de clés dépasse ${opts?.maxLightKeysCount ?? 110000}, vous ne pouvez rechercher que côté serveur.`,
        largeSetInfo: "Dans un grand ensemble, la recherche côté client est désactivée, donc seule la recherche côté serveur est actuellement possible.",
        infoDetails: "Pour savoir comment la recherche fonctionne, veuillez consulter les paramètres"
      },
      pager: {
        next: "Suivant",
        prev: "Précédent",
        first: "Premier",
        last: "Dernier"
      }
    }
  },
  time: {
    type: "Type",
    format: "Format",
    loading: "Chargement...",
    years: "ans",
    months: "mois",
    days: "jours",
    year: "an",
    month: "mois",
    day: "jour",
    second: "seconde",
    seconds: "secondes",
    minute: "minute",
    minutes: "minutes",
    hour: "heure",
    hours: "heures"
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
