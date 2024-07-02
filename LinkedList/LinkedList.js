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

    prepend(val){
        const node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    shift(){
        if(!this.head){
            return undefined;
        } else {
            let temp = this.head;
            this.head = temp.next;
            this.size --;
        }
    }

    getIndex(index){
        if(index < 0 || index > this.size){
            console.log("give proper index value");
            return null;
        }
        let count = 0;
        let curr = this.head;
        while(count != index){
            curr = curr.next;
            count++;
        }
        // console.log(curr.val);
        return curr
    }

    set(index, value){
        const node = this.getIndex(index);
        if(node){
            node.val = value;
            return true;
        }
        return false;
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
// list.prepend(5);
// list.pop();
// list.shift();
list.set(2,60);
list.print();
// console.log(list.getSize());




