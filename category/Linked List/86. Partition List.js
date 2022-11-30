/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    if (head === null) return null;
    // 初始化哨兵节点 dmy.next 指向 head
    let dmy = new ListNode(-1, head);
    let slow = dmy;
    let fast = null;

    // find last slow.val < x link
    while (slow && slow.next) {
        if (slow.next.val >= x) break;
        slow = slow.next;
    }

    fast = slow;
    while (fast && fast.next) {
        if (fast.next.val < x) {
            // 遇到 fast.next.val < x, 将该节点tmp取出来，放入slow后面
            let tmp = fast.next;
            fast.next = fast.next.next;

            // 将tmp放入slow后面，slow向后移动一位
            tmp.next = slow.next;
            slow.next = tmp;
            slow = slow.next;
        } else {
            fast = fast.next;
        }
    }
    return dmy.next;
};

var partitionRe = function (head, x) {
    let left = new ListNode(null, head);
    let right = new ListNode(null, head);
    let tempLeft = left;
    let tempRight = right;
    let p = head;

    while(p) {
        if (p.val < x) {
            left.next = p;
            left = left.next;
        } else {
            right.next = p;
            right = right.next;
        }
        p = p.next;
    }

    right.next = null;
    left.next = tempRight.next

    return tempLeft.next;
}