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

type Path = {
    maxLength: number,
    maxConnected: number
}

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
    const EMPTY_PATH: Path = {maxLength: 0, maxConnected: 0};
    if (!!root) {
        return findLongest(root).maxLength
    } else {
        return 0;
    }

    function findLongest(node: TreeNode): Path {
        let left = node.left, right = node.right;
        let leftPath = (!!left) ? findLongest(node.left) : EMPTY_PATH,
            rightPath = (!!right) ? findLongest(node.right) : EMPTY_PATH;

        let isLeftConnected = !!left && left.val === node.val;
        let isRightConnected = !!right && right.val === node.val;
        let maxConnected = 0, maxBoth = 0;
        if (isLeftConnected && isRightConnected) {
            maxBoth = 2 + leftPath.maxConnected + rightPath.maxConnected;
        }
        if (isLeftConnected) {
            maxConnected = Math.max(1 + leftPath.maxConnected, maxConnected);
        }
        if (isRightConnected) {
            maxConnected = Math.max(1 + rightPath.maxConnected, maxConnected);
        }
        let maxLength = Math.max(maxBoth, Math.max(maxConnected, Math.max(leftPath.maxLength, rightPath.maxLength)));

        return {maxLength, maxConnected};
    }
};

export default longestUnivaluePath;