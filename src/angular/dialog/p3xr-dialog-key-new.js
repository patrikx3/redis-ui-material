p3xr.ng.factory('p3xrDialogKeyNew', function (p3xrCommon, $mdDialog, p3xrSocket) {

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

                            $scope.model = {
                                type: 'string',
                                key: options.node !== undefined ? options.node.key : '',
                                value: undefined,
                                score: undefined,
                                hashKey: undefined,
                                index: undefined,
                            }


                            // Promise reject
                            $scope.cancel = function () {
                                p3xrCommon.toast({
                                    message: p3xr.strings.status.cancelled
                                })
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
                                        action: 'key-new',
                                        payload: {
                                            model: angular.copy($scope.model)
                                        },
                                    })
                                    resolve(response)

                                    p3xrCommon.toast({
                                        message:p3xr.strings.status.set
                                    })
                                    //$scope.options.type = 'edit';
                                    $mdDialog.cancel();

                                } catch(e) {
                                    reject(e)
                                    p3xrCommon.generalHandleError(e)
                                }

                            }

                        },
                        template: require('./p3xr-dialog-key-new.html'),
                        parent: angular.element(document.body),
                        targetEvent: options.$event,
                        clickOutsideToClose: true,
                        fullscreen: true // Only for -xs, -sm breakpoints.
                    })
                    // console.warn(result)
                } catch(error) {
                    reject(error)
                    p3xrCommon.generalHandleError(error)
                }

            })
        }

    }

});
