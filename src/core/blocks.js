import NodeRSA from 'node-rsa';

function newBlock(consume, content){


}

export function initBlock(){
  let initBlockKey = new NodeRSA({b:512});
  hashValue = initBlockKey.encrypt((new Date()).getTime(), 'base64');

  let crypto = require('crypto');
  let initBlock = {
    privateKey: initBlockKey.exportKey('private'),
    lastPublicKey: null,
    publicKey: initBlockKey.exportKey('public'),
    hashTimeValue,
    lastBlock: null,
    status: 0,
    confirmed: 1,
    vote: 1,
    voteUsers:[],
    volume: 1,
    count: 1,
    createdAt: (new Date()).getTime(),
  }
    return initBlock;
}

function getBlock(user){
  return consume;
}

function confirmBlock(block){

}

function writeBlock(content){

  return content;
}
