p3xr.ng.factory('p3xrKeyPaging', function ($mdToast, $mdDialog, $mdColors, $rootScope, p3xrRedisParser, $timeout,) {

    return function({ $ctrl, $scope, watch, figurePagingType }) {

        //console.log('$ctrl, $scope, watch, figurePagingType', $ctrl, $scope, watch, figurePagingType)
        const figurePaging = () => {
            switch(figurePagingType) {

                case 'zset':
                    $ctrl.pages = Math.ceil(Object.keys($ctrl.p3xrValue).length / 2 / p3xr.settings.keyPageCount)
                    break;

                default:
                    $ctrl.pages = Math.ceil(Object.keys($ctrl.p3xrValue).length / p3xr.settings.keyPageCount)
                    break;
            }
            $ctrl.page = 1
        }

        this.figurePaging = figurePaging

        if (watch !== false) {
            $scope.$watch('$ctrl.p3xrValue', (n, o) => {
                figurePaging()
            })
        }

        $scope.$watch('$root.p3xr.settings.keyPageCount', () => {
            figurePaging()
        })


        $ctrl.pager = (options) => {
            const {page} = options
            ///console.log(page )
            switch (page) {
                case 'prev':
                    if ($ctrl.page - 1 >= 1) {
                        $ctrl.page = $ctrl.page - 1
                    }
                    break;

                case 'next':
                    if ($ctrl.page + 1 <= $ctrl.pages) {
                        $ctrl.page = $ctrl.page + 1
                    }
                    break;

                case 'last':
                    $ctrl.page = $ctrl.pages
                    break;

                case 'first':
                    $ctrl.page = 1
                    break;

            }
        }

        $ctrl.pageChange = () => {
            if ($ctrl.page < 1) {
                $ctrl.page = 1
            } else if ($ctrl.page > $ctrl.pages) {
                $ctrl.page = $ctrl.pages
            }
        }

    };
})
