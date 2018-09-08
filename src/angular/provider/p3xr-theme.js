p3xr.ng.provider('p3xrTheme', function p3xrThemeProvider($mdThemingProvider,  ) {
    const selfProvider = this;

    $mdThemingProvider.generateThemesOnDemand(true);
    $mdThemingProvider.alwaysWatchTheme(true);
    $mdThemingProvider.setNonce();

    const themeCookieName = 'p3xr-theme'

    const themeDefault = 'p3xrThemeLight';

    this.start = () => {
//    console.warn('ngivrTheme we are in the provider eg: config')(
        Object.keys(p3xr.theme).forEach(theme => {
            //console.warn('provider theme: ', theme)
            p3xr.theme[theme]($mdThemingProvider)
        })
        $mdThemingProvider.setDefaultTheme(themeDefault);
    }


    const themeIsGenerated = {};

    // this is the service eg: ngivrTheme
    this.$get = ['$mdTheming', '$rootScope' , '$cookies', function p3xxThemeFactory($mdTheming, $rootScope, $cookies ) {

        // let's assume that the UnicornLauncher constructor was also changed to
        // accept and use the useTinfoilShielding argument
        return new function p3xrTheme() {

            const self = this;

            this.start = () => {
//        console.log(selfProvider);
//        console.log('ngivrTheme we are in the service eg: run or injector')
                self.setTheme();
            }

            this.setTheme = (themeName) => {
                if (themeName === undefined) {
                    themeName = $cookies.get(themeCookieName)
                    if (themeName === undefined) {
                        themeName = themeDefault
                    }
                }

                //console.warn(`theme will generate theme on the fly: ${theme}`);
                if (!themeIsGenerated.hasOwnProperty(themeName)) {
                    //console.warn(`theme generating theme on the fly: ${theme}`);
                    $mdTheming.generateTheme(themeName);
                    $mdTheming.generateTheme(`${themeName}Layout`);
                    $mdTheming.generateTheme(`${themeName}Common`);
                    themeIsGenerated[themeName] = true;
                }
                //console.warn(themeIsGenerated)
                //console.warn(`theme registered: ${$mdTheming.registered(theme)}`);
                $mdThemingProvider.setDefaultTheme(themeName);
                $rootScope.p3xr.state.theme = themeName;
                const expiry = new Date();
                expiry.setFullYear(expiry.getFullYear() + 1)
                $cookies.put(themeCookieName, themeName, {expires: expiry});

            }

            this.getCurrentThemeName = () => {
                return $cookies.get(themeCookieName);
            }

            this.generateThemeName = (themeNameRaw) => {
                const generateThemeName = 'p3xrTheme' + themeNameRaw[0].toUpperCase() + themeNameRaw.substring(1)
                return generateThemeName;
            }

        };
    }];
});

