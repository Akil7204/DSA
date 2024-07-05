class TrieNode {
  constructor() {
    this.children = {};
    this.endword = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  insert(word) {
    let curr = this.root;
    for (let c of word) {
      if (!curr.children[c]) {
        curr.children[c] = new TrieNode();
      }
      curr = curr.children[c];
    }
    curr.endword = true;
  }

  suffix(word) {
    for (let i = 0; i < word.length; i++) {
      let curr = this.root;
      for (let j = i; j < word.length; j++) {
        let c = word[j];
        if (!curr.children[c]) {
          curr.children[c] = new TrieNode();
        }
        curr = curr.children[c];
      }
      curr.endword = true;
    }
  }

  printWord(node = this.root, word = "", result = []) {
    if (node.endword) {
      result.push(word);
    }
    for (let c in node.children) {
      this.printWord(node.children[c], word + c, result);
    }
    return result;
  }

  autoComplete(word) {
    let node = this.root;
    for (let c of word) {
      if (!node.children[c]) {
        return [];
      }
      node = node.children[c];
    }
    let list = [];
    this.printWord(node, word, list);
    return list;
  }
}

const trie = new Trie();

trie.insert("akil");
trie.insert("arun");
trie.suffix("liston")
// console.log(trie.autoComplete('ak'));
console.log(trie.printWord());
