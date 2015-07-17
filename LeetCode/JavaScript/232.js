/**
 * Implement Queue using Stacks
 */

'use strict';

/**
 * @constructor
 */
var Queue = function() {
    var 
		arr = [],
		size = arr.length;
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
    this.arr.push(x);
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
    if (this.size === 0) {
		// Pass;
	}
	this.arr.shift();
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
    if (this.size === 0) {
		return null;
	}
	return this.arr[0];
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
    if (this.size === 0) {
		return true;
	}
	return false;
};