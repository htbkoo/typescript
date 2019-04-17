import * as chai from "chai";

import isToeplitzMatrix from "../../../../main/typescript/online/leetcode/766_Toeplitz_Matrix";

describe("766. Toeplitz Matrix", function () {
    describe('should return True if and only if the matrix is Toeplitz', function () {
        [
            {
                input: [
                    [1,2,3,4],
                    [5,1,2,3],
                    [9,5,1,2]
                ],
                output: true,
            },
            {
                input: [
                    [1,2],
                    [2,2]
                ],
                output: false
            },
        ].forEach(({input, output}) =>
            it(`isToeplitzMatrix(${JSON.stringify(input)})=${JSON.stringify(output)}`, function () {
                // given
                // when
                const actual = isToeplitzMatrix(input);

                // then
                chai.expect(actual).to.deep.equal(output);
            })
        );
    });
});