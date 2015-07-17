/**
 * Power of Two 
 */

'use strict';

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
	if (n <= 0) {
		return false;
	}
	var num = n;
	if (num <= 2) {
		return true;
	}
	var
		intPart = parseInt(num / 2),
		restPart = num % 2;
	if (restPart !== 0) {
		return false;
	}
	return isPowerOfTwo(intPart);
};