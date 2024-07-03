// Implement a circular queue with a fixed size. Include methods for enqueue, dequeue, peek, isFull, and isEmpty.

class CircularQueue {
  constructor(size) {
    this.queue = new Array(size);
    this.front = -1;
    this.rear = -1;
    this.size = size;
  }

  // Add an element to the end of the queue
  enqueue(element) {
    if (this.isFull()) {
      return "Queue is full";
    }

    if (this.isEmpty()) {
      this.front = 0;
    }

    this.rear = (this.rear + 1) % this.size;
    this.queue[this.rear] = element;
  }

  // Remove and return the element from the front of the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }

    const element = this.queue[this.front];

    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.size;
    }

    return element;
  }

  // Return the element at the front of the queue without removing it
  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.queue[this.front];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.front === -1;
  }

  // Check if the queue is full
  isFull() {
    return (this.rear + 1) % this.size === this.front;
  }
}

// Example usage
const circularQueue = new CircularQueue(3);
circularQueue.enqueue(1);
circularQueue.enqueue(2);
circularQueue.enqueue(3);
console.log(circularQueue.isFull()); // Output: true
console.log(circularQueue.dequeue()); // Output: 1
console.log(circularQueue.enqueue(4)); // Successfully enqueued
console.log(circularQueue.peek()); // Output: 2
