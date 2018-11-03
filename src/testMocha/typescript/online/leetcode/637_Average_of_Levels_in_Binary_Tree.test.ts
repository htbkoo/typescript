import * as chai from "chai";

import {createTree} from "./utils/TreeUtils";

import averageOfLevels from "../../../../main/typescript/online/leetcode/637_Average_of_Levels_in_Binary_Tree";

describe("637. Average of Levels in Binary Tree", function () {
    describe('should return average of levels', function () {
        [
            {root: createTree([3, 9, 20, null, 15, 7]), expected: [3, 14.5, 11]},
        ].forEach((testCase) =>
            it(`searchBST(${JSON.stringify(testCase)}`, function () {
                // given
                const {root, expected} = testCase;

                // when
                let actual = averageOfLevels(root);

                // then
                chai.expect(actual).to.deep.equal(expected);
            })
        );
    });
});