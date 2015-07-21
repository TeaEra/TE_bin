define(function (require, exports, module) {

	/**
	 * Number of 1 Bits
	 */
	
	'use strict';

	/**
	 * @param {number} n - a positive integer
	 * @return {number}
	 */
	var hammingWeight = function(n) {
	    if (n <= 0) {
	    	return 0;
	    }
	    if (n === 1) {
	    	return 1;
	    }
	    var result = parseInt(n / 2),
	    	rest = n % 2;
	    return rest + hammingWeight(result);
	};

	module.exports = hammingWeight;

});