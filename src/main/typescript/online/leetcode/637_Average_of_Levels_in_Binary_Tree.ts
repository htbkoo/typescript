/*
https://leetcode.com/problems/average-of-levels-in-binary-tree/

Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.

Example 1:

Input:
    3
   / \
  9  20
    /  \
   15   7
Output: [3, 14.5, 11]
Explanation:
The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].

Note:

    The range of node's value is in the range of 32-bit signed integer.

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
 * @return {number[]}
 */
var averageOfLevels = function (root: TreeNode): number[] {
    if (root) {
        const averages = [];

        let currentLevel = [root];
        let nextLevel = [];

        while (currentLevel.length > 0) {
            const average = currentLevel.reduce((sum, node) => {
                [
                    'left',
                    'right'
                ].forEach(side => {
                    let child = node[side];
                    if (child && child !== null && notEmptyNodeForTestSetup(child)) { // TODO: improve test setup to avoid this
                        nextLevel.push(child);
                    }
                });
                return sum + node.val;
            }, 0) / currentLevel.length;
            averages.push(average);

            currentLevel = nextLevel;
            nextLevel = [];
        }

        return averages;
    } else {
        return [];
    }

    function notEmptyNodeForTestSetup(child: TreeNode) { // TODO: improve test setup to avoid this
        return child.val !== null;
    }
};

export default averageOfLevels;