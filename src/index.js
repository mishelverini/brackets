module.exports = function check(str, bracketsConfig) {
  const configOpen = [];
  const configClose = [];
  let res = [];
  const strArr = str.split('');

  const isOpen = (value) => configOpen.includes(value);
  const getClose = (value) => configClose[configOpen.indexOf(value)];
  const double = (value) => configOpen.includes(value) === configClose.includes(value);

  for ([open, close] of bracketsConfig) {
    configOpen.push(open);
    configClose.push(close);
  }

  for (let s = 0; s < strArr.length; s++) {
    if (double(strArr[s])) {
      if (strArr[s] === res[res.length - 1]) {
        res.pop();
      } else {
        res.push(strArr[s]);
      }
      continue;
    }
    if (isOpen(strArr[s])) {
      res.push(getClose(strArr[s]));
    } else {
      const last = res.pop();
      if (strArr[s] !== last) {
        return false;
      }
    }
  }

  return res.length === 0;
}
