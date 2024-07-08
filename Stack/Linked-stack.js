// Implement a stack using a linked list and perform push, pop, and peek operations.

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    // Push operation
    push(value) {
        const newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }
    // Pop operation
    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        const poppedNode = this.top;
        this.top = this.top.next;
        this.size--;
        return poppedNode.value;
    }
    // Peek operation
    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.top.value;
    }

    // Check if the stack is empty
    isEmpty() {
        return this.size === 0;
    }

    // Get the size of the stack
    getSize() {
        return this.size;
    }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek());  // Output: 30
console.log(stack.pop());   // Output: 30
console.log(stack.peek());  // Output: 20
console.log(stack.pop());   // Output: 20
console.log(stack.peek());  // Output: 10
console.log(stack.pop());   // Output: 10

console.log(stack.isEmpty()); // Output: true

