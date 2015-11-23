define(function (require, exports, module) {

    /**
     * Unique Binary Search Trees
     */

    'use strict';

    /**
     * @param {number} n
     * @return {number}
     */
    var numTrees = function(n) {
        // TOCO: check integer;
        if (n < 0) {
            return 1;
        }
        var
            arr = [1];
        for (var i=1; i<=n; ++i) {
            arr.push(0);
            if (i<3) {
                arr[i] = i;
            }
            else {
                for (var j=1; j<=i; ++j) {
                    arr[i] += arr[j-1] * arr[i-j];
                }
            }
        }
        return arr[n];
    };

    module.exports = numTrees;

});
