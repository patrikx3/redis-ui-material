p3xr.ng.factory('p3xrDialogTreecontrolSettings', function (p3xrCommon, $mdDialog, $timeout) {


    return new function () {

        this.show = async(options) => {

            try {
                await $mdDialog.show({
                    controller: function ($scope, $rootScope) {

                        $scope.model = {
                            treeSeparator: $rootScope.p3xr.settings.redisTreeDivider,
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
                            if ($scope.p3xrDialogTreecontrolSettingsForm.$invalid) {
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

                                $rootScope.p3xr.settings.redisTreeDivider = $scope.model.treeSeparator
                                $rootScope.keysTree = []
                                $timeout(() => {
                                    $rootScope.$digest()
                                })
                                //$scope.options.type = 'edit';
                                $mdDialog.cancel();

                            } catch(e) {
                                p3xrCommon.generalHandleError(e)
                            }

                        }

                    },
                    template: require('./p3xr-dialog-treecontrol-settings.html'),
                    parent: angular.element(document.body),
                    targetEvent: options.$event,
                    clickOutsideToClose: true,
                    // fullscreen: true // Only for -xs, -sm breakpoints.
                })
               // console.warn(result)
            } catch(error) {
                p3xrCommon.generalHandleError(error)
            }
        }

    }

});
