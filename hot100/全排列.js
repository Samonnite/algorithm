/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const res = [];
    const used = {};

    const dfs = (path) => {
        if (path.length === nums.length) {
            res.push(path.slice());
            return;
        }
        for (const num of nums) { // 枚举每个可选的选项
            if (used[num]) continue; // 使用过的，跳过
            path.push(num); // 选择当前的数，加入path
            used[num] = true; // 记录一下使用
            dfs(path); // 基于当前选择的数，递归
            path.pop(); // 上一句的递归结束，回溯，将最后选的数pop出来
            used[num] = false // 撤销记录
        }
    }
    dfs([]);
    return res;
};