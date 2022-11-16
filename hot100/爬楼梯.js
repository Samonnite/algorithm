// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？


// 本问题其实常规解法可以分成多个子问题，爬第n阶楼梯的方法数量，等于 2 部分之和
// 爬上 n-1n−1 阶楼梯的方法数量。因为再爬1阶就能到第n阶
// 爬上 n-2n−2 阶楼梯的方法数量，因为再爬2阶就能到第n阶
// 所以我们得到公式 dp[n] = dp[n-1] + dp[n-2]dp[n]=dp[n−1]+dp[n−2]

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    const dp = [];
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i < n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
};