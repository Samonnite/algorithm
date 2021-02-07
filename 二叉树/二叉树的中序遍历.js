
// 中序遍历
// 输入: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3
// 输出: [1,3,2]

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归方式
const inorderTraversal = function (root) {
  let arr = []
  let traverse = root => {
    if (root == null) return
    traverse(root.left)
    arr.push(root.val)
    traverse(root.right)
  }
  return arr
}

// 非递归方式
const inorderTraversal = function (root) {
  let stack = [], arr = []
  if (root == null) return arr
  while(stack.length || root) {
    while(root) {
      stack.push(root)
      root = root.left
    }
    let cur = stack.pop()
    arr.push(cur.val)
    root = root.right
  }
  return arr
}