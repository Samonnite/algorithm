// 给你一个字符串 s，找到 s 中最长的回文子串。

/**
 * @param {string} s
 * @return {string}
 */
// 中心扩散
const longestPalindrome = function (s) {
    if (s.length < 2) {
        return s
    }
    let res = ''
    for (let i = 0; i < s.length; i++) {
        // 回文子串长度是奇数
        helper(i, i)
        // 回文子串长度是偶数
        helper(i, i + 1)
    }

    function helper(m, n) {
        while (m >= 0 && n < s.length && s[m] == s[n]) {
            m--
            n++
        }
        // 注意此处m,n的值循环完后  是恰好不满足循环条件的时刻
        // 此时m到n的距离为n-m+1，但是mn两个边界不能取 所以应该取m+1到n-1的区间  长度是n-m-1
        if (n - m - 1 > res.length) {
            // slice也要取[m+1,n-1]这个区间 
            res = s.slice(m + 1, n)
        }
    }
    return res

};

// dp
const longestPalindromeRe = function (s) {
    let n = s.length;
    let res = '';
    let dp = Array.from(new Array(n), () => new Array(n).fill(false))
    for (let i = n - 1; i >= 0; i--) {
        for(let j = i;j < n;j++){
            dp[i][j] = s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1])
            if(dp[i][j] && j - i + 1 > res.length) {
                res = s.substring(i, j+ 1);
            }
        }
    }
    console.log(res);
    return res;
}

longestPalindromeRe('ssasse')