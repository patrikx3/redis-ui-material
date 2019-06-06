p3xr.ng.directive('p3xValidateJson', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        scope: {
            p3xValidateJsonRequired: '<'
        },
        link: function (scope, elm, attrs, ngModel) {

            let required = scope.p3xValidateJsonRequired || false
            let globalValue

            scope.$watch('p3xValidateJsonRequired', (val, oldVal) => {
                required = val;
                if (!required) {
                    ngModel.$setValidity('p3xValidateJson', true);
                } else {
                    try {
                        JSON.parse(globalValue)
                        ngModel.$setValidity('p3xValidateJson', true);
                    } catch(e) {
                        ngModel.$setValidity('p3xValidateJson', false);
                    }
                }
            })

            ngModel.$validators.p3xIsJson = (modelValue, viewValue) => {
                globalValue = modelValue
                if (!required) {
                    ngModel.$setValidity('p3xValidateJson', true);
                    return true
                }
                try {
                    JSON.parse(modelValue)
                    ngModel.$setValidity('p3xValidateJson', true);
                    return true
                } catch(e) {
                    ngModel.$setValidity('p3xValidateJson', false);
                    return false
                }
            };
        }
    };
});
