const camelCase = require('lodash/camelCase')
const startCase = require('lodash/startCase')

p3xr.ng.component('p3xrMainStatistics', {
    template: require('./p3xr-main-statistics.html'),
    controller: function(p3xrCommon, p3xrRedisParser, p3xrSocket, $rootScope) {

        this.generateKey = (key) => {

            return startCase(camelCase(key))
        }
    }
})

