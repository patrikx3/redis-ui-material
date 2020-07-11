p3xr.ng.factory('p3xrDialogJsonView', function (p3xrCommon, $mdDialog) {


    return new function () {

        this.show = async (options) => {

            try {
                const result = await $mdDialog.show({
                    controller: function ($scope, $mdDialog, $timeout) {

                        $scope.treeExpandAll = () => {
                            p3xr.ui.overlay.show({
                                message: p3xr.strings.title.jsonRecursive
                            })
                            $timeout(() => {
                                $scope.howExpanded = 'recursive'
                                $timeout(() => {
                                    p3xr.ui.overlay.hide()
                                })
                            })
                        }

                        $scope.treeCollapseAll = () => {
                            $scope.howExpanded = true
                        }

                        try {
                            $scope.howExpanded = true
                            $scope.obj = JSON.parse(options.value)
                            $scope.isJson = true
                        } catch (e) {
                            $scope.obj = undefined
                            $scope.isJson = false
                        }


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
                    fullscreen: true, // Only for -xs, -sm breakpoints.
                    multiple: true,
                })
                // console.warn(result)
            } catch (error) {
                p3xrCommon.generalHandleError(error)
            }
        }

    }

});
