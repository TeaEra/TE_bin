define(function (require, exports, module) {

    /**
     * Maximum Subarray
     */

    'use strict';

    /**
     * @param {number[]} nums
     * @return {number}
     */
    var maxSubArray = function(nums) {
        // TODO: check array;
        if (!nums) {
            return 0;
        }
        var
            size = nums.length;
        if (size === 0) {
            return 0;
        }
        var
            localMax = nums[0]
            globalMax = localMax;
        for (var i=1; i<size; ++i) {
            var
                curr = nums[i],
                currSum = localMax + curr;
            localMax = currSum > curr ? currSum : curr;
            globalMax = localMax > globalMax ? localMax : globalMax;
        }
        return globalMax;
    };

    module.exports = maxSubArray;

});
