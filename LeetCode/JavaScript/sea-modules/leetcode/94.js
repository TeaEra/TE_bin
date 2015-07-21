define(function (require, exports, module) {

	/**
	 * Binary Tree Inorder Traversal
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
	 * @return {number[]}
	 */
	var inorderTraversal = function(root) {
		var res = [];
	    if (!root) {
	    	return res;
	    }
	    var left = root.left,
	    	right = root.right,
	    	leftArr = inorderTraversal(left),
	    	rightArr = inorderTraversal(right);
	    res.push(root.val);
	    return leftArr.concat(res).concat(rightArr);
	};

	module.exports = inorderTraversal;

});