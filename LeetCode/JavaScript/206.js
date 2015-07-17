/**
 * Reverse Linked List 
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head) {
		return null;
	}
	if (!head.next) {
		return head;
	}
	var 
		pre = head,
		next = head.next;
	pre.next = null;
	while (next) {
		var
			temp = next.next;
		next.next = pre;
		pre = next;
		next = temp;
	}
	return pre;
};