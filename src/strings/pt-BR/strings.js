const strings = {
  error: {
    server_error: "Erro no servidor, tente novamente",
    aiPromptTooLong: "O prompt de AI é longo demais (máximo de 4096 caracteres)",
  },
  title: {
    donate: "Doe",
    donateTitle: "Apoie o P3X Redis UI",
    donateDescription: "O P3X Redis UI é um projeto gratuito e de código aberto. Os custos de manutenção do aplicativo, recursos de IA, imagens Docker, servidores e infraestrutura saem do bolso do desenvolvedor. Se você acha esta ferramenta útil, considere apoiar seu desenvolvimento contínuo com uma doação. Cada contribuição ajuda a manter o projeto vivo e crescendo. Obrigado!",
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
    threads: "Threads"
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
    delete: "Excluir?",
    deleteAllKeys: opts => {
      return `Exclua esta árvore e todas as suas chaves (${opts.key})?`;
    },
    deleteSearchKeys: opts => {
      return `Tem certeza de que deseja excluir todas as chaves correspondentes a "${opts.pattern}"? ${opts.count} chaves encontradas.`;
    },
    socketioConnectError: "Socket.IO não consegue se conectar ao servidor, você pode recarregar e tentar resolver o erro de conexão sozinho, o cliente não sabe como resolvê-lo sozinho.",
    socketioAuthRequired: "É necessária autorização Socket.IO. Autentique com HTTP Basic Auth (nome de usuário/senha) e recarregue.",
    invalidCredentials: "Nome de usuário ou senha inválidos.",
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
    deleteAllKeysMenu: (opts) => `Excluir tudo ${opts.count}`,
    importKeys: "Importar chaves",
    deleteSearchKeys: (opts) => `Excluir ${opts.count} chaves correspondentes`,
    saveWithFormatJson: "Salvar com formato",
    formatJson: "Formatar JSON",
    wrap: "Embrulhar",
    unwrap: "Desembrulhar",
    downloadJson: "Baixar JSON",
    pubsubMonitor: "PubSub",
    pulse: "Pulse",
    profiler: "Profiler",
    memoryAnalysis: "Analysis",
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
    logout: "Sair",
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
    fieldTtl: "TTL do campo",
    digest: "Resumo",
    delete: "Excluir",
    remove: "Remover",
    areYouSure: "Tem certeza?",
    sure: "Claro",
    testConnection: "Conexão de teste",
    getKey: "Carregando chave Redis e dados associados...",
    jsonViewShow: "Exibir JSON",
    jsonViewEditor: "Editar JSON",
    quickConsole: "Consola rápida",
    moveUp: "Mover para cima",
    moveDown: "Mover para baixo",
  },
  diff: {
    reviewChanges: "Revisar altera\u00e7\u00f5es",
    inline: "Em linha",
    sideBySide: "Lado a lado",
    additions: "adi\u00e7\u00f5es",
    deletions: "remo\u00e7\u00f5es",
    unchangedLines: "linhas inalteradas",
    noChanges: "Nenhuma altera\u00e7\u00e3o detectada",
    before: "Antes",
    after: "Depois",
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
    aiRoutingDirect: "As consultas vão diretamente para o Groq usando sua própria chave de API, sem passar pelo network.corifeus.com.",
    aiRoutingNetwork: "As consultas de IA são roteadas via network.corifeus.com. Se você tiver sua própria chave de API Groq gratuita, pode desativar esta opção para ir direto ao Groq sem network.corifeus.com.",
    aiMaxTokens: "Máximo de tokens de IA",
    aiMaxTokensInfo: "Número máximo de tokens para respostas de IA. Valores maiores permitem respostas mais longas, mas podem usar mais créditos de API.",
    consoleDrawer: {
      toggleTooltip: "Alternar console",
      clearTooltip: "Limpar histórico do console",
      closeTooltip: "Fechar console",
      aiSettingsTooltip: "Configurações de IA",
      modeRedis: "REDIS",
      modeAi: "AI",
      connectionChipNoDb: opts => `${opts.name}`,
      connectionChipWithDb: opts => `${opts.name} · db ${opts.db}`,
      pageChip: opts => `página: ${opts.page}`,
      connectingTo: opts => `Conectando a ${opts.name}…`,
      connectedTo: opts => `Conectado a ${opts.name} (Redis ${opts.version} ${opts.mode}, ${opts.modules} módulos carregados)`,
      connectedToNoInfo: opts => `Conectado a ${opts.name}`,
      disconnectedFrom: opts => `Desconectado de ${opts.name}`,
      notConnected: "Não conectado.",
      limitedAiOnly: "IA limitada apenas — perguntas e respostas gerais sobre Redis funcionam.",
      connectHint: "Para diagnóstico ao vivo, digite: connect <name>",
      cheatsheetHint: "Digite ai: help para ver o que você pode perguntar.",
      needsConnection: "Isso requer uma conexão ativa. Digite \"connect <name>\" primeiro.",
      aiNeedsConnectionReason: "A IA de estado ao vivo (tool use) só está disponível quando conectado ao Redis.",
      verbNeedsConnection: opts => `"${opts.verb}" requer uma conexão ativa — digite "connect <name>" primeiro.`,
      aiLimitedMode: "A IA está em modo limitado — apenas perguntas gerais sobre Redis funcionam até você se conectar.",
      welcomeDisconnected: "Bem-vindo. Você ainda não está conectado a nenhuma instância Redis.",
      readyIndicator: "Pronto.",
    },
    cheatsheet: {
      title: "Guia rápido da IA — o que posso perguntar?",
      subtitle: "Clique em qualquer prompt para colá-lo no console. Depois pressione Enter.",
      searchPlaceholder: "Filtrar prompts…",
      openOfficialDocs: "Comandos do Redis ↗",
      openOfficialDocsTooltip: "Abrir a referência oficial dos comandos do Redis em redis.io",
      closeTooltip: "Fechar (Esc)",
      empty: "Nenhum prompt corresponde ao seu filtro.",
      footerHint: "Dica: digite \"ai:\" seguido de qualquer coisa em qualquer idioma — a IA entende 54 idiomas e usa o estado do Redis em tempo real quando necessário.",

      // Each group has: name (category label), match (search-filter alias), prompts (array of example strings)
      groups: {
        diagnostics: {
          name: "Diagnóstico em tempo real",
          description: "Peça à IA para investigar o estado do servidor em tempo real com ferramentas seguras somente de leitura.",
          prompts: [
            "por que a memória está alta?",
            "mostre as 10 consultas mais lentas",
            "quais clientes estão conectados?",
            "qual é a política de maxmemory?",
            "houve evictions recentes?",
            "existe algum evento de latência?",
            "há quanto tempo o servidor está no ar?",
            "qual é a taxa de acertos?",
            "mostre o uso de CPU",
            "resuma o keyspace",
            "quanta memória cada tipo de dado usa?",
            "há algo bloqueando o servidor agora?"
          ]
        },
        keys: {
          name: "Chaves",
          description: "Inspecione, encontre e analise chaves sem ter que clicar pela árvore.",
          prompts: [
            "encontre todas as chaves que correspondem a user:*",
            "quantas chaves há em cada banco de dados?",
            "mostre o maior hash deste banco",
            "encontre chaves com TTL menor que 60 segundos",
            "quais chaves não têm TTL?",
            "qual é o tipo da chave session:abc?",
            "estime a memória usada pelo prefixo \"session:\"",
            "mostre a codificação de objeto da chave user:42",
            "há chaves prestes a expirar?",
            "qual namespace usa mais memória?"
          ]
        },
        dataTypes: {
          name: "Tipos de dados",
          description: "Frases em linguagem natural para criar/ler/atualizar em qualquer tipo do Redis.",
          prompts: [
            "crie um hash chamado user:1 com os campos name=Alice age=30",
            "adicione três itens à lista tasks",
            "adicione membros ao conjunto favourites",
            "adicione membros com pontuação ao sorted set leaderboard",
            "anexe um evento ao stream events",
            "obtenha as últimas 10 entradas do stream events",
            "obtenha todos os campos do hash user:1",
            "obtenha os membros do conjunto favourites",
            "obtenha os 10 primeiros por pontuação do leaderboard"
          ]
        },
        modules: {
          name: "Módulos",
          description: "Consultas para módulos do Redis carregados (as categorias abaixo só aparecem quando o módulo está presente).",
          prompts: []
        },
        json: {
          name: "RedisJSON",
          description: "Disponível quando o módulo ReJSON está carregado.",
          prompts: [
            "crie um documento JSON em user:42 com { name: \"Alice\", age: 30 }",
            "leia o campo name de user:42",
            "atualize a idade de user:42 para 31",
            "liste todas as chaves JSON",
            "exclua um campo de um documento JSON",
            "obtenha um campo aninhado usando JSONPath"
          ]
        },
        search: {
          name: "RediSearch",
          description: "Disponível quando o módulo search está carregado.",
          prompts: [
            "liste todos os índices full-text",
            "faça uma busca full-text por \"redis\" no índice idx:products",
            "crie um índice baseado em hash com os campos title (TEXT) e price (NUMERIC)",
            "obtenha informações sobre o índice idx:products",
            "remova o índice idx:products",
            "encontre documentos em que price está entre 10 e 50",
            "escreva uma busca híbrida combinando texto e similaridade vetorial"
          ]
        },
        timeseries: {
          name: "RedisTimeSeries",
          description: "Disponível quando o módulo timeseries está carregado.",
          prompts: [
            "liste todas as chaves de timeseries",
            "adicione um ponto de dados a temp:room1",
            "obtenha o intervalo de temp:room1 de ontem até agora",
            "obtenha multi-range pela etiqueta sensor=temp",
            "gere 100 pontos de dados em onda senoidal para temp:room1",
            "mostre a retenção e as etiquetas de temp:room1"
          ]
        },
        bloom: {
          name: "RedisBloom (Bloom / Cuckoo / Top-K / CMS / T-Digest)",
          description: "Disponível quando o módulo bf está carregado.",
          prompts: [
            "verifique se o item foo existe no bloom filter spam:ips",
            "adicione itens ao bloom filter spam:ips",
            "crie um top-K chamado popular com K=10",
            "consulte o count-min sketch traffic pela chave /home",
            "adicione valores ao t-digest e obtenha o percentil 95",
            "mostre informações do bloom filter spam:ips"
          ]
        },
        vectorSet: {
          name: "VectorSet (Redis 8+)",
          description: "Disponível quando Redis 8+ é detectado (tipo VECTORSET nativo).",
          prompts: [
            "adicione um vetor a embeddings",
            "encontre os 10 vetores mais parecidos com um vetor de consulta",
            "mostre as dimensões e a contagem do vectorset embeddings",
            "exclua um elemento do vectorset embeddings",
            "pesquise por nome de elemento com VSIM"
          ]
        },
        redis8: {
          name: "Recursos do Redis 8+",
          description: "Exibido quando Redis 8+ é detectado.",
          prompts: [
            "defina o TTL de um campo de hash com HEXPIRE",
            "obtenha o digest de um valor de string",
            "execute uma busca híbrida full-text + vetor (FT.HYBRID)",
            "defina várias chaves com uma expiração compartilhada usando MSETEX",
            "exclua uma entrada de stream com grupo de consumidores (XDELEX)",
            "mostre as estatísticas de slots do cluster para os 10 primeiros slots"
          ]
        },
        scripting: {
          name: "Scripts",
          description: "Gere scripts Lua / EVAL a partir de descrições em linguagem natural.",
          prompts: [
            "escreva um script atômico que incrementa o contador X apenas se Y > 5",
            "gere 100 chaves aleatórias com Lua",
            "converta este pipeline de shell em um único EVAL: keys user:* | GET | grep inactive | DEL",
            "adapte uma operação em lote para Lua visando segurança no cluster",
            "atualização do tipo check-and-set em uma única chamada Lua",
            "itere por um hash e exclua campos que correspondam a um padrão"
          ]
        },
        cluster: {
          name: "Cluster",
          description: "Exibido somente no modo cluster.",
          prompts: [
            "mostre as informações do cluster",
            "liste os nós do cluster",
            "mostre os 10 principais slots por quantidade de chaves",
            "mostre os 10 principais slots por memória",
            "qual master é dono do slot 5000?"
          ]
        },
        acl: {
          name: "ACL (Redis 6+)",
          description: "Inspecione usuários de controle de acesso e a conexão atual.",
          prompts: [
            "com que usuário estou conectado?",
            "liste todos os usuários ACL",
            "quais permissões eu tenho?",
            "mostre as regras do usuário default"
          ]
        },
        qna: {
          name: "Perguntas e respostas gerais",
          description: "Faça perguntas de conhecimento sobre Redis — sem ferramentas, apenas respostas.",
          prompts: [
            "o que é ZADD?",
            "como funciona o failover do cluster?",
            "explique SCAN vs KEYS",
            "quando devo usar EVAL em vez de vários comandos?",
            "quais são as opções de persistência do Redis?",
            "qual é a diferença entre RDB e AOF?",
            "como o Redis Sentinel decide o novo master?",
            "explique hash tags no modo cluster"
          ]
        },
        translate: {
          name: "Linguagem natural → comando Redis",
          description: "Descreva o que você quer em português (ou em qualquer um dos 54 idiomas); a IA escreve o comando Redis.",
          prompts: [
            "exclua a chave user:42",
            "renomeie a chave foo para bar",
            "faça a chave session:abc expirar em 10 segundos",
            "copie a chave source para destination",
            "incremente o contador visits em 5",
            "defina a chave greeting como \"hello\" por 1 hora",
            "mostre as 10 chaves mais acessadas",
            "exclua todas as chaves que correspondem a temp:*"
          ]
        }
      }
    },
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
    aclAuthHint: "Use o nome de usuário e a senha do Redis ACL para autenticar. Deixe em branco para o usuário padrão sem senha.",
    tlsWithoutCert: "Habilite TLS sem certificado adicional",
    tlsRejectUnauthorized: "Rejeitar certificado não autorizado",
    tlsSecure: "Se você vir uma configuração TLS que começa com P3X ou todas as configurações TLS parecem iguais, é um recurso seguro. Para alterar as configurações, basta substituir essas configurações por vazias ou qualquer outra coisa e elas serão salvas. Se você não alterar as configurações de TLS, as configurações serão mantidas como estão no servidor.",
    treeSeparatorEmpty: "Se o separador da árvore estiver vazio, a árvore não terá nós aninhados, apenas uma lista pura",
    treeSeparatorEmptyNote: "Sem nós aninhados, apenas uma lista pura",
    welcomeConsole: "Bem-vindo ao console Redis",
    welcomeConsoleInfo: "SHIFT + O histórico do cursor PARA CIMA ou PARA BAIXO está ativado",
    redisListIndexInfo: "Vazio para anexar, -1 para preceder ou salvar na posição mostrada.",
    console: "Consola",
    connectiondAdd: "Adicionar conexão",
    connectiondEdit: "Editar conexão",
    connectiondView: "Ver conexão",
    connections: "Conexões",
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
    languageAuto: "Auto (system)",
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
    type: "Tipo",
    time: "Tempo",
    format: "Formato",
    loading: "Carregando...",
    autoRefresh: "Auto",
    exportSearchHint: "Exportando apenas chaves que correspondem à pesquisa atual",
    importSearchHint: "A importação se aplica a todo o banco de dados, não apenas aos resultados da pesquisa",
    deleteSearchHint: "Excluir todas as chaves correspondentes à pesquisa atual",
    deletingSearchKeys: "Excluindo chaves correspondentes...",
    importNoKeys: "Nenhuma chave encontrada no arquivo",
    desktopNotifications: "Notificações do desktop",
    desktopNotificationsEnabled: "Ativar notificações do desktop",
    desktopNotificationsInfo: "Receba notificações do SO para desconexões e reconexões do Redis quando o aplicativo não estiver em foco."
  },
  status: {
    dataCopied: "Os dados estão na área de transferência",
    exportDone: "Exportação concluída",
    deletedSearchKeys: (opts) => `${opts.count} chaves excluídas`,
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
    reverted: "Revertido",
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
    set: "A chave está definida/adicionada",
    connectionRestored: "Conexão restaurada",
    socketDisconnected: "Desconectado",
    socketError: "Erro de conexão",
    deletedHashKey: "Chave hash excluída",
    deletedSetMember: "Membro do conjunto excluído",
    deletedListElement: "Elemento da lista excluído",
    deletedZSetMember: "Membro do conjunto ordenado excluído",
    deletedStreamTimestamp: "Entrada do stream excluída",
  },
  code: {
    "delete-connection": "Esta conexão foi excluída, portanto você está desconectado desta instância Redis.",
    "save-connection": "Esta conexão foi alterada, portanto você está desconectado desta instância Redis. Você pode se reconectar.",
    "readonly-connections": "As conexões adicionar/salvar/excluir são somente leitura!",
    "readonly-connection-mode": "Esta conexão está no modo somente leitura!",
    "list-out-of-bounds": "Este índice de lista está fora dos limites",
    "invalid-json-value": "O valor não é válido JSON.",
    "http_auth_required": "Autorização necessária: autentique com HTTP Basic Auth e recarregue.",
    "auto-connection-failed": "Possível, a conexão foi removida e a conexão automática falhou por causa disso.",
    invalid_console_command: "Este comando não está funcionando por meio de GUI.",
    "AI_DISABLED": "IA está desativada. Ative nas configurações de IA.",
    "AI_PROMPT_REQUIRED": "Consulta de IA é obrigatória.",
    "GROQ_API_KEY_READONLY": "A chave Groq API é somente leitura e não pode ser modificada.",
    "blocked_api_access": "Seu plano Groq API não permite acesso a este modelo. Atualize seu plano Groq ou use o proxy network.corifeus.com.",
    "rate_limit": "Limite de taxa de IA atingido. Tente novamente mais tarde ou use sua própria chave Groq API nas configurações."
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
      keyCount: (opts) => {
        return `Número de chaves: ${opts?.keyCount ?? 0}`;
      },
      label: {
        animation: "Usar animação",
        noAnimation: "Sem animação",
        undoEnabled: "Desfazer ativado",
        undoDisabled: "Desfazer desativado",
        diffEnabled: "Mostrar diff antes de salvar",
        diffDisabled: "Diff antes de salvar desativado",
        jsonFormatTwoSpace: "Formate JSON com 2 espaços",
        jsonFormatFourSpace: "Formate JSON com 4 espaços",
        formName: "Configurações Redis",
        searchModeClient: "Modo de pesquisa de cliente",
        searchModeServer: "Modo de pesquisa de servidor",
        searchModeStartsWith: "Pesquisa com começa com modo",
        searchModeIncludes: "Pesquisa inclui modo"
      },
      undoHint: "Desfazer est\u00e1 dispon\u00edvel apenas para tipos de chave string e JSON",
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
        streamTimestamp: "O carimbo de data/hora é obrigatório, no formato Redis ou como *",
        key: "A chave é, pelo menos, um caractere",
        hashKey: "A chave da tabela hash tem pelo menos um caractere",
        score: "A pontuação do conjunto classificado é obrigatória",
        value: "O valor é obrigatório",
        errorRate: "A taxa de erro deve estar entre 0 e 1 (ex. 0.01)",
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
      dropIndex: "Excluir índice",
      indexInfo: "Info do índice",
      indexName: "Nome do índice",
      prefix: "Prefixo de chave (opcional)",
      fieldName: "Nome do campo",
      hybridMode: "Busca híbrida (FT.HYBRID)",
      vectorField: "Campo vetorial",
      vectorValues: "Valores vetoriais",
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
      noSlowQueries: "Nenhuma consulta lenta registrada.",
      confirmSlowLogReset: "Tem certeza de que deseja redefinir o log lento?",
      slowLogResetDone: "O log lento foi redefinido.",
      totalCommands: "Total",
      expired: "Expirados",
      evicted: "Despejados",
      clientList: "Lista de clientes",
      topKeys: "Maiores chaves por memória",
      killClient: "Encerrar cliente",
      clientKilled: "Cliente encerrado",
      confirmKillClient: "Tem certeza de que deseja encerrar este cliente?",
      noKeys: "Sem chaves",
      rss: "RSS",
      peak: "Pico",
      fragmentation: "Fragmentação",
      hitsAndMisses: "Acertos / Erros",
      noClients: "Sem clientes",
      slotStats: "Estatísticas de slots do cluster",
      serverInfo: "Informações do servidor",
      os: "Sistema operacional",
      port: "Porta de rede",
      pid: "ID do processo",
      configFile: "Arquivo de configuração",
      uptime: "Tempo de atividade",
      keyspace: "Espaço de chave Redis",
      keys: "Chaves Redis",
      expires: "Expira",
      noKeyspace: "Sem chaves",
      persistence: "Persistência de dados",
      rdbLastSave: "Último salvamento do RDB",
      rdbStatus: "Status do RDB",
      rdbChanges: "Alterações desde o último salvamento",
      aofEnabled: "AOF ativado",
      aofSize: "Tamanho AOF",
      replication: "Replicação Redis",
      role: "Função de replicação",
      replicas: "Réplicas conectadas",
      masterHost: "Anfitrião Primário",
      linkStatus: "Status do link de replicação",
      cpu: "Uso da CPU",
      cpuSys: "Sistema",
      cpuUser: "Usuário",
      modules: "Módulos Redis carregados",
      noModules: "Nenhum módulo Redis carregado",
      clusterSlotMap: "Mapa de slots do cluster Redis",
      slotRange: "Intervalo de slots de cluster",
      totalSlots: "Total de slots de cluster",
      noClusterData: "Nenhum dado de cluster Redis disponível.",
    },
    analysis: {
      title: "Análise de Memória",
      runAnalysis: "Executar Análise",
      running: "Analisando...",
      typeDistribution: "Distribuição de Tipos",
      prefixMemory: "Memória por Prefixo",
      topKeysByMemory: "Maiores Chaves por Memória",
      expirationOverview: "Expiração de Chaves",
      memoryBreakdown: "Detalhamento de Memória",
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
      keyCount: "Quantidade de Chaves",
      memoryUsage: "Uso de Memória",
      noPrefix: "(sem prefixo)",
      topN: "Top N",
      maxScanKeys: "Máx. Chaves Analisadas",
      type: "Tipo",
      noData: "Sem dados. Clique em Executar Análise para começar.",
      exportAll: "Exportar Tudo",
      memoryDoctor: "Memory Doctor",
      doctorNoData: "Clique em Atualizar para executar o diagnóstico Memory Doctor.",
    },
    acl: {
      title: "Usuários ACL",
      loadUsers: "Carregar usuários",
      loading: "Carregando...",
      username: "Nome de usuário",
      status: "Estado",
      enabled: "Habilitado",
      disabled: "Desativado",
      commands: "Comandos",
      commandsHint: "por exemplo, +@all or +@read -@dangerous",
      keys: "Padrões de chaves Redis",
      keysHint: "por exemplo, ~* or ~user:*",
      channels: "Canais Pub/Sub",
      channelsHint: "por exemplo, &* or &notifications:*",
      password: "Senha",
      noPassword: "Sem senha (nopass)",
      passwordHint: "Deixe em branco para manter a senha atual",
      currentUser: "Atual",
      createUser: "Criar usuário",
      editUser: "Editar usuário",
      deleteUser: "Excluir",
      confirmDelete: "Tem certeza de que deseja excluir o usuário ACL?",
      userDeleted: "O usuário ACL foi excluído.",
      userSaved: "O usuário ACL foi salvo.",
      cannotDeleteDefault: "Não é possível excluir o usuário padrão.",
      cannotDeleteSelf: "Não é possível excluir o usuário atualmente conectado.",
      noUsers: "ACL requer Redis 6.0+.",
      groupCommon: "Geral",
      groupDataTypes: "Tipos de dados",
      groupOperations: "Operações",
      rules: "Regras",
      rulesHint: "Tokens separados por espaço (por exemplo on >password +@all ~* &*)",
      defaultUserWarning: "Cuidado: Modificar o usuário padrão pode bloquear todas as conexões. Se isso acontecer, você precisará reiniciar o Redis ou usar o redis-cli para restaurar o acesso.",
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
        compression: "Compressão",
        aiRateLimited: "Limite de solicitações de IA atingido. Tente novamente mais tarde ou use sua própria chave de API do Groq nas Configurações.",
        aiError: "A consulta de IA falhou",
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
        labels: "Rótulos",
        rules: "Regras",
        retention: "Retenção",
        timestamp: "Carimbo de data/hora",
        value: "Valor",
        retentionHint: "0 = sem expiração, ou milissegundos",
        duplicatePolicy: "Política de duplicados",
        labelsHint: "chave1 valor1 chave2 valor2",
        timestampHint: "'*' significa gerado automaticamente, ou carimbo de data/hora em milissegundos",
        editAllHint: "Um ponto de dados por linha: carimbo_de_data/hora valor (o carimbo pode ser * para automático)",
        autoSpread: "Intervalo de dispersão automático *",
        formula: "Fórmula",
        formulaLinear: "Linear",
        formulaRandom: "Aleatório",
        formulaSawtooth: "Dente de serra",
        formulaPoints: "Pontos",
        formulaAmplitude: "Amplitude",
        formulaOffset: "Deslocamento",
        generate: "Gerar",
        exportChart: "Exportar PNG",
        overlay: "Sobrepor chaves",
        overlayHint: "Chaves separadas por vírgulas",
        mrangeFilter: "Filtro de rótulos",
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
        deletedSuccessfully: "Item excluído com sucesso",
        quantile: "Quantil",
        quantileResult: "Resultado",
        noItems: "Nenhum item para exibir",
        resetConfirm: "Redefinir todos os dados neste T-Digest?"
      },
      vectorset: {
        info: "Informações",
        elements: "Elementos",
        similarity: "Busca por Similaridade",
        searchByElement: "Buscar por elemento",
        searchByVector: "Buscar por vetor",
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
        searchComplete: "Busca concluída",
      }
    },
    treeControls: {
      settings: "Configurações de árvore",
      expandAll: "Expandir tudo",
      collapseAll: "Recolher tudo",
      level: "Nível",
      search: {
        search: "Pesquise nas chaves",
        clear: "Limpe a pesquisa atual para definir como vazia",
        placeholderClient: "Pesquisar no lado do cliente",
        placeholderServer: "Lado do servidor de pesquisa",
        info: (opts) => "A pesquisa do lado do cliente significa que ela corresponde ao texto na entrada de pesquisa. A pesquisa no lado do servidor significa que é como pesquisar nos padrões de chaves como *{search-text}*. Para conjuntos de pesquisa grandes, é melhor usar a pesquisa no lado do servidor. Para conjuntos de pesquisa menores, é melhor usar o modo de pesquisa do lado do cliente." + ` Se a contagem de chaves acabar ${opts?.maxLightKeysCount ?? 110000}, você só poderá pesquisar no lado do servidor.`,
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
  },
  promo: {
    title: "Assistente de Rede com IA",
    description: "Conheça nosso Assistente de Rede com IA gratuito em network.corifeus.com — analise domínios, IPs, registros DNS, certificados SSL, segurança de e-mail e infraestrutura de rede. Impulsionado por IA para resultados instantâneos e abrangentes.",
    disclaimer: "Esta promoção é exibida apenas no site de demonstração e não aparecerá em implantações do Docker, Electron ou aplicativo web.",
    toastMessage: "Experimente nosso Assistente de Rede com IA gratuito em network.corifeus.com — analise domínios, DNS, SSL e muito mais!",
    visit: "Visite network.corifeus.com",
  }
};
module.exports = strings;
