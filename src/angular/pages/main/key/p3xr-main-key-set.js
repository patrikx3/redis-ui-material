p3xr.ng.component('p3xrMainKeySet', {
    template: require('./p3xr-main-key-set.html'),
    bindings: {
        p3xrValue: '=',
        p3xrKey: '<',
        p3xrResponse: '<',
    },
    controller: function(p3xrCommon, p3xrSocket, p3xrDialogJsonView, p3xrDialogKeyNewOrSet, $rootScope) {

        this.addSet = async (options) => {

            try {
                await p3xrDialogKeyNewOrSet.show({
                    type: 'append',
                    $event: options.$event,
                    model: {
                        type: 'set',
                        key: this.p3xrKey
                    }
                })
                $rootScope.$broadcast('p3x-refresh-key');
            } catch(e) {
                p3xrCommon.generalHandleError(e)
            }
        }

        this.deleteSetMember = async (options) => {
            try {
                await p3xrCommon.confirm({
                    event: options.$event,
                    message: p3xr.strings.confirm.deleteSetMember,
                })
                await p3xrSocket.request({
                    action: 'key-set-delete-member',
                    payload: {
                        key: this.p3xrKey,
                        value: options.value,
                    }
                })
                $rootScope.$broadcast('p3x-refresh-key');
            } catch(e) {
                p3xrCommon.generalHandleError(e)
            }
        }

        this.editValue = async (options) => {
            try {
                const { value } = options
                await p3xrDialogKeyNewOrSet.show({
                    type: 'edit',
                    $event: options.$event,
                    model: {
                        type: 'set',
                        value: value,
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

