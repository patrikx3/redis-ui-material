p3xr.ng.directive('p3xrMonitorInput', function($compile, $timeout) {
    return {
        restrict: 'A',
        scope: {
            controller: '='        // Two-way binding to pass the controller
        },
        link: function(scope, element, attrs) {
            let popupElement = angular.element(`
        <div class="p3xr-monitor-input" ng-show="showPopup">
            <md-toolbar class="md-primary" ng-class="{'md-hue-1': $ctrl.type !== 'quick', 'md-hue-3': $ctrl.type === 'quick'}" md-theme="{{ $root.p3xr.state.themeLayout}}">
                <div class="md-toolbar-tools">
                    <p3xr-input maxlength="255" ng-model="$root.p3xr.state.monitorPattern" ng-change="$ctrl.setMonitorState()" style="width: 140px; font-size: 14px; font-family: 'Roboto Mono' !important; font-weight: 500;"
                 ng-model-options="{ debounce: modelOptions.debounce }"></p3xr-input>
                </div>
            </md-toolbar>
        </div>`);
            $compile(popupElement)(scope);
            element.append(popupElement);
        
            scope.modelOptions = {
                debounce: 1000  // Use provided debounce setting or default to 300ms
            };
            scope.$ctrl = scope.controller;
        
            let hoverTimeout;
        
            element.on('mouseenter', function() {
                if (hoverTimeout) $timeout.cancel(hoverTimeout);
                scope.$apply(function() {
                    scope.showPopup = true;
                });
            });
        
            element.on('mouseleave', function() {
                if (hoverTimeout) $timeout.cancel(hoverTimeout);
                hoverTimeout = $timeout(function() {
                    scope.$apply(function() {
                        scope.showPopup = false;
                    });
                }, scope.modelOptions.debounce);  // Delay hiding the popup
            });
        }
    }
})        