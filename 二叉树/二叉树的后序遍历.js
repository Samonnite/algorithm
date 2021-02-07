// 后序遍历
// 输入: [1,null,2,3]  

//    1
//     \
//      2
//     /
//    3 

// 输出: [3,2,1]

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归方式
const postorderTraversal = function(root) {
  let arr = []
  let traverse = root => {
    if (root == null) return
    traverse(root.left)
    traverse(root.right)
    arr.push(root.val)
  }
  traverse(root)
  return arr
}

// 非递归方式
const postorderTraversal = function(root) {
  const stack = [], res = []
  if (root == null) return res
  stack.push(root)
  while(stack.length) {
    const cur = stack.pop()
    res.unshift(cur.val)
    if (root.left) stack.push(cur.left)
    if (root.right) stack.push(cur.right)
  }
  return res
}