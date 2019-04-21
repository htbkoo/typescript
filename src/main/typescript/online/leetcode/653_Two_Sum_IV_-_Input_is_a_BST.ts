/*
https://leetcode.com/problems/two-sum-iv-input-is-a-bst/

Given a Binary Search Tree and a target number, return true if there exist two elements in the BST such that their sum is equal to the given target.

Example 1:

Input:
    5
   / \
  3   6
 / \   \
2   4   7

Target = 9

Output: True



Example 2:

Input:
    5
   / \
  3   6
 / \   \
2   4   7

Target = 28

Output: False

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
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
const findTarget = function (root: TreeNode, k: number): boolean {
    return search({root, k, elements: new Set([])})
};

function search({root, k, min, max, elements}: { root: TreeNode, k: number, min?: number, max?: number, elements: Set<number> }): boolean {
    if (root) {
        const {val, left, right} = root;
        if (elements.has(k - val)) {
            return true;
        } else {
            elements.add(val);
            return search({root: left, k, max: val, min, elements}) ||
                search({root: right, k, max, min: val, elements});
        }
    } else {
        return false;
    }
}

export default findTarget;