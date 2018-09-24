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
    const EMPTY_PATH = {maxLength: 0, maxConnected: 0};
    return findPath(root).maxLength;

    function findPath(node: TreeNode): Path {
        if (!node || !hasChild()) {
            return EMPTY_PATH;
        }

        return [
            "left",
            "right"
        ].reduce((longest, side) => {
            let {maxLength, maxConnected} = longest;
            if (node[side]) {
                let childPath = findPath(node[side]);
                if (node.val === node[side].val) {
                    maxConnected++;
                    maxLength = Math.max(maxLength, maxConnected);
                } else {
                    maxConnected = 0;
                }
            }
            return {maxLength, maxConnected}
        }, EMPTY_PATH);

        function hasChild() {
            return node.left || node.right;
        }
    }
};

export default longestUnivaluePath;