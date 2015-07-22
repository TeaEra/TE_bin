define(function (require, exports, module) {

	/**
	 * Min Stack
	 */

	'use strict';

	/**
	 * @constructor
	 */
	var MinStack = function() {
		this.arr = [];
	};

	/**
	 * @param {number} x
	 * @returns {void}
	 */
	MinStack.prototype.push = function(x) {
		this.arr.push(x);
	};

	/**
	 * @returns {void}
	 */
	MinStack.prototype.pop = function() {
		if (this.arr.length === 0) {
			// Pass;
			return;
		}
		this.arr.pop();
	};

	/**
	 * @returns {number}
	 */
	MinStack.prototype.top = function() {
		var len = this.arr.length;
		if (len === 0) {
			return null;
		}
		return this.arr[len-1];
	};

	/**
	 * @returns {number}
	 */
	MinStack.prototype.getMin = function() {
		var len = this.arr.length;
		if (len === 0) {
			return null;
		}
		var 
			min = this.arr[0],
			i = 0;
		for (i=1; i<len; ++i) {
			if (this.arr[i] < min) {
				min = this.arr[i];
			}
		}
		return min;
	};

});