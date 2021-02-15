

p3xr.ng = angular.module('p3xr-redis-ui', [
    'ngCookies',
    'ngAnimate',
    'ngAria',
    'ngSanitize',
    'ngMessages',
    'ngMaterial',
    'ui.router',
    'treeControl',
    'angular-json-tree',
    'angular-inview',
]);


require('./injector')


p3xr.ng.config(($qProvider, $locationProvider, $urlRouterProvider, $stateProvider, p3xrThemeProvider, $mdAriaProvider) => {

    $mdAriaProvider.disableWarnings();
    $qProvider.errorOnUnhandledRejections(false);
    $locationProvider.html5Mode(true);
//  $urlRouterProvider.otherwise('/');
//  $httpProvider.interceptors.push('ngivrHttpInterceptor');
    p3xrThemeProvider.start();
    const routes = require('./routes')

    $urlRouterProvider.otherwise('/main');

    routes($stateProvider);

})

p3xr.ng.run(($rootScope, p3xrSocket, p3xrTheme, $mdMedia, $state, $timeout, $cookies, p3xrRedisParser, $animate) => {

    $rootScope.p3xr = p3xr;
    $rootScope.$mdMedia = $mdMedia;
    $rootScope.isElectron = (/electron/i.test(navigator.userAgent))

    $rootScope.hasConnected = () => {
        if (Object.keys(p3xr.state.redisConnections).length === 0) {
            return false
        }
        return true;
    }

    $rootScope.locationReload = () => {
        // $state.go('main')
        // location.reload()
        location.href = '/'
    }


    let search
    Object.defineProperty($rootScope.p3xr.state, 'search', {
        get: () => {
            search = $cookies.get('p3xr-state-search')
            //console.warn('search', search)
            if (search === undefined) {
                search = ''
            }
            return search
        },
        set: (value) => {
            //console.warn(`set value ${value}`)
            search = value
            search = $cookies.put('p3xr-state-search', value, {
                expires: p3xr.settings.cookieExpiry,
            })
        }
    })

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

    let jsonFormat
    Object.defineProperty($rootScope.p3xr.settings, 'jsonFormat', {
        get: () => {
            jsonFormat = $cookies.get(p3xr.settings.jsonFormatSettings.cookieName)
            if (jsonFormat === undefined) {
                jsonFormat = p3xr.settings.jsonFormatSettings.default
            }
            return parseInt(jsonFormat)
        },
        set: (value) => {
            jsonFormat = value
            jsonFormat = $cookies.put(p3xr.settings.jsonFormatSettings.cookieName, value, {
                expires: p3xr.settings.cookieExpiry,
            })
        }
    })


    const setAnimation = () => {
        console.log('set animation', $rootScope.p3xr.settings.animation)
        $animate.enabled($rootScope.p3xr.settings.animation)
        if ($rootScope.p3xr.settings.animation) {
            $body.removeClass('p3xr-no-animation')
        } else {
            $body.addClass('p3xr-no-animation')
        }
    }

    let animation
    Object.defineProperty($rootScope.p3xr.settings, 'animation', {
        get: () => {
            animation = $cookies.get(p3xr.settings.animationSettings.cookieName)
            if (animation === undefined) {
                animation = p3xr.settings.animationSettings.default
            }
            return parseInt(animation) === 1
        },
        set: (value) => {
            animation = value
            animation = $cookies.put(p3xr.settings.animationSettings.cookieName, value, {
                expires: p3xr.settings.cookieExpiry,
            })
            setAnimation()
        }
    })
    setAnimation()

    let maxValueDisplay
    Object.defineProperty($rootScope.p3xr.settings, 'maxValueDisplay', {
        get: () => {
            maxValueDisplay = $cookies.get(p3xr.settings.maxValueDisplaySetting.cookieName)
            if (maxValueDisplay === undefined) {
                maxValueDisplay = p3xr.settings.maxValueDisplaySetting.default
            }

            return parseInt(maxValueDisplay)
        },
        set: (value) => {
            maxValueDisplay = parseInt(value)
            maxValueDisplay = $cookies.put(p3xr.settings.maxValueDisplaySetting.cookieName, value, {
                expires: p3xr.settings.cookieExpiry,
            })
        }
    })

    let maxKeysDisplay
    Object.defineProperty($rootScope.p3xr.settings, 'maxKeys', {
        get: () => {
            maxKeysDisplay = $cookies.get(p3xr.settings.maxKeysSettings.cookieName)
            if (maxKeysDisplay === undefined) {
                maxKeysDisplay = p3xr.settings.maxKeysSettings.default
            }
            let value = parseInt(maxKeysDisplay)
            if (isNaN(value) || value < 5 || value > p3xr.settings.maxKeysSettings.max) {
               value =  p3xr.settings.maxKeysSettings.default
            }
            return value
        },
        set: (value) => {
            maxKeysDisplay = parseInt(value)
            maxKeysDisplay = $cookies.put(p3xr.settings.maxKeysSettings.cookieName, value, {
                expires: p3xr.settings.cookieExpiry,
            })
        }
    })

    let language
    Object.defineProperty($rootScope.p3xr.settings.language, 'current', {
        get: () => {
            language = $cookies.get(p3xr.settings.language.cookieName)
            if (language === undefined) {
                language = p3xr.settings.language.defaultLanguage
                require('moment').locale(p3xr.settings.language.momentDateMap[language])
            }
            return language
        },
        set: (value) => {
            //console.warn('p3xr-language set incoming' , value)
            if (value === undefined) {
                value = p3xr.settings.language.defaultLanguage
            }
            //console.warn('p3xr-language set actual' , value)
            language = value

            require('moment').locale(p3xr.settings.language.momentDateMap[language])

            $rootScope.p3xr.strings = p3xr.settings.language.translation[value]
            //console.warn('p3xr-language set strings' , $rootScope.p3xr.strings)

            language = $cookies.put(p3xr.settings.language.cookieName, value, {
                expires: p3xr.settings.cookieExpiry,
            })
        }
    })
    $rootScope.p3xr.settings.language.current = $cookies.get(p3xr.settings.language.cookieName)

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
        set: (value) => {
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
            if ($rootScope.p3xr.state.redisChanged === true || JSON.stringify(keysTree) !== JSON.stringify(p3xr.state.keys)) {
                $rootScope.p3xr.state.redisChanged = false
                $rootScope.keysTreeRendered = p3xrRedisParser.keysToTreeControl({
                    keys: p3xr.state.keys,
                })
                keysTree = p3xr.state.keys
            }
            //console.log('keysTreeRendered', $rootScope.keysTreeRendered)
            return $rootScope.keysTreeRendered
        },
    })

    /*
    let chunked = []
    let chunks = []
    Object.defineProperty($rootScope, 'keysTreeChunked', {
        get: () => {
            if ($rootScope.keysTree.length < 50) {
                return $rootScope.keysTree;
            }
            let i, j, chunk = 50;
            for (i = 0, j = $rootScope.keysTree.length; i < j; i += chunk) {
                chunks.push($rootScope.keysTree.slice(i, i + chunk));
            }
            console.log(chunks)
            return chunks
        }
    })
*/

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
                const start = ($rootScope.p3xr.state.page - 1) * $rootScope.p3xr.settings.pageCount
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

    let keyPageCount
    Object.defineProperty($rootScope.p3xr.settings, 'keyPageCount', {
        get: () => {
            keyPageCount = $cookies.get(p3xr.settings.keyPage.cookieName)
            if (keyPageCount === undefined) {
                keyPageCount = p3xr.settings.keyPage.default
            } else {
                keyPageCount = parseInt(keyPageCount)
            }
            return keyPageCount
        },
        set: (value) => {
            keyPageCount = value
            keyPageCount = $cookies.put(p3xr.settings.keyPage.cookieName, value, {
                expires: p3xr.settings.cookieExpiry,
            })
        }
    })


    //console.warn('p3xrTheme', p3xrTheme)
    p3xrTheme.start()
    console.info('P3X Redis UI ran')
})
require('./angular-bootstrap')()

