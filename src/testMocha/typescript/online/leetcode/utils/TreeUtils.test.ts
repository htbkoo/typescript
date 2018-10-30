import * as chai from "chai";

import {createTree, treeToArray} from "./TreeUtils";

describe("TreeUtils", function () {
    [
        {arr: []},
        {arr: [1]},
        {arr: [1, 2]},
        {arr: [1, 2, 3]},
        {arr: [1, 2, 3, 4]},
        {arr: [1, 2, 3, 4, 5]},
        {arr: [1, 2, 3, 4, 5, 6]},
        {arr: [1, 2, 3, 4, 5, 6, 7]},
        {arr: [1, 2, 3, 4, 5, 6, 7, 8]},
        {arr: [1, 2, null, 4, 5]},
        {arr: [1, 2, null, 4, 5, 6, null, 8, null, 9]},
    ].forEach(testCase =>
        it(`should, for ${JSON.stringify(testCase.arr)} create Tree and convert back to array`, function () {
            // given
            const {arr} = testCase;

            // when
            let tree = createTree(arr);

            // then
            chai.expect(treeToArray(tree)).to.deep.equal(arr);
        })
    );
});