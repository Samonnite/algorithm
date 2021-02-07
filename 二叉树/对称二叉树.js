const isSymmetric = function(root) {
  const check = (left, right) => {
    if (!left && !right) return true
    if (!left || !right || left.val !== right.val) return false
    return check(left.left, right.right) && check(right.left, right.left)
  }
  if (root == null) return true
  return check(root,left, root.right)
}