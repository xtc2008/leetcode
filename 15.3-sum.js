/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    let results = [];
    
    if(nums.length < 3){
        return results
    }
    
    //sorting makes the problem easier.  Since we are using O(N^2) time - we can afford a O(NlogN) sort
    nums = nums.sort((a,b) => a - b)
    
    //we can change target to any number and control it here
    let target = 0;

    //for loop starting with i was the right most element, j as the middle, and k as the left most.
    //j will race back and forth between i and k for each loop.  
    //If sum is smaller than target we increment j
    //If sum is larger than target we decrement k
    //This works because we sorted the array
    for(let i = 0; i < nums.length - 2; i++) {
        if(nums[i] > target) {
            break;
        }
        
        if(i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        
        let j = i + 1
        let k = nums.length - 1
        
        while(j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            
            if(sum === target) {
                results.push([nums[i], nums[j], nums[k]]);
                while(nums[j] === nums[j + 1]) {
                    j++;
                }
                while(nums[k] === nums[k - 1]) {
                    k--;
                }
                j++;
                k--;
            } else if(sum < target) {
                j++;
            } else {
                k--;
            }
        }
    }
    return results;
};
// @lc code=end

