p3xr.theme.matrix = function ($mdThemingProvider) {

    p3xr.theme.matrix.order = 5

    $mdThemingProvider.theme(`p3xrThemeMatrixLayout`)
        .primaryPalette('light-green', {
            'default': 'A400',
            'hue-1': '50',
            'hue-2': '700',
            'hue-3': '900',
        })
        .accentPalette('light-green', {
            'default': 'A400',
            'hue-1': '100',
            'hue-2': '600',
            'hue-3': '800',
        })
        .warnPalette('green')
        .backgroundPalette('grey', {
            'default': '900',
            'hue-1': '900',
            'hue-2': '500',
            'hue-3': '100',
        })
    ;
    $mdThemingProvider.theme(`p3xrThemeMatrixLayout`).dark()


    $mdThemingProvider.theme(`p3xrThemeMatrix`)
        .primaryPalette('light-green', {
            'default': 'A400',
            'hue-1': '50',
            'hue-2': '700',
            'hue-3': '900',
        })
        .accentPalette('lime', {
            'default': 'A400',
        })
        .warnPalette('purple', {
            'default': 'A700',
        })
        .backgroundPalette('grey')
    ;
    $mdThemingProvider.theme(`p3xrThemeMatrix`).dark()

    $mdThemingProvider.theme(`p3xrThemeMatrixCommon`)
        .primaryPalette('light-green', {
            default: 'A400',
            'hue-1': 'A400',
            'hue-2': 'A400',
            'hue-3': 'A400',
        })
        .accentPalette('light-green', {
            default: 'A400',
            'hue-1': 'A400',
            'hue-2': 'A400',
            'hue-3': 'A400',
        })
        .warnPalette('green')
        .backgroundPalette('grey', {
            default: '900'
        })
    ;
    $mdThemingProvider.theme(`p3xrThemeMatrixCommon`).dark()

}
