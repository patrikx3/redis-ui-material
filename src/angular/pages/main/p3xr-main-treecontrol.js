p3xr.ng.component('p3xrMainTree', {
    template: `

    
          <treecontrol ng-if="$ctrl.keysTree.length > 0" class="{{ $ctrl.getTreeTheme() }} p3xr-main-tree"
                         tree-model="$ctrl.keysTree" options="$ctrl.keysTreeOptions"
                         on-selection="$ctrl.selectTreeNode(node, selected, $parentNode, $index, $first, $middle, $last, $odd, $even, $path)"  on-node-toggle="$ctrl.showToggle(node, expanded, $parentNode, $index, $first, $middle, $last, $odd, $even, $path)">

                <label class="p3xr-main-tree-node" ng-mouseover="node.show = true" ng-mouseleave="node.show = false" title="{{ $ctrl.extractNodeTooltip(node) }}">
                
                    <!-- {{ node.redisType }} -->
                    <span ng-switch="" on="node.redisType">
                         <i ng-switch-when="hash" class="fas fa-hashtag" aria-hidden="true"></i>
                         <i ng-switch-when="list" class="fas fa-list" aria-hidden="true"></i>
                         <i ng-switch-when="set" class="fas fa-table"" aria-hidden="true"></i>
                         <i ng-switch-when="string" class="fas fa-chess-board" aria-hidden="true"></i>
                         <i ng-switch-when="zset" class="fas fa-chart-bar" aria-hidden="true"></i>                      
                     </span>
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
    controller: function(p3xrCommon, p3xrRedisParser, p3xrSocket, $rootScope, $timeout,  $state) {

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
                }
                return keysTreeRendered
            }
        })

        let expandedNodes = []
        Object.defineProperty(this, 'expandedNodes', {
            get: () => {
                console.warn(expandedNodes)
                return expandedNodes
            },
            set: (value) =>  {
                console.warn(expandedNodes)
                expandedNodes = value
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
            multiSelection: false,
            /*
             injectClasses: {
              ul: "a1",
              li: "a2",
              liSelected: "a7",
              iExpanded: "a3",
              iCollapsed: "a4",
              iLeaf: "a5",
              label: "a6",
              labelSelected: "a8"
            }
             */
        };

        this.selectTreeNode = function(node, selected, $parentNode, $index, $first, $middle, $last, $odd, $even, $path)  {
           // console.warn('selectTreeNode', arguments)
            $state.go('main.key', {
                key: node.key
            })
        }


        this.showToggle = function(node, expanded, $parentNode, $index, $first, $middle, $last, $odd, $even, $path)  {
          //  console.warn('showToggle', arguments, $path())
            /*
            p3xrCommon.toast({
                message: 'key ' + node.key
            })
            */
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

        this.extractNodeTooltip = (node) => {
            if (node.type !== 'folder') {
                return p3xr.ui.htmlEncode(node.redisType + ' - ' + node.key)
            }
            return p3xr.ui.htmlEncode(node.key)
        }

    }
})

