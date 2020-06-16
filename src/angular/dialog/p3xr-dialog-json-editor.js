p3xr.ng.factory('p3xrDialogJsonEditor', function (p3xrCommon, $mdDialog, $timeout) {

    return new function () {

        this.show = (options) => {
                return $mdDialog.show({
                    controller: function ($scope, $mdDialog, p3xrCommon, $rootScope) {

                        $rootScope.$broadcast('p3xr-main-resizer', {
                            drag: false
                        })


                        let editor
                        let obj

                        try {
                            obj = JSON.parse(options.value)
                            $scope.isJson = true
                        } catch (e) {
                            obj = undefined
                            $scope.isJson = false
                        }

                        if ($scope.isJson) {
                            $timeout(() => {
                                // en , zn
                                let language
                                switch(p3xr.settings.language.current) {
                                    case 'zn':
                                        language = 'zh-CN'
                                        break;
                                    default:
                                        language = 'en'
                                        break;
                                }
                                const container = document.getElementById("p3xr-jsoneditor")
                                const options = {
                                    //sortObjectKeys: false,
                                    limitDragging: false,
                                    modes: ['tree', 'view', 'preview'],
                                    //history: false,
                                    mode: 'tree',
                                    //search: true,
                                    //mainMenuBar: false,
                                    language: language,
                                    //enableSort: false,
                                    //enableTransform: false,
                                    //ace: ace,
                                }
                                if (JSON.stringify(obj).length > 10240) {
                                    p3xrCommon.toast({
                                        message: p3xr.strings.label.bigJson,
                                        hideDelay: 10000
                                    })
                                }
                                editor = new JSONEditor(container, options, obj)
                            })
                        }

                        $scope.$on('$destroy', () => {
                            $rootScope.$broadcast('p3xr-main-resizer', {
                                drag: true
                            })
                        })


                        // Promise reject
                        $scope.ok = function () {
                            $mdDialog.cancel();
                        };

                        // Promise resolve
                        $scope.save = function ({ format }) {
                            $mdDialog.hide({
                                obj: JSON.stringify(editor.get(), null, format ? p3xr.settings.jsonFormat : 0)
                            });
                        };

                        /*
                        // Promise resolve - with result
                        $scope.answer = function (answer) {
                            $mdDialog.hide(answer);
                        };
                        */

                    },
                    template: require('./p3xr-dialog-json-editor.html'),
                    parent: angular.element(document.body),
                    targetEvent: options.$event,
                    clickOutsideToClose: true,
                    fullscreen: true, // Only for -xs, -sm breakpoints.
                    multiple: true,
                })
        }

    }

});
