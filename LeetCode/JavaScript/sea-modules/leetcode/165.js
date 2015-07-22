define(function (require, exports, module) {

	/**
	 * Compare Version Numbers
	 */
	
	'use strict';

	/**
	 * @param {string} version1
	 * @param {string} version2
	 * @return {number}
	 */
	var compareVersion = function(version1, version2) {
	    if (!version1 && !version2) {
	    	return 0;
	    }
	    var
	    	arrVer1 = version1.split('.'),
	    	arrVer2 = version2.split('.'),
	    	size1 = arrVer1.length,
	    	size2 = arrVer2.length,
	    	size = Math.min(size1, size2),
	    	i = 0;
	    for (i=0; i<size; ++i) {
	    	var
	    		curr1 = parseInt(arrVer1[i]),
	    		curr2 = parseInt(arrVer2[i]);
	    	if (curr1 > curr2) {
	    		return 1;
	    	}
	    	if (curr1 < curr2) {
	    		return -1;
	    	}
	    }
	    if (size1 > size2) {
	    	if (parseInt(arrVer1[size]) !== 0) {
	    		return 1;
	    	}
	    }
	    if (size1 < size2) {
	    	if (parseInt(arrVer2[size]) !== 0) {
	    		return -1;
	    	}
	    }
		return 0;
	};

	module.exports = compareVersion;

});