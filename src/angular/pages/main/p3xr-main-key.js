//const debounce = require('lodash/debounce')
const parseMs = require('parse-ms')
p3xr.ng.component('p3xrMainKey', {
    template: require('./p3xr-main-key.html'),
    bindings: {
        p3xrResize: '&',
    },
    controller: function(p3xrCommon, p3xrRedisParser, p3xrSocket, $rootScope, $stateParams, $timeout, $scope, $mdDialog, $state, $interval) {

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
        const loadTtl = () => {
            if (this.response.ttl > -1) {
               const actualTtl = () => {
                   if (checkTtl()) {
                       const parsedTtl = parseMs(this.response.ttl * 1000)
                       // console.log(parsedTtl)
                       let parsedTtlString = ''

                       let hadValue = false
                       for(let timeType of ['days', 'hours', 'minutes', 'seconds']) {
                           if (parsedTtl[timeType] > 0 || hadValue) {
                               hadValue = true
                               parsedTtlString +=  ' ' + parsedTtl[timeType] + ' ' + p3xr.strings.time[timeType]
                           }
                       }
                       this.ttlParsed = parsedTtlString.trim()
                   } else {
                       $interval.cancel(interval)
                   }
               }
                actualTtl()

                if (!$rootScope.p3xr.state.reducedFunctions) {
                    interval= $interval(() => {
                        this.response.ttl = this.response.ttl - 1
                        actualTtl()
                    }, 1000)
                }
            }

        }

        const loadKey = async(options = {}) => {
            $interval.cancel(interval)
            let { withoutParent } = options
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
                switch(type) {
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


            } catch(e) {
                hadError = e
                p3xrCommon.generalHandleError(e)
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
            loadKey(options)
        }

        this.rename = async (opts) => {
            $rootScope.$broadcast('p3xr-key-rename', {
                key: $stateParams.key,
                $event: opts.$event,
            });
        }

        this.delete = async() => {
            $rootScope.$broadcast('p3xr-key-delete', {
                key: $stateParams.key
            });
        }

        this.setTtl = async (options) => {
            try {

                const confirm = $mdDialog.prompt()
                    .title(p3xr.strings.confirm.ttl.title)
                    .textContent(p3xr.strings.confirm.ttl.textContent)
                    .placeholder(p3xr.strings.confirm.ttl.placeholder)
                    .ariaLabel(p3xr.strings.confirm.ttl.placeholder)
                    .initialValue(this.response.ttl === -1 ? '' : this.response.ttl)
                    .targetEvent(options.$event)
                    .ok(p3xr.strings.intention.ttl)
                    .cancel(p3xr.strings.intention.cancel);

                const confirmResponse = await $mdDialog.show(confirm)

                if (confirmResponse === undefined || confirmResponse.trim() === '') {

                    const response = await p3xrSocket.request({
                        action: 'persist',
                        payload: {
                            key: $stateParams.key,
                        }
                    })
                    await this.refresh()
                    p3xrCommon.toast({
                        message: p3xr.strings.status.persisted
                    })

                } else if (!confirmResponse.match(/^-{0,1}\d+$/)) {

                    p3xrCommon.toast({
                        message: p3xr.strings.status.notInteger
                    })

                } else {

                    const response = await p3xrSocket.request({
                        action: 'expire',
                        payload: {
                            key: $stateParams.key,
                            ttl: parseInt(confirmResponse),
                        }
                    })
                    await this.refresh()
                    p3xrCommon.toast({
                        message: p3xr.strings.status.ttlChanged
                    })
                }

            } catch(e) {
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

