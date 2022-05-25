/*
 * @lc app=leetcode id=1405 lang=javascript
 *
 * [1405] Longest Happy String
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function(a, b, c) {
    const arr = [["a", a], ["b", b], ["c", c]];
    arr.sort((a,b) => b[1] - a[1]);
        
    const first = Array(arr[0][1]).fill(arr[0][0]);
    const mid = Array(arr[1][1]).fill(arr[1][0]);
    const last = Array(arr[2][1]).fill(arr[2][0]);

    const fullArray = first.concat(mid).concat(last);

    console.log(fullArray);
    console.log(fullArray.at(-1))

    let results = "";

    while(fullArray) {
        // if(fullArray[0] === fullArray[1]) {
        //     results += fullArray.shift();
        // } else {
        //     results += fullArray.shift();
        // }

        // if(fullArray.at(-1) === fullArray.at(-2)) {
        //     results += fullArray.pop()
        // } else {
        //     results += fullArray.pop()
        // }
        results += fullArray.shift();
        results += fullArray.pop()
    }

    return results;
};

console.log(longestDiverseString(1,1,7))

// @lc code=end

