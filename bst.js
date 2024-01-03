const Node = require('./node')

class Tree {
  constructor(arr){
    const sorted = [...new Set(arr)].sort((a,b) => a-b)
    this.root = this.buildTree(sorted)
  }

  buildTree(arr){
    if (arr.length === 0) return null;

    const midPoint = Math.floor(arr.length / 2)

    const root = new Node(arr[midPoint])
    root.leftChild = this.buildTree(arr.slice(0,midPoint)),
    root.rightChild = this.buildTree(arr.slice(midPoint + 1))
    return root
  }

  prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };
}

