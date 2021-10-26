module.exports = () => {
    angular.element(document).ready(() => {
        try {
            const bootstrapElement = document.getElementById('p3xr-redis-ui-bootstrap');
            angular.bootstrap(bootstrapElement, ['p3xr-redis-ui']);
        } catch(e) {
            if (e && e.message && e.message.includes('bootstrapped')) {
                location.reload()
            } else {
                console.error(e)
            }
        }
    })
}

