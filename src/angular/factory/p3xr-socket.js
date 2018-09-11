p3xr.ng.factory('p3xrSocket', function ($rootScope, p3xrCommon, $state) {

    // socket.io now auto-configures its connection when we ommit a connection url
    const ioOptions = {
        rejectUnauthorized: false,
        path: '/socket.io',
        transports: ['websocket'],
        secure: true,
    }

    const ioClient = io.connect(p3xr.api.host, ioOptions);

    let reconnect = false;
    ioClient.on('connect', async function () {
        if (reconnect) {
            console.log('p3xr-socket (socket) RE-connected', ioClient.id)
            //return;
        } else {
            console.log('p3xr-socket (socket) connected', ioClient.id)
        }
        reconnect = true;

    })

    ioClient.on('disconnect', async function () {
        location.reload()
    })

    ioClient.on('connections', (data) => {
        //console.log(data)
        if (!p3xrCommon.generalHandleError(data)) {
            p3xr.connectionsReset()
            return;
        }
        p3xr.state.connections = data.connections
        $rootScope.$digest()
    })

    ioClient.on('redis-disconnected', async(data) => {
        if ($rootScope.p3xr.state.connection !== undefined && $rootScope.p3xr.state.connection.id === data.connectionId) {
            $rootScope.p3xr.state.connection = undefined;

            if (data.status === 'error') {
                p3xrCommon.toast({
                    message: p3xr.strings.status.redisDisconnected(data)
                })
            } else if (data.status === 'code') {
                if (!p3xr.strings.code.hasOwnProperty(data.code)) {
                    p3xrCommon.toast({
                        message: `unknown redis disconnect code: ${data.code}`
                    })

                } else {
                    p3xrCommon.toast({
                        message: p3xr.strings.code[data.code]
                    })
                }
            }
            $state.go('main')

            try {
                await request({
                    action: 'trigger-redis-disconnect',
                    enableResponse: false,
                })
            } catch(e) {
                p3xrCommon.generalHandleError(e)
            }

            //$rootScope.$digest();
        }
    })

    ioClient.on('redis-status', (data) => {
        $rootScope.p3xr.state.redisConnections = data.redisConnections
        //console.warn(data.redisConnections)
        $rootScope.$digest();
    })

    ioClient.on('error', p3xrCommon.generalHandleError)

    const request = (options) => {
        let { enableResponse } = options
        if (enableResponse !== false) {
            enableResponse = true
        }
        if (enableResponse) {
            return new Promise((resolve, reject) => {
                options.requestId = p3xr.nextId();
                const responseEvent = `p3xr-response-${options.requestId}`
                let timeout
                const response = (data) => {
                    clearTimeout(timeout)
                    ioClient.off(responseEvent)
                    if (data.status === 'ok') {
                        resolve(data)
                    } else {
                        const error = new Error(data.error.message)
                        reject(error)
                    }
                    $rootScope.$digest()
                }
                timeout = setTimeout(() => {
                    ioClient.off(responseEvent, response)
                    reject(new Error(`socket.io request timeout ${p3xr.settings.socket.timeout}ms`));
                    $rootScope.$digest()
                }, p3xr.settings.socket.timeout)
                ioClient.on(responseEvent, response)
                ioClient.emit('p3xr-request', options)
            })
        } else {
            ioClient.emit('p3xr-request', options)
        }
    }

    return {
        ioClient: ioClient,
        request: request,
    };
});
