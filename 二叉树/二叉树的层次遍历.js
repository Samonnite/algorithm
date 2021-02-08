const levelOrder = function(root) {
  let res = [], queue = []
  if (root == null) return res
  queue.push(root)
  while(queue.length) {
    let level = []
    const levelSize = queue.length
    for (let i = 0; i < levelSize; i++) {
      const cur = queue.shift()
      level.push(cur.val)
      if (cur.left) queue.push(cur.left)
      if (cur.right) queue.push(cur.right)
    }
    res.push(level)
  }
  return res
}