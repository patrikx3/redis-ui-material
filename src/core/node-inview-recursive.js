const recursive = (opts) => {
    const { node, status, nodeCallback } = opts
    node.$inview = status
    if (nodeCallback) {
        nodeCallback({
            node: node,
        })
    }
    for (let child of opts.node.children) {
        child.$inview = status
        if (nodeCallback) {
            nodeCallback({
                node: child,
            })
        }
        if (child.children.length > 0) {
            recursive({
                node: child,
                status: opts.status,
                nodeCallback: nodeCallback,
            })
        }
    }
}



module.exports.recursive = (opts) => {
    let { status, nodes, nodeCallback } = opts
    if (status === undefined) {
        status = false
    }
    if (!Array.isArray(nodes)) {
        nodes = [ nodes ]
    }
    for (let node of nodes) {
        recursive({
            node: node,
            status: status,
            nodeCallback: nodeCallback,
        })
    }
}
