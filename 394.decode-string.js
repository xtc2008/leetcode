/*
 * @lc app=leetcode id=394 lang=javascript
 *
 * [394] Decode String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const regex = /(\d+)\[([A-Za-z]+)\]/g;
    
    function replacer(match, number, letter) {
        return letter.repeat(number);
    }
    
    while (s.includes('[')) {
        s = s.replace(regex, replacer);
    }
    return s;
};
// @lc code=end

