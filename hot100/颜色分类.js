/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let p = -1;
    let q = nums.length;
    let i = 0;
    while (i < q) {
        if (nums[i] === 0) {
            swap(nums, i, p + 1);
            p++;
            i++;
        } else if (nums[i] === 2) {
            swap(nums, i, q - 1);
            q--;
        } else if (nums[i] === 1) {
            i++;
        }
    }

    function swap(arr, a, b) {
        let tmp = arr[a];
        arr[a] = arr[b];
        arr[b] = tmp;
    }

    return nums;
};