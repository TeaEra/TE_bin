/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
  let output = []
  for (let i=0, rows=A.length; i<rows; ++i) {
    const tmpRow = A[i]
    for (let j=0, cols=tmpRow.length; j<cols; ++j) {
      if (!output[j]) {
        output.push([])
      }
      output[j][i] = A[i][j]
    }
  }
  return output
};