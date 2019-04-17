/*
https://leetcode.com/problems/n-ary-tree-postorder-traversal/

Given an n-ary tree, return the postorder traversal of its nodes' values.

For example, given a 3-ary tree:





Return its postorder traversal as: [5,6,3,2,4,1].


Note:

Recursive solution is trivial, could you do it iteratively?

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
 * @return {number[]}
 */
const postorder = function (root: Node): number[] {
    if (root) {
        const nodes = [root];
        const answer: number[] = [];
        while (nodes.length > 0) {
            const node = nodes.pop();
            answer.push(node.val);
            node.children.forEach(child => nodes.push(child));
        }
        return answer.reverse();
    } else {
        return [];
    }
};

const postorderRecursive = function (root: Node): number[] {
    if (root) {
        return root.children.reduce((arr, child) => arr.concat(postorderRecursive(child)), []).concat(root.val);
    } else {
        return [];
    }
};

export default postorder;