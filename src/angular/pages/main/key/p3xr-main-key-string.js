p3xr.ng.component('p3xrMainKeyString', {
    template: require('./p3xr-main-key-string.html'),
    bindings: {
        p3xrValue: '=',
        p3xrKey: '<',
        p3xrResponse: '<',
    },
    controller: function (p3xrSocket, p3xrCommon, $rootScope, p3xrDialogJsonView, p3xrDialogJsonEditor) {


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


        this.validateJson = false

        this.save = async () => {
            try {
                if (this.validateJson === true) {
                    try {
                        JSON.parse(this.p3xrValue)
                    } catch (e) {
                        p3xrCommon.toast({
                            message: p3xr.strings.label.jsonViewNotParsable
                        })
                        return;
                    }
                }

                const response = await p3xrSocket.request({
                    action: 'key-set',
                    payload: {
                        type: this.p3xrResponse.type,
                        value: this.p3xrValue,
                        key: this.p3xrKey,
                    }
                })

                window['gtag']('config', p3xr.settings.googleAnalytics,
                    {
                        'page_path': '/key-set'
                    }
                );

                this.editable = false
                $rootScope.$broadcast('p3x-refresh-key');
            } catch (e) {
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

        this.jsonEditor = async(options) => {
            try {
                const result = await p3xrDialogJsonEditor.show({
                    event: options.$event,
                    value: this.p3xrValue
                })
                this.p3xrValue = result.obj
                await this.save()
            } catch(e) {
                p3xrCommon.generalHandleError(e)
            }
//            this.showJson = !this.showJson
        }

        this.formatJson = async () => {
            try {
                this.p3xrValue = JSON.stringify(JSON.parse(this.p3xrValue), null, p3xr.settings.jsonFormat)
                await this.save()
            } catch(e) {
                p3xrCommon.toast({
                    message: p3xr.strings.label.jsonViewNotParsable
                })
            }
        }

    }
})

