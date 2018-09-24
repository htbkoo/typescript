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
        let isBothConnected = !!left && !!right && left.val === node.val && right.val === node.val;
        if (isBothConnected) {
            let leftPath = findLongest(node.left), rightPath = findLongest(node.right);
            let maxConnected = 1 + leftPath.maxConnected + rightPath.maxConnected;
            let maxLength = Math.max(maxConnected, Math.max(leftPath.maxLength, rightPath.maxLength));
            return {
                maxLength,
                maxConnected
            }
        } else if (!!left && !!right) {

        } else if (!!left) {

        } else if (!!right) {

        } else if (!left && !right){
            return {
                maxLength: 1,
                maxConnected: 1
            }
        }
    }
};

export default longestUnivaluePath;