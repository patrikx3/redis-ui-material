// angular
global.angular = require('angular');

require('angular-aria');
require('angular-messages');
require('angular-animate');
require('angular-cookies');

require('@uirouter/angularjs')
require('angular-material');1

require('angular-tree-control')
require('angular-tree-control/context-menu')

p3xr.ng =  angular.module('p3x-redis-ui', [
    'ngCookies',
    'ngAnimate',
    'ngAria',
    'ngMessages',
    'ngMaterial',
    'ui.router',
    'treeControl',
] );



require('./injector')


p3xr.ng.config(($qProvider, $locationProvider, $urlRouterProvider, $stateProvider, p3xrThemeProvider) => {

    $qProvider.errorOnUnhandledRejections(false);
    $locationProvider.html5Mode(true);
//  $urlRouterProvider.otherwise('/');
//  $httpProvider.interceptors.push('ngivrHttpInterceptor');
    p3xrThemeProvider.start();
    const routes = require('./routes')

    $urlRouterProvider.otherwise('/main');

    routes($stateProvider);

})

p3xr.ng.run(($rootScope, p3xrSocket, p3xrTheme, $mdMedia, $state, $timeout, $cookies, p3xrRedisParser) => {
    $rootScope.p3xr = p3xr;
    $rootScope.$mdMedia = $mdMedia;

    $rootScope.hasConnected = () => {
        if (Object.keys(p3xr.state.redisConnections).length === 0) {
            return false
        }
        return true;
    }

    $rootScope.locationReload = () => {
        $state.go('main')
        location.reload()
    }

    const treeDividerDefault = ':'
    let treeDivider
    Object.defineProperty($rootScope.p3xr.settings, 'redisTreeDivider', {
        get: () => {
            treeDivider = $cookies.get(p3xr.settings.tree.cookieName)
            if (treeDivider === undefined) {
                treeDivider = treeDividerDefault
            }
            return treeDivider
        },
        set: (value) => {
            treeDivider = value
            treeDivider = $cookies.put(p3xr.settings.tree.cookieName, value, {
                expires: p3xr.settings.cookieExpiry,
            })
        }
    })

    let pagingCount
    Object.defineProperty($rootScope.p3xr.settings, 'pagingCount', {
        get: () => {
            pagingCount = $cookies.get(p3xr.settings.paging.cookieName)
            if (pagingCount === undefined) {
                pagingCount = p3xr.settings.paging.default
            } else {
                pagingCount = parseInt(pagingCount)
            }
            return pagingCount
        },
        set: (value) => {
            pagingCount = value
            pagingCount = $cookies.put(p3xr.settings.paging.cookieName, value, {
                expires: p3xr.settings.cookieExpiry,
            })
        }
    })

    $rootScope.keysTreeRendered = []

    let expandedNodes = []
    Object.defineProperty($rootScope, 'expandedNodes', {
        get: () => {
            //console.warn('expandedNodes get', expandedNodes)
            return expandedNodes
        },
        set: (value) =>  {
            //console.warn('expandedNodes set', expandedNodes)
            expandedNodes = value
        }
    })

    let keys
    Object.defineProperty($rootScope, 'keysTree', {
        get: () => {
            if (JSON.stringify(keys) !== JSON.stringify(p3xr.state.keys) ) {
                $rootScope.keysTreeRendered =  p3xrRedisParser.keysToTreeControl({
                    keys: p3xr.state.keys
                })
                keys = p3xr.state.keys
            }
            return $rootScope.keysTreeRendered
        },
        set: (value) => {
            keys = value
        }
    })




    //console.warn('p3xrTheme', p3xrTheme)
    p3xrTheme.start()
    console.info('P3X Redis UI ran')
})

angular.element(document).ready(() => {
    const bootstrapElement = document.getElementById('p3x-redis-ui-bootstrap');
    angular.bootstrap(bootstrapElement, ['p3x-redis-ui']);
})
