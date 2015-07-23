define(function (require, exports, module) {

    /**
     * Unique Paths
     */

    'use strict';

    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    var uniquePaths = function(m, n) {
        if (m <= 0 || n <= 0) {
            return 0;
        }
        var cntArr = [];
        for (var i=0; i<m; ++i) {
            cntArr.push([]);
            for (var j=0; j<n; ++j) {
                cntArr[i].push(1);
            }
        }
        for (var i=1; i<m; ++i) {
            for (var j=1; j<n; ++j) {
                cntArr[i][j] = cntArr[i-1][j] + cntArr[i][j-1];
            }
        }
        //
        return cntArr[m-1][n-1];
    };

    module.exports = uniquePaths;

});
