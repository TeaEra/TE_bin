define(function (require, exports, module) {

	/**
	 * Set Matrix Zeroes
	 */
	
	'use strict';

	/**
	 * @param {number[][]} matrix
	 * @return {void} Do not return anything, modify matrix in-place instead.
	 */
	var setZeroes = function(matrix) {
	    var rows = matrix.length;
	    if (rows === 0) {
	    	return;
	    }
	    var cols = matrix[0].length;
	    if (cols === 0) {
	    	return;
	    }
	    var i=0,
	    	j=0,
	    	rowArr = [],
	    	colArr = [];
	    for (i=0; i<rows; ++i) {
	    	for (j=0; j<cols; ++j) {
	    		if (matrix[i][j] === 0) {
	    			rowArr.push(i);
	    			colArr.push(j);
	    		}
	    	}
	    }
	    for (i=0; i<rowArr.length; ++i) {
	    	for (j=0; j<cols; ++j) {
	    		matrix[rowArr[i]][j] = 0;
	    	}
	    }
	    for (i=0; i<rows; ++i) {
	    	for (j=0; j<colArr.length; ++j) {
	    		matrix[i][colArr[j]] = 0;
	    	}
	    }
	};

});