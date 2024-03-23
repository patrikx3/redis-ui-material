p3xr.ng.component('p3xrMainKeyList', {
    template: require('./p3xr-main-key-list.html'),
    bindings: {
        p3xrValue: '=',
        p3xrValueBuffer: ' =',
        p3xrKey: '<',
        p3xrResponse: '<',
    },
    controller: function ($mdColors, p3xrCommon, p3xrSocket, $rootScope, p3xrDialogJsonView, p3xrDialogKeyNewOrSet, $scope, p3xrKeyPaging) {

        const self = this

        const keyPaging = new p3xrKeyPaging({
            $ctrl: self,
            $scope: $scope,
        })


        this.$onInit = () => {
            keyPaging.figurePaging()
        }

        const load = () => {
            const startIndex = p3xr.settings.keyPageCount * (this.page - 1);
            const endIndex = startIndex + p3xr.settings.keyPageCount;
            return this.p3xrValue.slice(startIndex, endIndex);
        };
        
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

        this.downloadBuffer = async ({$index, $event}) => {
            try {
                /*
                const response = await p3xrSocket.request({
                    action: 'key-get-string-buffer',
                    payload: {
                        key: this.p3xrKey,
                    }
                })
                */
                //console.log('response', response)

                const blob = new Blob([this.p3xrValueBuffer[$index]]);
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `${this.p3xrKey}-${$index}.bin`;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
            } catch (e) {
                p3xrCommon.generalHandleError(e)
            } finally {
            }
        }

        this.appendValue = async (options) => {

            try {
                const {index, value} = options
                await p3xrDialogKeyNewOrSet.show({
                    type: 'append',
                    $event: options.$event,
                    model: {
                        type: 'list',
                        key: this.p3xrKey
                    }
                })
                $rootScope.$broadcast('p3xr-refresh-key');
            } catch (e) {
                p3xrCommon.generalHandleError(e)
            }
        }


        this.editValue = async (options) => {

            try {
                const {index, value} = options
                await p3xrDialogKeyNewOrSet.show({
                    type: 'edit',
                    $event: options.$event,
                    model: {
                        type: 'list',
                        value: value,
                        index: options.index,
                        key: this.p3xrKey
                    }
                })
                $rootScope.$broadcast('p3xr-refresh-key');
            } catch (e) {
                p3xrCommon.generalHandleError(e)
            }
        }


        this.deleteListElement = async (options) => {
            try {
                await p3xrCommon.confirm({
                    event: options.$event,
                    message: p3xr.strings.confirm.deleteListItem,
                })
                const response = await p3xrSocket.request({
                    action: 'key-list-delete-index',
                    payload: {
                        key: this.p3xrKey,
                        index: options.index,
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

