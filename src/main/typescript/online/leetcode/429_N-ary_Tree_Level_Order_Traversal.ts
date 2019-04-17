/*
https://leetcode.com/problems/n-ary-tree-level-order-traversal/

Given an n-ary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example, given a 3-ary tree:





We should return its level order traversal:

[
     [1],
     [3,2,4],
     [5,6]
]



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
 * @return {number[][]}
 */
const levelOrder = function (root: Node): number[][] {
    if (root) {
        let currentLevel = [root];
        let nextLevel = [];
        const answer: number[][] = [];
        while (currentLevel.length > 0) {
            currentLevel.forEach(node =>
                node.children.forEach(child =>
                    nextLevel.push(child)
                )
            );
            answer.push(currentLevel.map(node => node.val));
            currentLevel = nextLevel;
            nextLevel = [];
        }
        return answer;
    } else {
        return [];
    }
};

export default levelOrder;