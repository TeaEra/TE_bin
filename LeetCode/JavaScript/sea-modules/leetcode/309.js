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
        if (size < 2) {
            return 0;
        }
        var
            sell = 0,
            buy = 0,
            prev_sell = -prices[0],
            prev_buy = 0,
            i = 0;
        for (i=0; i<size; ++i) {
            var price = prices[i];
            prev_buy = buy;
            buy = Math.max(prev_sell - price, prev_buy);
            prev_sell = sell;
            sell = Math.max(prev_buy + price, prev_sell);
        }
        return sell;
    };

    module.exports = maxProfit;

});
