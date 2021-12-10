const strings = {
    error: {
        cleared_license: 'Очищенная лицензия',
        invalid_license: 'Неверная лицензия',
        server_error: 'Серверная ошибка, пожалуйсто попробуйте снова',
    },
    title: {
        donate: 'Донат',
        jsonRecursive: 'Расширяем все листья',
        name: 'P3X Redis UI',
        nameDonated: 'P3X Redis UI+',
        main: 'Вы можете выбрать Redis коннектор для соединения из меню снизу слева.',
        statistics: 'Статистика',
        error: 'Ошибка',
        connectingRedis: 'Подключаемся к Redis ...',
        socketioConnectError: 'Ошибка Socket.IO',

        db: 'База данных',
        server: 'Сервер',
        clients: 'Клиент',
        memory: 'Память',
        persistence: 'Постоянность',
        stats: 'Статистика',
        replication: 'Репликация',
        cpu: 'ЦПУ',
        cluster: 'Кластер',
    },
    confirm: {
        title: 'Подтвердить',
        alert: 'Внимание',
        info: 'Информация',
        deleteListItem: 'Вы точно хотите удалить этот список?',
        deleteHashKey: 'Вы точно хотите удалить этот хэш?',
        deleteStreamTimestamp: 'Вы точно хотите удалить эту временную отметку потока?',
        deleteSetMember: 'Вы точно хотите удалить этого члена набора?',
        deleteZSetMember: 'Вы точно хотите удалить этого члена сортированного набора?',
        deleteConnection: 'Подтвердить',
        deleteConnectionText: 'Вы точно хотите удалить это подключение Redis?',
        deleteNode: 'Вы точно хотите удалить эту ноду Redis?',
        deleteAllKeys: (opts) => {
            return `Удалить это дерево и все его ключи (${opts.key})?`
        },
        socketioConnectError: 'Socket.IO не может подключится к серверу, вы можете перезагрузить и решить проблему с соединением самостоятельно, клиент не знает как решить это.',
        deleteKey: 'Вы точно хотите удалить этот ключ?',
        rename: {
            title: 'Вы точно хотите переименовать этот ключ?',
            textContent: 'Если вы нажмёте кнопку \"Переименоват\" вы навсегда переименуете этот ключ.',
            placeholder: 'Ключ Redis (обязательно)',

        },
        ttl: {
            title: 'Вы точно хотите изменить TTL этого ключа?',
            textContent: 'Если вы нажмёте \"Изменить\" вы измените TTL этого ключа, пустой TTL равен вечному.',
            placeholder: 'TTL ключа Redis (цельная цифра или ничего)',
            placeholderPlaceholder: 'Пустота означает вечность, для других случаев используйте целое число.',
            convertTextToTime: 'Конвертировать текст во время',
            convertTextToTimePlaceholder: 'Например, 1d равен 86400',
        },
        license: {
            title: 'Включить лицензию донатера?',
            textContent: 'Если вы хотите использовать функции для донатеров, пожалуйсто запросите лицензию у alabard@gmail.com . Донат стоит $1/месяц.',
            placeholder: 'Ключ лицензии',
        },
    },
    language: {
        // When you translate the english name, keep the Language in English
        // eg. Inglés / English
        en: 'Английский / English',
        zn: '中文 / Chinese'
        ru: 'Русский / Russian'
    },
    intention: {
        copy: 'Копировать',
        saveWithFormatJson: 'Сохранить с форматом',
        formatJson: 'Форматировать Json',
        pubsubMonitor: 'Мониторинг PubSub',
        // When you translate the language, keep the Language in English
        // eg. Idioma / Language
        language: 'Язык / Language',
        ok: 'ОК',
        addKey: 'Добавить к этому ключу',
        addKeyRoot: 'Добавить к корневому ключу',
        reloadKey: 'Кнопка перезагрузки',
        reload: 'Перезагрузить',
        close: 'Закрыть',
        commands: 'Команды',
        view: 'Вид',
        statistics: 'Статистика',
        refresh: 'Обновить',
        clear: 'Очистить',
        rename: 'Переименовать',
        main: 'Домой',
        cancel: 'Отмена',
        theme: 'Тема',
        github: 'GitHub',
        githubRepo: 'Репозиторий',
        githubRelease: 'Релизы',
        githubChangelog: 'Изменения',
        settings: 'Настройки',
        connect: 'Подключиться',
        disconnect: 'Отключится',
        overview: 'Обзор',
        console: 'Консоль',
        noConnections: 'Подключения отсутствуют, добавьте подключение в меню настроек.',
        noConnectionsInSettings: 'Подключения отсутствуют, вы можете добавить НОВОЕ ПОДКЛЮЧЕНИЕ выше.',
        connectionAdd: 'Новое подключение',
        extend: 'Расширить',
        collapse: 'Схлопнуть',
        add: 'Добавить',
        edit: 'Редактировать',
        save: 'Сохранить',
        ttl: 'Выбрать TTL',
        license: 'Выбрать лицензию',
        'delete': 'Удалить',
        remove: 'Убрать',
        'sure': 'Хорошо',
        testConnection: 'Проверка соединения',
        getKey: 'Загрузка ключа Redis и асоциированных данных ...',
        jsonViewShow: 'Показать JSON',
        jsonViewEditor: 'Редактировать JSON',
    },
    label: {
        streamValue: `Поле и значение потока это однополосник. Например: поле1 значение1 "поле 2" "значение 2"`,
        streamTimestampId: `'*' означает автогенерацию или определяется как <millisecondsTime>-<sequenceNumber>`,
        unableToLoadKey: ({ key }) => {
          return `Не вышло загрузить ключ: ${key}. Возможно он был удалён. Полная ошибка написана в консоли.`
        },
        bigJson: 'Этот JSON обьект больше 10 kb, удостоверьтесь что вы знаете что делаете, так как некоторые функции рендерятся медленнее.',
        addNode: 'Добавить ноду',
        validateJson: 'Проверить JSON',
        reducedFunction: `Урезанная функциональность`,
        tooManyKeys: (opts) => {
            return `Для полноценной работы максимума функций разрешены ключи в общем количестве ${opts.maxLightKeysCount} штук. Эта база данных имеет больше ключей чем разрешено, суммой ${opts.count}. Сортировка и информация древом для ключей выключены. Поиск будет производится только на серверной стороне.`;
        },
        redisCommandNotFound: 'Ни одна команда Redis не совпадает с вводом ...',
        treeKeyStore: `Сортировка (природное сравнение) выполняется в клиенте (он же браузер), что замедляет большие сортировки, например больше чем 10k ключей, это может добавить немного задержки к прогрузке страницы. В самом Redis нету сортировки ключей, это можно делать только так.`,
        socketIoTimeout: (options) => {
            return `Socket.IO не успел ответить на запрос (максимум ${options.timeout / 1000} секунд) ...`;
        },
        resizerInfo: (options) => {
            return `Минимальная ширина левой или правой панели это ${options.width}px`
        },
        jsonViewNotParsable: 'Это значение не подобно JSON',
        ttlTitle: 'Выбрать TTL в секундах',
        passwordSecure: 'Пароль может быть пустым, но он всё ещё будет отображать символы, это фича для безопасности.',
        tlsWithoutCert: 'Включить TLS без дополнительного сертификата',
        tlsRejectUnauthorized: 'Reject unauthorized certificate',
        tlsSecure: 'Если вы видите TLS конфигурацию которая начинается с P3X или все настройки TLS выглядят одинаково, это фича для безопасности. Для изминения настроек надо заменить эти настройки пустыми или чем либо ещё, и они сохранятся. Если you do not change the TLS settings, the settings will be kept as they are on the server.',
        treeSeparatorEmpty: 'If the tree separator is empty, the tree wil have no nested nodes, just a pure list',
        treeSeparatorEmptyNote: 'No nested nodes, just a pure list',
        welcomeConsole: 'Welcome to the Redis Console',
        welcomeConsoleInfo: 'Cursor UP or DOWN history is enabled',
        redisListIndexInfo: 'Empty to append, -1 to prepend or save it to the position shown.',
        console: 'Console',
        connectiondAdd: 'Add connection',
        connectiondEdit: 'Edit connection',
        connectiondView: 'View connection',
        connections: 'Connections',
        keysSort: {
            on: 'Key sorting on',
            off: 'Key sorting off'
        },
        cluster: {
            on: 'Cluster on',
            off: 'Cluster off',
        },
        readonly: {
            on: 'Readonly on',
            off: 'Readonly off',
        },
        theme: {
            light: 'Light',
            dark: 'Dark enterprise',
            darkNeu: 'Dark',
            darkoBluo: 'Darko bluo',
            enterprise: 'Enterprise',
            redis: 'Redis',
            matrix: 'Matrix',
        },
        connected: (opts) => {
            return `Connected: ${opts.name}`
        },
        tree: 'Tree',

    },
    status: {
        dataCopied: 'The data is in the clipboard',
        licenseSaved: 'License saved',
        nodeRemoved: 'Node removed',
        keyIsNotExisting: 'This key could have been deleted or expired.',
        keyCount: (opts) => {
            if (opts.keyCount === 0) {
                return 'No key'
            } else if (opts.keyCount === 1) {
                return '1 key'
            } else {
                return `${opts.keyCount} keys`
            }

        },
        treeExpandAll: 'Expand all tree leafs, this has a cost, might take time ...',
        noRedisKeys: 'There are no keys in this database.',
        redisConnected: 'Redis connected successful',
        reloadingDataInfo: 'Reloading Redis data info',
        added: 'Added',
        saved: 'Updated',
        cancelled: 'Cancelled',
        deleted: 'Deleted',
        savedRedis: 'Redis data is saved',
        redisDisconnected: (opts) => {
            return `The current connection had an error: ${opts.error.message}`
        },
        dbChanged: (opts) => {
            return `The db index set to ${opts.db}. `
        },
        treeDeleted: (opts) => {
            return `The tree key was deleted (${opts.key}).`

        },
        deletedKey: (opts) => {
            return `The key was deleted (${opts.key}).`
        },
        renamedKey: 'This key has been renamed',
        ttlChanged: 'This key\'s TTL has been changed',
        notInteger: 'This input is not an integer',
        persisted: 'This key is persisted forever',
        set: 'The key is set/added'
    },
    code: {
        'delete-connection': 'This connection was deleted, so you are disconnected to this Redis instance.',
        'save-connection': 'This connection was changed, so you are disconnected to this Redis instance. You may re-connect.',
        'readonly-connections': 'Connections add/save/delete are readonly only!',
        'readonly-connection-mode': 'This connection is read only mode!',
        'list-out-of-bounds': 'This list index is out of bounds',
        'donation-ware-feature': 'This feature is present in the donation version.',
        'auto-connection-failed': 'Possible, the connection was removed and the auto connection failed, because of this.',
        invalid_console_command: 'This command is not working via the GUI.',
    },
    form: {
        error: {
            required: 'Required',
            port: 'The port is between 1-65535',
            invalid: 'The form is invalid'
        },
        connection: {
            label: {
                name: 'Name',
                host: 'Hostname',
                port: 'Port',
                password: 'Password',
                username: 'Username',
            },
        },
        treeSettings: {
            maxValueDisplay: 'Max value display string length',
            maxValueDisplayInfo: 'If max value display zero, it shows everything, if it is bigger than 0, it will truncate. If it is -1, it will not show the value without edit for strings, for others, it display everything.',
            maxKeys: 'The max key count',
            maxKeysInfo: 'So that the GUI does not crash, we limit the max key count.',
            keyCount: () => {
                return `Number of keys: ${p3xr.state.keysRaw.length}`
            },
            label: {
                animation: 'Use animation',
                noAnimation: 'No animation',
                jsonFormatTwoSpace: 'Format JSON with 2 spaces',
                jsonFormatFourSpace: 'Format JSON with 4 spaces',
                formName: 'Redis settings',
                searchModeClient: 'Client search mode',
                searchModeServer: 'Server search mode',
                searchModeStartsWith: 'Search with starts with mode',
                searchModeIncludes: 'Search includes mode',
            },
            field: {
                treeSeparator: 'Tree separator',
                treeSeparatorSelector: 'Tree separator selector',
                page: 'Tree paging count',
                keyPageCount: 'Key paging count',
                keysSort: 'Sort the keys',
                searchMode: 'Search mode',
                searchModeStartsWith: 'Search starts with / includes'
            },
            error: {
                keyPageCount: 'The key page count must be an integer between 5 - 100',
                page: 'The page count must be an integer between 10 - 1000',
                maxValueDisplay: 'The maximum display value must be an integer between -1 and 32768',
                maxKeys: 'The maximum key count value must be an integer between 100 and 100000',
            },

        },
        key: {
            label: {
                formName: {
                    add: 'Add new Redis key',
                    edit: 'Edit Redis key',
                    append: 'Add to existing Redis key',
                }
            },
            field: {
                streamTimestamp: 'Timestamp',
                key: 'Key',
                type: 'Type',
                index: 'Index',
                hashKey: 'Hash key',
                score: 'Score',
                value: 'Value',
            },
            error: {
                streamTimestamp: 'The timestamp is required, either Redis format or as *',
                key: 'The key is, at least, one character',
                hashKey: 'The hash table key is at least one character',
                score: 'The sorted set score is required',
                value: 'The value is required',
            }
        },
        main: {
            label: {
                database: 'DB',
            }
        }
    },
    page: {
        overview: {
            noConnected: 'There is no connection to Redis.',
            overviewClients: 'List the connected by the count of clients',
            connectedCount: (opt) => {
                if (opt.length === 1) {
                    return '1 client'
                }
                return `${opt.length} clients`

            }
        },
        key: {
            label: {
                key: 'Key',
                encoding: 'Encoding',
                length: 'Size',
                ttl: 'TTL',
                ttlTitle: 'Time To Live',
                type: 'Type',
                ttlNotExpire: 'does not expire',
                lengthString: 'characters',
                lengthItem: 'items',
                actions: 'Actions',
            },
            list: {
                table: {
                    index: 'Index',
                    value: 'Value',
                }
            },
            hash: {
                table: {
                    hashkey: 'Hashkey',
                    value: 'Value',
                }
            },
            set: {
                table: {
                    value: 'Member'
                }
            },
            zset: {
                table: {
                    value: 'Member',
                    score: 'Score',
                }
            },
            stream: {
              table:{
                  timestamp: 'Timestamp ID',
                  field: 'Field',
                  value: 'Value',
              }
            },
        },
        treeControls: {
            settings: 'Tree settings',
            expandAll: 'Expand all',
            collapseAll: 'Collapse all',
            search: {
                search: 'Search in the keys',
                clear: 'Clear current search to set empty',
                placeholderClient: 'Search client side',
                placeholderServer: 'Search server side',
                info: 'The client side search means, that it matches the text in the search input. The server side search means, that is it like search in the keys patterns as *{search-text}*. For large search sets, it is better to use server side searching. For smaller search sets, it is better to use client side search mode.' + ` If the keys count is over ${p3xr.settings.maxLightKeysCount}, you can only search on server side.`,
                largeSetInfo: 'In a large set, client side searching is disabled. so right now only server side searching is possible.',
                infoDetails: 'To find out how the search works, please check out the settings'
            },
            pager: {
                next: 'Next',
                prev: 'Previous',
                first: 'First',
                last: 'Last'
            }
        }
    },
    time: {
        years: 'years',
        months: 'months',
        days: 'days',
        year: 'year',
        month: 'month',
        day: 'day',
    },
    redisTypes: {
        string: 'String',
        list: 'List',
        hash: 'Hash table',
        set: 'Set',
        zset: 'Sorted set - zset',
        stream: 'Stream',
    }
}


module.exports = strings;
