const strings = {
    title: {
        name: 'P3X Redis UI',
        main: 'You may choose a REDIS connection to connect from the left bottom menu.',
        statistics: 'Statistics',
        connectinRedis: 'Connecting to Redis ...',
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
            return  `Delete this tree and all it\'s keys (${opts.key})?`
        }
    },
    intention: {
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
        'sure' : 'Sure',
        testConnection: 'Test connection',
    },
    label: {
        welcomeConsole: 'Welcome to the Redis Console',
        console: 'Console',
        connectiondAdd: 'Add connection',
        connectiondEdit: 'Edit connection',
        connections: 'Connections',
        theme: {
            light: 'Light',
            dark: 'Dark',
        },
        connected: (opts) => {
            return `Connected: ${opts.name}`
        }
    },
    status: {
        noRedisKeys: 'There are no keys in this database.',
        redisConnected: 'Redis connected successful',
        added: 'Added',
        saved: 'Updated',
        cancelled: 'Cancelled',
        deleted: 'Deleted',
        savedRedisDb: 'The Db is saved',
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
        }
    },
}


module.exports = strings;