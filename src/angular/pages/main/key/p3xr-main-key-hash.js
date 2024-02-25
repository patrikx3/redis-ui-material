p3xr.ng.component('p3xrMainKeyHash', {
    template: require('./p3xr-main-key-hash.html'),
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
           let values
           values = {}
           const index = p3xr.settings.keyPageCount * (this.page - 1)
           let indexKeys = 0
           for(let keys of Object.keys(this.p3xrValue)) {
               if (indexKeys >= index && indexKeys < index + p3xr.settings.keyPageCount) {
                   values[keys] = this.p3xrValue[keys]
               }
               indexKeys++
           }
           //console.log('test', values)
           return values
       }
        $scope.$watch('$ctrl.page', load)

        this.pageBasedList = () => {
            const result =  load()
            //console.log('result', result)
            return result
        }

        this.copy = (opts) => {
            global.p3xr.clipboard({
                value: opts.value
            })
            p3xrCommon.toast(p3xr.strings.status.dataCopied)
        }

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
                $rootScope.$broadcast('p3xr-refresh-key');
            } catch (e) {
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
                $rootScope.$broadcast('p3xr-refresh-key');
            } catch (e) {
                p3xrCommon.generalHandleError(e)
            }
        }

        this.editValue = async (options) => {
            try {
                const {hashKey, value} = options
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

