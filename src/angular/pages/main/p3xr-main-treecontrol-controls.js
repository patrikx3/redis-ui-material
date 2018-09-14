
p3xr.ng.component('p3xrMainTreecontrolControls', {
    template: require('./p3xr-main-treecontrol-controls.html'),
    controller: function($cookies, $rootScope, p3xrCommon, $timeout) {

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
                $timeout(() => {
                    p3xr.ui.overlay.hide()
                }, p3xr.settings.debounce)
            }
        }

        this.treeCollapseAll = () => {
            $rootScope.expandedNodes = []
        }
    }
})

