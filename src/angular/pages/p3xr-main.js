p3xr.ng.component('p3xrMain', {
    template: require('./p3xr-main.html'),
    controller: function($cookies, p3xrSocket) {

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

            const outputHeight = Math.max(windowHeight - minus- 28, 100)
            $container.height(outputHeight)
            $container.css('max-height', `${outputHeight}px`)

        }, p3xr.settings.debounce)

        this.$onInit = () => {
            $container = $('#p3xr-main-content')
            $header = $('.p3xr-layout-header-container')
            $footer = $('.p3xr-layout-footer-container')
            $consoleHeader = $('#p3xr-main-header')
            scrollers = $container[0]

            resize()

            $window.on('resize', resize)
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
                    currentDatabase = $cookies.get(cookieNameCurrentDatabase + '-' + p3xr.state.connection.id)
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

                $cookies.put(cookieNameCurrentDatabase + '-' + p3xr.state.connection.id, String(value), {
                    expires: p3xr.settings.cookieExpiry,
                })
            }
        })

        this.selectDatabase = async(selectDbIndex) => {

            this.currentDatabase = selectDbIndex
            alert(selectDbIndex)
        }
    }
})

