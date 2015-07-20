/**
 * Happy Number
 */

'use strict';

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if (n <= 0) {
		return false;
	}
	if (n === 1 || n === 7) {
		return true;
	}
	if (n < 10) {
		return false;
	}
	var
		sum = 0;
	while (n) {
		var
			divRes = parseInt(n / 10),
			rest = n % 10;
		sum += rest*rest;
		n = divRes;
	}
	return isHappy(sum);
};