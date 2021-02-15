p3xr.ng.component('p3xrMainKeyStream', {
    template: require('./p3xr-main-key-stream.html'),
    bindings: {
        p3xrValue: '=',
        p3xrKey: '<',
        p3xrResponse: '<',
    },
    controller: function ($scope, p3xrCommon, p3xrSocket, p3xrDialogJsonView, p3xrDialogKeyNewOrSet, $rootScope, $scope) {

        const figurePaging = () => {
            this.pages = Math.ceil(Object.keys(this.p3xrValue).length / p3xr.settings.keyPageCount)
            this.page = 1
        }

        $scope.$watch(this.pageBasedList, figurePaging)

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


        this.p3xrValueGenerated = []
        $scope.$watch('$ctrl.p3xrValue', (n, o) => {

            this.p3xrValueGenerated = []
            for(let value of this.p3xrValue) {
                const data = value[1]
                const result = []

                for(let i = 0; i < data.length; i = i + 2) {
                    result.push([
                        data[i],
                        data[i + 1],
                    ])
                }
                this.p3xrValueGenerated.push(result)
            }
            figurePaging()
        })

        this.copy = (opts) => {
            global.p3xr.clipboard({
                value: opts.value
            })
            p3xrCommon.toast(p3xr.strings.status.dataCopied)
        }

        this.addStream = async (options) => {

            try {
                await p3xrDialogKeyNewOrSet.show({
                    type: 'append',
                    $event: options.$event,
                    model: {
                        type: 'stream',
                        key: this.p3xrKey
                    }
                })
                $rootScope.$broadcast('p3x-refresh-key');
            } catch (e) {
                p3xrCommon.generalHandleError(e)
            }
        }

        this.deleteStreamTimestamp = async (options) => {
            try {
                await p3xrCommon.confirm({
                    event: options.$event,
                    message: p3xr.strings.confirm.deleteStreamTimestamp,
                })
                await p3xrSocket.request({
                    action: 'key-stream-delete-timestamp',
                    payload: {
                        key: this.p3xrKey,
                        streamTimestamp: options.streamTimestamp,
                    }
                })
                $rootScope.$broadcast('p3x-refresh-key');
            } catch (e) {
                p3xrCommon.generalHandleError(e)
            }
        }

        const moment = require('moment')
        this.showTimestamp = ({ timestamp }) => {
            const dateNow = Number(timestamp.slice(0, timestamp.indexOf('-') ))
            const date = new Date(dateNow)
            return moment(date).format('L LTS')
        }

    }
})

