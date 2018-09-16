import TreeNode from "./utils/TreeNode";

/*

Consider all the leaves of a binary tree.  From left to right order, the values of those leaves form a leaf value sequence.

For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

Two binary trees are considered leaf-similar if their leaf value sequence is the same.

Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.



Note:

    Both of the given trees will have between 1 and 100 nodes.

* */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1: TreeNode, root2: TreeNode): boolean {
    const seq1 = computeLeafValueSequence(root1), seq2 = computeLeafValueSequence(root2);
    return seq1.length === seq2.length && seq1.every((v, i) => v === seq2[i]);

    function computeLeafValueSequence(root: TreeNode): number[] {
        function isChildNull(node: TreeNode, side: string) {
            return node[side] === null;
        }

        function isLeaf(node: TreeNode): boolean {
            return isChildNull(node, "left") && isChildNull(node, "right");
        }

        if (root === null) {
            return [];
        } else if (isLeaf(root)) {
            return [root["val"]];
        } else {
            return computeLeafValueSequence(root["left"]).concat(computeLeafValueSequence(root["right"]))
        }
    }
};

export default leafSimilar;