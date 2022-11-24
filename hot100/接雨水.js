/**
 * @param {number[]} height
 * @return {number}
 */
// 双指针
var trap = function (height) {
    let res = 0;
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0; // 左右两边最大高度
    while(left < right) { // 循环双指针
        leftMax = Math.max(leftMax, height[left]); // 左边最大值
        rightMax = Math.max(rightMax, height[right]); // 右边最大值
        if (height[left] < height[right]) { // 右边的柱子高于左边的柱子 计算这个位置的接水量，累加进结果
            res += leftMax - height[left];
            left++;
        } else { //左边的柱子高于或等于右边的柱子 计算这个位置的接水量 累加进结果
            res += rightMax - height[right];
            right--;
        }
    }
    return res;
};