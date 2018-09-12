p3xr.ng.factory('p3xrCommon', function ($mdToast, $mdDialog, $rootScope, p3xrRedisParser) {

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
        );
    }

    const confirm = (options) => {
        const confirm = $mdDialog.confirm()
            .title(p3xr.strings.confirm.title)
            .textContent(options.message)
            .targetEvent(options.event)
            .ok(p3xr.strings.intention.sure)
            .cancel(p3xr.strings.intention.cancel);

        return $mdDialog.show(confirm)
    }

    const loadRedisInfoResponse = (options) => {
        const { response } = options

        $rootScope.p3xr.state.info = p3xrRedisParser.info(response.info)
        $rootScope.p3xr.state.keys = response.keys
        $rootScope.p3xr.state.keysType = response.keysType
        $rootScope.$digest()

    }

    return {
        generalHandleError: generalHandleError,
        toast: toast,
        confirm: confirm,
        loadRedisInfoResponse: loadRedisInfoResponse
    };
});
