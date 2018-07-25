/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  let outputArr = [];
  for (let i=0, rows=A.length; i<rows; ++i) {
    const currRow = A[i]
    let tmpRow = []
    for (let j=0, cols=currRow.length; j<cols; ++j) {
      tmpRow.push(1 - currRow[cols - 1 - j])
    }
    outputArr.push(tmpRow)
  }
  return outputArr
};