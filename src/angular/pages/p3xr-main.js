p3xr.ng.component('p3xrMain', {
    template: require('./p3xr-main.html'),
    controller: function($cookies, p3xrSocket, p3xrCommon, p3xrRedisParser, $rootScope, $state, $timeout) {


        let $container
        let $header;
        let $footer;
        let $consoleHeader
        let scrollers

        const debounce = require('lodash/debounce')

        const resize = debounce(() => {
            let minus = 0
            for(let item of [$header, $footer, $consoleHeader]) {
                minus += item.outerHeight()
            }
            const windowHeight = $window.outerHeight()
            //console.log(windowHeight, minus)

            const outputPositionMinus = 28
            const outputHeight = Math.max(windowHeight - minus- outputPositionMinus, 100)
            $container.height(outputHeight)
            $container.css('max-height', `${outputHeight}px`)

            const containerPosition = p3xr.dom.getPosition($container[0])

            const $treeControl = $('#p3xr-main-treecontrol-container')
            if ($treeControl) {
                const treeTop = 48
                $treeControl.css('top', (containerPosition.top + treeTop) + 'px')
                $treeControl.css('left', containerPosition.left + 'px');
                $treeControl.css('height', (containerPosition.height - treeTop) + 'px')
                $treeControl.css('max-height', containerPosition.height + 'px')
                $treeControl.css('width', '33%')
//                $treeControl.css('max-width', '320px')

                const treeControlPosition = p3xr.dom.getPosition($treeControl[0])
                const $content = $('#p3xr-main-content-container');
                $content.css('top', containerPosition.top + 'px')
                $content.css('left', (containerPosition.left +  treeControlPosition.width ) + 'px')
                $content.css('width', (containerPosition.width - treeControlPosition.width ) + 'px')
                $content.css('height', containerPosition.height + 'px')

                const $treeControlControls = $('#p3xr-main-treecontrol-controls-container')
                $treeControlControls.height(treeTop)
                $treeControlControls.width(treeControlPosition.width)
            }

        }, p3xr.settings.debounce)

        this.resize = resize

        this.$onInit = () => {
            $container = $('#p3xr-main-content')
            $header = $('#p3xr-layout-header-container')
            $footer = $('#p3xr-layout-footer-container')
            $consoleHeader = $('#p3xr-main-header')
            scrollers = $container[0]

            resize()

            $window.on('resize', resize)

            $state.go('main.statistics')

            if (p3xr.state.redisChanged) {
                p3xr.state.redistChanged = true;
                this.refresh()
            }
        }

        this.$onDestroy = function () {
            $window.off('resize', resize)
        };

        let selectedDatabase = 0
        let currentDatabase
        Object.defineProperty(this, 'currentDatabase', {
            get: () => {
                let currentDatabase =  p3xr.state.currentDatabase
                if (currentDatabase === undefined) {
                    currentDatabase = $cookies.get(p3xr.settings.connection.getCookieNameCurrentDatabase(p3xr.state.connection.id))
                }
                if (currentDatabase === undefined) {
                    currentDatabase = 0;
                }
                return currentDatabase;
            },
            set: async(value) => {
                currentDatabase = value
                if (selectedDatabase !== currentDatabase) {
                    selectedDatabase = value

                    try {
                        const response = await p3xrSocket.request({
                            action: 'console',
                            payload: {
                                command: `select ${selectedDatabase}`
                            }
                        })
                    } catch(e) {
                        p3xrCommon.generalHandleError(e)
                    }
                }

                $cookies.put(p3xr.settings.connection.getCookieNameCurrentDatabase(p3xr.state.connection.id), String(value), {
                    expires: p3xr.settings.cookieExpiry,
                })
            }
        })

        this.selectDatabase = async(selectDbIndex) => {

            this.currentDatabase = selectDbIndex
            try {
                const response = await p3xrSocket.request({
                    action: 'console',
                    payload: {
                        command: `select ${selectDbIndex}`
                    }
                })
                p3xrCommon.toast({
                    message: p3xr.strings.status.dbChanged({
                        db: selectDbIndex
                    })
                })
                await this.refresh()

                $state.go('main.statistics')

            } catch(e) {
                p3xrCommon.generalHandleError(e)
            } finally {
                resize()
            }
        }


        this.save = async () => {
            try {
                const response = await p3xrSocket.request({
                    action: 'save',

                })
                $rootScope.p3xr.state.info = p3xrRedisParser.info(response.info)
                $rootScope.$digest()
                p3xrCommon.toast({
                    message: p3xr.strings.status.savedRedis
                })
            } catch(e) {
                p3xrCommon.generalHandleError(e)
            }
        }

        this.statistics = async () => {
            try {
               await this.refresh()
                $state.go('main.statistics')
            } catch(e) {
                p3xrCommon.generalHandleError(e)
            }
        }

        this.refresh = async () => {
            try {
                p3xr.ui.overlay.show({
                    message: p3xr.strings.status.reloadingDataInfo
                })
                const response = await p3xrSocket.request({
                    action: 'refresh',

                })
                p3xrCommon.loadRedisInfoResponse({
                    response: response
                })

            } catch(e) {
                p3xrCommon.generalHandleError(e)
            } finally {
                $timeout(() => {
                    p3xr.ui.overlay.hide()
                }, p3xr.settings.debounce)
            }
        }

        /*
 redis version = server - redis_version
 keys =  keyspace - dbIndex -> keys
 memory used -> memory - used_memory_human
 uptime -> server - uptime_in_days
 last save - save
 <?php
         if (isset($info[$i]['Persistence']['rdb_last_save_time'])) {
            if((time() - $info[$i]['Persistence']['rdb_last_save_time'] ) >= 0) {
               echo format_time(time() - $info[$i]['Persistence']['rdb_last_save_time']) . " ago";
            } else {
               echo format_time(-(time() - $info[$i]['Persistence']['rdb_last_save_time'])) . "in the future";
            }
         } else {
            echo 'never';
         }
     ?>



          */
    }
})

