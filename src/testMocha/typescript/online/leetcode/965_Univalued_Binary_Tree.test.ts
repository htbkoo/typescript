import * as chai from "chai";

import {createTree} from "./utils/TreeUtils";
import isUnivalTree from "../../../../main/typescript/online/leetcode/965_Univalued_Binary_Tree";

// TODO: fix, these tests are very unreliable
describe("965. Univalued Binary Tree", function () {
    describe('should check if is univalued', function () {
        [
            {
                input: {root: createTree([2, null, 1]),},
                expected: false
            },
            {
                input: {root: createTree([1,]),},
                expected: true
            },
            {
                input: {root: createTree([1, 1]),},
                expected: true
            },
            {
                input: {root: createTree([1, 1, 1]),},
                expected: true
            },
            {
                input: {root: createTree([1, 1, 1, 1, 1, null, 1]),},
                expected: true
            },
            {
                input: {root: createTree([1, 2]),},
                expected: false
            },
            {
                input: {root: createTree([1, 2, 1]),},
                expected: false
            },
            {
                input: {root: createTree([2, 2, 2, 5, 2]),},
                expected: false
            },
        ].forEach(({input, expected}) =>
            it(`isUnivalTree(${JSON.stringify(input)}`, function () {
                // given
                const {root} = input;

                // when
                const actual = isUnivalTree(root);

                // then
                chai.expect(actual).to.deep.equal(expected);
            })
        );
    });
});