const MobileDetect = require('mobile-detect')
const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile() !== null || md.phone() !== null || md.tablet() !== null

p3xr.ng.provider('p3xrTheme', function p3xrThemeProvider($mdThemingProvider,) {
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

    const themeType = {
        dark: [
            'p3xrThemeDarkNeu',
            'p3xrThemeDark',
            'p3xrThemeDarkoBluo',
            'p3xrThemeMatrix',
        ],
        light: [
            'p3xrThemeLight',
            'p3xrThemeEnterprise',
            'p3xrThemeRedis',
        ]
    }

    // this is the service eg: ngivrTheme
    this.$get = ['$mdTheming', '$rootScope', '$cookies', '$mdColors', function p3xThemeFactory($mdTheming, $rootScope, $cookies, $mdColors) {

        // let's assume that the UnicornLauncher constructor was also changed to
        // accept and use the useTinfoilShielding argument
        return new function p3xrTheme() {

            const self = this;

            this.isDark = () => {
                return themeType.dark.includes(this.getCurrentThemeName())
            }

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
                $cookies.put(themeCookieName, themeName, {expires: p3xr.settings.cookieExpiry,});

                $body.removeClass('p3xr-theme-light')
                $body.removeClass('p3xr-theme-dark')
                if (themeType.dark.includes(themeName)) {
                    $body.addClass('p3xr-theme-dark')
                } else {
                    $body.addClass('p3xr-theme-light')
                }
                $('#p3xr-theme-styles').remove()

                const darkColor = p3xr.state.themeCommon + '-background';
                //console.warn(darkColor)

                const borderColor = $mdColors.getThemeColor(p3xr.state.themeLayout + '-primary-hue-1');

                const styles = `
.p3xr-theme-dark .p3xr-content-border {
    border-left: 1px solid ${borderColor};
    border-right: 1px solid ${borderColor};
    border-bottom: 1px solid ${borderColor};
}

.p3xr-theme-light .p3xr-content-border {
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    border-bottom: 1px solid transparent;
}


.p3xr-toast-default .md-toast-content {
    background-color: ${this.isDark() ? $mdColors.getThemeColor(darkColor) : 'auto'} !important;
    border: solid 1px ${this.isDark() ? 'rgba(255, 255, 255, 0.5)' : 'auto'} !important;
    ${this.isDark() ? 'box-shadow:  0 0 10px  rgba(0,0,0,0.6);' : ''}
}

treecontrol i.tree-branch-head:before {
    color: ${this.isDark() ? $mdColors.getThemeColor('amber-A100') : $mdColors.getThemeColor('amber-A400')};
    ${this.isDark() ? 'text-shadow: 1px 1px 1px rgba(55, 29, 27, 0.5);' : 'text-shadow: 1px 1px 0px rgba(55, 11, 0, 0.5);' }
}

body.p3xr-theme-dark[md-theme="p3xrThemeMatrixLayout"] treecontrol i.tree-branch-head:before {
    color: ${$mdColors.getThemeColor('lime-A400')} !important;
}


.p3xr-list-key-odd-item {
    background-color: ${$mdColors.getThemeColor(p3xr.state.themeLayout + '-background-500-0.1')};
}
.p3xr-list-key-item {
    border-bottom: 1px solid ${this.isDark() ? $mdColors.getThemeColor(p3xr.state.themeLayout + '-background-300-0.1') : $mdColors.getThemeColor(p3xr.state.themeLayout + '-background-700-0.1') };
}

input:-webkit-autofill, input:-webkit-autofill:focus {
    -webkit-box-shadow:0 0 0 50px ${this.isDark() ? 'rgb(66, 66, 66, 0.9)' : 'rgba(255, 255, 255, 0.5)'} inset !important;
    -webkit-text-fill-color: ${this.isDark() ? 'white' : 'black'}  !important;
}
`

                $('head').append('<style id="p3xr-theme-styles">' + styles + '</style>')

                // https://stackoverflow.com/questions/65940522/how-do-i-switch-to-chromes-dark-scrollbar-like-github-does
                // but fixed by p3x-robot
                document.documentElement.style.display = 'none';

                document.documentElement.setAttribute(
                    "data-color-scheme",
                    this.isDark() ? "dark" : "light"
                );
                // remove scrollbars
//                document.documentElement.style.overflow = "hidden";
                // trigger reflow so that overflow style is applied
                document.body.clientWidth;
                // remove overflow style, which will bring back the scrollbar with the correct scheme
//                document.documentElement.style.overflow = "";
                document.documentElement.style.display = '';

                $rootScope.$broadcast('p3xr-theme-switched')
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

