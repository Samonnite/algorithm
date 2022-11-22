/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits.length === 0) return [];
    const res = [];
    const map = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' };
    // dfs: 当前构建的字符串curstr,现在翻译到第i个数字，基于此继续翻译
    const dfs = (curStr, i) => { // curStr is 当前字符串，i是扫描的指针
        if (i > digits.length - 1) { // 指针越界，递归的出口
            res.push(curStr);
            return;
        }
        const letters = map[digits[i]]; // 当前数字对应的字母
        for (const letter of letters) { // 一个字母是一个选择，对应一个递归分支
            dfs(curStr + letter, i + 1); // 选择翻译成letter，生成新字符串，i指针右移继续翻译
        }
    }
    dfs('', 0);
    return res;
};