/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// 暴力解法
// 对于链表 A 的每个节点，都去链表 B 中遍历一遍找看看有没有相同的节点。
var getIntersectionNodeVo = function (headA, headB) {
    if (!headA || !headB) return null;
    let pA = headA;
    while (pA) {
        let pB = headB;

        while (pB) {
            if (pA === pB) return pA;
            pB = pB.next;
        }
        pA = pA.next;
    }
}

// 双指针
var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) return null;
    let pA = headA, pB = headB;
    while (pA !== pB) {
        pA = pA ? pA.next : headB;
        pB = pB ? pB.next : headA;
    }
    return pA
};