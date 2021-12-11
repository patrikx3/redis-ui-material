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
        tlsSecure: 'Если вы видите TLS конфигурацию которая начинается с P3X или все настройки TLS выглядят одинаково, это фича для безопасности. Для изминения настроек надо заменить эти настройки пустыми или чем либо ещё, и они сохранятся. Если вы ек измените настройки TLS, настройки останутся такими же как и на самом сервере.',
        treeSeparatorEmpty: 'Если разделитель дерева пуст, в дереве вместо вложенных нод будет лишь чистый список',
        treeSeparatorEmptyNote: 'Никаких вложенных нод, только чистый список',
        welcomeConsole: 'Добро пожаловать в консоль Redis',
        welcomeConsoleInfo: 'История по нажатию ВВЕРХ или ВНИЗ кллючена',
        redisListIndexInfo: 'Пустое для добавления, -1 что бы сделать вид или сохранить в указанную позицию.',
        console: 'Консоль',
        connectiondAdd: 'Добавить соединение',
        connectiondEdit: 'Изменить соединение',
        connectiondView: 'Осмотреть соединение',
        connections: 'Соединения',
        keysSort: {
            on: 'Сортировка ключей включена',
            off: 'Сортировка ключей выключена'
        },
        cluster: {
            on: 'Кластеризация активирована',
            off: 'Кластеризация деактивирована',
        },
        readonly: {
            on: 'Режим \"только чтение\"',
            off: 'Режим \"редактирование\"',
        },
        theme: {
            light: 'Светлая',
            dark: 'Тёмная корпоративная',
            darkNeu: 'Тёмная',
            darkoBluo: 'Тёмное синево',
            enterprise: 'Корпоративная',
            redis: 'Redis',
            matrix: 'Матрица',
        },
        connected: (opts) => {
            return `Подключено: ${opts.name}`
        },
        tree: 'Дерево',

    },
    status: {
        dataCopied: 'Данные скопированы в буфер обмена',
        licenseSaved: 'Лицензия сохранена',
        nodeRemoved: 'Нода удалена',
        keyIsNotExisting: 'Этот ключ вероятно был удалён или истёк.',
        keyCount: (opts) => {
            if (opts.keyCount === 0) {
                return 'Нету ключей'
            } else if (opts.keyCount === 1) {
                return '1 ключ'
            } else {
                return `${opts.keyCount} ключей`
            }

        },
        treeExpandAll: 'Развернуть все листья дерева, это имеет цену, временную ...',
        noRedisKeys: 'Нету ключей в базе данных.',
        redisConnected: 'Redis успешно подключен',
        reloadingDataInfo: 'Перезагружаем информацию о данных Redis',
        added: 'Добавлено',
        saved: 'Обновлено',
        cancelled: 'Отменено',
        deleted: 'Удалено',
        savedRedis: 'Данные Redis были сохранены',
        redisDisconnected: (opts) => {
            return `Произошла ошибка в теперешнем соединении: ${opts.error.message}`
        },
        dbChanged: (opts) => {
            return `Выбран индекс базы данных ${opts.db}. `
        },
        treeDeleted: (opts) => {
            return `Ключ дерева был удалён (${opts.key}).`

        },
        deletedKey: (opts) => {
            return `Ключ был удалён (${opts.key}).`
        },
        renamedKey: 'Этот ключ был переименован',
        ttlChanged: 'TTL этого ключа был изменён',
        notInteger: 'Этот ввод не для цельной цифры',
        persisted: 'Этот ключ не исчезнет сам',
        set: 'Этот ключ был применён/добавлен'
    },
    code: {
        'delete-connection': 'Это соединение было удалено и по этому вы были отключены от этой инстанции Redis.',
        'save-connection': 'Это подключение было изменено и по этому вы были отключены от этой инстанции Redis. Вы можете переподключится.',
        'readonly-connections': 'Добавление/сохранение/удаление соединений в режиме \"только чтение\"!',
        'readonly-connection-mode': 'Это соединение в режиме \"только чтение\"!',
        'list-out-of-bounds': 'Индекс этого списка вышел за границы',
        'donation-ware-feature': 'Эта функция доступна в донатерской версии.',
        'auto-connection-failed': 'Вероятно, соединение было удалено и авто-соединение провалилось по таковой причине.',
        invalid_console_command: 'Эта команда не работает через GUI.',
    },
    form: {
        error: {
            required: 'Обязательно',
            port: 'Порт в границах 1-65535',
            invalid: 'Форма заполнена неверно'
        },
        connection: {
            label: {
                name: 'Название',
                host: 'Имя хоста',
                port: 'Порт',
                password: 'Пароль',
                username: 'Имя пользователя',
            },
        },
        treeSettings: {
            maxValueDisplay: 'Длинна видимой строки',
            maxValueDisplayInfo: 'Если значение длинны показа равно нулю, будет показано всё, если же оно больше - вывод будет урезан. Если он равен минус одному, вывод будет скрыт до начала редактирования для строк, для других же типов будет показано всё.',
            maxKeys: 'Максимум символов',
            maxKeysInfo: 'Максимум ключей ограничен что бы GUI не падал.',
            keyCount: () => {
                return `Количество ключей: ${p3xr.state.keysRaw.length}`
            },
            label: {
                animation: 'Использовать анимацию',
                noAnimation: 'Выключить анимацию',
                jsonFormatTwoSpace: 'Форматировать JSON двумя пробелами',
                jsonFormatFourSpace: 'Форматировать JSON четырьмя пробелами',
                formName: 'Настройки Redis',
                searchModeClient: 'Клиентский режим поиска',
                searchModeServer: 'Серверный режим поиска',
                searchModeStartsWith: 'Поиск начала',
                searchModeIncludes: 'Поиск содержимого',
            },
            field: {
                treeSeparator: 'Разделитель дерева',
                treeSeparatorSelector: 'Избиратель разделителя дерева',
                page: 'Счётчик количества страниц',
                keyPageCount: 'Счётчик количества ключей',
                keysSort: 'Сортировка ключей',
                searchMode: 'Режим поиска',
                searchModeStartsWith: 'Поиск начинается с / содержит'
            },
            error: {
                keyPageCount: 'Ограничитель показа ключей на странице должен быть цельным числом в границах 5 - 100',
                page: 'Ограничитель показа страниц должен быть цельным числом в границах 10 - 1000',
                maxValueDisplay: 'Максимальное количество показываемых значений должен быть цельным числом между -1 и 32768',
                maxKeys: 'Максимальное количество показываемых ключей должен быть цельным числом между 100 и 100000',
            },

        },
        key: {
            label: {
                formName: {
                    add: 'Добавить новый ключ Redis',
                    edit: 'Редактировать ключ Redis',
                    append: 'Добавить к существующему ключу Redis',
                }
            },
            field: {
                streamTimestamp: 'Временная отметка',
                key: 'Ключ',
                type: 'Тип',
                index: 'Индекс',
                hashKey: 'Хэш',
                score: 'Очки',
                value: 'Значение',
            },
            error: {
                streamTimestamp: 'Временная отметка обязательна, либо в формате Redis либо как *',
                key: 'Ключ должен иметь длинну минимум одного символа',
                hashKey: 'Стол хэшей ключей должен иметь длинну минимум одного символа',
                score: 'Очки сортировки набора обязательны',
                value: 'Значение обязательно',
            }
        },
        main: {
            label: {
                database: 'База данных',
            }
        }
    },
    page: {
        overview: {
            noConnected: 'Нету подключения к Redis.',
            overviewClients: 'Показать подключения по количеству клиентов',
            connectedCount: (opt) => {
                if (opt.length === 1) {
                    return '1 клиент'
                }
                return `${opt.length} клиентов`

            }
        },
        key: {
            label: {
                key: 'Ключ',
                encoding: 'Кодировка',
                length: 'Размер',
                ttl: 'TTL',
                ttlTitle: 'Время На Жизнь (TTL)',
                type: 'Тип',
                ttlNotExpire: 'не истекает',
                lengthString: 'символы',
                lengthItem: 'обьекты',
                actions: 'Действия',
            },
            list: {
                table: {
                    index: 'Индекс',
                    value: 'Значение',
                }
            },
            hash: {
                table: {
                    hashkey: 'Хэш',
                    value: 'Значение',
                }
            },
            set: {
                table: {
                    value: 'Член'
                }
            },
            zset: {
                table: {
                    value: 'Член',
                    score: 'Очки',
                }
            },
            stream: {
              table:{
                  timestamp: 'Идентификатор временной отметки',
                  field: 'Поле',
                  value: 'Значение',
              }
            },
        },
        treeControls: {
            settings: 'Настройки дерева',
            expandAll: 'Развернуть все',
            collapseAll: 'Свернуть все',
            search: {
                search: 'Поиск ключа',
                clear: 'Очистить теперешний поиск',
                placeholderClient: 'Искать в клиенте',
                placeholderServer: 'Искать на сервере',
                largeSetInfo: 'In a large set, client side searching is disabled. so right now only server side searching is possible.',
                info: 'Поиск в клиенте означает совпадание с содержимым поля поиска. Серверный поиск означает поиск паттерном на подобие *{искомый-текст}*. Для поиска больших наборов лучше использовать серверный поиск. Для меньших поисковых наборов лучше использовать поиск клиентом.' + ` Если количество ключей превышает ${p3xr.settings.maxLightKeysCount}, можно будет искать только серверным поиском.`,
                infoDetails: 'Что бы понять как поиск работает, изучите настройки'
            },
            pager: {
                next: 'Следующий',
                prev: 'Предыдущий',
                first: 'Первый',
                last: 'Последний'
            }
        }
    },
    time: {
        years: 'года',
        months: 'месяца',
        days: 'дни',
        year: 'год',
        month: 'месяц',
        day: 'день',
    },
    redisTypes: {
        string: 'Строка',
        list: 'Список',
        hash: 'Стол хэшей',
        set: 'Набор',
        zset: 'Сортированный набор - zset',
        stream: 'Поток',
    }
}


module.exports = strings;
