p3xr.ng.component('p3xrMainKeyHash', {
    template: require('./p3xr-main-key-hash.html'),
    bindings: {
        p3xrValue: '=',
        p3xrKey: '<',
        p3xrResponse: '<',
    },
    controller: function (p3xrCommon, p3xrSocket, p3xrDialogJsonView, p3xrDialogKeyNewOrSet, $rootScope, $scope) {

        const figurePaging = () => {
            this.pages = Math.ceil(Object.keys(this.p3xrValue).length / p3xr.settings.keyPageCount)
            this.page = 1
        }

        $scope.$watch('$root.p3xr.settings.keyPageCount', () => {
            figurePaging()
        })

        this.$onInit = () => {
            figurePaging()
        }

        this.pager = (options) => {
            const {page} = options
            ///console.log(page )
            switch (page) {
                case 'prev':
                    if (this.page - 1 >= 1) {
                        this.page = this.page - 1
                    }
                    break;

                case 'next':
                    if (this.page + 1 <= this.pages) {
                        this.page = this.page + 1
                    }
                    break;

                case 'last':
                    this.page = this.pages
                    break;

                case 'first':
                    this.page = 1
                    break;

            }
        }

        this.pageChange = () => {
            if (this.page < 1) {
                this.page = 1
            } else if (this.page > this.pages) {
                this.page = this.pages
            }
        }

        this.pageBasedList = () => {
            const values = {}
            const index = p3xr.settings.keyPageCount * (this.page - 1)
            let indexKeys = 0
            for(let keys of Object.keys(this.p3xrValue)) {
                if (indexKeys >= index && indexKeys < index + p3xr.settings.keyPageCount) {
                    values[keys] = this.p3xrValue[keys]
                }
                indexKeys++
            }
            return values
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
                $rootScope.$broadcast('p3x-refresh-key');
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
                $rootScope.$broadcast('p3x-refresh-key');
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
                $rootScope.$broadcast('p3x-refresh-key');
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

