define(function (require, exports, module) {

    /**
     * Nim Game
     */

    'use strict';

    /**
     * @param {number} n
     * @return {boolean}
     */
    var canWinNim = function(n) {
        if (n === 0) {
            return false;
        }
        var
            remainder = n % 4;
        if (remainder === 0) {
            return false;
        }
        return true;
    };

    module.exports = canWinNim;

});
