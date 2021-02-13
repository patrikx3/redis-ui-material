p3xr.ng.directive('p3xValidateJson', function ($timeout, $rootScope) {
    return {
        restrict: 'A',
        require: 'ngModel',
        scope: {
            p3xValidateJsonRequired: '<',
            model : '=ngModel',
        },
        link: function (scope, elm, attrs, ngModel) {

            let required = scope.p3xValidateJsonRequired || false
            let globalValue

            const setValidate = (isValid) => {
                ngModel.$setValidity('p3xValidateJson', isValid);
            }

            scope.$watch('p3xValidateJsonRequired', (val, oldVal) => {
                required = val;
                //console.warn('p3x-validate-json p3xValidateJsonRequired', 'required', required)
                if (!required) {
//                    ngModel.$modelValue = globalValue
                    setValidate(true)

                    scope.model = globalValue

                } else {
                    try {
                        JSON.parse(globalValue)
                        setValidate(true)
                    } catch (e) {
                        setValidate(false)
                    }
                }
            })

            ngModel.$validators.p3xValidateJson = (modelValue, viewValue) => {
                globalValue = modelValue
                //console.warn('p3x-validate-json p3xIsJson', 'modelValue', modelValue, 'viewValue', viewValue, 'required', required)
                if (!required) {
                    setValidate(true)
                    return modelValue
                }
                try {
                    JSON.parse(modelValue)
                    setValidate(true)
                    return modelValue
                } catch (e) {
                    setValidate(false)
                    return false
                }
            };
        }
    };
});
