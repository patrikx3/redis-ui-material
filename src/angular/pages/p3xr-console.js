p3xr.ng.component('p3xrConsole', {
    template: require('./p3xr-console.html'),
    controller: function(p3xrCommon, p3xrSocket, $state, $rootScope) {
        // .p3xr-layout-footer-container
        // .p3xr-layout-header-container
        // #p3xr-console-header
        // #p3xr-console-input
        // $window.height()

        let $container
        let $header;
        let $footer;
        let $consoleHeader
        let $input
        let $output
        let scrollers

        if (!$rootScope.hasConnected()) {
            $state.go('main')
        }

        const debounce = require('lodash/debounce')

        const resize = debounce(() => {
            let minus = 0
            for(let item of [$header, $footer, $consoleHeader, $input]) {
                minus += item.outerHeight()
            }
            const windowHeight = $window.height()
            //console.log(windowHeight, minus)

            const outputHeight = Math.max(windowHeight - minus - 50, 100)
            $container.height(outputHeight)
            $container.css('max-height', `${outputHeight}px`)

        }, p3xr.settings.debounce)


        this.$onInit = () => {
            $container = $('#p3xr-console-content')
            $header = $('.p3xr-layout-header-container')
            $footer = $('.p3xr-layout-footer-container')
            $consoleHeader = $('#p3xr-console-header')
            $input = $('#p3xr-console-input')
            $output = $('#p3xr-console-content-output')
            $input.focus()

            scrollers = $container[0]

            $window.on('resize', resize)
            resize()
            this.clearConsole()
        }

        this.$onDestroy = function () {
           $window.off('resize', resize)
        };

        this.inputValue = ''

        this.actionEnter = async() => {
            try {
                const enter = String(this.inputValue).trim()
                if (enter === '') {
                    return;
                }
                $output.append(`<div class="p3xr-console-content-output-item">${enter}</div>`)
                this.inputValue = ''

                const response = await p3xrSocket.request({
                    action: 'console',
                    payload: {
                        command: enter
                    }
                })
                // console.warn(typeof response.result, response.result)
                if (typeof response.result === 'object') {
                    let result = ''
                    Object.keys(response.result).forEach(key => {
                        if (result !== '') {
                            result += "\n"
                        }
                        result += response.result[key]
                    })
                    $output.append(`<pre>${result}</pre>`)
                } else {
                    $output.append(`<pre>${response.result}</pre>`)
                }
                if (response.hasOwnProperty('database')) {
                    $rootScope.p3xr.state.currentDatabase = response.database
                }
            } catch(e) {
                $output.append(`<pre>${e.message}</pre>`)

            } finally {
                //console.log(scrollers.scrollHeight, scrollers.scrollTop, scrollers.height)
                scrollers.scrollTop = scrollers.scrollHeight;
                //$output.scrollTop($output.prop("scrollHeight"));
                $input.focus()
            }

        }

        this.action =  ($event) => {
            console.warn($event.keyCode)
            switch($event.keyCode) {
                case 13:
                    return this.actionEnter()
            }
        }

        this.clearConsole = () => {
            $output.empty()
            $output.append('<div class="p3xr-console-content-output-item">' + $rootScope.p3xr.strings.label.welcomeConsole + '</div>')
            $input.focus()
        }
    }
})

