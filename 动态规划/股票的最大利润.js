/**
 *  股票的最大利润 = 当前股票价格 - 前i项的最小值
    profit = Math.max(profit, cur - min)
 * @param prices
 * @returns
 */
var maxProfit = function (prices) {
    if (!prices || !prices.length) return 0
    let profit = 0;
    let min = Number.MAX_SAFE_INTEGER
    let cur
    for (let i = 0; i < prices.length; i++) {
        cur = prices[i]
        min = Math.min(cur, min)
        profit = Math.max(profit, cur - min)
    }
    return profit
}