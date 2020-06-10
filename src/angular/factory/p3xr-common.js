p3xr.ng.factory('p3xrCommon', function ($mdToast, $mdDialog, $mdColors, $rootScope, p3xrRedisParser, $timeout,) {

    const debounce = require('lodash/debounce')

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
            if (error.hasOwnProperty('code') && p3xr.strings.code.hasOwnProperty(error.code)) {
                error.message = p3xr.strings.code[error.code]
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
        const template = '<md-toast class="md-toast p3xr-toast-default">' + options.message + '</md-toast>'

        $mdToast.show({
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

    const loadRedisInfoResponse = (options) => {
        const {response} = options

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

        $timeout(() => {
            $rootScope.p3xr.state.reducedFunctions = $rootScope.p3xr.state.keysRaw.length > p3xr.settings.maxLightKeysCount
            $rootScope.$digest()
            console.timeEnd('loadRedisInfoResponse')
        })

    }

    const setTableZebraStyles = (options) => {
        const {$odd} = options
        if (!$odd) {
            return '';
        }
        let style = '';
        const bg = $mdColors.getThemeColor(`${p3xr.state.themeLayout}-background-500-0.1`)
        style += `background-color: ${bg};`
        return style;
    }

    const result = {
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
        setTableZebraStyles: setTableZebraStyles,
    }

    return result;
});
