const strings = {
  error: {
    cleared_license: "Licença liberada",
    invalid_license: "Licença inválida",
    license_max_devices_reached: "Máximo de assentos de dispositivos atingido",
    license_readonly: "A licença só pode ser alterada no terminal do servidor.",
    server_error: "Erro no servidor, tente novamente"
  },
  title: {
    donate: "Doe",
    jsonRecursive: "Expandindo todas as folhas",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "Você pode escolher uma conexão Redis para conectar no menu inferior esquerdo.",
    statistics: "Estatísticas",
    error: "Erro",
    connectingRedis: "Conectando a Redis ...",
    socketioConnectError: "Erro Socket.IO",
    db: "DB",
    server: "Servidor",
    clients: "Clientes",
    memory: "Memória",
    persistence: "Persistência",
    stats: "Estatísticas",
    replication: "Replicação",
    cpu: "CPU",
    cluster: "Cluster",
    modules: "Módulos",
    errorstats: "Estatísticas de erros",
    commandstats: "Estatísticas de comandos",
    latencystats: "Estatísticas de latência",
    keysizes: "Tamanhos de chaves",
    threads: "Threads",
  },
  confirm: {
    dropIndex: "Tem certeza de que deseja excluir este índice?",
    uploadBuffer: "Tem certeza de que deseja fazer upload desses dados binários?",
    uploadBufferDone: "Os dados binários são carregados",
    uploadBufferDoneAndSave: "Os dados binários são carregados e salvos no servidor",
    title: "Confirmar",
    alert: "Alerta",
    info: "Informações",
    deleteListItem: "Tem certeza de que deseja excluir este item da lista?",
    deleteHashKey: "Tem certeza de que deseja excluir este item de chave hash?",
    deleteStreamTimestamp: "Tem certeza de que deseja excluir o carimbo de data/hora deste stream?",
    deleteSetMember: "Tem certeza de que deseja excluir este membro do conjunto?",
    deleteZSetMember: "Tem certeza de que deseja excluir este membro do conjunto classificado?",
    deleteConnection: "Confirmar",
    deleteConnectionText: "Tem certeza de que deseja excluir esta conexão Redis?",
    deleteNode: "Tem certeza de que deseja excluir este nó Redis?",
    deleteAllKeys: opts => {
      return `Exclua esta árvore e todas as suas chaves (${opts.key})?`;
    },
    socketioConnectError: "Socket.IO não consegue se conectar ao servidor, você pode recarregar e tentar resolver o erro de conexão sozinho, o cliente não sabe como resolvê-lo sozinho.",
    socketioAuthRequired: "É necessária autorização Socket.IO. Autentique com HTTP Basic Auth (nome de usuário/senha) e recarregue.",
    deleteKey: "Tem certeza de que deseja excluir esta chave?",
    rename: {
      title: "Tem certeza de que deseja renomear esta chave?",
      textContent: "Esta ação renomeia a chave permanentemente.",
      placeholder: "A chave Redis (obrigatória)"
    },
    ttl: {
      title: "Tem certeza de que deseja alterar o TTL desta chave?",
      textContent: "Alterar TTL atualiza o tempo de vida desta chave. Deixe em branco para manter esta chave para sempre.",
      placeholder: "O TTL da chave Redis (inteiro ou vazio)",
      placeholderPlaceholder: "Vazio significa que persiste para sempre; caso contrário, insira um número inteiro.",
      convertTextToTime: "Converter texto em hora",
      convertTextToTimePlaceholder: "Por exemplo. 1d será 86400"
    },
    license: {
      title: "Definir licença",
      textContent: "Se você quiser usar recursos pagos, entre em contato com support@corifeus.com para solicitar uma licença. O preço é Pro 400 HUF/mês (€ 1/mês) ou 4.000 HUF/ano (€ 10/ano) e Enterprise 1.200 HUF/mês (€ 3/mês) ou 12.000 HUF/ano (€ 30/ano). Anualmente é 10x mensal. Com 27% de VAT, os totais são Pro 500 HUF/mês (€ 1,27/mês) ou 5.100 HUF/ano (€ 12,70/ano), Enterprise 1.500 HUF/mês (€ 3,81/mês) ou 15.200 HUF/ano (38,10€/ano). A validação da licença requer acesso à Internet. A licença padrão inclui 5 licenças. Se precisar de mais assentos, entre em contato conosco pelo telefone support@corifeus.com.",
      placeholder: "Chave de licença"
    }
  },
  language: {
    ar: "العربية / Arabic",
    az: "Azərbaycanca / Azerbaijani",
    be: "Беларуская / Belarusian",
    bg: "Български / Bulgarian",
    bn: "বাংলা / Bengali",
    cs: "Čeština / Czech",
    da: "Dansk / Danish",
    de: "Deutsch / German",
    el: "Ελληνικά / Greek",
    en: "English",
    es: "Español / Spanish",
    et: "Eesti / Estonian",
    fi: "Suomi / Finnish",
    fil: "Filipino / Filipino",
    fr: "Français / French",
    he: "עברית / Hebrew",
    hr: "Hrvatski / Croatian",
    hu: "Magyar / Hungarian",
    hy: "Հայերեն / Armenian",
    id: "Bahasa Indonesia / Indonesian",
    it: "Italiano / Italian",
    ja: "日本語 / Japanese",
    ka: "ქართული / Georgian",
    kk: "Қазақша / Kazakh",
    km: "ខ្មែរ / Khmer",
    ko: "한국어 / Korean",
    ky: "Кыргызча / Kyrgyz",
    lt: "Lietuvių / Lithuanian",
    mk: "Македонски / Macedonian",
    ms: "Bahasa Melayu / Malay",
    ne: "नेपाली / Nepali",
    nl: "Nederlands / Dutch",
    no: "Norsk / Norwegian",
    pl: "Polski / Polish",
    "pt-BR": "Português (Brasil) / Portuguese (Brazil)",
    "pt-PT": "Português / Portuguese",
    ro: "Română / Romanian",
    ru: "Русский / Russian",
    sk: "Slovenčina / Slovak",
    sl: "Slovenščina / Slovenian",
    sr: "Српски / Serbian",
    sv: "Svenska / Swedish",
    tg: "Тоҷикӣ / Tajik",
    th: "ไทย / Thai",
    tr: "Türkçe / Turkish",
    uk: "Українська / Ukrainian",
    vi: "Tiếng Việt / Vietnamese",
    "zh-HK": "中文（香港） / Chinese (Hong Kong)",
    "zh-TW": "中文（台灣） / Chinese (Taiwan)",
    zn: "中文 / Chinese",
    bs: 'Bosanski / Bosnian',
    si: 'සිංහල / Sinhala',
    sw: 'Kiswahili / Swahili',
    ta: 'தமிழ் / Tamil'
  },
  intention: {
    copy: "Copiar",
    downloadBuffer: "Baixar binário",
    setBuffer: "Carregar binário",
    exportKeys: "Exportar chaves",
    exportAllKeys: (opts) => `Exportar todas as ${opts.count} chaves`,
    exportSearchResults: (opts) => `Exportar ${opts.count} resultados`,
    importKeys: "Importar chaves",
    saveWithFormatJson: "Salvar com formato",
    formatJson: "Formatar JSON",
    wrap: "Embrulhar",
    unwrap: "Desembrulhar",
    downloadJson: "Baixar JSON",
    pubsubMonitor: "Monitor PubSub",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "Idioma",
    ok: "OK",
    addKey: "Adicionar a esta chave",
    addKeyRoot: "Adicione uma chave raiz",
    reloadKey: "Chave de recarga",
    reload: "Recarregar",
    close: "Fechar",
    commands: "Comandos",
    view: "Ver",
    statistics: "Estatísticas",
    refresh: "Atualizar",
    pause: "Pausar",
    resume: "Retomar",
    clear: "Limpar",
    rename: "Renomear",
    main: "Banco de dados",
    cancel: "Cancelar",
    theme: "Tema",
    github: "GitHub",
    githubRepo: "Repositório",
    githubRelease: "Lançamentos",
    githubChangelog: "Registro de alterações",
    info: "Info",
    settings: "Configurações",
    connect: "Conectar",
    disconnect: "Desconectar",
    overview: "Visão geral",
    console: "Consola",
    noConnections: "Sem conexões, adicione uma conexão no menu de configurações.",
    noConnectionsInSettings: "Sem conexões, você pode adicionar uma NOVA CONEXÃO acima.",
    connectionAdd: "Nova conexão",
    addGroup: "Adicionar grupo",
    extend: "Estender",
    collapse: "Recolher",
    add: "Adicionar",
    edit: "Editar",
    save: "Salvar",
    ttl: "Definir TTL",
    license: "Definir licença",
    delete: "Excluir",
    remove: "Remover",
    sure: "Claro",
    testConnection: "Conexão de teste",
    getKey: "Carregando chave Redis e dados associados...",
    jsonViewShow: "Exibir JSON",
    jsonViewEditor: "Editar JSON",
    quickConsole: "Consola rápida",
  },
  label: {
    id: {
      nodeId: "ID do nó",
      id: "ID de conexão",
      info: "Se você não deseja alterar as propriedades de: sshPassword, sshPrivateKey, password, tlsCrt, tlsKey, tlsCa, insira o ID da conexão nessas propriedades para manter os valores das propriedades intactos. Se desejar a mesma lógica na senha do nó, insira o ID do nó na senha do nó."
    },
    secureFeature: "Se você vir um valor que começa com P3X e tem a mesma aparência, é um recurso seguro. Para alterar as configurações, basta substituir essas configurações por vazias ou qualquer outra coisa e elas serão salvas. Se você não alterar as configurações, elas serão mantidas como estão no servidor.",
    aiTranslating: "Traduzindo...",
    aiSettings: "Configurações de IA",
    aiGroqApiKey: "Chave API Groq",
    aiGroqApiKeyInfo: "Opcional. Sua própria chave API Groq para melhor desempenho. Obtenha uma chave gratuita em",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "Chave API IA salva",
    aiGroqApiKeyInvalid: "Chave API Groq inválida",
    aiGroqApiKeyNotSet: "Não definido (padrão do servidor)",
    aiEnabled: "IA ativada",
    aiEnabledYes: "Sim",
    aiEnabledNo: "Não",
    aiRouteViaNetwork: "Rota via network.corifeus.com",
    aiRoutingDirect: "Consultas vão diretamente para o Groq usando sua própria chave API, sem passar pelo network.corifeus.com.",
    aiRoutingNetwork: "Consultas de IA são roteadas via network.corifeus.com. Se você tem sua própria chave API Groq gratuita, pode desativar esta opção.",
    ssh: {
      on: "SSH ativado",
      off: "SSH desativado",
      sshHost: "Anfitrião SSH",
      sshPort: "Porta SSH",
      sshUsername: "Nome de usuário SSH",
      sshPassword: "Senha SSH",
      sshPrivateKey: "Chave privada SSH"
    },
    isBuffer: opts => `[objeto ArrayBuffer] significa que o valor são dados binários ou o valor é maior que ${opts.maxValueAsBuffer}`,
    streamValue: `O campo e o valor do fluxo são oneliner. Ex.: campo1 valor1 "campo 2" "valor 2"`,
    streamTimestampId: `'*' significa gerado automaticamente ou a especificação como <millisecondsTime>-<sequenceNumber>`,
    unableToLoadKey: ({
      key
    }) => {
      return `Não foi possível carregar esta chave: ${key}. Possível, a chave foi excluída. O erro exato está no console.`;
    },
    bigJson: "Este objeto JSON tem mais de 10 kb, portanto, saiba o que está fazendo, pois algumas funções podem ter renderização lenta.",
    addNode: "Adicionar nó",
    validateJson: "Validar JSON",
    reducedFunction: `Funcionalidade reduzida`,
    tooManyKeys: opts => {
      return `Para o máximo de funções permitidas, o total de teclas é ${opts.maxLightKeysCount} contar. Este banco de dados tem mais do que as chaves permitidas no total ${opts.count}. A classificação de chaves e as informações adicionais da árvore sofisticada estão desativadas. A pesquisa está acontecendo apenas no servidor, e não na pesquisa do cliente.`;
    },
    redisCommandNotFound: "Nenhuma correspondência de comando Redis encontrada...",
    treeKeyStore: `A classificação (comparação natural) é executada no cliente, também conhecido como navegador, o que significa que há uma penalidade para conjuntos grandes, como mais de 10 mil chaves, podendo adicionar um pouco de tempo à renderização da página. Não há classificação de chave em Redis, apenas assim.`,
    socketIoTimeout: options => {
      return `O Socket.IO expirou para esta solicitação (máx. ${options.timeout / 1000} segundos) ...`;
    },
    resizerInfo: options => {
      return `A largura mínima do painel esquerdo ou direito é ${options.width}pixels`;
    },
    jsonViewNotParsable: "Este valor não é analisável JSON  ",
    ttlTitle: "Defina TTL em segundos",
    passwordSecure: "A senha pode estar vazia, mas ainda assim mostrará caracteres, este é um recurso de segurança.",
    tlsWithoutCert: "Habilite TLS sem certificado adicional",
    tlsRejectUnauthorized: "Rejeitar certificado não autorizado",
    tlsSecure: "Se você vir uma configuração TLS que começa com P3X ou todas as configurações TLS parecem iguais, é um recurso seguro. Para alterar as configurações, basta substituir essas configurações por vazias ou qualquer outra coisa e elas serão salvas. Se você não alterar as configurações de TLS, as configurações serão mantidas como estão no servidor.",
    treeSeparatorEmpty: "Se o separador da árvore estiver vazio, a árvore não terá nós aninhados, apenas uma lista pura",
    treeSeparatorEmptyNote: "Sem nós aninhados, apenas uma lista pura",
    welcomeConsole: "Bem-vindo ao console Redis",
    welcomeConsoleInfo: "O histórico do cursor PARA CIMA ou PARA BAIXO está ativado",
    redisListIndexInfo: "Vazio para anexar, -1 para preceder ou salvar na posição mostrada.",
    console: "Consola",
    connectiondAdd: "Adicionar conexão",
    connectiondEdit: "Editar conexão",
    connectiondView: "Ver conexão",
    connections: "Conexões",
    licenseInfo: "Licença",
    licenseEditable: "Licença editável",
    licenseEditableYes: "Sim",
    licenseEditableNo: "Não",
    licenseTerminalOnly: "A licença só pode ser configurada no terminal do servidor.",
    licenseTierPolicyTitle: "Política de nível",
    licenseTierPolicyText: "<h4>Free</h4>core Redis Somente UI; sem tunelamento SSH, sem modo de conexão somente leitura, sem Cluster/Sentinel, sem edição JSON/Upload binário/Download binário, sem ReJSON.<br/><strong>Preço: 0 HUF/mês (€0/mês).</strong><br/><br/><h4>Pro</h4>SSH tunelamento, modo de conexão somente leitura (incluindo --readonly-connections/-r), Editar JSON, Carregar binário, Baixar binário, ReJSON.<br/><strong>Preço base: 400 HUF/mês (€1/mês) ou 4.000 HUF/ano (€10/ano).</strong><br/><strong>Total com 27% VAT: 500 HUF/mês (€1,27/mês) ou 5.100 HUF/ano (€ 12,70/ano).</strong><br/><br/><h4>Enterprise</h4>SSH tunelamento, Cluster e Sentinel, mais Editar JSON, Carregar binário, Baixar binário, ReJSON; --readonly-connections/-r também funciona.<br/><strong>Preço base: 1.200 HUF/mês (€3/mês) ou 12.000 HUF/ano (30€/ano).</strong><br/><strong>Total com 27% VAT: 1.500 HUF/mês (3,81€/mês) ou 15.200 HUF/ano (€ 38,10/ano).</strong><br/><br/><h4>Regra anual</h4>O preço anual é 10x o mensal preço.<br/><br/><h4>Assentos</h4>A licença padrão inclui 5 assentos. Se precisar de mais assentos, entre em contato conosco em <a href='mailto:mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><br/><h4>Teste empresarial</h4>10 dias grátis para qualquer pessoa com um endereço de e-mail real existente (sem teste email).<br/><hr/><h4>Informações de faturamento no e-mail</h4>Nome, e-mail de cobrança, código do país, código postal, cidade, endereço, VAT ID (opcional).<br/><br/><h4>Pagamento</h4>PayPal o pagamento está disponível apenas em HUF (forint); após enviar o dinheiro @ <a href='https://paypal.me/corifeus'>https://paypal.me/corifeus</a> enviarei uma fatura. Todos os pagamentos não são reembolsáveis. <br/><br/><h4>VAT</h4>VAT é adicionado ao preço (27% em Hungria).<br/><hr/><h4>Contato</h4>Se você quiser dizer oi ou tiver alguma dúvida, entre em contato <a href='mailto:mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><hr/><h4>Idioma</h4>A comunicação por e-mail de fatura e licença é feita em inglês. A moeda da fatura é HUF.<br/><hr/><h4>Nota</h4>A validação da licença requer acesso à Internet.",
    licenseState: "Estado",
    licenseStateActive: "Ativo",
    licenseStateInactive: "Inativo",
    licenseStateNoLicense: "Sem licença",
    licenseKeyMasked: "Chave salva",
    licenseTier: "Nível",
    licenseValid: "Válido",
    licenseStatus: "Status da licença",
    licenseReason: "Razão",
    licenseCheckedAt: "Verificado em",
    licenseStartsAt: "Começa às",
    licenseExpiresAt: "Expira em",
    licenseDaysLeft: "Dias restantes",
    licenseMaxDevices: "Máximo de dispositivos",
    licenseActiveDevices: "Dispositivos ativos",
    licenseActiveDevicesInfo: "Se um dispositivo não for mais utilizado, seu assento será liberado automaticamente após 75 minutos.",
    licenseCustomerEmail: "E-mail do cliente",
    licenseFeatures: "Recursos",
    licenseFeaturesEmpty: "Sem recursos extras",
    licenseFeatureReadonlyMode: "Modo de conexão somente leitura",
    licenseFeatureReadonlyConnectionsFlag: "Conexões somente leitura (--readonly-connections/-r)",
    licenseFeatureSsh: "Tunelamento SSH",
    licenseFeatureCluster: "Conexões Cluster",
    licenseFeatureSentinel: "Conexões Sentinel",
    licenseFeatureReJSON: "ReJSON (tipo de dados JSON)",
    keysSort: {
      on: "Classificação de chaves ativada",
      off: "Classificação de chaves desativada"
    },
    cluster: {
      on: "Cluster ativado",
      off: "Cluster desativado"
    },
    sentinel: {
      on: "Sentinel ativado",
      off: "Sentinel desativado",
      name: "Nome Sentinel"
    },
    readonly: {
      on: "Somente leitura ativado",
      off: "Somente leitura desativado"
    },
    proSshOnly: "SSH está disponível em Pro ou Enterprise.",
    proReadonlyOnly: "O modo de conexão somente leitura está disponível no Pro ou Enterprise.",
    enterpriseClusterSentinelOnly: "Cluster e Sentinel estão disponíveis apenas no Enterprise.",
    theme: {
      light: "Luz",
      dark: "Empresa obscura",
      darkNeu: "Escuro",
      darkoBluo: "Azul escuro",
      enterprise: "Empresa",
      redis: "Redis",
      matrix: "Matriz"
    },
    connected: opts => {
      return `Conectado: ${opts.name}`;
    },
    tree: "Árvore",
    askAuth: "Peça autorização",
    keyboardShortcuts: "Keyboard Shortcuts",
    about: "About",
    supportedLanguages: "Supported Languages",
    version: "Version",
    redisVersion: "Redis Version",
    modules: "Módulos",
    shortcutRefresh: "Refresh",
    shortcutSearch: "Focus Search",
    shortcutNewKey: "New Key",
    shortcutDisconnect: "Desconectar",
    themeAuto: "Auto (system)",
    shortcutCommandPalette: "Command Palette",
    commandPalette: "Command Palette",
    noResults: "No results",
    redisCommandsReference: "Comandos Redis",
    ungrouped: "Sem grupo",
    grouped: "Grouped",
    connectFirst: "Conecte-se primeiro a um servidor Redis",
    searchLanguage: "Pesquisar idioma...",
    exportProgress: "Exportando chaves...",
    importProgress: "Importando chaves...",
    importPreview: "Visualização",
    importOverwrite: "Sobrescrever",
    importSkip: "Pular",
    importConflict: "Se a chave já existir:",
    noKeysToExport: "Nenhuma chave para exportar",
    time: "Tempo",
    loading: "Carregando...",
    autoRefresh: "Auto",
    exportSearchHint: "Exportando apenas chaves que correspondem à pesquisa atual",
    importSearchHint: "A importação se aplica a todo o banco de dados, não apenas aos resultados da pesquisa",
    importNoKeys: "Nenhuma chave encontrada no arquivo",
  },
  status: {
    dataCopied: "Os dados estão na área de transferência",
    licenseSaved: "Licença salva",
    exportDone: "Exportação concluída",
    indexCreated: "Índice criado",
    indexDropped: "Índice excluído",
    importDone: (opts) => `Importação concluída: ${opts.created} criados, ${opts.skipped} pulados, ${opts.errors} erros`,
    nodeRemoved: "Nó removido",
    keyIsNotExisting: "Esta chave pode ter sido excluída ou expirada.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "Sem chave";
      } else if (opts.keyCount === 1) {
        return "1 chave";
      } else {
        return `${opts.keyCount} chaves`;
      }
    },
    treeExpandAll: "Expanda todas as folhas das árvores. Esta operação pode ser cara e levar tempo ...",
    noRedisKeys: "Não há chaves neste banco de dados.",
    redisConnected: "Redis conectado com sucesso",
    reloadingDataInfo: "Recarregando informações de dados Redis",
    added: "Adicionado",
    saved: "Atualizado",
    cancelled: "Cancelado",
    deleted: "Excluído",
    savedRedis: "Os dados Redis são salvos",
    redisDisconnected: opts => {
      return `A conexão atual apresentou um erro: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `O índice db definido como ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `A chave da árvore foi excluída (${opts.key}).`;
    },
    deletedKey: opts => {
      return `A chave foi excluída (${opts.key}).`;
    },
    renamedKey: "Esta chave foi renomeada",
    ttlChanged: "O TTL desta chave foi alterado",
    notInteger: "Esta entrada não é um número inteiro",
    persisted: "Esta chave persiste para sempre",
    set: "A chave está definida/adicionada"
  },
  code: {
    "delete-connection": "Esta conexão foi excluída, portanto você está desconectado desta instância Redis.",
    "save-connection": "Esta conexão foi alterada, portanto você está desconectado desta instância Redis. Você pode se reconectar.",
    "readonly-connections": "As conexões adicionar/salvar/excluir são somente leitura!",
    "readonly-connection-mode": "Esta conexão está no modo somente leitura!",
    "list-out-of-bounds": "Este índice de lista está fora dos limites",
    "donation-ware-feature": "Esse recurso está presente na versão de doação.",
    "feature-pro-readonly-required": "O modo de conexão somente leitura requer licença Pro ou Enterprise.",
    "feature-pro-ssh-required": "O tunelamento SSH requer licença Pro ou Enterprise.",
    "feature-enterprise-cluster-sentinel-required": "Cluster e Sentinel requerem licença empresarial.",
    "feature-pro-json-binary-required": "Editar JSON, Upload binário e Download binário requerem licença Pro ou Enterprise.",
    "feature-pro-rejson-required": "ReJSON (tipo de dados JSON) requer licença Pro ou Enterprise.",
    "invalid-json-value": "O valor não é válido JSON.",
    "http_auth_required": "Autorização necessária: autentique com HTTP Basic Auth e recarregue.",
    "auto-connection-failed": "Possível, a conexão foi removida e a conexão automática falhou por causa disso.",
    invalid_console_command: "Este comando não está funcionando por meio de GUI."
  },
  licenseReason: {
    LICENSE_VALID: "A licença é válida",
    LICENSE_INVALID: "A licença é inválida",
    LICENSE_MISSING: "Nenhuma chave de licença está definida",
    LICENSE_DISABLED: "A licença está desativada na configuração do servidor",
    LICENSE_NOT_FOUND: "A licença não foi encontrada",
    LICENSE_EXPIRED: "A licença expirou",
    LICENSE_CLEARED: "A chave de licença foi apagada",
    LICENSE_MAX_DEVICES_REACHED: "Máximo de assentos de dispositivos atingido",
    PRODUCT_MISMATCH: "O produto licenciado não corresponde"
  },
  licenseStatusValue: {
    active: "Ativo",
    deleted: "Excluído",
    all: "Todos",
    expired: "Expirado",
    missing: "Desaparecido",
    inactive: "Inativo"
  },
  form: {
    error: {
      required: "Obrigatório",
      port: "A porta está entre 1-65535",
      invalid: "O formulário é inválido"
    },
    connection: {
      label: {
        name: "Nome",
        group: "Group",
        host: "Nome do host",
        port: "Porto",
        password: "Senha",
        username: "Nome de usuário"
      }
    },
    treeSettings: {
      maxValueDisplay: "Comprimento máximo da string de exibição do valor",
      maxValueDisplayInfo: "Se definido como 0, mostra valores completos. Se for maior que 0, trunque para esse comprimento. Se -1: para strings, oculta o valor até editar; para outros tipos, mostre o conteúdo completo.",
      maxKeys: "A contagem máxima de chaves",
      maxKeysInfo: "Para que GUI não trave, limitamos a contagem máxima de chaves.",
      keyCount: () => {
        return `Número de chaves: ${p3xr.state.keysRaw.length}`;
      },
      label: {
        animation: "Usar animação",
        noAnimation: "Sem animação",
        jsonFormatTwoSpace: "Formate JSON com 2 espaços",
        jsonFormatFourSpace: "Formate JSON com 4 espaços",
        formName: "Configurações Redis",
        searchModeClient: "Modo de pesquisa de cliente",
        searchModeServer: "Modo de pesquisa de servidor",
        searchModeStartsWith: "Pesquisa com começa com modo",
        searchModeIncludes: "Pesquisa inclui modo"
      },
      field: {
        treeSeparator: "Separador de árvores",
        treeSeparatorSelector: "Seletor de separador de árvore",
        page: "Contagem de paginação em árvore",
        keyPageCount: "Contagem de paginação principal",
        keysSort: "Classifique as chaves",
        searchMode: "Modo de pesquisa",
        searchModeStartsWith: "A pesquisa começa com/inclui"
      },
      error: {
        keyPageCount: "A contagem de páginas chave deve ser um número inteiro entre 5 e 100",
        page: "A contagem de páginas deve ser um número inteiro entre 10 e 5.000",
        maxValueDisplay: "O valor máximo de exibição deve ser um número inteiro entre -1 e 32768",
        maxKeys: "O valor máximo de contagem de chaves deve ser um número inteiro entre 100 e 100.000"
      }
    },
    key: {
      label: {
        formName: {
          add: "Adicionar nova chave Redis",
          edit: "Editar chave Redis",
          append: "Adicionar à chave Redis existente"
        }
      },
      field: {
        streamTimestamp: "Carimbo de data e hora",
        key: "Chave",
        type: "Tipo",
        index: "Índice",
        hashKey: "Chave hash",
        score: "Pontuação",
        value: "Valor"
      },
      error: {
        streamTimestamp: "O carimbo de data/hora é obrigatório, no formato Redis ou como *",
        key: "A chave é, pelo menos, um caractere",
        hashKey: "A chave da tabela hash tem pelo menos um caractere",
        score: "A pontuação do conjunto classificado é obrigatória",
        value: "O valor é obrigatório"
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
      title: "Pesquisar",
      index: "Índice",
      query: "Consulta",
      results: "Resultados",
      noIndex: "Nenhum índice encontrado",
      createIndex: "Criar índice",
      dropIndex: "Excluir índice",
      indexInfo: "Info do índice",
      indexName: "Nome do índice",
      prefix: "Prefixo de chave (opcional)",
      fieldName: "Nome do campo",
    },
    monitor: {
      title: "Monitoramento",
      memory: "Memória",
      opsPerSec: "Ops/seg",
      clients: "Clientes",
      blocked: "Bloqueados",
      hitsMisses: "Taxa de acerto",
      networkIo: "Rede I/O",
      slowLog: "Log lento",
      totalCommands: "Total",
      expired: "Expirados",
      evicted: "Despejados",
      clientList: "Lista de clientes",
      topKeys: "Maiores chaves por memória",
      killClient: "Encerrar cliente",
      clientKilled: "Cliente encerrado",
      confirmKillClient: "Tem certeza de que deseja encerrar este cliente?",
      noKeys: "Sem chaves",
      noClients: "Sem clientes",
    },
    overview: {
      noConnected: "Não há conexão com Redis.",
      overviewClients: "Liste os conectados pela contagem de clientes",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "1 cliente";
        }
        return `${opt.length} clientes`;
      }
    },
    key: {
      label: {
        key: "Chave",
        encoding: "Codificação",
        length: "Tamanho",
        ttl: "TTL",
        ttlTitle: "Hora de viver",
        type: "Tipo",
        ttlNotExpire: "não expira",
        lengthString: "bytes",
        lengthItem: "itens",
        actions: "Ações"
      },
      list: {
        table: {
          index: "Índice",
          value: "Valor"
        }
      },
      hash: {
        table: {
          hashkey: "Chave de hash",
          value: "Valor"
        }
      },
      set: {
        table: {
          value: "Membro"
        }
      },
      zset: {
        table: {
          value: "Membro",
          score: "Pontuação"
        }
      },
      stream: {
        table: {
          timestamp: "ID do carimbo de data/hora",
          field: "Campo",
          value: "Valor"
        }
      }
    },
    treeControls: {
      settings: "Configurações de árvore",
      expandAll: "Expandir tudo",
      collapseAll: "Recolher tudo",
      search: {
        search: "Pesquise nas chaves",
        clear: "Limpe a pesquisa atual para definir como vazia",
        placeholderClient: "Pesquisar no lado do cliente",
        placeholderServer: "Lado do servidor de pesquisa",
        info: "A pesquisa do lado do cliente significa que ela corresponde ao texto na entrada de pesquisa. A pesquisa no lado do servidor significa que é como pesquisar nos padrões de chaves como *{search-text}*. Para conjuntos de pesquisa grandes, é melhor usar a pesquisa no lado do servidor. Para conjuntos de pesquisa menores, é melhor usar o modo de pesquisa do lado do cliente." + ` Se a contagem de chaves acabar ${p3xr.settings.maxLightKeysCount}, você só poderá pesquisar no lado do servidor.`,
        largeSetInfo: "Em um conjunto grande, a pesquisa do lado do cliente está desativada. então, no momento, apenas a pesquisa no lado do servidor é possível.",
        infoDetails: "Para saber como funciona a pesquisa, verifique as configurações"
      },
      pager: {
        next: "Próximo",
        prev: "Anterior",
        first: "Primeiro",
        last: "Último"
      }
    }
  },
  time: {
    loading: "Carregando...",
    years: "anos",
    months: "meses",
    days: "dias",
    year: "ano",
    month: "mês",
    day: "dia"
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
