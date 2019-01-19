import * as chai from "chai";

import matrixReshape from "../../../../main/typescript/online/leetcode/566_Reshape_the_Matrix";

describe("566. Reshape the Matrix", function () {
    describe('should reshape the matrix', function () {
        [
            {input: {nums: [[1, 2], [3, 4]], r: 1, c: 4}, expected: [[1, 2, 3, 4]]},
            {input: {nums: [[1, 2], [3, 4], [5, 6]], r: 1, c: 6}, expected: [[1, 2, 3, 4, 5, 6]]},
            {input: {nums: [[1, 2], [3, 4]], r: 4, c: 1}, expected: [[1], [2], [3], [4],]},
            {input: {nums: [[1, 2], [3, 4], [5, 6]], r: 6, c: 1}, expected: [[1], [2], [3], [4], [5], [6],]},
            {input: {nums: [[1, 2], [3, 4], [5, 6]], r: 3, c: 2}, expected: [[1, 2], [3, 4], [5, 6]]},
            {input: {nums: [[1, 2], [3, 4], [5, 6]], r: 2, c: 3}, expected: [[1, 2, 3,], [4, 5, 6],]},
        ].forEach(({input, expected}) =>
            it(`matrixReshape(${JSON.stringify(input.nums)}, ${input.r}, ${input.c})`, function () {
                // given
                const {nums, r, c} = input;

                // when
                let actual = matrixReshape(nums, r, c);

                // then
                chai.expect(actual).to.deep.equal(expected);
            })
        );
    });
});