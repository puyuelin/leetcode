/**
 * 25. K 个一组翻转链表
 * 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
 * k 是一个正整数，它的值小于或等于链表的长度。
 * 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
 * 进阶：
 * (1) 你可以设计一个只使用常数额外空间的算法来解决此问题吗？
 * (2) 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  const reverse = (head) => {
    let pre = null;
    let curr = head;
    while (curr != null) {
      let next = curr.next;
      curr.next = pre;
      pre = curr;
      curr = next;
    }
    return pre;
  }

  let dummy = new ListNode(0);
  dummy.next = head;

  let pre = dummy;
  let end = dummy;

  while (end.next != null) {
    for (let i = 0; i < k && end != null; i++) end = end.next;
    if (end == null) break;
    let start = pre.next;
    let next = end.next;
    end.next = null;
    pre.next = reverse(start);
    start.next = next;
    pre = start;

    end = pre;
  }
  return dummy.next;
};

const head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null
        }
      }
    }
  }
};
const k = 3;
console.log(reverseKGroup(head, k));