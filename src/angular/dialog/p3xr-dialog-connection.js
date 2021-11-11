p3xr.ng.factory('p3xrDialogConnection', function (p3xrCommon, $mdDialog, p3xrSocket) {


    return new function () {

        this.show = async (options) => {

            try {
                const result = await $mdDialog.show({
                    controller: function ($scope, $mdDialog) {

                        $scope.options = options

                        if (options.model !== undefined) {
                            $scope.model = options.model
                            $scope.model.password = options.model.id
                            $scope.model.tlsCrt = options.model.id
                            $scope.model.tlsKey = options.model.id
                            $scope.model.tlsCa = options.model.id
                        } else {
                            $scope.model = {
                                awsElastiCache: false,
                                azure: false,
                                name: undefined,
                                host: undefined,
                                port: undefined,
                                password: undefined,
                                username: undefined,
                                id: undefined,
                                readonly: undefined,
                                tlsWithoutCert: false,
                                tlsCrt: undefined,
                                tlsKey: undefined,
                                tlsCa: undefined,
                            }
                        }
                        if (!$scope.model.hasOwnProperty('cluster')) {
                            $scope.model.cluster = false
                        }

                        if (!$scope.model.hasOwnProperty('nodes')) {
                            $scope.model.nodes = []
                        }

                        for (let node of $scope.model.nodes) {
                            node.password = node.id
                        }

                        // Promise reject
                        $scope.cancel = function () {
                            /*
                            p3xrCommon.toast({
                                message: p3xr.strings.status.cancelled
                            })
                            */
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
                        //console.warn('$scope.model', $scope.model)

                        const handleInvalidForm = () => {
                            if ($scope.p3xrConnectionForm.$invalid) {
                                p3xrCommon.toast({
                                    message: p3xr.strings.form.error.invalid
                                })
                                return false
                            }
                            return true
                        }

                        $scope.addNode = (index) => {
                            const newNode = {
                                host: undefined,
                                port: undefined,
                                password: undefined,
                                username: undefined,
                                id: p3xr.nextId(),
                            }
                            if (index === undefined) {
                                $scope.model.nodes.push(newNode)
                            } else {
                                $scope.model.nodes.splice(index + 1, 0, newNode)
                            }
                        }

                        $scope.removeNode = async (ev, index) => {
                            try {
                                await p3xrCommon.confirm({
                                    event: ev,
                                    message: p3xr.strings.confirm.deleteConnectionText
                                });

                                $scope.model.nodes.splice(index, 1)
                                p3xrCommon.toast({
                                    message: p3xr.strings.status.nodeRemoved
                                })

                            } catch (e) {
                                if (e === undefined) {
                                    /*
                                    p3xrCommon.toast({
                                        message: p3xr.strings.status.cancelled
                                    });
                                    */
                                    return;
                                }
                                p3xrCommon.generalHandleError(e)
                            }
                        }

                        $scope.testConnection = async () => {
                            $scope.p3xrConnectionForm.$setSubmitted();

                            if (!handleInvalidForm()) {
                                return;
                            }


                            try {
                                p3xr.ui.overlay.show({
                                    message: p3xr.strings.title.connectingRedis
                                })

                                //await new Promise(resolve => setTimeout(resolve, 5000))

                                const response = await p3xrSocket.request({
                                    action: 'redis-test-connection',
                                    payload: {
                                        model: $scope.model
                                    },
                                })
                                p3xrCommon.toast({
                                    message: p3xr.strings.status.redisConnected
                                })
                            } catch (e) {
                                p3xrCommon.generalHandleError(e)
                            } finally {
                                p3xr.ui.overlay.hide()
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
                            for (let node of $scope.model.nodes) {
                                if (node.host === undefined) {
                                    node.host = 'localhost'
                                }
                                if (node.id === undefined) {
                                    node.id = p3xr.nextId()
                                }
                            }


                            try {


                                const response = await p3xrSocket.request({
                                    action: 'connection-save',
                                    payload: {
                                        model: angular.copy($scope.model)
                                    },
                                })
                                p3xrCommon.toast({
                                    message: $scope.options.type === 'new' ? p3xr.strings.status.added : p3xr.strings.status.saved
                                })
                                //$scope.options.type = 'edit';
                                $mdDialog.cancel();

                            } catch (e) {
                                p3xrCommon.generalHandleError(e)
                            }

                        }

                    },
                    template: require('./p3xr-dialog-connection.html'),
                    parent: angular.element(document.body),
                    targetEvent: options.$event,
                    clickOutsideToClose: true,
                    fullscreen: true // Only for -xs, -sm breakpoints.
                })
                // console.warn(result)
            } catch (error) {
                p3xrCommon.generalHandleError(error)
            }
        }

    }

});
