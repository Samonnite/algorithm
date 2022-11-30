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
var detectCycle = function (head) {
    let slow = head;
    let fast = head;

    while(fast) {
        if (fast.next === null) {
            return null;
        }
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            fast = head;
            while(fast !== slow) {
                slow = slow.next;
                fast = fast.next
            }
            return slow;
        }
    }
    return null;
}