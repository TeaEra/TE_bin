/**
 * Binary Tree Level Order Traversal II 
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    var
		arr = [];
	if (!root) {
		return arr;
	}
	var
		left = root.left,
		right = root.right;
	if (!left && !right) {
		arr.push([root.val]);
		return arr;
	}
	var
		tempArr = [],
		leftArr = [],
		rightArr = [];
	left ? tempArr.push(left.val) : '';
	right ? tempArr.push(right.val) : '';
	arr.push(tempArr);
	left ? leftArr = levelOrderBottom(left) : '';
	right ? rightArr = levelOrderBottom(right) : '';
	arr.push(leftArr.concat(rightArr));
	return arr.reverse();
};