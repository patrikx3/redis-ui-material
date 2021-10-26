p3xr.ng.factory('p3xrCommon', function ($mdToast, $mdDialog, $mdColors, $rootScope, p3xrRedisParser, $timeout, p3xrTheme) {

    const generalHandleError = (dataOrError) => {
        if (dataOrError === undefined) {
            return;
        }
        if (!(dataOrError instanceof Error || dataOrError instanceof Object)) {
            dataOrError = new Error(dataOrError)
        }
        if (dataOrError instanceof Error || dataOrError.status === 'error') {
            let error
            if (dataOrError instanceof Error) {
                error = dataOrError
            } else {
                error = dataOrError.error
            }
            console.warn('generalHandleError')
            console.error(error)

            if (typeof error === 'string' && p3xr.strings.code.hasOwnProperty(error)) {
                error = new Error(p3xr.strings.code[error])
            } else if (error.hasOwnProperty('code') && p3xr.strings.code.hasOwnProperty(error.code)) {
                error.message = p3xr.strings.code[error.code]
            } else if (p3xr.strings.code.hasOwnProperty(error.message)) {
                error.message = p3xr.strings.code[error.message]
            }


            result.alert({
                title: p3xr.strings.title.error,
                message: '<pre>' + (error.hasOwnProperty('message') ? error.message : error) + '</pre>',
            })
            return false
        }
        return true
    }

    const toast = (options) => {
        if (typeof options === 'string') {
            options = {
                message: options
            }
        }
        const template = '<md-toast class="md-toast p3xr-toast-default" ng-click="closeToast()">' + options.message + '</md-toast>'

        $mdToast.show({
            controller: 'p3xrToastController',
            template: template,
            hideDelay: options.hideDelay || p3xr.settings.toast.timeout,
            position: p3xr.settings.toast.position,
        });
    }

    const confirm = (options) => {
        let confirm, title, okButton
        if (!options.hasOwnProperty('disableCancel')) {
            confirm = $mdDialog.confirm()
            title = p3xr.strings.confirm.title
            okButton = p3xr.strings.intention.sure
        } else {
            confirm = $mdDialog.alert()
            title = p3xr.strings.confirm.info
            okButton = p3xr.strings.intention.ok
        }

        confirm
            .title(title)
            .htmlContent(options.message)
            .targetEvent(options.event)
            .ok(okButton)
            .multiple(true)

        if (!options.hasOwnProperty('disableCancel')) {
            confirm.cancel(p3xr.strings.intention.cancel);
        }

        return $mdDialog.show(confirm)
    }

    let lastResponse
    const loadRedisInfoResponse = (options = {}) => {
        let response

        if (!options.response) {
            response = lastResponse
        } else {
            response = options.response
        }
        lastResponse = response

        //console.warn('response', response)

        console.time('loadRedisInfoResponse')
        $rootScope.p3xr.state.info = p3xrRedisParser.info(response.info)
        //$rootScope.p3xr.state.infoObject = response.infoObject

        $rootScope.p3xr.state.keysRaw = response.keys

        if ($rootScope.p3xr.settings.keysSort && $rootScope.p3xr.state.keysRaw.length <= p3xr.settings.maxLightKeysCount) {
            $rootScope.p3xr.state.keysRaw = response.keys.sort(p3xr.sort.naturalCompareDocument())
        } else {
            $rootScope.p3xr.state.keysRaw = response.keys
        }

        $rootScope.p3xr.state.keysInfo = response.keysInfo

        console.timeEnd('loadRedisInfoResponse')
        /*
        $timeout(() => {
            $rootScope.p3xr.state.reducedFunctions = $rootScope.p3xr.state.keysRaw.length > p3xr.settings.maxLightKeysCount
            $rootScope.$digest()
            console.timeEnd('loadRedisInfoResponse')
        })
         */

    }

    const result = {
        inputBackground: () => {
            return p3xrTheme.isDark() ? 'rgba(64, 64, 64, 1)' : 'white'
        },

        inputBorderColor: () => {
            return $mdColors.getThemeColor(p3xr.state.themeLayout + '-primary-hue-1')
        },

        inputColor: () => {
            return p3xrTheme.isDark() ? 'white' : 'black'
        },
        generalHandleError: generalHandleError,
        toast: toast,
        alert: (opts) => {
            if (typeof opts === 'string') {
                opts = {
                    message: opts
                }
            }
            opts.disableCancel = true

            return confirm(opts)
        },
        confirm: confirm,
        loadRedisInfoResponse: loadRedisInfoResponse,
    }

    return result;
}).controller('p3xrToastController', function ($scope, $mdToast) {
    $scope.closeToast = function() {
        $mdToast.hide();
    };
})
