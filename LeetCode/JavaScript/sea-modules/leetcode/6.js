define(function (require, exports, module) {

    /**
     * ZigZag Conversion
     */

    'use strict';

    /**
     * @param {string} s
     * @param {number} numRows
     * @return {string}
     */
    var convert = function(s, numRows) {
        if (numRows <= 0) {
            return '';
        }
        if (numRows === 1) {
            return s;
        }
        var i = 0,
            totalArr = [];
        for (i=0; i<numRows; ++i) {
            totalArr.push([]);
        }
        var len = s.length,
            isTopToBottom = true,
            isLong = true;
        for (i=0; i<len; ++i) {
            var ch = s[i],
                gIdx = i % (numRows * 2 - 2);
            if (gIdx < numRows) {
                totalArr[gIdx].push(ch);
            }
            else {
                totalArr[numRows * 2 - 2 -gIdx].push(ch);
            }
        }
        for (i=0; i<numRows; ++i) {
            totalArr[i] = totalArr[i].join('');
        }
        return totalArr.join('');
    };

    module.exports = convert;

});
