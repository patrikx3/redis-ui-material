const routes = ($stateProvider) => {

    $stateProvider.state({
        name: 'settings',
        url: '/settings',
        template: '<p3xr-settings></p3xr-settings>'
    })

    $stateProvider.state({
        name: 'main',
        url: '/',
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
}

module.exports = routes