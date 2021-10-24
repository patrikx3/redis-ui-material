let actionHistory = []
let actionHistoryPosition = -1

const htmlEncode = global.htmlEncode;

p3xr.ng.component('p3xrConsole', {
    template: require('./p3xr-console.html'),
    controller: function (p3xrCommon, p3xrSocket, $state, $rootScope, p3xrRedisParser, $mdDialog, $timeout, $scope) {
        // .p3xr-layout-footer-container
        // .p3xr-layout-header-container
        // #p3xr-console-header
        // #p3xr-console-input
        // $window.height()

        const redisCommands = p3xr.state.commands

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

            const adjustments = 70

            const outputHeight = Math.max(windowHeight - minus - adjustments, 0)
            $container.height(outputHeight)
            $container.css('max-height', `${outputHeight}px`)

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
            $output.append(`<strong>PubSub channel:</strong> ${data.channel}`)
            $output.append(`<pre>${message}</pre><br/>`)
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
                $output.append(`<div class="p3xr-console-content-output-item">${enter}</div>`)
                this.inputValue = ''


                response = await p3xrSocket.request({
                    action: 'console',
                    payload: {
                        command: enter
                    }
                })
                //console.warn(typeof response.result, response.result, response.generatedCommand)

                const result = htmlEncode(String(p3xrRedisParser.console.parse(response.result)))
                //console.log(result)
                $output.append(`<pre>${result}</pre>`)
                if (response.hasOwnProperty('database')) {
                    $rootScope.p3xr.state.currentDatabase = response.database
                    $rootScope.p3xr.state.redisChanged = true
                }
                $scope.searchText = ''

                $scope.$digest()
            } catch (e) {
                console.error(e)
                $output.append(`<pre>${p3xr.strings.code[e.message] || e.message}</pre>`)

            } finally {
                // let history
                // if (response !== undefined) {
                //     history = response.generatedCommand
                // } else {
                //     history = enter
                // }
                // const actionHistoryIndexOf = actionHistory.indexOf(history)
                // if (actionHistoryIndexOf > -1) {
                //     actionHistory.splice(actionHistoryIndexOf, 1)
                // }
                // actionHistory.push(history)
                // /*
                // if (actionHistory.length > 20) {
                //     actionHistory = actionHistory.slice(0, 20)
                // }
                // */
                // actionHistoryPosition = -1
                //
                // //console.log(scrollers.scrollHeight, scrollers.scrollTop, scrollers.height)
                scrollers.scrollTop = scrollers.scrollHeight;
                $output.scrollTop($output.prop("scrollHeight"));
                // //$input.focus()
            }

        }

        let lastTabInput
        let lastTabInputIndex
        let autoComplete
        let wasLastTab
        const clearTabAutocomplete = () => {
            lastTabInput = undefined
            lastTabInputIndex = -1;
            autoComplete = [];
            wasLastTab = false
        }

        const focusInput = () => {
            $timeout(() => {
                const value = $input.val();
                $input.val('').focus().val(value);
            })
        }

        /*
        this.action = ($event) => {
            //console.warn($event.keyCode)
            if ($event.keyCode !== 9 && event.shiftKey !== true) {
                //console.warn('clear settings')
                clearTabAutocomplete()
            }
            switch ($event.keyCode) {
                // enter
                case 13:
                    return this.actionEnter()

                // keyup 38
                case 38:
                    if (actionHistory.length < 1) {
                        return;
                    }
                    if (actionHistoryPosition === -1) {
                        actionHistoryPosition = actionHistory.length
                    }
                    actionHistoryPosition--
                    if (actionHistoryPosition > -1) {
                    } else {
                        actionHistoryPosition = actionHistory.length - 1
                    }
                    this.inputValue = actionHistory[actionHistoryPosition]
                    focusInput()
                    break;

                // keydown 40
                case 40:
                    if (actionHistory.length < 1) {
                        return;
                    }
                    actionHistoryPosition++
                    if (actionHistoryPosition >= actionHistory.length) {
                    } else {
                        actionHistoryPosition = 0
                    }
                    this.inputValue = actionHistory[actionHistoryPosition]
                    focusInput()
                    break;

                case 9:
                    if (this.inputValue === undefined) {
                        this.inputValue = '';
                    }

                    if (!wasLastTab) {
                        const tab = String(this.inputValue).trim()
                        lastTabInput = tab
                        lastTabInputIndex = -1
                        if (lastTabInput === '') {
                            autoComplete = redisCommands
                        } else {
                            autoComplete = redisCommands.filter(filter => filter.startsWith(lastTabInput.toLowerCase()))
                        }
                    }

                    //console.warn('before event.keyCode, event.shiftKey', event.keyCode, event.shiftKey, lastTabInputIndex)
                    if (event.shiftKey === true) {
                        lastTabInputIndex--;
                    } else {
                        lastTabInputIndex++;
                    }
                    //console.warn('middle event.keyCode, event.shiftKey', event.keyCode, event.shiftKey, lastTabInputIndex)
                    if (lastTabInputIndex >= autoComplete.length) {
                        lastTabInputIndex = 0;
                    } else if (lastTabInputIndex < 0) {
                        lastTabInputIndex = autoComplete.length - 1;
                    }
                    //console.warn('after event.keyCode, event.shiftKey', event.keyCode, event.shiftKey, lastTabInputIndex)

                    this.inputValue = autoComplete[lastTabInputIndex]

                    $event.stopPropagation();
                    $event.preventDefault();
                    wasLastTab = true
                    break;
                default:
                    actionHistoryPosition = -1
                    break;
            }
        }
         */


        this.clearConsole = () => {
            $output.empty()
            $output.append('<div class="p3xr-console-content-output-item"><strong>' + $rootScope.p3xr.strings.label.welcomeConsole + '</strong></div>')
            $output.append('<div class="p3xr-console-content-output-item">' + $rootScope.p3xr.strings.label.welcomeConsoleInfo + '</div>')
            $output.append('<div class="p3xr-console-content-output-item">' + $rootScope.p3xr.strings.label.welcomeConsoleInfo2 + '</div>')
            $input.focus()
        }

        this.getMatches = (searchText) => {
            return redisCommands.filter(e => e.includes(searchText))
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

