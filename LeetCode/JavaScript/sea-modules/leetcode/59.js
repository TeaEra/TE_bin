define(function (require, exports, module) {

    /**
     * Spiral Matrix II 
     */
    
    'use strict';

    /**
     * @param {number} n
     * @return {number[][]}
     */
    var generateMatrix = function(n) {
        if (n === 0) {
            return [];
        }
        if (n === 1) {
            return [[1]];
        }
        var size = n*n,
            i = 0,
            j = 0,
            mat = [];
        for (i=0; i<n; ++i) {
            var tmpArr = [];
            for (j=0; j<n; ++j) {
                tmpArr.push(1);
            }
            mat.push(tmpArr);
        }
        var prevR = 0,
            prevC = 0,
            minR = 0,
            maxR = n-1,
            minC = 0,
            maxC = n-1,
            mode = 1,
            cnt = 1;
        while (cnt<size) {
            cnt++;
            if (mode === 1) {
                mat[prevR][++prevC] = cnt;
                if (prevC === maxC) {
                    minR++;
                    mode = 2;
                }
            }
            else if (mode === 2) {
                mat[++prevR][prevC] = cnt;
                if (prevR === maxR) {
                    maxC--;
                    mode = 3;
                }
            }
            else if (mode === 3) {
                mat[prevR][--prevC] = cnt;
                if (prevC === minC) {
                    maxR--;
                    mode = 4;
                }
            }
            else if (mode === 4) {
                mat[--prevR][prevC] = cnt;
                if (prevR === minR) {
                    minC++;
                    mode = 1;
                }
            }
        }
        return mat;
    };

    module.exports = generateMatrix;

});