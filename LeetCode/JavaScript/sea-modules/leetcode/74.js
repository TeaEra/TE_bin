define(function (require, exports, module) {

    /**
     * Search a 2D Matrix
     */
    
    'use strict';

    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    var searchMatrix = function(matrix, target) {
        var rows = matrix.length,
            cols = matrix[0] ? matrix[0].length : 0;
        if (rows === 0 || cols === 0) {
            return false;
        }
        var i = 0,
            j = 0,
            colFirst = [],
            colLast = [];
        for (i=0; i<rows; ++i) {
            colFirst.push(matrix[i][0]);
            colLast.push(matrix[i][cols-1]);
        }
        if (colFirst[0] > target) {
            return false;
        }
        var rowIdx = 0;
        for (i=0; i<colFirst.length; ++i) {
            if (colFirst[i] === target) {
                return true;
            }
            if (colFirst[i] > target) {
                rowIdx = i - 1;
                break;
            }
            else {
                rowIdx = i;
            }
        }
        if (matrix[rowIdx][cols-1] < target) {
            return false;
        }
        var isHit = false;
        for (i=0; i<matrix[rowIdx].length; ++i) {
            if (matrix[rowIdx][i] === target) {
                isHit = true;
                return true;
            }
        }
        if (!isHit) {
            return false;
        }
    };

    module.exports = searchMatrix;

});