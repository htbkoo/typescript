import * as chai from "chai";

import Trie from "../../../../main/typescript/online/leetcode/208_Implement_Trie_Prefix_Tree";
import searchBST from "../../../../main/typescript/online/leetcode/700_Search_in_a_Binary_Search_Tree";
import {createTree, treeToArray} from "./utils/TreeUtils";

describe("700. Search in a Binary Search Tree", function () {
    describe('should search in a BST', function () {
        [
            {root: createTree([4, 2, 7, 1, 3]), val: 2, expected: createTree([2, 1, 3])},
            {root: createTree([4, 2, 7, 1, 3]), val: 5, expected: null},
        ].forEach((testCase) =>
            it(`searchBST(${JSON.stringify(testCase)}`, function () {
                // given
                const {root, val, expected} = testCase;

                // when
                let node = searchBST(root, val);

                // then
                if (expected === null) {
                    chai.expect(node).to.deep.equal(expected);
                } else {
                    chai.expect(treeToArray(node)).to.deep.equal(treeToArray(expected));
                }
            })
        );
    });
});