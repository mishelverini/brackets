module.exports = function check(str, bracketsConfig) {
  let strRef = str.split('');
  let conf = bracketsConfig.flat();
  let hooks = (strRef.length % 2) == 0;
  let difference = conf.filter(function(elemrnt){
    return !strRef.includes(elemrnt);
  });
  let closeStr  = !(strRef[0] == ')' || strRef[strRef.length - 1] == '(');
  let hooksDouble = true;
  if (4 == strRef.length) {
    if(strRef[0] == '(') {
      hooksDouble = strRef[3] == ')' || strRef[1] == ')';
    }
    if(strRef[0] == '[') {
      hooksDouble = strRef[3] == ']' || strRef[1] == ']';
    }
    if(strRef[0] == '|') {
      hooksDouble = strRef[3] == '|' || strRef[1] == '|';
    }
  }
  
  return difference.length == 0 && hooks && closeStr && hooksDouble;
}
