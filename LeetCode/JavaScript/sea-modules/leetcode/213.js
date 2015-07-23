define(function (require, exports, module) {

    /**
     * House Robber II
     */

    'use strict';

    /**
     * @param {number[]} nums
     * @return {number}
     */
    var rob = function(nums) {
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
        if (size === 3) {
            return Math.max(nums[0], nums[1], nums[2]);
        }
        var i = 0;
        var
            isFirstUsed = false,
            isAvoidFirst = false;
        if (nums[0] > nums[1]) {
            nums[1] = nums[0];
        }
        else if (nums[0] === nums[1]) {
            isAvoidFirst = true;
        }
        for (i=2; i<size; ++i) {
            if (i === 2 && nums[i-2] + nums[i] > nums[i-1]) {
                if (!isAvoidFirst) {
                    isFirstUsed = true;
                }
            }
            nums[i] = Math.max(nums[i-2] + nums[i], nums[i-1]);
        }
        if (isFirstUsed) {
            return Math.max(nums[size-2], nums[size-1] - nums[0]);
        }
        else {
            return nums[size-1];
        }
    };

    module.exports = rob;

});
