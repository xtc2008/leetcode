/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if(nums.length === 0) return 0;
    let j = 0
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== nums[j]) {
            j++;
            nums[j] = nums[i];
        }
    }
    return j + 1
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
// @lc code=end
