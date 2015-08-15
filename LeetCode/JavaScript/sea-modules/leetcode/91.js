define(function (require, exports, module) {

    /**
     * Decode Ways
     */
    
    'use strict';

    /**
     * @param {string} s
     * @return {number}
     */
    var numDecodings = function(s) {
        if (!s) {
            return 0;
        }
        var len = s.length;
        if (len === 0) {
            return 0;
        }
        if (len === 1) {
            if (s !== '0') {
                return 1;
            }
            else {
                return 0;
            }
        }
        if (len === 2) {
            var tmpInt = parseInt(s);
            if (tmpInt === 10 || tmpInt === 20) {
                return 1;
            }
            else if (tmpInt === 0) {
                return 0;
            }
            else if (tmpInt <= 26) {
                return 2;
            }
            else {
                return 1;
            }
        }
        return Math.max(s.substr(0, len-1) + s.substr(len-1), s.substr(0, len-2) + s.substr(len-2));
    };

    module.exports = numDecodings;

});