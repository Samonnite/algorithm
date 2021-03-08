var mirrorTree = function(root) {
  if (root == null) return null

  // 交换左右节点
  const leftCopy = root.left
  root.left = root.right
  root.right = leftCopy

  // 左右子树进行相同操作
  mirrorTree(root.left)
  mirrorTree(root.right)

  return root
};