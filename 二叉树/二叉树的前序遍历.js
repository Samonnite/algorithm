// 前序遍历

// 示例:

// 输入: [1,null,2,3]  
//    1
//     \
//      2
//     /
//    3 

// 输出: [1,2,3]

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归方式
const preorderTraversal = function (root) {
  let arr = []
  let traverser = root => {
    if (root == null) return
    arr.push(root.val)
    traverser(root.left)
    traverser(root.right)
  }
  traverser(root)
  return arr
}

// 非递归方式
const preorderTraversal = function (root) {
  const stack = [], res = []
  if (root == null) return res
  stack.push(root)
  while(stack.length) {
    let cur = stack.pop()
    res.push(cur.val)
    if (cur.right) stack.push(stack.right)
    if (cur.left) stack.push(stack.left)
  }
  return res
}

