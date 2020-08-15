//const moment = require("moment");
//const momentDurationFormatSetup = require("moment-duration-format");

p3xr.ng.component('p3xrMainKey', {
    template: require('./p3xr-main-key.html'),
    bindings: {
        p3xrResize: '&',
    },
    controller: function (p3xrCommon, p3xrRedisParser, p3xrSocket, $rootScope, $stateParams, $timeout, $scope, $mdDialog, $state, $interval, p3xrDialogTtl) {

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
//                $rootScope.$broadcast('p3x-refresh')
                return false
            }
            return true

        }

        let interval


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
                            default:
                                language = 'en'
                                break;
                        }

                        this.ttlParsed = ' ' + humanizeDuration(this.response.ttl * 1000, {
                            language: language,
                            delimiter: ' ',
                        })
                    } else {
                        $interval.cancel(interval)
                    }
                }
                actualTtl()

                if (!$rootScope.p3xr.state.reducedFunctions) {
                    interval = $interval(() => {
                        this.response.ttl = this.response.ttl - 1
                        actualTtl()
                    }, 1000)
                }
            }

        }

        const loadKey = async (options = {}) => {
            $interval.cancel(interval)
            let {withoutParent} = options
            if (withoutParent === undefined) {
                withoutParent = false
            }

            let hadError = undefined
            try {

                // it can throw an error, when we switch the database
                p3xr.ui.overlay.show({
                    message: p3xr.strings.intention.getKey
                })
                //const type = p3xr.state.keysInfo[$stateParams.key].type
                const response = await p3xrSocket.request({
                    action: 'key-get',
                    payload: {
                        key: $stateParams.key,
                        //type: type,
                    }
                })
                this.response = response

                const type = response.type
                if (response.ttl === -2) {
                    checkTtl()
                    return;
                }
                switch (type) {
                    case 'string':
                        // console.warn(response)
                        //p3xr.state.keysInfo[$stateParams.key].length = response.value.length
                        response.length = response.value.length
                        break;
                }

                if (response.ttl > -1) {
                    wasExpiring = true
                }
                loadTtl()


            } catch (e) {
                hadError = e
                console.error(e)
                p3xrCommon.alert(p3xr.strings.label.unableToLoadKey({ key: $stateParams.key }))
                //p3xrCommon.generalHandleError(e)
            } finally {
                p3xr.ui.overlay.hide()
                if (hadError !== undefined) {
                    $state.go('main.statistics');
                } else if (!withoutParent && $stateParams.resize !== null) {
                    $stateParams.resize()
                }
                /*
                $timeout(() => {
                    p3xr.ui.overlay.hide()
                }, p3xr.settings.debounce)
                */
            }
        }

        this.$onInit = () => loadKey()

        this.$onDestroy = function () {
            $interval.cancel(interval)
        };


        this.charactersPrettyBytes = (length) => {
            if (length < 1024 || length === undefined) {
                return ''
            }
            const prettyBytes = require('pretty-bytes');
            return '(' + prettyBytes(length) + ')'
        }

        this.refresh = (options) => {

            window['gtag']('config', p3xr.settings.googleAnalytics,
                {
                    'page_path': '/refresh'
                }
            );
            loadKey(options)
        }

        this.rename = async (opts) => {
            $rootScope.$broadcast('p3xr-key-rename', {
                key: $stateParams.key,
                $event: opts.$event,
            });
        }

        this.delete = async () => {
            $rootScope.$broadcast('p3xr-key-delete', {
                key: $stateParams.key
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
        $scope.$on('p3x-refresh', () => {
            this.refresh({
                withoutParent: true
            })
        })

        $scope.$on('p3x-refresh-key', () => {
            this.refresh({
                withoutParent: true
            })
        })

    }
})

