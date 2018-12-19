let actionHistory = []
let actionHistoryPosition = -1

p3xr.ng.component('p3xrConsole', {
    template: require('./p3xr-console.html'),
    controller: function(p3xrCommon, p3xrSocket, $state, $rootScope, p3xrRedisParser, $mdDialog, $timeout) {
        // .p3xr-layout-footer-container
        // .p3xr-layout-header-container
        // #p3xr-console-header
        // #p3xr-console-input
        // $window.height()

        const redisCommands = require('redis-commands');

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
            $header = $('#p3xr-layout-header-container')
            $footer = $('#p3xr-layout-footer-container')
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

            let response;
            const enter = String(this.inputValue).trim()
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

                const result = p3xrRedisParser.console.parse(response.result)
                $output.append(`<pre>${result}</pre>`)
                if (response.hasOwnProperty('database')) {
                    $rootScope.p3xr.state.currentDatabase = response.database
                    $rootScope.p3xr.state.redisChanged = true
                }
            } catch(e) {
                $output.append(`<pre>${e.message}</pre>`)

            } finally {
                let history
                if (response !== undefined) {
                    history = response.generatedCommand
                } else {
                    history = enter
                }
                const actionHistoryIndexOf = actionHistory.indexOf(history)
                if (actionHistoryIndexOf > -1) {
                    actionHistory.splice(actionHistoryIndexOf, 1)
                }
                actionHistory.push(history)
                /*
                if (actionHistory.length > 20) {
                    actionHistory = actionHistory.slice(0, 20)
                }
                */
                actionHistoryPosition = -1

                //console.log(scrollers.scrollHeight, scrollers.scrollTop, scrollers.height)
                scrollers.scrollTop = scrollers.scrollHeight;
                //$output.scrollTop($output.prop("scrollHeight"));
                $input.focus()
            }

        }

        let lastTabInput = undefined
        let lastTabInputIndex = -1  ;
        let autoComplete = [];
        let wasLastTab = false
        this.action =  ($event) => {
            //console.warn($event.keyCode)
            if ($event.keyCode !== 9 && event.shiftKey !== true) {
                //console.warn('clear settings')
                lastTabInput = undefined;
                lastTabInputIndex = -1;
                autoComplete = [];
                wasLastTab = false;
            }
            switch($event.keyCode) {
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
                        actionHistoryPosition = actionHistory.length -1
                    }
                    this.inputValue = actionHistory[actionHistoryPosition]
                  break;

                // keydown 40
                case 40:
                    if (actionHistory.length < 1) {
                        return;
                    }
                    actionHistoryPosition++
                    if (actionHistoryPosition >= actionHistory.length ) {
                    } else {
                        actionHistoryPosition = 0
                    }
                    this.inputValue = actionHistory[actionHistoryPosition]
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
                            autoComplete = redisCommands.list
                        } else {
                            autoComplete = redisCommands.list.filter(filter => filter.startsWith(lastTabInput))
                        }
                    }

                    //console.warn('before event.keyCode, event.shiftKey', event.keyCode, event.shiftKey, lastTabInputIndex)
                    if (event.shiftKey === true) {
                        lastTabInputIndex--;
                    } else {
                        lastTabInputIndex++;
                    }
                    //console.warn('middle event.keyCode, event.shiftKey', event.keyCode, event.shiftKey, lastTabInputIndex)
                    if (lastTabInputIndex >= autoComplete.length ) {
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

        this.clearConsole = () => {
            $output.empty()
            $output.append('<div class="p3xr-console-content-output-item"><strong>' + $rootScope.p3xr.strings.label.welcomeConsole + '</strong></div>')
            $output.append('<div class="p3xr-console-content-output-item">' + $rootScope.p3xr.strings.label.welcomeConsoleInfo + '</div>')
            $output.append('<div class="p3xr-console-content-output-item">' + $rootScope.p3xr.strings.label.welcomeConsoleInfo2 + '</div>')
            $input.focus()
        }

        this.commands = () => {
            $mdDialog.show({
                controller: function ($scope, $mdDialog ) {

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

