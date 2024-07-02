class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    getSize(){
        return this.size
    }

    insert(val){
        const node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node
        }
        this.size++;
    }

    pop(){
        let curr = this.head;
        let newNode = curr
        while(curr.next){
            newNode = curr;
            curr = curr.next;
        }
        this.tail = newNode;
        this.tail.next = null;
        this.size --;
        if(this.size === 0){
            this.head = null;
            this.tail = null;
        }
        return curr.val
    }

    print(){
        let curr = this.head;
        while(curr){
            console.log(curr.val);
            curr = curr.next
        }
        
    }
}

const list = new LinkedList();

list.insert(10);
list.insert(20);
list.insert(30);
list.insert(40);
list.print();
console.log(list.getSize());
list.pop();
list.print()




