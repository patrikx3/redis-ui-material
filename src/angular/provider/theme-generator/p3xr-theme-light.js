p3xr.theme.light = function ($mdThemingProvider, p3xrThemeNameGenerator) {

    p3xr.theme.light.order = 0;

    $mdThemingProvider.theme('p3xrThemeLightLayout')
        .primaryPalette('blue-grey', {
            'default': '800',
            'hue-1': '50',
            'hue-2': '700',
            'hue-3': '900',
        })
        .accentPalette('blue-grey')
        .warnPalette('grey')
        .backgroundPalette('blue-grey', {
            'default': 'A100',
            'hue-1': '50',
            'hue-2': '700',
            'hue-3': '900',
        })
    ;

    $mdThemingProvider.theme(`p3xrThemeLight`)
        .primaryPalette('deep-purple')
        .accentPalette('purple')
        .warnPalette('red')
        .backgroundPalette('blue-grey')
    ;

    $mdThemingProvider.theme(`p3xrThemeLightCommon`)
        .primaryPalette('green')
        .accentPalette('orange')
        .warnPalette('yellow')
        .backgroundPalette('blue-grey')
    ;

    return this

}
