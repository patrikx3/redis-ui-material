p3xr.ng.factory('p3xrDialogJsonView', function (p3xrCommon, $mdDialog) {


    return new function () {

        this.show = async(options) => {

            try {
                const result = await $mdDialog.show({
                    controller: function ($scope, $mdDialog) {

                        let lastResult
                        Object.defineProperty($scope, 'isJson', {
                            get: () => {
                                try {
                                    const obj = JSON.parse(options.value)
                                    if (lastResult !== true) {
                                        $scope.obj = obj
                                    }
                                    lastResult = true
                                    return true
                                } catch(e) {
                                    if (lastResult !== false) {
                                        $scope.obj = undefined
                                    }
                                    lastResult = false
                                    return false
                                }
                            }
                        })

                        // Promise reject
                        $scope.ok = function () {
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

                    },
                    template: require('./p3xr-dialog-json-view.html'),
                    parent: angular.element(document.body),
                    targetEvent: options.$event,
                    clickOutsideToClose: true,
                    fullscreen: true // Only for -xs, -sm breakpoints.
                })
                // console.warn(result)
            } catch(error) {
                p3xrCommon.generalHandleError(error)
            }
        }

    }

});
