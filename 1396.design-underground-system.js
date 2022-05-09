/*
 * @lc app=leetcode id=1396 lang=javascript
 *
 * [1396] Design Underground System
 */

// @lc code=start

var UndergroundSystem = function() {
    this.start = {};
    this.routes = {};
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.start[id] = [stationName, t];
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    let time = t - this.start[id][1]
    let currRoute = this.routes[this.start[id][0] + ',' + stationName];
    if(currRoute) {
        this.routes[this.start[id][0] + ',' + stationName].push(time);
    } else {
        this.routes[this.start[id][0] + ',' + stationName] = [time];
    }
    delete this.start[id]
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    let allRoutes = this.routes[startStation + ',' + endStation]
    return allRoutes.reduce((acc,curr) => acc + curr,0) / allRoutes.length
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */

 const undergroundSystem = new UndergroundSystem();
 undergroundSystem.checkIn(45, "Leyton", 3);
 undergroundSystem.checkIn(32, "Paradise", 8);
 undergroundSystem.checkIn(27, "Leyton", 10);
 undergroundSystem.checkOut(45, "Waterloo", 15);  // Customer 45 "Leyton" -> "Waterloo" in 15-3 = 12
 undergroundSystem.checkOut(27, "Waterloo", 20);  // Customer 27 "Leyton" -> "Waterloo" in 20-10 = 10
 undergroundSystem.checkOut(32, "Cambridge", 22); // Customer 32 "Paradise" -> "Cambridge" in 22-8 = 14
 undergroundSystem.getAverageTime("Paradise", "Cambridge"); // return 14.00000. One trip "Paradise" -> "Cambridge", (14) / 1 = 14
// @lc code=end

