p3xr.ng.factory('p3xrDialogTreecontrolSettings', function (p3xrCommon, $mdDialog, $timeout) {


    return new function () {

        this.show = async(options) => {

            try {
                await $mdDialog.show({
                    controller: function ($scope, $rootScope) {

                        $scope.model = {
                            treeSeparator: $rootScope.p3xr.settings.redisTreeDivider,
                            pageCount: $rootScope.p3xr.settings.pageCount,
                            keysSort:  $rootScope.p3xr.settings.keysSort,
                            searchClientSide: $rootScope.p3xr.settings.searchClientSide,
                            searchStartsWith: $rootScope.p3xr.settings.searchStartsWith,
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
                                $rootScope.p3xr.settings.pageCount = $scope.model.pageCount
                                $rootScope.p3xr.settings.keysSort = $scope.model.keysSort
                                $rootScope.p3xr.settings.searchClientSide = $scope.model.searchClientSide
                                $rootScope.p3xr.settings.searchStartsWith = $scope.model.searchStartsWith
                                $rootScope.p3xr.state.page = 1
                                $rootScope.p3xr.state.redisChanged = true;
                                $timeout(() => {
                                    $rootScope.$digest()
                                })

                                if ( !$rootScope.p3xr.settings.searchClientSide ) {
                                    options.p3xrMainRef.refresh()
                                }

                                //$scope.options.type = 'edit';
                                $mdDialog.cancel();
                                $rootScope.$broadcast('p3x-refresh');
                            } catch(e) {
                                p3xrCommon.generalHandleError(e)
                            }

                        }

                    },
                    template: require('./p3xr-dialog-treecontrol-settings.html'),
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
