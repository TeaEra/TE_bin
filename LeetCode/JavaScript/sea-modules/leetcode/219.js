/**
 * Contains Duplicate II
 */

'use strict';

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
	var size = nums.length;
	if (size < 2 || k === 0) {
		return false;
	}
	if (size === 2 || k >= size) {
		return new Set(nums).size !== nums.length;
	}
	for (var i=0; i<=size-k; ++i) {
		var tempArr = nums.slice(i, i+k+1);
		if (new Set(tempArr).size !== tempArr.length) {
			return true;
		}
	}
	return false;
};