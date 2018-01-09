//需要验证几个重要的加密库
import {} from './hash.js';
import MerkleTreeNode from './MerkleTreeNode.js';
class MerkleTree {
  constructor() {
    this.hashTree = [];
    this.treeLevel = 0;
    this.hashRoot = null;
    this.nodeCount = 0;
  }
  findNumLastNode(hashTree, lastNum, isLeaf){
    //从某个位置倒数第几个叶子节点？
    let findRlt = {};
    let count = 0
    for (let i = hashTree.length-1; i >= 0; i--) {
      if (hashTree[i].isLeaf === isLeaf) {
        count++;
        if (count === lastNum) {
          findRlt =  hashTree[i];
          break;
        }
      }
    }
    return findRlt;
  }
  findLastNode(){
    return this.hashTree[this.hashTree.length-1];
  }
  findRootNode(){
    let rlt = {}
    for (var i = 0; i < this.hashTree.length; i++) {
      if (this.hashTree[i].isRoot) {
        rlt = this.hashTree[i]
        break;
      }
    }
    return rlt;
  }
  findRightNode(node){
    let rlt = {}
    for (var i = 0; i < this.hashTree.length; i++) {
      if (node.rightNode === this.hashTree[i].val) {
        rlt = this.hashTree[i];
        break;
      }
    }
    return rlt;
  }
  findLeftNode(node){
    let rlt = {}
    for (var i = 0; i < this.hashTree.length; i++) {
      if (node.leftNode === this.hashTree[i].val) {
        rlt = this.hashTree[i];
        break;
      }
    }
    return rlt;
  }
  findParentNode(node){
    let rlt = {}
    for (var i = 0; i < this.hashTree.length; i++) {
      if (node.parentNode === this.hashTree[i].val) {
        rlt = this.hashTree[i];
        break;
      }
    }
    return rlt;
  }
  findRightestNode(root_node){
    //find the rightest leaf node
    let rightestNode = root_node;
    while (!rightestNode.rightNode) {
      rightestNode = this.findRightNode(root_node);
    }
    return rightestNode;
  }
  findLevelNodes(level){
    let nodes = [];
    for (var i = 0; i < this.hashTree.length; i++) {
      if (this.hashTree[i].level === level) {
        nodes.push(this.hashTree[i]);

      }
    }
    return nodes;
  }
  insertLeftNode(new_node){
    new_node.isRoot = false;
    let new_parent_val = (new_node.val+"上级"+this.nodeCount);
    let new_parent_node = new MerkleTreeNode(new_parent_val, null, null, null, false);
    new_node.parentNode = new_parent_val;
    new_parent_node.leftNode = new_node.val;
    new_parent_node.rightNode = null;
    new_parent_node.parentNode = null;
    new_parent_node.level = 2;
    let superNodes = this.findLevelNodes(new_parent_node.level);
    if (superNodes.length === 0) {
      new_parent_node.isRoot = true;
    }
    new_node.parentNode = new_parent_node.val;
    this.hashTree.push(new_node);
    this.hashTree.push(new_parent_node);
    return 1;
  }

  addContent(content){
    //hash加密的一个数据,并且加入一课梅克尔树
    console.log('=======================');
    console.log(content);
    let new_hashed_val = (content);
    let new_node = new MerkleTreeNode(new_hashed_val, null, null, null, true);
    new_node.isRoot = false;
    if (this.hashTree.length === 0) {
      this.insertLeftNode(new_node);
      return 1;
    }else{
      let last_node = this.findLastNode();
      if (last_node.isLeaf) {
        //若是最后一个节点是叶子节点，那么树做插入操作
        this.insertLeftNode(new_node);
        return 1;
      }else {
        //若是最后一个节点不是叶子节点，那么树的上级更新操作
        console.log(last_node);

        last_node.val = last_node.leftNode+new_node.val;
        new_node.parentNode = last_node.val;
        last_node.rightNode = new_node.val;
        this.findLeftNode(last_node).parentNode = last_node.val;


        this.hashTree.push(new_node);
        this.treeLevel++;
        console.log('上了一级', this.treeLevel);
        return 1;
      }


    }





  }
  minusContent(content){

  }
  getLevel(){
    return this.treeLevel;
  }

  getRoot(){
    if (this.hashTree.length === 0) {
      return 'NO CONTENT';
    }
    return this.hashTree[this.hashTree.length-1];
  }
  getTree(){
    return this.hashTree;
  }
  checkConent(content){
    return false;
  }
}

export default MerkleTree
