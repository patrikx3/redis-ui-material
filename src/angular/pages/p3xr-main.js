p3xr.ng.component('p3xrMain', {
    template: require('./p3xr-main.html'),
    controller: function($cookies, p3xrSocket, p3xrCommon, p3xrRedisParser, $rootScope, $state) {

        const cookieNameCurrentDatabase = 'p3xr-main-current-database'

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
            const windowHeight = $window.height()
            //console.log(windowHeight, minus)

            const outputPositionMinus = 28
            const outputHeight = Math.max(windowHeight - minus- outputPositionMinus, 100)
            $container.height(outputHeight)
            $container.css('max-height', `${outputHeight}px`)

            const containerPosition = p3xr.dom.getPosition($container[0])

            const $treeControl = $('#p3xr-main-treecontrol-container')
            if ($treeControl) {
                $treeControl.css('top', containerPosition.top + 'px')
                $treeControl.css('left', containerPosition.left + 'px');
                $treeControl.css('height', containerPosition.height + 'px')
                $treeControl.css('max-height', containerPosition.height + 'px')
                $treeControl.css('width', '33%')
                $treeControl.css('max-width', '320px')

                const $content = $('#p3xr-main-content-container');
                $content.css('padding-left', ($treeControl.width() + 32) + 'px')
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

            $state.go('main.info')

        }

        this.$onDestroy = function () {
            $window.off('resize', resize)
        };

        let firsGetCurrentDatabase = true
        let selectedDatabase = 0
        let currentDatabase
        Object.defineProperty(this, 'currentDatabase', {
            get: () => {
                let currentDatabase =  p3xr.state.currentDatabase
                if (currentDatabase === undefined) {
                    currentDatabase = $cookies.get(cookieNameCurrentDatabase + '-' + p3xr.state.connection.id)
                }
                if (currentDatabase === undefined) {
                    currentDatabase = 0;
                }
                if (firsGetCurrentDatabase) {
                    firsGetCurrentDatabase = false;
                    if (currentDatabase != 0) {
                        this.selectDatabase(currentDatabase)
                    }
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

                $cookies.put(cookieNameCurrentDatabase + '-' + p3xr.state.connection.id, String(value), {
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
                this.refresh()
            } catch(e) {
                p3xrCommon.generalHandleError(e)
            }
        }

        this.refresh = async () => {
            try {
                const response = await p3xrSocket.request({
                    action: 'refresh',

                })
                $rootScope.p3xr.state.info = p3xrRedisParser.info(response.info)
                $rootScope.p3xr.state.keys = response.keys
                $rootScope.$digest()
            } catch(e) {
                p3xrCommon.generalHandleError(e)
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

