define(function (require, exports, module) {

    /**
     * Generate Parentheses
     */

    'use strict';

    /**
     * @param {number} n
     * @return {string[]}
     */
    var generateParenthesis = function(n) {
        if (n === 0) {
            return [];
        }
        if (n === 1) {
            return ['()'];
        }
        var res = [],
            i = 0;
        while (i < n*2) {
            if (i === 0) {
                res.push([]);
                res[i].push('(');
            }
            else {
                res.push([]);
                var j = 0,
                    lastSize = res[i-1].length;
                for (j=0; j<lastSize; ++j) {
                    var usedLeft = res[i-1][j].match(/\(/g) !== null ? res[i-1][j].match(/\(/g).length : 0,
                        usedRight = res[i-1][j].match(/\)/g) !== null ? res[i-1][j].match(/\)/g).length : 0;
                    if (usedLeft > usedRight) {
                        if (usedLeft < n) {
                            res[i].push(res[i-1][j] + '(');
                        }
                        if (usedRight < n) {
                            res[i].push(res[i-1][j] + ')');
                        }
                    }
                    else {
                        if (usedLeft < n) {
                            res[i].push(res[i-1][j] + '(');
                        }
                    }
                }
            }
            i++;
        }
        return res[2*n - 1]
    };

    module.exports = generateParenthesis;

});
