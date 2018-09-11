
p3xr.ng.component('p3xrMainKey', {
    template: require('./p3xr-main-key.html'),
    controller: function(p3xrCommon, p3xrRedisParser, p3xrSocket, $rootScope, $stateParams) {

        this.$stateParams = $stateParams;
    }
})

