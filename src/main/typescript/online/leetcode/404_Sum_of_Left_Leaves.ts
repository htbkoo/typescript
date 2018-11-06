/*
https://leetcode.com/problems/sum-of-left-leaves/

Find the sum of all left leaves in a given binary tree.

Example:

    3
   / \
  9  20
    /  \
   15   7

There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.

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
 * @return {number}
 */
var sumOfLeftLeaves = function (root: TreeNode): number {
    if (!root) {
        return 0;
    } else {
        let leftChild = root.left;
        let rightChild = root.right;
        let isSingleNode = isLeaf(root);
        if (isSingleNode) {
            // return root.val; // from submission, root can't be leaf in single element tree - reference: https://leetcode.com/problems/sum-of-left-leaves/discuss/88973/Why-root-can't-be-leaf-in-single-element-tree
            return 0;
        } else {
            let sum = 0;
            if (leftChild !== null) {
                if (isLeaf(leftChild)) {
                    sum += leftChild.val;
                } else {
                    sum += sumOfLeftLeaves(leftChild);
                }
            }
            if (rightChild !== null) {
                if (!isLeaf(rightChild)) {
                    sum += sumOfLeftLeaves(rightChild);
                }
            }
            return sum;
        }
    }

    function isLeaf(node: TreeNode): boolean {
        return node.left == null && node.right == null;
    }
};

export default sumOfLeftLeaves;