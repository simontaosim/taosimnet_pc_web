class MerkleTreeNode {
  constructor(val, parent, leftNode, rightNode, isLeaf=false) {
    this.val = val;
    this.parentNode = null;
    this.leftNode = null;
    this.rightNode = null;
    this.isLeaf = isLeaf;
    this.isRoot = null;
    this.level = 1;
  }
}

export default MerkleTreeNode;
