/*
https://leetcode.com/problems/univalued-binary-tree/

A binary tree is univalued if every node in the tree has the same value.

Return true if and only if the given tree is univalued.



Example 1:

Input: [1,1,1,1,1,null,1]
Output: true

Example 2:

Input: [2,2,2,5,2]
Output: false



Note:

    The number of nodes in the given tree will be in the range [1, 100].
    Each node's value will be an integer in the range [0, 99].

* */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
import TreeNode from "./utils/TreeNode";

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function (root: TreeNode): boolean {
    // Given that the tree is non-empty
    // if (!root){
    //     return
    // }
    if (!root.left && !root.right) {
        return true
    } else {
        const isLeftSame = isSame("left");
        const isRightSame = isSame("right");

        return isLeftSame && isRightSame;
    }

    function isSame(side: string): boolean {
        const child = root[side];
        if (child) {
            return root.val === child.val && isUnivalTree(child);
        } else {
            return true;
        }
    }
};

export default isUnivalTree;