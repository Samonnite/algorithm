const isSymmetric = function(root) {
  const check = (left, right) => {
    if (!left && !right) return true  // 左右子树同时为空    则为镜像
    if (!left || !right) return false // 左右子树有一个为空  则不为镜像
    if (left.val !== right.val) return false // 左右子树同时存在 但值不同 也不为镜像
    return check(left.left, right.right) && check(left.right, right.left)
  }
  if (root == null) return true
  return check(root,left, root.right)
}