define(function (require, exports, module) {

	/**
	 * Find Minimum in Rotated Sorted Array
	 */
	
	'use strict';

	/**
	 * @param {number[]} nums
	 * @return {number}
	 */
	var findMin = function(nums) {
	    var 
	    	i = 0,
	    	size = nums.length,
	    	min = nums[0];
	    for (i=1; i<size; ++i) {
	    	if (nums[i-1] > nums[i]) {
	    		min = nums[i];
	    		break;
	    	}
	    }
	    return min;
	};

	module.exports = findMin;

});