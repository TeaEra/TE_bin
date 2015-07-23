define(function (require, exports, module) {

    /**
     * Rotate Array
     */

    'use strict';

    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    var rotate = function(nums, k) {
        if (k === 0) {
            // Pass;
            return;
        }
        var size = nums.length;
        if (k >= size) {
            k = k % size;
        }
        var i = 0;
        for (i=0; i<k; ++i) {
            nums.unshift(nums.pop());
        }
    };

    module.exports = rotate;

});
