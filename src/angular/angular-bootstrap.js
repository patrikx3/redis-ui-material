let bootstrapHtml
module.exports = () => {
    global.p3xr.destroy()

    if (bootstrapHtml === undefined) {
        bootstrapHtml = document.body.innerHTML
    } else {
        document.body.innerHTML = bootstrapHtml
    }

    const exec = () => {
        angular.element(document).ready(() => {
            const bootstrapElement = document.getElementById('p3xr-redis-ui-bootstrap');
            angular.bootstrap(bootstrapElement, ['p3xr-redis-ui']);
        })
    }
    if (document.hasFocus()) {
        exec()
    } else {
        const focus =  () => {
            exec()
            window.removeEventListener('focus', focus)
        }
        window.addEventListener('focus', focus)

    }

}

