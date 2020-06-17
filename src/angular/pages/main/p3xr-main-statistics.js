p3xr.ng.component('p3xrMainStatistics', {
    template: require('./p3xr-main-statistics.html'),
    controller: function (p3xrCommon, p3xrRedisParser, p3xrSocket, $rootScope, $scope, $timeout, $stateParams) {

        const exclude = ['in', 'run', 'per']
        const include = ['sha1',]
        const replace = {
            'perc': 'percent',
            'sec': 'seconds'
        }

        this.$onInit = () => {


            if (p3xr.state.redisChanged) {
                p3xr.state.redisChanged = false
                $rootScope.$broadcast('p3x-refresh')
            }
        }

        this.hasDatabases = Object.keys($rootScope.p3xr.state.info.keyspaceDatabases).length > 0

        //console.warn(p3xr.state.info)

        this.generateKey = (key) => {
            if (p3xr.strings.title.hasOwnProperty(key)) {
                return p3xr.strings.title[key]
            }
            const keyElem = key.split('_').map((instance, index) => {
                if (replace.hasOwnProperty(instance)) {
                    instance = replace[instance]
                }
                if (include.includes(instance) || (instance.length < 4 && !exclude.includes(instance))) {
                    return instance.toUpperCase()
                } else if (index === 0) {
                    return instance[0].toUpperCase() + instance.substring(1)
                }
                return instance
            })

            return keyElem.join(' ')
        }


        //FIXME disable hacking on the tab
        /*
        $scope.$on('p3x-refresh-statistics-tabs', () => {
            $timeout(() => {
                p3xr.state.info.hack = {
                    hack: 'hacking'
                }
                this.hasDatabases = Object.keys($rootScope.p3xr.state.info.keyspaceDatabases).length > 0
                $timeout(() => {
                    delete p3xr.state.info.hack;
                    $rootScope.$digest();
                })
            })
        })
         */
    }
})

