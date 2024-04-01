//const moment = require("moment");
//const momentDurationFormatSetup = require("moment-duration-format");

let interval

p3xr.ng.component('p3xrMainKey', {
    template: require('./p3xr-main-key.html'),
    bindings: {
        p3xrResize: '&',
    },
    controller: function (p3xrCommon, p3xrRedisParser, p3xrSocket, $rootScope, $stateParams, $timeout, $scope, $mdDialog, $state, $interval, p3xrDialogTtl, p3xrTheme, $mdColors) {
        $interval.cancel(interval)
        this.$stateParams = $stateParams;


        let wasExpiring = false
        const checkTtl = () => {

            if (this.response.ttl < -1 || (wasExpiring && this.response.ttl < 1)) {
                p3xrCommon.toast({
                    message: p3xr.strings.status.keyIsNotExisting
                })
                $interval.cancel(interval)
                p3xr.state.redisChanged = true
                $state.go('main.statistics')
//                $rootScope.$broadcast('p3xr-refresh')
                return false
            }
            return true

        }

        const humanizeDuration = require("humanize-duration");

        const loadTtl = () => {
            if (this.response.ttl > -1) {
                const actualTtl = () => {
                    if (checkTtl()) {

                        /*

                        let years, months, days, hours, mins, seconds
                        let diff

                        diff = this.response.ttl * 1000;
                        years = Math.floor((diff) / (1000 * 60 * 60 * 24 * 365));
                        diff = ((diff) % (1000 * 60 * 60 * 24 * 365));
                        months = Math.floor((diff) / (1000 * 60 * 60 * 24 * 30));
                        diff = ((diff) % (1000 * 60 * 60 * 24 * 30));
                        days = Math.floor((diff) / (1000 * 60 * 60 * 24));
                        diff = ((diff) % (1000 * 60 * 60 * 24));
                        hours = Math.floor((diff) / (1000 * 60 * 60));
                        diff = ((diff) % (1000 * 60 * 60));
                        mins = Math.floor((diff) / (1000 * 60));
                        diff = ((diff) / (1000 * 60));
                        seconds = Math.round((diff - mins) * 0.6 * 100);

                        let duration = '';
                        if (years > 0) {
                            duration += years + ' ' + (years === 1 ? $rootScope.p3xr.strings.time.year : $rootScope.p3xr.strings.time.years)
                            duration += ', '
                        }
                        if (months > 0) {
                            duration += months + ' ' + (months === 1 ? $rootScope.p3xr.strings.time.month : $rootScope.p3xr.strings.time.months)
                            duration += ', '
                        }
                        if (days > 0) {
                            duration += days + ' ' + (days === 1 ? $rootScope.p3xr.strings.time.day : $rootScope.p3xr.strings.time.days)
                            duration += ', '
                        }
                        duration += `${hours < 10 ? '0' + hours : hours}:${mins < 10 ? '0' + mins : mins}:${seconds < 10 ? '0' + seconds : seconds}`;

                        this.ttlParsed = ' ' + duration
                         */

                        let language
                        switch(p3xr.settings.language.current) {
                            case 'zn':
                                language = 'zh_CN'
                                break;
                            case 'ru':
                                language = 'ru'
                                break;
                            default:                                
                                language = 'en'
                                break;
                        }

                        this.ttlParsed = ' ' + humanizeDuration(this.response.ttl * 1000, {
                            language: language,
                            delimiter: ' ',
                        })
                        const counterEl = document.getElementById('p3xr-main-key-ttl-counter')
                        if (counterEl) {
                            counterEl.innerText = this.ttlParsed
                        }
                    } else {
                        $interval.cancel(interval)
                    }
                }
                actualTtl()

                if (!$rootScope.p3xr.state.reducedFunctions) {
                    $interval.cancel(interval)
                    interval = $interval(() => {
                        this.response.ttl = this.response.ttl - 1
                        //console.log('aha', this.response.ttl)
                        actualTtl()
                    }, 1000)
                }
            }

        }

        this.loading = false
        const loadKey = async (options = {}) => {
            $interval.cancel(interval)
            let {withoutParent} = options
            if (withoutParent === undefined) {
                withoutParent = false
            }

            
            let hadError = undefined
            try {

                // it can throw an error, when we switch the database
                //p3xr.ui.overlay.show({
                //    message: p3xr.strings.intention.getKey
                //})
                this.loading = true
               
                setTimeout(() => {
                    $scope.$digest();
                })

                //const type = p3xr.state.keysInfo[$stateParams.key].type
                //console.warn('$stateParams.key', $stateParams.key)
                const response = await p3xrSocket.request({
                    action: 'key-get',
                    payload: {
                        key: $stateParams.key,
                        //type: type,
                    }
                })
                this.response = response

                //const type = response.type
                if (response.ttl === -2) {
                    checkTtl()
                    return;
                }
                response.size = 0

                if (response.type !== 'stream') {
                    if (typeof response.valueBuffer === 'object' && response.length > 0) {
                        for (let keys of Object.keys(response.valueBuffer)) {
                            response.size += response.valueBuffer[keys].byteLength
                        }
                    } else if (Array.isArray(response.valueBuffer)) {
                        for (let i = 0; i < response.valueBuffer.length; i++) {
                            response.size += response.valueBuffer[i].byteLength
                        }
                    } else {
                        response.size = response.valueBuffer.byteLength
                    }    
                } else {
                    //console.log('response', response)
                    function sumMaxByteLength(arr) {
                        let total = 0;
                    
                        function processElement(element) {
                            if (ArrayBuffer.isView(element) || element instanceof ArrayBuffer) {
                                total += element.byteLength;
                            } else if (Array.isArray(element)) {
                                element.forEach(processElement);
                            }
                        }
                    
                        arr.forEach(processElement);
                        return total;
                    }
                    response.size = sumMaxByteLength(response.valueBuffer)                      
                }

                if (response.ttl > -1) {
                    wasExpiring = true
                }
                loadTtl()
                $scope.$digest()

            } catch (e) {
                hadError = e
                console.error(e)
                p3xrCommon.alert(p3xr.strings.label.unableToLoadKey({ key: $stateParams.key }))
                //p3xrCommon.generalHandleError(e)
            } finally {
                //p3xr.ui.overlay.hide()
                if (hadError !== undefined) {
                    $state.go('main.statistics');
                } else if (!withoutParent && $stateParams.resize !== null) {
                    $stateParams.resize()
                }

                $timeout(() => {
                    this.loading = false
                    $scope.$digest()
                }, p3xr.settings.debounce)

            }

        }

        const generateHighlight = () => {
            $('#p3xr-theme-styles-tree-key').remove()
            $('head').append('<style id="p3xr-theme-styles-tree-key">' + `
[data-p3xr-tree-key="${p3xr.ui.htmlEncode($stateParams.key)}"] .p3xr-main-tree-node-label {
    background-color: ${p3xrTheme.isDark() ? $mdColors.getThemeColor(p3xr.state.themeCommon + '-accent-300') : $mdColors.getThemeColor(p3xr.state.themeCommon + '-accent-800') } !important;
    color: ${p3xrTheme.isDark() ? 'black' : 'white' } !important;
    padding: 2px;
}
` + '</style>')
        }

        this.$onInit = () => {
            loadKey()
            generateHighlight()
        }

        $scope.$on('p3xr-theme-switched', generateHighlight)


        this.$onDestroy = function () {
            $('#p3xr-theme-styles-tree-key').remove()
            $interval.cancel(interval)
        };


        this.charactersPrettyBytes = (length) => {
            if (length < 1024 || length === undefined) {
                return ''
            }
            const prettyBytes = require('pretty-bytes');
            return '(' + prettyBytes(length) + ')'
        }

        this.refresh = async (options) => {

            window['gtag']('config', p3xr.settings.googleAnalytics,
                {
                    'page_path': '/refresh'
                }
            );
            await loadKey(options)
            $scope.$digest()
        }

        this.rename = (opts) => {
            $rootScope.$broadcast('p3xr-key-rename', {
                key: $stateParams.key,
                $event: opts.$event,
            });
        }

        this.delete = (options) => {
            $rootScope.$broadcast('p3xr-key-delete', {
                key: $stateParams.key,
                event: options.$event,
            });
        }

        this.addKey = (options) => {
            options.$event.stopPropagation();

            $rootScope.$broadcast('p3xr-key-new', {
                event: options.$event,
                node: {
                    key: options.key,
                }
            });

        }

        this.setTtl = async (options) => {
            try {

                /*
                const confirm = $mdDialog.prompt()
                    .title(p3xr.strings.confirm.ttl.title)
                    .textContent(p3xr.strings.confirm.ttl.textContent)
                    .placeholder(p3xr.strings.confirm.ttl.placeholder)
                    .ariaLabel(p3xr.strings.confirm.ttl.placeholder)
                    .initialValue(this.response.ttl === -1 ? '' : this.response.ttl)
                    .targetEvent(options.$event)
                    .ok(p3xr.strings.intention.ttl)
                    .cancel(p3xr.strings.intention.cancel);
                 */

//                const confirmResponse = await $mdDialog.show(confirm)

                const confirmResponse = await p3xrDialogTtl.show({
                    $event: options.$event,
                    model: {
                        ttl: this.response.ttl === -1 ? '' : this.response.ttl
                    }
                })


//                console.error('confirmResponse', confirmResponse)

//                console.error('String(confirmResponse.model.ttl).trim()', String(confirmResponse.model.ttl).trim())

                if (confirmResponse === undefined) {
                    return
                }

                if (confirmResponse.model.ttl == null || String(confirmResponse.model.ttl).trim() === '') {

                    const response = await p3xrSocket.request({
                        action: 'persist',
                        payload: {
                            key: $stateParams.key,
                        }
                    })

                    window['gtag']('config', p3xr.settings.googleAnalytics,
                        {
                            'page_path': '/persist'
                        }
                    );

                    await this.refresh()
                    p3xrCommon.toast({
                        message: p3xr.strings.status.persisted
                    })

                } else if (!String(confirmResponse.model.ttl).match(/^-{0,1}\d+$/)) {

                    p3xrCommon.toast({
                        message: p3xr.strings.status.notInteger
                    })

                } else {

                    const response = await p3xrSocket.request({
                        action: 'expire',
                        payload: {
                            key: $stateParams.key,
                            ttl: parseInt(confirmResponse.model.ttl),
                        }
                    })


                    window['gtag']('config', p3xr.settings.googleAnalytics,
                        {
                            'page_path': '/expire'
                        }
                    );


                    await this.refresh()
                    p3xrCommon.toast({
                        message: p3xr.strings.status.ttlChanged
                    })
                }

            } catch (e) {
                p3xrCommon.generalHandleError(e)
            }
        }

//        const refreshDebounced = debounce(this.refresh, 1000)
        /*
        $scope.$on('p3xr-refresh', () => {
            this.refresh({
                withoutParent: true
            })
        })
        */

        $scope.$on('p3xr-refresh-key', () => {
            this.refresh({
                withoutParent: true
            })
        })

    }
})

