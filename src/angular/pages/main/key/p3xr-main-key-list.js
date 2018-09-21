p3xr.ng.component('p3xrMainKeyList', {
    template: require('./p3xr-main-key-list.html'),
    bindings: {
        p3xrValue: '=',
        p3xrKey: '<'
    },
    controller: function($mdColors, p3xrCommon, p3xrSocket, $rootScope, p3xrDialogJsonView) {

        this.editingValue = {

        }

        this.model = {

        }

        this.editValue = (options) => {
            const { $index, value } = options
            this.editingValue[$index] = true
            this.model[$index] = {
                index: $index,
                value: value
            }
        }

        this.cancelEditValue = (options) => {
            const { $index } = options
            this.editingValue[$index] = false
        }



        this.saveEditValue = async (options) => {

            try {
                const { $index } = options
                const model = this.model[$index]
                const response = await p3xrSocket.request({
                    action: 'key-list-set',
                    payload: {
                        key: this.p3xrKey,
                        model: model,
                    }
                })
                $rootScope.$broadcast('p3x-refresh-key');
                this.editingValue[$index] = false
            } catch(e) {
                p3xrCommon.generalHandleError(e)
            }

        }

        this.deleteListElement = async (options) => {
            try {
                const response = await p3xrSocket.request({
                    action: 'key-list-delete-index',
                    payload: {
                        key: this.p3xrKey,
                        index: options.index,
                    }
                })
                $rootScope.$broadcast('p3x-refresh-key');
            } catch(e) {
                p3xrCommon.generalHandleError(e)
            }
        }

        this.showJson = (options) => {
            const { value } = options;
            p3xrDialogJsonView.show({
                value: value
            })
        }

        this.setTableStyles = (options) => {
            const { $odd } = options
            if (!$odd) {
                return '';
            }
            let style = '';
            const bg = $mdColors.getThemeColor(`${p3xr.state.themeLayout}-background-500-0.1`)
            style += `background-color: ${bg};`
            return style;
         }
    }
})

