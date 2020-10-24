p3xr.ng.factory('p3xrDialogJsonEditor', function (p3xrCommon, $mdDialog, $timeout) {

    return new function () {

        this.show = async(options) => {
          await import(
                /* webpackChunkName: "editor" */
                /* webpackPrefetch: true */
                "../../editor"
            )


                return $mdDialog.show({
                    controller: function ($scope, $mdDialog, p3xrCommon, $rootScope, p3xrTheme) {

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
                            // https://webpack.js.org/guides/code-splitting/
                            // /* webpackMode: "lazy" */
                            const execAsync = async() => {
                                try {


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
                                            modes: ['tree', 'code', 'view', 'preview'],
                                            //history: false,
                                            mode: 'code',
                                            //search: true,
                                            //mainMenuBar: false,
                                            language: language,
                                            //enableSort: false,
                                            //enableTransform: false,
                                            ace: ace,
                                            indentation: p3xr.settings.jsonFormat,
                                            //theme: p3xrTheme.isDark() ? 'ace/theme/twilight' : 'ace/theme/github'
                                        }
                                        if (p3xrTheme.isDark()) {
                                            options.theme = 'ace/theme/twilight'
                                        }
                                        /*
                                        if (JSON.stringify(obj).length > 10240) {
                                            p3xrCommon.toast({
                                                message: p3xr.strings.label.bigJson,
                                                hideDelay: 10000
                                            })
                                        }
                                         */
                                        editor = new JSONEditor(container, options, obj)
                                    })
                                } catch(e) {
                                    p3xrCommon.generalHandleError(e)
                                }

                            }
                            execAsync()
                        }

                        const close = (event) => {
                            const keycode = event.which || event.keyCode;
                            // If this is the escape key
                            //console.log('close')
                            if ( keycode === 27 ) {
                                event.preventDefault();
                                event.stopPropagation();
                               // $mdDialog.cancel();
                                const pico = $('.pico-close')
                                if (pico.length > 0) {
                                    pico.click()
                                } else {
                                    $mdDialog.cancel();
                                }
                            }

                        }
                        document.documentElement.addEventListener('keydown', close, true)

                        $scope.$on('$destroy', () => {
                            if (editor) {
                                editor.destroy()
                            }
                            $rootScope.$broadcast('p3xr-main-resizer', {
                                drag: true
                            })
                            document.documentElement.removeEventListener('keydown', close, true)
                        })


                        // Promise reject
                        $scope.ok = function () {
                            $mdDialog.cancel();
                        };

                        // Promise resolve
                        $scope.save = function ({ format }) {
                            try {
                                $mdDialog.hide({
                                    obj: JSON.stringify(editor.get(), null, format ? p3xr.settings.jsonFormat : 0)
                                });
                            } catch(e) {
                                p3xrCommon.generalHandleError(e)
                            }
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
                    clickOutsideToClose: false,
                    fullscreen: true, // Only for -xs, -sm breakpoints.
                    multiple: true,
                    escapeToClose: false,
                })
        }

    }

});
