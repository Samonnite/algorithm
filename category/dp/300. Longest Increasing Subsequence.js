/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    const dp = new Array(nums.length).fill(1);
    for (let i = 0; i < nums.length; i++) {
        // i 与 i 前面的元素比较
        for (let j = 0; j < i; j++) {
            // 找比i小的元素，找到一个，就让当前序列的最长子序列长度加1
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    return Math.max(...dp);
};