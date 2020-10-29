global.p3xrDevMode = true
console.log('-------------------------------------')
console.log('           development mode          ')
console.log('-------------------------------------')
if (module.hot) {
    const mainJs = require.resolve('./main.js')
    const vendorJs = require.resolve('./vendor.js')
    console.info('webpack hot mainJs', mainJs)
    console.info('webpack hot vendorJs', vendorJs)
    module.hot.accept(mainJs, function(module) {
//        console.warn('hot accept', module)
//        console.log(angular)
        location.reload()
        /*
        Object.keys(require.cache).forEach(function(key) {
            if (key.startsWith('./src')) {
                console.info('delete require cache', key)
                delete require.cache[key]
            }
        })
        require('./main-development')
         */
    })
    module.hot.accept(vendorJs, () => {
        location.reload()
    })
}
require('./main')

