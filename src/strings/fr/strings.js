const strings = {
  error: {
    cleared_license: "Licence effacée",
    invalid_license: "Licence non valide",
    license_max_devices_reached: "Nombre maximum de postes d'appareils atteint",
    license_readonly: "La licence ne peut être modifiée que depuis le terminal du serveur.",
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
    deleteAllKeys: opts => {
      return `Supprimer cet arbre et toutes ses clés (${opts.key}) ?`;
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
    license: {
      title: "Définir la licence",
      textContent: "Si vous souhaitez utiliser les fonctionnalités payantes, veuillez contacter support@corifeus.com pour demander une licence. Les tarifs sont Pro 400 HUF/mois (€1/mois) ou 4 000 HUF/an (€10/an), et Enterprise 1 200 HUF/mois (€3/mois) ou 12 000 HUF/an (€30/an). Le prix annuel est 10x le mensuel. Avec 27% TVA, les totaux sont Pro 500 HUF/mois (€1,27/mois) ou 5 100 HUF/an (€12,70/an), Enterprise 1 500 HUF/mois (€3,81/mois) ou 15 200 HUF/an (€38,10/an). La validation de licence nécessite un accès Internet. La licence par défaut comprend 5 postes. Si vous avez besoin de plus de postes, contactez-nous à support@corifeus.com.",
      placeholder: "Clé de licence"
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
    importKeys: "Importer les clés",
    saveWithFormatJson: "Enregistrer avec formatage",
    formatJson: "Formater Json",
    wrap: "Retour à la ligne",
    unwrap: "Sans retour à la ligne",
    downloadJson: "Télécharger JSON",
    pubsubMonitor: "Moniteur PubSub",
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
    license: "Définir la licence",
    delete: "Supprimer",
    remove: "Retirer",
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
    licenseInfo: "Licence",
    licenseEditable: "Licence modifiable",
    licenseEditableYes: "Oui",
    licenseEditableNo: "Non",
    licenseTerminalOnly: "La licence ne peut être configurée que depuis le terminal du serveur.",
    licenseTierPolicyTitle: "Politique des niveaux",
    licenseTierPolicyText: "<h4>Gratuit</h4>Redis UI de base uniquement ; pas de SSH tunneling, pas de mode connexion en lecture seule, pas de Cluster/Sentinel, pas de Modifier JSON/Télécharger binaire/Télécharger binaire, pas de ReJSON.<br/><strong>Prix : 0 HUF/mois (€0/mois).</strong><br/><br/><h4>Pro</h4>SSH tunneling, mode connexion en lecture seule (y compris --readonly-connections/-r), Modifier JSON, Télécharger binaire, Télécharger binaire, ReJSON.<br/><strong>Prix de base : 400 HUF/mois (€1/mois) ou 4 000 HUF/an (€10/an).</strong><br/><strong>Total avec 27% TVA : 500 HUF/mois (€1,27/mois) ou 5 100 HUF/an (€12,70/an).</strong><br/><br/><h4>Enterprise</h4>SSH tunneling, Cluster et Sentinel, plus Modifier JSON, Télécharger binaire, Télécharger binaire, ReJSON ; --readonly-connections/-r fonctionne également.<br/><strong>Prix de base : 1 200 HUF/mois (€3/mois) ou 12 000 HUF/an (€30/an).</strong><br/><strong>Total avec 27% TVA : 1 500 HUF/mois (€3,81/mois) ou 15 200 HUF/an (€38,10/an).</strong><br/><br/><h4>Règle annuelle</h4>Le prix annuel est 10x le prix mensuel.<br/><br/><h4>Postes</h4>La licence par défaut comprend 5 postes. Si vous avez besoin de plus de postes, contactez-nous à <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><br/><h4>Essai Enterprise</h4>10 jours gratuits pour toute personne disposant d'une adresse e-mail réelle existante (e-mail non-test).<br/><hr/><h4>Informations de facturation par e-mail</h4>Nom, e-mail de facturation, code pays, code postal, ville, adresse, numéro de TVA (facultatif).<br/><br/><h4>Paiement</h4>Le paiement PayPal n'est disponible qu'en HUF (forint) ; après l'envoi de l'argent à <a href='https://paypal.me/corifeus'>https://paypal.me/corifeus</a> je vous enverrai une facture. Tous les paiements sont non remboursables.<br/><br/><h4>TVA</h4>La TVA est ajoutée au prix (27% en Hongrie).<br/><hr/><h4>Contact</h4>Si vous souhaitez dire bonjour ou avez une question, contactez <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><hr/><h4>Langue</h4>La communication des factures et licences par e-mail est en anglais. La devise de facturation est le HUF.<br/><hr/><h4>Note</h4>La validation de licence nécessite un accès Internet.",
    licenseState: "État",
    licenseStateActive: "Active",
    licenseStateInactive: "Inactive",
    licenseStateNoLicense: "Pas de licence",
    licenseKeyMasked: "Clé enregistrée",
    licenseTier: "Niveau",
    licenseValid: "Valide",
    licenseStatus: "Statut de la licence",
    licenseReason: "Raison",
    licenseCheckedAt: "Vérifiée le",
    licenseStartsAt: "Débute le",
    licenseExpiresAt: "Expire le",
    licenseDaysLeft: "Jours restants",
    licenseMaxDevices: "Appareils maximum",
    licenseActiveDevices: "Appareils actifs",
    licenseActiveDevicesInfo: "Si un appareil n'est plus utilisé, son poste est libéré automatiquement après 75 minutes.",
    licenseCustomerEmail: "E-mail du client",
    licenseFeatures: "Fonctionnalités",
    licenseFeaturesEmpty: "Pas de fonctionnalités supplémentaires",
    licenseFeatureReadonlyMode: "Mode connexion en lecture seule",
    licenseFeatureReadonlyConnectionsFlag: "Connexions en lecture seule (--readonly-connections/-r)",
    licenseFeatureSsh: "SSH tunneling",
    licenseFeatureCluster: "Connexions Cluster",
    licenseFeatureSentinel: "Connexions Sentinel",
    licenseFeatureReJSON: "ReJSON (JSON data type)",
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
    proSshOnly: "SSH est disponible en Pro ou Enterprise.",
    proReadonlyOnly: "Le mode connexion en lecture seule est disponible en Pro ou Enterprise.",
    enterpriseClusterSentinelOnly: "Cluster et Sentinel sont disponibles uniquement en Enterprise.",
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
    loading: "Chargement...",
    autoRefresh: "Auto",
    exportSearchHint: "Exportation uniquement des clés correspondant à la recherche en cours",
    importSearchHint: "L'importation s'applique à toute la base de données, pas seulement aux résultats de recherche",
    importNoKeys: "Aucune clé trouvée dans le fichier",
  },
  status: {
    dataCopied: "Les données sont dans le presse-papiers",
    licenseSaved: "Licence enregistrée",
    exportDone: "Exportation terminée",
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
    set: "La clé est définie/ajoutée"
  },
  code: {
    "delete-connection": "Cette connexion a été supprimée, vous êtes donc déconnecté de cette instance Redis.",
    "save-connection": "Cette connexion a été modifiée, vous êtes donc déconnecté de cette instance Redis. Vous pouvez vous reconnecter.",
    "readonly-connections": "Les opérations d'ajout/enregistrement/suppression de connexions sont en lecture seule !",
    "readonly-connection-mode": "Cette connexion est en mode lecture seule !",
    "list-out-of-bounds": "Cet index de liste est hors limites",
    "donation-ware-feature": "Cette fonctionnalité est présente dans la version donation.",
    "feature-pro-readonly-required": "Le mode connexion en lecture seule nécessite une licence Pro ou Enterprise.",
    "feature-pro-ssh-required": "Le SSH tunneling nécessite une licence Pro ou Enterprise.",
    "feature-enterprise-cluster-sentinel-required": "Cluster et Sentinel nécessitent une licence Enterprise.",
    "feature-pro-json-binary-required": "Modifier JSON, Télécharger binaire (upload) et Télécharger binaire (download) nécessitent une licence Pro ou Enterprise.",
    "feature-pro-rejson-required": "ReJSON (JSON data type) requires Pro or Enterprise license.",
    "invalid-json-value": "The value is not valid JSON.",
    "http_auth_required": "Autorisation requise : veuillez vous authentifier avec HTTP Basic Auth et recharger.",
    "auto-connection-failed": "Il est possible que la connexion ait été supprimée et que la connexion automatique ait échoué à cause de cela.",
    invalid_console_command: "Cette commande ne fonctionne pas via le GUI."
  },
  licenseReason: {
    LICENSE_VALID: "La licence est valide",
    LICENSE_INVALID: "La licence n'est pas valide",
    LICENSE_MISSING: "Aucune clé de licence n'est définie",
    LICENSE_DISABLED: "La licence est désactivée dans la configuration du serveur",
    LICENSE_NOT_FOUND: "La licence n'a pas été trouvée",
    LICENSE_EXPIRED: "La licence a expiré",
    LICENSE_CLEARED: "La clé de licence a été effacée",
    LICENSE_MAX_DEVICES_REACHED: "Nombre maximum de postes d'appareils atteint",
    PRODUCT_MISMATCH: "Le produit de la licence ne correspond pas"
  },
  licenseStatusValue: {
    active: "Active",
    deleted: "Supprimée",
    all: "Toutes",
    expired: "Expirée",
    missing: "Manquante",
    inactive: "Inactive"
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
      keyCount: () => {
        return `Nombre de clés : ${p3xr.state.keysRaw.length}`;
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
      noClients: "Aucun client",
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
      }
    },
    treeControls: {
      settings: "Paramètres de l'arbre",
      expandAll: "Tout développer",
      collapseAll: "Tout réduire",
      search: {
        search: "Rechercher dans les clés",
        clear: "Effacer la recherche actuelle",
        placeholderClient: "Recherche côté client",
        placeholderServer: "Recherche côté serveur",
        info: "La recherche côté client signifie qu'elle correspond au texte dans le champ de recherche. La recherche côté serveur signifie qu'elle recherche dans les modèles de clés comme *{texte-de-recherche}*. Pour les grands ensembles de recherche, il est préférable d'utiliser la recherche côté serveur. Pour les ensembles plus petits, il est préférable d'utiliser la recherche côté client." + ` Si le nombre de clés dépasse ${p3xr.settings.maxLightKeysCount}, vous ne pouvez rechercher que côté serveur.`,
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
    loading: "Chargement...",
    years: "ans",
    months: "mois",
    days: "jours",
    year: "an",
    month: "mois",
    day: "jour"
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
