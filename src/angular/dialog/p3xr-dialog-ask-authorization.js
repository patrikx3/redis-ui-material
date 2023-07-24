p3xr.ng.factory('p3xrDialogAskAuthorization', function (p3xrCommon, $mdDialog) {


    return new function () {

        this.show = async (options) => {

            return await $mdDialog.show({
                    controller: function ($scope, $mdDialog) {


                        // Promise reject
                        $scope.cancel = function () {
                            /*
                            p3xrCommon.toast({
                                message: p3xr.strings.status.cancelled
                            })
                            */
                            $mdDialog.cancel();
                        };

                        $scope.model = {
                            username: undefined,
                            password: undefined,
                        }


                        $scope.submit = async () => {

                            $mdDialog.hide($scope.model);

                        }

                    },
                    template: require('./p3xr-dialog-ask-authorization.html'),
                    parent: angular.element(document.body),
                    targetEvent: options.$event,
                    clickOutsideToClose: true,
                    multiple: true,
                  //  fullscreen: true // Only for -xs, -sm breakpoints.
                })
        }

    }

});
