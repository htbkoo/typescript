import TreeNode from "./utils/TreeNode";

/*
https://leetcode.com/problems/binary-tree-pruning/description/

We are given the head node root of a binary tree, where additionally every node's value is either a 0 or a 1.

Return the same tree where every subtree (of the given tree) not containing a 1 has been removed.

(Recall that the subtree of a node X is X, plus every node that is a descendant of X.)

Example 1:
Input: [1,null,0,0,1]
Output: [1,null,0,null,1]

Explanation:
Only the red nodes satisfy the property "every subtree not containing a 1".
The diagram on the right represents the answer.


Example 2:
Input: [1,0,1,0,0,0,1]
Output: [1,null,1,null,1]



Example 3:
Input: [1,1,0,1,1,0,1,0]
Output: [1,1,0,1,1,null,1]



Note:

    The binary tree will have at most 100 nodes.
    The value of each node will only be 0 or 1.

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
 * @return {TreeNode}
 */
var pruneTree = function (root: TreeNode): TreeNode {
    if (root) {
        [
            "left",
            "right"
        ].forEach(side => {
            if (root[side]) {
                if (hasChild(root[side])) {
                    pruneTree(root[side])
                }
                if (!hasChild(root[side]) && shouldPrune(root[side])) {
                    root[side] = null;
                }
            }
        });

        if (hasChild(root)) {
            return root;
        } else {
            if (shouldPrune(root)) {
                return null;
            } else {
                return root;
            }
        }
    } else {
        return root;
    }

    function hasChild(node: TreeNode) {
        return (!!node.left) || (!!node.right);
    }

    function shouldPrune(node) {
        return node.val === 0;
    }
};

export default pruneTree;