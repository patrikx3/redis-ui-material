p3xr.ng.component('p3xrMainKeySet', {
    template: require('./p3xr-main-key-set.html'),
    bindings: {
        p3xrValue: '=',
        p3xrKey: '<',
        p3xrResponse: '<',
    },
    controller: function (p3xrCommon, p3xrSocket, p3xrDialogJsonView, p3xrDialogKeyNewOrSet, $rootScope, $scope, p3xrKeyPaging) {

        const self = this

        const keyPaging = new p3xrKeyPaging({
            $ctrl: self,
            $scope: $scope,
        })


        this.$onInit = () => {
            keyPaging.figurePaging()
        }

       
        const load = (n, o) => {
            const values = []
            const index = p3xr.settings.keyPageCount * (this.page - 1)
            let indexKeys = 0

            for(let valueIndex in this.p3xrValue) {
                if (indexKeys >= index && indexKeys < index + p3xr.settings.keyPageCount) {
                    values.push(this.p3xrValue[valueIndex])
                }
                indexKeys++
            }
            return values
        }
        $scope.$watch('$ctrl.page', (n, o) => {
            return load()
        })

        this.pageBasedList = (n, o) => {
            return load()
        }

        this.copy = (opts) => {
            global.p3xr.clipboard({
                value: opts.value
            })
            p3xrCommon.toast(p3xr.strings.status.dataCopied)
        }

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
                $rootScope.$broadcast('p3xr-refresh-key');
            } catch (e) {
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
                $rootScope.$broadcast('p3xr-refresh-key');
            } catch (e) {
                p3xrCommon.generalHandleError(e)
            }
        }

        this.editValue = async (options) => {
            try {
                const {value} = options
                await p3xrDialogKeyNewOrSet.show({
                    type: 'edit',
                    $event: options.$event,
                    model: {
                        type: 'set',
                        value: value,
                        key: this.p3xrKey
                    }
                })
                $rootScope.$broadcast('p3xr-refresh-key');
            } catch (e) {
                p3xrCommon.generalHandleError(e)
            }
        }


        this.showJson = (options) => {
            const {value} = options;
            p3xrDialogJsonView.show({
                value: value
            })
        }

    }
})

