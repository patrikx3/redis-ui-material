p3xr.theme.darkoBluo = function ($mdThemingProvider) {

    p3xr.theme.darkoBluo.order = 5

    $mdThemingProvider.theme(`p3xrThemeDarkoBluoLayout`)
        .primaryPalette('indigo', {
            'default': '900',
            'hue-1': '500',
            'hue-2': '700',
            'hue-3': '900',
        })
        .accentPalette('indigo', {
            'default': '600',
            'hue-1': '50',
            'hue-2': '700',
            'hue-3': '900',
        })
        .warnPalette('indigo')
        .backgroundPalette('grey', {
            'default': '900',
            'hue-1': '900',
            'hue-2': '500',
            'hue-3': '100',
        })
    ;
    $mdThemingProvider.theme(`p3xrThemeDarkoBluoLayout`).dark()


    $mdThemingProvider.theme(`p3xrThemeDarkoBluo`)
        .primaryPalette('indigo', {
            'default': '300',
            'hue-1': '50',
            'hue-2': '700',
            'hue-3': '900',
        })
        .accentPalette('blue')
        .warnPalette('orange')
        .backgroundPalette('grey')
    ;
    $mdThemingProvider.theme(`p3xrThemeDarkoBluo`).dark()

    $mdThemingProvider.theme(`p3xrThemeDarkoBluoCommon`)
        .primaryPalette('green')
        .accentPalette('grey')
        .warnPalette('light-blue')
        .backgroundPalette('indigo', {
            default: '700'
        })
    ;
    $mdThemingProvider.theme(`p3xrThemeDarkoBluoCommon`).dark()

}
