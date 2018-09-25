p3xr.ng.component('p3xrMainKeyHash', {
    template: require('./p3xr-main-key-hash.html'),
    bindings: {
        p3xrValue: '=',
        p3xrKey: '<'
    },
    controller: function(p3xrCommon, p3xrSocket, p3xrDialogJsonView, p3xrDialogKeyNewOrSet, $rootScope) {

        this.addHash = async (options) => {

            try {
                await p3xrDialogKeyNewOrSet.show({
                    type: 'append',
                    $event: options.$event,
                    model: {
                        type: 'hash',
                        key: this.p3xrKey
                    }
                })
                $rootScope.$broadcast('p3x-refresh-key');
            } catch(e) {
                p3xrCommon.generalHandleError(e)
            }
        }

        this.deleteHashKey = async (options) => {
            try {
                await p3xrCommon.confirm({
                    event: options.$event,
                    message: p3xr.strings.confirm.deleteHashKey,
                })
                await p3xrSocket.request({
                    action: 'key-hash-delete-field',
                    payload: {
                        key: this.p3xrKey,
                        hashKey: options.hashKey,
                    }
                })
                $rootScope.$broadcast('p3x-refresh-key');
            } catch(e) {
                p3xrCommon.generalHandleError(e)
            }
        }

        this.editValue = async (options) => {
            try {
                const { hashKey, value } = options
                await p3xrDialogKeyNewOrSet.show({
                    type: 'edit',
                    $event: options.$event,
                    model: {
                        type: 'hash',
                        value: value,
                        hashKey: hashKey,
                        key: this.p3xrKey
                    }
                })
                $rootScope.$broadcast('p3x-refresh-key');
            } catch(e) {
                p3xrCommon.generalHandleError(e)
            }
        }


        this.showJson = (options) => {
            const { value } = options;
            p3xrDialogJsonView.show({
                value: value
            })
        }

        this.setTableStyles = (options) => {
            return p3xrCommon.setTableZebraStyles(options)
        }
    }
})

