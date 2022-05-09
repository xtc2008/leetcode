/*
 * @lc app=leetcode id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let results = [];
    for(let i = 1; i <= n; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            results.push("FizzBuzz");
        } else if(i % 3 === 0) {
            results.push("Fizz");
        } else if(i % 5 === 0) {
            results.push("Buzz");
        } else {
            results.push(`${i}`)
        }
    }
    return results
};
// @lc code=end

