p3xr.ng.component('p3xrOverview', {
    template: require('./p3xr-overview.html'),
    controller: function($rootScope, $state) {
        if (!$rootScope.hasConnected()) {
            $state.go('main')
        }

    }
})

