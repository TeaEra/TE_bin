define(function (require, exports, module) {

	/**
	 * LRU Cache
	 */

	'use strict';

	/**
	 * @constructor
	 */
	var LRUCache = function(capacity) {
	    this.keys = [];
	    this.values = [];
	    this.limit = capacity;
	};

	/**
	 * @param {number} key
	 * @returns {number}
	 */
	LRUCache.prototype.get = function(key) {
	    var
	    	keys = this.keys,
	    	values = this.values,
	    	idx = keys.indexOf(key);
	    if (idx >= 0) {
	    	var
	    		val = values[idx];
	    	if (idx !== 0) {
	    		keys.splice(idx, 1);
	    		values.splice(idx, 1);
	    		keys.unshift(key);
	    		values.unshift(val);
	    	}
	    	return val;
	    }
	    else {
	    	return -1;
	    }
	};

	/**
	 * @param {number} key
	 * @param {number} value
	 * @returns {void}
	 */
	LRUCache.prototype.set = function(key, value) {
	    var
	    	keys = this.keys,
	    	values = this.values,
	    	limit = this.limit,
	    	size = keys.length,
	    	idx = keys.indexOf(key);
	    if (idx >= 0) {
	    	values[idx] = value;
	    	if (idx !== 0) {
	    		keys.splice(idx, 1);
	    		values.splice(idx, 1);
	    		keys.unshift(key);
	    		values.unshift(value);
	    	}
	    }
	    else {
		    if (size < limit) {
		    	keys.unshift(key);
		    	values.unshift(value);
		    }
		    else {
		    	keys.unshift(key);
		    	values.unshift(value);
		    	keys.pop();
		    	values.pop();
		    }
	    }
	};

	module.exports = LRUCache;

});