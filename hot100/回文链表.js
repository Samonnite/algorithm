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
var isPalindrome = function (head) {
    let arr = [], cur = head;
    // 转成数组
    while (cur) {
        arr.push(cur.val);
        cur = cur.next;
    }
    while (head) {
        if (head.val !== arr[arr.length - 1]) return false;
        arr.pop();
        head = head.next;
    }
    return true;
};

// 快慢指针 空间复杂度O(1)
var isPalindromeRe = function (head) {
    let fast = head;
    let slow = head;

    while(fast.next && fast.next.next) {
        fast = fast.next.next;
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

let reverse = function(head) {
    if (!head || !head.next) return head;
    let pre = null;
    let cur = head;
    while(cur) {
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
}
