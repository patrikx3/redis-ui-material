p3xr.ng.factory('p3xrDialogKeyNewOrSet', function (p3xrCommon, $mdDialog, p3xrSocket, p3xrDialogJsonEditor) {

    return new function () {

        this.show = (options) => {

            return new Promise(async (resolve, reject) => {

                try {

                    const result = await $mdDialog.show({
                        controller: function ($scope, $mdDialog) {

                            $scope.types = [
                                'string',
                                'list',
                                'hash',
                                'set',
                                'zset',
                            ]


                            $scope.validateJson = false;

                            $scope.model = {
                                type: 'string',
                                key: options.node !== undefined ? options.node.key : '',
                                value: undefined,
                                score: undefined,
                                hashKey: undefined,
                                index: undefined,
                            }
                            $scope.options = options;

                            if (options.hasOwnProperty('model')) {
                                Object.assign($scope.model, options.model)
                            }
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
                                            model: angular.copy($scope.model)
                                        },
                                    })
                                    resolve(response)

                                    p3xrCommon.toast({
                                        message: p3xr.strings.status.set
                                    })
                                    //$scope.options.type = 'edit';
                                    $mdDialog.cancel();

                                } catch (e) {
                                    reject(e)
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
                        clickOutsideToClose: true,
                        fullscreen: true, // Only for -xs, -sm breakpoints.
                        multiple: true,
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
