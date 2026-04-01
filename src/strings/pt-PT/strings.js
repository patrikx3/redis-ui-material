const strings = {
  error: {
    cleared_license: "Licença eliminada",
    invalid_license: "Licença inválida",
    license_max_devices_reached: "Número máximo de lugares de dispositivos atingido",
    license_readonly: "A licença só pode ser alterada a partir do terminal do servidor.",
    server_error: "Erro do servidor, por favor tente novamente"
  },
  title: {
    donate: "Doar",
    jsonRecursive: "A expandir todas as folhas",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "Pode escolher uma ligação Redis a partir do menu inferior esquerdo.",
    statistics: "Estatísticas",
    error: "Erro",
    connectingRedis: "A ligar ao Redis ...",
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
    dropIndex: "Tem a certeza de que deseja eliminar este índice?",
    uploadBuffer: "Tem a certeza de que quer carregar estes dados binários?",
    uploadBufferDone: "Os dados binários foram carregados",
    uploadBufferDoneAndSave: "Os dados binários foram carregados e guardados no servidor",
    title: "Confirmar",
    alert: "Alerta",
    info: "Informação",
    deleteListItem: "Tem a certeza de que quer eliminar este item da lista?",
    deleteHashKey: "Tem a certeza de que quer eliminar esta chave hash?",
    deleteStreamTimestamp: "Tem a certeza de que quer eliminar este carimbo temporal do stream?",
    deleteSetMember: "Tem a certeza de que quer eliminar este membro do conjunto?",
    deleteZSetMember: "Tem a certeza de que quer eliminar este membro do conjunto ordenado?",
    deleteConnection: "Confirmar",
    deleteConnectionText: "Tem a certeza de que quer eliminar esta ligação Redis?",
    deleteNode: "Tem a certeza de que quer eliminar este nó Redis?",
    deleteAllKeys: opts => {
      return `Eliminar esta árvore e todas as suas chaves (${opts.key})?`;
    },
    socketioConnectError: "O Socket.IO não consegue ligar-se ao servidor. Pode recarregar e tentar resolver o erro de ligação; o cliente não sabe como resolvê-lo sozinho.",
    socketioAuthRequired: "É necessária autorização Socket.IO. Autentique-se com HTTP Basic Auth (nome de utilizador/palavra-passe) e recarregue.",
    deleteKey: "Tem a certeza de que quer eliminar esta chave?",
    rename: {
      title: "Tem a certeza de que quer renomear esta chave?",
      textContent: "Esta ação renomeia a chave permanentemente.",
      placeholder: "A chave Redis (obrigatório)"
    },
    ttl: {
      title: "Tem a certeza de que quer alterar o TTL desta chave?",
      textContent: "Alterar o TTL atualiza o tempo de vida desta chave. Deixe vazio para manter a chave para sempre.",
      placeholder: "O TTL da chave Redis (inteiro ou vazio)",
      placeholderPlaceholder: "Vazio significa que persiste para sempre; caso contrário, introduza um número inteiro.",
      convertTextToTime: "Converter texto em tempo",
      convertTextToTimePlaceholder: "Ex.: 1d será 86400"
    },
    license: {
      title: "Definir licença",
      textContent: "Se pretende utilizar funcionalidades pagas, contacte support@corifeus.com para solicitar uma licença. O preço é Pro 400 HUF/mês (€1/mês) ou 4.000 HUF/ano (€10/ano), e Enterprise 1.200 HUF/mês (€3/mês) ou 12.000 HUF/ano (€30/ano). O preço anual é 10x o mensal. Com 27% IVA, os totais são Pro 500 HUF/mês (€1,27/mês) ou 5.100 HUF/ano (€12,70/ano), Enterprise 1.500 HUF/mês (€3,81/mês) ou 15.200 HUF/ano (€38,10/ano). A validação da licença requer acesso à internet. A licença predefinida inclui 5 lugares. Se precisar de mais lugares, contacte-nos em support@corifeus.com.",
      placeholder: "Chave de licença"
    }
  },
  language: {
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
    downloadBuffer: "Descarregar binário",
    setBuffer: "Carregar binário",
    exportKeys: "Exportar chaves",
    exportAllKeys: (opts) => `Exportar todas as ${opts.count} chaves`,
    exportSearchResults: (opts) => `Exportar ${opts.count} resultados`,
    importKeys: "Importar chaves",
    saveWithFormatJson: "Guardar com formatação",
    formatJson: "Formatar Json",
    wrap: "Quebrar linha",
    unwrap: "Não quebrar linha",
    downloadJson: "Descarregar JSON",
    pubsubMonitor: "Monitor PubSub",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "Idioma / Language",
    ok: "OK",
    addKey: "Adicionar a esta chave",
    addKeyRoot: "Adicionar uma chave raiz",
    reloadKey: "Recarregar chave",
    reload: "Recarregar",
    close: "Fechar",
    commands: "Comandos",
    view: "Vista",
    statistics: "Estatísticas",
    refresh: "Atualizar",
    pause: "Pausar",
    resume: "Retomar",
    clear: "Limpar",
    rename: "Renomear",
    main: "Base de dados",
    cancel: "Cancelar",
    theme: "Tema",
    github: "GitHub",
    githubRepo: "Repositório",
    githubRelease: "Versões",
    githubChangelog: "Registo de alterações",
    info: "Info",
    settings: "Definições",
    connect: "Ligar",
    disconnect: "Desligar",
    overview: "Visão geral",
    console: "Consola",
    noConnections: "Sem ligações, adicione uma ligação no menu de definições.",
    noConnectionsInSettings: "Sem ligações, pode adicionar uma NOVA LIGAÇÃO acima.",
    connectionAdd: "Nova ligação",
    addGroup: "Adicionar grupo",
    extend: "Expandir",
    collapse: "Recolher",
    add: "Adicionar",
    edit: "Editar",
    save: "Guardar",
    ttl: "Definir TTL",
    license: "Definir licença",
    delete: "Eliminar",
    remove: "Remover",
    sure: "Sim",
    testConnection: "Testar ligação",
    getKey: "A carregar a chave Redis e dados associados ...",
    jsonViewShow: "Mostrar JSON",
    jsonViewEditor: "Editar JSON",
    quickConsole: "Consola Rápida"
  },
  label: {
    id: {
      nodeId: 'ID do nó',
      id: "ID da ligação",
      info: "Se não pretende alterar as propriedades: sshPassword, sshPrivateKey, password, tlsCrt, tlsKey, tlsCa, introduza o ID da ligação nessas propriedades para manter os valores intactos. Se pretende a mesma lógica para a palavra-passe do nó, introduza o ID do nó na palavra-passe do nó."
    },
    secureFeature: 'Se vir um valor que começa com P3X e parece igual, é uma funcionalidade de segurança. Para alterar as definições, basta substituí-las por valores vazios ou por outra coisa e serão guardadas. Se não alterar as definições, estas mantêm-se como estão no servidor.',
    ssh: {
      on: 'SSH ativado',
      off: 'SSH desativado',
      sshHost: 'Anfitrião SSH',
      sshPort: 'Porta SSH',
      sshUsername: 'Nome de utilizador SSH',
      sshPassword: 'Palavra-passe SSH',
      sshPrivateKey: 'Chave privada SSH'
    },
    isBuffer: opts => `[object ArrayBuffer] significa que o valor é dados binários ou o valor é maior que ${opts.maxValueAsBuffer}`,
    streamValue: `O campo e valor do stream estão numa única linha. Ex.: campo1 valor1 "campo 2" "valor 2"`,
    streamTimestampId: `'*' significa gerado automaticamente ou a especificação como <millisecondsTime>-<sequenceNumber>`,
    unableToLoadKey: ({
      key
    }) => {
      return `Não foi possível carregar esta chave: ${key}. É possível que a chave tenha sido eliminada. O erro exato está na consola.`;
    },
    bigJson: "Este objeto JSON tem mais de 10 kb, por isso certifique-se de que sabe o que está a fazer, pois algumas funções podem renderizar lentamente.",
    addNode: "Adicionar nó",
    validateJson: "Validar JSON",
    reducedFunction: `Funcionalidade reduzida`,
    tooManyKeys: opts => {
      return `Para a funcionalidade completa, o máximo de chaves permitido é ${opts.maxLightKeysCount}. Esta base de dados tem mais chaves do que o permitido, num total de ${opts.count}. A ordenação de chaves e a informação adicional da árvore estão desativadas. A pesquisa ocorre apenas no servidor em vez do cliente.`;
    },
    redisCommandNotFound: "Nenhum comando Redis correspondente encontrado ...",
    treeKeyStore: `A ordenação (comparação natural) é executada no cliente, ou seja, no navegador, o que significa que tem uma penalização para conjuntos grandes, como mais de 10k chaves; pode adicionar algum tempo à renderização da página. Não existe ordenação de chaves no Redis, apenas desta forma.`,
    socketIoTimeout: options => {
      return `O Socket.IO excedeu o tempo limite para este pedido (máx. ${options.timeout / 1000} segundos) ...`;
    },
    resizerInfo: options => {
      return `A largura mínima do painel esquerdo ou direito é ${options.width}px`;
    },
    jsonViewNotParsable: "Este valor não é analisável como JSON  ",
    ttlTitle: "Definir o TTL em segundos",
    passwordSecure: "A palavra-passe pode estar vazia, mas ainda assim mostrará caracteres; é uma funcionalidade de segurança.",
    tlsWithoutCert: "Ativar TLS sem certificado adicional",
    tlsRejectUnauthorized: "Rejeitar certificado não autorizado",
    tlsSecure: "Se vir uma configuração TLS que começa com P3X ou se todas as definições TLS parecem iguais, é uma funcionalidade de segurança. Para alterar as definições, substitua-as por valores vazios ou por outra coisa e serão guardadas. Se não alterar as definições TLS, estas mantêm-se como estão no servidor.",
    treeSeparatorEmpty: "Se o separador da árvore estiver vazio, a árvore não terá nós aninhados, apenas uma lista simples",
    treeSeparatorEmptyNote: "Sem nós aninhados, apenas uma lista simples",
    welcomeConsole: "Bem-vindo à Consola Redis",
    welcomeConsoleInfo: "Histórico com cursor CIMA ou BAIXO está ativado",
    redisListIndexInfo: "Vazio para acrescentar, -1 para inserir no início ou guardar na posição apresentada.",
    console: "Consola",
    connectiondAdd: "Adicionar ligação",
    connectiondEdit: "Editar ligação",
    connectiondView: "Ver ligação",
    connections: "Ligações",
    licenseInfo: "Licença",
    licenseEditable: "Licença editável",
    licenseEditableYes: "Sim",
    licenseEditableNo: "Não",
    licenseTerminalOnly: "A licença só pode ser configurada a partir do terminal do servidor.",
    licenseTierPolicyTitle: "Política de níveis",
    licenseTierPolicyText: "<h4>Free</h4>apenas Redis UI básico; sem tunelamento SSH, sem modo Readonly connection mode, sem Cluster/Sentinel, sem Edit JSON/Upload binary/Download binary, sem ReJSON.<br/><strong>Preço: 0 HUF/mês (€0/mês).</strong><br/><br/><h4>Pro</h4>Tunelamento SSH, modo Readonly connection mode (incluindo --readonly-connections/-r), Edit JSON, Upload binary, Download binary, ReJSON.<br/><strong>Preço base: 400 HUF/mês (€1/mês) ou 4.000 HUF/ano (€10/ano).</strong><br/><strong>Total com 27% IVA: 500 HUF/mês (€1,27/mês) ou 5.100 HUF/ano (€12,70/ano).</strong><br/><br/><h4>Enterprise</h4>Tunelamento SSH, Cluster e Sentinel, mais Edit JSON, Upload binary, Download binary, ReJSON; --readonly-connections/-r também funciona.<br/><strong>Preço base: 1.200 HUF/mês (€3/mês) ou 12.000 HUF/ano (€30/ano).</strong><br/><strong>Total com 27% IVA: 1.500 HUF/mês (€3,81/mês) ou 15.200 HUF/ano (€38,10/ano).</strong><br/><br/><h4>Regra anual</h4>O preço anual é 10x o preço mensal.<br/><br/><h4>Lugares</h4>A licença predefinida inclui 5 lugares. Se precisar de mais lugares, contacte-nos em <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><br/><h4>Teste Enterprise</h4>10 dias grátis para qualquer pessoa com um endereço de e-mail real existente (não de teste).<br/><hr/><h4>Dados de faturação por e-mail</h4>Nome, E-mail de faturação, Código do país, Código postal, Cidade, Morada, NIF (opcional).<br/><br/><h4>Pagamento</h4>O pagamento por PayPal está disponível apenas em HUF (forint); após enviar o dinheiro em <a href='https://paypal.me/corifeus'>https://paypal.me/corifeus</a> enviarei a fatura. Todos os pagamentos não são reembolsáveis.<br/><br/><h4>IVA</h4>O IVA é adicionado ao preço (27% na Hungria).<br/><hr/><h4>Contacto</h4>Se quiser dizer olá ou tiver uma pergunta, contacte <a href='mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><hr/><h4>Idioma</h4>A comunicação de faturas e licenças por e-mail é em inglês. A moeda da fatura é HUF.<br/><hr/><h4>Nota</h4>A validação da licença requer acesso à internet.",
    licenseState: "Estado",
    licenseStateActive: "Ativa",
    licenseStateInactive: "Inativa",
    licenseStateNoLicense: "Sem licença",
    licenseKeyMasked: "Chave guardada",
    licenseTier: "Nível",
    licenseValid: "Válida",
    licenseStatus: "Estado da licença",
    licenseReason: "Motivo",
    licenseCheckedAt: "Verificada em",
    licenseStartsAt: "Início em",
    licenseExpiresAt: "Expira em",
    licenseDaysLeft: "Dias restantes",
    licenseMaxDevices: "Máx. dispositivos",
    licenseActiveDevices: "Dispositivos ativos",
    licenseActiveDevicesInfo: "Se um dispositivo já não for utilizado, o seu lugar é libertado automaticamente após 75 minutos.",
    licenseCustomerEmail: "E-mail do cliente",
    licenseFeatures: "Funcionalidades",
    licenseFeaturesEmpty: "Sem funcionalidades extra",
    licenseFeatureReadonlyMode: "Modo de ligação só de leitura",
    licenseFeatureReadonlyConnectionsFlag: "Ligações só de leitura (--readonly-connections/-r)",
    licenseFeatureSsh: "Tunelamento SSH",
    licenseFeatureCluster: "Ligações Cluster",
    licenseFeatureSentinel: "Ligações Sentinel",
    licenseFeatureReJSON: "ReJSON (JSON data type)",
    keysSort: {
      on: "Ordenação de chaves ativada",
      off: "Ordenação de chaves desativada"
    },
    cluster: {
      on: "Cluster ativado",
      off: "Cluster desativado"
    },
    sentinel: {
      on: "Sentinel ativado",
      off: "Sentinel desativado",
      name: "Nome do Sentinel"
    },
    readonly: {
      on: "Só de leitura ativado",
      off: "Só de leitura desativado"
    },
    proSshOnly: "SSH está disponível em Pro ou Enterprise.",
    proReadonlyOnly: "O modo de ligação só de leitura está disponível em Pro ou Enterprise.",
    enterpriseClusterSentinelOnly: "Cluster e Sentinel estão disponíveis apenas em Enterprise.",
    theme: {
      light: "Claro",
      dark: "Escuro enterprise",
      darkNeu: "Escuro",
      darkoBluo: "Darko bluo",
      enterprise: "Enterprise",
      redis: "Redis",
      matrix: "Matrix"
    },
    connected: opts => {
      return `Ligado: ${opts.name}`;
    },
    tree: "Árvore",
    askAuth: "Pedir autorização",
    keyboardShortcuts: "Atalhos de teclado",
    about: "Sobre",
    supportedLanguages: "Idiomas suportados",
    version: "Versão",
    redisVersion: "Versão do Redis",
    modules: "Módulos",
    shortcutRefresh: "Atualizar",
    shortcutSearch: "Focar pesquisa",
    shortcutNewKey: "Nova chave",
    shortcutDisconnect: "Desligar",
    themeAuto: "Automático (sistema)",
    shortcutCommandPalette: "Paleta de comandos",
    commandPalette: "Paleta de comandos",
    noResults: "Sem resultados",
    redisCommandsReference: "Comandos Redis",
    ungrouped: "Sem grupo",
    grouped: "Agrupados",
    connectFirst: "Ligue-se primeiro a um servidor Redis",
    searchLanguage: "Pesquisar idioma...",
    exportProgress: "A exportar chaves...",
    importProgress: "A importar chaves...",
    importPreview: "Pré-visualização",
    importOverwrite: "Substituir",
    importSkip: "Ignorar",
    importConflict: "Se a chave já existir:",
    noKeysToExport: "Sem chaves para exportar",
    time: "Tempo",
    loading: "A carregar...",
    autoRefresh: "Auto",
    exportSearchHint: "Exportando apenas chaves que correspondem à pesquisa atual",
    importSearchHint: "A importação aplica-se a toda a base de dados, não apenas aos resultados da pesquisa",
    importNoKeys: "Nenhuma chave encontrada no ficheiro",
  },
  status: {
    dataCopied: "Os dados estão na área de transferência",
    licenseSaved: "Licença guardada",
    exportDone: "Exportação concluída",
    indexCreated: "Índice criado",
    indexDropped: "Índice eliminado",
    importDone: (opts) => `Importação concluída: ${opts.created} criados, ${opts.skipped} ignorados, ${opts.errors} erros`,
    nodeRemoved: "Nó removido",
    keyIsNotExisting: "Esta chave pode ter sido eliminada ou expirada.",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "Sem chaves";
      } else if (opts.keyCount === 1) {
        return "1 chave";
      } else {
        return `${opts.keyCount} chaves`;
      }
    },
    treeExpandAll: "Expandir todas as folhas da árvore. Esta operação pode ser dispendiosa e demorar algum tempo ...",
    noRedisKeys: "Não existem chaves nesta base de dados.",
    redisConnected: "Ligação ao Redis estabelecida com sucesso",
    reloadingDataInfo: "A recarregar informações de dados Redis",
    added: "Adicionado",
    saved: "Atualizado",
    cancelled: "Cancelado",
    deleted: "Eliminado",
    savedRedis: "Os dados Redis foram guardados",
    redisDisconnected: opts => {
      return `A ligação atual teve um erro: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `O índice da base de dados foi definido para ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `A chave da árvore foi eliminada (${opts.key}).`;
    },
    deletedKey: opts => {
      return `A chave foi eliminada (${opts.key}).`;
    },
    renamedKey: "Esta chave foi renomeada",
    ttlChanged: "O TTL desta chave foi alterado",
    notInteger: "Esta entrada não é um número inteiro",
    persisted: "Esta chave é persistida para sempre",
    set: "A chave foi definida/adicionada"
  },
  code: {
    "delete-connection": "Esta ligação foi eliminada, por isso foi desligado desta instância Redis.",
    "save-connection": "Esta ligação foi alterada, por isso foi desligado desta instância Redis. Pode voltar a ligar-se.",
    "readonly-connections": "Adicionar/guardar/eliminar ligações é só de leitura!",
    "readonly-connection-mode": "Esta ligação é só de leitura!",
    "list-out-of-bounds": "O índice desta lista está fora dos limites",
    "donation-ware-feature": "Esta funcionalidade está presente na versão com donativo.",
    "feature-pro-readonly-required": "O modo de ligação só de leitura requer licença Pro ou Enterprise.",
    "feature-pro-ssh-required": "O tunelamento SSH requer licença Pro ou Enterprise.",
    "feature-enterprise-cluster-sentinel-required": "Cluster e Sentinel requerem licença Enterprise.",
    "feature-pro-json-binary-required": "Edit JSON, Upload binary e Download binary requerem licença Pro ou Enterprise.",
    "feature-pro-rejson-required": "ReJSON (JSON data type) requires Pro or Enterprise license.",
    "invalid-json-value": "The value is not valid JSON.",
    "http_auth_required": "Autorização necessária: autentique-se com HTTP Basic Auth e recarregue.",
    "auto-connection-failed": "É possível que a ligação tenha sido removida e a ligação automática tenha falhado por esse motivo.",
    invalid_console_command: "Este comando não funciona através da GUI."
  },
  licenseReason: {
    LICENSE_VALID: "A licença é válida",
    LICENSE_INVALID: "A licença é inválida",
    LICENSE_MISSING: "Nenhuma chave de licença definida",
    LICENSE_DISABLED: "A licença está desativada na configuração do servidor",
    LICENSE_NOT_FOUND: "Licença não encontrada",
    LICENSE_EXPIRED: "A licença expirou",
    LICENSE_CLEARED: "A chave de licença foi eliminada",
    LICENSE_MAX_DEVICES_REACHED: "Número máximo de lugares de dispositivos atingido",
    PRODUCT_MISMATCH: "O produto da licença não corresponde"
  },
  licenseStatusValue: {
    active: "Ativa",
    deleted: "Eliminada",
    all: "Todas",
    expired: "Expirada",
    missing: "Ausente",
    inactive: "Inativa"
  },
  form: {
    error: {
      required: "Obrigatório",
      port: "A porta deve estar entre 1-65535",
      invalid: "O formulário é inválido"
    },
    connection: {
      label: {
        name: "Nome",
        group: "Grupo",
        host: "Nome do anfitrião",
        port: "Porta",
        password: "Palavra-passe",
        username: "Nome de utilizador"
      }
    },
    treeSettings: {
      maxValueDisplay: "Comprimento máximo de exibição do valor",
      maxValueDisplayInfo: "Se definido como 0, mostra valores completos. Se maior que 0, trunca para este comprimento. Se -1: para strings, oculta o valor até editar; para outros tipos, mostra o conteúdo completo.",
      maxKeys: "Número máximo de chaves",
      maxKeysInfo: "Para que a GUI não falhe, limitamos o número máximo de chaves.",
      keyCount: () => {
        return `Número de chaves: ${p3xr.state.keysRaw.length}`;
      },
      label: {
        animation: "Usar animação",
        noAnimation: "Sem animação",
        jsonFormatTwoSpace: "Formatar JSON com 2 espaços",
        jsonFormatFourSpace: "Formatar JSON com 4 espaços",
        formName: "Definições Redis",
        searchModeClient: "Modo de pesquisa no cliente",
        searchModeServer: "Modo de pesquisa no servidor",
        searchModeStartsWith: "Pesquisa com modo começa com",
        searchModeIncludes: "Pesquisa com modo inclui"
      },
      field: {
        treeSeparator: "Separador da árvore",
        treeSeparatorSelector: "Seletor do separador da árvore",
        page: "Contagem de páginas da árvore",
        keyPageCount: "Contagem de páginas de chaves",
        keysSort: "Ordenar as chaves",
        searchMode: "Modo de pesquisa",
        searchModeStartsWith: "Pesquisa começa com / inclui"
      },
      error: {
        keyPageCount: "A contagem de páginas de chaves deve ser um inteiro entre 5 - 100",
        page: "A contagem de páginas deve ser um inteiro entre 10 - 5000",
        maxValueDisplay: "O valor máximo de exibição deve ser um inteiro entre -1 e 32768",
        maxKeys: "O número máximo de chaves deve ser um inteiro entre 100 e 100000"
      }
    },
    key: {
      label: {
        formName: {
          add: "Adicionar nova chave Redis",
          edit: "Editar chave Redis",
          append: "Adicionar a chave Redis existente"
        }
      },
      field: {
        streamTimestamp: "Carimbo temporal",
        key: "Chave",
        type: "Tipo",
        index: "Índice",
        hashKey: "Chave hash",
        score: "Pontuação",
        value: "Valor"
      },
      error: {
        streamTimestamp: "O carimbo temporal é obrigatório, em formato Redis ou como *",
        key: "A chave deve ter pelo menos um carácter",
        hashKey: "A chave da tabela hash deve ter pelo menos um carácter",
        score: "A pontuação do conjunto ordenado é obrigatória",
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
      dropIndex: "Eliminar índice",
      indexInfo: "Info do índice",
      indexName: "Nome do índice",
      prefix: "Prefixo de chave (opcional)",
      fieldName: "Nome do campo",
    },
    monitor: {
      title: "Monitorização",
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
      confirmKillClient: "Tem a certeza de que deseja encerrar este cliente?",
      noKeys: "Sem chaves",
      noClients: "Sem clientes",
    },
    overview: {
      noConnected: "Não existe ligação ao Redis.",
      overviewClients: "Listar os ligados pelo número de clientes",
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
        ttlTitle: "Time To Live",
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
          hashkey: "Chave hash",
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
          timestamp: "ID do carimbo temporal",
          field: "Campo",
          value: "Valor"
        }
      }
    },
    treeControls: {
      settings: "Definições da árvore",
      expandAll: "Expandir tudo",
      collapseAll: "Recolher tudo",
      search: {
        search: "Pesquisar nas chaves",
        clear: "Limpar pesquisa atual",
        placeholderClient: "Pesquisar no lado do cliente",
        placeholderServer: "Pesquisar no lado do servidor",
        info: "A pesquisa no lado do cliente significa que corresponde ao texto no campo de pesquisa. A pesquisa no lado do servidor significa que pesquisa nos padrões de chaves como *{texto-de-pesquisa}*. Para conjuntos de pesquisa grandes, é melhor usar a pesquisa no lado do servidor. Para conjuntos de pesquisa mais pequenos, é melhor usar a pesquisa no lado do cliente." + ` Se a contagem de chaves for superior a ${p3xr.settings.maxLightKeysCount}, só pode pesquisar no lado do servidor.`,
        largeSetInfo: "Num conjunto grande, a pesquisa no lado do cliente está desativada, portanto atualmente só é possível pesquisar no lado do servidor.",
        infoDetails: "Para saber como a pesquisa funciona, verifique as definições"
      },
      pager: {
        next: "Seguinte",
        prev: "Anterior",
        first: "Primeiro",
        last: "Último"
      }
    }
  },
  time: {
    loading: "A carregar...",
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
