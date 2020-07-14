p3xr.theme.darkNeu = function ($mdThemingProvider, p3xrThemeNameGenerator) {

    p3xr.theme.darkNeu.order = 1

    $mdThemingProvider.theme('p3xrThemeDarkNeuLayout')
        .primaryPalette('blue-grey', {
            'default': '800',
            'hue-1': '50',
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
    ;
    $mdThemingProvider.theme('p3xrThemeDarkNeuLayout').dark();

    $mdThemingProvider.theme(`p3xrThemeDarkNeu`)
        .primaryPalette('cyan')
        .accentPalette('blue')
        .warnPalette('yellow')
//        .backgroundPalette('blue-grey')
    ;
    $mdThemingProvider.theme(`p3xrThemeDarkNeu`).dark()

    $mdThemingProvider.theme(`p3xrThemeDarkNeuCommon`)
        .primaryPalette('green')
        .accentPalette('orange')
        .warnPalette('yellow')
        .backgroundPalette('blue-grey', {
            default: '900'
    })
    ;
    $mdThemingProvider.theme(`p3xrThemeDarkNeuCommon`).dark()


}
