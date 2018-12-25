p3xr.ng.directive('p3xrInput', function(p3xrTheme) {
    return {
        template: `<input md-whiteframe="{{ focused ? 3 : 1}}" ng-focus="focused=true" ng-blur="focused=false" class="p3xr-input" md-theme="{{ $root.p3xr.state.themeLayout }}" md-colors="{background: inputBackground(), 'border-color': inputBorderColor()}"/>`,
        replace: true,
        link: function(scope) {

            scope.focused = false

            scope.inputBackground = () => {
                return p3xrTheme.isDark() ? 'accent-800-0.75' : 'accent-100-0.75'
            }

            scope.inputBorderColor = () => {
                return p3xrTheme.isDark() ? (scope.focused ? 'primary-200' : 'primary-200-0.75' ) : ( scope.focused ? 'primary-900' : 'primary-800-0.75')
            }
        }
    }
})