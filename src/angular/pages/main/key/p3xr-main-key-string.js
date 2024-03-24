p3xr.ng.component('p3xrMainKeyString', {
    template: require('./p3xr-main-key-string.html'),
    bindings: {
        p3xrValue: '=',
        p3xrValueBuffer: ' =',
        p3xrKey: '<',
        p3xrResponse: '<',
    },
    controller: function (p3xrSocket, p3xrCommon, $rootScope, p3xrDialogJsonView, p3xrDialogJsonEditor, $scope) {

        this.setBufferUpload = () => {
            const input = document.getElementById('p3xr-main-key-string-upload-buffer');
            input.value = ''; // Clear the input value
            input.click();
        }

        $scope.readFileAsBuffer = async (event) => {
            const file = event.target.files[0];
            if (!file) {
                return;
            }
            const reader = new FileReader();
            reader.onload = async (loadEvent) => {
                const arrayBuffer = loadEvent.target.result;
                // Process the buffer here
                //console.log(arrayBuffer);

                try {
                    const response = await p3xrSocket.request({
                        action: 'key-set',
                        payload: {
                            type: this.p3xrResponse.type,
                            value: arrayBuffer,
                            key: this.p3xrKey,
                        }
                    })
    
                    window['gtag']('config', p3xr.settings.googleAnalytics,
                        {
                            'page_path': '/key-set'
                        }
                    );
    
                } catch (e) {
                    p3xrCommon.generalHandleError(e)
                } finally {
                    $rootScope.$broadcast('p3xr-refresh-key');
                }

            };
            reader.onerror = (error) => {
                p3xrCommon.generalHandleError(error)
            } 
            reader.readAsArrayBuffer(file);
        }


        this.copy = () => {
            global.p3xr.clipboard({
                value: this.p3xrValue
            })
            p3xrCommon.toast(p3xr.strings.status.dataCopied)
        }

        this.downloadBuffer = async () => {
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

                const blob = new Blob([this.p3xrValueBuffer]);
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `${this.p3xrKey}.bin`;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
            } catch (e) {
                p3xrCommon.generalHandleError(e)
            } finally {
            }
        }

        this.editable = false;
        this.buffer = false
        let originalValue
        this.edit = () => {
            if (this.p3xrValue.length < p3xr.settings.maxValueAsBuffer ) {
                originalValue = angular.copy(this.p3xrValue) 
                this.buffer = false
            } else {
                originalValue = angular.copy(this.p3xrValueBuffer)
                this.buffer = true
            }
            this.editable = true
        }

        this.cancelEdit = () => {
            if (this.buffer === true) {
                this.p3xrValueBuffer = originalValue
            } else {
                this.p3xrValue = originalValue
            }
            this.editable = false
            this.buffer = false
        }


        this.validateJson = false

        this.save = async () => {
            try {
                if (this.validateJson === true) {
                    try {
                        JSON.parse(this.buffer ? this.p3xrValueBuffer : this.p3xrValue)
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
                        value: this.buffer ? this.p3xrValueBuffer : this.p3xrValue,
                        key: this.p3xrKey,
                    }
                })

                window['gtag']('config', p3xr.settings.googleAnalytics,
                    {
                        'page_path': '/key-set'
                    }
                );

                this.editable = false
            } catch (e) {
                p3xrCommon.generalHandleError(e)
            } finally {
                $rootScope.$broadcast('p3xr-refresh-key');
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

