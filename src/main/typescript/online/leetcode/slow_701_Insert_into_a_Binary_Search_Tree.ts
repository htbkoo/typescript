/*
https://leetcode.com/problems/insert-into-a-binary-search-tree/

701. Insert into a Binary Search Tree
Medium
209
25
Favorite
Share

Given the root node of a binary search tree (BST) and a value to be inserted into the tree, insert the value into the BST. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

Note that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.

For example,

Given the tree:
        4
       / \
      2   7
     / \
    1   3
And the value to insert: 5

You can return this binary search tree:

         4
       /   \
      2     7
     / \   /
    1   3 5

This tree is also valid:

         5
       /   \
      2     7
     / \
    1   3
         \
          4

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
var insertIntoBST = function (root: TreeNode, val: number): TreeNode {
    if (!root) {
        return new TreeNode(val);
    } else {
        const rootVal = root.val;
        if (val < rootVal) {
            pushInto("left");
        } else {
            pushInto("right");
        }

        return root;
    }

    function pushInto(side: string) {
        if (root[side]) {
            insertIntoBST(root[side], val);
        } else {
            root[side] = new TreeNode(val);
        }
    }
};

export default insertIntoBST;