/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const res = [];

    const dfs = (index, list) => {
        if (index === nums.length) {
            res.push(list.slice());
            return;
        }
        list.push(nums[index]);
        dfs(index + 1, list);
        list.pop();
        dfs(index + 1, list);
    }
    dfs(0, []);
    return res;
};