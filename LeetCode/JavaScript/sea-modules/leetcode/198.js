define(function (require, exports, module) {

	/**
	 * House Robber
	 */
	
	'use strict';

	/**
	 * @param {number[]} nums
	 * @return {number}
	 */
	var rob = function(nums) {
		/*// Recursive solution:
	    var size = nums.length;
	    if (size === 0) {
	    	return 0;
	    }
	    if (size === 1) {
	    	return nums[0];
	    }
	    if (size === 2) {
	    	return Math.max(nums[0], nums[1]);
	    }
	    return Math.max(nums[0] + rob(nums.slice(2, size)), nums[1] + rob(nums.slice(3, size)));*/

	    var size = nums.length;
	    if (size === 0) {
	    	return 0;
	    }
	    if (size === 1) {
	    	return nums[0];
	    }
	    if (size === 2) {
	    	return Math.max(nums[0], nums[1]);
	    }
	    var i = 0;
	    nums[0] > nums[1] ? nums[1] = nums[0] : '';
	    for (i=2; i<size; ++i) {
	    	nums[i] = Math.max(nums[i-2] + nums[i], nums[i-1]);
	    }
	    return nums[size-1];
	};

	module.exports = rob;

});