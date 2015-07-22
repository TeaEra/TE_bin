define(function (require, exports, module) {

	/**
	 * Pascal's Triangle II 
	 */
	
	'use strict';

	/**
	 * @param {number} rowIndex
	 * @return {number[]}
	 */
	var getRow = function(rowIndex) {
	    if (rowIndex === 0) {
	    	return [1];
	    }
	    if (rowIndex === 1) {
	    	return [1,1];
	    }
	    var 
	    	arr = getRow(rowIndex - 1),
	    	size = arr.length,
	    	i = 0;
	    for (i=0; i<size-1; ++i) {
	    	arr[i] = arr[i] + arr[i+1];
	    }
	    return [1].concat(arr);
	};

	module.exports = getRow;

});