const strings = {
  error: {
    cleared_license: "Licencia eliminada",
    invalid_license: "Licencia no válida",
    license_max_devices_reached: "Se alcanzó el número máximo de puestos de dispositivos",
    license_readonly: "La licencia solo puede cambiarse desde la terminal del servidor.",
    server_error: "Error del servidor, por favor inténtelo de nuevo"
  },
  title: {
    donate: "Donar",
    jsonRecursive: "Expandiendo todas las hojas",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "Puede elegir una conexión Redis desde el menú inferior izquierdo.",
    statistics: "Estadísticas",
    error: "Error",
    connectingRedis: "Conectando a Redis ...",
    socketioConnectError: "Error de Socket.IO",
    db: "DB",
    server: "Servidor",
    clients: "Clientes",
    memory: "Memoria",
    persistence: "Persistencia",
    stats: "Estadísticas",
    replication: "Replicación",
    cpu: "CPU",
    cluster: "Cluster",
    modules: "Módulos",
    errorstats: "Estadísticas de errores",
    commandstats: "Estadísticas de comandos",
    latencystats: "Estadísticas de latencia",
    keysizes: "Tamaños de claves",
    threads: "Hilos",
  },
  confirm: {
    dropIndex: "¿Está seguro de eliminar este índice?",
    uploadBuffer: "¿Está seguro de que desea subir estos datos binarios?",
    uploadBufferDone: "Los datos binarios se han subido",
    uploadBufferDoneAndSave: "Los datos binarios se han subido y guardado en el servidor",
    title: "Confirmar",
    alert: "Alerta",
    info: "Información",
    deleteListItem: "¿Está seguro de que desea eliminar este elemento de la lista?",
    deleteHashKey: "¿Está seguro de que desea eliminar esta clave hash?",
    deleteStreamTimestamp: "¿Está seguro de que desea eliminar esta marca de tiempo del stream?",
    deleteSetMember: "¿Está seguro de que desea eliminar este miembro del conjunto?",
    deleteZSetMember: "¿Está seguro de que desea eliminar este miembro del conjunto ordenado?",
    deleteConnection: "Confirmar",
    deleteConnectionText: "¿Está seguro de que desea eliminar esta conexión Redis?",
    deleteNode: "¿Está seguro de que desea eliminar este nodo Redis?",
    deleteAllKeys: opts => {
      return `¿Eliminar este árbol y todas sus claves (${opts.key})?`;
    },
    socketioConnectError: "Socket.IO no puede conectarse al servidor. Puede recargar e intentar resolver el error de conexión usted mismo, el cliente no sabe cómo resolverlo por sí solo.",
    socketioAuthRequired: "Se requiere autorización de Socket.IO. Por favor autentíquese con HTTP Basic Auth (usuario/contraseña) y recargue.",
    deleteKey: "¿Está seguro de que desea eliminar esta clave?",
    rename: {
      title: "¿Está seguro de que desea renombrar esta clave?",
      textContent: "Esta acción renombra la clave de forma permanente.",
      placeholder: "La clave Redis (obligatorio)"
    },
    ttl: {
      title: "¿Está seguro de que desea cambiar el TTL de esta clave?",
      textContent: "Cambiar el TTL actualiza el tiempo de vida de esta clave. Deje vacío para mantener esta clave para siempre.",
      placeholder: "El TTL de la clave Redis (entero o vacío)",
      placeholderPlaceholder: "Vacío significa que persiste para siempre; de lo contrario ingrese un entero.",
      convertTextToTime: "Convertir texto a tiempo",
      convertTextToTimePlaceholder: "Ej. 1d será 86400"
    },
    license: {
      title: "Establecer licencia",
      textContent: "Si desea utilizar funciones de pago, contacte con support@corifeus.com para solicitar una licencia. Los precios son Pro 400 HUF/mes (€1/mes) o 4.000 HUF/año (€10/año), y Enterprise 1.200 HUF/mes (€3/mes) o 12.000 HUF/año (€30/año). El precio anual es 10x el mensual. Con 27% IVA, los totales son Pro 500 HUF/mes (€1,27/mes) o 5.100 HUF/año (€12,70/año), Enterprise 1.500 HUF/mes (€3,81/mes) o 15.200 HUF/año (€38,10/año). La validación de licencia requiere acceso a Internet. La licencia predeterminada incluye 5 puestos. Si necesita más puestos, contáctenos en support@corifeus.com.",
      placeholder: "Clave de licencia"
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
    copy: "Copiar",
    downloadBuffer: "Descargar binario",
    setBuffer: "Subir binario",
    exportKeys: "Exportar claves",
    exportAllKeys: (opts) => `Exportar las ${opts.count} claves`,
    exportSearchResults: (opts) => `Exportar ${opts.count} resultados`,
    importKeys: "Importar claves",
    saveWithFormatJson: "Guardar con formato",
    formatJson: "Formatear Json",
    wrap: "Ajustar",
    unwrap: "No ajustar",
    downloadJson: "Descargar JSON",
    pubsubMonitor: "Monitor PubSub",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "Idioma / Language",
    ok: "OK",
    addKey: "Agregar a esta clave",
    addKeyRoot: "Agregar una clave raíz",
    reloadKey: "Recargar clave",
    reload: "Recargar",
    close: "Cerrar",
    commands: "Comandos",
    view: "Ver",
    statistics: "Estadísticas",
    refresh: "Actualizar",
    pause: "Pausar",
    resume: "Reanudar",
    clear: "Limpiar",
    rename: "Renombrar",
    main: "Base de datos",
    cancel: "Cancelar",
    theme: "Tema",
    github: "GitHub",
    githubRepo: "Repositorio",
    githubRelease: "Versiones",
    githubChangelog: "Registro de cambios",
    info: "Info",
    settings: "Configuración",
    connect: "Conectar",
    disconnect: "Desconectar",
    overview: "Vista general",
    console: "Consola",
    noConnections: "No hay conexiones, agregue una conexión en el menú de configuración.",
    noConnectionsInSettings: "No hay conexiones, puede agregar una NUEVA CONEXIÓN arriba.",
    connectionAdd: "Nueva conexión",
    addGroup: "Añadir grupo",
    extend: "Expandir",
    collapse: "Colapsar",
    add: "Agregar",
    edit: "Editar",
    save: "Guardar",
    ttl: "Establecer TTL",
    license: "Establecer licencia",
    delete: "Eliminar",
    remove: "Quitar",
    sure: "Seguro",
    testConnection: "Probar conexión",
    getKey: "Cargando clave Redis y datos asociados ...",
    jsonViewShow: "Mostrar JSON",
    jsonViewEditor: "Editar JSON",
    quickConsole: "Consola rápida",
  },
  label: {
    id: {
      nodeId: 'ID de nodo',
      id: "ID de conexión",
      info: "Si no desea cambiar las propiedades de: sshPassword, sshPrivateKey, password, tlsCrt, tlsKey, tlsCa, por favor ingrese el ID de la conexión en esas propiedades para mantener los valores intactos. Si desea la misma lógica en la contraseña del nodo, ingrese el ID del nodo en la contraseña del nodo."
    },
    secureFeature: 'Si ve un valor que comienza con P3X y parece el mismo, es una característica de seguridad. Para cambiar la configuración, simplemente reemplace estos ajustes con vacío u otra cosa y se guardarán. Si no cambia la configuración, se mantendrá como está en el servidor.',
    aiTranslating: "Traduciendo...",
    aiSettings: "Configuración IA",
    aiGroqApiKey: "Clave API Groq",
    aiGroqApiKeyInfo: "Opcional. Su propia clave API Groq para mejor rendimiento. Obtenga una clave gratuita en",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "Clave API IA guardada",
    aiGroqApiKeyNotSet: "No configurado (predeterminado del servidor)",
    ssh: {
      on: 'SSH activado',
      off: 'SSH desactivado',
      sshHost: 'SSH Host',
      sshPort: 'Puerto SSH',
      sshUsername: 'Nombre de usuario SSH',
      sshPassword: 'Contraseña SSH',
      sshPrivateKey: 'Clave privada SSH'
    },
    isBuffer: opts => `[object ArrayBuffer] significa que el valor es datos binarios o el valor es mayor que ${opts.maxValueAsBuffer}`,
    streamValue: `El campo y valor del stream van en una línea. Ej.: field1 value1 "field 2" "value 2"`,
    streamTimestampId: `'*' significa generado automáticamente o la especificación como <millisecondsTime>-<sequenceNumber>`,
    unableToLoadKey: ({
      key
    }) => {
      return `No se pudo cargar esta clave: ${key}. Es posible que la clave haya sido eliminada. El error exacto está en la consola.`;
    },
    bigJson: "Este objeto JSON supera los 10 kb, así que asegúrese de saber lo que está haciendo, porque algunas funciones pueden renderizar lentamente.",
    addNode: "Agregar nodo",
    validateJson: "Validar JSON",
    reducedFunction: `Funcionalidad reducida`,
    tooManyKeys: opts => {
      return `Para las funciones máximas completas, el total de claves permitidas es ${opts.maxLightKeysCount}. Esta base de datos tiene más claves de las permitidas: ${opts.count}. La ordenación de claves y la información adicional del árbol están deshabilitadas. La búsqueda se realiza solo en el servidor en lugar del cliente.`;
    },
    redisCommandNotFound: "No se encontró coincidencia con el comando Redis ...",
    treeKeyStore: `La ordenación (comparación natural) se ejecuta en el cliente, es decir, el navegador, lo que significa que tiene una penalización para conjuntos grandes, como más de 10k claves, puede agregar un poco de tiempo al renderizado de la página. No hay ordenación de claves en Redis, solo de esta manera.`,
    socketIoTimeout: options => {
      return `Socket.IO agotó el tiempo de espera para esta solicitud (máx. ${options.timeout / 1000} segundos) ...`;
    },
    resizerInfo: options => {
      return `El ancho mínimo del panel izquierdo o derecho es ${options.width}px`;
    },
    jsonViewNotParsable: "Este valor no se puede analizar como JSON  ",
    ttlTitle: "Establezca el TTL en segundos",
    passwordSecure: "La contraseña puede estar vacía, pero aún mostrará caracteres, esto es una característica de seguridad.",
    tlsWithoutCert: "Habilitar TLS sin certificado adicional",
    tlsRejectUnauthorized: "Rechazar certificado no autorizado",
    tlsSecure: "Si ve una configuración TLS que comienza con P3X o todas las configuraciones TLS se ven iguales, es una característica de seguridad. Para cambiar la configuración, simplemente reemplace estos ajustes con vacío u otra cosa y se guardarán. Si no cambia la configuración TLS, se mantendrá como está en el servidor.",
    treeSeparatorEmpty: "Si el separador del árbol está vacío, el árbol no tendrá nodos anidados, solo una lista simple",
    treeSeparatorEmptyNote: "Sin nodos anidados, solo una lista simple",
    welcomeConsole: "Bienvenido a la consola Redis",
    welcomeConsoleInfo: "El historial con cursor ARRIBA o ABAJO está habilitado",
    redisListIndexInfo: "Vacío para agregar al final, -1 para agregar al inicio o guardar en la posición mostrada.",
    console: "Consola",
    connectiondAdd: "Agregar conexión",
    connectiondEdit: "Editar conexión",
    connectiondView: "Ver conexión",
    connections: "Conexiones",
    licenseInfo: "Licencia",
    licenseEditable: "Licencia editable",
    licenseEditableYes: "Sí",
    licenseEditableNo: "No",
    licenseTerminalOnly: "La licencia solo puede configurarse desde la terminal del servidor.",
    licenseTierPolicyTitle: "Política de niveles",
    licenseTierPolicyText: "<h4>Gratis</h4>solo Redis UI básico; sin SSH tunneling, sin modo de conexión de solo lectura, sin Cluster/Sentinel, sin Editar JSON/Subir binario/Descargar binario, sin ReJSON.<br/><strong>Precio: 0 HUF/mes (€0/mes).</strong><br/><br/><h4>Pro</h4>SSH tunneling, modo de conexión de solo lectura (incluyendo --readonly-connections/-r), Editar JSON, Subir binario, Descargar binario, ReJSON.<br/><strong>Precio base: 400 HUF/mes (€1/mes) o 4.000 HUF/año (€10/año).</strong><br/><strong>Total con 27% IVA: 500 HUF/mes (€1,27/mes) o 5.100 HUF/año (€12,70/año).</strong><br/><br/><h4>Enterprise</h4>SSH tunneling, Cluster y Sentinel, además de Editar JSON, Subir binario, Descargar binario, ReJSON; --readonly-connections/-r también funciona.<br/><strong>Precio base: 1.200 HUF/mes (€3/mes) o 12.000 HUF/año (€30/año).</strong><br/><strong>Total con 27% IVA: 1.500 HUF/mes (€3,81/mes) o 15.200 HUF/año (€38,10/año).</strong><br/><br/><h4>Regla anual</h4>El precio anual es 10x el precio mensual.<br/><br/><h4>Puestos</h4>La licencia predeterminada incluye 5 puestos. Si necesita más puestos, contáctenos en <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><br/><h4>Prueba Enterprise</h4>10 días gratis para cualquiera con un correo electrónico real existente (correo no de prueba).<br/><hr/><h4>Información de facturación por e-mail</h4>Nombre, correo de facturación, código de país, código postal, ciudad, dirección, NIF (opcional).<br/><br/><h4>Pago</h4>El pago por PayPal está disponible solo en HUF (florín); después de enviar el dinero a <a href='https://paypal.me/corifeus'>https://paypal.me/corifeus</a> le enviaré una factura. Todos los pagos no son reembolsables.<br/><br/><h4>IVA</h4>El IVA se agrega al precio (27% en Hungría).<br/><hr/><h4>Contacto</h4>Si quiere saludar o tiene una pregunta, contacte con <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><hr/><h4>Idioma</h4>La comunicación de facturas y licencias por correo es en inglés. La moneda de facturación es HUF.<br/><hr/><h4>Nota</h4>La validación de licencia requiere acceso a Internet.",
    licenseState: "Estado",
    licenseStateActive: "Activa",
    licenseStateInactive: "Inactiva",
    licenseStateNoLicense: "Sin licencia",
    licenseKeyMasked: "Clave guardada",
    licenseTier: "Nivel",
    licenseValid: "Válida",
    licenseStatus: "Estado de licencia",
    licenseReason: "Razón",
    licenseCheckedAt: "Verificada el",
    licenseStartsAt: "Inicia el",
    licenseExpiresAt: "Expira el",
    licenseDaysLeft: "Días restantes",
    licenseMaxDevices: "Dispositivos máximos",
    licenseActiveDevices: "Dispositivos activos",
    licenseActiveDevicesInfo: "Si un dispositivo ya no se utiliza, su puesto se libera automáticamente después de 75 minutos.",
    licenseCustomerEmail: "Correo del cliente",
    licenseFeatures: "Características",
    licenseFeaturesEmpty: "Sin características adicionales",
    licenseFeatureReadonlyMode: "Modo de conexión de solo lectura",
    licenseFeatureReadonlyConnectionsFlag: "Conexiones de solo lectura (--readonly-connections/-r)",
    licenseFeatureSsh: "SSH tunneling",
    licenseFeatureCluster: "Conexiones Cluster",
    licenseFeatureSentinel: "Conexiones Sentinel",
    licenseFeatureReJSON: "ReJSON (JSON data type)",
    keysSort: {
      on: "Ordenación de claves activada",
      off: "Ordenación de claves desactivada"
    },
    cluster: {
      on: "Cluster activado",
      off: "Cluster desactivado"
    },
    sentinel: {
      on: "Sentinel activado",
      off: "Sentinel desactivado",
      name: "Nombre de Sentinel"
    },
    readonly: {
      on: "Solo lectura activado",
      off: "Solo lectura desactivado"
    },
    proSshOnly: "SSH está disponible en Pro o Enterprise.",
    proReadonlyOnly: "El modo de conexión de solo lectura está disponible en Pro o Enterprise.",
    enterpriseClusterSentinelOnly: "Cluster y Sentinel están disponibles solo en Enterprise.",
    theme: {
      light: "Claro",
      dark: "Oscuro enterprise",
      darkNeu: "Oscuro",
      darkoBluo: "Darko bluo",
      enterprise: "Enterprise",
      redis: "Redis",
      matrix: "Matrix"
    },
    connected: opts => {
      return `Conectado: ${opts.name}`;
    },
    tree: "Árbol",
    askAuth: "Solicitar autorización",
    keyboardShortcuts: "Atajos de teclado",
    about: "Acerca de",
    supportedLanguages: "Idiomas compatibles",
    version: "Versión",
    redisVersion: "Versión de Redis",
    modules: "Módulos",
    shortcutRefresh: "Actualizar",
    shortcutSearch: "Enfocar búsqueda",
    shortcutNewKey: "Nueva clave",
    shortcutDisconnect: "Desconectar",
    themeAuto: "Automático (sistema)",
    shortcutCommandPalette: "Paleta de comandos",
    commandPalette: "Paleta de comandos",
    noResults: "Sin resultados",
    redisCommandsReference: "Comandos Redis",
    ungrouped: "Sin grupo",
    grouped: "Agrupados",
    connectFirst: "Conéctese primero a un servidor Redis",
    searchLanguage: "Buscar idioma...",
    exportProgress: "Exportando claves...",
    importProgress: "Importando claves...",
    importPreview: "Vista previa",
    importOverwrite: "Sobrescribir",
    importSkip: "Omitir",
    importConflict: "Si la clave ya existe:",
    noKeysToExport: "No hay claves para exportar",
    time: "Tiempo",
    loading: "Cargando...",
    autoRefresh: "Auto",
    exportSearchHint: "Exportando solo claves que coinciden con la búsqueda actual",
    importSearchHint: "La importación se aplica a toda la base de datos, no solo a los resultados de búsqueda",
    importNoKeys: "No se encontraron claves en el archivo",
  },
  status: {
    dataCopied: "Los datos están en el portapapeles",
    licenseSaved: "Licencia guardada",
    exportDone: "Exportación completada",
    indexCreated: "Índice creado",
    indexDropped: "Índice eliminado",
    importDone: (opts) => `Importación completada: ${opts.created} creados, ${opts.skipped} omitidos, ${opts.errors} errores`,
    nodeRemoved: "Nodo eliminado",
    keyIsNotExisting: "Esta clave puede haber sido eliminada o haber expirado.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "Sin claves";
      } else if (opts.keyCount === 1) {
        return "1 clave";
      } else {
        return `${opts.keyCount} claves`;
      }
    },
    treeExpandAll: "Expandir todas las hojas del árbol. Esta operación puede ser costosa y puede tomar tiempo ...",
    noRedisKeys: "No hay claves en esta base de datos.",
    redisConnected: "Conexión exitosa a Redis",
    reloadingDataInfo: "Recargando datos de Redis",
    added: "Agregado",
    saved: "Actualizado",
    cancelled: "Cancelado",
    deleted: "Eliminado",
    savedRedis: "Los datos de Redis se han guardado",
    redisDisconnected: opts => {
      return `La conexión actual tuvo un error: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `El índice de base de datos se estableció en ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `La clave del árbol fue eliminada (${opts.key}).`;
    },
    deletedKey: opts => {
      return `La clave fue eliminada (${opts.key}).`;
    },
    renamedKey: "Esta clave ha sido renombrada",
    ttlChanged: "El TTL de esta clave ha sido cambiado",
    notInteger: "Esta entrada no es un número entero",
    persisted: "Esta clave se mantiene para siempre",
    set: "La clave ha sido establecida/agregada"
  },
  code: {
    "delete-connection": "Esta conexión fue eliminada, por lo que se ha desconectado de esta instancia de Redis.",
    "save-connection": "Esta conexión fue modificada, por lo que se ha desconectado de esta instancia de Redis. Puede reconectarse.",
    "readonly-connections": "¡Las operaciones de agregar/guardar/eliminar conexiones son de solo lectura!",
    "readonly-connection-mode": "¡Esta conexión está en modo de solo lectura!",
    "list-out-of-bounds": "Este índice de lista está fuera de límites",
    "donation-ware-feature": "Esta función está presente en la versión de donación.",
    "feature-pro-readonly-required": "El modo de conexión de solo lectura requiere licencia Pro o Enterprise.",
    "feature-pro-ssh-required": "SSH tunneling requiere licencia Pro o Enterprise.",
    "feature-enterprise-cluster-sentinel-required": "Cluster y Sentinel requieren licencia Enterprise.",
    "feature-pro-json-binary-required": "Editar JSON, Subir binario y Descargar binario requieren licencia Pro o Enterprise.",
    "feature-pro-rejson-required": "ReJSON (JSON data type) requires Pro or Enterprise license.",
    "invalid-json-value": "The value is not valid JSON.",
    "http_auth_required": "Autorización requerida: por favor autentíquese con HTTP Basic Auth y recargue.",
    "auto-connection-failed": "Es posible que la conexión fue eliminada y la conexión automática falló por esta razón.",
    invalid_console_command: "Este comando no funciona a través del GUI."
  },
  licenseReason: {
    LICENSE_VALID: "La licencia es válida",
    LICENSE_INVALID: "La licencia no es válida",
    LICENSE_MISSING: "No se ha establecido clave de licencia",
    LICENSE_DISABLED: "La licencia está deshabilitada en la configuración del servidor",
    LICENSE_NOT_FOUND: "La licencia no fue encontrada",
    LICENSE_EXPIRED: "La licencia ha expirado",
    LICENSE_CLEARED: "La clave de licencia fue eliminada",
    LICENSE_MAX_DEVICES_REACHED: "Se alcanzó el número máximo de puestos de dispositivos",
    PRODUCT_MISMATCH: "El producto de la licencia no coincide"
  },
  licenseStatusValue: {
    active: "Activa",
    deleted: "Eliminada",
    all: "Todas",
    expired: "Expirada",
    missing: "Ausente",
    inactive: "Inactiva"
  },
  form: {
    error: {
      required: "Obligatorio",
      port: "El puerto debe estar entre 1-65535",
      invalid: "El formulario no es válido"
    },
    connection: {
      label: {
        name: "Nombre",
        group: "Grupo",
        host: "Nombre de host",
        port: "Puerto",
        password: "Contraseña",
        username: "Nombre de usuario"
      }
    },
    treeSettings: {
      maxValueDisplay: "Longitud máxima de visualización de valor",
      maxValueDisplayInfo: "Si se establece en 0, muestra valores completos. Si es mayor que 0, trunca a esta longitud. Si -1: para cadenas, oculta el valor hasta editar; para otros tipos, muestra contenido completo.",
      maxKeys: "Número máximo de claves",
      maxKeysInfo: "Para que el GUI no se bloquee, limitamos el número máximo de claves.",
      keyCount: () => {
        return `Número de claves: ${p3xr.state.keysRaw.length}`;
      },
      label: {
        animation: "Usar animación",
        noAnimation: "Sin animación",
        jsonFormatTwoSpace: "Formatear JSON con 2 espacios",
        jsonFormatFourSpace: "Formatear JSON con 4 espacios",
        formName: "Configuración de Redis",
        searchModeClient: "Modo de búsqueda en cliente",
        searchModeServer: "Modo de búsqueda en servidor",
        searchModeStartsWith: "Buscar con modo empieza con",
        searchModeIncludes: "Modo de búsqueda incluye"
      },
      field: {
        treeSeparator: "Separador del árbol",
        treeSeparatorSelector: "Selector de separador del árbol",
        page: "Número de paginación del árbol",
        keyPageCount: "Número de paginación de claves",
        keysSort: "Ordenar las claves",
        searchMode: "Modo de búsqueda",
        searchModeStartsWith: "Búsqueda empieza con / incluye"
      },
      error: {
        keyPageCount: "El número de paginación de claves debe ser un entero entre 5 - 100",
        page: "El número de paginación debe ser un entero entre 10 - 5000",
        maxValueDisplay: "El valor máximo de visualización debe ser un entero entre -1 y 32768",
        maxKeys: "El número máximo de claves debe ser un entero entre 100 y 100000"
      }
    },
    key: {
      label: {
        formName: {
          add: "Agregar nueva clave Redis",
          edit: "Editar clave Redis",
          append: "Agregar a clave Redis existente"
        }
      },
      field: {
        streamTimestamp: "Marca de tiempo",
        key: "Clave",
        type: "Tipo",
        index: "Índice",
        hashKey: "Clave hash",
        score: "Puntuación",
        value: "Valor"
      },
      error: {
        streamTimestamp: "La marca de tiempo es obligatoria, ya sea en formato Redis o como *",
        key: "La clave debe tener al menos un carácter",
        hashKey: "La clave hash debe tener al menos un carácter",
        score: "La puntuación del conjunto ordenado es obligatoria",
        value: "El valor es obligatorio"
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
      title: "Búsqueda",
      index: "Índice",
      query: "Consulta",
      results: "Resultados",
      noIndex: "No se encontraron índices",
      createIndex: "Crear índice",
      dropIndex: "Eliminar índice",
      indexInfo: "Info del índice",
      indexName: "Nombre del índice",
      prefix: "Prefijo de clave (opcional)",
      fieldName: "Nombre del campo",
    },
    monitor: {
      title: "Monitoreo",
      memory: "Memoria",
      opsPerSec: "Ops/seg",
      clients: "Clientes",
      blocked: "Bloqueados",
      hitsMisses: "Tasa de aciertos",
      networkIo: "Red I/O",
      slowLog: "Log lento",
      totalCommands: "Total",
      expired: "Expirados",
      evicted: "Desalojados",
      clientList: "Lista de clientes",
      topKeys: "Claves más grandes por memoria",
      killClient: "Matar cliente",
      clientKilled: "Cliente terminado",
      confirmKillClient: "¿Está seguro de terminar este cliente?",
      noKeys: "Sin claves",
      noClients: "Sin clientes",
    },
    overview: {
      noConnected: "No hay conexión a Redis.",
      overviewClients: "Lista de conectados por número de clientes",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "1 cliente";
        }
        return `${opt.length} clientes`;
      }
    },
    key: {
      label: {
        key: "Clave",
        encoding: "Codificación",
        length: "Tamaño",
        ttl: "TTL",
        ttlTitle: "Tiempo de vida",
        type: "Tipo",
        ttlNotExpire: "no expira",
        lengthString: "bytes",
        lengthItem: "elementos",
        actions: "Acciones"
      },
      list: {
        table: {
          index: "Índice",
          value: "Valor"
        }
      },
      hash: {
        table: {
          hashkey: "Clave hash",
          value: "Valor"
        }
      },
      set: {
        table: {
          value: "Miembro"
        }
      },
      zset: {
        table: {
          value: "Miembro",
          score: "Puntuación"
        }
      },
      stream: {
        table: {
          timestamp: "ID de marca de tiempo",
          field: "Campo",
          value: "Valor"
        }
      }
    },
    treeControls: {
      settings: "Configuración del árbol",
      expandAll: "Expandir todo",
      collapseAll: "Colapsar todo",
      search: {
        search: "Buscar en las claves",
        clear: "Limpiar búsqueda actual",
        placeholderClient: "Buscar en el cliente",
        placeholderServer: "Buscar en el servidor",
        info: "La búsqueda del lado del cliente significa que coincide con el texto en la entrada de búsqueda. La búsqueda del lado del servidor significa que busca en los patrones de claves como *{texto-de-búsqueda}*. Para conjuntos de búsqueda grandes, es mejor usar la búsqueda del lado del servidor. Para conjuntos más pequeños, es mejor usar la búsqueda del lado del cliente." + ` Si el número de claves supera ${p3xr.settings.maxLightKeysCount}, solo puede buscar en el servidor.`,
        largeSetInfo: "En un conjunto grande, la búsqueda del lado del cliente está deshabilitada, así que ahora solo es posible la búsqueda del lado del servidor.",
        infoDetails: "Para descubrir cómo funciona la búsqueda, consulte la configuración"
      },
      pager: {
        next: "Siguiente",
        prev: "Anterior",
        first: "Primero",
        last: "Último"
      }
    }
  },
  time: {
    loading: "Cargando...",
    years: "años",
    months: "meses",
    days: "días",
    year: "año",
    month: "mes",
    day: "día"
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
