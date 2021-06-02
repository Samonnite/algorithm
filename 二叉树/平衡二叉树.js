var isBalanced = function(root) {
    /* 
        解题思路：
        1. 正向思考 自上而下 递归实现
        2. 逆向思考 自底向上
            返回DFS递归中当前节点的高度。当当前节点（包含）的子树平衡时，函数DFS()返回一个非负值作为高度。
            否则返回-1。根据两个子节点的左高度和右高度，父节点可以检查子树是否平衡，并决定其返回值
            在这种自下而上的方法中，树中的每个节点只需要访问一次。因此，时间复杂度为O(N)，比第一个解更好
    */
    // 方法一：递归
    if (!root) return true

    const depth = node => {
        if (!node) return 0
        return Math.max(depth(node.left), depth(node.right)) + 1
    }

    const left = depth(root.left), right = depth(root.right)

    return Math.abs(left - right) < 2 && isBalanced(root.left) && isBalanced(root.right)

    // 解法二：自底向上 dfs返回当前节点的高度 若当前节点子树平衡则返回一个非负值 否则返回-1
    const dfs = node => {
        if (!node) return 0

        const left = dfs(node.left), right = dfs(node.right)

        if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1
        
        return Math.max(left, right) + 1
    }

    return dfs(root) !== -1

};
