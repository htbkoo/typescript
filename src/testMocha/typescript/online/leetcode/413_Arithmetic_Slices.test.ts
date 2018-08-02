import * as chai from "chai";

import numberOfArithmeticSlices from "../../../../main/typescript/online/leetcode/413_Arithmetic_Slices";

describe("413. Arithmetic Slices", function () {
    describe('should calculate number of arithmetic slices', function () {
        [
            {A: [], expected: 0},
            {A: [1], expected: 0},
            {A: [1, 2, 3, 4], expected: 3},
            {A: [1, 1, 2, 5, 7], expected: 0},
            {A: [1, 1, 2, 5, 7, 1, 3, 5, 7, 9, 7, 7, 7, 7, 3, -1, -5, -9], expected: 15},
            {A: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], expected: 561},
        ].forEach(({A, expected}) =>
            it(`numberOfArithmeticSlices(${JSON.stringify(A)})=${expected}`, function () {
                // given
                // when
                let actual = numberOfArithmeticSlices(A);

                // then
                chai.expect(actual).to.equal(expected);
            })
        );
    });
});