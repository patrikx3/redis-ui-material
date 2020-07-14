p3xr.theme.dark = function ($mdThemingProvider) {

    p3xr.theme.dark.order = 3

    $mdThemingProvider.theme(`p3xrThemeDarkLayout`)
        .primaryPalette('grey', {
            'default': '800',
            'hue-1': '50',
            'hue-2': '700',
            'hue-3': '900',
        })
        .accentPalette('grey')
        .warnPalette('grey')
        .backgroundPalette('grey', {
            'default': 'A700',
            'hue-1': '800',
            'hue-2': '700',
            'hue-3': '900',
        })
    ;
    $mdThemingProvider.theme(`p3xrThemeDarkLayout`).dark()


    $mdThemingProvider.theme(`p3xrThemeDark`)
        .primaryPalette('blue-grey')
        .accentPalette('teal')
        .warnPalette('orange')
        .backgroundPalette('grey')
    ;
    $mdThemingProvider.theme(`p3xrThemeDark`).dark()

    $mdThemingProvider.theme(`p3xrThemeDarkCommon`)
        .primaryPalette('light-green')
        .accentPalette('deep-orange')
        .warnPalette('lime')
        .backgroundPalette('grey')
    ;
    $mdThemingProvider.theme(`p3xrThemeDarkCommon`).dark()

}
