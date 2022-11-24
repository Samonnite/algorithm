/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0; right = height.length - 1, max = 0;
    while (left < right) {
        let tmp = (right - left) * Math.min(height[left], height[right])
        if (tmp > max) {
            max = tmp;
        }
        if (height[left] <= height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return max;
};