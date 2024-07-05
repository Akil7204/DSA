// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// //iterative method

// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }
//   insert(val) {
//     const node = new Node(val);
//     if (!this.root) {
//       this.root = node;
//       return this.root;
//     } else {
//       let curr = this.root;
//       while (true) {
//         if (val === curr.val) return undefined;
//         if (val < curr.val) {
//           if (!curr.left) {
//             curr.left = node;
//             return this.root;
//           }
//           curr = curr.left;
//         } else {
//           if (!curr.right) {
//             curr.right = node;
//             return this.root;
//           }
//           curr = curr.right;
//         }
//       }
//     }
//   }

//   search(val) {
//     if (this.root === null) return false;
//     let curr = this.root;
//     while (true) {
//       if (!curr) return false;
//       if (curr.val === val) return true;
//       if (val < curr.val) {
//         curr = curr.left;
//       } else {
//         curr = curr.right;
//       }
//     }
//   }

//   bfs() {
//     if (!this.root) return null;

//     const queue = [];
//     const data = [];
//     let node = this.root;
//     queue.push(node);

//     while (queue.length) {
//       node = queue.shift();
//       data.push(node.val);
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }
//     return data;
//   }
// }

// const bst = new BinarySearchTree();
// bst.insert(20);
// bst.insert(10);
// bst.insert(30);
// bst.insert(12);
// bst.insert(9);
// bst.insert(31);
// bst.insert(28);

// // console.log(bst.search(30));
// console.log(bst.bfs());

class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(){
        this.root = null;
    }
    insert(value){
        const node = new Node(value);
        if(!this.root){
            this.root = node;
            return this.root;
        } else {
            let curr = this.root;
            while(true){
                if(value === curr.val) return undefined;
                if(value < curr.val){
                    if(!curr.left){
                        curr.left = node
                        return this.root;
                    }
                    curr = curr.left;

                } else {

                    if(!curr.right){
                        curr.right = node;
                        return this.root;
                    }
                    curr = curr.right;
                }
            }
        }
    }
    bfs(){
        if(!this.root) return null;
        const queue = [];
        const data= [];

        let node = this.root;
        queue.push(node);
        while(queue.length){

            node = queue.shift();
            data.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }

        return data

    }

    sumEvenNodes(node = this.root){
        
        if(!node){
            return 0;
        }
        let sum = 0;

        if(node.val % 2 === 0){
            sum += node.val
        }

        sum += this.sumEvenNodes(node.left);
        sum += this.sumEvenNodes(node.right);
        return sum;
    }

}



const bst = new BST();
bst.insert(2);
bst.insert(5);
bst.insert(4);
bst.insert(7);
bst.insert(6);
bst.insert(9);
bst.insert(8);

console.log("Sum of even elements:", bst.sumEvenNodes()); // Output: 40
