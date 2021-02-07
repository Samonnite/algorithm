const binaryTreePaths = function(root) {
  let path = [], res = []
  let dfs = node => {
    if (!node) return
    path.push(node)
    dfs(node.left)
    dfs(node.right)
    if (!node.left && !node.right) {
      res.push(path.map(item => item.val).join('->'))
    }
    path.pop()
  }
  dfs(root)
  return res
}