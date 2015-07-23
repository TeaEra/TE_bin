define(function (require, exports, module) {

    /**
    * Factorial Trailing Zeroes
    */

    'use strict';

    /**
    * @param {number} n
    * @return {number}
    */
    var trailingZeroes = function(n) {
        if (n === 0) {
            return 0;
        }
        var res = parseInt(n / 5);
        return res + trailingZeroes(res);
    };

    module.exports = trailingZeroes;

    /**
     * TODO: why???
     */

});
