function newContent(content, type){
  //加密内容并且计算内容的消耗
  if (type === "user-register") {
    originStr = content.username+content.password;

  }
  return hashResult;
}
function receiveContent(hashResult){
  //解密内容
  return content
}

function confirmContent(){
  //确认内容，一个内容必须被此节点的已知用户的一半同意才能确认到新的区块
}
