p3xr.ng.component('p3xrLayout', {
    template: require('./p3xr-layout.html'),
    controller: function (p3xrTheme, $rootScope, p3xrSocket, p3xrCommon, $state, $cookies, $timeout, $scope, p3xrDialogAskAuthorization) {

        let themesCache
        this.getThemeKey = (themes) => {
            if (themesCache === undefined) {
                const themesKeys = Object.keys(themes)
                themesCache = themesKeys.sort((a, b) => {
                    return themes[a].order - themes[b].order;
                })
            }
            return themesCache
        }

        this.getVersionColor = () => {
            return p3xrTheme.getCurrentThemeName() === 'p3xrThemeMatrix' ? 'grey-900' : 'background-A100'
        }

        this.setTheme = (theme) => {
            p3xrTheme.setTheme(p3xrTheme.generateThemeName(theme))
        }

        this.openLink = {
            github: () => {
                window.open(`https://github.com/patrikx3/redis-ui`, `github-patrikx3-redis-ui`)
            },
            githubRelease: () => {
                window.open(`https://github.com/patrikx3/redis-ui/releases`, `github-patrikx3--redis-ui-releases`)
            },
            githubChangelog: () => {
                window.open(`https://github.com/patrikx3/redis-ui/blob/master/change-log.md#change-log`, `github-patrikx3-redis-ui-changelog`)
            },
            donate: () => {
                window.open(`https://www.paypal.me/patrikx3`, `p3x-redis-ui-donate`)
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
            $warning = $('#p3xr-layout-reduced')
            resize()
            $window.on('resize', resize)
            const connection = $cookies.getObject(p3xr.settings.connectInfo.cookieName)
            if (connection !== undefined) {
                this.connect(connection)
            }
            $timeout(() => {
                global.p3xrSetLanguage = (key) => {
                    $rootScope.$apply(() => {
                        $rootScope.isElectron = true
                        this.setLanguage(key)
                    })
                }
                global.p3xrSetMenu = (menu) => {
                    $rootScope.$apply(() => {
                        $rootScope.isElectron = true
                        $state.go(menu)
                    })
                }
            }, 3000)

            /*
            $('head').append(`
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-169625044-1"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-169625044-1');
</script>
`)
             */



        }


        this.$onDestroy = function () {
            $window.off('resize', resize)
        };

        //let waitForGoogleTag
        //let waitedForGoogleTag = false
        //const maxWaitForGooglaTag = 4 * 5
        if (!global.p3xr.isBot()) {
            $rootScope.$on('$locationChangeSuccess', async function (event, to, from) {
                const url = new URL(to)
                if (url.pathname.toLowerCase().startsWith('/main/key/')) {
                    window['gtag']('config', p3xr.settings.googleAnalytics,
                        {
                            'page_path': '/main/key'
                        }
                    );
                    return
                }
                console.log('$locationChangeSuccess gtag', url.pathname)
                window['gtag']('config', p3xr.settings.googleAnalytics,
                    {
                        'page_path': url.pathname
                    }
                );
            });
        }

        $scope.$on('p3xr-connect', (event, { connection }) => {
            this.connect(connection, true)
        })

        this.connect = async (connection, disableState = false) => {

            console.time('connect')

            
            //console.log('connection', connection)
            //p3xr.state.search = '';


            connection = global.p3xr.clone(connection)
            try {
                const originalStateArr = location.pathname.split('/')
                originalStateArr.shift()
                let originalState = originalStateArr.join('.')
                if (originalState === '') {
                    originalState = 'main'
                }

                const db = $cookies.get(p3xr.settings.connection.getCookieNameCurrentDatabase(connection.id))


                if (connection.askAuth === true) {
                    const auth = await p3xrDialogAskAuthorization.show({
                        $event: undefined
                    })   
                    connection.username = undefined
                    connection.password = undefined
                    if (auth.username) {
                        connection.username = auth.username
                    }
                    if (auth.password) {
                        connection.password = auth.password
                    }

                }

                p3xr.ui.overlay.show({
                    message: p3xr.strings.title.connectingRedis
                })


                const response = await p3xrSocket.request({
                    action: 'connection-connect',
                    payload: {
                        connection: connection,
                        db: db
                    },
                })
                $rootScope.p3xr.state.page = 1
                p3xr.state.dbsize = response.dbsize

                let dbIndex = 0
                const databaseIndexes = []
                //console.warn(response)
                while (dbIndex < response.databases) {
                    databaseIndexes.push(dbIndex++)
                }

                p3xr.state.commands = []
                Object.keys(response.commands).forEach(key => {
                    p3xr.state.commands.push(response.commands[key][0])
                })
                p3xr.state.commands.sort()
                //console.warn('p3xr.state.commands', p3xr.state.commands)

                $rootScope.p3xr.state.databaseIndexes = databaseIndexes
                $rootScope.p3xr.state.connection = connection

                p3xrCommon.loadRedisInfoResponse({
                    response: response
                })

                $cookies.putObject(p3xr.settings.connectInfo.cookieName, connection, {
                    expires: p3xr.settings.cookieExpiry
                })

                //$state.go('main.statistics')
                //$state.reload();

                if (disableState === true) {
                    if (originalState.startsWith('main.key')) {
                        originalState = 'main'
                    }
                }

                $timeout(() => {
                        //console.warn('console original state', originalState)
                        if (originalState === 'main') {
                            $state.go('main.statistics')
                        } else {
                            if (originalState.startsWith('main.key')) {
                                //console.warn('trigger state', originalStateArr[2])
                                $state.go('main.key', {
                                    key: decodeURIComponent(originalStateArr[2].replace(/~/g, '%'))
                                })    
                            } else {
                                $state.go(originalState)
                            }
                        }
                }, p3xr.settings.debounce)
            } catch (error) {
                $cookies.remove(p3xr.settings.connectInfo.cookieName)
                $rootScope.p3xr.state.connection = undefined
                //$state.go('main.statistics')
                p3xrCommon.generalHandleError(error)
            } finally {
                p3xr.ui.overlay.hide()
            }
            // $rootScope.$digest()
            console.timeEnd('connect')

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

            } catch (error) {
                p3xrCommon.generalHandleError(error)
            } finally {
                $state.go('settings')
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


        this.isElectronInitialized = false
        this.setLanguage = async (key) => {
            try {
                $rootScope.p3xr.settings.language.current = key
                if ($rootScope.isElectron) {
                    await p3xrSocket.request({
                        action: 'set-language',
                        payload: {
                            key: key,
                        }
                    })
                    this.isElectronInitialized = true
                    $scope.$digest()
                }
            } catch (e) {
                p3xrCommon.generalHandleError(e)
            }
        }


    }
})

