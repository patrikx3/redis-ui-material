
p3xr.ng.component('p3xrMainKey', {
    template: require('./p3xr-main-key.html'),
    bindings: {
        p3xrResize: '&',
    },
    controller: function(p3xrCommon, p3xrRedisParser, p3xrSocket, $rootScope, $stateParams, $timeout) {

        this.$stateParams = $stateParams;

        this.$onInit = async() => {

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
                $stateParams.resize()
                $timeout(() => {
                    p3xr.ui.overlay.hide()
                }, p3xr.settings.debounce)
            }
        }
    }
})

