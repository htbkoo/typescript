import * as chai from "chai";

import search from "../../../../main/typescript/online/leetcode/704_Binary_Search";

describe("704. Binary Search", function () {
    describe('should return the minimum sum of a falling path through A', function () {
        [
            {input: {numbers: [-1, 0, 3, 5, 9, 12], target: 9}, output: 4},
            {input: {numbers: [-1, 0, 3, 5, 9, 12], target: 2}, output: -1},
        ].forEach(({input, output}) =>
            it(`search(${JSON.stringify(input)})=${JSON.stringify(output)}`, function () {
                // given
                const {numbers, target} = input;
                // when
                const actual = search(numbers, target);

                // then
                chai.expect(actual).to.deep.equal(output);
            })
        );
    });
});