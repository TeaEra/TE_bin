define(function (require, exports, module) {

    /**
     * Find Peak Element
     */

    'use strict';

    /**
     * @param {number[]} nums
     * @return {number}
     */
    var findPeakElement = function(nums) {
        var size = nums.length;
        if (size === 0) {
            return -1;
        }
        if (size === 1) {
            return 0;
        }
        var idx = -1;
        for (var i=0; i<size; ++i) {
            if (i === 0) {
                if (nums[i] > nums[i+1]) {
                    return i;
                }
            }
            else if (i === size-1) {
                if (nums[i] > nums[i-1]) {
                    return i;
                }
            }
            else {
                if (nums[i] > nums[i-1] && nums[i] > nums[i+1]) {
                    return i;
                }
            }
        }
        return idx;
    };

    module.exports = findPeakElement;

});
