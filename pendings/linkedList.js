class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function arrayToLinkedList(arr) {
  if (arr.length === 0) {
    return null;
  }

  const head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
}

function printLinkedList(head) {
  let current = head;
  const result = [];

  while (current !== null) {
    result.push(current.value);
    current = current.next;
  }

  console.log(result.join(" -> "));
}

const array = [1, 2, 3, 4, 5];
const linkedListHead = arrayToLinkedList(array);
printLinkedList(linkedListHead); // Output: 1 -> 2 -> 3 -> 4 -> 5
