p3xr.ng.component('p3xrError', {
    template: require('./p3xr-error.html'),
    controller: function ($stateParams, $rootScope) {

        this.$stateParams = $stateParams
        $rootScope.p3xr.state.failed = true;

    }
})

