p3xr.ng.factory('p3xrDialogJsonEditor', function (p3xrCommon, $mdDialog, $timeout) {

    return new function () {

        this.show = (options) => {
                return $mdDialog.show({
                    controller: function ($scope, $mdDialog, p3xrCommon) {

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
                                const JSONEditor = require('jsoneditor/dist/jsoneditor')
                                const container = document.getElementById("jsoneditor")
                                const options = {
                                    //sortObjectKeys: false,
                                    //limitDragging: false,
                                    //history: false,
                                    //mode: 'tree',
                                    //search: true,
                                    //mainMenuBar: false,
                                    language: language,
                                    //enableSort: false,
                                    //enableTransform: false,

                                }
                                if (JSON.stringify(obj).length > 10240) {
                                    p3xrCommon.toast(p3xr.strings.label.bigJson)
                                }
                                editor = new JSONEditor(container, options)
                                editor.setMode('tree')
                                editor.set(obj)
                            })
                        }

                        // Promise reject
                        $scope.ok = function () {
                            $mdDialog.cancel();
                        };

                        // Promise resolve
                        $scope.save = function () {
                            $mdDialog.hide({
                                obj: JSON.stringify(editor.get())
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
