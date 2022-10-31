/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = (head) => {
  let set = new Set()
  let pre = head
  while (pre) {
    // 同一节点再次碰到 说明有环
    if (set.has(pre)) return true
    set.add(pre)
    pre = pre.next
  }
  return false
}

// 最优解
var hasCycle = (head) => {
  let fast = head;
  let slow = head;
  while (fast) {
    if (fast.next == null) return false;
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) return true;
  }
  return false;
}
