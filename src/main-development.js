global.p3xrDevMode = true
console.log('-------------------------------------')
console.log('           development mode          ')
console.log('-------------------------------------')
if (module.hot) {
    module.hot.accept()
}
require('./main')





