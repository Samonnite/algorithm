/**
 * 二叉搜索数的中序遍历是升序遍历，so 反中序遍历 dfs
 * @param root 
 * @param k 
 */
var kthLargest = function(root, k) {
  const res = []
  function dfs(root) {
    if (!root) return
    dfs(root.right)
    res.push(root.val)
    dfs(root.left)
  }
  dfs(root)

  return res[k - 1]
};