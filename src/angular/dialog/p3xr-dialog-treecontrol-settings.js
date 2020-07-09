p3xr.ng.factory('p3xrDialogTreecontrolSettings', function (p3xrCommon, $mdDialog, $timeout) {


    return new function () {

        this.show = async (options) => {

            try {
                await $mdDialog.show({
                    controller: function ($scope, $rootScope) {

                        console.log('$rootScope.p3xr.settings.maxValueDisplay', $rootScope.p3xr.settings.maxValueDisplay)

                        $scope.model = {
                            treeSeparator: $rootScope.p3xr.settings.redisTreeDivider,
                            pageCount: $rootScope.p3xr.settings.pageCount,
                            keysSort: $rootScope.p3xr.settings.keysSort,
                            searchClientSide: $rootScope.p3xr.settings.searchClientSide,
                            searchStartsWith: $rootScope.p3xr.settings.searchStartsWith,
                            maxValueDisplay: $rootScope.p3xr.settings.maxValueDisplay,
                            maxKeys: $rootScope.p3xr.settings.maxKeys,
                            jsonFormat: $rootScope.p3xr.settings.jsonFormat === 2,
                            animation: $rootScope.p3xr.settings.animation,
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
                                $rootScope.p3xr.settings.maxValueDisplay = $scope.model.maxValueDisplay
                                $rootScope.p3xr.settings.maxKeys = $scope.model.maxKeys
                                $rootScope.p3xr.settings.jsonFormat = $scope.model.jsonFormat === true ? 2 : 4
                                $rootScope.p3xr.settings.animation = $scope.model.animation === true ? 1 : 0
                                /*
                                $timeout(() => {
                                    $rootScope.$digest()
                                })
                                */

                                //if ( !$rootScope.p3xr.settings.searchClientSide ) {
                                if (options.p3xrMainRef !== undefined) {
                                    options.p3xrMainRef.refresh()
                                }
                                //}

                                //$scope.options.type = 'edit';
                                $mdDialog.cancel();
                                $rootScope.$broadcast('p3x-refresh');
                            } catch (e) {
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
            } catch (error) {
                p3xrCommon.generalHandleError(error)
            }
        }

    }

});
