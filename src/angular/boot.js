p3xr.ng =  angular.module('p3x-redis-ui', [
    'ngCookies',
    'ngAnimate',
    'ngAria',
    'ngMessages',
    'ngMaterial',
    'ui.router',
] );



require('./injector')


p3xr.ng.config(($qProvider, $locationProvider, $stateProvider, p3xrThemeProvider) => {

    $qProvider.errorOnUnhandledRejections(false);
    $locationProvider.html5Mode(true);
//  $urlRouterProvider.otherwise('/');
//  $httpProvider.interceptors.push('ngivrHttpInterceptor');
    p3xrThemeProvider.start();
    const routes = require('./routes')

    routes($stateProvider);

})

p3xr.ng.run(($rootScope, p3xrSocket, p3xrTheme, $mdMedia, $state, $timeout) => {
    $rootScope.p3xr = p3xr;
    $rootScope.$mdMedia = $mdMedia;

    $rootScope.hasConnected = () => {
        if (Object.keys(p3xr.state.redisConnections).length === 0) {
            return false
        }
        return true;
    }


    //console.warn('p3xrTheme', p3xrTheme)

    p3xrTheme.start()
    console.info('P3X Redis UI ran')


})

angular.element(document).ready(() => {
    const bootstrapElement = document.getElementById('p3x-redis-ui-bootstrap');
    angular.bootstrap(bootstrapElement, ['p3x-redis-ui']);
})
