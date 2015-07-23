define(function (require, exports, module) {

    /**
     * Isomorphic Strings
     */

    'use strict';

    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    var isIsomorphic = function(s, t) {
        var lenS = s.length,
            lenT = t.length;
        if (lenS !== lenT) {
            return false;
        }
        var mapperS = {},
            mapperT = {},
            i = 0;
        for (i=0; i<lenS; ++i) {
            //
            if (s[i] in mapperS) {
                if (mapperS[s[i]] !== t[i]) {
                    return false;
                }
            }
            else {
                mapperS[s[i]] = t[i];
            }
            //
            if (t[i] in mapperT) {
                if (mapperT[t[i]] !== s[i]) {
                    return false;
                }
            }
            else {
                mapperT[t[i]] = s[i];
            }
        }
        var arrFromS = [],
            arrFromT = [];
        for (i=0; i<lenS; ++i) {
            arrFromS.push(mapperS[s[i]]);
            arrFromT.push(mapperT[t[i]]);
        }
        return t === arrFromS.join('') && s === arrFromT.join('');
    };

    module.exports = isIsomorphic;

});
