p3xr.theme.redis = function ($mdThemingProvider, p3xrThemeNameGenerator) {

    p3xr.theme.redis.order = 4

    $mdThemingProvider.theme('p3xrThemeRedisLayout')
        .primaryPalette('red', {
            'default': '800',
            'hue-1': '50',
            'hue-2': '700',
            'hue-3': '900',
        })
        .accentPalette('grey', {
            default: '200'
        })
        .warnPalette('red')
        .backgroundPalette('red', {
            'default': '100',
            'hue-1': '300',
            'hue-2': '700',
            'hue-3': '900',
        })
    ;

    $mdThemingProvider.theme(`p3xrThemeRedis`)
        .primaryPalette('grey', {
            default: '900'
        })
        .accentPalette('grey', {
            default: '600'
        })
        .warnPalette('amber')
//        .backgroundPalette('blue-grey')
    ;

    $mdThemingProvider.theme(`p3xrThemeRedisCommon`)
        .primaryPalette('green')
        .accentPalette('orange')
        .warnPalette('yellow')
        .backgroundPalette('grey')
    ;

}
