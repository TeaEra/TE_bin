define(function (require, exports, module) {

	/**
	 * Search a 2D Matrix II
	 */
	
	'use strict';

	/**
	 * @param {number[][]} matrix
	 * @param {number} target
	 * @return {boolean}
	 */
	var searchMatrix = function(matrix, target) {
	    var rows = matrix.length,
	    	cols = matrix[0] ? matrix[0].length : 0;
	    if (rows === 0 || cols === 0) {
	    	return false;
	    }
	    var i = 0,
	    	j = 0,
	    	rowFirst = [],
	    	colFirst = [];
	    for (i=0; i<cols; ++i) {
	    	rowFirst.push(matrix[0][i]);
	    }
	    for (i=0; i<rows; ++i) {
	    	colFirst.push(matrix[i][0]);
	    }
	    var colIdx = 0,
	    	rowIdx = 0;
	    for (i=0; i<rowFirst.length; ++i) {
	    	if (rowFirst[i] === target) {
	    		return true;
	    	}
	    	if (rowFirst[i] < target) {
	    		colIdx = i;
	    	}
	    	else {
	    		if (i === 0) {
	    			return false;
	    		}
	    		else {
		    		colIdx = i - 1;
		    		break;
	    		}
	    	}
	    }
	    for (i=0; i<colFirst.length; ++i) {
	    	if (colFirst[i] === target) {
	    		return true;
	    	}
	    	if (colFirst[i] < target) {
	    		rowIdx = i;
	    	}
	    	else {
	    		rowIdx = i - 1;
	    		break;
	    	}
	    }
	    var isHit = false;
	    for (i=0; i<rows; ++i) {
	    	if (matrix[i][colIdx] === target) {
	    		isHit = true;
	    		return true;
	    	}
	    }
	    for (i=0; i<cols; ++i) {
	    	if (matrix[rowIdx][i] === target) {
	    		isHit = true;
	    		return true;
	    	}
	    }
	    if (!isHit) {
	    	return false;
	    }
	};

	module.exports = searchMatrix;

});