define(function (require, exports, module) {

    /**
     * Best Time to Buy and Sell Stock with Cooldown
     */

    'use strict';

    /**
     * @param {number[]} prices
     * @return {number}
     */
    var maxProfit = function(prices) {
        // TODO: check array;
        if (!prices) {
            return 0;
        }
        var
            size = prices.length;
        if (size === 0 || size === 1) {
            return 0;
        }
    };

    module.exports = maxProfit;

});
