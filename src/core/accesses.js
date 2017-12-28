import { Roles } from '/imports/api/roles.js';

function checkModulePressionByRoleCollection(roleCollection, moduleString, opera){
  let isAccess = false
  for (var i = 0; i < roleCollection.length; i++) {
      let role = Roles.find({name: roleCollection[i]});
      if (role[moduleString]!=undefined) {
        isAccess =  role[moduleString][opera];
        continue;
      }else{
        continue;
      }
  }
  return isAccess;
}
function checkACLByRoleCollection(roleCollection, ACL){
  let matchCount = 0;
  for (var i = 0; i < ACL.length; i++) {

    for (var j= 0; j < roleCollection.length; j++) {
      if (roleCollection[j]==ACL[i]) {
        matchCount++;
        break;
      }
    }
  }
  if (matchCount != ACL.length) {
    return false
  }
  return true;
}
export function canBeAccessed(
  roleCollection,
   moduleString,
   ACL,
   weight,
   opera //read edit buy delete
 ){
  //若是权重没有没有达标，不管如何吹牛逼，就是通不过。
  if (ACL.weight < weight) {
    return "ACCESS DENY"
  }
  if (roleCollection.weight < weight) {
    return "WEIGHT ACCESS DENY";
  }
  if (!checkACLByRoleCollection(roleCollection, ACL)) {
    return "ACL ACCESS DENY"
  }
  if (!checkModulePressionByRoleCollection(roleCollection, moduleString)) {
    return "ROLE ACCESS DENY";
  }

  return true;
}
