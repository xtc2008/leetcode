/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false;
    const resultArr = [];
    let s = x;
    while (s > 0) {
        resultArr.push(s % 10)
        s = Math.floor(s / 10)
    }
    return resultArr.join("") == x;
};

console.log(isPalindrome(121))
// @lc code=end

