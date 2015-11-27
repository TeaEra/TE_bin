define(function (require, exports, module) {

    /**
     * Longest Increasing Subsequence
     */

    'use strict';

    /**
     * @param {number[]} nums
     * @return {number}
     */
    var lengthOfLIS = function(nums) {
        // TODO: check array;
        if (!nums) {
            return 0;
        }
        var
            size = nums.length;
        if (size < 2) {
            return size;
        }
        var
            lenArr = [0],
            i = 0;
        for (i=1; i<=size; ++i) {
            //
        }
    };

    module.exports = lengthOfLIS;

});
