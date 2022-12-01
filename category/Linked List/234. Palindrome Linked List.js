/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 1. from slow & fast point get middle Linked
// 2. reverse second half Linked List
// 3. To compare first half & second half value， Is it the same


var isPalindrome = function (head) {
    let fast = head;
    let slow = head;

    while(fast.next && fast.next.next) {
        fast = fats.next.next;
        slow = slow.next;
    }
    let rev = reverse(slow.next);

    while(rev) {
        if (rev.val !== head.val) return false;
        rev = rev.next;
        head = head.next;
    }
    return true;
}

const reverse = (head) => {
    let pre = null;
    let cur = head;
    while(cur) {
        const next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
}