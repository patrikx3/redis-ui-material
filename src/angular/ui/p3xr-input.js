p3xr.ng.directive('p3xrInput', function(p3xrTheme) {
    return {
        template: `<input md-whiteframe="5" class="p3xr-input" md-theme="{{ $root.p3xr.state.themeLayout }}" md-colors="{background: inputBackground(), 'border-color': inputBorderColor()}"/>`,
        replace: true,
        link: function(scope) {

            scope.inputBackground = () => {
                return p3xrTheme.isDark() ? 'accent-800-0.75' : 'accent-100-0.75'
            }

            scope.inputBorderColor = () => {
                return p3xrTheme.isDark() ? 'primary-200-0.75' : 'primary-800-0.75'
            }
        }
    }
})