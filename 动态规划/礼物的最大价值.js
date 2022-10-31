/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxValue = function(grid) {
    let inputArr = grid
    let value = []
    let m = 0
    let n = 0
    m = inputArr.length
    n = inputArr[0].length
    for (let i = 0; i < m; i++) {
        value[i] = []
        for(let j = 0; j < n; j++) {
            // 当左上角
            if (i == 0 && j ==0) {
                value[i][j] = inputArr[i][j]
            } else if (i == 0) {
                // i代表行，在第一行时，只能从右边过来
                value[i][j] = value[i][j - 1] + inputArr[i][j]
            } else if (j == 0) {
                // j代表列，第一列只能从上面下来
                value[i][j] = value[i - 1][j] + inputArr[i][j]
            } else {
                //若为其余情况，则取上面下来和右边过来的最大值作为结果
                value[i][j] = Math.max((value[i - 1][j] + inputArr[i][j]) , (value[i][j - 1] + inputArr[i][j]));
            }
        }
    }
    return value[m - 1][n - 1];
}