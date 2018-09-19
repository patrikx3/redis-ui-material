//const debounce = require('lodash/debounce')

p3xr.ng.component('p3xrMainKey', {
    template: require('./p3xr-main-key.html'),
    bindings: {
        p3xrResize: '&',
    },
    controller: function(p3xrCommon, p3xrRedisParser, p3xrSocket, $rootScope, $stateParams, $timeout, $scope, $mdDialog, $state) {

        this.$stateParams = $stateParams;

        const loadKey = async(options = {}) => {

            let { withoutParent } = options
            if (withoutParent === undefined) {
                withoutParent = false
            }

            try {
                p3xr.ui.overlay.show({
                    message: p3xr.strings.intention.getKey
                })
                const type = p3xr.state.keysInfo[$stateParams.key].type
                const response = await p3xrSocket.request({
                    action: 'get-key',
                    payload: {
                        key: $stateParams.key,
                        type: type,
                    }
                })
                if (response.ttl === -2) {
                    p3xrCommon.toast({
                        message: p3xr.strings.status.keyIsNotExisting
                    })
                    $state.go('main.statistics')
                    return;
                }
                if (response.ttl > 0) {
                    const parsedTtl = require('parse-ms')(response.ttl * 1000)
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
                }


                switch(type) {
                    case 'zset':
                        const scores = Object.keys(response.score).sort()
                        const sortedScores = []
                        for(let score of scores) {
                            sortedScores.push([parseInt(score), response.score[score]])
                        }
                        break;

                    case 'string':
                       // console.warn(response)
                        p3xr.state.keysInfo[$stateParams.key].length = response.value.length
                        break;
                }

                this.response = response
            } catch(e) {
                p3xrCommon.generalHandleError(e)
            } finally {
                if (!withoutParent) {
                    $stateParams.resize()
                }
                $timeout(() => {
                    p3xr.ui.overlay.hide()
                }, p3xr.settings.debounce)
            }
        }

        this.$onInit = () => loadKey()

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

    }
})

