let node = {
    tag: 'ul',
    attrs: {
        id: '&emsp;"list"'
    },
    children: [
        {
            tag: 'li',
            attrs: { className: 'item' },
            children: ['Item1']
        },
        {
            tag: 'li',
            attrs: { className: 'item' },
            children: ['Item2']
        }
    ]
}


const createElement = (vnode) => {
    let tag = vnode.tag
    let attrs = vnode.attrs || {}
    let children = vnode.children || []
    if (!tag) {
        return null
    }
    // 创建元素
    let elem = document.createElement(tag)
    // 属性
    for (attrName in attrs) {
        if (attrs.hasOwnProperty(attrName)) {
            let propName = attrName === 'className' ? 'class' : attrName
            elem.setAttribute(propName, attrs[attrName])
        }
    }
    // 子元素
    children.forEach(childVnode => {
        if (childVnode.tag) {
            elem.appendChild(createElement(childVnode))
        } else {
            elem.innerHTML = childVnode
        }
    })
    return elem
}