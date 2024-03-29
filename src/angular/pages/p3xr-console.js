let actionHistoryPosition = -1

const htmlEncode = global.htmlEncode;

//localStorage.setItem('console-history', '[]')

p3xr.ng.component('p3xrConsole', {
    template: require('./p3xr-console.html'),
    bindings: {
        type: '@',
    },
    controller: function (p3xrCommon, p3xrSocket, $state, $rootScope, p3xrRedisParser, $mdDialog, $timeout, $scope) {
        // .p3xr-layout-footer-container
        // .p3xr-layout-header-container
        // #p3xr-console-header
        // #p3xr-console-input
        // $window.height()

        const getActionHistory = () => {
            return JSON.parse(localStorage.getItem('console-history') || "[]");
        }

        let $container
        let $header;
        let $footer;
        let $consoleHeader
        let $input
        let $output
        let scrollers


        let index = 0
        const $outputAppend = (message) => {
            // write, so it only keep the last 1000 lines by p3xr-console-content-output-item class
            $output.append(`<span data-index="${index++}" class="p3xr-console-content-output-item">${message}<br/></span>`)
            let items = $output.find('.p3xr-console-content-output-item');
            const max = 256
            if (items.length > max) {
                items.slice(0, items.length - max).remove(); // Remove the oldest items exceeding 1000 lines
            }
        }

        if (!$rootScope.hasConnected()) {
            $state.go('main')
        }

        const debounce = require('lodash/debounce')

        this.dragStart = () => {
            //console.warn('dragStart')
            $scope.$emit('p3xr-quick-console', {
                start: true,
            })
        }

        this.dragEnd = () => {
            //console.warn('dragEnd')
            $scope.$emit('p3xr-quick-console', {
                start: false,
            })
        }

        this.closeConsole = () => {
            $scope.$emit('p3xr-quick-console-quit')
        }

        const rawResize = () => {
            let minus = 0
            let $components
            //if ($rootScope.isElectron) {
            //    $components = [$footer, $consoleHeader]
            //} else {
            $components = [$header, $footer, $consoleHeader]                 
            //}
            for (let item of $components) {
                minus += item.outerHeight()
            }
            const windowHeight = $window.height()
            //console.log(windowHeight, minus)

            let adjustments
            if (this.type === 'quick') {
                adjustments = 105
            } else {
                adjustments = 70
            }

            const outputHeight = Math.max(windowHeight - minus - adjustments, 0)
            $container.height(outputHeight)
            $container.css('max-height', `${outputHeight}px`)
            console.log('outputHeight', outputHeight)

        }

        const resize = debounce(rawResize, p3xr.settings.debounce)

        /*
        let resizeObserver = new ResizeObserver(entries => {
            console.log('ResizeObserver', entries)
            rawResize()
        })
         */


        /*
        let check = 0
        this.$doCheck = () => {
            if (check < 10) {
                check++
//                console.log('resize for tree')
                rawResize()
//                $rootScope.$broadcast('p3x-resize')
            }
        }
         */

        const onPubSubMessage = (data) => {
            //console.warn('pub-sub', data)
            if (p3xr.state.monitor === false) {
                return
            }
            let message = htmlEncode(String(data.message))
            $outputAppend(`<strong>PubSub channel:</strong> ${data.channel}<br/><pre>${message}</pre>`)
            scrollers.scrollTop = scrollers.scrollHeight;
        }

        this.$onInit = () => {

            $container = $('#p3xr-console-content')
            $header = $('#p3xr-layout-header-container')
            $footer = $('#p3xr-layout-footer-container')
            $consoleHeader = $('#p3xr-console-header')
            $output = $('#p3xr-console-content-output')

            scrollers = $container[0]

            $window.on('resize', resize)
            resize()


            p3xrSocket.ioClient.on('pubsub-message', onPubSubMessage)


            setTimeout(() => {
                $input = $('#p3xr-console-input')
                $input.on('keydown', this.action)
                /*
                md-colors="{'border-color': $ctrl.inputBorderColor()}" ng-style="{ 'background': $ctrl.inputBackground(), 'color': $ctrl.inputColor()}"


                this.inputBackground = () => {
                    return p3xrTheme.isDark() ? 'rgba(64, 64, 64, 1)' : 'white'
                }

                this.inputBorderColor = () => {
                    return p3xrTheme.isDark() ? 'primary-hue-1' : 'primary-hue-1'
                }

                this.inputColor = () => {
                    return p3xrTheme.isDark() ? 'white' : 'black'
                }

                 */

                this.setTheme()

                this.clearConsole()
            })
        }

        this.setTheme = () => {
            const css = {
                borderColor: p3xrCommon.inputBorderColor(),
                backgroundColor: p3xrCommon.inputBackground(),
                color: p3xrCommon.inputColor(),
            }
            //console.warn('dark', p3xrTheme.isDark(), css)
            $input.css(css)
        }

        $scope.$on('p3xr-theme-switched', () => {
            this.setTheme()
        })

        this.$postLink = () => {
            rawResize()
        }

        this.$onDestroy = function () {
            $window.off('resize', resize)
            p3xrSocket.ioClient.removeListener('pubsub-message', onPubSubMessage)
        };


        //this.inputValue = ''

        this.actionEnter = async (inputValue) => {

            var $acElement = angular.element(document.getElementById('p3xr-console-autocomplete'));
            var acCtrl = $acElement.controller('mdAutocomplete');
            acCtrl.hidden = true;

            let response;
            const enter = String(inputValue).trim()

            if (enter === '') {
                return;
            }
            try {
                response = await p3xrSocket.request({
                    action: 'console',
                    payload: {
                        command: enter
                    }
                })
                //console.warn(typeof response.result, response.result, response.generatedCommand)

                const result = htmlEncode(String(p3xrRedisParser.console.parse(response.result)))
                //console.log(result)
                $outputAppend(`${enter}<br/><pre>${result}</pre>`)
                if (response.hasOwnProperty('database')) {
                    $rootScope.p3xr.state.currentDatabase = response.database
                    $rootScope.p3xr.state.redisChanged = true
                }
                $scope.searchText = ''

                $scope.$digest()
            } catch (e) {
                console.error(e)
                $outputAppend(`${enter}<br/><pre>${p3xr.strings.code[e.message] || e.message}</pre>`)

            } finally {
                let history
                if (response !== undefined) {
                     history = response.generatedCommand
                 } else {
                     history = enter
                }
                let actionHistory = getActionHistory()
                const actionHistoryIndexOf = actionHistory.indexOf(history)
                if (actionHistoryIndexOf > -1) {
                    actionHistory.splice(actionHistoryIndexOf, 1)
                }
                actionHistory.unshift(history)

                //console.log('actionHistory', actionHistory)

                if (actionHistory.length > 20) {
                    actionHistory = actionHistory.slice(0, 20)
                }

                localStorage.setItem('console-history', JSON.stringify(actionHistory))

                actionHistoryPosition = -1

                // //console.log(scrollers.scrollHeight, scrollers.scrollTop, scrollers.height)
                scrollers.scrollTop = scrollers.scrollHeight;
                $output.scrollTop($output.prop("scrollHeight"));
                // //$input.focus()

                if (this.type === 'quick') {
                    $rootScope.$broadcast('p3xr-refresh');
                }
            }

        }

        this.action = ($event) => {

            switch ($event.keyCode) {

                // keydown 40
                case 40: {
                    $event.preventDefault()
                    $event.stopPropagation()

                    const actionHistory = getActionHistory()

                    if (actionHistory.length < 1) {
                        return;
                    }
                    if (actionHistoryPosition === -1) {
                        actionHistoryPosition = actionHistory.length
                    }
                    actionHistoryPosition--
                    if (actionHistoryPosition < 0) {
                        actionHistoryPosition = actionHistory.length - 1
                    }
                    $scope.searchText = actionHistory[actionHistoryPosition]
                    break;

                }

                // keyup 38
                case 38: {
                    $event.preventDefault()
                    $event.stopPropagation()

                    const actionHistory = getActionHistory()
                    if (actionHistory.length < 1) {
                        return;
                    }
                    actionHistoryPosition++
                    if (actionHistoryPosition >= actionHistory.length) {
                        actionHistoryPosition = 0
                    }
                    $scope.searchText = actionHistory[actionHistoryPosition]
                    break;

                }

                default:
                    actionHistoryPosition = -1
                    break;
            }
            const log = getActionHistory()
            //console.log('actionHistoryPosition', actionHistoryPosition, 'getActionHistory()', 'log', log, 'log.length', log.length)
        }

        this.clearConsole = () => {
            $output.empty()
            $outputAppend('<strong>' + $rootScope.p3xr.strings.label.welcomeConsole + '</strong>')
            $outputAppend($rootScope.p3xr.strings.label.welcomeConsoleInfo + '<br/>')
            $input.focus()
        }

        this.getMatches = (searchText) => {
            const matches =  p3xr.state.commands.filter(e => e.includes(searchText))
            return matches
        }

        this.commands = (options) => {
            $mdDialog.show({
                controller: function ($scope, $mdDialog) {

                    $scope.ok = function () {
                        $mdDialog.hide();
                    };

                    $scope.$watch(function () {
                        const height = $('#p3xr-console-commands').parent().height();
                        return height;
                    }, (newValue, oldValue) => {
                        $scope.height = newValue;
                    })

                },
                fullscreen: true,
                targetEvent: options.$event,
                template: `
<md-dialog aria-label="{{ $root.p3xr.strings.intention.commands }}" layout-fill>
  <md-toolbar md-theme="{{$root.p3xr.state.themeLayout}}">
      <div class="md-toolbar-tools">
        <md-icon>keyboard</md-icon>
        &nbsp;
        {{ $root.p3xr.strings.intention.commands }}
        <span flex></span>
         <md-button class="md-icon-button" ng-click="ok()" aria-label="{{ $root.p3xr.strings.intention.close }}">
           <md-icon>close</md-icon>
      </md-button>
      </div>
    </md-toolbar>

    <md-dialog-content flex>
      <div id="p3xr-console-commands">
        <iframe seamless="seamless" src="https://redis.io/commands" frameborder="0" style="width: 100%; height: {{ height - 15 }}px;"></iframe>
      </div>
    </md-dialog-content>

    <md-dialog-actions layout="row">
      <span flex></span>
      <md-button ng-click="ok()"  class="md-raised md-primary" aria-label="{{ $root.p3xr.strings.intention.close }}">
        <md-icon>close</md-icon>
        {{ $root.p3xr.strings.intention.close }}
      </md-button>
    </md-dialog-actions>
</md-dialog>
          `,

            });

        }
    }
})

