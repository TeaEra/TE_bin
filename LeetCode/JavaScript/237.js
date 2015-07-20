/**
 * Delete Node in a Linked List 
 */

'use strict';

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
	if (!node) {
		return;
	}
	var next = node.next;
	if (!next) {
		return;
	}
	node.val = next.val;
	node.next = next.next;
};