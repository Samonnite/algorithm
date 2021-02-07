const lowestCommonAncestor = function(root, p, q) {
  if (root == null || root == p || root == q) return root
  let left = lowestCommonAncestor(root.left, p ,q)
  let right = lowestCommonAncestor(root.right, p ,q)
  if (left && right) return root
  return left || right
}