p3xr.ng.component('p3xrMainKeyString', {
    template: require('./p3xr-main-key-string.html'),
    bindings: {
        p3xrValue: '=',
        p3xrKey: '<'
    },
    controller: function(p3xrSocket, p3xrCommon, $rootScope, $scope) {


        this.editable = false;
        let originalValue
        this.edit = () => {
            originalValue = angular.copy(this.p3xrValue)
            this.editable = true
        }

        this.cancelEdit = () => {
            this.p3xrValue = originalValue
            this.editable = false
        }



        this.save = async () => {
            try {
                const response = await p3xrSocket.request({
                    action: 'set-key',
                    payload: {
                        type: $rootScope.p3xr.state.keysInfo[this.p3xrKey].type,
                        value: this.p3xrValue,
                        key: this.p3xrKey,
                    }
                })
                this.editable = false
            } catch(e) {
                p3xrCommon.generalHandleError(e)
            }
        }

        let lastResult
        Object.defineProperty(this, 'isJson', {
            get: () => {
                try {
                    const obj = JSON.parse(this.p3xrValue)
                    if (lastResult !== true) {
                        this.p3xrValueObject = obj
                    }
                    lastResult = true
                    return true
                } catch(e) {
                    if (lastResult !== false) {
                        this.p3xrValueObject = undefined
                    }
                    lastResult = false
                    return false
                }
            }
        })

        this.showJson = false;
        this.jsonViewer = () => {
            this.showJson = !this.showJson
        }

    }
})

