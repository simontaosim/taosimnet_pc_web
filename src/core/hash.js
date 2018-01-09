var crypto = require('crypto');  // 加载crypto库

export function hash512(content){
  let shasum = crypto.createHash('sha512');
  let rlt= shasum.update(content).digest('hex');
  return rlt;
}
