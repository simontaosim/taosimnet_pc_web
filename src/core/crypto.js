//需要验证几个重要的加密库
var NodeRSA = require('node-rsa');
var key = new NodeRSA({b: 512});

var text = '发表了第一个区块!';
var encrypted = key.encrypt(text, 'base64');
console.log('encrypted: ', encrypted);
var decrypted = key.decrypt(encrypted, 'utf8');
console.log('decrypted: ', decrypted);
// let sign = key.sign("GIG", 'base64');

// let rlt = key.verify('GIG', sign, 'utf8', 'base64');

// console.log(rlt);
let privateRsa = key.exportKey('private');
console.log(privateRsa);
let newKey = new NodeRSA({b: 512});
// console.log(newKey.importKey(privateRsa, 'private'));
let sign = newKey.sign('GIG', 'base64');
let rlt = key.verify('GIG', sign, 'utf8', 'base64');

console.log(rlt);

//对一段内容进行机密和签名
let newContent = "这是应用中的一段内容"

let newContentKey = new NodeRSA({b:512});

encrypted = newContentKey.encrypt(newContent, 'base64');
console.log('encrypted: ', encrypted);
decrypted = newContentKey.decrypt(encrypted, 'utf8');
console.log('decrypted: ', decrypted);
let contentSign = newContentKey.sign(encrypted, 'base64');
let contentPublicRsa = newContentKey.exportKey('public');
//公钥存入区块
let contentPrivateRsa = newContentKey.exportKey('private');
//私钥存入用户用户

//需要证明这个区块是上一个区块的下一个区块
let blockKey = new NodeRSA({b: 512});
let lastBlockKey = new NodeRSA({b:512});
let base64 = blockKey.encrypted(123, 'base64');
let block = {
  id: 123,
  privateKey: blockKey.exportKey('private'),
  lastPublicKey: lastBlockKey.exportKey('public'),
  base64,
  lastBlock: 122,
}
let lastBlock = {
  id: 122,
  privateKey: lastBlockKey.exportKey('private'),
}
let initBlockKey = new NodeRSA({b:512})
let initBlock = {
  id: 1,
  privateKey: initBlockKey.exportKey('private');
  lastPublicKey: null,
  publicKey: initBlockKey.exportKey('public');
  lastBlock: null,
  status: 'unconfirmed',
  count: 1,
  createdAt: new Date(),
}
let nextBlock = {
  id: 2,

}
//需要证明一条内容是一个区块的(公钥证明)
// let blockKey = new NodeRSA({b: 512});
// console.log('将内容的公钥导入区块中');
// blockKey.importKey(contentPublicRsa, 'public');

//需要证明一条内容是一个用户的(私钥证明)
