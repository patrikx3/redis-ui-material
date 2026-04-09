const strings = {
  error: {
    server_error: "Erro do servidor, por favor tente novamente",
    aiPromptTooLong: "O prompt de AI é demasiado longo (máximo de 4096 caracteres)",
  },
  title: {
    donate: "Doar",
    donateTitle: "Apoie o P3X Redis UI",
    donateDescription: "O P3X Redis UI é um projeto gratuito e de código aberto. Os custos de manutenção da aplicação, funcionalidades de IA, imagens Docker, servidores e infraestrutura saem do bolso do programador. Se considera esta ferramenta útil, por favor considere apoiar o seu desenvolvimento contínuo com um donativo. Cada contribuição ajuda a manter o projeto vivo e em crescimento. Obrigado!",
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
    threads: "Threads"
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
    delete: "Eliminar?",
    deleteAllKeys: opts => {
      return `Eliminar esta árvore e todas as suas chaves (${opts.key})?`;
    },
    deleteSearchKeys: opts => {
      return `Tem a certeza de que deseja eliminar todas as chaves correspondentes a "${opts.pattern}"? Encontradas ${opts.count} chaves.`;
    },
    socketioConnectError: "O Socket.IO não consegue ligar-se ao servidor. Pode recarregar e tentar resolver o erro de ligação; o cliente não sabe como resolvê-lo sozinho.",
    socketioAuthRequired: "É necessária autorização Socket.IO. Autentique-se com HTTP Basic Auth (nome de utilizador/palavra-passe) e recarregue.",
    invalidCredentials: "Nome de utilizador ou palavra-passe inválidos.",
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
    deleteAllKeysMenu: (opts) => `Eliminar tudo ${opts.count}`,
    importKeys: "Importar chaves",
    deleteSearchKeys: (opts) => `Eliminar ${opts.count} chaves correspondentes`,
    saveWithFormatJson: "Guardar com formatação",
    formatJson: "Formatar Json",
    wrap: "Quebrar linha",
    unwrap: "Não quebrar linha",
    downloadJson: "Descarregar JSON",
    pubsubMonitor: "PubSub",
    pulse: "Pulse",
    profiler: "Profiler",
    memoryAnalysis: "Analysis",
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
    logout: "Sair",
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
    fieldTtl: "TTL do campo",
    digest: "Resumo",
    delete: "Eliminar",
    remove: "Remover",
    areYouSure: "Tem a certeza?",
    sure: "Sim",
    testConnection: "Testar ligação",
    getKey: "A carregar a chave Redis e dados associados ...",
    jsonViewShow: "Mostrar JSON",
    jsonViewEditor: "Editar JSON",
    quickConsole: "Consola Rápida",
    moveUp: "Mover para cima",
    moveDown: "Mover para baixo"
  },
  label: {
    id: {
      nodeId: 'ID do nó',
      id: "ID da ligação",
      info: "Se não pretende alterar as propriedades: sshPassword, sshPrivateKey, password, tlsCrt, tlsKey, tlsCa, introduza o ID da ligação nessas propriedades para manter os valores intactos. Se pretende a mesma lógica para a palavra-passe do nó, introduza o ID do nó na palavra-passe do nó."
    },
    secureFeature: 'Se vir um valor que começa com P3X e parece igual, é uma funcionalidade de segurança. Para alterar as definições, basta substituí-las por valores vazios ou por outra coisa e serão guardadas. Se não alterar as definições, estas mantêm-se como estão no servidor.',
    aiTranslating: "A traduzir...",
    aiSettings: "Definições de IA",
    aiGroqApiKey: "Chave API Groq",
    aiGroqApiKeyInfo: "Opcional. A sua própria chave API Groq para melhor desempenho. Obtenha uma chave gratuita em",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "Chave API IA guardada",
    aiGroqApiKeyInvalid: "Chave API Groq inválida",
    aiGroqApiKeyNotSet: "Não definido (predefinição do servidor)",
    aiEnabled: "IA ativada",
    aiEnabledYes: "Sim",
    aiEnabledNo: "Não",
    aiRouteViaNetwork: "Rota via network.corifeus.com",
    aiRoutingDirect: "As consultas vão diretamente para o Groq usando a sua própria chave API, sem passar pelo network.corifeus.com.",
    aiRoutingNetwork: "As consultas de IA são encaminhadas via network.corifeus.com. Se tiver a sua própria chave API Groq gratuita, pode desativar esta opção para encaminhar diretamente para o Groq sem network.corifeus.com.",
    aiMaxTokens: "Máximo de tokens de IA",
    aiMaxTokensInfo: "Número máximo de tokens para respostas de IA. Valores mais elevados permitem respostas mais longas, mas podem usar mais créditos de API.",
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
    languageAuto: "Auto (system)",
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
    type: "Tipo",
    time: "Tempo",
    format: "Formato",
    loading: "A carregar...",
    autoRefresh: "Auto",
    exportSearchHint: "Exportando apenas chaves que correspondem à pesquisa atual",
    importSearchHint: "A importação aplica-se a toda a base de dados, não apenas aos resultados da pesquisa",
    deleteSearchHint: "Eliminar todas as chaves correspondentes à pesquisa atual",
    deletingSearchKeys: "A eliminar chaves correspondentes...",
    importNoKeys: "Nenhuma chave encontrada no ficheiro",
    desktopNotifications: "Notificações do ambiente de trabalho",
    desktopNotificationsEnabled: "Ativar notificações do ambiente de trabalho",
    desktopNotificationsInfo: "Receba notificações do SO para desconexões e reconexões do Redis quando a aplicação não estiver em foco."
  },
  status: {
    dataCopied: "Os dados estão na área de transferência",
    exportDone: "Exportação concluída",
    deletedSearchKeys: (opts) => `${opts.count} chaves eliminadas`,
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
    set: "A chave foi definida/adicionada",
    connectionRestored: "Ligação restaurada"
  },
  code: {
    "delete-connection": "Esta ligação foi eliminada, por isso foi desligado desta instância Redis.",
    "save-connection": "Esta ligação foi alterada, por isso foi desligado desta instância Redis. Pode voltar a ligar-se.",
    "readonly-connections": "Adicionar/guardar/eliminar ligações é só de leitura!",
    "readonly-connection-mode": "Esta ligação é só de leitura!",
    "list-out-of-bounds": "O índice desta lista está fora dos limites",
    "invalid-json-value": "The value is not valid JSON.",
    "http_auth_required": "Autorização necessária: autentique-se com HTTP Basic Auth e recarregue.",
    "auto-connection-failed": "É possível que a ligação tenha sido removida e a ligação automática tenha falhado por esse motivo.",
    invalid_console_command: "Este comando não funciona através da GUI.",
    "AI_DISABLED": "IA está desativada. Ative nas definições de IA.",
    "AI_PROMPT_REQUIRED": "Consulta de IA é obrigatória.",
    "GROQ_API_KEY_READONLY": "A chave Groq API é apenas de leitura e não pode ser modificada.",
    "blocked_api_access": "O seu plano Groq API não permite acesso a este modelo. Atualize o seu plano Groq ou utilize o proxy network.corifeus.com.",
    "rate_limit": "Limite de taxa de IA atingido. Tente novamente mais tarde ou utilize a sua própria chave Groq API nas definições."
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
      keyCount: (opts) => {
        return `Número de chaves: ${opts?.keyCount ?? 0}`;
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
        value: "Valor",
        errorRate: "Taxa de erro",
        capacity: "Capacidade",
        topk: "Top K",
        width: "Largura",
        depth: "Profundidade",
        decay: "Decaimento",
        compression: "Compressão",
        increment: "Incremento",
        item: "Item",
        vectorValues: "Valores do vetor (separados por vírgula)",
        element: "Nome do elemento",
      },
      error: {
        streamTimestamp: "O carimbo temporal é obrigatório, em formato Redis ou como *",
        key: "A chave deve ter pelo menos um carácter",
        hashKey: "A chave da tabela hash deve ter pelo menos um carácter",
        score: "A pontuação do conjunto ordenado é obrigatória",
        value: "O valor é obrigatório",
        errorRate: "A taxa de erro deve estar entre 0 e 1 (ex. 0,01)",
        capacity: "A capacidade deve ser um inteiro positivo",
        topk: "Top K deve ser um inteiro positivo",
        width: "A largura deve ser um inteiro positivo",
        depth: "A profundidade deve ser um inteiro positivo",
        item: "O item é obrigatório"
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
      hybridMode: "Pesquisa híbrida (FT.HYBRID)",
      vectorField: "Campo vetorial",
      vectorValues: "Valores vetoriais",
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
      rss: "RSS",
      peak: "Pico",
      fragmentation: "Fragmentação",
      hitsAndMisses: "Acertos / Erros",
      noClients: "Sem clientes",
      slotStats: "Estatísticas de slots do cluster",
    },
    analysis: {
      title: "Análise de Memória",
      runAnalysis: "Executar Análise",
      running: "A analisar...",
      typeDistribution: "Distribuição de Tipos",
      prefixMemory: "Memória por Prefixo",
      topKeysByMemory: "Maiores Chaves por Memória",
      expirationOverview: "Expiração de Chaves",
      memoryBreakdown: "Discriminação de Memória",
      keysScanned: "Chaves Analisadas",
      totalMemory: "Memória Total",
      rssMemory: "Memória RSS",
      peakMemory: "Memória de Pico",
      luaMemory: "Memória Lua",
      overheadMemory: "Sobrecarga",
      datasetMemory: "Conjunto de Dados",
      fragmentation: "Fragmentação",
      allocator: "Alocador",
      withTTL: "Com TTL",
      persistent: "Persistentes",
      avgTTL: "TTL Médio",
      prefix: "Prefixo",
      keyCount: "Contagem de Chaves",
      memoryUsage: "Utilização de Memória",
      noPrefix: "(sem prefixo)",
      topN: "Top N",
      maxScanKeys: "Máx. Chaves Analisadas",
      type: "Tipo",
      noData: "Sem dados. Clique em Executar Análise para começar.",
      exportAll: "Exportar Tudo"
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
        compression: "Compressão",
        aiRateLimited: "Limite de pedidos de IA atingido. Tente novamente mais tarde ou utilize a sua própria chave de API do Groq nas Definições.",
        aiError: "A consulta de IA falhou",
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
      },
      timeseries: {
        chart: "Gráfico",
        info: "Informação",
        addPoint: "Adicionar ponto",
        from: "De (ms ou -)",
        to: "Até (ms ou +)",
        aggregation: "Agregação",
        timeBucket: "Bucket (ms)",
        none: "Nenhum",
        dataPoints: "pontos de dados",
        labels: "Etiquetas",
        rules: "Regras",
        retention: "Retenção",
        timestamp: "Carimbo temporal",
        value: "Valor",
        retentionHint: "0 = sem expiração, ou milissegundos",
        duplicatePolicy: "Política de duplicados",
        labelsHint: "chave1 valor1 chave2 valor2",
        timestampHint: "'*' significa gerado automaticamente, ou carimbo temporal em milissegundos",
        editAllHint: "Um ponto de dados por linha: carimbo_temporal valor (o carimbo temporal pode ser * para automático)",
        autoSpread: "Intervalo de dispersão automático *",
        formula: "Fórmula",
        formulaLinear: "Linear",
        formulaRandom: "Aleatório",
        formulaSawtooth: "Dente de serra",
        formulaPoints: "Pontos",
        formulaAmplitude: "Amplitude",
        formulaOffset: "Desvio",
        generate: "Gerar",
        exportChart: "Exportar PNG",
        overlay: "Sobrepor chaves",
        overlayHint: "Chaves separadas por vírgulas",
        mrangeFilter: "Filtro de etiquetas",
        bulkMode: "Geração em massa",
        mrangeHint: "ex. sensor=temp"
      },
      probabilistic: {
        info: "Informação",
        addItem: "Adicionar Item",
        checkItem: "Verificar Item",
        item: "Item",
        exists: "Existe",
        doesNotExist: "Não existe",
        topkList: "Itens Principais",
        topkCount: "Contagem",
        queryCount: "Contagem de Consultas",
        queryResult: "Resultado da Consulta",
        addedSuccessfully: "Item adicionado com sucesso",
        deletedSuccessfully: "Item eliminado com sucesso",
        quantile: "Quantil",
        quantileResult: "Resultado",
        noItems: "Sem itens para apresentar",
        resetConfirm: "Repor todos os dados neste T-Digest?"
      },
      vectorset: {
        info: "Informações",
        elements: "Elementos",
        similarity: "Pesquisa por Similaridade",
        searchByElement: "Pesquisar por elemento",
        searchByVector: "Pesquisar por vetor",
        vectorValues: "Valores do vetor",
        element: "Elemento",
        score: "Pontuação",
        count: "Contagem",
        addElement: "Adicionar Elemento",
        attributes: "Atributos",
        noAttributes: "Sem atributos",
        dimensions: "Dimensões",
        removeConfirm: "Remover este elemento do VectorSet?",
        noElements: "Sem elementos",
        filter: "Filtro",
        searchComplete: "Pesquisa concluída",
      }
    },
    treeControls: {
      settings: "Definições da árvore",
      expandAll: "Expandir tudo",
      collapseAll: "Recolher tudo",
      level: "Nível",
      search: {
        search: "Pesquisar nas chaves",
        clear: "Limpar pesquisa atual",
        placeholderClient: "Pesquisar no lado do cliente",
        placeholderServer: "Pesquisar no lado do servidor",
        info: (opts) => "A pesquisa no lado do cliente significa que corresponde ao texto no campo de pesquisa. A pesquisa no lado do servidor significa que pesquisa nos padrões de chaves como *{texto-de-pesquisa}*. Para conjuntos de pesquisa grandes, é melhor usar a pesquisa no lado do servidor. Para conjuntos de pesquisa mais pequenos, é melhor usar a pesquisa no lado do cliente." + ` Se a contagem de chaves for superior a ${opts?.maxLightKeysCount ?? 110000}, só pode pesquisar no lado do servidor.`,
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
    years: "anos",
    months: "meses",
    days: "dias",
    year: "ano",
    month: "mês",
    day: "dia",
    second: "segundo",
    seconds: "segundos",
    minute: "minuto",
    minutes: "minutos",
    hour: "hora",
    hours: "horas"
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
    bloom: "Bloom filtro",
    cuckoo: "Cuckoo filtro",
    topk: "Top-K",
    cms: "Count-Min Sketch",
    tdigest: "T-Digest",
    vectorset: "VectorSet",
  }
};
module.exports = strings;
