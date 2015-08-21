define(function (require, exports, module) {

    /**
     * Convert Sorted Array to Binary Search Tree
     */
    
    'use strict';

    var TreeNode = require('leetcode/DS').TreeNode;

    /**
     * Definition for a binary tree node.
     * function TreeNode(val) {
     *     this.val = val;
     *     this.left = this.right = null;
     * }
     */
    /**
     * @param {number[]} nums
     * @return {TreeNode}
     */
    var sortedArrayToBST = function(nums) {
        var size = nums.length;
        if (size === 0) {
            return null;
        }
        if (size === 1) {
            return new TreeNode(nums[0]);
        }
        var midIdx = parseInt(size / 2),
            leftArr = [],
            rightArr = [],
            i = 0;
        for (i=0; i<midIdx; ++i) {
            leftArr.push(nums[i]);
        }
        for (i=midIdx+1; i<size; ++i) {
            rightArr.push(nums[i]);
        }
        var root = new TreeNode(nums[midIdx]);
        root.left = sortedArrayToBST(leftArr);
        root.right = sortedArrayToBST(rightArr);
        return root;
    };

    module.exports = sortedArrayToBST;

});