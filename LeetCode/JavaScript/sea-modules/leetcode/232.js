define(function (require, exports, module) {

	/**
	 * Implement Queue using Stacks
	 */

	'use strict';

	/**
	 * @constructor
	 */
	var Queue = function() {
	    this.arr = [];
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
	    if (this.arr.length === 0) {
			// Pass;
			return;
		}
		this.arr.shift();
	};

	/**
	 * @returns {number}
	 */
	Queue.prototype.peek = function() {
	    if (this.arr.length === 0) {
			return null;
		}
		return this.arr[0];
	};

	/**
	 * @returns {boolean}
	 */
	Queue.prototype.empty = function() {
	    if (this.arr.length === 0) {
			return true;
		}
		return false;
	};

});