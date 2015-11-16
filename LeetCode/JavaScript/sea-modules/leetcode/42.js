define(function (require, exports, module) {

    /**
     * Trapping Rain Water
     */

    'use strict';

    /**
     * @param {number[]} height
     * @return {number}
     */
    var trap = function(height) {
        // TODO: check array;
        var size = height.length;
        if (size <= 2) {
            return 0;
        }
        var peaks = [];
        for (var i=0; i<size; ++i) {
            if (i === 0) {
                if (height[i] > height[i+1]) {
                    peaks.push(i);
                }
            }
            else if (i === size-1) {
                if (height[i] > height[i-1]) {
                    peaks.push(i);
                }
            }
            else {
                if (height[i] > height[i+1] && height[i] > height[i-1]) {
                    peaks.push(i);
                }
            }
        }
        var sizePeaks = peaks.length;
        if (sizePeaks <= 1) {
            return 0;
        }
        var removeArr = [];
        for (var i=1; i<sizePeaks-1; ++i) {
            if (height[peaks[i]] < height[peaks[i-1]] && height[peaks[i]] < height[peaks[i+1]]) {
                peaks[i] = -1;
            }
        }
        var newPeaks = [];
        for (var i=0; i<sizePeaks; ++i) {
            if (peaks[i] !== -1) {
                newPeaks.push(peaks[i]);
            }
        }
        sizePeaks = newPeaks.length;
        peaks = newPeaks;
        var sum = 0;
        for (var i=0; i<sizePeaks-1; ++i) {
            var
                idx1 = peaks[i],
                idx2 = peaks[i+1],
                h1 = height[idx1],
                h2 = height[idx2],
                ht = h1 > h2 ? h2 : h1;
            for (var j=idx1+1; j<idx2; ++j) {
                var
                    currh = height[j];
                sum += currh < ht ? ht - currh : 0;
            }
        }
        return sum;
    };

    module.exports = trap;

});
