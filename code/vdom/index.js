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

}

function addVnodes(element, children, startIndex, endIndex) { }

function updateProps(element, oldVnode, newVnode) { }

function updateChildren(element, oldChildren, newChildren) { }

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