p3xr.ng.directive('p3xrInput', function (p3xrTheme) {
    return {
        template: `<input ng-focus="focused=true" ng-blur="focused=false" class="p3xr-input" md-theme="{{ $root.p3xr.state.themeLayout }}" md-colors="{'border-color': inputBorderColor()}" ng-style="{ 'background': inputBackground(), 'color': inputColor()}"/>`,
        replace: true,
        link: function (scope) {

            scope.focused = false

            scope.inputBackground = () => {
                return p3xrTheme.isDark() ? 'rgba(64, 64, 64, 1)' : 'white'
            }

            scope.inputBorderColor = () => {
                return p3xrTheme.isDark() ? 'primary-hue-1' : 'primary-hue-1'
            }

            scope.inputColor = () => {
                return p3xrTheme.isDark() ? 'white' : 'black'
            }
        }
    }
})
