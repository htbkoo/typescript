import TreeNode from "../../../../../main/typescript/online/leetcode/utils/TreeNode";

class EmptyNode extends TreeNode {
    private static readonly _emptyNode = new EmptyNode();

    private constructor() {
        super(null);
    }

    public static get emptyNode(): TreeNode {
        return this._emptyNode;
    }

    public static isEmptyNode(node: TreeNode): boolean {
        return this._emptyNode === node;
    }
}

function createTree(arr: any[]): TreeNode {
    if (arr.length === 0) {
        return null;
    }

    let root = new TreeNode(arr[0]);

    let current = root;
    let queue: TreeNode[] = [];

    arr.slice(1)
        .map(toTreeNode)
        .forEach(appendToTree);

    return root;

    function toTreeNode(element): TreeNode {
        if (element !== null) {
            return new TreeNode(element)
        } else {
            return EmptyNode.emptyNode;
        }
    }

    function appendToTree(node: TreeNode) {
        if (!EmptyNode.isEmptyNode(node)) {
            queue.push(node);
        }

        let isMoreThanOneUnfilled = [
            'left',
        ].some(side => {
            const isNotFilled: boolean = current[side] === null;
            if (isNotFilled) {
                current[side] = node;
            }
            return isNotFilled;
        });

        const finalSide = 'right';

        if (!isMoreThanOneUnfilled) {
            current[finalSide] = node;
            current = queue.shift(); //    TODO: add test case to catch the case when queue is empty
        }
    }
}

function treeToArray(root: TreeNode): any[] {
    return [];
}

export {createTree, treeToArray};