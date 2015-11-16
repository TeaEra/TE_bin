define(function (require, exports, module) {

	/**
	 * Combinations
	 */

	'use strict';

	/**
	 * @param {number} n
	 * @param {number} k
	 * @return {number[][]}
	 */
	var combine = function(n, k) {
	    if (k === 0) {
	    	return [];
	    }
	    var resArr = [],
	    	i = 0;
	    if (k === 1) {
	    	for (i=0; i<n; ++i) {
	    		resArr.push([i+1]);
	    	}
	    	return resArr;
	    }
	    for (i=0; i<n; ++i) {
	    	var tmpArr = [];
	    	tmpArr.push(n-i);
	    	var j = 0,
	    		restArr = combine(n-i-1, k-1);
	    	for (j=0; j<restArr.length; ++j) {
	    		var eachArr = restArr[j].concat(tmpArr);
	    		resArr.push(eachArr);
	    	}
	    }
	    return resArr;
	};

	module.exports = combine;

});
