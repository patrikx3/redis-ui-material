p3xr.ng.component('p3xrSettings', {
    template: require('./p3xr-settings.html'),
    controller: function (p3xrCommon, p3xrDialogConnection, $mdDialog, p3xrSocket, p3xrDialogTreecontrolSettings, $scope) {

        this.connectionForm = (options) => {

            p3xrDialogConnection.show(options)

        }
        
        this.connect = ({ connection }) => {
            //console.log('connection', connection)
            $scope.$emit('p3xr-connect', {
                connection: connection
            })
        }

        this.setLicense = async (options) => {
            try {

                const confirm = $mdDialog.prompt()
                    .title(p3xr.strings.confirm.license.title)
                    .textContent(p3xr.strings.confirm.license.textContent)
                    .placeholder(p3xr.strings.confirm.license.placeholder)
                    .ariaLabel(p3xr.strings.confirm.license.placeholder)
                    .initialValue('')
                    .targetEvent(options.$event)
                    .ok(p3xr.strings.intention.license)
                    .cancel(p3xr.strings.intention.cancel);

                const confirmResponse = await $mdDialog.show(confirm)

                const response = await p3xrSocket.request({
                    action: 'set-license',
                    payload: {
                        license: confirmResponse
                    }
                })

                if (!global.p3xr.isBot() && response.donated !== p3xr.state.donated) {
                    window['gtag']('config', p3xr.settings.googleAnalytics,
                        {
                            'page_path': response.donated ? '/donated' : '/free'
                        }
                    );
                }


                p3xr.state.donated = response.donated

                //await this.refresh()
                p3xrCommon.toast({
                    message: response.info !== 'ok' ? p3xr.strings.error[response.info] : p3xr.strings.status.licenseSaved,
                })

            } catch (e) {
                if (e === undefined) {
                    return
                }
                if (p3xr.strings.error[e.message]) {
                    e = new Error(p3xr.strings.error[e.message])
                }
                p3xrCommon.generalHandleError(e)
            }
        }

        this.openTreeSettingDialog = (opts) => {
            p3xrDialogTreecontrolSettings.show(opts);
            //console.warn($rootScope.p3xr.state.redisTreeDivider)
        }

        this.deleteConnection = async (options) => {
            const {model, ev} = options;

            try {
                await p3xrCommon.confirm({
                    event: ev,
                    message: p3xr.strings.confirm.deleteConnectionText
                });
                const response = await p3xrSocket.request({
                    action: 'connection-delete',
                    payload: {
                        id: model.id
                    },
                })
                p3xrCommon.toast({
                    message: p3xr.strings.status.deleted
                });
            } catch (error) {
                if (error === undefined) {
                    /*
                    p3xrCommon.toast({
                        message: p3xr.strings.status.cancelled
                    });
                    */
                    return;
                }
                p3xrCommon.generalHandleError(error)
            }

        }

    }
})

