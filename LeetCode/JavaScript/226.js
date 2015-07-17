/**
 * Invert Binary Tree
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) {
		return null;
	}
	var
		left = root.left,
		right = root.right,
		left = invertTree(left),
		right = invertTree(right),
		a = left,
		left = right,
		right = a;
	root.left = left;
	root.right = right;
	return root;
};