define(function (require, exports, module) {

    /**
     * Rotate Image
     */
    
    'use strict';

    /**
     * @param {number[][]} matrix
     * @return {void} Do not return anything, modify matrix in-place instead.
     */
    var rotate = function(matrix) {
        var rows = matrix.length;
        if (rows <= 1) {
            // Pass;
            return;
        }
        var cols = matrix[0].length;
        if (cols <= 1) {
            // Pass;
            return;
        }
        var i = 0,
            j = 0;
        for (i=0; i<rows; ++i) {
            for (j=0; j<cols; ++j) {
                var tmp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = tmp;
                if (i === j) {
                    break;
                }
            }
        }
        for (i=0; i<rows; ++i) {
            matrix[i].reverse();
        }
    };

    module.exports = rotate;

    /**
     * TODO: ???
     */

});