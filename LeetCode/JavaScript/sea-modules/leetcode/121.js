define(function (require, exports, module) {

    /**
     * Best Time to Buy and Sell Stock
     */
    
    'use strict';

    /**
     * @param {number[]} prices
     * @return {number}
     */
    var maxProfit = function(prices) {
        var size = prices.length;
        if (size <= 1) {
            return 0;
        }
        var i = 0,
            profit = 0,
            res = 0;
        for (i=1; i<size; ++i) {
            profit += prices[i] - prices[i-1];
            if (profit < 0) {
                profit = 0;
            }
            if (profit > res) {
                res = profit;
            }
        }
        return res;
    };

    module.exports = maxProfit;

    /**
     * TODO: ???
     */

});