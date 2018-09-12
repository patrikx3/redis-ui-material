
p3xr.ng.component('p3xrMainKey', {
    template: require('./p3xr-main-key.html'),
    controller: function(p3xrCommon, p3xrRedisParser, p3xrSocket, $rootScope, $stateParams) {

        this.$stateParams = $stateParams;

        this.$onInit = async() => {
            try {

                const response = await p3xrSocket.request({
                    action: 'get-key',
                    payload: {
                        key: $stateParams.key,
                        type: p3xr.state.keysType[$stateParams.key],
                    }
                })
                this.value = response.value
            } catch(e) {
                p3xrCommon.generalHandleError(e)
            }
        }
    }
})

