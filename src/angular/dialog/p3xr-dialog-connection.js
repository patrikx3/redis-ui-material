p3xr.ng.factory('p3xrDialogConnection', function (p3xrCommon, $mdDialog, p3xrSocket) {


    return new function () {

        this.show = async(options) => {

            try {
                const result = await $mdDialog.show({
                    controller: function ($scope, $mdDialog) {

                        $scope.options = options

                        if (options.model !== undefined) {
                            $scope.model = options.model
                        } else {
                            $scope.model = {
                                name: undefined,
                                host: undefined,
                                port: undefined,
                                password: undefined,
                                id: undefined,
                            }
                        }

                        // Promise reject
                        $scope.cancel = function () {
                            p3xrCommon.toast({
                                message: p3xr.strings.status.cancelled
                            })
                            $mdDialog.cancel();
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
                            if ($scope.p3xrConnectionForm.$invalid) {
                                p3xrCommon.toast({
                                    message: p3xr.strings.form.error.invalid
                                })
                                return false
                            }
                            return true
                        }

                        $scope.testConnection = async() => {
                            $scope.p3xrConnectionForm.$setSubmitted();

                            if (!handleInvalidForm()) {
                                return;
                            }

                            try {
                                const response = await p3xrSocket.request({
                                    action: 'redis-test-connection',
                                    payload: {
                                        model: $scope.model
                                    },
                                })
                                p3xrCommon.toast({
                                    message: p3xr.strings.status.redisConnected
                                })
                            } catch(e) {
                                p3xrCommon.generalHandleError(e)
                            }

                        }

                        $scope.submit = async () => {

                            if (!handleInvalidForm()) {
                                return;
                            }
                            if ($scope.model.host === undefined) {
                                $scope.model.host = 'localhost'
                            }
                            if ($scope.model.port === undefined) {
                                $scope.model.port = 6379
                            }
                            if (options.type === 'new') {
                                $scope.model.id = p3xr.nextId()
                            }

                            try {
                                const response = await p3xrSocket.request({
                                    action: 'connection-save',
                                    payload: {
                                        model: angular.copy($scope.model)
                                    },
                                })
                                p3xrCommon.toast({
                                    message: $scope.options.type  === 'new' ? p3xr.strings.status.added : p3xr.strings.status.saved
                                })
                                //$scope.options.type = 'edit';
                                $mdDialog.cancel();

                            } catch(e) {
                                p3xrCommon.generalHandleError(e)
                            }

                        }

                    },
                    template: require('./p3xr-dialog-connection.html'),
                    parent: angular.element(document.body),
                    targetEvent: options.$event,
                    clickOutsideToClose: true,
                   // fullscreen: true // Only for -xs, -sm breakpoints.
                })
                console.warn(result)
            } catch(error) {
                p3xrCommon.generalHandleError(error)
            }
        }

    }

});
