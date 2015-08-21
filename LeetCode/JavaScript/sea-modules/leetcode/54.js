define(function (require, exports, module) {

    /**
     * Spiral Matrix
     */
    
    'use strict';

    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    var spiralOrder = function(matrix) {
        var rows = matrix.length;
        if (rows === 0) {
            return [];
        }
        var cols = matrix[0].length;
        if (cols === 0) {
            return [];
        }
        var size = rows * cols,
            prevR = 0,
            prevC = 0,
            minR = 0,
            maxR = rows-1,
            minC = 0,
            maxC = cols-1,
            mode = 1,
            cnt = 1,
            res = [];
        if (cols === 1) {
            mode = 2;
        }
        res.push(matrix[prevR][prevC]);
        while (cnt<size) {
            cnt++;
            if (mode === 1) {
                res.push(matrix[prevR][++prevC]);
                if (prevC === maxC) {
                    minR++;
                    mode = 2;
                }
            }
            else if (mode === 2) {
                res.push(matrix[++prevR][prevC]);
                if (prevR === maxR) {
                    maxC--;
                    mode = 3;
                }
            }
            else if (mode === 3) {
                res.push(matrix[prevR][--prevC]);
                if (prevC === minC) {
                    maxR--;
                    mode = 4;
                }
            }
            else if (mode === 4) {
                res.push(matrix[--prevR][prevC]);
                if (prevR === minR) {
                    minC++;
                    mode = 1;
                }
            }
        }
        return res;
    };

    module.exports = spiralOrder;

});