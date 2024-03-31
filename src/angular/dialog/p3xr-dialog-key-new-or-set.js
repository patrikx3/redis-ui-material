p3xr.ng.factory('p3xrDialogKeyNewOrSet', function (p3xrCommon, $mdDialog, p3xrSocket, p3xrDialogJsonEditor, p3xrDialogJsonView) {

    return new function () {

        this.show = (options) => {

            return new Promise(async (resolve, reject) => {

                try {

                    const result = await $mdDialog.show({
                        controller: function ($scope, $mdDialog) {


                            $scope.setBufferUpload = () => {
                                const input = document.getElementById('p3xr-main-key-new-upload-buffer');
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
                                    
                                    try {
                                        await p3xrCommon.confirm({
                                            message: p3xr.strings.confirm.uploadBuffer
                                         })
                    
    
                                        const arrayBuffer = loadEvent.target.result;                                
                                        $scope.model.value = arrayBuffer            
                                        //console.log('buffer', $scope.model.value)            
                                        p3xrCommon.toast(p3xr.strings.confirm.uploadBufferDone)
    
                                    } catch(e) {
                                        p3xrCommon.generalHandleError(e)
                                    }

                    
                                };
                                reader.onerror = (error) => {
                                    p3xrCommon.generalHandleError(error)
                                } 
                                reader.readAsArrayBuffer(file);
                            }

                            $scope.jsonViewer = (options) => {
                                p3xrDialogJsonView.show({
                                    event: options.$event,
                                    value: options.value
                                })
//            this.showJson = !this.showJson
                            }

                            $scope.copy = async (opts) => {
                                await global.p3xr.clipboard({
                                    value: opts.value
                                })
                                p3xrCommon.toast(p3xr.strings.status.dataCopied)
                            }


                            $scope.types = [
                                'string',
                                'list',
                                'hash',
                                'set',
                                'zset',
                                'stream',
                            ]


                            $scope.validateJson = false;

                            $scope.model = {
                                type: 'string',
                                key: options.node !== undefined ? options.node.key + p3xr.settings.redisTreeDivider : '',
                                value: undefined,
                                score: undefined,
                                streamTimestamp: '*',
                                hashKey: undefined,
                                index: undefined,
                            }
                            $scope.options = options;

                            if (options.hasOwnProperty('model')) {
                                Object.assign($scope.model, options.model)
                            }

                            Object.defineProperty($scope, 'valueType', {
                                get: () => {
                                    return typeof $scope.model.value
                                }
                            })
                            //console.warn($scope.model)

                            // Promise reject
                            $scope.cancel = function () {
                                /*
                                p3xrCommon.toast({
                                    message: p3xr.strings.status.cancelled
                                })
                                */
                                $mdDialog.cancel();
                                reject()
                            };

                            /*
                            // Promise resolve
                            $scope.hide = function () {
                                $mdDialog.hide();
                            };

                            // Promise resolve - with result
                            $scope.answer = function (answer) {
                                $mdDialog.hide(answer);
                            };
                            */

                            const handleInvalidForm = () => {
                                if ($scope.p3xrKeyNewForm.$invalid) {
                                    p3xrCommon.toast({
                                        message: p3xr.strings.form.error.invalid
                                    })
                                    return false
                                }
                                return true
                            }


                            $scope.submit = async () => {

                                if (!handleInvalidForm()) {
                                    return;
                                }
                                try {
                                    const response = await p3xrSocket.request({
                                        action: 'key-new-or-set',
                                        payload: {
                                            type: options.type,
                                            originalValue: options.hasOwnProperty('model') ? options.model.value : undefined,
                                            originalHashKey: options.hasOwnProperty('model') ? options.model.hashKey : undefined,
                                            model: p3xr.clone($scope.model)
                                        },
                                    })
                                    window['gtag']('config', p3xr.settings.googleAnalytics,
                                        {
                                            'page_path': '/key-new-or-set'
                                        }
                                    );
                                    resolve(response)

                                    p3xrCommon.toast({
                                        message: p3xr.strings.status.set
                                    })
                                    //$scope.options.type = 'edit';
                                    $mdDialog.cancel();

                                } catch (e) {
                                    //reject(e)
                                    p3xrCommon.generalHandleError(e)
                                }

                            }

                            $scope.jsonEditor = async(options) => {
                                try {
                                    const result = await p3xrDialogJsonEditor.show({
                                        event: options.$event,
                                        value: options.value
                                    })
                                    $scope.model.value = result.obj
                                    $scope.$digest();
                                } catch(e) {
                                    p3xrCommon.generalHandleError(e)
                                }
//            this.showJson = !this.showJson
                            }

                            $scope.formatJson = () => {
                                try {

                                    $scope.model.value = JSON.stringify(JSON.parse($scope.model.value), null, p3xr.settings.jsonFormat)
                                } catch(e) {
                                    p3xrCommon.toast({
                                        message: p3xr.strings.label.jsonViewNotParsable
                                    })
                                }
                            }

                        },
                        template: require('./p3xr-dialog-key-new-or-set.html'),
                        parent: angular.element(document.body),
                        targetEvent: options.$event,
                        clickOutsideToClose: false,
                        fullscreen: true, // Only for -xs, -sm breakpoints.
                        multiple: true,
                        //escapeToClose: false,
                    })
                    // console.warn(result)
                } catch (error) {
                    reject(error)
                    p3xrCommon.generalHandleError(error)
                }

            })
        }

    }

});
