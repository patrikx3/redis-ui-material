const routes = ($stateProvider, $urlRouterProvider) => {

    $stateProvider.state({
        name: 'settings',
        url: '/settings',
        template: '<p3xr-settings></p3xr-settings>'
    })

    $stateProvider.state({
        name: 'main',
        url: '/main',
        template: '<p3xr-main></p3xr-main>'
    })

    $stateProvider.state({
        name: 'overview',
        url: '/overview',
        template: '<p3xr-overview></p3xr-overview>'
    })

    $stateProvider.state({
        name: 'console',
        url: '/console',
        template: '<p3xr-console></p3xr-console>'
    })

    $stateProvider.state('main.statistics', {
        url: '/statistics',
        template: '<p3xr-main-statistics></p3xr-main-statistics>',
    });

    $stateProvider.state('main.key', {
        url: '/key/:key',
        template: '<p3xr-main-key></p3xr-main-key>',
    });

}

module.exports = routes