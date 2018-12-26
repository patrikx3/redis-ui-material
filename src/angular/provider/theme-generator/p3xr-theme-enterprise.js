p3xr.theme.enterprise = function ($mdThemingProvider, p3xrThemeNameGenerator) {

    $mdThemingProvider.theme('p3xrThemeEnterpriseLayout')
        .primaryPalette('grey', {
            'default': '800',
            'hue-1': '50',
            'hue-2': '700',
            'hue-3': '900',
        })
        .accentPalette('grey', {
            'default': '600',
            'hue-1': '50',
            'hue-2': '700',
            'hue-3': '900',
        })
        .warnPalette('grey')
        .backgroundPalette('grey', {
            default: '400'
        })
    ;

    $mdThemingProvider.theme(`p3xrThemeEnterprise`)
        .primaryPalette('indigo')
        .accentPalette('blue')
        .warnPalette('red')
//        .backgroundPalette('grey')
    ;

    $mdThemingProvider.theme(`p3xrThemeEnterpriseCommon`)
        .primaryPalette('green')
        .accentPalette('orange')
        .warnPalette('yellow')
//        .backgroundPalette('grey')
    ;

}
