import * as chai from "chai";

import minFallingPathSum from "../../../../main/typescript/online/leetcode/931_Minimum_Falling_Path_Sum";

describe("931. Minimum Falling Path Sum", function () {
    describe('should return the minimum sum of a falling path through A', function () {
        [
            {input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]], output: 12},
        ].forEach(({input, output}) =>
            it(`minFallingPathSum(${JSON.stringify(input)})=${JSON.stringify(output)}`, function () {
                // given
                // when
                const actual = minFallingPathSum(input);

                // then
                chai.expect(actual).to.deep.equal(output);
            })
        );
    });
});

