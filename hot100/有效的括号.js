// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。


/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        switch(c) {
            case '{':
                stack.push('}')
                break;
            case '(':
                stack.push(')');
                break;
            case '[':
                stack.push(']');
                break;
            default:
                if (c !== stack.pop()) return false;
        }
    }
    return stack.length === 0;
};

const isValid2 = function(s) {
    const stack = [];
    const map = {
        '(': ')',
        '[': ']',
        '{': '}',
    }
    for (const x of s) {
        if (x in map) {
            stack.push(x);
            continue;
        }
        if (map[stack.pop()] !== x) return false;
    }
    return !stack.length;
}