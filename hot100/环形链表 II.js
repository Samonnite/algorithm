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
    while (fast) {
        if (fast.next === null) { // fast.next走出链表了，说明无环
            return null;
        }
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            fast = head; // 首次相遇，让快指针回到节点
            while (true) { // 开启循环，让快慢指针相遇
                if (slow === fast) { // 相遇，在入环处
                    return slow;
                }
                slow = slow.next;
                fast = fast.next;
            }
        }
    }
    return null;
};