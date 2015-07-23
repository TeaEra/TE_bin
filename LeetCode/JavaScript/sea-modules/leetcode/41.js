define(function (require, exports, module) {

    /**
     * First Missing Positive
     */

    'use strict';

    /**
     * @param {number[]} nums
     * @return {number}
     */
    var firstMissingPositive = function(nums) {
        var size = nums.length;
        if (size === 0) {
            return 1;
        }
        var sum = 0,
            i = 0,
            min = nums[0],
            max = nums[0];
        for (i=0; i<size; ++i) {
            if (nums[i] > 0) {
                sum += nums[i];
            }
            if (i !== 0) {
                if (nums[i] < min) {
                    min = nums[i];
                }
                if (nums[i] > max) {
                    max = nums[i];
                }
            }
        }
        var res = (size+1)*size/2 - sum;
        if (res <= 0) {
            if (min > 1) {
                return 1;
            }
            else {
                return max + 1;
            }
        }
        else if (res > 0) {
            return res;
        }
    };

    module.exports = firstMissingPositive;

});
