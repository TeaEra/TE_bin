define(function (require, exports, module) {

	/**
	 * Best Time to Buy and Sell Stock II
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
		var profit = 0,
			i = 0;
		for (i=1; i<size; ++i) {
			profit += Math.max(prices[i] - prices[i-1], 0);
		}
		return profit;
	};

	module.exports = maxProfit;

    /**
     * TODO: ???
     */

});