// Implement a stack using an array and perform push, pop, and peek operations

class Stack {
    constructor() {
      this.items = [];
    }
    // Push operation to add an element to the stack
    push(element) {
      this.items.push(element);
    }
    // Pop operation to remove and return the top element from the stack
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items.pop();
    }
    // Peek operation to view the top element without removing it
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items[this.items.length - 1];
    } 
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
    // Get the size of the stack
    size() {
      return this.items.length;
    }
    // Print all the elements in the stack
    print() {
      console.log(this.items.toString());
    }
  }
  
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  stack.push(30);
  console.log(stack.peek()); // Output: 30
  console.log(stack.pop());  // Output: 30
  console.log(stack.peek()); // Output: 20
  stack.print();             // Output: 10,20
  