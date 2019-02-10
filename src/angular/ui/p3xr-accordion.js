let accordionKey = 0
p3xr.ng.component('p3xrAccordion', {
    template: require('./p3xr-accordion.html'),
    bindings: {
        p3xrTitle: '<',
        p3xrAccordionKey: '@',
    },
    transclude: {
        'actions': '?p3xrAccordionActions',
        'content': 'p3xrAccordionContent',
    },
    controller: function ($transclude, $cookies) {
        this.transcludePresent = function (slot) {
            return $transclude.isSlotFilled(slot);
        };


        this.$onInit = function() {
            //console.log(this.p3xrAccordionKey)
            if (this.p3xrAccordionKey === undefined || this.p3xrAccordionKey === '') {
                this.p3xAccordionKey = ++accordionKey;
            }
            const cookieName = `p3xr-accordion-extended-${this.p3xrAccordionKey}`
            //console.log(cookieName)
            Object.defineProperty(this, 'extended', {
                get: () => {
                    const cookieValue = $cookies.get(cookieName)
                    return cookieValue === undefined ? true : cookieValue === 'true'
                },
                set: (value) => {
                    $cookies.put(cookieName, String(value), {
                        expires: p3xr.settings.cookieExpiry,
                    })
                }
            })
        }
    }
})

