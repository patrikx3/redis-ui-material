p3xr.ng.factory('p3xrCommon', function ($mdToast) {

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

    return {
        generalHandleError: generalHandleError,
        toast: toast,
    };
});
