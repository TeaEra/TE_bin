define(function (require, exports, module) {

    /**
     * Permutations
     */

    'use strict';

    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    var permute = function(nums) {
        var size = nums.length;
        if (size === 0) {
            return [[]];
        }
        if (size === 1) {
            return [nums];
        }
        var setNums = new Set(nums),
            resArr = [];
        setNums.forEach(function (value) {
            var
                idx = nums.indexOf(value),
                tmpArr = [];
            for (var i=0; i<size; ++i) {
                i !== idx ? tmpArr.push(nums[i]) : '';
            }
            var lastArr = permute(tmpArr);
            for (var i=0; i<lastArr.length; ++i) {
                resArr.push([value].concat(lastArr[i]));
            }
        });
        return resArr;
    };

    module.exports = permute;

    /**
     * Actually, I have already considered there may be duplicate elements in array,
     * so the codes could still be accepted in 47;
     */

});
