class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}


function reverseLinkedList(value){
    
}





function printLinkedList(head) {
    let current = head;
    let result = "";
    while (current !== null) {
        result += current.value + (current.next ? " -> " : "");
        current = current.next;
    }
    console.log(result);
}

// Create linked list: 1 -> 2 -> 3 -> 4 -> 5
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log("Original Linked List:");
printLinkedList(head);


// let reversedHead = reverseLinkedList(head);

// console.log("Reversed Linked List:");
// printLinkedList(reversedHead);
