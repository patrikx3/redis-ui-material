// angular
global.angular = require('angular');

require('angular-aria');
require('angular-sanitize')
require('angular-messages');
require('angular-animate');
require('angular-cookies');

require('@uirouter/angularjs')
require('angular-material');

require('angular-tree-control')
require('angular-tree-control/context-menu')

require('angular-json-tree')

p3xr.ng =  angular.module('p3xr-redis-ui', [
    'ngCookies',
    'ngAnimate',
    'ngAria',
    'ngSanitize',
    'ngMessages',
    'ngMaterial',
    'ui.router',
    'treeControl',
    'angular-json-tree',
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


    let treeDivider
    Object.defineProperty($rootScope.p3xr.settings, 'redisTreeDivider', {
        get: () => {
            treeDivider = $cookies.get(p3xr.settings.tree.cookieName)
            if (treeDivider === undefined) {
                treeDivider = p3xr.settings.tree.defaultDivider
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

    let keysSort
    Object.defineProperty($rootScope.p3xr.settings, 'keysSort', {
        get: () => {
            keysSort = $cookies.get(p3xr.settings.keySortInfo.cookieName)
            if (keysSort === undefined) {
                keysSort = p3xr.settings.keySortInfo.default
            } else if (keysSort === 'true') {
                keysSort = true
            } else if (keysSort === 'false') {
                keysSort = false
            }
            return keysSort
        },
        set: (value) => {
            keysSort = value
            keysSort = $cookies.put(p3xr.settings.keySortInfo.cookieName, value, {
                expires: p3xr.settings.cookieExpiry,
            })
        }
    })


    let searchClientSide
    Object.defineProperty($rootScope.p3xr.settings, 'searchClientSide', {
        get: () => {
            searchClientSide = $cookies.get(p3xr.settings.searchInfoClientSide.cookieName)
            if (searchClientSide === undefined) {
                searchClientSide = p3xr.settings.searchInfoClientSide.default
            } else if (searchClientSide === 'true') {
                searchClientSide = true
            } else if (searchClientSide === 'false') {
                searchClientSide = false
            }
            if (p3xr.state.keysRaw.length > p3xr.settings.maxLightKeysCount || p3xr.state.dbsize > p3xr.settings.maxLightKeysCount) {
                searchClientSide = false
            }
            return searchClientSide
        },
        set: (value) => {
            searchClientSide = value
            searchClientSide = $cookies.put(p3xr.settings.searchInfoClientSide.cookieName, value, {
                expires: p3xr.settings.cookieExpiry,
            })
        }
    })


    let searchStartsWith
    Object.defineProperty($rootScope.p3xr.settings, 'searchStartsWith', {
        get: () => {
            searchStartsWith = $cookies.get(p3xr.settings.searchInfoStartsWith.cookieName)
            if (searchStartsWith === undefined) {
                searchStartsWith = p3xr.settings.searchInfoStartsWith.default
            } else if (searchStartsWith === 'true') {
                searchStartsWith = true
            } else if (searchStartsWith === 'false') {
                searchStartsWith = false
            }
            return searchStartsWith
        },
        set: (value) => {
            searchStartsWith = value
            searchStartsWith = $cookies.put(p3xr.settings.searchInfoStartsWith.cookieName, value, {
                expires: p3xr.settings.cookieExpiry,
            })
        }
    })

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
    $rootScope.savedExpandedNodes = []

    let page = 1
    Object.defineProperty($rootScope.p3xr.state, 'page', {
        get: () => {
            return page
        },
        set: (value) => {
            page = parseInt(value)
        }
    })



    $rootScope.keysTreeRendered = []
    let keysTree
    Object.defineProperty($rootScope, 'keysTree', {
        get: () => {
            //const startNow = Date.now()
            if (JSON.stringify(keysTree) !== JSON.stringify(p3xr.state.keys) || $rootScope.p3xr.state.redisChanged === true ) {
                $rootScope.p3xr.state.redisChanged = false
                $rootScope.keysTreeRendered =  p3xrRedisParser.keysToTreeControl({
                    keys: p3xr.state.keys,
                })
                keysTree = p3xr.state.keys
            }
            //console.warn('parse tree', ((Date.now() - startNow)) / 1000)
            return $rootScope.keysTreeRendered
        },
        set: (value) => {
            keysTree = value
        }
    })

    let globalKeysRaw = [];
    Object.defineProperty($rootScope.p3xr.state, 'keys', {
        get: () => {
            //const startNow = Date.now()
            globalKeysRaw = $rootScope.p3xr.state.keysRaw.slice()
            if ($rootScope.p3xr.settings.searchClientSide && typeof ($rootScope.p3xr.state.search) === 'string' && $rootScope.p3xr.state.search.length > 0) {
                //console.log($rootScope.p3xr.settings.searchStartsWith)
                if ($rootScope.p3xr.settings.searchStartsWith) {
                    //console.log('startswith')
                    globalKeysRaw = globalKeysRaw.filter(keyRaw => {
                        return keyRaw.startsWith($rootScope.p3xr.state.search)
                    })
                 } else {
                    //console.log('includes')
                    globalKeysRaw = globalKeysRaw.filter(keyRaw => {
                        return keyRaw.includes($rootScope.p3xr.state.search)
                    })
                }
            }
            if (globalKeysRaw <= $rootScope.p3xr.settings.pageCount) {
                return globalKeysRaw
            } else {
                //console.log('new scope change',  ($rootScope.p3xr.state.page -1) * $rootScope.p3xr.settings.pageCount, $rootScope.p3xr.settings.pageCount)
                const start = ($rootScope.p3xr.state.page -1) * $rootScope.p3xr.settings.pageCount
                const keys = globalKeysRaw.slice(start, start + $rootScope.p3xr.settings.pageCount)
                //console.warn('parse keys', ((Date.now() - startNow)) / 1000)
                return keys
            }
        }
    })

    Object.defineProperty($rootScope.p3xr.state, 'pages', {
        get: () => {
            return Math.ceil(globalKeysRaw.length / $rootScope.p3xr.settings.pageCount)
            //const pages = Math.ceil($rootScope.p3xr.state.keysRaw.length / $rootScope.p3xr.settings.pageCount)
            //return pages
        }
    })

    let pageCount
    Object.defineProperty($rootScope.p3xr.settings, 'pageCount', {
        get: () => {
            pageCount = $cookies.get(p3xr.settings.paging.cookieName)
            if (pageCount === undefined) {
                pageCount = p3xr.settings.paging.default
            } else {
                pageCount = parseInt(pageCount)
            }
            return pageCount
        },
        set: (value) => {
            pageCount = value
            pageCount = $cookies.put(p3xr.settings.paging.cookieName, value, {
                expires: p3xr.settings.cookieExpiry,
            })
        }
    })


    //console.warn('p3xrTheme', p3xrTheme)
    p3xrTheme.start()
    console.info('P3X Redis UI ran')
})

angular.element(document).ready(() => {
    const bootstrapElement = document.getElementById('p3xr-redis-ui-bootstrap');
    angular.bootstrap(bootstrapElement, ['p3xr-redis-ui']);
})
