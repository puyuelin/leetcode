/**
 * 23. 合并K个升序链表
 * 给你一个链表数组，每个链表都已经按升序排列。
 * 请你将所有链表合并到一个升序链表中，返回合并后的链表。
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const length = lists.length;
  if (length === 0) return null;
  if (length === 1) return lists[0];

  let arr = [];
  for (let i = 0; i < length; i++) {
    while (lists[i]) {
      arr.push(lists[i].val);
      lists[i] = lists[i].next;
    }
  }
  arr.sort((a, b) => a - b);
  let list = new ListNode();
  let current = list;
  for (let i = 0; i < arr.length; i++) {
    let node = new ListNode(arr[i]);
    current.next = node;
    current = current.next;
  }
  return list.next;
};

const lists = [{
    val: 1,
    next: {
      val: 4,
      next: {
        val: 5,
        next: null
      }
    }
  },
  {
    val: 1,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null
      }
    }
  },
  {
    val: 2,
    next: {
      val: 6,
      next: null
    }
  }
];
console.log(mergeKLists(lists)); // 1->1->2->3->4->4->5->6