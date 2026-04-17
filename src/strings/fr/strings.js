const strings = {
  error: {
    server_error: "Erreur du serveur, veuillez réessayer",
    aiPromptTooLong: "Le prompt AI est trop long (max. 4096 caractères)",
  },
  title: {
    donate: "Don",
    donateTitle: "Soutenez P3X Redis UI",
    donateDescription: "P3X Redis UI est un projet gratuit et open source. Les coûts de maintenance de l'application, des fonctionnalités IA, des images Docker, des serveurs et de l'infrastructure proviennent de la poche du développeur. Si vous trouvez cet outil utile, veuillez envisager de soutenir son développement continu par un don. Chaque contribution aide à maintenir le projet en vie et en croissance. Merci !",
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
    threads: "Fils d'exécution"
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
    invalidCredentials: "Nom d'utilisateur ou mot de passe invalide.",
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
    logout: "Déconnexion",
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
    fieldTtl: "TTL du champ",
    digest: "Résumé",
    delete: "Supprimer",
    remove: "Retirer",
    areYouSure: "Êtes-vous sûr ?",
    sure: "Confirmer",
    testConnection: "Tester la connexion",
    getKey: "Chargement de la clé Redis et des données associées ...",
    jsonViewShow: "Afficher JSON",
    jsonViewEditor: "Modifier JSON",
    quickConsole: "Console rapide",
    moveUp: "Monter",
    moveDown: "Descendre",
  },
  diff: {
    reviewChanges: "V\u00e9rifier les modifications",
    inline: "En ligne",
    sideBySide: "C\u00f4te \u00e0 c\u00f4te",
    additions: "ajouts",
    deletions: "suppressions",
    unchangedLines: "lignes inchang\u00e9es",
    noChanges: "Aucune modification d\u00e9tect\u00e9e",
    before: "Avant",
    after: "Apr\u00e8s",
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
    aiRouteViaNetwork: "Acheminement via network.corifeus.com",
    aiRoutingDirect: "Les requêtes vont directement à Groq avec votre propre clé API, sans passer par network.corifeus.com.",
    aiRoutingNetwork: "Les requêtes IA sont acheminées via network.corifeus.com. Si vous avez votre propre clé API Groq gratuite, vous pouvez désactiver ce commutateur.",
    aiMaxTokens: "Nombre maximal de jetons IA",
    aiMaxTokensInfo: "Nombre maximal de jetons pour les réponses de l'IA. Des valeurs plus élevées permettent des réponses plus longues mais peuvent consommer plus de crédits API.",
    consoleDrawer: {
      toggleTooltip: "Basculer la console",
      clearTooltip: "Effacer le défilement",
      closeTooltip: "Fermer la console",
      aiSettingsTooltip: "Paramètres AI",
      modeRedis: "REDIS",
      modeAi: "AI",
      connectionChipNoDb: opts => `${opts.name}`,
      connectionChipWithDb: opts => `${opts.name} · db ${opts.db}`,
      pageChip: opts => `page : ${opts.page}`,
      connectingTo: opts => `Connexion à ${opts.name}…`,
      connectedTo: opts => `Connecté à ${opts.name} (Redis ${opts.version} ${opts.mode}, ${opts.modules} modules chargés)`,
      connectedToNoInfo: opts => `Connecté à ${opts.name}`,
      disconnectedFrom: opts => `Déconnecté de ${opts.name}`,
      readyIndicator: "Prêt."
    },
    cheatsheet: {
      title: "AI Aide-mémoire — Que puis-je demander ?",
      subtitle: "Cliquez sur n’importe quelle invite pour la coller dans la console. Appuyez ensuite sur Entrée.",
      searchPlaceholder: "Filtrer les invites…",
      openOfficialDocs: "Redis Commandes ↗",
      openOfficialDocsTooltip: "Ouvrez la référence officielle des commandes Redis sur redis.io",
      closeTooltip: "Fermer (Échap)",
      empty: "Aucune invite ne correspond à votre filtre.",
      footerHint: "Astuce : tapez « ai: » suivi de n'importe quoi dans n'importe quelle langue — le AI comprend 54 langues et utilise l'état Redis en direct si nécessaire.",
      groups: {
        diagnostics: {
          name: "Diagnostic en direct",
          description: "Demandez au AI d'enquêter sur l'état du serveur en direct via des outils sécurisés en lecture seule.",
          prompts: [
            "pourquoi la mémoire est-elle élevée ?",
            "montre-moi les 10 requêtes les plus lentes",
            "quels clients sont connectés ?",
            "quelle est la politique de mémoire maximale ?",
            "y a-t-il eu des expulsions récentes ?",
            "y a-t-il un événement de latence ?",
            "depuis combien de temps le serveur est-il opérationnel ?",
            "quel est le taux de réussite ?",
            "afficher l'utilisation du processeur",
            "résumer l'espace de clés",
            "Quelle quantité de mémoire chaque type de données utilise-t-il ?",
            "est-ce que quelque chose bloque le serveur en ce moment ?"
          ]
        },
        keys: {
          name: "Clés",
          description: "Inspectez, trouvez et raisonnez sur les clés sans cliquer dans l'arborescence.",
          prompts: [
            "trouver toutes les clés correspondant à user:*",
            "combien de clés dans chaque base de données ?",
            "afficher le plus gros hachage dans ce db",
            "trouver des clés avec un TTL inférieur à 60 secondes",
            "quelles clés n'ont pas de TTL ?",
            "de quel type est la clé session:abc ?",
            "estimer la mémoire utilisée par le préfixe \"session:\"",
            "afficher l'encodage d'objet de la clé user:42",
            "Y a-t-il des clés sur le point d'expirer ?",
            "quel espace de noms utilise le plus de mémoire ?"
          ]
        },
        dataTypes: {
          name: "Types de données",
          description: "Phrase en langage naturel pour créer/lire/mettre à jour sur chaque type Redis.",
          prompts: [
            "créez un hachage nommé user:1 avec les champs name=Alice age=30",
            "ajoutez trois éléments à la liste tasks",
            "ajouter des membres pour définir favourites",
            "ajouter des membres notés à l'ensemble trié leaderboard",
            "ajouter un événement pour diffuser events",
            "obtenir les 10 dernières entrées du flux events",
            "obtenir tous les champs de l'utilisateur de hachage : 1",
            "obtenir les membres de l'ensemble favourites",
            "Obtenez le top 10 par score de leaderboard"
          ]
        },
        modules: {
          name: "Modules",
          description: "Requêtes pour les modules Redis chargés (les catégories ci-dessous apparaissent uniquement lorsque le module est présent).",
          prompts: []
        },
        json: {
          name: "RedisJSON",
          description: "Disponible lorsque le module ReJSON est chargé.",
          prompts: [
            "créez un document JSON à user:42 avec { nom : \"Alice\", âge : 30 }",
            "lire le champ de nom de user:42",
            "mettre à jour l'âge de user:42 à 31 ans",
            "lister toutes les clés JSON",
            "supprimer un champ d'un document JSON",
            "obtenir un champ imbriqué en utilisant JSONPath"
          ]
        },
        search: {
          name: "RediSearch",
          description: "Disponible lorsque le module de recherche est chargé.",
          prompts: [
            "lister tous les index de texte intégral",
            "lancez une recherche en texte intégral pour \"redis\" sur l'index idx:products",
            "créer un index basé sur un hachage avec les champs titre (TEXT) et prix (NUMERIC)",
            "obtenir des informations sur l'index idx:products",
            "indice de chute idx:products",
            "trouver des documents dont le prix est compris entre 10 et 50",
            "rédiger une recherche hybride combinant similarité de texte et de vecteur"
          ]
        },
        timeseries: {
          name: "RedisTimeSeries",
          description: "Disponible lorsque le module timeseries est chargé.",
          prompts: [
            "lister toutes les clés de séries temporelles",
            "ajouter un point de données à temp:room1",
            "obtenez la gamme de temp:room1 d'hier à maintenant",
            "obtenez plusieurs gammes par étiquette sensor=temp",
            "générer 100 points de données sinusoïdales pour temp:room1",
            "afficher la rétention et les étiquettes pour temp:room1"
          ]
        },
        bloom: {
          name: "RedisBloom (Fleur / Coucou / Top-K / CMS / T-Digest)",
          description: "Disponible lorsque le module bf est chargé.",
          prompts: [
            "vérifier si l'article foo existe dans le filtre bloom spam:ips",
            "ajouter des éléments au filtre bloom spam:ips",
            "créer un top-K nommé popular avec K=10",
            "requête count-min sketch traffic pour la clé /home",
            "ajoutez des valeurs à t-digest et obtenez le 95e centile",
            "Afficher les informations sur le filtre Bloom spam:ips"
          ]
        },
        vectorSet: {
          name: "VectorSet (Redis 8+)",
          description: "Disponible lorsque Redis 8+ est détecté (type VECTORSET natif).",
          prompts: [
            "ajouter un vecteur à embeddings",
            "trouver les 10 vecteurs les plus similaires à un vecteur de requête",
            "afficher les dimensions et le nombre de vecteurs embeddings",
            "supprimer un élément du vectorset embeddings",
            "recherche par nom d'élément avec VSIM"
          ]
        },
        redis8: {
          name: "Redis 8+ fonctionnalités",
          description: "Affiché lorsque Redis 8+ est détecté.",
          prompts: [
            "définir le champ de hachage ttl avec HEXPIRE",
            "obtenir le résumé d'une valeur de chaîne",
            "exécuter une recherche hybride texte intégral + vecteur (FT.HYBRID)",
            "définir plusieurs clés avec une expiration partagée en utilisant MSETEX",
            "supprimer une entrée de flux avec un groupe de consommateurs (XDELEX)",
            "afficher les statistiques des emplacements du cluster pour les 10 premiers emplacements"
          ]
        },
        scripting: {
          name: "Script",
          description: "Générez des scripts Lua / EVAL à partir de descriptions en langage naturel.",
          prompts: [
            "écrire un script atomique qui incrémente counter X uniquement si Y > 5",
            "générer 100 clés aléatoires avec Lua",
            "convertissez ce pipeline shell en un seul EVAL : clés user:* | OBTENIR | grep inactif | DEL",
            "porter une opération par lots sur Lua pour la sécurité du cluster",
            "mise à jour du style de vérification et de définition en un seul appel Lua",
            "parcourir un hachage et supprimer les champs correspondant à un modèle"
          ]
        },
        cluster: {
          name: "Grappe",
          description: "Affiché uniquement en mode cluster.",
          prompts: [
            "afficher les informations sur le cluster",
            "lister les nœuds du cluster",
            "afficher les 10 meilleurs emplacements par nombre de clés",
            "afficher les 10 meilleurs emplacements par mémoire",
            "quel maître possède le slot 5000 ?"
          ]
        },
        acl: {
          name: "ACL (Redis 6+)",
          description: "Inspectez les utilisateurs de contrôle d’accès et la connexion actuelle.",
          prompts: [
            "en tant que qui suis-je connecté ?",
            "lister tous les utilisateurs ACL",
            "de quelles autorisations ai-je ?",
            "afficher les règles utilisateur par défaut"
          ]
        },
        qna: {
          name: "Questions et réponses générales",
          description: "Posez des questions de connaissances Redis – pas d'outils, juste des réponses.",
          prompts: [
            "qu'est-ce que ZADD ?",
            "comment fonctionne le basculement de cluster ?",
            "expliquer SCAN vs KEYS",
            "quand dois-je utiliser EVAL plutôt que plusieurs commandes ?",
            "quelles sont les options de persistance Redis ?",
            "quelle est la différence entre RDB et AOF ?",
            "comment Redis Sentinel choisit-il un nouveau maître ?",
            "expliquer les balises de hachage en mode cluster"
          ]
        },
        translate: {
          name: "Langage naturel → commande Redis",
          description: "Décrivez ce que vous voulez dans l'une des 54 langues ; le AI écrit la commande Redis.",
          prompts: [
            "supprimer la clé user:42",
            "renommer la clé foo en barre",
            "expirer la clé session:abc dans 10 secondes",
            "copier la source de la clé vers la destination",
            "augmenter les visites au compteur par 5",
            "définir le message d'accueil clé sur \"hello\" pendant 1 heure",
            "supprimer toutes les clés user:*",
            "montre-moi les 10 clés les plus occupées"
          ]
        }
      }
    },
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
    aclAuthHint: "Utilisez le nom d'utilisateur et le mot de passe Redis ACL pour vous authentifier. Laissez vide pour l'utilisateur par défaut sans mot de passe.",
    tlsWithoutCert: "Activer TLS sans certificat supplémentaire",
    tlsRejectUnauthorized: "Rejeter le certificat non autorisé",
    tlsSecure: "Si vous voyez une configuration TLS qui commence par P3X ou si tous les paramètres TLS se ressemblent, c'est une fonctionnalité de sécurité. Pour modifier les paramètres, remplacez simplement ces paramètres par une valeur vide ou autre chose et ils seront enregistrés. Si vous ne modifiez pas les paramètres TLS, ils seront conservés tels quels sur le serveur.",
    treeSeparatorEmpty: "Si le séparateur d'arbre est vide, l'arbre n'aura pas de nœuds imbriqués, juste une liste simple",
    treeSeparatorEmptyNote: "Pas de nœuds imbriqués, juste une liste simple",
    welcomeConsole: "Bienvenue dans la console Redis",
    welcomeConsoleInfo: "SHIFT + L'historique avec les flèches HAUT ou BAS est activé",
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
    languageAuto: "Auto (system)",
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
    desktopNotificationsInfo: "Recevez des notifications du système lors des déconnexions et reconnexions Redis quand l'application n'est pas au premier plan."
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
    reverted: "R\u00e9tabli",
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
    socketDisconnected: "Déconnecté",
    socketError: "Erreur de connexion",
    deletedHashKey: "Clé de hachage supprimée",
    deletedSetMember: "Membre de l'ensemble supprimé",
    deletedListElement: "Élément de liste supprimé",
    deletedZSetMember: "Membre de l'ensemble trié supprimé",
    deletedStreamTimestamp: "Entrée de flux supprimée",
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
    invalid_console_command: "Cette commande ne fonctionne pas via le GUI.",
    "AI_DISABLED": "L'IA est désactivée. Activez-la dans les paramètres IA.",
    "AI_PROMPT_REQUIRED": "Une requête IA est requise.",
    "GROQ_API_KEY_READONLY": "La clé Groq API est en lecture seule et ne peut pas être modifiée.",
    "blocked_api_access": "Votre plan Groq API ne permet pas l'accès à ce modèle. Veuillez mettre à niveau votre plan Groq ou utiliser le proxy network.corifeus.com.",
    "rate_limit": "Limite de débit IA atteinte. Réessayez plus tard ou utilisez votre propre clé Groq API dans les paramètres."
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
        undoEnabled: "Annulation activ\u00e9e",
        undoDisabled: "Annulation d\u00e9sactiv\u00e9e",
        diffEnabled: "Afficher le diff avant l'enregistrement",
        diffDisabled: "Diff avant enregistrement d\u00e9sactiv\u00e9",
        jsonFormatTwoSpace: "Formater JSON avec 2 espaces",
        jsonFormatFourSpace: "Formater JSON avec 4 espaces",
        formName: "Paramètres Redis",
        searchModeClient: "Mode recherche côté client",
        searchModeServer: "Mode recherche côté serveur",
        searchModeStartsWith: "Recherche avec mode commence par",
        searchModeIncludes: "Mode recherche inclut"
      },
      undoHint: "L'annulation est disponible uniquement pour les types de cl\u00e9 string et JSON",
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
        value: "Valeur",
        errorRate: "Taux d'erreur",
        capacity: "Capacité",
        topk: "Top K",
        width: "Largeur",
        depth: "Profondeur",
        decay: "Décroissance",
        compression: "Compression",
        increment: "Incrément",
        item: "Élément",
        vectorValues: "Valeurs du vecteur (séparées par des virgules)",
        element: "Nom de l'élément",
      },
      error: {
        streamTimestamp: "L'horodatage est obligatoire, soit au format Redis soit en tant que *",
        key: "La clé doit comporter au moins un caractère",
        hashKey: "La clé hash doit comporter au moins un caractère",
        score: "Le score de l'ensemble trié est obligatoire",
        value: "La valeur est obligatoire",
        errorRate: "Le taux d'erreur doit être compris entre 0 et 1 (ex. 0.01)",
        capacity: "La capacité doit être un entier positif",
        topk: "Top K doit être un entier positif",
        width: "La largeur doit être un entier positif",
        depth: "La profondeur doit être un entier positif",
        item: "L'élément est obligatoire"
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
      hybridMode: "Recherche hybride (FT.HYBRID)",
      vectorField: "Champ vectoriel",
      vectorValues: "Valeurs vectorielles",
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
      noSlowQueries: "Aucune requête lente enregistrée.",
      confirmSlowLogReset: "Êtes-vous sûr de vouloir réinitialiser le journal lent ?",
      slowLogResetDone: "Le journal lent a été réinitialisé.",
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
      slotStats: "Statistiques des slots du cluster",
      serverInfo: "Informations sur le serveur",
      os: "Système d'exploitation",
      port: "Port réseau",
      pid: "ID de processus",
      configFile: "Fichier de configuration",
      uptime: "Temps de disponibilité",
      keyspace: "Espace clé Redis",
      keys: "Clés Redis",
      expires: "Expire",
      noKeyspace: "Aucune clé",
      persistence: "Persistance des données",
      rdbLastSave: "Dernière sauvegarde RDB",
      rdbStatus: "Statut RDB",
      rdbChanges: "Modifications depuis le dernier enregistrement",
      aofEnabled: "AOF activé",
      aofSize: "Taille AOF",
      replication: "Réplication Redis",
      role: "Rôle de réplication",
      replicas: "Répliques connectées",
      masterHost: "Hôte principal",
      linkStatus: "État du lien de réplication",
      cpu: "Utilisation du processeur",
      cpuSys: "Système",
      cpuUser: "Utilisateur",
      modules: "Modules Redis chargés",
      noModules: "Aucun module Redis chargé",
      clusterSlotMap: "Carte des emplacements du cluster Redis",
      slotRange: "Plage d'emplacements de cluster",
      totalSlots: "Nombre total d'emplacements de cluster",
      noClusterData: "Aucune donnée du cluster Redis disponible.",
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
      memoryDoctor: "Memory Doctor",
      doctorNoData: "Cliquez sur Actualiser pour exécuter les diagnostics Memory Doctor.",
    },
    acl: {
      title: "Utilisateurs de ACL",
      loadUsers: "Charger les utilisateurs",
      loading: "Chargement...",
      username: "Nom d'utilisateur",
      status: "Statut",
      enabled: "Activé",
      disabled: "Désactivé",
      commands: "Commandes",
      commandsHint: "par exemple, +@all or +@read -@dangerous",
      keys: "Modèles de clés Redis",
      keysHint: "par exemple, ~* or ~user:*",
      channels: "Canaux Pub/Sub",
      channelsHint: "par exemple, &* or &notifications:*",
      password: "Mot de passe",
      noPassword: "Pas de mot de passe (nopass)",
      passwordHint: "Laisser vide pour conserver le mot de passe actuel",
      currentUser: "Actuel",
      createUser: "Créer un utilisateur",
      editUser: "Modifier l'utilisateur",
      deleteUser: "Supprimer",
      confirmDelete: "Êtes-vous sûr de vouloir supprimer l'utilisateur ACL ?",
      userDeleted: "L'utilisateur ACL a été supprimé.",
      userSaved: "L'utilisateur ACL a été enregistré.",
      cannotDeleteDefault: "Impossible de supprimer l'utilisateur par défaut.",
      cannotDeleteSelf: "Impossible de supprimer l'utilisateur actuellement connecté.",
      noUsers: "ACL nécessite Redis 6.0+.",
      groupCommon: "Général",
      groupDataTypes: "Types de données",
      groupOperations: "Opérations",
      rules: "Règles",
      rulesHint: "Jetons séparés par des espaces (par exemple on >password +@all ~* &*)",
      defaultUserWarning: "Attention : La modification de l'utilisateur par défaut peut verrouiller toutes les connexions. Si cela se produit, vous devrez redémarrer Redis ou utiliser redis-cli pour restaurer l'accès.",
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
      },
      probabilistic: {
        info: "Info",
        addItem: "Ajouter un élément",
        checkItem: "Vérifier un élément",
        item: "Élément",
        exists: "Existe",
        doesNotExist: "N'existe pas",
        topkList: "Éléments principaux",
        topkCount: "Nombre",
        queryCount: "Nombre de requêtes",
        queryResult: "Résultat de la requête",
        addedSuccessfully: "Élément ajouté avec succès",
        deletedSuccessfully: "Élément supprimé avec succès",
        quantile: "Quantile",
        quantileResult: "Résultat",
        noItems: "Aucun élément à afficher",
        resetConfirm: "Réinitialiser toutes les données de ce T-Digest ?",
      },
      vectorset: {
        info: "Info",
        elements: "Éléments",
        similarity: "Recherche de similarité",
        searchByElement: "Rechercher par élément",
        searchByVector: "Rechercher par vecteur",
        vectorValues: "Valeurs du vecteur",
        element: "Élément",
        score: "Score",
        count: "Nombre",
        addElement: "Ajouter un élément",
        attributes: "Attributs",
        noAttributes: "Aucun attribut",
        dimensions: "Dimensions",
        removeConfirm: "Supprimer cet élément du VectorSet ?",
        noElements: "Aucun élément",
        filter: "Filtre",
        searchComplete: "Recherche terminée",
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
    timeseries: "Time Series",
    bloom: "Bloom filtre",
    cuckoo: "Cuckoo filtre",
    topk: "Top-K",
    cms: "Count-Min Sketch",
    tdigest: "T-Digest",
    vectorset: "VectorSet",
  },
  promo: {
    title: "AI Assistant réseau",
    description: "Découvrez notre assistant réseau AI gratuit sur network.corifeus.com : analysez les domaines, les IP, les enregistrements DNS, les certificats SSL, la sécurité de la messagerie électronique et l'infrastructure réseau. Alimenté par AI pour des résultats instantanés et complets.",
    disclaimer: "Cette promotion est uniquement affichée sur le site de démonstration et n'apparaîtra pas dans les déploiements Docker, Electron ou d'applications Web.",
    toastMessage: "Essayez notre assistant réseau AI gratuit sur network.corifeus.com : analysez les domaines, DNS, SSL et plus encore !",
    visit: "Visitez network.corifeus.com"
  }
};
module.exports = strings;
