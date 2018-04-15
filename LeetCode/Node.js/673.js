/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
  var size = nums.length;
  if (size === 0) {
    return 0;
  }
  var LIS = [];
  for (var i=0; i<size; ++i) {
    LIS[i] = 1;
    for (var j=0; j<i; ++j) {
      if (nums[i] > nums[j] && LIS[j] + 1 > LIS[i]) {
        LIS[i] = LIS[j] + 1;
      }
    }
  }
  const maxLength = Math.max(...LIS);
  let count = 0;
  for (let i=0; i<size; ++i) {
    if (LIS[i] === maxLength) {
      count++;
    }
  }
  return count;
};

console.log(findNumberOfLIS([2,2,2,2,2]));
