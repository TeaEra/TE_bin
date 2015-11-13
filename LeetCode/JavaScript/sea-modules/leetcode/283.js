define(function (require, exports, module) {

    /**
     * Move Zeroes
     */

    'use strict';

    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    var moveZeroes = function(nums) {
        if (!nums) {
            return;
        }
        var
            size = nums.length;
        if (size === 1) {
            return;
        }
        var
            zeroArr = [];
        for (var i=0; i<size; ++i) {
            if (nums[i] === 0) {
                zeroArr.push(i);
            }
            else {
                var
                    numsOfZero = zeroArr.length;
                if (numsOfZero > 0) {
                    var
                        queueTop = zeroArr.shift();
                    nums[queueTop] = nums[i];
                    nums[i] = 0;
                    zeroArr.push(i);
                }
            }
        }
    };

    module.exports = moveZeroes;

});
