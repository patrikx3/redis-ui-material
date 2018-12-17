p3xr.ng.component('p3xrMain', {
    template: require('./p3xr-main.html'),
    controller: function($cookies, p3xrSocket, p3xrCommon, p3xrRedisParser, $rootScope, $state, $timeout, $scope, $mdMedia) {


        let $container
        let $header;
        let $footer;
        let $consoleHeader
        let scrollers
        let $resizer
        let resizerMouseoverOn = false;
        let resizeClicked = false;
        let resizeLeft = undefined

        Object.defineProperty($scope, 'resizerColor', {
            get: () => {
                if (resizeClicked || resizerMouseoverOn) {
                    return 'accent-400';
                }
                return 'accent'
            },
            set: (val) => {
                // unused
            }
        })

        const resizeMinWidth = p3xr.settings.resizeMinWidth;

        const debounce = require('lodash/debounce')

        let screenSizeIsSmall = false
        let $timeoutResize
        $scope.$watch(function() { return $mdMedia('xs'); }, function(isScreenSizeIsSmall) {
            if (!isScreenSizeIsSmall && screenSizeIsSmall === true) {
                if ($timeoutResize !== undefined) {
                    $timeout.cancel($timeoutResize)
                }
                $timeoutResize = $timeout(resize, 4 * p3xr.settings.debounce)
                //console.warn('aha!')
            }
            screenSizeIsSmall = isScreenSizeIsSmall;
        });

        const rawResize = (options) => {
            //console.warn('who is resizing non stop')
            let minus = 0
            for(let item of [$header, $footer, $consoleHeader]) {
                minus += item.outerHeight()
            }
            const windowHeight = $window.outerHeight()
            //console.log(windowHeight, minus)

            const outputPositionMinus = 10
            const outputHeight = Math.max(windowHeight - minus- outputPositionMinus, 100)
            $container.height(outputHeight)
            $container.css('max-height', `${outputHeight}px`)

            const containerPosition = p3xr.dom.getPosition($container[0])

            const $treeControl = $('#p3xr-main-treecontrol-container')
            if ($treeControl) {
                const $treeControlControls = $('#p3xr-main-treecontrol-controls-container')
                const treeControlControlsPosition = p3xr.dom.getPosition($treeControlControls[0])

                $treeControl.css('top', (containerPosition.top + treeControlControlsPosition.height) + 'px')
                $treeControl.css('left', containerPosition.left + 'px');
                $treeControl.css('height', (containerPosition.height - treeControlControlsPosition.height) + 'px')
                $treeControl.css('max-height', containerPosition.height + 'px')

                if (resizeLeft !== undefined) {
                    $treeControl.css('width', (resizeLeft - containerPosition.left) + 'px')
                } else {
                    $treeControl.css('width', resizeMinWidth + 'px')
                }
                $treeControl.css('min-width', resizeMinWidth +'px')

                const treeControlPosition = p3xr.dom.getPosition($treeControl[0])

                if ($resizer === undefined) {
                    decorateResizer();
                }
                const resizerWidth = 10;
                $resizer.css('top', containerPosition.top + 'px')
                $resizer.css('height', containerPosition.height + 'px')
                $resizer.css('left', (containerPosition.left +  treeControlPosition.width) + 'px')
                $resizer.css('width', (resizerWidth) + 'px')


                const $content = $('#p3xr-main-content-container');
                $content.css('top', containerPosition.top + 'px')
                $content.css('height', containerPosition.height + 'px')
                $content.css('left', (containerPosition.left +  treeControlPosition.width + resizerWidth ) + 'px')
                $content.css('width', (containerPosition.width - treeControlPosition.width- resizerWidth ) + 'px')

                $treeControlControls.width(treeControlPosition.width)
            } else {
                destroyResizer()
            }
        };

        const resize = debounce(() => {
            resizeLeft = undefined
            rawResize()
        }, p3xr.settings.debounce)

        const resizerMouseover = () => {
            resizerMouseoverOn = true;
            $scope.$digest();
        }
        const resizeMouseout = () => {
            resizerMouseoverOn = false;
            $scope.$digest();
        }
        const resizeClick = (event) => {
            if (event.type === 'mousedown' && event.target.id !== 'p3xr-main-content-sizer') {
                return
            }
            if (event.type === 'mousedown') {
                resizeClicked = true
            } else if (event.type === 'mouseup') {
                resizeClicked = false
            }
            if (resizeClicked === false) {
                rawResize();
            }
            event.stopPropagation();
            $scope.$digest();
        }
        const documentMousemove = (event) => {
            if (resizeClicked) {
                const containerPosition = p3xr.dom.getPosition($container[0])
                if (event.clientX < containerPosition.left + resizeMinWidth || event.clientX > window.innerWidth - resizeMinWidth ) {
                    console.warn('not allowed to resize with too small position')
                } else {
                    $resizer.css('left', event.clientX + 'px')
                    resizeLeft = event.clientX;
                    rawResize();
                }
            }
        }
        const documentClick = (event) => {
            if (resizeClicked) {
                resizeClick(event);
            }
        }
        const decorateResizer = () => {
            $resizer = $('#p3xr-main-content-sizer');
            $resizer.on('mouseover', resizerMouseover)
            $resizer.on('mouseout', resizeMouseout )
//            $resizer.on('click', resizeClick)
            document.addEventListener("mousemove", documentMousemove);
            document.addEventListener("mousedown", resizeClick);
            document.addEventListener("mouseup", resizeClick);
//            document.addEventListener("click", documentClick);
        }


        const destroyResizer = () => {
            if ($resizer !== undefined) {
                $resizer.off('mouseover', resizerMouseover)
                $resizer.off('mouseout', resizeMouseout )
                document.removeEventListener("mousedown", resizeClick);
                document.removeEventListener("mouseup", resizeClick);
                document.removeEventListener("mousemove", documentMousemove);
                $resizer = undefined
            }
        }


        this.resize =  debounce(rawResize, p3xr.settings.debounce)

        this.$onInit = () => {
            $container = $('#p3xr-main-content')
            $header = $('#p3xr-layout-header-container')
            $footer = $('#p3xr-layout-footer-container')
            $consoleHeader = $('#p3xr-main-header')
            scrollers = $container[0]

            resize()

            $window.on('resize', resize)

            if ($state.current.url === '/main') {
                $state.go('main.statistics')
            }

            if (p3xr.state.redisChanged) {
                p3xr.state.redisChanged = false;
                this.refresh()
            }
        }

        this.$onDestroy = function () {
            $window.off('resize', resize)
            destroyResizer();
        };

        $rootScope.p3xr.state.page = 1;

        let selectedDatabase = 0
        let currentDatabase
        Object.defineProperty(this, 'currentDatabase', {
            get: () => {
                let currentDatabase =  p3xr.state.currentDatabase
                if (currentDatabase === undefined) {
                    currentDatabase = $cookies.get(p3xr.settings.connection.getCookieNameCurrentDatabase(p3xr.state.connection.id))
                }
                if (currentDatabase === undefined) {
                    currentDatabase = 0;
                }
                return currentDatabase;
            },
            set: async(value) => {
                currentDatabase = value
                if (selectedDatabase !== currentDatabase) {
                    selectedDatabase = value

                    try {
                        const response = await p3xrSocket.request({
                            action: 'console',
                            payload: {
                                command: `select ${selectedDatabase}`
                            }
                        })
                    } catch(e) {
                        p3xrCommon.generalHandleError(e)
                    }
                }

                $cookies.put(p3xr.settings.connection.getCookieNameCurrentDatabase(p3xr.state.connection.id), String(value), {
                    expires: p3xr.settings.cookieExpiry,
                })
            }
        })

        this.selectDatabase = async(selectDbIndex) => {

            this.currentDatabase = selectDbIndex
            try {
                $rootScope.p3xr.state.page = 1;
                const response = await p3xrSocket.request({
                    action: 'console',
                    payload: {
                        command: `select ${selectDbIndex}`
                    }
                })
                p3xrCommon.toast({
                    message: p3xr.strings.status.dbChanged({
                        db: selectDbIndex
                    })
                })
                await this.statistics()

            } catch(e) {
                p3xrCommon.generalHandleError(e)
            } finally {
                this.resize()
            }
        }


        this.save = async () => {
            try {
                const response = await p3xrSocket.request({
                    action: 'save',

                })
                $rootScope.p3xr.state.info = p3xrRedisParser.info(response.info)
                $rootScope.$digest()
                p3xrCommon.toast({
                    message: p3xr.strings.status.savedRedis
                })
            } catch(e) {
                p3xrCommon.generalHandleError(e)
            }
        }

        this.statistics = async () => {
            try {
                $state.go('main.statistics')
                await this.refresh()
            } catch(e) {
                p3xrCommon.generalHandleError(e)
            }
        }

        this.refresh = async (options = {}) => {
            let { withoutParent } = options
            if (withoutParent === undefined) {
                withoutParent = false
            }

            try {
                p3xr.ui.overlay.show({
                    message: p3xr.strings.status.reloadingDataInfo
                })
                const payload = {}

                if (!$rootScope.p3xr.settings.searchClientSide && typeof ($rootScope.p3xr.state.search) === 'string' && $rootScope.p3xr.state.search.length > 0) {
                    if ($rootScope.p3xr.settings.searchStartsWith) {
                        payload.match = $rootScope.p3xr.state.search + '*';
                    } else {
                        payload.match = '*' + $rootScope.p3xr.state.search + '*';
                    }
                }

                const response = await p3xrSocket.request({
                    action: 'refresh',
                    payload: payload
                })
                p3xrCommon.loadRedisInfoResponse({
                    response: response
                })

                if (!withoutParent) {
                    $rootScope.$broadcast('p3x-refresh');
                }

            } catch(e) {
                p3xrCommon.generalHandleError(e)
            } finally {
                p3xr.ui.overlay.hide()
                /*
                $timeout(() => {
                    p3xr.ui.overlay.hide()
                }, p3xr.settings.debounce)
                */
            }
        }

        $scope.$on('p3x-refresh', () => {
            this.refresh({
                withoutParent: true
            })
        })


        this.addKey = (options) => {
            const { event, node} = options
            // event.preventDefault()
            event.stopPropagation();

            $rootScope.$broadcast('p3xr-key-new', {
                event: event,
                node: node,
            });


        }

        /*
 redis version = server - redis_version
 keys =  keyspace - dbIndex -> keys
 memory used -> memory - used_memory_human
 uptime -> server - uptime_in_days
 last save - save
 <?php
         if (isset($info[$i]['Persistence']['rdb_last_save_time'])) {
            if((time() - $info[$i]['Persistence']['rdb_last_save_time'] ) >= 0) {
               echo format_time(time() - $info[$i]['Persistence']['rdb_last_save_time']) . " ago";
            } else {
               echo format_time(-(time() - $info[$i]['Persistence']['rdb_last_save_time'])) . "in the future";
            }
         } else {
            echo 'never';
         }
     ?>



          */
    }
})

