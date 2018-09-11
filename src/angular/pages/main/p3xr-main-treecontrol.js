p3xr.ng.component('p3xrMainTree', {
    template: `

    
          <treecontrol ng-if="$ctrl.keysTree.length > 0" class="{{ $ctrl.getTreeTheme() }} p3xr-main-tree"
                         tree-model="$ctrl.keysTree" options="$ctrl.keysTreeOptions"
                         on-selection="$ctrl.selectTreeNode(node)">

                <label class="p3xr-main-tree-node" ng-mouseover="node.show = true" ng-mouseleave="node.show = false">
                    {{node.label}} <span class="p3xr-main-tree-node-count" ng-if="node.type === 'folder'">({{node.childCount}})</span>
                    
                    <span ng-show="node.type === 'folder' && node.show">
                        <span>
                            <md-tooltip>{{ $root.p3xr.strings.confirm.deleteAllKeys({key: node.key}) }}</md-tooltip>
                            <md-icon ng-click="$ctrl.deleteTree({event: $event, node: node})" class="md-warn p3xr-main-treecontrol-folder-delete-icon">close</md-icon>                        
                        </span>
                    </span>
                </label>
            </treecontrol>
    
`,
    bindings: {
        p3xrResize: '&',
    },
    controller: function(p3xrCommon, p3xrRedisParser, p3xrSocket, $rootScope, $timeout) {

        this.$onInit = () => {
            this.p3xrResize()

        }

        let keysTreeRendered
        let keys
        Object.defineProperty(this, 'keysTree', {
            get: () => {
                if (JSON.stringify(keys) !== JSON.stringify(p3xr.state.keys)) {
                    keysTreeRendered =  p3xrRedisParser.keysToTreeControl({
                        keys: p3xr.state.keys
                    })
                    keys = p3xr.state.keys
                    console.warn(keysTreeRendered)
                }
                return keysTreeRendered
            }
        })

        this.getTreeTheme = () => {
            if (p3xr.state.theme.toLowerCase().includes('light'))  {
                return 'tree-classic'
            }
            return 'tree-dark'
        }

        this.keysTreeOptions = {
            nodeChildren: "children",
            dirSelectable: false,
            multiSelection: false
        };

        this.selectTreeNode = (node) => {
            //console.log(node.key)
            p3xrCommon.toast({
                message: 'key ' + node.key
            })
        }

        this.deleteTree = async(options) => {
            try {
                const { event, node} = options
                // event.preventDefault()
                event.stopPropagation();

                await p3xrCommon.confirm({
                    event: event,
                    message: p3xr.strings.confirm.deleteAllKeys({
                        key: node.key
                    })
                })


                const response = await p3xrSocket.request({
                    action: 'del-tree',
                    payload: {
                        key: node.key,
                        redisTreeDivider: p3xr.state.redisTreeDivider
                    }
                })

                $timeout(() => {
                    $rootScope.$apply(() => {
                        $rootScope.p3xr.state.keys = response.keys
                    })
                })

                p3xrCommon.toast({
                    message: p3xr.strings.status.treeDeleted({
                        key: node.key
                    })
                })
            } catch(e) {
                p3xrCommon.generalHandleError(e)
            }
        }

    }
})

