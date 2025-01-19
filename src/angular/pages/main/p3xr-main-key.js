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



                        this.ttlParsed = ' ' + humanizeDuration(this.response.ttl * 1000, {
                            language: p3xr.settings.getHumanizeDurationLanguage(),
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
            const { withoutParent = false } = options;
        
            try {
                this.loading = true;
        
                const response = await p3xrSocket.request({
                    action: 'key-get',
                    payload: { key: $stateParams.key },
                });
        
                if (response.ttl === -2) {
                    checkTtl();
                    return;
                }
        
                const { type, valueBuffer } = response;
        
                switch (type) {
                    case 'string':
                        response.value = new TextDecoder().decode(valueBuffer);
                        break;
        
                    case 'list':
                    case 'set':
                        response.value = valueBuffer.map((buf) => new TextDecoder().decode(buf));
                        break;
        
                    case 'hash':
                        response.value = {};
                        Object.entries(valueBuffer).forEach(([key, buf]) => {
                            response.value[key] = new TextDecoder().decode(buf);
                        });
                        break;
        
                    case 'zset':
                        response.value = [];
                        for (let i = 0; i < valueBuffer.length; i += 2) {
                            // Ensure proper decoding of score and value
                            const value = new TextDecoder().decode(valueBuffer[i]);
                            const score = new TextDecoder().decode(valueBuffer[i + 1]);
                    
                            response.value.push(value);
                            response.value.push(score);
                        }
                        break;
        
                    case 'stream':
                        function decodeStreamEntry(entry) {
                            // Recursively decode stream entry
                            return entry.map((item) => {
                                if (Array.isArray(item)) {
                                    // If the item is an array, recursively process it
                                    return decodeStreamEntry(item);
                                } else if (ArrayBuffer.isView(item) || item instanceof ArrayBuffer) {
                                    // Decode binary data if it's an ArrayBuffer
                                    return new TextDecoder().decode(item);
                                } else {
                                    // Return strings or any other values as-is
                                    return item;
                                }
                            });
                        }
                    
                        // Process the valueBuffer
                        response.value = valueBuffer.map((entry) => decodeStreamEntry(entry));
                        break;
                }
        
                //console.log('response', response);

                this.response = response;
                loadTtl();
            } catch (e) {
                console.error(e);
                if (!p3xr.settings.handleConnectionIsClosed(e, $rootScope)) {
                    p3xrCommon.alert(p3xr.strings.label.unableToLoadKey({ key: $stateParams.key }));
                } else {
                    p3xrCommon.alert(e.message);
                }
            } finally {
                this.loading = false;
            }
        };
        

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
            return '(' + p3xr.settings.prettyBytes(length) + ')'
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

