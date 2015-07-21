define(function (require, exports, module) {
	
	/**
	 * Product of Array Except Self
	 */

	'use strict';

	/**
	 * @param {number[]} nums
	 * @return {number[]}
	 */
	var productExceptSelf = function(nums) {
	    var 
	    	size = nums.length,
	    	res = [1];
	    for (var i=size-2; i>=0; --i) {
	    	res[size-1-i] = res[size-1-i-1] * nums[i+1];
	    }
	    res.reverse();
	    for (var i=size-1; i>=1; --i) {
	    	nums[i] = nums[i-1];
	    }
	    nums[0] = 1;
	    for (var i=1; i<size; ++i) {
	    	nums[i] = nums[i-1] * nums[i];
	    }
	    for (var i=0; i<size; ++i) {
	    	res[i] = res[i] * nums[i];
	    }
	    return res;
	};

	module.exports = productExceptSelf;

});