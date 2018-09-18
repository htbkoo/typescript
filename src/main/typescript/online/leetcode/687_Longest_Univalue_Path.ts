import TreeNode from "./utils/TreeNode";

/*
https://leetcode.com/problems/longest-univalue-path/description/

Given a binary tree, find the length of the longest path where each node in the path has the same value. This path may or may not pass through the root.

Note: The length of path between two nodes is represented by the number of edges between them.

Example 1:

Input:

              5
             / \
            4   5
           / \   \
          1   1   5

Output:

2

Example 2:

Input:

              1
             / \
            4   5
           / \   \
          4   4   5

Output:

2

Note: The given binary tree has not more than 10000 nodes. The height of the tree is not more than 1000.

* */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function (root: TreeNode): number {
    if (!root || !hasChild()) {
        return 0;
    }
    let leftPath = 0, rightPath = 0;
    if (root.left) {
        leftPath = longestUnivaluePath(root.left);
        if (root.val === root.left.val) {
            leftPath++;
        }
    }
    if (root.right) {
        rightPath = longestUnivaluePath(root.right);
        if (root.val === root.right.val) {
            rightPath++;
        }
    }

    return Math.max(leftPath, rightPath);

    function hasChild() {
        return root.left || root.right;
    }
};

export default longestUnivaluePath;