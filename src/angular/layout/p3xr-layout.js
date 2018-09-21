p3xr.ng.component('p3xrLayout', {
    template: require('./p3xr-layout.html'),
    controller: function (p3xrTheme, $rootScope, p3xrSocket, p3xrCommon, $state, $cookies) {
        this.setTheme = (theme) => {
            p3xrTheme.setTheme(p3xrTheme.generateThemeName(theme))
        }

        this.openLink = {
            github: () => {
                window.open(`https://github.com/patrikx3/${p3xr.pkg.corifeus.reponame}`, `github-patrikx3-${p3xr.pkg.corifeus.reponame}`)
            }
        }

        Object.defineProperty(this, 'themeSelectedKey', {
            get: () => {
                let key = p3xr.state.theme
                key = key.slice('p3xrTheme'.length)
                key = key.toLowerCase()
                return key
            }
        })

        this.$onInit = () => {
            const connection = $cookies.getObject(p3xr.settings.connectInfo.cookieName)
            if (connection !== undefined) {
                this.connect(connection)
            }
        }


        this.connect = async (connection) => {
            connection = angular.copy(connection)
            try {
                p3xr.ui.overlay.show({
                    message: p3xr.strings.title.connectinRedis
                })
                const db = $cookies.get(p3xr.settings.connection.getCookieNameCurrentDatabase(connection.id))
                const response = await p3xrSocket.request({
                    action: 'connection-connect',
                    payload: {
                        connection: connection,
                        db: db
                    },
                })
                let dbIndex = 0
                const databaseIndexes = []
                //console.warn(response)
                while(dbIndex < response.databases) {
                    databaseIndexes.push(dbIndex++)
                }
                $rootScope.p3xr.state.databaseIndexes = databaseIndexes
                $rootScope.p3xr.state.connection = connection

                p3xrCommon.loadRedisInfoResponse({
                    response: response
                })

                $cookies.putObject(p3xr.settings.connectInfo.cookieName, connection, {
                    expires: p3xr.settings.cookieExpiry
                })

            } catch(error) {
                $cookies.remove(p3xr.settings.connectInfo.cookieName)
                $rootScope.p3xr.state.connection = undefined
                p3xrCommon.generalHandleError(error)
            } finally {
                p3xr.ui.overlay.hide()
            }

           // $rootScope.$digest()
        }



        this.disconnect = async () => {

            try {
                await p3xrSocket.request({
                    action: 'connection-disconnect',
                    payload: {
                        connectionId: p3xr.state.connection.id,
                    },
                })
                $rootScope.p3xr.state.connection = undefined
            } catch(error) {
                p3xrCommon.generalHandleError(error)
            }
            $cookies.remove(p3xr.settings.connectInfo.cookieName)
            $state.go('main')
           // $rootScope.$digest()
        }

        Object.defineProperty(this, 'connectionName', {
            get: () => {
                if ($rootScope.p3xr.state.connection !== undefined) {
                    return $rootScope.p3xr.strings.label.connected({
                        name: $rootScope.p3xr.state.connection.name
                    })
                } else {
                    return $rootScope.p3xr.strings.intention.connect
                }
            }
        })

        this.isMain = () => {
            return $state.current.name.startsWith('main')
        }


    }
})

