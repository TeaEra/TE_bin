/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  var types = J.split('');
  var stones = S.split('');
  var cnt = 0;
  stones.forEach(function (item, index) {
    if (types.indexOf(item) !== -1) {
      cnt++;
    }
  });
  return cnt;
};
