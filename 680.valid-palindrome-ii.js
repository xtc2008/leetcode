/*
 * @lc app=leetcode id=680 lang=javascript
 *
 * [680] Valid Palindrome II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    for(let i = 0; i < s.length; i++) {
        const newStr = s.substring(0, i) + s.substring(i + 1 , s.length)
        if(newStr.split("").reverse().join('') === newStr) {
            return true;
        }
    }
};

console.log(validPalindrome("abca"))
// @lc code=end

