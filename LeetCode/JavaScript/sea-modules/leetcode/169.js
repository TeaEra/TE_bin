define(function (require, exports, module) {

	/**
	 * Majority Element
	 */
	
	'use strict';

	/**
	 * @param {number[]} nums
	 * @return {number}
	 */
	var majorityElement = function(nums) {
	    nums.sort();
	    return nums[Math.floor(nums.length / 2)];
	};

	module.exports = majorityElement;

});