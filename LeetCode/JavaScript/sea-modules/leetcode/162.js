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
        // TODO: ???
    };

    module.exports = findPeakElement;

});