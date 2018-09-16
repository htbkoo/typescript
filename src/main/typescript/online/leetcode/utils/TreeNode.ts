/**
 * Definition for a binary tree node.
 */

class TreeNode {
    readonly val: any;
    left: TreeNode = null;
    right: TreeNode = null;

    constructor(val: any) {
        this.val = val;
    }
}

export default TreeNode;