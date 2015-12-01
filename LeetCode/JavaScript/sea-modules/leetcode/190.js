define(function (require, exports, module) {

    /**
     * Reverse Bits
     */

    'use strict';

    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    var reverseBits = function(n) {
        // TODO:
        if (n <= 0) {
            return 0;
        }
        var
            bitArr = [];
        while (n > 0) {
            var
                res = Math.floor(n / 2),
                remainder = n % 2;
            bitArr.push(remainder);
            n = res;
        }
        var
            size = bitArr.length,
            thres = 32;
        if (size < thres) {
            for (var i=0; i<thres-size; ++i) {
                bitArr.push(0);
            }
        }
        var
            newNum = parseInt(bitArr.join(''), 2);
        return newNum;
    };

    module.exports = reverseBits;

});
