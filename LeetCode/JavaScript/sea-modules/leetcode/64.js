define(function (require, exports, module) {

    /**
     * Minimum Path Sum
     */
    
    'use strict';

    /**
     * @param {number[][]} grid
     * @return {number}
     */
    var minPathSum = function(grid) {
        var rows = grid.length;
        if (rows === 0) {
            return 0;
        }
        var cols = grid[0].length;
        if (cols === 0) {
            return 0;
        }
        if (rows === 1 && cols === 1) {
            return grid[0][0];
        }
        var i = 0,
            j = 0;
        for (i=0; i<rows; ++i) {
            for (j=0; j<cols; ++j) {
                if (i !== 0 && j !== 0) {
                    grid[i][j] = grid[i][j] + Math.min(grid[i-1][j], grid[i][j-1]);
                }
                else if (i === 0 && j !== 0) {
                    grid[i][j] = grid[i][j] + grid[i][j-1];
                }
                else if (j === 0 && i !== 0) {
                    grid[i][j] = grid[i][j] + grid[i-1][j];
                }
            }
        }
        return grid[rows-1][cols-1];
    };

    module.exports = minPathSum;

});