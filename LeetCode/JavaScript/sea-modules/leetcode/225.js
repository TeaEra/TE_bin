define(function (require, exports, module) {

	/**
	 * Implement Stack using Queues
	 */
	
	'use strict';

	/**
	 * @constructor
	 */
	var Stack = function() {
	    this.arr = [];
	};

	/**
	 * @param {number} x
	 * @returns {void}
	 */
	Stack.prototype.push = function(x) {
	    this.arr.push(x);
	};

	/**
	 * @returns {void}
	 */
	Stack.prototype.pop = function() {
		if (this.arr.length === 0) {
			// Pass;
			return;
		}
	    this.arr.pop();
	};

	/**
	 * @returns {number}
	 */
	Stack.prototype.top = function() {
		var len = this.arr.length;
	    if (len === 0) {
	    	return null;
	    }
	    return this.arr[len - 1];
	};

	/**
	 * @returns {boolean}
	 */
	Stack.prototype.empty = function() {
	    if (this.arr.length === 0) {
	    	return true;
	    }
	    return false;
	};

});