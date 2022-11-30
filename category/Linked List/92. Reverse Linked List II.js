/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    const dummy = new ListNode(-1);
    dummy.next = head;

    let pre = dummy;
    // 从虚拟头节点走 left - 1 步，来到 left 节点的前一个节点
    for (let i = 0; i < left - 1; i++) {
        pre = pre.next;
    }

    // 从 pre 再走 right - left + 1 步，来到 right 节点
    let rightNode = pre;
    for (let i = 0; i < right - left + 1; i++) {
        rightNode = rightNode.next;
    }

    // 切断处一个子链表（截取链表）
    let leftNode = pre.next; //保存leftNode
    let cur = rightNode.next; //保存rightNode.next

    // 切断链接
    pre.next = null;
    rightNode.next = null;

    // 反转链表
    reverseList(leftNode);

    // 接回到原来的链表中
    pre.next = rightNode;
    leftNode.next = cur;
    return dummy.next;
};

const reverseList = (head) => {
    let pre = null;
    let cur = head;

    while (cur) {
        const next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
}