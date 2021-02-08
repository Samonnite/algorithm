/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = (head) => {
  let set = new Set()
  let pre = head
  while(pre) {
    // 同一节点再次碰到 说明有环
    if (set.has(pre)) return true
    set.add(pre)
    pre = pre.next
  }
  return false
}