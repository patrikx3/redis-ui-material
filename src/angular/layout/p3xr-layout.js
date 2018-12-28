p3xr.ng.component('p3xrLayout', {
    template: require('./p3xr-layout.html'),
    controller: function (p3xrTheme, $rootScope, p3xrSocket, p3xrCommon, $state, $cookies) {
        this.setTheme = (theme) => {
            p3xrTheme.setTheme(p3xrTheme.generateThemeName(theme))
        }

        this.openLink = {
            github: () => {
                window.open(`https://github.com/patrikx3/redis-ui`, `github-patrikx3-${p3xr.pkg.corifeus.reponame}`)
            },
            githubTodo: () => {
                window.open(`https://github.com/patrikx3/redis-ui/blob/master/todo.md#to-do`, `github-patrikx3-${p3xr.pkg.corifeus.reponame}-todo`)
            },
            githubChangelog: () => {
                window.open(`https://github.com/patrikx3/redis-ui/blob/master/changelog.md#change-log`, `github-patrikx3-${p3xr.pkg.corifeus.reponame}-changelog`)
            },

        }

        const camelCase = require('lodash/camelCase')
        Object.defineProperty(this, 'themeSelectedKey', {
            get: () => {
                let key = p3xr.state.theme
                key = key.slice('p3xrTheme'.length)
                key = camelCase(key)
                return key
            }
        })

        let $warning
        const resize = () => {
            $warning.css('left', ((document.documentElement.clientWidth / 2) - ($warning.outerWidth() / 2)) + 'px')
        }

        this.reducedFunctionalty = () => {
            p3xrCommon.confirm({
                disableCancel: true,
                message: p3xr.strings.label.tooManyKeys({
                    count: $rootScope.p3xr.state.keysRaw.length,
                    maxLightKeysCount: p3xr.settings.maxLightKeysCount,
                })
            })
        }

        this.$onInit = () => {
            $warning= $('#p3xr-layout-reduced')
            resize()
            $window.on('resize', resize)
            const connection = $cookies.getObject(p3xr.settings.connectInfo.cookieName)
            if (connection !== undefined) {
                this.connect(connection)
            }
        }

        this.$onDestroy = function () {
            $window.off('resize', resize)
        };

        this.connect = async (connection) => {
            p3xr.state.search = '';


            connection = angular.copy(connection)
            try {
                const originalStateArr = location.pathname.split('/')
                originalStateArr.shift()
                const originalState = originalStateArr.join('.')
                //console.warn(originalState)

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
                p3xr.state.dbsize = response.dbsize

                let dbIndex = 0
                const databaseIndexes = []
                //console.warn(response)
                while(dbIndex < response.databases) {
                    databaseIndexes.push(dbIndex++)
                }

                p3xr.state.commands = []
                Object.keys(response.commands).forEach(key => {
                    p3xr.state.commands.push(response.commands[key][0])
                })
                p3xr.state.commands.sort()

                $rootScope.p3xr.state.databaseIndexes = databaseIndexes
                $rootScope.p3xr.state.connection = connection

                p3xrCommon.loadRedisInfoResponse({
                    response: response
                })

                $cookies.putObject(p3xr.settings.connectInfo.cookieName, connection, {
                    expires: p3xr.settings.cookieExpiry
                })

                if (!originalState.startsWith('main') ) {
                    $state.go(originalState)
                } else if (originalState === 'main') {
                    $state.go('main.statistics')
                }
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
                $cookies.remove(p3xr.settings.connectInfo.cookieName)
                await p3xrSocket.request({
                    action: 'connection-disconnect',
                    payload: {
                        connectionId: p3xr.state.connection.id,
                    },
                })
                $rootScope.p3xr.state.connection = undefined

            } catch(error) {
                p3xrCommon.generalHandleError(error)
            } finally {
                $state.go('main')
            }
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

