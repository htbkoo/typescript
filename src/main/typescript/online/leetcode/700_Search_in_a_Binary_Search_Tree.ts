/*
https://leetcode.com/problems/search-in-a-binary-search-tree/

Given the root node of a binary search tree (BST) and a value. You need to find the node in the BST that the node's value equals the given value. Return the subtree rooted with that node. If such node doesn't exist, you should return NULL.

For example,

Given the tree:
        4
       / \
      2   7
     / \
    1   3

And the value to search: 2

You should return this subtree:

      2
     / \
    1   3

In the example above, if we want to search the value 5, since there is no node with value 5, we should return NULL.

Note that an empty tree is represented by NULL, therefore you would see the expected output (serialized tree format) as [], not null.

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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root: TreeNode, val: number): TreeNode {
    const isRootDefined = root && root !== null;
    if (isRootDefined) {
        const rootVal = root.val;
        if (val === rootVal) {
            return root;
        } else if (val < rootVal) {
            return searchBST(root.left, val);
        } else {
            return searchBST(root.right, val);
        }
    } else {
        return null;
        // return []; // There is a bug in the online judge checker in LeetCode and thus [] is required instead of null but null is the one that is specified in the problem statement
    }
};

export default searchBST;