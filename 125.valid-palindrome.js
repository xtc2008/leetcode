/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase()
    return str === str.split("").reverse().join("");
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))
// @lc code=end

