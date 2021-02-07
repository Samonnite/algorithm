const diameterOfBinaryTree = function(root) {
  let ans = 1
  const depth = node => {
    if (node == null) return 0
    let left = depth(node.left)
    let right = depth(node.right)
    ans = Math.max(ans, left + right + 1)
    return Math.max(left, right) + 1
  }
  depth(root)
  return ans - 1
}