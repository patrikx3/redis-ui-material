p3xr.ng.factory('p3xrRedisParser', function () {

    return new function() {

        const selfMain = this;

        this.array = (options) => {
            const { line } = options
            let { divider, fieldDivider } = options
            if (divider === undefined) {
                divider = ','
            }
            if (fieldDivider === undefined) {
                fieldDivider = '='
            }
            const rows = line.split(divider)
            const obj = {}
            for(let row of rows) {
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
            for(let line of lines) {
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


       // const moment = require('moment')

        this.keysToTreeControl =  (options) => {

         //   const start = Date.now()

            const { keys } = options
            let { divider } = options
            if (divider === undefined) {
                divider = p3xr.state.redisTreeDivider
            }
//console.warn(keys)
            const mainNodes = []
            const recursiveNodes = (splitKey, level = 0, nodes = mainNodes) => {
                let foundNode = false
                if (level + 1 < splitKey.length) {
                    for(let nodeIndex in nodes) {
                        const node = nodes[nodeIndex]
                        if (node.label === splitKey[level] && node.type === 'folder') {
                            foundNode = node
                        }
                    }
                }
                if (foundNode === false) {
                    const defaultFoundNode = {
                        label: splitKey[level],
                        key: splitKey.slice(0, level + 1).join(divider),
                        children: [],
                        childCount: 0,
                    }
                    if (level + 1 === splitKey.length) {
                        //console.warn(splitKey.length - 1 === level)t
                        foundNode = Object.assign(defaultFoundNode, {
                            type: 'element',
                            redisType: p3xr.state.keysType[defaultFoundNode.key]
                        })
                    } else {
                        foundNode = Object.assign(defaultFoundNode, {
                            type: 'folder',
                        })
                    }
                    nodes.push(foundNode)
                }

                if (level + 1 < splitKey.length) {
                    recursiveNodes(splitKey, level + 1, foundNode.children)
                }
            }

            for(let key of keys)  {
                const splitKey = key.split(divider)
                recursiveNodes(splitKey)
            }

            const generatedKeys = {}
            const recursiveKeyCount = (node) => {
                generatedKeys[node.key] = node.children.length;

                for(let child of node.children) {
                    recursiveKeyCount(child)
                }
            }
            for(let node of mainNodes)  {
                recursiveKeyCount(node)
            }

            const recursiveCounterKeys = (node) => {
                for(let generatedKey of Object.keys(generatedKeys)) {
                    if (generatedKey.startsWith(`${node.key}:`) || generatedKey === node.key ) {
                        node.childCount += generatedKeys[generatedKey]
                    }
                }
                for(let child of node.children) {
                    recursiveCounterKeys(child)
                }
            }
            for(let node of mainNodes)  {
                recursiveCounterKeys(node)
            }

            //console.warn('key calculate', (Date.now() - start), 'ms' )
            return mainNodes
        }


        this.console = new function() {

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
