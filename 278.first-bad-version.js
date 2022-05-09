/*
 * @lc app=leetcode id=278 lang=javascript
 *
 * [278] First Bad Version
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let start = 1;
    let stop = n;
    while (start < stop) {
        let mid = Math.floor(start + (stop - start) / 2)
      if (isBadVersion(mid)) {
        stop = mid;
      } else {
        start = mid + 1;
      }
    }
    return start;
  };
};
// @lc code=end
