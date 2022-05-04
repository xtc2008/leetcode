/*
 * @lc app=leetcode id=350 lang=javascript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let cache = {};
    let results = [];
    nums1.reduce((acc, curr) => cache[curr] = cache[curr] + 1 || 1, {})
    for(let i = 0; i < nums2.length; i++) {
        if(cache[nums2[i]] > 0) {
            results.push(nums2[i])
            cache[nums2[i]] = cache[nums2[i]] - 1
        }
    }
    return results;
};
