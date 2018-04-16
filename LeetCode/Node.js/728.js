/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  let outputArr = [];
  for (let currNum=left; currNum<=right; ++currNum) {
    let isSelfDividing = true;
    let tmp = currNum;
    while (tmp > 0) {
      let rest = tmp % 10;
      if (rest === 0 || currNum % rest !== 0) {
        isSelfDividing = false;
        break;
      }
      tmp = Math.floor(tmp / 10);
    }
    if (isSelfDividing) {
      outputArr.push(currNum);
    }
  }
  return outputArr;
};
