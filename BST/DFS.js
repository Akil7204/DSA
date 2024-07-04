// dfs

class Nodde {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class DFS {
  constructor() {
    this.root = null;
  }
  insert(val) {
    const node = new Nodde(val);

    if (!this.root) {
      this.root = node;
      return this.root;
    } else {
      let curr = this.root;
      while (true) {
        if(val === curr.value) return undefined;
        if (val < curr.value) {
          if (!curr.left) {
            curr.left = node;
            return this.root;
          } else {
            curr = curr.left;
          }
        } else {
          if (!curr.right) {
            curr.right = node;
            return this.root;
          } else {
            curr = curr.right;
          }
        }
      }
    }
  }

  preorder(){
    let data = [];
    let curr = this.root;

    function traversal(node){
        data.push(node.value)
        if(node.left) traversal(node.left);
        if(node.right) traversal(node.right);
    }
    traversal(curr);
    return data;
  }
}

const dfs = new DFS();

dfs.insert(18);
dfs.insert(5);
dfs.insert(15);
dfs.insert(23);
dfs.insert(20);
console.log(dfs.preorder());

