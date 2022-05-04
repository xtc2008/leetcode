/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const cache = {};
    const arr = [];
    nums1.reduce((acc, curr) => cache[curr] = 1, {})
    for(let i = 0; i < nums2.length; i++) {
        if(cache[nums2[i]] > 0) {
            arr.push(nums2[i])
            cache[nums2[i]] = cache[nums2[i]] - 1;
        }
    }
    return arr;
};
// @lc code=end

