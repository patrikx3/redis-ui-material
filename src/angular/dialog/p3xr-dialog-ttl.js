p3xr.ng.factory('p3xrDialogTtl', function (p3xrCommon, $mdDialog) {


    const timestring = require('timestring')

    return new function () {

        this.show = async (options) => {

            try {
                const result = await $mdDialog.show({
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

                        $scope.model = options.model


                        const humanizeDuration = require("humanize-duration");

                        if (typeof $scope.model.ttl === 'number' && $scope.model.ttl > 0) {

                            $scope.convertTextToTime = humanizeDuration($scope.model.ttl * 1000, {
                                delimiter: ' ',
                            })
                        } else {
                            $scope.convertTextToTime = '';
                        }


                        $scope.openTimestringNpm = () => {
                            window.open('https://www.npmjs.com/package/timestring#keywords', '_blank')
                        }

                        let firstWatchConvertTextToTime = true
                        $scope.$watch('convertTextToTime', (newVal, oldValue) => {
                            if (firstWatchConvertTextToTime) {
                                firstWatchConvertTextToTime = !firstWatchConvertTextToTime
                                return
                            }
                            try {
                                $scope.model.ttl = timestring(String(newVal), 's')
                            } catch(e) {
                                console.warn('timestring parse error', e)
                            }
                        })

                        const handleInvalidForm = () => {
                            if ($scope.p3xrTtlForm.$invalid) {
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
                                if (isNaN($scope.model.ttl)) {
                                    $scope.model.ttl = Math.round($scope.model.ttl)
                                }
                                const hide = {
                                    model: $scope.model,
                                }
                                $mdDialog.hide(hide);
                            } catch (e) {
                                p3xrCommon.generalHandleError(e)
                            }

                        }

                    },
                    template: require('./p3xr-dialog-ttl.html'),
                    parent: angular.element(document.body),
                    targetEvent: options.$event,
                    clickOutsideToClose: true,
                    fullscreen: true // Only for -xs, -sm breakpoints.
                })
                // console.warn(result)
                return result
            } catch (error) {
                p3xrCommon.generalHandleError(error)
            }
        }

    }

});
