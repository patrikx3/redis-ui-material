p3xr.ng.factory('p3xrCommon', function ($mdToast, $mdDialog, $mdColors, $rootScope, p3xrRedisParser, $timeout) {

    const generalHandleError = (dataOrError) => {
        if (dataOrError === undefined) {
            return;
        }
        if (! (dataOrError instanceof Error || dataOrError instanceof Object)) {
            dataOrError = new Error(dataOrError)
        }
        if (dataOrError instanceof Error || dataOrError.status === 'error') {
            let error
            if (dataOrError instanceof Error) {
                error = dataOrError
            } else {
                error = dataOrError.error
            }
            console.error(error)
            if (error.hasOwnProperty('code') && p3xr.strings.code.hasOwnProperty(error.code)) {
                error.message = p3xr.strings.code[error.code]
            }
            $mdToast.show(
                $mdToast.simple()
                    .textContent(error.hasOwnProperty('message') ? error.message : error)
                    .position(p3xr.settings.toast.position)
                    .theme(p3xr.state.themeLayout)
                    .hideDelay(p3xr.settings.toast.timeout)
                  //  .capsule(true)
            );
            return false
        }
        return true
    }

    const toast = (options) => {
        $mdToast.show(
            $mdToast.simple()
                .textContent(options.message)
                .position(p3xr.settings.toast.position)
                .theme(p3xr.state.themeLayout)
                .hideDelay(p3xr.settings.toast.timeout)
            //    .capsule(true)
        );
    }

    const confirm = (options) => {
        let confirm
        if (!options.hasOwnProperty('disableCancel')) {
            confirm = $mdDialog.confirm()
        }  else {
            confirm = $mdDialog.alert()
        }

        confirm
            .title(p3xr.strings.confirm.title)
            .textContent(options.message)
            .targetEvent(options.event)
            .ok(p3xr.strings.intention.sure)

        if (!options.hasOwnProperty('disableCancel')) {
            confirm.cancel(p3xr.strings.intention.cancel);
        }

        return $mdDialog.show(confirm)
    }

    const loadRedisInfoResponse = (options) => {
        const { response } = options

        $rootScope.p3xr.state.info = p3xrRedisParser.info(response.info)

        $rootScope.p3xr.state.keysRaw = response.keys

        if ($rootScope.p3xr.settings.keysSort) {
            $rootScope.p3xr.state.keysRaw = response.keys.sort(p3xr.sort.naturalCompareDocument())
        } else {
            $rootScope.p3xr.state.keysRaw = response.keys
        }

        $rootScope.p3xr.state.keysInfo = response.keysInfo

        $timeout(() => {
            $rootScope.$digest()
        })

    }

    const setTableZebraStyles = (options) => {
        const { $odd } = options
        if (!$odd) {
            return '';
        }
        let style = '';
        const bg = $mdColors.getThemeColor(`${p3xr.state.themeLayout}-background-500-0.1`)
        style += `background-color: ${bg};`
        return style;
    }

    return {
        generalHandleError: generalHandleError,
        toast: toast,
        confirm: confirm,
        loadRedisInfoResponse: loadRedisInfoResponse,
        setTableZebraStyles: setTableZebraStyles,
    };
});
