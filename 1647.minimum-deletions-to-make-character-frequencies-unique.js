/*
 * @lc app=leetcode id=1647 lang=javascript
 *
 * [1647] Minimum Deletions to Make Character Frequencies Unique
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    const cache = {};
    let counter = 0;
    for(let i = 0; i < s.length; i++) {
        cache[s[i]] ? cache[s[i]] = cache[s[i]] + 1 : cache[s[i]] = 1;
    }

    let vals = Object.values(cache).sort(((a,b) => b-a));

    let temp;

    for(let j = 1; j < vals.length; j++) {
        if(vals[j-1] === 0) {
            counter += vals[j]
            vals[j] = 0;
        } else if(vals[j] >= vals[j-1]) {
            temp = Math.abs(vals[j] - (vals[j-1] - 1))
            vals[j] = vals[j-1] - 1
            counter += temp
        }
    }
    return counter;
};

// @lc code=end

