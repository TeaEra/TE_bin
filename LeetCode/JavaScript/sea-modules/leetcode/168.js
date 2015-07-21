define(function (require, exports, module) {

	/**
	 * Excel Sheet Column Title
	 */
	
	'use strict';

	/**
	 * @param {number} n
	 * @return {string}
	 */
	var convertToTitle = function(n) {
		if (n <= 0) {
			return '';
		}
	    var temp = n,
	    	arr = [];
	    while (temp > 0) {
	    	var result = parseInt(temp / 26),
	    		rest = temp % 26;
	    	arr.push(rest);
	    	temp = result;
	    }
	    for (var i=0, size=arr.length; i<size; ++i) {
	    	arr[i] = String.fromCharCode(arr[i] + 65 - 1);
	    }
	    return arr.reverse().join('');
	};

	module.exports = convertToTitle;

});