p3xr.ng.factory('p3xrRedisParser', function ($rootScope) {

    return new function () {

        const selfMain = this;

        this.array = (options) => {
            const {line} = options
            let {divider, fieldDivider} = options
            if (divider === undefined) {
                divider = ','
            }
            if (fieldDivider === undefined) {
                fieldDivider = '='
            }
            const rows = line.split(divider)
            const obj = {}
            for (let row of rows) {
                const rowLine = row.split(fieldDivider)
                obj[rowLine[0]] = rowLine[1].trim()
            }
            return obj
        }

        this.info = (str) => {
            const lines = str.split('\n')
            const obj = {}
            let section
            let currentSectionObj
            for (let line of lines) {
                if (line.startsWith('#')) {
                    if (section !== undefined) {
                        obj[section] = currentSectionObj
                    }
                    section = line.substring(1).toLowerCase().trim()
                    currentSectionObj = {}
                } else if (line.length > 2) {
                    const lineArray = line.split(':')
                    currentSectionObj[lineArray[0]] = lineArray[1].includes(',') ? selfMain.array({
                        line: lineArray[1].trim()
                    }) : lineArray[1].trim()
                }
            }
            if (section !== undefined) {
                obj[section] = currentSectionObj
            }

            if (obj.hasOwnProperty('keyspace')) {
                obj.keyspaceDatabases = {}
                Object.keys(obj.keyspace).forEach(key => {
                    key = parseInt(key.substring(2))
                    obj.keyspaceDatabases[key] = true
                })
            }
            return obj
        }


        this.keysToTreeControl = (options) => {
            let {keys} = options;
            let {divider} = options;
            if (divider === undefined) {
                divider = p3xr.settings.redisTreeDivider;
            }
        
            const mainNodes = [];
            const newExpandedNodes = [];
            $rootScope.expandedNodes = [];
        
            const recursiveNodes = (splitKey, level = 0, nodes = mainNodes) => {
                let foundNode = false;
                if (level + 1 < splitKey.length) {
                    for (let node of nodes) {
                        if (node.label === splitKey[level] && node.type === 'folder') {
                            foundNode = node;
                        }
                    }
                }
                if (!foundNode) {
                    const defaultFoundNode = {
                        label: splitKey[level],
                        key: splitKey.slice(0, level + 1).join(divider),
                        children: [],
                        childCount: 0, // Initialize with 0, will be calculated later
                        type: level + 1 === splitKey.length ? 'element' : 'folder',
                    };
                    if (defaultFoundNode.type === 'element') {
                        defaultFoundNode.keysInfo = p3xr.state.keysInfo[defaultFoundNode.key];
                    }
                    nodes.push(defaultFoundNode);
                    foundNode = defaultFoundNode;
        
                    for (let saveExpandedNode of $rootScope.savedExpandedNodes) {
                        if (saveExpandedNode.key === foundNode.key) {
                            newExpandedNodes.push(foundNode);
                        }
                    }
                }
        
                if (level + 1 < splitKey.length) {
                    recursiveNodes(splitKey, level + 1, foundNode.children);
                }
            };
        
            $rootScope.expandedNodes = newExpandedNodes;
        
            for (let key of keys) {
                let splitkey = divider === '' ? [key] : key.split(divider);
                recursiveNodes(splitkey);
            }
        
            const recursiveKeyCount = (node) => {
                // Directly modify childCount here based on type 'element'
                node.childCount = node.children.filter(child => child.type === 'element').length;
                for (let child of node.children) {
                    recursiveKeyCount(child);
                    // For folders, accumulate child counts from their children
                    if (child.type === 'folder') {
                        node.childCount += child.childCount;
                    }
                }
            };
        
            for (let node of mainNodes) {
                recursiveKeyCount(node);
            }
        
            $rootScope.savedExpandedNodes = [];
            return mainNodes;
        };
        


        this.console = new function () {

            const selfConsole = this;

            selfConsole.parse = (responseResult) => {
                if (typeof responseResult === 'object') {
                    let result = ''
                    Object.keys(responseResult).forEach(key => {
                        if (result !== '') {
                            result += "\n"
                        }
                        result += responseResult[key]
                    })
                    return result
                } else {
                    return responseResult
                }

            }

        }

    };
});
