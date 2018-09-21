p3xr.ng.component('p3xrMainKeyString', {
    template: require('./p3xr-main-key-string.html'),
    bindings: {
        p3xrValue: '=',
        p3xrKey: '<'
    },
    controller: function(p3xrSocket, p3xrCommon, $rootScope, p3xrDialogJsonView) {


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
                    action: 'key-set',
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

        this.jsonViewer = (options) => {
            p3xrDialogJsonView.show({
                event: options.$event,
                value: this.p3xrValue
            })
//            this.showJson = !this.showJson
        }

    }
})

