function createNode(id, data) {
  // 获取childData
  const childData = data.filter(({ parentId }) => parentId === id);

  const node = {
    id,
    children: childData.reduce((pre, cur) => {
      pre.push(createNode(cur.id, data));
      return pre;
    })
  }

  return node;
}

function listToTree(data) {
  // 获取根节点id
  const { id } = data.find(item => !item.parentId)

  return createNode(id, data)
}