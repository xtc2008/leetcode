/*
 * @lc app=leetcode id=1656 lang=javascript
 *
 * [1656] Design an Ordered Stream
 */

// @lc code=start
/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    // Define a construction function and set some values as object properties to keep our data persistent between invocations
     this.pointer = 0;
     // this will create an array of length (n) and set all values to 'undefined'
     this.list = [];   
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    // will be used to store values that pass the condition and to be returned
    let chunk = [];
    // since array indices start from zero and id in this problem from 1 we need to decrement it
    this.list[idKey - 1] = value
    // every time we insert a value we have to look if there is a value at the index (pointer) that should be returned
    // if there is any we copy it and then iterate to the next element until the condition is no longer true
    while(this.list[this.pointer]) {
        chunk.push(this.list[this.pointer])
        this.pointer++
    }
    return chunk
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */

/** class based component
class OrderedStream {
  constructor(n) {
    this.pointer = 0
    this.list = []
  }

  insert(id, value) {
    let chunk = []
    this.list[id - 1] = value
    while(this.list[this.pointer]) {
      chunk.push(this.list[this.pointer])
      this.pointer++
    }
    return chunk
  }
}
*/
// @lc code=end

