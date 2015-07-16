/**
 * Minimum Depth of Binary Tree 
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
 * @return {number}
 */
var minDepth = function(root) {
	if (!root) {
		return 0;
	}
	if (!root.left && !root.right) {
		return 1;
	}
	var
		left = root.left,
		right = root.rigth,
		isLeftLeaf = left && !left.left && !left.right,
		isRightLeaf = right && !right.left && right.right;
	if (isLeftLeaf || isRightLeaf) {
		return 2;
	}
	return 2 + Math.min(minDepth(left), minDepth(right));
};