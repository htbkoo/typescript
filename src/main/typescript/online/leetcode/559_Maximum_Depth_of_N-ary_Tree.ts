/*
https://leetcode.com/problems/maximum-depth-of-n-ary-tree/

Given a n-ary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

For example, given a 3-ary tree:




We should return its max depth, which is 3.



Note:

    The depth of the tree is at most 1000.
    The total number of nodes is at most 5000.

* */

interface Node {
    val: number;
    children: Node[]
}

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
const maxDepth = function (root: Node): number {
    if (root) {
        return 1 + root.children.map(child => maxDepth(child)).reduce((max, depth) => Math.max(max, depth), 0);
    } else {
        return 0;
    }
};

export default maxDepth;