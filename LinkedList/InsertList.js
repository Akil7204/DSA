class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
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
    }

    get(index){
        let curr = this.head;

        if(index < 0 || index > this.tail){
            return undefined;
        } 
        let count = 1
        while(index !== count){
            curr = curr.next;
            count++;
        }
        return curr;

    }

    insert(index, value){
        let count = 1;
        let curr = this.head;
        while(count !== index){
            curr = curr.next;
            count++;
        }
        curr.val = value
        
    }

    print(){
        let curr = this.head;
        while(curr){
            console.log(curr.val);
            curr = curr.next;
        }
    }
}

const list = new LinkedList();

list.prepend(10);
list.prepend(20);
list.prepend(30);
list.prepend(40);
list.insert(2, 60);
list.print();
