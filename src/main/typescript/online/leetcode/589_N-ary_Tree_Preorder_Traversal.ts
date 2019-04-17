/*
https://leetcode.com/problems/n-ary-tree-preorder-traversal/

Given an n-ary tree, return the preorder traversal of its nodes' values.

For example, given a 3-ary tree:





Return its preorder traversal as: [1,3,5,6,2,4].



Note:

Recursive solution is trivial, could you do it iteratively?

* */

import _ from "lodash";

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
var preorder = function (root: Node): number[] {
    if (root) {
        const stack = [root];
        const answer: number[] = [];
        while (stack.length > 0) {
            const node = stack.pop();
            answer.push(node.val);
            _.rangeRight(node.children.length).forEach(i => stack.push(node.children[i]));
        }
        return answer;
    } else {
        return [];
    }
};

const preorderRecursive = function (root: Node): number[] {
    if (root) {
        return root.children.reduce((arr, child) => arr.concat(preorderRecursive(child)), [root.val]);
    } else {
        return [];
    }
};

export default preorder;