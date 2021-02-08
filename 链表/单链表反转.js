let reverseList = function(head) {
  let reverse = (pre, cur) => {
    if (!cur) return pre
    let next = cur.next
    cur.next = pre
    reverse(cur, next)
  }
  reverse(null, head)
}

let reverseList = function(head) {
  let pre = null
  let cur = head
  while(cur) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
}