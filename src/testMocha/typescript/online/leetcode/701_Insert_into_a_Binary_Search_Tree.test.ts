import * as chai from "chai";

import insertIntoBST from "../../../../main/typescript/online/leetcode/701_Insert_into_a_Binary_Search_Tree";
import {createTree} from "./utils/TreeUtils";

// TODO: fix
describe("701. Insert into a Binary Search Tree", function () {
    describe('should insert into BST', function () {
        [
            {
                input: {
                    root: createTree([4, 2, 7, 1, 3,]),
                    val: 5
                },
                expected: createTree([4, 2, 7, 1, 3, 5])
            },
        ].forEach(({input, expected}) =>
            it(`insertIntoBST(${JSON.stringify(input)}`, function () {
                // given
                const {root, val} = input;

                // when
                const actual = insertIntoBST(root, val);

                // then
                chai.expect(actual).to.deep.equal(expected);
            })
        );
    });
});