p3xr.ng.component('p3xrMainKeyStream', {
    template: require('./p3xr-main-key-stream.html'),
    bindings: {
        p3xrValue: '=',
        p3xrKey: '<',
        p3xrResponse: '<',
    },
    controller: function ($scope, p3xrCommon, p3xrSocket, p3xrDialogJsonView, p3xrDialogKeyNewOrSet, $rootScope) {

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

        this.showTimestamp = ({ timestamp }) => {
            const dateNow = Number(timestamp.slice(0, timestamp.indexOf('-') ))
            return new Date(dateNow).toString()
        }

    }
})

