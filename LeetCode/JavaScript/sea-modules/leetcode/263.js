define(function (require, exports, module) {

    /**
     * Ugly Number
     */

    'use strict';

    /**
     * @param {number} num
     * @return {boolean}
     */
    var isUgly = function(num) {
        // TODO: check number;
        if (num === 0) {
            return false;
        }
        if (num === 1 || num === 2 || num === 3 || num === 5) {
            return true;
        }
        if (num % 5 === 0) {
            return isUgly(num / 5);
        }
        if (num % 3 === 0) {
            return isUgly(num / 3);
        }
        if (num % 2 === 0) {
            return isUgly(num / 2);
        }
        return false;
    };

    module.exports = isUgly;

});
