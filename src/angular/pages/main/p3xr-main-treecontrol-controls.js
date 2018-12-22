p3xr.ng.component('p3xrMainTreecontrolControls', {
    template: require('./p3xr-main-treecontrol-controls.html'),
    bindings: {
        p3xrMainRef: '<'
    },
    controller: function($cookies, $rootScope, p3xrCommon, $timeout, p3xrDialogTreecontrolSettings) {

        this.treeExpandAll = () => {
            try {

                p3xr.ui.overlay.show({
                    message: p3xr.strings.status.treeExpandAll
                })
                let expandedNodes = []
                const recursiveFolders = (node, level = 0) => {
                    if (node.type === 'folder') {
                        expandedNodes.push(node)
                        for(let childNode of node.children) {
                            recursiveFolders(childNode, level++)
                        }
                    }
                }
                for(let node of $rootScope.keysTreeRendered) {
                    recursiveFolders(node)
                }
                $rootScope.expandedNodes = expandedNodes

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

        this.treeCollapseAll = () => {
            $rootScope.expandedNodes = []
        }

        this.page = (options) => {


            const { page } = options
           ///console.log(page )
            switch(page) {
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

        this.onSearchChange = () => {
            $rootScope.p3xr.state.search = this.search
            if ($rootScope.p3xr.settings.searchClientSide) {
                // $rootScope.p3xr.settings.searchClientSide
                // $rootScope.p3xr.settings.searchStartsWith

                $rootScope.p3xr.state.redisChanged = true
            } else {

                this.p3xrMainRef.refresh()
            }

        }
    }
})

