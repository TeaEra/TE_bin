/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
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
  return Math.max(...LIS);
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
