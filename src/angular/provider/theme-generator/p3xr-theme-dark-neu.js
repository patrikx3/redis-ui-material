p3xr.theme.darkNeu = function ($mdThemingProvider, p3xrThemeNameGenerator) {

    p3xr.theme.darkNeu.order = 1

    $mdThemingProvider.theme('p3xrThemeDarkNeuLayout')
        .primaryPalette('blue-grey', {
            'default': '800',
            'hue-1': '300',
            'hue-2': '700',
            'hue-3': '900',
        })
        .accentPalette('blue-grey', {
            'default': '300',
        })
        .warnPalette('grey')
        .backgroundPalette('grey', {
            default: '900',
        })
        .dark()
    ;

    $mdThemingProvider.theme(`p3xrThemeDarkNeu`)
        .primaryPalette('cyan')
        .accentPalette('blue')
        .warnPalette('yellow')
//        .backgroundPalette('blue-grey')
        .dark()
    ;

    $mdThemingProvider.theme(`p3xrThemeDarkNeuCommon`)
        .primaryPalette('green')
        .accentPalette('grey')
        .warnPalette('blue')
        .backgroundPalette('blue-grey', {
            default: '900'
        })
        .dark()
    ;

}
