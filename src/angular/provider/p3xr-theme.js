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

                let additional = ''

                if (themeName == 'p3xrThemeMatrix') {
                    additional = `
`
                }

                const borderColor = $mdColors.getThemeColor(p3xr.state.themeLayout + '-primary-hue-1');

                if (this.isDark() && !isMobile) {
                    additional += `
    ::-webkit-scrollbar {
        width: 16px;
        height: 16px;
    }

    ::-webkit-scrollbar-corner,
    ::-webkit-scrollbar-track {
        background-color: rgb(64, 64, 64);
    }

    ::-webkit-scrollbar-thumb {
        background-color: rgb(96, 96, 96);
        background-clip: padding-box;
        border: 2px solid transparent;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: rgb(112, 112, 112);
    }

    ::-webkit-scrollbar-thumb:active {
        background-color: rgb(128, 128, 128);
    }

    /* Buttons */
    ::-webkit-scrollbar-button:single-button {
        background-color: rgb(64, 64, 64);

        display: block;
        background-size: 10px;
        background-repeat: no-repeat;
    }

    /* Up */
    ::-webkit-scrollbar-button:single-button:vertical:decrement {
        height: 12px;
        width: 16px;
        background-position: center 4px;
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='rgb(96, 96, 96)'><polygon points='50,00 0,50 100,50'/></svg>");
    }

    ::-webkit-scrollbar-button:single-button:vertical:decrement:hover {
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='rgb(112, 112, 112)'><polygon points='50,00 0,50 100,50'/></svg>");
    }

    ::-webkit-scrollbar-button:single-button:vertical:decrement:active {
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='rgb(128, 128, 128)'><polygon points='50,00 0,50 100,50'/></svg>");
    }

    /* Down */
    ::-webkit-scrollbar-button:single-button:vertical:increment {
        height: 12px;
        width: 16px;
        background-position: center 2px;
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='rgb(96, 96, 96)'><polygon points='0,0 100,0 50,50'/></svg>");
    }

    ::-webkit-scrollbar-button:single-button:vertical:increment:hover {
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='rgb(112, 112, 112)'><polygon points='0,0 100,0 50,50'/></svg>");
    }

    ::-webkit-scrollbar-button:single-button:vertical:increment:active {
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='rgb(128, 128, 128)'><polygon points='0,0 100,0 50,50'/></svg>");
    }

    /* Left */
    ::-webkit-scrollbar-button:single-button:horizontal:decrement {
        height: 12px;
        width: 12px;
        background-position: 3px 3px;
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='rgb(96, 96, 96)'><polygon points='0,50 50,100 50,0'/></svg>");

    }

    ::-webkit-scrollbar-button:single-button:horizontal:decrement:hover {
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='rgb(112, 112, 112)'><polygon points='0,50 50,100 50,0'/></svg>");
    }

    ::-webkit-scrollbar-button:single-button:horizontal:decrement:active {
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='rgb(128, 128, 128)'><polygon points='0,50 50,100 50,0'/></svg>");
    }

    /* Right */
    ::-webkit-scrollbar-button:single-button:horizontal:increment {
        height: 12px;
        width: 12px;
        background-position: 3px 3px;
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='rgb(96, 96, 96)'><polygon points='0,0 0,100 50,50'/></svg>");
    }

    ::-webkit-scrollbar-button:single-button:horizontal:increment:hover {
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='rgb(112, 112, 112)'><polygon points='0,0 0,100 50,50'/></svg>");
    }

    ::-webkit-scrollbar-button:single-button:horizontal:increment:active {
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='rgb(128, 128, 128)'><polygon points='0,0 0,100 50,50'/></svg>");
    }

`
                }

                const styles = `
${additional}

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
`

                $('head').append('<style id="p3xr-theme-styles">' + styles + '</style>')


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

