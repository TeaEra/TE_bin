define(function (require, exports, module) {

	/**
	 * Path Sum
	 */
	
	'use strict';

	/**
	 * Definition for a binary tree node.
	 * function TreeNode(val) {
	 *     this.val = val;
	 *     this.left = this.right = null;
	 * }
	 */
	/**
	 * @param {TreeNode} root
	 * @param {number} sum
	 * @return {boolean}
	 */
	var hasPathSum = function(root, sum) {
		if (!root) {
			return false;
		}
	    var 
	    	val = root.val,
	    	isLeaf = !root.left && !root.right;
	    if (isLeaf) {
	    	return sum - val === 0;
	    }
	    else {
	    	return hasPathSum(root.left, sum-val) || hasPathSum(root.right, sum-val);
	    }
	};

	module.exports = hasPathSum;

});