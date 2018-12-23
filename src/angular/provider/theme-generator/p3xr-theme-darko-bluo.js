p3xr.theme.darkoBluo = function ($mdThemingProvider) {

    $mdThemingProvider.theme(`p3xrThemeDarkoBluoLayout`)
        .primaryPalette('indigo', {
            'default': '900',
            'hue-1': '50',
            'hue-2': '700',
            'hue-3': '900',
        })
        .accentPalette('indigo', {
            'default': '600',
            'hue-1': '50',
            'hue-2': '700',
            'hue-3': '900',
        })
        .warnPalette('blue-grey')
        .backgroundPalette('grey', {
            'default': '900',
            'hue-1': '800',
            'hue-2': '700',
            'hue-3': '900',
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
        .warnPalette('red')
        .backgroundPalette('grey')
    ;
    $mdThemingProvider.theme(`p3xrThemeDarkoBluo`).dark()

    $mdThemingProvider.theme(`p3xrThemeDarkoBluoCommon`)
        .primaryPalette('green')
        .accentPalette('orange')
        .warnPalette('yellow')
        .backgroundPalette('grey' )
    ;
    $mdThemingProvider.theme(`p3xrThemeDarkoBluoCommon`).dark()
}
