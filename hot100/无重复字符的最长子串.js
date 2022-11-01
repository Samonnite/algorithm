// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

/**
 * 该题是找出没有重复值出现的字串的长度，所以将没有重复的值按顺序放入到新数组temp中，
 * 当出现重复数字时，则表示以temp的第一个元素的字串出现了重复字符，
 * 重新以第二个元素为开头继续往下寻找。在删除第一个元素时，要注意的点是，
 * 是在for循环中，要将i的值恢复为查找到循环字符的下标，保证将这个值压入到temp数组中
 */
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
    let arr = [];
    let max = 0;
    for (let str of s) {
        while (arr.includes(str)) {
            arr.shift()
        }
        arr.push(str)
        max = Math.max(max, arr.length)
    }

    return max;
};