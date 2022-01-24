p3xr.ng.component('p3xrMainTreecontrolControls', {
    template: require('./p3xr-main-treecontrol-controls.html'),
    bindings: {
        p3xrMainRef: '<'
    },
    controller: function ($cookies, $rootScope, p3xrCommon, $timeout, p3xrDialogTreecontrolSettings, $scope) {

        this.treeExpandAll = () => {
            try {

                $rootScope.$broadcast('p3xr-main-treecontrol', false)

                p3xr.ui.overlay.show({
                    message: p3xr.strings.status.treeExpandAll
                })

                let expandedNodes = []
                /*
                require('../../../core/node-inview-recursive').recursive({
                    status: false,
                    nodes: $rootScope.keysTreeRendered,
                    nodeCallback: (opts) => {
                        const { node } = opts
                        if (node.type === 'folder') {
                            expandedNodes.push(node)
                        }
                    }
                })
                 */
                //FIXME use with general recursive solution, as above (just not working, too tired)
                const recursiveFolders = (node, level = 0) => {
                    delete node.$inview
                    if (node.type === 'folder') {
                        expandedNodes.push(node)
                        for (let childNode of node.children) {
                            recursiveFolders(childNode, level++)
                        }
                    }
                }
                for (let node of $rootScope.keysTreeRendered) {
                    recursiveFolders(node)
                }


                $rootScope.expandedNodes = expandedNodes
            } catch (e) {
                p3xrCommon.generalHandleError(e)
            } finally {
                p3xr.ui.overlay.hide()

                $timeout(() => {
                    $rootScope.$broadcast('p3xr-main-treecontrol', true)
                })

            }
        }

        this.treeCollapseAll = () => {
            $rootScope.$broadcast('p3xr-main-treecontrol', false)
            $rootScope.expandedNodes = []
            $timeout(() => {
                $rootScope.$broadcast('p3xr-main-treecontrol', true)
            })
        }

        this.page = (options) => {


            const {page} = options
            ///console.log(page )
            switch (page) {
                case 'prev':
                    if ($rootScope.p3xr.state.page - 1 >= 1) {
                        $rootScope.p3xr.state.page = $rootScope.p3xr.state.page - 1
                    }
                    break;

                case 'next':
                    if ($rootScope.p3xr.state.page + 1 <= $rootScope.p3xr.state.pages) {
                        $rootScope.p3xr.state.page = $rootScope.p3xr.state.page + 1
                    }
                    break;

                case 'last':
                    $rootScope.p3xr.state.page = $rootScope.p3xr.state.pages
                    break;

                case 'first':
                    $rootScope.p3xr.state.page = 1
                    break;

            }
            $timeout(() => {
                $rootScope.$digest()
            })
        }

        this.pageChange = () => {
            if ($rootScope.p3xr.state.page < 1) {
                $rootScope.p3xr.state.page = 1
            } else if ($rootScope.p3xr.state.page > $rootScope.p3xr.state.pages) {
                $rootScope.p3xr.state.page = $rootScope.p3xr.state.pages
            }
        }

        this.openTreeSettingDialog = (opts) => {
            opts.p3xrMainRef = this.p3xrMainRef
            p3xrDialogTreecontrolSettings.show(opts);
            //console.warn($rootScope.p3xr.state.redisTreeDivider)
        }

        this.search = ''

        this.$onInit = () => {
            this.search = $rootScope.p3xr.state.search
        }

        //console.warn($rootScope.p3xr.state.search)
        this.onSearchChange = () => {
//            $rootScope.p3xr.state.search = this.search
            if ($rootScope.p3xr.settings.searchClientSide) {
                // $rootScope.p3xr.settings.searchClientSide
                // $rootScope.p3xr.settings.searchStartsWith

                $rootScope.p3xr.state.redisChanged = true
            } else {

                this.p3xrMainRef.refresh()
            }
            $rootScope.p3xr.state.page = 1;

        }

        this.treeDividerChange = () => {
            $rootScope.p3xr.state.redisChanged = true
//            this.p3xrMainRef.refresh()
            $rootScope.$broadcast('p3xr-refresh');
        }

        /*
        this.dividerSelectStatus = (show) => {
            if (show === true) {
                console.log('dividerSelectStatus show', show)
                const input = $('#p3xr-main-treecontrol-controls-tree-divider-input')
                const offset = input.offset()
                const container = $('.p3xr-main-treecontrol-controls-divider-select-container')
                const top = offset.top + input.height()
                const left = offset.left
                container[0].style.top = `${top}px`
                container[0].style.left = `${left}px`
                console.log(offset, input.height(), container[0].style.top, container[0].style.left, top, left)
            }
        }
         */

    }
})

