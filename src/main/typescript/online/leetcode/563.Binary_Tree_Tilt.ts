/*
https://leetcode.com/problems/binary-tree-tilt/

Given a binary tree, return the tilt of the whole tree.

The tilt of a tree node is defined as the absolute difference between the sum of all left subtree node values and the sum of all right subtree node values. Null node has tilt 0.

The tilt of the whole tree is defined as the sum of all nodes' tilt.

Example:

Input:
         1
       /   \
      2     3
Output: 1
Explanation:
Tilt of node 2 : 0
Tilt of node 3 : 0
Tilt of node 1 : |2-3| = 1
Tilt of binary tree : 0 + 0 + 1 = 1

Note:

    The sum of node values in any subtree won't exceed the range of 32-bit integer.
    All the tilt values won't exceed the range of 32-bit integer.

* */

import TreeNode from "./utils/TreeNode";

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

type Result = {
    tilt: number,
    sum: number
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function (root: TreeNode): number {
    if (!root) {
        return 0;
    } else {
        return findTiltAndSum(root).tilt;
    }

    function findTiltAndSum(node: TreeNode): Result {
        let leftChild = node.left, rightChild = node.right;
        let leftResult = (leftChild !== null)
            ? findTiltAndSum(leftChild)
            : emptyResult();

        let rightResult = (rightChild !== null)
            ? findTiltAndSum(rightChild)
            : emptyResult();
        return {
            tilt: leftResult.tilt + rightResult.tilt + Math.abs(leftResult.sum - rightResult.sum),
            sum: node.val + leftResult.sum + rightResult.sum
        }
    }

    function emptyResult(): Result {
        return {
            tilt: 0,
            sum: 0
        }
    }
};

export default findTilt;