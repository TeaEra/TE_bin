define(function (require, exports, module) {

    /**
     * Missing Number
     */

    'use strict';

    /**
     * @param {number[]} nums
     * @return {number}
     */
    var missingNumber = function(nums) {
        // TODO: check array;
        var
            size = nums.length;
        if (size === 0) {
            return 0;
        }
        var
            sum = 0;
        for (var i=0; i<size; ++i) {
            sum += nums[i];
        }
        return size*(size+1)/2 - sum;
    };

    module.exports = missingNumber;

});
