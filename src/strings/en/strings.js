const strings = {
    title: {
        name: 'P3X Redis UI',
        main: 'You may choose a REDIS connection to connect from the left bottom menu.',
        confirm: {
            deleteConnection: 'Confirm',
            deleteConnectionText: 'Are you sure to delete this Redis connection?'
        },
    },
    intention: {
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
        redisConnected: 'Redis connected successful',
        added: 'Added',
        saved: 'Updated',
        cancelled: 'Cancelled',
        deleted: 'Deleted',
        redisDisconnected: (opts) => {
            return `The current connection had an error: ${opts.error.message}`
        }
    },
    code: {
        'delete-connection': 'This connection was deleted, so you are disconnected to this Redis instance.',
        'save-connection': 'This connection was changed, so you are disconnected to this Redis instance. You may re-connect.',
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
    }
}


module.exports = strings;