/*
 * @lc app=leetcode id=190 lang=javascript
 *
 * [190] Reverse Bits
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let binaryStr = n.toString(2).split("").reverse().join("").padEnd(32, "0")
  return Number.parseInt(binaryStr, 2);
};

console.log(reverseBits(00000010100101000001111010011100));
// @lc code=end
