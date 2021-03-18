/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
    const max = 1e9 + 7;
    const dp = [1, 1, 2]
    for (let i = 2; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % max
    }
    return dp[n]
};