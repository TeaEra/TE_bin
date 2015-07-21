define(function (require, exports, module) {

	/**
	 * Excel Sheet Column Number
	 */
	
	'use strict';

	/**
	 * @param {string} s
	 * @return {number}
	 */
	var titleToNumber = function(s) {
	    var res = 0;
	    for (var i=0, size=s.length; i<size; ++i) {
	    	var currInt = s.charCodeAt(i) - 65 + 1;
	    	res = res * 26 + currInt;
	    }
	    return res;
	};

	module.exports = titleToNumber;

});