/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const mem = [0, 1, 2]
  if(mem[n]) return mem[n];
  for(let i = 3; i < n+1; i++) {
    mem[i] = mem[i - 1] + mem[i - 2]
  }
  return mem[n]
};
// @lc code=end
