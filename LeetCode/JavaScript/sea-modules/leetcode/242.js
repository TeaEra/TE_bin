define(function (require, exports, module) {

    /**
     * Valid Anagram
     */

    'use strict';

    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    var isAnagram = function(s, t) {
        if (s === t) {
            return true;
        }
        var
            sizeS = s.length,
            sizeT = t.length;
        if (sizeS !== sizeT) {
            return false;
        }
        var
            countObj = {};
        for (var i=0; i<sizeS; ++i) {
            var
                ch = s[i];
            if (!(ch in countObj)) {
                countObj[ch] = 0;
            }
            ++countObj[ch];
        }
        for (var i=0; i<sizeT; ++i) {
            var
                ch = t[i];
            if (!(ch in countObj)) {
                return false;
            }
            --countObj[ch];
        }
        for (var key in countObj) {
            if (countObj[key] !== 0) {
                return false;
            }
        }
        return true;
    };

    module.exports = isAnagram;

});

