const strings = {
    title: {
        name: 'P3X Redis UI',
        main: 'You may choose a REDIS connection to connect from the left bottom menu.',
        statistics: 'Statistics',
        connectinRedis: 'Connecting to Redis ...',
        socketioConnectError: 'Socket.IO Error'
        /*
                server: 'Server',
                clients: 'Clients',
                memory: 'Memory',
                persistence: 'Persistance',
                stats: 'Statastics',
                replication: 'Replication',
                cpu: 'CPU',
                cluster: 'Cluster',
                keyspace: 'Keyspace',
        */
    },
    confirm: {
        title: 'Confirm',
        deleteConnection: 'Confirm',
        deleteConnectionText: 'Are you sure to delete this Redis connection?',
        deleteAllKeys: (opts) => {
            return `Delete this tree and all it\'s keys (${opts.key})?`
        },
        socketioConnectError: 'Socket.IO cannot connect to the server, you can reload and you might to resolve the connection error by yourself, the client does not know to solve it by itself.'
    },
    intention: {
        reload: 'Reload',
        close: 'Close',
        commands: 'Commands',
        view: 'View',
        statistics: 'Statistics',
        refresh: 'Refresh',
        clear: 'Clear',
        main: 'Home',
        cancel: 'Cancel',
        theme: 'Theme',
        github: 'GitHub',
        settings: 'Settings',
        connect: 'Connect',
        disconnect: 'Disconnect',
        overview: 'Overview',
        console: 'Console',
        noConnections: 'No connections, add a connection in the settings menu.',
        noConnectionsInSettings: 'No connections, you may add a NEW CONNECTION above.',
        connectionAdd: 'New connection',
        extend: 'Extend',
        collapse: 'Collapse',
        add: 'Add',
        edit: 'Edit',
        save: 'Save',
        'delete': 'Remove',
        'sure': 'Sure',
        testConnection: 'Test connection',
        getKey: 'Loading Redis key and associated data ...'
    },
    label: {
        passwordSecure: 'The password might will be empty, but still it will show characters, this is a security feature.',
        treeSeparatorEmpty: 'If the tree separator is empty, the tree wil have no nested nodes, just a pure list',
        treeSeparatorEmptyNote: 'No nested nodes, just a pure list',
        welcomeConsole: 'Welcome to the Redis Console',
        console: 'Console',
        connectiondAdd: 'Add connection',
        connectiondEdit: 'Edit connection',
        connectiondView: 'View connection',
        connections: 'Connections',
        keysSort: {
            on: 'Key sorting on',
            off: 'Key sorting off'
        },
        theme: {
            light: 'Light',
            dark: 'Dark',
        },
        connected: (opts) => {
            return `Connected: ${opts.name}`
        }
    },
    status: {
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

        }
    },
    code: {
        'delete-connection': 'This connection was deleted, so you are disconnected to this Redis instance.',
        'save-connection': 'This connection was changed, so you are disconnected to this Redis instance. You may re-connect.',
        'readonly-connections': 'Connections add/save/delete are readonly only!',
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
            },
        },
        treeSettings: {
            label: {
                formName: 'Tree settings',
                checkboxClient: 'Client mode',
                checkboxServer: 'Server mode',
            },
            field: {
                treeSeparator: 'Tree separator',
                page: 'Paging count',
                keysSort: 'Sort the keys',
                searchMode: 'Search mode',
            },
            error: {
                page: 'The page count must be an integer between 10 - 500'
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
            }
        },
        treeControls: {
            settings: 'Tree settings',
            expandAll: 'Expand all',
            collapseAll: 'Collapse all',
            search: {
                placeholderClient: 'Search client side',
                placeholderServer: 'Search server side',

                info: 'The client side search means, that it matches the text in the search input. The server side search means, that is it like search in the keys patterns as *{search-text}*'
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
        days: 'days',
        hours: 'hours',
        minutes: 'minutes',
        seconds: 'seconds',
    }
}


module.exports = strings;