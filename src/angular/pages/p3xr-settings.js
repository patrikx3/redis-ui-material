p3xr.ng.component('p3xrSettings', {
    template: require('./p3xr-settings.html'),
    controller: function(p3xrCommon, p3xrDialogConnection, $mdDialog, p3xrSocket, p3xrDialogTreecontrolSettings) {

        this.connectionForm = (options) => {

            p3xrDialogConnection.show(options)

        }

        this.openTreeSettingDialog = (opts) => {
            p3xrDialogTreecontrolSettings.show(opts);
            //console.warn($rootScope.p3xr.state.redisTreeDivider)
        }

        this.deleteConnection = async (options) => {
            const { model, ev } = options;

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
            } catch(error) {
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

