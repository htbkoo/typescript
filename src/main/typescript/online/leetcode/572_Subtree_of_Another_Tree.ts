/*
https://leetcode.com/problems/subtree-of-another-tree/

 Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

Example 1:
Given tree s:

     3
    / \
   4   5
  / \
 1   2

Given tree t:

   4
  / \
 1   2

Return true, because t has the same structure and node values with a subtree of s.

Example 2:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
    /
   0

Given tree t:

   4
  / \
 1   2

Return false.

* */

import TreeNode from "./utils/TreeNode";
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s: TreeNode, t: TreeNode): boolean {
    if (!s && !t) {
        return true;
    } else if (!s || !t) {
        return false;
    } else {
        if (areTreesIdentical(s, t)) {
            return true;
        } else {
            return [
                'left',
                'right'
            ].some(side => {
                if (s[side] !== null) {
                    return isSubtree(s[side], t);
                }
            });
        }
    }

    function areTreesIdentical(tree1: TreeNode, tree2: TreeNode): boolean {
        const areBothNull: boolean = tree1 === null && tree2 === null;
        if (areBothNull) {
            return true
        } else if (areStructuresOrValsDifferent(tree1, tree2)) {
            return false;
        } else {
            if (isLeaf(tree1) && isLeaf(tree2)) {
                return true;
            } else {
                return areTreesIdentical(tree1.left, tree2.left) && areTreesIdentical(tree1.right, tree2.right);
            }
        }
    }

    function areStructuresOrValsDifferent(tree1: TreeNode, tree2: TreeNode) {
        const isAnyNull: boolean = tree1 === null || tree2 === null;
        if (isAnyNull){
            return true;
        }
        return  tree1.val !== tree2.val;
    }

    function isLeaf(node: TreeNode) {
        return node.left === null && node.right === null;
    }

};

export default isSubtree;