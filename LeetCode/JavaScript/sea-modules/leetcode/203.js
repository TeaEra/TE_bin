/**
 * Remove Linked List Elements 
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (!head) {
		return null;
	}
	if (!head.next) {
		return head.val === val ? null : head;
	}
	var
		out = new ListNode(-1),
		curr = out,
		temp = head;
	while (temp) {
		if (temp.val != val) {
			curr.next = temp;
			curr = curr.next;
		}
		temp = temp.next;
	}
	return out.next;
};