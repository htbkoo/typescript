/*
https://leetcode.com/problems/increasing-order-search-tree/

Given a tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only 1 right child.

Example 1:
Input: [5,3,6,2,4,null,8,1,null,null,null,7,9]

       5
      / \
    3    6
   / \    \
  2   4    8
 /        / \
1        7   9

Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]

 1
  \
   2
    \
     3
      \
       4
        \
         5
          \
           6
            \
             7
              \
               8
                \
                 9

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
 * @return {TreeNode}
 */
var increasingBST = function (root: TreeNode): TreeNode {
    if (!root) {
        return root;
    } else {
        const stack: TreeNode[] = [];
        const answer: number[] = [];

        let current = root;
        do {
            if (current && current.val) {
                stack.push(current);
                current = current.left;
            } else {
                const node = stack.pop();
                answer.push(node.val);
                current = node.right;
            }
        } while (current || stack.length > 0);

        const newRoot = new TreeNode(answer[0]);
        answer.slice(1).reduce(toTree, newRoot);
        return newRoot;

        function toTree(node, val) {
            node.right = new TreeNode(val);
            return node.right;
        }
    }
};

export default increasingBST;
