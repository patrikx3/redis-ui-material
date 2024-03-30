p3xr.ng.component('p3xrMain', {
    template: require('./p3xr-main.html'),
    controller: function ($cookies, p3xrSocket, p3xrCommon, p3xrRedisParser, $rootScope, $state, $timeout, $scope, $mdMedia, $mdSidenav) {


        if (p3xr.state.connections.list.length > 0 && p3xr.state.connection === undefined) {
            $state.go('settings')
            return
        }
        
        $scope.$watch('$root.p3xr.state.connection', (newVal, oldVal) => {
            if (!newVal) {
                $state.go('settings')
            }
        })
        
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
        $scope.$watch(function () {
            return $mdMedia('xs');
        }, function (isScreenSizeIsSmall) {
            if (!isScreenSizeIsSmall && screenSizeIsSmall === true) {
                if ($timeoutResize !== undefined) {
                    $timeout.cancel($timeoutResize)
                }
                $timeoutResize = $timeout(resize, 4 * p3xr.settings.debounce)
                //console.warn('aha!')
            }
            screenSizeIsSmall = isScreenSizeIsSmall;
        });

        /*
        const debouncedTabs = debounce(() => {
            $rootScope.$broadcast('p3xr-refresh-statistics-tabs')
        }, p3xr.settings.debounce)
         */

        const rawResize = (options = {}) => {
            //console.log('p3xr-main rawResize')
            //console.time('p3xr-main-resize')

            //console.info('p3xr-main resize')
            /*
            let {redrawTabs} = options
            if (redrawTabs === undefined) {
                redrawTabs = false;
            }
             */
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
            const windowHeight = $window.outerHeight()
            //console.log(windowHeight, minus)

            //const outputPositionMinus = $rootScope.isElectron ? 0 : 10
            const outputPositionMinus = 11
            const outputHeight = Math.max(windowHeight - minus - outputPositionMinus, 100)
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
                $treeControl.css('min-width', resizeMinWidth + 'px')

                const treeControlPosition = p3xr.dom.getPosition($treeControl[0])


                if ($resizer === undefined) {
                    decorateResizer();
                }
                const resizerWidth = 5;
                if ($resizer !== undefined) {
//                    $resizer.removeEventListener('mouseover', resizerMouseover)
//                    $resizer.removeEventListener('mouseout', resizeMouseout )
                    $resizer = document.getElementById('p3xr-main-content-sizer')

                    if ($resizer !== null) {
                        $resizer.addEventListener('mouseover', resizerMouseover)
                        $resizer.addEventListener('mouseout', resizeMouseout)
                        $resizer.style.top = containerPosition.top + 'px'
                        $resizer.style.height = containerPosition.height + 'px'
                        $resizer.style.left = (containerPosition.left + treeControlPosition.width) + 'px'
                        $resizer.style.width = (resizerWidth) + 'px'
                    }

                }

                const $content = $('#p3xr-main-content-container');
                $content.css('top', containerPosition.top + 'px')
                $content.css('height', containerPosition.height + 'px')
                $content.css('left', (containerPosition.left + treeControlPosition.width + resizerWidth) + 'px')
                $content.css('width', (containerPosition.width - treeControlPosition.width - resizerWidth) + 'px')

                $treeControlControls.width(treeControlPosition.width)
            } else {
                destroyResizer()
            }

            /*
            if (redrawTabs) {
                debouncedTabs()
            }
             */
            //console.timeEnd('p3xr-main-resize')
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
                document.documentElement.style.cursor = `ew-resize`
                $body.addClass('p3xr-not-selectable')
            } else if (event.type === 'mouseup') {
                document.documentElement.style.cursor = `auto`
                resizeClicked = false
                $body.removeClass('p3xr-not-selectable')
            }
            if (resizeClicked === false) {
                rawResize({
                    //redrawTabs: true
                });
            }
            event.stopPropagation();
            $scope.$digest();
        }
        const documentMousemove = (event) => {
            if (resizeClicked) {
                const containerPosition = p3xr.dom.getPosition($container[0])
                if (event.clientX < containerPosition.left + resizeMinWidth || event.clientX > window.innerWidth - resizeMinWidth) {
                    // console.warn('not allowed to resize with too small position')
                    document.documentElement.style.cursor = 'not-allowed'
                } else {
                    document.documentElement.style.cursor = 'ew-resize'
                    $resizer.style.left = event.clientX + 'px'
                    resizeLeft = event.clientX;
                    rawResize();
                }
            }
        }
        const decorateResizer = () => {
            $resizer = document.getElementById('p3xr-main-content-sizer');
            if ($resizer === null) {
                $resizer = undefined
                return;
            }
            $resizer.addEventListener('mouseover', resizerMouseover)
            $resizer.addEventListener('mouseout', resizeMouseout)
//            $resizer.on('click', resizeClick)
            document.addEventListener("mousemove", documentMousemove);
            document.addEventListener("mousedown", resizeClick);
            document.addEventListener("mouseup", resizeClick);
//            document.addEventListener("click", documentClick);
        }

        $scope.$on('p3xr-main-resizer', (event, opts) => {
            console.info('p3xr-main-resizer dragging:', opts.drag)
            if (opts.drag === true) {
                document.addEventListener("mousemove", documentMousemove);
                document.addEventListener("mousedown", resizeClick);
                document.addEventListener("mouseup", resizeClick);
            } else {
                document.removeEventListener("mousemove", documentMousemove);
                document.removeEventListener("mousedown", resizeClick);
                document.removeEventListener("mouseup", resizeClick);
            }
        })

        const destroyResizer = () => {
            if ($resizer !== undefined && $resizer !== null) {
                $resizer.removeEventListener('mouseover', resizerMouseover)
                $resizer.removeEventListener('mouseout', resizeMouseout)
                $resizer = undefined
            }
            document.removeEventListener("mousedown", resizeClick);
            document.removeEventListener("mouseup", resizeClick);
            document.removeEventListener("mousemove", documentMousemove);
        }


        this.resize = debounce(rawResize, p3xr.settings.debounce)
        this.resizeRaw = rawResize

        /*
        this.$doCheck = () => {
            console.log('do check')
            rawResize()
        }
         */



        this.$onInit = () => {
            require('../../core/node-inview-recursive').recursive({
                nodes: $rootScope.keysTreeRendered,
            })

            $container = $('#p3xr-main-content')
            $header = $('#p3xr-layout-header-container')
            $footer = $('#p3xr-layout-footer-container')
            $consoleHeader = $('#p3xr-main-header')
            scrollers = $container[0]

            rawResize()

            $window.on('resize', rawResize)


            if ($state.current.url === '/main') {
                $state.go('main.statistics')
            }

            if (p3xr.state.redisChanged) {
                p3xr.state.redisChanged = false;
                //console.warn('p3xr', p3xr)
                if (p3xr.state.connection) {
                    this.refresh()
                }
            }
            if (p3xr.state.connections.list.length === 0 && p3xr.state.connection === undefined) {
                setTimeout(() => {
                    rawResize()
                }, 250)
            }
        }


        this.$onDestroy = function () {
            $window.off('resize', rawResize)
            destroyResizer();
        };

        $rootScope.p3xr.state.page = 1;

        let selectedDatabase = 0
        let currentDatabase
        Object.defineProperty(this, 'currentDatabase', {
            get: () => {
                let currentDatabase = p3xr.state.currentDatabase
                if (currentDatabase === undefined) {
                    currentDatabase = $cookies.get(p3xr.settings.connection.getCookieNameCurrentDatabase(p3xr.state.connection.id))
                }
                if (currentDatabase === undefined) {
                    currentDatabase = 0;
                }
                return currentDatabase;
            },
            set: async (value) => {
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
                    } catch (e) {
                        p3xrCommon.generalHandleError(e)
                    }
                }

                $cookies.put(p3xr.settings.connection.getCookieNameCurrentDatabase(p3xr.state.connection.id), String(value), {
                    expires: p3xr.settings.cookieExpiry,
                })
            }
        })

        this.selectDatabase = async (selectDbIndex) => {

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
            } catch (e) {
                p3xrCommon.generalHandleError(e)
            }
        }


        this.save = async () => {
            try {
                const response = await p3xrSocket.request({
                    action: 'save',

                })
                $rootScope.p3xr.state.info = p3xrRedisParser.info(response.info)
                //$rootScope.p3xr.state.infoObject = response.infoObject
                $rootScope.$digest()
                p3xrCommon.toast({
                    message: p3xr.strings.status.savedRedis
                })
            } catch (e) {
                p3xrCommon.generalHandleError(e)
            }
        }

        this.statistics = async () => {
            try {
                $state.go('main.statistics')
                await this.refresh()
            } catch (e) {
                p3xrCommon.generalHandleError(e)
            }
        }

        this.refresh = async (options = {}) => {

            console.time('refresh')

            let { withoutParent } = options
            if (withoutParent === undefined) {
                withoutParent = false
            }

            let expandedNodes = p3xr.clone($rootScope.expandedNodes);

            try {
                /*
                p3xr.ui.overlay.show({
                    message: p3xr.strings.status.reloadingDataInfo
                })
                 */

                const payload = {}

                if (!$rootScope.p3xr.settings.searchClientSide && typeof ($rootScope.p3xr.state.search) === 'string' && $rootScope.p3xr.state.search.length > 0) {
                    if ($rootScope.p3xr.settings.searchStartsWith) {
                        payload.match = $rootScope.p3xr.state.search + '*';
                    } else {
                        payload.match = '*' + $rootScope.p3xr.state.search + '*';
                    }
                }
//console.warn('match', payload.match, 'search', $rootScope.p3xr.state.search)
                const response = await p3xrSocket.request({
                    action: 'refresh',
                    payload: payload
                })
                p3xr.state.dbsize = response.dbsize
                $rootScope.p3xr.state.redisChanged = true

//                if (keepTree) {
  //                  $timeout(() => {
                        $rootScope.savedExpandedNodes = expandedNodes
//                        p3xrCommon.loadRedisInfoResponse()
//                    })
//                }

                p3xrCommon.loadRedisInfoResponse({
                    response: response
                })

                if (!withoutParent) {
                    $rootScope.$broadcast('p3xr-refresh-key');
                }

            } catch (e) {
                p3xrCommon.generalHandleError(e)
                /*
                $timeout(() => {
                    p3xr.ui.overlay.hide()
                }, p3xr.settings.debounce)
                */

            } finally {
                /*
                p3xr.ui.overlay.hide()
                 */
            }
            console.timeEnd('refresh')
            setTimeout(() => {
                console.log('refresh')
                $rootScope.$digest()
            })

        }

        $scope.$on('p3xr-refresh', () => {
            this.refresh({
                withoutParent: true
            })
            //resize()
        })

        let currentElement
        let resizeObserver = new ResizeObserver(entries => {
            if (!resizeClicked) {
                //console.log('ResizeObserver resize', JSON.parse(JSON.stringify(entries)))
                window.requestAnimationFrame(() => {
                    if (!Array.isArray(entries) || !entries.length) {
                      return;
                    }
                    rawResize()
                });
            }
        })
        const watchResize = async(newVal, oldVal) => {
            if (currentElement) {
                resizeObserver.unobserve(currentElement)
            }
            if (p3xr.state.connection === undefined) {
                console.log('no connection for resizing')
                return
            }
            if ($mdMedia('xs')) {
                rawResize()
                return
            }
            let elem = null
            while (elem === null ) {
                elem = document.getElementById('p3xr-main-treecontrol-controls-container')
                console.info('waiting for observing tree control controls')
                await new Promise(resolve => setTimeout(() => {
                    resolve()
                }))
            }
            console.info('found observing tree control controls')
//            console.log('elem', elem)
            currentElement = elem
            resizeObserver.observe(currentElement)
//            console.log('watching width')
        }
        $scope.$watch(() => {
            return ($mdMedia('xs') ? 'true' : 'false') + '-' + (p3xr.state.connection ? 'true' : 'false')
        }, watchResize)

        $scope.$on('$destroy', () => {
            resizeObserver.disconnect()
        })



        this.addKey = (options) => {
            const {event, node} = options
            // event.preventDefault()
            event.stopPropagation();

            $rootScope.$broadcast('p3xr-key-new', {
                event: event,
                node: node,
            });


        }

        const $document = $(document)
        this.sidenavWidth = Math.min($document.width() - 100, 600)

        this.quickConsole = () => {
            $mdSidenav('quickConsoleSidenav').open()
        }


        this.startResizingFlag = false
        $scope.$on('p3xr-quick-console', (event, data) => {
            //console.warn('p3xr-quick-console', event, data)
            this.startResizingFlag = data.start
        })

        $scope.$on('p3xr-quick-console-quit', () => {
            $mdSidenav('quickConsoleSidenav').close()
        })

        this.startResizing = (event) => {
            if (!this.startResizingFlag) {
                return
            }
            const startX = event.clientX;
            const startWidth = this.sidenavWidth;



             const handleResizing = (event) => {
                const deltaX = event.clientX - startX;
                document.body.style.cursor = 'ew-resize'
                const sideNavWidth = Math.min(startWidth - deltaX, window.innerWidth - 250); 
                this.sidenavWidth = sideNavWidth
                $scope.$apply(); // Update AngularJS bindings    
            }

            const endResizing = () => {
                document.body.style.cursor = 'default'
                $document.off('mousemove', handleResizing);
                $document.off('mouseup', endResizing);
            }

            $document.on('mousemove', handleResizing);
            $document.on('mouseup', endResizing);

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
