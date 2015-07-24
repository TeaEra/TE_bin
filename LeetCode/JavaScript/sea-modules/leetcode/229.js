define(function (require, exports, module) {

	/**
	 * Majority Element II
	 */
	
	'use strict';

	/**
	 * @param {number[]} nums
	 * @return {number[]}
	 */
	var majorityElement = function(nums) {
	    var size = nums.length;
	    if (size === 0) {
	    	return nums;
	    }
	    var oneThirdIdx = Math.floor(size / 3);
	    nums.sort();
	    var num1 = nums[oneThirdIdx + 1],
	    	num2 = nums[2*oneThirdIdx + 1],
	    	res = [];
	    num1 === num2 ? res.push(num1) : res = res.concat([num1, num2]);
	    return res;
	};

	module.exports = majorityElement;

});