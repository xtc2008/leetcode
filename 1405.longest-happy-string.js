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
    //create counters for each string so we can track when they hit 2
    let countA = 0;
	let countB = 0;
	let countC = 0;
	var result = "";
    //if any value is greater than zero we will loop through a, b, c
	while (a > 0 || b > 0 || c > 0) {
        //each condition handles 1 letter, first condition will handle a.  If a is greater or equal to b and c or
        //count of other letters are greater equal to 2 and a is greater than 0, a will go.
        //Once a letter takes their turn, the counts are reset for the other letters.
		if ((a >= b && a >= c && countA < 2) || (countB === 2 && a > 0) || (countC === 2 && a > 0)) {
			result += "a";
			countA += 1;
			a -= 1;
			countB=0;
			countC=0;
		} else if ((b >= a && b >= c && countB < 2 ) || (countA === 2 && b > 0) || (countC === 2 && b > 0)) {
			result += "b";
			countB += 1;
			b -= 1;
			countA=0;
			countC=0;
		} else if ((c >= a && c >= b && countC < 2) || (countB === 2 && c > 0) || (countA === 2 && c > 0)) {
			result += "c";
			countC += 1;
			c -= 1;
			countA=0;
			countB=0;
		} else {
			break;
		}
	}

	return result;
};

console.log(longestDiverseString(1,1,7))

// @lc code=end

