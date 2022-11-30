/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
    let prev = null;
    let cur = head;
    while(cur) {
        const next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
};

const recursionReverseList = function(head) {
    const reverse = function (prev, cur) {
        if (cur === null) return prev;
        const next = cur.next;
        cur.next = prev;
        reverse(cur, next)
    }
    reverse(null, head);
}