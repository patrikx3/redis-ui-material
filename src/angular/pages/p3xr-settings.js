p3xr.ng.component('p3xrSettings', {
    template: require('./p3xr-settings.html'),
    controller: function(p3xrCommon, p3xrDialogConnection, $mdDialog, p3xrSocket) {

        this.connectionForm = (options) => {

            p3xrDialogConnection.show(options)

        }

        this.deleteConnection = async (options) => {
            const { model, ev } = options;

            const confirm = $mdDialog.confirm()
                .title(p3xr.strings.title.confirm.deleteConnection)
                .textContent(p3xr.strings.title.confirm.deleteConnectionText)
                .targetEvent(ev)
                .ok(p3xr.strings.intention.delete)
                .cancel(p3xr.strings.intention.cancel);


            try {
                await $mdDialog.show(confirm);
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
                    p3xrCommon.toast({
                        message: p3xr.strings.status.cancelled
                    });
                    return;
                }
                p3xrCommon.generalHandleError(error)
            }

        }

    }
})

