const isPrimitive = x => typeof x === 'string' || typeof x === 'number'

const sameVnode = (oldVnode, newVnode) => oldVnode.key === newVnode.key && oldVnode.tag === newVnode.tag

function vnode(tag, props, children, text) {
    return { tag, props, children, text }
}

function h(tag, props, children) {
    let text = null
    if (isPrimitive(children)) {
        text = children
        children = null
    } else if (Array.isArray(children)) {
        children = children.map(x => isPrimitive(x) ? vnode(null, null, null, x) : x)
    }
    return vnode(tag, props, children, text)
}

function createElementByVNode(vnode) {
    const { tag, props, children, text } = vnode

    const element = document.createElement(tag)

    if (Array.isArray(children)) {
        for (const child of children) {
            element.appendChild(createElementByVNode(child))
        }
    } else if (text) {
        element.textContent = text
    }
    updateProps(element, {}, vnode)
    vnode.element = element
    return element
}

function removeVnodes(element, children, startIndex, endIndex) {
    for (const vNode of children.slice(startIndex, endIndex)) {
        element.removeChild(vNode)
    }
}

function addVnodes(element, children, startIndex, endIndex) {
    for (const vNode of children.slice(startIndex, endIndex)) {
        element.appendChild(createElementByVNode(vNode))
    }
}

function updateProps(element, oldVnode, newVnode) {
    function updateClass() {
        if (oldVnode.props?.class !== newVnode.props?.class) {
            // 对于 class 暴力解决进行更新，如果精细控制可通过 ClassList API
            if (newVnode.props?.class) {
                element.className = newVnode.props.class
            } else {
                element.className = ''
            }
        }
    }
    // 示例一:
    // { color: 'red', fontSize: '18px' } => { backgroundColor: 'red', fontSize: '18px' }
    //
    // 示例二:
    // { color: 'red', fontSize: '20px' } => { backgroundColor: 'red', fontSize: '18px' }
    function updateStyle() {
        const newStyle = newVnode.props?.style || {}

        element.style = Object.entries(newStyle).reduce((acc, [key, value]) => {
            return `${acc}${key.replace(/[A-Z]/g, x => '-' + x.toLowerCase())}: ${value}`
        })
    }

    function updateAttribute() {
        const newProps = newProps.props || {}

        Object.entries(newProps).map(([key, value]) => {
            if (key !== 'class' && key !== 'style') {
                element.setAttribute(key, value)
            }
        })
    }

    updateClass()
    updateStyle()
    updateAttribute()
}

function updateChildren(element, oldChildren, newChildren) {
    if (oldChildren) {
        // 如果仅仅在旧的虚拟节点存在children，则需要在DOM中删除旧节点的所有字节点
        removeVnodes(element, oldChildren, 0, oldChildren.length)
        return
    } else if (newChildren) {
        // 如果仅仅在新的虚拟节点存在children，则需要再新的虚拟节点构建DOM并插入到element下
        addVnodes(element, newChildren, 0, newChildren.length)
        return
    }

    let oldVnodeIndex = 0, newVnodeIndex = 0
    let oldVnodeEndIndex = oldChildren.length, newVnodeEndIndex = newChildren.length
    while (oldVnodeIndex < oldVnodeEndIndex && newVnodeIndex < newVnodeEndIndex) {
        const oldVnode = oldChildren[oldVnodeIndex]
        const newVnode = newChildren[newVnodeEndIndex]

        if (oldVnode.props.key) {
            // 一下是旧新节点对比：
            // oldKey: 1 2 3 4 6
            // newKey: 4 3 5 1 2
            // 生成 newChild 关于 key 与 index 的对应关系
            // {4: 0, 3: 1, 5: 2, 1: 3, 2: 4}
            const newChildrenKeyMapId = newChildren.reduce((acc, x, idx) => {
                acc[x.key] = idx
                return acc
            }, {})
            // 找到与当前旧节点 key 对应的新节点的 id
            const id = newChildrenKeyMapId[oldVnode.props.key]
            if (id) {
                // 如果有相同key的新旧节点
                patch(oldVnode, newChildren[id])
                [newChildren[id], newChildren[newVnodeIndex]] = [newChildren[newVnodeIndex], newChildren[id]]
                oldVnodeIndex++
                newVnodeIndex++
            } else {
                // 如果在新节点中找不到与旧节点对应的key，则删掉该节点
                // oldKey: 2 1 3 4
                // newKey: 3 1
                // 操作: Delete 2
                removeNodes(element, oldChildren, oldVnodeIndex, oldVnodeIndex + 1)
                oldVnodeIndex++
            }
        } else {
            patch(oldVnode, newVnode)
        }
    }
    addVnodes(element, newChildren, newVnodeIndex, newVnodeEndIndex)
    removeVnodes(element, oldChildren, oldVnodeIndex, oldVnodeIndex)
}

function updateText(oldVnode, newVnode) {
    const element = oldVnode.element
    element.textContent = newVnode.text
}

/**
 * 当两个vNode标签及key相同时，执行 patchVnode 进行更新
 * 更新 props
 * 更新 Children
 * 更新 Text
 */
function patchVnode(oldVnode, newVnode) {
    const element = newVnode.element = oldVnode.element
    updateProps(element, oldVnode, newVnode)
    updateChildren(oldVnode.element, oldVnode.children, newVnode.children)
    updateText(oldVnode, newVnode)
}

function patch(oldVnode, newVnode) {
    if (sameVnode(oldVnode, newVnode)) {
        patchVnode(oldVnode, newVnode)
    } else if (oldVnode instanceof HTMLElement) {
        const element = createElementByVNode(newVnode)
        oldVnode.appendChild(element)
    } else {
        createElementByVNode(newVnode)
    }
    return newVnode
}

export { patch, h }