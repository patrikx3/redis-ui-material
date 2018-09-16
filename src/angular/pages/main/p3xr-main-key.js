
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

                if (response.ttl > 0) {
                    const parsedTtl = require('parse-ms')(response.ttl * 1000)
                    console.log(parsedTtl)
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
                $stateParams.resize()
                $timeout(() => {
                    p3xr.ui.overlay.hide()
                }, p3xr.settings.debounce)
            }
        }

        this.charactersPrettyBytes = (length) => {
            if (length < 1024 || length === undefined) {
                return ''
            }
            const prettyBytes = require('pretty-bytes');
            return '(' + prettyBytes(length) + ')'
        }
    }
})

