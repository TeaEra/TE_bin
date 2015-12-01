define(function (require, exports, module) {

    /**
     * Bitwise AND of Numbers Range
     */

    'use strict';

    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    var rangeBitwiseAnd = function(m, n) {
        var
            p = 0;
        while (m !== n) {
            m >>= 1;
            n >>= 1;
            p++;
        }
        return m << p;
    };

    module.exports = rangeBitwiseAnd;

});
