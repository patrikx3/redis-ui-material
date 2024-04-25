p3xr.ng.directive('p3xrInput', function (p3xrTheme, p3xrCommon) {
    return {
        template: `<input ng-focus="focused=true" ng-blur="focused=false" class="p3xr-input" md-theme="{{ $root.p3xr.state.themeLayout }}" md-colors="{}" ng-style="{ 'background': p3xrCommon.inputBackground(), 'color': p3xrCommon.inputColor(), 'border-color': p3xrCommon.inputBorderColor()}"/>`,
        replace: true,
        link: function (scope) {

            scope.focused = false

            scope.p3xrCommon = p3xrCommon
        }
    }
})
