/**
 * Balanced Binary Tree
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (!root) {
		return true;
	}
	var
		left = root.left,
		right = root.right;
	if (!left && !right) {
		return true;
	}
};