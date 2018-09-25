p3xr.ng.component('p3xrMainKeyZset', {
    template: require('./p3xr-main-key-zset.html'),
    bindings: {
        p3xrValue: '=',
        p3xKey: '<',
        p3xrSortedCore: '<'
    },
    controller: function() {
        this.$onInit = () => {
            console.log(this)
        }
    }
})

