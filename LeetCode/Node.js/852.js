/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
  for (let i=1, size=A.length-2; i<=size; ++i) {
    if (A[i] > A[i-1] && A[i] > A[i+1]) {
      return i;
    }
  }
};